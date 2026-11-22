/*
 * DPA credential routes recovered from the 21 Nov 2026 Agent A proposal set
 * and reconciled against current issuer pages. Loaded after the baseline map.
 * This remains a first-pass curated mapping, not SME acceptance or a DPA award.
 */
(function(root){
"use strict";

var registry = root.DPA_CREDENTIAL_REGISTRY;
var chapterMap = root.DPA_CHAPTER_CREDENTIAL_MAP;
var auditMap = root.DPA_CHAPTER_CREDENTIAL_AUDIT;
var foundationMap = root.DPA_FOUNDATION_CREDENTIAL_MAP;
var foundationAudit = root.DPA_FOUNDATION_CREDENTIAL_AUDIT || {};

var additions = {
  "analyticsmania_ga4_fundamentals": {
    "provider": "Analytics Mania",
    "title": "Google Analytics 4 Fundamentals — course-completion certificate",
    "type": "course_completion_certificate",
    "label": "Course-completion certificate",
    "tagClass": "t-completion",
    "paidExam": false,
    "description": "Free GA4 mini-course covering property setup, data streams, installation, standard reports, explorations and basic event tracking. The provider describes 90 minutes of video and a 30-question final quiz.",
    "duration": "About 90 minutes of video plus a 30-question final quiz.",
    "cost": "Free course; confirm any account requirements at enrolment.",
    "eligibility": "Complete the lessons and pass the final quiz to receive the provider's completion certificate.",
    "validity": "No expiry stated for the course-completion certificate.",
    "regional": "The public course is free and states no country restriction; account access from Indonesia should be confirmed at enrolment.",
    "url": "https://www.analyticsmania.com/courses/free-google-analytics-fundamentals-course/",
    "sourceUrl": "https://www.analyticsmania.com/courses/free-google-analytics-fundamentals-course/",
    "award": "Analytics Mania certificate of completion after completing the course and passing its quiz; not a Google-issued certification.",
    "scope": "Beginner GA4 setup and measurement fundamentals; does not validate advanced analytics, SQL, experimentation or cross-platform measurement.",
    "fitNote": "Supporting resource for shared measurement fundamentals only.",
    "verifiedOn": "2026-11-21"
  },
  "t02_tiktok_creative_planning": {
    "provider": "TikTok Academy",
    "title": "Creative planning — Achievement assessment",
    "type": "course_completion_credential",
    "label": "Course-level learning credential",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "TikTok Academy's Creative planning learning path covers TikTok audience research, creative inspiration and developing a creative brief; the page lists an Achievement assessment and Credential for Completion.",
    "duration": "Self-paced; the page does not publish a total duration.",
    "cost": "Free course path according to TikTok Academy; confirm account and assessment access at enrolment.",
    "eligibility": "Complete the listed learning activities and pass the associated Achievement assessment.",
    "validity": "No expiry stated for the course-level credential.",
    "regional": "TikTok Academy lists Bahasa Indonesia as an available platform locale; confirm this course and its assessment are available in the learner's account.",
    "url": "https://www.tiktokacademy.com/student/collection/2079614/path/5699141",
    "sourceUrl": "https://www.tiktokacademy.com/student/collection/2079614/path/5699141",
    "award": "TikTok Academy Achievement for completion of the Creative planning path and associated assessment; not the separate TikTok Media Buying Professional Certification.",
    "scope": "TikTok-specific audience research and creative briefing; supports but does not replace broader cultural insight or communication strategy.",
    "fitNote": "Supporting fit for TikTok creative planning only.",
    "verifiedOn": "2026-11-21"
  },
  "t08_iab_dbpc": {
    "provider": "IAB Certification",
    "title": "Digital Media Buying & Planning Certification (DBPC)",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "IAB's professional certification assesses campaign briefs, media strategy, digital media planning, execution, campaign management and stakeholder education. Its blueprint includes research, media-mix allocation, negotiation, IOs, optimization and reporting.",
    "duration": "100 multiple-choice questions; two-hour appointment (including a five-minute nondisclosure step); 80 scored and 20 pretest questions.",
    "cost": "USD 500 initial application, including the exam and first two-year cycle. A failed-exam retest is listed at USD 175. Recertification is every two years with a USD 125 fee plus continuing education; confirm any re-exam fee separately in the IAB portal.",
    "eligibility": "Apply through IAB, satisfy the current application requirements, agree to the Code of Ethics and pass the exam. Scheduling is through Pearson VUE.",
    "validity": "Two years; recertification requires continuing education or the current recertification examination route.",
    "regional": "Exam is currently English-only. Pearson VUE operates internationally, but Indonesia test-centre and remote-proctor availability must be checked during scheduling.",
    "url": "https://iabcertification.com/digital-media-buying-planning/exam-information/",
    "sourceUrl": "https://iabcertification.com/digital-media-buying-planning/exam-information/",
    "award": "IAB Digital Media Buying & Planning Certification after the candidate passes the professional exam and meets IAB requirements.",
    "scope": "Professional digital media buying and planning credential; does not validate every specialist objective, an individual campaign outcome or the learner's portfolio capstone.",
    "fitNote": "Chapter fit varies by objective; see the placement disposition register.",
    "verifiedOn": "2026-11-21"
  },
  "t08_iab_daoc": {
    "provider": "IAB Certification",
    "title": "Digital Ad Operations Certification (DAOC)",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "IAB's professional certification assesses campaign launch, live campaign management, operations initiatives and incident management, including QA, discrepancy investigation and monthly billing reconciliation.",
    "duration": "100 multiple-choice questions; two-hour appointment (including a five-minute nondisclosure step); 80 scored and 20 pretest questions.",
    "cost": "USD 500 initial application, including the exam and first two-year cycle. A failed-exam retest is listed at USD 175. Recertification is every two years with a USD 125 fee plus continuing education; confirm any re-exam fee separately in the IAB portal.",
    "eligibility": "Apply through IAB, satisfy the current application requirements, agree to the Code of Ethics and pass the exam. Scheduling is through Pearson VUE.",
    "validity": "Two years; recertification requires continuing education or the current recertification examination route.",
    "regional": "Exam is currently English-only. Pearson VUE operates internationally, but Indonesia test-centre and remote-proctor availability must be checked during scheduling.",
    "url": "https://iabcertification.com/digital-ad-operations/exam-information/",
    "sourceUrl": "https://iabcertification.com/digital-ad-operations/exam-information/",
    "award": "IAB Digital Ad Operations Certification after the candidate passes the professional exam and meets IAB requirements.",
    "scope": "Professional ad-operations credential; it does not validate every media-investment or publisher-partnership competency.",
    "fitNote": "Partial fit for the mapped operations chapter; use its rubric and work sample as primary evidence.",
    "verifiedOn": "2026-11-21"
  },
  "t08_mediaocean_prisma": {
    "provider": "Mediaocean Education",
    "title": "Prisma product training and Credly badges — customer access",
    "type": "vendor_course_certification",
    "label": "Vendor product-training credential",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Mediaocean's public announcement describes product-training certifications and Credly-backed badges across Prisma and Flashtalking. Specific current course titles, assessment criteria and access are inside the Customer Experience portal.",
    "duration": "Not published on the public issuer page.",
    "cost": "No public course or assessment price; access is gated through Mediaocean Customer Experience and may depend on customer or partner status.",
    "eligibility": "Access the current Mediaocean Education catalogue through the Customer Experience portal; verify the specific course and badge requirements with the issuer.",
    "validity": "Not stated on the public issuer page.",
    "regional": "The issuer describes support for global clients and agency partners; Indonesia access and eligibility are not independently confirmed.",
    "url": "https://www.mediaocean.com/mediaocean-launches-digital-product-training-certifications-program-with-credly",
    "sourceUrl": "https://www.mediaocean.com/mediaocean-launches-digital-product-training-certifications-program-with-credly",
    "award": "Mediaocean product-training certification/badge may be available for Prisma; confirm the active Prisma badge and completion criteria in the gated portal.",
    "scope": "Product-specific training for Mediaocean Prisma; it does not establish broader media investment, trading or invoice-control competence.",
    "fitNote": "Supporting fit; customer-gated and product-specific.",
    "verifiedOn": "2026-11-21"
  },
  "t08_ttd_edge_data_driven_planning": {
    "provider": "The Trade Desk Edge Academy",
    "title": "The Trade Desk Edge Academy Certified: Data-Driven Planning",
    "type": "professional_certification",
    "label": "Vendor certification",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "The Trade Desk's certification covers first-party audience modeling, omnichannel strategy mapping, metrics and KPI development. Credly describes five hours of coursework followed by a 25-question multiple-choice certification exam.",
    "duration": "Approximately five hours of coursework plus a 25-question exam.",
    "cost": "Edge Academy describes its courses and certifications as free; confirm current account terms.",
    "eligibility": "Complete the Edge Academy coursework and pass its final exam; the award is issued as a Credly badge.",
    "validity": "No expiry stated on the Credly badge page.",
    "regional": "The Academy is online; Indonesia access and course language should be confirmed in the learner account.",
    "url": "https://www.credly.com/org/the-trade-desk-inc/badge/the-trade-desk-edge-academy-certified-data-driven-planning",
    "sourceUrl": "https://www.credly.com/org/the-trade-desk-inc/badge/the-trade-desk-edge-academy-certified-data-driven-planning",
    "award": "The Trade Desk Edge Academy Certified: Data-Driven Planning certification badge issued through Credly after coursework and exam completion.",
    "scope": "The Trade Desk's programmatic planning context; it is not a general measurement or cross-platform media-planning credential.",
    "fitNote": "Partial/supporting fit for data-driven media planning; see placement dispositions.",
    "verifiedOn": "2026-11-21"
  },
  "t10_coursera_google_data_analytics": {
    "provider": "Google Career Certificates / Coursera",
    "title": "Google Data Analytics Professional Certificate",
    "type": "course_completion_certificate",
    "label": "Professional certificate program",
    "tagClass": "t-completion",
    "paidExam": false,
    "description": "Google's multi-course Data Analytics Certificate teaches spreadsheets, SQL, Python, Tableau, data preparation, analysis and communication. It is a subscription-based course certificate program, not a proctored professional certification exam.",
    "duration": "Eight courses; Google estimates roughly 240 hours total, commonly three to six months depending on study pace.",
    "cost": "Coursera subscription. Google lists USD 49 per month after a seven-day trial in the US and Canada; local price varies by country and must be checked on Coursera. Audit access does not include the certificate.",
    "eligibility": "Enroll on Coursera and complete the required courses and assessments; no prior degree or experience is required.",
    "validity": "No expiry stated for the course certificate.",
    "regional": "The program is online; course language, Coursera price and subscription availability from Indonesia must be checked at enrolment.",
    "url": "https://grow.google/certificates/data-analytics/",
    "sourceUrl": "https://grow.google/certificates/data-analytics/",
    "award": "Google Data Analytics Professional Certificate after the Coursera program requirements are met; not an exam-based professional certification.",
    "scope": "Broad entry-level data analytics course; supplementary to the chapter's SQL practice and not a substitute for marketing measurement or experimentation expertise.",
    "fitNote": "Supporting fit; paid subscription and chapter coverage is broader than the mapped SQL objective.",
    "verifiedOn": "2026-11-21"
  },
  "t10_kaggle_intro_sql": {
    "provider": "Kaggle Learn",
    "title": "Intro to SQL — course-completion certificate",
    "type": "course_completion_certificate",
    "label": "Course-completion certificate",
    "tagClass": "t-completion",
    "paidExam": false,
    "description": "Kaggle Learn's introductory SQL course uses Google BigQuery and covers SELECT, filtering, grouping, ordering, common-table expressions and joins, with tutorial lessons and coding exercises.",
    "duration": "About three hours estimated.",
    "cost": "No cost according to Kaggle Learn; a Kaggle account is required to complete exercises.",
    "eligibility": "Complete course lessons and exercises under a Kaggle account; confirm the completion certificate is available in the learner profile.",
    "validity": "No expiry stated for a course-completion certificate.",
    "regional": "Online course with no country restriction stated; account access from Indonesia should be confirmed.",
    "url": "https://www.kaggle.com/learn/intro-to-sql",
    "sourceUrl": "https://www.kaggle.com/learn/intro-to-sql",
    "award": "Kaggle Learn course-completion certificate; not a professional certification.",
    "scope": "Introductory SQL for BigQuery; does not validate advanced analytics engineering or all T10 competencies.",
    "fitNote": "Direct fit for the SQL learning objective; completion is not an independent skills examination.",
    "verifiedOn": "2026-11-21"
  },
  "t11_hubspot_aeo_fundamentals": {
    "provider": "HubSpot Academy",
    "title": "AEO Fundamentals Certification",
    "type": "vendor_course_certification",
    "label": "Free course certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "HubSpot Academy course on search and answer-engine visibility, trust and E-E-A-T, keyword strategy, content structure, AI citation and measurement with Search Console and GA4.",
    "duration": "Seven lessons; approximately two hours and twenty minutes.",
    "cost": "Free certification course; HubSpot Academy account required.",
    "eligibility": "Complete the course and pass the HubSpot Academy certification assessment under the current course rules.",
    "validity": "No expiry stated on the public course page.",
    "regional": "Course page is in English and does not list Bahasa Indonesia; confirm account access from Indonesia.",
    "url": "https://academy.hubspot.com/courses/aeo-fundamentals-certification-en",
    "sourceUrl": "https://academy.hubspot.com/courses/aeo-fundamentals-certification-en",
    "award": "HubSpot Academy AEO Fundamentals course certification after course and assessment completion; not an independent SEO professional certification.",
    "scope": "AEO fundamentals and HubSpot-described search visibility; it does not establish ranking or AI-citation outcomes for a learner's site.",
    "fitNote": "Direct fit for AEO fundamentals; complement with current search-engine primary documentation.",
    "verifiedOn": "2026-11-21"
  },
  "t11_semrush_technical_seo": {
    "provider": "Semrush Academy",
    "title": "Technical SEO and AI Search Essentials with Semrush",
    "type": "vendor_course_certification",
    "label": "Vendor-issued course certificate",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Semrush Academy's current technical SEO course covers site architecture, crawlability, sitemaps, structured data, Core Web Vitals, mobile optimization and AI-search essentials. Semrush states learners can earn its course certificate.",
    "duration": "Self-paced; the public page does not state total course duration.",
    "cost": "Enroll for free according to Semrush Academy; sign-in may be required.",
    "eligibility": "Complete the course and meet the current Semrush Academy certificate requirements.",
    "validity": "No expiry stated on the public course page.",
    "regional": "Course is published in English; confirm sign-in and availability from Indonesia.",
    "url": "https://www.semrush.com/academy/courses/techincal-seo-and-ai-search-essentials-with-semrush/",
    "sourceUrl": "https://www.semrush.com/academy/courses/techincal-seo-and-ai-search-essentials-with-semrush/",
    "award": "Semrush Academy course certificate after course requirements are completed; not an independent professional SEO certification.",
    "scope": "Vendor course on technical SEO and AI-search tooling; it does not validate advanced SEO strategy or guarantee search visibility.",
    "fitNote": "Current destination for both T11 technical SEO and AI-search course proposals; former URL redirects here, so only one route is maintained.",
    "verifiedOn": "2026-11-21"
  },
  "t12_trailhead_data360": {
    "provider": "Salesforce Trailhead",
    "title": "Unlock Your Data with Data 360 — Trailhead badges",
    "type": "course_completion_credential",
    "label": "Trailhead course badges",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "The Trailhead Data 360 trail includes module badges on data modeling, identity, segmentation, insights and activation. Some hands-on challenges require a special Data 360 org; the trail notes that some content is English-only.",
    "duration": "Approximately nine hours and forty-six minutes for the full trail; individual modules can be completed separately.",
    "cost": "Trailhead learning is free; a special Data 360 org is required for some hands-on challenges and may have time limits.",
    "eligibility": "Create or sign in to a Trailhead account and complete the selected badge modules; follow the current instructions for special hands-on orgs.",
    "validity": "No expiry stated for Trailhead module badges.",
    "regional": "Some trail content is English-only; check Data 360 org access and account availability from Indonesia.",
    "url": "https://trailhead.salesforce.com/content/learn/trails/unlock-your-data-with-data-cloud",
    "sourceUrl": "https://trailhead.salesforce.com/content/learn/trails/unlock-your-data-with-data-cloud",
    "award": "Trailhead module badges for completed units; this trail is preparation material and does not itself confer Salesforce Certified Data 360 Consultant status.",
    "scope": "Salesforce Data 360 product learning; it does not validate platform-neutral customer-data architecture or lifecycle strategy.",
    "fitNote": "Direct product-learning fit; award is a Trailhead badge, not a professional certification.",
    "verifiedOn": "2026-11-21"
  },
  "t14_meltwater_influencer_cert_1": {
    "provider": "Meltwater Academy",
    "title": "Influencer Marketing Certification I",
    "type": "vendor_course_certification",
    "label": "Vendor-issued course certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Free Meltwater Academy industry course covering influencer marketing, campaign development, creator identification and evaluation, relationships, contracts and disclosure, briefing, execution and measurement, with a certification assessment.",
    "duration": "36 lessons and about one hour of video content; self-paced.",
    "cost": "Free course according to Meltwater Academy; account may be required.",
    "eligibility": "Complete the course and pass its certification assessment under current issuer terms.",
    "validity": "No expiry stated on the public course page.",
    "regional": "English-language course; confirm account access from Indonesia.",
    "url": "https://academy.meltwater.com/courses/Social-influencer-marketing-certification",
    "sourceUrl": "https://academy.meltwater.com/courses/Social-influencer-marketing-certification",
    "award": "Meltwater Academy Influencer Marketing course certification after completing the required assessment; not an independent professional certification.",
    "scope": "Industry-level introductory influencer marketing content; does not certify each platform or prove live campaign outcomes.",
    "fitNote": "Direct fit for influencer ecosystem foundations; supporting fit for creator-relationship practice.",
    "verifiedOn": "2026-11-21"
  },
  "t14_meltwater_klear_foundations": {
    "provider": "Meltwater Academy",
    "title": "Influencer Marketing with Meltwater (Klear): Foundations",
    "type": "vendor_course_certification",
    "label": "Product course certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Free product course on Klear covering account setup, influencer recruitment, vetting, campaign management and performance measurement, with a knowledge test and course exam/certification section.",
    "duration": "28 lessons; about one hour of video content.",
    "cost": "Free course; Klear product/customer access may be needed for some demonstrations.",
    "eligibility": "Complete the learning path and its exam under the current Meltwater Academy terms.",
    "validity": "No expiry stated on the public course page.",
    "regional": "English-language course; verify Klear account access from Indonesia.",
    "url": "https://academy.meltwater.com/courses/influencer-marketing-with-meltwater-foundations",
    "sourceUrl": "https://academy.meltwater.com/courses/influencer-marketing-with-meltwater-foundations",
    "award": "Meltwater Academy Klear product certification after required course and assessment; not a general influencer-marketing professional certification.",
    "scope": "Klear product workflows for influencer discovery and management; does not validate platform-neutral research methods or creator fraud detection.",
    "fitNote": "Direct product-learning fit for creator discovery; platform-specific.",
    "verifiedOn": "2026-11-21"
  },
  "t14_meta_creator_marketing": {
    "provider": "Meta Blueprint",
    "title": "Improving business results through effective creator partnerships",
    "type": "course_completion_credential",
    "label": "Course-level learning credential",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Meta Blueprint course about aligning creator partnerships with advertiser goals, creative diversification, Reels content and Meta Partnership Ads. The issuer marks it Credential for Completion.",
    "duration": "21 minutes; intermediate level.",
    "cost": "Meta Blueprint describes its online courses as free; account and activity availability should be confirmed.",
    "eligibility": "Complete the course activity under the current Meta Blueprint requirements.",
    "validity": "No expiry stated for the course-completion credential.",
    "regional": "Meta Blueprint lists Bahasa Indonesia as a platform locale; confirm course language and access from Indonesia.",
    "url": "https://www.facebookblueprint.com/student/path/253169-creator-marketing-course",
    "sourceUrl": "https://www.facebookblueprint.com/student/path/253169-creator-marketing-course",
    "award": "Meta Blueprint credential for course completion; not a Meta professional certification.",
    "scope": "Meta creator partnerships and Partnership Ads only; does not validate contracts, compensation, creator selection or cross-platform campaign management.",
    "fitNote": "Partial fit for creator types and partnership context; complete the chapter's independent KOL/KOC work as well.",
    "verifiedOn": "2026-11-21"
  },
  "t14_pxa_creator_product_training": {
    "provider": "impact.com Partnerships Experience Academy",
    "title": "impact.com Creator Product Training Fundamentals Certification Path",
    "type": "vendor_course_certification",
    "label": "Vendor product-training certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Free PXA certification path for the impact.com Creator platform, covering creator discovery, campaign scope, influencer campaign management and content reuse, followed by a certification exam.",
    "duration": "One listed course and a 30-minute certification exam; the issuer page describes a 45-minute path.",
    "cost": "Free path according to impact.com; PXA account required.",
    "eligibility": "Complete the path and pass the impact.com Creator Product Training Fundamentals Certification Exam.",
    "validity": "No expiry stated on the public path page.",
    "regional": "Online path; language and Indonesia account availability should be confirmed at enrolment.",
    "url": "https://impact.com/pxa/courses/impact-com-creator-product-training-fundamentals-certification-path/",
    "sourceUrl": "https://impact.com/pxa/courses/impact-com-creator-product-training-fundamentals-certification-path/",
    "award": "Downloadable impact.com Creator product-training certificate after passing the exam; not an independent creator-marketing professional certification.",
    "scope": "Product-specific creator discovery and campaign management; does not replace broader influencer strategy, contracts or platform-neutral practice.",
    "fitNote": "Direct product-workflow fit for creator campaign planning; vendor-specific.",
    "verifiedOn": "2026-11-21"
  },
  "t14_pxa_protect_monitor": {
    "provider": "impact.com Partnerships Experience Academy",
    "title": "Affiliate & Partnerships Industry — Expert Certification Path",
    "type": "vendor_course_certification",
    "label": "Industry training certification path",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Free advanced PXA path with six affiliate and partnerships courses and a 50-minute exam. The Protect & Monitor component addresses suspicious activity, fraud, tracking and program monitoring.",
    "duration": "Six courses and a 50-minute exam; about three and a half hours in total.",
    "cost": "Free path according to impact.com; PXA account required.",
    "eligibility": "Complete the path and pass the Affiliate & Partnerships Industry Expert certification exam.",
    "validity": "No expiry stated on the public path page.",
    "regional": "Online path; language and Indonesia account availability should be confirmed at enrolment.",
    "url": "https://impact.com/pxa/learning-path/affiliate-partnerships-industry-expert-certification-path/",
    "sourceUrl": "https://impact.com/pxa/learning-path/affiliate-partnerships-industry-expert-certification-path/",
    "award": "impact.com PXA Affiliate & Partnerships Industry Expert certificate after passing the exam; not a creator fraud-screening professional certification.",
    "scope": "Affiliate program protection, monitoring and partnership operations; only partial support for creator vetting and audience-fraud screening.",
    "fitNote": "Partial supporting fit; use dedicated creator vetting evidence and the chapter deliverable as primary proof.",
    "verifiedOn": "2026-11-21"
  },
  "meta_v10_ads_campaign": {
    "provider": "Meta Blueprint",
    "title": "Get started with advertising on Facebook and Instagram",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Learn how Facebook/Instagram ads work and create ads using a Facebook Page, Instagram account and Meta Ads Manager.",
    "duration": "15 minutes · Beginner",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required Meta Blueprint lessons/activities while signed in; verify the award in the learner account.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "Public page checked in English; individual course language and Indonesia account/award access need confirmation in the learner account.",
    "url": "https://www.facebookblueprint.com/student/path/211543-meta-advertising-course",
    "sourceUrl": "https://www.facebookblueprint.com/student/path/211543-meta-advertising-course",
    "award": "Meta Blueprint Credential For Completion for this course activity; not a professional certification exam.",
    "scope": "Platform-specific entry-level Meta Ads and account setup.",
    "verifiedOn": "2026-11-22"
  },
  "meta_v10_campaign_objectives": {
    "provider": "Meta Blueprint",
    "title": "Selecting campaign objectives",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Choose a Meta Ads Manager campaign objective and align it with conversion location and performance goal.",
    "duration": "16 minutes · Beginner",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required course lessons/activities while signed in; verify the award in the learner account.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "Public page checked in English; individual course language and Indonesia account/award access need confirmation.",
    "url": "https://www.facebookblueprint.com/student/path/219699-selecting-objectives-course",
    "sourceUrl": "https://www.facebookblueprint.com/student/path/219699-selecting-objectives-course",
    "award": "Meta Blueprint Credential For Completion for this course activity; not a professional certification exam.",
    "scope": "Platform-specific campaign objective and conversion-location learning.",
    "verifiedOn": "2026-11-22"
  },
  "meta_v10_audience_strategy": {
    "provider": "Meta Blueprint",
    "title": "Defining your ad audience",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Create new, custom and lookalike audiences; use detailed targeting, data sources and Meta Advantage+ audience.",
    "duration": "31 minutes · Beginner",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required course lessons/activities while signed in; verify the award in the learner account.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "Public page checked in English; individual course language and Indonesia account/award access need confirmation.",
    "url": "https://www.facebookblueprint.com/student/path/219694-define-audiences",
    "sourceUrl": "https://www.facebookblueprint.com/student/path/219694-define-audiences",
    "award": "Meta Blueprint Credential For Completion for this course activity; not a professional certification exam.",
    "scope": "Meta audience targeting and segmentation; not platform-neutral consumer research certification.",
    "verifiedOn": "2026-11-22"
  },
  "meta_v10_buying_types": {
    "provider": "Meta Blueprint",
    "title": "Determining the best buying type and bid strategy",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Understand auction and reservation buying types and bid strategies across Meta technologies.",
    "duration": "28 minutes · Intermediate",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required course lessons/activities while signed in; verify the award in the learner account.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "Public page checked in English; individual course language and Indonesia account/award access need confirmation.",
    "url": "https://www.facebookblueprint.com/student/path/211562-ad-types-course",
    "sourceUrl": "https://www.facebookblueprint.com/student/path/211562-ad-types-course",
    "award": "Meta Blueprint Credential For Completion for this course activity; not a professional certification exam.",
    "scope": "Meta-specific buying types and bid strategy.",
    "verifiedOn": "2026-11-22"
  },
  "meta_v10_creative_best_practices": {
    "provider": "Meta Blueprint",
    "title": "Exploring best practices for ad creative",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Optimize ad placements, formats and creative across Meta technologies using Ads Manager.",
    "duration": "20 minutes · Beginner",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required course lessons/activities while signed in; verify the award in the learner account.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "Public page checked in English; individual course language and Indonesia account/award access need confirmation.",
    "url": "https://www.facebookblueprint.com/student/path/211557-exploring-best-practices-ad-creative",
    "sourceUrl": "https://www.facebookblueprint.com/student/path/211557-exploring-best-practices-ad-creative",
    "award": "Meta Blueprint Credential For Completion for this course activity; not a professional certification exam.",
    "scope": "Meta creative formats, placements and asset optimization.",
    "verifiedOn": "2026-11-22"
  },
  "meta_v10_pixel_capi": {
    "provider": "Meta Blueprint",
    "title": "Set up the Meta Pixel and Meta Conversions API for ad campaigns",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Use Meta Pixel and Conversions API together to understand website customer actions and improve advertising measurement.",
    "duration": "10 minutes · Beginner",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required course lessons/activities while signed in; verify the award in the learner account.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "Public page checked in English; individual course language and Indonesia account/award access need confirmation.",
    "url": "https://www.facebookblueprint.com/student/path/211547-meta-pixel-conversions-api-course",
    "sourceUrl": "https://www.facebookblueprint.com/student/path/211547-meta-pixel-conversions-api-course",
    "award": "Meta Blueprint Credential For Completion for this course activity; not a professional certification exam.",
    "scope": "Meta-specific Pixel/CAPI setup and measurement; not general analytics-engineering certification.",
    "verifiedOn": "2026-11-22"
  },
  "meta_v10_campaign_measurement": {
    "provider": "Meta Blueprint",
    "title": "Analyzing campaign reporting results and measurement strategies",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Analyze campaign reporting, business-aligned metrics, experiments, incrementality and measurement methodologies.",
    "duration": "15 minutes · Intermediate",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required course lessons/activities while signed in; verify the award in the learner account.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "Public page checked in English; individual course language and Indonesia account/award access need confirmation.",
    "url": "https://www.facebookblueprint.com/student/path/211564-ads-campaign-measure-test-course",
    "sourceUrl": "https://www.facebookblueprint.com/student/path/211564-ads-campaign-measure-test-course",
    "award": "Meta Blueprint Credential For Completion for this course activity; not a professional certification exam.",
    "scope": "Meta campaign reporting and measurement literacy; applied statistical/engineering competence requires practice.",
    "verifiedOn": "2026-11-22"
  },
  "meta_v10_privacy_brand_safety": {
    "provider": "Meta Blueprint",
    "title": "Privacy controls and brand safety",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Understand advertising data privacy, business integrity, ad review and brand-safety controls across Meta technologies.",
    "duration": "14 minutes · Intermediate",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required course lessons/activities while signed in; verify the award in the learner account.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "Public page checked in English; individual course language and Indonesia account/award access need confirmation.",
    "url": "https://www.facebookblueprint.com/student/path/211555-privacy-brand-settings",
    "sourceUrl": "https://www.facebookblueprint.com/student/path/211555-privacy-brand-settings",
    "award": "Meta Blueprint Credential For Completion for this course activity; not a professional certification exam.",
    "scope": "Meta-specific privacy/brand-safety controls; not a substitute for Indonesian law or cross-platform governance.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_basics_achievement": {
    "provider": "TikTok Academy",
    "title": "TikTok basics",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Set up accounts, make content and get started with TikTok ads. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/2958026",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/2958026",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Foundation for TikTok account, platform and ad setup.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_build_brand_achievement": {
    "provider": "TikTok Academy",
    "title": "Build your brand",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Guide audiences from awareness to consideration and build brand favorability on TikTok. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/2958027",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/2958027",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Platform-specific awareness, consideration and brand-building.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_website_sales_achievement": {
    "provider": "TikTok Academy",
    "title": "Drive website sales",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Bring visitors to a website and drive product sales. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/2958028",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/2958028",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Platform-specific website conversion and sales campaigns.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_promote_app_achievement": {
    "provider": "TikTok Academy",
    "title": "Promote your app",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Drive installs and retention for mobile applications. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/2958029",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/2958029",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Platform-specific app-promotion objectives and campaigns.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_lead_generation_achievement": {
    "provider": "TikTok Academy",
    "title": "Generate and message leads",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Generate leads and message prospective customers on TikTok. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/2958030",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/2958030",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Platform-specific lead-generation and messaging objectives.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_shop_achievement": {
    "provider": "TikTok Academy",
    "title": "Promote your TikTok Shop",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Learn TikTok Shop benefits and promote products to drive sales. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/3544207",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/3544207",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "TikTok Shop and social-commerce activation.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_search_achievement": {
    "provider": "TikTok Academy",
    "title": "Get discovered with Search",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Leverage TikTok Search Ads to reach high-intent audiences. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/3818244",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/3818244",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "TikTok Search Ads and high-intent discovery.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_auto_ads_achievement": {
    "provider": "TikTok Academy",
    "title": "Drive vehicle sales with Auto Ads",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Set up a dealership to promote its vehicle inventory on TikTok. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/4855051",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/4855051",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Narrow automotive vertical use case; not a general paid-social course.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_advanced_shop_achievement": {
    "provider": "TikTok Academy",
    "title": "Advance your TikTok Shop strategy",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Use advanced strategies to optimize TikTok Shop campaigns and grow sales. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/5967932",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/5967932",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Advanced TikTok Shop campaign optimization.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_advanced_leadgen_achievement": {
    "provider": "TikTok Academy",
    "title": "Advance your Lead Gen Strategy",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Use advanced strategies for higher-quality leads and improve TikTok campaign performance. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/5967933",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/5967933",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Advanced TikTok lead quality and optimization.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_advanced_app_achievement": {
    "provider": "TikTok Academy",
    "title": "Advance your App Promotion Strategy",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Improve app signals, optimization paths, Smart+ App Campaigns and creative variation. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/5967934",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/5967934",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Advanced app-promotion and optimization; product/account eligibility may vary.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_creative_production_achievement": {
    "provider": "TikTok Academy",
    "title": "Creative production",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Shoot and edit TikTok videos and work with creators/agencies to produce videos. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/5699142",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/5699142",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Short-form video production and creator/agency workflows.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_creative_iteration_achievement": {
    "provider": "TikTok Academy",
    "title": "Creative iteration",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Create TikTok creative variations to test performance and extend creative investment. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/5699143",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/5699143",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "Creative testing, iteration and learning.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_ai_solutions_achievement": {
    "provider": "TikTok Academy",
    "title": "AI Solutions",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Learn TikTok-specific AI advertising solutions and product capabilities. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/5910597",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/5910597",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "TikTok product-specific AI advertising solutions; not a general AI/ML credential.",
    "verifiedOn": "2026-11-22"
  },
  "tiktok_brand_safety_achievement": {
    "provider": "TikTok Academy",
    "title": "Keep your brand safe and authentic",
    "type": "course_completion_credential",
    "label": "Credential for Completion",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Learn TikTok brand safety, authenticity and safe advertising practices. TikTok Academy lists this as a credential-bearing learning path.",
    "duration": "Self-paced; exact duration is not stated on the public learning-path page.",
    "cost": "Issuer presents this as free online learning; no separate course or professional-exam fee is stated on the public page. Confirm account enrolment and award visibility before starting.",
    "eligibility": "Complete the required courses in the learning path and pass the associated assessment, as stated by TikTok Academy's Courses catalogue.",
    "validity": "No expiry or renewal period is stated on the public course/path page checked on 22 November 2026.",
    "regional": "TikTok Academy provides a Bahasa Indonesia locale. Individual path language can differ; Indonesia account enrolment and award issuance must be confirmed inside a learner account and have not been locally account-tested.",
    "url": "https://partners.tiktokacademy.com/student/collection/2079614/path/5946266",
    "sourceUrl": "https://partners.tiktokacademy.com/student/collection/2079614/path/5946266",
    "award": "Official TikTok Academy Achievement / Credential For Completion after required learning-path courses and associated assessment; not TikTok Media Buying Professional Certification.",
    "scope": "TikTok-specific brand integrity and safety controls.",
    "verifiedOn": "2026-11-22"
  },
  "meta_sba_ads_manager_skilling_certificate": {
    "provider": "Meta Blueprint · Meta Small Business Academy",
    "title": "Meta Ads Manager learning — Meta Small Business Academy skilling certificate",
    "type": "skilling_certificate",
    "label": "Skilling Certificate",
    "tagClass": "t-coursecert",
    "paidExam": null,
    "description": "Six recommended learning modules cover campaign objectives, audiences, placements/budget/schedule, creative, campaign analysis and Meta Advertising Standards. A separate Meta Ads Manager learning skill test awards the Meta Small Business Academy skilling certificate.",
    "duration": "Six courses, approximately 90 minutes total based on the issuer's listed 15m + 15m + 15m + 20m + 10m + 15m; additional assessment time is not stated.",
    "cost": "The public Meta page does not state a separate fee for the skill test or certificate. Do not promise free issuance until the signed-in learner account confirms the test and award are available at no cost.",
    "eligibility": "Take the separate Meta Ads Manager learning skill test. Meta explicitly states that completing the six recommended courses is encouraged but is not required before beginning the test.",
    "validity": "No expiry or renewal period is stated on the public collection page.",
    "regional": "Public Meta Blueprint collection page checked in English. Indonesia account access, test availability, language and award issuance need confirmation in the signed-in learner account.",
    "url": "https://www.facebookblueprint.com/student/collection/507005-meta-ads-manager-learning",
    "sourceUrl": "https://www.facebookblueprint.com/student/collection/507005-meta-ads-manager-learning",
    "award": "Meta Small Business Academy skilling certificate for Ads Manager, awarded after passing the separate learning skill test. This is not a Meta Blueprint course Credential For Completion and not a Meta Certified Professional exam.",
    "scope": "Direct platform-specific Ads Manager fundamentals and knowledge check; it does not establish live campaign experience or independently validate campaign performance.",
    "verifiedOn": "2026-11-22"
  },

  "google_ads_display": {
    "provider": "Google Skillshop",
    "title": "Google Ads Display Certification",
    "type": "vendor_product_certification",
    "label": "Google Ads product certification · Foundational",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Google’s standard Skillshop foundational Display product-area certification. The issuer’s separate virtually proctored Professional Google Ads Certifications are a different, limited-access award and are not claimed here.",
    "duration": "Assessment format and duration are shown in the current Skillshop assessment.",
    "cost": "Google states that foundational Google Ads certifications and Skillshop learning are free; confirm current signed-in account and assessment availability.",
    "eligibility": "Complete the Google Ads Display learning path and pass its assessment through Skillshop.",
    "validity": "Follow the validity and renewal conditions shown in the learner's Skillshop certification record.",
    "regional": "Google Ads certifications are available in Bahasa Indonesia among the supported languages. Confirm account and assessment access from Indonesia.",
    "url": "https://skillshop.withgoogle.com/googleads/",
    "sourceUrl": "https://support.google.com/google-ads/answer/9702955?hl=id",
    "award": "Google Ads Display product certification after passing the standard Skillshop foundational assessment; not the separate proctored Professional Google Ads Certification.",
    "scope": "Google Display product proficiency only; it does not certify all programmatic DSPs or cross-channel media planning.",
    "fitNote": "Direct Google Ads channel credential for agency media-planning and biddable work.",
    "verifiedOn": "2026-11-22"
  },
  "google_ads_measurement": {
    "provider": "Google Skillshop",
    "title": "Google Ads Measurement Certification",
    "type": "vendor_product_certification",
    "label": "Google Ads product certification · Foundational",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Google’s standard Skillshop foundational Measurement product-area certification. The issuer’s separate virtually proctored Professional Google Ads Certifications are a different, limited-access award and are not claimed here.",
    "duration": "Assessment format and duration are shown in the current Skillshop assessment.",
    "cost": "Google states that foundational Google Ads certifications and Skillshop learning are free; confirm current signed-in account and assessment availability.",
    "eligibility": "Complete the Google Ads Measurement learning path and pass its assessment through Skillshop.",
    "validity": "Follow the validity and renewal conditions shown in the learner's Skillshop certification record.",
    "regional": "Google Ads certifications are available in Bahasa Indonesia among the supported languages. Confirm account and assessment access from Indonesia.",
    "url": "https://skillshop.withgoogle.com/googleads/",
    "sourceUrl": "https://support.google.com/google-ads/answer/9702955?hl=id",
    "award": "Google Ads Measurement product certification after passing the standard Skillshop foundational assessment; not the separate proctored Professional Google Ads Certification.",
    "scope": "Google Ads measurement product-area proficiency; it is not a general analytics-engineering or independent incrementality qualification.",
    "fitNote": "Direct platform credential for performance measurement; pair with GA4, GTM and applied measurement work.",
    "verifiedOn": "2026-11-22"
  },
  "google_ads_video": {
    "provider": "Google Skillshop",
    "title": "Google Ads Video Certification",
    "type": "vendor_product_certification",
    "label": "Google Ads product certification · Foundational",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Google’s standard Skillshop foundational Video product-area certification. The issuer’s separate virtually proctored Professional Google Ads Certifications are a different, limited-access award and are not claimed here.",
    "duration": "Assessment format and duration are shown in the current Skillshop assessment.",
    "cost": "Google states that foundational Google Ads certifications and Skillshop learning are free; confirm current signed-in account and assessment availability.",
    "eligibility": "Complete the Google Ads Video learning path and pass its assessment through Skillshop.",
    "validity": "Follow the validity and renewal conditions shown in the learner's Skillshop certification record.",
    "regional": "Google Ads certifications are available in Bahasa Indonesia among the supported languages. Confirm account and assessment access from Indonesia.",
    "url": "https://skillshop.withgoogle.com/googleads/",
    "sourceUrl": "https://support.google.com/google-ads/answer/9702955?hl=id",
    "award": "Google Ads Video product certification after passing the standard Skillshop foundational assessment; not the separate proctored Professional Google Ads Certification.",
    "scope": "Google/YouTube video advertising only; not a general video-production or all-platform video-planning credential.",
    "fitNote": "Platform credential for agency video and digital-media activation.",
    "verifiedOn": "2026-11-22"
  },
  "google_ads_shopping": {
    "provider": "Google Skillshop",
    "title": "Google Shopping Ads Certification",
    "type": "vendor_product_certification",
    "label": "Google Ads product certification · Foundational",
    "tagClass": "t-credential",
    "paidExam": false,
    "description": "Google’s standard Skillshop foundational Shopping product-area certification. The issuer’s separate virtually proctored Professional Google Ads Certifications are a different, limited-access award and are not claimed here.",
    "duration": "Current Shopping Ads assessment page specifies its own question count, time limit and passing score; verify these at enrolment.",
    "cost": "Google states that foundational Google Ads certifications and Skillshop learning are free; confirm current signed-in account and assessment availability.",
    "eligibility": "Complete the Shopping Ads learning path and pass its assessment through Skillshop.",
    "validity": "Follow the validity and renewal conditions shown in the learner's Skillshop certification record.",
    "regional": "Google Shopping ads and Merchant Center support Indonesia. Confirm product, feed, account and assessment eligibility for the learner's business context.",
    "url": "https://skillshop.withgoogle.com/googleads/",
    "sourceUrl": "https://support.google.com/google-ads/answer/9702955?hl=id",
    "award": "Google Ads Shopping product certification after passing the standard Skillshop foundational assessment; not the separate proctored Professional Google Ads Certification.",
    "scope": "Google Shopping product-feed advertising; it does not certify Shopee, Tokopedia, Lazada or TikTok Shop campaign operations.",
    "fitNote": "Relevant adjacent evidence for Indonesian e-commerce performance roles that explicitly request Google Shopping Ads.",
    "verifiedOn": "2026-11-22"
  },
  "ahrefs_seo_certification": {
    "provider": "Ahrefs Academy",
    "title": "Ahrefs Certification",
    "type": "vendor_course_certification",
    "label": "Tool-vendor certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Official tool-vendor certification validating Ahrefs workflows, reports and platform knowledge. The issuer lists 67 questions, a one-hour exam and a 75% passing score.",
    "duration": "67 questions; 1 hour; 75% pass score; three attempts, then a 15-day wait before retry.",
    "cost": "Free certification exam; a paid or non-paid Ahrefs account can be used.",
    "eligibility": "Create or use an Ahrefs account and pass the issuer's certification exam.",
    "validity": "Shareable certificate valid for one year.",
    "regional": "The issuer provides an Indonesian-language certification page. Account and exam access from Indonesia should be confirmed before enrolment.",
    "url": "https://ahrefs.com/id/certification",
    "sourceUrl": "https://ahrefs.com/certification",
    "award": "Official Ahrefs shareable certification after passing the exam; this is a tool-vendor credential, not an independent SEO professional licence.",
    "scope": "Ahrefs tool use, workflows and reports; pair with Search Console, technical SEO practice and measurable portfolio evidence.",
    "fitNote": "Directly relevant to Indonesian SEO job requirements that name Ahrefs.",
    "verifiedOn": "2026-11-22"
  },
  "moengage_growth_marketer": {
    "provider": "MoEngage Academy",
    "title": "MoEngage Growth Marketer — Credential for Completion",
    "type": "course_completion_credential",
    "label": "Course-completion credential",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Issuer learning path for omnichannel engagement, behavioral segmentation, lifecycle automation, email, push, SMS, WhatsApp, in-app campaigns, flows and campaign optimization.",
    "duration": "Approximately 1.9 hours of published learning content.",
    "cost": "The public path page does not state a separate fee. Confirm sign-in, access and award issuance in the learner account; do not assume a paid subscription is required or that the credential is free until checked.",
    "eligibility": "Complete the MoEngage Growth Marketer path and meet the issuer's completion requirements.",
    "validity": "No expiry period is stated on the public path page.",
    "regional": "The public academy path is accessible as an issuer listing; Indonesian account access, language and completion-award issuance still require learner-account verification.",
    "url": "https://academy.moengage.com/student/path/3328685-moengage-growth-marketer",
    "sourceUrl": "https://academy.moengage.com/student/path/3328685-moengage-growth-marketer",
    "award": "MoEngage Growth Marketer Credential for Completion; not a cross-platform CRM certification.",
    "scope": "MoEngage-specific lifecycle marketing and engagement workflows; the role skills transfer, but the credential is vendor-specific.",
    "fitNote": "Mapped because Indonesian CRM/lifecycle vacancies explicitly name MoEngage.",
    "verifiedOn": "2026-11-22"
  },
  "moengage_analytics_expert": {
    "provider": "MoEngage Academy",
    "title": "MoEngage Analytics Expert — Credential for Completion",
    "type": "course_completion_credential",
    "label": "Course-completion credential",
    "tagClass": "t-coursecred",
    "paidExam": false,
    "description": "Issuer learning path for event-based behavioral data, funnels, cohorts, retention, path analysis and custom reporting.",
    "duration": "Approximately 1.2 hours of published learning content.",
    "cost": "The public path page does not state a separate fee. Confirm sign-in, access and award issuance in the learner account.",
    "eligibility": "Complete the MoEngage Analytics Expert path and meet the issuer's completion requirements.",
    "validity": "No expiry period is stated on the public path page.",
    "regional": "The public academy path is accessible as an issuer listing; Indonesian account access, language and completion-award issuance still require learner-account verification.",
    "url": "https://academy.moengage.com/student/path/3388299-moengage-analytics-expert",
    "sourceUrl": "https://academy.moengage.com/student/path/3388299-moengage-analytics-expert",
    "award": "MoEngage Analytics Expert Credential for Completion; not a neutral analytics or SQL certification.",
    "scope": "MoEngage-specific behavioral analytics, funnel and cohort workflows; general analysis capability still needs an independent work sample.",
    "fitNote": "Relevant to Indonesian CRM roles asking for cohort, funnel, lifecycle and behavioral analytics skills.",
    "verifiedOn": "2026-11-22"
  },
  "braze_digital_strategist": {
    "provider": "Braze Learning",
    "title": "Braze Certified Marketing Strategy Expert (formerly Digital Strategist)",
    "type": "professional_certification",
    "label": "Advanced vendor professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "Advanced Braze-issued certification for planning and optimizing customer engagement campaign strategy, understanding the Braze technical stack, and designing personas and lifecycle journeys. The issuer renamed Digital Strategist to Marketing Strategy Expert; the prior credential remains valid.",
    "duration": "50 questions (multiple choice, list building and matching); 90 minutes; 72% passing score; proctored assessment.",
    "cost": "USD 150 initial exam fee plus applicable local taxes. Failed attempts require the full exam fee again; confirm Indonesia checkout currency and taxes.",
    "eligibility": "Prepare through the free 14-course Braze Digital Strategist learning path and register for the professional exam. Completion of the learning path alone does not issue this certification.",
    "validity": "Three years from passing; follow issuer renewal terms.",
    "regional": "Braze certification is proctored through its exam provider. Current issuer materials list Japanese as an additional exam language; Bahasa Indonesia is not listed. Confirm exam language, payment and proctor availability from Indonesia.",
    "url": "https://braze-dev.skilljar.com/page/certification",
    "sourceUrl": "https://www.credly.com/org/braze/badge/marketing-strategy-expert",
    "award": "Braze Certified Marketing Strategy Expert, issued by Braze after passing the paid professional exam.",
    "scope": "Advanced Braze-specific campaign and lifecycle strategy; not a platform-neutral CRM qualification.",
    "fitNote": "Optional advanced route because Indonesian CRM/lifecycle job descriptions explicitly name Braze; real campaign and lifecycle design evidence remains primary.",
    "verifiedOn": "2026-11-22"

  },
  "salesforce_mce_foundations": {
    "provider": "Salesforce Trailhead",
    "title": "Salesforce Certified Marketing Cloud Engagement Foundations",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "Entry-level professional exam for foundational Marketing Cloud Engagement knowledge, including marketing concepts, email tools, Journey Builder, data management, reporting and analytics.",
    "duration": "40 multiple-choice questions plus up to five unscored questions; 70 minutes; 65% passing score.",
    "cost": "USD 75 plus applicable local taxes; retake is free. Confirm local checkout price and currency in Indonesia.",
    "eligibility": "No prerequisite. Designed for candidates new to Salesforce Marketing Cloud Engagement, typically up to six months of experience.",
    "validity": "No maintenance requirement is currently stated in the public exam guide; verify the issuer's current maintenance policy.",
    "regional": "Exam delivery is proctored online or at a test centre. Indonesia scheduling, local tax and payment availability must be checked before booking.",
    "url": "https://trailhead.salesforce.com/credentials/marketingassociate",
    "sourceUrl": "https://help.salesforce.com/s/articleView?id=005298962&language=en_US&type=1",
    "award": "Salesforce Certified Marketing Cloud Engagement Foundations professional certification after passing the proctored exam.",
    "scope": "Salesforce Marketing Cloud Engagement foundations; the exam does not validate advanced automation configuration, SMS/push channel execution, SQL or AMPscript.",
    "fitNote": "Entry-level platform credential for local CRM/lifecycle roles that explicitly list Salesforce Marketing Cloud.",
    "verifiedOn": "2026-11-22"
  },
  "salesforce_mce_email_specialist": {
    "provider": "Salesforce Trailhead",
    "title": "Salesforce Certified Marketing Cloud Engagement Specialist",
    "type": "professional_certification",
    "label": "Professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "Professional certification for email marketing best practices, message design, subscriber and data management, and inbox delivery using Salesforce Marketing Cloud Engagement.",
    "duration": "Follow the current exam guide for format, duration and passing score.",
    "cost": "USD 200 plus applicable local taxes; retake USD 100. Confirm local checkout price and currency in Indonesia.",
    "eligibility": "Prepare with the official Trailhead learning path and satisfy current certification requirements; practical experience is recommended.",
    "validity": "Follow Salesforce's current annual maintenance requirements for active certifications.",
    "regional": "Exam is delivered through Salesforce's proctored exam system; Indonesia scheduling, local tax and payment availability must be checked before booking.",
    "url": "https://trailhead.salesforce.com/credentials/marketingcloudengagementspecialist",
    "sourceUrl": "https://help.salesforce.com/s/articleView?id=005298916&language=en_US&type=1",
    "award": "Salesforce Certified Marketing Cloud Engagement Specialist after passing the professional exam.",
    "scope": "Salesforce Marketing Cloud email-specialist capability; platform-specific and not a general CRM lifecycle certification.",
    "fitNote": "Advanced optional credential for email/CRM specialists; not a beginner requirement.",
    "verifiedOn": "2026-11-22"
  },
  "meltwater_influencer_cert_2": {
    "provider": "Meltwater Academy",
    "title": "Influencer Marketing Certification II",
    "type": "industry_certification",
    "label": "Industry certification",
    "tagClass": "t-coursecert",
    "paidExam": false,
    "description": "Industry certification on influencer campaign design, selecting the right influencers and conversion-driving tactics; it builds on Influencer Marketing Certification I.",
    "duration": "Self-paced; total duration is not stated on the public collection page.",
    "cost": "Free according to the issuer's Influencer Marketing collection page.",
    "eligibility": "Complete Influencer Marketing Certification I knowledge and the Certification II path according to Meltwater Academy requirements.",
    "validity": "Expiry or renewal conditions are not stated on the public collection page.",
    "regional": "The course is listed in the global Meltwater Academy catalogue; Indonesia account access, language and certificate issuance should be confirmed at enrolment.",
    "url": "https://academy.meltwater.com/collections/Industry_Certification",
    "sourceUrl": "https://academy.meltwater.com/pages/Influencer%20Marketing",
    "award": "Meltwater Influencer Marketing Certification II; an issuer industry certification, not a regulated professional licence.",
    "scope": "Influencer selection, campaign design and conversion tactics; it does not replace local creator contracting, disclosure compliance or live campaign results.",
    "fitNote": "Direct supportive fit for Indonesian KOL/creator campaign roles.",
    "verifiedOn": "2026-11-22"

  },
  "braze_marketing_specialist": {
    "provider": "Braze Learning",
    "title": "Braze Certified Marketing Specialist (formerly Braze Certified Marketer)",
    "type": "professional_certification",
    "label": "Intermediate vendor professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "Intermediate Braze credential for planning, executing and reporting customer-marketing campaigns and Canvases, with channel mastery, personalization and experience orchestration.",
    "duration": "60 multiple-choice / multiple-select questions; 90 minutes; 69% passing score; proctored assessment.",
    "cost": "USD 100 initial exam fee plus applicable local taxes. Failed attempts require the full exam fee again; confirm Indonesia checkout currency and taxes.",
    "eligibility": "Prepare through the free Braze Marketer learning path (13 courses listed) and register for the certification exam. The free learning path is preparation, not a completion certificate.",
    "validity": "Three years from passing; follow issuer renewal terms.",
    "regional": "Braze materials list Japanese as an additional exam language for the former Marketer exam; Bahasa Indonesia is not listed. Confirm exam language, payment and proctor availability from Indonesia.",
    "url": "https://braze-dev.skilljar.com/page/certification",
    "sourceUrl": "https://www.credly.com/org/braze/badge/braze-certified-marketing-specialist",
    "award": "Braze Certified Marketing Specialist, issued by Braze after passing the paid proctored exam.",
    "scope": "Braze-specific campaign, Canvas, personalization and channel operation; it does not prove platform-neutral CRM strategy.",
    "fitNote": "Relevant optional assessment for Indonesian CRM roles naming Braze; supplement with a real lifecycle campaign build.",
    "verifiedOn": "2026-11-22"
  },
  "braze_practitioner": {
    "provider": "Braze Learning",
    "title": "Braze Certified Practitioner",
    "type": "professional_certification",
    "label": "Foundational vendor professional certification",
    "tagClass": "t-credential",
    "paidExam": true,
    "description": "Foundational Braze platform certification covering the Braze dashboard, data planning, segmentation, campaign and customer-journey fundamentals.",
    "duration": "30 multiple-choice / multiple-select questions; 60 minutes; 73% passing score; proctored assessment.",
    "cost": "USD 50 initial exam fee plus applicable local taxes. Failed attempts require the full exam fee again; confirm Indonesia checkout currency and taxes.",
    "eligibility": "Prepare through the free Braze Foundations six-course learning path and register for the Practitioner exam. Course completion alone does not award the certification.",
    "validity": "Three years from passing; follow issuer renewal terms.",
    "regional": "Braze materials list Japanese as an additional exam language for Practitioner; Bahasa Indonesia is not listed. Confirm exam language, payment and proctor availability from Indonesia.",
    "url": "https://braze-dev.skilljar.com/page/certification",
    "sourceUrl": "https://www.credly.com/org/braze/badge/braze-certified-practitioner",
    "award": "Braze Certified Practitioner, issued by Braze after passing the paid proctored exam.",
    "scope": "Foundational Braze platform knowledge; not proof of advanced lifecycle architecture, SQL, CRM strategy or live campaign performance.",
    "fitNote": "Entry-level optional credential for CRM learners whose target Indonesian roles explicitly request Braze experience.",
    "verifiedOn": "2026-11-22"
  }
};

Object.assign(registry, additions);

var placementOverrides = {
  "DPA-T01-CH01": [
    "hubspot_digital_marketing_certification"
  ],
  "DPA-T01-CH02": [
    "hubspot_content_marketing_certification"
  ],
  "DPA-T01-CH03": [
    "hubspot_digital_marketing_certification"
  ],
  "DPA-T01-CH04": [
    "hubspot_digital_marketing_certification"
  ],
  "DPA-T01-CH05": [
    "google_ads_search"
  ],
  "DPA-T01-CH06": [
    "hubspot_digital_marketing_certification"
  ],
  "DPA-T01-CH07": [
    "hubspot_digital_marketing_certification"
  ],
  "DPA-T01-CH08": [
    "meta_ab_testing_course"
  ],
  "DPA-T01-CH09": [
    "hubspot_digital_marketing_certification"
  ],
  "DPA-T01-CH10": [],
  "DPA-T02-CH01": [
    "hubspot_inbound_certification"
  ],
  "DPA-T02-CH02": [
    "hubspot_inbound_certification"
  ],
  "DPA-T02-CH03": [
    "t02_tiktok_creative_planning"
  ],
  "DPA-T02-CH04": [],
  "DPA-T02-CH05": [
    "hubspot_inbound_certification"
  ],
  "DPA-T02-CH06": [
    "linkedin_advertising_fundamentals"
  ],
  "DPA-T02-CH07": [],
  "DPA-T02-CH08": [
    "linkedin_advertising_fundamentals"
  ],
  "DPA-T02-CH09": [
    "linkedin_marketing_measurement"
  ],
  "DPA-T02-CH10": [],
  "DPA-T03-CH01": [
    "meta_media_planning"
  ],
  "DPA-T03-CH02": [
    "meta_media_planning"
  ],
  "DPA-T03-CH03": [
    "google_ads_display",
    "google_ads_video"
  ],
  "DPA-T03-CH04": [
    "meta_media_planning",
    "google_ads_display",
    "google_ads_video"
  ],
  "DPA-T03-CH05": [
    "meta_media_planning",
    "google_ads_display",
    "google_ads_video"
  ],
  "DPA-T03-CH06": [],
  "DPA-T03-CH07": [],
  "DPA-T03-CH08": [
    "meta_media_planning"
  ],
  "DPA-T03-CH09": [],
  "DPA-T03-CH10": [
    "meta_media_planning"
  ],
  "DPA-T04-CH01": [
    "tiktok_search_achievement",
    "google_ads_search",
    "microsoft_ads_search_certification"
  ],
  "DPA-T04-CH02": [
    "google_ads_search",
    "microsoft_ads_search_certification"
  ],
  "DPA-T04-CH03": [
    "google_ads_search",
    "microsoft_ads_search_certification"
  ],
  "DPA-T04-CH04": [
    "google_ads_search",
    "microsoft_ads_search_certification"
  ],
  "DPA-T04-CH05": [
    "google_ads_search",
    "microsoft_ads_search_certification"
  ],
  "DPA-T04-CH06": [
    "google_ads_search",
    "microsoft_ads_search_certification"
  ],
  "DPA-T04-CH07": [
    "google_ads_search",
    "microsoft_ads_search_certification"
  ],
  "DPA-T04-CH08": [
    "google_ads_search",
    "microsoft_ads_search_certification"
  ],
  "DPA-T04-CH09": [
    "google_ads_search",
    "microsoft_ads_search_certification"
  ],
  "DPA-T04-CH10": [
    "google_ads_search"
  ],
  "DPA-T05-CH01": [
    "meta_v10_ads_campaign",
    "tiktok_basics_achievement",
    "meta_sba_ads_manager_skilling_certificate"
  ],
  "DPA-T05-CH02": [
    "meta_v10_campaign_objectives",
    "tiktok_website_sales_achievement",
    "tiktok_lead_generation_achievement"
  ],
  "DPA-T05-CH03": [
    "meta_v10_audience_strategy",
    "tiktok_build_brand_achievement",
    "meta_media_buying"
  ],
  "DPA-T05-CH04": [
    "meta_v10_ads_campaign",
    "tiktok_basics_achievement"
  ],
  "DPA-T05-CH05": [
    "meta_v10_creative_best_practices",
    "tiktok_creative_production_achievement",
    "tiktok_ai_solutions_achievement"
  ],
  "DPA-T05-CH06": [
    "meta_v10_buying_types",
    "meta_buying_types_course",
    "tiktok_media_buying"
  ],
  "DPA-T05-CH07": [
    "meta_v10_pixel_capi",
    "meta_pixel_capi_course",
    "meta_pixel_optimization_course"
  ],
  "DPA-T05-CH08": [
    "meta_v10_privacy_brand_safety",
    "tiktok_brand_safety_achievement",
    "meta_media_buying"
  ],
  "DPA-T05-CH09": [
    "meta_v10_campaign_measurement",
    "meta_ab_testing_course",
    "tiktok_advanced_leadgen_achievement"
  ],
  "DPA-T05-CH10": [
    "meta_media_buying",
    "tiktok_media_buying"
  ],
  "DPA-T06-CH01": [
    "google_dv360_2026"
  ],
  "DPA-T06-CH02": [],
  "DPA-T06-CH03": [],
  "DPA-T06-CH04": [
    "google_dv360_2026",
    "t08_ttd_edge_data_driven_planning"
  ],
  "DPA-T06-CH05": [
    "google_dv360_2026"
  ],
  "DPA-T06-CH06": [],
  "DPA-T06-CH07": [
    "google_dv360_2026",
    "t08_ttd_edge_data_driven_planning"
  ],
  "DPA-T06-CH08": [
    "google_dv360_2026",
    "t08_ttd_edge_data_driven_planning"
  ],
  "DPA-T06-CH09": [],
  "DPA-T06-CH10": [
    "google_cm360_2026"
  ],
  "DPA-T06-CH11": [
    "google_dv360_2026"
  ],
  "DPA-T06-CH12": [],
  "DPA-T07-CH01": [
    "tiktok_shop_achievement"
  ],
  "DPA-T07-CH02": [],
  "DPA-T07-CH03": [],
  "DPA-T07-CH04": [
    "google_ads_shopping"
  ],
  "DPA-T07-CH05": [
    "meta_collaborative_ads_course"
  ],
  "DPA-T07-CH06": [
    "meta_collaborative_ads_course"
  ],
  "DPA-T07-CH07": [],
  "DPA-T07-CH08": [
    "google_ads_shopping",
    "tiktok_advanced_shop_achievement",
    "tiktok_shop_achievement"
  ],
  "DPA-T07-CH09": [
    "meta_collaborative_ads_course",
    "tiktok_advanced_shop_achievement"
  ],
  "DPA-T07-CH10": [],
  "DPA-T08-CH01": [
    "t08_iab_dbpc"
  ],
  "DPA-T08-CH02": [
    "t08_iab_dbpc",
    "t08_ttd_edge_data_driven_planning"
  ],
  "DPA-T08-CH03": [
    "t08_iab_dbpc"
  ],
  "DPA-T08-CH04": [
    "t08_iab_dbpc",
    "t08_ttd_edge_data_driven_planning"
  ],
  "DPA-T08-CH05": [
    "t08_iab_dbpc"
  ],
  "DPA-T08-CH06": [
    "t08_iab_dbpc"
  ],
  "DPA-T08-CH07": [
    "t08_iab_daoc"
  ],
  "DPA-T08-CH08": [],
  "DPA-T08-CH09": [
    "t08_iab_dbpc",
    "t08_ttd_edge_data_driven_planning"
  ],
  "DPA-T08-CH10": [
    "t08_iab_dbpc"
  ],
  "DPA-T09-CH01": [
    "google_cm360_2026"
  ],
  "DPA-T09-CH02": [
    "google_cm360_2026"
  ],
  "DPA-T09-CH03": [
    "google_cm360_2026"
  ],
  "DPA-T09-CH04": [
    "google_cm360_2026"
  ],
  "DPA-T09-CH05": [
    "google_cm360_2026"
  ],
  "DPA-T09-CH06": [
    "google_cm360_2026"
  ],
  "DPA-T09-CH07": [
    "google_cm360_2026",
    "google_dv360_2026"
  ],
  "DPA-T09-CH08": [
    "google_cm360_2026"
  ],
  "DPA-T09-CH09": [
    "google_cm360_2026"
  ],
  "DPA-T09-CH10": [],
  "DPA-T10-CH01": [
    "meta_marketing_science"
  ],
  "DPA-T10-CH02": [
    "google_analytics_certification"
  ],
  "DPA-T10-CH03": [
    "google_analytics_certification"
  ],
  "DPA-T10-CH04": [],
  "DPA-T10-CH05": [
    "google_analytics_certification"
  ],
  "DPA-T10-CH06": [
    "google_analytics_certification",
    "meta_marketing_science",
    "moengage_analytics_expert"
  ],
  "DPA-T10-CH07": [
    "meta_marketing_science",
    "google_analytics_certification",
    "google_ads_measurement"
  ],
  "DPA-T10-CH08": [
    "meta_marketing_science",
    "google_analytics_certification",
    "google_ads_measurement"
  ],
  "DPA-T10-CH09": [
    "meta_marketing_science",
    "google_analytics_certification"
  ],
  "DPA-T10-CH10": [],
  "DPA-T11-CH01": [
    "semrush_seo_crash"
  ],
  "DPA-T11-CH02": [
    "semrush_seo_crash",
    "ahrefs_seo_certification"
  ],
  "DPA-T11-CH03": [
    "t11_semrush_technical_seo",
    "ahrefs_seo_certification"
  ],
  "DPA-T11-CH04": [
    "t11_semrush_technical_seo",
    "ahrefs_seo_certification"
  ],
  "DPA-T11-CH05": [
    "semrush_seo_crash"
  ],
  "DPA-T11-CH06": [
    "semrush_seo_crash",
    "ahrefs_seo_certification"
  ],
  "DPA-T11-CH07": [
    "semrush_seo_crash"
  ],
  "DPA-T11-CH08": [
    "semrush_seo_crash",
    "ahrefs_seo_certification"
  ],
  "DPA-T11-CH09": [
    "t11_hubspot_aeo_fundamentals"
  ],
  "DPA-T11-CH10": [],
  "DPA-T12-CH01": [
    "hubspot_inbound_certification",
    "moengage_growth_marketer",
    "braze_digital_strategist"
  ],
  "DPA-T12-CH02": [
    "salesforce_mce_foundations",
    "braze_practitioner"
  ],
  "DPA-T12-CH03": [
    "hubspot_inbound_certification",
    "moengage_growth_marketer",
    "braze_marketing_specialist"
  ],
  "DPA-T12-CH04": [
    "hubspot_inbound_certification",
    "moengage_growth_marketer",
    "braze_digital_strategist"
  ],
  "DPA-T12-CH05": [
    "hubspot_email_marketing",
    "salesforce_mce_foundations",
    "salesforce_mce_email_specialist"
  ],
  "DPA-T12-CH06": [
    "hubspot_email_marketing",
    "moengage_growth_marketer",
    "braze_marketing_specialist"
  ],
  "DPA-T12-CH07": [
    "hubspot_email_marketing",
    "salesforce_mce_email_specialist",
    "moengage_growth_marketer"
  ],
  "DPA-T12-CH08": [
    "moengage_analytics_expert"
  ],
  "DPA-T12-CH09": [
    "hubspot_email_marketing",
    "moengage_growth_marketer",
    "braze_digital_strategist"
  ],
  "DPA-T12-CH10": [],
  "DPA-T13-CH01": [
    "hubspot_social_media_certification"
  ],
  "DPA-T13-CH02": [
    "hubspot_social_media_certification",
    "tiktok_build_brand_achievement"
  ],
  "DPA-T13-CH03": [
    "hubspot_social_media_certification"
  ],
  "DPA-T13-CH04": [
    "hubspot_content_marketing_certification"
  ],
  "DPA-T13-CH05": [
    "hubspot_content_marketing_certification"
  ],
  "DPA-T13-CH06": [
    "hubspot_content_marketing_certification"
  ],
  "DPA-T13-CH07": [
    "tiktok_creative_production_achievement",
    "tiktok_ai_solutions_achievement",
    "hubspot_social_media_certification"
  ],
  "DPA-T13-CH08": [
    "hubspot_social_media_certification"
  ],
  "DPA-T13-CH09": [
    "hubspot_social_media_certification"
  ],
  "DPA-T13-CH10": [
    "hubspot_social_media_certification",
    "tiktok_creative_iteration_achievement",
    "meta_v10_campaign_measurement"
  ],
  "DPA-T13-CH11": [
    "hubspot_content_marketing_certification"
  ],
  "DPA-T14-CH01": [
    "t14_meltwater_influencer_cert_1"
  ],
  "DPA-T14-CH02": [
    "t14_meltwater_influencer_cert_1",
    "meltwater_influencer_cert_2",
    "t14_meta_creator_marketing"
  ],
  "DPA-T14-CH03": [],
  "DPA-T14-CH04": [],
  "DPA-T14-CH05": [
    "meltwater_influencer_cert_2",
    "t02_tiktok_creative_planning",
    "t14_meta_creator_marketing"
  ],
  "DPA-T14-CH06": [
    "meta_partnership_ads_course",
    "t02_tiktok_creative_planning",
    "tiktok_creative_production_achievement"
  ],
  "DPA-T14-CH07": [
    "meta_partnership_ads_course"
  ],
  "DPA-T14-CH08": [
    "t14_meltwater_influencer_cert_1"
  ],
  "DPA-T14-CH09": [
    "meta_partnership_ads_course",
    "tiktok_creative_production_achievement",
    "tiktok_creative_iteration_achievement"
  ],
  "DPA-T14-CH10": [
    "meta_partnership_ads_course",
    "tiktok_creative_iteration_achievement",
    "meta_v10_creative_best_practices"
  ],
  "DPA-T14-CH11": [
    "meta_partnership_ads_course"
  ],
  "DPA-T14-CH12": [
    "meta_partnership_ads_course"
  ],
  "DPA-T15-CH01": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH02": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH03": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH04": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH05": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH06": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH07": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH08": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH09": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH10": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH11": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T15-CH12": [
    "impact_affiliate_industry_certification"
  ],
  "DPA-T16-CH01": [
    "meta_community_course_credentials"
  ],
  "DPA-T16-CH02": [
    "meta_community_course_credentials"
  ],
  "DPA-T16-CH03": [
    "meta_community_course_credentials"
  ],
  "DPA-T16-CH04": [
    "meta_community_course_credentials"
  ],
  "DPA-T16-CH05": [
    "meta_community_course_credentials"
  ],
  "DPA-T16-CH06": [
    "meta_community_course_credentials"
  ],
  "DPA-T16-CH07": [
    "meta_community_course_credentials",
    "meta_v10_privacy_brand_safety",
    "tiktok_brand_safety_achievement"
  ],
  "DPA-T16-CH08": [
    "meta_community_course_credentials"
  ],
  "DPA-T16-CH09": [
    "meta_community_course_credentials"
  ],
  "DPA-T16-CH10": [
    "meta_community_course_credentials",
    "tiktok_brand_safety_achievement",
    "meta_v10_privacy_brand_safety"
  ],
  "DPA-T16-CH11": [
    "meta_community_course_credentials"
  ],
  "DPA-T16-CH12": [
    "meta_community_course_credentials"
  ]
};

var placementNotes = {
  "DPA-T01-CH01": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T01-CH02": "HubSpot Content Marketing Certification is a partial adjacent fit for storytelling and content strategy; it does not teach primary consumer research or full brand-positioning methods. First-pass mapping; learner portfolio remains primary.",
  "DPA-T01-CH03": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T01-CH04": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T01-CH05": "Google Ads Search Certification directly covers only the Search pillar of this combined chapter; paid social and programmatic objectives remain in the chapter lesson and practice. First-pass mapping.",
  "DPA-T01-CH06": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T01-CH07": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T01-CH08": "Meta Blueprint's A/B tests, creative tests and lift-studies completion credential is platform-specific; it supplements the chapter's independent experiment-design practice.",
  "DPA-T01-CH09": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T01-CH10": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T02-CH01": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T02-CH02": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T02-CH03": "TikTok Creative Planning Achievement covers TikTok audience research, inspiration and creative briefs; supporting fit only for the broader cultural-insight objective.",
  "DPA-T02-CH04": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T02-CH05": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T02-CH06": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T02-CH07": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T02-CH08": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T02-CH09": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T02-CH10": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T03-CH01": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T03-CH02": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T03-CH03": "Google Ads Display and Video are direct product-specific credentials for digital display/video activation; neither replaces cross-channel media evaluation.",
  "DPA-T03-CH04": "Google Ads Display/Video support channel-role and format execution; Meta Media Planning remains a separate platform-specific professional credential.",
  "DPA-T03-CH05": "Google Ads Display/Video support channel and campaign planning within Google Ads; the chapter investment rationale and cross-channel budget allocation remain portfolio-assessed.",
  "DPA-T03-CH06": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T03-CH07": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T03-CH08": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T03-CH09": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T03-CH10": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T04-CH01": "TikTok Get discovered with Search provides an issuer-listed Credential for Completion specifically for Search Ads. Google and Microsoft remain separate provider certifications; the platforms are not interchangeable.",
  "DPA-T04-CH02": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T04-CH03": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T04-CH04": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T04-CH05": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T04-CH06": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T04-CH07": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T04-CH08": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T04-CH09": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T04-CH10": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T05-CH01": "Completion-first entry route: Meta Blueprint's v10 introductory course and TikTok Basics are free-to-learn course-completion/Achievement options at the issuer level; Meta Small Business Academy follows as a separate Ads Manager skilling test with fee not stated publicly. Paid Meta Media Buying Professional remains optional and is not required to earn either completion award.",
  "DPA-T05-CH02": "Meta's course directly covers campaign objectives and conversion locations. TikTok Drive Website Sales and Generate and message leads support mainstream website-conversion and lead-generation objectives; app-promotion is retained as learning-only vertical specialization.",
  "DPA-T05-CH03": "Meta's v10 course directly covers custom/lookalike audiences and targeting; TikTok Build your brand supports awareness and audience-funnel learning. Meta professional certification remains optional and exam-based.",
  "DPA-T05-CH04": "Meta's introductory course and TikTok Basics support account/campaign setup. TikTok Auto Ads is a narrow dealership-inventory specialization, not a general paid-social credential.",
  "DPA-T05-CH05": "Meta's creative best-practice credential and TikTok Creative Production support creative formats and production. TikTok AI Solutions is limited to TikTok advertising products, not general AI competence.",
  "DPA-T05-CH06": "The recovered Meta v10 buying-type course and current v11 Meta buying-types course are separate issuer activities. TikTok Media Buying Professional Certification remains a paid/advanced exam option, not a free completion award.",
  "DPA-T05-CH07": "Meta's v10 Pixel/CAPI award and current Meta Pixel/CAPI route cover platform-specific event measurement; the pixel optimization activity is a separate advanced course. None certifies general measurement engineering.",
  "DPA-T05-CH08": "Meta Privacy controls and brand safety plus TikTok brand-safety Achievement support platform-specific risk controls; they do not replace Indonesian privacy law, contracts or cross-platform governance training.",
  "DPA-T05-CH09": "Meta reporting/measurement and A/B testing credentials plus TikTok's advanced lead-generation Achievement support campaign analysis/optimization. Applied statistical design and incrementality remain in the chapter deliverable.",
  "DPA-T05-CH10": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T06-CH01": "DV360 is directly named in Indonesian agency biddable/programmatic job requirements; TTD remains an optional global-agency skill where mapped.",
  "DPA-T06-CH02": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T06-CH03": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T06-CH04": "DV360 and TTD are platform routes used in agency programmatic work; this is not proof of SSP, exchange or supply-path expertise.",
  "DPA-T06-CH05": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T06-CH06": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T06-CH07": "DV360 and TTD support platform bidding and pacing practice; programmatic trading judgment must also be shown in the campaign artifact.",
  "DPA-T06-CH08": "DV360 and TTD support deal and activation learning; advanced PMP/PG negotiation still needs chapter-level evidence.",
  "DPA-T06-CH09": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T06-CH10": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T06-CH11": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T06-CH12": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T07-CH01": "TikTok Shop completion learning supports the social-commerce part of the retail-media ecosystem; it is distinct from Amazon Ads certification and does not establish retailer-media network expertise.",
  "DPA-T07-CH02": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T07-CH03": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T07-CH04": "Google Shopping Ads is included because Indonesian marketplace/e-commerce advertising roles explicitly reference Google Shopping alongside Shopee/TikTok Shop. It does not certify marketplace-native Ads Manager operation.",
  "DPA-T07-CH05": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T07-CH06": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T07-CH07": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T07-CH08": "Google Shopping and TikTok Shop Academy achievements are platform-specific evidence; Shopee, Tokopedia and Lazada operation remains a local practical requirement without a verified public issuer certificate in this audit.",
  "DPA-T07-CH09": "TikTok Shop advanced learning is supporting commerce optimization. Meta Collaborative Ads and Amazon Sponsored Ads have distinct product scopes; sales measurement and incrementality remain chapter evidence.",
  "DPA-T07-CH10": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T08-CH01": "IAB DBPC is a partial professional route for digital media buying and planning; the related Trade Desk supply-chain course remains Learn-only because no course award was evidenced.",
  "DPA-T08-CH02": "IAB DBPC directly covers media research, inventory, audience, planning and allocation; The Trade Desk Data-Driven Planning certification is additional partial vendor-specific evidence.",
  "DPA-T08-CH03": "IAB DBPC directly covers digital media strategy and planning; this is professional exam evidence, not a substitute for the chapter artifact.",
  "DPA-T08-CH04": "IAB DBPC directly covers media strategy and allocation; The Trade Desk certification is supporting vendor-specific evidence for data-driven planning.",
  "DPA-T08-CH05": "IAB DBPC is a partial fit for digital media planning; use the chapter work sample for specialist investment decisions.",
  "DPA-T08-CH06": "IAB DBPC partially covers digital campaign execution; Mediaocean Prisma badges are supporting, product-specific and gated to the issuer portal.",
  "DPA-T08-CH07": "IAB DAOC is a partial fit for operational execution; verify chapter-specific scope and Indonesia exam access before enrolment.",
  "DPA-T08-CH08": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T08-CH09": "IAB DBPC directly covers campaign analysis and optimization; The Trade Desk certification is additional vendor-specific evidence.",
  "DPA-T08-CH10": "IAB DBPC is only a supporting external option. The integrated media-investment capstone remains assessed through the chapter portfolio, not the external exam.",
  "DPA-T09-CH01": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T09-CH02": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T09-CH03": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T09-CH04": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T09-CH05": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T09-CH06": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T09-CH07": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T09-CH08": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T09-CH09": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T09-CH10": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T10-CH01": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T10-CH02": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T10-CH03": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T10-CH04": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T10-CH05": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T10-CH06": "MoEngage Analytics Expert provides a completion credential for behavioral funnels, cohorts and retention analysis; it complements, not replaces, cross-platform marketing analytics.",
  "DPA-T10-CH07": "Google Ads Measurement validates Google Ads measurement solutions; pair with GA4 and independent attribution/incrementality work.",
  "DPA-T10-CH08": "Google Ads Measurement is supporting platform-specific measurement knowledge; statistical experiment design still requires independent practice.",
  "DPA-T10-CH09": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T10-CH10": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T11-CH01": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T11-CH02": "Ahrefs Certification is a free, one-hour tool-vendor exam and directly supports keyword, competitor and SEO research tool workflows.",
  "DPA-T11-CH03": "Ahrefs Certification supports crawl/site-audit tool proficiency; the learner still needs a real technical audit and fix-priority artifact.",
  "DPA-T11-CH04": "Ahrefs tool certification supports site audit workflows; technical diagnosis and implementation remain portfolio requirements.",
  "DPA-T11-CH05": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T11-CH06": "Ahrefs Certification supports backlink and competitive research workflows; it is not a standalone digital PR or authority-building professional licence.",
  "DPA-T11-CH07": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T11-CH08": "Ahrefs Certification supports SEO reporting and analysis workflows; validate GSC/GA4 and reporting skill separately.",
  "DPA-T11-CH09": "HubSpot AEO Fundamentals is a first-pass direct fit for foundational AEO; it does not guarantee search rankings or AI citations.",
  "DPA-T11-CH10": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T12-CH01": "HubSpot Inbound, MoEngage Growth Marketer and Braze Certified Marketing Strategy Expert cover different CRM/lifecycle platform paths. The Braze exam is a paid advanced certification; the free Braze learning path alone does not award a certificate. Indonesia CRM job descriptions explicitly name these platforms.",
  "DPA-T12-CH02": "Salesforce Marketing Cloud Engagement Foundations and Braze Certified Practitioner are platform-specific CRM foundations. The former assesses subscriber/data concepts; the latter validates basic Braze platform and data-planning knowledge. Neither is a full enterprise data-architecture assessment.",
  "DPA-T12-CH03": "Braze Certified Marketing Specialist and MoEngage Growth Marketer validate vendor-specific segmentation/lifecycle workflow knowledge; HubSpot Inbound supports broader buyer and lifecycle framing. The Braze exam is paid and proctored.",
  "DPA-T12-CH04": "The three routes cover customer journey and trigger-based communication in their respective platforms; the learner must still design a channel-neutral journey map.",
  "DPA-T12-CH05": "HubSpot Email Marketing and Salesforce Marketing Cloud credentials match email/engagement work; Salesforce Foundations is USD 75 and the Specialist exam is USD 200 before local taxes.",
  "DPA-T12-CH06": "MoEngage Growth Marketer and Braze Certified Marketing Specialist support automation and journey planning; HubSpot Email is an adjacent route. The Braze learning path is free, but its certification exam is paid.",
  "DPA-T12-CH07": "Salesforce Marketing Cloud Specialist and MoEngage support platform-specific messaging and optimization; deliverability and personalization still require applied work.",
  "DPA-T12-CH08": "MoEngage Analytics Expert covers funnel/cohort/retention analysis directly; use a learner portfolio to demonstrate lifecycle impact.",
  "DPA-T12-CH09": "These issuer routes support lifecycle optimization/reporting, but the chapter's test design and incremental lift analysis remain independently assessed.",
  "DPA-T12-CH10": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T13-CH01": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T13-CH02": "TikTok Build your brand supports awareness and consideration; HubSpot Social Media Certification covers broader organic social strategy.",
  "DPA-T13-CH03": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T13-CH04": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T13-CH05": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T13-CH06": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T13-CH07": "TikTok Creative Production directly supports short-form content production; AI Solutions is TikTok-product-specific and HubSpot Social is broader organic social learning.",
  "DPA-T13-CH08": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T13-CH09": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T13-CH10": "TikTok Creative Iteration and Meta campaign measurement are platform-specific supporting credentials. Learners still need an independent content-performance analysis and optimization artifact.",
  "DPA-T13-CH11": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T14-CH01": "Meltwater Influencer Marketing Certification I directly supports ecosystem and campaign foundations; it is a vendor course certification, not an independent professional license.",
  "DPA-T14-CH02": "Meltwater Influencer Marketing Certification I and II directly support creator ecosystem, selection and campaign planning; Meta's award is narrower and platform-specific.",
  "DPA-T14-CH03": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T14-CH04": "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.",
  "DPA-T14-CH05": "Meltwater Certification II covers influencer selection and conversion tactics; TikTok and Meta paths remain separate platform-specific completion learning.",
  "DPA-T14-CH06": "Meta Partnership Ads teaches creator-content authorization and paid collaboration; TikTok Creative Planning/Production supports briefs and execution. Contract, usage-rights and disclosure skills remain chapter work.",
  "DPA-T14-CH07": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T14-CH08": "Meltwater Influencer Marketing Certification I is supporting only for creator relationships and campaign practice; chapter portfolio evidence remains primary.",
  "DPA-T14-CH09": "TikTok Creative Production/Iteration supports content delivery and iteration; Meta Partnership Ads is platform-specific and does not substitute for real creator-management experience.",
  "DPA-T14-CH10": "Meta Partnership Ads directly supports Meta amplification and permissions; TikTok Creative Iteration is supporting creative learning, not TikTok paid-media certification.",
  "DPA-T14-CH11": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T14-CH12": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH01": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH02": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH03": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH04": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH05": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH06": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH07": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH08": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH09": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH10": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH11": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T15-CH12": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T16-CH01": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T16-CH02": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T16-CH03": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T16-CH04": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T16-CH05": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T16-CH06": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T16-CH07": "Meta Community Management, Meta Privacy/Brand Safety and TikTok brand-safety Achievement support platform controls. They do not replace moderation playbooks, crisis escalation or local legal review.",
  "DPA-T16-CH08": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T16-CH09": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T16-CH10": "TikTok brand-safety and Meta privacy/community activities provide platform-policy learning only; crisis triage, escalation and response governance remain assessed through the chapter portfolio.",
  "DPA-T16-CH11": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance.",
  "DPA-T16-CH12": "Issuer route(s) identified in curated registry; objective fit, Indonesia access/language/checkout eligibility, prerequisites and current provider terms require independent chapter-level acceptance."
};

for (var chapterId of Object.keys(placementOverrides)) {
  var routeIds = placementOverrides[chapterId];
  chapterMap[chapterId] = routeIds;
  auditMap[chapterId] = {
    "routeIds": routeIds.slice(),
    "outcome": routeIds.length ? "EXTERNAL_CREDENTIAL_OPTION" : "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE",
    "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED",
    "note": placementNotes[chapterId]
  };
}

foundationMap["DPA-CF-CH05"] = ["analyticsmania_ga4_fundamentals"];
foundationAudit["DPA-CF-CH01"] = { "routeIds": [], "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE", "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED", "note": "No suitably matched external award selected; unit economics remains a Learn objective and portfolio exercise. This is not a market-wide absence claim." };
foundationAudit["DPA-CF-CH02"] = { "routeIds": ["forage_omnichannel_certificate", "hubspot_inbound_certification"], "outcome": "EXTERNAL_CREDENTIAL_OPTION", "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED", "note": "Forage is an applied simulation completion certificate and HubSpot Inbound is an adjacent course credential; neither replaces client-brief practice." };
foundationAudit["DPA-CF-CH03"] = { "routeIds": ["hubspot_inbound_certification"], "outcome": "EXTERNAL_CREDENTIAL_OPTION", "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED", "note": "HubSpot Inbound is an adjacent course credential; objective fit and current terms remain first-pass and not SME accepted." };
foundationAudit["DPA-CF-CH04"] = { "routeIds": [], "outcome": "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE", "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED", "note": "Khan Academy does not issue a certificate for this learning; no matching math-for-marketing award selected. Use the chapter assessment and work sample." };
foundationAudit["DPA-CF-CH05"] = { "routeIds": ["analyticsmania_ga4_fundamentals"], "outcome": "EXTERNAL_CREDENTIAL_OPTION", "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED", "note": "Supporting GA4 course-completion certificate only; it is not a Google-issued certification or a full marketing-measurement credential." };
foundationAudit["DPA-CF-CH06"] = { "routeIds": ["forage_omnichannel_certificate"], "outcome": "EXTERNAL_CREDENTIAL_OPTION", "verificationStatus": "FIRST_PASS_MAPPING_NOT_SME_ACCEPTED", "note": "Forage is an applied simulation completion certificate; role-specific agency workflow and professionalism remain portfolio-led." };


var marketExcludedRouteIds = [
  "amazon_retail_certification", "amazon_programmatic", "amazon_sponsored_ads",
  "microsoft_ads_display_video_certification", "microsoft_programmatic_learning_badge",
  "microsoft_retail_advertising_certification", "stackadapt_programmatic",
  "forage_omnichannel_certificate", "analyticsmania_ga4_fundamentals",
  "t10_coursera_google_data_analytics", "t10_kaggle_intro_sql",
  "t12_trailhead_data360", "t08_mediaocean_prisma", "t14_meltwater_klear_foundations",
  "t14_pxa_creator_product_training", "t14_pxa_protect_monitor",
  "linkedin_marketing_strategy", "linkedin_content_creative",
  "tiktok_auto_ads_achievement", "tiktok_promote_app_achievement", "tiktok_advanced_app_achievement"
];
var excludedRouteLookup = {};
marketExcludedRouteIds.forEach(function(routeId) {
  excludedRouteLookup[routeId] = true;
  delete registry[routeId];
});
function removeOutOfMarketEarnRoutes(routeMap, audit) {
  Object.keys(routeMap).forEach(function(chapterId) {
    var current = routeMap[chapterId] || [];
    var retained = current.filter(function(routeId) { return !excludedRouteLookup[routeId]; });
    routeMap[chapterId] = retained;
    if (audit && audit[chapterId]) {
      audit[chapterId].routeIds = retained.slice();
      if (!retained.length) {
        audit[chapterId].outcome = "APPLIED_SKILL_AND_PORTFOLIO_EVIDENCE";
        audit[chapterId].note = "No external credential is selected for this objective under the Indonesia-market and professional-role relevance filter; use the chapter's applied deliverable and portfolio evidence. This is not a market-wide absence claim.";
      }
    }
  });
}
removeOutOfMarketEarnRoutes(chapterMap, auditMap);
removeOutOfMarketEarnRoutes(foundationMap, foundationAudit);


root.DPA_CREDENTIAL_REGISTRY = registry;
root.DPA_CHAPTER_CREDENTIAL_MAP = chapterMap;
root.DPA_CHAPTER_CREDENTIAL_AUDIT = auditMap;
root.DPA_FOUNDATION_CREDENTIAL_MAP = foundationMap;
root.DPA_FOUNDATION_CREDENTIAL_AUDIT = foundationAudit;
})(typeof window !== "undefined" ? window : globalThis);
