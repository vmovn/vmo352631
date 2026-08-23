const requiredSections = [
  "hero",
  "productToMarketGap",
  "valueLayers",
  "proofProcessScale",
  "capabilities",
  "measurement",
  "featuredProof",
  "infrastructure",
  "insights",
  "growthMissionCTA",
];

export function assertHomepageShape(homepage) {
  if (!homepage || typeof homepage !== "object") {
    throw new TypeError("Homepage data must be an object");
  }

  for (const section of requiredSections) {
    if (!homepage[section] || typeof homepage[section] !== "object") {
      throw new TypeError(`Homepage section '${section}' is required`);
    }
  }

  return homepage;
}

export { requiredSections as homepageSectionNames };
