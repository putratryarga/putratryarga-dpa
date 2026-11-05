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
| Answers beginning with bare Boolean wording (e.g. "Tidak") | 23 |
| Absolute wording detector hits | 16 |
| Answer length range | 12–35 words |
| Median answer length | 15 words |

Every item is in the review queue because the per-item source-reference field is blank. The other flags identify possible editorial review needs, not demonstrated content errors. A short answer can be correct; Boolean wording can be appropriate when followed by a sufficient explanation; absolute language can be justified in some contexts.

### Priority-track triage

| Track | Items | Short-answer flags | Bare Boolean flags | Absolute wording |
|---|---:|---:|---:|---:|
| T02 | 30 | 6 | 1 | 1 |
| T03 | 30 | 5 | 0 | 3 |
| T07 | 30 | 7 | 2 | 0 |
| T10 | 30 | 16 | 0 | 0 |
| T13 | 33 | 15 | 0 | 1 |
| T16 | 36 | 9 | 0 | 0 |

### Required human review

For every item, add an authoritative source and exact supporting section, check correctness and date sensitivity, verify the expected answer fully responds to the question, record acceptable alternative answers, note ambiguity/difficulty, and obtain editorial/SME disposition. Do not promote any item to scored mode from this automated screen.

The item-by-item triage output is [507 Q&A automated triage CSV](507-qna-automated-triage.csv).

## 2. Agency-role evidence — 80 cells

| Signal | Count |
|---|---:|
| Agency × core-track rows | 80 |
| Rows without a populated exact source URL or Job ID | 80 |
| Rows with role-specificity still OPEN | 80 |
| Rows with currentness still OPEN | 80 |
| Rows with geography/seniority still OPEN | 80 |
| Rows with competency mapping still OPEN | 80 |

The existing evidence-class distribution (labels may be compound and are not quality scores):

- A/D: 3
- A: 27
- D/B: 1
- B: 9
- D: 23
- B/D: 10
- D/A: 5
- A/B: 2

There are 37 cells whose inherited class includes A (direct employer-hosted JD claim in the source matrix), but none of the 80 row-level register entries currently carries an exact URL/Job ID, dated requisition, employer entity, role scope, geography and seniority proof. That is a traceability gap in this granular register; it does not imply the historical source URLs are all absent elsewhere in the archive. Each A-labelled cell requires the original JD URL/ID to be recovered and current status checked.

The row-level queue is [80 agency cell validation register](80-agency-role-cell-validation-register.csv). No direct/current agency vacancy or full competency coverage is inferred from the inherited letter label.

## 3. Boundary

These heuristics only prioritize human effort. They do not judge technical accuracy, acceptability, completeness, source fit, currentness or agency-role validity. All Q&A, 80 cells, 169 objective-source links, 169 rubrics and 28 elective chapters keep OPEN status until direct evidence and reviewer decisions are recorded.
