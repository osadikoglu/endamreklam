"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface DataLayer {
  push: (data: object) => void;
}

declare global {
  interface Window {
    dataLayer?: DataLayer;
  }
}

const WhatsAppButton = () => {
  const handleClick = () => {
    // GTM event trigger (assuming GTM is loaded via script tag in layout)
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        platform: "whatsapp",
      });
    }
  };

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-gtm-id="whatsapp-button"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle className="h-8 w-8" data-gtm-id="whatsapp-button" />
    </a>
  );
};

export default WhatsAppButton;
