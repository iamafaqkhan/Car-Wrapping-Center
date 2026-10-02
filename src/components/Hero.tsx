import React from 'react';
import { ArrowRight, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#000000] overflow-hidden pt-28 pb-16">
      
      {/* Background Cinematic Supercar Image with Dark Atelier Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Porsche 911 GT3 being professionally wrapped in Italian atelier"
          className="w-full h-full object-cover object-center scale-105 transform opacity-40 filter contrast-125 brightness-90"
        />
        {/* Multilayer Dark Gradients for strict luxury black atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/85 to-[#000000]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/80" />
        
        {/* Subtle Gold Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Atelier Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151515] border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37] uppercase tracking-widest shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Italian Luxury Wrap Atelier · Pavia</span>
            </div>

            {/* Headline: "Trasforma e Proteggi" */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.08] font-['Montserrat']">
              Trasforma e <br />
              <span className="gold-text">
                Proteggi
              </span>
            </h1>

            {/* Sub-headline: Premium Car Wrapping, Paint Protection Film (PPF), and Window Tinting in Pavia, Italy. */}
            <p className="text-lg sm:text-xl text-[#B3B3B3] max-w-2xl font-light leading-relaxed font-['Inter']">
              Premium Car Wrapping, Paint Protection Film (PPF), and Window Tinting in Pavia, Italy.
            </p>

            <p className="text-sm text-[#888888] max-w-xl font-light leading-normal">
              Precisione artigianale certificata, materiali 3M & Avery Dennison di prima scelta, e garanzia ufficiale nel nostro centro autorizzato a Villanterio (PV).
            </p>

            {/* CTA Button: "Prenota la tua Consulenza" */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/393514658227?text=Buongiorno%20Car%20Wrapping%20Center!%20Desidero%20prenotare%20una%20consulenza%20personalizzata%20per%20la%20mia%20auto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wider text-black gold-gradient hover:opacity-95 transition-all shadow-xl glow-gold font-['Montserrat']"
              >
                <span>Prenota la tua Consulenza</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-[#151515] hover:bg-[#202020] border border-white/10 hover:border-[#D4AF37]/50 transition-all font-['Montserrat']"
              >
                <span>Scopri i Servizi</span>
              </a>
            </div>

            {/* Key Micro Accents */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-mono text-[#B3B3B3]">
              <div className="flex items-center gap-2">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-white font-bold">5.0★ Google Maps</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-white font-medium">Garanzia 5-7 Anni</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-white font-medium">Knifeless Precision</span>
              </div>
            </div>

          </div>

          {/* Right Luxury Showcase Frame */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#151515] p-3 shadow-2xl group">
              <div className="relative h-[440px] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80"
                  alt="Supercar custom satin finish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-85" />
                
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <div className="text-[11px] font-mono uppercase text-[#D4AF37] tracking-wider">
                    Showroom Villanterio PV
                  </div>
                  <div className="text-base font-bold text-white font-['Montserrat'] uppercase">
                    Avery Satin Nero Supremo
                  </div>
                  <div className="text-xs text-[#B3B3B3]">
                    Trattamento nanotech protettivo incluso
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
