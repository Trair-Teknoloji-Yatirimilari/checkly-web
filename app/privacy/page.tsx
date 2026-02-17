export default function Privacy() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası</h1>
        
        <div className="glass p-8 rounded-2xl space-y-6 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Toplanan Veriler</h2>
            <p className="mb-3">Checkly kullanırken aşağıdaki veriler toplanır:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Konum bilgileri (check-in için)</li>
              <li>Profil bilgileri (ad, e-posta, fotoğraf)</li>
              <li>Kullanım verileri (tercihler, etkileşimler)</li>
              <li>Cihaz bilgileri (model, işletim sistemi)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Verilerin Kullanımı</h2>
            <p className="mb-3">Toplanan veriler şu amaçlarla kullanılır:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Hizmetin sunulması ve geliştirilmesi</li>
              <li>Kişiselleştirilmiş öneriler oluşturulması</li>
              <li>Kullanıcı deneyiminin iyileştirilmesi</li>
              <li>Güvenlik ve dolandırıcılık önleme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Konum Verileri</h2>
            <p>
              Konum verileriniz yalnızca check-in yaptığınızda toplanır ve premium üyelik süreniz 
              boyunca diğer kullanıcılara gösterilir. Check-in süresi dolduktan sonra konumunuz 
              artık görünmez hale gelir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Veri Paylaşımı</h2>
            <p className="mb-3">Verileriniz şu durumlarda paylaşılabilir:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Yasal zorunluluklar</li>
              <li>Hizmet sağlayıcılar (sunucu, analitik)</li>
              <li>Kullanıcı onayı ile</li>
            </ul>
            <p className="mt-3">Verileriniz üçüncü taraflara satılmaz.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Veri Güvenliği</h2>
            <p>
              Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanılır. 
              Ancak internet üzerinden veri iletiminin %100 güvenli olduğu garanti edilemez.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Kullanıcı Hakları</h2>
            <p className="mb-3">GDPR ve KVKK kapsamında haklarınız:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Verilerinize erişim hakkı</li>
              <li>Verilerin düzeltilmesi hakkı</li>
              <li>Verilerin silinmesi hakkı</li>
              <li>Veri taşınabilirliği hakkı</li>
              <li>İşlemeye itiraz hakkı</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Çerezler</h2>
            <p>
              Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanır. 
              Detaylı bilgi için Çerez Politikasını inceleyiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Çocukların Gizliliği</h2>
            <p>
              Checkly, 13 yaşın altındaki çocuklara yönelik değildir. Bilerek 13 yaş altı 
              çocuklardan veri toplamıyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. İletişim</h2>
            <p className="mb-2">Gizlilik ile ilgili sorularınız için:</p>
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
