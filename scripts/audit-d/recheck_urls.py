# Agent D — fresh post-fix URL recheck (2026-11-21)
# Directive: separate 2xx / redirects / login gates / bot blocks / TLS errors / genuine 4xx-5xx / DNS failures.
# Do not call a bot-blocked page dead without browser/provider verification.
import re, json, csv, ssl, socket, hashlib
from concurrent.futures import ThreadPoolExecutor, as_completed
import urllib.request, urllib.error, urllib.parse

UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
TIMEOUT = 25

FILES = {
    'resource-mapping.md': 'docs/169-chapter-resource-mapping.md',
    'objective-register.csv': 'docs/169-objective-resource-fit-register.csv',
    'agency-matrix.md': 'docs/80-cell-agency-role-evidence-matrix.md',
    'agency-validation.csv': 'docs/80-agency-role-cell-validation-register.csv',
}
pat = re.compile(r'https?://[^\s\)\]\|\"\'<>]+')

# provenance: url -> {files:set, chapters:set, cells:set}
prov = {}
def add(u, fname, ident):
    d = prov.setdefault(u, {'files': set(), 'ids': set()})
    d['files'].add(fname)
    if ident:
        d['ids'].add(ident)

for fname, path in FILES.items():
    if path.endswith('.csv'):
        rows = list(csv.DictReader(open(path, encoding='utf-8-sig')))
        for r in rows:
            ident = r.get('chapter_id') or r.get('cell_id') or ''
            for k, v in r.items():
                if not v:
                    continue
                for u in pat.findall(v):
                    add(u, fname, ident)
    else:
        text = open(path, encoding='utf-8').read()
        for u in pat.findall(text):
            add(u, fname, '')
print('unique URLs:', len(prov))

prior = json.load(open('audit-out/url-audit.json', encoding='utf-8'))
prior_map = {e['url']: e for e in prior}

ctx_v = ssl.create_default_context()
ctx_u = ssl.create_default_context()
ctx_u.check_hostname = False
ctx_u.verify_mode = ssl.CERT_NONE

LOGIN_MARKERS = re.compile(r'(sign[- ]?in|log[- ]?in|/uas/login|accounts\.google\.com/v3/signin|authwall|session_redirect|please sign in|login required)', re.I)
PAYWALL_HINTS = re.compile(r'(subscribe to (read|continue)|create.{0,20}(free )?account to (read|continue)|paywall|premium article|this article is for subscribers)', re.I)
GEO_HINTS = re.compile(r'(not available in your (country|region)|geo[- ]?block|unavailable in your location)', re.I)
BOT_HINTS = re.compile(r'(captcha|are you a robot|unusual traffic|access denied|blocked|cloudflare|perimeterx|datadome|queue-it|attention required)', re.I)

def classify(url, status, final, headers, body, err):
    low = (body or '')[:4000]
    final = final or url
    if err:
        e = str(err)
        if 'getaddrinfo' in e or 'Name or service' in e or 'No such host' in e or 'nodename' in e:
            return 'DNS_FAIL', e[:120]
        if 'SSLError' in e or 'certificate' in e.lower():
            return 'TLS_ERROR', e[:120]
        if 'timed out' in e.lower() or 'timeout' in e.lower():
            return 'TIMEOUT', e[:120]
        if 'refused' in e.lower():
            return 'CONN_FAIL', e[:120]
        return 'CONN_FAIL', e[:120]
    if status in (200, 201, 202, 203, 204, 206):
        # login-gate detection: page redirected to a login host or body demands login
        if re.search(r'accounts\.google\.com/v3/signin|/uas/login|authwall', final) or (LOGIN_MARKERS.search(low) and len(low) < 4000 and status == 200 and re.search(r'sign', low, re.I) and 'learn' not in final):
            pass  # decide below more carefully
        if re.search(r'accounts\.google\.com/v3/signin|/uas/login|authwall', final):
            return 'LOGIN_GATE_REDIRECT', final[:160]
        if PAYWALL_HINTS.search(low):
            return 'PAYWALL_200', ''
        if GEO_HINTS.search(low):
            return 'GEOBLOCK_200', ''
        if final.rstrip('/') != url.rstrip('/'):
            return 'REDIRECT_OK', final[:160]
        return 'OK_2XX', ''
    if status in (401,):
        return 'LOGIN_GATE_401', ''
    if status == 403:
        if BOT_HINTS.search(low) or headers and any(h in (headers or {}) for h in ('cf-mitigated', 'x-queueit')):
            return 'BOT_BLOCK_403', ''
        return 'FORBIDDEN_403', ''
    if status == 429:
        return 'BOT_BLOCK_429', ''
    if status in (404, 410):
        return 'DEAD_404', ''
    if status == 400:
        if BOT_HINTS.search(low):
            return 'BOT_BLOCK_400', ''
        return 'HTTP_400', ''
    if status in (402,):
        return 'PAYWALL_402', ''
    if status in (451,):
        return 'GEOBLOCK_451', ''
    if 400 <= status < 500:
        return 'HTTP_4XX', str(status)
    if 500 <= status < 600:
        return 'SERVER_5XX', str(status)
    return 'HTTP_OTHER', str(status)

def fetch(url):
    out = {'url': url, 'status': None, 'final': None, 'err': None, 'body_snip': '', 'via_unverified': False, 'redirect_chain': []}
    for attempt, ctx in ((1, ctx_v), (2, ctx_u)):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': 'text/html,application/xhtml+xml,application/pdf,*/*;q=0.8', 'Accept-Language': 'en-US,en;q=0.9,id;q=0.8'})
            with urllib.request.urlopen(req, timeout=TIMEOUT, context=ctx if url.startswith('https') else None) as resp:
                out['status'] = resp.status
                out['final'] = resp.geturl()
                out['redirected'] = resp.geturl().rstrip('/') != url.rstrip('/')
                ct = resp.headers.get('Content-Type', '')
                out['content_type'] = ct
                if 'pdf' in ct.lower():
                    out['body_snip'] = '%PDF'
                else:
                    try:
                        out['body_snip'] = resp.read(120000).decode('utf-8', 'ignore')
                    except Exception as e:
                        out['body_snip'] = ''
                out['via_unverified'] = attempt == 2
                break
        except urllib.error.HTTPError as e:
            out['status'] = e.code
            out['final'] = e.geturl() if hasattr(e, 'geturl') else url
            try:
                out['body_snip'] = e.read(60000).decode('utf-8', 'ignore')
            except Exception:
                out['body_snip'] = ''
            out['headers'] = dict(e.headers or {})
            if e.code in (401, 403, 429, 400):
                break  # real HTTP answer; classification below
            if attempt == 2:
                out['err'] = None
            break
        except Exception as e:
            out['err'] = f'{type(e).__name__}: {e}'
            if attempt == 2:
                break
    cls, note = classify(url, out.get('status'), out.get('final'), out.get('headers'), out.get('body_snip'), out.get('err'))
    return {'url': url, 'status': out.get('status'), 'final': out.get('final'), 'class': cls, 'note': note,
            'via_unverified': out.get('via_unverified', False), 'content_type': out.get('content_type', ''),
            'body_hash': hashlib.md5((out.get('body_snip') or '').encode()).hexdigest()[:10],
            'body_len': len(out.get('body_snip') or ''),
            'title': (re.search(r'<title[^>]*>(.*?)</title>', out.get('body_snip') or '', re.S | re.I).group(1)[:150].strip() if re.search(r'<title[^>]*>(.*?)</title>', out.get('body_snip') or '', re.S | re.I) else '')}

results = {}
with ThreadPoolExecutor(max_workers=20) as ex:
    futs = {ex.submit(fetch, u): u for u in prov}
    done = 0
    for f in as_completed(futs):
        r = f.fetch_result() if False else None
    # collect properly
for f, u in list(futs.items()):
    pass
# NOTE: gather via as_completed again (results collected above lost); re-run collection:
results = {}
with ThreadPoolExecutor(max_workers=20) as ex:
    futs = {ex.submit(fetch, u): u for u in prov}
    import sys, time
    t0 = time.time()
    for f in as_completed(futs):
        u = futs[f]
        try:
            results[u] = f.result()
        except Exception as e:
            results[u] = {'url': u, 'status': None, 'final': None, 'class': 'SCRIPT_ERROR', 'note': str(e)[:120]}
        done += 1
        if done % 40 == 0:
            print(f'{done}/{len(prov)} elapsed {time.time()-t0:.0f}s', flush=True)

from collections import Counter
print(Counter(r['class'] for r in results.values()))
json.dump(results, open('audit-out/D-url-recheck-raw.json', 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
json.dump({u: {'files': sorted(v['files']), 'ids': sorted(v['ids'])} for u, v in prov.items()}, open('audit-out/D-url-provenance.json', 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
print('saved raw + provenance')
