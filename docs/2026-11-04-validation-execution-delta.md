# 4 November 2026 — Validation Execution Delta

**Purpose:** Record verified corrections and fresh source findings after the previous consolidated audit snapshot. This document supplements, and does not silently overwrite, the canonical Source of Truth.  
**Status:** ACTIVE AUDIT / NOT RELEASE-READY.

## 1. Repository corrections committed in this audit pass

- Fixed the canonical Source of Truth filename in `docs/16-core-track-role-crosswalk.md` and `docs/resource-credential-validation.md` on PR #5 and PR #6. Both now point to `docs/16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt`; the stale filename no longer appears in those two documents.
- Added `docs/169-chapter-assessment-rubrics-draft.md`. It contains 168 parsed chapter-specific rubric drafts from the register, each based on its actual learning objective and practice/deliverable prompt, with a proposed 5-dimension 0–3 scoring standard. It is **not** a completed 169-chapter rubric register; see the T16-CH12 supplement below.
- Added `docs/T16-CH12-register-correction-and-rubric-supplement.md` to both PR branches. It records the source-vs-register mismatch and provides the final chapter's correct Q&A, glossary and chapter-specific rubric draft.

## 2. Confirmed chapter extraction defect

Affected chapter: `DPA-T16-CH12 — Community Capstone`.

The guide source `role-study-guides-part3.js` contains valid question/answer and glossary arrays for this chapter. The evidence register `docs/169-chapter-evidence-register.md` currently displays literal `undefined` for all three Q&A pairs and four glossary entries. This indicates an extraction/register-generation defect, not missing source-guide content.

Correct values are recorded in `docs/T16-CH12-register-correction-and-rubric-supplement.md`. The main 169-chapter register still requires regeneration and a repository-wide scan for literal `undefined`. Until then, the register must not be called clean.

## 3. New employer-role evidence captured in this pass

Evidence class rules remain: A = employer-hosted direct job description; B = adjacent role; C = capability/service page; D = employer career-index/title or syndicated listing; G = no sufficiently specific evidence located in the current batch. A role title or job-board index does not validate every competency.

| Holding group | Track / role family | Evidence captured | Class and limits |
|---|---|---|---|
| WPP Media | Paid Search / SEM | Paid Search Executive and Paid Search Manager appear in WPP Media Madrid job index; WPP Media Jakarta Platform Executive – Paid Media & Performance explicitly includes Google Ads Search fundamentals, keyword/negative management and cross-channel campaign operations. | D for Madrid index; A for Jakarta role (search is one component of a cross-channel position). Do not treat the Jakarta role as a pure SEM JD. |
| WPP Media | Paid Social | Paid Social Manager / Senior Paid Social roles appear in employer job listings; the Senior Paid Social Executive JD describes activation, QA, pacing, optimization, reporting and multi-platform delivery. | D/A depending on listing; London/US examples are not Indonesian market proof. |
| WPP Media | Ad Operations | Executive – Ad Ops JD specifies tags, pixels, tracking code implementation/testing, trafficking, troubleshooting, web analytics and coordination with technical/creative/analytics teams. | A; global operations-centre role, not Indonesia-specific. |
| WPP Media | SEO / GEO | SEO Consultant and Experience (SEO, GEO) roles appear in current employer job indexes. | D; titles establish role-family presence, not complete technical depth. |
| WPP Media | KOL / Creator | Social and Influencer Executive JD covers creator shortlisting, briefing, deliverables, relationship workflow, content, product seeding and reporting. | A; Melbourne market and combined social/influencer role. |
| Publicis Media | Media Planning | Senior Digital Planning Manager Jakarta JD covers end-to-end planning across Search, Social, Programmatic and other digital channels, campaign setup, delivery, reporting, optimization, client presentation and team mentoring. | A; Jakarta and highly relevant to local curriculum. |
| Publicis Media | Performance Marketing | Media Performance Manager Jakarta JD covers paid media strategy/execution across Google, Meta, TikTok and programmatic, budget allocation, optimization, reporting, GA4, GTM and Looker Studio. | A; Jakarta and cross-channel performance role, not a synonym for Full-Stack. |
| Publicis Media | Paid Search | SEM Specialist Madrid JD covers execution, monitoring and optimization of paid search accounts. | A; employer-hosted but Madrid-specific. |
| Publicis Media | Community / Creator interface | Social & Community Management Specialist Copenhagen JD covers daily community conversations, moderation, UGC and influencer collaboration. | A; combined role; do not use as proof that all agencies combine these functions. |
| Omnicom / legacy Mediabrands network | Paid Search, Paid Social, Programmatic, SEO/GEO, Retail Search | Employer job board lists roles across Kinesso/Mediabrands including Paid Search & Social, Programmatic, SEO/GEO, Retail Search and paid social. | D; the index is under legacy Mediabrands branding. Treat it as a network/portfolio listing within Omnicom context, not a sixth holding group or a full JD. |
| Dentsu / Merkle | CRM / Lifecycle | CRM Campaign Specialist Jakarta JD requires CRM operations, marketing automation, responsive HTML email, dynamic content, personalization, segmentation logic, campaign QA and platforms such as SFMC, Braze, Adobe Campaign, Responsys and Iterable. | A; direct Jakarta evidence. |
| Havas Media Network | Media Planning / integrated digital | Digital Media Planning Group Head Bengaluru JD covers cross-channel brand/performance planning, buying, implementation, optimization, reporting, publisher negotiation, landing-page usability/conversion improvements, and team/client ownership. | A; Bengaluru, 6–7 years, integrated digital role; not pure offline buying or a dedicated CRO specialist. |
| Havas Media Network | Role-family coverage | Current Havas Media career index lists Analytics, Connections Planning, Digital Investment, Publishing, Media Planning/Buying, Performance Marketing and Programmatic. | D; role-family titles only. Current index did not show direct Paid Social, dedicated SEO, Affiliate or Community roles in the reviewed snapshot. Absence from the index is not proof that the capability does not exist. |

### Source URLs

- WPP Media current role index (Madrid): https://job-boards.greenhouse.io/wppmedia?offices%5B%5D=4047166008
- WPP Media Jakarta Platform Executive – Paid Media & Performance: https://job-boards.greenhouse.io/wppmedia/jobs/5378823008
- WPP Media Executive – Ad Ops: https://job-boards.greenhouse.io/wppmedia/jobs/5313454008
- WPP Media Senior Paid Social Executive: https://job-boards.greenhouse.io/wppmedia/jobs/5390314008
- WPP Media Social and Influencer Executive: https://job-boards.greenhouse.io/wppmedia/jobs/5410220008
- WPP Media Australia SEO/GEO and specialist role index: https://job-boards.greenhouse.io/wppmedia?offices%5B%5D=4047041008
- Publicis Senior Digital Planning Manager Jakarta: https://careers.publicisgroupe.com/jobs/149884?lang=en-us
- Publicis Media Performance Manager Jakarta: https://careers.publicisgroupe.com/event-4838/jobs/163977?lang=en-us
- Publicis SEM Specialist Madrid: https://careers.publicisgroupe.com/jobs/174690?lang=en-US
- Publicis Social & Community Management Specialist Copenhagen: https://careers.publicisgroupe.com/jobs/180872?lang=en-US
- Omnicom / Mediabrands employer job index: https://job-boards.greenhouse.io/mediabrands
- Dentsu CRM Campaign Specialist Jakarta: https://dentsuaegis.wd3.myworkdayjobs.com/en-US/DAN_GLOBAL/job/CRM-Campaign-Specialist_R1124584
- Havas Media current role index: https://jobs.jobvite.com/havasmedia
- Havas Digital Media Planning Group Head Bengaluru: https://havas.wd3.myworkdayjobs.com/en-US/MediaExternalCareerSite/job/Digital-Media-Planning_JR0043376

## 4. What this evidence does and does not close

This pass adds several direct JDs and improves coverage for Paid Search, Paid Social, Ad Operations, SEO/GEO, Creator, Planning, Performance, CRM and Havas integrated digital planning. It does **not** complete the 5 × 16 matrix. Several cells still have only title-level, adjacent, historical or no evidence; source quality and seniority/geography are not uniform. The matrix must remain PARTIAL until each of the 80 cells has a traceable source or an explicitly justified gap record and each direct JD's competency claims have been extracted and checked.

## 5. Outstanding validation gates

1. Rebuild the full chapter register from the current guide source and remove extraction defects such as the T16-CH12 `undefined` values.
2. Complete qualified technical/SME review for all 169 chapters, including objectives, technical workflows, examples, practice realism, role boundaries and current product terminology.
3. Validate all 507 Q&A items against authoritative sources, including acceptable alternate answers. Static Q&A must not be presented as a scored quiz.
4. Calibrate all 169 chapter rubrics with sample submissions and reviewer agreement. Current rubric drafts are proposals, not approved assessments.
5. Complete chapter-level Tier 1 official learning, Tier 2 industry standards/frameworks and Tier 3 applied practice/resource mapping. Validate URLs, region, price, access, language, credential type, prerequisites and expiry.
6. Complete all 80 agency × track evidence cells with source URLs, date, geography, evidence class, seniority, extracted competency, confidence and limitations.
7. Complete authenticated browser/runtime QA: desktop and mobile breakpoints, all track selectors, chapter-guide mapping, progress persistence, theme, keyboard/screen-reader basics, console/network errors, external links and regression. Vercel READY is not a substitute.
8. Keep PR #5 and PR #6 draft/open until all release gates are evidenced. No merge authorization is implied.

## 6. Runtime QA constraint in this pass

The public deployment could not be inspected through the available page reader. The interactive browser automation service reported a negative wallet balance and refused to start a run. Therefore no browser-level runtime test or screenshot has been claimed. Resume after the browser service is funded or an authorized browser session becomes available.


## 7. 4 November 2026 — source-to-register extraction correction

**Execution status:** completed and committed to PR #5 and PR #6. This corrects extraction integrity only; it does not convert the answer keys or curriculum into SME-approved content.

- Parsed the actual guide-source arrays from `role-study-guides-part1.js`, `role-study-guides-part2.js` and `role-study-guides-part3.js`, preserving each immutable `DPA-Txx-CHxx` identifier.
- Reconciled all **149 newly added guide objects** to their chapter IDs and replaced the broken Q&A/glossary extraction in the chapter evidence register.
- Before correction, the register contained **2,086 literal `undefined` tokens** across the 149 added guide entries. After correction, a full-string scan returned **0** literal `undefined` tokens.
- The chapter register still contains **169 unique chapter entries**. Its 507 Q&A items now contain the actual source-guide question and answer text, not placeholders.
- The assessment register now contains **169 chapter-specific rubric entries** and 507 source-matched Q&A answer-key review entries. A full-string scan returned **0** literal `undefined` tokens in the rubric file.
- The previously separate T16-CH12 Community Capstone rubric is now incorporated into the main rubric register.
- The corrected register and rubric file are committed in both PR branches. PR #6 now also carries the rubric register so both pull requests share the same core audit artifacts.

### What this closes / does not close

**Closed:** extraction defect for the 149 added guides; chapter ID-to-source-array reconciliation for those 149; missing 169th rubric entry; placeholder removal in the two audit artifacts.

**Still open:** correctness review of all 507 answers, acceptable alternate answers, independent technical/SME review of all 169 chapters, rubric calibration with sample work, final per-chapter official resource mapping, 80-cell employer-role evidence validation, and authenticated browser/runtime QA. The source-guide text is preserved as authored and is not represented as independently fact-checked merely because extraction now matches.

### Reproducible checks

| Check | Before | After | Interpretation |
|---|---:|---:|---|
| Register chapter entries | 169 | 169 | Count preserved |
| Register literal `undefined` | 2,086 | 0 | Extraction placeholders removed |
| Added source guide objects reconciled | Not reconciled | 149 | ID-linked source arrays parsed |
| Rubric chapter entries | 168 | 169 | Missing T16-CH12 added |
| Rubric literal `undefined` | 888 | 0 | Answer-key placeholders removed |
| Q&A items in register/rubric | 507 | 507 | Source text populated; correctness review remains open |

**Release decision remains:** NOT READY / DRAFT. Do not merge based on extraction repair alone.


## 8. 4 November 2026 — five additional direct employer-role sources

A further official-source search upgraded five inherited evidence cells in the role-level chapter register and the new 80-cell matrix:

- **Track 5 / Havas:** Paid Social Specialist, employer-hosted Havas Workday listing. Scope includes paid-social campaign management, audience segmentation, budgets, reporting and A/B tests. The indexed extract did not expose complete geography/seniority; those fields remain explicitly unconfirmed.
- **Track 6 / Dentsu:** Programmatic Specialist, employer-hosted Workday listing, Lisbon. Scope includes DSP setup, targeting, bids/budgets, brand safety, viewability, trafficking support and end-of-campaign evaluation. This is execution/support-level evidence, not senior trading leadership.
- **Track 9 / Publicis:** Ad Operations Specialist, employer-hosted Publicis careers listing, Johannesburg. Scope includes trafficking sheets, tags/pixels/UTMs/click trackers, creative/placement QA, go-live and issue logs; 2–5 years' experience.
- **Track 11 / Dentsu:** SEO Executive, employer-hosted Workday listing. Scope includes technical SEO checks, robots.txt, XML sitemap, redirects, canonical tags, keyword/content audits, reporting and SEO tools. The indexed extract did not expose geography; retain this limitation.
- **Track 15 / WPP:** Group Head Affiliate, employer-hosted Jakarta listing, plus Mindshare Affiliate Manager Beirut employer JD. The latter specifies direct publishers/networks, S2S postbacks, pixels, MMPs, attribution, tracking QA, fraud controls and CPI/CPL/CPA/RevShare/CPS models. Preserve the Jakarta vs Beirut market/seniority distinction.

The matrix is now at `docs/80-cell-agency-role-evidence-matrix.md`. It explicitly represents all 80 cells and upgrades these five cell statements. This does not mean 80/80 are fully validated: the matrix remains partial, with 16 explicit G gaps in the inherited/updated class labels and other cells relying on B/D or compound evidence. The new matrix documents the evidence class, scope caveats, source URLs and outstanding work.

### New official URLs
- Havas Paid Social Specialist: https://havas.wd3.myworkdayjobs.com/en-US/GroupExternalCareerSite/job/Paid-Social-Specialist_JR0095187-1
- Dentsu Programmatic Specialist, Lisbon: https://dentsuaegis.wd3.myworkdayjobs.com/en-US/DAN_GLOBAL/job/Programmatic-Specialist_R1123420
- Publicis Ad Operations Specialist, Johannesburg: https://careers.publicisgroupe.com/jobs/176664?lang=en-US
- Dentsu SEO Executive: https://dentsuaegis.wd3.myworkdayjobs.com/en-US/DAN_GLOBAL/job/SEO-Executive_R1121609-1
- WPP Media Group Head Affiliate, Jakarta: https://job-boards.greenhouse.io/wppmedia/jobs/5235133008
- WPP Media Mindshare Affiliate Manager, Beirut: https://job-boards.greenhouse.io/wppmedia/jobs/5341033008

**Remaining:** validate all 80 cells at JD/competency level; this pass upgrades five but does not close every gap.


## 9. 4 November 2026 — deterministic static repository QA

Static QA was rerun against the PR #5 branch and recorded in `docs/2026-11-04-static-repository-qa.md` (synchronized to PR #6). Confirmed: 169 HTML chapter IDs; 169 guide IDs (10 Full-Stack + 10 Paid Social + 149 role-specific); no missing/orphan/duplicate guide IDs; 391 unique HTML element IDs; 13/13 internal anchors resolve; eight local script references; 169 chapter-register entries; 169 rubric entries; 507 Q&A items in each register; zero literal `undefined` in the corrected register and rubric. Responsive/media-query, localStorage, theme, focus and reduced-motion code is present but behavior is not runtime-verified.

**New PR-head CI state:** GitHub combined status for the latest PR #5 and PR #6 commits reports Vercel **FAILURE** with target URL indicating a build-rate-limit restriction. This is not a code-test failure diagnosis and is not a READY deployment. No GitHub Actions workflow runs are associated with these commits.

**Browser QA:** not run. The connected local Browser service could not access the originating browser context; cloud browser/deep-research service returned insufficient funds/empty wallet before a run could start. No screenshots, interaction, console/network, mobile/desktop or accessibility runtime tests are claimed.

Release status remains NOT READY TO MERGE.
