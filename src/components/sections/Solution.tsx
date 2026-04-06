const solutions = [
  {
    emoji: "⚡",
    title: "Hızlı Teslimat",
    desc: "Yapay zeka destekli geliştirme araçlarıyla 48 saat içinde teslim.",
  },
  {
    emoji: "💰",
    title: "Uygun Fiyat",
    desc: "Haftalarca süren tasarım süreçleri artık saatler içinde tamamlanıyor, bu tasarrufu size yansıtıyoruz.",
  },
  {
    emoji: "🔒",
    title: "Yıllık Masraf Minimum",
    desc: "Cloudflare altyapısıyla hosting ve SSL ücretsiz, uzun vadeli taahhüt yok.",
  },
  {
    emoji: "📱",
    title: "Mobil Uyumlu",
    desc: "Tüm cihazlarda mükemmel görünen, hızlı yüklenen siteler.",
  },
  {
    emoji: "🎨",
    title: "Size Özel Tasarım",
    desc: "Kurumsal renkleriniz, istediğiniz tarz, sektörünüze özel modüller.",
  },
];

const Solution = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Biz Farklı Yapıyoruz
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Modern araçlar, dürüst fiyat, gerçek sahiplik.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50 p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 text-3xl">{item.emoji}</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
