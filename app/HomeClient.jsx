"use client";

import Navbar from "@/components/Navbar";
import MSONarrative from "@/components/MSONarrative";
import RegionalSpecials from "@/components/RegionalSpecials";
import MSOStudio from "@/components/MSOStudio";
import MSOAwards from "@/components/MSOAwards";
import ToolsDatabase from "@/components/ToolsDatabase";
import EventsCommunity from "@/components/EventsCommunity";
import KnowledgeLab from "@/components/KnowledgeLab";
import NewsIntel from "@/components/NewsIntel";
import Recent from "@/components/Recent";
import Footer from "@/components/Footer";
import HomepageAdsBlock from "@/components/HomepageAdsBlock";

export default function HomeClient({ initialMSONarrativeContent, initialMSONarrativeSettings, initialRegionalSpecialsContent, initialRegionalSpecialsSettings, initialMSOStudioContent, initialMSOStudioSettings, initialMSOAwardsContent, initialMSOAwardsSettings, initialToolsDatabaseContent, initialToolsDatabaseSettings, initialEventsCommunityContent, initialEventsCommunitySettings, initialKnowledgeLabContent, initialKnowledgeLabSettings, initialNewsIntelContent, initialNewsIntelSettings }) {
  return (
    <>
      <Navbar />
      <NewsIntel
        initialContent={initialNewsIntelContent}
        initialSettings={initialNewsIntelSettings}
      />
      <HomepageAdsBlock sectionIndex={0} />
      <MSONarrative
        initialContent={initialMSONarrativeContent}
        initialSettings={initialMSONarrativeSettings}
      />
      <HomepageAdsBlock sectionIndex={1} />
      <RegionalSpecials
        initialContent={initialRegionalSpecialsContent}
        initialSettings={initialRegionalSpecialsSettings}
      />
      <HomepageAdsBlock sectionIndex={2} />
      <MSOStudio
        initialContent={initialMSOStudioContent}
        initialSettings={initialMSOStudioSettings}
      />
      <HomepageAdsBlock sectionIndex={3} />
      <MSOAwards
        initialContent={initialMSOAwardsContent}
        initialSettings={initialMSOAwardsSettings}
      />
      <HomepageAdsBlock />
      <ToolsDatabase
        initialContent={initialToolsDatabaseContent}
        initialSettings={initialToolsDatabaseSettings}
      />
      <EventsCommunity
        initialContent={initialEventsCommunityContent}
        initialSettings={initialEventsCommunitySettings}
      />
      <HomepageAdsBlock />
      <KnowledgeLab
        initialContent={initialKnowledgeLabContent}
        initialSettings={initialKnowledgeLabSettings}
      />
      <Recent />
      <Footer />
    </>
  );
}
