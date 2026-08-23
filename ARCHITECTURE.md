# ARCHITECTURE.md — Target Architecture

## Public architecture
```text
Visitor
  ↓
vmo.vn — Mortar Experience Layer
  ↓
Payload Content/Data Adapter
  ↓
Payload CMS + PostgreSQL
  ↓
Growth Mission / Events
  ↓
FLOW.VMO (n8n)
  ├─ CRM.VMO / Twenty
  ├─ SCORE.VMO / analytics
  └─ other execution services
```

## Runtime boundary
Mortar original root layout is client-heavy. Target structure must isolate frontend effects from Payload:

```text
Root layout — server-safe, minimal
├─ (frontend)
│  └─ MortarExperienceShell
│     ├─ Bootstrap JS
│     ├─ GSAP / ScrollTrigger / SplitText
│     ├─ WOW
│     ├─ animated cursor
│     ├─ smooth scroll
│     └─ theme/scroll helpers
└─ (payload)
   ├─ /admin
   └─ /api
```

Payload Admin must never inherit Mortar cursor, body classes, animation runtime or public theme scripts.

## Direction C migration
Do not combine framework migration and Payload installation in one change.
1. Reproduce original on current stack.
2. Capture Golden Master.
3. Migrate Next/React to Payload-compatible target selected from official docs at execution time.
4. Replace only incompatible libraries one by one, preserving behavior.
5. Pass visual/interaction parity.
6. Only then install Payload.

## CMS boundary
Fixed pages use fixed content models mapped to Mortar components.
Generic blocks are allowed only for campaign/landing pages where variation is a real requirement.

## Infrastructure
Production via Coolify:
- web container;
- PostgreSQL service;
- Redis service only if required by chosen queue/cache design;
- S3-compatible storage or persistent object storage;
- n8n as separate service;
- Twenty/PostHog or alternatives as separate services.
No database is bundled into the web image.
