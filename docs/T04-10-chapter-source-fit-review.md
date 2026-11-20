# T04 Paid Search — 10-Chapter Source-Fit Desk Review

**Review date:** 20 November 2026. **Scope:** DPA-T04-CH01–CH10 (10/10). **Method:** AI-assisted public-source desk review, not independent SME sign-off, live-account build, Indonesia access/cost test, privacy/legal review or learner pilot. **Disposition:** all ten PARTIAL; formal objective-fit, Indonesia-access and language/cost/account-eligibility gates remain OPEN.

## Why the source map changed
The previous T04 rows relied mostly on a generic Skillshop/help hub. That did not evidence distinct tasks such as keyword planning, negative matching, campaign structure, RSA limits, offline conversion uploads, Search diagnostics and controlled experiments. The replacement is Google-first with chapter-specific Google Ads Help plus Microsoft references only as bounded platform comparators.

## Sources and evidence boundaries

| Source | Supports | Limitation |
|---|---|---|
| [Google Skillshop Search](https://skillshop.withgoogle.com/googleads/) | Search learning/certification route. | Not chapter-level evidence for every objective or local exam eligibility. |
| [Microsoft Advertising Learning Lab](https://www.about.ads.microsoft.com/en/resources/training-certification/learning-lab) | Microsoft Search learning path. | Not full Microsoft Ads operational coverage. |
| [Google Ad Rank](https://support.google.com/google-ads/answer/1752122/) | Bid, quality, thresholds, competition, query context and asset impact. | Google auction only. |
| [Google Keyword Planner](https://support.google.com/google-ads/answer/7337243/use-keyword-planner), [forecast guide](https://support.google.com/google-ads/answer/3022575?hl=en) | Keyword ideas, volume estimates, bid ranges and forecasts. | Estimates depend on date/location/account; not actual CPC/sales. |
| [Microsoft Keyword Planner](https://about.ads.microsoft.com/en/tools/planning/keyword-planner) | Microsoft keyword and cost estimates by location. | Microsoft network only. |
| [Google Auction Insights](https://support.google.com/google-ads/answer/2579754?hl=en), [Search Terms report](https://support.google.com/google-ads/answer/2472708?hl=en) | Eligible auction overlap and reported triggered queries. | Does not disclose private competitor bids, profit or every query. |
| [Google Search campaign setup](https://support.google.com/google-ads/answer/9510373?hl=en), [Microsoft new advertiser FAQ](https://about.ads.microsoft.com/en/get-started/new-advertiser-faqs) | Campaign settings, targeting, budget and ad-group workflow. | Account models are platform-specific. |
| [Google keyword match](https://support.google.com/google-ads/answer/7478529), [matching process](https://support.google.com/google-ads/answer/14997606?hl=en), [negative keywords](https://support.google.com/google-ads/answer/2453972?hl=en) | Positive match type and exclusion concepts. | Negative matching differs from positive rules and other platforms. |
| [Google RSA specs](https://support.google.com/google-ads/answer/17092074?hl=en), [RSA best practices](https://support.google.com/google-ads/answer/6167122?hl=en), [landing page](https://support.google.com/google-ads/answer/14086?hl=en), [destination policy](https://support.google.com/adspolicy/answer/16427615) | RSA limits, asset combinations, landing relevance/navigation and safe destination. | Not live policy, trademark, claim substantiation or mobile QA. |
| [Microsoft RSA spec](https://learn.microsoft.com/en-us/advertising/guides/responsive-search-ads?view=bingads-13) | Microsoft RSA API object: 3–15 titles and 2–4 descriptions. | Separate from Google RSA specification. |
| [Google Smart Bidding](https://support.google.com/google-ads/faq/10286469?hl=en), [bid selection](https://support.google.com/google-ads/answer/6167148?hl=en), [auction-time bids](https://support.google.com/google-ads/answer/10966879?hl=en) | Conversion/value strategies and auction-time bidding. | No account eligibility or valid CPA/ROAS target proven. |
| [Website conversions](https://support.google.com/google-ads/answer/16560108), [Enhanced Conversions Web](https://support.google.com/google-ads/answer/13258081?hl=en), [Enhanced Conversions Leads](https://support.google.com/google-ads/answer/15713840?hl=en), [offline imports](https://support.google.com/google-ads/answer/15081888?hl=en) | Conversion setup and 2026 Enhanced Conversions/Data Manager changes. | No actual tag/CRM/consent/API test or privacy approval. |
| [Microsoft UET](https://about.ads.microsoft.com/en/tools/performance/conversion-tracking) | Microsoft conversion and audience measurement. | Live UET implementation not tested. |
| [Quality Score](https://support.google.com/google-ads/answer/6167118?preview=true), [diagnostics](https://support.google.com/google-ads/answer/13738235?hl=en), [Impression Share](https://support.google.com/google-ads/answer/2497703?hl=en), [IS reporting](https://support.google.com/google-ads/answer/7103314?hl=en-id) | Quality components, eligible impression denominator and lost IS budget/rank. | Estimated/report-scoped; no account export. |
| [Google Custom Experiments](https://support.google.com/google-ads/answer/10683687?hl=en), [setup](https://support.google.com/google-ads/answer/6261395/set-up-a-campaign-experiment), [best practices](https://support.google.com/google-ads/answer/6167122?hl=en) | Search experiment workflow. | Does not guarantee equal impression/spend or Microsoft experiment parity. |

## Current Google Ads changes that need to appear in the learning copy
1. **Smart Bidding labels, June 2026:** “Maximize conversions with Target CPA” becomes “Target CPA”; “Maximize conversion value with Target ROAS” becomes “Target ROAS”. Underlying behaviour is unchanged.
2. **Enhanced Conversions, April 2026:** Web and Leads settings were combined into one setting. Do not teach separate toggles as the current account model.
3. **Offline/lead uploads, 15 June 2026:** Offline Conversion Import and Enhanced Conversions for Leads uploads migrate to Data Manager API; legacy Google Ads API upload access is restricted for developer tokens not allow-listed. Do not teach the legacy Ads API upload as default.
4. **Keyword forecasts:** Google says forecasts refresh daily using recent 7–10-day data adjusted for seasonality; forecasts differ from monthly volume statistics and are not delivery guarantees.
5. **Experiments:** 50/50 split governs auction eligibility, not identical impressions/spend; guidance recommends 7–14 days to stabilise. Predefine one variable, metric, guardrails, sample/duration and decision rule.

## Chapter-by-chapter dispositions

| Chapter | Desk status | Evidence fit | Main gap |
|---|---|---|---|
| CH01 — Search Advertising Ecosystem & Auction Fundamentals | PARTIAL | Google Ad Rank/Skillshop and Microsoft learning path. | Neutral auction model and Indonesian market evidence. |
| CH02 — Search Intent, Keyword Research & Competitor Analysis | PARTIAL | Google/Microsoft Planner, Auction Insights and Search Terms. | Dated Indonesia data pull, SERP evidence and CPC assumptions. |
| CH03 — Account, Campaign & Ad Group Architecture | PARTIAL | Google Search setup and Microsoft campaign introduction. | Client governance, access and platform taxonomy. |
| CH04 — Match Types, Negative Keywords & Search Terms | PARTIAL | Google matching/exclusions and search-term reporting. | Microsoft negative rules and tested 100-row query sample. |
| CH05 — Search Ad Copy, Assets & Landing Page Relevance | PARTIAL | Google RSA/landing/policy and Microsoft RSA. | Platform-specific worksheets, claims/policy review and mobile QA. |
| CH06 — Campaign Types, Bidding & Budget | PARTIAL | Smart Bidding, 2026 labels and forecast guidance. | Account conversion quality, unit economics and Microsoft bid depth. |
| CH07 — Conversion Tracking, Enhanced Conversions & Offline Conversion | PARTIAL | Web conversion, unified setting, Data Manager transition and UET. | Live tag/CRM, consent, dedupe, privacy and connector tests. |
| CH08 — Search Terms, Quality Score & Impression Share | PARTIAL | Quality components, IS and Auction Insights. | Account export and economic diagnosis. |
| CH09 — Testing, Optimization, Reporting & Diagnosis | PARTIAL | Google Custom Experiments. | Actual sample/causal review and Microsoft test equivalence. |
| CH10 — Paid Search Capstone | PARTIAL | Google-first workflow, introductory Microsoft comparator. | Local case, exports, finance/measurement/SME review. |

## Teaching controls
- Planner estimates are not actual CPC/sales; record location, language, date, account state and assumptions.
- Auction Insights is not full competitor intelligence.
- Positive and negative matching differ; test variants, synonyms and false positives.
- Do not fragment campaigns solely for naming consistency; structure by intent, geo, budget and goal.
- Google/Microsoft RSA specifications are not interchangeable.
- Quality Score is diagnostic; optimise qualified conversions and economics.
- Separate lost IS budget from lost IS rank.
- Smart Bidding cannot fix broken conversion definitions or inaccurate values.
- Follow the 2026 Enhanced Conversions/Data Manager changes; minimise personal data.
- Pre-register experiments with duration, guardrails and decision rule.

## Required follow-up evidence
All ten are PARTIAL. Formal objective fit, Indonesia access, language/cost/account eligibility and independent Search SME review remain OPEN. Required next evidence: permissioned Google/Microsoft account walkthroughs; dated Indonesia keyword data; 100-row query audit; ad/landing policy QA; tag/CRM/Data Manager/UET tests; experiment review; Search, measurement, privacy and finance SME approval.

Machine-readable record: [T04-10-chapter-source-fit-review.csv](T04-10-chapter-source-fit-review.csv). Canonical integration: [169-objective-resource-fit-register.csv](169-objective-resource-fit-register.csv) and [169-chapter-resource-mapping.md](169-chapter-resource-mapping.md).

## External URLs reviewed 20 November 2026

- skill: https://skillshop.withgoogle.com/googleads/
- ms: https://www.about.ads.microsoft.com/en/resources/training-certification/learning-lab
- rank: https://support.google.com/google-ads/answer/1752122/
- kp: https://support.google.com/google-ads/answer/7337243/use-keyword-planner
- kpf: https://support.google.com/google-ads/answer/3022575?hl=en
- mskp: https://about.ads.microsoft.com/en/tools/planning/keyword-planner
- auction: https://support.google.com/google-ads/answer/2579754?hl=en
- terms: https://support.google.com/google-ads/answer/2472708?hl=en
- search: https://support.google.com/google-ads/answer/9510373?hl=en
- msfaq: https://about.ads.microsoft.com/en/get-started/new-advertiser-faqs
- match: https://support.google.com/google-ads/answer/7478529
- neg: https://support.google.com/google-ads/answer/2453972?hl=en
- matching: https://support.google.com/google-ads/answer/14997606?hl=en
- rsa: https://support.google.com/google-ads/answer/17092074?hl=en
- rsab: https://support.google.com/google-ads/answer/6167122?hl=en
- msrsa: https://learn.microsoft.com/en-us/advertising/guides/responsive-search-ads?view=bingads-13
- lp: https://support.google.com/google-ads/answer/14086?hl=en
- policy: https://support.google.com/adspolicy/answer/16427615
- smart: https://support.google.com/google-ads/faq/10286469?hl=en
- bid: https://support.google.com/google-ads/answer/6167148?hl=en
- bidding: https://support.google.com/google-ads/answer/10966879?hl=en
- conv: https://support.google.com/google-ads/answer/16560108
- ecw: https://support.google.com/google-ads/answer/13258081?hl=en
- ecl: https://support.google.com/google-ads/answer/15713840?hl=en
- offline: https://support.google.com/google-ads/answer/15081888?hl=en
- uet: https://about.ads.microsoft.com/en/tools/performance/conversion-tracking
- qs: https://support.google.com/google-ads/answer/6167118?preview=true
- qsb: https://support.google.com/google-ads/answer/13738235?hl=en
- is: https://support.google.com/google-ads/answer/2497703?hl=en
- isdata: https://support.google.com/google-ads/answer/7103314?hl=en-id
- exp: https://support.google.com/google-ads/answer/10683687?hl=en
- expstart: https://support.google.com/google-ads/answer/6261395/set-up-a-campaign-experiment
- expbest: https://support.google.com/google-ads/answer/6167122?hl=en
