import Link from "next/link";
import { GOOGLE_FORM_URL } from "@/lib/constants";
import { Rocket, Zap, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
            <Zap className="h-4 w-4 fill-current" />
            <span>Vibe Coding ile Hızlandırıldı</span>
          </div>
          <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            48 Saatte Profesyonel <br />
            <span className="text-blue-600">Web Siteniz Yayında</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
            Aylar süren süreçler ve binlerce liralık faturalar bitti. 1299 TL&apos;den başlayan fiyatlarla, modern ve mobil uyumlu web sitenize hemen kavuşun.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={GOOGLE_FORM_URL}
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
            >
              Başvuru Yap
            </Link>
            <Link
              href="/portfolyo"
              className="rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Örnekleri Gör
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Zap className="h-5 w-5" />
              </div>
              <span className="font-semibold text-gray-700">48 Saatte Teslim</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="font-semibold text-gray-700">SEO & Reklam Uyumlu</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="font-semibold text-gray-700">SSL & Hosting Dahil*</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/50 blur-3xl" />
    </section>
  );
};

export default Hero;
