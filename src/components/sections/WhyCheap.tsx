import { Zap, Clock, Code2, Users } from "lucide-react";

const WhyCheap = () => {
  const reasons = [
    {
      title: "Vibe Coding Teknolojisi",
      description: "Yapay zeka destekli geliştirme süreçlerimizle haftalar süren işleri saatlere indirdik.",
      icon: <Zap className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Gereksiz Maliyetleri Eledik",
      description: "Ofis, sekreterya ve karmaşık yönetim süreçlerini eleyerek tasarrufu size yansıtıyoruz.",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Modern ve Hafif Mimari",
      description: "Hantal sistemler yerine Next.js gibi en modern teknolojileri kullanarak hız kazandık.",
      icon: <Code2 className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Odaklı Hizmet",
      description: "Sadece esnaf ve küçük işletmelere odaklanarak süreçlerimizi standartlaştırdık ve hızlandırdık.",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Neden Bu Kadar Ucuz ve Hızlı?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Sırrımız sihir değil, verimlilik. İşte maliyetleri nasıl düşürüp kaliteyi nasıl koruyoruz:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCheap;
