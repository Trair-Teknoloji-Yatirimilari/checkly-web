# 🚀 Checkly - Sunucuya Deploy Komutları

## ✅ GitHub'a Push Edildi!
**Repo:** https://github.com/Trair-Teknoloji-Yatirimilari/checkly-web.git

---

## 📦 Sunucuya Kurulum (5 Dakika)

### 1. Sunucuya Bağlan
```bash
ssh root@YOUR_SERVER_IP
```

### 2. Port Kontrolü
```bash
# Kullanılan portları gör
netstat -tulpn | grep LISTEN

# PM2 listesi
pm2 list
```

**Mevcut projeleriniz:**
- checkly (mobil backend): Port ?
- safely-backend: Port ?
- safely-global: Port ?
- soorpe-backend: Port ?

**Checkly web sitesi için:** Port 3004 veya 3005 kullanacağız.

---

### 3. Projeyi Clone Et
```bash
cd /var/www
git clone https://github.com/Trair-Teknoloji-Yatirimilari/checkly-web.git checkly-website
cd checkly-website
```

---

### 4. Bağımlılıkları Yükle ve Build
```bash
npm install --production
npm run build

# Build kontrolü
ls -la .next
```

---

### 5. ecosystem.config.js Düzenle
```bash
nano ecosystem.config.js
```

**Değiştirilecek satır:**
```javascript
PORT: 3004,  // ⚠️ Boş bir port seçin (3004, 3005, vb.)
```

Kaydet: `Ctrl+X`, `Y`, `Enter`

---

### 6. PM2'de Başlat
```bash
pm2 start ecosystem.config.js
pm2 save

# Kontrol et
pm2 list
pm2 logs checkly-website --lines 20
```

**Beklenen çıktı:**
```
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ checkly            │ fork     │ 2    │ online    │ 0%       │ 120.0mb  │
│ 1  │ safely-backend     │ fork     │ 22   │ online    │ 0%       │ 105.4mb  │
│ 6  │ safely-global      │ fork     │ 0    │ online    │ 0%       │ 61.3mb   │
│ 4  │ soorpe-backend     │ fork     │ 84   │ online    │ 0%       │ 260.7mb  │
│ 7  │ checkly-website    │ cluster  │ 0    │ online    │ 0%       │ 200.0mb  │ ✅ YENİ
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

---

### 7. Nginx Config Oluştur
```bash
nano /etc/nginx/sites-available/checkly-website
```

**Yapıştır:** (PORT'u 3004 olarak ayarla)
```nginx
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

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location / {
        proxy_pass http://localhost:3004;  # ⚠️ Seçtiğiniz port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static dosyalar için cache
    location /_next/static {
        proxy_pass http://localhost:3004;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/json application/javascript;
}
```

Kaydet: `Ctrl+X`, `Y`, `Enter`

---

### 8. Nginx'i Aktifleştir
```bash
# Symlink oluştur
ln -s /etc/nginx/sites-available/checkly-website /etc/nginx/sites-enabled/

# Config testi
nginx -t

# Başarılıysa reload
systemctl reload nginx
```

**Beklenen çıktı:**
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

---

### 9. Test
```bash
# Local test
curl -I http://localhost:3004

# PM2 durumu
pm2 status

# Logları kontrol
pm2 logs checkly-website --lines 50
```

---

### 10. Cloudflare DNS Ayarla

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

**SSL/TLS Ayarları:**
- Encryption mode: Full (strict)
- Always Use HTTPS: ✅ On

---

## ✅ Kontrol Listesi

- [ ] Sunucuya bağlandım
- [ ] Port kontrolü yaptım (3004 boş)
- [ ] Projeyi clone ettim
- [ ] npm install && npm run build çalıştırdım
- [ ] ecosystem.config.js'de PORT:3004 ayarladım
- [ ] PM2'de başlattım (pm2 start)
- [ ] Nginx config oluşturdum
- [ ] Nginx config aktifleştirdim
- [ ] Nginx reload ettim
- [ ] Local test yaptım (curl)
- [ ] Cloudflare DNS ayarladım
- [ ] Site açıldı ✅

---

## 🔄 Güncelleme (Sonraki Deploylar)

```bash
cd /var/www/checkly-website
git pull
npm install
npm run build
pm2 restart checkly-website
```

---

## 🆘 Sorun Giderme

### PM2 başlamıyor
```bash
pm2 logs checkly-website --err
cd /var/www/checkly-website
npm run build
pm2 restart checkly-website
```

### Nginx 502 Bad Gateway
```bash
pm2 status
netstat -tulpn | grep 3004
nginx -t
tail -f /var/log/nginx/error.log
```

### Port çakışması
```bash
netstat -tulpn | grep LISTEN
# Farklı port seç ve ecosystem.config.js + nginx config'i güncelle
```

---

## 📊 Monitoring

```bash
# PM2 monitoring
pm2 monit

# Loglar
pm2 logs checkly-website

# Sistem kaynakları
free -h
htop
```

---

## 📞 Destek

**Email:** info@trairx.com  
**GitHub:** https://github.com/Trair-Teknoloji-Yatirimilari/checkly-web

---

✨ **Toplam Süre:** ~5 dakika  
✨ **Kaynak Kullanımı:** +200-250 MB RAM  
✨ **Toplam RAM:** ~800 MB / 8 GB (%10) ✅
