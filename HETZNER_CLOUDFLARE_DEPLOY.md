# 🚀 Checkly - Hetzner + Cloudflare Deploy Rehberi

## ⚡ 10 Dakikada Deploy

### Ön Hazırlık
- Hetzner VPS (Ubuntu 22.04 önerilir)
- Cloudflare hesabı
- Domain: www.checkly.tech (Cloudflare'de)

---

## 📦 Adım 1: Hetzner VPS Kurulumu (3 dakika)

### SSH ile Bağlan
```bash
ssh root@YOUR_SERVER_IP
```

### Node.js ve PM2 Kur
```bash
# Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt-get install -y nodejs

# PM2 (Process Manager)
npm install -g pm2

# Nginx
apt-get install -y nginx

# Certbot (SSL için)
apt-get install -y certbot python3-certbot-nginx
```

---

## 📂 Adım 2: Projeyi Yükle (2 dakika)

### Git ile Clone (Önerilen)
```bash
cd /var/www
git clone YOUR_REPO_URL checkly-website
cd checkly-website
npm install
npm run build
```

### Veya SCP ile Yükle
```bash
# Local bilgisayarınızdan
cd checkly-website
npm run build
scp -r .next package.json package-lock.json root@YOUR_SERVER_IP:/var/www/checkly-website/
```

---

## 🔧 Adım 3: PM2 ile Başlat (1 dakika)

```bash
cd /var/www/checkly-website

# PM2 ecosystem dosyası oluştur
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'checkly-website',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/checkly-website',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Başlat
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## 🌐 Adım 4: Nginx Konfigürasyonu (2 dakika)

```bash
# Nginx config oluştur
cat > /etc/nginx/sites-available/checkly << 'EOF'
server {
    listen 80;
    server_name www.checkly.tech checkly.tech;

    # Cloudflare gerçek IP'leri
    set_real_ip_from 173.245.48.0/20;
    set_real_ip_from 103.21.244.0/22;
    set_real_ip_from 103.22.200.0/22;
    set_real_ip_from 103.31.4.0/22;
    set_real_ip_from 141.101.64.0/18;
    set_real_ip_from 108.162.192.0/18;
    set_real_ip_from 190.93.240.0/20;
    set_real_ip_from 188.114.96.0/20;
    set_real_ip_from 197.234.240.0/22;
    set_real_ip_from 198.41.128.0/17;
    set_real_ip_from 162.158.0.0/15;
    set_real_ip_from 104.16.0.0/13;
    set_real_ip_from 104.24.0.0/14;
    set_real_ip_from 172.64.0.0/13;
    set_real_ip_from 131.0.72.0/22;
    real_ip_header CF-Connecting-IP;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;

    # Cache static files
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Enable site
ln -s /etc/nginx/sites-available/checkly /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# Test ve restart
nginx -t
systemctl restart nginx
```

---

## ☁️ Adım 5: Cloudflare Ayarları (2 dakika)

### DNS Kayıtları
Cloudflare Dashboard > DNS:

```
Type: A
Name: @
Content: YOUR_SERVER_IP
Proxy: ✅ Proxied (Orange Cloud)
TTL: Auto

Type: CNAME
Name: www
Content: checkly.tech
Proxy: ✅ Proxied (Orange Cloud)
TTL: Auto
```

### SSL/TLS Ayarları
Cloudflare Dashboard > SSL/TLS:
- **Encryption mode:** Full (strict)
- **Always Use HTTPS:** ✅ On
- **Automatic HTTPS Rewrites:** ✅ On
- **Minimum TLS Version:** TLS 1.2

### Speed Ayarları
Cloudflare Dashboard > Speed > Optimization:
- **Auto Minify:** ✅ JavaScript, CSS, HTML
- **Brotli:** ✅ On
- **Rocket Loader:** ❌ Off (Next.js ile uyumsuz)
- **Early Hints:** ✅ On

### Caching
Cloudflare Dashboard > Caching > Configuration:
- **Caching Level:** Standard
- **Browser Cache TTL:** 4 hours

### Page Rules (Opsiyonel)
```
www.checkly.tech/_next/static/*
- Cache Level: Cache Everything
- Edge Cache TTL: 1 month
- Browser Cache TTL: 1 month
```

---

## 🔒 Adım 6: SSL Sertifikası (Opsiyonel - Cloudflare zaten SSL sağlıyor)

Cloudflare Full (strict) için origin sertifikası:

```bash
# Cloudflare Origin Certificate kullan (önerilir)
# veya Let's Encrypt:
certbot --nginx -d checkly.tech -d www.checkly.tech
```

---

## ✅ Kontrol

```bash
# PM2 durumu
pm2 status

# Nginx durumu
systemctl status nginx

# Logları izle
pm2 logs checkly-website

# Site testi
curl -I http://localhost:3000
curl -I https://www.checkly.tech
```

---

## 🔄 Güncelleme (Deploy)

```bash
cd /var/www/checkly-website
git pull
npm install
npm run build
pm2 restart checkly-website
```

---

## 🚀 Otomatik Deploy (GitHub Actions)

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Hetzner

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_IP }}
          username: root
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /var/www/checkly-website
            git pull
            npm install
            npm run build
            pm2 restart checkly-website
```

---

## 📊 Monitoring

```bash
# PM2 monitoring
pm2 monit

# Nginx access log
tail -f /var/log/nginx/access.log

# Nginx error log
tail -f /var/log/nginx/error.log

# Sistem kaynakları
htop
```

---

## 🔥 Firewall (UFW)

```bash
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw enable
```

---

## 🎯 Performance Optimizasyonu

### 1. Nginx Caching
```nginx
# /etc/nginx/nginx.conf içine ekle
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;
```

### 2. PM2 Cluster Mode
```bash
# Tüm CPU çekirdeklerini kullan
pm2 start ecosystem.config.js -i max
```

### 3. Cloudflare Argo (Opsiyonel - Ücretli)
Cloudflare Dashboard > Traffic > Argo Smart Routing

---

## 🆘 Sorun Giderme

### Site açılmıyor
```bash
# PM2 çalışıyor mu?
pm2 status

# Nginx çalışıyor mu?
systemctl status nginx

# Port dinleniyor mu?
netstat -tulpn | grep 3000

# Yeniden başlat
pm2 restart checkly-website
systemctl restart nginx
```

### 502 Bad Gateway
```bash
# Next.js build var mı?
ls -la /var/www/checkly-website/.next

# Yeniden build
cd /var/www/checkly-website
npm run build
pm2 restart checkly-website
```

### Cloudflare 520 Error
- Origin server'ın çalıştığından emin ol
- Firewall kurallarını kontrol et
- Cloudflare IP'lerinin engellenip engellenmediğini kontrol et

---

## 📞 Destek

**Email:** info@trairx.com  
**Şirket:** TrairX Technology O.Ü

---

✨ **Deploy tamamlandı: https://www.checkly.tech**
