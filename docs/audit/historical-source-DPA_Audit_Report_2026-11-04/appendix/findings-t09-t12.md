# Curriculum Audit Findings — Tracks T09–T12 (40 chapters)

**Auditor:** Independent curriculum auditor (analytics/measurement SME role)
**Date:** 2026-11-04
**Scope:** DPA-T09-CH01…CH10 (adops), DPA-T10-CH01…CH10 (analytics / Media Analytics / Marketing Science), DPA-T11-CH01…CH10 (seo), DPA-T12-CH01…CH10 (crm) — 40 chapters, content in Indonesian.
**Snapshot:** `_audit/pr5` (read-only). Outputs: `_audit/out/matrix-t09-t12.csv`, `_audit/out/findings-t09-t12.md`. No files under `_audit/pr5`, `_audit/pr6`, `_audit/main`, or `dpa-repo` were modified.

## Evidence base and tiers

**Verified directly (read this run):**
- All 40 chapter entries in `_audit/pr5/docs/169-chapter-evidence-register.md` (lines 2880–4247), read in full.
- Resource-mapping rows for all 40 chapters in `169-chapter-resource-mapping.md` (lines 123–162).
- Technical-review-matrix rows for all 40 in `169-chapter-technical-review-matrix.md` (lines 102–141), plus its header/global findings (149 added guides each have 3 Q&A pairs, 4 glossary entries, 4 workflow steps; 125 short answers in 81 chapters; 81 short glossary defs in 58 chapters; all SME/answer-key/rubric/resource columns OPEN).
- Rubric draft per-chapter structure in `169-chapter-assessment-rubrics-draft.md` (T09-CH01…CH03 read; all Q&A review status "OPEN — subject-matter reviewer must validate…"; shared 5-dimension 0–3 scoring, proposed pass ≥80/100).
- Verbatim spot-checks of guide JS vs register — T09: CH01, CH02 (`role-study-guides-part1.js` ~line 399); T10: CH06, CH07, CH08 (`role-study-guides-part2.js` ~lines 38–52); T11: CH09, CH10 (`role-study-guides-part2.js` ~lines 118–133); T12: CH02 glossary, CH03, CH04 (`role-study-guides-part2.js` ~lines 142–166). Register text matches guide text verbatim.
- `index.html` chapter blocks (T09-CH01…CH05 read): each `<details>` block contains only 3 "Yang dipelajari" bullets + a deliverable checkbox; no resources, Q&A, or glossary in the HTML chapter block.
- Track plan vs shipment: Source of Truth (`16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt`) planned chapter sequences for tracks 9–12 match the shipped 10 chapters exactly, including titles.
- Ad Ops 8-competency JD grouping and role aliases (SoT lines 5277–5310, 5255–5273); T10/11/12 alias lines (SoT 2414–2465).
- Negative checks: no `CDP` anywhere in chapter guides/register (only one planned-tools mention in SoT line 7818); no `UU PDP`/personal-data-law reference anywhere in `_audit/pr5`; competency IDs (`T09-C01` etc.) referenced in register+rubrics but defined nowhere in the workspace.

**Inferred (my judgment, not quoted):** all 0–4 dimension scores and statuses in the matrix CSV.

**Not known / not verified:** whether the rendered site wires `role-study-guides-*.js` into a learner-facing view beyond the HTML details blocks (script inclusion not traced end-to-end); live-platform currency of specific specs (CM360 limits, CWV thresholds) — chapters themselves carry a "spec berubah; cek halaman resmi" caveat.

**Register extraction inconsistency (verified):** register entries for T01–T08 include a 5-term glossary line; register entries for all 40 T09–T12 chapters omit the glossary field entirely, while the guide JS files contain 4-term Indonesian glossaries per chapter (spot-checked on 12 chapters across all four tracks). The register under-reports T09–T12 content; scoring used the guide files as ground truth.

---

## Track findings

### T09 — Ad Operations / Digital Campaign Operations (`adops`, 10 chapters)

**Intended function.** Technical campaign execution: trafficking, tagging/tracking, QA, go-live, delivery monitoring, discrepancy, billing reconciliation. Verified boundary discipline: CH01 states Ad Ops "memastikan campaign dikonfigurasi, ditayangkan, dilacak, dan direkonsiliasi dengan benar—bukan menetapkan seluruh audience strategy atau budget allocation," and Q&A explicitly separates Ad Ops from Media Buyer and Performance Specialist. This matches the SoT boundary "Ad Ops tidak disamakan dengan Media Buying" and the six-network JD evidence (trafficking, tags/pixels, QA, verification, CM360/Flashtalking/Adform, IAS).

**Alias list (from SoT, consistent with content):** Ad Ops Executive, Ad Operations Specialist, Campaign Operations, Digital Ad Trafficker, Trafficking Specialist, CM360/Ad Ops Specialist, Search & Ad Ops; "Data Operations Assistant" (Omnicom) flagged as adjacent-but-distinct.

**Competency coverage vs JD-derived 8-competency model (SoT lines 5277–5287).** Campaign Trafficking → CH02/CH05 ✔; Ad Server Management → CH01/CH05 ✔; Tagging & Tracking → CH04 ✔; Campaign QA → CH06 ✔; Campaign Launch & Delivery → CH06/CH07 ✔; Troubleshooting → CH07/CH08 ✔; Operational Reporting → CH07/CH09 ✔. **Missing: Verification & Brand Safety** (viewability, ad fraud, IAS/DoubleVerify) — it appears only as a word inside the CH01 ecosystem map and the WPP Jakarta JD quote; there is no chapter section, exercise, or glossary term for it. The T09 capstone artifact pack consequently lacks a verification deliverable even though the JD evidence the track cites (Publicis: "ad servers, DSPs, social media, dan search channels termasuk tracking pixels, campaign pacing, QA, troubleshooting, dan reporting"; WPP Jakarta: "IAS, DoubleVerify") demands it.

**Misplaced scope / boundaries.** None material. Buying is correctly kept out (T08 owns IO/negotiation; T09-CH02 only consumes the approved brief). Programmatic trafficking specifics are left to the programmatic track — acceptable, but the boundary should be stated in CH01 (it currently names DV360 in the ecosystem without saying depth lives elsewhere).

**Track-specific defects.** CH03 and CH05 carry the track's flagged short Q&A/glossary items (2+2 flags each per the technical matrix); CH09 (billing) inherits a weakly-fitting GMP-support resource link; no chapter cites IAB/MRC discrepancy or verification standards despite CH08 being the discrepancy chapter.

### T10 — Media Analytics / Marketing Science (`analytics`, 10 chapters)

**Intended function and the critical test.** The track passes the central test: it is **not** a fancier dashboard or a synonym of campaign reporting. Verified separation inside the track:
- Campaign/platform reporting: CH03 (GA4/platform/CM360 data) and CH05 (dashboards/BI).
- Media/audience analytics + diagnosis: CH06 descriptive/diagnostic, with explicit confounder language ("Dua metrik dapat bergerak bersama akibat seasonality, mix, budget, atau faktor ketiga tanpa causal link") and a "hold the analysis" rule when data quality is invalid.
- Marketing effectiveness/incrementality/causal measurement/attribution limits: CH07 — guide text verified verbatim: "Attribution membagi credit conversion berdasarkan rule/model, sedangkan incrementality mengestimasi tambahan outcome yang disebabkan media dibanding counterfactual… Platform ROAS tidak otomatis mengukur incremental return," with a simulated geo-test where platform ROAS 4x/6x collapses to +8% total sales — the correct attribution-vs-incrementality lesson. Glossary: Attribution / Incrementality / Geo-holdout / MMM.
- Experimentation/statistics: CH08 — hypothesis, randomization unit, power, MDE, stopping rules, multiple-testing governance, "Significance bukan ukuran business impact."
- Storytelling/decision: CH09; integration: CH10.

This satisfies the SoT's own analytics-vs-science split (Role 11 descriptive/diagnostic vs Role 12 "Causal, experimental, econometric, dan predictive") by sequencing both levels inside one track — acceptable, but the depth boundary is undocumented (see capstone defect).

**Alias list (SoT):** Media Analytics, Marketing Analytics, Data Analyst, Econometrician, Marketing Science Professional; SoT separately warns Performance Analyst ≠ analyst (activation role) — curriculum wording avoids that trap.

**Missing competencies.** (1) Econometrics/MMM exists only at glossary depth — defensible for analyst level but the boundary is not declared anywhere; a learner cannot tell what is deliberately out of scope. (2) The planned Tier-1 advanced target "Meta Marketing Science Professional certification" (SoT) never reached the resource mapping. (3) No consent/privacy dimension in CH02 data-quality (relevant to UU PDP).

**Resource defects (the track's biggest failure).** All T10 rows map to "Google Skillshop GA4/CM360" + a secondary labeled **"LinkedIn Marketing Academy Measurement certification" whose URL points to `iabtechlab.com/standards/measurement/`** — a label/URL mismatch. For CH07/CH08 (the marketing-science core), GA4 Skillshop is off-topic and the mislabeled secondary leaves no working measurement/experimentation resource at all; that is why both chapters score resource/evidence=1 → NEEDS MAJOR REVISION. CH04 (SQL) and CH05 (BI) likewise have no fitting resource (no SQL notebook, no Looker Studio).

**Misplaced scope.** None; T09-CH04 taxonomy overlap is acknowledged implicitly but should be cross-referenced.

### T11 — SEO / Organic Search / AEO / GEO (`seo`, 10 chapters)

**Intended function and separation test.** The required three-way separation is achieved: technical SEO (CH03 architecture/crawl/indexing + CH04 technical/CWV), content & authority (CH05 on-page/structured data + CH06 off-page/digital PR, including link-scheme compliance), and AEO/GEO as a distinct chapter (CH09) with its own competencies, not a rebrand of SEO. CH09 verified verbatim: glossary defines AEO ("optimasi agar informasi mudah dipahami/digunakan answer systems") and GEO ("visibility dalam generative search"); Q&A includes the two most important honesty checks — "Apakah schema menjamin brand muncul di AI answer?" → "Tidak…" and "Mengapa prompt sampling bukan market share?" → results depend on model/date/personalization. CH10 capstone also carries the anti-promise guardrail: "Hindari menjanjikan ranking atau traffic uplift tanpa data." CH08 (GSC/GA4) handles reporting with correct clicks≠sessions reconciliation, keeping it separate from T10 campaign reporting.

**Alias list (SoT):** SEO Specialist, Technical SEO, SEO/GEO Specialist, Organic Search Consultant; Publicis JD evidence explicitly includes "technical, on-page, off-page SEO, AI visibility, citations dan competitive positioning."

**Missing competencies.** Minor: log-file analysis (extension of CH03), international/hreflang SEO, and named-tool resources — JD evidence names Ahrefs/SEMrush/Screaming Frog and SoT plans "Semrush Academy" Tier-1, but the shipped resource mapping contains neither; the curriculum mentions crawling generically. CH07 (local SEO) has the track's worst short-answer flags (3) and no Google Business Profile resource.

**Misplaced scope.** None. CH09 placement after CH08 is defensible (measurement first, AI visibility second); some would argue for CH02 position, but no content is orphaned.

### T12 — CRM / Lifecycle / Marketing Automation (`crm`, 10 chapters)

**Intended function and the email-blasting test.** Passes: the track is explicitly not email blasting. CH01 defines CRM as "strategi pengelolaan hubungan customer berbasis data dan lifecycle, bukan sekadar software atau daftar kontak." Audience/data foundations: CH02 (identity resolution, dedup, retention) and CH03 (segmentation with reproducible criteria; lead scoring validated against sales outcomes — "Model scoring yang baik memasukkan fit, high-intent activity, exclusions, and sales feedback," with an anti-pattern example of email-open-only scoring). Journey automation: CH04 distinguishes "Trigger dikirim karena event/condition spesifik; blast dikirim ke target segment pada jadwal yang ditetapkan" and includes suppression/exit/frequency-cap logic. Engineering: CH06 is unusually rigorous (webhook, idempotency, dead-letter queue). Measurement: CH08 cohort/LTV with margin/horizon/churn assumptions; CH09 lifecycle experimentation with holdout/control. Channels: CH05 covers Email, WhatsApp, SMS, Push — WhatsApp inclusion is Indonesia-appropriate.

**Alias list (SoT):** CRM Strategist, CRM Campaign Specialist, Marketing Automation Specialist, Lifecycle Manager.

**Missing competencies.** (1) **CDP basics absent** — the SoT plans "CRM/CDP/ESP platforms" and the role spec expects CDP fundamentals, but "CDP" appears nowhere in the 40 chapters or guides; CH02 is the natural home and should carry a CDP-vs-CRM-vs-ESP comparison and identity-stitching basics. (2) No consent/UU PDP reference anywhere in the track (or the other three) despite consent being operationally central to lifecycle marketing in Indonesia. (3) No WhatsApp Business Platform resource despite WhatsApp being in the CH05 title and being Indonesia's dominant channel; mapped resources (HubSpot email cert, SFMC trail) fit email only. (4) CH09 depends on T10-CH08 statistics depth that is implicit, not referenced.

**Misplaced scope.** None material; CH09 overlaps T10-CH08 by design but recontextualizes to lifecycle metrics — acceptable with an explicit dependency note.

---

## Systemic patterns (affect all 40 chapters)

1. **No chapter-level resources anywhere in the track set.** Every register entry says "No chapter-level resource link captured in the HTML chapter block"; index.html confirms no resource links are surfaced; the resource mapping supplies only two track-level links per track (one primary, one secondary), reused verbatim across 10 chapters regardless of topic fit (billing, SQL, CWV, and LTV all inherit the same links). SoT Tier-1 plans (Semrush Academy, Meta Marketing Science cert, Braze learning) were dropped in shipment. This caps resource/evidence quality at 2 for 38 chapters and 1 for T10-CH07/CH08.
2. **Answer keys and rubrics structurally present but uniformly unvalidated.** The rubric draft gives each chapter a specific artifact checklist and a shared 5-dimension 0–3 scale (proposed pass ≥80), but every Q&A pair is marked "Current guide answer (not yet approved)" / review status OPEN; technical review, answer-key correctness, rubric calibration, and resource-fit columns are OPEN for all 40 rows. Assessment alignment therefore never exceeds 3.
3. **Short-answer and short-glossary debt is unevenly distributed.** Per the technical matrix, flagged chapters in this range include T09-CH03 (2), T09-CH05 (2+2), T09-CH09 (2), T11-CH07 (3), T12-CH09 (3), T12-CH04 (2+3); T10-CH07/CH08 and T11-CH09 have zero flags. Where content is flagged, fixes are cheap (expand definitions); where unflagged, quality is already professionally usable.
4. **Register ↔ guide extraction gap for T09–T12 glossaries.** Guides carry 4-term glossaries; register omits the field (T01–T08 do include it). Any downstream consumer of the register alone will wrongly conclude the tracks lack glossaries.
5. **Competency registry is dangling.** `T09-C01`–`T12-Cxx` IDs are referenced in register and rubrics but defined nowhere in the workspace, so competency alignment can only be audited against role-level JD evidence, not a formal competency taxonomy.
6. **No Indonesia-specific regulatory anchor.** Zero references to UU PDP (Law No. 27/2022) across consent, PII-in-URL (T09-CH02), personalization (T12-CH07), and data-architecture (T12-CH02) content that visibly need it. Bahasa Indonesia delivery and WhatsApp/marketplace context are present, so localization is partial, not absent.
7. **Lean HTML chapter blocks vs rich guide JS.** index.html shows 3 bullets + deliverable per chapter; the pedagogical payload (simulated example, workflow, Q&A, glossary) lives only in guide JS. If the learner-facing site renders only the HTML blocks, most of the audited substance is invisible; register/HTML/JS parity should be made explicit.
8. **Boilerplate duplication is register-level, not content-level.** Gap/rubric/resource lines are identical strings across all 40 register entries ("SME must validate…", "NOT DEFINED at chapter level…"), and the rubric draft's "Assessor must verify" block repeats verbatim per chapter. Chapter-specific content (objectives, examples, workflows, Q&A, glossaries, deliverables) is genuinely differentiated — I found no two chapters sharing practice prompts or Q&A, and no wrong-track placement.

## Top defects (most material first)

1. **T10-CH07 & T10-CH08 — measurement/experimentation chapters have no working measurement resources; secondary link mislabeled.** Resource mapping: "LinkedIn Marketing Academy Measurement certification" → `https://iabtechlab.com/standards/measurement/` (URL is IAB Tech Lab, not LinkedIn); primary "Google Skillshop – GA4" is off-topic for attribution/incrementality/MMM and experiment statistics. Status NEEDS MAJOR REVISION for both.
2. **T09 — Verification & Brand Safety competency missing from the whole track** despite being 1 of the 8 JD-derived competencies and named in the cited JDs (WPP Jakarta: "IAS, DoubleVerify"); no chapter, exercise, glossary term, or capstone artifact covers viewability/fraud/verification.
3. **T12 — CDP basics absent** ("CDP" zero hits in chapters/guides/register; SoT plans "CRM/CDP/ESP platforms"); CH02 covers identity resolution but not CDP-vs-CRM-vs-ESP boundaries or consent-platform basics; compounded by zero UU PDP references track-wide.
4. **Systemic: all 40 chapters lack chapter-level resources and validated answer keys** — resource mapping is track-level templated (billing, SQL, CWV, LTV inherit the same two links), every Q&A review status OPEN, rubric calibration OPEN; assessment alignment capped at 3, resource quality capped at 2.
5. **Register under-reports T09–T12 glossaries and HTML hides the pedagogy** — register omits the glossary field for all 40 (guides have them, e.g., T11-CH09 defines AEO/GEO/Citation/Entity), and index.html chapter blocks carry only 3 bullets + a checkbox, so the register/HTML/JS triangle is inconsistent and a register-only audit would under-score every chapter.

## Coverage statement

All 40 chapters (T09/T10/T11/T12 × CH01–CH10) were scored in `_audit/out/matrix-t09-t12.csv` from a full read of the register plus the resource-mapping and technical-review-matrix rows, with verbatim guide spot-checks on ≥2 chapters per track (T09: CH01–02; T10: CH06–08; T11: CH09–10; T12: CH03–04 + glossaries) and index.html block checks. Nothing in scope was left unscored; no chapter was MISSING or NOT VERIFIED. Scoring rubric: 0=missing, 1=title-level/generic, 2=partial, 3=professionally usable, 4=rigorous+evidence. Status rubric applied as specified (any dim≤1 → NEEDS MAJOR REVISION; any dim=2 → PARTIALLY VALIDATED; all essential dims ≥3 → VALIDATED).
