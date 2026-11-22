# 18 — Browser QA & Engineering Audit, DPA v3 (Agent F)

- Agent: F — Engineering, QA & Accessibility
- Tanggal: 2026-11-21
- Worktree: `dpa-wF` (isolated), branch `audit/v3-F-engineering`
- Server QA: `python -m http.server 4180` (root repo dpa-wF), target `http://127.0.0.1:4180/index.html`
- Browser: playwright-core 1.64.1 + `channel: "chrome"` (headless) dari `dpa-work/node_modules`; axe-core 4.14.0

Status keseluruhan: **5/5 validator PASS; browser QA hijau kecuali 1 temuan axe (color-contrast pada watermark footer); anti-gaming PASS (0 pasangan >50%, fallback generator terbukti lolos cek struktural dan tertangkap test baru).**

---

## 1. Validator (5/5 PASS, exit code 0 semua)

| # | Script | Exit | Ringkasan hasil |
|---|--------|------|-----------------|
| 1 | `scripts/validate-dpa-static.js` | 0 | PASS. 169/169 chapter HTML & guide IDs unik; 507 QnA evidence = 507 rubric; 169 glossary; 0 literal `undefined`; 397 DOM ID unik; 0 unresolved anchor; 0 missing local script; agency 16×5 cells; failures: []. |
| 2 | `scripts/validate-dpa-audit-registers.js` | 0 | PASS — register parity & control integrity. 169 chapters, 507 QnA, 0 parity mismatch; 169 resource rows (180 URL unik); desk review T01–T16 (10/12/11 bab per track, semua PARTIAL/PARTIAL_STRONG); elective 28 bab + 56 knowledge checks tetap OPEN. |
| 3 | `scripts/validate-dpa-guide-registry.js` | 0 | PASS. 169/169 guide + 169/169 resource map; setiap bab ≥2 source HTTP(S) unik + concept/example/steps/practice/knowledge checks; credential routes ≤3 per bab; 28 elective review OPEN. |
| 4 | `scripts/audit-dpa-chapter-depth.js` | 0 | PASS — structure signals only. 169 bab; 6 priority tracks (63 bab); 0 duplicate QnA; minimum metrics terpenuhi (workflow 370, steps 4, practice 133, urls 2, qna 3). Catatan skrip: content & SME approval OPEN — tidak dinilai skrip ini. |
| 5 | `scripts/test-dpa-quiz-engine.js` | 0 | PASS. 7 kelompok uji: synthetic-only gating, summative rejection, empty/invalid state, schema/ID/duplicate validation, unanswered guard + scoring deterministik, rationale/review/retry/history, snapshot isolation. |

## 2. Browser QA (Playwright, chrome channel, port 4180)

Runner baru: `scripts/test-dpa-browser-qa.cjs` (menulis `docs/delivery/18a-browser-qa.json`). Bukti mesin tersimpan di `18a-browser-qa.json`; ringkasan:

### 2.1 Role switch — 16/16 PASS
Semua 16 role di-switch lewat UI asli (tombol `Ganti role` → `Pilih jalur`), setiap kali: track box aktif (`on`), box core lain tertutup, jumlah bab & prefix ID cocok:

| Role | Track | Bab | Role | Track | Bab |
|------|-------|-----|------|-------|-----|
| fullstack | T01 | 10 ✓ | analytics | T10 | 10 ✓ |
| connection | T02 | 10 ✓ | seo | T11 | 10 ✓ |
| media | T03 | 10 ✓ | crm | T12 | 10 ✓ |
| paidsearch | T04 | 10 ✓ | content | T13 | 11 ✓ |
| paidsocial | T05 | 10 ✓ | kol | T14 | 12 ✓ |
| programmatic | T06 | 12 ✓ | affiliate | T15 | 12 ✓ |
| retail | T07 | 10 ✓ | community | T16 | 12 ✓ |
| investment | T08 | 10 ✓ | adops | T09 | 10 ✓ |

Total 10+10+10+10+10+12+10+10+10+10+10+10+11+12+12+12 = 169 ✓ (plus 6 bab Common Foundation `cf`).

### 2.2 Milestone LEARN / EARN / APPLY / MASTER
- **Sweep seluruh DOM (175 bab): 0 masalah.** Setiap bab punya study panel `.chapter-study` + keempat milestone.
- LEARN: milestone + daftar langkah `.lesson-topic-list` ≥3 item per bab ✓ (sampel adops CH01: 4 langkah).
- EARN: **139 bab** merender credential cards dengan **maks 3 card/bab** (max terobservasi = 3 ✓) dan total **275 link issuer**; **36 bab** menampilkan empty-state jujur ("Belum ada award provider yang tervalidasi") — tidak ada bab memalsukan card kosong.
- Link issuer clickable: semua `a[data-credential-url]` visible, `href` https(s), `rel="noopener noreferrer"`, `target="_blank"` (contoh T09-CH01 → `https://skillshop.withgoogle.com/`).
- APPLY: deliverable non-kosong di semua bab (sampel 32/32 ✓).
- MASTER: knowledge checks ≥1 item per bab (sampel 32/32, mis. 3 checks) ✓.
- Sampel bab dibuka per role (bab pertama + terakhir, 32 audit): **0 problem**.

### 2.3 Console / page errors
`console.error` = 0, `pageerror` = 0 seluruh sesi QA (16 role switch + 6 viewport + 2 run axe). ✓

### 2.4 Overflow horizontal — 6/6 viewport PASS
320 / 375 / 768 / 1024 / 1366 / 1440 px, diukur pada default view **dan** saat role adops aktif dengan bab terbuka. Overflow = 0 px di semua viewport (toleransi 1 px). ✓

### 2.5 Keyboard — skip link
Tab pertama langsung fokus ke `a.skip-link` → `href="#main"`, teks "Langsung ke konten utama". ✓

### 2.6 axe WCAG 2 A/AA — 1 violation (temuan, tidak diperbaiki di sini)
- Dua run (default view semua week terbuka; role picker terbuka): masing-masing 26 rule PASS.
- **1 rule violation unik: `color-contrast` (impact: serious, WCAG 2.1 AA 1.4.3)** — 3 node pada run pertama dan 2 node pada run kedua; 2–3 node lagi `incomplete` (tidak dapat dipastikan otomatis).
- Node yang gagal: `.wm > span` — watermark footer "© Putra Try Arga · Gratis untuk edukasi" dengan warna `rgba(237,232,222,0.03)` di atas `rgb(16,17,20)` (kontras ≈ 1.01:1), diulang 4 span.
- Rekomendasi (untuk agent pemilik app): tandai watermark `aria-hidden="true"` + `role="presentation"` (atau hapus duplikasi span), karena ini dekoratif dan bukan informasi; kontras teks informatif lainnya lolos.
- JSON QA berstatus FAIL karena gate axe ini — status dipertahankan apa adanya sebagai temuan audit.

## 3. Anti-gaming: uji content-uniqueness (test baru)

Pertanyaan tugas: *apakah bab fallback (generator) lulus cek "3 steps + 2 links" padahal konten generik?*

**Jawaban: ya, cek struktural tidak menangkapnya.** Inspeksi `buildGuide` (index.html:4892): tanpa `roleNote` registry, generator selalu menghasilkan `steps ≥ 3` (dari `topics.map`), dan 2 link bab berasal dari `DPA_CHAPTER_RESOURCE_MAP` yang independen dari isi guide — jadi bab generik lolos kedua cek struktural. Karena itu gate konten diperlukan.

Test baru: `scripts/test-dpa-content-uniqueness.cjs` (Node murni: `node:vm` + `node:fs`, tanpa dependensi, tanpa mengubah file lain):
- Memuat 169 guide (fullstack + paid-social + 3 part role guides + registry) di sandbox VM.
- Membandingkan teks antar bab **dalam satu track** (16 track, **814 pasangan**), metrik containment `|A∩B| / min(|A|,|B|)` pada token ternormalisasi (HTML di-strip, stopwords ID/EN dibuang). **Duplikasi >50% = flag.**
- Canary anti-gaming: dua bab sintetis dari template fallback persis `buildGuide` → **terdeteksi 94.6% duplikasi = flagged** (detektor terbukti menangkap konten generik; jika tidak, test gagal).

**Hasil data riil: 0 pasangan flagged.** Duplikasi tertinggi 38.2% (DPA-T07-CH01 vs T07-CH03); maksimum per track 27.1–38.2% — semua di bawah 50%. Exit code 0. Kombinasi cek struktural + gate ini menutup jalur gaming "bab generik".

## 4. File & reproduksi

Deliverable di branch `audit/v3-F-engineering`:
- `docs/delivery/18-browser-qa-v3.md` — laporan ini.
- `docs/delivery/18a-browser-qa.json` — bukti mesin QA browser (role switch, sweep, sampel, viewport, axe, console).
- `scripts/test-dpa-content-uniqueness.cjs` — test baru (anti-gaming).
- `scripts/test-dpa-browser-qa.cjs` — runner QA browser (helper reproduksi).

Reproduksi:
```
python -m http.server 4180        # root dpa-wF
node scripts/validate-dpa-static.js
node scripts/validate-dpa-audit-registers.js
node scripts/validate-dpa-guide-registry.js
node scripts/audit-dpa-chapter-depth.js
node scripts/test-dpa-quiz-engine.js
node scripts/test-dpa-content-uniqueness.cjs
node scripts/test-dpa-browser-qa.cjs     # perlu dpa-work/node_modules + server 4180
```

## 5. Yang belum diverifikasi (batasan)
- **Tautan eksternal tidak di-fetch** (275 credential link + referensi): hanya diverifikasi format https + atribut target/rel; keberadaan halaman issuer tidak diuji (butuh akses jaringan luas — milik cakupan link-audit terpisah).
- **axe `incomplete` (2–3 node `color-contrast`)**: tidak dapat dipastikan otomatis (probabelnya karena tumpukan/transparansi); perlu pemeriksaan visual manual.
- Kontras diperiksa pada tema gelap default; tema terang belum dijalankan axe-nya.
- `scripts/test-dpa-quiz-browser.cjs` dan `scripts/test-dpa-chapter-rendering.cjs` tidak dijalankan ulang pada port 4180 di ronde ini (di luar 5 validator yang ditugaskan); quiz engine sudah tercakup validator #5.
- Temuan `color-contrast` sengaja **tidak diperbaiki**: perbaikan styling `index.html` di luar mandat QA Agent F — diserahkan ke agent pemilik app dengan rekomendasi di §2.6.
