import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage" ADD COLUMN "hero_show_partner_proof" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "hero_show_success_metric" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "hero_show_award_metric" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "product_to_market_gap_show_partner_proof" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "capabilities_show_result_metric" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "measurement_enabled" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "featured_proof_show_testimonials" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "featured_proof_show_cases" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "featured_proof_show_team" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "infrastructure_enabled" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "insights_enabled" boolean DEFAULT false;
  ALTER TABLE "homepage" ADD COLUMN "growth_mission_c_t_a_enabled" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_hero_show_partner_proof" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_hero_show_success_metric" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_hero_show_award_metric" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_product_to_market_gap_show_partner_proof" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_capabilities_show_result_metric" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_measurement_enabled" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_featured_proof_show_testimonials" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_featured_proof_show_cases" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_featured_proof_show_team" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_infrastructure_enabled" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_insights_enabled" boolean DEFAULT false;
  ALTER TABLE "_homepage_v" ADD COLUMN "version_growth_mission_c_t_a_enabled" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage" DROP COLUMN "hero_show_partner_proof";
  ALTER TABLE "homepage" DROP COLUMN "hero_show_success_metric";
  ALTER TABLE "homepage" DROP COLUMN "hero_show_award_metric";
  ALTER TABLE "homepage" DROP COLUMN "product_to_market_gap_show_partner_proof";
  ALTER TABLE "homepage" DROP COLUMN "capabilities_show_result_metric";
  ALTER TABLE "homepage" DROP COLUMN "measurement_enabled";
  ALTER TABLE "homepage" DROP COLUMN "featured_proof_show_testimonials";
  ALTER TABLE "homepage" DROP COLUMN "featured_proof_show_cases";
  ALTER TABLE "homepage" DROP COLUMN "featured_proof_show_team";
  ALTER TABLE "homepage" DROP COLUMN "infrastructure_enabled";
  ALTER TABLE "homepage" DROP COLUMN "insights_enabled";
  ALTER TABLE "homepage" DROP COLUMN "growth_mission_c_t_a_enabled";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_hero_show_partner_proof";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_hero_show_success_metric";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_hero_show_award_metric";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_product_to_market_gap_show_partner_proof";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_capabilities_show_result_metric";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_measurement_enabled";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_featured_proof_show_testimonials";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_featured_proof_show_cases";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_featured_proof_show_team";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_infrastructure_enabled";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_insights_enabled";
  ALTER TABLE "_homepage_v" DROP COLUMN "version_growth_mission_c_t_a_enabled";`)
}
