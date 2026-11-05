/* Synthetic-only fixture bank for local formative-engine tests.
 * Never reuse these browser-shipped answer keys for real assessments.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.DPAQuizFixtures = factory();
}(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  var items = [
    {
      schemaVersion: "1.0",
      itemId: "DPA-T10-CH04-Q01",
      chapterId: "DPA-T10-CH04",
      learningOutcomeIds: ["T10-CH04-LO-DEMO-01"],
      itemVersion: 1,
      type: "single_select",
      difficulty: "intermediate",
      prompt: "Dalam tabel event-level, apa langkah paling aman sebelum menghitung conversion rate per session?",
      options: [
        { optionId: "A", text: "Menghitung setiap baris event sebagai satu session." },
        { optionId: "B", text: "Memastikan grain data dan menghitung denominator dari session ID unik sesuai definisi window." },
        { optionId: "C", text: "Menghapus event yang tidak menghasilkan purchase agar rate lebih stabil." },
        { optionId: "D", text: "Mencampur session web dan app tanpa aturan identity atau deduplication." }
      ],
      maxPoints: 1,
      fixtureStatus: "SYNTHETIC_TEST_FIXTURE",
      reviewStatus: "NOT_APPROVED_TEST_ONLY",
      contentVersion: "DPA-QUIZ-SYNTHETIC-2026-11-05-v1"
    },
    {
      schemaVersion: "1.0",
      itemId: "DPA-T10-CH06-Q01",
      chapterId: "DPA-T10-CH06",
      learningOutcomeIds: ["T10-CH06-LO-DEMO-01"],
      itemVersion: 1,
      type: "single_select",
      difficulty: "intermediate",
      prompt: "Interpretasi mana yang paling tepat untuk confidence interval 95% dalam kerangka frequentist?",
      options: [
        { optionId: "A", text: "Ada probabilitas 95% bahwa nilai parameter tetap berada di interval yang sudah dihitung ini." },
        { optionId: "B", text: "95% responden dalam sampel berada di dalam interval tersebut." },
        { optionId: "C", text: "Jika prosedur sampling diulang berkali-kali, sekitar 95% interval yang dibentuk dengan cara ini akan mencakup parameter tetap." },
        { optionId: "D", text: "Efek yang diamati pasti signifikan secara bisnis." }
      ],
      maxPoints: 1,
      fixtureStatus: "SYNTHETIC_TEST_FIXTURE",
      reviewStatus: "NOT_APPROVED_TEST_ONLY",
      contentVersion: "DPA-QUIZ-SYNTHETIC-2026-11-05-v1"
    },
    {
      schemaVersion: "1.0",
      itemId: "DPA-T10-CH08-Q01",
      chapterId: "DPA-T10-CH08",
      learningOutcomeIds: ["T10-CH08-LO-DEMO-01"],
      itemVersion: 1,
      type: "single_select",
      difficulty: "intermediate",
      prompt: "Desain mana yang paling kuat untuk mengestimasi incremental lift campaign ketika randomisasi pada tingkat individu memungkinkan?",
      options: [
        { optionId: "A", text: "Randomized treatment dan holdout/control dengan exposure, outcome, window, serta guardrail didefinisikan sebelum tes." },
        { optionId: "B", text: "Membandingkan conversion platform setelah campaign dengan bulan sebelumnya tanpa kontrol perubahan lain." },
        { optionId: "C", text: "Menganggap semua conversion yang memiliki last-click campaign sebagai incremental." },
        { optionId: "D", text: "Memilih hanya audience yang sudah melakukan purchase untuk kelompok treatment." }
      ],
      maxPoints: 1,
      fixtureStatus: "SYNTHETIC_TEST_FIXTURE",
      reviewStatus: "NOT_APPROVED_TEST_ONLY",
      contentVersion: "DPA-QUIZ-SYNTHETIC-2026-11-05-v1"
    }
  ];

  var answerKeys = [
    {
      itemId: "DPA-T10-CH04-Q01",
      itemVersion: 1,
      correctOptionId: "B",
      rationale: "Conversion rate membutuhkan denominator yang sesuai dengan unit analisis. Pada pertanyaan per-session, tentukan definisi session dan hitung session ID unik; audit pula deduplikasi, timezone, dan window.",
      distractorRationales: {
        A: "Baris event tidak identik dengan session; satu session dapat menghasilkan banyak event.",
        C: "Menghapus session tanpa purchase akan menghilangkan denominator dan membiasakan rate ke atas.",
        D: "Penggabungan web/app memerlukan definisi identity dan deduplication agar satu perilaku tidak dihitung dua kali."
      }
    },
    {
      itemId: "DPA-T10-CH06-Q01",
      itemVersion: 1,
      correctOptionId: "C",
      rationale: "Dalam interpretasi frequentist, tingkat kepercayaan adalah sifat jangka panjang prosedur pembentukan interval: sekitar 95% interval yang dibentuk dengan prosedur tersebut akan mencakup parameter tetap jika asumsi sampling terpenuhi.",
      distractorRationales: {
        A: "Pernyataan probabilitas parameter berada di interval yang sudah dihitung bukan interpretasi frequentist standar.",
        B: "Confidence interval bukan rentang yang memuat 95% responden.",
        D: "Signifikansi statistik dan arti bisnis adalah pertanyaan yang berbeda; interval tidak menjamin dampak bisnis."
      }
    },
    {
      itemId: "DPA-T10-CH08-Q01",
      itemVersion: 1,
      correctOptionId: "A",
      rationale: "Randomisasi dan holdout/control yang didefinisikan sebelumnya membantu membangun counterfactual. Exposure, outcome, window, unit randomisasi, dan guardrail harus ditetapkan serta diuji sebelum eksperimen berjalan.",
      distractorRationales: {
        B: "Perbandingan before-after tanpa kontrol rentan terhadap seasonality, tren, perubahan harga, dan faktor lain.",
        C: "Attribution mengalokasikan kredit menurut aturan; itu tidak dengan sendirinya mengidentifikasi incrementality.",
        D: "Pemilihan berdasarkan outcome yang sudah terjadi menimbulkan selection bias dan merusak randomisasi."
      }
    }
  ];

  return Object.freeze({
    label: "SYNTHETIC TEST FIXTURE — NOT FOR LEARNER ASSESSMENT",
    items: items,
    answerKeys: answerKeys
  });
}));
