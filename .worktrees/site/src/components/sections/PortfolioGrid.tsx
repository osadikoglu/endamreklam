"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { PORTFOLIO_ITEMS, GOOGLE_FORM_URL } from "@/lib/constants";

type PortfolioItem = (typeof PORTFOLIO_ITEMS)[number];

const BrowserMockup = ({
  item,
  containerClass,
  imgClass,
}: {
  item: PortfolioItem;
  containerClass: string;
  imgClass: string;
}) => (
  <div className="rounded-t-lg border border-b-0 border-gray-300 overflow-hidden bg-white">
    {/* Browser Chrome */}
    <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 border-b border-gray-200">
      <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
      <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
      <div className="ml-2 flex-1 rounded bg-white px-2 py-0.5 text-[10px] text-gray-400 border border-gray-200">
        endamreklam.com/örnek
      </div>
    </div>
    {/* Screenshot */}
    <div className={`overflow-hidden ${containerClass}`}>
      <Image
        src={item.image}
        alt={item.title}
        width={item.imageWidth}
        height={item.imageHeight}
        className={`w-full h-auto block ${imgClass}`}
        quality={85}
      />
    </div>
  </div>
);

const PortfolioGrid = () => {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <>
      <style>{`
        @keyframes scroll-preview {
          0%   { transform: translateY(0); }
          100% { transform: translateY(calc(-100% + 280px)); }
        }
        @keyframes scroll-preview-lg {
          0%   { transform: translateY(0); }
          100% { transform: translateY(calc(-100% + 72vh)); }
        }
        .scroll-preview {
          animation: scroll-preview 12s ease-in-out infinite alternate;
        }
        .scroll-preview:hover {
          animation-play-state: paused;
        }
        .scroll-preview-lg {
          animation: scroll-preview-lg 16s ease-in-out infinite alternate;
        }
        .scroll-preview-lg:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* Style Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Style Badge */}
                <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-200">
                  <span className={`text-sm font-bold uppercase tracking-widest ${item.accentColor}`}>
                    {item.style}
                  </span>
                  <span className="text-xs text-gray-400">{item.category}</span>
                </div>

                {/* Browser Mockup — clickable */}
                <button
                  onClick={() => setSelected(item)}
                  className="bg-gray-200 px-3 pt-3 text-left cursor-zoom-in"
                  aria-label={`${item.style} tarzını büyük görüntüle`}
                >
                  <BrowserMockup
                    item={item}
                    containerClass="h-[280px]"
                    imgClass="scroll-preview"
                  />
                </button>

                {/* Card Footer */}
                <div className="flex flex-col flex-1 p-5 bg-white gap-4">
                  <p className="text-sm text-gray-500 flex-1">{item.description}</p>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Devam Et
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Style CTA */}
          <div className="mt-16 rounded-2xl bg-gray-50 border border-dashed border-gray-300 p-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Bunlarla sınırlı değiliz</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Farklı bir tarz mı istiyorsunuz?
            </h3>
            <p className="text-gray-500 max-w-xl mx-auto">
              Yukarıdaki örnekler yalnızca hukuk bürosu için hazırladığımız 3 tarzı gösteriyor.
              Restoranınız, kliniğiniz, butik mağazanız veya farklı bir işletmeniz için
              tamamen özel tasarım üretiriz — tarzınızı siz anlatın, biz hayata geçirelim.
            </p>
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Kapat"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Style label */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2">
            <span className={`text-sm font-bold uppercase tracking-widest ${selected.accentColor} bg-white/90 px-4 py-1.5 rounded-full`}>
              {selected.style}
            </span>
          </div>

          <div
            className="w-full max-w-3xl bg-gray-200 rounded-2xl px-4 pt-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <BrowserMockup
              item={selected}
              containerClass="h-[72vh]"
              imgClass="scroll-preview-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGrid;
