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

## Score recalculation — BLOCKED
Seven raw dimensions (0–4) are required for each of 169 chapters. The complete raw-vector matrix was not found in the inspected repository tree or accessible Library files. The AutoClaw execution transcript reports that 40 scores were recalculated locally, but its files/commit were not retrievable in this repository. This branch does not claim a full 169-score recalculation.

A deterministic script is provided at `scripts/recalculate-chapter-audit-scores.py`. It requires `chapter_id`, `track_id`, and `dim_1..dim_7`; it rejects missing, duplicate, out-of-range or invalid vectors and never imputes. Full scorecard reconciliation remains BLOCKED pending the authoritative raw matrix.

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

## Open gates
1. Recalculate all 169 chapter scores from authoritative raw vectors and reconcile all totals.
2. Recover/disposition all 23 issue rows and D-1…D-12.
3. Audit all 90 role-evidence cells at source/JD level.
4. Validate all 169 resources for chapter-objective fit and Indonesia access/language/price.
5. Complete independent SME review for 169 chapters and legacy guide families.
6. Validate all 507 answer keys and alternate answers; calibrate rubrics.
7. Develop/validate all elective chapters before calling them complete.
8. Run authenticated browser/runtime QA and obtain build/preview success without production deployment.
9. Re-read all changed files and run final static checks on the exact final SHA.

**Release decision: NOT READY — source-level remediation is partly implemented; multiple gates remain open or blocked.**
