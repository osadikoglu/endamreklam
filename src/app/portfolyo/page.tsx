import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CompletedProjects from "@/components/sections/CompletedProjects";

export const metadata = {
  title: "Portfolyo ve Tamamlanan İşler | Endam Reklam",
  description: "Daha önce tamamladığımız projeler ve seçebileceğiniz farklı tasarım tarzları.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-white py-16 lg:py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-4">Portfolyo</p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Sizin İçin Neler Yapabiliriz?
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Daha önce tamamladığımız projeleri inceleyin veya kendi işletmeniz için hayal ettiğiniz tarzı seçin.
          </p>
        </div>
      </section>

      {/* Completed Projects Section */}
      <CompletedProjects />

      {/* Style Selection Section */}
      <div className="bg-gray-50/50 py-16 border-t border-b">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tasarım Tarzınızı Belirleyin</h2>
          <p className="text-gray-600">Hukuk bürosu üzerinden hazırladığımız 3 farklı tarzı inceleyerek vizyonunuzu netleştirin.</p>
        </div>
      </div>
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
