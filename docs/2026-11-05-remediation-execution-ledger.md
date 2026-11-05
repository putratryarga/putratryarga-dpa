# 5 November 2026 — DPA Remediation Execution Ledger
**Branch:** `audit/full-dpa-remediation-2026-11-05`  
**Baseline:** PR #5 head `3ed9c233ef6c5080bee5a515d23a56300d625d6b`  
**Release state:** NOT READY — required validations remain incomplete.

## Change-management integrity
- Separate remediation branch; no push to `main`.
- PR #5 and PR #6 remain open/draft/unmerged.
- No Vercel production deployment, promotion, env-var/domain change or production content change.
- PR #6's unique advanced-elective architecture document is integrated; both electives remain proposed and unvalidated.

## Remediation completed on this branch
| Area | Correction | Verification | Status |
|---|---|---|---|
| T07-CH06 | Mapped Retail Audience / First-Party Data guide to CH06 | Immutable chapter ID and register check | FIXED — source mapping |
| T07-CH07 | Authored Product Feed / Digital Shelf / Retail Readiness guide | Source guide and document sync | FIXED — SME review OPEN |
| T07-CH08 | Retained Campaign Activation and merged in-store controls (inventory, store ops, proof-of-play, uptime, measurement) | Old in-store content retained in updated CH08 guide | FIXED — SME review OPEN |
| Evidence register | Re-extracted 149 role-specific guide entries and 600 glossary term-definition pairs | 169 unique chapter headings; zero literal undefined tokens | FIXED — extraction only |
| Rubric draft | Synced T07-CH06/07/08 learning outcomes, artifacts and Q&A answer-review entries | Chapter blocks cross-checked | FIXED — answer approval OPEN |
| T07 resource map | Corrected audience, feed and activation source mapping | Official publisher/title/scope checked | PARTIAL — account/market access conditional |
| Static QA | Corrected @media count to 19 (14 width, 2 reduced-motion, 3 print) | Source count | FIXED — static only |
| Legacy declaration | Removed orphan `CONNECTION_GUIDES` declaration from ID-based branch | No references remain; ID map retained | FIXED — source-level check |
| T16-CH12 | Marked old correction supplement superseded, preserving audit history | Active register/rubric are current | FIXED — governance |
| Amazon credential register | Updated free/80%/24-hour retake/two-year validity and separated general FAQ duration from exam-specific timers | Current official Academy FAQ/assessment pages | FIXED — issuer facts; local account check pending |
| Source of Truth | Added structured normative document; TXT retained as historical archive | Crosswalk/README references updated | FIXED — documentation governance |
| Agency evidence | Reconciled 80-cell class labels after Havas requisition review | 80 unique cells; A37/B20/D37/G5; 19 compound labels; 4 pure G + 1 B/G | PARTIAL — source/JD/competency validation remains open |
| Canonical chapter inventory | Added 169 unique chapter IDs extracted from HTML | Score-recalculation script compares input IDs against the canonical inventory by default | FIXED — structural baseline only |
| TikTok certification facts | Added 7-day retake interval and six-month recertification eligibility window | Current TikTok Academy FAQ and recertification guidance | FIXED — issuer facts; exam registration/account access remains conditional |
| Static validator | Extended checks to the 80-cell agency matrix and 10 elective evidence groups | Script source contains expected structural/class assertions; it has not been executed in a local Node checkout | PENDING EXECUTION — do not treat script presence as a PASS |

## Agency evidence status — PARTIAL
The reconciled 80-cell matrix contains A 37, B 20, C 0, D 37, E 0 and G 5 class-label instances, with 19 compound cells (99 total label instances across 80 unique cells). Five cells retain a G marker: T09/Dentsu; T14/Havas (B/G sister-practice only, no direct HMN role); T15/Omnicom; T15/Havas; T16/Havas. T05/Havas is now direct Paid Social evidence (JR0096922, Warsaw, 2+ years); T11/Havas is now direct Organic & AI Manager evidence (JR0099039, Sydney, 4+ years, manager-level). Neither should be generalized to entry-level or Indonesia-market roles. JR0096564 is historical DMPG evidence, JR0093003 is Havas Paris Social sister-practice evidence, and JR0093690 is Havas Play evidence with unresolved start-date metadata. Cell coverage is complete; competency-level verification of every source is not.

## Score recalculation — BLOCKED
Seven raw dimensions (0–4) are required for each of 169 chapters. The complete raw-vector matrix was not found in the inspected repository tree or accessible Library files. The AutoClaw execution transcript reports that 40 scores were recalculated locally, but its files/commit were not retrievable in this repository. This branch does not claim a full 169-score recalculation.

A deterministic script is provided at `scripts/recalculate-chapter-audit-scores.py`. It requires `chapter_id`, `track_id`, and `dim_1..dim_7`; it rejects missing, duplicate, out-of-range or invalid vectors and never imputes. Full scorecard reconciliation remains BLOCKED pending the authoritative raw matrix.

## Canonical chapter ID inventory
`docs/169-core-chapter-ids.txt` contains 169 unique IDs extracted from `index.html`. The score script now defaults to this file for set comparison and rejects missing/extra IDs, malformed IDs, track-ID mismatch, non-integer or out-of-range raw scores, missing dimensions and duplicate rows. The raw seven-dimension matrix remains unavailable, so recalculation itself is still BLOCKED.

## Issue/discrepancy register boundary
The complete report, 23-row issue register, 12-row discrepancy log, raw 169-chapter score matrix, raw 90-cell CSV and 32 detailed chapter evidence packs were not found in the connected repository tree or accessible Library sources during this pass. Previously reviewed themes include stale summary totals, scoring arithmetic, resource-map coverage vs fit, 90-cell evidence classification, T16-CH12 stale language, DPA-007 main-vs-branch distinction, DPA-013 media-query count, and DPA-023 agency taxonomy caveats. The complete 23 findings and D-1…D-12 remain **PENDING RECONCILIATION**; none are silently marked closed.

## Sources checked
- Google Merchant Center product data: https://support.google.com/merchants/answer/7052112
- TikTok Catalog product parameters (market/account-conditional): https://ads.tiktok.com/resources/help/article/catalog-product-parameters
- TikTok Catalog help (Indonesian): https://ads.tiktok.com/resources/help/article/create-manage-catalogs?lang=id
- Lazada category/product creation guide: https://lazada-sellercenter.readme.io/docs/guide-for-creating-products
- Lazada CreateProduct API: https://lazada-sellercenter.readme.io/docs/createproduct
- Amazon Ads audience help: https://advertising.amazon.com/help/GKSQZKMHW95GJDB7
- IAB retail media advanced measurement/data collaboration: https://www.iab.com/guidelines/retail-media-advanced-measurement-and-data-collaboration/
- IAB/MRC Retail Media Measurement Guidelines: https://www.iab.com/wp-content/uploads/2024/01/IAB_Retail_Media_Measurement_Guidelines_January2024.pdf
- Amazon Ads Academy FAQ: https://advertising.amazon.com/academy/help

## Additional reconciled quality indicators
- 149 role-specific guide objects were reparsed. Short-content triage now records 122 answers under 12 words across 79 chapters and 81 glossary definitions under 5 words across 58 chapters (HTML tags/entities stripped; whitespace token count). These are review flags, not automatic defects. The 20 legacy guides remain separate.
- 169 evidence-register chapters, 169 rubric chapters, 169 glossary blocks, 507 register Q&A entries and 507 rubric Q&A entries are structurally aligned. All answer correctness and rubric calibration remain OPEN.
- Static source checks recorded 169 HTML IDs, 169 guide mappings, 169 register chapters, 169 rubric chapters, 169 resource rows and 169 technical-review rows; 169 glossary blocks; 507 Q&A entries in register and rubric; 19 CSS media queries; 391 DOM IDs; 13 internal anchors with no unresolved target. The agency matrix contains 80 cells (A37/B20/D37/G5; 19 compounds) and the elective matrix contains 10 agency × elective rows. These figures were independently recounted from repository source via API; the added Node validator itself has not yet been run. This is static verification only; no browser/runtime claim.

## Open gates
1. Recalculate all 169 chapter scores from authoritative raw vectors and reconcile all totals.
2. Recover/disposition all 23 issue rows and D-1…D-12.
3. Audit all 90 role-evidence cells at source/JD level.
4. Complete the 169-chapter objective-level source review and Indonesia access/language/price/credential checks; provisional 16-track desk results are documented in docs/169-chapter-resource-fit-review.md.
5. Complete independent SME review for 169 chapters and legacy guide families.
6. Validate all 507 answer keys and alternate answers; calibrate rubrics.
7. Validate the 28 full elective first-pass drafts (14 CRO + 14 Traditional Media) against direct/adjacent JDs, chapter-level sources, Indonesian market/legal practice, SME review, assessment calibration and learner pilot before calling them final.
8. Run authenticated browser/runtime interaction QA. Preview build and HTTP/asset smoke checks now pass for `f9def1a8c6a8b22568b38bd83c7c1086765418fb`; UI behavior, persistence, keyboard and accessibility checks remain NOT RUN.
9. Re-read all changed files and run final static checks on the exact final SHA.

**Release decision: NOT READY — source-level remediation is partly implemented; multiple gates remain open or blocked.**


## Final branch, CI and runtime checkpoint — 5 November 2026

- Current `main` head: `640b1924a6b200fac83df1dcac1ddd1e8b9ea61d`.
- Main's latest history was reconciled into the remediation branch via branch-only merge commit `85a69f5544c1cdf920576b3ceb236431303f568d`. Its first parent is the previous remediation head `cd61a5f94bd50549022c5e5f046b07bdf375d265`; its second parent is the unchanged `main` head. The remediation tree was retained; updated crosswalk/elective documents are kept instead of the older main-side wording.
- The current remediation branch has **zero commits behind main**. The exact current branch head and ahead count are verified in the final handoff.
- PR #5 and PR #6 remain open, draft, unmerged and not mergeable. No merge into `main`, no production deployment, promotion, environment-variable/domain change, or production content change was performed.
- The earlier branch build-rate-limit status was superseded: source commit `f9def1a8c6a8b22568b38bd83c7c1086765418fb` now has GitHub combined status **SUCCESS** and Vercel deployment `dpl_C4wNhiKsG8DA9hL3y725HqXDdhky` **READY**. The exact preview URL returned HTTP 200; all eight referenced local JavaScript assets also returned HTTP 200. This is HTTP/asset smoke verification, not interactive browser QA. The push-workflow run remains not independently verifiable through the available connector.
- The branch-only push workflow has been added; its run result is not independently retrievable through the current connector, whose workflow-run listing exposes PR-triggered runs only.
- Authenticated browser/runtime QA: NOT RUN. No desktop/mobile interactions, screenshots, console/network, accessibility-tree or cross-browser checks are claimed.

**Release decision stays NOT READY.** The branch is a remediation working candidate, not a merged or production-ready release.

## Branch-only CI workflow — 5 November 2026

Added `.github/workflows/dpa-remediation-static-qa.yml` on the remediation branch only. It is configured for pushes to this branch and manual dispatch; it runs the deterministic Node static validator, compiles the Python score script, and runs a temporary 169-row SYNTHETIC-vector self-test against the canonical chapter ID inventory. The synthetic outputs are isolated under `/tmp` on the runner and are not audit scores.

**Execution visibility:** the available GitHub workflow-run listing connector only returns PR-triggered runs. The new workflow is push-triggered; therefore its actual run result is **NOT INDEPENDENTLY VERIFIED** in this session. Do not claim CI PASS until a run ID/job result is available from GitHub Actions UI or a run-aware endpoint.


## 2026-11-05 resource-source and preview execution delta

- **Resource map patch:** commit `f9def1a8c6a8b22568b38bd83c7c1086765418fb` corrected publisher captions and URLs across T01, T02, T03, T05, T06, T07, T08, T09, T10, T12, T13, T14 and T15. In particular, the TikTok Academy URL is no longer called LinkedIn Marketing Academy; the Edge Academy URL is no longer called Google Skillshop; StackAdapt is no longer mislabeled IAB; and YouTube's current Creator Partnerships help page is separately linked from TikTok One for Creators.
- **Source-fetch evidence:** the current map contains 169 rows, 169 unique chapter IDs, 39 unique URLs, and at least two links per chapter row. Readable content was fetched from all 39 current unique URLs. Publisher identity and broad track-level source coverage are checked. Exact source-to-learning-objective fit for all 169 chapters, Indonesia market access, localized pricing and credential conditions remain OPEN.
- **Source register cross-check:** 169 HTML chapter IDs, 169 guide IDs (10 Full-Stack + 10 Paid Social + 149 role-specific), 169 evidence-register headings, 169 rubric headings, 169 resource IDs and 169 technical-review IDs reconcile with zero duplicate/missing IDs. Register and rubric each contain 507 Q&A items; 169 glossary blocks; no literal `undefined` tokens. 391 unique DOM IDs; 13/13 internal anchors resolve; 19 media queries (14 responsive, two reduced-motion, three print). These are independent source/API recounts; the repository Node validator was not executed locally.
- **Agency/elective structure:** 80 agency evidence cells and 10 agency × elective groups remain structurally present; source/JD/competency sign-off remains PARTIAL/OPEN.
- **Preview:** Vercel deployment `dpl_C4wNhiKsG8DA9hL3y725HqXDdhky` built from the same resource patch SHA and reached READY. HTTP fetch returned 200, with 169 unique chapter IDs and all eight referenced local JavaScript assets returning 200. No authenticated UI session, role click, theme toggle, localStorage round-trip, keyboard, accessibility-tree, screenshot or console/network interaction QA was run.
- **Missing historical artifacts:** the complete raw 169 × 7 score matrix is still absent from the 36-file branch tree and inspected Library sources. The normative methodology specifies a 0–4 scale and averaging formula but does not name/define the seven dimensions; therefore no substitute vectors were invented. PR #5/#6 bodies and available discussion/review metadata did not yield the original 23-finding register or D-1…D-12 log; both remain pending recovery.
- **Release decision:** NOT READY — remediation progress recorded; human/SME, historical-source and authenticated runtime gates are not signed off.


## 2026-11-05 elective, resource-fit and provenance delta

- **Elective content:** 28/28 first-pass full chapter drafts authored in docs/28-advanced-elective-full-chapter-drafts.md (14 CRO + 14 Traditional Media). Structural checks: 28 unique sections; each has outcomes, lesson, workflow, practice, artifact/acceptance, two knowledge checks and a source/limitations block; 56 questions and 84 glossary definitions. Full draft does not mean validated or ready for learners.
- **Architecture sync:** docs/advanced-electives-source-of-truth.md now records Architecture v1.1 + Full Chapter Draft v0.1 and marks 28 chapter drafts complete, with validation pending.
- **Resource map:** 169 chapter rows, 169 unique IDs, 39 unique URLs, minimum two source links per row. All 39 URLs returned readable content at check time. This proves availability and publisher identity, not exact objective fit.
- **Resource-fit decision:** docs/169-chapter-resource-fit-review.md provides a provisional desk assessment of all 16 tracks. T08 has a clear commercial-buying source gap; T02 cultural/communication planning, T03 offline measurement, T07 Indonesia RMN comparison, T10 statistics/experimentation, T13 neutral editorial/organic content and T16 community governance remain partial/gap. The 169 objective-level review remains OPEN.
- **Supplemental findings:** docs/2026-11-05-supplemental-audit-findings.md contains 17 new IDs, separate from the missing historical 23 findings and D-1…D-12. Summary: 3 FIXED, 6 PARTIAL, 6 OPEN, 2 BLOCKED.
- **Raw scores:** audit-inputs/169-chapter-audit-score-input-TEMPLATE.csv is a blank 169-row collection template. Seven dimension definitions and raw scores are not present. The template must not be fed into the calculator and is not a scorecard.
- **Historical search:** all 12 available GitHub branches were enumerated and their trees checked; current PR #5/#6 discussion/review metadata and accessible Library search were inspected. No original raw score matrix or original findings/discrepancy register was recovered.
- **Release decision:** NOT READY — REMEDIATION INCOMPLETE. SME/JD, raw score, historical issue/discrepancy, 169 objective fit, 507 answer-key, rubric calibration, Indonesia market/legal, elective pilot and authenticated browser gates remain open or blocked.
