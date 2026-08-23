import { redirectsPlugin } from "@payloadcms/plugin-redirects";
import { searchPlugin } from "@payloadcms/plugin-search";
import { seoPlugin } from "@payloadcms/plugin-seo";

import { anyone, authenticated } from "./access.js";

const searchableCollections = [
  "capabilities",
  "solutions",
  "projects",
  "case-studies",
  "posts",
  "careers",
];

const seoCollections = [
  ...searchableCollections,
  "categories",
  "integrations",
  "team",
  "faqs",
];

const seoGlobals = [
  "site-settings",
  "homepage",
  "about-vmo",
  "how-we-work",
  "vmo-os-page",
];

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "https://vmo.vn";

export const plugins = [
  seoPlugin({
    collections: seoCollections,
    globals: seoGlobals,
    uploadsCollection: "media",
    fields: ({ defaultFields }) =>
      defaultFields.map((field) =>
        field.name === "meta" ? { ...field, localized: true } : field,
      ),
    generateTitle: ({ doc }) => doc?.title || doc?.siteName || "Mortar",
    generateDescription: ({ doc }) =>
      doc?.summary || doc?.siteDescription || "",
    generateImage: ({ doc }) => doc?.featuredImage || doc?.defaultSEOImage,
    generateURL: ({ doc, locale }) => {
      const path = doc?.canonicalPath || (locale === "en" ? "/en" : "/");
      return new URL(path, siteURL).toString();
    },
  }),
  redirectsPlugin({
    collections: searchableCollections,
    redirectTypes: ["301", "302"],
    overrides: {
      admin: { group: "SEO" },
      access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
      },
    },
  }),
  searchPlugin({
    collections: searchableCollections,
    localize: true,
    syncDrafts: false,
    deleteDrafts: true,
    searchOverrides: {
      admin: { group: "SEO" },
      access: {
        create: authenticated,
        delete: authenticated,
        read: anyone,
        update: authenticated,
      },
    },
  }),
];
