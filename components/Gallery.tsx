import React, { useState } from 'react';
import { ALL_GALLERY_IMAGES } from '../constants';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Use the full list from constants
  const images = ALL_GALLERY_IMAGES;
  const visibleImages = images.slice(0, visibleCount);

  return (
    <section className="bg-stone-50 py-16 md:py-24" id="resultados">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-4">
            Resultados Reais
          </h2>
          <p className="text-stone-600 text-lg">
            Veja a transformação na vida de alguns dos nossos pacientes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {visibleImages.map((src, index) => (
            <div 
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md bg-white aspect-square"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 w-10 h-10" />
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < images.length && (
          <div className="text-center mt-10">
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="inline-flex items-center justify-center px-8 py-3 border border-stone-300 text-stone-600 font-medium rounded-full hover:bg-white hover:text-stone-900 hover:border-stone-400 transition-colors bg-transparent"
            >
              Ver mais resultados
            </button>
          </div>
        )}

        <p className="text-center text-stone-400 text-sm mt-8">
          * Os resultados podem variar de acordo com as características biológicas de cada paciente.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Resultado Zoom" 
            className="max-w-full max-h-[90vh] rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;