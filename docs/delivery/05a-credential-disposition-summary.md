# 05a - Credential Disposition Summary (AGENT A, DPA v3)

- Tanggal: 2026-11-21 | Branch: audit/v3-A-credential | Worktree: dpa-wA (isolated)
- Input: register riset 43 baris proposal credential (33 core + 3 CF bab tanpa Earn route)
- Verifikasi: halaman issuer resmi per baris; biaya dipisah initial/retest/renewal; taksonomi award type mengikuti governance (professional_certification / vendor_course_certification / course_completion_credential / course_completion_certificate)

## 1. Breakdown disposisi (43 baris)

| Disposisi | Baris |
|---|---|
| ACCEPTED_DIRECT_FIT | 14 |
| ACCEPTED_PARTIAL_FIT | 10 |
| ACCEPTED_SUPPORTING_FIT | 9 |
| REJECTED_SCOPE_MISMATCH | 0 |
| BLOCKED_ACCESS_VERIFICATION | 0 |
| NO_ROUTE_WITH_EVIDENCE | 10 |
| NEEDS_OWNER_OR_SME_DECISION | 0 |

REJECTED_SCOPE_MISMATCH / BLOCKED_ACCESS_VERIFICATION / NEEDS_OWNER_OR_SME_DECISION = 0. Maks 3 route per chapter terpenuhi (realisasi maks = 2).

## 2. Recompute aritmetika coverage (dari CSV output aktual, bukan klaim)

- Baris ACCEPTED (placements layak integrasi): 33, tersebar di 26 bab (25 core + 1 CF).
- Core: baseline governance 136/169 ber-route + 25 bab core baru = 161/169 core (target ~161 tercapai).
- CF: baseline 3/6 + CF-CH05 = 4/6 CF (target tercapai).
- No-route final (10): core = T01-CH10, T02-CH10, T08-CH08, T09-CH10, T10-CH10, T11-CH10, T12-CH08, T12-CH10; CF = CF-CH01, CF-CH04.
- Chapter ber-2 route (semua <= 3): T08-CH01, T08-CH02, T08-CH04, T08-CH06, T08-CH09, T10-CH04, T12-CH02.

## 3. Mandat khusus (a): IAB Certification (iabcertification.com)

- Program aktif: hanya 4 - DMSC, DBPC, DAOC, DMFC. Nama eksak route: IAB Digital Media Buying & Planning Certification (DBPC); IAB Digital Ad Operations Certification (DAOC).
- Fee terpisah (Handbook + FAQ + exam-information): initial USD 500 (incl. exam fee USD 175); retest USD 175 (window 6 bulan pasca-aplikasi); recertification USD 125 per 2 tahun + CE ATAU re-exam (redesignation tidak berlaku - skema recert).
- Format: 100 MCQ, 2 jam, 80 soal scored; English; delivery Pearson VUE (test center global + OnVUE); eligibility via aplikasi + authorization-to-test; validitas 2 tahun.

## 4. Mandat khusus (b): disparitas T08-CH08 (Invoice, Reconciliation & Financial Control)

Split 4-way dicek ke halaman issuer:

1. Campaign billing/reconciliation (agency vs media owner, IO vs invoice): hanya bullet 'Managing Digital Media Finances' (1 dari 4 bullet domain Managing Campaigns, 20 persen) di blueprint DBPC - knowledge-level, bukan assessment reconciliation eksak. TIDAK defensible sebagai direct fit.
2. Media-owner reconciliation: tidak ada credential (MRC = akreditasi layanan, bukan individu).
3. Invoice internal agency: tidak ada credential (Mediaocean Prisma billing training gated, bukan sertifikasi publik).
4. Financial controls: tidak ada credential.

Keputusan: NO_ROUTE_WITH_EVIDENCE - route hanya dipetakan bila assessment issuer benar-benar mencakup objective; tidak ada yang memenuhi.

## 5. Koreksi & catatan verifikasi

- LinkedIn (T02-CH04): URL proposal business.linkedin.com/marketing-labs = 404. Gunakan route registry linkedin_marketing_strategy (professional_certification, 60 soal/60 menit/pass 75 persen, valid 24 bulan, 7 bahasa TANPA Bahasa Indonesia, URL training.marketing.linkedin.com/marketing-strategy-exam).
- Semrush (T11-CH04): URL resmi memang mengandung typo 'techincal' - biarkan apa adanya.
- Salesforce: issuer kini menyebut produk 'Data 360' (trail Unlock Your Data with Data Cloud tetap valid).
- Kaveat PARTIAL: Kaggle Intro to SQL (JS-gated; klaim no-cost+certificate dari riset same-day - konfirmasi signed-in); TikTok Academy (certificate per-kursus belum tampil publik); TTD supply-chain course (certificate per-kursus).
- Award type normalisasi: tipe yang diusulkan input dipertahankan sebagai award_type_proposed; kolom award_type_verified dinormalisasi ke taksonomi governance (contoh: badge_certification Credly TTD -> professional_certification vendor exam; certification_exam HubSpot/Semrush/Meltwater/PXA -> vendor_course_certification).

## 6. Rekomendasi integrasi (untuk integrator, bukan bagian dari commit ini)

- Tambahkan 33 placements baru di 26 chapter (25 core + CF-CH05).
- 21 route definition baru + 2 reuse (meta_ab_testing_course untuk T01-CH08; linkedin_marketing_strategy untuk T02-CH04 dengan URL registry).
- Cek duplikasi: jangan menduplikasi impact_affiliate_industry_certification yang sudah ada di registry saat menambah route PXA (T14-CH04).
- File runtime yang boleh diubah integrator: docs/credential-route-mapping-register.csv + chapter-credential-routes.js. AGENT A tidak menyentuh keduanya.

## 7. Batasan (honest verification)

- Klaim carried dari riset same-day yang TIDAK re-fetch: Forage (T01-CH10), Ahrefs Certification (T11-CH10), HubSpot certification-overview (T12-CH10), OpenStax/SBA (CF-CH01), sebagian kurikulum Meltwater/PXA. Semua ditandai di kolom verification_status CSV (NEGATIVE_PARTIAL / PARTIAL_VERIFIED_JS_GATE).
- Fee LinkedIn Marketing Strategy tidak dinyatakan di help article resmi - cek halaman enrol sebelum booking.
- Semua pemeriksaan dilakukan 2026-11-21; daftar URL + status ada di 09-source-provenance-register.md.