import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda - Checkly",
  description: "Checkly'nin vizyonu ve şehirleri dijital olarak görünür kılma amacı hakkında bilgi edinin.",
};

export default function About() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold gradient-text">Hakkımızda</h1>
          <p className="text-xl text-slate-300">
            Şehirleri dijital olarak görünür kılıyoruz
          </p>
        </div>

        {/* Vision */}
        <section className="glass p-8 rounded-2xl space-y-6">
          <h2 className="text-3xl font-bold">Vizyonumuz</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Checkly, şehir yaşamını daha sosyal, daha keşfedilebilir ve daha anlamlı hale getirmek için tasarlandı. 
            Geleneksel harita uygulamaları size sadece mekanları gösterir. Sosyal ağlar ise konum bağlamından yoksundur. 
            Biz bu ikisini birleştirip üzerine yapay zekâ katmanı ekledik.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Amacımız, her kullanıcının bulunduğu yerde gerçek zamanlı sosyal yoğunluğu görmesini ve 
            yapay zekâ destekli kişiselleştirilmiş öneriler almasını sağlamak.
          </p>
        </section>

        {/* Mission */}
        <section className="glass p-8 rounded-2xl space-y-6">
          <h2 className="text-3xl font-bold">Misyonumuz</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Gerçek Zamanlı Sosyal Keşif</h3>
                <p className="text-slate-300">
                  Kullanıcıların bulundukları yerde aynı anda kim olduğunu görmelerini sağlıyoruz.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🤖</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Yapay Zekâ ile Kişiselleştirme</h3>
                <p className="text-slate-300">
                  Her kullanıcıya özel, bağlama duyarlı öneriler sunuyoruz.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🌆</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Şehirleri Dijitalleştirme</h3>
                <p className="text-slate-300">
                  Fiziksel mekanları dijital sosyal deneyimlerle zenginleştiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="glass p-8 rounded-2xl space-y-6">
          <h2 className="text-3xl font-bold">Teknolojimiz</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Checkly, modern yapay zekâ algoritmaları ve gerçek zamanlı veri işleme teknolojileri üzerine inşa edilmiştir. 
            Sistemimiz konum, zaman, sosyal yoğunluk ve kullanıcı tercihlerini analiz ederek 
            her kullanıcıya özgü deneyimler sunar.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Gerçek zamanlı konum işleme",
              "Yapay zekâ öneri motoru",
              "Sosyal graf analizi",
              "Kişiselleştirilmiş içerik"
            ].map((tech) => (
              <div key={tech} className="flex items-center gap-3 glass p-4 rounded-lg">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Company Info */}
        <section className="glass p-8 rounded-2xl space-y-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <h2 className="text-3xl font-bold">Şirket Bilgisi</h2>
          <div className="space-y-3">
            <p className="text-lg">
              <span className="text-slate-400">Şirket:</span>{" "}
              <span className="font-semibold">TrairX Technology O.Ü</span>
            </p>
            <p className="text-lg">
              <span className="text-slate-400">Ürün:</span>{" "}
              <span className="font-semibold">Checkly</span>
            </p>
            <p className="text-lg">
              <span className="text-slate-400">İletişim:</span>{" "}
              <a href="mailto:info@trairx.com" className="font-semibold text-blue-400 hover:text-blue-300 transition">
                info@trairx.com
              </a>
            </p>
          </div>
          <p className="text-slate-300 italic">
            Checkly, TrairX Technology O.Ü tarafından geliştirilmiş ve sunulan bir üründür.
          </p>
        </section>

        {/* Values */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Değerlerimiz</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🔒", title: "Gizlilik", desc: "Verileriniz güvende" },
              { icon: "⚡", title: "Hız", desc: "Gerçek zamanlı deneyim" },
              { icon: "🎨", title: "İnovasyon", desc: "Sürekli gelişim" }
            ].map((value) => (
              <div key={value.title} className="glass p-6 rounded-xl hover:scale-105 transition">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
