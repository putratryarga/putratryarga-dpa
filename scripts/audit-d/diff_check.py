import re, json, csv
pat = re.compile(r'https?://[^\s\)\]\|\"\'<>]+')
raw = set()
for p in ['docs/169-chapter-resource-mapping.md', 'docs/169-objective-resource-fit-register.csv',
          'docs/80-cell-agency-role-evidence-matrix.md', 'docs/80-agency-role-cell-validation-register.csv']:
    raw.update(pat.findall(open(p, encoding='utf-8').read()))
prov = json.load(open('audit-out/D-url-provenance.json', encoding='utf-8'))
d = set(prov.keys())
miss = raw - d
print('raw:', len(raw), 'dict:', len(d), 'missing from dict:', len(miss))
for u in sorted(miss)[:70]:
    print(repr(u)[:170])
