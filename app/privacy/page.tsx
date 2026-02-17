export default function Privacy() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Gizlilik Politikası</h1>
          <p className="text-slate-400 text-lg">Son Güncelleme: Şubat 2026</p>
        </div>
        
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 space-y-10">
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-3">🔒 Gizliliğiniz Bizim İçin Önemli</h2>
            <p className="text-slate-200 text-base leading-relaxed">
              TrairX Technology O.Ü olarak, kişisel verilerinizin güvenliğini ve gizliliğini en üst düzeyde 
              korumayı taahhüt ediyoruz. Bu politika, verilerinizin nasıl toplandığını, kullanıldığını ve 
              korunduğunu açıklamaktadır.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">1. Veri Sorumlusu</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 space-y-2 text-slate-300">
              <p className="text-base"><strong className="text-white">Şirket Adı:</strong> TrairX Technology O.Ü</p>
              <p className="text-base"><strong className="text-white">Kayıtlı Ülke:</strong> Estonya</p>
              <p className="text-base"><strong className="text-white">E-posta:</strong> info@trairx.com</p>
              <p className="text-base"><strong className="text-white">Web Sitesi:</strong> www.checkly.tech</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">2. Toplanan Kişisel Veriler</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">2.1. Kimlik ve İletişim Bilgileri</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-base ml-4">
                  <li>Ad, soyad</li>
                  <li>Doğum tarihi (18+ yaş doğrulaması için zorunlu)</li>
                  <li>E-posta adresi</li>
                  <li>Telefon numarası (isteğe bağlı)</li>
                  <li>Profil fotoğrafı</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">2.2. Konum Verileri</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-base ml-4">
                  <li>GPS koordinatları (check-in sırasında)</li>
                  <li>Check-in geçmişi</li>
                  <li>Konum paylaşım tercihleri</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">2.3. Kullanım ve Teknik Veriler</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-base ml-4">
                  <li>Cihaz bilgileri (model, işletim sistemi, sürüm)</li>
                  <li>IP adresi</li>
                  <li>Uygulama kullanım istatistikleri</li>
                  <li>Tercihler ve ilgi alanları</li>
                  <li>Etkileşim verileri (beğeniler, yorumlar)</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">2.4. Ödeme Bilgileri</h3>
                <p className="text-slate-300 text-base">
                  Ödeme bilgileri Apple App Store veya Google Play Store tarafından işlenir. 
                  Kredi kartı bilgileriniz sunucularımızda saklanmaz.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">3. Verilerin İşlenme Amaçları</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <p className="text-base">
                <strong className="text-white">3.1. Hizmet Sunumu:</strong> Platform'un temel işlevlerinin sağlanması, 
                check-in özelliğinin çalıştırılması, kullanıcı eşleştirmesi.
              </p>
              <p className="text-base">
                <strong className="text-white">3.2. Kişiselleştirme:</strong> Yapay zeka destekli önerilerin oluşturulması, 
                kullanıcı deneyiminin iyileştirilmesi.
              </p>
              <p className="text-base">
                <strong className="text-white">3.3. Güvenlik:</strong> Hesap güvenliğinin sağlanması, dolandırıcılık önleme, 
                yaş doğrulaması.
              </p>
              <p className="text-base">
                <strong className="text-white">3.4. İletişim:</strong> Bildirimler, güncellemeler, destek hizmetleri.
              </p>
              <p className="text-base">
                <strong className="text-white">3.5. Analiz:</strong> Hizmet kalitesinin artırılması, kullanım istatistikleri.
              </p>
              <p className="text-base">
                <strong className="text-white">3.6. Yasal Yükümlülükler:</strong> Kanuni gerekliliklerin yerine getirilmesi.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">4. Konum Verilerinin İşlenmesi</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <p className="text-base">
                <strong className="text-white">4.1.</strong> Konum verileri yalnızca check-in yaptığınızda toplanır.
              </p>
              <p className="text-base">
                <strong className="text-white">4.2.</strong> Check-in sırasında konumunuz, premium üyelik süreniz boyunca 
                (5-20 dakika) diğer kullanıcılara görünür olur.
              </p>
              <p className="text-base">
                <strong className="text-white">4.3.</strong> Süre dolduktan sonra gerçek zamanlı konumunuz artık görünmez, 
                ancak check-in geçmişiniz profil ayarlarınıza göre saklanabilir.
              </p>
              <p className="text-base">
                <strong className="text-white">4.4.</strong> Konum paylaşımını istediğiniz zaman uygulama ayarlarından 
                kapatabilirsiniz.
              </p>
              <p className="text-base">
                <strong className="text-white">4.5.</strong> Konum verileri, yapay zeka önerileri için anonim olarak 
                analiz edilebilir.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">5. Veri Paylaşımı ve Aktarımı</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">5.1. Üçüncü Taraf Hizmet Sağlayıcılar</h3>
                <p className="text-slate-300 text-base mb-3">Verileriniz aşağıdaki hizmet sağlayıcılarla paylaşılabilir:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-base ml-4">
                  <li>Bulut sunucu hizmetleri (veri depolama)</li>
                  <li>Ödeme işlemcileri (Apple, Google)</li>
                  <li>Analitik hizmetleri (kullanım istatistikleri)</li>
                  <li>E-posta hizmet sağlayıcıları</li>
                </ul>
                <p className="text-slate-300 text-base mt-3">
                  Tüm hizmet sağlayıcılar, verilerinizi korumak için sözleşmeye bağlıdır.
                </p>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">5.2. Yasal Zorunluluklar</h3>
                <p className="text-slate-300 text-base">
                  Verileriniz, yasal mercilerin talebi, mahkeme kararı veya yasal yükümlülükler 
                  çerçevesinde paylaşılabilir.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-3">5.3. Veri Satışı</h3>
                <p className="text-slate-200 text-base font-semibold">
                  Kişisel verileriniz hiçbir koşulda üçüncü taraflara satılmaz veya kiralanmaz.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">6. Veri Güvenliği</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <p className="text-base">
                <strong className="text-white">6.1.</strong> Verilerinizi korumak için endüstri standardı güvenlik 
                önlemleri kullanılır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base ml-4">
                <li>SSL/TLS şifreleme (veri iletimi)</li>
                <li>Şifrelenmiş veri depolama</li>
                <li>Düzenli güvenlik denetimleri</li>
                <li>Erişim kontrolü ve yetkilendirme</li>
                <li>Güvenlik duvarları ve izleme sistemleri</li>
              </ul>
              <p className="text-base mt-3">
                <strong className="text-white">6.2.</strong> Ancak, internet üzerinden veri iletiminin %100 güvenli 
                olduğu garanti edilemez. Hesap güvenliğiniz için güçlü şifre kullanmanız önerilir.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">7. Kullanıcı Hakları (GDPR & KVKK)</h2>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 space-y-3">
              <p className="text-slate-200 text-base">
                GDPR ve KVKK kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 text-base ml-4">
                <li><strong className="text-white">Erişim Hakkı:</strong> Hangi verilerinizin işlendiğini öğrenme</li>
                <li><strong className="text-white">Düzeltme Hakkı:</strong> Yanlış verilerin düzeltilmesini isteme</li>
                <li><strong className="text-white">Silme Hakkı:</strong> Verilerinizin silinmesini talep etme ("Unutulma Hakkı")</li>
                <li><strong className="text-white">Taşınabilirlik Hakkı:</strong> Verilerinizi yapılandırılmış formatta alma</li>
                <li><strong className="text-white">İtiraz Hakkı:</strong> Veri işlemeye itiraz etme</li>
                <li><strong className="text-white">Kısıtlama Hakkı:</strong> Veri işlemenin kısıtlanmasını isteme</li>
              </ul>
              <p className="text-slate-200 text-base mt-4">
                Bu haklarınızı kullanmak için info@trairx.com adresine başvurabilirsiniz. 
                Başvurularınız 30 gün içinde yanıtlanacaktır.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">8. Veri Saklama Süresi</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <p className="text-base">
                <strong className="text-white">8.1.</strong> Kişisel verileriniz, işleme amacının gerektirdiği süre 
                boyunca saklanır.
              </p>
              <p className="text-base">
                <strong className="text-white">8.2.</strong> Hesabınızı sildiğinizde, verileriniz 30 gün içinde 
                sistemlerimizden kalıcı olarak silinir.
              </p>
              <p className="text-base">
                <strong className="text-white">8.3.</strong> Yasal saklama yükümlülükleri nedeniyle bazı veriler 
                (ödeme kayıtları, yasal belgeler) daha uzun süre saklanabilir.
              </p>
              <p className="text-base">
                <strong className="text-white">8.4.</strong> Anonim hale getirilmiş veriler, istatistiksel analiz 
                için süresiz saklanabilir.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">9. Çocukların Gizliliği</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <p className="text-slate-200 text-base leading-relaxed">
                <strong className="text-white">Checkly, 18 yaşın altındaki bireyler için tasarlanmamıştır.</strong> 
                Bilerek 18 yaş altı kullanıcılardan veri toplamıyoruz. 18 yaşından küçük bir kullanıcı tespit 
                edilirse, hesabı derhal kapatılır ve verileri silinir. Ebeveynler, çocuklarının uygulamayı 
                kullandığını fark ederlerse derhal bize bildirmelidir.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">10. Çerezler ve İzleme Teknolojileri</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <p className="text-base">
                Web sitemiz ve uygulamamız, kullanıcı deneyimini iyileştirmek için çerezler ve 
                benzeri teknolojiler kullanır. Detaylı bilgi için Çerez Politikamızı inceleyiniz.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">11. Politika Değişiklikleri</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <p className="text-base">
                <strong className="text-white">11.1.</strong> Bu Gizlilik Politikası zaman zaman güncellenebilir.
              </p>
              <p className="text-base">
                <strong className="text-white">11.2.</strong> Önemli değişiklikler, uygulama içi bildirim veya 
                e-posta ile size bildirilecektir.
              </p>
              <p className="text-base">
                <strong className="text-white">11.3.</strong> Güncellenmiş politika, yayınlandığı tarihte yürürlüğe girer.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-3">12. İletişim</h2>
            <div className="space-y-3 text-slate-300 leading-relaxed">
              <p className="text-base">
                Gizlilik ile ilgili sorularınız, talepleriniz veya şikayetleriniz için:
              </p>
              <div className="bg-slate-800/50 rounded-xl p-6 space-y-2">
                <p className="text-base"><strong className="text-white">Veri Sorumlusu:</strong> TrairX Technology O.Ü</p>
                <p className="text-base"><strong className="text-white">Ülke:</strong> Estonya</p>
                <p className="text-base"><strong className="text-white">E-posta:</strong> info@trairx.com</p>
                <p className="text-base"><strong className="text-white">Web:</strong> www.checkly.tech</p>
              </div>
            </div>
          </section>

          <div className="bg-slate-800/50 rounded-xl p-6 text-center">
            <p className="text-slate-400 text-sm">
              Son Güncelleme: Şubat 2026 | Versiyon 1.0
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Bu politika GDPR ve KVKK uyumludur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
