import { marketingAgencyDemo } from "../data/marketingAgencyDemo.js";
import { assertHomepageShape } from "../types/homepage.js";

function mergeSection(section, fallback) {
  if (!section) return fallback;

  return Object.fromEntries(
    Object.entries(fallback).map(([key, fallbackValue]) => {
      const value = section[key];

      if (Array.isArray(fallbackValue)) {
        return [key, Array.isArray(value) && value.length ? value : fallbackValue];
      }

      if (
        fallbackValue &&
        typeof fallbackValue === "object" &&
        !Array.isArray(fallbackValue)
      ) {
        return [key, { ...fallbackValue, ...(value || {}) }];
      }

      return [key, value ?? fallbackValue];
    }),
  );
}

export function adaptHomepageToHome4(homepage) {
  const safeHomepage = assertHomepageShape({
    ...marketingAgencyDemo,
    ...(homepage || {}),
  });

  const hero = mergeSection(safeHomepage.hero, marketingAgencyDemo.hero);
  const gap = mergeSection(
    safeHomepage.productToMarketGap,
    marketingAgencyDemo.productToMarketGap,
  );
  const process = mergeSection(
    safeHomepage.proofProcessScale,
    marketingAgencyDemo.proofProcessScale,
  );
  const capabilities = mergeSection(
    safeHomepage.capabilities,
    marketingAgencyDemo.capabilities,
  );
  const measurement = mergeSection(
    safeHomepage.measurement,
    marketingAgencyDemo.measurement,
  );
  const proof = mergeSection(
    safeHomepage.featuredProof,
    marketingAgencyDemo.featuredProof,
  );
  const cta = mergeSection(
    safeHomepage.growthMissionCTA,
    marketingAgencyDemo.growthMissionCTA,
  );

  return {
    hero,
    partners: {
      leftStat: gap.partnerStatLeft,
      rightStat: gap.partnerStatRight,
      logos: gap.partnerLogos,
    },
    feature: {
      titleLead: gap.titleLead,
      titleTail: gap.titleTail,
      description: gap.description,
      items: gap.items,
      ctaLead: gap.ctaLead,
      cta: gap.cta,
      videoPath: gap.videoPath,
    },
    process,
    service: { capabilities, measurement },
    testimonial: proof,
    caseStudies: proof,
    team: proof,
    contact: cta,
  };
}
