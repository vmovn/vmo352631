# Payload Integration Contract

## Preconditions
Payload integration starts only after compatibility migration passes Golden Master.

## Route isolation
Public Mortar runtime and Payload runtime must be separated using Next.js route groups or equivalent structure.

## Rendering
Preferred server flow:
`Payload Local API → data adapter → Mortar component`.
Client interactivity remains inside the Mortar component where needed.

## Demo / production boundary
- `src/cms/data/marketingAgencyDemo.js` is immutable Mortar reference data for `/marketing-agency` only.
- `/marketing-agency` must render that file through its reference-only Home4 adapter and must never query the production Homepage Global.
- The Payload `Homepage` Global belongs to production `vmo.vn` content and has no Mortar demo fallback.
- Production loaders must fail closed when Payload is unavailable; they must not substitute demo claims, metrics, testimonials, cases, or team members.

## Access
- anonymous: published public content only;
- editor: content/draft workflow;
- admin/super-admin: elevated controls;
- Leads/Users never public.

## Localization
Payload localization is first-class from initial schema.
VI default, EN secondary.

## SEO
Use Payload SEO/redirect/search plugins where compatible, but canonical URL construction follows `SITEMAP.md`, not plugin defaults.

## Media
Production media must not depend on ephemeral web container filesystem.

## MCP
Add after CMS/content model is stable.
AI writes are draft-only by default.
