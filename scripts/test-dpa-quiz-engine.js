#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const engineModule = require("./dpa-quiz-engine.js");
const fixtures = require("./dpa-quiz-synthetic-fixtures.js");

function fresh() {
  return engineModule.createFormativeQuiz({
    mode: "formative",
    items: fixtures.items,
    answerKeys: fixtures.answerKeys
  });
}

function expectCode(fn, code) {
  assert.throws(fn, (error) => error && error.code === code, "Expected error code " + code);
}

function run() {
  assert.equal(fixtures.label, "SYNTHETIC TEST FIXTURE — NOT FOR LEARNER ASSESSMENT");
  assert.equal(fixtures.items.length, 3);
  assert.equal(fixtures.answerKeys.length, 3);

  expectCode(() => engineModule.createFormativeQuiz({
    mode: "scored", items: fixtures.items, answerKeys: fixtures.answerKeys
  }), "MODE_NOT_SUPPORTED");

  const empty = engineModule.createFormativeQuiz({ mode: "formative", items: [], answerKeys: [] });
  assert.equal(empty.getSnapshot().state, "NOT_AVAILABLE");
  assert.equal(empty.getSnapshot().itemCount, 0);
  expectCode(() => empty.start(), "INVALID_STATE");

  const quiz = fresh();
  assert.equal(quiz.getSnapshot().state, "READY");
  assert.equal(quiz.getSnapshot().mode, "FORMATIVE");
  quiz.start();
  assert.equal(quiz.getSnapshot().state, "IN_PROGRESS");

  const ids = fixtures.items.map((item) => item.itemId);
  const blocked = quiz.submit();
  assert.equal(blocked.submitted, false);
  assert.equal(blocked.code, "UNANSWERED_ITEMS");
  assert.deepEqual(blocked.unansweredItemIds, ids);
  assert.equal(quiz.getSnapshot().state, "IN_PROGRESS");

  expectCode(() => quiz.select(ids[0], "UNKNOWN"), "UNKNOWN_OPTION");
  expectCode(() => quiz.select("DPA-T10-CH01-Q01", "A"), "UNKNOWN_ITEM");

  quiz.select(ids[0], "B");
  quiz.select(ids[1], "C");
  quiz.select(ids[2], "B"); // Deliberately incorrect for the third item.
  assert.equal(Object.keys(quiz.getSnapshot().selected).length, 3);

  const submitted = quiz.submit();
  assert.equal(submitted.submitted, true);
  assert.equal(submitted.result.pointsEarned, 2);
  assert.equal(submitted.result.maxPoints, 3);
  assert.equal(submitted.result.correctCount, 2);
  assert.equal(submitted.result.totalCount, 3);
  assert.equal(submitted.result.percentage, 66.7);
  assert.equal(submitted.result.answers[2].correct, false);
  assert.match(submitted.result.answers[2].distractorRationale, /before-after/);
  assert.equal(submitted.result.itemVersions.length, 3);
  assert.equal(quiz.getSnapshot().state, "SCORED");
  expectCode(() => quiz.select(ids[0], "A"), "INVALID_STATE");
  expectCode(() => quiz.submit(), "INVALID_STATE");

  quiz.review();
  assert.equal(quiz.getSnapshot().state, "REVIEWED");
  quiz.retry();
  assert.equal(quiz.getSnapshot().state, "READY");
  assert.equal(quiz.getSnapshot().attemptCount, 1);
  assert.deepEqual(quiz.getSnapshot().selected, {});

  quiz.start();
  fixtures.items.forEach((item, index) => {
    const key = fixtures.answerKeys[index];
    quiz.select(item.itemId, key.correctOptionId);
  });
  const second = quiz.submit();
  assert.equal(second.result.percentage, 100);
  assert.equal(second.result.attemptNumber, 2);
  assert.equal(quiz.getSnapshot().history.length, 2);

  const snapshot = quiz.getSnapshot();
  snapshot.items[0].options[0].text = "MUTATED";
  snapshot.history[0].answers[0].correct = false;
  assert.notEqual(quiz.getSnapshot().items[0].options[0].text, "MUTATED");
  assert.equal(quiz.getSnapshot().history[0].answers[0].correct, true);

  const nonSynthetic = fixtures.items.map((item) => ({ ...item }));
  nonSynthetic[0].fixtureStatus = "APPROVED";
  expectCode(() => engineModule.createFormativeQuiz({
    mode: "formative", items: nonSynthetic, answerKeys: fixtures.answerKeys
  }), "INVALID_QUIZ_DATA");

  const duplicate = [fixtures.items[0], { ...fixtures.items[0] }];
  expectCode(() => engineModule.createFormativeQuiz({
    mode: "formative", items: duplicate, answerKeys: [fixtures.answerKeys[0]]
  }), "INVALID_QUIZ_DATA");

  const wrongVersion = fixtures.answerKeys.map((key) => ({ ...key }));
  wrongVersion[0].itemVersion = 2;
  expectCode(() => engineModule.createFormativeQuiz({
    mode: "formative", items: fixtures.items, answerKeys: wrongVersion
  }), "INVALID_QUIZ_DATA");

  console.log("PASS: DPA formative quiz engine tests");
  console.log("- synthetic-only item gating");
  console.log("- unsupported summative mode rejection");
  console.log("- empty bank and invalid-state handling");
  console.log("- schema, ID, duplicate, option and key-version validation");
  console.log("- unanswered guard and deterministic scoring");
  console.log("- rationale feedback, review, retry and attempt history");
  console.log("- snapshot mutation isolation");
}

run();
