"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
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

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold text-white hover:text-red-400 transition-colors">
                Maharashtra Startup Organisation
              </h3>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-md">
              {description}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-500 flex items-center justify-center transition-colors group">
                <Facebook size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-500 flex items-center justify-center transition-colors group">
                <Twitter size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-500 flex items-center justify-center transition-colors group">
                <Youtube size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-500 flex items-center justify-center transition-colors group">
                <Instagram size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-500 flex items-center justify-center transition-colors group">
                <Linkedin size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <Mail size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-white transition-colors">
                  {email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-gray-400 hover:text-white transition-colors">
                  {phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{address}</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          {resources.length > 0 && (
            <div>
              <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-3 text-sm">
                {resources.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url || "/"} className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 group">
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Company */}
          {company.length > 0 && (
            <div>
              <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                {company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url || "/"} className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 group">
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Legal & Support */}
          {legal.length > 0 && (
            <div>
              <h4 className="text-white font-bold text-base mb-6 uppercase tracking-wider">
                Legal & Support
              </h4>
              <ul className="space-y-3 text-sm">
                {legal.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url || "/"} className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 group">
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              <p>{copyrightText}</p>
              {tagline && <p className="mt-1 text-xs text-gray-500">{tagline}</p>}
            </div>
            {bottomLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-6 text-sm">
                {bottomLinks.map((link, index) => (
                  <Link key={index} href={link.url || "/"} className="text-gray-400 hover:text-red-400 transition-colors">
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
