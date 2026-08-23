# Phase 2.6 — Production Homepage Content-Safety Foundation

Date: 2026-08-23  
Branch: `main`  
Accepted baseline: `715e7a30`  
Scope boundary: schema/data-source safety only; no VMO content, rebrand, redesign, public Homepage conversion, English routes, or Phase 3 work.

## Result

**PASS.** The immutable Mortar `/marketing-agency` reference is now independent of the production Payload Homepage Global. The fixed Homepage schema accepts claim-free production data, proof-bearing zones are opt-in, PostgreSQL migration and repeated seed pass, all 51 routes pass, and live visual comparison against `715e7a30` is exact at 390px and 1440px.

## Demo / production data boundary

The sources now have one purpose each:

- `src/cms/data/marketingAgencyDemo.js`: original Mortar reference/demo values for `/marketing-agency` only.
- `adaptMarketingAgencyDemoToHome4`: reference-only adapter whose fallback behavior is intentionally restricted to the Mortar reference path; it rejects any object other than the imported `marketingAgencyDemo` identity.
- `/marketing-agency`: `marketingAgencyDemo.js → reference-only Home4 adapter → original Home4 components`.
- `loadProductionHomepage`: Payload Local API loader for the production Homepage Global; it has no demo import or demo fallback and fails closed without `DATABASE_URI` / `PAYLOAD_SECRET`.
- `src/cms/data/productionHomepageFoundation.js`: claim-free production structural seed with all proof visibility switches off.
- Payload `Homepage`: production `vmo.vn` content only.

The route source contains no Payload loader, `getPayload`, or `findGlobal` call. The live production database contains an empty/disabled Homepage while `/marketing-agency` still renders the complete original Mortar demo, proving the sources are decoupled.

`demoSeed` remains as a read-only historical compatibility field. It defaults to `false`, the production seed writes `false`, and neither production loading nor future rendering may rely on it.

## Fixed Homepage schema safety changes

The ten fixed Homepage groups remain unchanged. No blocks or generic page builder were added.

### New visibility controls — default OFF

- `hero.showPartnerProof`
- `hero.showSuccessMetric`
- `hero.showAwardMetric`
- `productToMarketGap.showPartnerProof`
- `capabilities.showResultMetric`
- `measurement.enabled`
- `featuredProof.showTestimonials`
- `featuredProof.showCases`
- `featuredProof.showTeam`
- `infrastructure.enabled`
- `insights.enabled`
- `growthMissionCTA.enabled`

The controls are non-localized operational switches. VI/EN content fields remain localized.

### Fields now optional / claim-safe

- `measurement.metrics`: 0–4 rows; `value` is optional.
- `measurement.industries`: 0–6 rows.
- `featuredProof.testimonials`: 0–3 rows.
- `featuredProof.cases`: 0–2 rows.
- `featuredProof.teamMembers`: 0–6 rows.
- `growthMissionCTA.mediaItems`: 0–6 rows.
- Hero success/award values and case metric values remain optional.

### Fixed structural constraints retained

- `proofProcessScale.stages`: exactly 3 rows.
- `capabilities.items`: exactly 6 structural Mortar slots.

The production seed fills the three stage identifiers (`01`, `02`, `03`) and six empty capability slots only. It does not invent titles, descriptions, metrics, proof, testimonials, cases, team profiles, partners, awards, media, CTAs, or business claims.

## Production seed

The former Payload Homepage Mortar demo seed was replaced with `productionHomepageFoundation` for both `vi` and `en`.

Verified after writing the legacy Mortar Homepage Global, then running the new
seed twice consecutively:

- `demoSeed`: `false`
- measurement enabled: `false`
- metrics: `[]`
- testimonials: `[]`
- cases: `[]`
- team members: `[]`
- infrastructure enabled: `false`
- insights enabled: `false`
- all demo claim/copy fields: cleared to `null` or empty arrays
- proof process stages: 3 structural identifiers
- capabilities: 6 empty structural slots
- Leads seeded: no
- fake VMO proof seeded: no

The other Phase 2 development fixtures remain clearly labeled Mortar demo/development records and are not used by `/marketing-agency` or the production Homepage loader.

## PostgreSQL migration

- Database: disposable separate `postgres:16-alpine` service; no database bundled with the web app.
- Existing migration applied first: `20260823_133545_phase2_payload_foundation`.
- New committed migration: `20260823_145322_phase2_6_content_safety`.
- Batch status: foundation batch 1 / ran Yes; content-safety batch 2 / ran Yes.
- Clean-database replay: both committed migrations applied together in batch 1 / ran Yes.
- New migration adds all visibility columns to `homepage` and versioned `_homepage_v`, each defaulting to `false`.
- Array row-limit and numeric-required changes are Payload validation changes and require no destructive PostgreSQL column operation.
- Migration apply: PASS.
- Migration status: clean.
- Idempotent seed: PASS twice.
- Legacy-data upgrade: PASS; the old `Let’s Grow` Homepage value was cleared in both VI and EN.
- Redis: not added.
- Secret scan: no Phase 2.6 test URI, password, or secret appears in repository files.

## Tests and build

- `npm ci`: PASS from the committed lockfile after stopping one stale workspace Next process that held the Sharp DLL.
- `npm run lint`: PASS, 0 errors / 4 existing or generated warnings.
- `npm run test:phase2`: PASS, 10/10 with live PostgreSQL.
- `npm run build`: PASS on Next.js 16.3.0 / React 19.2.6.
- `/marketing-agency`: now static (`○`), confirming no Payload runtime dependency.
- Original public route smoke: 51/51 HTTP 200.
- `/admin`: HTTP 200.
- Homepage API `vi`: HTTP 200.
- Homepage API `en`: HTTP 200.
- VI default plus VI/EN localization: PASS.
- Anonymous Users and Leads reads remain denied: PASS.
- Payload Admin runtime isolation: PASS with no Mortar body classes, cursor, WOW, GSAP, ScrollTrigger, Bootstrap runtime, theme control, smooth-scroll behavior, or scroll-progress UI.

Automated coverage now proves:

1. `/marketing-agency` imports the demo source and reference adapter directly.
2. `/marketing-agency` has no production loader/Payload query.
3. Production loader contains no demo import/fallback.
4. Reference adapter returns the original Home4 data shape.
5. Zero testimonials, cases, team members, metrics, and industries are valid.
6. Measurement and proof controls default off.
7. Numeric proof values are not required.
8. Process remains exactly three stages.
9. VI/EN localization, Users/Leads access, Admin path isolation, and Mortar component presence remain intact.

## `/marketing-agency` visual and interaction parity

A fresh production runtime from accepted commit `715e7a30` used its own migrated/seeded comparison database. The Phase 2.6 build used a separate production-safe Homepage database. Both were inspected live.

### 390 × 844

- Baseline scroll height: `16751`
- Current scroll height: `16751`
- Every measured Home4 zone position and height: exact match.
- Header4 mobile hamburger: present and opens `.main-menu.show-menu`.
- H1, demo copy, partner proof, SVG/media geometry, stacked rhythm: unchanged.

### 1440 × 900

- Baseline scroll height: `10726`
- Current scroll height: `10726`
- Every measured Home4 zone position and height: exact match.
- Header: `header-area style-4` on both.
- 3 process stages, 6 service cards, 2 case cards, 6 team cards: unchanged.
- 2 initialized Swipers: present; autoplay state changes.
- 29 WOW targets: present.
- 4 video elements: present.
- Modal video: opens YouTube `u31qwQUeGuM`; Escape removes the modal.
- Public custom cursor: `cursor: none` with two fixed Mortar cursor layers.

The accepted 16-zone visual composition, original demo copy, responsive geometry, animations, media, and interactions are unchanged. No meaningful visual difference was observed.

## Public `/` unchanged

- `src/app/page.js` diff against `715e7a30`: empty.
- Live 1440 scroll height: baseline `8878`, current `8878`.
- H1: `Innovating The Future of Technology.` on both.
- Header: `header-area style-1` on both.
- Every measured Home1 section coordinate and height: exact match.
- `/` remains the original Mortar Homepage and was not connected to Payload or VMO content.

## Original-source protection

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

- Missing original files: 0.
- Deleted original files: 0.
- Protected components: 9/9.
- Original Mortar component files modified in Phase 2.6: 0.
- No layout, class, animation, asset, or visual composition was changed.

## Phase 3 blockers / handoff requirements

There is no technical schema blocker to begin Phase 3 after human acceptance of this report. Phase 3 must still:

1. provide approved VI production content before wiring `/`;
2. honor every visibility switch and omit disabled/empty proof zones without demo fallback;
3. keep testimonials, cases, team, partner proof, metrics, awards, and numeric outcomes off until verified;
4. create a production-only adapter for the intended Mortar composition rather than reusing the reference adapter;
5. preserve `/marketing-agency` as an immutable regression route;
6. obtain Cursor visual acceptance for any final VMO composition;
7. retain the known dependency-audit review before production release; Phase 2.6 did not change Swiper, Sharp, Next, or React.

Phase 3 content and composition were not started.

## Git checkpoint

- Branch: `main`.
- Commit message: `phase 2.6: prepare production-safe homepage schema`.
- Push target attempted: `origin/main`.
- Push result: blocked by GitHub authorization; configured identity `mlhubvn` does not have write access to `vmovn/vmo352631` (HTTP 403).
- No remote URL, credential, branch, or history was changed to bypass the denial.
- The exact local commit SHA is reported in the Phase 2.6 handoff.
