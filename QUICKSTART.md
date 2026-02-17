# 🚀 Checkly Web Sitesi - Hızlı Başlangıç

## ⚡ 3 Adımda Başla

```bash
# 1. Proje dizinine git
cd checkly-website

# 2. Bağımlılıkları yükle
npm install

# 3. Development sunucusunu başlat
npm run dev
```

Tarayıcıda aç: **http://localhost:3000**

## 🌐 Çoklu Dil Desteği

- **Türkçe (Varsayılan):** http://localhost:3000
- **İngilizce:** http://localhost:3000/en

Navbar'daki TR/EN butonuyla dil değiştirilebilir.

## 📦 Production Build

```bash
npm run build    # Build oluştur
npm start        # Production sunucusunu başlat
```

## 🌐 Deploy (Vercel - Önerilen)

```bash
npm i -g vercel
vercel
```

## 📄 Sayfalar

### Türkçe
- **/** - Ana sayfa
- **/about** - Hakkımızda
- **/features** - Özellikler
- **/faq** - Sıkça Sorulan Sorular

### İngilizce
- **/en** - Home
- **/en/about** - About
- **/en/features** - Features
- **/en/faq** - FAQ

## 🎨 Özelleştirme

1. **Domain değiştir:** `app/sitemap.ts` ve `public/robots.txt`
2. **Logo ekle:** `components/Navbar.tsx` ve `components/Footer.tsx`
3. **Favicon ekle:** `public/favicon.ico`
4. **App Store linkler:** Butonlara gerçek linkler ekle
5. **Çeviriler:** `lib/translations.ts` dosyasını düzenle

## 📚 Daha Fazla Bilgi

- **README.md** - Genel dokümantasyon
- **LANGUAGE_GUIDE.md** - Çoklu dil rehberi
- **DEPLOYMENT.md** - Detaylı deploy rehberi
- **PROJECT_SUMMARY.md** - Proje özeti

## 🆘 Sorun mu var?

```bash
# Cache temizle
rm -rf .next node_modules
npm install
npm run build
```

## 📧 İletişim

**Email:** info@trairx.com  
**Şirket:** TrairX Technology O.Ü

---

✨ **Başarılar!**
