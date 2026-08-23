---
name: preserving-mortar
description: Use when modifying, migrating, CMS-enabling, recomposing, or debugging any Mortar frontend component, layout, effect, or responsive behavior.
---
# Preserving Mortar

## Principle
The purchased Mortar experience is the reference implementation.

## Workflow
1. Locate original route/component in `TEMPLATE.md` and source.
2. Read the full component; composite files may contain multiple visual zones.
3. Check Golden Master screenshot and effect dependencies.
4. Extract data into props/adapter without changing composition.
5. Keep classes/assets/motion semantics unless compatibility requires a tested change.
6. Compare 390/1440 after change.
7. If experience degrades, stop and fix before continuing.

## Never
- replace with generic CMS cards;
- delete as “demo cleanup”;
- remove animation just to resolve dependency friction.
