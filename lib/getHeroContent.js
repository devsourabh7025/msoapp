import { unstable_cache } from "next/cache";
import { ensureConnected } from "@/lib/moongoose";
import Settings from "@/models/Settings";

function optimizePostData(post) {
  if (!post || typeof post !== "object") return post;
  const id = post._id != null ? String(post._id) : post._id;
  const optimized = {
    _id: id,
    slug: post.slug,
    title: post.title,
    featuredImage: post.featuredImage,
    excerpt: post.excerpt,
    category: post.category,
    publishedAt: post.publishedAt,
  };

  if (post.author) {
    if (typeof post.author === "object" && post.author.name) {
      optimized.author = { name: post.author.name };
    } else if (typeof post.author === "string") {
      optimized.author = post.author;
    } else {
      optimized.author = { name: "Editorial Team" };
    }
  }

  return optimized;
}

async function getHeroContentUncached() {
  try {
    await ensureConnected();

    const [heroContentData, sectionSettingsData] = await Promise.all([
      Settings.findOne({ key: "homepageHeroContent" }).maxTimeMS(3000),
      Settings.findOne({ key: "homepageSectionSettings" }).maxTimeMS(3000),
    ]);

    let hero = {
      mainArticle: null,
      topPicks: [],
      discussionTable: [],
    };
    if (heroContentData?.value) {
      const value = heroContentData.value;
      hero = {
        mainArticle: value.mainArticle ? optimizePostData(value.mainArticle) : null,
        topPicks: Array.isArray(value.topPicks) ? value.topPicks.map(optimizePostData) : [],
        discussionTable: Array.isArray(value.discussionTable) ? value.discussionTable.map(optimizePostData) : [],
      };
    }

    const settings = sectionSettingsData?.value?.hero || {
      title: "The Big Edit",
      showNewsletter: true,
      newsletterTitle: "Newsletter",
      newsletterPlaceholder: "Enter your Email",
      showSection: true,
    };

    return { hero, settings };
  } catch (error) {
    console.error("Error fetching hero content:", error);
    return {
      hero: { mainArticle: null, topPicks: [], discussionTable: [] },
      settings: { title: "The Big Edit", showNewsletter: true, newsletterTitle: "Newsletter", newsletterPlaceholder: "Enter your Email", showSection: true },
    };
  }
}

/**
 * Fetch hero section content from database (server-side only).
 * Cached for 60 seconds for faster repeat loads.
 */
export const getHeroContent = unstable_cache(
  getHeroContentUncached,
  ["hero-content"],
  { revalidate: 60 }
);
