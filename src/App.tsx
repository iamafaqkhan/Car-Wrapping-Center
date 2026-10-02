import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { Services } from './components/Services';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#B3B3B3] selection:bg-[#D4AF37] selection:text-black">
      {/* 1. Sticky Luxury Header */}
      <Navbar />

      <main>
        {/* 2. Full-Screen Cinematic Hero ("Trasforma e Proteggi") */}
        <Hero />

        {/* 3. Trust & Authority Banner */}
        <TrustBanner />

        {/* 4. Services Grid (Auto Wrapping, PPF, Oscuramento Vetri, Interior Wrapping) */}
        <Services />

        {/* 5. Portfolio & Before/After Gallery */}
        <PortfolioGallery />

        {/* 6. Social Proof / 5-Star Google Reviews Slider */}
        <Testimonials />

        {/* 7. Interactive Accordion FAQ Section */}
        <FAQ />

        {/* 8. Studio Atelier & High-Contrast Dark Map */}
        <ContactAndLocation />
      </main>

      {/* 9. Comprehensive Luxury Footer */}
      <Footer />

      {/* 10. Always-Visible Floating WhatsApp Booking Button */}
      <FloatingWhatsApp />
    </div>
  );
}
