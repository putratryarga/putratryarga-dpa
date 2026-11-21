# 13a — QA & Assessment Audit Summary (Agent C, 2026-11-21)

Objek: `docs/507-qna-automated-triage.csv` (507 item reflective Q&A, 169 chapter, 16 track).
Output detail per baris: `docs/delivery/13-qa-and-assessment-audit.csv` (507 baris x 42 kolom = 20 kolom asli + 22 kolom audit).
Standar acuan: modul study guides (`fullstack-guides.js`, `paid-social-guides.js`, `role-study-guides-part1..3.js`, diekstrak via loader Node yang sama dengan aplikasi — `audit-out/extract-guides.js`), kolom heuristik triage yang ada, dan konvensi format register.

## 1. Hasil machine-check (507/507 baris) — semua PASS

| Cek | Hasil |
|---|---|
| Duplikat item_id / pertanyaan persis (normalized) | 0 / 0 |
| Duplikat fuzzy (SequenceMatcher >= 0.85) | 4 pasangan / 8 item — lihat temuan manual |
| Kolom required kosong | 0 substantif; `automated_triage_flags` kosong pada 162 baris yang memang tanpa flag (benign) |
| Konsistensi answer-key vs study guide (teks persis, posisi q1..q3) | 507/507 EXACT — CSV dan `checks[]` guide identik |
| Konsistensi `answer_word_count` / `question_word_count` vs hitung ulang (toleransi 2) | 0 mismatch |
| Konsistensi lintas register (triage vs editorial-SME register: teks, jawaban, status) | 0 inkonsistensi, 0 item ekstra |
| Format source URL (multi-URL dipisah `;` divalidasi per URL) | 0 format rusak; 342 baris tanpa sumber (konsisten dengan flag `SOURCE_REFERENCE_MISSING`); 154 baris memakai multi-URL (2-3 URL satu sel) |
| Konsistensi flag triage vs hitung ulang (`ANSWER_LENGTH_HEURISTIC_LT_14_WORDS`) | 0 mismatch — heuristik lama akurat |
| Distribusi | 169 chapter x 3 item; 16 track (30-36 item/track); `question_number` 1-3 lengkap di semua chapter |
| Panjang jawaban | 1-40 kata; tidak ada jawaban anomali panjang/pendek selain yang sudah di-flag |

Catatan format (bukan error): 154 sel `source_reference` berisi beberapa URL dalam satu kolom. Konsumen yang menganggap seluruh sel sebagai satu URL akan salah parse — pertimbangkan kolom terpisah atau pemisah baku saat refaktor register.

## 2. Review manual stratified — 60 item

Desain: 60 item (deviasi dari brief "6 per track" — 6 x 16 track = 96 > 60; dipilih alokasi proporsional per track: 13 track x 4 + 3 track x 3), tier mudah/sedang/sulit = 20/20/20 (heuristik opener + panjang jawaban + marker interpretatif), random seed 20261121. Metode: setiap jawaban dibaca terhadap concept/example/steps/terms chapter-nya di study guide.

**Correctness terhadap sumber: 60/60 konsisten dengan guide.** Tidak ada kontradiksi fakta antara jawaban dan materi chapter-nya. Jawaban yang menyangkut platform umumnya sudah berhedging ("biasanya", "sesuai platform", "periksa terms").

Temuan terpenting (kolom audit di CSV):

1. **8 item fuzzy-duplicate lintas track → perlu keputusan SME** (`audit_dup_flag=FUZZY_GE_085`): (a) `DPA-T03-CH08-Q01` vs `DPA-T08-CH01-Q02` (ratio 0.962, soal sama "apa beda media planner dan media buyer"); (b) `DPA-T04-CH03-Q02` vs `DPA-T05-CH04-Q02` (0.949, "kapan campaign perlu dipisah/kah"); (c) `DPA-T02-CH03-Q01` vs `DPA-T10-CH09-Q01` (0.852, trend/insight vs finding/insight — konsep berbeda, cek batas definisi); (d) `DPA-T09-CH08-Q02` vs `DPA-T11-CH08-Q01` (0.889, click count vs GSC clicks — platform berbeda). Reuse lintas track bisa sengaja (kontekstualisasi role); SME yang memutuskan.
2. **`DPA-T03-CH06-Q02` (GRP)**: jawaban menyebut GRP "berdasarkan target universe"; guide menggabungkan GRP/TRP jadi satu term. Nuansa GRP-vs-TRP (basis universe) interpretatif → butuh SME.
3. **`DPA-T05-CH08-Q01` (learning phase TikTok)**: guide chapter mengutip "panduan TikTok diperbarui Juni 2026" (25 hasil / 7 hari). Jawaban Q&A tidak mengulang angkanya (baik), tapi klaim bertanggal ini perlu re-verifikasi currentness saat rilis.
4. **`DPA-T14-CH10-Q01` (boost vs Partnership Ads)**: menyebut nama fitur spesifik (Meta Partnership Ads, TikTok Spark Ads) — benar saat audit, nama fitur bisa berubah; jawaban sudah menghedging.
5. **Konsistensi bahasa editorial (minor, 4 item)**: `DPA-T07-CH02-Q02`, `DPA-T15-CH01-Q02`, `DPA-T16-CH09-Q01`, `DPA-T07-CH01-Q03` — klausa Inggris menyisip di jawaban berbahasa Indonesia; makna jelas, rapi saat revisi editorial.

Clarity: 57 OK, 3 minor. Ambiguity material: tidak ada. Cognitive level terdistribusi remember-understand (definisi), apply (checklist operasional), analyze/evaluate (soal "mengapa/kapan") — sesuai desain REFLECTIVE_QA_NOT_SCORED.

## 3. Status

Semua 507 baris tetap **PENDING SME REVIEW** (`audit_disposition`); kolom asli tidak diubah, tidak ada item yang ditandai SME-approved. Skrip + bukti: `audit-out/qa-validate.py`, `audit-out/qa-machine-results.json`, `audit-out/qa-review-sheet.txt`.
