"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroFeatured from "@/components/HeroFeatured";
import SpotLight from "@/components/SpotLight";
import Featured from "@/components/Featured";
import Explore from "@/components/Explore";
import TrendingNow from "@/components/TrendingNow";
import DiscoverMore from "@/components/DiscoverMore";
import Recent from "@/components/Recent";
import AdSection from "@/components/AdSection";
import Footer from "@/components/Footer";
import axios from "axios";

const sectionComponents = {
  HeroFeatured: HeroFeatured,
  SpotLight: SpotLight,
  Featured: Featured,
  Explore: Explore,
  TrendingNow: TrendingNow,
  Recent: Recent,
  DiscoverMore: DiscoverMore,
};

const defaultOrder = [
  { id: "hero", name: "The Big Edit", component: "HeroFeatured", enabled: true },
  { id: "spotlight", name: "Center Stage", component: "SpotLight", enabled: true },
  { id: "featured", name: "The Front Page", component: "Featured", enabled: true },
  { id: "explore", name: "Discover", component: "Explore", enabled: true },
  {
    id: "trending",
    name: "Trending Now",
    component: "TrendingNow",
    enabled: true,
  },
  {
    id: "discover",
    name: "More Insights",
    component: "DiscoverMore",
    enabled: true,
  },
];

export default function HomeClient({ initialHeroData, initialHeroSettings }) {
  const [sectionOrder, setSectionOrder] = useState(defaultOrder);
  const [adSettings, setAdSettings] = useState({
    maxAds: 5,
    adSpaces: [],
  });

  useEffect(() => {
    let cancelled = false;

    const loadSectionOrder = async () => {
      try {
        const response = await axios.get("/api/settings/homepage");
        if (cancelled || !response.data) return;

        const data = response.data;
        if (cancelled || !data) return;

        if (Array.isArray(data.order)) {
          const filtered = data.order.filter(
            (s) => s.id !== "header" && s.id !== "footer" && s.id !== "recent"
          );

          const hasDiscover = filtered.some((s) => s.id === "discover");
          if (!hasDiscover) {
            filtered.push({
              id: "discover",
              name: "More Insights",
              component: "DiscoverMore",
              enabled: true,
            });
          } else {
            const i = filtered.findIndex((s) => s.id === "discover");
            filtered[i].enabled = true;
          }

          setSectionOrder(filtered);
        }
      } catch (e) {
        console.error("Failed to load section order:", e);
      }
    };

    const loadAdSettings = async () => {
      try {
        const response = await axios.get("/api/settings/homepage-ads");
        if (cancelled || !response.data) return;
        if (response.data.settings) {
          const settings = response.data.settings;
          if (!settings.adSpaces || settings.adSpaces.length === 0) {
            settings.adSpaces = [
              { spaceNumber: 1, type: "image", imageUrl: "", code: "", link: "", alt: "Advertisement", enabled: false },
              { spaceNumber: 2, type: "image", imageUrl: "", code: "", link: "", alt: "Advertisement", enabled: false },
              { spaceNumber: 3, type: "image", imageUrl: "", code: "", link: "", alt: "Advertisement", enabled: false },
              { spaceNumber: 4, type: "image", imageUrl: "", code: "", link: "", alt: "Advertisement", enabled: false },
              { spaceNumber: 5, type: "image", imageUrl: "", code: "", link: "", alt: "Advertisement", enabled: false },
            ];
          }
          if (!settings.maxAds) settings.maxAds = 5;
          setAdSettings(settings);
        }
      } catch (e) {
        console.error("Failed to load ad settings:", e);
      }
    };

    loadSectionOrder();
    loadAdSettings();
    return () => {
      cancelled = true;
    };
  }, []);

  const getEnabledAdSpaces = () => {
    return adSettings.adSpaces
      .filter((space) => {
        if (!space.enabled) return false;
        const hasContent =
          (space.type === "image" && space.imageUrl?.trim()) ||
          (space.type === "code" && space.code?.trim());
        return hasContent;
      })
      .sort((a, b) => a.spaceNumber - b.spaceNumber);
  };

  const getAdForSection = (sectionIndex) => {
    const maxAds = adSettings.maxAds || 5;
    const adSpaceNumber = sectionIndex + 1;
    if (adSpaceNumber > maxAds) return null;

    const adSpace = adSettings.adSpaces?.find(
      (s) => s.spaceNumber === adSpaceNumber
    );
    if (!adSpace || !adSpace.enabled) return null;

    const hasContent =
      (adSpace.type === "image" && adSpace.imageUrl?.trim()) ||
      (adSpace.type === "code" && adSpace.code?.trim());
    if (!hasContent) return null;

    return adSpace;
  };

  const sections = sectionOrder
    .filter((s) => s.enabled)
    .map((section, index) => {
      const Component = sectionComponents[section.component];
      if (!Component) return null;

      const adForSection = getAdForSection(index);

      return (
        <div key={section.id}>
          {section.component === "HeroFeatured" ? (
            <HeroFeatured initialHeroData={initialHeroData} initialHeroSettings={initialHeroSettings} />
          ) : (
            <Component />
          )}
          {adForSection && (
            <AdSection
              key={`${section.id}-${adForSection.spaceNumber}`}
              space={adForSection}
            />
          )}
        </div>
      );
    });

  const recentAdIndex = sectionOrder.filter((s) => s.enabled).length;
  const adForRecent = getAdForSection(recentAdIndex);

  return (
    <>
      <Navbar />
      {sections}
      <Recent />
      {adForRecent && (
        <AdSection
          key={`recent-${adForRecent.spaceNumber}`}
          space={adForRecent}
        />
      )}
      <Footer />
    </>
  );
}
