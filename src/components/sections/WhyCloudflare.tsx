import { Server, ShieldCheck, Infinity } from "lucide-react";

const reasons = [
  {
    icon: <Server className="h-6 w-6 text-blue-600" />,
    title: "Ücretsiz Hosting",
    description:
      "Siteniz Cloudflare Pages altyapısında barındırılır. Aylık hosting faturası ödemezsiniz. Cloudflare'in ücretsiz planı küçük işletmeler için fazlasıyla yeterli. Sizi gereksiz hosting paketlerine yönlendirmiyoruz.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    title: "Ücretsiz SSL",
    description:
      "SSL sertifikası Cloudflare tarafından otomatik olarak sağlanır. Tarayıcınızda her zaman güvenli kilit görürsünüz.",
  },
  {
    icon: <Infinity className="h-6 w-6 text-blue-600" />,
    title: "Taahhüt Yok",
    description:
      "Uzun vadeli sözleşme veya abonelik yoktur. Hesap ve şifre size teslim edilir, siteniz sizin olur.",
  },
];

const WhyCloudflare = () => {
  return (
    <section id="neden-cloudflare" className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Neden Cloudflare?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Sizi gereksiz masraflardan ve bağımlılıklardan koruyan altyapı.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="rounded-2xl bg-gray-50 p-8 shadow-sm transition-all hover:shadow-md">
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

export default WhyCloudflare;
