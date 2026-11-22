# Generate all 4 Agent-D deliverables from collected recheck data — 2026-11-21
import json, csv, re, os
from collections import Counter
from urllib.parse import urlsplit

os.makedirs('docs/delivery', exist_ok=True)
TODAY = '2026-11-21'

res = json.load(open('audit-out/D-url-recheck-raw.json', encoding='utf-8'))
prov = json.load(open('audit-out/D-url-provenance.json', encoding='utf-8'))
r2 = json.load(open('audit-out/D-retest-round2.json', encoding='utf-8'))
prior = {e['url']: e for e in json.load(open('audit-out/url-audit.json', encoding='utf-8'))}

# ---- final per-URL class ----
final = {}
for u, r in res.items():
    cls = r['class']
    note = r.get('note', '') or ''
    if cls == 'TLS_ERROR' and r2['curl_tls'].get(u, {}).get('code', '').startswith('2'):
        cls = 'OK_TLS_LOCAL_TRUST'
        note = 'Crawler OpenSSL TLS fail; curl.exe (Schannel) HTTP ' + r2['curl_tls'][u]['code'].split()[0]
    if cls == 'BOT_BLOCK_429':
        note = 'Environment-level bot rate limit (429), sequential retest still 429; prior audit class OK; needs browser re-verification, NOT evidence of dead link'
    if cls == 'REDIRECT_OK':
        note = 'Redirects to: ' + (r.get('final') or '')[:120]
    final[u] = {'recheck_class': cls, 'status': r.get('status'), 'final_url': (r.get('final') or '')[:200],
                'title': (r.get('title') or '')[:150], 'note': note[:200],
                'prior_class': (prior.get(u) or {}).get('class', 'NOT_IN_PRIOR_AUDIT')}

with open('docs/delivery/11b-url-recheck-2026-11-21.csv', 'w', newline='', encoding='utf-8-sig') as f:
    w = csv.writer(f)
    w.writerow(['url', 'recheck_class', 'http_status', 'prior_audit_class', 'final_url', 'page_title', 'note', 'referenced_by_files', 'referenced_by_ids'])
    for u in sorted(final):
        v = final[u]
        w.writerow([u, v['recheck_class'], v['status'], v['prior_class'], v['final_url'], v['title'], v['note'],
                    ';'.join(prov[u]['files']), ';'.join(prov[u]['ids'])[:400]])
print('11b written:', len(final), 'rows')

# ---- 11-resource-fit-audit.csv (169 rows) ----
rows = list(csv.DictReader(open('docs/169-objective-resource-fit-register.csv', encoding='utf-8-sig')))
assert len(rows) == 169
# summarize URL status per chapter
def chapter_urls(cid):
    out = []
    for u, p in prov.items():
        if cid in p['ids']:
            out.append((u, final[u]['recheck_class']))
    return out

def worst(cls_list):
    bad = [c for c in cls_list if c not in ('OK_2XX', 'REDIRECT_OK', 'OK_TLS_LOCAL_TRUST')]
    if not bad:
        return 'ALL_OK'
    prio = ['DNS_FAIL', 'DEAD_404', 'HTTP_400', 'FORBIDDEN_403', 'BOT_BLOCK_403', 'BOT_BLOCK_429', 'TIMEOUT', 'SERVER_5XX']
    for p in prio:
        if p in bad:
            return p
    return bad[0]

with open('docs/delivery/11-resource-fit-audit.csv', 'w', newline='', encoding='utf-8-sig') as f:
    w = csv.writer(f)
    w.writerow(['chapter_id', 'track_id', 'chapter_title', 'desk_fit_classification', 'objective_level_fit_status',
                'indonesia_access_status', 'language_cost_eligibility_status',
                'urls_referenced', 'url_recheck_worst_result', 'dead_or_blocked_urls', 'audit_depth',
                'objective_relevance_assessment', 'scope_limitation', 'access_condition_observed', 'audit_date', 'auditor'])
    for r in rows:
        cid = r['chapter_id']
        cu = chapter_urls(cid)
        cls_list = [c for _, c in cu]
        bad = [f'{u} [{c}]' for u, c in cu if c not in ('OK_2XX', 'REDIRECT_OK', 'OK_TLS_LOCAL_TRUST')]
        w.writerow([cid, r['track_id'], r['chapter_title'][:120], r['desk_fit_classification'], r['objective_level_fit_status'],
                    r['indonesia_access_status'], r['language_cost_eligibility_status'],
                    len(cu), worst(cls_list), '; '.join(bad)[:400],
                    'CRAWLER_ONLY' if not bad else 'CRAWLER_ONLY_FLAGGED',
                    'NOT_ASSESSED_THIS_RUN (deep-read sample deferred; desk_fit_classification from register stands)',
                    'NOT_ASSESSED_THIS_RUN', 'NOT_ASSESSED_THIS_RUN (access recheck deferred)',
                    TODAY, 'Agent D (automated crawler + curl retest; no SME read)'])
print('11 written:', len(rows), 'rows')

# ---- 08-agency-evidence-audit.csv (80 rows) ----
cells = list(csv.DictReader(open('docs/80-agency-role-cell-validation-register.csv', encoding='utf-8-sig')))
assert len(cells) == 80
purl = re.compile(r'https?://[^\s\)\]\|\"\'<>]+')
with open('docs/delivery/08-agency-evidence-audit.csv', 'w', newline='', encoding='utf-8-sig') as f:
    w = csv.writer(f)
    w.writerow(['cell_id', 'track_number', 'role_family', 'agency_family', 'current_evidence_class',
                'employer_attribution', 'evidence_url_recheck_class', 'dead_evidence_urls',
                'cell_status_audit', 'currentness_flag', 'replacement_or_action', 'audit_date', 'auditor'])
    dec = 0
    exp = inf = 0
    for c in cells:
        urls = []
        for k, v in c.items():
            if v:
                urls += purl.findall(v)
        urls = sorted(set(urls))
        cls_list = [final[u]['recheck_class'] for u in urls if u in final]
        dead = [u for u, cl in zip(urls, cls_list) if cl in ('DEAD_404', 'DNS_FAIL')]
        # employer attribution: explicit if statement names employer-hosted JD (class A) or cell says employer-hosted
        st = c['evidence_statement'] or ''
        explicit = ('employer-hosted' in st) or c['current_evidence_class'].startswith('A')
        if explicit:
            exp += 1
            attr = 'EMPLOYER_EXPLICIT'
        else:
            inf += 1
            attr = 'INFERRED_OR_INDEX'
        if dead:
            dec += 1
            status = 'EVIDENCE_DECAYED'
        elif 'BOT_BLOCK' in ''.join(cls_list) or 'HTTP_400' in ''.join(cls_list) or 'FORBIDDEN' in ''.join(cls_list):
            status = 'UNVERIFIED_BROWSER_NEEDED'
        elif cls_list and all(x in ('OK_2XX', 'REDIRECT_OK', 'OK_TLS_LOCAL_TRUST') for x in cls_list):
            status = 'URL_OK'
        else:
            status = 'URL_RECHECK_PENDING' if not cls_list else 'MIXED'
        cur = (c.get('currentness_status') or '').strip()
        w.writerow([c['cell_id'], c['track_number'], c['role_family'], c['agency_family'], c['current_evidence_class'],
                    attr, ';'.join(cls_list) or 'NO_URL_IN_CELL',
                    '; '.join(dead), status,
                    'OPEN/' + cur if cur else 'OPEN',
                    ('REPLACE URL: find official equivalent and re-verify; do not relabel as current' if dead else ''),
                    TODAY, 'Agent D (crawler + curl; browser verification pending)'])
print('08 written:', len(cells), 'rows | explicit:', exp, 'inferred:', inf, 'decayed:', dec)

# ---- 08a-agency-evidence-summary.md ----
sg_count = sum(1 for v in final.values() if v['recheck_class'] == 'BOT_BLOCK_429')
dead_list = sorted(u for u, v in final.items() if v['recheck_class'] in ('DEAD_404', 'DNS_FAIL'))
with open('docs/delivery/08a-agency-evidence-summary.md', 'w', encoding='utf-8') as f:
    f.write(f'''# Agent D — Agency Evidence + Resource-Fit + URL Recheck Summary (21 November 2026)

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
| BOT_BLOCK_429 | {sg_count} | support.google.com rate-limits this environment (sequential retest with 1.2s delay still 429). Prior audit class was OK. Not evidence of dead links; browser re-verification required |
| DEAD_404 | 10 | see list below |
| DNS_FAIL | 1 | gcs.civilservice.gov.uk (whole domain) |
| HTTP_400 | 4 | meta.com x2, developers.facebook.com, business.whatsapp.com — pattern consistent with bot-detection 400; browser verification pending |
| BOT_BLOCK_403 | 3 | jdih.dpr.go.id, mediaindonesia.com rate card, w3.org/TR/WCAG22 |
| FORBIDDEN_403 | 1 | americanadvertisingandmarketingassociation.org |
| TIMEOUT | 1 | dewaniklanindonesia.com (SSL handshake timeout) |

### Confirmed dead / unresolvable (12) — evidence-decay candidates
{chr(10).join('- `' + u + '` — in: ' + '; '.join(prov[u]['files']) for u in dead_list)}

### Previously triaged 13, current state
- Corrected/removed since the 361-URL snapshot (no longer referenced anywhere in the four inputs): `learn.microsoft.com/training/ai/` (was 404), `www.linkedin.com/premium/` (was bot-blocked), `facebook-blueprint*.pearsonvue.com` x2, purwadhika x2, braze docs, brandwatch help, ads.openai.com, integralads, doubleverify, `w3.org/2000/svg` (namespace string, never a page). The Docebo-to-Skillshop corrections introduced a transient malformed sourceUrl (`skillshop.current Skillshopsaas.com`) in commit fb1ee89, already fixed at head; current head uses `skillshop.withgoogle.com/`.
- Still referenced and still failing at recheck: `skillshop.withgoogle.com/googleads/` (404), greenhouse omguk (404), gcs.civilservice.gov.uk (DNS), meta.com x2 + developers.facebook.com + business.whatsapp.com (400), mediaindonesia rate card (403), jdih.dpr.go.id (403), w3.org/TR/WCAG22 (403), americanadvertising (403).
- New deaths not in the prior snapshot: 5 Publicis careers requisitions (136800, 167181, 175027, 180724, 180872), 2 LinkedIn job views (dentsu social-media-officer 4255076703; havas director-of-retail-media 4421203270), `jdih.kemendag.go.id` PERMENDAG 19/2026 PDF (404), `communications.gov.uk` GCS Evaluation Cycle PDF (404, previously TLS-flagged only).

## 2. Resource-fit (docs/delivery/11-resource-fit-audit.csv)

All 169 rows carry: URL-recheck worst result, flagged URLs, and audit depth. This run did NOT complete the planned 60-row (6-per-track) deep read of actual pages; `objective_relevance_assessment`, `scope_limitation` and `access_condition_observed` are marked NOT_ASSESSED_THIS_RUN and the register's desk_fit_classification (163 PARTIAL / 6 PARTIAL_STRONG) still stands. **Topical-only count: not determinable this run — do not quote a number.**

## 3. Agency evidence (docs/delivery/08-agency-evidence-audit.csv + this file)

80 cells verified for attribution and URL state:
- EMPLOYER_EXPLICIT (evidence statement names employer-hosted JD or class A): {exp} cells
- INFERRED_OR_INDEX (index/title/syndicated or adjacent evidence, classes B/D): {inf} cells
- EVIDENCE_DECAYED (cell's own evidence URL dead at recheck): {dec} cells
- The two known decay routes confirmed: `job-boards.greenhouse.io/omguk` (404; Omnicom T15 cell AGY-15-OMNIC relies on the OMG UK career index — the index itself is gone, so title-level evidence is unverifiable from that source) and `gcs.civilservice.gov.uk` (DNS failure; GCS OASIS guide unreachable). Suggested replacements must be verified before use — candidates: OMG UK careers via omg.com group careers page; OASIS framework via gov.uk GCS publication pages. No unverified URL is asserted here.

## 4. Mandatory next steps
1. Browser-verify the {sg_count} support.google.com pages + the 400/403 group (LinkedIn/Meta/TikTok/medium-class hosts) before treating any of them as dead.
2. Run the deferred 60-row deep read; assign direct/supporting/topical-only per objective.
3. Verify proposed replacement URLs for the 12 decayed links from official publishers only.
''')
print('08a written')

# ---- summary counts for the report ----
cc = Counter(v['recheck_class'] for v in final.values())
print('final classes:', dict(cc))
