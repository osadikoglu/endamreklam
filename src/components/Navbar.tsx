"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("iletisim");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/endam_logo_2026.svg"
            alt="Endam Reklam"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <div className="hidden space-x-8 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-blue-600">Ana Sayfa</Link>
          <Link href="/portfolyo" className="text-sm font-medium hover:text-blue-600">Portfolyo</Link>
        </div>
        <div>
          <a
            href="#iletisim"
            onClick={handleScrollToContact}
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
