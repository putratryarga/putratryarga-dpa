const assert = require("node:assert/strict");
const { chromium } = require("playwright");

const BASE_URL = process.env.DPA_TEST_URL || "http://127.0.0.1:4173/index.html";
const EXPECTED_CORE = 169;
const EXPECTED_FOUNDATION = 6;
const EXPECTED_TOTAL = EXPECTED_CORE + EXPECTED_FOUNDATION;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  try {
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.waitForFunction(
      (expected) => document.querySelectorAll("[data-track-box] details.week .chapter-study").length === expected,
      EXPECTED_TOTAL,
      { timeout: 15000 }
    );

    const audit = await page.evaluate(() => {
      const boxes = [...document.querySelectorAll("[data-track-box]")];
      const chapters = [...document.querySelectorAll("[data-track-box] details.week")];
      const core = chapters.filter((chapter) => chapter.dataset.chapterId);
      const foundation = chapters.filter((chapter) => !chapter.dataset.chapterId);
      const rows = chapters.map((chapter) => {
        const material = chapter.querySelector(".chapter-study");
        const title = material?.querySelector(".chapter-study-title h4")?.textContent.trim() || "";
        const sectionText = (label) => {
          const detail = [...(material?.querySelectorAll("details.lesson-fold") || [])].find((node) => node.querySelector("summary")?.textContent.includes(label));
          return detail?.querySelector(".lesson-fold-body")?.textContent.trim() || "";
        };
        const concept = sectionText("Penjelasan inti");
        const example = sectionText("Contoh kasus");
        const practice = material?.querySelector(".chapter-deliverable")?.textContent.trim() || "";
        const questions = material?.querySelectorAll(".lesson-check-list > li").length || 0;
        const steps = material?.querySelectorAll(".lesson-topic-list > li").length || 0;
        const resourceNodes = [...(material?.querySelectorAll(".chapter-source-list .chapter-resource-item a") || [])];
        const resources = resourceNodes.length;
        const resourceHrefs = resourceNodes.map((link) => link.getAttribute("href") || "");
        const emptySource = Boolean(material?.querySelector(".source-empty"));
        return {
          id: chapter.dataset.chapterId || "COMMON_FOUNDATION",
          title,
          conceptChars: concept.length,
          exampleChars: example.length,
          practiceChars: practice.length,
          questions,
          steps,
          resources,
          resourceHrefs,
          emptySource,
          hasMaterial: Boolean(material)
        };
      });
      const perTrack = boxes.map((box) => ({
        track: box.dataset.trackBox,
        chapters: box.querySelectorAll("details.week").length,
        rendered: box.querySelectorAll("details.week .chapter-study").length
      }));
      return {
        totalPanels: chapters.length,
        corePanels: core.length,
        foundationPanels: foundation.length,
        rows,
        perTrack
      };
    });

    assert.equal(audit.totalPanels, EXPECTED_TOTAL, "Every core/foundation subchapter must render a material panel.");
    assert.equal(audit.corePanels, EXPECTED_CORE, "Expected 169 core chapters.");
    assert.equal(audit.foundationPanels, EXPECTED_FOUNDATION, "Expected 6 Common Foundation chapters.");

    const missing = audit.rows.filter((row) =>
      !row.hasMaterial || !row.title || row.conceptChars < 80 || row.exampleChars < 80 ||
      row.practiceChars < 20 || row.steps < 1 || row.questions < 1
    );
    assert.deepEqual(missing, [], "Missing or blank learning material panels.");

    const noSources = audit.rows.filter((row) => row.emptySource || row.resources < 1);
    assert.deepEqual(noSources, [], "Every chapter must expose at least one mapped source.");

    const invalidResourceLinks = audit.rows.flatMap((row) => row.resourceHrefs)
      .filter((href) => !/^https?:\/\//i.test(href));
    assert.deepEqual(invalidResourceLinks, [], "Mapped learning resources must use explicit HTTP(S) URLs.");

    const ids = audit.rows.filter((row) => row.id !== "COMMON_FOUNDATION").map((row) => row.id);
    assert.equal(new Set(ids).size, EXPECTED_CORE, "Core chapter IDs must be unique.");

    // Open every role at least once and verify its selected chapter panel is visible.
    const roleIds = ["fullstack", "connection", "media", "paidsearch", "paidsocial",
      "programmatic", "retail", "investment", "adops", "analytics", "seo",
      "crm", "content", "kol", "affiliate", "community"];

    for (const role of roleIds) {
      const pickerButton = page.locator(`[data-role-card="${role}"] .role-pick`);
      if (!(await pickerButton.isVisible())) {
        const openPicker = page.locator("[data-role-picker-open]").first();
        if (await openPicker.count()) await openPicker.click();
      }
      await pickerButton.click();
      const activeBox = page.locator(`[data-track-box="${role}"].on`);
      await activeBox.waitFor({ state: "visible" });
      const firstChapter = activeBox.locator("details.week").first();
      await firstChapter.locator(":scope > summary").click();
      const panel = firstChapter.locator(".chapter-study");
      await panel.waitFor({ state: "visible" });
      const visible = await panel.evaluate((element) => {
        const style = window.getComputedStyle(element);
        return style.display !== "none" && style.visibility !== "hidden" &&
          element.getBoundingClientRect().height > 0;
      });
      assert.equal(visible, true, `Material panel did not become visible for role ${role}.`);
    }

    // Common Foundation is shared by all 16 roles and must render independently.
    const foundation = page.locator("#foundationFold");
    if (!(await foundation.evaluate((element) => element.open))) {
      await foundation.locator(":scope > summary").click();
    }
    const firstFoundationChapter = page.locator('[data-track-box="cf"] details.week').first();
    await firstFoundationChapter.locator(":scope > summary").click();
    await firstFoundationChapter.locator(".chapter-study").waitFor({ state: "visible" });

    // Mobile smoke test: viewport fit, Paid Social role switch, and visible lesson content.
    await page.setViewportSize({ width: 390, height: 844 });
    const mobileLayout = await page.evaluate(() => ({
      viewportWidth: window.innerWidth,
      documentWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)
    }));
    assert.ok(
      mobileLayout.documentWidth <= mobileLayout.viewportWidth + 1,
      `Horizontal overflow on mobile: ${JSON.stringify(mobileLayout)}`
    );

    const paidSocialPicker = page.locator('[data-role-card="paidsocial"] .role-pick');
    if (!(await paidSocialPicker.isVisible())) {
      await page.locator("[data-role-picker-open]").first().click();
    }
    await paidSocialPicker.click();
    const paidSocialBox = page.locator('[data-track-box="paidsocial"].on');
    await paidSocialBox.waitFor({ state: "visible" });
    const paidSocialFirstChapter = paidSocialBox.locator("details.week").first();
    const paidSocialIsOpen = await paidSocialFirstChapter.evaluate((element) => element.open);
    if (!paidSocialIsOpen) {
      await paidSocialFirstChapter.locator(":scope > summary").click();
    }
    const paidSocialPanel = paidSocialFirstChapter.locator(".chapter-study");
    await paidSocialPanel.waitFor({ state: "visible" });
    const mobilePanelBounds = await paidSocialPanel.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      return {
        visible: style.display !== "none" && style.visibility !== "hidden" && rect.height > 0,
        right: rect.right,
        width: rect.width,
        viewportWidth: window.innerWidth
      };
    });
    assert.equal(mobilePanelBounds.visible, true, "Paid Social lesson panel must be visible on mobile.");
    assert.ok(mobilePanelBounds.right <= mobilePanelBounds.viewportWidth + 1,
      `Paid Social panel overflows mobile viewport: ${JSON.stringify(mobilePanelBounds)}`);

    assert.deepEqual(pageErrors, [], "Browser runtime errors were raised during page load or role switching.");
    console.log(JSON.stringify({
      result: "PASS",
      coreChapters: audit.corePanels,
      commonFoundationChapters: audit.foundationPanels,
      totalRenderedPanels: audit.totalPanels,
      rolesOpened: roleIds.length,
      sourceCoverage: "all panels have valid HTTP(S) links",
      mobileViewport: mobileLayout,
      mobilePaidSocialPanel: mobilePanelBounds,
      runtimeErrors: pageErrors.length,
      perTrack: audit.perTrack
    }, null, 2));
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
