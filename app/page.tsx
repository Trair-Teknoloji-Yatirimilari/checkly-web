import Link from "next/link";
import AppStoreButtons from "@/components/AppStoreButtons";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Etrafında kim var?{" "}
            <span className="gradient-text">Şehirde ne oluyor?</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
            Gerçek zamanlı check-in ve yapay zekâ destekli keşif deneyimi. Şehri yeniden keşfet.
          </p>
          <AppStoreButtons />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Mevcut Uygulamalar Yetersiz</h2>
          <p className="text-xl text-slate-300">
            Harita uygulamaları statik. Sosyal ağlar konum odaklı değil. 
            Öneri sistemleri gerçek zamanlı sosyal yoğunluğu göstermiyor.
          </p>
          <div className="glass p-8 rounded-2xl">
            <p className="text-2xl font-semibold gradient-text">
              Checkly = Konum + Sosyal Etkileşim + Yapay Zekâ + Gerçek Zamanlı Deneyim
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nasıl Çalışır?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Check-in Yap",
                description: "Bulunduğun yerde check-in yaparak varlığını göster"
              },
              {
                step: "2",
                title: "Çevrendeki Kişileri Gör",
                description: "Aynı lokasyondaki aktif kullanıcıları gerçek zamanlı keşfet"
              },
              {
                step: "3",
                title: "Yapay Zekâ Önerilerini Keşfet",
                description: "Kişiselleştirilmiş öneriler al, şehri yeniden deneyimle"
              }
            ].map((item) => (
              <div key={item.step} className="glass p-8 rounded-2xl hover:bg-white/10 transition">
                <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Layer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Yapay Zekâ Katmanı</h2>
            <p className="text-xl text-slate-300">
              Checkly'nin AI motoru sürekli analiz eder ve öğrenir
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📍", title: "Konum", desc: "Bulunduğun yer" },
              { icon: "⏰", title: "Saat", desc: "Günün zamanı" },
              { icon: "👥", title: "Sosyal Yoğunluk", desc: "Aktif kullanıcılar" },
              { icon: "❤️", title: "Tercihler", desc: "Senin ilgi alanların" }
            ].map((item) => (
              <div key={item.title} className="glass p-6 rounded-xl text-center hover:scale-105 transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Layer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Sosyal Katman</h2>
          <div className="glass p-8 rounded-2xl space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Gerçek Zamanlı Görünürlük</h3>
              <p className="text-slate-300 mb-8">
                Premium üyelikle check-in yaptığında daha uzun süre görünür kal
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { plan: "Premium", time: "5 dakika", color: "from-blue-500 to-cyan-500" },
                { plan: "Gold", time: "10 dakika", color: "from-yellow-500 to-orange-500" },
                { plan: "Diamond", time: "20 dakika", color: "from-purple-500 to-pink-500" }
              ].map((item) => (
                <div key={item.plan} className="glass p-6 rounded-xl text-center border-2 border-white/20">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                    {item.plan}
                  </div>
                  <div className="text-3xl font-bold">{item.time}</div>
                  <div className="text-slate-400 text-sm mt-2">görünürlük süresi</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Premium Paketler</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Premium",
                price: "₺49",
                period: "/ay",
                features: [
                  "5 dakika görünürlük",
                  "Sınırsız check-in",
                  "Temel AI önerileri",
                  "Profil rozeti"
                ],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "Gold",
                price: "₺99",
                period: "/ay",
                features: [
                  "10 dakika görünürlük",
                  "Sınırsız check-in",
                  "Gelişmiş AI önerileri",
                  "Özel profil rozeti",
                  "Öncelikli destek"
                ],
                gradient: "from-yellow-500 to-orange-500",
                popular: true
              },
              {
                name: "Diamond",
                price: "₺199",
                period: "/ay",
                features: [
                  "20 dakika görünürlük",
                  "Sınırsız check-in",
                  "Premium AI önerileri",
                  "Elmas profil rozeti",
                  "VIP destek",
                  "Özel etkinlik erişimi"
                ],
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((plan) => (
              <div
                key={plan.name}
                className={`glass p-8 rounded-2xl relative ${plan.popular ? 'ring-2 ring-yellow-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
                    En Popüler
                  </div>
                )}
                <div className={`text-3xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent mb-2`}>
                  {plan.name}
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold bg-gradient-to-r ${plan.gradient} hover:shadow-lg transition`}>
                  Başla
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Uygulamayı Keşfet</h2>
            <p className="text-xl text-slate-300">
              Checkly ile şehri yeniden deneyimle
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="group relative overflow-hidden rounded-2xl">
                <img 
                  src={`/screenshot${num}.png`} 
                  alt={`Checkly Screenshot ${num}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">Şehri Yeniden Keşfet</h2>
          <p className="text-xl text-slate-300">
            Checkly ile her an, her yerde sosyal deneyimini bir üst seviyeye taşı
          </p>
          <AppStoreButtons />
        </div>
      </section>
    </div>
  );
}
