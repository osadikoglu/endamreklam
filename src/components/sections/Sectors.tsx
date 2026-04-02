import {
  Calculator,
  Scale,
  Stethoscope,
  Coffee,
  UtensilsCrossed,
  Sparkles,
  LayoutGrid,
} from "lucide-react";

const sectors = [
  { icon: <Calculator className="h-8 w-8 text-blue-600" />, label: "SMMM / Muhasebe" },
  { icon: <Scale className="h-8 w-8 text-blue-600" />, label: "Avukat" },
  { icon: <Stethoscope className="h-8 w-8 text-blue-600" />, label: "Diş Hekimi" },
  { icon: <Coffee className="h-8 w-8 text-blue-600" />, label: "Kafe" },
  { icon: <UtensilsCrossed className="h-8 w-8 text-blue-600" />, label: "Restoran" },
  { icon: <Sparkles className="h-8 w-8 text-blue-600" />, label: "Güzellik Salonu" },
  { icon: <LayoutGrid className="h-8 w-8 text-blue-600" />, label: "Diğer" },
];

const Sectors = () => {
  return (
    <section id="sektorler" className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Hizmet Verdiğimiz Sektörler
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Her sektöre özel, profesyonel web siteleri hazırlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                {sector.icon}
              </div>
              <span className="text-sm font-semibold text-gray-800">{sector.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
