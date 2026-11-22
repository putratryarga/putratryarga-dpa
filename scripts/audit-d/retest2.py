import json, time, ssl, urllib.request, subprocess, re
from urllib.parse import urlsplit

UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
res = json.load(open('audit-out/D-url-recheck-raw.json', encoding='utf-8'))

# 1) sequential retest of support.google.com 429s
sg = [u for u, r in res.items() if r['class'] == 'BOT_BLOCK_429']
print('support.google.com 429 count:', len(sg))
re_ok, re_other = 0, {}
for i, u in enumerate(sg):
    try:
        req = urllib.request.Request(u, headers={'User-Agent': UA, 'Accept-Language': 'en'})
        with urllib.request.urlopen(req, timeout=20) as r:
            code = r.status
    except urllib.error.HTTPError as e:
        code = e.code
    except Exception as e:
        code = f'ERR:{type(e).__name__}'
    if code == 200:
        re_ok += 1
    else:
        re_other.setdefault(str(code), []).append(u)
    time.sleep(1.2)
print('sequential retest 200:', re_ok, '/', len(sg))
for k, v in re_other.items():
    print('  still failing', k, len(v), v[:3])

# 2) curl retest for TLS_ERROR hosts (Windows Schannel trust)
tls = [u for u, r in res.items() if r['class'] == 'TLS_ERROR']
print('\ncurl retest of', len(tls), 'TLS_ERROR URLs')
curl_out = {}
for u in tls:
    p = subprocess.run(['curl.exe', '-sS', '-o', 'NUL', '-w', '%{http_code} %{redirect_url}',
                        '--max-time', '25', '-A', UA, '-L', '--max-redirs', '6', u],
                       capture_output=True, text=True, timeout=40)
    code = p.stdout.strip()
    curl_out[u] = {'code': code, 'err': p.stderr.strip()[:200]}
    if code.startswith('20') or code.startswith('30'):
        pass
ok_n = sum(1 for v in curl_out.values() if v['code'].startswith('2'))
print('curl 2xx:', ok_n, '/', len(tls))
for u, v in curl_out.items():
    if not v['code'].startswith('2'):
        print('  ', v['code'], '|', u[:110], '|', v['err'][:80])

json.dump({'sg_retest_ok': re_ok, 'sg_still': {k: len(v) for k, v in re_other.items()},
           'curl_tls': curl_out}, open('audit-out/D-retest-round2.json', 'w', encoding='utf-8'), indent=1)
print('\nsaved D-retest-round2.json')
