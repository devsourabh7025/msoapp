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

// Component mapping
const sectionComponents = {
  HeroFeatured: HeroFeatured,
  SpotLight: SpotLight,
  Featured: Featured,
  Explore: Explore,
  TrendingNow: TrendingNow,
  Recent: Recent,
  DiscoverMore: DiscoverMore,
};

// Default order (Recent is not included as it's always shown and not customizable)
const defaultOrder = [
  { id: "hero", name: "Hero", component: "HeroFeatured", enabled: true },
  { id: "spotlight", name: "Spotlight", component: "SpotLight", enabled: true },
  { id: "featured", name: "Featured", component: "Featured", enabled: true },
  { id: "explore", name: "Explore", component: "Explore", enabled: true },
  {
    id: "trending",
    name: "Trending Now",
    component: "TrendingNow",
    enabled: true,
  },
  {
    id: "discover",
    name: "Discover More",
    component: "DiscoverMore",
    enabled: true,
  },
];

export default function Home() {
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
            (s) => s.id !== "header" && s.id !== "footer" && s.id !== "recent",
          );

          const hasDiscover = filtered.some((s) => s.id === "discover");
          if (!hasDiscover) {
            filtered.push({
              id: "discover",
              name: "Discover More",
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
          // Ensure adSpaces array exists and has exactly 5 spaces
          if (!settings.adSpaces || settings.adSpaces.length === 0) {
            settings.adSpaces = [
              {
                spaceNumber: 1,
                type: "image",
                imageUrl: "",
                code: "",
                link: "",
                alt: "Advertisement",
                enabled: false,
              },
              {
                spaceNumber: 2,
                type: "image",
                imageUrl: "",
                code: "",
                link: "",
                alt: "Advertisement",
                enabled: false,
              },
              {
                spaceNumber: 3,
                type: "image",
                imageUrl: "",
                code: "",
                link: "",
                alt: "Advertisement",
                enabled: false,
              },
              {
                spaceNumber: 4,
                type: "image",
                imageUrl: "",
                code: "",
                link: "",
                alt: "Advertisement",
                enabled: false,
              },
              {
                spaceNumber: 5,
                type: "image",
                imageUrl: "",
                code: "",
                link: "",
                alt: "Advertisement",
                enabled: false,
              },
            ];
          }
          // Ensure maxAds is set
          if (!settings.maxAds) {
            settings.maxAds = 5;
          }
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

  // Get enabled ad spaces that have content, sorted by space number
  const getEnabledAdSpaces = () => {
    return adSettings.adSpaces
      .filter((space) => {
        // Only include spaces that are enabled AND have content
        if (!space.enabled) return false;
        const hasContent =
          (space.type === "image" &&
            space.imageUrl &&
            space.imageUrl.trim() !== "") ||
          (space.type === "code" && space.code && space.code.trim() !== "");
        return hasContent;
      })
      .sort((a, b) => a.spaceNumber - b.spaceNumber); // Sort by space number
  };

  const enabledAdSpaces = getEnabledAdSpaces();

  // Create a map of spaceNumber to ad space for quick lookup
  // This includes ALL ad spaces (enabled or not) for direct lookup
  const adSpaceMap = {};
  adSettings.adSpaces.forEach((space) => {
    // Only add to map if enabled AND has content
    if (space.enabled) {
      const hasContent =
        (space.type === "image" &&
          space.imageUrl &&
          space.imageUrl.trim() !== "") ||
        (space.type === "code" && space.code && space.code.trim() !== "");
      if (hasContent) {
        adSpaceMap[space.spaceNumber] = space;
      }
    }
  });

  // Get ad for a specific section index (one ad per section position)
  // Try to match section position to ad space number (1-indexed)
  const getAdForSection = (sectionIndex) => {
    // Limit to maxAds setting
    const maxAds = adSettings.maxAds || 5;
    // sectionIndex is 0-based, ad space numbers are 1-based
    const adSpaceNumber = sectionIndex + 1;
    
    // Check if this ad space number exceeds maxAds limit
    if (adSpaceNumber > maxAds) {
      return null;
    }
    
    // Direct lookup from adSettings.adSpaces array
    const adSpace = adSettings.adSpaces?.find(
      (s) => s.spaceNumber === adSpaceNumber
    );
    
    // Return null if ad space doesn't exist
    if (!adSpace) {
      return null;
    }
    
    // Check if ad space is enabled
    if (!adSpace.enabled) {
      return null;
    }
    
    // Check if ad space has content
    const hasContent =
      (adSpace.type === "image" &&
        adSpace.imageUrl &&
        adSpace.imageUrl.trim() !== "") ||
      (adSpace.type === "code" && adSpace.code && adSpace.code.trim() !== "");
    
    if (!hasContent) {
      return null;
    }
    
    return adSpace;
  };

  const sections = sectionOrder
    .filter((s) => s.enabled)
    .map((section, index) => {
      const Component = sectionComponents[section.component];
      if (!Component) return null;

      // Get the ad for this section position (only one ad per section)
      const adForSection = getAdForSection(index);

      // All components fetch their own data directly
      return (
        <div key={section.id}>
          <Component />
          {/* Show only the enabled ad for this section position */}
          {adForSection && (
            <AdSection
              key={`${section.id}-${adForSection.spaceNumber}`}
              space={adForSection}
            />
          )}
        </div>
      );
    });

  // Get ad for Recent section (after all other sections)
  const recentAdIndex = sectionOrder.filter((s) => s.enabled).length;
  const adForRecent = getAdForSection(recentAdIndex);

  return (
    <>
      <Navbar />
      {sections}
      <Recent />
      {/* Show only the enabled ad for Recent section position */}
      {adForRecent && (
        <AdSection key={`recent-${adForRecent.spaceNumber}`} space={adForRecent} />
      )}
      <Footer />
    </>
  );
}
