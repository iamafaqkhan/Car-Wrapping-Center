import React from 'react';
import { Star, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const REVIEWS = [
  {
    author: 'Marco Ferri',
    car: 'BMW M2 Competition',
    date: 'Recensione Verificata Google',
    comment: 'Lavoro eccellente! Ho portato la mia M2 per un wrapping Satin Dark Grey e dechrome. I dettagli negli angoli e sotto le guarnizioni sono semplicemente invisibili, sembra verniciatura originale. Nessun segno sui particolari smontati. Consigliatissimo a Pavia e provincia!',
  },
  {
    author: 'Davide P.',
    car: 'Porsche Macan GTS',
    date: 'Recensione Verificata Google',
    comment: 'Installato PPF frontale autorigenerante e oscuramento vetri omologato. Professionalità assoluta: spiegata ogni fase della posa e del post-riscaldo. Comodissimo anche il pagamento contactless con Apple Pay. 5 stelle meritatissime.',
  },
];

export const TrustAndReviews: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="why-us"
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
            Standard di Qualità
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-black uppercase tracking-tight font-display ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            Perché Scegliere Car Wrapping Center
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Nessun compromesso sulla qualità delle pellicole e sulla cura del tuo veicolo.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div
            className={`p-8 rounded-2xl space-y-4 border transition-colors ${
              isDark
                ? 'bg-[#12141c] border-white/5'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center text-amber-400 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div
              className={`text-2xl font-black font-display ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              5.0 / 5.0 Google
            </div>
            <h3 className={`text-sm font-bold uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Valutazione Perfetta
            </h3>
            <p
              className={`text-xs leading-relaxed font-light ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Tutte le recensioni a 5 stelle certificate su Google Maps da clienti soddisfatti di Pavia, Lodi e Milano Sud.
            </p>
          </div>

          <div
            className={`p-8 rounded-2xl space-y-4 border transition-colors ${
              isDark
                ? 'bg-[#12141c] border-white/5'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDark ? 'bg-white/5 text-[#ccff00]' : 'bg-emerald-50 text-emerald-700'
              }`}
            >
              <Award className="w-5 h-5" />
            </div>
            <div
              className={`text-2xl font-black font-display ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              3M & Avery
            </div>
            <h3 className={`text-sm font-bold uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Materiali Certificati
            </h3>
            <p
              className={`text-xs leading-relaxed font-light ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Utilizziamo solo vinili e film PPF originali con garanzia fino a 5 anni su sollevamenti, bolle e sbiadimento UV.
            </p>
          </div>

          <div
            className={`p-8 rounded-2xl space-y-4 border transition-colors ${
              isDark
                ? 'bg-[#12141c] border-white/5'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDark ? 'bg-white/5 text-[#ccff00]' : 'bg-emerald-50 text-emerald-700'
              }`}
            >
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div
              className={`text-2xl font-black font-display ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Zero Lame
            </div>
            <h3 className={`text-sm font-bold uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Finitura Invisibile
            </h3>
            <p
              className={`text-xs leading-relaxed font-light ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Tecnologia Knifeless Tape: non usiamo lame a contatto con la vernice originale. Accettiamo pagamenti con carte e NFC Apple/Google Pay.
            </p>
          </div>

        </div>

        {/* 2 Clean Google Review Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border flex flex-col justify-between space-y-6 transition-colors ${
                isDark
                  ? 'bg-[#12141c]/50 border-white/5'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <p
                className={`text-sm leading-relaxed italic font-light ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                "{r.comment}"
              </p>
              <div
                className={`pt-4 border-t flex items-center justify-between text-xs ${
                  isDark ? 'border-white/5' : 'border-slate-100'
                }`}
              >
                <div>
                  <span
                    className={`font-bold block ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {r.author}
                  </span>
                  <span
                    className={`text-[11px] font-mono ${
                      isDark ? 'text-[#ccff00]' : 'text-emerald-700 font-semibold'
                    }`}
                  >
                    {r.car}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{r.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
