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
  { id: "trending", name: "Trending Now", component: "TrendingNow", enabled: true },
  { id: "discover", name: "Discover More", component: "DiscoverMore", enabled: true },
  ];

  export default function Home() {
    const [sectionOrder, setSectionOrder] = useState(defaultOrder);
  
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
  
      loadSectionOrder();
      return () => {
        cancelled = true;
      };
    }, []);
  
    const sections = sectionOrder
      .filter((s) => s.enabled)
      .map((section) => {
        const Component = sectionComponents[section.component];
        if (!Component) return null;

        // All components fetch their own data directly
        return (
          <div key={section.id}>
            <Component />
            <AdSection />
          </div>
        );
      });
  
    return (
      <>
        <Navbar />
        {sections}
        <Recent />
        <AdSection />
        <Footer />
      </>
    );
  }
  
