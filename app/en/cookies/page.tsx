export default function CookiesEN() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="glass p-8 rounded-2xl space-y-6 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. What are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device (computer, tablet, phone) when 
              you visit websites. Cookies help websites work more efficiently and improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Types of Cookies We Use</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                <p>
                  Required for the website's basic functions. The site won't work properly without these cookies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance Cookies</h3>
                <p>
                  Help us understand how visitors use the site. Collect information about which 
                  pages are visited most and error messages.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Functionality Cookies</h3>
                <p>
                  Remember your preferences (like language selection) and provide personalized features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Targeting/Advertising Cookies</h3>
                <p>
                  Used to show content and ads relevant to your interests. Prevent the same ad 
                  from being shown repeatedly.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies Used</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-2">Cookie Name</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Duration</th>
                    <th className="text-left py-2">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr>
                    <td className="py-2">session_id</td>
                    <td className="py-2">Essential</td>
                    <td className="py-2">Session</td>
                    <td className="py-2">User session</td>
                  </tr>
                  <tr>
                    <td className="py-2">language</td>
                    <td className="py-2">Functionality</td>
                    <td className="py-2">1 year</td>
                    <td className="py-2">Language preference</td>
                  </tr>
                  <tr>
                    <td className="py-2">analytics</td>
                    <td className="py-2">Performance</td>
                    <td className="py-2">2 years</td>
                    <td className="py-2">Site usage analysis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Managing Cookies</h2>
            <p className="mb-3">
              You can control or delete cookies using your browser settings:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Chrome: Settings → Privacy and security → Cookies</li>
              <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Privacy, search, and services → Cookies</li>
            </ul>
            <p className="mt-3">
              Note: If you disable cookies, some features of the website may not work properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Cookies</h2>
            <p>
              Our website may use third-party cookies for analytics and advertising services. 
              These cookies are subject to the privacy policies of the respective third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Policy Updates</h2>
            <p>
              This cookie policy may be updated from time to time. Changes will be published 
              on this page. We recommend checking regularly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact</h2>
            <p className="mb-2">For questions about our cookie policy:</p>
            <p className="mb-2">TrairX Technology O.Ü</p>
            <p className="mb-2">Estonia</p>
            <p>Email: info@trairx.com</p>
          </section>

          <p className="text-sm text-slate-400 mt-8">
            Last updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
}
