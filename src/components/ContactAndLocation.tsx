import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, Navigation } from 'lucide-react';
import { getStudioStatus } from '../utils/status';

export const ContactAndLocation: React.FC = () => {
  const studioStatus = getStudioStatus();

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [service, setService] = useState('Car Wrap');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare WhatsApp fallback link with exact form parameters
    const waText = encodeURIComponent(
      `Buongiorno Car Wrapping Center Villanterio!\n\n` +
      `Ho inviato una richiesta di consulenza dal sito:\n` +
      `👤 Nome: ${fullName}\n` +
      `✉️ Email: ${email}\n` +
      `🚗 Veicolo: ${vehicle}\n` +
      `🔧 Servizio: ${service}\n` +
      `📝 Messaggio: ${message}\n\n` +
      `Resto in attesa della vostra proposta. Grazie!`
    );

    // Open WhatsApp in new tab
    const waUrl = `https://wa.me/393514658227?text=${waText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-28 bg-[#0a0a0a] text-white relative border-t border-white/10">
      
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold">
            Italian Luxury Wrap Atelier
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-['Montserrat']">
            CONTATTACI
          </h2>
          <p className="text-base sm:text-lg text-[#B3B3B3] font-['Inter'] leading-relaxed font-light">
            Visit our studio in Villanterio or reach out for a free quote on your car wrap.
          </p>
        </div>

        {/* 2. Two-Column Grid: Contact Info (Left) & Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 rounded-3xl bg-[#151515] border border-white/10 p-8 sm:p-10 shadow-2xl flex flex-col justify-between space-y-8">
            
            <div className="space-y-7">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] block mb-1">
                  Pavia · Villanterio
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-['Montserrat']">
                  Prenota la tua <span className="gold-text">Consulenza</span>
                </h3>
                <p className="text-sm text-[#B3B3B3] font-['Inter'] mt-2 font-light leading-relaxed">
                  Vieni a scoprire di persona le finiture Satin, Gloss, Carbon Look e le pellicole protettive PPF autorigeneranti.
                </p>
              </div>

              {/* Live Status Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                <span className="text-[#888888]">Stato Attuale Atelier:</span>
                <span className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                  <span className={`w-2.5 h-2.5 rounded-full ${studioStatus.isOpen ? 'bg-[#D4AF37] animate-pulse' : 'bg-amber-500'}`} />
                  {studioStatus.statusText}
                </span>
              </div>

              {/* Item 1: Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
                    Indirizzo Sede
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white font-['Montserrat']">
                    Via Lambro
                  </div>
                  <div className="text-sm text-[#B3B3B3] font-['Inter']">
                    27019 Villanterio PV, Italy
                  </div>
                  <div className="text-xs text-[#777777] font-mono pt-0.5">
                    15 min da Pavia · 20 min da Lodi · 25 min da Milano Sud
                  </div>
                </div>
              </div>

              {/* Item 2: Phone / WhatsApp (Clickable tel: link) */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 shadow-inner">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
                    Telefono & WhatsApp
                  </span>
                  <a
                    href="tel:+393514658227"
                    className="text-base sm:text-lg font-bold text-white hover:text-[#D4AF37] transition-colors font-['Montserrat'] block"
                  >
                    +39 351 465 8227
                  </a>
                  <div className="text-xs text-[#777777] font-mono">
                    Risposta immediata dal nostro team tecnico
                  </div>
                </div>
              </div>

              {/* Item 3: Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 shadow-inner">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="space-y-1 w-full">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
                    Orari di Apertura
                  </span>
                  <div className="text-sm space-y-1 font-mono text-[#B3B3B3]">
                    <div className="flex justify-between">
                      <span>Mon - Sat:</span>
                      <span className="text-white font-bold">08:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-rose-400 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href="https://wa.me/393514658227?text=Buongiorno%20Car%20Wrapping%20Center!%20Vorrei%20prenotare%20una%20consulenza%20in%20sede."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl gold-gradient text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg glow-gold hover:opacity-95 transition-all font-['Montserrat']"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Chatta Diretto su WhatsApp</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Lambro+27019+Villanterio+PV+Italy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#0a0a0a] hover:bg-[#1a1a1a] border border-white/10 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors font-['Montserrat']"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>Ottieni Indicazioni Stradali</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#777777]" />
              </a>
            </div>

          </div>

          {/* Right Column: The Contact Form (Dark UI with #242424 fields) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#151515] border border-white/10 p-8 sm:p-12 shadow-2xl relative">
            
            <div className="mb-8 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-['Montserrat']">
                Invia una <span className="gold-text">Richiesta</span>
              </h3>
              <p className="text-sm text-[#B3B3B3] font-['Inter'] font-light">
                Compila i campi sottostanti per ricevere una quotazione dettagliata e tempi stimati di installazione.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-[#D4AF37]/50 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase font-['Montserrat']">
                  Richiesta Ricevuta!
                </h4>
                <p className="text-sm text-[#B3B3B3] font-['Inter'] max-w-md mx-auto font-light">
                  Grazie {fullName}! La tua richiesta per la tua {vehicle} ({service}) è stata presa in carico. Ti abbiamo anche aperto la chat WhatsApp con i dettagli precompilati.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-[#242424] hover:bg-[#2d2d2d] text-white text-xs font-bold uppercase tracking-wider transition-colors font-['Montserrat']"
                >
                  Invia un'altra richiesta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Field 1: Full Name */}
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-xs font-mono uppercase tracking-wider text-[#B3B3B3] mb-2 font-medium"
                  >
                    Nome Completo *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    placeholder="es. Marco Rossi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-[#242424] border-0 border-b-2 border-transparent focus:border-[#D4AF37] text-white placeholder-[#777777] text-sm focus:outline-none transition-all font-['Inter']"
                  />
                </div>

                {/* Field 2: Email Address */}
                <div>
                  <label
                    htmlFor="email-address"
                    className="block text-xs font-mono uppercase tracking-wider text-[#B3B3B3] mb-2 font-medium"
                  >
                    Indirizzo Email *
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    required
                    placeholder="es. marco.rossi@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-[#242424] border-0 border-b-2 border-transparent focus:border-[#D4AF37] text-white placeholder-[#777777] text-sm focus:outline-none transition-all font-['Inter']"
                  />
                </div>

                {/* Field 3: Vehicle Make & Model */}
                <div>
                  <label
                    htmlFor="vehicle-model"
                    className="block text-xs font-mono uppercase tracking-wider text-[#B3B3B3] mb-2 font-medium"
                  >
                    Marca & Modello del Veicolo *
                  </label>
                  <input
                    id="vehicle-model"
                    type="text"
                    required
                    placeholder="es. Porsche 911 GT3 (2022) o Audi RS6"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-[#242424] border-0 border-b-2 border-transparent focus:border-[#D4AF37] text-white placeholder-[#777777] text-sm focus:outline-none transition-all font-['Inter']"
                  />
                </div>

                {/* Field 4: Service Required (Dropdown) */}
                <div>
                  <label
                    htmlFor="service-required"
                    className="block text-xs font-mono uppercase tracking-wider text-[#B3B3B3] mb-2 font-medium"
                  >
                    Servizio Richiesto *
                  </label>
                  <select
                    id="service-required"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-[#242424] border-0 border-b-2 border-transparent focus:border-[#D4AF37] text-white text-sm focus:outline-none transition-all font-['Inter'] cursor-pointer"
                  >
                    <option value="Car Wrap">Car Wrap (Color Change Wraps)</option>
                    <option value="Paint Protection Film (PPF)">Paint Protection Film (PPF)</option>
                    <option value="Window Tinting">Window Tinting (Oscuramento Vetri)</option>
                    <option value="Headlight Tinting">Headlight Tinting (Fari Fumè Protettivi)</option>
                  </select>
                </div>

                {/* Field 5: Your Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#B3B3B3] mb-2 font-medium"
                  >
                    Il Tuo Messaggio / Note Aggiuntive *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Descrivi il colore o finitura desiderata (es. Satin Nero, Stealth Matte, dechrome)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl bg-[#242424] border-0 border-b-2 border-transparent focus:border-[#D4AF37] text-white placeholder-[#777777] text-sm focus:outline-none transition-all font-['Inter'] resize-none"
                  />
                </div>

                {/* Submit Button: Solid Gold (#D4AF37) with hover effect that darkens the gold */}
                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-xl bg-[#D4AF37] hover:bg-[#b89528] text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl glow-gold flex items-center justify-center gap-2 cursor-pointer font-['Montserrat'] mt-2"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Invia Richiesta</span>
                </button>

                <p className="text-[11px] text-[#777777] font-mono text-center pt-1">
                  🔒 Dati trattati nel rispetto della privacy. Risposta in poche ore lavorative.
                </p>

              </form>
            )}

          </div>

        </div>

        {/* 3. Bottom Section - Full-Width Embedded Dark Map */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
                Localizzazione Geografica
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-['Montserrat']">
                Come Raggiungere il Laboratorio
              </h3>
            </div>
            
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Lambro+27019+Villanterio+PV+Italy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors font-['Montserrat']"
            >
              <span>Apri a Schermo Intero</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#151515] relative shadow-2xl h-[380px] sm:h-[460px] w-full">
            <iframe
              title="Mappa Studio Car Wrapping Center Villanterio Pavia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44933.25603417758!2d9.328608249999999!3d45.2162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787265a6b0c6a51%3A0x6b1c4c1a51!2sVia%20Lambro%2C%2027019%20Villanterio%20PV!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) contrast(110%) brightness(95%)',
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
