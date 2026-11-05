# Requirements Traceability & Acceptance Register

**Project:** The Full-Stack Digital Performance Architect (DPA)  
**Register version:** 1.0  
**Baseline date:** 5 November 2026  
**Working branch:** `audit/full-dpa-remediation-2026-11-05`  
**Release state:** NOT READY — REMEDIATION INCOMPLETE  
**Scope lock:** **18 pathways = 16 Core Specialist Tracks + 2 Advanced Electives**

> This register is the control document for remediation. It distinguishes structural presence, substantive validation, runtime verification and production release. A file existing, a count matching, or CI passing is not by itself evidence that the underlying learning content is correct.

## 1. Purpose and operating rules

This register converts the currently recoverable DPA requirements into traceable, testable acceptance criteria. Every requirement must have: a stable ID, a source, a scope, objective acceptance criteria, a verification method, evidence, a status and any dependency.

Rules:

1. Do not mark a requirement PASS without recorded evidence that directly satisfies its acceptance criteria.
2. Keep structural checks separate from content correctness, SME approval, runtime behavior and production verification.
3. Do not substitute synthetic data, reconstructed estimates, adjacent job titles or general topical links for original evidence.
4. Keep all unvalidated question answers, rubrics, learning resources and elective chapters visibly marked as draft/review-pending.
5. Do not merge or deploy while any mandatory release gate is FAIL, OPEN or BLOCKED.
6. Report partial progress as PARTIAL, not COMPLETE.
7. Keep the 16 Core Tracks and 2 Electives in the same overall program scope while reporting them separately.

## 2. Source hierarchy and provenance

| Priority | Source | How it is used | Current availability / limitation |
|---|---|---|---|
| S0 | User's exact original AutoClaw Master Prompt | Literal instruction-level acceptance baseline | **BLOCKED / NOT LOCATED as a standalone source** in the inspected Library and repository materials. The recovered archives are not asserted to be a verbatim copy. |
| S1 | `docs/DPA-MASTER-SOURCE-OF-TRUTH.md` | Normative current architecture, governance and release gates | Available; version 1.0, effective 5 Nov 2026. |
| S2 | `docs/16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt` and Library archive `16 track.txt` | Historical research, prior role architecture, learning standards and audit trail | Available as historical records; includes earlier architecture proposals that were superseded. |
| S3 | Library file `converted (1).md` | Full-Stack V3.0 roadmap and proposed V4.0 injection matrix | Available; V4 injections are recorded as proposals, not automatically treated as approved build scope. |
| S4 | Current repo source, registers, QA reports, CI runs and deployment records | Evidence of implementation and completed checks | Available; the evidence must be tied to exact commit/deployment and interpreted within what the test actually verifies. |

**Conflict rule:** S1 governs the current architecture. Historical requirements remain traceable and must not be silently deleted. Where S0 is unavailable or an archived proposal conflicts with S1, record a scope decision and retain the provenance. Do not claim full literal Master Prompt compliance until S0 is recovered and reconciled line by line.

## 3. Canonical program scope

### 3.1 Pathway counts

| Program component | Count | Classification | Current status |
|---|---:|---|---|
| Core Specialist Tracks | 16 | Core | Architecture and selector structure present; full content validation open |
| Advanced Elective 17 — CRO / Growth / Experience Optimization | 1 | Elective | 14 first-pass chapter drafts; validation pending |
| Advanced Elective 18 — Traditional Media Planning & Buying | 1 | Elective | 14 first-pass chapter drafts; validation pending |
| **Total pathways** | **18** | **16 Core + 2 Electives** | **Not yet release-validated** |
| Shared Common Foundation | 6 chapters (CF1–CF6) | Shared layer, not an additional pathway | Present in the roadmap; coverage and behavior require their own checks |

The 169 canonical chapter IDs refer to the 16 core specialist tracks. The 28 elective drafts are separate and must not be added to the 169 core count. CF1–CF6 are a shared foundation layer and must not be misreported as a 17th track or as one of the two electives.

### 3.2 Canonical 16 Core Tracks

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
13. Content Strategy & Creation (including the Organic Social specialization)
14. KOL / Creator / Influencer Partnerships
15. Affiliate & Social Commerce Partnerships
16. Community Management & Advocacy

### 3.3 Two Advanced Electives

17. CRO / Growth / Experience Optimization — 14 chapters  
18. Traditional Media Planning & Buying — 14 chapters

### 3.4 Scope decisions still requiring explicit reconciliation

- The exact AutoClaw prompt must be recovered for literal requirement completeness (SCP-001).
- V4.0 additions in `converted (1).md` are held as candidate scope until matched to the original prompt or separately confirmed. They must neither be silently dropped nor silently represented as approved requirements.
- Shared Common Foundation CF1–CF6 remains a cross-track layer, not a separate role pathway.

## 4. Status and verification vocabulary

### Requirement status

- **PASS:** Acceptance criteria met with direct evidence.
- **PARTIAL:** Some criteria met; one or more substantive criteria remain open.
- **OPEN:** Work or verification has not been completed.
- **FAIL:** A verified criterion is not met.
- **BLOCKED:** Cannot be completed honestly without a missing external/historical input, qualified reviewer, authorization or access.
- **SCOPE HOLD:** Candidate requirement whose inclusion is not yet established by the governing prompt/source.

### Verification class

- **A — Desk review:** structured reading/review by the project team; not independent SME approval.
- **B — Static repository verification:** deterministic code, data, count, schema or source-file checks.
- **C — External-source verification:** current primary-source or authoritative external evidence.
- **D — Qualified human / SME verification:** subject-matter or authorized review.
- **E — Browser/runtime verification:** real interaction, responsive behavior, accessibility and persistence tests.
- **F — Production verification:** exact released build, live behavior, monitoring and post-release checks.

A PASS must identify the relevant class. A B-PASS must never be presented as a D-, E- or F-PASS.

## 5. Requirements register

| ID | Priority | Requirement and acceptance criteria | Verification / evidence | Baseline status |
|---|---|---|---|---|
| SCP-001 | P0 | Recover and reconcile the exact original AutoClaw Master Prompt. Every instruction must be represented by a requirement ID or explicitly marked non-applicable with reason. No paraphrase may be claimed as a verbatim prompt. | S0 source file or exact supplied prompt; line-by-line crosswalk to this register | **BLOCKED** — standalone prompt not located in inspected sources |
| SCP-002 | P0 | Preserve the 18-pathway architecture: exactly 16 Core Tracks plus Electives 17 and 18. All counts and labels must agree across Source of Truth, README, UI, curriculum registers and release notes. | Static cross-file reconciliation; Source of Truth §1–3; README | **PASS (A/B, architecture only)** — substantive pathway validation remains open |
| SCP-003 | P0 | Preserve CF1–CF6 as one shared foundation layer. It must be accessible to all 16 Core Tracks, with prerequisites and completion/progress behavior defined. It is not a separate track or elective. | Source/DOM ID inventory; role-switch and progress tests | **PARTIAL** — six chapters documented/present; full cross-role behavior not runtime-verified |
| SCP-004 | P0 | Preserve the separate count of 169 core specialist chapter IDs across 16 Core Tracks and 28 elective draft chapters across the two electives. No silent mixing or double counting. | Canonical ID inventory, guide map, elective chapter register | **PASS (B, count/identity only)** |
| SCP-005 | P0 | Reconcile historical architecture changes (14+3, 16+2, earlier role proposals and current canonical taxonomy). Every superseded proposal must be labeled historical or superseded, not treated as current scope. | Historical archive crosswalk and current Source of Truth | **PARTIAL** — current taxonomy documented; full literal prompt reconciliation awaits SCP-001 |
| HIST-001 | P1 | Recover the authoritative original 169 × 7 raw chapter-audit score matrix, the seven original dimension names/definitions, scoring anchors, version and provenance. Recalculate chapter and track scores with the documented formula; do not infer missing values. | Original source file + checksum/version + independent recalculation; `audit-inputs/169-chapter-audit-score-input-TEMPLATE.csv` is collection-only | **BLOCKED** — raw vectors and dimension definitions unavailable; template remains blank |
| HIST-002 | P1 | Recover the original 23 findings and D-1…D-12 discrepancy log, including source, date, exact issue, severity, evidence, disposition and closure proof. | Original audit artifact, commit, PR discussion or owner-confirmed source; reconcile against 17 supplemental findings | **BLOCKED** — supplemental 17 findings are not a substitute |
| HIST-003 | P1 | If historical inputs cannot be recovered, create a separately versioned new-baseline audit instrument only after its dimensions, anchors, reviewer protocol and formula are approved. Never label the new baseline as reconstructed historical scores. | Approved instrument version; sample scoring; reviewer agreement; reproducible raw-data file | **OPEN / DEPENDENT** on explicit instrument approval and reviewers |
| TAX-001 | P1 | Maintain role-family boundaries: Full-Stack generalist vs Performance Marketing; Paid Search vs Paid Social vs Programmatic vs Retail Media; direct publisher buying vs DSP trading vs traditional media; Media Analytics vs Marketing Science; Organic Social vs Community; Creator vs Affiliate. | Taxonomy crosswalk, direct/adjacent job evidence and chapter mapping | **PARTIAL** — boundaries documented; job-level scope validation remains open |
| TAX-002 | P1 | Map agency title aliases without collapsing seniority, employing entity, geography or duties. Every mapped role must carry entry/junior/mid/senior/leadership scope or state that evidence is insufficient. | Current employer-hosted JDs and role evidence with date/ID/location | **OPEN** |
| CORE-001 | P1 | Reconcile all 169 canonical core chapter IDs against HTML, guide objects, evidence register, rubric register, resource map and technical review matrix. Require exact set equality, no duplicate, orphan or missing IDs. | Deterministic validator and exact-head CI | **PASS (B, structural)** — last recorded static checks report 169-row reconciliation |
| CORE-002 | P1 | Independently review all 169 chapters for technical accuracy, depth, sequencing, role relevance, seniority, objective measurability, local context, examples and practical usefulness. Record one disposition and evidence per chapter. | 169-row technical matrix + source citations + qualified reviewer sign-off | **OPEN** — extraction/traceability is not content approval |
| CORE-003 | P1 | Every chapter must show measurable learning outcomes, concept explanation, role-specific workflow, worked example or case, practice task, deliverable/acceptance criteria, glossary and limitations where relevant. | Chapter-level checklist and reviewer sampling/full coverage | **PARTIAL** — structural fields largely extracted; substantive depth and accuracy open |
| CORE-004 | P1 | Validate role progression and prerequisite depth across Common Foundation, Core and Elective paths. Shared fundamentals must not force irrelevant specialist exercises on every role. Advanced content must not be presented as entry-level competency. | Cross-track prerequisite graph and role-specific curriculum review | **OPEN** |
| RES-001 | P1 | Maintain one resource row for each of the 169 core chapters with exact chapter ID, publisher, exact destination URL, resource type and last-checked date. Structural minimums do not prove fit. | Resource mapping register and static set/count check | **PASS (B, mapping structure)** — 169 rows, 48 unique URLs, ≥2 unique links per chapter in latest recorded check |
| RES-002 | P1 | For every learning objective, classify whether each cited resource is DIRECT FIT, PARTIAL FIT, SUPPORTING or NOT FIT; state which section supports which objective and explain gaps. | 169-objective resource-fit review, source excerpts and reviewer disposition | **OPEN** — existing review is provisional/track-level, not 169 objective sign-offs |
| RES-003 | P1 | Verify access from Indonesia, language, paywall, prerequisite, duration, price/tax, account eligibility, regional availability and last-check date for each learner-facing resource. Mark unverified claims explicitly. | Live publisher checks, regional access test and dated evidence | **OPEN** |
| RES-004 | P1 | Classify credentials correctly: professional certification, course completion, learning badge, skilling certificate, knowledge assessment or award. Verify issuer, exam, validity, price and eligibility; do not infer a credential from a course page. | Issuer primary sources and credential register | **PARTIAL** — selected credential families checked; full chapter-level coverage open |
| RES-005 | P1 | Maintain the three resource tiers in the historical roadmap: Tier 1 official platform/provider learning; Tier 2 job descriptions, professional frameworks and standards; Tier 3 applied projects, tools and portfolio work. Explain when a track has no platform certification. | Per-track resource matrix | **PARTIAL** — principle exists; comprehensive per-track and objective mapping open |
| AGY-001 | P1 | Maintain the 5-agency × 16-core-track matrix (80 unique cells) and separate elective evidence matrix. Counts must not be mistaken for validation. | 80-cell agency-role matrix and elective evidence register | **PASS (B, cell structure only)** |
| AGY-002 | P1 | Validate each agency cell against current or clearly dated evidence. Record employing entity, brand, job title, duties, geography, seniority, experience, Job ID, official URL, publication/expiry/currentness and direct/adjacent/capability/historical/gap class. | Primary employer/career sources; independent cell review | **PARTIAL** — evidence routes exist; current/direct/JD-level validation remains open |
| AGY-003 | P1 | Treat WPP Media, Publicis Media, Omnicom Media, Dentsu and Havas Media Network as separate evidence families; do not use group-level or sister-practice evidence as proof of a direct vacancy in another entity. | Evidence matrix caveat checks and source review | **PARTIAL** |
| ASMT-001 | P1 | Maintain parity between source guides, evidence register and rubric register for all 507 Q&A items. Stable question IDs and chapter/objective linkage must be present. | Deterministic question/answer parity check | **PASS (B, content sync only)** — 507 entries reconcile; this does not approve answers |
| ASMT-002 | P1 | Review all 507 answers for correctness, completeness, ambiguity, rationale, acceptable alternative answers, difficulty, source quality and learning-objective coverage. No unreviewed answer may be treated as authoritative. | Item-review record, authoritative references and SME sign-off | **OPEN** |
| ASMT-003 | P1 | Validate 169 chapter-specific rubrics with observable criteria, performance anchors, evidence requirements, critical failures, feedback and resubmission rules. Calibrate using sample learner work and reviewer agreement. | Rubric register, calibrated sample submissions and inter-rater review | **OPEN** — draft rubrics exist; calibration/SME approval absent |
| ASMT-004 | P1 | Keep chapter audit and learner assessment instruments separate. Chapter audit uses seven dimensions scored 0–4; learner assessment uses five dimensions scored 0–3. Never combine or substitute the scales. | Source of Truth §6 and separate schemas | **PASS (A/B, policy separation)** — instrument validation still open |
| ASMT-005 | P1 | Treat 80/100 as a proposed threshold only until sample submissions, critical-failure rules, reviewer consistency and pass/fail consequences are calibrated. | Standard-setting record and pilot data | **OPEN** |
| SIM-001 | P1 | Each core specialist path must have realistic, role-specific practical simulations with brief, data/constraints, instructions, tools, decision criteria, required output, sample solution/answer guidance and scoring rubric. Synthetic data must be labeled. | Simulation inventory and chapter-level QA | **PARTIAL** — practice/deliverable structures exist; full simulation pack coverage and quality require review |
| PORT-001 | P1 | Each applicable pathway must produce a defensible portfolio/capstone: business problem, research, objective, recommendation, role-specific plan, budget/KPIs/measurement, assumptions/risks, analysis, visual/workbook and executive summary as applicable. | Capstone matrix and rubric review | **PARTIAL** — capstone references exist; full acceptance/rubric validation open |
| ELEC-001 | P1 | Keep Elective 17 and 18 outside the 169 core chapter count. Validate 14 chapters each for learning outcomes, lesson, workflow, practice, artifact and acceptance criteria, two knowledge checks, glossary and source caveats. | `docs/28-advanced-elective-full-chapter-drafts.md` and structural checks | **PASS (B, first-pass structure only)** — 28 drafts exist; not learner-ready |
| ELEC-002 | P1 | Independently validate elective job evidence, 28 chapter-resource fits, answer keys, rubrics, Indonesia market/legal assumptions, workload and learner pilot. | Elective-specific evidence/source/assessment registers and pilot | **OPEN** |
| QUIZ-001 | P2 | Build an interactive chapter quiz engine with item loading, selection/response, submit, scoring, rationale feedback, retry rules, progress state, empty/error states and keyboard operation. Static Q&A is not a quiz engine. | `scripts/dpa-quiz-engine.js`, `quiz-engine-prototype.html`, synthetic fixtures, deterministic unit tests and exact-head CI/browser evidence | **PARTIAL** — isolated synthetic-only formative scaffold implemented; automated/browser verification and main chapter integration remain open |
| QUIZ-002 | P2 | Build case assessment workflow for learner submissions, rubric scoring, feedback, revision/resubmission and reviewer audit trail. | Functional tests and calibrated sample assessment | **OPEN** |
| QUIZ-003 | P2 | Build final assessment/capstone evaluation with eligibility, completion rules, scoring, critical-failure rules and auditable feedback. | Functional tests, rubric calibration and pilot | **OPEN** |
| QUIZ-004 | P2 | Ensure score/progress data handling is appropriate to its trust level. Do not expose authoritative answer keys or rely on client-side checks for high-stakes scoring. Define storage, reset, retake and privacy behavior. | Security/architecture review and browser/API tests | **OPEN** |
| QTI-001 | P2 | Keep assessment content in a portable, versioned schema. Evaluate QTI 3.0 export/import if cross-platform exchange is a requirement; do not claim QTI conformance unless validated against the applicable specification. | Schema review; optional QTI validation/conformance tests | **OPEN / DESIGN DECISION** — interoperability target not yet selected |
| V4-001 | SCOPE HOLD | W01 proposed interactive financial growth simulator with scenario sliders (e.g., Streamlit/Glide), beyond a spreadsheet-only model. | Match to exact prompt or explicit approved scope; inspect deployed interaction | **SCOPE HOLD** |
| V4-002 | SCOPE HOLD | W02 proposed generator + critic/judge guardrail that checks evidence, rejects unsupported output and controls retries. | Match to exact prompt or approved scope; test adversarial/unsupported claims | **SCOPE HOLD** |
| V4-003 | SCOPE HOLD | W06 proposed 100,000-row synthetic e-commerce dataset, BigQuery Sandbox SQL anomaly detection and dashboard. | Match to exact prompt or approved scope; reproducible data/SQL/dashboard tests | **SCOPE HOLD** |
| V4-004 | SCOPE HOLD | W07 proposed time-lag analysis/dashboard linking Meta spend and branded Google search volume with a 3–7 day lag hypothesis. | Match to exact prompt or approved scope; clearly labeled synthetic data and statistical caveats | **SCOPE HOLD** |
| V4-005 | SCOPE HOLD | W08 proposed live interactive web-app portfolio/case study rather than a static PDF/Notion-only handoff. | Match to exact prompt or approved scope; deployed application test | **SCOPE HOLD** |
| STATIC-001 | P2 | Run deterministic checks on exact branch head for IDs, mappings, row counts, duplicates, link inventory, schema and script compilation. CI evidence must identify the SHA it tested. | GitHub Actions exact-head run and logs | **PASS (B, last recorded head only)** — re-run after every change |
| RUNTIME-001 | P2 | Verify current preview in authenticated desktop and mobile browser: all role selectors, chapter navigation, quiz flows, progress persistence, theme, print, keyboard/focus, responsive layout, console, network and error states. | Playwright/manual browser session, screenshots, logs and device/viewport matrix | **OPEN** — HTTP/asset smoke is not interaction QA |
| ACCESS-001 | P2 | Review WCAG 2.2 AA criteria applicable to the experience: keyboard access, focus visibility/order, labels, names/roles/values, contrast, reflow, target size, error identification and assistive-technology behavior. Combine automation with human evaluation. | W3C WCAG 2.2 checklist, automated scan, keyboard and assistive-technology review | **OPEN** |
| RELEASE-001 | P2 | Merge only after all mandatory P0/P1/P2 release gates have evidence-based disposition, no unresolved critical failure, reviewer approval, exact commit CI and preview QA. Consolidate stale PRs if necessary; do not merge non-mergeable draft PRs. | PR reviews, mergeability, exact-head checks, release checklist | **OPEN / RELEASE HOLD** |
| RELEASE-002 | P2 | Verify the production deployment points to the approved commit; check route/assets/content, critical interactions, error/uptime signals and rollback readiness. | Production deployment metadata and post-deployment verification | **OPEN** — production intentionally untouched |

## 6. Verified baseline snapshot

The following are evidence of presence or structural integrity only, not overall release approval:

| Area | Latest recorded result | What it proves | What it does not prove |
|---|---|---|---|
| Core architecture | 16 Core + 2 Electives | Current taxonomy is documented | All 18 pathways are substantively validated |
| Core inventory | 169 unique chapter IDs | Identity/count mapping is consistent | Chapter accuracy, depth or learner effectiveness |
| Shared foundation | CF1–CF6 | Shared layer is documented | All six behave correctly in every role path |
| Electives | 28 first-pass chapter drafts (14 + 14) | Structural completeness of drafts | SME approval, source fit, local fit or learner readiness |
| Guides / Q&A | 169 chapters / 507 Q&A items | Source/register parity | Correctness of all answer keys |
| Resources | 169 rows / 48 unique URLs / ≥2 unique URLs per chapter | Mapping structure | Objective-level fit, Indonesia access, pricing or credential eligibility |
| Agency matrix | 80 unique core cells, five agency groups | Matrix coverage ledger exists | 80 independently validated direct/current job descriptions |
| Static CI | Last recorded exact-head run successful | Validator and synthetic score-code path passed for that SHA | Actual historical scores, content accuracy, runtime or production |
| Preview | Prior current-code preview HTTP/assets smoke passed | HTML and local assets were reachable at the checked deployment | Authenticated browser interaction, accessibility or latest-doc-only commit deploy |
| Release | Main/production remained untouched | Change control was preserved | Readiness to merge or deploy |

## 7. External and historical dependencies

These are dependencies, not reasons to silently downgrade acceptance criteria:

| Dependency ID | Needed input / reviewer | Blocks |
|---|---|---|
| DEP-001 | Exact original AutoClaw Master Prompt or an authoritative export | Literal prompt-to-requirement reconciliation |
| DEP-002 | Original 169 × 7 raw score file plus seven dimension definitions/anchors | Historical recalculation |
| DEP-003 | Original 23-finding register and D-1…D-12 log | Historical issue closure and audit trail |
| DEP-004 | Qualified SMEs for specialist domains and assessment review | 169 chapter reviews, 507 answer keys and 169 rubrics |
| DEP-005 | Current employer-hosted JDs / authorized agency-role reviewers | 80-cell role/competency sign-off |
| DEP-006 | Indonesia-specific media-owner rate cards, IO samples, measurement/vendor details and legal/procurement review | Commercial, traditional media, privacy and platform-rights validation |
| DEP-007 | Learner pilot participants and reviewer capacity | Workload, usability, rubric and assessment calibration |
| DEP-008 | Authenticated browser session or authorized test environment | E2E interaction/accessibility QA |

## 8. Execution sequence and stop/go rules

### P0 — Baseline and scope control
1. Keep this register as the central acceptance document.
2. Recover S0 and reconcile every literal prompt instruction; retain unresolved lines as BLOCKED.
3. Confirm all current source files, branch refs, open PRs, exact commit and deployments.
4. Keep 16 Core, 2 Electives and CF1–CF6 as three distinct scope layers.
5. No feature expansion or production change during scope reconciliation unless needed to fix a verified blocker.

**P0 exit:** scope and source hierarchy are reconciled; unknown requirements are explicitly listed; baseline is tied to an exact repository commit.

### P1 — Content, evidence and validation
1. Resolve historical evidence if available; otherwise preserve BLOCKED and prepare a separately approved new baseline.
2. Audit all 169 core chapters and map each objective to fitting, accessible resources.
3. Validate all 507 Q&A items and 169 rubrics.
4. Validate all 80 agency cells with direct/currentness caveats.
5. Validate 28 elective drafts independently.
6. Review simulations, capstones, credentials, Indonesia-market claims and local legal/commercial assumptions.

**P1 exit:** all mandatory chapter, resource, evidence and assessment criteria have recorded reviewer decisions. Missing third-party input remains an explicit release blocker.

### P2 — Engineering, runtime and release
1. Build quiz and assessment features using test fixtures only until question content is approved.
2. Add automated tests and verify every user-facing state, including error/retry/empty states.
3. Complete authenticated browser, responsive and accessibility QA.
4. Run exact-head CI and preview from the same commit.
5. Merge and deploy only after release gates are signed off; verify production and preserve rollback.

**P2 exit:** exact release candidate passes all mandatory gates and production evidence is recorded.

## 9. Current next actions

| Order | Action | Output / closure evidence |
|---:|---|---|
| 1 | Finalize and keep this acceptance register synchronized with the Source of Truth and execution ledger | Versioned register + exact commit |
| 2 | Recover or formally record unavailability of S0, DEP-002 and DEP-003 | Source inventory and blocker evidence |
| 3 | Start non-blocked P1 content/resource/assessment review in controlled batches, prioritizing documented gaps (T02, T03, T07, T08, T10, T13, T16) while tracking all other tracks | Chapter-level evidence and review decisions |
| 4 | In parallel, prepare a quiz-engine technical design using clearly marked test fixtures; do not expose unapproved answer keys as official assessment content | Data model, acceptance tests and prototype behind draft status |
| 5 | Continue external SME/JD/local-market/runtime dependencies without claiming completion in their absence | Reviewer sign-offs or precise BLOCKED records |

## 10. External technical references for later verification

These references guide standards-based implementation; they do not certify this project:

- W3C, Web Content Accessibility Guidelines (WCAG) overview and current WCAG 2.2 material: https://www.w3.org/WAI/standards-guidelines/wcag/
- 1EdTech, Question & Test Interoperability (QTI) specification documents: https://www.1edtech.org/standards/qti/index
- 1EdTech, QTI 3.0 information model and implementation guidance: https://www.imsglobal.org/spec/qti/v3p0/impl/
- Playwright, actionability and auto-waiting: https://playwright.dev/docs/actionability
- Playwright, retrying assertions: https://playwright.dev/docs/test-assertions

QTI 3.0 is an optional portability design consideration, not a requirement to certify the DPA application. WCAG 2.2 AA is the proposed accessibility acceptance target; the applicable criteria and test coverage must be assessed against the actual UI.

---

**Release decision:** **NOT READY — REMEDIATION INCOMPLETE.**  
**Completion rule:** a requirement is COMPLETE only when its acceptance criteria, verification class, direct evidence and reviewer/disposition are all recorded. Structural counts and successful CI cannot substitute for content, SME, runtime or production validation.


## 11. P1 remediation execution addendum — T08

**Date:** 5 November 2026  
**Status:** Practice coverage PARTIALLY ENHANCED; primary-source, SME and local-market acceptance remain OPEN.

### Delivered
- Created `docs/T08-direct-publisher-buying-simulation.md`, a Tier 3 synthetic end-to-end case for DPA-T08-CH01 through CH10.
- Added the pack reference to all ten T08 chapter resource-map rows without adding a new external source URL or changing the 48-URL primary-source inventory.
- The exercise covers media-owner mapping, common RFP/RFQ, proposal normalization, CPM/bonus arithmetic, budget cap, negotiation/BATNA, booking/IO checklist, delivery evidence, shortfall analysis, invoice variance and publisher scorecard.
- All publishers, rates, impression volumes, dates and campaign outcomes are expressly synthetic. The exercise is not a current Indonesian market benchmark, real rate card, client outcome, legal IO template or tax opinion.
- Corrected T08 boundary wording: direct publisher IO/sponsorship/reserved inventory is distinguished from PMP/PG DSP execution and open-auction bidding (coordinate with T06); a radio-spot example was replaced by a digital publisher display-delivery shortfall aligned to T08 scope.
- Cross-checked the model arithmetic independently: A contracted CPM Rp12,000; A bonus-adjusted illustrative CPM Rp10,285.71; B contracted CPM Rp14,000; B bonus-adjusted illustrative CPM Rp13,263.16; A+B contracted blended CPM Rp12,857.14; A+B bonus-adjusted illustrative CPM Rp11,489.36; A+B+C total Rp153,000,000, Rp3,000,000 over the Rp150,000,000 cap; A/B shortfall values Rp8,640,000/Rp7,000,000, combined Rp15,640,000. Shortfall value is not an automatic refund or credit; remedies depend on the signed IO.

### Primary-source cross-check and caveat
- The Jakarta Post publisher page describes an Advertising Department reservation process, signed Booking Order, media-kit/rate-card references, insertion details and payment/invoice provisions. Direct web open returned HTTP 403, although indexed publisher content was retrievable. It remains a single-publisher source lead, not universal practice.
- The page displays a 10% VAT note. DJP's 3 January 2025 explanation of PMK 131/2024 states that non-luxury taxable goods/services are calculated using 12% × 11/12 of the relevant base (effective 11% for most such supplies), while relevant luxury goods/services use 12% on the full base. Do not copy the publisher page's 10% note into a current budget model; actual advertising invoice treatment and any specific DPP treatment require finance/tax confirmation.
- IAB/4A's Internet Advertising Terms v3.0 identifies common IO fields but explicitly states it is not meant to cover direct advertiser buys with publishers and does not fully cover sponsorship/content integration. It is a limited US-oriented reference, not an Indonesian direct-buy contract or local legal precedent.

### What remains open
- Current publisher-issued media kits, rate cards, written proposals, booking orders/terms, delivery reports and invoice examples from relevant Indonesia media owners.
- Current agency direct-buying SOPs, procurement thresholds, approval matrix and locally reviewed makegood / cancellation / invoice-dispute practice.
- Qualified SME review of all ten T08 chapters, answer keys and rubrics; authorized legal/procurement/tax review of local commercial materials.
- Objective-to-resource fit for every chapter remains open across all 169 core chapters. The simulation is a practice artifact, not a source-fit approval.

**Disposition:** T08 practical simulation deliverable = PARTIAL/PRESENT. T08 primary-source and SME validation = OPEN. Overall release remains NOT READY.


## 12. P2 quiz-engine design addendum

**Date:** 5 November 2026  
**Design artifact:** [Quiz & Assessment Engine — Technical Design](quiz-engine-technical-design.md)  
**Status:** DESIGN DRAFT COMPLETE; implementation and content validation remain OPEN.

- Inspected the current guide data and renderer. Existing guide checks are `{ q, a }` reflective Q&A pairs rendered with a disclosure to reveal the answer. They do not have stable item IDs, answer options, distractors, scoring metadata, approval state or an attempt/submission record. This is not a scored quiz.
- The technical design specifies a canonical chapter-linked item schema, separate public item and private answer-key records, editorial/SME approval states, score and attempt lifecycle, accessible UI acceptance, local formative-progress limits, and a future server-side trust boundary for authoritative grading.
- The design explicitly prevents the existing 507 static Q&A items from being auto-promoted to scored questions. They require item classification, outcome mapping, distractor authoring where appropriate, source mapping, editorial review and SME approval.
- A browser-only quiz may be formative/self-check only. Client-delivered answer keys and localStorage are user-controlled and must not be represented as secure grades or credential-bearing assessment.
- The 80% mastery target remains proposed and uncalibrated. No pass/fail result is approved by this design.
- QTI 3.0 is optional interoperability consideration only; WCAG 2.2 AA is the proposed accessibility target and still requires applicable human and automated verification.

**Requirement disposition:** quiz technical design = PRESENT / DESIGN COMPLETE. `QUIZ-001`, `QUIZ-002`, `QUIZ-003` and scored-content acceptance remain OPEN. No quiz engine or approved scored bank is claimed as implemented.


## 13. Certificate issuance and verification feature

**Design:** [DPA Certificate Issuance & Verification](certificate-issuance-verification-spec.md)  
**Status:** FEATURE PROPOSED / DESIGN BASELINE PRESENT; IMPLEMENTATION NOT STARTED; ISSUANCE NOT AUTHORIZED.

| ID | Priority | Requirement and acceptance criteria | Verification / evidence | Baseline status |
|---|---|---|---|---|
| CERT-001 | P2 | Approve credential types, scope, issuer identity, claims, terms and authorized signatory. A DPA-issued learning credential must not be represented as BNSP/LSP, government or third-party certification without independently evidenced authorization. | Approved issuer/credential policy and reviewed certificate wording | OPEN |
| CERT-002 | P2 | Define tier-specific identity, completion, approved assessment, capstone, reviewer and pass/fail eligibility rules. The uncalibrated 80% target and existing 507 reflective Q&A pairs are not sufficient. | Approved assessment bank, calibrated rubrics/thresholds and eligibility tests | BLOCKED by assessment readiness |
| CERT-003 | P2 | Implement trusted server-side issuance with authenticated issuer roles; browser state/localStorage must not create a valid credential. | Unauthorized-action and modified-client-state tests; architecture/security review | OPEN — current site is static |
| CERT-004 | P2 | Maintain unique non-sequential IDs and auditable issue, correction, reissue, revocation and supersession events. | Registry schema, integrity tests and audit-event evidence | OPEN |
| CERT-005 | P2 | Publicly verify valid, revoked, superseded and not-found records with minimal approved fields only. | Browser/API tests, privacy checks and abuse/rate-limit tests | OPEN |
| CERT-006 | P2 | Generate accessible, printable certificate PDFs whose displayed claims, metadata and QR destination match the authoritative registry. | PDF/registry consistency, print, accessibility and QR tests | OPEN |
| CERT-007 | P2 | Approve and test consent, data minimization, access control, retention, backup, incident response and learner correction/dispute procedures. | Privacy/security review and operational evidence | OPEN |
| CERT-008 | P2 | Complete controlled pilot, support/recovery procedures, monitoring and release approval before any live issuance. | Pilot report, closed defects and signed release decision | OPEN |

**Dependency rule:** CERT-002 is downstream of quiz/assessment implementation and content/rubric approval. CERT-003 through CERT-007 require an authoritative server-side registry and an approved privacy/security model. No certificate is to be issued to a real learner until all applicable acceptance criteria are PASS with evidence.

**Non-goal:** This feature does not authorize use of BNSP/LSP or government-recognition claims. A licensed LPK/LSP partnership, if pursued, is a separate evidence and approval workstream.


### QUIZ-001 implementation evidence update — 5 November 2026

The isolated formative scaffold is recorded in [Quiz & Assessment Engine — Technical Design](quiz-engine-technical-design.md). Automated tests and a dedicated CI workflow are present in the remediation branch. The prototype accepts only synthetic fixtures and rejects summative mode. It is not integrated into the main chapter renderer and does not use any of the 507 current reflective Q&A pairs. Mark QUIZ-001 PARTIAL until exact-head CI, browser interaction/accessibility checks, empty/error-state evidence and chapter integration are completed. QUIZ-002/003 and assessment-content approval remain OPEN.
