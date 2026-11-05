#!/usr/bin/env node
"use strict";

const fs = require("node:fs");

function parseCsv(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (ch === '"') quoted = false;
      else field += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") { row.push(field); field = ""; }
    else if (ch === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (ch !== "\r") field += ch;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  if (quoted) throw new Error("CSV has an unterminated quoted field.");
  return rows;
}

function read(path) { return fs.readFileSync(path, "utf8"); }
function loadCsv(path) {
  const raw = parseCsv(read(path));
  if (!raw.length) throw new Error(path + " is empty.");
  const headers = raw[0];
  const records = raw.slice(1).filter(row => row.some(cell => cell !== ""));
  const seen = new Set();
  for (const header of headers) {
    if (seen.has(header)) throw new Error(path + " has duplicate header " + header);
    seen.add(header);
  }
  return {
    headers,
    records: records.map((row, index) => {
      if (row.length !== headers.length) throw new Error(path + " row " + (index + 2) + " has " + row.length + " fields, expected " + headers.length);
      return Object.fromEntries(headers.map((header, i) => [header, row[i]]));
    })
  };
}
function assert(condition, message) {
  if (!condition) throw new Error(message);
}
function countBy(rows, field) {
  return rows.reduce((out, row) => {
    const value = row[field] || "(blank)";
    out[value] = (out[value] || 0) + 1;
    return out;
  }, {});
}
function uniqueBy(rows, field, label) {
  const seen = new Set();
  for (const row of rows) {
    const value = row[field];
    assert(value, label + " contains blank " + field);
    assert(!seen.has(value), label + " contains duplicate " + field + ": " + value);
    seen.add(value);
  }
  return seen;
}

const coreIds = read("docs/169-core-chapter-ids.txt").split(/\r?\n/).map(x => x.trim()).filter(x => /^DPA-T\d{2}-CH\d{2}$/.test(x));
assert(coreIds.length === 169 && new Set(coreIds).size === 169, "Canonical ID list must contain 169 unique chapters.");
const canonical = new Set(coreIds);

const evidence = read("docs/169-chapter-evidence-register.md");
const blocks = [...evidence.matchAll(/^### (DPA-T\d{2}-CH\d{2})[^\n]*/gm)];
assert(blocks.length === 169, "Evidence register must contain 169 chapter blocks.");
const expectedQna = [];
const seenQuestions = new Set();
for (let i = 0; i < blocks.length; i++) {
  const chapterId = blocks[i][1];
  assert(canonical.has(chapterId), "Evidence register contains noncanonical ID " + chapterId);
  const body = evidence.slice(blocks[i].index, i + 1 < blocks.length ? blocks[i + 1].index : evidence.length);
  const pattern = /^\s*(\d+)\. \*\*Q:\*\* (.+?)\r?\n\s+\*\*Expected answer in guide(?: \([^)]*\))?:\*\* (.+)$/gm;
  const found = [...body.matchAll(pattern)];
  assert(found.length === 3, chapterId + " must contain exactly three Q&A pairs; found " + found.length);
  for (const match of found) {
    const ordinal = Number(match[1]);
    const id = chapterId + "-Q" + String(ordinal).padStart(2, "0");
    const question = match[2].trim();
    const answer = match[3].trim();
    const normalized = question.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
    assert(!seenQuestions.has(normalized), "Duplicate normalized core Q&A question: " + id);
    seenQuestions.add(normalized);
    expectedQna.push({ item_id:id, chapter_id:chapterId, question_number:String(ordinal), question_text:question, current_guide_answer:answer });
  }
}
assert(expectedQna.length === 507, "Evidence register Q&A total must equal 507.");

const qna = loadCsv("docs/507-qna-editorial-sme-review-register.csv");
assert(qna.records.length === 507, "507-item review register row count mismatch.");
uniqueBy(qna.records, "item_id", "Q&A review register");
const qnaMap = new Map(qna.records.map(row => [row.item_id, row]));
let qnaMismatches = 0;
for (const expected of expectedQna) {
  const actual = qnaMap.get(expected.item_id);
  assert(actual, "Q&A review register missing " + expected.item_id);
  for (const field of ["chapter_id","question_number","question_text","current_guide_answer"]) {
    if (String(actual[field] || "").trim() !== expected[field]) {
      qnaMismatches++;
      throw new Error("Q&A register drift at " + expected.item_id + " field " + field);
    }
  }
  assert(actual.answer_review_status === "OPEN" || actual.answer_review_status === "PARTIAL",
    "Unexpected answer-review status for " + expected.item_id + ": " + actual.answer_review_status);
}

const t06Qna = qna.records.filter(row => row.chapter_id.startsWith("DPA-T06-"));
assert(t06Qna.length === 36, "T06 programmatic Q&A review must contain 36 items.");
assert(qna.headers.includes("prior_answer_guidance") && qna.headers.includes("editorial_revision_note"),
  "Core Q&A register must retain prior answers and editorial revision notes.");
assert(t06Qna.every(row => row.prior_answer_guidance && row.editorial_revision_note && String(row.source_reference || "").includes("http")),
  "All T06 Q&A revisions must preserve prior answers, revision notes and source references.");
assert(t06Qna.every(row => {
  const words = row.current_guide_answer.trim().split(/\s+/).filter(Boolean).length;
  return words >= 33 && words <= 42 && row.item_type === "REFLECTIVE_QA_NOT_SCORED" && row.answer_review_status === "OPEN" && row.editorial_status === "OPEN" && row.sme_status === "OPEN";
}), "T06 expanded Q&A must remain 33–42 words, reflective/non-scored and formally OPEN.");
const t06QnaAudit = loadCsv("docs/T06-12-chapter-qna-technical-desk-review.csv");
assert(t06QnaAudit.records.length === 36, "T06 technical Q&A desk review must contain 36 rows.");
uniqueBy(t06QnaAudit.records, "item_id", "T06 Q&A technical desk review");
assert(t06QnaAudit.records.every(row => row.item_id.startsWith("DPA-T06-") && row.desk_review_classification === "PARTIAL" && row.formal_answer_key_status === "OPEN" && row.sme_status === "OPEN"),
  "T06 Q&A desk audit must remain PARTIAL with formal answer-key and SME status OPEN.");
const t10Qna = qna.records.filter(row => row.chapter_id.startsWith("DPA-T10-"));
assert(t10Qna.length === 30, "T10 analytics Q&A review must contain 30 items.");
assert(t10Qna.every(row => row.prior_answer_guidance && row.editorial_revision_note && String(row.source_reference || "").includes("http")),
  "All T10 Q&A revisions must preserve prior answers, revision notes and source references.");
assert(t10Qna.every(row => {
  const words = row.current_guide_answer.trim().split(" ").filter(Boolean).length;
  return words >= 33 && words <= 41 && row.item_type === "REFLECTIVE_QA_NOT_SCORED" && row.answer_review_status === "OPEN" && row.editorial_status === "OPEN" && row.sme_status === "OPEN";
}), "T10 expanded Q&A must remain 33–41 words, reflective/non-scored and formally OPEN.");
const t10QnaAudit = loadCsv("docs/T10-10-chapter-qna-technical-desk-review.csv");
assert(t10QnaAudit.records.length === 30, "T10 technical Q&A desk review must contain 30 rows.");
uniqueBy(t10QnaAudit.records, "item_id", "T10 Q&A technical desk review");
assert(t10QnaAudit.records.every(row => row.item_id.startsWith("DPA-T10-") && row.desk_review_classification === "PARTIAL" && row.formal_answer_key_status === "OPEN" && row.sme_status === "OPEN"),
  "T10 Q&A desk audit must remain PARTIAL with formal answer-key and SME status OPEN.");
const t14Qna = qna.records.filter(row => row.chapter_id.startsWith("DPA-T14-"));
assert(t14Qna.length === 36, "T14 creator-partnership Q&A review must contain 36 items.");
assert(t14Qna.every(row => row.prior_answer_guidance && row.editorial_revision_note && String(row.source_reference || "").includes("http")),
  "All T14 Q&A revisions must preserve prior answers, revision notes and source references.");
assert(t14Qna.every(row => {
  const words = row.current_guide_answer.trim().split(" ").filter(Boolean).length;
  return words >= 33 && words <= 43 && row.item_type === "REFLECTIVE_QA_NOT_SCORED" && row.answer_review_status === "OPEN" && row.editorial_status === "OPEN" && row.sme_status === "OPEN";
}), "T14 expanded Q&A must remain 33–43 words, reflective/non-scored and formally OPEN.");
const t14QnaAudit = loadCsv("docs/T14-12-chapter-qna-technical-desk-review.csv");
assert(t14QnaAudit.records.length === 36, "T14 technical Q&A desk review must contain 36 rows.");
uniqueBy(t14QnaAudit.records, "item_id", "T14 Q&A technical desk review");
assert(t14QnaAudit.records.every(row => row.item_id.startsWith("DPA-T14-") && row.desk_review_classification === "PARTIAL" && row.formal_answer_key_status === "OPEN" && row.sme_status === "OPEN"),
  "T14 Q&A desk audit must remain PARTIAL with formal answer-key and SME status OPEN.");
const t14Guide = read("role-study-guides-part3.js");
assert(t14Qna.every(row => t14Guide.includes(row.question_text) && t14Guide.includes(row.current_guide_answer) && evidence.includes(row.question_text) && evidence.includes(row.current_guide_answer)),
  "T14 Q&A wording must stay synchronized across the role guide and evidence register.");
const t10Guide = read("role-study-guides-part2.js");
assert(t10Qna.every(row => t10Guide.includes(row.question_text) && t10Guide.includes(row.current_guide_answer) && evidence.includes(row.question_text) && evidence.includes(row.current_guide_answer)),
  "T10 Q&A wording must stay synchronized across the role guide and evidence register.");

const objective = loadCsv("docs/169-objective-resource-fit-register.csv");
assert(objective.records.length === 169, "Objective resource-fit register row count mismatch.");
uniqueBy(objective.records, "chapter_id", "Objective resource-fit register");
for (const row of objective.records) assert(canonical.has(row.chapter_id), "Objective register contains noncanonical ID " + row.chapter_id);
const objectiveById = new Map(objective.records.map(row => [row.chapter_id, row]));
for (const id of coreIds) assert(objectiveById.has(id), "Objective register missing " + id);
const trackSpecs = [
  ["T01","docs/T01-10-chapter-source-fit-review.csv",10],
  ["T02","docs/T02-10-chapter-source-fit-review.csv",10],
  ["T03","docs/T03-10-chapter-source-fit-review.csv",10],
  ["T07","docs/T07-10-chapter-source-fit-review.csv",10],
  ["T10","docs/T10-10-chapter-source-fit-review.csv",10],
  ["T13","docs/T13-11-chapter-source-fit-review.csv",11],
  ["T16","docs/T16-12-chapter-source-fit-review.csv",12]
];
let deskReviewRows = 0;
const deskCounts = {};
for (const [track, path, expectedCount] of trackSpecs) {
  const review = loadCsv(path);
  assert(review.records.length === expectedCount, path + " row count mismatch.");
  const chapterField = "chapter_id";
  uniqueBy(review.records, chapterField, path);
  const classificationField = review.headers.includes("desk_fit_classification")
    ? "desk_fit_classification" : "source_fit_desk_classification";
  const formalStatusField = review.headers.includes("formal_acceptance_status")
    ? "formal_acceptance_status"
    : review.headers.includes("objective_level_formal_status") ? "objective_level_formal_status" : null;
  const deskIds = new Set();
  for (const item of review.records) {
    assert(item[chapterField].startsWith(track + "-") || item[chapterField].startsWith("DPA-" + track + "-"),
      path + " contains chapter outside " + track + ": " + item[chapterField]);
    assert(item[classificationField] === "PARTIAL" || item[classificationField] === "PARTIAL_STRONG",
      path + " has unsupported desk classification for " + item[chapterField]);
    if (formalStatusField) assert(item[formalStatusField] === "OPEN",
      path + " must keep formal status OPEN for " + item[chapterField]);
    const master = objectiveById.get(item[chapterField]);
    assert(master, "Objective master row missing " + item[chapterField]);
    assert(master.desk_review_status === "FIRST_PASS_DESK_REVIEW_COMPLETE",
      "Desk review status not synchronized for " + item[chapterField]);
    assert(master.desk_fit_classification === item[classificationField],
      "Desk classification mismatch for " + item[chapterField]);
    assert(master.objective_level_fit_status === "OPEN", "Formal objective fit must stay OPEN: " + item[chapterField]);
    assert(master.indonesia_access_status === "OPEN", "Indonesia access must stay OPEN: " + item[chapterField]);
    deskIds.add(item[chapterField]);
    deskReviewRows++;
  }
  deskCounts[track] = {rows:review.records.length,classification:countBy(review.records,classificationField)};
}
const expectedDeskReviewRows = trackSpecs.reduce((sum, spec) => sum + spec[2], 0);
assert(deskReviewRows === expectedDeskReviewRows && deskReviewRows === 73, "First-pass desk-review total must equal 73.");

const resourceLines = read("docs/169-chapter-resource-mapping.md").split(/\r?\n/).filter(line => /^\|\s*DPA-T\d{2}-CH\d{2}\s*\|/.test(line));
const resourceIds = resourceLines.map(line => line.split("|")[1].trim());
assert(resourceLines.length === 169 && new Set(resourceIds).size === 169, "Resource map must contain 169 unique chapter rows.");
const resourceUrls = new Set();
for (const line of resourceLines) {
  const urls = [...line.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map(match => match[1]);
  const uniqueUrls = new Set(urls);
  assert(uniqueUrls.size >= 2, "Resource map row has fewer than two unique URLs: " + line.split("|")[1].trim());
  for (const url of uniqueUrls) resourceUrls.add(url);
}
assert(resourceUrls.size === 127, "Resource URL inventory expected 127 unique URLs; found " + resourceUrls.size);

const agency = loadCsv("docs/80-agency-role-cell-validation-register.csv");
assert(agency.records.length === 80, "Agency validation register must contain 80 cells.");
uniqueBy(agency.records, "cell_id", "Agency cell register");
for (const row of agency.records) {
  assert(row.evidence_url_or_job_id && /https?:\/\//.test(row.evidence_url_or_job_id),
    "Agency cell lacks source URL: " + row.cell_id);
  for (const field of ["employer_hosted_jd_status","role_specificity_status","currentness_status","geography_seniority_status","chapter_competency_validation_status"]) {
    assert(row[field] === "OPEN", "Agency validation was prematurely closed for " + row.cell_id + " / " + field);
  }
}

const rubrics = loadCsv("docs/169-chapter-rubric-calibration-register.csv");
assert(rubrics.records.length === 169, "Rubric calibration register must contain 169 chapters.");
uniqueBy(rubrics.records, "chapter_id", "Rubric calibration register");
assert(rubrics.records.every(row => row.technical_calibration_status === "OPEN" && row.sme_approval_status === "OPEN"),
  "Rubric calibration/SME status must remain OPEN.");

const electives = loadCsv("docs/28-advanced-elective-validation-register.csv");
const electiveQna = loadCsv("docs/56-elective-knowledge-check-review-register.csv");
assert(electives.records.length === 28, "Elective validation register must contain 28 chapters.");
assert(electiveQna.records.length === 56, "Elective Q&A review register must contain 56 items.");
uniqueBy(electives.records, "elective_chapter_id", "Elective validation register");
uniqueBy(electiveQna.records, "item_id", "Elective Q&A register");
assert(electives.records.every(row => row.validation_status === "OPEN" && row.sme_reviewer === ""),
  "Elective validation rows must remain OPEN pending independent review.");
assert(electiveQna.records.every(row => row.editorial_status === "OPEN" && row.sme_status === "OPEN"),
  "Elective knowledge-check reviews must remain OPEN.");
assert(electiveQna.headers.includes("prior_answer_guidance") && electiveQna.headers.includes("editorial_revision_note"),
  "Elective Q&A register must preserve prior answers and revision notes.");
assert(electiveQna.records.every(row => row.prior_answer_guidance && row.editorial_revision_note),
  "Each elective Q&A revision must preserve a prior answer and an editorial note.");
assert(electiveQna.records.every(row => {
  const words = row.answer_guidance.trim().split(" ").filter(Boolean).length;
  return words >= 32 && words <= 47;
}), "Expanded elective answer guidance must remain within the reviewed 32–47 word band.");
assert(electiveQna.records.every(row => row.item_status === "REFLECTIVE_KNOWLEDGE_CHECK_NOT_SCORED" && row.source_review_status === "OPEN"),
  "Elective knowledge checks must remain reflective/non-scored and source review OPEN.");
const electiveDraft = read("docs/28-advanced-elective-full-chapter-drafts.md");
assert(electiveQna.records.every(row => electiveDraft.includes(row.answer_guidance)),
  "Revised elective answer guidance must match the full chapter draft Markdown.");
assert(electives.headers.includes("chapter_level_desk_review_status") && electives.headers.includes("chapter_desk_classification"),
  "Elective validation register must record separate chapter-level desk-review outcomes.");
assert(electives.records.every(row => row.chapter_level_desk_review_status === "COMPLETE_FIRST_PASS" && row.chapter_desk_classification === "PARTIAL" && row.draft_depth_disposition === "THIN_FIRST_PASS_DRAFT"),
  "All elective chapters must retain PARTIAL first-pass desk status and thin-draft disposition.");
const elective17Review = loadCsv("docs/ELECTIVE-17-CRO-CHAPTER-LEVEL-DESK-AUDIT.csv");
const elective18Review = loadCsv("docs/ELECTIVE-18-TRADITIONAL-MEDIA-CHAPTER-LEVEL-DESK-AUDIT.csv");
assert(elective17Review.records.length === 14 && elective18Review.records.length === 14,
  "Elective 17 and 18 must each have a separate 14-row chapter-level desk audit.");
uniqueBy(elective17Review.records, "chapter_id", "Elective 17 chapter audit");
uniqueBy(elective18Review.records, "chapter_id", "Elective 18 chapter audit");
assert(elective17Review.records.every(row => row.chapter_id.startsWith("17.") && row.desk_fit_classification === "PARTIAL" && row.formal_acceptance_status === "OPEN"),
  "Elective 17 review must contain only PARTIAL rows with formal status OPEN.");
assert(elective18Review.records.every(row => row.chapter_id.startsWith("18.") && row.desk_fit_classification === "PARTIAL" && row.formal_acceptance_status === "OPEN"),
  "Elective 18 review must contain only PARTIAL rows with formal status OPEN.");

const depth = loadCsv("docs/169-chapter-depth-screening.csv");
assert(depth.records.length === 169, "Depth screen must contain 169 rows.");
uniqueBy(depth.records, "chapter_id", "Depth screening");

console.log(JSON.stringify({
  status:"PASS — REGISTER PARITY AND CONTROL INTEGRITY",
  canonicalChapters:coreIds.length,
  coreQnaItems:qna.records.length,
  qnaParityMismatches:qnaMismatches,
  objectiveResourceRows:objective.records.length,
  sourceFitDeskReviewRows:deskReviewRows,
  trackDeskReviews:deskCounts,
  resourceMappingRows:resourceLines.length,
  uniqueResourceUrls:resourceUrls.size,
  agencyCells:agency.records.length,
  rubricRows:rubrics.records.length,
  electiveChapters:electives.records.length,
  electiveKnowledgeChecks:electiveQna.records.length,
  depthScreenRows:depth.records.length,
  formalReviewStatesRemainOpen:true
}, null, 2));
