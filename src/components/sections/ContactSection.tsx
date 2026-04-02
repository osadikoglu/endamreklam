"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const sectors = [
  "SMMM / Muhasebe",
  "Avukat",
  "Diş Hekimi",
  "Kafe",
  "Restoran",
  "Güzellik Salonu",
  "Diğer",
];

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sector, setSector] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Merhaba, web sitesi hakkında bilgi almak istiyorum.\nAdım: ${name}\nTelefon: ${phone}\nSektör: ${sector || "Belirtilmedi"}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <section id="iletisim" className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            İletişim
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Formu doldurun, size ulaşalım. Ya da doğrudan WhatsApp&apos;tan yazın.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 space-y-6"
          >
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                Adınız
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ahmet Yılmaz"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                Telefon
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="05XX XXX XX XX"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                Sektör
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white"
              >
                <option value="">Seçiniz</option>
                {sectors.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-green-500 px-6 py-4 text-base font-bold text-white hover:bg-green-600 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp ile Gönder
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Doğrudan WhatsApp&apos;tan yazın
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
