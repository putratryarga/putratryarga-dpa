# Digital Performance Architect — Audience Readiness Brief

**As of:** 20 November 2026  
**Working build:** `audit/full-dpa-remediation-2026-11-05` · latest branch build; exact candidate SHA and CI recorded in the execution ledger  
**Release status:** Preview / development. Not a production launch.

## What the roadmap contains

- **16 core specialist tracks** with a shared layer of **6 Common Foundation chapters**.
- **2 advanced electives** kept separate from the core count: CRO / Growth / Experience Optimization, and Traditional Media Planning & Buying.
- **169 core specialist chapter IDs** with 169 authored guide objects; the current preview renders 175 learning panels including the six shared foundation chapters.
- **507 reflective knowledge-check Q&A items** in the curriculum registers. These are not yet an approved scored assessment bank.
- **28 first-pass elective chapter drafts** (14 per elective). These remain development drafts, not SME-approved learner curriculum.

## What has passed engineering QA

The T09 source-fit batch is on `d00c87a8149822e2f4528aa07256961d919c5ab0`. Guide/browser and quiz checks were still running at the last inspection; static QA exposed a literal newline-delimiter typo in its new T09 CSV row-count check. The parser has been corrected in the next candidate commit; exact-head CI must be rerun before calling this checkpoint green.

- [Guide Registry and Browser QA](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44525378074): 169 chapter-to-guide ID matches, 175 rendered material panels with required non-empty lesson sections, all 16 role switches, selected-role isolation, no overlap among 16 role cards at desktop/mobile, 390px mobile no-overflow and zero browser page errors.
- [Remediation Static QA](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44525377314): chapter/register/resource/rubric/Q&A row parity and deterministic validation passed. Synthetic score vectors were used only for a calculation self-test.
- [Quiz Engine QA](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44525377322): isolated formative prototype tests, Playwright browser flow, targeted axe checks, keyboard navigation and mobile overflow passed.

The branch also has a Vercel preview deployment in READY state: [Open preview](https://putratryarga-d8vwsuzkt-elric3.vercel.app). Deployment READY is not the same as content approval, authenticated visual QA or production publication.

## What is not yet approved

- Technical accuracy, depth and seniority fit for all 169 chapters still require independent review.
- Source-to-learning-objective fit has first-pass desk review for **115/169** core chapters; **54** still need first-pass desk review. Formal objective-level fit and Indonesia access/price/language/eligibility remain open for all 169.
- All **507** Q&A remain reflective/non-scored and require answer correctness, alternate-answer and SME/editorial approval.
- T08 has first-pass source-specific desk dispositions for all 10 chapters using official 2026 Bisnis publisher material, Google Ad Manager, WFA, MRC and Indonesian tax references; all ten remain PARTIAL, not formally accepted. See [T08 source-fit review](T08-10-chapter-source-fit-review.md).
- T09 has first-pass source-specific desk dispositions for all 10 Ad Operations chapters using CM360, GTM, TikTok and IAB sources; all ten remain PARTIAL, not formally accepted. See [T09 source-fit review](T09-10-chapter-source-fit-review.md).
- T04 has first-pass source-specific desk dispositions for all 10 Paid Search chapters using Google Ads and Microsoft Advertising references. All ten remain PARTIAL; the review records the 2026 Smart Bidding, Enhanced Conversions and Data Manager changes. See [T04 source-fit review](T04-10-chapter-source-fit-review.md).
- The **80 agency × track evidence cells** are represented, but currentness, exact employer/JD scope, geography, seniority and competency validation remain partial/open.
- All **28 elective chapters** have first-pass desk reviews, but every chapter remains partial pending technical/source/SME, market/legal, rubric and learner-pilot validation.
- The historical 169×7 score matrix, original audit prompt and original 23 findings/D-1…D-12 have not been recovered; they are not reconstructed from synthetic data.

## Audience-safe description

> Digital Performance Architect is a role-based learning roadmap with 16 core specialist tracks, six shared foundation chapters and two advanced elective pathways. Its current development preview contains 169 core chapter guides and has passed automated checks for chapter mapping, material-panel completeness, role selection and responsive layout. Curriculum source fit, independent expert review, assessment approval and production release are still in progress.

## Claims to avoid for now

Do not describe the roadmap as a fully validated or accredited qualification. Do not promise an official DPA certificate, a scored 507-question quiz bank, or a production-ready learner assessment system. Do not present synthetic exercises as client outcomes or treat agency evidence routes as proof that every role has a current Indonesian vacancy.

## Release recommendation

Use the preview for a **curriculum-architecture walkthrough or feedback session**, clearly labelled as a development preview. Keep registration, credential claims and learner completion promises on hold until the substantive content, SME, assessment, local-market and production gates are approved.


## 20 November 2026 — T08 source-fit update

At the checkpoint immediately after the T08 batch and before T09, the first-pass desk-review register covered 95/169 core chapters. T08 CH01–CH10 were all PARTIAL. The official 2026 Bisnis Indonesia and Bisnis.com Regional rate cards are publisher-specific examples, not a market-wide benchmark. At that T08 checkpoint, 74 chapters remained without a first-pass review; this was superseded by the subsequent T09 batch. Formal source-fit, Indonesia access, Q&A, rubric, agency evidence, SME and learner-pilot acceptance gates remain open.


## 20 November 2026 — T09 Ad Operations source-fit update

The first-pass desk-review register now covers 115/169 core chapters; 54 remain. T09 CH01–CH10 were reviewed against CM360, GTM, TikTok and IAB source sections; all ten are PARTIAL. Formal objective-level fit, Indonesia access, cost/language/account eligibility, live testing and SME approval remain open. Current chapter-row resource inventory: 153 unique URLs across 169 rows; every row has at least two unique resource links.


## 20 November 2026 — T04 Paid Search update

First-pass desk review now covers 115/169 core chapters; 54 remain. T04 CH01–CH10 are source-reviewed and all ten PARTIAL. Current Google Ads changes for June 2026 Smart Bidding naming, April 2026 Enhanced Conversions consolidation and 15 June 2026 Data Manager API migration are recorded. Microsoft is a bounded comparator, not equal-depth coverage. Formal fit, Indonesia access, live account tests and SME approval remain OPEN. Chapter-row map has 181 unique URLs across 169 rows.
