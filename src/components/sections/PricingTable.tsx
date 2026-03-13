import { Check, Plus } from "lucide-react";
import { PACKAGES, GOOGLE_FORM_URL } from "@/lib/constants";
import Link from "next/link";

const PricingTable = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
        {PACKAGES.filter((p) => !p.isAddon).map((pkg) => (
          <div
            key={pkg.id}
            className={`relative flex flex-col rounded-3xl p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl ${
              pkg.highlight ? "bg-white ring-2 ring-blue-600 scale-105 z-10" : "bg-white"
            }`}
          >
            {pkg.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                En Popüler
              </div>
            )}
            <div className="mb-8 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black tracking-tight text-gray-900">{pkg.price}</span>
                <span className="text-sm font-semibold text-gray-500">/ Tek Sefer</span>
              </div>
            </div>
            <ul className="mb-8 flex-1 space-y-4">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={GOOGLE_FORM_URL}
              className={`rounded-full px-6 py-3 text-center text-lg font-bold transition-all active:scale-95 ${
                pkg.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              {pkg.buttonText}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 underline decoration-blue-500 decoration-4 underline-offset-8">
          Dijital Varlık Ekstraları
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {PACKAGES.filter((p) => p.isAddon).map((addon) => (
            <div
              key={addon.id}
              className="flex items-center justify-between rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex-1 pr-4">
                <h4 className="font-bold text-gray-900">{addon.name}</h4>
                <p className="mt-1 text-sm text-gray-500">+{addon.price}</p>
              </div>
              <div className="flex-1">
                <ul className="space-y-1">
                  {addon.features.slice(0, 2).map((f, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                      <Plus className="h-3 w-3 text-blue-600" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={GOOGLE_FORM_URL}
                className="ml-4 rounded-full border border-blue-600 px-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Ekle
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
