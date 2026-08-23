# Payload Compatibility Decision — Phase 1

Decision date: 2026-08-23  
Scope: framework compatibility only. Payload is referenced for version selection but is not installed in Phase 1.

## Selected target

| Package | Selected exact version | Basis |
| --- | ---: | --- |
| Payload CMS | `3.88.0` | Current npm `latest` on 2026-08-23. Reference only; not installed in this phase. |
| `@payloadcms/next` | `3.88.0` | Must match Payload exactly when Phase 2 starts. Reference only; not installed in this phase. |
| Next.js | `16.3.0` | Exact version pinned by both official Payload `v3.88.0` blank and website templates. |
| React | `19.2.6` | Exact version pinned by both official Payload `v3.88.0` templates and accepted by `@payloadcms/ui@3.88.0`. |
| React DOM | `19.2.6` | Exact version pinned by both official Payload `v3.88.0` templates and accepted by `@payloadcms/ui@3.88.0`. |
| `eslint-config-next` | `16.3.0` | Framework-matched lint configuration. |

The project is migrating from Next.js `14.2.4` with React/ReactDOM `18.x`.

## Official requirements checked

- [Payload installation documentation](https://payloadcms.com/docs/getting-started/installation) requires Node.js `20.9.0+` and supports Next.js `15.2.9–15.2.x`, `15.3.9–15.3.x`, `15.4.11–15.4.x`, or `16.2.6+` below Next 17.
- npm reports Payload `3.88.0` as the stable `latest` release.
- `@payloadcms/next@3.88.0` peers on Next.js `>=15.2.9 <15.3.0 || >=15.3.9 <15.4.0 || >=15.4.11 <15.5.0 || >=16.2.6 <17.0.0`.
- `@payloadcms/ui@3.88.0` peers on React/ReactDOM `^19.0.1 || ^19.1.2 || ^19.2.1`; React 18 is therefore not a complete future Payload baseline.
- The tagged official [blank template](https://github.com/payloadcms/payload/blob/v3.88.0/templates/blank/package.json) and [website template](https://github.com/payloadcms/payload/blob/v3.88.0/templates/website/package.json) both pin Next.js `16.3.0` and React/ReactDOM `19.2.6`.
- Next.js `16.3.0` requires Node.js `>=20.9.0` and accepts React/ReactDOM `^19.0.0`. The Phase 1 environment is Node.js `24.12.0`.

The tagged Payload templates are the decisive source for exact versions. Later patch releases exist, but selecting their exact template pins avoids inventing a framework combination different from the current stable Payload release.

## Mortar interaction dependency decisions

| Dependency | Baseline / peer requirement | React 19 decision |
| --- | --- | --- |
| `react-animated-cursor` | `2.11.2`; peers React/ReactDOM `^18.2.0`; no newer npm release | Peer-incompatible. Preserve the package's existing two-layer cursor implementation locally, including size, color, trailing motion, clickable scaling, mobile detection, and DOM/style semantics. Remove only the incompatible package wrapper. |
| `react-modal-video` | `2.0.2`; peers React/ReactDOM `^17 || ^18.2`; no newer npm release | Peer-incompatible. Preserve the package's existing component/API, iframe URL behavior, class names, focus/escape/close behavior, transition dependency, and CSS locally. Replace imports only; do not change modal visuals or triggers. |
| `react-transition-group` | `4.4.5`; peers React/ReactDOM `>=16.6.0` | Compatible. Promote to a direct dependency because the locally preserved modal uses its original `CSSTransition`. |
| Swiper | `8.4.7`; no React peer restriction | Keep unchanged and verify initialization, pagination, navigation, and autoplay under React 19. |
| GSAP | `3.13.0` resolved; no React peer restriction | Keep unchanged and verify ScrollTrigger hero transformation. |
| WOWJS | `1.1.3`; no React peer restriction | Keep unchanged and verify scroll activation. |
| ApexCharts / `react-apexcharts` | `4.7.0` / `1.7.0`; wrapper peers React `>=0.13`, ApexCharts `>=4.0.0` | Keep unchanged and verify chart canvas/SVG/bar rendering. |
| `yet-another-react-lightbox` | `3.23.0`; explicitly peers React/ReactDOM through `^19` | Compatible; keep unchanged. |
| `react-compare-slider` | `3.1.0`; peers React/ReactDOM `>=16.8` | Compatible; keep unchanged. |
| `react-countup` | `6.5.3`; peers React `>=16.3.0` | Compatible; keep unchanged. |
| Bootstrap | `5.3.6` resolved; peer is only `@popperjs/core ^2.11.8` | Compatible; keep unchanged, preserving the original Bootstrap bundle load. |
| `react-confetti` | `6.4.0`; peers React `^16.3 || ^17.0.1 || ^18 || ^19` | Compatible; keep unchanged. |
| `react-confetti-explosion` | `2.1.2`; peers React/ReactDOM `^18.x`; no source import exists anywhere in Mortar | Remove the unused incompatible declaration. This does not remove an animation or route behavior; the active Mortar confetti browser script remains preserved. |

## Migration rules

1. Do not install Payload or any `@payloadcms/*` package in Phase 1.
2. Pin Next.js, React, and ReactDOM exactly to the versions above.
3. Do not use `--force` or `--legacy-peer-deps`.
4. Preserve the same Mortar component composition, class names, assets, animation grammar, and interaction results.
5. Stop a dependency change if it produces a meaningful visual difference that cannot be corrected without redesign.
6. Require build, lint, 51-route smoke, protected-component guard, interaction verification, and 390/1440 screenshot comparison before the Phase 1 checkpoint.
