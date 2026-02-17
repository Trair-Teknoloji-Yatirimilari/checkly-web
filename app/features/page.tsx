import { Metadata } from "next";
import AppStoreButtons from "@/components/AppStoreButtons";

export const metadata: Metadata = {
  title: "Özellikler - Checkly",
  description: "Checkly'nin gerçek zamanlı check-in, yapay zekâ öneri motoru ve premium görünürlük özellikleri.",
};

export default function Features() {
  const features = [
    {
      icon: "📍",
      title: "Gerçek Zamanlı Check-in Sistemi",
      description: "Bulunduğun yerde anında check-in yap, varlığını göster. Sistem konumunu otomatik algılar ve seni haritada görünür kılar.",
      details: [
        "Otomatik konum algılama",
        "Hızlı check-in süreci",
        "Geçmiş check-in kayıtları",
        "Konum bazlı istatistikler"
      ]
    },
    {
      icon: "🤖",
      title: "Yapay Zekâ Öneri Motoru",
      description: "Gelişmiş AI algoritmaları ile kişiselleştirilmiş öneriler al. Sistem tercihlerini, zamanı ve sosyal yoğunluğu analiz eder.",
      details: [
        "Kişiselleştirilmiş mekan önerileri",
        "Zaman bazlı akıllı öneriler",
        "Sosyal yoğunluk analizi",
        "Sürekli öğrenen sistem"
      ]
    },
    {
      icon: "👥",
      title: "Konum Tabanlı Sosyal Eşleşme",
      description: "Aynı lokasyondaki kullanıcıları gör, yeni insanlarla tanış. Ortak ilgi alanlarına göre eşleşme önerileri al.",
      details: [
        "Gerçek zamanlı kullanıcı görünürlüğü",
        "Ortak ilgi alanı tespiti",
        "Mesafe bazlı filtreleme",
        "Güvenli eşleşme sistemi"
      ]
    },
    {
      icon: "🎯",
      title: "Akıllı Kategori Sistemi",
      description: "İlgi alanlarına göre kategorize edilmiş keşif deneyimi. Her kategori için özel AI önerileri.",
      details: [
        "☕ Kahve - En iyi kafeler",
        "🎉 Etkinlik - Canlı etkinlikler",
        "🍽️ Yemek - Popüler restoranlar",
        "🎨 Kültür - Müze ve galeriler",
        "🛍️ Alışveriş - Trend mekanlar"
      ]
    },
    {
      icon: "⭐",
      title: "Premium Görünürlük Sistemi",
      description: "Premium üyelikle check-in süresini uzat, daha fazla kişiye ulaş. Farklı paketlerle farklı görünürlük süreleri.",
      details: [
        "Premium: 5 dakika görünürlük",
        "Gold: 10 dakika görünürlük",
        "Diamond: 20 dakika görünürlük",
        "Özel profil rozetleri"
      ]
    },
    {
      icon: "🔒",
      title: "Gizlilik ve Güvenlik",
      description: "Verileriniz şifrelenmiş ve güvende. Konum paylaşımını istediğin zaman kontrol et.",
      details: [
        "End-to-end şifreleme",
        "Konum gizleme seçeneği",
        "Engelleme ve raporlama",
        "KVKK uyumlu sistem"
      ]
    },
    {
      icon: "📊",
      title: "Kişisel İstatistikler",
      description: "Check-in geçmişini, en çok gittiğin yerleri ve sosyal etkileşim istatistiklerini gör.",
      details: [
        "Check-in haritası",
        "Favori mekanlar",
        "Sosyal etkileşim grafiği",
        "Aylık aktivite raporu"
      ]
    },
    {
      icon: "🌐",
      title: "Çoklu Dil Desteği",
      description: "Türkçe ve İngilizce dillerinde tam destek. Yakında daha fazla dil eklenecek.",
      details: [
        "Türkçe arayüz",
        "İngilizce arayüz",
        "Otomatik dil algılama",
        "Kolay dil değiştirme"
      ]
    },
    {
      icon: "🔔",
      title: "Akıllı Bildirimler",
      description: "Çevrende ilginç bir şey olduğunda anında haberdar ol. AI destekli bildirim sistemi.",
      details: [
        "Yakındaki etkinlik bildirimleri",
        "Arkadaş check-in bildirimleri",
        "Özel öneri bildirimleri",
        "Özelleştirilebilir bildirimler"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold gradient-text">Özellikler</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Checkly, konum tabanlı sosyal keşif deneyimini yapay zekâ ile birleştiren güçlü özellikler sunar
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-300 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20 glass p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Teknoloji Altyapısı</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Checkly, modern teknolojiler ve güçlü altyapı ile çalışır
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Gerçek Zamanlı Veri", icon: "⚡" },
              { name: "AI/ML Algoritmaları", icon: "🧠" },
              { name: "Bulut Altyapı", icon: "☁️" },
              { name: "Güvenli API", icon: "🔐" }
            ].map((tech) => (
              <div key={tech.name} className="glass p-6 rounded-xl hover:scale-105 transition">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-semibold">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center space-y-6">
          <h2 className="text-3xl font-bold">Tüm Özellikleri Keşfet</h2>
          <p className="text-slate-300">Checkly'yi indirerek tüm özelliklere erişim sağla</p>
          <AppStoreButtons className="justify-center" />
        </div>
      </div>
    </div>
  );
}
