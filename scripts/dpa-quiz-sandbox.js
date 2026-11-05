(function () {
  "use strict";
  var engine;
  var fixtures = window.DPAQuizFixtures;
  var byId = function (id) { return document.getElementById(id); };
  var escapeHtml = function (value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char];
    });
  };

  function newEngine() {
    if (!window.DPAQuizEngine || !fixtures) throw new Error("Quiz engine or test fixtures did not load.");
    if (fixtures.label !== "SYNTHETIC TEST FIXTURE — NOT FOR LEARNER ASSESSMENT") {
      throw new Error("Fixture bank is not explicitly marked as synthetic test data.");
    }
    return window.DPAQuizEngine.createFormativeQuiz({
      mode: "formative",
      items: fixtures.items,
      answerKeys: fixtures.answerKeys
    });
  }

  function updateProgress(snapshot) {
    var count = Object.keys(snapshot.selected).length;
    byId("progress-label").textContent = count + " dari " + snapshot.itemCount + " dijawab";
    var progress = document.querySelector('[role="progressbar"]');
    progress.setAttribute("aria-valuemax", String(snapshot.itemCount));
    progress.setAttribute("aria-valuenow", String(count));
    byId("progress-bar").style.width = (snapshot.itemCount ? count / snapshot.itemCount * 100 : 0) + "%";
  }

  function renderQuestions(snapshot) {
    byId("question-list").innerHTML = snapshot.items.map(function (item, index) {
      var options = item.options.map(function (option) {
        var checked = snapshot.selected[item.itemId] === option.optionId ? " checked" : "";
        return '<label class="option"><input type="radio" name="' + escapeHtml(item.itemId) + '" value="' + escapeHtml(option.optionId) + '"' + checked + '> <span>' + escapeHtml(option.text) + '</span></label>';
      }).join("");
      return '<div class="question"><fieldset aria-describedby="meta-' + escapeHtml(item.itemId) + '"><legend><span class="qmeta" id="meta-' + escapeHtml(item.itemId) + '">Pertanyaan ' + (index + 1) + ' dari ' + snapshot.itemCount + ' · ' + escapeHtml(item.chapterId) + '</span>' + escapeHtml(item.prompt) + '</legend>' + options + '</fieldset></div>';
    }).join("");
    updateProgress(snapshot);
  }

  function showForm() {
    byId("intro").hidden = true;
    byId("result-panel").hidden = true;
    byId("review-panel").hidden = true;
    byId("quiz-form").hidden = false;
    byId("form-status").textContent = "";
    byId("form-status").className = "status";
    renderQuestions(engine.getSnapshot());
  }

  byId("start-button").addEventListener("click", function () {
    try {
      engine = newEngine();
      var snapshot = engine.getSnapshot();
      if (snapshot.state === "NOT_AVAILABLE") {
        byId("intro").hidden = true;
        byId("unavailable-panel").hidden = false;
        return;
      }
      engine.start();
      showForm();
      var first = byId("question-list").querySelector("fieldset");
      if (first) first.querySelector("input").focus();
    } catch (error) {
      byId("global-status").textContent = "Quiz gagal dimuat: " + error.message;
      byId("global-status").className = "status error";
    }
  });

  byId("quiz-form").addEventListener("change", function (event) {
    var input = event.target;
    if (!input || input.type !== "radio") return;
    try {
      engine.select(input.name, input.value);
      updateProgress(engine.getSnapshot());
      byId("form-status").textContent = "";
      byId("form-status").className = "status";
    } catch (error) {
      byId("form-status").textContent = "Jawaban tidak dapat dipilih: " + error.message;
      byId("form-status").className = "status error";
    }
  });

  byId("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var submission = engine.submit();
    if (!submission.submitted) {
      byId("form-status").textContent = "Masih ada " + submission.unansweredItemIds.length + " pertanyaan yang belum dijawab. Lengkapi sebelum mengirim.";
      byId("form-status").className = "status error";
      var unanswered = submission.unansweredItemIds[0];
      var firstUnanswered = byId("question-list").querySelector('input[name="' + unanswered + '"]');
      if (firstUnanswered) firstUnanswered.focus();
      return;
    }
    var result = submission.result;
    byId("quiz-form").hidden = true;
    byId("result-panel").hidden = false;
    byId("result-score").textContent = result.pointsEarned + " / " + result.maxPoints + " · " + result.percentage.toFixed(1) + "%";
    byId("result-description").textContent = result.correctCount + " dari " + result.totalCount + " jawaban sesuai dengan kunci fixture sintetis. Tidak ada status lulus/gagal.";
    byId("result-title").focus();
  });

  byId("review-button").addEventListener("click", function () {
    try {
      engine.review();
      var snapshot = engine.getSnapshot();
      var keyMap = Object.create(null);
      fixtures.answerKeys.forEach(function (key) { keyMap[key.itemId] = key; });
      byId("review-panel").innerHTML = snapshot.result.answers.map(function (answer, index) {
        var item = snapshot.items.find(function (entry) { return entry.itemId === answer.itemId; });
        var key = keyMap[answer.itemId];
        var selectedText = item.options.find(function (option) { return option.optionId === answer.selectedOptionId; }).text;
        var correctText = item.options.find(function (option) { return option.optionId === answer.correctOptionId; }).text;
        var detail = answer.correct ? '<p class="correct">Jawaban sesuai fixture.</p>' : '<p class="incorrect">Jawaban belum sesuai fixture.</p><p><b>Pilihan lu:</b> ' + escapeHtml(selectedText) + '</p><p><b>Jawaban kunci fixture:</b> ' + escapeHtml(correctText) + '</p><p>' + escapeHtml(answer.distractorRationale) + '</p>';
        return '<article class="review-item"><h3>' + (index + 1) + '. ' + escapeHtml(item.prompt) + '</h3>' + detail + '<details><summary>Lihat rationale</summary><p>' + escapeHtml(answer.rationale) + '</p></details></article>';
      }).join("");
      byId("review-panel").hidden = false;
      byId("review-button").disabled = true;
      byId("review-panel").setAttribute("tabindex", "-1");
      byId("review-panel").focus();
    } catch (error) {
      byId("global-status").textContent = "Pembahasan gagal dibuka: " + error.message;
      byId("global-status").className = "status error";
    }
  });

  byId("retry-button").addEventListener("click", function () {
    try {
      engine.retry();
      byId("review-button").disabled = false;
      showForm();
      var first = byId("question-list").querySelector("fieldset");
      if (first) first.querySelector("input").focus();
    } catch (error) {
      byId("global-status").textContent = "Retry gagal: " + error.message;
      byId("global-status").className = "status error";
    }
  });

  byId("reset-button").addEventListener("click", function () {
    engine = newEngine();
    engine.start();
    showForm();
    var first = byId("question-list").querySelector("fieldset");
    if (first) first.querySelector("input").focus();
  });
}());
