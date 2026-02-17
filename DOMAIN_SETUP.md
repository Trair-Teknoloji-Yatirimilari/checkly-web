# 🌐 Checkly Domain Kurulum Rehberi

## Domain Bilgisi

**Domain:** www.checkly.tech  
**Registrar:** [Domain sağlayıcınız]

## 🚀 Vercel'de Deploy

### 1. Vercel'e Deploy Et

```bash
cd checkly-website
npm run build
vercel --prod
```

### 2. Custom Domain Ekle

1. Vercel Dashboard'a git: https://vercel.com/dashboard
2. Projenizi seçin
3. **Settings** > **Domains** bölümüne git
4. **Add Domain** butonuna tıkla
5. `www.checkly.tech` gir
6. **Add** butonuna tıkla

### 3. DNS Ayarları

Vercel size DNS kayıtlarını gösterecek. Domain sağlayıcınızda şu kayıtları ekleyin:

#### A Record (Apex domain için)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

#### CNAME Record (www için)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### 4. SSL Sertifikası

Vercel otomatik olarak SSL sertifikası oluşturacak (Let's Encrypt).
Bu işlem 5-10 dakika sürebilir.

## 🔧 Alternatif: Netlify

### 1. Netlify'a Deploy

```bash
npm run build
netlify deploy --prod
```

### 2. Custom Domain

1. Netlify Dashboard > Site Settings > Domain Management
2. **Add custom domain** > `www.checkly.tech`
3. DNS kayıtlarını ekle:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

## 📧 Email Kurulumu (İsteğe Bağlı)

Domain'iniz için email kurmak isterseniz:

### Google Workspace
1. Google Workspace'e kaydol
2. MX kayıtlarını ekle:

```
Priority: 1
Host: @
Value: ASPMX.L.GOOGLE.COM

Priority: 5
Host: @
Value: ALT1.ASPMX.L.GOOGLE.COM
```

### Zoho Mail (Ücretsiz)
1. Zoho Mail'e kaydol
2. MX kayıtlarını ekle:

```
Priority: 10
Host: @
Value: mx.zoho.com

Priority: 20
Host: @
Value: mx2.zoho.com
```

## ✅ Kontrol Listesi

Deploy öncesi kontroller:

- [ ] `app/sitemap.ts` - Domain güncellendi ✅
- [ ] `public/robots.txt` - Domain güncellendi ✅
- [ ] `.env.local` - NEXT_PUBLIC_SITE_URL ayarlandı
- [ ] Build başarılı (`npm run build`)
- [ ] Vercel/Netlify'a deploy edildi
- [ ] Custom domain eklendi
- [ ] DNS kayıtları eklendi
- [ ] SSL sertifikası aktif
- [ ] Tüm sayfalar çalışıyor
- [ ] Dil değiştirici çalışıyor
- [ ] Mobil responsive kontrol edildi

## 🔍 DNS Propagation Kontrolü

DNS değişikliklerinin yayılması 24-48 saat sürebilir. Kontrol için:

```bash
# DNS kontrolü
nslookup www.checkly.tech

# veya online araçlar:
# https://dnschecker.org
# https://www.whatsmydns.net
```

## 📊 Analytics Kurulumu

### Google Analytics

1. Google Analytics hesabı oluştur
2. Property ID'yi al (G-XXXXXXXXXX)
3. `.env.local` dosyasına ekle:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. `app/layout.tsx` dosyasına Google Analytics script'i ekle:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🔒 Güvenlik

### Security Headers (Vercel)

`vercel.json` oluştur:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🎯 SEO Optimizasyonu

### Google Search Console

1. https://search.google.com/search-console adresine git
2. Property ekle: `www.checkly.tech`
3. Domain ownership doğrula
4. Sitemap gönder: `https://www.checkly.tech/sitemap.xml`

### Bing Webmaster Tools

1. https://www.bing.com/webmasters adresine git
2. Site ekle: `www.checkly.tech`
3. Sitemap gönder

## 📱 App Store Linkleri

Mobil uygulama yayınlandığında butonlara eklenecek linkler:

```tsx
// iOS
https://apps.apple.com/app/checkly/[APP_ID]

// Android
https://play.google.com/store/apps/details?id=com.trairx.checkly
```

## 🆘 Sorun Giderme

### Site açılmıyor
- DNS propagation'ı bekleyin (24-48 saat)
- DNS kayıtlarını kontrol edin
- Vercel/Netlify dashboard'da domain durumunu kontrol edin

### SSL hatası
- Vercel/Netlify'da SSL sertifikası oluşturulmasını bekleyin
- Domain doğrulamasının tamamlandığından emin olun

### 404 hatası
- Build'in başarılı olduğundan emin olun
- Vercel/Netlify'da yeniden deploy edin

## 📞 Destek

**Email:** info@trairx.com  
**Şirket:** TrairX Technology O.Ü

---

✨ **Domain başarıyla kuruldu: www.checkly.tech**
