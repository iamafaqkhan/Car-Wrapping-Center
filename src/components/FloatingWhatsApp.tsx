import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsAppUrl =
    'https://wa.me/393514658227?text=Buongiorno%20Car%20Wrapping%20Center!%20Desidero%20maggiori%20informazioni%20sui%20vostri%20servizi%20di%20wrapping%20e%20PPF.';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contatta Car Wrapping Center su WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-3.5 gold-gradient text-black font-extrabold rounded-full shadow-2xl transition-all hover:scale-105 glow-gold border border-black/20 font-['Montserrat']"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
        <MessageSquare className="w-5 h-5 fill-black stroke-black" />
        <span className="text-xs uppercase tracking-wider hidden sm:inline-block font-mono">
          WhatsApp Instant
        </span>
      </a>
    </div>
  );
};
