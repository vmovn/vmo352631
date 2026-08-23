import { getPayload } from "payload";

import config from "@payload-config";
import { adaptHomepageToHome4 } from "../adapters/homepageToHome4.js";
import { marketingAgencyDemo } from "../data/marketingAgencyDemo.js";

export async function loadMarketingAgencyHomepage({ locale = "vi" } = {}) {
  if (!process.env.DATABASE_URI || !process.env.PAYLOAD_SECRET) {
    return {
      data: adaptHomepageToHome4(marketingAgencyDemo),
      source: "demo-fallback",
    };
  }

  try {
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
      data: adaptHomepageToHome4(homepage),
      source: "payload",
    };
  } catch (error) {
    if (process.env.NODE_ENV === "production") throw error;

    console.warn(
      "Payload Homepage unavailable; using the Mortar development-demo fallback.",
    );
    return {
      data: adaptHomepageToHome4(marketingAgencyDemo),
      source: "demo-fallback",
    };
  }
}
