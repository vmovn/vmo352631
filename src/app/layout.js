import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/all.min.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/style.css";
import "@/components/mortar-runtime/modal-video.css";

import MortarExperienceShell from "@/components/mortar-runtime/MortarExperienceShell";
import { dmsans, lora, suseSans } from "@/fonts/font";

const mortarBodyClassName = `tt-magic-cursor ${lora.variable} ${dmsans.variable} ${suseSans.variable}`;

export const metadata = {
  title: "Mortar - IT Startup & Digital Agency Template.",
  description: "Your description here",
  keywords: ["next.js", "SEO", "meta tags"],
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body id="body">
        <MortarExperienceShell bodyClassName={mortarBodyClassName}>
          {children}
        </MortarExperienceShell>
      </body>
    </html>
  );
}
