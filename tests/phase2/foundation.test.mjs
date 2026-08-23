import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import configPromise from "../../payload.config.js";
import {
  Leads,
  Users,
} from "../../src/cms/payload/collections.js";
import { adaptMarketingAgencyDemoToHome4 } from "../../src/cms/adapters/homepageToHome4.js";
import { adaptVmoHomepage } from "../../src/cms/adapters/vmoHomepage.js";
import { marketingAgencyDemo } from "../../src/cms/data/marketingAgencyDemo.js";
import { productionHomepageFoundation } from "../../src/cms/data/productionHomepageFoundation.js";
import { vmoHomepageVi } from "../../src/cms/data/vmoHomepageVi.js";
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

test("Marketing Agency is reference-only and never queries production Homepage", () => {
  const route = fs.readFileSync("src/app/marketing-agency/page.js", "utf8");
  const productionLoader = fs.readFileSync(
    "src/cms/loaders/homepage.js",
    "utf8",
  );

  assert.match(route, /marketingAgencyDemo/);
  assert.match(route, /adaptMarketingAgencyDemoToHome4/);
  assert.doesNotMatch(route, /loadProductionHomepage|getPayload|findGlobal|adaptVmoHomepage|vmoHomepageVi/);
  assert.doesNotMatch(productionLoader, /marketingAgencyDemo|demo-fallback/);
  assert.match(productionLoader, /fallbackLocale: false/);
});

test("Marketing Agency adapter returns the original Home4 demo shape", () => {
  const adapted = adaptMarketingAgencyDemoToHome4(marketingAgencyDemo);
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
  assert.throws(
    () => adaptMarketingAgencyDemoToHome4(productionHomepageFoundation),
    /only accepts marketingAgencyDemo/,
  );
  assert.throws(
    () => adaptMarketingAgencyDemoToHome4(vmoHomepageVi),
    /only accepts marketingAgencyDemo/,
  );
});

test("VMO homepage adapter maps production copy onto original Mortar sections", () => {
  const view = adaptVmoHomepage(vmoHomepageVi);

  assert.equal(view.hero.eyebrow, "Đơn vị triển khai tăng trưởng");
  assert.match(view.hero.titleLead, /Từ sản phẩm đến người dùng/);
  assert.equal(view.hero.showPartnerProof, false);
  assert.equal(view.hero.showSuccessMetric, false);
  assert.equal(view.hero.showAwardMetric, false);
  assert.equal(view.challenge.items.length, 4);
  assert.equal(view.valueLayers.items.length, 4);
  assert.equal(view.valueLayers.showPartnerProof, false);
  assert.equal(view.process.stages.length, 3);
  assert.equal(view.process.stages[0].titleLead, "0→1");
  assert.equal(view.capabilities.items.length, 6);
  assert.equal(view.infrastructure.showCounters, false);
  assert.equal(view.contact.cta.label, "Trao đổi bài toán");
  assert.throws(() => adaptVmoHomepage(productionHomepageFoundation));
});

test("Homepage proof fields allow empty, disabled production content", async () => {
  const config = await configPromise;
  const homepage = config.globals.find(({ slug }) => slug === "homepage");
  const group = (name) => homepage.fields.find((field) => field.name === name);
  const child = (parent, name) =>
    parent.fields.find((field) => field.name === name);

  const process = group("proofProcessScale");
  const measurement = group("measurement");
  const featuredProof = group("featuredProof");
  const infrastructure = group("infrastructure");
  const insights = group("insights");

  assert.equal(child(process, "stages").minRows, 3);
  assert.equal(child(process, "stages").maxRows, 3);

  assert.equal(child(measurement, "enabled").defaultValue, false);
  assert.equal(child(measurement, "metrics").minRows, undefined);
  assert.equal(child(measurement, "metrics").maxRows, 4);
  assert.notEqual(
    child(child(measurement, "metrics"), "value").required,
    true,
  );
  assert.notEqual(child(group("hero"), "successRate").required, true);
  assert.notEqual(child(group("hero"), "awardCount").required, true);
  assert.notEqual(
    child(child(featuredProof, "cases"), "metricOneValue").required,
    true,
  );
  assert.notEqual(
    child(child(featuredProof, "cases"), "metricTwoValue").required,
    true,
  );

  for (const [fieldName, maximum] of [
    ["testimonials", 3],
    ["cases", 2],
    ["teamMembers", 6],
  ]) {
    assert.equal(child(featuredProof, fieldName).minRows, undefined);
    assert.equal(child(featuredProof, fieldName).maxRows, maximum);
  }

  for (const toggle of ["showTestimonials", "showCases", "showTeam"]) {
    assert.equal(child(featuredProof, toggle).defaultValue, false);
  }

  assert.equal(child(infrastructure, "enabled").defaultValue, false);
  assert.equal(child(insights, "enabled").defaultValue, false);

  assert.equal(productionHomepageFoundation.demoSeed, false);
  assert.equal(productionHomepageFoundation.measurement.metrics.length, 0);
  assert.equal(
    productionHomepageFoundation.featuredProof.testimonials.length,
    0,
  );
  assert.equal(productionHomepageFoundation.featuredProof.cases.length, 0);
  assert.equal(
    productionHomepageFoundation.featuredProof.teamMembers.length,
    0,
  );
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

test("Production homepage reads Payload through a dedicated VMO adapter", () => {
  const route = fs.readFileSync("src/app/page.js", "utf8");

  assert.match(route, /loadProductionHomepageExperience/);
  assert.match(route, /adaptVmoHomepage/);
  assert.match(route, /Home4Banner/);
  assert.match(route, /Home1SeatureSection/);
  assert.match(route, /Home4FeatureSection/);
  assert.match(route, /Home4ProcessSection/);
  assert.match(route, /Home3ServiceSection/);
  assert.match(route, /Home6IntegrationSection/);
  assert.match(route, /Home4ContactSection/);
  assert.match(route, /Header4/);
  assert.doesNotMatch(route, /adaptMarketingAgencyDemoToHome4/);
  assert.doesNotMatch(route, /marketingAgencyDemo/);
  assert.doesNotMatch(route, /vmoHomepageVi/);
  assert.doesNotMatch(route, /GenericHero|FeatureGrid|RenderBlocks/);
});

test("VMO adapter replaces vendor integration icons with Mortar marks", () => {
  const adapted = adaptVmoHomepage(vmoHomepageVi);
  assert.equal(adapted.infrastructure.items.length, 11);
  assert.equal(adapted.infrastructure.items[0].title, "CRM.VMO");
  for (const item of adapted.infrastructure.items) {
    assert.match(item.iconMark, /^(layers|lobes|star|pen)$/);
  }
  assert.equal(
    adapted.contact.mediaItems.some((item) => /home4-contact-img/.test(item.path)),
    false,
  );
  const home6 = fs.readFileSync(
    "src/components/integration-section/Home6IntegrationSection.jsx",
    "utf8",
  );
  assert.match(home6, /integration-04\.svg/);
  assert.match(home6, /iconMark/);
  const saas = fs.readFileSync("src/app/saas-product/page.js", "utf8");
  assert.match(saas, /<Home6IntegrationSection \/>/);
});

test("Header4 keeps Mortar demo chrome unless production brand is set", () => {
  const header = fs.readFileSync("src/components/header/Header4.js", "utf8");
  assert.match(header, /brand \? null/);
  assert.match(header, /We are Global Digital Brand Tech Agency/);
  assert.match(header, /info@example\.com/);
  const marketing = fs.readFileSync("src/app/marketing-agency/page.js", "utf8");
  assert.match(marketing, /<Header4 \/>/);
  assert.doesNotMatch(marketing, /brand=/);
});

test("Sixth Home3 capability uses Home3 SVG grammar", () => {
  const source = fs.readFileSync(
    "src/components/service-section/Home3ServiceSection.jsx",
    "utf8",
  );
  assert.doesNotMatch(source, /feature-icon1/);
  assert.match(source, /Home3ServiceMark/);
});
