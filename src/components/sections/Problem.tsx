import { Gauge, Smartphone, Banknote } from "lucide-react";

const problems = [
  {
    icon: <Gauge className="h-6 w-6 text-red-500" />,
    title: "Yavaş ve Eski Site",
    desc: "Ziyaretçiler sayfanızı açmadan çıkıyor.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-red-500" />,
    title: "Mobil Uyumsuz",
    desc: "Müşterilerinizin çoğu telefondan bakıyor.",
  },
  {
    icon: <Banknote className="h-6 w-6 text-red-500" />,
    title: "Yüksek Yıllık Maliyet",
    desc: "Hosting, SSL, bakım ücretleri birikirken siteniz hâlâ yetersiz kalıyor.",
  },
];

const Problem = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Tanıdık Geliyor mu?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Pek çok işletme aynı sorunlarla boğuşuyor.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-red-50 transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                {problem.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{problem.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
