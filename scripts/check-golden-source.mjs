#!/usr/bin/env node
import fs from "node:fs";
import crypto from "node:crypto";

const manifest = JSON.parse(fs.readFileSync("reference/golden-manifest.json","utf8"));
let missing = 0, changed = 0;
for (const [file, meta] of Object.entries(manifest.files)) {
  if (!fs.existsSync(file)) {
    console.log(`MISSING ${file}`);
    missing++;
    continue;
  }
  const hash = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
  if (hash !== meta.sha256) changed++;
}
console.log(JSON.stringify({ baselineFiles:Object.keys(manifest.files).length, missing, changed }, null, 2));
if (missing > 0) process.exitCode = 2;
