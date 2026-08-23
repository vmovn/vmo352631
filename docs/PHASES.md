# VMO Web V2 — Build Phases

## Phase 0 — Mortar Freeze (Codex)
- fresh repo from purchased source;
- install/run unchanged;
- tag `mortar-original`;
- generate source inventory;
- capture Golden Master.
**STOP → send screenshots/report for review.**

## Phase 1 — Compatibility Migration (Codex)
- check current official Payload requirements;
- upgrade Next/React only as needed;
- isolate public Mortar runtime;
- resolve incompatible dependencies one by one;
- do NOT install Payload yet.
**Gate:** Golden Master visual/interaction parity.

## Phase 1V — Visual Acceptance (Cursor)
- compare 390/1440;
- fix animation/responsive/parity only;
- no business-content redesign.
**STOP → human approves.**
**Checkpoint:** push GitHub + provide ZIP full code for independent audit.

## Phase 2 — Payload Foundation (Codex)
- Payload + PostgreSQL adapter;
- collections/globals/localization;
- admin/API route isolation;
- homepage typed adapters using original Mortar components;
- SEO basics.
**Gate:** CMS works while frontend still matches accepted Phase 1V.

## Phase 2V — CMS Visual Check (Cursor)
- ensure CMS data did not flatten visual components.
**STOP → human approves.**

## Phase 3 — VMO VI Content (Cursor + Codex only for schema gaps)
- VMO35 copy;
- Mortar component semantics remapped;
- no fake proof.
**Gate:** VI content + mobile + visual.

## Phase 4 — English Parity (Cursor)
- EN localized content/routes;
- language switch;
- hreflang/canonical.
**Gate:** section parity.

## Phase 5 — Full Mortar Inner-Page Exploitation (Cursor, Codex for data models)
- About/Service/Case/Portfolio/Insight/Career/Industry/FAQ;
- reuse source pages and effects.
**Checkpoint:** GitHub + ZIP full code for audit.

## Phase 6 — Growth Mission (Codex)
- contact/intake;
- validation/consent/attribution;
- Payload lead persistence.

## Phase 7 — VMO OS Integrations (Codex)
- n8n/jobs/retry;
- Twenty boundary;
- SCORE/PostHog;
- MCP after content model stability.

## Phase 8 — Production Hardening (Codex, Cursor final visual)
- Docker;
- security;
- SEO;
- performance;
- production smoke;
- Coolify docs.
**Checkpoint:** GitHub + ZIP full code before production.

## Phase 9 — Coolify Release
- deploy web from GitHub;
- PostgreSQL/Redis/storage as separate services;
- migrate;
- health/smoke;
- DNS `vmo.vn`.
