# Findings — DPA Tracks T01–T04 (40 chapters)

**Auditor:** Independent curriculum auditor (instructional design + performance marketing SME)
**Date:** 4 November 2026
**Scope:** DPA-T01-CH01…CH10 (fullstack), DPA-T02-CH01…CH10 (connection), DPA-T03-CH01…CH10 (media), DPA-T04-CH01…CH10 (paidsearch). Content language: Indonesian.
**Sources:** `_audit/pr5/docs/169-chapter-evidence-register.md` (primary; all 40 blocks read in full), spot-checks against `fullstack-guides.js` (T01-CH01/CH08), `role-study-guides-part1.js` (T02-CH01, T02-CH10, T03-CH06, T04-CH01, T04-CH08), chapter blocks in `_audit/pr5/index.html` (T02-CH01…CH04), `_audit/pr5/docs/169-chapter-resource-mapping.md` rows 41–80, `_audit/pr5/docs/169-chapter-technical-review-matrix.md` rows 20–59, `_audit/pr5/docs/169-chapter-assessment-rubrics-draft.md` (T04-CH01/CH02), and the runtime render pipeline in `index.html` (buildGuide/appendChapterStudy, lines ~4820–4930).

**Verification basis.** Register-to-guide fidelity confirmed verbatim for 6 spot-checked chapters across all four tracks (concept, example, steps, practice, Q&A, glossary all match 1:1). Technical accuracy below is my SME judgment against industry-standard practice, made against the snapshot only — no live platform documentation was consulted, and the register itself states named tools "must be verified against the specific platform version and current access." All answer keys in the curriculum are explicitly marked unapproved ("Review status: OPEN") in the rubric draft.

---

## 1. Status summary

| Status | Count | Chapters |
|---|---|---|
| VALIDATED | 10 | all DPA-T04 (CH01–CH10) |
| PARTIALLY VALIDATED | 30 | all DPA-T01, DPA-T02, DPA-T03 (CH01–CH10 each) |
| NEEDS MAJOR REVISION | 0 | — |
| VALIDATED WITH MINOR IMPROVEMENTS | 0 | — |
| NOT VERIFIED | 0 | — |
| MISSING | 0 | — |

Coverage: 40/40 chapters scored. The single recurring driver of PARTIALLY VALIDATED is **Resource/evidence quality = 2**: no chapter carries a chapter-level resource link (register: "No chapter-level resource link captured in the HTML chapter block"), and the mapping rows that substitute for them are generic (T01), role-wrong (T02), or label/URL-mismatched (T03). No chapter scored ≤1 on any dimension; no content is missing, title-level, or misplaced onto the wrong track.

---

## 2. Per-track findings

### 2.1 T01 — Full-Stack Digital Marketing & Performance (`fullstack`)

**Intended function.** Integration spine of the curriculum: business economics → consumer/positioning → funnel/KPI → channel planning → paid/organic/tracking/CRO/CRM fundamentals → capstone. The guide objects deliberately define the role as an integrator, and this is done *correctly* per the curriculum-defined semantics: T01-CH10 states "Full-stack bukan berarti menguasai setiap platform sedalam operator, tetapi memahami trade-off, memimpin specialist, dan menjaga sistem keputusan koheren," and T01-CH05's third Q&A assigns the full-stack planner the decision framework, brief, budget guardrail, and evaluation — "bukan mengambil alih keputusan teknis tanpa konteks." The chapters never conflate the role with Performance Marketing Specialist execution depth.

**Boundary vs adjacent tracks.** Correct in intent but under-signposted. T01-CH04 (Integrated Channel & Media Planning), T02-CH06 (POES Channel Roles), and T03-CH04 (Media Objective, KPI & Channel Roles) all teach channel-role assignment; T01-CH05 overlaps T04-CH01 (auction/intent fundamentals) and T03-CH03 (inventory evaluation). The differentiation (integration overview vs communication planning vs media-planner execution vs specialist depth) exists in emphasis but is never stated inside the chapters, so learners see near-duplicate POES material in three tracks.

**Alias list (agency evidence, role-level).** "Performance Marketing" (A/D, "title and JD scope vary by market"), "Digital Manager cross-channel performance media" (A), "Performance Manager, integrated investment and performance roles" (D/B), "integrated digital/media planning and performance role evidence" (B), "SEA/Performance Marketing roles in career index" (D). The register honestly notes all five are role-level and none is a direct "Digital Performance Architect" JD — the architect title is curriculum-defined, and the evidence layer does not pretend otherwise.

**Missing competencies.** Nothing material for the integration role. Minor: T01-CH06 (Organic Search, Content & Community) is the thinnest chapter (instructional substance 3) — appropriate for overview depth, but its technical-audit step ("crawlability, indexability, canonical…") expects evidence work without a named tool or resource.

**Misplaced scope.** None. Search/social/programmatic are correctly kept as distinct mechanisms in CH05; SEO/content/community in CH06 are awareness-level and explicitly hedge GEO/AEO ("masih berkembang; jangan menganggap trik khusus sebagai jaminan citation/ranking") — good compliance hygiene.

**Duplication.** The identical gap/rubric/resource/tools boilerplate across all 10 chapters (see §3). The "CPM murah belum tentu bernilai" concept appears in T01-CH05 Q2, T02-CH06 Q1, and T03-CH03 Q1 with different wording — acceptable reinforcement, but the POES/chapter-role trio above is true structural overlap.

**Evidence quotes.** Register T01-CH01: "Bila paid CAC Rp65.000, kontribusi tersisa Rp15.000 sebelum fixed overhead" (arithmetic checks out). T01-CH01 Q2 correctly separates CAC vs CPA ("CPA purchase tidak otomatis sama dengan fully-loaded CAC"). T01-CH08 keeps experiment discipline ("Jangan mengklaim significance tanpa perhitungan benar").

### 2.2 T02 — Connection / Communications Planner (`connection`)

**Intended function.** Communication strategy track: business-vs-communication problem → audience → cultural insight → positioning/proposition → journey/moments → POES channel roles → message architecture → creative brief/handoff → effectiveness/learning agenda → capstone. Instructionally the strongest conceptual sequence of the four tracks; chapters consistently enforce the role's own semantics, e.g., T02-CH01: "Penjualan turun bisa terjadi karena harga, distribusi, stok, produk, atau pengalaman; tidak semuanya dapat diselesaikan oleh komunikasi."

**Boundary vs adjacent tracks.** Well drawn *inside* the content: T02-CH08's Q&A separates creative brief from media brief ("Creative brief mengarahkan ide/pesan/pengalaman; media brief mengarahkan target, channel, inventory, budget, timing, dan delivery"), and T02-CH05 separates touchpoint from channel. **But the resource layer violates the boundary the content teaches**: all ten mapping rows send learners to "Meta Blueprint agency role catalog (**Media Planner**)" — a media-planning role catalog for a communications-planning track. This is the clearest role-alias defect in scope.

**Alias list (role-level).** "Executive Connection Planning Jakarta JD" (A), "planning capability and role evidence; dedicated direct JD still needed" (B/D), "Planning role/title evidence; direct connection-planning JD not yet verified" (D), "integrated planning/media planner roles" (B), "Connections Planning category and Media Planner career listings" (D). The register is candid that no dedicated connection-planning JD is verified — which also means the B/D alias lines that lean on "media planner" listings are weak evidence for this specific role.

**Missing competencies.** (1) Budget/phasing/seasonality for connection plans: the A-level JD evidence explicitly cites "budget/phasing and brand/performance KPIs," but no T02 chapter treats phasing — only the capstone row mentions "budget implication." (2) Indonesia-relevant cultural/audience data sources: CH02–CH03 teach triangulation without naming any syndicated or panel source usable in Indonesia.

**Misplaced scope.** None at chapter level. The wrongness sits in the resource mapping, not the chapters.

**Duplication.** POES overlap with T01-CH04/T03-CH04 (see §2.1). Effectiveness chapter (CH09, the track's strongest — output/outtake/outcome, attribution vs incrementality) uses concepts T03-CH09 also teaches from the delivery side; the two are complementary but never cross-referenced.

**Additional structural defect (verified in code).** `index.html` line 4780 embeds an inline `var CONNECTION_GUIDES=[…]` containing an **older, divergent version of the entire T02 curriculum** (3-step workflows; CH01 practice "Tulis ulang brief menjadi satu business problem…" vs the registry's richer two-page brief diagnosis). It is loaded but **never referenced by the render pipeline** (`buildGuide` reads `DPA_GUIDE_BY_CHAPTER` only) — dead code holding a stale source of truth. If it is ever re-wired, learners would silently get the older track.

**Evidence quotes.** T02-CH09: "Attribution platform tidak otomatis membuktikan causal impact"; CH09 Q2: "incrementality mengestimasi tambahan outcome yang disebabkan aktivitas dibanding kondisi counterfactual" — professionally accurate.

### 2.3 T03 — Media Planner / Digital Planner & Strategist (`media`)

**Intended function.** Media planning craft: brief intake → audience/consumption → inventory evaluation → objective/KPI → mix/budget → reach-frequency-cost math → flowchart/flighting → buying brief/handoff → post-buy analysis → capstone. The most executionally coherent track; every chapter produces a planner-grade artifact (assumption log, inventory evaluation sheet, KPI dictionary, flowchart, buying brief, post-buy report).

**Boundary vs adjacent tracks.** Explicitly enforced where it matters most: T03-CH08 Q&A separates planner from buyer ("Planner merancang channel/budget/forecast dan rationale; buyer melakukan negotiation, booking, buying terms, serta stewardship") — correct: planning ≠ investment/buying. Buying/investment depth is correctly left to the investment track (out of scope here). The overlap with T01-CH04/T02-CH06 on channel roles is the same trio noted above. T03-CH08 also correctly straddles the activation handoff without drifting into Ad Ops territory.

**Alias list (role-level).** "media planning listings" (D/A), "media planner/programmatic role evidence" (A/B), "Senior Associate Planning JD" (A), "Jakarta Media Planner JD" (A), "Media Planner career listings and older JD" (D/A). These are the most direct title matches of the four tracks.

**Missing competencies.** (1) Indonesia media data: CH02 teaches universe/duplication discipline ("platform audience estimate sama dengan unique people" — correctly rejected) but names no accessible Indonesian syndicated/panel sources; the Rp/Jakarta framing is otherwise the curriculum's best local grounding. (2) Digital reach/frequency dedup across walled gardens remains conceptual (acceptable — no cross-platform panel exists without naming a vendor).

**Misplaced scope.** None. T03-CH06's "Bandingkan lintas media" step stays at methodology-caveat level instead of faking TV/OOH data — appropriate.

**Duplication.** Forecast-uncertainty framing repeats in T01-CH04 Q2, T03-CH05 Q3, T03-CH10 Q2 (consistent, mutually reinforcing). "Cheapest CPM" warning as noted above.

**Technical accuracy notes.** CH06's guide glossary is sound ("GRP/TRP: Gross/Target Rating Points…", "CPP: Cost per rating point"). One answer-key imprecision: Q2's expected answer says GRP "mengukur total rating points berdasarkan **target** universe" — the GRP/TRP convention distinguishes them precisely by universe basis (GRP = total universe, TRP = target); the chapter's own glossary keeps them distinct, so the answer key contradicts its glossary. Arithmetic elsewhere checks out (10M impressions / 2M universe = frequency 5; CH09's "impressions 8% di bawah plan namun CPM 12% lebih rendah" diagnosis is plausible).

**Evidence quotes.** CH05: "Average menilai hasil keseluruhan; marginal mengukur hasil tambahan dari satu unit budget berikutnya dan lebih relevan untuk scaling"; CH03: "Menyamakan scope, format, audience, dates, impressions/reach, fee, measurement, dan delivery terms sebelum membandingkan harga."

### 2.4 T04 — Paid Search / SEM Specialist (`paidsearch`)

**Intended function.** Search-only specialist craft: auction fundamentals → keyword research → architecture → match types/negatives → RSA/assets/LP → bidding/budget → conversion tracking (incl. enhanced/offline) → QS/IS diagnosis → testing → capstone. The strongest track on all dimensions, and the only one whose resource mapping is both official and localized (Google Ads Skillshop links use `hl=id`).

**Boundary vs adjacent tracks.** Correctly and *exclusively* search: no Display/YouTube/Shopping/PMax/DV360/SA360 chapters are claimed, and the auction framing is search-specific. The role-evidence layer handles the alias risk well: the register takes the Dentsu "Digital Consultant - Biddable Specialist" JD and explicitly annotates it "Cross-channel biddable role; **not a pure SEM specialist JD**." One boundary gap remains *inside* CH06: its title promises "Campaign Types," but the workflow/practice cover bidding and budget almost exclusively, and nowhere does the track state that Display/YouTube/Shopping/PMax are deliberately out of scope and covered by other tracks — leaving the PMax-vs-search question (a real specialist decision in 2026) unaddressed.

**Alias list (role-level).** "Paid Search Executive/Manager career listings" (D), "cross-channel digital roles; direct SEM JD still needed" (B/D), "SEM Specialist and Paid Search role listings" (D), "Digital Consultant - Biddable Specialist, Dentsu…" (B, annotated as cross-channel), "SEA Executive career listing" (D).

**Missing competencies.** (1) Microsoft/Bing Ads appears only in the JD evidence line, never in content — acceptable for an Indonesia-skewed market but should be named as a scope choice. (2) Search-ads implications of AI-generated SERPs/AEO (T01-CH06 already hedges GEO/AEO; T04 never connects it to query volume/mix). (3) The search-terms report privacy threshold (limited view above a threshold) — a practical constraint specialists hit, absent from CH04/CH08.

**Misplaced scope.** None.

**Duplication.** T04-CH09 and T01-CH08 share the experimentation criteria (hypothesis, stopping rule, inconclusive ≠ identical). Wording differs and both are correct, but there is no cross-link; if one is later revised, divergence risk is real.

**Technical accuracy notes.** All spot-checked claims are current and correct: match types are framed as non-literal with close variants and routed to "dokumentasi terkini" (CH04); smart bidding correctly conditioned on healthy conversion signals (CH06: "Algoritma mengoptimalkan signal yang diberikan; event salah/duplikat membuat learning dan budget allocation ikut salah"); QS correctly positioned as "diagnostic indicator, bukan KPI bisnis"; lost IS budget vs rank correctly separated (CH08). Enhanced/offline conversion coverage (CH07) is advanced and correct, including dedup and consent governance.

**Evidence quotes.** CH01: "Keyword adalah target/setting yang dipilih advertiser; search term adalah query aktual yang memicu iklan"; CH08: "Lost IS (budget): Porsi eligible impressions hilang akibat keterbatasan budget."

---

## 3. Systemic patterns

1. **Boilerplate paralysis in the register's evidence layer (40/40 chapters).** Every chapter carries the byte-identical strings: "**Tools / method / workflow:** derive from the technical-depth steps above…", "**Resources:** No chapter-level resource link captured in the HTML chapter block…", "**Rubric / passing criteria:** NOT DEFINED at chapter level…", "**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness… Agency evidence is currently role-level only, not chapter-specific." The curriculum authoring is strong; the validation layer around it is frozen at zero.
2. **Assessment exists as draft-only.** All 3×40 Q&A pairs are present with substantive answers, but every rubric-draft entry says "Review status: OPEN — subject-matter reviewer must validate…" and the register states "The code has no verified scored quiz engine." Q&A quality is genuinely good (answers add mechanism, not bullet-restating), yet nothing is approved, no pass threshold is verified, and rubric calibration is open.
3. **Resource mapping is the weakest layer, with three distinct defect modes by track.** T01: one generic catalog pair repeated 10× (rows 41–50) with weak chapter fit. T02: role-wrong mapping — "Meta Blueprint agency role catalog (Media Planner)" (rows 51–60). T03: label/URL swaps — rows 61–70 label the secondary resource "Google Skillshop" but the URL is `https://edgeacademy.thetradedesk.com/programmatic-101`, while the primary label names both Meta and Trade Desk but links only to the Meta catalog. T04: correct and localized (`support.google.com/google-ads/answer/7539883?hl=id` + `skillshop.withgoogle.com`) but identical for all 10 chapters.
4. **Two-layer content architecture with a stale duplicate.** Static `index.html` chapter blocks are thin skeletons (3 bullets + 1 simplified deliverable); the rich guide content is injected at runtime via `chapter-guide-map.js` → `DPA_GUIDE_BY_CHAPTER` (verified in `buildGuide`/`appendChapterStudy`). This works — but `index.html` also embeds the unused, older `CONNECTION_GUIDES` array (line 4780) that diverges from the registry version of the whole T02 track.
5. **Register extraction gap for T02–T04.** The register blocks for tracks T02–T04 omit the **Glossary** line entirely even though the guide objects carry 4–5 glossary terms each (verified: T02-CH01 glossary at part1.js:15; T03-CH06 at :107; T04-CH01 at :139; T04-CH08 at :181). T01 blocks include glossary. This mirrors the previously corrected T16-CH12 "undefined" extraction defect documented in `docs/T16-CH12-register-correction-and-rubric-supplement.md` — same class of register-generation bug, different field.
6. **Templated practice→mapping duplication is consistent, not contradictory.** The practice/deliverable text in resource-mapping rows matches the register/guide verbatim for every checked chapter — the mapping doc adds no drift, only the generic resources.
7. **Indonesia relevance is uneven.** T04 has localized resources and Indonesian query examples ("asuransi mobil", "contoh slip gaji"); T01 uses Rp economics; T02/T03 use Rp and Jakarta JDs but name no local data/measurement source — the biggest local-relevance gap is in the two tracks that need market data most (audience and media planning).

---

## 4. Top defects (ranked, with chapter IDs and evidence)

1. **T03-CH01…CH10 — resource label/URL mismatch (all 10 rows).** Row 61: "[Google Skillshop](https://edgeacademy.thetradedesk.com/programmatic-101)" — label and URL point to different products; the Trade Desk link is only correct for the programmatic slice of the media landscape, and no row links actual Google Skillshop content.
2. **T02-CH01…CH10 — wrong role catalog (all 10 rows).** "Meta Blueprint agency role catalog (**Media Planner**)" for a Connection/Communications Planning track — the exact alias error the role semantics forbid; the track's own CH08 Q&A ("Creative brief mengarahkan ide/pesan/pengalaman; media brief mengarahkan target, channel, inventory…") draws the boundary the resource row then erases.
3. **All 40 chapters — assessment unapproved and unenforced.** Rubric draft, DPA-T04-CH01 entry: "**Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources"; register: "no score engine or passing threshold verified." Content can be trusted as professionally written, but no chapter is currently certifiable.
4. **T01-CH01…CH10 — generic, chapter-agnostic resources (rows 41–50).** One identical "Google Skillshop (Google Ads, Google Analytics, Google Marketing Platform) / Meta Blueprint + HubSpot Academy" pair for business economics, consumer research, CRM, and CRO alike; e.g., CH02's research-methods practice has no research-methods resource.
5. **T01-CH04 / T02-CH06 / T03-CH04 — unmarked three-way channel-role overlap.** The same POES/channel-role assignment is taught in three tracks without a boundary statement; the curriculum's own role semantics (integration vs communication vs media planning) provide the differentiation, but the learner never sees it.
6. **T03-CH06 — GRP/TRP answer-key imprecision.** "Gross Rating Points mengukur total rating points berdasarkan **target** universe" conflicts with the glossary's own GRP/TRP split (gross = total universe basis; target = TRP).
7. **T04-CH06 — title wider than content.** "Campaign Types, Bidding Strategy & Budget Management" delivers bidding/budget rigor but almost no campaign-type coverage, and no explicit scope statement separating search from Display/YouTube/Shopping/PMax.
8. **index.html line 4780 — stale embedded T02 curriculum.** `CONNECTION_GUIDES` is defined and never rendered; its CH01 workflow (3 steps, thin practice) diverges from the registry's 4-step, two-page-diagnosis version. Dead code today, silent regression risk tomorrow.
9. **Register glossary extraction gap (T02–T04, 30 chapters).** Guide glossaries exist and are accurate; the register's extraction for these tracks drops the field — fix the register generator, not the guides.

---

## 5. Recommended remediation (priorities)

1. **P0 — Fix the three resource-mapping defect modes** (T03 label/URL swap; T02 role catalog; T01 genericness): one row per chapter, labeled correctly, role-fitting, with Indonesia access/price check (already an open item in the technical review matrix).
2. **P0 — Run the SME answer-key pass** the rubric register already anticipates: approve/correct 120 Q&A answers (40 chapters × 3), starting with the flagged short-answer chapters (T03-CH04, T03-CH06, T03-CH09, T04-CH02/03/04/06/07) and the T03-CH06 GRP correction.
3. **P1 — Author chapter-level rubrics and pass thresholds** (the shared 0–3 framework exists; observable per-chapter criteria exist only as practice prompts) and wire a scored engine, or state plainly that certification is pending.
4. **P1 — Add boundary statements** to T01-CH04, T02-CH06, T03-CH04 (one sentence each) and a scope note in T04-CH06 ("search-only; Display/YouTube/Shopping/PMax covered in their own tracks"), plus light campaign-type coverage to match the title.
5. **P2 — Delete or re-wire `CONNECTION_GUIDES`** in index.html and regenerate the register so T02–T04 glossary fields are extracted.
6. **P2 — Indonesia data layer:** name at least one accessible syndicated/panel or first-party source per T02-CH02/T03-CH02, or explicitly mark the local-data gap as a known limitation in the chapter.
