import { Eye, CreditCard, Clock, KeyRound } from "lucide-react";

const steps = [
  {
    icon: <Eye className="h-6 w-6 text-blue-600" />,
    title: "Örnek siteyi görürsünüz",
    desc: "Ödeme yapmadan sektörünüze yakın bir demo sitenizi görürsünüz. Beğenmezseniz hiçbir yükümlülüğünüz olmaz.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-blue-600" />,
    title: "Beğenirseniz ödeme yaparsınız",
    desc: "Onay verdikten sonra ödeme alınır. Tüm ödemeler için KDV dahil resmi fatura düzenlenir.",
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: "48 saat içinde teslim edilir",
    desc: "Ödeme tarihinden itibaren en geç 2 iş günü içinde siteniz yayına girer.",
  },
  {
    icon: <KeyRound className="h-6 w-6 text-blue-600" />,
    title: "Hesap ve şifre size verilir",
    desc: "Cloudflare hesabı ve tüm şifreler size teslim edilir. Siteniz tamamen sizin olur; bize bağımlı kalmazsınız.",
  },
];

const TransparentProcess = () => {
  return (
    <section id="surecimiz" className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Şeffaf Süreç
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Sürpriz yok, gizli ücret yok. Baştan sona tam şeffaflık.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                {step.icon}
              </div>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                Adım {index + 1}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparentProcess;
