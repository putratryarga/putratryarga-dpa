# T06 — Programmatic Media Buying: Chapter-Level Source-Fit Review

**Review date:** 21 November 2026 · **Scope:** 12 chapter objectives and mapped resources.  
**Disposition:** FIRST-PASS DESK REVIEW COMPLETE; 12/12 CHAPTERS PARTIAL; FORMAL ACCEPTANCE OPEN.

## Executive finding

The Trade Desk Programmatic 101 and StackAdapt Masterclass are useful vendor learning routes, but not sufficient direct evidence for twelve distinct trader competencies. This review adds primary standards and product documentation for OpenRTB, authorised sellers, DV360 buying controls, CM360 trafficking/Floodlight and MRC/IAB quality measurement.

The Trade Desk describes Programmatic 101 as a one-hour course covering ecosystem participants, data, identity and privacy. It is an introductory course, not a certification or guarantee of live DSP access. [Official course outline](https://edgeacademy.thetradedesk.com/programmatic-101). IAB technical standards describe open industry protocols; Google Help pages describe Google product behaviour, not universal DSP rules.

AI-assisted first-pass desk review only. No independent technical audit, Indonesia account/access test, legal opinion, SME approval or learner pilot is implied.

## Supplemental primary sources

- [IAB Tech Lab OpenRTB](https://iabtechlab.com/standards/openrtb/) · [OpenRTB 2.6 spec](https://github.com/InteractiveAdvertisingBureau/openrtb2.x/blob/main/2.6.md) · [SupplyChain object](https://github.com/InteractiveAdvertisingBureau/openrtb/blob/main/supplychainobject.md)
- [ads.txt/app-ads.txt](https://iabtechlab.com/ads-txt/) · [sellers.json](https://iabtechlab.com/sellers-json/)
- [The Trade Desk Programmatic 101](https://edgeacademy.thetradedesk.com/programmatic-101)
- [DV360 line items](https://support.google.com/displayvideo/answer/2891312?hl=en) · [budgets](https://support.google.com/displayvideo/answer/2696773?hl=en) · [pacing](https://support.google.com/displayvideo/answer/3114676) · [frequency caps](https://support.google.com/displayvideo/answer/2696786?hl=en) · [Programmatic Guaranteed](https://support.google.com/displayvideo/answer/7067656?hl=en)
- [Google Ad Manager deal comparison](https://support.google.com/admanager/answer/7637485?hl=en)
- [CM360 placement tags](https://support.google.com/campaignmanager/answer/2826636) · [CM360 macros](https://support.google.com/campaignmanager/table/6096962?hl=en-VC) · [Floodlight counting](https://support.google.com/campaignmanager/answer/2823400?hl=en)
- [Google Consent Mode](https://developers.google.com/tag-platform/security/concepts/consent-mode) · [MRC Viewability Guidelines](https://mediaratingcouncil.org/sites/default/files/Standards/081815%20Viewable%20Ad%20Impression%20Guideline_v2.0_Final.pdf) · [IAB/MRC Attention Guidelines](https://www.mediaratingcouncil.org/sites/default/files/Standards/IAB_MRC_Attention_Measurement_Guidelines_November_2025.pdf)

## Chapter-by-chapter dispositions

### DPA-T06-CH01 — Programmatic Ecosystem: DSP, SSP, Exchange & Ad Server

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** The Trade Desk Programmatic 101 is a relevant one-hour introduction to ecosystem players, data, identity and privacy. IAB Tech Lab ads.txt, sellers.json and SupplyChain add primary references for seller relationships. Together they support the ecosystem foundation, but do not teach the complete commercial cost stack or all ad-server operations.

**Material gap:** Gross-to-net media cost, DSP/SSP/exchange/data/verification fees, publisher/ad-server responsibilities, latency and Indonesia inventory economics need direct operational evidence.

**Required next step:** Map every participant, transaction, data signal, fee, contract owner and control; reconcile gross-to-net cost using a synthetic Indonesia inventory example.

### DPA-T06-CH02 — Auction Mechanics, OpenRTB & Supply Path

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** IAB Tech Lab OpenRTB 2.6 documents bid-request and impression objects, deal context and transaction structure; ads.txt, sellers.json and SupplyChain add seller-path transparency. These are primary standards but do not cover every exchange-specific implementation or commercial auction rule.

**Material gap:** Auction variants, floors, timeouts, header bidding, deal enforcement, reseller paths, fees and win-rate diagnosis depend on implementation. Seller transparency is not proof of fraud-free inventory.

**Required next step:** Annotate two OpenRTB request/response traces; compare open auction and deal paths, fee layers and authorised sellers; show how exchange rules affect clearing price, timeout and win rate.

### DPA-T06-CH03 — Audience, Data Strategy, Identity & Privacy

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** The Trade Desk course introduces programmatic data, identity and privacy. Google Consent Mode clarifies that tags respond to a consent choice already collected by a site/app; UU PDP 27/2022 provides Indonesian processing-ground principles. These sources support boundaries, not every DSP/browser identity scenario.

**Material gap:** Identity graphs, browser restrictions, match-rate measurement, data provenance, contextual vs behavioural targeting, cross-border processing and legal basis per purpose need specialist platform and local privacy review.

**Required next step:** Build a data-source/identity matrix with owner, purpose, legal basis, consent state, match-rate limitation, retention and activation controls. Test denied-consent and contextual-only cases; do not equate Consent Mode with legal permission.

### DPA-T06-CH04 — Inventory, Formats & Deal Types

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** OpenRTB provides format/impression objects relevant to banner, video, audio, native and DOOH transaction context. Google Ad Manager deal comparison and DV360 Programmatic Guaranteed clarify Google-specific reservation and delivery behaviour, not a neutral cross-publisher inventory catalogue.

**Material gap:** CTV/audio/native/in-app/DOOH specs, scale, measurement eligibility, suitability, commercial terms and local publisher availability require format- and seller-specific documentation.

**Required next step:** Compare six inventory types on audience context, supply, creative specs, device, deal availability, measurement, quality and net cost. Mark Google-specific behaviour separately and verify Indonesian inventory availability.

### DPA-T06-CH05 — DSP Architecture & Platform Navigation

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** The Trade Desk and StackAdapt routes introduce DSP ecosystem concepts; DV360 line-item documentation provides an exact operating object. These remain vendor-specific, and a learning course does not guarantee a live buying seat or partner access.

**Material gap:** Exact DV360 hierarchy, advertiser/partner permissions, account prerequisites, Amazon DSP comparison and a safe lab environment are not fully mapped. Tool access must not be implied by course completion.

**Required next step:** Create a synthetic DV360 hierarchy from partner/advertiser through campaign, insertion order and line item, covering naming, targeting, budget, flight, creative, permissions and QA. Distinguish demo from production access.

### DPA-T06-CH06 — Campaign Structure, Trafficking & Creative Setup

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** DV360 line-item setup and CM360 placement-tag documentation cover important trafficking objects; CM360 macro reference supports URL/tag QA. These are primary for Google's stack but not a complete vendor-neutral trafficking SOP or contractual approval hierarchy.

**Material gap:** Approved IO/brief and live platform settings remain authoritative; a trafficking sheet is a control register, not a contract/system of record. Creative specs, redirects, macros, consent and deal QA differ by vendor and placement.

**Required next step:** Reconcile signed IO/approved brief, DSP line item, CM360 placement/ad/creative, click URL, macro, tag and deal ID. Include wrong landing page, duplicate tracker, broken redirect and rejected creative cases.

### DPA-T06-CH07 — Bidding, Budget, Pacing & Frequency Management

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** DV360 documentation explains budget hierarchy, pacing modes and frequency caps, including how insertion-order limits constrain line-item delivery. It is operationally relevant, but these controls should not be generalised to every DSP.

**Material gap:** Bid shading, auction pressure, win-rate/clearing-price diagnosis, conversion-signal quality and commercial bid/budget trade-offs need further evidence. DV360 pacing/caps are product-specific.

**Required next step:** Extend the pacing simulator with flight and daily budgets, IO/line-item caps, win rate, floor, CPM, reach/frequency and signal quality. Require a reasoned change log with underdelivery, overspend and fatigue scenarios.

### DPA-T06-CH08 — PMP, Preferred Deals & Programmatic Guaranteed

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** Google Ad Manager compares deal types and DV360 Programmatic Guaranteed documentation describes proposal acceptance, contracted quantity and publisher-side pacing. This supports the guaranteed vs non-guaranteed distinction, but is platform/contract specific.

**Material gap:** Buyer/seller seat compatibility, deal IDs, private-auction floors, fixed prices, priority, underdelivery, makegoods, cancellation and billing need full commercial examples and buyer-side workflow evidence.

**Required next step:** Build a three-deal comparison with IDs, price/floor, dates, format, targeting, guarantee, volume, delivery and escalation. Reconcile activation with signed terms and platform acceptance.

### DPA-T06-CH09 — Brand Safety, Viewability, IVT & Supply Quality

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** IAB Tech Lab ads.txt/sellers.json/SupplyChain support seller-path transparency. MRC viewability and IAB/MRC attention standards define measurement boundaries. They reinforce that seller authorisation, viewability, attention, brand safety/suitability and IVT are separate constructs.

**Material gap:** Supply-chain files do not certify human traffic, viewability or suitability. Viewability is not attention; vendor IVT/brand-suitability methodology, coverage, exclusions and Indonesia inventory measurement remain unvalidated.

**Required next step:** Create a 10-seller scorecard with authorised path, duplication, fees, IVT, viewability, suitability, attention, vendor coverage, sample bias and remediation owner. Keep each metric separate.

### DPA-T06-CH10 — CM360, Floodlight, Attribution & Measurement

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** CM360 documentation defines Floodlight counting options (Every, One per user, One per session) and conversion windows; Google Consent Mode explains tag behaviour under consent states. These are primary for Google implementation but not a neutral DSP/GA4 reconciliation framework.

**Material gap:** Attribution windows/models, click/view-through rules, timezone, reporting latency, redirects, identity, consent and deduplication require a common event dictionary and cross-platform reconciliation case.

**Required next step:** Build an event-to-report matrix across DSP, CM360/Floodlight and GA4: event definition, source, timezone, window, counting, consent, dedupe key and lag. Do not call attributed conversions incremental lift.

### DPA-T06-CH11 — Optimization, Reporting & Post-Campaign Analysis

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** DV360 pacing/frequency documentation and TTD learning provide operational inputs for delivery analysis; MRC/IAB standards constrain quality metrics. No single mapped source teaches a complete commercial post-buy with fee-adjusted outcomes and causal incrementality.

**Material gap:** Full cost-to-outcome reconciliation, margin, reach deduplication, incrementality, holdout design and alternative explanations need additional statistical/financial sources. ROAS alone is insufficient.

**Required next step:** Add synthetic post-buy data for spend/fees, delivery, reach/frequency, quality, conversions, margin and holdout; reconcile denominators and limits. Record changes, evidence, counterfactual and follow-up test.

### DPA-T06-CH12 — Programmatic Capstone

**Desk:** PARTIAL. **Objective fit:** OPEN. **Indonesia access/cost:** OPEN. **Technical accuracy:** OPEN. **SME:** OPEN. **Learner pilot:** OPEN.

**Evidence:** TTD course, OpenRTB, seller-transparency standards, DV360 operating documentation and CM360/Floodlight references jointly cover major supply, activation, trading and measurement components. These are source components, not an integrated validated answer/capstone.

**Material gap:** Integrated worked case, synthetic auction/fee data, buyer-seller terms, trafficking evidence, measurement assumptions and a reproducible rubric are not provided by the learning routes. Live buying access must not be implied.

**Required next step:** Build one SIMULATED advertiser case connecting objective, audience, supply path, deal, DSP configuration, trafficking, pacing, quality, Floodlight/GA4 reconciliation, risks and executive decision; have a trader/measurement SME grade it.

## Formal acceptance boundary

No chapter is PASS. Independent qualified programmatic and measurement reviewers must inspect exact source sections, verify product versions/account access and local inventory/terms, then record reviewer identity, date, evidence and explicit disposition. Do not equate seller transparency with fraud-free inventory, viewability with attention, course completion with a live DSP seat, or platform attribution with incrementality.
