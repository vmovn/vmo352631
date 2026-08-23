#!/usr/bin/env node
import fs from "node:fs";
const required = [
  "src/components/banner/Home3Banner.jsx",
  "src/components/banner/Home4Banner.jsx",
  "src/components/process-sections/Home4ProcessSection.jsx",
  "src/components/process-sections/Home5ProcessSection.jsx",
  "src/components/service-section/Home4ServiceSection.jsx",
  "src/components/service-section/Home2ServiceSection.jsx",
  "src/components/integration-section/Home6IntegrationSection.jsx",
  "src/components/portfolio-section/Home3PortfolioSection.jsx",
  "src/components/portfolio-section/Home7PortfolioSection.jsx"
];
const missing = required.filter(x => !fs.existsSync(x));
if (missing.length) {
  console.error("Golden experience components missing:", missing);
  process.exit(2);
}
console.log(`PASS: ${required.length} protected Mortar experience components present.`);
