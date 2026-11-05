# 169-Chapter Resource Fit Review — Desk Assessment

**Date:** 5 November 2026  
**Branch:** \`audit/full-dpa-remediation-2026-11-05\`  
**Scope:** 169 core chapters / 16 tracks; resource mapping and source provenance only.  
**Status:** PROVISIONAL DESK REVIEW — not 169 independent objective-level validations, not SME sign-off.

## 1. Executive result

At the time of the T10 source pass, the deterministic map check reported **169 chapter rows, 169 unique chapter IDs and 90 unique URLs**. The subsequent T03 source pass increased this to 70 unique URLs; this later total supersedes the T10 snapshot. Earlier 39/46/47/48-URL figures below are historical snapshots from prior dated passes. This is mapping integrity, not a source-fit approval.

The prior 39-URL / 39-readable snapshot is historical and superseded by the 48-URL inventory that existed before the current source-enrichment pass. The earlier automated retrieval record was **46/48 readable at that time**; The Jakarta Post advertising-terms page returned HTTP 403 and YouTube Help returned HTTP 429. The initial six-source enrichment was subsequently refined to direct MRC OOH / MRC retail PDFs and the IAB Europe V2.1 article; later T10 and T03 reviews extended the map to 70 unique URLs. Access outcomes and caveats are recorded separately in [Priority Track Source Remediation](2026-11-05-priority-track-source-remediation.md). Do not carry the earlier 46/48 automated retrieval result forward as a current 46/70 result or claim all 70 URLs are directly fetchable. The 169 objective-level fit decisions remain OPEN.

A further source-level cross-check found an important caveat in the Jakarta Post page: its terms page displays a 10% VAT statement. The Directorate General of Taxes (DJP) explanation of PMK 131/2024 dated 3 January 2025 says non-luxury taxable goods/services are calculated at 12% × 11/12 of the relevant base (effective 11% for most such supplies), while luxury taxable goods/services use 12% on the full applicable base. Do not copy the publisher page's 10% text into a current Indonesian budget model. The tax treatment of an actual advertising invoice, any special DPP treatment and documentation must be confirmed by the publisher and finance/tax reviewer. See the T08 simulation pack and the cited primary-source links there.

These checks verify mapping, selected destination/publisher evidence and a tax-date discrepancy. They do **not** establish that every URL teaches every learning objective in its associated chapter. Most resources are shared at track level, so a source may support only part of a 10–12 chapter track.

The current defensible conclusion is:

- **Mapping integrity:** PASS — 169 rows / 169 IDs / minimum two links per row.
- **Publisher-label integrity:** PASS — known caption/domain mismatches corrected; current links reviewed.
- **URL fetchability at check time:** PASS — 39/39 unique destinations returned readable content.
- **Broad track-level coverage:** PARTIAL — see table below.
- **169 individual learning-objective fit decisions:** OPEN — not independently reviewed or signed by an SME.
- **Indonesia access, language, price, credential eligibility and account-level feature access:** OPEN where applicable; verify at point of use.

## 2. Track-level provisional fit

| Track | Main resource families in map | Desk assessment | Material fit gap / caveat | Next verification required |
|---|---|---|---|---|
| T01 — Full-Stack Digital Performance | Google Skillshop, Meta Blueprint, HubSpot Academy | PARTIAL | Broad platforms support channel and analytics literacy, but are weak as neutral sources for business economics, primary research, commercial strategy, CRO and cross-functional operating models. | Map each chapter outcome to an exact module/standard; add independent finance, research and experimentation references. |
| T02 — Connection Planning | Meta Blueprint agency planner catalog, LinkedIn Marketing Academy | PARTIAL | Media-planning/platform education does not adequately cover cultural insight, communication theory, qualitative research, proposition development and neutral connection strategy end to end. | Add independent planning/consumer-culture sources and verify all claims against actual agency planning JDs. |
| T03 — Media Planning | Meta Blueprint planner catalog, The Trade Desk Edge Academy; Google Reach Planner on selected chapters | PARTIAL | Edge is programmatic-vendor learning; Reach Planner only covers Google/YouTube video forecast and is not an offline or cross-media audience currency. Traditional reach/frequency, GRP/TRP, CPP and audience duplication lack Indonesia-specific authoritative sources. | Obtain Indonesia measurement-provider methodology and validated offline media-owner data; label all cross-media comparisons by currency. |
| T04 — Paid Search | Google Ads training / Skillshop and Google Ads Help | FOUNDATIONAL COVERAGE | Strong platform-specific coverage for Google Ads; not a neutral complete source for other search engines, commercial strategy, landing-page UX or incrementality. | Review current chapter-to-module links, Bing coverage and independent measurement/statistics supplements. |
| T05 — Paid Social | Meta Blueprint and TikTok Academy | FOUNDATIONAL COVERAGE | Strong official-platform basics; platform policy, objective, product and feature availability vary by account, market and date. Does not by itself cover broader social strategy or cross-platform measurement neutrality. | Confirm module-level relevance and current feature access; retain separate publisher-specific terminology. |
| T06 — Programmatic | The Trade Desk Edge Academy, StackAdapt Programmatic Masterclass | PARTIAL | Vendor sources are useful for workflows but can bias platform-specific terminology and buying assumptions. OpenRTB, supply-chain, identity/privacy, ad verification and neutral measurement need independent standards. | Add IAB Tech Lab/OpenRTB and independent verification/measurement references per chapter; separate vendor-specific steps. |
| T07 — Retail & Commerce Media | Walmart Connect Academy, Amazon Ads, Google Merchant Center, TikTok Catalog / TikTok Shop Ads, Lazada Seller Center, IAB/MRC | PARTIAL | Improved with Indonesia-specific TikTok Shop Product Shopping Ads. Walmart/Amazon are not direct proxies for Shopee/Tokopedia/Lazada; seller-operations and product-feed docs do not automatically teach retail media. Local RMN products, eligibility, measurement and commercial models remain market-dependent. | Add current Indonesia platform documentation (including Shopee where accessible), verify advertiser/seller eligibility, fees, GMV Max/product ad availability and measurement definitions per use case. |
| T08 — Media Owner / Publisher / Supply & Investment | Google Marketing Platform support, IAB Tech Lab standards/measurement, The Jakarta Post publisher advertising terms (access/tax caveat) | GAP — authoritative/current commercial buying; Tier 3 practice added | The source set still does not establish current multi-publisher rate-card normalization, agency buying SOPs, complete IO/contract clauses, makegoods, invoice disputes or locally reviewed procurement controls. The Jakarta Post page is one publisher's terms, direct open was blocked (403), and its displayed 10% VAT note conflicts with the later DJP general treatment for most non-luxury taxable supplies; do not reuse its tax figure without current tax review. | Use the new synthetic [T08 Direct Publisher Buying Simulation Pack](T08-direct-publisher-buying-simulation.md) for practice only. To close the source gate, obtain current media-owner media kits, written proposals, booking orders/terms, delivery proofs and invoice examples, then obtain authorized Indonesia legal/procurement/tax review. The IAB/4A's v3.0 terms can inform a limited digital IO checklist but explicitly exclude direct advertiser buys with publishers and are not Indonesia law. |
| T09 — Ad Operations | Google Marketing Platform support, IAB Tech Lab Measurement Pillar | PARTIAL | Good technical/measurement starting points, but a product-support hub and measurement standards do not equal a complete ad-ops runbook for trafficking, naming, QA, billing, discrepancy resolution and client handoff. | Map each operational chapter to official CM360/DV360/GTM/verification docs and build reproducible end-to-end sandbox exercises. |
| T10 — Analytics & Measurement | Google Skillshop Analytics, IAB Tech Lab Measurement Pillar, GoogleSQL / BigQuery reference | PARTIAL | GoogleSQL strengthens syntax learning, but it is not a full SQL curriculum. Analytics vendor training and ad-tech standards do not fully cover statistical inference, experiment design, causal methods, sampling or econometrics. | Add structured SQL practice and independent statistics/experimentation/econometrics sources; require runnable query tests and reproducible synthetic datasets. |
| T11 — SEO / AEO / GEO | Google Search Central Search Essentials, Bing Webmaster Guidelines | PARTIAL | Strong first-party search documentation for crawl/index/content policies, but AI-search visibility is an evolving practice area without a stable guaranteed-ranking standard. | Separate settled technical requirements from experimental GEO/AEO practice; verify current engine documentation, avoid ranking guarantees, and maintain dated evidence. |
| T12 — CRM / Lifecycle | HubSpot Academy, Salesforce Trailhead Marketing Cloud Engagement | PARTIAL | Strong vendor education for platform concepts, but not neutral coverage of CRM architecture, Indonesia privacy/consent, WhatsApp/SMS provider operations, deliverability and lifecycle economics across vendors. | Add current Indonesian privacy/consent and channel-provider documentation; map platform-specific examples to vendor-neutral concepts. |
| T13 — Content Strategy | HubSpot Content Marketing, Meta Blueprint, TikTok Creative Center, YouTube Analytics | PARTIAL | New TikTok/YouTube material improves creative research and content performance, but Creative Center is mainly advertising/creative intelligence and YouTube Analytics requires channel access. Neutral editorial strategy, cultural research, creator rights and cross-platform organic measurement remain broader than these sources. | Add independent editorial research, cultural insight, accessibility/copyright/rights and platform-specific organic documentation; avoid treating ad insights as organic prevalence. |
| T14 — Creator / Influencer | Meta creator resources and Partnership Ads, TikTok One for Creators, YouTube Creator Partnerships | PARTIAL | Better platform workflow coverage, but platform marketplaces do not cover Indonesian contracts, exclusivity, usage rights, whitelisting, disclosure, talent rates, tax, fraud and influencer procurement in full. | Add Indonesia legal/consumer-protection guidance and agency/creator contract templates; confirm regional marketplace availability and rights terms. |
| T15 — Affiliate | impact.com Partnerships Experience Academy, Awin Affiliate Basics | FOUNDATIONAL COVERAGE | Strong partner/affiliate concepts, but examples and platform mechanics may be international. Local network availability, commission norms, tax, fraud, postback and attribution differ by market. | Verify Indonesia partner networks, payment/contract/tax requirements and platform-specific tracking; keep network examples distinct from universal rules. |
| T16 — Community | Meta Blueprint Community Management courses and community modules | PARTIAL | Meta-heavy source set does not fully cover cross-platform community operations, social listening, crisis response, safety/moderation standards, customer care, escalation and measurement independence. | Add independent community governance, moderation/safety, crisis management, social-listening and customer-care resources; verify local escalation/legal policy. |

“Foundational coverage” is a relative desk-review label, not a PASS for every chapter. It means the source family is a credible first-party route for the dominant platform skill in that track. No track receives final objective-level fit approval in this review.

## 3. Source map correction and enrichment record

The 5 November source-integrity correction fixed publisher-caption mismatches and separated combined captions where one URL did not support all named publishers. The affected track families were T01, T02, T03, T05, T06, T07, T08, T09, T10, T12, T13, T14 and T15.

Subsequent chapter-targeted additions:
- **T03 CH06/CH07/CH10:** Google Ads Reach Planner and forecast documentation. Scope: YouTube/video planning, forecast and modeled reach. It is not a universal media currency and is not a replacement for local TV/radio/OOH measurement.
- **T07 CH01–CH05 and CH07–CH10:** TikTok Shop Product Shopping Ads — Indonesia. Scope: a platform-specific marketplace ads example. It does not establish availability of every feature to every seller/account or define every RMN.
- **T10 CH04:** GoogleSQL for BigQuery syntax. Scope: technical query reference; not a complete SQL/stats course.
- **T13 CH04/CH07/CH08:** TikTok Creative Center. Scope: creative inspiration, ads examples and trend discovery; not a full organic social research source.
- **T13 CH08/CH10/CH11:** YouTube Analytics tips. Scope: channel/video performance analysis; it is based on access to a channel's analytics and is not representative consumer research.

## 4. Required 169-chapter objective-fit sign-off format

A track-level source family should not be copied into a chapter's validation field as if it had been independently approved. For each of the 169 chapter IDs, the reviewer must record:

| Field | Required value |
|---|---|
| Chapter ID and exact learning objective | Immutable chapter ID plus objective text/version |
| Source and exact module/section | Publisher, full URL, named lesson/standard and relevant section |
| Fit relationship | Direct / supporting / context-only / not fit |
| Why it fits | A sentence linking source content to the observable objective |
| Coverage gap | What the source does not teach or prove |
| Market / language / access | Indonesia relevance, language, account eligibility, access and cost |
| Freshness | Last checked date and product/document version |
| Reviewer | Name/role, review date and independent decision |
| Disposition | PASS / PARTIAL / REPLACE / BLOCKED with evidence link |

## 5. Acceptance gate

This desk review is **not** a substitute for the 169-row sign-off register. The resource-fit gate can close only when:
1. Every chapter's full learning objectives are linked to exact source sections, not just a track-level catalogue.
2. At least one direct/primary source supports every critical technical or platform-specific claim.
3. Supporting sources and unsupported objectives are explicitly separated.
4. Indonesia access, language, eligibility, price and account requirements are checked where a resource is proposed as mandatory.
5. An independent reviewer records PASS/PARTIAL/REPLACE/BLOCKED for every chapter and documents the reason.
6. All sources are rechecked immediately before learner release.

**Decision:** Mapping and source-label remediation are materially improved. Track-level resource coverage is PARTIAL overall. The complete 169-objective resource-fit gate remains **OPEN**.


## 6. Second-pass primary-source enrichment — 5 November 2026

This addendum records additional sources that were independently located and checked after the first-pass desk review. They improve several track-level source routes but do **not** constitute independent SME sign-off for any chapter. Chapter rows in `docs/169-chapter-resource-mapping.md` identify where each source is a relevant supplement.

| Track / chapters | Primary source added | What it can support | Boundary and access status |
|---|---|---|---|
| T03 — CH02, CH06, CH09 | [Nielsen Indonesia TV audience measurement (March 2023)](https://www.nielsen.com/news-center/2023/nielsen-more-than-doubles-tv-audience-measurement-in-indonesia/) and [Nielsen Streaming Content Ratings Indonesia (December 2022)](https://www.nielsen.com/news-center/2022/nielsen-launches-streaming-content-ratings-enabling-cross-media-measurement-in-indonesia/) | Provider-published description of Indonesia TV-panel measurement and a linear-TV/mobile-streaming video audience product with reach, time-spent and demographic views. | Dated, provider-specific product/methodology references. The 2023 article cites estimates based on NMS 2021 and describes a panel of 12,000+ homes. These sources do not establish one universal cross-media currency, radio/OOH measurement, current pricing or current service scope. Verify current product documentation and contract before use. Both pages returned readable content when checked. |
| T07 — CH03 | [Shopee Advertising Policy — Indonesia](https://help.shopee.co.id/portal/4/article/71191-Kebijakan-Pengiklanan-Shopee) | Indonesia-language, platform-issued terms covering advertiser/platform definitions, written/electronic agreements, creative-material permissions and submission, cancellation/amendments, fees/invoicing/payment, advertiser responsibility, content review, prohibited content and changing eligibility terms. | A contractual/policy source, not a full feature catalogue, campaign-setup tutorial or neutral RMN comparison. Ad features and eligibility remain account/product-specific. Page was readable when checked. |
| T08 — CH03, CH04, CH06, CH08 | [The Jakarta Post — advertising terms and content funding classifications](https://www.thejakartapost.com/content-funding-classifications) | Publisher-side example of rate-card/media-kit references, Booking Order process, insertion requirements, pricing/billing/payment information and advertising terms incorporated into the advertiser/agency relationship. | One publisher's terms only; not a representative industry standard, complete agency SOP, universal IO template or makegood/invoice-dispute runbook. Automated page retrieval returned HTTP 403 during this check; use as a source lead and obtain the current media kit, rate card and booking documents directly from the publisher before assigning as mandatory material. |
| T10 — CH06, CH07, CH08 | [OpenIntro — Introduction to Modern Statistics, 2nd edition](https://www.openintro.org/book/ims/) | Free online/PDF statistics text with exploratory analysis, sampling/study design, randomization and bootstrap inference, regression, confidence intervals, statistical inference, sample-size/power supplement and interactive R tutorials/labs. The page identifies version date 31 March 2026. | Strong independent statistical foundation. It is not a marketing measurement course, full econometrics curriculum or a complete causal-identification text; learners still need a separate causal-methods pathway and practical campaign datasets. Page was readable when checked. |
| T13 — CH06, CH09; T16 — CH05, CH07, CH08, CH10 | [Kumparan — Cyber Media Guidelines](https://showcase.kumparan.com/pedoman-media-siber) | Indonesia-local publisher implementation of the Cyber Media Guidelines: UGC terms and user accountability, correction/complaint handling, paid-content labelling, copyright respect and editorial/advertising distinction. Useful as a local editorial and UGC-governance case. | A publisher-specific cyber-media policy, not a universal framework for brand-owned communities, every social platform, crisis command or customer-care SLA. Page was readable when checked. |
| T16 — CH05, CH07, CH08, CH10 | [YouTube Studio — channel moderation settings](https://support.google.com/youtube/answer/16622701?hl=en) | Platform-specific controls for comments, live chat and community posts, including holding content for review, blocked words and links, and moderation preferences. | First-party YouTube feature guidance, not cross-platform moderation governance or a complete crisis/escalation process. Search-indexed content was available; direct page retrieval was rate-limited (HTTP 429) during this check, so verify direct access and current UI before learner release. |

### Updated resource-map integrity note

The resource map retains 169 chapter rows and 169 canonical chapter IDs. Seven distinct source URLs were added in this pass, taking the expected unique-URL inventory from 39 to 46. The five newly added destinations that were directly readable during this check (two Nielsen pages, Shopee, OpenIntro and Kumparan) were retrieved successfully; The Jakarta Post returned 403 and YouTube Help returned 429, so those two must remain access-check items. Do not report 46/46 fetchability.

### Finding disposition after enrichment

- **T03 / SRC-005:** strengthened with an Indonesia-specific TV-panel and linear-TV/mobile-streaming video provider route. Still PARTIAL because radio, OOH, cross-media currency comparability, duplication methodology and current product scope are not independently established.
- **T07 / SRC-006:** strengthened with Shopee's Indonesia advertising policy for platform terms and advertiser obligations. Still PARTIAL because it does not prove all marketplace/RMN products, feature availability, fees or measurement across sellers/platforms.
- **T08 / SRC-004:** strengthened with a publisher-side commercial terms and booking-process source pointer. Still OPEN because the automated check could not retrieve the page and because current media-owner proposals, complete booking/IO examples, agency buying SOPs, makegoods/invoice disputes and authorized legal/procurement review are still absent.
- **T10 / SRC-007:** strengthened with a free, independent statistics and inference textbook. Still PARTIAL because SQL practice, causal identification, econometrics and marketing-specific experimental application still need executable exercises and review.
- **T13 / SRC-008 and T16 / SRC-009:** strengthened with an Indonesia-local publisher guideline and a first-party YouTube moderation control reference. T13 remains PARTIAL; T16 remains OPEN because cross-platform community governance, safety/moderation standards, listening, crisis escalation and customer care are not yet adequately covered.
- The 169-objective source-fit gate remains OPEN. No chapter was marked PASS from a track-level addition alone.


### T02 connection-planning source enrichment — 5 November 2026

Added the UK Government's [GovS 011: Communications functional standard](https://www.gov.uk/government/publications/government-functional-standard-govs-011-communication/government-functional-standard-govs-011-communications) to the T02 track resource family and selected chapters DPA-T02-CH01, CH02, CH04, CH06, CH09 and CH10.

The official standard is updated 30 November 2023 and describes the OASIS campaign lifecycle (Objectives, Audience Insight, Strategy, Implementation, Scoring), governance/accountability, measurable outcome-based objectives, audience insight, proposition/message/channel strategy, channel-agnostic planning, piloting and evaluation. It is a useful cross-functional planning and assurance framework for the chapter outcomes. Its formal scope is UK government departments and arm's-length bodies; it is **not** Indonesian law, an Indonesian media-planning currency, or a commercial-agency SOP. Use it as an adaptable framework reference and pair it with market-specific evidence and actual planning JDs.

This addition improves T02's planning lifecycle and governance coverage but does not resolve the remaining cultural insight, communication theory, qualitative consumer research and market-specific planning gaps. T02 remains PARTIAL. The 169 chapter-level objective-fit sign-off remains OPEN.

The resource map now contains 47 unique URLs; five of the seven sources added in the earlier second pass were readable directly, while two were access-check items. The new GOV.UK standard page was readable and its title, date, OASIS structure and scope were checked.


### T02 research ethics source enrichment — 5 November 2026

Added the [ICC/ESOMAR International Code on Market, Opinion and Social Research and Data Analytics (2025)](https://iccwbo.org/news-publications/business-solutions/iccesomar-international-code-market-opinion-social-research-data-analytics/) to the T02 resource family and chapters DPA-T02-CH01, CH02, CH03 and CH10.

The ICC page identifies the 2025 revision as the global benchmark for ethical/professional conduct across market, opinion and social research and data analytics. Its published principles address legality, honesty, transparency, due care, fair treatment of data subjects, explaining personal-data collection/use, data protection and researcher accountability; the 2025 edition also highlights method/source/limitation disclosure, protections for vulnerable groups, consent/notification, and human oversight. This is directly relevant to research framing, audience insight and evidence handling.

Boundary: a code of conduct sets ethical/professional requirements; it does not teach cultural theory, qualitative interviewing, ethnography, insight synthesis, segmentation methods or Indonesian-specific legal interpretation. Apply it alongside applicable Indonesian law and local professional guidance. The code is mandatory for ESOMAR members and organizations/professionals that adopt it; the ICC page says it is recognised by more than 60 associations in over 50 countries. T02 remains PARTIAL, and the 169-objective resource-fit gate remains OPEN.

The map now has 48 distinct URLs. This source was retrieved directly from the ICC publisher page and checked against its 2025 revision summary and five core principles.



## 7. T08 Tier 3 practice enhancement and source-gap decision — 5 November 2026

A new [T08 Direct Publisher Buying Simulation Pack](T08-direct-publisher-buying-simulation.md) now provides one synthetic, end-to-end applied case across DPA-T08-CH01 to DPA-T08-CH10. It includes three fictional proposals, RFP normalization, CPM arithmetic, budget-cap decisions, negotiation preparation, booking/IO controls, delivery shortfall math, proof-of-performance requirements, invoice reconciliation and a partner scorecard. Every volume, rate, publisher and transaction is explicitly labelled SYNTHETIC; the pack does not claim to be a real Indonesian rate card, industry benchmark, signed IO, legal instrument or tax opinion.

The calculations were cross-checked: Publisher A's illustrative shortfall value is Rp8,640,000; Publisher B's is Rp7,000,000; combined illustrative value is Rp15,640,000. These figures are not automatic credits or refunds and remain subject to an approved booking's delivery definition and remedy terms. The example's total A+B+C proposal (Rp153,000,000) exceeds its fictional Rp150,000,000 budget cap by Rp3,000,000; the case therefore requires a documented hold, negotiation or scope decision rather than an assumed overspend.

This improves practical simulation coverage but does **not** close T08's primary-source gap or its learning-objective sign-off. Current media-owner quotes/rate cards, actual publisher booking orders/terms, agency buying SOPs, delivery proofs, invoice examples and authorized Indonesia legal/procurement/tax review remain required. The Jakarta Post page's displayed 10% VAT note is treated as a source-date/tax caveat; the current applicable treatment must be checked on the actual invoice with a qualified reviewer.

### Primary-source evidence checked for this addendum

- [The Jakarta Post — Content Funding Classifications / advertising terms](https://www.thejakartapost.com/content-funding-classifications): indexed publisher content describes reservations through its Advertising Department, signed Booking Orders, rate-card/media-kit references, insertion fields and payment/invoice provisions. The current direct page open returned HTTP 403, so direct learner access is not confirmed. It is one publisher's terms, not an industry-wide buying SOP.
- [IAB / 4A's Standard Terms and Conditions for Internet Advertising for Media Buys One Year or Less, Version 3.0](https://www.iab.com/wp-content/uploads/2015/06/IAB_4As-tsandcs-FINAL.pdf): defines IO fields including deliverables, prices, maximum spend, start/end dates and third-party ad-server identity. The document itself says it does not cover direct advertiser buys with publishers or fully cover sponsorship/content integration; it is US-oriented and not Indonesian law.
- [Directorate General of Taxes (DJP) — PPN 2025: Kebijakan Baru, Beban Pajak Tetap Ringan untuk Masyarakat](https://pajak.go.id/id/siaran-pers/ppn-2025-kebijakan-baru-beban-pajak-tetap-ringan-untuk-masyarakat): dated 3 January 2025, explains PMK 131/2024, including the 12% rate × 11/12 base for non-luxury taxable goods/services and the 12% full-base treatment for relevant luxury goods/services. Confirm classification and actual invoice treatment with finance/tax review.

**Disposition:** T08 chapter practice = PARTIALLY ENHANCED. T08 primary-source/SME/local commercial validation = OPEN. No core chapter is promoted to VALIDATED by this simulation alone.


### 5 November 2026 — priority-source remediation

The current resource map contains 169 chapter rows and 55 unique URLs after the six-track source-enrichment pass and subsequent exact-source refinement across 21 chapter rows in T03, T07, T10, T13 and T16. The source-by-source relevance, direct/manual access outcomes, jurisdiction caveats and track dispositions are recorded in [Priority Track Source Remediation](2026-11-05-priority-track-source-remediation.md).

This addition is a source-coverage improvement only. The 169-objective review register has one row per core chapter, but all 169 rows remain OPEN until the reviewer identifies the precise resource section that teaches the stated objective, classifies DIRECT/PARTIAL/SUPPORTING/NOT FIT, records evidence, and checks Indonesian access/language/cost/eligibility. No objective-level or chapter-level PASS is implied.


### 5 November 2026 — exact source refinement

The current map uses the directly opened MRC Out-of-Home Measurement Standards (Phase 1 & 2 Combined, final Dec 2025) PDF for four T03 chapters, and the directly opened January 2024 IAB/MRC Retail Media Measurement Guidelines PDF plus the IAB Europe V2.1 article (22 Jan 2026) for four T07 chapters. The older generic MRC index and IAB V2 update announcement have been replaced on these rows. SQLBolt remains search-index verified but direct fetch was unavailable in this check. The V2.1 article was readable; its linked standards PDF returned an HTTP retrieval error and is not claimed as downloaded. Current unique URL count: 55. All objective-fit decisions remain OPEN.


## T10 — 10-chapter source-fit batch review

The first chapter-level desk review of the next priority track (T10) is recorded in [T10 — 10-Chapter Source-Fit Review](T10-10-chapter-source-fit-review.md) and its [10-row CSV](T10-10-chapter-source-fit-review.csv). All ten chapters are classified PARTIAL at desk-review level. CH04 and CH07 have stronger mapped method sources after this pass; CH01, CH02, CH03, CH05, CH06, CH08, CH09 and CH10 retain material gaps described in the review. Formal 169-objective acceptance remains OPEN pending exact section evidence, Indonesia access, technical review and qualified SME disposition. At the time of the T10 review the inventory was 169 rows / 67 unique URLs; the subsequent T03 source pass increased it to 70 unique URLs.


## T03 10-chapter source-fit desk review — 5 November 2026

A first-pass source-fit desk review is now recorded in [T03 — Media Planning: 10-Chapter Source-Fit Review](T03-10-chapter-source-fit-review.md) and its [10-row CSV](T03-10-chapter-source-fit-review.csv). All ten T03 chapters are classified **PARTIAL** at desk-review level; formal objective acceptance, Indonesia access and SME approval remain OPEN.

The current resource map is **169 chapter rows / 70 unique URLs**. The T03 source pass adds YouGov's 2025 Indonesia media-consumption summary, Google Ads Reach Planner's October 2026 frequency-suggestion update and the MRC/IAB/RAB/NAB Digital Audio Measurement Standards v1.0. These references have different scopes: YouGov is audience-habit research, Reach Planner is YouTube/video-partner forecasting, and MRC digital audio is streaming/progressive-download measurement. The MRC standard explicitly excludes traditional over-the-air AM/FM measurement. None closes Indonesia cross-media deduplication or traditional radio audience currency.

The T03 review distinguishes narrow component support from complete chapter fit. Do not sum or compare platform video reach, Nielsen TV panel, OOH audience estimates and digital-audio stream metrics as if they shared the same universe or methodology.


## T02 — 10-chapter connection-planning source-fit batch review

The [T02 10-Chapter Source-Fit Review](T02-10-chapter-source-fit-review.md) and its [10-row CSV](T02-10-chapter-source-fit-review.csv) record a first-pass desk assessment of CH01–CH10. All ten are PARTIAL. GovS 011 and GCS OASIS provide public-sector campaign lifecycle guidance; GCS Evaluation Cycle provides a communications evaluation process; ICC/ESOMAR provides research ethics; ICC Advertising Code provides responsible-marketing principles; NN/g supports UX journey mapping; and AMA/AAMA resources support positioning/message framework concepts. These are component sources with context-specific limits, not a complete commercial connection-planning curriculum.

The source map now contains 169 rows / 77 unique URLs after this T02 enrichment. Formal objective-level decisions for all 169 chapters, including T02/T03/T10, remain OPEN until exact section-to-objective fit, Indonesia access/cost/language, technical review and qualified SME disposition are recorded.


## T07 — 10-chapter retail and commerce media source-fit batch review

The [T07 10-Chapter Source-Fit Review](T07-10-chapter-source-fit-review.md) and its [10-row CSV](T07-10-chapter-source-fit-review.csv) record the first-pass assessment of T07-CH01…CH10. All ten are PARTIAL. The current mapping has 169 chapter rows / 83 unique URLs.

The T07 source pass adds six Indonesia-facing local routes: TikTok Product Shopping Ads/GMV Max, Tokopedia Product Shopping Ads, Shopee product-ad creation and performance reporting, and Lazada Sponsored Solutions/Sponsored Discovery. These documents make feature scope and local seller workflows more concrete, but several features are seller/permission/whitelist-gated. Shopee's documented 7-day post-click reporting, TikTok campaign optimization and Lazada reporting must not be assumed equivalent. IAB/MRC (US-oriented) and IAB Europe V2.1 (European) remain measurement references, not proof of local retailer implementation.

Formal objective fit, local seller access, commercial fees/terms, technical review and SME approval remain OPEN.


## T13 — 11-chapter content strategy and creation source-fit batch review

The [T13 11-Chapter Source-Fit Review](T13-11-chapter-source-fit-review.md) and [11-row CSV](T13-11-chapter-source-fit-review.csv) record the first-pass desk assessment; all eleven chapters are PARTIAL. The current source map contains 169 chapter rows / 90 unique URLs.

New sources provide TikTok Creative Center/Top Ads inspiration, commercial music and creator-disclosure guidance, YouTube native engagement/retention/impression metrics, and the JDIH BPK copyright-law record. These sources are component-specific. Top Ads reports ad examples, not a representative sample of organic posts or consumer culture. YouTube measurement definitions are platform-native, not a shared content currency.

The copyright-law update is time-sensitive: JDIH BPK lists UU 28/2014 in its current record, while DPR reporting on 27 October 2026 describes the amendment bill's ongoing Panja discussion. Verify the live legislative and JDIH status before teaching any specific clause or making a legal claim. Formal source fit, rights clearance, platform access, technical review and SME approval remain OPEN.
