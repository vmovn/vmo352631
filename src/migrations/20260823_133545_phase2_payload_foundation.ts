import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_capabilities_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__capabilities_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__capabilities_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_solutions_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__solutions_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__solutions_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_projects_project_type" AS ENUM('ecosystem', 'enterprise');
  CREATE TYPE "public"."enum_projects_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_version_project_type" AS ENUM('ecosystem', 'enterprise');
  CREATE TYPE "public"."enum__projects_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_case_studies_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__case_studies_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__case_studies_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_categories_category_type" AS ENUM('insight', 'capability', 'industry');
  CREATE TYPE "public"."enum_categories_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__categories_v_version_category_type" AS ENUM('insight', 'capability', 'industry');
  CREATE TYPE "public"."enum__categories_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__categories_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_integrations_integration_status" AS ENUM('planned', 'available', 'internal');
  CREATE TYPE "public"."enum_integrations_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__integrations_v_version_integration_status" AS ENUM('planned', 'available', 'internal');
  CREATE TYPE "public"."enum__integrations_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__integrations_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_team_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__team_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__team_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_careers_employment_type" AS ENUM('full-time', 'part-time', 'ojt', 'flexible');
  CREATE TYPE "public"."enum_careers_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__careers_v_version_employment_type" AS ENUM('full-time', 'part-time', 'ojt', 'flexible');
  CREATE TYPE "public"."enum__careers_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__careers_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_faqs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__faqs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__faqs_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_leads_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_leads_status" AS ENUM('new', 'qualified', 'in-progress', 'closed');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_redirects_type" AS ENUM('301', '302');
  CREATE TYPE "public"."enum_site_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_header_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__header_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__header_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_footer_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__footer_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__footer_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_homepage_growth_mission_c_t_a_media_items_type" AS ENUM('image', 'video');
  CREATE TYPE "public"."enum_homepage_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__homepage_v_version_growth_mission_c_t_a_media_items_type" AS ENUM('image', 'video');
  CREATE TYPE "public"."enum__homepage_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__homepage_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_about_vmo_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__about_vmo_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__about_vmo_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_how_we_work_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__how_we_work_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__how_we_work_v_published_locale" AS ENUM('vi', 'en');
  CREATE TYPE "public"."enum_vmo_os_page_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__vmo_os_page_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__vmo_os_page_v_published_locale" AS ENUM('vi', 'en');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "capabilities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"order" numeric DEFAULT 0,
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_capabilities_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "capabilities_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_capabilities_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_featured_image_id" integer,
  	"version_order" numeric DEFAULT 0,
  	"version_featured" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__capabilities_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__capabilities_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_capabilities_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "solutions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_solutions_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "solutions_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "solutions_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"capabilities_id" integer
  );
  
  CREATE TABLE "_solutions_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_featured_image_id" integer,
  	"version_order" numeric DEFAULT 0,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__solutions_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__solutions_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_solutions_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_solutions_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"capabilities_id" integer
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"project_type" "enum_projects_project_type",
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_projects_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "projects_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "projects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"capabilities_id" integer
  );
  
  CREATE TABLE "_projects_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_featured_image_id" integer,
  	"version_project_type" "enum__projects_v_version_project_type",
  	"version_featured" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__projects_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_projects_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_projects_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"capabilities_id" integer
  );
  
  CREATE TABLE "case_studies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_case_studies_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "case_studies_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"business_problem" jsonb,
  	"baseline" jsonb,
  	"target_outcome" jsonb,
  	"hypothesis" jsonb,
  	"execution" jsonb,
  	"data" jsonb,
  	"outcome" jsonb,
  	"repeatable_process" jsonb,
  	"scale" jsonb,
  	"learning" jsonb,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_case_studies_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_featured_image_id" integer,
  	"version_featured" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__case_studies_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__case_studies_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_case_studies_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_business_problem" jsonb,
  	"version_baseline" jsonb,
  	"version_target_outcome" jsonb,
  	"version_hypothesis" jsonb,
  	"version_execution" jsonb,
  	"version_data" jsonb,
  	"version_outcome" jsonb,
  	"version_repeatable_process" jsonb,
  	"version_scale" jsonb,
  	"version_learning" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"categories_id" integer
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_featured_image_id" integer,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__posts_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_posts_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"categories_id" integer
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"category_type" "enum_categories_category_type" DEFAULT 'insight',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_categories_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "categories_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"summary" varchar,
  	"canonical_path" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_categories_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_category_type" "enum__categories_v_version_category_type" DEFAULT 'insight',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__categories_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__categories_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_categories_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_summary" varchar,
  	"version_canonical_path" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "integrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"integration_status" "enum_integrations_integration_status" DEFAULT 'planned',
  	"publicly_visible" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_integrations_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "integrations_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_integrations_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_featured_image_id" integer,
  	"version_integration_status" "enum__integrations_v_version_integration_status" DEFAULT 'planned',
  	"version_publicly_visible" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__integrations_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__integrations_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_integrations_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "team" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"linkedin_u_r_l" varchar,
  	"order" numeric DEFAULT 0,
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_team_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "team_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"job_title" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_team_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_featured_image_id" integer,
  	"version_linkedin_u_r_l" varchar,
  	"version_order" numeric DEFAULT 0,
  	"version_active" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__team_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__team_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_team_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_job_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "careers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"employment_type" "enum_careers_employment_type",
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_careers_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "careers_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"location" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_careers_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_featured_image_id" integer,
  	"version_employment_type" "enum__careers_v_version_employment_type",
  	"version_active" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__careers_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__careers_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_careers_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_location" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_faqs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "faqs_locales" (
  	"question" varchar,
  	"answer" jsonb,
  	"group" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_faqs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_order" numeric DEFAULT 0,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__faqs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__faqs_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_faqs_v_locales" (
  	"version_question" varchar,
  	"version_answer" jsonb,
  	"version_group" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "leads" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"company" varchar,
  	"product" varchar,
  	"objective" varchar,
  	"audience" varchar,
  	"stage" varchar,
  	"target_outcome" varchar,
  	"constraints" varchar,
  	"timeline" varchar,
  	"message" varchar,
  	"consent" boolean DEFAULT false NOT NULL,
  	"locale" "enum_leads_locale" DEFAULT 'vi',
  	"source" varchar,
  	"status" "enum_leads_status" DEFAULT 'new',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"type" "enum_redirects_type" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"capabilities_id" integer,
  	"solutions_id" integer,
  	"projects_id" integer,
  	"case_studies_id" integer,
  	"posts_id" integer,
  	"careers_id" integer
  );
  
  CREATE TABLE "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"priority" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"capabilities_id" integer,
  	"solutions_id" integer,
  	"projects_id" integer,
  	"case_studies_id" integer,
  	"posts_id" integer,
  	"careers_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"capabilities_id" integer,
  	"solutions_id" integer,
  	"projects_id" integer,
  	"case_studies_id" integer,
  	"posts_id" integer,
  	"categories_id" integer,
  	"integrations_id" integer,
  	"team_id" integer,
  	"careers_id" integer,
  	"faqs_id" integer,
  	"leads_id" integer,
  	"redirects_id" integer,
  	"search_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"default_s_e_o_image_id" integer,
  	"contact_email" varchar,
  	"contact_phone" varchar,
  	"_status" "enum_site_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_locales" (
  	"site_name" varchar,
  	"site_description" varchar,
  	"default_s_e_o_image_alt" varchar,
  	"contact_address" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_site_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_default_s_e_o_image_id" integer,
  	"version_contact_email" varchar,
  	"version_contact_phone" varchar,
  	"version__status" "enum__site_settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__site_settings_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_site_settings_v_locales" (
  	"version_site_name" varchar,
  	"version_site_description" varchar,
  	"version_default_s_e_o_image_alt" varchar,
  	"version_contact_address" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "header_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "header_navigation_locales" (
  	"label" varchar,
  	"url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"_status" "enum_header_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_locales" (
  	"primary_c_t_a_label" varchar,
  	"primary_c_t_a_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_header_v_version_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_header_v_version_navigation_locales" (
  	"label" varchar,
  	"url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_header_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_logo_id" integer,
  	"version__status" "enum__header_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__header_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_header_v_locales" (
  	"version_primary_c_t_a_label" varchar,
  	"version_primary_c_t_a_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "footer_columns_links_locales" (
  	"label" varchar,
  	"url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "footer_columns_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_status" "enum_footer_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_locales" (
  	"heading" varchar,
  	"description" varchar,
  	"copyright" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_footer_v_version_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footer_v_version_columns_links_locales" (
  	"label" varchar,
  	"url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_footer_v_version_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footer_v_version_columns_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_footer_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version__status" "enum__footer_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__footer_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_footer_v_locales" (
  	"version_heading" varchar,
  	"version_description" varchar,
  	"version_copyright" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "homepage_product_to_market_gap_partner_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"light_path" varchar,
  	"dark_path" varchar
  );
  
  CREATE TABLE "homepage_product_to_market_gap_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "homepage_product_to_market_gap_items_locales" (
  	"title_lead" varchar,
  	"title_tail" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_value_layers_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "homepage_value_layers_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_proof_process_scale_stages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step" varchar
  );
  
  CREATE TABLE "homepage_proof_process_scale_stages_locales" (
  	"title_lead" varchar,
  	"title_tail" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_capabilities_items_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "homepage_capabilities_items_bullets_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_capabilities_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "homepage_capabilities_items_locales" (
  	"title_lead" varchar,
  	"title_tail" varchar,
  	"cta_label" varchar,
  	"cta_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_measurement_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" numeric
  );
  
  CREATE TABLE "homepage_measurement_metrics_locales" (
  	"label_lead" varchar,
  	"label_tail" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_measurement_industries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"success_rate" numeric
  );
  
  CREATE TABLE "homepage_measurement_industries_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_featured_proof_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_path" varchar
  );
  
  CREATE TABLE "homepage_featured_proof_testimonials_locales" (
  	"headline" varchar,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_featured_proof_cases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_path" varchar,
  	"logo_path" varchar,
  	"metric_one_value" numeric,
  	"metric_two_value" numeric
  );
  
  CREATE TABLE "homepage_featured_proof_cases_locales" (
  	"title" varchar,
  	"metric_one_label" varchar,
  	"metric_two_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_featured_proof_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_path" varchar,
  	"emoji_path" varchar,
  	"linkedin_u_r_l" varchar
  );
  
  CREATE TABLE "homepage_featured_proof_team_members_locales" (
  	"name" varchar,
  	"role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_infrastructure_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "homepage_infrastructure_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_growth_mission_c_t_a_media_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_homepage_growth_mission_c_t_a_media_items_type",
  	"path" varchar
  );
  
  CREATE TABLE "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"demo_seed" boolean DEFAULT false,
  	"hero_partner_logo_path" varchar,
  	"hero_success_rate" numeric,
  	"hero_award_count" numeric,
  	"hero_image_path" varchar,
  	"product_to_market_gap_video_path" varchar,
  	"_status" "enum_homepage_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "homepage_locales" (
  	"hero_partner_title" varchar,
  	"hero_partner_strapline" varchar,
  	"hero_eyebrow" varchar,
  	"hero_title_lead" varchar,
  	"hero_title_tail" varchar,
  	"hero_description_lead" varchar,
  	"hero_description_emphasis" varchar,
  	"hero_description_tail" varchar,
  	"hero_primary_c_t_a_label" varchar,
  	"hero_primary_c_t_a_url" varchar,
  	"hero_success_rate_label" varchar,
  	"hero_award_label" varchar,
  	"product_to_market_gap_partner_stat_left" varchar,
  	"product_to_market_gap_partner_stat_right" varchar,
  	"product_to_market_gap_title_lead" varchar,
  	"product_to_market_gap_title_tail" varchar,
  	"product_to_market_gap_description" varchar,
  	"product_to_market_gap_cta_lead" varchar,
  	"product_to_market_gap_cta_label" varchar,
  	"product_to_market_gap_cta_url" varchar,
  	"value_layers_title" varchar,
  	"value_layers_description" varchar,
  	"proof_process_scale_title" varchar,
  	"proof_process_scale_description" varchar,
  	"capabilities_title_lead" varchar,
  	"capabilities_title_tail" varchar,
  	"capabilities_result_value" varchar,
  	"capabilities_result_label" varchar,
  	"measurement_title_lead" varchar,
  	"measurement_title_tail" varchar,
  	"measurement_description" varchar,
  	"measurement_industry_title_lead" varchar,
  	"measurement_industry_title_tail" varchar,
  	"measurement_industry_description" varchar,
  	"featured_proof_testimonial_title" varchar,
  	"featured_proof_testimonial_description" varchar,
  	"featured_proof_case_title_lead" varchar,
  	"featured_proof_case_title_tail" varchar,
  	"featured_proof_case_result_value" varchar,
  	"featured_proof_case_result_label" varchar,
  	"featured_proof_team_title_lead" varchar,
  	"featured_proof_team_title_tail" varchar,
  	"featured_proof_team_description" varchar,
  	"infrastructure_title" varchar,
  	"infrastructure_description" varchar,
  	"insights_title" varchar,
  	"insights_description" varchar,
  	"growth_mission_c_t_a_title_lead" varchar,
  	"growth_mission_c_t_a_title_tail" varchar,
  	"growth_mission_c_t_a_description_lead" varchar,
  	"growth_mission_c_t_a_description_emphasis" varchar,
  	"growth_mission_c_t_a_description_tail" varchar,
  	"growth_mission_c_t_a_cta_label" varchar,
  	"growth_mission_c_t_a_cta_url" varchar,
  	"canonical_path" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "homepage_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer
  );
  
  CREATE TABLE "_homepage_v_version_product_to_market_gap_partner_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"light_path" varchar,
  	"dark_path" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_product_to_market_gap_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_product_to_market_gap_items_locales" (
  	"title_lead" varchar,
  	"title_tail" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_value_layers_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_value_layers_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_proof_process_scale_stages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_proof_process_scale_stages_locales" (
  	"title_lead" varchar,
  	"title_tail" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_capabilities_items_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_capabilities_items_bullets_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_capabilities_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_capabilities_items_locales" (
  	"title_lead" varchar,
  	"title_tail" varchar,
  	"cta_label" varchar,
  	"cta_url" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_measurement_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_measurement_metrics_locales" (
  	"label_lead" varchar,
  	"label_tail" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_measurement_industries" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"success_rate" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_measurement_industries_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_featured_proof_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_path" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_featured_proof_testimonials_locales" (
  	"headline" varchar,
  	"quote" varchar,
  	"author" varchar,
  	"role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_featured_proof_cases" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_path" varchar,
  	"logo_path" varchar,
  	"metric_one_value" numeric,
  	"metric_two_value" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_featured_proof_cases_locales" (
  	"title" varchar,
  	"metric_one_label" varchar,
  	"metric_two_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_featured_proof_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_path" varchar,
  	"emoji_path" varchar,
  	"linkedin_u_r_l" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_featured_proof_team_members_locales" (
  	"name" varchar,
  	"role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_infrastructure_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v_version_infrastructure_items_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_version_growth_mission_c_t_a_media_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__homepage_v_version_growth_mission_c_t_a_media_items_type",
  	"path" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_homepage_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_demo_seed" boolean DEFAULT false,
  	"version_hero_partner_logo_path" varchar,
  	"version_hero_success_rate" numeric,
  	"version_hero_award_count" numeric,
  	"version_hero_image_path" varchar,
  	"version_product_to_market_gap_video_path" varchar,
  	"version__status" "enum__homepage_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__homepage_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_homepage_v_locales" (
  	"version_hero_partner_title" varchar,
  	"version_hero_partner_strapline" varchar,
  	"version_hero_eyebrow" varchar,
  	"version_hero_title_lead" varchar,
  	"version_hero_title_tail" varchar,
  	"version_hero_description_lead" varchar,
  	"version_hero_description_emphasis" varchar,
  	"version_hero_description_tail" varchar,
  	"version_hero_primary_c_t_a_label" varchar,
  	"version_hero_primary_c_t_a_url" varchar,
  	"version_hero_success_rate_label" varchar,
  	"version_hero_award_label" varchar,
  	"version_product_to_market_gap_partner_stat_left" varchar,
  	"version_product_to_market_gap_partner_stat_right" varchar,
  	"version_product_to_market_gap_title_lead" varchar,
  	"version_product_to_market_gap_title_tail" varchar,
  	"version_product_to_market_gap_description" varchar,
  	"version_product_to_market_gap_cta_lead" varchar,
  	"version_product_to_market_gap_cta_label" varchar,
  	"version_product_to_market_gap_cta_url" varchar,
  	"version_value_layers_title" varchar,
  	"version_value_layers_description" varchar,
  	"version_proof_process_scale_title" varchar,
  	"version_proof_process_scale_description" varchar,
  	"version_capabilities_title_lead" varchar,
  	"version_capabilities_title_tail" varchar,
  	"version_capabilities_result_value" varchar,
  	"version_capabilities_result_label" varchar,
  	"version_measurement_title_lead" varchar,
  	"version_measurement_title_tail" varchar,
  	"version_measurement_description" varchar,
  	"version_measurement_industry_title_lead" varchar,
  	"version_measurement_industry_title_tail" varchar,
  	"version_measurement_industry_description" varchar,
  	"version_featured_proof_testimonial_title" varchar,
  	"version_featured_proof_testimonial_description" varchar,
  	"version_featured_proof_case_title_lead" varchar,
  	"version_featured_proof_case_title_tail" varchar,
  	"version_featured_proof_case_result_value" varchar,
  	"version_featured_proof_case_result_label" varchar,
  	"version_featured_proof_team_title_lead" varchar,
  	"version_featured_proof_team_title_tail" varchar,
  	"version_featured_proof_team_description" varchar,
  	"version_infrastructure_title" varchar,
  	"version_infrastructure_description" varchar,
  	"version_insights_title" varchar,
  	"version_insights_description" varchar,
  	"version_growth_mission_c_t_a_title_lead" varchar,
  	"version_growth_mission_c_t_a_title_tail" varchar,
  	"version_growth_mission_c_t_a_description_lead" varchar,
  	"version_growth_mission_c_t_a_description_emphasis" varchar,
  	"version_growth_mission_c_t_a_description_tail" varchar,
  	"version_growth_mission_c_t_a_cta_label" varchar,
  	"version_growth_mission_c_t_a_cta_url" varchar,
  	"version_canonical_path" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_homepage_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer
  );
  
  CREATE TABLE "about_vmo" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_status" "enum_about_vmo_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_vmo_locales" (
  	"title" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_about_vmo_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version__status" "enum__about_vmo_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__about_vmo_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_about_vmo_v_locales" (
  	"version_title" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "how_we_work_stages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "how_we_work_stages_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "how_we_work" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_status" "enum_how_we_work_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "how_we_work_locales" (
  	"title" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_how_we_work_v_version_stages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_how_we_work_v_version_stages_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_how_we_work_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version__status" "enum__how_we_work_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__how_we_work_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_how_we_work_v_locales" (
  	"version_title" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "vmo_os_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_status" "enum_vmo_os_page_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "vmo_os_page_locales" (
  	"title" varchar,
  	"summary" varchar,
  	"body" jsonb,
  	"canonical_path" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "vmo_os_page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"integrations_id" integer
  );
  
  CREATE TABLE "_vmo_os_page_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version__status" "enum__vmo_os_page_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__vmo_os_page_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_vmo_os_page_v_locales" (
  	"version_title" varchar,
  	"version_summary" varchar,
  	"version_body" jsonb,
  	"version_canonical_path" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_vmo_os_page_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"integrations_id" integer
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "capabilities" ADD CONSTRAINT "capabilities_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "capabilities_locales" ADD CONSTRAINT "capabilities_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "capabilities_locales" ADD CONSTRAINT "capabilities_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."capabilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_capabilities_v" ADD CONSTRAINT "_capabilities_v_parent_id_capabilities_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."capabilities"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_capabilities_v" ADD CONSTRAINT "_capabilities_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_capabilities_v_locales" ADD CONSTRAINT "_capabilities_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_capabilities_v_locales" ADD CONSTRAINT "_capabilities_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_capabilities_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions" ADD CONSTRAINT "solutions_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "solutions_locales" ADD CONSTRAINT "solutions_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "solutions_locales" ADD CONSTRAINT "solutions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_capabilities_fk" FOREIGN KEY ("capabilities_id") REFERENCES "public"."capabilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_parent_id_solutions_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_solutions_v_locales" ADD CONSTRAINT "_solutions_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_solutions_v_locales" ADD CONSTRAINT "_solutions_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_capabilities_fk" FOREIGN KEY ("capabilities_id") REFERENCES "public"."capabilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_locales" ADD CONSTRAINT "projects_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_locales" ADD CONSTRAINT "projects_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_capabilities_fk" FOREIGN KEY ("capabilities_id") REFERENCES "public"."capabilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_locales" ADD CONSTRAINT "_projects_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_locales" ADD CONSTRAINT "_projects_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_capabilities_fk" FOREIGN KEY ("capabilities_id") REFERENCES "public"."capabilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_locales" ADD CONSTRAINT "case_studies_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_locales" ADD CONSTRAINT "case_studies_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_parent_id_case_studies_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_locales" ADD CONSTRAINT "_case_studies_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_locales" ADD CONSTRAINT "_case_studies_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories_locales" ADD CONSTRAINT "categories_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_locales" ADD CONSTRAINT "categories_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_categories_v" ADD CONSTRAINT "_categories_v_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_categories_v_locales" ADD CONSTRAINT "_categories_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_categories_v_locales" ADD CONSTRAINT "_categories_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_categories_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "integrations" ADD CONSTRAINT "integrations_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "integrations_locales" ADD CONSTRAINT "integrations_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "integrations_locales" ADD CONSTRAINT "integrations_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_integrations_v" ADD CONSTRAINT "_integrations_v_parent_id_integrations_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_integrations_v" ADD CONSTRAINT "_integrations_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_integrations_v_locales" ADD CONSTRAINT "_integrations_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_integrations_v_locales" ADD CONSTRAINT "_integrations_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team" ADD CONSTRAINT "team_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_locales" ADD CONSTRAINT "team_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_locales" ADD CONSTRAINT "team_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_team_v" ADD CONSTRAINT "_team_v_parent_id_team_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."team"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_v" ADD CONSTRAINT "_team_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_v_locales" ADD CONSTRAINT "_team_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_v_locales" ADD CONSTRAINT "_team_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_team_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "careers" ADD CONSTRAINT "careers_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "careers_locales" ADD CONSTRAINT "careers_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "careers_locales" ADD CONSTRAINT "careers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_careers_v" ADD CONSTRAINT "_careers_v_parent_id_careers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."careers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_careers_v" ADD CONSTRAINT "_careers_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_careers_v_locales" ADD CONSTRAINT "_careers_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_careers_v_locales" ADD CONSTRAINT "_careers_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_careers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faqs_locales" ADD CONSTRAINT "faqs_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "faqs_locales" ADD CONSTRAINT "faqs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faqs_v" ADD CONSTRAINT "_faqs_v_parent_id_faqs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."faqs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_faqs_v_locales" ADD CONSTRAINT "_faqs_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_faqs_v_locales" ADD CONSTRAINT "_faqs_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faqs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_capabilities_fk" FOREIGN KEY ("capabilities_id") REFERENCES "public"."capabilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_careers_fk" FOREIGN KEY ("careers_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_locales" ADD CONSTRAINT "search_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_capabilities_fk" FOREIGN KEY ("capabilities_id") REFERENCES "public"."capabilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_careers_fk" FOREIGN KEY ("careers_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_capabilities_fk" FOREIGN KEY ("capabilities_id") REFERENCES "public"."capabilities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "public"."team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_careers_fk" FOREIGN KEY ("careers_id") REFERENCES "public"."careers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_leads_fk" FOREIGN KEY ("leads_id") REFERENCES "public"."leads"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_default_s_e_o_image_id_media_id_fk" FOREIGN KEY ("default_s_e_o_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_default_s_e_o_image_id_media_id_fk" FOREIGN KEY ("version_default_s_e_o_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v_locales" ADD CONSTRAINT "_site_settings_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v_locales" ADD CONSTRAINT "_site_settings_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navigation" ADD CONSTRAINT "header_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navigation_locales" ADD CONSTRAINT "header_navigation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_locales" ADD CONSTRAINT "header_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_header_v_version_navigation" ADD CONSTRAINT "_header_v_version_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_header_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_header_v_version_navigation_locales" ADD CONSTRAINT "_header_v_version_navigation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_header_v_version_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_header_v" ADD CONSTRAINT "_header_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_header_v_locales" ADD CONSTRAINT "_header_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_header_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links_locales" ADD CONSTRAINT "footer_columns_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_locales" ADD CONSTRAINT "footer_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_columns_links" ADD CONSTRAINT "_footer_v_version_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v_version_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_columns_links_locales" ADD CONSTRAINT "_footer_v_version_columns_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v_version_columns_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_columns" ADD CONSTRAINT "_footer_v_version_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_columns_locales" ADD CONSTRAINT "_footer_v_version_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v_version_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_locales" ADD CONSTRAINT "_footer_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_product_to_market_gap_partner_logos" ADD CONSTRAINT "homepage_product_to_market_gap_partner_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_product_to_market_gap_items" ADD CONSTRAINT "homepage_product_to_market_gap_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_product_to_market_gap_items_locales" ADD CONSTRAINT "homepage_product_to_market_gap_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_product_to_market_gap_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_value_layers_items" ADD CONSTRAINT "homepage_value_layers_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_value_layers_items_locales" ADD CONSTRAINT "homepage_value_layers_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_value_layers_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_proof_process_scale_stages" ADD CONSTRAINT "homepage_proof_process_scale_stages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_proof_process_scale_stages_locales" ADD CONSTRAINT "homepage_proof_process_scale_stages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_proof_process_scale_stages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_capabilities_items_bullets" ADD CONSTRAINT "homepage_capabilities_items_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_capabilities_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_capabilities_items_bullets_locales" ADD CONSTRAINT "homepage_capabilities_items_bullets_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_capabilities_items_bullets"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_capabilities_items" ADD CONSTRAINT "homepage_capabilities_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_capabilities_items_locales" ADD CONSTRAINT "homepage_capabilities_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_capabilities_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_measurement_metrics" ADD CONSTRAINT "homepage_measurement_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_measurement_metrics_locales" ADD CONSTRAINT "homepage_measurement_metrics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_measurement_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_measurement_industries" ADD CONSTRAINT "homepage_measurement_industries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_measurement_industries_locales" ADD CONSTRAINT "homepage_measurement_industries_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_measurement_industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_featured_proof_testimonials" ADD CONSTRAINT "homepage_featured_proof_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_featured_proof_testimonials_locales" ADD CONSTRAINT "homepage_featured_proof_testimonials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_featured_proof_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_featured_proof_cases" ADD CONSTRAINT "homepage_featured_proof_cases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_featured_proof_cases_locales" ADD CONSTRAINT "homepage_featured_proof_cases_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_featured_proof_cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_featured_proof_team_members" ADD CONSTRAINT "homepage_featured_proof_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_featured_proof_team_members_locales" ADD CONSTRAINT "homepage_featured_proof_team_members_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_featured_proof_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_infrastructure_items" ADD CONSTRAINT "homepage_infrastructure_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_infrastructure_items_locales" ADD CONSTRAINT "homepage_infrastructure_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_infrastructure_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_growth_mission_c_t_a_media_items" ADD CONSTRAINT "homepage_growth_mission_c_t_a_media_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_locales" ADD CONSTRAINT "homepage_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_locales" ADD CONSTRAINT "homepage_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_product_to_market_gap_partner_logos" ADD CONSTRAINT "_homepage_v_version_product_to_market_gap_partner_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_product_to_market_gap_items" ADD CONSTRAINT "_homepage_v_version_product_to_market_gap_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_product_to_market_gap_items_locales" ADD CONSTRAINT "_homepage_v_version_product_to_market_gap_items_locales_p_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_product_to_market_gap_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_value_layers_items" ADD CONSTRAINT "_homepage_v_version_value_layers_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_value_layers_items_locales" ADD CONSTRAINT "_homepage_v_version_value_layers_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_value_layers_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_proof_process_scale_stages" ADD CONSTRAINT "_homepage_v_version_proof_process_scale_stages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_proof_process_scale_stages_locales" ADD CONSTRAINT "_homepage_v_version_proof_process_scale_stages_locales_pa_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_proof_process_scale_stages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_capabilities_items_bullets" ADD CONSTRAINT "_homepage_v_version_capabilities_items_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_capabilities_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_capabilities_items_bullets_locales" ADD CONSTRAINT "_homepage_v_version_capabilities_items_bullets_locales_pa_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_capabilities_items_bullets"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_capabilities_items" ADD CONSTRAINT "_homepage_v_version_capabilities_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_capabilities_items_locales" ADD CONSTRAINT "_homepage_v_version_capabilities_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_capabilities_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_measurement_metrics" ADD CONSTRAINT "_homepage_v_version_measurement_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_measurement_metrics_locales" ADD CONSTRAINT "_homepage_v_version_measurement_metrics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_measurement_metrics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_measurement_industries" ADD CONSTRAINT "_homepage_v_version_measurement_industries_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_measurement_industries_locales" ADD CONSTRAINT "_homepage_v_version_measurement_industries_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_measurement_industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_featured_proof_testimonials" ADD CONSTRAINT "_homepage_v_version_featured_proof_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_featured_proof_testimonials_locales" ADD CONSTRAINT "_homepage_v_version_featured_proof_testimonials_locales_p_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_featured_proof_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_featured_proof_cases" ADD CONSTRAINT "_homepage_v_version_featured_proof_cases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_featured_proof_cases_locales" ADD CONSTRAINT "_homepage_v_version_featured_proof_cases_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_featured_proof_cases"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_featured_proof_team_members" ADD CONSTRAINT "_homepage_v_version_featured_proof_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_featured_proof_team_members_locales" ADD CONSTRAINT "_homepage_v_version_featured_proof_team_members_locales_p_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_featured_proof_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_infrastructure_items" ADD CONSTRAINT "_homepage_v_version_infrastructure_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_infrastructure_items_locales" ADD CONSTRAINT "_homepage_v_version_infrastructure_items_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v_version_infrastructure_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_version_growth_mission_c_t_a_media_items" ADD CONSTRAINT "_homepage_v_version_growth_mission_c_t_a_media_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_locales" ADD CONSTRAINT "_homepage_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_homepage_v_locales" ADD CONSTRAINT "_homepage_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_homepage_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_homepage_v_rels" ADD CONSTRAINT "_homepage_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_vmo_locales" ADD CONSTRAINT "about_vmo_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_vmo_locales" ADD CONSTRAINT "about_vmo_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_vmo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_about_vmo_v_locales" ADD CONSTRAINT "_about_vmo_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_about_vmo_v_locales" ADD CONSTRAINT "_about_vmo_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_about_vmo_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "how_we_work_stages" ADD CONSTRAINT "how_we_work_stages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."how_we_work"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "how_we_work_stages_locales" ADD CONSTRAINT "how_we_work_stages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."how_we_work_stages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "how_we_work_locales" ADD CONSTRAINT "how_we_work_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "how_we_work_locales" ADD CONSTRAINT "how_we_work_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."how_we_work"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_how_we_work_v_version_stages" ADD CONSTRAINT "_how_we_work_v_version_stages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_how_we_work_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_how_we_work_v_version_stages_locales" ADD CONSTRAINT "_how_we_work_v_version_stages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_how_we_work_v_version_stages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_how_we_work_v_locales" ADD CONSTRAINT "_how_we_work_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_how_we_work_v_locales" ADD CONSTRAINT "_how_we_work_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_how_we_work_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "vmo_os_page_locales" ADD CONSTRAINT "vmo_os_page_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "vmo_os_page_locales" ADD CONSTRAINT "vmo_os_page_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."vmo_os_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "vmo_os_page_rels" ADD CONSTRAINT "vmo_os_page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."vmo_os_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "vmo_os_page_rels" ADD CONSTRAINT "vmo_os_page_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_vmo_os_page_v_locales" ADD CONSTRAINT "_vmo_os_page_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_vmo_os_page_v_locales" ADD CONSTRAINT "_vmo_os_page_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_vmo_os_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_vmo_os_page_v_rels" ADD CONSTRAINT "_vmo_os_page_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_vmo_os_page_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_vmo_os_page_v_rels" ADD CONSTRAINT "_vmo_os_page_v_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "capabilities_featured_image_idx" ON "capabilities" USING btree ("featured_image_id");
  CREATE INDEX "capabilities_updated_at_idx" ON "capabilities" USING btree ("updated_at");
  CREATE INDEX "capabilities_created_at_idx" ON "capabilities" USING btree ("created_at");
  CREATE INDEX "capabilities__status_idx" ON "capabilities" USING btree ("_status");
  CREATE INDEX "capabilities_slug_idx" ON "capabilities_locales" USING btree ("slug","_locale");
  CREATE INDEX "capabilities_meta_meta_image_idx" ON "capabilities_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "capabilities_locales_locale_parent_id_unique" ON "capabilities_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_capabilities_v_parent_idx" ON "_capabilities_v" USING btree ("parent_id");
  CREATE INDEX "_capabilities_v_version_version_featured_image_idx" ON "_capabilities_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_capabilities_v_version_version_updated_at_idx" ON "_capabilities_v" USING btree ("version_updated_at");
  CREATE INDEX "_capabilities_v_version_version_created_at_idx" ON "_capabilities_v" USING btree ("version_created_at");
  CREATE INDEX "_capabilities_v_version_version__status_idx" ON "_capabilities_v" USING btree ("version__status");
  CREATE INDEX "_capabilities_v_created_at_idx" ON "_capabilities_v" USING btree ("created_at");
  CREATE INDEX "_capabilities_v_updated_at_idx" ON "_capabilities_v" USING btree ("updated_at");
  CREATE INDEX "_capabilities_v_snapshot_idx" ON "_capabilities_v" USING btree ("snapshot");
  CREATE INDEX "_capabilities_v_published_locale_idx" ON "_capabilities_v" USING btree ("published_locale");
  CREATE INDEX "_capabilities_v_latest_idx" ON "_capabilities_v" USING btree ("latest");
  CREATE INDEX "_capabilities_v_version_version_slug_idx" ON "_capabilities_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_capabilities_v_version_meta_version_meta_image_idx" ON "_capabilities_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_capabilities_v_locales_locale_parent_id_unique" ON "_capabilities_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "solutions_featured_image_idx" ON "solutions" USING btree ("featured_image_id");
  CREATE INDEX "solutions_updated_at_idx" ON "solutions" USING btree ("updated_at");
  CREATE INDEX "solutions_created_at_idx" ON "solutions" USING btree ("created_at");
  CREATE INDEX "solutions__status_idx" ON "solutions" USING btree ("_status");
  CREATE INDEX "solutions_slug_idx" ON "solutions_locales" USING btree ("slug","_locale");
  CREATE INDEX "solutions_meta_meta_image_idx" ON "solutions_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "solutions_locales_locale_parent_id_unique" ON "solutions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "solutions_rels_order_idx" ON "solutions_rels" USING btree ("order");
  CREATE INDEX "solutions_rels_parent_idx" ON "solutions_rels" USING btree ("parent_id");
  CREATE INDEX "solutions_rels_path_idx" ON "solutions_rels" USING btree ("path");
  CREATE INDEX "solutions_rels_capabilities_id_idx" ON "solutions_rels" USING btree ("capabilities_id");
  CREATE INDEX "_solutions_v_parent_idx" ON "_solutions_v" USING btree ("parent_id");
  CREATE INDEX "_solutions_v_version_version_featured_image_idx" ON "_solutions_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_solutions_v_version_version_updated_at_idx" ON "_solutions_v" USING btree ("version_updated_at");
  CREATE INDEX "_solutions_v_version_version_created_at_idx" ON "_solutions_v" USING btree ("version_created_at");
  CREATE INDEX "_solutions_v_version_version__status_idx" ON "_solutions_v" USING btree ("version__status");
  CREATE INDEX "_solutions_v_created_at_idx" ON "_solutions_v" USING btree ("created_at");
  CREATE INDEX "_solutions_v_updated_at_idx" ON "_solutions_v" USING btree ("updated_at");
  CREATE INDEX "_solutions_v_snapshot_idx" ON "_solutions_v" USING btree ("snapshot");
  CREATE INDEX "_solutions_v_published_locale_idx" ON "_solutions_v" USING btree ("published_locale");
  CREATE INDEX "_solutions_v_latest_idx" ON "_solutions_v" USING btree ("latest");
  CREATE INDEX "_solutions_v_version_version_slug_idx" ON "_solutions_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_solutions_v_version_meta_version_meta_image_idx" ON "_solutions_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_solutions_v_locales_locale_parent_id_unique" ON "_solutions_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_solutions_v_rels_order_idx" ON "_solutions_v_rels" USING btree ("order");
  CREATE INDEX "_solutions_v_rels_parent_idx" ON "_solutions_v_rels" USING btree ("parent_id");
  CREATE INDEX "_solutions_v_rels_path_idx" ON "_solutions_v_rels" USING btree ("path");
  CREATE INDEX "_solutions_v_rels_capabilities_id_idx" ON "_solutions_v_rels" USING btree ("capabilities_id");
  CREATE INDEX "projects_featured_image_idx" ON "projects" USING btree ("featured_image_id");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE INDEX "projects_slug_idx" ON "projects_locales" USING btree ("slug","_locale");
  CREATE INDEX "projects_meta_meta_image_idx" ON "projects_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "projects_locales_locale_parent_id_unique" ON "projects_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "projects_rels_order_idx" ON "projects_rels" USING btree ("order");
  CREATE INDEX "projects_rels_parent_idx" ON "projects_rels" USING btree ("parent_id");
  CREATE INDEX "projects_rels_path_idx" ON "projects_rels" USING btree ("path");
  CREATE INDEX "projects_rels_capabilities_id_idx" ON "projects_rels" USING btree ("capabilities_id");
  CREATE INDEX "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX "_projects_v_version_version_featured_image_idx" ON "_projects_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX "_projects_v_snapshot_idx" ON "_projects_v" USING btree ("snapshot");
  CREATE INDEX "_projects_v_published_locale_idx" ON "_projects_v" USING btree ("published_locale");
  CREATE INDEX "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE INDEX "_projects_v_version_version_slug_idx" ON "_projects_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_projects_v_version_meta_version_meta_image_idx" ON "_projects_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_projects_v_locales_locale_parent_id_unique" ON "_projects_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_projects_v_rels_order_idx" ON "_projects_v_rels" USING btree ("order");
  CREATE INDEX "_projects_v_rels_parent_idx" ON "_projects_v_rels" USING btree ("parent_id");
  CREATE INDEX "_projects_v_rels_path_idx" ON "_projects_v_rels" USING btree ("path");
  CREATE INDEX "_projects_v_rels_capabilities_id_idx" ON "_projects_v_rels" USING btree ("capabilities_id");
  CREATE INDEX "case_studies_featured_image_idx" ON "case_studies" USING btree ("featured_image_id");
  CREATE INDEX "case_studies_updated_at_idx" ON "case_studies" USING btree ("updated_at");
  CREATE INDEX "case_studies_created_at_idx" ON "case_studies" USING btree ("created_at");
  CREATE INDEX "case_studies__status_idx" ON "case_studies" USING btree ("_status");
  CREATE INDEX "case_studies_slug_idx" ON "case_studies_locales" USING btree ("slug","_locale");
  CREATE INDEX "case_studies_meta_meta_image_idx" ON "case_studies_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "case_studies_locales_locale_parent_id_unique" ON "case_studies_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_case_studies_v_parent_idx" ON "_case_studies_v" USING btree ("parent_id");
  CREATE INDEX "_case_studies_v_version_version_featured_image_idx" ON "_case_studies_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_case_studies_v_version_version_updated_at_idx" ON "_case_studies_v" USING btree ("version_updated_at");
  CREATE INDEX "_case_studies_v_version_version_created_at_idx" ON "_case_studies_v" USING btree ("version_created_at");
  CREATE INDEX "_case_studies_v_version_version__status_idx" ON "_case_studies_v" USING btree ("version__status");
  CREATE INDEX "_case_studies_v_created_at_idx" ON "_case_studies_v" USING btree ("created_at");
  CREATE INDEX "_case_studies_v_updated_at_idx" ON "_case_studies_v" USING btree ("updated_at");
  CREATE INDEX "_case_studies_v_snapshot_idx" ON "_case_studies_v" USING btree ("snapshot");
  CREATE INDEX "_case_studies_v_published_locale_idx" ON "_case_studies_v" USING btree ("published_locale");
  CREATE INDEX "_case_studies_v_latest_idx" ON "_case_studies_v" USING btree ("latest");
  CREATE INDEX "_case_studies_v_version_version_slug_idx" ON "_case_studies_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_case_studies_v_version_meta_version_meta_image_idx" ON "_case_studies_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_case_studies_v_locales_locale_parent_id_unique" ON "_case_studies_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_featured_image_idx" ON "posts" USING btree ("featured_image_id");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "posts_slug_idx" ON "posts_locales" USING btree ("slug","_locale");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_featured_image_idx" ON "_posts_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "categories__status_idx" ON "categories" USING btree ("_status");
  CREATE INDEX "categories_slug_idx" ON "categories_locales" USING btree ("slug","_locale");
  CREATE INDEX "categories_meta_meta_image_idx" ON "categories_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "categories_locales_locale_parent_id_unique" ON "categories_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_categories_v_parent_idx" ON "_categories_v" USING btree ("parent_id");
  CREATE INDEX "_categories_v_version_version_updated_at_idx" ON "_categories_v" USING btree ("version_updated_at");
  CREATE INDEX "_categories_v_version_version_created_at_idx" ON "_categories_v" USING btree ("version_created_at");
  CREATE INDEX "_categories_v_version_version__status_idx" ON "_categories_v" USING btree ("version__status");
  CREATE INDEX "_categories_v_created_at_idx" ON "_categories_v" USING btree ("created_at");
  CREATE INDEX "_categories_v_updated_at_idx" ON "_categories_v" USING btree ("updated_at");
  CREATE INDEX "_categories_v_snapshot_idx" ON "_categories_v" USING btree ("snapshot");
  CREATE INDEX "_categories_v_published_locale_idx" ON "_categories_v" USING btree ("published_locale");
  CREATE INDEX "_categories_v_latest_idx" ON "_categories_v" USING btree ("latest");
  CREATE INDEX "_categories_v_version_version_slug_idx" ON "_categories_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_categories_v_version_meta_version_meta_image_idx" ON "_categories_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_categories_v_locales_locale_parent_id_unique" ON "_categories_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "integrations_featured_image_idx" ON "integrations" USING btree ("featured_image_id");
  CREATE INDEX "integrations_updated_at_idx" ON "integrations" USING btree ("updated_at");
  CREATE INDEX "integrations_created_at_idx" ON "integrations" USING btree ("created_at");
  CREATE INDEX "integrations__status_idx" ON "integrations" USING btree ("_status");
  CREATE INDEX "integrations_slug_idx" ON "integrations_locales" USING btree ("slug","_locale");
  CREATE INDEX "integrations_meta_meta_image_idx" ON "integrations_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "integrations_locales_locale_parent_id_unique" ON "integrations_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_integrations_v_parent_idx" ON "_integrations_v" USING btree ("parent_id");
  CREATE INDEX "_integrations_v_version_version_featured_image_idx" ON "_integrations_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_integrations_v_version_version_updated_at_idx" ON "_integrations_v" USING btree ("version_updated_at");
  CREATE INDEX "_integrations_v_version_version_created_at_idx" ON "_integrations_v" USING btree ("version_created_at");
  CREATE INDEX "_integrations_v_version_version__status_idx" ON "_integrations_v" USING btree ("version__status");
  CREATE INDEX "_integrations_v_created_at_idx" ON "_integrations_v" USING btree ("created_at");
  CREATE INDEX "_integrations_v_updated_at_idx" ON "_integrations_v" USING btree ("updated_at");
  CREATE INDEX "_integrations_v_snapshot_idx" ON "_integrations_v" USING btree ("snapshot");
  CREATE INDEX "_integrations_v_published_locale_idx" ON "_integrations_v" USING btree ("published_locale");
  CREATE INDEX "_integrations_v_latest_idx" ON "_integrations_v" USING btree ("latest");
  CREATE INDEX "_integrations_v_version_version_slug_idx" ON "_integrations_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_integrations_v_version_meta_version_meta_image_idx" ON "_integrations_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_integrations_v_locales_locale_parent_id_unique" ON "_integrations_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "team_featured_image_idx" ON "team" USING btree ("featured_image_id");
  CREATE INDEX "team_updated_at_idx" ON "team" USING btree ("updated_at");
  CREATE INDEX "team_created_at_idx" ON "team" USING btree ("created_at");
  CREATE INDEX "team__status_idx" ON "team" USING btree ("_status");
  CREATE INDEX "team_slug_idx" ON "team_locales" USING btree ("slug","_locale");
  CREATE INDEX "team_meta_meta_image_idx" ON "team_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "team_locales_locale_parent_id_unique" ON "team_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_team_v_parent_idx" ON "_team_v" USING btree ("parent_id");
  CREATE INDEX "_team_v_version_version_featured_image_idx" ON "_team_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_team_v_version_version_updated_at_idx" ON "_team_v" USING btree ("version_updated_at");
  CREATE INDEX "_team_v_version_version_created_at_idx" ON "_team_v" USING btree ("version_created_at");
  CREATE INDEX "_team_v_version_version__status_idx" ON "_team_v" USING btree ("version__status");
  CREATE INDEX "_team_v_created_at_idx" ON "_team_v" USING btree ("created_at");
  CREATE INDEX "_team_v_updated_at_idx" ON "_team_v" USING btree ("updated_at");
  CREATE INDEX "_team_v_snapshot_idx" ON "_team_v" USING btree ("snapshot");
  CREATE INDEX "_team_v_published_locale_idx" ON "_team_v" USING btree ("published_locale");
  CREATE INDEX "_team_v_latest_idx" ON "_team_v" USING btree ("latest");
  CREATE INDEX "_team_v_version_version_slug_idx" ON "_team_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_team_v_version_meta_version_meta_image_idx" ON "_team_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_team_v_locales_locale_parent_id_unique" ON "_team_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "careers_featured_image_idx" ON "careers" USING btree ("featured_image_id");
  CREATE INDEX "careers_updated_at_idx" ON "careers" USING btree ("updated_at");
  CREATE INDEX "careers_created_at_idx" ON "careers" USING btree ("created_at");
  CREATE INDEX "careers__status_idx" ON "careers" USING btree ("_status");
  CREATE INDEX "careers_slug_idx" ON "careers_locales" USING btree ("slug","_locale");
  CREATE INDEX "careers_meta_meta_image_idx" ON "careers_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "careers_locales_locale_parent_id_unique" ON "careers_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_careers_v_parent_idx" ON "_careers_v" USING btree ("parent_id");
  CREATE INDEX "_careers_v_version_version_featured_image_idx" ON "_careers_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_careers_v_version_version_updated_at_idx" ON "_careers_v" USING btree ("version_updated_at");
  CREATE INDEX "_careers_v_version_version_created_at_idx" ON "_careers_v" USING btree ("version_created_at");
  CREATE INDEX "_careers_v_version_version__status_idx" ON "_careers_v" USING btree ("version__status");
  CREATE INDEX "_careers_v_created_at_idx" ON "_careers_v" USING btree ("created_at");
  CREATE INDEX "_careers_v_updated_at_idx" ON "_careers_v" USING btree ("updated_at");
  CREATE INDEX "_careers_v_snapshot_idx" ON "_careers_v" USING btree ("snapshot");
  CREATE INDEX "_careers_v_published_locale_idx" ON "_careers_v" USING btree ("published_locale");
  CREATE INDEX "_careers_v_latest_idx" ON "_careers_v" USING btree ("latest");
  CREATE INDEX "_careers_v_version_version_slug_idx" ON "_careers_v_locales" USING btree ("version_slug","_locale");
  CREATE INDEX "_careers_v_version_meta_version_meta_image_idx" ON "_careers_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_careers_v_locales_locale_parent_id_unique" ON "_careers_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE INDEX "faqs__status_idx" ON "faqs" USING btree ("_status");
  CREATE INDEX "faqs_meta_meta_image_idx" ON "faqs_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "faqs_locales_locale_parent_id_unique" ON "faqs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_faqs_v_parent_idx" ON "_faqs_v" USING btree ("parent_id");
  CREATE INDEX "_faqs_v_version_version_updated_at_idx" ON "_faqs_v" USING btree ("version_updated_at");
  CREATE INDEX "_faqs_v_version_version_created_at_idx" ON "_faqs_v" USING btree ("version_created_at");
  CREATE INDEX "_faqs_v_version_version__status_idx" ON "_faqs_v" USING btree ("version__status");
  CREATE INDEX "_faqs_v_created_at_idx" ON "_faqs_v" USING btree ("created_at");
  CREATE INDEX "_faqs_v_updated_at_idx" ON "_faqs_v" USING btree ("updated_at");
  CREATE INDEX "_faqs_v_snapshot_idx" ON "_faqs_v" USING btree ("snapshot");
  CREATE INDEX "_faqs_v_published_locale_idx" ON "_faqs_v" USING btree ("published_locale");
  CREATE INDEX "_faqs_v_latest_idx" ON "_faqs_v" USING btree ("latest");
  CREATE INDEX "_faqs_v_version_meta_version_meta_image_idx" ON "_faqs_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_faqs_v_locales_locale_parent_id_unique" ON "_faqs_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "leads_updated_at_idx" ON "leads" USING btree ("updated_at");
  CREATE INDEX "leads_created_at_idx" ON "leads" USING btree ("created_at");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_capabilities_id_idx" ON "redirects_rels" USING btree ("capabilities_id");
  CREATE INDEX "redirects_rels_solutions_id_idx" ON "redirects_rels" USING btree ("solutions_id");
  CREATE INDEX "redirects_rels_projects_id_idx" ON "redirects_rels" USING btree ("projects_id");
  CREATE INDEX "redirects_rels_case_studies_id_idx" ON "redirects_rels" USING btree ("case_studies_id");
  CREATE INDEX "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX "redirects_rels_careers_id_idx" ON "redirects_rels" USING btree ("careers_id");
  CREATE INDEX "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE UNIQUE INDEX "search_locales_locale_parent_id_unique" ON "search_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX "search_rels_capabilities_id_idx" ON "search_rels" USING btree ("capabilities_id");
  CREATE INDEX "search_rels_solutions_id_idx" ON "search_rels" USING btree ("solutions_id");
  CREATE INDEX "search_rels_projects_id_idx" ON "search_rels" USING btree ("projects_id");
  CREATE INDEX "search_rels_case_studies_id_idx" ON "search_rels" USING btree ("case_studies_id");
  CREATE INDEX "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE INDEX "search_rels_careers_id_idx" ON "search_rels" USING btree ("careers_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_capabilities_id_idx" ON "payload_locked_documents_rels" USING btree ("capabilities_id");
  CREATE INDEX "payload_locked_documents_rels_solutions_id_idx" ON "payload_locked_documents_rels" USING btree ("solutions_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" USING btree ("case_studies_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_integrations_id_idx" ON "payload_locked_documents_rels" USING btree ("integrations_id");
  CREATE INDEX "payload_locked_documents_rels_team_id_idx" ON "payload_locked_documents_rels" USING btree ("team_id");
  CREATE INDEX "payload_locked_documents_rels_careers_id_idx" ON "payload_locked_documents_rels" USING btree ("careers_id");
  CREATE INDEX "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX "payload_locked_documents_rels_leads_id_idx" ON "payload_locked_documents_rels" USING btree ("leads_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings_default_s_e_o_image_idx" ON "site_settings" USING btree ("default_s_e_o_image_id");
  CREATE INDEX "site_settings__status_idx" ON "site_settings" USING btree ("_status");
  CREATE INDEX "site_settings_meta_meta_image_idx" ON "site_settings_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_site_settings_v_version_version_default_s_e_o_image_idx" ON "_site_settings_v" USING btree ("version_default_s_e_o_image_id");
  CREATE INDEX "_site_settings_v_version_version__status_idx" ON "_site_settings_v" USING btree ("version__status");
  CREATE INDEX "_site_settings_v_created_at_idx" ON "_site_settings_v" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_updated_at_idx" ON "_site_settings_v" USING btree ("updated_at");
  CREATE INDEX "_site_settings_v_snapshot_idx" ON "_site_settings_v" USING btree ("snapshot");
  CREATE INDEX "_site_settings_v_published_locale_idx" ON "_site_settings_v" USING btree ("published_locale");
  CREATE INDEX "_site_settings_v_latest_idx" ON "_site_settings_v" USING btree ("latest");
  CREATE INDEX "_site_settings_v_version_meta_version_meta_image_idx" ON "_site_settings_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_site_settings_v_locales_locale_parent_id_unique" ON "_site_settings_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "header_navigation_order_idx" ON "header_navigation" USING btree ("_order");
  CREATE INDEX "header_navigation_parent_id_idx" ON "header_navigation" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "header_navigation_locales_locale_parent_id_unique" ON "header_navigation_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE INDEX "header__status_idx" ON "header" USING btree ("_status");
  CREATE UNIQUE INDEX "header_locales_locale_parent_id_unique" ON "header_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_header_v_version_navigation_order_idx" ON "_header_v_version_navigation" USING btree ("_order");
  CREATE INDEX "_header_v_version_navigation_parent_id_idx" ON "_header_v_version_navigation" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_header_v_version_navigation_locales_locale_parent_id_unique" ON "_header_v_version_navigation_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_header_v_version_version_logo_idx" ON "_header_v" USING btree ("version_logo_id");
  CREATE INDEX "_header_v_version_version__status_idx" ON "_header_v" USING btree ("version__status");
  CREATE INDEX "_header_v_created_at_idx" ON "_header_v" USING btree ("created_at");
  CREATE INDEX "_header_v_updated_at_idx" ON "_header_v" USING btree ("updated_at");
  CREATE INDEX "_header_v_snapshot_idx" ON "_header_v" USING btree ("snapshot");
  CREATE INDEX "_header_v_published_locale_idx" ON "_header_v" USING btree ("published_locale");
  CREATE INDEX "_header_v_latest_idx" ON "_header_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_header_v_locales_locale_parent_id_unique" ON "_header_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "footer_columns_links_locales_locale_parent_id_unique" ON "footer_columns_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "footer_columns_locales_locale_parent_id_unique" ON "footer_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer__status_idx" ON "footer" USING btree ("_status");
  CREATE UNIQUE INDEX "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_footer_v_version_columns_links_order_idx" ON "_footer_v_version_columns_links" USING btree ("_order");
  CREATE INDEX "_footer_v_version_columns_links_parent_id_idx" ON "_footer_v_version_columns_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_footer_v_version_columns_links_locales_locale_parent_id_uni" ON "_footer_v_version_columns_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_footer_v_version_columns_order_idx" ON "_footer_v_version_columns" USING btree ("_order");
  CREATE INDEX "_footer_v_version_columns_parent_id_idx" ON "_footer_v_version_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_footer_v_version_columns_locales_locale_parent_id_unique" ON "_footer_v_version_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_footer_v_version_version__status_idx" ON "_footer_v" USING btree ("version__status");
  CREATE INDEX "_footer_v_created_at_idx" ON "_footer_v" USING btree ("created_at");
  CREATE INDEX "_footer_v_updated_at_idx" ON "_footer_v" USING btree ("updated_at");
  CREATE INDEX "_footer_v_snapshot_idx" ON "_footer_v" USING btree ("snapshot");
  CREATE INDEX "_footer_v_published_locale_idx" ON "_footer_v" USING btree ("published_locale");
  CREATE INDEX "_footer_v_latest_idx" ON "_footer_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_footer_v_locales_locale_parent_id_unique" ON "_footer_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_product_to_market_gap_partner_logos_order_idx" ON "homepage_product_to_market_gap_partner_logos" USING btree ("_order");
  CREATE INDEX "homepage_product_to_market_gap_partner_logos_parent_id_idx" ON "homepage_product_to_market_gap_partner_logos" USING btree ("_parent_id");
  CREATE INDEX "homepage_product_to_market_gap_items_order_idx" ON "homepage_product_to_market_gap_items" USING btree ("_order");
  CREATE INDEX "homepage_product_to_market_gap_items_parent_id_idx" ON "homepage_product_to_market_gap_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_product_to_market_gap_items_locales_locale_parent_i" ON "homepage_product_to_market_gap_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_value_layers_items_order_idx" ON "homepage_value_layers_items" USING btree ("_order");
  CREATE INDEX "homepage_value_layers_items_parent_id_idx" ON "homepage_value_layers_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_value_layers_items_locales_locale_parent_id_unique" ON "homepage_value_layers_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_proof_process_scale_stages_order_idx" ON "homepage_proof_process_scale_stages" USING btree ("_order");
  CREATE INDEX "homepage_proof_process_scale_stages_parent_id_idx" ON "homepage_proof_process_scale_stages" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_proof_process_scale_stages_locales_locale_parent_id" ON "homepage_proof_process_scale_stages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_capabilities_items_bullets_order_idx" ON "homepage_capabilities_items_bullets" USING btree ("_order");
  CREATE INDEX "homepage_capabilities_items_bullets_parent_id_idx" ON "homepage_capabilities_items_bullets" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_capabilities_items_bullets_locales_locale_parent_id" ON "homepage_capabilities_items_bullets_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_capabilities_items_order_idx" ON "homepage_capabilities_items" USING btree ("_order");
  CREATE INDEX "homepage_capabilities_items_parent_id_idx" ON "homepage_capabilities_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_capabilities_items_locales_locale_parent_id_unique" ON "homepage_capabilities_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_measurement_metrics_order_idx" ON "homepage_measurement_metrics" USING btree ("_order");
  CREATE INDEX "homepage_measurement_metrics_parent_id_idx" ON "homepage_measurement_metrics" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_measurement_metrics_locales_locale_parent_id_unique" ON "homepage_measurement_metrics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_measurement_industries_order_idx" ON "homepage_measurement_industries" USING btree ("_order");
  CREATE INDEX "homepage_measurement_industries_parent_id_idx" ON "homepage_measurement_industries" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_measurement_industries_locales_locale_parent_id_uni" ON "homepage_measurement_industries_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_featured_proof_testimonials_order_idx" ON "homepage_featured_proof_testimonials" USING btree ("_order");
  CREATE INDEX "homepage_featured_proof_testimonials_parent_id_idx" ON "homepage_featured_proof_testimonials" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_featured_proof_testimonials_locales_locale_parent_i" ON "homepage_featured_proof_testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_featured_proof_cases_order_idx" ON "homepage_featured_proof_cases" USING btree ("_order");
  CREATE INDEX "homepage_featured_proof_cases_parent_id_idx" ON "homepage_featured_proof_cases" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_featured_proof_cases_locales_locale_parent_id_uniqu" ON "homepage_featured_proof_cases_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_featured_proof_team_members_order_idx" ON "homepage_featured_proof_team_members" USING btree ("_order");
  CREATE INDEX "homepage_featured_proof_team_members_parent_id_idx" ON "homepage_featured_proof_team_members" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_featured_proof_team_members_locales_locale_parent_i" ON "homepage_featured_proof_team_members_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_infrastructure_items_order_idx" ON "homepage_infrastructure_items" USING btree ("_order");
  CREATE INDEX "homepage_infrastructure_items_parent_id_idx" ON "homepage_infrastructure_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "homepage_infrastructure_items_locales_locale_parent_id_uniqu" ON "homepage_infrastructure_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_growth_mission_c_t_a_media_items_order_idx" ON "homepage_growth_mission_c_t_a_media_items" USING btree ("_order");
  CREATE INDEX "homepage_growth_mission_c_t_a_media_items_parent_id_idx" ON "homepage_growth_mission_c_t_a_media_items" USING btree ("_parent_id");
  CREATE INDEX "homepage__status_idx" ON "homepage" USING btree ("_status");
  CREATE INDEX "homepage_meta_meta_image_idx" ON "homepage_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "homepage_locales_locale_parent_id_unique" ON "homepage_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_rels_order_idx" ON "homepage_rels" USING btree ("order");
  CREATE INDEX "homepage_rels_parent_idx" ON "homepage_rels" USING btree ("parent_id");
  CREATE INDEX "homepage_rels_path_idx" ON "homepage_rels" USING btree ("path");
  CREATE INDEX "homepage_rels_posts_id_idx" ON "homepage_rels" USING btree ("posts_id");
  CREATE INDEX "_homepage_v_version_product_to_market_gap_partner_logos_order_idx" ON "_homepage_v_version_product_to_market_gap_partner_logos" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_product_to_market_gap_partner_logos_parent_id_idx" ON "_homepage_v_version_product_to_market_gap_partner_logos" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_version_product_to_market_gap_items_order_idx" ON "_homepage_v_version_product_to_market_gap_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_product_to_market_gap_items_parent_id_idx" ON "_homepage_v_version_product_to_market_gap_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_product_to_market_gap_items_locales_loca" ON "_homepage_v_version_product_to_market_gap_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_value_layers_items_order_idx" ON "_homepage_v_version_value_layers_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_value_layers_items_parent_id_idx" ON "_homepage_v_version_value_layers_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_value_layers_items_locales_locale_parent" ON "_homepage_v_version_value_layers_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_proof_process_scale_stages_order_idx" ON "_homepage_v_version_proof_process_scale_stages" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_proof_process_scale_stages_parent_id_idx" ON "_homepage_v_version_proof_process_scale_stages" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_proof_process_scale_stages_locales_local" ON "_homepage_v_version_proof_process_scale_stages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_capabilities_items_bullets_order_idx" ON "_homepage_v_version_capabilities_items_bullets" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_capabilities_items_bullets_parent_id_idx" ON "_homepage_v_version_capabilities_items_bullets" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_capabilities_items_bullets_locales_local" ON "_homepage_v_version_capabilities_items_bullets_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_capabilities_items_order_idx" ON "_homepage_v_version_capabilities_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_capabilities_items_parent_id_idx" ON "_homepage_v_version_capabilities_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_capabilities_items_locales_locale_parent" ON "_homepage_v_version_capabilities_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_measurement_metrics_order_idx" ON "_homepage_v_version_measurement_metrics" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_measurement_metrics_parent_id_idx" ON "_homepage_v_version_measurement_metrics" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_measurement_metrics_locales_locale_paren" ON "_homepage_v_version_measurement_metrics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_measurement_industries_order_idx" ON "_homepage_v_version_measurement_industries" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_measurement_industries_parent_id_idx" ON "_homepage_v_version_measurement_industries" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_measurement_industries_locales_locale_pa" ON "_homepage_v_version_measurement_industries_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_featured_proof_testimonials_order_idx" ON "_homepage_v_version_featured_proof_testimonials" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_featured_proof_testimonials_parent_id_idx" ON "_homepage_v_version_featured_proof_testimonials" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_featured_proof_testimonials_locales_loca" ON "_homepage_v_version_featured_proof_testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_featured_proof_cases_order_idx" ON "_homepage_v_version_featured_proof_cases" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_featured_proof_cases_parent_id_idx" ON "_homepage_v_version_featured_proof_cases" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_featured_proof_cases_locales_locale_pare" ON "_homepage_v_version_featured_proof_cases_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_featured_proof_team_members_order_idx" ON "_homepage_v_version_featured_proof_team_members" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_featured_proof_team_members_parent_id_idx" ON "_homepage_v_version_featured_proof_team_members" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_featured_proof_team_members_locales_loca" ON "_homepage_v_version_featured_proof_team_members_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_infrastructure_items_order_idx" ON "_homepage_v_version_infrastructure_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_infrastructure_items_parent_id_idx" ON "_homepage_v_version_infrastructure_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_homepage_v_version_infrastructure_items_locales_locale_pare" ON "_homepage_v_version_infrastructure_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_version_growth_mission_c_t_a_media_items_order_idx" ON "_homepage_v_version_growth_mission_c_t_a_media_items" USING btree ("_order");
  CREATE INDEX "_homepage_v_version_growth_mission_c_t_a_media_items_parent_id_idx" ON "_homepage_v_version_growth_mission_c_t_a_media_items" USING btree ("_parent_id");
  CREATE INDEX "_homepage_v_version_version__status_idx" ON "_homepage_v" USING btree ("version__status");
  CREATE INDEX "_homepage_v_created_at_idx" ON "_homepage_v" USING btree ("created_at");
  CREATE INDEX "_homepage_v_updated_at_idx" ON "_homepage_v" USING btree ("updated_at");
  CREATE INDEX "_homepage_v_snapshot_idx" ON "_homepage_v" USING btree ("snapshot");
  CREATE INDEX "_homepage_v_published_locale_idx" ON "_homepage_v" USING btree ("published_locale");
  CREATE INDEX "_homepage_v_latest_idx" ON "_homepage_v" USING btree ("latest");
  CREATE INDEX "_homepage_v_version_meta_version_meta_image_idx" ON "_homepage_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_homepage_v_locales_locale_parent_id_unique" ON "_homepage_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_homepage_v_rels_order_idx" ON "_homepage_v_rels" USING btree ("order");
  CREATE INDEX "_homepage_v_rels_parent_idx" ON "_homepage_v_rels" USING btree ("parent_id");
  CREATE INDEX "_homepage_v_rels_path_idx" ON "_homepage_v_rels" USING btree ("path");
  CREATE INDEX "_homepage_v_rels_posts_id_idx" ON "_homepage_v_rels" USING btree ("posts_id");
  CREATE INDEX "about_vmo__status_idx" ON "about_vmo" USING btree ("_status");
  CREATE INDEX "about_vmo_meta_meta_image_idx" ON "about_vmo_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "about_vmo_locales_locale_parent_id_unique" ON "about_vmo_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_about_vmo_v_version_version__status_idx" ON "_about_vmo_v" USING btree ("version__status");
  CREATE INDEX "_about_vmo_v_created_at_idx" ON "_about_vmo_v" USING btree ("created_at");
  CREATE INDEX "_about_vmo_v_updated_at_idx" ON "_about_vmo_v" USING btree ("updated_at");
  CREATE INDEX "_about_vmo_v_snapshot_idx" ON "_about_vmo_v" USING btree ("snapshot");
  CREATE INDEX "_about_vmo_v_published_locale_idx" ON "_about_vmo_v" USING btree ("published_locale");
  CREATE INDEX "_about_vmo_v_latest_idx" ON "_about_vmo_v" USING btree ("latest");
  CREATE INDEX "_about_vmo_v_version_meta_version_meta_image_idx" ON "_about_vmo_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_about_vmo_v_locales_locale_parent_id_unique" ON "_about_vmo_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "how_we_work_stages_order_idx" ON "how_we_work_stages" USING btree ("_order");
  CREATE INDEX "how_we_work_stages_parent_id_idx" ON "how_we_work_stages" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "how_we_work_stages_locales_locale_parent_id_unique" ON "how_we_work_stages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "how_we_work__status_idx" ON "how_we_work" USING btree ("_status");
  CREATE INDEX "how_we_work_meta_meta_image_idx" ON "how_we_work_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "how_we_work_locales_locale_parent_id_unique" ON "how_we_work_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_how_we_work_v_version_stages_order_idx" ON "_how_we_work_v_version_stages" USING btree ("_order");
  CREATE INDEX "_how_we_work_v_version_stages_parent_id_idx" ON "_how_we_work_v_version_stages" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_how_we_work_v_version_stages_locales_locale_parent_id_uniqu" ON "_how_we_work_v_version_stages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_how_we_work_v_version_version__status_idx" ON "_how_we_work_v" USING btree ("version__status");
  CREATE INDEX "_how_we_work_v_created_at_idx" ON "_how_we_work_v" USING btree ("created_at");
  CREATE INDEX "_how_we_work_v_updated_at_idx" ON "_how_we_work_v" USING btree ("updated_at");
  CREATE INDEX "_how_we_work_v_snapshot_idx" ON "_how_we_work_v" USING btree ("snapshot");
  CREATE INDEX "_how_we_work_v_published_locale_idx" ON "_how_we_work_v" USING btree ("published_locale");
  CREATE INDEX "_how_we_work_v_latest_idx" ON "_how_we_work_v" USING btree ("latest");
  CREATE INDEX "_how_we_work_v_version_meta_version_meta_image_idx" ON "_how_we_work_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_how_we_work_v_locales_locale_parent_id_unique" ON "_how_we_work_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "vmo_os_page__status_idx" ON "vmo_os_page" USING btree ("_status");
  CREATE INDEX "vmo_os_page_meta_meta_image_idx" ON "vmo_os_page_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "vmo_os_page_locales_locale_parent_id_unique" ON "vmo_os_page_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "vmo_os_page_rels_order_idx" ON "vmo_os_page_rels" USING btree ("order");
  CREATE INDEX "vmo_os_page_rels_parent_idx" ON "vmo_os_page_rels" USING btree ("parent_id");
  CREATE INDEX "vmo_os_page_rels_path_idx" ON "vmo_os_page_rels" USING btree ("path");
  CREATE INDEX "vmo_os_page_rels_integrations_id_idx" ON "vmo_os_page_rels" USING btree ("integrations_id");
  CREATE INDEX "_vmo_os_page_v_version_version__status_idx" ON "_vmo_os_page_v" USING btree ("version__status");
  CREATE INDEX "_vmo_os_page_v_created_at_idx" ON "_vmo_os_page_v" USING btree ("created_at");
  CREATE INDEX "_vmo_os_page_v_updated_at_idx" ON "_vmo_os_page_v" USING btree ("updated_at");
  CREATE INDEX "_vmo_os_page_v_snapshot_idx" ON "_vmo_os_page_v" USING btree ("snapshot");
  CREATE INDEX "_vmo_os_page_v_published_locale_idx" ON "_vmo_os_page_v" USING btree ("published_locale");
  CREATE INDEX "_vmo_os_page_v_latest_idx" ON "_vmo_os_page_v" USING btree ("latest");
  CREATE INDEX "_vmo_os_page_v_version_meta_version_meta_image_idx" ON "_vmo_os_page_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_vmo_os_page_v_locales_locale_parent_id_unique" ON "_vmo_os_page_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_vmo_os_page_v_rels_order_idx" ON "_vmo_os_page_v_rels" USING btree ("order");
  CREATE INDEX "_vmo_os_page_v_rels_parent_idx" ON "_vmo_os_page_v_rels" USING btree ("parent_id");
  CREATE INDEX "_vmo_os_page_v_rels_path_idx" ON "_vmo_os_page_v_rels" USING btree ("path");
  CREATE INDEX "_vmo_os_page_v_rels_integrations_id_idx" ON "_vmo_os_page_v_rels" USING btree ("integrations_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "capabilities" CASCADE;
  DROP TABLE "capabilities_locales" CASCADE;
  DROP TABLE "_capabilities_v" CASCADE;
  DROP TABLE "_capabilities_v_locales" CASCADE;
  DROP TABLE "solutions" CASCADE;
  DROP TABLE "solutions_locales" CASCADE;
  DROP TABLE "solutions_rels" CASCADE;
  DROP TABLE "_solutions_v" CASCADE;
  DROP TABLE "_solutions_v_locales" CASCADE;
  DROP TABLE "_solutions_v_rels" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "projects_locales" CASCADE;
  DROP TABLE "projects_rels" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  DROP TABLE "_projects_v_locales" CASCADE;
  DROP TABLE "_projects_v_rels" CASCADE;
  DROP TABLE "case_studies" CASCADE;
  DROP TABLE "case_studies_locales" CASCADE;
  DROP TABLE "_case_studies_v" CASCADE;
  DROP TABLE "_case_studies_v_locales" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "categories_locales" CASCADE;
  DROP TABLE "_categories_v" CASCADE;
  DROP TABLE "_categories_v_locales" CASCADE;
  DROP TABLE "integrations" CASCADE;
  DROP TABLE "integrations_locales" CASCADE;
  DROP TABLE "_integrations_v" CASCADE;
  DROP TABLE "_integrations_v_locales" CASCADE;
  DROP TABLE "team" CASCADE;
  DROP TABLE "team_locales" CASCADE;
  DROP TABLE "_team_v" CASCADE;
  DROP TABLE "_team_v_locales" CASCADE;
  DROP TABLE "careers" CASCADE;
  DROP TABLE "careers_locales" CASCADE;
  DROP TABLE "_careers_v" CASCADE;
  DROP TABLE "_careers_v_locales" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "faqs_locales" CASCADE;
  DROP TABLE "_faqs_v" CASCADE;
  DROP TABLE "_faqs_v_locales" CASCADE;
  DROP TABLE "leads" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_locales" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_locales" CASCADE;
  DROP TABLE "_site_settings_v" CASCADE;
  DROP TABLE "_site_settings_v_locales" CASCADE;
  DROP TABLE "header_navigation" CASCADE;
  DROP TABLE "header_navigation_locales" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_locales" CASCADE;
  DROP TABLE "_header_v_version_navigation" CASCADE;
  DROP TABLE "_header_v_version_navigation_locales" CASCADE;
  DROP TABLE "_header_v" CASCADE;
  DROP TABLE "_header_v_locales" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns_links_locales" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer_columns_locales" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  DROP TABLE "_footer_v_version_columns_links" CASCADE;
  DROP TABLE "_footer_v_version_columns_links_locales" CASCADE;
  DROP TABLE "_footer_v_version_columns" CASCADE;
  DROP TABLE "_footer_v_version_columns_locales" CASCADE;
  DROP TABLE "_footer_v" CASCADE;
  DROP TABLE "_footer_v_locales" CASCADE;
  DROP TABLE "homepage_product_to_market_gap_partner_logos" CASCADE;
  DROP TABLE "homepage_product_to_market_gap_items" CASCADE;
  DROP TABLE "homepage_product_to_market_gap_items_locales" CASCADE;
  DROP TABLE "homepage_value_layers_items" CASCADE;
  DROP TABLE "homepage_value_layers_items_locales" CASCADE;
  DROP TABLE "homepage_proof_process_scale_stages" CASCADE;
  DROP TABLE "homepage_proof_process_scale_stages_locales" CASCADE;
  DROP TABLE "homepage_capabilities_items_bullets" CASCADE;
  DROP TABLE "homepage_capabilities_items_bullets_locales" CASCADE;
  DROP TABLE "homepage_capabilities_items" CASCADE;
  DROP TABLE "homepage_capabilities_items_locales" CASCADE;
  DROP TABLE "homepage_measurement_metrics" CASCADE;
  DROP TABLE "homepage_measurement_metrics_locales" CASCADE;
  DROP TABLE "homepage_measurement_industries" CASCADE;
  DROP TABLE "homepage_measurement_industries_locales" CASCADE;
  DROP TABLE "homepage_featured_proof_testimonials" CASCADE;
  DROP TABLE "homepage_featured_proof_testimonials_locales" CASCADE;
  DROP TABLE "homepage_featured_proof_cases" CASCADE;
  DROP TABLE "homepage_featured_proof_cases_locales" CASCADE;
  DROP TABLE "homepage_featured_proof_team_members" CASCADE;
  DROP TABLE "homepage_featured_proof_team_members_locales" CASCADE;
  DROP TABLE "homepage_infrastructure_items" CASCADE;
  DROP TABLE "homepage_infrastructure_items_locales" CASCADE;
  DROP TABLE "homepage_growth_mission_c_t_a_media_items" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "homepage_locales" CASCADE;
  DROP TABLE "homepage_rels" CASCADE;
  DROP TABLE "_homepage_v_version_product_to_market_gap_partner_logos" CASCADE;
  DROP TABLE "_homepage_v_version_product_to_market_gap_items" CASCADE;
  DROP TABLE "_homepage_v_version_product_to_market_gap_items_locales" CASCADE;
  DROP TABLE "_homepage_v_version_value_layers_items" CASCADE;
  DROP TABLE "_homepage_v_version_value_layers_items_locales" CASCADE;
  DROP TABLE "_homepage_v_version_proof_process_scale_stages" CASCADE;
  DROP TABLE "_homepage_v_version_proof_process_scale_stages_locales" CASCADE;
  DROP TABLE "_homepage_v_version_capabilities_items_bullets" CASCADE;
  DROP TABLE "_homepage_v_version_capabilities_items_bullets_locales" CASCADE;
  DROP TABLE "_homepage_v_version_capabilities_items" CASCADE;
  DROP TABLE "_homepage_v_version_capabilities_items_locales" CASCADE;
  DROP TABLE "_homepage_v_version_measurement_metrics" CASCADE;
  DROP TABLE "_homepage_v_version_measurement_metrics_locales" CASCADE;
  DROP TABLE "_homepage_v_version_measurement_industries" CASCADE;
  DROP TABLE "_homepage_v_version_measurement_industries_locales" CASCADE;
  DROP TABLE "_homepage_v_version_featured_proof_testimonials" CASCADE;
  DROP TABLE "_homepage_v_version_featured_proof_testimonials_locales" CASCADE;
  DROP TABLE "_homepage_v_version_featured_proof_cases" CASCADE;
  DROP TABLE "_homepage_v_version_featured_proof_cases_locales" CASCADE;
  DROP TABLE "_homepage_v_version_featured_proof_team_members" CASCADE;
  DROP TABLE "_homepage_v_version_featured_proof_team_members_locales" CASCADE;
  DROP TABLE "_homepage_v_version_infrastructure_items" CASCADE;
  DROP TABLE "_homepage_v_version_infrastructure_items_locales" CASCADE;
  DROP TABLE "_homepage_v_version_growth_mission_c_t_a_media_items" CASCADE;
  DROP TABLE "_homepage_v" CASCADE;
  DROP TABLE "_homepage_v_locales" CASCADE;
  DROP TABLE "_homepage_v_rels" CASCADE;
  DROP TABLE "about_vmo" CASCADE;
  DROP TABLE "about_vmo_locales" CASCADE;
  DROP TABLE "_about_vmo_v" CASCADE;
  DROP TABLE "_about_vmo_v_locales" CASCADE;
  DROP TABLE "how_we_work_stages" CASCADE;
  DROP TABLE "how_we_work_stages_locales" CASCADE;
  DROP TABLE "how_we_work" CASCADE;
  DROP TABLE "how_we_work_locales" CASCADE;
  DROP TABLE "_how_we_work_v_version_stages" CASCADE;
  DROP TABLE "_how_we_work_v_version_stages_locales" CASCADE;
  DROP TABLE "_how_we_work_v" CASCADE;
  DROP TABLE "_how_we_work_v_locales" CASCADE;
  DROP TABLE "vmo_os_page" CASCADE;
  DROP TABLE "vmo_os_page_locales" CASCADE;
  DROP TABLE "vmo_os_page_rels" CASCADE;
  DROP TABLE "_vmo_os_page_v" CASCADE;
  DROP TABLE "_vmo_os_page_v_locales" CASCADE;
  DROP TABLE "_vmo_os_page_v_rels" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_capabilities_status";
  DROP TYPE "public"."enum__capabilities_v_version_status";
  DROP TYPE "public"."enum__capabilities_v_published_locale";
  DROP TYPE "public"."enum_solutions_status";
  DROP TYPE "public"."enum__solutions_v_version_status";
  DROP TYPE "public"."enum__solutions_v_published_locale";
  DROP TYPE "public"."enum_projects_project_type";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum__projects_v_version_project_type";
  DROP TYPE "public"."enum__projects_v_version_status";
  DROP TYPE "public"."enum__projects_v_published_locale";
  DROP TYPE "public"."enum_case_studies_status";
  DROP TYPE "public"."enum__case_studies_v_version_status";
  DROP TYPE "public"."enum__case_studies_v_published_locale";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum__posts_v_published_locale";
  DROP TYPE "public"."enum_categories_category_type";
  DROP TYPE "public"."enum_categories_status";
  DROP TYPE "public"."enum__categories_v_version_category_type";
  DROP TYPE "public"."enum__categories_v_version_status";
  DROP TYPE "public"."enum__categories_v_published_locale";
  DROP TYPE "public"."enum_integrations_integration_status";
  DROP TYPE "public"."enum_integrations_status";
  DROP TYPE "public"."enum__integrations_v_version_integration_status";
  DROP TYPE "public"."enum__integrations_v_version_status";
  DROP TYPE "public"."enum__integrations_v_published_locale";
  DROP TYPE "public"."enum_team_status";
  DROP TYPE "public"."enum__team_v_version_status";
  DROP TYPE "public"."enum__team_v_published_locale";
  DROP TYPE "public"."enum_careers_employment_type";
  DROP TYPE "public"."enum_careers_status";
  DROP TYPE "public"."enum__careers_v_version_employment_type";
  DROP TYPE "public"."enum__careers_v_version_status";
  DROP TYPE "public"."enum__careers_v_published_locale";
  DROP TYPE "public"."enum_faqs_status";
  DROP TYPE "public"."enum__faqs_v_version_status";
  DROP TYPE "public"."enum__faqs_v_published_locale";
  DROP TYPE "public"."enum_leads_locale";
  DROP TYPE "public"."enum_leads_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_redirects_type";
  DROP TYPE "public"."enum_site_settings_status";
  DROP TYPE "public"."enum__site_settings_v_version_status";
  DROP TYPE "public"."enum__site_settings_v_published_locale";
  DROP TYPE "public"."enum_header_status";
  DROP TYPE "public"."enum__header_v_version_status";
  DROP TYPE "public"."enum__header_v_published_locale";
  DROP TYPE "public"."enum_footer_status";
  DROP TYPE "public"."enum__footer_v_version_status";
  DROP TYPE "public"."enum__footer_v_published_locale";
  DROP TYPE "public"."enum_homepage_growth_mission_c_t_a_media_items_type";
  DROP TYPE "public"."enum_homepage_status";
  DROP TYPE "public"."enum__homepage_v_version_growth_mission_c_t_a_media_items_type";
  DROP TYPE "public"."enum__homepage_v_version_status";
  DROP TYPE "public"."enum__homepage_v_published_locale";
  DROP TYPE "public"."enum_about_vmo_status";
  DROP TYPE "public"."enum__about_vmo_v_version_status";
  DROP TYPE "public"."enum__about_vmo_v_published_locale";
  DROP TYPE "public"."enum_how_we_work_status";
  DROP TYPE "public"."enum__how_we_work_v_version_status";
  DROP TYPE "public"."enum__how_we_work_v_published_locale";
  DROP TYPE "public"."enum_vmo_os_page_status";
  DROP TYPE "public"."enum__vmo_os_page_v_version_status";
  DROP TYPE "public"."enum__vmo_os_page_v_published_locale";`)
}
