import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon - Checkly",
  description: "Checkly mobile app coming soon to App Store and Google Play!",
};

export default function ComingSoonEN() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="text-8xl mb-8">🚀</div>
        <h1 className="text-5xl sm:text-6xl font-bold gradient-text">Coming Soon!</h1>
        <p className="text-2xl text-slate-300">
          Checkly mobile app will be available on App Store and Google Play soon.
        </p>
        <div className="glass p-8 rounded-2xl space-y-4">
          <p className="text-lg text-slate-300">
            Our app is currently undergoing final testing. Follow us to be notified when it launches!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="mailto:info@trairx.com?subject=Checkly App Notification"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg transition"
            >
              Notify Me
            </a>
            <Link
              href="/en"
              className="px-8 py-3 glass rounded-full font-semibold hover:bg-white/10 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-slate-400">
            For questions:{" "}
            <a href="mailto:info@trairx.com" className="text-blue-400 hover:text-blue-300">
              info@trairx.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
