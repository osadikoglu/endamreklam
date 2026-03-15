export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function SalesAgreementPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">MESAFELİ SATIŞ SÖZLEŞMESİ</h1>
      <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Taraflar</h2>
          <div className="space-y-2 bg-gray-50 p-6 rounded-2xl border">
            <p><span className="font-bold">Satıcı:</span></p>
            <p>Ad Soyad: Oğuzhan Sadıkoğlu</p>
            <p>Ticaret Unvanı: Endam Reklam</p>
            <p>Vergi Dairesi: Küçükyalı</p>
            <p>Vergi Numarası: 70117180926</p>
            <p>Adres: Altıntepe Mah. İstasyon Yolu Sk. No: 3 İç Kapı No: 1 Maltepe / İstanbul</p>
            <p>E-posta: endamreklam@gmail.com</p>
            <p className="mt-4"><span className="font-bold">Alıcı:</span> Web sitesi üzerinden başvuruda bulunan kişi veya işletme.</p>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. Sözleşmenin Konusu</h2>
          <p>
            İşbu sözleşmenin konusu, Alıcının Satıcıya ait endamreklam.com internet sitesi üzerinden elektronik ortamda seçtiği web sitesi hizmet paketinin sunulmasına ilişkin koşulların, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri çerçevesinde belirlenmesidir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">3. Hizmet Kapsamı</h2>
          <p>
            Satıcı tarafından sunulan hizmet paketleri ve içerikleri, endamreklam.com/paketler adresinde yayınlanan açıklamalarla belirlenmiştir. Alıcı, başvuru formunda seçtiği paketi ve içeriğini önceden incelediğini kabul eder. Paket kapsamı dışında kalan talepler ayrıca ücretlendirilebilir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">4. Ödeme</h2>
          <p>
            Hizmet bedeli, Alıcının başvurusunun ardından Satıcı tarafından WhatsApp üzerinden iletilen ödeme linki aracılığıyla peşin olarak tahsil edilir. Ödeme alınmadan hizmet süreci başlatılmaz. Ödemenin gerçekleştirilmesi, Alıcının işbu sözleşmeyi okuduğunu, anladığını ve kabul ettiğini teyit eder.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">5. Teslimat Şartları</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>48 saatlik süre, Alıcının içerik formunu eksiksiz doldurmasının ardından başlar.</li>
            <li>İçerik formunda eksik, hatalı veya belirsiz bilgi bulunması halinde süre, eksikliklerin tamamlandığı tarihten itibaren yeniden işlemeye başlar.</li>
            <li>Resmi tatil ve hafta sonu günleri 48 saatlik süreye dahil edilmez; süre yalnızca iş günleri üzerinden hesaplanır.</li>
            <li>Teslim, web sitesinin yayına alınması ve Alıcıya WhatsApp üzerinden bildirilmesiyle gerçekleşmiş sayılır.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">6. Revizyon Hakkı</h2>
          <p>
            Alıcı, teslim bildiriminin ardından 1 (bir) revizyon hakkına sahiptir. Revizyon talebi, teslim bildiriminden itibaren 3 iş günü içinde WhatsApp üzerinden yazılı olarak iletilmelidir. Bu süre içinde bildirilmeyen talepler revizyon hakkı kapsamında değerlendirilemez. Paket kapsamını aşan değişiklik talepleri ayrıca ücretlendirilebilir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">7. Cayma Hakkı</h2>
          <p>
            Mesafeli Sözleşmeler Yönetmeliği&apos;nin 15. maddesi uyarınca; dijital ortamda sunulan ve ifasına Alıcının onayıyla başlanmış olan hizmetlerde cayma hakkı kullanılamaz. Başvuru formunun gönderilmesi ve ödemenin gerçekleştirilmesi, hizmetin başlatılmasına açık onay verildiği anlamına gelir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">8. Üçüncü Taraf Hizmetler</h2>
          <p>
            Web sitesi altyapısı; Cloudflare, Google ve Meta gibi bağımsız üçüncü taraf platformlar üzerinde çalışmaktadır. Bu platformların hizmet koşullarında, fiyatlandırma politikalarında veya teknik yapılarında meydana gelebilecek değişikliklerden Satıcı sorumlu tutulamaz. SSL sertifikası ve hosting hizmeti Cloudflare altyapısı tarafından sağlanmakta olup Satıcı bu hizmetlerin kesintisiz sürdürüleceğini taahhüt etmez.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">9. Alan Adı</h2>
          <p>
            Alan adı kaydını içeren paketlerde, alan adı Alıcı adına tescil edilir. Yıllık yenileme ücreti Alıcıya aittir. Alan adının süresi dolmadan yenilenmemesinden doğabilecek hak kayıpları Satıcıya atfedilemez. Satıcı, alan adı yenileme tarihinden en az 30 gün önce Alıcıyı bilgilendirmeyi taahhüt eder.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">10. Google Reklam ve Meta Reklam Hizmetleri</h2>
          <p>
            Reklam kurulumu içeren paketlerde Satıcı; hesap açılması, kampanya yapılandırması ve başlangıç ayarlarından sorumludur. Reklam yayını için Google ve Meta platformlarına ödenecek reklam bütçesi tamamen Alıcıya aittir ve Satıcıya ödenen hizmet bedeline dahil değildir. Reklam performansı piyasa koşullarına bağlı olup Satıcı belirli bir sonucu garanti etmez.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">11. Sorumluluk Sınırı</h2>
          <p>
            Satıcının sorumluluğu her halükarda Alıcıdan tahsil edilen hizmet bedeli ile sınırlıdır. Dolaylı zararlar, gelir kayıpları, iş kesintileri veya üçüncü taraf platformlardan kaynaklanan sorunlar için Satıcı sorumlu tutulamaz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">12. Gizlilik</h2>
          <p>
            Alıcıya ait kişisel veriler ve işletme bilgileri yalnızca hizmetin ifası amacıyla kullanılır, üçüncü taraflarla paylaşılmaz. Ayrıntılar için endamreklam.com/kvkk adresindeki KVKK ve Gizlilik Politikası geçerlidir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">13. Uyuşmazlık</h2>
          <p>
            İşbu sözleşmeden doğabilecek uyuşmazlıklarda Türkiye Cumhuriyeti kanunları geçerlidir. Uyuşmazlık halinde Satıcının bulunduğu il olan İstanbul&apos;daki Tüketici Hakem Heyeti ve mahkemeleri yetkilidir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">14. Yürürlük</h2>
          <p>
            İşbu sözleşme, Alıcının başvuru formunu onaylayarak göndermesiyle birlikte her iki taraf açısından bağlayıcı hale gelir.
          </p>
        </section>
      </div>
    </div>
  );
}
