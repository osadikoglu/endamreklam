import PricingTable from "@/components/sections/PricingTable";
import ContextualFAQ from "@/components/sections/ContextualFAQ";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata = {
  title: "Paketler ve Fiyatlandırma | Endam Reklam",
  description: "İşletmeniz için en uygun web sitesi paketini seçin. 1299 TL'den başlayan fiyatlarla 48 saatte yayına alın.",
};

export default function PackagesPage() {
  return (
    <div className="flex flex-col bg-gray-50/30">
      {/* Header Section */}
      <section className="bg-white py-16 lg:py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Paketler ve Fiyatlandırma
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Gizli maliyet yok, aylık aidat yok. Tek seferlik ödeme ile profesyonel bir dijital varlığa sahip olun.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTable />

      {/* Özel Teklif CTA Section - Paketlerin hemen altında */}
      <section className="py-12 bg-gray-50/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-blue-600 p-8 text-center text-white md:p-12 shadow-2xl">
            <h2 className="mb-6 text-3xl font-bold">İhtiyacınız Bunlardan Fazlası mı?</h2>
            <p className="mb-8 text-lg text-blue-100">
              E-ticaret, rezervasyon sistemi, çok sayfalı kurumsal site veya özel bir ihtiyacınız varsa size özel teklif hazırlayalım.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-xl hover:bg-gray-100 transition-all active:scale-95"
            >
              WhatsApp&apos;tan Teklif Alın →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ContextualFAQ />
    </div>
  );
}
