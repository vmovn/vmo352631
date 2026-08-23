# DESIGN.md — Mortar Preservation & VMO Design Contract

## Design strategy
Mortar is the visual Golden Master. VMO rebrands and recomposes Mortar; it does not replace its experience with a new generic design system.

## VMO tokens
Primary signal: `#FFBD24`.
Use with deep navy/near-black, off-white, white and neutral gray.
Yellow is a signal, not a background flood.

Use yellow for:
- CTA;
- active state;
- line/connector;
- selected KPI/outcome;
- small icon/accent;
- controlled hover.

Avoid crypto/gaming feeling.

## Typography
Preserve Mortar typography hierarchy during migration first.
Only after Golden Master parity may VMO font choices be evaluated.
Do not change font + layout + framework in the same migration step.

## Motion
Preserve:
- GSAP entrance/scroll behavior;
- Swiper behavior;
- WOW animation;
- custom cursor on pointer devices;
- modal video/lightbox;
- charts/animated counters where reused.

On mobile/reduced motion:
- disable custom cursor;
- respect `prefers-reduced-motion`;
- reduce expensive effects, not content;
- provide static fallback where necessary.

## Composition rule
A component may change text/media/data shape without changing:
- section hierarchy;
- major DOM grouping;
- visual anchor;
- image placement;
- motion grammar;
- interaction model.

## Responsive acceptance
Mandatory review widths:
320, 375, 390, 430, 768, 1024, 1440.

## Visual hierarchy
Public VMO should feel:
business, execution-oriented, structured, measurable, credible.
Avoid:
SaaS pricing-dashboard look, AI hype, generic marketing cards, noisy gradients.

## Golden Master
See `docs/VISUAL-GOLDEN-MASTER.md`.
