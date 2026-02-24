"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FontContext = createContext({
  bodyFont: "Inter",
  headingFont: "Inter",
  loaded: false,
});

export function useFonts() {
  return useContext(FontContext);
}

const SYSTEM_FONTS = ["system-ui", "Georgia"];

function buildGoogleFontsUrl(fonts) {
  const toLoad = fonts.filter((f) => f && !SYSTEM_FONTS.includes(f));
  if (toLoad.length === 0) return null;
  const family = toLoad
    .map((f) => `family=${encodeURIComponent(f.replace(/ /g, "+"))}:wght@300;400;500;600;700`)
    .join("&");
  return `https://fonts.googleapis.com/css2?${family}&display=swap`;
}

export function FontProvider({ children }) {
  const [bodyFont, setBodyFont] = useState("Inter");
  const [headingFont, setHeadingFont] = useState("Inter");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/settings/site", { cache: "no-store" })
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data?.site) {
          setBodyFont(data.site.bodyFont || "Inter");
          setHeadingFont(data.site.headingFont || "Inter");
        }
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const fonts = [...new Set([bodyFont, headingFont])];
    const url = buildGoogleFontsUrl(fonts);

    let linkId = "font-provider-google-fonts";
    let existing = document.getElementById(linkId);
    if (existing) existing.remove();

    if (url) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = url;
      document.head.appendChild(link);
    }

    const bodyFontValue = SYSTEM_FONTS.includes(bodyFont) ? bodyFont : `"${bodyFont}", sans-serif`;
    const headingFontValue = SYSTEM_FONTS.includes(headingFont) ? headingFont : `"${headingFont}", sans-serif`;

    let styleId = "font-provider-styles";
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `
      :root {
        --font-body: ${bodyFontValue};
        --font-heading: ${headingFontValue};
      }
      body {
        font-family: var(--font-body) !important;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading) !important;
      }
    `;

    return () => {
      const l = document.getElementById(linkId);
      if (l) l.remove();
    };
  }, [loaded, bodyFont, headingFont]);

  return (
    <FontContext.Provider value={{ bodyFont, headingFont, loaded }}>
      {children}
    </FontContext.Provider>
  );
}
