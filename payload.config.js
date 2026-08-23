import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import sharp from "sharp";

import { collections, Users } from "./src/cms/payload/collections.js";
import { globals } from "./src/cms/payload/globals.js";
import { defaultLocale, locales } from "./src/cms/payload/locales.js";
import { plugins } from "./src/cms/payload/plugins.js";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: dirname,
    },
  },
  collections,
  db: postgresAdapter({
    migrationDir: path.resolve(dirname, "src/migrations"),
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    push: process.env.PAYLOAD_DB_PUSH === "true",
  }),
  editor: lexicalEditor(),
  globals,
  localization: {
    defaultLocale,
    fallback: true,
    locales,
  },
  plugins,
  secret: process.env.PAYLOAD_SECRET || "",
  serverURL: process.env.NEXT_PUBLIC_SITE_URL,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
});
