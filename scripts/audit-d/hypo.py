import re, json, csv
from collections import OrderedDict

pat = re.compile(r'https?://[^\s\)\]\|\"\'<>]+')

def urls_of_text(t):
    return pat.findall(t)

# hypothesis: unique URLs in mapped_learning_resources column of the register
rows = list(csv.DictReader(open('docs/169-objective-resource-fit-register.csv', encoding='utf-8-sig')))
col_urls = set()
for r in rows:
    col_urls.update(urls_of_text(r.get('mapped_learning_resources','')))
print('register mapped_learning_resources unique:', len(col_urls))

# hypothesis: unique URLs in evidence_section_or_excerpt
ev = set()
for r in rows:
    ev.update(urls_of_text(r.get('evidence_section_or_excerpt','')))
print('register evidence col unique:', len(ev))

# chapter-resources.js unique
js = open('chapter-resources.js', encoding='utf-8').read()
js_urls = set(urls_of_text(js))
print('chapter-resources.js unique:', len(js_urls))

# agency matrix unique
am = set(urls_of_text(open('docs/80-cell-agency-role-evidence-matrix.md', encoding='utf-8').read()))
print('agency matrix unique:', len(am))
print('chapter-resources.js + agency matrix union:', len(js_urls | am))

# rm doc
rm = set(urls_of_text(open('docs/169-chapter-resource-mapping.md', encoding='utf-8').read()))
print('rm doc:', len(rm), '| rm + agency:', len(rm | am))

# prior non-OK current presence
prior = json.load(open('audit-out/url-audit.json', encoding='utf-8'))
pm = {e['url']: e for e in prior}
allsrc = {
    'resource-mapping.md': open('docs/169-chapter-resource-mapping.md', encoding='utf-8').read(),
    'objective-register.csv': open('docs/169-objective-resource-fit-register.csv', encoding='utf-8').read(),
    'agency-matrix.md': open('docs/80-cell-agency-role-evidence-matrix.md', encoding='utf-8').read(),
    'agency-validation.csv': open('docs/80-agency-role-cell-validation-register.csv', encoding='utf-8').read(),
    'chapter-resources.js': js,
}
print('\n--- prior non-OK URL presence in current sources ---')
still, gone = [], []
for u, e in pm.items():
    if e['class'] == 'OK':
        continue
    hits = [name for name, t in allsrc.items() if u in t]
    (still if hits else gone).append((u, e['class'], hits))
print('STILL PRESENT:', len(still))
for u, cls, hits in still:
    print(' ', cls, '|', u[:110], '| in:', ','.join(hits))
print('NO LONGER PRESENT (corrected/removed):', len(gone))
for u, cls, hits in gone:
    print(' ', cls, '|', u[:110])
