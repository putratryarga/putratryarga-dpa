# Chapter-level credential and milestone implementation

**Implementation baseline:** DPA v11.2 review branch  
**Issuer desk-check date:** 21 November 2026  
**State:** First-pass implementation; NOT final chapter-level acceptance.

## Experience decision

No additional learner menu is introduced. The active role's chapter panel now presents four in-context milestones: **Learn → Earn → Apply → Master**. The credential map remains a secondary cross-track reference. A chapter can show up to three external routes to avoid turning the panel into a credential directory.

## Evidence taxonomy

- `professional_certification`: a provider's formal professional assessment/certification (e.g., Google Ads, Meta, TikTok, Amazon Ads). The issuer owns assessment and award.
- `vendor_course_certification`: a vendor-issued course certification. This is not automatically an independent or cross-industry qualification.
- `course_completion_credential`: a provider course/activity marked as a credential on the issuer page; not equivalent to the provider's professional certification exam.
- `course_completion_certificate`: a course-completion certificate, not a professional certification.
- Reference / documentation / learning path: remains neutral grey and is not advertised as an award.

A Paid / proctored label only appears where the issuer's route is described as a paid, proctored exam. Course access being free does not imply that every exam or related service is free.

## Mapping rules

1. Map only where the issuer-described scope has a defensible relationship to the chapter learning objective.
2. One credential may support several chapters; no new credential is invented to fill a chapter.
3. Every route links to the issuer's learner path and source facts.
4. Local prices, eligibility, exam-language options and account access are not inferred from a global marketing page. Open checks are displayed.
5. Where no route is selected, the page says no credential is mapped to that objective in this release and directs the learner to applied evidence. This is not a global claim that no credential exists.
6. DPA cannot observe completion in external provider accounts and does not auto-award or sync external credentials.
7. “Master” is self-review/assessment guidance only. It does not issue a DPA chapter badge or certificate.

## First-pass curation in this branch

| Provider route | Evidence type | Chapter fit |
|---|---|---|
| Google Ads Search Certification | Professional certification | T04 Paid Search chapters 01–10 |
| Meta Certified Media Planning Professional | Professional certification | T03 selected media-planning objectives; Meta-specific only |
| Meta Certified Marketing Science Professional | Professional certification | T10-CH01, CH06–CH09 for KPI/measurement, analytics interpretation, effectiveness and experiment design; Meta-specific only |
| Meta Certified Media Buying Professional | Professional certification | T05 selected Paid Social objectives; Meta-specific only |
| TikTok Media Buying Professional Certification | Professional certification | T05 selected Paid Social objectives; at least one year hands-on experience required |
| Meta Blueprint buying-types course | Course-completion credential | T05-CH06 |
| Meta Blueprint Pixel/CAPI course | Course-completion credential | T05-CH07 |
| Meta Blueprint A/B testing course | Course-completion credential | T05-CH09 |
| StackAdapt Programmatic Masterclass | Vendor-issued course certification | T06 selected Programmatic objectives |
| Amazon Ads Programmatic Solutions Certification | Professional certification + digital badge/PDF | T06 selected Amazon programmatic objectives; global-platform caveat |
| Amazon Sponsored Ads Certification | Professional certification + digital badge/PDF | T07 selected sponsored-product objectives; not a local marketplace substitute |
| HubSpot Email Marketing Certification | Vendor-issued course certification | T12 selected email/lifecycle objectives |
| Semrush SEO Crash Course | Course-completion certificate | T11 foundational SEO objectives only |
| Google Analytics Certification | Professional certification | T10-CH03 and T10-CH06 (GA-specific analytics objectives) |
| Display & Video 360 Certification (2026) | Professional certification | T06-CH05 and T06-CH11 (DV360-specific DSP/optimization objectives) |
| Campaign Manager 360 Certification (2026) | Professional certification | T06-CH10 and T09-CH05 (CM360/Floodlight and ad-server setup) |
| LinkedIn Advertising Fundamentals Certification | Professional certification | T05-CH01 and T05-CH04 |
| LinkedIn Marketing Strategy Certification | Professional certification | T05-CH02 and T05-CH10 |
| LinkedIn Content and Creative Design Certification | Professional certification | T05-CH05 and T13-CH08 |
| LinkedIn Marketing Measurement Certification | Professional certification | T10-CH07 and T10-CH08 |

Google Analytics Certification is now included after the current official Analytics Academy/Skillshop support page confirmed an active certification path. The official support page confirms free preparation courses, but price for the certification assessment and Indonesia-specific eligibility remain unresolved; an APAC Grow with Google guide labels the India route paid, so the DPA must not assume the exam is free. The Trade Desk Programmatic 101 is learning-only unless a learner account/provider page explicitly awards a credential. Google Skillshop's current certification catalogue lists DV360, Search Ads 360 and Campaign Manager 360 certification course paths for 2026; the DPA maps only DV360 and CM360 where the chapter objective fits. Current public catalogue language, access and course path should be reconfirmed in a signed-in Indonesian learner account.

## Coverage and open gates

- Core: 169/169 chapter IDs in the credential audit map and CSV. 53 chapters have at least one optional external route (78 total route placements) after adding the Meta Marketing Science route to five T10 objectives; 116 chapters remain applied-skill/portfolio-first in the current curation. This is a curated shortlist, not proof that other chapters lack provider credentials.
- The mapping itself remains `FIRST_PASS_MAPPING_NOT_SME_ACCEPTED`; source-to-objective relevance, course fit, Indonesia account access, final checkout price, prerequisites, credential availability and chapter assessment acceptance remain OPEN.
- Advanced Electives: 28/28 chapter IDs are captured separately in `28-elective-credential-route-review.csv`, but all are deliberately marked `NOT_YET_REVIEWED_IN_THIS_IMPLEMENTATION`. The elective curricula are not yet integrated into the chapter renderer.
- The current milestone strip is informational, not a credential progress engine. External completion is not imported; DPA awards are disabled.
- The existing secondary credential map has not been removed and remains a reference catalogue pending a separate cross-check against this route registry.
- Fresh link crawl, authenticated UI review, keyboard/screen-reader/contrast checks, and SME acceptance are still required before public release.

## Source pages checked

- Google Ads certification rules and Indonesian language availability: https://support.google.com/google-ads/answer/9702955?hl=id
- Google Analytics Academy current courses and certification path: https://support.google.com/analytics/answer/15068052
- Google Analytics certification course (Skillshop): https://skillshop.docebosaas.com/learn/courses/14810/google-analytics-certification
- Current Google Skillshop catalogue (DV360/CM360 2026): https://skillshop.docebosaas.com/pages/17/certifications
- Google APAC guide (GMP route / India price and duration context): https://grow.google/intl/en_in/guide-digital-marketing-skills/
- Meta certification hub and definitions: https://certifications.facebookblueprint.com/student/catalog
- Meta Blueprint Startup Hub course-level credential markers: https://trainingworkshops.facebookblueprint.com/student/collection/515315-meta-blueprint-startup-hub
- TikTok Certification FAQ: https://www.tiktokacademy.com/student/page/3053325-certification-faqs
- StackAdapt Programmatic Masterclass: https://www.stackadapt.com/academy/programmatic-masterclass
- Amazon Ads certifications and badge/learning-award distinction: https://advertising.amazon.com/academy/certifications?activeLocale=en-us
- HubSpot Email Marketing Certification: https://academy.hubspot.com/courses/email-marketing-certification-en
- Semrush SEO Crash Course: https://www.semrush.com/academy/courses/semrush-seo-crash-course-with-brian-dean/

LinkedIn exam pages and languages are issuer-specific; Bahasa Indonesia is not listed in the current LinkedIn Help article. Exam pricing is not stated there. LinkedIn route access, price and account access should be checked before learners commit.

This implementation is confined to the audit branch and makes no change to `main`, production routing, or credential issuance.


## Learner-facing recognition pathway update — 21 November 2026

The chapter Earn panel now uses the heading **Credential & chapter achievement** on every rendered core and Common Foundation chapter.

- Where a defensible provider route is mapped, the provider-issued credential card remains visible with its evidence type and issuer link.
- Where no provider route is mapped, the learner is shown an explicit objective-level explanation and the chapter deliverable used as applied evidence. The message is not presented as a statement that the market has no credential.
- Every chapter also shows a **DPA chapter achievement — planned** pathway. This is a design/status notice, not an issued badge, certificate, or claim of assessed competence.
- The DPA achievement pathway must remain non-issuable until learning outcomes, the 507-item question bank, chapter rubrics, passing standards, assessor calibration, issuer identity, privacy controls, and a trusted server-side issuance/verification service are approved.
- Master is now labelled as a mastery check and explicitly remains self-review in this release. It must not be represented as an assessor decision.
- Browser QA now asserts that every rendered chapter has the recognition pathway and that the Master panel discloses its self-review status.

This update improves the learner-facing pathway without fabricating provider awards or activating the proposed certificate system. Core mapping still remains first-pass pending independent SME acceptance; the 28 elective chapters remain outside the current learner renderer and require separate implementation and review.


### Additional issuer research — Meta Marketing Science

The official Meta Blueprint catalog distinguishes Marketing Science as a role-based certification area. Meta's 2026 certification-preparation page describes business goals/KPIs, measurement methodology, test campaigns, interpretation of statistical outputs and data-driven recommendations; it specifies a 60-question, 90-minute exam. The route is mapped only to T10 objectives with defensible overlap and is explicitly Meta-specific. Current exam availability, Indonesian account eligibility, exam language, checkout price and renewal terms remain unverified; these are not presented as settled facts.

Primary issuer references:
- https://agencies.facebookblueprint.com/student/catalog
- https://www.facebookblueprint.com/student/activity/697093-meta-certified-marketing-science-professional
