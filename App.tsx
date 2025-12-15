import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Steps from './components/Steps';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Hero />
      <About />
      <Gallery />
      <Features />
      <Steps />
      <FinalCTA />
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <WhatsAppButton 
          text="Agendar Consulta Gratuita" 
          subtext="" 
          className="py-3 text-base shadow-xl border-2 border-white"
        />
      </div>
    </div>
  );
}

export default App;