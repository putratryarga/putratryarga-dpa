# Curriculum Audit — DPA Tracks T13–T16 (47 Chapters)

**Auditor:** Independent curriculum auditor (content / creator-partnerships / partnerships SME)
**Date:** 4 November 2026
**Scope:** DPA-T13-CH01…CH11 (content), DPA-T14-CH01…CH12 (kol), DPA-T15-CH01…CH12 (affiliate), DPA-T16-CH01…CH12 (community) — 47 chapters, snapshot `_audit/pr5`. Read-only audit; deliverables in `_audit/out/`.
**Content language of audited material:** Indonesian (with pervasive English code-switching — see systemic pattern S5).

---

## 1. Method, evidence tiers, coverage

**Verified (direct evidence):**
- Full register text of all 47 chapters read from `_audit/pr5/docs/169-chapter-evidence-register.md` (lines 4248–5862): concept, simulated example, workflow, practice/deliverable, 3 Q&A + answers, glossary, agency-evidence line, resource line, rubric line, gap line.
- Direct verbatim spot-check of register vs guide source `role-study-guides-part3.js`: **T13-CH01–CH05, T14-CH07–CH12, T15-CH05–CH07, T16-CH12** (≥1 per track requirement exceeded). Register extraction is faithful — no drift found in the current snapshot.
- Glossary lines for all 47 chapter IDs matched against `role-study-guides-part3.js` via grep.
- `index.html` chapter blocks verified for T13-CH01–CH03 (lightweight "Yang dipelajari" bullets + deliverable checkbox; no per-chapter resources, no Q&A, no score engine — confirmed globally by HTML text: "bank soal quiz interaktif per bab masih dalam pembangunan… penilaian berjalan lewat deliverable per bab").
- Supporting docs read: `169-chapter-resource-mapping.md` (all 47 T13–T16 rows), `169-chapter-technical-review-matrix.md` (all 47 rows + method), `T16-CH12-register-correction-and-rubric-supplement.md`, `169-chapter-assessment-rubrics-draft.md` (T13–T16 sample + structure), `16-core-track-role-crosswalk.md` (tracks 13–16 function/boundary rows).

**Inferred (auditor judgment, not a defect of the source):**
- Technical-accuracy verdicts are my own SME read of concept/Q&A text; no external fact-check run against live platform docs in this pass. No outright factual error was found in any of the 47 chapters.
- Competency-alignment verdicts rest on the mapping being coherent but unvalidated (the register itself calls the IDs "first-pass role spine mapping… not yet independently reviewed").

**Unknown / not established:**
- No published definitions for T13-C01…C06, T14-C01…C07, T15-C01…C06, T16-C01…C07 were found anywhere in the snapshot (searched register, rubrics draft, crosswalk, Source-of-Truth file, competency-matrix doc).
- Resource links were not opened/live-checked (fit, access, price, and Indonesia-availability checks are explicitly OPEN in the technical review matrix).

**Scoring rubric:** each dimension 0–4 (0 missing / 1 title-level / 2 partial / 3 professionally usable / 4 rigorous+evidence). `Score` = mean of the 7 dimensions, 1 decimal. Status per task rules.

**Coverage statement: 47/47 chapters assessed.** Status distribution: **PARTIALLY VALIDATED 47; VALIDATED 0; VALIDATED WITH MINOR IMPROVEMENTS 0; NEEDS MAJOR REVISION 0; NOT VERIFIED 0; MISSING 0.** No dimension scored ≤1 anywhere; hence no NEEDS MAJOR REVISION. Two dimensions (competency alignment, resource/evidence quality) score 2 across all 47 chapters for systemic reasons below, which caps every chapter at PARTIALLY VALIDATED. Score distribution: 15 chapters at 2.7, 32 at 2.6 (difference = assessment-alignment score only).

---

## 2. Per-track findings

### 2.1 T13 — Content Strategy & Creation (`content`, 11 chapters)

**Intended function (per crosswalk):** editorial/content strategy, content architecture, messaging, brand voice, formats, production, distribution, publishing and measurement; "Organic Social is a distinct market job family and named specialization within Track 13… it is not Community and not Paid Social."

**Boundary/alias hygiene — mostly good:** CH01–CH03 are clearly strategist territory (audience/voice, pillars/objectives, editorial architecture). CH04 (insight mining) and CH10 (measurement) are correctly strategist-level, not community-level listening and not analytics-track modeling. CH05–CH07 are craft-adjacent but framed as strategist control of production (storyboards, briefs, repurpose matrices) rather than hands-on creator craft — defensible, but the strategist/creator/organic-social split inside Track 13 is never stated to the learner.

**Strengths:** concepts carry real boundary conditions ("Proporsi konten perlu mengikuti objective, resources, and evidence—not fixed universal percentages"; CH05's clickbait hook case where "view mungkin naik, tetapi trust turun"). Practices are quantified and concrete (20-signal insight board; 12-asset 4-week calendar; 1,200–1,500-word brief).

**Gaps / defects:**
- **CH08 Platform Adaptation is Indonesia-blind.** Covers TikTok/Instagram/YouTube/LinkedIn generically; zero mention of TikTok Shop–native content behavior, Shopee Video, or marketplace-influenced content conventions that define Indonesian organic content work. Concept text stays at "Platform-native | Format/ekspresi yang sesuai mekanisme dan ekspektasi platform."
- **CH08 Q2 restates bullets:** expected answer is a bare list ("Brand promise, fact accuracy, POV consistency…") — assessment does not add decision logic.
- **CH09 duplication:** glossary carries "Usage rights" and "Whitelisting" that duplicate T14-CH07/CH10 entries, with no boundary note about which track owns rights negotiation (content track only decides distribution usage). Cross-track concept ownership is implied, never taught.
- **CH11 capstone competency mapping omits C03/C04/C05** (maps only T13-C02+C06) although the portfolio pack covers the whole editorial system.
- Short-answer concentration: CH01, CH03, CH05, CH06 carry 2 short (<12 words) answers each.

**Track verdict:** PARTIALLY VALIDATED ×11. Substance is professionally usable; the ceiling is set by the unvalidated competency spine, track-level resources, and the assessment layer.

### 2.2 T14 — KOL/KOC/Influencer & Creator Partnerships (`kol`, 12 chapters)

**Intended function (per crosswalk):** creator discovery, audience quality, fit, briefing, negotiation, rights, disclosure, safety, activation and measurement; "Creator contracting/partnerships, not editorial content ownership or affiliate infrastructure."

**Boundary/alias hygiene — the best of the four tracks:** the pipeline CH01→CH12 is a genuine partnership operating sequence (ecosystem → tiers → discovery → vetting → planning → briefing → contracting → seeding → execution → paid amplification → measurement → capstone). Paid-media separation is explicit in CH10 ("Organic creator performance dan paid amplified performance harus dilaporkan terpisah") and CH11 correctly forbids claiming paid views as organic. Affiliate boundary respected (no commission mechanics here; T15-CH08 handles creator-affiliate).

**Strengths:** CH07 (Negotiation/Rights) is the strongest chapter in T13–T16: "Creator fee tidak otomatis mencakup perpetual paid usage. Buyer harus memisahkan organic posting license, paid amplification, raw footage, cutdowns…". CH04 fraud screening teaches triangulation, not single-signal judgments. CH11's ROI composition (fee, production, rights, seeding, amplification, discounts, margin) is professionally correct.

**Gaps / defects:**
- **Indonesia relevance underdeveloped where it matters most.** KOL/KOC terminology is present (CH02: "KOL | Key Opinion Leader…; KOC | Key Opinion Consumer"), but no Indonesian platform context: no TikTok One/MCN norms for the local market, no local rate anchors (even synthetic), no Indonesian endorsement-disclosure reference (CH06/CH07 teach disclosure generically; no local regulatory or platform-policy anchor). Resource mapping confirms: track resources are Meta Blueprint + TikTok One support page only.
- **CH03 has the weakest assessment in the track:** all 3 answers <12 words (per tech matrix 3/3 flags), e.g. discovery Q&A answers are noun lists.
- **CH02 gives no numeric tier anchors at all.** Refusing universal boundaries is defensible ("batasnya dapat berbeda"), but a learner gets no calibrated example range anywhere.
- **CH12 capstone maps to T14-C07 only** (measurement) and its Q1 answer restates the pack contents ("Artifacts from strategy through contracting, execution, tracking, reporting…") rather than testing judgment.

**Track verdict:** PARTIALLY VALIDATED ×12.

### 2.3 T15 — Affiliate & Social Commerce Partnerships (`affiliate`, 12 chapters)

**Intended function (per crosswalk):** partner model, commission economics, tracking, attribution, fraud, payouts, activation and compliance; "Performance-based partnership, distinct from influencer marketing and retail media."

**Boundary/alias hygiene — good:** affiliate ≠ creator marketing is respected (CH08's creator affiliate is framed around tracked commissions and product eligibility, not brand fees); tracking/attribution content (CH05–CH06) is affiliate-specific and does not leak into paid-media territory. CH06's core distinction is exactly right: "Attributed sale mendapat credit menurut tracking rule; incremental sale adalah tambahan yang tidak akan terjadi tanpa treatment."

**Strengths:** CH04 commission math is internally consistent (25% margin − 20% commission − 10% voucher → negative contribution: arithmetic checks out). CH09 fraud taxonomy (click injection, cookie stuffing, invalid conversion, clawback) is accurate and appropriately cautious ("spike bukan bukti final"). CH10 reconciliation workflow (dedupe, reversal, variance, approval) is operationally real.

**Gaps / defects — worst language integrity of the four tracks:**
- **English-code-switching in expected answers:** CH02 all three answers in English ("Each type has different traffic, attribution, fraud, audience, and commission behavior."); CH05 two of three; CH11 all three ("Program size can rise while active quality, incremental profit, and compliance fall."); CH12 Q3; CH07's simulated example ends in English mid-scenario ("Offer eligibility and assets must be checked before send."). For an Indonesian-language curriculum the assessment layer is inconsistent by chapter.
- **Short-answer concentration:** CH05 and CH10 have all 3 answers <12 words (tech matrix flags); CH03 has 2.
- **Indonesia relevance is the track's biggest strategic gap given its own topic.** The global brief for this curriculum names TikTok Shop affiliate and local marketplaces as core Indonesia context; T15 teaches social-commerce mechanics abstractly (CH08: "Platform-native programs memiliki product eligibility, commission rates, content policy, settlement, and attribution rules yang dapat berubah") but names no Indonesian program, marketplace, payment/settlement norm, or local fraud pattern, and the resource pair (impact.com PXA + Awin basics) contains nothing Indonesia-specific.
- **CH12 capstone maps to T15-C06 only**; Q&A drift to English.
- **CH04 glossary thin:** CPS/CPA entries are acronym expansions only (3/3 glossary short-flags per tech matrix).

**Track verdict:** PARTIALLY VALIDATED ×12.

### 2.4 T16 — Community Management & Advocacy (`community`, 12 chapters)

**Intended function (per crosswalk):** community purpose, member journey, moderation, service, engagement, UGC governance, advocacy and community health; "Relationship/participation-led. Organic Social is publishing/distribution-led; they collaborate but are not interchangeable."

**Boundary/alias hygiene — explicitly taught:** CH01 Q1 ("Apa beda community dan audience?") and CH12 Q1 ("Community plan mengatur member relationships, participation, norms, service, safety, and governance—not only publishing") directly enforce the community ≠ organic-social separation. CH04 listening is scoped to conversation intelligence, not content-opportunity mining (T13-CH04), and the distinction survives.

**Strengths:** CH07 moderation is ethically precise ("Kritik sah tidak boleh dihapus; serangan/dangerous speech ditindak dengan severity matrix") with doxxing/severity/appeal vocabulary; CH08 PII handling and handoff flow are correct; CH10 crisis playbook (holding statement, incident lead, after-action review) is professionally complete.

**Gaps / defects:**
- **CH04 has all 3 answers <12 words** — recall/precision are defined correctly but minimally; no worked example of a query-to-coding decision.
- **No local legal anchor.** CH07/CH08 touch speech, privacy, and personal data but reference no Indonesian legal/policy frame; resources are Meta Blueprint community courses only.
- **CH06 Q1 answer in English** ("It can attract incentive-only behavior…"); CH02/CH03/CH09/CH11 carry short answers.
- **CH12 cross-document drift (the register-correction defect is resolved but the paperwork is stale):** the current register and guide source both show complete, Indonesian Q&A/glossary — the `undefined` defect described in `T16-CH12-register-correction-and-rubric-supplement.md` has been fixed in this snapshot. However (a) the supplement's chapter-specific rubric for T16-CH12 is still not reflected in the register (register line remains "Rubric / passing criteria: NOT DEFINED at chapter level"), and (b) the supplement quotes an older English Q&A set, so the doc no longer matches the source it corrected.

**Track verdict:** PARTIALLY VALIDATED ×12.

---

## 3. Systemic patterns (cross-track)

- **S1 — Register is role-templated, not chapter-templated.** All 47 chapters repeat one identical agency-evidence line per track, one identical "Resources: No chapter-level resource link captured in the HTML chapter block" line, one identical "Rubric / passing criteria: NOT DEFINED at chapter level" line, and one identical gap/SME line. Chapter-level evidence therefore exists only in concept/practice/Q&A; evidence quality is structurally capped.
- **S2 — No chapter-level resources anywhere in T13–T16.** The resource map assigns exactly one generic pair per track (T13: HubSpot/Meta/LinkedIn catalogs; T14: Meta Blueprint creators page + TikTok One support page; T15: impact.com PXA + Awin basics; T16: Meta Blueprint community collection). Real-sounding official sources, but 2 links cannot differentiate 11–12 distinct chapters, and the technical matrix marks "Resource fit" and Indonesia "access/price checks" OPEN for all 47.
- **S3 — Zero Indonesia-specific sources despite Indonesia being the curriculum's stated relevance frame.** No local marketplace/creator-economy resources, no local disclosure or data-privacy anchors, no Indonesian-language references. For T14/T15 this is a material relevance defect (KOL/KOC ecosystem, TikTok Shop affiliate, local marketplaces), not a cosmetic one.
- **S4 — Competency spine unpublished and unvalidated.** IDs (T13-C01–C06; T14-C01–C07; T15-C01–C06; T16-C01–C07) map sensibly chapter-by-chapter, but no definitions exist in the snapshot; the register admits "not yet independently reviewed"; all four capstones map to only 1–2 competency IDs, so the spine cannot express integration.
- **S5 — Language integrity breach in the assessment layer.** Q&A answers and occasional example sentences switch to English in ~15 of 47 chapters (heaviest in T15: CH02, CH05, CH07-example, CH11, CH12; also T14-CH12, T16-CH06, T13-CH02-glossary). Concept text is consistently Indonesian; the inconsistency is concentrated exactly where learners self-test.
- **S6 — Assessment layer is static and unapproved.** 3 fixed Q&A per chapter; every answer key in the rubrics draft is marked "not yet approved"/OPEN; no per-chapter scoring engine in HTML; the rubrics draft's proposed ≥80/100 pass mark is uncalibrated. 125 answers across 81 chapters sit under 12 words globally; within T13–T16 the all-three-short chapters are T14-CH03, T15-CH05, T15-CH10, T16-CH04. Several answers merely restate concept bullets (T13-CH08 Q2, T14-CH12 Q1).
- **S7 — Cross-document drift.** T16-CH12 correction doc is stale relative to the regenerated register (defect fixed; supplement unincorporated; quoted Q&A no longer matches source). Register rubric lines ignore the existence of chapter checklists in `169-chapter-assessment-rubrics-draft.md`.
- **S8 — Role-boundary teaching is present but implicit.** The crosswalk states the T13/T14/T15/T16 separations; the chapters mostly respect them (no wrong-track placement found in any of the 47), yet only T16 explicitly teaches its boundary via Q&A. T13 never tells the learner where strategist ends and creator/organic-social begins; T13-CH09 shares glossary concepts with T14 without ownership notes.

---

## 4. Top defects (most material, with chapter IDs and evidence)

1. **No chapter-level or Indonesia-specific resources (systemic; all 47).** Register: "Resources: No chapter-level resource link captured in the HTML chapter block"; resource map shows one shared pair per track; technical matrix: Resource fit OPEN ×47. Material for T14/T15 where the brief demands Indonesia market grounding.
2. **Unvalidated competency spine with no published definitions (systemic; all 47), and capstones mapped to 1–2 IDs (T13-CH11, T14-CH12, T15-CH12, T16-CH12).** Register: "first-pass role spine mapping… not yet independently reviewed."
3. **Static, unapproved assessment layer (systemic; all 47)** — all answer keys OPEN in the rubrics draft; no score engine in HTML ("bank soal quiz interaktif per bab masih dalam pembangunan"); worst instances: T14-CH03, T15-CH05, T15-CH10, T16-CH04 (all 3 answers <12 words).
4. **English/Indonesian language mixing in expected answers (T15-CH02, T15-CH05, T15-CH11, T15-CH12, T16-CH06, T14-CH12, plus examples in T15-CH07).** e.g. T15-CH02: "Each type has different traffic, attribution, fraud, audience, and commission behavior." — breaks the Indonesian content requirement exactly at self-test points.
5. **Stale T16-CH12 paperwork (T16-CH12 + correction doc):** `undefined` register defect already fixed in this snapshot, but the supplement's chapter rubric is still unincorporated into the register and the doc quotes superseded English Q&A. Risk: a reader trusting the correction doc over the source will mis-state the chapter's Q&A.

**Near-top (worth fixing in the same pass):** T13-CH08 Indonesia-blind platform adaptation; T13-CH09/T14 glossary duplication without ownership note; T14-CH02 missing tier anchors; T13-CH08 Q2 / T14-CH12 Q1 restating answers; CH04 glossary acronym-only entries in T15-CH04.

---

## 5. Remediation priorities

1. **P1 — Assessment pass:** SME-validate all 47×3 answer keys; expand short answers (priority: T14-CH03, T15-CH05, T15-CH10, T16-CH04, T13-CH01/03/05/06); enforce Indonesian in Q&A/examples; calibrate the ≥80/100 rubric.
2. **P1 — Resource pass:** attach 1–2 chapter-fit resources per chapter and add Indonesia-specific sources per track (TikTok Shop/creator-economy and marketplace affiliate education for T14/T15; local disclosure/privacy anchors for T14/T16); then run the OPEN Indonesia access/price check.
3. **P2 — Competency spine:** publish definitions for all 30 IDs used by T13–T16, review the mapping, and remap the four capstones to the full track competency set.
4. **P2 — Register regeneration + drift fix:** fold the T16-CH12 supplement into the register's rubric line, mark the correction doc as applied, and resolve the register-vs-rubrics-draft "NOT DEFINED" contradiction.
5. **P3 — Boundary teaching:** add one-line role-boundary notes to T13 chapters (strategist vs creator vs organic social) and ownership notes where T13/T14 glossary overlap (CH09 vs T14-CH07/CH10); add synthetic-but-labelled tier ranges to T14-CH02.

**Compliance note:** no chapter makes absolute claims or unfounded efficacy promises; simulated data is consistently labelled ("SIMULATED —", "Contoh sintetis"). The T14-CH12 and T16-CH12 "no invented endorsements/fabricated metrics" rules are correct and should be preserved in any rewrite.
