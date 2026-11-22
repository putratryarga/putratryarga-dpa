#!/usr/bin/env python3
"""Recalculate DPA chapter audit scores from authoritative seven-dimension raw vectors.

CSV columns: chapter_id,track_id,dim_1,...,dim_7
Optional expected-ID file: one canonical DPA chapter ID per line.
No missing score is imputed; chapter status is not derived from a numeric score.
"""
from __future__ import annotations
import argparse
import csv
from collections import defaultdict
from decimal import Decimal, InvalidOperation, ROUND_HALF_UP
from pathlib import Path

DIMS = [f"dim_{i}" for i in range(1, 8)]
EXPECTED_CHAPTERS = 169
EXPECTED_TRACKS = 16
CHAPTER_ID_PREFIX = "DPA-T"

def one_decimal(value: Decimal) -> str:
    return str(value.quantize(Decimal("0.1"), rounding=ROUND_HALF_UP))

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("input_csv", type=Path)
    parser.add_argument("--chapter-output", type=Path, default=Path("chapter-audit-scores-recalculated.csv"))
    parser.add_argument("--track-output", type=Path, default=Path("track-audit-scorecard-recalculated.csv"))
    parser.add_argument("--expected-ids", type=Path,
                        default=Path("docs/169-core-chapter-ids.txt"),
                        help="UTF-8 file with one canonical DPA chapter ID per line (default: docs/169-core-chapter-ids.txt).")
    parser.add_argument("--require-169", action="store_true",
                        help="Require exactly 169 unique chapter rows across 16 track IDs.")
    args = parser.parse_args()

    with args.input_csv.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        rows = list(reader)
        columns = set(reader.fieldnames or [])

    required = {"chapter_id", "track_id", *DIMS}
    missing_columns = required - columns
    if missing_columns:
        raise SystemExit("FAIL: missing columns: " + ", ".join(sorted(missing_columns)))
    if not rows:
        raise SystemExit("FAIL: input contains no chapter rows.")

    expected_ids = None
    if args.expected_ids:
        expected_ids = {
            line.strip() for line in args.expected_ids.read_text(encoding="utf-8").splitlines()
            if line.strip() and not line.lstrip().startswith("#")
        }
        invalid_ids = [x for x in expected_ids if not (
            len(x) == 12 and x.startswith(CHAPTER_ID_PREFIX)
            and x[5:7].isdigit() and x[8:10] == "CH" and x[10:12].isdigit()
        )]
        if invalid_ids:
            raise SystemExit("FAIL: malformed IDs in expected-ID file: " + ", ".join(sorted(invalid_ids)[:10]))

    seen: set[str] = set()
    by_track: dict[str, list[Decimal]] = defaultdict(list)
    results = []
    for line_no, row in enumerate(rows, start=2):
        chapter_id = (row.get("chapter_id") or "").strip()
        track_id = (row.get("track_id") or "").strip()
        if not chapter_id or not track_id:
            raise SystemExit(f"FAIL line {line_no}: chapter_id and track_id are required.")
        if not (len(chapter_id) == 12 and chapter_id.startswith(CHAPTER_ID_PREFIX)
                and chapter_id[5:7].isdigit() and chapter_id[8:10] == "CH"
                and chapter_id[10:12].isdigit()):
            raise SystemExit(f"FAIL line {line_no}: malformed chapter ID {chapter_id!r}.")
        expected_track = chapter_id[4:7]
        if track_id != expected_track:
            raise SystemExit(f"FAIL line {line_no}: track_id {track_id!r} does not match {chapter_id} ({expected_track}).")
        if chapter_id in seen:
            raise SystemExit(f"FAIL line {line_no}: duplicate chapter_id {chapter_id}.")
        seen.add(chapter_id)

        values = []
        for column in DIMS:
            raw = (row.get(column) or "").strip()
            if not raw:
                raise SystemExit(f"FAIL line {line_no}: missing {column} for {chapter_id}; no imputation.")
            try:
                value = Decimal(raw)
            except InvalidOperation:
                raise SystemExit(f"FAIL line {line_no}: non-numeric {column}={raw!r}.")
            if not value.is_finite():
                raise SystemExit(f"FAIL line {line_no}: non-finite {column} for {chapter_id}.")
            if value < 0 or value > 4:
                raise SystemExit(f"FAIL line {line_no}: {column} outside the 0–4 scale.")
            if value != value.to_integral_value():
                raise SystemExit(f"FAIL line {line_no}: {column} must be an integer 0–4; got {raw!r}.")
            values.append(value)

        raw_mean = sum(values) / Decimal(7)
        by_track[track_id].append(raw_mean)
        results.append({
            "chapter_id": chapter_id,
            "track_id": track_id,
            **{f"raw_{i+1}": str(value) for i, value in enumerate(values)},
            "raw_mean": str(raw_mean),
            "reported_score_1dp": one_decimal(raw_mean)
        })

    if expected_ids is not None:
        missing = sorted(expected_ids - seen)
        extra = sorted(seen - expected_ids)
        if missing or extra:
            raise SystemExit(
                f"FAIL: expected-ID mismatch; missing={missing[:12]}, extra={extra[:12]}"
            )
    if args.require_169:
        if len(results) != EXPECTED_CHAPTERS:
            raise SystemExit(f"FAIL: expected {EXPECTED_CHAPTERS} unique chapters, found {len(results)}.")
        if len(by_track) != EXPECTED_TRACKS:
            raise SystemExit(f"FAIL: expected {EXPECTED_TRACKS} tracks, found {len(by_track)}.")

    chapter_fields = list(results[0].keys())
    with args.chapter_output.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=chapter_fields)
        writer.writeheader()
        writer.writerows(results)

    track_fields = [
        "track_id", "chapter_count",
        "mean_of_unrounded_chapter_means", "reported_score_1dp"
    ]
    with args.track_output.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=track_fields)
        writer.writeheader()
        for track_id in sorted(by_track):
            # Equal chapter weighting; calculate from unrounded chapter means.
            track_mean = sum(by_track[track_id]) / Decimal(len(by_track[track_id]))
            writer.writerow({
                "track_id": track_id,
                "chapter_count": len(by_track[track_id]),
                "mean_of_unrounded_chapter_means": str(track_mean),
                "reported_score_1dp": one_decimal(track_mean)
            })

    print(f"PASS: recalculated {len(results)} chapters across {len(by_track)} tracks.")
    print("NOTE: status classification is independent of numerical score.")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
