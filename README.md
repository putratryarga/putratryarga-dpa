# The Full-Stack Digital Performance Architect

Roadmap belajar digital performance berbasis **job family agency**: satu Common Foundation, lalu pilih satu dari **16 jalur spesialisasi** — dari Full-Stack, Connection Planner, Media Planner, Paid Search, Paid Social, Programmatic, Retail & Commerce Media, Media Investment, Ad Operations, Analytics, SEO/AEO/GEO, CRM, Content, KOL/Creator, Affiliate, sampai Community.

**[Buka roadmap live](https://putratryarga-dpa.vercel.app/)**



**Program architecture:** 18 pathways in total — **16 Core Specialist Tracks + 2 Advanced Electives** (Elective 17: CRO / Growth / Experience Optimization; Elective 18: Traditional Media Planning & Buying). The website role selector currently represents the 16 Core Tracks; the two electives remain separately governed advanced paths. Common Foundation CF1–CF6 is shared across the core paths and is not an additional pathway.

Dibuat oleh **Putra Try Arga** · Bahasa utama: Indonesia · Gratis untuk pembelajaran mandiri.


## Source of Truth and audit status

The current structured architecture and governance reference is [DPA Master Source of Truth](docs/DPA-MASTER-SOURCE-OF-TRUTH.md). The consolidated TXT file below is retained as a historical research/audit archive.

The consolidated research and validation record is maintained in
[`docs/16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt`](docs/16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt).
The canonical role taxonomy is maintained in
[`docs/16-core-track-role-crosswalk.md`](docs/16-core-track-role-crosswalk.md). The initial 169-chapter inventory is in
[`docs/169-chapter-evidence-register.md`](docs/169-chapter-evidence-register.md). The initial issuer-verified resource and credential register is in
[`docs/resource-credential-validation.md`](docs/resource-credential-validation.md).

The taxonomy decisions and 169 chapter IDs/content extraction are recorded.
The five-agency × 16-track evidence validation, SME/technical review of the 169
chapters, answer-key/rubric validation, regional resource checks and browser/
runtime QA remain partial. Do not treat this repository as fully validated or
merge PRs until the documented release blockers are closed.

## Tentang proyek

Repository ini berisi website edukasi satu halaman (*single-page learning roadmap*). Struktur v11 disusun dari audit fungsi pekerjaan di global agency network (WPP, Publicis, Omnicom/legacy IPG, Dentsu, Havas) dan benchmark kurikulum Purwadhika × P3I — bukan sekadar daftar course.

Alur belajar: **Common Foundation (CF1–CF6)** → **pilih jalur** → **bab khusus jalur (10–12 bab)** → **platform learning & credential** → **praktik/simulasi** → **capstone portofolio**.

Roadmap ini panduan belajar mandiri, bukan sertifikasi resmi platform dan bukan jaminan pekerjaan. Badge course ≠ sertifikasi profesional; perbedaan ini dilabeli eksplisit di seluruh situs.

## 16 jalur utama

| # | Jalur | Fokus |
| --- | --- | --- |
| 1 | Full-Stack Digital Marketing & Performance | Generalist end-to-end |
| 2 | Connection / Communications Planner | Communication strategy & touchpoint |
| 3 | Media Planner / Digital Planner & Strategist | Media mix, budget, forecast |
| 4 | Paid Search / SEM Specialist | Search intent & SEM |
| 5 | Paid Social / Biddable Social Specialist | Social auction & creative |
| 6 | Programmatic Specialist / Trader | DSP, RTB & inventory |
| 7 | Retail & Commerce Media Specialist | Marketplace & retailer ads |
| 8 | Media Buying, Investment & Publisher Partnerships | Publisher & commercial buying |
| 9 | Ad Operations / Digital Campaign Operations | Trafficking, tracking & QA |
| 10 | Media Analytics / Marketing Science | Data, diagnosis & effectiveness |
| 11 | SEO / Organic Search / AEO / GEO | Organic search & AI visibility |
| 12 | CRM / Lifecycle / Marketing Automation | Lifecycle & automation |
| 13 | Content Strategy & Creation | Editorial system & storytelling |
| 14 | KOL / KOC / Influencer & Creator Partnerships | Creator strategy & activation |
| 15 | Affiliate & Social Commerce Partnerships | Performance partnership |
| 16 | Community Management & Advocacy | Engagement & advocacy |

Advanced elective **17. CRO / Growth / Experience Optimization** dan **18. Traditional Media Planning & Buying** memiliki 28 bab draft awal (14 + 14). Audit terpisah 14 chapter per elective mengklasifikasikan semuanya PARTIAL; materi masih thin first-pass draft dan belum final/SME-approved.

## Fitur

- **Role-path selector 16 jalur** — bab, resource, dan progres menyesuaikan jalur aktif.
- **Common Foundation CF1–CF6** wajib untuk semua jalur.
- **Deliverable per bab** yang bisa dibawa ke portofolio + capstone per jalur.
- **Peta credential per jalur** dengan pemisahan tajam: badge / completion credential / skilling certificate / professional certification, termasuk yang berbayar ditandai jelas.
- **Rubrik self-review** untuk menilai deliverable sebelum masuk portofolio.
- **Tema gelap/terang**, checklist progres tersimpan di browser (localStorage), print/save PDF.

## Teknologi

Static satu halaman tanpa framework atau build pipeline: HTML5 + CSS3 + vanilla JS. Font via CDN Fontsource (versi ter-pin). File utama: `index.html`.

## Menjalankan secara lokal

```bash
python -m http.server 8000
```

Lalu buka http://localhost:8000.

## Catatan data & audit

- Tanggal audit resource terbaru: **5 November 2026** (v11.1 remediation pass).
- Sumber prioritas: dokumentasi resmi platform (Tier 1), standar industri IAB/MRC/IAB Europe (Tier 2), dan praktik/simulasi berbasis job task (Tier 3).
- Klaim yang belum bisa diverifikasi otomatis (mis. ketersediaan ChatGPT Ads per negara, harga ujian TikTok certification) diberi catatan eksplisit di situs — jangan dikutip sebagai fakta pasti.
- Nama jalur adalah **keluarga kompetensi standar**, bukan klaim bahwa semua agency memakai job title yang persis sama; variasi title dicantumkan sebagai alias.

Masukan: [email](mailto:putratryarga027@gmail.com?subject=Digital%20Performance%20Roadmap%20Feedback).


## Quiz Engine Sandbox

- [Open the formative quiz prototype](quiz-engine-prototype.html) — isolated synthetic test only; not an official DPA exam, not connected to learner progress, and not a credential or competency record.
- Automated tests: `node scripts/test-dpa-quiz-engine.js`; workflow: `.github/workflows/dpa-quiz-engine-qa.yml`.

## 169-core chapter depth screening

- [Depth-screening summary](docs/169-chapter-depth-screening.md) and [169-row metrics CSV](docs/169-chapter-depth-screening.csv) — deterministic structure-only triage; content/SME approval remains open.

## Automated Q&A and agency evidence triage

**Agency source linkage update:** 80/80 cells have attached references (101 URLs), including WPP T01 performance roles. All 80 remain OPEN for currentness, role-scope and competency review.


- [507 Q&A item triage](docs/507-qna-automated-triage.csv) — source gaps and editorial review heuristics; not approval.
- [80 agency-cell evidence gap triage](docs/80-agency-cell-evidence-gap-triage.csv) — exact JD URL/Job ID traceability queue.
- [Triage report and method](docs/2026-11-05-qna-agency-automated-triage.md).

## Priority source refinement

- [T10 10-chapter source-fit review](docs/T10-10-chapter-source-fit-review.md) and [10-row review CSV](docs/T10-10-chapter-source-fit-review.csv) — chapter-specific findings; all formal acceptance remains OPEN.


- Current resource map: **169 rows / 127 unique URLs**. T01 now has a first-pass source-fit review for all 10 Full-Stack chapters; all remain PARTIAL with formal acceptance OPEN. T03 uses the exact MRC OOH standards PDF; T07 uses the IAB/MRC Retail Media Guidelines PDF and IAB Europe V2.1 article. See [T01 source-fit review](docs/T01-10-chapter-source-fit-review.md), [track-level source remediation](docs/2026-11-05-priority-track-source-remediation.md), and [169-chapter resource-fit review](docs/169-chapter-resource-fit-review.md).
- Direct access, source-fit, and Indonesia-market caveats remain recorded; all 169 objective-level fit decisions are OPEN.

## T16 Community Management & Advocacy source-fit review

- [T16 12-chapter source-fit review](docs/T16-12-chapter-source-fit-review.md) and [12-row CSV](docs/T16-12-chapter-source-fit-review.csv) — all chapters PARTIAL; legal applicability, platform access and SME approval remain OPEN.

## T13 Content Strategy & Creation source-fit review

- [T13 11-chapter source-fit review](docs/T13-11-chapter-source-fit-review.md) and [11-row CSV](docs/T13-11-chapter-source-fit-review.csv) — all chapters PARTIAL; rights/legal, platform and SME checks remain OPEN.

## T07 Retail & Commerce Media source-fit review

- [T07 10-chapter source-fit review](docs/T07-10-chapter-source-fit-review.md) and [10-row CSV](docs/T07-10-chapter-source-fit-review.csv) — all ten chapters PARTIAL; platform access, measurement and SME approval remain OPEN.

## T02 Connection Planning source-fit review

- [T02 10-chapter source-fit review](docs/T02-10-chapter-source-fit-review.md) and [10-row CSV](docs/T02-10-chapter-source-fit-review.csv) — all ten chapters PARTIAL at desk review; formal source fit and Indonesia/SME validation remain OPEN.

## T03 Media Planning source-fit review

- [T03 10-chapter source-fit review](docs/T03-10-chapter-source-fit-review.md) and [10-row CSV](docs/T03-10-chapter-source-fit-review.csv) — all ten chapters are PARTIAL at desk-review level; formal source-fit, Indonesia access and SME approval remain OPEN.

## P1 audit registers

- [169-chapter rubric calibration register](docs/169-chapter-rubric-calibration-register.csv) — one row per chapter; all calibration/SME decisions OPEN.
- [507 core Q&A editorial/SME review register](docs/507-qna-editorial-sme-review-register.csv) — 507 items; all OPEN, not scored/approved.
- [169 objective-level resource-fit register](docs/169-objective-resource-fit-register.csv) — one objective/source review row per core chapter; all OPEN.
- [80 agency-role cell validation register](docs/80-agency-role-cell-validation-register.csv) — one row per agency × core-track cell; direct JD validation remains open.
- [28 elective validation register](docs/28-advanced-elective-validation-register.csv) and [56 elective knowledge-check review register](docs/56-elective-knowledge-check-review-register.csv) — separate from the 169 core chapters.
- [Priority-track source remediation](docs/2026-11-05-priority-track-source-remediation.md) — T02/T03/T07/T10/T13/T16 source improvements and limitations.
- [T02 Connection Planning review](docs/T02-10-chapter-source-fit-review.md), [T03 Media Planning review](docs/T03-10-chapter-source-fit-review.md), [T07 Retail Media review](docs/T07-10-chapter-source-fit-review.md), [T10 Analytics review](docs/T10-10-chapter-source-fit-review.md), [T13 Content review](docs/T13-11-chapter-source-fit-review.md), and [T16 Community review](docs/T16-12-chapter-source-fit-review.md) — first-pass desk reviews; every chapter remains PARTIAL and formal acceptance OPEN.

## Audit & working documents

- [Quiz & Assessment Engine — Technical Design](docs/quiz-engine-technical-design.md) — formative quiz architecture and approval/security boundaries. The isolated synthetic-only sandbox is implemented and CI/browser-tested; scored assessment and main chapter integration remain OPEN.

- [Requirements Traceability & Acceptance Register](docs/requirements-traceability-acceptance-register.md) — master acceptance criteria, verification classes, blockers, dependencies and release gates for 16 Core + 2 Electives.


- [Advanced elective full chapter drafts — 28 chapters](docs/28-advanced-elective-full-chapter-drafts.md) — first-pass content, Q&A, learner rubric and source appendix; SME/market validation remains open.
- [Advanced elective architecture source of truth](docs/advanced-electives-source-of-truth.md) — approved taxonomy, chapter boundaries and validation gates.
- [169-chapter resource fit review](docs/169-chapter-resource-fit-review.md) — provisional desk assessment of all 16 core tracks; chapter-level objective sign-off remains open.
- [169-chapter resource mapping](docs/169-chapter-resource-mapping.md) — chapter source register with publisher and URL corrections.
- [Supplemental audit findings — 5 November 2026](docs/2026-11-05-supplemental-audit-findings.md) — new observations only; does not replace historical 23 findings or D-1…D-12.
- [Remediation execution ledger](docs/2026-11-05-remediation-execution-ledger.md) and [static repository QA report](docs/2026-11-04-static-repository-qa.md).
- [Raw 169 × 7 score input template](audit-inputs/169-chapter-audit-score-input-TEMPLATE.csv) — blank collection template, not historical raw values; read [its usage/provenance rules](audit-inputs/README.md) before use.

**Release decision:** NOT READY — REMEDIATION INCOMPLETE. The original raw score matrix, historical issue/discrepancy records, SME/JD sign-off, complete 169-objective source fit, learner pilot and authenticated browser QA remain open or blocked.

## Hak penggunaan

Roadmap ini dibagikan gratis untuk pembelajaran. Konten dan desain tetap milik pembuatnya. Jangan menjual, mengemas ulang, atau mengomersialkan modul tanpa izin tertulis.

---

© 2026 Putra Try Arga · The Full-Stack Digital Performance Architect


## Planned feature: DPA Certificate Issuance & Verification

The proposed [certificate issuance and verification specification](docs/certificate-issuance-verification-spec.md) defines DPA-issued participation, completion and track-achievement credentials, server-side issuance, public verification and revocation. **Design only: no live issuance is implemented or authorized.** Assessment approval, issuer policy, privacy/security review and a trusted backend are prerequisites. DPA-issued learning credentials must not be described as BNSP/LSP or government certification without a separately verified authorization.

- [Elective 17 CRO chapter-level desk audit](docs/ELECTIVE-17-CRO-CHAPTER-LEVEL-DESK-AUDIT.md) and [14-row CSV](docs/ELECTIVE-17-CRO-CHAPTER-LEVEL-DESK-AUDIT.csv) — all 14 chapters PARTIAL; formal status OPEN.
- [Elective 18 Traditional Media chapter-level desk audit](docs/ELECTIVE-18-TRADITIONAL-MEDIA-CHAPTER-LEVEL-DESK-AUDIT.md) and [14-row CSV](docs/ELECTIVE-18-TRADITIONAL-MEDIA-CHAPTER-LEVEL-DESK-AUDIT.csv) — all 14 chapters PARTIAL; formal status OPEN.
- [56 elective knowledge-check review register](docs/56-elective-knowledge-check-review-register.csv) — expanded answer guidance with prior answers preserved; all 56 remain reflective/non-scored and source/editorial/SME statuses OPEN.
