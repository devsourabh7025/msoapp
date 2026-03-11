"use client";

import { useState, useEffect } from "react";
import AdSection from "./AdSection";

/**
 * Shows ONE ad in a specific position.
 * sectionIndex: 0 = after News Intel, 1 = after MSO Narrative, ... 4 = after MSO Awards
 * Each of the 5 ad spaces appears in its own location (after a different section).
 */
export default function HomepageAdsBlock({ sectionIndex }) {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await fetch("/api/settings/homepage-ads");
        if (res.ok) {
          const data = await res.json();
          setSettings(data.settings);
        }
      } catch (err) {
        console.error("Error fetching homepage ads:", err);
      }
    };
    fetchAds();
  }, []);

  if (!settings?.adSpaces?.length || sectionIndex == null || sectionIndex < 0 || sectionIndex >= 5) {
    return null;
  }

  const maxAds = Math.min(Math.max(0, settings.maxAds ?? 5), 5);
  if (sectionIndex >= maxAds) return null;

  const space = settings.adSpaces[sectionIndex];
  if (!space?.enabled) return null;

  const hasContent =
    (space.type === "image" && space.imageUrl?.trim()) ||
    (space.type === "code" && space.code?.trim());
  if (!hasContent) return null;

  return <AdSection space={space} />;
}
