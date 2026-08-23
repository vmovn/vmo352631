# Visual Golden Master

## Routes to capture before any migration
At minimum:
- `/`
- `/marketing-agency`
- `/digital-agency`
- `/it-consulting`
- `/saas-product`
- `/fintech`
- `/portfolio`
- `/about`
- `/service`
- `/case-study`
- `/news-insight-grid`
- `/contact`

## Widths
390px and 1440px mandatory.
Also test 320/375/430/768/1024 where needed.

## Capture
Store screenshots under:
`reference/screenshots/original/<route>/<width>.png`

After each visual phase:
`reference/screenshots/current/...`

## Acceptance
Evaluate:
- section count/order;
- composition;
- whitespace/rhythm;
- typography hierarchy;
- image geometry;
- animations/interactions;
- mobile behavior.

Pixel-perfect equality is not required after content changes. Structural and experiential parity is.

## Hard fail
- rich original section becomes plain title+description cards;
- animation disappears without approval;
- composite section silently loses sub-zones;
- mobile removes important content instead of adapting it.
