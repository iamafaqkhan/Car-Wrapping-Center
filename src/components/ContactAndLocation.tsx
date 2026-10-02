import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageSquare, CreditCard, ShieldCheck } from 'lucide-react';
import { getStudioStatus } from '../utils/status';

export const ContactAndLocation: React.FC = () => {
  const studioStatus = getStudioStatus();

  return (
    <section id="contact" className="py-28 bg-[#000000] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold">
            Visit Our Atelier
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat']">
            Sede & <span className="gold-text">Contatti</span>
          </h2>
          <p className="text-base text-[#B3B3B3] font-['Inter'] leading-relaxed">
            Vieni a trovarci a Villanterio (Pavia) per toccare con mano le mazzette colore e pianificare la trasformazione del tuo veicolo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Studio Details Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#151515] border border-white/10 flex flex-col justify-between space-y-8 shadow-2xl">
            
            <div className="space-y-6">
              
              {/* Studio Live Status Indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                <span className="text-[#888888]">Stato Attuale:</span>
                <span className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                  <span className={`w-2 h-2 rounded-full ${studioStatus.isOpen ? 'bg-[#D4AF37] animate-pulse' : 'bg-amber-500'}`} />
                  {studioStatus.statusText}
                </span>
              </div>

              {/* Address */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Indirizzo Atelier</span>
                </div>
                <div className="text-lg font-bold text-white font-['Montserrat']">
                  Via Lambro
                </div>
                <div className="text-sm text-[#B3B3B3] font-['Inter']">
                  27019 Villanterio PV, Italy
                </div>
                <div className="text-xs text-[#888888] font-mono pt-1">
                  Pavia (15 min) · Lodi (20 min) · Milano Sud (25 min)
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Telefono & WhatsApp Ufficiale</span>
                </div>
                <a
                  href="tel:+393514658227"
                  className="text-lg font-bold text-white hover:text-[#D4AF37] transition-colors font-['Montserrat'] block"
                >
                  +39 351 465 8227
                </a>
              </div>

              {/* Working Hours */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Orari di Apertura</span>
                </div>
                <div className="text-xs space-y-1.5 font-mono">
                  <div className="flex justify-between text-[#B3B3B3]">
                    <span>Lunedì – Sabato:</span>
                    <span className="text-white font-semibold">08:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between text-[#888888]">
                    <span>Domenica:</span>
                    <span className="text-rose-400 font-medium">Chiuso</span>
                  </div>
                </div>
              </div>

              {/* Accepted Payments & Certifications */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-[11px] font-mono text-[#888888] uppercase block">
                  Metodi di Pagamento Accettati:
                </span>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-[#B3B3B3]">
                  <span className="px-2.5 py-1 rounded bg-[#000000] border border-white/10">Apple Pay</span>
                  <span className="px-2.5 py-1 rounded bg-[#000000] border border-white/10">Google Pay</span>
                  <span className="px-2.5 py-1 rounded bg-[#000000] border border-white/10">NFC Contactless</span>
                  <span className="px-2.5 py-1 rounded bg-[#000000] border border-white/10">Carte & Bancomat</span>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/393514658227?text=Buongiorno%20Car%20Wrapping%20Center!%20Vorrei%20prenotare%20un%20appuntamento%20in%20sede."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-lg gold-gradient text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl glow-gold hover:opacity-95 transition-all font-['Montserrat']"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Prenota Visita in Atelier (WhatsApp)</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Lambro+27019+Villanterio+PV+Italy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#000000] hover:bg-[#0a0a0a] border border-white/10 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors font-['Montserrat']"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>Apri in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#888888]" />
              </a>
            </div>

          </div>

          {/* Embedded High-Contrast Dark Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-[#151515] relative min-h-[420px] shadow-2xl">
            <iframe
              title="Mappa Car Wrapping Center Villanterio Pavia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44933.25603417758!2d9.328608249999999!3d45.2162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787265a6b0c6a51%3A0x6b1c4c1a51!2sVia%20Lambro%2C%2027019%20Villanterio%20PV!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: '420px',
                filter: 'invert(90%) hue-rotate(180deg) contrast(115%) brightness(95%)',
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
