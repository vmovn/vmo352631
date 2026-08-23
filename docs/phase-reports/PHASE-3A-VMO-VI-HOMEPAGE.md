# Phase 3A — VMO Vietnamese Production Homepage

Date: 2026-08-23  
Branch: `main`  
Accepted baseline: `a5661b1`  
Scope boundary: public `/` only. No English frontend, no inner VMO pages, no Growth Mission backend, no vendor integrations, no Coolify deploy.

## Result

**PASS for technical gates.** Public `/` now reads Payload Homepage Global (`locale: vi`, `fallbackLocale: false`) through a dedicated production adapter into original Mortar sections. `/marketing-agency` remains the immutable Home4 Golden reference. Proof-bearing zones stay off. Human visual acceptance is still required at 390px and 1440px.

## Final Mortar composition

| Order | Semantic | Mortar source | Notes |
|---|---|---|---|
| Header | VMO chrome | `Header4.js` / `style-4` | Optional `brand` props; defaults keep Mortar mega-menu for `/marketing-agency` |
| 1 | Hero / positioning | `Home4Banner` | Partner proof, success metric, and award badge hidden |
| 2 | Business problem / Product-to-Market gap | `Home1SeatureSection` | Four original cards: three VMO35 problems + gap restatement |
| 3 | Four value layers | `Home4FeatureSection` | Google/Microsoft partner marks hidden; Mortar video kept as visual texture |
| 4 | Proof → Process → Scale | `Home4ProcessSection` | Exactly three stages: 0→1 / 1→2 / 2→N |
| 5 | Six capabilities | `Home3ServiceSection` | Scope-of-Work language; sixth slot added only when Payload provides six items |
| 6 | VMO OS / infrastructure | `Home6IntegrationSection` | Fake download/rating counters hidden; labels mapped to VMO OS modules |
| 7 | Growth Mission CTA | `Home4ContactSection` | Anchor `#trao-doi-bai-toan` |
| Footer | Home4 footer language | `Home4Footer` | Optional production copy; defaults keep original Mortar footer |

Story order on `/`:

Business Problem → Product-to-Market Gap → Four value layers → 0→1 Proof → 1→2 Process → 2→N Scale → Capabilities → Infrastructure → Growth Mission / Contact.

## Component source → VMO semantic mapping

- `Home4Banner` eyebrow/H1/subhead/CTAs ← `homepage.hero`
- `Home1SeatureSection` ← `homepage.productToMarketGap`
- `Home4FeatureSection` ← `homepage.valueLayers` (+ process principle as CTA lead)
- `Home4ProcessSection` ← `homepage.proofProcessScale`
- `Home3ServiceSection` ← `homepage.capabilities`
- `Home6IntegrationSection` ← `homepage.infrastructure`
- `Home4ContactSection` ← `homepage.growthMissionCTA`
- Header/Footer chrome ← Payload `header` / `footer` globals (VI)

`adaptMarketingAgencyDemoToHome4` is not used on `/`.

## Payload fields used

Public `/` loader: `loadProductionHomepageExperience({ locale: "vi" })`.

Used groups: `hero`, `productToMarketGap`, `valueLayers`, `proofProcessScale`, `capabilities`, `infrastructure`, `growthMissionCTA`.

New schema fields (migration `20260823_154724_phase3a_vmo_homepage`):

- `hero.secondaryCTA`
- `capabilities.description`

Seed file `src/cms/data/vmoHomepageVi.js` populates Payload only. `src/app/page.js` does not import it.

English Homepage localized strings remain the claim-free foundation. Shared (non-localized) array rows are written VI-last so EN seed cannot wipe production items.

## Proof controls on production `/`

OFF:

- `hero.showPartnerProof`
- `hero.showSuccessMetric`
- `hero.showAwardMetric`
- `productToMarketGap.showPartnerProof`
- `capabilities.showResultMetric`
- `measurement.enabled`
- `featuredProof.showTestimonials` / `showCases` / `showTeam`
- `insights.enabled`

ON (claim-free, not numeric proof):

- `infrastructure.enabled`
- `growthMissionCTA.enabled`

No client counts, success rates, awards, testimonials, cases, team photos, or partner logos are shown on `/`.

## Canonical VI copy summary

- Eyebrow: `Đơn vị triển khai tăng trưởng`
- H1: `Từ sản phẩm đến người dùng, giao dịch và một hệ thống tăng trưởng có thể lặp lại.`
- Subheadline: VMO as growth execution unit for ecosystem and enterprise projects.
- Primary CTA: `Trao đổi bài toán` → `#trao-doi-bai-toan`
- Secondary CTA: `Xem cách VMO triển khai` → `#cach-vmo-trien-khai`
- Value layers: Đưa sản phẩm ra thị trường / Tạo bằng chứng tăng trưởng / Biến cách làm thành hệ thống / Mở rộng bằng công nghệ
- Process: 0→1 Proof / 1→2 Repeatable Process / 2→N Scale
- Infrastructure positioning: `VMO OS là hạ tầng phía sau năng lực triển khai — không phải phần mềm để khách hàng đăng ký.`
- Final CTA: `Bạn đang cần đưa một sản phẩm ra thị trường?`

No Start Free / Buy Now / Book SaaS Demo copy.

## VMO brand token changes

`src/app/vmo-home.css` is scoped to `.vmo-home` only. Mortar `--primary-color*` tokens are not globally replaced.

Yellow `#FFBD24` is used for:

- Header CTA
- selected hero eyebrow
- process step numbers
- primary `primary-btn4` on the production homepage

Wordmark is the text `VMO` inside existing Header4 / Footer4 logo geometry. No generated logo asset.

`/marketing-agency` keeps original Mortar blue CTAs and Mortar logo.

## Responsive results

Horizontal overflow (`documentElement.scrollWidth - innerWidth`) at 320 / 390 / 430 / 768 / 1024 / 1440: **0**.

H1 wraps as expected because Vietnamese line length is longer than the Mortar English demo. Copy was fitted to original Home4Banner; layout was not redesigned.

390 and 1440 screenshots: `docs/phase-reports/evidence/phase-3a/`.

## Interactions

Surviving Mortar behavior on `/`:

- Header4 sticky + mobile sidebar
- Home4Banner blinking-dot field
- Home1 / Home4 WOW entrance classes
- Home3 service hover image-follow
- Home6 SVG `animateMotion` connectors
- Home4 contact IntersectionObserver `active` state and looping media
- Secondary CTA hash scroll to `#cach-vmo-trien-khai` (verified live)

Home6 fake metric counters are not mounted on `/`.

## Admin isolation

`/admin` remains Payload RootLayout, outside Mortar runtime (`isMortarFrontendPath("/admin") === false`). Live `/admin` returns Payload HTML. Homepage does not import Payload admin CSS into Mortar components.

## `/marketing-agency` unchanged result

Live HTML after Phase 3A:

- H1 still `Let’s Grow Your Business.`
- `Meta Partner` still present
- Success Rate / award badge still present
- No VMO H1
- Route still uses `marketingAgencyDemo` + `adaptMarketingAgencyDemoToHome4` only
- Build output: `/marketing-agency` is **static**; `/` is **dynamic**

Evidence: `docs/phase-reports/evidence/phase-3a/marketing-agency-390.png` and `marketing-agency-1440.png`.

## Source protection

```
node scripts/check-required-original-components.mjs
→ PASS: 9 protected Mortar experience components present.

node scripts/check-golden-source.mjs
→ baselineFiles 166, missing 0, changed 26
```

`changed` increased because original Mortar files received optional data props. No original files were deleted.

## Build / test / routes

- `npm ci`
- `npm run lint` — 0 errors (pre-existing warnings only)
- `npm run test:phase2` — 12/12 pass
- `npm run build` — success
- Route smoke on `next start :3002`: **51/51 original public routes HTTP 200**, plus `/admin` 200
- `/` renders VMO copy from Payload
- No Twenty / n8n / PostHog / Supabase strings on `/`

## Items needing human visual review

Stop here for visual acceptance. Do not start Phase 4 until these are reviewed:

1. `/` at **390** and **1440** — does the composed Home4/Home1/Home3/Home6 page feel like one Mortar site designed for VMO, not a collage?
2. Vietnamese H1 wrapping in Home4Banner, especially 320–430.
3. Home4FeatureSection without Google/Microsoft logos — empty right column vs original partner pair.
4. Home3 sixth capability slot uses a Home1 icon instead of a Home3 inline SVG.
5. Home6 tiles keep original Mortar vendor **icons** (Google Drive, Slack, HubSpot, etc.) while labels read `CRM.VMO` / `FLOW.VMO` / … This is art-direction reuse, not a claim those vendors are VMO OS. Confirm whether this is acceptable.
6. Header4 production nav is a flat hash list, not the original mega-menu. `/marketing-agency` still has the mega-menu.
7. Mortar contact videos/images around the Growth Mission CTA are template media, not VMO proof. Confirm they may stay as visual texture.
8. Theme toggle and back-to-top remain Mortar runtime chrome.

Screenshots to inspect:

- `docs/phase-reports/evidence/phase-3a/home-390.png`
- `docs/phase-reports/evidence/phase-3a/home-1440.png`
- `docs/phase-reports/evidence/phase-3a/home-process-390.png`
- `docs/phase-reports/evidence/phase-3a/home-process-1440.png`
- `docs/phase-reports/evidence/phase-3a/home-capabilities-1440.png`
- `docs/phase-reports/evidence/phase-3a/home-infrastructure-1440.png`
- `docs/phase-reports/evidence/phase-3a/home-cta-1440.png`
- `docs/phase-reports/evidence/phase-3a/marketing-agency-1440.png`
