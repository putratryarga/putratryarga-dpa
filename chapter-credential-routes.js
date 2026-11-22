/* DPA chapter-level external credential routes.
 * Issuer pages were desk-checked on 2026-11-21. This is first-pass mapping,
 * not final SME acceptance or proof of Indonesia account/checkout eligibility.
 * DPA does not issue or verify external credentials.
 */
(function(root){
"use strict";
var registry = {
  "google_ads_search": {
    "provider": "Google",
    "title": "Google Ads Search Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Akreditasi profesional Google untuk kemahiran Google Ads. Relevan sebagai validasi khusus Search Ads, bukan bukti seluruh kemampuan digital performance.",
    "duration": "Assessment 75 menit; skor lulus 80%.",
    "cost": "Tidak ada biaya ujian yang dinyatakan pada halaman bantuan issuer yang diperiksa; cek ketentuan akun saat mendaftar.",
    "eligibility": "Google menyarankan pengalaman praktik Google Ads. Akun Skillshop diperlukan.",
    "validity": "Berlaku 1 tahun; perpanjangan melalui assessment ulang.",
    "regional": "Bahasa Indonesia tercantum dalam 22 bahasa sertifikasi. Akses akun/assessment dari Indonesia tetap perlu dicek saat enrolment.",
    "url": "https://skillshop.withgoogle.com/",
    "sourceUrl": "https://support.google.com/google-ads/answer/9702955?hl=id",
    "award": "Sertifikasi profesional Google Ads untuk area produk yang dipilih.",
    "scope": "Platform-specific; tidak mengukur kemampuan planning lintas channel.",
    "verifiedOn": "2026-11-21"
  },
  "meta_marketing_science": {
    "provider": "Meta Blueprint",
    "title": "Meta Certified Marketing Science Professional",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "Sertifikasi profesional untuk merumuskan business goals dan KPI, memilih metodologi pengukuran, merancang test, membaca hasil analisis, dan menyusun rekomendasi berbasis data. Cakupannya spesifik pada kompetensi Marketing Science Meta.",
    "duration": "60 pertanyaan; 90 menit menurut panduan sertifikasi Meta yang dipublikasikan pada 2026.",
    "cost": "Harga ujian tidak dinyatakan pada halaman publik yang diperiksa; cek biaya dan ketersediaan saat registrasi.",
    "eligibility": "Ikuti learning path, persiapan, dan persyaratan ujian yang ditetapkan Meta Certification Hub.",
    "validity": "Periksa masa berlaku dan renewal pada ketentuan sertifikasi terkini.",
    "regional": "Bahasa ujian, akses akun, dan eligibility peserta Indonesia belum diverifikasi.",
    "url": "https://certifications.facebookblueprint.com/student/catalog",
    "sourceUrl": "https://www.facebookblueprint.com/student/activity/697093-meta-certified-marketing-science-professional",
    "award": "Meta Certified Marketing Science Professional; award dikeluarkan Meta setelah persyaratan dan ujian dipenuhi.",
    "scope": "Meta-issued professional certification; tidak menggantikan kompetensi statistik, eksperimen, dan measurement lintas platform.",
    "verifiedOn": "2026-11-21"
  },
  "forage_omnichannel_certificate": {
    "provider": "Forage",
    "title": "Forage · Omnichannel Marketing Simulation Certificate",
    "type": "simulation_completion_certificate",
    "label": "Simulation completion certificate",
    "tagClass": "t-completion",
    "paidExam": false,
    "description": "Simulasi kerja mandiri 5–6 jam yang meminta peserta membuat integrated marketing plan dan creative brief untuk peluncuran produk fiktif. Forage menyatakan peserta dapat memperoleh certificate untuk dicantumkan di CV/LinkedIn setelah menyelesaikan simulasi.",
    "duration": "5–6 jam; self-paced.",
    "cost": "Free simulation.",
    "eligibility": "Selesaikan seluruh task dan ketentuan completion pada akun Forage.",
    "validity": "Tidak dinyatakan sebagai sertifikasi profesional berjangka; ini bukti penyelesaian simulasi.",
    "regional": "Halaman publik menawarkan simulasi self-paced; akun, akses, dan penerbitan certificate untuk peserta Indonesia mengikuti ketentuan Forage dan belum diuji dengan akun lokal.",
    "url": "https://www.theforage.com/simulations/forage/sponsored-content-omnichannel-marketing-5iep",
    "sourceUrl": "https://www.theforage.com/simulations/forage/sponsored-content-omnichannel-marketing-5iep",
    "award": "Forage completion certificate; bukan professional certification atau sertifikasi dari brand pemberi simulasi.",
    "scope": "Direct practice untuk integrated marketing plan dan creative brief; bukan pengganti pengalaman mengelola client brief nyata.",
    "fitNote": "Direct applied simulation for brief-to-plan workflow",
    "verifiedOn": "2026-11-21"
  },
  "hubspot_inbound_certification": {
    "provider": "HubSpot Academy",
    "title": "HubSpot Academy · Inbound Certification",
    "type": "course_completion_credential",
    "label": "Free course certification",
    "tagClass": "t-completion",
    "paidExam": false,
    "description": "Sertifikasi course gratis tentang inbound methodology, shared goals, buyer personas, buyer journey, dan pendekatan customer-centric. HubSpot menyatakan course ini mencakup 7 lessons, 4 quizzes, dan sekitar 2 jam 45 menit.",
    "duration": "±2 jam 45 menit; 7 lessons; 4 quizzes.",
    "cost": "Free certification course.",
    "eligibility": "Buat akun HubSpot Academy, selesaikan course dan assessment sesuai aturan provider.",
    "validity": "Periksa masa berlaku pada ketentuan sertifikat HubSpot saat completion.",
    "regional": "Bahasa Indonesia tidak tercantum dalam daftar bahasa pada halaman course yang diperiksa; cek pilihan bahasa dan akses akun sebelum mulai.",
    "url": "https://academy.hubspot.com/courses/inbound",
    "sourceUrl": "https://academy.hubspot.com/courses/inbound",
    "award": "HubSpot Academy Inbound Certification setelah course dan assessment selesai; bukan professional certification berbasis ujian proctored.",
    "scope": "Strong adjacent learning for buyer, objective and journey framing; not a dedicated client-brief certification.",
    "fitNote": "Adjacent course certification; complements, not replaces, client-brief practice",
    "verifiedOn": "2026-11-21"
  },
  "meta_community_course_credentials": {
    "provider": "Meta Blueprint",
    "title": "Meta Blueprint · Community Management Course Credentials",
    "type": "course_completion_credential",
    "label": "Course-level learning credentials",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Lima aktivitas Community Management di katalog Meta Blueprint ditandai dengan label Credential: Define and establish a community; Develop community strategies and processes; Make strategic content decisions for a community; Engage and moderate a community; Measure success and monetize a community. Ini award per aktivitas/course, bukan Meta Certified Professional exam.",
    "duration": "5 aktivitas; masing-masing sekitar 10–20 menit (total materi sekitar 80 menit).",
    "cost": "Harga tidak dinyatakan pada halaman aktivitas yang diperiksa; cek akses akun dan course.",
    "eligibility": "Selesaikan tiap aktivitas sesuai ketentuan Meta Blueprint; cek award pada akun learner.",
    "validity": "Masa berlaku credential course tidak dinyatakan.",
    "regional": "Akses akun Indonesia dan bahasa tiap aktivitas perlu dicek di Meta Blueprint.",
    "url": "https://communitytraining.facebookblueprint.com/student/collection/205897-facebook-community-manager-online-courses",
    "sourceUrl": "https://communitytraining.facebookblueprint.com/student/collection/205897-facebook-community-manager-online-courses",
    "award": "Meta Blueprint course-level Credential per aktivitas; bukan Meta Certified Community Manager professional certification.",
    "scope": "Direct fit untuk community purpose, strategy, content decisions, engagement/moderation, dan community measurement.",
    "fitNote": "Direct chapter-level course credentials for community operations",
    "verifiedOn": "2026-11-21"
  },
  "impact_affiliate_industry_certification": {
    "provider": "impact.com Partnerships Experience Academy",
    "title": "Affiliate Marketing & Partnerships Industry Certification",
    "type": "industry_certification",
    "label": "Industry certification · free exam",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Program sertifikasi industri affiliate dan partnerships. Learning path mencakup tujuan dan KPI, competitive assessment, commission rates, kontrak/kebijakan, partner types, recruitment, tracking, media buying, dan performance analysis. Issuer meminta peserta request access untuk mengikuti exam.",
    "duration": "26 lessons, 26 videos, 25 quizzes; sekitar 6 jam materi. Format/durasi exam perlu dikonfirmasi setelah request access.",
    "cost": "Free certification exam menurut halaman issuer; request access diperlukan.",
    "eligibility": "Request access ke exam; learning path disediakan sebagai persiapan. Syarat eligibility akhir mengikuti issuer.",
    "validity": "Masa berlaku/renewal tidak dinyatakan pada halaman publik yang diperiksa.",
    "regional": "Akses akun dan approval request dari Indonesia belum diuji.",
    "url": "https://impact.com/pxa/learning-path/affiliate-marketing-partnerships-certification/",
    "sourceUrl": "https://impact.com/pxa/learning-path/affiliate-marketing-partnerships-certification/",
    "award": "impact.com Affiliate Marketing & Partnerships Industry Certification setelah akses diberikan dan exam dipenuhi.",
    "scope": "Direct fit untuk affiliate program strategy, partner recruitment, commercial terms, tracking, compliance, reporting and growth.",
    "fitNote": "Direct industry certification across affiliate program management",
    "verifiedOn": "2026-11-21"
  },
  "microsoft_ads_search_certification": {
    "provider": "Microsoft Advertising Learning Lab",
    "title": "Microsoft Advertising Search Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Microsoft Advertising certification untuk validasi kompetensi Search Advertising. Halaman Learning Lab menyebut certification dan shareable digital badge; jangan disamakan dengan sekadar menyelesaikan learning path.",
    "duration": "Format, durasi, dan passing score mengikuti halaman certification/assessment saat enrolment.",
    "cost": "Biaya ujian tidak dinyatakan pada halaman Learning Lab yang diperiksa; cek registrasi.",
    "eligibility": "Daftar menggunakan akun Learning Lab dan penuhi persyaratan assessment issuer.",
    "validity": "Validity/renewal tidak dinyatakan pada halaman yang diperiksa.",
    "regional": "Ketersediaan exam, bahasa, dan akses akun Indonesia belum diverifikasi.",
    "url": "https://about.ads.microsoft.com/en/resources/training-certification/learning-lab",
    "sourceUrl": "https://about.ads.microsoft.com/en/resources/training-certification/learning-lab",
    "award": "Microsoft Advertising Search Certification dan shareable digital badge setelah lulus assessment.",
    "scope": "Microsoft Advertising Search only; bukan bukti kompetensi Google Ads atau paid search lintas platform.",
    "fitNote": "Direct platform certification for search advertising objectives",
    "verifiedOn": "2026-11-21"
  },
  "microsoft_ads_display_video_certification": {
    "provider": "Microsoft Advertising Learning Lab",
    "title": "Microsoft Advertising Display & Video Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Microsoft Advertising certification untuk kompetensi Display & Video Advertising; Learning Lab menyebut certification dan shareable digital badge setelah completion.",
    "duration": "Format, durasi, dan passing score mengikuti halaman certification/assessment saat enrolment.",
    "cost": "Biaya ujian tidak dinyatakan pada halaman Learning Lab yang diperiksa; cek registrasi.",
    "eligibility": "Daftar menggunakan akun Learning Lab dan penuhi persyaratan assessment issuer.",
    "validity": "Validity/renewal tidak dinyatakan pada halaman yang diperiksa.",
    "regional": "Ketersediaan exam, bahasa, dan akses akun Indonesia belum diverifikasi.",
    "url": "https://about.ads.microsoft.com/en/resources/training-certification/learning-lab",
    "sourceUrl": "https://about.ads.microsoft.com/en/resources/training-certification/learning-lab",
    "award": "Microsoft Advertising Display & Video Certification dan shareable digital badge setelah lulus assessment.",
    "scope": "Microsoft Advertising Display & Video only; bukan sertifikasi seluruh media planning atau semua DSP.",
    "fitNote": "Platform-specific credential for display/video media objectives",
    "verifiedOn": "2026-11-21"
  },
  "microsoft_programmatic_learning_badge": {
    "provider": "Microsoft Advertising Learning Lab",
    "title": "Programmatic Advertising Learning Path Badge",
    "type": "learning_path_badge",
    "label": "Learning-path digital badge",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Learning Lab menyediakan Programmatic Advertising Learning Path. Microsoft menyatakan peserta memperoleh Programmatic Advertising badge setelah menyelesaikan seluruh course dalam path tersebut. Ini learning-path badge, bukan professional certification exam.",
    "duration": "Learning path terdiri dari beberapa course; total durasi tidak dinyatakan pada halaman katalog.",
    "cost": "Biaya tidak dinyatakan pada halaman yang diperiksa; cek akses akun.",
    "eligibility": "Selesaikan semua course pada Programmatic Advertising Learning Path sesuai ketentuan issuer.",
    "validity": "Masa berlaku/renewal badge tidak dinyatakan.",
    "regional": "Akses akun Indonesia dan bahasa course belum diverifikasi.",
    "url": "https://about.ads.microsoft.com/en/resources/training-certification/learning-lab",
    "sourceUrl": "https://about.ads.microsoft.com/en/resources/training-certification/learning-lab",
    "award": "Microsoft Advertising Programmatic Advertising learning-path badge setelah seluruh course selesai.",
    "scope": "Programmatic ecosystem literacy; bukan bukti live DSP seat operation atau advanced trading experience.",
    "fitNote": "Direct learning-path badge for programmatic ecosystem fundamentals",
    "verifiedOn": "2026-11-21"
  },
  "hubspot_content_marketing_certification": {
    "provider": "HubSpot Academy",
    "title": "HubSpot Academy · Content Marketing Certification",
    "type": "vendor_course_certification",
    "label": "Free course certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Course certification gratis tentang content strategy, storytelling, content creation framework, SEO, content planning, promotion, dan measurement. HubSpot menyebut 14 lessons, 54 videos, dan 11 quizzes.",
    "duration": "±8 jam 23 menit; 14 lessons; 11 quizzes.",
    "cost": "Free certification course.",
    "eligibility": "Selesaikan course dan exam sesuai ketentuan HubSpot Academy.",
    "validity": "Periksa masa berlaku/renewal di akun sertifikasi HubSpot.",
    "regional": "Bahasa yang tercantum pada halaman course: Deutsch, Español, Français; Bahasa Indonesia tidak tercantum. Cek akses akun Indonesia.",
    "url": "https://academy.hubspot.com/courses/content-marketing",
    "sourceUrl": "https://academy.hubspot.com/courses/content-marketing",
    "award": "HubSpot Academy Content Marketing Certification, dengan badge dan certificate setelah lulus exam.",
    "scope": "Direct fit for content strategy, storytelling, content production frameworks, planning and measurement; not proof of advanced multi-platform production.",
    "fitNote": "Direct vendor certification for content strategy and planning",
    "verifiedOn": "2026-11-21"
  },
  "hubspot_social_media_certification": {
    "provider": "HubSpot Academy",
    "title": "HubSpot Academy · Social Media Marketing Certification",
    "type": "vendor_course_certification",
    "label": "Free course certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Course certification gratis tentang social media strategy, content, reach, audience growth, engagement, dan ROI measurement. HubSpot menyebut 10 lessons, 38 videos, dan 29 quizzes.",
    "duration": "±5 jam 18 menit; 10 lessons; 29 quizzes.",
    "cost": "Free certification course.",
    "eligibility": "Selesaikan course dan exam sesuai ketentuan HubSpot Academy.",
    "validity": "Periksa masa berlaku/renewal di akun sertifikasi HubSpot.",
    "regional": "Bahasa yang tercantum pada halaman course: Deutsch, Español, Français, 日本語; Bahasa Indonesia tidak tercantum. Cek akses akun Indonesia.",
    "url": "https://academy.hubspot.com/courses/social-media",
    "sourceUrl": "https://academy.hubspot.com/courses/social-media",
    "award": "HubSpot Academy Social Media Marketing Certification, dengan badge dan certificate setelah lulus exam.",
    "scope": "Social media strategy and measurement; bukan sertifikasi paid social platform buying atau creator partnership.",
    "fitNote": "Direct vendor certification for organic social strategy and measurement",
    "verifiedOn": "2026-11-21"
  },
  "hubspot_digital_marketing_certification": {
    "provider": "HubSpot Academy",
    "title": "HubSpot Academy · Digital Marketing Certification",
    "type": "vendor_course_certification",
    "label": "Free course certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Course certification gratis yang mencakup human-centered digital marketing strategy, content, SEO, social media, email, advertising dan reporting. HubSpot menyebut 10 lessons, 30 videos, 8 quizzes, dan sekitar 3 jam 24 menit.",
    "duration": "±3 jam 24 menit; 10 lessons; 8 quizzes.",
    "cost": "Free certification course.",
    "eligibility": "Selesaikan course dan exam sesuai ketentuan HubSpot Academy.",
    "validity": "Periksa masa berlaku/renewal pada akun sertifikasi HubSpot.",
    "regional": "Bahasa yang tercantum pada halaman course: Deutsch, Español, Français, 日本語; Bahasa Indonesia tidak tercantum. Cek akses akun Indonesia.",
    "url": "https://academy.hubspot.com/courses/digital-marketing",
    "sourceUrl": "https://academy.hubspot.com/courses/digital-marketing",
    "award": "HubSpot Academy Digital Marketing Certification setelah lulus exam; vendor-issued course certification.",
    "scope": "Broad digital marketing foundation; not a specialist certification in paid media buying, analytics engineering or programmatic trading.",
    "fitNote": "Broad foundation credential for selected integrated digital marketing objectives",
    "verifiedOn": "2026-11-21"
  },
  "microsoft_retail_advertising_certification": {
    "provider": "Microsoft Advertising Learning Lab",
    "title": "Microsoft Advertising Retail Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Microsoft Advertising Retail Advertising certification. Learning Lab menyebut sertifikasi ini memberikan shareable digital badge setelah peserta menyelesaikan certification.",
    "duration": "Format, durasi dan passing score mengikuti halaman certification/assessment saat enrolment.",
    "cost": "Biaya ujian tidak dinyatakan pada halaman Learning Lab yang diperiksa; cek registrasi.",
    "eligibility": "Daftar dengan akun Learning Lab dan penuhi persyaratan assessment issuer.",
    "validity": "Validity/renewal tidak dinyatakan pada halaman yang diperiksa.",
    "regional": "Ketersediaan exam, bahasa, dan akses akun Indonesia belum diverifikasi.",
    "url": "https://about.ads.microsoft.com/en/resources/training-certification/learning-lab",
    "sourceUrl": "https://about.ads.microsoft.com/en/resources/training-certification/learning-lab",
    "award": "Microsoft Advertising Retail Certification dan shareable digital badge setelah lulus assessment.",
    "scope": "Microsoft Retail Advertising only; not a general retail media or commerce strategy qualification.",
    "fitNote": "Platform-specific retail advertising certification",
    "verifiedOn": "2026-11-21"
  },
  "amazon_retail_certification": {
    "provider": "Amazon Ads Academy",
    "title": "Amazon Ads for Retail Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Amazon Ads for Retail Certification memvalidasi pemahaman retail program Amazon, seller/ vendor types, fulfillment, retail readiness, Seller Central dan Vendor Central. Assessment diperlukan; course persiapan bersifat opsional.",
    "duration": "±3 jam 47 menit learning path; assessment 2 jam.",
    "cost": "Amazon Ads Academy menyatakan certifications free of charge.",
    "eligibility": "Selesaikan required certification assessment dan persyaratan issuer; account Amazon Ads Academy diperlukan.",
    "validity": "Amazon Ads certifications berlaku 2 tahun.",
    "regional": "Halaman global menyatakan konten ini belum tersedia dalam bahasa pilihan tertentu; bahasa dan akses akun Indonesia perlu dicek saat enrolment.",
    "url": "https://advertising.amazon.com/academy/student/path/1523/amazon-ads-for-retail-certification",
    "sourceUrl": "https://advertising.amazon.com/academy/certifications",
    "award": "Amazon Ads for Retail Certification, digital badge dan downloadable certificate setelah lulus assessment.",
    "scope": "Amazon retail programs and seller operations; not a universal retail media network credential.",
    "fitNote": "Direct credential for retail ecosystem, seller readiness and commerce operations",
    "verifiedOn": "2026-11-21"
  },
  "meta_partnership_ads_course": {
    "provider": "Meta Blueprint",
    "title": "Amplify Campaigns with Partnership Ads",
    "type": "course_completion_credential",
    "label": "Course-completion credential",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Meta Blueprint intermediate course yang membahas always-on creator partnerships, Partnership Ads Hub, content permissions, Creator Marketplace, Ads Manager setup dan measurement. Halaman issuer menampilkan label Credential For Completion.",
    "duration": "20 menit; 3 lessons.",
    "cost": "Online course; biaya tidak dinyatakan pada halaman aktivitas yang diperiksa.",
    "eligibility": "Selesaikan aktivitas sesuai ketentuan Meta Blueprint dan cek credential pada akun learner.",
    "validity": "Masa berlaku course credential tidak dinyatakan.",
    "regional": "Bahasa dan akses akun Indonesia perlu dicek pada Meta Blueprint.",
    "url": "https://certifications.facebookblueprint.com/student/path/253173-partnership-ads-course",
    "sourceUrl": "https://certifications.facebookblueprint.com/student/path/253173-partnership-ads-course",
    "award": "Meta Blueprint Credential For Completion; bukan Meta Certified Professional exam.",
    "scope": "Direct fit for creator collaboration, content permissions, partnership ads setup and measurement.",
    "fitNote": "Direct course credential for creator partnership and paid amplification objectives",
    "verifiedOn": "2026-11-21"
  },
  "meta_collaborative_ads_course": {
    "provider": "Meta Blueprint",
    "title": "Turn Social Inspiration into Retail Sales with Collaborative Ads",
    "type": "course_completion_credential",
    "label": "Course-completion credential",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Meta Blueprint intermediate course tentang kolaborasi brand-retailer untuk performance marketing melalui Collaborative Ads, setup campaign dan measurement. Halaman issuer menampilkan Credential For Completion.",
    "duration": "30 menit; 3 lessons.",
    "cost": "Online course; biaya tidak dinyatakan pada halaman aktivitas yang diperiksa.",
    "eligibility": "Selesaikan aktivitas sesuai ketentuan Meta Blueprint dan cek credential pada akun learner.",
    "validity": "Masa berlaku course credential tidak dinyatakan.",
    "regional": "Bahasa dan akses akun Indonesia perlu dicek pada Meta Blueprint.",
    "url": "https://certifications.facebookblueprint.com/student/path/196024-196024-collaborative-ads",
    "sourceUrl": "https://certifications.facebookblueprint.com/student/path/196024-196024-collaborative-ads",
    "award": "Meta Blueprint Credential For Completion; bukan Meta Certified Professional exam.",
    "scope": "Meta Collaborative Ads only; supports brand-retailer campaign collaboration, not all retail media buying.",
    "fitNote": "Direct course credential for retail collaboration and offsite retail activation",
    "verifiedOn": "2026-11-21"
  },
  "meta_media_planning": {
    "provider": "Meta",
    "title": "Meta Certified Media Planning Professional",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "Sertifikasi tingkat intermediate Meta untuk merancang strategi marketing end-to-end pada teknologi Meta. Ini bukan sertifikasi media planning lintas seluruh media.",
    "duration": "Format dan durasi ujian ditentukan pada halaman pendaftaran.",
    "cost": "Ujian berbayar; harga voucher bergantung marketplace dan perlu dicek saat checkout.",
    "eligibility": "Periksa persyaratan, bahasa, dan jadwal di Certification Hub sebelum mendaftar.",
    "validity": "Cek masa berlaku dan kebijakan renewal di halaman ujian terkini.",
    "regional": "Akses dan harga voucher untuk akun Indonesia belum diverifikasi.",
    "url": "https://certifications.facebookblueprint.com/student/catalog",
    "sourceUrl": "https://www.facebookblueprint.com/student/catalog?course_id=275362",
    "award": "Meta Certification tingkat profesional.",
    "scope": "Platform-specific; dipetakan hanya pada objective planning yang relevan.",
    "verifiedOn": "2026-11-21"
  },
  "meta_media_buying": {
    "provider": "Meta",
    "title": "Meta Certified Media Buying Professional",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "Validasi advanced-level proficiency dalam buying ads, targeting, pembuatan, dan pengelolaan campaign pada teknologi Meta.",
    "duration": "Format dan durasi ujian ditentukan pada halaman pendaftaran.",
    "cost": "Ujian berbayar; harga voucher bergantung marketplace dan perlu dicek saat checkout. Jangan menyalin harga US ke Indonesia.",
    "eligibility": "Periksa persyaratan, bahasa, dan jadwal di Certification Hub sebelum mendaftar.",
    "validity": "Cek masa berlaku dan renewal pada halaman ujian terkini.",
    "regional": "Akses dan harga voucher untuk akun Indonesia belum diverifikasi.",
    "url": "https://certifications.facebookblueprint.com/student/catalog",
    "sourceUrl": "https://www.facebookblueprint.com/student/catalog?course_id=275362",
    "award": "Meta Certification tingkat profesional.",
    "scope": "Meta Ads only; bukan pengganti pengalaman multi-platform atau portfolio campaign.",
    "verifiedOn": "2026-11-21"
  },
  "tiktok_media_buying": {
    "provider": "TikTok",
    "title": "TikTok Media Buying Professional Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "Ujian profesional TikTok untuk memvalidasi kemampuan membuat, mengelola, dan mengoptimalkan campaign TikTok Ads.",
    "duration": "60 pertanyaan; 110 menit; proctored via Kryterion/Webassessor.",
    "cost": "FAQ issuer mencantumkan USD 200 + biaya/pajak yang berlaku; harga akhir dan ketersediaan Indonesia harus dicek di checkout.",
    "eligibility": "Ditujukan untuk media buyer dengan minimal 1 tahun pengalaman menjalankan campaign di TikTok Ads Manager.",
    "validity": "Berlaku 2 tahun menurut FAQ issuer.",
    "regional": "Metode pembayaran, jadwal, bahasa, dan eligibility akun Indonesia belum diverifikasi.",
    "url": "https://ipg.tiktokacademy.com/student/path/2552988-certification-exam-prep",
    "sourceUrl": "https://www.tiktokacademy.com/student/page/3053325-certification-faqs",
    "award": "Pengakuan sertifikasi resmi TikTok; bukan badge yang didapat hanya dengan menonton course.",
    "scope": "TikTok Ads only; advanced option, bukan prasyarat pemula.",
    "verifiedOn": "2026-11-21"
  },
  "meta_buying_types_course": {
    "provider": "Meta Blueprint",
    "title": "Implementing Buying Types and Optimizing Delivery",
    "type": "course_completion_credential",
    "label": "Course-completion credential",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Course Blueprint tentang auction/reservation buying types dan delivery. Halaman kursus menandai course ini dengan label Credential.",
    "duration": "32 menit; intermediate.",
    "cost": "Katalog Meta Blueprint menyatakan online learning gratis; akun dan ketersediaan course perlu dicek.",
    "eligibility": "Selesaikan aktivitas sesuai ketentuan Meta Blueprint; award mengikuti sistem provider.",
    "validity": "Masa berlaku award course tidak dinyatakan pada halaman yang diperiksa.",
    "regional": "Bahasa Indonesia tersedia pada pilihan locale platform; bahasa dan availability tiap aktivitas perlu dicek.",
    "url": "https://trainingworkshops.facebookblueprint.com/student/collection/515315/path/582121",
    "sourceUrl": "https://trainingworkshops.facebookblueprint.com/student/collection/515315-meta-blueprint-startup-hub",
    "award": "Credential course-level Meta Blueprint, bukan Meta Certified Media Buying Professional.",
    "scope": "Buying type dan delivery pada Meta Ads Manager.",
    "verifiedOn": "2026-11-21"
  },
  "meta_pixel_capi_course": {
    "provider": "Meta Blueprint",
    "title": "Set Up the Meta Pixel and Meta Conversions API for Ad Campaigns",
    "type": "course_completion_credential",
    "label": "Course-completion credential",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Course teknis untuk memahami Meta Pixel dan Conversions API dalam pengukuran campaign; halaman kursus menandai aktivitas ini sebagai Credential.",
    "duration": "10 menit; beginner.",
    "cost": "Katalog Meta Blueprint menyatakan online learning gratis; akun dan ketersediaan aktivitas perlu dicek.",
    "eligibility": "Selesaikan aktivitas sesuai ketentuan Meta Blueprint.",
    "validity": "Masa berlaku award course tidak dinyatakan pada halaman yang diperiksa.",
    "regional": "Bahasa Indonesia tersedia pada pilihan locale platform; bahasa dan availability aktivitas perlu dicek.",
    "url": "https://trainingworkshops.facebookblueprint.com/student/collection/515315/path/582128",
    "sourceUrl": "https://trainingworkshops.facebookblueprint.com/student/collection/515315-meta-blueprint-startup-hub",
    "award": "Credential course-level Meta Blueprint; tidak sama dengan certification exam profesional.",
    "scope": "Meta Pixel dan Meta Conversions API; bukan sertifikasi analytics/measurement lintas platform.",
    "verifiedOn": "2026-11-21"
  },
  "meta_pixel_optimization_course": {
    "provider": "Meta Blueprint",
    "title": "Optimize and Troubleshoot the Meta Pixel",
    "type": "course_completion_credential",
    "label": "Course-completion credential",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Course teknis untuk custom conversions dan troubleshooting Meta Pixel; katalog menandainya sebagai Credential.",
    "duration": "40 menit; advanced.",
    "cost": "Katalog Meta Blueprint menyatakan online learning gratis; akun dan ketersediaan aktivitas perlu dicek.",
    "eligibility": "Selesaikan aktivitas sesuai ketentuan Meta Blueprint.",
    "validity": "Masa berlaku award course tidak dinyatakan pada halaman yang diperiksa.",
    "regional": "Bahasa Indonesia tersedia pada pilihan locale platform; bahasa dan availability aktivitas perlu dicek.",
    "url": "https://trainingworkshops.facebookblueprint.com/student/collection/515315/path/582130",
    "sourceUrl": "https://trainingworkshops.facebookblueprint.com/student/collection/515315-meta-blueprint-startup-hub",
    "award": "Credential course-level Meta Blueprint; bukan Meta Certification.",
    "scope": "Meta Pixel troubleshooting dan custom conversion.",
    "verifiedOn": "2026-11-21"
  },
  "meta_ab_testing_course": {
    "provider": "Meta Blueprint",
    "title": "Designing A/B Tests, Creative Tests and Lift Studies",
    "type": "course_completion_credential",
    "label": "Course-completion credential",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Course Meta Blueprint tentang test design dan measurement study; halaman kursus menandai aktivitas sebagai Credential.",
    "duration": "30 menit; intermediate.",
    "cost": "Katalog Meta Blueprint menyatakan online learning gratis; akun dan ketersediaan aktivitas perlu dicek.",
    "eligibility": "Selesaikan aktivitas sesuai ketentuan Meta Blueprint.",
    "validity": "Masa berlaku award course tidak dinyatakan pada halaman yang diperiksa.",
    "regional": "Bahasa Indonesia tersedia pada pilihan locale platform; bahasa dan availability aktivitas perlu dicek.",
    "url": "https://trainingworkshops.facebookblueprint.com/student/collection/515315/path/582116",
    "sourceUrl": "https://trainingworkshops.facebookblueprint.com/student/collection/515315-meta-blueprint-startup-hub",
    "award": "Credential course-level Meta Blueprint; bukan professional certification.",
    "scope": "Test design pada Meta Ads Manager; gunakan metode statistik umum untuk kompetensi lintas platform.",
    "verifiedOn": "2026-11-21"
  },
  "stackadapt_programmatic": {
    "provider": "StackAdapt Academy",
    "title": "Programmatic Masterclass",
    "type": "vendor_course_certification",
    "label": "Vendor-issued course certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Programmatic course vendor yang issuer sebut sebagai professional certification dengan recognized certificate. Bukan akreditasi independen lintas industri.",
    "duration": "8 modul; sekitar 120 menit; level intermediate.",
    "cost": "Gratis menurut halaman issuer yang diperiksa.",
    "eligibility": "Self-paced; buat akun/enrol sesuai ketentuan StackAdapt.",
    "validity": "Masa berlaku dan renewal tidak dinyatakan pada halaman course.",
    "regional": "Akses akun dari Indonesia perlu dicoba saat enrolment; halaman publik tidak menetapkan batas wilayah.",
    "url": "https://www.stackadapt.com/academy/programmatic-masterclass",
    "sourceUrl": "https://www.stackadapt.com/academy/programmatic-masterclass",
    "award": "Vendor-issued professional course certificate.",
    "scope": "Programmatic ecosystem, campaign setup/measurement and platform concepts; supplement neutral industry standards.",
    "verifiedOn": "2026-11-21"
  },
  "amazon_programmatic": {
    "provider": "Amazon Ads Academy",
    "title": "Amazon Ads Programmatic Solutions Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Certification assessment vendor untuk Amazon Ads programmatic solutions, termasuk supply quality, campaign setup, policy, performance dan optimization.",
    "duration": "The specific Programmatic Solutions certification page lists a required 2-hour assessment, plus optional preparatory courses and an optional 20-minute practice assessment. The general Academy FAQ estimate of 60–90 minutes does not override the route-specific exam timer.",
    "cost": "Gratis menurut FAQ Amazon Ads Academy.",
    "eligibility": "Perlu akun Amazon Ads Academy; account/marketplace access dan bahasa materi perlu dicek.",
    "validity": "Berlaku 2 tahun; passing score 80% menurut FAQ issuer.",
    "regional": "Availability materi/assessment untuk akun Indonesia belum diverifikasi; beberapa path Amazon tidak tersedia di semua bahasa/market.",
    "url": "https://advertising.amazon.com/academy/student/path/1532",
    "sourceUrl": "https://advertising.amazon.com/academy/student/path/1532/amazon-dsp-certification",
    "award": "Digital badge + downloadable PDF setelah lulus certification assessment; beda dari learning-path award.",
    "scope": "Amazon Ads programmatic only; bukan bukti akses/live DSP seat di marketplace lain.",
    "verifiedOn": "2026-11-22"
  },
  "amazon_sponsored_ads": {
    "provider": "Amazon Ads Academy",
    "title": "Amazon Sponsored Ads Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Certification assessment vendor untuk Sponsored Products dan Sponsored Brands; course global, bukan bukti kompetensi marketplace ads lokal Indonesia.",
    "duration": "Learning path sekitar 3 jam 52 menit; assessment terpisah.",
    "cost": "Gratis menurut FAQ Amazon Ads Academy.",
    "eligibility": "Perlu akun Amazon Ads Academy; cek marketplace dan bahasa assessment.",
    "validity": "Berlaku 2 tahun; passing score 80% menurut FAQ issuer.",
    "regional": "Akses dan relevansi untuk marketplace Indonesia harus diperiksa; jangan substitusi dengan TikTok Shop, Shopee, Tokopedia atau Lazada Ads.",
    "url": "https://advertising.amazon.com/academy/student/path/1535/sponsored-ads-certification",
    "sourceUrl": "https://advertising.amazon.com/academy/certifications?activeLocale=en-us",
    "award": "Digital badge + downloadable PDF setelah lulus certification assessment.",
    "scope": "Amazon Sponsored Ads only; tidak menggantikan platform-local retail media practice.",
    "verifiedOn": "2026-11-21"
  },
  "hubspot_email_marketing": {
    "provider": "HubSpot Academy",
    "title": "Email Marketing Certification",
    "type": "vendor_course_certification",
    "label": "Vendor-issued course certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Sertifikasi vendor untuk strategi email marketing, personalization, automation, copy/content, metrics dan A/B testing. Bukan sertifikasi seluruh CRM/lifecycle discipline.",
    "duration": "12 lessons; 31 videos; 9 quizzes; 1 practical exercise; sekitar 3 jam 59 menit.",
    "cost": "Gratis menurut halaman course issuer; akun HubSpot Academy diperlukan.",
    "eligibility": "Selesaikan course dan persyaratan assessment HubSpot Academy.",
    "validity": "Masa berlaku/renewal tidak dinyatakan pada halaman yang diperiksa.",
    "regional": "Bahasa course yang ditampilkan adalah English; account access from Indonesia not independently tested.",
    "url": "https://academy.hubspot.com/courses/email-marketing-certification-en",
    "sourceUrl": "https://academy.hubspot.com/courses/email-marketing-certification-en",
    "award": "HubSpot Academy certification; vendor-issued.",
    "scope": "Email marketing; mendukung sebagian lifecycle workflow, bukan semua CRM architecture.",
    "verifiedOn": "2026-11-21"
  },
  "semrush_seo_crash": {
    "provider": "Semrush Academy",
    "title": "SEO Crash Course with Brian Dean",
    "type": "course_completion_certificate",
    "label": "Course-completion certificate",
    "tagClass": "t-completion",
    "paidExam": false,
    "description": "Course foundational SEO dengan certificate path yang dinyatakan oleh Semrush Academy. Ini adalah course certificate dari tool vendor, bukan Google SEO Certification atau sertifikasi profesi independen.",
    "duration": "Durasi course/assessment tidak dipastikan dalam halaman yang diperiksa.",
    "cost": "Konfirmasi enrollment dan syarat akses pada halaman course.",
    "eligibility": "Ikuti course dan persyaratan certificate yang ditampilkan di Semrush Academy.",
    "validity": "Validity/renewal tidak dinyatakan pada halaman yang diperiksa.",
    "regional": "Akses akun Indonesia dan bahasa course perlu dicek.",
    "url": "https://www.semrush.com/academy/courses/semrush-seo-crash-course-with-brian-dean/",
    "sourceUrl": "https://www.semrush.com/academy/courses/semrush-seo-crash-course-with-brian-dean/",
    "award": "Course-completion certificate dari Semrush Academy.",
    "scope": "Intro/foundational SEO; tidak memvalidasi seluruh kompetensi technical SEO, AEO atau GEO.",
    "verifiedOn": "2026-11-21"
  },
  "google_analytics_certification": {
    "provider": "Google Analytics / Skillshop",
    "title": "Google Analytics Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Sertifikasi resmi untuk pengetahuan penggunaan Google Analytics. Relevan untuk GA4 property, data collection, reporting, measurement features, dan integrasi dengan produk Google. Tidak mengesahkan seluruh digital analytics, SQL, BI, attribution, atau measurement engineering.",
    "duration": "Google lists four preparation courses; Grow with Google APAC describes a 3.5-hour Analytics certification route for India. Confirm the exact Indonesia path and exam duration in Skillshop.",
    "cost": "Analytics Academy preparation courses are described as free. Grow with Google APAC lists the Analytics certification route as paid for India; fee and checkout price for Indonesia are not confirmed. Do not assume zero cost.",
    "eligibility": "Sign in to Skillshop, complete the relevant learning path and take its certification assessment. Exact account/assessment rules must be checked in the learner account.",
    "validity": "Validity/renewal is not stated in the public Analytics Academy help article; verify on the issued credential.",
    "regional": "Google's public help page does not specify exam-language coverage or Indonesia account eligibility. Confirm language and access in Skillshop before committing.",
    "url": "https://skillshop.withgoogle.com/",
    "sourceUrl": "https://support.google.com/analytics/answer/15068052",
    "award": "Google Analytics certification issued by Google Skillshop after the relevant assessment is passed.",
    "scope": "GA platform-specific; supports GA4 setup, collection, reporting and measurement, but not all cross-platform analytics capabilities.",
    "verifiedOn": "2026-11-21"
  },
  "google_dv360_2026": {
    "provider": "Google Marketing Platform / Skillshop",
    "title": "Display & Video 360 Certification (2026)",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Current 2026 Skillshop course/catalogue lists a dedicated Display & Video 360 certification. It is relevant to DSP navigation, campaign setup, inventory, targeting, deal and delivery/optimization workflows; it is not a general certification for all DSPs.",
    "duration": "Approx. 1.3 hours per exam is the DPA master research baseline. The current 2026 public Skillshop listing does not publish an individual exam timer; confirm the exact timer inside the signed-in learner path. Google APAC describes 7.5 hours for the combined Google Marketing Platform preparation route; do not interpret that as the duration of this exam.",
    "cost": "Google APAC's guide lists the Google Marketing Platform certification path as free for India. Indonesia-specific pricing/account access and any assessment conditions must be checked in Skillshop.",
    "eligibility": "Use hands-on DV360 practice and follow the current 2026 preparation and assessment path. The public course listing does not specify a complete eligibility rule.",
    "validity": "The exact 2026 credential validity is not specified in the public listing; verify the credential record in Skillshop.",
    "regional": "Current Skillshop catalogue lists English content for this 2026 path. Indonesian exam language and Indonesia account access are not confirmed.",
    "url": "https://skillshop.withgoogle.com/",
    "sourceUrl": "https://skillshop.withgoogle.com/",
    "award": "Google Marketing Platform certification route; provider awards certification when the associated assessment is passed.",
    "scope": "DV360 only; it does not establish competence in every DSP, SSP, exchange or programmatic trading workflow.",
    "verifiedOn": "2026-11-21"
  },
  "google_cm360_2026": {
    "provider": "Google Marketing Platform / Skillshop",
    "title": "Campaign Manager 360 Certification (2026)",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Current 2026 Skillshop course/catalogue lists a dedicated Campaign Manager 360 certification. Relevant to ad-server campaign, placement, ad, creative, tag and Floodlight workflows; not a universal ad-operations qualification.",
    "duration": "Approx. 1.3 hours per exam is the DPA master research baseline. The current 2026 public Skillshop listing does not publish an individual exam timer; confirm the exact timer inside the signed-in learner path. Google APAC describes 7.5 hours for the combined Google Marketing Platform preparation route; this is not an individual-exam duration.",
    "cost": "Google APAC's guide lists the Google Marketing Platform certification path as free for India. Indonesia-specific price and account access must be checked in Skillshop.",
    "eligibility": "Use hands-on CM360 practice and follow the current 2026 preparation and assessment path. The public listing does not specify a complete eligibility rule.",
    "validity": "The exact 2026 credential validity is not specified in the public listing; verify the credential record in Skillshop.",
    "regional": "Current Skillshop catalogue lists English plus one additional language for this 2026 path; the second language is not identified in the indexed listing. Indonesian exam language and Indonesia account access must be confirmed.",
    "url": "https://skillshop.withgoogle.com/",
    "sourceUrl": "https://skillshop.withgoogle.com/",
    "award": "Google Marketing Platform certification route; provider awards certification when the associated assessment is passed.",
    "scope": "CM360/ad-server workflows; not a substitute for platform-neutral ad operations controls or all ad-serving technologies.",
    "verifiedOn": "2026-11-21"
  },
  "linkedin_advertising_fundamentals": {
    "provider": "LinkedIn Marketing Academy",
    "title": "LinkedIn Advertising Fundamentals Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "LinkedIn certification covering advertising fundamentals such as campaign setup and targeting tools. A platform-specific credential, not a general paid-social qualification.",
    "duration": "60-minute exam; 60 multiple-choice questions; 75% passing score.",
    "cost": "The official certification help article does not state an exam fee. Check the enrolment page before booking; do not assume paid or free.",
    "eligibility": "Preparation courses and practice exam are available. LinkedIn Help says learners may complete the path or choose the certification exam directly; a LinkedIn profile is needed to use the Academy.",
    "validity": "24 months; renewal/retake terms should be checked before enrolment.",
    "regional": "The issuer lists English, French, German, Japanese, Portuguese, Spanish and Simplified Chinese. Bahasa Indonesia is not listed. Indonesia account access should be checked at sign-in.",
    "url": "https://training.marketing.linkedin.com/advertising-fundamentals-exam",
    "sourceUrl": "https://www.linkedin.com/help/lms/answer/a489784",
    "award": "LinkedIn Marketing Academy certification; certificate can be added to the LinkedIn profile and downloaded as PDF.",
    "scope": "LinkedIn advertising only; does not validate Meta, TikTok or other paid-social platforms.",
    "verifiedOn": "2026-11-21"
  },
  "linkedin_marketing_strategy": {
    "provider": "LinkedIn Marketing Academy",
    "title": "LinkedIn Marketing Strategy Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "LinkedIn certification for planning and executing full-funnel LinkedIn marketing from organic presence through campaigns, including brand awareness and lead generation. This is platform-specific strategy, not cross-channel media planning.",
    "duration": "60-minute exam; 60 multiple-choice questions; 75% passing score.",
    "cost": "The official certification help article does not state an exam fee. Check the enrolment page before booking.",
    "eligibility": "Preparation courses and practice exam are available; direct exam selection is also offered through LinkedIn Marketing Academy.",
    "validity": "24 months.",
    "regional": "The issuer lists English, French, German, Japanese, Portuguese, Spanish and Simplified Chinese. Bahasa Indonesia is not listed. Indonesia account access should be checked at sign-in.",
    "url": "https://training.marketing.linkedin.com/marketing-strategy-exam",
    "sourceUrl": "https://www.linkedin.com/help/lms/answer/a489784",
    "award": "LinkedIn Marketing Academy certification; certificate can be added to the LinkedIn profile and downloaded as PDF.",
    "scope": "LinkedIn only; does not validate full-funnel planning on Meta, TikTok, Google or traditional media.",
    "verifiedOn": "2026-11-21"
  },
  "linkedin_content_creative": {
    "provider": "LinkedIn Marketing Academy",
    "title": "LinkedIn Content and Creative Design Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "LinkedIn certification for full-funnel content/creative strategy, including operating an active LinkedIn Page and designing visual ad creative. It is LinkedIn-specific and not a general creative production qualification.",
    "duration": "60-minute exam; 60 multiple-choice questions; 75% passing score.",
    "cost": "The official certification help article does not state an exam fee. Check the enrolment page before booking.",
    "eligibility": "Preparation courses and practice exam are available; direct exam selection is also offered through LinkedIn Marketing Academy.",
    "validity": "24 months.",
    "regional": "The issuer lists English, French, German, Japanese, Portuguese, Spanish and Simplified Chinese. Bahasa Indonesia is not listed. Indonesia account access should be checked at sign-in.",
    "url": "https://training.marketing.linkedin.com/content-and-creative-design-exam",
    "sourceUrl": "https://www.linkedin.com/help/lms/answer/a489784",
    "award": "LinkedIn Marketing Academy certification; certificate can be added to the LinkedIn profile and downloaded as PDF.",
    "scope": "LinkedIn content and ad creative; does not validate video production, design systems or content strategy across all platforms.",
    "verifiedOn": "2026-11-21"
  },
  "linkedin_marketing_measurement": {
    "provider": "LinkedIn Marketing Academy",
    "title": "LinkedIn Marketing Measurement Certification",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "LinkedIn certification covering campaign reporting, conversion tracking, experiments, interpretation of campaign data and connecting marketing activity to business outcomes. It remains LinkedIn-specific.",
    "duration": "60-minute exam; 60 multiple-choice questions; 75% passing score.",
    "cost": "The official certification help article does not state an exam fee. Check the enrolment page before booking.",
    "eligibility": "Preparation courses and practice exam are available; LinkedIn recommends hands-on Campaign Manager reporting/conversion-tracking experience or passing the practice exam.",
    "validity": "24 months.",
    "regional": "The issuer lists English, French, German, Japanese, Portuguese, Spanish and Simplified Chinese. Bahasa Indonesia is not listed. Indonesia account access should be checked at sign-in.",
    "url": "https://training.marketing.linkedin.com/marketing-measurement-exam",
    "sourceUrl": "https://www.linkedin.com/help/lms/answer/a489784",
    "award": "LinkedIn Marketing Academy certification; certificate can be added to the LinkedIn profile and downloaded as PDF.",
    "scope": "LinkedIn measurement only; not a general marketing analytics, experimentation or attribution credential.",
    "verifiedOn": "2026-11-21"
  }
};
var chapterMap = {
  "DPA-T01-CH01": ["hubspot_digital_marketing_certification"],
  "DPA-T01-CH02": [],
  "DPA-T01-CH03": ["hubspot_digital_marketing_certification"],
  "DPA-T01-CH04": ["hubspot_digital_marketing_certification"],
  "DPA-T01-CH05": [],
  "DPA-T01-CH06": ["hubspot_digital_marketing_certification"],
  "DPA-T01-CH07": ["hubspot_digital_marketing_certification"],
  "DPA-T01-CH08": [],
  "DPA-T01-CH09": ["hubspot_digital_marketing_certification"],
  "DPA-T01-CH10": [],
  "DPA-T02-CH01": ["hubspot_inbound_certification"],
  "DPA-T02-CH02": ["hubspot_inbound_certification"],
  "DPA-T02-CH03": [],
  "DPA-T02-CH04": [],
  "DPA-T02-CH05": ["hubspot_inbound_certification"],
  "DPA-T02-CH06": ["linkedin_marketing_strategy","linkedin_advertising_fundamentals"],
  "DPA-T02-CH07": ["linkedin_marketing_strategy","linkedin_content_creative"],
  "DPA-T02-CH08": ["linkedin_content_creative","linkedin_advertising_fundamentals"],
  "DPA-T02-CH09": ["linkedin_marketing_measurement"],
  "DPA-T02-CH10": [],
  "DPA-T03-CH01": [
    "meta_media_planning"
  ],
  "DPA-T03-CH02": [
    "meta_media_planning"
  ],
  "DPA-T03-CH03": ["microsoft_ads_display_video_certification"],
  "DPA-T03-CH04": ["meta_media_planning","microsoft_ads_display_video_certification"],
  "DPA-T03-CH05": ["meta_media_planning","microsoft_ads_display_video_certification"],
  "DPA-T03-CH06": ["microsoft_ads_display_video_certification"],
  "DPA-T03-CH07": ["microsoft_ads_display_video_certification"],
  "DPA-T03-CH08": ["meta_media_planning","microsoft_ads_display_video_certification"],
  "DPA-T03-CH09": ["microsoft_ads_display_video_certification"],
  "DPA-T03-CH10": ["meta_media_planning"],
  "DPA-T04-CH01": ["google_ads_search","microsoft_ads_search_certification"],
  "DPA-T04-CH02": ["google_ads_search","microsoft_ads_search_certification"],
  "DPA-T04-CH03": ["google_ads_search","microsoft_ads_search_certification"],
  "DPA-T04-CH04": ["google_ads_search","microsoft_ads_search_certification"],
  "DPA-T04-CH05": ["google_ads_search","microsoft_ads_search_certification"],
  "DPA-T04-CH06": ["google_ads_search","microsoft_ads_search_certification"],
  "DPA-T04-CH07": ["google_ads_search","microsoft_ads_search_certification"],
  "DPA-T04-CH08": ["google_ads_search","microsoft_ads_search_certification"],
  "DPA-T04-CH09": ["google_ads_search","microsoft_ads_search_certification"],
  "DPA-T04-CH10": [
    "google_ads_search"
  ],
  "DPA-T05-CH01": [
    "meta_media_buying",
    "tiktok_media_buying",
    "linkedin_advertising_fundamentals"
  ],
  "DPA-T05-CH02": [
    "meta_media_buying",
    "tiktok_media_buying",
    "linkedin_marketing_strategy"
  ],
  "DPA-T05-CH03": [
    "meta_media_buying",
    "tiktok_media_buying"
  ],
  "DPA-T05-CH04": [
    "meta_media_buying",
    "tiktok_media_buying",
    "linkedin_advertising_fundamentals"
  ],
  "DPA-T05-CH05": [
    "meta_media_buying",
    "tiktok_media_buying",
    "linkedin_content_creative"
  ],
  "DPA-T05-CH06": [
    "tiktok_media_buying",
    "meta_buying_types_course"
  ],
  "DPA-T05-CH07": [
    "meta_pixel_capi_course"
  ],
  "DPA-T05-CH08": [
    "meta_media_buying",
    "tiktok_media_buying"
  ],
  "DPA-T05-CH09": [
    "tiktok_media_buying",
    "meta_ab_testing_course"
  ],
  "DPA-T05-CH10": [
    "meta_media_buying",
    "tiktok_media_buying",
    "linkedin_marketing_strategy"
  ],
  "DPA-T06-CH01": ["stackadapt_programmatic","amazon_programmatic","microsoft_programmatic_learning_badge"],
  "DPA-T06-CH02": ["stackadapt_programmatic","microsoft_programmatic_learning_badge"],
  "DPA-T06-CH03": ["microsoft_programmatic_learning_badge"],
  "DPA-T06-CH04": ["stackadapt_programmatic","amazon_programmatic","microsoft_programmatic_learning_badge"],
  "DPA-T06-CH05": [
    "stackadapt_programmatic",
    "amazon_programmatic",
    "google_dv360_2026"
  ],
  "DPA-T06-CH06": ["microsoft_programmatic_learning_badge"],
  "DPA-T06-CH07": ["stackadapt_programmatic","amazon_programmatic","microsoft_programmatic_learning_badge"],
  "DPA-T06-CH08": ["stackadapt_programmatic","amazon_programmatic","microsoft_programmatic_learning_badge"],
  "DPA-T06-CH09": ["stackadapt_programmatic","amazon_programmatic","microsoft_programmatic_learning_badge"],
  "DPA-T06-CH10": ["google_cm360_2026","microsoft_programmatic_learning_badge"],
  "DPA-T06-CH11": [
    "stackadapt_programmatic",
    "amazon_programmatic",
    "google_dv360_2026"
  ],
  "DPA-T06-CH12": ["microsoft_programmatic_learning_badge"],
  "DPA-T07-CH01": ["amazon_retail_certification"],
  "DPA-T07-CH02": ["amazon_retail_certification"],
  "DPA-T07-CH03": ["amazon_retail_certification","microsoft_retail_advertising_certification"],
  "DPA-T07-CH04": [
    "amazon_sponsored_ads"
  ],
  "DPA-T07-CH05": ["microsoft_retail_advertising_certification","meta_collaborative_ads_course"],
  "DPA-T07-CH06": ["microsoft_retail_advertising_certification","meta_collaborative_ads_course"],
  "DPA-T07-CH07": ["amazon_retail_certification","microsoft_retail_advertising_certification"],
  "DPA-T07-CH08": [
    "amazon_sponsored_ads"
  ],
  "DPA-T07-CH09": ["amazon_sponsored_ads","meta_collaborative_ads_course"],
  "DPA-T07-CH10": ["amazon_retail_certification"],
  "DPA-T08-CH01": [],
  "DPA-T08-CH02": [],
  "DPA-T08-CH03": [],
  "DPA-T08-CH04": [],
  "DPA-T08-CH05": [],
  "DPA-T08-CH06": [],
  "DPA-T08-CH07": [],
  "DPA-T08-CH08": [],
  "DPA-T08-CH09": [],
  "DPA-T08-CH10": [],
  "DPA-T09-CH01": ["google_cm360_2026"],
  "DPA-T09-CH02": ["google_cm360_2026"],
  "DPA-T09-CH03": ["google_cm360_2026"],
  "DPA-T09-CH04": ["google_cm360_2026"],
  "DPA-T09-CH05": [
    "google_cm360_2026"
  ],
  "DPA-T09-CH06": ["google_cm360_2026"],
  "DPA-T09-CH07": ["google_cm360_2026","google_dv360_2026"],
  "DPA-T09-CH08": ["google_cm360_2026"],
  "DPA-T09-CH09": ["google_cm360_2026"],
  "DPA-T09-CH10": [],
  "DPA-T10-CH01": ["meta_marketing_science"],
  "DPA-T10-CH02": ["google_analytics_certification"],
  "DPA-T10-CH03": ["google_analytics_certification"],
  "DPA-T10-CH04": [],
  "DPA-T10-CH05": ["google_analytics_certification"],
  "DPA-T10-CH06": ["google_analytics_certification","meta_marketing_science"],
  "DPA-T10-CH07": ["linkedin_marketing_measurement","meta_marketing_science","google_analytics_certification"],
  "DPA-T10-CH08": ["linkedin_marketing_measurement","meta_marketing_science","google_analytics_certification"],
  "DPA-T10-CH09": ["meta_marketing_science","google_analytics_certification"],
  "DPA-T10-CH10": [],
  "DPA-T11-CH01": ["semrush_seo_crash"],
  "DPA-T11-CH02": ["semrush_seo_crash"],
  "DPA-T11-CH03": [],
  "DPA-T11-CH04": [],
  "DPA-T11-CH05": ["semrush_seo_crash"],
  "DPA-T11-CH06": ["semrush_seo_crash"],
  "DPA-T11-CH07": ["semrush_seo_crash"],
  "DPA-T11-CH08": ["semrush_seo_crash"],
  "DPA-T11-CH09": [],
  "DPA-T11-CH10": [],
  "DPA-T12-CH01": ["hubspot_inbound_certification"],
  "DPA-T12-CH02": [],
  "DPA-T12-CH03": ["hubspot_inbound_certification"],
  "DPA-T12-CH04": ["hubspot_inbound_certification"],
  "DPA-T12-CH05": ["hubspot_email_marketing"],
  "DPA-T12-CH06": ["hubspot_email_marketing"],
  "DPA-T12-CH07": ["hubspot_email_marketing"],
  "DPA-T12-CH08": [],
  "DPA-T12-CH09": ["hubspot_email_marketing"],
  "DPA-T12-CH10": [],
  "DPA-T13-CH01": ["hubspot_social_media_certification"],
  "DPA-T13-CH02": ["hubspot_social_media_certification"],
  "DPA-T13-CH03": ["hubspot_social_media_certification"],
  "DPA-T13-CH04": ["hubspot_content_marketing_certification"],
  "DPA-T13-CH05": ["hubspot_content_marketing_certification"],
  "DPA-T13-CH06": ["hubspot_content_marketing_certification"],
  "DPA-T13-CH07": ["hubspot_social_media_certification"],
  "DPA-T13-CH08": ["linkedin_content_creative","hubspot_social_media_certification"],
  "DPA-T13-CH09": ["hubspot_social_media_certification"],
  "DPA-T13-CH10": ["hubspot_social_media_certification"],
  "DPA-T13-CH11": ["hubspot_content_marketing_certification"],
  "DPA-T14-CH01": [],
  "DPA-T14-CH02": [],
  "DPA-T14-CH03": [],
  "DPA-T14-CH04": [],
  "DPA-T14-CH05": [],
  "DPA-T14-CH06": ["meta_partnership_ads_course"],
  "DPA-T14-CH07": ["meta_partnership_ads_course"],
  "DPA-T14-CH08": [],
  "DPA-T14-CH09": ["meta_partnership_ads_course"],
  "DPA-T14-CH10": ["meta_partnership_ads_course"],
  "DPA-T14-CH11": ["meta_partnership_ads_course"],
  "DPA-T14-CH12": ["meta_partnership_ads_course"],
  "DPA-T15-CH01": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH02": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH03": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH04": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH05": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH06": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH07": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH08": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH09": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH10": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH11": ["impact_affiliate_industry_certification"],
  "DPA-T15-CH12": ["impact_affiliate_industry_certification"],
  "DPA-T16-CH01": ["meta_community_course_credentials"],
  "DPA-T16-CH02": ["meta_community_course_credentials"],
  "DPA-T16-CH03": ["meta_community_course_credentials"],
  "DPA-T16-CH04": ["meta_community_course_credentials"],
  "DPA-T16-CH05": ["meta_community_course_credentials"],
  "DPA-T16-CH06": ["meta_community_course_credentials"],
  "DPA-T16-CH07": ["meta_community_course_credentials"],
  "DPA-T16-CH08": ["meta_community_course_credentials"],
  "DPA-T16-CH09": ["meta_community_course_credentials"],
  "DPA-T16-CH10": ["meta_community_course_credentials"],
  "DPA-T16-CH11": ["meta_community_course_credentials"],
  "DPA-T16-CH12": ["meta_community_course_credentials"]
};
var auditMap = {
  "DPA-T01-CH01": {
    "routeIds": ["hubspot_digital_marketing_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T01-CH02": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T01-CH03": {
    "routeIds": ["hubspot_digital_marketing_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T01-CH04": {
    "routeIds": ["hubspot_digital_marketing_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T01-CH05": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T01-CH06": {
    "routeIds": ["hubspot_digital_marketing_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T01-CH07": {
    "routeIds": ["hubspot_digital_marketing_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T01-CH08": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T01-CH09": {
    "routeIds": ["hubspot_digital_marketing_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T01-CH10": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T02-CH01": {
    "routeIds": ["hubspot_inbound_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T02-CH02": {
    "routeIds": ["hubspot_inbound_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T02-CH03": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T02-CH04": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T02-CH05": {
    "routeIds": ["hubspot_inbound_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T02-CH06": {
    "routeIds": ["linkedin_marketing_strategy","linkedin_advertising_fundamentals"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T02-CH07": {
    "routeIds": ["linkedin_marketing_strategy","linkedin_content_creative"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T02-CH08": {
    "routeIds": ["linkedin_content_creative","linkedin_advertising_fundamentals"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T02-CH09": {
    "routeIds": ["linkedin_marketing_measurement"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T02-CH10": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T03-CH01": {
    "routeIds": ["meta_media_planning"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T03-CH02": {
    "routeIds": ["meta_media_planning"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T03-CH03": {
    "routeIds": ["microsoft_ads_display_video_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T03-CH04": {
    "routeIds": ["meta_media_planning","microsoft_ads_display_video_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T03-CH05": {
    "routeIds": ["meta_media_planning","microsoft_ads_display_video_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T03-CH06": {
    "routeIds": ["microsoft_ads_display_video_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T03-CH07": {
    "routeIds": ["microsoft_ads_display_video_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T03-CH08": {
    "routeIds": ["meta_media_planning","microsoft_ads_display_video_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T03-CH09": {
    "routeIds": ["microsoft_ads_display_video_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T03-CH10": {
    "routeIds": ["meta_media_planning"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T04-CH01": {
    "routeIds": ["google_ads_search","microsoft_ads_search_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T04-CH02": {
    "routeIds": ["google_ads_search","microsoft_ads_search_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T04-CH03": {
    "routeIds": ["google_ads_search","microsoft_ads_search_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T04-CH04": {
    "routeIds": ["google_ads_search","microsoft_ads_search_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T04-CH05": {
    "routeIds": ["google_ads_search","microsoft_ads_search_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T04-CH06": {
    "routeIds": ["google_ads_search","microsoft_ads_search_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T04-CH07": {
    "routeIds": ["google_ads_search","microsoft_ads_search_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T04-CH08": {
    "routeIds": ["google_ads_search","microsoft_ads_search_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T04-CH09": {
    "routeIds": ["google_ads_search","microsoft_ads_search_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T04-CH10": {
    "routeIds": ["google_ads_search"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T05-CH01": {
    "routeIds": ["meta_media_buying","tiktok_media_buying","linkedin_advertising_fundamentals"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T05-CH02": {
    "routeIds": ["meta_media_buying","tiktok_media_buying","linkedin_marketing_strategy"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T05-CH03": {
    "routeIds": ["meta_media_buying","tiktok_media_buying"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T05-CH04": {
    "routeIds": ["meta_media_buying","tiktok_media_buying","linkedin_advertising_fundamentals"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T05-CH05": {
    "routeIds": ["meta_media_buying","tiktok_media_buying","linkedin_content_creative"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T05-CH06": {
    "routeIds": ["tiktok_media_buying","meta_buying_types_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T05-CH07": {
    "routeIds": ["meta_pixel_capi_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T05-CH08": {
    "routeIds": ["meta_media_buying","tiktok_media_buying"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T05-CH09": {
    "routeIds": ["tiktok_media_buying","meta_ab_testing_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T05-CH10": {
    "routeIds": ["meta_media_buying","tiktok_media_buying","linkedin_marketing_strategy"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH01": {
    "routeIds": ["stackadapt_programmatic","amazon_programmatic","microsoft_programmatic_learning_badge"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH02": {
    "routeIds": ["stackadapt_programmatic","microsoft_programmatic_learning_badge"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH03": {
    "routeIds": ["microsoft_programmatic_learning_badge"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH04": {
    "routeIds": ["stackadapt_programmatic","amazon_programmatic","microsoft_programmatic_learning_badge"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH05": {
    "routeIds": ["stackadapt_programmatic","amazon_programmatic","google_dv360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH06": {
    "routeIds": ["microsoft_programmatic_learning_badge"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH07": {
    "routeIds": ["stackadapt_programmatic","amazon_programmatic","microsoft_programmatic_learning_badge"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH08": {
    "routeIds": ["stackadapt_programmatic","amazon_programmatic","microsoft_programmatic_learning_badge"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH09": {
    "routeIds": ["stackadapt_programmatic","amazon_programmatic","microsoft_programmatic_learning_badge"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH10": {
    "routeIds": ["google_cm360_2026","microsoft_programmatic_learning_badge"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH11": {
    "routeIds": ["stackadapt_programmatic","amazon_programmatic","google_dv360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T06-CH12": {
    "routeIds": ["microsoft_programmatic_learning_badge"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T07-CH01": {
    "routeIds": ["amazon_retail_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T07-CH02": {
    "routeIds": ["amazon_retail_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T07-CH03": {
    "routeIds": ["amazon_retail_certification","microsoft_retail_advertising_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T07-CH04": {
    "routeIds": ["amazon_sponsored_ads"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T07-CH05": {
    "routeIds": ["microsoft_retail_advertising_certification","meta_collaborative_ads_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T07-CH06": {
    "routeIds": ["microsoft_retail_advertising_certification","meta_collaborative_ads_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T07-CH07": {
    "routeIds": ["amazon_retail_certification","microsoft_retail_advertising_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T07-CH08": {
    "routeIds": ["amazon_sponsored_ads"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T07-CH09": {
    "routeIds": ["amazon_sponsored_ads","meta_collaborative_ads_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T07-CH10": {
    "routeIds": ["amazon_retail_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T08-CH01": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T08-CH02": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T08-CH03": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T08-CH04": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T08-CH05": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T08-CH06": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T08-CH07": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T08-CH08": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T08-CH09": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T08-CH10": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T09-CH01": {
    "routeIds": ["google_cm360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T09-CH02": {
    "routeIds": ["google_cm360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T09-CH03": {
    "routeIds": ["google_cm360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T09-CH04": {
    "routeIds": ["google_cm360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T09-CH05": {
    "routeIds": ["google_cm360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T09-CH06": {
    "routeIds": ["google_cm360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T09-CH07": {
    "routeIds": ["google_cm360_2026","google_dv360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T09-CH08": {
    "routeIds": ["google_cm360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T09-CH09": {
    "routeIds": ["google_cm360_2026"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T09-CH10": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T10-CH01": {
    "routeIds": ["meta_marketing_science"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T10-CH02": {
    "routeIds": ["google_analytics_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T10-CH03": {
    "routeIds": ["google_analytics_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T10-CH04": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T10-CH05": {
    "routeIds": ["google_analytics_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T10-CH06": {
    "routeIds": ["google_analytics_certification","meta_marketing_science"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T10-CH07": {
    "routeIds": ["linkedin_marketing_measurement","meta_marketing_science","google_analytics_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T10-CH08": {
    "routeIds": ["linkedin_marketing_measurement","meta_marketing_science","google_analytics_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T10-CH09": {
    "routeIds": ["meta_marketing_science","google_analytics_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T10-CH10": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T11-CH01": {
    "routeIds": ["semrush_seo_crash"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T11-CH02": {
    "routeIds": ["semrush_seo_crash"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T11-CH03": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T11-CH04": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T11-CH05": {
    "routeIds": ["semrush_seo_crash"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T11-CH06": {
    "routeIds": ["semrush_seo_crash"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T11-CH07": {
    "routeIds": ["semrush_seo_crash"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T11-CH08": {
    "routeIds": ["semrush_seo_crash"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T11-CH09": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T11-CH10": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T12-CH01": {
    "routeIds": ["hubspot_inbound_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T12-CH02": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T12-CH03": {
    "routeIds": ["hubspot_inbound_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T12-CH04": {
    "routeIds": ["hubspot_inbound_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T12-CH05": {
    "routeIds": ["hubspot_email_marketing"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T12-CH06": {
    "routeIds": ["hubspot_email_marketing"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T12-CH07": {
    "routeIds": ["hubspot_email_marketing"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T12-CH08": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T12-CH09": {
    "routeIds": ["hubspot_email_marketing"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T12-CH10": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T13-CH01": {
    "routeIds": ["hubspot_social_media_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T13-CH02": {
    "routeIds": ["hubspot_social_media_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T13-CH03": {
    "routeIds": ["hubspot_social_media_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T13-CH04": {
    "routeIds": ["hubspot_content_marketing_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T13-CH05": {
    "routeIds": ["hubspot_content_marketing_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T13-CH06": {
    "routeIds": ["hubspot_content_marketing_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T13-CH07": {
    "routeIds": ["hubspot_social_media_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T13-CH08": {
    "routeIds": ["linkedin_content_creative","hubspot_social_media_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T13-CH09": {
    "routeIds": ["hubspot_social_media_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T13-CH10": {
    "routeIds": ["hubspot_social_media_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T13-CH11": {
    "routeIds": ["hubspot_content_marketing_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T14-CH01": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T14-CH02": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T14-CH03": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T14-CH04": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T14-CH05": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T14-CH06": {
    "routeIds": ["meta_partnership_ads_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T14-CH07": {
    "routeIds": ["meta_partnership_ads_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T14-CH08": {
    "routeIds": [],
    "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "No external credential selected for this objective in the current curated registry; use chapter deliverable and portfolio evidence. This is not a market-wide claim that no credential exists."
  },
  "DPA-T14-CH09": {
    "routeIds": ["meta_partnership_ads_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T14-CH10": {
    "routeIds": ["meta_partnership_ads_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T14-CH11": {
    "routeIds": ["meta_partnership_ads_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T14-CH12": {
    "routeIds": ["meta_partnership_ads_course"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH01": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH02": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH03": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH04": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH05": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH06": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH07": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH08": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH09": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH10": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH11": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T15-CH12": {
    "routeIds": ["impact_affiliate_industry_certification"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH01": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH02": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH03": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH04": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH05": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH06": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH07": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH08": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH09": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH10": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH11": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  },
  "DPA-T16-CH12": {
    "routeIds": ["meta_community_course_credentials"],
    "outcome": "EXTERNAL_CREDENTIAL_OPTION",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
  }
};
root.DPA_FOUNDATION_CREDENTIAL_MAP = {
  "DPA-CF-CH01": [],
  "DPA-CF-CH02": ["forage_omnichannel_certificate","hubspot_inbound_certification"],
  "DPA-CF-CH03": ["hubspot_inbound_certification"],
  "DPA-CF-CH04": [],
  "DPA-CF-CH05": [],
  "DPA-CF-CH06": ["forage_omnichannel_certificate"]
};
root.DPA_CREDENTIAL_REGISTRY = registry;
root.DPA_CHAPTER_CREDENTIAL_MAP = chapterMap;
root.DPA_CHAPTER_CREDENTIAL_AUDIT = auditMap;
})(typeof window !== "undefined" ? window : globalThis);
