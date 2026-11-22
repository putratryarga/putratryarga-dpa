# Chapter-level credential and milestone implementation

**Implementation baseline:** DPA v11.2 review branch  
**Issuer desk-check date:** 21 November 2026  
**State:** First-pass implementation; NOT final chapter-level acceptance. Indonesia-market filter applied 22 November 2026; current learner selection and disposition are recorded in [Credential Market-Fit Audit — Indonesia and Global Agency Practice](delivery/credential-market-fit-audit-2026-11-22.md).

## Experience decision

No additional learner menu is introduced. The active role's chapter panel now presents four in-context milestones: **Learn → Earn → Apply → Master**. The credential map remains a secondary cross-track reference. A chapter can show up to three external routes to avoid turning the panel into a credential directory.

## Evidence taxonomy

- `professional_certification`: a provider's formal professional assessment/certification (e.g., Google Ads, Meta, TikTok, Amazon Ads). The issuer owns assessment and award.
- `vendor_course_certification`: a vendor-issued course certification. This is not automatically an independent or cross-industry qualification.
- `course_completion_credential`: a provider course/activity marked as a credential on the issuer page; not equivalent to the provider's professional certification exam.
- `course_completion_certificate`: a course-completion certificate, not a professional certification.
- Reference / documentation / learning path: remains neutral grey and is not advertised as an award.

A Paid / proctored label only appears where the issuer's route is described as a paid, proctored exam. Course access being free does not imply that every exam or related service is free.

## Mapping rules

1. Map only where the issuer-described scope has a defensible relationship to the chapter learning objective.
2. One credential may support several chapters; no new credential is invented to fill a chapter.
3. Every route links to the issuer's learner path and source facts.
4. Local prices, eligibility, exam-language options and account access are not inferred from a global marketing page. Open checks are displayed.
5. Where no route is selected, the page says no credential is mapped to that objective in this release and directs the learner to applied evidence. This is not a global claim that no credential exists.
6. DPA cannot observe completion in external provider accounts and does not auto-award or sync external credentials.
7. “Master” is self-review/assessment guidance only. It does not issue a DPA chapter badge or certificate.

## Historical pre-market-filter curation snapshot

> This table predates the 22 November 2026 Indonesia-market filter. It is retained for provenance only. The current 65-route selection, 145/169 Core coverage, 233 Core placements, and 2/6 Common Foundation coverage are defined in the market-fit audit and `docs/credential-route-mapping-register.csv`. Do not treat excluded Amazon, StackAdapt, Microsoft Retail/Display or product/customer-gated awards below as default Earn routes.

## First-pass curation in this historical snapshot

| Provider route | Evidence type | Chapter fit |
|---|---|---|
| Google Ads Search Certification | Professional certification | T04 Paid Search chapters 01–10 |
| Meta Certified Media Planning Professional | Professional certification | T03 selected media-planning objectives; Meta-specific only |
| Meta Certified Marketing Science Professional | Professional certification | T10-CH01, CH06–CH09 for KPI/measurement, analytics interpretation, effectiveness and experiment design; Meta-specific only |
| Meta Certified Media Buying Professional | Professional certification | T05 selected Paid Social objectives; Meta-specific only |
| TikTok Media Buying Professional Certification | Professional certification | T05 selected Paid Social objectives; at least one year hands-on experience required |
| Meta Blueprint buying-types course | Course-completion credential | T05-CH06 |
| Meta Blueprint Pixel/CAPI course | Course-completion credential | T05-CH07 |
| Meta Blueprint A/B testing course | Course-completion credential | T05-CH09 |
| StackAdapt Programmatic Masterclass | Vendor-issued course certification | T06 selected Programmatic objectives |
| Amazon Ads Programmatic Solutions Certification | Professional certification + digital badge/PDF | T06 selected Amazon programmatic objectives; global-platform caveat |
| Amazon Sponsored Ads Certification | Professional certification + digital badge/PDF | T07 selected sponsored-product objectives; not a local marketplace substitute |
| HubSpot Email Marketing Certification | Vendor-issued course certification | T12 selected email/lifecycle objectives |
| Semrush SEO Crash Course | Course-completion certificate | T11 foundational SEO objectives only |
| Google Analytics Certification | Professional certification | T10-CH03 and T10-CH06 (GA-specific analytics objectives) |
| Display & Video 360 Certification (2026) | Professional certification | T06-CH05 and T06-CH11 (DV360-specific DSP/optimization objectives) |
| Campaign Manager 360 Certification (2026) | Professional certification | T06-CH10 and T09-CH05 (CM360/Floodlight and ad-server setup) |
| LinkedIn Advertising Fundamentals Certification | Professional certification | T05-CH01 and T05-CH04 |
| LinkedIn Marketing Strategy Certification | Professional certification | T05-CH02 and T05-CH10 |
| LinkedIn Content and Creative Design Certification | Professional certification | T05-CH05 and T13-CH08 |
| LinkedIn Marketing Measurement Certification | Professional certification | T10-CH07 and T10-CH08 |

Google Analytics Certification is now included after the current official Analytics Academy/Skillshop support page confirmed an active certification path. The official support page confirms free preparation courses, but price for the certification assessment and Indonesia-specific eligibility remain unresolved; an APAC Grow with Google guide labels the India route paid, so the DPA must not assume the exam is free. The Trade Desk Programmatic 101 is learning-only unless a learner account/provider page explicitly awards a credential. Google Skillshop's current certification catalogue lists DV360, Search Ads 360 and Campaign Manager 360 certification course paths for 2026; the DPA maps only DV360 and CM360 where the chapter objective fits. Current public catalogue language, access and course path should be reconfirmed in a signed-in Indonesian learner account.

## Coverage and open gates

- Core: 169/169 chapter IDs in the credential audit map and CSV. 136/169 core chapters have at least one mapped external route (194 route placements); 33/169 core chapters remain applied-skill/portfolio-first in the current curated map. Common Foundation is tracked separately: 3/6 chapters have 4 route placements. This runtime count supersedes the earlier 50-chapter / 73-placement summary, which was stale in the current curation. This is a curated shortlist, not proof that other chapters lack provider credentials.
- The mapping itself remains `FIRST_PASS_MAPPING_NOT_SME_ACCEPTED`; source-to-objective relevance, course fit, Indonesia account access, final checkout price, prerequisites, credential availability and chapter assessment acceptance remain OPEN.
- Advanced Electives: 28/28 chapter IDs are captured separately in `28-elective-credential-route-review.csv`, but all are deliberately marked `NOT_YET_REVIEWED_IN_THIS_IMPLEMENTATION`. The elective curricula are not yet integrated into the chapter renderer.
- The current milestone strip is informational, not a credential progress engine. External completion is not imported; DPA awards are disabled.
- The existing secondary credential map has not been removed and remains a reference catalogue pending a separate cross-check against this route registry.
- Fresh link crawl, authenticated UI review, keyboard/screen-reader/contrast checks, and SME acceptance are still required before public release.

## Source pages checked

- Google Ads certification rules and Indonesian language availability: https://support.google.com/google-ads/answer/9702955?hl=id
- Google Analytics Academy current courses and certification path: https://support.google.com/analytics/answer/15068052
- Google Analytics certification course (Skillshop): https://skillshop.docebosaas.com/learn/courses/14810/google-analytics-certification
- Current Google Skillshop catalogue (DV360/CM360 2026): https://skillshop.docebosaas.com/pages/17/certifications
- Google APAC guide (GMP route / India price and duration context): https://grow.google/intl/en_in/guide-digital-marketing-skills/
- Meta certification hub and definitions: https://certifications.facebookblueprint.com/student/catalog
- Meta Blueprint Startup Hub course-level credential markers: https://trainingworkshops.facebookblueprint.com/student/collection/515315-meta-blueprint-startup-hub
- TikTok Certification FAQ: https://www.tiktokacademy.com/student/page/3053325-certification-faqs
- StackAdapt Programmatic Masterclass: https://www.stackadapt.com/academy/programmatic-masterclass
- Amazon Ads certifications and badge/learning-award distinction: https://advertising.amazon.com/academy/certifications?activeLocale=en-us
- HubSpot Email Marketing Certification: https://academy.hubspot.com/courses/email-marketing-certification-en
- Semrush SEO Crash Course: https://www.semrush.com/academy/courses/semrush-seo-crash-course-with-brian-dean/

LinkedIn exam pages and languages are issuer-specific; Bahasa Indonesia is not listed in the current LinkedIn Help article. Exam pricing is not stated there. LinkedIn route access, price and account access should be checked before learners commit.

This implementation is confined to the audit branch and makes no change to `main`, production routing, or credential issuance.


## Learner-facing recognition pathway update — 21 November 2026

The chapter Earn panel now uses the heading **Credential & chapter achievement** on every rendered core and Common Foundation chapter.

- Where a defensible provider route is mapped, the provider-issued credential card remains visible with its evidence type and issuer link.
- Where no provider route is mapped, the learner is shown an explicit objective-level explanation and the chapter deliverable used as applied evidence. The message is not presented as a statement that the market has no credential.
- Every chapter also shows a **DPA chapter achievement — planned** pathway. This is a design/status notice, not an issued badge, certificate, or claim of assessed competence.
- The DPA achievement pathway must remain non-issuable until learning outcomes, the 507-item question bank, chapter rubrics, passing standards, assessor calibration, issuer identity, privacy controls, and a trusted server-side issuance/verification service are approved.
- Master is now labelled as a mastery check and explicitly remains self-review in this release. It must not be represented as an assessor decision.
- Browser QA now asserts that every rendered chapter has the recognition pathway and that the Master panel discloses its self-review status.

This update improves the learner-facing pathway without fabricating provider awards or activating the proposed certificate system. Core mapping still remains first-pass pending independent SME acceptance; the 28 elective chapters remain outside the current learner renderer and require separate implementation and review.


### Additional issuer research — Meta Marketing Science

The official Meta Blueprint catalog distinguishes Marketing Science as a role-based certification area. Meta's 2026 certification-preparation page describes business goals/KPIs, measurement methodology, test campaigns, interpretation of statistical outputs and data-driven recommendations; it specifies a 60-question, 90-minute exam. The route is mapped only to T10 objectives with defensible overlap and is explicitly Meta-specific. Current exam availability, Indonesian account eligibility, exam language, checkout price and renewal terms remain unverified; these are not presented as settled facts.

Primary issuer references:
- https://agencies.facebookblueprint.com/student/catalog
- https://www.facebookblueprint.com/student/activity/697093-meta-certified-marketing-science-professional


## Common Foundation integration and learner journey correction — 21 November 2026

The six Common Foundation chapters are shared learning units and are not part of the 169 specialist core chapter count. They now have stable IDs `DPA-CF-CH01` through `DPA-CF-CH06` so chapter-specific lesson, resource, and credential routes can resolve consistently.

### Confirmed routes added
- **CF2 — Client Brief & Problem Framing:** Forage Omnichannel Marketing Simulation Certificate (direct applied simulation: integrated marketing plan and creative brief) and HubSpot Academy Inbound Certification (adjacent course certification: shared goals, buyer personas and buyer journey; not a dedicated client-brief certification).
- **CF3 — Consumer & Audience Fundamentals:** HubSpot Academy Inbound Certification, with explicit scope limited to customer-centric inbound, personas and buyer journey.
- **CF6 — Agency Workflow & Professional Practice:** Forage Omnichannel Marketing Simulation Certificate as applied workflow practice; do not represent it as a professional certification.

### Important product correction
The previous renderer removed learning-resource cards whenever their URL also appeared in the credential route map. This incorrectly separated Learn from Earn and could hide the learning route. The renderer now retains those clickable resources in Learn and also exposes the award route in Earn, with the resource tagged **Belajar + credential**. Provider award conditions remain explicit.

The repeated **DPA chapter achievement · planned** panel has been removed. DPA does not currently issue chapter badges/certificates; an unissued internal award must not be presented as a substitute for real provider credentials.

CF2's lesson has been expanded with chapter-specific brief audit, problem statement, objective/scope/constraint analysis, success criteria, seven workflow steps, three targeted knowledge checks, a guided worksheet and glossary. This replaces generic topic-template questions for the chapter.

### Issuer evidence
- Forage Omnichannel Marketing page states a self-paced 5–6 hour simulation and offers a completion certificate, resume snippet and interview tips: https://www.theforage.com/simulations/forage/sponsored-content-omnichannel-marketing-5iep
- HubSpot Academy Inbound page states it is a free certification course with seven lessons, four quizzes and approximately 2 hours 45 minutes. It covers shared goals, buyer personas and buyer journey. The page's listed languages do not include Bahasa Indonesia at the time checked: https://academy.hubspot.com/courses/inbound

These are course/simulation completion awards, not professional certifications. Access, language, assessment, and certificate issuance remain subject to the issuer's current account and course rules.

### Regression requirements
- All six Common Foundation chapters must have stable unique IDs and objective-specific source mappings.
- CF2 must expose both Forage and HubSpot award routes as real external links in Earn and retain the same learning links in Learn.
- The browser test must distinguish the 169 core chapters from six shared Common Foundation chapters by container identity, not by missing chapter IDs.
- No planned DPA badge panel may appear while the DPA issuance workflow remains unauthorized.


Current registry count cross-check (21 Nov 2026): 35 unique issuer/simulation/course award routes; core mapping 136/169 chapters and 194 placements; Common Foundation mapping 3/6 chapters and 4 placements. Counts describe the curated first-pass map, not full market coverage or independent SME acceptance.


## Superseding A–F credential integration snapshot — 21 November 2026

This snapshot supersedes the earlier 20-route, 35-route and 136/169 route-count summaries above. The integrated runtime now contains **51 distinct issuer routes**. The core chapter map has routes in **161/169 chapters** (224 placements; eight chapters remain without an external route selected). Common Foundation has routes in **4/6 chapters** (five placements). Counts are independently recomputed from the runtime object and cross-checked against the 175-row CSV; every selected mapping remains `FIRST_PASS_MAPPING_NOT_SME_ACCEPTED`.

Credential proposal disposition: 43 rows = 30 accepted-disposition rows (12 direct, 11 partial including one canonical Semrush entry, 7 supporting), one duplicate Semrush proposal merged into that canonical route, ten evidence-based no-route decisions and two candidates not selected. `T08-CH08` remains no-route after a four-way scope analysis. The Trade Desk supply-chain course stays Learn-only because its individual page does not state a completion award. The proposed Microsoft Learn Azure SQL Fundamentals path is inactive; a separate Microsoft Applied Skills Azure SQL application-development credential exists but is not added because fit to T12-CH02's customer-data architecture outcomes is unreviewed. Google Skillshop source references now use its official catalogue root. See `docs/delivery/09-source-provenance-register.md` for the issuer cross-checks and `docs/delivery/05-credential-proposal-disposition-register.csv` for row-level decisions.


### Expanded issuer-route coverage — 21 November 2026

The chapter-level route map now has 30 distinct routes. Newly added provider evidence was mapped only to relevant objective clusters:
- Microsoft Advertising Search Certification: T04-CH01–CH09.
- Microsoft Advertising Display & Video Certification: selected T03-CH03–CH09 objectives.
- Microsoft Programmatic Advertising Learning Path Badge: selected T06 programmatic ecosystem, inventory, platform, activation, optimization and capstone objectives. This is a learning-path badge, not a proctored professional certification.
- HubSpot Email Marketing Certification: T12-CH05–CH07 and CH09.
- HubSpot Inbound Certification: T12-CH01, CH03 and CH04.
- HubSpot Content Marketing Certification: T13-CH02–CH06 and CH11.
- HubSpot Social Media Marketing Certification: T13-CH01–CH03 and CH07–CH10.
- impact.com Affiliate Marketing & Partnerships Industry Certification: T15-CH01–CH11.
- Meta Blueprint Community Management course-level credentials: T16-CH01–CH12; five separate course activities are labelled Credential by the provider, not professional certification.

After reconciliation, the runtime core map contains 136/169 mapped chapters and 194 route placements. The 33 chapters without a selected route remain explicitly open for further issuer research and SME acceptance. The six Common Foundation chapters are tracked separately (3/6 mapped, four placements). All 169 core audit-map rows and CSV register rows must match the runtime route map exactly.


### Unified Learn + Earn route presentation — expanded mapping

For every mapped core chapter, the resource map now prioritizes the issuer's actual learning/credential route before general references. The same issuer URL is deliberately visible and clickable in both Learn and Earn: Learn explains the material and preparation; Earn explains the award, type, prerequisites and issuer conditions. This removes the earlier renderer behavior that hid a learning source whenever it was also mapped as an award route.

The learner panel retains up to five unique source URLs per chapter. When the URL is also a mapped award route, its source label is **Belajar + credential**. Provider awards remain optional and issuer-controlled. No DPA award is implied.

Latest core route coverage after expansion: 35 distinct registry routes; 136/169 mapped chapters; 194 route placements; 33 chapters remain without a selected route. Common Foundation: 3/6 mapped, four placements. All mapping is still first-pass and not SME-accepted.


## 22 November 2026 — superseding live registry reconciliation

This is the newest count authority for this document. It supersedes the earlier dated snapshots that report 30/35 routes, 136/169 core chapters, 194 core placements, or CF 3/6 with four placements. Those figures remain historical checkpoints and are not the live registry total.

- **51 route definitions** are now present: 35 in `chapter-credential-routes.js` plus 16 integration additions in `chapter-credential-routes-integration.js`.
- The 169 core chapter rows contain **161 mapped chapters / 224 placements**. Eight core chapters have no external route selected in this curated release and remain portfolio-first.
- The six Common Foundation rows contain **4 mapped chapters / 5 placements**. Two CF chapters remain portfolio-first.
- The combined CSV has **175 rows** (169 core + 6 CF), **165 mapped rows**, **229 total placements**, and ten rows without an external route. The CSV references 50 of the 51 route definitions; `meta_pixel_optimization_course` remains defined in the route registry but has no selected chapter placement in the current CSV. Do not count that unused route as learner coverage.
- Mapping status is still `FIRST_PASS_MAPPING_NOT_SME_ACCEPTED`. Count parity does not establish chapter objective-fit, issuer availability, learner completion, or competency.

**Latest evidence:** [Credential & Learning Route Catalogue — issuer check 22 Nov 2026](credential-catalogue-issuer-check-2026-11-22.md), `docs/credential-route-mapping-register.csv`, baseline registry plus integration source, and the PR #7 live branch. OpenAI Ads Manager availability, TikTok certification FAQ, Amazon Programmatic paths, Meta Startup Hub course labels, P3I programmes, TikTok One, Blibli Bliklan and ASEAN AHEAD have separate issuer notes in the catalogue. Additional routes identified in that research remain proposals until objective-fit and access are approved.

**Learner communication rule:** external routes are optional; a platform course credential, learning-path award, professional certification, simulation completion certificate and programme benefit must retain separate labels. Portfolio evidence remains primary where a chapter has no well-matched issuer route.

## Superseding platform-completion integration — 22 November 2026

The issuer inventory has been expanded from the prior 51-route snapshot to **74 route definitions** (35 base + 39 integration additions). This is the current route-registry total, not a count of certificates a learner must collect.

- Recovered and mapped the eight Meta Blueprint course activities from the v10 baseline. Each current official Meta page shows the award marker **Credential For Completion**.
- Integrated all sixteen current TikTok Academy Achievement learning paths. Fifteen were added in this batch; the existing Creative Planning route supplies the sixteenth. TikTok's official Courses catalogue states that Achievement follows required course completion and passing the associated assessment.
- Kept existing paid platform professional certifications intact: Meta Media Buying, Meta Media Planning, Meta Marketing Science and TikTok Media Buying remain separate professional-certification routes with paid-exam disclosure.
- Completion-first ordering is applied to affected chapter Earn suggestions. Each mapped chapter remains capped at three recommendations. Course routes remain clickable in Learn and are repeated in Earn; no DPA credential is created or automatically issued.
- All 169 core map/audit IDs, six CF map/audit IDs and 175 CSV rows remain authoritative. Updated CSV route order, journey status and notes are kept in parity with runtime. Objective-fit mappings remain FIRST_PASS_MAPPING_NOT_SME_ACCEPTED pending SME/access review.
- Public award labels do not prove Indonesia account eligibility or account-level issuance. TikTok has a Bahasa Indonesia portal locale, but individual path language/account access and Meta course locale/award issuance must be checked in learner accounts.

The latest machine validator checks the 74-definition total, eight recovered Meta IDs, all sixteen TikTok Achievement IDs, completion classification, preservation of four paid platform professional exams, mapping parity and maximum-three-per-chapter behavior. This supersedes prior 51-route, 224-core-placement and 229-combined-placement figures in earlier dated snapshots. Recomputed figures are in the 22 November issuer catalogue and CSV.

**Release boundary:** this credential inventory update is code/data integration, not release approval. Chapter fit, signed-in Indonesia access, manual hosted Learn/Earn rendering, formal SME acceptance, learner pilot, accessibility review and remaining DPA curriculum/assessment gates are still separate. No provider credential is auto-issued by DPA.

### Additional Meta Small Business Academy award — 22 November 2026

The current Meta Ads Manager learning collection has also been retained as a separate **Meta Small Business Academy skilling certificate** route. Meta lists six recommended learning modules and a separate Ads Manager learning skill test; it explicitly says course completion is not required to begin the test. The route is classified `skilling_certificate`, not course-completion credential and not professional certification. The public page does not state the test/certificate fee, so Indonesia account-level price and issuance are OPEN and must not be described as guaranteed free. It is mapped to T05-CH01 alongside free course-completion paths, with the paid Meta Media Buying Professional exam kept optional and separate.
