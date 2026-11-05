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


# Elective 18 — Traditional Media Planning & Buying

**Elective outcome:** plan, evaluate, negotiate, buy, deliver and govern offline media investment across television, radio/audio, print, OOH/DOOH, cinema, sponsorship and integrated offline plans. Digital media buying and programmatic execution remain in their core tracks. Market-specific audience currencies, measurement suppliers, regulation, inventory and trading norms must be verified for Indonesia before this draft is used operationally.

## 18.01 — Traditional Media Ecosystem & Agency Operations

**Learning outcomes:** map the parties in an offline media transaction; explain planning, buying, delivery and reconciliation responsibilities; identify conflicts of interest and decision rights.

**Core lesson.** Offline media is an ecosystem of advertisers, agencies, media owners, sales houses, measurement providers, production suppliers, verification partners and specialist vendors. The same organization may perform more than one role, so the learner must identify who owns inventory, who sells it, who measures audience, who validates delivery and who approves payment. An agency workflow connects brief intake, research, strategy, plan, proposal, negotiation, booking, material delivery, campaign monitoring, post-buy and invoice reconciliation. Clear accountability prevents gaps between what was promised, bought, delivered and billed.

**Workflow.** (1) Identify advertiser, agency, media owner, measurement provider and third-party suppliers. (2) Map each party's commercial interest, data access and accountability. (3) Draw the campaign workflow and approval gates. (4) Assign RACI for budget, schedule, creative, legal, delivery, reporting and payment. (5) Document conflict checks, escalation path and records retention.

**Practice.** Build an ecosystem map and RACI for a fictional national consumer campaign involving a TV broadcaster, radio network, OOH operator, agency and audience-measurement supplier.

**Required artifact and acceptance.** Ecosystem map and campaign workflow. Include all stakeholders, money/inventory/data flows, owners, approvals, handoffs, conflicts and escalation. Every key activity must have one accountable owner.

**Knowledge check.**
1. Why must the media owner and measurement provider be distinguished? **Answer guidance:** one sells or controls inventory; the other supplies audience or delivery evidence under its own methodology. They may be related but are not automatically independent.
2. What is the purpose of a post-buy workflow? **Answer guidance:** reconcile what was planned, contracted, delivered, verified and billed, then capture performance and makegood decisions.

**Glossary.** Media owner: organization controlling or representing media inventory. Sales house: organization selling inventory on behalf of one or more owners. RACI: responsibility matrix identifying Responsible, Accountable, Consulted and Informed roles.

**Sources and limitations.** Agency role evidence and actual Indonesian supplier workflows. Record the market, period and contract basis; do not assume agency structures or titles are identical across groups.

---

## 18.02 — Audience Intelligence & Research

**Learning outcomes:** translate a business audience into a media target; assess research quality and representativeness; document gaps between target audience and measured universe.

**Core lesson.** Audience research begins with the commercial question: whom must the campaign influence, in what geography and purchase context, and what behaviour matters? Demographic descriptions alone often conceal differences in need, category use, media habits, language, affordability and decision authority. Research may combine survey, panel, census, customer data, location data and qualitative insight. Every source has a universe, fieldwork period, sample frame, weighting, question wording and limitation. Do not combine incomparable sources as if they measure the same population.

**Workflow.** (1) Define the target audience and buying/usage behaviour. (2) Specify geography, age or other permitted characteristics, category and time period. (3) Inventory research sources and inspect universe, sample, fieldwork, weighting and method. (4) Identify coverage gaps, duplication and confidence limitations. (5) Translate evidence into a media audience brief and supplier questions.

**Practice.** Compare three fictional audience sources for an Indonesian personal-care category: a syndicated panel, a client CRM extract and a qualitative study. Identify what each can and cannot support.

**Required artifact and acceptance.** Audience intelligence report with audience definition, need-state/context, geography, source metadata, methodology, sample limitations, media behaviours, contradictions and planning implications.

**Knowledge check.**
1. Why is a large sample not automatically representative? **Answer guidance:** sampling frame, recruitment, non-response, weighting and coverage may still bias the result.
2. Can a CRM database estimate the total addressable market? **Answer guidance:** not by itself; CRM describes captured customers under its own coverage and acquisition biases.

**Glossary.** Universe: population a measurement or study is intended to represent. Panel: sample of people or households measured repeatedly. Weighting: adjustment intended to align sample estimates to known population characteristics.

**Sources and limitations.** Local audience research provider methodology, client research and official population statistics. Indonesia market definitions, coverage and licensing must be checked before using a currency or benchmark.

---

## 18.03 — Audience Measurement & Media Data

**Learning outcomes:** interpret reach, frequency, ratings, GRP/TRP and media-specific metrics; inspect measurement methodology; avoid invalid aggregation across currencies.

**Core lesson.** Rating points, reach and frequency are related but not interchangeable. For a defined target and measurement period, GRP is commonly expressed as reach percentage multiplied by average frequency; a rating is an audience percentage under a specified universe and unit. Reach is the share or count exposed at least once; frequency describes repeated exposure among reached units. Print circulation is copies distributed under a defined audit, while readership estimates people reading or accessing a publication. OOH methodologies estimate opportunity or likelihood of exposure using location, visibility and movement assumptions. The unit, universe, period and method are essential to interpretation.

**Workflow.** (1) Read the measurement definition and target universe. (2) Verify period, geography, unit, sample and collection method. (3) Calculate or interpret rating, reach, frequency, GRP/TRP, CPM and CPP only with consistent bases. (4) Inspect duplication, co-viewing, panel error, modeled values and audit status. (5) State what comparisons are valid and what cannot be added or converted.

**Practice.** Use a synthetic TV schedule and two competing audience reports. Calculate GRP and CPP; identify a reach-duplication problem and explain why adding station reach percentages overstates total campaign reach.

**Required artifact and acceptance.** Measurement evaluation with formula sheet, universe, source/method metadata, calculation checks, duplication caveat, confidence limitation and a written recommendation about whether the sources are comparable.

**Knowledge check.**
1. Does 100 GRP mean 100% unique reach? **Answer guidance:** no; it is a gross exposure measure and may include repeated exposures to the same audience.
2. Can OOH opportunity-to-see be treated as a verified individual impression? **Answer guidance:** no; methodology and exposure model determine what the metric represents.

**Glossary.** GRP: gross rating points, commonly reach percentage multiplied by average frequency. CPP: cost per rating point under a specified rating currency. Circulation: copies distributed under a stated definition and audit.

**Sources and limitations.** Local measurement-provider methods, current MRC and relevant media-owner documentation. OAAA DOOH methodology and US/UK audience currencies are references only; they are not Indonesian standards unless locally adopted and independently validated.

---

## 18.04 — Television & Broadcast Planning

**Learning outcomes:** construct a TV/broadcast schedule; evaluate audience composition, reach, frequency and cost; account for inventory and delivery constraints.

**Core lesson.** TV planning balances target audience, programme context, daypart, spot length, schedule weight, reach, frequency, cost and creative suitability. A low-cost spot may deliver little target audience or cluster exposure inefficiently. A schedule must specify station, programme/daypart, date, position, duration, spot count, rating assumption, gross and net cost, audience target and cancellation conditions. Ratings are estimates under a defined measurement system; campaign reach and duplication require a valid cross-programme or cross-channel method. Do not convert a platform forecast into a guarantee.

**Workflow.** (1) Confirm brief, target, geography, dates, objective and budget. (2) Compare station/programme inventory, audience profile and quality. (3) Build alternative schedules and calculate rating points, reach/frequency where supported, CPM/CPP and cost. (4) Apply placement, separation, adjacency and brand-safety rules. (5) Record assumptions, booking deadlines, material specs and reconciliation method.

**Practice.** Prepare two schedules for a fictional consumer launch: one reach-led and one frequency-led. Use simulated ratings and net rates; label all assumptions and test a 10% inventory shortfall.

**Required artifact and acceptance.** TV plan and schedule rationale with target definition, inventory, placement, ratings, GRP, reach/frequency method, cost, schedule weight, creative requirements, exclusions and sensitivity scenario.

**Knowledge check.**
1. Why can two schedules with the same GRP produce different outcomes? **Answer guidance:** audience composition, programme context, reach distribution, frequency, placement and creative fit can differ.
2. What should be checked before combining ratings from separate sources? **Answer guidance:** target universe, measurement period, unit, method, overlap and comparability.

**Glossary.** Daypart: scheduled time band for a broadcast audience. Spot: a paid advertising placement of specified duration. Adjacency: the programme or content surrounding an advertising break.

**Sources and limitations.** Broadcaster inventory and local TV audience measurement methodology. Any vendor academy or international rating currency is supplementary, not a substitute for Indonesian measurement evidence.

---

## 18.05 — Radio & Audio Investment

**Learning outcomes:** compare broadcast, streaming and other audio environments; build a spot or audio schedule; evaluate cost and audience fit.

**Core lesson.** Audio includes terrestrial radio, digital radio, streaming, podcasts and other sound-led environments. These channels differ in audience measurement, buying unit, ad insertion, targeting, reporting and creative context. Radio planning may use station audience, daypart, programme, spot length and frequency; digital audio may use impressions, completed listens or platform-defined actions. Do not equate a broadcast audience estimate with a digital ad-server impression. Creative quality, repetition, language, local relevance and sound environment influence delivery and response.

**Workflow.** (1) Define audience, geography, occasion and role of audio. (2) Compare station, programme, podcast or streaming inventory and measurement currency. (3) Build spot/ad schedule with daypart, length, frequency and budget. (4) Confirm creative production, copy approval, trafficking and proof. (5) Reconcile planned versus delivered spots/listens and evaluate outcomes.

**Practice.** Build a four-week audio plan for a local retail launch with radio and podcast options. Use simulated audience/cost data and separate broadcast reach from digital impression estimates.

**Required artifact and acceptance.** Radio/audio plan with audience rationale, inventory, schedule, spot length, reach/frequency basis, cost, creative spec, measurement definition, delivery proof and evaluation plan.

**Knowledge check.**
1. Why should podcast downloads not automatically be treated as listened-to ads? **Answer guidance:** download, stream, ad delivery and completed listen are different measurement events.
2. Why is frequency important in audio? **Answer guidance:** repetition may aid recall but excessive frequency can waste investment or cause wear-out; assess alongside reach and creative quality.

**Glossary.** Daypart: broadcast time band. Ad insertion: process of placing an ad into audio content. Completion rate: proportion of defined starts that meet a platform's completion rule.

**Sources and limitations.** Radio/audio owner documentation and the Radio Advertising Bureau's Audio Marketing Professional programme as an external learning reference. The AMP credential launched in the United States in 2026; eligibility, cost and relevance to Indonesian buying practice must be checked and must not be represented as an Indonesian professional standard.

---

## 18.06 — Print Media Planning & Buying

**Learning outcomes:** evaluate publication audience and circulation evidence; select format and placement; compare print proposals and delivery terms.

**Core lesson.** Print investment depends on publication audience, editorial context, issue frequency, format, position, geography, circulation and readership methodology. Circulation is not identical to unique readers. A copy may be shared, remain unread or reach a different audience than the campaign's intended target. Compare audited circulation, readership research and publisher claims on their own definitions. Placement premiums, insertions, advertorials, supplements and production costs must be separated from media cost. Editorial association and disclosure rules require review.

**Workflow.** (1) Define target, geography, issue date and communication role. (2) Evaluate publications, editorial context and audience evidence. (3) Compare circulation/readership definition, audit, period and duplication. (4) Select size, position, format, insertion and creative production. (5) Specify material deadline, proof of publication, cancellation and billing terms.

**Practice.** Compare three fictional publication proposals for a financial-services campaign. Detect an apples-to-oranges comparison where one supplier presents circulation, another readership and another claimed monthly visitors.

**Required artifact and acceptance.** Print recommendation and placement plan with source definitions, audience fit, issue schedule, circulation/readership limitations, format, net rates, production fees, disclosure requirements and proof-of-publication.

**Knowledge check.**
1. Are circulation and readership interchangeable? **Answer guidance:** no; circulation counts copies under a defined method, while readership estimates people who read or access the publication.
2. Why separate production fees from media cost? **Answer guidance:** to compare proposals accurately and understand the full cost of the creative/placement package.

**Glossary.** Circulation: number of copies distributed under a stated method. Readership: estimated people reading or accessing a publication. Insertion: a scheduled advertisement placement in a publication or issue.

**Sources and limitations.** Publisher media kits and independent circulation/readership audits. If no independent audit exists, label publisher-provided figures and lower confidence.

---

## 18.07 — OOH & DOOH Investment

**Learning outcomes:** evaluate OOH/DOOH sites and formats; distinguish traffic, opportunity-to-see and modeled exposure; plan coverage and delivery verification.

**Core lesson.** Out-of-home investment is location- and context-dependent. A site evaluation considers audience flow, direction, dwell time, line of sight, obstruction, illumination, operating hours, environment, creative legibility and proximity to a relevant occasion. DOOH adds screen loops, share of voice, proof-of-play and dynamic scheduling. Traffic counts are not automatically people exposed; opportunity-to-see is not equivalent to a verified individual impression. Exposure methodology must state data source, mobility assumptions, visibility, duplication and limitations. Location-level reach should not be summed without a defensible deduplication method.

**Workflow.** (1) Define target geography, audience movement and campaign occasion. (2) Map sites, formats, visibility, dwell and inventory availability. (3) Review audience/exposure methodology, source period and model. (4) Build location/format mix, schedule, share of voice and budget. (5) Specify proof-of-play, photographs, uptime, maintenance, makegoods and post-campaign validation.

**Practice.** Evaluate ten fictional Jakarta OOH/DOOH sites for a retail opening. Use synthetic traffic and visibility data; identify sites with high traffic but poor target or viewing conditions.

**Required artifact and acceptance.** OOH/DOOH plan with location map, format, audience rationale, exposure method, time/loop assumptions, cost, creative spec, proof requirements and limitations.

**Knowledge check.**
1. Does a vehicle passing a billboard prove a person saw the ad? **Answer guidance:** no; traffic is a potential audience input, while visibility and exposure methodology determine the estimated opportunity.
2. Why can site-level reach not simply be added? **Answer guidance:** people may encounter multiple sites; duplication requires an appropriate measurement or model.

**Glossary.** DOOH: digital out-of-home media. Proof-of-play: record that a digital creative played according to schedule. Opportunity-to-see: modeled or estimated chance to see a placement under a stated method.

**Sources and limitations.** OAAA DOOH exposure methodology is a useful technical reference but is US-oriented and dates from 2022. Indonesia site measurement, traffic data, mobility privacy and exposure currency require local validation.

---

## 18.08 — Cinema, Sponsorship & Special Partnerships

**Learning outcomes:** evaluate cinema and partnership inventory; value rights and deliverables; establish measurement and contract controls.

**Core lesson.** Cinema and sponsorship combine audience access with context, association and experience. They may include screen ads, foyer placements, product sampling, event integration, naming rights, category exclusivity, content rights, hospitality and data capture. The proposal should distinguish guaranteed deliverables from estimated exposure, editorial association and optional value-add. A sponsorship valuation is not a simple media-equivalent multiplier; it must explain audience relevance, rights, activation cost, exclusivity, duration, usage rights and evidence of delivery.

**Workflow.** (1) Define objective and desired audience experience. (2) Inventory rights, placements, access, exclusivity and activation options. (3) Value each deliverable using cost, audience, quality and strategic fit. (4) Review production, approvals, safety, data collection, talent and usage rights. (5) Set proof, reporting, cancellation, replacement and makegood terms.

**Practice.** Evaluate a fictional cinema-and-festival package. Separate guaranteed screen spots, estimated attendance, sampling rights, data capture, category exclusivity and optional social posts.

**Required artifact and acceptance.** Partnership proposal and valuation framework with rights matrix, deliverables, value assumptions, activation cost, audience evidence, usage/term limits, measurement, risks and negotiation conditions.

**Knowledge check.**
1. Why is sponsorship value not equal to a media-equivalent figure alone? **Answer guidance:** the package includes rights, activation, exclusivity, experience and strategic value that need separate evidence and valuation.
2. What must be agreed before collecting event attendee data? **Answer guidance:** purpose, notice/consent or other lawful basis, data owner, access, retention, security and permitted follow-up.

**Glossary.** Rights inventory: list of benefits and permissions included in a partnership. Category exclusivity: contractual restriction on competing brands. Makegood: agreed replacement or remedy for an unfulfilled deliverable.

**Sources and limitations.** Actual media-owner, cinema and event partnership proposals; legal review of rights, privacy, sponsorship disclosure and category restrictions is mandatory.

---

## 18.09 — Media Mix & Investment Optimization

**Learning outcomes:** allocate offline budget across channels; compare scenarios and marginal returns; handle audience duplication and measurement limits.

**Core lesson.** Media mix connects target, communication role, schedule, budget and measurement. Reach, frequency, context and cost are not directly comparable across channels without a defined framework. A plan should show why each channel is included, which audience or occasion it contributes, and what trade-off it creates. Use scenarios rather than a single unexplained allocation. Optimize toward the business objective while respecting minimum commitments, inventory, creative supply, geographic coverage and measurement uncertainty. Do not sum cross-media reach without a compatible deduplication method.

**Workflow.** (1) Set objective, target, geography, timing and constraints. (2) Assign roles to TV, audio, print, OOH, cinema and partnerships. (3) Build low/base/high investment scenarios with explicit assumptions. (4) Examine reach, frequency, duplication, marginal cost and channel complementarity. (5) Define reallocation triggers and guardrails.

**Practice.** Allocate a fixed synthetic budget across TV, audio, OOH and print for a regional product launch. Create two alternatives and show how the plan changes if TV inventory becomes unavailable.

**Required artifact and acceptance.** Integrated media flowchart and allocation rationale with budget reconciliation, audience role, reach/frequency basis, assumptions, duplication caveat, marginal trade-offs, inventory dependency and scenario triggers.

**Knowledge check.**
1. Why is the lowest CPM not automatically the best investment? **Answer guidance:** target quality, context, attention, reach, frequency, duplication and business role matter.
2. Can cross-media reach be calculated by adding each channel's reach? **Answer guidance:** not without deduplication and compatible audience definitions.

**Glossary.** Media mix: allocation across media channels. Marginal return: expected additional outcome from the next unit of investment. Duplication: overlap of audience across placements or channels.

**Sources and limitations.** Local audience measurement providers and channel-level post-buy data. International planning tools must be labeled by coverage and cannot create an Indonesia-wide currency by themselves.

---

## 18.10 — Commercial Negotiation & Trading

**Learning outcomes:** evaluate rate cards and proposals; prepare negotiation objectives and BATNA; document commercial terms and risk.

**Core lesson.** A rate card is an asking price, not proof of value or a complete offer. Compare net rates, audience, inventory, position, timing, production, fees, data, exclusivity, value-add, cancellation, payment, proof and makegood terms. Negotiation begins with the advertiser's objective, target, walk-away point, alternatives and approval authority. Concessions should be exchanged deliberately and valued at expected use, not nominal list price. Legal terms, tax, currency, liability, brand safety and cancellation must be escalated to authorized reviewers.

**Workflow.** (1) Build comparable proposals with normalized units and costs. (2) Define target outcome, BATNA, reservation point and tradeable concessions. (3) Prioritize price, quality, added value, inventory, data and flexibility. (4) Record every concession, approval and contractual condition. (5) Reconcile signed terms against booking and invoice.

**Practice.** Run a negotiation simulation between agency and publisher for a campaign with fixed dates and budget. Evaluate an offer containing a discount, bonus spots, a premium placement and a makegood clause.

**Required artifact and acceptance.** Negotiation plan and commercial evaluation with apples-to-apples comparison, BATNA, target/limit, concession strategy, fee/tax treatment, risk, approval, agreed terms and post-negotiation summary.

**Knowledge check.**
1. Why can a 30% discount still be a poor deal? **Answer guidance:** the base rate may be inflated, inventory low-quality, audience irrelevant or added value unusable.
2. What is a BATNA? **Answer guidance:** the best available alternative if the current negotiation does not produce an acceptable agreement.

**Glossary.** Rate card: published or quoted list price. BATNA: best alternative to a negotiated agreement. Reservation point: least favourable deal a party is willing to accept.

**Sources and limitations.** Current publisher proposals, agency procurement rules and legal templates. Public internet-advertising standard terms are reference material only; they are not a substitute for Indonesian contract review or offline-media terms.

---

## 18.11 — Buying Operations & Campaign Execution

**Learning outcomes:** translate an approved plan into accurate bookings; manage material and approval dependencies; maintain a complete audit trail.

**Core lesson.** Buying operations turns strategy into enforceable instructions. The booking must match the approved budget, media plan, owner, inventory, dates, format, audience, pricing and terms. Creative delivery has technical and legal dependencies: duration, aspect, file format, audio level, copy approval, sponsorship integration, proof and deadline. Changes must be versioned and approved; informal email changes can create a dispute between booked and delivered activity. A buying pack should let another operator execute the campaign without verbal context.

**Workflow.** (1) Reconcile approved plan and budget authority. (2) Issue or verify insertion order/booking confirmation and all terms. (3) Collect creative specification, asset, clearance and approval. (4) Confirm schedule, material receipt, trafficking and escalation contacts. (5) Maintain change log and daily/weekly delivery checks.

**Practice.** Prepare a buying documentation pack for a mixed TV, radio and OOH campaign. Inject a late creative replacement and a site outage; show change control.

**Required artifact and acceptance.** Booking pack and execution checklist with approved plan, PO/IO, dates, cost, spec, materials, clearance, contacts, RACI, changes, delivery evidence and escalation path.

**Knowledge check.**
1. Why reconcile the booking against the approved plan before sending it? **Answer guidance:** prevent unauthorized spend, wrong dates, inventory, format or deliverables.
2. What is the minimum evidence for a material change? **Answer guidance:** changed specification, reason, impact, approver, owner, effective date and updated confirmation.

**Glossary.** Insertion order: commercial instruction/contract document specifying placement and terms. Material deadline: final date for accepted creative assets. Change control: documented approval process for modifications.

**Sources and limitations.** Agency procurement and publisher booking templates. Legal interpretation of IOs and PO terms must be handled by authorized counsel.

---

## 18.12 — Delivery Assurance & Post-Buy

**Learning outcomes:** reconcile planned, contracted, delivered and billed activity; assess proof; resolve shortfalls and makegoods.

**Core lesson.** Post-buy compares plan, booking, actual delivery, measurement and invoice. Each number must retain its source and definition. A missing spot, incorrect date, poor placement, screen downtime or audience underdelivery is not the same issue and needs different evidence. Makegood, credit or refund depends on contract terms, tolerance, deadlines and proof. A good post-buy does not hide shortfall inside a blended average; it identifies root cause, financial exposure and the remedy agreed with the owner.

**Workflow.** (1) Collect approved plan, signed booking and delivery logs. (2) Obtain proof-of-airing, proof-of-publication, proof-of-play, photos or relevant third-party measurement. (3) Reconcile booked versus delivered by line item. (4) Calculate under/over delivery and invoice variance using contractual rules. (5) Agree remedy, owner, deadline and closure evidence; capture next-cycle learning.

**Practice.** A synthetic DOOH buy has 12% underdelivery across three locations and a TV spot aired in the wrong daypart. Calculate the disputed delivery and propose remedies under a stated mock contract.

**Required artifact and acceptance.** Post-buy report and reconciliation log with line-level planned/booked/delivered/billed values, evidence links, variance, root cause, contract clause, remedy, approval and closure.

**Knowledge check.**
1. Why is a blended campaign total insufficient to settle a placement dispute? **Answer guidance:** line-level detail is needed to identify which contracted deliverable failed and which remedy applies.
2. Is a makegood always preferable to a credit? **Answer guidance:** no; value, timing, audience, campaign purpose and contractual remedy determine suitability.

**Glossary.** Proof-of-airing: evidence that a broadcast spot ran. Proof-of-play: system evidence of a digital screen playing an asset. Makegood: replacement delivery or other agreed remedy.

**Sources and limitations.** Signed insertion orders, delivery evidence, publisher logs and finance reconciliation. Avoid claiming independent verification where only supplier self-report is available.

---

## 18.13 — Cross-Media Measurement & Investment Governance

**Learning outcomes:** establish comparable measurement principles; create auditability and controls; govern conflicts, data and investment risk.

**Core lesson.** Governance protects the integrity of investment decisions. A measurement scorecard should distinguish delivery, audience, quality, brand outcome and business outcome. Cross-media reach requires compatible universes, time periods and deduplication; otherwise present separate channel measures and explain the gap. Procurement controls cover authorization, conflicts, rebates or value-add disclosure, supplier selection, contract storage, invoice verification and records retention. Third-party measurement can improve assurance but is not automatically error-free or available for every market and format.

**Workflow.** (1) Define governance objectives, decision rights and measurement scope. (2) Create metric dictionary and source hierarchy. (3) Design procurement, conflict disclosure, approval and invoice controls. (4) Require evidence and exception handling for each major investment. (5) Review supplier performance, data access, audit findings and corrective action.

**Practice.** Design a governance framework for a fictional annual media investment with multiple agencies and suppliers. Include a conflict declaration, approval matrix, evidence hierarchy and exception log.

**Required artifact and acceptance.** Governance framework and measurement scorecard with metric definitions, source hierarchy, audit trail, approval limits, conflicts, supplier scorecard, invoice checks, privacy, retention and escalation.

**Knowledge check.**
1. Why can a third-party report still require QA? **Answer guidance:** methodology, sample, coverage, data processing and applicability may still be limited or misunderstood.
2. What should happen when two sources report conflicting audience values? **Answer guidance:** preserve both definitions, examine methods and time periods, identify a governing source for the decision and document unresolved uncertainty.

**Glossary.** Source hierarchy: agreed order for authoritative evidence. Exception log: register of deviations and resolutions. Investment governance: controls over planning, authorization, delivery, measurement and reconciliation.

**Sources and limitations.** Current MRC/IAB or applicable measurement standards, local measurement-provider documentation, procurement policy and Indonesian legal/privacy requirements. Do not import US/UK currencies or regulatory rules without local adoption evidence.

---

## 18.14 — Senior Investment Leadership Capstone

**Learning outcomes:** lead an integrated offline investment recommendation; defend commercial and measurement assumptions; present delivery and governance accountability.

**Core lesson.** The senior capstone tests the entire investment chain from client brief to post-buy. It must show why each channel is selected, what role it plays, how audience evidence supports the decision, how the plan is bought and delivered, and how the investment will be reconciled. Leadership requires more than a schedule: it requires commercial judgment, supplier management, team design, scenario planning, escalation, transparency and client communication. All simulated data must be labelled; local audience and trading claims require current source evidence.

**Workflow.** (1) Frame business objective, target, geography, budget and risk. (2) Build audience evidence and channel strategy. (3) Produce TV/audio/print/OOH/cinema scenarios and a commercial comparison. (4) Create booking, delivery, governance and post-buy controls. (5) Present the investment decision, uncertainty, trade-offs and 90-day operating plan.

**Practice.** Build a senior integrated offline plan for a fictional consumer brand launching in five Indonesian cities. Include a national and local mix, a fixed budget, a supplier conflict scenario and a 10% delivery shortfall scenario.

**Required artifact and acceptance.** Senior investment plan and client presentation plus workbook. Include brief, target, source methodology, channel roles, schedules, budget, negotiated terms, buying pack, delivery evidence model, measurement scorecard, risk/governance, post-buy and executive recommendation.

**Knowledge check.**
1. What invalidates a senior capstone despite a persuasive media plan? **Answer guidance:** unsupported audience claims, non-comparable metrics, unapproved terms, missing delivery controls or invented market evidence.
2. How should local-market uncertainty be presented? **Answer guidance:** identify what is known, source and date, what is assumed, what cannot be compared, and what supplier or independent validation is still required.

**Glossary.** Investment stewardship: accountable management of spend, terms, delivery and evidence. Scenario planning: comparison of plausible operating conditions and decisions. Post-buy: formal reconciliation and evaluation after media delivery.

**Sources and limitations.** All chapter sources, current Indonesian supplier proposals, verified local audience methodologies, contracts and legal/finance review. The capstone must not use US/UK benchmarks as Indonesia facts without local validation.

---

## Programme-level QA and validation status

| Requirement | Draft coverage | Validation status |
|---|---|---|
| 28 chapter purposes and learning outcomes | 28 / 28 | Authored; role-level validation pending |
| Teaching narrative and chapter workflow | 28 / 28 | Authored; SME review pending |
| Practical exercise and required artifact | 28 / 28 | Authored; learner pilot pending |
| Observable acceptance criteria | 28 / 28 | Drafted; calibration pending |
| Knowledge checks with answer guidance | 56 / 56 | Drafted; SME answer-key approval pending |
| Glossary entries | 84 / 84 | Drafted; terminology review pending |
| Source routes and explicit caveats | 28 / 28 | Candidate references; current price/access/region and chapter-level fit validation pending |
| Common five-dimension learner rubric | 1 shared standard | Inherited from existing rubric draft; assessor calibration pending |
| Indonesian market and legal review | CRO and Traditional Media | OPEN — local practitioner/legal review required |
| Job-description and employer competency validation | 28 chapter mappings | OPEN — direct/adjacent role evidence must be rechecked |
| Learner pilot and workload calibration | 0 completed | NOT RUN |
| Formal SME sign-off | 0 completed | NOT SIGNED OFF |

**Release rule:** this file completes the first full written draft of all 28 elective chapters. It does not make the electives final or validated. Before learner release, each chapter needs an evidence register, verified learning sources, calibrated assessment, role/JD mapping, Indonesia-market review, workload pilot, and named SME approval.