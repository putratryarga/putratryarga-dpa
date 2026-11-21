# DPA — Final Audit & Release Handoff (21 November 2026)

**Purpose:** One consolidated handoff for the current release-review branch, covering verified completion, formal blockers, Copilot update decisions, CI/browser evidence and the shortest route to audience release.

## 1. Decision

**READY FOR REVIEW ONLY**

DPA can be shared with qualified SMEs and internal reviewers as a clearly labelled **v11.2 Review Candidate**. It is **not READY FOR AUDIENCE**. Static QA and Guide/Browser QA pass on reviewed branch head `bc778f1`; Quiz Engine QA passed on parent source/validator commit `1787b0d` and no quiz/application code changed afterward. Formal content acceptance and owner decisions remain open. Production has not been merged, promoted or deployed, and no credential issuance is authorised.

## 2. Scope lock

- 16 Core Specialist Tracks + 2 Advanced Electives.
- Common Foundation CF1–CF6 is shared, not a separate pathway.
- Affiliate and Community remain separate core tracks.
- Elective 17 is CRO / Growth / Experience Optimization; Elective 18 is Traditional Media Planning & Buying.
- Fintech / Digital Banking is deferred as a cross-sector case pack. Do not add a third elective without an owner-approved architecture change.

## 3. Verified state

| Area | Current evidence | Status / boundary |
|---|---|---|
| Track architecture | 16 core tracks | Present; external role/JD validation is incomplete |
| Core chapters | 169 unique canonical IDs + 6 CF | Structural inventory reconciled; content correctness needs SME review |
| Guide registry | 169/169 guide IDs | Exact-head validator PASS; generator fallback still used in 12 tracks |
| Chapter browser panels | 175/175 | Playwright PASS on exact test SHA |
| Role selection | 16/16 opened | Selected role + CF only; zero role-card overlap at 1440px and 390px |
| Resource mapping | 169 rows | Mapping complete; formal objective-fit decisions 169/169 OPEN |
| Source-fit desk reviews | 169/169 | 16 track registers; T05/T06/T11/T12/T15 all first-pass PARTIAL. Formal objective acceptance remains OPEN |
| Core Q&A | 507 rows | Answer/editorial/SME status 507/507 OPEN |
| Agency role evidence | 80 cells | Coverage ledger exists; all formal validation fields 80/80 OPEN |
| Rubrics | 169 rows | Technical calibration/SME/assessor pilot still OPEN |
| Advanced electives | 28 chapters | 14 + 14; all PARTIAL, not advanced-content accepted |
| Elective checks | 56 items | Source/editorial/SME review OPEN |
| Quiz engine | 3 synthetic questions | Deterministic + browser/axe tests PASS; not the 507 Q&A, not summative, not credential issuance |
| Browser defects | 0 page errors, 0 console errors, 0 failed requests and 0 HTTP failures in exact-head run | Repository-local test only; authenticated hosted preview remains to be inspected |

## 4. Commits and CI evidence

Working branch: `audit/dpa-release-readiness-2026-11-21`.

Source/validator commit: `1787b0d2d2b8faac995b4d84208024801a972992`. Reviewed docs/source reconciliation revision: `bc778f134feb9e7741e4d32cbdf5c27def5e15b0`.

Static and Guide/Browser workflows passed on current branch head `bc778f134feb9e7741e4d32cbdf5c27def5e15b0`; Quiz Engine passed on `1787b0d2d2b8faac995b4d84208024801a972992`, with only documentation changes afterward:

- [Static QA — run 44850970968](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44850970968)
- [Guide Registry + Browser QA — run 44850970724](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44850970724)
- [Quiz Engine QA — run 44850753308](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44850753308)

Browser report + screenshots: [artifact 14685401315](https://github.com/putratryarga/putratryarga-dpa/actions/runs/44850970724/artifacts/14685401315). The JSON contains 175 chapter rows, commit SHA `bc778f1…`, and run ID `44850970724`; all non-empty-content, role-overlap, mobile overflow and error-count checks pass. This is stronger and more reproducible than the previously cited local-only `qa-out/browser-qa.json` report.

The test scope is deliberately bounded: 1440px desktop and 390px mobile, role switching, chapter panel structure, guide identity, source-link presence and browser errors. It does not constitute authenticated Vercel Preview review, full cross-browser review, or expert content approval.

### Current Vercel Preview (verified 21 November 2026)

Current release branch has a Vercel Preview in **READY** state: [deployment inspection](https://vercel.com/elric3/putratryarga-dpa/AjHQNYhG8fQ3j7X59ZNzohDdAUeS) · [preview URL](https://putratryarga-clljkrz62-elric3.vercel.app/). Deployment `dpl_AjHQNYhG8fQ3j7X59ZNzohDdAUeS` is tied to reviewed revision `bc778f134feb9e7741e4d32cbdf5c27def5e15b0`; authenticated fetch returned HTTP 200 with v11.2 review-candidate metadata and the 16+2 architecture. It is Preview only; latest production deployment remains on `main` at `640b1924a6b200fac83df1dcac1ddd1e8b9ea61d`. Human authenticated visual/accessibility review remains open.

## 5. Remediation completed in this branch

1. Added T05 Paid Social (10), T11 SEO/AEO/GEO (10) and T15 Affiliate/Social Commerce (12) chapter-level source-fit review registers, each with chapter evidence, material gaps, next actions and explicit PARTIAL/OPEN dispositions.
2. Updated the 169-objective master register for the 22 T06/T12 records; first-pass desk-review coverage is now 169/169. These AI-assisted records are PARTIAL, not independent reviewer or SME approval.
3. Extended the audit-register validator to require T05/T06/T11/T12/T15 registers and 169/169 first-pass desk-review records.
4. Fixed the chapter-ID reconciliation script to count only lines matching `DPA-Txx-CHxx`; the three comment lines no longer inflate the count to 172.
5. Corrected website structured data: removed the universal `P12W` duration, added `dateModified`, version and pathway `hasPart` declarations. Visible version is v11.2 Review Candidate.
6. Added a documented AI-era/Copilot recommendation audit, an end-to-end runbook and a consolidated register reconciliation.
7. Enabled the three CI workflows on this release branch and added upload of exact-head browser JSON/screenshots.

## 6. Copilot 365 recommendations: accepted and corrected

**Accepted for curriculum remediation:**
- Embed conversion signal quality, first/secondary conversions, first-party data, consent/privacy, attribution limits, incrementality, AI governance and human review across existing CF1–CF6.
- Update T04 Paid Search for AI Max, search-term matching, text customisation, final URL expansion, brand/negative controls, landing-page readiness, conversion value and migration governance.
- Update T05 Paid Social for Smart+ full/partial/manual modes, Spark Ads authorisation, creator rights/disclosure and creative-control governance.
- Add AI-search discovery sampling to T02/T03/T11/T13, and stronger experimentation/causal reasoning in T10.
- Strengthen T09 Ad Ops launch QA, permission, URL, tracking, incident, pacing, discrepancy and post-buy controls.
- Standardise credential audit fields and clarify free core learning versus paid exams/licenses/ad spend.

**Corrections from official sources:**
- Google DSA automatic migration is now February 2027; September 2026 was the phase for campaign-level broad match and standalone Automatically Created Assets. Do not collapse these migrations into one date. [Google DSA migration](https://developers.google.com/ads/blog/posts/2026/06/dynamic-search-ads-dsa-automigration) · [Google campaign broad/ACA migration](https://developers.google.com/ads/blog/posts/2026/08/migrate-campaign-level-broad-match-and). 
- TikTok Smart+ upgraded experience supports full automation, partial automation or manual control, but TikTok says it may not be available to all accounts. [TikTok Smart+ official update](https://ads.tiktok.com/resources/help/article/about-updates-to-smart-plus?lang=en).
- OpenAI Ads Manager's current country list includes Indonesia for self-service, but the advertiser/billing legal entity must be based in a listed country. This does not guarantee account onboarding or approval. Sponsored Agents remain limited alpha for selected advertisers. [OpenAI Ads Manager availability](https://help.openai.com/en/articles/20001245-ads-manager-availability) · [Sponsored Agents availability](https://help.openai.com/en/articles/20001524-sponsored-agents-in-chatgpt-ads).
- OpenAI Academy badges require course completion and an assessment score of at least 80%; eligible pathway certificates require all course assessments. Neither is a professional certification. [OpenAI Academy course and badge rules](https://help.openai.com/en/articles/20001270-openai-academy-courses).
- Microsoft Advertising has three certification routes and eight learning paths; all three certifications lead to Microsoft Advertising Certified Expert. Learning-path badges are separate from certification. [Microsoft Advertising Learning Lab](https://about.ads.microsoft.com/en/resources/training-certification/learning-lab).

**Deferred:** fintech/digital banking as a new third elective; role-fit assessment; progress export/filter enhancements. Fintech remains a case pack inside the existing 16+2 architecture unless the owner changes scope.

## 7. Remaining blockers — what still prevents audience release

| Priority | Work remaining | Required evidence / owner |
|---|---|---|
| P1 | Independent acceptance of T06 + T12 (22 PARTIAL records) | Qualified reviewers validate exact source sections, Indonesia/account access, technical accuracy and record formal dispositions |
| P1 | Formal acceptance of 169 resource fits | Qualified domain reviewer per relevant track; exact evidence, local access, language/cost/account eligibility, date and disposition |
| P1 | Review 507 Q&A | Editorial + technical SME; approve answer, accepted alternatives, source and disposition. Keep non-scored until then |
| P1 | Validate 80 agency role cells | Current direct/official JD, employer, location, seniority, expiry/currentness, competency linkage and reviewer sign-off |
| P1 | Calibrate 169 learner rubrics | Technical/SME review, assessor pilot, inter-rater agreement and resubmission policy |
| P1 | Deepen 28 elective chapters + validate 56 checks | Worked calculations, methods, local evidence, answer/source review and learner pilot; all 28 remain PARTIAL |
| P1 | Authenticated Vercel Preview review | Open actual preview, inspect desktop/mobile with auth, record deployment ID/SHA/screenshots/accessibility findings |
| P2 | S0 / HIST-001 / HIST-002 | Recover original Master Prompt/discrepancy artefacts or obtain owner-signed baseline declaration |
| P2 | Production release | Owner sign-off, PR review, release tag and separate production authorisation |
| P3 | Evidence decay / freshness | Refresh expired agency evidence; perform fresh post-fix URL audit |
| P3 | Guide fallback depth in 12 tracks | Continue chapter-specific authored guide content; don't equate generated registry presence with authored depth |

## 8. Fastest honest path to completion

1. Assign qualified reviewers to accept/revise the 22 T06/T12 PARTIAL desk reviews; then formally accept all 169 objective-resource fits.
2. Batch SME acceptance by track for 169 sources, 507 Q&A, 169 rubrics and 28 elective chapters/56 checks; keep every decision traceable and dated.
3. Obtain owner decision for historical blockers: recover originals or sign a new baseline statement.
4. Complete authenticated Vercel Preview inspection and refresh the post-fix URL audit.
5. After all mandatory gates are closed, open/review PR, tag release and request production approval separately.

**Until these are done: review-candidate status only; no public audience release and no DPA credential issuance.**
