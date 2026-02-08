"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import axios from "axios";

export default function Footer() {
  const [footerContent, setFooterContent] = useState(null);

  useEffect(() => {
    // Load footer content from API (database)
    const loadFooterContent = async () => {
      try {
        const response = await axios.get("/api/settings/footer");
        if (response.data && response.data.footer) {
          console.log("✅ Footer content loaded from API:", response.data.footer);
          setFooterContent(response.data.footer);
          return;
        }
      } catch (error) {
        console.error("❌ Error loading footer content:", error);
      }

      // Set empty state if API fails or no data
      // Don't set to null, keep default values
    };

    loadFooterContent();
  }, []);

  // Use footerContent if available, otherwise use defaults
  const description = footerContent?.description ?? "Maharashtra Startup Organisation - Empowering entrepreneurs and startups across Maharashtra with resources, funding opportunities, mentorship, and a thriving ecosystem for innovation and growth.";
  const email = footerContent?.email ?? "contact@maharashtrastartup.org";
  const phone = footerContent?.phone ?? "+91 123 456 7890";
  const address = footerContent?.address ?? "Mumbai, Maharashtra, India";
  const socialLinks = footerContent?.socialLinks ?? {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  };
  const resources = footerContent?.resources ?? [];
  const company = footerContent?.company ?? [];
  const legal = footerContent?.legal ?? [];
  const bottomLinks = footerContent?.bottomLinks ?? [];
  const copyright = footerContent?.copyright ?? "© {year} Maharashtra Startup Organisation. All rights reserved.";
  const tagline = footerContent?.tagline ?? "Empowering Maharashtra's startup ecosystem since 2024";
  
  const copyrightText = copyright.replace("{year}", new Date().getFullYear().toString());

  // UI pattern: minimal footer with icon blocks (contact) + compact link columns
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand + contact icon blocks */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Maharashtra Startup Organisation
              </h3>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-sm leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#FF0000] hover:border-[#FF0000]/30 transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#E4405F] hover:border-[#E4405F]/30 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
            <div className="space-y-3">
              <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="w-9 h-9 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-gray-500 dark:text-gray-400" />
                </span>
                {email}
              </a>
              <a href={`tel:${phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="w-9 h-9 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-gray-500 dark:text-gray-400" />
                </span>
                {phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <span className="w-9 h-9 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-gray-500 dark:text-gray-400" />
                </span>
                {address}
              </div>
            </div>
          </div>

          {/* Link columns — minimal list style */}
          {resources.length > 0 && (
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                {resources.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url || "/"} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {company.length > 0 && (
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url || "/"} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {legal.length > 0 && (
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-4">Legal & Support</h4>
              <ul className="space-y-2 text-sm">
                {legal.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url || "/"} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
            <p>{copyrightText}</p>
            {tagline && <p className="hidden sm:block text-xs">{tagline}</p>}
            {bottomLinks.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-4">
                {bottomLinks.map((link, index) => (
                  <Link key={index} href={link.url || "/"} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    {link.title}
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
