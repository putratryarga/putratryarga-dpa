# T16-CH12 Register Correction & Rubric Supplement

**Date:** 4 November 2026  
**Affected chapter:** DPA-T16-CH12 — Community Capstone  
**Purpose:** Correct the chapter register extraction defect. The guide source `role-study-guides-part3.js` contains the expected Q&A and glossary values; the evidence register currently renders those fields as the literal word `undefined`. This is a register-generation defect, not evidence that the source guide itself is empty.

## Correct Q&A values from the guide source

1. **Question:** What distinguishes a community plan from a social content calendar?  
   **Expected answer:** A community plan manages member relationships, participation, norms, service, safety and governance, not only publishing.

2. **Question:** How can community value be demonstrated?  
   **Expected answer:** Show member outcomes, repeat participation, resolution, feedback, advocacy, retention and measured business or service effects.

3. **Question:** What should be avoided in the capstone?  
   **Expected answer:** Fake member counts, fabricated sentiment, forced testimonials, unsafe data collection and unapproved UGC use.

## Correct glossary values from the guide source

- **Community operating model:** Model operasi untuk purpose, members, content, moderation, service and measurement.
- **Participation:** Keterlibatan atau kontribusi anggota.
- **Advocacy loop:** Mekanisme value dan recognition yang mendorong genuine recommendation.
- **Community capstone:** Paket implementasi dan governance komunitas end-to-end.

## Chapter-specific rubric draft

Required artifact: community operating pack containing charter, audience map, platform decision, onboarding, four-week calendar, moderation matrix, care handoff, advocacy program, crisis playbook, dashboard and after-action plan.

| Dimension | Evidence required for score 2 (competent) | Evidence required for score 3 (strong) |
|---|---|---|
| Technical accuracy | Community purpose, member journey, moderation, privacy, care and escalation are correctly distinguished | Correct integrated operating model; risk and safety controls are coherent and appropriately scoped |
| Deliverable completeness | All ten named components are present | Components are linked, owned, versioned and usable as an operating pack |
| Analysis and judgement | Platform, member segments, programming and metrics are justified | Trade-offs, member value, feasibility, crisis scenarios and business/service impact are explicitly reasoned |
| Evidence, QA and governance | Synthetic assumptions are labelled; UGC permission, moderation and privacy rules are present | Evidence trail, data minimisation, escalation ownership, measurement definitions and failure controls are auditable |
| Communication and handoff | Pack is understandable and actionable | Another community team could operate it without undocumented context |

Score each dimension 0–3, maximum 15, convert to 100 by raw/15×100. Proposed internal pass mark is 80/100 with no critical failure in technical accuracy or evidence/governance. This is a draft internal standard and requires SME calibration.

## Status and correction required

- Guide source Q&A/glossary: values present.
- Existing `docs/169-chapter-evidence-register.md`: defective extraction for this chapter; still needs regeneration/replacement from the guide source.
- Existing 168-chapter rubric draft: add this supplement as chapter 169; it must not be described as a complete single-file rubric register.
- Answer-key correctness: not SME-approved. The values above are copied from the guide source and still require subject-matter validation.
- Release status: OPEN. Do not claim the 169-chapter register is clean until the main register is regenerated and rechecked for literal `undefined`.
