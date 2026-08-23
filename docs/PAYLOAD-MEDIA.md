# Payload Media Boundary

Development uploads use `public/media` so Payload Media can be exercised locally.

Production must not store durable uploads in the web container filesystem. Coolify production will connect Payload Media to persistent S3-compatible/object storage or a mounted persistent volume in a later infrastructure phase. No production storage plugin is installed in Phase 2.
