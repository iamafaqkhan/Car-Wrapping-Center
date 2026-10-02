import React, { useState } from 'react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const QuoteCalculator: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [car, setCar] = useState('');
  const [service, setService] = useState('Color Change Wrapping');
  const [message, setMessage] = useState('');
  const { isDark } = useTheme();

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Ciao Car Wrapping Center Villanterio!\n` +
      `Vorrei richiedere un preventivo gratuito:\n\n` +
      `👤 Nome: ${name || 'Non specificato'}\n` +
      `📞 Telefono: ${phone || 'Non specificato'}\n` +
      `🚗 Veicolo: ${car || 'Non specificato'}\n` +
      `🔧 Servizio: ${service}\n` +
      `${message ? `📝 Note: ${message}\n` : ''}\n` +
      `Resto in attesa della vostra risposta. Grazie!`
    );
    return `https://wa.me/393514658227?text=${text}`;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = getWhatsAppUrl();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <section
      id="quote"
      className={`py-24 border-t transition-colors duration-200 ${
        isDark ? 'bg-[#0c0d12] border-white/5' : 'bg-[#f1f5f9] border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span
            className={`text-xs font-mono uppercase tracking-widest block mb-2 ${
              isDark ? 'text-[#ccff00]' : 'text-emerald-700 font-bold'
            }`}
          >
            Preventivo Istantaneo
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-black uppercase tracking-tight font-display ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            Richiedi la Tua Quotazione
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Invia i dettagli della tua auto per una stima personalizzata e senza impegno. Rispondiamo rapidamente su WhatsApp.
          </p>
        </div>

        {/* 2-Column Minimal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Base Pricing Guide */}
          <div
            className={`lg:col-span-5 p-8 rounded-2xl border space-y-6 transition-colors ${
              isDark
                ? 'bg-[#12141c] border-white/5'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <h3
              className={`text-lg font-bold uppercase font-display ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Tariffe di Partenza Indicative
            </h3>

            <div className="space-y-4 text-xs">
              <div
                className={`flex items-center justify-between pb-3 border-b ${
                  isDark ? 'border-white/5' : 'border-slate-100'
                }`}
              >
                <div>
                  <span className={`font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Color Change Integrale
                  </span>
                  <span className={isDark ? 'text-slate-400 text-[11px]' : 'text-slate-500 text-[11px]'}>
                    Vinili 3M 2080 o Avery Supreme
                  </span>
                </div>
                <span className={`font-mono font-bold text-sm ${isDark ? 'text-[#ccff00]' : 'text-emerald-700'}`}>
                  da 1.950 €
                </span>
              </div>

              <div
                className={`flex items-center justify-between pb-3 border-b ${
                  isDark ? 'border-white/5' : 'border-slate-100'
                }`}
              >
                <div>
                  <span className={`font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    PPF Frontale Autorigenerante
                  </span>
                  <span className={isDark ? 'text-slate-400 text-[11px]' : 'text-slate-500 text-[11px]'}>
                    Cofano, paraurti, fari e specchi
                  </span>
                </div>
                <span className={`font-mono font-bold text-sm ${isDark ? 'text-[#ccff00]' : 'text-emerald-700'}`}>
                  da 1.200 €
                </span>
              </div>

              <div
                className={`flex items-center justify-between pb-3 border-b ${
                  isDark ? 'border-white/5' : 'border-slate-100'
                }`}
              >
                <div>
                  <span className={`font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Oscuramento Vetri Omologato
                  </span>
                  <span className={isDark ? 'text-slate-400 text-[11px]' : 'text-slate-500 text-[11px]'}>
                    Pellicola anti-UV con certificato
                  </span>
                </div>
                <span className={`font-mono font-bold text-sm ${isDark ? 'text-[#ccff00]' : 'text-emerald-700'}`}>
                  da 220 €
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className={`font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Dechrome & Tetto Carbon
                  </span>
                  <span className={isDark ? 'text-slate-400 text-[11px]' : 'text-slate-500 text-[11px]'}>
                    Eliminazione cromature o tetto lucido/carbon
                  </span>
                </div>
                <span className={`font-mono font-bold text-sm ${isDark ? 'text-[#ccff00]' : 'text-emerald-700'}`}>
                  da 250 €
                </span>
              </div>
            </div>

            <div
              className={`pt-4 border-t text-[11px] font-mono flex items-center gap-2 ${
                isDark ? 'border-white/5 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}
            >
              <CheckCircle2
                className={`w-4 h-4 shrink-0 ${isDark ? 'text-[#ccff00]' : 'text-emerald-600'}`}
              />
              <span>5 anni di garanzia ufficiale rilasciata su ogni lavoro</span>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`lg:col-span-7 p-8 rounded-2xl border transition-colors ${
              isDark
                ? 'bg-[#12141c] border-white/5'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <form onSubmit={handleSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-xs font-mono uppercase mb-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Nome & Cognome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="es. Marco Rossi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#ccff00] ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-xs font-mono uppercase mb-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Telefono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+39 3XX XXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#ccff00] ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-xs font-mono uppercase mb-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Veicolo (Modello & Anno) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="es. Porsche Macan 2022"
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:border-[#ccff00] ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-xs font-mono uppercase mb-1 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Servizio Desiderato
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[#ccff00] ${
                      isDark
                        ? 'bg-[#181a24] border-white/10 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  >
                    <option value="Color Change Wrapping">Color Change Wrapping</option>
                    <option value="PPF Pellicola Protettiva">PPF Pellicola Protettiva TPU</option>
                    <option value="Oscuramento Vetri">Oscuramento Vetri Omologato</option>
                    <option value="Chrome Delete & Tetto">Chrome Delete / Tetto Nero</option>
                    <option value="Grafica Flotta Aziendale">Grafica Flotta Aziendale</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className={`block text-xs font-mono uppercase mb-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Preferenze Colore o Note
                </label>
                <textarea
                  rows={3}
                  placeholder="es. Mi piacerebbe un colore verde satinato oppure nero opaco..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[#ccff00] ${
                    isDark
                      ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all glow-accent flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Richiedi Preventivo su WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
