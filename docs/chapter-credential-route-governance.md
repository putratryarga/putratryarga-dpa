# Chapter-level credential and milestone implementation

**Implementation baseline:** DPA v11.2 review branch  
**Issuer desk-check date:** 21 November 2026  
**State:** First-pass implementation; NOT final chapter-level acceptance.

## Experience decision

No additional learner menu is introduced. The active role's chapter panel now presents four in-context milestones: **Learn → Earn → Apply → Master**. The credential map remains a secondary cross-track reference. A chapter can show up to two external routes to avoid turning the panel into a credential directory.

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

No Google Analytics certification is presented: a current official assessable certification route was not established in this pass. Google Analytics learning resources can remain as references/learning paths without an award claim. The Trade Desk Programmatic 101 is learning-only unless a learner account/provider page explicitly awards a credential.

## Coverage and open gates

- Core: 169/169 chapter IDs in the credential audit map and CSV. Each row records either an optional mapped external route or an applied-skill/portfolio-first outcome.
- The mapping itself remains `FIRST_PASS_MAPPING_NOT_SME_ACCEPTED`; source-to-objective relevance, course fit, Indonesia account access, final checkout price, prerequisites, credential availability and chapter assessment acceptance remain OPEN.
- Advanced Electives: 28/28 chapter IDs are captured separately in `28-elective-credential-route-review.csv`, but all are deliberately marked `NOT_YET_REVIEWED_IN_THIS_IMPLEMENTATION`. The elective curricula are not yet integrated into the chapter renderer.
- The current milestone strip is informational, not a credential progress engine. External completion is not imported; DPA awards are disabled.
- The existing secondary credential map has not been removed and remains a reference catalogue pending a separate cross-check against this route registry.
- Fresh link crawl, authenticated UI review, keyboard/screen-reader/contrast checks, and SME acceptance are still required before public release.

## Source pages checked

- Google Ads certification rules and Indonesian language availability: https://support.google.com/google-ads/answer/9702955?hl=id
- Meta certification hub and definitions: https://certifications.facebookblueprint.com/student/catalog
- Meta Blueprint Startup Hub course-level credential markers: https://trainingworkshops.facebookblueprint.com/student/collection/515315-meta-blueprint-startup-hub
- TikTok Certification FAQ: https://www.tiktokacademy.com/student/page/3053325-certification-faqs
- StackAdapt Programmatic Masterclass: https://www.stackadapt.com/academy/programmatic-masterclass
- Amazon Ads certifications and badge/learning-award distinction: https://advertising.amazon.com/academy/certifications?activeLocale=en-us
- HubSpot Email Marketing Certification: https://academy.hubspot.com/courses/email-marketing-certification-en
- Semrush SEO Crash Course: https://www.semrush.com/academy/courses/semrush-seo-crash-course-with-brian-dean/

This implementation is confined to the audit branch and makes no change to `main`, production routing, or credential issuance.
