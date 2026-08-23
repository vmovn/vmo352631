import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import configPromise from "../../payload.config.js";
import {
  Leads,
  Users,
} from "../../src/cms/payload/collections.js";
import { adaptHomepageToHome4 } from "../../src/cms/adapters/homepageToHome4.js";
import { marketingAgencyDemo } from "../../src/cms/data/marketingAgencyDemo.js";
import { homepageSectionNames } from "../../src/cms/types/homepage.js";
import { isMortarFrontendPath } from "../../src/utils/isMortarFrontendPath.mjs";

const requiredCollections = [
  "users",
  "media",
  "capabilities",
  "solutions",
  "projects",
  "case-studies",
  "posts",
  "categories",
  "integrations",
  "team",
  "careers",
  "faqs",
  "leads",
  "redirects",
  "search",
];

const requiredGlobals = [
  "site-settings",
  "header",
  "footer",
  "homepage",
  "about-vmo",
  "how-we-work",
  "vmo-os-page",
];

test("Payload config loads with PostgreSQL and exact schema registry", async () => {
  const config = await configPromise;
  const collectionSlugs = config.collections.map(({ slug }) => slug);
  const globalSlugs = config.globals.map(({ slug }) => slug);

  assert.equal(config.db.name, "postgres");
  for (const slug of requiredCollections) assert.ok(collectionSlugs.includes(slug));
  for (const slug of requiredGlobals) assert.ok(globalSlugs.includes(slug));
});

test("localization is VI default with VI/EN schema support", async () => {
  const config = await configPromise;
  assert.equal(config.localization.defaultLocale, "vi");
  assert.deepEqual(config.localization.localeCodes, ["vi", "en"]);
});

test("anonymous users cannot read Users or Leads", () => {
  const anonymous = { req: { user: null } };
  assert.equal(Users.access.read(anonymous), false);
  assert.equal(Leads.access.read(anonymous), false);
});

test("Homepage is a fixed schema, not a generic block builder", async () => {
  const config = await configPromise;
  const homepage = config.globals.find(({ slug }) => slug === "homepage");
  const names = homepage.fields.map(({ name }) => name).filter(Boolean);

  for (const section of homepageSectionNames) assert.ok(names.includes(section));
  assert.equal(names.includes("layout"), false);
  assert.equal(homepage.fields.some(({ type }) => type === "blocks"), false);
});

test("Homepage adapter returns the expected original Home4 data shape", () => {
  const adapted = adaptHomepageToHome4(marketingAgencyDemo);
  assert.deepEqual(Object.keys(adapted), [
    "hero",
    "partners",
    "feature",
    "process",
    "service",
    "testimonial",
    "caseStudies",
    "team",
    "contact",
  ]);
  assert.equal(adapted.hero.titleLead, "Let’s Grow");
  assert.equal(adapted.service.capabilities.items.length, 6);
  assert.equal(adapted.team.teamMembers.length, 6);
});

test("Payload paths remain outside the Mortar public runtime", () => {
  assert.equal(isMortarFrontendPath("/"), true);
  assert.equal(isMortarFrontendPath("/marketing-agency"), true);
  assert.equal(isMortarFrontendPath("/admin"), false);
  assert.equal(isMortarFrontendPath("/admin/login"), false);
  assert.equal(isMortarFrontendPath("/api/posts"), false);
});

test("required Mortar components remain present", () => {
  const requiredFiles = [
    "src/components/header/Header4.js",
    "src/components/banner/Home4Banner.jsx",
    "src/components/feature-section/Home4FeatureSection.jsx",
    "src/components/process-sections/Home4ProcessSection.jsx",
    "src/components/service-section/Home4ServiceSection.jsx",
    "src/components/testimonial-section/Home4testimonialSection.jsx",
    "src/components/case-study-section/Home4CaseStudySection.jsx",
    "src/components/team-section/Home4TeamSection.jsx",
    "src/components/contact-section/Home4ContactSection.jsx",
  ];

  for (const file of requiredFiles) assert.equal(fs.existsSync(file), true, file);
});
