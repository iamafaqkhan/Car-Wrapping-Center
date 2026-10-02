import React from 'react';
import { ArrowUpRight, Sparkles, Shield, EyeOff, Layers } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'auto-wrapping',
    icon: Sparkles,
    title: 'Auto Wrapping',
    subtitle: 'Color Change Wraps',
    description: 'Transform your vehicle with premium color change wraps. Choose between Satin, Matte, Gloss, and Metallic finishes from 3M and Avery Dennison. Edges tucked seamlessly for an OEM paint-like finish.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    tag: 'Satin & Gloss Finishes',
  },
  {
    id: 'ppf',
    icon: Shield,
    title: 'Protection Film (PPF)',
    subtitle: 'Self-Healing Shield',
    description: 'Self-healing clear bras to protect original factory paint from highway stone chips, scratches, acid rain, and harmful UV radiation. Available in invisible ultra-gloss or satin stealth finish.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80',
    tag: 'Self-Healing TPU Film',
  },
  {
    id: 'oscuramento-vetri',
    icon: EyeOff,
    title: 'Oscuramento Vetri',
    subtitle: 'Window Tinting & Heat Shield',
    description: 'Privacy and UV protection with full European homologation certificate. Blocks 99% of harmful solar rays, reduces cabin heat dramatically, and enhances vehicle styling and security.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80',
    tag: 'Certificato Omologato',
  },
  {
    id: 'interior-wrapping',
    icon: Layers,
    title: 'Interior Wrapping',
    subtitle: 'Trim Restyling & Detailing',
    description: 'Renew interior trims with forged carbon, twill weave carbon fiber, brushed metal, or matte wood textures. Protect piano-black center consoles from swirl marks and fingerprint scratches.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80',
    tag: 'Carbon Fiber & Luxury Trims',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-28 bg-[#000000] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold">
              Italian Excellence & Precision
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat']">
              Our Luxury <span className="gold-text">Services</span>
            </h2>
            <p className="text-base text-[#B3B3B3] font-['Inter'] leading-relaxed">
              Every vehicle undergoes meticulous surface decontamination and cleanroom installation at our Villanterio studio in Pavia.
            </p>
          </div>

          <a
            href="https://wa.me/393514658227?text=Hello%20Car%20Wrapping%20Center!%20I%20would%20like%20information%20on%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors font-['Montserrat'] group shrink-0"
          >
            <span>Custom Projects & Quotes</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Minimalist Cards Grid with Sleek Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#151515] border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden transition-all duration-500 flex flex-col justify-between shadow-2xl"
              >
                {/* Visual Imagery */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-90" />
                  
                  {/* Service Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#000000]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon Indicator */}
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-[#000000]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-['Montserrat'] tracking-tight group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#B3B3B3] font-['Inter'] leading-relaxed pt-2 font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#888888] font-mono">
                      Certificato 5 Anni
                    </span>
                    
                    <a
                      href={`https://wa.me/393514658227?text=Hello%20Car%20Wrapping%20Center!%20I%20am%20interested%20in%20${encodeURIComponent(
                        service.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#D4AF37] transition-colors font-['Montserrat']"
                    >
                      <span>Richiedi Info</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
