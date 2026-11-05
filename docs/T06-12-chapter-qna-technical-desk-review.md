# T06 — Programmatic Media Buying: 36 Q&A Technical/Editorial Desk Review

**Date:** 5 November 2026  
**Scope:** T06-CH01 through T06-CH12, 36 reflective Q&A items.  
**Disposition:** 36 answers expanded and source-linked for first-pass desk review; formal answer-key, source-fit, editorial and SME approvals remain OPEN.

## What changed

All 36 answer explanations are expanded to 32–50 words, replacing compressed one-line definitions with role-relevant distinctions, operational mechanisms and qualifications. The prior text is retained in the master Q&A register. The canonical guide JavaScript, extracted evidence register, master Q&A CSV and automated triage CSV are synchronized. One question was reworded to remove a false premise: a trafficking sheet is a control/handoff register, not automatically the authoritative source over an approved IO/brief and live platform configuration.

## Technical boundaries and source map

- **DSP/SSP, auction and bid flow:** OpenRTB describes bid requests, bidder responses, exchange auctioning, seat/deal objects and price. [IAB OpenRTB 2.6](https://github.com/InteractiveAdvertisingBureau/openrtb2.x/blob/main/2.6.md).
- **Authorized sellers and supply path:** ads.txt lists publisher-authorized sellers; sellers.json identifies seller entities and intermediaries; SupplyChain object exposes transaction nodes. These improve transparency, not fraud-free guarantees. [ads.txt](https://iabtechlab.com/ads-txt/), [sellers.json](https://iabtechlab.com/sellers-json/).
- **Programmatic foundation and supply path optimization:** [The Trade Desk Programmatic 101](https://edgeacademy.thetradedesk.com/programmatic-101), [Strengthening Your Programmatic Supply Chain](https://edgeacademy.thetradedesk.com/programmatic-supply-chain). These are vendor learning routes.
- **Deal type distinctions:** Google describes Programmatic Guaranteed as reserved inventory at negotiated terms and Preferred Deals as non-guaranteed optional buys. Terms remain platform-specific. [Google Ad Manager deal comparison](https://support.google.com/admanager/answer/7637485?hl=en).
- **Line item and creative:** DV360 line items include inventory, targeting, flight, budget, bid, frequency and assigned creatives; an approved creative is required before serving. [Create a line item](https://support.google.com/displayvideo/answer/2891312?hl=en), [assign creatives](https://support.google.com/displayvideo/answer/2696848?hl=en).
- **Macros and click tracking:** CM360 documents macro expansion and the contexts in which a macro works; placement/click tracker tags have their own requirements. [CM360 macros](https://support.google.com/campaignmanager/table/6096962?hl=en-VC), [placement tags](https://support.google.com/campaignmanager/answer/2826636?hl=en).
- **Budget/pacing and frequency:** DV360 defines pacing modes and hierarchical frequency caps; lower-level delivery can be constrained by insertion-order or campaign caps. [Budget/pacing](https://support.google.com/displayvideo/answer/3114676), [frequency caps](https://support.google.com/displayvideo/answer/2696786?hl=en).
- **Viewability and attention:** MRC viewability criteria commonly use at least 50% pixels for one continuous second for display and two seconds for video. Attention measurement is a distinct construct and method. [MRC Viewable Ad Impression Guidelines](https://mediaratingcouncil.org/sites/default/files/Standards/081815%20Viewable%20Ad%20Impression%20Guideline_v2.0_Final.pdf), [IAB/MRC Attention Measurement Guidelines](https://www.mediaratingcouncil.org/sites/default/files/Standards/IAB_MRC_Attention_Measurement_Guidelines_November_2025.pdf).
- **Floodlight and UTM:** Floodlight counting methods and conversion windows are configurable; UTM labels campaign traffic and is not a substitute for conversion activity measurement. [Floodlight counting](https://support.google.com/campaignmanager/answer/2823400?hl=en), [Google tag for Floodlight](https://support.google.com/campaignmanager/answer/7554821?hl=en), [UTM parameters](https://support.google.com/analytics/answer/10917952?hl=en).

## Caveats retained

1. Auction, Preferred/PMP/PG, deal, pricing and billing behaviour depends on the platform and signed terms; the guide now says so explicitly.
2. ads.txt, sellers.json and SupplyChain support seller/supply-path verification; they do not independently certify IVT, viewability, suitability or human attention.
3. A trafficking sheet is not automatically a contract or system of record. Approved IO/brief and actual platform configuration remain authoritative and must be reconciled.
4. Average CPM aggregates spend and impressions; auction clearing price applies at transaction level under exchange rules. Do not compare without compatible definitions, fee basis and currency.
5. Viewability is an opportunity-to-see measure under a defined standard; it is not attention or proof of a person noticing the ad.
6. Floodlight and GA4 may differ by count method, window, attribution, identity, timezone, consent, dedupe and processing. Reconcile definitions before explaining variance.

**Formal state:** all 36 remain reflective/non-scored. Source references are supporting; no answer is approved. Editorial, source-fit, technical accuracy and SME decisions remain OPEN.
