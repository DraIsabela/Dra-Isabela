import React from 'react';
import { EXPERT } from '../constants';
import { Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="container mx-auto px-4 text-center">
        
        <h3 className="font-serif text-2xl text-white mb-2">{EXPERT.name}</h3>
        <p className="text-brand-400 text-sm uppercase tracking-widest mb-8">{EXPERT.profession}</p>

        <div className="flex flex-col items-center gap-6 mb-8">
          <a 
            href={EXPERT.instagramLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@draisabelabrito</span>
          </a>
          
          <div className="flex items-start justify-center gap-2 max-w-md text-stone-400">
             <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
             <span className="text-sm">{EXPERT.address}</span>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 mt-8 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Dra. Isabela Brito. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;