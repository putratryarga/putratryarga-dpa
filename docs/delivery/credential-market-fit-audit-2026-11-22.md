# Credential Market-Fit Audit — Indonesia and Global Agency Practice

**Audit date:** 22 November 2026  
**Repository:** `putratryarga/putratryarga-dpa`  
**Branch:** `audit/dpa-release-readiness-2026-11-21`  
**Purpose:** Filter learner-facing Earn routes by relevance to Indonesian hiring demand and credible global agency practice. This is not a catalogue of every credential that exists.

## Executive decision

The first Indonesia-only curation pass was too restrictive: it treated a small sample of local vacancies as if it defined the entire professional market, and removed 21 valid issuer routes simply because they were global, specialist, product-specific or completion awards. The revised registry retains these routes with explicit tiers and chapter-specific scope, while keeping Indonesian employer demand as the priority for the default learner journey.

The current runtime contains **89 issuer routes**. Of these, 67 are Indonesia-priority routes, 11 are global-specialist options, and 11 are supporting completion, product-learning or gated routes. A route being visible does not mean that every learner must earn it or that every award is a professional certification.

| Measure | Current result |
|---|---:|
| Issuer route definitions | **89** |
| Indonesia-priority routes | **67** |
| Global-specialist optional routes | **11** |
| Supporting completion, product and gated routes | **11** |
| Professional certifications | 22 |
| Vendor product certifications | 8 |
| Vendor course certifications | 13 |
| Course-completion credentials | 37 |
| Course-completion certificates | 4 |
| Simulation completion certificates | 1 |
| Industry certifications | 2 |
| Learning-path badges | 1 |
| Skilling certificates | 1 |
| Core specialist chapters | 169 |
| Core chapters with at least one selected route | **150/169** |
| Core route placements | **260** |
| Common Foundation chapters with a selected route | **4/6** |
| Foundation route placements | **4** |
| Total mapping rows | 175 (169 Core + 6 Common Foundation) |
| Mapped chapter rows | **154/175** |
| Portfolio-first chapter rows | **21/175** |
| Total route placements | **264** |
| Unique mapped routes | **89/89** |

All mappings remain `FIRST_PASS_MAPPING_NOT_SME_ACCEPTED`. This is a relevance-filtered desk review, not final SME approval, account-level access testing, credential issuance, or proof that every learner can redeem every award in Indonesia.

## Decision standard

The catalogue separates four learner-facing tiers. Indonesia demand remains the default priority, but it is not a deletion rule for legitimate global agency skills or issuer-awarded completion credentials.

1. **Indonesia-priority Earn:** directly aligned with Indonesian employer, agency, brand or regional delivery requirements and a chapter objective.
2. **Global / specialist optional Earn:** a valid issuer route for a distinct global platform, retailer, client ecosystem or vertical. It is optional and must not be presented as a universal job prerequisite.
3. **Supporting completion / product learning:** a course badge, learning-path award, simulation certificate or tool-specific training certificate. Display the exact award type and scope; never relabel it as a professional exam.
4. **Conditional / gated:** a real issuer route whose access depends on a customer, partner or business-linked account. Show the access condition and do not promise self-service availability.

Every mapped route must pass issuer and chapter-fit checks. Record assessment, award type, language, fee, validity, prerequisites and Indonesia access separately. Unknown is not free; a completion badge is not a professional certification; a global-specialist route is not a local marketplace substitute. Where no objective-fit award exists, retain Learn + applied deliverable + portfolio evidence.

The selection is a first-pass evidence map, not a requirement for learners to earn every award. Employer skill requirements may be demonstrated by live platform practice and campaign outcomes even when a credential is unavailable.

## Indonesian hiring evidence

The following current/recent role descriptions provide a concrete market anchor.

| Market role / employer | Named tools and requirements | Credential decision informed |
|---|---|---|
| Publicis Groupe Indonesia — Performance Specialist | Google Ads, Meta Ads; TikTok as advantage; GA4, GTM, Looker Studio, pixels, UTMs, conversion tracking and campaign metrics | Keep Google Ads, Meta Blueprint, TikTok Academy, GA and measurement routes |
| Publicis Groupe Indonesia — Biddable Specialist | Google Ads, Meta Ads Manager, TikTok Ads and DV360; The Trade Desk and LinkedIn Ads as plus; Google Ads, Meta Blueprint and DV360 certifications are an advantage | Keep Google Ads, Meta, TikTok, DV360, TTD and a limited LinkedIn Ads route |
| Publicis Groupe Indonesia — Paid Search Manager | Google Ads, Search Ads 360, Microsoft Ads, GA4, GTM and conversion tracking; Google Ads certification as a plus | Keep Google Ads Search, Microsoft Advertising Search, GA4 and technical measurement; do not invent an SA360 certificate without current issuer proof |
| Publicis Groupe Indonesia — Media Performance Manager | Google, Meta, TikTok and programmatic; GA4, GTM, Looker Studio, media budgets and optimisation | Keep platform routes with actual performance-management fit |
| CPXi Asia — Digital Performance Specialist | DV360, Meta, TikTok and Google Ads; GA4, GTM, Pixel, conversion tracking, CM360/Floodlight and marketplace ads as a plus | Keep DV360, CM360, Meta, TikTok and Google Ads measurement routes |
| Big Ads Indonesia — Ad Operations / Programmatic Manager | DV360, The Trade Desk, YouTube, Meta, CM360/Floodlight and GTM | Keep DV360, CM360 and The Trade Desk; do not elevate an unrelated DSP course above the platforms named in role requirements |
| M+C Saatchi Performance — Programmatic Executive | Multiple DSPs; DV360 and The Trade Desk explicitly named as useful; trafficking, optimisation, reporting and partner coordination | Keep DV360/TTD and industry-level IAB options |
| Publicis Groupe Indonesia — Senior Ecommerce Executive | Shopee Ads, TikTok Ads and Lazada Sponsored Solutions; Meta/Google conversion campaigns, Google Shopping, marketplace account coordination and ROAS/GMV reporting | Keep Google Shopping and TikTok Shop learning awards; do not map Amazon Retail as the default Indonesian marketplace credential |
| Awin Agency — Marketplace Ads Specialist | Shopee Ads and TikTok Shop Ads as primary; Meta/Google Ads as additional skills | Treat marketplace-native operating ability as required practice; do not fabricate a Shopee/Tokopedia certificate where no issuer award was verified |
| FLOQ — CRM Automation & Lifecycle Intelligence Manager | MoEngage, Braze, HubSpot, CleverTap or Salesforce Marketing Cloud; SQL, event-driven journeys, segmentation, cohort analysis, A/B testing and funnel optimisation | Add MoEngage and Braze credentials; retain HubSpot; add Salesforce Marketing Cloud rather than unrelated Data 360 content |
| Transcosmos Indonesia — Project Manager (DX) | Customer engagement and marketing automation platforms including MoEngage, CleverTap, Braze, Salesforce and HubSpot | Confirms CRM platform route relevance beyond a single employer |
| KliknClean — CRM Specialist | MoEngage, WebEngage, CleverTap, Braze and HubSpot; lifecycle journeys and A/B testing | Supports MoEngage/Braze/HubSpot mapping |
| Narrativ Digital Agency — Senior SEO Specialist | Ahrefs and/or Semrush, Screaming Frog, GSC, GA4, Looker Studio; technical SEO and AEO/GEO | Add Ahrefs; retain Semrush and Google Analytics/Search Console learning |
| Indonesian KOL / Influencer Specialist roles | Creator discovery/vetting, campaign briefs, negotiation, contracts, KPIs, reporting and work across Instagram, TikTok and YouTube | Retain industry-level Meltwater Influencer Marketing routes plus platform-specific creator awards where the scope fits |

### Market evidence limits

This is a purposive sample of role descriptions, not a statistical census of all Indonesian vacancies. Senior, junior, agency, brand-side and cross-border role scopes must not be collapsed. Individual job listings may close; the evidence URLs are retained for audit traceability, not as live vacancy guarantees.

### Global agency and cross-border evidence

The Indonesian role sample is not a proxy for the entire global agency market. A current WPP Media US role for **Manager, Retail DSP & Commerce Media** explicitly requires hands-on experience with Amazon DSP and/or Walmart Connect, retailer first-party audiences, onsite/offsite activation, bidding, pacing, optimization, measurement and client recommendations. This supports keeping Amazon Ads routes visible as global/cross-border specialist options. It does not imply that an Amazon certificate substitutes for hands-on campaign results or Indonesian marketplace operations.

A separate WPP Media **Supervisor, Paid Search** listing names Google Ads, Microsoft Advertising, Search Ads 360 and Campaign Manager 360 as hands-on platforms. This supports retaining Microsoft Advertising as a platform option, while keeping each credential's exact exam scope visible. The job listing does not itself require the Display & Video certification.

The distinction is deliberate: global job-market evidence supports an optional skills route, not a claim that every agency requires the named certificate.

## Indonesia-priority routes retained in default Earn

### Performance media and paid search

- **Google Ads Search, Display, Measurement, Video and Shopping Certifications** — official Skillshop foundational product-area certifications. They are free, assessed, downloadable/shareable and distinct from the separate virtually proctored Google Ads Professional Certifications (Display/Search/Video), which Google says are limited-access and not generally public. Standard Google Ads certification assessment requires 80%, allows 75 minutes, has a 24-hour retake wait and is valid one year; Bahasa Indonesia is supported. Shopping is retained because Indonesian ecommerce roles explicitly request Google Shopping Ads; it maps to product-feed and Merchant Center readiness (T07-CH07), not onsite marketplace Sponsored Products (T07-CH04).
- **Microsoft Advertising Search Certification** — retained as a secondary paid-search option because the Publicis Indonesia Paid Search Manager role names Microsoft Ads. Microsoft Display & Video and Retail certifications are available as global-specialist options; Microsoft's Programmatic path is a learning-path badge, not an exam certification.
- **Google Analytics Certification** — retained for GA/measurement roles; do not assume the exam is free solely because preparation learning is free.
- **DV360 and CM360 Certifications** — retained because Indonesian agency biddable and operations roles name DV360 and CM360/Floodlight.
- **Meta Blueprint and TikTok Academy completion awards** — retained as issuer course/achievement credentials, not relabelled as professional exams.
- **Meta Media Buying / Media Planning / Marketing Science and TikTok Media Buying** — retained as optional professional certifications, separately identified from completion awards and with price/access checks.
- **LinkedIn Advertising Fundamentals and Marketing Measurement** — retained as supplementary B2B/platform routes because agency hiring evidence names LinkedIn Ads as a plus. The routes are English-language and platform-specific; they are not core substitutes for Google/Meta/TikTok.
- **The Trade Desk Edge Academy Certified: Data-Driven Planning** — retained as optional programmatic vendor certification because TTD appears in agency role requirements.
- **IAB DBPC and DAOC** — retained as optional industry certifications for buying/planning and ad operations. Their higher fee means they are not beginner prerequisites.

### SEO and search visibility

- **Semrush SEO Crash Course and Technical SEO & AI Search Essentials** — retained because Indonesian SEO hiring evidence names Semrush.
- **Ahrefs Certification** — added. Issuer evidence states 67 questions, one hour, 75% pass, three attempts, free exam, use of a paid or non-paid Ahrefs account, and a one-year shareable certificate. This validates Ahrefs tool use, not all SEO strategy or technical implementation.
- **HubSpot AEO Fundamentals** — retained as vendor learning certification for AEO fundamentals; it does not prove rankings or AI citations.

### CRM, lifecycle and marketing automation

- **HubSpot Inbound, Email, Digital Marketing, Content and Social Media certifications** — retained where course objectives fit DPA chapters and the public issuer identifies a certificate/assessment. These are vendor course certifications, not broad independent CRM qualifications.
- **MoEngage Growth Marketer — Credential for Completion** — added. The official path covers behavioral segmentation, lifecycle automation, email, push, SMS, WhatsApp, in-app messaging, flows and optimisation. The path page does not state an Indonesia-specific price/access condition; account-level completion must be checked.
- **MoEngage Analytics Expert — Credential for Completion** — added. The official path covers event-based behavioral analytics, funnels, cohorts, retention and path analysis. This is a MoEngage-specific completion credential, not a neutral analytics qualification.
- **Braze certifications — current three-level route family:** (1) Braze Certified Practitioner, foundational, USD 50; 30 questions, 60 minutes, 73% pass; (2) Braze Certified Marketing Specialist (renamed from Marketer), intermediate, USD 100; 60 questions, 90 minutes, 69% pass; (3) Braze Certified Marketing Strategy Expert (renamed from Digital Strategist), advanced, USD 150; 50 mixed-format questions, 90 minutes, 72% pass. All are paid, proctored vendor professional certifications with three-year validity and issuer retake rules. Braze provides free Foundations (6 courses), Marketer (13 courses) and Digital Strategist (14 courses) learning paths, but these prepare learners for paid exams; path completion alone is not claimed as a free certificate. Current Braze job demand in Indonesia is evidenced by FLOQ and Transcosmos CEP roles.
- **Salesforce Certified Marketing Cloud Engagement Foundations** — added as a paid entry-level route. The current guide lists 40 multiple-choice questions, 70 minutes, 65% pass and USD 75 plus applicable tax; no prerequisite; free retake.
- **Salesforce Certified Marketing Cloud Engagement Specialist** — added as an advanced optional route. Salesforce's current pricing page lists USD 200 plus tax and USD 100 retake. It maps to email, subscriber/data management and inbox delivery.

### Programmatic, creator and affiliate

- **Meltwater Influencer Marketing Certification I and II** — retained as issuer industry certifications. Certification II adds influencer selection and conversion tactics; both are listed as free by Meltwater Academy. Product-specific Klear learning is not elevated to default Earn.
- **Meta creator/Partnership Ads and relevant TikTok Academy creative achievements** — retained as platform-specific supplemental awards, not proof of creator contracting, negotiation, disclosure compliance or live campaign success.
- **impact.com Affiliate Marketing & Partnerships Industry Certification** — retained for Track 15 because the issuer identifies an industry certification and its competencies align with affiliate program strategy, partner recruitment, commercial terms, tracking and performance. Request-access approval and Indonesian account eligibility still need testing.

## Global, specialist and completion routes restored to the registry

These routes were removed from the first Indonesia-filtered catalogue, not because the awards were false, but because the selection logic treated the sampled Indonesian vacancy set as the entire professional market. They are now available as chapter-specific optional or supporting routes. Their inclusion does not make them default prerequisites.

| Route | Exact award class | Tier / learner note |
|---|---|---|
| Amazon Ads for Retail Certification | Professional certification | Global specialist; issuer assessment, free, two-year validity; Amazon seller/retail scope only. |
| Amazon Ads Programmatic Solutions Certification | Professional certification | Global specialist; free, 80% pass threshold and two-year validity; route page lists a two-hour assessment, while general FAQ duration differs, so check the live path. |
| Amazon Sponsored Ads Certification | Professional certification | Global specialist; free assessed route; Sponsored Products/Brands only, never a Shopee/Tokopedia/Lazada substitute. |
| Microsoft Advertising Display & Video Certification | Professional certification | Global platform specialist; exam and shareable badge; public Learning Lab page does not state fee. |
| Microsoft Advertising Programmatic Learning Path | Learning-path badge | Supporting learning award after completing the path's courses; not the Display & Video exam or a professional certification. |
| Microsoft Advertising Retail Certification | Professional certification | Global platform specialist; exam and shareable badge; fee must be checked at enrolment. |
| StackAdapt Programmatic Masterclass | Vendor course certification | Free two-hour vendor course with module tests and a recognized certificate; not independent cross-industry accreditation. |
| Forage Omnichannel Marketing Simulation | Simulation completion certificate | Free job simulation; evidence of completing an integrated brief and plan, not employer-issued experience. |
| Analytics Mania GA4 Fundamentals | Course-completion certificate | Free third-party GA4 course certificate; not Google-issued. |
| Google Data Analytics Professional Certificate (Coursera) | Course-completion certificate | Paid subscription course program; broader than marketing measurement and not a proctored professional exam. |
| Kaggle Intro to SQL | Course-completion certificate | Free beginner SQL course certificate; useful practice proof, not an advanced analytics credential. |
| Salesforce Trailhead Data 360 | Course-completion badges | Free product-learning badges; some challenges require a special Data 360 org and some content is English-only; not Salesforce Certified Data 360 Consultant. |
| Mediaocean Prisma product training | Vendor product-training credential | Customer/partner-gated; keep as conditional route until access and active badge requirements are confirmed in the portal. |
| Meltwater Klear Foundations | Vendor product-course certification | Free product certification course covering Klear creator discovery, recruitment, vetting, campaign management and measurement. |
| impact.com Creator Product Training Fundamentals | Vendor product-training certification | Free path, four lessons, six videos and a 45-minute exam; tool-specific, not a general influencer license. |
| impact.com Affiliate & Partnerships Industry Expert | Vendor industry-training certification path | Free path with six courses and a 50-minute exam; affiliate program protection/monitoring, tracking and operations. Distinct from the broader Affiliate Marketing & Partnerships Industry Certification mapped in T15. |
| LinkedIn Marketing Strategy Certification | Professional certification | Global/B2B platform specialist; 60 questions/60 minutes, 75% pass, up to three attempts and 24-month validity; no Bahasa Indonesia exam language listed and fee not stated. |
| LinkedIn Content and Creative Design Certification | Professional certification | Global/B2B platform specialist; same issuer exam framework and language/fee caveats as above. |
| TikTok Drive Vehicle Sales with Auto Ads | Credential for Completion | Free-to-learn automotive dealership specialization; not a general paid-social or Media Buying Professional credential. |
| TikTok Promote your app | Credential for Completion | App installs, data connections, campaign setup and measurement; vertical specialization, not a professional exam. |
| TikTok Advance your App Promotion Strategy | Credential for Completion | Advanced app signals and Smart+ app campaign learning; vertical specialization, not a professional exam. |
| Snapchat Essentials (Snap Focus) | Credential for Completion | Six courses plus final exam and survey; platform-specific completion award. Fee is not stated publicly and Snap Focus access requires a business-associated Ads Manager account. |

The current runtime applies route tiers (GLOBAL_SPECIALIST_OPTIONAL, SUPPORTING_COMPLETION, VERTICAL_SPECIALIST_COMPLETION, PRODUCT_LEARNING_BADGE, PRODUCT_COURSE_CERTIFICATION, EMPLOYER_CUSTOMER_GATED) rather than deleting these routes. These are selection labels, not provider accreditation.

### Additional platform candidates still under review

Adobe and Pinterest are not described as irrelevant or nonexistent. Their route-level award type, current exam/fee requirements, regional availability and direct chapter fit have not yet been fully reconciled against this registry. They remain candidates for a separate issuer-and-role review rather than being silently inserted or dismissed.

### Marketplace credential gap — deliberately not fabricated

The Indonesian role sample strongly supports Shopee Ads, TikTok Shop Ads and Lazada Sponsored Solutions. The T07-CH04 chapter (onsite Sponsored Products and Search) is therefore portfolio-first: this audit did not verify a public, current, issuer-awarded Shopee Sponsored Products, Tokopedia Ads or Lazada onsite sponsored-listing professional certificate with clear assessment and issuance conditions. Google Shopping is not interchangeable with marketplace onsite search and is mapped only to T07-CH07 product-feed / digital-shelf readiness. TikTok Academy ad Achievements are not automatically a TikTok Shop seller certificate.

## Cost, access and learner-facing rules

- Amazon Ads Academy says its certifications are free, require at least 80% to pass and are valid for two years. General FAQ duration differs from some route-specific exam pages; use the specific route page at enrolment.
- Microsoft Advertising separates Search, Display & Video and Retail exam certifications (with shareable badges) from its Programmatic Advertising Learning Path badge, earned by completing the path courses. The public Learning Lab pages checked here do not state all exam fees.
- StackAdapt's Programmatic Masterclass is free and two hours, with eight modules and module tests. The issuer calls it a professional certification; DPA classifies it as a vendor course certification to avoid implying independent accreditation.
- LinkedIn certification exams have 60 multiple-choice questions in 60 minutes, a 75% pass score, up to three attempts and 24-month validity. The current official language list excludes Bahasa Indonesia; the public help page does not state the exam fee.
- TikTok Academy's Auto Ads, Promote your app and Advanced App Promotion pages label the award Credential For Completion. These are free-to-learn issuer paths with an associated assessment; they are not TikTok Media Buying Professional Certification.
- Snap Focus's Snapchat Essentials course requires six courses, the final exam and survey. The public page does not state a fee; business-associated Snapchat Ads Manager access is required to use Snap Focus.
- Forage simulations are free and the certificate proves completion of a simulated task. It is not an internship, employer certification or proof of live client delivery.
- Analytics Mania's GA4 course is free and provides a third-party course-completion certificate. Kaggle Intro to SQL is a free beginner course with a completion certificate.
- Coursera's Google Data Analytics Professional Certificate is a paid subscription program; price is country-specific. Do not copy a US price to Indonesian checkout.
- Trailhead learning is free, but some Data 360 challenges require a dedicated Data 360 org and some course material is English-only.
- Mediaocean Prisma training is customer/partner-gated; no public price or self-service entry route is confirmed.
- Meltwater Klear Foundations is a free product-course path with 28 lessons, about one hour of video and an exam/certification section. The award validates Klear product use, not platform-neutral fraud screening.
- impact.com Creator Product Training is a free product-training path with a 45-minute exam. The separate Affiliate & Partnerships Industry Expert path has six courses and a 50-minute exam. Do not conflate either with the existing Affiliate Marketing & Partnerships Industry Certification route.
- No external credential is mandatory for DPA chapter completion. Chapter deliverables, campaign builds and portfolio evidence remain primary. No DPA-issued credential is authorized by this audit.

## Primary source register

### Indonesian hiring evidence
- Publicis Groupe Indonesia, Performance Specialist: https://id.linkedin.com/jobs/view/performance-specialist-at-publicis-groupe-indonesia-4492142141
- Publicis Groupe Indonesia, Biddable Specialist: https://id.linkedin.com/jobs/view/biddable-specialist-at-publicis-groupe-indonesia-4483872592
- Publicis Groupe Indonesia, Media Performance Manager: https://id.linkedin.com/jobs/view/paid-search-manager-at-publicis-groupe-indonesia-4475791641event-4838/jobs/163977?lang=en-us
- Publicis Groupe Indonesia, Paid Search Manager: https://careers.publicisgroupe.com/
- CPXi Asia, Digital Performance Specialist: https://id.linkedin.com/jobs/view/digital-performance-specialist-at-cpxi-asia-4461606238
- Big Ads, Ad Operations / Programmatic Manager: https://id.linkedin.com/jobs/view/ad-operations-programmatic-manager-at-big-ads-4479945954
- M+C Saatchi Performance, Programmatic Executive: https://id.linkedin.com/jobs/view/programmatic-executive-at-m%2Bc-saatchi-performance-3923138277
- Publicis Groupe Indonesia, Senior Ecommerce Executive: https://id.linkedin.com/jobs/view/senior-ecommerce-executive-at-publicis-groupe-indonesia-4492557884
- Awin Agency, Marketplace Ads Specialist: https://id.linkedin.com/jobs/view/marketplace-ads-specialist-at-awin-agency-4487683071
- FLOQ, CRM Automation & Lifecycle Intelligence Manager: https://id.linkedin.com/jobs/view/crm-automation-lifecycle-intelligence-manager-at-floq-4490286071
- Transcosmos Indonesia, Project Manager (DX): https://id.linkedin.com/jobs/view/project-manager-dx-at-transcosmos-indonesia-official-4477147387
- Transcosmos Indonesia, Project Manager (CEP Specialist): https://id.linkedin.com/jobs/view/project-manager-cep-specialist-at-transcosmos-indonesia-official-4492542328
- KliknClean, CRM Specialist: https://id.linkedin.com/jobs/view/crm-specialist-at-kliknclean-4321556156
- Narrativ Digital Agency, Senior SEO Specialist: https://id.linkedin.com/jobs/view/senior-seo-specialist-seo-aeo-geo-at-narrativ-digital-agency-4469112092
- Surya Digital Teknologi, SEO Specialist (Semarang): https://id.linkedin.com/jobs/view/search-engine-optimization-specialist-at-surya-digital-teknologi-4490173357
- Impactive Agency Indonesia, Junior SEO Specialist: https://id.linkedin.com/jobs/view/junior-seo-specialist-at-impactive-agency-indonesia-4483537088
- Clickbait Creative Performance Agency, KOL Specialist: https://id.linkedin.com/jobs/view/kol-specialist-agency-experience-at-clickbait-creative-performance-agency-4490211439
- Social Bread Indonesia, KOL & Affiliate Specialist: https://id.linkedin.com/jobs/view/kol-affiliate-specialist-tiktok-marketing-agency-at-social-bread-indonesia-4455456349

### Official issuer evidence
- Google Skillshop, Google Ads certification catalogue: https://skillshop.withgoogle.com/googleads/
- Google Ads certification rules and languages: https://support.google.com/google-ads/answer/9702955?hl=id
- Google Shopping country availability: https://support.google.com/merchants/answer/160637?hl=id
- Ahrefs Certification: https://ahrefs.com/id/certification
- MoEngage Growth Marketer: https://academy.moengage.com/student/path/3328685-moengage-growth-marketer
- MoEngage Analytics Expert: https://academy.moengage.com/student/path/3388299-moengage-analytics-expert
- Braze certification registration and exam pricing: https://braze-dev.skilljar.com/page/certification
- Braze Learning free learning paths: https://braze-dev.skilljar.com/page/learning-paths
- Braze Practitioner badge and exam criteria: https://www.credly.com/org/braze/badge/braze-certified-practitioner
- Braze Marketing Specialist badge and exam criteria: https://www.credly.com/org/braze/badge/braze-certified-marketing-specialist
- Braze Marketing Strategy Expert badge and exam criteria: https://www.credly.com/org/braze/badge/marketing-strategy-expert
- Braze certification programme renaming announcement: https://community.braze.com/discussion/5685/certification-program-updates
- Salesforce Marketing Cloud Engagement Foundations exam guide: https://help.salesforce.com/s/articleView?id=005298962&language=en_US&type=1
- Salesforce certification exam prices: https://help.salesforce.com/s/articleView?id=005298916&language=en_US&type=1
- Salesforce Marketing Cloud Engagement Specialist: https://trailhead.salesforce.com/credentials/marketingcloudengagementspecialist
- Meltwater Influencer Marketing courses: https://academy.meltwater.com/pages/Influencer%20Marketing
- Meltwater industry certification catalogue: https://academy.meltwater.com/collections/Industry_Certification
- TikTok Academy Indonesia: https://ads.tiktok.com/business/id/academy
- TikTok Media Buying Certification Indonesia: https://ads.tiktok.com/business/id/academy/tiktok-certification

### Global and completion route issuer evidence

- Amazon Ads Academy Certifications and help: https://advertising.amazon.com/academy/certifications and https://advertising.amazon.com/academy/help
- Amazon Ads Programmatic Solutions Certification: https://advertising.amazon.com/academy/student/path/1532/amazon-dsp-certification
- Microsoft Advertising Learning Lab: https://about.ads.microsoft.com/en/resources/training-certification/learning-lab
- StackAdapt Programmatic Masterclass: https://www.stackadapt.com/academy/programmatic-masterclass
- LinkedIn Marketing Academy exam requirements and languages: https://www.linkedin.com/help/lms/answer/a489784
- TikTok Academy Auto Ads, Promote your app and Advanced App Promotion: https://partners.tiktokacademy.com/student/collection/2079614/path/4855051 ; https://partners.tiktokacademy.com/student/collection/2079614/path/2958029 ; https://partners.tiktokacademy.com/student/collection/2079614/path/5967934
- Snap Focus / Snapchat Essentials: https://forbusiness.snapchat.com/resources/snapfocus ; https://snap.exceedlms.com/student/collection/580772-snapchat-essentials
- Forage job simulations: https://www.theforage.com/ and https://www.theforage.com/faq
- Kaggle Intro to SQL: https://www.kaggle.com/learn/intro-to-sql
- Salesforce Trailhead Data 360: https://trailhead.salesforce.com/content/learn/trails/unlock-your-data-with-data-cloud
- Mediaocean Prisma training announcement: https://www.mediaocean.com/mediaocean-launches-digital-product-training-certifications-program-with-credly
- Meltwater Klear Foundations: https://academy.meltwater.com/courses/influencer-marketing-with-meltwater-foundations
- impact.com Creator Product Training and Affiliate/Partnerships Expert: https://impact.com/pxa/courses/impact-com-creator-product-training-fundamentals-certification-path/ ; https://impact.com/pxa/learning-path/affiliate-partnerships-industry-expert-certification-path/
- WPP Media, Manager Retail DSP & Commerce Media (Amazon DSP and/or Walmart Connect experience): https://job-boards.greenhouse.io/wppmedia/jobs/5210621008
- WPP Media, Supervisor Paid Search (Google Ads, Microsoft Advertising, SA360, CM360): https://job-boards.greenhouse.io/wppmedia/jobs/5185184008

## Implementation and remaining gates

This audit has been reflected in:
- `chapter-credential-routes-integration.js` — 89 issuer routes, tiered optional/global/specialist dispositions and chapter placements; global routes are retained rather than deleted by the Indonesia filter.
- `docs/credential-route-mapping-register.csv` — 175-row map synced to 89 unique route IDs and first-pass notes.
- `scripts/validate-dpa-guide-registry.js` — route classification, tier, chapter-fit, map-parity and local-marketplace non-substitution assertions.

Still open:
1. Exact-head GitHub Actions validation and browser QA must pass on the 89-route credential-expansion commit.
2. Test Indonesian signed-in learner accounts for Google, Meta, TikTok, Microsoft, Amazon Ads, LinkedIn, Snap Focus, HubSpot, MoEngage, Braze, Salesforce, Ahrefs, Meltwater, Kaggle and Coursera award issuance, language, cost and checkout; Mediaocean remains employer/customer-gated.
3. Confirm fee, retake and renewal facts at point of enrolment; do not extrapolate USD fees to IDR checkout.
4. Independent SME acceptance of every chapter placement, including restored global/specialist options, and all 28 elective credential reviews.
5. Update learner-facing catalogue and governance pages so historical snapshots are not mistaken for the current Indonesia-filtered selection.

No changes to `main`, no merge and no production release are made by this audit. The expanded 89-route registry remains first-pass and awaits exact-head CI, account tests and SME review.
