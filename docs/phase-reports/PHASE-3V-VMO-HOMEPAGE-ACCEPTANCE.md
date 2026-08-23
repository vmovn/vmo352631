# Phase 3V — VMO Homepage Visual & Content Acceptance

Date: 2026-08-23  
Branch: `main`  
Baseline: `7ca90e5` (`phase 3a: build VMO Vietnamese homepage`)  
Scope: public `/` visual and content polish only. No English frontend, no inner VMO pages, no n8n/Twenty/PostHog/MCP, no Mortar redesign, no `/marketing-agency` mutation, no invented proof.

## Result

**PASS for proceeding to inner pages.**

Public `/` now reads as one Mortar website branded for VMO: Home1 → Home4 → Home3 → Home6 composition is intact, yellow `#FFBD24` stays a scoped signal, VMO OS no longer wears vendor logos, the sixth capability belongs to the Home3 icon family, and production Header4/Footer4 no longer leak Mortar demo chrome. `/marketing-agency` remains the immutable Home4 Golden reference.

Human can still reject on taste (H1 wrap length, hero placeholder asset, CTA decorative density). Those are remaining Mortar-source asset limits, not a composition rewrite.

## Final section composition

Unchanged from Phase 3A:

| Order | Semantic | Mortar source |
|---|---|---|
| Header | VMO chrome | `Header4.js` / `style-4` with `brand` |
| 1 | Hero / positioning | `Home4Banner` |
| 2 | Product-to-Market gap | `Home1SeatureSection` |
| 3 | Four value layers | `Home4FeatureSection` |
| 4 | 0→1 / 1→2 / 2→N | `Home4ProcessSection` |
| 5 | Six capabilities | `Home3ServiceSection` |
| 6 | VMO OS / infrastructure | `Home6IntegrationSection` |
| 7 | Growth Mission CTA | `Home4ContactSection` |
| Footer | Production Home4 footer | `Home4Footer` |

Story order remains: Business Problem → Product-to-Market Gap → Four value layers → Proof → Process → Scale → Capabilities → Infrastructure → Growth Mission.

## Changes made

- Production Home6 items now carry Mortar `iconMark` props (`layers` / `lobes` / `star` / `pen`) from `adaptVmoHomepage`. Defaults on `/saas-product` still render original vendor assets.
- Sixth Home3 capability row reuses the Home3 star mark instead of the Home1 `feature-icon1.svg` workaround.
- `Header4` skips the right-sidebar demo chrome when `brand` is provided; `/marketing-agency` still mounts `<Header4 />` with no brand and keeps New York / example.com / Conference copy in the original sidebar.
- Production footer no longer renders Facebook/LinkedIn/YouTube/Instagram demo URLs or the newsletter subscribe form. The original footer remains when `data.heading` is absent.
- Home4Feature empty partner column is filled with existing Home4 counter-vector SVGs (not logos, not metrics).
- Production CTA media is forced to decorative Mortar video + abstract vectors. People/office footage and `122×86` placeholders are not used on `/`.
- Canonical H1 is unchanged.

## VMO OS icon solution

Keep: Home6 integration wrap, connector SVG, `animateMotion`, spacing, hover, center `VMO OS` wordmark.

Replace: vendor `<img>` (Google Drive / Slack / HubSpot / Magento / Zoom / WhatsApp / GitHub / Spotify / Gmail / Flutter / Google Ads) on production `/` only.

How: adapter maps the 11 infrastructure titles to existing Home3 line-icon grammar via `item.iconMark`. `Home6IntegrationSection` renders `Home3ServiceMark` when that prop is present; otherwise it uses the original icon files. `/saas-product` passes no `data`, so Google Drive et al. remain.

No Twenty / n8n / PostHog / generic card grid.

Live audit: `integrationSvgs = 11`, `vendorSrcs = []` on `/`. SaaS still serves `integration-04.svg` and the label `Google Drive`.

## Capability icon solution

All six Home3 rows now use the same inline SVG family (`Home3ServiceMark`). The sixth row is the existing Home3 star mark (`viewBox 0 0 60 60`), not a Home1 PNG-in-SVG. Live: 6/6 `.icon svg`, 0 `.icon img`. Sixth title: `Mở rộng bằng công nghệ`.

## Hidden demo-content audit

On production `/` with `brand`:

| Demo string | Present |
|---|---|
| We are Global Digital Brand Tech Agency | no |
| New York | no |
| info@example.com | no |
| +99-763 684 4563 | no |
| Conference Summit - 2024 | no |
| facebook.com / default social URLs | no |
| right-sidebar-menu in DOM | no |

On `/marketing-agency` without `brand`: demo sidebar still present, Mega-menu still present, support phone still original.

## CTA media decision

Template people photos and dimension-placeholder PNGs implied team/project proof and looked broken. Production `/` now uses only:

- `assets/video/home4-contact-video1.mp4` (abstract Mortar motion, repeated in video slots)
- `home5-about-section-vector1.svg`
- `home6-counter-section-vector.svg`
- `home4-counter-vector2.svg`

`Home4ContactSection` still defaults to original 3 videos + 3 images when `mediaItems` is omitted, so `/marketing-agency` is unchanged.

## Hero / content polish

H1 remains:

`Từ sản phẩm đến người dùng, giao dịch và một hệ thống tăng trưởng có thể lặp lại.`

No positioning rewrite. Supporting copy stays business-first. Vietnamese line length still wraps more than the English Home4 demo; copy was not redesigned into a new hero.

Hero still uses the original `home4/banner-img.jpg` slot. In this workspace that file renders as a dimension placeholder (same Mortar asset gap as Phase 3A). No fake project photograph was generated.

## Home4 feature empty visual

Hiding Google/Microsoft left a vacant `col-lg-5`. Filled with existing Home4 counter-vector SVGs inside the original `partner-area` geometry, darkened only on `.vmo-home`. Semantic role: abstract Product → User / Transaction → Process texture. No fake logos or metrics.

## Responsive result

Horizontal overflow (`documentElement.scrollWidth - innerWidth`) at 320 / 390 / 430 / 768 / 1024 / 1440: **0**.

Mobile stacking: Header4 hamburger, flat VI nav, yellow CTA, H1 readable at 390. Desktop 1440 keeps Home4 two-column hero, Home3 row grammar, Home6 connector diagram.

## Interaction result

- Sticky Header4: class `sticky` after scroll.
- Hash nav: `Cách triển khai` / `Năng lực` / `Hạ tầng` point at `#cach-vmo-trien-khai` / `#nang-luc` / `#ha-tang-trien-khai`; click sets `#nang-luc`.
- Mobile menu: original sidebar, VMO wordmark, three anchors, yellow CTA, no demo mega-menu leak.
- Header CTA: `Trao đổi bài toán` → `#trao-doi-bai-toan`.
- Home6 `animateMotion` connectors retained.
- Home3 hover image-follow retained.
- Home4 contact `IntersectionObserver` `active` state retained.

Final mega-menu was not built.

## Proof-safety result

OFF on `/`: fake clients, partner logos, reviews, awards, case studies, team proof, success rates, downloads, ratings, fake numeric outcomes.

Infrastructure is labeled as capability (`CRM.VMO` … `Kết quả`), not as customer proof. Counters stay unmounted (`showCounters: false`).

## `/marketing-agency` protection

Live after Phase 3V:

- H1: `Let’s Grow Your Business.`
- Header4 `style-4` with Mortar mega-menu
- Meta Partner present
- CTA computed color `rgb(89, 86, 233)` (original Mortar, not `#FFBD24`)
- No VMO H1
- Demo sidebar still in original Header4

`node scripts/check-required-original-components.mjs` → **9/9 protected components.**  
`node scripts/check-golden-source.mjs` → **missing = 0**, deleted originals = 0 (`changed` reflects compatibility/content adapters, not deletions).

## Technical gates

```
npm ci
npm run lint          → 0 errors (4 pre-existing warnings)
npm run test:phase2   → 14 pass / 1 skip without .env; 15 pass with --env-file=.env
npm run build         → `/` dynamic, `/marketing-agency` static
```

Smoke on `next start :3002`:

- `/` 200
- `/marketing-agency` 200
- `/admin` 200
- 51 original public routes 200 (`/` + 50 remaining Mortar pages)
- `/saas-product` 200 and still shows Google Drive vendor icons

## Evidence

`docs/phase-reports/evidence/phase-3v/`

- `home-390.png`
- `home-1440.png`
- `vmo-os-1440.png`
- `capabilities-1440.png`
- `cta-1440.png`
- `mobile-header-menu-390.png`
- extras: `marketing-agency-390.png`, `marketing-agency-1440.png`, `value-layers-1440.png`, `capture-notes.json`

## PASS/FAIL for inner pages

**PASS.** Inner VMO pages may start. Do not begin English homepage or Growth Mission backend in this commit.

## Stop boundary

Stopped after Phase 3V. No inner-page routes, no EN frontend, no vendor OS install.
