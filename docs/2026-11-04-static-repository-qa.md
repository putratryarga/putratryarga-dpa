# 5 November 2026 — Static Repository QA Report

**Target:** remediation branch `audit/full-dpa-remediation-2026-11-05`, derived from PR #5 and containing PR #6's unique advanced-elective source document.  
**Method:** GitHub source-file inspection and deterministic string/ID reconciliation. This is static QA only; it does not simulate browser rendering or user interaction.

## Results

**Current target:** remediation branch `audit/full-dpa-remediation-2026-11-05` at commit `bcca5021f83037edf07710c4d8805f13d794e80b`. All figures below are static-source checks, not browser/runtime behavior.

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

| Agency evidence matrix | 80 unique cells; A37/B20/D37/G5; 19 compound labels; 4 pure G + 1 B/G | STRUCTURE VERIFIED — competency/JD validation remains PARTIAL |

| Elective evidence groups | 10 agency × elective rows (5 groups × 2 electives) | STRUCTURE VERIFIED — content validation remains PENDING |
| Canonical chapter ID inventory | 169 unique IDs | STRUCTURE VERIFIED — score recomputation blocked by missing raw vectors |
| Automated validator script | Includes chapter, matrix, Q&A, resource and media-query checks | ADDED — execution not verified in local Node runtime |

## Not tested / release blockers

- No authenticated PR preview browser session was available. The connected local Browser tool could not access the originating browser context.
- Cloud browser/deep-research automation returned an insufficient-funds / empty-wallet response; no browser run was started.
- No desktop/mobile screenshot inspection, real click/keyboard navigation, role-selector interaction, localStorage persistence round-trip, theme toggle, accessibility-tree inspection, console/network test or cross-browser regression was performed.
- The latest known Vercel status check on remediation commit `bcca5021...` is **FAILURE due to build-rate-limit** (upgrade/build-rate-limit target), not a successful deployment. No GitHub Actions workflow runs are associated with this commit.
- External resource-link availability, redirect chains, locale access, regional price and credential expiry are not proven by static presence.

**Branch relationship:** `main` is `640b1924...`; remediation is 126 commits ahead / 6 behind with merge base `cc54ac2934f8b806e7fecd62123d5dca7ee38170`. Six main-side commits contain crosswalk and role/elective documentation changes; the remediation branch contains revised counterparts. No history merge/rebase was performed. PR #5/#6 remain draft/open/unmerged.

**Release decision:** STATIC SOURCE CHECKS PASS only for the listed counts; BROWSER/RUNTIME QA NOT RUN; VERCEL PREVIEW CHECK BLOCKED BY BUILD RATE LIMIT; BRANCH BASE RELATIONSHIP REQUIRES FINAL RECONCILIATION; NOT READY TO MERGE.
