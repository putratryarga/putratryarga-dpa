#!/usr/bin/env node
"use strict";

/**
 * Deterministic static consistency checks for the DPA curriculum repository.
 * Run from repository root: node scripts/validate-dpa-static.js
 * This script does not perform browser, SME, external-link, Vercel or production QA.
 */
const fs = require("node:fs");
const path = require("node:path");

const read = (p) => fs.readFileSync(path.join(process.cwd(), p), "utf8");
const fail = [];
const report = {};
const idPattern = /^DPA-T\d{2}-CH\d{2}$/;

function unique(values) { return [...new Set(values)]; }
function duplicates(values) {
  const seen = new Set(), dup = new Set();
  for (const value of values) {
    if (seen.has(value)) dup.add(value);
    seen.add(value);
  }
  return [...dup];
}
function assertEqual(label, actual, expected) {
  if (actual !== expected) fail.push(label + ": expected " + expected + ", got " + actual);
}
function assertNoMissing(label, expected, actual) {
  const set = new Set(actual);
  const missing = expected.filter((x) => !set.has(x));
  if (missing.length) fail.push(label + ": missing " + missing.length + " IDs: " + missing.slice(0, 12).join(", "));
}
function assertNoExtra(label, expected, actual) {
  const set = new Set(expected);
  const extra = actual.filter((x) => !set.has(x));
  if (extra.length) fail.push(label + ": unexpected " + extra.length + " IDs: " + extra.slice(0, 12).join(", "));
}

function findCallEnd(src, openParen) {
  let depth = 0, quote = null, escaped = false, comment = null;
  for (let i = openParen; i < src.length; i++) {
    const c = src[i], n = src[i + 1];
    if (comment === "line") { if (c === "\n") comment = null; continue; }
    if (comment === "block") { if (c === "*" && n === "/") { comment = null; i++; } continue; }
    if (quote) {
      if (escaped) { escaped = false; continue; }
      if (c === "\\") { escaped = true; continue; }
      if (c === quote) quote = null;
      continue;
    }
    if (c === "/" && n === "/") { comment = "line"; i++; continue; }
    if (c === "/" && n === "*") { comment = "block"; i++; continue; }
    if (c === "'" || c === '"' || c === "`") { quote = c; continue; }
    if (c === "(") depth++;
    else if (c === ")") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}
function splitTopLevelArgs(src) {
  const args = [];
  let start = 0, paren = 0, bracket = 0, brace = 0;
  let quote = null, escaped = false, comment = null;
  for (let i = 0; i < src.length; i++) {
    const c = src[i], n = src[i + 1];
    if (comment === "line") { if (c === "\n") comment = null; continue; }
    if (comment === "block") { if (c === "*" && n === "/") { comment = null; i++; } continue; }
    if (quote) {
      if (escaped) { escaped = false; continue; }
      if (c === "\\") { escaped = true; continue; }
      if (c === quote) quote = null;
      continue;
    }
    if (c === "/" && n === "/") { comment = "line"; i++; continue; }
    if (c === "/" && n === "*") { comment = "block"; i++; continue; }
    if (c === "'" || c === '"' || c === "`") { quote = c; continue; }
    if (c === "(") paren++;
    else if (c === ")") paren--;
    else if (c === "[") bracket++;
    else if (c === "]") bracket--;
    else if (c === "{") brace++;
    else if (c === "}") brace--;
    else if (c === "," && paren === 0 && bracket === 0 && brace === 0) {
      args.push(src.slice(start, i).trim());
      start = i + 1;
    }
  }
  args.push(src.slice(start).trim());
  return args;
}
function roleGuideIds(source) {
  const ids = [];
  let pos = 0;
  while ((pos = source.indexOf("G(", pos)) !== -1) {
    const open = pos + 1;
    const end = findCallEnd(source, open);
    if (end < 0) { pos += 2; continue; }
    const args = splitTopLevelArgs(source.slice(open + 1, end));
    const last = (args[args.length - 1] || "").trim();
    const match = last.match(/^["'](DPA-T\d{2}-CH\d{2})["']$/);
    if (match) ids.push(match[1]);
    pos = end + 1;
  }
  return ids;
}
function chapterBlocks(markdown) {
  const matches = [...markdown.matchAll(/^### (DPA-T\d{2}-CH\d{2})[^\n]*/gm)];
  return matches.map((m, i) => {
    const start = m.index;
    const end = i + 1 < matches.length ? matches[i + 1].index : markdown.length;
    return { id: m[1], body: markdown.slice(start, end) };
  });
}
function tableIds(markdown) {
  return [...markdown.matchAll(/^\|\s*(DPA-T\d{2}-CH\d{2})\s*\|/gm)].map((m) => m[1]);
}

try {
  const html = read("index.html");
  const fullstack = read("fullstack-guides.js");
  const paidSocial = read("paid-social-guides.js");
  const roleParts = [
    read("role-study-guides-part1.js"),
    read("role-study-guides-part2.js"),
    read("role-study-guides-part3.js")
  ];
  const registry = read("chapter-guide-map.js");
  const evidence = read("docs/169-chapter-evidence-register.md");
  const rubrics = read("docs/169-chapter-assessment-rubrics-draft.md");
  const resources = read("docs/169-chapter-resource-mapping.md");
  const technical = read("docs/169-chapter-technical-review-matrix.md");
  const chapterInventory = read("docs/169-core-chapter-ids.txt");
  const scoreTemplate = read("audit-inputs/169-chapter-audit-score-input-TEMPLATE.csv");

  const htmlIds = [...html.matchAll(/data-chapter-id=["'](DPA-T\d{2}-CH\d{2})["']/g)].map((m) => m[1]);
  const fullIds = [...fullstack.matchAll(/chapterId\s*:\s*["'](DPA-T\d{2}-CH\d{2})["']/g)].map((m) => m[1]);
  const paidIds = [...paidSocial.matchAll(/chapterId\s*:\s*["'](DPA-T\d{2}-CH\d{2})["']/g)].map((m) => m[1]);
  const roleIds = roleParts.flatMap(roleGuideIds);
  const guideIds = [...fullIds, ...paidIds, ...roleIds];

  report.htmlChapterIds = htmlIds.length;
  report.uniqueHtmlChapterIds = unique(htmlIds).length;
  report.fullStackGuideIds = fullIds.length;
  report.paidSocialGuideIds = paidIds.length;
  report.roleSpecificGuideIds = roleIds.length;
  report.totalGuideIds = guideIds.length;
  report.uniqueGuideIds = unique(guideIds).length;

  assertEqual("HTML chapter IDs", htmlIds.length, 169);
  assertEqual("Unique HTML chapter IDs", unique(htmlIds).length, 169);

  const canonicalIds = chapterInventory.split(String.fromCharCode(10)).map((x) => x.trim())
    .filter((x) => x && !x.startsWith("#"));
  report.canonicalChapterInventoryRows = canonicalIds.length;
  report.uniqueCanonicalChapterIds = unique(canonicalIds).length;
  assertEqual("Canonical chapter inventory rows", canonicalIds.length, 169);
  assertEqual("Unique canonical chapter inventory IDs", unique(canonicalIds).length, 169);
  if (duplicates(canonicalIds).length) fail.push("Duplicate canonical chapter IDs: " + duplicates(canonicalIds).join(", "));
  assertNoMissing("Canonical inventory vs HTML", htmlIds, canonicalIds);
  assertNoExtra("Canonical inventory vs HTML", htmlIds, canonicalIds);

  const scoreTemplateLines = scoreTemplate.trimEnd().split(String.fromCharCode(10));
  const expectedScoreHeader = "chapter_id,track_id,dim_1,dim_2,dim_3,dim_4,dim_5,dim_6,dim_7";
  report.scoreTemplateRows = Math.max(0, scoreTemplateLines.length - 1);
  if (scoreTemplateLines[0] !== expectedScoreHeader) {
    fail.push("Score template header does not match the required nine-column schema.");
  }
  const templateIds = [];
  for (let i = 1; i < scoreTemplateLines.length; i++) {
    const cells = scoreTemplateLines[i].split(",");
    if (cells.length !== 9) {
      fail.push("Score template line " + (i + 1) + ": expected 9 CSV columns, found " + cells.length);
      continue;
    }
    const chapterId = cells[0].trim();
    const trackId = cells[1].trim();
    templateIds.push(chapterId);
    if (!idPattern.test(chapterId)) fail.push("Score template line " + (i + 1) + ": malformed chapter ID " + chapterId);
    if (trackId !== chapterId.slice(4, 7)) fail.push("Score template line " + (i + 1) + ": track ID does not match " + chapterId);
    if (cells.slice(2).some((value) => value.trim() !== "")) {
      fail.push("Score template line " + (i + 1) + ": score fields must remain blank in the collection template.");
    }
  }
  assertEqual("Score template data rows", templateIds.length, 169);
  assertEqual("Unique score template chapter IDs", unique(templateIds).length, 169);
  if (duplicates(templateIds).length) fail.push("Duplicate score-template chapter IDs: " + duplicates(templateIds).join(", "));
  assertNoMissing("Score template vs canonical inventory", canonicalIds, templateIds);
  assertNoExtra("Score template vs canonical inventory", canonicalIds, templateIds);
  assertEqual("Full-Stack legacy guide count", fullIds.length, 10);
  assertEqual("Paid Social legacy guide count", paidIds.length, 10);
  assertEqual("Role-specific guide count", roleIds.length, 149);
  assertEqual("Total guide IDs", guideIds.length, 169);
  assertEqual("Unique guide IDs", unique(guideIds).length, 169);
  if (duplicates(htmlIds).length) fail.push("Duplicate HTML chapter IDs: " + duplicates(htmlIds).join(", "));
  if (duplicates(guideIds).length) fail.push("Duplicate guide IDs: " + duplicates(guideIds).join(", "));
  assertNoMissing("HTML mapping", htmlIds, guideIds);
  assertNoExtra("HTML mapping", htmlIds, guideIds);
  if (!registry.includes("DPA_GUIDE_BY_CHAPTER")) fail.push("Immutable DPA_GUIDE_BY_CHAPTER registry is missing.");
  if (html.includes("CONNECTION_GUIDES")) fail.push("Legacy CONNECTION_GUIDES reference remains in the ID-based renderer.");

  const evidenceBlocks = chapterBlocks(evidence);
  const rubricBlocks = chapterBlocks(rubrics);
  const evidenceIds = evidenceBlocks.map((x) => x.id);
  const rubricIds = rubricBlocks.map((x) => x.id);
  report.evidenceChapters = evidenceIds.length;
  report.rubricChapters = rubricIds.length;
  report.evidenceQnaItems = (evidence.match(/\*\*Q:\*\*/g) || []).length;
  report.rubricQnaItems = (rubrics.match(/\*\*Question:\*\*/g) || []).length;
  report.glossaryBlocks = (evidence.match(/^\*\*Glossary:\*\*/gm) || []).length;
  report.literalUndefined = (evidence.match(/\bundefined\b/gi) || []).length + (rubrics.match(/\bundefined\b/gi) || []).length;

  assertEqual("Evidence register chapter count", evidenceIds.length, 169);
  assertEqual("Rubric chapter count", rubricIds.length, 169);
  assertEqual("Evidence register Q&A count", report.evidenceQnaItems, 507);
  assertEqual("Rubric Q&A count", report.rubricQnaItems, 507);
  assertEqual("Glossary block count", report.glossaryBlocks, 169);
  assertEqual("Literal undefined tokens", report.literalUndefined, 0);
  assertNoMissing("Evidence register vs HTML", htmlIds, evidenceIds);
  assertNoExtra("Evidence register vs HTML", htmlIds, evidenceIds);
  assertNoMissing("Rubrics vs HTML", htmlIds, rubricIds);
  assertNoExtra("Rubrics vs HTML", htmlIds, rubricIds);
  for (const block of evidenceBlocks) {
    const count = (block.body.match(/\*\*Q:\*\*/g) || []).length;
    if (count !== 3) fail.push(block.id + ": expected 3 register Q&A entries, found " + count);
  }
  for (const block of rubricBlocks) {
    const count = (block.body.match(/\*\*Question:\*\*/g) || []).length;
    if (count !== 3) fail.push(block.id + ": expected 3 rubric Q&A entries, found " + count);
  }

  const resourceIds = tableIds(resources);
  const technicalIds = tableIds(technical);
  report.resourceRows = resourceIds.length;
  report.technicalRows = technicalIds.length;
  assertEqual("Resource map rows", resourceIds.length, 169);
  assertEqual("Technical review rows", technicalIds.length, 169);
  assertNoMissing("Resource map vs HTML", htmlIds, resourceIds);
  assertNoExtra("Resource map vs HTML", htmlIds, resourceIds);

  const resourceChapterLines = resources.split(String.fromCharCode(10))
    .filter((line) => /^\|\s*DPA-T\d{2}-CH\d{2}\s*\|/.test(line));
  const resourceUrls = [...new Set(resourceChapterLines.flatMap((line) =>
    [...line.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1])
  ))];
  const resourceLinkCounts = resourceChapterLines.map((line) =>
    new Set([...line.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1])).size
  );
  report.resourceChapterRows = resourceChapterLines.length;
  report.uniqueResourceUrls = resourceUrls.length;
  report.minimumUniqueSourceLinksPerChapter = resourceLinkCounts.length
    ? Math.min(...resourceLinkCounts) : 0;
  assertEqual("Chapter resource mapping rows", resourceChapterLines.length, 169);
  assertEqual("Unique chapter resource URLs", resourceUrls.length, 46);
  if (resourceLinkCounts.some((count) => count < 2)) {
    const deficientRows = resourceChapterLines.filter((line) =>
      new Set([...line.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1])).size < 2
    ).map((line) => line.split("|")[1].trim());
    fail.push("Chapter resource rows with fewer than two unique source URLs: " + deficientRows.join(", "));
  }
  assertNoMissing("Technical matrix vs HTML", htmlIds, technicalIds);
  assertNoExtra("Technical matrix vs HTML", htmlIds, technicalIds);


  const agencyMatrix = read("docs/80-cell-agency-role-evidence-matrix.md");
  const electiveEvidence = read("docs/role-competency-matrix-and-elective-chapter-audit.md");
  const agencyLines = agencyMatrix.split("\n").filter((line) => {
    if (!line.startsWith("|")) return false;
    const firstCell = (line.split("|")[1] || "").trim();
    return firstCell.length > 0 && [...firstCell].every((char) => char >= "0" && char <= "9");
  });
  const agencyTrackIds = agencyLines.map((line) => Number(line.split("|")[1].trim()));
  const agencyCells = agencyLines.flatMap((line) => line.split("|").slice(3, 8).map((x) => x.trim()));
  report.agencyEvidence = { trackRows: agencyTrackIds.length, uniqueTrackRows: unique(agencyTrackIds).length, cells: agencyCells.length, classLabels: {A:0,B:0,C:0,D:0,E:0,G:0}, compoundCells:0 };
  assertEqual("Agency track rows", agencyTrackIds.length, 16);
  assertEqual("Unique agency track rows", unique(agencyTrackIds).length, 16);
  assertEqual("Agency × track evidence cells", agencyCells.length, 80);
  for (const cell of agencyCells) {
    const colon = cell.indexOf(":");
    const labels = (colon < 0 ? "" : cell.slice(0, colon)).trim().split("/");
    if (colon < 0 || !labels.length || labels.some((label) => !["A","B","C","D","E","G"].includes(label))) {
      fail.push("Agency evidence cell has no explicit class prefix: " + cell.slice(0,100));
      continue;
    }
    if (labels.length > 1) report.agencyEvidence.compoundCells++;
    for (const label of labels) report.agencyEvidence.classLabels[label]++;
  }
  // Keep this contract synchronized with docs/80-cell-agency-role-evidence-matrix.md.
  // 5 Nov 2026 second-pass evidence recovery replaced five G labels with documented adjacent/index/historical routes.
  const expectedAgencyLabels = {A:37,B:22,C:0,D:42,E:0,G:0};
  for (const key of Object.keys(expectedAgencyLabels)) assertEqual("Agency class " + key, report.agencyEvidence.classLabels[key], expectedAgencyLabels[key]);
  assertEqual("Agency compound cells", report.agencyEvidence.compoundCells, 21);
  const allowedAgencies = ["WPP","Publicis","Omnicom","Dentsu","Havas"];
  const allowedElectives = ["CRO","Traditional"];
  const electiveKeys = electiveEvidence.split("\n").flatMap((line) => {
    if (!line.startsWith("|")) return [];
    const key = (line.split("|")[1] || "").trim();
    const pieces = key.split(" × ");
    return pieces.length === 2 && allowedAgencies.includes(pieces[0]) && allowedElectives.includes(pieces[1])
      ? [key] : [];
  });
  report.electiveEvidenceGroups = electiveKeys.length;
  assertEqual("Elective agency evidence groups", electiveKeys.length, 10);
  assertEqual("Unique elective evidence groups", unique(electiveKeys).length, 10);

  const media = [...html.matchAll(/@media\s*([^{}]+)\{/gi)].map((m) => m[1].trim());
  report.mediaQueries = {
    total: media.length,
    widthBased: media.filter((x) => /min-width|max-width|width\s*[<>=:]/i.test(x)).length,
    reducedMotion: media.filter((x) => /prefers-reduced-motion/i.test(x)).length,
    print: media.filter((x) => /\bprint\b/i.test(x)).length
  };
  assertEqual("@media total", report.mediaQueries.total, 19);
  assertEqual("@media width-based", report.mediaQueries.widthBased, 14);
  assertEqual("@media reduced-motion", report.mediaQueries.reducedMotion, 2);
  assertEqual("@media print", report.mediaQueries.print, 3);

  const domIds = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((m) => m[1]);
  const anchorTargets = [...html.matchAll(/href=["']#([^"']+)["']/g)].map((m) => m[1]);
  report.domIds = domIds.length;
  report.uniqueDomIds = unique(domIds).length;
  report.internalAnchors = anchorTargets.length;
  const unresolved = unique(anchorTargets.filter((x) => !domIds.includes(x)));
  report.unresolvedAnchors = unresolved;
  if (duplicates(domIds).length) fail.push("Duplicate DOM IDs: " + duplicates(domIds).slice(0, 20).join(", "));
  if (unresolved.length) fail.push("Unresolved internal anchors: " + unresolved.join(", "));

  const scriptSrcs = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)].map((m) => m[1]);
  const localScripts = scriptSrcs.filter((src) => !/^(?:https?:)?\/\//i.test(src) && !/^(?:data:|blob:)/i.test(src));
  const missingScripts = localScripts.filter((src) => !fs.existsSync(path.join(process.cwd(), src.split(/[?#]/)[0])));
  report.scriptRefs = scriptSrcs.length;
  report.localScriptRefs = localScripts.length;
  report.missingLocalScripts = missingScripts;
  if (missingScripts.length) fail.push("Missing local scripts: " + missingScripts.join(", "));

} catch (error) {
  fail.push("Validator exception: " + (error && error.stack ? error.stack : String(error)));
}

report.failures = fail;
report.status = fail.length ? "FAIL" : "PASS";
console.log(JSON.stringify(report, null, 2));
if (fail.length) process.exitCode = 1;
