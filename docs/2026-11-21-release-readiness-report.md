# DPA Release-Readiness Report — 21 November 2026

**Branch:** `audit/dpa-release-readiness-2026-11-21` (forked from `audit/full-dpa-remediation-2026-11-05` @ `84ffbe4`)
**Session:** AutoClaw release-readiness execution · **Production:** untouched (no merge to `main`, no production deploy)

---

## A. Executive verdict

**READY FOR REVIEW ONLY.**

Semua gate teknis (G1–G6) lulus dengan bukti otomatis. Dua hal memblokir kenaikan verdict ke READY FOR AUDIENCE: (1) formal acceptance/SME sign-off masih OPEN pada 169 resource-fit dan 507 Q&A, (2) tiga register review track (T05/T11/T15) belum dibuat. Historical blockers (S0, HIST-001, HIST-002) tetap BLOCKED karena artefak aslinya tidak dapat direcovery dari remote mana pun.

## B. Actual completion statistics (verified, not estimated)

| Metrik | Nilai terverifikasi | Bukti |
|---|---|---|
| Core tracks | 16/16 dirender & diverifikasi browser (vis 10/11/12 bab sesuai desain) | qa-out/browser-qa.json |
| Advanced electives | 2/2 desk-audit (14+14 = 28 chapter) | docs/ELECTIVE-17/18-*.csv |
| Chapters | 169/169 ID unik (inventory = mapping, 0 duplikat) + 6 CF | scripts/_reconcile.py |
| Sub-chapter panels | 7–8 panel per bab (chapter-study renderer) | browser QA perRole.samples |
| Bab kosong/tipis (<500 karakter) | **0 dari 175** | thinScan browser QA |
| Q&A | 507/507 baris di 2 register | scripts/_reconcile.py |
| Resource-fit | 169/169 baris (formal acceptance OPEN) | register CSV |
| Agency cells | 80/80 | register CSV |
| Elective knowledge checks | 56/56 | register CSV |
| Link audit | 361 URL: 306 OK · 41 SSL false-positive (Workday/Nielsen — aman di browser) · 1 bot-block · 13 ditriage → 8 dikoreksi | audit-out/url-audit.json |
| Validator/test | **5/5 PASS** (exit 0) setelah perbaikan | scripts/*.js |
| Defect P0 tersisa | 0 | — |

## C. Work completed this session (files changed on this branch)

1. `scripts/validate-dpa-static.js` — **fix portability CRLF** (`read()` kini normalisasi `\r\n`→`\n`); sebelumnya FAIL di Windows, PASS di CI Linux. Plus update 1 expected-URL yang mengacu ke tautan mati.
2. **8 koreksi URL mati → URL resmi hidup** (diverifikasi 200):
   - `skillshop.withgoogle.com/googleads/` (404 di semua varian) → `https://skillshop.withgoogle.com/` — di `index.html` ×2, `fullstack-master-roadmap.js`, `docs/169-chapter-resource-mapping.md` ×3, `docs/T04-…-review.md` ×2.
   - `learn.microsoft.com/training/ai/` (404) → `https://learn.microsoft.com/en-us/training/` — di `fullstack-master-roadmap.js`.
3. `scripts/_link-audit.py` + `audit-out/url-audit.json|summary.txt` — link auditor baru (361 URL, klasifikasi 7 kategori).
4. `scripts/_reconcile.py` + `audit-out/register-reconciliation.md` — rekonsiliasi 12 register + coverage review per track.
5. `qa-out/browser-qa.json` — browser QA 16 jalur + quiz sandbox + axe + viewports.
6. Register acceptance: log verifikasi sesi ini ditambahkan (bagian akhir file).

## D. Research verification (corrections this session)

- `skillshop.withgoogle.com/googleads/` → 404 terkonfirmasi (semua varian, 4 Nov & 21 Nov) → entry point resmi kini `skillshop.withgoogle.com` (200).
- `learn.microsoft.com/training/ai/` → 404 → `learn.microsoft.com/en-us/training/` (200).
- Evidence decay terdokumentasi (tidak disenyapkan): `job-boards.greenhouse.io/omguk` 404 dan `gcs.civilservice.gov.uk` DNS-mati pada evidence matrix — job listings/evidence eksternal yang kedaluwarsa; perlu refresh evidence pada siklus berikutnya.
- Klaim sensitif sudah sesuai arahan: TTD Programmatic 101 dilabeli learning course (badge), ChatGPT Ads tidak diklaim ketersediaan universal, Meta/Google badge ≠ professional certification dipisahkan di peta credential.

## E. Testing evidence

```
node scripts/validate-dpa-static.js          EXIT=0  (status PASS, failures [])
node scripts/validate-dpa-audit-registers.js EXIT=0
node scripts/validate-dpa-guide-registry.js  EXIT=0  (169/169 chapter guides)
node scripts/audit-dpa-chapter-depth.js      EXIT=0  (min metrics: objective 362, steps 4, qna 3, urls 2)
node scripts/test-dpa-quiz-engine.js         EXIT=0  (7 kelompok uji deterministik)
```
Browser QA (Playwright/Chrome, http://127.0.0.1:4173): 0 console error · 0 page error · 0 request gagal · 175 bab dienrich · 0 bab tipis · tanpa overflow 320–1440 · axe 1 temuan (watermark dekoratif, aria-hidden — pengecualian WCAG 1.4.3 incidental) · skip-link Tab pertama ✓ · quiz sandbox: 3 soal, feedback, 0 error.

## F. Outstanding issues

| ID | Severity | Isu | Kebutuhan |
|---|---|---|---|
| O-1 | P1 | Review register T05/T11/T15 belum dibuat (13 track lain sudah) | Desk review mengikuti format T07/T16 |
| O-2 | P1 | Formal acceptance OPEN: 169 resource-fit + 507 Q&A menunggu SME sign-off | Qualified reviewer |
| O-3 | P2 | Historical blockers S0 / HIST-001 / HIST-002 tetap BLOCKED (artefak tidak ada di remote mana pun; `2084f07` invalid) | Keputusan owner: deklarasi baseline baru |
| O-4 | P2 | Label versi situs masih "Revisi v11.1" padahal arsitektur sudah renderer-based | Bump + release tag |
| O-5 | P3 | Evidence decay: 2 URL evidence agency mati; refresh berkala perlu dijadwalkan | Siklus review berikutnya |
| O-6 | P3 | 12 jalur masih memakai generator fallback (4 jalur hand-authored: T01/T02/T05/T09) | Lanjutkan penulisan guide mengikuti pola paid-social-guides.js |

## G. Audience readiness

**READY FOR REVIEW ONLY** — bukan READY FOR AUDIENCE. Alasan: konten 169 bab + 507 Q&A ada, tidak kosong, dan lulus semua gate teknis; tetapi formal acceptance (SME) terbuka, tiga register review track belum ada, dan historical blockers belum diselesaikan. Ijazah/sertifikat issuance TIDAK diotorisasi (sesuai register CERT).

## H. Next required action (smallest set)

1. Buat 3 register review T05/T11/T15 (format T07/T16).
2. Batch SME sign-off 169 resource-fit + 507 Q&A (dapat bertahap per track).
3. Keputusan owner atas S0/HIST-001/HIST-002: recovery artefak atau deklarasi baseline baru yang ditandatangani.
4. Bump label versi + tag rilis setelah 1–3 selesai; production deploy menunggu otorisasi terpisah.
