/* DPA formative quiz engine.
 * This browser-side engine accepts SYNTHETIC_TEST_FIXTURE items only.
 * It is not a trusted gradebook and must never be used for credential-bearing scoring.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.DPAQuizEngine = factory();
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var CHAPTER_ID = /^DPA-T\d{2}-CH\d{2}$/;
  var ITEM_ID = /^DPA-T\d{2}-CH\d{2}-Q\d{2}$/;

  function assert(condition, message, code) {
    if (!condition) {
      var error = new Error(message);
      error.code = code || "INVALID_QUIZ_DATA";
      throw error;
    }
  }

  function clone(value) {
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function normalize(items, answerKeys) {
    assert(Array.isArray(items), "Quiz items must be an array.");
    assert(Array.isArray(answerKeys), "Answer keys must be an array.");
    var itemIds = Object.create(null);
    var keyMap = Object.create(null);

    items.forEach(function (item, index) {
      assert(item && typeof item === "object", "Invalid item at index " + index + ".");
      assert(ITEM_ID.test(item.itemId || ""), "Invalid itemId: " + String(item.itemId));
      assert(CHAPTER_ID.test(item.chapterId || ""), "Invalid chapterId for " + item.itemId);
      assert(item.itemId.indexOf(item.chapterId + "-") === 0, "Item/chapter ID mismatch: " + item.itemId);
      assert(!itemIds[item.itemId], "Duplicate itemId: " + item.itemId);
      itemIds[item.itemId] = true;
      assert(item.fixtureStatus === "SYNTHETIC_TEST_FIXTURE", "Only synthetic test fixtures may load in the browser engine.");
      assert(item.type === "single_select", "Unsupported item type: " + String(item.type));
      assert(typeof item.prompt === "string" && item.prompt.trim(), "Missing prompt: " + item.itemId);
      assert(Number.isInteger(item.itemVersion) && item.itemVersion > 0, "Invalid itemVersion: " + item.itemId);
      assert(Number.isInteger(item.maxPoints) && item.maxPoints > 0, "Invalid maxPoints: " + item.itemId);
      assert(Array.isArray(item.learningOutcomeIds) && item.learningOutcomeIds.length > 0, "Missing learning outcome: " + item.itemId);
      assert(Array.isArray(item.options) && item.options.length >= 2, "At least two options required: " + item.itemId);
      var optionIds = Object.create(null);
      item.options.forEach(function (option) {
        assert(option && typeof option.optionId === "string" && option.optionId.trim(), "Invalid option ID: " + item.itemId);
        assert(!optionIds[option.optionId], "Duplicate option ID in " + item.itemId + ": " + option.optionId);
        assert(typeof option.text === "string" && option.text.trim(), "Missing option text: " + item.itemId);
        optionIds[option.optionId] = true;
      });
    });

    answerKeys.forEach(function (key) {
      assert(key && itemIds[key.itemId], "Answer key has no matching item: " + String(key && key.itemId));
      assert(!keyMap[key.itemId], "Duplicate answer key: " + key.itemId);
      var item = items.find(function (candidate) { return candidate.itemId === key.itemId; });
      assert(key.itemVersion === item.itemVersion, "Answer-key version mismatch: " + key.itemId);
      assert(item.options.some(function (option) { return option.optionId === key.correctOptionId; }), "Correct option does not exist: " + key.itemId);
      assert(typeof key.rationale === "string" && key.rationale.trim(), "Missing rationale: " + key.itemId);
      keyMap[key.itemId] = clone(key);
    });

    items.forEach(function (item) {
      assert(!!keyMap[item.itemId], "Missing answer key for synthetic fixture: " + item.itemId);
    });
    answerKeys.forEach(function (key) {
      assert(itemIds[key.itemId], "Orphan answer key: " + key.itemId);
    });

    return { items: clone(items), keyMap: keyMap };
  }

  function createFormativeQuiz(config) {
    config = config || {};
    assert(config.mode === "formative", "Only FORMATIVE mode is supported in this client-side prototype.", "MODE_NOT_SUPPORTED");
    var normalized = normalize(config.items || [], config.answerKeys || []);
    var items = normalized.items;
    var keys = normalized.keyMap;
    var state = items.length ? "READY" : "NOT_AVAILABLE";
    var selected = Object.create(null);
    var result = null;
    var history = [];

    function snapshot() {
      return {
        mode: "FORMATIVE",
        state: state,
        itemCount: items.length,
        selected: clone(selected),
        attemptCount: history.length,
        items: clone(items),
        result: clone(result),
        history: clone(history)
      };
    }

    function start() {
      assert(state === "READY", "Quiz can only start from READY.", "INVALID_STATE");
      state = "IN_PROGRESS";
      selected = Object.create(null);
      result = null;
      return snapshot();
    }

    function select(itemId, optionId) {
      assert(state === "IN_PROGRESS", "Responses can only be changed while a quiz is in progress.", "INVALID_STATE");
      var item = items.find(function (candidate) { return candidate.itemId === itemId; });
      assert(!!item, "Unknown item: " + itemId, "UNKNOWN_ITEM");
      assert(item.options.some(function (option) { return option.optionId === optionId; }), "Unknown option for " + itemId, "UNKNOWN_OPTION");
      selected[itemId] = optionId;
      return snapshot();
    }

    function submit() {
      assert(state === "IN_PROGRESS", "Quiz can only be submitted while IN_PROGRESS.", "INVALID_STATE");
      var unanswered = items.filter(function (item) { return !selected[item.itemId]; }).map(function (item) { return item.itemId; });
      if (unanswered.length) {
        return { submitted: false, code: "UNANSWERED_ITEMS", unansweredItemIds: unanswered, snapshot: snapshot() };
      }

      var rows = items.map(function (item) {
        var key = keys[item.itemId];
        var chosen = selected[item.itemId];
        var correct = chosen === key.correctOptionId;
        var pointsEarned = correct ? item.maxPoints : 0;
        return {
          itemId: item.itemId,
          chapterId: item.chapterId,
          itemVersion: item.itemVersion,
          selectedOptionId: chosen,
          correctOptionId: key.correctOptionId,
          correct: correct,
          pointsEarned: pointsEarned,
          maxPoints: item.maxPoints,
          rationale: key.rationale,
          distractorRationale: correct ? null : ((key.distractorRationales || {})[chosen] || "Review the stated rationale and the learning outcome.")
        };
      });

      var points = rows.reduce(function (sum, row) { return sum + row.pointsEarned; }, 0);
      var maximum = rows.reduce(function (sum, row) { return sum + row.maxPoints; }, 0);
      var attempt = {
        attemptNumber: history.length + 1,
        mode: "FORMATIVE",
        submittedAt: null,
        itemVersions: rows.map(function (row) { return { itemId: row.itemId, itemVersion: row.itemVersion }; }),
        pointsEarned: points,
        maxPoints: maximum,
        percentage: maximum ? Math.round((points / maximum) * 1000) / 10 : 0,
        correctCount: rows.filter(function (row) { return row.correct; }).length,
        totalCount: rows.length,
        answers: rows
      };
      history.push(clone(attempt));
      result = attempt;
      state = "SCORED";
      return { submitted: true, result: clone(result), snapshot: snapshot() };
    }

    function review() {
      assert(state === "SCORED", "Review is available only after scoring.", "INVALID_STATE");
      state = "REVIEWED";
      return snapshot();
    }

    function retry() {
      assert(state === "SCORED" || state === "REVIEWED", "Retry is available after a submitted attempt.", "INVALID_STATE");
      state = "READY";
      selected = Object.create(null);
      result = null;
      return snapshot();
    }

    return Object.freeze({
      start: start,
      select: select,
      submit: submit,
      review: review,
      retry: retry,
      getSnapshot: snapshot
    });
  }

  return Object.freeze({ createFormativeQuiz: createFormativeQuiz });
}));
