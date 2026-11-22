# Elective 17 — CRO / Growth / Experience Optimization: Chapter-Level Desk Audit

**Date:** 5 November 2026 · **Scope:** 17.01–17.14 only · **Disposition:** 14/14 PARTIAL, formal acceptance OPEN.

The current draft averages **289 words per chapter** (4,049 across 14 chapters; range 244–369). The current blocks form a thin first-pass module skeleton, not yet a comprehensive advanced lesson. Each chapter requires worked methods, examples, edge cases and reproducible artefacts.

## 17.01 — Growth Economics & Conversion Strategy

**Draft length:** 354 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Belum ada model konsisten untuk contribution after acquisition, batas CAC, cohort LTV, retention, payback dan sensitivity.

**Source limitation:** Referensi internal finance disebutkan tetapi tidak dilampirkan. CVP/break-even umum hanya mendukung konsep dasar, bukan metode digital CAC/LTV.

**Required remediation:** Tambahkan workbook unit economics dengan definisi biaya, contribution after media, cohort, repeat, LTV, payback dan asumsi yang disetujui finance.

## 17.02 — Customer Research & Insight

**Draft length:** 325 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Sampling frame, recruitment, sample strategy, instrumen interview/survey, coding, bias/validity dan mixed-method inference belum diajarkan secara operasional.

**Source limitation:** Appendix tidak memetakan sumber metode riset khusus untuk bab ini; WCAG bukan materi metode riset.

**Required remediation:** Tambahkan method-selection matrix, participant screening, consent/notice, interview/survey instrument, coding sample, contradictory evidence dan kasus Indonesia.

## 17.03 — Digital Analytics Architecture

**Draft length:** 310 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Belum ada event schema, entity relationship, implementation contract, identity/deduplication, versioning, server-side/offline flow atau test payload.

**Source limitation:** Google Analytics dan GTM mendukung implementasi Google, bukan arsitektur lintas platform atau izin pengumpulan data.

**Required remediation:** Tambahkan event dictionary, JSON payload, source-of-truth diagram, consent-state matrix, CRM/offline ingestion dan payload QA.

## 17.04 — Behavioural & Funnel Analytics

**Draft length:** 294 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Grain, cohort eligibility, sequence validation, denominator reconciliation, selection bias, sample size, confidence dan opportunity sizing belum ditunjukkan.

**Source limitation:** GA4/GoogleSQL adalah dokumentasi produk/sintaks, bukan metodologi analisis funnel lengkap.

**Required remediation:** Tambahkan dataset synthetic dengan tracking defects, event dedup, step vs end-to-end conversion, segment caveats, SQL dan reference solution.

## 17.05 — UX & Digital Experience Optimization

**Draft length:** 284 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Tidak ada usability protocol berbasis task, severity rubric, accessibility test matrix, evidence log dan post-change measurement plan.

**Source limitation:** WCAG 2.2 adalah standar aksesibilitas; Clarity adalah tool vendor. Keduanya bukan metode UX/CRO lengkap.

**Required remediation:** Tambahkan task scenarios, participant criteria, keyboard/screen-reader/error tests, privacy masking/retention, severity anchors dan verification metric.

## 17.06 — Hypothesis & Opportunity Prioritization

**Draft length:** 267 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Scoring anchors, opportunity sizing, evidence confidence, portfolio constraints dan sensitivity analysis belum dikalibrasi.

**Source limitation:** Finance inputs disebutkan, tetapi tidak ada worked prioritization case atau metode netral yang dipetakan.

**Required remediation:** Tambahkan impact/evidence/effort anchors, contribution-value range, dependencies, risk, capacity constraint dan ranking sensitivity.

## 17.07 — Experimentation Design

**Draft length:** 275 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Design pilihan user/session/cluster/geo, contamination, allocation, SRM, pre-registration dan power calculation belum dipraktikkan.

**Source limitation:** Optimizely bersifat vendor-specific; panduan platform tidak memvalidasi desain atau sample size secara independen.

**Required remediation:** Tambahkan template estimand, eligibility, randomization, exposure, allocation, MDE, alpha, power, duration, SRM, guardrail, stop dan rollback.

## 17.08 — Advanced Statistics for Experimentation

**Draft length:** 277 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Tidak ada derivasi/tes formula, numerical power example, interval interpretation, clustering/ratio metrics atau batas sequential design.

**Source limitation:** Optimizely adalah vendor-specific; GA/GoogleSQL bukan sumber metode statistik. Referensi statistik netral dan calculator teruji belum ada.

**Required remediation:** Tambahkan contoh binary conversion dengan baseline, absolute/relative MDE, alpha, power, sample size, CI, multiplicity dan inconclusive decision.

## 17.09 — Experimentation Technology & Technical QA

**Draft length:** 244 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Test matrix, SRM response, caching/cross-domain, consent QA, severity dan exit criteria belum lengkap.

**Source limitation:** GTM/Optimizely memberi implementasi vendor, bukan quality standard produksi netral.

**Required remediation:** Tambahkan assignment persistence, target exclusions, SRM, event integrity, performance, accessibility, consent, staged rollout dan rollback rehearsal.

## 17.10 — Causal Measurement & Incrementality

**Draft length:** 265 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Estimand, counterfactual assumptions, selection, spillover, pre-trend diagnostics, uncertainty dan design selection belum didalami.

**Source limitation:** GA adalah atribusi produk. Meridian membantu modelling tetapi vendor-specific; estimand experiment dan MMM dapat berbeda.

**Required remediation:** Tambahkan causal-design matrix, DID diagnostics, geo-test power/spillover, counterfactual diagram, sensitivity dan estimand reconciliation.

## 17.11 — Personalization & Journey Orchestration

**Draft length:** 257 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Data model, fairness/proxy review, purpose limitation, preference synchronization dan lifecycle measurement belum dirinci.

**Source limitation:** Appendix hanya menunjuk CRM/CDP vendor dan kebijakan internal; tidak ada sumber metode/data governance lengkap.

**Required remediation:** Tambahkan data dictionary, freshness SLA, legal-purpose record, sensitive-data exclusion, fairness, preference, suppression, fallback dan incremental evaluation.

## 17.12 — Experimentation Programme Management

**Draft length:** 265 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Operating cadence, RACI, decision rights, portfolio capacity, risk tier, KPI program dan knowledge reuse belum didefinisikan.

**Source limitation:** Optimizely analysis adalah dokumentasi produk, bukan operating-model standard.

**Required remediation:** Tambahkan intake SLA, triage, review board, decision log, capacity rules, quality KPI, experiment registry dan learning repository.

## 17.13 — Commercial Impact & Executive Advisory

**Draft length:** 263 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Belum ada bridge dari experiment effect ke net incremental contribution yang mencakup eligible population, adoption, persistence, margin, cost dan cannibalization.

**Source limitation:** Internal finance-approved inputs menjadi satu-satunya sumber yang eksplisit; reference case dan finance sign-off tidak tersedia.

**Required remediation:** Tambahkan impact model low/base/high dengan implementation cost, contribution, adoption/persistence dan post-rollout validation.

## 17.14 — Senior CRO Capstone

**Draft length:** 369 words. **Desk classification:** PARTIAL. **Depth:** THIN_FIRST_PASS_DRAFT.

**Material gap:** Tidak ada integrated dataset, benchmark solution, intermediate artifact yang dapat direproduksi, atau grading pack terkalibrasi.

**Source limitation:** Source groups ada, tetapi belum menjadi capstone end-to-end; internal finance dan SME case masih dibutuhkan.

**Required remediation:** Bangun synthetic case lengkap (data, riset, UX, experiment, causal, economics, CRM/privacy) dengan reference output dan assessor pack.

## Technical cross-checks

- Google states organisations are responsible for obtaining consent and communicating consent state; Consent Mode does not collect consent: [Google Consent Mode overview](https://developers.google.com/tag-platform/security/concepts/consent-mode).
- Meridian states experiment and MMM estimands may differ and translation introduces extra uncertainty: [ROI priors and calibration](https://developers.google.com/meridian/docs/advanced-modeling/roi-priors-and-calibration).
- WCAG 2.2 requires keyboard operability and text identification of detected input errors: [WCAG 2.2](https://www.w3.org/TR/wcag/) and [Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification).

## Knowledge-check work

All 28 E17 answer-guidance entries were expanded to 32–47 words, with prior text preserved in the Q&A CSV. They remain reflective/non-scored; source, editorial and SME checks remain OPEN.

**Release state: NOT READY.** No SME, source-fit, local access, legal, workload or learner-pilot acceptance is inferred.
