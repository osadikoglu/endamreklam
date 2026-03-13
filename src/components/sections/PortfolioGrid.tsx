"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { X, ZoomIn } from "lucide-react";

const PortfolioGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedImage(item.image)}
          >
            <div className="aspect-[4/3] relative">
              {/* Using a placeholder div since images don't exist yet */}
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-blue-200">
                <span className="text-lg font-bold uppercase tracking-widest">{item.title}</span>
              </div>
              {/* Once images are added, uncomment this:
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              /> 
              */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="rounded-full bg-white/20 p-4 backdrop-blur-md">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-blue-600">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-h-[80vh] max-w-[90vw] aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-xl bg-blue-50 flex items-center justify-center text-blue-200">
            <span className="text-4xl font-bold uppercase tracking-widest">Önizleme</span>
            {/* 
            <Image
              src={selectedImage}
              alt="Portfolio Preview"
              fill
              className="object-contain"
            />
            */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
