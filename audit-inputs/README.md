# Raw 169 × 7 Chapter Audit Score Input — Template Only

**Status:** EMPTY INPUT TEMPLATE. This is not a raw score record, not an audit result, and must not be described as a recalculated scorecard.

## Contents
- 169 canonical chapter IDs from `docs/169-core-chapter-ids.txt`.
- Track ID derived from each immutable chapter ID (T01–T16).
- Seven intentionally blank score columns (`dim_1`–`dim_7`).

## Blocking conditions before completion
The normative master SoT specifies seven chapter-audit dimensions scored as integers 0–4, an arithmetic mean per chapter, ROUND_HALF_UP to one decimal for reporting, and an equal-weight mean of unrounded chapter means for each track. However, the inspected normative document does **not** define or name the seven dimensions, and the authoritative raw values are unavailable.

Do not fill this template until both are recovered:
1. The authoritative, versioned definition and scoring anchors for all seven audit dimensions.
2. The original raw values for each chapter, with source/provenance, assessor, date, and version.

Do not infer dimension names from the separate five-dimension learner-assessment rubric. Do not copy learner scores or generate synthetic values. Synthetic test vectors may be used only in isolated CI self-tests and must never be saved as audit data.

## Expected CSV schema
`chapter_id,track_id,dim_1,dim_2,dim_3,dim_4,dim_5,dim_6,dim_7`

Allowed score values once authorized: integer 0, 1, 2, 3, or 4 only. Blank values are intentional in this template and must be rejected by the recalculation script. The script requires a complete 169-row matrix; it does not impute.

## Validation sequence
1. Attach the authoritative dimension-definition/version document.
2. Preserve the received source file unchanged and record source owner, retrieval date and hash.
3. Populate only the original observed values; retain missingness rather than estimate.
4. Validate exact chapter-ID set, track-ID correspondence, uniqueness, integer scale and complete dimensions.
5. Run `scripts/recalculate-chapter-audit-scores.py --require-169` and archive inputs and outputs together.
6. Reconcile all chapter and track totals against the prior official report; explain each variance.
7. Keep chapter validation status separate from the numeric mean.

**Warning:** this template is a collection aid only. It is not the missing historical raw score matrix.
