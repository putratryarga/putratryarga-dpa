# DPA Quiz & Assessment Engine — Technical Design

**Version:** 0.1 · 5 November 2026  
**Status:** FORMATIVE SCAFFOLD IMPLEMENTED (synthetic-only); no approved scored bank or summative engine is claimed  
**Scope:** 169 core chapters / 507 existing static Q&A items; future elective integration is a separate gate  
**Architecture assumption:** Existing project is a static browser application with JavaScript guide objects and local progress persistence. Any authenticated server-side assessment requires a separate backend decision.

## 1. Executive decision

Build the quiz engine in layers, but do not treat the current 507 static Q&A pairs as an approved scored question bank.

The current guide data contains question/answer pairs shaped as `{ q, a }`. The current UI renders them as reflective checks with a disclosure to view the answer. That is useful learning support, but it does not supply choice options, distractors, stable item IDs, objective mapping, scoring rules, answer-key approval or a submission/attempt record. Static Q&A is therefore not a scored quiz.

**Recommended first release:** a formative, low-stakes, accessible chapter quiz shell tested with synthetic fixtures. It must refuse to load unapproved items into scored mode. A browser-only build may store local practice progress, but cannot be described as secure high-stakes grading because client code and localStorage are user-controlled.

## 2. Current-state findings

| Finding | Evidence in current application | Design consequence |
|---|---|---|
| Existing learning checks are Q&A pairs | Guide renderer maps `guide.checks` to question text and a disclosure containing the answer | Keep the current reflective disclosure distinct from quiz scoring |
| No scored answer model | The pair has `q` and `a`, not answer options, distractors, stable IDs or scoring metadata | Do not auto-convert Q&A to MCQs without editorial/SME review |
| Chapter identity exists | Canonical chapter IDs use `DPA-Txx-CHxx` and the guide map resolves by ID | Every question must reference the canonical `chapterId`; never rely on array position |
| Progress persistence exists | Existing UI stores selected progress/theme in localStorage | Reuse only for low-stakes local progress; version the storage schema |
| Mastery target is proposed | Existing UI presents an internal 80% chapter target but Source of Truth says it is not calibrated | Do not treat 80% as an approved certification/pass threshold |

## 3. Product boundaries

### In scope for the first formative release
- Chapter-level quiz entry and exit;
- approved single-select items only for the first scored item type;
- submit, score, rationale and distractor feedback;
- clear review/try-again state;
- progress indicator and local practice history;
- empty, loading, unavailable and error states;
- keyboard and screen-reader support;
- deterministic automated tests with synthetic fixtures.

### Explicitly out of scope until separately approved
- high-stakes or credential-bearing certification;
- automatic scoring of open-ended answers with an LLM;
- claims that a learner has mastered a role/pathway based only on a short quiz;
- public release of draft/SME-unreviewed answer keys;
- QTI 3.0 conformance certification;
- cross-device learner analytics or personal data collection without privacy/security design;
- elective assessment release before its 28 drafts have independent validation.

## 4. Canonical item schema

Use a versioned, normalized item contract. Keep learner-facing prompt/options separate from the private answer key.

### 4.1 Public item payload

```json
{
  "schemaVersion": "1.0",
  "itemId": "DPA-T08-CH03-Q01",
  "chapterId": "DPA-T08-CH03",
  "learningOutcomeIds": ["T08-CH03-LO02"],
  "itemVersion": 1,
  "type": "single_select",
  "difficulty": "intermediate",
  "prompt": "Which information should be normalized before comparing publisher proposals?",
  "stimulus": null,
  "options": [
    {"optionId": "A", "text": "Comparable placement, audience, billable unit, dates and cost basis"},
    {"optionId": "B", "text": "Publisher logo and salesperson seniority only"},
    {"optionId": "C", "text": "Gross rate without discounts, fees or delivery definitions"},
    {"optionId": "D", "text": "Total followers across unrelated publisher social accounts"}
  ],
  "maxPoints": 1,
  "feedbackPolicy": "after_submit",
  "reviewStatus": "APPROVED",
  "contentVersion": "T08-2026-11-05-v1",
  "sourceRefs": ["https://example.invalid/source"]
}
```

The example above is **SCHEMA ILLUSTRATION ONLY**, not an approved learner question. The `.invalid` URL is deliberately non-resolving and must never be used as a citation.

### 4.2 Private answer-key record

```json
{
  "itemId": "DPA-T08-CH03-Q01",
  "itemVersion": 1,
  "correctOptionIds": ["A"],
  "rationale": "Proposal comparability requires the same commercial and delivery basis.",
  "distractorRationales": {
    "B": "Publisher identity alone does not establish value or comparability.",
    "C": "Gross rate omits material net-cost and delivery terms.",
    "D": "Unrelated follower totals are not a comparable billable unit."
  },
  "scoringRule": "exact_match",
  "review": {
    "status": "APPROVED",
    "reviewerRole": "qualified_subject_matter_reviewer",
    "reviewedAt": "REQUIRED_BEFORE_RELEASE",
    "sourceCheck": "REQUIRED_BEFORE_RELEASE"
  }
}
```

The answer-key record is a design example only. The private record must not be bundled in a public JavaScript payload for any summative assessment. A real release needs actual reviewer identity/date/source references and versioned approval evidence.

### 4.3 Required fields and constraints

- `itemId`: immutable and unique; suggested form `DPA-Txx-CHxx-Qnn`.
- `chapterId`: exact canonical ID; reject missing, extra or unknown IDs.
- `learningOutcomeIds`: map to observable chapter outcomes, not broad topic labels.
- `itemVersion`: increment when prompt, options, key, rationale or scoring changes.
- `type`: begin with `single_select`; add other item types only after type-specific validation.
- `options`: two or more unique option IDs; avoid grammatically obvious or length-biased distractors.
- `correctOptionIds`: private and exact; key must be confirmed by reviewer.
- `rationale`: explains why the answer meets the learning outcome; not merely “A is correct”.
- `distractorRationales`: explains key misconception for each distractor where useful.
- `sourceRefs`: direct and specific sources, with relevant section/module and last-checked metadata in the authoring register.
- `reviewStatus`: one of `DRAFT`, `EDITORIAL_REVIEW`, `SME_REVIEW`, `APPROVED`, `RETIRED`.
- Only `APPROVED` items with a complete answer-key review record may be loaded in scored learner mode.

## 5. Separation of content, key and delivery

| Layer | Responsibility | Must not do |
|---|---|---|
| Authoring register | Source, outcome, difficulty, distractor rationale, review history and version | Expose unreviewed keys to learners |
| Public quiz payload | Item ID, chapter, prompt, options and safe metadata | Contain correct-answer IDs for secure summative scoring |
| Private answer-key service | Approved key, scoring rule, rationale and reviewer provenance | Accept client-supplied answer correctness |
| Quiz engine | State transitions, input validation, attempt flow and score display | Invent a correct answer or silently score draft data |
| Progress store | Low-stakes completion and client-side practice record | Be treated as a trusted gradebook |
| Assessment record (future backend) | Authenticated attempt ID, submitted choices, result, version and audit trail | Be created before privacy, security and retention rules are approved |

### Browser-only formative mode

In a static site, the answer key is inspectable in downloaded JavaScript and client state can be altered. The browser-only version must therefore be labelled **FORMATIVE PRACTICE**, and any score must be described as a local self-check, not a secure grade or credential.

### Summative / authoritative mode

Before issuing an authoritative score, implement a server-side key and grading endpoint with:
- authenticated learner identity and authorization;
- item/answer-key retrieval restricted to the server;
- server-side answer validation and scoring;
- attempt ID and idempotency protection;
- rate limiting and abuse handling;
- auditable item/version/key provenance;
- approved data minimization, privacy notice, retention and deletion rules;
- reviewer access control and audit log;
- recovery and incident process.

No backend provider or database is selected in this design. That decision requires architecture, cost, security and privacy review.

## 6. Quiz state machine

```text
NOT_AVAILABLE
  └─ approved item set exists → READY
READY
  └─ learner starts → IN_PROGRESS
IN_PROGRESS
  ├─ learner selects/changes response → IN_PROGRESS
  ├─ learner exits → SAVED_DRAFT (formative only)
  └─ learner submits → SUBMITTED
SUBMITTED
  ├─ validation succeeds → SCORED
  └─ validation fails → ERROR (preserve response where safe)
SCORED
  ├─ feedback viewed → REVIEWED
  └─ eligible retry → READY
REVIEWED
  └─ eligible retry → READY
```

A question cannot move to `READY` for scored mode unless its release status and key are approved. The UI must not display a successful score on network, storage or validation failure. A retry must create a new attempt state and retain the item version used.

## 7. Scoring and pass policy

For a single-select formative quiz:

`rawScore = sum(points earned)`  
`percentage = 100 × rawScore ÷ total available points`

Rules:
- If there are zero active items, do not divide by zero; show `NOT_AVAILABLE`.
- If an answer is missing, apply the documented item rule (default zero for single-select) and show the count of unanswered items before submit.
- Do not award partial credit for single-select.
- Store numeric raw score and maximum points; round only for display.
- Keep the item set and key version attached to the attempt result.
- Do not infer mastery from one quiz; use objective coverage and practical deliverables separately.
- The existing 80% value remains a **proposed internal target**, not a calibrated pass standard. Do not label a learner PASS/FAIL against it until sample submissions, item difficulty, content coverage, critical errors and reviewer agreement are established.

## 8. Authoring, review and release workflow

1. **Extract:** assign stable item IDs and learning-outcome IDs to the current 507 Q&A items; preserve the original wording and answer text in the source register.
2. **Classify:** mark whether each item is suitable for scored MCQ, short response, scenario judgement or reflective self-check. Do not force every answer into a multiple-choice format.
3. **Draft:** for MCQs, add distractors tied to plausible misconceptions. Record why each is wrong and what source supports the key.
4. **Editorial review:** check clarity, ambiguity, reading level, translation, bias, answer leakage and option quality.
5. **SME review:** verify factual correctness, alternative interpretations, currentness and source fit.
6. **Pilot:** collect item-level response patterns and reviewer judgement; investigate ambiguous/high-disagreement items before scoring use.
7. **Approve:** lock item version, answer-key version, source check and reviewer provenance.
8. **Release:** only approved items enter scored mode. Unapproved items remain reflective practice or hidden.
9. **Monitor:** version questions when platform/product facts change; retire stale items and preserve historical attempt-version mapping.

### Question-bank acceptance minimums

For every item, retain:
- item/chapter/outcome IDs;
- question type and difficulty rationale;
- keyed answer and rationale;
- all acceptable alternatives if not single-select;
- source URL + exact section/module + checked date;
- editorial and SME disposition;
- item version and release history.

## 9. First implementation architecture

Keep the first implementation modular and dependency-light.

| Module | Responsibility | Suggested file |
|---|---|---|
| Item contract/schema | Validate item shape, IDs, options and review status | `quiz-schema.js` |
| Bank adapter | Load by canonical chapter ID; return only approved public items | `quiz-bank.js` |
| State engine | Start, select, submit, score, review, retry and reset | `quiz-engine.js` |
| UI renderer | Accessible form, progress, feedback, empty/error states | `quiz-renderer.js` |
| Local practice persistence | Versioned non-authoritative progress only | `quiz-progress-store.js` |
| Tests | Schema, scoring, state and DOM interaction tests | `tests/quiz-*.test.js` |

Do not create a monolithic script in `index.html`. Map all data to immutable chapter IDs. Keep test fixtures in a separate directory and filename; they must carry `SYNTHETIC_TEST_ONLY` metadata and must never be imported by the production question bank.

## 10. Accessibility and interaction acceptance

For every quiz control:
- Use semantic `fieldset` and `legend` to group options; each radio input has a programmatic label.
- The entire flow is keyboard operable; focus order matches visual order.
- After submit, move focus to or announce the result heading without disorienting the learner.
- Use a polite live region for score/feedback changes; do not announce every keystroke.
- Correct/incorrect state is communicated through text and icon/shape, not color alone.
- Ensure visible focus, contrast, reflow, zoom and reduced-motion behavior.
- Errors are specific and preserve responses safely; empty state explains why quiz is unavailable.
- Do not rely on drag-only, hover-only or timeout-only interactions.

Target WCAG 2.2 AA for applicable success criteria, validated by both automated checks and human keyboard/assistive-technology review. A clean automated scan alone does not certify conformance.

## 11. Test plan and acceptance gates

| Test ID | Test | Expected result |
|---|---|---|
| QENG-001 | Load by canonical chapter ID | Only the requested chapter's approved items load |
| QENG-002 | Unknown/orphan/duplicate item ID | Validator fails with item and chapter context |
| QENG-003 | Draft or SME-pending item | Not available in scored mode |
| QENG-004 | Synthetic test fixture | Isolated from production bank; visible test-only label |
| QENG-005 | Submit all correct / all incorrect / mixed | Deterministic raw score and percentage |
| QENG-006 | Boundary score values | Correct numeric result at 0%, exact threshold and just below/above threshold; no rounding-based false pass |
| QENG-007 | Empty bank / missing option / duplicate option ID | Safe unavailable or validation error; no false score |
| QENG-008 | Retry and refresh | Correct attempt/version semantics and no stale answer leakage |
| QENG-009 | localStorage failure or tampering | Formative mode degrades safely; no authoritative grade claim |
| QENG-010 | Public payload inspection | No private correct-answer IDs in summative client payload |
| QENG-011 | Keyboard and screen reader | Options, submit, feedback and retry are operable and announced |
| QENG-012 | Mobile responsive layout | No clipping, hidden controls or horizontal overflow at target viewports |
| QENG-013 | Versioned item change | Old attempt retains historical item version; new attempt uses approved current version |
| QENG-014 | Browser console/network | No uncaught error or silent failed submission |

**Release gates:**
- Prototype gate: QENG-001–009 with synthetic fixtures only.
- Formative pilot gate: approved item sample, reviewer sign-off and accessibility tests.
- Scored release gate: QENG-001–014 plus approved bank, secure server-side grading, privacy/security review, calibrated scoring and learner pilot.
- Production release gate: exact-head CI, preview browser evidence, reviewer approval and rollback plan.

## 12. Interoperability and standards

QTI 3.0 may be evaluated later if portability to an LMS or third-party assessment platform becomes a requirement. Do not claim QTI conformance from a custom JSON schema. If selected, map item metadata, responses, scoring, outcome reporting and packaging to the applicable 1EdTech specification and run conformance tests.

## 13. Dependencies and unresolved decisions

| Dependency | Required decision/input | Blocking effect |
|---|---|---|
| Answer key review | SME-approved answers, alternatives and rationales for all items used in scored mode | Blocks scored content release |
| Item authoring | Distractors, learning-outcome IDs, difficulty and source section | Blocks MCQ bank |
| Threshold calibration | Sample learner work, item difficulty and reviewer agreement | Blocks pass/fail threshold |
| Backend trust model | Whether results are local formative or authoritative summative | Blocks high-stakes scoring |
| Privacy and retention | Learner identity, stored responses, consent/notice, access and deletion | Blocks learner account/history feature |
| Accessibility pilot | Human keyboard and assistive-technology review | Blocks accessible release claim |
| QTI portability | Explicit LMS/export use case | Blocks only QTI conformance, not formative engine |

## 14. Recommended build sequence

1. Implement schema validation and a fixture-only engine with 3–5 synthetic items.
2. Add accessible renderer and state-machine tests.
3. Test on one chapter in hidden/draft mode; do not load unreviewed 507 Q&A as scored questions.
4. Pilot a small set of SME-approved items and calibrate feedback and score interpretation.
5. Expand in controlled batches, preserving item provenance and version history.
6. Select a backend only if authoritative cross-device/summative scoring is required.

**Decision:** Start the formative quiz shell using synthetic test fixtures in parallel with the 507-item editorial/SME review. Keep all unapproved answers out of scored mode. No pass threshold, credential or learner mastery claim is approved by this design.


## 12. Implementation record — 5 November 2026

**Disposition:** isolated formative scaffold PRESENT; integration with the 169 chapter experience and approved assessment bank remains OPEN.

Implemented on the remediation branch:
- `scripts/dpa-quiz-engine.js`: dependency-free, browser/Node-compatible engine with chapter/item identity validation, synthetic-fixture-only gating, selection, unanswered guard, deterministic scoring, feedback, review, retry and attempt history.
- `scripts/dpa-quiz-synthetic-fixtures.js`: three clearly labelled, synthetic T10 single-select examples with separate answer-key records. They are engineering fixtures, not approved learning items.
- `quiz-engine-prototype.html` and `scripts/dpa-quiz-sandbox.js`: standalone accessible prototype with native radio controls, progress, submit, inline validation, results, rationale review and retry.
- `scripts/test-dpa-quiz-engine.js`: deterministic tests for valid/empty banks, unsupported summative mode, schema and ID constraints, duplicate IDs, invalid option/key version, unanswered submission, score calculation, feedback, retry/history and snapshot isolation.
- `.github/workflows/dpa-quiz-engine-qa.yml`: separate Node 20 workflow to run syntax, engine and prototype trust-boundary checks on the remediation branch.

### Security and release boundary

- The prototype deliberately ships only synthetic fixture keys to the browser. That is acceptable only for a test sandbox; the page is not a production exam or secure gradebook.
- Engine creation rejects modes other than `formative` and rejects items without `fixtureStatus: SYNTHETIC_TEST_FIXTURE`.
- No data is written to localStorage/sessionStorage, no external API is called, and no learner identity or submission is collected.
- The prototype is standalone and has not been wired into the main chapter renderer or the existing `guide.checks` Q&A.
- The 507 Q&A pairs remain reflective learning content. They have not been auto-converted, keyed, calibrated or approved.
- No passing threshold, credential decision, server-side grading, backend registry or certificate workflow is implemented.
- `noindex` is a crawler hint, not an access-control mechanism. Do not place confidential items or real answer keys in this prototype.

### Verification status

The source and tests have been added. Automated workflow execution and actual browser interaction are separate verification gates and must be recorded against the exact commit before the scaffold can be called CI-verified or browser-verified.

**Requirement disposition:** QUIZ-001 = PARTIAL (isolated formative scaffold present; production integration and browser/runtime verification remain open). QUIZ-002, QUIZ-003, QUIZ-004 and all content/SME approval remain OPEN.


## 13. Browser and accessibility test evidence — 5 November 2026

**Exact tested commit:** `29c981f58be81d470ddb5c0e4542753eb96b4a6f`

**Automated evidence**
- [DPA Quiz Engine QA — run 41970086027](https://github.com/putratryarga/putratryarga-dpa/actions/runs/41970086027): SUCCESS.
- [DPA Remediation Static QA — run 41970086188](https://github.com/putratryarga/putratyarga-dpa/actions/runs/41970086188): SUCCESS.
- Unit suite passed synthetic-only fixture gating, unsupported scored-mode rejection, empty-state behavior, validation, unanswered guard, deterministic scoring, rationale, review/retry and attempt-history isolation.
- Playwright + axe passed initial, question and result states using the configured WCAG 2.0/2.1/2.2 A/AA tags. The browser flow passed unanswered guard, response/progress, result, review, retry, native radio keyboard navigation and a 390px viewport with no horizontal overflow.
- Trust-boundary checks passed for synthetic-only labels and no localStorage/sessionStorage persistence or external API fetch in this sandbox.

**Boundary:** this is isolated local browser QA for `quiz-engine-prototype.html`. It is not an authenticated session on the main DPA learning experience, does not validate the role selector/chapter renderer, and does not constitute full manual WCAG conformance or formal accessibility certification. Main application browser QA, server-side grading and scored item/SME approval remain OPEN.
