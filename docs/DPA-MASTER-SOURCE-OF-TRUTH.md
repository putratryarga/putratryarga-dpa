# DPA Master Source of Truth
**Version:** 1.0 · **Effective date:** 5 November 2026  
**Normative status:** Current architecture and governance reference; not a claim of full release validation.

> This structured document is the normative statement of current curriculum architecture. The transcript-style file `16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt` remains a historical research/audit archive.

## 1. Scope
- 16 core specialist tracks and 169 core chapter IDs.
- 149 role-specific guides plus 10 Full-Stack and 10 Paid Social legacy guides.
- Elective 17: CRO / Growth / Experience Optimization; Elective 18: Traditional Media Planning & Buying.
- 28 elective chapter specifications are proposed outlines, not completed chapters.
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

The 80-cell matrix is a coverage ledger, not proof of 80 independently validated cells. The 5 November 2026 reconciliation records class-label totals A 37, B 20, C 0, D 37, E 0, G 5, with 19 compound cells (99 label instances across 80 unique cells). Five cells retain a G marker: four pure gaps plus one B/G sister-practice gap. Havas role distinctions: JR0096922 is direct Paid Social (Warsaw); JR0099039 is direct Organic & AI Manager (Sydney, 4+ years/senior scope); JR0093003 belongs to Havas Paris Social, not Havas Media Network; JR0096564 is historical DMPG evidence (closed 3 August 2026); JR0093690 belongs to Havas Play with conflicting start-date metadata. See the 80-cell evidence matrix and elective audit for source-level caveats. Elective evidence is a separate 10-cell matrix.

## 8. Resource and credential governance
For each chapter distinguish official learning, official technical documentation, industry standards, applied deliverables, and credentials. A URL does not prove access, local eligibility, price, language, or credential status. Record publisher, exact URL, objective fit, access/market limitations, last-checked date and verification outcome.

Separate professional certification, course completion, learning badge, knowledge assessment and award. Do not conflate them.

## 9. Assessment governance
- Static Q&A is not a scored quiz.
- Answer keys remain OPEN until correctness, ambiguity, completeness and acceptable alternatives are reviewed against sources and by SMEs where required.
- An 80/100 pass threshold is not calibrated without sample submissions and reviewer agreement.
- Rubrics need observable criteria, performance anchors, critical failures, evidence, feedback and resubmission rules.

## 10. Electives
Both electives remain `PROPOSED — CONTENT AND EVIDENCE VALIDATION PENDING` until all 14 chapters each have full learning content, workflows, exercise, deliverable, rubric, Q&A/answer guidance, glossary, sources and market validation. Do not count them among 169 core chapters.

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
- SME review, 507 answer-key validation, rubric calibration, 80-cell JD validation, 169 resource-fit review, electives development and browser/runtime QA remain open.

**Historical archive:** `16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt`.  
**Execution ledger:** `2026-11-05-remediation-execution-ledger.md`.


## 2026-11-05 source and preview re-verification

- Resource-source captions were reconciled with their actual destination publishers across 13 track families. The updated register contains 169 chapter rows and 33 unique resource URLs; all 33 returned readable content in a live fetch.
- The source check verifies link identity and broad track-level topical coverage only. Exact learning-objective fit for all 169 chapters, Indonesia access, language, price and credential eligibility remain open.
- Source revision `f9def1a8c6a8b22568b38bd83c7c1086765418fb` has a Vercel Preview deployment in READY state and a successful GitHub Vercel status. Its HTML endpoint returned HTTP 200 and all eight referenced local JavaScript assets returned HTTP 200.
- HTTP availability is not authenticated browser/runtime QA. The UI interaction and accessibility release gates remain open.
- Raw score matrix and the original 23 findings / D-1…D-12 records were not recovered. The seven-dimension numerical scale and averaging formula exist, but the dimension definitions and raw input values are not. Do not reconstruct them by inference.
