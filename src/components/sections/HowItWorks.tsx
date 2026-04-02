import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Formu Doldur",
    desc: "İşletmenizle ilgili kısa bilgileri bizimle paylaşın.",
  },
  {
    step: "02",
    title: "48 Saatte Hazırlanır",
    desc: "Sitenizi 48 saat içinde tasarlayıp kuruyoruz.",
  },
  {
    step: "03",
    title: "Yayına Alınır",
    desc: "Siteniz Cloudflare altyapısında yayına girer, hesap size teslim edilir.",
  },
];

const HowItWorks = () => {
  return (
    <section id="nasil-calisir" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Nasıl Çalışır?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Üç adımda işletmenizin web sitesi hazır.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center">
              <div className="mb-6 flex justify-center text-5xl font-black text-blue-50 select-none">
                {item.step}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              {index < steps.length - 1 && (
                <div className="absolute right-[-24px] top-8 hidden text-blue-100 md:block">
                  <ArrowRight className="h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
