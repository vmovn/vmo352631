# Phase 0 — Mortar Freeze / Golden Master Report

Date: 2026-08-23  
Scope: Phase 0 only. No Phase 1 framework migration, Payload installation, dependency upgrade, rebrand, component cleanup, or redesign was performed.

## Result

Phase 0 passed. The purchased Mortar source is unchanged, builds successfully on its original Next.js/React stack, serves every original route, and has a 390px/1440px Golden Master evidence set.

## Environment

- OS: Windows
- Node.js: `v24.12.0`
- npm: `11.6.2`
- Application: `mortar-nextjs@0.1.5`
- Framework: Next.js `14.2.4`, React/React DOM `18.3.1`

## Commands and results

| Command | Result |
| --- | --- |
| `git status --short --branch` | Clean tracked source at `e753792` before installation/capture. |
| `node scripts/check-golden-source.mjs` | PASS: `baselineFiles: 166`, `missing: 0`, `changed: 0`. |
| Inventory count from `src/app`, `src/components`, and `public` | PASS: 51 page routes, 86 component files, 686 public assets, 6 MP4 assets. |
| `npm ci --no-audit --no-fund` | PASS: 383 packages installed from the existing lockfile. The first sandboxed attempt was denied registry access; the same command passed with network permission. |
| `npm ls --depth=0` | PASS: dependency tree resolved without missing/invalid dependencies. |
| `npm run build` | PASS: all 55 static pages generated, including all 51 application routes. The first sandboxed attempt was denied access to the original Google Fonts; the unchanged build passed with network permission. |
| Production server | PASS: Next.js 14.2.4 ready at `http://127.0.0.1:3000`. |
| HTTP smoke of every `src/app/**/page.js` route | PASS: 51/51 returned HTTP 200. |
| Golden Master capture | PASS: 24/24 required full-page PNGs captured. |

## Build status

`npm run build` completed successfully. Next.js generated 55 static pages and emitted the route table for all 51 application routes.

Non-fatal original-stack warnings retained as baseline evidence:

- Browserslist database is outdated.
- The original `public/assets/css/style.css` emits Autoprefixer mixed-support warnings for `start`/`end` values.

These warnings were not changed because dependency/CSS modernization belongs after the Phase 0 freeze.

## Route status

All 51 original application routes returned HTTP 200:

```text
/
/about
/award-recognitions
/career
/career/details
/cart
/case-study
/case-study/details
/case-study/style2
/checkout
/contact
/digital-agency
/digital-agency-dark
/faq
/fintech
/fintech-dark
/industry
/industry/details
/it-consulting
/it-consulting-dark
/marketing-agency
/marketing-agency-dark
/news-insight-grid
/news-insight-grid/details
/news-insight-grid/style2
/news-insight-grid/style3
/portfolio
/portfolio-dark
/portfolio/caption
/portfolio/carousel
/portfolio/classic
/portfolio/creative
/portfolio/details
/portfolio/grid
/portfolio/horizontal
/portfolio/interactive-link
/portfolio/vertical
/pricing
/product-details
/saas-product
/saas-product-dark
/service
/service/details
/service/style2
/shop
/social-responsibility
/startup-agency-dark
/team
/team/details
/team/style2
/team/style3
```

## Golden Master capture

Captured with the production build in the Codex in-app browser using exact layout viewports of 390px and 1440px. Files are stored at:

```text
reference/screenshots/original/home/{390,1440}.png
reference/screenshots/original/marketing-agency/{390,1440}.png
reference/screenshots/original/digital-agency/{390,1440}.png
reference/screenshots/original/it-consulting/{390,1440}.png
reference/screenshots/original/saas-product/{390,1440}.png
reference/screenshots/original/fintech/{390,1440}.png
reference/screenshots/original/portfolio/{390,1440}.png
reference/screenshots/original/about/{390,1440}.png
reference/screenshots/original/service/{390,1440}.png
reference/screenshots/original/case-study/{390,1440}.png
reference/screenshots/original/news-insight-grid/{390,1440}.png
reference/screenshots/original/contact/{390,1440}.png
```

Capture total: 24 PNG files, 6,638,421 bytes.

The screenshots intentionally retain the original Mortar placeholder media, sticky/animated states, route composition, whitespace, and long-page behavior. No capture content was fabricated or visually corrected.

## Interaction evidence

- Swiper: `/it-consulting` initialized one `.home5-banner-slider`, rendered three pagination bullets, and autoplay advanced the active image from `banner-img1.jpg` to `banner-img2.jpg` after 3.2 seconds.
- GSAP/ScrollTrigger hero: `/digital-agency` `.video-area` changed from 640px × 397.589px with identity transform to 1358.48px × 719.518px with translated transform after scroll.
- Modal video: `/marketing-agency` opened a visible `.modal-video` with YouTube video `u31qwQUeGuM`, then closed and removed the modal.
- ApexCharts: `/it-consulting` rendered one Apex canvas, one Apex SVG, and 18 bar elements.
- Custom cursor: two fixed 16px cursor layers were present; after pointer movement, opacity changed from 0 to 1 and position updated to approximately `(160, 180)`.
- WOW: `/it-consulting` contained 18 `.wow` targets; after scrolling to approximately 1089px, five targets received `.animated`.

Browser-console baseline notes:

- The in-app browser reported WOW MutationObserver capability warnings, but scroll activation was observed successfully.
- The digital-agency route reported GSAP `scrollTrigger` registration warnings from the original bundle, while the live hero transform still changed on scroll.

These are recorded as original baseline observations and were not modified in Phase 0.

## Source preservation

After installation, build, server smoke, interactions, and screenshot capture:

```json
{
  "baselineFiles": 166,
  "missing": 0,
  "changed": 0
}
```

No original route, component, animation, asset, package declaration, or lockfile entry was changed or deleted. A repository-only `.gitignore` was added for generated `node_modules`, `.next`, and `.npm-cache` directories; it does not alter the purchased experience and is not part of the 166-file Golden source set.

## Git checkpoint

- Untouched source commit: `e753792` (`vmo-1.0.1`)
- Annotated tag: `mortar-original` → `e753792`
- Evidence checkpoint: screenshots and this report are committed immediately after the tagged source state.

## Blockers

No Phase 0 blocker remains. Network permission was required for lockfile package downloads and the original Google Fonts build fetch. Original console/build warnings are documented above for later compatibility review.

## Stop boundary

Stopped after Phase 0 as required. Phase 1 was not started.
