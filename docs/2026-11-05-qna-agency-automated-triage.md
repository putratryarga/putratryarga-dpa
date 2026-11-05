# Automated P1 Editorial and Agency Evidence Triage
**Date:** 5 November 2026  
**Scope:** 507 core Q&A records and 80 agency × core-track evidence cells.  
**Status:** deterministic red-flag triage only; no item or agency cell approved.

## 1. Core Q&A — 507 items

| Signal | Count |
|---|---:|
| Q&A rows parsed | 507 |
| Missing explicit source reference in item register | 507 |
| Answers below 14 words (review heuristic) | 152 |
| Answers beginning with bare Boolean wording | 23 |
| Absolute wording detector hits | 16 |
| Answer length range | 12–35 words |
| Median answer length | 15 words |

Every Q&A item remains in the review queue because its item-level source-reference field is blank. These flags are heuristic only; a short answer, Boolean opening or absolute phrase can be appropriate in context.

The item-by-item output is [507 Q&A automated triage CSV](507-qna-automated-triage.csv).

## 2. Agency-role evidence — 80 cells

| Signal | Count |
|---|---:|
| Agency × core-track rows | 80 |
| Cells with at least one per-cell source reference | 79/80 |
| Source URLs/references linked across cells | 99 |
| Cells still missing an exact URL/Job ID | 1/80 |
| Rows with role-specificity OPEN | 80 |
| Rows with currentness OPEN | 80 |
| Rows with geography/seniority OPEN | 80 |
| Rows with competency mapping OPEN | 80 |

### Evidence-class labels inherited from the matrix

- A/D: 3
- A: 27
- D/B: 1
- B: 9
- D: 23
- B/D: 10
- D/A: 5
- A/B: 2

The granular register now attaches **99 source references across 79 cells**. Source type varies: direct employer-hosted JDs, official career indexes, employer-attributed LinkedIn postings, adjacent roles and historical/expired requisitions. The link is a traceability improvement, not an automatic confirmation that the role is direct, currently open, Indonesia-based, or covers every chapter competency.

The one cell still missing a per-cell source link is **T01 × WPP Media**. The matrix statement refers to performance marketing/integrated planning evidence with varying titles and markets; recover the exact source or preserve the gap rather than substituting an unrelated job.

All 80 rows remain OPEN for employer/source revalidation, role specificity, currentness, geography/seniority and chapter competency mapping. The A/B/D evidence labels are inherited classifications and must be checked against the attached source and the exact role unit/brand.

The per-cell queue is [80 agency cell validation register](80-agency-role-cell-validation-register.csv) and [80-cell gap triage CSV](80-agency-cell-evidence-gap-triage.csv).

## 3. Boundary

The Q&A and agency screens only prioritize review effort. They do not validate answer correctness, resource fit, current job vacancies, employment entity equivalence, seniority or competency coverage. All Q&A, 80 cells, 169 objective-source links, 169 rubrics and 28 elective chapters retain OPEN statuses until direct evidence and reviewer decisions are recorded.
