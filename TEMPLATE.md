# TEMPLATE.md — Mortar Source → VMO Mapping Contract V2

## Core rule
**Reuse first. Adapt data second. Recompose Mortar third. Create new UI last.**

Source paths below are from the purchased Mortar Next.js package audited for this kit.

## Home 1 — Startup Agency (`/`)
Original composition:
- `src/app/page.js` inline hero
- `Home1ParnerSection`
- `Home1SeatureSection`
- `Home1processSection`
- `IndustriesSection`
- `Home1ServiceSection`
- `Home1TestimonialSection`
- `Home1CaseStudy`
- `Home1ContactSection`

Best VMO reuse:
- Challenge We Tackle → Product-to-Market gap / 3 core business problems.
- Solution in Four Step → execution loop or diagnostic sequence.
- Smart Solution → capability presentation.
- Industries → project/sector context when useful.
- Case Study → verified proof only.
Status: **PRESERVE LIBRARY / SELECTIVE COMPOSITION**.

## Home 2 — Fintech (`/fintech`)
Files:
- `FintechBanner`
- `Home2PartnerArea`
- `Home2FeatureSection`
- `Home2ServiceSection`
- `Home2TestimonialSection`
- `Home2FeatureSliderSection`
- `Home2BlogSection`

Important: `Home2ServiceSection.jsx` contains multiple rich visual zones including help/service, global-impact/map and transaction/payment-style storytelling.
VMO reuse:
- global footprint/map/data-flow visual → shared execution infrastructure;
- transaction/journey visual → user→conversion→transaction;
- quick onboarding slider → 0→1 activation/journey pattern.
Never keep fintech/product claims.
Status: **SELECTIVE HIGH-VALUE VISUAL LIBRARY**.

## Home 3 — Digital Agency (`/digital-agency`)
Composition:
- `Home3Banner` — GSAP text/hero
- `Home3PartnerSection`
- `Home3aboutSection`
- `Home3PortfolioSection`
- `Home3ServiceSection`
- `Home3ProcessSection`
- `Home3TestimonialSection`
- `Home3BlogSection`

VMO reuse:
- hero motion;
- Latest Work → Projects/Growth Missions;
- Scope of Work → capability groups;
- Solution of Process → execution methodology;
- portfolio imagery → case/project storytelling.
Status: **PRESERVE — primary project/case library**.

## Home 4 — Marketing Agency (`/marketing-agency`)
Composition:
- `Home4Banner`
- `Home4ParnerSection`
- `Home4FeatureSection`
- `Home4ProcessSection`
- `Home4ServiceSection`
- `Home4testimonialSection`
- `Home4CaseStudySection`
- `Home4TeamSection`
- `Home4ContactSection`

This is the strongest **homepage foundation**.
VMO mapping:
- Hero → Growth Execution positioning.
- Feature marketing solutions → four VMO value layers / measurable execution.
- Process → 0→1 / 1→2 / 2→N.
- Service → capabilities/business problems.
- Case → verified Outcome.
- Team → Core Team + Flexible Workforce, only with real data.
- Contact → Growth Mission.
Important: `Home4ServiceSection` includes service + counter/industry/result-like zones; do not flatten into generic cards.
Status: **GOLDEN HOMEPAGE SOURCE**.

## Home 5 — IT Consulting (`/it-consulting`)
Composition:
- `Home5Banner` (Swiper)
- `Home5FeatureSection`
- `Home5ServiceSection`
- `Home5PartnerSection`
- `Home5AboutSection`
- `Home5ProcessSection` (ApexCharts)
- `Home5TestimonialSection`
- `Home5BlogSection`

VMO reuse:
- Business-Driven solutions → Business Problem before tool.
- consulting impact → execution benefits.
- problem-solving/process + chart → governance, measurement, 0→1→N.
- knowledge transfer/documentation semantics → SOP/playbook/learning.
Status: **PRIMARY HOW-WE-WORK / GOVERNANCE LIBRARY**.

## Home 6 — SaaS Product (`/saas-product`)
Composition:
- `Home6Banner`
- `Home6PartnerSection`
- `Home6FeatureSection`
- `Home6TestimonialSection`
- `Home6IntegrationSection`
- `Home6processSection`
- `Home6Faq`
- `Home6BlogSection`

VMO reuse:
- integrations → VMO OS integration capability;
- feature visual mechanisms → internal infrastructure explanation;
- support process → operating loop;
- FAQ → VMO OS/capability FAQ.
Do not retain SaaS subscription/free-trial/product-platform positioning.
Status: **PRIMARY VMO OS VISUAL LIBRARY**.

## Home 7 — Portfolio (`/portfolio`)
Composition:
- `Home7Banner`
- `Home7About`
- `Home7PortfolioSection`
- `Home7ServiceSection`
- `Home7TestimonialSection`
- `Home7BlogSection`

VMO reuse:
- project archive;
- curated Growth Mission showcase;
- capability/project visual landing.
Status: **PROJECT/PROOF LIBRARY**.

## Dark variants
Available:
- `/startup-agency-dark`
- `/fintech-dark`
- `/digital-agency-dark`
- `/marketing-agency-dark`
- `/it-consulting-dark`
- `/saas-product-dark`
- `/portfolio-dark`

Use only as section palette/reference. Do not create duplicate dark public site unless explicitly requested.

## Inner page library
Mortar includes:
- About
- Award & Recognitions
- Career + Details
- Contact
- FAQ
- Industry + Details
- Service style 1/2 + Details
- Case Study style 1/2 + Details
- News/Insight style 1/2/3 + Details
- Team style 1/2/3 + Details
- Social Responsibility
- Pricing
- Portfolio default/classic/creative/caption/carousel/grid/horizontal/interactive-link/vertical + Details
- Shop/Cart/Checkout/Product Details

VMO rules:
- About → `/vmo`.
- Service → `/nang-luc` and `/giai-phap`.
- Case Study → verified `/case-study`.
- Portfolio variants → `/du-an` visual choices.
- News variants → `/kien-thuc`.
- Career → `/tuyen-dung`.
- Industry → solution/project context if useful.
- Pricing → engagement model only, no invented public price.
- Shop/Cart/Checkout/Product → **RESERVED, not public by default**.

## Deletion policy
A source component may be removed only when:
1. it is explicitly marked DROP in this contract; or
2. a human approves removal after seeing the original and replacement.

“Unused demo code”, “cleanup”, “simpler CMS rendering” and “React incompatibility” are not sufficient reasons by themselves.
