import { getPayload } from "payload";

import config from "@payload-config";

export async function loadProductionHomepage({ locale = "vi" } = {}) {
  if (!process.env.DATABASE_URI || !process.env.PAYLOAD_SECRET) {
    throw new Error(
      "DATABASE_URI and PAYLOAD_SECRET are required for production Homepage content",
    );
  }

  const payload = await getPayload({ config });
  const homepage = await payload.findGlobal({
    slug: "homepage",
    locale,
    fallbackLocale: "vi",
    depth: 2,
    draft: false,
    overrideAccess: false,
  });

  return {
    data: homepage,
    source: "payload",
  };
}
