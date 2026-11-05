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
| Agency evidence | Reconciled 80-cell class labels after five new evidence routes were recovered | 80 unique cells; A37/B22/D42/G0; 21 compound labels; 101 class-label instances | PARTIAL — direct/current JD and chapter-competency validation remains open |
| Canonical chapter inventory | Added 169 unique chapter IDs extracted from HTML | Score-recalculation script compares input IDs against the canonical inventory by default | FIXED — structural baseline only |
| TikTok certification facts | Added 7-day retake interval and six-month recertification eligibility window | Current TikTok Academy FAQ and recertification guidance | FIXED — issuer facts; exam registration/account access remains conditional |
| Static validator | Extended checks to the 80-cell agency matrix and 10 elective evidence groups | GitHub Actions run 41950779127 on SHA 7442ca4 completed SUCCESS; validator output and synthetic self-test logs inspected | PASS — static/source assertions only; no SME/JD content validation |

## Agency evidence status — PARTIAL
The reconciled 80-cell matrix now contains A 37, B 22, C 0, D 42, E 0 and G 0 class-label instances, with 21 compound cells (101 total label instances across 80 unique cells). The five former G-marker cells now have documented evidence routes: T09/Dentsu uses a combined, expired Search & Ad Ops role in New Zealand; T14/Havas uses Havas Paris Social/Havas Play sister-practice creator roles; T15/Omnicom uses official OMD EMEA career-index titles with inaccessible individual requisition detail pages; T15/Havas uses a historical London Affiliate Manager Workday requisition; T16/Havas uses a Havas Paris Social community apprenticeship. These are B/D or D evidence, not direct/current Havas Media Network or Indonesian role proof. T05/Havas remains direct Paid Social evidence (JR0096922, Warsaw, 2+ years); T11/Havas remains direct Organic & AI Manager evidence (JR0099039, Sydney, 4+ years, manager-level). JR0096564 is historical DMPG evidence and JR0093690 is Havas Play evidence with unresolved start-date metadata. Cell coverage is represented; independent competency validation of all 80 sources remains PARTIAL.

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
- Static source checks recorded 169 HTML IDs, 169 guide mappings, 169 evidence-register chapters, 169 rubric chapters, 169 resource rows and 169 technical-review rows; 701 glossary definitions; 507 Q&A entries in each of evidence and rubric registers; 19 CSS media queries; 391 DOM IDs; 13 internal anchors with no unresolved target. The agency matrix contains 80 unique cells (A37/B22/D42/G0; 21 compound labels; 101 class-label instances) and the elective matrix contains 10 agency × elective rows. The latest code-level CI results and synthetic self-tests are recorded separately below. These are static/source checks, not SME/JD review or browser/runtime QA.

## Open gates
1. Recalculate all 169 chapter scores from authoritative raw vectors and reconcile all totals.
2. Recover/disposition all 23 issue rows and D-1…D-12.
3. Independently audit all 80 core agency × track cells and the separate 10 agency × elective mappings at source/JD level; distinguish direct, adjacent, historical and gap evidence.
4. Complete the 169-chapter objective-level source review and Indonesia access/language/price/credential checks; provisional 16-track desk results are documented in docs/169-chapter-resource-fit-review.md.
5. Complete independent SME review for 169 chapters and legacy guide families.
6. Validate all 507 answer keys and alternate answers; calibrate rubrics.
7. Validate the 28 full elective first-pass drafts (14 CRO + 14 Traditional Media) against direct/adjacent JDs, chapter-level sources, Indonesian market/legal practice, SME review, assessment calibration and learner pilot before calling them final.
8. Run authenticated browser/runtime interaction QA. Current-code source SHA `fd5d25cf8fa314ce9ed8b06cb1a5adb50510f5c2` has Vercel deployment `dpl_HdSvAAgybvAvYMPqvF2FUxiJB4kq` READY; HTTP smoke, 169 chapter IDs, 13 anchor targets, and 8/8 local JavaScript assets pass. UI behavior, role interaction, persistence, keyboard and accessibility checks remain NOT RUN.
9. Re-read all changed files and run final static checks on the exact final SHA.

**Release decision: NOT READY — source-level remediation is partly implemented; multiple gates remain open or blocked.**


## Final branch, CI and runtime checkpoint — 5 November 2026

- Current `main` head: `640b1924a6b200fac83df1dcac1ddd1e8b9ea61d`.
- Main's latest history was reconciled into the remediation branch via branch-only merge commit `85a69f5544c1cdf920576b3ceb236431303f568d`. Its first parent is the previous remediation head `cd61a5f94bd50549022c5e5f046b07bdf375d265`; its second parent is the unchanged `main` head. The remediation tree was retained; updated crosswalk/elective documents are kept instead of the older main-side wording.
- The current remediation branch has **zero commits behind main**. The exact current branch head and ahead count are verified in the final handoff.
- PR #5 and PR #6 remain open, draft, unmerged and not mergeable. No merge into `main`, no production deployment, promotion, environment-variable/domain change, or production content change was performed.
- The source/resource code commit `f9def1a8c6a8b22568b38bd83c7c1086765418fb` has Vercel deployment `dpl_C4wNhiKsG8DA9hL3y725HqXDdhky` READY; its preview returned HTTP 200 and all eight referenced local JavaScript assets returned HTTP 200. Separately, GitHub Actions run `41950779127` completed SUCCESS on documentation branch SHA `7442ca481b9e5f786f95db971ac314cef32f9be5`; logs confirm deterministic Node validation, Python compile and a temporary synthetic score self-test. The source code changed after `f9def1a`: three role guide JavaScript files were updated to expand answer guides and glossary definitions. The READY preview on `f9def1a` predates those changes and is not a preview of current code. Vercel on the current branch head remains build-rate-limited; no READY current-code preview is claimed. HTTP smoke at the earlier SHA is not authenticated interactive browser QA.
- The branch-only push workflow is directly verified by run 41955180966 at SHA 42e39b49103c2635d0576b23f92d1529bb07c391; see the successful execution log below.
- Authenticated browser/runtime QA: NOT RUN. No desktop/mobile interactions, screenshots, console/network, accessibility-tree or cross-browser checks are claimed.

**Release decision stays NOT READY.** The branch is a remediation working candidate, not a merged or production-ready release.

## Branch-only CI workflow — 5 November 2026

Added `.github/workflows/dpa-remediation-static-qa.yml` on the remediation branch only. It is configured for pushes to this branch and manual dispatch; it runs the deterministic Node static validator, compiles the Python score script, and runs a temporary 169-row SYNTHETIC-vector self-test against the canonical chapter ID inventory. The synthetic outputs are isolated under `/tmp` on the runner and are not audit scores.

**Execution visibility:** GitHub Actions run [41955180966](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41955180966) for push SHA `42e39b49103c2635d0576b23f92d1529bb07c391` completed SUCCESS. Job “Static structure and score-script self-test” passed the deterministic Node validator with agency counts A37/B22/D42/G0 and 21 compound cells, compiled the Python recalculation script, generated temporary SYNTHETIC vectors and recalculated 169 synthetic chapter outputs / 16 track summaries. Earlier runs 41954852406–41955066664 failed only because the validator still expected the previous agency counts; the expected values were corrected before this successful run. Synthetic files existed only in runner /tmp and are not audit scores. Do not treat this synthetic self-test as raw-data recalculation.


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
- **Supplemental findings:** docs/2026-11-05-supplemental-audit-findings.md contains 17 new IDs, separate from the missing historical 23 findings and D-1…D-12. Final summary: 5 FIXED, 5 PARTIAL, 5 OPEN, 2 BLOCKED.
- **Raw scores:** audit-inputs/169-chapter-audit-score-input-TEMPLATE.csv is a blank 169-row collection template. Seven dimension definitions and raw scores are not present. The template must not be fed into the calculator and is not a scorecard.
- **Historical search:** all 12 available GitHub branches were enumerated and their trees checked; current PR #5/#6 discussion/review metadata and accessible Library search were inspected. No original raw score matrix or original findings/discrepancy register was recovered.
- **Release decision:** NOT READY — REMEDIATION INCOMPLETE. SME/JD, raw score, historical issue/discrepancy, 169 objective fit, 507 answer-key, rubric calibration, Indonesia market/legal, elective pilot and authenticated browser gates remain open or blocked.


## 2026-11-05 CI verification addendum

- Push workflow run: https://github.com/putratryarga/putratryarga-dpa/actions/runs/41950779127
- Subject SHA: 7442ca481b9e5f786f95db971ac314cef32f9be5 — branch head when the run was created; subsequent documentation commits advanced the branch.
- Job: Static structure and score-script self-test — SUCCESS.
- Validator output confirmed 169 HTML IDs, 169 unique guide IDs, 169 evidence chapters, 169 rubric chapters, 169 glossary blocks, 169 resource rows, 169 technical rows and 16 unique track rows.
- Python script compilation succeeded. The pipeline generated 169 temporary SYNTHETIC inputs, recalculated 169 synthetic chapter outputs across 16 synthetic track summaries, and passed assertions. The files were isolated in runner temporary storage and were not committed or used as raw chapter score values.
- Non-blocking warnings: Punycode module deprecation and the runner's Node 20-to-24 action runtime transition. No workflow step failed.
- Documentation commits `e21c30ec69a66babdab79c3837fb3637d442d8bb` and `220404081535c8a72b966d3ae77dee53911006fe` completed workflow runs `41950936135` and `41951028735` with SUCCESS. The agency count validator was then updated; run `41955180966` completed SUCCESS after that correction.


## 2026-11-05 latest confirmed branch-head CI result

- Latest code/validator head confirmed by successful workflow run: `42e39b49103c2635d0576b23f92d1529bb07c391`.
- GitHub Actions run 41951028735: SUCCESS. Job: Static structure and score-script self-test.
- Validator log reports 169 HTML chapter IDs, 169 unique guide IDs, 169 evidence chapters, 169 rubric chapters, 169 glossary blocks, 169 resource rows, 169 technical rows and 16 track rows.
- Score script compiled. Temporary synthetic self-test generated 169 vectors, recalculated 169 synthetic chapter outputs and 16 track summaries, and passed. These are pipeline tests, not the historical raw 169×7 score values.
- Application source did change after `f9def1a` in `role-study-guides-part1.js`, `role-study-guides-part2.js`, and `role-study-guides-part3.js`. The READY preview at f9 therefore does not contain the latest guide content. A preview for current source is not available because of build-rate-limit.
- Vercel current-code deployment is READY on SHA fd5d25c; no production deployment or merge performed.


## 2026-11-05 final cross-source, agency and CI update

- The guide source JS, evidence register and rubric register reconcile across 169 chapters: 507 questions, 507 answer guides, 701 glossary definitions. Exact question, answer and glossary parity is zero-mismatch; zero answers are under 12 words and zero glossary definitions are under five words. This closes content-sync/length triage only. All 507 SME answer-key decisions and scoring calibration remain OPEN.
- The five former agency G markers now carry documented B/D or D evidence with historical/adjacent scope caveats. Current 80-cell labels are A37/B22/D42/G0, 21 compound labels, 101 class-label instances. Direct/current employer JD and competency validation remains PARTIAL.
- The static validator expected counts were updated to match the agency matrix. The earlier CI failures from runs 41954852406–41955066664 were caused by that stale expected-count contract. Run 41955180966 then completed SUCCESS on SHA 42e39b49103c2635d0576b23f92d1529bb07c391.
- Run 41955180966 checked 169 HTML/guide/evidence/rubric/resource/technical entries, 16 tracks, and the revised agency class counts. The Python score script compiled; synthetic 169-row self-test recalculated 169 chapter scores and 16 track summaries. Synthetic values remained runner-temporary and are not audit inputs.
- The guide JS updates are now included in current-code SHA `fd5d25c`, with READY preview deployment `dpl_HdSvAAgyG8DA9hL3y725HqXDdhky`. HTTP/asset smoke is verified; authenticated browser interaction, persistence, keyboard and accessibility QA remain NOT RUN.
- Release status remains **NOT READY — REMEDIATION INCOMPLETE**. Raw score vectors, original 23 findings and D-1…D-12, objective-level resource sign-off, SME/JD validation, market/legal review, learner pilot and current-code browser QA remain open or blocked.


## 2026-11-05 current-code Vercel preview verification

- Deployment: `dpl_HdSvAAgyG8DA9hL3y725HqXDdhky`, state READY, exact Git source SHA `fd5d25cf8fa314ce9ed8b06cb1a5adb50510f5c2`, branch `audit/full-dpa-remediation-2026-11-05`.
- Preview alias: https://putratryarga-dpa-git-audit-full-dpa-remediation-2-89524c-elric3.vercel.app/
- HTML fetch: HTTP 200; page title correct; 169 unique chapter IDs; 13 internal anchor targets.
- Local JS assets: 8/8 HTTP 200 — fullstack-guides.js, paid-social-guides.js, role-study-guides-part1.js, role-study-guides-part2.js, role-study-guides-part3.js, chapter-guide-map.js, fullstack-master-roadmap.js, fullstack-master-renderer.js. The external Vercel feedback script is not included in the application asset count.
- Content probes in each of the three updated role-study JS bundles confirm the expanded answer/glossary text is present in the current preview.
- GitHub Actions run [41955517513](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41955517513) completed SUCCESS on the same source SHA fd5d25c.
- These are deployment metadata, HTTP and asset checks. No authenticated interactive browser session, real role-selector click, localStorage persistence round-trip, theme toggle, keyboard traversal, accessibility-tree or cross-browser visual QA was executed.
- Production was not deployed; main remains unchanged. Release status remains **NOT READY — REMEDIATION INCOMPLETE** due to historical input, SME, objective-fit, learner pilot and interactive QA blockers.


## 2026-11-05 final branch and release checkpoint

- Latest branch head: `b418d81483628d08e197aa54fdd2c10cc9390305`; CI run [41956411335](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41956411335) completed SUCCESS on that exact SHA.
- The latest CI log rechecked 169 HTML/guide/evidence/rubric/resource/technical entries, 16 track rows, agency class labels A37/B22/D42/G0 with 21 compound cells, Python script compilation and the temporary synthetic 169×7 score calculator test across 169 chapters / 16 track summaries. Synthetic values are not raw audit inputs.
- Application source SHA `fd5d25cf8fa314ce9ed8b06cb1a5adb50510f5c2` is deployed READY as `dpl_HdSvAAgybvAvYMPqvF2FUxiJB4kq`. HTTP/asset smoke passed: 169 unique chapter IDs, 13 anchors, 8/8 local JS assets, and updated text probes in the three modified role-guide JS files.
- The two commits after the current-code deployment only update QA/ledger/supplemental documentation; no HTML/JS/CSS application files changed after `fd5d25c`.
- Main remains at `640b1924a6b200fac83df1dcac1ddd1e8b9ea61d`; remediation branch is 181 commits ahead and zero behind. PR #5 and PR #6 remain open/unmerged. No production deployment or merge was performed.
- Release decision remains **NOT READY — REMEDIATION INCOMPLETE** due to missing historical 169×7 raw values and original 23 findings/D-1…D-12, open SME/JD and objective-level source-fit validation, Indonesia market/legal review, learner pilot and authenticated browser interaction QA.


## 2026-11-05 continuation checkpoint — validator, source-map and provenance reconciliation

This section supersedes earlier entries in this ledger that described `b418d814...` as the latest branch head. Historical entries above are retained as an audit trail; use the exact SHA/run/deployment values below for the continuation checkpoint.

### Git and change-control state

- Repository: `putratryarga/putratryarga-dpa`.
- Working branch: `audit/full-dpa-remediation-2026-11-05`.
- Main head at the last reconciliation: `640b1924a6b200fac83df1dcac1ddd1e8b9ea61d`.
- Before the final documentation refresh, branch source/validator SHA `53a383b824024e30d5bd5697308f8edb5124ba0e` was 195 commits ahead of main and zero behind. The QA-document update that followed is a documentation-only commit; re-check exact branch head and ahead/behind before any future handoff.
- PR #5 and PR #6 remain open, draft and unmerged. Neither PR was merged, and main was not changed by this continuation.
- No production deployment, alias promotion, environment-variable/domain change or production content operation was performed.

### New repository-side controls completed

1. **Canonical inventory guard:** `scripts/validate-dpa-static.js` now compares the canonical 169-ID inventory against the HTML set; exact set, count and uniqueness are required.
2. **Score-template safety guard:** the validator checks the 169-row nine-column collection template, verifies all IDs and track IDs, and rejects any populated score dimension. All seven score cells remain intentionally blank.
3. **Resource-link guard:** the validator checks 169 chapter resource rows, exact chapter-ID mapping, 47 distinct source URLs, and at least two distinct URLs on every chapter row. The measured minimum is two.
4. **Workflow proof:** run [41959560674](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41959560674) completed SUCCESS on exact SHA `53a383b824024e30d5bd5697308f8edb5124ba0e`. Logs show 169 canonical IDs, 169 score-template rows, 169 resource rows, 47 unique resource URLs, minimum two unique source URLs per chapter, zero validator failures, and overall PASS. Python compilation and the temporary synthetic 169-chapter / 16-track calculator test also passed. Synthetic scores are CI test data only, not audit evidence.
5. **Failure provenance:** run `41958798255` failed on the first malformed newline parser and was corrected before run `41958824709` passed. Run `41959549781` failed because the OASIS source increased unique URLs to 47 before the expected validator count was updated; synchronized run `41959560674` passed. These failure records are retained, not hidden.
6. **Resource-map enrichment:** the map now has 169 rows / 169 unique chapter IDs / 47 unique URLs / at least two distinct source URLs per row. Targeted additions cover T02, T03, T07, T08, T10, T13 and T16. See the resource-fit review second-pass addenda for source scope and access caveats.
7. **T02 addition:** UK Government GovS 011 (OASIS campaign lifecycle) is mapped to selected T02 chapters as a cross-government planning/governance framework. It is not Indonesian law or an Indonesian commercial-agency SOP. T02 remains PARTIAL.

### What the new QA does and does not prove

- The CI PASS proves deterministic source-structure assertions, input-template emptiness, resource-link count/set checks, Python compilation and a synthetic calculator code-path test.
- It does not prove that any new source is a direct fit for every chapter learning objective, nor that every URL is accessible to every Indonesian learner, that a certification/exam is available or free, or that market/legal claims are correct.
- The source-fit review remains a provisional desk assessment; all 169 objective-level source-fit decisions remain OPEN.
- The 47-URL map inventory includes two newly added source pointers that require manual access confirmation (The Jakarta Post returned HTTP 403 and YouTube Help returned HTTP 429 in automated retrieval). Do not claim 47/47 direct fetchability.
- Nielsen references are provider- and product-specific, dated TV/video measurement context; they do not establish a universal cross-media currency or radio/OOH measurement.
- Shopee Advertising Policy provides Indonesia platform terms, not a full multi-marketplace feature/fee/measurement comparison.
- OpenIntro supplies statistics foundations, not a complete marketing experiment / causal-inference / econometrics path.
- Kumparan's Cyber Media Guidelines are one local publisher's implementation; YouTube moderation controls are platform-specific, not a complete cross-platform community governance system.
- The Jakarta Post pointer is one publisher's commercial terms page, not an agency buying SOP, complete IO pack or legal/procurement-reviewed model.

### Remaining gates — not closed

1. **HIST-001 — BLOCKED:** authoritative 169 × 7 raw score values and versioned definitions/anchors for all seven dimensions remain unavailable. Do not populate the template from inference, rubric dimensions or synthetic vectors.
2. **HIST-002 — BLOCKED:** the original 23 findings and D-1…D-12 discrepancy records remain unrecovered. The 17-row supplemental findings register is separate and is not a replacement.
3. **Resource / objective fit — OPEN:** 169 exact objectives need exact module-level source mapping, access/language/price checks and independent reviewer disposition.
4. **SME assessment — OPEN:** all 507 Q&A answer keys/alternatives and 169 assessment rubrics need subject-matter review and calibration.
5. **Agency JDs — PARTIAL:** all 80 cells have a recorded evidence route, but source-specific currentness, geography, seniority, full role scope and chapter competency need independent validation; do not equate B/D evidence with a direct/current vacancy.
6. **Indonesia market/legal/procurement — OPEN:** complete local offline-media measurement, commercial rate cards/IOs, media-owner negotiation, marketplace comparisons, consent/privacy and platform rights/fees with authorized review.
7. **Electives / learner validation — OPEN:** 28 full first-pass drafts exist (14 CRO + 14 Traditional Media) but still need direct/adjacent JD mapping, chapter-resource fit, SME review, assessment calibration and learner pilot.
8. **RUNTIME-001 — OPEN:** authenticated desktop/mobile interaction QA remains NOT RUN: role switching, persistence, keyboard/focus, theme controls, accessibility tree, screenshot/visual regression and cross-browser checks.
9. **Exact-head validation at this checkpoint — PASS:** GitHub Actions run [41959680439](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41959680439) completed SUCCESS on exact head SHA `8392e86fe3b373c4e1e8e0b1263281b4781a8a96` after the ledger documentation update. Its log confirms 169 canonical IDs, 169 blank score-template rows, 169 resource rows, 47 unique URLs, a two-source minimum, `failures=[]`, and `status=PASS`; Python compilation and the temporary synthetic score self-test also passed. The present ledger status correction is documentation-only and triggers a fresh branch workflow.

**Release decision: NOT READY — REMEDIATION INCOMPLETE.** Source and automated QA coverage improved; historical inputs, external review, market/legal validation, learner validation and authenticated browser evidence remain open or blocked.


## 2026-11-05 final T02 source delta and synchronized 48-URL check

- T02 received the official [ICC/ESOMAR 2025 research and data analytics Code](https://iccwbo.org/news-publications/business-solutions/iccesomar-international-code-market-opinion-social-research-data-analytics/) on DPA-T02-CH01, CH02, CH03 and CH10. It adds research-ethics and data-subject protection principles; it does not close cultural insight, qualitative research or communication-theory coverage. T02 remains PARTIAL.
- Resource map integrity is now **169 chapter rows / 169 unique chapter IDs / 48 unique URLs / minimum two distinct source URLs per chapter**. No chapter has fewer than two unique URL references.
- The static validator expected inventory is 48 URLs. Exact-head run [41959929523](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41959929523) passed on SHA `3813e4d7aa7894e4668d5c20f843d731c302733d`. Logs show 169 canonical rows, 169 blank score-template rows, 169 resource rows, 48 unique URLs, minimum two source URLs, zero failures and PASS. Python compilation and the temporary synthetic 169-chapter / 16-track calculator test passed; the synthetic values remain test-only.
- Two intermediate failures (runs `41959904693` and `41959919727`) were caused by committing the map addition before changing the validator's expected count from 47 to 48. The synchronized follow-up passed; the failures are retained in the CI history.
- The latest QA and supplemental-findings documentation now records this delta. Re-run the workflow on the final documentation head before using it as the next checkpoint. The 48-URL inventory is not 169 objective-fit approvals and does not change the 5 FIXED / 5 PARTIAL / 5 OPEN / 2 BLOCKED supplemental-finding totals.


## 2026-11-05 P0 requirements traceability register

- Created [Requirements Traceability & Acceptance Register](requirements-traceability-acceptance-register.md) in remediation branch commit `72d9cafa7bba8ef011b811bc990fc0c391386482`.
- The register formalizes the current scope as **18 pathways = 16 Core Specialist Tracks + Electives 17 and 18**. It keeps the shared Common Foundation CF1–CF6 separate from pathway counts, the 169 core specialist chapter IDs separate from the 28 elective drafts, and the two electives outside the 169-core count.
- It defines requirement IDs, objective acceptance criteria, status vocabulary, verification classes A–F, evidence expectations, dependencies and P0/P1/P2 stop/go gates.
- Re-searched the Library for a standalone original AutoClaw Master Prompt. The inspected search results surfaced the historical `16 track.txt` archive and `converted (1).md` V3/V4 roadmap, but no standalone verbatim prompt file. The literal prompt-to-requirement reconciliation is therefore recorded as `SCP-001 — BLOCKED`; the recovered archives are not represented as a verbatim prompt.
- The original 169 × 7 raw score vectors / dimension definitions and the original 23 findings / D-1…D-12 discrepancy records remain separately recorded as `HIST-001` and `HIST-002 — BLOCKED`. The 17 supplemental findings do not replace the historical artifacts.
- External implementation references were checked against the current publisher pages: W3C WCAG 2.2 overview; 1EdTech QTI 3.0 specification documents; and Playwright actionability/retrying assertions. WCAG 2.2 AA is a proposed accessibility target; QTI 3.0 remains an optional portability design decision, not a claim of conformance.
- This documentation update does not modify application code, merge PRs, deploy preview/production, populate audit-score inputs or approve question answer keys. Release status remains **NOT READY — REMEDIATION INCOMPLETE**.


## 2026-11-05 P1 T08 simulation and source cross-check

- Added `docs/T08-direct-publisher-buying-simulation.md` as a Tier 3 practice pack for DPA-T08-CH01–CH10. All publisher names, proposals, rates, volumes, dates, financial outcomes and campaign data in the exercise are explicitly synthetic. The pack is not a real publisher rate card, client result, signed IO, legal form or tax opinion.
- Updated all ten T08 rows in `docs/169-chapter-resource-mapping.md` to point learners to the same Tier 3 practice artifact. The chapter resource register still has 169 core rows / 169 unique chapter IDs / 48 unique primary-source URLs; the practice-pack file reference does not inflate the external source URL count.
- Corrected the T08 role boundary in `role-study-guides-part1.js` and synced `docs/169-chapter-evidence-register.md`: direct IO/sponsorship/reserved publisher inventory is distinguished from DSP setup, auction execution and bid optimization. PMP/PG may involve publisher commercial negotiation but DSP execution should coordinate with T06. Replaced a radio-spot CH07 scenario (traditional-media overlap) with a digital publisher display-impression shortfall scenario.
- Corrected the resource-fit review's stale topline: current inventory is 48 unique URLs, not the earlier 39-URL historical snapshot. The latest direct automated retrieval record remains 46/48 readable, with The Jakarta Post page blocked on direct open (403) and YouTube Help rate-limited (429); the indexed Jakarta Post content is a source lead, not confirmed learner access. The 169-objective source-fit decision remains OPEN.
- Source cross-check: [The Jakarta Post publisher advertising terms](https://www.thejakartapost.com/content-funding-classifications) describe reservation/Booking Order, media-kit/rate-card and payment provisions, but direct web open returned HTTP 403 and its page displays a 10% VAT note. [DJP's official PMK 131/2024 explanation](https://pajak.go.id/id/siaran-pers/ppn-2025-kebijakan-baru-beban-pajak-tetap-ringan-untuk-masyarakat) describes 12% × 11/12 DPP for non-luxury taxable goods/services (effective 11% for most supplies). The publisher-page 10% note must not be copied into a current budget without finance/tax confirmation of the actual advertising transaction.
- [IAB / 4A's Internet Advertising Terms v3.0](https://www.iab.com/wp-content/uploads/2015/06/IAB_4As-tsandcs-FINAL.pdf) was checked as a limited IO reference. Its own scope notes say it does not cover direct advertiser buys with publishers or fully cover sponsorship/content integration; it is US-oriented and is not Indonesian contract/legal guidance.
- Independent arithmetic check of the synthetic pack passed: A/B contracted CPM Rp12,000/Rp14,000; bonus-adjusted illustrative CPM Rp10,285.71/Rp13,263.16; A+B contracted/blended CPM Rp12,857.14; A+B bonus-adjusted illustrative CPM Rp11,489.36; A+B+C total Rp153,000,000, Rp3,000,000 over the Rp150,000,000 cap; A/B shortfall values Rp8,640,000/Rp7,000,000, combined Rp15,640,000. These are estimated media values only, not automatic credits/refunds.
- T08 practice coverage is PARTIALLY ENHANCED. Direct/current Indonesian publisher commercial sources, agency SOPs, complete IO/contract pack, current tax/legal/procurement review, SME review of ten T08 chapters, 30 T08 static Q&A answer keys and relevant rubrics remain OPEN. No chapter was marked VALIDATED from this simulation.
- Release remains **NOT READY — REMEDIATION INCOMPLETE**. No production merge or deploy was made.


## 2026-11-05 P2 quiz engine design

- Created `docs/quiz-engine-technical-design.md` as a design-only P2 artifact. It is linked from README, Source of Truth and the Requirements Traceability & Acceptance Register.
- Existing UI/source inspection confirms the current guide renderer displays `guide.checks` as reflective question/answer disclosures. The source Q&A shape is `{ q, a }`; it lacks item IDs, options/distractors, answer-key review state, objective linkage, scoring rules and submission attempts. The visible UI copy states that the interactive chapter quiz bank is still in development.
- The design keeps content approval separate from engineering, preserves canonical chapter IDs, specifies private answer-key separation, formative vs summative trust boundaries, accessible interaction, state machine, deterministic scoring, review lifecycle, tests and rollout gates.
- The design does not promote any of the 507 static Q&A items to scored questions. A local browser-only version is formative only; authoritative grading requires server-side key isolation and an approved security/privacy/data-retention model. The 80% threshold remains uncalibrated.
- Exact-head CI run [41963881863](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41963881863) completed SUCCESS on SHA `dfecd41a165f8ba320a0fbdacb2b05f15c9c125b`. This included the T08 validation guards, 16+2 pathway checks, existing 169-row structural tests, Python score-script compilation and synthetic calculator self-test. It did not test a deployed quiz engine, because none was implemented.
- The run history retained failures from earlier T08 validation attempts; they were traced to validator checking a strict uppercase contiguous `SYNTHETIC, ...` phrase while the document used bold markup around the word. The assertion was changed to case-insensitive semantic checks and the subsequent exact-head run passed. No acceptance check was removed.
- This remains a design milestone only. Implementation scaffold, item approval, accessibility/runtime tests and content/SME validation remain open.


## 13. Certificate issuance and verification feature

**Date:** 5 November 2026  
**Disposition:** SPECIFICATION COMMITTED; IMPLEMENTATION NOT STARTED; LIVE ISSUANCE NOT AUTHORIZED.

- Added [DPA Certificate Issuance & Verification](certificate-issuance-verification-spec.md) as a product/technical design baseline.
- Defined three distinct DPA-owned credential types: participation, completion and track achievement. The specification explicitly prohibits implying BNSP/LSP, government accreditation or third-party platform endorsement without separately evidenced authorization.
- Defined eligibility gates, server-side issuer authorization, unique credential IDs, auditable issue/reissue/revocation states, minimal public verification, PDF/QR requirements, privacy/security controls and phased rollout.
- Added CERT-001–CERT-008 to the Requirements Traceability & Acceptance Register and linked the feature from the README and Source of Truth.
- No runtime feature, backend, credential registry, admin workflow, verification page or certificate PDF generator was implemented in this change.
- Dependencies remain open: approved issuer identity and policy; assessment item bank and calibrated rubrics/threshold; SME/content approval; backend/authentication/database; privacy/security review; learner pilot.
- Current DPA site is static. localStorage/browser-only generation is explicitly not an authoritative issuance mechanism.

**Verification boundary:** documentation presence and cross-document references only. Feature implementation, security, browser/runtime behavior and issuance remain OPEN. Release decision remains NOT READY.


## 14. P2 formative quiz scaffold

**Date:** 5 November 2026  
**Disposition:** ISOLATED FORMATIVE SCAFFOLD IMPLEMENTED; CONTENT APPROVAL, MAIN-APP INTEGRATION AND BROWSER QA OPEN.

### Delivered
- `scripts/dpa-quiz-engine.js`: reusable browser/Node core; validates canonical chapter/item identifiers, item version, option integrity, answer-key linkage and synthetic-fixture marker. Supports READY, IN_PROGRESS, SCORED and REVIEWED flow, unanswered guard, deterministic points, rationale, retry and in-memory attempt history.
- `scripts/dpa-quiz-synthetic-fixtures.js`: three synthetic T10 examples on event/session grain, confidence-interval interpretation and incrementality design. The fixtures are marked NOT_APPROVED_TEST_ONLY.
- `quiz-engine-prototype.html` + `scripts/dpa-quiz-sandbox.js`: separate accessible sandbox with native fieldsets/radio inputs, keyboard interaction, progress, validation, score summary, rationale review and retry.
- `scripts/test-dpa-quiz-engine.js`: Node built-in assertion suite for valid and empty state, blocked scored mode, schema errors, duplicate IDs, wrong option and key-version errors, unanswered submission, calculation, feedback, review/retry and snapshot isolation.
- `.github/workflows/dpa-quiz-engine-qa.yml`: dedicated Node 20 CI workflow; does not require a package manager or new external dependency.

### Deliberate limits
- The prototype has no learner account, network submission, localStorage/sessionStorage write, progress mutation or certificate integration.
- Answer keys are shipped only because these are explicitly synthetic test fixtures. Real approved answer keys must remain server-side for summative assessment.
- The prototype is standalone, not injected into the main chapter renderer. It must not be called a production quiz or a secure exam.
- None of the 507 reflective Q&A items were auto-converted or treated as SME-approved scored questions.
- No passing score or 80% threshold is represented as calibrated.

### Verification
Source checks and deterministic tests are present; workflow result and authenticated browser/accessibility evidence must be attached to the exact commit before closing the corresponding gates.

**Register effect:** QUIZ-001 moves from OPEN to PARTIAL. QUIZ-002, QUIZ-003, QUIZ-004, the 507 item review, 169 rubric calibration and certificate eligibility remain OPEN/BLOCKED as recorded in the acceptance register. Overall release stays NOT READY.


## 15. P1 granular review registers and priority source remediation

**Date:** 5 November 2026  
**Disposition:** CONTROL REGISTERS CREATED; HUMAN/SME REVIEW DECISIONS REMAIN OPEN.

### Inventory delivered
- `docs/507-qna-editorial-sme-review-register.csv`: 507 stable chapter-linked Q&A records, preserving current guide answer text and explicitly marking each as reflective/not scored; editorial and SME statuses OPEN.
- `docs/169-objective-resource-fit-register.csv`: 169 core chapter/objective rows synchronized to the latest resource map; all objective-fit, Indonesia access, language/cost/eligibility statuses OPEN.
- `docs/80-agency-role-cell-validation-register.csv`: 80 separate agency × track cells with inherited evidence-class labels/statements and individual direct-JD, specificity, currentness, geography/seniority and competency validation fields OPEN.
- `docs/28-advanced-elective-validation-register.csv`: 28 elective chapter rows with learning outcomes, lesson/workflow/practice/artifact extracts and independent validation statuses OPEN.
- `docs/56-elective-knowledge-check-review-register.csv`: 56 separate elective knowledge-check records (two per elective chapter); editorial, SME and source statuses OPEN.
- `docs/2026-11-05-priority-track-source-remediation.md`: documented six-source enrichment and caveats for T03, T07, T10, T13 and T16; T02 gaps remain documented against its existing GovS 011 and ICC/ESOMAR source mix.

### Resource enrichment
- Added six unique source URLs to 21 chapter-resource rows; the resource map now has 169 rows and 67 unique URLs.
- Added exact MRC OOH standards PDF for T03; IAB/MRC Retail Media Measurement Guidelines PDF and IAB Europe V2.1 article for T07; SQLBolt + Hernán/Robins *What If* for T10; W3C WCAG 2.2 for T13; and NSW Government community-management guidance for T16.
- These additions are not Indonesian local market evidence or blanket source-fit approval. Objective-to-resource fit remains OPEN for 169/169 chapters. SQLBolt and IAB Europe direct access were not confirmed in this manual check; their search-index evidence is recorded separately.
- The prior 46/48 automated retrieval result remains a historical snapshot before the six URL additions and is not represented as current 46/54 or 54/54 coverage.

### Static controls and CI
- Extended `scripts/validate-dpa-static.js` to check 507, 169, 80, 28 and 56 register row counts and all six newly mapped source URLs; updated expected unique source count to 54.
- Corrected newline splitting in CSV row-count validation.
- Quiz-engine automated workflow passed on SHA `ddfac599440800c9d329fe97d6ddf88e9c054023` (run [41967997038](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41967997038)); static remediation QA also passed on the same SHA (run [41967996999](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41967996999)). Subsequent source/register/validator changes trigger new exact-head runs; their result must be separately recorded.

**Limit:** these artifacts enable controlled review batches. They do not recover the missing original prompt, historical score matrix or original 23/D-1…D-12 issue log; they do not provide SME/JD/browser-session inputs.


## 16. 169-core chapter depth screening

**Date:** 5 November 2026  
**Disposition:** STRUCTURAL SCREEN PASS; SUBSTANTIVE CONTENT VALIDATION OPEN.

- Added docs/169-chapter-depth-screening.csv with one row for each of the 169 canonical core chapter IDs and scripts/audit-dpa-chapter-depth.js for reproducible re-checking.
- All 169 chapters passed the stated structural heuristics: minimum objective 362 characters, simulated example 176, workflow 367 characters and four steps, practice/deliverable 133, glossary four terms, Q&A three and mapped resources two.
- The 507 Q&A question texts had zero exact duplicates after case/punctuation/whitespace normalization. This does not detect conceptual near-duplicates or validate answer correctness.
- Static CI now runs the depth-screen script and validates the 169-row CSV snapshot.
- No score or chapter-validation status is inferred from text length/field presence. Technical accuracy, specificity, currentness, role relevance, Indonesia application, objective-level source fit, SME review and assessment calibration remain OPEN.


## 17. 169-chapter rubric calibration register

**Date:** 5 November 2026  
**Disposition:** ROW-LEVEL CALIBRATION CONTROL PRESENT; ALL SUBSTANTIVE RUBRIC DECISIONS OPEN.

- Created docs/169-chapter-rubric-calibration-register.csv with 169 chapter rows extracted from the current rubric-draft artifact.
- Each row includes the chapter learning outcome, required artifact/checklist, assessor verification criteria (minimum four extracted criteria), three embedded Q&A items, scoring dimensions, proposed 0–3 scale, uncalibrated 80/100 target and explicit SME/calibration/pilot fields.
- All 169 rows remain OPEN for calibration, qualified SME approval, sample learner submissions and inter-rater agreement.
- The proposed threshold and critical-failure rule are not authorized for summative grading or credential eligibility until standard-setting evidence is complete.
- The static validator now enforces the 169-row count of this register.


## 18. Quiz sandbox browser and accessibility verification

**Date:** 5 November 2026  
**Exact tested commit:** `29c981f58be81d470ddb5c0e4542753eb96b4a6f)  
**Disposition:** AUTOMATED SANDBOX E2E / AXE PASS; MAIN DPA AUTHENTICATED QA OPEN.

- Quiz workflow [41970086027](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41970086027) completed SUCCESS. Playwright Chromium loaded the local prototype and exercised the empty/unanswered guard, all responses, progress, deterministic 100% fixture result, review, retry/reset, radio-group keyboard navigation, and a 390px viewport with no horizontal overflow.
- Axe checks passed on initial, question and result states with the configured WCAG 2.0/2.1/2.2 A/AA tag selection. This automated scan is not a complete manual WCAG audit or accessibility certification.
- Static workflow [41970086188](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41970086188) completed SUCCESS. Validator reports 169 mapped rows, 55 unique source URLs, at least two source URLs per chapter, no missing DOM/local script references, all granular review-register row counts and no failures. Depth-screen script and temporary synthetic scoring self-test passed.
- The initial Axe integration failure was traced to using Playwright `browser.newPage()`; it was corrected to create an explicit browser context and the exact-head rerun passed.
- These checks apply to the separate local synthetic quiz sandbox only. Authenticated browser QA of the main DPA website, role selector, live chapter renderer, accessibility audit of all main pages, actual preview/production build and post-release monitoring remain open.

**Requirement effect:** isolated quiz browser verification = PASS; QUIZ-001 overall = PARTIAL. Release remains NOT READY.


## 19. Automated Q&A and agency-cell evidence triage

**Date:** 5 November 2026  
**Disposition:** MACHINE-READABLE TRIAGE COMPLETE; EDITORIAL AND EMPLOYER EVIDENCE REVIEW OPEN.

### Core Q&A
- Created `docs/507-qna-automated-triage.csv` with 507 per-item records and deterministic review flags.
- 507/507 item-level source-reference fields are blank. Heuristic flags: 152 answers under 14 words, 23 answers beginning with Boolean wording, 16 absolute-wording hits. Answer length range 12–35 words; median 15.
- No heuristic flag proves an answer is wrong. A short answer or a Boolean opening may be appropriate; a reviewer must examine the actual question, expected answer, source and alternative formulations.

### Agency evidence
- Created `docs/80-agency-cell-evidence-gap-triage.csv` with 80 per-cell traceability checks.
- 80/80 rows now carry one or more attached source references (101 URL strings), including WPP T01 Manager, Performance (Beirut; 4+ years) and Senior Digital Performance Manager (Eindhoven; 5+ years). The attached sources include employer JDs, official indexes, employer-attributed postings, adjacent roles and historical/expired listings. All 80 retain OPEN source revalidation, role-specificity, currentness, geography/seniority and competency-mapping states.
- 37 cells inherit a class label containing A from the existing source matrix. Their original direct-JD citations and requisition IDs still need to be attached to these per-cell rows. Do not equate A labels or career-index statements with current vacancies.

### Reproducibility
- Added deterministic validator checks for both triage row counts and the expected heuristic/gap counts. These values are intended to change only when the source registers or review records are deliberately updated.
- See `docs/2026-11-05-qna-agency-automated-triage.md` for definitions, limitations and prioritization. All item/cell approvals remain OPEN.


## 20. T03/T07 exact standards-source refinement

**Date:** 5 November 2026  
**Disposition:** SOURCE PRECISION IMPROVED; OBJECTIVE FIT AND INDONESIA APPLICATION OPEN.

- Replaced the generic MRC standards index on four T03 rows with the directly opened MRC Out-of-Home Measurement Standards Phase 1 & 2 Combined final PDF (December 2025).
- Replaced the earlier generic IAB Europe update page on four T07 rows with the V2.1 article dated 22 January 2026; replaced the generic MRC index on the same rows with the directly opened IAB/MRC Retail Media Measurement Guidelines PDF (January 2024).
- The V2.1 article is directly readable; its linked standards PDF download returned an HTTP retrieval error in this check. The article is used as a source route; PDF download is not marked verified.
- The MRC PDFs were opened and their titles, publication dates and sections checked. SQLBolt remains search-index verified, but the direct page returned a cache miss.
- Total current resource inventory: 169 rows / 55 unique URLs. The 169-objective fit register has been regenerated against the new URLs. All objective-level fit, Indonesia access, pricing, language and SME decisions remain OPEN.
- Reproducible static validation now expects 55 source URLs and checks the exact MRC OOH, MRC Retail and IAB Europe V2.1 URLs.


## 21. Current source inventory reconciliation

**Date:** 5 November 2026  
**Current structural state:** 169 chapter rows / 55 unique external URLs / minimum two unique URLs per chapter. The resource-fit CSV has been regenerated to the exact current mapping. Older ledger entries reporting 48 or 54 URLs are historical snapshots tied to their recorded commits; they are superseded by the current 55-URL mapping. The former 46/48 fetch result is not a current 46/55 result. No current 55/55 direct-access claim is made. All 169 objective-level source-fit and Indonesia access decisions remain OPEN.


## 22. T10 chapter-level source fit review

**Date:** 5 November 2026  
**Disposition:** FIRST-PASS DESK REVIEW COMPLETE; FORMAL ACCEPTANCE OPEN.

- Added 11 unique T10-relevant source URLs (12 row references) across T10-CH02/03/04/05/07/08/09/10, bringing the resource map to 169 chapter rows / 67 unique URLs.
- Added GA4 export schema/session/attribution material; GoogleSQL and BigQuery computation best practices; Looker Studio calculated fields; Google Meridian and calibration guidance; Optimizely experiment workflow/statistical significance; and Tableau visual best practices.
- Updated all ten T10 rows in the 169-objective resource-fit register to the current map.
- Created `docs/T10-10-chapter-source-fit-review.md` and a 10-row CSV with chapter-specific fit classification, evidence, gap and remediation. CH04 (SQL) and CH07 (causal/MMM) have stronger mapped sources; all ten are still PARTIAL overall.
- Major gaps: direct KPI/measurement planning source (CH01); vendor-neutral data taxonomy/lineage (CH02); CM360/Floodlight sources (CH03); runnable dataset and join QA (CH04); dashboard governance and tool comparison (CH05); diagnostic case (CH06); MTA/causal estimand comparison (CH07); MDE/power/sample-size calculations and stopping rules (CH08); executive insight-readout rubric (CH09); reproducible end-to-end capstone dataset/reference solution (CH10).
- Direct source access was confirmed for GoogleSQL, BigQuery computation, Looker Studio calculated fields, GA4 attribution settings, Meridian intro/calibration, Optimizely experiment workflow and Tableau visual guidance. Some GA4 Help pages and Optimizely statistical-significance content had retrieval limitations; these are not marked as confirmed learner access.

**Status:** T10 is still PARTIAL; all ten formal acceptance/SME decisions and all 169 objective-level fit decisions remain OPEN.


## 24. T03 media-planning source-fit review and final source inventory

**Date:** 5 November 2026  
**Disposition:** FIRST-PASS DESK REVIEW COMPLETE; 10/10 CHAPTERS PARTIAL; FORMAL ACCEPTANCE OPEN.

- Added the T03 10-chapter source-fit review and a chapter-level CSV with each objective, mapped sources, fit evidence and material gaps.
- Added YouGov 2025 Indonesia media-consumption summary, Google Reach Planner suggestions (Oct 2026) and MRC/IAB/RAB/NAB Digital Audio Measurement Standards v1.0 (Jan 2018) to T03 rows.
- MRC digital-audio is a streaming/progressive-download standard and explicitly excludes traditional over-the-air AM/FM. Reach Planner is YouTube/video-partner forecast tooling. MRC OOH is a separate OOH measurement standard. None establishes one unduplicated Indonesia cross-media audience currency.
- Updated T03 rows in the 169-objective register: desk-fit PARTIAL; formal objective-fit, Indonesia access/cost/language, technical and SME sign-off OPEN.
- Current resource map: 169 rows / 70 unique URLs; validator checks the 70-URL total, all three new URLs and exactly 10 T03 review rows.

**Register effect:** RES-001 remains PASS for structural mapping only. RES-002 is PARTIAL at desk-review level across T03 (10 chapters) and T10 (10 chapters); formal acceptance of all 169 objectives remains OPEN.


## 25. T02 connection-planning source-fit review

**Date:** 5 November 2026  
**Disposition:** FIRST-PASS DESK REVIEW COMPLETE; 10/10 CHAPTERS PARTIAL; FORMAL ACCEPTANCE OPEN.

- Created `docs/T02-10-chapter-source-fit-review.md` and a 10-row CSV with learning objective, deliverable, mapped sources, component fit, material gaps and next actions for each T02 chapter.
- Added seven source URLs across all ten chapter mapping rows: GCS OASIS guide, GCS Evaluation Cycle, ICC/ESOMAR Code 2025 PDF, ICC Advertising Code 2024, NN/g Journey Mapping 101, AMA branding page and AAMA Positioning & Messaging Framework.
- Recorded source context/access limits: UK government standards are not local commercial/Indonesian policy; NN/g is UX-oriented; AMA deeper content may be member-gated; AAMA and NN/g direct pages returned cache misses; the official ESOMAR PDF route requires a local learner-access check.
- Updated T02's ten rows in the 169-objective resource-fit register with PARTIAL desk-review evidence/gaps; formal objective-fit, technical, Indonesia access/cost/language, SME and learner-pilot fields remain OPEN.
- Current map: 169 rows / 77 unique URLs; static validator now checks all seven new T02 URLs and exactly 10 T02 review rows.

**Register effect:** RES-001 remains PASS for mapping structure only. RES-002 is PARTIAL at desk-review level across T02 (10 chapters), T03 (10 chapters) and T10 (10 chapters); formal acceptance of all 169 objectives remains OPEN.


## 26. T07 retail and commerce media source-fit review

**Date:** 5 November 2026  
**Disposition:** FIRST-PASS DESK REVIEW COMPLETE; 10/10 CHAPTERS PARTIAL; FORMAL ACCEPTANCE OPEN.

- Created `docs/T07-10-chapter-source-fit-review.md` and a 10-row CSV; all chapters have component-fit evidence and specific source gaps.
- Added six Indonesia-facing source routes for TikTok Shop Ads/GMV Max, Tokopedia Product Shopping Ads, Shopee product-ad creation/performance reporting and Lazada Sponsored Solutions/Sponsored Discovery.
- Updated T07's ten rows in the 169-objective fit register with PARTIAL desk status. Formal objective fit, seller-account eligibility/access, local commercial terms, technical correctness, SME sign-off and learner pilot remain OPEN.
- Recorded platform-specific limits: GMV Max is TikTok Shop Ads' default/only supported type since July 2025; Tokopedia Product Shopping Ads is invitation/eligibility-gated; Shopee outcome reporting uses a documented seven-day post-click window and includes certain store-product outcomes; Lazada feature eligibility includes whitelist-only routes.
- Clarified that IAB/MRC and IAB Europe measurement guidance does not prove Indonesian platform implementation or certification. Platform-attributed sales are not automatically incremental.
- Current resource map: 169 rows / 83 unique URLs; validator checks all six local routes and ten T07 review rows.

**Register effect:** RES-001 remains PASS for mapping structure only. RES-002 is PARTIAL at desk-review level across T02, T03, T07 and T10 (10 chapters each); formal acceptance of all 169 objectives remains OPEN.


## 27. T13 content strategy and creation source-fit review

**Date:** 5 November 2026  
**Disposition:** FIRST-PASS DESK REVIEW COMPLETE; 11/11 CHAPTERS PARTIAL; FORMAL ACCEPTANCE OPEN.

- Created `docs/T13-11-chapter-source-fit-review.md` and an 11-row CSV; all chapters have source evidence, material gaps and next actions.
- Added seven source URLs for TikTok Top Ads, Commercial Music Library, commercial-content disclosure, YouTube native analytics, and JDIH BPK's copyright-law record.
- Updated the eleven T13 rows in the 169-objective register with desk-review status PARTIAL and explicit gaps. Formal objective fit, rights/legal, platform access, technical/editorial/SME and learner-pilot fields remain OPEN.
- DPR reporting dated 27 October 2026 describes the RUU Copyright amendment as still under Panja discussion. The draft is not enacted legislation; recheck live JDIH/legislative status before legal instruction.
- Current resource map: 169 rows / 90 unique URLs; validator checks all seven T13 source URLs and exactly 11 T13 review rows.

**Register effect:** RES-001 remains PASS for mapping structure only. RES-002 is PARTIAL at desk-review level across T02/T03/T07/T10 (10 chapters each) and T13 (11 chapters); formal acceptance for all 169 objectives remains OPEN.


## 28. T16 community management and advocacy source-fit review

**Date:** 5 November 2026  
**Disposition:** FIRST-PASS DESK REVIEW COMPLETE; 12/12 CHAPTERS PARTIAL; FORMAL ACCEPTANCE OPEN.

- Created `docs/T16-12-chapter-source-fit-review.md` and a 12-row CSV with source evidence and chapter-specific gaps.
- Added eight source routes for UU PDP 27/2022, UU ITE 1/2024, PP 71/2019, Meta Safety Center tools/policies, TikTok comment filters/Community Guidelines and YouTube live-chat moderation.
- Updated T16's twelve rows in the 169-objective fit register: desk status PARTIAL; objective/resource acceptance, legal applicability, platform access, technical, SME and learner pilot fields OPEN.
- Clarified that Dewan Pers Cyber Media Guidelines apply to journalistic cyber media; NSW material is a public-sector example; platform controls vary by account; and PP 71/2019 scope must be confirmed for the actual PSE/entity/service rather than assumed for every brand account.
- Current resource map: 169 rows / 98 unique URLs; validator checks all eight new URLs and exactly 12 T16 review rows.

**Register effect:** RES-001 remains PASS for structural mapping only. RES-002 is PARTIAL at desk-review level across T02, T03, T07, T10, T13 and T16 (63 chapters in total); all 169 formal objective-level fit decisions remain OPEN.


## 29. Consolidated exact-head status and final evidence reconciliation

**Date:** 5 November 2026  
**Verified remediation head:** `9ba12b6f6f9e3b1cbf05d4f21c31c8263864924a`  
**Disposition:** REPOSITORY/CI AND PREVIEW BASELINE HEALTHY; RELEASE STILL NOT READY.

### Repository and audit controls
- 169 canonical core chapter IDs reconcile; the structure-depth screen reports no structural flags and no exact duplicate core Q&A question text.
- The evidence register contains 507 Q&A pairs. The review register is synchronized exactly to question text/current guide answers; all 507 editorial, answer-review and SME statuses remain OPEN.
- The objective resource register has 169 rows; 63/169 priority chapters now have first-pass desk-review evidence covering T02 (10), T03 (10), T07 (10), T10 (10), T13 (11) and T16 (12). All 169 formal fit, Indonesia access, language/cost/account eligibility remain OPEN. The 106 non-priority chapters still need their first desk review.
- Resource map: 169 chapter rows, 121 unique URLs and minimum two unique URLs per chapter. Six priority-track reviews are separate files and all 63 desk classifications are PARTIAL or PARTIAL_STRONG; none is formal acceptance.
- Agency validation: 80/80 cells have source references (101 URLs total in the register), with source type/caveat captured. Source mix includes employer-hosted JDs, historical/adjacent JDs, employer career portals and indexes, and employer-attributed postings. All employer/JD currentness, role specificity, geography/seniority and competency checks remain OPEN.
- Rubric calibration: 169 rows; all SME and calibration decisions OPEN. The proposed 80/100 threshold remains uncalibrated.
- Electives remain separate: 28 chapter validation rows and 56 knowledge-check rows; all technical, source, answer-key, rubric, legal/market and pilot statuses OPEN.

### Engineering and deployment
- The formative quiz engine remains synthetic-only, standalone and non-credential-bearing. It is not integrated into the main chapter renderer and rejects summative mode.
- Exact-head [DPA Remediation Static QA run 41992938737](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41992938737) passed static structure, register parity, chapter depth, score-script compile and synthetic vector self-test.
- Exact-head [DPA Quiz Engine QA run 41992938771](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41992938771) passed deterministic tests, Playwright browser interaction, axe checks, keyboard navigation, mobile overflow and trust-boundary assertions.
- Vercel preview deployment `dpl_2eNK7nQvuBkBjKK8ep5mV1NE3rFU` is READY for exact head `9ba12b6...`; preview URL is `https://putratryarga-r7qhfsnp1-elric3.vercel.app`. This is not production.
- Main application browser QA was not completed: the connected TinyFish wallet reported USD -1.14 before the browser run started. No main-app browser result is claimed. The isolated quiz browser test is not a substitute.
- Current comparison against main reports 395 commits ahead and 2 behind; PR #5 and #6 remain open, draft and unmergeable. Do not merge by bypassing these conditions or treat branch preview as production.

### P0 historical recovery attempt
A fresh Library search plus exact phrase/term searches against the recovered `16 track.txt` archive found no standalone verbatim AutoClaw Master Prompt, no authoritative 169×7 raw score vectors/seven-dimension definition package, and no original 23-finding / D-1…D-12 discrepancy log. The archive remains a useful historical context source, not a substitute for the missing originals. Keep SCP-001, HIST-001 and HIST-002 BLOCKED; keep the score-input template blank. A newly approved baseline would need a separately named instrument and qualified reviewers.

### Remaining non-repository dependencies
- Qualified independent SME/editorial review for 169 core chapters, 507 Q&A answers and 169 rubrics.
- Indonesia learner-side access/cost/language/eligibility checks for all 169 chapter resources.
- 80 agency-cell currentness, employer/entity, title, JD, geography/seniority and competency validation.
- Separate technical/legal/source/pilot review for all 28 electives and 56 knowledge checks.
- Issuer identity/policy/privacy/security, server-side credential registry, and approved assessment rules before certificate issuance.
- Main application authenticated browser/accessibility QA and exact preview inspection.

**Release gate:** NOT READY. No main/production changes have been made by this remediation work. No score, question approval, SME sign-off, credential issuance or production deployment is inferred from structural/CI/preview success.


## 2026-11-05 exact-head continuation — resource count and T16 artifact reconciliation

- Prior exact-head snapshot `aa4b78f5627b79c26abce02f0c050ec2db114649` had 169 mapped chapter rows and 121 distinct resource URLs under the static validator's Markdown-link parser. The old 98-URL validator expectation was stale after the remaining-track source-enrichment commits; it caused the latest static QA failure, not a connection failure or curriculum-data mismatch.
- The 169-row / 121-URL map is now synchronized across the validator, README, acceptance register, source-of-truth, priority-track review and resource-fit review. The minimum two-distinct-URLs-per-chapter invariant is retained.
- Added the missing T16 12-chapter desk-review Markdown and 12-row CSV artifacts referenced by the source-of-truth and resource-fit review. Every T16 row remains PARTIAL at desk level; formal fit, Indonesia access, legal applicability, technical review, SME approval and learner pilot remain OPEN.
- This documentation/validator sync is confined to the audit branch. It does not update production, merge PR #5/#6, or authorize certificate issuance.
