import React from 'react';
import { Star, MapPin, Phone, Clock, Instagram, Facebook, Youtube, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] border-t border-white/10 text-[#B3B3B3] text-sm pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#" className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#151515] border border-[#D4AF37]/30 flex items-center justify-center">
                <span className="font-extrabold text-base tracking-tighter text-[#D4AF37] font-['Montserrat']">
                  CW
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-wider text-white uppercase leading-none font-['Montserrat']">
                  Car Wrapping <span className="text-[#D4AF37]">Center</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#888888] uppercase mt-1 font-mono">
                  Pavia · Italy
                </span>
              </div>
            </a>

            <p className="text-sm text-[#B3B3B3] font-['Inter'] leading-relaxed max-w-sm font-light">
              Laboratorio specializzato in Car Wrapping, Paint Protection Film (PPF), Oscuramento Vetri Omologato e restyling interni per vetture sportive e di prestigio.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-white font-bold">5.0 / 5.0 Google Maps</span>
              <span className="text-[#666666]">·</span>
              <span className="text-[#B3B3B3]">Villanterio (PV)</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#151515] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/p/Car-wrapping-center-61553193233178/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-[#151515] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-[#151515] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/393514658227"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#151515] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37] transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Montserrat']">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-['Inter']">
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Home Atelier
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Color Change & Auto Wrapping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Pellicole Protettive PPF
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">
                  Portfolio & Before/After
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">
                  Recensioni Clienti Verificate
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors">
                  Domande Frequenti (FAQ)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  Dove Siamo & Mappa
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Montserrat']">
              Atelier Info
            </h4>
            
            <div className="space-y-3 text-xs font-['Inter']">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Via Lambro</span>
                  <span>27019 Villanterio PV, Italy (Pavia)</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="tel:+393514658227"
                  className="text-white hover:text-[#D4AF37] transition-colors font-bold font-mono"
                >
                  +39 351 465 8227
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-1 font-mono">
                  <div className="text-white font-medium">
                    Mon - Sat: 08:00 – 18:00
                  </div>
                  <div className="text-rose-400">
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/393514658227?text=Buongiorno%20Car%20Wrapping%20Center!%20Vorrei%20richiedere%20un%20preventivo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black gold-gradient hover:opacity-95 transition-all shadow-md font-['Montserrat']"
              >
                <span>Richiedi Preventivo WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Local SEO */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#888888]">
          <div>
            © {new Date().getFullYear()} Car Wrapping Center · Tutti i diritti riservati.
          </div>
          <div>
            Pavia · Villanterio · Lodi · Belgioioso · Milano Sud · Lombardia
          </div>
        </div>

      </div>
    </footer>
  );
};
