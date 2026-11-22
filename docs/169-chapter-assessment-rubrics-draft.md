# 169 Chapter Assessment Rubrics — Draft v1

**Date:** 4 November 2026  
**Branch:** `audit/align-all-16-track-learning-modules`  
**Status:** 169 chapter-specific rubric drafts generated from actual chapter learning objectives and practice prompts. This is an authored assessment baseline, not SME-approved scoring.  
**Canonical Source of Truth:** [16-track Source of Truth](16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt)

## Scoring standard

Each chapter uses five dimensions scored 0–3 (maximum 15), converted to 100 points by `raw score / 15 × 100`. Proposed internal pass mark: **80/100**, with no critical failure in technical accuracy or evidence integrity. This is a roadmap assessment rule, not a vendor certification rule.

| Dimension | 0 — Not demonstrated | 1 — Weak | 2 — Competent | 3 — Strong |
|---|---|---|---|---|
| Technical accuracy | Materially incorrect, unsafe, or invalid method | Multiple errors or important omissions | Correct core method with minor omissions | Correct, precise, appropriately qualified and reproducible |
| Deliverable completeness | Missing/unusable artifact | Partial artifact; key required fields absent | All core required elements present | Complete, organized, reusable and fit for stated decision |
| Analysis and judgement | No defensible reasoning | Descriptive only; assumptions hidden | Reasoning links evidence to recommendation | Strong diagnosis, alternatives, trade-offs, limitations and next steps |
| Evidence, QA and governance | Fabricated/unsupported claims or no QA | Sources/assumptions weak; QA incomplete | Evidence and QA traceable; assumptions labelled | Reproducible evidence trail, robust checks, risk and governance controls |
| Communication and handoff | Cannot be understood or acted on | Ambiguous, poorly structured | Clear and actionable | Executive-ready, concise, transparent and actionable for next owner |

**Critical-failure rule:** score 0 on Technical accuracy or Evidence/QA and the chapter is failed regardless of numeric total. Examples include fabricated campaign outcomes, invalid calculations that change the recommendation, privacy/policy violations, unlabelled synthetic data, or presenting an assumption as observed fact.

**Resubmission:** assessor records failed dimension(s), evidence and remediation. Learner resubmits the corrected artifact plus a short change log. Do not overwrite the original assessment record.

## Chapter-specific rubrics

The chapter-specific checklist below is the minimum evidence the assessor must inspect. The five dimensions above are scored against this exact artifact, not against generic participation or time spent.

### DPA-T01-CH01 — Business Strategy & Commercial Understanding
**Competency:** T01-C01

**Learning outcome under assessment:** Digital performance dimulai dari business problem, bukan langsung dari channel. Pahami model bisnis, revenue, variable cost, margin, customer acquisition, repeat purchase, dan payback. Pisahkan growth, efficiency, serta profitability. CAC, LTV, AOV, contribution margin, dan retention perlu definisi dan periode yang konsisten. Marketing dapat memperbesar demand, tetapi tidak otomatis memperbaiki distribusi, stok, harga, kualitas produk, atau kapasitas sales.

**Required artifact / chapter-specific evidence checklist:** Buat business analysis satu halaman: model bisnis, target customer, product/price, revenue stream, cost structure, contribution margin, AOV, CAC, asumsi repeat/LTV, sales funnel, tiga risiko operasional, dan tiga marketing implications. Gunakan angka SIMULATED, tulis rumus dan sumber/asumsi.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa revenue naik belum tentu berarti marketing membaik?
   - **Current guide answer (not yet approved):** Revenue dapat naik karena diskon tinggi, CAC mahal, product mix bermargin rendah, refund, atau repeat quality yang buruk. Periksa contribution setelah variable cost dan marketing.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa perbedaan CAC dan CPA?
   - **Current guide answer (not yet approved):** CPA adalah biaya per action yang didefinisikan; CAC adalah biaya memperoleh customer baru sesuai cakupan biaya/periode yang disepakati. CPA purchase tidak otomatis sama dengan fully-loaded CAC.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan masalah bisnis tidak tepat dijawab dengan menambah media spend?
   - **Current guide answer (not yet approved):** Ketika bottleneck utamanya stock-out, distribusi, checkout failure, sales response, harga, margin, atau product-market fit.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T01-CH02 — Consumer Research, Brand & Positioning
**Competency:** T01-C02

**Learning outcome under assessment:** Consumer research mengubah asumsi audience menjadi pemahaman untuk memilih proposition, pesan, dan channel. Bedakan data primer (interview, survey, observation, usability test) dari data sekunder (CRM, sales, search, social listening, review, industry report). Segmentasi yang berguna dibangun dari kebutuhan, perilaku, konteks, motivasi, dan decision criteria, bukan demografi saja. Positioning menentukan ruang pembeda brand; value proposition menyatakan nilai; proof point memberi alasan untuk percaya.

**Required artifact / chapter-specific evidence checklist:** Buat consumer snapshot dua segmen: job-to-be-done, need, tension, trigger, barrier, alternatives, purchase criteria, media behavior, proposition, proof, dan evidence. Tambahkan positioning statement serta tiga asumsi yang perlu diuji.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa demografi saja belum cukup?
   - **Current guide answer (not yet approved):** Demografi mendeskripsikan siapa, tetapi belum menjelaskan mengapa seseorang membeli, hambatannya, atau bukti yang diperlukan. Need dan behavior lebih langsung mengarahkan proposition serta channel.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda positioning dan value proposition?
   - **Current guide answer (not yet approved):** Positioning adalah ruang pembeda yang ingin ditempati brand relatif terhadap alternatif; value proposition adalah nilai spesifik yang dijanjikan kepada target dan harus didukung proof.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana membedakan insight dari opini?
   - **Current guide answer (not yet approved):** Insight menjelaskan perilaku/tension yang relevan, punya evidence yang dapat dilacak, dan mengubah keputusan. Opini adalah generalisasi tanpa evidence atau implikasi teruji.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T01-CH03 — Funnel, Customer Journey & KPI Architecture
**Competency:** T01-C02

**Learning outcome under assessment:** Funnel dan customer journey adalah alat diagnosis, bukan diagram linear yang selalu sama untuk semua kategori. Definisikan outcome bisnis terlebih dahulu, lalu petakan tindakan, pertanyaan, hambatan, dan touchpoint. KPI tree menghubungkan business outcome dengan driver dan diagnostic metric. Setiap metric perlu definisi, formula, unit, sumber data, owner, window, dan guardrail. Hindari vanity metrics dan jangan membandingkan metrik dengan denominator berbeda.

**Required artifact / chapter-specific evidence checklist:** Buat journey map dan KPI tree minimal lima stage dengan action, customer question, friction, touchpoint, event, owner, primary KPI, diagnostic metric, dan guardrail. Hitung conversion dari data SIMULATED dan jelaskan prioritas serta evidence yang kurang.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa KPI tree harus dimulai dari outcome bisnis?
   - **Current guide answer (not yet approved):** Agar channel metric tidak menjadi tujuan sendiri. Aktivitas harus menjelaskan kontribusi terhadap sales, margin, qualified pipeline, atau retention.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa akibat denominator yang salah saat menghitung conversion rate?
   - **Current guide answer (not yet approved):** Rate dapat terlihat baik/buruk secara artifisial dan mendorong keputusan salah. Definisikan populasi, event, unit, serta periode.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apakah customer journey selalu linear?
   - **Current guide answer (not yet approved):** Tidak. Perjalanan dapat berulang atau dipengaruhi offline touchpoints, komunitas, marketplace, dan rekomendasi. Peta harus mengikuti bukti kategori.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T01-CH04 — Integrated Channel & Media Planning
**Competency:** T01-C03

**Learning outcome under assessment:** Integrated channel planning menetapkan peran channel berdasarkan audience, objective, journey, creative capability, cost, reach/intent, dan measurement. Paid, owned, earned, shared menjelaskan cara distribusi/ownership, bukan daftar channel eksklusif. Media mix tidak ditentukan dengan membagi budget rata atau mengikuti tren. Buat rationale tiap channel, proyeksi dengan asumsi, flighting, dan evaluasi. Forecast adalah estimasi, bukan janji.

**Required artifact / chapter-specific evidence checklist:** Buat integrated channel plan tiga bulan: objective, audience, role, format, budget, timing/flight, forecast dengan asumsi, KPI, source, dependency, risk, owner, rationale. Bandingkan base budget dengan skenario -20% dan jelaskan trade-off.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa budget tidak dibagi rata ke semua channel?
   - **Current guide answer (not yet approved):** Fungsi, audience, inventory, cost, dan conversion role berbeda. Alokasi mengikuti objective, marginal return, capacity, dan confidence forecast.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda reach forecast dan guaranteed reach?
   - **Current guide answer (not yet approved):** Forecast adalah estimasi berbasis asumsi; guaranteed delivery hanya berlaku bila ada komitmen kontraktual dan definisi delivery yang jelas.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang dicek saat suatu channel tampak punya ROAS tinggi?
   - **Current guide answer (not yet approved):** Attribution overlap, assisted role, incrementality, volume, margin, saturation, dan opportunity cost sebelum budget dipindahkan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T01-CH05 — Paid Search, Paid Social & Programmatic Fundamentals
**Competency:** T01-C03

**Learning outcome under assessment:** Paid media perlu dipahami melalui perbedaan demand capture, demand generation, dan automated buying. Search merespons query/intent; social ads menggabungkan audience signal dan creative untuk menstimulasi demand; programmatic mengakses inventory lintas publisher melalui DSP, SSP, exchange, auction, atau deal. Objective, audience, creative, conversion signal, bidding, inventory quality, privacy, dan measurement berbeda antarpublisher. Full-stack planner memilih channel, memberi brief yang benar, dan menilai output specialist.

**Required artifact / chapter-specific evidence checklist:** Buat paid-channel decision matrix untuk (A) menangkap demand, (B) mengenalkan produk, (C) menambah reach dengan kontrol inventory. Bandingkan Search, Social, Programmatic dari audience/intent, format, buying mechanism, KPI, data/creative needs, risk, use case, dan kondisi tidak direkomendasikan.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa perbedaan demand capture dan demand generation?
   - **Current guide answer (not yet approved):** Demand capture merespons permintaan yang sudah muncul seperti query; demand generation membangun awareness, preference, atau kebutuhan yang belum diekspresikan sebagai query.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apakah CPM termurah berarti media paling efisien?
   - **Current guide answer (not yet approved):** Tidak. CPM tidak menilai kualitas audience, viewability, invalid traffic, attention, conversion, atau contribution.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa peran full-stack planner ketika ada specialist platform?
   - **Current guide answer (not yet approved):** Menetapkan objective, channel role, budget guardrail, KPI, brief, dependency, governance, dan evaluasi; bukan mengambil alih keputusan teknis tanpa konteks.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T01-CH06 — Organic Search, Content & Community
**Competency:** T01-C03

**Learning outcome under assessment:** Organic search, content, dan community memperkuat discoverability, consideration, trust, dan hubungan jangka panjang. SEO mencakup crawling/indexing, site architecture, helpful content, technical accessibility, dan search intent. Content strategy menghubungkan audience question dengan brand POV, format, cadence, distribution, dan measurement. GEO/AEO atau AI-search visibility masih berkembang; jangan menganggap trik khusus sebagai jaminan citation/ranking. Community butuh purpose, moderation, response, dan customer-care handoff.

**Required artifact / chapter-specific evidence checklist:** Buat organic plan untuk satu kategori: keyword/topic cluster, intent, pillar page, tiga supporting content, community program, distribution, internal links, CTA, KPI, source, owner, update cadence. Audit satu URL secara konseptual dan prioritaskan issue berdasarkan impact, evidence, effort, dependency.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa keyword stuffing bukan SEO strategy?
   - **Current guide answer (not yet approved):** Search intent, usefulness, crawling/indexing, trust, dan user experience lebih penting daripada repetisi keyword. Keyword stuffing dapat menurunkan kualitas dan melanggar spam policy.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa perbedaan content pillar dan content campaign?
   - **Current guide answer (not yet approved):** Pillar adalah tema editorial jangka panjang; campaign adalah aktivitas terikat objective, timing, message, dan measurement.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana mengukur community selain follower?
   - **Current guide answer (not yet approved):** Participation quality, repeat contributors, response time, resolution, advocacy, member retention, UGC permission, dan customer experience.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T01-CH07 — Tracking, Analytics & Measurement
**Competency:** T01-C04

**Learning outcome under assessment:** Measurement mengubah interaksi menjadi data yang dapat dipercaya. Mulai dari business question, framework, event taxonomy, data layer/parameter, source of truth, consent, dan QA—baru kemudian dashboard. GA4 memakai event-based model; UTM mengklasifikasikan traffic campaign; Google Tag Manager mengelola tag/trigger/variable; pixel/API mengirim signal ke platform iklan. Attribution memberi credit menurut model/window tertentu, bukan otomatis kausalitas. Dashboard rapi tidak memperbaiki event yang salah.

**Required artifact / chapter-specific evidence checklist:** Buat measurement plan satu campaign: business question, KPI tree, event map, trigger, parameters, UTM taxonomy, consent, tag owner, QA steps, expected/actual, source of truth, dashboard dimensions/metrics, data quality, dan limitation. Gunakan Google Analytics demo account untuk latihan data yang disediakan Google.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa perbedaan UTM dan GA4 event?
   - **Current guide answer (not yet approved):** UTM adalah parameter URL untuk mengidentifikasi source/campaign; event merekam tindakan seperti purchase atau generate_lead. UTM tidak menggantikan event tracking.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa platform ads dan GA4 melaporkan conversion berbeda?
   - **Current guide answer (not yet approved):** Attribution model/window, timezone, identity, consent, event definition, click/view rules, deduplication, serta data processing dapat berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa fungsi Preview/DebugView saat QA GTM dan GA4?
   - **Current guide answer (not yet approved):** Menguji apakah tag terpicu pada kondisi benar dan event/parameter masuk sesuai harapan sebelum dipublikasikan; simpan test evidence.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T01-CH08 — CRO, Experimentation & Optimization
**Competency:** T01-C02, T01-C05

**Learning outcome under assessment:** CRO dan experimentation mengubah diagnosis funnel menjadi hipotesis yang diuji. CRO bukan hanya mengubah warna tombol; ia menggabungkan research, analytics, usability, page performance, offer clarity, trust, friction, dan operational constraints. Hipotesis menyebut observation, insight, change, expected mechanism, audience, dan metric. A/B testing memerlukan randomization, unit tepat, primary metric, guardrails, sample/duration, stopping rule, serta kontrol kontaminasi. Conversion rate naik belum tentu profit naik bila kualitas order turun.

**Required artifact / chapter-specific evidence checklist:** Buat optimization backlog tiga hipotesis. Untuk hipotesis prioritas, tulis evidence, mechanism, audience, control/treatment, primary metric, guardrails, randomization, sample/duration assumption, QA, stopping criteria, dan decision rule. Jangan mengklaim significance tanpa perhitungan benar.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang membuat hipotesis CRO dapat diuji?
   - **Current guide answer (not yet approved):** Ia menghubungkan evidence dengan perubahan spesifik, mekanisme, audience, primary metric, dan guardrails. Pernyataan 'buat halaman lebih menarik' belum cukup.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa mengubah checkout, harga, promo, desain, dan shipping sekaligus tidak ideal?
   - **Current guide answer (not yet approved):** Banyak variabel berubah bersamaan sehingga penyebab hasil sulit dipisahkan. Isolasi intervensi utama atau gunakan desain multivariat yang benar.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa arti hasil eksperimen inconclusive?
   - **Current guide answer (not yet approved):** Data belum memberi bukti cukup untuk memilih winner sesuai decision rule. Itu bukan bukti kedua variasi identik; periksa power, sample, variance, dan implementasi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T01-CH09 — CRM, Lifecycle & Automation
**Competency:** T01-C05

**Learning outcome under assessment:** CRM dan lifecycle marketing mengelola hubungan setelah interaksi: lead nurturing, onboarding, activation, repeat purchase, loyalty, win-back, dan churn prevention. Rancang komunikasi berdasarkan lifecycle stage, segment, trigger, content, timing, frequency, suppression, exit condition, dan consent. Email/WhatsApp bukan sekadar channel blast; keduanya memerlukan permission, preference management, deliverability, data hygiene, dan customer-service coordination. Ukur activation, repeat rate, retention, churn, revenue/margin, dan customer experience.

**Required artifact / chapter-specific evidence checklist:** Buat lifecycle map dua flow: (1) new customer onboarding, (2) replenishment/repeat atau lapsed win-back. Tiap flow berisi trigger, eligibility, consent, segment, message, channel, delay, branch, frequency cap, suppression, exit, KPI, guardrail, dan QA. Unsubscribe/opt-out wajib jadi test scenario.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa suppression dan exit condition penting?
   - **Current guide answer (not yet approved):** Mencegah komunikasi berulang/tidak relevan, misalnya reminder purchase setelah customer sudah membeli atau promotional message setelah unsubscribe.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apakah nomor WhatsApp/email otomatis berarti consent marketing?
   - **Current guide answer (not yet approved):** Tidak. Kontak yang tersedia bukan bukti izin promosi. Perlu dasar pemrosesan/consent, preference management, opt-out, dan kebijakan channel.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa repeat purchase dibaca bersama margin dan customer experience?
   - **Current guide answer (not yet approved):** Diskon agresif dapat menaikkan repeat tetapi menurunkan margin; frekuensi pesan berlebih meningkatkan unsubscribe/complaint. Nilai hubungan dinilai utuh.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T01-CH10 — Integrated Digital Performance Capstone
**Competency:** T01-C06

**Learning outcome under assessment:** Capstone menguji kemampuan mengintegrasikan strategy, channel, measurement, optimization, dan lifecycle menjadi rekomendasi yang masuk akal secara komersial. Paket kerja harus konsisten dari business problem sampai KPI, channel role, budget, tracking, experiment, dan executive decision. Setiap angka harus bersumber atau diberi label SIMULATED; forecast bukan actual. Full-stack bukan berarti menguasai setiap platform sedalam operator, tetapi memahami trade-off, memimpin specialist, dan menjaga sistem keputusan koheren.

**Required artifact / chapter-specific evidence checklist:** Bangun capstone folder: (1) brief restatement + business economics, (2) consumer snapshot/positioning, (3) journey map + KPI tree, (4) integrated channel plan + budget scenario, (5) paid-channel comparison, (6) organic/content/community plan, (7) measurement/event/UTM spec, (8) CRO backlog, (9) CRM lifecycle map, (10) executive recommendation. Presentasikan 8–10 slide plus workbook. Rubrik 0–3: commercial logic, audience/strategy, channel planning, measurement, optimization reasoning, executive communication. Setiap area minimal 2; tandai semua synthetic figures.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang membedakan rekomendasi full-stack dari kumpulan channel tactic?
   - **Current guide answer (not yet approved):** Semua tactic diturunkan dari satu business objective dan consumer insight, memiliki channel role jelas, measurement kompatibel, budget guardrail, dan keputusan optimasi yang saling terhubung.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bagaimana menyajikan forecast dan synthetic dataset secara jujur?
   - **Current guide answer (not yet approved):** Cantumkan asumsi, rumus, rentang, source, serta label SIMULATED/FORECAST. Jangan menyebutnya actual performance atau client result.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa pertanyaan executive yang harus dijawab saat presentasi?
   - **Current guide answer (not yet approved):** Mengapa masalah diprioritaskan, mengapa audience/channel dipilih, bagaimana ekonomi dan KPI bekerja, evidence apa yang mendasari keputusan, apa risikonya, dan kapan strategi diubah.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T02-CH01 — Business Problem, Client Brief & Communication Challenge
**Competency:** T02-C01

**Learning outcome under assessment:** Connection Planning dimulai dengan memisahkan business problem, marketing problem, dan communication problem. Penjualan turun bisa terjadi karena harga, distribusi, stok, produk, atau pengalaman; tidak semuanya dapat diselesaikan oleh komunikasi. Planner harus menulis masalah yang dapat dipengaruhi komunikasi, mendefinisikan audience, perubahan perilaku/persepsi yang diharapkan, baseline, periode, dan constraint. Brief yang baik menghasilkan pertanyaan riset dan keputusan, bukan langsung daftar channel.

**Required artifact / chapter-specific evidence checklist:** Buat brief diagnosis dua halaman: business context, problem tree, communication challenge, target audience, objective, baseline/target, constraint, stakeholder, tiga research question, serta evidence/assumption log. Labeli setiap angka SIMULATED bila bukan data aktual.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda business problem dan communication problem?
   - **Current guide answer (not yet approved):** Business problem adalah hasil komersial yang perlu berubah; communication problem adalah hambatan persepsi, pemahaman, preference, atau tindakan yang memang dapat dipengaruhi komunikasi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa brief tidak boleh langsung berisi channel?
   - **Current guide answer (not yet approved):** Channel baru dipilih setelah audience, barrier, objective, dan journey dipahami. Memulai dari channel berisiko mengoptimalkan media untuk masalah yang salah.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana membuktikan sebuah masalah berada dalam kendali komunikasi?
   - **Current guide answer (not yet approved):** Triangulasikan riset audience, perilaku, pesan yang diterima, dan faktor komersial seperti harga/stok. Catat faktor yang tidak dapat dikendalikan planner.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T02-CH02 — Consumer Research, Audience & Segmentation
**Competency:** T02-C02

**Learning outcome under assessment:** Audience research menggabungkan data primer seperti interview, survey, observation, dan usability research dengan data sekunder seperti sales, CRM, search, review, social listening, dan syndicated studies. Segmentasi harus menjelaskan kebutuhan, perilaku, motivasi, konteks, trigger, dan decision criteria yang memengaruhi strategi. Demografi dapat membantu sizing, tetapi tidak otomatis menjadi insight. Planner perlu menilai kualitas sample, recency, bias, representativeness, dan batas inferensi.

**Required artifact / chapter-specific evidence checklist:** Buat dua audience profile lengkap dengan jobs-to-be-done, tension, trigger, barrier, alternatives, proof needed, media behavior, dan implication untuk pesan/touchpoint. Sertakan source log dan satu research gap per segmen.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa persona demografis saja tidak cukup?
   - **Current guide answer (not yet approved):** Demografi membantu mendeskripsikan populasi, tetapi tidak menjelaskan motivasi, trigger, hambatan, atau bukti yang diperlukan untuk mengambil keputusan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko memakai social listening sebagai satu-satunya riset?
   - **Current guide answer (not yet approved):** Percakapan publik tidak selalu representatif, dapat bias platform, loud minority, dan tidak selalu menjelaskan sebab perilaku.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan segmentasi layak digunakan untuk strategi?
   - **Current guide answer (not yet approved):** Saat segmen memiliki kebutuhan/perilaku berbeda yang mengubah proposition, channel, experience, atau keputusan investasi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T02-CH03 — Cultural Insight, Human Tension & Behavioral Insight
**Competency:** T02-C02

**Learning outcome under assessment:** Cultural insight menghubungkan perubahan konteks budaya, perilaku nyata, kebutuhan manusia, dan ketegangan yang relevan dengan kategori. Tren hanya sinyal; insight menjelaskan mengapa sinyal tersebut penting bagi audience dan brand. Human tension biasanya memuat dua kebutuhan yang bertabrakan. Planner menguji skala, momentum, durasi, relevansi kategori, dan risiko appropriation sebelum mengusulkan platform ide.

**Required artifact / chapter-specific evidence checklist:** Buat cultural insight board berisi lima sinyal, dua tren, satu human tension, evidence pro/kontra, brand role, serta tiga potential communication territories. Jangan mengklaim hubungan kausal dari korelasi tren.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda trend dan insight?
   - **Current guide answer (not yet approved):** Trend menunjukkan pola/sinyal yang berkembang; insight menjelaskan motivasi atau tension yang mendasari perilaku dan mengarahkan keputusan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa insight harus punya evidence yang dapat membantahnya?
   - **Current guide answer (not yet approved):** Tanpa falsifiability, insight mudah menjadi slogan yang terdengar menarik tetapi tidak dapat diuji atau dipakai mengambil keputusan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang dimaksud brand fit dalam cultural moment?
   - **Current guide answer (not yet approved):** Kesesuaian antara nilai, pengalaman, kompetensi, dan peran nyata brand dengan isu yang ingin dimasuki.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T02-CH04 — Brand Positioning, Proposition & Communication Strategy
**Competency:** T02-C03

**Learning outcome under assessment:** Positioning menentukan ruang pembeda brand relatif terhadap alternatif. Proposition menerjemahkan positioning menjadi nilai yang dijanjikan kepada audience; proof points membuat janji dapat dipercaya; objections menjelaskan alasan audience mungkin ragu. Communication strategy menentukan perubahan audience yang diharapkan, pesan yang perlu dibangun, dan cara mengatasi barrier. Jangan menyamakan tagline, key message, proposition, dan creative idea.

**Required artifact / chapter-specific evidence checklist:** Susun positioning statement, value proposition, 3 proof points, 3 objections beserta respons, messaging hierarchy, dan satu communication strategy statement. Tandai klaim yang membutuhkan persetujuan legal atau validasi produk.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa perbedaan proposition dan tagline?
   - **Current guide answer (not yet approved):** Proposition menjelaskan nilai dan alasan memilih brand; tagline adalah ekspresi kreatif singkat yang dapat menjadi salah satu bentuk komunikasi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa proof point tidak boleh dibuat hanya dari copywriting?
   - **Current guide answer (not yet approved):** Proof harus berasal dari fakta produk, data, sertifikasi, pengalaman, atau bukti yang dapat diverifikasi. Klaim tanpa dasar menimbulkan risiko reputasi/legal.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana menguji messaging hierarchy?
   - **Current guide answer (not yet approved):** Pastikan pesan utama konsisten, supporting messages menjawab barrier, proof dapat diverifikasi, dan CTA sesuai tahap journey.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T02-CH05 — Consumer Journey, Moments & Touchpoint Mapping
**Competency:** T02-C04

**Learning outcome under assessment:** Customer journey memetakan bagaimana audience bergerak dari kebutuhan hingga penggunaan, pembelian ulang, atau advocacy. Journey tidak selalu linear dan sering melibatkan offline, marketplace, search, creator, customer service, dan word-of-mouth. Moment of truth adalah titik pengalaman yang sangat memengaruhi keputusan. Touchpoint audit menilai audience need, brand role, friction, consistency, owner, dan evidence pada tiap momen.

**Required artifact / chapter-specific evidence checklist:** Buat journey map minimal enam tahap yang berisi audience action, question, emotion, friction, touchpoint, brand role, owner, evidence, dan opportunity. Pilih tiga moments of truth dan jelaskan alasan prioritas.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa journey tidak selalu funnel linear?
   - **Current guide answer (not yet approved):** Audience dapat bolak-balik, melompat, dipengaruhi marketplace/offline, dan menerima rekomendasi sebelum atau sesudah search.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda touchpoint dengan channel?
   - **Current guide answer (not yet approved):** Channel adalah medium/distribusi; touchpoint adalah interaksi spesifik yang dialami audience pada konteks dan waktu tertentu.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana memilih moment of truth?
   - **Current guide answer (not yet approved):** Gunakan evidence dampak pada keputusan, intensitas friction, frekuensi/reach, dan kemampuan brand memperbaiki pengalaman.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T02-CH06 — Paid, Owned, Earned & Shared Channel Roles
**Competency:** T02-C04

**Learning outcome under assessment:** Paid, Owned, Earned, dan Shared menjelaskan karakter distribusi, bukan empat silo yang berdiri sendiri. Connection Planner memberi setiap channel tugas yang jelas: create demand, explain, validate, capture intent, convert, serve, retain, atau amplify advocacy. Pilihan dipengaruhi audience, trust, control, reach, context, timing, cost, frequency, dan measurement. Channel role harus berasal dari journey dan proposition, bukan tren platform.

**Required artifact / chapter-specific evidence checklist:** Buat channel-role matrix untuk minimal enam channel. Cantumkan task, audience, message, format, KPI, timing, dependency, owner, serta alasan channel dipilih atau ditolak.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa channel tidak dipilih hanya berdasarkan CPM termurah?
   - **Current guide answer (not yet approved):** Biaya exposure tidak menjelaskan trust, intent, attention, experience, conversion, atau contribution terhadap outcome.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa fungsi shared media?
   - **Current guide answer (not yet approved):** Distribusi atau penyebaran yang didorong partisipasi audience, creator, komunitas, atau jaringan sosial; bukan sepenuhnya dibeli atau dikontrol brand.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana menghindari channel silos?
   - **Current guide answer (not yet approved):** Gunakan satu journey dan messaging architecture, tentukan handoff, shared measurement, owner, dan aturan frekuensi/sequence.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T02-CH07 — Communication Architecture & Messaging Framework
**Competency:** T02-C03

**Learning outcome under assessment:** Communication Architecture mengatur hubungan antara audience, pesan, channel, sequence, dan experience agar komunikasi terasa sebagai satu sistem. Messaging Framework menerjemahkan proposition menjadi message house, proof, objection, CTA, dan format. Konsistensi berarti janji brand tidak berubah; adaptasi berarti ekspresi dan proof disesuaikan dengan konteks platform serta kebutuhan audience.

**Required artifact / chapter-specific evidence checklist:** Bangun communication architecture satu campaign, message house, messaging matrix enam touchpoint, sequence/timing plan, dan governance/approval checklist. Sertakan contoh pesan per platform dan alasan adaptasinya.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa risiko pesan terlalu seragam di semua channel?
   - **Current guide answer (not yet approved):** Pesan dapat kehilangan relevansi konteks dan intent; audience dipaksa menerima format yang tidak sesuai tahap atau kebutuhan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko pesan terlalu berbeda antar-channel?
   - **Current guide answer (not yet approved):** Brand promise menjadi tidak konsisten, proof saling bertentangan, dan audience menerima pengalaman terputus.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang dimaksud architecture, bukan sekadar content calendar?
   - **Current guide answer (not yet approved):** Architecture menentukan hubungan strategis audience, objective, message, channel, sequence, dan experience; calendar hanya menempatkan aktivitas pada waktu.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T02-CH08 — Creative Brief, Channel Orchestration & Experience Handoff
**Competency:** T02-C05

**Learning outcome under assessment:** Creative brief menerjemahkan strategy menjadi arahan yang dapat dikerjakan creative, content, media, CXM, dan production team. Brief harus menjelaskan problem, audience, insight, proposition, desired response, mandatory, channel context, deliverables, timing, budget, measurement, dan constraint. Orchestration memastikan aset, pesan, dan experience tersambung; handoff bukan hanya mengirim deck, tetapi memastikan pemilik, spesifikasi, dependencies, dan approval jelas.

**Required artifact / chapter-specific evidence checklist:** Buat creative brief, channel adaptation matrix, asset/deliverable schedule, RACI/owner table, approval checklist, dan risk register untuk satu integrated campaign.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa bedanya creative brief dan media brief?
   - **Current guide answer (not yet approved):** Creative brief mengarahkan ide/pesan/pengalaman; media brief mengarahkan target, channel, inventory, budget, timing, dan delivery.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa desired response harus jelas?
   - **Current guide answer (not yet approved):** Agar creative team mengerti perubahan audience yang dituju dan dapat menilai apakah ide bekerja untuk objective.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa bukti handoff berhasil?
   - **Current guide answer (not yet approved):** Owner menerima brief dan aset dengan konteks, spesifikasi, deadline, KPI, approval, dependency, serta kriteria QA yang disepakati.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T02-CH09 — Communication Effectiveness & Learning Agenda
**Competency:** T02-C05

**Learning outcome under assessment:** Communication effectiveness menilai apakah komunikasi mencapai perubahan yang ditargetkan, bukan hanya apakah media deliver sesuai rencana. Pisahkan output (impressions, reach, views), outtake (attention, recall, comprehension, consideration), dan outcome (trial, sales, retention). Susun learning agenda sebelum campaign agar measurement dapat membantu keputusan berikutnya. Attribution platform tidak otomatis membuktikan causal impact.

**Required artifact / chapter-specific evidence checklist:** Rancang measurement framework campaign dengan KPI output/outtake/outcome, measurement method, baseline, target, learning question, decision rule, dan limitation. Tulis satu rekomendasi berdasarkan data SIMULATED.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apakah reach tinggi membuktikan komunikasi efektif?
   - **Current guide answer (not yet approved):** Tidak. Reach adalah output delivery; efektivitas perlu bukti perubahan pemahaman, persepsi, perilaku, atau outcome sesuai objective.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda attribution dan incrementality?
   - **Current guide answer (not yet approved):** Attribution membagi kredit menurut aturan model; incrementality mengestimasi tambahan outcome yang disebabkan aktivitas dibanding kondisi counterfactual.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa learning agenda harus ditetapkan sebelum campaign?
   - **Current guide answer (not yet approved):** Agar pengumpulan data, metode, sample, dan decision threshold sesuai pertanyaan; mengurangi bias memilih metrik setelah melihat hasil.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T02-CH10 — Integrated Connection Strategy Capstone
**Competency:** T02-C05

**Learning outcome under assessment:** Capstone Connection Strategy menggabungkan problem framing, insight, positioning, journey, channel roles, communication architecture, creative brief, orchestration, effectiveness, dan recommendation. Deck yang baik memperlihatkan logika dari evidence ke keputusan; bukan hanya moodboard atau channel list. Setiap asumsi, estimasi, dan data simulasi harus diberi label, serta rekomendasi perlu menyebut trade-off, owner, dan learning next step.

**Required artifact / chapter-specific evidence checklist:** Susun deck 10–12 slide dan workbook: brief, evidence log, audience/insight, positioning, journey, message house, channel-role matrix, creative brief, measurement/learning agenda, governance, budget implication, dan 30/60/90-day next steps. Labeli synthetic assumptions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang membedakan capstone strategis dari moodboard?
   - **Current guide answer (not yet approved):** Capstone menunjukkan evidence, diagnosis, strategi, channel/message architecture, feasibility, KPI, governance, dan keputusan yang dapat dipertanggungjawabkan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bagaimana menyampaikan uncertainty kepada klien?
   - **Current guide answer (not yet approved):** Nyatakan assumption, confidence, data gap, sensitivity, dan cara mengujinya; jangan menyamarkan estimasi sebagai fakta.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa ukuran recommendation siap dijalankan?
   - **Current guide answer (not yet approved):** Ada owner, timeline, asset/approval requirements, budget implication, KPI, QA, risks, dan decision gates.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T03-CH01 — Media Brief, Business Objective & Campaign Requirements
**Competency:** T03-C01

**Learning outcome under assessment:** Media Planner menerjemahkan business dan communication objective menjadi media objective dan rencana yang dapat dibeli/dieksekusi. Brief harus mengunci target audience, geography, timing, product availability, budget, KPI, mandatories, competitive context, dan definisi sukses. Planner menanyakan hal yang belum jelas sebelum forecast, karena asumsi target, reach, atau conversion yang tidak terdefinisi akan membuat seluruh plan sulit dipertanggungjawabkan.

**Required artifact / chapter-specific evidence checklist:** Buat media brief intake dan assumption log satu campaign: objective tree, audience, target market, timeline, budget, KPI, mandatories, inventory dependencies, serta lima pertanyaan klarifikasi untuk klien.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda business objective dan media objective?
   - **Current guide answer (not yet approved):** Business objective adalah hasil bisnis; media objective adalah kontribusi distribusi/eksposur atau aksi media yang mendukung hasil tersebut.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa distribution footprint harus dicek sebelum national reach plan?
   - **Current guide answer (not yet approved):** Media dapat menjangkau wilayah tanpa produk/layanan tersedia; exposure tersebut membuang budget dan dapat merusak experience.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus dilakukan ketika brief belum lengkap?
   - **Current guide answer (not yet approved):** Catat gap, minta clarification, nyatakan asumsi sementara, dan jangan menyajikan forecast seolah-olah sudah pasti.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T03-CH02 — Audience Research & Media Consumption
**Competency:** T03-C01

**Learning outcome under assessment:** Audience planning memilih siapa yang perlu dijangkau, di mana mereka berada, bagaimana konsumsi medianya, dan apakah data yang digunakan cukup relevan. Gunakan behavioral, category, contextual, first-party, survey, syndicated, dan platform data dengan memahami definisi serta bias masing-masing. Audience sizing perlu menyebut universe, target definition, duplication, geography, dan periode. Planner tidak boleh menganggap platform audience estimate sama dengan unique people.

**Required artifact / chapter-specific evidence checklist:** Buat audience landscape berisi 2–3 segmen, estimasi universe dengan source caveat, media consumption, occasion, platform role, duplication risk, dan implikasi terhadap channel selection.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa audience estimate tidak bisa langsung dijumlahkan lintas platform?
   - **Current guide answer (not yet approved):** Universe, identity resolution, time window, deduplication, dan metode pengukuran berbeda; hasilnya dapat overlap.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa fungsi first-party data dalam media planning?
   - **Current guide answer (not yet approved):** Membantu memahami existing customers/consented audience dan membangun targeting atau suppression, dengan governance serta izin yang sesuai.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa data source harus punya tanggal dan metodologi?
   - **Current guide answer (not yet approved):** Audience behavior dan platform definitions berubah; tanpa recency/method, planner tidak bisa menilai reliability estimate.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T03-CH03 — Media Landscape, Inventory & Channel Evaluation
**Competency:** T03-C02

**Learning outcome under assessment:** Media landscape evaluation menilai channel, format, placement, publisher, inventory quality, audience fit, environment, availability, cost model, dan measurement. Channel yang sama dapat memiliki kualitas berbeda menurut placement dan context. Planner perlu membedakan media owner/publisher, platform self-serve, network, DSP, dan reseller; pahami siapa mengontrol inventory, data, ad serving, brand safety, dan laporan delivery.

**Required artifact / chapter-specific evidence checklist:** Buat inventory evaluation sheet minimal enam opsi: audience fit, placement/context, buying type, rate basis, projected delivery, quality controls, reporting, exclusions, dan recommendation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa CPM murah belum tentu inventory bernilai?
   - **Current guide answer (not yet approved):** Cost per thousand tidak mengukur viewability, IVT, contextual suitability, attention, audience relevance, atau outcomes.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda publisher direct dan DSP inventory?
   - **Current guide answer (not yet approved):** Direct dibeli melalui media owner/representative dengan terms spesifik; DSP mengakses inventory melalui platform dan mekanisme auction/deal.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang dimaksud apples-to-apples media comparison?
   - **Current guide answer (not yet approved):** Menyamakan scope, format, audience, dates, impressions/reach, fee, measurement, dan delivery terms sebelum membandingkan harga.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T03-CH04 — Media Objective, KPI & Channel Roles
**Competency:** T03-C02

**Learning outcome under assessment:** Media objective dan KPI harus berasal dari funnel serta peran channel. Awareness dapat menggunakan reach, frequency, viewable impressions, atau brand metrics; consideration bisa menggunakan qualified visits/engagement; performance menggunakan conversion, CPA, atau revenue. KPI harus mempunyai formula, unit, denominator, source, attribution window, target, dan guardrail. Jangan mencampur metric platform yang tidak comparable tanpa normalisasi.

**Required artifact / chapter-specific evidence checklist:** Buat KPI dictionary untuk minimal enam media metric dan susun objective-to-KPI tree. Sertakan rumus, sumber, unit, target, guardrail, window, dan alasan pemilihan.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa KPI perlu denominator dan window?
   - **Current guide answer (not yet approved):** Setiap KPI harus menyebut populasi pembagi dan periode pengamatan agar perbandingan konsisten, perubahan dapat ditafsirkan, dan keputusan tidak bias.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda primary dan diagnostic metric?
   - **Current guide answer (not yet approved):** Primary metric menentukan apakah eksperimen atau campaign mencapai tujuan; diagnostic metrics membantu menjelaskan driver yang membuat primary metric berubah.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa CTR tidak boleh menjadi KPI universal?
   - **Current guide answer (not yet approved):** CTR bergantung pada format, objective, placement, audience, dan click definition; ia tidak selalu mencerminkan business outcome.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T03-CH05 — Media Mix, Budget Allocation & Investment Rationale
**Competency:** T03-C03

**Learning outcome under assessment:** Media mix mengalokasikan investasi antar channel dan format berdasarkan audience, task, reach/intent, cost, expected contribution, creative, measurement, dan risiko. Budget allocation bukan pembagian rata atau sekadar mengejar ROAS platform. Planner membuat scenario dan menjelaskan marginal trade-off: apa yang hilang ketika suatu channel dikurangi, dan apa yang diperoleh ketika budget dipindah. Forecast harus menampilkan input, range, dan uncertainty.

**Required artifact / chapter-specific evidence checklist:** Buat tiga media-mix scenarios dengan budget total tetap. Untuk setiap skenario tulis allocation, KPI, forecast range, assumptions, risks, marginal trade-off, dan kondisi realokasi.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda average ROAS dan marginal ROAS?
   - **Current guide answer (not yet approved):** Average menilai hasil keseluruhan; marginal mengukur hasil tambahan dari satu unit budget berikutnya dan lebih relevan untuk scaling.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa satu channel dengan ROAS tertinggi tidak otomatis menerima seluruh budget?
   - **Current guide answer (not yet approved):** Volume, incrementality, role dalam demand creation, saturation, overlap, margin, dan channel risk dapat membuat return marginal turun.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang wajib ada dalam forecast?
   - **Current guide answer (not yet approved):** Input, formula, time window, range, source, confidence, scenario, serta penjelasan bahwa forecast bukan guaranteed delivery.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T03-CH06 — Reach, Frequency, GRP, CPM, CPP & Forecasting
**Competency:** T03-C03, T03-C04

**Learning outcome under assessment:** Reach dan frequency mengukur distribusi kepada audience; CPM/CPC/CPP mengukur biaya menurut unit delivery; GRP/TRP mengukur tekanan iklan berdasarkan rating audience. Semua metrik bergantung pada universe, source, methodology, period, duplication, dan currency. Forecast perlu membedakan unique reach dengan impressions serta rata-rata frequency dengan distribusi frekuensi. Jangan membandingkan GRP, platform reach, dan panel estimates tanpa metodologi sepadan.

**Required artifact / chapter-specific evidence checklist:** Buat media forecast dengan CPM, reach, frequency, GRP/TRP, dan CPP untuk skenario latihan. Tulis source/universe, formula, assumptions, duplication caveat, dan sensitivity saat reach turun.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda impressions dan reach?
   - **Current guide answer (not yet approved):** Impressions menghitung total kesempatan penayangan yang tercatat, sedangkan reach memperkirakan orang atau rumah tangga unik menurut universe dan metode deduplikasi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa arti GRP?
   - **Current guide answer (not yet approved):** Gross Rating Points mengukur total rating points berdasarkan target universe; dapat mencakup repeated exposure.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa platform reach tidak selalu dapat dijumlahkan lintas channel?
   - **Current guide answer (not yet approved):** Identity graph, universe, deduplication, dan time window dapat berbeda antarplatform; cross-channel reach perlu metodologi deduplikasi yang kompatibel.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T03-CH07 — Media Flowchart, Flighting & Scenario Planning
**Competency:** T03-C05

**Learning outcome under assessment:** Media flowchart menerjemahkan strategi dan budget menjadi jadwal, channel, format, weight, target, owner, dan flight dates. Pola continuity, flighting, dan pulsing berbeda sesuai seasonality, demand, launch moment, inventory, serta budget. Scenario planning menguji perubahan tanggal, stock, price promotion, atau media availability. Flowchart bukan dekorasi; ia menjadi alat koordinasi planning, buying, creative, client, dan finance.

**Required artifact / chapter-specific evidence checklist:** Buat flowchart 8 minggu dengan channel/format, spend weighting, flighting, asset deadline, dependencies, dan three contingency scenarios. Tulis change-control rules jika dates atau inventory berubah.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa risiko flighting tanpa stock calendar?
   - **Current guide answer (not yet approved):** Iklan dapat mendorong demand saat produk tidak tersedia dan membuang budget atau menurunkan customer trust.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Kapan pulsing lebih tepat daripada full continuity?
   - **Current guide answer (not yet approved):** Saat baseline presence dibutuhkan tetapi demand/seasonality memiliki momen puncak yang memerlukan intensitas tambahan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa fungsi dependency mapping?
   - **Current guide answer (not yet approved):** Memastikan booking, creative, approvals, tags, stock, dan owner siap sesuai urutan launch.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T03-CH08 — Buying Brief, Media Owner Coordination & Activation Handoff
**Competency:** T03-C01, T03-C05

**Learning outcome under assessment:** Buying brief adalah jembatan antara keputusan planner dan eksekusi media buyer/investment, bukan instruksi samar. Brief perlu memuat objective, target, channel role, budget, dates, format, audience, geography, KPI, benchmark, mandatory, exclusions, creative, measurement, dan approval. Planner juga memastikan rekomendasi commercial dari publisher/buyer dapat dibandingkan serta tetap sesuai rationale media plan.

**Required artifact / chapter-specific evidence checklist:** Buat buying brief, RFP question list, apples-to-apples proposal comparison, owner/RACI table, dan handoff checklist untuk satu digital + publisher package.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda media planner dan media buyer?
   - **Current guide answer (not yet approved):** Planner merancang channel/budget/forecast dan rationale; buyer melakukan negotiation, booking, buying terms, serta stewardship sesuai mandat.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa rate card tidak cukup untuk menilai proposal?
   - **Current guide answer (not yet approved):** Perlu delivery basis, audience, placement quality, fees, value-add, dates, measurement, cancellation, serta contractual makegood.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa bukti buying handoff siap?
   - **Current guide answer (not yet approved):** Buyer menerima brief final, inventory/format, budget/date, KPI, spec, tracking, approval, terms, dan escalation owner.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T03-CH09 — Post-Campaign Analysis & Media Effectiveness
**Competency:** T03-C05

**Learning outcome under assessment:** Post-campaign analysis membandingkan plan, booked, delivered, measured, dan billed results. Evaluasi memisahkan under/over-delivery, cost variance, audience quality, creative performance, reach/frequency, placement quality, outcomes, serta data limitations. Planner harus menjelaskan mengapa hasil berubah, apa bukti pendukung, apa faktor eksternal, dan apa yang direkomendasikan untuk flight berikutnya.

**Required artifact / chapter-specific evidence checklist:** Buat post-buy report berisi plan-vs-actual, reach/frequency, cost variance, placement quality, outcome, discrepancy note, root-cause hypothesis, dan tiga next-flight decisions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa CPM turun belum tentu kemenangan?
   - **Current guide answer (not yet approved):** CPM lebih murah bisa disebabkan placement/audience quality menurun atau delivery bergeser; cek reach, attention, fraud, conversion, dan margin.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda delivery analysis dan effectiveness analysis?
   - **Current guide answer (not yet approved):** Delivery analysis memeriksa apakah placement, volume, timing, dan budget sesuai rencana; effectiveness analysis menilai perubahan audience atau business outcome.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa syarat rekomendasi optimization yang kuat?
   - **Current guide answer (not yet approved):** Root cause evidence, change spesifik, expected mechanism, KPI/guardrail, owner, dan batas inferensi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T03-CH10 — Media Planning Capstone
**Competency:** T03-C01, T03-C05

**Learning outcome under assessment:** Capstone Media Planning harus memperlihatkan alur dari brief hingga rekomendasi post-buy. Nilai utama bukan banyaknya chart, tetapi konsistensi audience, role, budget, forecast, flighting, buying handoff, KPI, dan evaluasi. Setiap angka diberi sumber atau label SIMULATED. Planner perlu mampu menjelaskan trade-off antara reach, frequency, quality, cost, timing, serta business objective.

**Required artifact / chapter-specific evidence checklist:** Siapkan media plan 10 slide plus workbook: brief, audience, inventory evaluation, channel roles, budget scenarios, reach/frequency forecast, flowchart, buying brief, KPI dashboard specification, post-buy evaluation plan, dan assumptions log.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang membuat media plan dapat dipertanggungjawabkan?
   - **Current guide answer (not yet approved):** Setiap keputusan terkait audience, task, inventory, budget, forecast, KPI, dan timing memiliki rationale serta sumber/asumsi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa forecast perlu scenario range?
   - **Current guide answer (not yet approved):** Inventory, audience, price, competition, creative readiness, dan response tidak pasti; satu angka tunggal memberi kepastian palsu.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus disiapkan untuk presentasi klien?
   - **Current guide answer (not yet approved):** Recommendation, logic, budget, KPI, timing, risks, assumptions, dependencies, owner, dan keputusan yang diminta.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T04-CH01 — Search Advertising Ecosystem & Auction Fundamentals
**Competency:** T04-C01

**Learning outcome under assessment:** Paid Search menangkap intent yang diekspresikan melalui query. Specialist harus memahami auction eligibility, Ad Rank, keyword/query, ad relevance, landing experience, conversion signal, bidding, dan budget. Search term bukan keyword target; platform dapat mencocokkan query melalui variasi. Performance dinilai dari kualitas demand dan kontribusi bisnis, bukan hanya klik atau impression.

**Required artifact / chapter-specific evidence checklist:** Buat search ecosystem map untuk satu kategori: query types, auction factors, account actors, conversion actions, landing-page match, dan KPI chain. Gunakan sample query nyata atau label SIMULATED.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa search bukan sekadar bidding keyword?
   - **Current guide answer (not yet approved):** Auction, query intent, relevance, landing experience, conversion signal, budget, dan competition bersama-sama menentukan delivery serta outcome.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa perbedaan keyword dengan search term?
   - **Current guide answer (not yet approved):** Keyword adalah target/setting yang dipilih advertiser; search term adalah query aktual yang memicu iklan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa conversion harus didefinisikan sebelum campaign?
   - **Current guide answer (not yet approved):** Bidding dan reporting belajar dari conversion signal; event yang salah mengarahkan algoritma serta keputusan budget ke outcome yang keliru.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T04-CH02 — Search Intent, Keyword Research & Competitor Analysis
**Competency:** T04-C02

**Learning outcome under assessment:** Keyword research menyusun peluang query berdasarkan intent, relevance, volume, competition, value, geography, seasonality, dan landing-page readiness. Search volume tidak sama dengan demand yang dapat dikonversi; keyword populer bisa tidak relevan, terlalu luas, atau punya economics buruk. Competitor ad research membantu melihat positioning dan SERP, tetapi tidak membuktikan biaya atau profit pesaing.

**Required artifact / chapter-specific evidence checklist:** Buat 30-keyword intent map dengan cluster, priority, expected query type, CPC/volume source, landing page, negative candidates, dan assumptions. Buat competitor SERP review untuk tiga query utama.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa volume tinggi tidak selalu berarti prioritas tinggi?
   - **Current guide answer (not yet approved):** Volume tanpa intent, conversion potential, margin, landing fit, dan economics bisa menghasilkan traffic mahal tetapi tidak bernilai.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bagaimana mengelompokkan keyword?
   - **Current guide answer (not yet approved):** Kelompokkan berdasarkan search intent, produk atau layanan, kebutuhan, brand, kompetitor, geografi, dan funnel context agar struktur serta pesan tetap relevan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa batas competitor ad analysis?
   - **Current guide answer (not yet approved):** Ad copy/visibility adalah observasi; tidak memberi akses ke bid, actual CPA, margin, atau conversion results pesaing.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T04-CH03 — Account, Campaign & Ad Group Architecture
**Competency:** T04-C03

**Learning outcome under assessment:** Campaign architecture mengatur hubungan account, campaign, ad group, keyword, ads, assets, audience, geography, language, budget, conversion action, dan landing page. Struktur yang baik memberi kontrol cukup tanpa memecah data terlalu kecil. Naming taxonomy memudahkan QA dan reporting; pemilihan campaign type harus mengikuti objective, channel inventory, feed, conversion readiness, dan kemampuan kontrol.

**Required artifact / chapter-specific evidence checklist:** Bangun account map untuk brand latihan: account settings, 3 campaign, ad groups, keyword clusters, ad assets, landing pages, conversion actions, naming, dan QA checks. Jelaskan alasan struktur.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa tidak membuat satu campaign untuk setiap keyword?
   - **Current guide answer (not yet approved):** Fragmentasi dapat membagi budget/conversion signals dan membuat learning serta management tidak efisien.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Kapan campaign perlu dipisah?
   - **Current guide answer (not yet approved):** Saat objective, budget, geo, product economics, brand protection, atau bidding strategy membutuhkan kontrol berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa tujuan naming taxonomy?
   - **Current guide answer (not yet approved):** Naming taxonomy membuat objek mudah dikenali, laporan konsisten, QA dapat diulang, perubahan dapat ditelusuri, dan handover antaroperator lebih aman.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T04-CH04 — Match Types, Negative Keywords & Search Terms
**Competency:** T04-C02, T04-C04

**Learning outcome under assessment:** Match type mengatur seberapa luas keyword dapat mencocokkan query, tetapi tidak boleh dianggap sebagai exact string match sederhana. Search terms report menunjukkan query yang benar-benar memicu iklan dan menjadi sumber optimasi. Negative keyword melindungi relevance, budget, brand safety, serta query intent. Pemilihan negatives harus hati-hati agar tidak memblokir query bernilai.

**Required artifact / chapter-specific evidence checklist:** Buat search-term mining worksheet dari data latihan minimal 100 rows: intent, relevance, cost, conversions, value, action (keep/negative/observe), rationale, serta owner/date. Tulis daftar negative beserta risiko false positive.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa fungsi search terms report?
   - **Current guide answer (not yet approved):** Menunjukkan query yang memicu iklan untuk menilai intent, relevansi, biaya, conversion quality, dan peluang keyword/negative.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko negative keyword terlalu agresif?
   - **Current guide answer (not yet approved):** Negative keyword yang terlalu luas dapat memblokir query relevan; review search terms dan gunakan pengecualian bertingkat sebelum menambahkan blokir.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa match type harus dicek di dokumentasi terbaru?
   - **Current guide answer (not yet approved):** Platform mengubah matching behavior dan close variants; label match tidak selalu berarti literal match.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T04-CH05 — Search Ad Copy, Assets & Landing Page Relevance
**Competency:** T04-C05

**Learning outcome under assessment:** Search ad copy harus menjawab query, menyampaikan benefit, memberi proof, dan mengarahkan ke landing page yang sesuai. Responsive Search Ads menguji kombinasi headline/description; assets menambah informasi dan action. Message match mengurangi cognitive friction: kata, offer, price, eligibility, dan CTA pada iklan harus selaras dengan destination page. Klaim harus dapat dibuktikan dan sesuai policy.

**Required artifact / chapter-specific evidence checklist:** Buat dua RSA concept untuk satu ad group: masing-masing 10–15 headline draft, empat description, assets, keyword theme, LP URL, proof requirement, dan policy checklist. Tandai klaim yang memerlukan substantiation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang dimaksud message match?
   - **Current guide answer (not yet approved):** Konsistensi antara query, ad promise, offer, dan konten landing page sehingga audience menemukan yang dijanjikan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa semua headline tidak harus memiliki CTA yang sama?
   - **Current guide answer (not yet approved):** Asset perlu melengkapi benefit, proof, offer, dan action; repetisi mengurangi kombinasi informasi yang tersedia.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang dilakukan jika CTR naik tetapi CVR turun?
   - **Current guide answer (not yet approved):** Audit query mix, promise-to-page match, audience quality, page experience, offer, dan tracking sebelum menyimpulkan creative lebih baik.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T04-CH06 — Campaign Types, Bidding Strategy & Budget Management
**Competency:** T04-C03, T04-C06

**Learning outcome under assessment:** Bidding dan budget menentukan cara platform berpartisipasi dalam auction dan mengejar conversion/value. Manual, Maximize Clicks, Maximize Conversions, target CPA, Maximize Conversion Value, dan target ROAS memiliki kebutuhan sinyal serta trade-off berbeda. Smart bidding memerlukan conversion tracking yang sehat, volume yang memadai, dan definisi value yang tepat. Budget pacing harus dipantau bersama spend, impression share, marginal CPA/ROAS, dan business margin.

**Required artifact / chapter-specific evidence checklist:** Simulasikan tiga bid strategies untuk satu campaign. Isi input signal, required data, budget, expected trade-off, monitoring metrics, guardrail, dan perubahan yang dilakukan pada kasus underdelivery/overspend.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa smart bidding tidak memperbaiki conversion tracking yang rusak?
   - **Current guide answer (not yet approved):** Algoritma mengoptimalkan signal yang diberikan; event salah/duplikat membuat learning dan budget allocation ikut salah.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko menetapkan target ROAS terlalu tinggi?
   - **Current guide answer (not yet approved):** Delivery dapat menyempit atau berhenti mengejar peluang yang masih profitable pada target bisnis sebenarnya.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang dipantau selain average CPA?
   - **Current guide answer (not yet approved):** Conversion value, margin, volume, query quality, impression share, budget pacing, new-customer share, dan marginal performance.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T04-CH07 — Conversion Tracking, Enhanced Conversions & Offline Conversion
**Competency:** T04-C06

**Learning outcome under assessment:** Conversion tracking mengubah business action menjadi signal yang dapat diukur dan dipakai bidding. Specialist harus membedakan page view, form submit, qualified lead, purchase, phone call, offline conversion, enhanced conversions, dan imported CRM outcomes. Event definition, count setting, value, attribution window, consent, deduplication, tag implementation, dan QA wajib disepakati sebelum optimasi.

**Required artifact / chapter-specific evidence checklist:** Buat conversion measurement spec untuk lead dan purchase: event name, trigger, parameters/value, tag owner, source of truth, consent, deduplication, QA test, offline import field, dan reconciliation plan.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa form submit belum tentu qualified lead?
   - **Current guide answer (not yet approved):** Submit hanya perilaku awal; qualification memerlukan validasi data, fit, sales response, dan outcome CRM.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko conversion double-counting?
   - **Current guide answer (not yet approved):** Double-counting membuat sistem bidding dan laporan menganggap hasil lebih banyak dari kenyataan, sehingga CPA, ROAS, dan keputusan optimasi menjadi bias.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa fungsi offline conversion import?
   - **Current guide answer (not yet approved):** Menghubungkan conversion yang terjadi di CRM/sales setelah click dengan campaign signal, sesuai identifier, privacy, dan rules.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T04-CH08 — Search Terms Analysis, Quality Score & Impression Share
**Competency:** T04-C04, T04-C06

**Learning outcome under assessment:** Diagnosis Search menggunakan search terms, auction insights, Quality Score components, impression share, landing-page signals, conversion rate, dan value. Quality Score adalah diagnostic indicator, bukan KPI bisnis atau tombol optimasi tunggal. Lost impression share karena budget berbeda dari rank. Analyst harus memisahkan issue query, competition, bid, relevance, page, tracking, dan budget sebelum membuat perubahan.

**Required artifact / chapter-specific evidence checklist:** Buat weekly search diagnosis report dengan segmentation, search term issues, lost IS, Quality Score components, LP issue, tracking check, root-cause hypotheses, prioritized actions, owner, dan follow-up date.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apakah Quality Score dapat menjadi business KPI?
   - **Current guide answer (not yet approved):** Tidak. Ia diagnostic indicator untuk relevance/auction context; success harus dilihat pada cost, qualified conversion, value, dan margin.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda lost IS budget dan lost IS rank?
   - **Current guide answer (not yet approved):** Budget loss menunjukkan batas anggaran; rank loss berkaitan competitiveness/Ad Rank, bid, relevance, dan auction context.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa diagnosis harus disegmentasi?
   - **Current guide answer (not yet approved):** Rata-rata account dapat menutupi query, device, region, atau landing-page pockets yang punya masalah berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T04-CH09 — Testing, Optimization, Reporting & Diagnosis
**Competency:** T04-C05, T04-C06

**Learning outcome under assessment:** Testing Search harus menguji satu hipotesis yang dapat dipisahkan dari perubahan lain. Variabel dapat berupa message angle, asset, landing page, match coverage, bid strategy, atau audience; test perlu primary metric, guardrail, randomization/experiment setup, sample/duration, seasonality control, dan stopping rule. Setelah test, interpretasikan effect size dan uncertainty, bukan hanya siapa yang tampak menang.

**Required artifact / chapter-specific evidence checklist:** Buat experiment backlog tiga test untuk Search: ad-message test, LP test, dan match/negative strategy test. Untuk satu test, lengkapi protocol, sample/duration assumptions, guardrails, QA, decision rule, dan results template.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa perubahan banyak variabel sekaligus berbahaya?
   - **Current guide answer (not yet approved):** Penyebab hasil tidak dapat diisolasi, sehingga tim tidak tahu intervensi mana yang memberi dampak.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa arti hasil inconclusive?
   - **Current guide answer (not yet approved):** Bukti belum cukup untuk memilih pemenang; itu bukan bukti bahwa variasi identik.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan eksperimen sebaiknya dihentikan?
   - **Current guide answer (not yet approved):** Sesuai pre-defined stopping rule, misalnya safety issue, tracking failure, budget limit, atau sample/time threshold—bukan saat hasil disukai.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T04-CH10 — Paid Search Capstone
**Competency:** T04-C03, T04-C06

**Learning outcome under assessment:** Capstone Paid Search menguji kemampuan mengelola jalur dari intent sampai conversion dan diagnosis. Paket kerja harus menyatukan keyword architecture, campaign build, RSA/assets, bidding/budget, conversion tracking, negative strategy, QA, reporting, dan optimization. Semua forecast atau data yang tidak berasal dari account aktual wajib ditandai SIMULATED. Hasil harus dijelaskan menurut intent dan economics, bukan hanya platform metrics.

**Required artifact / chapter-specific evidence checklist:** Bangun Search case-study workbook: brief, intent map 30 keywords, architecture, RSA assets, negative list, bid/budget scenario, conversion spec, QA log, weekly report, 3 optimizations, dan executive summary.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang membuat paid search capstone berbeda dari kumpulan keyword?
   - **Current guide answer (not yet approved):** Ia membuktikan intent-to-conversion system, termasuk architecture, message match, economics, tracking, optimization, dan QA.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa qualified lead lebih bernilai daripada raw form volume?
   - **Current guide answer (not yet approved):** Qualified lead lebih dekat ke pipeline/revenue; raw form dapat dipenuhi spam atau audience yang tidak sesuai.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana membedakan actual dan simulated result di portfolio?
   - **Current guide answer (not yet approved):** Gunakan label jelas, jelaskan sumber/rumus, jangan klaim client spend atau campaign outcome yang tidak pernah terjadi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T05-CH01 — Social Advertising Ecosystem & Account Structure
**Competency:** T05-C01

**Learning outcome under assessment:** Paid social adalah aktivitas membeli inventory iklan pada platform sosial secara terencana dan terukur. Pekerjaan specialist menghubungkan outcome bisnis, akun platform, aset identitas, sumber data, audience, creative, auction/delivery, measurement, dan optimization. Meta dan TikTok menjadi platform praktik utama; LinkedIn merupakan pendalaman untuk kebutuhan B2B, sedangkan Pinterest, Snapchat, Reddit, atau X dipelajari sesuai kebutuhan pasar dan akses akun.

**Required artifact / chapter-specific evidence checklist:** Buat asset-and-permission register untuk satu brand fiktif. Kolom minimal: platform, jenis aset, account ID sintetis, legal owner, agency partner, assigned role, admin backup, status 2FA, tanggal access review terakhir, status, dan evidence. Tandai seluruh ID sebagai SIMULATED. Jangan memasukkan email, password, ID akun pribadi, atau data pelanggan sungguhan.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Siapa yang seharusnya tetap memiliki aset digital utama brand ketika iklan dikelola agency?
   - **Current guide answer (not yet approved):** Brand atau badan usaha pemilik bisnis sebaiknya mempertahankan ownership. Agency memperoleh partner/person access yang dibutuhkan, bukan mengambil alih kepemilikan atau meminta password personal.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa full admin access tidak boleh diberikan ke seluruh anggota tim?
   - **Current guide answer (not yet approved):** Hak admin yang terlalu luas memperbesar dampak jika terjadi kesalahan atau account compromise. Least privilege membatasi tindakan setiap orang sesuai tugas dan membuat access review serta offboarding lebih mudah diaudit.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa perbedaan ad account, Page/identity, dan Pixel/dataset?
   - **Current guide answer (not yet approved):** Ad account mengelola pembelian serta campaign; Page atau identity mewakili identitas advertiser pada iklan; Pixel/dataset menerima event untuk measurement. Ketiganya saling terhubung, tetapi bukan aset yang sama.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T05-CH02 — Campaign Objective, Funnel & Conversion Location
**Competency:** T05-C01

**Learning outcome under assessment:** Campaign objective menjelaskan hasil yang diminta dari optimasi platform; funnel menggambarkan perjalanan konsumen; conversion location menunjukkan tempat tindakan terjadi; performance goal dan optimization event menentukan sinyal delivery. Semuanya saling berkaitan, tetapi bukan istilah yang dapat saling menggantikan. Nama objective, conversion location, dan goal dapat berubah sesuai platform, campaign type, serta eligibility akun. Periksa pilihan aktual di Ads Manager sebelum launch.

**Required artifact / chapter-specific evidence checklist:** Buat objective decision tree untuk tiga brief: (A) awareness produk baru, (B) purchase melalui website, dan (C) lead konsultasi melalui Instant Form atau messaging. Untuk setiap brief, tulis business outcome, platform, objective yang tersedia, conversion location, performance goal/event, KPI utama, diagnostic metric, tracking requirement, dan alasan menolak alternatif. Tandai asumsi yang belum terbukti.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa perbedaan objective dan KPI?
   - **Current guide answer (not yet approved):** Objective platform adalah arah optimasi campaign; KPI adalah ukuran untuk menilai pencapaian outcome bisnis. Memilih objective tidak otomatis membuktikan campaign berhasil.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa Traffic tidak otomatis tepat untuk brief yang meminta penjualan?
   - **Current guide answer (not yet approved):** Traffic mengoptimalkan kunjungan atau sinyal traffic terkait, bukan selalu purchase. Klik murah tetap dapat menghasilkan conversion rate rendah, CPA tinggi, atau margin yang buruk.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus diperiksa sebelum memilih Purchase sebagai optimization event?
   - **Current guide answer (not yet approved):** Pastikan checkout berjalan, event terpicu, parameter value/currency benar, deduplication berfungsi bila diperlukan, consent dihormati, serta kualitas sinyal memadai.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T05-CH03 — Audience Research, Segmentation & Targeting
**Competency:** T05-C02

**Learning outcome under assessment:** Audience strategy dimulai dari kebutuhan dan perilaku konsumen, lalu diterjemahkan menjadi sumber data, aturan segmentasi, exclusions, serta hipotesis yang bisa diuji. Custom Audience biasanya memakai sumber first-party atau interaksi platform yang diizinkan; Lookalike Audience memodelkan prospek dari karakteristik source audience; interest/behavior memberi sinyal targeting; broad atau automated audience memberi ruang lebih luas bagi sistem. Ketersediaan fitur berbeda menurut platform dan akun. Jangan mengunggah atau mengaktifkan data pelanggan tanpa hak, consent, dan dasar penggunaan yang sesuai.

**Required artifact / chapter-specific evidence checklist:** Bangun audience matrix dengan kolom: segment, business role, source, inclusion rule, exclusion rule, lookback/recency, consent status, estimated size, overlap risk, message angle, KPI, dan test hypothesis. Buat minimal segmen prospecting, retargeting, serta existing-customer/retention. Gunakan data sintetis jika data first-party berizin tidak tersedia.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa daftar seluruh pengunjung website tidak otomatis menjadi seed Lookalike terbaik?
   - **Current guide answer (not yet approved):** Pengunjung memiliki niat dan kualitas yang beragam. Seed harus mewakili outcome yang dicari dan cukup valid; buyer terverifikasi atau qualified lead dapat lebih relevan jika sumbernya sah serta ukurannya memadai.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko retargeting tanpa exclusion pelanggan yang sudah membeli?
   - **Current guide answer (not yet approved):** Pembeli lama bisa terus menerima pesan akuisisi yang sama, audience dapat overlap, dan frequency meningkat tanpa menambah nilai incremental.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bolehkah data pelanggan sensitif digunakan untuk membuat audience?
   - **Current guide answer (not yet approved):** Jangan menggunakan atau mengirim data sensitif yang dilarang platform atau tidak memiliki dasar pemrosesan yang sah. Ikuti consent, privacy law, platform policy, serta prinsip minimisasi data.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T05-CH04 — Campaign, Ad Set & Ad Architecture
**Competency:** T05-C01

**Learning outcome under assessment:** Campaign architecture menyusun hubungan objective, budget, audience, placement, creative, dan reporting. Meta umumnya memakai hierarchy Campaign → Ad Set → Ad; TikTok Ads Manager memakai Campaign → Ad Group → Ad. Konsep levelnya mirip, tetapi setting dan tanggung jawabnya tidak identik. Pada TikTok, campaign setup mencakup objective dan campaign budget; ad group mengatur antara lain placement, targeting, schedule, optimization, dan bid; ad memuat identity, creative, copy, CTA, URL, serta tracking. Selalu validasi workflow dan pilihan terbaru di masing-masing platform.

**Required artifact / chapter-specific evidence checklist:** Buat dua blueprint terpisah: satu untuk Meta dan satu untuk TikTok. Sertakan campaign name/ID, objective, budget level, Ad Set/Ad Group, audience, placement, optimization event, bid strategy, schedule, ad/creative ID, CTA, destination URL, UTM, owner, dan QA status. Jelaskan kapan suatu group perlu dipisahkan dan kapan lebih baik digabung.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Bisakah hierarchy Campaign → Ad Set → Ad di Meta disalin mentah ke TikTok?
   - **Current guide answer (not yet approved):** Tidak. Konsep hierarchy sebanding, tetapi nama objek dan setting yang tersedia berbeda. Gunakan Campaign → Ad Group → Ad untuk TikTok dan petakan setting sesuai dokumentasi platform.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Kapan campaign perlu dipisahkan?
   - **Current guide answer (not yet approved):** Ketika objective, market, budget ownership, governance, atau rancangan test memang membutuhkan isolasi. Jangan memisahkan hanya untuk menambah jumlah baris atau membuat campaign tersendiri untuk setiap creative.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa naming convention dibuat sebelum launch?
   - **Current guide answer (not yet approved):** Naming konsisten mempercepat QA, filtering reporting, handover, reconciliation, dan audit perubahan antar-campaign.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T05-CH05 — Creative Strategy, Format, Placement & Messaging
**Competency:** T05-C03

**Learning outcome under assessment:** Creative merupakan bagian dari sistem optimasi, bukan dekorasi setelah media plan selesai. Mulai dari audience tension dan product truth, lalu turunkan menjadi angle, hook, proof, format, message, CTA, serta kesinambungan landing page. Satu iklan sebaiknya menyampaikan satu proposisi utama dan satu tindakan yang jelas. Format dan placement harus mengikuti spesifikasi platform, safe zone, cropping, aspect ratio, caption/audio, serta konteks konsumsi. Hak penggunaan creator content, musik, testimonial, dan partnership ads harus dipastikan sebelum amplifikasi.

**Required artifact / chapter-specific evidence checklist:** Buat tiga creative concept untuk satu produk latihan. Setiap concept memuat audience insight, angle, hook, proof, storyboard/shot list, format/placement, primary copy, CTA, landing-page promise, creator/usage rights, policy check, dan hypothesis. Susun test matrix yang mengisolasi variabel utama serta tetapkan diagnostic metric dan outcome metric.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa perbedaan hook, angle, dan proof?
   - **Current guide answer (not yet approved):** Angle adalah sudut pesan atau manfaat; hook adalah pembuka yang menarik perhatian; proof adalah bukti yang membuat klaim lebih kredibel, misalnya demonstrasi, fakta terverifikasi, atau testimonial yang berizin.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa creative dengan CTR tinggi tetap dapat berkinerja buruk?
   - **Current guide answer (not yet approved):** CTR tinggi bisa berasal dari rasa penasaran atau clickbait tanpa kunjungan berkualitas dan purchase. Periksa landing-page view, conversion rate, CPA, revenue/margin, serta kualitas lead/customer.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus dicek sebelum menggunakan konten creator sebagai iklan?
   - **Current guide answer (not yet approved):** Cakupan dan durasi usage rights, platform/placement yang diizinkan, paid amplification atau whitelisting permission, disclosure, hak musik/asset, brand safety, dan kepatuhan klaim.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T05-CH06 — Auction, Bid Strategy, Budget & Delivery
**Competency:** T05-C04

**Learning outcome under assessment:** Auction menentukan iklan yang memenuhi syarat untuk memperoleh kesempatan delivery. Hasil tidak ditentukan bid saja; platform juga mempertimbangkan predicted action, relevance/quality, serta delivery rules. Bedakan budget, level budget, bid, cost cap/goal, dan target ROAS. Nama serta ketersediaan strategi berbeda antarpublisher dan objective. Jangan menganggap istilah CBO/ABO Meta berlaku identik di TikTok. Target efisiensi harus diturunkan dari unit economics, bukan hanya benchmark CPM.

**Required artifact / chapter-specific evidence checklist:** Buat budget-and-bidding sheet sintetis. Input: AOV, margin, allowable CPA, target ROAS, budget, asumsi CTR/CVR, forecast conversions, planned daily spend, actual spend, dan variance. Uji skenario CPA 25% lebih tinggi dan CVR 20% lebih rendah. Berikan rekomendasi continue, test, limit, atau stop beserta risiko dan bukti yang masih kurang.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa bid bukan satu-satunya faktor yang menentukan hasil auction?
   - **Current guide answer (not yet approved):** Platform menggabungkan bid dengan predicted action, relevance/quality signals, dan eligibility. Bid lebih tinggi tidak otomatis menghasilkan outcome paling efisien.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa perbedaan budget dan bid?
   - **Current guide answer (not yet approved):** Budget mengatur atau membatasi spend pada periode dan level tertentu. Bid strategy memengaruhi cara platform bersaing di auction atau mengontrol target biaya/volume.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apakah ROAS 5x berarti profit 5x?
   - **Current guide answer (not yet approved):** Tidak. Revenue ROAS adalah attributed revenue dibagi ad spend. Profit harus memperhitungkan margin serta biaya produk, fulfilment, diskon, fee, refund, dan biaya relevan lainnya.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T05-CH07 — Pixel, CAPI, Events API, UTM & Tracking
**Competency:** T05-C05

**Learning outcome under assessment:** Tracking menghubungkan interaksi iklan dengan tindakan di website/app. Browser Pixel mengirim event dari browser; Conversions API/Events API mengirim event melalui server atau koneksi data. Keduanya dapat saling melengkapi, tetapi tidak menghapus kewajiban consent, privacy, dan minimisasi data. Event design harus punya definisi bisnis, event name, waktu, value/currency, source, dan parameter yang diperlukan. Jika event yang sama dikirim melalui browser dan server, ikuti aturan deduplication provider. TikTok secara eksplisit meminta event_id yang sama pada event overlap dari Pixel dan Events API. UTM mengelompokkan traffic; UTM bukan pengganti event tracking.

**Required artifact / chapter-specific evidence checklist:** Buat event map dan tracking QA sheet untuk website e-commerce fiktif. Kolom minimal: funnel stage, event name, trigger, event source, event_id rule, parameters, consent dependency, platform destination, dedup rule, UTM fields, test case, expected result, actual result, evidence, owner, dan defect severity. Sertakan satu tes duplicate browser/server dan expected count-nya. Tandai seluruh data sebagai SIMULATED.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa fungsi event_id saat event yang sama dikirim melalui browser dan server?
   - **Current guide answer (not yet approved):** event_id yang cocok membantu platform mengenali dua kiriman sebagai satu kejadian dan melakukan deduplication sesuai ketentuan provider. TikTok secara eksplisit meminta event_id yang sama pada event overlap antara Pixel dan Events API.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apakah UTM dapat menggantikan Pixel atau Conversions API?
   - **Current guide answer (not yet approved):** Tidak. UTM mengelompokkan traffic campaign pada analytics; Pixel/API mengirim event serta parameter tindakan ke platform iklan. Fungsinya berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apakah server-side tracking membuat consent tidak diperlukan?
   - **Current guide answer (not yet approved):** Tidak. Pengiriman melalui server tidak menghapus kewajiban privacy, consent, legal basis, platform policy, atau data minimization.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T05-CH08 — Learning Phase, Pacing, Frequency & Troubleshooting
**Competency:** T05-C06

**Learning outcome under assessment:** Learning phase adalah periode awal delivery saat sistem mengeksplorasi dan mengumpulkan signal untuk menemukan audience yang paling mungkin mencapai optimization goal. Performa dapat berfluktuasi; fluktuasi saja bukan bukti campaign gagal. Jangan menerapkan satu ambang untuk semua platform atau objective. Panduan umum TikTok yang diperbarui Juni 2026 menyebut volatilitas biasanya mulai menurun setelah sekitar 25 hasil campaign atau 7 hari. Angka tersebut bersifat indikatif, bukan jaminan status learning selesai. Guidance objective-specific dapat berbeda. Jangan menerapkan benchmark TikTok ke Meta.

**Required artifact / chapter-specific evidence checklist:** Buat troubleshooting playbook untuk lima gejala: (1) spend tidak mulai, (2) CPM naik, (3) CTR turun, (4) frequency naik sementara conversion turun, dan (5) purchase/event tidak tercatat. Untuk setiap gejala tulis symptom, possible causes, diagnostic checks, evidence yang diperlukan, low-risk action pertama, escalation point, dan metric untuk memvalidasi perbaikan.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apakah 25 hasil atau 7 hari menjamin campaign TikTok keluar dari learning phase?
   - **Current guide answer (not yet approved):** Tidak. Panduan umum TikTok menyebut volatilitas biasanya mulai menurun pada kisaran tersebut. Itu indikator stabilisasi, bukan jaminan perubahan status untuk setiap objective, account, atau campaign.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bisakah benchmark learning TikTok diterapkan ke Meta?
   - **Current guide answer (not yet approved):** Tidak. Sistem, signal, dan guidance kedua platform berbeda. Gunakan dokumentasi terkini sesuai platform dan optimization event yang dipakai.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa mengubah budget, audience, creative, dan event sekaligus menyulitkan diagnosis?
   - **Current guide answer (not yet approved):** Beberapa faktor berubah bersamaan sehingga efek masing-masing tidak bisa dipisahkan. Change log serta intervensi yang terkontrol membuat evaluasi lebih dapat dipercaya.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T05-CH09 — Creative Testing, Reporting & Performance Optimization
**Competency:** T05-C03, T05-C06

**Learning outcome under assessment:** Optimization harus dimulai dari business outcome lalu bergerak ke diagnosis, bukan dari satu metrik ke tindakan spontan. CTR, CPC, CPM, video views, dan frequency membantu menjelaskan delivery; conversion rate, CPA, revenue, margin, lead quality, dan retention lebih dekat dengan nilai bisnis. Creative testing yang baik menetapkan hypothesis, variabel utama, audience, budget, duration, primary metric, guardrail, dan decision rule sebelum test berjalan. A/B test sulit diinterpretasikan jika banyak variabel berubah sekaligus atau basis reporting tidak sebanding.

**Required artifact / chapter-specific evidence checklist:** Gunakan dataset SIMULATED untuk dua atau tiga creative. Hitung CPM, CTR, CPC, landing-page-view rate, CVR, CPA, revenue, revenue ROAS, dan contribution setelah biaya iklan. Buat tabel atau chart, tunjukkan funnel drop-off, lalu berikan keputusan scale, iterate, hold, atau stop. Jelaskan mengapa attributed performance saja tidak cukup untuk mengklaim causal lift tanpa control/holdout atau desain kausal yang sesuai.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa creative dengan CTR lebih rendah masih dapat menang secara bisnis?
   - **Current guide answer (not yet approved):** Creative tersebut mungkin membawa traffic lebih sedikit tetapi lebih berkualitas, sehingga conversion atau margin lebih baik. Evaluasi outcome, CPA, revenue/margin, dan kualitas lead/customer bersama CTR.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang harus konsisten sebelum membandingkan dua creative?
   - **Current guide answer (not yet approved):** Conversion definition, objective, audience eligibility, attribution window, reporting period, budget/exposure, landing-page experience, serta variabel yang diuji harus cukup sebanding.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apakah ROAS yang lebih tinggi otomatis membuktikan incrementality?
   - **Current guide answer (not yet approved):** Tidak. ROAS menunjukkan attributed revenue per ad spend dalam setup measurement tertentu. Incrementality memerlukan counterfactual yang kredibel seperti holdout atau randomized experiment.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T05-CH10 — Paid Social Capstone
**Competency:** T05-C06

**Learning outcome under assessment:** Capstone menguji kemampuan menghubungkan business brief sampai rekomendasi optimization yang dapat dipertanggungjawabkan. Satu paket kerja harus menunjukkan commercial guardrails, objective, audience, campaign architecture per platform, creative strategy, budget/bidding, tracking, QA, reporting, serta decision log. Meta dan TikTok menjadi scope inti; TikTok Shop/Lead Gen dan LinkedIn ditambahkan bila conversion path serta business case mendukung. Angka contoh tanpa data advertiser wajib diberi label SIMULATED.

**Required artifact / chapter-specific evidence checklist:** Susun satu capstone folder berisi: (1) brief restatement dan unit economics, (2) platform role/objective decision, (3) Meta dan TikTok architecture, (4) audience matrix, (5) creative strategy dan test matrix, (6) budget/bid/pacing sheet, (7) event map + UTM + deduplication plan, (8) pre-launch QA checklist, (9) weekly report memakai data SIMULATED, dan (10) optimization memo. Presentasikan keputusan dalam 8–10 slide. Beri skor 0–3 untuk business logic, platform setup, creative/testing, tracking/QA, commercial analysis, dan evidence/limitations. Setiap area harus minimal 2; setidaknya dua area harus mendapat 3 sebelum pekerjaan disebut portfolio-ready.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang membedakan capstone portfolio-ready dari campaign mock-up biasa?
   - **Current guide answer (not yet approved):** Ada alur yang dapat ditelusuri dari brief dan unit economics ke objective, audience, structure, creative, budget, tracking, QA, hasil, serta keputusan. File dapat direplikasi dan semua asumsi/data diberi label dengan jujur.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bagaimana data performa sintetis harus ditampilkan?
   - **Current guide answer (not yet approved):** Beri label SIMULATED pada setiap tabel/chart, jelaskan cara pembuatannya, dan jangan menyebutnya hasil campaign aktual atau client work.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa saja yang harus ada dalam optimization memo?
   - **Current guide answer (not yet approved):** Keputusan, evidence, perbandingan KPI dengan target, diagnosis, risk/limitation, owner, timeline, dan next test yang spesifik.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH01 — Programmatic Ecosystem: DSP, SSP, Exchange & Ad Server
**Competency:** T06-C01

**Learning outcome under assessment:** Programmatic adalah pembelian inventory digital melalui platform dan automation, bukan nama lain untuk semua paid media. Ekosistem mencakup advertiser/agency, DSP, ad exchange, SSP, publisher/ad server, data/identity partners, dan verification. Setiap pihak memiliki peran dalam auction, targeting, delivery, measurement, dan biaya. Trader harus memahami supply chain untuk membaca fees, latency, quality, transparency, dan accountability.

**Required artifact / chapter-specific evidence checklist:** Buat programmatic ecosystem diagram dan cost-flow workbook untuk satu campaign. Sertakan owner, object, data/signal, fee layer, risk, dan kontrol pada setiap node.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa perbedaan DSP dan SSP?
   - **Current guide answer (not yet approved):** DSP membantu advertiser membeli inventory; SSP membantu publisher mengelola dan menjual inventory.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa programmatic tidak sama dengan paid social?
   - **Current guide answer (not yet approved):** Programmatic membeli inventory lintas publisher melalui DSP/exchange; paid social berjalan pada platform social dengan inventory/audience system masing-masing.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa supply-chain transparency penting?
   - **Current guide answer (not yet approved):** Intermediary fees, reselling, unauthorized supply, dan poor-quality inventory dapat mengurangi net value dan accountability.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH02 — Auction Mechanics, OpenRTB & Supply Path
**Competency:** T06-C01

**Learning outcome under assessment:** OpenRTB dan auction mechanics menjelaskan bagaimana bid request, impression opportunity, buyer response, price, dan creative diproses. Supply path menentukan rantai pihak yang terlibat dari publisher menuju DSP. Trader perlu memahami auction type, bid floor, timeout, win rate, clearing dynamics, deal identifiers, reseller, dan ads.txt/sellers.json sebagai sinyal otorisasi. Tidak semua mekanisme lelang bersifat first-price dengan implementasi identik.

**Required artifact / chapter-specific evidence checklist:** Buat bid-flow diagram dan supply-path audit untuk dua inventory scenarios. Isi request signals, eligibility, auction/deal type, fee layers, authorized sellers checks, timeout risk, dan optimization actions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa itu bid floor?
   - **Current guide answer (not yet approved):** Bid floor adalah harga minimum yang ditetapkan supply side untuk impression atau deal yang eligible; bid di bawahnya dapat kalah atau tidak terlayani.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa fungsi ads.txt dan sellers.json?
   - **Current guide answer (not yet approved):** ads.txt dan sellers.json membantu mengungkap pihak yang berwenang menjual inventory; keduanya meningkatkan transparansi tetapi tidak menjamin traffic bebas fraud.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa bid tinggi tidak menjamin win?
   - **Current guide answer (not yet approved):** Eligibility, deal rules, timeout, floor, auction competition, creative compatibility, dan supply signals juga menentukan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH03 — Audience, Data Strategy, Identity & Privacy
**Competency:** T06-C02

**Learning outcome under assessment:** Audience strategy programmatic menggabungkan first-party data, contextual, publisher segments, third-party data, identity solutions, dan privacy/consent. Audience targeting harus sesuai objective dan data rights. Cookie deprecation, browser restrictions, consent, match rates, data provenance, and identity interoperability dapat memengaruhi scale serta accuracy. Contextual targeting tidak sama dengan behavioral identity targeting.

**Required artifact / chapter-specific evidence checklist:** Buat audience decision matrix: first-party, contextual, publisher, and third-party options. Sertakan reach/match assumption, consent basis, quality risks, freshness, cost, and use-case fit.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda first-party audience dan third-party data?
   - **Current guide answer (not yet approved):** First-party berasal dari hubungan/interaksi langsung organisasi; third-party diperoleh dari sumber/pihak eksternal dengan ketentuan penggunaan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa match rate bukan audience quality?
   - **Current guide answer (not yet approved):** Match rate hanya menunjukkan keberhasilan matching; tidak membuktikan intent, freshness, identity accuracy, atau conversion likelihood.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan contextual targeting lebih tepat?
   - **Current guide answer (not yet approved):** Ketika page/content context relevan dan identity/consent constraints membatasi behavioral targeting, dengan QA brand suitability.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH04 — Inventory, Formats & Deal Types
**Competency:** T06-C03

**Learning outcome under assessment:** Inventory mencakup format, device, environment, publisher, geo, audience, placement, viewability, fraud risk, and suitability. Deal types memberi tingkat kontrol dan komitmen berbeda. Trader perlu menilai inventory fit, scale, measurement eligibility, creative constraints, and cost. CTV, audio, video, display, native, in-app, DOOH, and mobile web memiliki kebutuhan asset, verification, and measurement berbeda.

**Required artifact / chapter-specific evidence checklist:** Buat inventory matrix minimal enam opsi (display, video, CTV, audio, native, in-app atau DOOH) dengan format specs, deal type, audience, quality checks, cost assumptions, and use-case rationale.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda brand safety dan brand suitability?
   - **Current guide answer (not yet approved):** Safety menghindari konten yang jelas berbahaya; suitability menilai kesesuaian konteks dengan brand/category tolerance.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa perbedaan PMP dan programmatic guaranteed?
   - **Current guide answer (not yet approved):** PMP biasanya private auction access; programmatic guaranteed memiliki komitmen inventory/price/delivery yang disepakati.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa format harus divalidasi sebelum buying?
   - **Current guide answer (not yet approved):** Format incompatibility dapat menyebabkan rejection, rendering error, underdelivery, atau pengalaman iklan buruk.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH05 — DSP Architecture & Platform Navigation
**Competency:** T06-C01, T06-C04

**Learning outcome under assessment:** DSP navigation dimulai dengan memahami hirarki advertiser, campaign, insertion order/order, line item, targeting, creative, budget, flight, frequency, and optimization. Nomenclature antar-DSP berbeda; prinsip dasarnya tetap sama. DV360 menjadi platform utama belajar di roadmap, sedangkan The Trade Desk dan Amazon DSP dibandingkan pada capability serta inventory ecosystem. Tool access bergantung pada organisasi/partner dan tidak boleh dijanjikan hanya dari kursus.

**Required artifact / chapter-specific evidence checklist:** Buat DSP setup workbook untuk satu campaign: object hierarchy, naming, budgets, bids, audiences, inventory/deals, creatives, tracking, permissions, launch checklist, and monitoring cadence.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa platform interface skills tidak cukup?
   - **Current guide answer (not yet approved):** Trader harus memahami auction, supply, data, economics, verification, measurement, dan troubleshooting di balik kontrol UI.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda line item dengan creative?
   - **Current guide answer (not yet approved):** Line item mengatur delivery, targeting, bid, budget, dan schedule; creative adalah asset yang ditayangkan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apakah sertifikasi DV360 otomatis memberi akses live seat?
   - **Current guide answer (not yet approved):** Tidak. Sertifikat membuktikan pembelajaran atau assessment, sedangkan seat live bergantung pada organisasi, partner access, kontrak, dan ketentuan platform.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH06 — Campaign Structure, Trafficking & Creative Setup
**Competency:** T06-C04

**Learning outcome under assessment:** Campaign setup/trafficking memastikan plan dapat diterjemahkan menjadi objek dan creative yang siap diperdagangkan. Brief, naming, IO/line item, deal IDs, audience, creative spec, click URL, trackers, macros, event tags, and approvals harus sinkron. Trafficking berbeda dari media strategy: tugasnya menjaga akurasi konfigurasi dan bukti QA, bukan menentukan seluruh business strategy.

**Required artifact / chapter-specific evidence checklist:** Buat trafficking sheet, creative spec matrix, macro/URL map, tag map, deal checklist, and QA evidence for one synthetic DSP campaign.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa risiko click macro salah?
   - **Current guide answer (not yet approved):** Click macro yang salah dapat memutus redirect, menghapus parameter, mengganggu billing, atau membuat klik tidak tercatat pada sistem pengukuran.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa trafficking sheet menjadi single source of truth?
   - **Current guide answer (not yet approved):** Sheet mengikat object, tag, date, budget, creative, owner, approval, dan status untuk mencegah konfigurasi berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa bukti QA selain upload success?
   - **Current guide answer (not yet approved):** Upload success hanya mengonfirmasi file diterima; QA juga memerlukan preview, click test, landing validation, tracking verification, policy approval, dan sign-off.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH07 — Bidding, Budget, Pacing & Frequency Management
**Competency:** T06-C05, T06-C07

**Learning outcome under assessment:** Bidding, budget, pacing, and frequency management mengontrol delivery dalam batas economics dan campaign objective. Pahami bid strategy, auction pressure, bid shading where relevant, win rate, clearing price, pacing algorithm, frequency caps, reach, and spend curve. Jangan mengubah bid/budget tanpa memeriksa inventory, audience, floor, conversion signals, and campaign stage. Platform automation berbeda sehingga jangan menganggap satu setting berlaku sama di seluruh DSP.

**Required artifact / chapter-specific evidence checklist:** Buat pacing simulator harian dengan planned vs actual spend, bid, win rate, CPM, frequency, reach, and outcomes. Simulasikan underdelivery, overspend, and fatigue; dokumentasikan root-cause decisions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa menaikkan bid tidak selalu menyelesaikan underspend?
   - **Current guide answer (not yet approved):** Inventory eligibility, targeting, deal/creative issues, supply, and timeouts dapat menjadi bottleneck selain bid.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko frequency terlalu tinggi?
   - **Current guide answer (not yet approved):** Frequency berlebihan dapat memboroskan spend, menimbulkan ad fatigue dan pengalaman negatif, serta memberi tambahan reach yang semakin kecil.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa beda average CPM dan clearing price?
   - **Current guide answer (not yet approved):** Average CPM merangkum biaya hasil delivery; clearing price adalah harga auction pada impression tertentu/menurut mekanisme platform.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH08 — PMP, Preferred Deals & Programmatic Guaranteed
**Competency:** T06-C03

**Learning outcome under assessment:** PMP, Preferred Deals, dan Programmatic Guaranteed mengubah cara advertiser mengakses publisher inventory dan menyepakati harga/delivery. Setiap deal memiliki buyer/seller IDs, deal ID, floor/fixed price, targeting, dates, format, priority, inventory scope, and delivery terms. Trader wajib menguji compatibility dan memahami apakah deal bersifat invitation, non-guaranteed, atau guaranteed; label platform dapat berbeda.

**Required artifact / chapter-specific evidence checklist:** Buat deal negotiation matrix dan activation checklist untuk PMP, Preferred, dan PG. Isikan seller/buyer seat, deal ID, floor/price, volume, formats, dates, targeting, guarantee, QA, and delivery escalation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda preferred deal dan PMP auction?
   - **Current guide answer (not yet approved):** Preferred biasanya memberi akses/first look dengan harga tertentu tanpa guarantee; PMP umumnya private auction dengan buyers invited, terms platform-specific.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang perlu dikonfirmasi sebelum PG?
   - **Current guide answer (not yet approved):** Volume, dates, price, inventory, priority, format, audience, guarantee, makegood, cancellation, and measurement terms.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa deal ID perlu di-test?
   - **Current guide answer (not yet approved):** Deal dapat gagal karena seat/seller mismatch, targeting, format, dates, price, atau line-item setup.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH09 — Brand Safety, Viewability, IVT & Supply Quality
**Competency:** T06-C06

**Learning outcome under assessment:** Brand safety, suitability, viewability, invalid traffic, and supply quality adalah dimensi berbeda. Brand safety menghindari konten berisiko; suitability mencocokkan toleransi brand; viewability mengukur apakah iklan memenuhi kriteria terlihat; IVT mengidentifikasi traffic tidak valid; supply quality menilai transparency, duplication, fees, and publisher quality. Vendor verification memiliki methodology/coverage yang harus dipahami.

**Required artifact / chapter-specific evidence checklist:** Buat supply-quality scorecard untuk 10 inventory sources: brand safety, suitability, viewability, IVT, seller authorization, fees, transparency, data coverage, and remediation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda viewability dengan attention?
   - **Current guide answer (not yet approved):** Viewability mengukur peluang terlihat menurut standard; attention mengukur engagement/notice lebih jauh dan memerlukan metode berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa unmeasured impression bukan otomatis failure?
   - **Current guide answer (not yet approved):** Sebagian inventory tidak terukur karena coverage/technical limits; laporkan sebagai unmeasured terpisah dari non-viewable.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apakah ads.txt menjamin inventory aman?
   - **Current guide answer (not yet approved):** Tidak. Ia membantu mengidentifikasi authorized sellers, tetapi fraud/suitability/viewability tetap membutuhkan controls lain.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH10 — CM360, Floodlight, Attribution & Measurement
**Competency:** T06-C01, T06-C06

**Learning outcome under assessment:** CM360 dan Floodlight memiliki peran ad-serving dan measurement yang perlu dibedakan dari DSP reporting. CM360 mengelola advertiser/campaign/site/placement/ad/creative/trackers; Floodlight mengukur activities/conversions menurut counting method, attribution, and window. Discrepancy antara DSP, CM360, dan analytics sering muncul dari event definition, time zone, click/view windows, deduplication, redirects, latency, and consent.

**Required artifact / chapter-specific evidence checklist:** Buat measurement architecture diagram dan discrepancy reconciliation workbook yang membandingkan DSP, CM360/Floodlight, dan GA4. Include event mapping, window, timezone, dedupe, consent, and limits.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda ad server dengan DSP?
   - **Current guide answer (not yet approved):** Ad server mengatur ad decisioning, delivery, dan tracking; DSP membantu advertiser membeli inventory melalui auction, targeting, bidding, dan deal access.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa Floodlight counts dapat berbeda dengan GA4 purchase?
   - **Current guide answer (not yet approved):** Counting method, attribution, time zone, identity, consent, deduplication, event definition, and processing berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa UTM bukan pengganti Floodlight?
   - **Current guide answer (not yet approved):** UTM memberi label campaign pada session/source; Floodlight merekam conversion activity sesuai setup measurement.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH11 — Optimization, Reporting & Post-Campaign Analysis
**Competency:** T06-C07

**Learning outcome under assessment:** Optimization dan post-campaign review mengevaluasi bukan hanya ROAS, tetapi delivery, supply quality, reach, frequency, margin, partner fees, audience, format, and incrementality limits. Report harus menjelaskan apa yang terjadi, mengapa diduga terjadi, bukti pendukung, alternatif penjelasan, dan tindakan berikutnya. Programmatic trader menjaga traceability perubahan agar learning dapat direplikasi.

**Required artifact / chapter-specific evidence checklist:** Buat post-campaign report dan supply evaluation: delivery, spend, CPM, reach/frequency, viewability, IVT, deal quality, discrepancy, outcome, optimization changes, and next test agenda. Labeli data SYNTHETIC.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa CPM tidak boleh menjadi satu-satunya optimization target?
   - **Current guide answer (not yet approved):** CPM murah belum tentu berkualitas; optimasi juga perlu menilai invalid traffic, viewability, audience fit, outcomes, fees, dan contribution.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa hubungan optimization log dengan repeatability?
   - **Current guide answer (not yet approved):** Log mencatat perubahan, alasan, dan hasil sehingga learning bisa direplikasi dan tim tidak mengulang kesalahan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa batas ROAS platform dalam menilai programmatic?
   - **Current guide answer (not yet approved):** Attribution platform tidak otomatis mengukur causal impact, overlap, fee, margin, atau long-term value.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T06-CH12 — Programmatic Capstone
**Competency:** T06-C01, T06-C03, T06-C06, T06-C07

**Learning outcome under assessment:** Capstone Programmatic menguji pemahaman supply chain hingga measurement, bukan hanya navigasi DSP. Paket kerja harus menghubungkan objective, audience, inventory/deal strategy, DSP setup, creative/trafficking, bidding/pacing, verification, CM360/Floodlight, discrepancy, dan reporting. Seluruh account/campaign/auction figures yang tidak berasal dari live account diberi label SIMULATED. Akses credential tidak berarti peserta memiliki live buying seat.

**Required artifact / chapter-specific evidence checklist:** Siapkan DSP campaign blueprint, supply-chain diagram, audience/data matrix, deal matrix, trafficking sheet, bidding/pacing simulator, verification scorecard, CM360/Floodlight measurement spec, discrepancy log, dan executive trading recommendation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang harus bisa dijelaskan dalam programmatic capstone?
   - **Current guide answer (not yet approved):** Mengapa supply/channel/deal dipilih, bagaimana buying berjalan, bagaimana kualitas dijaga, dan bagaimana hasil diukur.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa batas latihan dengan synthetic data?
   - **Current guide answer (not yet approved):** Ia membuktikan workflow, logic, and analysis—not live campaign performance, spend, platform access, or client results.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana menilai programmatic inventory yang terlihat murah?
   - **Current guide answer (not yet approved):** Cek net fees, authorized sellers, quality, viewability, IVT, audience, outcome, and incremental value.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T07-CH01 — Retail Media & Commerce Media Ecosystem
**Competency:** T07-C01

**Learning outcome under assessment:** Retail Media dan Commerce Media menggunakan retailer/commerce ecosystem, shopping intent, product/catalog data, onsite/offsite inventory, dan sales signals untuk memengaruhi pembelian. Retail media network dapat menjual inventory pada aset retailer atau aktivasi offsite yang memakai data/measurement retailer. Definisi, data access, placement, dan attribution berbeda per platform; trader perlu memisahkan retailer-owned inventory, third-party activation, dan marketplace ads.

**Required artifact / chapter-specific evidence checklist:** Buat retail media ecosystem map untuk satu kategori Indonesia: Shopee, Tokopedia/TikTok Shop, Lazada, atau Blibli sesuai akses produk. Tandai onsite/offsite/in-store, buyer, seller, data owner, metrics, dan limitations.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda marketplace ads dan retail media network?
   - **Current guide answer (not yet approved):** Marketplace ads adalah penempatan iklan dalam marketplace; RMN dapat mencakup inventory/advertising dari retailer dan aktivasi offsite berbasis retailer signals.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa onsite dan offsite harus dipisah?
   - **Current guide answer (not yet approved):** Onsite memakai inventory dan data di properti retailer, sedangkan offsite menjangkau audience retailer di luar properti; biaya dan metriknya berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa produk dan seller eligibility perlu dicek?
   - **Current guide answer (not yet approved):** Ads hanya berguna bila SKU, stok, listing, content, dan account memenuhi syarat platform.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T07-CH02 — Shopper Journey, Purchase Intent & Retail Insights
**Competency:** T07-C02

**Learning outcome under assessment:** Shopper journey berbeda menurut kategori, urgency, price, availability, and retail context. Purchase intent signal dapat berasal dari search terms marketplace, category browsing, product views, add-to-cart, loyalty, repeat purchase, store location, atau review. Data tersebut harus dipahami menurut coverage dan consent; jangan menganggap click atau product view sebagai purchase intent kuat tanpa evidence.

**Required artifact / chapter-specific evidence checklist:** Buat shopper journey untuk satu kategori dan peta intent signals ke stage. Sertakan listing/review/availability issues, media opportunities, metrics, and evidence gaps.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apakah product view selalu berarti high intent?
   - **Current guide answer (not yet approved):** Tidak. Ia dapat menunjukkan curiosity atau accidental browse; perlu konteks query, depth, add-to-cart, repeat, dan category behavior.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa review dan availability penting bagi retail ads?
   - **Current guide answer (not yet approved):** Media dapat mendorong traffic, tetapi listing trust, stock, pricing, and delivery influence conversion.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa batas penggunaan loyalty data?
   - **Current guide answer (not yet approved):** Gunakan loyalty data hanya untuk purpose yang sah dan disetujui, dengan eligibility, consent, access, aggregation, security, dan platform terms yang sesuai.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T07-CH03 — Retailer Media Network & Advertising Models
**Competency:** T07-C01

**Learning outcome under assessment:** Retail Media Network menawarkan model managed/self-service, sponsored product/search, display/video, audience activation, and measurement. Platform Indonesia memiliki nomenclature, eligibility, and reporting yang berubah; kurikulum harus mengajarkan cara membaca help center/current product availability, bukan menghafal satu nama fitur. Seller, brand, distributor, and agency account roles juga dapat berbeda.

**Required artifact / chapter-specific evidence checklist:** Buat platform comparison untuk tiga RMN/marketplace aktif yang dapat diakses: ad types, seller/advertiser eligibility, placement, billing, targeting, reporting, conversion measurement, and documentation link. Cantumkan last-checked date.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa nama product/feature harus diverifikasi ulang?
   - **Current guide answer (not yet approved):** Retail platform dapat mengganti nama produk, default optimization, eligibility, dan reporting; dokumentasikan tanggal serta market saat fitur diperiksa.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang perlu diperiksa sebelum memilih self-service vs managed?
   - **Current guide answer (not yet approved):** Budget threshold, service scope, control, inventory, reporting, fee, data access, and campaign complexity.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apakah satu platform mapping berlaku untuk semua seller?
   - **Current guide answer (not yet approved):** Tidak. Access dan ad products dapat berbeda menurut seller/brand status, region, category, and program eligibility.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T07-CH04 — Onsite Retail Media: Sponsored Products & Search
**Competency:** T07-C03

**Learning outcome under assessment:** Onsite Retail Media memanfaatkan sponsored products, sponsored search, sponsored brands/store, dan rekomendasi pada properti retailer. Search placement menangkap query/shopper intent; product placement memerlukan listing content, image, price, rating, inventory, and availability. Bid dan budget harus dibaca bersama organic rank, competition, margin, product-level ROAS/ACoS, and category economics.

**Required artifact / chapter-specific evidence checklist:** Buat onsite retail campaign plan untuk lima SKU: product readiness audit, keyword/product target, campaign structure, bid/budget assumptions, negative/exclusion logic, sales metrics, and listing improvement backlog.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa hubungan listing quality dengan sponsored ad performance?
   - **Current guide answer (not yet approved):** Ad dapat menghasilkan traffic; listing, availability, price, review, and fulfillment menentukan apakah traffic berkonversi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda ROAS dan ACoS?
   - **Current guide answer (not yet approved):** ROAS adalah sales/ad spend; ACoS adalah ad spend/ad-attributed sales, sehingga keduanya berbanding terbalik jika basis sama.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa perlu SKU-level analysis?
   - **Current guide answer (not yet approved):** Aggregate campaign metrics dapat menutupi SKU bermargin rendah, low stock, atau listing yang tidak converting.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T07-CH05 — Offsite Retail Media: Display, Social & Video
**Competency:** T07-C01, T07-C03, T07-C04

**Learning outcome under assessment:** Offsite Retail Media mengaktifkan retailer audience/data pada inventory di luar properti retailer, misalnya display/video/social melalui partners. Measurement dapat memakai sales matching/closed-loop reporting, tetapi access, coverage, attribution window, and fees harus dipahami. Offsite audience bukan berarti data pelanggan bebas dipindahkan ke platform lain; privacy, consent, aggregation, and clean-room rules tetap berlaku.

**Required artifact / chapter-specific evidence checklist:** Buat offsite retail media plan: audience source, activation channel, data governance, placements, measurement approach, match coverage assumption, control design, cost, and limitations.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda offsite sales attribution dan incrementality?
   - **Current guide answer (not yet approved):** Attribution memberi credit pada exposure menurut model/window; incrementality mengestimasi tambahan penjualan dibanding control/counterfactual.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa match coverage harus dilaporkan?
   - **Current guide answer (not yet approved):** Match coverage menunjukkan bagian transaksi atau audience yang dapat dihubungkan; coverage rendah membatasi representativeness dan generalisasi hasil.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa risiko mengaktifkan retailer data ke luar platform?
   - **Current guide answer (not yet approved):** Aktivasi eksternal menambah risiko privacy, consent, purpose limitation, partner terms, identity resolution, data transfer, dan security.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T07-CH06 — Retail Audience, First-Party Data & Targeting
**Competency:** T07-C02, T07-C04

**Learning outcome under assessment:** Retail audience and first-party data digunakan untuk membuat segment seperti category buyers, loyalty members, lapsed purchasers, new-to-brand, high-value, and product affinities. Targeting bergantung pada taxonomy retailer, match coverage, scale, privacy, and platform controls. Audience strategy harus seimbang antara precision dan reach; segment terlalu kecil dapat menaikkan CPM, membatasi delivery, atau membuat hasil tidak stabil.

**Required artifact / chapter-specific evidence checklist:** Buat retail audience taxonomy untuk prospecting, new-to-brand, repeat, lapsed, and high-value segments. Sertakan logic, window, scale/match caveat, activation, suppression, and measurement.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa segment terlalu sempit berisiko?
   - **Current guide answer (not yet approved):** Audience terlalu sempit dapat menurunkan scale, meningkatkan biaya, menghambat delivery, membuat hasil tidak stabil, dan menaikkan frequency.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko menganggap retailer segment sama dengan CRM segment?
   - **Current guide answer (not yet approved):** Keduanya dapat berbeda dalam definisi, refresh cadence, identity, transaction coverage, eligibility, dan consent; dokumentasikan sebelum dibandingkan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa suppression penting?
   - **Current guide answer (not yet approved):** Suppression menghindari spend dan pesan yang tidak perlu kepada customer yang sudah convert, tidak eligible, atau harus dikecualikan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T07-CH07 — Product Feed, Digital Shelf & Retail Readiness
**Competency:** T07-C04

**Learning outcome under assessment:** Product feed adalah representasi data produk yang dikirim ke marketplace, retailer, shopping engine, dan ad platform agar SKU dapat ditemukan, ditampilkan, divalidasi, serta dipromosikan. Digital shelf adalah pengalaman produk yang dilihat shopper pada retailer digital: judul, atribut, gambar, deskripsi, harga, stok, variasi, rating/review, ketersediaan, dan discoverability. Feed bukan satu format universal. Required attributes, naming, identifiers, image rules, category taxonomy, locale, currency, dan update mechanism berbeda menurut platform, kategori, pasar, dan tipe akun. Praktisi harus memetakan source of truth dari PIM/ERP/catalogue ke schema tujuan, menjaga konsistensi dengan landing page/checkout, dan memantau error, disapproval, stale data, serta perubahan taxonomy.

**Required artifact / chapter-specific evidence checklist:** Buat product-feed audit workbook untuk minimal 20 SKU dari dua kategori. Sertakan source-of-truth map, platform/category attribute dictionary, field mapping untuk Google Merchant Center dan satu catalog/marketplace yang benar-benar dapat diakses, sample feed rows, validation rules, digital-shelf checklist, diagnostics/error log, owner, priority, dan refresh SLA. Tandai platform features yang tidak tersedia di Indonesia atau memerlukan managed-account eligibility sebagai conditional, bukan assumed access.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa sebab field wajib pada product feed tidak boleh dianggap sama untuk semua platform dan kategori?
   - **Current guide answer (not yet approved):** Setiap platform dan kategori dapat memiliki taxonomy, mandatory attributes, allowed values, identifier rules, dan eligibility berbeda. Gunakan schema/dokumentasi tujuan yang sedang berlaku.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bagaimana menangani harga atau availability yang berbeda antara feed dan halaman produk?
   - **Current guide answer (not yet approved):** Temukan source of truth, rekonsiliasi currency/time/update cadence, perbaiki sistem asal dan destination, lalu validasi ulang hingga feed, landing page, dan checkout konsisten. Jangan mengirim data yang diketahui salah.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa perbedaan product feed dengan digital shelf?
   - **Current guide answer (not yet approved):** Feed adalah struktur data produk yang disuplai ke platform; digital shelf adalah kondisi dan pengalaman produk yang dilihat shopper, termasuk konten, harga, stok, review, ranking, dan discoverability. Feed yang valid belum menjamin digital shelf berkualitas.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T07-CH08 — Campaign Activation, Bidding & Optimization
**Competency:** T07-C05

**Learning outcome under assessment:** Retail activation dan optimization menggabungkan campaign configuration, product/feed readiness, bid/budget, placement, query, product availability, pricing, promotion, reviews, and sales signals. Optimasi dilakukan pada level retailer, campaign, keyword, placement, and SKU. Perubahan bid harus dibandingkan dengan stock/price/promo agar kenaikan sales tidak salah diatribusikan ke media. Aktivasi juga dapat mencakup in-store retail media seperti screen, audio, shelf signage, kiosk, sampling, QR, dan proximity placements. Perencanaan in-store memerlukan store list, inventory/location map, footfall/dwell methodology, operating hours, installation, uptime, creative specification, proof-of-play, store operations, safety, serta pengukuran yang tidak menyamakan plays atau footfall dengan unique ad exposure.

**Required artifact / chapter-specific evidence checklist:** Buat retail optimization log dari data SIMULATED 14 hari: per SKU/query, bid, spend, clicks, sales, stock, price, promo, rating, ACoS, root cause, action, and result. Tambahkan modul in-store: placement map untuk 20 toko, flight/daypart, creative spec, store operations checklist, proof-of-play evidence, uptime exception log, dan sales/footfall measurement caveats.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa saja penyebab retail media ROAS turun, dan bagaimana memisahkan masalah media dari masalah produk?
   - **Current guide answer (not yet approved):** Periksa spend, bid, query, placement, serta harga, stok, promo, rating, kualitas listing, kompetitor, seasonality, dan margin per SKU. Jangan mengubah seluruh bid sebelum mengisolasi faktor produk/operasional.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Kontrol apa yang wajib ada pada aktivasi in-store retail media?
   - **Current guide answer (not yet approved):** Validasi store/placement inventory, daypart, creative spec, installation, uptime, proof-of-play, store operations, safety, footfall methodology, dan periode pembanding. Plays atau footfall bukan otomatis unique ad exposure.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa change log dan measurement caveats penting saat mengoptimasi retail campaign?
   - **Current guide answer (not yet approved):** Catat perubahan bid/SKU/placement, alasan, observation window, owner, guardrail, dan hasil. Pisahkan platform attribution dari incrementality; rekonsiliasi sales, return, stock, margin, match coverage, dan control design.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T07-CH09 — Sales Measurement, ACoS, ROAS & Incrementality
**Competency:** T07-C05

**Learning outcome under assessment:** Retail measurement menggabungkan platform ad reports, retailer sales, SKU economics, new-to-brand, marketplace share, product margin, and incrementality. Attribution window, category, campaign eligibility, returns/cancellations, VAT/fees, and sales definitions perlu disamakan. ROAS/ACoS tidak menunjukkan profit bila margin/discount/fulfillment belum dihitung. Lift tests dan holdout dapat digunakan bila retailer methodology dan sample mendukung.

**Required artifact / chapter-specific evidence checklist:** Buat retail effectiveness dashboard spec dan analysis memo: spend, attributed sales, ACoS/ROAS, margin, returns, new-to-brand, stock, match coverage, and incrementality test design.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa ROAS tinggi belum tentu profitable?
   - **Current guide answer (not yet approved):** Gross sales tidak memperhitungkan margin, discount, returns, fulfillment, retailer fees, dan incremental contribution.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang perlu disamakan saat reconciliation?
   - **Current guide answer (not yet approved):** Date, SKU, currency/tax, sales basis, attribution window, cancellations/returns, campaign tags, and data latency.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa batas closed-loop reporting?
   - **Current guide answer (not yet approved):** Coverage terbatas, match rate, attribution rules, dan selection bias dapat memengaruhi laporan; closed-loop attribution sendiri tidak membuktikan incrementality.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T07-CH10 — Retail Media Capstone
**Competency:** T07-C05

**Learning outcome under assessment:** Capstone Retail & Commerce Media menyatukan shopper insight, retailer ecosystem, product readiness, onsite/offsite/in-store media, audience, activation, measurement, and profitability. Output bukan sekadar media plan marketplace; ia harus menjelaskan SKU priority, data/access, placement, forecast, operations, stock dependencies, closed-loop metrics, and test design. Cantumkan ketersediaan produk dan access assumptions berdasarkan provider yang diverifikasi.

**Required artifact / chapter-specific evidence checklist:** Siapkan retail media strategy 90 hari plus workbook: retailer comparison, shopper journey, SKU readiness, inventory/placement matrix, audience segments, budget scenarios, campaign setup, measurement, sales/margin dashboard, and recommendation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang membedakan retail capstone dari paid search/social?
   - **Current guide answer (not yet approved):** Retail harus mengintegrasikan marketplace/retailer product data, stock, listing, shopper behavior, sales reconciliation, and margin.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bagaimana memastikan platform recommendations current?
   - **Current guide answer (not yet approved):** Cek official help center, local advertiser eligibility, product taxonomy, update date, and current account access.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa keputusan utama yang harus dipresentasikan?
   - **Current guide answer (not yet approved):** Retailer/channel/SKU investment, budget, stock/readiness actions, risk, measurement confidence, and next scale/hold decision.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T08-CH01 — Media Owner, Publisher & Supply Landscape
**Competency:** T08-C01

**Learning outcome under assessment:** Media Investment dan Publisher Partnerships berfokus pada pembelian inventory secara komersial dan pengelolaan relasi media owner. Fungsi ini berbeda dari media planning yang merancang channel mix dan forecast, serta berbeda dari biddable/programmatic yang membeli melalui auction/DSP. Investment specialist mengevaluasi rate, audience, package, value-add, supply, terms, contract, delivery, and value-for-money.

**Required artifact / chapter-specific evidence checklist:** Buat media owner landscape dan buying route map untuk satu kategori. Tulis siapa pemilik inventory, siapa bernegosiasi, siapa approve, siapa traffick, serta bukti delivery/billing yang dibutuhkan.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda Media Investment dengan Programmatic Trading?
   - **Current guide answer (not yet approved):** Media Investment mengelola keputusan dan negosiasi komersial atas inventory atau partnership; Programmatic Trading mengoperasikan buying melalui DSP, auction, dan deal.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda Media Planner dengan Media Buyer?
   - **Current guide answer (not yet approved):** Media Planner merancang strategi, mix, budget, dan forecast; Media Buyer menegosiasikan rate serta terms, melakukan booking, dan memantau delivery.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa ownership map penting?
   - **Current guide answer (not yet approved):** Agar negotiation, approval, booking, tracking, QA, and invoice memiliki accountable owner yang jelas.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T08-CH02 — Inventory, Audience & Media Value Assessment
**Competency:** T08-C02

**Learning outcome under assessment:** Inventory evaluation menilai audience fit, reach, context, format, quality, availability, exclusivity, placement, package flexibility, and pricing. Media kit menyediakan deskripsi inventory, tetapi klaim reach/circulation perlu diperiksa berdasarkan source, period, methodology, duplication, and target. Value bukan sekadar audience besar; premium context, relevance, attention, and commercial guarantee juga penting.

**Required artifact / chapter-specific evidence checklist:** Buat publisher inventory scorecard untuk lima opsi dengan audience, reach definition, format, quality, availability, rate, value-add, verification, methodology, dan recommended use.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa media kit tidak boleh diterima tanpa verifikasi?
   - **Current guide answer (not yet approved):** Reach, circulation, audience and engagement claims dapat memakai definisi/periode berbeda atau self-reported.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang membuat proposal media value comparable?
   - **Current guide answer (not yet approved):** Satuan, audience, dates, placements, format, reporting, measurement, exclusivity, fees, and contract basis harus dinormalisasi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana menilai value-add?
   - **Current guide answer (not yet approved):** Periksa placement, audience, timing, guarantee, production/measurement cost, and whether it substitutes paid inventory.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T08-CH03 — Rate Card, RFP/RFQ & Proposal Evaluation
**Competency:** T08-C03, T08-C05

**Learning outcome under assessment:** RFP/RFQ mengubah kebutuhan media menjadi permintaan proposal atau quotation yang dapat dibandingkan. Dokumen harus menetapkan objective, target, geography, dates, format, deliverables, KPI, audience requirement, budget range, measurement, brand safety, and commercial terms. Proposal review memeriksa completeness, assumptions, exclusions, rate basis, bonus, agency fee, production, data/measurement cost, and cancellation policy.

**Required artifact / chapter-specific evidence checklist:** Buat RFP template dan proposal comparison untuk tiga publisher. Sertakan standardized fields, weighted scoring, commercial normalization, clarification log, and recommendation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda RFP dan RFQ?
   - **Current guide answer (not yet approved):** RFP meminta solusi/proposal yang menjelaskan approach; RFQ meminta quotation untuk scope/requirements yang lebih terdefinisi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa gross dan net rate harus dipisah?
   - **Current guide answer (not yet approved):** Discount, commission, tax, dan fees dapat mengubah nilai akhir; bandingkan proposal memakai basis net payable yang sama.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa risiko added value dijadikan pengganti discount?
   - **Current guide answer (not yet approved):** Bonus mungkin tidak relevan, tidak guaranteed, atau memiliki kualitas/jangkauan berbeda dari paid inventory.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T08-CH04 — Reach, Cost, Value & Commercial Benchmarking
**Competency:** T08-C03

**Learning outcome under assessment:** Commercial benchmarking membandingkan cost dan value menggunakan unit yang disamakan. CPM, CPP, cost per unique reach, sponsorship rate, package pricing, discount, and added value harus memiliki target universe, dates, format, geography, and delivery definitions yang jelas. Historical rate bukan otomatis market benchmark terkini. Buyer perlu menyimpan source, date, volume tier, currency, and negotiation condition.

**Required artifact / chapter-specific evidence checklist:** Buat benchmark workbook dengan lima publisher packages. Hitung net CPM/cost per reach, total cost, bonus value, unit comparability, benchmark confidence, and recommended negotiation anchor.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa rate benchmark lama perlu caveat?
   - **Current guide answer (not yet approved):** Rate berubah karena inventory, demand, inflation, seasonality, package, dan kondisi komersial; selalu cantumkan periode serta market sumber.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa perbedaan cost efficiency dan value?
   - **Current guide answer (not yet approved):** Cost efficiency menilai biaya per unit; value juga menilai quality, relevance, outcomes, guarantees, and audience context.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa dampak package bundling?
   - **Current guide answer (not yet approved):** Bundling bisa memberi efficiency tetapi menyamarkan rate per asset/placement dan mengurangi flexibility.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T08-CH05 — Negotiation, Trading Terms & Partnership
**Competency:** T08-C04

**Learning outcome under assessment:** Negotiation media mengelola price, inventory, quality, dates, exclusivity, cancellation, makegood, payment, proof, data, and partnership value. Negotiation prep dimulai dari BATNA, objective, target/limit, leverage, alternative suppliers, and commercial priorities. Added value harus dinilai menurut audience dan delivery, bukan sekadar nominal rate-card yang tidak terpakai.

**Required artifact / chapter-specific evidence checklist:** Buat negotiation plan dan value tracker: target/limit, BATNA, concessions, added value, contract terms, risk, approval, and post-negotiation summary. Simulasikan vendor negotiation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa fungsi BATNA?
   - **Current guide answer (not yet approved):** Alternatif terbaik jika kesepakatan tidak tercapai; memberi batas rasional dan mengurangi keputusan emosional.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa semua added value tidak setara?
   - **Current guide answer (not yet approved):** Nilai added value bergantung pada relevansi audience, placement, timing, guarantee, production cost, dan kemampuan mengukur delivery.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus didokumentasikan setelah negotiation?
   - **Current guide answer (not yet approved):** Final rate, discount, scope, dates, inventory, cancellation, makegood, payment, proof, and authorized approver.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T08-CH06 — Media Booking, Insertion Order & Contract Terms
**Competency:** T08-C04

**Learning outcome under assessment:** Insertion Order dan kontrak mengikat scope media buying menjadi komitmen komersial. IO perlu advertiser, publisher, placement, format, dates, quantity, rate, cost, currency, tax, cancellation, creative deadline, tracking, reporting, payment, and sign-off. Legal terms dapat meliputi indemnity, privacy, IP, liability, exclusivity, makegood, force majeure, and termination; buyer bukan pengganti legal counsel tetapi harus mengenali escalation points.

**Required artifact / chapter-specific evidence checklist:** Buat IO checklist dan sample order form untuk campaign latihan. Bandingkan negotiated terms dengan signed IO dan trafficking sheet; tandai discrepancy/approval exceptions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa risiko bonus tidak tercatat terpisah?
   - **Current guide answer (not yet approved):** Jika bonus bercampur dengan volume billable, delivery dan invoice reconciliation menjadi keliru; catat contracted dan bonus inventory terpisah.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Siapa yang menyetujui legal clause?
   - **Current guide answer (not yet approved):** Legal clause harus disetujui procurement, legal, atau authorized approver sesuai governance; buyer mengidentifikasi risiko dan mengeskalasinya.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa IO harus selaras dengan trafficking sheet?
   - **Current guide answer (not yet approved):** Agar inventory, dates, formats, volume, rates, tags, and responsibilities sama di dokumen komersial dan operasional.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T08-CH07 — Campaign Delivery, Proof of Performance & Makegoods
**Competency:** T08-C05

**Learning outcome under assessment:** Delivery stewardship memastikan media owner memenuhi booking dan terms. Buyer memonitor booked vs delivered, dates, placements, creative, proof-of-posting/proof-of-play, audience, quality, and shortfall. Makegood bukan permintaan informal; ia mengikuti contract, tolerance, deadline, and evidence. Monitor campaign secara berkala agar masalah bisa diperbaiki sebelum end-of-flight.

**Required artifact / chapter-specific evidence checklist:** Buat delivery tracker dan proof checklist untuk tiga publisher. Simulasikan underdelivery 12%; hitung shortfall, bukti yang diperlukan, makegood options, dan client communication.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda proof-of-posting dan proof-of-play?
   - **Current guide answer (not yet approved):** Proof-of-posting membuktikan publikasi atau placement, sedangkan proof-of-play mencatat pemutaran spot atau creative pada layar/audio sesuai log.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa shortfall tidak boleh langsung diasumsikan berdasarkan impressions?
   - **Current guide answer (not yet approved):** Kontrak dapat menetapkan billable basis, tolerance, sampling, bonus, atau definisi delivery lain; periksa clause dan bukti line-item terlebih dahulu.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan makegood harus dieskalasi?
   - **Current guide answer (not yet approved):** Saat delivery di luar tolerance, bukti tidak lengkap, deadline terlewati, atau remedy tidak sesuai kontrak.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T08-CH08 — Invoice, Reconciliation & Financial Control
**Competency:** T08-C05

**Learning outcome under assessment:** Invoice reconciliation menghubungkan IO, vendor invoice, rate, volume, dates, placement, currency, tax, fees, discount, bonus, makegood, and proof. Buyer harus membedakan planned, contracted, delivered, and billable basis. Variance dapat berasal dari taxes, FX, cancellation, underdelivery, extra placement, or contract amendments. Semua adjustment harus memiliki evidence dan approver.

**Required artifact / chapter-specific evidence checklist:** Buat reconciliation workbook dari satu IO dan invoice sintetis. Gunakan line-item matching, formula checks, variance categories, evidence links, approval status, and payment recommendation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda invoice variance dan delivery variance?
   - **Current guide answer (not yet approved):** Invoice variance adalah selisih amount/terms; delivery variance adalah perbedaan volume/placement/flight terhadap booking.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang dilakukan bila currency/tax tidak cocok?
   - **Current guide answer (not yet approved):** Verifikasi kontrak, exchange-rate basis, tax treatment, legal entity, and finance rules sebelum approve.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa audit trail perlu disimpan?
   - **Current guide answer (not yet approved):** Audit trail mendukung dispute resolution, finance approval, month-end close, compliance review, dan akuntabilitas vendor ketika hasil dipertanyakan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T08-CH09 — Media Investment Evaluation & Recommendation
**Competency:** T08-C05

**Learning outcome under assessment:** Investment evaluation menilai hasil pembelian dan hubungan media owner setelah campaign. Analisis mencakup cost, delivery, audience quality, placement, value-add, fees, makegood, effectiveness, and future leverage. Negosiasi berikutnya menggunakan evidence, bukan sekadar meminta discount. Buyer harus menyampaikan value story kepada planner/finance/client serta memisahkan hasil komersial dari performance campaign.

**Required artifact / chapter-specific evidence checklist:** Buat media investment review satu kuartal: vendor scorecard, rate/value history, delivery, quality, audience overlap, discrepancy, recommendation, and negotiation agenda.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa added value dapat bernilai rendah?
   - **Current guide answer (not yet approved):** Jika audience overlap, timing, format, or quality tidak mendukung objective, bonus volume tidak menambah incremental value.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda cost saving dan value creation?
   - **Current guide answer (not yet approved):** Cost saving menurunkan spend; value creation meningkatkan kualitas, audience, outcome, reliability, or flexibility.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa bukti partner layak dipertahankan?
   - **Current guide answer (not yet approved):** Delivery reliability, commercial fairness, transparency, issue resolution, audience value, and measurable contribution.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T08-CH10 — Investment Capstone
**Competency:** T08-C05

**Learning outcome under assessment:** Capstone Media Buying/Investment membuktikan kemampuan membeli dan menjaga nilai inventory secara komersial dari RFP sampai invoice. Paket harus mencakup media owner mapping, inventory evaluation, proposal normalization, negotiation, IO/contract, delivery stewardship, proof, reconciliation, and investment review. Track ini tidak mengajarkan DSP bidding sebagai kompetensi inti; direct publisher buying menjadi fokus, dengan auction/platform buying sebagai cross-track awareness.

**Required artifact / chapter-specific evidence checklist:** Siapkan complete buying pack: media owner map, RFP, proposal comparison, negotiation plan, signed-style IO sample, trafficking handoff, delivery/proof tracker, reconciliation workbook, and investment review deck.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang membedakan buyer capstone dengan media plan?
   - **Current guide answer (not yet approved):** Buyer capstone membuktikan commercial procurement, negotiation, contract, delivery, proof, and financial control.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa hubungan buyer dengan Ad Ops?
   - **Current guide answer (not yet approved):** Buyer/Investment mengatur deal/terms dan booking; Ad Ops menerjemahkan booking ke trafficking/tracking/QA; planner memastikan tujuan media.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana membuktikan negotiation berhasil?
   - **Current guide answer (not yet approved):** Bandingkan baseline/alternative, final terms, total cost, inventory quality, delivery, added value actually used, and risks.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T09-CH01 — Digital Ad Tech & Campaign Delivery Ecosystem
**Competency:** T09-C01

**Learning outcome under assessment:** Ad Operations menghubungkan media plan, platform/ad server, publisher, creative, tracking, verification, dan analytics. Tugas utamanya memastikan campaign dikonfigurasi, ditayangkan, dilacak, dan direkonsiliasi dengan benar—bukan menetapkan seluruh audience strategy atau budget allocation. Ekosistem dapat meliputi Google Ads, Meta, TikTok, LinkedIn, DV360, CM360, retailer platforms, dan direct publisher placements. Scope kerja mengikuti platform yang dipakai klien.

**Required artifact / chapter-specific evidence checklist:** Buat cross-platform Ad Ops ecosystem diagram untuk satu campaign: platform roles, ad server, tags/pixels, publisher, verification, ownership, approvals, and evidence trail.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda Ad Ops dan Media Buyer?
   - **Current guide answer (not yet approved):** Ad Ops menjalankan technical trafficking, tracking, QA, and delivery control; buyer mengelola inventory purchase, rates, and commercial terms.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda Ad Ops dan performance specialist?
   - **Current guide answer (not yet approved):** Performance specialist mengelola audience/bidding/creative optimization; Ad Ops memastikan setup teknis dan measurement berfungsi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa multi-platform governance penting?
   - **Current guide answer (not yet approved):** Tanpa naming, versioning, access, and approval yang konsisten, kesalahan sulit dilacak antar channel.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T09-CH02 — Campaign Brief, Trafficking Sheet & Naming Taxonomy
**Competency:** T09-C02

**Learning outcome under assessment:** Campaign brief dan trafficking sheet adalah single source of truth operasional. Setiap object perlu advertiser/client, campaign, platform/publisher, placement/ad set/line item, creative, format, URL, click tracker, pixel/event, targeting, flight, budget, owner, approval, dan status. Naming taxonomy harus memudahkan identifikasi sekaligus kompatibel dengan reporting; jangan menaruh data pribadi di parameter atau URL.

**Required artifact / chapter-specific evidence checklist:** Buat trafficking sheet lintas Meta, Google, TikTok, dan direct placement dengan IDs, names, asset specs, URLs, tags, flight, budget, targeting, owners, approval, and status.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa trafficking sheet harus mencatat object IDs?
   - **Current guide answer (not yet approved):** Nama campaign dapat berubah atau duplikat; object IDs menjaga traceability, membantu QA, mencocokkan API/report, dan mempermudah handover.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko URL belum final?
   - **Current guide answer (not yet approved):** Traffic dapat salah arah, tracking parameter hilang, conversion tidak terekam, atau campaign terpaksa dihentikan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa fungsi version control?
   - **Current guide answer (not yet approved):** Version control memastikan asset dan setting yang digunakan adalah versi approved, mencegah materi lama tayang, serta menjaga approval tetap terlacak.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T09-CH03 — Creative, Placement & Technical Specifications
**Competency:** T09-C03

**Learning outcome under assessment:** Creative and placement specifications memastikan asset diterima dan dirender sesuai environment. Periksa dimensions, aspect ratio, file size, format, duration, codec, frame rate, audio, click URL, SSL, safe zone, HTML5, fallbacks, responsive behavior, and platform policy. Spec berubah; selalu cek halaman resmi platform/publisher dan tanggal. Asset approved secara brand belum tentu technically eligible.

**Required artifact / chapter-specific evidence checklist:** Buat creative spec matrix untuk 6 placements (display, video, story/reel, native, HTML5, retailer sponsored content). Sertakan sumber resmi, date checked, file limits, CTA, safe zones, fallback, and QA status.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa creative spec harus bersumber dari dokumen terkini?
   - **Current guide answer (not yet approved):** Dimensi, limits, file type, placement rules, and policy dapat berubah antar platform dan waktu.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa itu fallback?
   - **Current guide answer (not yet approved):** Fallback adalah asset atau behaviour alternatif yang digunakan ketika creative utama tidak didukung oleh environment, format, atau placement tertentu.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang diperiksa pada click URL selain destination?
   - **Current guide answer (not yet approved):** Periksa redirect chain, query parameters, UTM, macros, SSL, deep-link behaviour, dan tracking events agar perjalanan serta atribusi tidak terputus.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T09-CH04 — Tags, Pixels, UTMs & Click Trackers
**Competency:** T09-C04

**Learning outcome under assessment:** Tagging dan tracking memiliki fungsi berbeda. Platform pixel/SDK/CAPI merekam events; UTM memberi label traffic; ad-server placement tag memanggil creative/delivery; click tracker merekam click redirect; impression tracker mengukur exposure; Floodlight mengukur activity di Campaign Manager 360. Ad Ops harus mengetahui siapa memasang, siapa memverifikasi, data apa yang dikirim, consent dependency, and deduplication.

**Required artifact / chapter-specific evidence checklist:** Buat cross-platform tag map untuk Google tag/GA4, GTM, Meta Pixel/CAPI, TikTok Pixel/Events API, CM360/Floodlight, click/impression tracker, and UTM; sertakan QA cases.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa perbedaan UTM dan pixel?
   - **Current guide answer (not yet approved):** UTM memberi label source/medium/campaign pada traffic; pixel merekam event/interaksi untuk platform measurement.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa server-side CAPI bukan sekadar tag lain?
   - **Current guide answer (not yet approved):** Ia mengirim event dari server dengan identity/consent/deduplication controls yang berbeda dari browser pixel.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa bukti tag benar-benar bekerja?
   - **Current guide answer (not yet approved):** Test event/log, expected parameters, trigger condition, no duplicate, consent behavior, and platform diagnostics.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T09-CH05 — CM360 Campaign, Placement, Ad & Floodlight Setup
**Competency:** T09-C03, T09-C05

**Learning outcome under assessment:** Ad-server setup seperti CM360 menyusun advertiser, campaign, site, placement, ad, creative, and trackers. Placement mewakili inventory slot dan menghasilkan tag; ad mengontrol delivery/rotation; creative merupakan asset. Floodlight activities memakai counting method, activity group, value, and conversion window. Implementasi harus konsisten dengan naming, click tags, publisher requirements, and reporting.

**Required artifact / chapter-specific evidence checklist:** Buat CM360 setup blueprint: advertiser, campaign, sites, placements, ads, creatives, Floodlight activity groups, counting methods, tags, and QA evidence. Labeli as design simulation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda placement dan creative?
   - **Current guide answer (not yet approved):** Placement adalah slot atau inventory tempat iklan muncul; creative adalah asset pesan yang disajikan di dalam slot tersebut.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa fungsi Floodlight counting method?
   - **Current guide answer (not yet approved):** Counting method menentukan aturan penghitungan Floodlight activity, sehingga conversion event tidak dihitung dengan basis yang keliru.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang perlu diserahkan ke publisher?
   - **Current guide answer (not yet approved):** Correct ad/placement tags, spec, click macro, dates, creative, implementation instructions, and QA contacts.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T09-CH06 — Pre-Launch QA, Testing & Go-Live Checklist
**Competency:** T09-C03, T09-C06

**Learning outcome under assessment:** Pre-launch QA adalah quality gate sebelum campaign live. Checklist harus mencakup object setup, budget, flight, targeting, creative rendering, URL, redirects, tags/events, consent, policy, exclusions, frequency, geo, language, conversion settings, publisher acceptance, and sign-off. Upload success tidak berarti siap launch. Severity levels membantu menentukan blocker, major issue, and minor issue.

**Required artifact / chapter-specific evidence checklist:** Buat pre-launch QA checklist dengan 30 test cases, expected vs actual, severity, owner, evidence link, status, retest, and formal go/no-go decision.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa status campaign active belum cukup sebagai QA?
   - **Current guide answer (not yet approved):** Campaign bisa active tetapi asset, URL, tag, targeting, consent, atau conversion path salah.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa contoh blocker?
   - **Current guide answer (not yet approved):** Wrong landing URL, non-working conversion tag, unapproved claim, incorrect geo/date/budget, or rejected creative.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa tujuan severity classification?
   - **Current guide answer (not yet approved):** Membantu memprioritaskan issue berdasarkan impact dan mencegah low-priority issue menahan launch tanpa alasan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T09-CH07 — Live Campaign Monitoring, Pacing & Troubleshooting
**Competency:** T09-C06

**Learning outcome under assessment:** Live monitoring membandingkan planned dengan actual delivery dan memisahkan media issue dari tracking issue. Pantau spend, pacing, impressions, clicks, conversions, cost metrics, rejection, placement status, frequency, viewability/IVT, site errors, and reporting lag. Troubleshooting harus hirarkis: data signal, tag, creative, targeting, platform eligibility, inventory, budget/bid, and publisher—not langsung menaikkan spend.

**Required artifact / chapter-specific evidence checklist:** Buat monitoring dashboard/log dan troubleshooting tree untuk underdelivery, sudden spend spike, rejection, broken click URL, lost conversion event, and discrepancy.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa conversion drop tidak selalu masalah ads delivery?
   - **Current guide answer (not yet approved):** Site, checkout, consent, tracking, price, stock, CRM, or reporting latency dapat berubah meski delivery normal.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa urutan troubleshooting yang disiplin?
   - **Current guide answer (not yet approved):** Isolasi gejala, verifikasi data dan tag, periksa page serta creative, lalu cek settings dan supply sebelum mengubah bid atau budget.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa action log penting?
   - **Current guide answer (not yet approved):** Membuat root cause, owner, risk, and recovery dapat diaudit dan mencegah perubahan berulang tanpa evidence.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T09-CH08 — Platform Discrepancy & Data Validation
**Competency:** T09-C06

**Learning outcome under assessment:** Platform discrepancy muncul karena definisi event, click/impression filtering, attribution window, view-through, timezone, cut-off, consent, deduplication, latency, and identity berbeda. Ad Ops tidak boleh langsung menyebut salah satu sistem rusak sebelum membandingkan apples-to-apples. Reconciliation harus menyamakan scope, unit, date, event definition, and eligibility.

**Required artifact / chapter-specific evidence checklist:** Buat discrepancy report tiga platform: data dictionary, event mapping, timezone/cutoff, click/view windows, dedupe, consent, latency, matched/unknown variance, and recommendations.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa arti apples-to-apples reconciliation?
   - **Current guide answer (not yet approved):** Rekonsiliasi harus memakai unit, window, timezone, event, scope, dan eligibility yang setara agar selisih benar-benar dapat dibandingkan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa click count tidak sama dengan GA4 sessions?
   - **Current guide answer (not yet approved):** Click dapat gagal load, user close page, redirect, consent, browser block, or multiple clicks per session.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan discrepancy perlu dieskalasi?
   - **Current guide answer (not yet approved):** Jika di luar tolerance/contract, memengaruhi billing/optimization, atau sumber perbedaan tidak dapat dijelaskan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T09-CH09 — Billing Reconciliation, Documentation & Process Control
**Competency:** T09-C07

**Learning outcome under assessment:** Billing reconciliation and process control menjaga kesesuaian booking, delivery, dan invoice. Ad Ops mengumpulkan IO, placement logs, rate, booked volume, billable basis, currency, tax, discount, bonus, makegood, platform fees, and proof. Finance controls perlu separation of duties, version history, access controls, and archive. Operational efficiency bukan berarti menghapus quality gates.

**Required artifact / chapter-specific evidence checklist:** Buat billing reconciliation pack untuk dua vendor: IO-vs-invoice, delivery proof, billable calculation, variance, adjustment, approval, audit trail, and process improvement memo.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa delivered impressions belum tentu billable impressions?
   - **Current guide answer (not yet approved):** Kontrak dapat mengecualikan event tertentu, memberi tolerance atau bonus, atau memakai billable definition berbeda dari raw delivery.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko satu orang mengatur dan menyetujui invoice sendiri?
   - **Current guide answer (not yet approved):** Tanpa segregation of duties, error atau fraud lebih sulit dideteksi karena pihak yang membuat transaksi juga mengesahkan pembayarannya.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa output operational review yang berguna?
   - **Current guide answer (not yet approved):** Recurring issue, control gap, SLA, owners, automation opportunities, and measurable process improvement.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T09-CH10 — Ad Operations Capstone
**Competency:** T09-C07

**Learning outcome under assessment:** Capstone Ad Operations menyatukan operation chain multi-platform: brief, trafficking, creative spec, tags, ad-server/platform setup, QA, go-live, monitoring, troubleshooting, discrepancy, billing, and documentation. Keberhasilan dinilai dari accuracy, traceability, risk control, and timely delivery—not creative strategy or budget optimization. Setiap contoh account/data harus berlabel SIMULATED dan tidak menyiratkan akses live.

**Required artifact / chapter-specific evidence checklist:** Siapkan operational case pack: master brief, cross-platform trafficking sheet, creative spec matrix, tag map, CM360/Floodlight design, QA evidence, go-live checklist, monitoring log, incident report, discrepancy reconciliation, invoice pack, and process review.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa bukti Ad Ops yang siap portofolio?
   - **Current guide answer (not yet approved):** Traceable operational artefacts: trafficking sheet, tags, QA evidence, approvals, monitoring, discrepancy, and billing reconciliation.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang tidak boleh diklaim dari simulasi?
   - **Current guide answer (not yet approved):** Tidak boleh mengklaim real client account access, live campaign delivery, spend, or campaign outcomes.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana Ad Ops menunjukkan nilai bisnis?
   - **Current guide answer (not yet approved):** Mengurangi launch errors, data loss, downtime, underdelivery, billing disputes, and audit risk.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T10-CH01 — Business Question, KPI & Measurement Framework
**Competency:** T10-C01, T10-C04

**Learning outcome under assessment:** Media Analytics dimulai dari business question, bukan dashboard atau file data yang kebetulan tersedia. Pertanyaan harus menentukan unit analisis, periode, population, outcome, diagnostic metrics, guardrails, dan keputusan yang akan diambil. KPI architecture menghubungkan business outcomes dengan driver seperti spend, reach, qualified traffic, conversion, revenue, margin, and retention. Definisi metric wajib menyebut formula, denominator, source, timezone, attribution window, owner, and limitation.

**Required artifact / chapter-specific evidence checklist:** Buat measurement brief untuk pertanyaan bisnis 'apa yang mendorong kenaikan cost per qualified lead?'. Sertakan KPI tree, metric dictionary, analysis scope, segmentation, data owners, dan decision criteria.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa analyst perlu tahu keputusan apa yang akan diambil?
   - **Current guide answer (not yet approved):** Agar analisis fokus pada evidence yang dapat mengubah tindakan, bukan hanya menghasilkan chart.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang wajib ada di metric dictionary?
   - **Current guide answer (not yet approved):** Formula, denominator, unit, currency, source, timezone, attribution window, owner, refresh, dan caveat.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa beda leading dan lagging metrics?
   - **Current guide answer (not yet approved):** Leading memberi sinyal awal proses; lagging mencatat hasil akhir seperti sales atau margin.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T10-CH02 — Data Sources, Taxonomy & Data Quality
**Competency:** T10-C02

**Learning outcome under assessment:** Media data berasal dari ad platforms, ad servers, GA4/Adobe Analytics, CRM, ecommerce, retailer, search console, finance, dan research sources. Grain harus diketahui sebelum join: campaign-day, ad-day, session, user, order, atau SKU. Taxonomy menstandarkan channel, campaign, market, audience, objective, and creative. Data quality memeriksa completeness, validity, consistency, uniqueness, accuracy, and timeliness.

**Required artifact / chapter-specific evidence checklist:** Buat data source inventory dan QA audit untuk synthetic exports dari platform, GA4, CRM, dan ad server. Temukan duplicate, missing, invalid, date/currency mismatch, dan usulkan correction.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa itu grain data?
   - **Current guide answer (not yet approved):** Level satu baris data merepresentasikan satu entitas/kejadian, misalnya campaign-day, event, session, atau order.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa join key campaign name berisiko?
   - **Current guide answer (not yet approved):** Naming bisa berubah/duplikat dan grain berbeda; join dapat menggandakan rows atau menyatukan entitas salah.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa beda missing dan zero?
   - **Current guide answer (not yet approved):** Missing berarti nilai tidak tersedia; zero berarti terukur dan nilainya nol. Menyamakan keduanya dapat mengubah kesimpulan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T10-CH03 — GA4, Platform Analytics & CM360 Data
**Competency:** T10-C03

**Learning outcome under assessment:** GA4, native ad-platform analytics, dan CM360 memiliki model serta fungsi berbeda. GA4 berorientasi event/session/user; platform Ads mengoptimasi dan melaporkan menurut model internal; CM360/ad server merekam delivery, clicks, and Floodlight activities. Analyst harus memahami dimension, metric, event parameter, attribution setting, modeled data, consent, retention, thresholding, and export limits sebelum menyatukan data lintas sistem.

**Required artifact / chapter-specific evidence checklist:** Buat cross-platform metric mapping untuk Google Ads, Meta, TikTok, GA4, dan CM360. Sertakan event/metric definitions, attribution, time zone, deduplication, reporting grain, and known limitations.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa angka conversion platform bisa berbeda dari GA4?
   - **Current guide answer (not yet approved):** Attribution, view-through, identity, consent, time zone, event definition, deduplication, and processing berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda impression dan session?
   - **Current guide answer (not yet approved):** Impression adalah exposure iklan; session adalah kumpulan interaksi website/app dalam analytics definition.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus dipastikan sebelum data digabung?
   - **Current guide answer (not yet approved):** Grain, keys, time zone, currency, naming, event definition, dedupe, and source limitations.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T10-CH04 — Spreadsheet, SQL & Data Extraction
**Competency:** T10-C04

**Learning outcome under assessment:** Spreadsheet dan SQL digunakan untuk membersihkan, menggabungkan, dan menganalisis data secara reproducible. Spreadsheet cocok untuk QA/ad hoc, tetapi raw data besar memerlukan structured query. SQL mengharuskan analyst memahami SELECT, WHERE, GROUP BY, JOIN, CTE, window functions, date handling, nulls, and aggregation. Query yang benar secara sintaks masih dapat salah secara bisnis jika grain atau join relationship keliru.

**Required artifact / chapter-specific evidence checklist:** Buat workbook data QA dan SQL notebook dengan minimal 5 query: spend aggregation, CTR/CVR/CPA, JOIN spend-to-conversion, cohort summary, dan outlier check. Sertakan expected output dan test assertions menggunakan data SIMULATED.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa SQL JOIN dapat menggandakan spend?
   - **Current guide answer (not yet approved):** Join many-to-many atau grain yang tidak sama menyebabkan satu row cocok dengan banyak row di table lain.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa query perlu test totals sebelum/sesudah join?
   - **Current guide answer (not yet approved):** Bandingkan row count dan total sebelum serta sesudah join untuk mendeteksi duplicate rows, lost records, atau key yang tidak tepat.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa beda WHERE dan HAVING?
   - **Current guide answer (not yet approved):** WHERE menyaring baris sebelum aggregation; HAVING menyaring kelompok setelah GROUP BY berdasarkan kondisi aggregate atau hasil kelompok.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T10-CH05 — Dashboard, Visualization & BI
**Competency:** T10-C04

**Learning outcome under assessment:** Dashboard adalah interface keputusan, bukan galeri chart. Susun dari audience pengguna (executive, planner, trader, analyst), decision cadence, KPI hierarchy, grain, refresh, filters, and alerts. Visual harus memperlihatkan trend, variance, contribution, and context tanpa distorsi. Power BI, Tableau, Looker Studio, atau spreadsheet dipilih berdasarkan data access, governance, user needs, and maintenance.

**Required artifact / chapter-specific evidence checklist:** Buat dashboard wireframe dan data model untuk cross-channel campaign performance. Sertakan 5 KPI utama, 5 diagnostic views, filters, alert conditions, data freshness, and metric definitions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa tanda dashboard tidak berguna?
   - **Current guide answer (not yet approved):** Ia tidak menjawab keputusan pengguna, tidak memiliki metric definitions, atau tidak menyediakan diagnosis/action path.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa total KPI perlu reconcile ke source?
   - **Current guide answer (not yet approved):** Chart dapat terlihat rapi tetapi salah akibat filters, joins, duplicated rows, or refresh failure.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa bedanya dashboard dan report?
   - **Current guide answer (not yet approved):** Dashboard mendukung monitoring/interaksi rutin; report dapat memberi analisis/narrative lebih mendalam untuk periode tertentu.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T10-CH06 — Descriptive & Diagnostic Analytics
**Competency:** T10-C05

**Learning outcome under assessment:** Descriptive analytics menjawab apa yang terjadi; diagnostic analytics menyelidiki mengapa. Analyst memeriksa trend, segment, variance, distribution, cohort, seasonality, mix shifts, and anomalies. Diagnosis memerlukan hypothesis tree dan triangulasi, bukan korelasi sederhana. Perubahan performa dapat disebabkan media delivery, audience/creative, landing page, tracking, product, stock, price, or sales operations.

**Required artifact / chapter-specific evidence checklist:** Buat diagnostic memo dari synthetic dataset yang menunjukkan satu KPI memburuk. Lakukan metric decomposition, segment analysis, hypothesis tree, evidence check, root cause confidence, and recommended action.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa korelasi bukan bukti penyebab?
   - **Current guide answer (not yet approved):** Dua metrik dapat bergerak bersama akibat seasonality, mix, budget, atau faktor ketiga tanpa causal link.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa fungsi decomposition?
   - **Current guide answer (not yet approved):** Decomposition memecah outcome menjadi driver yang lebih kecil sehingga sumber perubahan dapat diisolasi dan diuji.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan analisis harus ditahan?
   - **Current guide answer (not yet approved):** Saat data quality, tracking, population, or metric definitions belum valid untuk mendukung kesimpulan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T10-CH07 — Attribution, Incrementality & Marketing Effectiveness
**Competency:** T10-C05

**Learning outcome under assessment:** Attribution membagi credit conversion berdasarkan rule/model, sedangkan incrementality mengestimasi tambahan outcome yang disebabkan media dibanding counterfactual. Marketing effectiveness mempertimbangkan contribution, halo/cross-channel, brand, sales, and long-term effects. Platform ROAS tidak otomatis mengukur incremental return. Analyst perlu memahami last-click, data-driven, multi-touch, lift test, geo holdout, MMM, and their assumptions and data needs.

**Required artifact / chapter-specific evidence checklist:** Buat attribution vs incrementality analysis memo dengan synthetic dataset; rancang satu geo-holdout atau user-level holdout, tentukan primary metric, contamination risk, sample/duration, and limitation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda attributed conversion dan incremental conversion?
   - **Current guide answer (not yet approved):** Attributed conversion menerima credit menurut model/window; incremental conversion adalah tambahan akibat treatment dibanding counterfactual.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko last-click?
   - **Current guide answer (not yet approved):** Ia cenderung memberi credit pada touchpoint akhir dan mengabaikan demand creation/assisted interactions.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan geo experiment cocok?
   - **Current guide answer (not yet approved):** Saat treatment dapat dibedakan lintas wilayah, market comparability memadai, spillover dapat dikendalikan, and sample/time cukup.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T10-CH08 — Experiment Design, A/B Testing & Statistics
**Competency:** T10-C06

**Learning outcome under assessment:** Experiment design membutuhkan hypothesis, randomization unit, control/treatment, primary metric, guardrails, sample size, duration, stopping rule, and contamination controls. Statistik dasar seperti confidence interval, power, significance, variance, and multiple testing memengaruhi interpretasi. Significance bukan ukuran business impact; analyst harus memeriksa effect size, practical significance, data quality, and segment effects.

**Required artifact / chapter-specific evidence checklist:** Buat A/B test protocol dan analysis notebook untuk satu experiment: hypothesis, unit, sample/duration calculation, metrics, guardrails, QA, stopping rule, confidence interval, and decision memo.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda statistical significance dan practical significance?
   - **Current guide answer (not yet approved):** Significance menilai compatibility data dengan null hypothesis; practical significance menilai apakah effect cukup besar untuk keputusan bisnis.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa early peeking berisiko?
   - **Current guide answer (not yet approved):** Repeated checks dapat meningkatkan false-positive rate dan mendorong stop/continue decisions yang bias.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa peran randomization unit?
   - **Current guide answer (not yet approved):** Menentukan entitas yang diacak; harus sesuai exposure and interference pattern agar perbandingan valid.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T10-CH09 — Insight, Recommendation & Executive Storytelling
**Competency:** T10-C07

**Learning outcome under assessment:** Insight storytelling mengubah analisis menjadi keputusan yang dapat dipahami executive. Struktur yang efektif memuat question, context, key finding, evidence, driver, business impact, recommendation, risk, and next action. Analyst harus memisahkan fact, interpretation, hypothesis, and recommendation; visual mendukung narasi, bukan menutupi uncertainty. Komunikasi harus menyesuaikan audience tanpa mengubah data.

**Required artifact / chapter-specific evidence checklist:** Buat executive insight memo satu halaman dan 5-slide narrative untuk kasus analitik. Cantumkan fact/interpretation/hypothesis/recommendation, chart, risk, and decision requested.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda finding dan insight?
   - **Current guide answer (not yet approved):** Finding mencatat pola atau angka yang ditemukan; insight menjelaskan kemungkinan makna dan driver, lalu menunjukkan keputusan yang perlu berubah.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa limitation perlu disampaikan?
   - **Current guide answer (not yet approved):** Agar stakeholder tidak menganggap atribusi/korelasi sebagai causal proof atau membuat keputusan melebihi evidence.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus berakhir pada executive deck?
   - **Current guide answer (not yet approved):** Executive deck harus meminta keputusan yang jelas, menyebut owner dan timing, serta menunjukkan impact, risk, dan measurement follow-up.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T10-CH10 — Analytics Capstone
**Competency:** T10-C07

**Learning outcome under assessment:** Analytics Capstone menunjukkan kemampuan end-to-end: merumuskan business question, mengambil data, memvalidasi, menganalisis, membuat dashboard, menjelaskan hasil, dan merekomendasikan tindakan. Data pipeline harus reproducible dan dapat diaudit. Bila memakai data synthetic/demo, jelaskan generator, assumptions, and limitations. Advanced MMM/econometrics dapat menjadi specialization lanjutan, bukan prasyarat untuk semua entry-level analyst.

**Required artifact / chapter-specific evidence checklist:** Bangun portfolio pack: measurement brief, data dictionary, SQL/Spreadsheet notebook, QA report, dashboard, diagnostic memo, attribution/incrementality plan, and executive presentation. Labeli dataset DEMO/SIMULATED.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa bukti kualitas data sebelum analisis?
   - **Current guide answer (not yet approved):** Data dictionary, source lineage, QA results, duplicate/missing checks, reconciliation, and documented transformations.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang membedakan dashboard dengan portfolio capstone?
   - **Current guide answer (not yet approved):** Capstone juga membuktikan question framing, methodology, interpretation, decision, and limitations—not visual output saja.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana mengklaim skill tanpa mengklaim client result?
   - **Current guide answer (not yet approved):** Tampilkan project demo/synthetic, code/query, method, evidence, and clear label without inventing commercial impact.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T11-CH01 — Search Ecosystem, Organic Visibility & Search Intent
**Competency:** T11-C01, T11-C03

**Learning outcome under assessment:** SEO dan Organic Search meningkatkan kemampuan website ditemukan melalui crawling, indexing, relevance, quality, and search experience. Search result dapat mencakup organic web, local, images, video, featured snippets, dan AI features. SEO tidak menjamin ranking; specialist bekerja pada technical accessibility, content usefulness, intent match, information architecture, authority, and measurement. Search intent harus menjadi titik awal, bukan keyword density.

**Required artifact / chapter-specific evidence checklist:** Buat search ecosystem map dan organic baseline untuk satu website: indexable pages, search visibility, query intent, page types, business outcomes, and key technical/content risks.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda crawling dan indexing?
   - **Current guide answer (not yet approved):** Crawling adalah proses menemukan serta mengambil URL; indexing adalah proses menganalisis dan menyimpan halaman agar dapat dipertimbangkan untuk hasil search.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa ranking bukan satu-satunya KPI SEO?
   - **Current guide answer (not yet approved):** Ranking tidak otomatis menghasilkan qualified traffic, engagement, conversion, atau contribution; ukur dampak bisnis dan kualitas kunjungan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana AI features memengaruhi SEO?
   - **Current guide answer (not yet approved):** Mereka mengubah format discovery/click patterns; foundational crawlability, content usefulness, and search intent tetap penting.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T11-CH02 — Keyword, Topic & Competitor Research
**Competency:** T11-C02

**Learning outcome under assessment:** Keyword/topic research mengidentifikasi demand, query language, competitor gaps, and content opportunities. Keyword volume dari tools adalah estimasi, bukan demand pasti; periksa trend, SERP format, geography, and seasonality. Topic clustering menyusun hubungan pillar/supporting pages. Competitor SERP analysis membaca page type, intent, features, content depth, and proof rather than copying text.

**Required artifact / chapter-specific evidence checklist:** Buat keyword-topic map minimal 50 query untuk satu kategori. Sertakan intent, SERP feature, page type, topic cluster, competitor gaps, priority score, and proposed URL.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa satu keyword tidak otomatis memerlukan satu halaman?
   - **Current guide answer (not yet approved):** Query dengan intent sama dapat dilayani satu halaman; terlalu banyak halaman serupa dapat menimbulkan cannibalization.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa batas search volume estimate?
   - **Current guide answer (not yet approved):** Tools menggunakan estimasi, grouping, and sampling; actual demand varies by location, season, and query definition.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa maksud keyword cannibalization?
   - **Current guide answer (not yet approved):** Beberapa halaman site bersaing untuk intent/query yang sama sehingga relevansi dan signals dapat tersebar.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T11-CH03 — Website Architecture, Crawlability & Indexing
**Competency:** T11-C03

**Learning outcome under assessment:** Website architecture memengaruhi crawling, navigation, internal link equity, and user discovery. URL structure, hierarchy, canonical, robots directives, sitemap, pagination, faceted navigation, and JavaScript rendering perlu dipahami berdasarkan site scale. Crawl budget bukan solusi universal; prioritasnya memastikan important pages discoverable, indexable, canonicalized, and valuable.

**Required artifact / chapter-specific evidence checklist:** Buat technical architecture audit dengan crawl sample: URL taxonomy, orphan pages, status code, canonical, robots, sitemap, faceted URLs, internal links, and remediation roadmap.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa risiko memblokir URL melalui robots.txt tanpa memahami index state?
   - **Current guide answer (not yet approved):** URL dapat tetap diketahui/diindeks dari links meski crawler tidak dapat membaca content; directives punya fungsi berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa fungsi canonical?
   - **Current guide answer (not yet approved):** Memberi sinyal preferred URL di antara duplicates/similar pages; bukan jaminan search engine mengikuti pilihan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang dimaksud orphan page?
   - **Current guide answer (not yet approved):** Orphan page adalah halaman yang tidak menerima internal links yang memadai, sehingga sulit ditemukan pengguna dan crawler melalui navigasi situs.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T11-CH04 — Technical SEO & Core Web Vitals
**Competency:** T11-C03

**Learning outcome under assessment:** Technical SEO memastikan website mudah diakses, di-render, aman, cepat, and stabil. Core Web Vitals menilai loading, interactivity, and visual stability; interpretasi field data berbeda dari lab tests. Technical review juga mencakup mobile usability, JavaScript rendering, redirects, status codes, HTTPS, structured data validation, and server reliability. Prioritization harus memakai evidence, page templates, and business impact.

**Required artifact / chapter-specific evidence checklist:** Buat audit teknis untuk tiga page templates: issue, evidence, affected URLs, root-cause hypothesis, impact, fix, owner, and before/after measurement plan.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda field data dan lab data CWV?
   - **Current guide answer (not yet approved):** Field data mencerminkan real-user experience; lab data membantu reproduksi/debug pada kondisi test.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa schema markup tidak menjamin rich result?
   - **Current guide answer (not yet approved):** Structured data membantu search engine memahami konten, tetapi tampilan rich result tetap bergantung pada eligibility, quality, policy, dan sistem search.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa technical SEO perlu koordinasi developer?
   - **Current guide answer (not yet approved):** Banyak issue berada pada templates, rendering, redirects, server, and deployment—not hanya content editor.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T11-CH05 — On-Page SEO, Content & Structured Data
**Competency:** T11-C01, T11-C04

**Learning outcome under assessment:** On-page SEO membuat halaman menjawab intent secara jelas dan bermanfaat. Title, headings, copy, internal links, images, metadata, and structured data harus mengikuti page purpose dan actual content. Helpful content memerlukan first-hand expertise, completeness, trust, evidence, and reader value. Keyword stuffing, doorway pages, thin programmatic pages, and misleading claims dapat merusak kualitas.

**Required artifact / chapter-specific evidence checklist:** Buat content brief dan on-page audit untuk satu landing page: intent, title/H1, outline, proof, internal links, media, CTA, schema validity, and review checklist.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apakah keyword density menentukan ranking?
   - **Current guide answer (not yet approved):** Tidak. Intent match, usefulness, content quality, and technical access lebih penting; keyword repetition bukan shortcut.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa structured data harus sesuai visible content?
   - **Current guide answer (not yet approved):** Markup yang misleading/tidak sesuai dapat melanggar guidelines dan tidak dipercaya search engines.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang membuat halaman helpful?
   - **Current guide answer (not yet approved):** Jawaban lengkap dan akurat, bukti, usability, first-hand expertise, and clear next steps for audience.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T11-CH06 — Off-Page SEO, Digital PR & Authority
**Competency:** T11-C05

**Learning outcome under assessment:** Off-page SEO and Digital PR membangun reputation, authority, and discovery melalui editorial links, mentions, partnerships, and relevant coverage. Link quantity alone is not a strategy; evaluate relevance, editorial integrity, source quality, referral value, anchor context, and policy compliance. Jangan membeli link atau membuat network manipulatif. Digital PR harus memiliki angle newsworthy dan credible data.

**Required artifact / chapter-specific evidence checklist:** Buat digital PR plan dan backlink risk audit untuk brand latihan: competitor gap, story angle, target publishers, pitch outline, link quality criteria, and measurement.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa backlink quantity tidak sama dengan authority?
   - **Current guide answer (not yet approved):** Jumlah link saja tidak menunjukkan kualitas; relevance, editorial legitimacy, source quality, context, dan spam signals juga menentukan nilai.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda earned link dan paid link scheme?
   - **Current guide answer (not yet approved):** Earned link muncul karena editorial value; paid/manipulative links bertujuan memengaruhi ranking dan berisiko melanggar guidelines.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa ukuran keberhasilan digital PR selain link count?
   - **Current guide answer (not yet approved):** Relevant coverage, referral quality, brand search, audience reach, authority signals, and business influence.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T11-CH07 — Local SEO & Search Demand
**Competency:** T11-C05

**Learning outcome under assessment:** Local SEO mengoptimalkan discoverability untuk pencarian berbasis lokasi dan service area. Google Business Profile, NAP consistency, category, hours, services, reviews, photos, local landing pages, citations, and location relevance berperan. Multi-location brand membutuhkan governance listing dan review management. Ranking dipengaruhi relevansi, distance, prominence, and context; tidak semua faktor dapat dikendalikan marketer.

**Required artifact / chapter-specific evidence checklist:** Buat local search audit untuk lima lokasi: profile completeness, NAP, category, reviews, local landing pages, citations, owner, and maintenance SLA.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa itu NAP consistency?
   - **Current guide answer (not yet approved):** NAP consistency berarti nama bisnis, alamat, dan nomor telepon akurat serta konsisten di direktori dan sumber lokal yang relevan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa review tidak boleh dibeli?
   - **Current guide answer (not yet approved):** Review palsu atau diberi insentif dapat melanggar platform policies, menyesatkan konsumen, dan merusak kepercayaan terhadap brand.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa tantangan multi-location SEO?
   - **Current guide answer (not yet approved):** Risikonya meliputi halaman lokasi tipis atau duplikat, data bisnis tidak konsisten, ownership listing, dan governance respons review.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T11-CH08 — Search Console, Analytics & SEO Reporting
**Competency:** T11-C06

**Learning outcome under assessment:** Search Console dan analytics menghubungkan organic visibility dengan behavior dan business outcomes. GSC memberi performance queries/pages, indexing, sitemap, enhancements, and search appearance; GA4 memberi sessions/events/conversions. Metrics memiliki scope dan attribution berbeda; clicks GSC tidak sama dengan sessions GA4. Reporting harus memisahkan branded/non-branded, page type, country/device, and search feature.

**Required artifact / chapter-specific evidence checklist:** Buat organic reporting dashboard dan monthly memo dari synthetic/demo data: query, page, clicks, impressions, CTR, position, indexation, sessions, conversions, and prioritized actions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa GSC clicks tidak sama dengan GA4 sessions?
   - **Current guide answer (not yet approved):** Click tidak selalu menjadi session akibat loading, redirects, consent, browser, and measurement differences.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa average position perlu segmentasi?
   - **Current guide answer (not yet approved):** Aggregation across queries/pages/devices can hide changes in query mix and SERP features.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa isi SEO recommendation yang actionable?
   - **Current guide answer (not yet approved):** Rekomendasi harus menyebut halaman atau perubahan teknis spesifik, evidence, impact hypothesis, priority, owner, timeline, serta cara mengukur hasil.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T11-CH09 — AEO, GEO & AI Search Visibility
**Competency:** T11-C01, T11-C07

**Learning outcome under assessment:** AEO/GEO/AI Search mengamati bagaimana brand/content ditemukan dan dirujuk pada answer engines dan AI features. Fondasi website tetap crawlability, helpful content, entity clarity, source authority, and structured information. Tidak ada markup khusus yang menjamin citation/rank di semua AI systems. Monitoring harus mencatat platform, prompt, date, answer, cited sources, brand mention, and context; hasil sampling tidak boleh disajikan sebagai universal visibility metric.

**Required artifact / chapter-specific evidence checklist:** Buat AI search visibility log dengan 20 prompts lintas informational/commercial/local intents. Catat date, engine, answer, citations, mention/context, source quality, and content actions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apakah schema menjamin brand muncul di AI answer?
   - **Current guide answer (not yet approved):** Tidak. Structured data membantu machine understanding di konteks tertentu; tidak menjamin answer inclusion/citation.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa prompt sampling bukan market share?
   - **Current guide answer (not yet approved):** Hasil prompt sampling bergantung model, date, location, wording, personalization, dan response variance; sampel itu tidak mewakili pangsa pasar.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa fondasi AEO/GEO yang tetap relevan?
   - **Current guide answer (not yet approved):** Accessible, helpful, accurate content, clear entities, authoritative evidence, and sound technical SEO.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T11-CH10 — Organic Search Capstone
**Competency:** T11-C07

**Learning outcome under assessment:** SEO Capstone menyatukan audit teknis, keyword/topic research, content strategy, digital PR, local, reporting, and AI visibility baseline menjadi roadmap yang diprioritaskan. Rekomendasi harus mempertimbangkan engineering/content resources dan business impact. Hindari menjanjikan ranking atau traffic uplift tanpa data; nyatakan uncertainty dan measurement plan.

**Required artifact / chapter-specific evidence checklist:** Siapkan SEO capstone: technical audit, keyword/topic map, on-page brief, backlink/PR review, local checklist, Search Console baseline, AI visibility log, prioritized 90-day roadmap, and executive summary.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa SEO roadmap perlu owner dan dependency?
   - **Current guide answer (not yet approved):** Banyak fixes butuh engineering, design, content, legal, and product; tanpa owners/dependencies, rekomendasi tidak bisa dieksekusi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang tidak boleh dijanjikan SEO specialist?
   - **Current guide answer (not yet approved):** Posisi/ranking pasti atau traffic growth tanpa mempertimbangkan competition, indexing, update, and external factors.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang membuktikan capstone berbasis evidence?
   - **Current guide answer (not yet approved):** Source URLs, crawl export, GSC/GA4 data, issue examples, priority rationale, assumptions, and measurement plan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T12-CH01 — CRM Ecosystem & Lifecycle Strategy
**Competency:** T12-C01

**Learning outcome under assessment:** CRM adalah strategi pengelolaan hubungan customer berbasis data dan lifecycle, bukan sekadar software atau daftar kontak. Lifecycle dapat mencakup lead, onboarding, activation, repeat, loyalty, lapse, and win-back; definisi harus mengikuti model bisnis. CRM specialist menyelaraskan acquisition, sales, service, and customer value dengan consent, data quality, governance, and communication experience.

**Required artifact / chapter-specific evidence checklist:** Buat CRM lifecycle blueprint untuk satu business model: stage definitions, entry/exit criteria, trigger, owner, business metric, contact policy, and high-risk customer scenarios.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa CRM bukan sekadar software?
   - **Current guide answer (not yet approved):** Software menjalankan workflow; strategi CRM mendefinisikan lifecycle, customer value, data, communication, and governance.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko lifecycle stage tidak memiliki entry/exit criteria?
   - **Current guide answer (not yet approved):** Contacts dapat menerima komunikasi salah, masuk berulang, atau tetap di stage yang tidak tepat.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa retention metric harus mengikuti model bisnis?
   - **Current guide answer (not yet approved):** Repeat/retention memiliki arti berbeda untuk subscription, durable goods, retail, and lead-based B2B.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T12-CH02 — Customer Data Architecture & Database
**Competency:** T12-C02

**Learning outcome under assessment:** Customer data architecture mengatur struktur, identifiers, sources, events, fields, relationships, deduplication, consent, and access. Data dapat berasal dari web/app, POS, CRM, support, email, WhatsApp, sales, and offline systems. Identity resolution harus dilakukan dengan governance dan tidak menggabungkan data hanya karena nama/email mirip. Data model perlu menyebut customer, account, contact, event, transaction, product, and consent entities.

**Required artifact / chapter-specific evidence checklist:** Buat CRM data dictionary dan ERD sederhana: contact, account, transaction, product, event, consent, and communication preference. Sertakan dedupe, identity, access, and retention rules.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa data merge harus memiliki confidence rules?
   - **Current guide answer (not yet approved):** False merges dapat menampilkan data customer lain, salah segment, dan mengirim komunikasi yang keliru.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda contact record dan transaction record?
   - **Current guide answer (not yet approved):** Contact merepresentasikan individu/account; transaction merepresentasikan event bisnis dengan tanggal, product, value, and status.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa peran consent dan preference fields?
   - **Current guide answer (not yet approved):** Membatasi tujuan, channel, topic, and frequency komunikasi sesuai izin dan pilihan customer.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T12-CH03 — Segmentation, Lead Scoring & Lifecycle Stages
**Competency:** T12-C03

**Learning outcome under assessment:** Segmentation mengelompokkan customer untuk action yang relevan; lead scoring menilai fit/intent/progression; lifecycle stage memberi konteks hubungan. Segment harus memiliki criteria yang reproducible, refresh cadence, size, and owner. RFM (recency, frequency, monetary) berguna untuk transaksi, tetapi tidak menggantikan behavioral/need segmentation. Lead scoring harus divalidasi terhadap sales outcomes agar tidak hanya memberi poin pada aktivitas mudah.

**Required artifact / chapter-specific evidence checklist:** Buat segment taxonomy 6 kelompok dan lead score model dengan firmographic/behavioral signals, point weights, exclusions, validation sample, and sales handoff SLA.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa risiko lead scoring hanya dari email opens?
   - **Current guide answer (not yet approved):** Open tracking dapat dipengaruhi privacy protection dan machine activity; open tidak selalu menunjukkan intent atau kecocokan lead.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda fit dan intent?
   - **Current guide answer (not yet approved):** Fit mengukur kesesuaian dengan target profile; intent mengukur sinyal kebutuhan atau kesiapan bertindak pada kategori tertentu.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana memvalidasi model scoring?
   - **Current guide answer (not yet approved):** Uji terhadap qualified rate, sales acceptance, conversion, false positives/negatives, and calibration over time.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T12-CH04 — Customer Journey & Trigger-Based Communication
**Competency:** T12-C04

**Learning outcome under assessment:** Trigger-based communication terjadi karena event/kondisi: signup, purchase, product usage, cart abandon, renewal, inactivity, or service status. Trigger berbeda dari broadcast campaign dan journey sequence. Setiap workflow perlu eligibility, consent, branch, delay, frequency cap, suppression, exit condition, retry, and exception handling. Timing harus masuk akal dengan product use and customer context.

**Required artifact / chapter-specific evidence checklist:** Buat workflow diagram untuk welcome, cart abandon, post-purchase, and reactivation. Sertakan trigger/condition/action, branches, delays, suppression, exit, frequency cap, and QA scenarios.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda trigger dan campaign blast?
   - **Current guide answer (not yet approved):** Trigger dikirim karena event/condition spesifik; blast dikirim ke target segment pada jadwal yang ditetapkan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa cross-channel purchase suppression penting?
   - **Current guide answer (not yet approved):** Suppression lintas kanal mencegah customer menerima reminder atau offer yang tidak relevan setelah membeli melalui channel lain.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa fungsi exit condition?
   - **Current guide answer (not yet approved):** Exit condition menghentikan contact saat goal tercapai, eligibility hilang, consent ditarik, atau status customer berubah.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T12-CH05 — Email, WhatsApp, SMS & Push Strategy
**Competency:** T12-C05

**Learning outcome under assessment:** Email, WhatsApp, SMS, and push memiliki permission, format, cost, immediacy, content, and response expectations berbeda. Channel selection harus mengikuti customer preference, urgency, service vs marketing purpose, and local policy/platform terms. Email memerlukan sender/domain, authentication (SPF/DKIM/DMARC), list hygiene, unsubscribe, deliverability; WhatsApp business messaging memiliki template/session/pricing/policy rules yang harus diverifikasi terkini. Jangan menganggap nomor telepon berarti izin marketing.

**Required artifact / chapter-specific evidence checklist:** Buat channel decision matrix dan 3 sample communications untuk service update, onboarding, and promotional reactivation. Sertakan consent, preference, opt-out, fallback, and compliance check.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apakah contact detail sama dengan consent marketing?
   - **Current guide answer (not yet approved):** Tidak. Memiliki email atau nomor telepon tidak otomatis memberi izin mengirim promosi; periksa purpose dan legal basis.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Kapan SMS/WhatsApp lebih tepat daripada email?
   - **Current guide answer (not yet approved):** Untuk komunikasi urgent/transactional atau audience preference tertentu; harus sesuai permission, cost, policy, and use case.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa channel fallback perlu dirancang?
   - **Current guide answer (not yet approved):** Agar pesan penting tetap dapat disampaikan jika primary channel gagal, tanpa melanggar consent/frequency rules.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T12-CH06 — Marketing Automation & Workflow Architecture
**Competency:** T12-C02, T12-C04, T12-C06

**Learning outcome under assessment:** Automation architecture menyusun trigger, condition, action, branch, delay, data input, integration, retry, and monitoring. Workflow harus idempotent agar event duplicate tidak memicu pesan ganda. API/webhook, CRM, email service, spreadsheet, and data warehouse perlu error handling and ownership. Automation bukan sekadar happy path; desain juga failure, consent change, missing data, and human handoff.

**Required artifact / chapter-specific evidence checklist:** Buat automation architecture dan QA plan untuk form-to-CRM-to-email flow. Dokumentasikan schema, API/webhook, dedupe, retries, consent, error queue, monitoring, and human handoff.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa arti idempotent workflow?
   - **Current guide answer (not yet approved):** Workflow idempotent memproses event berulang tanpa efek samping ganda, misalnya membuat contact atau mengirim message dua kali.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa retry harus memiliki batas?
   - **Current guide answer (not yet approved):** Retry tanpa kontrol dapat membuat duplicate action, API overload, and repeated messages.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang wajib disimpan dalam error log?
   - **Current guide answer (not yet approved):** Timestamp, event ID, failure reason, workflow step, retry count, owner, and remediation status.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T12-CH07 — Personalization, Content & Deliverability
**Competency:** T12-C06

**Learning outcome under assessment:** Personalization harus memberi relevansi tanpa terasa mengawasi. Gunakan attributes/behavior yang diperlukan, jelaskan value, jaga data minimization, and provide preference controls. Deliverability dipengaruhi sender reputation, authentication (SPF/DKIM/DMARC), list quality, bounce, complaint, engagement, content, and sending behavior. Open rates memiliki privacy limitations; gunakan click, conversion, deliverability, and downstream outcomes secara seimbang.

**Required artifact / chapter-specific evidence checklist:** Buat personalization map dan email deliverability audit: data fields, source, use/purpose, fallback, preference, SPF/DKIM/DMARC checklist, bounce/complaint, and KPI.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa open rate tidak selalu reliable?
   - **Current guide answer (not yet approved):** Privacy features dan image preloading dapat mengubah open tracking; ia bukan ukuran penuh attention.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa fungsi SPF, DKIM, dan DMARC?
   - **Current guide answer (not yet approved):** Authentication/alignment membantu memverifikasi domain sending dan mengurangi spoofing; konfigurasi harus sesuai provider.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana membuat personalization terasa relevan?
   - **Current guide answer (not yet approved):** Gunakan data yang diperlukan, jelaskan manfaat, hindari kejutan invasif, dan sediakan preference/control.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T12-CH08 — Retention, Churn, Cohort & Customer Lifetime Value
**Competency:** T12-C07

**Learning outcome under assessment:** Retention, churn, cohort, and LTV mengukur kualitas hubungan customer sepanjang waktu. Cohort dibentuk berdasarkan event awal yang sama; retention perlu definisi activity yang sesuai model bisnis. Churn dapat berupa inactivity, cancellation, lapse, or loss of revenue. LTV harus memperhatikan margin, repeat cadence, refunds, discounts, service cost, and horizon; jangan menghitung revenue-only LTV lalu membandingkannya dengan CAC seolah-olah contribution.

**Required artifact / chapter-specific evidence checklist:** Buat cohort retention workbook, churn definition, LTV sensitivity model, and 3 intervention hypotheses. Gunakan synthetic transactions and explicitly label assumptions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa cohort harus memiliki start event yang sama?
   - **Current guide answer (not yet approved):** Start event yang seragam menyamakan lifecycle age, sehingga retention dan value antarcohort dapat dibandingkan lebih adil.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko LTV berbasis revenue?
   - **Current guide answer (not yet approved):** LTV berbasis revenue dapat melebihkan nilai customer karena tidak mengurangi margin, returns, discounts, service costs, dan contribution.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang dimaksud churn signal?
   - **Current guide answer (not yet approved):** Perubahan perilaku/engagement/purchase yang dapat mengindikasikan risiko berhenti; perlu validasi dengan historical outcomes.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T12-CH09 — Lifecycle Experimentation & Reporting
**Competency:** T12-C08

**Learning outcome under assessment:** Lifecycle experimentation menguji pesan, timing, channel, offer, onboarding sequence, and frequency. Metric seperti delivery, bounce, click, conversion, repeat, complaint, unsubscribe, and revenue harus dipilih sesuai objective. Test perlu randomization unit, holdout, primary KPI, guardrails, sample/duration, and decision rules. CRM lift sering dipengaruhi seasonality, overlapping campaigns, and contact eligibility; holdout membantu menilai incrementality.

**Required artifact / chapter-specific evidence checklist:** Buat test backlog untuk onboarding, replenishment, win-back: hypothesis, audience, treatment/control, primary/guardrails, timing, sample assumptions, and decision rules.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa opens bukan satu-satunya success metric?
   - **Current guide answer (not yet approved):** Open adalah engagement proxy, bukan hasil bisnis; ia tidak menjamin conversion atau retention dan dapat terdistorsi privacy mechanisms.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa fungsi holdout group?
   - **Current guide answer (not yet approved):** Holdout menyediakan kelompok pembanding tanpa treatment untuk memperkirakan dampak tambahan komunikasi dibanding kondisi tanpa komunikasi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa frequency perlu guardrail?
   - **Current guide answer (not yet approved):** Frequency berlebihan dapat meningkatkan fatigue, unsubscribe, complaint, dan kerusakan hubungan jangka panjang; tetapkan batas serta pantau dampaknya.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T12-CH10 — CRM Capstone
**Competency:** T12-C08

**Learning outcome under assessment:** CRM Capstone menunjukkan lifecycle system yang menghubungkan data architecture, segments, consent, triggers, channel, automation, deliverability, measurement, and business value. Workflow harus memiliki happy path dan failure path. Data synthetic/demo harus diberi label dan privacy risks ditulis eksplisit. Presentasi harus memperlihatkan bagaimana CRM mengurangi friction atau meningkatkan customer value, bukan sekadar memperbanyak message volume.

**Required artifact / chapter-specific evidence checklist:** Bangun portfolio pack: lifecycle map, data dictionary/ERD, segment model, consent matrix, workflow diagrams, message samples, QA cases, deliverability audit, cohort/LTV workbook, and executive readout.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa bukti CRM system siap dijalankan?
   - **Current guide answer (not yet approved):** Documented data sources, consent, workflow, suppression/exit, QA, deliverability, monitoring, owners, and rollback.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bagaimana membedakan CRM activity dan business impact?
   - **Current guide answer (not yet approved):** Message volume/delivery adalah activity; activation, repeat, margin, retention, and incremental lift menunjukkan impact.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus dilakukan bila opt-out tidak masuk ke automation?
   - **Current guide answer (not yet approved):** Segera suppress/stop marketing, perbaiki event/data pipeline, audit impacted records, and document incident/remediation.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH01 — Audience, Culture & Brand Voice
**Competency:** T13-C01

**Learning outcome under assessment:** Content Strategy dimulai dari business objective, audience need, brand positioning, and communication role. Content bukan sekadar kalender posting; ia adalah sistem aset yang membantu audience memahami, mempertimbangkan, memilih, menggunakan, dan merekomendasikan brand. Brand voice harus memiliki prinsip, tone, vocabulary, and boundaries yang konsisten, tetapi dapat diekspresikan secara native pada tiap platform.

**Required artifact / chapter-specific evidence checklist:** Buat brand voice guide dengan 4 prinsip, tone matrix, vocabulary, do/don't, claims policy, dan contoh adaptasi satu message untuk TikTok, Instagram, YouTube, LinkedIn, dan blog.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda brand voice dan tone?
   - **Current guide answer (not yet approved):** Brand voice adalah karakter komunikasi yang relatif konsisten; tone menyesuaikan ekspresi voice terhadap konteks, platform, dan audience.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa brand voice tidak boleh menghalangi platform-native content?
   - **Current guide answer (not yet approved):** Ekspresi perlu menyesuaikan format dan perilaku audience sambil mempertahankan promise dan principles.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang termasuk claims policy?
   - **Current guide answer (not yet approved):** Claims policy menetapkan batas klaim, proof requirement, legal atau regulatory review, dan pernyataan yang tidak boleh digunakan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH02 — Content Strategy, Objectives & Pillars
**Competency:** T13-C02

**Learning outcome under assessment:** Content strategy menerjemahkan objective campaign/business menjadi content objectives, territories, pillars, formats, and distribution roles. Content pillar bukan sekadar daftar tema; tiap pillar harus memiliki audience need, brand role, proof, format, and measurement. Pisahkan content untuk education, consideration, conversion, retention, and advocacy. Proporsi konten perlu mengikuti objective, resources, and evidence—not fixed universal percentages.

**Required artifact / chapter-specific evidence checklist:** Buat content strategy one-pager dengan objectives, audience journey, 4–6 content pillars, formats, distribution, channel role, KPIs, owner, and resource assumptions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda content pillar dan editorial calendar?
   - **Current guide answer (not yet approved):** Pillar menentukan territory/strategic themes; calendar mengatur kapan dan aset mana yang diproduksi/publish.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa persentase content mix tidak universal?
   - **Current guide answer (not yet approved):** Kategori, audience, funnel, budget, and business objective berbeda; proporsi harus ditentukan dari evidence.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan content dianggap mendukung conversion?
   - **Current guide answer (not yet approved):** Saat ia menjawab objection, membuktikan value, memfasilitasi decision, and mengarah ke next action yang relevan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH03 — Editorial Architecture & Content Calendar
**Competency:** T13-C03

**Learning outcome under assessment:** Editorial architecture mengatur alur ide, brief, production, review, publish, repurpose, and update. Calendar harus memuat objective, audience, pillar, format, channel, owner, asset status, approval, dependencies, dates, and KPI. Always-on dan campaign content memiliki ritme berbeda. Capacity planning penting agar kalender realistis dan tidak mendorong kuantitas dengan mengorbankan editorial quality.

**Required artifact / chapter-specific evidence checklist:** Buat editorial calendar 4 minggu dengan 12 planned assets, status workflow, owner, deadlines, production effort, campaign dependencies, repurpose plan, and KPI.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa calendar harus memuat status/owner?
   - **Current guide answer (not yet approved):** Tanpa status dan owner, tim tidak dapat mengelola approval, dependencies, delays, and accountability.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda always-on dan campaign content?
   - **Current guide answer (not yet approved):** Always-on content memenuhi kebutuhan audience yang berulang; campaign content terikat objective, timing, dan aktivasi tertentu.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana mengatasi kapasitas produksi terbatas?
   - **Current guide answer (not yet approved):** Prioritaskan audience dan business value, repurpose materi, gunakan modular assets, lalu tetapkan cadence yang realistis.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH04 — Insight Mining & Content Opportunity
**Competency:** T13-C01, T13-C04

**Learning outcome under assessment:** Insight mining menggabungkan search, social listening, comments, competitor content, community, consumer research, and campaign performance untuk menemukan content gaps dan audience tensions. Ide konten perlu berasal dari audience questions, not solely trend chasing. Opportunity sizing menilai reach, relevance, urgency, competition, brand permission, production effort, and ability to differentiate.

**Required artifact / chapter-specific evidence checklist:** Buat insight-mining board 20 signals, cluster audience questions, validate three tensions, lalu prioritaskan lima content opportunities dengan score dan evidence trail.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa tren viral belum tentu opportunity?
   - **Current guide answer (not yet approved):** Tren bisa tidak relevan dengan audience, category, atau brand dan belum tentu mendukung objective maupun outcome yang diinginkan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa tanda insight mining berkualitas?
   - **Current guide answer (not yet approved):** Signals dapat ditelusuri, cluster menjelaskan need/tension, evidence lintas sumber, and content action jelas.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa beda audience question dan brand talking point?
   - **Current guide answer (not yet approved):** Audience question berasal dari kebutuhan mereka; brand talking point berasal dari hal yang ingin disampaikan brand.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH05 — Storytelling, Hook, Narrative & Brand POV
**Competency:** T13-C04

**Learning outcome under assessment:** Storytelling architecture membangun narasi dari hook, audience tension, problem, context, transformation, proof, and payoff. Hook menarik perhatian tetapi tidak boleh misleading. Brand POV memberi sudut pandang; story harus tetap factual, useful, and memorable. Format short-form perlu segera menyampaikan context/value, sedangkan long-form dapat membangun argument lebih lengkap. Narrative harus terhubung ke proposition dan CTA.

**Required artifact / chapter-specific evidence checklist:** Buat tiga storyboards untuk satu insight: 15-second video, 60-second video, and long-form article. Sertakan hook, tension, beat sheet, proof, visual/audio notes, and CTA.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa risiko hook clickbait?
   - **Current guide answer (not yet approved):** Hook yang menjanjikan hal berlebihan dapat mengecewakan audience, meningkatkan bounce atau negative feedback, dan menurunkan brand trust.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda tension dan problem statement?
   - **Current guide answer (not yet approved):** Tension menangkap konflik/need audience secara naratif; problem statement memformulasikan hambatan untuk keputusan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa fungsi proof dalam storytelling?
   - **Current guide answer (not yet approved):** Proof memberi dasar untuk mempercayai claim dan membedakan cerita yang dapat dipertanggungjawabkan dari opini atau hiburan tanpa bukti.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH06 — Long-Form Content Development
**Competency:** T13-C04

**Learning outcome under assessment:** Long-form content membutuhkan riset, struktur, evidence, editorial clarity, and search/user intent. Artikel, newsletter, founder POV, case study, blog, whitepaper, and thought leadership memiliki depth dan reader task berbeda. Outline perlu argument, source, examples, proof, author expertise, internal/external links, and CTA. Content accuracy dan legal claim review penting terutama pada finance/health/regulated categories.

**Required artifact / chapter-specific evidence checklist:** Buat brief dan outline long-form 1.200–1.500 kata dengan thesis, audience, sources, evidence table, section hierarchy, visual suggestions, author review, and CTA.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa long-form membutuhkan source trail?
   - **Current guide answer (not yet approved):** Source trail membantu pembaca dan editor memeriksa klaim, angka, freshness, konteks, dan kredibilitas sebelum konten dipublikasikan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko memakai sumber sekunder tanpa cross-check?
   - **Current guide answer (not yet approved):** Angka/claim bisa outdated, salah konteks, atau hanya mengutip sumber lain yang sama.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan artikel harus diperbarui?
   - **Current guide answer (not yet approved):** Perbarui ketika data, policy, product, platform, legal claim, atau search intent berubah sehingga isi lama berisiko menyesatkan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH07 — Short-Form Content & Repurposing
**Competency:** T13-C04

**Learning outcome under assessment:** Short-form content mengoptimalkan ide menjadi video/carousel/short posts dengan pacing, retention, visual hierarchy, sound, captions, and platform-specific constraints. Repurposing bukan copy-paste; satu source idea dapat dipecah menjadi multiple angles, hooks, formats, and audience stages. Batch production membantu efisiensi tetapi membutuhkan asset naming, versioning, and quality control.

**Required artifact / chapter-specific evidence checklist:** Buat repurpose matrix 1 long-form source menjadi 8 assets: 3 short videos, 2 carousels, 1 email, 1 LinkedIn post, and 1 story. Sertakan hook, audience, format, CTA, and production notes.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda repurposing dan reposting?
   - **Current guide answer (not yet approved):** Repurposing mengadaptasi angle, structure, format, and CTA untuk audience/context; reposting mengulang asset.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa first-frame penting?
   - **Current guide answer (not yet approved):** First-frame memberi konteks dan relevansi dengan cepat, membantu audience memahami nilai konten, serta memengaruhi keputusan untuk melanjutkan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus dicek pada video short-form?
   - **Current guide answer (not yet approved):** Aspect ratio, safe zones, captions, audio rights, claims, brand visibility, and link/CTA behavior.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH08 — Platform Adaptation: TikTok, Instagram, YouTube, LinkedIn
**Competency:** T13-C05

**Learning outcome under assessment:** Platform adaptation mempertimbangkan audience behavior, native formats, discovery mechanics, content length, interaction, and professional/community context. TikTok, Instagram Reels, YouTube Shorts tidak identik; LinkedIn memiliki expectation profesional dan context berbeda. Adaptasi tetap menjaga proposition/brand voice tetapi mengubah hook, depth, visual, pace, CTA, and publishing metadata sesuai platform.

**Required artifact / chapter-specific evidence checklist:** Buat one-idea/multi-platform adaptation matrix untuk TikTok, Instagram, YouTube, and LinkedIn. Sertakan hook, format, depth, CTA, native behavior, KPI, and risk per platform.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa satu content format tidak selalu cocok lintas platform?
   - **Current guide answer (not yet approved):** Audience intent, consumption context, platform distribution, interaction behavior, and format constraints berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang harus konsisten?
   - **Current guide answer (not yet approved):** Brand promise, factual accuracy, point of view, dan key message harus konsisten; format, length, dan execution dapat diadaptasi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa metrics lintas platform tidak boleh dibandingkan mentah?
   - **Current guide answer (not yet approved):** Definitions, view thresholds, audience, and platform behavior berbeda; gunakan normalized task-specific metrics.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH09 — Content Distribution & Amplification
**Competency:** T13-C05

**Learning outcome under assessment:** Distribution and amplification menentukan bagaimana konten menjangkau audience melalui organic, paid, creator/KOL, community, newsletter, website, and partner channels. Distribution strategy bukan tugas setelah produksi; format, rights, timing, and measurement harus direncanakan di awal. Paid amplification sebaiknya memperkuat asset yang punya audience/creative fit, bukan menjadi jalan pintas untuk konten yang tidak menyelesaikan need.

**Required artifact / chapter-specific evidence checklist:** Buat distribution plan untuk 5 content assets: organic, paid, creator, community, newsletter, and website. Sertakan rights, owner, schedule, amplification trigger, KPI, and cross-channel caveats.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa paid boost bukan pengganti distribution strategy?
   - **Current guide answer (not yet approved):** Amplification perlu audience fit, asset quality, rights, objective, budget, and downstream measurement.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko UGC/creator asset digunakan berbayar tanpa rights?
   - **Current guide answer (not yet approved):** Penggunaan tanpa rights dapat melanggar IP atau usage agreement, merusak hubungan creator, dan menimbulkan policy maupun legal exposure.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana memisahkan hasil organic dan paid?
   - **Current guide answer (not yet approved):** Gunakan tagging, platform reporting, asset IDs, time windows, and clearly defined attribution.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH10 — Content Measurement & Optimization
**Competency:** T13-C06

**Learning outcome under assessment:** Content measurement menghubungkan objective, asset, audience, platform, and action. KPI dapat mencakup reach, watch time, retention, saves, shares, click, engaged sessions, qualified leads, assisted conversion, and business outcomes. Content performance perlu dianalisis menurut format, topic, hook, creator, channel, audience, and journey role. Jangan menilai content quality hanya dari view count atau menganggap engagement selalu berdampak ke sales.

**Required artifact / chapter-specific evidence checklist:** Buat content performance dashboard schema dan optimization memo untuk 20 assets. Sertakan IDs, format, pillar, retention, engagement, click quality, conversion, objective, and next action.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa view count bukan universal success metric?
   - **Current guide answer (not yet approved):** View thresholds/platform definitions berbeda dan tidak membuktikan attention, brand impact, or downstream behavior.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa nilai saves dan shares?
   - **Current guide answer (not yet approved):** Dapat menunjukkan utility/advocacy, tetapi tetap perlu interpretasi sesuai platform, content type, and business objective.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus dilakukan bila content metric dan sales tidak sejalan?
   - **Current guide answer (not yet approved):** Periksa audience/journey role, attribution, landing path, product readiness, and whether asset's intended job is direct conversion.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T13-CH11 — Content Strategy Capstone
**Competency:** T13-C02, T13-C06

**Learning outcome under assessment:** Content Capstone membangun satu quarter content system dari audience insight hingga measurement. Paket harus menyatukan brand voice, objectives, pillars, editorial architecture, insight mining, storytelling, long/short production, platform adaptation, distribution rights, and optimization. Produksi harus memasukkan shooting, editing, sound, lighting, motion, accessibility, and tool workflow bila role mencakup hands-on creator capability; P3I curriculum menjadi benchmark strategi/editorial/storytelling, bukan bukti semua skill produksi teknis tercakup.

**Required artifact / chapter-specific evidence checklist:** Siapkan content portfolio: audience/insight deck, brand voice, 4–6 pillars, quarter calendar, 3 long-form briefs, 12 short-form storyboards/assets, production specs, distribution/right matrix, dashboard, and optimization review.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang harus bisa dijelaskan dari content capstone?
   - **Current guide answer (not yet approved):** Mengapa content themes dipilih, audience need apa yang dijawab, bagaimana diproduksi/disebar, dan bagaimana success diukur.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang belum otomatis tercakup oleh kurikulum content strategy?
   - **Current guide answer (not yet approved):** Practical production depth seperti shooting, editing, lighting, audio, and motion perlu latihan teknis tambahan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana membuktikan portfolio tanpa client?
   - **Current guide answer (not yet approved):** Labeli brief/data sebagai simulated; tampilkan storyboard/asset/workflow/source and self-review, bukan fake performance claims.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH01 — Creator Economy & Influencer Ecosystem
**Competency:** T14-C01

**Learning outcome under assessment:** Creator partnerships beroperasi dalam creator economy yang melibatkan talent, agency/MCN, brand, platform, creator manager, affiliate, production, and media amplification. Partnership dapat dibayar untuk reach, content, credibility, community, usage rights, or trackable conversion. Creator partnership bukan sekadar memilih akun dengan followers besar; strategi harus menentukan role creator dalam audience journey dan business objective.

**Required artifact / chapter-specific evidence checklist:** Buat creator ecosystem map dan role matrix untuk awareness, education, product review, conversion, and advocacy campaigns. Sertakan partner types, deliverables, payment model, and risks.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa creator economy tidak sama dengan follower economy?
   - **Current guide answer (not yet approved):** Creator value mencakup audience trust, content quality, niche authority, rights, and commercial fit—not audience size alone.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda influencer campaign dan affiliate partnership?
   - **Current guide answer (not yet approved):** Influencer dibayar untuk content/reach/credibility; affiliate dibayar menurut tracked action/sales, meski creator dapat menjalankan keduanya.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa fungsi MCN/creator agency?
   - **Current guide answer (not yet approved):** Mengelola talent, production, commercial negotiation, access, and scale; scope berbeda per partner.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH02 — KOL, KOC, Nano, Micro, Macro & Mega Creator
**Competency:** T14-C02

**Learning outcome under assessment:** KOL dan KOC adalah pendekatan yang sering dipakai di Indonesia, tetapi keduanya bukan kategori global yang selalu distandarkan. KOL lebih sering dipilih karena expertise/authority/visibility; KOC lebih dekat dengan peer recommendation dan pengalaman pengguna. Nano/micro/macro/mega tiers hanya shortcut; audience relevance, trust, content niche, and quality lebih penting daripada follower threshold semata.

**Required artifact / chapter-specific evidence checklist:** Buat KOL/KOC creator matrix berisi 20 creators synthetic/example: tier, niche, audience geo, trust signal, content format, objective fit, rate range assumption, disclosure, and recommended role.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda KOL dan KOC secara praktis?
   - **Current guide answer (not yet approved):** KOL biasanya dipilih untuk expertise/authority; KOC untuk peer experience/recommendation, tetapi batasnya tidak selalu formal.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa tier berdasarkan followers tidak cukup?
   - **Current guide answer (not yet approved):** Followers tidak menunjukkan audience fit, authenticity, influence, engagement quality, or content capability.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa kewajiban disclosure?
   - **Current guide answer (not yet approved):** Audience harus memahami hubungan komersial seperti paid, gifted, atau affiliate sesuai aturan hukum, platform policies, dan kontrak yang berlaku.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH03 — Creator Discovery & Audience Research
**Competency:** T14-C03

**Learning outcome under assessment:** Creator discovery menggunakan criteria yang dapat direplikasi: category fit, audience demographics/geography, engagement quality, content quality, brand safety, previous sponsorship, follower growth anomalies, and commercial availability. Discovery sources dapat berupa platform search, creator marketplace, agency roster, social listening, and referrals. Shortlist tidak boleh hanya berdasarkan popularitas; semua claims tentang audience harus diverifikasi dengan available analytics atau media kit.

**Required artifact / chapter-specific evidence checklist:** Buat discovery workbook 30 candidates dan shortlist lima: criteria, source, profile, audience evidence, content fit, conflicts, outreach status, and recommendation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa discovery perlu source trail?
   - **Current guide answer (not yet approved):** Source trail membantu memeriksa ulang creator data, kontak, rates, availability, dan perubahan sebelum shortlist atau kontrak disetujui.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda fit score dan performance guarantee?
   - **Current guide answer (not yet approved):** Fit score adalah penilaian awal berdasarkan kriteria; ia bukan jaminan reach, engagement, conversion, atau campaign outcome.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus dikonfirmasi sebelum shortlist final?
   - **Current guide answer (not yet approved):** Konfirmasi audience evidence, availability, fee, usage rights, exclusivity, policy issues, dan deliverables sebelum shortlist dikunci.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH04 — Creator Vetting, Audience Fit & Fraud Screening
**Competency:** T14-C03

**Learning outcome under assessment:** Creator vetting memeriksa authentic audience, engagement quality, content credibility, brand safety, previous sponsorship, follower growth anomalies, and category fit. Fraud indicators bukan bukti final; sudden spikes, generic comments, bot-like profiles, engagement pods, and inconsistent geo perlu investigasi. Gunakan third-party tools sebagai signal, bukan verdict tunggal. Simpan evidence dan decision rationale.

**Required artifact / chapter-specific evidence checklist:** Buat creator vetting scorecard untuk lima candidates dengan audience fit, ER context, quality, fake signal checks, brand safety, history, and accept/reject/risk decision.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apakah suspicious follower growth pasti fraud?
   - **Current guide answer (not yet approved):** Tidak. Bisa dipengaruhi viral content, media coverage, or platform events; perlu triangulasi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa engagement rate saja tidak cukup?
   - **Current guide answer (not yet approved):** Comments dapat fake/low quality, audience tidak relevan, and platform metrics differ by format.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa bukti vetting yang harus disimpan?
   - **Current guide answer (not yet approved):** Dated screenshots/exports, media kit, risk flags, creator response, source links, and approval rationale.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH05 — Influencer Strategy & Campaign Planning
**Competency:** T14-C04, T14-C05

**Learning outcome under assessment:** Influencer strategy menerjemahkan objective menjadi creator roles, tier mix, campaign concept, timeline, budget, and KPI. Campaign brief perlu menjelaskan audience, insight, message, content role, deliverables, creative freedom, mandatories, CTA, disclosure, and usage rights. Creator plan harus memperhitungkan audience overlap, product availability, seasonality, production capacity, and cross-channel amplification.

**Required artifact / chapter-specific evidence checklist:** Buat creator campaign plan 4 minggu: creator tier mix, shortlists, budget, message, timeline, deliverables, KPI, rights, disclosure, and amplification. Buat base/conservative scenarios.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa KPI harus berbeda per creator role?
   - **Current guide answer (not yet approved):** Creator untuk authority atau education, reach, UGC, dan affiliate conversion memiliki peran berbeda sehingga KPI harus mengikuti outcome peran.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko audience overlap tinggi?
   - **Current guide answer (not yet approved):** Incremental reach dapat turun dan biaya menjangkau orang yang sama menjadi tinggi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus masuk budget creator?
   - **Current guide answer (not yet approved):** Talent fee, production, seeding, shipping, usage rights, exclusivity, amplification, measurement, tax, and contingency.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH06 — KOL Briefing, Storyline & Content Approval
**Competency:** T14-C02, T14-C04

**Learning outcome under assessment:** KOL brief harus memberi strategic direction tetapi tidak membunuh creator authenticity. Brief memuat campaign context, audience, product truth, key message, proof, do/don't, story role, platform/format, deliverables, CTA, disclosure, mandatory, and approval. Storyline harus menunjukkan pengalaman atau explanation yang believable. Approval flow membutuhkan SLA dan batas revisi agar creator autonomy dan brand safety seimbang.

**Required artifact / chapter-specific evidence checklist:** Buat creator brief, storyline outline, key-message/proof matrix, do/don't, disclosure copy, approval workflow, and feedback template for one campaign.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa risiko brief terlalu preskriptif?
   - **Current guide answer (not yet approved):** Konten kehilangan naturalness/creator voice, dan audience dapat melihatnya sebagai iklan yang tidak autentik.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko brief terlalu bebas?
   - **Current guide answer (not yet approved):** Brief yang tidak memiliki guardrails dapat membuat pesan atau claim melenceng, mandatories terlewat, dan brand-safety atau contract issue muncul.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana approval SLA membantu?
   - **Current guide answer (not yet approved):** Creator dan brand mengetahui timeline review, jumlah revisi, final asset, and publishing lock.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH07 — Negotiation, Rate, Contract & Usage Rights
**Competency:** T14-C05

**Learning outcome under assessment:** Negotiation dan contract mengikat scope, fee, deliverables, payment terms, usage rights, exclusivity, whitelisting, revisions, cancellations, disclosure, performance claims, IP, confidentiality, and remedies. Creator fee tidak otomatis mencakup perpetual paid usage. Buyer harus memisahkan organic posting license, paid amplification, raw footage, cutdowns, edit, territory, channels, and duration.

**Required artifact / chapter-specific evidence checklist:** Buat creator deal sheet dan contract checklist dengan rate, deliverables, revisions, usage rights, paid whitelisting, exclusivity, disclosure, cancel, payment, and expiry fields.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda organic posting rights dan paid usage rights?
   - **Current guide answer (not yet approved):** Izin posting pada channel creator berbeda dari izin brand menggunakannya pada paid ads/other channels.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa raw footage harus disebutkan?
   - **Current guide answer (not yet approved):** Raw files memiliki nilai/IP scope berbeda; edit, storage, access, and reuse perlu persetujuan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang dilakukan bila creator meminta exclusivity luas?
   - **Current guide answer (not yet approved):** Nilai business impact, category definition, duration, competitors, and compensation; negotiate narrower scope.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH08 — Product Seeding, Barter & Creator Relationship
**Competency:** T14-C05

**Learning outcome under assessment:** Seeding dan barter membangun trial/relationship tetapi bukan gratis: product cost, packaging, shipping, staff time, and content rights tetap ada. Seeding harus punya target, reason, opt-in, logistics, brief, and post-send follow-up. Barter harus menyebut deliverables atau menyatakan tidak ada guarantee. Relationship management meliputi CRM creator, communication, feedback, payment, and long-term trust.

**Required artifact / chapter-specific evidence checklist:** Buat seeding program plan 30 creators: selection criteria, opt-in, product allocation, logistics tracker, expected/non-guaranteed outputs, feedback form, and cost model.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apakah gifting otomatis mewajibkan posting?
   - **Current guide answer (not yet approved):** Tidak kecuali ada agreement yang jelas; gifting dan paid deliverables harus dibedakan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa opt-in penting?
   - **Current guide answer (not yet approved):** Opt-in memastikan creator menerima produk atau campaign secara sadar dan memahami terms, expectations, serta tidak ada kewajiban tersembunyi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa biaya seeding selain produk?
   - **Current guide answer (not yet approved):** Packing, shipping, taxes, handling, staff hours, follow-up, and content usage/rights if negotiated.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH09 — Campaign Execution & Content Delivery
**Competency:** T14-C06

**Learning outcome under assessment:** Campaign execution mengatur production, deadlines, asset collection, quality review, disclosure, platform settings, link/tag, publishing, and proof. Deliverable acceptance harus didasarkan pada contract/brief, bukan selera internal setelah tayang. Tanggal post, URL, screenshot, view/engagement snapshots, and invoice status perlu dicatat. Crisis/negative feedback harus memiliki escalation protocol.

**Required artifact / chapter-specific evidence checklist:** Buat execution tracker untuk 10 creator posts: status, owner, due date, asset version, approval, disclosure, URL, proof, corrections, invoice, and final acceptance.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang dilakukan jika creator telat publish?
   - **Current guide answer (not yet approved):** Ikuti contract/deadline clause, assess campaign impact, notify owner, and agree corrective path.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa screenshot alone tidak cukup untuk proof?
   - **Current guide answer (not yet approved):** Screenshot perlu dilengkapi URL, timestamp, platform, asset version, dan insight exports atau permission evidence yang relevan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus ditangani segera setelah salah link?
   - **Current guide answer (not yet approved):** Pause amplification, perbaiki destination, beri tahu creator dan brand, catat impact, lalu verifikasi link serta tracking sebelum aktif kembali.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH10 — Paid Amplification & Partnership Ads
**Competency:** T14-C06

**Learning outcome under assessment:** Paid amplification dan Partnership Ads memakai creator identity/content untuk distribution berbayar. Boosting dari brand page berbeda dari partnership ad/whitelisting. Campaign setup perlu account permission, post authorization, ad disclosure, creative rights, targeting, budget, tracking, and expiry. Organic creator performance dan paid amplified performance harus dilaporkan terpisah sebelum digabung ke total campaign view.

**Required artifact / chapter-specific evidence checklist:** Buat partnership ads checklist dan paid amplification plan untuk dua creator assets. Sertakan permissions, rights, objective, budget, tracking, organic/paid reporting, and expiry alerts.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda boost dan partnership ad?
   - **Current guide answer (not yet approved):** Boost dapat menggunakan post melalui brand/account flow; partnership ads menjalankan iklan dengan creator partnership identity/authorization sesuai platform.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa organic and paid metrics harus dipisah?
   - **Current guide answer (not yet approved):** Paid spend mengubah reach, audience, dan delivery; mencampurnya dengan organic results mengaburkan evaluasi kontribusi organik.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa risiko permission expiry?
   - **Current guide answer (not yet approved):** Setelah permission berakhir, ads dapat berhenti atau ditolak dan penggunaan identity maupun content dapat melanggar agreement.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH11 — Influencer Measurement & Reporting
**Competency:** T14-C07

**Learning outcome under assessment:** Influencer measurement harus mencocokkan KPI dengan creator role: awareness (reach/unique, view quality), engagement (saves/shares/comments), content quality, traffic, lead/sales, and advocacy. Attribution dipengaruhi codes/links, platform windows, view-through, and overlap. Cost metrics seperti CPM/CPE/CPV perlu denominator dan format yang sesuai. ROI harus mempertimbangkan fee, production, rights, seeding, amplification, discounts, and margin.

**Required artifact / chapter-specific evidence checklist:** Buat influencer dashboard/memo untuk 10 creator: fee, organic/paid reach, views/retention, engagement quality, clicks, conversions, cost metrics, margin assumptions, and recommendations.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa total views tidak boleh diklaim seluruhnya organic?
   - **Current guide answer (not yet approved):** Total views dapat mencakup paid amplification; pisahkan sumber delivery sebelum menyatakan hasil sebagai organic performance.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko discount code sebagai attribution tunggal?
   - **Current guide answer (not yet approved):** Pembelian dapat terjadi tanpa code atau code dibagikan; code usage tidak menunjukkan keseluruhan causal impact.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus masuk ROI?
   - **Current guide answer (not yet approved):** Talent fee, production, seeding, usage rights, paid media, discounts, sales margin, and measurement costs.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T14-CH12 — Creator Partnerships Capstone
**Competency:** T14-C07

**Learning outcome under assessment:** Creator Partnerships Capstone menunjukkan proses lengkap dari discovery hingga measurement dan relationship management. Portfolio harus mencakup strategy, creator matrix, vetting evidence, brief, deal/rights, seeding/production, execution tracker, partnership ads, reporting, and post-campaign review. Semua creator examples dan results yang bukan campaign aktual diberi label SIMULATED; no invented endorsements.

**Required artifact / chapter-specific evidence checklist:** Bangun capstone pack: creator strategy, 20-name shortlist, vetting scorecard, budget, creative brief, contract/rights matrix, seeding/production tracker, partnership ads plan, performance dashboard, and executive recommendation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa bukti capstone siap portfolio?
   - **Current guide answer (not yet approved):** Artifacts from strategy through contracting, execution, tracking, reporting, and clear disclosure of synthetic assumptions.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bagaimana membuktikan creator selection berbasis data?
   - **Current guide answer (not yet approved):** Sertakan audience evidence, content sample, fit score, risk review, rate rationale, and alternatives.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang membedakan campaign report dari relationship review?
   - **Current guide answer (not yet approved):** Campaign report menilai output/outcome; relationship review menilai reliability, collaboration, rights, quality, and future fit.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH01 — Affiliate Marketing Ecosystem
**Competency:** T15-C01

**Learning outcome under assessment:** Affiliate marketing membayar partner berdasarkan action/conversion yang ditetapkan. Ecosystem dapat melibatkan advertiser, affiliate network/platform, publisher, creator affiliate, sub-network, tracking provider, and finance. Performance terms harus menjelaskan eligible action, attribution window, commission basis, validation, reversal, fraud, payout, and margin. Affiliate bukan sinonim influencer; creator dapat berperan sebagai affiliate bila commercial model menekankan tracked sale/commission.

**Required artifact / chapter-specific evidence checklist:** Buat affiliate ecosystem and program brief untuk brand: partner types, conversion definition, tracking flow, attribution window, commission model, fraud rules, and payout governance.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda affiliate dengan influencer marketing?
   - **Current guide answer (not yet approved):** Influencer sering dibayar untuk reach/content/engagement; affiliate dibayar menurut tracked action/sales sesuai contract.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa conversion definition harus jelas?
   - **Current guide answer (not yet approved):** Menentukan apakah order/lead eligible, kapan divalidasi, kapan komisi reversal, and kapan dibayar.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa risiko coupon attribution?
   - **Current guide answer (not yet approved):** Code leakage, last-click capture, cannibalization, and existing-customer credit dapat membayar komisi untuk sale non-incremental.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH02 — Affiliate Network, Publisher & Creator Affiliate
**Competency:** T15-C01

**Learning outcome under assessment:** Publisher and creator affiliate memiliki model traffic and content berbeda. Publisher dapat berupa content/review, comparison, coupon, cashback, loyalty, search arbitrage, and sub-network. Creator affiliate memakai short video/live/showcase, product link, or platform-native commission. Recruitment harus menilai audience fit, traffic source, content method, disclosure, conversion quality, and policy risk.

**Required artifact / chapter-specific evidence checklist:** Buat publisher classification and recruitment matrix: partner type, audience/source, allowed method, risk, traffic quality evidence, commission fit, and onboarding need.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa partner type penting?
   - **Current guide answer (not yet approved):** Setiap tipe partner membawa pola traffic, attribution, fraud, audience, dan commission yang berbeda sehingga kontrol serta KPI harus disesuaikan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko sub-network yang tidak transparan?
   - **Current guide answer (not yet approved):** Traffic source and downstream publishers sulit diaudit; fraud or policy violations may be hidden.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana membedakan creator affiliate dari paid creator?
   - **Current guide answer (not yet approved):** Creator affiliate earns commission per tracked action; paid creator receives fee for content/reach, or may combine both under separate terms.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH03 — Partner Discovery & Recruitment
**Competency:** T15-C02

**Learning outcome under assessment:** Partner discovery and recruitment harus memiliki ideal partner profile, category fit, reach/source quality, content standards, commercial expectations, and compliance checks. Outreach menjelaskan value proposition untuk partner, tracking, support, payment, asset, and exclusivity. Recruitment bukan mengejar jumlah partner; active/productive partner ratio dan incremental contribution lebih relevan.

**Required artifact / chapter-specific evidence checklist:** Buat recruitment pipeline untuk 30 partner prospects: source, type, audience, reach, fit, risks, contact, status, onboarding requirements, and activation target.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda partner recruited dan partner activated?
   - **Current guide answer (not yet approved):** Recruited berarti partner telah bergabung; activated berarti partner sudah mempromosikan offer atau menghasilkan eligible activity.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa first-conversion review penting?
   - **Current guide answer (not yet approved):** Review conversion awal membantu mendeteksi poor traffic, fraud, atau setup error sebelum partner diberi volume lebih besar.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang perlu ada di partner kit?
   - **Current guide answer (not yet approved):** Offer, product feed/assets, tracking links, commission terms, rules, disclosure, contact, and troubleshooting.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH04 — Commercial Model, Commission & Incentives
**Competency:** T15-C03

**Learning outcome under assessment:** Commission models meliputi CPS, CPA, CPL, hybrid, tiered, fixed fee, bonus, and performance incentives. Commission harus diuji terhadap gross margin, discount, returns, tax, fulfilment, marketplace fees, and existing customer behavior. Tiered incentives dapat meningkatkan volume tetapi mendorong low-quality conversions. Payout terms, validation, reversal, cap, and effective dates harus tercatat.

**Required artifact / chapter-specific evidence checklist:** Buat commission calculator untuk CPS/CPA/hybrid dengan sensitivity: AOV, margin, discount, refund, fee, commission, and allowable acquisition cost. Labeli assumptions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa komisi tidak sebaiknya berdasarkan gross sales tanpa caveat?
   - **Current guide answer (not yet approved):** Discount, cancellations, returns, taxes, and fees dapat mengurangi net value; gross basis dapat membuat program rugi.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa fungsi reversal/clawback?
   - **Current guide answer (not yet approved):** Menarik kembali atau membatalkan commission untuk invalid, cancelled, returned, or non-eligible conversions.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana tiered incentive dapat menimbulkan risiko?
   - **Current guide answer (not yet approved):** Partner dapat mengejar volume berkualitas rendah atau fraud ketika mendekati bonus threshold, sehingga perlu quality guardrails dan audit.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH05 — Affiliate Platform & Product Feed
**Competency:** T15-C04

**Learning outcome under assessment:** Affiliate platforms, product feeds, and tracking tools menghubungkan offer, SKU, deep links, attribution, publisher IDs, coupon codes, and conversion records. Product feeds membutuhkan title, price, availability, image, link, category, and update schedule. Deep links harus membuka product/app target dengan tracking intact. Platform access and available products differ by marketplace, country, seller, and program status; always verify current provider documentation.

**Required artifact / chapter-specific evidence checklist:** Buat product feed data dictionary, deep-link/tracking map, and QA cases for five SKUs. Verify price, availability, image, destination, IDs, publisher attribution, and update cadence.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa risiko stale product feed?
   - **Current guide answer (not yet approved):** Feed yang usang dapat menampilkan harga salah atau produk tidak tersedia, merusak conversion, customer trust, dan partner relationship.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa fungsi sub-ID?
   - **Current guide answer (not yet approved):** Sub-ID memisahkan publisher placement, campaign, atau creator source agar attribution, reporting, dan commission reconciliation lebih rinci.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa deep link perlu test di app dan web?
   - **Current guide answer (not yet approved):** Redirect dan tracking dapat gagal pada kondisi device, app installation, atau browser berbeda; uji semua jalur sebelum campaign live.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH06 — Tracking Links, Attribution & Conversion
**Competency:** T15-C04

**Learning outcome under assessment:** Tracking links and attribution menentukan bagaimana click dan conversions dipasangkan dengan publisher. Cookie loss, cross-device, browser restrictions, app/web, redirects, coupon leakage, last-click overwrites, and attribution windows dapat mengubah credit. Affiliate analyst harus memahami click ID, sub-ID, conversion IDs, dedupe, view/click rules, validation, and source of truth. Jangan menganggap attribution credit berarti incremental sale.

**Required artifact / chapter-specific evidence checklist:** Buat affiliate attribution flow diagram dan reconciliation workbook: click IDs, sub-IDs, conversion IDs, window, coupon rules, dedupe, cross-device caveats, and sales source.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda attributed sale dan incremental sale?
   - **Current guide answer (not yet approved):** Attributed sale mendapat credit menurut tracking rule; incremental sale adalah tambahan yang tidak akan terjadi tanpa treatment.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang terjadi bila conversion ID tidak unik?
   - **Current guide answer (not yet approved):** Order dapat tercatat berulang atau gagal dideduplikasi, sehingga conversion, commission, dan payout menjadi tidak akurat.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa cookie loss harus dicatat?
   - **Current guide answer (not yet approved):** Cookie loss dapat menurunkan match dan attribution, sehingga performance partner yang teramati menjadi tidak lengkap.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH07 — Affiliate Campaign Setup
**Competency:** T15-C04

**Learning outcome under assessment:** Affiliate campaign setup menggabungkan offer, partner groups, commission, creative, feed, landing, tracking, policy, and approval. Campaign structure dapat dipisah menurut SKU/category, geography, partner type, objective, or incentive. Launch checklist harus memastikan product ready, link/UTM/sub-ID valid, discount eligible, commission correct, stock available, and reporting/payout configured.

**Required artifact / chapter-specific evidence checklist:** Buat affiliate launch pack untuk 10 publishers: campaign brief, offer matrix, commission, assets, links, product list, eligibility, disclosure, QA, and launch approval.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa coupon eligibility harus jelas?
   - **Current guide answer (not yet approved):** Partner dapat menjanjikan discount yang tidak bisa digunakan sehingga returns/cancellations and trust issues naik.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang harus dipantau saat launch?
   - **Current guide answer (not yet approved):** Click, conversion, AOV, stock, orders, cancellations, invalid orders, link errors, and partner policy compliance.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa pentingnya launch approval?
   - **Current guide answer (not yet approved):** Memastikan product, legal, pricing, finance, tracking, and partner terms disetujui sebelum campaign aktif.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH08 — Creator Affiliate & Social Commerce
**Competency:** T15-C01

**Learning outcome under assessment:** Creator affiliate/social commerce menggabungkan content, live, short video, product showcase, shopping links, and commission. Creator performance harus dinilai melalui content quality, product demonstration, audience relevance, click/shop conversion, returns, and commission. Platform-native programs memiliki product eligibility, commission rates, content policy, settlement, and attribution rules yang dapat berubah; jangan menjanjikan akses jika seller/creator tidak eligible.

**Required artifact / chapter-specific evidence checklist:** Buat social commerce creator program untuk lima SKUs: creator tiers, commission, product feed, live/video brief, claim restrictions, tracking, order quality, returns, and payout conditions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa GMV tidak sama dengan net sales/profit?
   - **Current guide answer (not yet approved):** GMV dapat mencakup cancellations/returns/discounts and does not subtract product, fulfillment, and commission costs.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko creator claims tidak akurat?
   - **Current guide answer (not yet approved):** Misleading product promises can cause complaints, returns, policy violations, and brand trust harm.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa platform program terms harus dicek ulang?
   - **Current guide answer (not yet approved):** Eligibility, campaign type, commission, attribution, and settlement rules can change by account/category/market.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH09 — Fraud, Traffic Quality & Compliance
**Competency:** T15-C05

**Learning outcome under assessment:** Fraud and traffic quality controls melindungi advertiser dari non-human clicks, cookie stuffing, click injection, fake orders, coupon abuse, incentivized traffic violations, and brand bidding violations. Tidak semua spike adalah fraud; detection harus menggunakan pattern, source, timestamps, device, conversion validation, and partner communication. Contract perlu memberi hak audit, suspend, reversal, and clawback.

**Required artifact / chapter-specific evidence checklist:** Buat affiliate fraud playbook: risk taxonomy, monitoring alerts, investigation checklist, evidence log, partner communication, reversal/clawback rules, and escalation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apakah click spike otomatis fraud?
   - **Current guide answer (not yet approved):** Tidak; promotions/events can cause spikes. Use multiple signals and investigation before final decision.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa itu cookie stuffing?
   - **Current guide answer (not yet approved):** Praktik menyisipkan tracking cookie tanpa valid user click/consent untuk mengambil attribution credit.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa fraud policy harus tertulis di contract?
   - **Current guide answer (not yet approved):** Klausul tertulis memberi dasar untuk audit, hold, reversal, suspension, clawback, dan dispute resolution secara konsisten.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH10 — Commission Reconciliation & Reporting
**Competency:** T15-C03, T15-C05

**Learning outcome under assessment:** Commission reconciliation menghitung eligible sales, cancellations, returns, duplicate orders, attribution rules, commission tiers, tax, payout currency, and invoice. Affiliate platform report tidak selalu sama dengan finance/marketplace due to delay or reversal windows. Reconciliation harus memiliki period, order IDs, partner IDs, rate table version, and approval trace.

**Required artifact / chapter-specific evidence checklist:** Buat monthly commission reconciliation workbook untuk 30 synthetic orders. Hitung eligible, cancelled, returned, duplicate, net commission, tax, payout, variance, and approval.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa network conversions belum final payout?
   - **Current guide answer (not yet approved):** Conversion masih dapat pending, cancelled, returned, invalid, atau di luar eligibility program sebelum komisi disahkan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa pentingnya rate table version?
   - **Current guide answer (not yet approved):** Commission dapat berubah menurut tanggal, partner, atau produk; rate table yang salah menimbulkan kesalahan pembayaran.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus dilakukan saat partner dispute?
   - **Current guide answer (not yet approved):** Sediakan order-level evidence, aturan program, source reconciliation, dan resolution timeline yang transparan untuk menyelesaikan dispute.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH11 — Affiliate Optimization & Partner Growth
**Competency:** T15-C02, T15-C06

**Learning outcome under assessment:** Affiliate optimization and partner growth meningkatkan quality and contribution, bukan sekadar jumlah publishers. Segment partner by type, quality, value, activity, new-to-brand, category, order value, returns, commission, incrementality, and compliance. Growth levers include exclusive offers, product feed, content support, tiering, creator programs, and improved landing/stock. Partner activation and retention need relationship management and fair terms.

**Required artifact / chapter-specific evidence checklist:** Buat partner growth scorecard dan 90-day action plan: activation, active rate, net sales, margin, new-to-brand, returns, fraud, commission, and partner tier.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa jumlah publisher bukan KPI utama?
   - **Current guide answer (not yet approved):** Program size can rise while active quality, incremental profit, and compliance fall.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda active partner rate dan recruited count?
   - **Current guide answer (not yet approved):** Active rate measures partners generating eligible activity; recruited count only measures enrollment.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa concentration risk perlu dipantau?
   - **Current guide answer (not yet approved):** Revenue/attribution from few partners creates dependency and vulnerability to policy or traffic change.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T15-CH12 — Affiliate Capstone
**Competency:** T15-C06

**Learning outcome under assessment:** Affiliate Capstone menyatukan commercial model, recruitment, platform/feed, tracking, campaign, quality control, reconciliation, and partner growth. Pekerjaan harus memperlihatkan unit economics dan payout rules, bukan hanya link creation. Data synthetic harus diberi label dan platform access/terms diverifikasi per account. Portfolio perlu menunjukkan bagaimana program menjaga advertiser margin dan fair partner measurement.

**Required artifact / chapter-specific evidence checklist:** Bangun affiliate capstone pack: program brief, ecosystem map, partner shortlist, commission model, feed/link QA, campaign plan, fraud playbook, reconciliation workbook, partner dashboard, and executive recommendation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa bukti program affiliate siap diluncurkan?
   - **Current guide answer (not yet approved):** Clear economics, conversion rules, contract, feed, tracking QA, partner policy, fraud control, and finance reconciliation.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bagaimana membuktikan affiliate menguntungkan?
   - **Current guide answer (not yet approved):** Gunakan incremental contribution after discount, fees, returns, and commission; do not rely on gross sales/attributed ROAS only.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang perlu dicantumkan dalam portfolio?
   - **Current guide answer (not yet approved):** Artifacts, formulas, sources, assumptions, simulated labels, risk controls, and learning—not invented sales results.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH01 — Community Strategy & Purpose
**Competency:** T16-C01

**Learning outcome under assessment:** Community strategy menetapkan mengapa komunitas perlu ada, siapa yang dilayani, nilai yang diberikan, rules, participation model, and expected business/customer impact. Komunitas dapat brand-owned, platform-based, customer-led, professional, or interest-based. Tujuan bukan hanya menambah anggota; community health mencakup trust, participation, safety, retention, and mutual value. Tidak semua brand membutuhkan komunitas milik sendiri.

**Required artifact / chapter-specific evidence checklist:** Buat community charter: purpose, member promise, target segments, platform rationale, entry rules, participation principles, governance, and measurable success criteria.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda audience dan community?
   - **Current guide answer (not yet approved):** Audience menerima konten; community memiliki interaksi, norma, hubungan antar anggota, dan partisipasi berkelanjutan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Kapan brand tidak perlu membuat community sendiri?
   - **Current guide answer (not yet approved):** Saat audience sudah terlayani di ruang lain, value proposition komunitas tidak jelas, atau resource moderation tidak tersedia.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa member count bukan ukuran health?
   - **Current guide answer (not yet approved):** Anggota bisa pasif, tidak relevan, atau tidak aman; participation, trust, retention, and value lebih penting.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH02 — Audience Community Mapping
**Competency:** T16-C02

**Learning outcome under assessment:** Community mapping mengidentifikasi ruang audience berkumpul, norms, influential members, moderators, critics, advocates, and unmet needs. Mapping perlu membedakan platform audience dari community participants dan memperhatikan public/private spaces. Listening harus menghormati privacy, context, and platform terms; jangan mengumpulkan data pribadi tanpa kebutuhan/izin.

**Required artifact / chapter-specific evidence checklist:** Buat audience community map untuk satu kategori dengan 10 public spaces/accounts, member roles, norms, high-value conversations, risk, and ethical engagement approach.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa brand tidak boleh langsung masuk dengan promosi?
   - **Current guide answer (not yet approved):** Community memiliki norma dan trust sendiri; promosi tanpa permission atau value dapat dianggap spam dan merusak hubungan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda lurker dan contributor?
   - **Current guide answer (not yet approved):** Lurker mengamati tanpa aktif posting; contributor memberi pertanyaan, jawaban, content, or participation.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa etika social listening?
   - **Current guide answer (not yet approved):** Ikuti platform rules, minimize personal data, respect private spaces, and report aggregate/context rather than exposing individuals.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH03 — Community Platform & Audience Segmentation
**Competency:** T16-C02

**Learning outcome under assessment:** Community platform selection mempertimbangkan audience presence, conversation type, moderation capability, privacy, discoverability, searchability, features, member expectations, and operational burden. Segmentasi member dapat berdasarkan stage, expertise, interest, contribution, and support needs. Jangan memilih WhatsApp/Discord/Telegram hanya karena populer; platform harus sesuai purpose and safety requirements.

**Required artifact / chapter-specific evidence checklist:** Buat platform decision matrix untuk tiga opsi komunitas: objective, user behavior, moderation tools, privacy, analytics, integrations, cost, and risk. Sertakan member segmentation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa platform harus mengikuti use case?
   - **Current guide answer (not yet approved):** Setiap platform memiliki conversation format, search, roles, privacy, and moderation constraints berbeda.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa risiko community group tanpa moderation capacity?
   - **Current guide answer (not yet approved):** Spam, misinformation, harassment, privacy issues, and customer harm can grow faster than support resources.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang perlu dikumpulkan saat onboarding?
   - **Current guide answer (not yet approved):** Kumpulkan profile dan preference minimum yang diperlukan untuk tujuan jelas; hindari data pribadi yang tidak relevan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH04 — Social Listening & Conversation Intelligence
**Competency:** T16-C03

**Learning outcome under assessment:** Social listening and conversation intelligence mengubah percakapan menjadi insight melalui query design, source coverage, Boolean logic, taxonomy, sentiment/context coding, topic clustering, trend detection, and reporting. Sentiment automation tidak memahami seluruh ironi/slang/bahasa campuran; analyst harus melakukan manual validation. Volume mention bukan otomatis market opinion atau representative survey.

**Required artifact / chapter-specific evidence checklist:** Buat listening query set dan coding book untuk brand/kategori. Analisis 100 synthetic/public-safe mentions: topic, sentiment, intent, audience tension, false positives, and recommended actions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa automated sentiment perlu human QA?
   - **Current guide answer (not yet approved):** Slang, sarcasm, context, dan mixed language dapat salah diklasifikasikan oleh model, sehingga human review tetap diperlukan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda mention volume dan sentiment?
   - **Current guide answer (not yet approved):** Mention volume menghitung percakapan; sentiment menafsirkan tone dan context, sehingga memerlukan validasi serta sampling.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa query exclusions penting?
   - **Current guide answer (not yet approved):** Exclusions mengurangi irrelevant mentions, homonyms, spam, dan false positives agar social listening tidak menghasilkan insight keliru.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH05 — Community Management & Engagement
**Competency:** T16-C04

**Learning outcome under assessment:** Community management menjalankan interaksi harian dan membangun participation. Community manager menjawab pertanyaan, memfasilitasi peer support, welcome newcomers, maintain tone, detect friction, and protect trust. Response quality harus akurat, human, timely, and consistent; jangan menjanjikan hal yang tidak dapat dipenuhi. SLA dibedakan berdasarkan question, complaint, safety, and crisis severity.

**Required artifact / chapter-specific evidence checklist:** Buat response playbook 20 cases: question, praise, complaint, misinformation, product issue, crisis signal, safety concern, and spam. Include response, owner, SLA, and escalation.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Apa beda community management dan customer care?
   - **Current guide answer (not yet approved):** Community management mengelola relationship/participation; customer care menyelesaikan service cases dengan systems/SLA—keduanya perlu handoff.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Mengapa response template tidak boleh kaku?
   - **Current guide answer (not yet approved):** Context, emotion, and issue severity require human adaptation; template supports consistency, not robotic replies.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Kapan harus escalate product safety?
   - **Current guide answer (not yet approved):** Saat ada injury, adverse reaction, contamination, or serious risk; follow approved safety/legal protocol immediately.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH06 — Content Programming & Community Activation
**Competency:** T16-C04

**Learning outcome under assessment:** Content programming membuat komunitas memiliki alasan untuk kembali dan berkontribusi. Program dapat berupa AMA, challenge, peer learning, feedback sessions, events, member stories, product clinics, and co-creation. Editorial plan harus mengikuti community questions and rhythms, bukan hanya brand broadcast. UGC membutuhkan permission, context, credit, rights, moderation, and safety review.

**Required artifact / chapter-specific evidence checklist:** Buat 4-week community program calendar dengan 2 recurring formats, one event/AMA, UGC process, moderation roles, participation metric, and safety plan.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa challenge dengan hadiah saja dapat gagal?
   - **Current guide answer (not yet approved):** It can attract incentive-only behavior without meaningful member value or durable participation.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang perlu sebelum repost UGC?
   - **Current guide answer (not yet approved):** Pastikan permission, attribution atau credit, usage scope, editing consent, dan compliance review sebelum UGC dipublikasikan ulang.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Bagaimana mengukur programming quality?
   - **Current guide answer (not yet approved):** Repeat contributors, meaningful replies, completion, member value, retention, and issue reduction—not raw posts alone.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH07 — Moderation, Guidelines & Brand Safety
**Competency:** T16-C05

**Learning outcome under assessment:** Moderation dan guidelines menjaga keamanan, trust, and brand suitability. Policy perlu mendefinisikan spam, harassment, hate, misinformation, personal data, threats, illegal activity, and product claims. Moderation ladder menentukan hide, remove, warn, mute, ban, or escalation; keputusan harus konsisten, documented, and appealable bila sesuai. Brand safety bukan berarti menghapus kritik yang sah.

**Required artifact / chapter-specific evidence checklist:** Buat community rules dan moderation matrix dengan 10 scenarios, severity, action, response template, evidence retention, appeal, and escalation owner.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa kritik sah tidak boleh dihapus otomatis?
   - **Current guide answer (not yet approved):** Feedback yang sah memberi evidence dan trust; moderation harus menargetkan harmful behavior, bukan negative sentiment.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa yang dilakukan pada doxxing/personal data exposure?
   - **Current guide answer (not yet approved):** Hide atau remove segera, simpan evidence minimum, eskalasi ke security/legal, dan lindungi anggota yang terdampak.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa moderation harus memiliki appeal/escalation path?
   - **Current guide answer (not yet approved):** Appeal path meningkatkan konsistensi dan fairness serta memungkinkan review atas keputusan moderation yang berdampak pada anggota.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH08 — Customer Care & Response Management
**Competency:** T16-C04, T16-C05

**Learning outcome under assessment:** Customer care via community/social harus menghubungkan public response dengan private case handling. Community manager perlu memahami privacy, verification, ticketing, SLA, escalation, and crisis boundaries. Jangan meminta nomor order/PII di public comments; arahkan ke secure channel. Public response tetap perlu menunjukkan ownership tanpa membocorkan data customer.

**Required artifact / chapter-specific evidence checklist:** Buat customer care handoff flow dan response templates untuk order issue, refund, product defect, privacy complaint, and safety incident. Sertakan PII rules and SLA.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa case perlu dipindah ke secure channel?
   - **Current guide answer (not yet approved):** Secure channel melindungi PII dan order details, serta menjaga verification dan records sesuai service process.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa bedanya acknowledge dengan resolve?
   - **Current guide answer (not yet approved):** Acknowledge berarti mengakui issue telah diterima; resolve berarti masalah ditangani dan outcome dikonfirmasi kepada pihak terkait.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus dicatat di ticket?
   - **Current guide answer (not yet approved):** Case ID, category, owner, SLA, status, evidence, action, and closure—minimum necessary personal data.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH09 — Advocacy, UGC & Brand Relationship
**Competency:** T16-C06

**Learning outcome under assessment:** Advocacy dan UGC membangun hubungan sehingga member secara sukarela membantu brand melalui recommendation, review, referrals, content, feedback, and peer support. Advocacy program harus memberi recognition/value tanpa membeli opini atau memaksa positive reviews. Permission, disclosure, incentives, content rights, and authenticity perlu diatur. Advocate bukan sekadar member dengan follower tinggi; trust dan helpful contribution lebih penting.

**Required artifact / chapter-specific evidence checklist:** Buat advocacy program blueprint: member tiers/behaviors, recognition system, UGC permission, referral flow, review policy, disclosure, and health metrics.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa reward untuk positive review berisiko?
   - **Current guide answer (not yet approved):** Mengontrol sentiment dan dapat melanggar review/platform policies; reward should not require positive rating.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa beda advocate dan influencer?
   - **Current guide answer (not yet approved):** Advocate punya relationship/peer trust through genuine participation; influencer is selected for audience/content reach, though overlap exists.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang perlu sebelum memakai UGC brand-wide?
   - **Current guide answer (not yet approved):** Konfirmasi permission, credit, channel, period, editing rules, disclosure, dan rights untuk setiap penggunaan yang direncanakan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH10 — Crisis Monitoring & Escalation
**Competency:** T16-C05

**Learning outcome under assessment:** Crisis monitoring mengamati early signals, complaint velocity, sentiment/context, safety reports, influential actors, and potential escalation. Crisis playbook harus mendefinisikan trigger, severity, spokesperson, legal/PR/customer care owners, holding statement, approval, evidence preservation, and updates. Community manager tidak boleh berspekulasi atau menghapus kritik substansial; ia harus menjaga factuality, empathy, and escalation.

**Required artifact / chapter-specific evidence checklist:** Buat crisis playbook dengan 5 scenarios, severity triggers, RACI, holding statement, approval chain, response SLA, evidence log, and after-action review.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa holding statement harus hati-hati?
   - **Current guide answer (not yet approved):** Fakta belum lengkap; statement harus acknowledge, explain next step, and avoid unsupported claims or blame.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Kapan issue berubah menjadi crisis?
   - **Current guide answer (not yet approved):** Saat scope, safety/legal risk, rapid spread, business impact, or stakeholder attention melewati escalation threshold.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang perlu dilakukan setelah crisis?
   - **Current guide answer (not yet approved):** Audit timeline, decisions, response, harm, root cause, and prevention; do not simply delete posts.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH11 — Community Measurement & Reporting
**Competency:** T16-C07

**Learning outcome under assessment:** Community measurement mengukur health dan value: active members, repeat contributors, meaningful conversation, response SLA, resolution, sentiment/context, retention, safety incidents, UGC quality, referral, and customer outcomes. Metrics perlu denominator, period, segment, and sampling method. Follower/member count tidak menunjukkan value tanpa participation. Report harus memadukan quantitative trend dan qualitative examples.

**Required artifact / chapter-specific evidence checklist:** Buat community health dashboard dan monthly report: active members, contributor rate, repeat, SLA, resolution, moderation, sentiment themes, UGC permissions, and next actions.

**Assessor must verify:**
- The artifact contains each required element named in the practice prompt, with correct definitions, calculations and scope.
- The learner explains the decision logic and connects the evidence to the role-specific outcome.
- Assumptions, synthetic data, source provenance, limitations and platform/version dependencies are explicitly labelled.
- The artifact is reproducible, internally consistent and usable by another practitioner without undocumented context.

**Chapter Q&A answer-key review:**
1. **Question:** Mengapa member count tidak cukup?
   - **Current guide answer (not yet approved):** Member growth dapat berasal dari campaign atau giveaway; ukur active, retained, helpful, dan recurring participation untuk menilai kualitas.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Apa definisi meaningful contribution?
   - **Current guide answer (not yet approved):** Action yang memberi value pada komunitas seperti jawaban, feedback, support, content, or constructive discussion.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Mengapa sentiment score harus divalidasi?
   - **Current guide answer (not yet approved):** Language, sarcasm, sample bias, dan platform coverage dapat menyebabkan misclassification; audit sample secara manual sebelum mengambil keputusan.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

---

### DPA-T16-CH12 — Community Capstone
**Competency:** T16-C07

**Learning outcome under assessment:** Community Capstone menyatukan purpose, audience mapping, platform selection, listening, engagement, programming, moderation, customer care, advocacy, crisis, and measurement. Deliverable harus operasional: charter, governance, calendar, response bank, escalation, and dashboard. Community bukan sekadar group chat; keberhasilannya diukur dari value dan safety bagi anggota serta dampaknya pada relationship/customer experience.

**Required artifact / chapter-specific evidence checklist:** Community operating pack containing charter, audience map, platform decision, onboarding, four-week calendar, moderation matrix, care handoff, advocacy program, crisis playbook, dashboard and after-action plan.

**Assessor must verify:**
- Purpose, member value, audience segments, platform choice and governance are coherent and justified.
- Moderation, customer-care handoff, escalation, crisis response, privacy and UGC permissions are operationally specified.
- Metrics distinguish member count from meaningful participation, retention, resolution, safety and business/service value.
- Assumptions, synthetic data, source provenance, limitations and privacy controls are explicit.

**Chapter Q&A answer-key review:**
1. **Question:** Apa yang membedakan community plan dari social content calendar?
   - **Current guide answer (not yet approved):** Community plan mengatur member relationships, participation, norms, service, safety, and governance—not only publishing.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
2. **Question:** Bagaimana membuktikan community value?
   - **Current guide answer (not yet approved):** Show member outcomes, repeat participation, resolution, feedback, advocacy, retention, and measured business/service effects.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.
3. **Question:** Apa yang harus dihindari dalam capstone?
   - **Current guide answer (not yet approved):** Fake member counts, fabricated sentiment, forced testimonials, unsafe data collection, and unapproved UGC use.
   - **Review status:** OPEN — subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers against authoritative sources.

**Chapter decision:** score five dimensions 0–3; convert to 100; proposed pass ≥80/100 and no critical failure. Record assessor, date, version, evidence link, score by dimension, feedback and resubmission status.

## Validation protocol before release

1. Assign a qualified reviewer for each role family; record reviewer qualification and date.
2. Verify each learning outcome is observable and aligned to the chapter ID and competency.
3. Validate technical steps, formulas, platform workflows, policy, privacy and current product terminology against official documentation.
4. Review every answer key. Accept valid alternate answers; reject answers that are incomplete, overgeneralized or technically wrong. Add citations or source URLs to the review record.
5. Pilot the rubric on at least two sample submissions per chapter (one borderline, one strong) before claiming inter-rater consistency.
6. Reconcile assessor disagreements; revise ambiguous criteria and version the rubric.
7. Keep status OPEN until all above steps have evidence. A generated rubric is not a reviewed rubric.

## Known limitations

- 169 chapter-specific rubric records drafted from chapter objectives and practice prompts; SME calibration remains open.
- 507 static Q&A pairs reproduced for answer-key review; correctness and acceptable alternatives remain unapproved.
- Chapters without parsed practice/objective/Q&A fields: 0. Source arrays for 149 added guides were reconciled to their chapter IDs; 19 pre-existing guides were retained.
- This document does not create a scored quiz engine in the website.
- This document does not certify SME approval, technical correctness, or learning effectiveness.
- Rubric scoring criteria are a proposed internal standard and require pilot calibration.
