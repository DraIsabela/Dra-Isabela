import React from 'react';
import { Star, Heart, Clock, ShieldCheck, UserCheck, Sparkles } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Features: React.FC = () => {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-brand-600" />,
      title: "Atendimento Exclusivo",
      description: "Você será atendido diretamente por mim, do início ao fim do tratamento."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-600" />,
      title: "Acabamento Natural",
      description: "Técnica apurada para que suas lentes tenham a textura e cor de dentes naturais."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-600" />,
      title: "Segurança Total",
      description: "Procedimentos minimamente invasivos, preservando a saúde dos seus dentes."
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-600" />,
      title: "Agilidade",
      description: "Transformação do sorriso em poucas sessões, sem enrolação."
    }
  ];

  return (
    <section className="bg-brand-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">
            Por que confiar o seu sorriso a mim?
          </h2>
          <p className="text-stone-600">Excelência técnica aliada a um olhar artístico.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md transition-shadow">
              <div className="bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                {feature.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 text-center md:text-left">
                {feature.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed text-center md:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-100 text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl text-stone-900 mb-4">
            Ainda com dúvida se é para você?
          </h3>
          <p className="text-stone-600 mb-6">
            A melhor forma de saber é conversando comigo. Vou avaliar o seu caso individualmente e te explicar todas as possibilidades.
          </p>
          <WhatsAppButton text="Quero tirar minhas dúvidas agora" />
        </div>
      </div>
    </section>
  );
};

export default Features;