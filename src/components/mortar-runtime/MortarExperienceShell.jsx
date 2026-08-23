"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import ThemeSwitch from "@/components/common/Theme";
import useButtonHoverEffect from "@/customHooks/useButtonHoverEffect";
import useMagneticHover from "@/customHooks/useMagneticHover";
import { useWow } from "@/customHooks/useWow";
import ScrollCircleProgress from "@/utils/ScrollCircleProgess";
import SmoothPageScroll from "@/utils/SmoothPageScroll";
import { isMortarFrontendPath } from "@/utils/isMortarFrontendPath.mjs";

import AnimatedCursor from "./AnimatedCursor";

const ROUTE_BODY_CLASSES = [
  "dark",
  "digital-agency",
  "fintech",
  "it-consulting",
];

const cursorClickables = [
  "a",
  'input[type="text"]',
  'input[type="email"]',
  'input[type="number"]',
  'input[type="submit"]',
  'input[type="image"]',
  "label[for]",
  "select",
  "textarea",
  "button",
  ".link",
];

function MortarFrontendRuntime({ bodyClassName, children, pathname }) {
  useMagneticHover();
  useWow();
  useButtonHoverEffect();

  useEffect(() => {
    const baseClasses = bodyClassName.split(" ").filter(Boolean);
    document.body.classList.add(...baseClasses);

    return () => {
      document.body.classList.remove(...baseClasses, ...ROUTE_BODY_CLASSES);
      document.body.style.cursor = "";
    };
  }, [bodyClassName]);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("../../../public/assets/js/confetti.browser.min");
  }, []);

  return (
    <>
      <SmoothPageScroll />
      {children}
      <AnimatedCursor
        key={pathname}
        innerSize={16}
        outerSize={16}
        color="88, 65, 216"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        outerStyle={{ zIndex: 999999 }}
        innerStyle={{ zIndex: 999999 }}
        clickables={cursorClickables}
      />
      <ScrollCircleProgress />
      <ThemeSwitch />
    </>
  );
}

export default function MortarExperienceShell({ bodyClassName, children }) {
  const pathname = usePathname();

  if (!isMortarFrontendPath(pathname)) {
    return children;
  }

  return (
    <MortarFrontendRuntime
      bodyClassName={bodyClassName}
      pathname={pathname}
    >
      {children}
    </MortarFrontendRuntime>
  );
}
