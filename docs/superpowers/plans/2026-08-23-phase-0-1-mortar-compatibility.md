# Mortar Freeze & Compatibility Migration Implementation Plan

> **For agentic workers:** execute task-by-task and stop at the visual acceptance gate.

**Goal:** Freeze the purchased Mortar source, capture an evidence baseline, migrate Next/React to the exact Payload-compatible target, and preserve Mortar visual behavior before Payload installation.

**Architecture:** Mortar remains the only frontend. The root runtime is split so frontend-only effects can later be isolated from Payload Admin/API. No CMS code is introduced in this plan.

**Tech Stack:** Next.js, React, Bootstrap, GSAP, Swiper, WOWJS, Mortar source.

**Spec:** `docs/superpowers/specs/2026-08-23-vmo-mortar-v2-design.md`

## Global Constraints
- Do not install Payload.
- Do not delete Mortar experience components.
- Do not use `--force` or `--legacy-peer-deps` as the migration solution.
- Do not rebrand or change VMO content in this phase.
- Capture visual evidence before and after migration.
- Stop after Phase 1 for Cursor/human visual review.

---

### Task 1: Freeze Original Source

**Files:**
- Verify: `package.json`
- Verify: `src/app/layout.js`
- Use: `reference/golden-manifest.json`

- [ ] Run `git status` and preserve user changes.
- [ ] Run `npm ci`.
- [ ] Run `npm run build`.
- [ ] Start original app and smoke the seven light homepage routes.
- [ ] Commit the untouched source state.
- [ ] Create tag `mortar-original`.
- [ ] Run `node scripts/check-golden-source.mjs`; expected `missing: 0`, `changed: 0`.

### Task 2: Capture Golden Master

**Files:**
- Create screenshots under `reference/screenshots/original/`.

- [ ] Capture 390px and 1440px screenshots for routes listed in `docs/VISUAL-GOLDEN-MASTER.md`.
- [ ] Verify Swiper, GSAP hero, modal video, charts, custom cursor and WOW on relevant routes.
- [ ] Save a short report `docs/phase-reports/PHASE-0-GOLDEN-MASTER.md`.
- [ ] Commit screenshots/report.

### Task 3: Resolve Exact Target Framework

**Files:**
- Modify later: `package.json`, `package-lock.json`.
- Create: `docs/phase-reports/PAYLOAD-COMPATIBILITY-DECISION.md`.

- [ ] Read current official Payload installation requirements.
- [ ] Record exact Payload, Next.js, React and ReactDOM versions chosen.
- [ ] Record peer constraints for `react-animated-cursor`, `react-modal-video`, Swiper and other effect dependencies.
- [ ] Do not change dependencies until the decision document is written.

### Task 4: Isolate Mortar Runtime Boundary

**Files likely affected:**
- Modify: `src/app/layout.js`
- Create: frontend-only runtime shell under an appropriate `src/components` or route-group location.

- [ ] Add a test/smoke assertion that non-frontend route shells can render without Mortar client runtime.
- [ ] Split root metadata/server-safe layout from Mortar frontend runtime.
- [ ] Keep all existing public routes visually unchanged.
- [ ] Run build and route smoke.

### Task 5: Migrate Next/React Incrementally

**Files:**
- Modify: `package.json`, `package-lock.json`.
- Modify compatibility code only where test/evidence requires it.

- [ ] Upgrade exact framework versions from Task 3.
- [ ] Run install without force/legacy-peer-deps.
- [ ] Fix one incompatible dependency at a time using `docs/MORTAR-COMPATIBILITY.md`.
- [ ] After each effect-library change, smoke the affected route.
- [ ] Do not replace a component with a generic alternative.

### Task 6: Verify Source Preservation

**Files:**
- Use: `reference/golden-manifest.json`
- Use: `scripts/check-required-original-components.mjs`

- [ ] Run `node scripts/check-required-original-components.mjs`; expected PASS.
- [ ] Run `node scripts/check-golden-source.mjs`; changed files are allowed, missing files must remain `0`.
- [ ] Review all deleted files; no original Mortar experience component may be deleted without explicit approval.

### Task 7: Capture Migrated Visuals

**Files:**
- Create screenshots under `reference/screenshots/current/`.
- Create: `docs/phase-reports/PHASE-1-COMPATIBILITY.md`.

- [ ] Capture the same routes/widths as Phase 0.
- [ ] Document any intentional compatibility differences.
- [ ] Run production build and smoke.
- [ ] Commit as `phase/01-framework-migration`.
- [ ] STOP. Do not install Payload.

## Handoff
The next operator is Cursor for Phase 1V visual parity. Only after human acceptance may Codex start Payload Phase 2.
