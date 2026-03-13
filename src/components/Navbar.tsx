import Link from "next/link";
import { LayoutGrid } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <LayoutGrid className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold tracking-tight">Endam Reklam</span>
        </Link>
        <div className="hidden space-x-8 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-blue-600">Ana Sayfa</Link>
          <Link href="/paketler" className="text-sm font-medium hover:text-blue-600">Paketler</Link>
          <Link href="/portfolyo" className="text-sm font-medium hover:text-blue-600">Portfolyo</Link>
        </div>
        <div>
          <Link
            href="/paketler"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Hemen Başla
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
