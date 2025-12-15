import React from 'react';
import { IMAGES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const expertImage = IMAGES.find(img => img.category === 'hero' && img.src.includes('0A9Zf1X')) || IMAGES[0];

  const differentials = [
    "Especialista em estética e reabilitação oral",
    "Foco total na naturalidade do sorriso",
    "Atendimento humanizado e sem pressa",
    "Tecnologia de ponta e materiais premium"
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="w-full md:w-1/2 order-1 md:order-1">
             <div className="relative">
                <div className="absolute inset-0 bg-brand-100 rounded-tl-[4rem] rounded-br-[4rem] translate-x-3 translate-y-3"></div>
                <img 
                  src={expertImage.src} 
                  alt="Dra Isabela atendendo" 
                  className="relative w-full rounded-tl-[4rem] rounded-br-[4rem] shadow-xl object-cover h-[500px]"
                />
             </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">
              Muito prazer, sou a Dra. Isabela
            </h2>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              Minha missão é muito mais do que tratar dentes. Eu devolvo a confiança para você sorrir sem medo. 
            </p>
            
            <p className="text-stone-600 mb-8 leading-relaxed">
              Atuo com foco exclusivo em Estética e Reabilitação Oral, utilizando as melhores resinas do mercado para criar sorrisos que combinam perfeitamente com o seu rosto. Nada artificial, nada exagerado. Apenas a melhor versão do seu sorriso.
            </p>

            <ul className="space-y-4">
              {differentials.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-500 shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;