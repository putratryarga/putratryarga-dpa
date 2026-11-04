/* Original, chapter-specific instructional content for the Paid Social track.
 * Numbers in worked examples are explicitly synthetic. Platform controls are
 * described conceptually because labels and availability can change by account.
 */
var PAID_SOCIAL_GUIDES = [
{
 concept:"Paid social is the managed purchase of advertising inventory on social platforms. A specialist connects business outcomes, platform accounts, identity assets, data sources, audiences, creative, auction delivery, measurement, and optimization. Use Meta and TikTok as the core practice platforms; treat LinkedIn as a B2B elective and Pinterest, Snapchat, Reddit, or X as market-dependent extensions.",
 example:"SIMULATED CASE — an Indonesian FMCG brand appoints an agency to manage Meta and TikTok. The brand retains ownership of its Business Portfolio, Page, Instagram identity, TikTok account, ad accounts, domain, catalog, and Pixel/dataset. The agency receives only the partner/person access needed for campaign work. When the engagement ends, access can be revoked without transferring ownership or sharing personal passwords.",
 steps:[
  "<b>Map the entities and owners.</b> Register the brand/business, Business Portfolio or business center, ad accounts, Page, Instagram identity, TikTok account, website domain, app, catalog, Pixel/dataset, payment profile, and legal owner of each asset.",
  "<b>Separate ownership from access.</b> The business should retain ownership of core brand assets. Assign people and agency partners only the assets and permissions needed for their work.",
  "<b>Build a role matrix.</b> Define who can manage campaigns, creative, audiences, billing, data sources, and business settings. Apply least privilege, two-factor authentication, approval steps, and an offboarding process.",
  "<b>Run an account-readiness check.</b> Verify account status, payment setup, Page/identity connection, domain or app setup where relevant, data-source health, catalog connection, policy restrictions, and backup administrators."
 ],
 practice:"Create an asset-and-permission register for a fictional brand. Include platform, asset type, synthetic account ID, legal owner, agency partner, assigned role, admin backup, 2FA status, last access review, status, and evidence. Mark all IDs SIMULATED; never place real customer or personal-account credentials in the worksheet.",
 checks:[
  {q:"Who should retain ownership of a brand's core digital assets when an agency manages the ads?",a:"The brand or business entity should retain ownership. The agency receives scoped partner/person access, rather than taking ownership or sharing personal passwords."},
  {q:"Why is full admin access not appropriate for every team member?",a:"It increases the impact of mistakes or account compromise. Least-privilege access limits each person to the work they need and makes access reviews and offboarding auditable."},
  {q:"How do an ad account, Page/identity, and Pixel/dataset differ?",a:"The ad account manages paid campaigns and billing; the Page or identity represents the advertiser in the ad; the Pixel/dataset receives measurement events. They are linked assets, not interchangeable objects."}
 ],
 terms:[
  {term:"Business Portfolio / Business Center",definition:"The business-level workspace for managing platform assets and permissions; names and features vary by platform."},
  {term:"Ad account",definition:"The workspace used to create, pay for, manage, and report on advertising campaigns."},
  {term:"Data source",definition:"A source of advertising events or conversion data, such as a Meta Pixel/dataset or TikTok Pixel."},
  {term:"Partner access",definition:"Scoped access granted to an agency or vendor without handing over a personal login."},
  {term:"Least privilege",definition:"Giving a user only the access required to perform an assigned task."}
 ]
},
{
 concept:"A campaign objective describes the result the platform is asked to optimize; the funnel describes the consumer journey; conversion location identifies where the action happens; performance goal and optimization event define the delivery signal. These are related but not interchangeable. Available objectives and labels change by platform, campaign type, and account eligibility, so always confirm the current Ads Manager options.",
 example:"SIMULATED CASE — a skincare brand says it needs more website sales, but the operator chooses Traffic because clicks are inexpensive. This can produce visits without enough purchases. When the website, checkout, event tracking, and consent flow are ready, evaluate a Sales/conversion objective and a Purchase event. If conversion signals are not yet reliable, identify the data gap rather than presenting cheap clicks as sales.",
 steps:[
  "<b>Define the business outcome.</b> Specify purchase, qualified lead, app install, reach, or another outcome, with a baseline, target, reporting period, and cost constraint.",
  "<b>Choose the conversion location.</b> Website, app, instant form, messaging, or another destination changes the user journey, friction, tracking requirement, and lead quality.",
  "<b>Select the objective and performance goal.</b> Use the options available in the platform and align them with the intended business outcome; do not select an objective merely because its label sounds like a funnel stage.",
  "<b>Set the optimization event and KPI.</b> For example, Purchase for website sales or qualified Lead for lead generation. Confirm that the event is valid, defined, and measurable.",
  "<b>Build a measurement hierarchy.</b> Separate the outcome KPI from diagnostic metrics such as CTR/CPC/landing-page views and guardrails such as allowable CPA, margin, refunds, or lead quality."
 ],
 practice:"Create an objective decision tree for three briefs: (A) awareness for a new product, (B) purchases on a website, and (C) consultation leads via Instant Form or messaging. For each, document outcome, platform, current objective option, conversion location, performance goal/event, primary KPI, diagnostic metric, tracking requirement, and why other options are less suitable. Label unresolved assumptions.",
 checks:[
  {q:"What is the difference between an objective and a KPI?",a:"The platform objective is the campaign's optimization direction; the KPI is the measure used to judge the business outcome. Selecting an objective does not itself prove campaign success."},
  {q:"Why is Traffic not automatically appropriate for a brief asking for sales?",a:"Traffic optimizes toward visits or related traffic signals, not necessarily purchases. Low-cost clicks can still produce weak conversion rate, high CPA, or poor margin."},
  {q:"What should be checked before optimizing for Purchase?",a:"Verify checkout, event firing, event parameters, value/currency, duplicate handling where needed, consent controls, and signal quality before using the event for optimization."}
 ],
 terms:[
  {term:"Campaign objective",definition:"The platform's selected direction for optimizing a campaign."},
  {term:"Conversion location",definition:"Where the intended action occurs, such as a website, app, instant form, or messaging destination."},
  {term:"Performance goal",definition:"The delivery outcome the platform is asked to prioritize under the selected objective."},
  {term:"Optimization event",definition:"The event signal used for optimization, such as Purchase or Lead."},
  {term:"Diagnostic metric",definition:"A metric that helps explain performance; it does not replace the business outcome."}
 ]
},
{
 concept:"Audience strategy starts with customer needs and behavior, then becomes data-source rules, segmentation, exclusions, and testable hypotheses. Custom Audiences use permitted first-party or platform-interaction sources; Lookalike Audiences model new prospects from a source audience; interests/behaviors offer targeting signals; broad or automated audience settings give the system more room to find results. Availability differs by platform/account. Do not upload or activate customer data without the required rights, consent, and platform-policy basis.",
 example:"SIMULATED CASE — a store has 20,000 website visitors but only 1,200 buyers. A Lookalike seed made from every visitor may be broad and mixed in intent. A buyer seed may better represent the desired outcome, but could be too small or stale. The specialist must assess source quality, recency, consent, size, overlap, and campaign objective before choosing.",
 steps:[
  "<b>Write the audience hypothesis.</b> Define who should be reached, the need or tension they have, the action they may take, and the evidence supporting the hypothesis.",
  "<b>Audit data sources.</b> Check CRM, Pixel, engagement, customer-list, or app-event quality, recency, coverage, deduplication, consent, and eligibility for advertising use.",
  "<b>Create functional segments.</b> Separate prospecting/new customers, high-intent retargeting, existing-customer/retention, and exclusions. Give each segment a job and KPI.",
  "<b>Manage overlap and scale.</b> Review estimated size, overlap, geographic eligibility, exclusions, and delivery concentration. Avoid splitting audiences into many tiny ad groups without a test rationale.",
  "<b>Plan the experiment.</b> Compare broad/automated targeting with a meaningful hypothesis while holding creative, objective, budget, and measurement as consistent as possible."
 ],
 practice:"Build an audience matrix with segment, business role, source, inclusion rule, exclusion rule, lookback/recency, consent status, estimated size, overlap risk, message angle, KPI, and test hypothesis. Include prospecting, retargeting, and existing-customer/retention. Use synthetic data when permissioned first-party data is unavailable.",
 checks:[
  {q:"Why is a website visitor list not automatically the best Lookalike seed?",a:"Visitors have mixed intent and quality. A seed should represent the outcome sought and be sufficiently valid and useful; verified buyers or qualified leads may be more relevant when the source is lawful and sufficiently large."},
  {q:"What can happen if retargeting has no customer exclusions?",a:"Existing buyers may keep receiving acquisition messages, audiences may overlap, and frequency may rise without incremental value."},
  {q:"Can sensitive customer data be used to build audiences?",a:"Do not use or transmit prohibited sensitive data or data without an appropriate legal basis. Follow consent requirements, privacy law, platform policy, and data-minimization principles."}
 ],
 terms:[
  {term:"Custom Audience",definition:"An audience built from permitted customer or platform-interaction sources."},
  {term:"Lookalike Audience",definition:"A prospecting audience modeled from characteristics of a source audience; its quality depends on the source."},
  {term:"Prospecting",definition:"Paid activity intended to acquire or reach potential new customers."},
  {term:"Retargeting",definition:"Re-engaging people who have interacted with the brand or shown intent."},
  {term:"Audience overlap",definition:"People appearing in multiple audience groups, which can complicate delivery and result interpretation."}
 ]
},
{
 concept:"Campaign architecture organizes objective, budget, audience, placement, creative, and reporting. Meta generally uses Campaign → Ad Set → Ad; TikTok Ads Manager uses Campaign → Ad Group → Ad. The levels are similar in concept, not identical in settings. TikTok campaign setup includes objective and campaign budget; ad groups include settings such as placements, targeting, schedule, optimization, and bid; ads contain identity, creative, copy, CTA, URL, and tracking. Validate the current workflow in each platform.",
 example:"SIMULATED CASE — a brand needs to test two audiences and three creative angles on Meta and TikTok. Creating a separate campaign for every possible combination fragments the budget and complicates reporting. A simpler architecture defines the objective and budget at the correct level, separates only the audience/test cells that need isolation, and gives each ad a traceable creative ID and naming convention.",
 steps:[
  "<b>Start with outcome and market.</b> Separate campaigns when objective, market/geography, budget ownership, or governance genuinely differs.",
  "<b>Design the campaign level.</b> Record platform, objective, campaign type, budget level, special category where relevant, and any experiment setup.",
  "<b>Design the Ad Set / Ad Group level.</b> Define audience, placements, schedule, optimization goal, bid strategy, and budget according to the selected platform.",
  "<b>Design the ad level.</b> Connect identity, post/creative, copy, CTA, destination URL, tracking parameters, and approval status.",
  "<b>Apply naming and QA.</b> Make names consistent and readable; check every ID and relationship against the brief before launch."
 ],
 practice:"Produce two separate blueprints, one for Meta and one for TikTok. Include campaign name/ID, objective, budget level, Ad Set/Ad Group, audience, placement, optimization event, bid strategy, schedule, ad/creative ID, CTA, destination URL, UTM, owner, and QA status. Explain when a group should be split or consolidated.",
 checks:[
  {q:"Can Meta's Campaign → Ad Set → Ad hierarchy be copied word-for-word into TikTok?",a:"No. The high-level hierarchy is comparable, but the object names and available settings differ. Use Campaign → Ad Group → Ad for TikTok and map each setting from the platform documentation."},
  {q:"When should a campaign be split?",a:"When objective, market, budget ownership, governance, or test design requires isolation. Do not split simply to create more rows or because every creative needs its own campaign."},
  {q:"Why create a naming convention before launch?",a:"It improves QA, filtering, reporting, handover, reconciliation, and change audits across campaigns."}
 ],
 terms:[
  {term:"Campaign",definition:"The campaign-level object for objective and selected budget/settings, depending on platform."},
  {term:"Ad Set (Meta)",definition:"Meta's level for settings such as audience, placement, schedule, optimization, and budget/bid, depending on configuration."},
  {term:"Ad Group (TikTok)",definition:"TikTok's level for settings such as placement, audience, schedule, optimization, and bid."},
  {term:"Naming convention",definition:"A consistent naming structure that makes platform, market, objective, audience, creative, and test easy to identify."},
  {term:"Test cell",definition:"A defined unit in an experiment that allows results to be compared fairly."}
 ]
},
{
 concept:"Creative is part of the optimization system, not decoration added after media planning. Start from an audience tension and product truth, then define the angle, hook, proof, format, message, CTA, and landing-page continuity. Each ad should communicate one main proposition and a clear action. Format and placement should respect current platform specifications, safe zones, cropping, aspect ratio, captions/audio, and viewing context. Usage rights for creator content, music, testimonials, and partnership ads must be cleared before amplification.",
 example:"SIMULATED CASE — a healthy-drink brand tests three angles: convenience, taste, and ingredient proof. The offer and landing page remain the same so the first comparison is more likely to reflect the message angle rather than a promotion change. Each angle has two hooks. The team records creative ID, opening seconds, demonstration, proof, CTA, duration, format, and retention metrics.",
 steps:[
  "<b>Find the audience tension.</b> Use reviews, comments, customer interviews, search queries, and sales questions to identify real needs or objections.",
  "<b>Write the creative hypothesis.</b> State the angle, intended audience, reason the message may resonate, proof to show, and action expected.",
  "<b>Build controlled variations.</b> Create an angle × hook × format matrix. Change one primary variable in an initial test unless a properly designed multivariate test has enough volume.",
  "<b>Adapt to placement.</b> Check safe zones, cropping, aspect ratio, thumbnail, on-screen text, captions, audio, CTA, landing page, and ad previews on each platform.",
  "<b>Check policy and rights.</b> Verify product claims, paid-partnership disclosure, creator usage/whitelisting/Spark Ads permission, music licenses, and category rules."
 ],
 practice:"Create three creative concepts for a training product. Each must include audience insight, angle, hook, proof, storyboard/shot list, format/placement, primary copy, CTA, landing-page promise, creator/usage rights, policy check, and hypothesis. Build a test matrix that isolates the main variable and defines diagnostic and outcome metrics.",
 checks:[
  {q:"What is the difference between a hook, an angle, and proof?",a:"The angle is the message perspective or benefit; the hook is the opening that earns attention; proof is evidence that makes the claim credible, such as a verified fact, demonstration, or authorized testimonial."},
  {q:"Why can a high-CTR creative still be a weak performer?",a:"It may attract curiosity without qualified visits or purchases. Check landing-page views, conversion rate, CPA, revenue/margin, and guardrails."},
  {q:"What must be checked before using creator content in ads?",a:"Usage scope and duration, platforms/placements, amplification or whitelisting permission, disclosure, music/asset rights, brand safety, and claims compliance."}
 ],
 terms:[
  {term:"Creative angle",definition:"The message perspective or benefit used to make a proposition relevant to a target audience."},
  {term:"Hook",definition:"The opening visual, audio, or copy intended to earn attention and lead into the main message."},
  {term:"Proof point",definition:"Evidence supporting a claim or product benefit."},
  {term:"Native creative",definition:"Creative adapted to the platform's viewing context and format while retaining brand clarity."},
  {term:"Usage rights / whitelisting",definition:"Permission to reuse or amplify creator content; the scope and duration should be documented."}
 ]
},
{
 concept:"An auction determines which eligible ads receive delivery opportunities. Results are not determined by bid alone; platforms also consider predicted action, relevance/quality, and delivery rules. Distinguish budget, budget level, bid, cost cap/goal, and target ROAS. Available strategies and names differ across platforms and objectives. Do not assume Meta's CBO/ABO language applies identically to TikTok. Set efficiency targets from unit economics, not from a CPM benchmark alone.",
 example:"SIMULATED CASE — an item has AOV Rp150,000 and contribution margin before ads of Rp45,000 per order. The business sets an allowable paid acquisition cost of Rp30,000, leaving Rp15,000 contribution before other costs. The arithmetic revenue ROAS target at that AOV and CPA is 5.0x (Rp150,000 ÷ Rp30,000). This is a business target, not a promise that the auction will deliver it.",
 steps:[
  "<b>Calculate commercial limits.</b> Work out AOV, contribution margin, repeat-purchase assumptions, allowable CPA/CAC, refunds/cancellations, and target ROAS. Separate revenue ROAS from profit ROAS.",
  "<b>Choose the budget level.</b> Decide whether budget control belongs at campaign or ad set/ad group level, according to platform features and campaign objective.",
  "<b>Understand the bid strategy.</b> Distinguish volume/lowest-cost, cost cap/target cost, bid cap, and target ROAS where available. Record what the advertiser controls and what the system optimizes.",
  "<b>Plan pacing.</b> Compare planned with actual spend daily and cumulatively. Flag underdelivery, overspend risk, and any change requiring approval.",
  "<b>Change one material factor at a time.</b> Diagnose signal, audience, bid, budget, creative, conversion path, and competition before editing; record rationale and timestamp."
 ],
 practice:"Build a synthetic budget-and-bidding sheet with AOV, margin, allowable CPA, target ROAS, budget, assumed CTR/CVR, forecast conversions, planned daily spend, actual spend, and variance. Stress-test CPA 25% higher and CVR 20% lower. Recommend continue, test, limit, or stop, with evidence gaps and risks.",
 checks:[
  {q:"Why is bid not the only factor in winning an auction?",a:"Platforms consider more than the bid, including predicted action, relevance or quality signals, and eligibility. A higher bid does not guarantee the most efficient outcome."},
  {q:"What is the difference between budget and bid?",a:"Budget sets or limits spend over a period at a selected level; bid strategy influences auction competition or controls the cost/volume target."},
  {q:"Does a 5x ROAS mean 5x profit?",a:"No. Revenue ROAS is attributed revenue divided by ad spend. Profit requires margin and all relevant costs, including product, fulfilment, discounts, fees, and refunds."}
 ],
 terms:[
  {term:"Auction",definition:"The platform's competition process for deciding which eligible ads receive an opportunity to show."},
  {term:"Bid strategy",definition:"The platform/advertiser rule for bidding or optimizing cost and volume."},
  {term:"Cost cap / target cost",definition:"A cost-control target defined by the platform; not a guarantee that every result will occur at that exact cost."},
  {term:"Pacing",definition:"The rate at which spend is delivered compared with the budget plan and campaign schedule."},
  {term:"Revenue ROAS",definition:"Attributed revenue divided by ad spend; it is not the same as profit or incrementality."}
 ]
},
{
 concept:"Tracking connects ad interactions with website/app actions. A browser Pixel sends events from the browser; Conversions API or Events API sends events through server-side or connected data sources. They can complement one another, but neither removes consent, privacy, or data-minimization requirements. Event design needs a business definition, event name, time, value/currency, source, and required parameters. When the same event is sent through browser and server paths, follow the provider's deduplication rules. TikTok explicitly requires the same event_id through Pixel and Events API for overlapping events. UTM parameters classify traffic; they do not replace event tracking.",
 example:"SIMULATED CASE — one website purchase is sent by both browser Pixel and server Events API. If the two copies represent the same transaction but use different event IDs, the platform may count two events. When the matching event_id is sent on both paths under the platform's rules, the duplicate can be recognized. Do not use one static event_id for every transaction; an ID must distinguish each occurrence.",
 steps:[
  "<b>Define the event taxonomy.</b> Map ViewContent, AddToCart, InitiateCheckout, Lead, and Purchase. Each event needs a trigger, owner, required parameters, and validation criteria.",
  "<b>Design event IDs and deduplication.</b> For an event sent from browser and server, generate one unique event_id per occurrence and pass the identical value on both paths, following each provider's matching rules.",
  "<b>Validate the payload.</b> Check event name, event_id, event time/timezone, value, currency, content IDs, source, consent signal, and parameter format. Do not send passwords, sensitive data, or disallowed PII.",
  "<b>Build UTM taxonomy.</b> Use utm_source, utm_medium, utm_campaign, utm_content, and utm_term consistently. Avoid random casing/spaces, personal information, and parameters that break redirects.",
  "<b>Run end-to-end QA.</b> Test view, add-to-cart, checkout, purchase/lead; inspect Test Events/diagnostics, event count, deduplication, landing page, redirects, and analytics attribution."
 ],
 practice:"Create an event map and tracking QA sheet for a fictional ecommerce site. Include funnel stage, event name, trigger, event source, event_id rule, parameters, consent dependency, platform destination, dedup rule, UTM fields, test case, expected/actual result, evidence, owner, and defect severity. Include one browser/server duplicate test and its expected count. Mark all data SIMULATED.",
 checks:[
  {q:"What does event_id do when the same event is sent from browser and server?",a:"A matching event ID helps the platform recognize two submissions as copies of one occurrence and deduplicate them under its rules. TikTok explicitly requires the same event_id for overlapping Pixel and Events API events."},
  {q:"Can UTM parameters replace Pixel or Conversions API?",a:"No. UTMs classify campaign traffic in analytics; Pixel/API send event and parameter data to the ad platform. They serve different measurement functions."},
  {q:"Does server-side tracking allow consent to be bypassed?",a:"No. Server delivery does not remove privacy, consent, legal-basis, platform-policy, or data-minimization obligations."}
 ],
 terms:[
  {term:"Pixel",definition:"A browser-based platform tag/library that sends events from browser interactions."},
  {term:"Conversions API / Events API",definition:"An interface for sending event and parameter data from advertiser systems to a platform."},
  {term:"event_id",definition:"An identifier unique to one event occurrence, used to connect/deduplicate copies sent through multiple paths."},
  {term:"Event deduplication",definition:"The process of recognizing duplicate submissions that represent one conversion."},
  {term:"UTM",definition:"URL query parameters such as utm_source and utm_campaign used to classify campaign traffic in analytics."},
  {term:"Consent signal",definition:"A user's permission or choice that governs whether data may be collected or shared."}
 ]
},
{
 concept:"The learning phase is a delivery period in which the system explores and gathers signals to find people likely to meet the optimization goal. Performance may fluctuate; fluctuation alone does not prove that a campaign has failed. Do not apply one threshold to all platforms or objectives. TikTok's June 2026 general guidance says volatility often begins to decline after about 25 campaign results or 7 days; this is indicative, not a guaranteed completion rule. Objective-specific help pages may give different context. Never transfer TikTok's benchmark to Meta.",
 example:"SIMULATED CASE — during the first three days, a purchase campaign's CPA moves up and down. An operator then sharply raises the budget, changes the audience, replaces the creative, and changes the optimization event at once. Performance changes, but the cause is unclear. Better practice is to record a baseline, verify delivery and tracking, inspect learning status, and then make one material change with a clear hypothesis.",
 steps:[
  "<b>Record the context.</b> Save launch date, objective, optimization event, budget/bid, audience, creative count, and learning/delivery status.",
  "<b>Separate volatility from defects.</b> Confirm ads are delivering, events are received, landing pages work, spend is on pace, approvals are valid, and tracking has not broken.",
  "<b>Diagnose frequency and fatigue.</b> Review frequency together with reach, CPM, CTR, video retention, conversion rate, creative age, and audience changes—not frequency alone.",
  "<b>Use a change log.</b> Record budget, bid, audience, event, creative, or structure changes with timestamp, owner, hypothesis, expected impact, and rollback criteria.",
  "<b>Optimize only when evidence supports it.</b> Avoid repeated pausing and major edits without a hypothesis. Check the latest guidance for the platform and objective."
 ],
 practice:"Create a troubleshooting playbook for five symptoms: (1) spend does not start, (2) CPM rises, (3) CTR falls, (4) frequency rises while conversions fall, and (5) purchase/event tracking disappears. For each, document symptom, possible causes, diagnostic checks, required evidence, lowest-risk first action, escalation point, and metric used to validate the fix.",
 checks:[
  {q:"Does 25 results or 7 days guarantee that a TikTok campaign exits learning?",a:"No. The general TikTok article says volatility often begins to decline around those points; it is an indicator of stabilization, not a guaranteed status change for every objective, account, or campaign."},
  {q:"Can TikTok's learning benchmark be applied to Meta?",a:"No. The platforms use different systems and guidance. Check the current documentation for the actual platform and optimization event."},
  {q:"Why is changing budget, audience, creative, and event at once a poor diagnostic approach?",a:"Several factors change simultaneously, so their individual effects cannot be separated. A change log and controlled intervention make the outcome easier to interpret."}
 ],
 terms:[
  {term:"Learning phase",definition:"A delivery period in which the platform gathers signals to optimize toward its selected goal."},
  {term:"Learning volatility",definition:"Performance fluctuation while the system explores; it is not automatically evidence of campaign failure."},
  {term:"Creative fatigue",definition:"A decline in response as people repeatedly see similar assets or as a message loses relevance."},
  {term:"Pacing issue",definition:"Actual spend is materially ahead of or behind the campaign's budget/time plan."},
  {term:"Change log",definition:"A record of configuration changes, owner, timestamp, hypothesis, and the result after the change."}
 ]
},
{
 concept:"Optimization should move from business outcomes to diagnosis, not from one metric to a spontaneous action. CTR, CPC, CPM, video views, and frequency explain delivery; conversion rate, CPA, revenue, margin, lead quality, and retention are closer to business value. A good creative test predefines its hypothesis, primary variable, audience, budget, duration, primary metric, guardrails, and decision rule. An A/B test is not interpretable when multiple variables change together or the reporting basis is inconsistent.",
 example:"SIMULATED CASE — two creatives each spend Rp1,500,000. Creative A records 20 purchases and Rp3,000,000 revenue (CPA Rp75,000; revenue ROAS 2.0x). Creative B records 30 purchases and Rp4,500,000 revenue (CPA Rp50,000; revenue ROAS 3.0x), despite lower CTR. B appears stronger on the simulated business outcomes, but the team must still check margin, refunds, attribution consistency, and whether the volume is sufficient for a reliable conclusion.",
 steps:[
  "<b>Set the metric hierarchy.</b> Start with business outcome; add efficiency (CPA/ROAS), conversion quality, diagnostics (CTR/CPC/CPM/LPV), and guardrails.",
  "<b>Design a readable test.</b> Define hypothesis, primary variable, control, treatment, randomization unit, audience, budget, duration, minimum evidence, and stopping rule.",
  "<b>Read the funnel by creative.</b> Inspect impression → click → landing-page view → conversion. Find drop-offs instead of stopping at CTR or video views.",
  "<b>Keep comparisons consistent.</b> Align attribution window, reporting timezone, conversion definition, spend period, eligibility, and landing-page experience.",
  "<b>State decisions and uncertainty.</b> Record the winning hypothesis, limitations, business impact, next test, and whether an incrementality/holdout study is needed."
 ],
 practice:"Use a SIMULATED dataset for two or three creatives. Calculate CPM, CTR, CPC, landing-page-view rate, CVR, CPA, revenue, revenue ROAS, and contribution after ad costs. Build a table or chart, identify funnel drop-offs, and recommend scale, iterate, hold, or stop. Explain why attributed performance alone cannot prove causal lift without a control/holdout or suitable causal design.",
 checks:[
  {q:"Why can a creative with lower CTR still win commercially?",a:"It may bring fewer but higher-quality visits that convert at a better rate or generate more margin. Read outcome, CPA, revenue/margin, and lead/customer quality alongside CTR."},
  {q:"What should be consistent before comparing two creatives?",a:"Conversion definitions, objective, audience eligibility, attribution window, reporting period, budget/exposure, landing-page experience, and the variable being tested."},
  {q:"Does higher ROAS automatically prove incrementality?",a:"No. ROAS is attributed revenue per ad spend under a measurement setup. Incrementality requires a comparison with a credible counterfactual, such as a holdout or randomized experiment."}
 ],
 terms:[
  {term:"Primary metric",definition:"The main measure that determines the test decision and should be chosen before results are viewed."},
  {term:"Guardrail metric",definition:"A measure that prevents gains in the primary metric from damaging cost, quality, margin, or customer experience."},
  {term:"A/B test",definition:"A controlled experiment comparing variations around a clearly defined primary variable."},
  {term:"Attribution window",definition:"The period and rules used by the platform to connect ad exposure/clicks with a conversion."},
  {term:"Incrementality",definition:"The additional outcome caused by advertising compared with a credible no-ad counterfactual."}
 ]
},
{
 concept:"The capstone tests the ability to connect a business brief to an optimization recommendation that can be defended. A complete working pack shows commercial guardrails, objective, audience, per-platform campaign architecture, creative strategy, budget/bidding, tracking, QA, reporting, and a decision log. Meta and TikTok form the core scope; TikTok Shop/Lead Gen and LinkedIn are added only when the conversion path and business case justify them. Any example figures without advertiser data must be labelled SIMULATED.",
 example:"SIMULATED CASE — an Indonesian consumer brand plans a 30-day website-purchase campaign with a hypothetical Rp30 million budget. The brief includes AOV, contribution margin, target orders, and stock constraints. The plan must show budget allocation, objective/event selection, creative tests, event deduplication, monitoring, and decision points. A forecast must never be presented as an actual result.",
 steps:[
  "<b>Brief and economics.</b> Restate the problem, audience, product readiness, AOV, margin, allowable CPA, revenue ROAS target, budget, period, stock, and constraints; label assumptions.",
  "<b>Strategy and architecture.</b> Define Meta/TikTok roles, objective, conversion location, optimization event, naming, campaign/ad set/ad group/ad structure, audience, placements, budget level, and bid strategy.",
  "<b>Creative and experiment.</b> Deliver angle/hook matrix, platform-format adaptation, creator rights, policy checks, test hypothesis, control/treatment, primary metric, guardrails, and stopping rule.",
  "<b>Measurement and QA.</b> Include event map, Pixel/CAPI or Pixel/Events API plan, event_id/deduplication, consent controls, UTM taxonomy, test-event evidence, link/redirect checks, and launch sign-off.",
  "<b>Reporting and optimization.</b> Prepare pacing and weekly report; analyze funnel, efficiency, creative, audience, frequency, and data quality; defend scale/iterate/hold/stop decisions.",
  "<b>Handover and learning.</b> Package source files, assumptions, version, owner, unresolved risks, and next experiment so another specialist can reproduce the work."
 ],
 practice:"Assemble one capstone folder containing: (1) brief restatement and unit economics, (2) platform role/objective decision, (3) Meta and TikTok architecture, (4) audience matrix, (5) creative strategy and test matrix, (6) budget/bid/pacing sheet, (7) event map + UTM + deduplication plan, (8) pre-launch QA checklist, (9) weekly report using SIMULATED data, and (10) optimization memo. Present the decisions in 8–10 slides. Score each rubric area from 0–3: business logic, platform setup, creative/testing, tracking/QA, commercial analysis, and evidence/limitations. Each area must score at least 2; at least two areas must score 3 before the work is called portfolio-ready.",
 checks:[
  {q:"What makes a capstone portfolio-ready rather than just a campaign mock-up?",a:"A traceable line connects the brief and unit economics to objective, audience, structure, creative, budget, tracking, QA, results, and decisions. The files are reproducible and assumptions/data are honestly labelled."},
  {q:"How should synthetic performance data be presented?",a:"Label every table/chart SIMULATED, explain how it was constructed, and never describe it as an actual campaign or client result."},
  {q:"What belongs in an optimization memo?",a:"The decision, evidence, KPI-versus-target comparison, diagnosis, risk/limitation, owner, timeline, and a specific next test."}
 ],
 terms:[
  {term:"Campaign launch plan",definition:"The pre-launch package covering objective, structure, budget, creative, tracking, QA, and approvals."},
  {term:"Optimization memo",definition:"A post-analysis decision record connecting evidence to action, rationale, risk, and the next experiment."},
  {term:"SIMULATED",definition:"An explicit label stating that figures or outcomes are created for learning, not actual advertiser performance."},
  {term:"Portfolio-ready",definition:"Work that can be explained, reproduced, checked, and includes honest decisions and limitations."},
  {term:"Handover",definition:"Transfer of files, context, IDs, ownership, status, change log, and unresolved issues to the next owner."}
 ]
}
];
