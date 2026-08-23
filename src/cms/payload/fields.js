export const localizedTitle = (overrides = {}) => ({
  name: "title",
  type: "text",
  localized: true,
  required: true,
  ...overrides,
});

export const localizedSlug = (overrides = {}) => ({
  name: "slug",
  type: "text",
  localized: true,
  required: true,
  index: true,
  ...overrides,
});

export const localizedSummary = (overrides = {}) => ({
  name: "summary",
  type: "textarea",
  localized: true,
  ...overrides,
});

export const localizedRichText = (name = "body", overrides = {}) => ({
  name,
  type: "richText",
  localized: true,
  ...overrides,
});

export const localizedCTA = (name = "cta", label = "CTA") => ({
  name,
  type: "group",
  label,
  fields: [
    {
      name: "label",
      type: "text",
      localized: true,
    },
    {
      name: "url",
      type: "text",
      localized: true,
    },
  ],
});

export const canonicalPathField = {
  name: "canonicalPath",
  type: "text",
  localized: true,
  admin: {
    description:
      "Locale-relative canonical path. Final absolute URL construction follows SITEMAP.md.",
  },
};

export const draftVersions = {
  drafts: {
    autosave: false,
  },
  maxPerDoc: 30,
};

export const globalDraftVersions = {
  drafts: {
    autosave: false,
  },
  max: 30,
};

export const standardLocalizedDocumentFields = ({ includeImage = true } = {}) => {
  const fields = [
    localizedTitle(),
    localizedSlug(),
    localizedSummary(),
    localizedRichText(),
  ];

  if (includeImage) {
    fields.push({
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    });
  }

  fields.push(canonicalPathField);
  return fields;
};
