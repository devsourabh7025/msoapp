"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [footerContent, setFooterContent] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get("/api/settings/footer");
        if (res.data?.footer) setFooterContent(res.data.footer);
      } catch {}
    };
    load();
  }, []);

  if (!footerContent) {
    return (
      <footer className="w-screen relative left-1/2 -translate-x-1/2 bg-gray-950">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-500 text-sm">Loading footer…</p>
        </div>
      </footer>
    );
  }

  const brands = Array.isArray(footerContent.brands) ? footerContent.brands : [];
  const topics = Array.isArray(footerContent.topics) ? footerContent.topics : [];
  const resources = Array.isArray(footerContent.resources) ? footerContent.resources : [];
  const company = Array.isArray(footerContent.company) ? footerContent.company : [];
  const bottomLinks = Array.isArray(footerContent.bottomLinks) ? footerContent.bottomLinks : [];
  const copyrightText = (footerContent.copyright || "© {year}").replace("{year}", new Date().getFullYear().toString());
  const newsletter = footerContent.newsletter || {};
  const brandName = footerContent.brandName ?? "MSO";
  const tagline = footerContent.tagline ?? "";
  const address = footerContent.address ?? "";
  const emailContact = footerContent.email ?? "";

  return (
    <footer className="w-screen relative left-1/2 -translate-x-1/2">
      {/* Newsletter CTA */}
      <div className="bg-red-600">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-lg">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/70 mb-2 block">
                {newsletter.title || "Stay Informed"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {newsletter.headline || "Get the daily briefing that matters"}
              </h3>
              <p className="text-sm text-white/80 mt-2 leading-relaxed">
                {newsletter.subtitle || "Startup breakthroughs, corporate strategy, and market moves — delivered in a five-minute read."}
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[400px]"
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
            >
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.placeholder || "Enter your email address"}
                  className="w-full h-12 pl-10 pr-4 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="h-12 px-6 bg-white text-red-600 font-black text-xs tracking-wider uppercase hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                {newsletter.buttonText || "Subscribe"}
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-gray-950">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-6">
              {/* Brand column */}
              <div className="col-span-2 sm:col-span-3 lg:col-span-3 lg:pr-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-extrabold tracking-tight text-red-600">{brandName}</span>
                </div>
                {tagline && (
                  <p className="text-[13px] text-gray-400 leading-relaxed mb-6">{tagline}</p>
                )}
                <div className="space-y-2.5">
                  {address && (
                    <div className="flex items-center gap-2.5 text-gray-500">
                      <MapPin size={13} className="shrink-0 text-red-600" />
                      <span className="text-[12px]">{address}</span>
                    </div>
                  )}
                  {emailContact && (
                    <div className="flex items-center gap-2.5 text-gray-500">
                      <Mail size={13} className="shrink-0 text-red-600" />
                      <a href={`mailto:${emailContact}`} className="text-[12px] hover:text-white transition-colors">{emailContact}</a>
                    </div>
                  )}
                </div>
              </div>

              {/* Brands column */}
              {brands.length > 0 && (
                <div className="lg:col-span-2">
                  <h4 className="text-[10px] font-black tracking-[0.15em] uppercase text-red-600 mb-4">Brands</h4>
                  <ul className="space-y-2">
                    {brands.map((item, i) => {
                      const label = item.label ?? item.title ?? "";
                      const url = item.url || "";
                      if (url) {
                        return (
                          <li key={i}>
                            <Link href={url} className="text-[13px] text-gray-400 hover:text-white transition-colors">{label}</Link>
                          </li>
                        );
                      }
                      return (
                        <li key={i}>
                          <span className="text-[13px] text-gray-400">{label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Topics column */}
              {topics.length > 0 && (
                <div className="lg:col-span-2">
                  <h4 className="text-[10px] font-black tracking-[0.15em] uppercase text-red-600 mb-4">Topics</h4>
                  <ul className="space-y-2">
                    {topics.map((item, i) => {
                      const label = item.label ?? item.title ?? "";
                      const url = item.url || "";
                      if (url) {
                        return (
                          <li key={i}>
                            <Link href={url} className="text-[13px] text-gray-400 hover:text-white transition-colors">{label}</Link>
                          </li>
                        );
                      }
                      return (
                        <li key={i}>
                          <span className="text-[13px] text-gray-400">{label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Resources column */}
              {resources.length > 0 && (
                <div className="lg:col-span-2">
                  <h4 className="text-[10px] font-black tracking-[0.15em] uppercase text-red-600 mb-4">Resources</h4>
                  <ul className="space-y-2">
                    {resources.map((link, i) => (
                      <li key={i}>
                        <Link href={link.url || "/"} className="text-[13px] text-gray-400 hover:text-white transition-colors">
                          {link.title || link.label || "Link"}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Discover column */}
              {company.length > 0 && (
                <div className="lg:col-span-3">
                  <h4 className="text-[10px] font-black tracking-[0.15em] uppercase text-red-600 mb-4">Discover</h4>
                  <ul className="space-y-2">
                    {company.map((link, i) => (
                      <li key={i}>
                        <Link href={link.url || "/"} className="text-[13px] text-gray-400 hover:text-white transition-colors">
                          {link.title || link.label || "Link"}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="h-px bg-white/10" />

          {/* Bottom bar */}
          <div className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-[11px] text-gray-600">{copyrightText}</p>
            {bottomLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {bottomLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.url || "/"}
                    className="text-[11px] text-gray-500 hover:text-red-500 transition-colors"
                  >
                    {link.title || link.label || "Link"}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
