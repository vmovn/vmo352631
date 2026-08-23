#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";

import { isMortarFrontendPath } from "../src/utils/isMortarFrontendPath.mjs";

const rootLayout = fs.readFileSync("src/app/layout.js", "utf8");
const runtimeShell = fs.readFileSync(
  "src/components/mortar-runtime/MortarExperienceShell.jsx",
  "utf8",
);

assert.equal(
  /^\s*["']use client["'];?/m.test(rootLayout),
  false,
  "Root layout must remain server-safe",
);
assert.equal(isMortarFrontendPath("/"), true);
assert.equal(isMortarFrontendPath("/marketing-agency"), true);
assert.equal(isMortarFrontendPath("/admin"), false);
assert.equal(isMortarFrontendPath("/admin/login"), false);
assert.equal(isMortarFrontendPath("/api"), false);
assert.equal(isMortarFrontendPath("/api/posts"), false);
assert.match(runtimeShell, /if \(!isMortarFrontendPath\(pathname\)\)/);
assert.match(runtimeShell, /return children;/);

console.log(
  "PASS: server-safe root and Mortar runtime exclusion for /admin and /api",
);
