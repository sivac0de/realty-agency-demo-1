import React, { useState } from 'react';
import { MapPin, Building, Trees, GraduationCap, ShoppingBag, ArrowRight } from 'lucide-react';

interface StepnogorskGuideProps {
  onSelectMicrodistrict: (microdistrict: string) => void;
}

export const StepnogorskGuide: React.FC<StepnogorskGuideProps> = ({ onSelectMicrodistrict }) => {
  const [activeTab, setActiveTab] = useState<string>('6');

  const microdistrictsInfo = [
    {
      id: '6',
      name: '6 микрорайон',
      badge: 'Высокий спрос',
      avgPricePerSqm: '280 000 – 340 000 ₸/м²',
      desc: 'Один из самых оживленных и востребованных районов города. Именно здесь расположены популярные 9-этажные дома улучшенной серии с лифтами (как дома 85, 87).',
      amenities: ['Торговые центры и рынок «Казахстан»', 'Школы и детсады в шаговой доступности', 'Круглосуточные аптеки и остановки', 'Отличная транспортная доступность'],
      catalogKey: '6 микрорайон'
    },
    {
      id: '3',
      name: '3 микрорайон',
      badge: 'Центральный район',
      avgPricePerSqm: '270 000 – 330 000 ₸/м²',
      desc: 'Исторически комфортный центр с обилием зелени и тихими дворами. Высокая ликвидность: квартиры здесь легко и выгодно сдаются в аренду.',
      amenities: ['Школа №3 и детские сады', 'Городской сквер и прогулочные зоны', 'Продуктовые супермаркеты', 'Высокая энергоэффективность домов'],
      catalogKey: '3 микрорайон'
    },
    {
      id: '7',
      name: '7 микрорайон',
      badge: 'Семейный район',
      avgPricePerSqm: '290 000 – 360 000 ₸/м²',
      desc: 'Район с просторными планировками и хорошей инсоляцией. Много молодых семей, благоустроенные детские и спортивные площадки.',
      amenities: ['Современные детские площадки', 'Удобные парковочные зоны во дворах', 'Свежие ремонты в подъездах', 'Просторные планировки (распашонки)'],
      catalogKey: '7 микрорайон'
    },
    {
      id: '9',
      name: '9 микрорайон',
      badge: 'Перспективный район',
      avgPricePerSqm: '290 000 – 370 000 ₸/м²',
      desc: 'Один из наиболее современных микрорайонов Степногорска. Широкие дворы, хорошая роза ветров и качественные улучшенные серии домов.',
      amenities: ['Новые коммуникации и водопровод', 'Развитая коммерческая инфраструктура', 'Большие кухни в планировках', 'Спокойная загородная атмосфера'],
      catalogKey: '9 микрорайон'
    },
    {
      id: 'suburban',
      name: 'Пос. Пригородный',
      badge: 'Частный сектор',
      avgPricePerSqm: 'От 25 000 000 ₸ за дом',
      desc: 'Идеальное решение для тех, кто хочет собственный дом с участком 10-15 соток, баней и гаражом, сохраняя центральное городское отопление Степногорска.',
      amenities: ['Центральное отопление и водопровод', 'Земельные участки 10-15 соток', 'Гаражи, бани, хозпостройки', 'Чистый воздух и тишина'],
      catalogKey: 'Пригородный'
    }
  ];

  const currentInfo = microdistrictsInfo.find((m) => m.id === activeTab) || microdistrictsInfo[0];

  const handleSelect = (key: string) => {
    onSelectMicrodistrict(key);
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0d1017] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Гид покупателя и инвестора</span>
              <span className="text-slate-600">·</span>
              <span>Степногорск</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              Где лучше жить в Степногорске?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Ербол Нурсиитов за 19 лет изучил состояние инженерных сетей и специфику каждого дома в городе. Выберите микрорайон, чтобы узнать детали.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span>Средняя цена по городу:</span>
            <span className="text-amber-400 font-bold tabular-nums">~310 000 ₸/м²</span>
          </div>
        </div>

        {/* Microdistrict Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {microdistrictsInfo.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActiveTab(m.id)}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 border ${
                activeTab === m.id
                  ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Active Microdistrict Feature Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111622] border border-slate-800/90 mt-4 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {currentInfo.name}
                </h3>
                <span className="text-xs font-semibold text-amber-300 border border-amber-500/40 px-2.5 py-0.5 rounded-full bg-amber-500/10">
                  {currentInfo.badge}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentInfo.desc}
              </p>

              {/* District Amenities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentInfo.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Action Right Column */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-xs text-slate-400 font-sans">Ориентир цен на жилье:</div>
                <div className="text-lg font-bold text-amber-400 font-mono tabular-nums mt-0.5">
                  {currentInfo.avgPricePerSqm}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Актуально на осень 2026 года
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleSelect(currentInfo.catalogKey)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow"
              >
                <span>Смотреть квартиры в {currentInfo.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
