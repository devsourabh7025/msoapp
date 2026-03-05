import { getMSONarrativeContent } from "@/lib/getMSONarrativeContent";
import { getNewsIntelContent } from "@/lib/getNewsIntelContent";
import { getRegionalSpecialsContent } from "@/lib/getRegionalSpecialsContent";
import { getMSOStudioContent } from "@/lib/getMSOStudioContent";
import { getMSOAwardsContent } from "@/lib/getMSOAwardsContent";
import { getToolsDatabaseContent } from "@/lib/getToolsDatabaseContent";
import { getEventsCommunityContent } from "@/lib/getEventsCommunityContent";
import { getKnowledgeLabContent } from "@/lib/getKnowledgeLabContent";
import HomeClient from "./HomeClient";

async function safeFetch(fn, fallback) {
  try {
    return await fn();
  } catch (err) {
    console.error("Homepage section fetch failed:", err.message);
    return fallback;
  }
}

export default async function Home() {
  const emptySection = { content: { subsections: [] }, settings: {} };

  const [msoNarrative, newsIntel, regionalSpecials, msoStudio, msoAwards, toolsDatabase, eventsCommunity, knowledgeLab] = await Promise.allSettled([
    safeFetch(getMSONarrativeContent, emptySection),
    safeFetch(getNewsIntelContent, emptySection),
    safeFetch(getRegionalSpecialsContent, emptySection),
    safeFetch(getMSOStudioContent, emptySection),
    safeFetch(getMSOAwardsContent, emptySection),
    safeFetch(getToolsDatabaseContent, emptySection),
    safeFetch(getEventsCommunityContent, emptySection),
    safeFetch(getKnowledgeLabContent, emptySection),
  ]);

  const get = (r) => r.status === "fulfilled" ? r.value : emptySection;

  return (
    <HomeClient
      initialMSONarrativeContent={get(msoNarrative).content}
      initialMSONarrativeSettings={get(msoNarrative).settings}
      initialNewsIntelContent={get(newsIntel).content}
      initialNewsIntelSettings={get(newsIntel).settings}
      initialRegionalSpecialsContent={get(regionalSpecials).content}
      initialRegionalSpecialsSettings={get(regionalSpecials).settings}
      initialMSOStudioContent={get(msoStudio).content}
      initialMSOStudioSettings={get(msoStudio).settings}
      initialMSOAwardsContent={get(msoAwards).content}
      initialMSOAwardsSettings={get(msoAwards).settings}
      initialToolsDatabaseContent={get(toolsDatabase).content}
      initialToolsDatabaseSettings={get(toolsDatabase).settings}
      initialEventsCommunityContent={get(eventsCommunity).content}
      initialEventsCommunitySettings={get(eventsCommunity).settings}
      initialKnowledgeLabContent={get(knowledgeLab).content}
      initialKnowledgeLabSettings={get(knowledgeLab).settings}
    />
  );
}
