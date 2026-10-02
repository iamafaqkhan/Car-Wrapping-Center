import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

const COMPARISONS = [
  {
    id: 'porsche',
    name: 'Porsche 911 GT3',
    beforeLabel: 'Prima: Bianco Lucido OEM',
    beforeImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
    afterLabel: 'Dopo: Satin Red + Dettagli Carbon Look',
    afterImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'audi',
    name: 'Audi RS6 Avant',
    beforeLabel: 'Prima: Grigio Metallizzato OEM',
    beforeImage: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80',
    afterLabel: 'Dopo: Satin Stealth Olive + PPF Frontale',
    afterImage: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bmw',
    name: 'BMW M4 Competition',
    beforeLabel: 'Prima: Nero Zaffiro OEM',
    beforeImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    afterLabel: 'Dopo: Liquid Frozen Cyan Metallic',
    afterImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [activeItem, setActiveItem] = useState(COMPARISONS[0]);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const clampedPos = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPos(clampedPos);
  }, []);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="mb-20">
      <div className="max-w-3xl mb-8 space-y-2">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold">
          Interactive Comparison
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase font-['Montserrat']">
          Prima & Dopo <span className="gold-text">il Wrapping</span>
        </h3>
        <p className="text-sm text-[#B3B3B3] font-['Inter']">
          Trascina il cursore orizzontalmente per confrontare la verniciatura di fabbrica con la finitura wrapping completata.
        </p>

        {/* Model Tabs */}
        <div className="pt-4 flex flex-wrap gap-2.5">
          {COMPARISONS.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveItem(c);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all font-['Montserrat'] ${
                activeItem.id === c.id
                  ? 'gold-gradient text-black shadow-md'
                  : 'bg-[#151515] text-[#B3B3B3] hover:text-white border border-white/10'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Draggable Canvas */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
        className="relative h-[360px] sm:h-[480px] lg:h-[520px] w-full rounded-2xl overflow-hidden border border-white/10 select-none cursor-ew-resize bg-[#000000] shadow-2xl"
      >
        {/* AFTER Layer */}
        <div className="absolute inset-0">
          <img
            src={activeItem.afterImage}
            alt={activeItem.afterLabel}
            className="w-full h-full object-cover object-center pointer-events-none"
            loading="lazy"
          />
          <div className="absolute top-5 right-5 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-[#D4AF37] border border-[#D4AF37]/30">
            DOPO: WRAPPING
          </div>
        </div>

        {/* BEFORE Layer (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={activeItem.beforeImage}
            alt={activeItem.beforeLabel}
            className="w-full h-full object-cover object-center pointer-events-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              maxWidth: 'none',
            }}
            loading="lazy"
          />
          <div className="absolute top-5 left-5 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-white border border-white/20">
            PRIMA: OEM FACTORY
          </div>
        </div>

        {/* Split Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#D4AF37] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-black border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl glow-gold">
            <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-[#888888] font-mono">
        <span>{activeItem.beforeLabel}</span>
        <span className="text-[#D4AF37] font-semibold">{activeItem.afterLabel}</span>
      </div>
    </div>
  );
};
