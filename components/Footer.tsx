"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations } from "@/lib/translations";

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'tr';
  const t = translations[locale].footer;
  const prefix = locale === 'en' ? '/en' : '';

  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Checkly</h3>
            <p className="text-slate-400 text-sm">
              {t.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.explore}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href={prefix || "/"} className="hover:text-white transition">{translations[locale].nav.home}</Link></li>
              <li><Link href={`${prefix}/about`} className="hover:text-white transition">{translations[locale].nav.about}</Link></li>
              <li><Link href={`${prefix}/features`} className="hover:text-white transition">{translations[locale].nav.features}</Link></li>
              <li><Link href={`${prefix}/faq`} className="hover:text-white transition">{translations[locale].nav.faq}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.legal}</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href={`${prefix}/privacy`} className="hover:text-white transition">{t.privacy}</Link></li>
              <li><Link href={`${prefix}/terms`} className="hover:text-white transition">{t.terms}</Link></li>
              {locale === 'tr' && <li><Link href="/kvkk" className="hover:text-white transition">{t.kvkk}</Link></li>}
              <li><Link href={`${prefix}/cookies`} className="hover:text-white transition">{locale === 'tr' ? 'Çerez Politikası' : 'Cookie Policy'}</Link></li>
              <li><Link href={`${prefix}/contact`} className="hover:text-white transition">{locale === 'tr' ? 'İletişim' : 'Contact'}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.contact}</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="mailto:info@trairx.com" className="hover:text-white transition">
                  info@trairx.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
