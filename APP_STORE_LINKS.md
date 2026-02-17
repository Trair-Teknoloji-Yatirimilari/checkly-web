# 📱 Checkly - App Store Linkleri

## 🍎 iOS (App Store)

### Production Link
```
https://apps.apple.com/app/checkly/id6738594424
```

### Test Flight (Beta)
```
https://testflight.apple.com/join/XXXXXXXX
```

### QR Code için
App Store linkini QR code'a çevir: https://www.qr-code-generator.com/

---

## 🤖 Android (Google Play)

### Production Link
```
https://play.google.com/store/apps/details?id=com.trairx.checkly
```

### Beta Test
```
https://play.google.com/apps/testing/com.trairx.checkly
```

---

## 📝 Kullanım

### Web Sitesinde
Linkler otomatik olarak şu dosyada tanımlı:
- `lib/constants.ts` → `APP_LINKS`

### Bileşenler
- `components/AppStoreButtons.tsx` - Ana buton bileşeni
- `components/Navbar.tsx` - Download butonu
- `app/page.tsx` - Ana sayfa butonları
- `app/en/page.tsx` - İngilizce sayfa butonları
- `app/features/page.tsx` - Özellikler sayfası
- `app/en/features/page.tsx` - İngilizce özellikler

---

## 🔄 Link Güncelleme

Linkleri güncellemek için sadece `lib/constants.ts` dosyasını düzenle:

```typescript
export const APP_LINKS = {
  ios: 'https://apps.apple.com/app/checkly/id6738594424',
  android: 'https://play.google.com/store/apps/details?id=com.trairx.checkly',
  testflight: 'https://testflight.apple.com/join/XXXXXXXX'
} as const;
```

Sonra yeniden build et:
```bash
npm run build
```

---

## 📊 Analytics Tracking (Opsiyonel)

App Store linklerine UTM parametreleri ekle:

```typescript
export const APP_LINKS = {
  ios: 'https://apps.apple.com/app/checkly/id6738594424?utm_source=website&utm_medium=button&utm_campaign=homepage',
  android: 'https://play.google.com/store/apps/details?id=com.trairx.checkly&utm_source=website&utm_medium=button&utm_campaign=homepage'
} as const;
```

---

## 🎨 Buton Varyantları

### Default (Büyük)
```tsx
<AppStoreButtons />
```

### Compact (Küçük)
```tsx
<AppStoreButtons variant="compact" />
```

### Custom Class
```tsx
<AppStoreButtons className="justify-center" />
```

---

## 🔗 Deep Links (Gelecek)

Uygulama içi sayfalara direkt link:

```
// iOS Universal Links
https://www.checkly.tech/app/profile
https://www.checkly.tech/app/checkin

// Android App Links
https://www.checkly.tech/app/profile
https://www.checkly.tech/app/checkin
```

---

## 📞 Destek

**Email:** info@trairx.com  
**Şirket:** TrairX Technology O.Ü

---

✨ **App Store linkleri web sitesine entegre edildi!**
