export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Çerez Politikası</h1>
      <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
        <p>
          Endam Reklam olarak, web sitemizi ziyaretleriniz sırasında deneyiminizi geliştirmek amacıyla çerezler kullanmaktayız.
        </p>
        <h2 className="text-xl font-bold text-gray-900">Çerez Nedir?</h2>
        <p>Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.</p>
        
        <h2 className="text-xl font-bold text-gray-900">Kullanılan Çerez Türleri</h2>
        <ul className="list-disc pl-5">
          <li><strong>Zorunlu Çerezler:</strong> Sitenin düzgün çalışması için gereklidir.</li>
          <li><strong>Analitik Çerezler:</strong> Ziyaretçi sayılarını ve trafiği analiz etmek için kullanılır (Google Analytics vb.).</li>
          <li><strong>Reklam Çerezleri:</strong> İlgi alanlarınıza göre reklam sunmak için kullanılır (Meta Pixel vb.).</li>
        </ul>
        
        <h2 className="text-xl font-bold text-gray-900">Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
        <p>
          Tarayıcınızın ayarlarından çerezleri dilediğiniz gibi silebilir veya engelleyebilirsiniz. Ancak bu durum sitenin bazı özelliklerinin çalışmamasına neden olabilir.
        </p>
      </div>
    </div>
  );
}
