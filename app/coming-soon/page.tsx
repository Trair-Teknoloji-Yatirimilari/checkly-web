import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çok Yakında - Checkly",
  description: "Checkly mobil uygulaması çok yakında App Store ve Google Play'de!",
};

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="text-8xl mb-8">🚀</div>
        <h1 className="text-5xl sm:text-6xl font-bold gradient-text">Çok Yakında!</h1>
        <p className="text-2xl text-slate-300">
          Checkly mobil uygulaması yakında App Store ve Google Play'de yayınlanacak.
        </p>
        <div className="glass p-8 rounded-2xl space-y-4">
          <p className="text-lg text-slate-300">
            Uygulamamız şu anda son testlerden geçiyor. Yayınlandığında haberdar olmak için bizi takip edin!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="mailto:info@trairx.com?subject=Checkly Uygulama Bildirimi"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg transition"
            >
              Haberdar Et
            </a>
            <Link
              href="/"
              className="px-8 py-3 glass rounded-full font-semibold hover:bg-white/10 transition"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
        <div className="pt-8">
          <p className="text-slate-400">
            Sorularınız için:{" "}
            <a href="mailto:info@trairx.com" className="text-blue-400 hover:text-blue-300">
              info@trairx.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
