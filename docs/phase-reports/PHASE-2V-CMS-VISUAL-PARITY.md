# Phase 2V — CMS Visual Acceptance

Date: 2026-08-23  
Branch: `main`  
Accepted pre-Payload visual baseline: `09ddc119` (`phase 1v: verify Mortar visual parity`)  
Current Payload baseline: `145de14` (`phase 2: add Payload CMS foundation`)  
Route under test: `/marketing-agency`  
Scope: prove Payload Local API → loader → fixed-shape adapter → original Home4 components did not flatten or redesign the purchased Mortar experience. Phase 3 / VMO content was not started.

## Result

**PASS — recommended to start Phase 3 after human visual acceptance.**

Live baseline vs current comparison shows exact section order, exact zone geometry, exact scroll heights at every tested width, matching Mortar demo copy, and matching interactions. Payload Admin remains isolated from the Mortar public runtime. No original Mortar file was deleted. No source fix was required.

## Method

Two production `next build` + `next start` runtimes:

| Role | Commit | Port |
| --- | --- | ---: |
| Baseline (pre-Payload hard-coded Home4) | `09ddc119` | `http://127.0.0.1:3001` |
| Current (Payload-backed Home4) | `145de14` | `http://127.0.0.1:3000` |

Current used a disposable local PostgreSQL 16 container, migrated with `20260823_133545_phase2_payload_foundation`, and seeded Mortar development/demo values. `/marketing-agency` is dynamic and loaded through Payload (`ƒ`), not the demo-fallback path.

Chrome (headless, `--hide-scrollbars`) captured top / mid / bottom viewports and measured Home4 visual zones, including composite sub-zones inside single component files. Pixel diffs used a 0.12 threshold. Interactions were retested against the same baseline.

Do not treat archived `reference/screenshots/` files as the gate; this review is live.

## Widths and route tested

Mandatory: **390px**, **1440px**.  
Spot-check: **320**, **430**, **768**, **1024**.

Only `/marketing-agency` is Payload-backed in Phase 2. `/admin` was checked for isolation. Public Mortar runtime was re-checked on the same marketing route.

## Scroll-height comparison

All six widths matched **exactly**:

| Width | Baseline | Current | Top Δpx | Mid Δpx | Bot Δpx |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 320 | 16944 | 16944 | 0% | 0.72% | 0% |
| 390 | 16781 | 16781 | 0% | 0.30% | 0% |
| 430 | 16659 | 16659 | 0% | 0.30% | 0% |
| 768 | 12287 | 12287 | 0.81% | 0% | 0% |
| 1024 | 10472 | 10472 | 0.01% | 0.28% | 0% |
| 1440 | 10730 | 10730 | 0.01% | 0.25% | 0% |

Mid-slice pixel noise is count-up / WOW timing, not composition.

## Section / composite-zone parity

Home4 was **not** compared by React file name only. Live DOM confirmed the internal visual zones that live inside composite files:

| Zone | Source file | 1440 baseline | 1440 current |
| --- | --- | ---: | ---: |
| `header-area style-4` | `Header4.js` | 82×1440 @0 | identical |
| `home4-banner-section` | `Home4Banner` | 760 @0 | identical |
| `partner-area four` | `Home4ParnerSection` | 104 @890 | identical |
| `home4-feature-section` | `Home4FeatureSection` | 749 @1124 | identical |
| `home4-video-section` | same file, second zone | 765 @2003 | identical |
| `home4-process-section` | `Home4ProcessSection` | 219 @2658 | identical |
| `home4-service-section` | `Home4ServiceSection` | 1009 @3007 | identical |
| `home4-counter-section` | same file, measurement zone | 991 @4146 | identical |
| `home4-industry-section` | same file, industries zone | 911 @5243 | identical |
| `home4-testimonial-section` | `Home4testimonialSection` | 884 @6284 | identical |
| `home4-case-study-section` | `Home4CaseStudySection` | 708 @7298 | identical |
| `home4-team-section` | `Home4TeamSection` | 1044 @8136 | identical |
| `home4-contact-section` | `Home4ContactSection` | 462 @9310 | identical |
| `footer-section style-4` | `Home4Footer` | 828 @9902 | identical |

Counts at 1440, identical on both:

- Header4 `style-4` (not `style-2`)
- 4 feature cards with original SVG art
- 3 process steps
- 6 service cards with original SVG bars (not generic CMS cards)
- 2 Swipers (testimonial + team)
- 29 WOW targets
- 2 case cards
- 4 videos
- partner marquee + Google/Microsoft partner marks inside the feature section

The same 16-zone inventory matched exactly at 320 / 390 / 430 / 768 / 1024, including stacked mobile rhythm.

Header checks: desktop Let’s Talk + support phone `+99-763 684 4563`; mobile hamburger; after scroll both headers become `header-area style-4 sticky`.

## CMS-rendered content parity

Payload seed `demoSeed: true` still publishes original Mortar demo copy. Live H1 on both runtimes:

`Let’s Grow Your Business.`

Process titles (stable localized-array seed) identical:

1. Step 01 Client Onboarding  
2. Step 02 Campaign Setup  
3. Step 03 Reporting & Insights  

Also identical: service card titles/bullets, case titles, team names/roles, “Let’s Start A Project?”, “Free Stretagy Session”, partner pills (`Our Happy Cleints 90%+`), and original Mortar typos (`We provides`, `Award Wining.`, `Handaled.`). Media still points at `/assets/img/home4/...` and `/assets/video/home4-video.mp4`.

Localized-array row IDs exist in the Payload JSON only. They do not appear in the rendered page.

Public HTML contains **no** VMO35 / Growth Gateway / Growth Mission / `vmo.vn` / `#FFBD24` content.

## Interaction results

| Check | Baseline `09ddc119` | Current `145de14` | Result |
| --- | --- | --- | --- |
| Testimonial Swiper | 2 Swipers; next click `Outstanding Support!` → `Superb Assistance!` | identical | PASS |
| Team Swiper | 6 slides; autoplay `Mr. Jorche Milton` → `Robert Jhonson` | identical | PASS |
| Modal video | `.modal-video` + YouTube `u31qwQUeGuM`; Escape removes nodes | identical | PASS |
| Feature/contact videos | 4 `<video>` elements | identical | PASS |
| WOW | 29 targets; 1 animated at top, 7 after mid-scroll | identical | PASS |
| Custom cursor @1440 | `cursor: none`, two 16px layers, Mortar purple | identical | PASS |
| Sticky header / scroll-progress | `style-4 sticky` + progress control | identical | PASS |
| Mobile menu | `.sidebar-button.mobile-menu-btn` → `.main-menu.show-menu` with original Home dropdown | identical | PASS |
| Industry list | original first-item `active` state retained in both | identical | PASS |

Home4 has no Digital-Agency-style GSAP scrub hero. Public Mortar GSAP/ScrollTrigger runtime remains loaded on `/marketing-agency` via the experience shell; it is absent on `/admin`.

## Payload Admin isolation

`/admin` live:

- HTTP 200, title `Login - Payload`
- `body` class empty
- `cursor: auto`
- `scroll-behavior: auto`
- WOW targets: 0
- cursor layers: 0
- theme switch: 0
- scroll-progress: 0
- `window.gsap` / `ScrollTrigger` / `bootstrap`: undefined

Public `/marketing-agency` still receives `tt-magic-cursor`, `header-area style-4`, WOW (29), and `cursor: none`.

## Source protection

```text
node scripts/check-required-original-components.mjs
PASS: 9 protected Mortar experience components present.

node scripts/check-golden-source.mjs
{
  "baselineFiles": 166,
  "missing": 0,
  "changed": 20
}
```

Deleted original files: **0**. Missing protected components: **0**.

The 20 changed Golden Master files are the expected Phase 1 runtime/modal/GSAP compatibility edits plus Phase 2 Home4 prop extraction (`page.js` + Home4 components). No original component was replaced with generic CMS cards.

## Regressions found

None that require a compatibility fix.

Acceptable differences:

- Count-up values in a still screenshot (`0X+` / `7+` vs `8+`) while counters are animating; both runtimes share this Mortar behavior.
- Sub-1% mid-viewport pixel noise from WOW/counter/autoplay frame.
- Payload localized-array row IDs in the Admin/API JSON only.

## Fixes made

None. Mortar components, classes, SVG art, Swiper instances, modal video, and composition were not modified in Phase 2V.

## Remaining acceptable differences

- `/marketing-agency` is now a dynamic Payload-backed route (`ƒ`) instead of a static page.
- CMS implementation details (row IDs, globals, locales) exist behind the adapter.
- Next font CSS-module hashes on `body` are unchanged from Phase 1V and match between these two Next 16 runtimes.

## Stop boundary

Phase 2V stops here. Do not start VMO content, Phase 3, bilingual public routes, Growth Mission, n8n, MCP, PostHog, or Twenty until a human accepts this gate.

## Recommendation

**PASS.** Payload did not flatten Home4. Phase 3 may start after human visual acceptance.
