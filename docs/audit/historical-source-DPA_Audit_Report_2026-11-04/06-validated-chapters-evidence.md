# Evidence Package - Chapters classified VALIDATED / VALIDATED WITH MINOR IMPROVEMENTS (agent desk-review)

**Date:** 5 November 2026 (evidence extracted from the 4 Nov 2026 audit snapshot of PR #5)  
**Scope:** all 32 chapters carrying desk-review status VALIDATED (10: DPA-T04-CH01..CH10) or VALIDATED WITH MINOR IMPROVEMENTS (22: DPA-T05-CH01..CH10, DPA-T06-CH01..CH12).

> **READ THIS FIRST - what these statuses mean.** They are **agent desk-review** outcomes: an independent auditor agent read the chapter's extracted content (evidence register), spot-checked guide source files, and scored seven dimensions 0-4. This is **NOT SME approval, NOT answer-key validation, NOT certification**. The repository's own technical review matrix marks SME/technical review, answer-key correctness, rubric calibration and resource fit OPEN for all 169 chapters, and every answer key in the rubric draft is 'Review status: OPEN'. This package does not change that.

**Evidence hierarchy per chapter:** (1) the full evidence-register block below (verbatim) = the chapter's teaching content: objective/concept, simulated example, workflow, practice/deliverable, 3 Q&A with expected answers, glossary, resource/rubric/gap lines; (2) verbatim guide-source spot-check records where JS was compared to the register; (3) per-dimension desk-review scores; (4) known caveats (resource-row defects; OPEN keys).

## Track-level resource-row status (verified)
- **T04:** Resource mapping rows: correct AND localized (support.google.com/google-ads/answer/7539883?hl=id + skillshop.withgoogle.com) - identical pair for all 10 chapters; no chapter-specific variety.
- **T05:** Resource mapping rows: primary label 'Meta Blueprint + TikTok Academy' -> facebookblueprint.com catalog (label/URL correct); secondary label 'LinkedIn Marketing Academy' -> https://ads.tiktok.com/business/id/academy (MISLABELED: URL is TikTok Academy, Indonesia locale; HTTP 200, live and official - verified 5 Nov). Track-level pair reused for all 10 chapters.
- **T06:** Resource mapping rows: primary TTD Edge Academy (live, verified 4 Nov); secondary label 'IAB Tech Lab foundational standards' -> StackAdapt Programmatic Masterclass URL (MISLABELED; StackAdapt live, verified 4 Nov). Track-level pair reused for all 12 chapters.

## Per-chapter evidence

### DPA-T04-CH01 - Search Advertising Ecosystem & Auction Fundamentals

- Track: paidsearch
- Desk-review dimensions (0-4): Instructional substance=4, Competency alignment=3, Technical accuracy=4, Practical exercise=4, Deliverable=4, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.6 - Status: **VALIDATED** (agent desk-review, not SME approval)
- Guide-source verification: Verbatim spot-check vs fullstack-guides.js (Auditor A): concept, example, steps, practice, Q&A, glossary match 1:1.
- Auditor-flagged defects: Ad Rank/eligibility/conversion-definition answers accurate; keyword-vs-search-term distinction correct; agency evidence is cross-channel Biddable JD (register explicitly flags not pure SEM); answer keys OPEN (rubric draft)
- Recommended remediation: SME-approve the 3 answer keys; attach a pure-SEM JD to close the evidence gap; keep hl=id localized resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T04-CH01 — Search Advertising Ecosystem & Auction Fundamentals

**Competency ID(s):** T04-C01

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Paid Search menangkap intent yang diekspresikan melalui query. Specialist harus memahami auction eligibility, Ad Rank, keyword/query, ad relevance, landing experience, conversion signal, bidding, dan budget. Search term bukan keyword target; platform dapat mencocokkan query melalui variasi. Performance dinilai dari kualitas demand dan kontribusi bisnis, bukan hanya klik atau impression.

**Simulated example:** SIMULATED — keyword broad 'asuransi mobil' menghasilkan 2.000 klik, tetapi banyak search term mencari pekerjaan dan definisi. Negative keyword dan landing page intent match memperbaiki kualitas traffic meski volume klik turun.

**Technical depth / workflow:**
- Pahami auction. Pelajari eligibility, Ad Rank, bid, quality/relevance signals, budget, dan auction insights.
- Audit search intent. Kelompokkan query informational, commercial, transactional, branded, competitor, dan local.
- Definisikan conversion. Bedakan primary conversion, micro-conversion, value, attribution window, dan offline outcome.
- Hubungkan intent ke landing page. Pastikan ad promise dan page content menjawab query yang sama.

**Practice / deliverable:** Buat search ecosystem map untuk satu kategori: query types, auction factors, account actors, conversion actions, landing-page match, dan KPI chain. Gunakan sample query nyata atau label SIMULATED.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa search bukan sekadar bidding keyword?
   **Expected answer in guide:** Auction, query intent, relevance, landing experience, conversion signal, budget, dan competition bersama-sama menentukan delivery serta outcome.
2. **Q:** Apa perbedaan keyword dengan search term?
   **Expected answer in guide:** Keyword adalah target/setting yang dipilih advertiser; search term adalah query aktual yang memicu iklan.
3. **Q:** Mengapa conversion harus didefinisikan sebelum campaign?
   **Expected answer in guide:** Bidding dan reporting belajar dari conversion signal; event yang salah mengarahkan algoritma serta keputusan budget ke outcome yang keliru.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T04-CH02 - Search Intent, Keyword Research & Competitor Analysis

- Track: paidsearch
- Desk-review dimensions (0-4): Instructional substance=4, Competency alignment=3, Technical accuracy=3, Practical exercise=4, Deliverable=4, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.4 - Status: **VALIDATED** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Volume-vs-intent economics and competitor-analysis limits stated correctly (no bid/CPA inference); 1 short-answer flag; resource row identical for all 10 chapters (official Google Ads, hl=id, but not chapter-specific); answer keys OPEN
- Recommended remediation: Expand flagged answer with acceptable alternatives; differentiate resource rows per chapter; approve keys

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T04-CH02 — Search Intent, Keyword Research & Competitor Analysis

**Competency ID(s):** T04-C02

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Keyword research menyusun peluang query berdasarkan intent, relevance, volume, competition, value, geography, seasonality, dan landing-page readiness. Search volume tidak sama dengan demand yang dapat dikonversi; keyword populer bisa tidak relevan, terlalu luas, atau punya economics buruk. Competitor ad research membantu melihat positioning dan SERP, tetapi tidak membuktikan biaya atau profit pesaing.

**Simulated example:** SIMULATED — keyword 'kursus digital marketing' memiliki volume tinggi, namun target course berbayar untuk profesional mungkin lebih cocok dengan query 'sertifikasi digital marketing untuk karyawan'. Intent dan willingness-to-pay berbeda.

**Technical depth / workflow:**
- Mulai dari seed. Turunkan produk, need, category terms, problems, brands, locations, dan language variants.
- Kelompokkan intent. Tandai informational/commercial/transactional, urgency, audience fit, dan funnel stage.
- Nilai economics. Perkirakan CPC, conversion likelihood, margin/value, search volume, dan competition; jangan menganggap tools sebagai ground truth.
- Bangun keyword-to-page map. Tentukan landing destination, message, negative risk, dan priority.

**Practice / deliverable:** Buat 30-keyword intent map dengan cluster, priority, expected query type, CPC/volume source, landing page, negative candidates, dan assumptions. Buat competitor SERP review untuk tiga query utama.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa volume tinggi tidak selalu berarti prioritas tinggi?
   **Expected answer in guide:** Volume tanpa intent, conversion potential, margin, landing fit, dan economics bisa menghasilkan traffic mahal tetapi tidak bernilai.
2. **Q:** Bagaimana mengelompokkan keyword?
   **Expected answer in guide:** Berdasarkan intent, product/service, need, brand, competitor, geography, dan funnel context.
3. **Q:** Apa batas competitor ad analysis?
   **Expected answer in guide:** Ad copy/visibility adalah observasi; tidak memberi akses ke bid, actual CPA, margin, atau conversion results pesaing.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T04-CH03 - Account, Campaign & Ad Group Architecture

- Track: paidsearch
- Desk-review dimensions (0-4): Instructional substance=4, Competency alignment=3, Technical accuracy=3, Practical exercise=4, Deliverable=4, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.4 - Status: **VALIDATED** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Fragmentation-vs-control trade-off and naming taxonomy answers correct; 1 short-answer + 1 short-glossary flag; uniform resource row; answer keys OPEN
- Recommended remediation: Expand flagged items; approve keys; add rubric with structure-QA criteria

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T04-CH03 — Account, Campaign & Ad Group Architecture

**Competency ID(s):** T04-C03

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Campaign architecture mengatur hubungan account, campaign, ad group, keyword, ads, assets, audience, geography, language, budget, conversion action, dan landing page. Struktur yang baik memberi kontrol cukup tanpa memecah data terlalu kecil. Naming taxonomy memudahkan QA dan reporting; pemilihan campaign type harus mengikuti objective, channel inventory, feed, conversion readiness, dan kemampuan kontrol.

**Simulated example:** SIMULATED — satu campaign terlalu banyak menggabungkan branded, generic, dan competitor terms sehingga budget generic terserap brand traffic. Pemisahan diperlukan untuk visibility dan budget control, tetapi membagi setiap keyword ke campaign sendiri akan memfragmentasi learning.

**Technical depth / workflow:**
- Definisikan boundaries. Pisahkan brand/non-brand, geography, product line, language, objective, budget, atau intent jika ada alasan operasional.
- Susun ad group. Kelompokkan theme dengan ad relevance dan page fit; hindari satu ad group terlalu luas atau terlalu sempit.
- Rancang naming. Gunakan brand_market_objective_campaign_type_product_audience_version.
- Validasi architecture. Periksa negative overlap, budget control, conversion settings, asset compatibility, dan reporting.

**Practice / deliverable:** Bangun account map untuk brand latihan: account settings, 3 campaign, ad groups, keyword clusters, ad assets, landing pages, conversion actions, naming, dan QA checks. Jelaskan alasan struktur.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa tidak membuat satu campaign untuk setiap keyword?
   **Expected answer in guide:** Fragmentasi dapat membagi budget/conversion signals dan membuat learning serta management tidak efisien.
2. **Q:** Kapan campaign perlu dipisah?
   **Expected answer in guide:** Saat objective, budget, geo, product economics, brand protection, atau bidding strategy membutuhkan kontrol berbeda.
3. **Q:** Apa tujuan naming taxonomy?
   **Expected answer in guide:** Menjamin identifikasi objek, konsistensi laporan, QA, perubahan, dan handover antar operator.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T04-CH04 - Match Types, Negative Keywords & Search Terms

- Track: paidsearch
- Desk-review dimensions (0-4): Instructional substance=4, Competency alignment=3, Technical accuracy=4, Practical exercise=4, Deliverable=4, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.6 - Status: **VALIDATED** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Match-types-as-non-literal/close-variants framing technically current and explicitly routed to latest docs; negative false-blocking risk covered; resource row uniform; answer keys OPEN
- Recommended remediation: Approve keys; keep doc-freshness note; consider adding search-terms-report privacy-threshold caveat

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T04-CH04 — Match Types, Negative Keywords & Search Terms

**Competency ID(s):** T04-C02, T04-C04

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Match type mengatur seberapa luas keyword dapat mencocokkan query, tetapi tidak boleh dianggap sebagai exact string match sederhana. Search terms report menunjukkan query yang benar-benar memicu iklan dan menjadi sumber optimasi. Negative keyword melindungi relevance, budget, brand safety, serta query intent. Pemilihan negatives harus hati-hati agar tidak memblokir query bernilai.

**Simulated example:** SIMULATED — broad match 'software payroll' memicu query 'contoh slip gaji' dan 'lowongan HR'. Sebagian dapat relevan untuk konten, tetapi tidak untuk sales demo. Negative harus dipilih berdasarkan objective, bukan hanya karena query tidak identik.

**Technical depth / workflow:**
- Pahami matching behavior. Pelajari broad/phrase/exact menurut dokumentasi terkini serta sinyal intent/close variants.
- Audit search terms. Kategorikan relevant, irrelevant, ambiguous, competitor, informational, dan conversion quality.
- Bangun negative taxonomy. Bedakan account/campaign/ad-group negatives, brand exclusions, job-seeker, free-only, dan non-market terms.
- Review secara berulang. Periksa query volume, spend, conversion quality, false blocking, dan perubahan behavior.

**Practice / deliverable:** Buat search-term mining worksheet dari data latihan minimal 100 rows: intent, relevance, cost, conversions, value, action (keep/negative/observe), rationale, serta owner/date. Tulis daftar negative beserta risiko false positive.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa fungsi search terms report?
   **Expected answer in guide:** Menunjukkan query yang memicu iklan untuk menilai intent, relevansi, biaya, conversion quality, dan peluang keyword/negative.
2. **Q:** Apa risiko negative keyword terlalu agresif?
   **Expected answer in guide:** Query bernilai dapat terblokir sehingga reach, volume, dan learning berkurang.
3. **Q:** Mengapa match type harus dicek di dokumentasi terbaru?
   **Expected answer in guide:** Platform mengubah matching behavior dan close variants; label match tidak selalu berarti literal match.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T04-CH05 - Search Ad Copy, Assets & Landing Page Relevance

- Track: paidsearch
- Desk-review dimensions (0-4): Instructional substance=4, Competency alignment=3, Technical accuracy=3, Practical exercise=4, Deliverable=4, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.4 - Status: **VALIDATED** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Message-match and CTR-up/CVR-down diagnosis answers correct; claims routed to substantiation/policy; resource row uniform; answer keys OPEN
- Recommended remediation: Approve keys; differentiate resources; add policy-link specificity (misrepresentation etc.)

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T04-CH05 — Search Ad Copy, Assets & Landing Page Relevance

**Competency ID(s):** T04-C05

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Search ad copy harus menjawab query, menyampaikan benefit, memberi proof, dan mengarahkan ke landing page yang sesuai. Responsive Search Ads menguji kombinasi headline/description; assets menambah informasi dan action. Message match mengurangi cognitive friction: kata, offer, price, eligibility, dan CTA pada iklan harus selaras dengan destination page. Klaim harus dapat dibuktikan dan sesuai policy.

**Simulated example:** SIMULATED — iklan menjanjikan 'gratis konsultasi hari ini' tetapi landing page meminta pembayaran dan jadwal minggu depan. CTR bisa tinggi karena janji menarik, tetapi conversion jatuh dan trust rusak.

**Technical depth / workflow:**
- Rumuskan message angle. Gunakan search intent, differentiator, benefit, proof, objection, dan CTA.
- Bangun asset set. Tulis headlines/descriptions yang saling melengkapi, hindari repetisi dan unsupported claims.
- Audit extensions/assets. Periksa sitelinks, callouts, snippets, image/call assets bila tersedia dan relevan.
- QA landing page. Cocokkan offer, page title, speed, mobile usability, form, legal text, and conversion path.

**Practice / deliverable:** Buat dua RSA concept untuk satu ad group: masing-masing 10–15 headline draft, empat description, assets, keyword theme, LP URL, proof requirement, dan policy checklist. Tandai klaim yang memerlukan substantiation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa yang dimaksud message match?
   **Expected answer in guide:** Konsistensi antara query, ad promise, offer, dan konten landing page sehingga audience menemukan yang dijanjikan.
2. **Q:** Mengapa semua headline tidak harus memiliki CTA yang sama?
   **Expected answer in guide:** Asset perlu melengkapi benefit, proof, offer, dan action; repetisi mengurangi kombinasi informasi yang tersedia.
3. **Q:** Apa yang dilakukan jika CTR naik tetapi CVR turun?
   **Expected answer in guide:** Audit query mix, promise-to-page match, audience quality, page experience, offer, dan tracking sebelum menyimpulkan creative lebih baik.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T04-CH06 - Campaign Types, Bidding Strategy & Budget Management

- Track: paidsearch
- Desk-review dimensions (0-4): Instructional substance=4, Competency alignment=3, Technical accuracy=4, Practical exercise=4, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.4 - Status: **VALIDATED** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Bid strategies incl. smart-bidding signal requirements accurate; but title promises campaign types while workflow/practice cover bidding/budget almost exclusively - search vs PMax/Display/YouTube scope boundary never stated; resource row uniform; answer keys OPEN
- Recommended remediation: Add explicit search-campaign-types coverage and a scope statement that Display/YouTube/Shopping/PMax belong to other tracks; approve keys

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T04-CH06 — Campaign Types, Bidding Strategy & Budget Management

**Competency ID(s):** T04-C03, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Bidding dan budget menentukan cara platform berpartisipasi dalam auction dan mengejar conversion/value. Manual, Maximize Clicks, Maximize Conversions, target CPA, Maximize Conversion Value, dan target ROAS memiliki kebutuhan sinyal serta trade-off berbeda. Smart bidding memerlukan conversion tracking yang sehat, volume yang memadai, dan definisi value yang tepat. Budget pacing harus dipantau bersama spend, impression share, marginal CPA/ROAS, dan business margin.

**Simulated example:** SIMULATED — target tROAS ditetapkan terlalu tinggi untuk akun baru tanpa conversion history. Delivery menjadi terbatas. Sebelum melonggarkan target, tim harus memvalidasi purchase event, value, bidding objective, budget, query mix, dan landing-page experience.

**Technical depth / workflow:**
- Pilih strategy sesuai goal. Tentukan click, lead, purchase, value, impression share, atau reach objective.
- Periksa signal readiness. Validasi conversion action, volume, value, consent, deduplication, dan attribution window.
- Set budget/pacing guardrails. Pantau daily spend, budget limited, lost IS, CPA/value, margin, dan seasonality.
- Ubah secara terkendali. Catat baseline, change, expected effect, observation window, rollback/decision criteria.

**Practice / deliverable:** Simulasikan tiga bid strategies untuk satu campaign. Isi input signal, required data, budget, expected trade-off, monitoring metrics, guardrail, dan perubahan yang dilakukan pada kasus underdelivery/overspend.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa smart bidding tidak memperbaiki conversion tracking yang rusak?
   **Expected answer in guide:** Algoritma mengoptimalkan signal yang diberikan; event salah/duplikat membuat learning dan budget allocation ikut salah.
2. **Q:** Apa risiko menetapkan target ROAS terlalu tinggi?
   **Expected answer in guide:** Delivery dapat menyempit atau berhenti mengejar peluang yang masih profitable pada target bisnis sebenarnya.
3. **Q:** Apa yang dipantau selain average CPA?
   **Expected answer in guide:** Conversion value, margin, volume, query quality, impression share, budget pacing, new-customer share, dan marginal performance.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T04-CH07 - Conversion Tracking, Enhanced Conversions & Offline Conversion

- Track: paidsearch
- Desk-review dimensions (0-4): Instructional substance=4, Competency alignment=3, Technical accuracy=4, Practical exercise=4, Deliverable=4, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.6 - Status: **VALIDATED** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Primary/secondary actions, dedup, consent, offline import and CRM reconciliation answers accurate and advanced; 1 short-answer flag; resource row uniform; answer keys OPEN
- Recommended remediation: Expand flagged answer; approve keys; keep consent governance emphasis

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T04-CH07 — Conversion Tracking, Enhanced Conversions & Offline Conversion

**Competency ID(s):** T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Conversion tracking mengubah business action menjadi signal yang dapat diukur dan dipakai bidding. Specialist harus membedakan page view, form submit, qualified lead, purchase, phone call, offline conversion, enhanced conversions, dan imported CRM outcomes. Event definition, count setting, value, attribution window, consent, deduplication, tag implementation, dan QA wajib disepakati sebelum optimasi.

**Simulated example:** SIMULATED — form submit dihitung sebagai primary conversion, tetapi 40% leads adalah spam/duplikat dan sales qualified rate rendah. Bidding mengejar form volume, bukan pipeline value. CRM qualification/offline conversion perlu dikirim secara tepat dengan governance.

**Technical depth / workflow:**
- Definisikan action. Pilih primary/secondary, counting method, value, source, owner, dan window.
- Map implementation. Tetapkan tag/event, trigger, parameter, consent, enhanced/offline conversion flow, serta deduplication.
- QA event. Uji expected vs actual, duplicates, missing values, cross-domain/redirect, mobile, and consent states.
- Reconcile business outcomes. Cocokkan platform conversions dengan CRM/sales/revenue dan catat delay/attribution differences.

**Practice / deliverable:** Buat conversion measurement spec untuk lead dan purchase: event name, trigger, parameters/value, tag owner, source of truth, consent, deduplication, QA test, offline import field, dan reconciliation plan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa form submit belum tentu qualified lead?
   **Expected answer in guide:** Submit hanya perilaku awal; qualification memerlukan validasi data, fit, sales response, dan outcome CRM.
2. **Q:** Apa risiko conversion double-counting?
   **Expected answer in guide:** Bidding/reporting menganggap conversion lebih banyak sehingga CPA/ROAS dan optimasi menjadi bias.
3. **Q:** Apa fungsi offline conversion import?
   **Expected answer in guide:** Menghubungkan conversion yang terjadi di CRM/sales setelah click dengan campaign signal, sesuai identifier, privacy, dan rules.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T04-CH08 - Search Terms Analysis, Quality Score & Impression Share

- Track: paidsearch
- Desk-review dimensions (0-4): Instructional substance=4, Competency alignment=3, Technical accuracy=4, Practical exercise=4, Deliverable=4, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.6 - Status: **VALIDATED** (agent desk-review, not SME approval)
- Guide-source verification: Verbatim spot-check vs fullstack-guides.js (Auditor A): match 1:1.
- Auditor-flagged defects: QS-as-diagnostic and lost-IS-budget-vs-rank answers technically correct; segmentation-before-diagnosis discipline strong; resource row uniform; answer keys OPEN
- Recommended remediation: Approve keys; differentiate resources; note QS display-threshold caveat (top-of-range only)

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T04-CH08 — Search Terms Analysis, Quality Score & Impression Share

**Competency ID(s):** T04-C04, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Diagnosis Search menggunakan search terms, auction insights, Quality Score components, impression share, landing-page signals, conversion rate, dan value. Quality Score adalah diagnostic indicator, bukan KPI bisnis atau tombol optimasi tunggal. Lost impression share karena budget berbeda dari rank. Analyst harus memisahkan issue query, competition, bid, relevance, page, tracking, dan budget sebelum membuat perubahan.

**Simulated example:** SIMULATED — campaign kehilangan impression share 25% karena rank, sementara budget tidak habis. Menambah budget bukan solusi utama; perlu mengecek bid strategy, ad relevance, expected CTR, landing experience, dan query relevance.

**Technical depth / workflow:**
- Segmentasikan hasil. Periksa brand/generic, query theme, device, geo, audience, hour, ad group, landing page, dan network.
- Diagnosis auction. Pisahkan lost IS budget vs rank; cek competition dan bid eligibility.
- Uji relevance. Review query-to-keyword, ad, landing page, conversion signal, dan user experience.
- Prioritaskan tindakan. Dampak, confidence, effort, dependency, dan guardrail menentukan urutan.

**Practice / deliverable:** Buat weekly search diagnosis report dengan segmentation, search term issues, lost IS, Quality Score components, LP issue, tracking check, root-cause hypotheses, prioritized actions, owner, dan follow-up date.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apakah Quality Score dapat menjadi business KPI?
   **Expected answer in guide:** Tidak. Ia diagnostic indicator untuk relevance/auction context; success harus dilihat pada cost, qualified conversion, value, dan margin.
2. **Q:** Apa beda lost IS budget dan lost IS rank?
   **Expected answer in guide:** Budget loss menunjukkan batas anggaran; rank loss berkaitan competitiveness/Ad Rank, bid, relevance, dan auction context.
3. **Q:** Mengapa diagnosis harus disegmentasi?
   **Expected answer in guide:** Rata-rata account dapat menutupi query, device, region, atau landing-page pockets yang punya masalah berbeda.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T04-CH09 - Testing, Optimization, Reporting & Diagnosis

- Track: paidsearch
- Desk-review dimensions (0-4): Instructional substance=4, Competency alignment=3, Technical accuracy=3, Practical exercise=4, Deliverable=4, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.4 - Status: **VALIDATED** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Single-hypothesis isolation, stopping rules and inconclusive-result answers consistent with T01-CH08 standards; resource row uniform; answer keys OPEN
- Recommended remediation: Approve keys; cross-link the shared experimentation criteria with T01-CH08 to avoid divergence

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T04-CH09 — Testing, Optimization, Reporting & Diagnosis

**Competency ID(s):** T04-C05, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Testing Search harus menguji satu hipotesis yang dapat dipisahkan dari perubahan lain. Variabel dapat berupa message angle, asset, landing page, match coverage, bid strategy, atau audience; test perlu primary metric, guardrail, randomization/experiment setup, sample/duration, seasonality control, dan stopping rule. Setelah test, interpretasikan effect size dan uncertainty, bukan hanya siapa yang tampak menang.

**Simulated example:** SIMULATED — dua RSA diluncurkan bersamaan dengan perubahan bidding dan LP. Conversion naik, tetapi tim tidak dapat mengidentifikasi penyebab. Test berikutnya mengisolasi creative angle sambil menjaga budget, targeting, dan page tetap stabil.

**Technical depth / workflow:**
- Tulis hipotesis. Hubungkan observation, change, audience, expected mechanism, primary KPI, dan guardrail.
- Rancang experiment. Tentukan control/treatment, randomization, split, time, sample, seasonality, dan contamination risks.
- Jalankan QA. Pastikan URLs, assets, conversion, budgets, and settings seimbang.
- Interpretasikan. Baca uncertainty, volume, segment effects, business value, dan keputusan scale/iterate/stop.

**Practice / deliverable:** Buat experiment backlog tiga test untuk Search: ad-message test, LP test, dan match/negative strategy test. Untuk satu test, lengkapi protocol, sample/duration assumptions, guardrails, QA, decision rule, dan results template.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa perubahan banyak variabel sekaligus berbahaya?
   **Expected answer in guide:** Penyebab hasil tidak dapat diisolasi, sehingga tim tidak tahu intervensi mana yang memberi dampak.
2. **Q:** Apa arti hasil inconclusive?
   **Expected answer in guide:** Bukti belum cukup untuk memilih pemenang; itu bukan bukti bahwa variasi identik.
3. **Q:** Kapan eksperimen sebaiknya dihentikan?
   **Expected answer in guide:** Sesuai pre-defined stopping rule, misalnya safety issue, tracking failure, budget limit, atau sample/time threshold—bukan saat hasil disukai.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T04-CH10 - Paid Search Capstone

- Track: paidsearch
- Desk-review dimensions (0-4): Instructional substance=4, Competency alignment=3, Technical accuracy=4, Practical exercise=4, Deliverable=4, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.6 - Status: **VALIDATED** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Case-study workbook checklist comprehensive and chapter-consistent; 1 short-glossary flag; resource row uniform; no scored pass threshold; answer keys OPEN
- Recommended remediation: Approve keys; move capstone checklist into rubric register with threshold; add executive-summary exemplar

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T04-CH10 — Paid Search Capstone

**Competency ID(s):** T04-C03, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Capstone Paid Search menguji kemampuan mengelola jalur dari intent sampai conversion dan diagnosis. Paket kerja harus menyatukan keyword architecture, campaign build, RSA/assets, bidding/budget, conversion tracking, negative strategy, QA, reporting, dan optimization. Semua forecast atau data yang tidak berasal dari account aktual wajib ditandai SIMULATED. Hasil harus dijelaskan menurut intent dan economics, bukan hanya platform metrics.

**Simulated example:** SIMULATED — perusahaan SaaS B2B ingin menghasilkan demo request. Tim harus memisahkan branded/generic/competitor, menjaga query quality, menghubungkan form dengan qualification CRM, dan menilai biaya per qualified demo.

**Technical depth / workflow:**
- Frame brief. Tentukan business goal, target market, proposition, economics, lead quality, and constraints.
- Build campaign. Susun keyword, architecture, ads/assets, landing pages, bids, budgets, and tracking.
- QA dan monitor. Simpan test evidence, change log, delivery, query mining, and conversion reconciliation.
- Present insight. Jelaskan what changed, why, impact, uncertainty, recommendation, and next tests.

**Practice / deliverable:** Bangun Search case-study workbook: brief, intent map 30 keywords, architecture, RSA assets, negative list, bid/budget scenario, conversion spec, QA log, weekly report, 3 optimizations, dan executive summary.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa yang membuat paid search capstone berbeda dari kumpulan keyword?
   **Expected answer in guide:** Ia membuktikan intent-to-conversion system, termasuk architecture, message match, economics, tracking, optimization, dan QA.
2. **Q:** Mengapa qualified lead lebih bernilai daripada raw form volume?
   **Expected answer in guide:** Qualified lead lebih dekat ke pipeline/revenue; raw form dapat dipenuhi spam atau audience yang tidak sesuai.
3. **Q:** Bagaimana membedakan actual dan simulated result di portfolio?
   **Expected answer in guide:** Gunakan label jelas, jelaskan sumber/rumus, jangan klaim client spend atau campaign outcome yang tidak pernah terjadi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T05-CH01 - Social Advertising Ecosystem & Account Structure

- Track: paidsocial
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Verbatim spot-check vs paid-social-guides.js CH01-CH03 (Auditor B): match 1:1.
- Auditor-flagged defects: Answer keys OPEN (rubrics draft: 'Review status: OPEN'); no chapter-level resource link (register: 'No chapter-level resource link captured in the HTML chapter block'); chapter pass threshold not authored; agency evidence role-level only; tech-review matrix flags the 10 Paid Social legacy guides as needing 'a separate content/answer-key pass'; T05 resource-mapping secondary label 'LinkedIn Marketing Academy' points to https://ads.tiktok.com/business/id/academy (TikTok Academy URL)
- Recommended remediation: SME-approve the 3 Q&A answer keys; author observable chapter rubric criteria + pass threshold; add chapter-level resource links; fix resource-mapping label-to-URL pairing

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T05-CH01 — Social Advertising Ecosystem & Account Structure

**Competency ID(s):** T05-C01

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; includes paid social on Meta/TikTok/LinkedIn alongside paid search/display. Adjacent cross-channel evidence; dedicated paid-social specialist scope not separately established. | A: Paid Social Specialist, Havas employer-hosted Workday JD; paid-social campaign management, audience segments, budgets, reporting and A/B testing. Geography/seniority must be confirmed from the complete source.

**Learning objective / concept:** Paid social adalah aktivitas membeli inventory iklan pada platform sosial secara terencana dan terukur. Pekerjaan specialist menghubungkan outcome bisnis, akun platform, aset identitas, sumber data, audience, creative, auction/delivery, measurement, dan optimization. Meta dan TikTok menjadi platform praktik utama; LinkedIn merupakan pendalaman untuk kebutuhan B2B, sedangkan Pinterest, Snapchat, Reddit, atau X dipelajari sesuai kebutuhan pasar dan akses akun.

**Simulated example:** KASUS SIMULASI — sebuah brand FMCG Indonesia menunjuk agency untuk mengelola Meta dan TikTok. Brand tetap menjadi pemilik Business Portfolio, Page, Instagram identity, TikTok account, ad account, domain, catalog, serta Pixel/dataset. Agency mendapat partner/person access sesuai pekerjaannya. Saat kerja sama berakhir, akses agency dapat dicabut tanpa memindahkan kepemilikan aset atau berbagi password personal.

**Technical depth / workflow:**
- Petakan entitas dan pemilik aset. Daftarkan badan usaha/brand, Business Portfolio atau Business Center, ad account, Page, Instagram identity, TikTok account, domain website, app, catalog, Pixel/dataset, payment profile, dan pemilik legal setiap aset.
- Pisahkan ownership dari access. Brand sebaiknya mempertahankan kepemilikan aset utama. Berikan person atau agency partner hanya aset dan permission yang diperlukan untuk menjalankan tugas.
- Buat role matrix. Tentukan siapa yang dapat mengelola campaign, creative, audience, billing, data source, serta business settings. Terapkan least privilege, two-factor authentication, approval, dan prosedur offboarding.
- Lakukan account-readiness check. Periksa account status, payment method, koneksi Page/identity, domain atau app setup bila relevan, kesehatan data source, katalog, policy restrictions, dan ketersediaan administrator cadangan.

**Practice / deliverable:** Buat asset-and-permission register untuk satu brand fiktif. Kolom minimal: platform, jenis aset, account ID sintetis, legal owner, agency partner, assigned role, admin backup, status 2FA, tanggal access review terakhir, status, dan evidence. Tandai seluruh ID sebagai SIMULATED. Jangan memasukkan email, password, ID akun pribadi, atau data pelanggan sungguhan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Siapa yang seharusnya tetap memiliki aset digital utama brand ketika iklan dikelola agency?
   **Expected answer in guide:** Brand atau badan usaha pemilik bisnis sebaiknya mempertahankan ownership. Agency memperoleh partner/person access yang dibutuhkan, bukan mengambil alih kepemilikan atau meminta password personal.
2. **Q:** Mengapa full admin access tidak boleh diberikan ke seluruh anggota tim?
   **Expected answer in guide:** Hak admin yang terlalu luas memperbesar dampak jika terjadi kesalahan atau account compromise. Least privilege membatasi tindakan setiap orang sesuai tugas dan membuat access review serta offboarding lebih mudah diaudit.
3. **Q:** Apa perbedaan ad account, Page/identity, dan Pixel/dataset?
   **Expected answer in guide:** Ad account mengelola pembelian serta campaign; Page atau identity mewakili identitas advertiser pada iklan; Pixel/dataset menerima event untuk measurement. Ketiganya saling terhubung, tetapi bukan aset yang sama.

**Glossary:** Business Portfolio / Business Center: Workspace tingkat bisnis untuk mengelola aset serta permission. Nama dan fitur berbeda antarpublisher.; Ad account: Workspace untuk membuat, membayar, mengelola, dan melaporkan campaign iklan.; Data source: Sumber event atau conversion data, misalnya Meta Pixel/dataset atau TikTok Pixel.; Partner access: Akses terbatas yang diberikan kepada agency/vendor tanpa menyerahkan login personal.; Least privilege: Prinsip memberikan hak akses minimum yang cukup untuk menjalankan tugas.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T05-CH02 - Campaign Objective, Funnel & Conversion Location

- Track: paidsocial
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Verbatim spot-check vs paid-social-guides.js CH01-CH03 (Auditor B): match 1:1.
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; agency evidence role-level only; legacy-format flag from tech-review matrix
- Recommended remediation: SME-approve answer keys; author chapter rubric + threshold; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T05-CH02 — Campaign Objective, Funnel & Conversion Location

**Competency ID(s):** T05-C01

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; includes paid social on Meta/TikTok/LinkedIn alongside paid search/display. Adjacent cross-channel evidence; dedicated paid-social specialist scope not separately established. | A: Paid Social Specialist, Havas employer-hosted Workday JD; paid-social campaign management, audience segments, budgets, reporting and A/B testing. Geography/seniority must be confirmed from the complete source.

**Learning objective / concept:** Campaign objective menjelaskan hasil yang diminta dari optimasi platform; funnel menggambarkan perjalanan konsumen; conversion location menunjukkan tempat tindakan terjadi; performance goal dan optimization event menentukan sinyal delivery. Semuanya saling berkaitan, tetapi bukan istilah yang dapat saling menggantikan. Nama objective, conversion location, dan goal dapat berubah sesuai platform, campaign type, serta eligibility akun. Periksa pilihan aktual di Ads Manager sebelum launch.

**Simulated example:** KASUS SIMULASI — brand skincare meminta lebih banyak penjualan website, tetapi operator memilih Traffic hanya karena kliknya murah. Hasilnya bisa berupa banyak kunjungan tanpa purchase yang memadai. Ketika website, checkout, event tracking, dan consent sudah siap, evaluasi objective Sales/conversion dan event Purchase. Bila conversion signal belum dapat dipercaya, dokumentasikan kekurangan data; jangan menyebut traffic murah sebagai sales.

**Technical depth / workflow:**
- Definisikan business outcome. Tentukan purchase, qualified lead, app install, reach, atau outcome lain beserta baseline, target, periode laporan, dan batas biaya.
- Pilih conversion location. Website, app, instant form, messaging, atau destination lain akan mengubah alur pengguna, friction, kebutuhan tracking, dan kualitas hasil.
- Pilih objective dan performance goal. Gunakan opsi yang tersedia di platform dan selaraskan dengan outcome bisnis. Jangan memilih hanya karena labelnya terdengar cocok dengan tahap funnel.
- Tentukan optimization event dan KPI. Contohnya Purchase untuk website sales atau qualified Lead untuk lead generation. Pastikan definisi event jelas, event benar-benar terjadi, dan datanya dapat diverifikasi.
- Susun measurement hierarchy. Pisahkan outcome KPI dari diagnostic metrics seperti CTR/CPC/landing-page view dan guardrail seperti allowable CPA, margin, refund, atau lead quality.

**Practice / deliverable:** Buat objective decision tree untuk tiga brief: (A) awareness produk baru, (B) purchase melalui website, dan (C) lead konsultasi melalui Instant Form atau messaging. Untuk setiap brief, tulis business outcome, platform, objective yang tersedia, conversion location, performance goal/event, KPI utama, diagnostic metric, tracking requirement, dan alasan menolak alternatif. Tandai asumsi yang belum terbukti.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa perbedaan objective dan KPI?
   **Expected answer in guide:** Objective platform adalah arah optimasi campaign; KPI adalah ukuran untuk menilai pencapaian outcome bisnis. Memilih objective tidak otomatis membuktikan campaign berhasil.
2. **Q:** Mengapa Traffic tidak otomatis tepat untuk brief yang meminta penjualan?
   **Expected answer in guide:** Traffic mengoptimalkan kunjungan atau sinyal traffic terkait, bukan selalu purchase. Klik murah tetap dapat menghasilkan conversion rate rendah, CPA tinggi, atau margin yang buruk.
3. **Q:** Apa yang harus diperiksa sebelum memilih Purchase sebagai optimization event?
   **Expected answer in guide:** Pastikan checkout berjalan, event terpicu, parameter value/currency benar, deduplication berfungsi bila diperlukan, consent dihormati, serta kualitas sinyal memadai.

**Glossary:** Campaign objective: Arah optimasi yang dipilih pada tingkat campaign sesuai opsi platform.; Conversion location: Tempat tindakan yang diinginkan terjadi, misalnya website, app, instant form, atau messaging.; Performance goal: Hasil delivery yang diminta untuk diprioritaskan platform pada objective terpilih.; Optimization event: Event yang digunakan sebagai sinyal optimasi, misalnya Purchase atau Lead.; Diagnostic metric: Metrik untuk menjelaskan perubahan performa; bukan pengganti outcome bisnis.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T05-CH03 - Audience Research, Segmentation & Targeting

- Track: paidsocial
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Verbatim spot-check vs paid-social-guides.js CH01-CH03 (Auditor B): match 1:1.
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; agency evidence role-level only; legacy-format flag; consent/privacy Q&A correct but unapproved
- Recommended remediation: SME-approve answer keys; author chapter rubric + threshold; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T05-CH03 — Audience Research, Segmentation & Targeting

**Competency ID(s):** T05-C02

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; includes paid social on Meta/TikTok/LinkedIn alongside paid search/display. Adjacent cross-channel evidence; dedicated paid-social specialist scope not separately established. | A: Paid Social Specialist, Havas employer-hosted Workday JD; paid-social campaign management, audience segments, budgets, reporting and A/B testing. Geography/seniority must be confirmed from the complete source.

**Learning objective / concept:** Audience strategy dimulai dari kebutuhan dan perilaku konsumen, lalu diterjemahkan menjadi sumber data, aturan segmentasi, exclusions, serta hipotesis yang bisa diuji. Custom Audience biasanya memakai sumber first-party atau interaksi platform yang diizinkan; Lookalike Audience memodelkan prospek dari karakteristik source audience; interest/behavior memberi sinyal targeting; broad atau automated audience memberi ruang lebih luas bagi sistem. Ketersediaan fitur berbeda menurut platform dan akun. Jangan mengunggah atau mengaktifkan data pelanggan tanpa hak, consent, dan dasar penggunaan yang sesuai.

**Simulated example:** KASUS SIMULASI — toko online memiliki 20.000 pengunjung website, tetapi hanya 1.200 pembeli. Seed Lookalike dari seluruh pengunjung mungkin terlalu luas karena niatnya beragam. Seed pembeli bisa lebih dekat dengan outcome, tetapi mungkin terlalu kecil atau sudah usang. Specialist perlu menilai kualitas sumber, recency, consent, ukuran, overlap, dan objective sebelum memilih seed.

**Technical depth / workflow:**
- Tulis audience hypothesis. Definisikan siapa yang perlu dijangkau, kebutuhan/tension yang dimiliki, tindakan yang mungkin dilakukan, dan evidence yang mendukung dugaan tersebut.
- Audit data source. Periksa kualitas, recency, coverage, deduplication, consent, dan kelayakan penggunaan CRM, Pixel, engagement, customer list, atau app event untuk advertising.
- Buat segmen fungsional. Pisahkan prospecting/new customer, high-intent retargeting, existing customer/retention, dan exclusions. Setiap segmen harus memiliki peran dan KPI yang jelas.
- Kelola overlap dan scale. Tinjau estimasi ukuran audience, overlap, exclusions, eligibility geografis, dan konsentrasi delivery. Hindari memecah audience menjadi banyak ad group kecil tanpa alasan pengujian.
- Rancang eksperimen. Bandingkan broad/automated targeting dengan satu hipotesis targeting yang relevan. Jaga creative, objective, budget, dan measurement tetap sebanding.

**Practice / deliverable:** Bangun audience matrix dengan kolom: segment, business role, source, inclusion rule, exclusion rule, lookback/recency, consent status, estimated size, overlap risk, message angle, KPI, dan test hypothesis. Buat minimal segmen prospecting, retargeting, serta existing-customer/retention. Gunakan data sintetis jika data first-party berizin tidak tersedia.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa daftar seluruh pengunjung website tidak otomatis menjadi seed Lookalike terbaik?
   **Expected answer in guide:** Pengunjung memiliki niat dan kualitas yang beragam. Seed harus mewakili outcome yang dicari dan cukup valid; buyer terverifikasi atau qualified lead dapat lebih relevan jika sumbernya sah serta ukurannya memadai.
2. **Q:** Apa risiko retargeting tanpa exclusion pelanggan yang sudah membeli?
   **Expected answer in guide:** Pembeli lama bisa terus menerima pesan akuisisi yang sama, audience dapat overlap, dan frequency meningkat tanpa menambah nilai incremental.
3. **Q:** Bolehkah data pelanggan sensitif digunakan untuk membuat audience?
   **Expected answer in guide:** Jangan menggunakan atau mengirim data sensitif yang dilarang platform atau tidak memiliki dasar pemrosesan yang sah. Ikuti consent, privacy law, platform policy, serta prinsip minimisasi data.

**Glossary:** Custom Audience: Audience yang dibentuk dari sumber pelanggan atau interaksi platform yang penggunaannya diizinkan.; Lookalike Audience: Audience prospek yang dimodelkan dari karakteristik source audience; kualitasnya bergantung pada kualitas sumber.; Prospecting: Aktivitas paid media untuk menjangkau atau memperoleh calon pelanggan baru.; Retargeting: Menjangkau kembali orang yang pernah berinteraksi dengan brand atau menunjukkan intent.; Audience overlap: Tumpang tindih orang di beberapa audience group yang dapat mengganggu delivery dan interpretasi hasil.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T05-CH04 - Campaign, Ad Set & Ad Architecture

- Track: paidsocial
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; agency evidence role-level only; legacy-format flag
- Recommended remediation: SME-approve answer keys; author chapter rubric + threshold; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T05-CH04 — Campaign, Ad Set & Ad Architecture

**Competency ID(s):** T05-C01

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; includes paid social on Meta/TikTok/LinkedIn alongside paid search/display. Adjacent cross-channel evidence; dedicated paid-social specialist scope not separately established. | A: Paid Social Specialist, Havas employer-hosted Workday JD; paid-social campaign management, audience segments, budgets, reporting and A/B testing. Geography/seniority must be confirmed from the complete source.

**Learning objective / concept:** Campaign architecture menyusun hubungan objective, budget, audience, placement, creative, dan reporting. Meta umumnya memakai hierarchy Campaign → Ad Set → Ad; TikTok Ads Manager memakai Campaign → Ad Group → Ad. Konsep levelnya mirip, tetapi setting dan tanggung jawabnya tidak identik. Pada TikTok, campaign setup mencakup objective dan campaign budget; ad group mengatur antara lain placement, targeting, schedule, optimization, dan bid; ad memuat identity, creative, copy, CTA, URL, serta tracking. Selalu validasi workflow dan pilihan terbaru di masing-masing platform.

**Simulated example:** KASUS SIMULASI — sebuah brand ingin menguji dua audience dan tiga creative angle di Meta dan TikTok. Jika setiap kombinasi dibuat menjadi campaign terpisah, budget dapat terfragmentasi dan reporting makin sulit. Arsitektur yang lebih sederhana menentukan objective serta level budget yang tepat, memisahkan audience/test cell hanya jika memang perlu diisolasi, lalu memberi setiap ad creative ID dan naming yang dapat ditelusuri.

**Technical depth / workflow:**
- Mulai dari outcome dan market. Pisahkan campaign jika objective, market/geography, pemilik budget, atau governance memang berbeda.
- Rancang campaign level. Catat platform, objective, campaign type, budget level, special category bila relevan, dan rancangan eksperimen.
- Rancang Ad Set / Ad Group level. Definisikan audience, placements, schedule, optimization goal, bid strategy, dan budget sesuai struktur platform yang digunakan.
- Rancang ad level. Hubungkan identity, post/creative, copy, CTA, destination URL, tracking parameters, dan approval status.
- Terapkan naming serta QA. Gunakan nama yang konsisten dan mudah dibaca. Periksa setiap ID serta relasi objek dengan brief sebelum launch.

**Practice / deliverable:** Buat dua blueprint terpisah: satu untuk Meta dan satu untuk TikTok. Sertakan campaign name/ID, objective, budget level, Ad Set/Ad Group, audience, placement, optimization event, bid strategy, schedule, ad/creative ID, CTA, destination URL, UTM, owner, dan QA status. Jelaskan kapan suatu group perlu dipisahkan dan kapan lebih baik digabung.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Bisakah hierarchy Campaign → Ad Set → Ad di Meta disalin mentah ke TikTok?
   **Expected answer in guide:** Tidak. Konsep hierarchy sebanding, tetapi nama objek dan setting yang tersedia berbeda. Gunakan Campaign → Ad Group → Ad untuk TikTok dan petakan setting sesuai dokumentasi platform.
2. **Q:** Kapan campaign perlu dipisahkan?
   **Expected answer in guide:** Ketika objective, market, budget ownership, governance, atau rancangan test memang membutuhkan isolasi. Jangan memisahkan hanya untuk menambah jumlah baris atau membuat campaign tersendiri untuk setiap creative.
3. **Q:** Mengapa naming convention dibuat sebelum launch?
   **Expected answer in guide:** Naming konsisten mempercepat QA, filtering reporting, handover, reconciliation, dan audit perubahan antar-campaign.

**Glossary:** Campaign: Objek tingkat campaign untuk mengatur objective dan setting/budget tertentu sesuai platform.; Ad Set (Meta): Level Meta untuk setting seperti audience, placement, schedule, optimization, serta budget/bid sesuai konfigurasi.; Ad Group (TikTok): Level TikTok untuk setting seperti placement, audience, schedule, optimization, dan bid.; Naming convention: Pola nama konsisten agar platform, market, objective, audience, creative, dan test mudah dikenali.; Test cell: Unit kombinasi variabel dalam eksperimen yang didefinisikan agar hasil dapat dibandingkan secara adil.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T05-CH05 - Creative Strategy, Format, Placement & Messaging

- Track: paidsocial
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; agency evidence role-level only; legacy-format flag
- Recommended remediation: SME-approve answer keys; author chapter rubric + threshold; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T05-CH05 — Creative Strategy, Format, Placement & Messaging

**Competency ID(s):** T05-C03

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; includes paid social on Meta/TikTok/LinkedIn alongside paid search/display. Adjacent cross-channel evidence; dedicated paid-social specialist scope not separately established. | A: Paid Social Specialist, Havas employer-hosted Workday JD; paid-social campaign management, audience segments, budgets, reporting and A/B testing. Geography/seniority must be confirmed from the complete source.

**Learning objective / concept:** Creative merupakan bagian dari sistem optimasi, bukan dekorasi setelah media plan selesai. Mulai dari audience tension dan product truth, lalu turunkan menjadi angle, hook, proof, format, message, CTA, serta kesinambungan landing page. Satu iklan sebaiknya menyampaikan satu proposisi utama dan satu tindakan yang jelas. Format dan placement harus mengikuti spesifikasi platform, safe zone, cropping, aspect ratio, caption/audio, serta konteks konsumsi. Hak penggunaan creator content, musik, testimonial, dan partnership ads harus dipastikan sebelum amplifikasi.

**Simulated example:** KASUS SIMULASI — sebuah brand minuman sehat menguji tiga angle: convenience, taste, dan ingredient proof. Offer dan landing page dibuat sama agar perbandingan awal lebih mungkin mencerminkan perbedaan angle, bukan perubahan promosi. Setiap angle memiliki dua hook. Tim mencatat creative ID, opening beberapa detik pertama, product demonstration, proof, CTA, durasi, format, dan retention metrics.

**Technical depth / workflow:**
- Temukan audience tension. Gunakan review, komentar, interview pelanggan, search query, dan pertanyaan sales untuk menemukan kebutuhan atau keberatan yang nyata.
- Tulis creative hypothesis. Nyatakan angle, audience yang dituju, alasan pesan mungkin relevan, proof yang dapat ditunjukkan, dan tindakan yang diharapkan.
- Buat variasi yang terkontrol. Susun matrix angle × hook × format. Untuk test awal, ubah satu variabel utama kecuali multivariate test memiliki rancangan dan volume yang memadai.
- Adaptasikan ke placement. Periksa safe zone, cropping, aspect ratio, thumbnail, on-screen text, caption, audio, CTA, landing page, serta preview iklan di setiap platform.
- Periksa policy dan usage rights. Verifikasi product claim, paid-partnership disclosure, izin creator content untuk whitelisting/Spark Ads, lisensi musik, dan aturan kategori.

**Practice / deliverable:** Buat tiga creative concept untuk satu produk latihan. Setiap concept memuat audience insight, angle, hook, proof, storyboard/shot list, format/placement, primary copy, CTA, landing-page promise, creator/usage rights, policy check, dan hypothesis. Susun test matrix yang mengisolasi variabel utama serta tetapkan diagnostic metric dan outcome metric.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa perbedaan hook, angle, dan proof?
   **Expected answer in guide:** Angle adalah sudut pesan atau manfaat; hook adalah pembuka yang menarik perhatian; proof adalah bukti yang membuat klaim lebih kredibel, misalnya demonstrasi, fakta terverifikasi, atau testimonial yang berizin.
2. **Q:** Mengapa creative dengan CTR tinggi tetap dapat berkinerja buruk?
   **Expected answer in guide:** CTR tinggi bisa berasal dari rasa penasaran atau clickbait tanpa kunjungan berkualitas dan purchase. Periksa landing-page view, conversion rate, CPA, revenue/margin, serta kualitas lead/customer.
3. **Q:** Apa yang harus dicek sebelum menggunakan konten creator sebagai iklan?
   **Expected answer in guide:** Cakupan dan durasi usage rights, platform/placement yang diizinkan, paid amplification atau whitelisting permission, disclosure, hak musik/asset, brand safety, dan kepatuhan klaim.

**Glossary:** Creative angle: Sudut pesan atau manfaat yang dipakai agar proposisi relevan bagi audience tertentu.; Hook: Pembuka visual, audio, atau copy untuk menarik perhatian dan mengantarkan pesan utama.; Proof point: Bukti yang mendukung klaim atau manfaat produk.; Native creative: Creative yang disesuaikan dengan konteks konsumsi dan format platform tanpa kehilangan kejelasan brand.; Usage rights / whitelisting: Izin penggunaan atau amplifikasi konten creator; ruang lingkup dan durasinya harus terdokumentasi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T05-CH06 - Auction, Bid Strategy, Budget & Delivery

- Track: paidsocial
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; agency evidence role-level only; legacy-format flag; Rp unit-economics example correctly labeled SIMULATED
- Recommended remediation: SME-approve answer keys; author chapter rubric + threshold; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T05-CH06 — Auction, Bid Strategy, Budget & Delivery

**Competency ID(s):** T05-C04

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; includes paid social on Meta/TikTok/LinkedIn alongside paid search/display. Adjacent cross-channel evidence; dedicated paid-social specialist scope not separately established. | A: Paid Social Specialist, Havas employer-hosted Workday JD; paid-social campaign management, audience segments, budgets, reporting and A/B testing. Geography/seniority must be confirmed from the complete source.

**Learning objective / concept:** Auction menentukan iklan yang memenuhi syarat untuk memperoleh kesempatan delivery. Hasil tidak ditentukan bid saja; platform juga mempertimbangkan predicted action, relevance/quality, serta delivery rules. Bedakan budget, level budget, bid, cost cap/goal, dan target ROAS. Nama serta ketersediaan strategi berbeda antarpublisher dan objective. Jangan menganggap istilah CBO/ABO Meta berlaku identik di TikTok. Target efisiensi harus diturunkan dari unit economics, bukan hanya benchmark CPM.

**Simulated example:** KASUS SIMULASI — AOV sebuah produk Rp150.000 dan contribution margin sebelum biaya iklan Rp45.000 per order. Bisnis menetapkan allowable acquisition cost Rp30.000 per order agar tersisa kontribusi Rp15.000 sebelum biaya lain. Target revenue ROAS aritmetis pada AOV dan CPA tersebut adalah 5,0x (Rp150.000 ÷ Rp30.000). Ini target bisnis simulasi, bukan janji bahwa auction akan menghasilkan angka tersebut.

**Technical depth / workflow:**
- Hitung batas komersial. Hitung AOV, contribution margin, asumsi repeat purchase, allowable CPA/CAC, refund/cancel, dan target ROAS. Pisahkan revenue ROAS dari profit ROAS.
- Tentukan budget level. Pilih apakah budget dikontrol pada campaign atau Ad Set/Ad Group sesuai fitur platform dan objective.
- Pahami bid strategy. Bedakan volume/lowest cost, cost cap/target cost, bid cap, dan target ROAS jika tersedia. Catat apa yang dikontrol advertiser dan apa yang dioptimalkan platform.
- Rencanakan pacing. Bandingkan planned spend dengan actual spend harian dan kumulatif. Tandai underdelivery, risiko overspend, serta perubahan yang membutuhkan approval.
- Ubah satu faktor penting pada satu waktu. Diagnosis signal, audience, bid, budget, creative, conversion path, dan competition sebelum melakukan edit. Simpan alasan serta timestamp.

**Practice / deliverable:** Buat budget-and-bidding sheet sintetis. Input: AOV, margin, allowable CPA, target ROAS, budget, asumsi CTR/CVR, forecast conversions, planned daily spend, actual spend, dan variance. Uji skenario CPA 25% lebih tinggi dan CVR 20% lebih rendah. Berikan rekomendasi continue, test, limit, atau stop beserta risiko dan bukti yang masih kurang.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa bid bukan satu-satunya faktor yang menentukan hasil auction?
   **Expected answer in guide:** Platform menggabungkan bid dengan predicted action, relevance/quality signals, dan eligibility. Bid lebih tinggi tidak otomatis menghasilkan outcome paling efisien.
2. **Q:** Apa perbedaan budget dan bid?
   **Expected answer in guide:** Budget mengatur atau membatasi spend pada periode dan level tertentu. Bid strategy memengaruhi cara platform bersaing di auction atau mengontrol target biaya/volume.
3. **Q:** Apakah ROAS 5x berarti profit 5x?
   **Expected answer in guide:** Tidak. Revenue ROAS adalah attributed revenue dibagi ad spend. Profit harus memperhitungkan margin serta biaya produk, fulfilment, diskon, fee, refund, dan biaya relevan lainnya.

**Glossary:** Auction: Mekanisme kompetisi platform untuk menentukan iklan eligible yang memperoleh kesempatan tampil.; Bid strategy: Aturan platform/advertiser untuk bidding atau optimasi biaya dan volume hasil.; Cost cap / target cost: Target pengendalian biaya menurut definisi platform; bukan jaminan setiap hasil tepat pada angka tersebut.; Pacing: Laju pengeluaran aktual dibandingkan rencana budget dan jadwal campaign.; Revenue ROAS: Attributed revenue dibagi ad spend; tidak sama dengan profit atau incrementality.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T05-CH07 - Pixel, CAPI, Events API, UTM & Tracking

- Track: paidsocial
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; agency evidence role-level only; high technical density (CAPI dedup, event QA) still awaits the flagged legacy content/answer-key pass
- Recommended remediation: SME-approve answer keys with platform-current checks; author chapter rubric + threshold; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T05-CH07 — Pixel, CAPI, Events API, UTM & Tracking

**Competency ID(s):** T05-C05

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; includes paid social on Meta/TikTok/LinkedIn alongside paid search/display. Adjacent cross-channel evidence; dedicated paid-social specialist scope not separately established. | A: Paid Social Specialist, Havas employer-hosted Workday JD; paid-social campaign management, audience segments, budgets, reporting and A/B testing. Geography/seniority must be confirmed from the complete source.

**Learning objective / concept:** Tracking menghubungkan interaksi iklan dengan tindakan di website/app. Browser Pixel mengirim event dari browser; Conversions API/Events API mengirim event melalui server atau koneksi data. Keduanya dapat saling melengkapi, tetapi tidak menghapus kewajiban consent, privacy, dan minimisasi data. Event design harus punya definisi bisnis, event name, waktu, value/currency, source, dan parameter yang diperlukan. Jika event yang sama dikirim melalui browser dan server, ikuti aturan deduplication provider. TikTok secara eksplisit meminta event_id yang sama pada event overlap dari Pixel dan Events API. UTM mengelompokkan traffic; UTM bukan pengganti event tracking.

**Simulated example:** KASUS SIMULASI — satu purchase website dikirim melalui browser Pixel dan server Events API. Jika keduanya mewakili transaksi yang sama tetapi memakai event ID berbeda, platform dapat membaca dua event. Jika event_id yang sama diteruskan pada kedua jalur sesuai aturan provider, sistem dapat mengenali duplikasi. Jangan menggunakan satu event_id statis untuk semua transaksi; identifier harus unik untuk setiap kejadian.

**Technical depth / workflow:**
- Definisikan event taxonomy. Petakan ViewContent, AddToCart, InitiateCheckout, Lead, dan Purchase. Setiap event membutuhkan trigger, owner, required parameters, dan kriteria validasi.
- Rancang event ID dan deduplication. Untuk event yang dikirim dari browser dan server, buat satu event_id unik per kejadian dan teruskan nilai yang identik di kedua jalur sesuai matching rules provider.
- Validasi payload. Periksa event name, event_id, event_time/timezone, value, currency, content IDs, source, consent signal, serta format parameter. Jangan mengirim password, data sensitif, atau PII yang tidak diizinkan.
- Bangun UTM taxonomy. Gunakan utm_source, utm_medium, utm_campaign, utm_content, dan utm_term secara konsisten. Hindari kapitalisasi/spasi acak, data pribadi, dan parameter yang merusak redirect.
- Lakukan end-to-end QA. Uji view, add-to-cart, checkout, purchase/lead; periksa Test Events/diagnostics, event count, deduplication, landing page, redirect, dan analytics attribution.

**Practice / deliverable:** Buat event map dan tracking QA sheet untuk website e-commerce fiktif. Kolom minimal: funnel stage, event name, trigger, event source, event_id rule, parameters, consent dependency, platform destination, dedup rule, UTM fields, test case, expected result, actual result, evidence, owner, dan defect severity. Sertakan satu tes duplicate browser/server dan expected count-nya. Tandai seluruh data sebagai SIMULATED.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa fungsi event_id saat event yang sama dikirim melalui browser dan server?
   **Expected answer in guide:** event_id yang cocok membantu platform mengenali dua kiriman sebagai satu kejadian dan melakukan deduplication sesuai ketentuan provider. TikTok secara eksplisit meminta event_id yang sama pada event overlap antara Pixel dan Events API.
2. **Q:** Apakah UTM dapat menggantikan Pixel atau Conversions API?
   **Expected answer in guide:** Tidak. UTM mengelompokkan traffic campaign pada analytics; Pixel/API mengirim event serta parameter tindakan ke platform iklan. Fungsinya berbeda.
3. **Q:** Apakah server-side tracking membuat consent tidak diperlukan?
   **Expected answer in guide:** Tidak. Pengiriman melalui server tidak menghapus kewajiban privacy, consent, legal basis, platform policy, atau data minimization.

**Glossary:** Pixel: Tag/library berbasis browser untuk mengirim event dari interaksi pengguna di browser.; Conversions API / Events API: Interface untuk mengirim event dan parameter dari sistem advertiser ke platform.; event_id: Identifier unik untuk satu kejadian, digunakan untuk menghubungkan atau menduplikasi salinan event dari beberapa jalur.; Event deduplication: Proses mengenali salinan event yang merepresentasikan satu conversion agar tidak dihitung ganda.; UTM: Parameter URL seperti utm_source dan utm_campaign untuk mengklasifikasikan traffic campaign di analytics.; Consent signal: Informasi izin atau pilihan pengguna yang mengatur apakah data boleh dikumpulkan atau dibagikan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T05-CH08 - Learning Phase, Pacing, Frequency & Troubleshooting

- Track: paidsocial
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; agency evidence role-level only; legacy-format flag
- Recommended remediation: SME-approve answer keys; author chapter rubric + threshold; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T05-CH08 — Learning Phase, Pacing, Frequency & Troubleshooting

**Competency ID(s):** T05-C06

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; includes paid social on Meta/TikTok/LinkedIn alongside paid search/display. Adjacent cross-channel evidence; dedicated paid-social specialist scope not separately established. | A: Paid Social Specialist, Havas employer-hosted Workday JD; paid-social campaign management, audience segments, budgets, reporting and A/B testing. Geography/seniority must be confirmed from the complete source.

**Learning objective / concept:** Learning phase adalah periode awal delivery saat sistem mengeksplorasi dan mengumpulkan signal untuk menemukan audience yang paling mungkin mencapai optimization goal. Performa dapat berfluktuasi; fluktuasi saja bukan bukti campaign gagal. Jangan menerapkan satu ambang untuk semua platform atau objective. Panduan umum TikTok yang diperbarui Juni 2026 menyebut volatilitas biasanya mulai menurun setelah sekitar 25 hasil campaign atau 7 hari. Angka tersebut bersifat indikatif, bukan jaminan status learning selesai. Guidance objective-specific dapat berbeda. Jangan menerapkan benchmark TikTok ke Meta.

**Simulated example:** KASUS SIMULASI — tiga hari pertama campaign Purchase menunjukkan CPA yang naik-turun. Operator kemudian menaikkan budget besar, mengganti audience, mengganti creative, dan mengubah event sekaligus. Setelah itu performa berubah, tetapi penyebabnya tidak dapat dipisahkan. Praktik yang lebih baik: catat baseline, periksa status learning, pastikan delivery dan tracking sehat, lalu lakukan satu perubahan material dengan hipotesis yang terdokumentasi.

**Technical depth / workflow:**
- Catat konteks dan status. Simpan launch date, objective, optimization event, budget/bid, audience, jumlah creative, serta learning/delivery status.
- Pisahkan volatility dari defect. Pastikan iklan benar-benar deliver, event diterima, landing page berfungsi, spend berjalan, approval valid, dan tracking tidak rusak.
- Diagnosis frequency dan fatigue. Tinjau frequency bersama reach, CPM, CTR, video retention, conversion rate, usia creative, dan perubahan audience—jangan menilai dari frequency saja.
- Gunakan change log. Catat perubahan budget, bid, audience, event, creative, atau struktur beserta timestamp, owner, hypothesis, expected impact, dan rollback condition.
- Optimalkan berdasarkan evidence. Hindari pause atau major edit berulang tanpa hipotesis. Gunakan guidance terbaru sesuai platform dan objective.

**Practice / deliverable:** Buat troubleshooting playbook untuk lima gejala: (1) spend tidak mulai, (2) CPM naik, (3) CTR turun, (4) frequency naik sementara conversion turun, dan (5) purchase/event tidak tercatat. Untuk setiap gejala tulis symptom, possible causes, diagnostic checks, evidence yang diperlukan, low-risk action pertama, escalation point, dan metric untuk memvalidasi perbaikan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apakah 25 hasil atau 7 hari menjamin campaign TikTok keluar dari learning phase?
   **Expected answer in guide:** Tidak. Panduan umum TikTok menyebut volatilitas biasanya mulai menurun pada kisaran tersebut. Itu indikator stabilisasi, bukan jaminan perubahan status untuk setiap objective, account, atau campaign.
2. **Q:** Bisakah benchmark learning TikTok diterapkan ke Meta?
   **Expected answer in guide:** Tidak. Sistem, signal, dan guidance kedua platform berbeda. Gunakan dokumentasi terkini sesuai platform dan optimization event yang dipakai.
3. **Q:** Mengapa mengubah budget, audience, creative, dan event sekaligus menyulitkan diagnosis?
   **Expected answer in guide:** Beberapa faktor berubah bersamaan sehingga efek masing-masing tidak bisa dipisahkan. Change log serta intervensi yang terkontrol membuat evaluasi lebih dapat dipercaya.

**Glossary:** Learning phase: Periode delivery ketika platform mengumpulkan signal untuk mengoptimalkan campaign ke goal yang dipilih.; Learning volatility: Fluktuasi performa ketika sistem masih mengeksplorasi; bukan otomatis bukti kegagalan campaign.; Creative fatigue: Penurunan respons ketika audience terlalu sering melihat asset serupa atau relevansi pesannya berkurang.; Pacing issue: Spend aktual terlalu cepat atau terlalu lambat dibandingkan rencana budget dan waktu campaign.; Change log: Catatan perubahan konfigurasi, owner, timestamp, hipotesis, serta hasil setelah perubahan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T05-CH09 - Creative Testing, Reporting & Performance Optimization

- Track: paidsocial
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; agency evidence role-level only; legacy-format flag
- Recommended remediation: SME-approve answer keys; author chapter rubric + threshold; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T05-CH09 — Creative Testing, Reporting & Performance Optimization

**Competency ID(s):** T05-C03, T05-C06

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; includes paid social on Meta/TikTok/LinkedIn alongside paid search/display. Adjacent cross-channel evidence; dedicated paid-social specialist scope not separately established. | A: Paid Social Specialist, Havas employer-hosted Workday JD; paid-social campaign management, audience segments, budgets, reporting and A/B testing. Geography/seniority must be confirmed from the complete source.

**Learning objective / concept:** Optimization harus dimulai dari business outcome lalu bergerak ke diagnosis, bukan dari satu metrik ke tindakan spontan. CTR, CPC, CPM, video views, dan frequency membantu menjelaskan delivery; conversion rate, CPA, revenue, margin, lead quality, dan retention lebih dekat dengan nilai bisnis. Creative testing yang baik menetapkan hypothesis, variabel utama, audience, budget, duration, primary metric, guardrail, dan decision rule sebelum test berjalan. A/B test sulit diinterpretasikan jika banyak variabel berubah sekaligus atau basis reporting tidak sebanding.

**Simulated example:** KASUS SIMULASI — dua creative masing-masing menghabiskan Rp1.500.000. Creative A menghasilkan 20 purchase dan revenue Rp3.000.000 (CPA Rp75.000; revenue ROAS 2,0x). Creative B menghasilkan 30 purchase dan revenue Rp4.500.000 (CPA Rp50.000; revenue ROAS 3,0x), walaupun CTR-nya lebih rendah. B tampak lebih kuat pada outcome simulasi, tetapi keputusan akhir tetap harus memeriksa margin, refund, konsistensi attribution, dan kecukupan volume untuk menarik kesimpulan.

**Technical depth / workflow:**
- Tetapkan hierarchy metrik. Mulai dari business outcome; tambahkan efficiency (CPA/ROAS), conversion quality, diagnostic (CTR/CPC/CPM/LPV), serta guardrail.
- Rancang test yang bisa dibaca. Tulis hypothesis, primary variable, control, treatment, randomization unit, audience, budget, duration, minimum evidence, dan stopping rule.
- Baca funnel per creative. Telusuri impression → click → landing-page view → conversion. Temukan drop-off, jangan berhenti pada CTR atau video views.
- Jaga comparability. Samakan attribution window, reporting timezone, conversion definition, spend period, eligibility audience, dan landing-page experience.
- Tulis keputusan beserta uncertainty. Catat winning hypothesis, limitation, dampak bisnis, next test, dan kebutuhan incrementality/holdout study.

**Practice / deliverable:** Gunakan dataset SIMULATED untuk dua atau tiga creative. Hitung CPM, CTR, CPC, landing-page-view rate, CVR, CPA, revenue, revenue ROAS, dan contribution setelah biaya iklan. Buat tabel atau chart, tunjukkan funnel drop-off, lalu berikan keputusan scale, iterate, hold, atau stop. Jelaskan mengapa attributed performance saja tidak cukup untuk mengklaim causal lift tanpa control/holdout atau desain kausal yang sesuai.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa creative dengan CTR lebih rendah masih dapat menang secara bisnis?
   **Expected answer in guide:** Creative tersebut mungkin membawa traffic lebih sedikit tetapi lebih berkualitas, sehingga conversion atau margin lebih baik. Evaluasi outcome, CPA, revenue/margin, dan kualitas lead/customer bersama CTR.
2. **Q:** Apa yang harus konsisten sebelum membandingkan dua creative?
   **Expected answer in guide:** Conversion definition, objective, audience eligibility, attribution window, reporting period, budget/exposure, landing-page experience, serta variabel yang diuji harus cukup sebanding.
3. **Q:** Apakah ROAS yang lebih tinggi otomatis membuktikan incrementality?
   **Expected answer in guide:** Tidak. ROAS menunjukkan attributed revenue per ad spend dalam setup measurement tertentu. Incrementality memerlukan counterfactual yang kredibel seperti holdout atau randomized experiment.

**Glossary:** Primary metric: Metrik utama untuk mengambil keputusan test dan harus ditentukan sebelum hasil dilihat.; Guardrail metric: Metrik penjaga agar peningkatan primary metric tidak merusak biaya, kualitas, margin, atau customer experience.; A/B test: Eksperimen terkontrol untuk membandingkan variasi dengan satu variabel utama yang terdefinisi.; Attribution window: Periode dan aturan yang digunakan platform untuk menghubungkan ad exposure/click dengan conversion.; Incrementality: Outcome tambahan yang disebabkan iklan dibandingkan counterfactual tanpa iklan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T05-CH10 - Paid Social Capstone

- Track: paidsocial
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=4, Deliverable=4, Resource/evidence quality=3, Assessment alignment=4
- Score (mean): 3.4 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Only T05 chapter with explicit scoring rule (0-3 per area, min 2, two areas >=3) yet answer keys remain OPEN; no chapter-level resource link; agency evidence role-level only
- Recommended remediation: SME-approve capstone answer keys; add chapter-level resources; replicate its explicit scoring rule in T06/T07/T08 capstones

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T05-CH10 — Paid Social Capstone

**Competency ID(s):** T05-C06

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; includes paid social on Meta/TikTok/LinkedIn alongside paid search/display. Adjacent cross-channel evidence; dedicated paid-social specialist scope not separately established. | A: Paid Social Specialist, Havas employer-hosted Workday JD; paid-social campaign management, audience segments, budgets, reporting and A/B testing. Geography/seniority must be confirmed from the complete source.

**Learning objective / concept:** Capstone menguji kemampuan menghubungkan business brief sampai rekomendasi optimization yang dapat dipertanggungjawabkan. Satu paket kerja harus menunjukkan commercial guardrails, objective, audience, campaign architecture per platform, creative strategy, budget/bidding, tracking, QA, reporting, serta decision log. Meta dan TikTok menjadi scope inti; TikTok Shop/Lead Gen dan LinkedIn ditambahkan bila conversion path serta business case mendukung. Angka contoh tanpa data advertiser wajib diberi label SIMULATED.

**Simulated example:** KASUS SIMULASI — brand consumer Indonesia menyiapkan campaign website-purchase selama 30 hari dengan budget hipotetis Rp30 juta. Brief mencantumkan AOV, contribution margin, target order, dan batas stok. Rencana harus menjelaskan pembagian budget, pilihan objective/event, creative test, deduplication event, monitoring, serta kapan keputusan perubahan dilakukan. Forecast tidak boleh disajikan sebagai hasil aktual.

**Technical depth / workflow:**
- Brief dan economics. Restate problem, audience, product readiness, AOV, margin, allowable CPA, revenue ROAS target, budget, periode, stok, dan constraints; beri label pada setiap asumsi.
- Strategy dan architecture. Tetapkan peran Meta/TikTok, objective, conversion location, optimization event, naming, campaign/ad set/ad group/ad structure, audience, placements, budget level, dan bid strategy.
- Creative dan experiment. Siapkan angle/hook matrix, adaptasi format platform, creator rights, policy check, test hypothesis, control/treatment, primary metric, guardrail, dan stopping rule.
- Measurement dan QA. Sertakan event map, Pixel/CAPI atau Pixel/Events API plan, event_id/deduplication, consent controls, UTM taxonomy, test-event evidence, link/redirect checks, serta launch sign-off.
- Reporting dan optimization. Siapkan pacing sheet dan weekly report; analisis funnel, efficiency, creative, audience, frequency, dan data quality; pertanggungjawabkan keputusan scale/iterate/hold/stop.
- Handover dan learning. Kemas source file, assumptions, version, owner, unresolved risks, serta next experiment agar pekerjaan dapat direplikasi specialist lain.

**Practice / deliverable:** Susun satu capstone folder berisi: (1) brief restatement dan unit economics, (2) platform role/objective decision, (3) Meta dan TikTok architecture, (4) audience matrix, (5) creative strategy dan test matrix, (6) budget/bid/pacing sheet, (7) event map + UTM + deduplication plan, (8) pre-launch QA checklist, (9) weekly report memakai data SIMULATED, dan (10) optimization memo. Presentasikan keputusan dalam 8–10 slide. Beri skor 0–3 untuk business logic, platform setup, creative/testing, tracking/QA, commercial analysis, dan evidence/limitations. Setiap area harus minimal 2; setidaknya dua area harus mendapat 3 sebelum pekerjaan disebut portfolio-ready.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa yang membedakan capstone portfolio-ready dari campaign mock-up biasa?
   **Expected answer in guide:** Ada alur yang dapat ditelusuri dari brief dan unit economics ke objective, audience, structure, creative, budget, tracking, QA, hasil, serta keputusan. File dapat direplikasi dan semua asumsi/data diberi label dengan jujur.
2. **Q:** Bagaimana data performa sintetis harus ditampilkan?
   **Expected answer in guide:** Beri label SIMULATED pada setiap tabel/chart, jelaskan cara pembuatannya, dan jangan menyebutnya hasil campaign aktual atau client work.
3. **Q:** Apa saja yang harus ada dalam optimization memo?
   **Expected answer in guide:** Keputusan, evidence, perbandingan KPI dengan target, diagnosis, risk/limitation, owner, timeline, dan next test yang spesifik.

**Glossary:** Campaign launch plan: Paket pra-launch yang mencakup objective, structure, budget, creative, tracking, QA, serta approval.; Optimization memo: Dokumen keputusan pasca-analisis yang menghubungkan evidence dengan tindakan, alasan, risiko, dan eksperimen berikutnya.; SIMULATED: Label eksplisit bahwa angka atau outcome dibuat untuk latihan, bukan performa advertiser aktual.; Portfolio-ready: Kualitas pekerjaan yang dapat dijelaskan, direplikasi, diperiksa, serta menyertakan keputusan dan limitation secara jujur.; Handover: Penyerahan file, konteks, ID, ownership, status, change log, dan isu yang belum selesai kepada owner berikutnya.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH01 - Programmatic Ecosystem: DSP, SSP, Exchange & Ad Server

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Verbatim spot-check vs role-study-guides-part1.js ~lines 150-250 incl. glossary block (Auditor B): match 1:1.
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; heavy English code-switching inside Indonesian content (workflow bullets and Q&A answers mix full English sentences); agency evidence role-level only (Dentsu evidence from Lisbon-market JD); T06 mapping secondary label 'IAB Tech Lab foundational standards' points to https://www.stackadapt.com/academy/programmatic-masterclass
- Recommended remediation: SME-approve answer keys; author chapter rubric + threshold; harmonize language to Indonesian; fix T06 mapping label-URL pairing

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH01 — Programmatic Ecosystem: DSP, SSP, Exchange & Ad Server

**Competency ID(s):** T06-C01

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Programmatic adalah pembelian inventory digital melalui platform dan automation, bukan nama lain untuk semua paid media. Ekosistem mencakup advertiser/agency, DSP, ad exchange, SSP, publisher/ad server, data/identity partners, dan verification. Setiap pihak memiliki peran dalam auction, targeting, delivery, measurement, dan biaya. Trader harus memahami supply chain untuk membaca fees, latency, quality, transparency, dan accountability.

**Simulated example:** SIMULATED — advertiser membeli 10 juta impressions melalui DSP. Bid request melewati exchange dan SSP sebelum publisher ad server; beberapa intermediary menambah fee dan memengaruhi latency. Trader harus mengetahui supply path dan net media cost, bukan hanya CPM di UI DSP.

**Technical depth / workflow:**
- Gambar supply chain. Petakan advertiser, agency, DSP, exchange, SSP, publisher, ad server, data, measurement, dan billing.
- Bedakan ownership. Tandai siapa mengelola demand, supply, auction, creative, identity, dan measurement.
- Map cost path. Pisahkan media cost, platform fee, data fee, verification, agency fee, dan publisher take rate.
- Hubungkan ke workflow. Ikuti brief hingga setup, auction, delivery, QA, report, dan invoice.

**Practice / deliverable:** Buat programmatic ecosystem diagram dan cost-flow workbook untuk satu campaign. Sertakan owner, object, data/signal, fee layer, risk, dan kontrol pada setiap node.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa perbedaan DSP dan SSP?
   **Expected answer in guide:** DSP membantu advertiser membeli inventory; SSP membantu publisher mengelola dan menjual inventory.
2. **Q:** Mengapa programmatic tidak sama dengan paid social?
   **Expected answer in guide:** Programmatic membeli inventory lintas publisher melalui DSP/exchange; paid social berjalan pada platform social dengan inventory/audience system masing-masing.
3. **Q:** Mengapa supply-chain transparency penting?
   **Expected answer in guide:** Intermediary fees, reselling, unauthorized supply, dan poor-quality inventory dapat mengurangi net value dan accountability.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH02 - Auction Mechanics, OpenRTB & Supply Path

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Guide-object spot-check vs role-study-guides-part1.js (Auditor B): match; CH02 Q1 flagged as glossary restatement.
- Auditor-flagged defects: Q1 'Apa itu bid floor?' merely restates glossary and matches the tech-review flag of short answer pairs; answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; EN code-switching; role-level evidence only; mapping mislabel as in CH01
- Recommended remediation: Replace definitional Q1 with an applied auction-diagnosis item; SME-approve keys; author rubric; fix mapping label-URL

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH02 — Auction Mechanics, OpenRTB & Supply Path

**Competency ID(s):** T06-C01

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** OpenRTB dan auction mechanics menjelaskan bagaimana bid request, impression opportunity, buyer response, price, dan creative diproses. Supply path menentukan rantai pihak yang terlibat dari publisher menuju DSP. Trader perlu memahami auction type, bid floor, timeout, win rate, clearing dynamics, deal identifiers, reseller, dan ads.txt/sellers.json sebagai sinyal otorisasi. Tidak semua mekanisme lelang bersifat first-price dengan implementasi identik.

**Simulated example:** SIMULATED — bid request tidak menghasilkan response karena timeout dan mismatch format. Campaign underspends meski bid tinggi. Diagnosis harus memeriksa deal eligibility, bid floor, supply path, creative spec, latency, dan targeting.

**Technical depth / workflow:**
- Pelajari request-response. Identifikasi impression, bid request, seat, device, user/context signals, bid response, creative, dan win/loss.
- Bedakan auction/deal. Pahami open auction, private auction/PMP, preferred deal, dan programmatic guaranteed.
- Audit supply path. Periksa seller authorization, direct/reseller, fees, duplicates, and inventory origin.
- Diagnosis auction. Analisis floor, timeout, bid rate, win rate, clearing price, and eligibility.

**Practice / deliverable:** Buat bid-flow diagram dan supply-path audit untuk dua inventory scenarios. Isi request signals, eligibility, auction/deal type, fee layers, authorized sellers checks, timeout risk, dan optimization actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa itu bid floor?
   **Expected answer in guide:** Harga minimum yang disyaratkan supply side untuk eligible impression/deal.
2. **Q:** Apa fungsi ads.txt dan sellers.json?
   **Expected answer in guide:** Membantu transparansi dan otorisasi penjual inventory, tetapi tidak sendirian menjamin kualitas.
3. **Q:** Mengapa bid tinggi tidak menjamin win?
   **Expected answer in guide:** Eligibility, deal rules, timeout, floor, auction competition, creative compatibility, dan supply signals juga menentukan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH03 - Audience, Data Strategy, Identity & Privacy

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Guide-object spot-check vs role-study-guides-part1.js (Auditor B): match.
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; EN code-switching; role-level evidence only; no Indonesia-specific identity/consent context despite regulatory relevance
- Recommended remediation: SME-approve answer keys; author rubric; add Indonesia consent/identity regulatory context and chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH03 — Audience, Data Strategy, Identity & Privacy

**Competency ID(s):** T06-C02

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Audience strategy programmatic menggabungkan first-party data, contextual, publisher segments, third-party data, identity solutions, dan privacy/consent. Audience targeting harus sesuai objective dan data rights. Cookie deprecation, browser restrictions, consent, match rates, data provenance, and identity interoperability dapat memengaruhi scale serta accuracy. Contextual targeting tidak sama dengan behavioral identity targeting.

**Simulated example:** SIMULATED — audience CRM seed match 35% pada DSP. Angka ini tidak berarti 65% audience tidak relevan; identity graph, formatting, consent, and addressability membatasi match. Tim perlu membandingkan contextual alternative dan reach loss.

**Technical depth / workflow:**
- Definisikan audience use case. Akuisisi, prospecting, suppression, retargeting, contextual reach, atau frequency control.
- Audit data provenance. Catat source, consent, collection purpose, freshness, match method, geography, and usage rights.
- Nilai identity coverage. Periksa match rate, device coverage, duplication, exclusions, and loss of addressability.
- Rancang privacy-safe alternatives. Gunakan contextual, publisher first-party, cohort/aggregate, and modeled signals sesuai policy.

**Practice / deliverable:** Buat audience decision matrix: first-party, contextual, publisher, and third-party options. Sertakan reach/match assumption, consent basis, quality risks, freshness, cost, and use-case fit.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa beda first-party audience dan third-party data?
   **Expected answer in guide:** First-party berasal dari hubungan/interaksi langsung organisasi; third-party diperoleh dari sumber/pihak eksternal dengan ketentuan penggunaan.
2. **Q:** Mengapa match rate bukan audience quality?
   **Expected answer in guide:** Match rate hanya menunjukkan keberhasilan matching; tidak membuktikan intent, freshness, identity accuracy, atau conversion likelihood.
3. **Q:** Kapan contextual targeting lebih tepat?
   **Expected answer in guide:** Ketika page/content context relevan dan identity/consent constraints membatasi behavioral targeting, dengan QA brand suitability.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH04 - Inventory, Formats & Deal Types

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Guide-object spot-check vs role-study-guides-part1.js (Auditor B): match.
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; EN code-switching; role-level evidence only; some deal-type overlap with CH08 (PMP/PG introduced twice)
- Recommended remediation: SME-approve answer keys; author rubric; slim deal-type overlap with CH08; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH04 — Inventory, Formats & Deal Types

**Competency ID(s):** T06-C03

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Inventory mencakup format, device, environment, publisher, geo, audience, placement, viewability, fraud risk, and suitability. Deal types memberi tingkat kontrol dan komitmen berbeda. Trader perlu menilai inventory fit, scale, measurement eligibility, creative constraints, and cost. CTV, audio, video, display, native, in-app, DOOH, and mobile web memiliki kebutuhan asset, verification, and measurement berbeda.

**Simulated example:** SIMULATED — brand finance tidak cocok ditempatkan pada open exchange tanpa context controls; premium finance publisher memberikan relevansi lebih baik tetapi scale lebih kecil. Mix dapat menggabungkan contextual/PMP dengan open auction yang diverifikasi.

**Technical depth / workflow:**
- Klasifikasikan inventory. Map format, device, environment, publisher, geography, placement, and audience.
- Nilai suitability. Periksa brand safety, category exclusions, content adjacency, IVT, viewability, and transparency.
- Pilih deal type. Cocokkan reach/control/price/guarantee dengan campaign goal.
- Validasi creative compatibility. Cek dimensions, ratio, duration, codec, click behavior, audio, and fallback.

**Practice / deliverable:** Buat inventory matrix minimal enam opsi (display, video, CTV, audio, native, in-app atau DOOH) dengan format specs, deal type, audience, quality checks, cost assumptions, and use-case rationale.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa beda brand safety dan brand suitability?
   **Expected answer in guide:** Safety menghindari konten yang jelas berbahaya; suitability menilai kesesuaian konteks dengan brand/category tolerance.
2. **Q:** Apa perbedaan PMP dan programmatic guaranteed?
   **Expected answer in guide:** PMP biasanya private auction access; programmatic guaranteed memiliki komitmen inventory/price/delivery yang disepakati.
3. **Q:** Mengapa format harus divalidasi sebelum buying?
   **Expected answer in guide:** Format incompatibility dapat menyebabkan rejection, rendering error, underdelivery, atau pengalaman iklan buruk.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH05 - DSP Architecture & Platform Navigation

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; EN code-switching; role-level evidence only; concept-vs-credential distinction explicit (good) but no live-seat caveat documented as policy
- Recommended remediation: SME-approve answer keys; author rubric; document seat/credential policy; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH05 — DSP Architecture & Platform Navigation

**Competency ID(s):** T06-C01, T06-C04

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** DSP navigation dimulai dengan memahami hirarki advertiser, campaign, insertion order/order, line item, targeting, creative, budget, flight, frequency, and optimization. Nomenclature antar-DSP berbeda; prinsip dasarnya tetap sama. DV360 menjadi platform utama belajar di roadmap, sedangkan The Trade Desk dan Amazon DSP dibandingkan pada capability serta inventory ecosystem. Tool access bergantung pada organisasi/partner dan tidak boleh dijanjikan hanya dari kursus.

**Simulated example:** SIMULATED — trader membuat line item dengan wrong exchange/format targeting sehingga budget tidak deliver. Setup perlu dikontrol melalui campaign map, naming, deal/creative compatibility, audience, and QA before activation.

**Technical depth / workflow:**
- Kenali hierarchy. Petakan advertiser/campaign/order/line item/creative/deal sesuai platform.
- Konfigurasi campaign. Set objective, flight, budget, bid, geo, audience, frequency, inventory, and conversion signals.
- Kelola naming dan permissions. Gunakan taxonomy, role access, approval, and change log.
- Verifikasi platform access. Bedakan credential, demo/sandbox, partner seat, managed access, dan live buying permissions.

**Practice / deliverable:** Buat DSP setup workbook untuk satu campaign: object hierarchy, naming, budgets, bids, audiences, inventory/deals, creatives, tracking, permissions, launch checklist, and monitoring cadence.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa platform interface skills tidak cukup?
   **Expected answer in guide:** Trader harus memahami auction, supply, data, economics, verification, measurement, dan troubleshooting di balik kontrol UI.
2. **Q:** Apa beda line item dengan creative?
   **Expected answer in guide:** Line item mengatur delivery, targeting, bid, budget, dan schedule; creative adalah asset yang ditayangkan.
3. **Q:** Apakah sertifikasi DV360 otomatis memberi akses live seat?
   **Expected answer in guide:** Tidak. Learning credential dan akses akun/seat dikendalikan organisasi/partner dan ketentuan platform.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH06 - Campaign Structure, Trafficking & Creative Setup

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; EN code-switching; role-level evidence only
- Recommended remediation: SME-approve answer keys; author rubric; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH06 — Campaign Structure, Trafficking & Creative Setup

**Competency ID(s):** T06-C04

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Campaign setup/trafficking memastikan plan dapat diterjemahkan menjadi objek dan creative yang siap diperdagangkan. Brief, naming, IO/line item, deal IDs, audience, creative spec, click URL, trackers, macros, event tags, and approvals harus sinkron. Trafficking berbeda dari media strategy: tugasnya menjaga akurasi konfigurasi dan bukti QA, bukan menentukan seluruh business strategy.

**Simulated example:** SIMULATED — deal ID aktif tetapi creative tidak memenuhi format/SSL dan click macro salah. Campaign terlihat configured tetapi tidak eligible atau salah mengarahkan traffic. Pre-launch QA harus menguji actual rendering dan click path.

**Technical depth / workflow:**
- Terima final brief. Cocokkan plan, targeting, format, dates, budget, KPI, owner, and approval.
- Bangun trafficking map. Hubungkan campaign/line item/deal/creative/tracker/landing page secara konsisten.
- Validasi spec dan macros. Periksa dimensions, VAST/HTML5, SSL, click/impression trackers, URL encoding, and fallbacks.
- Jalankan end-to-end QA. Simulasikan ad request, landing page, event firing, and platform acceptance.

**Practice / deliverable:** Buat trafficking sheet, creative spec matrix, macro/URL map, tag map, deal checklist, and QA evidence for one synthetic DSP campaign.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa risiko click macro salah?
   **Expected answer in guide:** Click-through dapat hilang, salah redirect, mengganggu billing atau memutus measurement.
2. **Q:** Mengapa trafficking sheet menjadi single source of truth?
   **Expected answer in guide:** Sheet mengikat object, tag, date, budget, creative, owner, approval, dan status untuk mencegah konfigurasi berbeda.
3. **Q:** Apa bukti QA selain upload success?
   **Expected answer in guide:** Preview/render evidence, click test, landing validation, tracking test, policy/approval, and sign-off.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH07 - Bidding, Budget, Pacing & Frequency Management

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; EN code-switching; role-level evidence only
- Recommended remediation: SME-approve answer keys; author rubric; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH07 — Bidding, Budget, Pacing & Frequency Management

**Competency ID(s):** T06-C05, T06-C07

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Bidding, budget, pacing, and frequency management mengontrol delivery dalam batas economics dan campaign objective. Pahami bid strategy, auction pressure, bid shading where relevant, win rate, clearing price, pacing algorithm, frequency caps, reach, and spend curve. Jangan mengubah bid/budget tanpa memeriksa inventory, audience, floor, conversion signals, and campaign stage. Platform automation berbeda sehingga jangan menganggap satu setting berlaku sama di seluruh DSP.

**Simulated example:** SIMULATED — campaign spend hanya 40% dari budget setelah 3 hari. Peningkatan bid mungkin membantu bila lost auctions karena price, tetapi tidak bila deal not eligible, creative rejected, audience terlalu sempit, atau supply timeout.

**Technical depth / workflow:**
- Establish pacing baseline. Bandingkan budget, elapsed flight, planned spend curve, actual spend, impressions, and outcome.
- Diagnose delivery. Pisahkan price, inventory, audience, creative, deal, bid request, tracking, and approval issues.
- Optimize frequency. Nilai unique reach, average frequency, segment saturation, and cross-device duplication.
- Control changes. Catat bid/budget changes, rationale, observation window, guardrails, and rollback criteria.

**Practice / deliverable:** Buat pacing simulator harian dengan planned vs actual spend, bid, win rate, CPM, frequency, reach, and outcomes. Simulasikan underdelivery, overspend, and fatigue; dokumentasikan root-cause decisions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa menaikkan bid tidak selalu menyelesaikan underspend?
   **Expected answer in guide:** Inventory eligibility, targeting, deal/creative issues, supply, and timeouts dapat menjadi bottleneck selain bid.
2. **Q:** Apa risiko frequency terlalu tinggi?
   **Expected answer in guide:** Waste, fatigue, negative experience, and diminishing incremental reach.
3. **Q:** Apa beda average CPM dan clearing price?
   **Expected answer in guide:** Average CPM merangkum biaya hasil delivery; clearing price adalah harga auction pada impression tertentu/menurut mekanisme platform.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH08 - PMP, Preferred Deals & Programmatic Guaranteed

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; EN code-switching; role-level evidence only; Rp45.000 floor CPM example correctly labeled SIMULATED
- Recommended remediation: SME-approve answer keys; author rubric; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH08 — PMP, Preferred Deals & Programmatic Guaranteed

**Competency ID(s):** T06-C03

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** PMP, Preferred Deals, dan Programmatic Guaranteed mengubah cara advertiser mengakses publisher inventory dan menyepakati harga/delivery. Setiap deal memiliki buyer/seller IDs, deal ID, floor/fixed price, targeting, dates, format, priority, inventory scope, and delivery terms. Trader wajib menguji compatibility dan memahami apakah deal bersifat invitation, non-guaranteed, atau guaranteed; label platform dapat berbeda.

**Simulated example:** SIMULATED — publisher menawarkan PMP dengan floor CPM Rp45.000 dan forecast 2 juta impressions. Campaign mengaktifkan deal ID, tetapi buyer menggunakan seat yang salah. Tidak ada delivery meski bid kompetitif; deal ID/seat mapping harus di-verify.

**Technical depth / workflow:**
- Bandingkan deal type. Pelajari access, auction, price, inventory commitment, priority, and delivery guarantee.
- Negosiasikan scope. Tetapkan format, audience, geo, floor/price, dates, volume, reporting, and cancellation/makegood terms.
- QA deal activation. Verifikasi buyer seat, seller, deal ID, line item, targeting, creative, and inventory eligibility.
- Monitor deal delivery. Pantau bid requests, matches, wins, spend, quality, and underdelivery.

**Practice / deliverable:** Buat deal negotiation matrix dan activation checklist untuk PMP, Preferred, dan PG. Isikan seller/buyer seat, deal ID, floor/price, volume, formats, dates, targeting, guarantee, QA, and delivery escalation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa beda preferred deal dan PMP auction?
   **Expected answer in guide:** Preferred biasanya memberi akses/first look dengan harga tertentu tanpa guarantee; PMP umumnya private auction dengan buyers invited, terms platform-specific.
2. **Q:** Apa yang perlu dikonfirmasi sebelum PG?
   **Expected answer in guide:** Volume, dates, price, inventory, priority, format, audience, guarantee, makegood, cancellation, and measurement terms.
3. **Q:** Mengapa deal ID perlu di-test?
   **Expected answer in guide:** Deal dapat gagal karena seat/seller mismatch, targeting, format, dates, price, atau line-item setup.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH09 - Brand Safety, Viewability, IVT & Supply Quality

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; EN code-switching; role-level evidence only; no Indonesia/SEA verification vendor context
- Recommended remediation: SME-approve answer keys; author rubric; add regional verification context; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH09 — Brand Safety, Viewability, IVT & Supply Quality

**Competency ID(s):** T06-C06

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Brand safety, suitability, viewability, invalid traffic, and supply quality adalah dimensi berbeda. Brand safety menghindari konten berisiko; suitability mencocokkan toleransi brand; viewability mengukur apakah iklan memenuhi kriteria terlihat; IVT mengidentifikasi traffic tidak valid; supply quality menilai transparency, duplication, fees, and publisher quality. Vendor verification memiliki methodology/coverage yang harus dipahami.

**Simulated example:** SIMULATED — report menunjukkan 70% viewable impressions, tetapi 8% IVT dan beberapa placement melanggar suitability. Viewability tinggi tidak membuat campaign aman atau efektif; metrics harus dibaca bersama dan coverage dilaporkan.

**Technical depth / workflow:**
- Definisikan metrics. Catat viewability standard, eligible/measured impressions, IVT definitions, brand-safety taxonomy, and exclusions.
- Set controls. Gunakan inclusion/exclusion lists, category/content controls, seller transparency, and verification partners.
- Audit supply quality. Periksa domain/app, ads.txt/sellers.json, reseller paths, fees, duplication, and reporting gaps.
- Interpret coverage. Pisahkan unmeasured from failed, disclose vendor coverage, and escalate anomalies.

**Practice / deliverable:** Buat supply-quality scorecard untuk 10 inventory sources: brand safety, suitability, viewability, IVT, seller authorization, fees, transparency, data coverage, and remediation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa beda viewability dengan attention?
   **Expected answer in guide:** Viewability mengukur peluang terlihat menurut standard; attention mengukur engagement/notice lebih jauh dan memerlukan metode berbeda.
2. **Q:** Mengapa unmeasured impression bukan otomatis failure?
   **Expected answer in guide:** Sebagian inventory tidak terukur karena coverage/technical limits; laporkan sebagai unmeasured terpisah dari non-viewable.
3. **Q:** Apakah ads.txt menjamin inventory aman?
   **Expected answer in guide:** Tidak. Ia membantu mengidentifikasi authorized sellers, tetapi fraud/suitability/viewability tetap membutuhkan controls lain.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH10 - CM360, Floodlight, Attribution & Measurement

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; EN code-switching; role-level evidence only
- Recommended remediation: SME-approve answer keys; author rubric; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH10 — CM360, Floodlight, Attribution & Measurement

**Competency ID(s):** T06-C01, T06-C06

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** CM360 dan Floodlight memiliki peran ad-serving dan measurement yang perlu dibedakan dari DSP reporting. CM360 mengelola advertiser/campaign/site/placement/ad/creative/trackers; Floodlight mengukur activities/conversions menurut counting method, attribution, and window. Discrepancy antara DSP, CM360, dan analytics sering muncul dari event definition, time zone, click/view windows, deduplication, redirects, latency, and consent.

**Simulated example:** SIMULATED — DSP mencatat 900 conversions, CM360 760 Floodlight activities, GA4 620 purchases. Angka tidak dapat dibandingkan sebelum unit event, window, dedupe, timezone, consent, and transaction IDs disejajarkan.

**Technical depth / workflow:**
- Map tracking roles. Bedakan impression/click trackers, ad server, Floodlight activity, GA4 events, pixel/CAPI, and UTM.
- Define conversion. Tentukan activity type, counting method, value, window, deduplication, and source of truth.
- QA integration. Test tags, redirects, macros, event IDs, consent states, and platform logs.
- Reconcile discrepancy. Align timezone/cutoff/window, compare eligible events, and document residual difference.

**Practice / deliverable:** Buat measurement architecture diagram dan discrepancy reconciliation workbook yang membandingkan DSP, CM360/Floodlight, dan GA4. Include event mapping, window, timezone, dedupe, consent, and limits.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa beda ad server dengan DSP?
   **Expected answer in guide:** Ad server mengelola ad decisioning/delivery/tracking; DSP mengelola buying/auction/targeting di inventory.
2. **Q:** Mengapa Floodlight counts dapat berbeda dengan GA4 purchase?
   **Expected answer in guide:** Counting method, attribution, time zone, identity, consent, deduplication, event definition, and processing berbeda.
3. **Q:** Mengapa UTM bukan pengganti Floodlight?
   **Expected answer in guide:** UTM memberi label campaign pada session/source; Floodlight merekam conversion activity sesuai setup measurement.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH11 - Optimization, Reporting & Post-Campaign Analysis

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=3, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.0 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Answer keys OPEN; no chapter-level resource link; chapter pass threshold not authored; EN code-switching; role-level evidence only
- Recommended remediation: SME-approve answer keys; author rubric; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH11 — Optimization, Reporting & Post-Campaign Analysis

**Competency ID(s):** T06-C07

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Optimization dan post-campaign review mengevaluasi bukan hanya ROAS, tetapi delivery, supply quality, reach, frequency, margin, partner fees, audience, format, and incrementality limits. Report harus menjelaskan apa yang terjadi, mengapa diduga terjadi, bukti pendukung, alternatif penjelasan, dan tindakan berikutnya. Programmatic trader menjaga traceability perubahan agar learning dapat direplikasi.

**Simulated example:** SIMULATED — open auction memberikan CPM rendah tetapi IVT tinggi dan conversion quality rendah; PMP lebih mahal tetapi engagement dan incrementality test lebih baik. Keputusan mengubah mix harus membandingkan net cost dan kualitas outcome.

**Technical depth / workflow:**
- Read performance by dimension. Slice by DSP, deal, publisher, placement, format, audience, device, geo, and creative.
- Separate delivery and outcome. Reconcile spend/impressions with viewability, IVT, reach, conversions, and contribution.
- Generate hypotheses. Distinguish evidence, interpretation, confidence, and alternative cause.
- Recommend optimizations. Set action, expected mechanism, budget impact, guardrail, owner, and review date.

**Practice / deliverable:** Buat post-campaign report dan supply evaluation: delivery, spend, CPM, reach/frequency, viewability, IVT, deal quality, discrepancy, outcome, optimization changes, and next test agenda. Labeli data SYNTHETIC.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa CPM tidak boleh menjadi satu-satunya optimization target?
   **Expected answer in guide:** Ia mengabaikan inventory quality, fraud, reach, outcomes, fees, and contribution.
2. **Q:** Apa hubungan optimization log dengan repeatability?
   **Expected answer in guide:** Log mencatat perubahan, alasan, dan hasil sehingga learning bisa direplikasi dan tim tidak mengulang kesalahan.
3. **Q:** Apa batas ROAS platform dalam menilai programmatic?
   **Expected answer in guide:** Attribution platform tidak otomatis mengukur causal impact, overlap, fee, margin, atau long-term value.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>

### DPA-T06-CH12 - Programmatic Capstone

- Track: programmatic
- Desk-review dimensions (0-4): Instructional substance=3, Competency alignment=3, Technical accuracy=3, Practical exercise=3, Deliverable=4, Resource/evidence quality=3, Assessment alignment=3
- Score (mean): 3.1 - Status: **VALIDATED WITH MINOR IMPROVEMENTS** (agent desk-review, not SME approval)
- Guide-source verification: Register-only desk review for this chapter; same-track spot-checks confirmed register-to-guide fidelity (see track notes above).
- Auditor-flagged defects: Deliverable pack comprehensive (10 artifacts) but lacks explicit scoring thresholds unlike T05-CH10; answer keys OPEN; no chapter-level resource link; EN code-switching; role-level evidence only
- Recommended remediation: Author explicit capstone scoring rule mirroring T05-CH10; SME-approve keys; add chapter-level resources

<details><summary>Full evidence-register block (verbatim from docs/169-chapter-evidence-register.md, PR #5 snapshot)</summary>

```
### DPA-T06-CH12 — Programmatic Capstone

**Competency ID(s):** T06-C01, T06-C03, T06-C06, T06-C07

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Capstone Programmatic menguji pemahaman supply chain hingga measurement, bukan hanya navigasi DSP. Paket kerja harus menghubungkan objective, audience, inventory/deal strategy, DSP setup, creative/trafficking, bidding/pacing, verification, CM360/Floodlight, discrepancy, dan reporting. Seluruh account/campaign/auction figures yang tidak berasal dari live account diberi label SIMULATED. Akses credential tidak berarti peserta memiliki live buying seat.

**Simulated example:** SIMULATED — brand e-commerce ingin reach dan qualified purchase di Indonesia. Capstone menyusun mix open auction, PMP, dan retail data signals, tetapi menguji inventory quality, tracking, conversion quality, dan cost path sebelum merekomendasikan scale.

**Technical depth / workflow:**
- Design strategy. Tetapkan audience, objective, channel role, inventory, deal, and success metrics.
- Build and QA. Rancang DSP hierarchy, line items, creatives, tags, tracking, and launch checks.
- Trade and monitor. Simulasikan bid/pacing/frequency/quality issues dan change log.
- Measure and defend. Rekonsiliasi data, jelaskan limitations, lalu rekomendasikan next investment.

**Practice / deliverable:** Siapkan DSP campaign blueprint, supply-chain diagram, audience/data matrix, deal matrix, trafficking sheet, bidding/pacing simulator, verification scorecard, CM360/Floodlight measurement spec, discrepancy log, dan executive trading recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa yang harus bisa dijelaskan dalam programmatic capstone?
   **Expected answer in guide:** Mengapa supply/channel/deal dipilih, bagaimana buying berjalan, bagaimana kualitas dijaga, dan bagaimana hasil diukur.
2. **Q:** Apa batas latihan dengan synthetic data?
   **Expected answer in guide:** Ia membuktikan workflow, logic, and analysis—not live campaign performance, spend, platform access, or client results.
3. **Q:** Bagaimana menilai programmatic inventory yang terlihat murah?
   **Expected answer in guide:** Cek net fees, authorized sellers, quality, viewability, IVT, audience, outcome, and incremental value.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

```

</details>