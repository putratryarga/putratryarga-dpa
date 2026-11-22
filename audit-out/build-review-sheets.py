# -*- coding: utf-8 -*-
"""Fix rubric sample (all 16 tracks) + build manual review sheets for Q&A (60) and rubrics (30)."""
import csv, io, json, random, collections, re

# --- rubric sample: 1/track + 14 extra (2 per track for 14 tracks) = 30 ------
res = json.load(io.open("audit-out/rubric-structural-results.json", encoding="utf-8"))
rows = list(csv.DictReader(io.open("docs/169-chapter-rubric-calibration-register.csv", encoding="utf-8")))
by_track = collections.defaultdict(list)
for r in rows:
    by_track[r["chapter_id"][4:7]].append(r["chapter_id"])
rng = random.Random(20261121)
sample = []
for t in sorted(by_track):
    sample.append(rng.choice(sorted(by_track[t])))
rest_pool = []
for t in sorted(by_track):
    rest_pool.extend([c for c in sorted(by_track[t]) if c not in sample])
extra = rng.sample(rest_pool, 14)
sample = sorted(set(sample) | set(extra))
res["rubric_sample"] = {"n": len(sample), "items": sample,
                        "per_track": dict(collections.Counter(c[4:7] for c in sample)),
                        "seed": 20261121,
                        "note": "1/track + 14 second picks = 30; all 16 tracks covered"}
json.dump(res, io.open("audit-out/rubric-structural-results.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("rubric sample:", len(sample), res["rubric_sample"]["per_track"])

# --- Q&A manual review sheet -------------------------------------------------
qa = json.load(io.open("audit-out/qa-machine-results.json", encoding="utf-8"))
guides = json.load(io.open("audit-out/guides.json", encoding="utf-8"))
tri = {r["item_id"]: r for r in csv.DictReader(io.open("docs/507-qna-automated-triage.csv", encoding="utf-8"))}
sampled = [s["item_id"] for s in qa["sampling"]["items"]]
chapters = sorted(set(i[:12] for i in sampled))
print("distinct chapters in Q&A sample:", len(chapters))
lines = []
for i, cid in enumerate(chapters, 1):
    g = guides[cid]
    items = [x for x in sampled if x.startswith(cid)]
    lines.append("=" * 100)
    lines.append("[CH %d/44] %s" % (i, cid))
    lines.append("CONCEPT: " + g["concept"])
    lines.append("EXAMPLE: " + g["example"][:700])
    lines.append("STEPS: " + " | ".join(re.sub(r"<[^>]+>", "", s)[:220] for s in g["steps"]))
    lines.append("TERMS: " + " | ".join("%s=%s" % (t["term"], t["definition"]) for t in g["terms"]))
    for pid in items:
        r = tri[pid]
        tier = qa["per_row"][pid]["tier"]
        fuzzy = qa["per_row"][pid].get("fuzzy_with", [])
        lines.append("-" * 80)
        lines.append("ITEM %s [%s] ans_words=%s src_url=%s fuzzy=%s" % (
            pid, tier, r["answer_word_count"], r["source_reference"][:110] or "-", fuzzy or "-"))
        lines.append("Q: " + r["question_text"])
        lines.append("A: " + r["current_guide_answer"])
io.open("audit-out/qa-review-sheet.txt", "w", encoding="utf-8").write("\n".join(lines))
print("qa-review-sheet lines:", len(lines))

# --- rubric manual review sheet ---------------------------------------------
md = io.open("docs/169-chapter-assessment-rubrics-draft.md", encoding="utf-8").read()
sec_bodies = re.split(r"(?=^### DPA-T\d+-CH\d+)", md, flags=re.M)
md_by = {}
for b in sec_bodies:
    m = re.match(r"### (DPA-T\d+-CH\d+)", b)
    if m:
        md_by[m.group(1)] = b.rstrip() + "\n"
reg = {r["chapter_id"]: r for r in rows}
rlines = []
for i, cid in enumerate(res["rubric_sample"]["items"], 1):
    rlines.append("=" * 100)
    rlines.append("[RUBRIC %d/30] %s — %s" % (i, cid, reg[cid]["chapter_title"]))
    rlines.append(md_by.get(cid, "MISSING"))
io.open("audit-out/rubric-review-sheet.txt", "w", encoding="utf-8").write("\n".join(rlines))
print("rubric-review-sheet chapters:", len(res["rubric_sample"]["items"]))
