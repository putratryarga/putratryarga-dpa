# Historical Audit Recovery and Raw-Score Provenance

**Recovery date:** 21 November 2026 (Asia/Bangkok)
**Source:** recovered AutoClaw artifact `DPA_Audit_Report_2026-11-04`, amendment dated 5 November 2026.

## Recovery and integrity

The archive was found in the owner's AutoClaw `Default\DPA_Audit_Report_2026-11-04` project, preserved in the task recovery area, and copied into this repository at [`historical-source-DPA_Audit_Report_2026-11-04`](historical-source-DPA_Audit_Report_2026-11-04/). The repository copy has 18 files / 685,540 bytes and matched every preserved source file byte-for-byte by SHA-256. The original source archive remains untouched.

Key artifact checksums:

| Artifact | SHA-256 | Result |
|---|---|---|
| `01-169-chapter-audit-matrix.csv` | `87F809E9D6FC1BBA335ED47E598034A7892C9C06938073D2393B9153DE60F755` | 169 unique chapter rows; seven raw scores per row; no blank scores |

## HIST-001 — raw score matrix recovered

The matrix defines seven score dimensions: instructional substance, competency alignment, technical accuracy, practical exercise, deliverable, resource/evidence quality, and assessment alignment. The accompanying methodology defines the 0–4 anchors, status rules, version/date and score formula (arithmetic mean, rounded to one decimal). An independent recomputation of all 169 row averages produced zero mismatches.

**Track-summary reconciliation is not clean.** Recomputing each track mean from its raw seven-dimension values and rounding to one decimal gives five differences from the report's track scorecard: Media Analytics 2.8 vs reported 2.9; CRM 2.9 vs 2.6; Content 2.6 vs 2.7; KOL/Creator 2.6 vs 2.7; Community 2.6 vs 2.7. The other 11 track means match. These are historical report/matrix discrepancies, not silently corrected source data. The original matrix is preserved as-is; HIST-001 remains PARTIAL until the scorecard is reconciled or the owner accepts an explicit historical discrepancy note.

The score provenance is four auditors assigned **disjoint** track groups (A T01–T04; B T05–T08; C T09–T12; D T13–T16) against an earlier repository snapshot. These are historical Class-A desk-review scores. They are not multiple raters per chapter; inter-rater reliability was not measured; the source itself says SME review was not performed. Therefore HIST-001 is **RECOVERED / ROW-RECOMPUTED, TRACK-SUMMARY DISCREPANCIES OPEN**, while current-snapshot content acceptance remains open under CORE-002 and other acceptance requirements.

## HIST-002 — findings and discrepancy log recovered

- `02-issue-register.csv`: 23 unique findings, DPA-001 through DPA-023; severity totals P1=10, P2=8, P3=5.
- `05-discrepancy-log.md`: the original D-1 through D-12 entries, including the 5 November amendment.
- The report, methodology, validated-chapter evidence and 90-cell agency matrix are preserved alongside the registers. They are historical snapshot evidence, not current release approval.

HIST-002 is **RECOVERED**. The current acceptance/release report still needs to distinguish those historical findings from later supplemental findings and any new fixes.

## S0 — standalone original AutoClaw prompt remains unresolved

Targeted searches covered the recovered repository history, the AutoClaw `Default` project folders, the named audit archive, available prompt/brief files and the supplied DPA directive attachments. The exact original standalone AutoClaw Master Prompt was not found. A later DPA directive is not asserted to be the same file or a verbatim replacement. SCP-001 remains **BLOCKED** pending recovery or an owner-approved replacement baseline.
