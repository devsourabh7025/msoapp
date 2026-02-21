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
    "© {year} Maharashtra Startup Organisation. All rights reserved.";

  const copyrightText = copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return (
    <footer className="bg-white text-black ">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT SIDE COLUMNS */}
          <div className="flex flex-1 justify-between">
            {/* Brands */}
            <div className="min-w-[120px]">
              <h4 className="font-semibold mb-3 text-sm">Brands</h4>
              <ul className="space-y-2 text-xs">
                {staticBrands.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Topics */}
            <div className="min-w-[120px]">
              <h4 className="font-semibold mb-3 text-sm">Topics</h4>
              <ul className="space-y-2 text-xs">
                {staticTopics.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Resource Hub */}
            <div className="min-w-[150px]">
              <h4 className="font-semibold mb-3 text-sm">Resource Hub</h4>
              <ul className="space-y-2 text-xs">
                {resources.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url || "/"}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discover */}
            <div className="min-w-[150px]">
              <h4 className="font-semibold mb-3 text-sm">Discover</h4>
              <ul className="space-y-2 text-xs">
                {company.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url || "/"}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="hidden lg:block border-l border-black"></div>

          {/* NEWSLETTER */}
          <div className="lg:w-[320px]">
            <h4 className="font-semibold mb-3 text-sm">MSO Buzz</h4>
            <p className="text-xs mb-4 leading-relaxed">
              Start your day with impactful startup stories and concise news
              delivered in a five-minute read.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 px-3 py-2 border border-black text-xs outline-none"
              />
              <button className="px-4 py-2 bg-black text-white text-xs">
                Subscribe
              </button>
            </div>

            <p className="text-[10px] mt-3">
              I hereby consent to the processing of personal data provided and
              agree to the privacy policy.
            </p>

            <p className="text-xs mt-5 underline cursor-pointer">
              Advertise with Newsletter →
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-8">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <h2 className="text-6xl font-extrabold tracking-tight">MSO</h2>

            {/* Right: Links */}
            <div className="flex gap-6 text-xs items-center">
              {bottomLinks.map((link, i) => (
                <Link key={i} href={link.url || "/"}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
