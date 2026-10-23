import React from 'react';
import { Instagram } from 'lucide-react';

interface InstagramHighlightsProps {
  activeFilter: string;
  onSelectHighlight: (category: string) => void;
}

export const InstagramHighlights: React.FC<InstagramHighlightsProps> = ({
  activeFilter,
  onSelectHighlight
}) => {
  const highlights = [
    { id: '1-комн', label: '1-комн', title: '1-комнатные квартиры', subtitle: 'от 7.8 млн ₸' },
    { id: '2-комн', label: '2-комн', title: '2-комнатные квартиры', subtitle: 'от 12.5 млн ₸' },
    { id: '3-комн', label: '3-комн', title: '3-комнатные квартиры', subtitle: 'от 18.9 млн ₸' },
    { id: '4-комн', label: '4-комн', title: '4-комнатные квартиры', subtitle: 'от 25.0 млн ₸' },
    { id: 'дом', label: 'ДОМА', title: 'Дома и участки', subtitle: 'Пригородный' },
    { id: 'ОБМЕН', label: 'МЕНА', title: 'Обмен с доплатой', subtitle: 'Все микрорайоны' }
  ];

  const handleHighlightClick = (id: string) => {
    if (id === 'ОБМЕН') {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onSelectHighlight(id);
      const el = document.getElementById('catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 bg-[#0b0e14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sub-header with Instagram reference */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Быстрый выбор рубрик
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">Категории объектов как в актуальном Instagram</span>
          </div>

          <a
            href="https://instagram.com/erbolnursiitov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-amber-400" />
            <span>@erbolnursiitov (2 880+ подписчиков)</span>
          </a>
        </div>

        {/* Stories Highlights Circular Row */}
        <div className="flex items-center gap-5 sm:gap-8 overflow-x-auto pb-4 pt-1 no-scrollbar justify-start md:justify-center">
          {highlights.map((item) => {
            const isActive = activeFilter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleHighlightClick(item.id)}
                className="flex flex-col items-center group shrink-0 focus:outline-none transition-transform active:scale-95"
              >
                {/* Outer Ring with Gold gradient matching the screenshot */}
                <div
                  className={`w-18 h-18 sm:w-20 sm:h-20 rounded-full p-[3px] transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 shadow-lg shadow-amber-500/30 scale-105'
                      : 'bg-gradient-to-tr from-amber-500/80 via-amber-400/90 to-amber-600/70 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-amber-500/20'
                  }`}
                >
                  {/* Black Inner Circle */}
                  <div className="w-full h-full bg-[#0b0e14] rounded-full p-[2px] flex items-center justify-center">
                    <div className="w-full h-full bg-[#111622] rounded-full flex flex-col items-center justify-center border border-amber-500/30 group-hover:bg-[#161c2b] transition-colors">
                      <span className="text-[12px] sm:text-[13px] font-black tracking-wide text-amber-400 uppercase font-['Plus_Jakarta_Sans'] text-center leading-none px-1">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Caption below */}
                <span
                  className={`mt-2 text-xs font-semibold whitespace-nowrap transition-colors ${
                    isActive ? 'text-amber-400' : 'text-slate-300 group-hover:text-white'
                  }`}
                >
                  {item.label}
                </span>
                <span className="text-[10px] text-slate-500 font-mono tabular-nums whitespace-nowrap">
                  {item.subtitle}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
