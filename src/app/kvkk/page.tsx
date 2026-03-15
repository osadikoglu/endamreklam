export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function KVKKPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">KVKK VE GİZLİLİK POLİTİKASI</h1>
      <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Veri Sorumlusu</h2>
          <div className="space-y-2 bg-gray-50 p-6 rounded-2xl border">
            <p><span className="font-bold">Oğuzhan Sadıkoğlu / Endam Reklam</span></p>
            <p>Altıntepe Mah. İstasyon Yolu Sk. No: 3 İç Kapı No: 1 Maltepe / İstanbul</p>
            <p>endamreklam@gmail.com</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Amaç</h2>
          <p>
            Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, endamreklam.com ziyaretçilerinin ve hizmet alan kişilerin kişisel verilerinin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgilendirme amacıyla hazırlanmıştır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. Toplanan Kişisel Veriler</h2>
          <p>Aşağıdaki veriler hizmet sürecinde toplanmaktadır:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ad soyad, işletme adı</li>
            <li>Telefon numarası (WhatsApp)</li>
            <li>E-posta adresi</li>
            <li>Açık adres (harita entegrasyonu için)</li>
            <li>Ödeme bilgileri (PayTR altyapısı üzerinden işlenir, Satıcı tarafından saklanmaz)</li>
            <li>Yüklenen dosyalar (logo, fotoğraf vb.)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">3. Verilerin İşlenme Amacı</h2>
          <p>Toplanan kişisel veriler yalnızca aşağıdaki amaçlarla işlenmektedir:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Hizmetin eksiksiz olarak sunulması</li>
            <li>Ödeme işlemlerinin gerçekleştirilmesi</li>
            <li>Yasal yükümlülüklerin (e-fatura, vergi kaydı vb.) yerine getirilmesi</li>
            <li>Hizmet süreciyle ilgili iletişimin yürütülmesi</li>
            <li>Alan adı tescil işlemlerinin gerçekleştirilmesi</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">4. Verilerin Aktarılması</h2>
          <p>Kişisel verileriniz aşağıdaki durumlarda üçüncü taraflarla paylaşılabilir:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-bold">PayTR:</span> Ödeme işlemlerinin gerçekleştirilmesi amacıyla</li>
            <li><span className="font-bold">Cloudflare:</span> Web sitesi altyapısı ve alan adı yönetimi amacıyla</li>
            <li><span className="font-bold">Google:</span> Analytics, İşletmem kaydı ve reklam hizmetleri amacıyla</li>
            <li><span className="font-bold">Meta:</span> Reklam hizmetleri amacıyla (yalnızca ilgili paket seçilmişse)</li>
            <li><span className="font-bold">Yasal merciler:</span> Kanunen zorunlu hallerde yetkili kurum ve kuruluşlarla</li>
          </ul>
          <p className="mt-4">Bu aktarımlar dışında verileriniz hiçbir üçüncü tarafla paylaşılmaz, ticari amaçla kullanılmaz.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">5. Verilerin Saklanma Süresi</h2>
          <p>
            Kişisel verileriniz, hizmet ilişkisinin sona ermesinin ardından yasal yükümlülükler kapsamında (vergi mevzuatı gereği) 5 yıl süreyle saklanır. Bu sürenin sonunda veriler silinir veya anonim hale getirilir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">6. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizin yetkisiz erişime, kayba veya ifşaya karşı korunması için gerekli teknik ve idari tedbirler alınmaktadır. Ödeme bilgileri Satıcı tarafından hiçbir şekilde saklanmamakta, tüm ödeme işlemleri PayTR&apos;nin güvenli altyapısı üzerinden gerçekleştirilmektedir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">7. KVKK Kapsamındaki Haklarınız</h2>
          <p>6698 sayılı Kanun&apos;un 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
            <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
            <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
            <li>Kanun&apos;da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
            <li>Otomatik sistemler aracılığıyla aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li>Kanuna aykırı işleme nedeniyle zarara uğramanız halinde tazminat talep etme</li>
          </ul>
          <p className="mt-4 font-bold">Başvurularınızı endamreklam@gmail.com adresine iletebilirsiniz. Talepler en geç 30 gün içinde yanıtlanır.</p>
        </section>
      </div>
    </div>
  );
}
