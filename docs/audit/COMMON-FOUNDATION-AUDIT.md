# Common Foundation Six-Chapter Audit

**Baseline audit:** 21 November 2026 (Asia/Bangkok)
**Scope:** `DPA-CF-CH01`–`DPA-CF-CH06`, shared by the 16 core tracks.
**Baseline disposition:** present and reachable, but **PARTIAL / NOT READY** as a learning sequence. The baseline below records what the code contained before the 22 November implementation pass.

## Cross-check results

| Chapter | Current topic outline | Current deliverable | Source-level gap |
|---|---|---|---|
| CF1 Business & Commercial Understanding | Business model, revenue/margin/unit economics, market/competitors | One-page business analysis | No worked unit-economics example, sequenced lesson, knowledge checks or calibrated rubric |
| CF2 Client Brief & Problem Framing | Brief critique, objectives/constraints/scope, problem statement | Restated brief + success criteria | No worked brief, acceptance example, knowledge checks or calibrated rubric |
| CF3 Consumer & Audience Fundamentals | Needs/tension/behavior, segmentation, journey/funnel, insight vs data | Two-segment audience snapshot | No worked research example, evidence-quality exercise, knowledge checks or calibrated rubric |
| CF4 Marketing & Media Mathematics | CPM/CPC/CTR/CVR/CPA/ROAS, reach/frequency, sensitivity | Budget/rate forecast + ±20% sensitivity | No worked calculation or error-check example, knowledge checks or calibrated rubric |
| CF5 Measurement Fundamentals | KPI vs metric, attribution, data quality, consent/privacy | KPI tree with definitions and data sources | No worked KPI tree, attribution-limit example, knowledge checks or calibrated rubric |
| CF6 Agency Workflow & Professional Practice | Brief-to-report workflow, spreadsheet practice, privacy/disclosure/synthetic-data ethics | Documented working spreadsheet | No sample working file, QA scenario, knowledge checks or calibrated rubric |

All six IDs are present in the learner HTML and are kept as a shared layer. Each source block currently gives three topic bullets and one portfolio deliverable; a time estimate is shown. That establishes a useful outline but not the directive's full chapter elements (teaching sequence, worked example, practice with acceptance criteria, chapter checks and assessed evidence).

The runtime currently includes the six Common Foundation panels in the shared selector flow. Its credential map covers 4/6 chapters with five external credential placements; no-route states for CF1 and CF4 are portfolio-first decisions, not claims that no credential exists in the market. CF source/resource and award fit have not received full formal SME acceptance.

## Required closure evidence

For each of the six chapters, add a chapter-specific explanation, worked example (with Indonesian context where appropriate), practice steps, at least three answer-reviewed non-scored knowledge checks, a complete deliverable rubric and two objective-fit sources. Then run source/access review, specialist review, learner pilot and accessibility checks. Do not promote current outlines to complete lessons based on structural browser rendering.


## 22 November 2026 — implementation and source recheck

**Code changed:** `index.html` (`CF_GUIDE_NOTES`, `CF_LESSON_META`, and source-catalog mapping), `chapter-resources.js` (the six objective-level source lists), and `scripts/test-dpa-browser-qa.cjs` (CF-specific rendered-panel acceptance checks). Six draft lessons now render explanations, Indonesian-context worked examples, seven sequenced actions, three question-and-discussion checks, four or more glossary items, guided practice, prerequisite/level/track links, limitations and four self-review criteria. All worked examples are synthetic or simulated. The displayed criteria are formative, not calibrated learner rubrics.

### Objective-level source desk review

The sources below were opened on 22 November 2026 to verify current page identity and inspect the cited section. `Web accessible` means the page content was readable during this desk check; it is **not** a regional access, account, affordability or learner usability test from Indonesia. Fit labels are a first-pass desk judgment, not formal acceptance.

| Chapter | Publisher and exact destination | Relevant section / first-pass fit | Limits and unresolved access checks |
|---|---|---|---|
| CF1 | [OpenStax managerial accounting, §3.1](https://openstax.org/books/principles-managerial-accounting/pages/3-1-explain-contribution-margin-and-calculate-contribution-margin-per-unit-contribution-margin-ratio-and-total-contribution-margin) | Contribution margin, variable/fixed cost and CVP; **DIRECT** for contribution-margin concepts. | Textbook examples are not marketing CAC/LTV policy; publicly readable in web recheck, Indonesia access/language/offline availability not tested. |
| CF1 | [U.S. SBA — Plan your business](https://www.sba.gov/counseling/plan-your-business/) | “Market research and competitive analysis,” plus startup cost/break-even content on the page; **PARTIAL** for market and commercial context. | U.S.-specific; do not use its market data as Indonesia evidence. The previously selected nested path returned 404; the verified root page was substituted in both learner source lists. |
| CF2 | [UK Government GovS 011](https://www.gov.uk/government/publications/government-functional-standard-govs-011-communication/government-functional-standard-govs-011-communications) | Sections 4.1.2 and 5 on campaign governance, objectives, audience insight, strategy and planning; **DIRECT/PARTIAL** for brief-framing method. | It is a UK public-sector communications standard; it does not create Indonesian commercial, agency or legal requirements. |
| CF2 / CF6 | [Forage — Omnichannel Marketing simulation](https://www.theforage.com/simulations/forage/sponsored-content-omnichannel-marketing-5iep) | Applied campaign/simulation route; **SUPPORTING** practice source. | User login, time, exact completion conditions, local eligibility and award wording were not independently verified in this source pass; not a professional certification. |
| CF3 | [HubSpot Academy Inbound course](https://academy.hubspot.com/courses/inbound) | Page describes personas, buyer journey, shared goals and inbound method; **DIRECT/PARTIAL** for these concepts. | Provider-specific lens; page labels it a free certification course but requires provider account/assessment; Indonesian language and local access not confirmed. |
| CF3 | [Nielsen Norman Group — Journey Mapping 101](https://www.nngroup.com/articles/journey-mapping-101/) | Current article dated 13 November 2026 describes journey maps and their components; **DIRECT/PARTIAL** for mapping method. | UX journey mapping is not representative consumer research or causal evidence. Price/member access and Indonesia usability were not checked. |
| CF4 | [OpenStax managerial accounting, §3.1](https://openstax.org/books/principles-managerial-accounting/pages/3-1-explain-contribution-margin-and-calculate-contribution-margin-per-unit-contribution-margin-ratio-and-total-contribution-margin) | Contribution margin and cost-volume-profit arithmetic; **DIRECT** for margin basis, not ad metrics. | Does not validate a platform's metric definitions or forecast assumptions. |
| CF4 / CF5 | [Google Ads Help — Conversion measurement](https://support.google.com/google-ads/answer/1722022?hl=en) | Conversion-action definitions and platform measurement; **SUPPORTING** for platform-specific examples. | Google Ads terminology/configuration is not universal or a company source-of-truth; account and market access were not tested. |
| CF5 | [Google Analytics — Demo account](https://support.google.com/analytics/answer/6367342) | Official demo-property access and learning instructions; **DIRECT** for practice with a demo analytics interface. | Requires a Google account and adds demo access to that account; the demo is not learner/client data. Indonesia sign-in usability was not tested. |
| CF5 | [Google Ads Help — Attribution models](https://support.google.com/google-ads/answer/6259715?hl=en) | Explains credit-allocation models and current Google Ads support; **DIRECT/PARTIAL** for attribution boundaries. | Vendor-specific; its page notes several historic models are no longer supported, so availability must be rechecked before platform instruction. Attribution does not establish incrementality. |
| CF5 / CF6 | [JDIH BPK — UU 27/2022 on Personal Data Protection](https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022) | Official legal record reports the law in force and lists Constitutional Court decision 151/PUU-XXII/2024; **SUPPORTING** legal source. | A current implementing-rule inventory and case-specific applicability review remain OPEN. The lesson does not decide legal basis or provide legal advice. |
| CF6 | [Dewan Periklanan Indonesia / P3I — EPI amendment 2020 PDF](https://p3i-pusat.com/wp-content/uploads/2020/09/Etika-Pariwara-Indonesia-Amandemen-ed2020.pdf) | Advertising honesty and professional practice; **SUPPORTING** industry code, not legislation. | P3I's 2026 public update says EPI was last amended in 2020 and encourages DPI to form an update team. No replacement edition was located in this recheck; reconfirm with DPI before formal review. |
| CF6 | [JDIH BPK — UU 28/2014 on Copyright](https://peraturan.bpk.go.id/Details/38690) | Official law record reports status in force; **SUPPORTING** rights-awareness source. | Does not decide licence scope for a specific creator/asset; contract/platform/local legal review remains necessary. |

### Resolved source defect and open gates

The former SBA nested URL `.../market-research-and-competitive-analysis` returned 404 in the live source check. The canonical SBA business-planning page is live and contains the named section; the source URL was corrected in the shared foundation HTML catalog and objective-level map. The selected catalog indexes were cross-checked against their actual order after adding the new references. `scripts/test-dpa-browser-qa.cjs` now checks all six rendered CF panels for level/prerequisite/track/limit fields, four teaching steps, three discussed checks, four glossary terms, four self-review criteria, two unique source links and an explicitly simulated example.

Still **OPEN**: run that browser test on the exact integrated SHA; independently assess Indonesia-region access, account setup, language, paywall/time/cost and issuer terms; verify current Indonesian implementing rules and EPI status with qualified reviewers; approve each objective-source fit; review content/editorial accuracy; calibrate learner rubrics; conduct learner pilot, keyboard/screen-reader/contrast review, and owner/SME sign-off. This work does not make CF1–CF6 audience-ready.
