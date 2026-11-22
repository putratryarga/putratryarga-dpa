# Credential Route Tiering and Global Market Evidence

**Audit date:** 22 November 2026  
**Repository:** putratryarga/putratryarga-dpa  
**Branch:** audit/dpa-release-readiness-2026-11-21  
**Implementation baseline:** edc804913afe1345c8ca62cce43baf06988cbd75

## Decision

The previous filter removed 21 defined routes because they were not sufficiently supported by the sampled Indonesian vacancies, were vertical/product-specific, or were completion rather than professional awards. That conflated "not a default Indonesia credential" with "not relevant to the professional market". The revised approach retains valid issuer routes, maps them only to chapters where their scope fits, and identifies their tier.

The registry contains **89 issuer routes**, of which 67 are Indonesia-priority, 11 global-specialist optional and 11 supporting completion/product/gated options. The 21 previously removed route IDs are restored, and Snap Focus Snapchat Essentials is added as a new Credential For Completion route.

## Reconciled inventory

| Measure | Result |
|---|---:|
| Issuer routes | **89** |
| Indonesia-priority | 67 |
| Global-specialist optional | 11 |
| Supporting completion/product/gated | 11 |
| Professional certifications | 22 |
| Vendor product certifications | 8 |
| Vendor course certifications | 13 |
| Course-completion credentials | 37 |
| Course-completion certificates | 4 |
| Simulation completion certificates | 1 |
| Industry certifications | 2 |
| Learning-path badge | 1 |
| Skilling certificate | 1 |
| Core chapters with routes | 150/169 |
| Core route placements | 260 |
| Common Foundation chapters with routes | 4/6 |
| Foundation placements | 5 |
| Total route placements | 265 |
| Mapped chapter rows | 154/175 |
| Portfolio-first chapter rows | 21/175 |
| Unique route IDs mapped | 89/89 |

The register contains 175 chapter rows (169 Core + 6 Common Foundation). All route mappings remain FIRST_PASS_MAPPING_NOT_SME_ACCEPTED; no mapping count is an SME acceptance or promise of learner-account issuance.

## Restored route dispositions

| Route ID | Award / classification | Tier and chapter fit | Cost / access caveat |
|---|---|---|---|
| amazon_retail_certification | Amazon Ads for Retail Certification — professional certification | Global specialist; T07-CH01/CH07. Amazon retail and seller readiness, not Indonesian marketplaces. | Free assessment; two-year validity. Indonesia account/language access untested. |
| amazon_programmatic | Amazon Ads Programmatic Solutions — professional certification | Global specialist; T06-CH01/CH05. Amazon programmatic stack. | Free; issuer FAQ states 80% pass and two-year validity. Path-specific assessment duration must be checked. |
| amazon_sponsored_ads | Amazon Sponsored Ads — professional certification | Global specialist; T07-CH09. Sponsored Products/Brands and Amazon ACoS/ROAS only. | Free assessed route; not a local marketplace sponsored listing certificate. |
| microsoft_ads_display_video_certification | Microsoft Advertising Display & Video — professional certification | Global specialist; T03-CH03. Microsoft platform scope only. | Exam and shareable badge; current public page does not state fee. |
| microsoft_programmatic_learning_badge | Microsoft Programmatic Advertising learning-path badge | Global specialist; T06-CH01. Programmatic ecosystem literacy, not live DSP proof. | Complete the learning path courses; not a professional exam. |
| microsoft_retail_advertising_certification | Microsoft Advertising Retail — professional certification | Global specialist; T07-CH03. Microsoft retail advertising only. | Exam and shareable badge; fee not stated publicly. |
| stackadapt_programmatic | StackAdapt Programmatic Masterclass — vendor course certification | Global specialist; T06-CH04. Programmatic ecosystem and campaign concepts, not independent accreditation. | Free; two hours, eight modules and tests. |
| forage_omnichannel_certificate | Forage Omnichannel Marketing — simulation completion certificate | Supporting simulation; T02-CH01/CH10 and CF-CH02/CH06. Integrated brief and plan simulation. | Free, about 5–6 hours. Not employer experience. |
| analyticsmania_ga4_fundamentals | Analytics Mania GA4 Fundamentals — course-completion certificate | Supporting completion; T10-CH02 and CF-CH05. Beginner GA4 only. | Free course; third-party certificate, not Google-issued. |
| t10_coursera_google_data_analytics | Google Data Analytics Professional Certificate via Coursera — course-completion certificate | Supporting paid course; T10-CH04. Broader data analytics, not a marketing measurement exam. | Paid subscription; local Indonesia price must be checked. |
| t10_kaggle_intro_sql | Kaggle Intro to SQL — course-completion certificate | Supporting completion; T10-CH04. Introductory BigQuery SQL. | Free course; Kaggle account required. |
| t12_trailhead_data360 | Salesforce Trailhead Data 360 — module badges | Product learning; T12-CH02. Data 360 product concepts, not Salesforce Certified Data 360 Consultant. | Free Trailhead; some steps require a special Data 360 org and some content is English-only. |
| t08_mediaocean_prisma | Mediaocean Prisma product training / Credly badge | Employer/customer-gated; T03-CH08 only when portal access is available. | Current courses/criteria are inside Customer Experience; public price/self-service access unconfirmed. |
| t14_meltwater_klear_foundations | Meltwater Klear Foundations — vendor product-course certification | Product course; T14-CH03/CH04. Klear discovery, vetting, recruitment and workflow. | Free; 28 lessons, about 1 hour of video and an exam section. |
| t14_pxa_creator_product_training | impact.com Creator Product Training Fundamentals — vendor course certification | Product course; T14-CH03. Creator discovery and campaign workflow, tool-specific. | Free path; four lessons, six videos and a 45-minute exam. |
| t14_pxa_protect_monitor | impact.com Affiliate & Partnerships Industry Expert — vendor learning/certification path | Global specialist; T15-CH09. Affiliate fraud/protection, tracking and program monitoring, not creator-audience fraud screening. | Free; six courses and a 50-minute exam. Distinct from the broader Affiliate Marketing & Partnerships Industry Certification. |
| linkedin_marketing_strategy | LinkedIn Marketing Strategy — professional certification | Global/B2B specialist; T02-CH06. LinkedIn full-funnel planning only. | 60 questions / 60 minutes, 75% pass, up to three attempts, 24-month validity. No Bahasa Indonesia listed; fee not public. |
| linkedin_content_creative | LinkedIn Content & Creative Design — professional certification | Global/B2B specialist; T02-CH08. LinkedIn creative scope only. | Same current exam framework and language/fee caveats. |
| tiktok_auto_ads_achievement | TikTok Drive Vehicle Sales with Auto Ads — Credential For Completion | Vertical specialist; T05-CH04. Automotive dealership inventory, not general paid social. | Free-to-learn path; verify account award issuance. |
| tiktok_promote_app_achievement | TikTok Promote your app — Credential For Completion | Vertical specialist; T05-CH10. App installs, data connections, campaign setup and measurement. | Free-to-learn path; not Media Buying Professional Certification. |
| tiktok_advanced_app_achievement | TikTok Advance your App Promotion Strategy — Credential For Completion | Vertical specialist; T05-CH09. App signals and Smart+ campaign optimization. | Free-to-learn path; not a professional exam. |
| snapchat_essentials_completion | Snap Focus Snapchat Essentials — Credential For Completion | Global platform specialist; T13-CH08. Snapchat-specific platform adaptation. | Six courses + final exam + survey. Fee not public; business-associated Ads Manager account required. |

## Global agency evidence

A WPP Media US posting for Manager, Retail DSP & Commerce Media calls for direct hands-on Amazon DSP and/or Walmart Connect experience, retailer audiences, onsite/offsite activation, bidding, pacing, optimization, measurement and client recommendations. This is evidence that Amazon retail/programmatic is a real professional specialism in global agency practice; it does **not** mean the certificate alone satisfies the role.

A separate WPP Media Supervisor, Paid Search listing names Google Ads, Microsoft Advertising, Search Ads 360 and Campaign Manager 360. This supports retaining Microsoft Advertising as a platform option, while keeping the specific exam scope visible. Neither listing proves that candidates must hold the route-specific certification.

## Local marketplace boundary

Amazon Sponsored Ads and Amazon Ads for Retail are not substitutes for Shopee Sponsored Products, Tokopedia Ads or Lazada onsite sponsored listings. Google Shopping is not interchangeable with marketplace onsite search. T07-CH04 remains portfolio-first until a current issuer-awarded Indonesian marketplace credential with clear assessment and issuance conditions is verified.

## Outstanding verification

1. Signed-in account tests from Indonesia for Amazon Ads, Microsoft Learning Lab, LinkedIn Marketing Academy, Snap Focus, TikTok Academy, Salesforce Trailhead, Kaggle, Coursera, Meltwater and impact.com.
2. Confirm local fees, taxes, exam availability, retakes, language and validity at point of enrolment. Unknown stays unknown, not free.
3. Confirm Mediaocean Prisma's active customer/partner path and Credly badge issuance with an authorized account.
4. SME review every objective mapping and evidence fallback, especially global/specialist routes.
5. Run exact-head Guide Registry, Chromium Browser QA, Static QA and Quiz Engine QA on the final code/CSV/report commit.
6. Keep all mappings FIRST_PASS_MAPPING_NOT_SME_ACCEPTED until chapter-level sign-off is recorded.

## Primary sources

- Amazon Ads certifications: https://advertising.amazon.com/academy/certifications
- Amazon Ads Programmatic Solutions: https://advertising.amazon.com/academy/student/path/1532/amazon-dsp-certification
- Microsoft Advertising Learning Lab: https://about.ads.microsoft.com/en/resources/training-certification/learning-lab
- StackAdapt Programmatic Masterclass: https://www.stackadapt.com/academy/programmatic-masterclass
- LinkedIn certification requirements: https://www.linkedin.com/help/lms/answer/a489784
- TikTok Academy Auto Ads, Promote App and Advanced App Promotion: https://partners.tiktokacademy.com/student/collection/2079614/path/4855051 ; https://partners.tiktokacademy.com/student/collection/2079614/path/2958029 ; https://partners.tiktokacademy.com/student/collection/2079614/path/5967934
- Snap Focus / Snapchat Essentials: https://forbusiness.snapchat.com/resources/snapfocus ; https://snap.exceedlms.com/student/collection/580772-snapchat-essentials
- WPP Media Retail DSP & Commerce Media role: https://job-boards.greenhouse.io/wppmedia/jobs/5210621008
- WPP Media Supervisor, Paid Search: https://job-boards.greenhouse.io/wppmedia/jobs/5185184008
- Meltwater Klear Academy: https://academy.meltwater.com/courses/influencer-marketing-with-meltwater-foundations
- impact.com Creator Product Training: https://impact.com/pxa/courses/impact-com-creator-product-training-fundamentals-certification-path/
- impact.com Affiliate & Partnerships Expert path: https://impact.com/pxa/learning-path/affiliate-partnerships-industry-expert-certification-path/

No route is mandatory for DPA course completion. The registry lists external issuer awards only; it does not authorize any DPA-issued certificate, merge, production release or deployment.
