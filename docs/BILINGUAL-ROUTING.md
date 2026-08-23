# Bilingual Routing

## Model
VI default without prefix.
EN always under `/en`.

One Payload document identity may have localized:
- title;
- slug;
- summary;
- body;
- SEO;
- CTA;
- labels.

## URL pairs
Examples:
- `/nang-luc/foo` ↔ `/en/capabilities/foo-en`
- `/giai-phap/bar` ↔ `/en/solutions/bar-en`
- `/kien-thuc/x` ↔ `/en/insights/x-en`

## Switcher
Language switch resolves the sibling localized route from document identity, never string-replaces URL segments blindly.

## Publish gate
EN page cannot be marked production-complete when VI has sections missing in EN unless the page is intentionally unavailable in EN.

## SEO
- canonical to current locale URL;
- reciprocal hreflang;
- `x-default` points to VI default where appropriate;
- sitemap contains both locales.
