# VMO Mortar V2 Design

## Goal
Build `vmo.vn` from the purchased Mortar Next.js template while preserving Mortar's visual/interaction value, adding Payload CMS only after framework compatibility is proven, and keeping VMO business meaning governed by `VMO35.md`.

## Approved architecture
Direction C:

`Mortar Freeze → Framework Compatibility Migration → Visual Golden Gate → Payload → VMO Content → Bilingual → Inner Pages → Growth Mission → VMO OS → Coolify`.

## Ownership boundaries
- Mortar owns Experience.
- Payload owns Content.
- VMO35 owns Meaning.
- VMO OS owns Execution.

## Critical constraints
- Do not replace original Mortar sections with generic CMS blocks.
- Do not install Payload in the same phase as Next/React migration.
- Mortar public runtime must be isolated from Payload Admin/API.
- Visual acceptance at 390px and 1440px is a hard gate.
- VI default, EN under `/en`.
- Production pipeline: Codex/Cursor → GitHub → Coolify.
- PostgreSQL/Redis/storage are separate services.

## Source risks
Original Mortar uses Next 14.2.4 + React 18 and client-heavy global runtime. Several UI dependencies have React 18 peer ranges. Migration must preserve behavior one dependency at a time.

## Success for Phase 1
A migrated Mortar app on the Payload-compatible framework target that visually/behaviorally matches the original Golden Master, with no Payload installed yet.
