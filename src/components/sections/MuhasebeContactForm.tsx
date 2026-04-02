"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function MuhasebeContactForm() {
  const [form, setForm] = useState({ name: "", office: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Merhaba, muhasebe/SMMM ofisi için web sitesi hakkında bilgi almak istiyorum.\n\nAdım: ${form.name}\nOfis Adı: ${form.office}\nTelefon: ${form.phone}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">WhatsApp&apos;a yönlendiriliyorsunuz</h3>
        <p className="text-gray-600">Mesajınız hazırlandı. WhatsApp&apos;ta &quot;Gönder&quot;e basmayı unutmayın.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          Formu tekrar doldur
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700" htmlFor="muh-name">
          Adınız Soyadınız
        </label>
        <input
          id="muh-name"
          type="text"
          required
          placeholder="Ahmet Yılmaz"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700" htmlFor="muh-office">
          Ofis / Şirket Adı
        </label>
        <input
          id="muh-office"
          type="text"
          required
          placeholder="Yılmaz SMMM Ofisi"
          value={form.office}
          onChange={(e) => setForm({ ...form, office: e.target.value })}
          className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gray-700" htmlFor="muh-phone">
          Telefon Numaranız
        </label>
        <input
          id="muh-phone"
          type="tel"
          required
          placeholder="05XX XXX XX XX"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
      >
        <Send className="h-4 w-4" />
        WhatsApp&apos;tan Gönder
      </button>
      <p className="text-center text-xs text-gray-400">
        Bilgileriniz yalnızca size ulaşmak için kullanılır.
      </p>
    </form>
  );
}
