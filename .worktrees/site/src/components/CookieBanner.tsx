"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t bg-white p-4 shadow-2xl md:p-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-gray-600 md:text-left">
          Deneyiminizi geliştirmek için çerezleri kullanıyoruz. Sitemizi kullanarak{" "}
          <Link href="/cerez-politikasi" className="font-semibold text-blue-600 hover:underline">
            Çerez Politikamızı
          </Link>{" "}
          kabul etmiş sayılırsınız.
        </p>
        <button
          onClick={handleAccept}
          className="w-full rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700 md:w-auto transition-colors"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
