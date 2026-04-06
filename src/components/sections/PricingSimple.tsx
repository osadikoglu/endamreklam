import { Check } from "lucide-react";

const included = [
  "Site Tasarımı",
  "Cloudflare Hosting",
  "SSL Sertifikası",
  "İçeriğinizin Uygulanması",
  "Google Haritalar Entegrasyonu",
  "WhatsApp Butonu",
  "Mobil Uyumluluk",
  "Hızlı Yükleme Optimizasyonu",
];

const PricingSimple = () => {
  return (
    <section id="fiyat" className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">Fiyat</h2>
          <p className="mb-1 text-5xl font-black text-white md:text-6xl">1.999 TL</p>
          <p className="mb-8 text-lg font-semibold text-slate-300">+ KDV · Tek Seferlik</p>

          <p className="mb-6 text-slate-300 text-base">
            Tek seferlik ödeme. Aşağıdakiler dahildir:
          </p>

          <ul className="mb-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-200">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-sm text-slate-500">
            Domain dahil değildir. Ek sayfa talepleri ayrıca fiyatlandırılır.
            Tüm ödemeler için KDV dahil resmi fatura düzenlenir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSimple;
