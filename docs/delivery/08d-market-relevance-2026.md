# Market Relevance 2026 - Advanced Electives (Agent E)

**Tanggal:** 2026-11-21 - **Branch:** audit/v3-E-electives - **Cakupan:** Elective 17 (CRO/Growth), Elective 18 (Traditional Media) + lima area platform yang ditugaskan.
**Metode:** setiap klaim diverifikasi ke halaman resmi saat audit (tautan di bawah). Status di bawah adalah kondisi terverifikasi pada tanggal ini, bukan hasil memori.

## 1. Status platform 2026 (sumber resmi, terverifikasi saat audit)

### 1.1 TikTok Smart+ / GMV Max - LIVE dan wajib untuk TikTok Shop Ads
- Sumber resmi: [About Product GMV Max](https://ads.tiktok.com/resources/help/article/about-product-gmv-max) (halaman terakhir diperbarui September 2026); migrasi GMV Max: sejak Juli 2025 GMV Max adalah tipe kampanye default dan satu-satunya yang didukung untuk TikTok Shop Ads pada Sales objective (panduan resmi "About GMV Max migration for TikTok Shop Ads" di TikTok Ads Help).
- Fakta resmi September 2026: Product GMV Max = otomasi untuk TikTok Shop Ads yang mengoptimalkan total channel ROI; atribusi mencakup order organik + afiliasi ke dashboard GMV Max di Seller Center; navigasi resmi juga menunjukkan "Upgraded Smart+ experience" dan bagian "Tokopedia Ads" (Product Shopping Ads via Seller Center).
- Dampak kurikulum: MISSING_COVERAGE (risiko rendah) - Elective 17 sengaja platform-neutral, tidak ada materi yang usang; namun 17.10 (Causal Measurement) dan 17.13 (Commercial Impact) perlu menambah atribusi full-funnel otomatis (GMV Max mengatribusikan GMV organik+afiliasi ke kampanye) sebagai contoh konkret "platform-reported credit" yang harus dipisahkan dari incrementality. Koreksinya penambahan, bukan perbaikan kesalahan.

### 1.2 Meta Advantage+ - pengalaman aktif bernama Advantage+ Sales Campaigns
- Sumber resmi: [Meta Advantage+ Sales Campaigns](https://www.facebook.com/business/ads/meta-advantage-plus/sales-campaigns) (halaman produk resmi, aktif saat audit).
- Fakta: Advantage+ Sales Campaigns adalah pengalaman kampanye penjualan otomatis Meta saat ini (penggabungan dari Advantage+ Shopping yang lama), dengan komponen Advantage+ Audience dan Advantage+ Creative.
- Dampak kurikulum: MISSING_COVERAGE (sama dengan 1.1) - tidak ada klaim elective yang menyebut Advantage+, jadi tidak ada materi usang; tambahkan sebagai contoh otomasi yang menggeser permukaan kerja praktisi CRO/commerce.

### 1.3 Google AI Overviews / AI Mode - relevan untuk SEO/AEO di Elective 17
- Sumber resmi: [Optimizing for generative AI features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (developers.google.com, dibaca penuh saat audit).
- Fakta resmi: AI Overviews dan AI Mode hidup di Google Search; panduan menyatakan AEO/GEO tetap bagian dari SEO (RAG/grounding + query fan-out menjelaskan cara konten masuk ke jawaban AI); pengukuran via Generative AI performance report di Search Console; mythbusting resmi: llms.txt, "chunking" konten, markup khusus, dan mencari "mentions" tidak diperlukan untuk Google Search.
- Dampak kurikulum: MISSING_COVERAGE (17.01, 17.04) - model funnel 17.01 dan segmentasi funnel 17.04 masih mengasumsikan masukan klik klasik. Koreksi bersumber: tambahkan AI-mediated discovery sebagai faktor konteks/segmentasi (sumber: panduan Google di atas) plus penangkal hype "AEO hack" sesuai mythbusting resmi. Tidak ada klaim draft yang salah - ini penambahan.

### 1.4 Programmatic (DV360) 2026
- Sumber resmi: [Display & Video 360 announcements](https://support.google.com/displayvideo/announcements/9210754) (feed pengumuman resmi; 2026 termasuk dukungan shared codes untuk brand partner access pada video YouTube creator); [Google Marketing Live 2026](https://business.google.com/us/accelerate/googlemarketinglive) (AI-powered ads, Gemini, attribution tools).
- Dampak kurikulum: TIDAK BERLAKU untuk elective - DV360 adalah wilayah core Track 6 (DSP/programmatic trading), bukan E17/E18 (boundary di DPA-MASTER-SOURCE-OF-TRUTH.md). Tidak ada materi elective yang usang terkait DV360; dicatat agar tidak ada tumpang tindih audit.

### 1.5 Retail media Indonesia - Shopee / Lazada / Tokopedia / Blibli
- Shopee: portal resmi Shopee Ads aktif (search, product, brand, live, off-platform).
- Lazada: Lazada Sponsored Solutions adalah produk iklan resmi untuk seller Lazada.
- Tokopedia: bisnis TikTok Shop Indonesia dan Tokopedia resmi digabung di PT Tokopedia (TikTok memegang stake kontrol) per [rilis resmi GoTo, 1 Feb 2024](https://www.gotocompany.com/en/news/press/goto-and-tiktok-announce-transaction-completion-formalizing-strategic-partnership-for-indonesia); iklan dikelola lewat Seller Center (bagian "Tokopedia Ads" pada TikTok Ads Help, terverifikasi saat fetch 1.1).
- Blibli: promosi seller lewat Blibli Seller Center (aplikasi resmi iOS/Android); dokumentasi produk iklan publik terbatas - verifikasi nama produk resmi sebelum dikutip di materi.
- Dampak kurikulum: MISSING_COVERAGE (18.09, 18.02) - 18.09 Media Mix mendaftar TV, audio, print, OOH, cinema, partnership tapi tidak menyentuh commerce/retail media yang pada 2026 merupakan baris belanja media utama di Indonesia. Koreksi: tambahkan retail media sebagai channel media mix dan sumber data audience di 18.02, dengan caveat measurement vendor-controlled.

## 2. Klaim di dalam draft elective yang diverifikasi

| Klaim draft | Lokasi | Status | Bukti |
|---|---|---|---|
| RAB AMP diumumkan 15 September 2026, program US | appendix, baris 674 | BENAR | [RAB PR #1035](https://www.rab.com/public/pr/pr_detail.cfm?id=1035) ("NEW YORK - Sept. 15, 2026"); konfirmasi sekunder Insider Radio 15 Sep 2026 |
| OAAA DOOH methodology "published in December 2022" | appendix, baris 673 | TANGGAL TIDAK AKURAT | OOH Measurement & Analytics Guide (PDF oaaa.org, unggahan Sept 2022) dan DOOH Exposure Methodology Standardization Guidelines ([halaman resmi](https://oaaa.org/resources/dooh-exposure-methodology-standardization-guidelines-best-practices/), rilis Mei 2022). Dokumen ada; ubah "December 2022" menjadi "2022". |
| Consent Mode hanya meneruskan pilihan ke tag yang mendukung, bukan mekanisme perolehan konsen | 17.03, Q02 | BENAR | konsisten dengan dokumentasi Google Consent Mode; pernyataan draft akurat |
| WCAG 2.2 SC 3.3.1 untuk form error identification | 17.05, Q02 | BENAR | teks success criterion sesuai klaim draft |
| GRP = reach % x average frequency; unit/universe/period wajib disebut | 18.03 | BENAR | sesuai konvensi pengukuran media; draft juga melarang penjumlahan reach lintas sumber |
| GA4 / GTM / Optimizely / Microsoft Clarity sebagai referensi implementasi | 17.x | MASIH AKTIF | tautan appendix resmi vendor, belum deprecated per tanggal audit |

## 3. Rekap usang / hilang dan koreksinya

1. KOREKSI (faktual, kecil): tanggal OAAA "December 2022" menjadi "2022" pada appendix draft (baris 673). Satu-satunya klaim tanggal di draft yang gagal verifikasi.
2. MISSING (penambahan bersumber, bukan kesalahan): AI-mediated discovery (AI Overviews/AI Mode) di 17.01/17.04; contoh atribusi otomatis platform (GMV Max, Advantage+) di 17.10/17.13; retail media Indonesia (Shopee Ads, Lazada Sponsored Solutions, Tokopedia/Seller Center, Blibli Seller Center) di 18.09/18.02.
3. TIDAK ADA materi elective yang usang pada level metode: metode inti (unit economics, statistik eksperimen, GRP/TRP/CPM/CPP, DID, post-buy reconciliation) tetap valid untuk 2026. Ketertinggalan elective ada di worked calculations dan bukti Indonesia (lihat 08b), bukan keusangan metode.

## 4. Catatan akurasi data register (input audit)

- ELECTIVE-18 desk audit menyatakan 18.14 = 1.358 kata dan rentang "287-1.358". Tidak dapat direproduksi: terukur 18.14 = 343 kata (f0d8dc5/e21c30e) lalu 381 kata (f23a1f9, versi sekarang); rentang aktual 14 bab lain 309-426.
- ELECTIVE-17 desk audit cocok dengan versi pra-f23a1f9, bukan file sekarang (mis. 17.01: 354 vs 406 terukur). Word count register adalah metadata basi, bukan bagian verdict.

## 5. Status keputusan

28/28 chapter audit = NEEDS_EXPANSION, sehingga kedua elective TETAP BERSTATUS OPEN dan tidak ada yang ditandai complete. 56/56 knowledge check relevan dan benar untuk mode reflektif, belum siap dipromosikan ke scored (quantitative gap + SME masih OPEN).
