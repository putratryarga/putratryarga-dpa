# T10 — Analytics & Measurement: 30 Q&A Technical/Editorial Desk Review

**Date:** 5 November 2026 · **Scope:** T10-CH01 through T10-CH10, 30 reflective Q&A items.  
**Disposition:** 30 answer explanations expanded and source-mapped for first-pass desk review; answer-key, editorial, source-fit and SME approvals remain OPEN.

## Technical distinctions enforced

1. **Metric and KPI design:** identify business decision, population, grain, formula, numerator/denominator, source, timezone, refresh and limitation before building a dashboard.
2. **Data grain and joins:** row-level detail must be known before joining or aggregating. One-to-many/many-to-many joins can multiply spend or conversions; validate cardinality, row counts, unmatched records and totals.
3. **GA4 vs platform measurement:** attribution model, eligible channels, lookback window and property/account timezone affect reporting. [GA4 attribution settings](https://support.google.com/analytics/answer/10597962).
4. **GA4 BigQuery export:** event export uses daily event tables and may include intraday exports. Understand schema and event grain before comparing sessions, ad impressions or CRM orders. [BigQuery export schema](https://support.google.com/analytics/answer/7029846?hl=en).
5. **SQL:** WHERE filters input rows before aggregation; HAVING filters grouped results. Query correctness also requires business-grain validation, not only syntax. [GoogleSQL query syntax](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax).
6. **Descriptive vs causal:** decomposition can locate a mathematical driver but not prove causality. Confounding, reverse causality, seasonality and selection require suitable design and assumptions. [OpenIntro IMS2](https://www.openintro.org/book/ims/), [Causal Inference: What If](https://miguelhernan.org/whatifbook).
7. **Attribution vs incrementality:** attribution assigns credit under a model/window. Incrementality estimates change against a counterfactual. Meridian warns experiment and MMM estimands may differ; translating experiment results into MMM priors adds uncertainty. [Meridian calibration guidance](https://developers.google.com/meridian/docs/advanced-modeling/roi-priors-and-calibration).
8. **Experiment statistics:** significance is not practical value. Fixed-horizon repeated peeking can inflate false-positive risk unless a valid sequential method is specified. Platform-specific engines are not universal inference methods. [OpenIntro IMS2](https://www.openintro.org/book/ims/), [Optimizely significance guidance](https://support.optimizely.com/hc/en-us/articles/39078186260365-Change-the-statistical-significance-setting-in-Optimizely-Experimentation).
9. **Dashboard and storytelling:** visual design should follow user decisions, metric definitions, data freshness and drill-down needs. [Tableau visual best practices](https://help.tableau.com/current/blueprint/en-us/bp_visual_best_practices.htm).

## Source boundaries

- Google documentation is authoritative for the named Google product behaviour, not every analytics platform.
- OpenIntro IMS2 is an introductory statistics text; complex causal designs require further methods training and expert review.
- Hernán and Robins' *What If* is a causal inference reference, not a substitute for design-specific assumptions or independent review.
- Meridian documents Google's MMM calibration method; it does not prove a particular experiment or model is valid.
- Optimizely documents its own Stats Engine/settings; do not generalize its implementation to all testing systems.

**Formal state:** all 30 remain reflective/non-scored. Source references are supportive; answer-review, editorial, source-fit and SME states remain OPEN.
