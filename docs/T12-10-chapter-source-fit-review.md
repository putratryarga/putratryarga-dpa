# T12 — CRM & Lifecycle: Chapter-Level Source-Fit Review

**Review date:** 21 November 2026 · **Scope:** 10 chapter objectives and mapped resources.  
**Disposition:** FIRST-PASS DESK REVIEW COMPLETE; 10/10 CHAPTERS PARTIAL; FORMAL ACCEPTANCE OPEN.

## Executive finding

HubSpot Academy and Salesforce Trailhead are useful starting points, but broad portals do not directly support each objective across CRM strategy, data architecture, consent, omnichannel automation, deliverability, retention and experimentation. This review adds chapter-specific HubSpot, Salesforce, Indonesian PDP, WhatsApp, Gmail, RFC 8058, Google Consent Mode, retry and GA4 cohort references.

WhatsApp Business Policy requires approved templates for business-initiated conversations and limits free-form replies to the 24-hour customer-service window; opt-in expectations and opt-out handling remain important. [WhatsApp Indonesia policy](https://whatsappbusiness.com/id/policy/). UU PDP 27/2022 recognises multiple processing grounds, so consent is not the only possible basis and platform settings are not legal approval. [JDIH UU PDP](https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/crc32/). Google explains that the site/app/CMP must obtain the user's choice and communicate it; Consent Mode does not collect the choice. [Google Consent Mode](https://developers.google.com/tag-platform/security/concepts/consent-mode).

Gmail distinguishes requirements for all senders from additional requirements for bulk senders (more than 5,000 messages/day to Gmail); bulk requirements include SPF, DKIM, DMARC, alignment and one-click unsubscribe for marketing/subscribed messages. [Gmail sender guidelines](https://support.google.com/mail/answer/81126). [RFC 8058](https://www.rfc-editor.org/rfc/rfc8058.html) specifies one-click unsubscribe headers.

AI-assisted first-pass desk review only. This is not legal advice, Indonesia account/access testing, independent technical approval, CRM SME sign-off or learner pilot.

## Supplemental primary sources

- [HubSpot lifecycle stages](https://knowledge.hubspot.com/records/use-lifecycle-stages) · [HubSpot workflow enrollment settings](https://knowledge.hubspot.com/workflows/manage-workflow-enrollment-settings?app=1)
- [Salesforce Contact Builder](https://help.salesforce.com/s/articleView?id=sf.mc_cab_contact_builder.htm&language=en_US) · [Data Extensions](https://help.salesforce.com/s/articleView?id=mktg.mc_cab_data_extensions.htm&language=en_US&type=5) · [Journey Builder goals](https://help.salesforce.com/s/articleView?id=mktg.mc_jb_goals.htm&language=en_US&type=5) · [Exit criteria](https://help.salesforce.com/s/articleView?id=mktg.mc_jb_exit_criteria.htm&language=en_US&type=5)
- [UU PDP 27/2022 — JDIH Komdigi](https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/crc32/)
- [WhatsApp Business Policy Indonesia](https://whatsappbusiness.com/id/policy/)
- [Gmail sender guidelines](https://support.google.com/mail/answer/81126) · [RFC 8058](https://www.rfc-editor.org/rfc/rfc8058.html)
- [Google Consent Mode](https://developers.google.com/tag-platform/security/concepts/consent-mode) · [Google Cloud retry strategy](https://docs.cloud.google.com/storage/docs/retry-strategy) · [GA4 cohort exploration](https://support.google.com/analytics/answer/9670133?hl=en)

Platform docs are not neutral CRM architecture, legal advice or an experimentation standard. SMS/push requirements, causal holdout design, contribution LTV and Indonesia-specific implementation still need extra sources and expert review.

## Chapter-by-chapter dispositions

### DPA-T12-CH01 — CRM Ecosystem & Lifecycle Strategy

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **Legal review:** OPEN where applicable. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** HubSpot lifecycle-stage guidance defines stage properties and marketing/sales handoffs; Salesforce Trailhead/Journey Builder add platform workflow context. These are useful system examples but not a platform-neutral CRM operating model or complete service, sales and retention framework.

**Material gap:** Business-model-specific lifecycle definitions, customer value, cross-functional ownership, contact governance, Indonesia operating examples and CRM economics are not comprehensively covered by broad academy portals.

**Required next step:** Build B2C, subscription and B2B lifecycle maps with stage entry/exit, event, owner, service/sales handoff, KPI and contact policy. Separate generic CRM strategy from platform-specific properties.

### DPA-T12-CH02 — Customer Data Architecture & Database

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **Legal review:** OPEN where applicable. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** Salesforce Contact Builder, Data Extensions and Data Designer document contact records, related data, sources and cross-channel activation. UU PDP 27/2022 provides the Indonesian processing framework. These are useful primary references but Salesforce architecture is not a neutral customer data model.

**Material gap:** Identity resolution, deterministic/probabilistic match, survivorship, merge/split, purpose/legal-basis records, retention/deletion and access controls across systems need vendor-neutral design and local privacy review.

**Required next step:** Create ERD/data dictionary for account, person/contact, transaction, product, event, source, purpose/legal basis, channel preference, consent history and retention. Include false-match, correction, deletion and audit scenarios.

### DPA-T12-CH03 — Segmentation, Lead Scoring & Lifecycle Stages

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **Legal review:** OPEN where applicable. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** HubSpot lifecycle-stage guidance supports stage categorisation and lead handoff; Salesforce Contact Builder/Data Extensions support operational audience data structures. The mapped course portals are useful entry routes, but do not evidence a calibrated lead-scoring methodology.

**Material gap:** Score calibration against qualified pipeline/downstream revenue, exclusions/decay, sample size, false positives, data quality, privacy and refresh cadence need worked datasets. Email opens are weak intent proxies under privacy protections.

**Required next step:** Create a six-segment taxonomy and lead-score model; split fit from intent, define exclusions/decay and test against held-out sales outcomes. Require consent/data-quality checks before activation.

### DPA-T12-CH04 — Customer Journey & Trigger-Based Communication

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **Legal review:** OPEN where applicable. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** HubSpot workflow enrollment and Salesforce Journey Builder goal/exit guidance support event- or condition-driven automation. WhatsApp Business Policy provides current message-permission and template boundaries. These sources are relevant but use different platform concepts and do not fully cover cross-channel orchestration.

**Material gap:** Event schema/integration, deduplication, suppression precedence, quiet hours, cross-channel frequency, service-vs-marketing rules, retries and consent changes need a cross-platform operating example.

**Required next step:** Build welcome/cart/post-purchase/win-back workflows with purchase/opt-out suppression, eligibility, delays, frequency caps, exception paths and QA cases. Verify event source and destination state.

### DPA-T12-CH05 — Email, WhatsApp, SMS & Push Strategy

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **Legal review:** OPEN where applicable. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** WhatsApp policy specifies approved templates for business-initiated messages and the 24-hour customer-service window; Gmail documents sender authentication and bulk-sender requirements; RFC 8058 defines one-click unsubscribe signalling; UU PDP adds Indonesian privacy context. Coverage is strongest for email/WhatsApp, not all four channels.

**Material gap:** SMS and push provider-specific permission, pricing, opt-out and delivery rules; WhatsApp opt-in categories/template costs; Gmail volume thresholds; transactional-vs-marketing distinction and Indonesian legal basis need separate checks.

**Required next step:** Create a channel matrix differentiating email, WhatsApp, SMS and push by purpose, permission, SLA, format, pricing, service window, opt-out and fallback. Separate service and promotional examples; phone number does not imply marketing permission.

### DPA-T12-CH06 — Marketing Automation & Workflow Architecture

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **Legal review:** OPEN where applicable. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** HubSpot enrollment and Salesforce Journey Builder goals/exit provide workflow mechanics. Google Cloud retry guidance distinguishes transient/permanent errors and safe retries; Consent Mode explains tag-state propagation. These are helpful product docs, not a complete integration engineering standard.

**Material gap:** Idempotency keys, webhook authentication, retry/backoff, dead-letter queues, event ordering, API limits, schema evolution, monitoring, reconciliation and manual replay need a practical integration lab. Consent Mode does not collect or persist consent.

**Required next step:** Build form-to-CRM-to-message flow with signed webhook, idempotency key, bounded retry/backoff, duplicate event, missing field, consent withdrawal, error queue, alert and manual replay tests.

### DPA-T12-CH07 — Personalization, Content & Deliverability

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **Legal review:** OPEN where applicable. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** Gmail sender guidance provides authentication, spam-rate and bulk-sender requirements; RFC 8058 specifies one-click unsubscribe headers; UU PDP and Google Consent Mode clarify privacy/tag boundaries. These sources support deliverability/compliance fundamentals but not an entire personalisation governance model.

**Material gap:** Data minimisation, purpose limitation, preference centre, frequency fatigue, dynamic-content fallback, provider-level diagnostics and open-rate privacy limitations require further platform and local legal review.

**Required next step:** Build a personalisation inventory with field, source, purpose, necessity, expiry, fallback, suppression and preference. Add SPF/DKIM/DMARC, bounce/complaint, unsubscribe and test-send evidence; caveat open-rate reporting.

### DPA-T12-CH08 — Retention, Churn, Cohort & Customer Lifetime Value

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **Legal review:** OPEN where applicable. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** GA4 cohort exploration provides an official example of defining inclusion and return criteria; HubSpot lifecycle stages supports operational stage tracking. These do not establish universal retention definitions or finance-approved contribution LTV.

**Material gap:** Churn by business model, cohort event/time grain, censoring, contribution margin, refunds, discounts, service cost, acquisition cost and horizon need finance-approved definitions and worked cases. Revenue-only LTV is not contribution LTV.

**Required next step:** Build a synthetic cohort workbook with acquisition cohort, eligible base, return event, retention, churn, gross margin, refunds/discounts, variable service cost and LTV sensitivity; validate assumptions with finance SME.

### DPA-T12-CH09 — Lifecycle Experimentation & Reporting

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **Legal review:** OPEN where applicable. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** Salesforce Journey Builder goals provide outcome tracking and possible exit behaviour; HubSpot workflow controls help define eligible contacts. Messaging-provider policy and deliverability references provide guardrails. None of these product-operation documents is a complete causal experimentation method.

**Material gap:** Randomisation unit, persistent holdout, journey/channel contamination, sample size/power, primary metric, guardrails, multiple comparisons, seasonality and incremental margin require a statistical method and worked calculation.

**Required next step:** Specify a persistent randomised holdout with eligibility, assignment persistence, baseline, sample-size assumptions, primary outcome, guardrails and stopping rules. Reconcile at customer level and measure incremental contribution, not only attributed opens/clicks.

### DPA-T12-CH10 — CRM Capstone

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **Legal review:** OPEN where applicable. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** Salesforce Contact Builder/Data Extensions, HubSpot lifecycle/workflow guidance, UU PDP, WhatsApp policy, Gmail sender rules and GA4 cohort documentation jointly support major capstone components. They are a source set, not an integrated validated CRM solution.

**Material gap:** End-to-end customer data-to-journey, consent ledger, channel pricing, deliverability, suppression, failure recovery, cohort economics, holdout and a complete reference solution/rubric are still missing. Local legal interpretation requires counsel.

**Required next step:** Deliver one SIMULATED case from ERD through segment, lawful-processing analysis, channel choice, automation/failure tests, message samples, deliverability checks, cohort/LTV and holdout evaluation; require independent CRM, privacy and measurement review.

## Formal acceptance boundary

No chapter is PASS. Qualified Indonesian privacy/legal and CRM SMEs must validate lawful basis/purpose, channel permissions, local costs, platform access, data retention/deletion, deliverability and technical workflows. All T12 Q&A remains reflective/non-scored and formally OPEN.
