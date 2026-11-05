# 5 November 2026 — Static Repository QA Report

**Target:** remediation branch `audit/full-dpa-remediation-2026-11-05`, derived from PR #5 and containing PR #6's unique advanced-elective source document.  
**Method:** GitHub source-file inspection and deterministic string/ID reconciliation. This is static QA only; it does not simulate browser rendering or user interaction.

## Results

**Audit subject:** remediation branch `audit/full-dpa-remediation-2026-11-05` at source commit `f9def1a8c6a8b22568b38bd83c7c1086765418fb`. The appended 5 November delta records post-patch preview checks; subsequent commits update audit documentation only.

| Check | Result | Status |
|---|---:|---|
| HTML chapter IDs | 169 | PASS |
| Unique HTML chapter IDs | 169 | PASS |
| Guide objects (10 Full-Stack + 10 Paid Social + 149 role-specific) | 169 | PASS |
| Unique guide IDs | 169 | PASS |
| HTML chapter IDs without guide | 0 | PASS |
| Guide IDs without HTML chapter | 0 | PASS |
| Duplicate guide IDs | 0 | PASS |
| All HTML element IDs | 391 (391 unique) | PASS |
| Internal anchors | 13 (13 resolve) | PASS |
| Local JavaScript files | 8 | PASS — source tags inspected |
| Total `@media` declarations | 19 (14 width-based, 2 reduced-motion, 3 print) | STATIC COUNT VERIFIED — visual behavior not runtime-verified |
| Progress persistence code | present | STATIC PRESENCE ONLY |
| Theme code | present | STATIC PRESENCE ONLY |
| Keyboard focus styling | present | STATIC PRESENCE ONLY |
| Reduced-motion handling | present | STATIC PRESENCE ONLY |
| Chapter evidence register | 169 chapters; 0 literal undefined tokens | PASS |
| Assessment rubric register | 169 chapters; 0 literal undefined tokens | PASS |
| Register Q&A items | 507 source-matched items | PASS — answer correctness remains OPEN |
| Rubric answer-key review entries | 507 | PASS — SME approval remains OPEN |

| Role-specific glossary extraction | 149 source guide term arrays | PASS — source extraction only |

## Interpretation

- The explicit chapter-ID mapping is statically reconciled: 169 HTML chapter IDs and 169 guide IDs, with no missing, orphan or duplicate IDs.
- The chapter evidence register and rubric file contain 169 chapters each and 507 Q&A items each. The 149 role-specific guide glossary fields have been regenerated from source arrays; extraction is not SME content approval.
- The 8 local script references and static responsive/theme/progress/focus/reduced-motion code are present. Presence is not proof that the features behave correctly at runtime.
- The source files include a legitimate JavaScript guard checking whether `DPA_GUIDE_BY_CHAPTER` is `undefined`; this is not a rendered placeholder or a content defect.

| Agency evidence matrix | 80 unique cells; A37/B22/D42/G0; 21 compound labels; 101 class-label instances | STRUCTURE VERIFIED — historical/adjacent routes recovered; direct/current competency validation remains PARTIAL |

| Elective evidence groups | 10 agency × elective rows (5 groups × 2 electives) | STRUCTURE VERIFIED — content validation remains PENDING |
| Canonical chapter ID inventory | 169 unique IDs | STRUCTURE VERIFIED — score recomputation blocked by missing raw vectors |
| Automated validator script | Includes chapter, agency/elective matrix, Q&A, resource and media-query checks | ADDED — source assertions reviewed; runtime pending |

| Branch-only GitHub Actions workflow | `.github/workflows/dpa-remediation-static-qa.yml` | PASS — runs 41950779127, 41950936135 and 41951028735 completed SUCCESS on their exact listed SHAs; synthetic self-test only |

## Not tested / release blockers

- No authenticated PR preview browser session was available. The connected local Browser tool could not access the originating browser context.
- Cloud browser/deep-research automation returned an insufficient-funds / empty-wallet response; no browser run was started.
- No desktop/mobile screenshot inspection, real click/keyboard navigation, role-selector interaction, localStorage persistence round-trip, theme toggle, accessibility-tree inspection, console/network test or cross-browser regression was performed.
- The latest current-code Vercel deployment `dpl_HdSvAAgybvAvYMPqvF2FUxiJB4kq` is **READY** on exact source SHA `fd5d25cf8fa314ce9ed8b06cb1a5adb50510f5c2`. Its preview returned HTTP 200, contained 169 unique chapter IDs and 13 internal anchor targets, and all eight local JavaScript assets returned HTTP 200. Three updated role-guide JS assets were also checked for specific expanded answer/glossary text. GitHub Actions run `41955517513` completed **SUCCESS** on that same source SHA. The external Vercel feedback script was not counted among local application assets.
- A live content-fetch recheck passed for all 39 unique resource URLs currently in the chapter map. Publisher/URL identity and broad track-level topical relevance were reviewed; chapter-objective fit, login/locale/market eligibility, cost and credential expiry remain separate checks.

**Branch relationship:** `main` is `640b1924...`; the remediation branch includes main as a parent and currently has zero commits behind `main`. `main` remains unchanged. PR #5/#6 remain draft/open/unmerged.

**Release decision:** STATIC SOURCE CHECKS and GitHub Actions static QA PASS on recorded SHAs; current-code Vercel Preview is READY on SHA fd5d25cf8fa314ce9ed8b06cb1a5adb50510f5c2 with HTTP/asset smoke PASS; authenticated BROWSER/RUNTIME interaction QA NOT RUN; historical/SME/source-fit gates remain open; NOT READY TO MERGE.


## 2026-11-05 post-resource-correction verification

**Subject code/resource commit:** `f9def1a8c6a8b22568b38bd83c7c1086765418fb`  
**Preview deployment:** `dpl_C4wNhiKsG8DA9hL3y725HqXDdhky`  
**Preview URL:** https://putratryarga-7xcu2tru9-elric3.vercel.app/

| Check | Result | Status |
|---|---:|---|
| Chapter resource-map rows | 169 / 169; all IDs unique | PASS — mapping structure |
| Unique resource URLs | 39 | PASS — all fetched with content |
| Minimum source links per chapter row | 2 | PASS — link count only |
| Resource-caption / publisher identity corrections | 13 track families (T01, T02, T03, T05, T06, T07, T08, T09, T10, T12, T13, T14, T15) | PASS — source identity |
| Chapter objective-to-source fit | 169 rows | OPEN — SME/content review required |
| Current Vercel deployment | READY on exact subject SHA | PASS — preview build |
| Preview HTML fetch | HTTP 200; 169 chapter IDs, 169 unique; page title correct | PASS — HTTP smoke only |
| Referenced local JavaScript assets | 8 / 8 return HTTP 200 | PASS — asset fetch only |
| Preview anchors | 13 targets present in fetched HTML | STATIC/HTTP CHECK — not keyboard/navigation QA |
| Browser DOM execution / role switching / persistence / theme / a11y | Not performed | NOT RUN |

The 39 resource URLs comprise official publisher, product-support and standards pages. Content fetch establishes that a destination returned readable content at check time; it does not establish that every module maps to every learning objective, nor guarantee local-market eligibility, price, or account access.

**Release state remains NOT READY TO MERGE.** Raw score vectors, original 23 findings and D-1…D-12 records, SME/answer-key/rubric calibration, agency competency validation, 169 objective-level resource fit, elective JD/market/pilot validation and authenticated browser interaction QA remain open or blocked.


## 2026-11-05 full-draft and supplemental audit update

| Check | Result | Status |
|---|---:|---|
| Advanced elective chapter drafts | 28 / 28 (14 CRO + 14 Traditional Media) | PASS — first-pass written content only |
| Unique elective chapter sections | 28 | PASS — structure |
| Elective sections with learning outcome, lesson, workflow, practice, artifact/acceptance and source caveat | 28 / 28 | PASS — structure |
| Elective knowledge checks | 56 / 56 | PASS — answer guidance drafted; SME approval OPEN |
| Elective glossary definitions | 84 / 84 | PASS — draft terminology; SME review OPEN |
| Elective shared learner rubric | Five dimensions scored 0–3 | DRAFTED — calibration and learner pilot OPEN |
| Resource map rows / unique IDs | 169 / 169 | PASS — mapping integrity |
| Resource URLs | 39 unique; 39 fetched with readable content at check time | PASS — URL/content availability, not objective fit |
| Track-level resource-fit desk review | 16 / 16 tracks assessed | PROVISIONAL — objective-level 169-row sign-off OPEN |
| Supplemental findings register | 17 new IDs (5 FIXED / 5 PARTIAL / 5 OPEN / 2 BLOCKED) | PASS — new findings only; not a replacement for historical records |
| Score input collection template | 169 rows; seven score fields blank | TEMPLATE ONLY — not raw evidence and not scoreable |
| Historical raw 169 × 7 vectors | Not recovered | BLOCKED |
| Historical 23 findings and D-1…D-12 | Not recovered | BLOCKED |
| Authenticated browser interaction/accessibility QA | Not performed | NOT RUN |

The 28 elective chapters are complete only as first-pass written drafts. The five-dimension learner-assessment rubric must not be confused with the separate seven-dimension 0–4 chapter-audit score model. The latter's dimension definitions and original values remain unavailable.

The supplemental findings register documents new observations from this pass and is not the original 23-finding register or D-1…D-12. The blank score template is a collection aid only. It does not provide, infer or impute score values.

**Current conclusion:** source-level remediation is materially advanced; overall status remains **NOT READY — REMEDIATION INCOMPLETE** until historical score/issue source recovery, 169 objective-level resource review, SME and JD validation, answer-key/rubric calibration, Indonesia-market review, learner pilot and authenticated browser QA are evidenced.


## 2026-11-05 exact-commit workflow evidence

| Workflow run | Subject SHA | Result | Verified checks |
|---|---|---|---|
| [41950779127](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41950779127) | 7442ca481b9e5f786f95db971ac314cef32f9be5 | SUCCESS | Deterministic Node structure validator, Python script compile, temporary synthetic 169×7 score self-test |
| [41950936135](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41950936135) | e21c30ec69a66babdab79c3837fb3637d442d8bb | SUCCESS | Same workflow and validation steps |
| [41951028735](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41951028735) | 220404081535c8a72b966d3ae77dee53911006fe | SUCCESS | 169 HTML IDs, guide/evidence/rubric/resource/technical structures; Python compile; 169 synthetic outputs and 16 synthetic track summaries |\n| [41955517513](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41955517513) | fd5d25cf8fa314ce9ed8b06cb1a5adb50510f5c2 | SUCCESS | Current static validator and synthetic score self-test after guide-source/agency updates |

The self-test's score vectors are generated in runner temporary storage, labelled SYNTHETIC and discarded after the job. A successful self-test proves the calculator runs on controlled test input; it does not supply the historical raw score matrix. The run logs also show non-blocking Node/Punycode deprecation warnings.

**Current code/preview note:** the READY deployment at SHA `fd5d25c` includes the three role-guide JS content updates. The deployment fetch test confirms HTTP 200, 169 unique chapter IDs, 13 anchor targets and 8/8 local JS assets; the three updated guide JS files contain the newly expanded answer/glossary text. No authenticated interactive browser, keyboard, persistence, accessibility-tree or cross-browser test was performed. No production merge/deployment occurred.


## 2026-11-05 answer-key and glossary integrity check

The evidence register and assessment-rubric draft were independently parsed chapter-by-chapter:

| Check | Result | Status |
|---|---:|---|
| Evidence-register Q&A entries | 507 | PASS — three per core chapter |
| Rubric Q&A entries | 507 | PASS — three per core chapter |
| Question text parity | 507 / 507 exact matches | PASS — mirrored content |
| Answer-guidance parity | 507 / 507 exact matches | PASS — mirrored content |
| Missing answer text | 0 | PASS — structurally present |
| Duplicate question text | 0 | PASS — 507 unique questions |
| SME approval | 507 / 507 OPEN | OPEN — correctness and alternate-answer review still required |
| Short answer guidance | 0 entries under 12 words after 122 source updates | PASS — length triage cleared; SME correctness remains OPEN |
| Short glossary definitions | 0 entries under 5 words after 81 source updates | PASS — length triage cleared; SME terminology review remains OPEN |

The source guide JS files, evidence register and assessment-rubric draft were compared chapter-by-chapter: 169 source guide IDs, 507 Q&A pairs and 701 glossary definitions in source JS; 507 Q&A and 701 glossary definitions in the evidence register; 507 Q&A in the rubric register. Question, answer and glossary text parity is exact, with zero mismatches. No answer is under 12 words and no glossary definition is under five words. This is source synchronisation and length QA, not a subject-matter correctness judgment. All 507 answer-key review statuses remain OPEN.


## 2026-11-05 agency evidence recheck and validator synchronization

- The five former G-marker cells in the 80-cell agency matrix now carry documented historical/index/adjacent routes with explicit caveats. Current labels: A37/B22/D42/G0, 21 compound cells and 101 class-label instances. The matrix is still PARTIAL; not every cell is backed by a current direct JD or validated chapter competency.
- The static validator initially failed on the intentionally changed agency evidence counts because its expected values remained A37/B20/D37/G5 and 19 compounds. The validator was updated to A37/B22/D42/G0 and 21 compounds on SHA 42e39b49103c2635d0576b23f92d1529bb07c391.
- The corrected validator run [41955180966](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41955180966) passed on SHA `42e39b4`. The final current-code/source run [41955517513](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41955517513) also completed **SUCCESS** on SHA `fd5d25c`. Both ran the deterministic repository validator, compiled the score recalculation script, and passed a temporary synthetic 169-vector/16-track score self-test. Earlier failures between 41954852406 and 41955066664 were caused by stale agency-count expectations; the validator contract was updated. Synthetic vectors are not the historical raw audit scores.
- Synthetic score vectors were produced only under runner temporary storage and are not historical/raw audit scores. Raw 169 × 7 inputs remain BLOCKED.


## 2026-11-05 supplemental closure and final branch-head CI update

- Supplemental register status is now **5 FIXED / 5 PARTIAL / 5 OPEN / 2 BLOCKED** across 17 new findings. RUNTIME-002 (current-code preview/HTTP asset smoke) and CI-001 (push-workflow execution evidence) were closed with exact SHA/run/deployment evidence. RUNTIME-001 remains open because authenticated interaction/accessibility tests were not performed.
- Latest checked remediation branch head: `b418d81483628d08e197aa54fdd2c10cc9390305`.
- Latest Actions run: [41956411335](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41956411335), SUCCESS on the exact head above. Logs show 169 HTML IDs, 169 unique guide IDs, 169 evidence chapters, 169 rubric chapters, 169 resource rows, 169 technical rows, 16 tracks, updated agency class expectations and the temporary synthetic score self-test.
- Latest current-code Vercel deployment: `dpl_HdSvAAgybvAvYMPqvF2FUxiJB4kq`, READY on source SHA `fd5d25cf8fa314ce9ed8b06cb1a5adb50510f5c2`. Documentation-only commits after that SHA did not change application source. Page/asset smoke: HTTP 200, 169 unique chapter IDs, 13 internal anchor targets, 8/8 local JS assets; updated answer/glossary strings confirmed in all three changed role-guide bundles.
- No authenticated browser interactions, keyboard traversal, persistence round-trip, accessibility-tree, screenshot/visual regression or cross-browser QA was performed. No merge or production deploy occurred.


## 2026-11-05 canonical inventory and score-template validator extension

The deterministic repository validator was extended to cover two audit-control artifacts that had previously been inspected but were not part of the automated pass/fail contract:

| Check | Result | Status |
|---|---:|---|
| Canonical chapter inventory rows | 169 | PASS |
| Unique canonical IDs | 169 | PASS |
| Canonical inventory compared with HTML chapter IDs | Exact set match | PASS |
| Blank score-input template data rows | 169 | PASS |
| Unique score-template IDs | 169 | PASS |
| Score-template IDs compared with canonical inventory | Exact set match | PASS |
| CSV schema | 9 columns: chapter ID, track ID, seven dimension fields | PASS |
| Pre-filled dimension values in the collection template | 0 | PASS — all seven dimension cells remain blank |
| Static validator failures | 0 | PASS |

The score-input CSV is still a **collection template**, not a completed score matrix. The extension intentionally fails if any of its seven dimension cells contains a value, preventing the blank template from being mistaken for historical source data or silently used as an audit result. The calculator's separate temporary synthetic self-test remains a code-path test only.

- Validator extension: commits `6e8b7ba` and newline-parser correction `5b7b7a6`.
- First push run `41958798255` failed because the initial line-splitting expression did not split on newline characters; the log showed zero parsed inventory/template rows. This was corrected in `5b7b7a6`; the follow-up run `41958824709` passed.
- Latest exact-head workflow at this checkpoint: [run 41959194871](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41959194871), SUCCESS on `1965efaaf393f7a89e3059e3c7ea36c683449aa8`. Its logs show 169 canonical rows, 169 unique canonical IDs, 169 score-template rows, empty failures, and a PASS result; Python compilation and the temporary synthetic 169-chapter / 16-track calculation also passed.

No original score values or dimension definitions were created, inferred, or inserted by this extension.
