const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const BASE_URL = process.env.DPA_TEST_URL || "http://127.0.0.1:4173/index.html";
const EXPECTED_CORE = 169;
const EXPECTED_FOUNDATION = 6;
const EXPECTED_TOTAL = EXPECTED_CORE + EXPECTED_FOUNDATION;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const pageErrors = [];
  const consoleErrors = [];
  const requestFailures = [];
  const httpFailures = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("requestfailed", (request) => requestFailures.push({
    url: request.url(),
    error: request.failure()?.errorText || "unknown"
  }));
  page.on("response", (response) => {
    if (response.status() >= 400) httpFailures.push({ url: response.url(), status: response.status() });
  });

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
      const foundation = chapters.filter((chapter) => chapter.closest('[data-track-box="cf"]'));
      const core = chapters.filter((chapter) => !chapter.closest('[data-track-box="cf"]'));
      const guideRegistry = window.DPA_GUIDE_BY_CHAPTER || {};
      const chapterCredentialMap = window.DPA_CHAPTER_CREDENTIAL_MAP || {};
      const guideRegistryIds = Object.keys(guideRegistry);
      const coreIds = core.map((chapter) => chapter.dataset.chapterId);
      const missingGuideIds = coreIds.filter((id) => !guideRegistry[id] || guideRegistry[id].chapterId !== id);
      const orphanGuideIds = guideRegistryIds.filter((id) => !coreIds.includes(id));
      const rows = chapters.map((chapter) => {
        const material = chapter.querySelector(".chapter-study");
        const registeredGuide = chapter.dataset.chapterId ? guideRegistry[chapter.dataset.chapterId] : null;
        const lessonFoldBodies = [...(material?.querySelectorAll("details.lesson-fold .lesson-fold-body") || [])];
        const emptyLessonFolds = lessonFoldBodies.filter((body) => !body.textContent.trim()).length;
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
        const milestoneNodes = [...(material?.querySelectorAll(".chapter-milestone") || [])];
        const earnMilestone = material?.querySelector('[data-milestone="earn"]');
        const credentialCards = [...(earnMilestone?.querySelectorAll(".credential-route-card") || [])];
        const credentialRouteHrefs = credentialCards.flatMap((card) => [...card.querySelectorAll("a[data-credential-url]")])
          .map((link) => link.getAttribute("href") || "");
        const fallbackEarn = Boolean(earnMilestone?.querySelector(".chapter-earn-empty"));
        const skillRecognition = Boolean(earnMilestone?.querySelector(".chapter-skill-recognition"));
        const masteryText = material?.querySelector('[data-milestone="master"]')?.textContent || "";
        const foundationCredentialMap = window.DPA_FOUNDATION_CREDENTIAL_MAP || {};
        const mappedRouteIds = chapter.dataset.chapterId ? (foundationCredentialMap[chapter.dataset.chapterId] || chapterCredentialMap[chapter.dataset.chapterId] || []) : [];
        const learningResourceNodes = [...(material?.querySelectorAll(".chapter-source-list .chapter-resource-item a") || [])];
        const learningResourceHrefs = learningResourceNodes.map((link) => link.getAttribute("href") || "");
        const resourceNodes = [...(material?.querySelectorAll(".chapter-source-list .chapter-resource-item a, .credential-route-card a[data-credential-url]") || [])];
        const resources = resourceNodes.length;
        const resourceHrefs = resourceNodes.map((link) => link.getAttribute("href") || "");
        const uniqueResourceHrefs = [...new Set(resourceHrefs)];
        const uniqueResources = uniqueResourceHrefs.length;
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
          uniqueResources,
          resourceHrefs,
          learningResourceHrefs,
          credentialRouteHrefs,
          milestoneCount: milestoneNodes.length,
          earnCardCount: credentialCards.length,
          fallbackEarn,
          skillRecognition,
          masterySelfReviewOnly: /self-review|pemeriksaan mandiri/i.test(masteryText),
          isFoundation: Boolean(chapter.closest('[data-track-box="cf"]')),
          mappedCredentialRouteCount: mappedRouteIds.length,
          emptySource,
          lessonFoldBodies: lessonFoldBodies.length,
          emptyLessonFolds,
          hasRegisteredGuide: Boolean(registeredGuide && registeredGuide.chapterId === chapter.dataset.chapterId),
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
        guideRegistryCount: guideRegistryIds.length,
        missingGuideIds,
        orphanGuideIds,
        rows,
        perTrack
      };
    });

    assert.equal(audit.totalPanels, EXPECTED_TOTAL, "Every core/foundation subchapter must render a material panel.");
    assert.equal(audit.corePanels, EXPECTED_CORE, "Expected 169 core chapters.");
    assert.equal(audit.foundationPanels, EXPECTED_FOUNDATION, "Expected 6 Common Foundation chapters.");
    assert.equal(audit.guideRegistryCount, EXPECTED_CORE, "The guide registry must contain exactly 169 core guides.");
    assert.deepEqual(audit.missingGuideIds, [], "Every core chapter must resolve to the guide with the same chapter ID.");
    assert.deepEqual(audit.orphanGuideIds, [], "The guide registry must not contain orphan chapter IDs.");

    const missing = audit.rows.filter((row) =>
      !row.hasMaterial || !row.title || row.conceptChars < 80 || row.exampleChars < 80 ||
      row.practiceChars < 20 || row.steps < 1 || row.questions < 1 || row.uniqueResources < 2 ||
      row.milestoneCount !== 4 || row.mappedCredentialRouteCount > 3 || row.earnCardCount !== row.mappedCredentialRouteCount ||
      (row.mappedCredentialRouteCount === 0 && !row.fallbackEarn) ||
      row.skillRecognition || !row.masterySelfReviewOnly ||
      (!row.isFoundation && !row.hasRegisteredGuide) ||
      row.lessonFoldBodies < 6 || row.emptyLessonFolds > 0
    );
    assert.deepEqual(missing, [], "Missing or blank learning material panels.");

    const noSources = audit.rows.filter((row) => row.emptySource || row.uniqueResources < 2);
    assert.deepEqual(noSources, [], "Every chapter must expose at least two unique mapped learning sources.");

    async function assertRoleCardsDoNotOverlap(label) {
      const layout = await page.locator("[data-role-card]").evaluateAll((cards) => {
        const visible = cards.map((card) => {
          const rect = card.getBoundingClientRect();
          return { id: card.dataset.roleCard, left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom, width: rect.width, height: rect.height };
        }).filter((rect) => rect.width > 0 && rect.height > 0);
        const overlaps = [];
        for (let i = 0; i < visible.length; i++) {
          for (let j = i + 1; j < visible.length; j++) {
            const horizontal = Math.min(visible[i].right, visible[j].right) - Math.max(visible[i].left, visible[j].left);
            const vertical = Math.min(visible[i].bottom, visible[j].bottom) - Math.max(visible[i].top, visible[j].top);
            if (horizontal > 1 && vertical > 1) overlaps.push([visible[i].id, visible[j].id]);
          }
        }
        return { visibleCards: visible.length, overlaps };
      });
      assert.equal(layout.visibleCards, 16, label + ": expected all 16 role cards to be visible.");
      assert.deepEqual(layout.overlaps, [], label + ": role cards must not overlap.");
      return layout;
    }

    const desktopRolePicker = page.locator('[data-role-card="fullstack"] .role-pick');
    if (!(await desktopRolePicker.isVisible())) {
      await page.locator("[data-role-picker-open]").first().click();
    }
    const desktopRoleCardLayout = await assertRoleCardsDoNotOverlap("Desktop role picker");
    const artifactDir = process.env.DPA_QA_ARTIFACT_DIR || "qa-out";
    fs.mkdirSync(artifactDir, { recursive: true });
    await page.locator("#sec-role").screenshot({ path: path.join(artifactDir, "desktop-role-picker.png") });

    const invalidResourceLinks = audit.rows.flatMap((row) => row.resourceHrefs)
      .filter((href) => !/^https?:\/\//i.test(href));
    assert.deepEqual(invalidResourceLinks, [], "Mapped learning resources must use explicit HTTP(S) URLs.");

    const ids = audit.rows.map((row) => row.id);
    assert.equal(new Set(ids).size, EXPECTED_TOTAL, "All core and Common Foundation chapter IDs must be unique.");
    const cf2 = audit.rows.find((row) => row.id === "DPA-CF-CH02");
    assert.ok(cf2 && cf2.earnCardCount === 1, "CF2 must expose the Indonesia-relevant HubSpot Inbound credential without elevating the Forage simulation certificate into Earn.");
    assert.ok(cf2.credentialRouteHrefs.some((href) => href.includes("academy.hubspot.com/courses/inbound")), "HubSpot Inbound must be clickable in CF2 Earn.");
    assert.ok(!cf2.credentialRouteHrefs.some((href) => href.includes("theforage.com")), "Forage simulation completion must remain out of default Earn.");
    assert.ok(cf2.learningResourceHrefs.some((href) => href.includes("theforage.com/simulations/forage/sponsored-content-omnichannel-marketing-5iep")), "Forage may remain a practice/simulation resource in Learn, but not as a default professional credential.");
    const cf3 = audit.rows.find((row) => row.id === "DPA-CF-CH03");
    assert.ok(cf3 && cf3.learningResourceHrefs.some((href) => href.includes("academy.hubspot.com/courses/inbound")), "HubSpot Academy Inbound must be clickable in CF3 Learn resources.");
    const requiredCredentialChapters = [
      ["DPA-T01-CH01", "hubspot"],
      ["DPA-T02-CH06", "linkedin.com"],
      ["DPA-T03-CH03", "skillshop.withgoogle.com"],
      ["DPA-T04-CH01", "skillshop.withgoogle.com"],
      ["DPA-T06-CH01", "skillshop.withgoogle.com"],
      ["DPA-T07-CH04", "skillshop.withgoogle.com"],
      ["DPA-T09-CH01", "skillshop.withgoogle.com"],
      ["DPA-T10-CH02", "skillshop.withgoogle.com"],
      ["DPA-T11-CH01", "semrush.com"],
      ["DPA-T12-CH05", "hubspot"],
      ["DPA-T13-CH02", "hubspot"],
      ["DPA-T14-CH10", "certifications.facebookblueprint.com"],
      ["DPA-T15-CH01", "impact.com"],
      ["DPA-T16-CH01", "communitytraining.facebookblueprint.com"]
    ];
    for (const [chapterId, expectedHost] of requiredCredentialChapters) {
      const row = audit.rows.find((item) => item.id === chapterId);
      assert.ok(row && row.earnCardCount > 0, chapterId + " must expose a mapped provider award route.");
      assert.ok(row.resourceHrefs.some((href) => href.includes(expectedHost)), chapterId + " must expose the issuer link in the learner panel.");
      assert.ok(row.learningResourceHrefs.some((href) => href.includes(expectedHost)), chapterId + " must keep the same issuer route clickable in Learn as well as Earn.");
    }

    const requiredIndonesiaCredentialChapters = [
      ["DPA-T11-CH02", "ahrefs.com"],
      ["DPA-T12-CH01", "academy.moengage.com"],
      ["DPA-T12-CH05", "trailhead.salesforce.com"],
      ["DPA-T14-CH02", "academy.meltwater.com"]
    ];
    for (const [chapterId, expectedHost] of requiredIndonesiaCredentialChapters) {
      const row = audit.rows.find((item) => item.id === chapterId);
      assert.ok(row && row.earnCardCount > 0, chapterId + " must expose a market-relevant credential in Earn.");
      assert.ok(row.credentialRouteHrefs.some((href) => href.includes(expectedHost)), chapterId + " must expose the selected issuer award in Earn.");
    }

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
      const activeBox = page.locator('[data-track-box="' + role + '"].on');
      await activeBox.waitFor({ state: "visible" });
      const visibleTrackIds = await page.evaluate(() => [...document.querySelectorAll("#weeks [data-track-box]")]
        .filter((box) => !box.hidden).map((box) => box.dataset.trackBox).sort());
      assert.deepEqual(visibleTrackIds, ["cf", role].sort(), "Only the selected role and Common Foundation should be visible for " + role + ".");
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
    const mobileRoleCardLayout = await assertRoleCardsDoNotOverlap("Mobile role picker");
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

    // Wait for role-switch feedback to disappear before capturing the milestone UI.
    await page.waitForFunction(() => {
      const toast = document.getElementById("toast");
      if (!toast) return true;
      const opacity = Number.parseFloat(window.getComputedStyle(toast).opacity);
      return !toast.classList.contains("show") && opacity <= 0.001;
    }, null, { timeout: 6000 });
    await page.evaluate(() => {
      if (document.activeElement && typeof document.activeElement.blur === "function") document.activeElement.blur();
    });
    // Screenshot-only cleanup: the sticky progress bar and skip-link focus layer otherwise cover
    // the chapter card when Playwright scrolls a tall element into view. This does not alter app CSS.
    await page.addStyleTag({ content: ".topbar{visibility:hidden!important} .skip-link{display:none!important} #toast{display:none!important}" });
    const milestoneStrip = paidSocialPanel.locator(".chapter-milestones");
    await milestoneStrip.screenshot({ path: path.join(artifactDir, "mobile-paid-social-milestones.png") });
    const earnMilestone = paidSocialPanel.locator('[data-milestone="earn"]');
    await earnMilestone.screenshot({ path: path.join(artifactDir, "mobile-paid-social-earn.png") });
    assert.deepEqual(pageErrors, [], "Browser runtime errors were raised during page load or role switching.");
    await page.screenshot({ path: path.join(artifactDir, "mobile-paid-social.png"), fullPage: false });
    const qaReport = {
      result: "PASS",
      commitSha: process.env.GITHUB_SHA || null,
      workflowRunId: process.env.GITHUB_RUN_ID || null,
      generatedAt: new Date().toISOString(),
      coreChapters: audit.corePanels,
      commonFoundationChapters: audit.foundationPanels,
      totalRenderedPanels: audit.totalPanels,
      rolesOpened: roleIds.length,
      authoredGuideRegistry: audit.guideRegistryCount,
      roleVisibilityIsolation: "selected role + Common Foundation only",
      roleCardOverlap: { desktop: desktopRoleCardLayout, mobile: mobileRoleCardLayout },
      sourceCoverage: "all 175 panels expose at least 2 unique mapped HTTP(S) links including credential-route cards",
      credentialMilestones: { stagesPerPanel: 4, coreRouteCards: audit.rows.filter(row => row.id !== "COMMON_FOUNDATION").reduce((sum,row)=>sum+row.earnCardCount,0), noRouteFallbacks: audit.rows.filter(row => row.fallbackEarn).length },
      mobileViewport: mobileLayout,
      mobilePaidSocialPanel: mobilePanelBounds,
      runtimeErrors: pageErrors.length,
      consoleErrors,
      requestFailures,
      httpFailures,
      perTrack: audit.perTrack,
      chapterRows: audit.rows
    };
    fs.writeFileSync(path.join(artifactDir, "browser-qa.json"), JSON.stringify(qaReport, null, 2), "utf8");
    console.log(JSON.stringify(qaReport, null, 2));
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
