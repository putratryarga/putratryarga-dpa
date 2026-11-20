# -*- coding: utf-8 -*-
"""Full link audit for dpa-audit: extract every http(s) URL from site files + registers, verify."""
import io
import json
import re
import ssl
import sys
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

sys.stdout.reconfigure(encoding="utf-8")
FILES = [
    "index.html", "role-study-guides-part1.js", "role-study-guides-part2.js", "role-study-guides-part3.js",
    "chapter-guide-map.js", "fullstack-master-roadmap.js", "fullstack-guides.js", "paid-social-guides.js",
    "docs/169-chapter-resource-mapping.md", "docs/resource-credential-validation.md",
    "docs/80-cell-agency-role-evidence-matrix.md",
]
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36")

entries = {}
for f in FILES:
    try:
        s = io.open(f, encoding="utf-8", errors="replace").read()
    except OSError as e:
        print(f"skip {f}: {e}")
        continue
    for m in re.finditer(r'https?://[^\s\'"<>\\)\]]+', s):
        u = m.group(0).rstrip('.,;:')
        e = entries.setdefault(u, {"url": u, "files": set()})
        e["files"].add(f)

print(f"unique URLs: {len(entries)}")
ssl_ctx = ssl.create_default_context()


def check(url):
    rec = {"url": url, "status": None, "final": None, "title": None, "error": None}
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html,*/*;q=0.8",
                                               "Accept-Language": "id-ID,id;q=0.9,en;q=0.8"})
    try:
        with urllib.request.urlopen(req, timeout=25, context=ssl_ctx) as r:
            rec["status"] = r.status
            rec["final"] = r.geturl()
            body = r.read(120000)
            ct = r.headers.get("Content-Type", "")
            if "html" in ct:
                t = body.decode(r.headers.get_content_charset() or "utf-8", "replace")
                m = re.search(r"<title[^>]*>(.*?)</title>", t, re.S | re.I)
                if m:
                    rec["title"] = re.sub(r"<[^>]+>|\s+", " ", m.group(1)).strip()[:90]
    except urllib.error.HTTPError as e:
        rec["status"] = e.code
        rec["final"] = e.geturl()
        rec["error"] = f"HTTP {e.code}"
    except Exception as e:  # noqa: BLE001
        msg = f"{type(e).__name__}: {e}"[:160]
        rec["error"] = msg
        if "CERTIFICATE" in msg:
            rec["error"] = "SSL_LOCAL_TRUST (false positive kemungkinan)"
    return rec


results = []
with ThreadPoolExecutor(max_workers=10) as ex:
    futs = {ex.submit(check, u): u for u in entries}
    for i, f in enumerate(as_completed(futs), 1):
        r = f.result()
        results.append(r)
        if i % 20 == 0 or r["status"] != 200:
            print(f"[{i}/{len(entries)}] {r.get('status')} {r['url'][:80]} {r.get('error') or ''}")

# classify
def classify(r):
    u = r["url"]
    st = r.get("status")
    if st == 200:
        return "OK"
    if st and 300 <= st < 400:
        return "REDIRECT"
    if st == 403 or st == 429:
        host = re.sub(r"https?://([^/]+).*", r"\1", u)
        if any(x in host for x in ("linkedin", "facebook", "instagram", "tiktok", "tinyurl", "openai")):
            return "BLOCKED_BOT"
        return "FORBIDDEN"
    if st == 404 or st == 410:
        return "DEAD"
    if r.get("error") and "SSL_LOCAL" in r["error"]:
        return "SSL_FALSE_POSITIVE"
    if r.get("error"):
        return "ERROR"
    return "OTHER"


for r in results:
    r["class"] = classify(r)

json.dump(results, io.open("audit-out/url-audit.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

from collections import Counter
c = Counter(r["class"] for r in results)
print("== SUMMARY ==")
for k, v in c.most_common():
    print(f"{k}: {v}")
print("== NON-OK ==")
for r in results:
    if r["class"] != "OK":
        print(f"  [{r['class']}] {r['url'][:100]} | {r.get('error') or ''} | files: {list(entries[r['url']]['files'])[:2]}")
io.open("audit-out/url-audit-summary.txt", "w", encoding="utf-8").write(
    "\n".join(f"[{r['class']}] {r['url']} -> {r.get('final') or ''} | {r.get('error') or ''}" for r in sorted(results, key=lambda x: x["class"])))
