import { Metadata } from "next";
import AppStoreButtons from "@/components/AppStoreButtons";

export const metadata: Metadata = {
  title: "Features - Checkly",
  description: "Checkly's real-time check-in, AI recommendation engine, and premium visibility features.",
};

export default function FeaturesEN() {
  const features = [
    {
      icon: "📍",
      title: "Real-Time Check-in System",
      description: "Check-in instantly at your location and show your presence. The system automatically detects your location and makes you visible on the map.",
      details: [
        "Automatic location detection",
        "Quick check-in process",
        "Check-in history",
        "Location-based statistics"
      ]
    },
    {
      icon: "🤖",
      title: "AI Recommendation Engine",
      description: "Get personalized recommendations with advanced AI algorithms. The system analyzes your preferences, time, and social density.",
      details: [
        "Personalized venue recommendations",
        "Time-based smart suggestions",
        "Social density analysis",
        "Continuously learning system"
      ]
    },
    {
      icon: "👥",
      title: "Location-Based Social Matching",
      description: "See users at the same location, meet new people. Get matching suggestions based on common interests.",
      details: [
        "Real-time user visibility",
        "Common interest detection",
        "Distance-based filtering",
        "Secure matching system"
      ]
    },
    {
      icon: "🎯",
      title: "Smart Category System",
      description: "Categorized discovery experience based on interests. Special AI recommendations for each category.",
      details: [
        "☕ Coffee - Best cafes",
        "🎉 Events - Live events",
        "🍽️ Food - Popular restaurants",
        "🎨 Culture - Museums and galleries",
        "🛍️ Shopping - Trending places"
      ]
    },
    {
      icon: "⭐",
      title: "Premium Visibility System",
      description: "Extend check-in duration with premium membership, reach more people. Different visibility times with different plans.",
      details: [
        "Premium: 5 minutes visibility",
        "Gold: 10 minutes visibility",
        "Diamond: 20 minutes visibility",
        "Special profile badges"
      ]
    },
    {
      icon: "🔒",
      title: "Privacy and Security",
      description: "Your data is encrypted and secure. Control location sharing whenever you want.",
      details: [
        "End-to-end encryption",
        "Location hiding option",
        "Block and report",
        "GDPR compliant system"
      ]
    },
    {
      icon: "📊",
      title: "Personal Statistics",
      description: "View your check-in history, most visited places, and social interaction statistics.",
      details: [
        "Check-in map",
        "Favorite places",
        "Social interaction graph",
        "Monthly activity report"
      ]
    },
    {
      icon: "🌐",
      title: "Multi-Language Support",
      description: "Full support in Turkish and English. More languages coming soon.",
      details: [
        "Turkish interface",
        "English interface",
        "Automatic language detection",
        "Easy language switching"
      ]
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Get notified instantly when something interesting happens around you. AI-powered notification system.",
      details: [
        "Nearby event notifications",
        "Friend check-in notifications",
        "Special recommendation notifications",
        "Customizable notifications"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold gradient-text">Features</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Checkly offers powerful features that combine location-based social discovery with artificial intelligence
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
          <h2 className="text-3xl font-bold mb-6">Technology Infrastructure</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Checkly runs on modern technologies and powerful infrastructure
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Real-Time Data", icon: "⚡" },
              { name: "AI/ML Algorithms", icon: "🧠" },
              { name: "Cloud Infrastructure", icon: "☁️" },
              { name: "Secure API", icon: "🔐" }
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
          <h2 className="text-3xl font-bold">Explore All Features</h2>
          <p className="text-slate-300">Download Checkly to access all features</p>
          <AppStoreButtons className="justify-center" />
        </div>
      </div>
    </div>
  );
}
