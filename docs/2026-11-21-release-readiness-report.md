# DPA Release-Readiness Report — 21 November 2026 (final audit update)

**Branch:** `audit/dpa-release-readiness-2026-11-21`  
**Exact-head CI/browser test SHA:** `5c44ec881b282a8665028833283cdc5048943abb`  
**Verdict:** **READY FOR REVIEW ONLY — NOT READY FOR AUDIENCE**  
**Production:** untouched; no merge to main, no production promotion/deploy, no certificate issuance.

## A. Executive verdict

The missing T05, T11 and T15 source-fit desk-review registers have been added. They contain 32 AI-assisted first-pass records, all classified PARTIAL, with every formal acceptance field OPEN. First-pass source-fit review coverage is now 147/169. T06 (12 chapters) and T12 (10 chapters) remain without source-fit desk-review registers.

The exact-head technical and browser tests have now run successfully on `5c44ec881b282a8665028833283cdc5048943abb`. This closes the earlier evidence gap for deterministic validators, guide registry, role switching, browser chapter rendering, and the synthetic-only quiz workflow. It does **not** close independent SME review, owner baseline decisions, rubric validation, learner pilots, current employer/JD validation, or authenticated Vercel Preview review.

**The programme is ready to be sent to qualified reviewers as a review candidate. It is not ready to be advertised as fully validated or released to a general audience.**

## B. Corrected content and register coverage

| Area | Verified count/status | Interpretation |
|---|---:|---|
| Core architecture | 16 tracks | Canonical core scope present; job/competency acceptance still open |
| Advanced electives | 2 × 14 = 28 chapters | Separate audit coverage; all 28 remain PARTIAL |
| Core chapter IDs | 169 unique + 6 Common Foundation | 172 non-empty lines include 3 comments; canonical ID pattern yields 169 |
| Chapter-resource mapping | 169 rows | Mapping exists; not formal source-fit approval |
| First-pass source-fit review | 147/169 | T05/T11/T15 registers added; T06 (12) and T12 (10) remain |
| Objective-level formal fit | 169/169 OPEN | Indonesia access, language, cost and eligibility require qualified review |
| Core Q&A | 507/507 OPEN | Answer, editorial and SME status remain open |
| Agency cells | 80/80 OPEN | Coverage ledger exists; employer JD, currentness and competency validation remain open |
| Rubrics | 169/169 OPEN | Calibration, SME, assessor-pilot and inter-rater decisions remain open |
| Elective knowledge checks | 56/56 OPEN | No scored/approved status |
| Link-audit snapshot | 361 URLs | The snapshot predates the final link corrections and needs a fresh post-fix audit |

**Inventory correction:** the 169-ID text file has 172 non-empty lines because it includes three comments. Only 169 lines conform to the canonical `DPA-Txx-CHxx` pattern. The reconciliation script has been fixed to exclude comments.

## C. Work committed to this review branch

1. Added T05 Paid Social (10), T11 SEO/AEO/GEO (10) and T15 Affiliate/Social Commerce (12) source-fit Markdown and CSV registers. Each is explicitly PARTIAL; independent reviewer, Indonesia access, technical accuracy, SME and learner-pilot fields remain OPEN.
2. Updated the 169-row objective-resource master with the 32 first-pass dispositions. Formal objective-fit/access/language-cost states remain OPEN.
3. Updated `scripts/validate-dpa-audit-registers.js` to validate all 147 first-pass source-fit rows.
4. Corrected `scripts/_reconcile.py` to count canonical IDs only.
5. Added the official-source audit of Copilot 365 recommendations and an end-to-end remediation runbook.
6. Updated website structured data: removed the universal `P12W` duration; added `dateModified`, review-candidate version, pathway-level educational-level description and `hasPart` entries. Visible label is v11.2 Review Candidate; not a production release label.
7. Added exact-head browser evidence generation and artifact upload to the Guide Registry workflow. Static, browser and quiz workflows now trigger on this release branch.

## D. Exact-head CI and browser evidence

All three GitHub Actions workflows completed **SUCCESS** on the same commit `5c44ec881b282a8665028833283cdc5048943abb`:

| Gate | Workflow run | Result |
|---|---|---|
| Static validators / register parity / chapter depth / synthetic score-script self-test | [44807317578](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44807317578) | SUCCESS |
| Guide registry + Playwright browser QA | [44807317638](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44807317638) | SUCCESS |
| Synthetic-only quiz engine + Playwright/axe | [44807317620](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44807317620) | SUCCESS |

The browser report and screenshots are preserved in artifact [dpa-browser-qa-5c44ec881b282a8665028833283cdc5048943abb](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44807317638/artifacts/14663148340) (artifact ID `14663148340`, 30-day retention). The JSON records:

- 169 core chapters + 6 Common Foundation = 175 rendered learning panels.
- 169/169 authored guide registry IDs; 16/16 role paths opened.
- Only the selected track and Common Foundation are visible after role selection.
- 16 role cards visible with zero geometric overlap on desktop and mobile.
- Every one of 175 panels has material, non-empty concept/example/practice, learning steps, knowledge checks, mapped HTTP(S) links and non-empty learning folds.
- 390px mobile viewport equals 390px document width; Paid Social panel visible and within viewport.
- Zero page errors, zero console errors, zero failed requests and zero HTTP error responses during this browser run.

The same JSON and two screenshots (`desktop-role-picker.png`, `mobile-paid-social.png`) are inside the workflow artifact. The quiz workflow separately passed deterministic engine tests, Playwright interaction, targeted WCAG 2.2 axe checks, keyboard radio navigation, mobile overflow and synthetic-only/no-persistence/no-network controls. Quiz coverage is a three-item synthetic prototype, not the 507-item curriculum assessment.

**Boundary:** these checks establish repository-local browser/runtime behavior at the tested desktop (1440px) and mobile (390px) configurations. They do not replace authenticated review of the deployed Vercel Preview, nor do they validate learning content accuracy or SME acceptance.

## E. Remaining blockers

| ID | Priority | Outstanding issue | Required closure evidence |
|---|---|---|---|
| O-1 | P1 | T06 and T12 source-fit desk reviews (22 chapters) | Chapter-specific source-fit Markdown/CSV and master-register reconciliation |
| O-2 | P1 | 169 formal resource-fit decisions | Qualified reviewer, exact source excerpt, objective-fit decision, Indonesia access, language/cost/account eligibility and dated disposition |
| O-3 | P1 | 507 Q&A answer/editorial/SME reviews | Named reviewer, approved answer guidance, sources, accepted alternatives, review date and disposition |
| O-4 | P1 | 80 agency role cells | Current direct/official JD, employer identity, geography, seniority, currentness and chapter-competency decision |
| O-5 | P1 | 169 rubrics | Technical calibration, SME approval, assessor pilot, inter-rater evidence and resubmission policy |
| O-6 | P1 | 28 elective chapters + 56 knowledge checks | Deeper worked methods/calculations, Indonesia fit, source validation, SME approval and learner pilot; all chapters currently PARTIAL |
| O-7 | P1 | Authenticated Vercel Preview review | Named reviewer inspects the actual preview at desktop/mobile, records deployment ID/SHA, screenshots and accessibility findings |
| O-8 | P2 | S0 / HIST-001 / HIST-002 historical baseline blockers | Recover original prompt/discrepancy artefacts or obtain owner-signed new-baseline declaration |
| O-9 | P2 | Final release approval | Owner sign-off, independent PR review, release tag and separate production authorisation |
| O-10 | P3 | Evidence decay | Refresh two expired/unresolvable agency/job evidence routes and run a fresh post-fix URL audit |
| O-11 | P3 | 12 generator-fallback tracks | Continue chapter-specific authored guide work; the 169/169 registry pass is identity/structure coverage, not proof all guides are hand-authored |

## F. Audience and credential verdict

**NOT READY FOR AUDIENCE.** No DPA certificate, badge or track-achievement issuance is authorised. The credential issuance specification remains design-only; summative assessment approval, issuer policy, privacy/security review and trusted backend are prerequisites.

## G. Immediate closure path

1. Complete T06/T12 first-pass source-fit reviews, then independent acceptance of all 169 resource mappings.
2. Run SME/editorial batches for 507 Q&A, 169 rubrics, 80 agency cells, 28 electives and 56 checks.
3. Resolve historical source blockers with original artefact recovery or owner-signed baseline declaration.
4. Complete authenticated Vercel Preview review and fresh post-fix link audit.
5. Only after the mandatory gates pass, submit a reviewed PR/tag and request separate production authorisation.
