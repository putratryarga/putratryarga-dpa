# Priority Track Source Remediation — 5 November 2026
**Scope:** T02, T03, T07, T10, T13 and T16 after the T08 remediation pass.  
**Status:** Source inventory enriched; track-level status remains PARTIAL; all 169 objective-level fit decisions remain OPEN.

## 1. What changed

- Replaced the initial general MRC and IAB source routes with precise MRC OOH, MRC Retail Media and IAB Europe V2.1 references. The current 169-chapter map has 67 unique URLs (169 rows). The six-track enrichment affects 21 chapter rows.
- Updated 21 chapter rows in T03, T07, T10, T13 and T16. T02 received no new URL in this pass because GovS 011 and ICC/ESOMAR 2025 were already mapped; its material insight/research gaps remain.
- Kept the 169-objective resource-fit register at **OPEN for every chapter**. Source mapping is not objective-level source fit, local access confirmation, SME review or curriculum approval.
- The 63 chapters across the six priority tracks remain separately identifiable in `docs/169-objective-resource-fit-register.csv`.

## 2. Track-by-track source mapping

### T02 — Connection Planning

Existing mapped sources include the UK Government communications functional standard GovS 011 and the ICC/ESOMAR International Code (2025). They support planning lifecycle/governance and professional research ethics, respectively. They do not by themselves establish a complete curriculum for cultural insight, communication theory, qualitative consumer research, proposition development or neutral cross-channel connection planning.

**Disposition:** no source-count change; track coverage remains PARTIAL. Further sources need to be tied to the exact learning objective and reviewed for relevance beyond public-sector UK communications or general research ethics.

### T03 — Media Planning

Added the MRC Out-of-Home Measurement Standards (Phase 1 & 2 Combined, final December 2025) PDF to CH03, CH06, CH09 and CH10: https://mediaratingcouncil.org/sites/default/files/Standards/MRC%20OOH%20Standards%20Combined_FINAL.pdf

The combined MRC PDF identifies:
- Out-of-Home Measurement Standards (Phase 1 & 2), last updated December 2025;
- Digital Audio Measurement Standards, issued January 2018;
- Cross-Media Measurement Standard — Phase I: Video, issued September 2019.

The OOH standard is relevant to the OOH portion of inventory evaluation and measurement planning. The MRC source is a standards route, not evidence that Indonesia has adopted an identical OOH currency or that local provider data is available. It does not close radio audience measurement, Indonesia-specific GRP/TRP/CPP methodology, cross-media deduplication, current media-owner terms or local TV audience-source validation.

**Disposition:** track remains PARTIAL. The MRC source improves standards coverage only; Indonesia-specific measurement-provider and media-owner evidence remains required.

### T07 — Retail & Commerce Media

Added to CH03, CH08, CH09 and CH10:
- IAB Europe Commerce (Incl. Retail) Media Measurement Standards V2.1 article, dated 22 January 2026: https://iabeurope.eu/knowledge_hub/iab-europes-commerce-incl-retail-media-measurement-standards-v2/;
- IAB/MRC Retail Media Measurement Guidelines (January 2024) direct PDF: https://mediaratingcouncil.org/sites/default/files/Standards/IAB_Retail_Media_Measurement_Guidelines_January2024.pdf.

The V2.1 article describes a refined measurement funnel, gross/net sales definitions, quick-commerce metrics, a formal incrementality definition and approved methods, five new-to-brand/new-to-category timeframes, measurement/insights tools, and a 30-day default lookback with flexible options. The MRC PDF contains separate chapters for data quality, audience measurement, delivery/viewability, IVT, attribution, incrementality (RCT, synthetic control and matched-market), reporting/transparency, data privacy and in-store measurement.

These standards improve measurement vocabulary and comparison criteria. IAB Europe guidance is European industry material, and MRC materials are standards references; neither establishes current Indonesian marketplace feature availability, platform eligibility, local commercial fees, retailer data access, measurement implementation or contractual terms. Do not treat Walmart/Amazon examples as proxies for Shopee/Tokopedia/Lazada.

**Disposition:** track remains PARTIAL. Validate specific Indonesian products/accounts and retailer-provided measurement terms before learner release.

### T10 — Media Analytics & Measurement

Added:
- SQLBolt interactive SQL lessons to CH04;
- Hernán and Robins' *Causal Inference: What If* to CH07 and CH08.

SQLBolt's indexed lesson catalogue covers SELECT, filtering/sorting, JOINs, NULL handling, expressions, aggregates, subqueries and set operations. It is suitable as a practical introductory SQL exercise route; it is not a full BigQuery dialect, data-engineering or warehouse-performance curriculum.

The *What If* book is available free online from its authors and addresses causal inference without models, with models and with complex longitudinal data. It is a substantial methodological supplement, not a marketing-specific campaign measurement textbook. Learners still need applied experiments, randomized/holdout examples, power and sample-size practice, SQL execution checks, data QA and qualified review.

**Disposition:** track remains PARTIAL. The source enrichments do not replace the runnable synthetic dataset/query tests and independent econometrics/causal-method validation required for the chapters.

### T13 — Content Strategy & Creation

Added W3C Web Content Accessibility Guidelines (WCAG) 2.2 to CH01, CH06, CH07 and CH08.

WCAG 2.2 is a W3C Recommendation published 12 December 2024 and provides testable web-content accessibility criteria. It is relevant to accessible digital content and platform adaptation, including how content is presented and operated across devices.

It is not a content-strategy framework, cultural-insight source, copyright clearance, creator usage-rights contract, music licence or Indonesian legal opinion. Editorial quality, brand claims, organic measurement, accessibility implementation and rights management need their own source and reviewer evidence.

**Disposition:** track remains PARTIAL. Accessibility coverage is improved; editorial research, IP/creator rights and organic platform-specific strategy remain gaps.

### T16 — Community Management & Advocacy

Added the NSW Government's Community Management for Social Media guide to CH05, CH07, CH08, CH10, CH11 and CH12.

The guide covers public community guidelines, active/passive/hands-off moderation choices, monitoring cadence, negative-feedback responses, issue escalation, privacy handling for personal information and crisis response. It is a useful operational playbook reference.

It is guidance for a New South Wales public-sector context, not Indonesian law, a substitute for company policy, platform terms, legal review or a locally approved crisis response procedure. Its moderation and recordkeeping suggestions must be adapted to the relevant organization, channel, risk and jurisdiction.

**Disposition:** track status improves from a narrow Meta-heavy source family, but remains PARTIAL. Indonesian privacy/consumer-safety/legal input, cross-platform tooling, social listening, customer care and crisis escalation review remain open.

## 3. Access and source-verification log

Manual source checks in this pass:
- **Directly opened/readable:** exact MRC OOH standards PDF; exact IAB/MRC Retail Media Measurement Guidelines PDF; IAB Europe V2.1 article; *What If* author page; W3C WCAG 2.2; NSW Government community-management guide.
- **Search-index evidence only / direct access not confirmed:** SQLBolt lesson catalogue (search result exposes interactive SELECT/JOIN/aggregate/subquery topics; direct open returned cache miss).
- **Download caveat:** the V2.1 article is readable, but the linked standards PDF returned an HTTP retrieval error during this check; the article is used as the source route, not a claim that the PDF download was validated.

The previous automated retrieval snapshot of 46/48 resources predates the six URL additions and must not be restated as 46/54 or 54/54. The Jakarta Post advertising-terms page and YouTube Help rate-limit issues remain separate prior access caveats. Each newly added URL still requires a learner-side access check from Indonesia, with language, paywall/account, duration and last-checked date recorded.

## 4. Acceptance boundary

- Resource map structure: 169 rows; 55 unique URLs; at least two unique sources per chapter remains statically checked.
- Track-level coverage: T02, T03, T07, T10 and T13 remain PARTIAL; T16 has additional sources but is not promoted to PASS.
- Objective-level source fit: 169/169 remain OPEN pending exact section-to-objective mapping and fit classification.
- Indonesia access/cost/language/eligibility: OPEN.
- SME/technical chapter sign-off: OPEN.

**No track or chapter is marked validated solely because a source URL was added.**


## 5. T10 chapter-level source-fit review — 5 November 2026

T10 received 12 additional source references (11 unique URLs, including one shared Tableau resource) across CH02, CH03, CH04, CH05, CH07, CH08, CH09 and CH10. The current map is now 169 rows / 67 unique URLs. See [T10 — 10-Chapter Source-Fit Review](T10-10-chapter-source-fit-review.md) and the 10-row [T10 source-fit CSV](T10-10-chapter-source-fit-review.csv).

Desk classification: CH04 and CH07 have stronger method-source alignment; all ten remain PARTIAL overall. CH01 still lacks a direct KPI/measurement planning framework; CH02 lacks vendor-neutral taxonomy/lineage; CH03 lacks CM360/Floodlight and full platform reconciliation sources; CH04 still needs runnable spreadsheet/SQL validation; CH05 needs cross-tool dashboard governance; CH06 needs a worked diagnostic/root-cause case; CH07 needs explicit MTA vs incrementality vs MMM estimands and direct media measurement sources; CH08 needs MDE/power/sample-size calculation and stopping/multiple-testing controls; CH09 needs an executive-readout rubric; CH10 needs a reproducible end-to-end capstone package.

Source access is not universal. Some Google Analytics Help pages and the Optimizely statistical-significance article returned retrieval/cache limitations; those are not marked as verified Indonesia learner access. All ten formal acceptance/SME decisions remain OPEN.
