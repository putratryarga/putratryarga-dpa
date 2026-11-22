import re, json
pat = re.compile(r'https?://[^\s\)\]\|\"\'<>]+')

def urls_of(p):
    return set(pat.findall(open(p, encoding='utf-8').read()))

rm = urls_of('docs/169-chapter-resource-mapping.md')
am = urls_of('docs/80-cell-agency-role-evidence-matrix.md')
reg = urls_of('docs/169-objective-resource-fit-register.csv')
val = urls_of('docs/80-agency-role-cell-validation-register.csv')

union2 = rm | am
print('resource-mapping doc:', len(rm))
print('agency matrix doc:', len(am))
print('union of the two docs:', len(union2))
print('union rm+am+reg+val:', len(rm | am | reg | val))

prior = json.load(open('audit-out/url-audit.json', encoding='utf-8'))
pm = {e['url']: e for e in prior}

nonok2 = sorted(u for u in union2 if u in pm and pm[u]['class'] != 'OK')
print('\nnon-OK within union(rm,am):', len(nonok2))
for u in nonok2:
    print(' ', pm[u]['class'], '|', pm[u].get('status'), '|', u[:120])

notin2 = sorted(u for u in union2 if u not in pm)
print('\nin union(rm,am) but not in prior audit:', len(notin2))
for u in notin2:
    print(' ', u[:130])

# what union4 looks like
union4 = rm | am | reg | val
nonok4 = sorted(u for u in union4 if u in pm and pm[u]['class'] != 'OK')
print('\nnon-OK within union of all 4:', len(nonok4))
for u in nonok4:
    print(' ', pm[u]['class'], '|', u[:120])
