---
name: releasing-vmo-web
description: Use when preparing, verifying, or deploying a VMO web release through GitHub and Coolify.
---
# Releasing VMO Web

Require fresh evidence for:
build, Docker, migrations, routes, admin, form, SEO, responsive and secret/security scan.

Pipeline:
GitHub release state → Coolify web deploy.
PostgreSQL/Redis/storage are separate services.

Do not declare production-ready when external verification is still missing.
