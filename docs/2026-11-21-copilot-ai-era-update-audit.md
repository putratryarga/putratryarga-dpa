# AI-Era Curriculum & Copilot Recommendation Audit — 21 November 2026

**Decision:** accept the high-value curriculum updates selectively; preserve 16 Core + 2 Advanced Electives; do not promote unverified availability or add a third elective.

## Executive findings and corrections

- **Google AI Max:** AI Max for Search moved out of beta. DSA automatic migration was extended to February 2027; September 2026 migration applied to campaign-level broad match and standalone Automatically Created Assets. Do not state that every legacy search setting migrates in September.
- **TikTok Smart+:** the October 2026 upgraded experience supports full automation, partial automation or fully manual control. Treat controls as module-level choices rather than assuming one campaign-wide switch: audience controls/suggestions/manual targeting; campaign or ad-group budget; automatic or manual placements; Smart+ Catalog or manual catalog flow; and creative combinations/reporting/multi-URL. The upgraded flow is documented for Sales, Lead Generation, App Promotion and Traffic objectives, but TikTok says the feature may not be enabled for every account; confirm the learner's account and market before promising availability.
- **OpenAI Ads — Indonesia country status (22 Nov 2026):** the current English and Indonesian Ads Manager Availability Help Center pages list Indonesia as **Available** for self-service. The advertiser/billing legal entity must be based in a listed country; the Help Center separately warns that account creation and self-service access are not the same, so an individual ad account's provisioning and eligibility still need to be checked. OpenAI's 23 Sep 2026 announcement also describes Indonesia partner / Ads Solutions rollout. Record Indonesia as **country-supported for self-service; account-level access/eligibility still to be confirmed**, not as partner-only.
- **OpenAI Academy:** courses are free and global. A badge requires completing its course and passing the assessment at 80% or above. Eligible pathway certificates require all courses and assessments. Badges and pathway certificates are not professional certifications.
- **Microsoft Advertising Learning Lab:** three product certification routes (Search, Display & Video, Retail) and eight learning paths, including Holiday Best Practices. Passing all three certifications gives Microsoft Advertising Certified Expert status; learning-path badges are distinct from product certifications.
- **Fintech elective:** do not add a third elective. Use fintech as a cross-sector case pack inside CF and relevant tracks unless the owner formally changes the 16+2 architecture.

## Recommendation disposition

| Recommendation | Decision | Implementation |
|---|---|---|
| AI-era controls in CF1–CF6 | ACCEPT | Embed conversion-signal quality, primary/secondary conversion, first-party data, privacy/consent, attribution limitations, incrementality, AI governance, human review and decision logs. Keep six shared chapters. |
| Paid Search AI Max | ACCEPT | Add AI Max readiness/control audit, search-term matching, text customisation, final URL expansion, brand/negative controls, landing-page QA, conversion value and migration planning. Preserve keyword fundamentals. |
| Paid Social Smart+ / creator activation | ACCEPT | Add full/partial/manual automation, control boundaries, creative combinations, Spark Ads authorisation, usage rights and disclosure. Mark account/market eligibility. Validate Meta Advantage+ specifics separately. |
| AI Search in planners | ACCEPT WITH GUARDRAILS | Cover AI-answer discovery, social search, creator discovery and retail search. Do not present “share of model” as a universal standard metric. Treat ChatGPT Ads as emerging and country/entity-specific. |
| Ad Ops QA framework | ACCEPT | Add naming/access/URL/tracker/consent/brand-safety/launch/pacing/discrepancy/incident/post-buy checks. Treat zero critical tracking defects and zero broken destination links as release gates for a defined campaign, not universal industry benchmarks. |
| Marketing effectiveness | ACCEPT | Extend causal vs correlational reasoning, holdouts/geo tests, MDE/power, lift, MMM foundations, confidence and limitations. |
| Credential map | ACCEPT | Standard fields: exact title, issuer, category, assessment, fee, duration, region/account eligibility, verification and checked date. |
| Fintech / digital banking elective | DEFER | Cross-sector case pack only; new elective requires owner approval and taxonomy change. |
| Structured data / duration | ACCEPT | Universal P12W removed; dateModified, version and pathway-level hasPart added in review candidate. Estimate duration separately per track before publishing. |
| Cost wording | ACCEPT | Core reading and synthetic practice may be no-cost; exclude exam fees, paid software, ad spend and partner-only features. |
| Role-fit assessment / progress export | DEFER | P1/P2 product work after competency matrix and learner research; do not use for employment promises. |

## Official source findings

### Google AI Max
Google's June 2026 update moved DSA migration to February 2027 and restored DSA campaign creation during the transition; Google's August API notice separates September migration of campaign-level broad match/ACA from later DSA migration.
- https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/
- https://developers.google.com/ads/blog/posts/2026/06/dynamic-search-ads-dsa-automigration
- https://developers.google.com/ads/blog/posts/2026/08/migrate-campaign-level-broad-match-and

### TikTok Smart+ and Spark Ads
The October Smart+ guide describes full/partial/manual controls and warns feature rollout is not universal. Spark Ads guidance requires creator authorisation for creator-originated posts; Business Center ad-delivery permissions should be used rather than sharing logins.
- https://ads.tiktok.com/resources/help/article/about-updates-to-smart-plus?lang=id
- https://ads.tiktok.com/resources/help/article/spark-ads?lang=id
- https://ads.tiktok.com/help/article/how-to-request-tiktok-account-ad-delivery-permissions-in-business-center?lang=id

### OpenAI Ads and Academy
**Current correction — 22 November 2026:** The current English Help Center availability page and Indonesian translation both list Indonesia as **Available** for self-service Ads Manager. The advertiser/billing legal entity must be based in a listed country; the Help Center distinguishes country support from actual account creation and access, which can depend on account eligibility/provisioning. OpenAI's 23 September 2026 market announcement separately describes partner / Ads Solutions rollout in Indonesia. Therefore DPA should record Indonesia as **country-supported for self-service**, while instructing learners to confirm their specific ad account and advertiser legal entity rather than promising every account is already provisioned. 

**Sponsored Agent distinction:** the Help Center article for Sponsored Agents says the format remains limited alpha for selected advertisers and is not open for early-access requests. A separate Sponsored Business Agent setup page says the Ads Manager feature is rolling out to eligible advertisers over the coming weeks and only appears when the ad account has access. Keep this as a limited, account-dependent rollout, not a generally available capability. OpenAI Academy badges/course certificates remain distinct from professional certification.

- https://help.openai.com/en/articles/20001245-ads-manager-availability
- https://help.openai.com/id-id/articles/20001245-ads-manager-availability
- https://openai.com/index/chatgpt-ads-expands-southeast-asia-taiwan/
- https://help.openai.com/en/articles/20001524-sponsored-agents-in-chatgpt-ads
- https://help.openai.com/en/articles/20001651-setting-up-a-sponsored-business-agent-in-ads-manager
- https://help.openai.com/en/articles/20001270-openai-academy-courses

### Microsoft Advertising Learning Lab
Three certification routes and eight learning paths are listed on the current official page; keep product certification and learning-path badge separate.
- https://about.ads.microsoft.com/en/resources/training-certification/learning-lab

### SEO / AI Search guidance
Google Search Central lists AI features as a search appearance surface. This supports AI-search discovery monitoring but does not define a universal AEO/GEO metric or guarantee citations through special markup.
- https://developers.google.com/search/docs/appearance
- https://developers.google.com/search/docs/appearance/ai-features

### Affiliate / social commerce
TikTok Shop seller terms describe affiliate functionality, public/targeted plans, product selection, creator commissions and disclosure requirements. It is a terms route, not a guarantee of seller/creator account eligibility or a complete operational course.
- https://seller-id.tiktok.com/university/article/agreement?identity=1&knowledge_id=10001020
- https://impact.com/pxa/learning-path/impact-com-product-training-associate-learning-path-certification-2/

## Implementation order

1. Embed CF4/CF5/CF6 controls inside existing foundation chapters.
2. Add AI Max and separate migration dates to T04 Paid Search.
3. Add Smart+ / Spark Ads authorisation and disclosure to T05 Paid Social.
4. Add AI-search sampling and metric caveats to T02/T03/T11/T13.
5. Extend T09 Ad Ops controls and T10 Marketing Science experiments.
6. Refresh credential fields with regional access checks.
7. Pilot a fintech case pack without changing 16+2 taxonomy.

**No audience release, certificate issuance or third elective is authorised by this audit.**


## Country eligibility correction — 22 November 2026

The 21 November statement that Indonesia was self-service unavailable is superseded. The current English and Indonesian Help Center country tables checked on 22 November list Indonesia as Available. Country support is confirmed; individual account provisioning and legal-entity eligibility remain account-level checks. Keep this separate from the partner / Ads Solutions route announced in September.


## 22 November 2026 — operational control and issuer cross-check

This addendum records only changes that affect a learner's current workflow, platform control or credential choice. Official sources were checked on 22 November 2026.

### Google Ads — keep the migration phases separate

Google's current developer chronology distinguishes two migrations:

1. **1–30 September 2026:** campaign-level broad match and standalone Automatically Created Assets (ACA) began automatic migration to AI Max. The default migrated controls differ: campaign-level broad match turns Search Term Matching on while Text Customization and Final URL Expansion remain off; standalone ACA turns Search Term Matching and Text Customization on while Final URL Expansion remains off.
2. **Dynamic Search Ads (DSA):** this is a separate phase. New DSA creation is due to stop in **January 2027**; automatic migration of remaining active DSA campaigns to standard Search ad groups with AI Max is scheduled for **1–28 February 2027**. The ability to create new DSA campaigns was restored in June 2026 during the transition window. Do not describe DSA as having migrated in September 2026.

AI Max is an optimization layer inside existing Search campaigns, not a separate campaign type. The current setup documentation describes controls for Search Term Matching, Text Customization, Final URL Expansion, brand inclusions/exclusions and URL controls. Text customization and Final URL Expansion have dependencies; URL exclusions are campaign-level, while URL inclusions can be ad-group level. Teach account audits, exclusions, landing-page QA, search-term review and voluntary migration testing rather than promising a single universal default across every legacy configuration.

Official evidence:
- Google Ads Developer Blog — [Campaign-level Broad Match and Automatically Created Assets migration](https://developers.google.com/ads/blog/posts/2026/08/migrate-campaign-level-broad-match-and)
- Google Ads Developer Blog — [DSA migration delayed to February 2027 and campaign creation restored](https://developers.google.com/ads/blog/posts/2026/06/dynamic-search-ads-dsa-automigration)
- Google Ads Help — [About Dynamic Search Ads](https://support.google.com/google-ads/answer/2471185)
- Google Ads Help — [Set up AI Max for Search campaigns](https://support.google.com/google-ads/answer/15909989?hl=en)
- Google — [Dynamic Search Ads upgrade to AI Max](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/)

### TikTok Smart+ — describe controls at the module level

TikTok's October 2026 upgraded Smart+ experience unifies manual and automated campaign creation. The documented choice is full automation, partial automation or fully manual, with individual module controls: audience (automatic controls, suggestions or manual targeting), budget (campaign or ad-group control), placement (automatic or manual), catalog (Smart+ Catalog or manual), and creative combinations/reporting/multi-URL. The current help page documents the upgraded experience for Sales, Lead Generation, App Promotion and Traffic. TikTok explicitly warns the upgrade may not yet be available to every advertiser account; route learners to an account check, not a universal availability claim.

Official evidence:
- TikTok Business Help Center — [About upgrades to Smart+](https://ads.tiktok.com/resources/help/article/about-updates-to-smart-plus?lang=en)
- TikTok Business Help Center — [Create manual and automated campaigns in the upgraded Smart+ experience](https://ads.tiktok.com/resources/help/article/how-to-create-a-campaign-in-the-upgraded-smart-experience)
- TikTok Business Help Center — [Indonesian Smart+ campaign creation guide](https://ads.tiktok.com/resources/help/article/how-to-create-a-campaign-in-the-upgraded-smart-experience?lang=id)

### Meta — Conversions API and data-governance caveat

Meta's official Conversions API v25 parameter page is the primary issuer reference for implementation requirements. However, a direct retrieval attempt from this audit environment on 22 November 2026 returned HTTP 429, so the exact v25 event types, required fields and hashing rules are not independently verified in this review and must not be treated as a current parameter-level acceptance. Keep the lesson's governance boundary: an API transport is not a consent mechanism or a lawful basis. Recheck the issuer page before locking field-level lab instructions.

Official evidence:
- Meta for Developers — [Conversions API parameters, v25.0](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/v25.0/)
- Meta for Developers — [Pixel and Conversions API onboarding](https://developers.facebook.com/docs/facebook-business-extension/fbe/get-started/pixel-capi-onboarding/)

### Microsoft Advertising Learning Lab — credential taxonomy

The current official Learning Lab page lists Microsoft Advertising product certifications in Search, Display & Video and Retail Advertising; passing all three earns Microsoft Advertising Certified Expert status. It lists eight learning paths, including Holiday Best Practices, alongside Search Advertising, Display & Video Advertising, Retail Advertising, Digital Advertising Fundamentals, Programmatic Advertising, Generative AI and Automation, and Performance Max. Do not count learning-path badges as product certifications. Keep this route optional and platform-specific; chapter placement still needs objective fit and account/region verification.

Official evidence:
- Microsoft Advertising — [Learning Lab](https://about.ads.microsoft.com/en/resources/training-certification/learning-lab)

### DPA disposition

The Google DSA/ACA/broad-match dates and TikTok account-dependent Smart+ controls above are operationally material and should be used in the relevant Search and Paid Social lessons. Meta CAPI v25 field-level requirements remain unverified because the issuer page returned HTTP 429 during this review; recheck before updating parameter-specific exercises. Microsoft Learning Lab is an issuer route candidate and scope cross-check; do not increase registry totals or chapter placements until its exact issuer award and mapping are reconciled with the canonical credential registry. None of these external-source checks constitutes SME approval of the affected DPA chapters.


## Issuer retrieval limitation — 22 November 2026

The Meta for Developers Conversions API v25 parameter page was directly requested during this review but returned HTTP 429. The source remains listed for future verification; no specific v25 required-parameter or hashing assertion is marked verified by this audit. Microsoft Advertising Learning Lab currently lists eight learning paths alongside three product certifications; the earlier seven-path correction was superseded after a fresh issuer-page check.
