# Payload CMS Content Model V2

## Principle
Fixed experience pages use fixed schemas. Do not rebuild the homepage as a generic page-builder.

## Collections
- Users
- Media
- Capabilities
- Solutions
- Projects
- CaseStudies
- Posts
- Categories
- Integrations
- Team
- Careers
- FAQs
- Leads
- Redirects (plugin-backed where appropriate)

## Globals
- SiteSettings
- Header
- Footer
- Homepage
- AboutVMO
- HowWeWork
- VMOOSPage

## Homepage Global
Fields mirror selected Mortar components:
- hero
- productToMarketGap
- valueLayers
- proofProcessScale
- capabilities
- measurement
- featuredProof
- infrastructure
- insights
- growthMissionCTA

Each field supports `vi` and `en`.

## Generic Pages
Only for:
- policies;
- campaign/LP;
- temporary informational pages.

If a block system is added, it must use wrappers/adapters around existing Mortar components, not new generic design primitives.
