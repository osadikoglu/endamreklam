"use client";

import { Zap } from "lucide-react";

const Hero = () => {
  const handleScrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("nasil-calisir");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
            <Zap className="h-4 w-4 fill-current" />
            <span>48 Saatte Teslim</span>
          </div>
          <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            İşletmenize Özel Web Sitesi —{" "}
            <span className="text-blue-600">48 Saatte Teslim</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
            Hosting masrafı yok, taahhüt yok.
          </p>
          <a
            href="#nasil-calisir"
            onClick={handleScrollToHowItWorks}
            className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
          >
            Nasıl Çalışır?
          </a>
        </div>
      </div>

      {/* Background blob */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/50 blur-3xl" />
    </section>
  );
};

export default Hero;
