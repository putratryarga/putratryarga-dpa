# Automated P1 Editorial and Agency Evidence Triage

**Date:** 5 November 2026  
**Scope:** 507 core Q&A records and 80 agency × core-track evidence cells.  
**Status:** deterministic red-flag triage only; no item or agency cell approved.

## 1. Core Q&A — 507 items

| Signal | Count |
|---|---:|
| Q&A rows parsed | 507 |
| Items with supporting item-level source references | 165 |
| Missing item-level source references | 342 |
| Answers below 14 words (review heuristic) | 79 |
| Answers beginning with bare Boolean wording | 18 |
| Absolute wording detector hits | 16 |
| Answer length range | 12–45 words |

The 165 answer-level source mappings come from separate first-pass desk-review batches: T06 Programmatic (36), T10 Analytics & Measurement (30), T14 Creator & Influencer Partnerships (36), T12 CRM & Lifecycle (30) and T13 Content Strategy & Creation (33). These references support further review; they do not approve answers or imply that each source validates every part of an explanation.

All 507 Q&A items remain in the review queue until technical accuracy, acceptable alternatives, ambiguity, source fit, editorial and SME review are recorded. Flags are heuristic only; a short answer, Boolean opening or absolute phrase can be appropriate in context.

The item-by-item output is [507 Q&A automated triage CSV](507-qna-automated-triage.csv). Batch reviews: [T06 Programmatic](T06-12-chapter-qna-technical-desk-review.md), [T10 Analytics & Measurement](T10-10-chapter-qna-technical-desk-review.md), [T14 Creator & Influencer Partnerships](T14-12-chapter-qna-technical-desk-review.md), and [T12 CRM & Lifecycle](T12-10-chapter-qna-technical-desk-review.md), and [T13 Content Strategy & Creation](T13-11-chapter-qna-technical-desk-review.md).

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

All 80 rows contain at least one source reference (101 references total). Source type varies: direct employer-hosted JDs, official career indexes, employer-attributed LinkedIn postings, adjacent roles and historical/expired requisitions. Link presence is not proof that a role is direct, currently open, Indonesia-based or covers every chapter competency.

The [80-cell agency source-currentness snapshot](80-agency-role-source-currentness-snapshot-2026-11-05.md) records selected current Jakarta role leads for WPP, Publicis and Dentsu, plus local-office/career-route evidence at Havas and Omnicom. It is a currentness triage, not cell approval. All 80 remain OPEN for role specificity, currentness, geography/seniority and chapter competency mapping.

The per-cell queue is [80 agency cell validation register](80-agency-role-cell-validation-register.csv) and [80-cell gap triage CSV](80-agency-cell-evidence-gap-triage.csv).

## 3. Boundary

The Q&A and agency screens only prioritize review effort. They do not validate answer correctness, resource fit, current job vacancies, employing entity equivalence, seniority or competency coverage. All 507 Q&A items, 80 agency cells, 169 objective-source links, 169 rubrics and 28 elective chapters retain OPEN formal status until direct evidence and reviewer decisions are recorded.


### 4. Correction notes

- T12-CH01-Q01 was corrected to remove a dangling duplicated phrase. Previous wording is retained in the master Q&A register's previous-revision field and T12 review CSV.
- Five T14 source references that mistakenly used the UU 17/2014 URL slug for UU 28/2014 were corrected to the proper UU 28/2014 BPK URL. EPI 2020 is described as a self-regulatory code; consumer testimony and individual endorsement are distinguished.
- T13 answers remain reflective/non-scored and unapproved; item-level sources do not constitute answer-key approval.
