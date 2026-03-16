import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const GTM_ID = "GTM-PGSF7437";

export const metadata: Metadata = {
  title: "Endam Reklam | 48 Saatte Web Sitesi & Dijital Varlık",
  description: "Uygun fiyata, 48 saatte profesyonel web sitesi ve dijital varlık sahibi olun. Esnaflar ve küçük işletmeler için hızlı ve ekonomik çözümler.",
  alternates: {
    canonical: "https://endamreklam.com",
  },
  openGraph: {
    title: "Endam Reklam | 48 Saatte Web Sitesi",
    description: "Profesyonel web siteniz 48 saatte yayında.",
    url: "https://endamreklam.com",
    siteName: "Endam Reklam",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* GTM script is now moved to body */}
      </head>
      <body className={inter.className}>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
