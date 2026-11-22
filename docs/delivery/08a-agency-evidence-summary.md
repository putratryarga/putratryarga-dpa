# Agent D — Agency Evidence + Resource-Fit + URL Recheck Summary (21 November 2026)

**Branch:** `audit/v3-D-resources-agency` (isolated worktree; no push/merge; main untouched)
**Auditor:** Agent D — automated crawler (273 unique URLs), curl.exe/Schannel TLS retest, register cross-check.
**Method note:** this run is CRAWLER_LEVEL. Browser-level verification of bot-blocked hosts and the 60-row deep-read of actual source pages were scheduled but deferred by the run deadline; they are the mandatory next step before any reclassification is trusted.

## 1. URL recheck (docs/delivery/11b-url-recheck-2026-11-21.csv)

273 unique URLs referenced by the four canonical inputs (resource mapping, 169-objective register, agency matrix, agency validation register). The brief's "181" corresponds to the subset that was class-OK in the prior audit; all previously non-OK URLs and all 111 never-audited URLs were also rechecked, so coverage exceeds the brief.

| Recheck class | Count | Interpretation |
|---|---:|---|
| OK_2XX | 123 | direct 200 |
| REDIRECT_OK | 20 | 200 after redirect; final URL recorded |
| OK_TLS_LOCAL_TRUST | 41 | crawler OpenSSL TLS failure, curl.exe (Schannel) 200 — matches prior audit's SSL_FALSE_POSITIVE; all 35 Workday job boards + awin/ama/nielsen/nngroup/stackadapt reachable |
| BOT_BLOCK_429 | 68 | support.google.com rate-limits this environment (sequential retest with 1.2s delay still 429). Prior audit class was OK. Not evidence of dead links; browser re-verification required |
| DEAD_404 | 11 | 11 observed HTTP 404 responses; one was the superseded Skillshop subpath, now replaced in current source maps by the official root |
| DNS_FAIL | 1 | gcs.civilservice.gov.uk (whole domain) |
| HTTP_400 | 4 | meta.com x2, developers.facebook.com, business.whatsapp.com — pattern consistent with bot-detection 400; browser verification pending |
| BOT_BLOCK_403 | 3 | jdih.dpr.go.id, mediaindonesia.com rate card, w3.org/TR/WCAG22 |
| FORBIDDEN_403 | 1 | americanadvertisingandmarketingassociation.org |
| TIMEOUT | 1 | dewaniklanindonesia.com (SSL handshake timeout) |

### URLs requiring repair or non-crawler verification (13)

The CSV contains 11 HTTP 404 responses, one DNS failure and one TLS handshake timeout. Treat the 404s as URL-level results, not as proof that every publisher or resource is permanently unavailable. The Google Skillshop legacy subpath has been replaced in current learning-source mappings with the official catalogue root; the dated CSV remains an unchanged record of the crawler result.
- `https://careers.publicisgroupe.com/jobs/136800?lang=en-us` — in: agency-validation.csv
- `https://careers.publicisgroupe.com/jobs/167181?lang=en-US` — in: agency-validation.csv
- `https://careers.publicisgroupe.com/jobs/175027?lang=en-US` — in: agency-validation.csv
- `https://careers.publicisgroupe.com/jobs/180724?lang=en-us` — in: agency-validation.csv
- `https://careers.publicisgroupe.com/jobs/180872?lang=en-US` — in: agency-validation.csv
- `https://gcs.civilservice.gov.uk/wp-content/uploads/2020/03/Guide-to-Campaign-Planning-OASIS-Framework.pdf` — in: objective-register.csv; resource-mapping.md
- `https://id.linkedin.com/jobs/view/social-media-officer-contract-at-dentsu-4255076703` — in: agency-validation.csv
- `https://jdih.kemendag.go.id/pdf/Regulasi/2026/PERMENDAG%2019%20TAHUN%202026.pdf` — in: objective-register.csv
- `https://job-boards.greenhouse.io/omguk` — in: agency-matrix.md; agency-validation.csv
- `https://skillshop.withgoogle.com/googleads/` — in: objective-register.csv
- `https://www.communications.gov.uk/wp-content/uploads/2024/02/2024-02-13-GCS-Evaluation-Cycle-FINAL-OFFICIAL.pdf` — in: objective-register.csv; resource-mapping.md
- `https://www.linkedin.com/jobs/view/director-of-retail-media-at-havas-media-network-4421203270` — in: agency-validation.csv
- `https://dewaniklanindonesia.com/etika-pariwara-indonesia-epi/` — TLS handshake timeout; not a confirmed 404

### Previously triaged 13, current state
- Corrected/removed since the 361-URL snapshot (no longer referenced anywhere in the four inputs): `learn.microsoft.com/training/ai/` (was 404), `www.linkedin.com/premium/` (was bot-blocked), `facebook-blueprint*.pearsonvue.com` x2, purwadhika x2, braze docs, brandwatch help, ads.openai.com, integralads, doubleverify, `w3.org/2000/svg` (namespace string, never a page). The Docebo-to-Skillshop corrections introduced a transient malformed sourceUrl (`skillshop.current Skillshopsaas.com`) in commit fb1ee89, already fixed at head; current head uses `skillshop.withgoogle.com/`.
- The historical recheck recorded the Skillshop legacy path as 404; the active runtime and chapter source maps now use `https://skillshop.withgoogle.com/`, which was independently opened successfully on 21 November 2026. Other unresolved crawler states remain as listed above and in the dated CSV.
- New deaths not in the prior snapshot: 5 Publicis careers requisitions (136800, 167181, 175027, 180724, 180872), 2 LinkedIn job views (dentsu social-media-officer 4255076703; havas director-of-retail-media 4421203270), `jdih.kemendag.go.id` PERMENDAG 19/2026 PDF (404), `communications.gov.uk` GCS Evaluation Cycle PDF (404, previously TLS-flagged only).

## 2. Resource-fit (docs/delivery/11-resource-fit-audit.csv)

All 169 rows carry: URL-recheck worst result, flagged URLs, and audit depth. This run did NOT complete the planned 60-row (6-per-track) deep read of actual pages; `objective_relevance_assessment`, `scope_limitation` and `access_condition_observed` are marked NOT_ASSESSED_THIS_RUN and the register's desk_fit_classification (163 PARTIAL / 6 PARTIAL_STRONG) still stands. **Topical-only count: not determinable this run — do not quote a number.**

## 3. Agency evidence (docs/delivery/08-agency-evidence-audit.csv + this file)

80 cells verified for attribution and URL state:
- EMPLOYER_EXPLICIT (evidence statement names employer-hosted JD or class A): 39 cells
- INFERRED_OR_INDEX (index/title/syndicated or adjacent evidence, classes B/D): 41 cells
- EVIDENCE_DECAYED (cell's own evidence URL dead at recheck): 11 cells
- The two known decay routes confirmed: `job-boards.greenhouse.io/omguk` (404; Omnicom T15 cell AGY-15-OMNIC relies on the OMG UK career index — the index itself is gone, so title-level evidence is unverifiable from that source) and `gcs.civilservice.gov.uk` (DNS failure; GCS OASIS guide unreachable). Suggested replacements must be verified before use — candidates: OMG UK careers via omg.com group careers page; OASIS framework via gov.uk GCS publication pages. No unverified URL is asserted here.

## 4. Mandatory next steps
1. Browser-verify the 68 support.google.com pages + the 400/403 group (LinkedIn/Meta/TikTok/medium-class hosts) before treating any of them as dead.
2. Run the deferred 60-row deep read; assign direct/supporting/topical-only per objective.
3. Verify proposed replacement URLs for the 12 decayed links from official publishers only.
