# Checkly Web Sitesi - Deployment Rehberi

## 🚀 Hızlı Başlangıç

```bash
# Proje dizinine git
cd checkly-website

# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm run dev
```

Tarayıcıda açın: http://localhost:3000

## 📦 Production Build

```bash
# Production build oluştur
npm run build

# Production sunucusunu başlat
npm start
```

## 🌐 Deployment Seçenekleri

### Domain Bilgisi
**Live Site:** https://www.checkly.tech

Detaylı domain kurulum rehberi için: [DOMAIN_SETUP.md](./DOMAIN_SETUP.md)

### 1. Vercel (Önerilen)

Vercel, Next.js'in yaratıcısı olduğu için en iyi performansı sunar.

```bash
# Vercel CLI'yi yükle
npm i -g vercel

# Deploy et
vercel
```

Veya GitHub'a push yaparak otomatik deploy:
1. Projeyi GitHub'a push edin
2. https://vercel.com adresine gidin
3. "Import Project" ile GitHub repo'nuzu bağlayın
4. Otomatik deploy başlar

### 2. Netlify

```bash
# Netlify CLI'yi yükle
npm i -g netlify-cli

# Build ve deploy
npm run build
netlify deploy --prod
```

### 3. AWS Amplify

1. AWS Amplify Console'a gidin
2. "New App" > "Host web app"
3. GitHub repo'nuzu bağlayın
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 4. Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Docker build ve run
docker build -t checkly-website .
docker run -p 3000:3000 checkly-website
```

## 🔧 Environment Variables

Eğer API key'ler veya özel ayarlar kullanacaksanız `.env.local` dosyası oluşturun:

```env
NEXT_PUBLIC_API_URL=https://api.checkly.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📊 Performance Optimizasyonu

Build sonrası performans kontrolleri:

```bash
# Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Bundle analizi
npm install -D @next/bundle-analyzer
```

## 🔒 Güvenlik

Production'a çıkmadan önce:

- [ ] Environment variables güvenli mi?
- [ ] API endpoint'leri doğru mu?
- [ ] HTTPS aktif mi?
- [ ] CSP (Content Security Policy) ayarlandı mı?
- [ ] Rate limiting var mı?

## 📈 Monitoring

Production'da izleme için öneriler:

- **Vercel Analytics** (Vercel kullanıyorsanız otomatik)
- **Google Analytics** (NEXT_PUBLIC_GA_ID ile)
- **Sentry** (Hata takibi için)
- **LogRocket** (Session replay için)

## 🔄 CI/CD Pipeline

GitHub Actions örneği:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test # Eğer testler varsa
```

## 📝 Checklist

Production'a çıkmadan önce:

- [x] Build başarılı
- [ ] Tüm sayfalar test edildi
- [ ] Mobil responsive kontrol edildi
- [ ] SEO meta tagları eklendi
- [ ] Favicon ve logo eklendi
- [ ] 404 sayfası oluşturuldu
- [ ] Sitemap.xml eklendi
- [ ] robots.txt eklendi
- [ ] Analytics entegre edildi
- [ ] Performance test yapıldı

## 🆘 Sorun Giderme

### Build hatası alıyorsanız:

```bash
# Cache'i temizle
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Port zaten kullanılıyorsa:

```bash
# Farklı port kullan
PORT=3001 npm run dev
```

## 📞 Destek

Sorun yaşarsanız:
- Email: info@trairx.com
- GitHub Issues: [Repo link]
