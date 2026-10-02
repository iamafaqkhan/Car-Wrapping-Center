import React, { useState } from 'react';
import { Maximize2, X, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const PORTFOLIO_ITEMS = [
  {
    id: 'porsche-gt3',
    title: 'Porsche 911 GT3 · Satin Olive Gold',
    vehicle: 'Porsche 911 GT3',
    category: 'supercar',
    finish: 'Avery Supreme Satin',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80',
    description: 'Wrapping integrale satin con smontaggio maniglie e specchietti. Finitura impeccabile senza giunture visibili.',
  },
  {
    id: 'ferrari-488',
    title: 'Ferrari 488 Pista · Stealth PPF',
    vehicle: 'Ferrari 488 Pista',
    category: 'ppf',
    finish: 'XPEL Stealth PPF Opaco',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80',
    description: 'Pellicola protettiva trasparente satinata su vernice originale rosso corsa. Protezione totale da sassi in pista.',
  },
  {
    id: 'bmw-m4',
    title: 'BMW M4 Competition · Liquid Cyan',
    vehicle: 'BMW M4 G82',
    category: 'supercar',
    finish: 'Inozetek Super Gloss',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80',
    description: 'Finitura lucida a specchio ultra-metallizzata con trattamento ceramico top-coat.',
  },
  {
    id: 'audi-rs6',
    title: 'Audi RS6 Avant · Matte Dark Nardo',
    vehicle: 'Audi RS6 C8',
    category: 'satin',
    finish: '3M 2080 Matte Series',
    imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80',
    description: 'Wrapping aggressivo opaco con dechrome totale e oscuramento vetri posteriori omologato.',
  },
  {
    id: 'amg-gt',
    title: 'Mercedes-AMG GT · Total Dechrome & PPF',
    vehicle: 'Mercedes-AMG GT',
    category: 'ppf',
    finish: 'Total Black Pack + PPF',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80',
    description: 'Protezione frontale e pacchetto nero lucido sulle cornici vetri, griglia e diffusore.',
  },
  {
    id: 'interior-carbon',
    title: 'Interior Trims · Forged Carbon Look',
    vehicle: 'Alfa Romeo Giulia QV',
    category: 'interior',
    finish: 'Forged Carbon Fiber Wrap',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80',
    description: 'Rivestimento consolle centrale e palette cambio per rinnovare l’abitacolo con stile racing.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Tutti i Progetti' },
  { id: 'supercar', label: 'Supercars & Color Change' },
  { id: 'ppf', label: 'Protezione PPF' },
  { id: 'satin', label: 'Finiture Satin & Matte' },
  { id: 'interior', label: 'Interior Trims' },
];

export const PortfolioGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null);

  const filteredItems =
    selectedCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-28 bg-[#000000] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold">
            Craftsmanship Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat']">
            Portfolio & <span className="gold-text">Gallery</span>
          </h2>
          <p className="text-base text-[#B3B3B3] font-['Inter'] leading-relaxed">
            Una rassegna di veicoli di prestigio trasformati e protetti all’interno del nostro laboratorio a Villanterio (Pavia).
          </p>
        </div>

        {/* 1. Interactive Before & After Slider */}
        <BeforeAfterSlider />

        {/* 2. Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-['Montserrat'] ${
                selectedCategory === cat.id
                  ? 'gold-gradient text-black shadow-md'
                  : 'bg-[#151515] text-[#B3B3B3] hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3. Sleek Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#151515] border border-white/10 hover:border-[#D4AF37]/50 cursor-pointer transition-all duration-500 shadow-xl"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[11px] font-mono text-[#D4AF37] block uppercase tracking-wider">
                  {item.finish}
                </span>
                <h3 className="text-lg font-bold text-white uppercase font-['Montserrat'] leading-snug">
                  {item.vehicle}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
            <div className="relative max-w-4xl w-full bg-[#151515] rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/80 border border-white/10 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-colors"
                aria-label="Chiudi finestra"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-[360px] sm:h-[480px] w-full bg-black">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block">
                    {selectedPhoto.finish}
                  </span>
                  <h4 className="text-2xl font-bold text-white uppercase font-['Montserrat']">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-xs text-[#B3B3B3] font-['Inter'] max-w-md">
                    {selectedPhoto.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/393514658227?text=Hello%20Car%20Wrapping%20Center!%20I%20am%20interested%20in%20a%20wrap%20similar%20to%20the%20${encodeURIComponent(
                    selectedPhoto.vehicle
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 gold-gradient text-black font-bold text-xs uppercase tracking-wider rounded-lg hover:opacity-95 transition-all glow-gold shrink-0 font-['Montserrat']"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Richiedi Progetto Simile</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
