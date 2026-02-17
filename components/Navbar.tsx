"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { translations } from "@/lib/translations";
import { APP_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const locale = pathname.startsWith('/en') ? 'en' : 'tr';
  const t = translations[locale].nav;
  const prefix = locale === 'en' ? '/en' : '';

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={prefix || "/"} className="text-2xl font-bold gradient-text">
            Checkly
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={prefix || "/"} className="hover:text-blue-400 transition">{t.home}</Link>
            <Link href={`${prefix}/about`} className="hover:text-blue-400 transition">{t.about}</Link>
            <Link href={`${prefix}/features`} className="hover:text-blue-400 transition">{t.features}</Link>
            <Link href={`${prefix}/faq`} className="hover:text-blue-400 transition">{t.faq}</Link>
            <LanguageSwitcher />
            <a 
              href={APP_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition"
            >
              {t.download}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href={prefix || "/"} className="block hover:text-blue-400 transition">{t.home}</Link>
            <Link href={`${prefix}/about`} className="block hover:text-blue-400 transition">{t.about}</Link>
            <Link href={`${prefix}/features`} className="block hover:text-blue-400 transition">{t.features}</Link>
            <Link href={`${prefix}/faq`} className="block hover:text-blue-400 transition">{t.faq}</Link>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
            <a 
              href={APP_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-center"
            >
              {t.download}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
