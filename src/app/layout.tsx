import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Endam Reklam | 48 Saatte Web Sitesi & Dijital Varlık",
  description: "Uygun fiyata, 48 saatte profesyonel web sitesi ve dijital varlık sahibi olun. Esnaflar ve küçük işletmeler için hızlı ve ekonomik çözümler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
