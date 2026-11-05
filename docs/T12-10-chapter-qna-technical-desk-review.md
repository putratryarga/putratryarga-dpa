# T12 — CRM & Lifecycle: 30 Q&A Technical/Editorial Desk Review

**Date:** 5 November 2026 · **Scope:** T12-CH01 through T12-CH10, 30 reflective Q&A items.  
**Disposition:** 30 answer explanations expanded to 34–45 words and mapped to item-level references; formal answer-key, editorial, source-fit, legal/compliance and SME approval remain OPEN.

## What changed

All 30 answer explanations were expanded and source-mapped. Prior answer text is retained in the master Q&A register. The canonical `role-study-guides-part2.js`, 169-chapter evidence register, 507-item Q&A review register and automated triage CSV are synchronized. One question was rephrased from a bare yes/no opening to a direct question about why contact details are not sufficient grounds for marketing.

## Technical and legal boundaries enforced

1. **CRM and contact model:** Salesforce Contact Builder documents related contact data across CRM, ERP and POS sources; distinct contacts, transactions and preferences must retain defined relationships. [Salesforce Contact Builder](https://help.salesforce.com/s/articleView?id=sf.mc_cab_contact_builder.htm&language=en_US&type=5), [Data Extensions](https://help.salesforce.com/s/articleView?id=sf.mc_cab_data_extensions.htm&language=en_US&type=5).
2. **Indonesia PDP:** UU 27/2022 requires a legal basis for processing; consent is one of several grounds, not the only possible ground. The law also grants data-subject rights, including withdrawal of consent, and establishes purpose, transparency, accuracy, security and retention principles. Determine basis and applicability for each use case with qualified legal review. [JDIH Komdigi — UU 27/2022](https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/crc32/).
3. **Google Consent Mode:** it communicates consent state to Google tags but does not collect or persist the user's choice by itself. The website/app must provide a consent solution, obtain the choice, persist it and update tag state. [Consent Mode overview](https://developers.google.com/tag-platform/security/concepts/consent-mode), [implementation guide](https://developers.google.com/tag-platform/security/guides/consent).
4. **WhatsApp Business:** the current policy requires permission before contacting recipients and requires the business to honour opt-out. On the Business Platform, business-initiated conversations require approved templates; free-form replies are limited to the 24-hour customer-service window. Category-specific opt-ins are listed as best practice. [WhatsApp Business Policy (updated 23 September 2026)](https://whatsappbusiness.com/policy/?afsrc=1), [Indonesian policy page](https://business.whatsapp.com/policy/preview?lang=id_ID).
5. **Email deliverability:** Gmail requires SPF or DKIM for all senders; bulk senders over 5,000 messages/day to Gmail must use SPF, DKIM and DMARC, align From domain, and support one-click unsubscribe for marketing/subscribed messages. Transactional messages are treated differently. [Gmail sender guidelines](https://support.google.com/mail/answer/81126?hl=en), [sender FAQ](https://support.google.com/mail/answer/14229414?hl=en).
6. **One-click unsubscribe:** RFC 8058 defines List-Unsubscribe and List-Unsubscribe-Post headers, requires a valid DKIM signature covering them and a direct HTTPS POST operation. A visible body link alone does not implement RFC 8058. [RFC 8058](https://www.rfc-editor.org/rfc/rfc8058.html).
7. **Journey suppression and exit:** HubSpot workflows support suppression/unenrollment and explicit re-enrollment behavior; Salesforce Journey Builder provides goal/exit criteria for removing contacts who no longer need subsequent messages. These are product-specific implementations, not universal defaults. [HubSpot enrollment settings](https://knowledge.hubspot.com/workflows/manage-workflow-enrollment-settings?app=1), [Salesforce exit criteria](https://help.salesforce.com/s/articleView?id=mktg.mc_jb_define_exit_criteria.htm&language=en_US&type=5), [Journey goals](https://help.salesforce.com/s/articleView?id=mc_jb_goals.htm&language=en_US&type=5).
8. **Retry and idempotency:** Google Cloud Storage documentation distinguishes retryable transient errors from permanent errors and explains why retrying non-idempotent create operations can create duplicates. Use bounded retries, backoff with jitter and idempotency protection. [Google Cloud retry strategy](https://docs.cloud.google.com/storage/docs/retry-strategy).
9. **Cohorts:** GA4 cohort exploration requires a defined inclusion criterion and return criterion; device-based cohort behavior has product-specific limitations. Do not generalize GA4 cohort implementation as the only possible CRM cohort model. [GA4 cohort exploration](https://support.google.com/analytics/answer/9670133?hl=en-GS).

## Important distinctions retained

- Contact details are not, by themselves, proof of marketing subscription or a complete legal basis.
- UU PDP lists multiple processing bases; do not teach that consent is always the only basis or that a platform setting grants legal permission.
- WhatsApp opt-in permission, template rules and opt-out handling differ from email subscription mechanics.
- Marketing/promotional email one-click unsubscribe rules differ from transactional mail requirements.
- Re-enrollment, exit and suppression behavior depends on the CRM/automation platform configuration.
- Retry safety depends on operation idempotency; retries must not duplicate sends or create repeated business actions.
- Revenue-only LTV is not contribution value; finance-approved margin/cost definitions are required for commercial decisions.
- Cohort retention depends on a consistent inclusion event, return event, time grain and business model.

**Formal state:** all 30 remain reflective/non-scored. The references support review, not approved answer keys or legal advice. Editorial, source-fit, legal/compliance and SME decisions remain OPEN.
