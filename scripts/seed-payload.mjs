#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

for (const envFile of [".env.local", ".env"]) {
  try {
    process.loadEnvFile(envFile);
  } catch {
    // Environment variables may be supplied directly by Coolify/CI/shell.
  }
}

if (!process.env.DATABASE_URI || !process.env.PAYLOAD_SECRET) {
  throw new Error("DATABASE_URI and PAYLOAD_SECRET are required for seeding");
}

const { getPayload } = await import("payload");
const { default: config } = await import("../payload.config.js");
const { productionHomepageFoundation } = await import(
  "../src/cms/data/productionHomepageFoundation.js"
);

const payload = await getPayload({ config });

const lexical = (text) => ({
  root: {
    type: "root",
    children: [
      {
        type: "paragraph",
        version: 1,
        children: [
          {
            type: "text",
            version: 1,
            text,
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        textFormat: 0,
        textStyle: "",
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    version: 1,
  },
});

function retainArrayRowIds(data, existing) {
  if (Array.isArray(data)) {
    return data.map((item, index) => {
      const previous = Array.isArray(existing) ? existing[index] : undefined;
      const value = retainArrayRowIds(item, previous);

      if (
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        previous?.id
      ) {
        return { ...value, id: previous.id };
      }

      return value;
    });
  }

  if (data && typeof data === "object") {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        retainArrayRowIds(value, existing?.[key]),
      ]),
    );
  }

  return data;
}

async function upsertLocalizedCollection({ collection, vi, en = vi }) {
  const existing = await payload.find({
    collection,
    locale: "vi",
    fallbackLocale: false,
    limit: 1,
    overrideAccess: true,
    where: vi.slug
      ? { slug: { equals: vi.slug } }
      : { title: { equals: vi.title } },
  });

  const dataVI = retainArrayRowIds(
    { ...vi, _status: "published" },
    existing.docs[0],
  );
  const doc = existing.docs[0]
    ? await payload.update({
        collection,
        id: existing.docs[0].id,
        data: dataVI,
        locale: "vi",
        overrideAccess: true,
      })
    : await payload.create({
        collection,
        data: dataVI,
        locale: "vi",
        overrideAccess: true,
      });

  await payload.update({
    collection,
    id: doc.id,
    data: retainArrayRowIds({ ...en, _status: "published" }, doc),
    locale: "en",
    overrideAccess: true,
  });

  return doc;
}

async function updateLocalizedGlobal({ slug, vi, en = vi }) {
  const existing = await payload.findGlobal({
    slug,
    locale: "vi",
    fallbackLocale: false,
    overrideAccess: true,
  });
  const doc = await payload.updateGlobal({
    slug,
    data: retainArrayRowIds({ ...vi, _status: "published" }, existing),
    locale: "vi",
    overrideAccess: true,
  });
  await payload.updateGlobal({
    slug,
    data: retainArrayRowIds({ ...en, _status: "published" }, doc),
    locale: "en",
    overrideAccess: true,
  });
}

const adminEmail = process.env.PAYLOAD_SEED_ADMIN_EMAIL;
const adminPassword = process.env.PAYLOAD_SEED_ADMIN_PASSWORD;

if (adminEmail && adminPassword) {
  const users = await payload.find({
    collection: "users",
    limit: 1,
    overrideAccess: true,
    where: { email: { equals: adminEmail } },
  });

  if (!users.docs.length) {
    await payload.create({
      collection: "users",
      overrideAccess: true,
      data: {
        email: adminEmail,
        password: adminPassword,
        name: "Phase 2 Development Admin",
        role: "admin",
      },
    });
  }
}

const mediaName = "mortar-demo-header-logo.svg";
const existingMedia = await payload.find({
  collection: "media",
  limit: 1,
  overrideAccess: true,
  where: { filename: { equals: mediaName } },
});

if (!existingMedia.docs.length) {
  const mediaData = await fs.readFile(
    path.resolve("public/assets/img/header-logo.svg"),
  );
  await payload.create({
    collection: "media",
    locale: "vi",
    overrideAccess: true,
    data: { alt: "Mortar demo header logo" },
    file: {
      data: mediaData,
      mimetype: "image/svg+xml",
      name: mediaName,
      size: mediaData.byteLength,
    },
  });
}

const category = await upsertLocalizedCollection({
  collection: "categories",
  vi: {
    title: "Mortar Demo Insight",
    slug: "mortar-demo-insight",
    summary: "Development-only demo category for CMS verification.",
    categoryType: "insight",
    canonicalPath: "/kien-thuc/mortar-demo-insight",
  },
  en: {
    title: "Mortar Demo Insight",
    slug: "mortar-demo-insight-en",
    summary: "Development-only demo category for CMS verification.",
    categoryType: "insight",
    canonicalPath: "/en/insights/mortar-demo-insight-en",
  },
});

const capability = await upsertLocalizedCollection({
  collection: "capabilities",
  vi: {
    title: "Mortar Demo Capability",
    slug: "mortar-demo-capability",
    summary: "Development-only demo record; not VMO public proof.",
    featured: false,
    canonicalPath: "/nang-luc/mortar-demo-capability",
  },
  en: {
    title: "Mortar Demo Capability",
    slug: "mortar-demo-capability-en",
    summary: "Development-only demo record; not VMO public proof.",
    featured: false,
    canonicalPath: "/en/capabilities/mortar-demo-capability-en",
  },
});

await upsertLocalizedCollection({
  collection: "solutions",
  vi: {
    title: "Mortar Demo Solution",
    slug: "mortar-demo-solution",
    summary: "Development-only demo solution.",
    capabilities: [capability.id],
    canonicalPath: "/giai-phap/mortar-demo-solution",
  },
  en: {
    title: "Mortar Demo Solution",
    slug: "mortar-demo-solution-en",
    summary: "Development-only demo solution.",
    capabilities: [capability.id],
    canonicalPath: "/en/solutions/mortar-demo-solution-en",
  },
});

await upsertLocalizedCollection({
  collection: "projects",
  vi: {
    title: "Mortar Demo Project",
    slug: "mortar-demo-project",
    summary: "Development-only Mortar project record; not VMO proof.",
    projectType: "enterprise",
    capabilities: [capability.id],
    featured: false,
    canonicalPath: "/du-an/mortar-demo-project",
  },
  en: {
    title: "Mortar Demo Project",
    slug: "mortar-demo-project-en",
    summary: "Development-only Mortar project record; not VMO proof.",
    projectType: "enterprise",
    capabilities: [capability.id],
    featured: false,
    canonicalPath: "/en/projects/mortar-demo-project-en",
  },
});

await upsertLocalizedCollection({
  collection: "case-studies",
  vi: {
    title: "Mortar Demo Case Study",
    slug: "mortar-demo-case-study",
    summary: "Development-only parity data; not verified VMO evidence.",
    featured: false,
    canonicalPath: "/case-study/mortar-demo-case-study",
  },
  en: {
    title: "Mortar Demo Case Study",
    slug: "mortar-demo-case-study-en",
    summary: "Development-only parity data; not verified VMO evidence.",
    featured: false,
    canonicalPath: "/en/case-studies/mortar-demo-case-study-en",
  },
});

await upsertLocalizedCollection({
  collection: "posts",
  vi: {
    title: "Mortar Demo Post",
    slug: "mortar-demo-post",
    summary: "Development-only demo post.",
    categories: [category.id],
    publishedAt: new Date("2024-01-01T00:00:00.000Z").toISOString(),
    canonicalPath: "/kien-thuc/mortar-demo-post",
  },
  en: {
    title: "Mortar Demo Post",
    slug: "mortar-demo-post-en",
    summary: "Development-only demo post.",
    categories: [category.id],
    publishedAt: new Date("2024-01-01T00:00:00.000Z").toISOString(),
    canonicalPath: "/en/insights/mortar-demo-post-en",
  },
});

await upsertLocalizedCollection({
  collection: "integrations",
  vi: {
    title: "Mortar Demo Integration",
    slug: "mortar-demo-integration",
    summary: "Internal development-only integration record.",
    integrationStatus: "internal",
    publiclyVisible: false,
    canonicalPath: "/vmo-os",
  },
});

await upsertLocalizedCollection({
  collection: "team",
  vi: {
    title: "Mortar Demo Team Member",
    slug: "mortar-demo-team-member",
    summary: "Development-only team record.",
    jobTitle: "Demo Role",
    active: false,
    canonicalPath: "/vmo",
  },
});

await upsertLocalizedCollection({
  collection: "careers",
  vi: {
    title: "Mortar Demo Career",
    slug: "mortar-demo-career",
    summary: "Development-only career record.",
    location: "Demo",
    employmentType: "ojt",
    active: false,
    canonicalPath: "/tuyen-dung",
  },
});

const faqExisting = await payload.find({
  collection: "faqs",
  locale: "vi",
  fallbackLocale: false,
  limit: 1,
  overrideAccess: true,
  where: { question: { equals: "Mortar Demo FAQ" } },
});

if (!faqExisting.docs.length) {
  const faq = await payload.create({
    collection: "faqs",
    locale: "vi",
    overrideAccess: true,
    data: {
      question: "Mortar Demo FAQ",
      answer: lexical("Development-only demo answer."),
      group: "Demo",
      order: 0,
      _status: "published",
    },
  });
  await payload.update({
    collection: "faqs",
    id: faq.id,
    locale: "en",
    overrideAccess: true,
    data: {
      question: "Mortar Demo FAQ",
      answer: lexical("Development-only demo answer."),
      group: "Demo",
      order: 0,
      _status: "published",
    },
  });
}

await updateLocalizedGlobal({
  slug: "site-settings",
  vi: {
    siteName: "Mortar Demo",
    siteDescription: "Development-only CMS foundation seed.",
    contact: { email: "info@example.com", phone: "+99-763 684 4563" },
  },
});

await updateLocalizedGlobal({
  slug: "header",
  vi: {
    navigation: [
      { label: "Home", url: "/" },
      { label: "Solution", url: "/service" },
      { label: "Company", url: "/about" },
    ],
    primaryCTA: { label: "Let’s Talk", url: "/contact" },
  },
});

await updateLocalizedGlobal({
  slug: "footer",
  vi: {
    heading: "We are Global Digital Brand Tech Agency.",
    description: "Development-only Mortar footer seed.",
    copyright: "Copyright © Mortar demo.",
    columns: [],
  },
});

await updateLocalizedGlobal({
  slug: "homepage",
  vi: productionHomepageFoundation,
  en: productionHomepageFoundation,
});

await updateLocalizedGlobal({
  slug: "about-vmo",
  vi: {
    title: "About VMO — Schema Foundation",
    summary: "Schema-only placeholder; Phase 3 content not started.",
    canonicalPath: "/vmo",
  },
  en: {
    title: "About VMO — Schema Foundation",
    summary: "Schema-only placeholder; English public route not started.",
    canonicalPath: "/en/about-vmo",
  },
});

await updateLocalizedGlobal({
  slug: "how-we-work",
  vi: {
    title: "How We Work — Schema Foundation",
    summary: "Schema-only placeholder; Phase 3 content not started.",
    canonicalPath: "/cach-trien-khai",
    stages: [],
  },
  en: {
    title: "How We Work — Schema Foundation",
    summary: "Schema-only placeholder; English public route not started.",
    canonicalPath: "/en/how-we-work",
    stages: [],
  },
});

await updateLocalizedGlobal({
  slug: "vmo-os-page",
  vi: {
    title: "VMO OS — Schema Foundation",
    summary: "Schema-only placeholder; Phase 3 content not started.",
    canonicalPath: "/vmo-os",
    integrations: [],
  },
  en: {
    title: "VMO OS — Schema Foundation",
    summary: "Schema-only placeholder; English public route not started.",
    canonicalPath: "/en/vmo-os",
    integrations: [],
  },
});

console.log(
  JSON.stringify(
    {
      seeded: true,
      adminSeeded: Boolean(adminEmail && adminPassword),
      homepage: "Production-safe claim-free foundation",
      locales: ["vi", "en"],
      leadsSeeded: false,
    },
    null,
    2,
  ),
);

await payload.destroy();
process.exit(0);
