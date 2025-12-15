import React from 'react';
import { MessageSquare, CalendarDays, Smile } from 'lucide-react';

const Steps: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-16">
          Como funciona a <span className="text-brand-600">Primeira Consulta</span>
        </h2>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-brand-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-white">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">1. Toque no WhatsApp</h3>
              <p className="text-stone-600">
                Clique no botão e envie uma mensagem. Minha equipe (ou eu mesma) responderá prontamente.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-brand-500 rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-white">
                <CalendarDays className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">2. Agendamento</h3>
              <p className="text-stone-600">
                Escolha o melhor horário para você vir ao consultório. É totalmente gratuito.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-brand-400 rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-white">
                <Smile className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">3. Avaliação</h3>
              <p className="text-stone-600">
                Farei uma análise completa do seu sorriso e proporei o melhor plano de tratamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;