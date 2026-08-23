import {
  anyone,
  authenticated,
  authenticatedCollectionAccess,
  publicDraftCollectionAccess,
} from "./access.js";
import {
  canonicalPathField,
  draftVersions,
  localizedRichText,
  localizedSlug,
  localizedSummary,
  localizedTitle,
  standardLocalizedDocumentFields,
} from "./fields.js";

export const Users = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "System",
  },
  access: authenticatedCollectionAccess,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      saveToJWT: true,
      options: [
        { label: "Administrator", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
    },
  ],
};

export const Media = {
  slug: "media",
  admin: {
    useAsTitle: "alt",
    group: "Content",
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  upload: {
    staticDir: "public/media",
    mimeTypes: ["image/*", "video/*", "application/pdf"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "caption",
      type: "textarea",
      localized: true,
    },
  ],
};

const createStandardCollection = ({
  slug,
  singular,
  plural,
  fields = [],
  admin = {},
}) => ({
  slug,
  labels: { singular, plural },
  admin: {
    useAsTitle: "title",
    group: "Content",
    ...admin,
  },
  access: publicDraftCollectionAccess,
  versions: draftVersions,
  fields: [...standardLocalizedDocumentFields(), ...fields],
});

export const Capabilities = createStandardCollection({
  slug: "capabilities",
  singular: "Capability",
  plural: "Capabilities",
  fields: [
    { name: "order", type: "number", defaultValue: 0 },
    { name: "featured", type: "checkbox", defaultValue: false },
  ],
});

export const Solutions = createStandardCollection({
  slug: "solutions",
  singular: "Solution",
  plural: "Solutions",
  fields: [
    {
      name: "capabilities",
      type: "relationship",
      relationTo: "capabilities",
      hasMany: true,
    },
    { name: "order", type: "number", defaultValue: 0 },
  ],
});

export const Projects = createStandardCollection({
  slug: "projects",
  singular: "Project",
  plural: "Projects",
  fields: [
    {
      name: "projectType",
      type: "select",
      required: true,
      options: [
        { label: "Dự án hệ sinh thái", value: "ecosystem" },
        { label: "Dự án doanh nghiệp", value: "enterprise" },
      ],
    },
    {
      name: "capabilities",
      type: "relationship",
      relationTo: "capabilities",
      hasMany: true,
    },
    { name: "featured", type: "checkbox", defaultValue: false },
  ],
});

export const CaseStudies = createStandardCollection({
  slug: "case-studies",
  singular: "Case Study",
  plural: "Case Studies",
  fields: [
    localizedRichText("businessProblem"),
    localizedRichText("baseline"),
    localizedRichText("targetOutcome"),
    localizedRichText("hypothesis"),
    localizedRichText("execution"),
    localizedRichText("data"),
    localizedRichText("outcome"),
    localizedRichText("repeatableProcess"),
    localizedRichText("scale"),
    localizedRichText("learning"),
    { name: "featured", type: "checkbox", defaultValue: false },
  ],
});

export const Categories = {
  slug: "categories",
  admin: {
    useAsTitle: "title",
    group: "Content",
  },
  access: publicDraftCollectionAccess,
  versions: draftVersions,
  fields: [
    localizedTitle(),
    localizedSlug(),
    localizedSummary(),
    {
      name: "categoryType",
      type: "select",
      required: true,
      defaultValue: "insight",
      options: [
        { label: "Insight", value: "insight" },
        { label: "Capability", value: "capability" },
        { label: "Industry", value: "industry" },
      ],
    },
    canonicalPathField,
  ],
};

export const Posts = createStandardCollection({
  slug: "posts",
  singular: "Post",
  plural: "Posts",
  fields: [
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: { date: { pickerAppearance: "dayAndTime" } },
    },
  ],
});

export const Integrations = createStandardCollection({
  slug: "integrations",
  singular: "Integration",
  plural: "Integrations",
  fields: [
    {
      name: "integrationStatus",
      type: "select",
      defaultValue: "planned",
      options: [
        { label: "Planned", value: "planned" },
        { label: "Available", value: "available" },
        { label: "Internal only", value: "internal" },
      ],
    },
    { name: "publiclyVisible", type: "checkbox", defaultValue: false },
  ],
});

export const Team = createStandardCollection({
  slug: "team",
  singular: "Team Member",
  plural: "Team",
  fields: [
    {
      name: "jobTitle",
      type: "text",
      localized: true,
    },
    {
      name: "linkedinURL",
      type: "text",
    },
    { name: "order", type: "number", defaultValue: 0 },
    { name: "active", type: "checkbox", defaultValue: true },
  ],
});

export const Careers = createStandardCollection({
  slug: "careers",
  singular: "Career",
  plural: "Careers",
  fields: [
    { name: "location", type: "text", localized: true },
    {
      name: "employmentType",
      type: "select",
      options: [
        { label: "Full-time", value: "full-time" },
        { label: "Part-time", value: "part-time" },
        { label: "OJT / Internship", value: "ojt" },
        { label: "Flexible workforce", value: "flexible" },
      ],
    },
    { name: "active", type: "checkbox", defaultValue: true },
  ],
});

export const FAQs = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQs" },
  admin: {
    useAsTitle: "question",
    group: "Content",
  },
  access: publicDraftCollectionAccess,
  versions: draftVersions,
  fields: [
    {
      name: "question",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "answer",
      type: "richText",
      localized: true,
      required: true,
    },
    { name: "group", type: "text", localized: true },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};

export const Leads = {
  slug: "leads",
  admin: {
    useAsTitle: "email",
    group: "Operations",
  },
  access: {
    create: anyone,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text" },
    { name: "company", type: "text" },
    { name: "product", type: "text" },
    { name: "objective", type: "textarea" },
    { name: "audience", type: "textarea" },
    { name: "stage", type: "text" },
    { name: "targetOutcome", type: "textarea" },
    { name: "constraints", type: "textarea" },
    { name: "timeline", type: "text" },
    { name: "message", type: "textarea" },
    { name: "consent", type: "checkbox", required: true },
    {
      name: "locale",
      type: "select",
      defaultValue: "vi",
      options: ["vi", "en"],
    },
    { name: "source", type: "text" },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: ["new", "qualified", "in-progress", "closed"],
    },
  ],
};

export const collections = [
  Users,
  Media,
  Capabilities,
  Solutions,
  Projects,
  CaseStudies,
  Posts,
  Categories,
  Integrations,
  Team,
  Careers,
  FAQs,
  Leads,
];
