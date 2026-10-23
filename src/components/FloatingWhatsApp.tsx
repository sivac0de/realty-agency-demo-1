import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-[#121622] text-xs text-slate-200 rounded-xl border border-amber-500/30 shadow-xl shadow-black/60 animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Спросить риелтора в WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-500 hover:text-slate-300 ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href="https://wa.me/77013234031?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8%20%D0%B2%20%D0%A1%D1%82%D0%B5%D0%BF%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA%D0%B5."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-300 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/30 hover:scale-105 hover:shadow-amber-500/50 transition-all duration-200 active:scale-95 group focus:outline-none"
        aria-label="Написать в WhatsApp агентства RIELTCOM"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950" />
      </a>
    </div>
  );
};
