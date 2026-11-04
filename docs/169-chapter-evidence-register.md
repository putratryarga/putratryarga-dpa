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
- Audit brief. Pisahkan objective bisnis, gejala, evidence, audience, market, budget, timeline, mandatories, dan hal yang belum diketahui.
- Diagnosis controllability. Tandai faktor yang dapat dipengaruhi komunikasi dan faktor produk/komersial yang perlu owner lain.
- Tulis problem statement. Nyatakan siapa, perubahan apa, barrier apa, mengapa sekarang, dan evidence pendukungnya.
- Set success criteria. Tentukan baseline, desired change, indikator komunikasi, business outcome pendamping, periode, dan source.

**Practice / deliverable:** Buat brief diagnosis dua halaman: business context, problem tree, communication challenge, target audience, objective, baseline/target, constraint, stakeholder, tiga research question, serta evidence/assumption log. Labeli setiap angka SIMULATED bila bukan data aktual.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Rumuskan research question. Tulis keputusan yang perlu didukung dan ketidakpastian yang harus dikurangi sebelum memilih metode.
- Triangulasikan sumber. Cocokkan search/review/CRM dengan interview atau survey; jangan menjadikan satu social post sebagai representasi seluruh pasar.
- Bangun segment. Definisikan need, occasion, trigger, barrier, behavior, alternative, decision criteria, dan media context.
- Dokumentasikan evidence. Pisahkan observed fact, interpretation, assumption, confidence, sample limitation, serta bukti yang dapat membantah.

**Practice / deliverable:** Buat dua audience profile lengkap dengan jobs-to-be-done, tension, trigger, barrier, alternatives, proof needed, media behavior, dan implication untuk pesan/touchpoint. Sertakan source log dan satu research gap per segmen.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Kumpulkan cultural signals. Baca percakapan, search, creator, komunitas, berita, riset, perilaku kategori, dan perubahan sosial.
- Bedakan signal, trend, shift. Ukur apakah sinyal hanya viral sesaat atau mengindikasikan perubahan perilaku lebih luas.
- Formulasikan tension. Tulis pola audience ingin X tetapi mengalami Y karena Z; dukung dengan beberapa bukti independen.
- Uji brand fit. Tentukan peran brand, relevance, credibility, timing, sensitivity, dan potensi backlash.

**Practice / deliverable:** Buat cultural insight board berisi lima sinyal, dua tren, satu human tension, evidence pro/kontra, brand role, serta tiga potential communication territories. Jangan mengklaim hubungan kausal dari korelasi tren.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Petakan competitive frame. Tentukan kategori, alternatif langsung/tidak langsung, parity points, dan pembeda yang relevan bagi audience.
- Rumuskan value proposition. Hubungkan target, need, benefit, differentiation, reason-to-believe, dan limitation.
- Bangun messaging hierarchy. Pisahkan proposition, supporting message, proof, objection response, tone, dan CTA.
- Uji konsistensi. Periksa apakah pesan dapat dibuktikan, relevan pada journey, berbeda dari kompetitor, dan dapat diadaptasi lintas channel.

**Practice / deliverable:** Susun positioning statement, value proposition, 3 proof points, 3 objections beserta respons, messaging hierarchy, dan satu communication strategy statement. Tandai klaim yang membutuhkan persetujuan legal atau validasi produk.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Tentukan journey boundary. Pilih persona/occasion dan definisikan awal serta akhir journey yang dianalisis.
- Petakan tindakan dan pertanyaan. Catat trigger, task, emotion, information need, influence, dan barrier pada setiap stage.
- Inventaris touchpoint. Tandai paid/owned/earned/shared/offline, role, owner, content, data signal, dan handoff.
- Prioritaskan moments. Nilai impact, friction, reach, feasibility, dan bukti; hindari memberi bobot sama pada semua touchpoint.

**Practice / deliverable:** Buat journey map minimal enam tahap yang berisi audience action, question, emotion, friction, touchpoint, brand role, owner, evidence, dan opportunity. Pilih tiga moments of truth dan jelaskan alasan prioritas.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Turunkan tugas channel dari journey. Tuliskan perubahan audience yang perlu terjadi pada tiap momen sebelum memilih media.
- Bandingkan channel fit. Nilai audience availability, intent, trust, format, control, reach/frequency, cost, speed, dan risk.
- Susun role matrix. Hubungkan channel dengan audience, message, task, KPI, CTA, owner, dan handoff.
- Uji overlap dan gap. Temukan duplikasi pesan, momen tanpa dukungan, dan potensi konflik antar channel.

**Practice / deliverable:** Buat channel-role matrix untuk minimal enam channel. Cantumkan task, audience, message, format, KPI, timing, dependency, owner, serta alasan channel dipilih atau ditolak.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Buat architecture map. Hubungkan audience segment, journey stage, objective, message, channel, format, dan timing.
- Susun message house. Tetapkan single-minded proposition, supporting pillars, proof, objection handling, CTA, dan tone.
- Adaptasi per konteks. Bedakan platform-native expression, panjang pesan, format, urgency, dan depth tanpa mengubah janji inti.
- Dokumentasikan governance. Tetapkan owner, approval, versioning, claim validation, dan aturan update.

**Practice / deliverable:** Bangun communication architecture satu campaign, message house, messaging matrix enam touchpoint, sequence/timing plan, dan governance/approval checklist. Sertakan contoh pesan per platform dan alasan adaptasinya.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Tulis creative task. Terangkan apa yang harus dipikirkan/dirasakan/dilakukan audience setelah menerima komunikasi.
- Definisikan deliverable. Tetapkan channel, format, asset count, specification, message, CTA, mandatory, timing, dan budget.
- Rancang orchestration. Susun sequence, dependency, version, owner, media placement, landing/experience, dan service readiness.
- Jalankan handoff. Review brief bersama stakeholder, catat keputusan, approval, risk, dan change request.

**Practice / deliverable:** Buat creative brief, channel adaptation matrix, asset/deliverable schedule, RACI/owner table, approval checklist, dan risk register untuk satu integrated campaign.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Turunkan measurement objective. Definisikan output, outtake, outcome, baseline, target, audience, dan time window.
- Pilih bukti sesuai pertanyaan. Platform reporting untuk delivery; survey/brand lift untuk perception; sales/CRM untuk behavior; eksperimen untuk incrementality jika feasible.
- Susun learning agenda. Tulis hipotesis, metode, sample, decision threshold, owner, dan kapan hasil mengubah rencana.
- Interpretasikan batas. Pisahkan korelasi, attribution, self-reported lift, causal evidence, dan faktor luar.

**Practice / deliverable:** Rancang measurement framework campaign dengan KPI output/outtake/outcome, measurement method, baseline, target, learning question, decision rule, dan limitation. Tulis satu rekomendasi berdasarkan data SIMULATED.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Audit konsistensi. Pastikan problem, insight, proposition, journey, message, channel, dan KPI saling menguatkan.
- Bangun recommendation. Sajikan audience, experience architecture, investment implication, creative need, governance, dan risk.
- Simulasikan trade-off. Bandingkan opsi dengan budget/timeline berbeda dan jelaskan konsekuensi.
- Presentasikan dan defend. Jawab mengapa strategi dipilih, bukti apa yang mendukung, apa yang belum diketahui, dan kapan akan diubah.

**Practice / deliverable:** Susun deck 10–12 slide dan workbook: brief, evidence log, audience/insight, positioning, journey, message house, channel-role matrix, creative brief, measurement/learning agenda, governance, budget implication, dan 30/60/90-day next steps. Labeli synthetic assumptions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Terjemahkan objective. Pisahkan business goal, communication task, media task, KPI, target, dan periode.
- Lengkapi requirement. Catat target, geography, audience, brand safety, budget, campaign dates, asset, stock, dan approval.
- Uji feasibility. Periksa apakah budget, inventory, timing, dan target masuk akal; dokumentasikan gap.
- Susun clarification log. Tulis pertanyaan, assumption, owner, dan dampak bila jawabannya berubah.

**Practice / deliverable:** Buat media brief intake dan assumption log satu campaign: objective tree, audience, target market, timeline, budget, KPI, mandatories, inventory dependencies, serta lima pertanyaan klarifikasi untuk klien.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Definisikan audience universe. Tentukan target, age/geography/context/behavior, exclusion, dan periode relevansi.
- Audit data sources. Catat sample, methodology, update date, bias, match rate, dan coverage.
- Bandingkan media habits. Hubungkan consumption occasion, device, platform, format, dan attention context.
- Terjemahkan ke planning implication. Tentukan reach opportunity, overlap, audience priority, dan risk.

**Practice / deliverable:** Buat audience landscape berisi 2–3 segmen, estimasi universe dengan source caveat, media consumption, occasion, platform role, duplication risk, dan implikasi terhadap channel selection.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Inventarisasi opsi. Catat channel, publisher, placement, format, buying method, availability, audience, dan geo.
- Nilai kualitas inventory. Periksa context, viewability, IVT, brand safety, transparency, audience methodology, dan measurement coverage.
- Bandingkan cost apples-to-apples. Samakan unit, deliverable, flight, currency, fee, added value, dan billable basis.
- Dokumentasikan suitability. Nyatakan kapan inventory cocok/tidak cocok dan risiko supply.

**Practice / deliverable:** Buat inventory evaluation sheet minimal enam opsi: audience fit, placement/context, buying type, rate basis, projected delivery, quality controls, reporting, exclusions, dan recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Susun KPI hierarchy. Tentukan business outcome, media primary KPI, diagnostic metrics, dan guardrails.
- Definisikan formula. Catat numerator, denominator, unit, window, source, attribution rule, serta currency.
- Tetapkan target realistis. Gunakan historical data/benchmark yang relevan dan jelaskan confidence.
- Rancang reporting. Tentukan cadence, dimensions, owners, alert threshold, dan decision trigger.

**Practice / deliverable:** Buat KPI dictionary untuk minimal enam media metric dan susun objective-to-KPI tree. Sertakan rumus, sumber, unit, target, guardrail, window, dan alasan pemilihan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Tetapkan channel task. Kaitkan setiap channel dengan journey dan outcome yang ditargetkan.
- Bangun allocation scenarios. Buat conservative/base/stretch beserta assumptions, expected delivery, risk, dan trade-off.
- Periksa diminishing returns. Nilai marginal cost, audience saturation, frequency, inventory limits, dan performance curve.
- Justifikasi rekomendasi. Hubungkan alokasi dengan business objective, evidence, confidence, dan decision gates.

**Practice / deliverable:** Buat tiga media-mix scenarios dengan budget total tetap. Untuk setiap skenario tulis allocation, KPI, forecast range, assumptions, risks, marginal trade-off, dan kondisi realokasi.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Tetapkan universe. Nyatakan target population, geography, panel/platform source, dan period.
- Hitung cost metrics. CPM, CPC, CPP, dan cost per reach dihitung dari unit serta delivery yang didefinisikan.
- Forecast reach/frequency. Pertimbangkan duplication, overlap, inventory, exposure distribution, dan uncertainty.
- Bandingkan lintas media. Catat metodologi TV/OOH/digital, rating source, audience base, dan caveat.

**Practice / deliverable:** Buat media forecast dengan CPM, reach, frequency, GRP/TRP, dan CPP untuk skenario latihan. Tulis source/universe, formula, assumptions, duplication caveat, dan sensitivity saat reach turun.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Bangun kalender. Tentukan phase, date, channel, format, audience, weight, spend, objective, dan asset deadline.
- Pilih flighting logic. Cocokkan continuity/pulsing/flighting dengan seasonality dan objective.
- Modelkan scenario. Uji launch delay, budget cut, inventory shortage, dan creative readiness.
- Sinkronkan dependencies. Tandai approval, publisher booking, trafficking, tracking, stock, serta owner.

**Practice / deliverable:** Buat flowchart 8 minggu dengan channel/format, spend weighting, flighting, asset deadline, dependencies, dan three contingency scenarios. Tulis change-control rules jika dates atau inventory berubah.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Terjemahkan plan ke brief. Detailkan channel, inventory, format, audience, budget, dates, KPI, specs, tracking, dan constraints.
- Koordinasikan partner. Minta availability, rate, delivery definition, measurement, value-add, cancellation, dan makegood terms.
- Bandingkan proposal. Normalisasi rate, audience, formats, delivery, fee, bonus, dan quality assurance.
- Handoff dan sign-off. Pastikan buyer, Ad Ops, creative, data, client, dan finance memahami owner dan acceptance criteria.

**Practice / deliverable:** Buat buying brief, RFP question list, apples-to-apples proposal comparison, owner/RACI table, dan handoff checklist untuk satu digital + publisher package.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Reconcile delivery. Bandingkan planned/booked/delivered/billed dengan definisi dan cut-off yang sama.
- Diagnose variance. Segmentasikan channel, placement, audience, date, creative, dan supply.
- Read effectiveness. Hubungkan output media dengan site/brand/sales outcomes sambil membedakan attribution dan incrementality.
- Recommend next flight. Tulis change, expected mechanism, impact, risk, owner, dan learning question.

**Practice / deliverable:** Buat post-buy report berisi plan-vs-actual, reach/frequency, cost variance, placement quality, outcome, discrepancy note, root-cause hypothesis, dan tiga next-flight decisions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Integrasikan analysis. Hubungkan brief, audience, media landscape, objective, KPI, dan channel roles.
- Susun plan dan forecast. Buat budget, mix, reach/frequency, cost, flowchart, dan scenarios.
- Rancang execution governance. Siapkan brief, owner, timeline, approvals, measurement, dan contingency.
- Present dan defend. Jelaskan alasan, trade-off, assumptions, risks, dan post-buy learning.

**Practice / deliverable:** Siapkan media plan 10 slide plus workbook: brief, audience, inventory evaluation, channel roles, budget scenarios, reach/frequency forecast, flowchart, buying brief, KPI dashboard specification, post-buy evaluation plan, dan assumptions log.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 4. Paid Search / SEM Specialist (`paidsearch`)

### DPA-T04-CH01 — Search Advertising Ecosystem & Auction Fundamentals

**Competency ID(s):** T04-C01

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | G: direct paid-search JD not located in this batch | D: SEA Executive career listing

**Learning objective / concept:** Paid Search menangkap intent yang diekspresikan melalui query. Specialist harus memahami auction eligibility, Ad Rank, keyword/query, ad relevance, landing experience, conversion signal, bidding, dan budget. Search term bukan keyword target; platform dapat mencocokkan query melalui variasi. Performance dinilai dari kualitas demand dan kontribusi bisnis, bukan hanya klik atau impression.

**Simulated example:** SIMULATED — keyword broad 'asuransi mobil' menghasilkan 2.000 klik, tetapi banyak search term mencari pekerjaan dan definisi. Negative keyword dan landing page intent match memperbaiki kualitas traffic meski volume klik turun.

**Technical depth / workflow:**
- Pahami auction. Pelajari eligibility, Ad Rank, bid, quality/relevance signals, budget, dan auction insights.
- Audit search intent. Kelompokkan query informational, commercial, transactional, branded, competitor, dan local.
- Definisikan conversion. Bedakan primary conversion, micro-conversion, value, attribution window, dan offline outcome.
- Hubungkan intent ke landing page. Pastikan ad promise dan page content menjawab query yang sama.

**Practice / deliverable:** Buat search ecosystem map untuk satu kategori: query types, auction factors, account actors, conversion actions, landing-page match, dan KPI chain. Gunakan sample query nyata atau label SIMULATED.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH02 — Search Intent, Keyword Research & Competitor Analysis

**Competency ID(s):** T04-C02

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | G: direct paid-search JD not located in this batch | D: SEA Executive career listing

**Learning objective / concept:** Keyword research menyusun peluang query berdasarkan intent, relevance, volume, competition, value, geography, seasonality, dan landing-page readiness. Search volume tidak sama dengan demand yang dapat dikonversi; keyword populer bisa tidak relevan, terlalu luas, atau punya economics buruk. Competitor ad research membantu melihat positioning dan SERP, tetapi tidak membuktikan biaya atau profit pesaing.

**Simulated example:** SIMULATED — keyword 'kursus digital marketing' memiliki volume tinggi, namun target course berbayar untuk profesional mungkin lebih cocok dengan query 'sertifikasi digital marketing untuk karyawan'. Intent dan willingness-to-pay berbeda.

**Technical depth / workflow:**
- Mulai dari seed. Turunkan produk, need, category terms, problems, brands, locations, dan language variants.
- Kelompokkan intent. Tandai informational/commercial/transactional, urgency, audience fit, dan funnel stage.
- Nilai economics. Perkirakan CPC, conversion likelihood, margin/value, search volume, dan competition; jangan menganggap tools sebagai ground truth.
- Bangun keyword-to-page map. Tentukan landing destination, message, negative risk, dan priority.

**Practice / deliverable:** Buat 30-keyword intent map dengan cluster, priority, expected query type, CPC/volume source, landing page, negative candidates, dan assumptions. Buat competitor SERP review untuk tiga query utama.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH03 — Account, Campaign & Ad Group Architecture

**Competency ID(s):** T04-C03

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | G: direct paid-search JD not located in this batch | D: SEA Executive career listing

**Learning objective / concept:** Campaign architecture mengatur hubungan account, campaign, ad group, keyword, ads, assets, audience, geography, language, budget, conversion action, dan landing page. Struktur yang baik memberi kontrol cukup tanpa memecah data terlalu kecil. Naming taxonomy memudahkan QA dan reporting; pemilihan campaign type harus mengikuti objective, channel inventory, feed, conversion readiness, dan kemampuan kontrol.

**Simulated example:** SIMULATED — satu campaign terlalu banyak menggabungkan branded, generic, dan competitor terms sehingga budget generic terserap brand traffic. Pemisahan diperlukan untuk visibility dan budget control, tetapi membagi setiap keyword ke campaign sendiri akan memfragmentasi learning.

**Technical depth / workflow:**
- Definisikan boundaries. Pisahkan brand/non-brand, geography, product line, language, objective, budget, atau intent jika ada alasan operasional.
- Susun ad group. Kelompokkan theme dengan ad relevance dan page fit; hindari satu ad group terlalu luas atau terlalu sempit.
- Rancang naming. Gunakan brand_market_objective_campaign_type_product_audience_version.
- Validasi architecture. Periksa negative overlap, budget control, conversion settings, asset compatibility, dan reporting.

**Practice / deliverable:** Bangun account map untuk brand latihan: account settings, 3 campaign, ad groups, keyword clusters, ad assets, landing pages, conversion actions, naming, dan QA checks. Jelaskan alasan struktur.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH04 — Match Types, Negative Keywords & Search Terms

**Competency ID(s):** T04-C02, T04-C04

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | G: direct paid-search JD not located in this batch | D: SEA Executive career listing

**Learning objective / concept:** Match type mengatur seberapa luas keyword dapat mencocokkan query, tetapi tidak boleh dianggap sebagai exact string match sederhana. Search terms report menunjukkan query yang benar-benar memicu iklan dan menjadi sumber optimasi. Negative keyword melindungi relevance, budget, brand safety, serta query intent. Pemilihan negatives harus hati-hati agar tidak memblokir query bernilai.

**Simulated example:** SIMULATED — broad match 'software payroll' memicu query 'contoh slip gaji' dan 'lowongan HR'. Sebagian dapat relevan untuk konten, tetapi tidak untuk sales demo. Negative harus dipilih berdasarkan objective, bukan hanya karena query tidak identik.

**Technical depth / workflow:**
- Pahami matching behavior. Pelajari broad/phrase/exact menurut dokumentasi terkini serta sinyal intent/close variants.
- Audit search terms. Kategorikan relevant, irrelevant, ambiguous, competitor, informational, dan conversion quality.
- Bangun negative taxonomy. Bedakan account/campaign/ad-group negatives, brand exclusions, job-seeker, free-only, dan non-market terms.
- Review secara berulang. Periksa query volume, spend, conversion quality, false blocking, dan perubahan behavior.

**Practice / deliverable:** Buat search-term mining worksheet dari data latihan minimal 100 rows: intent, relevance, cost, conversions, value, action (keep/negative/observe), rationale, serta owner/date. Tulis daftar negative beserta risiko false positive.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH05 — Search Ad Copy, Assets & Landing Page Relevance

**Competency ID(s):** T04-C05

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | G: direct paid-search JD not located in this batch | D: SEA Executive career listing

**Learning objective / concept:** Search ad copy harus menjawab query, menyampaikan benefit, memberi proof, dan mengarahkan ke landing page yang sesuai. Responsive Search Ads menguji kombinasi headline/description; assets menambah informasi dan action. Message match mengurangi cognitive friction: kata, offer, price, eligibility, dan CTA pada iklan harus selaras dengan destination page. Klaim harus dapat dibuktikan dan sesuai policy.

**Simulated example:** SIMULATED — iklan menjanjikan 'gratis konsultasi hari ini' tetapi landing page meminta pembayaran dan jadwal minggu depan. CTR bisa tinggi karena janji menarik, tetapi conversion jatuh dan trust rusak.

**Technical depth / workflow:**
- Rumuskan message angle. Gunakan search intent, differentiator, benefit, proof, objection, dan CTA.
- Bangun asset set. Tulis headlines/descriptions yang saling melengkapi, hindari repetisi dan unsupported claims.
- Audit extensions/assets. Periksa sitelinks, callouts, snippets, image/call assets bila tersedia dan relevan.
- QA landing page. Cocokkan offer, page title, speed, mobile usability, form, legal text, and conversion path.

**Practice / deliverable:** Buat dua RSA concept untuk satu ad group: masing-masing 10–15 headline draft, empat description, assets, keyword theme, LP URL, proof requirement, dan policy checklist. Tandai klaim yang memerlukan substantiation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH06 — Campaign Types, Bidding Strategy & Budget Management

**Competency ID(s):** T04-C03, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | G: direct paid-search JD not located in this batch | D: SEA Executive career listing

**Learning objective / concept:** Bidding dan budget menentukan cara platform berpartisipasi dalam auction dan mengejar conversion/value. Manual, Maximize Clicks, Maximize Conversions, target CPA, Maximize Conversion Value, dan target ROAS memiliki kebutuhan sinyal serta trade-off berbeda. Smart bidding memerlukan conversion tracking yang sehat, volume yang memadai, dan definisi value yang tepat. Budget pacing harus dipantau bersama spend, impression share, marginal CPA/ROAS, dan business margin.

**Simulated example:** SIMULATED — target tROAS ditetapkan terlalu tinggi untuk akun baru tanpa conversion history. Delivery menjadi terbatas. Sebelum melonggarkan target, tim harus memvalidasi purchase event, value, bidding objective, budget, query mix, dan landing-page experience.

**Technical depth / workflow:**
- Pilih strategy sesuai goal. Tentukan click, lead, purchase, value, impression share, atau reach objective.
- Periksa signal readiness. Validasi conversion action, volume, value, consent, deduplication, dan attribution window.
- Set budget/pacing guardrails. Pantau daily spend, budget limited, lost IS, CPA/value, margin, dan seasonality.
- Ubah secara terkendali. Catat baseline, change, expected effect, observation window, rollback/decision criteria.

**Practice / deliverable:** Simulasikan tiga bid strategies untuk satu campaign. Isi input signal, required data, budget, expected trade-off, monitoring metrics, guardrail, dan perubahan yang dilakukan pada kasus underdelivery/overspend.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH07 — Conversion Tracking, Enhanced Conversions & Offline Conversion

**Competency ID(s):** T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | G: direct paid-search JD not located in this batch | D: SEA Executive career listing

**Learning objective / concept:** Conversion tracking mengubah business action menjadi signal yang dapat diukur dan dipakai bidding. Specialist harus membedakan page view, form submit, qualified lead, purchase, phone call, offline conversion, enhanced conversions, dan imported CRM outcomes. Event definition, count setting, value, attribution window, consent, deduplication, tag implementation, dan QA wajib disepakati sebelum optimasi.

**Simulated example:** SIMULATED — form submit dihitung sebagai primary conversion, tetapi 40% leads adalah spam/duplikat dan sales qualified rate rendah. Bidding mengejar form volume, bukan pipeline value. CRM qualification/offline conversion perlu dikirim secara tepat dengan governance.

**Technical depth / workflow:**
- Definisikan action. Pilih primary/secondary, counting method, value, source, owner, dan window.
- Map implementation. Tetapkan tag/event, trigger, parameter, consent, enhanced/offline conversion flow, serta deduplication.
- QA event. Uji expected vs actual, duplicates, missing values, cross-domain/redirect, mobile, and consent states.
- Reconcile business outcomes. Cocokkan platform conversions dengan CRM/sales/revenue dan catat delay/attribution differences.

**Practice / deliverable:** Buat conversion measurement spec untuk lead dan purchase: event name, trigger, parameters/value, tag owner, source of truth, consent, deduplication, QA test, offline import field, dan reconciliation plan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH08 — Search Terms Analysis, Quality Score & Impression Share

**Competency ID(s):** T04-C04, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | G: direct paid-search JD not located in this batch | D: SEA Executive career listing

**Learning objective / concept:** Diagnosis Search menggunakan search terms, auction insights, Quality Score components, impression share, landing-page signals, conversion rate, dan value. Quality Score adalah diagnostic indicator, bukan KPI bisnis atau tombol optimasi tunggal. Lost impression share karena budget berbeda dari rank. Analyst harus memisahkan issue query, competition, bid, relevance, page, tracking, dan budget sebelum membuat perubahan.

**Simulated example:** SIMULATED — campaign kehilangan impression share 25% karena rank, sementara budget tidak habis. Menambah budget bukan solusi utama; perlu mengecek bid strategy, ad relevance, expected CTR, landing experience, dan query relevance.

**Technical depth / workflow:**
- Segmentasikan hasil. Periksa brand/generic, query theme, device, geo, audience, hour, ad group, landing page, dan network.
- Diagnosis auction. Pisahkan lost IS budget vs rank; cek competition dan bid eligibility.
- Uji relevance. Review query-to-keyword, ad, landing page, conversion signal, dan user experience.
- Prioritaskan tindakan. Dampak, confidence, effort, dependency, dan guardrail menentukan urutan.

**Practice / deliverable:** Buat weekly search diagnosis report dengan segmentation, search term issues, lost IS, Quality Score components, LP issue, tracking check, root-cause hypotheses, prioritized actions, owner, dan follow-up date.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH09 — Testing, Optimization, Reporting & Diagnosis

**Competency ID(s):** T04-C05, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | G: direct paid-search JD not located in this batch | D: SEA Executive career listing

**Learning objective / concept:** Testing Search harus menguji satu hipotesis yang dapat dipisahkan dari perubahan lain. Variabel dapat berupa message angle, asset, landing page, match coverage, bid strategy, atau audience; test perlu primary metric, guardrail, randomization/experiment setup, sample/duration, seasonality control, dan stopping rule. Setelah test, interpretasikan effect size dan uncertainty, bukan hanya siapa yang tampak menang.

**Simulated example:** SIMULATED — dua RSA diluncurkan bersamaan dengan perubahan bidding dan LP. Conversion naik, tetapi tim tidak dapat mengidentifikasi penyebab. Test berikutnya mengisolasi creative angle sambil menjaga budget, targeting, dan page tetap stabil.

**Technical depth / workflow:**
- Tulis hipotesis. Hubungkan observation, change, audience, expected mechanism, primary KPI, dan guardrail.
- Rancang experiment. Tentukan control/treatment, randomization, split, time, sample, seasonality, dan contamination risks.
- Jalankan QA. Pastikan URLs, assets, conversion, budgets, and settings seimbang.
- Interpretasikan. Baca uncertainty, volume, segment effects, business value, dan keputusan scale/iterate/stop.

**Practice / deliverable:** Buat experiment backlog tiga test untuk Search: ad-message test, LP test, dan match/negative strategy test. Untuk satu test, lengkapi protocol, sample/duration assumptions, guardrails, QA, decision rule, dan results template.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T04-CH10 — Paid Search Capstone

**Competency ID(s):** T04-C03, T04-C06

**Agency evidence (role-level):** D: Paid Search Executive/Manager career listings | B/D: cross-channel digital roles; direct SEM JD still needed | D: SEM Specialist and Paid Search role listings | G: direct paid-search JD not located in this batch | D: SEA Executive career listing

**Learning objective / concept:** Capstone Paid Search menguji kemampuan mengelola jalur dari intent sampai conversion dan diagnosis. Paket kerja harus menyatukan keyword architecture, campaign build, RSA/assets, bidding/budget, conversion tracking, negative strategy, QA, reporting, dan optimization. Semua forecast atau data yang tidak berasal dari account aktual wajib ditandai SIMULATED. Hasil harus dijelaskan menurut intent dan economics, bukan hanya platform metrics.

**Simulated example:** SIMULATED — perusahaan SaaS B2B ingin menghasilkan demo request. Tim harus memisahkan branded/generic/competitor, menjaga query quality, menghubungkan form dengan qualification CRM, dan menilai biaya per qualified demo.

**Technical depth / workflow:**
- Frame brief. Tentukan business goal, target market, proposition, economics, lead quality, and constraints.
- Build campaign. Susun keyword, architecture, ads/assets, landing pages, bids, budgets, and tracking.
- QA dan monitor. Simpan test evidence, change log, delivery, query mining, and conversion reconciliation.
- Present insight. Jelaskan what changed, why, impact, uncertainty, recommendation, and next tests.

**Practice / deliverable:** Bangun Search case-study workbook: brief, intent map 30 keywords, architecture, RSA assets, negative list, bid/budget scenario, conversion spec, QA log, weekly report, 3 optimizations, dan executive summary.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 5. Paid Social / Biddable Social Specialist (`paidsocial`)

### DPA-T05-CH01 — Social Advertising Ecosystem & Account Structure

**Competency ID(s):** T05-C01

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | G: direct paid-social JD not located in this batch | G: direct paid-social JD not located in this batch

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

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | G: direct paid-social JD not located in this batch | G: direct paid-social JD not located in this batch

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

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | G: direct paid-social JD not located in this batch | G: direct paid-social JD not located in this batch

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

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | G: direct paid-social JD not located in this batch | G: direct paid-social JD not located in this batch

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

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | G: direct paid-social JD not located in this batch | G: direct paid-social JD not located in this batch

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

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | G: direct paid-social JD not located in this batch | G: direct paid-social JD not located in this batch

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

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | G: direct paid-social JD not located in this batch | G: direct paid-social JD not located in this batch

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

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | G: direct paid-social JD not located in this batch | G: direct paid-social JD not located in this batch

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

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | G: direct paid-social JD not located in this batch | G: direct paid-social JD not located in this batch

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

**Agency evidence (role-level):** D/A: Paid Social Manager/Executive and activation role listings | B/D: cross-channel performance roles; direct paid-social JD still needed | D: Paid Social Specialist/Manager role listings | G: direct paid-social JD not located in this batch | G: direct paid-social JD not located in this batch

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

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** Programmatic adalah pembelian inventory digital melalui platform dan automation, bukan nama lain untuk semua paid media. Ekosistem mencakup advertiser/agency, DSP, ad exchange, SSP, publisher/ad server, data/identity partners, dan verification. Setiap pihak memiliki peran dalam auction, targeting, delivery, measurement, dan biaya. Trader harus memahami supply chain untuk membaca fees, latency, quality, transparency, dan accountability.

**Simulated example:** SIMULATED — advertiser membeli 10 juta impressions melalui DSP. Bid request melewati exchange dan SSP sebelum publisher ad server; beberapa intermediary menambah fee dan memengaruhi latency. Trader harus mengetahui supply path dan net media cost, bukan hanya CPM di UI DSP.

**Technical depth / workflow:**
- Gambar supply chain. Petakan advertiser, agency, DSP, exchange, SSP, publisher, ad server, data, measurement, dan billing.
- Bedakan ownership. Tandai siapa mengelola demand, supply, auction, creative, identity, dan measurement.
- Map cost path. Pisahkan media cost, platform fee, data fee, verification, agency fee, dan publisher take rate.
- Hubungkan ke workflow. Ikuti brief hingga setup, auction, delivery, QA, report, dan invoice.

**Practice / deliverable:** Buat programmatic ecosystem diagram dan cost-flow workbook untuk satu campaign. Sertakan owner, object, data/signal, fee layer, risk, dan kontrol pada setiap node.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH02 — Auction Mechanics, OpenRTB & Supply Path

**Competency ID(s):** T06-C01

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** OpenRTB dan auction mechanics menjelaskan bagaimana bid request, impression opportunity, buyer response, price, dan creative diproses. Supply path menentukan rantai pihak yang terlibat dari publisher menuju DSP. Trader perlu memahami auction type, bid floor, timeout, win rate, clearing dynamics, deal identifiers, reseller, dan ads.txt/sellers.json sebagai sinyal otorisasi. Tidak semua mekanisme lelang bersifat first-price dengan implementasi identik.

**Simulated example:** SIMULATED — bid request tidak menghasilkan response karena timeout dan mismatch format. Campaign underspends meski bid tinggi. Diagnosis harus memeriksa deal eligibility, bid floor, supply path, creative spec, latency, dan targeting.

**Technical depth / workflow:**
- Pelajari request-response. Identifikasi impression, bid request, seat, device, user/context signals, bid response, creative, dan win/loss.
- Bedakan auction/deal. Pahami open auction, private auction/PMP, preferred deal, dan programmatic guaranteed.
- Audit supply path. Periksa seller authorization, direct/reseller, fees, duplicates, and inventory origin.
- Diagnosis auction. Analisis floor, timeout, bid rate, win rate, clearing price, and eligibility.

**Practice / deliverable:** Buat bid-flow diagram dan supply-path audit untuk dua inventory scenarios. Isi request signals, eligibility, auction/deal type, fee layers, authorized sellers checks, timeout risk, dan optimization actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH03 — Audience, Data Strategy, Identity & Privacy

**Competency ID(s):** T06-C02

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** Audience strategy programmatic menggabungkan first-party data, contextual, publisher segments, third-party data, identity solutions, dan privacy/consent. Audience targeting harus sesuai objective dan data rights. Cookie deprecation, browser restrictions, consent, match rates, data provenance, and identity interoperability dapat memengaruhi scale serta accuracy. Contextual targeting tidak sama dengan behavioral identity targeting.

**Simulated example:** SIMULATED — audience CRM seed match 35% pada DSP. Angka ini tidak berarti 65% audience tidak relevan; identity graph, formatting, consent, and addressability membatasi match. Tim perlu membandingkan contextual alternative dan reach loss.

**Technical depth / workflow:**
- Definisikan audience use case. Akuisisi, prospecting, suppression, retargeting, contextual reach, atau frequency control.
- Audit data provenance. Catat source, consent, collection purpose, freshness, match method, geography, and usage rights.
- Nilai identity coverage. Periksa match rate, device coverage, duplication, exclusions, and loss of addressability.
- Rancang privacy-safe alternatives. Gunakan contextual, publisher first-party, cohort/aggregate, and modeled signals sesuai policy.

**Practice / deliverable:** Buat audience decision matrix: first-party, contextual, publisher, and third-party options. Sertakan reach/match assumption, consent basis, quality risks, freshness, cost, and use-case fit.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH04 — Inventory, Formats & Deal Types

**Competency ID(s):** T06-C03

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** Inventory mencakup format, device, environment, publisher, geo, audience, placement, viewability, fraud risk, and suitability. Deal types memberi tingkat kontrol dan komitmen berbeda. Trader perlu menilai inventory fit, scale, measurement eligibility, creative constraints, and cost. CTV, audio, video, display, native, in-app, DOOH, and mobile web memiliki kebutuhan asset, verification, and measurement berbeda.

**Simulated example:** SIMULATED — brand finance tidak cocok ditempatkan pada open exchange tanpa context controls; premium finance publisher memberikan relevansi lebih baik tetapi scale lebih kecil. Mix dapat menggabungkan contextual/PMP dengan open auction yang diverifikasi.

**Technical depth / workflow:**
- Klasifikasikan inventory. Map format, device, environment, publisher, geography, placement, and audience.
- Nilai suitability. Periksa brand safety, category exclusions, content adjacency, IVT, viewability, and transparency.
- Pilih deal type. Cocokkan reach/control/price/guarantee dengan campaign goal.
- Validasi creative compatibility. Cek dimensions, ratio, duration, codec, click behavior, audio, and fallback.

**Practice / deliverable:** Buat inventory matrix minimal enam opsi (display, video, CTV, audio, native, in-app atau DOOH) dengan format specs, deal type, audience, quality checks, cost assumptions, and use-case rationale.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH05 — DSP Architecture & Platform Navigation

**Competency ID(s):** T06-C01, T06-C04

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** DSP navigation dimulai dengan memahami hirarki advertiser, campaign, insertion order/order, line item, targeting, creative, budget, flight, frequency, and optimization. Nomenclature antar-DSP berbeda; prinsip dasarnya tetap sama. DV360 menjadi platform utama belajar di roadmap, sedangkan The Trade Desk dan Amazon DSP dibandingkan pada capability serta inventory ecosystem. Tool access bergantung pada organisasi/partner dan tidak boleh dijanjikan hanya dari kursus.

**Simulated example:** SIMULATED — trader membuat line item dengan wrong exchange/format targeting sehingga budget tidak deliver. Setup perlu dikontrol melalui campaign map, naming, deal/creative compatibility, audience, and QA before activation.

**Technical depth / workflow:**
- Kenali hierarchy. Petakan advertiser/campaign/order/line item/creative/deal sesuai platform.
- Konfigurasi campaign. Set objective, flight, budget, bid, geo, audience, frequency, inventory, and conversion signals.
- Kelola naming dan permissions. Gunakan taxonomy, role access, approval, and change log.
- Verifikasi platform access. Bedakan credential, demo/sandbox, partner seat, managed access, dan live buying permissions.

**Practice / deliverable:** Buat DSP setup workbook untuk satu campaign: object hierarchy, naming, budgets, bids, audiences, inventory/deals, creatives, tracking, permissions, launch checklist, and monitoring cadence.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH06 — Campaign Structure, Trafficking & Creative Setup

**Competency ID(s):** T06-C04

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** Campaign setup/trafficking memastikan plan dapat diterjemahkan menjadi objek dan creative yang siap diperdagangkan. Brief, naming, IO/line item, deal IDs, audience, creative spec, click URL, trackers, macros, event tags, and approvals harus sinkron. Trafficking berbeda dari media strategy: tugasnya menjaga akurasi konfigurasi dan bukti QA, bukan menentukan seluruh business strategy.

**Simulated example:** SIMULATED — deal ID aktif tetapi creative tidak memenuhi format/SSL dan click macro salah. Campaign terlihat configured tetapi tidak eligible atau salah mengarahkan traffic. Pre-launch QA harus menguji actual rendering dan click path.

**Technical depth / workflow:**
- Terima final brief. Cocokkan plan, targeting, format, dates, budget, KPI, owner, and approval.
- Bangun trafficking map. Hubungkan campaign/line item/deal/creative/tracker/landing page secara konsisten.
- Validasi spec dan macros. Periksa dimensions, VAST/HTML5, SSL, click/impression trackers, URL encoding, and fallbacks.
- Jalankan end-to-end QA. Simulasikan ad request, landing page, event firing, and platform acceptance.

**Practice / deliverable:** Buat trafficking sheet, creative spec matrix, macro/URL map, tag map, deal checklist, and QA evidence for one synthetic DSP campaign.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH07 — Bidding, Budget, Pacing & Frequency Management

**Competency ID(s):** T06-C05, T06-C07

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** Bidding, budget, pacing, and frequency management mengontrol delivery dalam batas economics dan campaign objective. Pahami bid strategy, auction pressure, bid shading where relevant, win rate, clearing price, pacing algorithm, frequency caps, reach, and spend curve. Jangan mengubah bid/budget tanpa memeriksa inventory, audience, floor, conversion signals, and campaign stage. Platform automation berbeda sehingga jangan menganggap satu setting berlaku sama di seluruh DSP.

**Simulated example:** SIMULATED — campaign spend hanya 40% dari budget setelah 3 hari. Peningkatan bid mungkin membantu bila lost auctions karena price, tetapi tidak bila deal not eligible, creative rejected, audience terlalu sempit, atau supply timeout.

**Technical depth / workflow:**
- Establish pacing baseline. Bandingkan budget, elapsed flight, planned spend curve, actual spend, impressions, and outcome.
- Diagnose delivery. Pisahkan price, inventory, audience, creative, deal, bid request, tracking, and approval issues.
- Optimize frequency. Nilai unique reach, average frequency, segment saturation, and cross-device duplication.
- Control changes. Catat bid/budget changes, rationale, observation window, guardrails, and rollback criteria.

**Practice / deliverable:** Buat pacing simulator harian dengan planned vs actual spend, bid, win rate, CPM, frequency, reach, and outcomes. Simulasikan underdelivery, overspend, and fatigue; dokumentasikan root-cause decisions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH08 — PMP, Preferred Deals & Programmatic Guaranteed

**Competency ID(s):** T06-C03

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** PMP, Preferred Deals, dan Programmatic Guaranteed mengubah cara advertiser mengakses publisher inventory dan menyepakati harga/delivery. Setiap deal memiliki buyer/seller IDs, deal ID, floor/fixed price, targeting, dates, format, priority, inventory scope, and delivery terms. Trader wajib menguji compatibility dan memahami apakah deal bersifat invitation, non-guaranteed, atau guaranteed; label platform dapat berbeda.

**Simulated example:** SIMULATED — publisher menawarkan PMP dengan floor CPM Rp45.000 dan forecast 2 juta impressions. Campaign mengaktifkan deal ID, tetapi buyer menggunakan seat yang salah. Tidak ada delivery meski bid kompetitif; deal ID/seat mapping harus di-verify.

**Technical depth / workflow:**
- Bandingkan deal type. Pelajari access, auction, price, inventory commitment, priority, and delivery guarantee.
- Negosiasikan scope. Tetapkan format, audience, geo, floor/price, dates, volume, reporting, and cancellation/makegood terms.
- QA deal activation. Verifikasi buyer seat, seller, deal ID, line item, targeting, creative, and inventory eligibility.
- Monitor deal delivery. Pantau bid requests, matches, wins, spend, quality, and underdelivery.

**Practice / deliverable:** Buat deal negotiation matrix dan activation checklist untuk PMP, Preferred, dan PG. Isikan seller/buyer seat, deal ID, floor/price, volume, formats, dates, targeting, guarantee, QA, and delivery escalation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH09 — Brand Safety, Viewability, IVT & Supply Quality

**Competency ID(s):** T06-C06

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** Brand safety, suitability, viewability, invalid traffic, and supply quality adalah dimensi berbeda. Brand safety menghindari konten berisiko; suitability mencocokkan toleransi brand; viewability mengukur apakah iklan memenuhi kriteria terlihat; IVT mengidentifikasi traffic tidak valid; supply quality menilai transparency, duplication, fees, and publisher quality. Vendor verification memiliki methodology/coverage yang harus dipahami.

**Simulated example:** SIMULATED — report menunjukkan 70% viewable impressions, tetapi 8% IVT dan beberapa placement melanggar suitability. Viewability tinggi tidak membuat campaign aman atau efektif; metrics harus dibaca bersama dan coverage dilaporkan.

**Technical depth / workflow:**
- Definisikan metrics. Catat viewability standard, eligible/measured impressions, IVT definitions, brand-safety taxonomy, and exclusions.
- Set controls. Gunakan inclusion/exclusion lists, category/content controls, seller transparency, and verification partners.
- Audit supply quality. Periksa domain/app, ads.txt/sellers.json, reseller paths, fees, duplication, and reporting gaps.
- Interpret coverage. Pisahkan unmeasured from failed, disclose vendor coverage, and escalate anomalies.

**Practice / deliverable:** Buat supply-quality scorecard untuk 10 inventory sources: brand safety, suitability, viewability, IVT, seller authorization, fees, transparency, data coverage, and remediation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH10 — CM360, Floodlight, Attribution & Measurement

**Competency ID(s):** T06-C01, T06-C06

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** CM360 dan Floodlight memiliki peran ad-serving dan measurement yang perlu dibedakan dari DSP reporting. CM360 mengelola advertiser/campaign/site/placement/ad/creative/trackers; Floodlight mengukur activities/conversions menurut counting method, attribution, and window. Discrepancy antara DSP, CM360, dan analytics sering muncul dari event definition, time zone, click/view windows, deduplication, redirects, latency, and consent.

**Simulated example:** SIMULATED — DSP mencatat 900 conversions, CM360 760 Floodlight activities, GA4 620 purchases. Angka tidak dapat dibandingkan sebelum unit event, window, dedupe, timezone, consent, and transaction IDs disejajarkan.

**Technical depth / workflow:**
- Map tracking roles. Bedakan impression/click trackers, ad server, Floodlight activity, GA4 events, pixel/CAPI, and UTM.
- Define conversion. Tentukan activity type, counting method, value, window, deduplication, and source of truth.
- QA integration. Test tags, redirects, macros, event IDs, consent states, and platform logs.
- Reconcile discrepancy. Align timezone/cutoff/window, compare eligible events, and document residual difference.

**Practice / deliverable:** Buat measurement architecture diagram dan discrepancy reconciliation workbook yang membandingkan DSP, CM360/Floodlight, dan GA4. Include event mapping, window, timezone, dedupe, consent, and limits.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH11 — Optimization, Reporting & Post-Campaign Analysis

**Competency ID(s):** T06-C07

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** Optimization dan post-campaign review mengevaluasi bukan hanya ROAS, tetapi delivery, supply quality, reach, frequency, margin, partner fees, audience, format, and incrementality limits. Report harus menjelaskan apa yang terjadi, mengapa diduga terjadi, bukti pendukung, alternatif penjelasan, dan tindakan berikutnya. Programmatic trader menjaga traceability perubahan agar learning dapat direplikasi.

**Simulated example:** SIMULATED — open auction memberikan CPM rendah tetapi IVT tinggi dan conversion quality rendah; PMP lebih mahal tetapi engagement dan incrementality test lebih baik. Keputusan mengubah mix harus membandingkan net cost dan kualitas outcome.

**Technical depth / workflow:**
- Read performance by dimension. Slice by DSP, deal, publisher, placement, format, audience, device, geo, and creative.
- Separate delivery and outcome. Reconcile spend/impressions with viewability, IVT, reach, conversions, and contribution.
- Generate hypotheses. Distinguish evidence, interpretation, confidence, and alternative cause.
- Recommend optimizations. Set action, expected mechanism, budget impact, guardrail, owner, and review date.

**Practice / deliverable:** Buat post-campaign report dan supply evaluation: delivery, spend, CPM, reach/frequency, viewability, IVT, deal quality, discrepancy, outcome, optimization changes, and next test agenda. Labeli data SYNTHETIC.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T06-CH12 — Programmatic Capstone

**Competency ID(s):** T06-C01, T06-C03, T06-C06, T06-C07

**Agency evidence (role-level):** A/D: Programmatic Manager/Senior Manager JDs and career listings | A: Media Planner, Programmatic JD | D: Programmatic roles and platform activation listings | G: direct JD not located in this batch | D: Trader Programmatique career listing

**Learning objective / concept:** Capstone Programmatic menguji pemahaman supply chain hingga measurement, bukan hanya navigasi DSP. Paket kerja harus menghubungkan objective, audience, inventory/deal strategy, DSP setup, creative/trafficking, bidding/pacing, verification, CM360/Floodlight, discrepancy, dan reporting. Seluruh account/campaign/auction figures yang tidak berasal dari live account diberi label SIMULATED. Akses credential tidak berarti peserta memiliki live buying seat.

**Simulated example:** SIMULATED — brand e-commerce ingin reach dan qualified purchase di Indonesia. Capstone menyusun mix open auction, PMP, dan retail data signals, tetapi menguji inventory quality, tracking, conversion quality, dan cost path sebelum merekomendasikan scale.

**Technical depth / workflow:**
- Design strategy. Tetapkan audience, objective, channel role, inventory, deal, and success metrics.
- Build and QA. Rancang DSP hierarchy, line items, creatives, tags, tracking, and launch checks.
- Trade and monitor. Simulasikan bid/pacing/frequency/quality issues dan change log.
- Measure and defend. Rekonsiliasi data, jelaskan limitations, lalu rekomendasikan next investment.

**Practice / deliverable:** Siapkan DSP campaign blueprint, supply-chain diagram, audience/data matrix, deal matrix, trafficking sheet, bidding/pacing simulator, verification scorecard, CM360/Floodlight measurement spec, discrepancy log, dan executive trading recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Petakan ecosystem. Identifikasi retailer, network, advertiser, platform, seller, agency, data, inventory, and reporting owner.
- Kelompokkan media. Bedakan onsite, offsite, in-store, sponsored search/product, display, video, and retail data activation.
- Audit access dan measurement. Periksa eligibility, seller account, product feed, reporting, conversion window, and sales source.
- Hubungkan ke shopper journey. Petakan discovery, consideration, comparison, add-to-cart, purchase, repeat, and store visit.

**Practice / deliverable:** Buat retail media ecosystem map untuk satu kategori Indonesia: Shopee, Tokopedia/TikTok Shop, Lazada, atau Blibli sesuai akses produk. Tandai onsite/offsite/in-store, buyer, seller, data owner, metrics, dan limitations.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Map shopping task. Definisikan category entry, comparison, product evaluation, purchase, fulfillment, and repeat.
- Audit signals. Bedakan query/search, browse, product detail, cart, sale, loyalty, review, and availability.
- Segment shoppers. Kelompokkan new-to-brand, category buyers, loyalists, lapsed, and high-intent audiences jika platform mendukung.
- Translate insight. Pilih content, product listing, sponsored placement, offer, and next action.

**Practice / deliverable:** Buat shopper journey untuk satu kategori dan peta intent signals ke stage. Sertakan listing/review/availability issues, media opportunities, metrics, and evidence gaps.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Map platform products. Catat sponsored product/search, display, video, onsite placements, offsite, and audience solutions.
- Audit account eligibility. Periksa seller/brand status, catalog/SKU, billing, geo, campaign type, and access roles.
- Compare buying model. Bedakan self-service auction, managed campaign, reserved placement, and retailer program terms.
- Check current taxonomy. Verifikasi nomenclature, migration notices, limits, and measurement from provider documentation.

**Practice / deliverable:** Buat platform comparison untuk tiga RMN/marketplace aktif yang dapat diakses: ad types, seller/advertiser eligibility, placement, billing, targeting, reporting, conversion measurement, and documentation link. Cantumkan last-checked date.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Audit product readiness. Periksa title, image, description, attributes, category, price, stock, shipping, rating, review, and buy box/listing status.
- Rancang sponsored placement. Pilih SKU, keyword/search target, budget, bid, placement, and campaign objective.
- Monitor product-level results. Segmentasikan by SKU, query, placement, sales, margin, ACoS/ROAS, and new-to-brand if available.
- Optimasi listing dan bid. Bedakan media issue dengan product-page issue; document test and change.

**Practice / deliverable:** Buat onsite retail campaign plan untuk lima SKU: product readiness audit, keyword/product target, campaign structure, bid/budget assumptions, negative/exclusion logic, sales metrics, and listing improvement backlog.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Define offsite use case. Prospecting, retargeting, category expansion, or loyalty activation.
- Audit audience activation. Periksa provider data, eligibility, consent, clean-room/partner terms, match and reach.
- Set measurement rules. Definisikan sales window, eligible transactions, control/treatment, coverage, fee, and deduplication.
- Reconcile outcomes. Compare delivery, matched sales, platform attribution, and incremental evidence.

**Practice / deliverable:** Buat offsite retail media plan: audience source, activation channel, data governance, placements, measurement approach, match coverage assumption, control design, cost, and limitations.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH06 — Retail Audience, First-Party Data & Targeting

**Competency ID(s):** T07-C02, T07-C04

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** In-store media menghubungkan shopper experience fisik dengan digital commerce melalui screen, audio, shelf signage, kiosk, sampling, QR, and proximity-based placements. Perencanaan membutuhkan store list, footfall, dwell/traffic, shopper segment, inventory, store operations, installation, uptime, creative spec, proof-of-play, and sales/brand measurement. Jangan menganggap impression di toko setara dengan audience unik tanpa metodologi.

**Simulated example:** SIMULATED — screen di 50 toko melaporkan 1 juta plays, tetapi sebagian perangkat offline dan footfall estimates berasal dari periode berbeda. Proof-of-play dan store-level sales data harus divalidasi sebelum mengklaim reach.

**Technical depth / workflow:**
- Map store inventory. Catat screen/location, store tier, footfall source, operating hours, audience, and availability.
- Design shopper activation. Tentukan format, daypart, creative, sampling/QR, promo, and store staff roles.
- Set proof and QA. Minta proof-of-play, uptime, photo evidence, placement map, and installation confirmation.
- Measure responsibly. Link sales/footfall with store/control, time window, and external influences.

**Practice / deliverable:** Buat in-store plan untuk 20 toko: store selection, inventory, audience, placement map, flight, creative spec, proof-of-play, store ops checklist, measurement, and sales-lift caveats.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH07 — Product Feed, Digital Shelf & Retail Readiness

**Competency ID(s):** T07-C04

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Retail audience and first-party data digunakan untuk membuat segment seperti category buyers, loyalty members, lapsed purchasers, new-to-brand, high-value, and product affinities. Targeting bergantung pada taxonomy retailer, match coverage, scale, privacy, and platform controls. Audience strategy harus seimbang antara precision dan reach; segment terlalu kecil dapat menaikkan CPM, membatasi delivery, atau membuat hasil tidak stabil.

**Simulated example:** SIMULATED — segment loyalty top spenders hanya 15 ribu users dan CPM tinggi. Broad category buyers mencapai 1,2 juta; strategi dapat memakai broad prospecting lalu retargeting loyalists dengan offer yang berbeda.

**Technical depth / workflow:**
- Define segment logic. Tulis transaction window, category/product, recency/frequency/value, loyalty, and exclusions.
- Audit scale and match. Periksa eligible users, match rate, refresh cadence, overlap, and suppression.
- Align activation. Pilih placement, message, offer, and bid sesuai segment intent/value.
- Govern data. Document consent, retention, purpose, access, and platform limitations.

**Practice / deliverable:** Buat retail audience taxonomy untuk prospecting, new-to-brand, repeat, lapsed, and high-value segments. Sertakan logic, window, scale/match caveat, activation, suppression, and measurement.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T07-CH08 — Campaign Activation, Bidding & Optimization

**Competency ID(s):** T07-C05

**Agency evidence (role-level):** D/A: Retail DSP, Retail Search and Commerce roles | D: Retail Media Lead title evidence; full JD required | D: Retail Search/Commerce roles and career-index evidence | A: Jakarta eCommerce Executive covers marketplace advertising, retail media and affiliate ecosystems | D: Director of Retail Media employer-attributed LinkedIn posting covers retail DSP, retailer data and activation

**Learning objective / concept:** Retail activation dan optimization menggabungkan campaign configuration, product/feed readiness, bid/budget, placement, query, product availability, pricing, promotion, reviews, and sales signals. Optimasi dilakukan pada level retailer, campaign, keyword, placement, and SKU. Perubahan bid harus dibandingkan dengan stock/price/promo agar kenaikan sales tidak salah diatribusikan ke media.

**Simulated example:** SIMULATED — ROAS turun setelah seller menaikkan price dan stock-out pada dua SKU terlaris. Mengurangi bid pada seluruh account justru dapat merugikan SKU yang tetap tersedia. Segmentasikan dan koordinasikan media dengan merchandising/ops.

**Technical depth / workflow:**
- Setup activation. Validasi seller/account, SKU/catalog, target, placement, budget, bid, dates, and creative.
- Monitor retail levers. Check spend, impressions, clicks, CPC, orders, sales, ACoS/ROAS, stock, price, promo, and rating.
- Diagnose product vs media. Pisahkan ad delivery, search rank, product page, price/availability, and competitor action.
- Run controlled changes. Catat SKU/target/bid change, observation window, guardrail, and retail-team dependency.

**Practice / deliverable:** Buat retail optimization log dari data SIMULATED 14 hari: per SKU/query, bid, spend, clicks, sales, stock, price, promo, rating, ACoS, root cause, action, and result.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Define sales basis. Bedakan gross/net, attributed sales, returns, cancelled orders, brand vs category, new-to-brand, and margin.
- Reconcile data. Align date, SKU, currency, tax, attribution window, campaign, and reporting latency.
- Assess incrementality. Design holdout/geo test if eligible; document limitations and sample.
- Translate into decision. Evaluate incremental contribution, inventory, price, channel, and next budget.

**Practice / deliverable:** Buat retail effectiveness dashboard spec dan analysis memo: spend, attributed sales, ACoS/ROAS, margin, returns, new-to-brand, stock, match coverage, and incrementality test design.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Frame category problem. Tentukan shopper, product, retailer, commercial objective, stock, price, and distribution.
- Design media architecture. Pilih onsite/offsite/in-store, audience, SKU, budget, flight, and channel roles.
- Specify activation/governance. Siapkan feed/listing, bidding, store ops, access, creative, tracking, and QA.
- Measure economics. Reconcile ad sales, margin, returns, stock, and incrementality; define next decision.

**Practice / deliverable:** Siapkan retail media strategy 90 hari plus workbook: retailer comparison, shopper journey, SKU readiness, inventory/placement matrix, audience segments, budget scenarios, campaign setup, measurement, sales/margin dashboard, and recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Petakan ecosystem. Identifikasi media owner, sales house, publisher rep, agency investment, trading desk, and Ad Ops.
- Kelompokkan buying route. Bedakan direct IO, sponsorship, reserved inventory, network, deal, dan auction-based buying.
- Tentukan commercial criteria. Audience, placement, rate, availability, reach, quality, bonus, and measurement.
- Document accountability. Catat approval, owner, contract, cancellation, delivery, proof, and invoice.

**Practice / deliverable:** Buat media owner landscape dan buying route map untuk satu kategori. Tulis siapa pemilik inventory, siapa bernegosiasi, siapa approve, siapa traffick, serta bukti delivery/billing yang dibutuhkan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Collect media evidence. Minta media kit, audience profile, traffic/reach, format, dates, availability, and measurement source.
- Normalize units. Samakan unique users, impressions, page views, GRP, circulation, duration, geography, and time window.
- Assess value. Nilai audience quality, context, attention, exclusivity, delivery guarantee, and cost.
- Record caveats. Tandai unverified claims, methodology gaps, and negotiated terms.

**Practice / deliverable:** Buat publisher inventory scorecard untuk lima opsi dengan audience, reach definition, format, quality, availability, rate, value-add, verification, methodology, dan recommended use.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Draft RFP. Masukkan scope, KPI, audience, inventory, timeframe, deliverables, required data, and response format.
- Set evaluation criteria. Tentukan must-have, weighted score, commercial, audience, quality, and execution risk.
- Normalize quote. Pisahkan gross/net, discount, bonus, agency fee, production, tax, cancellation, and makegood.
- Record clarification. Minta jawaban tertulis untuk exclusions, assumptions, and delivery commitments.

**Practice / deliverable:** Buat RFP template dan proposal comparison untuk tiga publisher. Sertakan standardized fields, weighted scoring, commercial normalization, clarification log, and recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Normalize benchmark. Samakan format, placement, date, target, unit, volume, currency, and billable basis.
- Segment pricing. Pisahkan premium, ROS, sponsorship, fixed, CPM, CPC, CPP, and bundle.
- Assess total value. Sertakan discount, added value, production, data, measurement, and operational fee.
- Set benchmark confidence. Catat sample size, source, age, market, and negotiation context.

**Practice / deliverable:** Buat benchmark workbook dengan lima publisher packages. Hitung net CPM/cost per reach, total cost, bonus value, unit comparability, benchmark confidence, and recommended negotiation anchor.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Prepare negotiation. Tentukan objective, walk-away, target, BATNA, volume, timing, and leverage.
- Prioritize terms. Negosiasikan rate, audience, position, exclusivity, added value, cancellation, makegood, and reporting.
- Quantify concessions. Hitung nilai/impact concession dan cek apakah deliverable benar-benar useful.
- Document agreement. Catat final terms, validity, approver, responsibilities, and escalation.

**Practice / deliverable:** Buat negotiation plan dan value tracker: target/limit, BATNA, concessions, added value, contract terms, risk, approval, and post-negotiation summary. Simulasikan vendor negotiation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Draft IO. Isi legal entities, campaign, inventory, format, dates, volume, rates, fees, and currency.
- Check delivery terms. Bedakan guaranteed, estimated, bonus, value-add, and billable impressions.
- Review clauses. Periksa cancellation, makegood, creative deadlines, tracking, reporting, payment, privacy, and rights.
- Secure approval. Cocokkan budget approval, signatures, version, and booking confirmation.

**Practice / deliverable:** Buat IO checklist dan sample order form untuk campaign latihan. Bandingkan negotiated terms dengan signed IO dan trafficking sheet; tandai discrepancy/approval exceptions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Set delivery tracker. Catat booking, placement, volume, schedule, rate, and evidence owner.
- Monitor proof. Periksa proof-of-posting/play, screenshots, log, photos, affidavit, and schedule.
- Quantify shortfall. Hitung gap dengan agreed tolerance dan billable basis.
- Claim remediation. Ajukan makegood/refund/credit sesuai clause, deadline, and client approval.

**Practice / deliverable:** Buat delivery tracker dan proof checklist untuk tiga publisher. Simulasikan underdelivery 12%; hitung shortfall, bukti yang diperlukan, makegood options, dan client communication.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Match documents. Cocokkan IO/contract, amendments, invoice, delivery report, and proof.
- Recalculate. Cek unit × rate, discount, tax, currency, agency fee, production, bonus, and makegood.
- Investigate variance. Kategorikan billing error, delivery gap, FX/tax, scope change, or legitimate add-on.
- Close with controls. Dapatkan correction/credit note, approvals, audit trail, and archive.

**Practice / deliverable:** Buat reconciliation workbook dari satu IO dan invoice sintetis. Gunakan line-item matching, formula checks, variance categories, evidence links, approval status, and payment recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Review commercial outcome. Bandingkan contracted/net cost, delivery, bonus, fees, and makegood.
- Assess audience/value. Periksa reach quality, duplication, context, premium placements, and outcome evidence.
- Build partner scorecard. Nilai reliability, responsiveness, transparency, value, and compliance.
- Recommend next deal. Tetapkan renewal, renegotiation, alternative partner, or escalation.

**Practice / deliverable:** Buat media investment review satu kuartal: vendor scorecard, rate/value history, delivery, quality, audience overlap, discrepancy, recommendation, and negotiation agenda.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Source and evaluate. Buat longlist media owner, inventory, audience, rates, and fit.
- Negotiate and contract. Bangun RFP, comparison, negotiation plan, and signed IO.
- Steward delivery. Track creative, timing, proof, shortfall, and remediation.
- Reconcile and review. Close invoice, score partner, and recommend investment next cycle.

**Practice / deliverable:** Siapkan complete buying pack: media owner map, RFP, proposal comparison, negotiation plan, signed-style IO sample, trafficking handoff, delivery/proof tracker, reconciliation workbook, and investment review deck.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 9. Ad Operations / Digital Campaign Operations (`adops`)

### DPA-T09-CH01 — Digital Ad Tech & Campaign Delivery Ecosystem

**Competency ID(s):** T09-C01

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | G: direct JD not located in this batch | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Ad Operations menghubungkan media plan, platform/ad server, publisher, creative, tracking, verification, dan analytics. Tugas utamanya memastikan campaign dikonfigurasi, ditayangkan, dilacak, dan direkonsiliasi dengan benar—bukan menetapkan seluruh audience strategy atau budget allocation. Ekosistem dapat meliputi Google Ads, Meta, TikTok, LinkedIn, DV360, CM360, retailer platforms, dan direct publisher placements. Scope kerja mengikuti platform yang dipakai klien.

**Simulated example:** SIMULATED — campaign paid social, programmatic, dan publisher display menggunakan naming/UTM/tracking berbeda. Ad Ops membuat operation map agar creative, URL, pixels, CM360 tags, dates, approvals, and reporting definitions konsisten.

**Technical depth / workflow:**
- Map ecosystem. Identifikasi advertiser, ad platform, ad server, publisher, tracker, analytics, verification, and owner.
- Define operation boundary. Pisahkan media strategy/buying dari trafficking, technical setup, QA, monitoring, and reconciliation.
- Set governance. Tentukan naming, permission, approval, version control, change log, and evidence requirements.
- Plan handoff. Pastikan brief, assets, dates, URLs, tracking, targeting, and budget final sebelum activation.

**Practice / deliverable:** Buat cross-platform Ad Ops ecosystem diagram untuk satu campaign: platform roles, ad server, tags/pixels, publisher, verification, ownership, approvals, and evidence trail.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH02 — Campaign Brief, Trafficking Sheet & Naming Taxonomy

**Competency ID(s):** T09-C02

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | G: direct JD not located in this batch | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Campaign brief dan trafficking sheet adalah single source of truth operasional. Setiap object perlu advertiser/client, campaign, platform/publisher, placement/ad set/line item, creative, format, URL, click tracker, pixel/event, targeting, flight, budget, owner, approval, dan status. Naming taxonomy harus memudahkan identifikasi sekaligus kompatibel dengan reporting; jangan menaruh data pribadi di parameter atau URL.

**Simulated example:** SIMULATED — brief menyebut 'campaign launch minggu depan' tanpa final landing URL, creative IDs, tracking owner, or signed approval. Ad Ops perlu mengembalikan blocker list sebelum setup, bukan mengarang detail.

**Technical depth / workflow:**
- Read the approved brief. Ekstrak objective, platform, markets, dates, budget, assets, audience, tracking, and KPI.
- Build object map. Tentukan hierarchy sesuai platform dan relasi campaign/placement/creative/tag.
- Apply taxonomy. Gunakan naming yang memuat brand, market, objective, platform, format, audience, flight, and version.
- Validate completeness. Gunakan required-field checks, owner, approval, dependency, and status.

**Practice / deliverable:** Buat trafficking sheet lintas Meta, Google, TikTok, dan direct placement dengan IDs, names, asset specs, URLs, tags, flight, budget, targeting, owners, approval, and status.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH03 — Creative, Placement & Technical Specifications

**Competency ID(s):** T09-C03

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | G: direct JD not located in this batch | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Creative and placement specifications memastikan asset diterima dan dirender sesuai environment. Periksa dimensions, aspect ratio, file size, format, duration, codec, frame rate, audio, click URL, SSL, safe zone, HTML5, fallbacks, responsive behavior, and platform policy. Spec berubah; selalu cek halaman resmi platform/publisher dan tanggal. Asset approved secara brand belum tentu technically eligible.

**Simulated example:** SIMULATED — satu video 9:16 memiliki file size melebihi limit dan CTA tertutup safe zone; upload gagal atau tampil terpotong. Ad Ops memvalidasi spec sebelum creative delivery deadline.

**Technical depth / workflow:**
- Identify placements. Catat platform, format, dimensions, ratio, duration, size, and technical requirements.
- Check rendering. Periksa mobile/desktop, safe zones, subtitle/audio, text legibility, responsive layout, and fallback.
- Validate click path. Test URL, redirects, parameters, SSL, deep link, and landing experience.
- Store evidence. Simpan spec version/date, preview screenshot, rejection notes, and approval.

**Practice / deliverable:** Buat creative spec matrix untuk 6 placements (display, video, story/reel, native, HTML5, retailer sponsored content). Sertakan sumber resmi, date checked, file limits, CTA, safe zones, fallback, and QA status.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH04 — Tags, Pixels, UTMs & Click Trackers

**Competency ID(s):** T09-C04

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | G: direct JD not located in this batch | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Tagging dan tracking memiliki fungsi berbeda. Platform pixel/SDK/CAPI merekam events; UTM memberi label traffic; ad-server placement tag memanggil creative/delivery; click tracker merekam click redirect; impression tracker mengukur exposure; Floodlight mengukur activity di Campaign Manager 360. Ad Ops harus mengetahui siapa memasang, siapa memverifikasi, data apa yang dikirim, consent dependency, and deduplication.

**Simulated example:** SIMULATED — UTM ditambahkan ke URL tetapi purchase pixel tidak terpicu. GA4 dapat membaca campaign source namun platform tidak menerima conversion signal; keduanya bukan pengganti satu sama lain.

**Technical depth / workflow:**
- Build tag map. Catat tag, function, platform, event, parameters, trigger, owner, and destination.
- Validate consent. Tentukan behavior untuk consent granted/denied sesuai implementation and legal requirements.
- Test firing. Gunakan Preview/Tag Assistant, pixel diagnostics, test events, click test, and network/tag evidence.
- Reconcile events. Check duplicates, missing events, parameters, identifiers, time zone, and attribution windows.

**Practice / deliverable:** Buat cross-platform tag map untuk Google tag/GA4, GTM, Meta Pixel/CAPI, TikTok Pixel/Events API, CM360/Floodlight, click/impression tracker, and UTM; sertakan QA cases.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH05 — CM360 Campaign, Placement, Ad & Floodlight Setup

**Competency ID(s):** T09-C03, T09-C05

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | G: direct JD not located in this batch | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Ad-server setup seperti CM360 menyusun advertiser, campaign, site, placement, ad, creative, and trackers. Placement mewakili inventory slot dan menghasilkan tag; ad mengontrol delivery/rotation; creative merupakan asset. Floodlight activities memakai counting method, activity group, value, and conversion window. Implementasi harus konsisten dengan naming, click tags, publisher requirements, and reporting.

**Simulated example:** SIMULATED — placement dibuat untuk 300×250 display namun ad creative dipasang 320×50. Publisher menerima tag tetapi tidak merender dengan benar. QA harus mencocokkan placement size, ad, creative, and tag.

**Technical depth / workflow:**
- Build hierarchy. Rancang advertiser/campaign/site/placement/ad/creative relationship.
- Define Floodlight. Tentukan activity, group, counting method, value, tag, and window sesuai business action.
- Generate and validate tags. Periksa placement tag, click tracker, SSL, publisher implementation guide, and macros.
- Test delivery. Simulasikan ad request/rendering, click, and conversion; catat publisher acceptance.

**Practice / deliverable:** Buat CM360 setup blueprint: advertiser, campaign, sites, placements, ads, creatives, Floodlight activity groups, counting methods, tags, and QA evidence. Labeli as design simulation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH06 — Pre-Launch QA, Testing & Go-Live Checklist

**Competency ID(s):** T09-C03, T09-C06

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | G: direct JD not located in this batch | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Pre-launch QA adalah quality gate sebelum campaign live. Checklist harus mencakup object setup, budget, flight, targeting, creative rendering, URL, redirects, tags/events, consent, policy, exclusions, frequency, geo, language, conversion settings, publisher acceptance, and sign-off. Upload success tidak berarti siap launch. Severity levels membantu menentukan blocker, major issue, and minor issue.

**Simulated example:** SIMULATED — campaign sudah active tetapi landing URL masih staging dan conversion event duplicate. QA harus menghentikan launch sampai blocker diselesaikan, bukan hanya mengirim screenshot campaign status.

**Technical depth / workflow:**
- Prepare test plan. Tulis expected/actual result untuk each field, event, creative, and placement.
- Execute end-to-end test. Check ad preview/render, click, landing, redirects, conversion, analytics, consent, and platform acceptance.
- Classify issues. Tentukan severity, impact, owner, due time, evidence, and retest.
- Obtain sign-off. Simpan approval dari media owner, client, creative, data, and campaign owner.

**Practice / deliverable:** Buat pre-launch QA checklist dengan 30 test cases, expected vs actual, severity, owner, evidence link, status, retest, and formal go/no-go decision.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH07 — Live Campaign Monitoring, Pacing & Troubleshooting

**Competency ID(s):** T09-C06

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | G: direct JD not located in this batch | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Live monitoring membandingkan planned dengan actual delivery dan memisahkan media issue dari tracking issue. Pantau spend, pacing, impressions, clicks, conversions, cost metrics, rejection, placement status, frequency, viewability/IVT, site errors, and reporting lag. Troubleshooting harus hirarkis: data signal, tag, creative, targeting, platform eligibility, inventory, budget/bid, and publisher—not langsung menaikkan spend.

**Simulated example:** SIMULATED — spend normal tetapi conversions turun mendadak. Klik dan landing sessions tetap normal, tetapi purchase event hilang setelah website release. Ini tracking/site issue, bukan bid atau audience problem.

**Technical depth / workflow:**
- Set monitoring cadence. Definisikan daily/weekly metrics, owner, thresholds, alert, and reporting time zone.
- Isolate symptoms. Bandingkan delivery, click, session, event, creative, placement, and CRM outcomes.
- Follow diagnostic tree. Periksa data/latency, tag/event, URL/page, creative, targeting, bid/budget, supply, and approvals.
- Record action. Simpan root-cause evidence, impact, mitigation, owner, and verification after fix.

**Practice / deliverable:** Buat monitoring dashboard/log dan troubleshooting tree untuk underdelivery, sudden spend spike, rejection, broken click URL, lost conversion event, and discrepancy.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH08 — Platform Discrepancy & Data Validation

**Competency ID(s):** T09-C06

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | G: direct JD not located in this batch | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Platform discrepancy muncul karena definisi event, click/impression filtering, attribution window, view-through, timezone, cut-off, consent, deduplication, latency, and identity berbeda. Ad Ops tidak boleh langsung menyebut salah satu sistem rusak sebelum membandingkan apples-to-apples. Reconciliation harus menyamakan scope, unit, date, event definition, and eligibility.

**Simulated example:** SIMULATED — Meta reports 120 purchase conversions, GA4 shows 96 sessions with purchase, CM360 reports 105 Floodlight activities. Differences may stem from attribution and dedupe; event map and transaction IDs are needed.

**Technical depth / workflow:**
- Define comparable scope. Samakan date, timezone, campaign, placement, event, device, and attribution window.
- Check processing. Review invalid traffic, consent, browser restrictions, event latency, duplicate, and redirects.
- Build reconciliation table. Compare each system's unit, count rule, source, and known exclusions.
- Explain residual variance. Separate resolved causes, plausible causes, and unverified differences.

**Practice / deliverable:** Buat discrepancy report tiga platform: data dictionary, event mapping, timezone/cutoff, click/view windows, dedupe, consent, latency, matched/unknown variance, and recommendations.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH09 — Billing Reconciliation, Documentation & Process Control

**Competency ID(s):** T09-C07

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | G: direct JD not located in this batch | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Billing reconciliation and process control menjaga kesesuaian booking, delivery, dan invoice. Ad Ops mengumpulkan IO, placement logs, rate, booked volume, billable basis, currency, tax, discount, bonus, makegood, platform fees, and proof. Finance controls perlu separation of duties, version history, access controls, and archive. Operational efficiency bukan berarti menghapus quality gates.

**Simulated example:** SIMULATED — vendor menagih 1 juta impressions tetapi proof delivery hanya 920 ribu. Contract menyebut 95% tolerance dan bonus impressions terpisah. Tim perlu menghitung shortfall dan memeriksa billable basis sebelum mengajukan credit.

**Technical depth / workflow:**
- Match financial records. Cocokkan IO, platform booking, delivery, invoice, rate, tax, fees, and proof.
- Recalculate billable. Pisahkan booked, delivered, bonus, makegood, tolerance, and chargeable volume.
- Govern process. Gunakan approver, access controls, change logs, naming, and archived evidence.
- Improve root process. Catat recurring issue, SLA, automation candidates, and control owner.

**Practice / deliverable:** Buat billing reconciliation pack untuk dua vendor: IO-vs-invoice, delivery proof, billable calculation, variance, adjustment, approval, audit trail, and process improvement memo.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T09-CH10 — Ad Operations Capstone

**Competency ID(s):** T09-C07

**Agency evidence (role-level):** D: Senior AdOps Specialist listings | G: direct JD not located in this batch | D: AdOps role families in career taxonomy | G: direct JD not located in this batch | B: data/media operations capability

**Learning objective / concept:** Capstone Ad Operations menyatukan operation chain multi-platform: brief, trafficking, creative spec, tags, ad-server/platform setup, QA, go-live, monitoring, troubleshooting, discrepancy, billing, and documentation. Keberhasilan dinilai dari accuracy, traceability, risk control, and timely delivery—not creative strategy or budget optimization. Setiap contoh account/data harus berlabel SIMULATED dan tidak menyiratkan akses live.

**Simulated example:** SIMULATED — agency menjalankan launch lintas Google, Meta, TikTok, DV360/CM360, dan satu publisher direct. Capstone memastikan object IDs, creative, tracking, approvals, reporting, and billing traceable.

**Technical depth / workflow:**
- Translate requirements. Ubah approved brief menjadi platform/object/owner/specification matrix.
- Build and validate. Siapkan trafficking, tags, URL, creative, tracking, and platform config.
- Launch and operate. Simulasikan go-live, monitor, issue triage, and escalation.
- Close and audit. Reconcile reporting/billing, archive evidence, and recommend control improvements.

**Practice / deliverable:** Siapkan operational case pack: master brief, cross-platform trafficking sheet, creative spec matrix, tag map, CM360/Floodlight design, QA evidence, go-live checklist, monitoring log, incident report, discrepancy reconciliation, invoice pack, and process review.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Frame the question. Ubah request menjadi keputusan spesifik, target population, unit, period, dan outcome.
- Build KPI tree. Pisahkan primary, diagnostic, leading, lagging, dan guardrail metrics.
- Define metric dictionary. Tulis formula, denominator, currency, time zone, attribution, source, refresh, dan owner.
- Set analysis plan. Tentukan data sources, segments, comparison, quality tests, dan expected decision.

**Practice / deliverable:** Buat measurement brief untuk pertanyaan bisnis 'apa yang mendorong kenaikan cost per qualified lead?'. Sertakan KPI tree, metric dictionary, analysis scope, segmentation, data owners, dan decision criteria.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Inventory source. Catat owner, access, refresh, scope, identifier, timezone, dan data limitations.
- Set taxonomy. Standarkan channel, source/medium, campaign, market, objective, creative, audience, and naming.
- Audit quality. Uji missing, duplicate, invalid values, date gaps, schema drift, currency, and outliers.
- Define lineage. Dokumentasikan extraction, transformation, join keys, aggregation grain, dan source of truth.

**Practice / deliverable:** Buat data source inventory dan QA audit untuk synthetic exports dari platform, GA4, CRM, dan ad server. Temukan duplicate, missing, invalid, date/currency mismatch, dan usulkan correction.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Read each data model. Petakan entity, event, session, impression, click, conversion, and parameter.
- Map definitions. Samakan event names, conversion rules, window, timezone, currency, and deduplication.
- Check extraction. Verifikasi API/export limits, sampling/thresholding, latency, and consent effects.
- Reconcile carefully. Bandingkan metric scope yang comparable dan dokumentasikan residual variance.

**Practice / deliverable:** Buat cross-platform metric mapping untuk Google Ads, Meta, TikTok, GA4, dan CM360. Sertakan event/metric definitions, attribution, time zone, deduplication, reporting grain, and known limitations.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Inspect dataset. Baca schema, grain, row count, key uniqueness, nulls, and data types.
- Write reproducible queries. Gunakan filter period, CTE, aggregate, join with explicit keys, and documented logic.
- Validate outputs. Reconcile row counts/totals before and after join; test edge cases and duplicates.
- Package analysis. Simpan query, assumptions, data dictionary, QA result, and reusable workbook.

**Practice / deliverable:** Buat workbook data QA dan SQL notebook dengan minimal 5 query: spend aggregation, CTR/CVR/CPA, JOIN spend-to-conversion, cohort summary, dan outlier check. Sertakan expected output dan test assertions menggunakan data SIMULATED.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Define user decisions. Tuliskan siapa yang membuka dashboard, pertanyaan, cadence, and action.
- Set semantic layer. Tetapkan metric definitions, dimensions, filters, date controls, and permissions.
- Design hierarchy. Executive summary, trend, drill-down, diagnosis, and action sections.
- QA dashboard. Test source totals, filters, refresh, access, mobile/desktop, color/accessibility, and labels.

**Practice / deliverable:** Buat dashboard wireframe dan data model untuk cross-channel campaign performance. Sertakan 5 KPI utama, 5 diagnostic views, filters, alert conditions, data freshness, and metric definitions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Describe the change. Ukur magnitude, start date, affected population, duration, and baseline.
- Decompose metrics. Pecah CPA menjadi cost/click/conversion rate; segment by channel, device, campaign, audience, and product.
- Develop hypotheses. Buat cause tree dan tentukan evidence yang mendukung/membantah tiap sebab.
- Verify cause. Cek logs, tags, product/price/stock, seasonality, and external changes before recommending.

**Practice / deliverable:** Buat diagnostic memo dari synthetic dataset yang menunjukkan satu KPI memburuk. Lakukan metric decomposition, segment analysis, hypothesis tree, evidence check, root cause confidence, and recommended action.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Map attribution rules. Catat model, click/view window, identity, channel coverage, and limitations.
- Define causal question. Tentukan treatment, control/counterfactual, outcome, population, and exposure.
- Select design. Pilih holdout/geo lift/A-B/brand lift/MMM berdasarkan data, scale, and feasibility.
- Translate to investment. Bandingkan cost, incremental contribution, uncertainty, and budget scenario.

**Practice / deliverable:** Buat attribution vs incrementality analysis memo dengan synthetic dataset; rancang satu geo-holdout atau user-level holdout, tentukan primary metric, contamination risk, sample/duration, and limitation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Write the hypothesis. Nyatakan observation, change, mechanism, audience, metric, and guardrail.
- Design the test. Tentukan randomization unit, allocation, sample/duration assumptions, exclusions, and contamination risk.
- Set decision rules. Tentukan primary metric, minimum detectable effect, stopping, and multiple-test governance.
- Interpret properly. Baca confidence interval, effect size, power, sample balance, and practical value.

**Practice / deliverable:** Buat A/B test protocol dan analysis notebook untuk satu experiment: hypothesis, unit, sample/duration calculation, metrics, guardrails, QA, stopping rule, confidence interval, and decision memo.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Lead with decision. Mulai dari pertanyaan bisnis dan keputusan yang perlu dibuat, bukan metode yang digunakan.
- Show evidence. Sajikan metric, comparison, segmentation, source, and caveats.
- Explain mechanism. Hubungkan observed changes dengan plausible drivers dan confidence level.
- Ask for action. Nyatakan rekomendasi, owner, timing, expected impact, and follow-up measurement.

**Practice / deliverable:** Buat executive insight memo satu halaman dan 5-slide narrative untuk kasus analitik. Cantumkan fact/interpretation/hypothesis/recommendation, chart, risk, and decision requested.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Frame and collect. Tulis question, KPI, data inventory, access, and extraction plan.
- Validate and model. QA, standardize, join, and aggregate by correct grain; preserve lineage.
- Analyze and visualize. Run descriptive/diagnostic, choose visual, and document findings.
- Recommend and defend. Present business action, uncertainty, limitations, owner, and verification plan.

**Practice / deliverable:** Bangun portfolio pack: measurement brief, data dictionary, SQL/Spreadsheet notebook, QA report, dashboard, diagnostic memo, attribution/incrementality plan, and executive presentation. Labeli dataset DEMO/SIMULATED.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 11. SEO / Organic Search / AEO / GEO (`seo`)

### DPA-T11-CH01 — Search Ecosystem, Organic Visibility & Search Intent

**Competency ID(s):** T11-C01, T11-C03

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | G: direct agency SEO JD not located in this batch | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** SEO dan Organic Search meningkatkan kemampuan website ditemukan melalui crawling, indexing, relevance, quality, and search experience. Search result dapat mencakup organic web, local, images, video, featured snippets, dan AI features. SEO tidak menjamin ranking; specialist bekerja pada technical accessibility, content usefulness, intent match, information architecture, authority, and measurement. Search intent harus menjadi titik awal, bukan keyword density.

**Simulated example:** SIMULATED — website memiliki banyak blog traffic tetapi tidak ada product-qualified visits. Artikel menjawab informational query tanpa link relevan ke product/category pages. Masalahnya bukan sekadar ranking, tetapi journey dan intent transition.

**Technical depth / workflow:**
- Understand search process. Bedakan crawling, rendering, indexing, ranking, and result presentation.
- Classify intent. Kelompokkan informational, navigational, commercial, transactional, local, and multimodal needs.
- Audit site readiness. Periksa indexability, architecture, page quality, mobile, and business relevance.
- Define organic objective. Pilih visibility, qualified organic sessions, leads, revenue, or local actions.

**Practice / deliverable:** Buat search ecosystem map dan organic baseline untuk satu website: indexable pages, search visibility, query intent, page types, business outcomes, and key technical/content risks.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH02 — Keyword, Topic & Competitor Research

**Competency ID(s):** T11-C02

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | G: direct agency SEO JD not located in this batch | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Keyword/topic research mengidentifikasi demand, query language, competitor gaps, and content opportunities. Keyword volume dari tools adalah estimasi, bukan demand pasti; periksa trend, SERP format, geography, and seasonality. Topic clustering menyusun hubungan pillar/supporting pages. Competitor SERP analysis membaca page type, intent, features, content depth, and proof rather than copying text.

**Simulated example:** SIMULATED — keyword 'best CRM' punya volume tinggi tetapi SERP dipenuhi comparison pages dan software directories. Brand yang baru launch mungkin lebih feasible menargetkan long-tail niche intent dengan product proof yang lebih spesifik.

**Technical depth / workflow:**
- Collect query universe. Gabungkan Search Console, keyword tools, site search, sales questions, and competitor SERP.
- Classify intent and SERP. Tandai page type, features, dominant format, and geography.
- Cluster topics. Kelompokkan queries berdasarkan shared intent and map to one best page.
- Prioritize opportunities. Nilai relevance, difficulty, business value, evidence, content gap, and resources.

**Practice / deliverable:** Buat keyword-topic map minimal 50 query untuk satu kategori. Sertakan intent, SERP feature, page type, topic cluster, competitor gaps, priority score, and proposed URL.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH03 — Website Architecture, Crawlability & Indexing

**Competency ID(s):** T11-C03

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | G: direct agency SEO JD not located in this batch | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Website architecture memengaruhi crawling, navigation, internal link equity, and user discovery. URL structure, hierarchy, canonical, robots directives, sitemap, pagination, faceted navigation, and JavaScript rendering perlu dipahami berdasarkan site scale. Crawl budget bukan solusi universal; prioritasnya memastikan important pages discoverable, indexable, canonicalized, and valuable.

**Simulated example:** SIMULATED — ecommerce menghasilkan ribuan URL filter dengan parameter berbeda yang memiliki content sama. Googlebot menghabiskan crawl pada parameter URLs sementara kategori penting kurang internal links. Solusinya perlu architecture/faceted navigation control, bukan sekadar mengubah robots.txt sembarangan.

**Technical depth / workflow:**
- Map URL inventory. Klasifikasikan page type, index status, canonical, status code, and parent-child structure.
- Audit crawl paths. Periksa internal links, orphan pages, redirect chains, robots, sitemap, and faceted URLs.
- Validate canonical/indexing. Pastikan preferred URL, duplicate handling, pagination, noindex, and parameter policy.
- Prioritize fixes. Nilai affected URLs, search value, impact, effort, and engineering dependency.

**Practice / deliverable:** Buat technical architecture audit dengan crawl sample: URL taxonomy, orphan pages, status code, canonical, robots, sitemap, faceted URLs, internal links, and remediation roadmap.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH04 — Technical SEO & Core Web Vitals

**Competency ID(s):** T11-C03

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | G: direct agency SEO JD not located in this batch | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Technical SEO memastikan website mudah diakses, di-render, aman, cepat, and stabil. Core Web Vitals menilai loading, interactivity, and visual stability; interpretasi field data berbeda dari lab tests. Technical review juga mencakup mobile usability, JavaScript rendering, redirects, status codes, HTTPS, structured data validation, and server reliability. Prioritization harus memakai evidence, page templates, and business impact.

**Simulated example:** SIMULATED — LCP buruk hanya pada product pages karena hero image terlalu besar, sedangkan INP bermasalah pada menu script. Perbaikan perlu dipisah antara image delivery and interaction code; menunda semua optimasi ke redesign besar tidak perlu.

**Technical depth / workflow:**
- Measure page experience. Audit field/lab CWV, mobile, render, image, scripts, and layout shifts.
- Trace technical cause. Temukan template/component, resource, JS, server, and third-party scripts.
- Validate markup/data. Cek structured data against visible content and supported types.
- Coordinate remediation. Buat ticket dengan reproduction, affected templates, priority, expected result, and QA.

**Practice / deliverable:** Buat audit teknis untuk tiga page templates: issue, evidence, affected URLs, root-cause hypothesis, impact, fix, owner, and before/after measurement plan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH05 — On-Page SEO, Content & Structured Data

**Competency ID(s):** T11-C01, T11-C04

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | G: direct agency SEO JD not located in this batch | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** On-page SEO membuat halaman menjawab intent secara jelas dan bermanfaat. Title, headings, copy, internal links, images, metadata, and structured data harus mengikuti page purpose dan actual content. Helpful content memerlukan first-hand expertise, completeness, trust, evidence, and reader value. Keyword stuffing, doorway pages, thin programmatic pages, and misleading claims dapat merusak kualitas.

**Simulated example:** SIMULATED — halaman kategori menargetkan 'sepatu lari terbaik' tetapi hanya menampilkan 2 produk tanpa criteria, comparison, expert guidance, or filters. Optimasi membutuhkan usefulness and product context, bukan hanya memasukkan keyword ke heading.

**Technical depth / workflow:**
- Map page intent. Definisikan siapa pembaca, task, main question, and conversion role.
- Develop content brief. Susun primary answer, outline, evidence, expertise, examples, FAQs, internal links, and CTA.
- Optimize page elements. Review title, H1, headings, intro, images/alt, metadata, canonical, and schema where eligible.
- Review content quality. Check accuracy, claims, originality, author expertise, freshness, and usability.

**Practice / deliverable:** Buat content brief dan on-page audit untuk satu landing page: intent, title/H1, outline, proof, internal links, media, CTA, schema validity, and review checklist.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH06 — Off-Page SEO, Digital PR & Authority

**Competency ID(s):** T11-C05

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | G: direct agency SEO JD not located in this batch | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Off-page SEO and Digital PR membangun reputation, authority, and discovery melalui editorial links, mentions, partnerships, and relevant coverage. Link quantity alone is not a strategy; evaluate relevance, editorial integrity, source quality, referral value, anchor context, and policy compliance. Jangan membeli link atau membuat network manipulatif. Digital PR harus memiliki angle newsworthy dan credible data.

**Simulated example:** SIMULATED — sebuah brand mendapat 200 backlinks dari site directories yang tidak relevan. Angka naik tetapi authority/referral tidak membaik. Campaign digital PR yang menghasilkan beberapa coverage relevan dapat memberi brand trust dan referral yang lebih bermakna.

**Technical depth / workflow:**
- Audit backlink profile. Periksa referring domains, relevance, anchor patterns, spam signals, and lost links.
- Find PR angles. Gunakan research, proprietary data, expert POV, product story, and market context.
- Build outreach. Target publisher/journalist yang relevan; siapkan evidence, assets, and disclosure.
- Measure quality. Track earned coverage, relevant links, referral, branded search, and risk—not raw count only.

**Practice / deliverable:** Buat digital PR plan dan backlink risk audit untuk brand latihan: competitor gap, story angle, target publishers, pitch outline, link quality criteria, and measurement.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH07 — Local SEO & Search Demand

**Competency ID(s):** T11-C05

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | G: direct agency SEO JD not located in this batch | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Local SEO mengoptimalkan discoverability untuk pencarian berbasis lokasi dan service area. Google Business Profile, NAP consistency, category, hours, services, reviews, photos, local landing pages, citations, and location relevance berperan. Multi-location brand membutuhkan governance listing dan review management. Ranking dipengaruhi relevansi, distance, prominence, and context; tidak semua faktor dapat dikendalikan marketer.

**Simulated example:** SIMULATED — klinik memiliki 20 cabang tetapi hanya 8 Google Business Profiles yang lengkap dan hours tidak konsisten. Search visibility lokal dan call/direction dapat terpengaruh; perbaikan memerlukan location data owner dan operational process.

**Technical depth / workflow:**
- Audit locations. Daftar store/branch, ownership, verified profile, NAP, category, service, and hours.
- Optimize profiles. Isi accurate information, photos, attributes, services, links, and update governance.
- Manage reviews. Set response guidelines, escalation, and policy-safe review request process.
- Build local pages. Buat unique, useful landing content with location service evidence and proper internal links.

**Practice / deliverable:** Buat local search audit untuk lima lokasi: profile completeness, NAP, category, reviews, local landing pages, citations, owner, and maintenance SLA.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH08 — Search Console, Analytics & SEO Reporting

**Competency ID(s):** T11-C06

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | G: direct agency SEO JD not located in this batch | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** Search Console dan analytics menghubungkan organic visibility dengan behavior dan business outcomes. GSC memberi performance queries/pages, indexing, sitemap, enhancements, and search appearance; GA4 memberi sessions/events/conversions. Metrics memiliki scope dan attribution berbeda; clicks GSC tidak sama dengan sessions GA4. Reporting harus memisahkan branded/non-branded, page type, country/device, and search feature.

**Simulated example:** SIMULATED — GSC clicks naik 20%, tetapi GA4 organic sessions tetap. Investigasi menemukan redirect/consent/tag issue atau perubahan search click-to-session behavior. Analyst harus membandingkan query/page/date/device sebelum menyimpulkan SEO traffic tidak berkualitas.

**Technical depth / workflow:**
- Set reporting scope. Definisikan date range, property, country/device, query/page, brand/non-brand, and page type.
- Reconcile metrics. Bandingkan impressions/clicks/CTR/position with sessions/engagement/conversions; jelaskan differences.
- Diagnose changes. Cek indexing, page releases, SERP, seasonality, competitor, cannibalization, and tracking.
- Recommend roadmap. Prioritaskan by impact, confidence, effort, dependency, and expected business outcome.

**Practice / deliverable:** Buat organic reporting dashboard dan monthly memo dari synthetic/demo data: query, page, clicks, impressions, CTR, position, indexation, sessions, conversions, and prioritized actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH09 — AEO, GEO & AI Search Visibility

**Competency ID(s):** T11-C01, T11-C07

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | G: direct agency SEO JD not located in this batch | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** AEO/GEO/AI Search mengamati bagaimana brand/content ditemukan dan dirujuk pada answer engines dan AI features. Fondasi website tetap crawlability, helpful content, entity clarity, source authority, and structured information. Tidak ada markup khusus yang menjamin citation/rank di semua AI systems. Monitoring harus mencatat platform, prompt, date, answer, cited sources, brand mention, and context; hasil sampling tidak boleh disajikan sebagai universal visibility metric.

**Simulated example:** SIMULATED — brand muncul pada dua dari sepuluh prompt category dalam satu LLM. Itu menunjukkan sampel observasi, bukan market-wide share of voice. Audit sumber yang dikutip, content gaps, entity accuracy, and brand proof.

**Technical depth / workflow:**
- Define queries/prompts. Kelompokkan intent, category question, comparison, recommendation, and local queries.
- Establish baseline. Catat platform/model, prompt, date, answer, sources/citations, brand presence, and context.
- Review source readiness. Periksa crawlable pages, facts, citations, expert authorship, structured data, and consistency.
- Run repeatable monitoring. Gunakan prompt set dan sampling schedule yang konsisten; label methodological limits.

**Practice / deliverable:** Buat AI search visibility log dengan 20 prompts lintas informational/commercial/local intents. Catat date, engine, answer, citations, mention/context, source quality, and content actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T11-CH10 — Organic Search Capstone

**Competency ID(s):** T11-C07

**Agency evidence (role-level):** D: SEO Consultant listing | B/D: search capability; direct SEO JD needed | A: Senior Analyst, SEO JD covers technical/content audits, keyword strategy, analytics and implementation | G: direct agency SEO JD not located in this batch | G: direct agency SEO JD not located in this batch

**Learning objective / concept:** SEO Capstone menyatukan audit teknis, keyword/topic research, content strategy, digital PR, local, reporting, and AI visibility baseline menjadi roadmap yang diprioritaskan. Rekomendasi harus mempertimbangkan engineering/content resources dan business impact. Hindari menjanjikan ranking atau traffic uplift tanpa data; nyatakan uncertainty dan measurement plan.

**Simulated example:** SIMULATED — ecommerce 500 URLs punya indexing issue, content duplication, slow category pages, and weak product descriptions. Capstone menyusun 90-day roadmap berdasarkan affected pages, revenue importance, engineering effort, and risk.

**Technical depth / workflow:**
- Audit baseline. Crawl website, GSC/GA4, indexation, templates, content, links, and local/AI context.
- Prioritize roadmap. Score issues by impact, confidence, effort, dependencies, and affected pages.
- Define workstreams. Technical, content/on-page, authority/PR, local, and measurement owners.
- Measure and govern. Set KPIs, baselines, release QA, update cadence, and realistic outcomes.

**Practice / deliverable:** Siapkan SEO capstone: technical audit, keyword/topic map, on-page brief, backlink/PR review, local checklist, Search Console baseline, AI visibility log, prioritized 90-day roadmap, and executive summary.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 12. CRM / Lifecycle / Marketing Automation (`crm`)

### DPA-T12-CH01 — CRM Ecosystem & Lifecycle Strategy

**Competency ID(s):** T12-C01

**Agency evidence (role-level):** G: direct CRM JD not located in this batch | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | G: direct CRM JD not located in this batch | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** CRM adalah strategi pengelolaan hubungan customer berbasis data dan lifecycle, bukan sekadar software atau daftar kontak. Lifecycle dapat mencakup lead, onboarding, activation, repeat, loyalty, lapse, and win-back; definisi harus mengikuti model bisnis. CRM specialist menyelaraskan acquisition, sales, service, and customer value dengan consent, data quality, governance, and communication experience.

**Simulated example:** SIMULATED — brand subscription mendapat 10.000 leads, tetapi 60% tidak pernah diaktifkan. Masalah mungkin onboarding, qualification, product usage, or sales follow-up. CRM harus mengidentifikasi lifecycle barrier sebelum menambah blast email.

**Technical depth / workflow:**
- Map lifecycle. Definisikan stage, entry/exit criteria, owner, and customer action.
- Align business model. Bedakan B2C/B2B, one-off/subscription, lead/sales, service, and repeat economics.
- Set CRM objective. Activation, time-to-value, repeat, retention, reactivation, churn prevention, or loyalty.
- Govern channel/data. Tetapkan consent, preference, suppression, data owner, and SLA.

**Practice / deliverable:** Buat CRM lifecycle blueprint untuk satu business model: stage definitions, entry/exit criteria, trigger, owner, business metric, contact policy, and high-risk customer scenarios.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH02 — Customer Data Architecture & Database

**Competency ID(s):** T12-C02

**Agency evidence (role-level):** G: direct CRM JD not located in this batch | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | G: direct CRM JD not located in this batch | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Customer data architecture mengatur struktur, identifiers, sources, events, fields, relationships, deduplication, consent, and access. Data dapat berasal dari web/app, POS, CRM, support, email, WhatsApp, sales, and offline systems. Identity resolution harus dilakukan dengan governance dan tidak menggabungkan data hanya karena nama/email mirip. Data model perlu menyebut customer, account, contact, event, transaction, product, and consent entities.

**Simulated example:** SIMULATED — satu customer memiliki email berbeda untuk transaksi marketplace dan website. Deduping berdasarkan nama dapat menggabungkan dua orang; perlu deterministic identifiers, confidence rules, and manual review threshold.

**Technical depth / workflow:**
- Inventory data sources. Dokumentasikan owner, refresh, identifier, fields, consent, and quality.
- Design data model. Gambar entities, primary keys, relationships, events, and transaction/customer grain.
- Define identity rules. Bedakan deterministic/probabilistic match, duplicates, merge/split, and unknowns.
- Apply privacy governance. Tentukan purpose, permissions, retention, deletion, and audit access.

**Practice / deliverable:** Buat CRM data dictionary dan ERD sederhana: contact, account, transaction, product, event, consent, and communication preference. Sertakan dedupe, identity, access, and retention rules.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH03 — Segmentation, Lead Scoring & Lifecycle Stages

**Competency ID(s):** T12-C03

**Agency evidence (role-level):** G: direct CRM JD not located in this batch | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | G: direct CRM JD not located in this batch | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Segmentation mengelompokkan customer untuk action yang relevan; lead scoring menilai fit/intent/progression; lifecycle stage memberi konteks hubungan. Segment harus memiliki criteria yang reproducible, refresh cadence, size, and owner. RFM (recency, frequency, monetary) berguna untuk transaksi, tetapi tidak menggantikan behavioral/need segmentation. Lead scoring harus divalidasi terhadap sales outcomes agar tidak hanya memberi poin pada aktivitas mudah.

**Simulated example:** SIMULATED — 1.000 leads mendapat skor tinggi karena membuka email berkali-kali, tetapi tak ada yang fit dengan ICP. Model scoring yang baik memasukkan fit, high-intent activity, exclusions, and sales feedback.

**Technical depth / workflow:**
- Define use case. Tentukan tindakan yang ingin didorong dan keputusan siapa yang menggunakan segment.
- Set rules. Pilih attributes/events/windows, thresholds, exclusions, and refresh logic.
- Validate score. Bandingkan high/low score dengan qualified pipeline, conversion, and false positives.
- Operationalize. Tentukan owner, routing, SLA, suppression, and monitoring.

**Practice / deliverable:** Buat segment taxonomy 6 kelompok dan lead score model dengan firmographic/behavioral signals, point weights, exclusions, validation sample, and sales handoff SLA.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH04 — Customer Journey & Trigger-Based Communication

**Competency ID(s):** T12-C04

**Agency evidence (role-level):** G: direct CRM JD not located in this batch | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | G: direct CRM JD not located in this batch | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Trigger-based communication terjadi karena event/kondisi: signup, purchase, product usage, cart abandon, renewal, inactivity, or service status. Trigger berbeda dari broadcast campaign dan journey sequence. Setiap workflow perlu eligibility, consent, branch, delay, frequency cap, suppression, exit condition, retry, and exception handling. Timing harus masuk akal dengan product use and customer context.

**Simulated example:** SIMULATED — reminder abandoned cart dikirim setelah customer menyelesaikan order lewat marketplace. Tanpa purchase suppression/cross-channel event, customer menerima pesan yang tidak relevan.

**Technical depth / workflow:**
- Map trigger events. Definisikan event source, conditions, parameters, delay, and event quality.
- Design branches. Tentukan if/else, consent, segment, action, suppression, and exit.
- Set frequency/priority. Tangani competing journeys, quiet hours, service-vs-promo, and priority hierarchy.
- Test exception paths. Uji duplicates, retries, missing fields, opt-out, purchase, and delivery failure.

**Practice / deliverable:** Buat workflow diagram untuk welcome, cart abandon, post-purchase, and reactivation. Sertakan trigger/condition/action, branches, delays, suppression, exit, frequency cap, and QA scenarios.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH05 — Email, WhatsApp, SMS & Push Strategy

**Competency ID(s):** T12-C05

**Agency evidence (role-level):** G: direct CRM JD not located in this batch | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | G: direct CRM JD not located in this batch | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Email, WhatsApp, SMS, and push memiliki permission, format, cost, immediacy, content, and response expectations berbeda. Channel selection harus mengikuti customer preference, urgency, service vs marketing purpose, and local policy/platform terms. Email memerlukan sender/domain, authentication (SPF/DKIM/DMARC), list hygiene, unsubscribe, deliverability; WhatsApp business messaging memiliki template/session/pricing/policy rules yang harus diverifikasi terkini. Jangan menganggap nomor telepon berarti izin marketing.

**Simulated example:** SIMULATED — order delay memerlukan service update segera, sedangkan promo cross-sell dapat menunggu email preference. Mengirim promo WhatsApp kepada contact tanpa consent dapat merusak trust dan melanggar policy.

**Technical depth / workflow:**
- Choose channel by message. Cocokkan urgency, complexity, preference, reach, accessibility, and cost.
- Set permission. Catat source/purpose/time of consent, opt-in/opt-out, and preference.
- Design content. Susun sender, subject/preview, message body, CTA, template, links, and fallback.
- Validate compliance. Check quiet hours, template category, unsubscribe, frequency, policy, and local legal advice.

**Practice / deliverable:** Buat channel decision matrix dan 3 sample communications untuk service update, onboarding, and promotional reactivation. Sertakan consent, preference, opt-out, fallback, and compliance check.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH06 — Marketing Automation & Workflow Architecture

**Competency ID(s):** T12-C02, T12-C04, T12-C06

**Agency evidence (role-level):** G: direct CRM JD not located in this batch | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | G: direct CRM JD not located in this batch | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Automation architecture menyusun trigger, condition, action, branch, delay, data input, integration, retry, and monitoring. Workflow harus idempotent agar event duplicate tidak memicu pesan ganda. API/webhook, CRM, email service, spreadsheet, and data warehouse perlu error handling and ownership. Automation bukan sekadar happy path; desain juga failure, consent change, missing data, and human handoff.

**Simulated example:** SIMULATED — webhook purchase dikirim dua kali sehingga customer menerima dua welcome journeys. Unique event ID, deduplication, idempotency, and journey exit rules mencegah duplicate trigger.

**Technical depth / workflow:**
- Draw architecture. Map source, trigger, transformation, destination, logs, and owner.
- Define reliability. Gunakan unique IDs, idempotency, retries, rate limits, and dead-letter/error handling.
- Protect data. Validate field mapping, permissions, secrets, minimization, and audit logs.
- Test all paths. Jalankan success, duplicate, missing field, API failure, opt-out, and manual escalation tests.

**Practice / deliverable:** Buat automation architecture dan QA plan untuk form-to-CRM-to-email flow. Dokumentasikan schema, API/webhook, dedupe, retries, consent, error queue, monitoring, and human handoff.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH07 — Personalization, Content & Deliverability

**Competency ID(s):** T12-C06

**Agency evidence (role-level):** G: direct CRM JD not located in this batch | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | G: direct CRM JD not located in this batch | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Personalization harus memberi relevansi tanpa terasa mengawasi. Gunakan attributes/behavior yang diperlukan, jelaskan value, jaga data minimization, and provide preference controls. Deliverability dipengaruhi sender reputation, authentication (SPF/DKIM/DMARC), list quality, bounce, complaint, engagement, content, and sending behavior. Open rates memiliki privacy limitations; gunakan click, conversion, deliverability, and downstream outcomes secara seimbang.

**Simulated example:** SIMULATED — email personalisasi menyebut lokasi presisi yang tidak pernah diberitahu user dan membuat mereka tidak nyaman. Gunakan context yang transparan, minimal, dan bermanfaat, bukan personalization yang invasif.

**Technical depth / workflow:**
- Choose data fields. Gunakan data yang relevan, lawful, current, and necessary untuk customer value.
- Build fallback. Sediakan default content saat attribute missing/outdated; jangan kirim blank or incorrect merge fields.
- Check deliverability. Periksa authentication, bounce, complaint, list hygiene, content, and engagement.
- Review privacy/trust. Test data use, access, preference, suppression, and customer expectation.

**Practice / deliverable:** Buat personalization map dan email deliverability audit: data fields, source, use/purpose, fallback, preference, SPF/DKIM/DMARC checklist, bounce/complaint, and KPI.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH08 — Retention, Churn, Cohort & Customer Lifetime Value

**Competency ID(s):** T12-C07

**Agency evidence (role-level):** G: direct CRM JD not located in this batch | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | G: direct CRM JD not located in this batch | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Retention, churn, cohort, and LTV mengukur kualitas hubungan customer sepanjang waktu. Cohort dibentuk berdasarkan event awal yang sama; retention perlu definisi activity yang sesuai model bisnis. Churn dapat berupa inactivity, cancellation, lapse, or loss of revenue. LTV harus memperhatikan margin, repeat cadence, refunds, discounts, service cost, and horizon; jangan menghitung revenue-only LTV lalu membandingkannya dengan CAC seolah-olah contribution.

**Simulated example:** SIMULATED — dua customer memiliki revenue LTV sama, tetapi satu membeli produk bermargin rendah dengan biaya support tinggi. CRM investment tidak boleh menganggap keduanya bernilai sama.

**Technical depth / workflow:**
- Define retention/churn. Tetapkan activity event, observation window, inactivity rule, and segment.
- Build cohorts. Kelompokkan berdasarkan first purchase/signup/activation and track subsequent periods.
- Estimate LTV. Gunakan contribution margin, purchase frequency, lifespan, churn, returns, and service costs.
- Design interventions. Kaitkan risk signal dengan relevant communication, service action, and holdout.

**Practice / deliverable:** Buat cohort retention workbook, churn definition, LTV sensitivity model, and 3 intervention hypotheses. Gunakan synthetic transactions and explicitly label assumptions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH09 — Lifecycle Experimentation & Reporting

**Competency ID(s):** T12-C08

**Agency evidence (role-level):** G: direct CRM JD not located in this batch | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | G: direct CRM JD not located in this batch | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** Lifecycle experimentation menguji pesan, timing, channel, offer, onboarding sequence, and frequency. Metric seperti delivery, bounce, click, conversion, repeat, complaint, unsubscribe, and revenue harus dipilih sesuai objective. Test perlu randomization unit, holdout, primary KPI, guardrails, sample/duration, and decision rules. CRM lift sering dipengaruhi seasonality, overlapping campaigns, and contact eligibility; holdout membantu menilai incrementality.

**Simulated example:** SIMULATED — subject line A menaikkan opens, tetapi purchases tidak berubah dan unsubscribe meningkat. Jika tujuan revenue/retention, open-rate winner belum tentu bisnis winner.

**Technical depth / workflow:**
- Frame hypothesis. Tentukan stage, barrier, message/timing change, expected mechanism, and outcome.
- Design control. Pilih user/contact-level randomization, holdout, sample, duration, and exclusion rules.
- Track quality. Monitor primary metric with guardrails for complaints, unsubscribes, margin, and service contacts.
- Interpret outcome. Pisahkan short-term engagement from incremental sales/retention.

**Practice / deliverable:** Buat test backlog untuk onboarding, replenishment, win-back: hypothesis, audience, treatment/control, primary/guardrails, timing, sample assumptions, and decision rules.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T12-CH10 — CRM Capstone

**Competency ID(s):** T12-C08

**Agency evidence (role-level):** G: direct CRM JD not located in this batch | A: CRM & Lifecycle Strategy Executive, Kuala Lumpur | G: direct CRM JD not located in this batch | A: CRM Campaign Specialist, Jakarta/Merkle | A: CRM Director, San Francisco

**Learning objective / concept:** CRM Capstone menunjukkan lifecycle system yang menghubungkan data architecture, segments, consent, triggers, channel, automation, deliverability, measurement, and business value. Workflow harus memiliki happy path dan failure path. Data synthetic/demo harus diberi label dan privacy risks ditulis eksplisit. Presentasi harus memperlihatkan bagaimana CRM mengurangi friction atau meningkatkan customer value, bukan sekadar memperbanyak message volume.

**Simulated example:** SIMULATED — subscription brand membangun new subscriber onboarding, usage education, renewal reminder, failed-payment recovery, and churn prevention. Capstone menguji event integrity, suppression, customer support handoff, and cohort impact.

**Technical depth / workflow:**
- Frame lifecycle problem. Tentukan stage, value, churn risk, and objective.
- Design data and segments. Bangun schema, consent, segment logic, and trigger rules.
- Implement workflow blueprint. Map channel, messages, branches, failures, retries, and QA.
- Measure and govern. Buat cohort, holdout, KPI/guardrails, owner, and improvement roadmap.

**Practice / deliverable:** Bangun portfolio pack: lifecycle map, data dictionary/ERD, segment model, consent matrix, workflow diagrams, message samples, QA cases, deliverability audit, cohort/LTV workbook, and executive readout.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Define audience and role. Tentukan audience need, stage, channel context, and business task content.
- Write voice principles. Tetapkan personality, tone dimensions, vocabulary, evidence bar, and prohibited claims.
- Build examples. Tunjukkan same proposition dalam format platform yang berbeda.
- Set governance. Tetapkan approver, accessibility, legal review, update, and response rules.

**Practice / deliverable:** Buat brand voice guide dengan 4 prinsip, tone matrix, vocabulary, do/don't, claims policy, dan contoh adaptasi satu message untuk TikTok, Instagram, YouTube, LinkedIn, dan blog.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Map objective to content task. Tentukan awareness, education, proof, conversion, onboarding, and retention roles.
- Build pillars. Tetapkan audience question, brand POV, evidence, formats, CTA, and owner.
- Set format mix. Pilih long/short, video/article/carousel/newsletter, and accessibility needs.
- Define measurement. Pilih KPI sesuai task; hindari view/follower sebagai universal metric.

**Practice / deliverable:** Buat content strategy one-pager dengan objectives, audience journey, 4–6 content pillars, formats, distribution, channel role, KPIs, owner, and resource assumptions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Design workflow. Map ideation, brief, research, draft, production, review, approval, publishing, and update.
- Build calendar schema. Isi owner, channel, format, objective, pillar, due dates, assets, approvals, and KPI.
- Plan capacity. Perkirakan hours, dependencies, production resources, and contingency.
- Govern status. Gunakan status, version, feedback, accessibility, and archive.

**Practice / deliverable:** Buat editorial calendar 4 minggu dengan 12 planned assets, status workflow, owner, deadlines, production effort, campaign dependencies, repurpose plan, and KPI.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Collect signals. Ambil search queries, comments, questions, support tickets, creator formats, and competitor gaps.
- Cluster needs. Kelompokkan problem, misconception, objection, usage task, and cultural context.
- Validate insight. Cari evidence across sources, volume, recency, and representative limits.
- Size opportunity. Score relevance, audience value, differentiation, effort, and business role.

**Practice / deliverable:** Buat insight-mining board 20 signals, cluster audience questions, validate three tensions, lalu prioritaskan lima content opportunities dengan score dan evidence trail.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Choose audience tension. Tulis konflik/need yang ingin diangkat dan mengapa relevan.
- Build narrative arc. Rancang hook, context, stakes, insight, proof, transformation, and payoff.
- Express brand POV. Pastikan sudut pandang punya evidence and relevance, bukan forced sales pitch.
- Adapt to format. Atur opening, pacing, captions, visuals, audio, and CTA sesuai platform.

**Practice / deliverable:** Buat tiga storyboards untuk satu insight: 15-second video, 60-second video, and long-form article. Sertakan hook, tension, beat sheet, proof, visual/audio notes, and CTA.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Define reader task. Tentukan search/consumer intent, knowledge level, and action.
- Research sources. Gunakan primary/official sources, expert interviews, data, and citations; record access date.
- Build structure. Susun thesis, outline, evidence, examples, visuals, summary, and CTA.
- Edit and publish. Review accuracy, claims, readability, accessibility, SEO basics, and update ownership.

**Practice / deliverable:** Buat brief dan outline long-form 1.200–1.500 kata dengan thesis, audience, sources, evidence table, section hierarchy, visual suggestions, author review, and CTA.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Select content moments. Identifikasi insight, demonstration, objection, story, and proof from source asset.
- Design short-form. Tentukan first-frame, hook, beat, captions, visual, audio, CTA, and duration.
- Repurpose intelligently. Sesuaikan narrative/format per channel, bukan memotong secara mekanis.
- QA and package. Periksa subtitles, safe zones, aspect ratio, audio rights, cover, filename, and versions.

**Practice / deliverable:** Buat repurpose matrix 1 long-form source menjadi 8 assets: 3 short videos, 2 carousels, 1 email, 1 LinkedIn post, and 1 story. Sertakan hook, audience, format, CTA, and production notes.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Map platform role. Tentukan discovery, depth, community, professional credibility, or entertainment role.
- Translate the idea. Adapt hook, format, proof, length, language, CTA, and comment interaction.
- Check platform specs/policy. Validate dimensions, captions, music, disclosure, and account features.
- Measure by context. Compare metrics that match platform task, not raw views alone.

**Practice / deliverable:** Buat one-idea/multi-platform adaptation matrix untuk TikTok, Instagram, YouTube, and LinkedIn. Sertakan hook, format, depth, CTA, native behavior, KPI, and risk per platform.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Set distribution role. Tentukan channel, audience, objective, timing, owner, and cost.
- Confirm rights. Periksa music, creator usage, UGC permission, whitelisting, exclusivity, and duration.
- Plan amplification. Tentukan paid audience, budget, asset versions, landing/CTA, and test design.
- Measure cross-channel. Track organic/paid separately, assisted visits, content quality, and downstream outcomes.

**Practice / deliverable:** Buat distribution plan untuk 5 content assets: organic, paid, creator, community, newsletter, and website. Sertakan rights, owner, schedule, amplification trigger, KPI, and cross-channel caveats.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Set objective-specific KPI. Pilih output, attention, engagement, action, or business metric sesuai task.
- Tag assets. Gunakan content ID, pillar, hook, format, creator, platform, date, campaign, and CTA.
- Analyze patterns. Segment by asset and audience; compare retention, saves, click quality, and conversion.
- Translate learning. Tentukan continue, iterate, repurpose, retire, or scale with reason.

**Practice / deliverable:** Buat content performance dashboard schema dan optimization memo untuk 20 assets. Sertakan IDs, format, pillar, retention, engagement, click quality, conversion, objective, and next action.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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
- Frame campaign. Tetapkan audience, positioning, campaign objective, and content role.
- Build system. Rancang pillars, editorial calendar, briefs, storytelling, and production workflow.
- Ship and distribute. Siapkan assets, rights, platform adaptations, organic/paid/creator/community plans.
- Evaluate and iterate. Analisis content quality/performance and update next-quarter strategy.

**Practice / deliverable:** Siapkan content portfolio: audience/insight deck, brand voice, 4–6 pillars, quarter calendar, 3 long-form briefs, 12 short-form storyboards/assets, production specs, distribution/right matrix, dashboard, and optimization review.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 14. KOL / KOC / Influencer & Creator Partnerships (`kol`)

### DPA-T14-CH01 — Creator Economy & Influencer Ecosystem

**Competency ID(s):** T14-C01

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** Creator partnerships beroperasi dalam creator economy yang melibatkan talent, agency/MCN, brand, platform, creator manager, affiliate, production, and media amplification. Partnership dapat dibayar untuk reach, content, credibility, community, usage rights, or trackable conversion. Creator partnership bukan sekadar memilih akun dengan followers besar; strategi harus menentukan role creator dalam audience journey dan business objective.

**Simulated example:** SIMULATED — brand memilih creator besar dengan audience tidak relevan. Creator micro memiliki audience category fit dan trust lebih baik. Keputusan harus berdasarkan fit, content quality, geography, engagement quality, cost, and rights.

**Technical depth / workflow:**
- Map ecosystem. Identifikasi creator, manager, agency, MCN, platform, brand, and measurement partners.
- Clarify objective. Awareness, education, trust, consideration, content asset, sales, or community.
- Choose model. Paid content, seeding, barter, ambassador, affiliate, licensing, or partnership ads.
- Define governance. Disclosure, contract, approvals, usage rights, timeline, and measurement.

**Practice / deliverable:** Buat creator ecosystem map dan role matrix untuk awareness, education, product review, conversion, and advocacy campaigns. Sertakan partner types, deliverables, payment model, and risks.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH02 — KOL, KOC, Nano, Micro, Macro & Mega Creator

**Competency ID(s):** T14-C02

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** KOL dan KOC adalah pendekatan yang sering dipakai di Indonesia, tetapi keduanya bukan kategori global yang selalu distandarkan. KOL lebih sering dipilih karena expertise/authority/visibility; KOC lebih dekat dengan peer recommendation dan pengalaman pengguna. Nano/micro/macro/mega tiers hanya shortcut; audience relevance, trust, content niche, and quality lebih penting daripada follower threshold semata.

**Simulated example:** SIMULATED — kategori skincare membutuhkan edukasi bahan aktif. Pharmacist creator dapat memberi expertise; micro KOC dapat memberi pengalaman pemakaian sehari-hari. Dua role saling melengkapi, bukan saling menggantikan.

**Technical depth / workflow:**
- Define creator role. Tentukan authority, peer proof, reach, demonstration, content skill, or conversion role.
- Segment by tier/niche. Catat audience size, geo, topic, language, and audience composition.
- Choose portfolio mix. Seimbangkan creator tier, niche, audience overlap, content formats, and budget.
- Disclose clearly. Terapkan advertising disclosure and platform/regulatory requirements.

**Practice / deliverable:** Buat KOL/KOC creator matrix berisi 20 creators synthetic/example: tier, niche, audience geo, trust signal, content format, objective fit, rate range assumption, disclosure, and recommended role.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH03 — Creator Discovery & Audience Research

**Competency ID(s):** T14-C03

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** Creator discovery menggunakan criteria yang dapat direplikasi: category fit, audience demographics/geography, engagement quality, content quality, brand safety, previous sponsorship, follower growth anomalies, and commercial availability. Discovery sources dapat berupa platform search, creator marketplace, agency roster, social listening, and referrals. Shortlist tidak boleh hanya berdasarkan popularitas; semua claims tentang audience harus diverifikasi dengan available analytics atau media kit.

**Simulated example:** SIMULATED — 50 creator candidates ditemukan; 10 punya audience overlap tinggi, lima memiliki fake engagement signals, dan tiga punya competitor exclusivity. Discovery matrix memisahkan eligibility dari creative fit.

**Technical depth / workflow:**
- Define criteria. Buat must-have and nice-to-have filters sesuai objective.
- Search systematically. Gunakan platform/marketplace, hashtags, competitor mentions, and creator network.
- Build shortlist. Catat profile, audience, content, geo, brand history, rate source, contact, and fit score.
- Validate with creator/agency. Minta media kit, insights proof, availability, exclusivity, and current terms.

**Practice / deliverable:** Buat discovery workbook 30 candidates dan shortlist lima: criteria, source, profile, audience evidence, content fit, conflicts, outreach status, and recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH04 — Creator Vetting, Audience Fit & Fraud Screening

**Competency ID(s):** T14-C03

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** Creator vetting memeriksa authentic audience, engagement quality, content credibility, brand safety, previous sponsorship, follower growth anomalies, and category fit. Fraud indicators bukan bukti final; sudden spikes, generic comments, bot-like profiles, engagement pods, and inconsistent geo perlu investigasi. Gunakan third-party tools sebagai signal, bukan verdict tunggal. Simpan evidence dan decision rationale.

**Simulated example:** SIMULATED — creator memiliki ER tinggi tetapi comments berulang, geo mismatch, and follower spike dari giveaway. Vetter harus meminta native insights, recent audience breakdown, and campaign-specific proof before approval.

**Technical depth / workflow:**
- Audit audience. Cek geography, age, interests, followers trend, and platform analytics where available.
- Review engagement. Baca comment quality, saves/shares, engagement consistency, and suspicious patterns.
- Assess content/brand safety. Review recent posts, claims, disclosure, controversies, and competitor conflicts.
- Record confidence. Catat evidence, tool limits, flags, follow-up questions, and approval status.

**Practice / deliverable:** Buat creator vetting scorecard untuk lima candidates dengan audience fit, ER context, quality, fake signal checks, brand safety, history, and accept/reject/risk decision.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH05 — Influencer Strategy & Campaign Planning

**Competency ID(s):** T14-C04, T14-C05

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** Influencer strategy menerjemahkan objective menjadi creator roles, tier mix, campaign concept, timeline, budget, and KPI. Campaign brief perlu menjelaskan audience, insight, message, content role, deliverables, creative freedom, mandatories, CTA, disclosure, and usage rights. Creator plan harus memperhitungkan audience overlap, product availability, seasonality, production capacity, and cross-channel amplification.

**Simulated example:** SIMULATED — campaign launch memakai 2 authority creators untuk education, 8 micro creators untuk social proof, and 30 KOCs untuk trial stories. Tujuan dan KPI berbeda per tier, bukan seluruhnya dinilai dari reach.

**Technical depth / workflow:**
- Map objective-to-creator role. Tentukan awareness/education/proof/content asset/conversion needs.
- Build tier and budget mix. Hitung fee, production, seeding, usage rights, amplification, agency, and contingencies.
- Set campaign architecture. Timeline, wave, deliverables, platform, CTA, and reporting.
- Set KPI and guardrails. Reach/quality, views/retention, engagement, qualified traffic, conversion, disclosure, and brand safety.

**Practice / deliverable:** Buat creator campaign plan 4 minggu: creator tier mix, shortlists, budget, message, timeline, deliverables, KPI, rights, disclosure, and amplification. Buat base/conservative scenarios.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH06 — KOL Briefing, Storyline & Content Approval

**Competency ID(s):** T14-C02, T14-C04

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** KOL brief harus memberi strategic direction tetapi tidak membunuh creator authenticity. Brief memuat campaign context, audience, product truth, key message, proof, do/don't, story role, platform/format, deliverables, CTA, disclosure, mandatory, and approval. Storyline harus menunjukkan pengalaman atau explanation yang believable. Approval flow membutuhkan SLA dan batas revisi agar creator autonomy dan brand safety seimbang.

**Simulated example:** SIMULATED — brief meminta creator mengatakan 'nomor satu paling aman' tanpa evidence. Creator tidak boleh dipaksa membuat unsupported claim; ganti dengan demonstrasi faktual atau approved proof.

**Technical depth / workflow:**
- Brief the why. Jelaskan audience, problem, objective, proposition, and creator role.
- Define guardrails. Product facts, prohibited claims, disclosure, legal wording, mandatory assets, and safety.
- Co-create storyline. Set hook, scenes, proof, CTA, and creator-native execution.
- Manage approval. Draft/review/revise/final, SLA, version, and publication confirmation.

**Practice / deliverable:** Buat creator brief, storyline outline, key-message/proof matrix, do/don't, disclosure copy, approval workflow, and feedback template for one campaign.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH07 — Negotiation, Rate, Contract & Usage Rights

**Competency ID(s):** T14-C05

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** Negotiation dan contract mengikat scope, fee, deliverables, payment terms, usage rights, exclusivity, whitelisting, revisions, cancellations, disclosure, performance claims, IP, confidentiality, and remedies. Creator fee tidak otomatis mencakup perpetual paid usage. Buyer harus memisahkan organic posting license, paid amplification, raw footage, cutdowns, edit, territory, channels, and duration.

**Simulated example:** SIMULATED — fee Rp15 juta mencakup satu video organic post selama 30 hari, tetapi brand mengasumsikan hak memakai video di ads selama 12 bulan. Perlu addendum usage rights dan negotiated fee.

**Technical depth / workflow:**
- Normalize rate. Bandingkan format, length, platform, follower/engagement context, production, and deliverables.
- Negotiate scope. Tetapkan revisions, deadline, payment, cancellation, and KPI reporting.
- License rights. Catat channel, territory, duration, paid/organic, edits, raw files, likeness, music, and exclusivity.
- Contract and approval. Escalate legal terms, sign, archive, and schedule renewal/expiry alerts.

**Practice / deliverable:** Buat creator deal sheet dan contract checklist dengan rate, deliverables, revisions, usage rights, paid whitelisting, exclusivity, disclosure, cancel, payment, and expiry fields.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH08 — Product Seeding, Barter & Creator Relationship

**Competency ID(s):** T14-C05

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** Seeding dan barter membangun trial/relationship tetapi bukan gratis: product cost, packaging, shipping, staff time, and content rights tetap ada. Seeding harus punya target, reason, opt-in, logistics, brief, and post-send follow-up. Barter harus menyebut deliverables atau menyatakan tidak ada guarantee. Relationship management meliputi CRM creator, communication, feedback, payment, and long-term trust.

**Simulated example:** SIMULATED — 100 products dikirim tanpa creator selection/permission. Hasil content rendah dan biaya shipping terbuang. Pilot seeding yang lebih tepat memilih audience/fit, memperoleh consent to receive product, and sets expectation honestly.

**Technical depth / workflow:**
- Define seeding objective. Trial, review, content asset, feedback, relationship, or event invite.
- Select and consent. Vet audience fit, confirm address/permission, and clarify no-guarantee vs deliverables.
- Manage logistics. Track SKU, package, dispatch, delivery, product safety, and contact owner.
- Maintain relationship. Follow up respectfully, log content/feedback, rights, and next collaboration.

**Practice / deliverable:** Buat seeding program plan 30 creators: selection criteria, opt-in, product allocation, logistics tracker, expected/non-guaranteed outputs, feedback form, and cost model.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH09 — Campaign Execution & Content Delivery

**Competency ID(s):** T14-C06

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** Campaign execution mengatur production, deadlines, asset collection, quality review, disclosure, platform settings, link/tag, publishing, and proof. Deliverable acceptance harus didasarkan pada contract/brief, bukan selera internal setelah tayang. Tanggal post, URL, screenshot, view/engagement snapshots, and invoice status perlu dicatat. Crisis/negative feedback harus memiliki escalation protocol.

**Simulated example:** SIMULATED — creator publish video dengan wrong product link dan disclosure tertinggal. Team perlu detect cepat, request correction, preserve evidence, and document whether paid boosting should pause.

**Technical depth / workflow:**
- Run production calendar. Monitor draft, shoot, review, revisions, final export, and publishing deadline.
- QA content. Cek claim, product, disclosure, audio/music rights, brand safety, CTA, link, and specs.
- Confirm publishing. Record URL, timestamp, asset version, platform, and screenshot.
- Manage issues. Set incident severity, escalation, correction/takedown, and stakeholder update.

**Practice / deliverable:** Buat execution tracker untuk 10 creator posts: status, owner, due date, asset version, approval, disclosure, URL, proof, corrections, invoice, and final acceptance.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH10 — Paid Amplification & Partnership Ads

**Competency ID(s):** T14-C06

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** Paid amplification dan Partnership Ads memakai creator identity/content untuk distribution berbayar. Boosting dari brand page berbeda dari partnership ad/whitelisting. Campaign setup perlu account permission, post authorization, ad disclosure, creative rights, targeting, budget, tracking, and expiry. Organic creator performance dan paid amplified performance harus dilaporkan terpisah sebelum digabung ke total campaign view.

**Simulated example:** SIMULATED — post creator memiliki organic engagement baik tetapi partnership ad ditolak karena authorization expiry dan missing permission. Paid rights/access harus dipastikan sebelum media schedule.

**Technical depth / workflow:**
- Confirm permission. Cek creator/brand account, authorized post, ad account, duration, and revocation.
- Prepare paid setup. Tentukan objective, audience, placements, budget, destination, tracking, and creative edits.
- Monitor separately. Pisahkan organic metrics dari paid reach/spend/conversion.
- Check rights and policy. Validate music, captions, disclosures, usage duration, and account permissions.

**Practice / deliverable:** Buat partnership ads checklist dan paid amplification plan untuk dua creator assets. Sertakan permissions, rights, objective, budget, tracking, organic/paid reporting, and expiry alerts.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH11 — Influencer Measurement & Reporting

**Competency ID(s):** T14-C07

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** Influencer measurement harus mencocokkan KPI dengan creator role: awareness (reach/unique, view quality), engagement (saves/shares/comments), content quality, traffic, lead/sales, and advocacy. Attribution dipengaruhi codes/links, platform windows, view-through, and overlap. Cost metrics seperti CPM/CPE/CPV perlu denominator dan format yang sesuai. ROI harus mempertimbangkan fee, production, rights, seeding, amplification, discounts, and margin.

**Simulated example:** SIMULATED — campaign report mencatat 5 juta views, tetapi 80% dari paid amplification dan sedikit qualified visits. Executive tidak boleh mengklaim creator organic reach mencapai 5 juta; report perlu memisahkan sources dan downstream outcomes.

**Technical depth / workflow:**
- Define role-based KPIs. Tetapkan metrics untuk reach, attention, trust, traffic, conversion, or content asset value.
- Tag creator activity. Gunakan UTM, codes, content IDs, platform reports, and campaign windows.
- Reconcile cost. Masukkan fees, production, seeding, rights, media, discount, and net revenue/margin.
- Interpret carefully. Pisahkan correlation/attribution/assisted role dan jelaskan incrementality limitations.

**Practice / deliverable:** Buat influencer dashboard/memo untuk 10 creator: fee, organic/paid reach, views/retention, engagement quality, clicks, conversions, cost metrics, margin assumptions, and recommendations.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T14-CH12 — Creator Partnerships Capstone

**Competency ID(s):** T14-C07

**Agency evidence (role-level):** D: Influencer Marketing Strategist listing | B/D: creator capability, direct role JD needed | B/D: creator/social strategy evidence | G: direct JD not located in this batch | G: direct role JD not located in this batch

**Learning objective / concept:** Creator Partnerships Capstone menunjukkan proses lengkap dari discovery hingga measurement dan relationship management. Portfolio harus mencakup strategy, creator matrix, vetting evidence, brief, deal/rights, seeding/production, execution tracker, partnership ads, reporting, and post-campaign review. Semua creator examples dan results yang bukan campaign aktual diberi label SIMULATED; no invented endorsements.

**Simulated example:** SIMULATED — brand consumer menyiapkan creator launch wave dengan authority/KOL, micro creators, and KOC seeding. Capstone menguji objective fit, rights, production, disclosure, amplification, and commercial reporting.

**Technical depth / workflow:**
- Plan program. Set audience, objectives, creator roles, tier mix, budget, timeline, and KPIs.
- Recruit and contract. Vet, shortlist, negotiate, license, and onboard creators.
- Execute and amplify. Deliver assets, QA, publish, track, and activate paid rights.
- Measure and retain. Reconcile results/cost, document learning, and update creator relationship database.

**Practice / deliverable:** Bangun capstone pack: creator strategy, 20-name shortlist, vetting scorecard, budget, creative brief, contract/rights matrix, seeding/production tracker, partnership ads plan, performance dashboard, and executive recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 15. Affiliate & Social Commerce Partnerships (`affiliate`)

### DPA-T15-CH01 — Affiliate Marketing Ecosystem

**Competency ID(s):** T15-C01

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Affiliate marketing membayar partner berdasarkan action/conversion yang ditetapkan. Ecosystem dapat melibatkan advertiser, affiliate network/platform, publisher, creator affiliate, sub-network, tracking provider, and finance. Performance terms harus menjelaskan eligible action, attribution window, commission basis, validation, reversal, fraud, payout, and margin. Affiliate bukan sinonim influencer; creator dapat berperan sebagai affiliate bila commercial model menekankan tracked sale/commission.

**Simulated example:** SIMULATED — publisher coupon menghasilkan banyak attributed orders, tetapi sebagian menggunakan voucher yang akan dipakai customer existing. Program harus membedakan incremental acquisition, existing demand capture, attribution leakage, and commission economics.

**Technical depth / workflow:**
- Map participants. Catat advertiser, affiliate platform/network, publisher/creator, tracking, and finance.
- Define conversion. Tetapkan eligible order/lead, validation, attribution, window, and exclusions.
- Set commercial model. Pilih CPS/CPA/CPL/hybrid dengan margin and payout guardrails.
- Govern program. Tetapkan partner policies, disclosure, fraud controls, and payment reconciliation.

**Practice / deliverable:** Buat affiliate ecosystem and program brief untuk brand: partner types, conversion definition, tracking flow, attribution window, commission model, fraud rules, and payout governance.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH02 — Affiliate Network, Publisher & Creator Affiliate

**Competency ID(s):** T15-C01

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Publisher and creator affiliate memiliki model traffic and content berbeda. Publisher dapat berupa content/review, comparison, coupon, cashback, loyalty, search arbitrage, and sub-network. Creator affiliate memakai short video/live/showcase, product link, or platform-native commission. Recruitment harus menilai audience fit, traffic source, content method, disclosure, conversion quality, and policy risk.

**Simulated example:** SIMULATED — cashback publisher mendorong last-click conversions tetapi profit rendah; niche content publisher memberi conversion lebih sedikit dengan new-to-brand share lebih tinggi. Mix harus dinilai berdasarkan contribution and incrementality.

**Technical depth / workflow:**
- Classify partner type. Kelompokkan content, coupon, cashback, loyalty, creator, media buyer, and sub-network.
- Validate traffic. Tanyakan source, placement, promotion methods, geo, audience, and incentive use.
- Set partner terms. Tentukan allowed tactics, search bidding rules, brand terms, disclosure, and prohibited methods.
- Track quality. Monitor new-to-brand, returns, order value, cancellation, and commission exposure.

**Practice / deliverable:** Buat publisher classification and recruitment matrix: partner type, audience/source, allowed method, risk, traffic quality evidence, commission fit, and onboarding need.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH03 — Partner Discovery & Recruitment

**Competency ID(s):** T15-C02

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Partner discovery and recruitment harus memiliki ideal partner profile, category fit, reach/source quality, content standards, commercial expectations, and compliance checks. Outreach menjelaskan value proposition untuk partner, tracking, support, payment, asset, and exclusivity. Recruitment bukan mengejar jumlah partner; active/productive partner ratio dan incremental contribution lebih relevan.

**Simulated example:** SIMULATED — program onboard 500 publishers tetapi hanya 20 aktif dan beberapa melanggar brand terms. Lebih baik merekrut 50 partners yang relevan dengan onboarding, support, and quality controls.

**Technical depth / workflow:**
- Define partner ICP. Tetapkan category, traffic, geo, audience, content type, and allowed promotion.
- Research and prioritize. Cari partner dari network/creator/content ecosystem dan score fit/risk.
- Outreach and onboard. Jelaskan offer, commission, tracking, payout, assets, disclosure, and support.
- Activate partners. Beri first campaign, monitor first conversions, and review quality before scaling.

**Practice / deliverable:** Buat recruitment pipeline untuk 30 partner prospects: source, type, audience, reach, fit, risks, contact, status, onboarding requirements, and activation target.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH04 — Commercial Model, Commission & Incentives

**Competency ID(s):** T15-C03

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Commission models meliputi CPS, CPA, CPL, hybrid, tiered, fixed fee, bonus, and performance incentives. Commission harus diuji terhadap gross margin, discount, returns, tax, fulfilment, marketplace fees, and existing customer behavior. Tiered incentives dapat meningkatkan volume tetapi mendorong low-quality conversions. Payout terms, validation, reversal, cap, and effective dates harus tercatat.

**Simulated example:** SIMULATED — produk memiliki contribution margin 25%. Commission 20% dari gross sales ditambah voucher 10% dapat membuat contribution negative setelah fees/returns. Program harus menghitung allowable commission berdasarkan eligible net value.

**Technical depth / workflow:**
- Define commission basis. Gross/net sales, pre/post discount, shipped/paid order, and refund policy.
- Model unit economics. Hitung product margin, fulfillment, payment/platform fee, discount, commission, and contribution.
- Design incentives. Set tier thresholds, quality gates, cap, bonus period, and eligible action.
- Document payout rules. Validation, reversal, tax, payment cycle, currency, and dispute process.

**Practice / deliverable:** Buat commission calculator untuk CPS/CPA/hybrid dengan sensitivity: AOV, margin, discount, refund, fee, commission, and allowable acquisition cost. Labeli assumptions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH05 — Affiliate Platform & Product Feed

**Competency ID(s):** T15-C04

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Affiliate platforms, product feeds, and tracking tools menghubungkan offer, SKU, deep links, attribution, publisher IDs, coupon codes, and conversion records. Product feeds membutuhkan title, price, availability, image, link, category, and update schedule. Deep links harus membuka product/app target dengan tracking intact. Platform access and available products differ by marketplace, country, seller, and program status; always verify current provider documentation.

**Simulated example:** SIMULATED — product feed masih menampilkan harga lama dan SKU out of stock. Affiliate content tetap mengirim traffic ke item tidak tersedia; feed sync and stock suppression perlu diaktifkan.

**Technical depth / workflow:**
- Inspect feed schema. Validate IDs, titles, images, price, stock, category, URL, and update frequency.
- Configure tracking. Set publisher ID, sub-ID, click ID, deep links, coupons, conversion event, and consent.
- Test end-to-end. Click link, open destination, verify parameters, purchase/lead, and postback/report record.
- Monitor feed health. Track rejected products, stale price, stock-out, broken URL, and mapping errors.

**Practice / deliverable:** Buat product feed data dictionary, deep-link/tracking map, and QA cases for five SKUs. Verify price, availability, image, destination, IDs, publisher attribution, and update cadence.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH06 — Tracking Links, Attribution & Conversion

**Competency ID(s):** T15-C04

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Tracking links and attribution menentukan bagaimana click dan conversions dipasangkan dengan publisher. Cookie loss, cross-device, browser restrictions, app/web, redirects, coupon leakage, last-click overwrites, and attribution windows dapat mengubah credit. Affiliate analyst harus memahami click ID, sub-ID, conversion IDs, dedupe, view/click rules, validation, and source of truth. Jangan menganggap attribution credit berarti incremental sale.

**Simulated example:** SIMULATED — user click creator affiliate link, kemudian mencari brand di Google dan membeli. Last-click search dapat mengambil credit; network rules menentukan affiliate credit. Analysis perlu memahami overwrite rules and assisted role.

**Technical depth / workflow:**
- Map tracking flow. Dari click ID/publisher ID menuju redirect, landing, event, validation, and postback.
- Define attribution. Tetapkan click/view rules, window, last-click/priority, coupons, and cross-device limitations.
- Prevent duplicates. Gunakan order ID/conversion ID, deduplication, and reversal rules.
- Reconcile sources. Bandingkan network, marketplace, CRM, and finance records.

**Practice / deliverable:** Buat affiliate attribution flow diagram dan reconciliation workbook: click IDs, sub-IDs, conversion IDs, window, coupon rules, dedupe, cross-device caveats, and sales source.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH07 — Affiliate Campaign Setup

**Competency ID(s):** T15-C04

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Affiliate campaign setup menggabungkan offer, partner groups, commission, creative, feed, landing, tracking, policy, and approval. Campaign structure dapat dipisah menurut SKU/category, geography, partner type, objective, or incentive. Launch checklist harus memastikan product ready, link/UTM/sub-ID valid, discount eligible, commission correct, stock available, and reporting/payout configured.

**Simulated example:** SIMULATED — campaign flash sale mengaktifkan voucher yang tidak berlaku untuk publisher affiliate. Partner mempromosikan harga salah dan order dibatalkan. Offer eligibility and assets must be checked before send.

**Technical depth / workflow:**
- Build campaign brief. Set objectives, products, offer, market, dates, budget/commission, and eligibility.
- Prepare partner assets. Provide banners, copy, product feed, links, coupon, disclosure, and restrictions.
- Configure tracking/commission. Test publisher IDs, conversion rules, caps, and reversals.
- Launch safely. QA stock/price/URL, partner approvals, policy, monitoring, and contact escalation.

**Practice / deliverable:** Buat affiliate launch pack untuk 10 publishers: campaign brief, offer matrix, commission, assets, links, product list, eligibility, disclosure, QA, and launch approval.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH08 — Creator Affiliate & Social Commerce

**Competency ID(s):** T15-C01

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Creator affiliate/social commerce menggabungkan content, live, short video, product showcase, shopping links, and commission. Creator performance harus dinilai melalui content quality, product demonstration, audience relevance, click/shop conversion, returns, and commission. Platform-native programs memiliki product eligibility, commission rates, content policy, settlement, and attribution rules yang dapat berubah; jangan menjanjikan akses jika seller/creator tidak eligible.

**Simulated example:** SIMULATED — TikTok creator live menghasilkan GMV tinggi tetapi return rate juga tinggi karena product demo misleading. Program perlu quality control, content accuracy, order validation, and commission reversal.

**Technical depth / workflow:**
- Define creator role. Product education, discovery, live demo, review, conversion, or repeat.
- Set commission/content rules. Commission, eligible SKU, disclosure, claims, live rules, and content deliverables.
- Track performance quality. Views, product clicks, add-to-cart, orders, cancellations, returns, and new-to-brand.
- Optimize relationships. Support content, exclusive offers, live schedule, and quality guardrails.

**Practice / deliverable:** Buat social commerce creator program untuk lima SKUs: creator tiers, commission, product feed, live/video brief, claim restrictions, tracking, order quality, returns, and payout conditions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH09 — Fraud, Traffic Quality & Compliance

**Competency ID(s):** T15-C05

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Fraud and traffic quality controls melindungi advertiser dari non-human clicks, cookie stuffing, click injection, fake orders, coupon abuse, incentivized traffic violations, and brand bidding violations. Tidak semua spike adalah fraud; detection harus menggunakan pattern, source, timestamps, device, conversion validation, and partner communication. Contract perlu memberi hak audit, suspend, reversal, and clawback.

**Simulated example:** SIMULATED — publisher menghasilkan click spike dengan zero engagement dan conversion timestamp hampir bersamaan. Ini red flag untuk investigation, bukan langsung bukti final; audit log dan source are needed.

**Technical depth / workflow:**
- Define policy. Daftar prohibited methods, eligible sources, disclosure, brand terms, and data restrictions.
- Monitor signals. Periksa click spikes, repeated IP/device, time-to-convert, duplicate orders, coupon leakage, and source mismatch.
- Investigate fairly. Collect evidence, contact partner, compare other sources, and classify confidence.
- Enforce controls. Hold commissions, reverse invalid conversions, suspend, clawback, or reinstate based on evidence/contract.

**Practice / deliverable:** Buat affiliate fraud playbook: risk taxonomy, monitoring alerts, investigation checklist, evidence log, partner communication, reversal/clawback rules, and escalation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH10 — Commission Reconciliation & Reporting

**Competency ID(s):** T15-C03, T15-C05

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Commission reconciliation menghitung eligible sales, cancellations, returns, duplicate orders, attribution rules, commission tiers, tax, payout currency, and invoice. Affiliate platform report tidak selalu sama dengan finance/marketplace due to delay or reversal windows. Reconciliation harus memiliki period, order IDs, partner IDs, rate table version, and approval trace.

**Simulated example:** SIMULATED — network melaporkan 1.000 sales, marketplace confirms 920 shipped orders, and finance 870 net paid after return/cancel. Payout should follow contract's eligible basis, not assume network clicks are final sales.

**Technical depth / workflow:**
- Set reporting cut-off. Tentukan order status, return window, currency, tax, and commission period.
- Match records. Join order IDs, publisher IDs, SKU, date, status, and commission table.
- Calculate payout. Apply reversals, tiers, caps, adjustments, and approved bonuses.
- Close disputes. Document evidence, partner queries, credit/debit notes, and payment approvals.

**Practice / deliverable:** Buat monthly commission reconciliation workbook untuk 30 synthetic orders. Hitung eligible, cancelled, returned, duplicate, net commission, tax, payout, variance, and approval.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH11 — Affiliate Optimization & Partner Growth

**Competency ID(s):** T15-C02, T15-C06

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Affiliate optimization and partner growth meningkatkan quality and contribution, bukan sekadar jumlah publishers. Segment partner by type, quality, value, activity, new-to-brand, category, order value, returns, commission, incrementality, and compliance. Growth levers include exclusive offers, product feed, content support, tiering, creator programs, and improved landing/stock. Partner activation and retention need relationship management and fair terms.

**Simulated example:** SIMULATED — 10% partner menghasilkan 80% net contribution; beberapa coupon partners merebut last-click dari returning customers. Growth plan mengalihkan reward ke niche content partners and creator programs with better acquisition quality.

**Technical depth / workflow:**
- Segment partner performance. Use type, quality, value, activity, new-to-brand, returns, and contribution.
- Find growth barriers. Review feed, offer, content, rate, stock, tracking, and support SLA.
- Design partner actions. Tier, bonus, exclusive offer, creative kit, content calendar, and retention.
- Protect economics. Review incremental profit, commission concentration, risk, and dependency.

**Practice / deliverable:** Buat partner growth scorecard dan 90-day action plan: activation, active rate, net sales, margin, new-to-brand, returns, fraud, commission, and partner tier.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T15-CH12 — Affiliate Capstone

**Competency ID(s):** T15-C06

**Agency evidence (role-level):** G: direct affiliate JD not located in this batch | D: Affiliate Account Manager title evidence in Publicis UK careers index | G: dedicated affiliate role evidence not located in this batch | A/B: Jakarta eCommerce Executive explicitly manages affiliate structures/campaigns | G: direct affiliate JD not located in this batch

**Learning objective / concept:** Affiliate Capstone menyatukan commercial model, recruitment, platform/feed, tracking, campaign, quality control, reconciliation, and partner growth. Pekerjaan harus memperlihatkan unit economics dan payout rules, bukan hanya link creation. Data synthetic harus diberi label dan platform access/terms diverifikasi per account. Portfolio perlu menunjukkan bagaimana program menjaga advertiser margin dan fair partner measurement.

**Simulated example:** SIMULATED — retailer ingin meningkatkan sales kategori dengan affiliate network, creator live, and content publishers. Capstone menetapkan commission tiers, product feed, tracking, fraud controls, returns reconciliation, and 90-day partner growth plan.

**Technical depth / workflow:**
- Frame the program. Set objective, product economics, eligible conversion, partner mix, and market.
- Build partner engine. Discovery, onboarding, terms, assets, feed, links, and activation.
- Control measurement/finance. Validate tracking, fraud, conversion status, commission, and payout.
- Grow responsibly. Optimize partner portfolio by incremental contribution and trust.

**Practice / deliverable:** Bangun affiliate capstone pack: program brief, ecosystem map, partner shortlist, commission model, feed/link QA, campaign plan, fraud playbook, reconciliation workbook, partner dashboard, and executive recommendation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

## 16. Community Management & Advocacy (`community`)

### DPA-T16-CH01 — Community Strategy & Purpose

**Competency ID(s):** T16-C01

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community strategy menetapkan mengapa komunitas perlu ada, siapa yang dilayani, nilai yang diberikan, rules, participation model, and expected business/customer impact. Komunitas dapat brand-owned, platform-based, customer-led, professional, or interest-based. Tujuan bukan hanya menambah anggota; community health mencakup trust, participation, safety, retention, and mutual value. Tidak semua brand membutuhkan komunitas milik sendiri.

**Simulated example:** SIMULATED — brand memiliki 100 ribu followers tetapi percakapan dan repeat contributors sangat sedikit. Strategi perlu menentukan purpose: support, peer learning, product feedback, advocacy, or shared interest, bukan membuat grup baru hanya demi angka anggota.

**Technical depth / workflow:**
- Define purpose. Tulis value untuk anggota dan brand; jangan mulai dari pilihan platform.
- Choose community model. Tentukan owned/platform/customer-led, open/closed, and participation level.
- Set success framework. Definisikan activation, participation quality, retention, safety, and customer outcomes.
- Govern it. Tetapkan owner, moderation policy, resources, privacy, and escalation.

**Practice / deliverable:** Buat community charter: purpose, member promise, target segments, platform rationale, entry rules, participation principles, governance, and measurable success criteria.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH02 — Audience Community Mapping

**Competency ID(s):** T16-C02

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community mapping mengidentifikasi ruang audience berkumpul, norms, influential members, moderators, critics, advocates, and unmet needs. Mapping perlu membedakan platform audience dari community participants dan memperhatikan public/private spaces. Listening harus menghormati privacy, context, and platform terms; jangan mengumpulkan data pribadi tanpa kebutuhan/izin.

**Simulated example:** SIMULATED — skincare audience berdiskusi di forum, comments, groups, and review pages. Setiap ruang memiliki tone/rules berbeda; brand perlu memahami norma sebelum masuk dengan promosi.

**Technical depth / workflow:**
- Map spaces. Catat platform, group/forum, topic, access, size indicators, and rules.
- Identify roles. Bedakan lurkers, contributors, moderators, experts, advocates, critics, and brand accounts.
- Read norms. Pelajari language, trust, promotion tolerance, conflict, and participation rituals.
- Document risk/value. Catat privacy, safety, relevance, and community expectations.

**Practice / deliverable:** Buat audience community map untuk satu kategori dengan 10 public spaces/accounts, member roles, norms, high-value conversations, risk, and ethical engagement approach.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH03 — Community Platform & Audience Segmentation

**Competency ID(s):** T16-C02

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community platform selection mempertimbangkan audience presence, conversation type, moderation capability, privacy, discoverability, searchability, features, member expectations, and operational burden. Segmentasi member dapat berdasarkan stage, expertise, interest, contribution, and support needs. Jangan memilih WhatsApp/Discord/Telegram hanya karena populer; platform harus sesuai purpose and safety requirements.

**Simulated example:** SIMULATED — community untuk customer support memerlukan searchable knowledge and ticket handoff; grup chat dengan volume tinggi sulit dicari dan dimoderasi. Forum/help center mungkin lebih tepat.

**Technical depth / workflow:**
- Define use case. Support, education, peer advice, advocacy, co-creation, or events.
- Compare platforms. Nilai access, discovery, moderation tools, analytics, privacy, search, roles, and integration.
- Design segments/roles. New members, experts, advocates, moderators, and customers at risk.
- Set onboarding. Welcome, rules, profile/data minimization, prompts, and escalation path.

**Practice / deliverable:** Buat platform decision matrix untuk tiga opsi komunitas: objective, user behavior, moderation tools, privacy, analytics, integrations, cost, and risk. Sertakan member segmentation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH04 — Social Listening & Conversation Intelligence

**Competency ID(s):** T16-C03

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Social listening and conversation intelligence mengubah percakapan menjadi insight melalui query design, source coverage, Boolean logic, taxonomy, sentiment/context coding, topic clustering, trend detection, and reporting. Sentiment automation tidak memahami seluruh ironi/slang/bahasa campuran; analyst harus melakukan manual validation. Volume mention bukan otomatis market opinion atau representative survey.

**Simulated example:** SIMULATED — tool mengklasifikasikan 'parah bagus' sebagai negative, padahal slang berarti positif. Bahasa Indonesia, code-switch, sarcasm, and context memerlukan sampling manual dan codebook.

**Technical depth / workflow:**
- Design queries. Buat brand/product/category/competitor terms, synonyms, exclusions, and language variants.
- Validate coverage. Uji recall/precision sample, platform coverage, private-space limits, and query noise.
- Code conversations. Klasifikasikan topic, sentiment/context, need, question, issue, and influence.
- Translate to action. Susun insight, confidence, escalation, content, product, and service implications.

**Practice / deliverable:** Buat listening query set dan coding book untuk brand/kategori. Analisis 100 synthetic/public-safe mentions: topic, sentiment, intent, audience tension, false positives, and recommended actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH05 — Community Management & Engagement

**Competency ID(s):** T16-C04

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community management menjalankan interaksi harian dan membangun participation. Community manager menjawab pertanyaan, memfasilitasi peer support, welcome newcomers, maintain tone, detect friction, and protect trust. Response quality harus akurat, human, timely, and consistent; jangan menjanjikan hal yang tidak dapat dipenuhi. SLA dibedakan berdasarkan question, complaint, safety, and crisis severity.

**Simulated example:** SIMULATED — pengguna bertanya tentang product allergy. Community manager tidak boleh memberi diagnosis medis; ia merespons secara empatik, merujuk label/support team, and escalates potential safety issue.

**Technical depth / workflow:**
- Set response principles. Tone, accuracy, empathy, boundaries, and source-of-truth.
- Design engagement routines. Welcome, conversation prompts, peer connections, event, and follow-up.
- Set SLA and routing. Categorize question/complaint/safety/legal with owner and due time.
- Record outcomes. Track resolution, repeat issues, member feedback, and escalation.

**Practice / deliverable:** Buat response playbook 20 cases: question, praise, complaint, misinformation, product issue, crisis signal, safety concern, and spam. Include response, owner, SLA, and escalation.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH06 — Content Programming & Community Activation

**Competency ID(s):** T16-C04

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Content programming membuat komunitas memiliki alasan untuk kembali dan berkontribusi. Program dapat berupa AMA, challenge, peer learning, feedback sessions, events, member stories, product clinics, and co-creation. Editorial plan harus mengikuti community questions and rhythms, bukan hanya brand broadcast. UGC membutuhkan permission, context, credit, rights, moderation, and safety review.

**Simulated example:** SIMULATED — brand membuat weekly challenge tetapi hadiah hanya mendorong low-quality spam. Program yang lebih baik memberi shared value: peer tips, expert feedback, recognition, or meaningful access.

**Technical depth / workflow:**
- Start from member needs. Pilih theme/format dari listening and recurring questions.
- Design participation. Tetapkan prompt, entry mechanics, reward/value, moderation, and inclusion.
- Plan content rhythm. Susun recurring programs, community milestones, and event calendar.
- Manage UGC rights. Obtain permission, source/credit, platform usage, edit approval, and retention.

**Practice / deliverable:** Buat 4-week community program calendar dengan 2 recurring formats, one event/AMA, UGC process, moderation roles, participation metric, and safety plan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH07 — Moderation, Guidelines & Brand Safety

**Competency ID(s):** T16-C05

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Moderation dan guidelines menjaga keamanan, trust, and brand suitability. Policy perlu mendefinisikan spam, harassment, hate, misinformation, personal data, threats, illegal activity, and product claims. Moderation ladder menentukan hide, remove, warn, mute, ban, or escalation; keputusan harus konsisten, documented, and appealable bila sesuai. Brand safety bukan berarti menghapus kritik yang sah.

**Simulated example:** SIMULATED — pelanggan menulis kritik produk bercampur bahasa kasar tetapi tidak abusive. Moderator perlu membedakan complaint legitimate dari harassment; menghapus semua kritik akan merusak trust.

**Technical depth / workflow:**
- Write guidelines. Definisikan accepted behavior, prohibited content, consequences, privacy, and appeals.
- Build moderation matrix. Tentukan severity, response, evidence, owner, and escalation.
- Train moderators. Gunakan scenarios, consistency calibration, and sensitive-case protocols.
- Audit decisions. Review false positives/negatives, appeal, fairness, and member safety.

**Practice / deliverable:** Buat community rules dan moderation matrix dengan 10 scenarios, severity, action, response template, evidence retention, appeal, and escalation owner.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH08 — Customer Care & Response Management

**Competency ID(s):** T16-C04, T16-C05

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Customer care via community/social harus menghubungkan public response dengan private case handling. Community manager perlu memahami privacy, verification, ticketing, SLA, escalation, and crisis boundaries. Jangan meminta nomor order/PII di public comments; arahkan ke secure channel. Public response tetap perlu menunjukkan ownership tanpa membocorkan data customer.

**Simulated example:** SIMULATED — pelanggan mengunggah nomor telepon dan order ID di komentar. Community manager meminta penghapusan/menyembunyikan data, memindahkan percakapan ke secure ticket, and memastikan public follow-up setelah resolution.

**Technical depth / workflow:**
- Classify case. Pisahkan inquiry, complaint, transaction, safety, privacy, and legal issue.
- Protect data. Jangan meminta/mengulang PII di publik; gunakan verified private channel.
- Route and track. Buat ticket, assign owner, SLA, case status, and update cadence.
- Close the loop. Pastikan resolution, public acknowledgement where appropriate, and root-cause feedback.

**Practice / deliverable:** Buat customer care handoff flow dan response templates untuk order issue, refund, product defect, privacy complaint, and safety incident. Sertakan PII rules and SLA.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH09 — Advocacy, UGC & Brand Relationship

**Competency ID(s):** T16-C06

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Advocacy dan UGC membangun hubungan sehingga member secara sukarela membantu brand melalui recommendation, review, referrals, content, feedback, and peer support. Advocacy program harus memberi recognition/value tanpa membeli opini atau memaksa positive reviews. Permission, disclosure, incentives, content rights, and authenticity perlu diatur. Advocate bukan sekadar member dengan follower tinggi; trust dan helpful contribution lebih penting.

**Simulated example:** SIMULATED — brand memberi reward hanya untuk review bintang lima. Itu mendorong bias dan berisiko melanggar platform policies. Program yang sehat memberi reward atas partisipasi/feedback tanpa mengontrol sentiment.

**Technical depth / workflow:**
- Define advocacy behaviors. Referral, helpful answers, UGC, reviews, beta feedback, or event participation.
- Design recognition. Rewards, access, education, status, or community value without buying positive sentiment.
- Secure consent/rights. Obtain content permissions and disclosure for incentivized activity.
- Measure trust. Track repeat advocacy, contribution quality, referrals, sentiment context, and member retention.

**Practice / deliverable:** Buat advocacy program blueprint: member tiers/behaviors, recognition system, UGC permission, referral flow, review policy, disclosure, and health metrics.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH10 — Crisis Monitoring & Escalation

**Competency ID(s):** T16-C05

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Crisis monitoring mengamati early signals, complaint velocity, sentiment/context, safety reports, influential actors, and potential escalation. Crisis playbook harus mendefinisikan trigger, severity, spokesperson, legal/PR/customer care owners, holding statement, approval, evidence preservation, and updates. Community manager tidak boleh berspekulasi atau menghapus kritik substansial; ia harus menjaga factuality, empathy, and escalation.

**Simulated example:** SIMULATED — rumor kualitas produk menyebar dan ada satu report adverse effect. Tim perlu membedakan rumor, verified safety incident, and misinformation; issue harus di-escalate ke product safety/legal sebelum brand membuat statement.

**Technical depth / workflow:**
- Set early-warning rules. Monitor volume spikes, risk keywords, safety terms, influential posts, and cross-platform spread.
- Classify severity. Tentukan service, reputation, safety, legal, or security issue.
- Activate playbook. Assign incident lead, verify facts, approve statement, route cases, and time updates.
- Review after crisis. Document timeline, root causes, response effectiveness, member impact, and prevention.

**Practice / deliverable:** Buat crisis playbook dengan 5 scenarios, severity triggers, RACI, holding statement, approval chain, response SLA, evidence log, and after-action review.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH11 — Community Measurement & Reporting

**Competency ID(s):** T16-C07

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community measurement mengukur health dan value: active members, repeat contributors, meaningful conversation, response SLA, resolution, sentiment/context, retention, safety incidents, UGC quality, referral, and customer outcomes. Metrics perlu denominator, period, segment, and sampling method. Follower/member count tidak menunjukkan value tanpa participation. Report harus memadukan quantitative trend dan qualitative examples.

**Simulated example:** SIMULATED — community growth naik 40% setelah giveaway, tetapi repeat contributors turun dan spam meningkat. Member count meningkat tanpa health; segmentation and behavior metrics menunjukkan quality decline.

**Technical depth / workflow:**
- Define health dimensions. Acquisition, activation, contribution, connection, retention, safety, and value.
- Build metrics. Active member rate, repeat contributor, response/resolution, moderation, and meaningful actions.
- Combine quant and qual. Trend data dengan conversation examples and member feedback.
- Recommend action. Hubungkan findings ke programming, moderation, service, and product changes.

**Practice / deliverable:** Buat community health dashboard dan monthly report: active members, contributor rate, repeat, SLA, resolution, moderation, sentiment themes, UGC permissions, and next actions.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

**Tools / method / workflow:** derive from the technical-depth steps above; named tools must be verified against the specific platform version and current access.

**Resources:** No chapter-level resource link captured in the HTML chapter block. Map official learning resources and verify access/cost/credential separately.

**Rubric / passing criteria:** NOT DEFINED at chapter level. Apply the shared 0–3 assessment framework only after observable role-specific criteria, pass threshold, assessor notes and resubmission rules are authored.

**Gap / review action:** SME must validate concept accuracy, step sequence, answer-key correctness, practice realism, deliverable quality, source links and role specificity. Agency evidence is currently role-level only, not chapter-specific.

### DPA-T16-CH12 — Community Capstone

**Competency ID(s):** T16-C07

**Agency evidence (role-level):** B: social/content roles with community-adjacent responsibilities | A: Social & Community Management Specialist, community conversation, moderation, UGC and reporting | A: Social Media Strategist role includes community management, social listening and social reporting | B: Senior Social Media Executive and Social Media Officer include community engagement | G: direct community role not located in current Havas Media index

**Learning objective / concept:** Community Capstone menyatukan purpose, audience mapping, platform selection, listening, engagement, programming, moderation, customer care, advocacy, crisis, and measurement. Deliverable harus operasional: charter, governance, calendar, response bank, escalation, and dashboard. Community bukan sekadar group chat; keberhasilannya diukur dari value dan safety bagi anggota serta dampaknya pada relationship/customer experience.

**Simulated example:** SIMULATED — brand membuat community 90 hari untuk pelanggan baru dan power users. Capstone merancang onboarding, peer learning, product feedback, moderation, support escalation, UGC permission, and advocate recognition.

**Technical depth / workflow:**
- Frame community value. Tetapkan member promise, role, audience, and purpose.
- Design operations. Pilih platform, segments, programming, moderation, customer care, and governance.
- Activate relationships. Onboard members, encourage participation, support advocates, and manage risk.
- Measure health. Track retention, participation, safety, resolution, and business/customer value.

**Practice / deliverable:** Bangun community operating pack: charter, audience map, platform decision, onboarding, 4-week calendar, moderation matrix, care handoff, advocacy program, crisis playbook, dashboard, and after-action plan.

**Assessment / comprehension checks:** 3 static Q&A item(s); no score engine or passing threshold verified.
1. **Q:** undefined
   **Expected answer in guide:** undefined
2. **Q:** undefined
   **Expected answer in guide:** undefined
3. **Q:** undefined
   **Expected answer in guide:** undefined

**Glossary:** undefined: undefined; undefined: undefined; undefined: undefined; undefined: undefined

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