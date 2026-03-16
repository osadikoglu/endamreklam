import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/endam_logo_2026.svg"
                alt="Endam Reklam"
                width={150}
                height={38}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 font-medium">
              48 saatte profesyonel ve uygun fiyatlı web çözümleri.
            </p>
          </div>

          {/* Navigation Links - Horizontal & Minimal */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Ana Sayfa</Link>
            <Link href="/paketler" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Paketler</Link>
            <Link href="/portfolyo" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Portfolyo</Link>
            <Link href="/cerez-politikasi" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">Çerez Politikası</Link>
          </div>

          {/* Contact - Minimal */}
          <div className="flex items-center">
            <a 
              href="mailto:iletisim@endamreklam.com" 
              className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2.5 transition-all hover:border-blue-600 hover:shadow-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600">iletisim@endamreklam.com</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-xs font-medium text-gray-400">
          © {new Date().getFullYear()} Endam Reklam. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
