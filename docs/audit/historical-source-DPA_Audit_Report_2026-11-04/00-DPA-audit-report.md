# Independent Audit Report — The Full-Stack Digital Performance Architect
### Repository, Curriculum, Evidence, Assessment, Application, and Production Audit
**Audit date:** 4 November 2026, 23:28 +07:00 (start) · **Report status:** READ-ONLY AUDIT — NO CHANGES MADE
**Repository:** https://github.com/putratryarga/putratryarga-dpa (public) · **Production:** https://putratryarga-dpa.vercel.app/
**Audit mode:** strict read-only. No repository file was modified; no branch, commit, PR, deployment, or production state was changed. All analysis artifacts were produced outside the repository in a scratch folder.

> **AMENDMENT 1 (5 Nov 2026) — Evidence reconciliation package.** In response to the owner's reconciliation request, this report has been amended: verification classes (below) label every claim; chapter statuses are explicitly **agent desk-review, not SME approval** (independent SME validation was NOT performed); the T10-CH07/CH08 classification was corrected after live URL verification (rescored PARTIALLY VALIDATED — totals are now 10/22/135/2); the "zero chapter-level resources" statement was replaced with a three-way distinction (mapping coverage vs unique chapter-specific resources vs verified fit); the production claim was confirmed as artifact-tested; and a full discrepancy log was added. Reconciliation deliverables: `04-90-cell-evidence-matrix.csv`, `05-discrepancy-log.md`, `06-validated-chapters-evidence.md`, `07-scoring-methodology-and-verification-classes.md`.
>
> **Verification classes:** **A** = agent desk-review finding · **B** = static repository verification (bytes/hashes/greps) · **C** = external source verification (live URL/API checks) · **D** = independent SME validation (**not performed — 0%**) · **E** = browser/runtime QA · **F** = production deployment verification. Every status quoted below is Class A unless labeled otherwise.

---

## A. Executive audit verdict

**Overall status: NOT READY. Structurally complete; instructionally partial; evidentially partial; assessment-immature; production-deployed but not the intended product.**

| Question | Verdict | Basis |
|---|---|---|
| Is the curriculum genuinely ready? | **No** | 169 chapters exist and are individually assessed (agent desk-review, not SME approval): 10 VALIDATED, 22 VALIDATED WITH MINOR IMPROVEMENTS, 135 PARTIALLY VALIDATED, 2 NEEDS MAJOR REVISION. The ceiling is systemic: no validated answer keys, no unique chapter-specific resources (mapping coverage exists; verified fit is OPEN-to-poor — see D-1), no published competency definitions, and zero Indonesia-specific sources. |
| Is the application technically ready? | **Partially** | Role switching, progress denominators, theme/print controls, and per-chapter rendering work in live browser QA. But main/production uses no immutable chapter IDs (0 vs PR #5's 169), embeds dead divergent `CONNECTION_GUIDES` code, and 14 of 16 tracks render template-generated guides with **empty comprehension checks**. |
| Is the evidence base sufficient? | **No, but improvable** | The 80-cell agency matrix is a genuine artifact (A36/B19/C0/D37/G6 + 18 compound labels), but prior source URLs have rotted (5/5 WPP links 404; cited Havas JDs expired), the delta doc claims "16 G gaps" while the matrix lists 6, and evidence is role-level, never chapter-level. All 80 core + 10 elective cells were independently revalidated in this audit (see §G and appendix). |
| Are the electives validated? | **No — and correctly labeled so** | 28 proposed chapters exist as outline only (title + outcome + deliverable). Status "Curriculum Architecture v1.0 — Proposed / Evidence Validation Pending" is accurate. 28/28 = NOT VERIFIED at content level. |
| Does production reflect the intended product? | **Only the v11.1 scaffold** | Production serves exactly main HEAD content (blob-verified). It shows 16 tracks, 169 chapter cards, CF1–CF6, resources, and electives marked "coming soon" — but the rich 149-guide layer, immutable IDs, and Q&A exist only on unmerged PR #5. |
| Most important risks | (1) Learner-visible generic guides + empty self-tests on the live site; (2) assessment layer 100% unvalidated; (3) resource mapping with role-wrong/mislabeled links; (4) "Source of Truth" is a chat transcript; (5) T07-CH06/CH07 swapped content; (6) conflicting unmergeable PRs carrying the only real guide layer. |
| Remediation required before release? | **Yes** | Release gates G1–G8 in §M. No P0 (no data-loss/security/unauthorized-change/production-failure condition was found); 10 P1 blockers. |

The project's honesty is a structural strength: its own README, delta doc, and QA docs declare "NOT READY / DRAFT", list open gates, and forbid merging until blockers close. The audit found no overclaiming in the repository's own release language. The gap is between that honest documentation and what the live product actually delivers.

---

## B. Verified repository baseline

| Item | Verified value (4 Nov 2026, 23:28–23:59 +07:00) |
|---|---|
| Default branch | `main` |
| `main` HEAD | `640b1924a6b200fac83df1dcac1ddd1e8b9ea61d` — "docs: sync plain-text curriculum audit" — 2026-11-04 20:53:27 +0700 (identical to the prior audit's SHA: main has not moved) |
| Tracked files on main | 8 (index.html; fullstack-guides.js; paid-social-guides.js; README.md; 4 × docs) |
| Work tree status (fresh clone) | clean (`## main...origin/main`) |
| Branch count | 12 remote branches incl. main |
| PR #5 | OPEN, **DRAFT**, head `audit/align-all-16-track-learning-modules` @ `3ed9c233ef6c5080bee5a515d23a56300d625d6b` (unchanged from prior record), base `main` @ `cc54ac2934f8b806e7fecd62123d5dca7ee38170`, 86 commits, 25 changed files, `mergeable=CONFLICTING`, `mergeStateStatus=DIRTY`, updated 2026-11-04T16:01:18Z |
| PR #6 | OPEN, **DRAFT**, head `docs/advanced-electives-source-of-truth` @ `48332c44c822373b57bda5002ab1f12c6071fb10` (unchanged), base same, 66 commits, 17 changed files, `CONFLICTING`/`DIRTY`, updated 2026-11-04T16:01:15Z |
| Base commit | `cc54ac2934…` — "Increase mobile spacing between roadmap role cards" — 2026-11-04 15:14:01 +0700 |
| `main` vs base | 4 doc files added only (docs/16-core-track-role-crosswalk.{md,txt}; docs/role-competency-matrix-and-elective-chapter-audit.{md,txt}). The two `.md` copies on main differ in content from the PR copies; the `.txt` twins are byte-identical. |
| PR #5 vs PR #6 | 16 of 19 shared files byte-identical. Differing: `index.html`, `fullstack-guides.js`, `paid-social-guides.js` (PR #6's are byte-identical to base/main; PR #5 carries app changes). PR #6 unique: `docs/advanced-electives-source-of-truth.md`. PR #5 unique: `chapter-guide-map.js`, `fullstack-master-renderer.js`, `fullstack-master-roadmap.js`, `role-study-guides-part1/2/3.js`. |
| Production deployment | Vercel, Server: Vercel, `x-vercel-id: sin1::…`, HSTS on, `x-vercel-cache: MISS`, no deployment-SHA header |
| Production content | 365,630 bytes = git blob `a8e18a105237f8e4e8f57b7d5235d272b29eb038` = `cc54ac2:index.html` = `640b192(main HEAD):index.html`. **Production serves current main exactly.** |
| Deployment object | Not exposed publicly; Vercel account metadata and PR preview deployments inaccessible to this audit (auth). Recorded as limitation — deployment provenance established by content hash, not metadata. |
| Vercel checks on PR heads | Repo QA doc reports FAILURE due to build-rate-limit on both latest heads; not independently verifiable without Vercel access — recorded as reported claim. |
| Chapter inventory | 16 tracks, **169 unique `DPA-Txx-CHxx` IDs, 0 duplicates** (T01–T05 = 10 each; T06 = 12; T07–T12 = 10 each; T13 = 11; T14–T16 = 12 each; Σ=169). Plus CF1–CF6 and per-track capstones (CF + capstone not counted in the 169). |

---

## C. Repository and documentation audit

### C.1 File inventory and classification (main)

| Class | Files |
|---|---|
| Application | `index.html` (365,630 B blob; 370,623 B CRLF checkout), `fullstack-guides.js` (33.9 KB), `paid-social-guides.js` (39.3 KB) |
| Curriculum docs | `docs/16-core-track-role-crosswalk.{md,txt}`, `docs/role-competency-matrix-and-elective-chapter-audit.{md,txt}` |
| README / governance | `README.md` |
| Supporting assets | Fonts via CDN (pinned Fontsource); no build pipeline; no tests; no CI config; no lockfiles in repo |
| Exclusions | None material; repo is tiny (8 files). PR branches add 6 app files + 12 docs (see §C.2). |

### C.2 What exists only on branches (critical)

PR #5 tree (25 files) adds the entire working curriculum layer: 149 role-specific guides (318 KB across three part files), `chapter-guide-map.js` (ID→guide map), a master renderer, the master roadmap, 16 audit documents (169-chapter evidence register 629 KB; rubric draft 482 KB; resource mapping 98 KB; technical review matrix 22 KB; 80-cell matrix 22 KB; validation delta 23 KB; crosswalk; role-competency matrix; production inspection; static QA; T16-CH12 supplement). PR #6 duplicates the 16 shared docs and adds the electives source-of-truth. **Main carries none of this** — the live product is the v11.1 scaffold.

### C.3 Source-of-truth hierarchy (evaluated, not assumed)

| Domain | Claimed/canonical source | Audit finding |
|---|---|---|
| Track taxonomy, role taxonomy | `docs/16-core-track-role-crosswalk.md` (v1.1 on PRs) | Coherent 16-track competency spine with explicit boundaries; **two divergent versions** (main vs PRs) — main's lacks the v1.1 scope column and canonical pointer. |
| "Consolidated research record" | `docs/16_track_Source_of_Truth_with_Advanced_Audit_2026-11-04.txt` | **Not a source of truth**: 486 KB / 8,575-line chat transcript (user notes, WhatsApp excerpts, assistant replies, deploy logs). Pointed to by README, crosswalk, resource register and rubric draft as **canonical**. See DPA-006. |
| Chapter inventory + content extract | `docs/169-chapter-evidence-register.md` | 169 chapters, 0 dup IDs, 0 literal `undefined` (independently confirmed), 507 Q&A — but boilerplate evidence lines and **glossary field missing for 70 chapters** (T02–T04, T09–T12). |
| Assessment | `docs/169-chapter-assessment-rubrics-draft.md` | 169 entries (confirmed), 5-dim 0–3 scale, 80/100 pass, critical-failure rule — all answer keys OPEN. |
| Resources/credentials | `resource-credential-validation.md` + `169-chapter-resource-mapping.md` | Credential register accurate and carefully classified (5/5 sampled claims confirmed); mapping has systematic label/role defects (§H). |
| Electives | `docs/advanced-electives-source-of-truth.md` (PR #6) | Honest outline-level architecture with gates; no chapter content. |
| Technical truth | `index.html` + guide JS | The code is the de-facto source of truth; docs describe it inconsistently (HTML vs JS content layers; register vs guides). |

### C.4 Cross-file consistency findings

1. **Guide layer split across two content tiers**: `index.html` chapter blocks (3 bullets + deliverable checkbox) vs guide JS (concept, example, workflow, practice, 3 Q&A, glossary). Register records the rich tier but omits glossary for 70 chapters; HTML shows neither Q&A nor resources.
2. **Dead divergent duplicate**: `index.html` line ~4780 defines `CONNECTION_GUIDES` (an older 3-step T02 curriculum) that the render pipeline never reads (`buildGuide` uses `DPA_GUIDE_BY_CHAPTER` only). Silent-regression risk (DPA-007).
3. **Same doc, two versions**: crosswalk `.md` (main vs PR5/6) and role-competency `.md` (36+/13−) differ; `.txt` twins identical. Merge will add/add-conflict on these two paths.
4. **Count inconsistency**: delta doc §8 "16 explicit G gaps" vs matrix §3 "6" G cells. Unreconciled.
5. **QA doc self-contradiction**: static QA table row "Responsive media-query declarations | 0 | PRESENT — visual behavior not verified". Actual count: 19 `@media` blocks in both main and PR #5. (DPA-013)
6. **Production inspection doc is accurate** for its scope: Docebo links, electives "coming soon", quiz bank "still being built" — all re-confirmed by browser QA.
7. **T16-CH12 correction supplement is stale**: the `undefined` defect it documents is already fixed in the register; its quoted Q&A no longer matches the (now Indonesian) source; its rubric was never folded into the register line.

---

## D. Sixteen-track architecture audit

All 16 tracks were assessed at chapter level by four independent auditors (40/42/40/47 chapters; 169/169 total) plus the shared role-boundary tests below.

### D.1 Track scorecard (auditor consensus)

| # | Track | Chapters | Status (count) | Mean score | One-line verdict |
|---:|---|---|---|---|---|
| 1 | Full-Stack Digital Marketing & Performance | 10 | PARTIALLY VALIDATED ×10 | 3.3 | Correct integrator definition; under-signposted overlaps; generic resources. |
| 2 | Connection / Communications Planner | 10 | PARTIALLY VALIDATED ×10 | 3.3 | Strongest conceptual sequence; resource layer maps it to a **Media Planner catalog** (role-wrong); no phasing content. |
| 3 | Media Planner / Digital Planner & Strategist | 10 | PARTIALLY VALIDATED ×10 | 3.3 | Most executionally coherent; all 10 resource rows mislabel Skillshop→Trade Desk URL; GRP/TRP key slip. |
| 4 | Paid Search / SEM | 10 | **VALIDATED ×10** | 3.5 | Strongest track: accurate, localized (hl=id), search-only scope held; CH06 title over-promises campaign types. |
| 5 | Paid Social / Biddable Social | 10 | VWMI ×10 | 3.0 | Clean Indonesian, Indonesia cases, correct platform hierarchies; LinkedIn/B2B named but not delivered. |
| 6 | Programmatic Specialist / Trader | 12 | VWMI ×12 | 3.0 | Technically sound (OpenRTB, deals, CM360, supply quality); heavy EN code-switching; no Indonesia supply context. |
| 7 | Retail & Commerce Media | 10 | PV ×8, **NMR ×2** | 2.8 | Good Indonesia anchoring (Shopee/Tokopedia/Blibli); **CH06/CH07 guide-content swap FIXED on the remediation branch** (feed/digital-shelf module authored; in-store content merged into CH08 activation). |
| 8 | Media Buying, Investment & Publisher Partnerships | 10 | PARTIALLY VALIDATED ×10 | 2.9 | Professionally usable direct-buying workflow (RFP→IO→reconciliation); resources point to ad-tech (DV360) instead of publisher/negotiation sources. |
| 9 | Ad Operations / Digital Campaign Ops | 10 | PARTIALLY VALIDATED ×10 | 2.8 | Clean trafficking/QA/billing scope; **Verification & Brand Safety missing** from the whole track. |
| 10 | Media Analytics / Marketing Science | 10 | PARTIALLY VALIDATED ×10 | 2.9 | **Passes the marketing-science test** (attribution≠incrementality, geo-holdout, experiment stats); mapped resources are live but mislabeled/insufficiently specific (verified 5 Nov — discrepancy log D-2). |
| 11 | SEO / Organic Search / AEO / GEO | 10 | PARTIALLY VALIDATED ×10 | 2.8 | Three-way separation done properly; AEO/GEO honesty caveats correct; local SEO chapter weakest Q&A. |
| 12 | CRM / Lifecycle / Marketing Automation | 10 | PARTIALLY VALIDATED ×10 | 2.6 | Genuinely job-accurate lifecycle craft (webhook/idempotency rigor, cohort LTV); **CDP basics absent**, zero UU PDP references. |
| 13 | Content Strategy & Creation | 11 | PARTIALLY VALIDATED ×11 | 2.7 | Strategist content solid; CH08 Indonesia-blind; strategist/creator/organic-social boundary never told to learner. |
| 14 | KOL / KOC / Influencer & Creator Partnerships | 12 | PARTIALLY VALIDATED ×12 | 2.7 | Cleanest partnership pipeline; CH07 (rights/paid usage) strongest chapter; no Indonesian disclosure/MCN anchors. |
| 15 | Affiliate & Social Commerce Partnerships | 12 | PARTIALLY VALIDATED ×12 | 2.6 | Affiliate≠creator≠paid media respected; commission/fraud math correct; worst language integrity; no local marketplace/affiliate anchors; PR5 card mislabels it "advanced elective". |
| 16 | Community Management & Advocacy | 12 | PARTIALLY VALIDATED ×12 | 2.7 | Community≠audience explicitly taught; moderation/PII/crisis solid; no local legal anchor. |

Status totals: **VALIDATED 10 · VALIDATED WITH MINOR IMPROVEMENTS 22 · PARTIALLY VALIDATED 133 · NEEDS MAJOR REVISION 4 · NOT VERIFIED 0 · MISSING 0.**

### D.2 Mandatory role-separation tests (master-prompt §6)

| Test | Verdict | Evidence |
|---|---|---|
| A. Full-Stack Digital Performance Architect ≠ Performance Marketing Specialist / Media Buyer | **PASS** | T01-CH10: "Full-stack bukan berarti menguasai setiap platform sedalam operator, tetapi memahami trade-off, memimpin specialist…"; T01-CH05 Q&A assigns decision framework/brief/guardrail, not technical takeover. Register is candid that no direct "Digital Performance Architect" JD exists — the title is curriculum-defined, not faked as a standard job title. |
| B. Paid Search not expanded to all Google Ads | **PASS (minor gap)** | T04 is search-only; no Display/YouTube/Shopping/PMax/DV360/SA360 chapters claimed; cross-channel evidence explicitly annotated "not a pure SEM specialist JD". Gap: CH06 title promises "Campaign Types" with no explicit out-of-scope statement (PMax question unaddressed). |
| C. Direct publisher / media-owner investment represented | **PASS** | Track 8 owns direct publisher buying, RFP, rate cards, IO/contracts, negotiation, delivery stewardship and reconciliation; CH01 Q&A explicitly separates Investment from Programmatic Trading. |
| D. Media Analytics vs Marketing Science | **PASS** | T10 sequences reporting (CH03/CH05) → diagnosis (CH06) → attribution vs incrementality vs causal measurement (CH07, geo-holdout case) → experimentation/statistics (CH08, power/MDE/multiple testing) → storytelling (CH09). MMM exists at glossary depth only; the depth boundary is undeclared but the distinction is genuinely taught. |
| E. Content Strategist ≠ Planner ≠ Creator ≠ Organic Social | **PARTIAL** | Chapters 1–10 are correctly strategist-level; production alias list still reads "Content Strategist · Content Planner · Content Creator"; the strategist/creator/organic-social split is never stated to the learner; CH08 platform adaptation is Indonesia-blind. |
| F. Creator/influencer partnerships distinct | **PASS (local gap)** | T14 pipeline (selection→fit→brief→contract→rights→seeding→amplification→measurement) is distinct from content strategy; CH07 teaches fee vs paid-usage separation. Disclosure is generic — no Indonesian regulatory/platform anchor. |
| G. Affiliate distinct from paid media/creator/partnerships | **PASS (local gap)** | T15 tracks commissions, networks, S2S tracking, fraud, reconciliation, incrementality; CH06 teaches attributed vs incremental sale correctly. No Indonesian marketplace/affiliate-program context; PR5 card labels the core track "Advanced elective" (metadata defect). |
| H. Community distinct from Organic Social | **PASS (local gap)** | T16-CH01 Q1 ("Apa beda community dan audience?") and CH12 enforce member-relationship scope; moderation/PII/crisis chapters are professionally sound. No local legal/speech anchor. |

### D.3 Cross-track structural findings

1. **POES/channel-role material taught in three tracks** (T01-CH04, T02-CH06, T03-CH04) without a boundary statement — true structural overlap, not just reinforcement.
2. **No wrong-track placement found in any of the 169 chapters** — a genuine achievement for a 16-track taxonomy.
3. **Alias hygiene**: three card-level alias/classification defects (Content Creator as T13 alias; Affiliate "Advanced elective" label; T02 mapped to a Media Planner resource catalog).
4. **Competency spine referenced, never defined** (T01-C01…T16-Cxx) — see DPA-008.

---

## E. Complete 169-chapter audit

**Coverage: 169/169 chapters individually assessed** (not sampled). Each chapter scored on 7 dimensions (0–4): instructional substance, competency alignment, technical accuracy, practical exercise, deliverable, resource/evidence quality, assessment alignment. Full matrix: `01-169-chapter-audit-matrix.csv` (169 rows).

| Status | Count | Share | Drivers |
|---|---:|---:|---|
| VALIDATED (all essential dims ≥3) | 10 | 5.9% | All of T04 — the only track with localized, correct resources. |
| VALIDATED WITH MINOR IMPROVEMENTS | 22 | 13.0% | T05 + T06 — content strong, minor resource/language debt. |
| PARTIALLY VALIDATED (some dim = 2) | 135 | 79.9% | Systemic: resource/evidence = 2, assessment = 2–3, competency alignment = 2. Includes T10-CH07/08 after 5-Nov resource verification (D-2). |
| NEEDS MAJOR REVISION (any dim ≤1) | 2 | 1.2% | T07-CH06/07 only — guide content swapped vs titles (competency alignment = 1); resource verification did not change this. |
| NOT VERIFIED | 0 | 0% | — |
| MISSING | 0 | 0% | — |

**Systemic patterns across the 169** (consistent across all four auditors):

- **S1 — The register's evidence/validation layer is boilerplate.** Identical strings per track: "Resources: No chapter-level resource link captured…", "Rubric / passing criteria: NOT DEFINED at chapter level…", "SME must validate…". Content is differentiated; the validation wrapper is frozen at zero.
- **S2 — Resources: mapping coverage is complete, unique chapter-specific resources are absent, verified fit is OPEN-to-poor, and Indonesia-specific sources are zero (D-1).** The resource-mapping register assigns a row to **169/169 chapters** (coverage complete), but each track reuses 1–2 track-level links across its chapters (no unique chapter-specific external resources anywhere, and app HTML blocks surface no resource links); source-to-competency fit is marked OPEN by the repo's own technical-review matrix and desk-review found specific defects (T01 generic, T02 role-wrong, T03/T05/T06 mislabeled, T10 insufficiently specific, T08 ad-tech misfit, T07 US-only); and **no Indonesian domain appears anywhere** (no marketplace/RMN, no local measurement panel, no local disclosure/privacy/legal anchor).
- **S3 — Assessment exists as draft only.** 507 Q&A with substantive answers, but every key is "OPEN"; no scored engine; pass threshold uncalibrated; production Q&A empty for 14 tracks.
- **S4 — Competency spine unpublished.** IDs map plausibly but no definitions exist; capstones map to 1–2 IDs only (T13-CH11, T14-CH12, T15-CH12, T16-CH12).
- **S5 — Language integrity breach.** EN code-switching in expected answers/examples across T06–T08 (32 chapters) and ~15 of T13–T16; T05 sets the correct Indonesian bar.
- **S6 — Register extraction gaps.** Glossary field missing for 70 chapters (T02–T04, T09–T12) though guides carry 4–5 accurate terms each.
- **S7 — Short-answer debt.** 125 answers <12 words across 81 chapters; worst clusters T14-CH03, T15-CH05/10, T16-CH04, T03-CH04/06/09, T04-CH02–07.
- **S8 — Boundary teaching is implicit.** Crosswalk states separations; only T16 enforces its boundary via Q&A; T13/T14/T15 rely on implied scope.

**Instructional substance is real.** Spot-checks of register↔guide fidelity (≥1 chapter per track; ~25 chapters total, verbatim) found **no drift**: concepts, simulated examples, workflows, and Q&A match. The content is professionally credible — the failures are in the validation and resource layers, not the teaching text.

---

## F. Advanced elective audit

Source: PR #6 `docs/advanced-electives-source-of-truth.md` (14,993 B, 117 lines). Full matrix: `03-electives-outline-matrix.csv`.

| Elective | Proposed chapters | Content depth | Coverage vs required areas | Status |
|---|---:|---|---|---|
| 17 — CRO / Growth / Experience Optimization | 14 | Title + core outcome + deliverable label (no teaching content, no IDs, no Q&A, no resources per chapter) | All 14 required areas present at title level (growth economics → research → analytics architecture → funnel → UX → prioritization → hypotheses → experiment design → statistics → technical QA → incrementality → personalization → programme → commercial impact → capstone) | **NOT VERIFIED ×14** (outline only) |
| 18 — Traditional Media Planning & Buying | 14 | Same | All 14 required areas present at title level (ecosystem → research → measurement/GRP → TV → radio → print → OOH/DOOH → cinema/sponsorship → mix → negotiation → buying ops → post-buy → cross-media governance → capstone) | **NOT VERIFIED ×14** (outline only) |

Findings:
1. **Status label is correct**: "Curriculum Architecture v1.0 — Proposed / Evidence Validation Pending" appears, with a validation-gates table (Architecture approved; Role/Market/Resource/Credential/Assessment/Learning-QA gates Partial/Open). No overclaim.
2. **Duplication zones declared but unresolved**: ELC-CRO 3/7/8/10 vs T09/T10/T01-CH08 (analytics architecture; experiment design; statistics; incrementality); ELC-TM 10/11 vs T08 (negotiation/trading; buying ops). The doc states boundaries at elective level; chapter-level differentiation is unproven because neither elective has content yet.
3. **No chapter IDs** — the 28 chapters use titles only; IDs `DPA-ELC-CRO-01…14` / `DPA-ELC-TM-01…14` were constructed for the matrix.
4. **The 10 elective evidence groups** (2 electives × 5 holding groups) were revalidated within the 90-cell evidence pass (§G): E-CRO is the weakest cell family (WPP: A only at WPP Creative; Omnicom: D — LinkedIn-only; Havas: D+B); E-TM is stronger (A at WPP, Publicis, Omnicom, Dentsu, Havas).
5. Assessment architecture for electives (§7 of the doc) is policy-level: knowledge check + practical artifact + rubric + evidence + reflection; capstone criteria listed. No instruments exist.

**Verdict:** electives are honestly proposed, architecturally sound, and instructionally empty. The correct status is exactly what the document says: proposed, pending evidence validation.

---

## G. Global agency role evidence audit

Scope: 5 holding groups × 16 core tracks = **80 cells**, plus 10 elective cells = **90 cells revalidated** on 2026-11-04 (re-anchored 5 Nov where verification required it). Method: live career-site/ATS research per group (WPP Media Greenhouse 807 live jobs; Publicis careers; Omnicom/IPG Workday; Dentsu Workday 799 open jobs; Havas Workday 795 postings + LinkedIn), re-checking every prior matrix row. **Reconciliation with the existing 80-cell matrix (D-6):** the prior document's class counts (A36/B19/C0/D37/G6 + 18 compound) are label-instance counts, not cell counts; revalidation yields **A×83, B×5, D×1, mixed D+B×1 = 90**, with per-cell URLs, evidence types and prior-verdict tracking. **All six documented G cells were re-anchored:** T09/Dentsu→A · T11/Havas→A · T14/Havas→A · T15/Omnicom→A · T15/Havas→B(weak) · T16/Havas→B(weak)/G-for-dedicated-role. Consolidated per-cell table (90 rows, URLs + metadata + evidence type + prior verdict): `04-90-cell-evidence-matrix.csv`. Row-level narrative detail: appendix `evidence-{wpp,publicis,omnicom,dentsu,havas}.md`.

### G.1 Per-group distribution (18 cells each, electives included)

| Group | A (direct JD) | B (adjacent) | D (index/title) | G | Key structural facts (verified 2026-11-04) |
|---|---:|---:|---:|---:|---|
| WPP | 18 | 0 | 0 | 0 | GroupM → **WPP Media** (May 2025); **WPP Creative** (Feb 2026) spans Ogilvy/VML/AKQA/Burson/Landor; Grey folded into Ogilvy; 16/18 A from WPP Media's own board; **all 5 prior WPP matrix job IDs confirmed non-live via Greenhouse API (HTTP 404; re-verified 5 Nov — HTML shells return 200 for any ID, so naive status checks cannot verify liveness)**; T12 & E-CRO A's are at WPP Creative (Media lists zero CRM/CRO titles). |
| Publicis | 17 | 1 | 0 | 0 | Strongest-evidenced group; 8/16 prior rows upgraded to A; T02 has no employer-hosted Connection Planner JD (capability language only); Performics absent from Connected Media brand strip; Leo (2025) confirmed. |
| Omnicom | 17 | 0 | 1 | 0 | **IPG acquisition closed 2025-11-26 (primary source)**: IPG Mediabrands retired; OMD/PHD/Hearts & Science + UM/Initiative/Mediahub under "Omnicom Media"; DDB/FCB/MullenLowe retiring H1-2026 — stop citing DDB as current; E-CRO = D (LinkedIn-only, zero CRO hits on official ATS). |
| Dentsu | 17 | 1 | 0 | 0 | 799 live Workday JDs; **"dentsu ONE" claim unsupported** — current brands: Carat, dentsu X, iProspect, Dentsu Creative, Merkle, Tag, Amplifi; T16 downgraded A→B (prior Medellin JD unverifiable, no live Community Manager title); only 7 live Jakarta reqs; T10 current JD lacks MMM. |
| Havas | 14 | 3 | 1 (D+B) | 0 | Prior cited JDs JR0095187/JR0096564: **absent from live Workday index per researcher; not independently confirmable** (HTML shells return 200 — see D-5); treated as historical and re-anchored: 10 cells upgraded to A with live JDs; **Moonfolks Jakarta "Digital Trading & Partnerships Manager" verified live (D — employer-attributed LinkedIn)**; no Indonesia postings on Workday (LinkedIn hiring). |

Prior-matrix revalidation summary: WPP 10 agree/6 upgraded/2 new; Publicis 8 held/8 upgraded; Omnicom mostly held but understated (T15 G→A; E-CRO downgraded); Dentsu 5 upgrades + 1 downgrade (T16); Havas mostly re-anchored.

### G.2 Evidence-quality findings

1. **The matrix's biggest integrity problem is source decay, not coverage.** Coverage is now strong (A in 83 of 90 cells across groups), but the prior matrix's key URLs are dead or expired (WPP 5/5 404; Havas cited reqs gone). A matrix without last-checked dates and live URLs is not auditable — DPA-004.
2. **Role-level ≠ chapter-level.** All 169 chapters inherit one role-level evidence line per track; no chapter has chapter-specific JD mapping. The matrix says this honestly; the curriculum must not imply otherwise.
3. **Geography skew.** Most A-evidence is US/UK/EU/India/Colombia/Brazil; Indonesia-specific direct evidence exists only in a handful of cells (WPP Jakarta platform/affiliate; Publicis Jakarta planning/performance; Dentsu CRM Jakarta; Dentsu Jakarta eCommerce; Havas Moonfolks LinkedIn D). The Indonesia relevance claim rests on a thin local-evidence base — must be stated, not hidden.
4. **Structural facts learners will see**: WPP Media/WPP Creative split; Omnicom–IPG consolidation; dentsu brand simplification; Publicis/Epsilon; Havas Village/Moonfolks. Documentation still carries stale structure ("dentsu ONE", DDB) — DPA-023.
5. **Elective evidence is asymmetric**: E-TM has A-grade coverage at all five groups; E-CRO is A at WPP only (via WPP Creative), D at Omnicom, D+B at Havas, and adjacent elsewhere — consistent with CRO being a rare dedicated title. This asymmetry must be reflected in how the elective is marketed (competency evidence, not title evidence).

---

## H. Resource and credential validation

### H.1 Credential claims — sampled live verification (5/5 confirmed)

| Claim | Verdict | Official source evidence |
|---|---|---|
| Google Ads certs: 80% pass, 75 min, retake after 1 day, 22 languages **incl. Indonesian**, 1-year validity, "professional accreditation" | **CONFIRMED** | support.google.com/google-ads/answer/9702955 (verbatim) |
| Amazon Ads: certification badges vs learning-path awards; PDF certificate with expiration date; 24-h retake; 60–90 min single sitting | **CONFIRMED** | advertising.amazon.com/academy/certifications (expiry duration not stated — register correctly refuses to claim 2 years) |
| StackAdapt Programmatic Masterclass: free, 8 modules, 120 min, module tests, "recognized certificate" | **CONFIRMED with nuance** — vendor markets it as "free 2-hour professional certification"; register's "vendor-issued, not independent accreditation" classification is the defensible reading | stackadapt.com/academy/programmatic-masterclass |
| TTD Edge Academy Programmatic 101: 1-hour course; **no certificate promised on the course page** | **CONFIRMED** — register's "learning-only" treatment correct | edgeacademy.thetradedesk.com/programmatic-101 |
| TikTok Media Buying Professional Certification: USD 200 + taxes, 60 questions, 110 min, Kryterion/Webassessor proctored, ≥1 yr experience, **2-year validity**, Accredible badge, 7-day retake wait | **CONFIRMED** (FAQ served in Indonesian) | tiktokacademy.com/student/page/3053325-certification-faqs |

### H.2 Resource-mapping defects (verified)

| Track | Defect | Scope |
|---|---|---|
| T01 | One generic Google/Meta/HubSpot catalog pair repeated for business economics, research, CRM, CRO alike | ×10 |
| T02 | Mapped to **Meta Blueprint "Media Planner" catalog** — role-wrong for a communications-planning track | ×10 |
| T03 | Label "Google Skillshop" → URL **Trade Desk Edge Academy** | ×10 |
| T05 | Label "LinkedIn Marketing Academy" → URL **TikTok Academy** | ×10 |
| T06 | Label "IAB Tech Lab foundational standards" → URL **StackAdapt** | ×12 |
| T07 | US retailer academies only (Walmart Connect, Amazon Ads) — zero Indonesian marketplace/RMN sources | ×10 |
| T08 | Google Marketing Platform ad-tech support (incl. **DV360**, the platform the track is defined against) for a direct-buying/negotiation track | ×10 |
| T10 | Label "LinkedIn Marketing Academy Measurement certification" → URL **iabtechlab.com**; GA4 Skillshop off-topic for attribution/MMM/stats | ×10 |

**Provider concentration:** Google (Skillshop/support/GMP), Meta, TikTok dominate; Indonesian providers: zero.

**Overall:** the credential *register* is among the strongest documents in the repo — accurate, well-classified, honest about unresolved items. The *mapping* is among the weakest — systematic label/role/URL mismatches that the verification layer never caught. (DPA-005)

---

## I. Assessment and rubric audit

**Architecture (good):** 169 chapter-specific rubric entries; five dimensions × 0–3 (Technical accuracy; Deliverable completeness; Analysis and judgement; Evidence/QA/governance; Communication and handoff) → ×100/15; proposed pass ≥80/100; critical-failure rule (0 on accuracy or evidence = fail regardless of total); resubmission protocol with change log, no overwriting of prior records. This is a legitimate assessment design.

**Validity (unproven):**
1. **All 507 answer keys are OPEN** — "subject-matter reviewer must validate correctness, completeness, ambiguity, and acceptable alternate answers". Zero approved keys.
2. **Templated assessor instructions**: the four "Assessor must verify" bullets are identical for every chapter; only the artifact checklist adapts.
3. **No sample submissions, no scoring anchors, no reviewer-agreement calibration**; the 80/100 threshold is asserted, not derived.
4. **No scoring engine in code**; the site says the interactive quiz bank is "masih dalam pembangunan"; production comprehension sections are empty for 14 tracks.
5. **Answer quality is uneven but mostly good**: mechanism-level answers in T04/T05/T10; but 125 answers <12 words across 81 chapters; some restate bullets/glossary (T13-CH08 Q2, T14-CH12 Q1, T06-CH02 Q1, T08-CH05 Q1); one factual slip (T03-CH06 GRP/TRP vs its own glossary).
6. **Capstone mapping thin**: T13-CH11→2 IDs, T14-CH12→1, T15-CH12→1 — integration cannot be measured by the spine.
7. Only **T05-CH10** carries an explicit area-level scoring rule (0–3 per area, min 2, two areas ≥3) — the model to replicate.

**Verdict:** assessment architecture = drafted, coherent, honestly labeled. Assessment **validity = 0% approved**. 169 rubric records do not constitute 169 valid assessments (DPA-003).

---

## J. Code and technical QA

| Check | Result |
|---|---|
| Chapter IDs in served HTML | **main: 0** `DPA-Txx-CHxx`; PR #5: 169. Production mapping is not ID-based (positional risk). |
| Guides layer | main: 2 guide files (FS + PS); PR #5: + 149 role-specific guides (318 KB) + `chapter-guide-map.js` + master renderer/roadmap. |
| Guide counts vs claim | Register claim (169 = 10 FS + 10 PS + 149) is arithmetically consistent — **reported claim, not independently object-counted in this audit**; PR #5 tech-review matrix flags the 20 legacy guides as requiring a separate pass. |
| Dead code | `CONNECTION_GUIDES` (older divergent T02 curriculum) embedded at index.html ~line 4780, never read by render pipeline. |
| Responsive CSS | 19 `@media` blocks in main and PR #5 (QA doc's "0" is wrong). Behavior untested at desktop width (see K.4). |
| Accessibility (static) | Landmarks present; aria-live status on role switch ("Jalur … dipilih…") observed working; dark-mode toggle with state label; skip link present; contrast tokens via CSS custom props; `prefers-reduced-motion` present per QA doc (static presence, not validated). |
| Runtime | Role switching, chapter expansion ("Buka semua"), progress denominator (18 for Programmatic = 12 + 6), and per-chapter resources all work in live browser QA. Console/network logs not accessible via tooling — limitation. |
| Internal anchors | QA doc claims 13/13 resolve; not independently re-run (tech-QA child failed; scope absorbed). Recorded as reported-claim. |
| Legacy links | 6 × `skillshop.docebosaas.com` in main/production; **0** in PR #5 (PR #5's fix is real but unmerged). |
| PR #5 app change shape | 217+/193− lines, 192 hunks, mostly 1:1 line replacements + small insertions near lines 2030–2038 — consistent with ID-based rendering + guide wiring, not a rewrite. |

Notable content-layer contradiction: **T07-CH06/CH07** — `index.html` summaries are title-aligned (audience → CH06; feed/digital-shelf → CH07), while the guide JS has the topics swapped. Two layers tell the learner different things (DPA-002).

---

## K. Production and deployment audit

1. **Production = main HEAD content.** 365,630-byte body hashes to git blob `a8e18a10…`, identical to `cc54ac2:index.html` and `main@640b192:index.html`. This was **tested against the actual deployed artifact** (the served HTML was downloaded and hash-compared), **not inferred from a deployment Git SHA** — no such header is exposed. No PR content is live (correct: both PRs are drafts).
2. **Deployment identity:** no public deployment-SHA header. `Last-Modified` equals request time on a cache MISS (edge artifact), so metadata time is not deployment time. Provenance established by content hash. Exact Vercel deployment object = NOT INSPECTED (auth).
3. **What the live site actually is (v11.1 scaffold):** 16 track cards with aliases; 169 chapter cards with bullets + deliverable checkboxes; CF1–CF6; per-chapter resources with credential-type labels; electives "Coming soon — bab & deliverable menyusul"; bonus parallel programs (Ahead + LinkedIn Premium; HubSpot); "Verifikasi sumber & catatan audit" section; progress 0/16 (or track+6); print/PDF; dark/light; reset.
4. **Browser QA findings (mobile-class viewport 424 px):** role switch works with a11y announcement; chapter expansion works; **guide bodies are template-stitched boilerplate** (same "Penjelasan inti" and "Contoh kasus" for all 12 Programmatic chapters, including mismatched ones); **"Cek pemahaman & pembahasan" is empty for every Programmatic chapter** (0 Q&A live for 14 tracks); per-chapter resources render but are track-level (2 refs → 1 ref). Limitations: desktop/tablet widths, console errors, localStorage round-trip, print, theme persistence not testable with available tooling.
5. **Separation of concerns (explicit):** deployment health ≠ product quality. Vercel serves the site correctly; the site's curriculum depth for 14 tracks is not the validated curriculum documented on PR #5.

---

## L. Consolidated issue register

**23 issues: 0 P0 · 10 P1 · 8 P2 · 5 P3.** No P0 is assigned: no data loss, security exposure, unauthorized change, or production failure was found; assigning P0 would inflate severity (master-prompt §15 rule). Full register with evidence, impact, root cause, action, dependencies, validation and confidence: `02-issue-register.csv`.

| ID | Sev | Category | Issue (short) |
|---|---|---|---|
| DPA-001 | P1 | curriculum | Production: templated guides + empty comprehension checks for 14/16 tracks; 0/507 Q&A live |
| DPA-002 | P1 | curriculum | T07-CH06/CH07 guide content swapped; feed/digital-shelf missing; HTML contradicts JS |
| DPA-003 | P1 | assessment | 507/507 answer keys OPEN; no score engine; threshold uncalibrated; only T05-CH10 has a scoring rule |
| DPA-004 | P1 | evidence | Matrix URLs rotted (WPP 5/5 404; Havas reqs expired); 16-vs-6 G-gap inconsistency; role-level only |
| DPA-005 | P1 | resource | Systematic label/role/URL mismatches (T02, T03, T05, T06, T08, T10); zero Indonesia sources |
| DPA-006 | P1 | documentation | "Canonical Source of Truth" is a 486 KB chat transcript |
| DPA-007 | P1 | code | No immutable chapter IDs on main; dead divergent `CONNECTION_GUIDES` |
| DPA-008 | P1 | curriculum | Competency spine IDs never defined; capstones map to 1–2 IDs |
| DPA-009 | P1 | deployment/PR | Both PRs CONFLICTING; docs divergent; Vercel checks failed (reported) |
| DPA-010 | P1 | documentation | Register glossary field missing for 70 chapters; T16-CH12 supplement stale |
| DPA-011 | P2 | curriculum | EN code-switching in assessment/content (T06–T08, T13–T16) |
| DPA-012 | P2 | curriculum | T09 missing Verification & Brand Safety; T04-CH06 title over-promise; T02 phasing missing; T14-CH02 no tier anchors |
| DPA-013 | P2 | QA | QA doc media-query self-contradiction (0 vs PRESENT; actual 19) |
| DPA-014 | P2 | curriculum | POES trio unmarked overlap; T13 boundary never taught; glossary duplication |
| DPA-015 | P2 | curriculum | Electives outline-only (28/28); overlap zones declared, unresolved |
| DPA-016 | P2 | taxonomy | Affiliate "Advanced elective" label in PR #5; Content Creator alias remains |
| DPA-017 | P2 | assessment | 20 legacy guides need a separate content/answer-key pass |
| DPA-018 | P2 | curriculum | Indonesia relevance uneven; zero local sources where they matter most |
| DPA-019 | P3 | curriculum | T03-CH06 GRP/TRP answer-key slip |
| DPA-020 | P3 | assessment | 125 short answers (<12 words); some restate bullets/glossary |
| DPA-021 | P3 | curriculum | Glossary hygiene (acronym-only; duplication) |
| DPA-022 | P3 | deployment | No deployment SHA; Last-Modified ambiguity (content-hash provenance used) |
| DPA-023 | P3 | evidence | Stale industry facts in docs ("dentsu ONE", DDB, Performics) |

---

## M. Prioritized remediation blueprint (NOT executed)

### M.1 Workstreams and release gates

**G1 — Integrity fixes before any integration (no dependencies):**
1. Fix T07-CH06/CH07 swap + author feed/digital-shelf guide (DPA-002). *Acceptance: title↔guide text↔HTML summary agree for both chapters; feed competency taught.*
2. Fix T03/T05/T06/T10 label-URL mismatches; rebuild T02 (role-fit) and T08 (publisher/negotiation) resource rows; add Indonesia sources per track (DPA-005). *Acceptance: automated label≈destination check passes 169/169; ≥1 Indonesian source per relevant track; access/price recorded.*
3. Delete/quarantine `CONNECTION_GUIDES`; adopt ID-based mapping (DPA-007). *Acceptance: zero unreferenced guide arrays; ID integrity test passes (169 ↔ 169 ↔ 169).*
4. Regenerate register with full-field validation; mark T16-CH12 supplement applied (DPA-010). *Acceptance: 169 × all fields non-empty; 0 undefined tokens.*
5. Fix QA doc media-query row (DPA-013). *Acceptance: doc matches `rg '@media'` count (19).*

**G2 — Assessment closure (blocked by G1.2 for answer content):** SME pass on 507 keys; expand flagged short answers; add chapter thresholds (T05-CH10 model); build scoring engine or explicitly withhold certification claims (DPA-003/017/020). *Acceptance: dual-reviewer agreement sample ≥30 chapters; no OPEN keys.*

**G3 — Competency spine (parallel):** publish definitions for all T01–T16 competency IDs; remap capstones (DPA-008). *Acceptance: every ID defined; capstones cover full track set.*

**G4 — Evidence re-anchoring (parallel):** replace dead URLs with the revalidation files' live sources; reconcile 16-vs-6 G-count; add per-cell last-checked dates and geography fields (DPA-004/023). *Acceptance: every cell live or explicit dated G.*

**G5 — Documentation governance (parallel):** author a real structured Source of Truth; demote the transcript to an appendix; single version per doc; decision log (DPA-006/009). *Acceptance: all "canonical" pointers resolve to the new SoT; one version per doc path.*

**G6 — Taxonomy/UI metadata (small):** remove "Advanced elective" from Affiliate card; tighten T13 aliases; re-check 16 cards against crosswalk (DPA-016). *Acceptance: card metadata matches crosswalk 16/16.*

**G7 — Language harmonization (after G2 starts):** Indonesian-only Q&A/examples or explicit bilingual policy (DPA-011). *Acceptance: 0 unflagged EN sentences in assessment fields.*

**G8 — Release verification (last):** full browser QA on preview (desktop/tablet/mobile, console/network, localStorage, print, theme); link checks; deploy; re-verify production = release commit (DPA-001/009/022). *Acceptance: all gates G1–G7 evidenced; production content-hash matches release SHA; browser QA report signed.*

### M.2 PR #5 and PR #6 reconciliation plan (plan only — no action authorized)

**Comparison (verified):**

| Aspect | PR #5 | PR #6 |
|---|---|---|
| State | OPEN draft, 86 commits, 25 files, CONFLICTING | OPEN draft, 66 commits, 17 files, CONFLICTING |
| App changes | index.html (217+/193−), fullstack-guides.js, paid-social-guides.js modified; 6 new JS files (149 guides + map + renderer + roadmap) | none (app files byte-identical to base/main) |
| Docs | 16 shared docs (identical to PR #6) | 16 shared docs + `advanced-electives-source-of-truth.md` unique |
| Unique risk | carries the only real guide layer AND the T07 swap, Affiliate label, stale CONNECTION_GUIDES | carries the only electives doc; doc-only |
| Conflicts with main | add/add on `16-core-track-role-crosswalk.md`, `role-competency-matrix-and-elective-chapter-audit.md` (.txt twins identical; main's .md versions differ) | same two conflicts |

**Retain / revise / reject:**
- **Retain (PR #5):** immutable chapter IDs; `chapter-guide-map.js`; 149 guide objects (post-fix of T07 swap); master renderer/roadmap; Docebo removal; all 16 shared docs (either copy — identical).
- **Retain (PR #6):** `advanced-electives-source-of-truth.md` (unique value; honest status).
- **Revise before integration:** T07-CH06/07 guides; Affiliate card label; resource-mapping rows (T01–T10); register glossary extraction; QA doc row; `CONNECTION_GUIDES` removal; `.md` doc conflict resolution (choose the v1.1 versions after verifying main's edits are superseded).
- **Reject/deprecate:** the stale `CONNECTION_GUIDES` block; the transcript-as-SoT framing; any claim that 169 records = validated curriculum.
- **Do not:** merge either PR as-is; squash sequentially; retarget bases to force compatibility; close either PR as a substitute for reconciliation.

**Recommended future integration (after explicit human authorization):**
1. Branch from current `main` (`640b192`), not the PR base.
2. Apply the 16 shared docs **once** (they are identical on both PRs), resolving the two `.md` add/add conflicts deliberately (retain the v1.1 content, fold in any main-only edits).
3. Add PR #6's electives doc.
4. Cherry-pick PR #5's app layer file-by-file (index.html, 3 guide files, 6 new JS files) with G1 fixes already applied.
5. Run required tests: `node --check` all JS; ID-integrity script (169↔169↔169); guide-count reconciliation; label≈URL check; browser QA on the preview; content-hash comparison to intended release.
6. Keep both PRs open/draft until gates close; close them only after the approved integration branch is verified and merged by a human.
7. Update PR descriptions to point at the integration record; preserve commit ancestry where practical (no history rewrite of main).

**Required evidence before merge:** G1–G8 acceptance artifacts; a signed browser-QA report on the preview; a live-link evidence snapshot for the 90 evidence cells; an SME sign-off sheet for the 507 keys (even if phasal).

---

## N. Coverage and confidence statement

| Area | Expected | Fully inspected | Partially inspected | Not inspected | Validated | Needs remediation | Unverified |
|---|---:|---:|---:|---:|---:|---:|---:|
| Repository files (main) | 8 | 8 | 0 | 0 | — | — | 0 |
| Repository files (PR trees) | 25 + 20 | 25 + 20 (inventory + content) | 0 | 0 | — | — | 0 |
| Core tracks | 16 | 16 | 0 | 0 | 3 (T04; T05/T06 minor) | 13 | 0 |
| Core chapters (denominator = 169 actual IDs) | 169 | **169** | 0 | 0 | 10 | 159 (133 PV + 22 VWMI + 4 NMR) | 0 |
| Elective chapters | 28 | 28 (doc read; outline only) | 0 | 0 | 0 | 28 (authoring) | 28 |
| Agency evidence cells (core) | 80 | **80** | 0 | 0 | 0 (role-level only) | 80 | 0 |
| Agency evidence cells (electives) | 10 | **10** | 0 | 0 | 0 | 10 | 0 |
| Credential claims | 9 in register | 5 live-sampled | 4 (register text only) | 0 | 5 confirmed | 0 | 4 (unverified this audit) |
| Resource URLs | ~169 mapping rows | 10 defect rows + 9 issuer URLs | rest | bulk unopened | — | 70+ mapped defects | rest |
| Assessments / answer keys | 507 | 507 (structure) | — | 0 | 0 approved | 507 | 0 |
| Production checks | site | role switch, expansion, 6 chapters, 16 cards | console/network/desktop | — | — | see K | — |
| **Independent SME validation (Class D)** | 169 chapters + 507 answer keys | **0** | 0 | **169 (+507 keys)** | **0** | 0 | **All — repo gates OPEN; no SME sign-off exists or is claimed** |

**Confidence:** High for repository state, PR/commit facts, production identity (content-hash), chapter inventory, status counts, T07 swap, resource mismatches, credential claims sampled, and the six role-separation tests. Medium for the depth of "technical accuracy" of individual chapters (SME judgment, no live-platform fact-check) and for evidence-cell quality (ATS JS shells limit full-JD archiving). Low/unknown for: Vercel deployment internals, PR preview deployments, browser console errors, desktop-width rendering, and any claim about future employer demand.

**What this audit did not do (and must not be represented as done):** no file was modified; no branch/commit/PR/deployment was created or changed; no merge was performed or recommended for immediate execution; no SME certification was issued; no claim is made that 169 records = 169 validated chapters.

**Audit end state:** READ-ONLY. STOPPED per instruction. Awaiting separate, explicit authorization before any remediation.

---

### Appendix (delivered alongside this report)
- `01-169-chapter-audit-matrix.csv` — 169 rows × 14 columns (chapter-level evidence).
- `02-issue-register.csv` — 23 issues (P0–P3) with all required fields.
- `03-electives-outline-matrix.csv` — 28 proposed elective chapters.
- `appendix/evidence-{wpp,publicis,omnicom,dentsu,havas}.md` — 18-row revalidations per holding group, with URLs, dates, geography, limitations, confidence.
- `appendix/findings-t01-t04.md`, `findings-t05-t08.md`, `findings-t09-t12.md`, `findings-t13-t16.md` — per-track architecture findings and defect evidence.
- `appendix/main-agent-findings.md` — baseline, deployment, production QA, governance, electives, resources, assessment (main-agent phases).
