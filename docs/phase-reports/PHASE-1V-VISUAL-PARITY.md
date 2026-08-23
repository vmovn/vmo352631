# Phase 1V — Mortar Visual Acceptance

Date: 2026-08-23  
Branch: `main`  
Golden Master: tag `mortar-original` → commit `e753792` (`vmo-1.0.1`)  
Current: `main` at Next.js `16.3.0` / React `19.2.6`  
Scope: live visual/interaction parity only. Payload, VMO content, rebrand, and Phase 2 work were not started.

## Result

**PASS — recommended to start Payload Phase 2.**

The migrated Mortar site preserves the purchased visual experience. Live original vs current comparison at 390px and 1440px shows matching section order, composition, typography hierarchy, image geometry, header/footer, sticky/fixed controls, and required interactions. No original section is missing. No Mortar component or effect was replaced.

Live visual structure is approximately **95%+ equivalent** to the Golden Master. No source compatibility fix was required.

## Method

Do not treat `reference/screenshots/original/` vs `reference/screenshots/current/` as the sole gate. Phase 1 already documented capture artifacts; this review confirmed them.

Live runtimes:

| Role | Source | Framework | Port |
| --- | --- | --- | ---: |
| Golden Master | git worktree from `mortar-original` (`e753792`) | Next.js 14.2.4 / React 18.3.1 | `http://127.0.0.1:3001` |
| Current | working tree `main` | Next.js 16.3.0 / React 19.2.6 | `http://127.0.0.1:3000` |

Both were production `next build` + `next start`. Chrome (headless, `--hide-scrollbars`) captured top / mid / bottom viewports and measured DOM structure for every priority route at both widths. Pixel diffs used a 0.12 threshold. Interactions were retested after the structural pass.

Stored Golden Master files under `reference/screenshots/original/` are JPEG bytes saved with a `.png` extension. Several original files also contain compressed content, large blank regions, or mixed/repeated sections. Several current files are tiled full-page composites with repeated sticky header/theme controls at tile seams. Those are capture artifacts, not source composition changes.

## Routes reviewed

Priority routes at **390px** and **1440px**:

1. `/`
2. `/marketing-agency`
3. `/digital-agency`
4. `/it-consulting`
5. `/saas-product`
6. `/fintech`
7. `/portfolio`
8. `/about`
9. `/service`
10. `/case-study`
11. `/news-insight-grid`
12. `/contact`

Special extra route (Phase 1 header check): `/marketing-agency-dark` at both widths.

## Widths reviewed

Mandatory: **390px** and **1440px**.

## Live scroll-height parity

All 26 live pairs matched exactly except `/saas-product` at 390px:

| Route | 390 original / current | 1440 original / current |
| --- | ---: | ---: |
| `/` | 14769 / 14769 | 8896 / 8896 |
| `/marketing-agency` | 16781 / 16781 | 10730 / 10730 |
| `/digital-agency` | 12991 / 12991 | 10452 / 10452 |
| `/it-consulting` | 13660 / 13660 | 11210 / 11210 |
| `/saas-product` | 14058 / 14038 | 10480 / 10480 |
| `/fintech` | 13044 / 13044 | 9454 / 9454 |
| `/portfolio` | 10408 / 10408 | 8506 / 8506 |
| `/about` | 10562 / 10562 | 7903 / 7903 |
| `/service` | 8023 / 8023 | 5795 / 5795 |
| `/case-study` | 6382 / 6382 | 4323 / 4323 |
| `/news-insight-grid` | 5963 / 5963 | 3196 / 3196 |
| `/contact` | 4857 / 4857 | 3290 / 3290 |
| `/marketing-agency-dark` | 16777 / 16777 | 10730 / 10730 |

Viewport pixel mismatch was under 2.2% for 24/26 pairs. The two outliers are mid-page slices of `/saas-product` (390 mid 6.59%, 1440 mid 12.53%). Those slices captured the testimonial Swiper on different autoplay frames of the **same** carousel. Top and bottom slices of that route match (1440 top 0.02% / bot 0%). This is slider timing, not a missing or rewritten section.

## Per-route visual checks

For each route × width, live original and current were reviewed for section count/order, height/rhythm, header/footer, typography hierarchy, spacing, image geometry, sliders, sticky/fixed controls, and mobile stacking.

| Route | 390 | 1440 | Notes |
| --- | --- | --- | --- |
| `/` | PASS | PASS | Home1 hero, partner pills, lavender card, footer map/columns match. |
| `/marketing-agency` | PASS | PASS | Header4 `style-4` / Let’s Talk / support phone restored. |
| `/digital-agency` | PASS | PASS | Hero, Pro badge, video-area, social rail, partner pills match. |
| `/it-consulting` | PASS | PASS | Banner slider, green CTA, contact bar, Home5 footer match. |
| `/saas-product` | PASS | PASS | Header6, trial hero, integrations, testimonial slider present. 20px mobile height, see below. |
| `/fintech` | PASS | PASS | Dark green Header2 pill nav, email CTA, 392X23α628 graphic match. |
| `/portfolio` | PASS | PASS | Dark hero, 448X490 placeholder, social rail, Download Resume match. |
| `/about` | PASS | PASS | “Bold Implact” hero, 300X300 placeholders, geometric row match. |
| `/service` | PASS | PASS | “Challenges Which We Tackle”, 1320X550, overlapping stat card match. Count-up values differ by capture timing only. |
| `/case-study` | PASS | PASS | Title, breadcrumbs, 760X467 grid cards match. |
| `/news-insight-grid` | PASS | PASS | “News & Inight 01”, 648X903 cards, Read More pills match. |
| `/contact` | PASS | PASS | Three pastel city cards and Let’s Talk header match. |
| `/marketing-agency-dark` | PASS | PASS | Dark `style-4` header parity with light marketing route. |

Original Mortar typos (`Cleints`, `Cancle`, `Implact`, `Wining`, `We provides`) remain on both runtimes and were not “corrected”.

## Special checks from Phase 1

### `/marketing-agency` Header4.js / `style-4`

Live header class is identical:

```text
original: header-area style-4
current:  header-area style-4
```

Current is **not** `style-2` (`Header4.jsx`). Desktop shows Let’s Talk + support phone; mobile shows the `style-4` hamburger. Explicit `import Header4 from '@/components/header/Header4.js'` is doing the intended job.

### `/marketing-agency-dark` header parity

Same `header-area style-4` on original and current. Dark body class is present on both. Next 16 uses different CSS-module font hash class names on `body`; this does not change Mortar composition.

### `/saas-product` mobile ~20px variance

Live confirmation of the Phase 1 note:

- original 390 scrollHeight `14058`
- current 390 scrollHeight `14038`
- delta **20px** (0.14%)

Section inventory is identical (12 top-level blocks, same order). The 20px is split as:

- `home6-review-section`: 525 vs 515
- `home6-feature-section`: 1730 vs 1720

No section is missing. Desktop 1440 height matches exactly (`10480`). This is not a stitching artifact, but it is not a meaningful composition regression and was not treated as a source bug.

### `/digital-agency` GSAP scrub timing

After scroll + 3s scrub settlement, original and current match exactly:

| State | width × height | transform |
| --- | --- | --- |
| before | 640 × 397.59375 | `matrix(1, 0, 0, 1, 0, 0)` |
| after | 1368 × 720 | `matrix(1, 0, 0, 1, 20, 500)` |

### WOW intermediate-scroll visibility

`/it-consulting` at 1440: 18 `.wow` targets on both. After scrolling to an intermediate position, **5** targets received `.animated` on both original and current.

### Duplicate `.js` / `.jsx` resolver

The only same-basename pair in `src/components` is:

- `src/components/header/Header4.js` (`style-4`, used by marketing routes)
- `src/components/header/Header4.jsx` (`style-2`)

No other duplicate component names exist. No additional resolver mismatch was found. Marketing light/dark both import the `.js` file explicitly.

## Interaction results

| Check | Original | Current | Result |
| --- | --- | --- | --- |
| Swiper `/it-consulting` | 2 Swipers, 3 bullets, `banner-img1.jpg` → `banner-img2.jpg` | identical | PASS |
| GSAP `/digital-agency` | 640×397.59 → 1368×720 `translate(20, 500)` | identical | PASS |
| Modal video `/marketing-agency` | `.modal-video` visible, YouTube `u31qwQUeGuM`, Escape removes modal | identical URL and close-to-zero | PASS |
| ApexCharts `/it-consulting` | 1 canvas, 1 SVG, 18 bars | identical | PASS |
| Custom cursor `/` @1440 | `body.cursor=none`, two fixed 16px layers, opacity 1, `rgba(88,65,216,*)` | identical | PASS |
| WOW `/it-consulting` | 18 targets, 5 animated mid-scroll | identical | PASS |
| Sticky/fixed | header, theme toggle, scroll-progress / back-to-top | present on both | PASS |

The first modal click probe failed on original only because `.video-player` had not been scrolled into a clickable position. A second probe that scrolled the player into view opened the original `react-modal-video` and the current local `ModalVideo` with the same iframe URL.

## Regressions found

**No real visual/source regression requiring a compatibility fix.**

Observed differences that are **not** source bugs:

1. Stored Golden Master / Phase 1 current screenshots: JPEG-as-PNG, tiling seams, repeated sticky chrome, blank regions, pre-animation vs animated WOW states.
2. `/saas-product` 390px live height 20px shorter, isolated to two Home6 sections, documented in Phase 1.
3. Mid-page pixel diffs on `/saas-product` caused by Swiper autoplay frame, not layout.
4. Count-up badges (`72+` vs `60+`, `12+` vs `9+`) differ by capture time while the counter is still running.
5. Next 16 font CSS-module class hashes on `body` differ from Next 14; visual type hierarchy is unchanged.

## Fixes made

None. Mortar components, effects, assets, and routes were not modified in Phase 1V.

## Remaining intentional differences

- Framework/runtime: Next 14 vs Next 16, React 18 vs React 19, locally preserved cursor/modal implementations from Phase 1.
- Body font CSS-module hashes.
- `/saas-product` mobile 20px page-height delta (0.14%).
- Capture-only differences in archived screenshot files.

## Source protection

Phase 1V did not delete, simplify, or replace any Mortar section. Payload packages were not installed.

## Stop boundary

Phase 1V stops here. Payload Phase 2 must not start until a human accepts this visual gate.

## Recommendation

**PASS.** Payload Phase 2 may start after human visual acceptance. Frontend remains the accepted Mortar Golden Master.
