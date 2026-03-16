"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0f172a] shadow-md transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section - Fixed white text on dark navy background */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/endam_logo_2026.svg"
            alt="Endam Reklam"
            width={160}
            height={40}
            className="h-9 w-auto md:h-10 brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 lg:flex">
          <Link href="/" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Ana Sayfa</Link>
          <Link href="/paketler" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Paketler</Link>
          <Link href="/portfolyo" className="text-sm font-bold text-gray-300 hover:text-white transition-colors">Portfolyo</Link>
        </div>

        {/* Desktop CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/paketler"
            className="hidden rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-all active:scale-95 lg:block shadow-lg shadow-blue-900/40"
          >
            Paketleri Gör
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white lg:hidden"
            aria-label="Menüyü aç/kapat"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 top-[60px] z-40 h-[calc(100vh-60px)] w-full bg-[#0f172a] transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0 opacity-100 shadow-2xl" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-6 h-full">
          <Link href="/" onClick={() => setIsOpen(false)} className="border-b border-gray-800 pb-4 text-lg font-bold text-white">Ana Sayfa</Link>
          <Link href="/paketler" onClick={() => setIsOpen(false)} className="border-b border-gray-800 pb-4 text-lg font-bold text-white">Paketler</Link>
          <Link href="/portfolyo" onClick={() => setIsOpen(false)} className="border-b border-gray-800 pb-4 text-lg font-bold text-white">Portfolyo</Link>
          <div className="pt-4 mt-auto pb-10">
            <Link
              href="/paketler"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-full bg-blue-600 py-4 text-center text-lg font-bold text-white shadow-xl shadow-blue-900/40"
            >
              Paketleri Gör
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
