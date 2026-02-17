"use client";

import { useState } from "react";
import { faqTranslations } from "@/lib/translations";

const t = faqTranslations.en;

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

export default function FAQEN() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold gradient-text">{t.title}</h1>
          <p className="text-xl text-slate-300">{t.subtitle}</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {t.faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 glass p-8 rounded-2xl text-center space-y-4">
          <h2 className="text-2xl font-bold">{t.contactTitle}</h2>
          <p className="text-slate-300">{t.contactDesc}</p>
          <a
            href="mailto:info@trairx.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg transition"
          >
            {t.contactButton}
          </a>
        </div>
      </div>
    </div>
  );
}
