"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function Footer() {
  const [footerContent, setFooterContent] = useState(null);

  useEffect(() => {
    const loadFooterContent = async () => {
      try {
        const response = await axios.get("/api/settings/footer");
        if (response.data && response.data.footer) {
          setFooterContent(response.data.footer);
        }
      } catch (error) {
        console.error("Footer load error:", error);
      }
    };
    loadFooterContent();
  }, []);

  /* -------- STATIC FALLBACKS -------- */

  const staticBrands = [
    "The CapTable",
    "AI Story",
    "HerStory",
    "Social Story",
    "Enterprise Story",
    "MSO Life",
    "MSO Hindi",
    "MSO Tamil",
  ];

  const staticTopics = [
    "Practo",
    "Microsoft",
    "Ola",
    "Swiggy",
    "Zomato",
    "Uber",
    "Amazon",
    "Cred",
    "Nykaa",
    "View All Topics",
  ];

  const staticResourceHub = [
    { title: "Glossary", url: "/" },
    { title: "Everything AI", url: "/" },
    { title: "How-To's", url: "/" },
    { title: "Knowledge Base", url: "/" },
    { title: "Opinion", url: "/" },
    { title: "Unicorns Of India", url: "/" },
    { title: "Fundraising Thermometer", url: "/" },
  ];

  const staticDiscover = [
    { title: "Partner With Us", url: "/" },
    { title: "Pitch To Us", url: "/" },
    { title: "Browse Startups", url: "/" },
    { title: "Bharat Project", url: "/" },
  ];

  const staticBottomLinks = [
    { title: "About Us", url: "/" },
    { title: "Careers", url: "/" },
    { title: "Privacy Policy", url: "/" },
    { title: "Terms & Condition", url: "/" },
  ];

  /* -------- DYNAMIC OR FALLBACK -------- */

  const resources =
    footerContent?.resources?.length > 0
      ? footerContent.resources
      : staticResourceHub;

  const company =
    footerContent?.company?.length > 0 ? footerContent.company : staticDiscover;

  const bottomLinks =
    footerContent?.bottomLinks?.length > 0
      ? footerContent.bottomLinks
      : staticBottomLinks;

  const copyright =
    footerContent?.copyright ??
    "\u00a9 {year} Maharashtra Startup Organisation. All rights reserved.";

  const copyrightText = copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  const ColumnHeader = ({ label }) => (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-gray-100">
        {label}
      </span>
      <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
    </div>
  );

  return (
    <footer className="w-screen relative left-1/2 -translate-x-1/2 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-[72rem] mx-auto px-6 lg:px-8">
        {/* Top bar: logo + newsletter */}
        <div className="py-8 border-b border-gray-200 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-[3px] bg-orange-600" />
              <h2 className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                MSO
              </h2>
            </div>

            <form
              className="flex gap-2 w-full sm:w-auto sm:max-w-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email for daily briefing"
                className="flex-1 min-w-0 h-9 px-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="h-9 px-4 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold tracking-wide uppercase transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
          <div>
            <ColumnHeader label="Brands" />
            <ul className="space-y-2.5">
              {staticBrands.map((item, i) => (
                <li key={i}>
                  <span className="text-[13px] text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeader label="Topics" />
            <ul className="space-y-2.5">
              {staticTopics.map((item, i) => (
                <li key={i}>
                  <span className="text-[13px] text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeader label="Resources" />
            <ul className="space-y-2.5">
              {resources.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url || "/"}
                    className="text-[13px] text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeader label="Discover" />
            <ul className="space-y-2.5">
              {company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url || "/"}
                    className="text-[13px] text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About blurb */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <ColumnHeader label="About" />
            <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">
              Empowering Maharashtra&rsquo;s startup ecosystem with news,
              insights, and stories that matter.
            </p>
            <p className="text-[12px] text-gray-400 dark:text-gray-500 mt-4 leading-relaxed">
              Start your day with impactful startup stories delivered in a
              five-minute read.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] text-gray-400 dark:text-gray-600">
            {copyrightText}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {bottomLinks.map((link, i) => (
              <Link
                key={i}
                href={link.url || "/"}
                className="text-[12px] text-gray-500 dark:text-gray-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
