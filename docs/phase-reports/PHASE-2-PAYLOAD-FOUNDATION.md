# Phase 2 — Payload Foundation

Date: 2026-08-23  
Branch: `main`  
Accepted visual baseline: `09ddc119`  
Phase boundary: Payload foundation only; Phase 2V and Phase 3 were not started.

## Result

PASS for the Phase 2 technical gates. Payload CMS is installed, PostgreSQL is migrated and seeded, Admin/API are live and isolated from the Mortar public runtime, and `/marketing-agency` is rendered through Payload Local API → loader → adapter → original Home4 components. All 51 original public routes return HTTP 200. No original Mortar file or protected component was deleted.

## Versions

- Payload core: `3.88.0`
- Payload Next integration: `@payloadcms/next 3.88.0`
- PostgreSQL adapter: `@payloadcms/db-postgres 3.88.0`
- Lexical: `@payloadcms/richtext-lexical 3.88.0`
- SEO: `@payloadcms/plugin-seo 3.88.0`
- Redirects: `@payloadcms/plugin-redirects 3.88.0`
- Search: `@payloadcms/plugin-search 3.88.0`
- Next.js: `16.3.0` (unchanged in Phase 2)
- React / ReactDOM: `19.2.6` / `19.2.6` (unchanged in Phase 2)
- PostgreSQL image used for isolated local verification: `postgres:16-alpine`

No Redis, Payload integration beyond the three required plugins, or production object-storage adapter was added.

## Database architecture and migration

- Adapter: PostgreSQL through `DATABASE_URI`.
- Payload signing: `PAYLOAD_SECRET`.
- Both variables are documented in `.env.example`; no real credential is committed.
- PostgreSQL remains a separate service. The local verification database ran in a disposable external Docker container and was not bundled into the web application.
- Production is expected to use a separate Coolify PostgreSQL service.
- Migration: `20260823_133545_phase2_payload_foundation`.
- Migration status: batch `1`, ran `Yes`.
- `PAYLOAD_DB_PUSH` defaults to `false`; schema changes use committed migrations.

## Collections

1. Users
2. Media
3. Capabilities
4. Solutions
5. Projects
6. CaseStudies
7. Posts
8. Categories
9. Integrations
10. Team
11. Careers
12. FAQs
13. Leads

The Redirects and Search plugins add their own plugin-managed collections. Payload also owns its normal internal system collections.

## Globals

1. SiteSettings
2. Header
3. Footer
4. Homepage
5. AboutVMO
6. HowWeWork
7. VMOOSPage

`Homepage` is a fixed experience schema with exactly these ten groups:

1. `hero`
2. `productToMarketGap`
3. `valueLayers`
4. `proofProcessScale`
5. `capabilities`
6. `measurement`
7. `featuredProof`
8. `infrastructure`
9. `insights`
10. `growthMissionCTA`

It contains no generic block/page-builder field. The original Mortar DOM, classes, composition, responsive rules, animation hooks, media geometry, and interactions remain in the visual components.

## Localization

- Default locale: `vi`.
- Locales: `vi`, `en`.
- Business/content fields are localized from the first migration.
- The seed writes both locales using stable nested array row IDs so values remain present in both VI and EN on repeated runs.
- English public routing/content was not implemented.

## Plugins and SEO foundation

- Lexical supplies rich-text editing.
- SEO supplies localized title, description, image, and canonical-ready URL fields.
- Redirects supplies controlled `301` and `302` redirects.
- Search supplies a localized search index foundation and excludes drafts.

No public sitemap or route naming was changed; `SITEMAP.md` remains canonical.

## Access control

- Users: anonymous read is denied.
- Leads: anonymous read is denied; anonymous lead creation remains available for a future public form.
- Draft-enabled public collections expose only published documents anonymously.
- Authenticated administrators can manage protected/draft content.
- Seeded development administrator creation is opt-in through `PAYLOAD_SEED_ADMIN_EMAIL` and `PAYLOAD_SEED_ADMIN_PASSWORD` and was verified through `/api/users/login` plus `/api/users/me`.

## Admin and public-runtime isolation

Payload routes are mounted at:

- `/admin/[[...segments]]`
- `/api/[...slug]`

The original 51 public routes were not moved into a new route group. The pinned Payload 3.88 RootLayout provider/body content is mounted inside the repository root document so Payload receives one valid HTML document rather than nested `<html>/<body>` elements.

Live `/admin` verification:

- Payload login page: HTTP 200, title `Login - Payload`.
- React hydration errors: none.
- Mortar body classes: none.
- Custom cursor nodes/runtime: none; cursor is `auto`.
- WOW targets/runtime: none.
- GSAP and ScrollTrigger globals: absent.
- Bootstrap JavaScript global: absent.
- Mortar theme controls: absent.
- Scroll-progress UI: absent.
- Computed scroll behavior: `auto`.
- Payload font/theme/button styling: active and visually usable.

The public route still receives the accepted Mortar body classes, smooth behavior, WOW, Swiper, custom cursor layers, videos, and effects.

## CMS adapter architecture

The integration is separated under `src/cms/`:

- `payload/`: config building blocks, fields, access, collections, globals, plugins, locales.
- `loaders/`: server-side Payload Local API access.
- `adapters/`: translation from the fixed Homepage document to clean Home4 props.
- `types/`: fixed Homepage shape guard.
- `data/`: explicit Mortar development/demo fallback values.

`/marketing-agency` is now:

`Payload Local API → typed shape guard → Home4 adapter → original Home4 components`

Payload queries are not scattered through the visual components. The original Home4 components only receive structured props; their composite JSX, SVG art, classes, Swiper instances, modal-video behavior, WOW hooks, and visual sub-sections remain intact.

## Seed result

The development seed is idempotent and was run repeatedly against the migrated PostgreSQL database.

- Optional development administrator: created once and reused.
- Homepage: original Mortar development/demo values for `/marketing-agency`.
- VI and EN schema/data structure: verified.
- Required collection/global fixtures: verified.
- Leads: deliberately not seeded.
- Fake VMO customer proof: not seeded.
- Mortar demo values are marked development/demo-only.

Development media uses `public/media/`. `docs/PAYLOAD-MEDIA.md` records that production must use object storage or a persistent volume and must not depend on the ephemeral web-container filesystem.

## Verification results

- `npm ci`: PASS from the committed lockfile.
- `npm run lint`: PASS, 0 errors; four warnings (three preserved Mortar hook warnings and one generated `payload-types.ts` directive warning).
- `npm run test:phase2`: PASS, 8/8.
- `npm run build`: PASS on Next.js `16.3.0`; 53 static pages generated plus dynamic Admin, API, and `/marketing-agency`.
- PostgreSQL migration status: PASS, committed migration ran in batch 1.
- Idempotent seed: PASS on repeated execution.
- Admin authentication/API: PASS.
- Payload Global API, collection API, and Search API: PASS.
- Anonymous `/api/users`: HTTP 403.
- Anonymous `/api/leads`: HTTP 403.
- Original public route smoke: 51/51 HTTP 200.

Automated tests cover config loading, PostgreSQL registry/migration/seed, VI/EN localization, anonymous Users/Leads denial, fixed Homepage schema, Home4 adapter shape, Admin path isolation, and required Mortar component presence.

## Original-source protection

- `node scripts/check-required-original-components.mjs`: PASS, 9/9 protected components present.
- `node scripts/check-golden-source.mjs`: 166 baseline files, 0 missing, 20 changed.
- Deleted original Mortar files: 0.
- Missing protected Mortar components: 0.

The changed Golden Master files are expected prop extraction/runtime integration changes. No demo route, component, animation, effect, or asset was deleted.

## `/marketing-agency` visual and interaction parity

A fresh live instance of accepted commit `09ddc119` was built and compared side-by-side with the CMS-backed page.

- 390 × 844: exact scroll height `16751` on both; exact Home4 zone order, top coordinates, and heights.
- 1440 × 900: exact scroll height `10726` on both after the localized-array seed fix; exact section-zone composition.
- Header4: `header-area style-4` on both.
- H1: `Let’s Grow Your Business.` on both.
- Swiper instances: 2 on both.
- WOW targets: 29 on both; animated targets observed while scrolling.
- Process stages: 3 with all original titles/emphasis.
- Service cards: 6.
- Case cards: 2.
- Team cards: 6.
- Contact zone: 1.
- Modal video: opens YouTube `u31qwQUeGuM` and closes cleanly with Escape.
- Custom cursor: public body remains `cursor: none` with the two original fixed cursor layers.
- No meaningful visual difference was observed in the live comparison.

Technical parity is complete for Codex Phase 2; Cursor still owns the Phase 2V visual acceptance.

## Known blockers and production-readiness notes

These do not invalidate the Phase 2 foundation gate, but they block an unreviewed production release:

1. `npm audit --omit=dev` reports 9 production-tree advisories: 1 critical, 1 high, 6 moderate, and 1 low.
2. The critical advisory is against the accepted Mortar `swiper 8.4.5`; npm's offered fix is a major upgrade. It was not changed because Phase 2 may not silently alter the accepted slider experience.
3. The high advisory is against `sharp 0.34.2`; npm's offered fix is a major upgrade. It requires a separate Payload/image compatibility check.
4. Transitive PostgreSQL tooling/DOMPurify advisories have no non-breaking automatic fix in this exact pinned stack.
5. Payload email currently uses its console adapter for development. Production email is not part of Phase 2.
6. Production object storage is documented but intentionally not installed in Phase 2.
7. The Phase 2 checkpoint exists locally on `main`, but `git push origin main` was rejected with HTTP 403 because the configured `mlhubvn` GitHub credential does not have write access to `vmovn/vmo352631`. No remote or credential was changed.

No `--force` or `--legacy-peer-deps` was used.

## Git checkpoint

- Branch: `main`.
- Commit message: `phase 2: add Payload CMS foundation`.
- Push target attempted: `origin/main`.
- Push result: blocked by remote authorization (HTTP 403 for configured GitHub identity `mlhubvn`).
- The exact local commit SHA is reported in the Phase 2 handoff.

## Cursor Phase 2V review checklist

1. Compare `/marketing-agency` against `09ddc119` at exactly 390 px and 1440 px.
2. Confirm Header4 `style-4`, desktop/mobile navigation, support phone, and Let’s Talk CTA.
3. Confirm section count/order and vertical rhythm: banner, partner, feature/composite cards, video, process, services, measurement, industries, testimonials, cases, team, contact, footer.
4. Confirm typography, bold/strong emphasis, spacing, and placeholder/image geometry remain identical.
5. Exercise feature video, testimonial modal video open/close, both Swipers, WOW reveal, GSAP/ScrollTrigger behavior, and the custom cursor.
6. Review process titles after the stable localized-array seed fix at both widths.
7. Confirm the CMS-provided Mortar demo values match the accepted copy and that no VMO rebrand/content work has started.
8. Open `/admin` and confirm it remains visually usable and receives none of the Mortar public runtime/effects.
9. Record the final visual acceptance evidence; do not start Phase 3 until Phase 2V passes.
