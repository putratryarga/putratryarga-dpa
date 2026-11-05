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
  const acceptanceRegister = read("docs/requirements-traceability-acceptance-register.md");
  const sourceOfTruth = read("docs/DPA-MASTER-SOURCE-OF-TRUTH.md");
  const readme = read("README.md");
  const electiveDrafts = read("docs/28-advanced-elective-full-chapter-drafts.md");
  const t08Simulation = read("docs/T08-direct-publisher-buying-simulation.md");
  const resourceFitReview = read("docs/169-chapter-resource-fit-review.md");

  const scopeLock = acceptanceRegister.includes("18 pathways = 16 Core Specialist Tracks + 2 Advanced Electives");
  if (!scopeLock) fail.push("Acceptance register must lock program scope at 18 pathways = 16 Core + 2 Electives.");
  if (!acceptanceRegister.includes("CF1–CF6")) fail.push("Acceptance register must preserve CF1–CF6 as a separate shared foundation layer.");
  if (!readme.includes("18 pathways in total") || !readme.includes("16 Core Specialist Tracks + 2 Advanced Electives")) {
    fail.push("README must state the 16 Core + 2 Electives program architecture.");
  }
  if (!sourceOfTruth.includes("Elective 17: CRO / Growth / Experience Optimization") || !sourceOfTruth.includes("Elective 18: Traditional Media Planning & Buying")) {
    fail.push("Source of Truth must retain Electives 17 and 18 as separate advanced paths.");
  }
  const corePathSection = acceptanceRegister.match(/### 3\.2 Canonical 16 Core Tracks\s*\n([\s\S]*?)(?=\n### 3\.3)/);
  const corePathwayRows = corePathSection ? (corePathSection[1].match(/^\d+\.\s+.+$/gm) || []) : [];
  assertEqual("Acceptance register core pathway rows", corePathwayRows.length, 16);
  const electivePathSection = acceptanceRegister.match(/### 3\.3 Two Advanced Electives\s*\n([\s\S]*?)(?=\n### 3\.4)/);
  const electivePathwayRows = electivePathSection ? (electivePathSection[1].match(/^1[78]\.\s+.+$/gm) || []) : [];
  assertEqual("Acceptance register elective pathway rows", electivePathwayRows.length, 2);
  const electiveChapterHeadings = electiveDrafts.match(/^## (?:17|18)\.\d{2} — /gm) || [];
  assertEqual("Advanced elective first-pass chapter headings", electiveChapterHeadings.length, 28);
  if (!acceptanceRegister.includes("28 elective draft chapters")) fail.push("Acceptance register must keep 28 elective drafts separate from 169 core chapters.");

  if (!/\bSYNTHETIC\b/i.test(t08Simulation) || !t08Simulation.includes("non-client, non-market-benchmark data")) {
    fail.push("T08 simulation must declare all exercise data as synthetic.");
  }
  const t08ChapterRows = t08Simulation.match(/^\| T08-CH\d{2} — .+\|$/gm) || [];
  const t08ChapterIds = t08ChapterRows.map((row) => row.match(/T08-CH\d{2}/)[0]);
  assertEqual("T08 simulation chapter rows", t08ChapterRows.length, 10);
  assertEqual("T08 simulation unique chapter rows", unique(t08ChapterIds).length, 10);
  const t08ResourceRows = resources.split(String.fromCharCode(10)).filter((line) =>
    /\| DPA-T08-CH\d{2} \|/.test(line) &&
    line.includes("Tier 3 practice pack: docs/T08-direct-publisher-buying-simulation.md (synthetic).")
  );
  assertEqual("T08 resource map rows linked to simulation pack", t08ResourceRows.length, 10);
  const t08Boundary = "Open-auction bidding bukan kompetensi inti T08.";
  if (!roleParts[0].includes(t08Boundary) || !evidence.includes(t08Boundary)) {
    fail.push("T08 scope boundary must be synchronized between role guide and evidence register.");
  }
  const t08DigitalDelivery = "SIMULATED — publisher menjanjikan 6,000,000 display impressions pada placement homepage/section selama flight; laporan akhir menunjukkan 5,280,000.";
  if (!roleParts[0].includes(t08DigitalDelivery) || !evidence.includes(t08DigitalDelivery)) {
    fail.push("T08 digital publisher delivery example must be synchronized between role guide and evidence register.");
  }
  if (roleParts[0].includes("100 spot radio") || evidence.includes("100 spot radio")) {
    fail.push("T08 core example must not use the superseded radio-spot scenario from the Traditional Media scope.");
  }
  if (!resourceFitReview.includes("T08 chapter practice = PARTIALLY ENHANCED")) {
    fail.push("Resource-fit review must preserve T08 simulation as a practice enhancement, not a source-fit PASS.");
  }
  if (!resourceFitReview.includes("169-objective resource-fit gate remains **OPEN**")) {
    fail.push("Resource-fit review must keep the 169-objective source-fit gate OPEN.");
  }

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
  assertEqual("Unique chapter resource URLs", resourceUrls.length, 55);
  if (resourceLinkCounts.some((count) => count < 2)) {
    const deficientRows = resourceChapterLines.filter((line) =>
      new Set([...line.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1])).size < 2
    ).map((line) => line.split("|")[1].trim());
    fail.push("Chapter resource rows with fewer than two unique source URLs: " + deficientRows.join(", "));
  }
  const qnaReviewRegister = read("docs/507-qna-editorial-sme-review-register.csv");
  const objectiveFitRegister = read("docs/169-objective-resource-fit-register.csv");
  const agencyCellRegister = read("docs/80-agency-role-cell-validation-register.csv");
  const electiveValidationRegister = read("docs/28-advanced-elective-validation-register.csv");
  const qnaReviewRows = qnaReviewRegister.trim().split("\n").length - 1;
  const objectiveFitRows = objectiveFitRegister.trim().split("\n").length - 1;
  const agencyCellRows = agencyCellRegister.trim().split("\n").length - 1;
  const electiveValidationRows = electiveValidationRegister.trim().split("\n").length - 1;
  assertEqual("507-item Q&A review register rows", qnaReviewRows, 507);
  assertEqual("169-objective resource-fit register rows", objectiveFitRows, 169);
  assertEqual("80-cell agency validation register rows", agencyCellRows, 80);
  assertEqual("28-chapter elective validation register rows", electiveValidationRows, 28);
  const electiveQnaRegister = read("docs/56-elective-knowledge-check-review-register.csv");
  const electiveQnaRows = electiveQnaRegister.trim().split("\n").length - 1;
  assertEqual("56-item elective knowledge-check register rows", electiveQnaRows, 56);
  const chapterDepthScreen = read("docs/169-chapter-depth-screening.csv");
  const chapterDepthRows = chapterDepthScreen.trim().split("\n").length - 1;
  assertEqual("Chapter depth screening snapshot rows", chapterDepthRows, 169);
  const rubricCalibrationRegister = read("docs/169-chapter-rubric-calibration-register.csv");
  const rubricCalibrationRows = rubricCalibrationRegister.trim().split("\n").length - 1;
  assertEqual("169-chapter rubric calibration register rows", rubricCalibrationRows, 169);
  const qnaTriage = read("docs/507-qna-automated-triage.csv");
  const agencyGapTriage = read("docs/80-agency-cell-evidence-gap-triage.csv");
  const qnaTriageRows = qnaTriage.trim().split("\n").length - 1;
  const agencyGapRows = agencyGapTriage.trim().split("\n").length - 1;
  assertEqual("507-item automated Q&A triage rows", qnaTriageRows, 507);
  assertEqual("80-cell agency gap triage rows", agencyGapRows, 80);
  const triageQnaSourceMissing = qnaTriage.split("\n").filter((line) => line.includes("SOURCE_REFERENCE_MISSING")).length;
  const triageShortAnswers = qnaTriage.split("\n").filter((line) => line.includes("ANSWER_LENGTH_HEURISTIC_LT_14_WORDS")).length;
  const triageBareBoolean = qnaTriage.split("\n").filter((line) => line.includes("BARE_BOOLEAN_OPENING")).length;
  const triageAbsoluteWording = qnaTriage.split("\n").filter((line) => line.includes("ABSOLUTE_WORDING")).length;
  assertEqual("Q&A triage missing source flags", triageQnaSourceMissing, 507);
  assertEqual("Q&A triage short-answer flags", triageShortAnswers, 152);
  assertEqual("Q&A triage bare-Boolean flags", triageBareBoolean, 23);
  assertEqual("Q&A triage absolute-wording flags", triageAbsoluteWording, 16);
  const triageAgencyMissingUrl = agencyGapTriage.split("\n").filter((line) => line.includes("EXACT_URL_OR_JOB_ID_MISSING")).length;
  assertEqual("Agency cell exact URL/Job ID gaps", triageAgencyMissingUrl, 0);
  const requiredNewResourceUrls = [
    "https://sqlbolt.com/topics",
    "https://miguelhernan.org/whatifbook",
    "https://mediaratingcouncil.org/sites/default/files/Standards/MRC%20OOH%20Standards%20Combined_FINAL.pdf",
    "https://mediaratingcouncil.org/sites/default/files/Standards/IAB_Retail_Media_Measurement_Guidelines_January2024.pdf",
    "https://iabeurope.eu/knowledge_hub/iab-europes-commerce-incl-retail-media-measurement-standards-v2/",
    "https://www.w3.org/TR/WCAG22/",
    "https://www.nsw.gov.au/nsw-government/communications/social-media-guidelines/community-management"
  ];
  for (const url of requiredNewResourceUrls) {
    if (!resourceUrls.includes(url)) fail.push("Priority resource mapping missing expected URL: " + url);
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
