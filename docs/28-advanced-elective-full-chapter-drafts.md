# 28 Advanced Elective Chapters — Full Draft Content v0.1

**Status:** Complete first-pass chapter drafts — SME, evidence, resource, assessment and Indonesia-market validation pending.

## Common learner rubric
Each learner artifact is scored on five dimensions, 0–3 each: Technical accuracy; Deliverable completeness; Analysis and judgement; Evidence, QA and governance; Communication and handoff. Convert raw score /15 to 100. Proposed pass ≥80/100 with no critical failure. A score of 0 in technical accuracy or evidence/QA is a critical fail. This learner rubric is separate from the seven-dimension 0–4 chapter audit score.

# Elective 17 — CRO / Growth / Experience Optimization

**Outcome:** diagnose and improve a defined digital journey through research, analytics, UX, experimentation, causal measurement, personalization and programme leadership. CRO is not interchangeable with broad Growth Marketing.


## 17.01 — Growth Economics & Conversion Strategy

**Learning outcomes:** translate a business goal into a conversion objective; model funnel and unit economics; define primary and guardrail metrics.

**Core lesson.** Conversion work starts with the business model, not a button colour. Define who pays, what is purchased, when value is realized, which costs vary with an order and what makes a customer valuable over time. Separate revenue from contribution and cash flow. A funnel is useful only when each stage has an operational definition and a denominator. Lead, qualified lead, opportunity, order and retained customer are not interchangeable. Choose a north-star outcome plus guardrails such as margin, refunds, cancellations, complaints and capacity.

**Workflow.** (1) Map revenue model, customer, offer, pricing, fulfilment and repeat cycle. (2) Build a KPI tree from business outcome to journey behaviours and operational drivers. (3) Calculate baseline conversion and contribution using consistent population and period definitions. (4) List non-digital constraints such as stock, sales response, eligibility, pricing and delivery. (5) Write a conversion charter stating scope, owner, baseline, target, guardrails and exclusions.

**Practice.** Use a synthetic subscription or commerce business. Model traffic, sessions, orders, AOV, gross margin, variable fulfilment cost, refund rate, paid acquisition cost and repeat behaviour. Compare a revenue-growth scenario with a contribution-growth scenario.

**Required artifact and acceptance.** Business/conversion model and KPI tree. Show definitions, formulas, time window, source or synthetic label, assumptions, guardrails, capacity constraints and at least two scenarios. Reconcile subtotals and explain why a higher-revenue option may be rejected.

**Knowledge check.**
1. Why can revenue rise while business quality deteriorates? **Answer guidance:** discounting, acquisition cost, product mix, returns, weak repeat rate and variable costs can erode contribution.
2. When is a conversion problem not a CRO problem? **Answer guidance:** when the binding constraint is product-market fit, stock, price, distribution, delivery, sales capacity or another operational defect outside the tested journey.

**Glossary.** Contribution margin: revenue less the variable costs included in the stated definition. Conversion rate: defined successful events divided by a stated eligible population. Guardrail: a measure that must not deteriorate beyond a defined tolerance.

**Sources and limitations.** Finance-approved unit economics, CRM/order definitions and analytics documentation. Practice values must be labelled SYNTHETIC.

---

## 17.02 — Customer Research & Insight

**Learning outcomes:** choose an appropriate research method; combine qualitative and quantitative evidence; distinguish observations, interpretations and hypotheses.

**Core lesson.** Research reduces decision uncertainty. Quantitative data shows the scale and distribution of behaviour; interviews and usability sessions help explain context, motivation and friction. Neither method proves more than its design permits. Recruitment must reflect the target population and task. Distinguish a customer statement, observed behaviour, analyst interpretation and business hypothesis. Triangulation means comparing independent evidence, not repeating the same assumption in three formats.

**Workflow.** (1) Define the decision and research questions before choosing a method. (2) Specify segment, eligibility, recruitment, sample limitations and consent. (3) Collect behavioural analytics, support themes, reviews, surveys or interviews as appropriate. (4) Code evidence into needs, triggers, barriers and workarounds while preserving context. (5) Triangulate findings and label confidence, contradiction and unanswered questions.

**Practice.** Investigate a synthetic checkout abandonment problem. Combine funnel data, five simulated interview transcripts and a usability observation log. Mark all material synthetic. Produce three insight statements with evidence links and competing explanations.

**Required artifact and acceptance.** Research plan and evidence-backed insight report. Include research questions, method rationale, participant criteria, consent approach, sample caveats, evidence excerpts, coding scheme, contradictory evidence and prioritized opportunities.

**Knowledge check.**
1. Can an interview establish how common a problem is? **Answer guidance:** no; interviews can reveal mechanisms and context, while prevalence requires a design and sample suited to estimation.
2. What is the difference between a finding and an insight? **Answer guidance:** a finding records what was observed; an insight explains why it may matter for a defined audience and decision, with evidence and uncertainty attached.

**Glossary.** Triangulation: comparison of different evidence sources or methods. Sampling frame: defined population or list from which participants or observations are selected. Research bias: systematic distortion introduced by recruitment, wording, measurement or interpretation.

**Sources and limitations.** Research ethics, consent policy, product analytics and customer-support evidence. Do not expose personal or sensitive customer data in portfolio artifacts.

---

## 17.03 — Digital Analytics Architecture

**Learning outcomes:** specify reliable events and parameters; define identity and consent requirements; create implementation and QA controls.

**Core lesson.** Conversion analysis is only as trustworthy as its instrumentation. Start with the business question and event taxonomy, then define exposure, journey step, success and failure. Every event needs a trigger, parameters, owner, source, expected volume and validation rule. Distinguish event collection from identity resolution and attribution. Consent and privacy controls must be designed before data collection; technical ability to collect data does not establish permission to collect it.

**Workflow.** (1) Translate decisions into metrics and an event dictionary. (2) Map page/screen, action, trigger, event name, parameters and allowed values. (3) Specify identity, consent state, retention, access and suppression. (4) Define implementation owner, environment, test data and expected sequence. (5) Test duplicate, missing, malformed, out-of-order and consent-denied cases; record release criteria.

**Practice.** Create a measurement specification for a three-step application form. Include view, start, validation error, step completion, submit and confirmed outcome. Test duplicate submit and consent denied.

**Required artifact and acceptance.** Measurement specification and analytics QA checklist. Include event names, triggers, parameters, data types, sample payloads, consent handling, identity assumptions, source of truth, test cases, owners and known limitations.

**Knowledge check.**
1. Why is a UTM parameter not a conversion event? **Answer guidance:** a UTM labels campaign traffic; a conversion event records a defined user or business action.
2. What should happen when consent is denied? **Answer guidance:** only processing permitted by the applicable consent and legal basis may occur; the event design must document suppression or restricted behaviour.

**Glossary.** Event taxonomy: controlled naming and parameter system for recorded actions. Data layer: structured object/interface exposing page or application context. Consent state: recorded permission governing specified processing.

**Sources and limitations.** Google Analytics and Google Tag Manager documentation, platform implementation guides and internal privacy/legal policy. Vendor defaults do not replace policy review.

---

## 17.04 — Behavioural & Funnel Analytics

**Learning outcomes:** diagnose funnel leakage by segment; quantify opportunity; distinguish measurement defects from genuine user friction.

**Core lesson.** A funnel is a sequence of explicitly defined eligible events. Conversion between adjacent stages is not interchangeable with end-to-end conversion. Segment comparisons require stable definitions, adequate sample and attention to selection effects. A large drop-off is not automatically an opportunity: it may be an expected choice, eligibility filter, instrumentation gap or duplicate event. Begin with data quality and cohort construction, then size the opportunity under realistic constraints.

**Workflow.** (1) Validate event sequence, deduplication, timezone, eligibility and population definitions. (2) Calculate step conversion, abandonment and end-to-end rate with denominators. (3) Segment by device, source, audience, product and relevant context. (4) Quantify affected volume and plausible recoverable share without assuming every exit is fixable. (5) Rank issues by evidence, impact, confidence, effort and risk.

**Practice.** Analyze a synthetic five-step funnel with device and traffic-source splits. Introduce one tracking defect and one genuine UX issue; distinguish them through reconciliation checks.

**Required artifact and acceptance.** Funnel diagnosis and quantified opportunity backlog. Include metric definitions, baseline, segment sample sizes, data-quality checks, opportunity formulas, confidence, alternative explanations and owners.

**Knowledge check.**
1. Why can step conversion be high while end-to-end conversion is low? **Answer guidance:** losses compound across stages; inspect the complete sequence and use consistent denominators.
2. Should every funnel exit be treated as friction? **Answer guidance:** no; some exits are expected, ineligible or intentional. Determine task context before recommending intervention.

**Glossary.** Cohort: group sharing a defined entry event or characteristic over a period. Drop-off: eligible users not completing a defined next step. Instrumentation defect: collection or processing error that makes recorded behaviour differ from actual behaviour.

**Sources and limitations.** Analytics event documentation, queryable synthetic data and product instrumentation specifications.

---

## 17.05 — UX & Digital Experience Optimization

**Learning outcomes:** evaluate usability and information architecture; identify accessibility and journey barriers; prioritize evidence-backed improvements.

**Core lesson.** UX optimization helps a person complete a task accurately and confidently. Inspect information scent, navigation, content hierarchy, mobile behaviour, form labels, error recovery, trust cues, loading, accessibility and post-submit confirmation. Heuristics identify candidate issues but do not prove impact. Heatmaps and session replays supply behavioural clues, not representative explanations of every user. Pair observation with task success and customer research.

**Workflow.** (1) Define target user, task, context and success criteria. (2) Audit supported devices, keyboard paths and error states. (3) Inspect analytics, user feedback, usability evidence and privacy-safe behaviour tools. (4) Describe each issue by user, context, evidence, severity and task impact. (5) Prioritize fixes and specify post-release verification.

**Practice.** Audit a synthetic mobile product-detail-to-checkout journey. Record five issues, distinguish accessibility blockers from preference issues, and prototype two improvements.

**Required artifact and acceptance.** UX/CX audit with prioritized recommendations. Each issue includes screenshot or reproducible description, affected task, evidence, severity rationale, accessibility/privacy consideration, recommended change and verification metric.

**Knowledge check.**
1. Does a heatmap prove that a page element causes conversion? **Answer guidance:** no; it shows interaction patterns in a dataset; causality needs a suitable test or stronger design.
2. Why are keyboard and error states part of conversion quality? **Answer guidance:** they affect task completion and access; excluding them can hide friction and misstate success.

**Glossary.** Information architecture: organization and labelling of content and functions. Task success: whether a user completed a task correctly under stated conditions. Accessibility barrier: condition that prevents or impairs access.

**Sources and limitations.** Microsoft Clarity documentation for behaviour-tool interpretation, product usability evidence and applicable accessibility standards. Session replays require privacy review.

---

## 17.06 — Hypothesis & Opportunity Prioritization

**Learning outcomes:** translate evidence into falsifiable hypotheses; estimate potential value; prioritize opportunities with explicit confidence, effort and risk.

**Core lesson.** A hypothesis states a change, target population, expected mechanism and measurable outcome. It is not a feature request disguised as a sentence. ICE or impact-confidence-effort scores are discussion aids, not objective truth; anchors and evidence must be visible. Estimate value with ranges and distinguish potential gross uplift from net incremental contribution. Include dependencies, customer harm, implementation risk and opportunity cost.

**Workflow.** (1) Write the observed problem and evidence before proposing a solution. (2) State intervention, audience, mechanism, primary metric and guardrails. (3) Estimate eligible population, baseline and realistic effect range. (4) Score impact, confidence, effort, dependencies and risk using defined anchors. (5) Create a ranked backlog and document why lower-ranked ideas were deferred.

**Practice.** Turn eight observed checkout or onboarding issues into hypotheses. Prioritize them under a fixed engineering capacity constraint and show how ranking changes under a risk-first scenario.

**Required artifact and acceptance.** Ranked experiment backlog with traceable evidence, hypothesis statements, metric definitions, value range, confidence rationale, effort/dependency, risk, owner and decision status.

**Knowledge check.**
1. What makes a hypothesis falsifiable? **Answer guidance:** it specifies observable outcomes and conditions under which the expectation would not be supported.
2. Can a prioritization score replace judgement? **Answer guidance:** no; inspect assumptions, uncertainty, constraints and strategic fit.

**Glossary.** Hypothesis: testable statement about change, population, mechanism and outcome. Opportunity sizing: estimate of potential value under explicit assumptions. ICE: heuristic using Impact, Confidence and Ease; anchors must be calibrated.

**Sources and limitations.** Backlog evidence, experimentation policy and finance-approved value assumptions.

---

## 17.07 — Experimentation Design

**Learning outcomes:** choose a valid test design; define treatment, assignment and exposure; pre-specify metrics, guardrails and decision rules.

**Core lesson.** An experiment compares outcomes under a planned assignment mechanism. A/B randomization supports causal inference only when assignment, exposure, measurement and analysis assumptions hold. Define the randomization unit, eligibility, allocation, treatment, contamination risk, duration rationale and stopping rule. The primary metric must reflect the decision; guardrails detect harm. Pre-register analysis and avoid changing success criteria after seeing results.

**Workflow.** (1) Translate the hypothesis into treatment/control and define randomization unit. (2) Specify eligibility, exclusions, assignment, exposure logging and crossover rules. (3) Choose one primary metric plus diagnostic and guardrail metrics. (4) Estimate sample requirement and duration from baseline, minimum detectable effect, alpha, power and traffic. (5) Pre-register analysis, stopping, decision and rollout conditions; QA before exposure.

**Practice.** Design an A/B test for a checkout progress indicator. Specify assignment, exposure event, primary conversion, revenue/margin guardrails, sample-size assumptions, duration constraint and stop conditions.

**Required artifact and acceptance.** Experiment brief and pre-registration plan. It must be implementable by product, engineering and analytics without undocumented decisions; include randomization, event QA, analysis, risk and rollback.

**Knowledge check.**
1. Why must exposure be logged separately from assignment? **Answer guidance:** assignment records intended allocation; exposure confirms the participant received the intended experience.
2. Why choose the primary metric before launch? **Answer guidance:** pre-specification reduces outcome switching and selective reporting.

**Glossary.** Randomization unit: entity assigned to a condition. Exposure: evidence the assigned experience was presented. Guardrail metric: preselected measure for detecting unacceptable harm.

**Sources and limitations.** Optimizely experiment setup documentation and the organization's implementation guide. Vendor instructions do not replace a statistical analysis plan.

---

## 17.08 — Advanced Statistics for Experimentation

**Learning outcomes:** interpret sample size and power; distinguish statistical from practical significance; identify multiplicity, peeking and validity problems.

**Core lesson.** Statistical significance is not business importance. Define the estimand, unit, baseline, effect scale, uncertainty interval, alpha, power and minimum detectable effect. For binary conversion, a planning approximation depends on baseline rate, detectable difference, alpha and power; final methods must account for variance, clustering, repeated observations and platform design. Repeated peeking, unplanned comparisons and post-hoc subgroup hunting can inflate false positives.

**Workflow.** (1) State target effect in absolute and relative terms. (2) Estimate sample size with a documented method and defensible baseline. (3) Check randomization, sample-ratio mismatch, novelty, seasonality, interference and tracking. (4) Report effect estimate, interval and practical interpretation. (5) Account for multiplicity and stopping design; document inconclusive outcomes.

**Practice.** Analyze synthetic binary-conversion and revenue-per-user experiments. Compare effect size, interval width, power assumptions and commercial value; include an inconclusive result.

**Required artifact and acceptance.** Statistical analysis report with assumptions, sample-size method, data checks, effect estimates, uncertainty intervals, multiplicity handling, decision and limitations.

**Knowledge check.**
1. Does p < 0.05 mean the result is commercially important? **Answer guidance:** no; assess effect size, interval, cost, risk and business value.
2. What should happen when a result is inconclusive? **Answer guidance:** report it as inconclusive and decide whether more evidence is worth its cost; do not relabel it a win.

**Glossary.** Power: probability of detecting a specified effect under stated assumptions. Minimum detectable effect: smallest planned detectable effect. Multiplicity: increased false-positive risk from multiple tests.

**Sources and limitations.** Optimizely analysis documentation and reputable statistical references. Numerical thresholds and sample sizes require technical review; no universal test duration is prescribed.

---

## 17.09 — Experimentation Technology & Technical QA

**Learning outcomes:** specify implementation; validate assignment and exposure; test events, rendering, performance, privacy and rollback.

**Core lesson.** A sound design can fail because the experience renders incorrectly, variants leak, assignment changes across sessions or events fire twice. Technical QA covers configuration, targeting, bucketing, exposure, event collection, cross-browser behaviour, performance, accessibility, consent and rollback. Separate implementation correctness from outcome analysis. A test must not launch simply because an editor preview looks right.

**Workflow.** (1) Translate the brief into configuration, code and data contracts. (2) Validate targeting, persistent assignment, rendering and fallback. (3) Test events, deduplication, exposure and analytics reconciliation. (4) Check device/browser, performance, accessibility and consent behaviour. (5) Define staged rollout, monitoring, rollback owner and post-launch verification.

**Practice.** Create an implementation and QA plan for a form-layout experiment, including logged-in/out users, devices, consent denial, cached pages and a rollback failure scenario.

**Required artifact and acceptance.** Implementation plan and test QA log with test matrix, expected/actual output, severity, evidence, owner, fix verification and go/no-go recommendation.

**Knowledge check.**
1. Why is visual preview insufficient QA? **Answer guidance:** it does not verify production targeting, assignment persistence, events, performance, accessibility or rollback.
2. When should a test stop for technical reasons? **Answer guidance:** when assignment, rendering, data integrity, privacy, safety or critical journey is compromised.

**Glossary.** Bucketing: assignment to an experiment condition. Sample-ratio mismatch: observed assignment differs from expected proportions. Rollback: controlled removal of an intervention.

**Sources and limitations.** Optimizely implementation checklist, engineering release controls and privacy/consent policy.

---

## 17.10 — Causal Measurement & Incrementality

**Learning outcomes:** select a credible causal design; distinguish attribution from incrementality; communicate assumptions and generalizability.

**Core lesson.** Attribution assigns credit according to a rule; incrementality estimates what would not have happened without the intervention. A randomized holdout is often strong when feasible, but customer randomization may be unsuitable because of spillover, shared devices, marketplace effects or operational constraints. Geo tests and matched-market designs require comparable regions, sufficient pre-periods and stable boundaries. Difference-in-differences depends on a defensible parallel-trends assumption. Report uncertainty and limits.

**Workflow.** (1) Define causal question, treatment, outcome, population and horizon. (2) Choose design based on randomization feasibility, spillover and available units. (3) Set baseline/pre-period, comparison group and contamination controls. (4) Predefine estimator, uncertainty and sensitivity checks. (5) Interpret causal estimate separately from attributed conversions and platform-reported credit.

**Practice.** Compare a user-level holdout and geo experiment for a fictional regional promotion. Identify where spillover, low volume and pre-trend differences weaken the alternatives.

**Required artifact and acceptance.** Incrementality plan with design rationale, unit, assignment, pre-period, outcome, assumptions, analysis method, sample/region criteria, risks and limitations.

**Knowledge check.**
1. Is attributed revenue automatically incremental revenue? **Answer guidance:** no; attribution records credit under a rule, while incrementality requires a credible counterfactual.
2. What assumption is central to difference-in-differences? **Answer guidance:** treated and comparison groups would have followed parallel outcome trends absent treatment, alongside other design conditions.

**Glossary.** Counterfactual: outcome that would have occurred without intervention. Holdout: units withheld from treatment. Spillover: treatment affects comparison units or outcomes outside the intended boundary.

**Sources and limitations.** Experimentation and econometrics references. Market-specific lift studies require design documentation and independent review.

---

## 17.11 — Personalization & Journey Orchestration

**Learning outcomes:** design eligible audience rules; document data provenance and consent; measure personalization with safeguards.

**Core lesson.** Personalization is a decision system, not the insertion of a first name. Start with a user need or journey context, then decide whether a different experience plausibly improves the outcome. Document data provenance, eligibility, freshness, suppression, frequency, channel conflicts and user control. Avoid sensitive inference and unfair proxies. A personalized experience needs a baseline comparison and a clear exit when data is missing or stale.

**Workflow.** (1) Identify a journey need and define audience rule. (2) Document data source, freshness, purpose, consent, exclusions and access. (3) Design content/offer variants with fallback and frequency policy. (4) Coordinate channel timing, suppression and preference management. (5) Measure incremental journey outcome and monitor complaints, fairness and fatigue.

**Practice.** Design a post-signup onboarding journey for new and returning customers. Include data minimization, fallback content, contact caps and an experiment plan.

**Required artifact and acceptance.** Personalization strategy and measurement plan with audience definitions, data map, consent/purpose, decision rules, variant rationale, fallback, frequency, suppression, KPIs and risk controls.

**Knowledge check.**
1. What is the default when a personalization attribute is missing or stale? **Answer guidance:** use a safe, relevant non-personalized fallback; do not invent the attribute.
2. Why document cross-channel suppression? **Answer guidance:** prevent conflicting, duplicated or excessive communications that harm experience and measurement.

**Glossary.** Audience rule: documented eligibility condition. Suppression: rule preventing ineligible or excessive treatment. Fallback: safe default when personalization cannot be evaluated.

**Sources and limitations.** CRM/CDP documentation, consent-management requirements and internal privacy policy.

---

## 17.12 — Experimentation Programme Management

**Learning outcomes:** establish an experimentation operating model; govern intake and capacity; preserve reusable organizational learning.

**Core lesson.** A mature programme is measured by decision quality and learning, not test count. Governance defines intake, evidence thresholds, prioritization, capacity, design review, QA, launch permissions, analysis ownership, knowledge retention and escalation. Portfolio management balances foundational fixes, high-risk tests and strategic bets. Every experiment needs a decision owner and path for shipping, iterating or stopping. Preserve negative and inconclusive results.

**Workflow.** (1) Set programme charter, scope, decision rights and critical-failure rules. (2) Create intake and triage with readiness requirements. (3) Allocate engineering, design, analytics and research capacity. (4) Run design/statistical/technical review before launch and analysis review after completion. (5) Maintain searchable repository, decision log and quarterly learning review.

**Practice.** Create a quarterly operating model for a product team with one engineer, one analyst and limited design support. Allocate capacity and show escalation for a privacy-critical issue.

**Required artifact and acceptance.** CRO programme operating model with RACI, stages, templates, capacity model, risk gates, review cadence, repository fields, learning KPIs and executive reporting.

**Knowledge check.**
1. Why is number of tests shipped a weak success metric? **Answer guidance:** it rewards volume rather than validity, impact, decision quality or learning.
2. What should be retained when a test loses? **Answer guidance:** hypothesis, design, implementation, checks, results, uncertainty, decision and lessons.

**Glossary.** RACI: responsibility matrix for Responsible, Accountable, Consulted and Informed. Experiment repository: versioned record of tests and decisions. Decision latency: time from evidence availability to an accountable decision.

**Sources and limitations.** Internal product operating model, experimentation review templates and governance standards.

---

## 17.13 — Commercial Impact & Executive Advisory

**Learning outcomes:** translate results into defensible financial impact; compare investment alternatives; present an accountable executive decision.

**Core lesson.** Executives need a decision, not a chart gallery. Convert tested effects into expected contribution using eligible population, adoption, persistence, unit economics and implementation cost. Separate observed results from forecast rollout value. Show uncertainty and downside risk; do not extrapolate a short test into a full-year result without assumptions. A recommendation includes no-change and alternative options, dependencies, implementation owner and a post-launch verification plan.

**Workflow.** (1) Summarize decision, evidence, population and result. (2) Translate effect into a financial model with explicit scenario assumptions. (3) Subtract implementation, operational and variable costs; show sensitivity. (4) Compare alternatives, downside, opportunity cost and risks. (5) Write executive recommendation with owner, timing, guardrails and review date.

**Practice.** Prepare a two-page investment memo for a checkout improvement with uncertain conversion lift and measurable implementation cost.

**Required artifact and acceptance.** Executive business case and recommendation narrative. Show base/upside/downside, net contribution, time horizon, evidence versus forecast, risks, alternatives and decision requested.

**Knowledge check.**
1. Why not multiply a test effect blindly by annual traffic? **Answer guidance:** rollout eligibility, seasonality, adoption, traffic mix, persistence and operating capacity may differ from test conditions.
2. What makes a recommendation actionable? **Answer guidance:** a specific decision, rationale, assumptions, owner, timing, budget, guardrails and review point.

**Glossary.** Net incremental contribution: incremental value after included costs. Sensitivity analysis: showing how decisions change as assumptions vary. Decision memo: concise document setting out evidence, options and accountability.

**Sources and limitations.** Finance-approved unit economics, experiment report, delivery estimate and executive governance templates.

---

## 17.14 — Senior CRO Capstone

**Learning outcomes:** integrate research, analytics, UX, experimentation and leadership; defend technical and causal validity; present a commercial roadmap.

**Core lesson.** The capstone demonstrates a complete chain from business problem to sustained outcome. A polished presentation cannot compensate for invalid measurement or unsupported claims. Show how a research signal becomes an opportunity, why the intervention was selected, how it was implemented and tested, what the result means, and what leadership should do next. Use synthetic evidence where live access is unavailable and label it throughout. Recommendations must respect capacity, privacy and uncertainty.

**Workflow.** (1) Frame business problem, audience, value model and journey scope. (2) Synthesize research, analytics and UX evidence into a prioritized opportunity set. (3) Design and technically QA one experiment plus an appropriate measurement alternative. (4) Analyze results, uncertainty, guardrails and commercial implications. (5) Present a 90-day roadmap, governance model and executive decision request.

**Practice.** Build an end-to-end CRO portfolio for a fictional Indonesian commerce or subscription product. Include one completed synthetic experiment and one future test with a defensible causal plan.

**Required artifact and acceptance.** CRO strategy and portfolio presentation plus evidence workbook. Include business model, research, journey audit, KPI/event map, opportunity backlog, experiment brief, QA record, results/uncertainty, financial case, governance and 90-day roadmap.

**Knowledge check.**
1. What invalidates a capstone despite a polished presentation? **Answer guidance:** fabricated evidence, broken instrumentation, invalid causal claims, privacy failures or unsupported recommendations.
2. How should synthetic results be presented? **Answer guidance:** label every dataset, chart and conclusion as simulated; do not imply real client outcomes.

**Glossary.** Portfolio: initiatives managed together against shared goals and constraints. Evidence chain: traceability from problem through method, result and decision. Critical failure: condition invalidating assessment regardless of aggregate score.

**Sources and limitations.** All chapter sources, experiment repository, technical QA, privacy review and financial assumptions. SME review is required before learner release.
