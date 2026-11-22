# T09 Ad Operations — 10-Chapter Source-Fit Desk Review

**Review date:** 20 November 2026  
**Baseline:** `7a6a5db`; 10/10 core chapters checked.  
**Review type:** AI-assisted research desk review only. No independent SME, legal/privacy, platform-account or learner-access approval is claimed.  
**Disposition:** 10/10 **PARTIAL**. Formal objective fit, Indonesia access, cost/language/account eligibility and independent technical/SME review remain **OPEN**.

## Why this review was needed

The previous source map repeated a generic Google Marketing Platform support page and broad IAB Measurement Pillar across the ten chapters. Those generic links did not adequately evidence distinct objectives such as CM360 hierarchy, tag QA, Floodlight counting, live troubleshooting, cross-platform discrepancy and invoice control.

This batch adds specific CM360 and GTM documentation, an official TikTok In-Feed specification page marked updated June 2026, IAB Tech Lab measurement material, Meta CAPI and platform-specific billing guidance. Most are product-specific. They do not prove universal Meta/retail/publisher procedures or access in Indonesian learner accounts.

## Source register and boundaries

| Source | What it supports | Limitation |
|---|---|---|
| [CM360 Overview](https://support.google.com/campaignmanager/answer/2709362) | Ad trafficking, Floodlight and reporting in CM360. | Not the complete cross-platform ecosystem. |
| [CM360 Trafficking workflow](https://support.google.com/campaignmanager/answer/3419088?hl=en) | Campaign/placement/ad/creative workflow and tag hand-off. | CM360-specific hierarchy. |
| [CM360 Set up a campaign](https://support.google.com/campaignmanager/answer/2838056?hl=en) | Advertiser/campaign properties, schedule, landing defaults and conversion-window controls. | Not a universal naming standard. |
| [CM360 Create placements](https://support.google.com/campaignmanager/answer/2829205?hl=en) and [Placement tags](https://support.google.com/campaignmanager/answer/2826636) | Placement-to-tag relationship and tag generation. | Publisher acceptance still requires direct testing. |
| [CM360 Test tags](https://support.google.com/campaignmanager/answer/2826648?hl=en) | Export completeness, rendered creative, rotation and click-through testing. | Not universal QA across every platform. |
| [CM360 Tagging issues](https://support.google.com/campaignmanager/answer/2829774?hl=en) | Selected errors such as invalid tag type, missing size/parameters, unresolved inventory and missing creative. | Does not diagnose every site, consent or social-platform issue. |
| [GTM Preview/debug](https://support.google.com/tagmanager/answer/6107056?hl=en) | Tag firing sequence, trigger behaviour and data inspection before publication. | Actual verification needs live container/site access. |
| [GTM server-side debug](https://developers.google.com/tag-platform/tag-manager/server-side/debug) | Incoming requests, client routing, outgoing vendor requests, event data and errors. | Applies to implemented server-side GTM. |
| [TikTok In-Feed Auction Ads specs](https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=id) | Spark/Non-Spark In-Feed creative specs; page marked updated June 2026. | Not all TikTok placements, Meta, retailers or publishers. |
| [Meta Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api/) and [TikTok Events API](https://ads.tiktok.com/resources/help/article/getting-started-events-api?redirected=1) | Platform-specific server/event transmission concepts. | Does not prove actual account setup, consent or deduplication. |
| [Floodlight counting methods](https://support.google.com/campaignmanager/answer/2823400?hl=en) and [Manage Floodlight](https://support.google.com/campaignmanager/answer/13681097) | Every, One per user, One per session and conversion configuration. | Selection must follow the real business event/implementation. |
| [IAB Tech Lab Measurement](https://iabtechlab.com/standards/measurement/) | OM SDK for third-party viewability/verification on web video, apps and CTV; ECAPI v1.0 (13 Jan 2026) for event/conversion communication. | Not universal cross-platform attribution or Indonesian legal consent guidance. |
| [Google Ad Manager discrepancy guide](https://support.google.com/admanager/answer/6160380?hl=en) | Align dates, timezones, line-item/ad scope and unfilled-impression treatment. | GAM is different from CM360/Meta/TikTok; not their rule. |
| [CM360 impression/click counting](https://support.google.com/campaignmanager/answer/6193740?hl=en) | CM360 counting methodology and filtering for impressions/clicks. | Not conversion attribution or contract billable definition. |
| [CM360 invoices](https://support.google.com/campaignmanager/answer/13744493?hl=en), [billing reports](https://support.google.com/campaignmanager/answer/9999963?hl=en), [billing model](https://support.google.com/campaignmanager/answer/15406732?hl=en) | Platform invoice access, report fields, contract rates and monthly billing. | Not complete agency-to-publisher reconciliation; terms vary by account/country. |
| [Google Ad Manager billing](https://support.google.com/admanager/answer/6214526?hl=en) | Product-specific invoice/report comparison and invoice scope. | Not an agency/publisher finance SOP. |

### Specific evidence checked

- CM360 overview describes a platform for advertisers/agencies covering ad trafficking, Floodlight and reporting.
- CM360 placement guidance states a placement represents where an ad appears and corresponds to a placement tag. Test-tag instructions require checking exported placement coverage, rendering, click-through destination and rotation before publisher hand-off.
- GTM Preview/Debug connects a test site to Tag Assistant and displays tags fired, sequence, triggers and data passed. Server-side preview inspects requests, routing and outgoing vendor requests.
- TikTok's In-Feed Auction Ads page is marked last updated **June 2026** and lists page-specific video requirements; it is not a complete cross-placement specification catalogue.
- IAB Tech Lab lists OM SDK for web video/mobile app/CTV viewability and verification and ECAPI v1.0 with release date **13 January 2026**. These are distinct scopes.
- Google Ad Manager discrepancy guidance says first align dates, timezone, item scope and unfilled-impression treatment. This is a different product from CM360.
- CM360 invoice guidance exposes invoice/PO/account details, credits and disputes. Billing reports contain usage/invoice data but do not show payment status. Billing and payment-status checks are distinct.

## Chapter-by-chapter disposition

| Chapter | Status | Specific evidence | Main unresolved gap |
|---|---|---|---|
| CH01 — Digital Ad Tech & Campaign Delivery Ecosystem | PARTIAL | CM360 product scope; IAB OM SDK/ECAPI. | Cross-platform ownership, partner RACI and commercial flow. |
| CH02 — Campaign Brief, Trafficking Sheet & Naming Taxonomy | PARTIAL | CM360 trafficking, campaign and placement structure. | Client-neutral taxonomy and required fields across Meta/TikTok/retail/direct. |
| CH03 — Creative, Placement & Technical Specifications | PARTIAL | TikTok In-Feed specs; CM360 creative/placement compatibility. | Current Meta, retail and publisher specs for all six placements. |
| CH04 — Tags, Pixels, UTMs & Click Trackers | PARTIAL | GTM Preview, CM360 test tags, Meta CAPI, TikTok Events API and Consent Mode. | Real container/site, platform test events, consent states, transaction IDs and deduplication. |
| CH05 — CM360 Campaign, Placement, Ad & Floodlight Setup | PARTIAL | CM360 campaign/placement setup and Floodlight configuration/count methods. | Practitioner validation in an account/sandbox and client data-layer fit. |
| CH06 — Pre-Launch QA, Testing & Go-Live Checklist | PARTIAL | CM360 test-tags/diagnostics and GTM Preview. | Cross-platform/publisher QA execution and client go/no-go sign-off. |
| CH07 — Live Campaign Monitoring, Pacing & Troubleshooting | PARTIAL | CM360 tag diagnostics, GAM discrepancy guide and GTM server debug. | Actual incident logs, platform thresholds and escalation SLA. |
| CH08 — Platform Discrepancy & Data Validation | PARTIAL | GAM scope alignment, CM360 counting and IAB measurement scopes. | Agreed data dictionary, attribution, consent, dedupe and variance tolerance. |
| CH09 — Billing Reconciliation, Documentation & Process Control | PARTIAL | CM360 invoice/billing docs and GAM invoice/report concepts. | Publisher IO, agency/vendor invoice, local tax docs, credits and finance approval. |
| CH10 — Ad Operations Capstone | PARTIAL | Partial source blocks across CM360, GTM, measurement, diagnostics and billing. | Integrated artefacts, permissioned vendor evidence, independent technical and finance review. |

## Teaching controls

1. **Active is not QA-approved.** Confirm creative rendering, click destination, tag parameters, events, consent state and publisher acceptance.
2. **Separate tag functions.** UTM labels traffic; pixel/CAPI/Events API sends event signals; CM360 placement tags request ad delivery; click trackers log clicks; Floodlight records configured activity. They are not interchangeable.
3. **Separate impression, click, Floodlight impression and conversion.** A Floodlight page impression is not automatically an ad-attributed conversion; counting method and conversion window must be explicit.
4. **Do not treat one platform's specs as universal.** Maintain platform/placement/date, ratio, dimensions, duration, bitrate, file type/size, safe zone and fallback.
5. **Do not hard-code discrepancy tolerance.** Align date/timezone, scope, unit, event definition, filtering, latency, consent and dedupe. Contractual tolerance comes from signed terms.
6. **Separate platform invoices from publisher/agency invoices.** Use the relevant PO/IO, proof, billable basis, fees, tax, credits and finance approval for each actual transaction.
7. **Keep all exercises SIMULATED.** Do not imply live account access, campaign spend, client results or actual vendor reconciliation.

## Register disposition and required next evidence

- 10/10 T09 chapters have first-pass desk-review records; all ten are **PARTIAL**, not formal PASS.
- `objective_level_fit_status`, `indonesia_access_status` and `language_cost_eligibility_status` remain **OPEN**.
- Reviewer: AI-assisted desk review; no independent human reviewer assigned.
- Next evidence: dated Meta/retailer specs, permissioned account walkthroughs, tag-test logs, incident cases, current vendor/publisher IO and invoice records, and Ad Ops/measurement/finance SME review.

Machine-readable dispositions: [T09-10-chapter-source-fit-review.csv](T09-10-chapter-source-fit-review.csv).  
Canonical integration: [169-objective-resource-fit-register.csv](169-objective-resource-fit-register.csv) and [169-chapter-resource-mapping.md](169-chapter-resource-mapping.md).

## External URLs checked 20 November 2026

- cmOverview: https://support.google.com/campaignmanager/answer/2709362
- trafficking: https://support.google.com/campaignmanager/answer/3419088?hl=en
- campaign: https://support.google.com/campaignmanager/answer/2838056?hl=en
- placements: https://support.google.com/campaignmanager/answer/2829205?hl=en
- tags: https://support.google.com/campaignmanager/answer/2826636
- testTags: https://support.google.com/campaignmanager/answer/2826648?hl=en
- tagIssues: https://support.google.com/campaignmanager/answer/2829774?hl=en
- floodlightCounts: https://support.google.com/campaignmanager/answer/2823400?hl=en
- manageFloodlight: https://support.google.com/campaignmanager/answer/13681097
- gtPreview: https://support.google.com/tagmanager/answer/6107056?hl=en
- serverDebug: https://developers.google.com/tag-platform/tag-manager/server-side/debug
- consent: https://support.google.com/tagmanager/answer/14009635?hl=en
- iabMeasurement: https://iabtechlab.com/standards/measurement/
- tiktokSpecs: https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=id
- tiktokEvents: https://ads.tiktok.com/resources/help/article/getting-started-events-api?redirected=1
- metaCapi: https://developers.facebook.com/docs/marketing-api/conversions-api/
- gamDiscrepancy: https://support.google.com/admanager/answer/6160380?hl=en
- cmCount: https://support.google.com/campaignmanager/answer/6193740?hl=en
- cmInvoice: https://support.google.com/campaignmanager/answer/13744493?hl=en
- cmBillingReport: https://support.google.com/campaignmanager/answer/9999963?hl=en
- cmBilling: https://support.google.com/campaignmanager/answer/15406732?hl=en
- gamBilling: https://support.google.com/admanager/answer/6214526?hl=en
