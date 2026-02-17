export default function PrivacyEN() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-lg">Last Updated: February 2026</p>
        </div>
        
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 space-y-10">
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-3">🔒 Your Privacy Matters</h2>
            <p className="text-slate-200 text-base leading-relaxed">
              TrairX Technology O.Ü is committed to protecting your personal data and privacy at the highest level. 
              This policy explains how your data is collected, used, and protected.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">1. Data Controller</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 space-y-2 text-slate-300 text-base">
              <p><strong className="text-white">Company:</strong> TrairX Technology O.Ü</p>
              <p><strong className="text-white">Country:</strong> Estonia</p>
              <p><strong className="text-white">Email:</strong> info@trairx.com</p>
              <p><strong className="text-white">Website:</strong> www.checkly.tech</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">2. Data We Collect</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">2.1. Identity & Contact Information</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-base ml-4">
                  <li>Name, surname</li>
                  <li>Date of birth (required for 18+ verification)</li>
                  <li>Email address</li>
                  <li>Phone number (optional)</li>
                  <li>Profile photo</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">2.2. Location Data</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-base ml-4">
                  <li>GPS coordinates (during check-in)</li>
                  <li>Check-in history</li>
                  <li>Location sharing preferences</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">2.3. Usage & Technical Data</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-base ml-4">
                  <li>Device information (model, OS, version)</li>
                  <li>IP address</li>
                  <li>App usage statistics</li>
                  <li>Preferences and interests</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">3. How We Use Your Data</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed text-base">
              <p>
                <strong className="text-white">3.1. Service Delivery:</strong> Providing Platform features, check-in functionality, user matching.
              </p>
              <p>
                <strong className="text-white">3.2. Personalization:</strong> AI-powered recommendations, improving user experience.
              </p>
              <p>
                <strong className="text-white">3.3. Security:</strong> Account security, fraud prevention, age verification.
              </p>
              <p>
                <strong className="text-white">3.4. Communication:</strong> Notifications, updates, support services.
              </p>
              <p>
                <strong className="text-white">3.5. Analytics:</strong> Service quality improvement, usage statistics.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">4. Location Data Processing</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed text-base">
              <p>
                <strong className="text-white">4.1.</strong> Location data is collected only when you check-in.
              </p>
              <p>
                <strong className="text-white">4.2.</strong> Your location is visible to other users during your premium membership period (5-20 minutes).
              </p>
              <p>
                <strong className="text-white">4.3.</strong> After the period expires, your real-time location is no longer visible.
              </p>
              <p>
                <strong className="text-white">4.4.</strong> You can disable location sharing anytime in app settings.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">5. Data Sharing</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">5.1. Service Providers</h3>
                <p className="text-slate-300 text-base mb-3">Your data may be shared with:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-base ml-4">
                  <li>Cloud hosting services (data storage)</li>
                  <li>Payment processors (Apple, Google)</li>
                  <li>Analytics services</li>
                  <li>Email service providers</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-3">5.2. No Data Sales</h3>
                <p className="text-slate-200 text-base font-semibold">
                  Your personal data is never sold or rented to third parties under any circumstances.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">6. Data Security</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed text-base">
              <p>We use industry-standard security measures:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL/TLS encryption (data transmission)</li>
                <li>Encrypted data storage</li>
                <li>Regular security audits</li>
                <li>Access control and authorization</li>
                <li>Firewalls and monitoring systems</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">7. Your Rights (GDPR)</h2>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 space-y-3">
              <p className="text-slate-200 text-base">Under GDPR, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 text-base ml-4">
                <li><strong className="text-white">Right to Access:</strong> Know what data we process</li>
                <li><strong className="text-white">Right to Rectification:</strong> Correct inaccurate data</li>
                <li><strong className="text-white">Right to Erasure:</strong> Request data deletion ("Right to be Forgotten")</li>
                <li><strong className="text-white">Right to Portability:</strong> Receive your data in structured format</li>
                <li><strong className="text-white">Right to Object:</strong> Object to data processing</li>
                <li><strong className="text-white">Right to Restriction:</strong> Restrict data processing</li>
              </ul>
              <p className="text-slate-200 text-base mt-4">
                To exercise these rights, contact info@trairx.com. Requests will be answered within 30 days.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">8. Data Retention</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed text-base">
              <p>
                <strong className="text-white">8.1.</strong> Data is retained as long as necessary for processing purposes.
              </p>
              <p>
                <strong className="text-white">8.2.</strong> When you delete your account, data is permanently removed within 30 days.
              </p>
              <p>
                <strong className="text-white">8.3.</strong> Some data may be retained longer due to legal obligations.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">9. Children's Privacy</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <p className="text-slate-200 text-base leading-relaxed">
                <strong className="text-white">Checkly is not designed for individuals under 18.</strong> We do not knowingly 
                collect data from users under 18. If a user under 18 is detected, their account will be immediately terminated 
                and data deleted.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">10. Contact</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed text-base">
              <p>For privacy-related questions, requests, or complaints:</p>
              <div className="bg-slate-800/50 rounded-xl p-6 space-y-2">
                <p><strong className="text-white">Data Controller:</strong> TrairX Technology O.Ü</p>
                <p><strong className="text-white">Country:</strong> Estonia</p>
                <p><strong className="text-white">Email:</strong> info@trairx.com</p>
                <p><strong className="text-white">Website:</strong> www.checkly.tech</p>
              </div>
            </div>
          </section>

          <div className="bg-slate-800/50 rounded-xl p-6 text-center">
            <p className="text-slate-400 text-sm">
              Last Updated: February 2026 | Version 1.0
            </p>
            <p className="text-slate-500 text-xs mt-2">
              This policy is GDPR compliant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
