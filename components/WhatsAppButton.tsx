import React from 'react';
import { MessageCircle } from 'lucide-react';
import { EXPERT } from '../constants';

interface Props {
  className?: string;
  text?: string;
  subtext?: string;
  fullWidth?: boolean;
}

const WhatsAppButton: React.FC<Props> = ({ 
  className = "", 
  text = "Agendar primeira consulta gratuita", 
  subtext = "Resposta rápida • Sem compromisso",
  fullWidth = false
}) => {
  return (
    <div className={`flex flex-col items-center ${fullWidth ? 'w-full' : ''}`}>
      <a 
        href={EXPERT.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group
          relative
          flex items-center justify-center gap-3
          bg-green-600 hover:bg-green-500
          text-white
          font-semibold text-lg md:text-xl
          py-4 px-8
          rounded-full
          shadow-lg hover:shadow-xl hover:-translate-y-1
          transition-all duration-300
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span>{text}</span>
      </a>
      {subtext && (
        <span className="text-xs text-stone-500 mt-2 font-medium tracking-wide uppercase">
          {subtext}
        </span>
      )}
    </div>
  );
};

export default WhatsAppButton;