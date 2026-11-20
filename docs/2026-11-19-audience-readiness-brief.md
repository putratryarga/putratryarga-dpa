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

The pre-batch exact branch commit `244854903d954b66b7cef94e8b4e306bfb6faea8` passed all three GitHub Actions workflows. The subsequent source-fit batch is on `235b09a39d2f828df250e60f7fbbf2b7ae443bab`; two workflows passed, while static QA exposed the stale hard-coded 127-URL expectation and is being corrected.

- [Guide Registry and Browser QA](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44525378074): 169 chapter-to-guide ID matches, 175 rendered material panels with required non-empty lesson sections, all 16 role switches, selected-role isolation, no overlap among 16 role cards at desktop/mobile, 390px mobile no-overflow and zero browser page errors.
- [Remediation Static QA](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44525377314): chapter/register/resource/rubric/Q&A row parity and deterministic validation passed. Synthetic score vectors were used only for a calculation self-test.
- [Quiz Engine QA](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44525377322): isolated formative prototype tests, Playwright browser flow, targeted axe checks, keyboard navigation and mobile overflow passed.

The branch also has a Vercel preview deployment in READY state: [Open preview](https://putratryarga-d8vwsuzkt-elric3.vercel.app). Deployment READY is not the same as content approval, authenticated visual QA or production publication.

## What is not yet approved

- Technical accuracy, depth and seniority fit for all 169 chapters still require independent review.
- Source-to-learning-objective fit has first-pass desk review for **105/169** core chapters; **74** still need first-pass desk review. Formal objective-level fit and Indonesia access/price/language/eligibility remain open for all 169.
- All **507** Q&A remain reflective/non-scored and require answer correctness, alternate-answer and SME/editorial approval.
- T08 has first-pass source-specific desk dispositions for all 10 chapters using official 2026 Bisnis publisher material, Google Ad Manager, WFA, MRC and Indonesian tax references; all ten remain PARTIAL, not formally accepted. See [T08 source-fit review](T08-10-chapter-source-fit-review.md).
- T09 has first-pass source-specific desk dispositions for all 10 Ad Operations chapters using CM360, GTM, TikTok and IAB sources; all ten remain PARTIAL, not formally accepted. See [T09 source-fit review](T09-10-chapter-source-fit-review.md).
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

The first-pass desk-review register now covers 95/169 core chapters. The additional T08 batch covers CH01–CH10 and all ten are PARTIAL. The official 2026 Bisnis Indonesia and Bisnis.com Regional rate cards are publisher-specific examples, not a market-wide benchmark. The 74 remaining chapters still need first-pass desk review; formal source-fit, Indonesia access, Q&A, rubric, agency evidence, SME and learner-pilot acceptance gates remain open.


## 20 November 2026 — T09 Ad Operations source-fit update

The first-pass desk-review register now covers 105/169 core chapters; 64 remain. T09 CH01–CH10 were reviewed against CM360, GTM, TikTok and IAB source sections; all ten are PARTIAL. Formal objective-level fit, Indonesia access, cost/language/account eligibility, live testing and SME approval remain open. Current chapter-row resource inventory: 153 unique URLs across 169 rows; every row has at least two unique resource links.
