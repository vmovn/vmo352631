import assert from "node:assert/strict";
import test from "node:test";

const hasDatabase = Boolean(process.env.DATABASE_URI && process.env.PAYLOAD_SECRET);

test(
  "PostgreSQL migration, seed, localization, and anonymous access work live",
  { skip: !hasDatabase },
  async () => {
    const { getPayload } = await import("payload");
    const { default: config } = await import("../../payload.config.js");
    const payload = await getPayload({ config });

    const migrations = await payload.find({
      collection: "payload-migrations",
      limit: 10,
      overrideAccess: true,
    });
    assert.ok(
      migrations.docs.some(({ name }) =>
        name.includes("phase2_payload_foundation"),
      ),
    );
    assert.ok(
      migrations.docs.some(({ name }) =>
        name.includes("phase2_6_content_safety"),
      ),
    );
    assert.ok(
      migrations.docs.some(({ name }) =>
        name.includes("phase3a_vmo_homepage"),
      ),
    );

    const homepageVI = await payload.findGlobal({
      slug: "homepage",
      locale: "vi",
      fallbackLocale: false,
      overrideAccess: true,
    });
    const homepageEN = await payload.findGlobal({
      slug: "homepage",
      locale: "en",
      fallbackLocale: false,
      overrideAccess: true,
    });

    assert.equal(homepageVI.demoSeed, false);
    assert.equal(homepageEN.demoSeed, false);
    assert.equal(homepageVI.hero.eyebrow, "Đơn vị triển khai tăng trưởng");
    assert.match(homepageVI.hero.titleLead, /Từ sản phẩm đến người dùng/);
    assert.equal(homepageEN.hero.titleLead, null);
    assert.equal(homepageVI.hero.showPartnerProof, false);
    assert.equal(homepageEN.hero.showPartnerProof, false);
    assert.equal(homepageVI.hero.showSuccessMetric, false);
    assert.equal(homepageVI.hero.showAwardMetric, false);
    assert.equal(homepageVI.proofProcessScale.stages.length, 3);
    assert.equal(homepageVI.proofProcessScale.stages[0].step, "01");
    assert.equal(homepageVI.proofProcessScale.stages[0].titleLead, "0→1");
    assert.equal(homepageEN.proofProcessScale.stages[0].step, "01");
    assert.equal(homepageVI.capabilities.items.length, 6);
    assert.equal(homepageVI.measurement.enabled, false);
    assert.equal(homepageVI.measurement.metrics.length, 0);
    assert.equal(homepageVI.featuredProof.showTestimonials, false);
    assert.equal(homepageVI.featuredProof.showCases, false);
    assert.equal(homepageVI.featuredProof.showTeam, false);
    assert.equal(homepageVI.featuredProof.testimonials.length, 0);
    assert.equal(homepageVI.featuredProof.cases.length, 0);
    assert.equal(homepageVI.featuredProof.teamMembers.length, 0);
    assert.equal(homepageVI.infrastructure.enabled, true);
    assert.match(homepageVI.infrastructure.title, /Hạ tầng/);
    assert.equal(homepageVI.infrastructure.items.length, 11);
    assert.equal(homepageVI.infrastructure.items[0].title, "CRM.VMO");
    assert.ok(homepageVI.capabilities.items[0].bullets.length > 0);
    assert.equal(homepageVI.insights.enabled, false);
    assert.equal(homepageVI.growthMissionCTA.enabled, true);
    assert.equal(homepageVI.growthMissionCTA.cta.label, "Trao đổi bài toán");

    const users = await payload.find({
      collection: "users",
      limit: 10,
      overrideAccess: true,
    });
    assert.equal(users.docs.length, 1);

    await assert.rejects(
      payload.find({
        collection: "users",
        limit: 1,
        overrideAccess: false,
        user: null,
      }),
    );
    await assert.rejects(
      payload.find({
        collection: "leads",
        limit: 1,
        overrideAccess: false,
        user: null,
      }),
    );

    for (const collection of [
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
      "media",
    ]) {
      const result = await payload.find({
        collection,
        limit: 1,
        overrideAccess: true,
      });
      assert.equal(result.docs.length, 1, collection);
    }

    await payload.destroy();
  },
);
