# TESTING.md — Acceptance Gates

## No completion claim without fresh evidence

### Gate A — untouched Mortar
- install;
- current-stack build;
- all 7 light homepage routes render;
- selected inner pages render;
- 390px + 1440px screenshots captured.

### Gate B — compatibility migration
- build/typecheck/lint where configured;
- original route smoke;
- visual comparison against Golden Master;
- motion/Swiper/video/chart interactions checked;
- no original section deleted for convenience.

### Gate C — Payload
- `/admin` isolated from Mortar runtime;
- draft/publish;
- media;
- SEO;
- fixed homepage data adapter;
- public visual parity unchanged.

### Gate D — VMO content
- no Mortar brand/demo copy in public output;
- no fake proof;
- VMO35 brand-firewall scan;
- homepage understandable in 5–10 seconds.

### Gate E — bilingual
- VI/EN route mapping;
- section parity;
- hreflang/canonical;
- language switch maps document identity;
- 390px visual review both languages.

### Gate F — integrations
- lead persistence survives n8n outage;
- signed/retry integration;
- analytics consent;
- no PII leakage;
- external service failure isolation.

### Gate G — release
- production build;
- Docker build;
- production server smoke;
- responsive screenshots;
- SEO scan;
- secret scan;
- dependency audit reviewed;
- migration status;
- Coolify runbook verified.
