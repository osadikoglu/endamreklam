"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, CreditCard } from "lucide-react";
import { PACKAGES } from "@/lib/constants";

export default function PaymentSuccessPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col bg-gray-50/30 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Success Header */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Başvurunuz Başarıyla Alındı!
            </h1>
            <p className="text-lg text-gray-600">
              Şimdi son adım olarak ödemenizi tamamlayın ve süreci başlatalım.
            </p>
          </div>

          {/* Instructions */}
          <div className="mb-12 rounded-2xl bg-white p-8 shadow-sm border">
            <h2 className="mb-6 text-xl font-bold text-gray-900">Bundan Sonra Ne Olacak?</h2>
            <div className="space-y-6">
              {[
                { title: "Ödemeyi Tamamlayın", desc: "Aşağıdaki butonlardan seçtiğiniz paketin ödemesini güvenle yapın." },
                { title: "Hazırlık Başlasın", desc: "Ödeme onaylandığı an ekibimiz içeriklerinizi incelemeye başlar." },
                { title: "48 Saat Sayacı", desc: "Siteniz 48 saat içinde tasarlanır ve onayınıza sunulur." },
                { title: "Yayına Alma", desc: "Siz onay verdiğiniz an siteniz tüm dünyaya açılır!" },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Section */}
          <div className="rounded-2xl bg-blue-50 p-8 border border-blue-100">
            <h2 className="mb-8 text-center text-2xl font-bold text-blue-900">
              Paket Ödemesini Tamamla
            </h2>

            {/* Compliance Checkbox */}
            <div className="mb-10 flex items-start gap-3">
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="agreement" className="text-sm text-gray-700">
                <Link href="/mesafeli-satis-sozlesmesi" className="font-bold text-blue-600 hover:underline" target="_blank">
                  Mesafeli Satış Sözleşmesi
                </Link>{" "}
                ve{" "}
                <Link href="/kvkk" className="font-bold text-blue-600 hover:underline" target="_blank">
                  KVKK Politikası
                </Link>{" "}
                şartlarını okudum ve kabul ediyorum.
              </label>
            </div>

            {/* Payment Buttons Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  disabled={!agreed}
                  className={`flex flex-col items-start rounded-xl border p-4 transition-all ${
                    agreed
                      ? "bg-white hover:border-blue-600 hover:shadow-md cursor-pointer"
                      : "bg-gray-100 border-gray-200 opacity-60 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (agreed) {
                      // Redirect to external payment link (Iyzico/PayTR)
                      window.open("https://iyzico.link/your-link", "_blank");
                    }
                  }}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {pkg.isAddon ? "Ekstra" : "Paket"}
                  </span>
                  <span className="text-lg font-bold text-gray-900">{pkg.name}</span>
                  <div className="mt-2 flex items-center gap-2 text-xl font-black text-gray-900">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    {pkg.price}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span>256-bit Güvenli Ödeme</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span>Iyzico Altyapısı</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-blue-600">
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
