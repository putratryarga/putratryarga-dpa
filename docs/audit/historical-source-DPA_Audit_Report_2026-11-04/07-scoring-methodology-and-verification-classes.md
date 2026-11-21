# Scoring Methodology, Status Rules, Severity Rationale, and Verification Classes
**Date:** 5 November 2026 · **Status:** Methodology supplement to `00-DPA-audit-report.md` (Amendment 1)

---

## 1. What the chapter statuses are — and are not

| Term used in this audit | Meaning |
|---|---|
| **Agent desk-review** | An independent auditor agent read the chapter's extracted content (evidence register), spot-checked guide source files against the register, and scored seven dimensions 0–4. |
| **VALIDATED / VALIDATED WITH MINOR IMPROVEMENTS / PARTIALLY VALIDATED / NEEDS MAJOR REVISION** | Desk-review status labels (rules in §3). They describe **instructional-substance quality as inspected from the snapshot**. |
| **NOT** | SME approval. NOT answer-key validation. NOT certification. NOT a claim that the repository's own review gates are closed. |

**Reconciliation with the repository's technical review matrix:** `docs/169-chapter-technical-review-matrix.md` marks SME/technical review, answer-key correctness, rubric calibration and resource fit **OPEN for all 169 chapters**. This audit's desk-review statuses **do not close, override, or downgrade any of those OPEN gates**. A chapter can be desk-review VALIDATED and still have every repository validation gate open — that is exactly the state of the 10 VALIDATED chapters (all T04): their teaching content passed desk review, while their answer keys remain unapproved, their rubric uncalibrated, and their resource fit formally OPEN.

---

## 2. Dimension definitions (0–4 scale, applied identically by all four chapter auditors)

| Dimension | 0 — Missing/unusable | 1 — Title-level/generic | 2 — Partial | 3 — Professionally usable | 4 — Rigorous + evidence |
|---|---|---|---|---|---|
| Instructional substance | No teaching content | Title/bullets only, or template boilerplate | Teaches some of the competency; important parts missing | Complete teachable unit: concept, example, workflow, practice | As 3 plus verifiable depth, nuance and evidence |
| Competency alignment | Content belongs to another role/track | Same topic but wrong role semantics | Right track, mapping structurally plausible but spine unvalidated | Teaches the track's own competency with correct role semantics | As 3 plus published, validated competency mapping |
| Technical accuracy | Materially wrong/unsafe | Multiple errors or undefined claims | Correct core with minor omissions/hedges | Correct, current, appropriately hedged | As 3 plus external verification against authoritative sources |
| Practical exercise | None | Generic instruction ("practice this") | Exercise present, partially specified | Quantified, concrete, role-specific exercise | As 3 plus worked examples and QA criteria |
| Deliverable | None | Label only | Named artifact, incomplete spec | Complete artifact spec matching the competency | As 3 plus scoring rule / assessor guidance |
| Resource/evidence quality | No resource or unusable | Generic catalog or mislabeled link | Live official resource but off-topic/insufficiently specific | Chapter-fit official resource | As 3 plus verified access, region, credential type |
| Assessment alignment | No assessment | Restates bullets/glossary | Static Q&A present but unvalidated | Q&A adds decision logic (keys still OPEN at repo level) | Validated keys + calibrated rubric + scoring engine |

**Score column** = arithmetic mean of the seven dimensions, rounded to 1 decimal (auditors A and D sometimes produced integer means — both forms appear as authored).

**Provenance of scores:** dimensions were scored independently by four auditor agents (A: T01–T04; B: T05–T08; C: T09–T12; D: T13–T16) from the PR #5 snapshot, with register↔guide verbatim spot-checks (≥1 chapter per track; 9 chapters verbatim-verified for the 32 VALIDATED/VWMI chapters — recorded per chapter in `06-validated-chapters-evidence.md`). The main agent reconciled the outputs and re-verified two resource classifications on 5 Nov (see discrepancy log items D-2, D-5).

---

## 3. Status decision rules (applied mechanically)

| Rule | Status |
|---|---|
| Any dimension ≤ 1 | **NEEDS MAJOR REVISION** |
| Any dimension = 2 | **PARTIALLY VALIDATED** |
| All dimensions ≥ 3 with recorded minor defects | **VALIDATED WITH MINOR IMPROVEMENTS** |
| All dimensions ≥ 3, no material pending defect | **VALIDATED** |
| Content could not be inspected | **NOT VERIFIED** |
| Chapter absent | **MISSING** |

Because the repo-level assessment/resource gates are open for all chapters, "resource/evidence quality" and "assessment alignment" were capped at 3–2 by evidence rather than generosity, which is why 135/169 chapters are PARTIALLY VALIDATED and only 10 are VALIDATED.

**Post-verification amendment (5 Nov):** T10-CH07 and T10-CH08 were originally scored resource/evidence = 1 → NEEDS MAJOR REVISION. Live URL verification showed both mapped resources exist and are official (Skillshop root; IAB Tech Lab Measurement pillar), so the defect is **mislabeling + insufficient specificity**, not absence → rescored to 2 → PARTIALLY VALIDATED. See discrepancy log D-2.

---

## 4. Issue severity rules (P1/P2/P3) — reproducible rationale

Severity follows the master prompt's definitions. Decision rule applied:

- **P0 (critical)** requires data loss, security exposure, unauthorized change, severe production failure, or fundamental integrity needing immediate containment. **None found** → no P0 assigned. (Explicitly checked: no auth/secret exposure in the repo, no production outage, no data destruction, no unauthorized modification of the repository.)
- **P1 (high)** = a defect that **materially undermines the roadmap's validity or the release decision** if unfixed: production shows something other than the intended curriculum (DPA-001); content teaches the wrong topic under a title (DPA-002); no assessment is validatable (DPA-003); the evidence register is not reproducible (DPA-004); the resource layer systematically misdirects learners (DPA-005); governance authority is unsound (DPA-006); mapping integrity is at silent-break risk (DPA-007); the competency spine cannot support measurement (DPA-008); the only complete curriculum is trapped in conflicting PRs (DPA-009); the register misrepresents the guides (DPA-010).
- **P2 (medium)** = meaningful quality/completeness issues with manageable impact and no direct release-gate falsehood: language consistency (DPA-011), specific scope gaps (DPA-012), QA-doc self-contradiction (DPA-013), implicit boundary teaching (DPA-014), electives being outline-only by declared design (DPA-015), UI metadata/taxonomy labeling (DPA-016), legacy-guide QA non-uniformity (DPA-017), uneven Indonesia grounding (DPA-018).
- **P3 (low)** = editorial/consistency/maintenance: single answer-key slips (DPA-019), short-answer concentration (DPA-020), glossary hygiene (DPA-021), deployment-provenance ergonomics (DPA-022), stale industry facts in docs (DPA-023).

Each register row carries its own rationale in the `Impact` field. Downgrades were not applied merely because workarounds exist; inflations were not applied to make the report appear more important.

---

## 5. Verification classes (how to read every claim in the report)

| Class | Definition | Examples in this audit |
|---|---|---|
| **A. Agent desk-review findings** | Judgments by auditor agents from reading snapshot content | Chapter scores/statuses; track architecture findings; boundary-test verdicts; duplication assessments |
| **B. Static repository verification** | Deterministic checks against repository bytes (clones, greps, hashes, diffs) | 169 unique IDs; 0 `undefined` tokens; 507 Q&A; 169 rubric entries; 19 `@media` blocks; 6 Docebo links on main/0 on PR5; 0 `DPA-Txx-CHxx` on main vs 169 on PR5; PR/branch SHAs; blob identity of app files; `CONNECTION_GUIDES` dead code |
| **C. External source verification** | Live checks of external web resources | 5/5 credential-issuer claims confirmed; IAB Tech Lab + Skillshop liveness (5 Nov); Greenhouse API liveness for 5 dead + 3 live WPP jobs; TikTok Academy URL 200 |
| **D. Independent SME validation** | Human subject-matter expert review with sign-off | **NOT PERFORMED in this audit. 0% coverage.** All desk-review statuses remain subordinate to future SME validation. |
| **E. Browser/runtime QA** | Live browser interaction with the production site | Role switching, chapter expansion, empty comprehension checks for Programmatic Bab 1–6, templated guide text, per-chapter resources, a11y status announcement. Limitations: console/network logs not accessible; desktop width not testable. |
| **F. Production deployment verification** | Establishing what production serves and its provenance | Production HTML downloaded and hash-verified as git blob `a8e18a10…` == `cc54ac2:index.html` == `main@640b192:index.html`; no deployment-SHA header exists, so provenance is content-based, **not** SHA-inferred. |

**Report-wide rule:** every chapter status quoted anywhere in the report or CSVs is a Class-A desk-review finding; every repository count is Class B; every external URL verdict is Class C unless marked otherwise.

---

## 6. Evidence-type distinctions used in the 90-cell matrix

Per the master prompt and the owner's reconciliation request, the following distinctions are preserved per cell in `04-90-cell-evidence-matrix.csv` (columns `Revalidated class`, `Evidence type`, `Evidence URLs`, `Prior verdict`, `Row detail`):

| Evidence type | Meaning |
|---|---|
| **Employer-hosted JD (current)** | Class A — a job description hosted by the employer's own ATS/careers site, live at access time (2026-11-04), duties materially supporting the track |
| **…(group-level / BU caveat)** | A-grade JD hosted by a sister agency inside the holding group, not the media network itself (e.g., WPP T12/E-CRO at VML/Ogilvy) |
| **…(weak/entry-level caveat)** | A-grade JD but intern/entry level only (e.g., Havas T08, E-TM) |
| **Adjacent employer-hosted role** | Class B — live employer JD whose duties are adjacent, not the track's role |
| **Index/title/employer-attributed (LinkedIn or career index)** | Class D — title listings, career indexes, or LinkedIn-hosted postings attributed to the employer (e.g., Havas Moonfolks Digital Trading & Partnerships Manager, LinkedIn ID 4341082266) — explicitly weaker: no full JD body, no posting date |
| **Mixed (D+B)** | e.g., Havas E-CRO: LinkedIn D evidence + adjacent B roles + expired historical A (not counted) |
| **Evidence gap** | Class G — no sufficiently specific evidence |

**Currency handling:** expired postings are recorded as historical and are NOT counted as current vacancies (e.g., Havas E-CRO's expired JR0096564; WPP's five dead job IDs). Where a prior matrix source proved dead, the cell was re-anchored to a live source and the swap is recorded in `Prior verdict`.

---

## 7. Known limitations of the scoring itself

1. Scores are desk-review judgments, not psychometrically calibrated measurements; inter-rater reliability was not measured across the four auditors (each audited disjoint chapters).
2. "Technical accuracy" reflects SME-style reading of the text against industry-standard practice; no live platform-documentation fact-check was run per chapter.
3. Resource-fit scoring was sharpened on 5 Nov for T10-CH07/08 after live URL verification; the same live-verification standard has not yet been applied to all 169 resource rows (spot-verified only) — resource/evidence scores elsewhere may shift ±1 when the full URL pass runs.
4. The register (not the guide JS) was the primary scoring input for most chapters; register↔guide fidelity was verbatim-verified on a sample per track (documented per chapter in `06`), and the register extraction defects found (glossary field missing for 70 chapters; T16-CH12 history) are themselves reported issues (DPA-010).
