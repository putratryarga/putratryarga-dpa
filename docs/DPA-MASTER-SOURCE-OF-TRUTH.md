# DPA Master Source of Truth
**Version:** 1.0 · **Effective date:** 5 November 2026  
**Normative status:** Current architecture and governance reference; not a claim of full release validation.

> This structured document is the normative statement of current curriculum architecture. The transcript-style file `16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt` remains a historical research/audit archive.

## 1. Scope
- 16 core specialist tracks and 169 core chapter IDs.
- 149 role-specific guides plus 10 Full-Stack and 10 Paid Social legacy guides.
- Elective 17: CRO / Growth / Experience Optimization; Elective 18: Traditional Media Planning & Buying.
- 28 elective chapter specifications now have complete first-pass written drafts in docs/28-advanced-elective-full-chapter-drafts.md; role/JD, source fit, SME, Indonesia-market and learner validation remain OPEN.
- Synthetic figures/examples must be labelled; they are not live campaigns or client results.

## 2. Canonical tracks
1. Full-Stack Digital Marketing & Performance
2. Connection / Communications Planner
3. Media Planner / Digital Planner & Strategist
4. Paid Search / SEM Specialist
5. Paid Social / Biddable Social Specialist
6. Programmatic Specialist / Trader
7. Retail & Commerce Media Specialist
8. Media Investment, Trading & Publisher Partnerships
9. Ad Operations / Digital Campaign Operations
10. Media Analytics / Marketing Science
11. SEO / Organic Search / AEO / GEO
12. CRM / Lifecycle / Marketing Automation
13. Content Strategy & Creation (Organic Social specialization)
14. KOL / Creator / Influencer Partnerships
15. Affiliate & Social Commerce Partnerships
16. Community Management & Advocacy

See [16-core-track-role-crosswalk.md](16-core-track-role-crosswalk.md) for competency spines and taxonomy decisions.

## 3. Taxonomy boundaries
- Full-Stack is an integrated generalist path; Performance Marketing is a cross-channel paid-growth job family, not a synonym.
- Organic Social is a specialization in Track 13; Community is Track 16; Paid Social is Track 5.
- Track 10 separates descriptive/diagnostic Media Analytics from causal/experimental/model-based Marketing Science.
- Track 4 is search-specialist; Google Ads is a broader platform suite; DV360 is a DSP, not paid search.
- Track 8 is direct publisher/media-owner investment; Track 6 is DSP/programmatic trading; Elective 18 is offline/traditional media.

## 4. Chapter and guide identity
- Canonical ID format: `DPA-Txx-CHxx`.
- Canonical machine-readable chapter inventory: [169-core-chapter-ids.txt](169-core-chapter-ids.txt), extracted from `index.html` and expected by the score-recalculation script.
- Map guides by immutable chapter ID, never array position.
- Evidence register is a source-extraction/traceability artifact; populated fields do not prove SME correctness.
- T07 alignment: CH06 Retail Audience / First-Party Data; CH07 Product Feed / Digital Shelf / Retail Readiness; CH08 Campaign Activation / Bidding / Optimization, including in-store execution controls.

## 5. Validation states and verification classes
Mutually exclusive chapter states: `VALIDATED`, `VWMI`, `PARTIALLY VALIDATED`, `NEEDS MAJOR REVISION`. Display the verification class beside every status.
- A: agent desk-review/source inspection.
- B: deterministic repository/static check.
- C: external-source verification.
- D: qualified SME review.
- E: browser/runtime verification.
- F: production verification.

Agent desk-review is not an independent human audit or SME approval. The previously reported 10 / 22 / 135 / 2 distribution is an audit snapshot until recalculated from the authoritative raw chapter matrix.

## 6. Separate scoring instruments
**Chapter audit:** seven dimensions, each 0–4. Chapter score is the arithmetic mean of seven raw values, reported to one decimal place using ROUND_HALF_UP. Track score is the mean of unrounded chapter means with equal chapter weighting unless a different weighting is justified and versioned.

**Learner assessment:** five dimensions, each 0–3, applied to learner submissions. Do not combine the scales. A high numeric score does not automatically determine a chapter validation status. Missing raw vectors must not be imputed.

## 7. Agency and job evidence
Compare WPP Media, Publicis Media, Omnicom Media, Dentsu and Havas Media Network. Preserve employing entity, agency brand, title, duties, geography, seniority, experience, Job ID, official URL, publication/expiry/currentness and direct/adjacent/capability/historical/gap classification. A career-index title is not a detailed JD; group-level evidence is not automatically direct evidence for each subsidiary. Absence from an index is not proof a function does not exist.

The 80-cell matrix is a coverage ledger, not proof of 80 independently validated cells. The 5 November 2026 recheck recovered evidence routes for the five previously unreferenced cells. Current class-label totals are A 37, B 22, C 0, D 42, E 0, G 0, with 21 compound cells (101 label instances across 80 unique cells). Recovery does not equal direct/current evidence: T09/Dentsu is a combined, expired Search & Ad Ops role in New Zealand; T14/Havas evidence comes from Havas Paris Social/Havas Play sister practices; T15/Omnicom is official career-index/title evidence whose individual requisition detail pages were inaccessible; T15/Havas is a historical London Affiliate Manager requisition with a passed end date; T16/Havas is a Havas Paris Social apprenticeship, not a direct HMN role. Havas role distinctions remain important: JR0096922 is direct Paid Social (Warsaw); JR0099039 is direct Organic & AI Manager (Sydney, 4+ years/senior scope); JR0096564 is historical DMPG evidence (closed 3 August 2026); JR0093690 belongs to Havas Play with conflicting start-date metadata. See the 80-cell evidence matrix and elective audit for source-level caveats. Elective evidence is a separate 10-cell matrix.

## 8. Resource and credential governance
For each chapter distinguish official learning, official technical documentation, industry standards, applied deliverables, and credentials. A URL does not prove access, local eligibility, price, language, or credential status. Record publisher, exact URL, objective fit, access/market limitations, last-checked date and verification outcome.

Separate professional certification, course completion, learning badge, knowledge assessment and award. Do not conflate them.

## 9. Assessment governance
- Static Q&A is not a scored quiz.
- Answer keys remain OPEN until correctness, ambiguity, completeness and acceptable alternatives are reviewed against sources and by SMEs where required.
- An 80/100 pass threshold is not calibrated without sample submissions and reviewer agreement.
- Rubrics need observable criteria, performance anchors, critical failures, evidence, feedback and resubmission rules.

## 10. Electives
Both electives are now `FULL FIRST-PASS CONTENT DRAFTED — VALIDATION PENDING`: 28/28 chapters have learning outcomes, core lesson, workflow, practice, required artifact/acceptance, two knowledge checks with answer guidance, glossary and source caveats in docs/28-advanced-elective-full-chapter-drafts.md. Structural QA passes; role/JD evidence, source-objective fit, Indonesia market/legal review, SME answer approval, rubric calibration, workload pilot and formal sign-off remain OPEN. Do not count them among 169 core chapters.

## 11. Release gates
Separate PASS/FAIL/BLOCKED for: repository integrity; issue/discrepancy reconciliation; raw score recalculation; 169-chapter content quality; resource fit; 80-cell agency evidence; answer-key/rubric validation; elective completeness; static QA; authenticated browser/runtime QA; build/preview and production verification. BLOCKED must never become PASS. Preview READY is not browser QA; branch commit is not production release.

## 12. Current remediation state
- Branch: `audit/full-dpa-remediation-2026-11-05`.
- PR #5/#6 remain draft/open/unmerged; `main` and production are untouched.
- The 149 role-specific glossary fields were regenerated from guide source arrays: extraction consistency only, not content approval.
- T07 guide alignment is corrected in source, evidence register, rubric draft, resource map and technical matrix.
- Static media-query count: 19 total (14 width-based, 2 reduced-motion, 3 print); rendering is not runtime-verified.
- T16-CH12 correction supplement is superseded but retained as historical audit evidence.
- Full 169-vector recalculation is BLOCKED: the authoritative raw seven-dimension matrix is not in the inspected repository.
- SME review, 507 answer-key validation, rubric calibration, 80-cell JD validation, all 169 objective-level resource-fit sign-offs, elective validation and authenticated browser/runtime QA remain open. The 28 elective chapters are now fully drafted at first-pass level.

**Historical archive:** `16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt`.  
**Execution ledger:** `2026-11-05-remediation-execution-ledger.md`.


## 2026-11-05 source and preview re-verification

- Resource-source captions were reconciled with their actual destination publishers across 13 track families. The updated register contains 169 chapter rows and 33 unique resource URLs; all 33 returned readable content in a live fetch.
- The source check verifies link identity and broad track-level topical coverage only. Exact learning-objective fit for all 169 chapters, Indonesia access, language, price and credential eligibility remain open.
- Source revision `f9def1a8c6a8b22568b38bd83c7c1086765418fb` has a Vercel Preview deployment in READY state and a successful GitHub Vercel status. Its HTML endpoint returned HTTP 200 and all eight referenced local JavaScript assets returned HTTP 200.
- HTTP availability is not authenticated browser/runtime QA. The UI interaction and accessibility release gates remain open.
- Raw score matrix and the original 23 findings / D-1…D-12 records were not recovered. The seven-dimension numerical scale and averaging formula exist, but the dimension definitions and raw input values are not. Do not reconstruct them by inference.


## 2026-11-05 remediation expansion

- Advanced electives: 28/28 first-pass written chapter drafts authored (14 CRO + 14 Traditional Media) in docs/28-advanced-elective-full-chapter-drafts.md. Structural review: unique 28 headings; no missing outcome, lesson, workflow, practice, artifact/acceptance, Q&A or source-caveat blocks; 56 questions and 84 glossary definitions. SME, market, JD, resource, calibration and learner-pilot validation remain open.
- Resource-fit desk review: docs/169-chapter-resource-fit-review.md records provisional assessments for all 16 tracks. Track-level coverage is not a substitute for 169 independent objective-to-source validations. The current map has 169 rows and 39 unique URLs.
- Supplemental findings: docs/2026-11-05-supplemental-audit-findings.md contains 17 new, independently evidenced items. It does not reconstruct or replace the missing historical 23 findings or D-1…D-12.
- Raw-score collection: audit-inputs/169-chapter-audit-score-input-TEMPLATE.csv is a blank 169-row template only. Seven dimension definitions and original raw values remain missing; the template is not a score matrix and must not be scored.
- Historical recovery: all 12 branches exposed by GitHub were inspected; no raw 169×7 matrix or original 23-row/D-1…D-12 records were located in repository trees, PR #5/#6 discussions/reviews, or accessible Library sources.
- The overall release decision remains NOT READY — REMEDIATION INCOMPLETE. No production merge/deployment is authorized by this documentation update.


## 13. Requirements traceability and acceptance

The normative remediation and release acceptance checklist is [Requirements Traceability & Acceptance Register](requirements-traceability-acceptance-register.md). It preserves the 18-pathway scope (16 Core Specialist Tracks + Electives 17 and 18), the separate CF1–CF6 shared foundation layer, and distinct evidence gates for structure, content, SME, resources, assessments, agency evidence, runtime, accessibility and production. The register does not replace this architecture document; it converts its requirements into testable acceptance criteria and must be kept synchronized. A requirement is not COMPLETE solely because its structural count or CI check passes.


## 14. Assessment engine design

The formative quiz and assessment architecture is documented in [Quiz & Assessment Engine — Technical Design](quiz-engine-technical-design.md). This is a design artifact, not implementation or content approval. Existing static Q&A remains reflective learning support until item IDs, learning-outcome mapping, distractors where applicable, source checks, editorial review and SME answer-key review are complete. Browser-only scoring is formative only; authoritative grading requires server-side key isolation, authenticated submissions, approved scoring and privacy/security governance. The existing 80% target remains uncalibrated.


## 15. Certificate issuance and verification

The proposed [DPA Certificate Issuance & Verification specification](certificate-issuance-verification-spec.md) records a future DPA-owned learning credential feature: participation, completion and track-achievement certificates with controlled server-side issuance, public verification, revocation and audit history.

This is a **design baseline only**. The current website is static and has no verified credential registry, authenticated issuer workflow or trusted server-side issuance endpoint. Assessment item approval, rubric calibration, threshold setting, issuer identity, learner privacy/consent, security review and pilot remain prerequisites. No real learner certificate may be issued until the applicable CERT-001–CERT-008 criteria in the acceptance register pass.

A DPA-issued learning certificate is not a BNSP/LSP competency certificate, government-accredited qualification or third-party platform certification. Any LPK/LSP partnership is a separate workstream requiring independent licensing, scheme and issuer verification.


## 15. Formative quiz scaffold implementation

The standalone [Quiz Engine Sandbox](../quiz-engine-prototype.html) and dependency-free formative engine are implemented on the remediation branch using synthetic-only T10 fixtures. The engine validates item/chapter IDs, blocks unanswered submissions, calculates deterministic local scores, provides rationale/review/retry and preserves attempt versions for its local session. A dedicated automated test script and GitHub Actions workflow are included.

This implementation is **PARTIAL** and strictly test-only. It is not connected to the main chapter renderer or the 507 reflective Q&A items; no approved item bank, calibrated threshold, summative mode, server-side grading, personal-data collection or credential-bearing assessment exists. The browser-delivered keys are synthetic fixtures only. Exact-head CI and authenticated browser/accessibility verification remain separate gates. See QUIZ-001 in the acceptance register.


## 16. P1 granular audit registers

The current remediation branch contains row-level control registers for 507 core Q&A items, 169 objective-to-resource rows, 80 agency × core-track evidence cells, 28 elective chapters and 56 elective knowledge checks. These inventories are linked from the README and requirements acceptance register. Their existence does not establish correctness, source fit, SME approval, direct/current JD validation or learner-pilot readiness; all item-level review decisions remain OPEN.

The six-track source-enrichment pass is recorded in [Priority Track Source Remediation](2026-11-05-priority-track-source-remediation.md). The resource map now has 54 unique URLs; objective-level fit for all 169 chapters and Indonesia access/cost/language checks remain OPEN.


## 17. 169-core chapter depth screening

A deterministic screening script, [169-chapter depth report](169-chapter-depth-screening.md) and [169-row CSV](169-chapter-depth-screening.csv) now quantify objective, example, workflow, practice, glossary, Q&A and source-map structure. All 169 chapters met the documented heuristic thresholds and the 507 core question texts had no exact normalized duplicates in this screen. This is a structural signal only; it does not close technical accuracy, chapter relevance, resource-fit, local-market or SME acceptance. All corresponding review states remain OPEN.
