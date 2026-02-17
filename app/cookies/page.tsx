export default function Cookies() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Çerez Politikası</h1>
        
        <div className="glass p-8 rounded-2xl space-y-6 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Çerez Nedir?</h2>
            <p>
              Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet, telefon) 
              kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin daha verimli çalışmasını 
              ve kullanıcı deneyiminin iyileştirilmesini sağlar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Kullandığımız Çerez Türleri</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Zorunlu Çerezler</h3>
                <p>
                  Web sitesinin temel işlevlerini yerine getirmesi için gereklidir. 
                  Bu çerezler olmadan site düzgün çalışmaz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Performans Çerezleri</h3>
                <p>
                  Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur. 
                  Hangi sayfaların en çok ziyaret edildiğini ve hata mesajlarını toplar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">İşlevsellik Çerezleri</h3>
                <p>
                  Tercihlerinizi (dil seçimi gibi) hatırlar ve kişiselleştirilmiş 
                  özellikler sunar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Hedefleme/Reklam Çerezleri</h3>
                <p>
                  İlgi alanlarınıza uygun içerik ve reklamlar göstermek için kullanılır. 
                  Aynı reklamın tekrar gösterilmesini engeller.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Kullanılan Çerezler</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-2">Çerez Adı</th>
                    <th className="text-left py-2">Tür</th>
                    <th className="text-left py-2">Süre</th>
                    <th className="text-left py-2">Amaç</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr>
                    <td className="py-2">session_id</td>
                    <td className="py-2">Zorunlu</td>
                    <td className="py-2">Oturum</td>
                    <td className="py-2">Kullanıcı oturumu</td>
                  </tr>
                  <tr>
                    <td className="py-2">language</td>
                    <td className="py-2">İşlevsellik</td>
                    <td className="py-2">1 yıl</td>
                    <td className="py-2">Dil tercihi</td>
                  </tr>
                  <tr>
                    <td className="py-2">analytics</td>
                    <td className="py-2">Performans</td>
                    <td className="py-2">2 yıl</td>
                    <td className="py-2">Site kullanım analizi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Çerezleri Kontrol Etme</h2>
            <p className="mb-3">
              Çerezleri kontrol etmek veya silmek için tarayıcı ayarlarınızı kullanabilirsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Chrome: Ayarlar → Gizlilik ve güvenlik → Çerezler</li>
              <li>Firefox: Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</li>
              <li>Safari: Tercihler → Gizlilik → Çerezler</li>
              <li>Edge: Ayarlar → Gizlilik, arama ve hizmetler → Çerezler</li>
            </ul>
            <p className="mt-3">
              Not: Çerezleri devre dışı bırakırsanız, web sitesinin bazı özellikleri 
              düzgün çalışmayabilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Üçüncü Taraf Çerezleri</h2>
            <p>
              Web sitemizde, analitik ve reklam hizmetleri için üçüncü taraf çerezler 
              kullanılabilir. Bu çerezler, ilgili üçüncü tarafların gizlilik politikalarına tabidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Politika Güncellemeleri</h2>
            <p>
              Bu çerez politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada 
              yayınlanacaktır. Düzenli olarak kontrol etmenizi öneririz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. İletişim</h2>
            <p className="mb-2">Çerez politikası hakkında sorularınız için:</p>
            <p className="mb-2">TrairX Technology O.Ü</p>
            <p className="mb-2">Estonya</p>
            <p>E-posta: info@trairx.com</p>
          </section>

          <p className="text-sm text-slate-400 mt-8">
            Son güncelleme: Şubat 2026
          </p>
        </div>
      </div>
    </div>
  );
}
