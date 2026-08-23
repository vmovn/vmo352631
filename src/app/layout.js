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

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="icon"
          href="/assets/img/fav-icon.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <meta name="description" content="Your description here" />
        <meta name="keywords" content="next.js, SEO, meta tags" />
        <title>Mortar - IT Startup &amp; Digital Agency Template.</title>
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
