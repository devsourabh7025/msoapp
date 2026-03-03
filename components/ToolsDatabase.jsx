"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import axios from "axios";
import { Database, ChevronRight, Calculator, Building2, FileText, Users } from "lucide-react";

const defaultSubsections = [
  { id: "browse-startups", name: "Browse Startups", description: "A searchable directory of registered Maharashtra startups.", enabled: true, url: "" },
  { id: "funding-calculator", name: "Funding Calculator", description: "Tools for valuation estimates and runway tracking.", enabled: true, url: "" },
  { id: "global-corporate-db", name: "Global Corporate Database", description: "Searchable data for networking and intelligence.", enabled: true, url: "" },
  { id: "pitch-deck-gallery", name: "Pitch Deck Gallery", description: "A collection of successful decks for founder learning.", enabled: true, url: "" },
  { id: "talent-portal", name: "Talent Portal", description: "A niche job board for startup-specific roles in the region.", enabled: true, url: "" },
];

const TOOL_ICONS = {
  "browse-startups": Database,
  "funding-calculator": Calculator,
  "global-corporate-db": Building2,
  "pitch-deck-gallery": FileText,
  "talent-portal": Users,
};

export default function ToolsDatabase({ initialContent, initialSettings }) {
  const [content, setContent] = useState(initialContent ?? null);
  const [settings, setSettings] = useState(initialSettings ?? null);
  const [loading, setLoading] = useState(!initialContent && !initialSettings);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const response = await axios.get("/api/settings/tools-database");
        if (!isMounted) return;
        if (response.data?.content) setContent(response.data.content);
        else setContent({ subsections: defaultSubsections });
        if (response.data?.settings) setSettings(response.data.settings);
        else setSettings({ title: "Tools & Database", subtitle: "Becoming an Essential Hub for founders." });
      } catch (error) {
        if (isMounted) {
          setContent({ subsections: defaultSubsections });
          setSettings({ title: "Tools & Database", subtitle: "Becoming an Essential Hub for founders." });
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => { isMounted = false; };
  }, []);

  const subsections = useMemo(() => {
    const raw = content?.subsections;
    if (!Array.isArray(raw) || raw.length === 0) return defaultSubsections;
    return raw.filter((s) => s.enabled !== false);
  }, [content]);

  const sectionTitle = settings?.title || "Tools & Database";
  const sectionSubtitle = settings?.subtitle || "Becoming an Essential Hub for founders.";

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-gray-950 border-b border-gray-200 dark:border-white/10">
        <div className="home-container py-10">
          <div className="animate-pulse">
            <div className="h-5 bg-gray-200 dark:bg-gray-800 w-40 mb-2" />
            <div className="h-3 bg-gray-200 dark:bg-gray-800 w-72 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-28 bg-gray-200 dark:bg-gray-800 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="tools-database" className="bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-gray-950 border-b border-gray-100 dark:border-white/5">
      <div className="home-container pt-8 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
            <Database className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="home-section-heading text-gray-900 dark:text-white text-xl">{sectionTitle}</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{sectionSubtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subsections.map((sub) => {
            const IconComponent = TOOL_ICONS[sub.id] || Database;
            const customUrl = sub.url?.trim();
            const hasCustomLink = customUrl && customUrl !== "#";
            const href = hasCustomLink ? customUrl : `/tools/${sub.id}`;
            const isExternal = hasCustomLink && customUrl.startsWith("http");

            const cardClass = "group block rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50 p-5 transition-all duration-300 hover:shadow-lg hover:border-emerald-300/50 dark:hover:border-emerald-600/30 cursor-pointer";

            const cardContent = (
              <>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {sub.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{sub.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-2 group-hover:gap-2 transition-all">
                      {isExternal ? "Open" : "Explore"}
                      <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </>
            );

            if (isExternal) {
              return (
                <a key={sub.id} href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {cardContent}
                </a>
              );
            }
            return (
              <Link key={sub.id} href={href} className={cardClass}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
