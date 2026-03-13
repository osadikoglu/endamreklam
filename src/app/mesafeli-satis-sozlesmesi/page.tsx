export default function SalesAgreementPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Mesafeli Satış Sözleşmesi</h1>
      <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
        <h2 className="text-xl font-bold text-gray-900">1. Taraflar</h2>
        <p>Satıcı: Endam Reklam<br />Alıcı: Web sitesi üzerinden sipariş veren kullanıcı.</p>
        
        <h2 className="text-xl font-bold text-gray-900">2. Sözleşmenin Konusu</h2>
        <p>
          İşbu sözleşmenin konusu, Alıcının Satıcıya ait internet sitesi üzerinden elektronik ortamda siparişini verdiği, sözleşmede nitelikleri ve satış fiyatı belirtilen hizmetin satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.
        </p>
        
        <h2 className="text-xl font-bold text-gray-900">3. Cayma Hakkı</h2>
        <p>
          Hizmetin ifasına Alıcının onayı ile başlanmış olması veya dijital olarak teslim edilen ürünler/hizmetler olması nedeniyle, Mesafeli Sözleşmeler Yönetmeliği gereği cayma hakkı kullanılamaz. Ancak Satıcı, müşteri memnuniyeti kapsamında makul revizyon taleplerini değerlendirir.
        </p>
        
        <h2 className="text-xl font-bold text-gray-900">4. Teslimat Şartları</h2>
        <p>
          Satıcı, hizmeti Alıcıdan gelen tüm materyallerin (logo, içerik vb.) eksiksiz tesliminden itibaren 48 saat içinde tamamlamayı taahhüt eder.
        </p>
      </div>
    </div>
  );
}
