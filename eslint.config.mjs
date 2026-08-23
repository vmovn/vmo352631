import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const swiperRegistrationFiles = [
  "src/app/about/page.js",
  "src/app/portfolio/carousel/page.js",
  "src/app/portfolio/details/page.js",
  "src/app/portfolio/horizontal/page.js",
  "src/app/product-details/page.js",
  "src/app/service/details/page.js",
  "src/components/banner/Home1banner.jsx",
  "src/components/banner/Home5Banner.jsx",
  "src/components/blog-section/Home1blog.jsx",
  "src/components/blog-section/Home3BlogSection.jsx",
  "src/components/blog-section/Home7BlogSection.jsx",
  "src/components/feature-section/Home2FeatureSliderSection.jsx",
  "src/components/process-sections/Home1processSection.jsx",
  "src/components/team-section/Home4TeamSection.jsx",
  "src/components/testimonial-section/Home1TestimonialSection.jsx",
  "src/components/testimonial-section/Home2TestimonialSection.jsx",
  "src/components/testimonial-section/Home3TestimonialSection.jsx",
  "src/components/testimonial-section/Home4testimonialSection.jsx",
  "src/components/testimonial-section/Home5TestimonialSection.jsx",
  "src/components/testimonial-section/Home6TestimonialSection.jsx",
  "src/components/testimonial-section/Home7TestimonialSection.jsx",
];

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // Mortar intentionally uses its purchased image/link composition. These
      // rules would require a visual rewrite rather than a compatibility fix.
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-page-custom-font": "off",
      "react/no-unescaped-entities": "off",
    },
  },
  {
    files: swiperRegistrationFiles,
    rules: {
      // Swiper 8's static module registration is not a React hook.
      "react-hooks/rules-of-hooks": "off",
    },
  },
  {
    files: [
      "src/components/common/Theme.js",
      "src/components/mortar-runtime/AnimatedCursor.jsx",
    ],
    rules: {
      // Both effects intentionally synchronize browser-only state after mount.
      "react-hooks/set-state-in-effect": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
