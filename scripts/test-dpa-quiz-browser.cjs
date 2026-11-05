"use strict";

const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const AxeBuilder = require("@axe-core/playwright").default;

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1365, height: 900 } });
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") pageErrors.push(message.text());
  });

  try {
    await page.goto("http://127.0.0.1:4173/quiz-engine-prototype.html", { waitUntil: "networkidle" });
    assert.match(await page.title(), /DPA Quiz Engine Sandbox/);
    assert.equal(await page.locator("#quiz-form").isHidden(), true);
    assert.equal(await page.locator(".pill").innerText(), "SYNTHETIC TEST ONLY");

    const initialA11y = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    assert.equal(initialA11y.violations.length, 0,
      "Initial page accessibility violations: " + JSON.stringify(initialA11y.violations.map(v => ({ id:v.id, impact:v.impact, nodes:v.nodes.length }))));

    await page.getByRole("button", { name: "Mulai sandbox quiz" }).click();
    assert.equal(await page.locator("#quiz-form").isVisible(), true);
    assert.equal(await page.locator(".question").count(), 3);
    assert.equal(await page.locator('input[type="radio"]').count(), 12);

    const formA11y = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    assert.equal(formA11y.violations.length, 0,
      "Question-form accessibility violations: " + JSON.stringify(formA11y.violations.map(v => ({ id:v.id, impact:v.impact, nodes:v.nodes.length }))));

    await page.getByRole("button", { name: "Kirim jawaban" }).click();
    assert.match(await page.locator("#form-status").innerText(), /belum dijawab/);
    assert.equal(await page.locator("#result-panel").isHidden(), true);

    await page.locator('input[name="DPA-T10-CH04-Q01"][value="B"]').check();
    await page.locator('input[name="DPA-T10-CH06-Q01"][value="C"]').check();
    await page.locator('input[name="DPA-T10-CH08-Q01"][value="A"]').check();
    assert.match(await page.locator("#progress-label").innerText(), /3 dari 3/);
    assert.equal(await page.locator('[role="progressbar"]').getAttribute("aria-valuenow"), "3");

    await page.getByRole("button", { name: "Kirim jawaban" }).click();
    assert.equal(await page.locator("#result-panel").isVisible(), true);
    assert.match(await page.locator("#result-score").innerText(), /3 \/ 3/);
    assert.match(await page.locator("#result-score").innerText(), /100\.0%/);

    const resultA11y = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    assert.equal(resultA11y.violations.length, 0,
      "Result page accessibility violations: " + JSON.stringify(resultA11y.violations.map(v => ({ id:v.id, impact:v.impact, nodes:v.nodes.length }))));

    await page.getByRole("button", { name: "Lihat pembahasan" }).click();
    assert.equal(await page.locator("#review-panel").isVisible(), true);
    assert.equal(await page.locator(".review-item").count(), 3);
    assert.equal(await page.getByRole("button", { name: "Lihat pembahasan" }).isDisabled(), true);

    await page.getByRole("button", { name: "Coba lagi" }).click();
    assert.equal(await page.locator("#quiz-form").isVisible(), true);
    assert.equal(await page.locator('input[type="radio"]:checked').count(), 0);
    assert.equal(await page.locator("#review-panel").isHidden(), true);

    await page.setViewportSize({ width: 390, height: 844 });
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth
    }));
    assert.ok(dimensions.content <= dimensions.viewport,
      "Horizontal overflow on mobile: " + JSON.stringify(dimensions));

    await page.locator('input[name="DPA-T10-CH04-Q01"][value="A"]').focus();
    await page.keyboard.press("ArrowDown");
    assert.equal(await page.locator('input[name="DPA-T10-CH04-Q01"]:checked').inputValue(), "B",
      "Radio group keyboard arrow navigation did not select the next option.");

    assert.deepEqual(pageErrors, [], "Browser console/page errors: " + pageErrors.join(" | "));
    console.log("PASS: Playwright browser smoke test");
    console.log("PASS: WCAG 2.2-targeted axe checks on initial, question and result states");
    console.log("PASS: unanswered guard, progress, deterministic result, review and retry");
    console.log("PASS: native radio keyboard navigation and 390px mobile horizontal-overflow check");
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
