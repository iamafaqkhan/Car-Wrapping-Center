import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Minimalist Luxury Logo on the left */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-lg bg-[#151515] border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors shadow-sm">
            <span className="font-extrabold text-base tracking-tighter text-[#D4AF37] font-['Montserrat']">
              CW
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase leading-none font-['Montserrat']">
              Car Wrapping <span className="text-[#D4AF37]">Center</span>
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#B3B3B3] uppercase mt-1 font-mono">
              Pavia · Atelier
            </span>
          </div>
        </a>

        {/* Navigation links: Home, Services, Portfolio, FAQs, Contact */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a
            href="#"
            className="text-white hover:text-[#D4AF37] transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-[#B3B3B3] hover:text-[#D4AF37] transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="text-[#B3B3B3] hover:text-[#D4AF37] transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#testimonials"
            className="text-[#B3B3B3] hover:text-[#D4AF37] transition-colors"
          >
            Reviews
          </a>
          <a
            href="#faq"
            className="text-[#B3B3B3] hover:text-[#D4AF37] transition-colors"
          >
            FAQs
          </a>
          <a
            href="#contact"
            className="text-[#B3B3B3] hover:text-[#D4AF37] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button: "Get a Quote" */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/393514658227?text=Hello%20Car%20Wrapping%20Center!%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20vehicle."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-black gold-gradient hover:opacity-95 transition-all shadow-md glow-gold font-['Montserrat']"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2.5">
          <a
            href="https://wa.me/393514658227"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-black gold-gradient"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg bg-[#151515] border border-white/10 text-white"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#000000]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 mt-4 space-y-4">
          <nav className="flex flex-col space-y-4 text-base font-semibold font-['Montserrat']">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="py-1 text-white hover:text-[#D4AF37]"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="py-1 text-[#B3B3B3] hover:text-[#D4AF37]"
            >
              Services (Auto Wrapping, PPF, Tinting)
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsOpen(false)}
              className="py-1 text-[#B3B3B3] hover:text-[#D4AF37]"
            >
              Portfolio & Before/After
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="py-1 text-[#B3B3B3] hover:text-[#D4AF37]"
            >
              Google Reviews (5.0★)
            </a>
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="py-1 text-[#B3B3B3] hover:text-[#D4AF37]"
            >
              FAQs
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-1 text-[#B3B3B3] hover:text-[#D4AF37]"
            >
              Contact & Location (Villanterio PV)
            </a>
          </nav>

          <div className="pt-4 border-t border-white/10">
            <a
              href="https://wa.me/393514658227?text=Hello%20Car%20Wrapping%20Center!%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20vehicle."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 gold-gradient text-black rounded-lg text-xs font-bold uppercase tracking-wider glow-gold font-['Montserrat']"
            >
              <span>Get a Quote (WhatsApp)</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
