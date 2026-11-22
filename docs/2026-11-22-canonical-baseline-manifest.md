# Canonical DPA Baseline Manifest — 22 November 2026

**Snapshot time:** 22 November 2026, 15:39 WIB (Asia/Jakarta)  
**Project:** The Full-Stack Digital Performance Architect  
**Owner:** Putra Try Arga  
**Repository:** `putratryarga/putratryarga-dpa`  
**Manifest purpose:** one canonical remote repository, inventory, CI and deployment snapshot. This is a technical and evidence baseline, not curriculum acceptance or release approval.

## 1. Canonical repository and PR state

| Field | Verified value |
|---|---|
| Repository access | Admin / maintain / push |
| Default branch | `main` |
| Main full SHA | `64f96437bcdb8499add1affbad102283dfe7d8b4` |
| Active review branch | `audit/dpa-release-readiness-2026-11-21` |
| Current reviewed source HEAD | `c3d603fa0e64efe1f80f5bfe53577bb03fdd5677` |
| Pull request | [#7 — DPA v11.2](https://github.com/putratryarga/putratryarga-dpa/pull/7) |
| PR state | OPEN / DRAFT / UNMERGED |
| Base / head | `main` / `audit/dpa-release-readiness-2026-11-21` |
| PR commit count | **645** |
| Changed files | **190** |
| Additions / deletions | **71,160 / 367** |
| Mergeability | Mergeable at snapshot; no merge performed |
| GitHub comparison | 645 ahead, 0 behind; merge-base equals main SHA |
| Synthetic PR merge ref | `f8da55fe9e1ab908500124d4a547983b226215ff` — GitHub test merge context only, not a production commit |

### Interpretation of the commit count

The reported 645 is the number of commits in the PR branch after the exact merge-base with `main`. GitHub's PR metadata and branch-vs-main comparison agree. The comparison's merge-base is exactly `64f96437bcdb8499add1affbad102283dfe7d8b4`. The earlier 632 figure was the valid count at the earlier `d8d7086` snapshot; 13 commits have since been added. This is not a synthetic-merge-history miscount and no evidence shows an unrelated repository history merged into the branch. The branch contains its own ancestors plus main ancestry; it is ahead, not behind. **Preserve history. No rebase, squash, force-push, branch replacement or PR recreation is recommended or performed.**

## 2. Verified deployment provenance

| Target | Deployment | Source | State |
|---|---|---|---|
| Current Preview | [`putratryarga-jl6hhcty1-elric3.vercel.app`](https://putratryarga-jl6hhcty1-elric3.vercel.app/) | Branch HEAD `c3d603fa0e64efe1f80f5bfe53577bb03fdd5677` | READY |
| Production alias | [`https://putratryarga-dpa.vercel.app/`](https://putratryarga-dpa.vercel.app/) | `main` commit `640b1924a6b200fac83df1dcac1ddd1e8b9ea61d` | READY |

**Preview deployment ID:** `dpl_7cqBXCM8XPupgxkB2E7rkFLGeZwY`  
**Vercel check:** SUCCESS — [deployment inspector](https://vercel.com/elric3/putratryarga-dpa/7cqBXCM8XPupgxkB2E7rkFLGeZwY).

**Production deployment ID:** `dpl_DN3uQRSqEhdJDE5mn123xidFYC1Z`  
**Production source SHA:** `640b1924a6b200fac83df1dcac1ddd1e8b9ea61d`.

The production deployment is two documentation-only commits behind the current `main` branch; comparison from the production SHA to `main` identifies only `docs/T07-10-chapter-source-fit-review.md` and `docs/T16-12-chapter-source-fit-review.md`. The production alias and deployment were not changed in this execution. The project reports SSO protection on deployment hostnames except custom domains. Authenticated learner-journey inspection of Preview has not been performed; a READY deployment does not establish hosted visual, access, content or accessibility acceptance.

## 3. Canonical inventory at source HEAD

| Component | Count | Verified definition |
|---|---:|---|
| Core specialist tracks | **16** | Current core taxonomy; Affiliate and Community are separate core tracks |
| Advanced electives | **2** | Elective 17 CRO/Growth and Elective 18 Traditional Media Planning & Buying |
| Shared Common Foundation | **6** | CF1–CF6; shared layer, not an additional track |
| Core chapters | **169** | 169 unique `DPA-Txx-CHxx` IDs |
| Elective chapters | **28** | 14 chapters per elective; separate from the 169 core chapters |
| Core guide registry | **169** | One immutable-ID guide object per core chapter |
| Core Q&A | **507** | Three reflective Q&A items per core chapter; not approved for scored use |
| Core rubric register | **169** | Draft rows; calibration and approval remain open |
| Objective resource-fit register | **169** | One chapter row; first-pass classifications 163 PARTIAL / 6 PARTIAL_STRONG |
| Core resource map | **169 rows / 187 unique URLs** | 652 URL entries in the file, de-duplicated to 187 distinct URLs |
| Agency evidence matrix | **80 cells** | Five agency families × 16 core tracks; evidence is not equivalent to validation |
| Elective knowledge checks | **56** | Two reflective checks for each of 28 elective chapters |
| Elective validation register | **28** | 14 + 14; all formal validation fields remain OPEN |
| Credential mapping rows | **175** | 169 Core + 6 Foundation |
| Mapped / portfolio-first rows | **154 / 21** | 154 OPTIONAL_EXTERNAL_EARN + 21 APPLIED_SKILL_PORTFOLIO |
| Issuer route definitions | **89** | Unique issuer-route records, not placements or earned awards |
| Core chapters with mapped route | **150/169** | 260 Core placements; 19 Core portfolio-first |
| Foundation chapters with mapped route | **4/6** | 4 Foundation placements; 2 Foundation portfolio-first |
| Total credential placements | **264** | 260 Core + 4 Foundation |

### Credential registry categories and tiers

The 89 issuer definitions consist of 22 professional certifications, 8 vendor product certifications, 13 vendor course certifications, 37 course-completion credentials, 4 course-completion certificates, 1 simulation completion certificate, 2 industry certifications, 1 learning-path badge and 1 skilling certificate.

Market tiers are 67 Indonesia-priority, 11 global-specialist optional and 11 supporting/product/gated. The 67 figure is one tier within 89 total issuer definitions, not the catalogue total. The 21 portfolio-first chapter rows are 19 Core + 2 Foundation. All 175 mapping rows remain `FIRST_PASS_MAPPING_NOT_SME_ACCEPTED`; routes are optional and DPA has no external credential completion verification or issuance system.

### Historical count reconciliation

| Earlier figure | What it described | Current interpretation |
|---|---|---|
| 35 routes / 136 Core / 194 Core placements / 3 CF | Early runtime registry snapshot | Superseded |
| 51 routes / 161 Core / 224 Core placements / 4 CF | Earlier integration pass | Superseded |
| 67 routes | Indonesia-priority filter | Market tier, not total registry |
| 145/169 Core / 234 Core placements / 24 Core portfolio-first | Earlier curated-market filter stage | Superseded |
| 74 / 75 routes | Interim Meta/TikTok / Meta SBA integration snapshots | Superseded |
| 89 routes | Current full issuer registry | Current |
| 150/169 Core / 260 Core placements / 4/6 CF / 264 total placements | Current chapter mapping | Current |
| 21 portfolio-first | 19 Core + 2 Foundation rows | Current |
| 187 resource URLs | Current `chapter-resources.js` URL distinct count | Current; old 180/181 counts are superseded |

These measures have different scopes. Route definitions, market tiers, mapped chapters, placement counts and portfolio-first rows must not be combined into one credential count.

## 4. Exact-source CI evidence at reviewed HEAD

All listed source-triggered GitHub Actions runs below have exact `head_sha = c3d603fa0e64efe1f80f5bfe53577bb03fdd5677` and completed SUCCESS.

| Workflow | Run | Result | What it proves |
|---|---:|---|---|
| DPA Guide Registry and Browser QA | [45003704525](https://github.com/putratryarga/putratryarga-dpa/actions/runs/45003704525) | SUCCESS | 169 guide/resource/credential structural validation and Chromium render/role flow |
| DPA Remediation Static QA | [45003704564](https://github.com/putratryarga/putratryarga-dpa/actions/runs/45003704564) | SUCCESS | Static validators, audit-register parity, depth screen, Python score-script compilation and synthetic score calculation self-test |
| DPA Quiz Engine QA | [45003704477](https://github.com/putratryarga/putratryarga-dpa/actions/runs/45003704477) | SUCCESS | Synthetic-only formative quiz engine deterministic tests, Playwright smoke, targeted axe checks and prototype trust-boundary checks |

### Browser artifact and outcomes

Artifact [14746907959](https://github.com/putratryarga/putratryarga-dpa/actions/runs/45003704525/artifacts/14746907959) belongs to exact source SHA `c3d603f`; SHA-256: `5fb7d2686122b060e062e04429a1ec96283d67f5b27ae58c07a7786ca4eb13d7`.

The report recorded 175 rendered panels (169 Core + 6 Common Foundation), 16 roles opened, visibility limited to the selected role plus Common Foundation, all 16 role cards without overlap on desktop and mobile, four learner milestones per panel, 264 Core/Foundation route cards across panels, 21 explicit no-route portfolio states, at least two unique mapped HTTP(S) links per panel, 390px viewport and 390px document width, and zero runtime, console, request or HTTP errors. This is local CI Chromium rendering and role-switch QA, not authenticated hosted Preview acceptance, screen-reader testing or full WCAG 2.2 AA certification.

### Score and quiz trust boundary

The static workflow generated 169 temporary **synthetic** vectors solely to self-test the seven-dimension arithmetic. They are not historical scores and do not resolve the five historical track-summary discrepancies. The Quiz Engine workflow tests an isolated synthetic-only formative prototype. It is not integrated with the main 507 reflective Q&A items, has no learner-data persistence or roadmap progress sync, and is not approved for summative/scored certification.

## 5. Changes verified in this finalization pass

- Reconciled README and Source of Truth to the 89-route / 150-of-169 chapter mapping / 264-placement / 187-URL snapshot; historical count checkpoints are retained as historical, not current inventory.
- Corrected the OpenAI Ads country-access wording: Indonesia's September market announcement is a partner/Ads Solutions rollout, while the current English and Indonesian self-service country tables do not list Indonesia. Sponsored Agents remains limited alpha; Sponsored Business Agent access is account-dependent.
- Strengthened credential validation: all 89 issuer definitions must be reachable from a Core or Foundation chapter map; duplicate route IDs per chapter and mismatched Foundation map/audit IDs fail validation; all 16 TikTok Academy Achievement route IDs are asserted and remain distinct from the paid TikTok Media Buying Professional Certification.
- Strengthened the 169 core-guide validator: concept, worked example and practice each at least 100 characters; at least four sequenced steps; at least three question/answer-guided checks; at least four defined glossary terms; at least two unique HTTPS resources.
- Strengthened Chromium rendering checks for the same core guide substance while allowing the learner-facing deliverable brief to be shorter than the underlying full practice guide.
- Added one specifically labelled SIMULATED worked example to each of the 28 elective chapters; the elective validation register records `WORKED_EXAMPLE_ENRICHED_FIRST_PASS`. This is a draft enrichment only, not substantive acceptance or SME approval.

## 6. Remaining acceptance gaps and release decision

**Technical structural/render checks: VERIFIED for the exact source SHA above. Product acceptance: NOT READY. Controlled learner pilot: BLOCKED / NOT APPROVED. General release: NOT READY.**

The following are still open or blocked:

1. Substantive independent technical/editorial/SME review of all 169 Core chapters and six Common Foundation lessons.
2. Formal objective-to-source fit, actual URL usability, Indonesia access, language, account eligibility and cost decisions for all 169 resource-fit rows.
3. Correctness, ambiguity, answer rationale, sources and SME review for all 507 Q&A items. Keep reflective/non-scored.
4. Calibration, sample learner artifact pilot, assessor agreement and SME approval for all 169 rubrics; the proposed 80/100 threshold is not calibrated.
5. Current employer-hosted JD, role specificity, seniority, geography and chapter competency validation for all 80 agency cells.
6. Technical accuracy, source fit, local market/legal review, answer-key/editorial review, rubric calibration, workload and SME validation for 28 elective chapters and 56 elective checks.
7. Authenticated hosted Preview inspection; manual contrast, keyboard, screen-reader and full WCAG 2.2 AA assessment.
8. Five historical track-summary score discrepancies and the missing standalone S0 AutoClaw prompt provenance or explicit owner disposition.
9. A real controlled learner pilot (ordinarily 5–10 participants) with feedback, completion/time/confusion/assessment/resource/credential/portfolio observations and closure of pilot P0/P1 findings.
10. Explicit owner approval before PR merge or production release.

**Safety boundary:** PR #7 remains OPEN / DRAFT / UNMERGED. Production remains at its previously deployed `main` commit `640b1924a6b200fac83df1dcac1ddd1e8b9ea61d`. No main mutation, merge, production deployment, DPA certificate issuance or public claim of SME-approved completion has been performed or authorized.

This manifest is the canonical snapshot for this audit. New commits must append a dated delta and preserve earlier snapshots; do not silently replace historic evidence or interpret automation as substantive acceptance.


## 22 November 2026 — documentation synchronization delta (15:48 WIB)

The reviewed code/validator baseline remains `c3d603fa0e64efe1f80f5bfe53577bb03fdd5677`. Eight commits after that snapshot change only six documentation files (README, this manifest, Source of Truth, acceptance register, findings register, and platform-update audit); no app/runtime, chapter guide, validator or test-script file changed in this delta. The current full PR branch HEAD is therefore **`94a6a33afa299a33cf1fd9560210d9b47f144ea4`**, with **653 commits ahead / 0 behind**, 191 changed files, 71,440 additions and 367 deletions. Merge-base remains the main SHA above.

The final documentation-synchronized HEAD `94a6a33` was itself re-validated:

| Workflow | Run | Exact source head | Result |
|---|---:|---|---|
| DPA Guide Registry / Browser QA (push) | [45004576061](https://github.com/putratryarga/putratryarga-dpa/actions/runs/45004576061) | `94a6a33` | SUCCESS |
| DPA Remediation Static QA (push) | [45004576105](https://github.com/putratryarga/putratyarga-dpa/actions/runs/45004576105) | `94a6a33` | SUCCESS |
| DPA Quiz Engine QA (push) | [45004575997](https://github.com/putratryarga/putratryarga-dpa/actions/runs/45004575997) | `94a6a33` | SUCCESS |
| DPA Guide Registry / Browser QA (PR context) | [45004579782](https://github.com/putratryarga/putratryarga-dpa/actions/runs/45004579782) | PR head `94a6a33` | SUCCESS |

The exact-head browser artifact is [14746384331](https://github.com/putratryarga/putratryarga-dpa/actions/runs/45004576061/artifacts/14746384331), SHA-256 `26e40a800c463f768effff618eee4b5da7f8f1b2f0a8bae3d19eef5c87cb25a2`. It reports 175 rendered panels, 16 role switches, no desktop/mobile card overlap, 390px viewport/document width, zero console/request/HTTP failures, and at least two unique HTTP(S) source links per panel.

**Current Preview:** deployment `dpl_tZn1BPdDw1gC3ymxuFvXeJDAXJi5` is READY from exact branch HEAD `94a6a33`: [`putratryarga-okbuzax5m-elric3.vercel.app`](https://putratyarga-okbuzax5m-elric3.vercel.app/). Vercel status is SUCCESS.

The Preview is still protected by project SSO for its deployment hostname. These results establish exact-source CI and deployment provenance, not authenticated hosted human review, full WCAG 2.2 AA, learner acceptance or SME acceptance. Production remains on the previously deployed main SHA and was not modified.
