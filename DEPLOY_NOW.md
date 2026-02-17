# 🚀 Checkly - Hızlı Deploy Rehberi

## Domain: www.checkly.tech

## ⚡ Vercel'e Deploy (5 Dakika)

### Adım 1: Vercel CLI Kur

```bash
npm i -g vercel
```

### Adım 2: Login

```bash
vercel login
```

### Adım 3: Deploy

```bash
cd checkly-website
vercel --prod
```

### Adım 4: Custom Domain Ekle

1. Vercel Dashboard'a git: https://vercel.com
2. Projeyi seç
3. **Settings** > **Domains**
4. **Add Domain** > `www.checkly.tech`

### Adım 5: DNS Ayarları

Domain sağlayıcınızda (GoDaddy, Namecheap, vb.) şu kayıtları ekleyin:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

### Adım 6: SSL Bekle

Vercel otomatik SSL sertifikası oluşturacak (5-10 dakika).

## ✅ Deploy Tamamlandı!

Site şu adreste yayında: **https://www.checkly.tech**

## 🔍 Kontrol Listesi

- [x] Build başarılı
- [x] Vercel'e deploy edildi
- [ ] Custom domain eklendi
- [ ] DNS kayıtları eklendi
- [ ] SSL aktif
- [ ] Site açılıyor
- [ ] Türkçe sayfa çalışıyor (/)
- [ ] İngilizce sayfa çalışıyor (/en)
- [ ] Dil değiştirici çalışıyor
- [ ] Mobil responsive

## 📊 Sonraki Adımlar

1. **Google Analytics Ekle**
   - GA4 property oluştur
   - `.env.local` dosyasına ID ekle
   - Yeniden deploy et

2. **Google Search Console**
   - Site ekle: www.checkly.tech
   - Sitemap gönder: /sitemap.xml

3. **Logo ve Favicon**
   - Logo tasarımı ekle
   - Favicon oluştur
   - public/ klasörüne ekle

4. **App Store Linkleri**
   - iOS App Store linki
   - Google Play Store linki
   - Butonlara ekle

## 🆘 Sorun mu var?

### Site açılmıyor
```bash
# DNS kontrolü
nslookup www.checkly.tech

# Yeniden deploy
vercel --prod --force
```

### Build hatası
```bash
# Cache temizle
rm -rf .next node_modules
npm install
npm run build
```

## 📞 Destek

**Email:** info@trairx.com  
**Şirket:** TrairX Technology O.Ü

---

✨ **Başarılar! Site yayında: www.checkly.tech**
