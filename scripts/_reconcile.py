# -*- coding: utf-8 -*-
"""Register reconciliation for DPA audit-out."""
import csv
import io
import re
import sys
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8")

OUT = io.open("audit-out/register-reconciliation.md", "w", encoding="utf-8", newline="")
OUT.write("# Register Reconciliation — 21 November 2026\n\n")
OUT.write("Rekonsiliasi otomatis semua register utama DPA pada HEAD `audit/dpa-release-readiness-2026-11-21`.\n\n")
rows_summary = []


def read_csv(path):
    with io.open(path, encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def status_breakdown(rows, keys=("status", "Status", "classification", "Classification", "state", "State", "disposition", "Disposition")):
    c = Counter()
    for r in rows:
        v = None
        for k in keys:
            if k in r and r[k]:
                v = r[k].strip()
                break
        if v:
            c[v] += 1
        else:
            c["(tanpa kolom status)"] += 1
    return c


# 1. 169 chapter ids
ids = [ln.strip() for ln in io.open("docs/169-core-chapter-ids.txt", encoding="utf-8-sig") if ln.strip()]
dup_ids = [k for k, v in Counter(ids).items() if v > 1]
rows_summary.append(("docs/169-core-chapter-ids.txt", len(ids), f"unik: {len(set(ids))}; duplikat: {dup_ids or 'tidak ada'}"))

# 2. resource mapping (md table)
rm = io.open("docs/169-chapter-resource-mapping.md", encoding="utf-8").read()
rm_rows = len(re.findall(r"^\| DPA-T\d+-CH\d+", rm, re.M))
rm_ids = re.findall(r"\| (DPA-T\d+-CH\d+) \|", rm)
rm_dup = [k for k, v in Counter(rm_ids).items() if v > 1]
rows_summary.append(("docs/169-chapter-resource-mapping.md", rm_rows, f"ID unik: {len(set(rm_ids))}; duplikat: {rm_dup or 'tidak ada'}"))

# 3. CSV registers
for path, label, expect in [
    ("docs/507-qna-automated-triage.csv", "507 Q&A automated triage", 507),
    ("docs/507-qna-editorial-sme-review-register.csv", "507 Q&A SME review register", 507),
    ("docs/80-agency-role-cell-validation-register.csv", "80 agency cell validation", 80),
    ("docs/80-agency-cell-evidence-gap-triage.csv", "80 agency gap triage", 80),
    ("docs/169-objective-resource-fit-register.csv", "169 objective-resource-fit", 169),
    ("docs/169-chapter-rubric-calibration-register.csv", "169 rubric calibration", 169),
    ("docs/169-chapter-depth-screening.csv", "169 depth screening", 169),
    ("docs/28-advanced-elective-validation-register.csv", "28 elective validation", 28),
    ("docs/56-elective-knowledge-check-review-register.csv", "56 elective knowledge checks", 56),
    ("docs/ELECTIVE-17-CRO-CHAPTER-LEVEL-DESK-AUDIT.csv", "Elective 17 desk audit", None),
    ("docs/ELECTIVE-18-TRADITIONAL-MEDIA-CHAPTER-LEVEL-DESK-AUDIT.csv", "Elective 18 desk audit", None),
]:
    try:
        rows = read_csv(path)
        sb = status_breakdown(rows)
        delta = "" if expect is None else ("OK" if len(rows) == expect else f"SELISIH vs kanonik {expect}")
        rows_summary.append((path, len(rows), f"{dict(sb)} | {delta}"))
    except OSError as e:
        rows_summary.append((path, "FILE TIDAK ADA", str(e)))

# 4. source-fit coverage per track
sf = {}
for t in range(1, 17):
    p = f"docs/T{t:02d}-"
    found = [n for n in
             [f"T{t:02d}-10-chapter-source-fit-review.csv", f"T{t:02d}-11-chapter-source-fit-review.csv",
              f"T{t:02d}-12-chapter-source-fit-review.csv", f"T{t:02d}-10-chapter-qna-technical-desk-review.csv",
              f"T{t:02d}-11-chapter-qna-technical-desk-review.csv", f"T{t:02d}-12-chapter-qna-technical-desk-review.csv"]
             ]
    have = [n.split("-", 1)[1] for n in found if __import__("os").path.exists("docs/" + n)]
    sf[f"T{t:02d}"] = have
OUT.write("## Kepemilikan review per track\n\n")
for k, v in sf.items():
    OUT.write(f"- **{k}**: {', '.join(v) if v else 'BELUM ADA register review'}\n")

OUT.write("\n## Ringkasan baris register\n\n")
OUT.write("| Register | Baris | Detail |\n|---|---:|---|\n")
for p, n, note in rows_summary:
    OUT.write(f"| {p} | {n} | {note} |\n")

# 5. canonical numbers
OUT.write("\n## Pemetaan ke angka kanonik\n\n")
canon = {"169 chapter": len(set(ids)), "169 resource mapping": rm_rows}
for p, n, _ in rows_summary:
    if "507" in p and "triage" in p:
        canon["507 Q&A triage"] = n
    if "80-agency-role-cell" in p:
        canon["80 agency cells"] = n
    if "28-advanced-elective" in p:
        canon["28 elective"] = n
    if "56-elective" in p:
        canon["56 elective knowledge checks"] = n
    if "169-objective" in p:
        canon["169 resource-fit"] = n
    if "169-chapter-rubric" in p:
        canon["169 rubric"] = n
for k, v in canon.items():
    OUT.write(f"- {k}: **{v}**\n")

io.open("audit-out/register-reconciliation.md", "a", encoding="utf-8", newline="")
OUT.close()
print("written audit-out/register-reconciliation.md")
print(io.open("audit-out/register-reconciliation.md", encoding="utf-8").read()[:3000])
