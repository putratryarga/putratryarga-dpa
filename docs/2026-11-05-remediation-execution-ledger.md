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
