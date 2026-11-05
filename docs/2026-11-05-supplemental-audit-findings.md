# Supplemental Audit Findings — 5 November 2026

**Status:** New independent findings from the 5 November remediation pass.  
**Scope:** Findings newly evidenced during this pass only.  
**Critical provenance rule:** This register does **not** reconstruct, replace, renumber or close the historical 23 findings or D-1…D-12 discrepancy log. Those original records remain missing and pending recovery.

## Finding register

| ID | Area | Finding and evidence | Disposition | Closure evidence / next action |
|---|---|---|---|---|
| SRC-001 | Resource map / publisher identity | Multiple captions named a publisher or resource family not represented by the linked URL (e.g. Track 05 TikTok Academy had been called LinkedIn Marketing Academy; Track 06 StackAdapt had been called IAB; Track 03 Edge Academy had been called Google Skillshop). | FIXED — source label correction | Corrected track-level labels in docs/169-chapter-resource-mapping.md; verified 169 chapter rows and 39 unique URLs after targeted enrichment. Recheck publisher identity on future URL changes. |
| SRC-002 | Creator resources | Track 14 combined a legacy TikTok One URL with a YouTube Brand Deal Desk label, but the destination did not provide the claimed YouTube source; TikTok route was stale/inaccessible in the earlier check. | FIXED — source routes corrected | Replaced TikTok destination with TikTok One for Creators help and added a separate official YouTube Creator Partnerships help URL. Recheck marketplace eligibility and rights at use time. |
| SRC-003 | Resource fit | 169 chapter rows used shared track-level sources; URL presence and row coverage had been at risk of being interpreted as proof of exact objective fit. | OPEN — objective-level sign-off required | docs/169-chapter-resource-fit-review.md adds 16-track desk assessment and explicit per-chapter sign-off schema. Review all 169 objectives with exact source modules and independent reviewer decisions. |
| SRC-004 | T08 Media Owner / Publisher / Supply | Google Marketing Platform support and IAB Tech Lab standards/measurement are technical/product sources; they do not adequately teach publisher rate cards, RFPs, offline media negotiation, IO terms, invoice disputes and makegoods. | OPEN — substantive resource gap | Add current Indonesian media-owner proposals, agency buying SOPs, contract/IO examples and authorized legal/procurement review. Keep simulated samples labeled. |
| SRC-005 | T03 Media Planning | Google Reach Planner is useful for YouTube/video forecasts but is not an Indonesia-wide TV/radio/OOH or cross-media audience currency. Offline audience and duplication methodology remain insufficiently sourced. | PARTIAL — targeted source added; local measurement open | Added Reach Planner to relevant chapter rows with scope caveats. Obtain current Indonesia measurement-provider methodology for each offline currency and document comparability/duplication. |
| SRC-006 | T07 Retail / Commerce Media | Walmart/Amazon sources do not directly establish Indonesian marketplace/RMN features. TikTok Shop Ads provides one local platform example but does not cover every retailer or seller account. | PARTIAL — local example added; platform comparison open | Added TikTok Shop Product Shopping Ads Indonesia to relevant chapters. Add current local marketplace documentation (including Shopee where accessible) and verify eligibility, feature, fees and measurement for each platform. |
| SRC-007 | T10 Analytics | GoogleSQL syntax documentation improves the SQL source route but is not a structured SQL, statistics, experimentation or causal-inference curriculum. | PARTIAL — technical reference added; learning pathway open | Added BigQuery GoogleSQL syntax for CH04. Add structured query practice and independent statistics/experimentation/econometrics learning resources; require executable query assertions. |
| SRC-008 | T13 Content | TikTok Creative Center and YouTube Analytics improve creative discovery and channel-performance coverage, but neither is a comprehensive neutral source for all organic content strategy or cross-platform audience research. | PARTIAL — focused sources added | Add independent editorial research, culture, copyright/usage rights, accessibility and organic platform guidance. Keep advertising trend evidence separate from organic prevalence claims. |
| SRC-009 | T16 Community | Current resource family is heavily Meta-centric and does not sufficiently cover cross-platform governance, crisis escalation, safety/moderation, social listening and customer care. | OPEN — resource and competency gap | Add independent community governance, moderation/safety, crisis, social-listening and customer-care sources; verify local policy and escalation practice. |
| ELEC-001 | Advanced electives | The 28 advanced elective chapters were previously architecture/outlines only. | FIXED — full first-pass written drafts authored; validation open | docs/28-advanced-elective-full-chapter-drafts.md contains 14 CRO + 14 Traditional Media chapters with lesson, workflow, practice, artifact, acceptance, Q&A, glossary and source caveats. Structural checks pass; SME, JD, resource, market and learner validation remain open. |
| SME-001 | Core assessment | The 507 Q&A/answer-guidance items and 169 chapter-specific rubric drafts are structurally present but not independently approved or calibrated. | OPEN — SME gate | Review correctness, completeness, ambiguity, alternate answers, critical failures and scoring anchors against authoritative sources. Record reviewer, version, disposition and change evidence per item/chapter. |
| AGENCY-001 | Agency evidence | The 80-cell × five-agency matrix is a coverage ledger; many cells rely on adjacent, index, historical or compound evidence. It is not 80 independent current JD validations or proof of every chapter competency. | PARTIAL — source/JD verification open | Preserve source geography, seniority, date and direct/adjacent classification. Independently validate all 80 cells and resolve the five G-marker gaps. |
| HIST-001 | Historical score inputs | No authoritative 169 × 7 raw score matrix was recovered in any of the 12 inspected repository branches or accessible Library sources. The normative source gives 0–4 scale and formula but does not define/name the seven audit dimensions. | BLOCKED — source recovery required | Recover versioned dimension definitions/anchors and original assessor-entered vectors. Blank collection template is at audit-inputs/169-chapter-audit-score-input-TEMPLATE.csv; it is not data and must not be scored. |
| HIST-002 | Historical issues / discrepancy log | The original 23 finding rows and D-1…D-12 records were not found in inspected repo branches, PR #5/#6 discussions/reviews or accessible Library sources. | BLOCKED — source recovery required | Request original report/export or source attachment from its author/system. Do not substitute this supplemental register or infer missing rows. |
| RUNTIME-001 | Browser QA | Preview returned HTTP 200, 169 unique chapter IDs and local JS assets returned HTTP 200; no authenticated browser interaction, DOM execution, role-switch, persistence, keyboard or accessibility-tree QA was performed. | OPEN — authenticated QA required | Run authenticated desktop/mobile browser tests and preserve screenshots, console/network evidence, test matrix and actual interaction outcomes. HTTP smoke is not a browser pass. |
| RUNTIME-002 | Preview build | Preview on source/resource commit f9def1a8c6a8b22568b38bd83c7c1086765418fb reached Vercel READY and GitHub status success. Later commits are documentation-only; do not infer their deployments from the earlier preview. | PARTIAL — code preview verified at earlier SHA | If a current branch-head preview is required, verify the new deployment maps to the latest commit and re-run HTTP/assets; do not promote to production without approvals. |
| CI-001 | CI evidence | A branch-only static QA workflow is present, but the workflow-run result is not independently retrievable through the available GitHub connector. | OPEN — run evidence unavailable | Obtain Actions run ID/job conclusion from GitHub Actions UI or a run-aware endpoint; preserve logs and exact SHA. Do not call the workflow passed because it exists. |

## Closure summary

| Status | Count |
|---|---:|
| FIXED (source corrections / full draft authorship) | 3 |
| PARTIAL (improvement exists, independent validation remains) | 6 |
| OPEN (review or runtime/CI action required) | 6 |
| BLOCKED (historical source records missing) | 2 |
| **Total supplemental findings** | **17** |

Counts apply only to this newly authored supplemental register. They are not the historical 23 findings or 12 discrepancies.

## Governance

- Every change must cite the affected chapter/file, current source and closure evidence.
- Do not change a finding to FIXED because a document or script exists; its acceptance evidence must be inspected.
- Do not close SME, source/JD, market/legal, browser or CI findings without the specified independent evidence.
- Keep the 169 core chapters separate from the two 14-chapter electives.
- The release decision remains **NOT READY — REMEDIATION INCOMPLETE** until all required release gates are evidenced.
