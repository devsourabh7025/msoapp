import { getHeroContent } from "@/lib/getHeroContent";
import HomeClient from "./HomeClient";

export default async function Home() {
  const { hero: initialHeroData, settings: initialHeroSettings } = await getHeroContent();
  return <HomeClient initialHeroData={initialHeroData} initialHeroSettings={initialHeroSettings} />;
}
