/* Materi orisinal per bab untuk jalur Paid Social.
 * Semua angka pada contoh kasus bersifat simulasi dan bukan hasil advertiser.
 * Nama menu/fitur platform dapat berubah; validasi opsi aktual di akun masing-masing.
 */
var PAID_SOCIAL_GUIDES = [
{
 concept:"Paid social adalah aktivitas membeli inventory iklan pada platform sosial secara terencana dan terukur. Pekerjaan specialist menghubungkan outcome bisnis, akun platform, aset identitas, sumber data, audience, creative, auction/delivery, measurement, dan optimization. Meta dan TikTok menjadi platform praktik utama; LinkedIn merupakan pendalaman untuk kebutuhan B2B, sedangkan Pinterest, Snapchat, Reddit, atau X dipelajari sesuai kebutuhan pasar dan akses akun.",
 example:"KASUS SIMULASI — sebuah brand FMCG Indonesia menunjuk agency untuk mengelola Meta dan TikTok. Brand tetap menjadi pemilik Business Portfolio, Page, Instagram identity, TikTok account, ad account, domain, catalog, serta Pixel/dataset. Agency mendapat partner/person access sesuai pekerjaannya. Saat kerja sama berakhir, akses agency dapat dicabut tanpa memindahkan kepemilikan aset atau berbagi password personal.",
 steps:[
  "<b>Petakan entitas dan pemilik aset.</b> Daftarkan badan usaha/brand, Business Portfolio atau Business Center, ad account, Page, Instagram identity, TikTok account, domain website, app, catalog, Pixel/dataset, payment profile, dan pemilik legal setiap aset.",
  "<b>Pisahkan ownership dari access.</b> Brand sebaiknya mempertahankan kepemilikan aset utama. Berikan person atau agency partner hanya aset dan permission yang diperlukan untuk menjalankan tugas.",
  "<b>Buat role matrix.</b> Tentukan siapa yang dapat mengelola campaign, creative, audience, billing, data source, serta business settings. Terapkan least privilege, two-factor authentication, approval, dan prosedur offboarding.",
  "<b>Lakukan account-readiness check.</b> Periksa account status, payment method, koneksi Page/identity, domain atau app setup bila relevan, kesehatan data source, katalog, policy restrictions, dan ketersediaan administrator cadangan."
 ],
 practice:"Buat asset-and-permission register untuk satu brand fiktif. Kolom minimal: platform, jenis aset, account ID sintetis, legal owner, agency partner, assigned role, admin backup, status 2FA, tanggal access review terakhir, status, dan evidence. Tandai seluruh ID sebagai SIMULATED. Jangan memasukkan email, password, ID akun pribadi, atau data pelanggan sungguhan.",
 checks:[
  {q:"Siapa yang seharusnya tetap memiliki aset digital utama brand ketika iklan dikelola agency?",a:"Brand atau badan usaha pemilik bisnis sebaiknya mempertahankan ownership. Agency memperoleh partner/person access yang dibutuhkan, bukan mengambil alih kepemilikan atau meminta password personal."},
  {q:"Mengapa full admin access tidak boleh diberikan ke seluruh anggota tim?",a:"Hak admin yang terlalu luas memperbesar dampak jika terjadi kesalahan atau account compromise. Least privilege membatasi tindakan setiap orang sesuai tugas dan membuat access review serta offboarding lebih mudah diaudit."},
  {q:"Apa perbedaan ad account, Page/identity, dan Pixel/dataset?",a:"Ad account mengelola pembelian serta campaign; Page atau identity mewakili identitas advertiser pada iklan; Pixel/dataset menerima event untuk measurement. Ketiganya saling terhubung, tetapi bukan aset yang sama."}
 ],
 terms:[
  {term:"Business Portfolio / Business Center",definition:"Workspace tingkat bisnis untuk mengelola aset serta permission. Nama dan fitur berbeda antarpublisher."},
  {term:"Ad account",definition:"Workspace untuk membuat, membayar, mengelola, dan melaporkan campaign iklan."},
  {term:"Data source",definition:"Sumber event atau conversion data, misalnya Meta Pixel/dataset atau TikTok Pixel."},
  {term:"Partner access",definition:"Akses terbatas yang diberikan kepada agency/vendor tanpa menyerahkan login personal."},
  {term:"Least privilege",definition:"Prinsip memberikan hak akses minimum yang cukup untuk menjalankan tugas."}
 ]
},
{
 concept:"Campaign objective menjelaskan hasil yang diminta dari optimasi platform; funnel menggambarkan perjalanan konsumen; conversion location menunjukkan tempat tindakan terjadi; performance goal dan optimization event menentukan sinyal delivery. Semuanya saling berkaitan, tetapi bukan istilah yang dapat saling menggantikan. Nama objective, conversion location, dan goal dapat berubah sesuai platform, campaign type, serta eligibility akun. Periksa pilihan aktual di Ads Manager sebelum launch.",
 example:"KASUS SIMULASI — brand skincare meminta lebih banyak penjualan website, tetapi operator memilih Traffic hanya karena kliknya murah. Hasilnya bisa berupa banyak kunjungan tanpa purchase yang memadai. Ketika website, checkout, event tracking, dan consent sudah siap, evaluasi objective Sales/conversion dan event Purchase. Bila conversion signal belum dapat dipercaya, dokumentasikan kekurangan data; jangan menyebut traffic murah sebagai sales.",
 steps:[
  "<b>Definisikan business outcome.</b> Tentukan purchase, qualified lead, app install, reach, atau outcome lain beserta baseline, target, periode laporan, dan batas biaya.",
  "<b>Pilih conversion location.</b> Website, app, instant form, messaging, atau destination lain akan mengubah alur pengguna, friction, kebutuhan tracking, dan kualitas hasil.",
  "<b>Pilih objective dan performance goal.</b> Gunakan opsi yang tersedia di platform dan selaraskan dengan outcome bisnis. Jangan memilih hanya karena labelnya terdengar cocok dengan tahap funnel.",
  "<b>Tentukan optimization event dan KPI.</b> Contohnya Purchase untuk website sales atau qualified Lead untuk lead generation. Pastikan definisi event jelas, event benar-benar terjadi, dan datanya dapat diverifikasi.",
  "<b>Susun measurement hierarchy.</b> Pisahkan outcome KPI dari diagnostic metrics seperti CTR/CPC/landing-page view dan guardrail seperti allowable CPA, margin, refund, atau lead quality."
 ],
 practice:"Buat objective decision tree untuk tiga brief: (A) awareness produk baru, (B) purchase melalui website, dan (C) lead konsultasi melalui Instant Form atau messaging. Untuk setiap brief, tulis business outcome, platform, objective yang tersedia, conversion location, performance goal/event, KPI utama, diagnostic metric, tracking requirement, dan alasan menolak alternatif. Tandai asumsi yang belum terbukti.",
 checks:[
  {q:"Apa perbedaan objective dan KPI?",a:"Objective platform adalah arah optimasi campaign; KPI adalah ukuran untuk menilai pencapaian outcome bisnis. Memilih objective tidak otomatis membuktikan campaign berhasil."},
  {q:"Mengapa Traffic tidak otomatis tepat untuk brief yang meminta penjualan?",a:"Traffic mengoptimalkan kunjungan atau sinyal traffic terkait, bukan selalu purchase. Klik murah tetap dapat menghasilkan conversion rate rendah, CPA tinggi, atau margin yang buruk."},
  {q:"Apa yang harus diperiksa sebelum memilih Purchase sebagai optimization event?",a:"Pastikan checkout berjalan, event terpicu, parameter value/currency benar, deduplication berfungsi bila diperlukan, consent dihormati, serta kualitas sinyal memadai."}
 ],
 terms:[
  {term:"Campaign objective",definition:"Arah optimasi yang dipilih pada tingkat campaign sesuai opsi platform."},
  {term:"Conversion location",definition:"Tempat tindakan yang diinginkan terjadi, misalnya website, app, instant form, atau messaging."},
  {term:"Performance goal",definition:"Hasil delivery yang diminta untuk diprioritaskan platform pada objective terpilih."},
  {term:"Optimization event",definition:"Event yang digunakan sebagai sinyal optimasi, misalnya Purchase atau Lead."},
  {term:"Diagnostic metric",definition:"Metrik untuk menjelaskan perubahan performa; bukan pengganti outcome bisnis."}
 ]
},
{
 concept:"Audience strategy dimulai dari kebutuhan dan perilaku konsumen, lalu diterjemahkan menjadi sumber data, aturan segmentasi, exclusions, serta hipotesis yang bisa diuji. Custom Audience biasanya memakai sumber first-party atau interaksi platform yang diizinkan; Lookalike Audience memodelkan prospek dari karakteristik source audience; interest/behavior memberi sinyal targeting; broad atau automated audience memberi ruang lebih luas bagi sistem. Ketersediaan fitur berbeda menurut platform dan akun. Jangan mengunggah atau mengaktifkan data pelanggan tanpa hak, consent, dan dasar penggunaan yang sesuai.",
 example:"KASUS SIMULASI — toko online memiliki 20.000 pengunjung website, tetapi hanya 1.200 pembeli. Seed Lookalike dari seluruh pengunjung mungkin terlalu luas karena niatnya beragam. Seed pembeli bisa lebih dekat dengan outcome, tetapi mungkin terlalu kecil atau sudah usang. Specialist perlu menilai kualitas sumber, recency, consent, ukuran, overlap, dan objective sebelum memilih seed.",
 steps:[
  "<b>Tulis audience hypothesis.</b> Definisikan siapa yang perlu dijangkau, kebutuhan/tension yang dimiliki, tindakan yang mungkin dilakukan, dan evidence yang mendukung dugaan tersebut.",
  "<b>Audit data source.</b> Periksa kualitas, recency, coverage, deduplication, consent, dan kelayakan penggunaan CRM, Pixel, engagement, customer list, atau app event untuk advertising.",
  "<b>Buat segmen fungsional.</b> Pisahkan prospecting/new customer, high-intent retargeting, existing customer/retention, dan exclusions. Setiap segmen harus memiliki peran dan KPI yang jelas.",
  "<b>Kelola overlap dan scale.</b> Tinjau estimasi ukuran audience, overlap, exclusions, eligibility geografis, dan konsentrasi delivery. Hindari memecah audience menjadi banyak ad group kecil tanpa alasan pengujian.",
  "<b>Rancang eksperimen.</b> Bandingkan broad/automated targeting dengan satu hipotesis targeting yang relevan. Jaga creative, objective, budget, dan measurement tetap sebanding."
 ],
 practice:"Bangun audience matrix dengan kolom: segment, business role, source, inclusion rule, exclusion rule, lookback/recency, consent status, estimated size, overlap risk, message angle, KPI, dan test hypothesis. Buat minimal segmen prospecting, retargeting, serta existing-customer/retention. Gunakan data sintetis jika data first-party berizin tidak tersedia.",
 checks:[
  {q:"Mengapa daftar seluruh pengunjung website tidak otomatis menjadi seed Lookalike terbaik?",a:"Pengunjung memiliki niat dan kualitas yang beragam. Seed harus mewakili outcome yang dicari dan cukup valid; buyer terverifikasi atau qualified lead dapat lebih relevan jika sumbernya sah serta ukurannya memadai."},
  {q:"Apa risiko retargeting tanpa exclusion pelanggan yang sudah membeli?",a:"Pembeli lama bisa terus menerima pesan akuisisi yang sama, audience dapat overlap, dan frequency meningkat tanpa menambah nilai incremental."},
  {q:"Bolehkah data pelanggan sensitif digunakan untuk membuat audience?",a:"Jangan menggunakan atau mengirim data sensitif yang dilarang platform atau tidak memiliki dasar pemrosesan yang sah. Ikuti consent, privacy law, platform policy, serta prinsip minimisasi data."}
 ],
 terms:[
  {term:"Custom Audience",definition:"Audience yang dibentuk dari sumber pelanggan atau interaksi platform yang penggunaannya diizinkan."},
  {term:"Lookalike Audience",definition:"Audience prospek yang dimodelkan dari karakteristik source audience; kualitasnya bergantung pada kualitas sumber."},
  {term:"Prospecting",definition:"Aktivitas paid media untuk menjangkau atau memperoleh calon pelanggan baru."},
  {term:"Retargeting",definition:"Menjangkau kembali orang yang pernah berinteraksi dengan brand atau menunjukkan intent."},
  {term:"Audience overlap",definition:"Tumpang tindih orang di beberapa audience group yang dapat mengganggu delivery dan interpretasi hasil."}
 ]
},
{
 concept:"Campaign architecture menyusun hubungan objective, budget, audience, placement, creative, dan reporting. Meta umumnya memakai hierarchy Campaign → Ad Set → Ad; TikTok Ads Manager memakai Campaign → Ad Group → Ad. Konsep levelnya mirip, tetapi setting dan tanggung jawabnya tidak identik. Pada TikTok, campaign setup mencakup objective dan campaign budget; ad group mengatur antara lain placement, targeting, schedule, optimization, dan bid; ad memuat identity, creative, copy, CTA, URL, serta tracking. Selalu validasi workflow dan pilihan terbaru di masing-masing platform.",
 example:"KASUS SIMULASI — sebuah brand ingin menguji dua audience dan tiga creative angle di Meta dan TikTok. Jika setiap kombinasi dibuat menjadi campaign terpisah, budget dapat terfragmentasi dan reporting makin sulit. Arsitektur yang lebih sederhana menentukan objective serta level budget yang tepat, memisahkan audience/test cell hanya jika memang perlu diisolasi, lalu memberi setiap ad creative ID dan naming yang dapat ditelusuri.",
 steps:[
  "<b>Mulai dari outcome dan market.</b> Pisahkan campaign jika objective, market/geography, pemilik budget, atau governance memang berbeda.",
  "<b>Rancang campaign level.</b> Catat platform, objective, campaign type, budget level, special category bila relevan, dan rancangan eksperimen.",
  "<b>Rancang Ad Set / Ad Group level.</b> Definisikan audience, placements, schedule, optimization goal, bid strategy, dan budget sesuai struktur platform yang digunakan.",
  "<b>Rancang ad level.</b> Hubungkan identity, post/creative, copy, CTA, destination URL, tracking parameters, dan approval status.",
  "<b>Terapkan naming serta QA.</b> Gunakan nama yang konsisten dan mudah dibaca. Periksa setiap ID serta relasi objek dengan brief sebelum launch."
 ],
 practice:"Buat dua blueprint terpisah: satu untuk Meta dan satu untuk TikTok. Sertakan campaign name/ID, objective, budget level, Ad Set/Ad Group, audience, placement, optimization event, bid strategy, schedule, ad/creative ID, CTA, destination URL, UTM, owner, dan QA status. Jelaskan kapan suatu group perlu dipisahkan dan kapan lebih baik digabung.",
 checks:[
  {q:"Bisakah hierarchy Campaign → Ad Set → Ad di Meta disalin mentah ke TikTok?",a:"Tidak. Konsep hierarchy sebanding, tetapi nama objek dan setting yang tersedia berbeda. Gunakan Campaign → Ad Group → Ad untuk TikTok dan petakan setting sesuai dokumentasi platform."},
  {q:"Kapan campaign perlu dipisahkan?",a:"Ketika objective, market, budget ownership, governance, atau rancangan test memang membutuhkan isolasi. Jangan memisahkan hanya untuk menambah jumlah baris atau membuat campaign tersendiri untuk setiap creative."},
  {q:"Mengapa naming convention dibuat sebelum launch?",a:"Naming konsisten mempercepat QA, filtering reporting, handover, reconciliation, dan audit perubahan antar-campaign."}
 ],
 terms:[
  {term:"Campaign",definition:"Objek tingkat campaign untuk mengatur objective dan setting/budget tertentu sesuai platform."},
  {term:"Ad Set (Meta)",definition:"Level Meta untuk setting seperti audience, placement, schedule, optimization, serta budget/bid sesuai konfigurasi."},
  {term:"Ad Group (TikTok)",definition:"Level TikTok untuk setting seperti placement, audience, schedule, optimization, dan bid."},
  {term:"Naming convention",definition:"Pola nama konsisten agar platform, market, objective, audience, creative, dan test mudah dikenali."},
  {term:"Test cell",definition:"Unit kombinasi variabel dalam eksperimen yang didefinisikan agar hasil dapat dibandingkan secara adil."}
 ]
},
{
 concept:"Creative merupakan bagian dari sistem optimasi, bukan dekorasi setelah media plan selesai. Mulai dari audience tension dan product truth, lalu turunkan menjadi angle, hook, proof, format, message, CTA, serta kesinambungan landing page. Satu iklan sebaiknya menyampaikan satu proposisi utama dan satu tindakan yang jelas. Format dan placement harus mengikuti spesifikasi platform, safe zone, cropping, aspect ratio, caption/audio, serta konteks konsumsi. Hak penggunaan creator content, musik, testimonial, dan partnership ads harus dipastikan sebelum amplifikasi.",
 example:"KASUS SIMULASI — sebuah brand minuman sehat menguji tiga angle: convenience, taste, dan ingredient proof. Offer dan landing page dibuat sama agar perbandingan awal lebih mungkin mencerminkan perbedaan angle, bukan perubahan promosi. Setiap angle memiliki dua hook. Tim mencatat creative ID, opening beberapa detik pertama, product demonstration, proof, CTA, durasi, format, dan retention metrics.",
 steps:[
  "<b>Temukan audience tension.</b> Gunakan review, komentar, interview pelanggan, search query, dan pertanyaan sales untuk menemukan kebutuhan atau keberatan yang nyata.",
  "<b>Tulis creative hypothesis.</b> Nyatakan angle, audience yang dituju, alasan pesan mungkin relevan, proof yang dapat ditunjukkan, dan tindakan yang diharapkan.",
  "<b>Buat variasi yang terkontrol.</b> Susun matrix angle × hook × format. Untuk test awal, ubah satu variabel utama kecuali multivariate test memiliki rancangan dan volume yang memadai.",
  "<b>Adaptasikan ke placement.</b> Periksa safe zone, cropping, aspect ratio, thumbnail, on-screen text, caption, audio, CTA, landing page, serta preview iklan di setiap platform.",
  "<b>Periksa policy dan usage rights.</b> Verifikasi product claim, paid-partnership disclosure, izin creator content untuk whitelisting/Spark Ads, lisensi musik, dan aturan kategori."
 ],
 practice:"Buat tiga creative concept untuk satu produk latihan. Setiap concept memuat audience insight, angle, hook, proof, storyboard/shot list, format/placement, primary copy, CTA, landing-page promise, creator/usage rights, policy check, dan hypothesis. Susun test matrix yang mengisolasi variabel utama serta tetapkan diagnostic metric dan outcome metric.",
 checks:[
  {q:"Apa perbedaan hook, angle, dan proof?",a:"Angle adalah sudut pesan atau manfaat; hook adalah pembuka yang menarik perhatian; proof adalah bukti yang membuat klaim lebih kredibel, misalnya demonstrasi, fakta terverifikasi, atau testimonial yang berizin."},
  {q:"Mengapa creative dengan CTR tinggi tetap dapat berkinerja buruk?",a:"CTR tinggi bisa berasal dari rasa penasaran atau clickbait tanpa kunjungan berkualitas dan purchase. Periksa landing-page view, conversion rate, CPA, revenue/margin, serta kualitas lead/customer."},
  {q:"Apa yang harus dicek sebelum menggunakan konten creator sebagai iklan?",a:"Cakupan dan durasi usage rights, platform/placement yang diizinkan, paid amplification atau whitelisting permission, disclosure, hak musik/asset, brand safety, dan kepatuhan klaim."}
 ],
 terms:[
  {term:"Creative angle",definition:"Sudut pesan atau manfaat yang dipakai agar proposisi relevan bagi audience tertentu."},
  {term:"Hook",definition:"Pembuka visual, audio, atau copy untuk menarik perhatian dan mengantarkan pesan utama."},
  {term:"Proof point",definition:"Bukti yang mendukung klaim atau manfaat produk."},
  {term:"Native creative",definition:"Creative yang disesuaikan dengan konteks konsumsi dan format platform tanpa kehilangan kejelasan brand."},
  {term:"Usage rights / whitelisting",definition:"Izin penggunaan atau amplifikasi konten creator; ruang lingkup dan durasinya harus terdokumentasi."}
 ]
},
{
 concept:"Auction menentukan iklan yang memenuhi syarat untuk memperoleh kesempatan delivery. Hasil tidak ditentukan bid saja; platform juga mempertimbangkan predicted action, relevance/quality, serta delivery rules. Bedakan budget, level budget, bid, cost cap/goal, dan target ROAS. Nama serta ketersediaan strategi berbeda antarpublisher dan objective. Jangan menganggap istilah CBO/ABO Meta berlaku identik di TikTok. Target efisiensi harus diturunkan dari unit economics, bukan hanya benchmark CPM.",
 example:"KASUS SIMULASI — AOV sebuah produk Rp150.000 dan contribution margin sebelum biaya iklan Rp45.000 per order. Bisnis menetapkan allowable acquisition cost Rp30.000 per order agar tersisa kontribusi Rp15.000 sebelum biaya lain. Target revenue ROAS aritmetis pada AOV dan CPA tersebut adalah 5,0x (Rp150.000 ÷ Rp30.000). Ini target bisnis simulasi, bukan janji bahwa auction akan menghasilkan angka tersebut.",
 steps:[
  "<b>Hitung batas komersial.</b> Hitung AOV, contribution margin, asumsi repeat purchase, allowable CPA/CAC, refund/cancel, dan target ROAS. Pisahkan revenue ROAS dari profit ROAS.",
  "<b>Tentukan budget level.</b> Pilih apakah budget dikontrol pada campaign atau Ad Set/Ad Group sesuai fitur platform dan objective.",
  "<b>Pahami bid strategy.</b> Bedakan volume/lowest cost, cost cap/target cost, bid cap, dan target ROAS jika tersedia. Catat apa yang dikontrol advertiser dan apa yang dioptimalkan platform.",
  "<b>Rencanakan pacing.</b> Bandingkan planned spend dengan actual spend harian dan kumulatif. Tandai underdelivery, risiko overspend, serta perubahan yang membutuhkan approval.",
  "<b>Ubah satu faktor penting pada satu waktu.</b> Diagnosis signal, audience, bid, budget, creative, conversion path, dan competition sebelum melakukan edit. Simpan alasan serta timestamp."
 ],
 practice:"Buat budget-and-bidding sheet sintetis. Input: AOV, margin, allowable CPA, target ROAS, budget, asumsi CTR/CVR, forecast conversions, planned daily spend, actual spend, dan variance. Uji skenario CPA 25% lebih tinggi dan CVR 20% lebih rendah. Berikan rekomendasi continue, test, limit, atau stop beserta risiko dan bukti yang masih kurang.",
 checks:[
  {q:"Mengapa bid bukan satu-satunya faktor yang menentukan hasil auction?",a:"Platform menggabungkan bid dengan predicted action, relevance/quality signals, dan eligibility. Bid lebih tinggi tidak otomatis menghasilkan outcome paling efisien."},
  {q:"Apa perbedaan budget dan bid?",a:"Budget mengatur atau membatasi spend pada periode dan level tertentu. Bid strategy memengaruhi cara platform bersaing di auction atau mengontrol target biaya/volume."},
  {q:"Apakah ROAS 5x berarti profit 5x?",a:"Tidak. Revenue ROAS adalah attributed revenue dibagi ad spend. Profit harus memperhitungkan margin serta biaya produk, fulfilment, diskon, fee, refund, dan biaya relevan lainnya."}
 ],
 terms:[
  {term:"Auction",definition:"Mekanisme kompetisi platform untuk menentukan iklan eligible yang memperoleh kesempatan tampil."},
  {term:"Bid strategy",definition:"Aturan platform/advertiser untuk bidding atau optimasi biaya dan volume hasil."},
  {term:"Cost cap / target cost",definition:"Target pengendalian biaya menurut definisi platform; bukan jaminan setiap hasil tepat pada angka tersebut."},
  {term:"Pacing",definition:"Laju pengeluaran aktual dibandingkan rencana budget dan jadwal campaign."},
  {term:"Revenue ROAS",definition:"Attributed revenue dibagi ad spend; tidak sama dengan profit atau incrementality."}
 ]
},
{
 concept:"Tracking menghubungkan interaksi iklan dengan tindakan di website/app. Browser Pixel mengirim event dari browser; Conversions API/Events API mengirim event melalui server atau koneksi data. Keduanya dapat saling melengkapi, tetapi tidak menghapus kewajiban consent, privacy, dan minimisasi data. Event design harus punya definisi bisnis, event name, waktu, value/currency, source, dan parameter yang diperlukan. Jika event yang sama dikirim melalui browser dan server, ikuti aturan deduplication provider. TikTok secara eksplisit meminta event_id yang sama pada event overlap dari Pixel dan Events API. UTM mengelompokkan traffic; UTM bukan pengganti event tracking.",
 example:"KASUS SIMULASI — satu purchase website dikirim melalui browser Pixel dan server Events API. Jika keduanya mewakili transaksi yang sama tetapi memakai event ID berbeda, platform dapat membaca dua event. Jika event_id yang sama diteruskan pada kedua jalur sesuai aturan provider, sistem dapat mengenali duplikasi. Jangan menggunakan satu event_id statis untuk semua transaksi; identifier harus unik untuk setiap kejadian.",
 steps:[
  "<b>Definisikan event taxonomy.</b> Petakan ViewContent, AddToCart, InitiateCheckout, Lead, dan Purchase. Setiap event membutuhkan trigger, owner, required parameters, dan kriteria validasi.",
  "<b>Rancang event ID dan deduplication.</b> Untuk event yang dikirim dari browser dan server, buat satu event_id unik per kejadian dan teruskan nilai yang identik di kedua jalur sesuai matching rules provider.",
  "<b>Validasi payload.</b> Periksa event name, event_id, event_time/timezone, value, currency, content IDs, source, consent signal, serta format parameter. Jangan mengirim password, data sensitif, atau PII yang tidak diizinkan.",
  "<b>Bangun UTM taxonomy.</b> Gunakan utm_source, utm_medium, utm_campaign, utm_content, dan utm_term secara konsisten. Hindari kapitalisasi/spasi acak, data pribadi, dan parameter yang merusak redirect.",
  "<b>Lakukan end-to-end QA.</b> Uji view, add-to-cart, checkout, purchase/lead; periksa Test Events/diagnostics, event count, deduplication, landing page, redirect, dan analytics attribution."
 ],
 practice:"Buat event map dan tracking QA sheet untuk website e-commerce fiktif. Kolom minimal: funnel stage, event name, trigger, event source, event_id rule, parameters, consent dependency, platform destination, dedup rule, UTM fields, test case, expected result, actual result, evidence, owner, dan defect severity. Sertakan satu tes duplicate browser/server dan expected count-nya. Tandai seluruh data sebagai SIMULATED.",
 checks:[
  {q:"Apa fungsi event_id saat event yang sama dikirim melalui browser dan server?",a:"event_id yang cocok membantu platform mengenali dua kiriman sebagai satu kejadian dan melakukan deduplication sesuai ketentuan provider. TikTok secara eksplisit meminta event_id yang sama pada event overlap antara Pixel dan Events API."},
  {q:"Apakah UTM dapat menggantikan Pixel atau Conversions API?",a:"Tidak. UTM mengelompokkan traffic campaign pada analytics; Pixel/API mengirim event serta parameter tindakan ke platform iklan. Fungsinya berbeda."},
  {q:"Apakah server-side tracking membuat consent tidak diperlukan?",a:"Tidak. Pengiriman melalui server tidak menghapus kewajiban privacy, consent, legal basis, platform policy, atau data minimization."}
 ],
 terms:[
  {term:"Pixel",definition:"Tag/library berbasis browser untuk mengirim event dari interaksi pengguna di browser."},
  {term:"Conversions API / Events API",definition:"Interface untuk mengirim event dan parameter dari sistem advertiser ke platform."},
  {term:"event_id",definition:"Identifier unik untuk satu kejadian, digunakan untuk menghubungkan atau menduplikasi salinan event dari beberapa jalur."},
  {term:"Event deduplication",definition:"Proses mengenali salinan event yang merepresentasikan satu conversion agar tidak dihitung ganda."},
  {term:"UTM",definition:"Parameter URL seperti utm_source dan utm_campaign untuk mengklasifikasikan traffic campaign di analytics."},
  {term:"Consent signal",definition:"Informasi izin atau pilihan pengguna yang mengatur apakah data boleh dikumpulkan atau dibagikan."}
 ]
},
{
 concept:"Learning phase adalah periode awal delivery saat sistem mengeksplorasi dan mengumpulkan signal untuk menemukan audience yang paling mungkin mencapai optimization goal. Performa dapat berfluktuasi; fluktuasi saja bukan bukti campaign gagal. Jangan menerapkan satu ambang untuk semua platform atau objective. Panduan umum TikTok yang diperbarui Juni 2026 menyebut volatilitas biasanya mulai menurun setelah sekitar 25 hasil campaign atau 7 hari. Angka tersebut bersifat indikatif, bukan jaminan status learning selesai. Guidance objective-specific dapat berbeda. Jangan menerapkan benchmark TikTok ke Meta.",
 example:"KASUS SIMULASI — tiga hari pertama campaign Purchase menunjukkan CPA yang naik-turun. Operator kemudian menaikkan budget besar, mengganti audience, mengganti creative, dan mengubah event sekaligus. Setelah itu performa berubah, tetapi penyebabnya tidak dapat dipisahkan. Praktik yang lebih baik: catat baseline, periksa status learning, pastikan delivery dan tracking sehat, lalu lakukan satu perubahan material dengan hipotesis yang terdokumentasi.",
 steps:[
  "<b>Catat konteks dan status.</b> Simpan launch date, objective, optimization event, budget/bid, audience, jumlah creative, serta learning/delivery status.",
  "<b>Pisahkan volatility dari defect.</b> Pastikan iklan benar-benar deliver, event diterima, landing page berfungsi, spend berjalan, approval valid, dan tracking tidak rusak.",
  "<b>Diagnosis frequency dan fatigue.</b> Tinjau frequency bersama reach, CPM, CTR, video retention, conversion rate, usia creative, dan perubahan audience—jangan menilai dari frequency saja.",
  "<b>Gunakan change log.</b> Catat perubahan budget, bid, audience, event, creative, atau struktur beserta timestamp, owner, hypothesis, expected impact, dan rollback condition.",
  "<b>Optimalkan berdasarkan evidence.</b> Hindari pause atau major edit berulang tanpa hipotesis. Gunakan guidance terbaru sesuai platform dan objective."
 ],
 practice:"Buat troubleshooting playbook untuk lima gejala: (1) spend tidak mulai, (2) CPM naik, (3) CTR turun, (4) frequency naik sementara conversion turun, dan (5) purchase/event tidak tercatat. Untuk setiap gejala tulis symptom, possible causes, diagnostic checks, evidence yang diperlukan, low-risk action pertama, escalation point, dan metric untuk memvalidasi perbaikan.",
 checks:[
  {q:"Apakah 25 hasil atau 7 hari menjamin campaign TikTok keluar dari learning phase?",a:"Tidak. Panduan umum TikTok menyebut volatilitas biasanya mulai menurun pada kisaran tersebut. Itu indikator stabilisasi, bukan jaminan perubahan status untuk setiap objective, account, atau campaign."},
  {q:"Bisakah benchmark learning TikTok diterapkan ke Meta?",a:"Tidak. Sistem, signal, dan guidance kedua platform berbeda. Gunakan dokumentasi terkini sesuai platform dan optimization event yang dipakai."},
  {q:"Mengapa mengubah budget, audience, creative, dan event sekaligus menyulitkan diagnosis?",a:"Beberapa faktor berubah bersamaan sehingga efek masing-masing tidak bisa dipisahkan. Change log serta intervensi yang terkontrol membuat evaluasi lebih dapat dipercaya."}
 ],
 terms:[
  {term:"Learning phase",definition:"Periode delivery ketika platform mengumpulkan signal untuk mengoptimalkan campaign ke goal yang dipilih."},
  {term:"Learning volatility",definition:"Fluktuasi performa ketika sistem masih mengeksplorasi; bukan otomatis bukti kegagalan campaign."},
  {term:"Creative fatigue",definition:"Penurunan respons ketika audience terlalu sering melihat asset serupa atau relevansi pesannya berkurang."},
  {term:"Pacing issue",definition:"Spend aktual terlalu cepat atau terlalu lambat dibandingkan rencana budget dan waktu campaign."},
  {term:"Change log",definition:"Catatan perubahan konfigurasi, owner, timestamp, hipotesis, serta hasil setelah perubahan."}
 ]
},
{
 concept:"Optimization harus dimulai dari business outcome lalu bergerak ke diagnosis, bukan dari satu metrik ke tindakan spontan. CTR, CPC, CPM, video views, dan frequency membantu menjelaskan delivery; conversion rate, CPA, revenue, margin, lead quality, dan retention lebih dekat dengan nilai bisnis. Creative testing yang baik menetapkan hypothesis, variabel utama, audience, budget, duration, primary metric, guardrail, dan decision rule sebelum test berjalan. A/B test sulit diinterpretasikan jika banyak variabel berubah sekaligus atau basis reporting tidak sebanding.",
 example:"KASUS SIMULASI — dua creative masing-masing menghabiskan Rp1.500.000. Creative A menghasilkan 20 purchase dan revenue Rp3.000.000 (CPA Rp75.000; revenue ROAS 2,0x). Creative B menghasilkan 30 purchase dan revenue Rp4.500.000 (CPA Rp50.000; revenue ROAS 3,0x), walaupun CTR-nya lebih rendah. B tampak lebih kuat pada outcome simulasi, tetapi keputusan akhir tetap harus memeriksa margin, refund, konsistensi attribution, dan kecukupan volume untuk menarik kesimpulan.",
 steps:[
  "<b>Tetapkan hierarchy metrik.</b> Mulai dari business outcome; tambahkan efficiency (CPA/ROAS), conversion quality, diagnostic (CTR/CPC/CPM/LPV), serta guardrail.",
  "<b>Rancang test yang bisa dibaca.</b> Tulis hypothesis, primary variable, control, treatment, randomization unit, audience, budget, duration, minimum evidence, dan stopping rule.",
  "<b>Baca funnel per creative.</b> Telusuri impression → click → landing-page view → conversion. Temukan drop-off, jangan berhenti pada CTR atau video views.",
  "<b>Jaga comparability.</b> Samakan attribution window, reporting timezone, conversion definition, spend period, eligibility audience, dan landing-page experience.",
  "<b>Tulis keputusan beserta uncertainty.</b> Catat winning hypothesis, limitation, dampak bisnis, next test, dan kebutuhan incrementality/holdout study."
 ],
 practice:"Gunakan dataset SIMULATED untuk dua atau tiga creative. Hitung CPM, CTR, CPC, landing-page-view rate, CVR, CPA, revenue, revenue ROAS, dan contribution setelah biaya iklan. Buat tabel atau chart, tunjukkan funnel drop-off, lalu berikan keputusan scale, iterate, hold, atau stop. Jelaskan mengapa attributed performance saja tidak cukup untuk mengklaim causal lift tanpa control/holdout atau desain kausal yang sesuai.",
 checks:[
  {q:"Mengapa creative dengan CTR lebih rendah masih dapat menang secara bisnis?",a:"Creative tersebut mungkin membawa traffic lebih sedikit tetapi lebih berkualitas, sehingga conversion atau margin lebih baik. Evaluasi outcome, CPA, revenue/margin, dan kualitas lead/customer bersama CTR."},
  {q:"Apa yang harus konsisten sebelum membandingkan dua creative?",a:"Conversion definition, objective, audience eligibility, attribution window, reporting period, budget/exposure, landing-page experience, serta variabel yang diuji harus cukup sebanding."},
  {q:"Apakah ROAS yang lebih tinggi otomatis membuktikan incrementality?",a:"Tidak. ROAS menunjukkan attributed revenue per ad spend dalam setup measurement tertentu. Incrementality memerlukan counterfactual yang kredibel seperti holdout atau randomized experiment."}
 ],
 terms:[
  {term:"Primary metric",definition:"Metrik utama untuk mengambil keputusan test dan harus ditentukan sebelum hasil dilihat."},
  {term:"Guardrail metric",definition:"Metrik penjaga agar peningkatan primary metric tidak merusak biaya, kualitas, margin, atau customer experience."},
  {term:"A/B test",definition:"Eksperimen terkontrol untuk membandingkan variasi dengan satu variabel utama yang terdefinisi."},
  {term:"Attribution window",definition:"Periode dan aturan yang digunakan platform untuk menghubungkan ad exposure/click dengan conversion."},
  {term:"Incrementality",definition:"Outcome tambahan yang disebabkan iklan dibandingkan counterfactual tanpa iklan."}
 ]
},
{
 concept:"Capstone menguji kemampuan menghubungkan business brief sampai rekomendasi optimization yang dapat dipertanggungjawabkan. Satu paket kerja harus menunjukkan commercial guardrails, objective, audience, campaign architecture per platform, creative strategy, budget/bidding, tracking, QA, reporting, serta decision log. Meta dan TikTok menjadi scope inti; TikTok Shop/Lead Gen dan LinkedIn ditambahkan bila conversion path serta business case mendukung. Angka contoh tanpa data advertiser wajib diberi label SIMULATED.",
 example:"KASUS SIMULASI — brand consumer Indonesia menyiapkan campaign website-purchase selama 30 hari dengan budget hipotetis Rp30 juta. Brief mencantumkan AOV, contribution margin, target order, dan batas stok. Rencana harus menjelaskan pembagian budget, pilihan objective/event, creative test, deduplication event, monitoring, serta kapan keputusan perubahan dilakukan. Forecast tidak boleh disajikan sebagai hasil aktual.",
 steps:[
  "<b>Brief dan economics.</b> Restate problem, audience, product readiness, AOV, margin, allowable CPA, revenue ROAS target, budget, periode, stok, dan constraints; beri label pada setiap asumsi.",
  "<b>Strategy dan architecture.</b> Tetapkan peran Meta/TikTok, objective, conversion location, optimization event, naming, campaign/ad set/ad group/ad structure, audience, placements, budget level, dan bid strategy.",
  "<b>Creative dan experiment.</b> Siapkan angle/hook matrix, adaptasi format platform, creator rights, policy check, test hypothesis, control/treatment, primary metric, guardrail, dan stopping rule.",
  "<b>Measurement dan QA.</b> Sertakan event map, Pixel/CAPI atau Pixel/Events API plan, event_id/deduplication, consent controls, UTM taxonomy, test-event evidence, link/redirect checks, serta launch sign-off.",
  "<b>Reporting dan optimization.</b> Siapkan pacing sheet dan weekly report; analisis funnel, efficiency, creative, audience, frequency, dan data quality; pertanggungjawabkan keputusan scale/iterate/hold/stop.",
  "<b>Handover dan learning.</b> Kemas source file, assumptions, version, owner, unresolved risks, serta next experiment agar pekerjaan dapat direplikasi specialist lain."
 ],
 practice:"Susun satu capstone folder berisi: (1) brief restatement dan unit economics, (2) platform role/objective decision, (3) Meta dan TikTok architecture, (4) audience matrix, (5) creative strategy dan test matrix, (6) budget/bid/pacing sheet, (7) event map + UTM + deduplication plan, (8) pre-launch QA checklist, (9) weekly report memakai data SIMULATED, dan (10) optimization memo. Presentasikan keputusan dalam 8–10 slide. Beri skor 0–3 untuk business logic, platform setup, creative/testing, tracking/QA, commercial analysis, dan evidence/limitations. Setiap area harus minimal 2; setidaknya dua area harus mendapat 3 sebelum pekerjaan disebut portfolio-ready.",
 checks:[
  {q:"Apa yang membedakan capstone portfolio-ready dari campaign mock-up biasa?",a:"Ada alur yang dapat ditelusuri dari brief dan unit economics ke objective, audience, structure, creative, budget, tracking, QA, hasil, serta keputusan. File dapat direplikasi dan semua asumsi/data diberi label dengan jujur."},
  {q:"Bagaimana data performa sintetis harus ditampilkan?",a:"Beri label SIMULATED pada setiap tabel/chart, jelaskan cara pembuatannya, dan jangan menyebutnya hasil campaign aktual atau client work."},
  {q:"Apa saja yang harus ada dalam optimization memo?",a:"Keputusan, evidence, perbandingan KPI dengan target, diagnosis, risk/limitation, owner, timeline, dan next test yang spesifik."}
 ],
 terms:[
  {term:"Campaign launch plan",definition:"Paket pra-launch yang mencakup objective, structure, budget, creative, tracking, QA, serta approval."},
  {term:"Optimization memo",definition:"Dokumen keputusan pasca-analisis yang menghubungkan evidence dengan tindakan, alasan, risiko, dan eksperimen berikutnya."},
  {term:"SIMULATED",definition:"Label eksplisit bahwa angka atau outcome dibuat untuk latihan, bukan performa advertiser aktual."},
  {term:"Portfolio-ready",definition:"Kualitas pekerjaan yang dapat dijelaskan, direplikasi, diperiksa, serta menyertakan keputusan dan limitation secara jujur."},
  {term:"Handover",definition:"Penyerahan file, konteks, ID, ownership, status, change log, dan isu yang belum selesai kepada owner berikutnya."}
 ]
}
];
