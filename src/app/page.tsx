import Hero from "@/components/sections/Hero";
import WhyCheap from "@/components/sections/WhyCheap";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhyCheap />
      
      {/* Process Section */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Süreç Nasıl İşler?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Karmaşık teknik detaylarla boğulmayın. Biz süreci en basite indirdik:
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {[
              { step: "01", title: "Paket Seçimi", desc: "Size en uygun paketi seçin ve başvuru formunu doldurun." },
              { step: "02", title: "İçerik Toplama", desc: "Logonuzu, fotoğraflarınızı ve metinlerinizi bizimle paylaşın." },
              { step: "03", title: "Tasarım & Kurulum", desc: "Biz 48 saat içinde sitenizi tasarlayıp yayına alalım." },
              { step: "04", title: "Teslimat", desc: "Sitenizi kontrol edin ve dijital dünyada yerinizi alın!" },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="mb-6 flex justify-center text-5xl font-black text-blue-50">
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                {index < 3 && (
                  <div className="absolute right-[-24px] top-8 hidden text-blue-100 md:block">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Vakit Nakittir. Hemen Bugün Başlayalım.
          </h2>
          <div className="mb-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-blue-50">
              <CheckCircle2 className="h-5 w-5" />
              <span>Sürpriz Maliyet Yok</span>
            </div>
            <div className="flex items-center gap-2 text-blue-50">
              <CheckCircle2 className="h-5 w-5" />
              <span>Tek Seferlik Ödeme</span>
            </div>
            <div className="flex items-center gap-2 text-blue-50">
              <CheckCircle2 className="h-5 w-5" />
              <span>Modern Tasarım</span>
            </div>
          </div>
          <Link
            href="/paketler"
            className="rounded-full bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-xl hover:bg-gray-100 transition-all hover:scale-105"
          >
            Fiyatları İncele
          </Link>
        </div>
      </section>
    </div>
  );
}
