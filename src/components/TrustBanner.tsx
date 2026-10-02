import React from 'react';
import { Award, Star, ShieldCheck, MapPin } from 'lucide-react';

export const TrustBanner: React.FC = () => {
  return (
    <section className="bg-[#151515] border-y border-white/10 py-6 sm:py-7 relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
          
          {/* Item 1: 10+ Years Experience */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#000000] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 shadow-inner">
              <Award className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-white uppercase font-['Montserrat'] tracking-tight">
                10+ Years Experience
              </div>
              <div className="text-xs text-[#B3B3B3] font-['Inter']">
                Precision Italian Craftsmanship & Certified Installers
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/10" />

          {/* Item 2: 5.0/5 Star Google Reviews */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#000000] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 shadow-inner">
              <Star className="w-6 h-6 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-white uppercase font-['Montserrat'] tracking-tight flex items-center justify-center md:justify-start gap-1.5">
                <span>5.0/5 Star Google Reviews</span>
              </div>
              <div className="text-xs text-[#B3B3B3] font-['Inter']">
                100% Satisfied Supercar & Daily Drivers in Lombardia
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/10" />

          {/* Item 3: Premium Materials */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#000000] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 shadow-inner">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-white uppercase font-['Montserrat'] tracking-tight">
                Premium Materials
              </div>
              <div className="text-xs text-[#B3B3B3] font-['Inter']">
                Certified 3M, Avery Dennison & XPEL Films
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
