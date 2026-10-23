import React from 'react';
import { ShieldCheck, Clock, Award, CheckCircle2, ChevronRight, Search } from 'lucide-react';
import { STEPNOGORSK_MICRODISTRICTS } from '../data/mockData';

interface HeroProps {
  onQuickFilter: (rooms: string, microdistrict: string) => void;
  selectedRooms: string;
  selectedMicrodistrict: string;
}

export const Hero: React.FC<HeroProps> = ({
  onQuickFilter,
  selectedRooms,
  selectedMicrodistrict
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#0b0e14] via-[#0f141d] to-[#0b0e14]">
      {/* Subtle radial ambient glow in brand gold */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-0"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition and Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Quiet unboxed kicker without pills */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span className="w-6 h-px bg-amber-400" />
              <span>Агентство недвижимости · Степногорск</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance font-['Plus_Jakarta_Sans']">
              Надежные сделки с недвижимостью в{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Степногорске
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Покупка, быстрая продажа, мена квартир и оформление документов любой сложности. Более 19 лет безупречной репутации на рынке недвижимости Акмолинской области.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-lg shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-500 hover:shadow-amber-500/40 transition-all duration-200 active:scale-95"
              >
                <span>Смотреть каталог квартир</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#lead-form"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-amber-500/40 rounded-lg transition-all duration-200"
              >
                Оценить мою квартиру
              </a>
            </div>

            {/* Core commitments unboxed list */}
            <div className="pt-4 border-t border-slate-800/70 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Проверка обременений и арестов в ЦОН</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Помощь с ипотекой и пенсионными (ЕНПФ)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Безопасные расчеты в день подписания</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Сложные обмены (мена) между микрорайонами</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset with Gold Accent Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-black/80 group">
              <img
                src="/src/assets/images/hero_stepnogorsk_realty_1792736880114.jpg"
                alt="Современная недвижимость в Степногорске от RIELTCOM"
                className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/40 to-transparent" />
              
              {/* Floating Verified Trust Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0e121a]/90 backdrop-blur-md border border-amber-500/30 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                      Агентство «RIELTCOM»
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      Руководитель: Ербол Нурсиитов
                    </div>
                  </div>
                  <a
                    href="https://wa.me/77013234031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-colors shrink-0"
                  >
                    Связаться
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Metrics Strip in a Full-Width Row Below Hero Split */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Стаж</span>
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-white font-mono tabular-nums">
                19+ лет
              </div>
              <p className="text-xs text-slate-400 mt-1">
                непрерывного опыта в г. Степногорск
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Опыт</span>
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-white font-mono tabular-nums">
                2 800+
              </div>
              <p className="text-xs text-slate-400 mt-1">
                успешно проведенных сделок
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Гарантия</span>
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-white font-mono tabular-nums">
                100%
              </div>
              <p className="text-xs text-slate-400 mt-1">
                проверка чистоты документов
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Консультация</span>
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-white font-mono tabular-nums">
                0 ₸
              </div>
              <p className="text-xs text-slate-400 mt-1">
                бесплатная оценка стоимости жилья
              </p>
            </div>

          </div>
        </div>

        {/* Quick Filter Box for Quick Selection */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#121622] via-[#161c2b] to-[#121622] border border-amber-500/25 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Быстрый подбор квартиры</h3>
                <p className="text-xs text-slate-400">Выберите количество комнат и микрорайон Степногорска</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* Room Selector */}
              <select
                value={selectedRooms}
                onChange={(e) => onQuickFilter(e.target.value, selectedMicrodistrict)}
                className="px-3.5 py-2.5 bg-slate-900/90 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none min-w-[140px]"
              >
                <option value="Все">Все комнаты</option>
                <option value="1-комн">1-комнатные</option>
                <option value="2-комн">2-комнатные</option>
                <option value="3-комн">3-комнатные</option>
                <option value="4-комн">4-комнатные</option>
                <option value="дом">Дома и участки</option>
              </select>

              {/* Microdistrict Selector */}
              <select
                value={selectedMicrodistrict}
                onChange={(e) => onQuickFilter(selectedRooms, e.target.value)}
                className="px-3.5 py-2.5 bg-slate-900/90 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none min-w-[160px]"
              >
                {STEPNOGORSK_MICRODISTRICTS.map((mkr) => (
                  <option key={mkr} value={mkr}>
                    {mkr}
                  </option>
                ))}
              </select>

              <a
                href="#catalog"
                className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap active:scale-95"
              >
                Показать квартиры
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
