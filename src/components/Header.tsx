import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Building2 } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0e14]/95 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element with gold architectural icon) */}
          <a href="#" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center p-0.5 shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-[#0e1117] rounded-full flex items-center justify-center text-amber-400 group-hover:text-amber-300 transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white font-['Plus_Jakarta_Sans'] group-hover:text-amber-400 transition-colors">
                RIELTCOM
              </span>
              <span className="text-[10px] text-amber-400/90 font-medium tracking-widest uppercase -mt-1">
                Степногорск
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#catalog" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Каталог квартир
            </a>
            <a href="#services" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Услуги
            </a>
            <a href="#mortgage" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Ипотечный калькулятор
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              О компании
            </a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Отзывы
            </a>
            <a href="#contacts" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Контакты
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/77013234031?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D0%B2%20%D0%A1%D1%82%D0%B5%D0%BF%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA%D0%B5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-lg shadow-md shadow-amber-500/20 hover:from-amber-300 hover:to-amber-500 hover:shadow-amber-500/30 transition-all duration-200 whitespace-nowrap shrink-0 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp: +7 (701) 323-40-31</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800/60 transition-colors"
            aria-label="Переключить меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-500/20 bg-[#0b0e14] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col gap-2">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-md"
            >
              Каталог квартир
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-md"
            >
              Услуги
            </a>
            <a
              href="#mortgage"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-md"
            >
              Ипотечный калькулятор
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-md"
            >
              О компании
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-md"
            >
              Отзывы
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-md"
            >
              Контакты
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-800">
            <a
              href="https://wa.me/77013234031"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Написать в WhatsApp</span>
            </a>
            <a
              href="tel:+77013234031"
              className="flex items-center justify-center gap-2 w-full mt-2 py-2.5 text-xs font-semibold text-amber-400 border border-amber-500/40 rounded-lg hover:bg-amber-500/10"
            >
              <Phone className="w-4 h-4" />
              <span>Позвонить +7 (701) 323-40-31</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
