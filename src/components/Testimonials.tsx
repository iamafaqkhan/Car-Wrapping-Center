import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    author: 'Matteo Colombo',
    vehicle: 'Porsche 911 GT3 (992)',
    location: 'Pavia (PV)',
    rating: 5,
    title: 'Precisione assoluta e dettagli invisibili',
    text: 'Ho portato la mia auto da Car Wrapping Center per un wrap totale Satin Black e PPF sul frontale. Il livello di cura per i dettagli negli angoli, nelle prese d’aria e sotto le guarnizioni è sbalorditivo. Sembra verniciatura originale da fabbrica Porsche. 5 stelle meritatissime!',
    date: '1 mese fa · Recensione Google Verificata',
  },
  {
    id: 2,
    author: 'Gianluca Rinaldi',
    vehicle: 'BMW M4 Competition',
    location: 'Lodi / Milano Sud',
    rating: 5,
    title: 'Professionalità e pellicole di altissima gamma',
    text: 'Consigliatissimo! Hanno eseguito dechrome lucido, tetto in carbon look e vetri scuri omologati con certificato europeo. Il team di Villanterio è trasparente sui costi e sui tempi di posa. Rispondono subito su WhatsApp per qualsiasi dubbio.',
    date: '2 settimane fa · Recensione Google Verificata',
  },
  {
    id: 3,
    author: 'Alessandra M.',
    vehicle: 'Range Rover Velar',
    rating: 5,
    location: 'Pavia',
    title: 'PPF autorigenerante impeccabile',
    text: 'Protezione PPF frontale completa dopo aver ritirato la macchina dalla concessionaria. Dopo diversi viaggi in autostrada i sassi non hanno lasciato nessun segno, la pellicola è davvero autorigenerante al calore del sole. Cordialità e passione per i motori.',
    date: '3 mesi fa · Recensione Google Verificata',
  },
  {
    id: 4,
    author: 'Federico Bellini',
    vehicle: 'Audi RS6 Avant',
    rating: 5,
    location: 'Belgioioso (PV)',
    title: 'Un punto di riferimento per il wrapping in Lombardia',
    text: 'Colore personalizzato Nardo Grey Satin con materiali Inozetek e 3M 2080. Il risvolto bordi e l’utilizzo del Knifeless Tape garantiscono zero rischi sulla vernice originale. Comodo anche il pagamento elettronico con Apple Pay.',
    date: '4 mesi fa · Recensione Google Verificata',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = REVIEWS[currentIndex];

  return (
    <section id="testimonials" className="py-28 bg-[#151515] border-t border-white/10 relative overflow-hidden">
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold">
            Verified Customer Satisfaction
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat']">
            5-Star <span className="gold-text">Google Reviews</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 pt-2 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37]" />
            ))}
            <span className="text-white font-bold ml-2 font-mono text-sm">
              5.0 / 5.0 su Google Maps
            </span>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#000000] border border-white/10 p-8 sm:p-12 shadow-2xl">
            
            <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute top-8 right-8 pointer-events-none" />

            <div className="space-y-6">
              
              {/* Stars */}
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>

              {/* Title & Review Text */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat']">
                  "{current.title}"
                </h3>
                <p className="text-base sm:text-lg text-[#B3B3B3] font-['Inter'] leading-relaxed font-light italic">
                  "{current.text}"
                </p>
              </div>

              {/* Author & Car Info */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base font-bold text-white font-['Montserrat']">
                    {current.author}
                  </div>
                  <div className="text-xs text-[#D4AF37] font-mono">
                    {current.vehicle} · {current.location}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[#888888]">{current.date}</span>
                </div>
              </div>

            </div>

            {/* Slider Controls */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === i ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Vai alla recensione ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="p-2.5 rounded-xl bg-[#151515] border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-colors"
                  aria-label="Recensione precedente"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-2.5 rounded-xl bg-[#151515] border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-colors"
                  aria-label="Prossima recensione"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
