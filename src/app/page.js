import Home4Banner from "@/components/banner/Home4Banner";
import Home4ContactSection from "@/components/contact-section/Home4ContactSection";
import Home1SeatureSection from "@/components/feature-section/Home1SeatureSection";
import Home4FeatureSection from "@/components/feature-section/Home4FeatureSection";
import Home4Footer from "@/components/Footer/Home4Footer";
import Header4 from "@/components/header/Header4.js";
import Home6IntegrationSection from "@/components/integration-section/Home6IntegrationSection";
import Home4ProcessSection from "@/components/process-sections/Home4ProcessSection";
import Home3ServiceSection from "@/components/service-section/Home3ServiceSection";
import {
  adaptVmoFooter,
  adaptVmoHeader,
  adaptVmoHomepage,
} from "@/cms/adapters/vmoHomepage";
import { loadProductionHomepageExperience } from "@/cms/loaders/homepage";

import "./vmo-home.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "VMO — Đơn vị triển khai tăng trưởng",
  description:
    "VMO là đơn vị triển khai tăng trưởng cho dự án hệ sinh thái và dự án doanh nghiệp — từ sản phẩm đến người dùng, giao dịch và hệ thống tăng trưởng có thể lặp lại.",
};

export default async function Home() {
  const { homepage, header, footer } = await loadProductionHomepageExperience({
    locale: "vi",
  });
  const data = adaptVmoHomepage(homepage);
  const brand = adaptVmoHeader(header, homepage);
  const footerData = adaptVmoFooter(footer);

  return (
    <div className="vmo-home">
      <Header4 brand={brand} />
      <Home4Banner data={data.hero} />
      <Home1SeatureSection data={data.challenge} />
      <Home4FeatureSection data={data.valueLayers} />
      <Home4ProcessSection data={data.process} />
      <Home3ServiceSection data={data.capabilities} />
      {data.infrastructure ? (
        <Home6IntegrationSection data={data.infrastructure} />
      ) : null}
      {data.contact ? <Home4ContactSection data={data.contact} /> : null}
      <Home4Footer data={footerData} />
    </div>
  );
}
