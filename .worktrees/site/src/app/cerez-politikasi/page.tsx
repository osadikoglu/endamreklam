export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">ÇEREZ POLİTİKASI</h1>
      <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">1. Çerez Nedir?</h2>
          <p>
            Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Siteyi tekrar ziyaret ettiğinizde sizi tanımak ve deneyiminizi kişiselleştirmek amacıyla kullanılırlar.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">2. Kullanılan Çerez Türleri</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-sm font-bold text-gray-900">Çerez Türü</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-sm font-bold text-gray-900">Amaç</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-sm font-bold text-gray-900">Zorunlu mu?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600">Zorunlu Çerezler</td>
                  <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600">Sitenin teknik olarak çalışması için gereklidir</td>
                  <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600 font-bold text-green-600">Evet</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600">Analitik Çerezler</td>
                  <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600">Ziyaretçi sayısı ve davranışlarının ölçülmesi (Google Analytics)</td>
                  <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600 font-bold text-red-600">Hayır</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600">Reklam Çerezleri</td>
                  <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600">Hedefli reklam sunulması (Google Ads, Meta Pixel)</td>
                  <td className="border border-gray-200 px-4 py-2 text-sm text-gray-600 font-bold text-red-600">Hayır</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">3. Üçüncü Taraf Çerezler</h2>
          <p>Sitemizde Google Analytics ve gerekli durumlarda Meta Pixel çerezleri kullanılmaktadır. Bu çerezlere ilişkin gizlilik politikaları için:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-bold">Google:</span> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
            <li><span className="font-bold">Meta:</span> <a href="https://facebook.com/privacy/policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">4. Çerezleri Kontrol Etme</h2>
          <p>
            Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi sitenin düzgün çalışmamasına neden olabilir. Analitik ve reklam çerezlerini engellemek hizmet kalitesini etkilemez.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">5. Onay</h2>
          <p>
            Sitemizi kullanmaya devam etmeniz, zorunlu çerezlerin kullanımını kabul ettiğiniz anlamına gelir. Analitik ve reklam çerezleri için ayrıca onayınız alınır.
          </p>
        </section>
      </div>
    </div>
  );
}
