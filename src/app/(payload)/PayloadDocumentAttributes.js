"use client";

import { useLayoutEffect } from "react";

export default function PayloadDocumentAttributes({
  children,
  direction,
  language,
  theme,
}) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const previous = {
      direction: root.getAttribute("dir"),
      language: root.getAttribute("lang"),
      theme: root.getAttribute("data-theme"),
    };

    root.setAttribute("data-theme", theme);
    root.setAttribute("dir", direction);
    root.setAttribute("lang", language);

    return () => {
      for (const [attribute, value] of [
        ["data-theme", previous.theme],
        ["dir", previous.direction],
        ["lang", previous.language],
      ]) {
        if (value == null) root.removeAttribute(attribute);
        else root.setAttribute(attribute, value);
      }
    };
  }, [direction, language, theme]);

  return children;
}
