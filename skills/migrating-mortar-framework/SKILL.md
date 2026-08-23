---
name: migrating-mortar-framework
description: Use when changing Next.js, React, routing, root layouts, client/server boundaries, or dependencies in the Mortar codebase.
---
# Migrating Mortar Framework

## Principle
Migrate the framework without silently migrating the design.

## Required
- preserve a current-stack Golden Master first;
- change dependency classes incrementally;
- isolate Mortar client runtime from admin/API routes;
- test incompatible effect libraries one by one;
- verify route + visual + interaction after each meaningful change.

No Payload installation in the same phase.
