# -*- coding: utf-8 -*-
"""Agent C structural audit of 169-chapter rubric calibration register + draft MD (scratch)."""
import csv, io, json, re, collections

REG = "docs/169-chapter-rubric-calibration-register.csv"
MD = "docs/169-chapter-assessment-rubrics-draft.md"
GUIDES = "audit-out/guides.json"
OUT = "audit-out/rubric-structural-results.json"

def norm(s):
    s = re.sub(r"\s+", " ", (s or "")).strip()
    return s.lower()

rows = list(csv.DictReader(io.open(REG, encoding="utf-8")))
md = io.open(MD, encoding="utf-8").read()
guides = json.load(io.open(GUIDES, encoding="utf-8"))
res = {"n_rows": len(rows), "issues": {}, "per_row": {}}
P = res["per_row"]

# 1. column completeness
cols = list(rows[0].keys())
empty_by_col = {}
for c in cols:
    miss = [r["chapter_id"] for r in rows if not (r.get(c) or "").strip()]
    empty_by_col[c] = miss
res["empty_by_col"] = {c: len(v) for c, v in empty_by_col.items()}
res["empty_by_col_ids"] = {c: v[:5] for c, v in empty_by_col.items() if v}

# 2. criteria count consistency
crit_mismatch = []
crit_sets = collections.Counter()
for r in rows:
    c = r["assessor_verification_criteria"]
    bullets = [b.strip() for b in re.split(r"(?:^|\s)-\s*", c) if b.strip()]
    bullets = [re.sub(r"^-\s*", "", b) for b in re.findall(r"(?:^|\s)-\s*[^-][^;]*?(?=(?:\s-\s|$))", c)]
    if not bullets:
        bullets = [b.strip(" -") for b in c.split("- ") if b.strip(" -")]
    n = len(bullets)
    key = norm(c)
    crit_sets[key] += 1
    P[r["chapter_id"]] = {"n_criteria": n}
    try:
        declared = int(r["assessor_criteria_count"])
    except ValueError:
        declared = -1
    if n != declared:
        crit_mismatch.append({"chapter_id": r["chapter_id"], "declared": declared, "actual": n})
res["issues"]["criteria_count_mismatch"] = crit_mismatch
res["distinct_criteria_sets"] = len(crit_sets)
res["criteria_set_top"] = crit_sets.most_common(3)

# 3. qna_items_in_rubric vs triage CSV
tri = list(csv.DictReader(io.open("docs/507-qna-automated-triage.csv", encoding="utf-8")))
per_ch = collections.Counter(r["chapter_id"] for r in tri)
qna_mismatch = []
for r in rows:
    declared = int(r["qna_items_in_rubric"])
    actual = per_ch.get(r["chapter_id"], 0)
    if declared != actual:
        qna_mismatch.append({"chapter_id": r["chapter_id"], "declared": declared, "actual": actual})
res["issues"]["qna_count_mismatch"] = qna_mismatch

# 4. score dimensions / scale / pass mark / statuses
dim_counts = collections.Counter()
dim_variants = collections.Counter()
scale_variants = collections.Counter()
pass_variants = collections.Counter()
status_vars = {c: collections.Counter() for c in
               ("rubric_content_status","technical_calibration_status","sme_approval_status",
                "assessor_pilot_status","inter_rater_agreement_status","learner_resubmission_status")}
cf_variants = collections.Counter()
for r in rows:
    dims = [d.strip() for d in r["score_dimensions"].split(";") if d.strip()]
    dim_counts[len(dims)] += 1
    dim_variants[norm(r["score_dimensions"])] += 1
    scale_variants[norm(r["dimension_scale"])] += 1
    pass_variants[norm(r["proposed_pass_mark"])] += 1
    cf_variants[norm(r["critical_failure_rule"])] += 1
    for c in status_vars:
        status_vars[c][norm(r[c])] += 1
res["score_dimension_count_dist"] = dict(dim_counts)
res["distinct_score_dimension_sets"] = len(dim_variants)
res["distinct_dimension_scales"] = dict(scale_variants)
res["distinct_pass_marks"] = dict(pass_variants)
res["distinct_critical_failure_rules"] = {k: v for k, v in cf_variants.items()}
res["status_distribution"] = {c: dict(v) for c, v in status_vars.items()}

# 5. MD structural parse
sections = re.findall(r"^### (DPA-T\d+-CH\d+) — (.*?)\r?$", md, flags=re.M)
res["md_sections"] = len(sections)
md_by_id = {}
sec_bodies = re.split(r"(?=^### DPA-T\d+-CH\d+)", md, flags=re.M)
md_issues = []
for body in sec_bodies:
    m = re.match(r"### (DPA-T\d+-CH\d+)", body)
    if not m:
        continue
    cid = m.group(1)
    md_by_id[cid] = body
    has = {
        "competency": bool(re.search(r"\*\*Competency:\*\*", body)),
        "outcome": bool(re.search(r"\*\*Learning outcome under assessment:\*\*", body)),
        "checklist": bool(re.search(r"\*\*Required artifact / chapter-specific evidence checklist:\*\*", body)),
        "verify": bool(re.search(r"\*\*Assessor must verify:\*\*", body)),
        "qna": bool(re.search(r"\*\*Chapter Q&A answer-key review:\*\*", body)),
        "decision": bool(re.search(r"\*\*Chapter decision:\*\*", body)),
    }
    n_verify = len(re.findall(r"^\s*-\s+", body.split("**Assessor must verify:**")[1].split("**Chapter Q&A")[0], flags=re.M)) if has["verify"] else 0
    n_qna = len(re.findall(r"\d+\.\s+\*\*Question:\*\*", body))
    md_issues.append({"chapter_id": cid,
                      "missing_blocks": [k for k, v in has.items() if not v],
                      "n_verify_bullets": n_verify, "n_qna_items": n_qna})
res["md_missing_blocks"] = [x for x in md_issues if x["missing_blocks"]]
res["md_verify_bullet_dist"] = dict(collections.Counter(x["n_verify_bullets"] for x in md_issues))
res["md_qna_item_dist"] = dict(collections.Counter(x["n_qna_items"] for x in md_issues))

# 6. MD vs CSV field equality (outcome, checklist) for all 169
md_csv_mismatch = []
for r in rows:
    body = md_by_id.get(r["chapter_id"], "")
    if not body:
        md_csv_mismatch.append({"chapter_id": r["chapter_id"], "field": "SECTION_MISSING"})
        continue
    m_out = re.search(r"\*\*Learning outcome under assessment:\*\* (.*?)(?:\r?\n\r?\n)", body, re.S)
    m_chk = re.search(r"\*\*Required artifact / chapter-specific evidence checklist:\*\* (.*?)(?:\r?\n\r?\n)", body, re.S)
    if m_out and norm(m_out.group(1)) != norm(r["learning_outcome"]):
        md_csv_mismatch.append({"chapter_id": r["chapter_id"], "field": "learning_outcome"})
    if m_chk and norm(m_chk.group(1)) != norm(r["required_artifact_checklist"]):
        md_csv_mismatch.append({"chapter_id": r["chapter_id"], "field": "required_artifact_checklist"})
res["issues"]["md_csv_field_mismatch"] = md_csv_mismatch

# 7. rubric checklist vs guide practice text equality
chk_guide_mismatch = []
for r in rows:
    g = guides.get(r["chapter_id"])
    if not g:
        chk_guide_mismatch.append({"chapter_id": r["chapter_id"], "field": "GUIDE_MISSING"})
        continue
    if norm(g["practice"]) != norm(r["required_artifact_checklist"]):
        chk_guide_mismatch.append({"chapter_id": r["chapter_id"]})
res["issues"]["checklist_vs_guide_practice_mismatch"] = chk_guide_mismatch

# 8. sample plan for manual rubric review: 30 chapters, ~2/track
by_track = collections.defaultdict(list)
for r in rows:
    by_track[r["chapter_id"][4:7]].append(r["chapter_id"])
rng = __import__("random").Random(20261121)
sample = []
for t in sorted(by_track):
    pool = sorted(by_track[t])
    k = 2 if len(sample) + 2 <= 30 else 1
    if t in ("T15", "T16") and 30 - len(sample) in (1,):
        k = 30 - len(sample)
    k = min(k, 30 - len(sample), len(pool))
    sample.extend(rng.sample(pool, k))
res["rubric_sample"] = {"n": len(sample), "items": sample,
                        "per_track": dict(collections.Counter(c[4:7] for c in sample)),
                        "seed": 20261121}

json.dump(res, io.open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("rows:", len(rows))
print("empty_by_col:", res["empty_by_col"])
print("criteria_count_mismatch:", len(crit_mismatch), "distinct_criteria_sets:", res["distinct_criteria_sets"])
print("qna_count_mismatch:", len(qna_mismatch))
print("dim_count_dist:", res["score_dimension_count_dist"], "distinct_dim_sets:", res["distinct_score_dimension_sets"])
print("scales:", res["distinct_dimension_scales"])
print("pass_marks:", res["distinct_pass_marks"])
print("critical_failure_rules:", list(cf_variants.items())[:3])
print("status_distribution:", res["status_distribution"])
print("md_sections:", len(sections), "missing_blocks:", len(res["md_missing_blocks"]),
      "verify_bullets:", res["md_verify_bullet_dist"], "md_qna:", res["md_qna_item_dist"])
print("md_csv_mismatch:", len(md_csv_mismatch), "checklist_vs_guide_mismatch:", len(chk_guide_mismatch))
print("rubric sample:", len(sample), res["rubric_sample"]["per_track"])
