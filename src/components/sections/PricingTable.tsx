import { Check } from "lucide-react";
import { PACKAGES, GOOGLE_FORM_URL } from "@/lib/constants";
import Link from "next/link";

const PricingTable = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PACKAGES.map((pkg) => (
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
              <div className="mt-4 flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight text-gray-900">{pkg.price}</span>
                  {pkg.priceLabel && (
                    <span className="text-sm font-semibold text-gray-500">{pkg.priceLabel}</span>
                  )}
                </div>
                {pkg.term && (
                  <span className="text-sm font-medium text-gray-400 mt-1">· {pkg.term}</span>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm font-bold text-gray-900 mb-4">Ne alıyorsunuz:</p>
              <ul className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {pkg.notes && pkg.notes.length > 0 && (
              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Notlar:</p>
                <ul className="space-y-2">
                  {pkg.notes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                      <div className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gray-300" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href={GOOGLE_FORM_URL}
              className={`mt-8 rounded-full px-6 py-3 text-center text-lg font-bold transition-all active:scale-95 ${
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
    </div>
  );
};

export default PricingTable;
