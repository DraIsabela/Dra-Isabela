import React from 'react';
import { IMAGES } from '../constants';
import WhatsAppButton from './WhatsAppButton';
import { ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const heroImage = IMAGES.find(img => img.category === 'hero') || IMAGES[0];

  return (
    <section className="relative overflow-hidden pt-4 pb-12 lg:pt-12 lg:pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Content (Mobile: Top) */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-800 rounded-full text-xs font-bold tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>DENTISTA REFERÊNCIA EM ESTÉTICA</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-tight mb-6">
              Eu sou a <span className="text-brand-600 italic">Dra. Isabela</span>, e vou transformar o seu sorriso.
            </h1>
            
            <p className="text-stone-600 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              Especialista em Facetas e Lentes em Resina Composta. Recupere sua autoestima com um tratamento seguro, indolor e de resultado natural.
            </p>

            <div className="w-full md:w-auto">
              <WhatsAppButton fullWidth={true} className="md:w-auto md:px-12" />
            </div>
          </div>

          {/* Image (Mobile: Bottom) */}
          <div className="lg:w-1/2 w-full px-4 lg:px-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-stone-200 rounded-full opacity-50 blur-2xl"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] lg:aspect-[4/5] mx-auto max-w-sm lg:max-w-md">
                <img 
                  src={heroImage.src} 
                  alt={heroImage.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
                
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-stone-100 text-center">
                  <p className="font-serif text-brand-800 text-lg">Dra. Isabela Brito</p>
                  <p className="text-stone-500 text-xs uppercase tracking-wide">Estética & Reabilitação</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;