# VMO OS Integration Boundary

Public site only exposes the capability story.

## Back-end flow
`vmo.vn → Payload → FLOW.VMO → CRM.VMO/SCORE.VMO/...`

## Principles
- website stores lead before external dispatch;
- n8n is orchestration, not source of truth;
- external service outage cannot break public contact flow;
- PostHog/SCORE honors consent and avoids sensitive PII;
- Twenty or other CRM is reached server-side/integration-side, never from browser;
- MCP is controlled, least privilege, draft-first.

Do not begin this phase until public visual + CMS + bilingual content are accepted.
