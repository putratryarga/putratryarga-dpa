#!/usr/bin/env node
"use strict";

/**
 * Browser QA for DPA v3 (Agent F — engineering/QA/a11y).
 * Requires the parent dpa-work project's node_modules for playwright-core
 * (chrome channel) and axe-core; runs against a local static server.
 *
 *   python -m http.server 4180        # from the dpa-wF repo root
 *   node scripts/test-dpa-browser-qa.cjs
 *
 * Env: DPA_TEST_URL (default http://127.0.0.1:4180/index.html),
 *      DPA_PW_MODULES (default ../../dpa-work/node_modules relative to repo root).
 *
 * Writes the machine-readable evidence file docs/delivery/18a-browser-qa.json.
 * Exit 0 = all gates pass; 1 = at least one gate failed (findings in the JSON).
 */

const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const ROOT = path.resolve(__dirname, "..");
const BASE_URL = process.env.DPA_TEST_URL || "http://127.0.0.1:4180/index.html";
const PW_MODULES = process.env.DPA_PW_MODULES || path.resolve(ROOT, "..", "dpa-work", "node_modules");
const REPORT_PATH = process.env.DPA_REPORT_PATH
  ? path.resolve(process.env.DPA_REPORT_PATH)
  : path.join(ROOT, "docs", "delivery", "18a-browser-qa.json");
const SCREENSHOT_DIR = process.env.DPA_SCREENSHOT_DIR
  ? path.resolve(process.env.DPA_SCREENSHOT_DIR)
  : null;

const { chromium } = require(path.join(PW_MODULES, "playwright-core"));
const AXE_SRC = fs.readFileSync(path.join(PW_MODULES, "axe-core", "axe.min.js"), "utf8");

// role -> expected chapter count, and role -> chapter-ID track prefix
const ROLES = {
  fullstack:   { expected: 10, track: "T01" },
  connection:  { expected: 10, track: "T02" },
  media:       { expected: 10, track: "T03" },
  paidsearch:  { expected: 10, track: "T04" },
  paidsocial:  { expected: 10, track: "T05" },
  programmatic:{ expected: 12, track: "T06" },
  retail:      { expected: 10, track: "T07" },
  investment:  { expected: 10, track: "T08" },
  adops:       { expected: 10, track: "T09" },
  analytics:   { expected: 10, track: "T10" },
  seo:         { expected: 10, track: "T11" },
  crm:         { expected: 10, track: "T12" },
  content:     { expected: 11, track: "T13" },
  kol:         { expected: 12, track: "T14" },
  affiliate:   { expected: 12, track: "T15" },
  community:   { expected: 12, track: "T16" }
};
const VIEWPORTS = [320, 375, 390, 768, 1024, 1366, 1440];
const OVERFLOW_TOLERANCE_PX = 1;

function newReport() {
  return {
    generatedAt: new Date().toISOString(),
    candidateSha: execFileSync("git", ["rev-parse", "HEAD"], { cwd: ROOT, encoding: "utf8" }).trim(),
    baseUrl: BASE_URL,
    viewportOverflowTolerancePx: OVERFLOW_TOLERANCE_PX,
    consoleErrors: [],
    pageErrors: [],
    gates: {},
    roleSwitch: [],
    fullDomMilestoneSweep: {},
    sampledChapters: [],
    viewportChecks: [],
    screenshots: [],
    skipLink: {},
    axe: {},
    failure: []
  };
}

async function attachMonitoring(page, report) {
  page.on("console", (message) => {
    if (message.type() === "error") report.consoleErrors.push(message.text().slice(0, 500));
  });
  page.on("pageerror", (error) => report.pageErrors.push(String(error).slice(0, 500)));
}

async function openPage(browser, viewport, report) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  await attachMonitoring(page, report);
  await page.goto(BASE_URL, { waitUntil: "load", timeout: 30000 });
  await page.waitForFunction(
    () => document.querySelectorAll("[data-track-box] details.week .chapter-study").length === 175,
    null,
    { timeout: 20000 }
  );
  return { context, page };
}

async function measureOverflow(page) {
  return page.evaluate(() => ({
    innerWidth: window.innerWidth,
    docScrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    docClientWidth: document.documentElement.clientWidth
  }));
}

async function auditChapterMilestones(page, chapterId) {
  return page.evaluate((id) => {
    const chapter = document.querySelector('[data-chapter-id="' + id + '"]');
    if (!chapter) return { found: false };
    const study = chapter.querySelector(".chapter-study");
    const milestone = (name) => {
      const node = chapter.querySelector('[data-milestone="' + name + '"]');
      if (!node) return null;
      const rect = node.getBoundingClientRect();
      return {
        present: true,
        visible: rect.width > 0 && rect.height > 0,
        textLength: (node.textContent || "").trim().length
      };
    };
    const earn = chapter.querySelector('[data-milestone="earn"]');
    const cards = [...(earn ? earn.querySelectorAll(".credential-route-card") : [])];
    const cardLinks = cards.map((card) =>
      [...card.querySelectorAll("a[data-credential-url]")].map((a) => ({
        href: a.getAttribute("href"),
        visible: a.getBoundingClientRect().width > 0 && a.getBoundingClientRect().height > 0,
        rel: a.getAttribute("rel") || ""
      }))
    );
    const checks = [...chapter.querySelectorAll(".lesson-check-list")].reduce(
      (sum, list) => sum + list.querySelectorAll("li").length, 0);
    const topicSteps = [...chapter.querySelectorAll(".lesson-topic-list")].reduce(
      (sum, list) => sum + list.querySelectorAll("li").length, 0);
    const apply = chapter.querySelector('[data-milestone="apply"]');
    const deliverable = apply ? (apply.querySelector("p") || {}).textContent || "" : "";
    return {
      found: true,
      studyPanel: study ? { present: true, visible: study.getBoundingClientRect().height > 0, folds: study.querySelectorAll("details.lesson-fold").length } : { present: false },
      learn: milestone("learn"),
      earn: {
        ...milestone("earn"),
        credentialCardCount: cards.length,
        credentialCardsMax3: cards.length <= 3,
        emptyState: Boolean(earn && earn.querySelector(".chapter-earn-empty")),
        cardLinks: cardLinks.flat()
      },
      apply: { ...milestone("apply"), deliverableTextLength: deliverable.trim().length },
      master: { ...milestone("master"), knowledgeCheckItems: checks },
      learnStepListItems: topicSteps
    };
  }, chapterId);
}

async function run() {
  const report = newReport();
  const browser = await chromium.launch({ channel: "chrome", headless: true });

  try {
    // ---------- A. Skip link: first Tab must focus it ----------
    {
      const { context, page } = await openPage(browser, { width: 1366, height: 900 }, report);
      await page.keyboard.press("Tab");
      const skip = await page.evaluate(() => {
        const el = document.activeElement;
        return {
          tag: el ? el.tagName : null,
          isSkipLink: Boolean(el && el.classList && el.classList.contains("skip-link")),
          href: el ? el.getAttribute("href") : null,
          text: el ? el.textContent.trim() : null
        };
      });
      report.skipLink = { firstTabFocus: skip };
      if (!skip.isSkipLink) report.failure.push("First Tab press did not focus .skip-link (focused: " + skip.tag + ").");
      if (skip.href !== "#main") report.failure.push("Skip link href is " + skip.href + ", expected #main.");

      // ---------- B. Full-DOM milestone sweep (all 175 chapters incl. CF) ----------
      const sweep = await page.evaluate(() => {
        const chapters = [...document.querySelectorAll("[data-track-box] details.week[data-chapter-id]")];
        const problems = [];
        let earnCardMax = 0;
        let earnChaptersWithCards = 0;
        let earnChaptersEmpty = 0;
        let credentialLinksTotal = 0;
        for (const chapter of chapters) {
          const id = chapter.dataset.chapterId;
          const study = chapter.querySelector(".chapter-study");
          if (!study) { problems.push(id + ": no .chapter-study"); continue; }
          for (const name of ["learn", "earn", "apply", "master"]) {
            if (!chapter.querySelector('[data-milestone="' + name + '"]')) problems.push(id + ": missing milestone " + name);
          }
          const earn = chapter.querySelector('[data-milestone="earn"]');
          const cards = earn ? earn.querySelectorAll(".credential-route-card") : [];
          earnCardMax = Math.max(earnCardMax, cards.length);
          if (cards.length) {
            earnChaptersWithCards++;
            if (cards.length > 3) problems.push(id + ": " + cards.length + " credential cards exceeds max 3");
            let links = 0;
            cards.forEach((card) => {
              card.querySelectorAll("a[data-credential-url]").forEach((a) => {
                links++;
                const href = a.getAttribute("href") || "";
                if (!/^https?:\/\//i.test(href)) problems.push(id + ": credential link not http(s): " + href);
              });
            });
            credentialLinksTotal += links;
            if (links === 0) problems.push(id + ": credential cards render but no issuer link");
          } else if (earn && earn.querySelector(".chapter-earn-empty")) {
            earnChaptersEmpty++;
          }
          const applyNode = chapter.querySelector('[data-milestone="apply"]');
          const applyText = applyNode ? (applyNode.textContent || "").trim() : "";
          if (applyText.length < 20) problems.push(id + ": apply milestone deliverable text missing");
          const checks = [...chapter.querySelectorAll(".lesson-check-list")].reduce((s, l) => s + l.querySelectorAll("li").length, 0);
          if (checks < 1) problems.push(id + ": no knowledge-check items (master)");
          const steps = [...chapter.querySelectorAll(".lesson-topic-list")].reduce((s, l) => s + l.querySelectorAll("li").length, 0);
          if (steps < 3) problems.push(id + ": fewer than 3 lesson steps");
        }
        return {
          chapterCount: chapters.length,
          problems,
          earn: { chaptersWithCards: earnChaptersWithCards, chaptersWithEmptyState: earnChaptersEmpty, maxCardsPerChapter: earnCardMax, credentialLinksTotal }
        };
      });
      report.fullDomMilestoneSweep = sweep;
      if (sweep.problems.length) report.failure.push("Milestone sweep problems (first 12): " + sweep.problems.slice(0, 12).join(" | "));

      // ---------- C. 16 role switches + per-role chapter counts + samples ----------
      for (const [role, spec] of Object.entries(ROLES)) {
        const entry = { role, expectedChapters: spec.expected, track: spec.track };
        // open the role picker (it is closed after every selection); the
        // heading button is always visible, unlike the hidden role-status one
        await page.click(".active-change-role[data-role-picker-open]");
        await page.click('.role-pick[data-role="' + role + '"]');
        await page.waitForFunction(
          (r) => {
            const box = document.querySelector('[data-track-box="' + r + '"]');
            return box && box.classList.contains("on") && !box.hidden;
          },
          role,
          { timeout: 10000 }
        );
        await page.waitForTimeout(120); // allow updateTrackUI + toast to settle

        const roleState = await page.evaluate((r) => {
          const box = document.querySelector('[data-track-box="' + r + '"]');
          const weeks = box ? [...box.querySelectorAll("details.week[data-chapter-id]")] : [];
          return {
            boxOn: Boolean(box && box.classList.contains("on") && !box.hidden),
            chapters: weeks.map((w) => w.dataset.chapterId),
            otherBoxesOn: [...document.querySelectorAll("#weeks [data-track-box].on")].filter((b) => b.dataset.trackBox !== "cf" && b.dataset.trackBox !== r).length,
            activeRoleName: (document.getElementById("activeRoleName") || {}).textContent || ""
          };
        }, role);

        entry.boxOn = roleState.boxOn;
        entry.chapterCount = roleState.chapters.length;
        entry.chapterIdsMatchTrack = roleState.chapters.every((id) =>
          new RegExp("^DPA-" + spec.track + "-CH\\d{2}$").test(id));
        entry.otherCoreBoxesVisible = roleState.otherBoxesOn;
        entry.activeRoleName = roleState.activeRoleName;

        // sample first + last chapter: open them and audit milestones in the live view
        const samples = [roleState.chapters[0], roleState.chapters[roleState.chapters.length - 1]];
        for (const chapterId of samples) {
          await page.evaluate((id) => {
            const chapter = document.querySelector('[data-chapter-id="' + id + '"]');
            chapter.open = true;
            chapter.scrollIntoView({ behavior: "instant", block: "center" });
          }, chapterId);
          await page.waitForTimeout(80);
          const audit = await auditChapterMilestones(page, chapterId);
          const sample = { role, chapterId, ...audit };
          // earn link clickability = visible, enabled, absolute https(s) href
          sample.earnLinkClickable = audit.found && audit.earn.cardLinks.length > 0 &&
            audit.earn.cardLinks.every((l) => l.visible && /^https?:\/\//i.test(l.href || ""));
          report.sampledChapters.push(sample);
          const problems = [];
          if (!audit.found) problems.push("chapter not found");
          if (!audit.studyPanel || !audit.studyPanel.present) problems.push("no study panel (LEARN)");
          if (!audit.learn || !audit.learn.present) problems.push("no LEARN milestone");
          if (!audit.earn || !audit.earn.present) problems.push("no EARN milestone");
          if (!audit.earn || !audit.earn.credentialCardsMax3) problems.push("EARN cards > 3");
          if (!audit.apply || !audit.apply.present) problems.push("no APPLY milestone");
          if (!audit.master || !audit.master.present) problems.push("no MASTER milestone");
          if (!audit.master || audit.master.knowledgeCheckItems < 1) problems.push("no knowledge checks");
          sample.problems = problems;
          if (problems.length) report.failure.push(role + "/" + chapterId + ": " + problems.join(", "));
        }
        entry.sampled = samples;
        report.roleSwitch.push(entry);

        if (!roleState.boxOn) report.failure.push(role + ": track box not activated after role switch");
        if (roleState.chapters.length !== spec.expected) {
          report.failure.push(role + ": expected " + spec.expected + " chapters, found " + roleState.chapters.length);
        }
        if (!entry.chapterIdsMatchTrack) report.failure.push(role + ": chapter IDs do not all match " + spec.track + " prefix");
        if (roleState.otherBoxesOn > 0) report.failure.push(role + ": another core track box stayed visible");
      }
      await context.close();
    }

    // ---------- D. Viewport overflow checks ----------
    for (const width of VIEWPORTS) {
      const { context, page } = await openPage(browser, { width, height: 900 }, report);
      const before = await measureOverflow(page);
      // switch role + open a chapter to stress a content-heavy view
      await page.click(".active-change-role[data-role-picker-open]");
      await page.click('.role-pick[data-role="adops"]');
      await page.waitForFunction(
        () => document.querySelector('[data-track-box="adops"]').classList.contains("on"),
        null, { timeout: 10000 }
      );
      await page.evaluate(() => {
        const chapter = document.querySelector('[data-track-box="adops"] details.week[data-chapter-id]');
        if (chapter) { chapter.open = true; }
      });
      await page.waitForTimeout(150);
      const after = await measureOverflow(page);
      const overflowBefore = Math.max(before.docScrollWidth - before.docClientWidth, before.bodyScrollWidth - before.docClientWidth);
      const overflowAfter = Math.max(after.docScrollWidth - after.docClientWidth, after.bodyScrollWidth - after.docClientWidth);
      const entry = {
        viewport: width,
        innerWidth: before.innerWidth,
        docClientWidth: before.docClientWidth,
        overflowPxDefaultView: overflowBefore,
        overflowPxAdopsChapterOpen: overflowAfter,
        pass: overflowBefore <= OVERFLOW_TOLERANCE_PX && overflowAfter <= OVERFLOW_TOLERANCE_PX
      };
      report.viewportChecks.push(entry);
      if (SCREENSHOT_DIR && (width === 390 || width === 1366)) {
        fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
        const chapter = page.locator('[data-track-box="adops"] details.week[data-chapter-id]').first();
        await chapter.scrollIntoViewIfNeeded();
        const filename = width === 390 ? "dpa-mobile-390-adops-chapter.png" : "dpa-desktop-1366-adops-chapter.png";
        const screenshotPath = path.join(SCREENSHOT_DIR, filename);
        await page.screenshot({ path: screenshotPath, fullPage: false });
        report.screenshots.push({ viewport: width, path: screenshotPath });
      }
      if (!entry.pass) {
        report.failure.push("Viewport " + width + "px horizontal overflow: default view " + overflowBefore + "px, adops chapter open " + overflowAfter + "px (tolerance " + OVERFLOW_TOLERANCE_PX + "px).");
      }
      await context.close();
    }

    // ---------- E. axe WCAG 2 A/AA ----------
    {
      const { context, page } = await openPage(browser, { width: 1366, height: 900 }, report);
      await page.evaluate(() => { if (typeof window.expAll === "function") window.expAll(true); });
      await page.addScriptTag({ content: AXE_SRC });
      const axeRun = async (label) => {
        const results = await page.evaluate(() => window.axe.run(document, {
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] }
        }));
        return {
          label,
          passes: results.passes.length,
          violations: results.violations.map((v) => ({
            id: v.id, impact: v.impact, wcagTags: (v.tags || []).filter((t) => t.startsWith("wcag")),
            help: v.help, nodeCount: v.nodes.length,
            sampleSelectors: v.nodes.slice(0, 3).map((n) => n.target.join(" "))
          })),
          incomplete: results.incomplete.map((v) => ({ id: v.id, nodeCount: v.nodes.length }))
        };
      };
      const mainRun = await axeRun("default view (fullstack, all weeks expanded)");
      await page.click(".active-change-role[data-role-picker-open]");
      await page.waitForTimeout(150);
      const pickerRun = await axeRun("role picker open");
      report.axe = { runs: [mainRun, pickerRun] };
      const violationCount = mainRun.violations.length + pickerRun.violations.length;
      report.axe.totalViolations = violationCount;
      if (violationCount > 0) {
        report.failure.push("axe WCAG2 A/AA violations: " + violationCount + " rule(s) — see report.axe.runs");
      }
      await context.close();
    }

    // ---------- F. Console/page errors ----------
    report.gates.consolePageErrors = { consoleErrors: report.consoleErrors.length, pageErrors: report.pageErrors.length };
    if (report.consoleErrors.length) report.failure.push("Console errors: " + report.consoleErrors.join(" | "));
    if (report.pageErrors.length) report.failure.push("Page errors: " + report.pageErrors.join(" | "));

    report.status = report.failure.length === 0 ? "PASS" : "FAIL";
  } finally {
    await browser.close();
  }

  const outPath = REPORT_PATH;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
  console.log(JSON.stringify({ status: report.status, candidateSha: report.candidateSha, failures: report.failure, output: outPath }, null, 2));
  if (report.status !== "PASS") process.exit(1);
  console.log("PASS: browser QA gates all green.");
}

run().catch((error) => { console.error(error); process.exit(1); });
