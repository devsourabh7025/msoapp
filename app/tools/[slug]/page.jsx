"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Database, ChevronLeft } from "lucide-react";

export default function ToolPage() {
  const params = useParams();
  const slug = params?.slug || "";
  const [content, setContent] = useState(null);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const res = await fetch("/api/settings/tools-database");
        if (!res.ok || !isMounted) return;
        const data = await res.json();
        if (data?.content?.subsections && Array.isArray(data.content.subsections)) {
          setContent(data.content);
        }
        if (data?.settings) setSettings(data.settings);
      } catch (e) {
        console.error("Tools load failed:", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => { isMounted = false; };
  }, []);

  const subsection = content?.subsections?.find((s) => s.id === slug && s.enabled !== false);
  const sectionTitle = settings?.title || "Tools & Database";

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-[50vh] flex items-center justify-center">
          <div className="animate-pulse text-gray-500 text-sm">Loading…</div>
        </main>
        <Footer />
      </>
    );
  }

  if (!subsection) {
    return (
      <>
        <Navbar />
        <main className="min-h-[50vh] max-w-[72rem] mx-auto px-4 sm:px-6 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400 hover:underline mb-6">
            <ChevronLeft size={16} /> Back to home
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tool not found</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">This tool may have been removed or the link is incorrect.</p>
          <Link href="/#tools-database" className="inline-block mt-6 text-red-600 dark:text-red-400 font-semibold hover:underline">
            View all Tools & Database
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const hasUrl = subsection.url?.trim() && subsection.url !== "#";

  return (
    <>
      <Navbar />
      <main className="min-h-[50vh] max-w-[72rem] mx-auto px-4 sm:px-6 py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400 hover:underline mb-8">
          <ChevronLeft size={16} /> Back to home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
            <Database className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">{sectionTitle}</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{subsection.name}</h1>
          </div>
        </div>

        {subsection.description && (
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-8">{subsection.description}</p>
        )}

        {hasUrl ? (
          <div className="mt-6">
            <a
              href={subsection.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Open tool <span className="text-white/80">→</span>
            </a>
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-gray-900/50 p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">Content for this tool can be configured in the Tools & Database section on the homepage.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
