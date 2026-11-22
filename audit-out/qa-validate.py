# -*- coding: utf-8 -*-
"""Agent C machine validation of docs/507-qna-automated-triage.csv (scratch, audit-out). v2"""
import csv, io, json, re, random, difflib, collections
from urllib.parse import urlparse

TRIAGE = "docs/507-qna-automated-triage.csv"
REGISTER = "docs/507-qna-editorial-sme-review-register.csv"
GUIDES = "audit-out/guides.json"
OUT = "audit-out/qa-machine-results.json"

def norm(s):
    s = s.lower()
    s = re.sub(r"[^0-9a-z\u00c0-\u024f]+", " ", s, flags=re.ASCII)
    return re.sub(r"\s+", " ", s).strip()

def words(s):
    return len(re.findall(r"\S+", s))

rows = list(csv.DictReader(io.open(TRIAGE, encoding="utf-8")))
reg_rows = list(csv.DictReader(io.open(REGISTER, encoding="utf-8")))
guides = json.load(io.open(GUIDES, encoding="utf-8"))

res = {"n_rows": len(rows), "issues": {}, "per_row": {}}
P = res["per_row"]

# --- A. required fields -----------------------------------------------------
REQ = ["item_id","chapter_id","question_number","question_text","current_guide_answer",
       "item_type","answer_review_status","editorial_status","sme_status","review_notes",
       "answer_word_count","question_word_count","priority_batch","automated_triage_flags",
       "automated_triage_status","reviewer_disposition"]
empty_fields = collections.defaultdict(list)
for r in rows:
    miss = [c for c in REQ if not (r.get(c) or "").strip()]
    P.setdefault(r["item_id"], {})["empty_fields"] = miss
    for c in miss:
        empty_fields[c].append(r["item_id"])
res["issues"]["empty_required_fields"] = {c: v for c, v in empty_fields.items()}

# --- B. duplicates ----------------------------------------------------------
norm_by_id = {r["item_id"]: norm(r["question_text"]) for r in rows}
ids = [r["item_id"] for r in rows]
id_dupes = [k for k, v in collections.Counter(ids).items() if v > 1]
exact_dupes = []
seen = {}
for r in rows:
    n = norm_by_id[r["item_id"]]
    if n in seen:
        exact_dupes.append((seen[n], r["item_id"]))
    else:
        seen[n] = r["item_id"]
fuzzy_pairs = []
for i in range(len(ids)):
    for j in range(i + 1, len(ids)):
        a, b = ids[i], ids[j]
        na, nb = norm_by_id[a], norm_by_id[b]
        if not na or not nb:
            continue
        ratio = difflib.SequenceMatcher(None, na, nb).ratio()
        if ratio >= 0.85:
            fuzzy_pairs.append({"a": a, "b": b, "ratio": round(ratio, 3),
                                "same_chapter": a[:12] == b[:12]})
res["issues"]["item_id_duplicates"] = id_dupes
res["issues"]["exact_normalized_question_duplicates"] = exact_dupes
res["issues"]["fuzzy_question_pairs_ge_085"] = fuzzy_pairs
for fp in fuzzy_pairs:
    P.setdefault(fp["a"], {}).setdefault("fuzzy_with", []).append(fp["b"])
    P.setdefault(fp["b"], {}).setdefault("fuzzy_with", []).append(fp["a"])

# --- C. answer-key consistency: CSV vs guide + word counts ------------------
guide_mismatch = []
wc_mismatch = []
for r in rows:
    cid = r["chapter_id"]
    g = guides.get(cid)
    if not g:
        guide_mismatch.append({"id": r["item_id"], "reason": "chapter_not_in_guides"})
        P[r["item_id"]]["guide_match"] = "CHAPTER_MISSING"
        continue
    idx = int(r["question_number"]) - 1
    checks = g["checks"]
    if idx >= len(checks):
        guide_mismatch.append({"id": r["item_id"], "reason": "question_index_out_of_range"})
        P[r["item_id"]]["guide_match"] = "INDEX_RANGE"
        continue
    same_q = norm(checks[idx]["q"]) == norm(r["question_text"])
    same_a = norm(checks[idx]["a"]) == norm(r["current_guide_answer"])
    P[r["item_id"]]["guide_match"] = "EXACT" if (same_q and same_a) else ("Q_ONLY" if same_q else "MISMATCH")
    if not (same_q and same_a):
        guide_mismatch.append({"id": r["item_id"], "same_q": same_q, "same_a": same_a})
    aw, qw = words(r["current_guide_answer"]), words(r["question_text"])
    P[r["item_id"]]["answer_words"] = aw
    P[r["item_id"]]["question_words"] = qw
    if abs(aw - int(r["answer_word_count"])) > 2 or abs(qw - int(r["question_word_count"])) > 2:
        wc_mismatch.append({"id": r["item_id"], "csv_aw": r["answer_word_count"], "actual_aw": aw,
                            "csv_qw": r["question_word_count"], "actual_qw": qw})
res["issues"]["guide_answer_mismatches"] = guide_mismatch
res["issues"]["word_count_mismatches_gt2"] = wc_mismatch

reg_by_id = {r["item_id"]: r for r in reg_rows}
cross = []
for r in rows:
    o = reg_by_id.get(r["item_id"])
    if not o:
        cross.append({"id": r["item_id"], "reason": "missing_in_editorial_register"})
        continue
    for col in ("question_text", "current_guide_answer", "item_type", "sme_status", "editorial_status"):
        if (o.get(col) or "").strip() != (r.get(col) or "").strip():
            cross.append({"id": r["item_id"], "column": col})
extra = set(reg_by_id) - set(x["item_id"] for x in rows)
res["issues"]["cross_register_inconsistencies"] = cross
res["issues"]["register_only_items"] = sorted(extra)

# --- D. source URL format (split on ';') + flag consistency -----------------
url_bad, flag_inc = [], []
multi_url = 0
for r in rows:
    src = (r["source_reference"] or "").strip()
    flags = r["automated_triage_flags"] or ""
    if src:
        parts = [s.strip() for s in src.split(";") if s.strip()]
        if len(parts) > 1:
            multi_url += 1
        bad_parts = []
        for u_text in parts:
            u = urlparse(u_text)
            if not (u.scheme in ("http", "https") and bool(u.netloc) and " " not in u_text):
                bad_parts.append(u_text)
        P[r["item_id"]]["source_url_status"] = "OK" if not bad_parts else "BAD_FORMAT"
        P[r["item_id"]]["source_url_count"] = len(parts)
        if bad_parts:
            url_bad.append({"id": r["item_id"], "url": "; ".join(bad_parts)})
        if "SOURCE_REFERENCE_MISSING" in flags:
            flag_inc.append({"id": r["item_id"], "reason": "source_present_but_flagged_missing"})
    else:
        P[r["item_id"]]["source_url_status"] = "EMPTY"
        P[r["item_id"]]["source_url_count"] = 0
        if "SOURCE_REFERENCE_MISSING" not in flags:
            flag_inc.append({"id": r["item_id"], "reason": "source_missing_but_flag_not_set"})
res["issues"]["source_url_bad_format"] = url_bad
res["issues"]["triage_flag_inconsistencies"] = flag_inc
res["multi_url_rows"] = multi_url

# --- E. distribution --------------------------------------------------------
per_ch = collections.Counter(r["chapter_id"] for r in rows)
per_track = collections.Counter(r["chapter_id"][4:7] for r in rows)
qn_bad = [r["item_id"] for r in rows if r["question_number"] not in ("1", "2", "3")]
res["distribution"] = {
    "chapters": len(per_ch), "items_per_chapter_min": min(per_ch.values()),
    "items_per_chapter_max": max(per_ch.values()),
    "per_track": dict(sorted(per_track.items())),
    "question_number_anomalies": qn_bad,
    "tracks": len(per_track),
}

# --- F. answer length + triage flag re-verification -------------------------
len_flag_err = []
for r in rows:
    aw = P[r["item_id"]].get("answer_words", 0)
    flags = r["automated_triage_flags"] or ""
    has_len_flag = "ANSWER_LENGTH_HEURISTIC_LT_14_WORDS" in flags
    if has_len_flag != (aw < 14):
        len_flag_err.append({"id": r["item_id"], "flagged": has_len_flag, "actual_words": aw})
res["issues"]["length_flag_mismatches"] = len_flag_err

# --- G. tier heuristic + stratified sample plan (track-major, 60, 20/20/20) -
EASY_OP = ("apa itu", "apa yang dimaksud", "apa definisi", "sebutkan", "apa arti", "apa fungsi")
HARD_M = ("mengapa", "kapan", "bagaimana", "belum tentu", "perbedaan", "beda ", "risiko",
          "jika", "bila", "ketika", "sebaiknya tidak", "tidak tepat", "trade", "salah satu")
tiers = {}
for r in rows:
    q = norm(r["question_text"]).lower()
    aw = P[r["item_id"]].get("answer_words", 0)
    n_hard = sum(1 for m in HARD_M if m in q)
    opener_easy = any(q.startswith(o) for o in EASY_OP)
    if opener_easy and aw < 25 and n_hard == 0:
        tiers[r["item_id"]] = "mudah"
    elif n_hard >= 2 or aw >= 38 or ("mengapa" in q and aw >= 25):
        tiers[r["item_id"]] = "sulit"
    else:
        tiers[r["item_id"]] = "sedang"
    P[r["item_id"]]["tier"] = tiers[r["item_id"]]
tier_count = collections.Counter(tiers.values())
res["tier_counts"] = dict(tier_count)

by_track_tier = collections.defaultdict(list)
for r in rows:
    by_track_tier[(r["chapter_id"][4:7], tiers[r["item_id"]])].append(r["item_id"])
TRACKS = sorted(per_track)
quota = {t: per_track[t] * 60 / len(rows) for t in TRACKS}
alloc = {t: int(quota[t]) for t in TRACKS}
rem = 60 - sum(alloc.values())
for t in sorted(TRACKS, key=lambda t: quota[t] - alloc[t], reverse=True)[:rem]:
    alloc[t] += 1
rng = random.Random(20261121)
picked = {}
picked_tier = collections.Counter()
for t in TRACKS:
    n = alloc[t]
    avail_t = {tier: len(by_track_tier[(t, tier)]) for tier in ("mudah", "sedang", "sulit")}
    tot_av = sum(avail_t.values())
    want = {tier: n * avail_t[tier] / max(tot_av, 1) for tier in ("mudah", "sedang", "sulit")}
    take = {tier: min(int(want[tier]), avail_t[tier]) for tier in ("mudah", "sedang", "sulit")}
    r2 = n - sum(take.values())
    for tier in sorted(("mudah", "sedang", "sulit"), key=lambda k: want[k] - take[k], reverse=True):
        while r2 > 0 and take[tier] < avail_t[tier]:
            take[tier] += 1
            r2 -= 1
    for tier in ("mudah", "sedang", "sulit"):
        pool = sorted(by_track_tier[(t, tier)])
        for pid in rng.sample(pool, take[tier]):
            picked[pid] = {"item_id": pid, "track": t, "tier": tier}
            picked_tier[tier] += 1
# global rebalance toward 20/20/20 via cross-track same-tier swaps
TARGET = {"mudah": 20, "sedang": 20, "sulit": 20}
for _ in range(200):
    surplus = max(TARGET, key=lambda k: picked_tier[k] - TARGET[k])
    deficit = min(TARGET, key=lambda k: picked_tier[k] - TARGET[k])
    if picked_tier[surplus] - TARGET[surplus] <= 0 or TARGET[deficit] - picked_tier[deficit] <= 0:
        break
    cand_pool = [pid for pid, v in picked.items()
                 if v["tier"] == surplus and by_track_tier[(v["track"], deficit)]]
    if not cand_pool:
        break
    pid = rng.choice(sorted(cand_pool))
    track = picked[pid]["track"]
    unpicked_deficit = sorted(set(by_track_tier[(track, deficit)]) - set(picked))
    if not unpicked_deficit:
        # swap with another track that has an unpicked deficit item and is missing a surplus-tier unpicked
        swapped = False
        for t2 in TRACKS:
            u2 = sorted(set(by_track_tier[(t2, deficit)]) - set(picked))
            if u2 and any(p["track"] == t2 for p in picked.values() if p["tier"] == surplus):
                old = rng.choice(sorted([p["item_id"] for p in picked.values() if p["track"] == t2 and p["tier"] == surplus]))
                del picked[old]
                picked_tier[surplus] -= 1
                new = rng.choice(u2)
                picked[new] = {"item_id": new, "track": t2, "tier": deficit}
                picked_tier[deficit] += 1
                picked[pid]["tier"] = deficit
                picked_tier[surplus] -= 1
                picked_tier[deficit] += 1
                swapped = True
                break
        if not swapped:
            break
    else:
        del picked[pid]
        picked_tier[surplus] -= 1
        new = rng.choice(unpicked_deficit)
        picked[new] = {"item_id": new, "track": track, "tier": deficit}
        picked_tier[deficit] += 1
sample = list(picked.values())
res["sampling"] = {
    "track_allocation_target": alloc,
    "n_sampled": len(sample),
    "tier_counts": dict(picked_tier),
    "per_track_sampled": dict(collections.Counter(s["track"] for s in sample)),
    "items": sample,
    "seed": 20261121,
    "note": "brief 6/track x16 tracks = 96 > 60; 60 kept, proportional per track, tiers ~20/20/20",
}
res["flag_summary"] = dict(collections.Counter(r["automated_triage_flags"] for r in rows))
json.dump(res, io.open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

print("rows:", res["n_rows"])
print("empty_required_fields:", {k: len(v) for k, v in res["issues"]["empty_required_fields"].items()})
print("item_id_dupes:", len(id_dupes), "exact_norm_dupes:", len(exact_dupes),
      "fuzzy>=0.85:", len(fuzzy_pairs), "| >=0.92:", sum(1 for p in fuzzy_pairs if p["ratio"] >= 0.92))
print("guide_answer_mismatches:", len(guide_mismatch), "word_count_mismatches:", len(wc_mismatch))
print("cross_register_inconsistencies:", len(cross), "register_only:", len(extra))
print("source_url_bad_format:", len(url_bad), "flag_inconsistencies:", len(flag_inc), "multi_url_rows:", multi_url)
print("distribution: chapters", res["distribution"]["chapters"], "tracks", len(per_track),
      "per-chapter", res["distribution"]["items_per_chapter_min"], "-", res["distribution"]["items_per_chapter_max"])
print("length_flag_mismatches:", len(len_flag_err))
print("tiers:", dict(tier_count))
print("sampled:", len(sample), dict(picked_tier), "per-track:", dict(collections.Counter(s["track"] for s in sample)))
