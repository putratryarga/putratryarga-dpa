# T10 — Media Analytics & Measurement: 10-Chapter Source-Fit Review
**Date:** 5 November 2026  
**Scope:** T10-CH01 through T10-CH10, compared against the current learner-guide objective and workflow, mapped resources and current official source evidence.  
**Disposition:** DESK REVIEW COMPLETE FOR FIRST PASS; ALL FORMAL ACCEPTANCE / SME / INDONESIA-ACCESS STATES OPEN.

## Executive assessment

The current T10 content has a coherent end-to-end sequence: business question → source and data quality → platform data models → SQL → dashboard → descriptive/diagnostic analysis → attribution/incrementality/effectiveness → experimentation/statistics → executive storytelling → capstone.

The structure screen passed, but the original resource set was too generic in several places: a broad Google Analytics Skillshop route and IAB Tech Lab measurement pillar could not substantiate every chapter-specific learning outcome. This pass adds GA4 data schema/session/attribution docs, GoogleSQL/BigQuery guidance, Looker Studio calculated fields, Google Meridian, Optimizely experimentation and Tableau visual practices. Current resource mapping is 169 rows / 67 unique URLs.

This does **not** make T10 learner-ready. Every chapter remains formally OPEN for exact section-to-objective fit, Indonesia access, technical accuracy, SME review and assessment/capstone calibration. See the row-level [T10 review CSV](T10-10-chapter-source-fit-review.csv).

## Chapter-by-chapter disposition

| Chapter | Desk-fit | What is covered now | Remaining material gap |
|---|---|---|---|
| CH01 — Business Question, KPI & Measurement Framework | PARTIAL | General measurement context from IAB Tech Lab and GA4 learning | Business-question framing, KPI tree, metric dictionary, ownership and guardrails lack a directly mapped framework |
| CH02 — Data Sources, Taxonomy & Data Quality | PARTIAL | GA4 BigQuery event/user export schema and table structure | Vendor-neutral taxonomy, cross-source grain, quality dimensions, lineage and schema-drift governance remain under-sourced |
| CH03 — GA4, Platform Analytics & CM360 Data | PARTIAL | GA4 session attribution, key-event attribution settings and export schema | CM360/Floodlight, platform-native differences, consent/thresholding, modeled data and reconciliation need direct docs |
| CH04 — Spreadsheet, SQL & Data Extraction | PARTIAL / stronger | SQLBolt, GoogleSQL introduction and BigQuery query-computation guidance | Spreadsheet QA and a reproducible multi-table dataset to expose join fan-out, grain and NULL errors |
| CH05 — Dashboard, Visualization & BI | PARTIAL | Looker Studio calculated fields and Tableau visual-best-practice guidance | Semantic layer, dashboard QA, refresh/access governance and cross-BI-tool differences |
| CH06 — Descriptive & Diagnostic Analytics | PARTIAL | OpenIntro statistical foundations and broad measurement context | Marketing diagnostic workflow, mix-shift/seasonality decomposition, root-cause hypothesis tree and triangulation |
| CH07 — Attribution, Incrementality & Marketing Effectiveness | PARTIAL / stronger | GA4 attribution settings, What If causal inference, Google Meridian and treatment-prior calibration | MTA/CM360-specific sources; experiment vs MMM estimands, counterfactual and uncertainty must be taught explicitly |
| CH08 — Experiment Design, A/B Testing & Statistics | PARTIAL | Optimizely experiment setup/statistical significance plus What If/OpenIntro | MDE, power, sample-size/duration calculations, sequential stopping, contamination and multiplicity governance |
| CH09 — Insight, Recommendation & Executive Storytelling | PARTIAL | Tableau visual best practices for context, chart choice and layout flow | Executive-readout examples, uncertainty, evidence vs interpretation, business impact and actionable recommendation rubric |
| CH10 — Analytics Capstone | PARTIAL | Supporting sources for SQL, analytics, causal methods and measurement | Versioned synthetic dataset, reference solution, tested dashboard/query totals, insight traceability and capstone acceptance evidence |

## Technical findings and guardrails

### 1. Grain and data model
The chapter correctly stresses that event, session, user, order, campaign-day and SKU grains are not interchangeable. GA4's BigQuery export schema is direct evidence for GA4 event/user export structure, but cannot be generalized to CM360, ad platforms, CRM, retailers or finance. A cross-platform dataset must declare primary keys, join cardinality, event/session semantics, timezone, currency and deduplication.

### 2. Attribution is not incrementality
GA4 attribution settings describe how a selected model allocates key-event credit and define lookback windows. That output is not a causal estimate by itself. Google Meridian is an advanced Bayesian MMM framework; its calibration guidance explicitly warns that experiment and MMM estimands may differ and asks users to consider recency, duration, spend scale, media granularity and population. The chapter should retain this distinction whenever platform ROAS, attribution credit, lift and MMM ROI are compared.

### 3. Experiment design requires a calculation artifact
A/B test steps and significance concepts are not a substitute for a documented sample-size and power calculation. The learner must specify the primary metric, guardrails, baseline rate/variance, minimum detectable effect, alpha, power, allocation, expected sample size, duration and stopping rule before launch. Do not treat a vendor's statistical engine or significance setting as a universal neutral standard.

### 4. Dashboard and insight acceptance
Calculated fields support metric expression, while Tableau visual guidance supports visual hierarchy and audience flow. The curriculum still needs a cross-tool dashboard QA checklist and an executive-readout rubric that checks source, denominator, uncertainty, business impact and owner/action—not just visual appearance.

## Source-access observations

Directly opened in the web check: BigQuery GoogleSQL intro; BigQuery performance-computation guidance; Looker Studio calculated fields; GA4 attribution settings; Google Meridian intro and calibration; Optimizely experiment-creation workflow; Tableau visual best practices. The What If author source, W3C and other previously checked sources remain in the overall inventory.

Search-index/source metadata was available for GA4 BigQuery schema, but its support page returned an access/rate-limit issue; GA4 sessions page had a cache miss in the direct fetch; Optimizely's statistical-significance glossary was indexed, but its direct page fetch failed. Those are not marked as confirmed learner access. Check from an Indonesia learner account before release.

## Required next actions, in priority order

1. Add direct Google CM360/Floodlight and cross-platform measurement sources for CH03 and attribution source comparison for CH07.
2. Build one synthetic event/session/order/campaign dataset and SQL test pack for CH02/CH04; include expected row counts and reconciliation assertions.
3. Add an experiment design workbook/calculator for CH08 with independently checked MDE/power/sample-size formulas.
4. Add a dashboard QA checklist and executive insight readout example for CH05/CH09.
5. Build a reference capstone package for CH10 and have a qualified analytics/marketing-science SME review all ten chapters, three Q&A per chapter and chapter rubrics.

**Formal status:** T10 remains PARTIAL. The 10/10 desk-fit rows carry `formal_acceptance_status = OPEN`; no chapter or answer key is marked SME-approved.