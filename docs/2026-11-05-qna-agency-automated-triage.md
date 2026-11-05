# Automated P1 Editorial and Agency Evidence Triage

**Date:** 5 November 2026  
**Scope:** 507 core Q&A records and 80 agency × core-track evidence cells.  
**Status:** deterministic red-flag triage only; no item or agency cell approved.

## 1. Core Q&A — 507 items

| Signal | Count |
|---|---:|
| Q&A rows parsed | 507 |
| Items with supporting item-level source references | 66 |
| Missing item-level source references | 441 |
| Answers below 14 words (review heuristic) | 122 |
| Answers beginning with bare Boolean wording | 21 |
| Absolute wording detector hits | 16 |
| Answer length range | 12–42 words |

The 66 answer-level source mappings come from separate first-pass desk-review batches: T06 Programmatic (36 items) and T10 Analytics & Measurement (30 items). The references support further review; they do not approve the answers or imply that the source fully validates every part of an explanation.

All 507 Q&A items remain in the review queue until item-level technical accuracy, acceptable alternatives, ambiguity, source fit, editorial and SME review are recorded. Flags are heuristic only; a short answer, Boolean opening or absolute phrase can be appropriate in context.

The item-by-item output is [507 Q&A automated triage CSV](507-qna-automated-triage.csv). The batch reviews are [T06 Programmatic](T06-12-chapter-qna-technical-desk-review.md) and [T10 Analytics & Measurement](T10-10-chapter-qna-technical-desk-review.md).

## 2. Agency-role evidence — 80 cells

| Signal | Count |
|---|---:|
| Agency × core-track rows | 80 |
| Cells with at least one per-cell source reference | 80/80 |
| Source references attached across cells | 101 |
| Cells missing an evidence URL or Job ID field | 0/80 |
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

All 80 rows contain at least one source reference (101 references total). Source type varies: direct employer-hosted JDs, official career indexes, employer-attributed LinkedIn postings, adjacent roles and historical/expired requisitions. The link is a traceability improvement, not an automatic confirmation that the role is direct, currently open, Indonesia-based, or covers every chapter competency.

The final source-link gap, **T01 × WPP Media**, was linked to two employer-hosted WPP Media roles: Manager, Performance (Beirut/Lebanon; 4+ years) and Senior Digital Performance Manager (Eindhoven/Netherlands; 5+ years). These establish cross-channel performance role evidence, not entry-level Indonesia scope or every Full-Stack business competency.

The separate [80-cell agency source-currentness snapshot](80-agency-role-source-currentness-snapshot-2026-11-05.md) records a later public-source recheck: selected current Jakarta role leads for WPP, Publicis and Dentsu; local office/career-route evidence but no verified direct local requisition for every role family at Havas and Omnicom. All 80 cells remain OPEN for currentness, role specificity, geography/seniority and chapter competency mapping. The inherited A/B/D labels must still be checked against each exact source and role unit/brand.

The per-cell queue is [80 agency cell validation register](80-agency-role-cell-validation-register.csv) and [80-cell gap triage CSV](80-agency-cell-evidence-gap-triage.csv).

## 3. Boundary

The Q&A and agency screens only prioritize review effort. They do not validate answer correctness, resource fit, current job vacancies, employing entity equivalence, seniority or competency coverage. All 507 Q&A items, 80 agency cells, 169 objective-source links, 169 rubrics and 28 elective chapters retain OPEN formal status until direct evidence and reviewer decisions are recorded.
