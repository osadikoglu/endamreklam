import Link from "next/link";
import { LayoutGrid, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <LayoutGrid className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold tracking-tight">Endam Reklam</span>
            </Link>
            <p className="text-sm text-gray-600">
              48 saatte profesyonel ve uygun fiyatlı web çözümleri.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">Kurumsal</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-blue-600">Ana Sayfa</Link></li>
              <li><Link href="/paketler" className="text-sm text-gray-600 hover:text-blue-600">Paketler</Link></li>
              <li><Link href="/portfolyo" className="text-sm text-gray-600 hover:text-blue-600">Portfolyo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">Yasal</h4>
            <ul className="space-y-2">
              <li><Link href="/cerez-politikasi" className="text-sm text-gray-600 hover:text-blue-600">Çerez Politikası</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">İletişim</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>endamreklam@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Endam Reklam. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
