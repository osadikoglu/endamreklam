import { BASE_PRICE } from "@/lib/constants";

const PricingSimple = () => {
  return (
    <section id="fiyat" className="bg-blue-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Fiyat</h2>
        <p className="mb-2 text-5xl font-black text-white md:text-6xl">
          {BASE_PRICE}&apos;den başlayan fiyatlarla
        </p>
        <p className="mt-6 text-blue-100 text-base md:text-lg max-w-xl mx-auto">
          Domain dahil değildir. Ek sayfa talepleri ayrıca fiyatlandırılır.
        </p>
      </div>
    </section>
  );
};

export default PricingSimple;
