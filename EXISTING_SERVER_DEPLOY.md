# 🚀 Checkly - Mevcut Sunucuya Kurulum

## 📋 Mevcut Sunucu Kontrolü

Önce sunucunuzun durumunu kontrol edelim:

```bash
ssh root@YOUR_SERVER_IP

# Mevcut kaynakları kontrol et
free -h              # RAM kullanımı
df -h                # Disk kullanımı
pm2 list             # Çalışan projeler
nginx -t             # Nginx durumu
node --version       # Node.js versiyonu
pm2 --version        # PM2 versiyonu
```

---

## ⚙️ Ön Gereksinimler

### Node.js Versiyonu (18+)
```bash
node --version
# Eğer 18'den küçükse:
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
```

### PM2 Kurulu mu?
```bash
pm2 --version
# Yoksa:
npm install -g pm2
```

---

## 📂 Adım 1: Proje Klasörü Oluştur (1 dk)

```bash
# Mevcut projelerinizin yanına
cd /var/www

# Checkly klasörü oluştur
mkdir -p checkly-website
cd checkly-website

# Git ile clone (önerilir)
git clone YOUR_REPO_URL .

# Veya dosyaları yükle
# scp -r /local/path/* root@YOUR_IP:/var/www/checkly-website/
```

---

## 📦 Adım 2: Bağımlılıkları Yükle (2 dk)

```bash
cd /var/www/checkly-website

# Production bağımlılıkları
npm install --production

# Build
npm run build

# .next klasörünün oluştuğunu kontrol et
ls -la .next
```

---

## 🔧 Adım 3: PM2 Konfigürasyonu (1 dk)

### Port Çakışmasını Önle

Mevcut projelerinizin portlarını kontrol edin:
```bash
pm2 list
netstat -tulpn | grep LISTEN
```

Checkly için boş bir port seçin (örn: 3001, 3002, vb.)

### ecosystem.config.js Düzenle

```bash
cd /var/www/checkly-website

cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'checkly-website',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/checkly-website',
    instances: 1,  // Başlangıç için 1, sonra artırabilirsiniz
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3001,  // ⚠️ Boş bir port seçin!
      HOSTNAME: '0.0.0.0'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M'  // Kaynak sınırı
  }]
}
EOF

# Log klasörü oluştur
mkdir -p logs
```

### PM2'de Başlat

```bash
pm2 start ecosystem.config.js
pm2 save

# Kontrol et
pm2 list
pm2 logs checkly-website --lines 50
```

---

## 🌐 Adım 4: Nginx Konfigürasyonu (2 dk)

### Yeni Site Config Oluştur

```bash
cat > /etc/nginx/sites-available/checkly << 'EOF'
# Checkly Web Site
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
        proxy_pass http://localhost:3001;  # ⚠️ Yukarıda seçtiğiniz port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeout ayarları
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static dosyalar için cache
    location /_next/static {
        proxy_pass http://localhost:3001;
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

    # Dosya yükleme limiti
    client_max_body_size 10M;
}
EOF
```

### Nginx'i Aktifleştir

```bash
# Symlink oluştur
ln -s /etc/nginx/sites-available/checkly /etc/nginx/sites-enabled/

# Config testi
nginx -t

# Başarılıysa restart
systemctl reload nginx

# Hata varsa:
nginx -t
tail -f /var/log/nginx/error.log
```

---

## ☁️ Adım 5: Cloudflare DNS (2 dk)

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
- **Encryption mode:** Full (strict)
- **Always Use HTTPS:** ✅ On
- **Minimum TLS Version:** TLS 1.2

---

## ✅ Adım 6: Test ve Kontrol

```bash
# PM2 durumu
pm2 status
pm2 logs checkly-website --lines 20

# Port dinleniyor mu?
netstat -tulpn | grep 3001

# Nginx durumu
systemctl status nginx

# Local test
curl -I http://localhost:3001

# Domain test (DNS propagation sonrası)
curl -I https://www.checkly.tech
```

---

## 🔄 Güncelleme (Deploy)

```bash
cd /var/www/checkly-website

# Git ile
git pull
npm install
npm run build
pm2 restart checkly-website

# Veya manuel
# scp ile dosyaları yükle
npm install
npm run build
pm2 restart checkly-website
```

---

## 📊 Kaynak Yönetimi

### Mevcut Kullanımı Kontrol Et

```bash
# Tüm PM2 uygulamaları
pm2 list

# Kaynak kullanımı
pm2 monit

# Sistem kaynakları
free -h
df -h
htop
```

### Checkly Kaynak Limitleri

```javascript
// ecosystem.config.js içinde
max_memory_restart: '500M',  // RAM limiti
instances: 1,                 // CPU kullanımı
```

### Gerekirse Optimize Et

```bash
# Checkly için daha az kaynak
pm2 scale checkly-website 1

# Veya daha fazla (yeterli RAM varsa)
pm2 scale checkly-website 2
```

---

## 🆘 Sorun Giderme

### Port Çakışması
```bash
# Kullanılan portları gör
netstat -tulpn | grep LISTEN

# Farklı port seç ve ecosystem.config.js'i güncelle
# Nginx config'i de güncelle
```

### PM2 Başlamıyor
```bash
# Logları kontrol et
pm2 logs checkly-website --err

# Build var mı?
ls -la /var/www/checkly-website/.next

# Yeniden build
cd /var/www/checkly-website
npm run build
pm2 restart checkly-website
```

### Nginx 502 Bad Gateway
```bash
# PM2 çalışıyor mu?
pm2 status

# Port doğru mu?
netstat -tulpn | grep 3001

# Nginx config doğru mu?
nginx -t

# Logları kontrol et
tail -f /var/log/nginx/error.log
pm2 logs checkly-website
```

### Yüksek RAM Kullanımı
```bash
# Checkly'yi tek instance'a düşür
pm2 scale checkly-website 1

# RAM limitini düşür
# ecosystem.config.js: max_memory_restart: '300M'
pm2 restart checkly-website
```

---

## 📈 Monitoring

```bash
# PM2 monitoring
pm2 monit

# Checkly logları
pm2 logs checkly-website

# Nginx access log
tail -f /var/log/nginx/access.log | grep checkly

# Sistem kaynakları
watch -n 1 free -h
```

---

## 🔐 Güvenlik

### Firewall (Zaten varsa atla)
```bash
ufw status
# Gerekirse:
# ufw allow 80/tcp
# ufw allow 443/tcp
```

### PM2 Startup (Zaten varsa atla)
```bash
pm2 startup
pm2 save
```

---

## 📝 Checklist

- [ ] Boş port seçildi (örn: 3001)
- [ ] Proje /var/www/checkly-website'a yüklendi
- [ ] npm install && npm run build çalıştırıldı
- [ ] ecosystem.config.js port güncellendi
- [ ] PM2'de başlatıldı (pm2 start)
- [ ] Nginx config oluşturuldu
- [ ] Nginx config aktifleştirildi
- [ ] Nginx reload edildi
- [ ] Cloudflare DNS ayarlandı
- [ ] Site test edildi
- [ ] Loglar kontrol edildi

---

## 📞 Destek

**Email:** info@trairx.com  
**Şirket:** TrairX Technology O.Ü

---

✨ **Checkly mevcut sunucunuza başarıyla eklendi!**

**Toplam Süre:** ~8 dakika  
**Kaynak Kullanımı:** ~200-300 MB RAM  
**Port:** 3001 (veya seçtiğiniz)
