# Mortar Source Inventory — Purchased Next.js Package

Audited path: `nextjs-files/mortar-nextjs`.

## Stack
- Next.js: `14.2.4`
- React / React DOM: `^18`
- Bootstrap: `^5.3.3`
- GSAP: `^3.12.5`
- Swiper: `^8.4.5`
- WOWJS: `^1.1.3`
- react-animated-cursor: `^2.11.2`
- react-modal-video: `^2.0.2`
- ApexCharts/react-apexcharts
- react-compare-slider
- react-countup
- yet-another-react-lightbox
- confetti scripts

## Size
- Page routes: **51**
- Component source files: **86**
- Public assets: **686**
- Asset image folders: `{"home1": 106, "home2": 61, "home3": 39, "home4": 61, "home5": 31, "home6": 69, "home7": 22, "innerpages": 210}`
- MP4 assets: **6**

## Homepage families
1. Startup Agency — `/`
2. Fintech — `/fintech`
3. Digital Agency — `/digital-agency`
4. Marketing Agency — `/marketing-agency`
5. IT Consulting — `/it-consulting`
6. SaaS Product — `/saas-product`
7. Portfolio — `/portfolio`
plus dark variants.

## Structural risk
`src/app/layout.js` is `"use client"` and injects Mortar runtime globally:
- CSS bundle;
- Bootstrap JS;
- GSAP/ScrollTrigger/SplitText scripts;
- WOW;
- magnetic hover;
- button hover effect;
- smooth scroll;
- animated cursor;
- scroll progress;
- theme switch.

This must be isolated to the public `(frontend)` route group before Payload Admin/API is introduced.

## Machine-readable references
- `reference/golden-manifest.json`
- `reference/mortar-route-composition.json`
- `reference/mortar-component-catalog.json`
- `reference/mortar-assets-summary.json`
