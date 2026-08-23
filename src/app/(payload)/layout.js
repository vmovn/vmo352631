/* Payload route layout based on the official Payload 3.88.0 blank template. */
import config from "@payload-config";
import "@payloadcms/next/css";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import React from "react";

import { importMap } from "./admin/importMap.js";
import "./custom.scss";
import PayloadDocumentAttributes from "./PayloadDocumentAttributes.js";

export const dynamic = "force-dynamic";

const serverFunction = async (args) => {
  "use server";

  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

const PayloadLayout = async ({ children }) => {
  // Payload's official RootLayout owns <html>/<body>. Mortar's accepted public
  // tree already has the repository root layout, and moving 51 routes solely
  // for route groups is outside Phase 2. Resolve the pinned Payload 3.88 root
  // document and mount its provider/body contents into the existing document.
  const root = RootLayout({
    children,
    config,
    importMap,
    serverFunction,
  });
  const document = await root.type(root.props);

  if (document.type !== "html") {
    throw new Error("Payload RootLayout document contract changed");
  }

  const documentChildren = React.Children.toArray(document.props.children);
  const body = documentChildren.find((child) => child?.type === "body");

  if (!body) {
    throw new Error("Payload RootLayout body contract changed");
  }

  const theme = document.props["data-theme"] || "light";
  const direction = document.props.dir || "LTR";
  const language = document.props.lang || "en";

  return (
    <>
      <style>{"@layer payload-default, payload;"}</style>
      <PayloadDocumentAttributes
        direction={direction}
        language={language}
        theme={theme}
      >
        {body.props.children}
      </PayloadDocumentAttributes>
    </>
  );
};

export default PayloadLayout;
