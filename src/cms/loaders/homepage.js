import { getPayload } from "payload";

import config from "@payload-config";

function assertProductionEnv() {
  if (!process.env.DATABASE_URI || !process.env.PAYLOAD_SECRET) {
    throw new Error(
      "DATABASE_URI and PAYLOAD_SECRET are required for production Homepage content",
    );
  }
}

async function findPublishedGlobal(payload, slug, locale) {
  return payload.findGlobal({
    slug,
    locale,
    fallbackLocale: false,
    depth: 2,
    draft: false,
    overrideAccess: false,
  });
}

export async function loadProductionHomepage({ locale = "vi" } = {}) {
  assertProductionEnv();
  const payload = await getPayload({ config });
  const homepage = await findPublishedGlobal(payload, "homepage", locale);

  return {
    data: homepage,
    source: "payload",
  };
}

export async function loadProductionHomepageExperience({ locale = "vi" } = {}) {
  assertProductionEnv();
  const payload = await getPayload({ config });
  const [homepage, header, footer] = await Promise.all([
    findPublishedGlobal(payload, "homepage", locale),
    findPublishedGlobal(payload, "header", locale),
    findPublishedGlobal(payload, "footer", locale),
  ]);

  return {
    homepage,
    header,
    footer,
    source: "payload",
  };
}
