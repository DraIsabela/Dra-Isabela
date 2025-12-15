import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { IMAGES } from '../constants';

const FinalCTA: React.FC = () => {
    // Using one of the expert photos for background/side
    const bgImage = "https://i.imgur.com/wV8wylO.png";

    return (
        <section className="relative py-20 bg-stone-900 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img src={bgImage} alt="Background" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-900/50"></div>

            <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
                <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
                    O sorriso dos seus sonhos está a um clique de distância.
                </h2>
                <p className="text-stone-300 text-lg mb-10">
                    Não adie mais a sua autoestima. Agende sua primeira consulta gratuita e vamos planejar a sua transformação.
                </p>
                
                <div className="flex justify-center">
                   <WhatsAppButton className="bg-brand-600 hover:bg-brand-500 border-none shadow-brand-900/50" />
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;