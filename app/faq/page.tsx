"use client";

import { useState } from "react";
import { Metadata } from "next";

const faqs = [
  {
    question: "Checkly bir flört uygulaması mı?",
    answer: "Hayır, Checkly öncelikle konum tabanlı sosyal keşif platformudur. Amacımız insanların bulundukları yerde gerçek zamanlı sosyal yoğunluğu görmelerini ve yapay zekâ destekli öneriler almalarını sağlamak. Sosyal etkileşim özelliği var ancak bu bir flört uygulaması değil, şehri keşfetme ve yeni deneyimler yaşama platformudur."
  },
  {
    question: "Konumum gizli mi? Gizliliğim nasıl korunuyor?",
    answer: "Evet, gizliliğiniz bizim önceliğimiz. Konum bilginiz end-to-end şifreleme ile korunur. Check-in yaptığınızda sadece o anki konumunuz paylaşılır ve belirlediğiniz süre sonunda otomatik olarak silinir. İstediğiniz zaman konum paylaşımını durdurabilir, gizli moda geçebilir veya belirli kullanıcıları engelleyebilirsiniz. Tüm verileriniz KVKK uyumlu şekilde işlenir."
  },
  {
    question: "Yapay zekâ nasıl öneri yapıyor?",
    answer: "Checkly'nin AI motoru dört ana faktörü analiz eder: 1) Bulunduğunuz konum, 2) Günün saati, 3) O andaki sosyal yoğunluk, 4) Sizin geçmiş tercihleriniz ve ilgi alanlarınız. Bu verileri birleştirerek size özel, bağlama duyarlı öneriler sunar. Sistem sürekli öğrenir ve zamanla önerileri daha da kişiselleşir."
  },
  {
    question: "Premium üyelik ne sağlar?",
    answer: "Premium üyelikle check-in yaptığınızda daha uzun süre görünür kalırsınız. Premium: 5 dakika, Gold: 10 dakika, Diamond: 20 dakika görünürlük süresi. Ayrıca gelişmiş AI önerileri, özel profil rozetleri, öncelikli destek ve özel etkinliklere erişim gibi avantajlar elde edersiniz. Ücretsiz kullanıcılar da temel özelliklere tam erişime sahiptir."
  },
  {
    question: "Check-in yaptığımda ne olur?",
    answer: "Check-in yaptığınızda bulunduğunuz konum haritada görünür hale gelir ve aynı bölgedeki diğer kullanıcılar sizi görebilir. Yapay zekâ sistemi devreye girer ve size o an için en uygun önerileri sunar. Premium üyeliğinize göre belirlenen süre boyunca aktif kalırsınız. Süre bittiğinde otomatik olarak haritadan kaldırılırsınız."
  },
  {
    question: "Hangi şehirlerde kullanılabilir?",
    answer: "Checkly şu anda tüm dünyada kullanılabilir. Ancak sosyal yoğunluk ve AI önerileri kullanıcı sayısına bağlı olarak değişir. Büyük şehirlerde daha zengin bir deneyim sunarız. Sürekli olarak yeni şehirler ve bölgeler ekliyoruz."
  },
  {
    question: "Uygulama ücretsiz mi?",
    answer: "Evet, Checkly'nin temel özellikleri tamamen ücretsizdir. Check-in yapabilir, çevrenizdeki kullanıcıları görebilir ve temel AI önerilerinden faydalanabilirsiniz. Premium paketler ise daha uzun görünürlük süresi ve gelişmiş özellikler sunar."
  },
  {
    question: "Verilerim nasıl kullanılıyor?",
    answer: "Verileriniz sadece size daha iyi hizmet sunmak için kullanılır. Konum verileriniz AI önerilerini geliştirmek, sosyal eşleşmeleri optimize etmek ve güvenliği sağlamak için işlenir. Verilerinizi asla üçüncü taraflarla paylaşmayız. KVKK ve GDPR uyumlu çalışırız."
  },
  {
    question: "Nasıl güvenli kalabilirim?",
    answer: "Checkly'de güvenliğiniz için birçok özellik var: İstenmeyen kullanıcıları engelleyebilir, rahatsız edici içerikleri raporlayabilir, konum paylaşımını istediğiniz zaman durdurabilirsiniz. Ayrıca tüm kullanıcılar doğrulanır ve topluluk kurallarına uymayan hesaplar askıya alınır."
  },
  {
    question: "Checkly'yi kimler yapıyor?",
    answer: "Checkly, TrairX Technology O.Ü tarafından geliştirilmiş ve sunulan bir üründür. Deneyimli bir yazılım ve yapay zekâ ekibi tarafından sürekli olarak geliştirilmektedir. Sorularınız için info@trairx.com adresinden bize ulaşabilirsiniz."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center hover:bg-white/5 transition"
      >
        <span className="font-semibold text-left text-lg">{question}</span>
        <svg
          className={`w-6 h-6 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-slate-300 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold gradient-text">Sıkça Sorulan Sorular</h1>
          <p className="text-xl text-slate-300">
            Checkly hakkında merak ettikleriniz
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 glass p-8 rounded-2xl text-center space-y-4">
          <h2 className="text-2xl font-bold">Başka sorunuz mu var?</h2>
          <p className="text-slate-300">
            Cevabını bulamadığınız sorular için bizimle iletişime geçin
          </p>
          <a
            href="mailto:info@trairx.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg transition"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>
    </div>
  );
}
