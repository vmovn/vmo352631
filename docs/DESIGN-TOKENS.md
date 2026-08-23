# Design Tokens

## Phase 0/1
Do not rebrand during compatibility migration. Preserve Mortar baseline.

## After Golden Master migration pass
Introduce VMO tokens in a dedicated override/token layer.

Primary:
- VMO Yellow `#FFBD24`.

Companion palette:
- near-black/deep navy;
- off-white;
- white;
- neutral gray.

## Rule
Do not search/replace colors across 40k+ lines of Mortar CSS.
Create semantic VMO overrides/tokens and migrate intentionally.
Do not change every original component color at once.
