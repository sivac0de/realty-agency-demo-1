import React from 'react';
import { Building2, Phone, MessageCircle, Instagram, MapPin, Clock, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-[#07090e] border-t border-amber-500/20 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-[#0b0e14] rounded-full flex items-center justify-center text-amber-400">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white font-['Plus_Jakarta_Sans']">
                  RIELTCOM
                </span>
                <span className="block text-[10px] text-amber-400 uppercase tracking-widest -mt-1">
                  Агентство недвижимости
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed pr-6">
              Профессиональное агентство недвижимости в г. Степногорск. Помощь в покупке, продаже, мене квартир, оформление документов любой сложности. Более 19 лет успешного опыта на рынке.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/77013234031"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 hover:text-slate-950 hover:bg-amber-400 hover:border-amber-400 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com/erbolnursiitov"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 hover:text-slate-950 hover:bg-amber-400 hover:border-amber-400 transition-colors"
                title="Instagram @erbolnursiitov"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:+77013234031"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 hover:text-slate-950 hover:bg-amber-400 hover:border-amber-400 transition-colors"
                title="Позвонить"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Разделы
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#catalog" className="hover:text-amber-400 transition-colors">
                  Каталог квартир
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Услуги агентства
                </a>
              </li>
              <li>
                <a href="#mortgage" className="hover:text-amber-400 transition-colors">
                  Ипотечный калькулятор
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Отзывы клиентов
                </a>
              </li>
              <li>
                <a href="#lead-form" className="hover:text-amber-400 transition-colors">
                  Оценка квартиры
                </a>
              </li>
            </ul>
          </div>

          {/* Microdistricts list */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Микрорайоны
            </h4>
            <ul className="space-y-2">
              <li className="text-slate-400">1, 2 и 3 микрорайоны</li>
              <li className="text-slate-400">4, 5 и 6 микрорайоны</li>
              <li className="text-slate-400">7 и 9 микрорайоны</li>
              <li className="text-slate-400">Поселок Пригородный</li>
              <li className="text-slate-400">Аксу и Бестобе</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Прямые контакты
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>г. Степногорск, Акмолинская область, Казахстан</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+77013234031" className="text-white hover:text-amber-400 font-mono font-bold">
                  +7 (701) 323-40-31
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="https://wa.me/77013234031" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400">
                  WhatsApp: +7 701 323 40 31
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Ежедневно с 09:00 до 20:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Агентство недвижимости «RIELTCOM» (г. Степногорск). Руководитель Ербол Нурсиитов.
          </div>
          <div>
            Все сделки проводятся в соответствии с законодательством Республики Казахстан.
          </div>
        </div>

      </div>
    </footer>
  );
};
