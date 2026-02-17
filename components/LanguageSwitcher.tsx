"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const getCurrentLocale = (): Locale => {
    const segments = pathname.split('/');
    return (segments[1] === 'en' ? 'en' : 'tr') as Locale;
  };

  const switchLanguage = (newLocale: Locale) => {
    const currentLocale = getCurrentLocale();
    
    if (currentLocale === newLocale) return;

    let newPath = pathname;
    
    if (currentLocale === 'tr' && pathname === '/') {
      newPath = '/en';
    } else if (currentLocale === 'tr') {
      newPath = `/en${pathname}`;
    } else if (currentLocale === 'en' && pathname === '/en') {
      newPath = '/';
    } else {
      newPath = pathname.replace('/en', '') || '/';
    }

    router.push(newPath);
  };

  const currentLocale = getCurrentLocale();

  return (
    <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
      <button
        onClick={() => switchLanguage('tr')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition ${
          currentLocale === 'tr'
            ? 'bg-gradient-to-r from-blue-500 to-purple-600'
            : 'hover:bg-white/10'
        }`}
      >
        TR
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition ${
          currentLocale === 'en'
            ? 'bg-gradient-to-r from-blue-500 to-purple-600'
            : 'hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
}
