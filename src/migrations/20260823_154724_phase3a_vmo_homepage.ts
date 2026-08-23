import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_locales" ADD COLUMN "hero_secondary_c_t_a_label" varchar;
  ALTER TABLE "homepage_locales" ADD COLUMN "hero_secondary_c_t_a_url" varchar;
  ALTER TABLE "homepage_locales" ADD COLUMN "capabilities_description" varchar;
  ALTER TABLE "_homepage_v_locales" ADD COLUMN "version_hero_secondary_c_t_a_label" varchar;
  ALTER TABLE "_homepage_v_locales" ADD COLUMN "version_hero_secondary_c_t_a_url" varchar;
  ALTER TABLE "_homepage_v_locales" ADD COLUMN "version_capabilities_description" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_locales" DROP COLUMN "hero_secondary_c_t_a_label";
  ALTER TABLE "homepage_locales" DROP COLUMN "hero_secondary_c_t_a_url";
  ALTER TABLE "homepage_locales" DROP COLUMN "capabilities_description";
  ALTER TABLE "_homepage_v_locales" DROP COLUMN "version_hero_secondary_c_t_a_label";
  ALTER TABLE "_homepage_v_locales" DROP COLUMN "version_hero_secondary_c_t_a_url";
  ALTER TABLE "_homepage_v_locales" DROP COLUMN "version_capabilities_description";`)
}
