# DPA A–F Workstream Reconciliation

**Assessment date:** 21 November 2026 (Asia/Bangkok)
**Candidate branch:** `audit/dpa-end-to-end-completion-2026-11-21`
**Tested candidate:** `062fc814c3bd5a29292de9e3783c6ca56856616b`
**Verdict:** **NOT READY** for audience release. Local tests passed at this exact candidate; formal curriculum, SME, human accessibility and release approvals remain open.

## Recovered execution state

The local recovery branch contains the previously interrupted integration work that was absent from the verified remote PR head. It includes route proposal/integration commits, guide additions, Q&A and elective review batches, browser QA work, and the D workstream's 273-row URL recheck. The old PR head remains a clean ancestor; the branch is local and contains 12 commits ahead of its recorded remote head before the final commits in this recovery pass. No destructive reset, force-push, PR merge, `main` change, production deployment or credential issuance was performed.

## A–F findings

| Stream | Reconciled state | Actual result | Open acceptance |
|---|---|---|---|
| **A — credentials** | 43 proposal dispositions were reconciled with the integration. Runtime has 51 unique issuer routes. | Core 161/169 chapters mapped, 224 placements; eight chapters retain applied/portfolio fallback. Common Foundation 4/6 mapped, five placements. CSV has 175 distinct core+CF rows and now matches runtime routes, notes and first-pass status. | All mapping is first-pass. Issuer terms, regional access and chapter fit are not SME accepted. T08-CH08 remains without a selected route. |
| **B — learning content** | Nine Part 4 guides for T03/T08/T10 were repaired, explicitly loaded and overlaid by stable chapter ID. | Each has five steps, three checks and four terms. Q&A syntax errors were repaired. | These are core guides, not CF lessons. Other guide content can still use generic fallbacks. The six CF chapters remain outline + deliverable rather than full lessons. Editorial and SME acceptance remain open. |
| **C — Q&A and rubrics** | 507 Q&A rows and 169 rubrics are present and structurally reconciled. | 507 machine checks pass; no exact duplicates/parity mismatches, four fuzzy pairs (eight items), and a 60-item stratified desk sample is consistent with its guide. 168/169 rubrics use shared generic criteria. | All 507 answer/editorial/source decisions are pending SME review. All 169 rubrics need calibration, reviewer approval, learner-work pilot and inter-rater evidence. Threshold 80/100 is uncalibrated. |
| **D — resources, URLs, agencies** | 273 URL recheck observations were independently recounted and the report arithmetic corrected. | Results: 123 HTTP 2xx, 20 valid redirects, 41 local TLS-trust observations, 68 bot-block 429, 11 HTTP 404, one DNS failure, four HTTP 400, three bot-block 403, one forbidden 403, one timeout. The four official issuer/resource pages reviewed in this pass are cited in the source-provenance register. | 13 likely-failure candidates remain (11×404, DNS, timeout); bot blocks are inconclusive. The 169 objective-fit/access fields remain NOT ASSESSED in this run. Of 80 agency cells, 39 are employer-explicit and 41 index/inferred; all currentness, specificity, geography and seniority approvals remain open. |
| **E — advanced electives** | 28 chapters and 56 checks were re-counted. | Both separate electives remain in the 16+2 architecture. | All 28 chapters remain partial/open; all 56 checks are reflective and unscored. No elective acceptance or calibration. |
| **F — engineering and learner QA** | Six local validators/tests plus a browser run were executed on the exact candidate SHA shown above. | All six local checks pass. Browser: 16/16 roles open, 175 milestone panels present, seven widths pass with zero horizontal overflow, no script/page errors, first Tab reaches the skip link, and axe reports zero WCAG 2 A/AA violations across two views. The 165 credential cards cover 165 chapters, 10 show the portfolio-first state, maximum three cards/chapter. | Axe leaves one color-contrast node incomplete per view; this is not an axe failure, but needs manual contrast review. No screen-reader test or authenticated hosted Preview review is included. |

## Reconciliation decisions

- The original Google Ads Skillshop subpath was directly rechecked and returns 404. Current public Skillshop root works and lists Google Ads, Google Marketing Platform and Analytics; learner links were switched to the root.
- The Trade Desk's Programmatic Supply Chain course is used as **Learn-only** because the official page describes free instruction but does not establish an award for that exact course.
- The proposed Microsoft Azure SQL Fundamentals path is no longer active. Microsoft has a separate Applied Skills credential for Azure SQL application development, assessed through an interactive lab; its developer scope is not automatically mapped to T12 customer-data architecture.
- The current Semrush technical SEO/AI-search course describes a course certificate and a final assessment. It is recorded as a vendor course credential, not an industry license.
- The 4 November historical archive is recovered and checksummed. All 169 chapter row scores recompute; five track-level means in the historical report disagree with the raw matrix and remain a documented historical discrepancy. The standalone original AutoClaw Master Prompt remains NOT RECOVERED.

## Release gate summary

**Technical:** PASS for the local deterministic and browser scope at the tested SHA; hosted Preview and manual accessibility remain OPEN.
**Curriculum/editorial:** OPEN; CF and electives are materially incomplete.
**Credential/professional integrity:** PARTIAL; integration is structurally consistent but unapproved.
**Learner experience/accessibility:** PARTIAL; automated local checks do not replace manual accessibility or authenticated preview review.
**Owner/SME:** OPEN; historical discrepancies, curriculum, answers, rubrics, agencies and release authorization need named human decisions.

## Exact-SHA evidence and artifacts

The local regression commands `validate-dpa-static`, `validate-dpa-audit-registers`, `validate-dpa-guide-registry`, `audit-dpa-chapter-depth`, `test-dpa-quiz-engine` and `test-dpa-content-uniqueness.cjs` all exited 0 on `062fc814c3bd5a29292de9e3783c6ca56856616b`; JavaScript syntax checks also passed. The Playwright/axe runner passed on that exact SHA. Machine-readable result is saved in the task-level `outputs` folder outside this repository (SHA-256 `80D060C057044145A5CF4EC69DF5DF436EC1423A4E5338184D5B4CF5EF82E550`). Screenshots were visually checked and the transient role-change toast is fully gone from both captures: 390px mobile and 1366px desktop.

The browser run does not request every external URL, inspect authenticated provider accounts or test a hosted deployment. Axe marked one contrast target per run as **incomplete**; manual color/contrast and assistive-technology review is still needed. No GitHub Actions run was created by these local checks; remote CI must be checked after any branch push.
