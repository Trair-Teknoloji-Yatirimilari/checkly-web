import { Metadata } from "next";
import { aboutTranslations } from "@/lib/translations";

export const metadata: Metadata = {
  title: "About - Checkly",
  description: "Learn about Checkly's vision and mission to make cities digitally visible.",
};

const t = aboutTranslations.en;

export default function AboutEN() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold gradient-text">{t.title}</h1>
          <p className="text-xl text-slate-300">{t.subtitle}</p>
        </div>

        {/* Vision */}
        <section className="glass p-8 rounded-2xl space-y-6">
          <h2 className="text-3xl font-bold">{t.vision.title}</h2>
          <p className="text-lg text-slate-300 leading-relaxed">{t.vision.p1}</p>
          <p className="text-lg text-slate-300 leading-relaxed">{t.vision.p2}</p>
        </section>

        {/* Mission */}
        <section className="glass p-8 rounded-2xl space-y-6">
          <h2 className="text-3xl font-bold">{t.mission.title}</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.mission.realtime.title}</h3>
                <p className="text-slate-300">{t.mission.realtime.desc}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🤖</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.mission.ai.title}</h3>
                <p className="text-slate-300">{t.mission.ai.desc}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🌆</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t.mission.digital.title}</h3>
                <p className="text-slate-300">{t.mission.digital.desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="glass p-8 rounded-2xl space-y-6">
          <h2 className="text-3xl font-bold">{t.technology.title}</h2>
          <p className="text-lg text-slate-300 leading-relaxed">{t.technology.description}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.technology.features.map((tech) => (
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
          <h2 className="text-3xl font-bold">{t.company.title}</h2>
          <div className="space-y-3">
            <p className="text-lg">
              <span className="text-slate-400">{t.company.companyLabel}</span>{" "}
              <span className="font-semibold">{t.company.companyName}</span>
            </p>
            <p className="text-lg">
              <span className="text-slate-400">{t.company.productLabel}</span>{" "}
              <span className="font-semibold">{t.company.productName}</span>
            </p>
            <p className="text-lg">
              <span className="text-slate-400">{t.company.contactLabel}</span>{" "}
              <a href="mailto:info@trairx.com" className="font-semibold text-blue-400 hover:text-blue-300 transition">
                info@trairx.com
              </a>
            </p>
          </div>
          <p className="text-slate-300 italic">{t.company.note}</p>
        </section>

        {/* Values */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold">{t.values.title}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🔒", ...t.values.privacy },
              { icon: "⚡", ...t.values.speed },
              { icon: "🎨", ...t.values.innovation }
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
