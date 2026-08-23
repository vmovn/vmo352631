# Phase 1 — Mortar Framework Compatibility

Date: 2026-08-23  
Branch: `main`  
Scope: framework compatibility only. Payload, VMO content, localization, and Phase 2 work are not included.

## Result

Technical Phase 1 gates pass. Mortar now builds and runs on the exact framework versions pinned by the official Payload `3.88.0` templates, all 51 original routes return HTTP 200, protected source files remain present, and the required interactions work under React 19.

Phase 1V visual acceptance is still required before Payload installation.

## Framework versions

| Package | Before | After |
| --- | ---: | ---: |
| Next.js | `14.2.4` | `16.3.0` |
| React | `18.3.1` resolved from `^18` | `19.2.6` exact |
| React DOM | `18.3.1` resolved from `^18` | `19.2.6` exact |
| `eslint-config-next` | `14.2.4` | `16.3.0` |
| ESLint | `8.57.1` resolved | `9.39.5` resolved from `^9.16.0` |

Payload `3.88.0` and `@payloadcms/next` are version-selection references only. No Payload package is installed.

The detailed official-source decision is in `docs/phase-reports/PAYLOAD-COMPATIBILITY-DECISION.md`.

## Dependency compatibility decisions

- `react-animated-cursor@2.11.2` had React 18-only peers and no React 19 release. Its two-layer cursor behavior was preserved locally in `src/components/mortar-runtime/AnimatedCursor.jsx`; the incompatible package wrapper was removed.
- `react-modal-video@2.0.2` had React 17/18-only peers and no React 19 release. Its API, class names, iframe URL construction, geometry, close/focus behavior, and CSS were preserved locally in `ModalVideo.jsx` and `modal-video.css`.
- `react-transition-group@4.4.5` is now a direct dependency for the preserved modal transition and supports React/ReactDOM `>=16.6`.
- `react-confetti-explosion@2.1.2` was React 18-only and had no source import in Mortar. Its unused declaration was removed. The active Mortar browser confetti script remains unchanged.
- Swiper `8.4.7`, GSAP `3.13.0`, WOWJS `1.1.3`, ApexCharts `4.7.0`, `react-apexcharts` `1.7.0`, lightbox `3.23.0`, compare slider `3.1.0`, count-up `6.5.3`, Bootstrap `5.3.6`, and `react-confetti` `6.4.0` were retained.
- GSAP plugins use their Next-compatible `gsap/dist/*.js` entry points and register in the browser lifecycle. SplitText remains the GSAP implementation; no animation was removed.
- Next 14 resolved the duplicate extensionless `Header4` import to `Header4.js`, while Next 16/Turbopack selected `Header4.jsx`. Both marketing routes now explicitly import `Header4.js`, restoring the original `style-4` header and exact responsive geometry.

No install used `--force` or `--legacy-peer-deps`.

## Runtime boundary

`src/app/layout.js` is now server-safe and minimal. It delegates public-only effects to `MortarExperienceShell`.

The Mortar runtime includes:

- Bootstrap bundle and original confetti browser script;
- GSAP, ScrollTrigger, SplitText, and Observer usage in the preserved components/hooks;
- WOW;
- custom cursor;
- magnetic/button hover behavior;
- smooth scrolling;
- scroll progress;
- theme switching.

`/admin` and `/api` are reserved as non-Mortar paths. A live `/admin` check rendered with:

- empty body class;
- zero cursor layers;
- zero theme switches;
- zero Mortar scroll-progress controls.

`node scripts/check-mortar-runtime-boundary.mjs` passes.

## Technical verification

### Installation

- Normal `npm install` updated the lockfile.
- Fresh `npm ci --no-audit --no-fund` passed without force/legacy peer handling.
- 366 packages installed from the migrated lockfile.

### Build

`npm run build` passes:

```text
Next.js 16.3.0 (Turbopack)
Compiled successfully
Generating static pages (54/54)
```

### Lint

`npm run lint` passes with 0 errors and 3 pre-existing warnings:

- `SelectComponent.jsx`: existing effect dependency warning;
- `useInViewCounter.js`: existing ref cleanup warning;
- `useWow.js`: existing effect dependency warning.

The ESLint flat config contains narrow exceptions for Swiper 8's static `SwiperCore.use(...)` API, which ESLint 9 otherwise misidentifies as a React hook, and two intentional browser-state initialization effects. Original Swiper components were not rewritten for lint convenience.

### Route smoke

- 51 original application routes tested.
- 51 returned HTTP 200.
- 0 failures.
- All seven light homepage families passed: `/`, `/fintech`, `/digital-agency`, `/marketing-agency`, `/it-consulting`, `/saas-product`, `/portfolio`.

## Interaction verification

- Swiper: `/it-consulting` initialized the banner slider with three bullets and autoplay advanced from `banner-img1.jpg` to `banner-img2.jpg`.
- GSAP/ScrollTrigger: `/digital-agency` hero changed from 640×397.589px with identity transform to 1368×720px with `matrix(1, 0, 0, 1, 20, 500)` after scroll and scrub settlement.
- Modal Video: `/marketing-agency` opened a visible modal with the original YouTube iframe URL and closed to zero remaining modal nodes.
- ApexCharts: `/it-consulting` rendered one Apex canvas, one SVG, and 18 bar elements.
- Custom cursor: two fixed 16px layers reached opacity 1 and tracked the pointer.
- WOW: `/it-consulting` retained 18 targets; five entered the animated state after scrolling.
- Reserved admin boundary: no Mortar body classes/effect controls appeared on `/admin`.

## Source protection

Final guards:

```text
check-required-original-components: PASS (9 protected components)
check-golden-source:
  baselineFiles: 166
  missing: 0
  changed: 12
deleted original files: 0
```

No original route, component, animation, or asset was deleted.

## Changed-file summary

Categories changed in Phase 1:

- framework and lint metadata: `package.json`, `package-lock.json`, `eslint.config.mjs`;
- compatibility decision/report documents;
- server-safe root layout and Mortar runtime boundary;
- locally preserved cursor/modal implementations and modal CSS;
- GSAP plugin import/registration compatibility;
- explicit `Header4.js` imports for the two marketing routes;
- modal import adapters in the existing Mortar components;
- runtime-boundary assertion script;
- 24 migrated screenshots under `reference/screenshots/current/`.

## Screenshot status

- Original Golden Master: 24/24 files remain unchanged under `reference/screenshots/original/`.
- Migrated evidence: 24/24 files captured under `reference/screenshots/current/`.
- Required widths: 390px and 1440px layout viewports; output PNG widths are 375px and 1425px because the browser omits the 15px scrollbar strip, matching Phase 0.

The in-app browser could not reliably perform a single full-page capture on every long/dynamic route. Direct full-page captures were used where supported; remaining pages were assembled from browser-native viewport captures at recorded overlapping scroll positions. This fallback can repeat fixed headers/theme controls at tile boundaries and can capture WOW sections in an activated state, unlike some Phase 0 full-page files.

## Phase 1V visual review list

No live missing section or interaction is known after the `Header4.js` resolver fix. Cursor should still review:

1. All 24 original/current pairs at 390 and 1440, emphasizing live structure rather than pixel equality where capture methods differ.
2. Tile seams and repeated fixed controls in long-page migrated screenshots; these are capture artifacts, not source composition changes.
3. Phase 0 files that contain open sidebars, compressed content widths, large blank regions, or pre-animation states from the original full-page capture surface.
4. `/saas-product` at 390px, where one migrated tiled capture measured about 20px shorter before scrolling; live content/route/interaction checks pass.
5. Marketing light/dark responsive headers, specifically confirming the restored `Header4.js` / `style-4` result.
6. GSAP hero timing after its three-second scrub, plus WOW visibility at intermediate scroll positions.

## Stop boundary

Phase 1 stops here. Payload is not installed, Phase 2 is not started, and no VMO content/rebrand work was performed.
