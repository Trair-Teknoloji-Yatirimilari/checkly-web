# 🌐 Checkly Web Sitesi - Çoklu Dil Rehberi

## Desteklenen Diller

- 🇹🇷 **Türkçe** (Varsayılan) - `/`
- 🇬🇧 **İngilizce** - `/en`

## Dil Yapısı

### URL Yapısı

```
Türkçe (Varsayılan):
/ → Ana sayfa
/about → Hakkımızda
/features → Özellikler
/faq → SSS

İngilizce:
/en → Home
/en/about → About
/en/features → Features
/en/faq → FAQ
```

### Dil Değiştirme

Kullanıcılar navbar'daki dil değiştirici ile kolayca dil değiştirebilir:
- **TR/EN** toggle butonu
- Otomatik sayfa yönlendirmesi
- Mevcut sayfa yapısı korunur

## Teknik Detaylar

### Dosya Yapısı

```
app/
├── page.tsx                 # Türkçe ana sayfa
├── about/page.tsx          # Türkçe hakkımızda
├── features/page.tsx       # Türkçe özellikler
├── faq/page.tsx           # Türkçe SSS
└── en/
    ├── layout.tsx         # İngilizce metadata
    ├── page.tsx           # İngilizce ana sayfa
    ├── about/page.tsx     # İngilizce hakkımızda
    ├── features/page.tsx  # İngilizce özellikler
    └── faq/page.tsx       # İngilizce SSS

lib/
├── i18n.ts               # Dil yapılandırması
└── translations.ts       # Tüm çeviriler

components/
├── LanguageSwitcher.tsx  # Dil değiştirici bileşen
├── Navbar.tsx           # Çoklu dil destekli navbar
└── Footer.tsx           # Çoklu dil destekli footer
```

### Çeviri Sistemi

Tüm çeviriler `lib/translations.ts` dosyasında merkezi olarak yönetilir:

```typescript
export const translations = {
  tr: {
    nav: { home: "Ana Sayfa", ... },
    footer: { ... },
    home: { ... }
  },
  en: {
    nav: { home: "Home", ... },
    footer: { ... },
    home: { ... }
  }
};
```

### Yeni Dil Ekleme

1. **translations.ts'e yeni dil ekle:**
```typescript
export const translations = {
  tr: { ... },
  en: { ... },
  de: { ... } // Yeni dil
};
```

2. **i18n.ts'i güncelle:**
```typescript
export const locales = ['tr', 'en', 'de'] as const;
```

3. **Yeni dil klasörü oluştur:**
```
app/de/
├── layout.tsx
├── page.tsx
├── about/page.tsx
├── features/page.tsx
└── faq/page.tsx
```

4. **LanguageSwitcher'a ekle:**
```tsx
<button onClick={() => switchLanguage('de')}>DE</button>
```

## SEO ve Metadata

Her dil için ayrı metadata:

```typescript
// Türkçe
export const metadata: Metadata = {
  title: "Checkly - Yapay Zekâ Destekli...",
  description: "...",
  locale: "tr_TR",
};

// İngilizce
export const metadata: Metadata = {
  title: "Checkly - AI-Powered...",
  description: "...",
  locale: "en_US",
};
```

## Bileşenlerde Kullanım

### Navbar ve Footer

```tsx
"use client";
import { usePathname } from "next/navigation";
import { translations } from "@/lib/translations";

export default function Component() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'tr';
  const t = translations[locale].nav;
  
  return <div>{t.home}</div>;
}
```

### Sayfalar

```tsx
import { translations } from "@/lib/translations";

const t = translations.en.home; // veya .tr

export default function Page() {
  return <h1>{t.hero.title}</h1>;
}
```

## Test

```bash
# Development
npm run dev

# Türkçe sayfaları test et
http://localhost:3000
http://localhost:3000/about
http://localhost:3000/features
http://localhost:3000/faq

# İngilizce sayfaları test et
http://localhost:3000/en
http://localhost:3000/en/about
http://localhost:3000/en/features
http://localhost:3000/en/faq
```

## Özellikler

✅ URL tabanlı dil yönetimi
✅ Otomatik dil algılama
✅ Kolay dil değiştirme
✅ SEO uyumlu
✅ Merkezi çeviri yönetimi
✅ Type-safe çeviriler
✅ Responsive dil değiştirici
✅ Her dil için ayrı metadata

## Gelecek Geliştirmeler

- [ ] Tarayıcı dili otomatik algılama
- [ ] Cookie ile dil tercihi kaydetme
- [ ] Daha fazla dil desteği (Almanca, Fransızca, vb.)
- [ ] RTL dil desteği (Arapça, İbranice)
- [ ] Çeviri yönetim paneli

## Notlar

- Varsayılan dil Türkçe'dir (`/`)
- İngilizce için `/en` prefix kullanılır
- Tüm çeviriler compile-time'da yüklenir (performans)
- Dil değiştirme client-side routing ile yapılır
- Her sayfa static olarak pre-render edilir

---

📧 **Sorular için:** info@trairx.com
