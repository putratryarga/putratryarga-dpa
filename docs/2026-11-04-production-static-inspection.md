# 4 November 2026 — Public Production Static Inspection

**Target inspected:** https://putratryarga-dpa.vercel.app/  
**Method:** public page extraction and link/metadata inspection. This is static page inspection only, not interactive browser QA.  
**Important scope:** this is the currently public production domain, not the protected PR preview branch. Do not infer that PR #5/#6 changes have reached production; neither PR is merged.

## Confirmed public-page state

- Page title: Full-Stack Digital Performance Architect — Putra Try Arga.
- Language: Indonesian.
- Viewport meta: `width=device-width, initial-scale=1.0`.
- Theme metadata declares dark/light color scheme.
- Public page describes 16 specialist tracks.
- Two advanced electives are described as blueprints, with copy stating that the full curriculum is forthcoming. Therefore the 28 elective chapter specifications in PR #6 are not proven to be implemented in the public production website.
- Public page explicitly says the interactive chapter quiz bank is still being built; current comprehension checks are reflective/static, not a scored interactive quiz.

## Stale resource-link findings

The public production page still exposes legacy Skillshop Docebo URLs:
- `https://skillshop.docebosaas.com/learn/public/catalog/view/1`
- `https://skillshop.docebosaas.com/learn/courses/8692/google-ads-search-certification`

The PR #5 branch describes removing legacy Skillshop/Docebo links, but production remains on the unmerged main branch. These URLs must be removed/replaced on the release branch and the final production page must be rechecked after merge. Do not infer that PR changes have fixed production.

## Other static-content observations

- Some headings appear concatenated in extracted text (for example, the elective section label and the following heading; glossary intro and its next heading). Verify the actual rendered spacing and semantics in a real browser before treating this as a visual defect.
- Public page lists many external learning-resource links. A rendered link is not proof that the destination is current, accessible from Indonesia, free, or credential-bearing.
- Static page extraction does not validate selector interactions, chapter navigation, localStorage progress, theme switching, keyboard focus, screen-reader semantics, mobile overflow, console errors, network failures or browser-specific regressions.

## QA status

**Static production content fetch:** completed.  
**PR preview static fetch:** blocked by Vercel login requirement.  
**Interactive browser/runtime QA:** not run. The available browser automation service reported a negative wallet balance before a run could start.  
**Release implication:** production remains distinct from the unmerged PR branches. No claim of end-to-end QA or production update is made.
