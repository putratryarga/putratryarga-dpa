# DPA Certificate Issuance & Verification
**Document type:** Product / technical feature specification  
**Version:** 0.1  
**Date:** 5 November 2026  
**Status:** PROPOSED — DESIGN BASELINE ONLY; NOT IMPLEMENTED; ISSUANCE NOT AUTHORIZED

## 1. Purpose

Define a controlled way for the Digital Performance Architect (DPA) learning program to issue and publicly verify its own learning credentials after a learner has met documented completion and assessment requirements.

The first intended credential family is:
- **Certificate of Participation** — attendance or participation only; it must not imply successful completion or demonstrated competence.
- **Certificate of Completion** — completion of a defined DPA program or learning pathway against published completion rules.
- **Track Achievement Certificate** — successful completion of a specific specialist track and its approved assessment/capstone requirements.

The issuer must be named accurately on every credential. Until a legally appropriate issuer identity and operating policy are approved, the issuing entity is recorded as **DPA program issuer — identity pending approval**.

## 2. Credential boundary and claims

DPA may issue a program-owned learning certificate as the issuer, subject to applicable legal, consumer-protection, privacy and recordkeeping obligations. Such a credential is evidence of the DPA program's own requirements; it is not automatically:
- a BNSP certificate or an LSP-issued competency certificate;
- a government-accredited qualification, academic degree or regulated professional licence;
- an official certificate issued by Google, Meta, TikTok, IAB or another third party;
- proof of employment, guaranteed job readiness or a job placement.

Do not use the labels **BNSP**, **LSP**, **nationally certified**, **government accredited**, **licensed professional**, or **professional certification** on a DPA-issued certificate unless the relevant authorization, scheme, issuer relationship and approval are independently evidenced.

A future partnership with an appropriately licensed LPK/LSP may be evaluated as a separate project. It is not assumed by this specification.

## 3. Recommended learner-facing model

| Credential | Minimum meaning | Issuance rule |
|---|---|---|
| Certificate of Participation | Learner attended or participated in a defined activity | Attendance/participation evidence recorded; no competency claim |
| Certificate of Completion | Learner completed the stated program/pathway and required learning activities | Completion rules published and all required activities verified |
| Track Achievement Certificate | Learner demonstrated the track's assessed outcomes | Completion plus calibrated assessment and approved capstone/rubric decision |

The recommended first full credential is **Certificate of Completion**. A Track Achievement Certificate is a later, higher-assurance tier and must not be issued merely because a learner clicked through chapters or completed reflective Q&A.

Each certificate must state its exact scope: program version, track(s), chapter or assessment scope where relevant, completion date, issuer, credential ID and verification destination.

## 4. Eligibility and assessment gates

No credential is issued until all applicable gates are met:

1. Learner identity and the exact certificate display name have been confirmed.
2. The learner has completed the published required chapters, activities and deliverables for the credential scope.
3. All required assessments use approved items, answer keys, scoring rules and retake rules.
4. Any required capstone has been evaluated using an approved, calibrated rubric by an authorized reviewer.
5. The passing threshold and critical-failure rules have been approved before the learner is assessed; a proposed threshold is not sufficient.
6. The completion decision is recorded with evidence and the version of the requirements applied.
7. An authorized issuer/reviewer approves issuance.

The current 80% target is uncalibrated. Existing 507 reflective Q&A pairs are not an approved scored question bank. Draft rubrics are not calibrated assessment instruments. These materials cannot currently support a high-assurance Track Achievement Certificate.

A participation certificate may have a lighter attendance gate, but must be explicitly labelled as participation only.

## 5. Issuance and verification architecture

The existing DPA site is a static HTML/CSS/vanilla-JavaScript application. Browser state and localStorage are not a trusted credential registry. Therefore:

- A public browser-only generator must not be allowed to create a credential that appears authoritatively valid.
- Credential creation, approval, status changes and revocation must occur through a controlled server-side service.
- Private issuer/admin actions require authenticated authorization and role checks.
- Public verification must read from the authoritative registry and must not expose private assessment answers, detailed scores, learner email, identity documents or internal reviewer notes by default.
- A QR code is a shortcut to the verification page, not a cryptographic proof by itself.
- Issued records must be append-only or have an equivalent immutable audit history. Corrections must create a traceable replacement/reissue event, not silently rewrite the original issue event.
- The final design must select and document the database, hosting, authentication, backup, retention, recovery and incident-response controls before implementation.

### 5.1 Suggested credential lifecycle

`DRAFT` → `PENDING_REVIEW` → `APPROVED` → `ISSUED`

Additional states:
- `REJECTED`: issuance request did not meet the requirements.
- `REVOKED`: an issued credential has been invalidated with a recorded reason and approver.
- `SUPERSEDED`: a corrected/reissued credential replaces the earlier record.

A status change must record actor, timestamp, reason and the relevant evidence reference. A revoked or superseded credential must remain verifiable as such; it must not disappear from the audit trail.

### 5.2 Minimum credential record

| Field | Purpose |
|---|---|
| `credential_id` | Unique, non-sequential public identifier |
| `credential_type` | Participation, Completion or Track Achievement |
| `learner_ref` | Internal learner record reference; not exposed publicly |
| `display_name` | Approved name printed on the certificate |
| `program_name` / `track_scope` | Exact credential scope |
| `program_version` / `requirements_version` | Reproducible standard applied |
| `issued_at` | Issuance timestamp |
| `issuer_name` / `authorized_signer` | Accurate issuer and signatory identity |
| `evidence_refs` | Completion and assessment evidence pointers |
| `status` | Current verification status |
| `revocation_or_reissue_event` | Reason, actor, timestamp and replacement linkage |
| `created_by` / `approved_by` | Accountability and separation of duties |

Do not store unnecessary personal information in the public credential record. Public verification should return only the minimum fields needed to confirm authenticity and scope.

## 6. Certificate and verification page requirements

### Certificate document
- Clear credential title and credential type.
- Learner display name.
- Exact DPA program/track scope and applicable version.
- Completion or issue date.
- Issuer name and authorized signatory.
- Unique credential ID.
- QR code and human-readable verification destination.
- Plain-language boundary statement: DPA-issued learning credential; not a BNSP/LSP or government competency certificate unless a separately evidenced partnership authorizes that exact claim.
- Accessible, printable PDF with selectable text and adequate contrast.

### Public verification page
- Search by credential ID or resolve from its QR URL.
- Display `VALID`, `REVOKED` or `SUPERSEDED` clearly.
- Show issuer, credential type, display name, scope, issue date and credential ID.
- Explain what the credential does and does not represent.
- Avoid disclosing private assessment scores or learner contact details.
- Provide a clear not-found state without confirming whether an unrelated person's private learner account exists.

The final public URL and domain are pending approval; do not hard-code a guessed production URL in templates or QR codes.

## 7. Privacy, security and governance

Before implementation, approve:
- issuer identity, legal terms and certificate wording;
- learner consent and privacy notice for public verification;
- lawful basis, purpose limitation, data minimization, retention and deletion/correction processes;
- access control, authentication, authorization and administrative audit logs;
- credential-ID entropy and rate limiting for public verification;
- secure PDF rendering and protection against template/data injection;
- backup, incident response, revocation and dispute-handling procedures;
- separation between content authors, assessment reviewers and credential issuers where operationally feasible.

A public verification page should not reveal a learner's email, phone number, account ID, raw score, answer history or submitted files.

## 8. Phased delivery

| Phase | Deliverable | Exit condition |
|---|---|---|
| 0 — Policy | Issuer identity, credential wording, learner rules, privacy and approval authority | Written policy approved |
| 1 — Assessment readiness | Approved completion rules, item bank, calibrated threshold/rubrics and capstone rules | Assessment evidence accepted for the credential tier |
| 2 — Registry foundation | Server-side data model, authentication, role checks, issue/revoke audit events | Security and data-integrity tests pass |
| 3 — Issuer workflow | Authorized review queue, approve/reject, issue/reissue/revoke and PDF generation | End-to-end issuance tests pass |
| 4 — Verification | Public verification page, QR resolution, not-found/revoked/superseded states | Privacy, accessibility and abuse tests pass |
| 5 — Pilot and release | Small controlled learner pilot, support/recovery process and operating procedure | Pilot defects closed and release owner signs off |

## 9. Acceptance criteria

The feature is not complete until all criteria below have direct evidence:

- **CERT-001 — Credential policy:** credential types, scope, issuer identity, claims and learner-facing terms are approved and consistent.
- **CERT-002 — Eligibility:** each credential tier has explicit completion, assessment, capstone, identity and reviewer rules.
- **CERT-003 — Trusted issuance:** only authorized server-side actions can issue credentials; direct client requests and localStorage manipulation cannot create a valid record.
- **CERT-004 — Registry integrity:** IDs are unique and non-sequential; issue, correction, reissue and revocation events are auditable.
- **CERT-005 — Public verification:** valid, revoked, superseded and not-found states behave correctly and disclose only approved minimal fields.
- **CERT-006 — Certificate artifact:** PDF content, metadata, QR target, accessibility, printing and issuer statements match the authoritative registry.
- **CERT-007 — Privacy and security:** consent, access controls, data minimization, rate limiting, retention, backup and incident controls are reviewed and tested.
- **CERT-008 — Operational release:** pilot, support, ownership, monitoring, recovery and release approval are documented.

Required test cases include unauthorized issuance rejection, duplicate-ID prevention, modified-client-state rejection, valid lookup, invalid lookup, revocation visibility, superseded credential linkage, PDF/registry mismatch detection, QR destination validation, and privacy checks for public responses.

## 10. Current dependencies and blockers

- The current website architecture is static and does not provide a verified backend registry, authentication, admin role model or trusted issuance endpoint.
- The quiz/assessment engine has a design document but is not implemented.
- The 507 Q&A answers are not approved as scored items.
- The 169 learner rubrics remain uncalibrated; the proposed 80% threshold remains unapproved.
- SME review, learner pilot, issuer identity, privacy policy and legal wording are not yet approved.
- A BNSP/LSP route would require a separately verified licensed partner and approved scheme; DPA must not imply that status independently.

## 11. Explicit non-goals for this first specification

- No automatic credential generation from browser localStorage.
- No issuance of certificates to real learners.
- No claim of BNSP/LSP accreditation, government recognition or third-party platform endorsement.
- No publication of learner records or detailed assessment scores.
- No fixed production verification URL, issuer legal identity, signatory or validity period invented before approval.

**Current disposition:** Feature specification = PRESENT. Implementation = NOT STARTED. Assessment readiness = NOT READY. Certificate issuance = NOT AUTHORIZED.
