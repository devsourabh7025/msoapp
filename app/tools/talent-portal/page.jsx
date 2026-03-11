"use client";

import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Search, Users, MapPin, Briefcase, ChevronLeft, ExternalLink, Mail } from "lucide-react";

export default function TalentPortalPage() {
  const [list, setList] = useState([]);
  const [types, setTypes] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/public/jobs");
        if (res.ok) {
          const data = await res.json();
          setList(data.list || []);
          setTypes(data.types || []);
          setIndustries(data.industries || []);
        } else {
          setList([]);
        }
      } catch {
        setList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filtered = useMemo(() => {
    let result = [...list];

    if (typeFilter) {
      result = result.filter((j) => j.type?.toLowerCase() === typeFilter.toLowerCase());
    }

    if (industryFilter) {
      result = result.filter((j) => j.industry?.toLowerCase() === industryFilter.toLowerCase());
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (j) =>
          j.title?.toLowerCase().includes(q) ||
          j.company?.toLowerCase().includes(q) ||
          j.description?.toLowerCase().includes(q) ||
          j.industry?.toLowerCase().includes(q) ||
          j.location?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [list, searchQuery, typeFilter, industryFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setTypeFilter("");
    setIndustryFilter("");
  };

  const hasActiveFilters = searchQuery.trim() || typeFilter || industryFilter;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <Link href="/#tools-database" className="inline-flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400 hover:underline mb-6">
            <ChevronLeft size={16} /> Back to Tools & Database
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">Tools & Database</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Talent Portal</h1>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-6">
            A niche job board for startup-specific roles in the region. Find opportunities at Maharashtra startups.
          </p>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap mb-6">
            <div className="flex-1 min-w-[200px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search by title, company, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {types.length > 0 && (
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-3 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 appearance-none pr-8 min-w-[140px]"
                >
                  <option value="">All types</option>
                  {types.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              )}
              {industries.length > 0 && (
                <select
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                  className="px-3 py-2.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-sm rounded focus:outline-none focus:border-red-600 appearance-none pr-8 min-w-[140px]"
                >
                  <option value="">All industries</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              )}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
              {filtered.length} {filtered.length === 1 ? "job" : "jobs"}
            </span>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-gray-200 dark:border-white/10 p-6 rounded-xl animate-pulse">
                  <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-2/3 mb-3" />
                  <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-1/4 mb-4" />
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-full mb-2" />
                  <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-4/5" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 border border-gray-200 dark:border-white/10 rounded-xl">
              <Users className="mx-auto text-gray-300 dark:text-gray-700 mb-3" size={48} />
              <p className="text-gray-500 dark:text-gray-400 mb-1">
                {hasActiveFilters
                  ? "No jobs match your filters."
                  : "No job listings yet. Check back soon!"}
              </p>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-sm font-bold text-red-600 dark:text-red-400 hover:underline mt-2">
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((job) => (
                <article
                  key={job._id}
                  className="border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/50 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-colors p-6 rounded-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h2>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                        {job.company}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.location && (
                          <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <MapPin size={12} />
                            {job.location}
                          </span>
                        )}
                        {job.type && (
                          <span className="text-xs px-2 py-0.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded font-medium">
                            {job.type}
                          </span>
                        )}
                        {job.industry && (
                          <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Briefcase size={12} />
                            {job.industry}
                          </span>
                        )}
                      </div>
                      {job.salary && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Salary: {job.salary}</p>
                      )}
                      {job.experience && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">Experience: {job.experience}</p>
                      )}
                      {job.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 line-clamp-3">
                          {job.description}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0 flex flex-col gap-2">
                      {job.applyUrl && (
                        <a
                          href={job.applyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded transition-colors"
                        >
                          <ExternalLink size={14} />
                          Apply
                        </a>
                      )}
                      {!job.applyUrl && job.applyEmail && (
                        <a
                          href={`mailto:${job.applyEmail}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded transition-colors"
                        >
                          <Mail size={14} />
                          Email to Apply
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
