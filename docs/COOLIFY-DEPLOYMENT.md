# Coolify Deployment Contract

Target pipeline:
`Codex/Cursor → GitHub → Coolify`.

## Services
- VMO web application: GitHub/Docker deployment.
- PostgreSQL: separate Coolify service.
- Redis: separate only when required.
- Object storage/persistent media: separate service/provider.
- n8n: separate service.
- CRM/SCORE services: separate deployments.

## App contract
All connections through env vars.
No production database or Redis process inside web container.
No secrets committed to GitHub.

## Release
1. backup;
2. deploy/migrate;
3. health check;
4. smoke public/admin/forms;
5. verify assets/media;
6. DNS/SSL.
