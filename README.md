# Checkly - Yapay Zekâ Destekli Konum Tabanlı Sosyal Keşif Platformu

Modern, yatırımcı seviyesinde kurumsal web sitesi.

## 🌐 Domain

**Live Site:** https://www.checkly.tech

## 🌐 Çoklu Dil Desteği

- 🇹🇷 **Türkçe** (Varsayılan) - `/`
- 🇬🇧 **İngilizce** - `/en`

Detaylı bilgi için: [LANGUAGE_GUIDE.md](./LANGUAGE_GUIDE.md)

## 🚀 Teknoloji Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **React 19**

## 📁 Proje Yapısı

```
checkly-website/
├── app/
│   ├── layout.tsx          # Ana layout (Navbar + Footer)
│   ├── page.tsx            # Ana sayfa (TR)
│   ├── about/
│   │   └── page.tsx        # Hakkımızda (TR)
│   ├── features/
│   │   └── page.tsx        # Özellikler (TR)
│   ├── faq/
│   │   └── page.tsx        # SSS (TR)
│   ├── en/                 # İngilizce sayfalar
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── features/
│   │   └── faq/
│   └── globals.css         # Global stiller
├── components/
│   ├── Navbar.tsx          # Navigasyon (çoklu dil)
│   ├── Footer.tsx          # Footer (çoklu dil)
│   └── LanguageSwitcher.tsx # Dil değiştirici
├── lib/
│   ├── i18n.ts            # Dil yapılandırması
│   └── translations.ts     # Tüm çeviriler
└── public/                 # Statik dosyalar
```

## 🎨 Tasarım Özellikleri

- ✅ Modern SaaS estetiği
- ✅ Glassmorphism efektleri
- ✅ Gradient geçişler
- ✅ Koyu mod uyumlu
- ✅ Tam responsive
- ✅ SEO optimize
- ✅ Mobil öncelikli

## 📄 Sayfalar

### 1. Ana Sayfa (/)
- Hero bölümü
- Problem tanımı
- Nasıl çalışır (3 adım)
- Yapay zekâ katmanı
- Sosyal katman
- Premium paketler
- CTA bölümü

### 2. Hakkımızda (/about)
- Vizyon ve misyon
- Teknoloji altyapısı
- Şirket bilgisi (TrairX Technology O.Ü)
- Değerler

### 3. Özellikler (/features)
- 9 ana özellik kartı
- Teknoloji altyapısı
- Detaylı açıklamalar

### 4. SSS (/faq)
- 10 sık sorulan soru
- Accordion tasarım
- İletişim CTA

## 🛠️ Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Kurulum

```bash
# Proje dizinine git
cd checkly-website

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda açın: [http://localhost:3000](http://localhost:3000)

## 📦 Build ve Deploy

```bash
# Production build
npm run build

# Production sunucusunu başlat
npm start

# Lint kontrolü
npm run lint
```

## 🎯 Özelleştirme

### Renkler
`tailwind.config.ts` dosyasından renk paletini özelleştirebilirsiniz.

### İçerik
Sayfa içeriklerini ilgili `page.tsx` dosyalarından düzenleyebilirsiniz.

### Stiller
Global stiller `app/globals.css` dosyasında tanımlıdır.

## 📧 İletişim

**Şirket:** TrairX Technology O.Ü  
**Email:** info@trairx.com  
**Ürün:** Checkly

## 📝 Lisans

© 2026 Checkly - TrairX Technology O.Ü ürünüdür. Tüm hakları saklıdır.
