export default function ContactEN() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="glass p-8 rounded-2xl space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏢</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Company</h3>
                  <p className="text-slate-300">TrairX Technology O.Ü</p>
                  <p className="text-slate-300">Estonia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:info@trairx.com" className="text-blue-400 hover:text-blue-300">
                    info@trairx.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🌐</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Website</h3>
                  <a href="https://www.checkly.tech" className="text-blue-400 hover:text-blue-300">
                    www.checkly.tech
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-600">
              <h3 className="font-semibold text-lg mb-3">Support Hours</h3>
              <p className="text-slate-300">Monday - Friday: 09:00 - 18:00</p>
              <p className="text-slate-300">Saturday - Sunday: Closed</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-6">Quick Links</h2>
            
            <div className="space-y-3">
              <a href="/en/about" className="block p-3 rounded-lg hover:bg-white/5 transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">ℹ️</span>
                  <span>About Us</span>
                </div>
              </a>

              <a href="/en/faq" className="block p-3 rounded-lg hover:bg-white/5 transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">❓</span>
                  <span>FAQ</span>
                </div>
              </a>

              <a href="/en/terms" className="block p-3 rounded-lg hover:bg-white/5 transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <span>Terms of Service</span>
                </div>
              </a>

              <a href="/en/privacy" className="block p-3 rounded-lg hover:bg-white/5 transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔒</span>
                  <span>Privacy Policy</span>
                </div>
              </a>

              <a href="/en/cookies" className="block p-3 rounded-lg hover:bg-white/5 transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🍪</span>
                  <span>Cookie Policy</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
