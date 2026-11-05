# PR #5 — 169 Chapter Evidence Register

**Audit date:** 4 November 2026  
**Branch:** `audit/align-all-16-track-learning-modules`  
**Status:** 169 chapter inventory reconciled to 169 guide IDs. Guide content extracted below. Full agency/source/resource/rubric validation remains partial.

## Method and interpretation
- Each chapter has an immutable ID in HTML and its corresponding guide object. `chapter-guide-map.js` resolves guides by ID.
- Competency IDs are the first-pass role spine mapping in the table. They are not yet independently reviewed against every subchapter.
- The concept, example, steps, practice and Q&A below are extracted from the current guide object. This is not a claim that each answer has passed subject-matter review.
- Resource links found in chapter HTML are listed if present; where none are present, role-level resources still need mapping. External links are not considered validated merely because they exist.
- Agency evidence is role-level, not chapter-level. The five-agency status is included for each chapter, but chapter-specific evidence links still need mapping.
- Assessment is currently static comprehension Q&A. The code has no verified scored quiz engine. Formal chapter-specific rubric and passing criteria remain a blocker.

## 1. Full-Stack Digital Marketing & Performance (`fullstack`)

### DPA-T01-CH01 — Business Strategy & Commercial Understanding

**Competency ID(s):** T01-C01

**Agency evidence (role-level):** A/D: Performance Marketing and integrated planning role evidence; title and JD scope vary by market | A: Digital Manager cross-channel performance media | D/B: Performance Manager, integrated investment and performance roles | B: integrated digital/media planning and performance role evidence | D: SEA/Performance Marketing roles in career index

**Learning objective / concept:** Digital performance dimulai dari business problem, bukan langsung dari channel. Pahami model bisnis, revenue, variable cost, margin, customer acquisition, repeat purchase, dan payback. Pisahkan growth, efficiency, serta profitability. CAC, LTV, AOV, contribution margin, dan retention perlu definisi dan periode yang konsisten. Marketing dapat memperbesar demand, tetapi tidak otomatis memperbaiki distribusi, stok, harga, kualitas produk, atau kapasitas sales.

**Simulated example:** KASUS SIMULASI — brand D2C menjual produk Rp200.000. Biaya produk, fulfilment, payment fee, dan subsidi promo berjumlah Rp120.000, sehingga contribution sebelum biaya akuisisi Rp80.000 per order. Bila paid CAC Rp65.000, kontribusi tersisa Rp15.000 sebelum fixed overhead. Campaign yang menghasilkan banyak order dengan CAC Rp90.000 dapat menaikkan revenue tetapi membuat kontribusi negatif.

**Technical depth / workflow:**
- Petakan model bisnis. Tentukan buyer/user, value proposition, revenue model, channel penjualan, sumber margin, dan proses fulfilment.
- Bangun revenue bridge. Uraikan revenue menjadi traffic/leads × conversion rate × order value, atau volume × net price. Tulis driver yang memengaruhi tiap komponen.
- Hitung contribution economics. Pisahkan fixed dan variable cost. Hitung contribution margin, allowable CAC/CPA, payback, dan titik impas sesuai definisi bisnis.
- Nilai kualitas pertumbuhan. Bandingkan new/returning customer, repeat purchase, refund, discount dependency, stock availability, dan cohort retention.
- Turunkan marketing implication. Identifikasi bottleneck yang dapat diintervensi marketing, batas operasional, KPI, dan bukti yang masih perlu dikumpulkan.

**Practice / deliverable:** Buat business analysis satu halaman: model bisnis, target customer, product/price, revenue stream, cost structure, contribution margin, AOV, CAC, asumsi repeat/LTV, sales funnel, tiga risiko operasional, dan tiga marketing implications. Gunakan angka SIMULATED, tulis rumus dan sumber/asumsi.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa revenue naik belum tentu berarti marketing membaik?
   **Expected answer in guide:** Revenue dapat naik karena diskon tinggi, CAC mahal, product mix bermargin rendah, refund, atau repeat quality yang buruk. Periksa contribution setelah variable cost dan marketing.
2. **Q:** Apa perbedaan CAC dan CPA?
   **Expected answer in guide:** CPA adalah biaya per action yang didefinisikan; CAC adalah biaya memperoleh customer baru sesuai cakupan biaya/periode yang disepakati. CPA purchase tidak otomatis sama dengan fully-loaded CAC.
3. **Q:** Kapan masalah bisnis tidak tepat dijawab dengan menambah media spend?
   **Expected answer in guide:** Ketika bottleneck utamanya stock-out, distribusi, checkout failure, sales response, harga, margin, atau product-market fit.

**Glossary:** Revenue: Pendapatan dalam periode tertentu sesuai basis gross/net yang ditentukan.; Contribution margin: Revenue dikurangi biaya variabel yang relevan untuk keputusan bisnis dan CAC.; CAC: Biaya memperoleh satu customer baru sesuai scope biaya dan periode yang disepakati.; LTV / CLV: Perkiraan nilai ekonomi customer sepanjang hubungan dengan asumsi margin, horizon, dan churn.; Payback period: Waktu yang dibutuhkan agar kontribusi customer menutup biaya akuisisi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T01-CH02 — Consumer Research, Brand & Positioning

**Competency ID(s):** T01-C02

**Agency evidence (role-level):** A/D: Performance Marketing and integrated planning role evidence; title and JD scope vary by market | A: Digital Manager cross-channel performance media | D/B: Performance Manager, integrated investment and performance roles | B: integrated digital/media planning and performance role evidence | D: SEA/Performance Marketing roles in career index

**Learning objective / concept:** Consumer research mengubah asumsi audience menjadi pemahaman untuk memilih proposition, pesan, dan channel. Bedakan data primer (interview, survey, observation, usability test) dari data sekunder (CRM, sales, search, social listening, review, industry report). Segmentasi yang berguna dibangun dari kebutuhan, perilaku, konteks, motivasi, dan decision criteria, bukan demografi saja. Positioning menentukan ruang pembeda brand; value proposition menyatakan nilai; proof point memberi alasan untuk percaya.

**Simulated example:** KASUS SIMULASI — dua kelompok usia 25–34 membeli skincare. Kelompok A ingin rutinitas cepat karena waktu terbatas; kelompok B mencari kepastian keamanan karena kulit sensitif. Demografi sama, tetapi tension, objection, proof, dan pesan berbeda. Persona 'perempuan 25–34, urban' belum cukup untuk memandu campaign.

**Technical depth / workflow:**
- Mulai dari research question. Tulis keputusan yang ingin diambil—pesan, prioritas segmen, bundle, atau barrier conversion—sebelum memilih metode.
- Audit bukti. Kumpulkan sales/CRM, search query, review, customer-service questions, social listening, competitor offer, dan riset primer bila perlu.
- Bangun segment hypotheses. Kelompokkan audience berdasarkan need, behavior, trigger, barrier, occasion, spending logic, dan decision criteria.
- Rumuskan positioning/proposition. Nyatakan category frame, target, point of difference, benefit, reason to believe, dan batas klaim yang dapat dibuktikan.
- Catat confidence dan gap. Pisahkan observed fact, interpretation, dan assumption; tentukan evidence tambahan yang dapat mengonfirmasi atau membantah insight.

**Practice / deliverable:** Buat consumer snapshot dua segmen: job-to-be-done, need, tension, trigger, barrier, alternatives, purchase criteria, media behavior, proposition, proof, dan evidence. Tambahkan positioning statement serta tiga asumsi yang perlu diuji.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa demografi saja belum cukup?
   **Expected answer in guide:** Demografi mendeskripsikan siapa, tetapi belum menjelaskan mengapa seseorang membeli, hambatannya, atau bukti yang diperlukan. Need dan behavior lebih langsung mengarahkan proposition serta channel.
2. **Q:** Apa beda positioning dan value proposition?
   **Expected answer in guide:** Positioning adalah ruang pembeda yang ingin ditempati brand relatif terhadap alternatif; value proposition adalah nilai spesifik yang dijanjikan kepada target dan harus didukung proof.
3. **Q:** Bagaimana membedakan insight dari opini?
   **Expected answer in guide:** Insight menjelaskan perilaku/tension yang relevan, punya evidence yang dapat dilacak, dan mengubah keputusan. Opini adalah generalisasi tanpa evidence atau implikasi teruji.

**Glossary:** Job-to-be-done: Kebutuhan/tugas yang ingin diselesaikan seseorang dalam konteks tertentu.; Consumer tension: Ketegangan antara kebutuhan, hambatan, keinginan, atau risiko yang memengaruhi perilaku.; Positioning: Ruang pembeda brand dalam benak target relatif terhadap pilihan lain.; Value proposition: Pernyataan nilai/manfaat yang dijanjikan kepada audience tertentu.; Reason to believe: Bukti atau alasan yang membuat janji brand masuk akal dan dipercaya.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T01-CH03 — Funnel, Customer Journey & KPI Architecture

**Competency ID(s):** T01-C02

**Agency evidence (role-level):** A/D: Performance Marketing and integrated planning role evidence; title and JD scope vary by market | A: Digital Manager cross-channel performance media | D/B: Performance Manager, integrated investment and performance roles | B: integrated digital/media planning and performance role evidence | D: SEA/Performance Marketing roles in career index

**Learning objective / concept:** Funnel dan customer journey adalah alat diagnosis, bukan diagram linear yang selalu sama untuk semua kategori. Definisikan outcome bisnis terlebih dahulu, lalu petakan tindakan, pertanyaan, hambatan, dan touchpoint. KPI tree menghubungkan business outcome dengan driver dan diagnostic metric. Setiap metric perlu definisi, formula, unit, sumber data, owner, window, dan guardrail. Hindari vanity metrics dan jangan membandingkan metrik dengan denominator berbeda.

**Simulated example:** KASUS SIMULASI — ecommerce mencatat 100.000 session, 4.000 add-to-cart, 2.000 begin-checkout, dan 800 purchase. Conversion session ke add-to-cart 4%, add-to-cart ke checkout 50%, checkout ke purchase 40%. Diagnosis checkout dapat mencakup shipping fee, trust, stock, payment, atau form friction. Perlu data device, source, dan customer segment sebelum menyimpulkan penyebab.

**Technical depth / workflow:**
- Tetapkan business outcome. Contoh net sales, contribution margin, qualified pipeline, repeat purchase, atau retention beserta target/periode.
- Petakan journey dari tindakan. Definisikan discovery, consideration, intent, conversion, onboarding, dan retention sesuai perilaku kategori.
- Identifikasi leakage. Hitung conversion rate dengan denominator tepat; segmentasikan berdasarkan channel, device, audience, product, dan new/returning.
- Bangun KPI tree. Hubungkan outcome ke driver seperti order volume, AOV, conversion rate, qualified lead rate, margin, repeat rate, dan cost.
- Buat metric dictionary. Tulis nama, definisi, formula, unit, source, reporting window, attribution rule, owner, target, dan limitation.

**Practice / deliverable:** Buat journey map dan KPI tree minimal lima stage dengan action, customer question, friction, touchpoint, event, owner, primary KPI, diagnostic metric, dan guardrail. Hitung conversion dari data SIMULATED dan jelaskan prioritas serta evidence yang kurang.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa KPI tree harus dimulai dari outcome bisnis?
   **Expected answer in guide:** Agar channel metric tidak menjadi tujuan sendiri. Aktivitas harus menjelaskan kontribusi terhadap sales, margin, qualified pipeline, atau retention.
2. **Q:** Apa akibat denominator yang salah saat menghitung conversion rate?
   **Expected answer in guide:** Rate dapat terlihat baik/buruk secara artifisial dan mendorong keputusan salah. Definisikan populasi, event, unit, serta periode.
3. **Q:** Apakah customer journey selalu linear?
   **Expected answer in guide:** Tidak. Perjalanan dapat berulang atau dipengaruhi offline touchpoints, komunitas, marketplace, dan rekomendasi. Peta harus mengikuti bukti kategori.

**Glossary:** Customer journey: Rangkaian tindakan, keputusan, dan pengalaman customer lintas waktu/touchpoint.; Leakage point: Tahap perjalanan dengan kehilangan progres/konversi yang perlu didiagnosis.; KPI tree: Struktur yang menghubungkan business outcome dengan driver dan metric.; Metric dictionary: Dokumen definisi, formula, sumber, owner, dan batas interpretasi metric.; Guardrail metric: Metrik pembatas agar optimasi satu outcome tidak merusak kualitas, margin, atau pengalaman.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T01-CH04 — Integrated Channel & Media Planning

**Competency ID(s):** T01-C03

**Agency evidence (role-level):** A/D: Performance Marketing and integrated planning role evidence; title and JD scope vary by market | A: Digital Manager cross-channel performance media | D/B: Performance Manager, integrated investment and performance roles | B: integrated digital/media planning and performance role evidence | D: SEA/Performance Marketing roles in career index

**Learning objective / concept:** Integrated channel planning menetapkan peran channel berdasarkan audience, objective, journey, creative capability, cost, reach/intent, dan measurement. Paid, owned, earned, shared menjelaskan cara distribusi/ownership, bukan daftar channel eksklusif. Media mix tidak ditentukan dengan membagi budget rata atau mengikuti tren. Buat rationale tiap channel, proyeksi dengan asumsi, flighting, dan evaluasi. Forecast adalah estimasi, bukan janji.

**Simulated example:** KASUS SIMULASI — brand baru punya budget Rp300 juta untuk tiga bulan. Search menangkap demand aktif; paid social membangun discovery dan menguji creative; creator/PR menambah credibility; CRM mengaktifkan customer berizin; SEO/content membangun aset jangka panjang. Kontribusi tiap channel dinilai sesuai peran dan horizon.

**Technical depth / workflow:**
- Turunkan channel role dari journey. Nyatakan tugas channel: create demand, capture intent, explain/prove, convert, retain, atau advocacy.
- Nilai channel fit. Bandingkan audience, intent, format, reach, frequency, controllability, creative requirement, measurement, cost, dan capability.
- Buat budget scenario. Rancang conservative/base/stretch; dokumentasikan input CPM/CPC/CVR, seasonality, volume, dan batas inventory.
- Susun phasing/flighting. Tentukan launch, learning, scale, sustain, retargeting; cocokkan dengan stock, sales capacity, promo calendar, dan dependency.
- Tetapkan governance. Tentukan owner, approval, creative handoff, tracking, reporting cadence, budget reallocation trigger, dan post-campaign review.

**Practice / deliverable:** Buat integrated channel plan tiga bulan: objective, audience, role, format, budget, timing/flight, forecast dengan asumsi, KPI, source, dependency, risk, owner, rationale. Bandingkan base budget dengan skenario -20% dan jelaskan trade-off.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa budget tidak dibagi rata ke semua channel?
   **Expected answer in guide:** Fungsi, audience, inventory, cost, dan conversion role berbeda. Alokasi mengikuti objective, marginal return, capacity, dan confidence forecast.
2. **Q:** Apa beda reach forecast dan guaranteed reach?
   **Expected answer in guide:** Forecast adalah estimasi berbasis asumsi; guaranteed delivery hanya berlaku bila ada komitmen kontraktual dan definisi delivery yang jelas.
3. **Q:** Apa yang dicek saat suatu channel tampak punya ROAS tinggi?
   **Expected answer in guide:** Attribution overlap, assisted role, incrementality, volume, margin, saturation, dan opportunity cost sebelum budget dipindahkan.

**Glossary:** Paid / Owned / Earned / Shared: Kerangka pengelompokan distribusi berdasarkan pembayaran, kontrol aset, publisitas, dan partisipasi berbagi.; Media mix: Kombinasi channel, placement, format, dan investasi untuk mencapai objective.; Flighting: Pola waktu penayangan atau pengeluaran media selama campaign.; Reach & frequency: Reach mengukur orang unik; frequency rata-rata jumlah exposure per orang dalam periode.; Forecast: Estimasi hasil berdasarkan asumsi; tampilkan input, rentang, dan uncertainty.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T01-CH05 — Paid Search, Paid Social & Programmatic Fundamentals

**Competency ID(s):** T01-C03

**Agency evidence (role-level):** A/D: Performance Marketing and integrated planning role evidence; title and JD scope vary by market | A: Digital Manager cross-channel performance media | D/B: Performance Manager, integrated investment and performance roles | B: integrated digital/media planning and performance role evidence | D: SEA/Performance Marketing roles in career index

**Learning objective / concept:** Paid media perlu dipahami melalui perbedaan demand capture, demand generation, dan automated buying. Search merespons query/intent; social ads menggabungkan audience signal dan creative untuk menstimulasi demand; programmatic mengakses inventory lintas publisher melalui DSP, SSP, exchange, auction, atau deal. Objective, audience, creative, conversion signal, bidding, inventory quality, privacy, dan measurement berbeda antarpublisher. Full-stack planner memilih channel, memberi brief yang benar, dan menilai output specialist.

**Simulated example:** KASUS SIMULASI — brand ingin menangkap demand kategori yang sudah ada dan mengenalkan produk baru. Search dapat menangkap query spesifik; social video menjelaskan kategori/benefit; programmatic menambah reach pada inventory tertentu bila buying model, audience, brand safety, dan measurement sesuai. Memaksakan satu CPA benchmark pada semuanya mengabaikan peran channel.

**Technical depth / workflow:**
- Bedakan mekanisme. Petakan search intent/keyword, paid social auction/audience/creative, dan programmatic DSP–exchange–SSP/deal/inventory.
- Petakan objective dan buying model. Bedakan auction vs reservation/direct/deal, campaign objective, conversion location, bid strategy, dan budget control.
- Periksa kesiapan. Pastikan account ownership, campaign structure, creative spec, landing page, tracking/event, audience eligibility, policy, dan approval.
- Nilai sesuai peran. Search: impression share/query quality/conversion; social: creative/audience/conversion; programmatic: inventory/reach/viewability/fraud/cost/outcome.
- Tulis decision framework. Rekomendasikan berdasarkan audience, intent, scale, format, budget, risk, measurement, dan kemampuan tim—not CPM/CPC termurah.

**Practice / deliverable:** Buat paid-channel decision matrix untuk (A) menangkap demand, (B) mengenalkan produk, (C) menambah reach dengan kontrol inventory. Bandingkan Search, Social, Programmatic dari audience/intent, format, buying mechanism, KPI, data/creative needs, risk, use case, dan kondisi tidak direkomendasikan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa perbedaan demand capture dan demand generation?
   **Expected answer in guide:** Demand capture merespons permintaan yang sudah muncul seperti query; demand generation membangun awareness, preference, atau kebutuhan yang belum diekspresikan sebagai query.
2. **Q:** Apakah CPM termurah berarti media paling efisien?
   **Expected answer in guide:** Tidak. CPM tidak menilai kualitas audience, viewability, invalid traffic, attention, conversion, atau contribution.
3. **Q:** Apa peran full-stack planner ketika ada specialist platform?
   **Expected answer in guide:** Menetapkan objective, channel role, budget guardrail, KPI, brief, dependency, governance, dan evaluasi; bukan mengambil alih keputusan teknis tanpa konteks.

**Glossary:** Demand capture: Menangkap permintaan yang sudah muncul, misalnya melalui search atau intent eksplisit.; Demand generation: Membangun awareness/preference sebelum kebutuhan diekspresikan sebagai query.; DSP / SSP: DSP membantu buyer mengakses inventory; SSP membantu publisher mengelola/menjual inventory.; RTB: Real-time bidding, lelang otomatis pada kesempatan impression.; Inventory quality: Kualitas placement dari sisi brand safety, suitability, viewability, fraud, audience, dan supply transparency.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T01-CH06 — Organic Search, Content & Community

**Competency ID(s):** T01-C03

**Agency evidence (role-level):** A/D: Performance Marketing and integrated planning role evidence; title and JD scope vary by market | A: Digital Manager cross-channel performance media | D/B: Performance Manager, integrated investment and performance roles | B: integrated digital/media planning and performance role evidence | D: SEA/Performance Marketing roles in career index

**Learning objective / concept:** Organic search, content, dan community memperkuat discoverability, consideration, trust, dan hubungan jangka panjang. SEO mencakup crawling/indexing, site architecture, helpful content, technical accessibility, dan search intent. Content strategy menghubungkan audience question dengan brand POV, format, cadence, distribution, dan measurement. GEO/AEO atau AI-search visibility masih berkembang; jangan menganggap trik khusus sebagai jaminan citation/ranking. Community butuh purpose, moderation, response, dan customer-care handoff.

**Simulated example:** KASUS SIMULASI — brand skincare mendapat organic traffic tinggi dari artikel 'cara merawat kulit', tetapi sedikit pengunjung menuju product consideration. Audit menunjukkan tidak ada internal link relevan, product proof, CTA kontekstual, atau jalur konsultasi. Perbaikannya bukan keyword berulang, tetapi intent match, structure, trust, next action, dan pengukuran.

**Technical depth / workflow:**
- Audit search demand dan technical foundation. Kelompokkan query berdasarkan intent; periksa crawlability, indexability, canonical, internal links, mobile usability, page performance, dan Search Console evidence.
- Rancang content architecture. Tentukan pillar, cluster, audience question, brand POV, evidence, format, cadence, internal link, owner, dan distribution.
- Buat content brief. Sertakan audience, intent, objective, primary answer, proof/source, outline, expertise, CTA, internal links, dan review process.
- Bangun community operating model. Tetapkan platform role, member segments, programming, moderation severity, response SLA, escalation, UGC permission, dan customer-care handoff.
- Ukur outcome. Gunakan branded/non-branded clicks, engaged sessions, assisted progression, qualified leads, community health, response quality, dan conversion—not follower/view count saja.

**Practice / deliverable:** Buat organic plan untuk satu kategori: keyword/topic cluster, intent, pillar page, tiga supporting content, community program, distribution, internal links, CTA, KPI, source, owner, update cadence. Audit satu URL secara konseptual dan prioritaskan issue berdasarkan impact, evidence, effort, dependency.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa keyword stuffing bukan SEO strategy?
   **Expected answer in guide:** Search intent, usefulness, crawling/indexing, trust, dan user experience lebih penting daripada repetisi keyword. Keyword stuffing dapat menurunkan kualitas dan melanggar spam policy.
2. **Q:** Apa perbedaan content pillar dan content campaign?
   **Expected answer in guide:** Pillar adalah tema editorial jangka panjang; campaign adalah aktivitas terikat objective, timing, message, dan measurement.
3. **Q:** Bagaimana mengukur community selain follower?
   **Expected answer in guide:** Participation quality, repeat contributors, response time, resolution, advocacy, member retention, UGC permission, dan customer experience.

**Glossary:** Crawlability: Kemampuan crawler menemukan dan mengakses URL.; Indexability: Kelayakan halaman untuk disimpan/ditampilkan dalam indeks search engine.; Search intent: Kebutuhan atau tujuan di balik query pengguna.; Content pillar / cluster: Pillar adalah topik utama; cluster adalah konten terkait yang memperdalam subtopik dan terhubung.; Community health: Ukuran kualitas partisipasi, keamanan, respons, retensi, dan nilai hubungan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T01-CH07 — Tracking, Analytics & Measurement

**Competency ID(s):** T01-C04

**Agency evidence (role-level):** A/D: Performance Marketing and integrated planning role evidence; title and JD scope vary by market | A: Digital Manager cross-channel performance media | D/B: Performance Manager, integrated investment and performance roles | B: integrated digital/media planning and performance role evidence | D: SEA/Performance Marketing roles in career index

**Learning objective / concept:** Measurement mengubah interaksi menjadi data yang dapat dipercaya. Mulai dari business question, framework, event taxonomy, data layer/parameter, source of truth, consent, dan QA—baru kemudian dashboard. GA4 memakai event-based model; UTM mengklasifikasikan traffic campaign; Google Tag Manager mengelola tag/trigger/variable; pixel/API mengirim signal ke platform iklan. Attribution memberi credit menurut model/window tertentu, bukan otomatis kausalitas. Dashboard rapi tidak memperbaiki event yang salah.

**Simulated example:** KASUS SIMULASI — email, paid social, dan search membawa pengunjung ke landing page. Redirect shortlink menghapus query parameter pada satu jalur sehingga GA4 melaporkan sebagian traffic sebagai direct/(not set). Sebelum menyimpulkan channel kalah, tim menguji URL end-to-end dan membandingkan source event, session, serta conversion definition.

**Technical depth / workflow:**
- Tulis measurement questions. Tentukan keputusan, outcome metric, diagnostic metric, guardrail, audience scope, dan cadence.
- Desain event taxonomy. Petakan view_item, add_to_cart, begin_checkout, purchase, generate_lead; definisikan trigger, parameter, value/currency, deduplication, owner, dan consent dependency.
- Standarkan campaign tagging. Tetapkan utm_source, utm_medium, utm_campaign, utm_content, utm_term, naming, lowercase, encoding, dan larangan memasukkan personal data.
- Implementasikan dan QA. Konfigurasikan Google tag/GA4 Event di GTM; uji Preview/Tag Assistant, DebugView/Realtime, trigger, duplicate, missing parameter, redirect, timezone, dan consent.
- Bangun dashboard dengan caveat. Validasi grain, join, filters, attribution window, freshness, source priority, internal traffic, invalid traffic, dan perbedaan platform vs GA4.

**Practice / deliverable:** Buat measurement plan satu campaign: business question, KPI tree, event map, trigger, parameters, UTM taxonomy, consent, tag owner, QA steps, expected/actual, source of truth, dashboard dimensions/metrics, data quality, dan limitation. Gunakan Google Analytics demo account untuk latihan data yang disediakan Google.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa perbedaan UTM dan GA4 event?
   **Expected answer in guide:** UTM adalah parameter URL untuk mengidentifikasi source/campaign; event merekam tindakan seperti purchase atau generate_lead. UTM tidak menggantikan event tracking.
2. **Q:** Mengapa platform ads dan GA4 melaporkan conversion berbeda?
   **Expected answer in guide:** Attribution model/window, timezone, identity, consent, event definition, click/view rules, deduplication, serta data processing dapat berbeda.
3. **Q:** Apa fungsi Preview/DebugView saat QA GTM dan GA4?
   **Expected answer in guide:** Menguji apakah tag terpicu pada kondisi benar dan event/parameter masuk sesuai harapan sebelum dipublikasikan; simpan test evidence.

**Glossary:** Event taxonomy: Struktur nama event, trigger, parameter, dan aturan yang konsisten.; UTM: Parameter URL untuk mengidentifikasi source, medium, campaign, content, dan keyword.; Google Tag Manager: Sistem untuk mengelola tag, trigger, dan variable pada website/app.; Attribution: Aturan pemberian credit touchpoint menurut model/window; bukan bukti incremental causality.; Data quality: Kondisi data terkait akurasi, completeness, consistency, timeliness, validity, dan uniqueness.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T01-CH08 — CRO, Experimentation & Optimization

**Competency ID(s):** T01-C02, T01-C05

**Agency evidence (role-level):** A/D: Performance Marketing and integrated planning role evidence; title and JD scope vary by market | A: Digital Manager cross-channel performance media | D/B: Performance Manager, integrated investment and performance roles | B: integrated digital/media planning and performance role evidence | D: SEA/Performance Marketing roles in career index

**Learning objective / concept:** CRO dan experimentation mengubah diagnosis funnel menjadi hipotesis yang diuji. CRO bukan hanya mengubah warna tombol; ia menggabungkan research, analytics, usability, page performance, offer clarity, trust, friction, dan operational constraints. Hipotesis menyebut observation, insight, change, expected mechanism, audience, dan metric. A/B testing memerlukan randomization, unit tepat, primary metric, guardrails, sample/duration, stopping rule, serta kontrol kontaminasi. Conversion rate naik belum tentu profit naik bila kualitas order turun.

**Simulated example:** KASUS SIMULASI — checkout punya conversion rate 40% dari begin_checkout ke purchase. Riset menunjukkan shipping fee baru muncul di tahap akhir dan menambah surprise cost. Hipotesis: menampilkan estimasi shipping lebih awal menurunkan abandonment. Primary metric adalah purchase per eligible checkout; guardrail ialah AOV, refund/cancel, margin, dan page performance. Perubahan diuji tanpa mengganti promo bersamaan.

**Technical depth / workflow:**
- Temukan friction dengan evidence. Gabungkan funnel analytics, heatmap/session observation, usability interview, survey, page speed, support tickets, dan error logs.
- Prioritaskan issue. Nilai impact, reach, confidence, effort, dan dependency; hindari backlog berbasis opini saja.
- Tulis hipotesis. Karena [observasi], kami percaya [perubahan] untuk [audience] memperbaiki [metric] melalui [mechanism], tanpa merusak [guardrail].
- Rancang test. Tentukan control/treatment, randomization unit, primary metric, secondary metrics, guardrails, exposure, sample/duration estimate, stopping rule, dan QA.
- Interpretasikan disiplin. Periksa sample balance, seasonality, novelty effect, uncertainty, multiple testing, segment effects, dan dampak bisnis; dokumentasikan inconclusive result.

**Practice / deliverable:** Buat optimization backlog tiga hipotesis. Untuk hipotesis prioritas, tulis evidence, mechanism, audience, control/treatment, primary metric, guardrails, randomization, sample/duration assumption, QA, stopping criteria, dan decision rule. Jangan mengklaim significance tanpa perhitungan benar.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa yang membuat hipotesis CRO dapat diuji?
   **Expected answer in guide:** Ia menghubungkan evidence dengan perubahan spesifik, mekanisme, audience, primary metric, dan guardrails. Pernyataan 'buat halaman lebih menarik' belum cukup.
2. **Q:** Mengapa mengubah checkout, harga, promo, desain, dan shipping sekaligus tidak ideal?
   **Expected answer in guide:** Banyak variabel berubah bersamaan sehingga penyebab hasil sulit dipisahkan. Isolasi intervensi utama atau gunakan desain multivariat yang benar.
3. **Q:** Apa arti hasil eksperimen inconclusive?
   **Expected answer in guide:** Data belum memberi bukti cukup untuk memilih winner sesuai decision rule. Itu bukan bukti kedua variasi identik; periksa power, sample, variance, dan implementasi.

**Glossary:** CRO: Proses sistematis meningkatkan proporsi audience yang menyelesaikan tindakan bernilai.; Hypothesis: Pernyataan yang menghubungkan evidence, perubahan, mekanisme, outcome, dan guardrail.; Randomization unit: Unit yang diacak, misalnya user, session, atau account; memengaruhi validity eksperimen.; Primary metric: Metrik utama untuk keputusan test, ditetapkan sebelum hasil dibaca.; Inconclusive: Hasil belum memenuhi evidence/decision threshold untuk menyatakan winner.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T01-CH09 — CRM, Lifecycle & Automation

**Competency ID(s):** T01-C05

**Agency evidence (role-level):** A/D: Performance Marketing and integrated planning role evidence; title and JD scope vary by market | A: Digital Manager cross-channel performance media | D/B: Performance Manager, integrated investment and performance roles | B: integrated digital/media planning and performance role evidence | D: SEA/Performance Marketing roles in career index

**Learning objective / concept:** CRM dan lifecycle marketing mengelola hubungan setelah interaksi: lead nurturing, onboarding, activation, repeat purchase, loyalty, win-back, dan churn prevention. Rancang komunikasi berdasarkan lifecycle stage, segment, trigger, content, timing, frequency, suppression, exit condition, dan consent. Email/WhatsApp bukan sekadar channel blast; keduanya memerlukan permission, preference management, deliverability, data hygiene, dan customer-service coordination. Ukur activation, repeat rate, retention, churn, revenue/margin, dan customer experience.

**Simulated example:** KASUS SIMULASI — customer baru membeli skincare starter kit. Journey email/WhatsApp berisi order confirmation, edukasi pemakaian, reminder replenishment sesuai product usage, cross-sell relevan, dan feedback request. Orang yang sudah reorder keluar dari reminder pembelian pertama. Customer unsubscribe atau tidak punya consent marketing tidak menerima promotional automation.

**Technical depth / workflow:**
- Petakan lifecycle stage. Definisikan lead, first purchase, onboarding, active, repeat, loyal/high value, lapsed, dan churn risk sesuai bisnis.
- Bangun segment dan trigger. Gunakan recency, frequency, monetary value, category, consent, behavior, product usage, dan service status untuk entry condition.
- Rancang flow/content. Tentukan message, purpose, channel, timing, frequency cap, branch, suppression, exit condition, personalization data, dan owner.
- Jaga governance/deliverability. Kelola consent/preferences, unsubscribe/opt-out, data accuracy, bounce/complaint, sending domain, quiet hours, customer care, dan kebijakan channel.
- Ukur lifecycle value. Analisis activation, repeat purchase, time-to-second-order, cohort retention, churn, revenue/contribution, unsubscribe, complaint, dan holdout impact.

**Practice / deliverable:** Buat lifecycle map dua flow: (1) new customer onboarding, (2) replenishment/repeat atau lapsed win-back. Tiap flow berisi trigger, eligibility, consent, segment, message, channel, delay, branch, frequency cap, suppression, exit, KPI, guardrail, dan QA. Unsubscribe/opt-out wajib jadi test scenario.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Mengapa suppression dan exit condition penting?
   **Expected answer in guide:** Mencegah komunikasi berulang/tidak relevan, misalnya reminder purchase setelah customer sudah membeli atau promotional message setelah unsubscribe.
2. **Q:** Apakah nomor WhatsApp/email otomatis berarti consent marketing?
   **Expected answer in guide:** Tidak. Kontak yang tersedia bukan bukti izin promosi. Perlu dasar pemrosesan/consent, preference management, opt-out, dan kebijakan channel.
3. **Q:** Mengapa repeat purchase dibaca bersama margin dan customer experience?
   **Expected answer in guide:** Diskon agresif dapat menaikkan repeat tetapi menurunkan margin; frekuensi pesan berlebih meningkatkan unsubscribe/complaint. Nilai hubungan dinilai utuh.

**Glossary:** Lifecycle marketing: Komunikasi/pengalaman yang disesuaikan dengan tahap hubungan customer terhadap brand.; Trigger: Kejadian atau kondisi yang memulai automation flow.; Suppression: Aturan mengecualikan kontak yang tidak eligible untuk komunikasi tertentu.; Deliverability: Kemampuan email/pesan mencapai penerima sesuai kebijakan dan kualitas pengiriman.; Cohort retention: Proporsi kelompok customer yang tetap aktif/bertransaksi setelah titik awal yang sama.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T01-CH10 — Integrated Digital Performance Capstone

**Competency ID(s):** T01-C06

**Agency evidence (role-level):** A/D: Performance Marketing and integrated planning role evidence; title and JD scope vary by market | A: Digital Manager cross-channel performance media | D/B: Performance Manager, integrated investment and performance roles | B: integrated digital/media planning and performance role evidence | D: SEA/Performance Marketing roles in career index

**Learning objective / concept:** Capstone menguji kemampuan mengintegrasikan strategy, channel, measurement, optimization, dan lifecycle menjadi rekomendasi yang masuk akal secara komersial. Paket kerja harus konsisten dari business problem sampai KPI, channel role, budget, tracking, experiment, dan executive decision. Setiap angka harus bersumber atau diberi label SIMULATED; forecast bukan actual. Full-stack bukan berarti menguasai setiap platform sedalam operator, tetapi memahami trade-off, memimpin specialist, dan menjaga sistem keputusan koheren.

**Simulated example:** KASUS SIMULASI — brand consumer Indonesia menyiapkan growth plan 90 hari dengan budget hipotetis Rp500 juta. Brief mencakup revenue target, margin, stok, audience, dan kapasitas sales/customer service. Rekomendasi menjelaskan channel priority, budget scenario, event/UTM, forecast, experimentation agenda, CRM flow, reporting cadence, dan keputusan jika hasil di bawah/di atas target.

**Technical depth / workflow:**
- Problem framing dan commercial logic. Restate challenge, baseline, target, economics, audience, readiness, constraints, dan unknown.
- Strategy/channel architecture. Tetapkan audience insight, proposition, journey, channel roles, budget scenarios, flighting, creative/content needs, dan dependency.
- Activation/governance. Tulis brief paid/organic/CRM specialist, ownership, naming, policy/consent, approval, launch QA, dan operating cadence.
- Measurement/experimentation. Buat KPI tree, event taxonomy, UTM, dashboard spec, data-quality checks, test backlog, primary metric, guardrails, dan decision rules.
- Optimization/executive recommendation. Gunakan synthetic reporting untuk diagnosis, scenario, risk, next action, dan batas inferensi; hubungkan keputusan dengan margin/customer quality.
- Presentasi/handover. Siapkan executive deck 5 menit, workbook, assumptions/evidence log, owner, timeline, serta next 30/60/90-day plan.

**Practice / deliverable:** Bangun capstone folder: (1) brief restatement + business economics, (2) consumer snapshot/positioning, (3) journey map + KPI tree, (4) integrated channel plan + budget scenario, (5) paid-channel comparison, (6) organic/content/community plan, (7) measurement/event/UTM spec, (8) CRO backlog, (9) CRM lifecycle map, (10) executive recommendation. Presentasikan 8–10 slide plus workbook. Rubrik 0–3: commercial logic, audience/strategy, channel planning, measurement, optimization reasoning, executive communication. Setiap area minimal 2; tandai semua synthetic figures.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** Apa yang membedakan rekomendasi full-stack dari kumpulan channel tactic?
   **Expected answer in guide:** Semua tactic diturunkan dari satu business objective dan consumer insight, memiliki channel role jelas, measurement kompatibel, budget guardrail, dan keputusan optimasi yang saling terhubung.
2. **Q:** Bagaimana menyajikan forecast dan synthetic dataset secara jujur?
   **Expected answer in guide:** Cantumkan asumsi, rumus, rentang, source, serta label SIMULATED/FORECAST. Jangan menyebutnya actual performance atau client result.
3. **Q:** Apa pertanyaan executive yang harus dijawab saat presentasi?
   **Expected answer in guide:** Mengapa masalah diprioritaskan, mengapa audience/channel dipilih, bagaimana ekonomi dan KPI bekerja, evidence apa yang mendasari keputusan, apa risikonya, dan kapan strategi diubah.

**Glossary:** Integrated performance plan: Rencana yang menghubungkan objective, audience, channel, activation, measurement, optimization, dan lifecycle.; Assumption log: Catatan asumsi, sumber, confidence, owner, dan cara pengujian.; Forecast: Estimasi hasil masa depan berdasarkan input dan asumsi yang dinyatakan.; Executive recommendation: Keputusan berbasis evidence, trade-off, commercial impact, risk, dan next action.; Handover: Penyerahan file, konteks, owner, status, dependency, risiko, dan action berikutnya.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 2. Connection / Communications Planner (`connection`)

### DPA-T02-CH01 — Business Problem, Client Brief & Communication Challenge

**Competency ID(s):** T02-C01

**Agency evidence (role-level):** A: Executive Connection Planning Jakarta JD, full-funnel channel roles, budget/phasing and brand/performance KPIs | B/D: planning capability and role evidence; dedicated direct JD still needed | D: Planning role/title evidence; direct connection-planning JD not yet verified | B: integrated planning/media planner roles | D: Connections Planning category and Media Planner career listings

**Learning objective / concept:** Connection Planning dimulai dengan memisahkan business problem, marketing problem, dan communication problem. Penjualan turun bisa terjadi karena harga, distribusi, stok, produk, atau pengalaman; tidak semuanya dapat diselesaikan oleh komunikasi. Planner harus menulis masalah yang dapat dipengaruhi komunikasi, mendefinisikan audience, perubahan perilaku/persepsi yang diharapkan, baseline, periode, dan constraint. Brief yang baik menghasilkan pertanyaan riset dan keputusan, bukan langsung daftar channel.

**Simulated example:** SIMULATED — sebuah brand minuman mengalami penurunan trial. Data menunjukkan awareness tinggi tetapi pemahaman benefit rendah pada segmen pekerja malam. Distribusi dan harga stabil. Communication challenge yang masuk akal adalah memperjelas relevansi benefit pada momen konsumsi, bukan sekadar menaikkan reach.

**Technical depth / workflow:**
- <b>Audit brief.</b> Pisahkan objective bisnis, gejala, evidence, audience, market, budget, timeline, mandatories, dan hal yang belum diketahui.
- <b>Diagnosis controllability.</b> Tandai faktor yang dapat dipengaruhi komunikasi dan faktor produk/komersial yang perlu owner lain.
- <b>Tulis problem statement.</b> Nyatakan siapa, perubahan apa, barrier apa, mengapa sekarang, dan evidence pendukungnya.
- <b>Set success criteria.</b> Tentukan baseline, desired change, indikator komunikasi, business outcome pendamping, periode, dan source.

**Practice / deliverable:** Buat brief diagnosis dua halaman: business context, problem tree, communication challenge, target audience, objective, baseline/target, constraint, stakeholder, tiga research question, serta evidence/assumption log. Labeli setiap angka SIMULATED bila bukan data aktual.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda business problem dan communication problem?
   **Expected answer in guide (not independently approved):** Business problem adalah hasil komersial yang perlu berubah; communication problem adalah hambatan persepsi, pemahaman, preference, atau tindakan yang memang dapat dipengaruhi komunikasi.
2. **Q:** Mengapa brief tidak boleh langsung berisi channel?
   **Expected answer in guide (not independently approved):** Channel baru dipilih setelah audience, barrier, objective, dan journey dipahami. Memulai dari channel berisiko mengoptimalkan media untuk masalah yang salah.
3. **Q:** Bagaimana membuktikan sebuah masalah berada dalam kendali komunikasi?
   **Expected answer in guide (not independently approved):** Triangulasikan riset audience, perilaku, pesan yang diterima, dan faktor komersial seperti harga/stok. Catat faktor yang tidak dapat dikendalikan planner.

**Glossary:**
- **Communication challenge:** Hambatan komunikasi yang menghalangi perubahan pemahaman, persepsi, atau perilaku.
- **Baseline:** Kondisi awal yang menjadi pembanding untuk menilai perubahan.
- **Mandatories:** Ketentuan wajib dari klien, brand, legal, budget, atau campaign.
- **Problem statement:** Pernyataan terfokus tentang masalah, audience, barrier, dan perubahan yang dibutuhkan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T02-CH02 — Consumer Research, Audience & Segmentation

**Competency ID(s):** T02-C02

**Agency evidence (role-level):** A: Executive Connection Planning Jakarta JD, full-funnel channel roles, budget/phasing and brand/performance KPIs | B/D: planning capability and role evidence; dedicated direct JD still needed | D: Planning role/title evidence; direct connection-planning JD not yet verified | B: integrated planning/media planner roles | D: Connections Planning category and Media Planner career listings

**Learning objective / concept:** Audience research menggabungkan data primer seperti interview, survey, observation, dan usability research dengan data sekunder seperti sales, CRM, search, review, social listening, dan syndicated studies. Segmentasi harus menjelaskan kebutuhan, perilaku, motivasi, konteks, trigger, dan decision criteria yang memengaruhi strategi. Demografi dapat membantu sizing, tetapi tidak otomatis menjadi insight. Planner perlu menilai kualitas sample, recency, bias, representativeness, dan batas inferensi.

**Simulated example:** SIMULATED — dua kelompok usia 25–34 sama-sama membeli skincare. Satu kelompok mencari rutinitas ringkas untuk perjalanan; kelompok lain mencari kepastian bahan karena pengalaman iritasi. Keduanya memiliki tension dan proof requirement berbeda walau demografinya sama.

**Technical depth / workflow:**
- <b>Rumuskan research question.</b> Tulis keputusan yang perlu didukung dan ketidakpastian yang harus dikurangi sebelum memilih metode.
- <b>Triangulasikan sumber.</b> Cocokkan search/review/CRM dengan interview atau survey; jangan menjadikan satu social post sebagai representasi seluruh pasar.
- <b>Bangun segment.</b> Definisikan need, occasion, trigger, barrier, behavior, alternative, decision criteria, dan media context.
- <b>Dokumentasikan evidence.</b> Pisahkan observed fact, interpretation, assumption, confidence, sample limitation, serta bukti yang dapat membantah.

**Practice / deliverable:** Buat dua audience profile lengkap dengan jobs-to-be-done, tension, trigger, barrier, alternatives, proof needed, media behavior, dan implication untuk pesan/touchpoint. Sertakan source log dan satu research gap per segmen.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa persona demografis saja tidak cukup?
   **Expected answer in guide (not independently approved):** Demografi membantu mendeskripsikan populasi, tetapi tidak menjelaskan motivasi, trigger, hambatan, atau bukti yang diperlukan untuk mengambil keputusan.
2. **Q:** Apa risiko memakai social listening sebagai satu-satunya riset?
   **Expected answer in guide (not independently approved):** Percakapan publik tidak selalu representatif, dapat bias platform, loud minority, dan tidak selalu menjelaskan sebab perilaku.
3. **Q:** Kapan segmentasi layak digunakan untuk strategi?
   **Expected answer in guide (not independently approved):** Saat segmen memiliki kebutuhan/perilaku berbeda yang mengubah proposition, channel, experience, atau keputusan investasi.

**Glossary:**
- **Primary research:** Data yang dikumpulkan langsung untuk menjawab research question tertentu.
- **Secondary research:** Data yang telah dikumpulkan pihak lain atau tersedia dari sistem bisnis.
- **Behavioral segment:** Kelompok audience yang dibedakan melalui perilaku, kebutuhan, atau konteks.
- **Evidence log:** Catatan sumber, tanggal, metode, temuan, dan batas interpretasi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T02-CH03 — Cultural Insight, Human Tension & Behavioral Insight

**Competency ID(s):** T02-C02

**Agency evidence (role-level):** A: Executive Connection Planning Jakarta JD, full-funnel channel roles, budget/phasing and brand/performance KPIs | B/D: planning capability and role evidence; dedicated direct JD still needed | D: Planning role/title evidence; direct connection-planning JD not yet verified | B: integrated planning/media planner roles | D: Connections Planning category and Media Planner career listings

**Learning objective / concept:** Cultural insight menghubungkan perubahan konteks budaya, perilaku nyata, kebutuhan manusia, dan ketegangan yang relevan dengan kategori. Tren hanya sinyal; insight menjelaskan mengapa sinyal tersebut penting bagi audience dan brand. Human tension biasanya memuat dua kebutuhan yang bertabrakan. Planner menguji skala, momentum, durasi, relevansi kategori, dan risiko appropriation sebelum mengusulkan platform ide.

**Simulated example:** SIMULATED — tren konten nostalgia meningkat, tetapi itu belum otomatis menjadi insight. Riset dapat menunjukkan pekerja muda mencari rasa aman di tengah perubahan kerja; nostalgia menjadi salah satu ekspresi, bukan keseluruhan kebutuhan. Brand harus punya peran yang kredibel untuk masuk.

**Technical depth / workflow:**
- <b>Kumpulkan cultural signals.</b> Baca percakapan, search, creator, komunitas, berita, riset, perilaku kategori, dan perubahan sosial.
- <b>Bedakan signal, trend, shift.</b> Ukur apakah sinyal hanya viral sesaat atau mengindikasikan perubahan perilaku lebih luas.
- <b>Formulasikan tension.</b> Tulis pola audience ingin X tetapi mengalami Y karena Z; dukung dengan beberapa bukti independen.
- <b>Uji brand fit.</b> Tentukan peran brand, relevance, credibility, timing, sensitivity, dan potensi backlash.

**Practice / deliverable:** Buat cultural insight board berisi lima sinyal, dua tren, satu human tension, evidence pro/kontra, brand role, serta tiga potential communication territories. Jangan mengklaim hubungan kausal dari korelasi tren.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda trend dan insight?
   **Expected answer in guide (not independently approved):** Trend menunjukkan pola/sinyal yang berkembang; insight menjelaskan motivasi atau tension yang mendasari perilaku dan mengarahkan keputusan.
2. **Q:** Mengapa insight harus punya evidence yang dapat membantahnya?
   **Expected answer in guide (not independently approved):** Tanpa falsifiability, insight mudah menjadi slogan yang terdengar menarik tetapi tidak dapat diuji atau dipakai mengambil keputusan.
3. **Q:** Apa yang dimaksud brand fit dalam cultural moment?
   **Expected answer in guide (not independently approved):** Kesesuaian antara nilai, pengalaman, kompetensi, dan peran nyata brand dengan isu yang ingin dimasuki.

**Glossary:**
- **Cultural signal:** Indikasi awal perubahan percakapan atau perilaku budaya.
- **Human tension:** Konflik dua kebutuhan atau keinginan yang dialami audience.
- **Cultural relevance:** Keterkaitan isu atau perilaku dengan audience dan konteks kategori.
- **Brand fit:** Kredibilitas dan kesesuaian peran brand dalam sebuah konteks.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T02-CH04 — Brand Positioning, Proposition & Communication Strategy

**Competency ID(s):** T02-C03

**Agency evidence (role-level):** A: Executive Connection Planning Jakarta JD, full-funnel channel roles, budget/phasing and brand/performance KPIs | B/D: planning capability and role evidence; dedicated direct JD still needed | D: Planning role/title evidence; direct connection-planning JD not yet verified | B: integrated planning/media planner roles | D: Connections Planning category and Media Planner career listings

**Learning objective / concept:** Positioning menentukan ruang pembeda brand relatif terhadap alternatif. Proposition menerjemahkan positioning menjadi nilai yang dijanjikan kepada audience; proof points membuat janji dapat dipercaya; objections menjelaskan alasan audience mungkin ragu. Communication strategy menentukan perubahan audience yang diharapkan, pesan yang perlu dibangun, dan cara mengatasi barrier. Jangan menyamakan tagline, key message, proposition, dan creative idea.

**Simulated example:** SIMULATED — dua layanan sama-sama menjanjikan pengiriman cepat. Brand A memiliki jaringan same-day di kota tertentu; Brand B hanya memberi estimasi umum. Proof point dan batas geografis menentukan klaim yang boleh digunakan.

**Technical depth / workflow:**
- <b>Petakan competitive frame.</b> Tentukan kategori, alternatif langsung/tidak langsung, parity points, dan pembeda yang relevan bagi audience.
- <b>Rumuskan value proposition.</b> Hubungkan target, need, benefit, differentiation, reason-to-believe, dan limitation.
- <b>Bangun messaging hierarchy.</b> Pisahkan proposition, supporting message, proof, objection response, tone, dan CTA.
- <b>Uji konsistensi.</b> Periksa apakah pesan dapat dibuktikan, relevan pada journey, berbeda dari kompetitor, dan dapat diadaptasi lintas channel.

**Practice / deliverable:** Susun positioning statement, value proposition, 3 proof points, 3 objections beserta respons, messaging hierarchy, dan satu communication strategy statement. Tandai klaim yang membutuhkan persetujuan legal atau validasi produk.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa perbedaan proposition dan tagline?
   **Expected answer in guide (not independently approved):** Proposition menjelaskan nilai dan alasan memilih brand; tagline adalah ekspresi kreatif singkat yang dapat menjadi salah satu bentuk komunikasi.
2. **Q:** Mengapa proof point tidak boleh dibuat hanya dari copywriting?
   **Expected answer in guide (not independently approved):** Proof harus berasal dari fakta produk, data, sertifikasi, pengalaman, atau bukti yang dapat diverifikasi. Klaim tanpa dasar menimbulkan risiko reputasi/legal.
3. **Q:** Bagaimana menguji messaging hierarchy?
   **Expected answer in guide (not independently approved):** Pastikan pesan utama konsisten, supporting messages menjawab barrier, proof dapat diverifikasi, dan CTA sesuai tahap journey.

**Glossary:**
- **Positioning:** Ruang pembeda yang ingin dimiliki brand relatif terhadap alternatif.
- **Value proposition:** Nilai/manfaat yang dijanjikan kepada target audience.
- **Reason to believe:** Bukti yang mendukung janji atau proposition.
- **Message hierarchy:** Urutan pesan utama, pendukung, proof, objection, dan CTA.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T02-CH05 — Consumer Journey, Moments & Touchpoint Mapping

**Competency ID(s):** T02-C04

**Agency evidence (role-level):** A: Executive Connection Planning Jakarta JD, full-funnel channel roles, budget/phasing and brand/performance KPIs | B/D: planning capability and role evidence; dedicated direct JD still needed | D: Planning role/title evidence; direct connection-planning JD not yet verified | B: integrated planning/media planner roles | D: Connections Planning category and Media Planner career listings

**Learning objective / concept:** Customer journey memetakan bagaimana audience bergerak dari kebutuhan hingga penggunaan, pembelian ulang, atau advocacy. Journey tidak selalu linear dan sering melibatkan offline, marketplace, search, creator, customer service, dan word-of-mouth. Moment of truth adalah titik pengalaman yang sangat memengaruhi keputusan. Touchpoint audit menilai audience need, brand role, friction, consistency, owner, dan evidence pada tiap momen.

**Simulated example:** SIMULATED — calon pembeli membandingkan produk di marketplace, melihat review creator, mengecek harga di toko, lalu bertanya tentang garansi melalui customer service. Mengoptimasi hanya iklan awareness akan melewatkan titik yang paling menentukan conversion: trust dan kepastian layanan.

**Technical depth / workflow:**
- <b>Tentukan journey boundary.</b> Pilih persona/occasion dan definisikan awal serta akhir journey yang dianalisis.
- <b>Petakan tindakan dan pertanyaan.</b> Catat trigger, task, emotion, information need, influence, dan barrier pada setiap stage.
- <b>Inventaris touchpoint.</b> Tandai paid/owned/earned/shared/offline, role, owner, content, data signal, dan handoff.
- <b>Prioritaskan moments.</b> Nilai impact, friction, reach, feasibility, dan bukti; hindari memberi bobot sama pada semua touchpoint.

**Practice / deliverable:** Buat journey map minimal enam tahap yang berisi audience action, question, emotion, friction, touchpoint, brand role, owner, evidence, dan opportunity. Pilih tiga moments of truth dan jelaskan alasan prioritas.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa journey tidak selalu funnel linear?
   **Expected answer in guide (not independently approved):** Audience dapat bolak-balik, melompat, dipengaruhi marketplace/offline, dan menerima rekomendasi sebelum atau sesudah search.
2. **Q:** Apa beda touchpoint dengan channel?
   **Expected answer in guide (not independently approved):** Channel adalah medium/distribusi; touchpoint adalah interaksi spesifik yang dialami audience pada konteks dan waktu tertentu.
3. **Q:** Bagaimana memilih moment of truth?
   **Expected answer in guide (not independently approved):** Gunakan evidence dampak pada keputusan, intensitas friction, frekuensi/reach, dan kemampuan brand memperbaiki pengalaman.

**Glossary:**
- **Customer journey:** Urutan tindakan dan pengalaman audience lintas waktu/touchpoint.
- **Moment of truth:** Interaksi penting yang dapat mengubah persepsi atau keputusan.
- **Touchpoint:** Kontak spesifik antara audience dan brand/ekosistem.
- **Handoff:** Perpindahan tanggung jawab atau pengalaman antar tim/channel.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T02-CH06 — Paid, Owned, Earned & Shared Channel Roles

**Competency ID(s):** T02-C04

**Agency evidence (role-level):** A: Executive Connection Planning Jakarta JD, full-funnel channel roles, budget/phasing and brand/performance KPIs | B/D: planning capability and role evidence; dedicated direct JD still needed | D: Planning role/title evidence; direct connection-planning JD not yet verified | B: integrated planning/media planner roles | D: Connections Planning category and Media Planner career listings

**Learning objective / concept:** Paid, Owned, Earned, dan Shared menjelaskan karakter distribusi, bukan empat silo yang berdiri sendiri. Connection Planner memberi setiap channel tugas yang jelas: create demand, explain, validate, capture intent, convert, serve, retain, atau amplify advocacy. Pilihan dipengaruhi audience, trust, control, reach, context, timing, cost, frequency, dan measurement. Channel role harus berasal dari journey dan proposition, bukan tren platform.

**Simulated example:** SIMULATED — campaign launch menggunakan creator untuk credibility, social video untuk reach, search untuk menangkap demand aktif, landing page untuk menjelaskan proof, dan CRM untuk onboarding customer berizin. Setiap channel memiliki objective dan KPI berbeda.

**Technical depth / workflow:**
- <b>Turunkan tugas channel dari journey.</b> Tuliskan perubahan audience yang perlu terjadi pada tiap momen sebelum memilih media.
- <b>Bandingkan channel fit.</b> Nilai audience availability, intent, trust, format, control, reach/frequency, cost, speed, dan risk.
- <b>Susun role matrix.</b> Hubungkan channel dengan audience, message, task, KPI, CTA, owner, dan handoff.
- <b>Uji overlap dan gap.</b> Temukan duplikasi pesan, momen tanpa dukungan, dan potensi konflik antar channel.

**Practice / deliverable:** Buat channel-role matrix untuk minimal enam channel. Cantumkan task, audience, message, format, KPI, timing, dependency, owner, serta alasan channel dipilih atau ditolak.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa channel tidak dipilih hanya berdasarkan CPM termurah?
   **Expected answer in guide (not independently approved):** Biaya exposure tidak menjelaskan trust, intent, attention, experience, conversion, atau contribution terhadap outcome.
2. **Q:** Apa fungsi shared media?
   **Expected answer in guide (not independently approved):** Distribusi atau penyebaran yang didorong partisipasi audience, creator, komunitas, atau jaringan sosial; bukan sepenuhnya dibeli atau dikontrol brand.
3. **Q:** Bagaimana menghindari channel silos?
   **Expected answer in guide (not independently approved):** Gunakan satu journey dan messaging architecture, tentukan handoff, shared measurement, owner, dan aturan frekuensi/sequence.

**Glossary:**
- **PESO:** Paid, Earned, Shared, Owned sebagai kerangka distribusi.
- **Channel role:** Tugas spesifik channel dalam journey dan strategi komunikasi.
- **Frequency:** Rata-rata jumlah exposure pada audience dalam periode tertentu.
- **Handoff:** Transisi audience atau pekerjaan antar touchpoint/tim.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T02-CH07 — Communication Architecture & Messaging Framework

**Competency ID(s):** T02-C03

**Agency evidence (role-level):** A: Executive Connection Planning Jakarta JD, full-funnel channel roles, budget/phasing and brand/performance KPIs | B/D: planning capability and role evidence; dedicated direct JD still needed | D: Planning role/title evidence; direct connection-planning JD not yet verified | B: integrated planning/media planner roles | D: Connections Planning category and Media Planner career listings

**Learning objective / concept:** Communication Architecture mengatur hubungan antara audience, pesan, channel, sequence, dan experience agar komunikasi terasa sebagai satu sistem. Messaging Framework menerjemahkan proposition menjadi message house, proof, objection, CTA, dan format. Konsistensi berarti janji brand tidak berubah; adaptasi berarti ekspresi dan proof disesuaikan dengan konteks platform serta kebutuhan audience.

**Simulated example:** SIMULATED — pesan launch yang sama tidak dapat dipakai verbatim pada search ad, video creator, product page, dan CRM. Proposition tetap konsisten, tetapi search menjawab intent, video membangun relevance, product page memberi detail/proof, CRM membantu onboarding.

**Technical depth / workflow:**
- <b>Buat architecture map.</b> Hubungkan audience segment, journey stage, objective, message, channel, format, dan timing.
- <b>Susun message house.</b> Tetapkan single-minded proposition, supporting pillars, proof, objection handling, CTA, dan tone.
- <b>Adaptasi per konteks.</b> Bedakan platform-native expression, panjang pesan, format, urgency, dan depth tanpa mengubah janji inti.
- <b>Dokumentasikan governance.</b> Tetapkan owner, approval, versioning, claim validation, dan aturan update.

**Practice / deliverable:** Bangun communication architecture satu campaign, message house, messaging matrix enam touchpoint, sequence/timing plan, dan governance/approval checklist. Sertakan contoh pesan per platform dan alasan adaptasinya.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa risiko pesan terlalu seragam di semua channel?
   **Expected answer in guide (not independently approved):** Pesan dapat kehilangan relevansi konteks dan intent; audience dipaksa menerima format yang tidak sesuai tahap atau kebutuhan.
2. **Q:** Apa risiko pesan terlalu berbeda antar-channel?
   **Expected answer in guide (not independently approved):** Brand promise menjadi tidak konsisten, proof saling bertentangan, dan audience menerima pengalaman terputus.
3. **Q:** Apa yang dimaksud architecture, bukan sekadar content calendar?
   **Expected answer in guide (not independently approved):** Architecture menentukan hubungan strategis audience, objective, message, channel, sequence, dan experience; calendar hanya menempatkan aktivitas pada waktu.

**Glossary:**
- **Communication architecture:** Sistem hubungan antara audience, message, channel, sequence, dan experience.
- **Message house:** Struktur proposition, supporting pillars, proof, objection, dan CTA.
- **Single-minded proposition:** Satu gagasan nilai utama yang ingin audience pahami/ingat.
- **Version control:** Aturan perubahan dan persetujuan aset/pesan agar konsisten.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T02-CH08 — Creative Brief, Channel Orchestration & Experience Handoff

**Competency ID(s):** T02-C05

**Agency evidence (role-level):** A: Executive Connection Planning Jakarta JD, full-funnel channel roles, budget/phasing and brand/performance KPIs | B/D: planning capability and role evidence; dedicated direct JD still needed | D: Planning role/title evidence; direct connection-planning JD not yet verified | B: integrated planning/media planner roles | D: Connections Planning category and Media Planner career listings

**Learning objective / concept:** Creative brief menerjemahkan strategy menjadi arahan yang dapat dikerjakan creative, content, media, CXM, dan production team. Brief harus menjelaskan problem, audience, insight, proposition, desired response, mandatory, channel context, deliverables, timing, budget, measurement, dan constraint. Orchestration memastikan aset, pesan, dan experience tersambung; handoff bukan hanya mengirim deck, tetapi memastikan pemilik, spesifikasi, dependencies, dan approval jelas.

**Simulated example:** SIMULATED — tim creative menerima brief 'buat konten viral'. Brief itu gagal karena tidak menyebut audience tension, single-minded proposition, proof, objective, format, deliverable, dan success criteria. Rebrief mengubahnya menjadi challenge yang dapat dieksekusi dan dievaluasi.

**Technical depth / workflow:**
- <b>Tulis creative task.</b> Terangkan apa yang harus dipikirkan/dirasakan/dilakukan audience setelah menerima komunikasi.
- <b>Definisikan deliverable.</b> Tetapkan channel, format, asset count, specification, message, CTA, mandatory, timing, dan budget.
- <b>Rancang orchestration.</b> Susun sequence, dependency, version, owner, media placement, landing/experience, dan service readiness.
- <b>Jalankan handoff.</b> Review brief bersama stakeholder, catat keputusan, approval, risk, dan change request.

**Practice / deliverable:** Buat creative brief, channel adaptation matrix, asset/deliverable schedule, RACI/owner table, approval checklist, dan risk register untuk satu integrated campaign.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa bedanya creative brief dan media brief?
   **Expected answer in guide (not independently approved):** Creative brief mengarahkan ide/pesan/pengalaman; media brief mengarahkan target, channel, inventory, budget, timing, dan delivery.
2. **Q:** Mengapa desired response harus jelas?
   **Expected answer in guide (not independently approved):** Agar creative team mengerti perubahan audience yang dituju dan dapat menilai apakah ide bekerja untuk objective.
3. **Q:** Apa bukti handoff berhasil?
   **Expected answer in guide (not independently approved):** Owner menerima brief dan aset dengan konteks, spesifikasi, deadline, KPI, approval, dependency, serta kriteria QA yang disepakati.

**Glossary:**
- **Creative brief:** Dokumen arahan problem, audience, insight, message, response, dan execution constraints.
- **RACI:** Kerangka Responsible, Accountable, Consulted, Informed untuk penugasan.
- **Orchestration:** Pengaturan sequence, timing, dan keterkaitan interaksi lintas channel.
- **Change request:** Permintaan perubahan scope/brief yang harus dievaluasi dampaknya.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T02-CH09 — Communication Effectiveness & Learning Agenda

**Competency ID(s):** T02-C05

**Agency evidence (role-level):** A: Executive Connection Planning Jakarta JD, full-funnel channel roles, budget/phasing and brand/performance KPIs | B/D: planning capability and role evidence; dedicated direct JD still needed | D: Planning role/title evidence; direct connection-planning JD not yet verified | B: integrated planning/media planner roles | D: Connections Planning category and Media Planner career listings

**Learning objective / concept:** Communication effectiveness menilai apakah komunikasi mencapai perubahan yang ditargetkan, bukan hanya apakah media deliver sesuai rencana. Pisahkan output (impressions, reach, views), outtake (attention, recall, comprehension, consideration), dan outcome (trial, sales, retention). Susun learning agenda sebelum campaign agar measurement dapat membantu keputusan berikutnya. Attribution platform tidak otomatis membuktikan causal impact.

**Simulated example:** SIMULATED — video campaign menghasilkan reach besar, tetapi brand recall tidak bergerak. Survey kecil menunjukkan audience mengingat kategori, bukan brand. Evaluasi menemukan brand cue muncul terlalu akhir; rekomendasi kreatif perlu diuji, bukan menyimpulkan reach gagal.

**Technical depth / workflow:**
- <b>Turunkan measurement objective.</b> Definisikan output, outtake, outcome, baseline, target, audience, dan time window.
- <b>Pilih bukti sesuai pertanyaan.</b> Platform reporting untuk delivery; survey/brand lift untuk perception; sales/CRM untuk behavior; eksperimen untuk incrementality jika feasible.
- <b>Susun learning agenda.</b> Tulis hipotesis, metode, sample, decision threshold, owner, dan kapan hasil mengubah rencana.
- <b>Interpretasikan batas.</b> Pisahkan korelasi, attribution, self-reported lift, causal evidence, dan faktor luar.

**Practice / deliverable:** Rancang measurement framework campaign dengan KPI output/outtake/outcome, measurement method, baseline, target, learning question, decision rule, dan limitation. Tulis satu rekomendasi berdasarkan data SIMULATED.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apakah reach tinggi membuktikan komunikasi efektif?
   **Expected answer in guide (not independently approved):** Tidak. Reach adalah output delivery; efektivitas perlu bukti perubahan pemahaman, persepsi, perilaku, atau outcome sesuai objective.
2. **Q:** Apa beda attribution dan incrementality?
   **Expected answer in guide (not independently approved):** Attribution membagi kredit menurut aturan model; incrementality mengestimasi tambahan outcome yang disebabkan aktivitas dibanding kondisi counterfactual.
3. **Q:** Mengapa learning agenda harus ditetapkan sebelum campaign?
   **Expected answer in guide (not independently approved):** Agar pengumpulan data, metode, sample, dan decision threshold sesuai pertanyaan; mengurangi bias memilih metrik setelah melihat hasil.

**Glossary:**
- **Output:** Hasil distribusi seperti reach, impressions, views, frequency.
- **Outtake:** Respons audience seperti attention, recall, comprehension, consideration.
- **Outcome:** Perubahan perilaku/bisnis seperti trial, sales, lead, retention.
- **Learning agenda:** Daftar pertanyaan, hipotesis, metode, dan keputusan yang ingin diuji.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T02-CH10 — Integrated Connection Strategy Capstone

**Competency ID(s):** T02-C05

**Agency evidence (role-level):** A: Executive Connection Planning Jakarta JD, full-funnel channel roles, budget/phasing and brand/performance KPIs | B/D: planning capability and role evidence; dedicated direct JD still needed | D: Planning role/title evidence; direct connection-planning JD not yet verified | B: integrated planning/media planner roles | D: Connections Planning category and Media Planner career listings

**Learning objective / concept:** Capstone Connection Strategy menggabungkan problem framing, insight, positioning, journey, channel roles, communication architecture, creative brief, orchestration, effectiveness, dan recommendation. Deck yang baik memperlihatkan logika dari evidence ke keputusan; bukan hanya moodboard atau channel list. Setiap asumsi, estimasi, dan data simulasi harus diberi label, serta rekomendasi perlu menyebut trade-off, owner, dan learning next step.

**Simulated example:** SIMULATED — brand consumer akan meluncurkan produk baru selama 90 hari. Capstone harus menunjukkan bagaimana audience discovery, proposition, creator, paid social, search, retail touchpoint, product page, dan CRM bekerja sebagai satu pengalaman, termasuk bagaimana hasilnya akan dievaluasi.

**Technical depth / workflow:**
- <b>Audit konsistensi.</b> Pastikan problem, insight, proposition, journey, message, channel, dan KPI saling menguatkan.
- <b>Bangun recommendation.</b> Sajikan audience, experience architecture, investment implication, creative need, governance, dan risk.
- <b>Simulasikan trade-off.</b> Bandingkan opsi dengan budget/timeline berbeda dan jelaskan konsekuensi.
- <b>Presentasikan dan defend.</b> Jawab mengapa strategi dipilih, bukti apa yang mendukung, apa yang belum diketahui, dan kapan akan diubah.

**Practice / deliverable:** Susun deck 10–12 slide dan workbook: brief, evidence log, audience/insight, positioning, journey, message house, channel-role matrix, creative brief, measurement/learning agenda, governance, budget implication, dan 30/60/90-day next steps. Labeli synthetic assumptions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa yang membedakan capstone strategis dari moodboard?
   **Expected answer in guide (not independently approved):** Capstone menunjukkan evidence, diagnosis, strategi, channel/message architecture, feasibility, KPI, governance, dan keputusan yang dapat dipertanggungjawabkan.
2. **Q:** Bagaimana menyampaikan uncertainty kepada klien?
   **Expected answer in guide (not independently approved):** Nyatakan assumption, confidence, data gap, sensitivity, dan cara mengujinya; jangan menyamarkan estimasi sebagai fakta.
3. **Q:** Apa ukuran recommendation siap dijalankan?
   **Expected answer in guide (not independently approved):** Ada owner, timeline, asset/approval requirements, budget implication, KPI, QA, risks, dan decision gates.

**Glossary:**
- **Strategic rationale:** Alasan berbasis evidence mengapa strategi dipilih dibanding alternatif.
- **Trade-off:** Konsekuensi ketika memilih satu opsi dibanding opsi lain.
- **Decision gate:** Titik evaluasi untuk lanjut, ubah, atau hentikan aktivitas.
- **Executive narrative:** Alur komunikasi singkat yang menghubungkan masalah, evidence, keputusan, impact, dan risiko.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 3. Media Planner / Digital Planner & Strategist (`media`)

### DPA-T03-CH01 — Media Brief, Business Objective & Campaign Requirements

**Competency ID(s):** T03-C01

**Agency evidence (role-level):** D/A: media planning listings | A/B: media planner/programmatic role evidence | A: Senior Associate Planning JD | A: Jakarta Media Planner JD | D/A: Media Planner career listings and older JD

**Learning objective / concept:** Media Planner menerjemahkan business dan communication objective menjadi media objective dan rencana yang dapat dibeli/dieksekusi. Brief harus mengunci target audience, geography, timing, product availability, budget, KPI, mandatories, competitive context, dan definisi sukses. Planner menanyakan hal yang belum jelas sebelum forecast, karena asumsi target, reach, atau conversion yang tidak terdefinisi akan membuat seluruh plan sulit dipertanggungjawabkan.

**Simulated example:** SIMULATED — klien meminta awareness nasional selama 8 minggu, tetapi budget hanya cukup untuk beberapa kota dan produk tidak tersedia merata. Planner harus mengklarifikasi priority market, distribution footprint, audience, dan peran reach vs frequency sebelum membuat plan.

**Technical depth / workflow:**
- <b>Terjemahkan objective.</b> Pisahkan business goal, communication task, media task, KPI, target, dan periode.
- <b>Lengkapi requirement.</b> Catat target, geography, audience, brand safety, budget, campaign dates, asset, stock, dan approval.
- <b>Uji feasibility.</b> Periksa apakah budget, inventory, timing, dan target masuk akal; dokumentasikan gap.
- <b>Susun clarification log.</b> Tulis pertanyaan, assumption, owner, dan dampak bila jawabannya berubah.

**Practice / deliverable:** Buat media brief intake dan assumption log satu campaign: objective tree, audience, target market, timeline, budget, KPI, mandatories, inventory dependencies, serta lima pertanyaan klarifikasi untuk klien.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda business objective dan media objective?
   **Expected answer in guide (not independently approved):** Business objective adalah hasil bisnis; media objective adalah kontribusi distribusi/eksposur atau aksi media yang mendukung hasil tersebut.
2. **Q:** Mengapa distribution footprint harus dicek sebelum national reach plan?
   **Expected answer in guide (not independently approved):** Media dapat menjangkau wilayah tanpa produk/layanan tersedia; exposure tersebut membuang budget dan dapat merusak experience.
3. **Q:** Apa yang harus dilakukan ketika brief belum lengkap?
   **Expected answer in guide (not independently approved):** Catat gap, minta clarification, nyatakan asumsi sementara, dan jangan menyajikan forecast seolah-olah sudah pasti.

**Glossary:**
- **Media brief:** Ringkasan tujuan, audience, budget, timing, KPI, dan constraint media.
- **Media objective:** Tugas media seperti reach, frequency, qualified traffic, atau conversion.
- **Mandatories:** Persyaratan wajib terkait brand, legal, market, atau campaign.
- **Assumption log:** Catatan asumsi, confidence, owner, dan dampak perubahan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T03-CH02 — Audience Research & Media Consumption

**Competency ID(s):** T03-C01

**Agency evidence (role-level):** D/A: media planning listings | A/B: media planner/programmatic role evidence | A: Senior Associate Planning JD | A: Jakarta Media Planner JD | D/A: Media Planner career listings and older JD

**Learning objective / concept:** Audience planning memilih siapa yang perlu dijangkau, di mana mereka berada, bagaimana konsumsi medianya, dan apakah data yang digunakan cukup relevan. Gunakan behavioral, category, contextual, first-party, survey, syndicated, dan platform data dengan memahami definisi serta bias masing-masing. Audience sizing perlu menyebut universe, target definition, duplication, geography, dan periode. Planner tidak boleh menganggap platform audience estimate sama dengan unique people.

**Simulated example:** SIMULATED — platform A melaporkan audience potential 5 juta, panel media menunjukkan 3,2 juta, dan CRM berisi 400 ribu pelanggan. Angka ini berbeda karena universe, identity, recency, deduplication, dan metodologi; tidak dapat langsung dijumlahkan.

**Technical depth / workflow:**
- <b>Definisikan audience universe.</b> Tentukan target, age/geography/context/behavior, exclusion, dan periode relevansi.
- <b>Audit data sources.</b> Catat sample, methodology, update date, bias, match rate, dan coverage.
- <b>Bandingkan media habits.</b> Hubungkan consumption occasion, device, platform, format, dan attention context.
- <b>Terjemahkan ke planning implication.</b> Tentukan reach opportunity, overlap, audience priority, dan risk.

**Practice / deliverable:** Buat audience landscape berisi 2–3 segmen, estimasi universe dengan source caveat, media consumption, occasion, platform role, duplication risk, dan implikasi terhadap channel selection.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa audience estimate tidak bisa langsung dijumlahkan lintas platform?
   **Expected answer in guide (not independently approved):** Universe, identity resolution, time window, deduplication, dan metode pengukuran berbeda; hasilnya dapat overlap.
2. **Q:** Apa fungsi first-party data dalam media planning?
   **Expected answer in guide (not independently approved):** Membantu memahami existing customers/consented audience dan membangun targeting atau suppression, dengan governance serta izin yang sesuai.
3. **Q:** Mengapa data source harus punya tanggal dan metodologi?
   **Expected answer in guide (not independently approved):** Audience behavior dan platform definitions berubah; tanpa recency/method, planner tidak bisa menilai reliability estimate.

**Glossary:**
- **Universe:** Populasi total yang menjadi dasar audience estimate.
- **Duplication:** Audience yang sama muncul pada lebih dari satu channel/source.
- **Reach universe:** Populasi target yang dapat dijangkau menurut definisi dan sumber tertentu.
- **First-party data:** Data yang diperoleh langsung dari interaksi dengan organisasi sesuai consent/legal basis.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T03-CH03 — Media Landscape, Inventory & Channel Evaluation

**Competency ID(s):** T03-C02

**Agency evidence (role-level):** D/A: media planning listings | A/B: media planner/programmatic role evidence | A: Senior Associate Planning JD | A: Jakarta Media Planner JD | D/A: Media Planner career listings and older JD

**Learning objective / concept:** Media landscape evaluation menilai channel, format, placement, publisher, inventory quality, audience fit, environment, availability, cost model, dan measurement. Channel yang sama dapat memiliki kualitas berbeda menurut placement dan context. Planner perlu membedakan media owner/publisher, platform self-serve, network, DSP, dan reseller; pahami siapa mengontrol inventory, data, ad serving, brand safety, dan laporan delivery.

**Simulated example:** SIMULATED — dua publisher menawarkan audience profile yang mirip, tetapi Publisher A memiliki placement premium dengan viewability tinggi dan Publisher B memiliki low-cost inventory dengan data transparency terbatas. Keputusan tidak cukup membandingkan CPM.

**Technical depth / workflow:**
- <b>Inventarisasi opsi.</b> Catat channel, publisher, placement, format, buying method, availability, audience, dan geo.
- <b>Nilai kualitas inventory.</b> Periksa context, viewability, IVT, brand safety, transparency, audience methodology, dan measurement coverage.
- <b>Bandingkan cost apples-to-apples.</b> Samakan unit, deliverable, flight, currency, fee, added value, dan billable basis.
- <b>Dokumentasikan suitability.</b> Nyatakan kapan inventory cocok/tidak cocok dan risiko supply.

**Practice / deliverable:** Buat inventory evaluation sheet minimal enam opsi: audience fit, placement/context, buying type, rate basis, projected delivery, quality controls, reporting, exclusions, dan recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa CPM murah belum tentu inventory bernilai?
   **Expected answer in guide (not independently approved):** Cost per thousand tidak mengukur viewability, IVT, contextual suitability, attention, audience relevance, atau outcomes.
2. **Q:** Apa beda publisher direct dan DSP inventory?
   **Expected answer in guide (not independently approved):** Direct dibeli melalui media owner/representative dengan terms spesifik; DSP mengakses inventory melalui platform dan mekanisme auction/deal.
3. **Q:** Apa yang dimaksud apples-to-apples media comparison?
   **Expected answer in guide (not independently approved):** Menyamakan scope, format, audience, dates, impressions/reach, fee, measurement, dan delivery terms sebelum membandingkan harga.

**Glossary:**
- **Inventory:** Kesempatan/slot media yang tersedia untuk penayangan iklan.
- **Media owner:** Pihak yang memiliki atau mengelola media inventory.
- **Viewability:** Apakah impression memenuhi kriteria dapat terlihat sesuai standar yang dipakai.
- **Billable basis:** Definisi delivery yang menjadi dasar penagihan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T03-CH04 — Media Objective, KPI & Channel Roles

**Competency ID(s):** T03-C02

**Agency evidence (role-level):** D/A: media planning listings | A/B: media planner/programmatic role evidence | A: Senior Associate Planning JD | A: Jakarta Media Planner JD | D/A: Media Planner career listings and older JD

**Learning objective / concept:** Media objective dan KPI harus berasal dari funnel serta peran channel. Awareness dapat menggunakan reach, frequency, viewable impressions, atau brand metrics; consideration bisa menggunakan qualified visits/engagement; performance menggunakan conversion, CPA, atau revenue. KPI harus mempunyai formula, unit, denominator, source, attribution window, target, dan guardrail. Jangan mencampur metric platform yang tidak comparable tanpa normalisasi.

**Simulated example:** SIMULATED — campaign video mencapai 2 juta impressions tetapi hanya 45% eligible viewable impressions. Bila objective awareness dengan target viewability, KPI yang relevan bukan total impressions saja; bila objective action, perlu downstream site quality.

**Technical depth / workflow:**
- <b>Susun KPI hierarchy.</b> Tentukan business outcome, media primary KPI, diagnostic metrics, dan guardrails.
- <b>Definisikan formula.</b> Catat numerator, denominator, unit, window, source, attribution rule, serta currency.
- <b>Tetapkan target realistis.</b> Gunakan historical data/benchmark yang relevan dan jelaskan confidence.
- <b>Rancang reporting.</b> Tentukan cadence, dimensions, owners, alert threshold, dan decision trigger.

**Practice / deliverable:** Buat KPI dictionary untuk minimal enam media metric dan susun objective-to-KPI tree. Sertakan rumus, sumber, unit, target, guardrail, window, dan alasan pemilihan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa KPI perlu denominator dan window?
   **Expected answer in guide (not independently approved):** Tanpa denominator/periode yang jelas, angka tidak dapat dibandingkan dan dapat menyesatkan.
2. **Q:** Apa beda primary dan diagnostic metric?
   **Expected answer in guide (not independently approved):** Primary menentukan keberhasilan; diagnostic membantu menjelaskan penyebab perubahan primary metric.
3. **Q:** Mengapa CTR tidak boleh menjadi KPI universal?
   **Expected answer in guide (not independently approved):** CTR bergantung pada format, objective, placement, audience, dan click definition; ia tidak selalu mencerminkan business outcome.

**Glossary:**
- **Primary KPI:** Metrik utama yang merepresentasikan objective.
- **Diagnostic metric:** Metrik pendukung untuk menjelaskan perubahan performa.
- **Guardrail:** Metrik pembatas agar optimasi tidak merusak kualitas/outcome lain.
- **Attribution window:** Periode ketika touchpoint dapat menerima credit atas conversion.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T03-CH05 — Media Mix, Budget Allocation & Investment Rationale

**Competency ID(s):** T03-C03

**Agency evidence (role-level):** D/A: media planning listings | A/B: media planner/programmatic role evidence | A: Senior Associate Planning JD | A: Jakarta Media Planner JD | D/A: Media Planner career listings and older JD

**Learning objective / concept:** Media mix mengalokasikan investasi antar channel dan format berdasarkan audience, task, reach/intent, cost, expected contribution, creative, measurement, dan risiko. Budget allocation bukan pembagian rata atau sekadar mengejar ROAS platform. Planner membuat scenario dan menjelaskan marginal trade-off: apa yang hilang ketika suatu channel dikurangi, dan apa yang diperoleh ketika budget dipindah. Forecast harus menampilkan input, range, dan uncertainty.

**Simulated example:** SIMULATED — budget Rp1 miliar dibagi ke Search, Social, Video, dan Publisher Direct. Menambah Search dapat meningkatkan intent capture tetapi memiliki volume terbatas; menambah Social/Video dapat memperluas demand dan branded search. Mix diuji dengan scenario, bukan dipastikan dari satu forecast.

**Technical depth / workflow:**
- <b>Tetapkan channel task.</b> Kaitkan setiap channel dengan journey dan outcome yang ditargetkan.
- <b>Bangun allocation scenarios.</b> Buat conservative/base/stretch beserta assumptions, expected delivery, risk, dan trade-off.
- <b>Periksa diminishing returns.</b> Nilai marginal cost, audience saturation, frequency, inventory limits, dan performance curve.
- <b>Justifikasi rekomendasi.</b> Hubungkan alokasi dengan business objective, evidence, confidence, dan decision gates.

**Practice / deliverable:** Buat tiga media-mix scenarios dengan budget total tetap. Untuk setiap skenario tulis allocation, KPI, forecast range, assumptions, risks, marginal trade-off, dan kondisi realokasi.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda average ROAS dan marginal ROAS?
   **Expected answer in guide (not independently approved):** Average menilai hasil keseluruhan; marginal mengukur hasil tambahan dari satu unit budget berikutnya dan lebih relevan untuk scaling.
2. **Q:** Mengapa satu channel dengan ROAS tertinggi tidak otomatis menerima seluruh budget?
   **Expected answer in guide (not independently approved):** Volume, incrementality, role dalam demand creation, saturation, overlap, margin, dan channel risk dapat membuat return marginal turun.
3. **Q:** Apa yang wajib ada dalam forecast?
   **Expected answer in guide (not independently approved):** Input, formula, time window, range, source, confidence, scenario, serta penjelasan bahwa forecast bukan guaranteed delivery.

**Glossary:**
- **Media mix:** Kombinasi channel, format, placement, dan investasi.
- **Marginal return:** Hasil tambahan dari tambahan satu unit resource/budget.
- **Diminishing returns:** Kondisi ketika tambahan spend memberi output/return yang makin kecil.
- **Scenario planning:** Perbandingan beberapa konfigurasi berdasarkan asumsi dan kondisi berbeda.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T03-CH06 — Reach, Frequency, GRP, CPM, CPP & Forecasting

**Competency ID(s):** T03-C03, T03-C04

**Agency evidence (role-level):** D/A: media planning listings | A/B: media planner/programmatic role evidence | A: Senior Associate Planning JD | A: Jakarta Media Planner JD | D/A: Media Planner career listings and older JD

**Learning objective / concept:** Reach dan frequency mengukur distribusi kepada audience; CPM/CPC/CPP mengukur biaya menurut unit delivery; GRP/TRP mengukur tekanan iklan berdasarkan rating audience. Semua metrik bergantung pada universe, source, methodology, period, duplication, dan currency. Forecast perlu membedakan unique reach dengan impressions serta rata-rata frequency dengan distribusi frekuensi. Jangan membandingkan GRP, platform reach, dan panel estimates tanpa metodologi sepadan.

**Simulated example:** SIMULATED — plan memiliki 10 juta impressions untuk universe 2 juta orang. Frequency 5 hanya benar jika impressions dan unique reach menggunakan definisi, audience, serta periode yang sama; ia tidak menunjukkan distribusi individual yang merata.

**Technical depth / workflow:**
- <b>Tetapkan universe.</b> Nyatakan target population, geography, panel/platform source, dan period.
- <b>Hitung cost metrics.</b> CPM, CPC, CPP, dan cost per reach dihitung dari unit serta delivery yang didefinisikan.
- <b>Forecast reach/frequency.</b> Pertimbangkan duplication, overlap, inventory, exposure distribution, dan uncertainty.
- <b>Bandingkan lintas media.</b> Catat metodologi TV/OOH/digital, rating source, audience base, dan caveat.

**Practice / deliverable:** Buat media forecast dengan CPM, reach, frequency, GRP/TRP, dan CPP untuk skenario latihan. Tulis source/universe, formula, assumptions, duplication caveat, dan sensitivity saat reach turun.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda impressions dan reach?
   **Expected answer in guide (not independently approved):** Impressions menghitung exposure; reach menghitung individu/household unik menurut metodologi yang digunakan.
2. **Q:** Apa arti GRP?
   **Expected answer in guide (not independently approved):** Gross Rating Points mengukur total rating points berdasarkan target universe; dapat mencakup repeated exposure.
3. **Q:** Mengapa platform reach tidak selalu dapat dijumlahkan lintas channel?
   **Expected answer in guide (not independently approved):** Setiap platform dapat menggunakan identity, deduplication, universe, dan time window berbeda.

**Glossary:**
- **Reach:** Jumlah orang/household unik yang terpapar.
- **Frequency:** Rata-rata exposure per unit reach dalam periode.
- **GRP/TRP:** Gross/Target Rating Points sebagai ukuran tekanan media terhadap universe.
- **CPP:** Cost per rating point, biaya untuk satu rating point.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T03-CH07 — Media Flowchart, Flighting & Scenario Planning

**Competency ID(s):** T03-C05

**Agency evidence (role-level):** D/A: media planning listings | A/B: media planner/programmatic role evidence | A: Senior Associate Planning JD | A: Jakarta Media Planner JD | D/A: Media Planner career listings and older JD

**Learning objective / concept:** Media flowchart menerjemahkan strategi dan budget menjadi jadwal, channel, format, weight, target, owner, dan flight dates. Pola continuity, flighting, dan pulsing berbeda sesuai seasonality, demand, launch moment, inventory, serta budget. Scenario planning menguji perubahan tanggal, stock, price promotion, atau media availability. Flowchart bukan dekorasi; ia menjadi alat koordinasi planning, buying, creative, client, dan finance.

**Simulated example:** SIMULATED — brand memiliki tiga burst penjualan dan satu periode low-demand. Continuity menjaga baseline presence, flighting memusatkan spend pada burst, sedangkan pulsing menggabungkan keduanya. Pilihan harus didukung sales calendar dan evidence demand.

**Technical depth / workflow:**
- <b>Bangun kalender.</b> Tentukan phase, date, channel, format, audience, weight, spend, objective, dan asset deadline.
- <b>Pilih flighting logic.</b> Cocokkan continuity/pulsing/flighting dengan seasonality dan objective.
- <b>Modelkan scenario.</b> Uji launch delay, budget cut, inventory shortage, dan creative readiness.
- <b>Sinkronkan dependencies.</b> Tandai approval, publisher booking, trafficking, tracking, stock, serta owner.

**Practice / deliverable:** Buat flowchart 8 minggu dengan channel/format, spend weighting, flighting, asset deadline, dependencies, dan three contingency scenarios. Tulis change-control rules jika dates atau inventory berubah.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa risiko flighting tanpa stock calendar?
   **Expected answer in guide (not independently approved):** Iklan dapat mendorong demand saat produk tidak tersedia dan membuang budget atau menurunkan customer trust.
2. **Q:** Kapan pulsing lebih tepat daripada full continuity?
   **Expected answer in guide (not independently approved):** Saat baseline presence dibutuhkan tetapi demand/seasonality memiliki momen puncak yang memerlukan intensitas tambahan.
3. **Q:** Apa fungsi dependency mapping?
   **Expected answer in guide (not independently approved):** Memastikan booking, creative, approvals, tags, stock, dan owner siap sesuai urutan launch.

**Glossary:**
- **Flowchart:** Visualisasi timing dan alokasi channel/format sepanjang campaign.
- **Continuity:** Penayangan relatif konsisten sepanjang periode.
- **Pulsing:** Kombinasi baseline presence dan burst intensity.
- **Dependency:** Prasyarat yang harus terpenuhi sebelum aktivitas dimulai.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T03-CH08 — Buying Brief, Media Owner Coordination & Activation Handoff

**Competency ID(s):** T03-C01, T03-C05

**Agency evidence (role-level):** D/A: media planning listings | A/B: media planner/programmatic role evidence | A: Senior Associate Planning JD | A: Jakarta Media Planner JD | D/A: Media Planner career listings and older JD

**Learning objective / concept:** Buying brief adalah jembatan antara keputusan planner dan eksekusi media buyer/investment, bukan instruksi samar. Brief perlu memuat objective, target, channel role, budget, dates, format, audience, geography, KPI, benchmark, mandatory, exclusions, creative, measurement, dan approval. Planner juga memastikan rekomendasi commercial dari publisher/buyer dapat dibandingkan serta tetap sesuai rationale media plan.

**Simulated example:** SIMULATED — planner menyerahkan rencana video dengan budget dan target reach, tetapi tidak menyebut skippable/non-skippable, view definition, audience, placement exclusion, atau tracking. Buyer tidak bisa membooking dan mengukur dengan benar tanpa clarification.

**Technical depth / workflow:**
- <b>Terjemahkan plan ke brief.</b> Detailkan channel, inventory, format, audience, budget, dates, KPI, specs, tracking, dan constraints.
- <b>Koordinasikan partner.</b> Minta availability, rate, delivery definition, measurement, value-add, cancellation, dan makegood terms.
- <b>Bandingkan proposal.</b> Normalisasi rate, audience, formats, delivery, fee, bonus, dan quality assurance.
- <b>Handoff dan sign-off.</b> Pastikan buyer, Ad Ops, creative, data, client, dan finance memahami owner dan acceptance criteria.

**Practice / deliverable:** Buat buying brief, RFP question list, apples-to-apples proposal comparison, owner/RACI table, dan handoff checklist untuk satu digital + publisher package.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda media planner dan media buyer?
   **Expected answer in guide (not independently approved):** Planner merancang channel/budget/forecast dan rationale; buyer melakukan negotiation, booking, buying terms, serta stewardship sesuai mandat.
2. **Q:** Mengapa rate card tidak cukup untuk menilai proposal?
   **Expected answer in guide (not independently approved):** Perlu delivery basis, audience, placement quality, fees, value-add, dates, measurement, cancellation, serta contractual makegood.
3. **Q:** Apa bukti buying handoff siap?
   **Expected answer in guide (not independently approved):** Buyer menerima brief final, inventory/format, budget/date, KPI, spec, tracking, approval, terms, dan escalation owner.

**Glossary:**
- **Buying brief:** Instruksi operasional untuk membeli media sesuai media plan.
- **RFP:** Request for Proposal kepada media owner/vendor.
- **Makegood:** Kompensasi delivery yang kurang sesuai ketentuan kontrak.
- **RACI:** Pembagian accountable/responsible/consulted/informed.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T03-CH09 — Post-Campaign Analysis & Media Effectiveness

**Competency ID(s):** T03-C05

**Agency evidence (role-level):** D/A: media planning listings | A/B: media planner/programmatic role evidence | A: Senior Associate Planning JD | A: Jakarta Media Planner JD | D/A: Media Planner career listings and older JD

**Learning objective / concept:** Post-campaign analysis membandingkan plan, booked, delivered, measured, dan billed results. Evaluasi memisahkan under/over-delivery, cost variance, audience quality, creative performance, reach/frequency, placement quality, outcomes, serta data limitations. Planner harus menjelaskan mengapa hasil berubah, apa bukti pendukung, apa faktor eksternal, dan apa yang direkomendasikan untuk flight berikutnya.

**Simulated example:** SIMULATED — campaign mencapai impressions 8% di bawah plan namun CPM 12% lebih rendah. Hasil tidak otomatis baik: reach mungkin turun, placement mungkin berbeda, atau frequency meningkat. Evaluasi harus mengecek audience, quality, cost, dan outcome bersama.

**Technical depth / workflow:**
- <b>Reconcile delivery.</b> Bandingkan planned/booked/delivered/billed dengan definisi dan cut-off yang sama.
- <b>Diagnose variance.</b> Segmentasikan channel, placement, audience, date, creative, dan supply.
- <b>Read effectiveness.</b> Hubungkan output media dengan site/brand/sales outcomes sambil membedakan attribution dan incrementality.
- <b>Recommend next flight.</b> Tulis change, expected mechanism, impact, risk, owner, dan learning question.

**Practice / deliverable:** Buat post-buy report berisi plan-vs-actual, reach/frequency, cost variance, placement quality, outcome, discrepancy note, root-cause hypothesis, dan tiga next-flight decisions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa CPM turun belum tentu kemenangan?
   **Expected answer in guide (not independently approved):** CPM lebih murah bisa disebabkan placement/audience quality menurun atau delivery bergeser; cek reach, attention, fraud, conversion, dan margin.
2. **Q:** Apa beda delivery analysis dan effectiveness analysis?
   **Expected answer in guide (not independently approved):** Delivery menilai pemenuhan media plan; effectiveness menilai perubahan audience/business outcome.
3. **Q:** Apa syarat rekomendasi optimization yang kuat?
   **Expected answer in guide (not independently approved):** Root cause evidence, change spesifik, expected mechanism, KPI/guardrail, owner, dan batas inferensi.

**Glossary:**
- **Post-buy:** Evaluasi pembelian dan delivery setelah campaign.
- **Variance:** Perbedaan antara plan/target dan hasil aktual.
- **Root-cause hypothesis:** Dugaan penyebab perubahan yang perlu diuji dengan data.
- **Effectiveness:** Derajat tercapainya outcome yang ditetapkan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T03-CH10 — Media Planning Capstone

**Competency ID(s):** T03-C01, T03-C05

**Agency evidence (role-level):** D/A: media planning listings | A/B: media planner/programmatic role evidence | A: Senior Associate Planning JD | A: Jakarta Media Planner JD | D/A: Media Planner career listings and older JD

**Learning objective / concept:** Capstone Media Planning harus memperlihatkan alur dari brief hingga rekomendasi post-buy. Nilai utama bukan banyaknya chart, tetapi konsistensi audience, role, budget, forecast, flighting, buying handoff, KPI, dan evaluasi. Setiap angka diberi sumber atau label SIMULATED. Planner perlu mampu menjelaskan trade-off antara reach, frequency, quality, cost, timing, serta business objective.

**Simulated example:** SIMULATED — brand FMCG ingin meluncurkan produk di 8 kota dengan budget 2 miliar rupiah selama 10 minggu. Tim harus memilih channel dan media owner, menyusun scenario, menetapkan reach goal, menyiapkan buying brief, serta merancang cara evaluasi.

**Technical depth / workflow:**
- <b>Integrasikan analysis.</b> Hubungkan brief, audience, media landscape, objective, KPI, dan channel roles.
- <b>Susun plan dan forecast.</b> Buat budget, mix, reach/frequency, cost, flowchart, dan scenarios.
- <b>Rancang execution governance.</b> Siapkan brief, owner, timeline, approvals, measurement, dan contingency.
- <b>Present dan defend.</b> Jelaskan alasan, trade-off, assumptions, risks, dan post-buy learning.

**Practice / deliverable:** Siapkan media plan 10 slide plus workbook: brief, audience, inventory evaluation, channel roles, budget scenarios, reach/frequency forecast, flowchart, buying brief, KPI dashboard specification, post-buy evaluation plan, dan assumptions log.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa yang membuat media plan dapat dipertanggungjawabkan?
   **Expected answer in guide (not independently approved):** Setiap keputusan terkait audience, task, inventory, budget, forecast, KPI, dan timing memiliki rationale serta sumber/asumsi.
2. **Q:** Mengapa forecast perlu scenario range?
   **Expected answer in guide (not independently approved):** Inventory, audience, price, competition, creative readiness, dan response tidak pasti; satu angka tunggal memberi kepastian palsu.
3. **Q:** Apa yang harus disiapkan untuk presentasi klien?
   **Expected answer in guide (not independently approved):** Recommendation, logic, budget, KPI, timing, risks, assumptions, dependencies, owner, dan keputusan yang diminta.

**Glossary:**
- **Media rationale:** Alasan audience/channel/inventory dan investasi dipilih.
- **Sensitivity analysis:** Uji bagaimana hasil berubah saat input/asumsi berubah.
- **Post-buy recommendation:** Keputusan perubahan media berdasarkan hasil setelah campaign.
- **Investment trade-off:** Konsekuensi antar outcome saat memilih alokasi investasi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 4. Paid Search / SEM Specialist (`paidsearch`)

### DPA-T04-CH01 — Search Advertising Ecosystem & Auction Fundamentals

**Competency ID(s):** T04-C01

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Paid Search menangkap intent yang diekspresikan melalui query. Specialist harus memahami auction eligibility, Ad Rank, keyword/query, ad relevance, landing experience, conversion signal, bidding, dan budget. Search term bukan keyword target; platform dapat mencocokkan query melalui variasi. Performance dinilai dari kualitas demand dan kontribusi bisnis, bukan hanya klik atau impression.

**Simulated example:** SIMULATED — keyword broad 'asuransi mobil' menghasilkan 2.000 klik, tetapi banyak search term mencari pekerjaan dan definisi. Negative keyword dan landing page intent match memperbaiki kualitas traffic meski volume klik turun.

**Technical depth / workflow:**
- <b>Pahami auction.</b> Pelajari eligibility, Ad Rank, bid, quality/relevance signals, budget, dan auction insights.
- <b>Audit search intent.</b> Kelompokkan query informational, commercial, transactional, branded, competitor, dan local.
- <b>Definisikan conversion.</b> Bedakan primary conversion, micro-conversion, value, attribution window, dan offline outcome.
- <b>Hubungkan intent ke landing page.</b> Pastikan ad promise dan page content menjawab query yang sama.

**Practice / deliverable:** Buat search ecosystem map untuk satu kategori: query types, auction factors, account actors, conversion actions, landing-page match, dan KPI chain. Gunakan sample query nyata atau label SIMULATED.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa search bukan sekadar bidding keyword?
   **Expected answer in guide (not independently approved):** Auction, query intent, relevance, landing experience, conversion signal, budget, dan competition bersama-sama menentukan delivery serta outcome.
2. **Q:** Apa perbedaan keyword dengan search term?
   **Expected answer in guide (not independently approved):** Keyword adalah target/setting yang dipilih advertiser; search term adalah query aktual yang memicu iklan.
3. **Q:** Mengapa conversion harus didefinisikan sebelum campaign?
   **Expected answer in guide (not independently approved):** Bidding dan reporting belajar dari conversion signal; event yang salah mengarahkan algoritma serta keputusan budget ke outcome yang keliru.

**Glossary:**
- **Ad Rank:** Sistem penentuan eligibility/position yang menggunakan bid, quality, context, dan auction factors.
- **Search term:** Query aktual yang diketik/diekspresikan pengguna.
- **Search intent:** Tujuan atau kebutuhan di balik query.
- **Primary conversion:** Tindakan utama yang merepresentasikan nilai campaign.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH02 — Search Intent, Keyword Research & Competitor Analysis

**Competency ID(s):** T04-C02

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Keyword research menyusun peluang query berdasarkan intent, relevance, volume, competition, value, geography, seasonality, dan landing-page readiness. Search volume tidak sama dengan demand yang dapat dikonversi; keyword populer bisa tidak relevan, terlalu luas, atau punya economics buruk. Competitor ad research membantu melihat positioning dan SERP, tetapi tidak membuktikan biaya atau profit pesaing.

**Simulated example:** SIMULATED — keyword 'kursus digital marketing' memiliki volume tinggi, namun target course berbayar untuk profesional mungkin lebih cocok dengan query 'sertifikasi digital marketing untuk karyawan'. Intent dan willingness-to-pay berbeda.

**Technical depth / workflow:**
- <b>Mulai dari seed.</b> Turunkan produk, need, category terms, problems, brands, locations, dan language variants.
- <b>Kelompokkan intent.</b> Tandai informational/commercial/transactional, urgency, audience fit, dan funnel stage.
- <b>Nilai economics.</b> Perkirakan CPC, conversion likelihood, margin/value, search volume, dan competition; jangan menganggap tools sebagai ground truth.
- <b>Bangun keyword-to-page map.</b> Tentukan landing destination, message, negative risk, dan priority.

**Practice / deliverable:** Buat 30-keyword intent map dengan cluster, priority, expected query type, CPC/volume source, landing page, negative candidates, dan assumptions. Buat competitor SERP review untuk tiga query utama.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa volume tinggi tidak selalu berarti prioritas tinggi?
   **Expected answer in guide (not independently approved):** Volume tanpa intent, conversion potential, margin, landing fit, dan economics bisa menghasilkan traffic mahal tetapi tidak bernilai.
2. **Q:** Bagaimana mengelompokkan keyword?
   **Expected answer in guide (not independently approved):** Berdasarkan intent, product/service, need, brand, competitor, geography, dan funnel context.
3. **Q:** Apa batas competitor ad analysis?
   **Expected answer in guide (not independently approved):** Ad copy/visibility adalah observasi; tidak memberi akses ke bid, actual CPA, margin, atau conversion results pesaing.

**Glossary:**
- **Seed keyword:** Istilah awal untuk memperluas riset query.
- **Keyword cluster:** Kelompok query dengan intent/topik yang saling terkait.
- **Commercial intent:** Query yang menunjukkan riset atau perbandingan sebelum pembelian.
- **SERP:** Search Engine Results Page, halaman hasil pencarian.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH03 — Account, Campaign & Ad Group Architecture

**Competency ID(s):** T04-C03

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Campaign architecture mengatur hubungan account, campaign, ad group, keyword, ads, assets, audience, geography, language, budget, conversion action, dan landing page. Struktur yang baik memberi kontrol cukup tanpa memecah data terlalu kecil. Naming taxonomy memudahkan QA dan reporting; pemilihan campaign type harus mengikuti objective, channel inventory, feed, conversion readiness, dan kemampuan kontrol.

**Simulated example:** SIMULATED — satu campaign terlalu banyak menggabungkan branded, generic, dan competitor terms sehingga budget generic terserap brand traffic. Pemisahan diperlukan untuk visibility dan budget control, tetapi membagi setiap keyword ke campaign sendiri akan memfragmentasi learning.

**Technical depth / workflow:**
- <b>Definisikan boundaries.</b> Pisahkan brand/non-brand, geography, product line, language, objective, budget, atau intent jika ada alasan operasional.
- <b>Susun ad group.</b> Kelompokkan theme dengan ad relevance dan page fit; hindari satu ad group terlalu luas atau terlalu sempit.
- <b>Rancang naming.</b> Gunakan brand_market_objective_campaign_type_product_audience_version.
- <b>Validasi architecture.</b> Periksa negative overlap, budget control, conversion settings, asset compatibility, dan reporting.

**Practice / deliverable:** Bangun account map untuk brand latihan: account settings, 3 campaign, ad groups, keyword clusters, ad assets, landing pages, conversion actions, naming, dan QA checks. Jelaskan alasan struktur.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa tidak membuat satu campaign untuk setiap keyword?
   **Expected answer in guide (not independently approved):** Fragmentasi dapat membagi budget/conversion signals dan membuat learning serta management tidak efisien.
2. **Q:** Kapan campaign perlu dipisah?
   **Expected answer in guide (not independently approved):** Saat objective, budget, geo, product economics, brand protection, atau bidding strategy membutuhkan kontrol berbeda.
3. **Q:** Apa tujuan naming taxonomy?
   **Expected answer in guide (not independently approved):** Menjamin identifikasi objek, konsistensi laporan, QA, perubahan, dan handover antar operator.

**Glossary:**
- **Campaign:** Unit pengelolaan objective/budget/settings.
- **Ad group:** Kelompok keyword/ads bertema tertentu dalam campaign.
- **Naming taxonomy:** Aturan penamaan objek yang konsisten.
- **Negative overlap:** Situasi keyword/negative settings saling menghalangi traffic yang seharusnya diterima.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH04 — Match Types, Negative Keywords & Search Terms

**Competency ID(s):** T04-C02, T04-C04

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Match type mengatur seberapa luas keyword dapat mencocokkan query, tetapi tidak boleh dianggap sebagai exact string match sederhana. Search terms report menunjukkan query yang benar-benar memicu iklan dan menjadi sumber optimasi. Negative keyword melindungi relevance, budget, brand safety, serta query intent. Pemilihan negatives harus hati-hati agar tidak memblokir query bernilai.

**Simulated example:** SIMULATED — broad match 'software payroll' memicu query 'contoh slip gaji' dan 'lowongan HR'. Sebagian dapat relevan untuk konten, tetapi tidak untuk sales demo. Negative harus dipilih berdasarkan objective, bukan hanya karena query tidak identik.

**Technical depth / workflow:**
- <b>Pahami matching behavior.</b> Pelajari broad/phrase/exact menurut dokumentasi terkini serta sinyal intent/close variants.
- <b>Audit search terms.</b> Kategorikan relevant, irrelevant, ambiguous, competitor, informational, dan conversion quality.
- <b>Bangun negative taxonomy.</b> Bedakan account/campaign/ad-group negatives, brand exclusions, job-seeker, free-only, dan non-market terms.
- <b>Review secara berulang.</b> Periksa query volume, spend, conversion quality, false blocking, dan perubahan behavior.

**Practice / deliverable:** Buat search-term mining worksheet dari data latihan minimal 100 rows: intent, relevance, cost, conversions, value, action (keep/negative/observe), rationale, serta owner/date. Tulis daftar negative beserta risiko false positive.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa fungsi search terms report?
   **Expected answer in guide (not independently approved):** Menunjukkan query yang memicu iklan untuk menilai intent, relevansi, biaya, conversion quality, dan peluang keyword/negative.
2. **Q:** Apa risiko negative keyword terlalu agresif?
   **Expected answer in guide (not independently approved):** Query bernilai dapat terblokir sehingga reach, volume, dan learning berkurang.
3. **Q:** Mengapa match type harus dicek di dokumentasi terbaru?
   **Expected answer in guide (not independently approved):** Platform mengubah matching behavior dan close variants; label match tidak selalu berarti literal match.

**Glossary:**
- **Match type:** Aturan kedekatan/intent yang menentukan query eligibility.
- **Negative keyword:** Istilah yang mengecualikan query sesuai scope setting.
- **Search terms report:** Laporan query aktual yang memicu iklan.
- **False positive exclusion:** Negative yang salah mengecualikan pencarian bernilai.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH05 — Search Ad Copy, Assets & Landing Page Relevance

**Competency ID(s):** T04-C05

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Search ad copy harus menjawab query, menyampaikan benefit, memberi proof, dan mengarahkan ke landing page yang sesuai. Responsive Search Ads menguji kombinasi headline/description; assets menambah informasi dan action. Message match mengurangi cognitive friction: kata, offer, price, eligibility, dan CTA pada iklan harus selaras dengan destination page. Klaim harus dapat dibuktikan dan sesuai policy.

**Simulated example:** SIMULATED — iklan menjanjikan 'gratis konsultasi hari ini' tetapi landing page meminta pembayaran dan jadwal minggu depan. CTR bisa tinggi karena janji menarik, tetapi conversion jatuh dan trust rusak.

**Technical depth / workflow:**
- <b>Rumuskan message angle.</b> Gunakan search intent, differentiator, benefit, proof, objection, dan CTA.
- <b>Bangun asset set.</b> Tulis headlines/descriptions yang saling melengkapi, hindari repetisi dan unsupported claims.
- <b>Audit extensions/assets.</b> Periksa sitelinks, callouts, snippets, image/call assets bila tersedia dan relevan.
- <b>QA landing page.</b> Cocokkan offer, page title, speed, mobile usability, form, legal text, and conversion path.

**Practice / deliverable:** Buat dua RSA concept untuk satu ad group: masing-masing 10–15 headline draft, empat description, assets, keyword theme, LP URL, proof requirement, dan policy checklist. Tandai klaim yang memerlukan substantiation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa yang dimaksud message match?
   **Expected answer in guide (not independently approved):** Konsistensi antara query, ad promise, offer, dan konten landing page sehingga audience menemukan yang dijanjikan.
2. **Q:** Mengapa semua headline tidak harus memiliki CTA yang sama?
   **Expected answer in guide (not independently approved):** Asset perlu melengkapi benefit, proof, offer, dan action; repetisi mengurangi kombinasi informasi yang tersedia.
3. **Q:** Apa yang dilakukan jika CTR naik tetapi CVR turun?
   **Expected answer in guide (not independently approved):** Audit query mix, promise-to-page match, audience quality, page experience, offer, dan tracking sebelum menyimpulkan creative lebih baik.

**Glossary:**
- **RSA:** Responsive Search Ad yang mengombinasikan asset teks berdasarkan auction/context.
- **Ad assets:** Informasi atau format tambahan yang memperkaya iklan.
- **Message match:** Kesesuaian query/ad message dengan landing page.
- **Substantiation:** Bukti yang mendukung klaim advertising.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH06 — Campaign Types, Bidding Strategy & Budget Management

**Competency ID(s):** T04-C03, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Bidding dan budget menentukan cara platform berpartisipasi dalam auction dan mengejar conversion/value. Manual, Maximize Clicks, Maximize Conversions, target CPA, Maximize Conversion Value, dan target ROAS memiliki kebutuhan sinyal serta trade-off berbeda. Smart bidding memerlukan conversion tracking yang sehat, volume yang memadai, dan definisi value yang tepat. Budget pacing harus dipantau bersama spend, impression share, marginal CPA/ROAS, dan business margin.

**Simulated example:** SIMULATED — target tROAS ditetapkan terlalu tinggi untuk akun baru tanpa conversion history. Delivery menjadi terbatas. Sebelum melonggarkan target, tim harus memvalidasi purchase event, value, bidding objective, budget, query mix, dan landing-page experience.

**Technical depth / workflow:**
- <b>Pilih strategy sesuai goal.</b> Tentukan click, lead, purchase, value, impression share, atau reach objective.
- <b>Periksa signal readiness.</b> Validasi conversion action, volume, value, consent, deduplication, dan attribution window.
- <b>Set budget/pacing guardrails.</b> Pantau daily spend, budget limited, lost IS, CPA/value, margin, dan seasonality.
- <b>Ubah secara terkendali.</b> Catat baseline, change, expected effect, observation window, rollback/decision criteria.

**Practice / deliverable:** Simulasikan tiga bid strategies untuk satu campaign. Isi input signal, required data, budget, expected trade-off, monitoring metrics, guardrail, dan perubahan yang dilakukan pada kasus underdelivery/overspend.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa smart bidding tidak memperbaiki conversion tracking yang rusak?
   **Expected answer in guide (not independently approved):** Algoritma mengoptimalkan signal yang diberikan; event salah/duplikat membuat learning dan budget allocation ikut salah.
2. **Q:** Apa risiko menetapkan target ROAS terlalu tinggi?
   **Expected answer in guide (not independently approved):** Delivery dapat menyempit atau berhenti mengejar peluang yang masih profitable pada target bisnis sebenarnya.
3. **Q:** Apa yang dipantau selain average CPA?
   **Expected answer in guide (not independently approved):** Conversion value, margin, volume, query quality, impression share, budget pacing, new-customer share, dan marginal performance.

**Glossary:**
- **Smart bidding:** Strategi bid otomatis yang mengoptimalkan outcome berdasarkan signals.
- **tCPA:** Target cost per acquisition.
- **tROAS:** Target return on ad spend berdasarkan conversion value.
- **Impression share:** Porsi eligible impressions yang berhasil dimenangkan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH07 — Conversion Tracking, Enhanced Conversions & Offline Conversion

**Competency ID(s):** T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Conversion tracking mengubah business action menjadi signal yang dapat diukur dan dipakai bidding. Specialist harus membedakan page view, form submit, qualified lead, purchase, phone call, offline conversion, enhanced conversions, dan imported CRM outcomes. Event definition, count setting, value, attribution window, consent, deduplication, tag implementation, dan QA wajib disepakati sebelum optimasi.

**Simulated example:** SIMULATED — form submit dihitung sebagai primary conversion, tetapi 40% leads adalah spam/duplikat dan sales qualified rate rendah. Bidding mengejar form volume, bukan pipeline value. CRM qualification/offline conversion perlu dikirim secara tepat dengan governance.

**Technical depth / workflow:**
- <b>Definisikan action.</b> Pilih primary/secondary, counting method, value, source, owner, dan window.
- <b>Map implementation.</b> Tetapkan tag/event, trigger, parameter, consent, enhanced/offline conversion flow, serta deduplication.
- <b>QA event.</b> Uji expected vs actual, duplicates, missing values, cross-domain/redirect, mobile, and consent states.
- <b>Reconcile business outcomes.</b> Cocokkan platform conversions dengan CRM/sales/revenue dan catat delay/attribution differences.

**Practice / deliverable:** Buat conversion measurement spec untuk lead dan purchase: event name, trigger, parameters/value, tag owner, source of truth, consent, deduplication, QA test, offline import field, dan reconciliation plan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa form submit belum tentu qualified lead?
   **Expected answer in guide (not independently approved):** Submit hanya perilaku awal; qualification memerlukan validasi data, fit, sales response, dan outcome CRM.
2. **Q:** Apa risiko conversion double-counting?
   **Expected answer in guide (not independently approved):** Bidding/reporting menganggap conversion lebih banyak sehingga CPA/ROAS dan optimasi menjadi bias.
3. **Q:** Apa fungsi offline conversion import?
   **Expected answer in guide (not independently approved):** Menghubungkan conversion yang terjadi di CRM/sales setelah click dengan campaign signal, sesuai identifier, privacy, dan rules.

**Glossary:**
- **Conversion action:** Tindakan yang ditetapkan sebagai outcome terukur.
- **Enhanced conversions:** Mekanisme matching conversion menggunakan data first-party yang di-hash sesuai ketentuan.
- **Offline conversion:** Outcome terjadi di luar website/platform, misalnya qualified sale.
- **Deduplication:** Pencegahan satu outcome tercatat lebih dari sekali.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH08 — Search Terms Analysis, Quality Score & Impression Share

**Competency ID(s):** T04-C04, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Diagnosis Search menggunakan search terms, auction insights, Quality Score components, impression share, landing-page signals, conversion rate, dan value. Quality Score adalah diagnostic indicator, bukan KPI bisnis atau tombol optimasi tunggal. Lost impression share karena budget berbeda dari rank. Analyst harus memisahkan issue query, competition, bid, relevance, page, tracking, dan budget sebelum membuat perubahan.

**Simulated example:** SIMULATED — campaign kehilangan impression share 25% karena rank, sementara budget tidak habis. Menambah budget bukan solusi utama; perlu mengecek bid strategy, ad relevance, expected CTR, landing experience, dan query relevance.

**Technical depth / workflow:**
- <b>Segmentasikan hasil.</b> Periksa brand/generic, query theme, device, geo, audience, hour, ad group, landing page, dan network.
- <b>Diagnosis auction.</b> Pisahkan lost IS budget vs rank; cek competition dan bid eligibility.
- <b>Uji relevance.</b> Review query-to-keyword, ad, landing page, conversion signal, dan user experience.
- <b>Prioritaskan tindakan.</b> Dampak, confidence, effort, dependency, dan guardrail menentukan urutan.

**Practice / deliverable:** Buat weekly search diagnosis report dengan segmentation, search term issues, lost IS, Quality Score components, LP issue, tracking check, root-cause hypotheses, prioritized actions, owner, dan follow-up date.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apakah Quality Score dapat menjadi business KPI?
   **Expected answer in guide (not independently approved):** Tidak. Ia diagnostic indicator untuk relevance/auction context; success harus dilihat pada cost, qualified conversion, value, dan margin.
2. **Q:** Apa beda lost IS budget dan lost IS rank?
   **Expected answer in guide (not independently approved):** Budget loss menunjukkan batas anggaran; rank loss berkaitan competitiveness/Ad Rank, bid, relevance, dan auction context.
3. **Q:** Mengapa diagnosis harus disegmentasi?
   **Expected answer in guide (not independently approved):** Rata-rata account dapat menutupi query, device, region, atau landing-page pockets yang punya masalah berbeda.

**Glossary:**
- **Quality Score:** Indikator diagnostik kualitas/relevance pada keyword.
- **Lost IS (budget):** Porsi eligible impressions hilang akibat keterbatasan budget.
- **Lost IS (rank):** Porsi eligible impressions hilang akibat Ad Rank/competitiveness.
- **Auction insights:** Laporan kompetisi auction pada ruang dan waktu tertentu.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH09 — Testing, Optimization, Reporting & Diagnosis

**Competency ID(s):** T04-C05, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Testing Search harus menguji satu hipotesis yang dapat dipisahkan dari perubahan lain. Variabel dapat berupa message angle, asset, landing page, match coverage, bid strategy, atau audience; test perlu primary metric, guardrail, randomization/experiment setup, sample/duration, seasonality control, dan stopping rule. Setelah test, interpretasikan effect size dan uncertainty, bukan hanya siapa yang tampak menang.

**Simulated example:** SIMULATED — dua RSA diluncurkan bersamaan dengan perubahan bidding dan LP. Conversion naik, tetapi tim tidak dapat mengidentifikasi penyebab. Test berikutnya mengisolasi creative angle sambil menjaga budget, targeting, dan page tetap stabil.

**Technical depth / workflow:**
- <b>Tulis hipotesis.</b> Hubungkan observation, change, audience, expected mechanism, primary KPI, dan guardrail.
- <b>Rancang experiment.</b> Tentukan control/treatment, randomization, split, time, sample, seasonality, dan contamination risks.
- <b>Jalankan QA.</b> Pastikan URLs, assets, conversion, budgets, and settings seimbang.
- <b>Interpretasikan.</b> Baca uncertainty, volume, segment effects, business value, dan keputusan scale/iterate/stop.

**Practice / deliverable:** Buat experiment backlog tiga test untuk Search: ad-message test, LP test, dan match/negative strategy test. Untuk satu test, lengkapi protocol, sample/duration assumptions, guardrails, QA, decision rule, dan results template.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa perubahan banyak variabel sekaligus berbahaya?
   **Expected answer in guide (not independently approved):** Penyebab hasil tidak dapat diisolasi, sehingga tim tidak tahu intervensi mana yang memberi dampak.
2. **Q:** Apa arti hasil inconclusive?
   **Expected answer in guide (not independently approved):** Bukti belum cukup untuk memilih pemenang; itu bukan bukti bahwa variasi identik.
3. **Q:** Kapan eksperimen sebaiknya dihentikan?
   **Expected answer in guide (not independently approved):** Sesuai pre-defined stopping rule, misalnya safety issue, tracking failure, budget limit, atau sample/time threshold—bukan saat hasil disukai.

**Glossary:**
- **Hypothesis:** Pernyataan evidence-to-change-to-outcome yang bisa diuji.
- **Control/treatment:** Kondisi pembanding dan variasi dalam experiment.
- **Guardrail metric:** Metrik yang membatasi efek samping optimasi.
- **Effect size:** Besarnya perubahan hasil yang diobservasi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH10 — Paid Search Capstone

**Competency ID(s):** T04-C03, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | B: Digital Consultant - Biddable Specialist, Dentsu employer-hosted Workday JD; covers paid search (Google/Bing), paid social and display performance, campaign setup, keyword/copy creation, optimization and reporting. Cross-channel biddable role; not a pure SEM specialist JD. | D: SEA Executive career listing

**Learning objective / concept:** Capstone Paid Search menguji kemampuan mengelola jalur dari intent sampai conversion dan diagnosis. Paket kerja harus menyatukan keyword architecture, campaign build, RSA/assets, bidding/budget, conversion tracking, negative strategy, QA, reporting, dan optimization. Semua forecast atau data yang tidak berasal dari account aktual wajib ditandai SIMULATED. Hasil harus dijelaskan menurut intent dan economics, bukan hanya platform metrics.

**Simulated example:** SIMULATED — perusahaan SaaS B2B ingin menghasilkan demo request. Tim harus memisahkan branded/generic/competitor, menjaga query quality, menghubungkan form dengan qualification CRM, dan menilai biaya per qualified demo.

**Technical depth / workflow:**
- <b>Frame brief.</b> Tentukan business goal, target market, proposition, economics, lead quality, and constraints.
- <b>Build campaign.</b> Susun keyword, architecture, ads/assets, landing pages, bids, budgets, and tracking.
- <b>QA dan monitor.</b> Simpan test evidence, change log, delivery, query mining, and conversion reconciliation.
- <b>Present insight.</b> Jelaskan what changed, why, impact, uncertainty, recommendation, and next tests.

**Practice / deliverable:** Bangun Search case-study workbook: brief, intent map 30 keywords, architecture, RSA assets, negative list, bid/budget scenario, conversion spec, QA log, weekly report, 3 optimizations, dan executive summary.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa yang membuat paid search capstone berbeda dari kumpulan keyword?
   **Expected answer in guide (not independently approved):** Ia membuktikan intent-to-conversion system, termasuk architecture, message match, economics, tracking, optimization, dan QA.
2. **Q:** Mengapa qualified lead lebih bernilai daripada raw form volume?
   **Expected answer in guide (not independently approved):** Qualified lead lebih dekat ke pipeline/revenue; raw form dapat dipenuhi spam atau audience yang tidak sesuai.
3. **Q:** Bagaimana membedakan actual dan simulated result di portfolio?
   **Expected answer in guide (not independently approved):** Gunakan label jelas, jelaskan sumber/rumus, jangan klaim client spend atau campaign outcome yang tidak pernah terjadi.

**Glossary:**
- **Search architecture:** Rancangan account/campaign/ad group/keyword/asset/LP.
- **Qualified lead:** Prospect yang memenuhi definisi sales/fit yang disepakati.
- **Optimization log:** Catatan perubahan, alasan, expected effect, dan hasil evaluasi.
- **Search capstone:** Paket bukti end-to-end yang mengintegrasikan intent, campaign, tracking, dan diagnosis.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 5. Paid Social / Biddable Social Specialist (`paidsocial`)

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

## 6. Programmatic Specialist / Trader (`programmatic`)

### DPA-T06-CH01 — Programmatic Ecosystem: DSP, SSP, Exchange & Ad Server

**Competency ID(s):** T06-C01

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Programmatic adalah pembelian inventory digital melalui platform dan automation, bukan nama lain untuk semua paid media. Ekosistem mencakup advertiser/agency, DSP, ad exchange, SSP, publisher/ad server, data/identity partners, dan verification. Setiap pihak memiliki peran dalam auction, targeting, delivery, measurement, dan biaya. Trader harus memahami supply chain untuk membaca fees, latency, quality, transparency, dan accountability.

**Simulated example:** SIMULATED — advertiser membeli 10 juta impressions melalui DSP. Bid request melewati exchange dan SSP sebelum publisher ad server; beberapa intermediary menambah fee dan memengaruhi latency. Trader harus mengetahui supply path dan net media cost, bukan hanya CPM di UI DSP.

**Technical depth / workflow:**
- <b>Gambar supply chain.</b> Petakan advertiser, agency, DSP, exchange, SSP, publisher, ad server, data, measurement, dan billing.
- <b>Bedakan ownership.</b> Tandai siapa mengelola demand, supply, auction, creative, identity, dan measurement.
- <b>Map cost path.</b> Pisahkan media cost, platform fee, data fee, verification, agency fee, dan publisher take rate.
- <b>Hubungkan ke workflow.</b> Ikuti brief hingga setup, auction, delivery, QA, report, dan invoice.

**Practice / deliverable:** Buat programmatic ecosystem diagram dan cost-flow workbook untuk satu campaign. Sertakan owner, object, data/signal, fee layer, risk, dan kontrol pada setiap node.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa perbedaan DSP dan SSP?
   **Expected answer in guide (not independently approved):** DSP membantu advertiser membeli inventory; SSP membantu publisher mengelola dan menjual inventory.
2. **Q:** Mengapa programmatic tidak sama dengan paid social?
   **Expected answer in guide (not independently approved):** Programmatic membeli inventory lintas publisher melalui DSP/exchange; paid social berjalan pada platform social dengan inventory/audience system masing-masing.
3. **Q:** Mengapa supply-chain transparency penting?
   **Expected answer in guide (not independently approved):** Intermediary fees, reselling, unauthorized supply, dan poor-quality inventory dapat mengurangi net value dan accountability.

**Glossary:**
- **DSP:** Demand-Side Platform untuk mengelola pembelian media.
- **SSP:** Supply-Side Platform untuk mengelola penjualan inventory publisher.
- **Ad exchange:** Marketplace/auction layer yang menghubungkan demand dan supply.
- **Ad server:** Sistem untuk mengatur ad decisioning/delivery serta tracking.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH02 — Auction Mechanics, OpenRTB & Supply Path

**Competency ID(s):** T06-C01

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** OpenRTB dan auction mechanics menjelaskan bagaimana bid request, impression opportunity, buyer response, price, dan creative diproses. Supply path menentukan rantai pihak yang terlibat dari publisher menuju DSP. Trader perlu memahami auction type, bid floor, timeout, win rate, clearing dynamics, deal identifiers, reseller, dan ads.txt/sellers.json sebagai sinyal otorisasi. Tidak semua mekanisme lelang bersifat first-price dengan implementasi identik.

**Simulated example:** SIMULATED — bid request tidak menghasilkan response karena timeout dan mismatch format. Campaign underspends meski bid tinggi. Diagnosis harus memeriksa deal eligibility, bid floor, supply path, creative spec, latency, dan targeting.

**Technical depth / workflow:**
- <b>Pelajari request-response.</b> Identifikasi impression, bid request, seat, device, user/context signals, bid response, creative, dan win/loss.
- <b>Bedakan auction/deal.</b> Pahami open auction, private auction/PMP, preferred deal, dan programmatic guaranteed.
- <b>Audit supply path.</b> Periksa seller authorization, direct/reseller, fees, duplicates, and inventory origin.
- <b>Diagnosis auction.</b> Analisis floor, timeout, bid rate, win rate, clearing price, and eligibility.

**Practice / deliverable:** Buat bid-flow diagram dan supply-path audit untuk dua inventory scenarios. Isi request signals, eligibility, auction/deal type, fee layers, authorized sellers checks, timeout risk, dan optimization actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa itu bid floor?
   **Expected answer in guide (not independently approved):** Harga minimum yang disyaratkan supply side untuk eligible impression/deal.
2. **Q:** Apa fungsi ads.txt dan sellers.json?
   **Expected answer in guide (not independently approved):** Membantu transparansi dan otorisasi penjual inventory, tetapi tidak sendirian menjamin kualitas.
3. **Q:** Mengapa bid tinggi tidak menjamin win?
   **Expected answer in guide (not independently approved):** Eligibility, deal rules, timeout, floor, auction competition, creative compatibility, dan supply signals juga menentukan.

**Glossary:**
- **OpenRTB:** Protokol standar untuk komunikasi transaksi RTB.
- **Supply path:** Rantai perantara yang dilalui inventory dari publisher ke buyer.
- **Bid floor:** Batas minimum harga bid yang diminta supply.
- **PMP:** Private Marketplace dengan akses/ketentuan deal yang dibatasi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH03 — Audience, Data Strategy, Identity & Privacy

**Competency ID(s):** T06-C02

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Audience strategy programmatic menggabungkan first-party data, contextual, publisher segments, third-party data, identity solutions, dan privacy/consent. Audience targeting harus sesuai objective dan data rights. Cookie deprecation, browser restrictions, consent, match rates, data provenance, and identity interoperability dapat memengaruhi scale serta accuracy. Contextual targeting tidak sama dengan behavioral identity targeting.

**Simulated example:** SIMULATED — audience CRM seed match 35% pada DSP. Angka ini tidak berarti 65% audience tidak relevan; identity graph, formatting, consent, and addressability membatasi match. Tim perlu membandingkan contextual alternative dan reach loss.

**Technical depth / workflow:**
- <b>Definisikan audience use case.</b> Akuisisi, prospecting, suppression, retargeting, contextual reach, atau frequency control.
- <b>Audit data provenance.</b> Catat source, consent, collection purpose, freshness, match method, geography, and usage rights.
- <b>Nilai identity coverage.</b> Periksa match rate, device coverage, duplication, exclusions, and loss of addressability.
- <b>Rancang privacy-safe alternatives.</b> Gunakan contextual, publisher first-party, cohort/aggregate, and modeled signals sesuai policy.

**Practice / deliverable:** Buat audience decision matrix: first-party, contextual, publisher, and third-party options. Sertakan reach/match assumption, consent basis, quality risks, freshness, cost, and use-case fit.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda first-party audience dan third-party data?
   **Expected answer in guide (not independently approved):** First-party berasal dari hubungan/interaksi langsung organisasi; third-party diperoleh dari sumber/pihak eksternal dengan ketentuan penggunaan.
2. **Q:** Mengapa match rate bukan audience quality?
   **Expected answer in guide (not independently approved):** Match rate hanya menunjukkan keberhasilan matching; tidak membuktikan intent, freshness, identity accuracy, atau conversion likelihood.
3. **Q:** Kapan contextual targeting lebih tepat?
   **Expected answer in guide (not independently approved):** Ketika page/content context relevan dan identity/consent constraints membatasi behavioral targeting, dengan QA brand suitability.

**Glossary:**
- **First-party data:** Data yang dikumpulkan langsung oleh organisasi.
- **Contextual targeting:** Targeting berdasarkan konteks konten/halaman, bukan identity behavior.
- **Identity resolution:** Pengaitan identitas/signal lintas perangkat atau source dengan metode tertentu.
- **Data provenance:** Asal, metode pengumpulan, dan hak penggunaan data.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH04 — Inventory, Formats & Deal Types

**Competency ID(s):** T06-C03

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Inventory mencakup format, device, environment, publisher, geo, audience, placement, viewability, fraud risk, and suitability. Deal types memberi tingkat kontrol dan komitmen berbeda. Trader perlu menilai inventory fit, scale, measurement eligibility, creative constraints, and cost. CTV, audio, video, display, native, in-app, DOOH, and mobile web memiliki kebutuhan asset, verification, and measurement berbeda.

**Simulated example:** SIMULATED — brand finance tidak cocok ditempatkan pada open exchange tanpa context controls; premium finance publisher memberikan relevansi lebih baik tetapi scale lebih kecil. Mix dapat menggabungkan contextual/PMP dengan open auction yang diverifikasi.

**Technical depth / workflow:**
- <b>Klasifikasikan inventory.</b> Map format, device, environment, publisher, geography, placement, and audience.
- <b>Nilai suitability.</b> Periksa brand safety, category exclusions, content adjacency, IVT, viewability, and transparency.
- <b>Pilih deal type.</b> Cocokkan reach/control/price/guarantee dengan campaign goal.
- <b>Validasi creative compatibility.</b> Cek dimensions, ratio, duration, codec, click behavior, audio, and fallback.

**Practice / deliverable:** Buat inventory matrix minimal enam opsi (display, video, CTV, audio, native, in-app atau DOOH) dengan format specs, deal type, audience, quality checks, cost assumptions, and use-case rationale.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda brand safety dan brand suitability?
   **Expected answer in guide (not independently approved):** Safety menghindari konten yang jelas berbahaya; suitability menilai kesesuaian konteks dengan brand/category tolerance.
2. **Q:** Apa perbedaan PMP dan programmatic guaranteed?
   **Expected answer in guide (not independently approved):** PMP biasanya private auction access; programmatic guaranteed memiliki komitmen inventory/price/delivery yang disepakati.
3. **Q:** Mengapa format harus divalidasi sebelum buying?
   **Expected answer in guide (not independently approved):** Format incompatibility dapat menyebabkan rejection, rendering error, underdelivery, atau pengalaman iklan buruk.

**Glossary:**
- **Inventory:** Placement/opportunity yang tersedia untuk dibeli.
- **PMP:** Private Marketplace/deal dengan akses tertentu.
- **Programmatic Guaranteed:** Pembelian terprogram dengan komitmen delivery yang disepakati.
- **Suitability:** Kesesuaian context/placement dengan toleransi brand.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH05 — DSP Architecture & Platform Navigation

**Competency ID(s):** T06-C01, T06-C04

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** DSP navigation dimulai dengan memahami hirarki advertiser, campaign, insertion order/order, line item, targeting, creative, budget, flight, frequency, and optimization. Nomenclature antar-DSP berbeda; prinsip dasarnya tetap sama. DV360 menjadi platform utama belajar di roadmap, sedangkan The Trade Desk dan Amazon DSP dibandingkan pada capability serta inventory ecosystem. Tool access bergantung pada organisasi/partner dan tidak boleh dijanjikan hanya dari kursus.

**Simulated example:** SIMULATED — trader membuat line item dengan wrong exchange/format targeting sehingga budget tidak deliver. Setup perlu dikontrol melalui campaign map, naming, deal/creative compatibility, audience, and QA before activation.

**Technical depth / workflow:**
- <b>Kenali hierarchy.</b> Petakan advertiser/campaign/order/line item/creative/deal sesuai platform.
- <b>Konfigurasi campaign.</b> Set objective, flight, budget, bid, geo, audience, frequency, inventory, and conversion signals.
- <b>Kelola naming dan permissions.</b> Gunakan taxonomy, role access, approval, and change log.
- <b>Verifikasi platform access.</b> Bedakan credential, demo/sandbox, partner seat, managed access, dan live buying permissions.

**Practice / deliverable:** Buat DSP setup workbook untuk satu campaign: object hierarchy, naming, budgets, bids, audiences, inventory/deals, creatives, tracking, permissions, launch checklist, and monitoring cadence.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa platform interface skills tidak cukup?
   **Expected answer in guide (not independently approved):** Trader harus memahami auction, supply, data, economics, verification, measurement, dan troubleshooting di balik kontrol UI.
2. **Q:** Apa beda line item dengan creative?
   **Expected answer in guide (not independently approved):** Line item mengatur delivery, targeting, bid, budget, dan schedule; creative adalah asset yang ditayangkan.
3. **Q:** Apakah sertifikasi DV360 otomatis memberi akses live seat?
   **Expected answer in guide (not independently approved):** Tidak. Learning credential dan akses akun/seat dikendalikan organisasi/partner dan ketentuan platform.

**Glossary:**
- **Line item:** Unit konfigurasi delivery dalam DSP.
- **Insertion order:** Objek pengelompokan budget/flight dalam beberapa DSP.
- **Seat:** Akun/entitas buying access di platform/exchange.
- **Change log:** Catatan konfigurasi/perubahan dan alasan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH06 — Campaign Structure, Trafficking & Creative Setup

**Competency ID(s):** T06-C04

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Campaign setup/trafficking memastikan plan dapat diterjemahkan menjadi objek dan creative yang siap diperdagangkan. Brief, naming, IO/line item, deal IDs, audience, creative spec, click URL, trackers, macros, event tags, and approvals harus sinkron. Trafficking berbeda dari media strategy: tugasnya menjaga akurasi konfigurasi dan bukti QA, bukan menentukan seluruh business strategy.

**Simulated example:** SIMULATED — deal ID aktif tetapi creative tidak memenuhi format/SSL dan click macro salah. Campaign terlihat configured tetapi tidak eligible atau salah mengarahkan traffic. Pre-launch QA harus menguji actual rendering dan click path.

**Technical depth / workflow:**
- <b>Terima final brief.</b> Cocokkan plan, targeting, format, dates, budget, KPI, owner, and approval.
- <b>Bangun trafficking map.</b> Hubungkan campaign/line item/deal/creative/tracker/landing page secara konsisten.
- <b>Validasi spec dan macros.</b> Periksa dimensions, VAST/HTML5, SSL, click/impression trackers, URL encoding, and fallbacks.
- <b>Jalankan end-to-end QA.</b> Simulasikan ad request, landing page, event firing, and platform acceptance.

**Practice / deliverable:** Buat trafficking sheet, creative spec matrix, macro/URL map, tag map, deal checklist, and QA evidence for one synthetic DSP campaign.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa risiko click macro salah?
   **Expected answer in guide (not independently approved):** Click-through dapat hilang, salah redirect, mengganggu billing atau memutus measurement.
2. **Q:** Mengapa trafficking sheet menjadi single source of truth?
   **Expected answer in guide (not independently approved):** Sheet mengikat object, tag, date, budget, creative, owner, approval, dan status untuk mencegah konfigurasi berbeda.
3. **Q:** Apa bukti QA selain upload success?
   **Expected answer in guide (not independently approved):** Preview/render evidence, click test, landing validation, tracking test, policy/approval, and sign-off.

**Glossary:**
- **Trafficking:** Konfigurasi teknis campaign/creative/tag untuk delivery.
- **VAST:** Standar komunikasi untuk video ad serving/tracking.
- **Macro:** Token dinamis untuk menambahkan nilai tracking saat delivery/click.
- **Fallback:** Asset/behavior pengganti saat format utama tidak didukung.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH07 — Bidding, Budget, Pacing & Frequency Management

**Competency ID(s):** T06-C05, T06-C07

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Bidding, budget, pacing, and frequency management mengontrol delivery dalam batas economics dan campaign objective. Pahami bid strategy, auction pressure, bid shading where relevant, win rate, clearing price, pacing algorithm, frequency caps, reach, and spend curve. Jangan mengubah bid/budget tanpa memeriksa inventory, audience, floor, conversion signals, and campaign stage. Platform automation berbeda sehingga jangan menganggap satu setting berlaku sama di seluruh DSP.

**Simulated example:** SIMULATED — campaign spend hanya 40% dari budget setelah 3 hari. Peningkatan bid mungkin membantu bila lost auctions karena price, tetapi tidak bila deal not eligible, creative rejected, audience terlalu sempit, atau supply timeout.

**Technical depth / workflow:**
- <b>Establish pacing baseline.</b> Bandingkan budget, elapsed flight, planned spend curve, actual spend, impressions, and outcome.
- <b>Diagnose delivery.</b> Pisahkan price, inventory, audience, creative, deal, bid request, tracking, and approval issues.
- <b>Optimize frequency.</b> Nilai unique reach, average frequency, segment saturation, and cross-device duplication.
- <b>Control changes.</b> Catat bid/budget changes, rationale, observation window, guardrails, and rollback criteria.

**Practice / deliverable:** Buat pacing simulator harian dengan planned vs actual spend, bid, win rate, CPM, frequency, reach, and outcomes. Simulasikan underdelivery, overspend, and fatigue; dokumentasikan root-cause decisions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa menaikkan bid tidak selalu menyelesaikan underspend?
   **Expected answer in guide (not independently approved):** Inventory eligibility, targeting, deal/creative issues, supply, and timeouts dapat menjadi bottleneck selain bid.
2. **Q:** Apa risiko frequency terlalu tinggi?
   **Expected answer in guide (not independently approved):** Waste, fatigue, negative experience, and diminishing incremental reach.
3. **Q:** Apa beda average CPM dan clearing price?
   **Expected answer in guide (not independently approved):** Average CPM merangkum biaya hasil delivery; clearing price adalah harga auction pada impression tertentu/menurut mekanisme platform.

**Glossary:**
- **Pacing:** Kecepatan pembelanjaan budget sepanjang flight.
- **Win rate:** Proporsi bid opportunities yang dimenangkan.
- **Frequency cap:** Batas exposure per user/device dalam periode.
- **Bid shading:** Penyesuaian bid pada auction tertentu untuk menghindari overpay; metode platform berbeda.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH08 — PMP, Preferred Deals & Programmatic Guaranteed

**Competency ID(s):** T06-C03

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** PMP, Preferred Deals, dan Programmatic Guaranteed mengubah cara advertiser mengakses publisher inventory dan menyepakati harga/delivery. Setiap deal memiliki buyer/seller IDs, deal ID, floor/fixed price, targeting, dates, format, priority, inventory scope, and delivery terms. Trader wajib menguji compatibility dan memahami apakah deal bersifat invitation, non-guaranteed, atau guaranteed; label platform dapat berbeda.

**Simulated example:** SIMULATED — publisher menawarkan PMP dengan floor CPM Rp45.000 dan forecast 2 juta impressions. Campaign mengaktifkan deal ID, tetapi buyer menggunakan seat yang salah. Tidak ada delivery meski bid kompetitif; deal ID/seat mapping harus di-verify.

**Technical depth / workflow:**
- <b>Bandingkan deal type.</b> Pelajari access, auction, price, inventory commitment, priority, and delivery guarantee.
- <b>Negosiasikan scope.</b> Tetapkan format, audience, geo, floor/price, dates, volume, reporting, and cancellation/makegood terms.
- <b>QA deal activation.</b> Verifikasi buyer seat, seller, deal ID, line item, targeting, creative, and inventory eligibility.
- <b>Monitor deal delivery.</b> Pantau bid requests, matches, wins, spend, quality, and underdelivery.

**Practice / deliverable:** Buat deal negotiation matrix dan activation checklist untuk PMP, Preferred, dan PG. Isikan seller/buyer seat, deal ID, floor/price, volume, formats, dates, targeting, guarantee, QA, and delivery escalation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda preferred deal dan PMP auction?
   **Expected answer in guide (not independently approved):** Preferred biasanya memberi akses/first look dengan harga tertentu tanpa guarantee; PMP umumnya private auction dengan buyers invited, terms platform-specific.
2. **Q:** Apa yang perlu dikonfirmasi sebelum PG?
   **Expected answer in guide (not independently approved):** Volume, dates, price, inventory, priority, format, audience, guarantee, makegood, cancellation, and measurement terms.
3. **Q:** Mengapa deal ID perlu di-test?
   **Expected answer in guide (not independently approved):** Deal dapat gagal karena seat/seller mismatch, targeting, format, dates, price, atau line-item setup.

**Glossary:**
- **Deal ID:** Identifier untuk akses transaksi/inventory deal tertentu.
- **Floor price:** Batas harga minimum pada deal/inventory.
- **Preferred deal:** Akses first look/price agreed tanpa komitmen volume yang sama dengan PG.
- **PG:** Programmatic Guaranteed; transaksi dengan commitment delivery.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH09 — Brand Safety, Viewability, IVT & Supply Quality

**Competency ID(s):** T06-C06

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Brand safety, suitability, viewability, invalid traffic, and supply quality adalah dimensi berbeda. Brand safety menghindari konten berisiko; suitability mencocokkan toleransi brand; viewability mengukur apakah iklan memenuhi kriteria terlihat; IVT mengidentifikasi traffic tidak valid; supply quality menilai transparency, duplication, fees, and publisher quality. Vendor verification memiliki methodology/coverage yang harus dipahami.

**Simulated example:** SIMULATED — report menunjukkan 70% viewable impressions, tetapi 8% IVT dan beberapa placement melanggar suitability. Viewability tinggi tidak membuat campaign aman atau efektif; metrics harus dibaca bersama dan coverage dilaporkan.

**Technical depth / workflow:**
- <b>Definisikan metrics.</b> Catat viewability standard, eligible/measured impressions, IVT definitions, brand-safety taxonomy, and exclusions.
- <b>Set controls.</b> Gunakan inclusion/exclusion lists, category/content controls, seller transparency, and verification partners.
- <b>Audit supply quality.</b> Periksa domain/app, ads.txt/sellers.json, reseller paths, fees, duplication, and reporting gaps.
- <b>Interpret coverage.</b> Pisahkan unmeasured from failed, disclose vendor coverage, and escalate anomalies.

**Practice / deliverable:** Buat supply-quality scorecard untuk 10 inventory sources: brand safety, suitability, viewability, IVT, seller authorization, fees, transparency, data coverage, and remediation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda viewability dengan attention?
   **Expected answer in guide (not independently approved):** Viewability mengukur peluang terlihat menurut standard; attention mengukur engagement/notice lebih jauh dan memerlukan metode berbeda.
2. **Q:** Mengapa unmeasured impression bukan otomatis failure?
   **Expected answer in guide (not independently approved):** Sebagian inventory tidak terukur karena coverage/technical limits; laporkan sebagai unmeasured terpisah dari non-viewable.
3. **Q:** Apakah ads.txt menjamin inventory aman?
   **Expected answer in guide (not independently approved):** Tidak. Ia membantu mengidentifikasi authorized sellers, tetapi fraud/suitability/viewability tetap membutuhkan controls lain.

**Glossary:**
- **IVT:** Invalid Traffic, aktivitas trafik yang tidak valid.
- **Viewability:** Kelayakan impression terlihat menurut measurement standard.
- **Brand suitability:** Kesesuaian context terhadap toleransi dan nilai brand.
- **Supply path optimization:** Evaluasi jalur supply agar transparansi, quality, dan fees lebih baik.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH10 — CM360, Floodlight, Attribution & Measurement

**Competency ID(s):** T06-C01, T06-C06

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** CM360 dan Floodlight memiliki peran ad-serving dan measurement yang perlu dibedakan dari DSP reporting. CM360 mengelola advertiser/campaign/site/placement/ad/creative/trackers; Floodlight mengukur activities/conversions menurut counting method, attribution, and window. Discrepancy antara DSP, CM360, dan analytics sering muncul dari event definition, time zone, click/view windows, deduplication, redirects, latency, and consent.

**Simulated example:** SIMULATED — DSP mencatat 900 conversions, CM360 760 Floodlight activities, GA4 620 purchases. Angka tidak dapat dibandingkan sebelum unit event, window, dedupe, timezone, consent, and transaction IDs disejajarkan.

**Technical depth / workflow:**
- <b>Map tracking roles.</b> Bedakan impression/click trackers, ad server, Floodlight activity, GA4 events, pixel/CAPI, and UTM.
- <b>Define conversion.</b> Tentukan activity type, counting method, value, window, deduplication, and source of truth.
- <b>QA integration.</b> Test tags, redirects, macros, event IDs, consent states, and platform logs.
- <b>Reconcile discrepancy.</b> Align timezone/cutoff/window, compare eligible events, and document residual difference.

**Practice / deliverable:** Buat measurement architecture diagram dan discrepancy reconciliation workbook yang membandingkan DSP, CM360/Floodlight, dan GA4. Include event mapping, window, timezone, dedupe, consent, and limits.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda ad server dengan DSP?
   **Expected answer in guide (not independently approved):** Ad server mengelola ad decisioning/delivery/tracking; DSP mengelola buying/auction/targeting di inventory.
2. **Q:** Mengapa Floodlight counts dapat berbeda dengan GA4 purchase?
   **Expected answer in guide (not independently approved):** Counting method, attribution, time zone, identity, consent, deduplication, event definition, and processing berbeda.
3. **Q:** Mengapa UTM bukan pengganti Floodlight?
   **Expected answer in guide (not independently approved):** UTM memberi label campaign pada session/source; Floodlight merekam conversion activity sesuai setup measurement.

**Glossary:**
- **Floodlight:** Sistem activity/conversion tracking dalam Campaign Manager 360.
- **Counting method:** Aturan apakah activity dihitung sekali, per session, atau setiap kejadian.
- **Attribution window:** Periode ketika interaksi dapat menerima credit conversion.
- **Discrepancy:** Perbedaan angka antara sistem yang perlu direkonsiliasi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH11 — Optimization, Reporting & Post-Campaign Analysis

**Competency ID(s):** T06-C07

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Optimization dan post-campaign review mengevaluasi bukan hanya ROAS, tetapi delivery, supply quality, reach, frequency, margin, partner fees, audience, format, and incrementality limits. Report harus menjelaskan apa yang terjadi, mengapa diduga terjadi, bukti pendukung, alternatif penjelasan, dan tindakan berikutnya. Programmatic trader menjaga traceability perubahan agar learning dapat direplikasi.

**Simulated example:** SIMULATED — open auction memberikan CPM rendah tetapi IVT tinggi dan conversion quality rendah; PMP lebih mahal tetapi engagement dan incrementality test lebih baik. Keputusan mengubah mix harus membandingkan net cost dan kualitas outcome.

**Technical depth / workflow:**
- <b>Read performance by dimension.</b> Slice by DSP, deal, publisher, placement, format, audience, device, geo, and creative.
- <b>Separate delivery and outcome.</b> Reconcile spend/impressions with viewability, IVT, reach, conversions, and contribution.
- <b>Generate hypotheses.</b> Distinguish evidence, interpretation, confidence, and alternative cause.
- <b>Recommend optimizations.</b> Set action, expected mechanism, budget impact, guardrail, owner, and review date.

**Practice / deliverable:** Buat post-campaign report dan supply evaluation: delivery, spend, CPM, reach/frequency, viewability, IVT, deal quality, discrepancy, outcome, optimization changes, and next test agenda. Labeli data SYNTHETIC.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa CPM tidak boleh menjadi satu-satunya optimization target?
   **Expected answer in guide (not independently approved):** Ia mengabaikan inventory quality, fraud, reach, outcomes, fees, and contribution.
2. **Q:** Apa hubungan optimization log dengan repeatability?
   **Expected answer in guide (not independently approved):** Log mencatat perubahan, alasan, dan hasil sehingga learning bisa direplikasi dan tim tidak mengulang kesalahan.
3. **Q:** Apa batas ROAS platform dalam menilai programmatic?
   **Expected answer in guide (not independently approved):** Attribution platform tidak otomatis mengukur causal impact, overlap, fee, margin, atau long-term value.

**Glossary:**
- **Post-campaign analysis:** Evaluasi delivery, quality, outcomes, discrepancy, dan next action.
- **Supply quality:** Kualitas inventory/jalur dari sisi transparency, suitability, IVT, dan value.
- **Optimization log:** Catatan perubahan dan outcome untuk learning.
- **Incrementality:** Dampak tambahan di luar baseline/counterfactual.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH12 — Programmatic Capstone

**Competency ID(s):** T06-C01, T06-C03, T06-C06, T06-C07

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | A: Programmatic Specialist, Dentsu employer-hosted Workday JD, Lisbon; DSP setup, audience/geo/device targeting, bid and budget optimization, brand-safety/viewability controls, trafficking support and end-of-campaign evaluation. Execution/support-level scope; Lisbon market. | D: Trader Programmatique career listing

**Learning objective / concept:** Capstone Programmatic menguji pemahaman supply chain hingga measurement, bukan hanya navigasi DSP. Paket kerja harus menghubungkan objective, audience, inventory/deal strategy, DSP setup, creative/trafficking, bidding/pacing, verification, CM360/Floodlight, discrepancy, dan reporting. Seluruh account/campaign/auction figures yang tidak berasal dari live account diberi label SIMULATED. Akses credential tidak berarti peserta memiliki live buying seat.

**Simulated example:** SIMULATED — brand e-commerce ingin reach dan qualified purchase di Indonesia. Capstone menyusun mix open auction, PMP, dan retail data signals, tetapi menguji inventory quality, tracking, conversion quality, dan cost path sebelum merekomendasikan scale.

**Technical depth / workflow:**
- <b>Design strategy.</b> Tetapkan audience, objective, channel role, inventory, deal, and success metrics.
- <b>Build and QA.</b> Rancang DSP hierarchy, line items, creatives, tags, tracking, and launch checks.
- <b>Trade and monitor.</b> Simulasikan bid/pacing/frequency/quality issues dan change log.
- <b>Measure and defend.</b> Rekonsiliasi data, jelaskan limitations, lalu rekomendasikan next investment.

**Practice / deliverable:** Siapkan DSP campaign blueprint, supply-chain diagram, audience/data matrix, deal matrix, trafficking sheet, bidding/pacing simulator, verification scorecard, CM360/Floodlight measurement spec, discrepancy log, dan executive trading recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa yang harus bisa dijelaskan dalam programmatic capstone?
   **Expected answer in guide (not independently approved):** Mengapa supply/channel/deal dipilih, bagaimana buying berjalan, bagaimana kualitas dijaga, dan bagaimana hasil diukur.
2. **Q:** Apa batas latihan dengan synthetic data?
   **Expected answer in guide (not independently approved):** Ia membuktikan workflow, logic, and analysis—not live campaign performance, spend, platform access, or client results.
3. **Q:** Bagaimana menilai programmatic inventory yang terlihat murah?
   **Expected answer in guide (not independently approved):** Cek net fees, authorized sellers, quality, viewability, IVT, audience, outcome, and incremental value.

**Glossary:**
- **Programmatic blueprint:** Desain integrated buying, supply, audience, operation, and measurement.
- **Deal matrix:** Perbandingan commercial/technical terms antar deals.
- **Trading decision:** Keputusan bid, pacing, inventory, and optimization berdasarkan evidence.
- **Evidence pack:** Artefak yang membuktikan proses, hasil, sumber, dan batas klaim.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 7. Retail & Commerce Media Specialist (`retail`)

### DPA-T07-CH01 — Retail Media & Commerce Media Ecosystem

**Competency ID(s):** T07-C01

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Retail Media dan Commerce Media menggunakan retailer/commerce ecosystem, shopping intent, product/catalog data, onsite/offsite inventory, dan sales signals untuk memengaruhi pembelian. Retail media network dapat menjual inventory pada aset retailer atau aktivasi offsite yang memakai data/measurement retailer. Definisi, data access, placement, dan attribution berbeda per platform; trader perlu memisahkan retailer-owned inventory, third-party activation, dan marketplace ads.

**Simulated example:** SIMULATED — brand FMCG membeli sponsored product pada marketplace dan offsite audience activation melalui retailer network. Yang pertama tampil saat pencarian/halaman produk; yang kedua menjangkau audience di luar marketplace. Keduanya tidak boleh dilaporkan sebagai satu placement.

**Technical depth / workflow:**
- <b>Petakan ecosystem.</b> Identifikasi retailer, network, advertiser, platform, seller, agency, data, inventory, and reporting owner.
- <b>Kelompokkan media.</b> Bedakan onsite, offsite, in-store, sponsored search/product, display, video, and retail data activation.
- <b>Audit access dan measurement.</b> Periksa eligibility, seller account, product feed, reporting, conversion window, and sales source.
- <b>Hubungkan ke shopper journey.</b> Petakan discovery, consideration, comparison, add-to-cart, purchase, repeat, and store visit.

**Practice / deliverable:** Buat retail media ecosystem map untuk satu kategori Indonesia: Shopee, Tokopedia/TikTok Shop, Lazada, atau Blibli sesuai akses produk. Tandai onsite/offsite/in-store, buyer, seller, data owner, metrics, dan limitations.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda marketplace ads dan retail media network?
   **Expected answer in guide (not independently approved):** Marketplace ads adalah penempatan iklan dalam marketplace; RMN dapat mencakup inventory/advertising dari retailer dan aktivasi offsite berbasis retailer signals.
2. **Q:** Mengapa onsite dan offsite harus dipisah?
   **Expected answer in guide (not independently approved):** Inventory, audience, data activation, fee, attribution, dan measurement berbeda.
3. **Q:** Mengapa produk dan seller eligibility perlu dicek?
   **Expected answer in guide (not independently approved):** Ads hanya berguna bila SKU, stok, listing, content, dan account memenuhi syarat platform.

**Glossary:**
- **Retail Media Network:** Retailer-owned/managed advertising capability dan data/inventory ecosystem.
- **Onsite media:** Placement pada platform/site/app milik retailer.
- **Offsite media:** Aktivasi iklan di luar properti retailer menggunakan eligible audience/data.
- **Shopper journey:** Rangkaian perilaku audience dalam discovery hingga purchase/repeat.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH02 — Shopper Journey, Purchase Intent & Retail Insights

**Competency ID(s):** T07-C02

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Shopper journey berbeda menurut kategori, urgency, price, availability, and retail context. Purchase intent signal dapat berasal dari search terms marketplace, category browsing, product views, add-to-cart, loyalty, repeat purchase, store location, atau review. Data tersebut harus dipahami menurut coverage dan consent; jangan menganggap click atau product view sebagai purchase intent kuat tanpa evidence.

**Simulated example:** SIMULATED — shopper melihat sponsored product tiga kali tetapi tidak membeli karena stok kota habis dan rating rendah. Audience retargeting saja tidak menyelesaikan friction; product readiness dan availability perlu diperbaiki.

**Technical depth / workflow:**
- <b>Map shopping task.</b> Definisikan category entry, comparison, product evaluation, purchase, fulfillment, and repeat.
- <b>Audit signals.</b> Bedakan query/search, browse, product detail, cart, sale, loyalty, review, and availability.
- <b>Segment shoppers.</b> Kelompokkan new-to-brand, category buyers, loyalists, lapsed, and high-intent audiences jika platform mendukung.
- <b>Translate insight.</b> Pilih content, product listing, sponsored placement, offer, and next action.

**Practice / deliverable:** Buat shopper journey untuk satu kategori dan peta intent signals ke stage. Sertakan listing/review/availability issues, media opportunities, metrics, and evidence gaps.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apakah product view selalu berarti high intent?
   **Expected answer in guide (not independently approved):** Tidak. Ia dapat menunjukkan curiosity atau accidental browse; perlu konteks query, depth, add-to-cart, repeat, dan category behavior.
2. **Q:** Mengapa review dan availability penting bagi retail ads?
   **Expected answer in guide (not independently approved):** Media dapat mendorong traffic, tetapi listing trust, stock, pricing, and delivery influence conversion.
3. **Q:** Apa batas penggunaan loyalty data?
   **Expected answer in guide (not independently approved):** Eligibility, consent, purpose limitation, access, aggregation, and platform terms harus dipatuhi.

**Glossary:**
- **Purchase intent signal:** Sinyal perilaku yang dapat menunjukkan kesiapan membeli.
- **New-to-brand:** Pelanggan yang belum/baru pertama membeli brand menurut definisi retailer.
- **Digital shelf:** Kualitas keberadaan produk di retailer digital: content, rating, review, availability, and search position.
- **Availability:** Ketersediaan stok/layanan pada lokasi dan periode.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH03 — Retailer Media Network & Advertising Models

**Competency ID(s):** T07-C01

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Retail Media Network menawarkan model managed/self-service, sponsored product/search, display/video, audience activation, and measurement. Platform Indonesia memiliki nomenclature, eligibility, and reporting yang berubah; kurikulum harus mengajarkan cara membaca help center/current product availability, bukan menghafal satu nama fitur. Seller, brand, distributor, and agency account roles juga dapat berbeda.

**Simulated example:** SIMULATED — seller marketplace memiliki akses sponsored product, tetapi tidak memenuhi eligibility offsite audience activation. Planner harus merancang campaign sesuai account access yang tersedia dan tidak menjanjikan inventory yang tidak dapat dibeli.

**Technical depth / workflow:**
- <b>Map platform products.</b> Catat sponsored product/search, display, video, onsite placements, offsite, and audience solutions.
- <b>Audit account eligibility.</b> Periksa seller/brand status, catalog/SKU, billing, geo, campaign type, and access roles.
- <b>Compare buying model.</b> Bedakan self-service auction, managed campaign, reserved placement, and retailer program terms.
- <b>Check current taxonomy.</b> Verifikasi nomenclature, migration notices, limits, and measurement from provider documentation.

**Practice / deliverable:** Buat platform comparison untuk tiga RMN/marketplace aktif yang dapat diakses: ad types, seller/advertiser eligibility, placement, billing, targeting, reporting, conversion measurement, and documentation link. Cantumkan last-checked date.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa nama product/feature harus diverifikasi ulang?
   **Expected answer in guide (not independently approved):** Retail platform sering mengganti nama campaign, default optimization, eligibility, dan reporting.
2. **Q:** Apa yang perlu diperiksa sebelum memilih self-service vs managed?
   **Expected answer in guide (not independently approved):** Budget threshold, service scope, control, inventory, reporting, fee, data access, and campaign complexity.
3. **Q:** Apakah satu platform mapping berlaku untuk semua seller?
   **Expected answer in guide (not independently approved):** Tidak. Access dan ad products dapat berbeda menurut seller/brand status, region, category, and program eligibility.

**Glossary:**
- **RMN:** Retail Media Network.
- **Sponsored product:** Iklan produk pada search/browse/listing placement.
- **Managed service:** Campaign dioperasikan retailer/agency sesuai scope layanan.
- **Eligibility:** Syarat akun/produk/market agar dapat menggunakan ad feature.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH04 — Onsite Retail Media: Sponsored Products & Search

**Competency ID(s):** T07-C03

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Onsite Retail Media memanfaatkan sponsored products, sponsored search, sponsored brands/store, dan rekomendasi pada properti retailer. Search placement menangkap query/shopper intent; product placement memerlukan listing content, image, price, rating, inventory, and availability. Bid dan budget harus dibaca bersama organic rank, competition, margin, product-level ROAS/ACoS, and category economics.

**Simulated example:** SIMULATED — sponsored product mendapatkan impression dan click, tetapi ACoS tinggi karena product page kehilangan rating dan harga kurang kompetitif. Bid reduction saja tidak memperbaiki conversion; listing quality perlu diperbaiki.

**Technical depth / workflow:**
- <b>Audit product readiness.</b> Periksa title, image, description, attributes, category, price, stock, shipping, rating, review, and buy box/listing status.
- <b>Rancang sponsored placement.</b> Pilih SKU, keyword/search target, budget, bid, placement, and campaign objective.
- <b>Monitor product-level results.</b> Segmentasikan by SKU, query, placement, sales, margin, ACoS/ROAS, and new-to-brand if available.
- <b>Optimasi listing dan bid.</b> Bedakan media issue dengan product-page issue; document test and change.

**Practice / deliverable:** Buat onsite retail campaign plan untuk lima SKU: product readiness audit, keyword/product target, campaign structure, bid/budget assumptions, negative/exclusion logic, sales metrics, and listing improvement backlog.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa hubungan listing quality dengan sponsored ad performance?
   **Expected answer in guide (not independently approved):** Ad dapat menghasilkan traffic; listing, availability, price, review, and fulfillment menentukan apakah traffic berkonversi.
2. **Q:** Apa beda ROAS dan ACoS?
   **Expected answer in guide (not independently approved):** ROAS adalah sales/ad spend; ACoS adalah ad spend/ad-attributed sales, sehingga keduanya berbanding terbalik jika basis sama.
3. **Q:** Mengapa perlu SKU-level analysis?
   **Expected answer in guide (not independently approved):** Aggregate campaign metrics dapat menutupi SKU bermargin rendah, low stock, atau listing yang tidak converting.

**Glossary:**
- **Sponsored product:** Placement berbayar untuk mempromosikan SKU.
- **ACoS:** Advertising cost of sales = ad spend / attributed sales.
- **Product feed:** Data produk terstruktur untuk platform/ads.
- **Product readiness:** Kesiapan listing, price, stock, content, and fulfillment sebelum promosi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH05 — Offsite Retail Media: Display, Social & Video

**Competency ID(s):** T07-C01, T07-C03, T07-C04

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Offsite Retail Media mengaktifkan retailer audience/data pada inventory di luar properti retailer, misalnya display/video/social melalui partners. Measurement dapat memakai sales matching/closed-loop reporting, tetapi access, coverage, attribution window, and fees harus dipahami. Offsite audience bukan berarti data pelanggan bebas dipindahkan ke platform lain; privacy, consent, aggregation, and clean-room rules tetap berlaku.

**Simulated example:** SIMULATED — brand menjalankan offsite campaign pada audience category buyers. Laporan menunjukkan sales lift, tetapi hanya sebagian transaksi dapat dimatch dan control group berbeda ukuran. Klaim incrementality harus memperhitungkan match coverage, selection bias, and methodology.

**Technical depth / workflow:**
- <b>Define offsite use case.</b> Prospecting, retargeting, category expansion, or loyalty activation.
- <b>Audit audience activation.</b> Periksa provider data, eligibility, consent, clean-room/partner terms, match and reach.
- <b>Set measurement rules.</b> Definisikan sales window, eligible transactions, control/treatment, coverage, fee, and deduplication.
- <b>Reconcile outcomes.</b> Compare delivery, matched sales, platform attribution, and incremental evidence.

**Practice / deliverable:** Buat offsite retail media plan: audience source, activation channel, data governance, placements, measurement approach, match coverage assumption, control design, cost, and limitations.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda offsite sales attribution dan incrementality?
   **Expected answer in guide (not independently approved):** Attribution memberi credit pada exposure menurut model/window; incrementality mengestimasi tambahan penjualan dibanding control/counterfactual.
2. **Q:** Mengapa match coverage harus dilaporkan?
   **Expected answer in guide (not independently approved):** Hanya transaksi/audience eligible yang dapat diukur; coverage rendah membatasi representativeness.
3. **Q:** Apa risiko mengaktifkan retailer data ke luar platform?
   **Expected answer in guide (not independently approved):** Privacy, consent, purpose limitation, partner terms, identity resolution, and security controls.

**Glossary:**
- **Offsite retail media:** Aktivasi iklan di luar retailer property berbasis audience/data retailer.
- **Closed-loop measurement:** Penghubungan exposure media dengan transaksi/sales retailer.
- **Match rate:** Proporsi records yang dapat dicocokkan antara data sources.
- **Clean room:** Environment terkontrol untuk analisis dataset tanpa berbagi raw data secara bebas.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH06 — Retail Audience, First-Party Data & Targeting

**Competency ID(s):** T07-C02, T07-C04

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Retail audience and first-party data digunakan untuk membuat segment seperti category buyers, loyalty members, lapsed purchasers, new-to-brand, high-value, and product affinities. Targeting bergantung pada taxonomy retailer, match coverage, scale, privacy, and platform controls. Audience strategy harus seimbang antara precision dan reach; segment terlalu kecil dapat menaikkan CPM, membatasi delivery, atau membuat hasil tidak stabil.

**Simulated example:** SIMULATED — segment loyalty top spenders hanya 15 ribu users dan CPM tinggi. Broad category buyers mencapai 1,2 juta; strategi dapat memakai broad prospecting lalu retargeting loyalists dengan offer yang berbeda.

**Technical depth / workflow:**
- <b>Define segment logic.</b> Tulis transaction window, category/product, recency/frequency/value, loyalty, and exclusions.
- <b>Audit scale and match.</b> Periksa eligible users, match rate, refresh cadence, overlap, and suppression.
- <b>Align activation.</b> Pilih placement, message, offer, and bid sesuai segment intent/value.
- <b>Govern data.</b> Document consent, retention, purpose, access, and platform limitations.

**Practice / deliverable:** Buat retail audience taxonomy untuk prospecting, new-to-brand, repeat, lapsed, and high-value segments. Sertakan logic, window, scale/match caveat, activation, suppression, and measurement.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa segment terlalu sempit berisiko?
   **Expected answer in guide (not independently approved):** Scale kecil dapat meningkatkan biaya, underdelivery, unstable measurement, dan overfrequency.
2. **Q:** Apa risiko menganggap retailer segment sama dengan CRM segment?
   **Expected answer in guide (not independently approved):** Definisi, refresh, identity, transaction coverage, and eligibility dapat berbeda.
3. **Q:** Mengapa suppression penting?
   **Expected answer in guide (not independently approved):** Mencegah budget/communication terbuang untuk customer yang sudah convert atau tidak eligible.

**Glossary:**
- **Recency:** Kedekatan waktu sejak transaksi/interaksi.
- **Frequency:** Jumlah transaksi/interaksi selama window.
- **Monetary value:** Nilai pembelian dalam periode.
- **Audience overlap:** Customer yang muncul pada beberapa segment.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH07 — Product Feed, Digital Shelf & Retail Readiness

**Competency ID(s):** T07-C04

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Product feed adalah representasi data produk yang dikirim ke marketplace, retailer, shopping engine, dan ad platform agar SKU dapat ditemukan, ditampilkan, divalidasi, serta dipromosikan. Digital shelf adalah pengalaman produk yang dilihat shopper pada retailer digital: judul, atribut, gambar, deskripsi, harga, stok, variasi, rating/review, ketersediaan, dan discoverability. Feed bukan satu format universal. Required attributes, naming, identifiers, image rules, category taxonomy, locale, currency, dan update mechanism berbeda menurut platform, kategori, pasar, dan tipe akun. Praktisi harus memetakan source of truth dari PIM/ERP/catalogue ke schema tujuan, menjaga konsistensi dengan landing page/checkout, dan memantau error, disapproval, stale data, serta perubahan taxonomy.

**Simulated example:** SIMULATED — katalog FMCG berisi 100 SKU. Sebagian item kehilangan GTIN, variasi ukuran memakai item_group_id yang tidak konsisten, harga feed berbeda dari landing page, dan image URL tidak dapat di-crawl. Hasilnya sebagian item ditolak atau eligibility-nya dibatasi. Tim tidak boleh sekadar mengulang upload; mereka harus mengidentifikasi sumber data, field mapping, aturan category, dan pemilik koreksi.

**Technical depth / workflow:**
- <b>Map product data ownership.</b> Identifikasi PIM/ERP, seller centre, website, inventory/pricing source, product owner, SKU/SPU/variant identifiers, dan siapa yang menyetujui perubahan.
- <b>Build platform/category schema.</b> Ambil required dan optional attributes dari dokumentasi/feed specification terkini per platform, kategori, market, dan account. Buat data dictionary serta mapping table; jangan menganggap field wajib sama di Google, TikTok, Lazada, atau marketplace lain.
- <b>Validate feed and digital shelf.</b> QA title, description, category, brand, GTIN/identifier, variant/group ID, image URL/quality, landing page, price, currency, availability, stock, and policy/content consistency. Bandingkan feed dengan PDP dan checkout.
- <b>Operate diagnostics and refresh.</b> Monitor processing errors, disapproval, warnings, missing attributes, stale price/stock, broken URLs, image failures, and update latency. Buat issue backlog, owner, severity, correction, resubmission, dan monitoring cadence.

**Practice / deliverable:** Buat product-feed audit workbook untuk minimal 20 SKU dari dua kategori. Sertakan source-of-truth map, platform/category attribute dictionary, field mapping untuk Google Merchant Center dan satu catalog/marketplace yang benar-benar dapat diakses, sample feed rows, validation rules, digital-shelf checklist, diagnostics/error log, owner, priority, dan refresh SLA. Tandai platform features yang tidak tersedia di Indonesia atau memerlukan managed-account eligibility sebagai conditional, bukan assumed access.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa sebab field wajib pada product feed tidak boleh dianggap sama untuk semua platform dan kategori?
   **Expected answer in guide (not independently approved):** Setiap platform dan kategori dapat memiliki taxonomy, mandatory attributes, allowed values, identifier rules, dan eligibility berbeda. Gunakan schema/dokumentasi tujuan yang sedang berlaku.
2. **Q:** Bagaimana menangani harga atau availability yang berbeda antara feed dan halaman produk?
   **Expected answer in guide (not independently approved):** Temukan source of truth, rekonsiliasi currency/time/update cadence, perbaiki sistem asal dan destination, lalu validasi ulang hingga feed, landing page, dan checkout konsisten. Jangan mengirim data yang diketahui salah.
3. **Q:** Apa perbedaan product feed dengan digital shelf?
   **Expected answer in guide (not independently approved):** Feed adalah struktur data produk yang disuplai ke platform; digital shelf adalah kondisi dan pengalaman produk yang dilihat shopper, termasuk konten, harga, stok, review, ranking, dan discoverability. Feed yang valid belum menjamin digital shelf berkualitas.

**Glossary:**
- **Product feed:** Data produk terstruktur yang dikirim ke platform untuk katalog, listing, dan/atau iklan.
- **Attribute mapping:** Pemetaan field sumber ke atribut dan format yang diwajibkan platform tujuan.
- **GTIN:** Global Trade Item Number; identifier produk global jika berlaku dan tersedia.
- **Digital shelf:** Kualitas tampilan dan discoverability produk pada retailer/marketplace digital.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH08 — Campaign Activation, Bidding & Optimization

**Competency ID(s):** T07-C05

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Retail activation dan optimization menggabungkan campaign configuration, product/feed readiness, bid/budget, placement, query, product availability, pricing, promotion, reviews, and sales signals. Optimasi dilakukan pada level retailer, campaign, keyword, placement, and SKU. Perubahan bid harus dibandingkan dengan stock/price/promo agar kenaikan sales tidak salah diatribusikan ke media. Aktivasi juga dapat mencakup in-store retail media seperti screen, audio, shelf signage, kiosk, sampling, QR, dan proximity placements. Perencanaan in-store memerlukan store list, inventory/location map, footfall/dwell methodology, operating hours, installation, uptime, creative specification, proof-of-play, store operations, safety, serta pengukuran yang tidak menyamakan plays atau footfall dengan unique ad exposure.

**Simulated example:** SIMULATED — ROAS turun setelah seller menaikkan price dan stock-out pada dua SKU terlaris. Mengurangi bid pada seluruh account justru dapat merugikan SKU yang tetap tersedia. Segmentasikan dan koordinasikan media dengan merchandising/ops. SIMULATED — sebagian budget juga dialokasikan ke layar in-store pada 20 toko. Beberapa screen offline dan footfall memakai periode berbeda; tim harus mengecek proof-of-play, uptime, store list, dan sales/control period sebelum menyatakan exposure atau lift.

**Technical depth / workflow:**
- <b>Setup activation.</b> Validasi seller/account, SKU/catalog, target, placement, budget, bid, dates, and creative.
- <b>Monitor retail levers.</b> Check spend, impressions, clicks, CPC, orders, sales, ACoS/ROAS, stock, price, promo, and rating.
- <b>Diagnose product vs media.</b> Pisahkan ad delivery, search rank, product page, price/availability, and competitor action.
- <b>Run controlled changes.</b> Catat SKU/target/bid change, observation window, guardrail, and retail-team dependency.
- <b>Execute in-store controls.</b> Validasi store selection, placement/inventory map, daypart, creative specs, installation, uptime, proof-of-play, store staff/operations, safety, dan measurement caveats.

**Practice / deliverable:** Buat retail optimization log dari data SIMULATED 14 hari: per SKU/query, bid, spend, clicks, sales, stock, price, promo, rating, ACoS, root cause, action, and result. Tambahkan modul in-store: placement map untuk 20 toko, flight/daypart, creative spec, store operations checklist, proof-of-play evidence, uptime exception log, dan sales/footfall measurement caveats.

**Assessment / comprehension checks:** 6 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa ROAS bisa turun meski campaign setting tidak berubah?
   **Expected answer in guide (not independently approved):** Harga, stock, competitor price, ratings, product content, seasonality, and auction competition dapat berubah.
2. **Q:** Apa yang harus dilakukan bila stock-out?
   **Expected answer in guide (not independently approved):** Pause/exclude affected SKU atau ubah destination/offer; koordinasikan inventory dan jangan biarkan spend mendorong item unavailable.
3. **Q:** Mengapa perubahan bid perlu change log?
   **Expected answer in guide (not independently approved):** Agar dampak bisa ditelusuri dan tidak tercampur dengan price/promo/stock changes.
4. **Q:** Apa itu proof-of-play?
   **Expected answer in guide (not independently approved):** Bukti bahwa aset ditayangkan pada screen/placement sesuai waktu/ketentuan yang dibooking.
5. **Q:** Mengapa footfall tidak sama dengan ad exposure?
   **Expected answer in guide (not independently approved):** Footfall mengukur kunjungan lokasi; tidak membuktikan setiap orang melihat placement atau mengingat pesan.
6. **Q:** Apa kontrol operasional khas in-store?
   **Expected answer in guide (not independently approved):** Store availability, uptime, installation, staff, display condition, operating hours, and safety.

**Glossary:**
- **ACoS:** Ad spend dibagi attributed sales.
- **ROAS:** Attributed sales/revenue dibagi ad spend.
- **Stock-out:** Kondisi produk tidak tersedia untuk dijual.
- **Retail readiness:** Kesiapan produk/listing/stock/price untuk menerima traffic.
- **In-store media:** Media pada lokasi fisik retailer/store.
- **Proof-of-play:** Log/foto/bukti penayangan layar/placement.
- **Footfall:** Jumlah pengunjung yang memasuki area/store menurut sensor/metode.
- **Daypart:** Segment waktu dalam hari untuk penjadwalan media.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH09 — Sales Measurement, ACoS, ROAS & Incrementality

**Competency ID(s):** T07-C05

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Retail measurement menggabungkan platform ad reports, retailer sales, SKU economics, new-to-brand, marketplace share, product margin, and incrementality. Attribution window, category, campaign eligibility, returns/cancellations, VAT/fees, and sales definitions perlu disamakan. ROAS/ACoS tidak menunjukkan profit bila margin/discount/fulfillment belum dihitung. Lift tests dan holdout dapat digunakan bila retailer methodology dan sample mendukung.

**Simulated example:** SIMULATED — campaign memiliki ROAS 5x, tetapi margin kontribusi produk hanya 12% dan promo besar. Setelah fees/returns, campaign bisa negatif. Measurement harus menghubungkan ad cost dengan product contribution, bukan sales gross saja.

**Technical depth / workflow:**
- <b>Define sales basis.</b> Bedakan gross/net, attributed sales, returns, cancelled orders, brand vs category, new-to-brand, and margin.
- <b>Reconcile data.</b> Align date, SKU, currency, tax, attribution window, campaign, and reporting latency.
- <b>Assess incrementality.</b> Design holdout/geo test if eligible; document limitations and sample.
- <b>Translate into decision.</b> Evaluate incremental contribution, inventory, price, channel, and next budget.

**Practice / deliverable:** Buat retail effectiveness dashboard spec dan analysis memo: spend, attributed sales, ACoS/ROAS, margin, returns, new-to-brand, stock, match coverage, and incrementality test design.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa ROAS tinggi belum tentu profitable?
   **Expected answer in guide (not independently approved):** Gross sales tidak memperhitungkan margin, discount, returns, fulfillment, retailer fees, dan incremental contribution.
2. **Q:** Apa yang perlu disamakan saat reconciliation?
   **Expected answer in guide (not independently approved):** Date, SKU, currency/tax, sales basis, attribution window, cancellations/returns, campaign tags, and data latency.
3. **Q:** Apa batas closed-loop reporting?
   **Expected answer in guide (not independently approved):** Coverage, match rate, attribution methodology, and selection bias membatasi causal interpretation.

**Glossary:**
- **New-to-brand:** Pembeli yang belum membeli brand dalam periode definisi retailer.
- **Contribution margin:** Revenue dikurangi biaya variabel/komersial yang relevan.
- **Return rate:** Porsi order/sales yang dikembalikan.
- **Incrementality test:** Desain untuk mengestimasi tambahan outcome akibat media.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH10 — Retail Media Capstone

**Competency ID(s):** T07-C05

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Capstone Retail & Commerce Media menyatukan shopper insight, retailer ecosystem, product readiness, onsite/offsite/in-store media, audience, activation, measurement, and profitability. Output bukan sekadar media plan marketplace; ia harus menjelaskan SKU priority, data/access, placement, forecast, operations, stock dependencies, closed-loop metrics, and test design. Cantumkan ketersediaan produk dan access assumptions berdasarkan provider yang diverifikasi.

**Simulated example:** SIMULATED — sebuah brand makanan mengalokasikan budget ke marketplace sponsored products, retail audience offsite, dan in-store screens di kota prioritas. Capstone memperhitungkan listing, stock, delivery service, margin, and matched-sales limits.

**Technical depth / workflow:**
- <b>Frame category problem.</b> Tentukan shopper, product, retailer, commercial objective, stock, price, and distribution.
- <b>Design media architecture.</b> Pilih onsite/offsite/in-store, audience, SKU, budget, flight, and channel roles.
- <b>Specify activation/governance.</b> Siapkan feed/listing, bidding, store ops, access, creative, tracking, and QA.
- <b>Measure economics.</b> Reconcile ad sales, margin, returns, stock, and incrementality; define next decision.

**Practice / deliverable:** Siapkan retail media strategy 90 hari plus workbook: retailer comparison, shopper journey, SKU readiness, inventory/placement matrix, audience segments, budget scenarios, campaign setup, measurement, sales/margin dashboard, and recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa yang membedakan retail capstone dari paid search/social?
   **Expected answer in guide (not independently approved):** Retail harus mengintegrasikan marketplace/retailer product data, stock, listing, shopper behavior, sales reconciliation, and margin.
2. **Q:** Bagaimana memastikan platform recommendations current?
   **Expected answer in guide (not independently approved):** Cek official help center, local advertiser eligibility, product taxonomy, update date, and current account access.
3. **Q:** Apa keputusan utama yang harus dipresentasikan?
   **Expected answer in guide (not independently approved):** Retailer/channel/SKU investment, budget, stock/readiness actions, risk, measurement confidence, and next scale/hold decision.

**Glossary:**
- **Retail media strategy:** Rencana penggunaan inventory/data retailer untuk memengaruhi shopping outcomes.
- **SKU:** Stock Keeping Unit; unit identifikasi produk.
- **Closed-loop sales:** Sales yang dihubungkan dengan media exposure menurut provider methodology.
- **Retail capstone:** Paket bukti strategy-to-sales untuk retailer/commerce media.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 8. Media Buying, Investment & Publisher Partnerships (`investment`)

### DPA-T08-CH01 — Media Owner, Publisher & Supply Landscape

**Competency ID(s):** T08-C01

**Agency evidence (role-level):** D/A: Senior Investment Associate/Client Investment roles | B: Media Investment Director role evidence in elective audit | B/D: integrated investment roles | A: Senior Media Investment Executive Jakarta JD | D: Digital Investment/Publishing roles

**Learning objective / concept:** Media Investment dan Publisher Partnerships berfokus pada pembelian inventory secara komersial dan pengelolaan relasi media owner. Fungsi ini berbeda dari media planning yang merancang channel mix dan forecast, serta berbeda dari biddable/programmatic yang membeli melalui auction/DSP. Investment specialist mengevaluasi rate, audience, package, value-add, supply, terms, contract, delivery, and value-for-money.

**Simulated example:** SIMULATED — publisher menawarkan premium homepage takeover, sponsorship, dan ROS display. Buyer perlu membedakan guaranteed exposure, share-of-voice, audience profile, added value, tracking, and cancellation terms sebelum menilai penawaran.

**Technical depth / workflow:**
- <b>Petakan ecosystem.</b> Identifikasi media owner, sales house, publisher rep, agency investment, trading desk, and Ad Ops.
- <b>Kelompokkan buying route.</b> Bedakan direct IO, sponsorship, reserved inventory, network, deal, dan auction-based buying.
- <b>Tentukan commercial criteria.</b> Audience, placement, rate, availability, reach, quality, bonus, and measurement.
- <b>Document accountability.</b> Catat approval, owner, contract, cancellation, delivery, proof, and invoice.

**Practice / deliverable:** Buat media owner landscape dan buying route map untuk satu kategori. Tulis siapa pemilik inventory, siapa bernegosiasi, siapa approve, siapa traffick, serta bukti delivery/billing yang dibutuhkan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda Media Investment dengan Programmatic Trading?
   **Expected answer in guide (not independently approved):** Investment menegosiasikan/membeli inventory/partnership secara komersial; Programmatic Trader mengelola buying berbasis DSP/auction/deal.
2. **Q:** Apa beda Media Planner dengan Media Buyer?
   **Expected answer in guide (not independently approved):** Planner menyusun strategy/mix/budget/forecast; buyer menegosiasikan rates, terms, booking, dan inventory delivery.
3. **Q:** Mengapa ownership map penting?
   **Expected answer in guide (not independently approved):** Agar negotiation, approval, booking, tracking, QA, and invoice memiliki accountable owner yang jelas.

**Glossary:**
- **Media owner:** Pemilik/pengelola inventory dan paket media.
- **Direct buy:** Pembelian inventory langsung melalui publisher/media owner.
- **Investment:** Pengalokasian/pembelian media dan penilaian nilai komersialnya.
- **Booking:** Komitmen inventory/tanggal/volume sesuai terms.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T08-CH02 — Inventory, Audience & Media Value Assessment

**Competency ID(s):** T08-C02

**Agency evidence (role-level):** D/A: Senior Investment Associate/Client Investment roles | B: Media Investment Director role evidence in elective audit | B/D: integrated investment roles | A: Senior Media Investment Executive Jakarta JD | D: Digital Investment/Publishing roles

**Learning objective / concept:** Inventory evaluation menilai audience fit, reach, context, format, quality, availability, exclusivity, placement, package flexibility, and pricing. Media kit menyediakan deskripsi inventory, tetapi klaim reach/circulation perlu diperiksa berdasarkan source, period, methodology, duplication, and target. Value bukan sekadar audience besar; premium context, relevance, attention, and commercial guarantee juga penting.

**Simulated example:** SIMULATED — dua media owner menawarkan reach 1 juta. Satu menggunakan monthly unique users, satu menggunakan total visits; angka tak comparable. Buyer harus meminta definition, data source, period, audience split, and delivery method.

**Technical depth / workflow:**
- <b>Collect media evidence.</b> Minta media kit, audience profile, traffic/reach, format, dates, availability, and measurement source.
- <b>Normalize units.</b> Samakan unique users, impressions, page views, GRP, circulation, duration, geography, and time window.
- <b>Assess value.</b> Nilai audience quality, context, attention, exclusivity, delivery guarantee, and cost.
- <b>Record caveats.</b> Tandai unverified claims, methodology gaps, and negotiated terms.

**Practice / deliverable:** Buat publisher inventory scorecard untuk lima opsi dengan audience, reach definition, format, quality, availability, rate, value-add, verification, methodology, dan recommended use.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa media kit tidak boleh diterima tanpa verifikasi?
   **Expected answer in guide (not independently approved):** Reach, circulation, audience and engagement claims dapat memakai definisi/periode berbeda atau self-reported.
2. **Q:** Apa yang membuat proposal media value comparable?
   **Expected answer in guide (not independently approved):** Satuan, audience, dates, placements, format, reporting, measurement, exclusivity, fees, and contract basis harus dinormalisasi.
3. **Q:** Bagaimana menilai value-add?
   **Expected answer in guide (not independently approved):** Periksa placement, audience, timing, guarantee, production/measurement cost, and whether it substitutes paid inventory.

**Glossary:**
- **Media kit:** Dokumen komersial yang merangkum audience, inventory, formats, and rates.
- **Unique reach:** Orang/household unik menurut metode dan periode tertentu.
- **Value-add:** Inventory/service tambahan di luar paid commitment utama.
- **Share of voice:** Proporsi exposure/voice dalam kategori menurut definisi metric.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T08-CH03 — Rate Card, RFP/RFQ & Proposal Evaluation

**Competency ID(s):** T08-C03, T08-C05

**Agency evidence (role-level):** D/A: Senior Investment Associate/Client Investment roles | B: Media Investment Director role evidence in elective audit | B/D: integrated investment roles | A: Senior Media Investment Executive Jakarta JD | D: Digital Investment/Publishing roles

**Learning objective / concept:** RFP/RFQ mengubah kebutuhan media menjadi permintaan proposal atau quotation yang dapat dibandingkan. Dokumen harus menetapkan objective, target, geography, dates, format, deliverables, KPI, audience requirement, budget range, measurement, brand safety, and commercial terms. Proposal review memeriksa completeness, assumptions, exclusions, rate basis, bonus, agency fee, production, data/measurement cost, and cancellation policy.

**Simulated example:** SIMULATED — satu publisher memberi gross rate, lainnya net rate setelah discount; proposal A menyertakan production fee sementara B tidak. Tanpa normalized cost sheet, perbandingan tidak apple-to-apple.

**Technical depth / workflow:**
- <b>Draft RFP.</b> Masukkan scope, KPI, audience, inventory, timeframe, deliverables, required data, and response format.
- <b>Set evaluation criteria.</b> Tentukan must-have, weighted score, commercial, audience, quality, and execution risk.
- <b>Normalize quote.</b> Pisahkan gross/net, discount, bonus, agency fee, production, tax, cancellation, and makegood.
- <b>Record clarification.</b> Minta jawaban tertulis untuk exclusions, assumptions, and delivery commitments.

**Practice / deliverable:** Buat RFP template dan proposal comparison untuk tiga publisher. Sertakan standardized fields, weighted scoring, commercial normalization, clarification log, and recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda RFP dan RFQ?
   **Expected answer in guide (not independently approved):** RFP meminta solusi/proposal yang menjelaskan approach; RFQ meminta quotation untuk scope/requirements yang lebih terdefinisi.
2. **Q:** Mengapa gross dan net rate harus dipisah?
   **Expected answer in guide (not independently approved):** Discount/commission/fees dapat membuat quoted price tidak comparable dengan final payable amount.
3. **Q:** Apa risiko added value dijadikan pengganti discount?
   **Expected answer in guide (not independently approved):** Bonus mungkin tidak relevan, tidak guaranteed, atau memiliki kualitas/jangkauan berbeda dari paid inventory.

**Glossary:**
- **RFP:** Request for Proposal untuk solusi dan penawaran.
- **RFQ:** Request for Quotation untuk harga atas scope tertentu.
- **Gross rate:** Rate sebelum discount/fee tertentu.
- **Net rate:** Rate setelah discount/commission sesuai definisi kontrak.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T08-CH04 — Reach, Cost, Value & Commercial Benchmarking

**Competency ID(s):** T08-C03

**Agency evidence (role-level):** D/A: Senior Investment Associate/Client Investment roles | B: Media Investment Director role evidence in elective audit | B/D: integrated investment roles | A: Senior Media Investment Executive Jakarta JD | D: Digital Investment/Publishing roles

**Learning objective / concept:** Commercial benchmarking membandingkan cost dan value menggunakan unit yang disamakan. CPM, CPP, cost per unique reach, sponsorship rate, package pricing, discount, and added value harus memiliki target universe, dates, format, geography, and delivery definitions yang jelas. Historical rate bukan otomatis market benchmark terkini. Buyer perlu menyimpan source, date, volume tier, currency, and negotiation condition.

**Simulated example:** SIMULATED — rate publisher turun 15%, namun placement dipindah dari premium homepage ke remnant ROS. Harga lebih murah tetapi value berubah; benchmark harus memperhitungkan inventory tier dan guarantee.

**Technical depth / workflow:**
- <b>Normalize benchmark.</b> Samakan format, placement, date, target, unit, volume, currency, and billable basis.
- <b>Segment pricing.</b> Pisahkan premium, ROS, sponsorship, fixed, CPM, CPC, CPP, and bundle.
- <b>Assess total value.</b> Sertakan discount, added value, production, data, measurement, and operational fee.
- <b>Set benchmark confidence.</b> Catat sample size, source, age, market, and negotiation context.

**Practice / deliverable:** Buat benchmark workbook dengan lima publisher packages. Hitung net CPM/cost per reach, total cost, bonus value, unit comparability, benchmark confidence, and recommended negotiation anchor.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa rate benchmark lama perlu caveat?
   **Expected answer in guide (not independently approved):** Inventory, market demand, inflation, seasonality, package, and commercial conditions berubah.
2. **Q:** Apa perbedaan cost efficiency dan value?
   **Expected answer in guide (not independently approved):** Cost efficiency menilai biaya per unit; value juga menilai quality, relevance, outcomes, guarantees, and audience context.
3. **Q:** Apa dampak package bundling?
   **Expected answer in guide (not independently approved):** Bundling bisa memberi efficiency tetapi menyamarkan rate per asset/placement dan mengurangi flexibility.

**Glossary:**
- **CPM:** Cost per thousand impressions.
- **CPP:** Cost per rating point.
- **Net media cost:** Biaya media yang dibayar setelah terms/discount sesuai definisi.
- **Benchmark confidence:** Tingkat keyakinan benchmark berdasar sumber, recency, sample, and comparability.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T08-CH05 — Negotiation, Trading Terms & Partnership

**Competency ID(s):** T08-C04

**Agency evidence (role-level):** D/A: Senior Investment Associate/Client Investment roles | B: Media Investment Director role evidence in elective audit | B/D: integrated investment roles | A: Senior Media Investment Executive Jakarta JD | D: Digital Investment/Publishing roles

**Learning objective / concept:** Negotiation media mengelola price, inventory, quality, dates, exclusivity, cancellation, makegood, payment, proof, data, and partnership value. Negotiation prep dimulai dari BATNA, objective, target/limit, leverage, alternative suppliers, and commercial priorities. Added value harus dinilai menurut audience dan delivery, bukan sekadar nominal rate-card yang tidak terpakai.

**Simulated example:** SIMULATED — publisher tidak dapat menurunkan rate, tetapi dapat memberi incremental home-page days, data report, and cancellation flexibility. Buyer menilai apakah konsesi tersebut benar-benar meningkatkan client value.

**Technical depth / workflow:**
- <b>Prepare negotiation.</b> Tentukan objective, walk-away, target, BATNA, volume, timing, and leverage.
- <b>Prioritize terms.</b> Negosiasikan rate, audience, position, exclusivity, added value, cancellation, makegood, and reporting.
- <b>Quantify concessions.</b> Hitung nilai/impact concession dan cek apakah deliverable benar-benar useful.
- <b>Document agreement.</b> Catat final terms, validity, approver, responsibilities, and escalation.

**Practice / deliverable:** Buat negotiation plan dan value tracker: target/limit, BATNA, concessions, added value, contract terms, risk, approval, and post-negotiation summary. Simulasikan vendor negotiation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa fungsi BATNA?
   **Expected answer in guide (not independently approved):** Alternatif terbaik jika kesepakatan tidak tercapai; memberi batas rasional dan mengurangi keputusan emosional.
2. **Q:** Mengapa semua added value tidak setara?
   **Expected answer in guide (not independently approved):** Nilainya tergantung audience, placement, timing, guarantee, production cost, and measurement.
3. **Q:** Apa yang harus didokumentasikan setelah negotiation?
   **Expected answer in guide (not independently approved):** Final rate, discount, scope, dates, inventory, cancellation, makegood, payment, proof, and authorized approver.

**Glossary:**
- **BATNA:** Best Alternative to a Negotiated Agreement.
- **Makegood:** Kompensasi/penayangan pengganti sesuai shortfall terms.
- **Exclusivity:** Hak/ketentuan eksklusif pada kategori/slot/period.
- **Concession:** Kompromi atau nilai yang diberikan dalam negotiation.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T08-CH06 — Media Booking, Insertion Order & Contract Terms

**Competency ID(s):** T08-C04

**Agency evidence (role-level):** D/A: Senior Investment Associate/Client Investment roles | B: Media Investment Director role evidence in elective audit | B/D: integrated investment roles | A: Senior Media Investment Executive Jakarta JD | D: Digital Investment/Publishing roles

**Learning objective / concept:** Insertion Order dan kontrak mengikat scope media buying menjadi komitmen komersial. IO perlu advertiser, publisher, placement, format, dates, quantity, rate, cost, currency, tax, cancellation, creative deadline, tracking, reporting, payment, and sign-off. Legal terms dapat meliputi indemnity, privacy, IP, liability, exclusivity, makegood, force majeure, and termination; buyer bukan pengganti legal counsel tetapi harus mengenali escalation points.

**Simulated example:** SIMULATED — IO mencantumkan 5 juta impressions, tetapi email negosiasi menyatakan 3 juta guaranteed dan 2 juta bonus. Jika tidak ditulis, invoice dan makegood dapat diperdebatkan. Scope final harus sama di IO, booking confirmation, and trafficking.

**Technical depth / workflow:**
- <b>Draft IO.</b> Isi legal entities, campaign, inventory, format, dates, volume, rates, fees, and currency.
- <b>Check delivery terms.</b> Bedakan guaranteed, estimated, bonus, value-add, and billable impressions.
- <b>Review clauses.</b> Periksa cancellation, makegood, creative deadlines, tracking, reporting, payment, privacy, and rights.
- <b>Secure approval.</b> Cocokkan budget approval, signatures, version, and booking confirmation.

**Practice / deliverable:** Buat IO checklist dan sample order form untuk campaign latihan. Bandingkan negotiated terms dengan signed IO dan trafficking sheet; tandai discrepancy/approval exceptions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa risiko bonus tidak tercatat terpisah?
   **Expected answer in guide (not independently approved):** Volume billable dan bonus dapat tertukar sehingga delivery/invoice reconciliation tidak akurat.
2. **Q:** Siapa yang menyetujui legal clause?
   **Expected answer in guide (not independently approved):** Procurement/legal/authorized approver sesuai governance organisasi; media buyer menandai dan mengeskalasi risiko.
3. **Q:** Mengapa IO harus selaras dengan trafficking sheet?
   **Expected answer in guide (not independently approved):** Agar inventory, dates, formats, volume, rates, tags, and responsibilities sama di dokumen komersial dan operasional.

**Glossary:**
- **Insertion Order:** Dokumen booking/komitmen media.
- **Billable delivery:** Delivery yang menjadi dasar penagihan.
- **Cancellation clause:** Ketentuan pembatalan dan biaya/notice.
- **Makegood clause:** Ketentuan pemulihan jika delivery tidak sesuai commitment.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T08-CH07 — Campaign Delivery, Proof of Performance & Makegoods

**Competency ID(s):** T08-C05

**Agency evidence (role-level):** D/A: Senior Investment Associate/Client Investment roles | B: Media Investment Director role evidence in elective audit | B/D: integrated investment roles | A: Senior Media Investment Executive Jakarta JD | D: Digital Investment/Publishing roles

**Learning objective / concept:** Delivery stewardship memastikan media owner memenuhi booking dan terms. Buyer memonitor booked vs delivered, dates, placements, creative, proof-of-posting/proof-of-play, audience, quality, and shortfall. Makegood bukan permintaan informal; ia mengikuti contract, tolerance, deadline, and evidence. Monitor campaign secara berkala agar masalah bisa diperbaiki sebelum end-of-flight.

**Simulated example:** SIMULATED — publisher menjanjikan 100 spot radio, tetapi proof menunjukkan 88 spot dan beberapa jadwal di luar agreed daypart. Buyer menyiapkan discrepancy evidence dan mengajukan makegood sesuai IO.

**Technical depth / workflow:**
- <b>Set delivery tracker.</b> Catat booking, placement, volume, schedule, rate, and evidence owner.
- <b>Monitor proof.</b> Periksa proof-of-posting/play, screenshots, log, photos, affidavit, and schedule.
- <b>Quantify shortfall.</b> Hitung gap dengan agreed tolerance dan billable basis.
- <b>Claim remediation.</b> Ajukan makegood/refund/credit sesuai clause, deadline, and client approval.

**Practice / deliverable:** Buat delivery tracker dan proof checklist untuk tiga publisher. Simulasikan underdelivery 12%; hitung shortfall, bukti yang diperlukan, makegood options, dan client communication.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda proof-of-posting dan proof-of-play?
   **Expected answer in guide (not independently approved):** Proof-of-posting mendokumentasikan publication placement; proof-of-play membuktikan screen/audio/spot diputar sesuai log.
2. **Q:** Mengapa shortfall tidak boleh langsung diasumsikan berdasarkan impressions?
   **Expected answer in guide (not independently approved):** Contract mungkin memakai billable basis, tolerance, sampling, or alternative delivery definition.
3. **Q:** Kapan makegood harus dieskalasi?
   **Expected answer in guide (not independently approved):** Saat delivery di luar tolerance, bukti tidak lengkap, deadline terlewati, atau remedy tidak sesuai kontrak.

**Glossary:**
- **Proof of posting:** Bukti placement/publikasi sesuai booking.
- **Proof of play:** Bukti spot/media diputar sesuai jadwal.
- **Shortfall:** Kekurangan delivery relatif pada commitment.
- **Makegood:** Kompensasi delivery sesuai perjanjian.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T08-CH08 — Invoice, Reconciliation & Financial Control

**Competency ID(s):** T08-C05

**Agency evidence (role-level):** D/A: Senior Investment Associate/Client Investment roles | B: Media Investment Director role evidence in elective audit | B/D: integrated investment roles | A: Senior Media Investment Executive Jakarta JD | D: Digital Investment/Publishing roles

**Learning objective / concept:** Invoice reconciliation menghubungkan IO, vendor invoice, rate, volume, dates, placement, currency, tax, fees, discount, bonus, makegood, and proof. Buyer harus membedakan planned, contracted, delivered, and billable basis. Variance dapat berasal dari taxes, FX, cancellation, underdelivery, extra placement, or contract amendments. Semua adjustment harus memiliki evidence dan approver.

**Simulated example:** SIMULATED — IO Rp100 juta net, invoice Rp112 juta karena production fee dan tax ditambah. Jika production fee sudah termasuk di rate, invoice perlu clarification. Finance tidak boleh membayar berdasarkan summary tanpa line-item evidence.

**Technical depth / workflow:**
- <b>Match documents.</b> Cocokkan IO/contract, amendments, invoice, delivery report, and proof.
- <b>Recalculate.</b> Cek unit × rate, discount, tax, currency, agency fee, production, bonus, and makegood.
- <b>Investigate variance.</b> Kategorikan billing error, delivery gap, FX/tax, scope change, or legitimate add-on.
- <b>Close with controls.</b> Dapatkan correction/credit note, approvals, audit trail, and archive.

**Practice / deliverable:** Buat reconciliation workbook dari satu IO dan invoice sintetis. Gunakan line-item matching, formula checks, variance categories, evidence links, approval status, and payment recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda invoice variance dan delivery variance?
   **Expected answer in guide (not independently approved):** Invoice variance adalah selisih amount/terms; delivery variance adalah perbedaan volume/placement/flight terhadap booking.
2. **Q:** Apa yang dilakukan bila currency/tax tidak cocok?
   **Expected answer in guide (not independently approved):** Verifikasi kontrak, exchange-rate basis, tax treatment, legal entity, and finance rules sebelum approve.
3. **Q:** Mengapa audit trail perlu disimpan?
   **Expected answer in guide (not independently approved):** Memudahkan dispute, finance approval, month-end close, compliance, and vendor accountability.

**Glossary:**
- **Reconciliation:** Pencocokan dokumen dan angka antar sistem.
- **Credit note:** Dokumen koreksi pengurang invoice.
- **Variance:** Selisih antara nilai/volume yang diharapkan dan actual.
- **Audit trail:** Bukti perubahan, approval, dan keputusan yang dapat ditelusuri.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T08-CH09 — Media Investment Evaluation & Recommendation

**Competency ID(s):** T08-C05

**Agency evidence (role-level):** D/A: Senior Investment Associate/Client Investment roles | B: Media Investment Director role evidence in elective audit | B/D: integrated investment roles | A: Senior Media Investment Executive Jakarta JD | D: Digital Investment/Publishing roles

**Learning objective / concept:** Investment evaluation menilai hasil pembelian dan hubungan media owner setelah campaign. Analisis mencakup cost, delivery, audience quality, placement, value-add, fees, makegood, effectiveness, and future leverage. Negosiasi berikutnya menggunakan evidence, bukan sekadar meminta discount. Buyer harus menyampaikan value story kepada planner/finance/client serta memisahkan hasil komersial dari performance campaign.

**Simulated example:** SIMULATED — publisher memberi bonus 20% inventory tetapi audience overlap dengan media utama sangat tinggi. Nilai incremental reach rendah; renegotiation perlu fokus pada placement/context atau measurement, bukan bonus impressions lagi.

**Technical depth / workflow:**
- <b>Review commercial outcome.</b> Bandingkan contracted/net cost, delivery, bonus, fees, and makegood.
- <b>Assess audience/value.</b> Periksa reach quality, duplication, context, premium placements, and outcome evidence.
- <b>Build partner scorecard.</b> Nilai reliability, responsiveness, transparency, value, and compliance.
- <b>Recommend next deal.</b> Tetapkan renewal, renegotiation, alternative partner, or escalation.

**Practice / deliverable:** Buat media investment review satu kuartal: vendor scorecard, rate/value history, delivery, quality, audience overlap, discrepancy, recommendation, and negotiation agenda.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa added value dapat bernilai rendah?
   **Expected answer in guide (not independently approved):** Jika audience overlap, timing, format, or quality tidak mendukung objective, bonus volume tidak menambah incremental value.
2. **Q:** Apa beda cost saving dan value creation?
   **Expected answer in guide (not independently approved):** Cost saving menurunkan spend; value creation meningkatkan kualitas, audience, outcome, reliability, or flexibility.
3. **Q:** Apa bukti partner layak dipertahankan?
   **Expected answer in guide (not independently approved):** Delivery reliability, commercial fairness, transparency, issue resolution, audience value, and measurable contribution.

**Glossary:**
- **Media value:** Nilai gabungan dari audience, context, delivery, cost, and outcome.
- **Vendor scorecard:** Penilaian supplier berdasar performance, cost, service, quality, and governance.
- **Rate history:** Catatan harga/terms lintas campaign/periode.
- **Renewal:** Perpanjangan kerja sama atau booking dengan terms baru.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T08-CH10 — Investment Capstone

**Competency ID(s):** T08-C05

**Agency evidence (role-level):** D/A: Senior Investment Associate/Client Investment roles | B: Media Investment Director role evidence in elective audit | B/D: integrated investment roles | A: Senior Media Investment Executive Jakarta JD | D: Digital Investment/Publishing roles

**Learning objective / concept:** Capstone Media Buying/Investment membuktikan kemampuan membeli dan menjaga nilai inventory secara komersial dari RFP sampai invoice. Paket harus mencakup media owner mapping, inventory evaluation, proposal normalization, negotiation, IO/contract, delivery stewardship, proof, reconciliation, and investment review. Track ini tidak mengajarkan DSP bidding sebagai kompetensi inti; direct publisher buying menjadi fokus, dengan auction/platform buying sebagai cross-track awareness.

**Simulated example:** SIMULATED — brand meminta sponsorship 6 minggu, display package, and live activation. Buyer harus memilih publisher, negotiate rates/terms, coordinate production/creative, monitor proof and billing, dan menilai apakah package layak diperpanjang.

**Technical depth / workflow:**
- <b>Source and evaluate.</b> Buat longlist media owner, inventory, audience, rates, and fit.
- <b>Negotiate and contract.</b> Bangun RFP, comparison, negotiation plan, and signed IO.
- <b>Steward delivery.</b> Track creative, timing, proof, shortfall, and remediation.
- <b>Reconcile and review.</b> Close invoice, score partner, and recommend investment next cycle.

**Practice / deliverable:** Siapkan complete buying pack: media owner map, RFP, proposal comparison, negotiation plan, signed-style IO sample, trafficking handoff, delivery/proof tracker, reconciliation workbook, and investment review deck.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa yang membedakan buyer capstone dengan media plan?
   **Expected answer in guide (not independently approved):** Buyer capstone membuktikan commercial procurement, negotiation, contract, delivery, proof, and financial control.
2. **Q:** Apa hubungan buyer dengan Ad Ops?
   **Expected answer in guide (not independently approved):** Buyer/Investment mengatur deal/terms dan booking; Ad Ops menerjemahkan booking ke trafficking/tracking/QA; planner memastikan tujuan media.
3. **Q:** Bagaimana membuktikan negotiation berhasil?
   **Expected answer in guide (not independently approved):** Bandingkan baseline/alternative, final terms, total cost, inventory quality, delivery, added value actually used, and risks.

**Glossary:**
- **Publisher partnership:** Hubungan komersial/operasional dengan media owner.
- **RFP pack:** Dokumen permintaan dan evaluasi proposal.
- **IO pack:** Dokumen komitmen pembelian dan terms.
- **Investment review:** Penilaian total value/efficiency atas pembelian media.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 9. Ad Operations / Digital Campaign Operations (`adops`)

### DPA-T09-CH01 — Digital Ad Tech & Campaign Delivery Ecosystem

**Competency ID(s):** T09-C01

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | A: Ad Operations Specialist, Publicis employer-hosted careers JD, Johannesburg; trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live confirmation and issue logs; 2–5 years' Ad Ops/trafficking experience. | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Ad Operations menghubungkan media plan, platform/ad server, publisher, creative, tracking, verification, dan analytics. Tugas utamanya memastikan campaign dikonfigurasi, ditayangkan, dilacak, dan direkonsiliasi dengan benar—bukan menetapkan seluruh audience strategy atau budget allocation. Ekosistem dapat meliputi Google Ads, Meta, TikTok, LinkedIn, DV360, CM360, retailer platforms, dan direct publisher placements. Scope kerja mengikuti platform yang dipakai klien.

**Simulated example:** SIMULATED — campaign paid social, programmatic, dan publisher display menggunakan naming/UTM/tracking berbeda. Ad Ops membuat operation map agar creative, URL, pixels, CM360 tags, dates, approvals, and reporting definitions konsisten.

**Technical depth / workflow:**
- <b>Map ecosystem.</b> Identifikasi advertiser, ad platform, ad server, publisher, tracker, analytics, verification, and owner.
- <b>Define operation boundary.</b> Pisahkan media strategy/buying dari trafficking, technical setup, QA, monitoring, and reconciliation.
- <b>Set governance.</b> Tentukan naming, permission, approval, version control, change log, and evidence requirements.
- <b>Plan handoff.</b> Pastikan brief, assets, dates, URLs, tracking, targeting, and budget final sebelum activation.

**Practice / deliverable:** Buat cross-platform Ad Ops ecosystem diagram untuk satu campaign: platform roles, ad server, tags/pixels, publisher, verification, ownership, approvals, and evidence trail.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda Ad Ops dan Media Buyer?
   **Expected answer in guide (not independently approved):** Ad Ops menjalankan technical trafficking, tracking, QA, and delivery control; buyer mengelola inventory purchase, rates, and commercial terms.
2. **Q:** Apa beda Ad Ops dan performance specialist?
   **Expected answer in guide (not independently approved):** Performance specialist mengelola audience/bidding/creative optimization; Ad Ops memastikan setup teknis dan measurement berfungsi.
3. **Q:** Mengapa multi-platform governance penting?
   **Expected answer in guide (not independently approved):** Tanpa naming, versioning, access, and approval yang konsisten, kesalahan sulit dilacak antar channel.

**Glossary:**
- **Ad Operations:** Fungsi teknis untuk setup, trafficking, tracking, QA, delivery, and reconciliation.
- **Trafficking:** Penerjemahan brief/booking menjadi konfigurasi campaign/placement/ad/tag.
- **Ad server:** Sistem ad decisioning/delivery/tracking.
- **Change log:** Catatan perubahan konfigurasi beserta alasan dan approver.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH02 — Campaign Brief, Trafficking Sheet & Naming Taxonomy

**Competency ID(s):** T09-C02

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | A: Ad Operations Specialist, Publicis employer-hosted careers JD, Johannesburg; trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live confirmation and issue logs; 2–5 years' Ad Ops/trafficking experience. | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Campaign brief dan trafficking sheet adalah single source of truth operasional. Setiap object perlu advertiser/client, campaign, platform/publisher, placement/ad set/line item, creative, format, URL, click tracker, pixel/event, targeting, flight, budget, owner, approval, dan status. Naming taxonomy harus memudahkan identifikasi sekaligus kompatibel dengan reporting; jangan menaruh data pribadi di parameter atau URL.

**Simulated example:** SIMULATED — brief menyebut 'campaign launch minggu depan' tanpa final landing URL, creative IDs, tracking owner, or signed approval. Ad Ops perlu mengembalikan blocker list sebelum setup, bukan mengarang detail.

**Technical depth / workflow:**
- <b>Read the approved brief.</b> Ekstrak objective, platform, markets, dates, budget, assets, audience, tracking, and KPI.
- <b>Build object map.</b> Tentukan hierarchy sesuai platform dan relasi campaign/placement/creative/tag.
- <b>Apply taxonomy.</b> Gunakan naming yang memuat brand, market, objective, platform, format, audience, flight, and version.
- <b>Validate completeness.</b> Gunakan required-field checks, owner, approval, dependency, and status.

**Practice / deliverable:** Buat trafficking sheet lintas Meta, Google, TikTok, dan direct placement dengan IDs, names, asset specs, URLs, tags, flight, budget, targeting, owners, approval, and status.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa trafficking sheet harus mencatat object IDs?
   **Expected answer in guide (not independently approved):** Nama dapat berubah/duplikat; ID membantu traceability, QA, API/report matching, dan handover.
2. **Q:** Apa risiko URL belum final?
   **Expected answer in guide (not independently approved):** Traffic dapat salah arah, tracking parameter hilang, conversion tidak terekam, atau campaign terpaksa dihentikan.
3. **Q:** Apa fungsi version control?
   **Expected answer in guide (not independently approved):** Menghindari asset/setting lama tertayang dan memastikan approval merujuk pada versi final.

**Glossary:**
- **Trafficking sheet:** Dokumen instruksi detail konfigurasi campaign.
- **Naming taxonomy:** Aturan penamaan sistematis untuk objek dan laporan.
- **Object ID:** Identifier unik dari platform/ad server.
- **Required field:** Informasi minimum yang wajib sebelum setup/go-live.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH03 — Creative, Placement & Technical Specifications

**Competency ID(s):** T09-C03

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | A: Ad Operations Specialist, Publicis employer-hosted careers JD, Johannesburg; trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live confirmation and issue logs; 2–5 years' Ad Ops/trafficking experience. | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Creative and placement specifications memastikan asset diterima dan dirender sesuai environment. Periksa dimensions, aspect ratio, file size, format, duration, codec, frame rate, audio, click URL, SSL, safe zone, HTML5, fallbacks, responsive behavior, and platform policy. Spec berubah; selalu cek halaman resmi platform/publisher dan tanggal. Asset approved secara brand belum tentu technically eligible.

**Simulated example:** SIMULATED — satu video 9:16 memiliki file size melebihi limit dan CTA tertutup safe zone; upload gagal atau tampil terpotong. Ad Ops memvalidasi spec sebelum creative delivery deadline.

**Technical depth / workflow:**
- <b>Identify placements.</b> Catat platform, format, dimensions, ratio, duration, size, and technical requirements.
- <b>Check rendering.</b> Periksa mobile/desktop, safe zones, subtitle/audio, text legibility, responsive layout, and fallback.
- <b>Validate click path.</b> Test URL, redirects, parameters, SSL, deep link, and landing experience.
- <b>Store evidence.</b> Simpan spec version/date, preview screenshot, rejection notes, and approval.

**Practice / deliverable:** Buat creative spec matrix untuk 6 placements (display, video, story/reel, native, HTML5, retailer sponsored content). Sertakan sumber resmi, date checked, file limits, CTA, safe zones, fallback, and QA status.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa creative spec harus bersumber dari dokumen terkini?
   **Expected answer in guide (not independently approved):** Dimensi, limits, file type, placement rules, and policy dapat berubah antar platform dan waktu.
2. **Q:** Apa itu fallback?
   **Expected answer in guide (not independently approved):** Asset atau behavior alternatif saat creative utama tidak didukung environment/placement.
3. **Q:** Apa yang diperiksa pada click URL selain destination?
   **Expected answer in guide (not independently approved):** Redirect, query parameters, UTMs, macros, SSL, deep-link behavior, and tracking events.

**Glossary:**
- **Aspect ratio:** Perbandingan lebar dan tinggi asset.
- **Safe zone:** Area aman agar teks/visual tidak tertutup UI.
- **HTML5 creative:** Asset iklan interaktif berbasis teknologi web.
- **Fallback:** Alternatif creative/behavior jika asset utama tidak kompatibel.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH04 — Tags, Pixels, UTMs & Click Trackers

**Competency ID(s):** T09-C04

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | A: Ad Operations Specialist, Publicis employer-hosted careers JD, Johannesburg; trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live confirmation and issue logs; 2–5 years' Ad Ops/trafficking experience. | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Tagging dan tracking memiliki fungsi berbeda. Platform pixel/SDK/CAPI merekam events; UTM memberi label traffic; ad-server placement tag memanggil creative/delivery; click tracker merekam click redirect; impression tracker mengukur exposure; Floodlight mengukur activity di Campaign Manager 360. Ad Ops harus mengetahui siapa memasang, siapa memverifikasi, data apa yang dikirim, consent dependency, and deduplication.

**Simulated example:** SIMULATED — UTM ditambahkan ke URL tetapi purchase pixel tidak terpicu. GA4 dapat membaca campaign source namun platform tidak menerima conversion signal; keduanya bukan pengganti satu sama lain.

**Technical depth / workflow:**
- <b>Build tag map.</b> Catat tag, function, platform, event, parameters, trigger, owner, and destination.
- <b>Validate consent.</b> Tentukan behavior untuk consent granted/denied sesuai implementation and legal requirements.
- <b>Test firing.</b> Gunakan Preview/Tag Assistant, pixel diagnostics, test events, click test, and network/tag evidence.
- <b>Reconcile events.</b> Check duplicates, missing events, parameters, identifiers, time zone, and attribution windows.

**Practice / deliverable:** Buat cross-platform tag map untuk Google tag/GA4, GTM, Meta Pixel/CAPI, TikTok Pixel/Events API, CM360/Floodlight, click/impression tracker, and UTM; sertakan QA cases.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa perbedaan UTM dan pixel?
   **Expected answer in guide (not independently approved):** UTM memberi label source/medium/campaign pada traffic; pixel merekam event/interaksi untuk platform measurement.
2. **Q:** Mengapa server-side CAPI bukan sekadar tag lain?
   **Expected answer in guide (not independently approved):** Ia mengirim event dari server dengan identity/consent/deduplication controls yang berbeda dari browser pixel.
3. **Q:** Apa bukti tag benar-benar bekerja?
   **Expected answer in guide (not independently approved):** Test event/log, expected parameters, trigger condition, no duplicate, consent behavior, and platform diagnostics.

**Glossary:**
- **UTM:** Parameter URL untuk klasifikasi campaign source/medium.
- **Pixel:** Script/client-side event tracking di browser.
- **CAPI/Events API:** Server-side event transmission ke platform.
- **Floodlight:** Campaign Manager 360 activity/conversion tracking.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH05 — CM360 Campaign, Placement, Ad & Floodlight Setup

**Competency ID(s):** T09-C03, T09-C05

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | A: Ad Operations Specialist, Publicis employer-hosted careers JD, Johannesburg; trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live confirmation and issue logs; 2–5 years' Ad Ops/trafficking experience. | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Ad-server setup seperti CM360 menyusun advertiser, campaign, site, placement, ad, creative, and trackers. Placement mewakili inventory slot dan menghasilkan tag; ad mengontrol delivery/rotation; creative merupakan asset. Floodlight activities memakai counting method, activity group, value, and conversion window. Implementasi harus konsisten dengan naming, click tags, publisher requirements, and reporting.

**Simulated example:** SIMULATED — placement dibuat untuk 300×250 display namun ad creative dipasang 320×50. Publisher menerima tag tetapi tidak merender dengan benar. QA harus mencocokkan placement size, ad, creative, and tag.

**Technical depth / workflow:**
- <b>Build hierarchy.</b> Rancang advertiser/campaign/site/placement/ad/creative relationship.
- <b>Define Floodlight.</b> Tentukan activity, group, counting method, value, tag, and window sesuai business action.
- <b>Generate and validate tags.</b> Periksa placement tag, click tracker, SSL, publisher implementation guide, and macros.
- <b>Test delivery.</b> Simulasikan ad request/rendering, click, and conversion; catat publisher acceptance.

**Practice / deliverable:** Buat CM360 setup blueprint: advertiser, campaign, sites, placements, ads, creatives, Floodlight activity groups, counting methods, tags, and QA evidence. Labeli as design simulation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda placement dan creative?
   **Expected answer in guide (not independently approved):** Placement adalah slot/inventory; creative adalah asset yang ditayangkan dalam slot tersebut.
2. **Q:** Apa fungsi Floodlight counting method?
   **Expected answer in guide (not independently approved):** Menentukan bagaimana activity dihitung agar conversion metric sesuai definisi bisnis.
3. **Q:** Apa yang perlu diserahkan ke publisher?
   **Expected answer in guide (not independently approved):** Correct ad/placement tags, spec, click macro, dates, creative, implementation instructions, and QA contacts.

**Glossary:**
- **Placement:** Representasi slot inventory dalam ad server.
- **Creative:** Asset iklan yang ditayangkan.
- **Floodlight activity:** Event yang diukur oleh CM360.
- **Counting method:** Aturan penghitungan activity/conversion.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH06 — Pre-Launch QA, Testing & Go-Live Checklist

**Competency ID(s):** T09-C03, T09-C06

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | A: Ad Operations Specialist, Publicis employer-hosted careers JD, Johannesburg; trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live confirmation and issue logs; 2–5 years' Ad Ops/trafficking experience. | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Pre-launch QA adalah quality gate sebelum campaign live. Checklist harus mencakup object setup, budget, flight, targeting, creative rendering, URL, redirects, tags/events, consent, policy, exclusions, frequency, geo, language, conversion settings, publisher acceptance, and sign-off. Upload success tidak berarti siap launch. Severity levels membantu menentukan blocker, major issue, and minor issue.

**Simulated example:** SIMULATED — campaign sudah active tetapi landing URL masih staging dan conversion event duplicate. QA harus menghentikan launch sampai blocker diselesaikan, bukan hanya mengirim screenshot campaign status.

**Technical depth / workflow:**
- <b>Prepare test plan.</b> Tulis expected/actual result untuk each field, event, creative, and placement.
- <b>Execute end-to-end test.</b> Check ad preview/render, click, landing, redirects, conversion, analytics, consent, and platform acceptance.
- <b>Classify issues.</b> Tentukan severity, impact, owner, due time, evidence, and retest.
- <b>Obtain sign-off.</b> Simpan approval dari media owner, client, creative, data, and campaign owner.

**Practice / deliverable:** Buat pre-launch QA checklist dengan 30 test cases, expected vs actual, severity, owner, evidence link, status, retest, and formal go/no-go decision.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa status campaign active belum cukup sebagai QA?
   **Expected answer in guide (not independently approved):** Campaign bisa active tetapi asset, URL, tag, targeting, consent, atau conversion path salah.
2. **Q:** Apa contoh blocker?
   **Expected answer in guide (not independently approved):** Wrong landing URL, non-working conversion tag, unapproved claim, incorrect geo/date/budget, or rejected creative.
3. **Q:** Apa tujuan severity classification?
   **Expected answer in guide (not independently approved):** Membantu memprioritaskan issue berdasarkan impact dan mencegah low-priority issue menahan launch tanpa alasan.

**Glossary:**
- **Pre-launch QA:** Verifikasi menyeluruh sebelum campaign go-live.
- **Go/no-go:** Keputusan launch atau tahan berdasarkan acceptance criteria.
- **Severity:** Tingkat dampak/urgency dari issue.
- **Sign-off:** Persetujuan resmi bahwa standar launch terpenuhi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH07 — Live Campaign Monitoring, Pacing & Troubleshooting

**Competency ID(s):** T09-C06

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | A: Ad Operations Specialist, Publicis employer-hosted careers JD, Johannesburg; trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live confirmation and issue logs; 2–5 years' Ad Ops/trafficking experience. | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Live monitoring membandingkan planned dengan actual delivery dan memisahkan media issue dari tracking issue. Pantau spend, pacing, impressions, clicks, conversions, cost metrics, rejection, placement status, frequency, viewability/IVT, site errors, and reporting lag. Troubleshooting harus hirarkis: data signal, tag, creative, targeting, platform eligibility, inventory, budget/bid, and publisher—not langsung menaikkan spend.

**Simulated example:** SIMULATED — spend normal tetapi conversions turun mendadak. Klik dan landing sessions tetap normal, tetapi purchase event hilang setelah website release. Ini tracking/site issue, bukan bid atau audience problem.

**Technical depth / workflow:**
- <b>Set monitoring cadence.</b> Definisikan daily/weekly metrics, owner, thresholds, alert, and reporting time zone.
- <b>Isolate symptoms.</b> Bandingkan delivery, click, session, event, creative, placement, and CRM outcomes.
- <b>Follow diagnostic tree.</b> Periksa data/latency, tag/event, URL/page, creative, targeting, bid/budget, supply, and approvals.
- <b>Record action.</b> Simpan root-cause evidence, impact, mitigation, owner, and verification after fix.

**Practice / deliverable:** Buat monitoring dashboard/log dan troubleshooting tree untuk underdelivery, sudden spend spike, rejection, broken click URL, lost conversion event, and discrepancy.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa conversion drop tidak selalu masalah ads delivery?
   **Expected answer in guide (not independently approved):** Site, checkout, consent, tracking, price, stock, CRM, or reporting latency dapat berubah meski delivery normal.
2. **Q:** Apa urutan troubleshooting yang disiplin?
   **Expected answer in guide (not independently approved):** Isolasi simptom dan cek data/tag/page/creative/settings/supply sebelum mengubah bid/budget.
3. **Q:** Mengapa action log penting?
   **Expected answer in guide (not independently approved):** Membuat root cause, owner, risk, and recovery dapat diaudit dan mencegah perubahan berulang tanpa evidence.

**Glossary:**
- **Pacing:** Kecepatan spend/delivery terhadap rencana.
- **Underdelivery:** Delivery aktual lebih rendah dari komitmen/target.
- **Rejection:** Penolakan asset/campaign oleh platform/publisher/policy.
- **Troubleshooting tree:** Urutan diagnosis untuk menemukan sumber issue.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH08 — Platform Discrepancy & Data Validation

**Competency ID(s):** T09-C06

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | A: Ad Operations Specialist, Publicis employer-hosted careers JD, Johannesburg; trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live confirmation and issue logs; 2–5 years' Ad Ops/trafficking experience. | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Platform discrepancy muncul karena definisi event, click/impression filtering, attribution window, view-through, timezone, cut-off, consent, deduplication, latency, and identity berbeda. Ad Ops tidak boleh langsung menyebut salah satu sistem rusak sebelum membandingkan apples-to-apples. Reconciliation harus menyamakan scope, unit, date, event definition, and eligibility.

**Simulated example:** SIMULATED — Meta reports 120 purchase conversions, GA4 shows 96 sessions with purchase, CM360 reports 105 Floodlight activities. Differences may stem from attribution and dedupe; event map and transaction IDs are needed.

**Technical depth / workflow:**
- <b>Define comparable scope.</b> Samakan date, timezone, campaign, placement, event, device, and attribution window.
- <b>Check processing.</b> Review invalid traffic, consent, browser restrictions, event latency, duplicate, and redirects.
- <b>Build reconciliation table.</b> Compare each system's unit, count rule, source, and known exclusions.
- <b>Explain residual variance.</b> Separate resolved causes, plausible causes, and unverified differences.

**Practice / deliverable:** Buat discrepancy report tiga platform: data dictionary, event mapping, timezone/cutoff, click/view windows, dedupe, consent, latency, matched/unknown variance, and recommendations.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa arti apples-to-apples reconciliation?
   **Expected answer in guide (not independently approved):** Perbandingan dengan unit, window, timezone, event, scope, dan eligibility yang setara.
2. **Q:** Mengapa click count tidak sama dengan GA4 sessions?
   **Expected answer in guide (not independently approved):** Click dapat gagal load, user close page, redirect, consent, browser block, or multiple clicks per session.
3. **Q:** Kapan discrepancy perlu dieskalasi?
   **Expected answer in guide (not independently approved):** Jika di luar tolerance/contract, memengaruhi billing/optimization, atau sumber perbedaan tidak dapat dijelaskan.

**Glossary:**
- **Attribution discrepancy:** Perbedaan count akibat aturan credit/window.
- **Data latency:** Waktu antara event terjadi dan data tersedia.
- **Deduplication:** Penghapusan event duplikat menurut identifier/rule.
- **Cut-off:** Batas waktu/periode yang dipakai untuk reporting.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH09 — Billing Reconciliation, Documentation & Process Control

**Competency ID(s):** T09-C07

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | A: Ad Operations Specialist, Publicis employer-hosted careers JD, Johannesburg; trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live confirmation and issue logs; 2–5 years' Ad Ops/trafficking experience. | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Billing reconciliation and process control menjaga kesesuaian booking, delivery, dan invoice. Ad Ops mengumpulkan IO, placement logs, rate, booked volume, billable basis, currency, tax, discount, bonus, makegood, platform fees, and proof. Finance controls perlu separation of duties, version history, access controls, and archive. Operational efficiency bukan berarti menghapus quality gates.

**Simulated example:** SIMULATED — vendor menagih 1 juta impressions tetapi proof delivery hanya 920 ribu. Contract menyebut 95% tolerance dan bonus impressions terpisah. Tim perlu menghitung shortfall dan memeriksa billable basis sebelum mengajukan credit.

**Technical depth / workflow:**
- <b>Match financial records.</b> Cocokkan IO, platform booking, delivery, invoice, rate, tax, fees, and proof.
- <b>Recalculate billable.</b> Pisahkan booked, delivered, bonus, makegood, tolerance, and chargeable volume.
- <b>Govern process.</b> Gunakan approver, access controls, change logs, naming, and archived evidence.
- <b>Improve root process.</b> Catat recurring issue, SLA, automation candidates, and control owner.

**Practice / deliverable:** Buat billing reconciliation pack untuk dua vendor: IO-vs-invoice, delivery proof, billable calculation, variance, adjustment, approval, audit trail, and process improvement memo.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa delivered impressions belum tentu billable impressions?
   **Expected answer in guide (not independently approved):** Kontrak dapat memiliki tolerance, excluded events, bonus, or alternative billable definitions.
2. **Q:** Apa risiko satu orang mengatur dan menyetujui invoice sendiri?
   **Expected answer in guide (not independently approved):** Segregation of duties lemah sehingga fraud/error lebih sulit dideteksi.
3. **Q:** Apa output operational review yang berguna?
   **Expected answer in guide (not independently approved):** Recurring issue, control gap, SLA, owners, automation opportunities, and measurable process improvement.

**Glossary:**
- **Billable basis:** Unit/definisi delivery yang menjadi dasar tagihan.
- **Segregation of duties:** Pemisahan tanggung jawab agar tidak ada satu pihak mengontrol seluruh proses.
- **Audit trail:** Jejak dokumen dan keputusan yang dapat ditelusuri.
- **SLA:** Service-level agreement untuk waktu/kualitas layanan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH10 — Ad Operations Capstone

**Competency ID(s):** T09-C07

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | A: Ad Operations Specialist, Publicis employer-hosted careers JD, Johannesburg; trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live confirmation and issue logs; 2–5 years' Ad Ops/trafficking experience. | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Capstone Ad Operations menyatukan operation chain multi-platform: brief, trafficking, creative spec, tags, ad-server/platform setup, QA, go-live, monitoring, troubleshooting, discrepancy, billing, and documentation. Keberhasilan dinilai dari accuracy, traceability, risk control, and timely delivery—not creative strategy or budget optimization. Setiap contoh account/data harus berlabel SIMULATED dan tidak menyiratkan akses live.

**Simulated example:** SIMULATED — agency menjalankan launch lintas Google, Meta, TikTok, DV360/CM360, dan satu publisher direct. Capstone memastikan object IDs, creative, tracking, approvals, reporting, and billing traceable.

**Technical depth / workflow:**
- <b>Translate requirements.</b> Ubah approved brief menjadi platform/object/owner/specification matrix.
- <b>Build and validate.</b> Siapkan trafficking, tags, URL, creative, tracking, and platform config.
- <b>Launch and operate.</b> Simulasikan go-live, monitor, issue triage, and escalation.
- <b>Close and audit.</b> Reconcile reporting/billing, archive evidence, and recommend control improvements.

**Practice / deliverable:** Siapkan operational case pack: master brief, cross-platform trafficking sheet, creative spec matrix, tag map, CM360/Floodlight design, QA evidence, go-live checklist, monitoring log, incident report, discrepancy reconciliation, invoice pack, and process review.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa bukti Ad Ops yang siap portofolio?
   **Expected answer in guide (not independently approved):** Traceable operational artefacts: trafficking sheet, tags, QA evidence, approvals, monitoring, discrepancy, and billing reconciliation.
2. **Q:** Apa yang tidak boleh diklaim dari simulasi?
   **Expected answer in guide (not independently approved):** Tidak boleh mengklaim real client account access, live campaign delivery, spend, or campaign outcomes.
3. **Q:** Bagaimana Ad Ops menunjukkan nilai bisnis?
   **Expected answer in guide (not independently approved):** Mengurangi launch errors, data loss, downtime, underdelivery, billing disputes, and audit risk.

**Glossary:**
- **Operational control:** Prosedur untuk menjaga akurasi dan reliability proses.
- **Campaign artefact:** Dokumen/file yang membuktikan konfigurasi dan keputusan.
- **Incident report:** Catatan issue, impact, root cause, fix, and prevention.
- **Operational review:** Evaluasi proses, quality, efficiency, and improvements.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 10. Media Analytics / Marketing Science (`analytics`)

### DPA-T10-CH01 — Business Question, KPI & Measurement Framework

**Competency ID(s):** T10-C01, T10-C04

**Agency evidence (role-level):** A/D: Manager Analytics, Director Measurement Science and econometrician role listings | A: Associate Director, Analytics JD | D: Insights/Marketing Science career families | A: Director Data Science JD covers MMM, incrementality, forecasting, Python/SQL and methodology leadership | D: Analytics career listings and Global Data & Analytics Manager title evidence

**Learning objective / concept:** Media Analytics dimulai dari business question, bukan dashboard atau file data yang kebetulan tersedia. Pertanyaan harus menentukan unit analisis, periode, population, outcome, diagnostic metrics, guardrails, dan keputusan yang akan diambil. KPI architecture menghubungkan business outcomes dengan driver seperti spend, reach, qualified traffic, conversion, revenue, margin, and retention. Definisi metric wajib menyebut formula, denominator, source, timezone, attribution window, owner, and limitation.

**Simulated example:** SIMULATED — stakeholder bertanya mengapa CPA naik 25%. Analyst perlu tahu apakah CPA adalah per lead atau qualified lead, apakah spend includes fees, apakah conversion window berubah, dan apakah mix market/device ikut berubah sebelum mencari penyebab.

**Technical depth / workflow:**
- <b>Frame the question.</b> Ubah request menjadi keputusan spesifik, target population, unit, period, dan outcome.
- <b>Build KPI tree.</b> Pisahkan primary, diagnostic, leading, lagging, dan guardrail metrics.
- <b>Define metric dictionary.</b> Tulis formula, denominator, currency, time zone, attribution, source, refresh, dan owner.
- <b>Set analysis plan.</b> Tentukan data sources, segments, comparison, quality tests, dan expected decision.

**Practice / deliverable:** Buat measurement brief untuk pertanyaan bisnis 'apa yang mendorong kenaikan cost per qualified lead?'. Sertakan KPI tree, metric dictionary, analysis scope, segmentation, data owners, dan decision criteria.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa analyst perlu tahu keputusan apa yang akan diambil?
   **Expected answer in guide (not independently approved):** Agar analisis fokus pada evidence yang dapat mengubah tindakan, bukan hanya menghasilkan chart.
2. **Q:** Apa yang wajib ada di metric dictionary?
   **Expected answer in guide (not independently approved):** Formula, denominator, unit, currency, source, timezone, attribution window, owner, refresh, dan caveat.
3. **Q:** Apa beda leading dan lagging metrics?
   **Expected answer in guide (not independently approved):** Leading memberi sinyal awal proses; lagging mencatat hasil akhir seperti sales atau margin.

**Glossary:**
- **KPI tree:** Hubungan business outcome dengan driver dan metric.
- **Metric dictionary:** Definisi, formula, source, dan owner untuk setiap metrik.
- **Diagnostic metric:** Metrik yang membantu menjelaskan penyebab outcome.
- **Guardrail:** Batas agar optimasi tidak merusak kualitas atau bisnis.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T10-CH02 — Data Sources, Taxonomy & Data Quality

**Competency ID(s):** T10-C02

**Agency evidence (role-level):** A/D: Manager Analytics, Director Measurement Science and econometrician role listings | A: Associate Director, Analytics JD | D: Insights/Marketing Science career families | A: Director Data Science JD covers MMM, incrementality, forecasting, Python/SQL and methodology leadership | D: Analytics career listings and Global Data & Analytics Manager title evidence

**Learning objective / concept:** Media data berasal dari ad platforms, ad servers, GA4/Adobe Analytics, CRM, ecommerce, retailer, search console, finance, dan research sources. Grain harus diketahui sebelum join: campaign-day, ad-day, session, user, order, atau SKU. Taxonomy menstandarkan channel, campaign, market, audience, objective, and creative. Data quality memeriksa completeness, validity, consistency, uniqueness, accuracy, and timeliness.

**Simulated example:** SIMULATED — platform export memiliki satu row per ad-day; CRM satu row per lead; GA4 satu row per event. Join langsung berdasarkan campaign name dapat menggandakan spend dan conversion. Analyst harus menentukan grain, keys, and aggregation order.

**Technical depth / workflow:**
- <b>Inventory source.</b> Catat owner, access, refresh, scope, identifier, timezone, dan data limitations.
- <b>Set taxonomy.</b> Standarkan channel, source/medium, campaign, market, objective, creative, audience, and naming.
- <b>Audit quality.</b> Uji missing, duplicate, invalid values, date gaps, schema drift, currency, and outliers.
- <b>Define lineage.</b> Dokumentasikan extraction, transformation, join keys, aggregation grain, dan source of truth.

**Practice / deliverable:** Buat data source inventory dan QA audit untuk synthetic exports dari platform, GA4, CRM, dan ad server. Temukan duplicate, missing, invalid, date/currency mismatch, dan usulkan correction.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa itu grain data?
   **Expected answer in guide (not independently approved):** Level satu baris data merepresentasikan satu entitas/kejadian, misalnya campaign-day, event, session, atau order.
2. **Q:** Mengapa join key campaign name berisiko?
   **Expected answer in guide (not independently approved):** Naming bisa berubah/duplikat dan grain berbeda; join dapat menggandakan rows atau menyatukan entitas salah.
3. **Q:** Apa beda missing dan zero?
   **Expected answer in guide (not independently approved):** Missing berarti nilai tidak tersedia; zero berarti terukur dan nilainya nol. Menyamakan keduanya dapat mengubah kesimpulan.

**Glossary:**
- **Data grain:** Unit observasi pada setiap row.
- **Data lineage:** Jejak asal, transformasi, dan perpindahan data.
- **Schema drift:** Perubahan struktur/field yang dapat merusak pipeline.
- **Deduplication:** Penghapusan record duplikat menurut key/rule.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T10-CH03 — GA4, Platform Analytics & CM360 Data

**Competency ID(s):** T10-C03

**Agency evidence (role-level):** A/D: Manager Analytics, Director Measurement Science and econometrician role listings | A: Associate Director, Analytics JD | D: Insights/Marketing Science career families | A: Director Data Science JD covers MMM, incrementality, forecasting, Python/SQL and methodology leadership | D: Analytics career listings and Global Data & Analytics Manager title evidence

**Learning objective / concept:** GA4, native ad-platform analytics, dan CM360 memiliki model serta fungsi berbeda. GA4 berorientasi event/session/user; platform Ads mengoptimasi dan melaporkan menurut model internal; CM360/ad server merekam delivery, clicks, and Floodlight activities. Analyst harus memahami dimension, metric, event parameter, attribution setting, modeled data, consent, retention, thresholding, and export limits sebelum menyatukan data lintas sistem.

**Simulated example:** SIMULATED — Meta Ads reports 500 purchases, GA4 records 420 purchase events, CM360 reports 460 Floodlight activities. Perbedaan dapat disebabkan view-through, attribution windows, timezone, consent, dedupe, and event definition; tidak ada angka yang otomatis menjadi truth universal.

**Technical depth / workflow:**
- <b>Read each data model.</b> Petakan entity, event, session, impression, click, conversion, and parameter.
- <b>Map definitions.</b> Samakan event names, conversion rules, window, timezone, currency, and deduplication.
- <b>Check extraction.</b> Verifikasi API/export limits, sampling/thresholding, latency, and consent effects.
- <b>Reconcile carefully.</b> Bandingkan metric scope yang comparable dan dokumentasikan residual variance.

**Practice / deliverable:** Buat cross-platform metric mapping untuk Google Ads, Meta, TikTok, GA4, dan CM360. Sertakan event/metric definitions, attribution, time zone, deduplication, reporting grain, and known limitations.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa angka conversion platform bisa berbeda dari GA4?
   **Expected answer in guide (not independently approved):** Attribution, view-through, identity, consent, time zone, event definition, deduplication, and processing berbeda.
2. **Q:** Apa beda impression dan session?
   **Expected answer in guide (not independently approved):** Impression adalah exposure iklan; session adalah kumpulan interaksi website/app dalam analytics definition.
3. **Q:** Apa yang harus dipastikan sebelum data digabung?
   **Expected answer in guide (not independently approved):** Grain, keys, time zone, currency, naming, event definition, dedupe, and source limitations.

**Glossary:**
- **Event-based model:** Model analytics yang merekam interaksi sebagai event.
- **Dimension:** Atribut yang digunakan untuk mengelompokkan data.
- **Metric:** Nilai terukur seperti count, cost, rate, or revenue.
- **Attribution setting:** Aturan credit touchpoint pada conversion.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T10-CH04 — Spreadsheet, SQL & Data Extraction

**Competency ID(s):** T10-C04

**Agency evidence (role-level):** A/D: Manager Analytics, Director Measurement Science and econometrician role listings | A: Associate Director, Analytics JD | D: Insights/Marketing Science career families | A: Director Data Science JD covers MMM, incrementality, forecasting, Python/SQL and methodology leadership | D: Analytics career listings and Global Data & Analytics Manager title evidence

**Learning objective / concept:** Spreadsheet dan SQL digunakan untuk membersihkan, menggabungkan, dan menganalisis data secara reproducible. Spreadsheet cocok untuk QA/ad hoc, tetapi raw data besar memerlukan structured query. SQL mengharuskan analyst memahami SELECT, WHERE, GROUP BY, JOIN, CTE, window functions, date handling, nulls, and aggregation. Query yang benar secara sintaks masih dapat salah secara bisnis jika grain atau join relationship keliru.

**Simulated example:** SIMULATED — join campaign spend dan conversion table berdasarkan campaign ID tetapi tidak menyamakan date menghasilkan spend per campaign dikalikan jumlah tanggal conversion. Correct join membutuhkan key campaign-date atau pre-aggregation sesuai grain.

**Technical depth / workflow:**
- <b>Inspect dataset.</b> Baca schema, grain, row count, key uniqueness, nulls, and data types.
- <b>Write reproducible queries.</b> Gunakan filter period, CTE, aggregate, join with explicit keys, and documented logic.
- <b>Validate outputs.</b> Reconcile row counts/totals before and after join; test edge cases and duplicates.
- <b>Package analysis.</b> Simpan query, assumptions, data dictionary, QA result, and reusable workbook.

**Practice / deliverable:** Buat workbook data QA dan SQL notebook dengan minimal 5 query: spend aggregation, CTR/CVR/CPA, JOIN spend-to-conversion, cohort summary, dan outlier check. Sertakan expected output dan test assertions menggunakan data SIMULATED.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa SQL JOIN dapat menggandakan spend?
   **Expected answer in guide (not independently approved):** Join many-to-many atau grain yang tidak sama menyebabkan satu row cocok dengan banyak row di table lain.
2. **Q:** Mengapa query perlu test totals sebelum/sesudah join?
   **Expected answer in guide (not independently approved):** Reconciliation membantu mendeteksi double count, lost rows, and incorrect keys.
3. **Q:** Apa beda WHERE dan HAVING?
   **Expected answer in guide (not independently approved):** WHERE menyaring rows sebelum aggregation; HAVING menyaring hasil group/aggregate.

**Glossary:**
- **Grain:** Level detail setiap record.
- **JOIN:** Menggabungkan table berdasarkan relationship/key.
- **CTE:** Common Table Expression untuk menyusun query bertahap.
- **Window function:** Fungsi analitis di atas window rows tanpa mengurangi grain result.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T10-CH05 — Dashboard, Visualization & BI

**Competency ID(s):** T10-C04

**Agency evidence (role-level):** A/D: Manager Analytics, Director Measurement Science and econometrician role listings | A: Associate Director, Analytics JD | D: Insights/Marketing Science career families | A: Director Data Science JD covers MMM, incrementality, forecasting, Python/SQL and methodology leadership | D: Analytics career listings and Global Data & Analytics Manager title evidence

**Learning objective / concept:** Dashboard adalah interface keputusan, bukan galeri chart. Susun dari audience pengguna (executive, planner, trader, analyst), decision cadence, KPI hierarchy, grain, refresh, filters, and alerts. Visual harus memperlihatkan trend, variance, contribution, and context tanpa distorsi. Power BI, Tableau, Looker Studio, atau spreadsheet dipilih berdasarkan data access, governance, user needs, and maintenance.

**Simulated example:** SIMULATED — dashboard memiliki 25 visual tetapi tidak menampilkan planned-vs-actual, spend pacing, conversion quality, or margin. Tim tidak dapat menjawab apa yang perlu dilakukan. Redesign mulai dari tiga keputusan utama, lalu metric dan chart.

**Technical depth / workflow:**
- <b>Define user decisions.</b> Tuliskan siapa yang membuka dashboard, pertanyaan, cadence, and action.
- <b>Set semantic layer.</b> Tetapkan metric definitions, dimensions, filters, date controls, and permissions.
- <b>Design hierarchy.</b> Executive summary, trend, drill-down, diagnosis, and action sections.
- <b>QA dashboard.</b> Test source totals, filters, refresh, access, mobile/desktop, color/accessibility, and labels.

**Practice / deliverable:** Buat dashboard wireframe dan data model untuk cross-channel campaign performance. Sertakan 5 KPI utama, 5 diagnostic views, filters, alert conditions, data freshness, and metric definitions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa tanda dashboard tidak berguna?
   **Expected answer in guide (not independently approved):** Ia tidak menjawab keputusan pengguna, tidak memiliki metric definitions, atau tidak menyediakan diagnosis/action path.
2. **Q:** Mengapa total KPI perlu reconcile ke source?
   **Expected answer in guide (not independently approved):** Chart dapat terlihat rapi tetapi salah akibat filters, joins, duplicated rows, or refresh failure.
3. **Q:** Apa bedanya dashboard dan report?
   **Expected answer in guide (not independently approved):** Dashboard mendukung monitoring/interaksi rutin; report dapat memberi analisis/narrative lebih mendalam untuk periode tertentu.

**Glossary:**
- **Semantic layer:** Lapisan definisi metric/dimension yang konsisten.
- **Drill-down:** Navigasi dari metric ringkas ke level detail.
- **Data freshness:** Seberapa baru data dibanding kejadian.
- **Dashboard governance:** Aturan owner, access, definitions, refresh, and QA.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T10-CH06 — Descriptive & Diagnostic Analytics

**Competency ID(s):** T10-C05

**Agency evidence (role-level):** A/D: Manager Analytics, Director Measurement Science and econometrician role listings | A: Associate Director, Analytics JD | D: Insights/Marketing Science career families | A: Director Data Science JD covers MMM, incrementality, forecasting, Python/SQL and methodology leadership | D: Analytics career listings and Global Data & Analytics Manager title evidence

**Learning objective / concept:** Descriptive analytics menjawab apa yang terjadi; diagnostic analytics menyelidiki mengapa. Analyst memeriksa trend, segment, variance, distribution, cohort, seasonality, mix shifts, and anomalies. Diagnosis memerlukan hypothesis tree dan triangulasi, bukan korelasi sederhana. Perubahan performa dapat disebabkan media delivery, audience/creative, landing page, tracking, product, stock, price, or sales operations.

**Simulated example:** SIMULATED — CPA naik 30%. Decomposition menunjukkan CPC tetap, tetapi CVR turun hanya pada mobile checkout setelah deployment. Penyebabnya lebih mungkin page/payment experience daripada bidding, meskipun platform menunjukkan campaign-level deterioration.

**Technical depth / workflow:**
- <b>Describe the change.</b> Ukur magnitude, start date, affected population, duration, and baseline.
- <b>Decompose metrics.</b> Pecah CPA menjadi cost/click/conversion rate; segment by channel, device, campaign, audience, and product.
- <b>Develop hypotheses.</b> Buat cause tree dan tentukan evidence yang mendukung/membantah tiap sebab.
- <b>Verify cause.</b> Cek logs, tags, product/price/stock, seasonality, and external changes before recommending.

**Practice / deliverable:** Buat diagnostic memo dari synthetic dataset yang menunjukkan satu KPI memburuk. Lakukan metric decomposition, segment analysis, hypothesis tree, evidence check, root cause confidence, and recommended action.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa korelasi bukan bukti penyebab?
   **Expected answer in guide (not independently approved):** Dua metrik dapat bergerak bersama akibat seasonality, mix, budget, atau faktor ketiga tanpa causal link.
2. **Q:** Apa fungsi decomposition?
   **Expected answer in guide (not independently approved):** Memecah outcome menjadi driver sehingga lokasi perubahan dapat diisolasi.
3. **Q:** Kapan analisis harus ditahan?
   **Expected answer in guide (not independently approved):** Saat data quality, tracking, population, or metric definitions belum valid untuk mendukung kesimpulan.

**Glossary:**
- **Descriptive analytics:** Analisis yang merangkum apa yang terjadi.
- **Diagnostic analytics:** Analisis untuk mengidentifikasi faktor penyebab perubahan.
- **Variance decomposition:** Pemecahan perubahan total ke driver.
- **Confounder:** Faktor lain yang memengaruhi hubungan dua variabel.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T10-CH07 — Attribution, Incrementality & Marketing Effectiveness

**Competency ID(s):** T10-C05

**Agency evidence (role-level):** A/D: Manager Analytics, Director Measurement Science and econometrician role listings | A: Associate Director, Analytics JD | D: Insights/Marketing Science career families | A: Director Data Science JD covers MMM, incrementality, forecasting, Python/SQL and methodology leadership | D: Analytics career listings and Global Data & Analytics Manager title evidence

**Learning objective / concept:** Attribution membagi credit conversion berdasarkan rule/model, sedangkan incrementality mengestimasi tambahan outcome yang disebabkan media dibanding counterfactual. Marketing effectiveness mempertimbangkan contribution, halo/cross-channel, brand, sales, and long-term effects. Platform ROAS tidak otomatis mengukur incremental return. Analyst perlu memahami last-click, data-driven, multi-touch, lift test, geo holdout, MMM, and their assumptions and data needs.

**Simulated example:** SIMULATED — Meta ROAS 4x dan Search ROAS 6x; geo test menunjukkan total sales hanya naik 8% pada treatment. Platform credited conversions mungkin overlap atau mengambil conversion yang akan terjadi. Investment decisions perlu membaca attributed dan incremental metrics terpisah.

**Technical depth / workflow:**
- <b>Map attribution rules.</b> Catat model, click/view window, identity, channel coverage, and limitations.
- <b>Define causal question.</b> Tentukan treatment, control/counterfactual, outcome, population, and exposure.
- <b>Select design.</b> Pilih holdout/geo lift/A-B/brand lift/MMM berdasarkan data, scale, and feasibility.
- <b>Translate to investment.</b> Bandingkan cost, incremental contribution, uncertainty, and budget scenario.

**Practice / deliverable:** Buat attribution vs incrementality analysis memo dengan synthetic dataset; rancang satu geo-holdout atau user-level holdout, tentukan primary metric, contamination risk, sample/duration, and limitation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda attributed conversion dan incremental conversion?
   **Expected answer in guide (not independently approved):** Attributed conversion menerima credit menurut model/window; incremental conversion adalah tambahan akibat treatment dibanding counterfactual.
2. **Q:** Apa risiko last-click?
   **Expected answer in guide (not independently approved):** Ia cenderung memberi credit pada touchpoint akhir dan mengabaikan demand creation/assisted interactions.
3. **Q:** Kapan geo experiment cocok?
   **Expected answer in guide (not independently approved):** Saat treatment dapat dibedakan lintas wilayah, market comparability memadai, spillover dapat dikendalikan, and sample/time cukup.

**Glossary:**
- **Attribution:** Aturan pembagian credit pada touchpoint.
- **Incrementality:** Tambahan outcome dibanding kondisi counterfactual.
- **Geo-holdout:** Eksperimen treatment/control menggunakan kelompok wilayah.
- **MMM:** Model yang mengestimasi kontribusi channel/faktor dari data historis.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T10-CH08 — Experiment Design, A/B Testing & Statistics

**Competency ID(s):** T10-C06

**Agency evidence (role-level):** A/D: Manager Analytics, Director Measurement Science and econometrician role listings | A: Associate Director, Analytics JD | D: Insights/Marketing Science career families | A: Director Data Science JD covers MMM, incrementality, forecasting, Python/SQL and methodology leadership | D: Analytics career listings and Global Data & Analytics Manager title evidence

**Learning objective / concept:** Experiment design membutuhkan hypothesis, randomization unit, control/treatment, primary metric, guardrails, sample size, duration, stopping rule, and contamination controls. Statistik dasar seperti confidence interval, power, significance, variance, and multiple testing memengaruhi interpretasi. Significance bukan ukuran business impact; analyst harus memeriksa effect size, practical significance, data quality, and segment effects.

**Simulated example:** SIMULATED — A/B test landing page memiliki conversion +4% tetapi confidence interval lebar dan sample kecil. Menyatakan winner terlalu dini dapat membuat tim mengunci perubahan yang belum terbukti.

**Technical depth / workflow:**
- <b>Write the hypothesis.</b> Nyatakan observation, change, mechanism, audience, metric, and guardrail.
- <b>Design the test.</b> Tentukan randomization unit, allocation, sample/duration assumptions, exclusions, and contamination risk.
- <b>Set decision rules.</b> Tentukan primary metric, minimum detectable effect, stopping, and multiple-test governance.
- <b>Interpret properly.</b> Baca confidence interval, effect size, power, sample balance, and practical value.

**Practice / deliverable:** Buat A/B test protocol dan analysis notebook untuk satu experiment: hypothesis, unit, sample/duration calculation, metrics, guardrails, QA, stopping rule, confidence interval, and decision memo.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda statistical significance dan practical significance?
   **Expected answer in guide (not independently approved):** Significance menilai compatibility data dengan null hypothesis; practical significance menilai apakah effect cukup besar untuk keputusan bisnis.
2. **Q:** Mengapa early peeking berisiko?
   **Expected answer in guide (not independently approved):** Repeated checks dapat meningkatkan false-positive rate dan mendorong stop/continue decisions yang bias.
3. **Q:** Apa peran randomization unit?
   **Expected answer in guide (not independently approved):** Menentukan entitas yang diacak; harus sesuai exposure and interference pattern agar perbandingan valid.

**Glossary:**
- **Power:** Peluang mendeteksi effect sebesar tertentu jika effect itu ada.
- **MDE:** Minimum Detectable Effect yang ditargetkan dalam desain eksperimen.
- **Confidence interval:** Rentang nilai yang kompatibel dengan data menurut prosedur statistik.
- **Multiple testing:** Banyak pengujian yang meningkatkan risiko false positives.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T10-CH09 — Insight, Recommendation & Executive Storytelling

**Competency ID(s):** T10-C07

**Agency evidence (role-level):** A/D: Manager Analytics, Director Measurement Science and econometrician role listings | A: Associate Director, Analytics JD | D: Insights/Marketing Science career families | A: Director Data Science JD covers MMM, incrementality, forecasting, Python/SQL and methodology leadership | D: Analytics career listings and Global Data & Analytics Manager title evidence

**Learning objective / concept:** Insight storytelling mengubah analisis menjadi keputusan yang dapat dipahami executive. Struktur yang efektif memuat question, context, key finding, evidence, driver, business impact, recommendation, risk, and next action. Analyst harus memisahkan fact, interpretation, hypothesis, and recommendation; visual mendukung narasi, bukan menutupi uncertainty. Komunikasi harus menyesuaikan audience tanpa mengubah data.

**Simulated example:** SIMULATED — presentasi menyebut 'Meta adalah channel terbaik' hanya karena ROAS tertinggi. Insight memo yang lebih kuat menunjukkan attributed ROAS tinggi tetapi incremental contribution belum terbukti, sehingga rekomendasi adalah holdout test sebelum scale.

**Technical depth / workflow:**
- <b>Lead with decision.</b> Mulai dari pertanyaan bisnis dan keputusan yang perlu dibuat, bukan metode yang digunakan.
- <b>Show evidence.</b> Sajikan metric, comparison, segmentation, source, and caveats.
- <b>Explain mechanism.</b> Hubungkan observed changes dengan plausible drivers dan confidence level.
- <b>Ask for action.</b> Nyatakan rekomendasi, owner, timing, expected impact, and follow-up measurement.

**Practice / deliverable:** Buat executive insight memo satu halaman dan 5-slide narrative untuk kasus analitik. Cantumkan fact/interpretation/hypothesis/recommendation, chart, risk, and decision requested.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda finding dan insight?
   **Expected answer in guide (not independently approved):** Finding adalah temuan angka; insight menjelaskan makna/driver dan mengubah keputusan.
2. **Q:** Mengapa limitation perlu disampaikan?
   **Expected answer in guide (not independently approved):** Agar stakeholder tidak menganggap atribusi/korelasi sebagai causal proof atau membuat keputusan melebihi evidence.
3. **Q:** Apa yang harus berakhir pada executive deck?
   **Expected answer in guide (not independently approved):** Keputusan yang diminta, owner, timing, expected impact, risk, and measurement follow-up.

**Glossary:**
- **Insight:** Interpretasi berbukti yang bermakna untuk keputusan.
- **Executive narrative:** Alur ringkas evidence menuju implication dan action.
- **Confidence level:** Tingkat keyakinan analisis berdasarkan evidence/limitations.
- **Decision memo:** Dokumen singkat untuk meminta/menjelaskan keputusan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T10-CH10 — Analytics Capstone

**Competency ID(s):** T10-C07

**Agency evidence (role-level):** A/D: Manager Analytics, Director Measurement Science and econometrician role listings | A: Associate Director, Analytics JD | D: Insights/Marketing Science career families | A: Director Data Science JD covers MMM, incrementality, forecasting, Python/SQL and methodology leadership | D: Analytics career listings and Global Data & Analytics Manager title evidence

**Learning objective / concept:** Analytics Capstone menunjukkan kemampuan end-to-end: merumuskan business question, mengambil data, memvalidasi, menganalisis, membuat dashboard, menjelaskan hasil, dan merekomendasikan tindakan. Data pipeline harus reproducible dan dapat diaudit. Bila memakai data synthetic/demo, jelaskan generator, assumptions, and limitations. Advanced MMM/econometrics dapat menjadi specialization lanjutan, bukan prasyarat untuk semua entry-level analyst.

**Simulated example:** SIMULATED — brand memiliki data campaign 12 minggu lintas Google, Meta, TikTok, GA4, dan CRM. Capstone menilai apakah analyst dapat menyatukan grain dengan benar, menilai lead quality, menemukan mobile checkout issue, dan menyarankan measurement test.

**Technical depth / workflow:**
- <b>Frame and collect.</b> Tulis question, KPI, data inventory, access, and extraction plan.
- <b>Validate and model.</b> QA, standardize, join, and aggregate by correct grain; preserve lineage.
- <b>Analyze and visualize.</b> Run descriptive/diagnostic, choose visual, and document findings.
- <b>Recommend and defend.</b> Present business action, uncertainty, limitations, owner, and verification plan.

**Practice / deliverable:** Bangun portfolio pack: measurement brief, data dictionary, SQL/Spreadsheet notebook, QA report, dashboard, diagnostic memo, attribution/incrementality plan, and executive presentation. Labeli dataset DEMO/SIMULATED.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa bukti kualitas data sebelum analisis?
   **Expected answer in guide (not independently approved):** Data dictionary, source lineage, QA results, duplicate/missing checks, reconciliation, and documented transformations.
2. **Q:** Apa yang membedakan dashboard dengan portfolio capstone?
   **Expected answer in guide (not independently approved):** Capstone juga membuktikan question framing, methodology, interpretation, decision, and limitations—not visual output saja.
3. **Q:** Bagaimana mengklaim skill tanpa mengklaim client result?
   **Expected answer in guide (not independently approved):** Tampilkan project demo/synthetic, code/query, method, evidence, and clear label without inventing commercial impact.

**Glossary:**
- **Reproducibility:** Kemampuan mengulang analisis dengan input dan langkah yang terdokumentasi.
- **Data dictionary:** Daftar field, definition, type, and meaning.
- **Synthetic dataset:** Data buatan untuk latihan/testing yang bukan data client.
- **Portfolio pack:** Artefak lengkap yang menunjukkan skill dan evidence.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 11. SEO / Organic Search / AEO / GEO (`seo`)

### DPA-T11-CH01 — Search Ecosystem, Organic Visibility & Search Intent

**Competency ID(s):** T11-C01, T11-C03

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | A: SEO Executive, Dentsu employer-hosted Workday JD; technical SEO checks (robots.txt, XML sitemap, redirects, canonical tags, crawl/index issues), keyword research, content audits, reporting and tools including Ahrefs/SEMrush/Screaming Frog. Geography not captured in the indexed extract. | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** SEO dan Organic Search meningkatkan kemampuan website ditemukan melalui crawling, indexing, relevance, quality, and search experience. Search result dapat mencakup organic web, local, images, video, featured snippets, dan AI features. SEO tidak menjamin ranking; specialist bekerja pada technical accessibility, content usefulness, intent match, information architecture, authority, and measurement. Search intent harus menjadi titik awal, bukan keyword density.

**Simulated example:** SIMULATED — website memiliki banyak blog traffic tetapi tidak ada product-qualified visits. Artikel menjawab informational query tanpa link relevan ke product/category pages. Masalahnya bukan sekadar ranking, tetapi journey dan intent transition.

**Technical depth / workflow:**
- <b>Understand search process.</b> Bedakan crawling, rendering, indexing, ranking, and result presentation.
- <b>Classify intent.</b> Kelompokkan informational, navigational, commercial, transactional, local, and multimodal needs.
- <b>Audit site readiness.</b> Periksa indexability, architecture, page quality, mobile, and business relevance.
- <b>Define organic objective.</b> Pilih visibility, qualified organic sessions, leads, revenue, or local actions.

**Practice / deliverable:** Buat search ecosystem map dan organic baseline untuk satu website: indexable pages, search visibility, query intent, page types, business outcomes, and key technical/content risks.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda crawling dan indexing?
   **Expected answer in guide (not independently approved):** Crawling adalah discovery/access; indexing adalah proses menyimpan/memahami halaman untuk kemungkinan ditampilkan.
2. **Q:** Mengapa ranking bukan satu-satunya KPI SEO?
   **Expected answer in guide (not independently approved):** Ranking tidak otomatis menghasilkan qualified traffic, engagement, conversions, or contribution.
3. **Q:** Bagaimana AI features memengaruhi SEO?
   **Expected answer in guide (not independently approved):** Mereka mengubah format discovery/click patterns; foundational crawlability, content usefulness, and search intent tetap penting.

**Glossary:**
- **Crawlability:** Kemampuan crawler menemukan dan mengakses halaman.
- **Indexability:** Kelayakan halaman untuk dimasukkan ke index.
- **Search intent:** Tujuan/kebutuhan di balik query.
- **Organic visibility:** Kemunculan brand/site pada hasil non-paid search.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH02 — Keyword, Topic & Competitor Research

**Competency ID(s):** T11-C02

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | A: SEO Executive, Dentsu employer-hosted Workday JD; technical SEO checks (robots.txt, XML sitemap, redirects, canonical tags, crawl/index issues), keyword research, content audits, reporting and tools including Ahrefs/SEMrush/Screaming Frog. Geography not captured in the indexed extract. | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Keyword/topic research mengidentifikasi demand, query language, competitor gaps, and content opportunities. Keyword volume dari tools adalah estimasi, bukan demand pasti; periksa trend, SERP format, geography, and seasonality. Topic clustering menyusun hubungan pillar/supporting pages. Competitor SERP analysis membaca page type, intent, features, content depth, and proof rather than copying text.

**Simulated example:** SIMULATED — keyword 'best CRM' punya volume tinggi tetapi SERP dipenuhi comparison pages dan software directories. Brand yang baru launch mungkin lebih feasible menargetkan long-tail niche intent dengan product proof yang lebih spesifik.

**Technical depth / workflow:**
- <b>Collect query universe.</b> Gabungkan Search Console, keyword tools, site search, sales questions, and competitor SERP.
- <b>Classify intent and SERP.</b> Tandai page type, features, dominant format, and geography.
- <b>Cluster topics.</b> Kelompokkan queries berdasarkan shared intent and map to one best page.
- <b>Prioritize opportunities.</b> Nilai relevance, difficulty, business value, evidence, content gap, and resources.

**Practice / deliverable:** Buat keyword-topic map minimal 50 query untuk satu kategori. Sertakan intent, SERP feature, page type, topic cluster, competitor gaps, priority score, and proposed URL.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa satu keyword tidak otomatis memerlukan satu halaman?
   **Expected answer in guide (not independently approved):** Query dengan intent sama dapat dilayani satu halaman; terlalu banyak halaman serupa dapat menimbulkan cannibalization.
2. **Q:** Apa batas search volume estimate?
   **Expected answer in guide (not independently approved):** Tools menggunakan estimasi, grouping, and sampling; actual demand varies by location, season, and query definition.
3. **Q:** Apa maksud keyword cannibalization?
   **Expected answer in guide (not independently approved):** Beberapa halaman site bersaing untuk intent/query yang sama sehingga relevansi dan signals dapat tersebar.

**Glossary:**
- **Keyword cluster:** Sekumpulan query dengan intent/topic yang sama.
- **SERP feature:** Elemen halaman hasil pencarian selain standard blue links.
- **Cannibalization:** Overlap halaman dalam memenuhi intent/query yang sama.
- **Topic map:** Struktur hubungan topic, query, and page.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH03 — Website Architecture, Crawlability & Indexing

**Competency ID(s):** T11-C03

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | A: SEO Executive, Dentsu employer-hosted Workday JD; technical SEO checks (robots.txt, XML sitemap, redirects, canonical tags, crawl/index issues), keyword research, content audits, reporting and tools including Ahrefs/SEMrush/Screaming Frog. Geography not captured in the indexed extract. | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Website architecture memengaruhi crawling, navigation, internal link equity, and user discovery. URL structure, hierarchy, canonical, robots directives, sitemap, pagination, faceted navigation, and JavaScript rendering perlu dipahami berdasarkan site scale. Crawl budget bukan solusi universal; prioritasnya memastikan important pages discoverable, indexable, canonicalized, and valuable.

**Simulated example:** SIMULATED — ecommerce menghasilkan ribuan URL filter dengan parameter berbeda yang memiliki content sama. Googlebot menghabiskan crawl pada parameter URLs sementara kategori penting kurang internal links. Solusinya perlu architecture/faceted navigation control, bukan sekadar mengubah robots.txt sembarangan.

**Technical depth / workflow:**
- <b>Map URL inventory.</b> Klasifikasikan page type, index status, canonical, status code, and parent-child structure.
- <b>Audit crawl paths.</b> Periksa internal links, orphan pages, redirect chains, robots, sitemap, and faceted URLs.
- <b>Validate canonical/indexing.</b> Pastikan preferred URL, duplicate handling, pagination, noindex, and parameter policy.
- <b>Prioritize fixes.</b> Nilai affected URLs, search value, impact, effort, and engineering dependency.

**Practice / deliverable:** Buat technical architecture audit dengan crawl sample: URL taxonomy, orphan pages, status code, canonical, robots, sitemap, faceted URLs, internal links, and remediation roadmap.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa risiko memblokir URL melalui robots.txt tanpa memahami index state?
   **Expected answer in guide (not independently approved):** URL dapat tetap diketahui/diindeks dari links meski crawler tidak dapat membaca content; directives punya fungsi berbeda.
2. **Q:** Apa fungsi canonical?
   **Expected answer in guide (not independently approved):** Memberi sinyal preferred URL di antara duplicates/similar pages; bukan jaminan search engine mengikuti pilihan.
3. **Q:** Apa yang dimaksud orphan page?
   **Expected answer in guide (not independently approved):** Halaman tanpa internal links yang dapat ditemukan crawler/user melalui navigation biasa.

**Glossary:**
- **Canonical:** Sinyal URL pilihan di antara duplikasi.
- **Robots.txt:** Aturan crawling, bukan pengganti noindex.
- **XML sitemap:** Daftar URL yang disarankan untuk discovery.
- **Orphan page:** Halaman minim/tanpa internal links.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH04 — Technical SEO & Core Web Vitals

**Competency ID(s):** T11-C03

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | A: SEO Executive, Dentsu employer-hosted Workday JD; technical SEO checks (robots.txt, XML sitemap, redirects, canonical tags, crawl/index issues), keyword research, content audits, reporting and tools including Ahrefs/SEMrush/Screaming Frog. Geography not captured in the indexed extract. | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Technical SEO memastikan website mudah diakses, di-render, aman, cepat, and stabil. Core Web Vitals menilai loading, interactivity, and visual stability; interpretasi field data berbeda dari lab tests. Technical review juga mencakup mobile usability, JavaScript rendering, redirects, status codes, HTTPS, structured data validation, and server reliability. Prioritization harus memakai evidence, page templates, and business impact.

**Simulated example:** SIMULATED — LCP buruk hanya pada product pages karena hero image terlalu besar, sedangkan INP bermasalah pada menu script. Perbaikan perlu dipisah antara image delivery and interaction code; menunda semua optimasi ke redesign besar tidak perlu.

**Technical depth / workflow:**
- <b>Measure page experience.</b> Audit field/lab CWV, mobile, render, image, scripts, and layout shifts.
- <b>Trace technical cause.</b> Temukan template/component, resource, JS, server, and third-party scripts.
- <b>Validate markup/data.</b> Cek structured data against visible content and supported types.
- <b>Coordinate remediation.</b> Buat ticket dengan reproduction, affected templates, priority, expected result, and QA.

**Practice / deliverable:** Buat audit teknis untuk tiga page templates: issue, evidence, affected URLs, root-cause hypothesis, impact, fix, owner, and before/after measurement plan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda field data dan lab data CWV?
   **Expected answer in guide (not independently approved):** Field data mencerminkan real-user experience; lab data membantu reproduksi/debug pada kondisi test.
2. **Q:** Mengapa schema markup tidak menjamin rich result?
   **Expected answer in guide (not independently approved):** Search engine menentukan eligibility/appearance berdasarkan content quality, policies, and other systems.
3. **Q:** Mengapa technical SEO perlu koordinasi developer?
   **Expected answer in guide (not independently approved):** Banyak issue berada pada templates, rendering, redirects, server, and deployment—not hanya content editor.

**Glossary:**
- **Core Web Vitals:** Metric pengalaman page untuk loading, interactivity, and visual stability.
- **LCP:** Largest Contentful Paint, ukuran loading perceived.
- **INP:** Interaction to Next Paint, responsiveness to interactions.
- **Structured data:** Markup terstruktur yang membantu mesin memahami entity/content.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH05 — On-Page SEO, Content & Structured Data

**Competency ID(s):** T11-C01, T11-C04

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | A: SEO Executive, Dentsu employer-hosted Workday JD; technical SEO checks (robots.txt, XML sitemap, redirects, canonical tags, crawl/index issues), keyword research, content audits, reporting and tools including Ahrefs/SEMrush/Screaming Frog. Geography not captured in the indexed extract. | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** On-page SEO membuat halaman menjawab intent secara jelas dan bermanfaat. Title, headings, copy, internal links, images, metadata, and structured data harus mengikuti page purpose dan actual content. Helpful content memerlukan first-hand expertise, completeness, trust, evidence, and reader value. Keyword stuffing, doorway pages, thin programmatic pages, and misleading claims dapat merusak kualitas.

**Simulated example:** SIMULATED — halaman kategori menargetkan 'sepatu lari terbaik' tetapi hanya menampilkan 2 produk tanpa criteria, comparison, expert guidance, or filters. Optimasi membutuhkan usefulness and product context, bukan hanya memasukkan keyword ke heading.

**Technical depth / workflow:**
- <b>Map page intent.</b> Definisikan siapa pembaca, task, main question, and conversion role.
- <b>Develop content brief.</b> Susun primary answer, outline, evidence, expertise, examples, FAQs, internal links, and CTA.
- <b>Optimize page elements.</b> Review title, H1, headings, intro, images/alt, metadata, canonical, and schema where eligible.
- <b>Review content quality.</b> Check accuracy, claims, originality, author expertise, freshness, and usability.

**Practice / deliverable:** Buat content brief dan on-page audit untuk satu landing page: intent, title/H1, outline, proof, internal links, media, CTA, schema validity, and review checklist.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apakah keyword density menentukan ranking?
   **Expected answer in guide (not independently approved):** Tidak. Intent match, usefulness, content quality, and technical access lebih penting; keyword repetition bukan shortcut.
2. **Q:** Mengapa structured data harus sesuai visible content?
   **Expected answer in guide (not independently approved):** Markup yang misleading/tidak sesuai dapat melanggar guidelines dan tidak dipercaya search engines.
3. **Q:** Apa yang membuat halaman helpful?
   **Expected answer in guide (not independently approved):** Jawaban lengkap dan akurat, bukti, usability, first-hand expertise, and clear next steps for audience.

**Glossary:**
- **On-page SEO:** Optimasi elemen dalam halaman agar intent dan content jelas.
- **Internal link:** Link antarhalaman dalam satu domain.
- **Search snippet:** Presentasi title/description/content pada SERP.
- **Helpful content:** Konten yang memberi nilai nyata dan menjawab kebutuhan audience.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH06 — Off-Page SEO, Digital PR & Authority

**Competency ID(s):** T11-C05

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | A: SEO Executive, Dentsu employer-hosted Workday JD; technical SEO checks (robots.txt, XML sitemap, redirects, canonical tags, crawl/index issues), keyword research, content audits, reporting and tools including Ahrefs/SEMrush/Screaming Frog. Geography not captured in the indexed extract. | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Off-page SEO and Digital PR membangun reputation, authority, and discovery melalui editorial links, mentions, partnerships, and relevant coverage. Link quantity alone is not a strategy; evaluate relevance, editorial integrity, source quality, referral value, anchor context, and policy compliance. Jangan membeli link atau membuat network manipulatif. Digital PR harus memiliki angle newsworthy dan credible data.

**Simulated example:** SIMULATED — sebuah brand mendapat 200 backlinks dari site directories yang tidak relevan. Angka naik tetapi authority/referral tidak membaik. Campaign digital PR yang menghasilkan beberapa coverage relevan dapat memberi brand trust dan referral yang lebih bermakna.

**Technical depth / workflow:**
- <b>Audit backlink profile.</b> Periksa referring domains, relevance, anchor patterns, spam signals, and lost links.
- <b>Find PR angles.</b> Gunakan research, proprietary data, expert POV, product story, and market context.
- <b>Build outreach.</b> Target publisher/journalist yang relevan; siapkan evidence, assets, and disclosure.
- <b>Measure quality.</b> Track earned coverage, relevant links, referral, branded search, and risk—not raw count only.

**Practice / deliverable:** Buat digital PR plan dan backlink risk audit untuk brand latihan: competitor gap, story angle, target publishers, pitch outline, link quality criteria, and measurement.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa backlink quantity tidak sama dengan authority?
   **Expected answer in guide (not independently approved):** Relevance, editorial legitimacy, source quality, context, and spam signals memengaruhi value.
2. **Q:** Apa beda earned link dan paid link scheme?
   **Expected answer in guide (not independently approved):** Earned link muncul karena editorial value; paid/manipulative links bertujuan memengaruhi ranking dan berisiko melanggar guidelines.
3. **Q:** Apa ukuran keberhasilan digital PR selain link count?
   **Expected answer in guide (not independently approved):** Relevant coverage, referral quality, brand search, audience reach, authority signals, and business influence.

**Glossary:**
- **Referring domain:** Domain yang memberi link ke site.
- **Anchor text:** Teks clickable pada hyperlink.
- **Digital PR:** Aktivitas earned coverage/links berbasis story dan evidence.
- **Link scheme:** Praktik manipulatif untuk memengaruhi link signals.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH07 — Local SEO & Search Demand

**Competency ID(s):** T11-C05

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | A: SEO Executive, Dentsu employer-hosted Workday JD; technical SEO checks (robots.txt, XML sitemap, redirects, canonical tags, crawl/index issues), keyword research, content audits, reporting and tools including Ahrefs/SEMrush/Screaming Frog. Geography not captured in the indexed extract. | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Local SEO mengoptimalkan discoverability untuk pencarian berbasis lokasi dan service area. Google Business Profile, NAP consistency, category, hours, services, reviews, photos, local landing pages, citations, and location relevance berperan. Multi-location brand membutuhkan governance listing dan review management. Ranking dipengaruhi relevansi, distance, prominence, and context; tidak semua faktor dapat dikendalikan marketer.

**Simulated example:** SIMULATED — klinik memiliki 20 cabang tetapi hanya 8 Google Business Profiles yang lengkap dan hours tidak konsisten. Search visibility lokal dan call/direction dapat terpengaruh; perbaikan memerlukan location data owner dan operational process.

**Technical depth / workflow:**
- <b>Audit locations.</b> Daftar store/branch, ownership, verified profile, NAP, category, service, and hours.
- <b>Optimize profiles.</b> Isi accurate information, photos, attributes, services, links, and update governance.
- <b>Manage reviews.</b> Set response guidelines, escalation, and policy-safe review request process.
- <b>Build local pages.</b> Buat unique, useful landing content with location service evidence and proper internal links.

**Practice / deliverable:** Buat local search audit untuk lima lokasi: profile completeness, NAP, category, reviews, local landing pages, citations, owner, and maintenance SLA.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa itu NAP consistency?
   **Expected answer in guide (not independently approved):** Name, Address, Phone harus akurat dan konsisten lintas listing/sumber.
2. **Q:** Mengapa review tidak boleh dibeli?
   **Expected answer in guide (not independently approved):** Fake/incentivized reviews melanggar platform policies dan merusak trust.
3. **Q:** Apa tantangan multi-location SEO?
   **Expected answer in guide (not independently approved):** Duplicate/thin location pages, inconsistent business data, ownership, and review response governance.

**Glossary:**
- **Google Business Profile:** Profil bisnis resmi untuk local presence di Google.
- **NAP:** Name, Address, Phone information.
- **Citation:** Penyebutan informasi bisnis pada directory/listing.
- **Local landing page:** Halaman yang menjelaskan layanan dan informasi relevan per lokasi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH08 — Search Console, Analytics & SEO Reporting

**Competency ID(s):** T11-C06

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | A: SEO Executive, Dentsu employer-hosted Workday JD; technical SEO checks (robots.txt, XML sitemap, redirects, canonical tags, crawl/index issues), keyword research, content audits, reporting and tools including Ahrefs/SEMrush/Screaming Frog. Geography not captured in the indexed extract. | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Search Console dan analytics menghubungkan organic visibility dengan behavior dan business outcomes. GSC memberi performance queries/pages, indexing, sitemap, enhancements, and search appearance; GA4 memberi sessions/events/conversions. Metrics memiliki scope dan attribution berbeda; clicks GSC tidak sama dengan sessions GA4. Reporting harus memisahkan branded/non-branded, page type, country/device, and search feature.

**Simulated example:** SIMULATED — GSC clicks naik 20%, tetapi GA4 organic sessions tetap. Investigasi menemukan redirect/consent/tag issue atau perubahan search click-to-session behavior. Analyst harus membandingkan query/page/date/device sebelum menyimpulkan SEO traffic tidak berkualitas.

**Technical depth / workflow:**
- <b>Set reporting scope.</b> Definisikan date range, property, country/device, query/page, brand/non-brand, and page type.
- <b>Reconcile metrics.</b> Bandingkan impressions/clicks/CTR/position with sessions/engagement/conversions; jelaskan differences.
- <b>Diagnose changes.</b> Cek indexing, page releases, SERP, seasonality, competitor, cannibalization, and tracking.
- <b>Recommend roadmap.</b> Prioritaskan by impact, confidence, effort, dependency, and expected business outcome.

**Practice / deliverable:** Buat organic reporting dashboard dan monthly memo dari synthetic/demo data: query, page, clicks, impressions, CTR, position, indexation, sessions, conversions, and prioritized actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa GSC clicks tidak sama dengan GA4 sessions?
   **Expected answer in guide (not independently approved):** Click tidak selalu menjadi session akibat loading, redirects, consent, browser, and measurement differences.
2. **Q:** Mengapa average position perlu segmentasi?
   **Expected answer in guide (not independently approved):** Aggregation across queries/pages/devices can hide changes in query mix and SERP features.
3. **Q:** Apa isi SEO recommendation yang actionable?
   **Expected answer in guide (not independently approved):** Specific page/technical change, evidence, impact hypothesis, priority, owner, timeline, and measurement.

**Glossary:**
- **Search Console:** Tool untuk melihat Google Search performance/indexation data.
- **CTR:** Click-through rate = clicks / impressions.
- **Branded query:** Query yang menyebut nama brand/product.
- **Index coverage:** Status URL dalam index/search eligibility.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH09 — AEO, GEO & AI Search Visibility

**Competency ID(s):** T11-C01, T11-C07

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | A: SEO Executive, Dentsu employer-hosted Workday JD; technical SEO checks (robots.txt, XML sitemap, redirects, canonical tags, crawl/index issues), keyword research, content audits, reporting and tools including Ahrefs/SEMrush/Screaming Frog. Geography not captured in the indexed extract. | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** AEO/GEO/AI Search mengamati bagaimana brand/content ditemukan dan dirujuk pada answer engines dan AI features. Fondasi website tetap crawlability, helpful content, entity clarity, source authority, and structured information. Tidak ada markup khusus yang menjamin citation/rank di semua AI systems. Monitoring harus mencatat platform, prompt, date, answer, cited sources, brand mention, and context; hasil sampling tidak boleh disajikan sebagai universal visibility metric.

**Simulated example:** SIMULATED — brand muncul pada dua dari sepuluh prompt category dalam satu LLM. Itu menunjukkan sampel observasi, bukan market-wide share of voice. Audit sumber yang dikutip, content gaps, entity accuracy, and brand proof.

**Technical depth / workflow:**
- <b>Define queries/prompts.</b> Kelompokkan intent, category question, comparison, recommendation, and local queries.
- <b>Establish baseline.</b> Catat platform/model, prompt, date, answer, sources/citations, brand presence, and context.
- <b>Review source readiness.</b> Periksa crawlable pages, facts, citations, expert authorship, structured data, and consistency.
- <b>Run repeatable monitoring.</b> Gunakan prompt set dan sampling schedule yang konsisten; label methodological limits.

**Practice / deliverable:** Buat AI search visibility log dengan 20 prompts lintas informational/commercial/local intents. Catat date, engine, answer, citations, mention/context, source quality, and content actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apakah schema menjamin brand muncul di AI answer?
   **Expected answer in guide (not independently approved):** Tidak. Structured data membantu machine understanding di konteks tertentu; tidak menjamin answer inclusion/citation.
2. **Q:** Mengapa prompt sampling bukan market share?
   **Expected answer in guide (not independently approved):** Hasil bergantung model, date, location, prompt, personalization, and response variance.
3. **Q:** Apa fondasi AEO/GEO yang tetap relevan?
   **Expected answer in guide (not independently approved):** Accessible, helpful, accurate content, clear entities, authoritative evidence, and sound technical SEO.

**Glossary:**
- **AEO:** Answer Engine Optimization, optimasi agar informasi mudah dipahami/digunakan answer systems.
- **GEO:** Generative Engine Optimization, istilah untuk visibility dalam generative search.
- **Citation:** Sumber yang dirujuk/dikutip sistem jawaban.
- **Entity:** Entitas nyata seperti brand, product, person, location, atau organization.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH10 — Organic Search Capstone

**Competency ID(s):** T11-C07

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | A: SEO Executive, Dentsu employer-hosted Workday JD; technical SEO checks (robots.txt, XML sitemap, redirects, canonical tags, crawl/index issues), keyword research, content audits, reporting and tools including Ahrefs/SEMrush/Screaming Frog. Geography not captured in the indexed extract. | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** SEO Capstone menyatukan audit teknis, keyword/topic research, content strategy, digital PR, local, reporting, and AI visibility baseline menjadi roadmap yang diprioritaskan. Rekomendasi harus mempertimbangkan engineering/content resources dan business impact. Hindari menjanjikan ranking atau traffic uplift tanpa data; nyatakan uncertainty dan measurement plan.

**Simulated example:** SIMULATED — ecommerce 500 URLs punya indexing issue, content duplication, slow category pages, and weak product descriptions. Capstone menyusun 90-day roadmap berdasarkan affected pages, revenue importance, engineering effort, and risk.

**Technical depth / workflow:**
- <b>Audit baseline.</b> Crawl website, GSC/GA4, indexation, templates, content, links, and local/AI context.
- <b>Prioritize roadmap.</b> Score issues by impact, confidence, effort, dependencies, and affected pages.
- <b>Define workstreams.</b> Technical, content/on-page, authority/PR, local, and measurement owners.
- <b>Measure and govern.</b> Set KPIs, baselines, release QA, update cadence, and realistic outcomes.

**Practice / deliverable:** Siapkan SEO capstone: technical audit, keyword/topic map, on-page brief, backlink/PR review, local checklist, Search Console baseline, AI visibility log, prioritized 90-day roadmap, and executive summary.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa SEO roadmap perlu owner dan dependency?
   **Expected answer in guide (not independently approved):** Banyak fixes butuh engineering, design, content, legal, and product; tanpa owners/dependencies, rekomendasi tidak bisa dieksekusi.
2. **Q:** Apa yang tidak boleh dijanjikan SEO specialist?
   **Expected answer in guide (not independently approved):** Posisi/ranking pasti atau traffic growth tanpa mempertimbangkan competition, indexing, update, and external factors.
3. **Q:** Apa yang membuktikan capstone berbasis evidence?
   **Expected answer in guide (not independently approved):** Source URLs, crawl export, GSC/GA4 data, issue examples, priority rationale, assumptions, and measurement plan.

**Glossary:**
- **Technical audit:** Pemeriksaan akses, indexation, rendering, performance, and structured technical health.
- **Content gap:** Kebutuhan informasi/query yang belum dilayani dengan baik.
- **Roadmap:** Urutan perubahan, owner, effort, timeline, and success criteria.
- **SERP:** Search Engine Results Page.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 12. CRM / Lifecycle / Marketing Automation (`crm`)

### DPA-T12-CH01 — CRM Ecosystem & Lifecycle Strategy

**Competency ID(s):** T12-C01

**Agency evidence (role-level):** B: Manager, Marketing, WPP Media employer-hosted JD, Italy; CRM communications, marketing automation platform/workflow configuration, newsletters, database hygiene, compliance and email performance. Adjacent title/scope, not a dedicated CRM specialist JD. | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | B: Manager, Analytics/Insights, Omnicom Media employer-hosted JD, New York; includes segmentation, marketing analytics and CRM evaluations. Adjacent analytics evidence, not dedicated lifecycle/automation operations. | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** CRM adalah strategi pengelolaan hubungan customer berbasis data dan lifecycle, bukan sekadar software atau daftar kontak. Lifecycle dapat mencakup lead, onboarding, activation, repeat, loyalty, lapse, and win-back; definisi harus mengikuti model bisnis. CRM specialist menyelaraskan acquisition, sales, service, and customer value dengan consent, data quality, governance, and communication experience.

**Simulated example:** SIMULATED — brand subscription mendapat 10.000 leads, tetapi 60% tidak pernah diaktifkan. Masalah mungkin onboarding, qualification, product usage, or sales follow-up. CRM harus mengidentifikasi lifecycle barrier sebelum menambah blast email.

**Technical depth / workflow:**
- <b>Map lifecycle.</b> Definisikan stage, entry/exit criteria, owner, and customer action.
- <b>Align business model.</b> Bedakan B2C/B2B, one-off/subscription, lead/sales, service, and repeat economics.
- <b>Set CRM objective.</b> Activation, time-to-value, repeat, retention, reactivation, churn prevention, or loyalty.
- <b>Govern channel/data.</b> Tetapkan consent, preference, suppression, data owner, and SLA.

**Practice / deliverable:** Buat CRM lifecycle blueprint untuk satu business model: stage definitions, entry/exit criteria, trigger, owner, business metric, contact policy, and high-risk customer scenarios.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa CRM bukan sekadar software?
   **Expected answer in guide (not independently approved):** Software menjalankan workflow; strategi CRM mendefinisikan lifecycle, customer value, data, communication, and governance.
2. **Q:** Apa risiko lifecycle stage tidak memiliki entry/exit criteria?
   **Expected answer in guide (not independently approved):** Contacts dapat menerima komunikasi salah, masuk berulang, atau tetap di stage yang tidak tepat.
3. **Q:** Mengapa retention metric harus mengikuti model bisnis?
   **Expected answer in guide (not independently approved):** Repeat/retention memiliki arti berbeda untuk subscription, durable goods, retail, and lead-based B2B.

**Glossary:**
- **Lifecycle:** Tahap hubungan customer dengan organisasi.
- **Activation:** Momen ketika customer mencapai first meaningful value/action.
- **Churn:** Customer berhenti atau tidak lagi aktif menurut definisi bisnis.
- **CRM:** Customer Relationship Management; strategi dan sistem pengelolaan relasi customer.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH02 — Customer Data Architecture & Database

**Competency ID(s):** T12-C02

**Agency evidence (role-level):** B: Manager, Marketing, WPP Media employer-hosted JD, Italy; CRM communications, marketing automation platform/workflow configuration, newsletters, database hygiene, compliance and email performance. Adjacent title/scope, not a dedicated CRM specialist JD. | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | B: Manager, Analytics/Insights, Omnicom Media employer-hosted JD, New York; includes segmentation, marketing analytics and CRM evaluations. Adjacent analytics evidence, not dedicated lifecycle/automation operations. | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Customer data architecture mengatur struktur, identifiers, sources, events, fields, relationships, deduplication, consent, and access. Data dapat berasal dari web/app, POS, CRM, support, email, WhatsApp, sales, and offline systems. Identity resolution harus dilakukan dengan governance dan tidak menggabungkan data hanya karena nama/email mirip. Data model perlu menyebut customer, account, contact, event, transaction, product, and consent entities.

**Simulated example:** SIMULATED — satu customer memiliki email berbeda untuk transaksi marketplace dan website. Deduping berdasarkan nama dapat menggabungkan dua orang; perlu deterministic identifiers, confidence rules, and manual review threshold.

**Technical depth / workflow:**
- <b>Inventory data sources.</b> Dokumentasikan owner, refresh, identifier, fields, consent, and quality.
- <b>Design data model.</b> Gambar entities, primary keys, relationships, events, and transaction/customer grain.
- <b>Define identity rules.</b> Bedakan deterministic/probabilistic match, duplicates, merge/split, and unknowns.
- <b>Apply privacy governance.</b> Tentukan purpose, permissions, retention, deletion, and audit access.

**Practice / deliverable:** Buat CRM data dictionary dan ERD sederhana: contact, account, transaction, product, event, consent, and communication preference. Sertakan dedupe, identity, access, and retention rules.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa data merge harus memiliki confidence rules?
   **Expected answer in guide (not independently approved):** False merges dapat menampilkan data customer lain, salah segment, dan mengirim komunikasi yang keliru.
2. **Q:** Apa beda contact record dan transaction record?
   **Expected answer in guide (not independently approved):** Contact merepresentasikan individu/account; transaction merepresentasikan event bisnis dengan tanggal, product, value, and status.
3. **Q:** Apa peran consent dan preference fields?
   **Expected answer in guide (not independently approved):** Membatasi tujuan, channel, topic, and frequency komunikasi sesuai izin dan pilihan customer.

**Glossary:**
- **Identity resolution:** Pengaitan record ke identitas customer dengan rule tertentu.
- **Primary key:** Identifier unik untuk entity.
- **Data deduplication:** Pengelolaan record ganda.
- **Data retention:** Aturan berapa lama data disimpan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH03 — Segmentation, Lead Scoring & Lifecycle Stages

**Competency ID(s):** T12-C03

**Agency evidence (role-level):** B: Manager, Marketing, WPP Media employer-hosted JD, Italy; CRM communications, marketing automation platform/workflow configuration, newsletters, database hygiene, compliance and email performance. Adjacent title/scope, not a dedicated CRM specialist JD. | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | B: Manager, Analytics/Insights, Omnicom Media employer-hosted JD, New York; includes segmentation, marketing analytics and CRM evaluations. Adjacent analytics evidence, not dedicated lifecycle/automation operations. | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Segmentation mengelompokkan customer untuk action yang relevan; lead scoring menilai fit/intent/progression; lifecycle stage memberi konteks hubungan. Segment harus memiliki criteria yang reproducible, refresh cadence, size, and owner. RFM (recency, frequency, monetary) berguna untuk transaksi, tetapi tidak menggantikan behavioral/need segmentation. Lead scoring harus divalidasi terhadap sales outcomes agar tidak hanya memberi poin pada aktivitas mudah.

**Simulated example:** SIMULATED — 1.000 leads mendapat skor tinggi karena membuka email berkali-kali, tetapi tak ada yang fit dengan ICP. Model scoring yang baik memasukkan fit, high-intent activity, exclusions, and sales feedback.

**Technical depth / workflow:**
- <b>Define use case.</b> Tentukan tindakan yang ingin didorong dan keputusan siapa yang menggunakan segment.
- <b>Set rules.</b> Pilih attributes/events/windows, thresholds, exclusions, and refresh logic.
- <b>Validate score.</b> Bandingkan high/low score dengan qualified pipeline, conversion, and false positives.
- <b>Operationalize.</b> Tentukan owner, routing, SLA, suppression, and monitoring.

**Practice / deliverable:** Buat segment taxonomy 6 kelompok dan lead score model dengan firmographic/behavioral signals, point weights, exclusions, validation sample, and sales handoff SLA.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa risiko lead scoring hanya dari email opens?
   **Expected answer in guide (not independently approved):** Open tracking dapat bias/privacy-protected and tidak selalu menandakan intent atau fit.
2. **Q:** Apa beda fit dan intent?
   **Expected answer in guide (not independently approved):** Fit adalah kesesuaian dengan target profile; intent adalah sinyal kebutuhan/kesiapan bertindak.
3. **Q:** Bagaimana memvalidasi model scoring?
   **Expected answer in guide (not independently approved):** Uji terhadap qualified rate, sales acceptance, conversion, false positives/negatives, and calibration over time.

**Glossary:**
- **RFM:** Recency, Frequency, Monetary segmentation.
- **Lead scoring:** Model penilaian fit/intent/progression untuk prioritas.
- **ICP:** Ideal Customer Profile.
- **False positive:** Record yang dianggap eligible/high score tetapi tidak sesuai outcome.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH04 — Customer Journey & Trigger-Based Communication

**Competency ID(s):** T12-C04

**Agency evidence (role-level):** B: Manager, Marketing, WPP Media employer-hosted JD, Italy; CRM communications, marketing automation platform/workflow configuration, newsletters, database hygiene, compliance and email performance. Adjacent title/scope, not a dedicated CRM specialist JD. | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | B: Manager, Analytics/Insights, Omnicom Media employer-hosted JD, New York; includes segmentation, marketing analytics and CRM evaluations. Adjacent analytics evidence, not dedicated lifecycle/automation operations. | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Trigger-based communication terjadi karena event/kondisi: signup, purchase, product usage, cart abandon, renewal, inactivity, or service status. Trigger berbeda dari broadcast campaign dan journey sequence. Setiap workflow perlu eligibility, consent, branch, delay, frequency cap, suppression, exit condition, retry, and exception handling. Timing harus masuk akal dengan product use and customer context.

**Simulated example:** SIMULATED — reminder abandoned cart dikirim setelah customer menyelesaikan order lewat marketplace. Tanpa purchase suppression/cross-channel event, customer menerima pesan yang tidak relevan.

**Technical depth / workflow:**
- <b>Map trigger events.</b> Definisikan event source, conditions, parameters, delay, and event quality.
- <b>Design branches.</b> Tentukan if/else, consent, segment, action, suppression, and exit.
- <b>Set frequency/priority.</b> Tangani competing journeys, quiet hours, service-vs-promo, and priority hierarchy.
- <b>Test exception paths.</b> Uji duplicates, retries, missing fields, opt-out, purchase, and delivery failure.

**Practice / deliverable:** Buat workflow diagram untuk welcome, cart abandon, post-purchase, and reactivation. Sertakan trigger/condition/action, branches, delays, suppression, exit, frequency cap, and QA scenarios.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda trigger dan campaign blast?
   **Expected answer in guide (not independently approved):** Trigger dikirim karena event/condition spesifik; blast dikirim ke target segment pada jadwal yang ditetapkan.
2. **Q:** Mengapa cross-channel purchase suppression penting?
   **Expected answer in guide (not independently approved):** Agar customer tidak menerima reminder setelah membeli di channel lain.
3. **Q:** Apa fungsi exit condition?
   **Expected answer in guide (not independently approved):** Mengeluarkan contact saat goal tercapai, tidak lagi eligible, atau consent/status berubah.

**Glossary:**
- **Trigger:** Event/kondisi yang memulai workflow.
- **Branch:** Percabangan berdasarkan condition.
- **Suppression:** Pengecualian contact dari komunikasi tertentu.
- **Exit condition:** Aturan keluar dari journey/workflow.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH05 — Email, WhatsApp, SMS & Push Strategy

**Competency ID(s):** T12-C05

**Agency evidence (role-level):** B: Manager, Marketing, WPP Media employer-hosted JD, Italy; CRM communications, marketing automation platform/workflow configuration, newsletters, database hygiene, compliance and email performance. Adjacent title/scope, not a dedicated CRM specialist JD. | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | B: Manager, Analytics/Insights, Omnicom Media employer-hosted JD, New York; includes segmentation, marketing analytics and CRM evaluations. Adjacent analytics evidence, not dedicated lifecycle/automation operations. | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Email, WhatsApp, SMS, and push memiliki permission, format, cost, immediacy, content, and response expectations berbeda. Channel selection harus mengikuti customer preference, urgency, service vs marketing purpose, and local policy/platform terms. Email memerlukan sender/domain, authentication (SPF/DKIM/DMARC), list hygiene, unsubscribe, deliverability; WhatsApp business messaging memiliki template/session/pricing/policy rules yang harus diverifikasi terkini. Jangan menganggap nomor telepon berarti izin marketing.

**Simulated example:** SIMULATED — order delay memerlukan service update segera, sedangkan promo cross-sell dapat menunggu email preference. Mengirim promo WhatsApp kepada contact tanpa consent dapat merusak trust dan melanggar policy.

**Technical depth / workflow:**
- <b>Choose channel by message.</b> Cocokkan urgency, complexity, preference, reach, accessibility, and cost.
- <b>Set permission.</b> Catat source/purpose/time of consent, opt-in/opt-out, and preference.
- <b>Design content.</b> Susun sender, subject/preview, message body, CTA, template, links, and fallback.
- <b>Validate compliance.</b> Check quiet hours, template category, unsubscribe, frequency, policy, and local legal advice.

**Practice / deliverable:** Buat channel decision matrix dan 3 sample communications untuk service update, onboarding, and promotional reactivation. Sertakan consent, preference, opt-out, fallback, and compliance check.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apakah contact detail sama dengan consent marketing?
   **Expected answer in guide (not independently approved):** Tidak. Email/nomor yang tersedia tidak otomatis menjadi izin promosi.
2. **Q:** Kapan SMS/WhatsApp lebih tepat daripada email?
   **Expected answer in guide (not independently approved):** Untuk komunikasi urgent/transactional atau audience preference tertentu; harus sesuai permission, cost, policy, and use case.
3. **Q:** Mengapa channel fallback perlu dirancang?
   **Expected answer in guide (not independently approved):** Agar pesan penting tetap dapat disampaikan jika primary channel gagal, tanpa melanggar consent/frequency rules.

**Glossary:**
- **Deliverability:** Kemampuan pesan mencapai inbox/device sesuai rules provider.
- **Opt-out:** Pilihan customer untuk berhenti menerima komunikasi.
- **Transactional message:** Pesan terkait transaksi/service; tetap harus sesuai legal/policy.
- **Template message:** Format pesan yang perlu approval/eligibility pada platform tertentu.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH06 — Marketing Automation & Workflow Architecture

**Competency ID(s):** T12-C02, T12-C04, T12-C06

**Agency evidence (role-level):** B: Manager, Marketing, WPP Media employer-hosted JD, Italy; CRM communications, marketing automation platform/workflow configuration, newsletters, database hygiene, compliance and email performance. Adjacent title/scope, not a dedicated CRM specialist JD. | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | B: Manager, Analytics/Insights, Omnicom Media employer-hosted JD, New York; includes segmentation, marketing analytics and CRM evaluations. Adjacent analytics evidence, not dedicated lifecycle/automation operations. | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Automation architecture menyusun trigger, condition, action, branch, delay, data input, integration, retry, and monitoring. Workflow harus idempotent agar event duplicate tidak memicu pesan ganda. API/webhook, CRM, email service, spreadsheet, and data warehouse perlu error handling and ownership. Automation bukan sekadar happy path; desain juga failure, consent change, missing data, and human handoff.

**Simulated example:** SIMULATED — webhook purchase dikirim dua kali sehingga customer menerima dua welcome journeys. Unique event ID, deduplication, idempotency, and journey exit rules mencegah duplicate trigger.

**Technical depth / workflow:**
- <b>Draw architecture.</b> Map source, trigger, transformation, destination, logs, and owner.
- <b>Define reliability.</b> Gunakan unique IDs, idempotency, retries, rate limits, and dead-letter/error handling.
- <b>Protect data.</b> Validate field mapping, permissions, secrets, minimization, and audit logs.
- <b>Test all paths.</b> Jalankan success, duplicate, missing field, API failure, opt-out, and manual escalation tests.

**Practice / deliverable:** Buat automation architecture dan QA plan untuk form-to-CRM-to-email flow. Dokumentasikan schema, API/webhook, dedupe, retries, consent, error queue, monitoring, and human handoff.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa arti idempotent workflow?
   **Expected answer in guide (not independently approved):** Pemrosesan event berulang tidak menghasilkan efek samping ganda, seperti duplicate contact/message.
2. **Q:** Mengapa retry harus memiliki batas?
   **Expected answer in guide (not independently approved):** Retry tanpa kontrol dapat membuat duplicate action, API overload, and repeated messages.
3. **Q:** Apa yang wajib disimpan dalam error log?
   **Expected answer in guide (not independently approved):** Timestamp, event ID, failure reason, workflow step, retry count, owner, and remediation status.

**Glossary:**
- **Webhook:** Pesan/event yang dikirim antar sistem saat event terjadi.
- **Idempotency:** Sifat proses agar pengulangan input tidak menggandakan efek.
- **Dead-letter queue:** Tempat menyimpan event yang gagal diproses setelah retries.
- **API:** Interface untuk pertukaran data antar aplikasi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH07 — Personalization, Content & Deliverability

**Competency ID(s):** T12-C06

**Agency evidence (role-level):** B: Manager, Marketing, WPP Media employer-hosted JD, Italy; CRM communications, marketing automation platform/workflow configuration, newsletters, database hygiene, compliance and email performance. Adjacent title/scope, not a dedicated CRM specialist JD. | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | B: Manager, Analytics/Insights, Omnicom Media employer-hosted JD, New York; includes segmentation, marketing analytics and CRM evaluations. Adjacent analytics evidence, not dedicated lifecycle/automation operations. | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Personalization harus memberi relevansi tanpa terasa mengawasi. Gunakan attributes/behavior yang diperlukan, jelaskan value, jaga data minimization, and provide preference controls. Deliverability dipengaruhi sender reputation, authentication (SPF/DKIM/DMARC), list quality, bounce, complaint, engagement, content, and sending behavior. Open rates memiliki privacy limitations; gunakan click, conversion, deliverability, and downstream outcomes secara seimbang.

**Simulated example:** SIMULATED — email personalisasi menyebut lokasi presisi yang tidak pernah diberitahu user dan membuat mereka tidak nyaman. Gunakan context yang transparan, minimal, dan bermanfaat, bukan personalization yang invasif.

**Technical depth / workflow:**
- <b>Choose data fields.</b> Gunakan data yang relevan, lawful, current, and necessary untuk customer value.
- <b>Build fallback.</b> Sediakan default content saat attribute missing/outdated; jangan kirim blank or incorrect merge fields.
- <b>Check deliverability.</b> Periksa authentication, bounce, complaint, list hygiene, content, and engagement.
- <b>Review privacy/trust.</b> Test data use, access, preference, suppression, and customer expectation.

**Practice / deliverable:** Buat personalization map dan email deliverability audit: data fields, source, use/purpose, fallback, preference, SPF/DKIM/DMARC checklist, bounce/complaint, and KPI.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa open rate tidak selalu reliable?
   **Expected answer in guide (not independently approved):** Privacy features dan image preloading dapat mengubah open tracking; ia bukan ukuran penuh attention.
2. **Q:** Apa fungsi SPF, DKIM, dan DMARC?
   **Expected answer in guide (not independently approved):** Authentication/alignment membantu memverifikasi domain sending dan mengurangi spoofing; konfigurasi harus sesuai provider.
3. **Q:** Bagaimana membuat personalization terasa relevan?
   **Expected answer in guide (not independently approved):** Gunakan data yang diperlukan, jelaskan manfaat, hindari kejutan invasif, dan sediakan preference/control.

**Glossary:**
- **Personalization:** Penyesuaian experience/message berdasarkan data yang relevan.
- **SPF:** Sender Policy Framework untuk otorisasi sending hosts.
- **DKIM:** DomainKeys Identified Mail untuk signature pesan.
- **DMARC:** Policy/reporting layer untuk domain authentication alignment.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH08 — Retention, Churn, Cohort & Customer Lifetime Value

**Competency ID(s):** T12-C07

**Agency evidence (role-level):** B: Manager, Marketing, WPP Media employer-hosted JD, Italy; CRM communications, marketing automation platform/workflow configuration, newsletters, database hygiene, compliance and email performance. Adjacent title/scope, not a dedicated CRM specialist JD. | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | B: Manager, Analytics/Insights, Omnicom Media employer-hosted JD, New York; includes segmentation, marketing analytics and CRM evaluations. Adjacent analytics evidence, not dedicated lifecycle/automation operations. | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Retention, churn, cohort, and LTV mengukur kualitas hubungan customer sepanjang waktu. Cohort dibentuk berdasarkan event awal yang sama; retention perlu definisi activity yang sesuai model bisnis. Churn dapat berupa inactivity, cancellation, lapse, or loss of revenue. LTV harus memperhatikan margin, repeat cadence, refunds, discounts, service cost, and horizon; jangan menghitung revenue-only LTV lalu membandingkannya dengan CAC seolah-olah contribution.

**Simulated example:** SIMULATED — dua customer memiliki revenue LTV sama, tetapi satu membeli produk bermargin rendah dengan biaya support tinggi. CRM investment tidak boleh menganggap keduanya bernilai sama.

**Technical depth / workflow:**
- <b>Define retention/churn.</b> Tetapkan activity event, observation window, inactivity rule, and segment.
- <b>Build cohorts.</b> Kelompokkan berdasarkan first purchase/signup/activation and track subsequent periods.
- <b>Estimate LTV.</b> Gunakan contribution margin, purchase frequency, lifespan, churn, returns, and service costs.
- <b>Design interventions.</b> Kaitkan risk signal dengan relevant communication, service action, and holdout.

**Practice / deliverable:** Buat cohort retention workbook, churn definition, LTV sensitivity model, and 3 intervention hypotheses. Gunakan synthetic transactions and explicitly label assumptions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa cohort harus memiliki start event yang sama?
   **Expected answer in guide (not independently approved):** Agar kelompok dibandingkan pada lifecycle age yang setara.
2. **Q:** Apa risiko LTV berbasis revenue?
   **Expected answer in guide (not independently approved):** Tidak memperhitungkan margin, returns, discounts, support costs, or contribution.
3. **Q:** Apa yang dimaksud churn signal?
   **Expected answer in guide (not independently approved):** Perubahan perilaku/engagement/purchase yang dapat mengindikasikan risiko berhenti; perlu validasi dengan historical outcomes.

**Glossary:**
- **Cohort:** Kelompok customer dengan titik awal/event sama.
- **Retention rate:** Proporsi cohort yang tetap aktif menurut definisi/window.
- **Churn rate:** Proporsi customer yang berhenti menurut definisi/window.
- **Contribution LTV:** Nilai customer berdasarkan contribution, bukan revenue saja.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH09 — Lifecycle Experimentation & Reporting

**Competency ID(s):** T12-C08

**Agency evidence (role-level):** B: Manager, Marketing, WPP Media employer-hosted JD, Italy; CRM communications, marketing automation platform/workflow configuration, newsletters, database hygiene, compliance and email performance. Adjacent title/scope, not a dedicated CRM specialist JD. | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | B: Manager, Analytics/Insights, Omnicom Media employer-hosted JD, New York; includes segmentation, marketing analytics and CRM evaluations. Adjacent analytics evidence, not dedicated lifecycle/automation operations. | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Lifecycle experimentation menguji pesan, timing, channel, offer, onboarding sequence, and frequency. Metric seperti delivery, bounce, click, conversion, repeat, complaint, unsubscribe, and revenue harus dipilih sesuai objective. Test perlu randomization unit, holdout, primary KPI, guardrails, sample/duration, and decision rules. CRM lift sering dipengaruhi seasonality, overlapping campaigns, and contact eligibility; holdout membantu menilai incrementality.

**Simulated example:** SIMULATED — subject line A menaikkan opens, tetapi purchases tidak berubah dan unsubscribe meningkat. Jika tujuan revenue/retention, open-rate winner belum tentu bisnis winner.

**Technical depth / workflow:**
- <b>Frame hypothesis.</b> Tentukan stage, barrier, message/timing change, expected mechanism, and outcome.
- <b>Design control.</b> Pilih user/contact-level randomization, holdout, sample, duration, and exclusion rules.
- <b>Track quality.</b> Monitor primary metric with guardrails for complaints, unsubscribes, margin, and service contacts.
- <b>Interpret outcome.</b> Pisahkan short-term engagement from incremental sales/retention.

**Practice / deliverable:** Buat test backlog untuk onboarding, replenishment, win-back: hypothesis, audience, treatment/control, primary/guardrails, timing, sample assumptions, and decision rules.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa opens bukan satu-satunya success metric?
   **Expected answer in guide (not independently approved):** Engagement proxy tidak menjamin conversion/retention dan dapat terdistorsi privacy mechanisms.
2. **Q:** Apa fungsi holdout group?
   **Expected answer in guide (not independently approved):** Memberi pembanding untuk mengestimasi dampak tambahan komunikasi dibanding tidak menerima treatment.
3. **Q:** Mengapa frequency perlu guardrail?
   **Expected answer in guide (not independently approved):** Kontak berlebihan dapat menaikkan fatigue, unsubscribe, complaint, and long-term brand harm.

**Glossary:**
- **Holdout:** Kelompok yang tidak menerima treatment untuk comparison.
- **Frequency cap:** Batas kontak per customer/periode.
- **Control group:** Kelompok pembanding dalam experiment.
- **Lifecycle metric:** Metrik sesuai tahap hubungan customer.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH10 — CRM Capstone

**Competency ID(s):** T12-C08

**Agency evidence (role-level):** B: Manager, Marketing, WPP Media employer-hosted JD, Italy; CRM communications, marketing automation platform/workflow configuration, newsletters, database hygiene, compliance and email performance. Adjacent title/scope, not a dedicated CRM specialist JD. | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | B: Manager, Analytics/Insights, Omnicom Media employer-hosted JD, New York; includes segmentation, marketing analytics and CRM evaluations. Adjacent analytics evidence, not dedicated lifecycle/automation operations. | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** CRM Capstone menunjukkan lifecycle system yang menghubungkan data architecture, segments, consent, triggers, channel, automation, deliverability, measurement, and business value. Workflow harus memiliki happy path dan failure path. Data synthetic/demo harus diberi label dan privacy risks ditulis eksplisit. Presentasi harus memperlihatkan bagaimana CRM mengurangi friction atau meningkatkan customer value, bukan sekadar memperbanyak message volume.

**Simulated example:** SIMULATED — subscription brand membangun new subscriber onboarding, usage education, renewal reminder, failed-payment recovery, and churn prevention. Capstone menguji event integrity, suppression, customer support handoff, and cohort impact.

**Technical depth / workflow:**
- <b>Frame lifecycle problem.</b> Tentukan stage, value, churn risk, and objective.
- <b>Design data and segments.</b> Bangun schema, consent, segment logic, and trigger rules.
- <b>Implement workflow blueprint.</b> Map channel, messages, branches, failures, retries, and QA.
- <b>Measure and govern.</b> Buat cohort, holdout, KPI/guardrails, owner, and improvement roadmap.

**Practice / deliverable:** Bangun portfolio pack: lifecycle map, data dictionary/ERD, segment model, consent matrix, workflow diagrams, message samples, QA cases, deliverability audit, cohort/LTV workbook, and executive readout.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa bukti CRM system siap dijalankan?
   **Expected answer in guide (not independently approved):** Documented data sources, consent, workflow, suppression/exit, QA, deliverability, monitoring, owners, and rollback.
2. **Q:** Bagaimana membedakan CRM activity dan business impact?
   **Expected answer in guide (not independently approved):** Message volume/delivery adalah activity; activation, repeat, margin, retention, and incremental lift menunjukkan impact.
3. **Q:** Apa yang harus dilakukan bila opt-out tidak masuk ke automation?
   **Expected answer in guide (not independently approved):** Segera suppress/stop marketing, perbaiki event/data pipeline, audit impacted records, and document incident/remediation.

**Glossary:**
- **Lifecycle architecture:** Rangkaian stage, data, trigger, channel, and experience.
- **Contact policy:** Aturan eligibility/frequency/preferences komunikasi.
- **CRM capstone:** Portfolio case yang membuktikan data-to-lifecycle execution.
- **Governance:** Aturan ownership, permissions, quality, and accountability.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 13. Content Strategy & Creation (`content`)

### DPA-T13-CH01 — Audience, Culture & Brand Voice

**Competency ID(s):** T13-C01

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Content Strategy dimulai dari business objective, audience need, brand positioning, and communication role. Content bukan sekadar kalender posting; ia adalah sistem aset yang membantu audience memahami, mempertimbangkan, memilih, menggunakan, dan merekomendasikan brand. Brand voice harus memiliki prinsip, tone, vocabulary, and boundaries yang konsisten, tetapi dapat diekspresikan secara native pada tiap platform.

**Simulated example:** SIMULATED — brand ingin dikenal sebagai ahli finansial yang mudah dipahami. Tone harus sederhana dan membumi, tetapi tetap akurat; TikTok dapat memakai storytelling, LinkedIn memakai insight profesional, dan blog menjelaskan detail tanpa mengubah brand promise.

**Technical depth / workflow:**
- <b>Define audience and role.</b> Tentukan audience need, stage, channel context, and business task content.
- <b>Write voice principles.</b> Tetapkan personality, tone dimensions, vocabulary, evidence bar, and prohibited claims.
- <b>Build examples.</b> Tunjukkan same proposition dalam format platform yang berbeda.
- <b>Set governance.</b> Tetapkan approver, accessibility, legal review, update, and response rules.

**Practice / deliverable:** Buat brand voice guide dengan 4 prinsip, tone matrix, vocabulary, do/don't, claims policy, dan contoh adaptasi satu message untuk TikTok, Instagram, YouTube, LinkedIn, dan blog.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda brand voice dan tone?
   **Expected answer in guide (not independently approved):** Voice adalah karakter konsisten; tone adalah penyesuaian ekspresi sesuai konteks/platform/audience.
2. **Q:** Mengapa brand voice tidak boleh menghalangi platform-native content?
   **Expected answer in guide (not independently approved):** Ekspresi perlu menyesuaikan format dan perilaku audience sambil mempertahankan promise dan principles.
3. **Q:** Apa yang termasuk claims policy?
   **Expected answer in guide (not independently approved):** Batas klaim, proof requirement, legal/regulatory review, and prohibited statements.

**Glossary:**
- **Brand voice:** Karakter bahasa/kepribadian brand yang konsisten.
- **Tone:** Nuansa ekspresi sesuai konteks.
- **Content role:** Tugas aset konten dalam journey.
- **Claims policy:** Aturan bukti dan approval untuk pernyataan brand.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T13-CH02 — Content Strategy, Objectives & Pillars

**Competency ID(s):** T13-C02

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Content strategy menerjemahkan objective campaign/business menjadi content objectives, territories, pillars, formats, and distribution roles. Content pillar bukan sekadar daftar tema; tiap pillar harus memiliki audience need, brand role, proof, format, and measurement. Pisahkan content untuk education, consideration, conversion, retention, and advocacy. Proporsi konten perlu mengikuti objective, resources, and evidence—not fixed universal percentages.

**Simulated example:** SIMULATED — brand skincare memiliki pillars ingredient education, routine, proof, and community stories. Jika semua content hanya promotional offer, brand gagal menjawab research needs; jika semua education tanpa product proof, journey ke consideration juga lemah.

**Technical depth / workflow:**
- <b>Map objective to content task.</b> Tentukan awareness, education, proof, conversion, onboarding, and retention roles.
- <b>Build pillars.</b> Tetapkan audience question, brand POV, evidence, formats, CTA, and owner.
- <b>Set format mix.</b> Pilih long/short, video/article/carousel/newsletter, and accessibility needs.
- <b>Define measurement.</b> Pilih KPI sesuai task; hindari view/follower sebagai universal metric.

**Practice / deliverable:** Buat content strategy one-pager dengan objectives, audience journey, 4–6 content pillars, formats, distribution, channel role, KPIs, owner, and resource assumptions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda content pillar dan editorial calendar?
   **Expected answer in guide (not independently approved):** Pillar menentukan territory/strategic themes; calendar mengatur kapan dan aset mana yang diproduksi/publish.
2. **Q:** Mengapa persentase content mix tidak universal?
   **Expected answer in guide (not independently approved):** Kategori, audience, funnel, budget, and business objective berbeda; proporsi harus ditentukan dari evidence.
3. **Q:** Kapan content dianggap mendukung conversion?
   **Expected answer in guide (not independently approved):** Saat ia menjawab objection, membuktikan value, memfasilitasi decision, and mengarah ke next action yang relevan.

**Glossary:**
- **Content pillar:** Tema strategis yang menyusun sistem konten.
- **Content objective:** Perubahan yang dituju oleh suatu aset/kumpulan konten.
- **Format mix:** Kombinasi artikel, video, short-form, carousel, email, and other formats.
- **Editorial territory:** Ruang topik/narasi yang konsisten dengan audience dan brand.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T13-CH03 — Editorial Architecture & Content Calendar

**Competency ID(s):** T13-C03

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Editorial architecture mengatur alur ide, brief, production, review, publish, repurpose, and update. Calendar harus memuat objective, audience, pillar, format, channel, owner, asset status, approval, dependencies, dates, and KPI. Always-on dan campaign content memiliki ritme berbeda. Capacity planning penting agar kalender realistis dan tidak mendorong kuantitas dengan mengorbankan editorial quality.

**Simulated example:** SIMULATED — tim memiliki kapasitas dua video dan satu artikel per minggu. Calendar 10 asset per minggu membuat overdue dan review terburu-buru. Editorial system harus menyeimbangkan campaign deadlines, evergreen needs, and production bandwidth.

**Technical depth / workflow:**
- <b>Design workflow.</b> Map ideation, brief, research, draft, production, review, approval, publishing, and update.
- <b>Build calendar schema.</b> Isi owner, channel, format, objective, pillar, due dates, assets, approvals, and KPI.
- <b>Plan capacity.</b> Perkirakan hours, dependencies, production resources, and contingency.
- <b>Govern status.</b> Gunakan status, version, feedback, accessibility, and archive.

**Practice / deliverable:** Buat editorial calendar 4 minggu dengan 12 planned assets, status workflow, owner, deadlines, production effort, campaign dependencies, repurpose plan, and KPI.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa calendar harus memuat status/owner?
   **Expected answer in guide (not independently approved):** Tanpa status dan owner, tim tidak dapat mengelola approval, dependencies, delays, and accountability.
2. **Q:** Apa beda always-on dan campaign content?
   **Expected answer in guide (not independently approved):** Always-on melayani kebutuhan berulang; campaign content terikat objective/timing/event tertentu.
3. **Q:** Bagaimana mengatasi kapasitas produksi terbatas?
   **Expected answer in guide (not independently approved):** Prioritaskan audience/business value, repurpose, gunakan modular assets, and plan feasible cadence.

**Glossary:**
- **Editorial architecture:** Sistem struktur topic, formats, workflow, ownership, and distribution.
- **Always-on content:** Aset rutin yang melayani kebutuhan berulang.
- **Production capacity:** Jumlah output yang dapat diproduksi dengan resource/waktu tersedia.
- **Content lifecycle:** Alur dari ide hingga update/archive.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T13-CH04 — Insight Mining & Content Opportunity

**Competency ID(s):** T13-C01, T13-C04

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Insight mining menggabungkan search, social listening, comments, competitor content, community, consumer research, and campaign performance untuk menemukan content gaps dan audience tensions. Ide konten perlu berasal dari audience questions, not solely trend chasing. Opportunity sizing menilai reach, relevance, urgency, competition, brand permission, production effort, and ability to differentiate.

**Simulated example:** SIMULATED — banyak komentar bertanya 'berapa lama hasil terlihat?' tetapi content brand hanya berisi product features. Insight menunjukkan need for realistic expectations and proof; konten educational dapat menjawab pertanyaan sekaligus mengurangi customer-service load.

**Technical depth / workflow:**
- <b>Collect signals.</b> Ambil search queries, comments, questions, support tickets, creator formats, and competitor gaps.
- <b>Cluster needs.</b> Kelompokkan problem, misconception, objection, usage task, and cultural context.
- <b>Validate insight.</b> Cari evidence across sources, volume, recency, and representative limits.
- <b>Size opportunity.</b> Score relevance, audience value, differentiation, effort, and business role.

**Practice / deliverable:** Buat insight-mining board 20 signals, cluster audience questions, validate three tensions, lalu prioritaskan lima content opportunities dengan score dan evidence trail.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa tren viral belum tentu opportunity?
   **Expected answer in guide (not independently approved):** Trend bisa tidak relevan dengan audience/category/brand atau tidak mendukung objective.
2. **Q:** Apa tanda insight mining berkualitas?
   **Expected answer in guide (not independently approved):** Signals dapat ditelusuri, cluster menjelaskan need/tension, evidence lintas sumber, and content action jelas.
3. **Q:** Apa beda audience question dan brand talking point?
   **Expected answer in guide (not independently approved):** Audience question berasal dari kebutuhan mereka; brand talking point berasal dari hal yang ingin disampaikan brand.

**Glossary:**
- **Insight mining:** Proses menemukan kebutuhan/tension dari beragam data/sinyal.
- **Content gap:** Pertanyaan/intent yang belum dilayani dengan baik.
- **Opportunity sizing:** Penilaian nilai, reach, relevance, effort, and feasibility.
- **Audience tension:** Kebutuhan yang berkonflik atau hambatan utama audience.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T13-CH05 — Storytelling, Hook, Narrative & Brand POV

**Competency ID(s):** T13-C04

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Storytelling architecture membangun narasi dari hook, audience tension, problem, context, transformation, proof, and payoff. Hook menarik perhatian tetapi tidak boleh misleading. Brand POV memberi sudut pandang; story harus tetap factual, useful, and memorable. Format short-form perlu segera menyampaikan context/value, sedangkan long-form dapat membangun argument lebih lengkap. Narrative harus terhubung ke proposition dan CTA.

**Simulated example:** SIMULATED — hook 'cara hemat 50% biaya' digunakan, tetapi isi hanya memberi diskon 5%. Click/view mungkin naik, tetapi trust turun. Hook yang baik menjanjikan sesuatu yang benar-benar dibuktikan oleh konten.

**Technical depth / workflow:**
- <b>Choose audience tension.</b> Tulis konflik/need yang ingin diangkat dan mengapa relevan.
- <b>Build narrative arc.</b> Rancang hook, context, stakes, insight, proof, transformation, and payoff.
- <b>Express brand POV.</b> Pastikan sudut pandang punya evidence and relevance, bukan forced sales pitch.
- <b>Adapt to format.</b> Atur opening, pacing, captions, visuals, audio, and CTA sesuai platform.

**Practice / deliverable:** Buat tiga storyboards untuk satu insight: 15-second video, 60-second video, and long-form article. Sertakan hook, tension, beat sheet, proof, visual/audio notes, and CTA.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa risiko hook clickbait?
   **Expected answer in guide (not independently approved):** Audience expectation tidak terpenuhi, meningkatkan bounce/negative feedback, dan menurunkan brand trust.
2. **Q:** Apa beda tension dan problem statement?
   **Expected answer in guide (not independently approved):** Tension menangkap konflik/need audience secara naratif; problem statement memformulasikan hambatan untuk keputusan.
3. **Q:** Apa fungsi proof dalam storytelling?
   **Expected answer in guide (not independently approved):** Membuat claim dipercaya dan membedakan cerita dari opini/hiburan kosong.

**Glossary:**
- **Hook:** Pembuka yang menarik perhatian dan menetapkan relevansi.
- **Narrative arc:** Struktur perkembangan cerita dari awal sampai payoff.
- **Brand POV:** Sudut pandang khas brand yang didukung evidence.
- **Beat sheet:** Urutan bagian/adegan penting dalam story.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T13-CH06 — Long-Form Content Development

**Competency ID(s):** T13-C04

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Long-form content membutuhkan riset, struktur, evidence, editorial clarity, and search/user intent. Artikel, newsletter, founder POV, case study, blog, whitepaper, and thought leadership memiliki depth dan reader task berbeda. Outline perlu argument, source, examples, proof, author expertise, internal/external links, and CTA. Content accuracy dan legal claim review penting terutama pada finance/health/regulated categories.

**Simulated example:** SIMULATED — artikel 'panduan memilih kartu kredit' mencantumkan benefit tetapi tidak menyebut fees, eligibility, risks, or comparison method. Konten menjadi tidak seimbang dan berpotensi menyesatkan; editorial review perlu fact-check and disclosure.

**Technical depth / workflow:**
- <b>Define reader task.</b> Tentukan search/consumer intent, knowledge level, and action.
- <b>Research sources.</b> Gunakan primary/official sources, expert interviews, data, and citations; record access date.
- <b>Build structure.</b> Susun thesis, outline, evidence, examples, visuals, summary, and CTA.
- <b>Edit and publish.</b> Review accuracy, claims, readability, accessibility, SEO basics, and update ownership.

**Practice / deliverable:** Buat brief dan outline long-form 1.200–1.500 kata dengan thesis, audience, sources, evidence table, section hierarchy, visual suggestions, author review, and CTA.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa long-form membutuhkan source trail?
   **Expected answer in guide (not independently approved):** Pembaca/editor perlu memeriksa klaim, angka, freshness, and credibility.
2. **Q:** Apa risiko memakai sumber sekunder tanpa cross-check?
   **Expected answer in guide (not independently approved):** Angka/claim bisa outdated, salah konteks, atau hanya mengutip sumber lain yang sama.
3. **Q:** Kapan artikel harus diperbarui?
   **Expected answer in guide (not independently approved):** Saat data, policy, product, platform, legal claim, or search intent berubah.

**Glossary:**
- **Editorial brief:** Dokumen scope, reader, angle, evidence, outline, and CTA.
- **Primary source:** Sumber langsung/original seperti official data, report, laws, or research.
- **Thought leadership:** Konten yang menyampaikan insight/POV berbasis expertise.
- **Fact-check:** Verifikasi klaim dengan sumber dan evidence.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T13-CH07 — Short-Form Content & Repurposing

**Competency ID(s):** T13-C04

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Short-form content mengoptimalkan ide menjadi video/carousel/short posts dengan pacing, retention, visual hierarchy, sound, captions, and platform-specific constraints. Repurposing bukan copy-paste; satu source idea dapat dipecah menjadi multiple angles, hooks, formats, and audience stages. Batch production membantu efisiensi tetapi membutuhkan asset naming, versioning, and quality control.

**Simulated example:** SIMULATED — satu webinar 30 menit diubah menjadi 10 clips. Tanpa editorial selection, semua clip dimulai lambat dan tidak memberi context. Repurposing yang baik memilih moments, rewrite hooks, add captions, and check standalone completeness.

**Technical depth / workflow:**
- <b>Select content moments.</b> Identifikasi insight, demonstration, objection, story, and proof from source asset.
- <b>Design short-form.</b> Tentukan first-frame, hook, beat, captions, visual, audio, CTA, and duration.
- <b>Repurpose intelligently.</b> Sesuaikan narrative/format per channel, bukan memotong secara mekanis.
- <b>QA and package.</b> Periksa subtitles, safe zones, aspect ratio, audio rights, cover, filename, and versions.

**Practice / deliverable:** Buat repurpose matrix 1 long-form source menjadi 8 assets: 3 short videos, 2 carousels, 1 email, 1 LinkedIn post, and 1 story. Sertakan hook, audience, format, CTA, and production notes.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda repurposing dan reposting?
   **Expected answer in guide (not independently approved):** Repurposing mengadaptasi angle, structure, format, and CTA untuk audience/context; reposting mengulang asset.
2. **Q:** Mengapa first-frame penting?
   **Expected answer in guide (not independently approved):** Ia memberi context/relevance cepat dan memengaruhi apakah audience melanjutkan konsumsi.
3. **Q:** Apa yang harus dicek pada video short-form?
   **Expected answer in guide (not independently approved):** Aspect ratio, safe zones, captions, audio rights, claims, brand visibility, and link/CTA behavior.

**Glossary:**
- **Repurposing:** Mengadaptasi ide/asset ke format dan audience lain.
- **Retention curve:** Pola audience tetap menonton sepanjang durasi.
- **Safe zone:** Area visual yang tidak tertutup UI.
- **Batch production:** Memproduksi sejumlah asset dalam satu workflow/sesi.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T13-CH08 — Platform Adaptation: TikTok, Instagram, YouTube, LinkedIn

**Competency ID(s):** T13-C05

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Platform adaptation mempertimbangkan audience behavior, native formats, discovery mechanics, content length, interaction, and professional/community context. TikTok, Instagram Reels, YouTube Shorts tidak identik; LinkedIn memiliki expectation profesional dan context berbeda. Adaptasi tetap menjaga proposition/brand voice tetapi mengubah hook, depth, visual, pace, CTA, and publishing metadata sesuai platform.

**Simulated example:** SIMULATED — materi yang sama dibagikan verbatim di TikTok, LinkedIn, and YouTube. TikTok membutuhkan hook dan demo cepat; LinkedIn memerlukan point of view/insight; YouTube dapat mendukung explainer lebih dalam. Satu caption tidak cocok untuk semuanya.

**Technical depth / workflow:**
- <b>Map platform role.</b> Tentukan discovery, depth, community, professional credibility, or entertainment role.
- <b>Translate the idea.</b> Adapt hook, format, proof, length, language, CTA, and comment interaction.
- <b>Check platform specs/policy.</b> Validate dimensions, captions, music, disclosure, and account features.
- <b>Measure by context.</b> Compare metrics that match platform task, not raw views alone.

**Practice / deliverable:** Buat one-idea/multi-platform adaptation matrix untuk TikTok, Instagram, YouTube, and LinkedIn. Sertakan hook, format, depth, CTA, native behavior, KPI, and risk per platform.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa satu content format tidak selalu cocok lintas platform?
   **Expected answer in guide (not independently approved):** Audience intent, consumption context, platform distribution, interaction behavior, and format constraints berbeda.
2. **Q:** Apa yang harus konsisten?
   **Expected answer in guide (not independently approved):** Brand promise, fact accuracy, POV, and key message; format/length/execution dapat diadaptasi.
3. **Q:** Mengapa metrics lintas platform tidak boleh dibandingkan mentah?
   **Expected answer in guide (not independently approved):** Definitions, view thresholds, audience, and platform behavior berbeda; gunakan normalized task-specific metrics.

**Glossary:**
- **Platform-native:** Format/ekspresi yang sesuai mekanisme dan ekspektasi platform.
- **Adaptation matrix:** Perbandingan perubahan format/pesan per channel.
- **CTA:** Call to action yang meminta langkah berikutnya.
- **Engagement context:** Cara audience berinteraksi sesuai platform.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T13-CH09 — Content Distribution & Amplification

**Competency ID(s):** T13-C05

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Distribution and amplification menentukan bagaimana konten menjangkau audience melalui organic, paid, creator/KOL, community, newsletter, website, and partner channels. Distribution strategy bukan tugas setelah produksi; format, rights, timing, and measurement harus direncanakan di awal. Paid amplification sebaiknya memperkuat asset yang punya audience/creative fit, bukan menjadi jalan pintas untuk konten yang tidak menyelesaikan need.

**Simulated example:** SIMULATED — satu educational video perform baik organic tetapi usage rights creator tidak mengizinkan paid amplification. Campaign perlu memperoleh license/permission sebelum whitelisting atau repurposing.

**Technical depth / workflow:**
- <b>Set distribution role.</b> Tentukan channel, audience, objective, timing, owner, and cost.
- <b>Confirm rights.</b> Periksa music, creator usage, UGC permission, whitelisting, exclusivity, and duration.
- <b>Plan amplification.</b> Tentukan paid audience, budget, asset versions, landing/CTA, and test design.
- <b>Measure cross-channel.</b> Track organic/paid separately, assisted visits, content quality, and downstream outcomes.

**Practice / deliverable:** Buat distribution plan untuk 5 content assets: organic, paid, creator, community, newsletter, and website. Sertakan rights, owner, schedule, amplification trigger, KPI, and cross-channel caveats.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa paid boost bukan pengganti distribution strategy?
   **Expected answer in guide (not independently approved):** Amplification perlu audience fit, asset quality, rights, objective, budget, and downstream measurement.
2. **Q:** Apa risiko UGC/creator asset digunakan berbayar tanpa rights?
   **Expected answer in guide (not independently approved):** Pelanggaran usage agreement/IP, creator relationship damage, and policy/legal exposure.
3. **Q:** Bagaimana memisahkan hasil organic dan paid?
   **Expected answer in guide (not independently approved):** Gunakan tagging, platform reporting, asset IDs, time windows, and clearly defined attribution.

**Glossary:**
- **Amplification:** Meningkatkan distribusi asset melalui paid/partner resources.
- **Usage rights:** Izin penggunaan asset/identitas creator pada channel/periode tertentu.
- **Whitelisting:** Penggunaan akun/identity creator untuk menjalankan paid ads sesuai permission.
- **Distribution plan:** Rencana kanal, audience, timing, owner, rights, and measurement.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T13-CH10 — Content Measurement & Optimization

**Competency ID(s):** T13-C06

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Content measurement menghubungkan objective, asset, audience, platform, and action. KPI dapat mencakup reach, watch time, retention, saves, shares, click, engaged sessions, qualified leads, assisted conversion, and business outcomes. Content performance perlu dianalisis menurut format, topic, hook, creator, channel, audience, and journey role. Jangan menilai content quality hanya dari view count atau menganggap engagement selalu berdampak ke sales.

**Simulated example:** SIMULATED — video views tinggi tetapi saves, qualified site visits, and brand recall rendah. Konten mungkin menghibur namun tidak memberikan utility atau memperkuat brand association; diagnosis memerlukan objective and audience context.

**Technical depth / workflow:**
- <b>Set objective-specific KPI.</b> Pilih output, attention, engagement, action, or business metric sesuai task.
- <b>Tag assets.</b> Gunakan content ID, pillar, hook, format, creator, platform, date, campaign, and CTA.
- <b>Analyze patterns.</b> Segment by asset and audience; compare retention, saves, click quality, and conversion.
- <b>Translate learning.</b> Tentukan continue, iterate, repurpose, retire, or scale with reason.

**Practice / deliverable:** Buat content performance dashboard schema dan optimization memo untuk 20 assets. Sertakan IDs, format, pillar, retention, engagement, click quality, conversion, objective, and next action.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa view count bukan universal success metric?
   **Expected answer in guide (not independently approved):** View thresholds/platform definitions berbeda dan tidak membuktikan attention, brand impact, or downstream behavior.
2. **Q:** Apa nilai saves dan shares?
   **Expected answer in guide (not independently approved):** Dapat menunjukkan utility/advocacy, tetapi tetap perlu interpretasi sesuai platform, content type, and business objective.
3. **Q:** Apa yang harus dilakukan bila content metric dan sales tidak sejalan?
   **Expected answer in guide (not independently approved):** Periksa audience/journey role, attribution, landing path, product readiness, and whether asset's intended job is direct conversion.

**Glossary:**
- **Watch time:** Total/average waktu audience menonton.
- **Retention:** Porsi audience yang bertahan sepanjang content.
- **Engaged session:** Sesi dengan meaningful engagement according to analytics definition.
- **Content ID:** Identifier unik untuk menghubungkan asset dengan data/report.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T13-CH11 — Content Strategy Capstone

**Competency ID(s):** T13-C02, T13-C06

**Agency evidence (role-level):** A: Manager Content Planning Jakarta, full-funnel content strategy, social/KOL integration and performance | A: Social Strategist and Social & Community Management Specialist JDs | A: Social Media Strategist role, organic channel publishing, editorial calendars, listening and community | A: Senior Social Media Executive Jakarta and Social Media Officer role evidence | D: Content Creator title-level evidence; no direct organic-social strategy JD in current index

**Learning objective / concept:** Content Capstone membangun satu quarter content system dari audience insight hingga measurement. Paket harus menyatukan brand voice, objectives, pillars, editorial architecture, insight mining, storytelling, long/short production, platform adaptation, distribution rights, and optimization. Produksi harus memasukkan shooting, editing, sound, lighting, motion, accessibility, and tool workflow bila role mencakup hands-on creator capability; P3I curriculum menjadi benchmark strategi/editorial/storytelling, bukan bukti semua skill produksi teknis tercakup.

**Simulated example:** SIMULATED — brand meluncurkan produk baru selama 90 hari. Capstone menghasilkan campaign umbrella narrative, editorial calendar, long-form anchor, 12 short assets, creator/community distribution, paid amplification plan, and measurement/learning loop.

**Technical depth / workflow:**
- <b>Frame campaign.</b> Tetapkan audience, positioning, campaign objective, and content role.
- <b>Build system.</b> Rancang pillars, editorial calendar, briefs, storytelling, and production workflow.
- <b>Ship and distribute.</b> Siapkan assets, rights, platform adaptations, organic/paid/creator/community plans.
- <b>Evaluate and iterate.</b> Analisis content quality/performance and update next-quarter strategy.

**Practice / deliverable:** Siapkan content portfolio: audience/insight deck, brand voice, 4–6 pillars, quarter calendar, 3 long-form briefs, 12 short-form storyboards/assets, production specs, distribution/right matrix, dashboard, and optimization review.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa yang harus bisa dijelaskan dari content capstone?
   **Expected answer in guide (not independently approved):** Mengapa content themes dipilih, audience need apa yang dijawab, bagaimana diproduksi/disebar, dan bagaimana success diukur.
2. **Q:** Apa yang belum otomatis tercakup oleh kurikulum content strategy?
   **Expected answer in guide (not independently approved):** Practical production depth seperti shooting, editing, lighting, audio, and motion perlu latihan teknis tambahan.
3. **Q:** Bagaimana membuktikan portfolio tanpa client?
   **Expected answer in guide (not independently approved):** Labeli brief/data sebagai simulated; tampilkan storyboard/asset/workflow/source and self-review, bukan fake performance claims.

**Glossary:**
- **Editorial system:** Sistem planning/production/publishing/update untuk content.
- **Storytelling architecture:** Struktur hook, tension, narrative, proof, and payoff.
- **Production workflow:** Tahapan shooting/editing/review/versioning/publishing.
- **Content capstone:** Sistem content end-to-end yang dapat dipresentasikan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 14. KOL / KOC / Influencer & Creator Partnerships (`kol`)

### DPA-T14-CH01 — Creator Economy & Influencer Ecosystem

**Competency ID(s):** T14-C01

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** Creator partnerships beroperasi dalam creator economy yang melibatkan talent, agency/MCN, brand, platform, creator manager, affiliate, production, and media amplification. Partnership dapat dibayar untuk reach, content, credibility, community, usage rights, or trackable conversion. Creator partnership bukan sekadar memilih akun dengan followers besar; strategi harus menentukan role creator dalam audience journey dan business objective.

**Simulated example:** SIMULATED — brand memilih creator besar dengan audience tidak relevan. Creator micro memiliki audience category fit dan trust lebih baik. Keputusan harus berdasarkan fit, content quality, geography, engagement quality, cost, and rights.

**Technical depth / workflow:**
- <b>Map ecosystem.</b> Identifikasi creator, manager, agency, MCN, platform, brand, and measurement partners.
- <b>Clarify objective.</b> Awareness, education, trust, consideration, content asset, sales, or community.
- <b>Choose model.</b> Paid content, seeding, barter, ambassador, affiliate, licensing, or partnership ads.
- <b>Define governance.</b> Disclosure, contract, approvals, usage rights, timeline, and measurement.

**Practice / deliverable:** Buat creator ecosystem map dan role matrix untuk awareness, education, product review, conversion, and advocacy campaigns. Sertakan partner types, deliverables, payment model, and risks.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa creator economy tidak sama dengan follower economy?
   **Expected answer in guide (not independently approved):** Creator value mencakup audience trust, content quality, niche authority, rights, and commercial fit—not audience size alone.
2. **Q:** Apa beda influencer campaign dan affiliate partnership?
   **Expected answer in guide (not independently approved):** Influencer dibayar untuk content/reach/credibility; affiliate dibayar menurut tracked action/sales, meski creator dapat menjalankan keduanya.
3. **Q:** Apa fungsi MCN/creator agency?
   **Expected answer in guide (not independently approved):** Mengelola talent, production, commercial negotiation, access, and scale; scope berbeda per partner.

**Glossary:**
- **Creator economy:** Ekosistem creator, platform, partner, monetization, and brand.
- **MCN:** Multi-Channel Network/creator management organization.
- **Ambassador:** Creator/talent dengan hubungan partnership jangka lebih panjang.
- **Partnership model:** Bentuk komersial/operasional kerja sama creator.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH02 — KOL, KOC, Nano, Micro, Macro & Mega Creator

**Competency ID(s):** T14-C02

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** KOL dan KOC adalah pendekatan yang sering dipakai di Indonesia, tetapi keduanya bukan kategori global yang selalu distandarkan. KOL lebih sering dipilih karena expertise/authority/visibility; KOC lebih dekat dengan peer recommendation dan pengalaman pengguna. Nano/micro/macro/mega tiers hanya shortcut; audience relevance, trust, content niche, and quality lebih penting daripada follower threshold semata.

**Simulated example:** SIMULATED — kategori skincare membutuhkan edukasi bahan aktif. Pharmacist creator dapat memberi expertise; micro KOC dapat memberi pengalaman pemakaian sehari-hari. Dua role saling melengkapi, bukan saling menggantikan.

**Technical depth / workflow:**
- <b>Define creator role.</b> Tentukan authority, peer proof, reach, demonstration, content skill, or conversion role.
- <b>Segment by tier/niche.</b> Catat audience size, geo, topic, language, and audience composition.
- <b>Choose portfolio mix.</b> Seimbangkan creator tier, niche, audience overlap, content formats, and budget.
- <b>Disclose clearly.</b> Terapkan advertising disclosure and platform/regulatory requirements.

**Practice / deliverable:** Buat KOL/KOC creator matrix berisi 20 creators synthetic/example: tier, niche, audience geo, trust signal, content format, objective fit, rate range assumption, disclosure, and recommended role.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda KOL dan KOC secara praktis?
   **Expected answer in guide (not independently approved):** KOL biasanya dipilih untuk expertise/authority; KOC untuk peer experience/recommendation, tetapi batasnya tidak selalu formal.
2. **Q:** Mengapa tier berdasarkan followers tidak cukup?
   **Expected answer in guide (not independently approved):** Followers tidak menunjukkan audience fit, authenticity, influence, engagement quality, or content capability.
3. **Q:** Apa kewajiban disclosure?
   **Expected answer in guide (not independently approved):** Audience harus memahami hubungan komersial/paid/gifted sesuai hukum, platform policies, and contract.

**Glossary:**
- **KOL:** Key Opinion Leader; creator/expert dengan authority pada area.
- **KOC:** Key Opinion Consumer; peer/user recommendation orientation.
- **Nano/Micro/Macro:** Kategori ukuran creator yang batasnya dapat berbeda.
- **Disclosure:** Pemberitahuan transparan tentang hubungan komersial.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH03 — Creator Discovery & Audience Research

**Competency ID(s):** T14-C03

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** Creator discovery menggunakan criteria yang dapat direplikasi: category fit, audience demographics/geography, engagement quality, content quality, brand safety, previous sponsorship, follower growth anomalies, and commercial availability. Discovery sources dapat berupa platform search, creator marketplace, agency roster, social listening, and referrals. Shortlist tidak boleh hanya berdasarkan popularitas; semua claims tentang audience harus diverifikasi dengan available analytics atau media kit.

**Simulated example:** SIMULATED — 50 creator candidates ditemukan; 10 punya audience overlap tinggi, lima memiliki fake engagement signals, dan tiga punya competitor exclusivity. Discovery matrix memisahkan eligibility dari creative fit.

**Technical depth / workflow:**
- <b>Define criteria.</b> Buat must-have and nice-to-have filters sesuai objective.
- <b>Search systematically.</b> Gunakan platform/marketplace, hashtags, competitor mentions, and creator network.
- <b>Build shortlist.</b> Catat profile, audience, content, geo, brand history, rate source, contact, and fit score.
- <b>Validate with creator/agency.</b> Minta media kit, insights proof, availability, exclusivity, and current terms.

**Practice / deliverable:** Buat discovery workbook 30 candidates dan shortlist lima: criteria, source, profile, audience evidence, content fit, conflicts, outreach status, and recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa discovery perlu source trail?
   **Expected answer in guide (not independently approved):** Memudahkan recheck creator data, contact, rates, availability, and changes sebelum kontrak.
2. **Q:** Apa beda fit score dan performance guarantee?
   **Expected answer in guide (not independently approved):** Fit score adalah penilaian awal; tidak menjamin campaign outcomes.
3. **Q:** Apa yang harus dikonfirmasi sebelum shortlist final?
   **Expected answer in guide (not independently approved):** Audience evidence, availability, fee, usage rights, exclusivity, policy issues, and deliverables.

**Glossary:**
- **Creator discovery:** Proses menemukan talent yang sesuai objective.
- **Media kit:** Dokumen creator tentang audience, reach, formats, rates, and past work.
- **Audience overlap:** Kesamaan audience antar creators/platforms.
- **Conflict check:** Pemeriksaan competitor category, exclusivity, and brand suitability.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH04 — Creator Vetting, Audience Fit & Fraud Screening

**Competency ID(s):** T14-C03

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** Creator vetting memeriksa authentic audience, engagement quality, content credibility, brand safety, previous sponsorship, follower growth anomalies, and category fit. Fraud indicators bukan bukti final; sudden spikes, generic comments, bot-like profiles, engagement pods, and inconsistent geo perlu investigasi. Gunakan third-party tools sebagai signal, bukan verdict tunggal. Simpan evidence dan decision rationale.

**Simulated example:** SIMULATED — creator memiliki ER tinggi tetapi comments berulang, geo mismatch, and follower spike dari giveaway. Vetter harus meminta native insights, recent audience breakdown, and campaign-specific proof before approval.

**Technical depth / workflow:**
- <b>Audit audience.</b> Cek geography, age, interests, followers trend, and platform analytics where available.
- <b>Review engagement.</b> Baca comment quality, saves/shares, engagement consistency, and suspicious patterns.
- <b>Assess content/brand safety.</b> Review recent posts, claims, disclosure, controversies, and competitor conflicts.
- <b>Record confidence.</b> Catat evidence, tool limits, flags, follow-up questions, and approval status.

**Practice / deliverable:** Buat creator vetting scorecard untuk lima candidates dengan audience fit, ER context, quality, fake signal checks, brand safety, history, and accept/reject/risk decision.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apakah suspicious follower growth pasti fraud?
   **Expected answer in guide (not independently approved):** Tidak. Bisa dipengaruhi viral content, media coverage, or platform events; perlu triangulasi.
2. **Q:** Mengapa engagement rate saja tidak cukup?
   **Expected answer in guide (not independently approved):** Comments dapat fake/low quality, audience tidak relevan, and platform metrics differ by format.
3. **Q:** Apa bukti vetting yang harus disimpan?
   **Expected answer in guide (not independently approved):** Dated screenshots/exports, media kit, risk flags, creator response, source links, and approval rationale.

**Glossary:**
- **Engagement quality:** Kualitas interaksi, bukan hanya jumlah likes/comments.
- **Audience authenticity:** Keaslian/validitas audience signals.
- **Fraud screening:** Pemeriksaan pola/indikator engagement atau audience tidak valid.
- **Brand suitability:** Kesesuaian creator/content dengan nilai dan toleransi brand.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH05 — Influencer Strategy & Campaign Planning

**Competency ID(s):** T14-C04, T14-C05

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** Influencer strategy menerjemahkan objective menjadi creator roles, tier mix, campaign concept, timeline, budget, and KPI. Campaign brief perlu menjelaskan audience, insight, message, content role, deliverables, creative freedom, mandatories, CTA, disclosure, and usage rights. Creator plan harus memperhitungkan audience overlap, product availability, seasonality, production capacity, and cross-channel amplification.

**Simulated example:** SIMULATED — campaign launch memakai 2 authority creators untuk education, 8 micro creators untuk social proof, and 30 KOCs untuk trial stories. Tujuan dan KPI berbeda per tier, bukan seluruhnya dinilai dari reach.

**Technical depth / workflow:**
- <b>Map objective-to-creator role.</b> Tentukan awareness/education/proof/content asset/conversion needs.
- <b>Build tier and budget mix.</b> Hitung fee, production, seeding, usage rights, amplification, agency, and contingencies.
- <b>Set campaign architecture.</b> Timeline, wave, deliverables, platform, CTA, and reporting.
- <b>Set KPI and guardrails.</b> Reach/quality, views/retention, engagement, qualified traffic, conversion, disclosure, and brand safety.

**Practice / deliverable:** Buat creator campaign plan 4 minggu: creator tier mix, shortlists, budget, message, timeline, deliverables, KPI, rights, disclosure, and amplification. Buat base/conservative scenarios.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa KPI harus berbeda per creator role?
   **Expected answer in guide (not independently approved):** Authority/education, reach, UGC, and affiliate conversion memiliki tugas dan outcome berbeda.
2. **Q:** Apa risiko audience overlap tinggi?
   **Expected answer in guide (not independently approved):** Incremental reach dapat turun dan biaya menjangkau orang yang sama menjadi tinggi.
3. **Q:** Apa yang harus masuk budget creator?
   **Expected answer in guide (not independently approved):** Talent fee, production, seeding, shipping, usage rights, exclusivity, amplification, measurement, tax, and contingency.

**Glossary:**
- **Creator mix:** Kombinasi tier/roles creator.
- **Deliverable:** Output kerja yang wajib diserahkan.
- **Usage rights:** Izin penggunaan/whitelisting selama scope/durasi tertentu.
- **Amplification:** Paid/partner distribution tambahan dari asset creator.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH06 — KOL Briefing, Storyline & Content Approval

**Competency ID(s):** T14-C02, T14-C04

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** KOL brief harus memberi strategic direction tetapi tidak membunuh creator authenticity. Brief memuat campaign context, audience, product truth, key message, proof, do/don't, story role, platform/format, deliverables, CTA, disclosure, mandatory, and approval. Storyline harus menunjukkan pengalaman atau explanation yang believable. Approval flow membutuhkan SLA dan batas revisi agar creator autonomy dan brand safety seimbang.

**Simulated example:** SIMULATED — brief meminta creator mengatakan 'nomor satu paling aman' tanpa evidence. Creator tidak boleh dipaksa membuat unsupported claim; ganti dengan demonstrasi faktual atau approved proof.

**Technical depth / workflow:**
- <b>Brief the why.</b> Jelaskan audience, problem, objective, proposition, and creator role.
- <b>Define guardrails.</b> Product facts, prohibited claims, disclosure, legal wording, mandatory assets, and safety.
- <b>Co-create storyline.</b> Set hook, scenes, proof, CTA, and creator-native execution.
- <b>Manage approval.</b> Draft/review/revise/final, SLA, version, and publication confirmation.

**Practice / deliverable:** Buat creator brief, storyline outline, key-message/proof matrix, do/don't, disclosure copy, approval workflow, and feedback template for one campaign.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa risiko brief terlalu preskriptif?
   **Expected answer in guide (not independently approved):** Konten kehilangan naturalness/creator voice, dan audience dapat melihatnya sebagai iklan yang tidak autentik.
2. **Q:** Apa risiko brief terlalu bebas?
   **Expected answer in guide (not independently approved):** Pesan/claim dapat melenceng, mandatories terlewat, atau brand safety/contract issue muncul.
3. **Q:** Bagaimana approval SLA membantu?
   **Expected answer in guide (not independently approved):** Creator dan brand mengetahui timeline review, jumlah revisi, final asset, and publishing lock.

**Glossary:**
- **Creator brief:** Arahan campaign dan deliverables bagi creator.
- **Storyline:** Urutan narasi/scene yang menyampaikan message.
- **Mandatory:** Elemen wajib termasuk claim, tag, CTA, and disclosure.
- **Approval SLA:** Batas waktu review/feedback.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH07 — Negotiation, Rate, Contract & Usage Rights

**Competency ID(s):** T14-C05

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** Negotiation dan contract mengikat scope, fee, deliverables, payment terms, usage rights, exclusivity, whitelisting, revisions, cancellations, disclosure, performance claims, IP, confidentiality, and remedies. Creator fee tidak otomatis mencakup perpetual paid usage. Buyer harus memisahkan organic posting license, paid amplification, raw footage, cutdowns, edit, territory, channels, and duration.

**Simulated example:** SIMULATED — fee Rp15 juta mencakup satu video organic post selama 30 hari, tetapi brand mengasumsikan hak memakai video di ads selama 12 bulan. Perlu addendum usage rights dan negotiated fee.

**Technical depth / workflow:**
- <b>Normalize rate.</b> Bandingkan format, length, platform, follower/engagement context, production, and deliverables.
- <b>Negotiate scope.</b> Tetapkan revisions, deadline, payment, cancellation, and KPI reporting.
- <b>License rights.</b> Catat channel, territory, duration, paid/organic, edits, raw files, likeness, music, and exclusivity.
- <b>Contract and approval.</b> Escalate legal terms, sign, archive, and schedule renewal/expiry alerts.

**Practice / deliverable:** Buat creator deal sheet dan contract checklist dengan rate, deliverables, revisions, usage rights, paid whitelisting, exclusivity, disclosure, cancel, payment, and expiry fields.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda organic posting rights dan paid usage rights?
   **Expected answer in guide (not independently approved):** Izin posting pada channel creator berbeda dari izin brand menggunakannya pada paid ads/other channels.
2. **Q:** Mengapa raw footage harus disebutkan?
   **Expected answer in guide (not independently approved):** Raw files memiliki nilai/IP scope berbeda; edit, storage, access, and reuse perlu persetujuan.
3. **Q:** Apa yang dilakukan bila creator meminta exclusivity luas?
   **Expected answer in guide (not independently approved):** Nilai business impact, category definition, duration, competitors, and compensation; negotiate narrower scope.

**Glossary:**
- **Usage rights:** Izin penggunaan content/persona pada channel/periode tertentu.
- **Exclusivity:** Pembatasan kerja sama dengan competitor/category.
- **Whitelisting:** Authorization menjalankan ads melalui creator/partner identity.
- **Deliverable schedule:** Jadwal output, review, and publication.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH08 — Product Seeding, Barter & Creator Relationship

**Competency ID(s):** T14-C05

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** Seeding dan barter membangun trial/relationship tetapi bukan gratis: product cost, packaging, shipping, staff time, and content rights tetap ada. Seeding harus punya target, reason, opt-in, logistics, brief, and post-send follow-up. Barter harus menyebut deliverables atau menyatakan tidak ada guarantee. Relationship management meliputi CRM creator, communication, feedback, payment, and long-term trust.

**Simulated example:** SIMULATED — 100 products dikirim tanpa creator selection/permission. Hasil content rendah dan biaya shipping terbuang. Pilot seeding yang lebih tepat memilih audience/fit, memperoleh consent to receive product, and sets expectation honestly.

**Technical depth / workflow:**
- <b>Define seeding objective.</b> Trial, review, content asset, feedback, relationship, or event invite.
- <b>Select and consent.</b> Vet audience fit, confirm address/permission, and clarify no-guarantee vs deliverables.
- <b>Manage logistics.</b> Track SKU, package, dispatch, delivery, product safety, and contact owner.
- <b>Maintain relationship.</b> Follow up respectfully, log content/feedback, rights, and next collaboration.

**Practice / deliverable:** Buat seeding program plan 30 creators: selection criteria, opt-in, product allocation, logistics tracker, expected/non-guaranteed outputs, feedback form, and cost model.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apakah gifting otomatis mewajibkan posting?
   **Expected answer in guide (not independently approved):** Tidak kecuali ada agreement yang jelas; gifting dan paid deliverables harus dibedakan.
2. **Q:** Mengapa opt-in penting?
   **Expected answer in guide (not independently approved):** Creator harus menyetujui penerimaan produk dan memahami campaign terms/expectations.
3. **Q:** Apa biaya seeding selain produk?
   **Expected answer in guide (not independently approved):** Packing, shipping, taxes, handling, staff hours, follow-up, and content usage/rights if negotiated.

**Glossary:**
- **Seeding:** Pengiriman produk kepada creator untuk trial/relationship.
- **Barter:** Pertukaran produk/jasa dengan deliverables sesuai perjanjian.
- **Opt-in:** Persetujuan pihak untuk mengikuti aktivitas.
- **Creator CRM:** Catatan hubungan, preferences, performance, rights, and history creator.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH09 — Campaign Execution & Content Delivery

**Competency ID(s):** T14-C06

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** Campaign execution mengatur production, deadlines, asset collection, quality review, disclosure, platform settings, link/tag, publishing, and proof. Deliverable acceptance harus didasarkan pada contract/brief, bukan selera internal setelah tayang. Tanggal post, URL, screenshot, view/engagement snapshots, and invoice status perlu dicatat. Crisis/negative feedback harus memiliki escalation protocol.

**Simulated example:** SIMULATED — creator publish video dengan wrong product link dan disclosure tertinggal. Team perlu detect cepat, request correction, preserve evidence, and document whether paid boosting should pause.

**Technical depth / workflow:**
- <b>Run production calendar.</b> Monitor draft, shoot, review, revisions, final export, and publishing deadline.
- <b>QA content.</b> Cek claim, product, disclosure, audio/music rights, brand safety, CTA, link, and specs.
- <b>Confirm publishing.</b> Record URL, timestamp, asset version, platform, and screenshot.
- <b>Manage issues.</b> Set incident severity, escalation, correction/takedown, and stakeholder update.

**Practice / deliverable:** Buat execution tracker untuk 10 creator posts: status, owner, due date, asset version, approval, disclosure, URL, proof, corrections, invoice, and final acceptance.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa yang dilakukan jika creator telat publish?
   **Expected answer in guide (not independently approved):** Ikuti contract/deadline clause, assess campaign impact, notify owner, and agree corrective path.
2. **Q:** Mengapa screenshot alone tidak cukup untuk proof?
   **Expected answer in guide (not independently approved):** Perlu URL, timestamp, platform, asset version, and relevant insight exports/permissions.
3. **Q:** Apa yang harus ditangani segera setelah salah link?
   **Expected answer in guide (not independently approved):** Pause amplification, correct destination, notify creator/brand, record impact, and verify link/tracking.

**Glossary:**
- **Content delivery:** Penyerahan aset sesuai brief dan contract.
- **Proof of publication:** Bukti asset tayang pada platform dan waktu tertentu.
- **Incident escalation:** Proses menaikkan issue ke owner/tim keputusan.
- **Acceptance criteria:** Kriteria formal untuk menerima deliverable.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH10 — Paid Amplification & Partnership Ads

**Competency ID(s):** T14-C06

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** Paid amplification dan Partnership Ads memakai creator identity/content untuk distribution berbayar. Boosting dari brand page berbeda dari partnership ad/whitelisting. Campaign setup perlu account permission, post authorization, ad disclosure, creative rights, targeting, budget, tracking, and expiry. Organic creator performance dan paid amplified performance harus dilaporkan terpisah sebelum digabung ke total campaign view.

**Simulated example:** SIMULATED — post creator memiliki organic engagement baik tetapi partnership ad ditolak karena authorization expiry dan missing permission. Paid rights/access harus dipastikan sebelum media schedule.

**Technical depth / workflow:**
- <b>Confirm permission.</b> Cek creator/brand account, authorized post, ad account, duration, and revocation.
- <b>Prepare paid setup.</b> Tentukan objective, audience, placements, budget, destination, tracking, and creative edits.
- <b>Monitor separately.</b> Pisahkan organic metrics dari paid reach/spend/conversion.
- <b>Check rights and policy.</b> Validate music, captions, disclosures, usage duration, and account permissions.

**Practice / deliverable:** Buat partnership ads checklist dan paid amplification plan untuk dua creator assets. Sertakan permissions, rights, objective, budget, tracking, organic/paid reporting, and expiry alerts.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda boost dan partnership ad?
   **Expected answer in guide (not independently approved):** Boost dapat menggunakan post melalui brand/account flow; partnership ads menjalankan iklan dengan creator partnership identity/authorization sesuai platform.
2. **Q:** Mengapa organic and paid metrics harus dipisah?
   **Expected answer in guide (not independently approved):** Paid spend mengubah reach/audience/delivery dan mengaburkan evaluasi organic content.
3. **Q:** Apa risiko permission expiry?
   **Expected answer in guide (not independently approved):** Ads dapat berhenti/reject dan penggunaan identity/content dapat melanggar agreement.

**Glossary:**
- **Partnership Ads:** Format iklan yang menggunakan creator/partner identity dengan permission.
- **Whitelisting:** Authorization menjalankan ads melalui creator/partner identity.
- **Amplification:** Distribusi tambahan melalui paid media.
- **Authorization expiry:** Batas waktu permission untuk akses/advertising.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH11 — Influencer Measurement & Reporting

**Competency ID(s):** T14-C07

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** Influencer measurement harus mencocokkan KPI dengan creator role: awareness (reach/unique, view quality), engagement (saves/shares/comments), content quality, traffic, lead/sales, and advocacy. Attribution dipengaruhi codes/links, platform windows, view-through, and overlap. Cost metrics seperti CPM/CPE/CPV perlu denominator dan format yang sesuai. ROI harus mempertimbangkan fee, production, rights, seeding, amplification, discounts, and margin.

**Simulated example:** SIMULATED — campaign report mencatat 5 juta views, tetapi 80% dari paid amplification dan sedikit qualified visits. Executive tidak boleh mengklaim creator organic reach mencapai 5 juta; report perlu memisahkan sources dan downstream outcomes.

**Technical depth / workflow:**
- <b>Define role-based KPIs.</b> Tetapkan metrics untuk reach, attention, trust, traffic, conversion, or content asset value.
- <b>Tag creator activity.</b> Gunakan UTM, codes, content IDs, platform reports, and campaign windows.
- <b>Reconcile cost.</b> Masukkan fees, production, seeding, rights, media, discount, and net revenue/margin.
- <b>Interpret carefully.</b> Pisahkan correlation/attribution/assisted role dan jelaskan incrementality limitations.

**Practice / deliverable:** Buat influencer dashboard/memo untuk 10 creator: fee, organic/paid reach, views/retention, engagement quality, clicks, conversions, cost metrics, margin assumptions, and recommendations.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa total views tidak boleh diklaim seluruhnya organic?
   **Expected answer in guide (not independently approved):** Views dapat berasal dari paid amplification; sumber delivery harus dipisah.
2. **Q:** Apa risiko discount code sebagai attribution tunggal?
   **Expected answer in guide (not independently approved):** Pembelian dapat terjadi tanpa code atau code dibagikan; code usage tidak menunjukkan keseluruhan causal impact.
3. **Q:** Apa yang harus masuk ROI?
   **Expected answer in guide (not independently approved):** Talent fee, production, seeding, usage rights, paid media, discounts, sales margin, and measurement costs.

**Glossary:**
- **CPM:** Cost per thousand impressions.
- **CPE:** Cost per engagement menurut definisi action.
- **CPV:** Cost per view sesuai platform/view threshold.
- **Influencer attribution:** Credit/measurement atas outcome terkait creator touchpoints.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH12 — Creator Partnerships Capstone

**Competency ID(s):** T14-C07

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | A: Influencer Manager / Influencer Marketing Lead / Manager Influencer Marketing, Dentsu employer-hosted Workday JDs (London, Lisbon, New York); creator sourcing, influencer relationships, briefs, contracts, campaign delivery, budgets, compliance and measurement. Direct role-family evidence; preserve market/seniority. | G: direct role JD not located in this batch

**Learning objective / concept:** Creator Partnerships Capstone menunjukkan proses lengkap dari discovery hingga measurement dan relationship management. Portfolio harus mencakup strategy, creator matrix, vetting evidence, brief, deal/rights, seeding/production, execution tracker, partnership ads, reporting, and post-campaign review. Semua creator examples dan results yang bukan campaign aktual diberi label SIMULATED; no invented endorsements.

**Simulated example:** SIMULATED — brand consumer menyiapkan creator launch wave dengan authority/KOL, micro creators, and KOC seeding. Capstone menguji objective fit, rights, production, disclosure, amplification, and commercial reporting.

**Technical depth / workflow:**
- <b>Plan program.</b> Set audience, objectives, creator roles, tier mix, budget, timeline, and KPIs.
- <b>Recruit and contract.</b> Vet, shortlist, negotiate, license, and onboard creators.
- <b>Execute and amplify.</b> Deliver assets, QA, publish, track, and activate paid rights.
- <b>Measure and retain.</b> Reconcile results/cost, document learning, and update creator relationship database.

**Practice / deliverable:** Bangun capstone pack: creator strategy, 20-name shortlist, vetting scorecard, budget, creative brief, contract/rights matrix, seeding/production tracker, partnership ads plan, performance dashboard, and executive recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa bukti capstone siap portfolio?
   **Expected answer in guide (not independently approved):** Artifacts from strategy through contracting, execution, tracking, reporting, and clear disclosure of synthetic assumptions.
2. **Q:** Bagaimana membuktikan creator selection berbasis data?
   **Expected answer in guide (not independently approved):** Sertakan audience evidence, content sample, fit score, risk review, rate rationale, and alternatives.
3. **Q:** Apa yang membedakan campaign report dari relationship review?
   **Expected answer in guide (not independently approved):** Campaign report menilai output/outcome; relationship review menilai reliability, collaboration, rights, quality, and future fit.

**Glossary:**
- **Creator partnership capstone:** Kasus end-to-end discovery, deal, execution, and measurement.
- **Rights matrix:** Ringkasan channel/territory/duration/license scope.
- **Creator scorecard:** Perbandingan creator berdasarkan objective fit and quality.
- **Partnership review:** Evaluasi hasil dan kualitas hubungan creator.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 15. Affiliate & Social Commerce Partnerships (`affiliate`)

### DPA-T15-CH01 — Affiliate Marketing Ecosystem

**Competency ID(s):** T15-C01

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Affiliate marketing membayar partner berdasarkan action/conversion yang ditetapkan. Ecosystem dapat melibatkan advertiser, affiliate network/platform, publisher, creator affiliate, sub-network, tracking provider, and finance. Performance terms harus menjelaskan eligible action, attribution window, commission basis, validation, reversal, fraud, payout, and margin. Affiliate bukan sinonim influencer; creator dapat berperan sebagai affiliate bila commercial model menekankan tracked sale/commission.

**Simulated example:** SIMULATED — publisher coupon menghasilkan banyak attributed orders, tetapi sebagian menggunakan voucher yang akan dipakai customer existing. Program harus membedakan incremental acquisition, existing demand capture, attribution leakage, and commission economics.

**Technical depth / workflow:**
- <b>Map participants.</b> Catat advertiser, affiliate platform/network, publisher/creator, tracking, and finance.
- <b>Define conversion.</b> Tetapkan eligible order/lead, validation, attribution, window, and exclusions.
- <b>Set commercial model.</b> Pilih CPS/CPA/CPL/hybrid dengan margin and payout guardrails.
- <b>Govern program.</b> Tetapkan partner policies, disclosure, fraud controls, and payment reconciliation.

**Practice / deliverable:** Buat affiliate ecosystem and program brief untuk brand: partner types, conversion definition, tracking flow, attribution window, commission model, fraud rules, and payout governance.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda affiliate dengan influencer marketing?
   **Expected answer in guide (not independently approved):** Influencer sering dibayar untuk reach/content/engagement; affiliate dibayar menurut tracked action/sales sesuai contract.
2. **Q:** Mengapa conversion definition harus jelas?
   **Expected answer in guide (not independently approved):** Menentukan apakah order/lead eligible, kapan divalidasi, kapan komisi reversal, and kapan dibayar.
3. **Q:** Apa risiko coupon attribution?
   **Expected answer in guide (not independently approved):** Code leakage, last-click capture, cannibalization, and existing-customer credit dapat membayar komisi untuk sale non-incremental.

**Glossary:**
- **Advertiser:** Pihak brand yang membiayai program affiliate.
- **Publisher:** Partner yang mempromosikan offer melalui media/content.
- **CPS:** Cost per Sale commission model.
- **Eligible conversion:** Action yang memenuhi contract/program rules.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH02 — Affiliate Network, Publisher & Creator Affiliate

**Competency ID(s):** T15-C01

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Publisher and creator affiliate memiliki model traffic and content berbeda. Publisher dapat berupa content/review, comparison, coupon, cashback, loyalty, search arbitrage, and sub-network. Creator affiliate memakai short video/live/showcase, product link, or platform-native commission. Recruitment harus menilai audience fit, traffic source, content method, disclosure, conversion quality, and policy risk.

**Simulated example:** SIMULATED — cashback publisher mendorong last-click conversions tetapi profit rendah; niche content publisher memberi conversion lebih sedikit dengan new-to-brand share lebih tinggi. Mix harus dinilai berdasarkan contribution and incrementality.

**Technical depth / workflow:**
- <b>Classify partner type.</b> Kelompokkan content, coupon, cashback, loyalty, creator, media buyer, and sub-network.
- <b>Validate traffic.</b> Tanyakan source, placement, promotion methods, geo, audience, and incentive use.
- <b>Set partner terms.</b> Tentukan allowed tactics, search bidding rules, brand terms, disclosure, and prohibited methods.
- <b>Track quality.</b> Monitor new-to-brand, returns, order value, cancellation, and commission exposure.

**Practice / deliverable:** Buat publisher classification and recruitment matrix: partner type, audience/source, allowed method, risk, traffic quality evidence, commission fit, and onboarding need.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa partner type penting?
   **Expected answer in guide (not independently approved):** Each type has different traffic, attribution, fraud, audience, and commission behavior.
2. **Q:** Apa risiko sub-network yang tidak transparan?
   **Expected answer in guide (not independently approved):** Traffic source and downstream publishers sulit diaudit; fraud or policy violations may be hidden.
3. **Q:** Bagaimana membedakan creator affiliate dari paid creator?
   **Expected answer in guide (not independently approved):** Creator affiliate earns commission per tracked action; paid creator receives fee for content/reach, or may combine both under separate terms.

**Glossary:**
- **Coupon publisher:** Partner yang mempromosikan voucher/discount codes.
- **Cashback publisher:** Partner yang memberi reward kepada pembeli.
- **Sub-network:** Network yang menyalurkan traffic lewat publisher lain.
- **Creator affiliate:** Creator yang menerima komisi atas tracked conversions.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH03 — Partner Discovery & Recruitment

**Competency ID(s):** T15-C02

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Partner discovery and recruitment harus memiliki ideal partner profile, category fit, reach/source quality, content standards, commercial expectations, and compliance checks. Outreach menjelaskan value proposition untuk partner, tracking, support, payment, asset, and exclusivity. Recruitment bukan mengejar jumlah partner; active/productive partner ratio dan incremental contribution lebih relevan.

**Simulated example:** SIMULATED — program onboard 500 publishers tetapi hanya 20 aktif dan beberapa melanggar brand terms. Lebih baik merekrut 50 partners yang relevan dengan onboarding, support, and quality controls.

**Technical depth / workflow:**
- <b>Define partner ICP.</b> Tetapkan category, traffic, geo, audience, content type, and allowed promotion.
- <b>Research and prioritize.</b> Cari partner dari network/creator/content ecosystem dan score fit/risk.
- <b>Outreach and onboard.</b> Jelaskan offer, commission, tracking, payout, assets, disclosure, and support.
- <b>Activate partners.</b> Beri first campaign, monitor first conversions, and review quality before scaling.

**Practice / deliverable:** Buat recruitment pipeline untuk 30 partner prospects: source, type, audience, reach, fit, risks, contact, status, onboarding requirements, and activation target.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda partner recruited dan partner activated?
   **Expected answer in guide (not independently approved):** Recruited sudah join; activated telah mempromosikan offer/menjalankan campaign dengan eligible activity.
2. **Q:** Mengapa first-conversion review penting?
   **Expected answer in guide (not independently approved):** Membantu mendeteksi poor traffic/fraud atau setup errors sebelum partner mendapat scale.
3. **Q:** Apa yang perlu ada di partner kit?
   **Expected answer in guide (not independently approved):** Offer, product feed/assets, tracking links, commission terms, rules, disclosure, contact, and troubleshooting.

**Glossary:**
- **Partner ICP:** Ideal Partner Profile untuk program.
- **Activation:** Partner mulai menghasilkan aktivitas/conversions.
- **Partner kit:** Asset dan informasi operasional untuk publisher.
- **Partner pipeline:** Tahapan sourcing hingga productive partnership.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH04 — Commercial Model, Commission & Incentives

**Competency ID(s):** T15-C03

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Commission models meliputi CPS, CPA, CPL, hybrid, tiered, fixed fee, bonus, and performance incentives. Commission harus diuji terhadap gross margin, discount, returns, tax, fulfilment, marketplace fees, and existing customer behavior. Tiered incentives dapat meningkatkan volume tetapi mendorong low-quality conversions. Payout terms, validation, reversal, cap, and effective dates harus tercatat.

**Simulated example:** SIMULATED — produk memiliki contribution margin 25%. Commission 20% dari gross sales ditambah voucher 10% dapat membuat contribution negative setelah fees/returns. Program harus menghitung allowable commission berdasarkan eligible net value.

**Technical depth / workflow:**
- <b>Define commission basis.</b> Gross/net sales, pre/post discount, shipped/paid order, and refund policy.
- <b>Model unit economics.</b> Hitung product margin, fulfillment, payment/platform fee, discount, commission, and contribution.
- <b>Design incentives.</b> Set tier thresholds, quality gates, cap, bonus period, and eligible action.
- <b>Document payout rules.</b> Validation, reversal, tax, payment cycle, currency, and dispute process.

**Practice / deliverable:** Buat commission calculator untuk CPS/CPA/hybrid dengan sensitivity: AOV, margin, discount, refund, fee, commission, and allowable acquisition cost. Labeli assumptions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa komisi tidak sebaiknya berdasarkan gross sales tanpa caveat?
   **Expected answer in guide (not independently approved):** Discount, cancellations, returns, taxes, and fees dapat mengurangi net value; gross basis dapat membuat program rugi.
2. **Q:** Apa fungsi reversal/clawback?
   **Expected answer in guide (not independently approved):** Menarik kembali atau membatalkan commission untuk invalid, cancelled, returned, or non-eligible conversions.
3. **Q:** Bagaimana tiered incentive dapat menimbulkan risiko?
   **Expected answer in guide (not independently approved):** Partner bisa mengejar volume dengan low-quality/fraud traffic saat bonus threshold mendekat.

**Glossary:**
- **CPS:** Commission per sale.
- **CPA:** Cost/commission per defined action.
- **Hybrid commission:** Kombinasi fixed/variable/performance payment.
- **Clawback:** Pengembalian commission untuk conversion yang tidak eligible.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH05 — Affiliate Platform & Product Feed

**Competency ID(s):** T15-C04

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Affiliate platforms, product feeds, and tracking tools menghubungkan offer, SKU, deep links, attribution, publisher IDs, coupon codes, and conversion records. Product feeds membutuhkan title, price, availability, image, link, category, and update schedule. Deep links harus membuka product/app target dengan tracking intact. Platform access and available products differ by marketplace, country, seller, and program status; always verify current provider documentation.

**Simulated example:** SIMULATED — product feed masih menampilkan harga lama dan SKU out of stock. Affiliate content tetap mengirim traffic ke item tidak tersedia; feed sync and stock suppression perlu diaktifkan.

**Technical depth / workflow:**
- <b>Inspect feed schema.</b> Validate IDs, titles, images, price, stock, category, URL, and update frequency.
- <b>Configure tracking.</b> Set publisher ID, sub-ID, click ID, deep links, coupons, conversion event, and consent.
- <b>Test end-to-end.</b> Click link, open destination, verify parameters, purchase/lead, and postback/report record.
- <b>Monitor feed health.</b> Track rejected products, stale price, stock-out, broken URL, and mapping errors.

**Practice / deliverable:** Buat product feed data dictionary, deep-link/tracking map, and QA cases for five SKUs. Verify price, availability, image, destination, IDs, publisher attribution, and update cadence.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa risiko stale product feed?
   **Expected answer in guide (not independently approved):** Advertiser/partner promote wrong price or unavailable product, damaging conversion and trust.
2. **Q:** Apa fungsi sub-ID?
   **Expected answer in guide (not independently approved):** Membantu memisahkan publisher placement/campaign/creator source dalam attribution/reporting.
3. **Q:** Mengapa deep link perlu test di app dan web?
   **Expected answer in guide (not independently approved):** User journey and tracking may break across device/app install/redirect conditions.

**Glossary:**
- **Product feed:** File/API data produk untuk platform/publisher.
- **Deep link:** URL yang membuka halaman/app/product spesifik.
- **Sub-ID:** Parameter untuk membedakan placement/source dalam partner tracking.
- **Postback:** Server notification tentang conversion ke tracking platform.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH06 — Tracking Links, Attribution & Conversion

**Competency ID(s):** T15-C04

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Tracking links and attribution menentukan bagaimana click dan conversions dipasangkan dengan publisher. Cookie loss, cross-device, browser restrictions, app/web, redirects, coupon leakage, last-click overwrites, and attribution windows dapat mengubah credit. Affiliate analyst harus memahami click ID, sub-ID, conversion IDs, dedupe, view/click rules, validation, and source of truth. Jangan menganggap attribution credit berarti incremental sale.

**Simulated example:** SIMULATED — user click creator affiliate link, kemudian mencari brand di Google dan membeli. Last-click search dapat mengambil credit; network rules menentukan affiliate credit. Analysis perlu memahami overwrite rules and assisted role.

**Technical depth / workflow:**
- <b>Map tracking flow.</b> Dari click ID/publisher ID menuju redirect, landing, event, validation, and postback.
- <b>Define attribution.</b> Tetapkan click/view rules, window, last-click/priority, coupons, and cross-device limitations.
- <b>Prevent duplicates.</b> Gunakan order ID/conversion ID, deduplication, and reversal rules.
- <b>Reconcile sources.</b> Bandingkan network, marketplace, CRM, and finance records.

**Practice / deliverable:** Buat affiliate attribution flow diagram dan reconciliation workbook: click IDs, sub-IDs, conversion IDs, window, coupon rules, dedupe, cross-device caveats, and sales source.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda attributed sale dan incremental sale?
   **Expected answer in guide (not independently approved):** Attributed sale mendapat credit menurut tracking rule; incremental sale adalah tambahan yang tidak akan terjadi tanpa treatment.
2. **Q:** Apa yang terjadi bila conversion ID tidak unik?
   **Expected answer in guide (not independently approved):** Satu order dapat tercatat berulang atau gagal dideduplikasi.
3. **Q:** Mengapa cookie loss harus dicatat?
   **Expected answer in guide (not independently approved):** Itu dapat mengurangi match/attribution dan membuat observed partner performance tidak lengkap.

**Glossary:**
- **Click ID:** Identifier click untuk menghubungkan traffic ke conversion.
- **Attribution window:** Batas waktu credit conversion.
- **Last click:** Aturan memberi credit pada touchpoint click terakhir.
- **Cross-device:** Perjalanan user melintasi perangkat.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH07 — Affiliate Campaign Setup

**Competency ID(s):** T15-C04

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Affiliate campaign setup menggabungkan offer, partner groups, commission, creative, feed, landing, tracking, policy, and approval. Campaign structure dapat dipisah menurut SKU/category, geography, partner type, objective, or incentive. Launch checklist harus memastikan product ready, link/UTM/sub-ID valid, discount eligible, commission correct, stock available, and reporting/payout configured.

**Simulated example:** SIMULATED — campaign flash sale mengaktifkan voucher yang tidak berlaku untuk publisher affiliate. Partner mempromosikan harga salah dan order dibatalkan. Offer eligibility and assets must be checked before send.

**Technical depth / workflow:**
- <b>Build campaign brief.</b> Set objectives, products, offer, market, dates, budget/commission, and eligibility.
- <b>Prepare partner assets.</b> Provide banners, copy, product feed, links, coupon, disclosure, and restrictions.
- <b>Configure tracking/commission.</b> Test publisher IDs, conversion rules, caps, and reversals.
- <b>Launch safely.</b> QA stock/price/URL, partner approvals, policy, monitoring, and contact escalation.

**Practice / deliverable:** Buat affiliate launch pack untuk 10 publishers: campaign brief, offer matrix, commission, assets, links, product list, eligibility, disclosure, QA, and launch approval.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa coupon eligibility harus jelas?
   **Expected answer in guide (not independently approved):** Partner dapat menjanjikan discount yang tidak bisa digunakan sehingga returns/cancellations and trust issues naik.
2. **Q:** Apa yang harus dipantau saat launch?
   **Expected answer in guide (not independently approved):** Click, conversion, AOV, stock, orders, cancellations, invalid orders, link errors, and partner policy compliance.
3. **Q:** Apa pentingnya launch approval?
   **Expected answer in guide (not independently approved):** Memastikan product, legal, pricing, finance, tracking, and partner terms disetujui sebelum campaign aktif.

**Glossary:**
- **Offer matrix:** Daftar promo/SKU/eligibility dan terms.
- **Affiliate link:** Tracking URL yang mengidentifikasi partner/campaign.
- **Campaign cap:** Batas budget/commission/conversion yang disetujui.
- **Launch checklist:** Quality gate sebelum program berjalan.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH08 — Creator Affiliate & Social Commerce

**Competency ID(s):** T15-C01

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Creator affiliate/social commerce menggabungkan content, live, short video, product showcase, shopping links, and commission. Creator performance harus dinilai melalui content quality, product demonstration, audience relevance, click/shop conversion, returns, and commission. Platform-native programs memiliki product eligibility, commission rates, content policy, settlement, and attribution rules yang dapat berubah; jangan menjanjikan akses jika seller/creator tidak eligible.

**Simulated example:** SIMULATED — TikTok creator live menghasilkan GMV tinggi tetapi return rate juga tinggi karena product demo misleading. Program perlu quality control, content accuracy, order validation, and commission reversal.

**Technical depth / workflow:**
- <b>Define creator role.</b> Product education, discovery, live demo, review, conversion, or repeat.
- <b>Set commission/content rules.</b> Commission, eligible SKU, disclosure, claims, live rules, and content deliverables.
- <b>Track performance quality.</b> Views, product clicks, add-to-cart, orders, cancellations, returns, and new-to-brand.
- <b>Optimize relationships.</b> Support content, exclusive offers, live schedule, and quality guardrails.

**Practice / deliverable:** Buat social commerce creator program untuk lima SKUs: creator tiers, commission, product feed, live/video brief, claim restrictions, tracking, order quality, returns, and payout conditions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa GMV tidak sama dengan net sales/profit?
   **Expected answer in guide (not independently approved):** GMV dapat mencakup cancellations/returns/discounts and does not subtract product, fulfillment, and commission costs.
2. **Q:** Apa risiko creator claims tidak akurat?
   **Expected answer in guide (not independently approved):** Misleading product promises can cause complaints, returns, policy violations, and brand trust harm.
3. **Q:** Mengapa platform program terms harus dicek ulang?
   **Expected answer in guide (not independently approved):** Eligibility, campaign type, commission, attribution, and settlement rules can change by account/category/market.

**Glossary:**
- **GMV:** Gross Merchandise Value; nilai transaksi sebelum adjustment tertentu.
- **Return rate:** Proporsi order/produk yang dikembalikan.
- **Social commerce:** Transaksi melalui pengalaman sosial/content/live/shop.
- **Creator commission:** Komisi atas eligible creator-attributed action/sale.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH09 — Fraud, Traffic Quality & Compliance

**Competency ID(s):** T15-C05

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Fraud and traffic quality controls melindungi advertiser dari non-human clicks, cookie stuffing, click injection, fake orders, coupon abuse, incentivized traffic violations, and brand bidding violations. Tidak semua spike adalah fraud; detection harus menggunakan pattern, source, timestamps, device, conversion validation, and partner communication. Contract perlu memberi hak audit, suspend, reversal, and clawback.

**Simulated example:** SIMULATED — publisher menghasilkan click spike dengan zero engagement dan conversion timestamp hampir bersamaan. Ini red flag untuk investigation, bukan langsung bukti final; audit log dan source are needed.

**Technical depth / workflow:**
- <b>Define policy.</b> Daftar prohibited methods, eligible sources, disclosure, brand terms, and data restrictions.
- <b>Monitor signals.</b> Periksa click spikes, repeated IP/device, time-to-convert, duplicate orders, coupon leakage, and source mismatch.
- <b>Investigate fairly.</b> Collect evidence, contact partner, compare other sources, and classify confidence.
- <b>Enforce controls.</b> Hold commissions, reverse invalid conversions, suspend, clawback, or reinstate based on evidence/contract.

**Practice / deliverable:** Buat affiliate fraud playbook: risk taxonomy, monitoring alerts, investigation checklist, evidence log, partner communication, reversal/clawback rules, and escalation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apakah click spike otomatis fraud?
   **Expected answer in guide (not independently approved):** Tidak; promotions/events can cause spikes. Use multiple signals and investigation before final decision.
2. **Q:** Apa itu cookie stuffing?
   **Expected answer in guide (not independently approved):** Praktik menyisipkan tracking cookie tanpa valid user click/consent untuk mengambil attribution credit.
3. **Q:** Mengapa fraud policy harus tertulis di contract?
   **Expected answer in guide (not independently approved):** Memberi dasar audit, hold, reversal, suspension, clawback, and dispute resolution.

**Glossary:**
- **Click injection:** Praktik memalsukan/menyisipkan click attribution.
- **Cookie stuffing:** Memasang tracking identifiers tanpa user action yang sah.
- **Invalid conversion:** Order/lead yang tidak memenuhi eligibility/quality rules.
- **Clawback:** Pengambilan kembali commission yang telah dibukukan/dibayar.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH10 — Commission Reconciliation & Reporting

**Competency ID(s):** T15-C03, T15-C05

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Commission reconciliation menghitung eligible sales, cancellations, returns, duplicate orders, attribution rules, commission tiers, tax, payout currency, and invoice. Affiliate platform report tidak selalu sama dengan finance/marketplace due to delay or reversal windows. Reconciliation harus memiliki period, order IDs, partner IDs, rate table version, and approval trace.

**Simulated example:** SIMULATED — network melaporkan 1.000 sales, marketplace confirms 920 shipped orders, and finance 870 net paid after return/cancel. Payout should follow contract's eligible basis, not assume network clicks are final sales.

**Technical depth / workflow:**
- <b>Set reporting cut-off.</b> Tentukan order status, return window, currency, tax, and commission period.
- <b>Match records.</b> Join order IDs, publisher IDs, SKU, date, status, and commission table.
- <b>Calculate payout.</b> Apply reversals, tiers, caps, adjustments, and approved bonuses.
- <b>Close disputes.</b> Document evidence, partner queries, credit/debit notes, and payment approvals.

**Practice / deliverable:** Buat monthly commission reconciliation workbook untuk 30 synthetic orders. Hitung eligible, cancelled, returned, duplicate, net commission, tax, payout, variance, and approval.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa network conversions belum final payout?
   **Expected answer in guide (not independently approved):** Orders may be pending, cancelled, returned, invalid, or outside program eligibility.
2. **Q:** Apa pentingnya rate table version?
   **Expected answer in guide (not independently approved):** Commission can change across dates/partners/products; using wrong version produces payment errors.
3. **Q:** Apa yang harus dilakukan saat partner dispute?
   **Expected answer in guide (not independently approved):** Provide order-level evidence, rules, source reconciliation, and transparent resolution timeline.

**Glossary:**
- **Commission reconciliation:** Pencocokan conversion dengan komisi/payout.
- **Reversal:** Pengurangan commission atas order tidak eligible.
- **Payout:** Pembayaran komisi kepada partner.
- **Rate table:** Daftar commission rates dan effective dates.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH11 — Affiliate Optimization & Partner Growth

**Competency ID(s):** T15-C02, T15-C06

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Affiliate optimization and partner growth meningkatkan quality and contribution, bukan sekadar jumlah publishers. Segment partner by type, quality, value, activity, new-to-brand, category, order value, returns, commission, incrementality, and compliance. Growth levers include exclusive offers, product feed, content support, tiering, creator programs, and improved landing/stock. Partner activation and retention need relationship management and fair terms.

**Simulated example:** SIMULATED — 10% partner menghasilkan 80% net contribution; beberapa coupon partners merebut last-click dari returning customers. Growth plan mengalihkan reward ke niche content partners and creator programs with better acquisition quality.

**Technical depth / workflow:**
- <b>Segment partner performance.</b> Use type, quality, value, activity, new-to-brand, returns, and contribution.
- <b>Find growth barriers.</b> Review feed, offer, content, rate, stock, tracking, and support SLA.
- <b>Design partner actions.</b> Tier, bonus, exclusive offer, creative kit, content calendar, and retention.
- <b>Protect economics.</b> Review incremental profit, commission concentration, risk, and dependency.

**Practice / deliverable:** Buat partner growth scorecard dan 90-day action plan: activation, active rate, net sales, margin, new-to-brand, returns, fraud, commission, and partner tier.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa jumlah publisher bukan KPI utama?
   **Expected answer in guide (not independently approved):** Program size can rise while active quality, incremental profit, and compliance fall.
2. **Q:** Apa beda active partner rate dan recruited count?
   **Expected answer in guide (not independently approved):** Active rate measures partners generating eligible activity; recruited count only measures enrollment.
3. **Q:** Mengapa concentration risk perlu dipantau?
   **Expected answer in guide (not independently approved):** Revenue/attribution from few partners creates dependency and vulnerability to policy or traffic change.

**Glossary:**
- **Active partner rate:** Proporsi partner yang menghasilkan eligible activity.
- **Partner tiering:** Kelompok partner berdasar quality/value/requirements.
- **Contribution profit:** Profit after relevant variable costs and commissions.
- **Concentration risk:** Ketergantungan pada sedikit partner/sources.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH12 — Affiliate Capstone

**Competency ID(s):** T15-C06

**Agency evidence (role-level):** A: Group Head Affiliate, WPP Media employer-hosted Jakarta listing; plus Affiliate Manager, Mindshare/WPP Media Beirut JD covering affiliate networks, direct publishers, S2S postbacks, pixels, MMPs, attribution, conversion QA and CPI/CPL/CPA/RevShare/CPS models. Preserve Jakarta vs Beirut seniority/market differences; not proof that affiliate equals retail media. | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Affiliate Capstone menyatukan commercial model, recruitment, platform/feed, tracking, campaign, quality control, reconciliation, and partner growth. Pekerjaan harus memperlihatkan unit economics dan payout rules, bukan hanya link creation. Data synthetic harus diberi label dan platform access/terms diverifikasi per account. Portfolio perlu menunjukkan bagaimana program menjaga advertiser margin dan fair partner measurement.

**Simulated example:** SIMULATED — retailer ingin meningkatkan sales kategori dengan affiliate network, creator live, and content publishers. Capstone menetapkan commission tiers, product feed, tracking, fraud controls, returns reconciliation, and 90-day partner growth plan.

**Technical depth / workflow:**
- <b>Frame the program.</b> Set objective, product economics, eligible conversion, partner mix, and market.
- <b>Build partner engine.</b> Discovery, onboarding, terms, assets, feed, links, and activation.
- <b>Control measurement/finance.</b> Validate tracking, fraud, conversion status, commission, and payout.
- <b>Grow responsibly.</b> Optimize partner portfolio by incremental contribution and trust.

**Practice / deliverable:** Bangun affiliate capstone pack: program brief, ecosystem map, partner shortlist, commission model, feed/link QA, campaign plan, fraud playbook, reconciliation workbook, partner dashboard, and executive recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa bukti program affiliate siap diluncurkan?
   **Expected answer in guide (not independently approved):** Clear economics, conversion rules, contract, feed, tracking QA, partner policy, fraud control, and finance reconciliation.
2. **Q:** Bagaimana membuktikan affiliate menguntungkan?
   **Expected answer in guide (not independently approved):** Gunakan incremental contribution after discount, fees, returns, and commission; do not rely on gross sales/attributed ROAS only.
3. **Q:** Apa yang perlu dicantumkan dalam portfolio?
   **Expected answer in guide (not independently approved):** Artifacts, formulas, sources, assumptions, simulated labels, risk controls, and learning—not invented sales results.

**Glossary:**
- **Affiliate operating model:** Struktur partner, commission, tracking, governance, and finance.
- **Net contribution:** Contribution after discounts, returns, fees, and commission.
- **Partner portfolio:** Komposisi partner menurut type, quality, and value.
- **Affiliate capstone:** Kasus end-to-end program performance partnership.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 16. Community Management & Advocacy (`community`)

### DPA-T16-CH01 — Community Strategy & Purpose

**Competency ID(s):** T16-C01

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community strategy menetapkan mengapa komunitas perlu ada, siapa yang dilayani, nilai yang diberikan, rules, participation model, and expected business/customer impact. Komunitas dapat brand-owned, platform-based, customer-led, professional, or interest-based. Tujuan bukan hanya menambah anggota; community health mencakup trust, participation, safety, retention, and mutual value. Tidak semua brand membutuhkan komunitas milik sendiri.

**Simulated example:** SIMULATED — brand memiliki 100 ribu followers tetapi percakapan dan repeat contributors sangat sedikit. Strategi perlu menentukan purpose: support, peer learning, product feedback, advocacy, or shared interest, bukan membuat grup baru hanya demi angka anggota.

**Technical depth / workflow:**
- <b>Define purpose.</b> Tulis value untuk anggota dan brand; jangan mulai dari pilihan platform.
- <b>Choose community model.</b> Tentukan owned/platform/customer-led, open/closed, and participation level.
- <b>Set success framework.</b> Definisikan activation, participation quality, retention, safety, and customer outcomes.
- <b>Govern it.</b> Tetapkan owner, moderation policy, resources, privacy, and escalation.

**Practice / deliverable:** Buat community charter: purpose, member promise, target segments, platform rationale, entry rules, participation principles, governance, and measurable success criteria.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda audience dan community?
   **Expected answer in guide (not independently approved):** Audience menerima konten; community memiliki interaksi, norma, hubungan antar anggota, dan partisipasi berkelanjutan.
2. **Q:** Kapan brand tidak perlu membuat community sendiri?
   **Expected answer in guide (not independently approved):** Saat audience sudah terlayani di ruang lain, value proposition komunitas tidak jelas, atau resource moderation tidak tersedia.
3. **Q:** Mengapa member count bukan ukuran health?
   **Expected answer in guide (not independently approved):** Anggota bisa pasif, tidak relevan, atau tidak aman; participation, trust, retention, and value lebih penting.

**Glossary:**
- **Community purpose:** Alasan/nilai komunitas ada bagi anggota dan brand.
- **Community health:** Kualitas participation, trust, safety, and retention.
- **Owned community:** Ruang komunitas yang dikelola/dimiliki brand.
- **Community charter:** Dokumen purpose, rules, roles, and governance.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH02 — Audience Community Mapping

**Competency ID(s):** T16-C02

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community mapping mengidentifikasi ruang audience berkumpul, norms, influential members, moderators, critics, advocates, and unmet needs. Mapping perlu membedakan platform audience dari community participants dan memperhatikan public/private spaces. Listening harus menghormati privacy, context, and platform terms; jangan mengumpulkan data pribadi tanpa kebutuhan/izin.

**Simulated example:** SIMULATED — skincare audience berdiskusi di forum, comments, groups, and review pages. Setiap ruang memiliki tone/rules berbeda; brand perlu memahami norma sebelum masuk dengan promosi.

**Technical depth / workflow:**
- <b>Map spaces.</b> Catat platform, group/forum, topic, access, size indicators, and rules.
- <b>Identify roles.</b> Bedakan lurkers, contributors, moderators, experts, advocates, critics, and brand accounts.
- <b>Read norms.</b> Pelajari language, trust, promotion tolerance, conflict, and participation rituals.
- <b>Document risk/value.</b> Catat privacy, safety, relevance, and community expectations.

**Practice / deliverable:** Buat audience community map untuk satu kategori dengan 10 public spaces/accounts, member roles, norms, high-value conversations, risk, and ethical engagement approach.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa brand tidak boleh langsung masuk dengan promosi?
   **Expected answer in guide (not independently approved):** Community memiliki norma/trust; pesan komersial tanpa permission/value dapat dianggap spam.
2. **Q:** Apa beda lurker dan contributor?
   **Expected answer in guide (not independently approved):** Lurker mengamati tanpa aktif posting; contributor memberi pertanyaan, jawaban, content, or participation.
3. **Q:** Apa etika social listening?
   **Expected answer in guide (not independently approved):** Ikuti platform rules, minimize personal data, respect private spaces, and report aggregate/context rather than exposing individuals.

**Glossary:**
- **Lurker:** Anggota yang mengamati tetapi jarang berkontribusi.
- **Contributor:** Anggota yang aktif memberi konten/komentar/pertanyaan.
- **Community norms:** Aturan formal/informal dalam ruang komunitas.
- **Social listening:** Pemantauan percakapan publik untuk memahami topic/sentiment/context.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH03 — Community Platform & Audience Segmentation

**Competency ID(s):** T16-C02

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community platform selection mempertimbangkan audience presence, conversation type, moderation capability, privacy, discoverability, searchability, features, member expectations, and operational burden. Segmentasi member dapat berdasarkan stage, expertise, interest, contribution, and support needs. Jangan memilih WhatsApp/Discord/Telegram hanya karena populer; platform harus sesuai purpose and safety requirements.

**Simulated example:** SIMULATED — community untuk customer support memerlukan searchable knowledge and ticket handoff; grup chat dengan volume tinggi sulit dicari dan dimoderasi. Forum/help center mungkin lebih tepat.

**Technical depth / workflow:**
- <b>Define use case.</b> Support, education, peer advice, advocacy, co-creation, or events.
- <b>Compare platforms.</b> Nilai access, discovery, moderation tools, analytics, privacy, search, roles, and integration.
- <b>Design segments/roles.</b> New members, experts, advocates, moderators, and customers at risk.
- <b>Set onboarding.</b> Welcome, rules, profile/data minimization, prompts, and escalation path.

**Practice / deliverable:** Buat platform decision matrix untuk tiga opsi komunitas: objective, user behavior, moderation tools, privacy, analytics, integrations, cost, and risk. Sertakan member segmentation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa platform harus mengikuti use case?
   **Expected answer in guide (not independently approved):** Setiap platform memiliki conversation format, search, roles, privacy, and moderation constraints berbeda.
2. **Q:** Apa risiko community group tanpa moderation capacity?
   **Expected answer in guide (not independently approved):** Spam, misinformation, harassment, privacy issues, and customer harm can grow faster than support resources.
3. **Q:** Apa yang perlu dikumpulkan saat onboarding?
   **Expected answer in guide (not independently approved):** Minimum profile and preference needed for purpose; avoid unnecessary personal data.

**Glossary:**
- **Community platform:** Ruang digital untuk interaksi komunitas.
- **Onboarding:** Proses menyambut dan membantu anggota memahami rules/value.
- **Member segment:** Kelompok anggota berdasarkan need/stage/behavior.
- **Moderation capacity:** Resource/tool/time untuk menjaga safety and quality.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH04 — Social Listening & Conversation Intelligence

**Competency ID(s):** T16-C03

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Social listening and conversation intelligence mengubah percakapan menjadi insight melalui query design, source coverage, Boolean logic, taxonomy, sentiment/context coding, topic clustering, trend detection, and reporting. Sentiment automation tidak memahami seluruh ironi/slang/bahasa campuran; analyst harus melakukan manual validation. Volume mention bukan otomatis market opinion atau representative survey.

**Simulated example:** SIMULATED — tool mengklasifikasikan 'parah bagus' sebagai negative, padahal slang berarti positif. Bahasa Indonesia, code-switch, sarcasm, and context memerlukan sampling manual dan codebook.

**Technical depth / workflow:**
- <b>Design queries.</b> Buat brand/product/category/competitor terms, synonyms, exclusions, and language variants.
- <b>Validate coverage.</b> Uji recall/precision sample, platform coverage, private-space limits, and query noise.
- <b>Code conversations.</b> Klasifikasikan topic, sentiment/context, need, question, issue, and influence.
- <b>Translate to action.</b> Susun insight, confidence, escalation, content, product, and service implications.

**Practice / deliverable:** Buat listening query set dan coding book untuk brand/kategori. Analisis 100 synthetic/public-safe mentions: topic, sentiment, intent, audience tension, false positives, and recommended actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa automated sentiment perlu human QA?
   **Expected answer in guide (not independently approved):** Slang, sarcasm, context, and mixed language can cause misclassification.
2. **Q:** Apa beda mention volume dan sentiment?
   **Expected answer in guide (not independently approved):** Volume counts conversations; sentiment interprets tone/context and needs validation.
3. **Q:** Mengapa query exclusions penting?
   **Expected answer in guide (not independently approved):** Untuk mengurangi irrelevant mentions, homonyms, spam, and false positives.

**Glossary:**
- **Boolean query:** Kombinasi operator untuk menyaring mention.
- **Sentiment coding:** Klasifikasi tone/attitude berdasarkan context.
- **Recall:** Proporsi relevant mentions yang berhasil ditemukan.
- **Precision:** Proporsi found mentions yang benar-benar relevant.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH05 — Community Management & Engagement

**Competency ID(s):** T16-C04

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community management menjalankan interaksi harian dan membangun participation. Community manager menjawab pertanyaan, memfasilitasi peer support, welcome newcomers, maintain tone, detect friction, and protect trust. Response quality harus akurat, human, timely, and consistent; jangan menjanjikan hal yang tidak dapat dipenuhi. SLA dibedakan berdasarkan question, complaint, safety, and crisis severity.

**Simulated example:** SIMULATED — pengguna bertanya tentang product allergy. Community manager tidak boleh memberi diagnosis medis; ia merespons secara empatik, merujuk label/support team, and escalates potential safety issue.

**Technical depth / workflow:**
- <b>Set response principles.</b> Tone, accuracy, empathy, boundaries, and source-of-truth.
- <b>Design engagement routines.</b> Welcome, conversation prompts, peer connections, event, and follow-up.
- <b>Set SLA and routing.</b> Categorize question/complaint/safety/legal with owner and due time.
- <b>Record outcomes.</b> Track resolution, repeat issues, member feedback, and escalation.

**Practice / deliverable:** Buat response playbook 20 cases: question, praise, complaint, misinformation, product issue, crisis signal, safety concern, and spam. Include response, owner, SLA, and escalation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa beda community management dan customer care?
   **Expected answer in guide (not independently approved):** Community management mengelola relationship/participation; customer care menyelesaikan service cases dengan systems/SLA—keduanya perlu handoff.
2. **Q:** Mengapa response template tidak boleh kaku?
   **Expected answer in guide (not independently approved):** Context, emotion, and issue severity require human adaptation; template supports consistency, not robotic replies.
3. **Q:** Kapan harus escalate product safety?
   **Expected answer in guide (not independently approved):** Saat ada injury, adverse reaction, contamination, or serious risk; follow approved safety/legal protocol immediately.

**Glossary:**
- **Community engagement:** Interaksi untuk participation and relationship.
- **Response SLA:** Target waktu respon menurut severity.
- **Escalation:** Pengalihan issue ke owner/authority yang tepat.
- **Community care:** Service/support yang diberikan melalui community/social channels.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH06 — Content Programming & Community Activation

**Competency ID(s):** T16-C04

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Content programming membuat komunitas memiliki alasan untuk kembali dan berkontribusi. Program dapat berupa AMA, challenge, peer learning, feedback sessions, events, member stories, product clinics, and co-creation. Editorial plan harus mengikuti community questions and rhythms, bukan hanya brand broadcast. UGC membutuhkan permission, context, credit, rights, moderation, and safety review.

**Simulated example:** SIMULATED — brand membuat weekly challenge tetapi hadiah hanya mendorong low-quality spam. Program yang lebih baik memberi shared value: peer tips, expert feedback, recognition, or meaningful access.

**Technical depth / workflow:**
- <b>Start from member needs.</b> Pilih theme/format dari listening and recurring questions.
- <b>Design participation.</b> Tetapkan prompt, entry mechanics, reward/value, moderation, and inclusion.
- <b>Plan content rhythm.</b> Susun recurring programs, community milestones, and event calendar.
- <b>Manage UGC rights.</b> Obtain permission, source/credit, platform usage, edit approval, and retention.

**Practice / deliverable:** Buat 4-week community program calendar dengan 2 recurring formats, one event/AMA, UGC process, moderation roles, participation metric, and safety plan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa challenge dengan hadiah saja dapat gagal?
   **Expected answer in guide (not independently approved):** It can attract incentive-only behavior without meaningful member value or durable participation.
2. **Q:** Apa yang perlu sebelum repost UGC?
   **Expected answer in guide (not independently approved):** Permission, attribution/credit, usage scope, editing consent, and compliance review.
3. **Q:** Bagaimana mengukur programming quality?
   **Expected answer in guide (not independently approved):** Repeat contributors, meaningful replies, completion, member value, retention, and issue reduction—not raw posts alone.

**Glossary:**
- **Community programming:** Rangkaian aktivitas/konten untuk memfasilitasi participation.
- **AMA:** Ask Me Anything; format tanya jawab.
- **UGC:** User-generated content.
- **Participation loop:** Pola prompt-contribution-response-recognition yang mendorong partisipasi ulang.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH07 — Moderation, Guidelines & Brand Safety

**Competency ID(s):** T16-C05

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Moderation dan guidelines menjaga keamanan, trust, and brand suitability. Policy perlu mendefinisikan spam, harassment, hate, misinformation, personal data, threats, illegal activity, and product claims. Moderation ladder menentukan hide, remove, warn, mute, ban, or escalation; keputusan harus konsisten, documented, and appealable bila sesuai. Brand safety bukan berarti menghapus kritik yang sah.

**Simulated example:** SIMULATED — pelanggan menulis kritik produk bercampur bahasa kasar tetapi tidak abusive. Moderator perlu membedakan complaint legitimate dari harassment; menghapus semua kritik akan merusak trust.

**Technical depth / workflow:**
- <b>Write guidelines.</b> Definisikan accepted behavior, prohibited content, consequences, privacy, and appeals.
- <b>Build moderation matrix.</b> Tentukan severity, response, evidence, owner, and escalation.
- <b>Train moderators.</b> Gunakan scenarios, consistency calibration, and sensitive-case protocols.
- <b>Audit decisions.</b> Review false positives/negatives, appeal, fairness, and member safety.

**Practice / deliverable:** Buat community rules dan moderation matrix dengan 10 scenarios, severity, action, response template, evidence retention, appeal, and escalation owner.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa kritik sah tidak boleh dihapus otomatis?
   **Expected answer in guide (not independently approved):** Feedback yang sah memberi evidence dan trust; moderation harus menargetkan harmful behavior, bukan negative sentiment.
2. **Q:** Apa yang dilakukan pada doxxing/personal data exposure?
   **Expected answer in guide (not independently approved):** Hide/remove promptly, preserve minimal evidence, escalate security/legal, and protect affected member.
3. **Q:** Mengapa moderation harus memiliki appeal/escalation path?
   **Expected answer in guide (not independently approved):** Untuk konsistensi, fairness, and review atas keputusan yang berdampak pada anggota.

**Glossary:**
- **Moderation:** Pengelolaan konten/perilaku sesuai community rules.
- **Doxxing:** Publikasi data pribadi untuk menyerang/mengancam.
- **Severity matrix:** Klasifikasi tingkat issue dan action.
- **Appeal:** Permintaan review atas moderation decision.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH08 — Customer Care & Response Management

**Competency ID(s):** T16-C04, T16-C05

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Customer care via community/social harus menghubungkan public response dengan private case handling. Community manager perlu memahami privacy, verification, ticketing, SLA, escalation, and crisis boundaries. Jangan meminta nomor order/PII di public comments; arahkan ke secure channel. Public response tetap perlu menunjukkan ownership tanpa membocorkan data customer.

**Simulated example:** SIMULATED — pelanggan mengunggah nomor telepon dan order ID di komentar. Community manager meminta penghapusan/menyembunyikan data, memindahkan percakapan ke secure ticket, and memastikan public follow-up setelah resolution.

**Technical depth / workflow:**
- <b>Classify case.</b> Pisahkan inquiry, complaint, transaction, safety, privacy, and legal issue.
- <b>Protect data.</b> Jangan meminta/mengulang PII di publik; gunakan verified private channel.
- <b>Route and track.</b> Buat ticket, assign owner, SLA, case status, and update cadence.
- <b>Close the loop.</b> Pastikan resolution, public acknowledgement where appropriate, and root-cause feedback.

**Practice / deliverable:** Buat customer care handoff flow dan response templates untuk order issue, refund, product defect, privacy complaint, and safety incident. Sertakan PII rules and SLA.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa case perlu dipindah ke secure channel?
   **Expected answer in guide (not independently approved):** Untuk melindungi PII/order details dan memastikan verification/records sesuai service process.
2. **Q:** Apa bedanya acknowledge dengan resolve?
   **Expected answer in guide (not independently approved):** Acknowledge mengakui issue; resolve menyelesaikan masalah dan mengonfirmasi outcome.
3. **Q:** Apa yang harus dicatat di ticket?
   **Expected answer in guide (not independently approved):** Case ID, category, owner, SLA, status, evidence, action, and closure—minimum necessary personal data.

**Glossary:**
- **Customer care:** Service support untuk menyelesaikan customer issue.
- **PII:** Personally Identifiable Information.
- **Ticket:** Record terstruktur untuk case/issue handling.
- **Closure:** Konfirmasi penyelesaian dan status akhir case.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH09 — Advocacy, UGC & Brand Relationship

**Competency ID(s):** T16-C06

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Advocacy dan UGC membangun hubungan sehingga member secara sukarela membantu brand melalui recommendation, review, referrals, content, feedback, and peer support. Advocacy program harus memberi recognition/value tanpa membeli opini atau memaksa positive reviews. Permission, disclosure, incentives, content rights, and authenticity perlu diatur. Advocate bukan sekadar member dengan follower tinggi; trust dan helpful contribution lebih penting.

**Simulated example:** SIMULATED — brand memberi reward hanya untuk review bintang lima. Itu mendorong bias dan berisiko melanggar platform policies. Program yang sehat memberi reward atas partisipasi/feedback tanpa mengontrol sentiment.

**Technical depth / workflow:**
- <b>Define advocacy behaviors.</b> Referral, helpful answers, UGC, reviews, beta feedback, or event participation.
- <b>Design recognition.</b> Rewards, access, education, status, or community value without buying positive sentiment.
- <b>Secure consent/rights.</b> Obtain content permissions and disclosure for incentivized activity.
- <b>Measure trust.</b> Track repeat advocacy, contribution quality, referrals, sentiment context, and member retention.

**Practice / deliverable:** Buat advocacy program blueprint: member tiers/behaviors, recognition system, UGC permission, referral flow, review policy, disclosure, and health metrics.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa reward untuk positive review berisiko?
   **Expected answer in guide (not independently approved):** Mengontrol sentiment dan dapat melanggar review/platform policies; reward should not require positive rating.
2. **Q:** Apa beda advocate dan influencer?
   **Expected answer in guide (not independently approved):** Advocate punya relationship/peer trust through genuine participation; influencer is selected for audience/content reach, though overlap exists.
3. **Q:** Apa yang perlu sebelum memakai UGC brand-wide?
   **Expected answer in guide (not independently approved):** Permission, credit, channel, period, editing rules, and disclosure.

**Glossary:**
- **Advocacy:** Perilaku mendukung/merekomendasikan brand secara sukarela.
- **UGC rights:** Izin menggunakan content yang dibuat user.
- **Peer recommendation:** Rekomendasi dari sesama pengguna/anggota.
- **Recognition:** Pengakuan/reward atas kontribusi komunitas.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH10 — Crisis Monitoring & Escalation

**Competency ID(s):** T16-C05

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Crisis monitoring mengamati early signals, complaint velocity, sentiment/context, safety reports, influential actors, and potential escalation. Crisis playbook harus mendefinisikan trigger, severity, spokesperson, legal/PR/customer care owners, holding statement, approval, evidence preservation, and updates. Community manager tidak boleh berspekulasi atau menghapus kritik substansial; ia harus menjaga factuality, empathy, and escalation.

**Simulated example:** SIMULATED — rumor kualitas produk menyebar dan ada satu report adverse effect. Tim perlu membedakan rumor, verified safety incident, and misinformation; issue harus di-escalate ke product safety/legal sebelum brand membuat statement.

**Technical depth / workflow:**
- <b>Set early-warning rules.</b> Monitor volume spikes, risk keywords, safety terms, influential posts, and cross-platform spread.
- <b>Classify severity.</b> Tentukan service, reputation, safety, legal, or security issue.
- <b>Activate playbook.</b> Assign incident lead, verify facts, approve statement, route cases, and time updates.
- <b>Review after crisis.</b> Document timeline, root causes, response effectiveness, member impact, and prevention.

**Practice / deliverable:** Buat crisis playbook dengan 5 scenarios, severity triggers, RACI, holding statement, approval chain, response SLA, evidence log, and after-action review.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa holding statement harus hati-hati?
   **Expected answer in guide (not independently approved):** Fakta belum lengkap; statement harus acknowledge, explain next step, and avoid unsupported claims or blame.
2. **Q:** Kapan issue berubah menjadi crisis?
   **Expected answer in guide (not independently approved):** Saat scope, safety/legal risk, rapid spread, business impact, or stakeholder attention melewati escalation threshold.
3. **Q:** Apa yang perlu dilakukan setelah crisis?
   **Expected answer in guide (not independently approved):** Audit timeline, decisions, response, harm, root cause, and prevention; do not simply delete posts.

**Glossary:**
- **Early warning signal:** Indikator awal potensi issue/crisis.
- **Holding statement:** Pernyataan awal saat investigasi masih berjalan.
- **Incident lead:** Owner koordinasi penanganan crisis.
- **After-action review:** Evaluasi response dan prevention setelah incident.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH11 — Community Measurement & Reporting

**Competency ID(s):** T16-C07

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community measurement mengukur health dan value: active members, repeat contributors, meaningful conversation, response SLA, resolution, sentiment/context, retention, safety incidents, UGC quality, referral, and customer outcomes. Metrics perlu denominator, period, segment, and sampling method. Follower/member count tidak menunjukkan value tanpa participation. Report harus memadukan quantitative trend dan qualitative examples.

**Simulated example:** SIMULATED — community growth naik 40% setelah giveaway, tetapi repeat contributors turun dan spam meningkat. Member count meningkat tanpa health; segmentation and behavior metrics menunjukkan quality decline.

**Technical depth / workflow:**
- <b>Define health dimensions.</b> Acquisition, activation, contribution, connection, retention, safety, and value.
- <b>Build metrics.</b> Active member rate, repeat contributor, response/resolution, moderation, and meaningful actions.
- <b>Combine quant and qual.</b> Trend data dengan conversation examples and member feedback.
- <b>Recommend action.</b> Hubungkan findings ke programming, moderation, service, and product changes.

**Practice / deliverable:** Buat community health dashboard dan monthly report: active members, contributor rate, repeat, SLA, resolution, moderation, sentiment themes, UGC permissions, and next actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Mengapa member count tidak cukup?
   **Expected answer in guide (not independently approved):** Growth dapat berasal dari campaign/giveaway dan tidak menunjukkan active/retained/helpful participation.
2. **Q:** Apa definisi meaningful contribution?
   **Expected answer in guide (not independently approved):** Action yang memberi value pada komunitas seperti jawaban, feedback, support, content, or constructive discussion.
3. **Q:** Mengapa sentiment score harus divalidasi?
   **Expected answer in guide (not independently approved):** Bahasa, sarcasm, sample bias, and platform coverage dapat menghasilkan misclassification.

**Glossary:**
- **Active member rate:** Proporsi anggota yang melakukan activity terdefinisi.
- **Contributor rate:** Proporsi anggota yang memberi kontribusi.
- **Response SLA:** Target waktu respons untuk komentar/case.
- **Community retention:** Anggota yang kembali aktif dalam window berikutnya.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH12 — Community Capstone

**Competency ID(s):** T16-C07

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | A: Social Media Analyst / Community Manager, Dentsu employer-hosted Workday JD, Medellin; social publishing, replies to messages/comments/mentions, reputation monitoring, community engagement, KPI analysis and reporting; 1+ year. Direct community-role evidence; preserve Colombia market. | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community Capstone menyatukan purpose, audience mapping, platform selection, listening, engagement, programming, moderation, customer care, advocacy, crisis, and measurement. Deliverable harus operasional: charter, governance, calendar, response bank, escalation, and dashboard. Community bukan sekadar group chat; keberhasilannya diukur dari value dan safety bagi anggota serta dampaknya pada relationship/customer experience.

**Simulated example:** SIMULATED — brand membuat community 90 hari untuk pelanggan baru dan power users. Capstone merancang onboarding, peer learning, product feedback, moderation, support escalation, UGC permission, and advocate recognition.

**Technical depth / workflow:**
- <b>Frame community value.</b> Tetapkan member promise, role, audience, and purpose.
- <b>Design operations.</b> Pilih platform, segments, programming, moderation, customer care, and governance.
- <b>Activate relationships.</b> Onboard members, encourage participation, support advocates, and manage risk.
- <b>Measure health.</b> Track retention, participation, safety, resolution, and business/customer value.

**Practice / deliverable:** Bangun community operating pack: charter, audience map, platform decision, onboarding, 4-week calendar, moderation matrix, care handoff, advocacy program, crisis playbook, dashboard, and after-action plan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no scored quiz engine or approved answer key is implied.
1. **Q:** Apa yang membedakan community plan dari social content calendar?
   **Expected answer in guide (not independently approved):** Community plan mengatur member relationships, participation, norms, service, safety, and governance—not only publishing.
2. **Q:** Bagaimana membuktikan community value?
   **Expected answer in guide (not independently approved):** Show member outcomes, repeat participation, resolution, feedback, advocacy, retention, and measured business/service effects.
3. **Q:** Apa yang harus dihindari dalam capstone?
   **Expected answer in guide (not independently approved):** Fake member counts, fabricated sentiment, forced testimonials, unsafe data collection, and unapproved UGC use.

**Glossary:**
- **Community operating model:** Model operasi untuk purpose, members, content, moderation, service, and measurement.
- **Participation:** Keterlibatan/kontribusi anggota.
- **Advocacy loop:** Mekanisme value dan recognition yang mendorong genuine recommendation.
- **Community capstone:** Paket implementasi dan governance komunitas end-to-end.

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## Reconciliation summary
- Rendered chapters: 169.
- Guide objects extracted: 169.
- Chapters without a guide object: 0.
- Static comprehension Q&A items extracted: 507.
- HTML chapter IDs and guide IDs are 169 unique each with no missing/orphan/duplicate IDs in the current PR #5 branch.
- The 169 chapter content audit is still PARTIAL: source-to-chapter trace, resource validation, answer-key correctness, chapter-specific rubrics/pass criteria and browser/runtime QA remain open.