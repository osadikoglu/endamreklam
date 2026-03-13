import PricingTable from "@/components/sections/PricingTable";
import ContextualFAQ from "@/components/sections/ContextualFAQ";

export const metadata = {
  title: "Paketler ve Fiyatlandırma | Endam Reklam",
  description: "İşletmeniz için en uygun web sitesi paketini seçin. 1990 TL'den başlayan fiyatlarla 48 saatte yayına alın.",
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

      {/* FAQ Section */}
      <ContextualFAQ />

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-blue-600 p-8 text-center text-white md:p-12">
            <h2 className="mb-6 text-3xl font-bold">Özel Bir Talebiniz mi Var?</h2>
            <p className="mb-8 text-lg text-blue-100">
              Eğer paketler dışında özel bir çözüm arıyorsanız, bize WhatsApp üzerinden yazın, hızlıca değerlendirelim.
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905000000000"}`}
              className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-xl hover:bg-gray-100 transition-all"
            >
              WhatsApp ile Sorun
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
