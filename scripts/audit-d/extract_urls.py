# Agent D audit — URL extraction from the 4 canonical inputs + cross-ref with prior audit
import re, json, csv
from collections import Counter, defaultdict

BASE = '.'
FILES = [
    'docs/169-chapter-resource-mapping.md',
    'docs/169-objective-resource-fit-register.csv',
    'docs/80-cell-agency-role-evidence-matrix.md',
    'docs/80-agency-role-cell-validation-register.csv',
]
pat = re.compile(r'https?://[^\s\)\]\|\"\'<>]+')

urls = set()
for p in FILES:
    t = open(p, encoding='utf-8').read()
    found = pat.findall(t)
    urls.update(found)
    print(p, 'found', len(found), 'unique-in-file', len(set(found)))

print('TOTAL unique across 4 inputs:', len(urls))

# prior audit
prior = json.load(open('audit-out/url-audit.json', encoding='utf-8'))
prior_map = {e['url']: e for e in prior}
print('prior audit entries:', len(prior_map))

ok = [u for u in urls if prior_map.get(u, {}).get('class') == 'OK']
nonok = [u for u in urls if u in prior_map and prior_map[u]['class'] != 'OK']
missing = [u for u in urls if u not in prior_map]
print('in-inputs & prior OK:', len(ok))
print('in-inputs & prior non-OK:', len(nonok))
print('in-inputs but NOT in prior audit:', len(missing))

# normalize trailing punctuation cleanup for comparison
def norm(u):
    return u.rstrip('.,;')

missing2 = [u for u in missing if norm(u) not in prior_map and u.rstrip('/') not in prior_map and prior_norm_check(u, prior_map) if False]
print('\n--- prior non-OK (in inputs) ---')
for u in sorted(nonok):
    e = prior_map[u]
    print(e['class'], '|', e.get('status'), '|', u)

print('\n--- NOT in prior audit (need first-time check) ---')
for u in sorted(missing):
    print(u)

# save the full recheck universe
with open('audit-out/D-recheck-universe.json', 'w', encoding='utf-8') as f:
    json.dump({'urls': sorted(urls), 'prior_ok': sorted(ok), 'prior_nonok': sorted(nonok), 'not_in_prior': sorted(missing)}, f, indent=1)
print('\nsaved audit-out/D-recheck-universe.json')
