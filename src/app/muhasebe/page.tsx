import {
  Check,
  Clock,
  Globe,
  Shield,
  MapPin,
  MessageCircle,
  FileText,
  BarChart2,
  Smartphone,
  ExternalLink,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import MuhasebeContactForm from "@/components/sections/MuhasebeContactForm";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata = {
  title: "Muhasebe ve SMMM Ofisleri için Web Sitesi | Endam Reklam",
  description:
    "Muhasebe ve SMMM ofislerine özel, 48 saatte teslim, tek seferlik 1.999 TL profesyonel web sitesi. Demo'yu inceleyin, hemen başvurun.",
};

const FEATURES = [
  {
    icon: Smartphone,
    title: "Mobil Uyumlu Tasarım",
    desc: "Müşterileriniz telefon veya bilgisayardan kusursuz bir deneyim yaşar.",
  },
  {
    icon: Globe,
    title: "Alan Adı & Hosting Dahil",
    desc: "Size özel alan adı seçimi, kaydı ve Cloudflare altyapısında barındırma.",
  },
  {
    icon: Shield,
    title: "SSL Güvenlik Sertifikası",
    desc: "Tarayıcıda kilit ikonu; ziyaretçiler sitenize güvenle girer.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp İletişim Butonu",
    desc: "Tek tıkla doğrudan WhatsApp'ınıza yönlendiren sabit buton.",
  },
  {
    icon: MapPin,
    title: "Google Harita Entegrasyonu",
    desc: "Ofis konumunuz sitede interaktif harita ile gösterilir.",
  },
  {
    icon: FileText,
    title: "Hizmetler Tanıtım Sayfası",
    desc: "Sunduğunuz muhasebe hizmetleri açık ve profesyonel şekilde listelenir.",
  },
  {
    icon: BarChart2,
    title: "Google Analytics",
    desc: "Kaç kişi sitenizi ziyaret ettiğini, nereden geldiğini takip edin.",
  },
  {
    icon: Globe,
    title: "Sosyal Medya Bağlantıları",
    desc: "Instagram ve Facebook profilleriniz siteye entegre edilir.",
  },
];

const HIGHLIGHTS = [
  "Muhasebe sektörüne özel tasarım dili",
  "1 revizyon hakkı — isteklerinize göre güncellenir",
  "48 saat içinde teslim",
  "Gizli maliyet yok, aylık aidat yok",
  "Hesap ve şifre size teslim edilir",
];

export default function MuhasebePage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Merhaba, muhasebe/SMMM ofisi için web sitesi hakkında bilgi almak istiyorum.")}`;

  return (
    <div className="flex flex-col bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b bg-white py-20 lg:py-28">
        {/* Subtle background blob */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-50/60 blur-3xl" />

        <div className="container relative mx-auto px-4 text-center">
          <span className="mb-6 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
            Muhasebe &amp; SMMM Ofisleri için
          </span>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Müşterileriniz Sizi<br />
            <span className="text-blue-600">Google&apos;da Bulsun</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
            Muhasebe ve SMMM ofislerine özel, profesyonel web sitesi. Tek seferlik
            ödeme, gizli maliyet yok — <strong>48 saatte yayında.</strong>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#iletisim"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
            >
              Hemen Başvur
            </a>
            <a
              href="https://smmm-demo.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition-all hover:border-blue-600 hover:text-blue-600"
            >
              Demo Siteyi Gör
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Demo Showcase ── */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 text-center">
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                Siteniz Böyle Görünür
              </h2>
              <p className="text-gray-600">
                Demo sitede tüm sayfaları ve tasarımı inceleyebilirsiniz.
              </p>
            </div>

            {/* Browser Mockup */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              {/* Browser header */}
              <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex flex-1 items-center justify-center gap-2 rounded-md bg-white border border-gray-200 px-3 py-1.5">
                  <span className="text-xs font-medium text-gray-400">🔒</span>
                  <span className="text-xs font-medium text-gray-500">smmm-demo.pages.dev</span>
                </div>
              </div>

              {/* Content preview */}
              <div className="flex flex-col items-center gap-6 px-8 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                  <BarChart2 className="h-8 w-8" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-blue-600">
                    Canlı Demo
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    Örnek SMMM Ofisi Web Sitesi
                  </h3>
                  <p className="mx-auto max-w-md text-sm text-gray-600">
                    Gerçek bir muhasebe ofisi gibi tasarlanmış demo siteyi ziyaret
                    ederek tüm bölümleri, mobil görünümü ve iletişim formunu
                    inceleyebilirsiniz.
                  </p>
                </div>
                <a
                  href="https://smmm-demo.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
                >
                  Demo Siteye Git
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Neler Dahil?
            </h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              Siteniz hazırlandığında aşağıdaki her şey eksiksiz teslim edilir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Fiyatlandırma
            </h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              Tek seferlik ödeme. Sonrasında yalnızca yıllık alan adı yenilemesi (~400 TL/yıl).
            </p>
          </div>

          <div className="mx-auto max-w-md">
            <div className="relative rounded-3xl bg-white p-8 shadow-xl ring-2 ring-blue-600 md:p-10">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow">
                Muhasebe &amp; SMMM Paketi
              </div>

              {/* Price */}
              <div className="mb-6 text-center">
                <p className="mb-1 text-sm font-semibold text-gray-500">Tek Seferlik</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-black tracking-tight text-gray-900">1.999</span>
                  <span className="mb-1.5 text-2xl font-bold text-gray-900">TL</span>
                </div>
                <p className="text-sm text-gray-400">+ KDV</p>
              </div>

              {/* 48h badge */}
              <div className="mb-6 flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 py-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-blue-700">48 Saat İçinde Teslim</span>
              </div>

              {/* Highlights */}
              <ul className="mb-8 space-y-3">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#iletisim"
                className="block w-full rounded-full bg-blue-600 py-4 text-center text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
              >
                Bu Paketi İstiyorum
              </a>

              <p className="mt-4 text-center text-xs text-gray-400">
                Alan adı yenileme (~400 TL/yıl) dışında ek ödeme yok.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#0f172a] p-8 text-white md:p-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">Sektöre Özel</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Muhasebe ve SMMM ofislerinin ihtiyaçlarına özel tasarım ve içerik yapısı.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">48 Saatte Yayında</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Formu doldurduktan sonra 2 iş günü içinde siteniz hazır ve yayında.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">Şeffaf Fiyat</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Tek seferlik ödeme, gizli maliyet yok, aylık aidat yok.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section id="iletisim" className="bg-gray-50 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Hemen Başlayalım
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Formu doldurun, sizi WhatsApp üzerinden arayalım. Sorunuz varsa
                doğrudan mesaj da atabilirsiniz.
              </p>

              {/* WA direct */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 rounded-full bg-green-500 px-6 py-3 text-base font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:bg-green-600 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp&apos;tan Yaz
              </a>

              <div className="mt-10 space-y-3">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  Genellikle birkaç saat içinde geri dönüyoruz.
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  Demo siteyi birlikte inceleyebiliriz.
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  Ödeme sonrası 48 saat içinde teslimat.
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100 md:p-10">
              <h3 className="mb-6 text-xl font-bold text-gray-900">Bilgilerinizi Bırakın</h3>
              <MuhasebeContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
