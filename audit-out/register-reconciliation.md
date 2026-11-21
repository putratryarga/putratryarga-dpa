# Register Reconciliation — 21 November 2026 (updated)

**Branch:** `audit/dpa-release-readiness-2026-11-21`  
**Method:** canonical-ID pattern filtering and reconciliation of the chapter, source-fit, answer, agency, rubric and elective registers. This reconciles coverage and status controls; it is not SME approval.

## Canonical coverage

| Control | Count | Interpretation |
|---|---:|---|
| Canonical core chapter IDs | 169 unique | 172 non-empty lines include 3 comments; 169 match `DPA-Txx-CHxx`. |
| Common Foundation | 6 chapters | Shared by core pathways; not an extra track. |
| Core architecture | 16 tracks | Affiliate and Community remain separate core tracks. |
| Advanced electives | 2 × 14 = 28 chapters | CRO/Growth and Traditional Media only; all 28 remain PARTIAL. |
| Chapter resource map | 169 unique rows | One mapping row per canonical chapter. |
| First-pass source-fit desk review | **169 / 169** | All 16 tracks now have chapter-level review registers; every disposition remains PARTIAL/PARTIAL_STRONG. |
| Objective resource-fit master register | 169 rows | Formal objective fit, Indonesia access, language/cost/account eligibility remain OPEN for every row. |
| Core Q&A | 507 rows | Answer, editorial and SME review OPEN for all 507. |
| Agency role cells | 80 unique | All five formal validation fields OPEN. |
| Rubric calibration | 169 rows | Technical calibration, SME and assessor-pilot statuses OPEN. |
| Elective knowledge checks | 56 items | Editorial/source/SME approval OPEN. |

## First-pass source-fit register coverage

| Track batch | Chapters | Disposition | Formal status |
|---|---:|---|---|
| T01 | 10 | PARTIAL | OPEN |
| T02 | 10 | PARTIAL | OPEN |
| T03 | 10 | PARTIAL | OPEN |
| T04 | 10 | PARTIAL | OPEN |
| T05 | 10 | PARTIAL | OPEN |
| T06 | 12 | PARTIAL | OPEN |
| T07 | 10 | PARTIAL | OPEN |
| T08 | 10 | PARTIAL | OPEN |
| T09 | 10 | PARTIAL | OPEN |
| T10 | 10 | PARTIAL | OPEN |
| T11 | 10 | PARTIAL | OPEN |
| T12 | 10 | PARTIAL | OPEN |
| T13 | 11 | PARTIAL | OPEN |
| T14 | 12 | PARTIAL/PARTIAL_STRONG | OPEN |
| T15 | 12 | PARTIAL | OPEN |
| T16 | 12 | PARTIAL | OPEN |
| **Total** | **169** | **First-pass desk review complete** | **Independent acceptance OPEN** |

T06 Programmatic adds IAB OpenRTB/supply-chain standards, DV360 auction operations and CM360/Floodlight references; T12 CRM/Lifecycle adds HubSpot/Salesforce workflow/data references, UU PDP 27/2022, WhatsApp Business Policy, Gmail sender guidance, RFC 8058, Consent Mode and cohort references. These sources are component-specific. They do not constitute one universal workflow, local legal opinion or SME validation. See the T06 and T12 review files for all caveats and chapter gaps.

## Status controls and release implications

- **169/169 first-pass desk reviews are PARTIAL, not PASS.** The status does not imply formal objective-source acceptance.
- 169/169 objective-level fit, Indonesia access, language/cost/account eligibility remain OPEN until qualified reviewer/date/evidence/disposition exists.
- 507/507 Q&A items remain OPEN for technical correctness, editorial quality and SME sign-off.
- 80/80 agency cells remain OPEN for employer JD, role specificity, currentness, geography/seniority and competency validation.
- 169/169 rubrics remain OPEN for technical calibration, SME approval, assessor pilot and inter-rater evidence.
- 28/28 elective chapters remain PARTIAL; 56/56 elective knowledge checks remain OPEN.
- Historical S0 / HIST-001 / HIST-002 remain BLOCKED pending original artefact recovery or an owner-signed new-baseline declaration.
- This reconciliation does not authorise audience release, certificate issuance, merge to `main` or production deployment.

## Credential-route registry fresh verification (21 November 2026, run 2)

Recomputed mechanically from `chapter-credential-routes.js`, `chapter-resources.js` and `docs/169-core-chapter-ids.txt` at head `b9157d8` — all checkpoint figures reproduce exactly:

| Control | Recomputed |
|---|---:|
| Issuer routes in `DPA_CREDENTIAL_REGISTRY` | 35 |
| Core chapters with ≥1 mapped Earn route | 136/169 |
| Core chapters without selected route | 33 |
| Core route placements | 194 |
| Common Foundation chapters mapped | 3/6 |
| Common Foundation placements | 4 |
| No-route fallbacks (33 core + 3 CF) | 36 |
| Core / CF resource-map rows | 169 / 6 |

Integrity: 0 orphan route references; 0 records missing provider/title/type/label/url/award/verifiedOn; 0 non-HTTPS URLs; 0 duplicate titles; 169 chapter-credential audit rows all marked `FIRST_PASS_MAPPING_NOT_SME_ACCEPTED`. Unused curated routes: `forage_omnichannel_certificate`, `meta_pixel_optimization_course`. This verification is structural only; award-type accuracy and Indonesia access remain OPEN pending SME acceptance.

A Static QA regression at the checkpoint head (validator @media snapshot 19/14 vs the intentional 20/15 after the credential-route mobile rule) was found by fresh verification and fixed in commit `05a2e27`; all three workflows are SUCCESS on that exact head (runs 44909093527, 44909093498/44909096872, 44909093485).
