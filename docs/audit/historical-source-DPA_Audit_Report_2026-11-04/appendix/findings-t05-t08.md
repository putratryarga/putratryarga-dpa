# Findings — DPA-T05…T08 Chapter Audit (42 chapters)

**Auditor role:** independent curriculum auditor (media/buying SME), read-only over `_audit/pr5`, `_audit/pr6`, `_audit/main`, `dpa-repo`; outputs only in `_audit/out/`.
**Date:** 2026-11-04. **Coverage:** 42/42 chapters assessed (T05-CH01…CH10 paidsocial, T06-CH01…CH12 programmatic, T07-CH01…CH10 retail, T08-CH01…CH10 investment). No git mutations.

## Method and verification basis

- **Primary source:** `_audit/pr5/docs/169-chapter-evidence-register.md` (lines 1416–2879): per-chapter competency IDs, role-level agency evidence, objective/concept, simulated example, workflow, practice/deliverable, 3 Q&A + expected answers, glossary, resource/rubric/gap lines.
- **Spot-checks against actual guides (≥1 per track):**
  - T05: `paid-social-guides.js` CH01–CH03 read directly — register matches verbatim (concept, example, steps, practice, checks, terms).
  - T06: `role-study-guides-part1.js` lines ~150–250 — CH01 glossary block and chapter objects match register.
  - T07: `role-study-guides-part1.js` lines 299–311 — verified the CH06/CH07 content swap in the shipped guide file (see Defect 1).
  - T08: `role-study-guides-part1.js` lines ~330–380 — CH01 block and G() bindings match register.
  - `index.html` chapter blocks (e.g., lines 2508–2540 paidsocial, 2922–2945 retail) — summaries are title-aligned 3-bullet boxes with a checkbox deliverable; lighter than JS guides.
- **Cross-docs used:** `169-chapter-resource-mapping.md` rows 90–122 (T05–T08 practice/deliverable text matches register), `169-chapter-technical-review-matrix.md` rows 60–101, `169-chapter-assessment-rubrics-draft.md` (T05–T08 sections verified, e.g. lines 1149–1401, 2044–2185), `resource-credential-validation.md`, `16-core-track-role-crosswalk.md`.
- **Scoring convention:** each dimension 0–4 (0 missing, 1 title-level/generic, 2 partial, 3 professionally usable, 4 rigorous + evidence). Statuses: NEEDS MAJOR REVISION (any dim ≤1), PARTIALLY VALIDATED (some dim = 2), VALIDATED WITH MINOR IMPROVEMENTS (all ≥3 with recorded minor defects), VALIDATED (all ≥3, no material pending validation). Score column = mean of the 7 dimensions.
- **What I did not verify:** live platform UIs, live resource URLs from Indonesia, and the two unnamed numeric columns in the technical-review-matrix rows (header interpretation not established; I did not guess). No web sources were required for the register-vs-guide fidelity checks; all quoted evidence is from workspace files.

## Status counts

| Status | Count | Chapters |
|---|---|---|
| VALIDATED | 0 | — |
| VALIDATED WITH MINOR IMPROVEMENTS | 22 | all T05 (10), all T06 (12) |
| PARTIALLY VALIDATED | 18 | T07-CH01…CH05, CH08…CH10 (8); all T08 (10) |
| NEEDS MAJOR REVISION | 2 | T07-CH06, T07-CH07 |
| NOT VERIFIED / MISSING | 0 | — |

Why zero full VALIDATED: every one of the 42 chapters has (a) answer keys recorded as OPEN in the rubrics draft ("Review status: OPEN — subject-matter reviewer must validate correctness…"), (b) register line "Rubric / passing criteria: NOT DEFINED at chapter level", and (c) no chapter-level resource link in the HTML block. These are release-gating gaps even where content quality is high.

---

## Track findings

### T05 — Paid Social (DPA-T05-CH01…CH10) — VALIDATED WITH MINOR IMPROVEMENTS ×10

- **Intended function (index.html):** "Eksekusi dan optimasi iklan berbayar di platform social: objective, audience, arsitektur campaign, creative testing, auction/bidding, pixel & CAPI, learning phase, dan measurement." Distinct from organic social and programmatic; boundaries taught explicitly inside content (T06-CH01 Q&A: "Programmatic membeli inventory lintas publisher melalui DSP/exchange; paid social berjalan pada platform social…").
- **Alias list (index.html):** Paid Social Executive · Social Media Buyer · Biddable Social Executive.
- **Competency IDs used:** T05-C01…C06 (mapping in register/rubrics). Definitions of these IDs are not authored anywhere I searched (`16-core-track-role-crosswalk.md`, `80-cell-agency-role-evidence-matrix.md`, `role-competency-matrix-and-elective-chapter-audit.md`, `16_track_Source_of_Truth…txt`, `index.html`) — alignment verified structurally only (see Systemic Pattern 5).
- **Quality:** the strongest track. Content is clean Indonesian, example-driven with FMCG/skincare Indonesia cases, hedged platform claims ("Nama objective… dapat berubah… Periksa pilihan aktual di Ads Manager"), correct unit economics in CH06 (Rp150.000 AOV, Rp45.000 margin, revenue-vs-profit ROAS distinction), privacy/consent guardrails in CH03/CH05, CH07 covers Pixel/CAPI/dedup/UTM at working depth. Practice prompts specify exact columns (asset register, decision tree, blueprints for Meta and TikTok separately — correct on hierarchy naming Campaign→Ad Set→Ad vs Campaign→Ad Group→Ad).
- **Missing competencies:** LinkedIn B2B buying is named in CH01 as "pendalaman untuk kebutuhan B2B" but no chapter delivers it; cross-track overlap of CH07 tracking with the paid-search track's conversion chapter (observation, out of scope).
- **Track-wide flags:** tech-review matrix: "20 legacy guides (10 Full-Stack and 10 Paid Social) retain their original source format and require a separate content/answer-key pass." Resource-mapping rows mislabel: label "LinkedIn Marketing Academy" → TikTok Academy URL (rows for all 10 chapters).
- **Capstone:** CH10 is the only T05–T08 chapter with an explicit scoring rule (0–3 per area, min 2, two areas ≥3) — replicate elsewhere.

### T06 — Programmatic (DPA-T06-CH01…CH12) — VALIDATED WITH MINOR IMPROVEMENTS ×12

- **Intended function:** "Pembelian media otomatis melalui DSP: ekosistem DSP/SSP/exchange, OpenRTB, audience & data, inventory & deals, bidding/pacing, brand safety, CM360/Floodlight, dan supply quality." Correctly distinct from biddable social and direct buying.
- **Alias list:** Programmatic Trader · Programmatic Executive · Programmatic Analyst.
- **Competency IDs:** T06-C01…C07 (CH05 and CH10 map to two IDs; CH12 to four) — again, no authored definitions.
- **Quality:** professionally usable and technically sound: auction nuance is hedged correctly ("Tidak semua mekanisme lelang bersifat first-price dengan implementasi identik"), ads.txt/sellers.json framed as authorization signals not quality guarantees, viewability-vs-attention and unmeasured-vs-failed distinctions correct (CH09), CM360/Floodlight/GA4 discrepancy drivers correct (CH10), credential-vs-seat distinction explicit (CH05 Q3). Capstone CH12 deliverable pack is comprehensive (10 artifacts).
- **Defects:** (1) heavy English code-switching inside Indonesian sentences throughout objectives/workflows/Q&A/glossaries — inconsistent with T05 register and with the stated content language (Indonesian); (2) Q&A in CH02 includes a pure glossary restatement ("Apa itu bid floor?"); the tech-review matrix's global flag applies here ("125 answer pairs in 81 chapters are shorter than 12 words"); (3) no Indonesia-specific supply, verification, or consent context anywhere in the track; (4) mild duplication: PMP/PG introduced in both CH02 and CH04 before the dedicated CH08; (5) agency evidence for the whole track leans on a single Dentsu Lisbon-market JD plus career listings — role-level, not chapter-specific (register gap line admits this).
- **Resource mapping:** primary TTD Edge Academy (validated in credential doc); secondary row mislabeled "IAB Tech Lab foundational standards" → StackAdapt Programmatic Masterclass URL.
- **Capstone:** no explicit scoring thresholds (unlike T05-CH10).

### T07 — Retail / Commerce Media (DPA-T07-CH01…CH10) — 8 PARTIALLY VALIDATED, 2 NEEDS MAJOR REVISION

- **Intended function:** "Periklanan di dalam ekosistem retailer/marketplace: onsite (sponsored products/search), offsite (display/social/video), in-store, product feed, first-party shopper data, dan closed-loop measurement."
- **Alias list:** Retail Media Executive · Commerce Media Specialist · Retail Search Specialist.
- **Competency IDs:** T07-C01…C05.
- **Indonesia relevance (strength):** CH01 practice anchors to "Shopee, Tokopedia/TikTok Shop, Lazada, atau Blibli"; CH03/CH04 teach eligibility/nomenclature change reading ("Platform Indonesia memiliki nomenclature, eligibility, and reporting yang berubah") — the right market-adaptive pedagogy.
- **Defect 1 (most material in the whole audit):** CH06 and CH07 study-guide content is swapped relative to their titles, verified in the shipped `role-study-guides-part1.js`:
  - `DPA-T07-CH06` — title "Retail Audience, First-Party Data & Targeting" — guide text: "In-store media menghubungkan shopper experience fisik dengan digital commerce melalui screen, audio, shelf signage, kiosk, sampling, QR, and proximity-based placements…"; glossary bound to CH06: In-store media, Proof-of-play, Footfall, Daypart; practice/deliverable (resource-mapping row 108): "in-store plan untuk 20 toko…".
  - `DPA-T07-CH07` — title "Product Feed, Digital Shelf & Retail Readiness" — guide text: "Retail audience and first-party data digunakan untuk membuat segment seperti category buyers, loyalty members, lapsed purchasers, new-to-brand, high-value, and product affinities…"; glossary bound to CH07: Recency, Frequency, Monetary value, Audience overlap; deliverable (row 109): "retail audience taxonomy".
  - Consequences: (a) the product feed / digital shelf / retail-readiness competency is not covered at guide level anywhere in the track; (b) learners following the JS guide get the wrong topic under each title; (c) `index.html` summaries for the same two IDs are title-aligned (CH06 = "Shopper data segment… Audience activation onsite/offsite… Privacy & data sharing", deliverable "Audience activation plan…"; CH07 = "Feed quality… Digital shelf… Retail readiness checklist", deliverable "Feed & digital shelf audit untuk satu produk") — the HTML and JS layers actively contradict each other.
  - In-store media content itself is good (footfall ≠ uniques warning, proof-of-play) — it just lives under the wrong title; there is no in-store-titled chapter, so a swap-back must be paired with authoring the missing feed/digital-shelf guide.
- **Resource mapping:** Walmart Connect Academy + Amazon Ads Academy (US retailers) — correct label-URL pairing, but zero Indonesian marketplace/RMN sources despite Indonesia-first examples; this drives RQ=2 for all 10 chapters.
- **Otherwise:** CH04 onsite chapter is excellent (ROAS/ACoS inverse relation correct, listing-quality-vs-bid diagnosis, SKU-level analysis rationale); CH08/CH09 solid (14-day optimization log SIMULATED, incrementality test design); Q&A answers correct where read.

### T08 — Media Buying, Investment & Publisher Partnerships (DPA-T08-CH01…CH10) — PARTIALLY VALIDATED ×10

- **Intended function:** "Pembelian dan negosiasi media langsung dengan publisher/media owner: rate card, RFP, negosiasi, insertion order, delivery stewardship, billing reconciliation, dan partner relations." Correctly distinct from programmatic (CH01 Q&A differentiates Investment vs Programmatic Trading) — no wrong-track placement found.
- **Alias list:** Media Buyer · Media Investment Executive · Digital Investment Buyer · Digital Trading Specialist.
- **Competency IDs:** T08-C01…C05 (rubrics map CH03 to C03+C05).
- **Quality:** consistently professionally usable: CH02 inventory scorecard (reach definition, unit normalization), CH03 weighted proposal scoring, CH05 BATNA/concession plan, CH06 IO checklist vs signed-IO discrepancy flags, CH07 proof-of-posting vs proof-of-play and tolerance-based shortfall ("Mengapa shortfall tidak boleh langsung diasumsikan berdasarkan impressions? — Contract mungkin memakai billable basis, tolerance…"), CH08 reconciliation workbook with Rp100jt→Rp112jt variance example (good Indonesia anchoring), CH09 quarterly vendor review, CH10 nine-artifact buying pack.
- **Defects:** (1) resource mapping for all 10 rows is "Google Marketing Platform product support (Ad Manager, DV360, CM360) + IAB Tech Lab standards" — ad-tech tooling sources misfit for a direct-buying/negotiation track (DV360 appears, the very platform this track is defined against); no media-owner sales kits, RFP references, or Indonesian publisher landscape sources; (2) no Indonesian media-owner examples anywhere except the Rp invoice figure in CH08; (3) EN code-switching as in T06/T07; (4) agency evidence role-level only for every chapter; (5) capstone lacks explicit scoring thresholds; (6) CH04 benchmarking has no sourced benchmarks — data-dependent spots should be marked to-be-filled.

---

## Systemic patterns (all 42 chapters)

1. **Register↔guide fidelity is high.** Every spot-check (T05 CH01–03, T06 CH01–04, T07 CH06/07, T08 CH01–08) matched verbatim between `169-chapter-evidence-register.md` and the JS guides; index.html summaries are a lighter, separate layer. The one fidelity-relevant failure is the T07 CH06/CH07 swap, which is faithfully *documented* in the register (i.e., the register records the defective state).
2. **Assessment layer is drafted but not closed.** 3 static Q&A per chapter; rubrics draft provides a per-chapter artifact checklist + "score five dimensions 0–3; convert to 100; proposed pass ≥80/100" — but every answer key is "Review status: OPEN", no score engine or passing threshold is verified at chapter level ("3 static Q&A item(s); no score engine or passing threshold verified"), and only T05-CH10 carries an explicit area-level scoring rule. Q&A quality is mostly diagnostic; occasional glossary restatements (T06-CH02 Q1, T08-CH05 Q1).
3. **Resource layer is track-level, not chapter-level.** Register states uniformly: "No chapter-level resource link captured in the HTML chapter block." The mapping doc repeats one resource pair across each track's rows, with two label→URL mismatches (T05 "LinkedIn Marketing Academy"→TikTok Academy URL; T06 "IAB Tech Lab foundational standards"→StackAdapt URL) and one relevance misfit (T08 → Google Marketing Platform). Credential/access validation (`resource-credential-validation.md`) is genuinely careful for the issuers it covers (Meta, TikTok, Google, Amazon, StackAdapt, TTD) but covers none of the Indonesian sources T07/T08 need.
4. **Language drift.** T05 is clean Indonesian; T06/T07/T08 mix full English sentences into Indonesian objectives, workflows, Q&A answers and glossaries (e.g., T06-CH06 workflow "Validasi spec dan macros. Periksa dimensions, VAST/HTML5, SSL…" alternates mid-bullet). Pedagogically usable, but inconsistent with the stated content language and with T05's register.
5. **Competency spine is referenced, never defined.** Chapter→competency-ID mappings exist (including multi-ID chapters), but no document in `_audit/pr5` defines what T05-C01…T08-C07 mean. The crosswalk records "competency architecture documented; agency-level evidence validation remains partial" and "169 chapter register: not complete." Alignment can therefore only be verified structurally (content matches track scope and ID sequence), which I did; a definitions pass is required before competency alignment can be asserted at 4.
6. **Boilerplate templating in the register.** Per-track identical agency-evidence lines ("role-level only, not chapter-specific"), identical Tools/Rubric/Gap lines across all 42 chapters. Practice prompts themselves are chapter-specific and non-duplicative — the templating is register boilerplate, not content duplication. Minor content duplication: T06 PMP/PG across CH02/CH04/CH08; T05 tracking vs paid-search track.
7. **Agency evidence granularity.** All 42 chapters share role-level evidence; none has chapter-specific JD mapping. T06 evidence rests on a Lisbon-market JD; T05's direct paid-social JD is flagged "Geography/seniority must be confirmed."

## Top defects (priority order)

1. **T07-CH06/CH07 guide-content swap (NEEDS MAJOR REVISION ×2).** Evidence quotes above; verified in `role-study-guides-part1.js` lines 300–311 and resource-mapping rows 108–109. Product feed/digital shelf is taught nowhere at guide level.
2. **Assessment closure gap (all 42).** Answer keys OPEN, chapter rubric thresholds not authored, no score engine; T06-CH02-style definitional Q&A slips. Evidence: rubrics draft "Review status: OPEN"; register "no score engine or passing threshold verified."
3. **Resource mapping defects (all 42, worst in T08).** T08 → GMP ad-tech support for a direct-buying track; T07 → US RMN academies with zero Indonesian marketplace sources; T05/T06 mislabeled secondary URLs.
4. **Competency IDs without definitions (all 42).** Alignment asserted only structurally; crosswalk itself notes evidence validation partial.
5. **Language inconsistency (T06/T07/T08, 32 chapters).** English code-switching inside Indonesian content; T05 shows the register the other tracks should meet.

## Recommended remediation sequence

1. Swap T07-CH06/CH07 guide blocks; author the missing feed/digital-shelf guide; re-align practice/Q&A/glossary/register/mapping rows; re-render index.
2. Run the flagged "separate content/answer-key pass" for the 10 T05 legacy guides and SME-approve all 126 Q&A keys (42 chapters × 3); author chapter-level rubric thresholds (reuse T05-CH10's rule).
3. Rebuild the resource mapping per chapter: Indonesian RMN/marketplace sources for T07, media-owner/RFP/IO references for T08, fix T05/T06 label-URL pairs; keep credential-validation distinctions.
4. Author written competency definitions for T05-C01…T08-C07 and re-verify chapter mappings.
5. Harmonize T06/T07/T08 language to the T05 Indonesian register.
