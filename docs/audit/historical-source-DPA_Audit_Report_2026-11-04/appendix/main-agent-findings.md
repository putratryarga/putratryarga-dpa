# Main-Agent Audit Findings — DPA Repository Audit (4 Nov 2026)

Auditor: AutoClaw main agent (baseline, deployment, production QA, governance, electives, resources, assessment). Children: 4 chapter auditors (T01–T16), 5 evidence researchers (WPP/Publicis/Omnicom/Dentsu/Havas). All times WIB (+07:00) unless noted.

## 1. Verified baseline (Phase 0)

| Item | Verified value |
|---|---|
| Audit start | 2026-11-04 23:28:52 +07:00 |
| Repo | https://github.com/putratryarga/putratryarga-dpa (public) |
| Default branch | main |
| main HEAD at audit | `640b1924a6b200fac83df1dcac1ddd1e8b9ea61d` — "docs: sync plain-text curriculum audit", 2026-11-04 20:53:27 +0700 (= prior audit's SHA: main unchanged since) |
| Tracked files on main | 8: index.html, fullstack-guides.js, paid-social-guides.js, README.md, docs/16-core-track-role-crosswalk.{md,txt}, docs/role-competency-matrix-and-elective-chapter-audit.{md,txt} |
| PR #5 | OPEN, DRAFT, base main@`cc54ac2934…`, head `audit/align-all-16-track-learning-modules`@`3ed9c233ef…` (unchanged from prior record), 86 commits, 25 changed files, mergeable=CONFLICTING, mergeStateStatus=DIRTY, updated 2026-11-04T16:01:18Z |
| PR #6 | OPEN, DRAFT, base same, head `docs/advanced-electives-source-of-truth`@`48332c44c8…` (unchanged), 66 commits, 17 changed files, CONFLICTING/DIRTY, updated 2026-11-04T16:01:15Z |
| Other branches | audit/16-track-learning-curriculum (555d3db), fitur/v11-16-track (212896c), fix/mobile-role-spacing-qa (90d7bea), fix/single-track-roadmap-ui (f733b5b), fix/v11.2-16-track-audit (aa32a1f), fix/v11.3-align-16-industry-roles (4dee786), revisi/v10.7-audit (ae712a3), update/programmatic-role-track-specific-learning (c2aee07) |
| Base commit | cc54ac2 "Increase mobile spacing between roadmap role cards" 2026-11-04 15:14:01 +0700 |
| main vs base | only 4 doc files added (both .md crosswalk/matrix docs differ in content from PR copies; .txt versions identical) |
| PR5 vs PR6 shared files | 16 of 19 byte-identical; fullstack-guides.js, paid-social-guides.js, index.html differ (PR5 = app changes; PR6 app files == base == main) |
| PR6 unique file | docs/advanced-electives-source-of-truth.md |
| PR5 unique files | chapter-guide-map.js, fullstack-master-renderer.js, fullstack-master-roadmap.js, role-study-guides-part1/2/3.js |
| Production | https://putratryarga-dpa.vercel.app/ — live, "Revisi v11.1 · 4 November 2026", Server: Vercel |
| Production content | 365,630 bytes, byte-identical to `cc54ac2:index.html` == `640b192(main HEAD):index.html` (blob a8e18a105237f8e4e8f57b7d5235d272b29eb038). Production == current main app. |
| Deployment SHA | Not exposed via public headers (no x-vercel-deployment-url SHA header on HEAD); content-level equality with main HEAD proven by blob hash + size + empty diff. Exact deployment object requires Vercel auth — NOT INSPECTED. |

Chapter inventory (verified): 16 tracks, 169 unique `DPA-Txx-CHxx` IDs in the evidence register, 0 duplicates. Per-track counts: T01–T05=10 each, T06=12, T07–T12=10 each, T13=11, T14–T16=12 each (sum 169). CF1–CF6 + capstones additionally exist in the app (not counted in the 169).

## 2. Production / deployment verification (Phase 9)

- Production serves main HEAD content (verified above). Neither PR #5 nor PR #6 content is in production (correct — both are unmerged drafts).
- Production page title, 16-track list, CF1–CF6, role selector, electives "Coming soon" copy all render. Role switching tested in browser: selecting Programmatic updates the roadmap, announces via status message ("Jalur … dipilih …"), progress denominator updates to 18 (12 track + 6 CF).
- Vercel status checks on latest PR heads: FAILURE due to build-rate-limit (per repo QA doc; not independently re-verifiable without Vercel access) — recorded as reported-claim, NOT independently verified.
- Legacy `skillshop.docebosaas.com` links: present 6× in production/main index.html; removed in PR #5 (0 occurrences). CONFIRMED stale-link defect in production.

## 3. Production guide-quality QA (Phase 8 browser part)

Browser QA (viewport ~424px width — mobile-class):
1. **Immutable chapter IDs absent from production**: `DPA-Txx-CHxx` appears 0× in main index.html vs 169× in PR5 index.html. Production mapping is not ID-based (see §4 risk).
2. **Templated guide content for 14 of 16 tracks on production**: Programmatic chapters render "PANDUAN BELAJAR" blocks whose explanatory text is template-stitched from the chapter's "Yang dipelajari" bullets ("Bab X menghubungkan <bullet>; <bullet>.; <bullet>.."), with the SAME "Penjelasan inti" paragraph, the SAME "Contoh kasus" (deal-type comparison) repeated under all 12 chapters — including chapters where it does not fit (e.g., "DSP Architecture & Platform Navigation", "Campaign Structure, Trafficking & Creative Setup") — and the same generic 5-step "(1) tulis brief dan asumsi … (5) tulis keputusan" block for every chapter. Only bullets, deliverable name, and resource list vary.
3. **"Cek pemahaman & pembahasan" renders EMPTY for every Programmatic chapter inspected (Bab 1–6)** — production has 0 comprehension Q&A for these tracks. CF chapters on production show 3 templated questions each ("input apa yang diperlukan, seperti apa output yang benar…"). The 507 Q&A items exist only in PR #5 register/guides, not on production.
4. Per-chapter resources DO render on production with credential-type labels ("GRATIS · BADGE — bukan professional certification", "GRATIS + SERTIFIKAT"); resource lists are track-level-ish (Bab 1–3 share the same 2 references; Bab 5–6 drop to 1 reference).
5. Electives on production: "Coming soon — bab & deliverable menyusul" (blueprint only). Consistent with PR #6 status.
6. Limitations: browser console/network logs not accessible via tooling; desktop/tablet viewport resize not available; localStorage persistence, print, theme toggle not round-trip tested (buttons present).

## 4. Code/technical findings (main-agent part; deep static analysis delegated to Technical QA child — see child outputs when landed)

- main index.html 370,623 bytes on disk (CRLF checkout; repo blob 365,630 LF — line-ending inflation ≈ 4,993 lines). PR5 index.html 384,683 on disk; diff vs main = 217+/193- lines, 192 hunks, mostly 1:1 replacements + small insertions near lines 2030–2038.
- PR5 adds: chapter-guide-map.js (839 B), fullstack-master-renderer.js (2.2 KB), fullstack-master-roadmap.js (22.9 KB), role-study-guides-part1/2/3.js (158.7/62.9/96.7 KB = 318.3 KB of guide data) — the 149 role-specific guides.
- @media blocks: 19 in main, 19 in PR5. The repo QA doc `2026-11-04-static-repository-qa.md` row "Responsive media-query declarations | 0 | PRESENT" is internally contradictory (Result 0 vs Status PRESENT; actual count 19). DOCUMENTATION DEFECT confirmed.
- Legacy Docebo links: main 6, PR5 0 — PR5 claim "removed legacy Skillshop endpoints" CONFIRMED for its branch; production NOT fixed.
- Guide-count claim "169 guide objects (10 Full-Stack + 10 Paid Social + 149 role-specific)" — register arithmetic consistent with file structure (2 legacy guide files + 3 role-study-guides parts); exact object counts to be confirmed by Technical QA child's parse.

## 5. Documentation governance (Phase 10)

1. **The "Source of Truth" is a chat transcript.** `docs/16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt` (486 KB, 8,575+ lines) — pointed to as "Canonical Source of Truth" by README (PR5), crosswalk .md (PR5 v1.1), resource-credential-validation.md, and rubrics draft — is a raw paste of informal chat notes (user requirements in colloquial Indonesian, WhatsApp excerpts from "Elric", prior assistant replies, deployment logs). Not a structured, reviewable specification. P0-governance issue.
2. **Same-named docs, divergent content across branches**: `16-core-track-role-crosswalk.md` — main has the older table + cross-track decisions + PR guide status note; PR5/PR6 have "Version 1.1" with a different table shape (adds Core outputs column, canonical-SoT pointer). `role-competency-matrix-and-elective-chapter-audit.md` similarly divergent (36+/13-). .txt twins identical. Merging PRs will conflict here (already CONFLICTING).
3. **Internal count inconsistency**: delta doc §8 says matrix has "16 explicit G gaps"; the matrix doc itself lists **6** explicit G gaps (T09/Dentsu, T11/Havas, T14/Havas, T15/Omnicom, T15/Havas, T16/Havas) with class counts A36/B19/C0/D37/G6 + 18 compound. The 16-vs-6 discrepancy is unreconciled in the docs.
4. QA doc self-contradiction: media-query row (Result 0 vs Status PRESENT) — see §4.
5. QA doc says "No authenticated PR preview browser session was available… cloud browser returned insufficient-funds" — honest disclosure; matches the "browser QA NOT RUN" release decision. This audit DID run live browser QA (this document §3) — first browser-level verification on record.
6. Positive: README "do not treat as fully validated or merge PRs until blockers closed"; delta doc's release gates; T16-CH12 correction supplement; explicit "NOT READY / DRAFT" decisions. Governance honesty is a strength; the failure is architecture (transcript-as-SoT, multi-version docs, no decision log).

## 6. Advanced electives (Phase 4)

Source: PR6 `docs/advanced-electives-source-of-truth.md` (14,993 B, 117 lines).
- Status label verified present: "Curriculum Architecture v1.0 — Proposed / Evidence Validation Pending" — APPROPRIATE and honest; gates table shows Architecture approved, all other gates Partial/Open.
- 14 CRO + 14 TM proposed chapters verified (tables with # / Chapter / Core outcome / Required deliverable). No chapter IDs, no instructional content, no per-chapter resources, no assessments. 28/28 = outline-only.
- Coverage vs master prompt checklists: CRO covers all 14 required areas at title level; TM covers all 14 required areas at title level (incl. audience measurement/GRP, cross-media measurement, post-buy, governance, capstone).
- Chapter IDs: none in doc → for matrix purposes DPA-ELC-CRO-01…14 / DPA-ELC-TM-01…14 constructed.
- Duplication risks (to resolve during authoring): ELC-CRO ch7/8/10 (experiment design, statistics, incrementality/causal) vs T10 chapters covering "experimentation, incrementality and modelling literacy"; ELC-CRO ch3 (analytics architecture) vs T09/T10 tracking/measurement; ELC-TM ch10/11 (negotiation/trading, buying ops) vs T08 (publisher investment, IO/negotiation). Core T01 ch8 is literally "CRO, Experimentation & Optimization" — direct overlap zone with ELC-CRO.
- Elective evidence: covered by the five holding-group children (10 elective evidence groups = 2 electives × 5 groups).
- Verdict: all 28 proposed chapters = NOT VERIFIED (no teachable content yet to validate); architecture-level work is genuine and boundaries are explicitly stated. No overclaim found in the elective doc.

## 7. Resource & credential validation (Phase 6, sampled)

Sampled 5 issuer pages live on 2026-11-04 (fetch):
1. Google Ads certifications (support.google.com/google-ads/answer/9702955): 80% pass, 75 min, retake next day, 22 languages INCLUDING INDONESIAN, 1-year validity, "professional accreditations" — every register claim CONFIRMED.
2. Amazon Ads Academy certifications: certification badges vs learning-path awards distinction; PDF certificate with expiration date; 24-h retake; 60–90 min single sitting — CONFIRMED; expiry duration not stated on page (register's refusal to claim 2 years is correct).
3. StackAdapt Programmatic Masterclass: free, 8 modules, 120 min, module tests, "recognized certificate" (vendor calls it "free 2-hour professional certification") — CONFIRMED with nuance; register's "vendor-issued, not independent accreditation" classification is defensible.
4. TTD Edge Academy Programmatic 101: 1-hour course, topics match; no certificate promised on course page — register's "learning-only" treatment CONFIRMED.
5. TikTok Media Buying Professional Certification FAQ (served in Indonesian): USD 200 excl. taxes, 60 questions, 110 min, Kryterion/Webassessor proctored, ≥1 yr experience, 2-year validity, Accredible badge, 7-day retake wait — ALL CONFIRMED; Indonesian-language FAQ supports Indonesia accessibility of prep material (exam payment/access from Indonesia still unverified).
- Production renders per-chapter resources with credential labels; 6 legacy Docebo links remain on production (see §2).
- Not yet verified (per register's own remaining items): Indonesian-account purchase flows, regional prices/taxes, exam scheduling availability — remain OPEN and must not be claimed.
- Coverage note: full 169-chapter resource-mapping register (97.6 KB) exists as first-pass baseline; spot-verification of all links not performed in this audit (sampled approach, documented).

## 8. Assessment & rubric architecture (Phase 7)

- `169-chapter-assessment-rubrics-draft.md` (482 KB): 169 chapter-specific rubric entries verified (169 DPA-T header mentions), each with: competency ID, learning outcome, required artifact (chapter-specific, copied from practice prompt), 4 "Assessor must verify" bullets, 3 Q&A answer-key reviews with "Review status: OPEN".
- Scoring standard: five dimensions 0–3 (max 15) → ×100/15; proposed pass ≥80/100; critical-failure rule (0 on Technical accuracy or Evidence/QA fails regardless of total); resubmission protocol with change log. DESIGN QUALITY: good (observable criteria philosophy, anti-gaming rule, resubmission discipline).
- WEAKNESSES (verified): (a) the 4 "Assessor must verify" bullets are IDENTICAL across chapters (templated; only the artifact line adapts); (b) all 507 answer keys marked OPEN — zero SME validation on record; (c) no sample submissions, no scoring anchors, no reviewer-agreement calibration; (d) no interactive scoring engine in code — comprehension checks are static text on production and EMPTY for 14 tracks (see §3); (e) pass threshold 80/100 is asserted, not justified/calibrated.
- Verdict: assessment architecture = drafted and structurally complete; assessment VALIDITY = unproven. 169 rubric records do not equal 169 valid assessments.

## 9. Access limitations (disclosure)

- Vercel deployment metadata, PR preview deployments (auth-protected), GitHub Actions runs: not inspected (no access or none exist).
- Browser console/network logs, desktop-width viewport, localStorage round-trip, cross-browser: not testable with available tooling.
- 169-chapter × 25-attribute review executed via register-based content audit + guide spot-checks (children) — not a line-by-line read of all 318 KB of guide JS by a human SME; findings are evidence-quoted and scoped accordingly.
- 80-cell evidence matrix revalidated per holding group by 5 researchers; career-site JS shells (Workday/Greenhouse) limit full-JD archiving — snippet-level evidence recorded where noted.
