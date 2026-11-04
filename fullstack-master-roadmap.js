/* Original Full-Stack Digital Performance Architect baseline crosswalk.
 * Maps the 8-week core roadmap + W0 sandbox setup to the current 10-chapter Full-Stack track.
 * Credential names are routes to verify at the issuer; not all learning paths are certifications.
 * All scenario data/results in the roadmap are synthetic unless explicitly sourced.
 */
var FULLSTACK_MASTER_WEEKS = {
W0:{
 title:"Sandbox, workspace & evidence setup",
 time:"60–90 menit · setup, bukan core learning week",
 learn:["Pilih satu realistic practice business dan tulis model bisnis, market, product/service, geography serta batas simulasi.","Siapkan folder evidence: brief, research, campaign architecture, tracking, analysis, QA, credential evidence, dan portfolio.","Pahami batas akses: demo account/learning sandbox tidak sama dengan live Ads Manager, DSP seat, production CRM, atau client campaign.","Tentukan aturan data: jangan unggah PII, gunakan data demo/synthetic, catat sumber, periode, dan keterbatasan."],
 credential:"Tidak ada credential wajib. Fokus pada kesiapan environment dan dokumentasi.",
 exact:[
  ["Google Analytics Demo Account","https://support.google.com/analytics/answer/6367342?hl=id","Data demonstrasi resmi untuk eksplorasi GA4; read-only, bukan akses campaign live."],
  ["BigQuery Sandbox","https://cloud.google.com/bigquery/docs/sandbox","Latihan query BigQuery tanpa menyiapkan billing account untuk sandbox usage."],
  ["Microsoft Clarity","https://clarity.microsoft.com/","Tool behavioral analytics untuk heatmap dan session recording; gunakan demo/practice project."],
  ["Google Trends","https://trends.google.com/trends/","Eksplorasi relative search interest, bukan market size atau causal evidence."]
 ],
 build:["Tentukan satu practice brand dan tulis scope, audience, product, region, objective, serta assumptions.","Buat project folder, naming convention, evidence log, version log, dan risk/limitation log.","Buat daftar akses yang diperlukan dan tandai mana yang tersedia, demo, atau belum tersedia."],
 verify:["Apakah semua angka/claim memiliki source atau label SIMULATED?","Apakah tidak ada data personal/sensitif dalam file latihan?","Apakah lu bisa membedakan demo environment, design artifact, dan production implementation?"],
 architect:"Buat reusable project template: brief, measurement spec, QA log, change log, experiment log, portfolio evidence, serta AI-human review policy."
},
W01:{
 title:"Business, Customer, Funnel & Unit Economics",
 time:"6–8 jam core + 30–60 menit optional Architect add-on",
 learn:["Turunkan business objective → marketing objective → channel objective → KPI; tulis siapa decision owner dan hasil bisnis yang perlu berubah.","Pahami customer problem, value proposition, Jobs to Be Done, audience segment, customer journey, funnel stage, dan leakage hypothesis.","Bangun KPI tree dengan primary, diagnostic, leading, lagging, dan guardrail metrics.","Hitung CAC, LTV, gross/contribution margin, AOV, payback, MER; samakan definisi, denominator, periode, dan basis margin.","Pisahkan observed evidence, interpretation, assumption, dan external factor. Google Trends menunjukkan relative interest, bukan market size."],
 credential:"Primary/supporting route: HubSpot Digital Marketing Certification dan HubSpot Inbound Certification. Keduanya course/certification dari HubSpot Academy; cek bahasa, assessment, dan ketentuan provider sebelum mencantumkan credential.",
 exact:[
  ["HubSpot · Digital Marketing Certification","https://academy.hubspot.com/courses/digital-marketing","Fondasi human-centered digital marketing, SEO, social, email, dan advertising."],
  ["HubSpot · Inbound Certification","https://academy.hubspot.com/courses/inbound","Buyer personas, journey, flywheel, dan customer-centered strategy."],
  ["Google Trends","https://trends.google.com/trends/","Sinyal relative search interest; bukan estimasi market size atau bukti kausal."]
 ],
 build:["Tulis one-page business brief: goal, target audience, offer, constraints, baseline, data gap, decision owner.","Petakan customer journey dan minimal tiga leakage hypotheses dengan evidence yang dibutuhkan.","Bangun KPI tree dan satu unit-economics sensitivity sheet; simulasi CPC/CVR/CPA dan impact pada contribution/payback."],
 verify:["Apakah setiap KPI terhubung ke business decision, bukan sekadar vanity metric?","Apakah evidence dan assumption terpisah?","Jika CPC naik 20%, dapatkah lu menjelaskan dampak ke CPA, contribution margin, dan payback dengan asumsi yang tertulis?"],
 architect:"CFO-ready Financial Growth Model di Google Sheets: CPC/CVR → CPA → conversion volume → revenue → variable costs → contribution margin → payback. Uji downside/base/upside; beri label SYNTHETIC."
},
W02:{
 title:"Research, Offer, Landing Page & CRO",
 time:"6–9 jam core + 30 menit optional Architect add-on",
 learn:["Rumuskan research question; buat evidence log dan competitor map. Bedakan fakta, interpretasi, dan asumsi.","Audit offer, message hierarchy, relevance, proof, objection, friction, CTA, dan product/market constraints.","Pastikan query/ad promise cocok dengan landing-page message, offer, price, eligibility, dan next action.","Susun mobile-first landing-page wireframe: information hierarchy, trust, forms, speed, accessibility, and conversion path.","CRO hypothesis harus menyebut observation, insight, change, expected mechanism, audience, primary metric, guardrail, decision rule, serta risk.","Prioritaskan melalui impact, confidence, effort, dan risk; ICE adalah aid, bukan kebenaran objektif."],
 credential:"Supporting route: HubSpot Digital Advertising Certification atau Content Marketing Certification sesuai fokus. Microsoft Clarity adalah tool, bukan sertifikasi. Credential dan tool access tidak boleh disamakan.",
 exact:[
  ["HubSpot · Digital Advertising Certification","https://academy.hubspot.com/courses/digital-advertising","Paid media planning, audience targeting, conversion paths; cek current access/language."],
  ["HubSpot · Content Marketing Certification","https://academy.hubspot.com/courses/content-marketing","Content strategy, SEO, planning, measurement; course free, pilihan bahasa saat ini tidak mencakup Bahasa Indonesia."],
  ["Microsoft Clarity","https://clarity.microsoft.com/","Heatmaps/session recordings sebagai behavioral evidence; bukan bukti causal effect."]
 ],
 build:["Bandingkan tiga demand themes via Google Trends; catat geo, time range, dan keterbatasannya.","Buat value proposition, offer, dan satu mobile-first landing-page wireframe.","Tulis 8–10 CRO hypotheses; beri priority score dan jelaskan data yang harus dikumpulkan sebelum testing."],
 verify:["Bisakah audience memahami value/offer utama dalam beberapa detik?","Apakah setiap eksperimen memiliki hipotesis yang bisa dibantah, metric, guardrail, dan stopping/decision rule?","Apakah Clarity insight ditafsirkan sebagai behavioral clue, bukan bukti sebab-akibat dari sedikit recording?"],
 architect:"Competitor intelligence blueprint: Meta Ad Library/manual competitor research → evidence log → LLM-assisted tagging → human verification. Otomasi scraping/API hanya bila terms dan izin sumber mengizinkan; jangan gunakan tool untuk melewati access controls."
},
W03:{
 title:"Google Ads & Search Intent",
 time:"6–9 jam core + 30–60 menit optional Architect add-on",
 learn:["Pahami search intent/query classes, auction eligibility, Ad Rank, account/campaign/ad group architecture.","Kelompokkan keyword berdasarkan intent; bedakan keyword target dari search term aktual.","Pahami match types dan negative keyword logic; audit search terms agar tidak menutup traffic relevan.","Susun Responsive Search Ads, assets, message match, landing-page relevance, conversion actions, dan bidding concepts.","Quality Score dipakai sebagai diagnostic signal, bukan satu-satunya KPI. Evaluasi CPA/value/margin dan query quality."],
 credential:"Primary: Google Ads Search Certification melalui Google Skillshop. Sertifikasi Search berbeda dari Display, Display & Video 360, dan Campaign Manager 360. HubSpot Digital Advertising dapat menjadi supporting course, bukan pengganti sertifikasi Google.",
 exact:[
  ["Google Skillshop · Google Ads Learning Paths","https://skillshop.withgoogle.com/googleads/","Entry point resmi untuk learning dan certification paths Google Ads; pilih Search path dan cek assessment/eligibility terkini."],
  ["Google Ads Help","https://support.google.com/google-ads/?hl=en","Dokumentasi resmi auction, keyword, search terms, bidding, conversion, dan campaign setup."]
 ],
 build:["Petakan minimal 20 search queries menjadi intent buckets dan beri prioritas berdasarkan relevance/economics, bukan volume saja.","Buat campaign → ad group → keyword architecture serta negative-keyword logic sheet.","Tulis dua RSA concepts per ad group dan mapping keyword cluster ke landing page.","Rancang conversion action/value definitions dan tulis assumption untuk bidding."],
 verify:["Bisakah setiap keyword grouping dijustifikasi dengan intent dan page match?","Apakah negative keywords menghindari false-positive exclusions?","Apakah ad promise cocok dengan landing page dan conversion event terdefinisi?"],
 architect:"Rancang click-ID capture architecture (mis. GCLID) ke CRM/lead record untuk offline conversion feedback loop. Buat system diagram saja kecuali benar-benar telah diimplementasikan dan diuji; jangan klaim live deployment."
},
W04:{
 title:"Meta Ads, TikTok Ads & Creative Testing",
 time:"6–9 jam core + 30–60 menit optional Architect add-on",
 learn:["Pahami Meta campaign objective, audience logic, Ads Manager structure, placements, budget, creative, dan measurement.","Pahami TikTok-native creative: hook, concept, opening, format, CTA, pacing, dan iteration.","Bedakan hypothesis creative, audience hypothesis, dan offer hypothesis; isolasi variable saat testing.","Tetapkan primary metric, guardrail, test duration, sample/volume consideration, stop rule, dan downstream quality.","Creative fatigue dan delivery signals tidak boleh ditafsirkan hanya dari satu metric."],
 credential:"Meta: Meta Blueprint Small Business Academy Ads Manager skilling certificate memiliki jalur/skill test sendiri; Course Completion Credential dan Meta professional certification adalah credential berbeda. TikTok: eligible Academy learning paths memberi Achievement setelah required course/assessment; bukan otomatis professional certification. TikTok Media Buying Certification adalah advanced exam dengan eligibility/experience rules tersendiri.",
 exact:[
  ["Meta Blueprint · Ads Manager Learning","https://www.facebookblueprint.com/student/collection/507005-meta-ads-manager-learning","Jalur pembelajaran Ads Manager; cek current skill-test requirement untuk skilling certificate."],
  ["Meta Blueprint · Learning Catalog","https://www.facebookblueprint.com/student/catalog","Cari course sesuai campaign objectives, audience, auction, creative, measurement, dan privacy."],
  ["TikTok Academy · Achievements","https://www.tiktokacademy.com/student/collection/3523001-achievements","Daftar learning paths/achievement; cek required courses dan assessment."],
  ["TikTok Business Learning Center","https://ads.tiktok.com/business/learn/course/list","Materi resmi untuk ads, creative, campaign setup, dan optimization."]
 ],
 build:["Buat Meta audience hypothesis dan campaign blueprint untuk case yang sama.","Buat TikTok creative matrix minimal 10 hooks/angles dengan rationale audience/intent.","Tulis test protocol: hypothesis, variable, control, audience, budget assumption, duration, primary metric, guardrail, stop rule.","Buat evidence pack dan label semua forecast/performance numbers sebagai SIMULATED."],
 verify:["Bisakah lu menjelaskan hubungan campaign objective dan business goal?","Apakah test mengisolasi variable yang berguna?","Apakah simulasi tidak dipresentasikan sebagai real campaign outcome?"],
 architect:"Closed-loop offline conversion blueprint: lead capture → consent → CRM qualification → sale/revenue → platform feedback. Diagram harus menyertakan deduplication, event ID, field mapping, privacy, and QA; design-only bila belum live."
},
W05:{
 title:"SEO, Content & AI Search / AEO",
 time:"6–9 jam core + 30 menit optional Architect add-on",
 learn:["Pelajari search intent, crawling, rendering, indexing, ranking, dan result presentation.","Bedakan technical, on-page, off-page SEO; internal linking, page quality, dan Core Web Vitals.","Buat keyword-intent mapping, topic clusters, content brief, content production, dan distribution plan.","Pahami AI-powered search/answer-engine visibility. Google menyatakan fondasi SEO biasa tetap berlaku dan tidak ada trik/schema khusus yang menjamin citation pada AI Overviews/AI Mode.","Structured data harus akurat dan cocok dengan konten visible; jangan klaim menjamin AI citation."],
 credential:"Primary: Semrush SEO Crash Course certificate. Additional: HubSpot AEO Fundamentals jika peserta menyelesaikan course dan lulus persyaratannya. Google Search Central adalah dokumentasi resmi, bukan sertifikasi SEO universal.",
 exact:[
  ["Google Search Central · SEO Starter Guide","https://developers.google.com/search/docs/fundamentals/seo-starter-guide","Fondasi official SEO: crawl/index, content usefulness, structure, and links."],
  ["Google Search Central · AI Features and Your Website","https://developers.google.com/search/docs/appearance/ai-features","Panduan resmi tentang AI Overviews/AI Mode; tidak ada persyaratan optimasi khusus."],
  ["Google Search Central · AI Optimization Guide","https://developers.google.com/search/docs/fundamentals/ai-optimization-guide","Panduan resmi tambahan untuk konten/website pada AI search."],
  ["Semrush Academy · SEO Crash Course","https://www.semrush.com/academy/courses/semrush-seo-crash-course-with-brian-dean/","Course SEO gratis; cek exam dan sertifikat di provider."],
  ["HubSpot Academy · AEO Fundamentals","https://academy.hubspot.com/courses/aeo-fundamentals-certification-en","Learning route tentang visibility pada traditional search dan answer engines."]
 ],
 build:["Buat keyword-intent map dan topic cluster.","Audit satu halaman: title, headings, internal links, content usefulness, dan basic technical issue.","Buat tiga content briefs dan distribution plan.","Buat AEO/AI-search visibility checklist yang tidak menjanjikan citation."],
 verify:["Bisakah lu memisahkan traditional SEO dari AEO/AI-search observation?","Apakah schema/JSON-LD tidak diklaim menjamin citation/ranking?","Apakah laporan menggunakan Search Console/analytics data atau memberi label SIMULATED?"],
 architect:"Buat entity/schema blueprint dan repeatable AI-search monitoring prompt set. Catat engine, prompt, date, output, citation, serta keterbatasan sampling; bukan jaminan tampil di AI answer."
},
W06:{
 title:"Measurement Planning, GA4, GTM & QA",
 time:"6–9 jam core + 30–60 menit optional Architect add-on",
 learn:["Gunakan chain business question → decision → KPI → event → parameter → report → owner.","Pahami GA4 event-based model, event taxonomy/naming, UTM conventions, dan reporting dimensions.","Pelajari GTM tags, triggers, variables, Preview/Debug, publish workflow, dan event verification.","Terapkan consent, data minimization, source of truth, deduplication, and QA expected vs actual.","Pastikan tidak mengklaim implementasi jika yang dibuat baru measurement plan atau implementation design."],
 credential:"Primary target: Google Analytics Certification via official Google Analytics Academy/Skillshop route when accessible. Supporting: Analytics Mania GA4/GTM course-completion certificates. Completion certificate dan Google professional certification bukan hal yang sama.",
 exact:[
  ["Google Analytics · Analytics Academy & Certification","https://support.google.com/analytics/answer/15068052","Entry point resmi untuk Analytics Academy courses/certification; cek current route di Skillshop."],
  ["Analytics Mania · Free GA4 Fundamentals","https://www.analyticsmania.com/courses/free-google-analytics-fundamentals-course/","Alternative learning/course-completion evidence route."],
  ["Analytics Mania · GTM Fundamentals","https://www.analyticsmania.com/courses/google-tag-manager-fundamentals-course/","GTM practical fundamentals and course-completion evidence."],
  ["Google Tag Manager · Set Up GA4 Events","https://support.google.com/tagmanager/answer/13034206?hl=en","Official setup and event/trigger reference."]
 ],
 build:["Buat measurement plan dari lima business questions.","Definisikan event taxonomy dan parameters untuk CTA click, WhatsApp click, form start, form submit, dan qualified lead/purchase.","Susun UTM naming convention dan GTM implementation map.","Buat QA log dengan expected event, actual event, duplicates, missing parameters, consent state, owner, and evidence."],
 verify:["Dapatkah setiap critical event dibuktikan sesuai decision/KPI?","Dapatkah lu mendeteksi duplicate/missing parameter dan consent failure?","Apakah label plan/design berbeda dari deployed implementation?"],
 architect:"Buat sGTM/CAPI/Consent Mode architecture literacy diagram: browser/server events, consent, deduplication, event IDs, and data minimization. Jangan deploy atau klaim production tanpa real test."
},
W07:{
 title:"Dashboard, Diagnosis, Attribution & Experimentation",
 time:"6–9 jam core + 30–60 menit optional Architect add-on",
 learn:["Rancang executive dashboard untuk keputusan, bukan sekadar galeri chart.","Gunakan funnel dan cohort diagnosis; pisahkan observation, interpretation, verification, recommendation.","Pahami attribution models/windows dan keterbatasannya; platform ROAS bukan otomatis incremental revenue.","Bedakan correlation dan causation; pahami incrementality, holdout, experiment backlog, dan anomaly detection.","Gunakan synthetic data untuk latihan ketika akses data client tidak ada."],
 credential:"Looker Studio diperlakukan sebagai tool (tidak diklaim memiliki dedicated free certification). Supporting learning dapat menggunakan Google Analytics certification dan Semrush Fundamentals of Marketing Analytics. Coursera Meta Marketing Analytics adalah opsi professional certificate dengan access/payment conditions.",
 exact:[
  ["Looker Studio · Documentation","https://support.google.com/looker-studio","Official dashboard/data visualization documentation; tool learning, not a dedicated certification claim."],
  ["Semrush · Fundamentals of Marketing Analytics","https://www.semrush.com/academy/courses/fundamentals-of-marketing-analytics/","Supporting analytics course; verify completion/exam conditions."],
  ["Google Analytics Demo Account","https://support.google.com/analytics/answer/6367342?hl=id","Demo property with realistic sample data for analysis practice."],
  ["BigQuery Sandbox","https://cloud.google.com/bigquery/docs/sandbox","Optional sandbox for SQL and anomaly-detection practice."],
  ["Meta Marketing Analytics · Coursera","https://www.coursera.org/professional-certificates/facebook-marketing-analytics","Professional certificate route; access/subscription/financial-aid conditions apply."]
 ],
 build:["Buat Looker Studio dashboard dengan trend, funnel, channel, dan campaign views.","Tulis diagnostic memo: what changed, where, since when, segment, hypotheses, evidence needed, next action.","Buat lima experiment hypotheses dengan guardrails.","Buat simple incrementality/holdout calculator menggunakan data SIMULATED."],
 verify:["Apakah platform ROAS dipisahkan dari incremental revenue?","Apakah synthetic data diberi label?","Apakah causal claim ditahan sampai ada experiment/causal evidence?"],
 architect:"BigQuery Sandbox + basic SQL anomaly detection: write query, inspect data grain, reconcile totals, and document limitations. Sandbox work bukan production data engineering."
},
W08:{
 title:"CRM, Email, Automation, AI & Portfolio",
 time:"6–9 jam core + 30–60 menit optional Architect add-on",
 learn:["Pahami lifecycle stages, lead management, segmentation, retention, activation, and reactivation.","Pelajari email strategy, deliverability, testing, permission/consent, unsubscribe, and data hygiene.","Rancang automation triggers, conditions, actions, branches, suppression, exit, and failure fallback.","Pahami AI-assisted research/analysis/creative iteration, human review, governance, privacy, and source validation.","Package portfolio dengan problem, method, artifacts, credential evidence, simulated labels, and self-review."],
 credential:"Primary: HubSpot Email Marketing Certification (free course/certification subject to course completion/exam). Supporting: Microsoft Learn achievements/badges/trophies (not professional certification), Semrush AI for Marketing certificate, and Zapier Academy learning/evidence (verify current credential per path).",
 exact:[
  ["HubSpot · Email Marketing Certification","https://academy.hubspot.com/courses/email-marketing-certification-en","Free course/certification, includes segmentation, automation, deliverability, and testing."],
  ["Zapier Academy","https://learn.zapier.com/","Learning resource; verify whether the selected current course offers a completion credential."],
  ["Microsoft Learn · AI Learning","https://learn.microsoft.com/training/ai/","Learning modules and profile achievements/badges; not all badges are professional certifications."],
  ["Microsoft Learn · Badges and Trophies FAQ","https://learn.microsoft.com/en-us/training/support/faq","Official explanation of achievements, badges, trophies, and profile sharing."],
  ["Semrush · AI for Marketing","https://www.semrush.com/academy/courses/ai-for-marketing-course/","AI marketing course; check current certificate/assessment route."]
 ],
 build:["Buat lifecycle map dengan entry/exit criteria dan owner.","Desain form → CRM/Sheet → segment → follow-up → nurture workflow.","Tulis email sequence dengan consent, preference, frequency, and unsubscribe logic.","Bangun AI prompt library untuk research/analysis dan human-review checklist.","Package 8-week project menjadi portfolio case study."],
 verify:["Apakah automation menangani missing data, duplicates, consent changes, dan opt-out?","Apakah semua AI output direview manusia sebelum dipakai?","Apakah hasil simulasi diberi label synthetic/hypothetical?"],
 architect:"Design predictive lead-scoring/reverse-ETL concept. Nyatakan input/feature, governance, owner, test, fallback, and why it is prototype architecture—not production ML."
}
};
var FULLSTACK_MASTER_MAP = [
 ["W0","W01"],
 ["W01","W02"],
 ["W01","W07"],
 ["W02","W03","W04"],
 ["W03","W04"],
 ["W05"],
 ["W06","W07"],
 ["W02","W07"],
 ["W08"],
 ["W01","W02","W03","W04","W05","W06","W07","W08"]
];
