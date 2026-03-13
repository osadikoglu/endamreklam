import PortfolioGrid from "@/components/sections/PortfolioGrid";

export const metadata = {
  title: "Örnek Tasarımlar | Endam Reklam",
  description: "Daha önce hayata geçirdiğimiz modern ve hızlı web sitesi tasarımlarını inceleyin.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-white py-16 lg:py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Örnek Tasarımlar
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Farklı sektörler için hazırladığımız, hız ve dönüşüm odaklı tasarım şablonlarımızı inceleyin. Tüm tasarımlarımız %100 mobil uyumludur.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <PortfolioGrid />
      
      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Beğendiğiniz bir tasarım mı var?</h2>
          <p className="mb-8 text-gray-600">Hemen seçiminizi yapın, 48 saat içinde sizin için uyarlayalım.</p>
          <a
            href="/paketler"
            className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-blue-700 transition-all"
          >
            Paketleri İncele
          </a>
        </div>
      </section>
    </div>
  );
}
