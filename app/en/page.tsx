import Link from "next/link";
import { translations } from "@/lib/translations";
import AppStoreButtons from "@/components/AppStoreButtons";

const t = translations.en.home;

export default function HomeEN() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            {t.hero.title}{" "}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <AppStoreButtons />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">{t.problem.title}</h2>
          <p className="text-xl text-slate-300">
            {t.problem.description}
          </p>
          <div className="glass p-8 rounded-2xl">
            <p className="text-2xl font-semibold gradient-text">
              {t.problem.solution}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t.howItWorks.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", ...t.howItWorks.step1 },
              { step: "2", ...t.howItWorks.step2 },
              { step: "3", ...t.howItWorks.step3 }
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
            <h2 className="text-4xl font-bold mb-4">{t.ai.title}</h2>
            <p className="text-xl text-slate-300">{t.ai.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📍", title: t.ai.location, desc: t.ai.locationDesc },
              { icon: "⏰", title: t.ai.time, desc: t.ai.timeDesc },
              { icon: "👥", title: t.ai.social, desc: t.ai.socialDesc },
              { icon: "❤️", title: t.ai.preferences, desc: t.ai.preferencesDesc }
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
          <h2 className="text-4xl font-bold text-center mb-12">{t.social.title}</h2>
          <div className="glass p-8 rounded-2xl space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">{t.social.subtitle}</h3>
              <p className="text-slate-300 mb-8">{t.social.description}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { plan: "Premium", time: "5 minutes", color: "from-blue-500 to-cyan-500" },
                { plan: "Gold", time: "10 minutes", color: "from-yellow-500 to-orange-500" },
                { plan: "Diamond", time: "20 minutes", color: "from-purple-500 to-pink-500" }
              ].map((item) => (
                <div key={item.plan} className="glass p-6 rounded-xl text-center border-2 border-white/20">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                    {item.plan}
                  </div>
                  <div className="text-3xl font-bold">{item.time}</div>
                  <div className="text-slate-400 text-sm mt-2">{t.social.visibility}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{t.pricing.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Premium",
                price: "$4.99",
                period: t.pricing.perMonth,
                features: t.pricing.premium.features,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "Gold",
                price: "$9.99",
                period: t.pricing.perMonth,
                features: t.pricing.gold.features,
                gradient: "from-yellow-500 to-orange-500",
                popular: true
              },
              {
                name: "Diamond",
                price: "$19.99",
                period: t.pricing.perMonth,
                features: t.pricing.diamond.features,
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((plan) => (
              <div
                key={plan.name}
                className={`glass p-8 rounded-2xl relative ${plan.popular ? 'ring-2 ring-yellow-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
                    {t.pricing.popular}
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
                  {t.pricing.start}
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
            <h2 className="text-4xl font-bold mb-4">Explore the App</h2>
            <p className="text-xl text-slate-300">
              Rediscover your city with Checkly
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
          <h2 className="text-4xl sm:text-5xl font-bold">{t.cta.title}</h2>
          <p className="text-xl text-slate-300">{t.cta.description}</p>
          <AppStoreButtons />
        </div>
      </section>
    </div>
  );
}
