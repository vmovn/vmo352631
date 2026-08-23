import { assertHomepageShape } from "../types/homepage.js";

function text(value) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

const valueLayerSplits = [
  ["Đưa sản phẩm", "ra thị trường"],
  ["Tạo bằng chứng", "tăng trưởng"],
  ["Biến cách làm", "thành hệ thống"],
  ["Mở rộng", "bằng công nghệ"],
];

function splitValueLayerTitle(title, index) {
  const canonical = valueLayerSplits[index];
  const value = text(title);
  if (canonical && value === `${canonical[0]} ${canonical[1]}`) {
    return { titleLead: canonical[0], titleTail: canonical[1] };
  }
  if (!value && canonical) {
    return { titleLead: canonical[0], titleTail: canonical[1] };
  }
  return { titleLead: value || canonical?.[0] || "", titleTail: canonical?.[1] || "" };
}

function requireProductionCopy(homepage) {
  const hero = homepage.hero || {};
  if (!text(hero.eyebrow) || !text(hero.titleLead) || !text(hero.titleTail)) {
    throw new Error(
      "Production Homepage is missing required Vietnamese hero copy",
    );
  }
}

export function adaptVmoHomepage(homepage) {
  const safe = assertHomepageShape(homepage);
  requireProductionCopy(safe);

  const gap = safe.productToMarketGap;
  const layers = safe.valueLayers;
  const process = safe.proofProcessScale;
  const capabilities = safe.capabilities;
  const infrastructure = safe.infrastructure;
  const cta = safe.growthMissionCTA;

  const layerItems = (layers.items || []).slice(0, 4).map((item, index) => {
    const split = splitValueLayerTitle(item.title, index);
    return {
      titleLead: split.titleLead,
      titleTail: split.titleTail,
      description: text(item.description) || "",
    };
  });

  return {
    hero: {
      ...safe.hero,
      showPartnerProof: Boolean(safe.hero.showPartnerProof),
      showSuccessMetric: Boolean(safe.hero.showSuccessMetric),
      showAwardMetric: Boolean(safe.hero.showAwardMetric),
    },
    challenge: {
      sectionId: "bai-toan",
      eyebrow: gap.titleLead,
      title: gap.titleTail,
      description: gap.description,
      items: (gap.items || []).slice(0, 4),
      ctaLead: gap.ctaLead,
      cta: gap.cta,
    },
    valueLayers: {
      titleLead: "Bốn lớp giá trị",
      titleTail: "VMO",
      description: layers.description,
      items: layerItems,
      showPartnerProof: false,
      ctaLead: process.description,
      cta: gap.cta,
      videoPath: gap.videoPath || "/assets/video/home4-video.mp4",
    },
    process: {
      ...process,
      sectionId: "cach-vmo-trien-khai",
    },
    capabilities: {
      eyebrow: capabilities.titleLead,
      title: capabilities.titleTail,
      description: capabilities.description,
      items: (capabilities.items || []).slice(0, 6).map((item) => ({
        ...item,
        description:
          (item.bullets || []).map((bullet) => bullet.label).filter(Boolean).join(" · "),
        href: item.cta?.url || "#trao-doi-bai-toan",
        ctaLabel: item.cta?.label || "Trao đổi bài toán",
      })),
      cta: cta.cta,
      footerLead: "Bắt đầu từ bài toán cần giải, không phải từ công cụ.",
      sectionId: "nang-luc",
    },
    infrastructure: infrastructure.enabled
      ? {
          title: infrastructure.title,
          description: infrastructure.description,
          items: infrastructure.items || [],
          showCounters: false,
          centerLabel: "VMO OS",
          cta: {
            label: "Hạ tầng phía sau triển khai",
            url: "#ha-tang-trien-khai",
          },
          sectionId: "ha-tang-trien-khai",
        }
      : null,
    contact: cta.enabled
      ? {
          ...cta,
          sectionId: "trao-doi-bai-toan",
        }
      : null,
  };
}

export function adaptVmoHeader(header, homepage) {
  const nav = Array.isArray(header?.navigation) ? header.navigation : [];
  const cta = header?.primaryCTA || homepage?.hero?.primaryCTA || {};

  return {
    wordmark: "VMO",
    nav: nav.filter((item) => text(item?.label) && text(item?.url)),
    cta: {
      label: text(cta.label) || "Trao đổi bài toán",
      url: text(cta.url) || "#trao-doi-bai-toan",
    },
    supportLabel: "VMO",
    supportValue: "Đơn vị triển khai tăng trưởng",
  };
}

export function adaptVmoFooter(footer) {
  return {
    heading: text(footer?.heading) || "Đơn vị triển khai tăng trưởng.",
    description: text(footer?.description) || "",
    copyright: text(footer?.copyright) || "© VMO.",
    columns: Array.isArray(footer?.columns) ? footer.columns : [],
    wordmark: "VMO",
  };
}
