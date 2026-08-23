# Mortar Component Contracts

## Contract type A — PRESERVE
Use for flagship Mortar experience components.
Allowed:
- props/data extraction;
- semantic HTML/accessibility fixes;
- compatibility refactor;
- class-preserving wrapper changes.
Not allowed:
- replace with generic grid/card;
- remove animation;
- reorder major zones;
- change interaction model.

## Contract type B — ADAPT
Composition remains recognizable, but data structure may change to fit VMO semantics.
Examples:
- pricing → engagement model;
- team → execution resources;
- industry → project contexts.

## Contract type C — SELECTIVE
Use sub-zones of composite components.
Before extracting:
- document original component;
- list retained DOM/classes/assets/effects;
- verify extracted visual against source.

## Contract type D — RESERVED
Shop/cart/checkout/product flows remain out of public VMO scope until a real business requirement exists.

## Adapter pattern
Preferred:
`Payload data → typed adapter → original Mortar component`

Avoid:
`Payload blocks → new generic renderer → replacement UI`

## Composite warning
Several Mortar component files contain multiple visual zones. Never judge a component by filename alone. Read the whole source before changing it.
