import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'q1',
    question: 'How long does a premium vinyl car wrap last?',
    answer:
      'A high-quality, professional vinyl wrap can last anywhere from 5 to 7 years depending on how well it is maintained and its exposure to the sun. We use premium materials that withstand the Italian climate, keeping your car looking fresh for years.',
  },
  {
    id: 'q2',
    question: "Will a custom vinyl wrap damage my car's original paint?",
    answer:
      "No, absolutely not! In fact, a vinyl car wrap acts as a protective layer against light scratches, stone chips, and UV rays. As long as your car has its original factory paint, removing the wrap will leave the paint looking exactly as it did the day the wrap was applied.",
  },
  {
    id: 'q3',
    question: 'Can you wrap a car that has scratches, dents, or rust?',
    answer:
      'Vinyl wrap conforms tightly to the surface of the vehicle. This means it will show existing scratches, dents, or peeling clear coat. For a flawless finish, we recommend repairing deep scratches or dents before applying the wrap.',
  },
  {
    id: 'q4',
    question: 'What is the best way to wash and maintain a wrapped vehicle?',
    answer:
      'We highly recommend hand washing your wrapped car using a soft microfiber sponge and pH-neutral car wash soap. Avoid automatic car washes with harsh brushes, and keep the pressure washer at a safe distance to prevent lifting the edges of the vinyl.',
  },
  {
    id: 'q5',
    question: 'How long does a full custom car wrap installation take?',
    answer:
      'A full car wrap usually takes between 3 to 5 business days. This timeframe allows our team at Car Wrapping Center to meticulously clean, prep, disassemble necessary parts, and apply the wrap with absolute perfection.',
  },
  {
    id: 'q6',
    question: 'How much does a professional car wrapping cost in Pavia, Italy?',
    answer:
      'The cost of a car wrap depends on the size of your vehicle, the type of vinyl (matte, gloss, chrome, or color-shift), and the complexity of the installation. Contact us via WhatsApp at +39 351 465 8227 or visit us in Villanterio for a free, customized quote!',
  },
];

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
      className="py-28 bg-[#151515] border-t border-white/10 relative"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold">
            Clarity & Transparency
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-['Montserrat']">
            Domande <span className="gold-text">Frequenti (FAQ)</span>
          </h2>
          <p className="text-base text-[#B3B3B3] font-['Inter'] leading-relaxed">
            Tutto quello che c’è da sapere sulla durata, cura, protezione della vernice originale e costi del wrapping.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = !!openItems[faq.id];

            return (
              <div
                key={faq.id}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-[#000000] ${
                  isOpen
                    ? 'border-[#D4AF37]/50 shadow-xl shadow-black/80'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Trigger Button: Questions in Bold White */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors"
                >
                  <span
                    itemProp="name"
                    className={`text-base sm:text-lg font-bold pr-2 transition-colors font-['Montserrat'] ${
                      isOpen ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 border ${
                      isOpen
                        ? 'gold-gradient text-black rotate-180 border-[#D4AF37]'
                        : 'bg-[#151515] text-[#B3B3B3] border-white/10'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Animated Dropdown Answer: Answers sliding down in Light Grey */}
                <div
                  id={`faq-answer-${faq.id}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-white/5 text-sm sm:text-base leading-relaxed text-[#B3B3B3] font-['Inter'] font-light"
                      itemProp="text"
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#000000] border border-white/10 text-xs font-mono text-[#B3B3B3] flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Hai un progetto speciale o vuoi verificare la compatibilità della tua auto?</span>
          <a
            href="https://wa.me/393514658227?text=Buongiorno%20Car%20Wrapping%20Center!%20Ho%20una%20domanda%20sul%20wrapping."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] font-bold uppercase tracking-wider hover:underline flex items-center gap-1 font-['Montserrat']"
          >
            <span>Parla con il nostro tecnico su WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
