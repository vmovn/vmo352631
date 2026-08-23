import { publicGlobalAccess } from "./access.js";
import {
  canonicalPathField,
  globalDraftVersions,
  localizedCTA,
  localizedRichText,
} from "./fields.js";

const localizedText = (name, overrides = {}) => ({
  name,
  type: "text",
  localized: true,
  ...overrides,
});

const localizedTextarea = (name, overrides = {}) => ({
  name,
  type: "textarea",
  localized: true,
  ...overrides,
});

const visibilityToggle = (name, label, description) => ({
  name,
  label,
  type: "checkbox",
  defaultValue: false,
  admin: { description },
});

const fixedPageGlobal = ({ slug, label, fields = [] }) => ({
  slug,
  label,
  access: publicGlobalAccess,
  versions: globalDraftVersions,
  fields: [
    localizedText("title", { required: true }),
    localizedTextarea("summary"),
    localizedRichText("body"),
    canonicalPathField,
    ...fields,
  ],
});

export const SiteSettings = {
  slug: "site-settings",
  label: "Site Settings",
  access: publicGlobalAccess,
  versions: globalDraftVersions,
  fields: [
    localizedText("siteName", { required: true }),
    localizedTextarea("siteDescription"),
    localizedText("defaultSEOImageAlt"),
    {
      name: "defaultSEOImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "contact",
      type: "group",
      fields: [
        { name: "email", type: "email" },
        { name: "phone", type: "text" },
        localizedText("address"),
      ],
    },
  ],
};

export const Header = {
  slug: "header",
  label: "Header",
  access: publicGlobalAccess,
  versions: globalDraftVersions,
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "navigation",
      type: "array",
      fields: [
        localizedText("label", { required: true }),
        localizedText("url", { required: true }),
      ],
    },
    localizedCTA("primaryCTA", "Primary CTA"),
  ],
};

export const Footer = {
  slug: "footer",
  label: "Footer",
  access: publicGlobalAccess,
  versions: globalDraftVersions,
  fields: [
    localizedText("heading"),
    localizedTextarea("description"),
    {
      name: "columns",
      type: "array",
      fields: [
        localizedText("title", { required: true }),
        {
          name: "links",
          type: "array",
          fields: [
            localizedText("label", { required: true }),
            localizedText("url", { required: true }),
          ],
        },
      ],
    },
    localizedText("copyright"),
  ],
};

export const Homepage = {
  slug: "homepage",
  label: "Homepage",
  access: publicGlobalAccess,
  versions: globalDraftVersions,
  fields: [
    {
      name: "demoSeed",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description:
          "Historical compatibility marker only. Production rendering must never depend on this value.",
        readOnly: true,
      },
    },
    {
      name: "hero",
      type: "group",
      fields: [
        visibilityToggle(
          "showPartnerProof",
          "Show partner proof",
          "Keep off until the partner relationship and public display are verified.",
        ),
        visibilityToggle(
          "showSuccessMetric",
          "Show success metric",
          "Keep off until the numeric success claim is verified.",
        ),
        visibilityToggle(
          "showAwardMetric",
          "Show award metric",
          "Keep off until the award claim is verified.",
        ),
        localizedText("partnerTitle"),
        localizedText("partnerStrapline"),
        { name: "partnerLogoPath", type: "text" },
        localizedText("eyebrow"),
        localizedText("titleLead"),
        localizedText("titleTail"),
        localizedText("descriptionLead"),
        localizedText("descriptionEmphasis"),
        localizedText("descriptionTail"),
        localizedCTA("primaryCTA", "Primary CTA"),
        localizedCTA("secondaryCTA", "Secondary CTA"),
        { name: "successRate", type: "number" },
        localizedText("successRateLabel"),
        { name: "awardCount", type: "number" },
        localizedText("awardLabel"),
        { name: "imagePath", type: "text" },
      ],
    },
    {
      name: "productToMarketGap",
      type: "group",
      fields: [
        visibilityToggle(
          "showPartnerProof",
          "Show partner proof",
          "Keep off until client/partner statistics and logos are approved for public use.",
        ),
        localizedText("partnerStatLeft"),
        localizedText("partnerStatRight"),
        {
          name: "partnerLogos",
          type: "array",
          fields: [
            { name: "lightPath", type: "text", required: true },
            { name: "darkPath", type: "text" },
          ],
        },
        localizedText("titleLead"),
        localizedText("titleTail"),
        localizedTextarea("description"),
        {
          name: "items",
          type: "array",
          fields: [
            localizedText("titleLead"),
            localizedText("titleTail"),
            localizedTextarea("description"),
          ],
        },
        localizedTextarea("ctaLead"),
        localizedCTA("cta", "Section CTA"),
        { name: "videoPath", type: "text" },
      ],
    },
    {
      name: "valueLayers",
      type: "group",
      fields: [
        localizedText("title"),
        localizedTextarea("description"),
        {
          name: "items",
          type: "array",
          fields: [
            localizedText("title"),
            localizedTextarea("description"),
          ],
        },
      ],
    },
    {
      name: "proofProcessScale",
      type: "group",
      fields: [
        localizedText("title"),
        localizedTextarea("description"),
        {
          name: "stages",
          type: "array",
          minRows: 3,
          maxRows: 3,
          fields: [
            { name: "step", type: "text", required: true },
            localizedText("titleLead"),
            localizedText("titleTail"),
            localizedTextarea("description"),
          ],
        },
      ],
    },
    {
      name: "capabilities",
      type: "group",
      fields: [
        visibilityToggle(
          "showResultMetric",
          "Show capability result metric",
          "Keep off until the result value and label are verified.",
        ),
        localizedText("titleLead"),
        localizedText("titleTail"),
        localizedTextarea("description"),
        localizedText("resultValue"),
        localizedTextarea("resultLabel"),
        {
          name: "items",
          type: "array",
          minRows: 6,
          maxRows: 6,
          fields: [
            localizedText("titleLead"),
            localizedText("titleTail"),
            {
              name: "bullets",
              type: "array",
              maxRows: 3,
              fields: [localizedText("label")],
            },
            localizedCTA("cta", "Item CTA"),
          ],
        },
      ],
    },
    {
      name: "measurement",
      type: "group",
      fields: [
        visibilityToggle(
          "enabled",
          "Enable measurement section",
          "Off by default. Enable only when the section has approved production data.",
        ),
        localizedText("titleLead"),
        localizedText("titleTail"),
        localizedTextarea("description"),
        {
          name: "metrics",
          type: "array",
          maxRows: 4,
          fields: [
            { name: "value", type: "number" },
            localizedText("labelLead"),
            localizedText("labelTail"),
          ],
        },
        localizedText("industryTitleLead"),
        localizedText("industryTitleTail"),
        localizedTextarea("industryDescription"),
        {
          name: "industries",
          type: "array",
          maxRows: 6,
          fields: [
            localizedText("title"),
            localizedTextarea("description"),
            { name: "successRate", type: "number" },
          ],
        },
      ],
    },
    {
      name: "featuredProof",
      type: "group",
      fields: [
        visibilityToggle(
          "showTestimonials",
          "Show testimonials",
          "Off by default. Enable only for verified, publishable testimonials.",
        ),
        visibilityToggle(
          "showCases",
          "Show cases",
          "Off by default. Enable only for verified, publishable case evidence.",
        ),
        visibilityToggle(
          "showTeam",
          "Show team",
          "Off by default. Enable only for approved public team profiles.",
        ),
        localizedText("testimonialTitle"),
        localizedTextarea("testimonialDescription"),
        {
          name: "testimonials",
          type: "array",
          maxRows: 3,
          fields: [
            localizedText("headline"),
            localizedTextarea("quote"),
            localizedText("author"),
            localizedText("role"),
            { name: "imagePath", type: "text" },
          ],
        },
        localizedText("caseTitleLead"),
        localizedText("caseTitleTail"),
        localizedText("caseResultValue"),
        localizedTextarea("caseResultLabel"),
        {
          name: "cases",
          type: "array",
          maxRows: 2,
          fields: [
            localizedText("title"),
            { name: "imagePath", type: "text" },
            { name: "logoPath", type: "text" },
            localizedText("metricOneLabel"),
            { name: "metricOneValue", type: "number" },
            localizedText("metricTwoLabel"),
            { name: "metricTwoValue", type: "number" },
          ],
        },
        localizedText("teamTitleLead"),
        localizedText("teamTitleTail"),
        localizedTextarea("teamDescription"),
        {
          name: "teamMembers",
          type: "array",
          maxRows: 6,
          fields: [
            localizedText("name"),
            localizedText("role"),
            { name: "imagePath", type: "text" },
            { name: "emojiPath", type: "text" },
            { name: "linkedinURL", type: "text" },
          ],
        },
      ],
    },
    {
      name: "infrastructure",
      type: "group",
      fields: [
        visibilityToggle(
          "enabled",
          "Enable infrastructure section",
          "Off by default until approved production infrastructure content exists.",
        ),
        localizedText("title"),
        localizedTextarea("description"),
        {
          name: "items",
          type: "array",
          fields: [
            localizedText("title"),
            localizedTextarea("description"),
          ],
        },
      ],
    },
    {
      name: "insights",
      type: "group",
      fields: [
        visibilityToggle(
          "enabled",
          "Enable insights section",
          "Off by default until approved production insights are selected.",
        ),
        localizedText("title"),
        localizedTextarea("description"),
        {
          name: "featuredPosts",
          type: "relationship",
          relationTo: "posts",
          hasMany: true,
          maxRows: 3,
        },
      ],
    },
    {
      name: "growthMissionCTA",
      type: "group",
      fields: [
        visibilityToggle(
          "enabled",
          "Enable Growth Mission CTA",
          "Off by default until approved production CTA content and media exist.",
        ),
        localizedText("titleLead"),
        localizedText("titleTail"),
        localizedTextarea("descriptionLead"),
        localizedText("descriptionEmphasis"),
        localizedTextarea("descriptionTail"),
        localizedCTA("cta", "Growth Mission CTA"),
        {
          name: "mediaItems",
          type: "array",
          maxRows: 6,
          fields: [
            { name: "type", type: "select", options: ["image", "video"] },
            { name: "path", type: "text", required: true },
          ],
        },
      ],
    },
    canonicalPathField,
  ],
};

export const AboutVMO = fixedPageGlobal({
  slug: "about-vmo",
  label: "About VMO",
});

export const HowWeWork = fixedPageGlobal({
  slug: "how-we-work",
  label: "How We Work",
  fields: [
    {
      name: "stages",
      type: "array",
      fields: [
        localizedText("title"),
        localizedTextarea("description"),
      ],
    },
  ],
});

export const VMOOSPage = fixedPageGlobal({
  slug: "vmo-os-page",
  label: "VMO OS Page",
  fields: [
    {
      name: "integrations",
      type: "relationship",
      relationTo: "integrations",
      hasMany: true,
    },
  ],
});

export const globals = [
  SiteSettings,
  Header,
  Footer,
  Homepage,
  AboutVMO,
  HowWeWork,
  VMOOSPage,
];
