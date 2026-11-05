#!/usr/bin/env python3
"""Recalculate DPA chapter scores from authoritative seven-dimension vectors.

CSV columns: chapter_id,track_id,dim_1,...,dim_7
No missing score is imputed. Chapter status is not derived from a numeric score.
"""
from __future__ import annotations
import argparse
import csv
from collections import defaultdict
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

DIMS = [f"dim_{i}" for i in range(1, 8)]
EXPECTED = 169

def one_decimal(x: Decimal) -> str:
    return str(x.quantize(Decimal("0.1"), rounding=ROUND_HALF_UP))

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("input_csv", type=Path)
    ap.add_argument("--chapter-output", type=Path, default=Path("chapter-audit-scores-recalculated.csv"))
    ap.add_argument("--track-output", type=Path, default=Path("track-audit-scorecard-recalculated.csv"))
    ap.add_argument("--require-169", action="store_true")
    args = ap.parse_args()

    with args.input_csv.open(encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        rows = list(reader)
        columns = set(reader.fieldnames or [])
    required = {"chapter_id", "track_id", *DIMS}
    if required - columns:
        raise SystemExit("FAIL: missing columns: " + ", ".join(sorted(required - columns)))
    if not rows:
        raise SystemExit("FAIL: input contains no chapter rows.")

    seen: set[str] = set()
    by_track: dict[str, list[Decimal]] = defaultdict(list)
    results = []
    for line_no, row in enumerate(rows, start=2):
        cid, tid = (row.get("chapter_id") or "").strip(), (row.get("track_id") or "").strip()
        if not cid or not tid:
            raise SystemExit(f"FAIL line {line_no}: chapter_id and track_id required.")
        if cid in seen:
            raise SystemExit(f"FAIL line {line_no}: duplicate chapter_id {cid}.")
        seen.add(cid)
        values = []
        for col in DIMS:
            raw = (row.get(col) or "").strip()
            if not raw:
                raise SystemExit(f"FAIL line {line_no}: missing {col} for {cid}; no imputation.")
            try:
                v = Decimal(raw)
            except Exception:
                raise SystemExit(f"FAIL line {line_no}: invalid numeric value in {col}.")
            if not Decimal(0) <= v <= Decimal(4):
                raise SystemExit(f"FAIL line {line_no}: {col} outside 0–4.")
            values.append(v)
        mean = sum(values) / Decimal(7)
        by_track[tid].append(mean)
        results.append({"chapter_id":cid,"track_id":tid,
                        **{f"raw_{i+1}":str(v) for i,v in enumerate(values)},
                        "raw_mean":str(mean),"reported_score_1dp":one_decimal(mean)})

    if args.require_169 and len(results) != EXPECTED:
        raise SystemExit(f"FAIL: expected {EXPECTED} unique chapters, found {len(results)}.")
    with args.chapter_output.open("w",encoding="utf-8",newline="") as handle:
        writer=csv.DictWriter(handle,fieldnames=list(results[0].keys()))
        writer.writeheader(); writer.writerows(results)
    with args.track_output.open("w",encoding="utf-8",newline="") as handle:
        fields=["track_id","chapter_count","mean_of_unrounded_chapter_means","reported_score_1dp"]
        writer=csv.DictWriter(handle,fieldnames=fields); writer.writeheader()
        for tid in sorted(by_track):
            mean=sum(by_track[tid])/Decimal(len(by_track[tid]))
            writer.writerow({"track_id":tid,"chapter_count":len(by_track[tid]),
                "mean_of_unrounded_chapter_means":str(mean),"reported_score_1dp":one_decimal(mean)})
    print(f"PASS: recalculated {len(results)} chapters across {len(by_track)} tracks.")
    print("NOTE: chapter validation status must be audited independently.")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
