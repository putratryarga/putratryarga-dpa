import json, re
from collections import Counter
from urllib.parse import urlsplit

raw = set()
pat = re.compile(r'https?://[^\s\)\]\|\"\'<>]+')
for p in ['docs/169-chapter-resource-mapping.md', 'docs/169-objective-resource-fit-register.csv',
          'docs/80-cell-agency-role-evidence-matrix.md', 'docs/80-agency-role-cell-validation-register.csv']:
    raw.update(pat.findall(open(p, encoding='utf-8').read()))

res = json.load(open('audit-out/D-url-recheck-raw.json', encoding='utf-8'))
d = set(res.keys())

# check comma-variant bases covered
uncovered = []
for u in raw:
    base = u.rstrip(',')
    if base not in d:
        uncovered.append(base)
print('comma-variant bases not fetched:', len(uncovered))
for u in uncovered[:20]:
    print(' ', u)

print('\n--- non-OK results ---')
groups = Counter()
for u, r in sorted(res.items()):
    if r['class'] != 'OK_2XX' and r['class'] != 'REDIRECT_OK':
        host = urlsplit(u).netloc
        groups[(r['class'], host)] += 1
for (cls, host), n in sorted(groups.items()):
    print(f'{n:4d}  {cls:16s}  {host}')

print('\n--- detail: DEAD/400/403/DNS/TIMEOUT ---')
for u, r in sorted(res.items()):
    if r['class'] in ('DEAD_404', 'HTTP_400', 'BOT_BLOCK_403', 'FORBIDDEN_403', 'DNS_FAIL', 'TIMEOUT'):
        print(f"{r['class']:15s} {r['status']} {u[:120]}")
        if r.get('note'):
            print('                note:', r['note'][:100])

print('\n--- sample of BOT_BLOCK_429 hosts ---')
h429 = Counter(urlsplit(u).netloc for u, r in res.items() if r['class'] == 'BOT_BLOCK_429')
for h, n in h429.most_common():
    print(f'{n:4d}  {h}')
print('\n--- sample of TLS_ERROR hosts ---')
htls = Counter(urlsplit(u).netloc for u, r in res.items() if r['class'] == 'TLS_ERROR')
for h, n in htls.most_common():
    print(f'{n:4d}  {h}')
