import React, { useState, useMemo } from 'react';
import { Property } from '../types';
import { PROPERTIES_DATA, STEPNOGORSK_MICRODISTRICTS } from '../data/mockData';
import { PropertyModal } from './PropertyModal';
import { MessageCircle, Eye, ArrowUpDown, RotateCcw, Home, Search, ChevronDown } from 'lucide-react';

interface PropertyCatalogProps {
  selectedRooms: string;
  selectedMicrodistrict: string;
  onFilterChange: (rooms: string, microdistrict: string) => void;
}

export const PropertyCatalog: React.FC<PropertyCatalogProps> = ({
  selectedRooms,
  selectedMicrodistrict,
  onFilterChange
}) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'area-desc'>('price-asc');
  const [onlyExchange, setOnlyExchange] = useState(false);
  const [onlyMortgage, setOnlyMortgage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6); // Performance optimization for low-end mobile devices

  const roomOptions = [
    { id: 'Все', label: 'Все объекты' },
    { id: '1-комн', label: '1-комнатные' },
    { id: '2-комн', label: '2-комнатные' },
    { id: '3-комн', label: '3-комнатные' },
    { id: '4-комн', label: '4-комнатные' },
    { id: 'дом', label: 'Дома' }
  ];

  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((p) => {
      if (selectedRooms !== 'Все' && p.rooms !== selectedRooms) {
        return false;
      }
      if (selectedMicrodistrict !== 'Все микрорайоны' && p.microdistrict !== selectedMicrodistrict) {
        return false;
      }
      if (onlyExchange && !p.isExchangePossible) {
        return false;
      }
      if (onlyMortgage && !p.isMortgageEligible) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesAddress = p.address.toLowerCase().includes(q);
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        if (!matchesAddress && !matchesTitle && !matchesDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceKzt - b.priceKzt;
      if (sortBy === 'price-desc') return b.priceKzt - a.priceKzt;
      if (sortBy === 'area-desc') return b.area - a.area;
      return 0;
    });
  }, [selectedRooms, selectedMicrodistrict, onlyExchange, onlyMortgage, searchQuery, sortBy]);

  const displayedProperties = useMemo(() => {
    return filteredProperties.slice(0, visibleCount);
  }, [filteredProperties, visibleCount]);

  const resetFilters = () => {
    onFilterChange('Все', 'Все микрорайоны');
    setOnlyExchange(false);
    setOnlyMortgage(false);
    setSearchQuery('');
    setSortBy('price-asc');
    setVisibleCount(6);
  };

  return (
    <section id="catalog" className="py-16 lg:py-24 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>Каталог проверенной недвижимости</span>
              <span className="text-slate-600">·</span>
              <span>г. Степногорск</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              Квартиры и дома в продаже
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Каждый объект проверен на юридическую чистоту: отсутствие залогов, долгов по ком. услугам и согласование со всеми сособственниками.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span>Показано:</span>
            <span className="font-bold text-amber-400 tabular-nums">
              {Math.min(displayedProperties.length, filteredProperties.length)} из {filteredProperties.length}
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-8">
          
          {/* Quick Search & Room Tabs */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Room Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {roomOptions.map((opt) => {
                const isSelected = selectedRooms === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onFilterChange(opt.id, selectedMicrodistrict)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                        : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Text Search Input (e.g. "85" or "14" or "Садовая") */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Поиск по номеру дома (напр. 85)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-900/90 text-slate-200 text-xs rounded-lg border border-slate-700 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Microdistrict Dropdown & Toggles & Sort */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#10141d] border border-slate-800">
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Микрорайон:</span>
                <select
                  value={selectedMicrodistrict}
                  onChange={(e) => onFilterChange(selectedRooms, e.target.value)}
                  className="px-3 py-1.5 bg-slate-900 text-slate-200 text-xs rounded-md border border-slate-700 focus:border-amber-500 focus:outline-none"
                >
                  {STEPNOGORSK_MICRODISTRICTS.map((mkr) => (
                    <option key={mkr} value={mkr}>
                      {mkr}
                    </option>
                  ))}
                </select>
              </div>

              {/* Toggles */}
              <button
                type="button"
                onClick={() => setOnlyMortgage(!onlyMortgage)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                  onlyMortgage
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                Подходит под ипотеку
              </button>

              <button
                type="button"
                onClick={() => setOnlyExchange(!onlyExchange)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                  onlyExchange
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                Возможен обмен (мена)
              </button>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-400">Сортировка:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 bg-slate-900 text-slate-200 text-xs rounded-md border border-slate-700 focus:border-amber-500 focus:outline-none"
                >
                  <option value="price-asc">Сначала дешевле</option>
                  <option value="price-desc">Сначала дороже</option>
                  <option value="area-desc">По площади (большие)</option>
                </select>
              </div>

              {(selectedRooms !== 'Все' || selectedMicrodistrict !== 'Все микрорайоны' || onlyExchange || onlyMortgage || searchQuery) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded transition-colors"
                  title="Сбросить все фильтры"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Property Cards Grid */}
        {displayedProperties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="group flex flex-col bg-[#111622] rounded-xl overflow-hidden border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 will-change-transform"
                >
                  {/* Visual Asset Container with hardware acceleration & lazy loading */}
                  <div 
                    className="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProperty(prop)}
                  >
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-bold text-slate-950 bg-amber-400 rounded-md">
                        {prop.rooms}
                      </span>
                      {prop.isUrgent && (
                        <span className="px-2 py-0.5 text-[10px] font-bold text-rose-300 bg-rose-950/80 border border-rose-500/40 rounded">
                          Срочно
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white">
                      <div>
                        <div className="text-xl font-black font-mono tabular-nums text-amber-300">
                          {prop.priceKzt.toLocaleString('ru-RU')} ₸
                        </div>
                        <div className="text-[11px] text-slate-300 font-mono tabular-nums">
                          ≈ ${prop.priceUsd.toLocaleString('en-US')}
                        </div>
                      </div>
                      <span className="text-xs text-slate-200 bg-black/60 px-2 py-1 rounded backdrop-blur-xs font-mono">
                        {prop.area} м²
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Unboxed Metadata Line */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                        <span className="font-semibold text-amber-400">{prop.microdistrict}</span>
                        <span aria-hidden="true">·</span>
                        <span>{prop.floor}/{prop.totalFloors} этаж</span>
                        <span aria-hidden="true">·</span>
                        <span>{prop.condition}</span>
                      </div>

                      <h3 
                        onClick={() => setSelectedProperty(prop)}
                        className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 cursor-pointer font-['Plus_Jakarta_Sans']"
                      >
                        {prop.title}
                      </h3>

                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {prop.address}
                      </p>

                      <div className="mt-3 text-xs text-slate-400 flex flex-wrap gap-x-2 gap-y-1">
                        {prop.features.slice(0, 2).map((feat, i) => (
                          <span key={i} className="text-slate-300">
                            ✓ {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProperty(prop)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Подробнее</span>
                      </button>

                      <a
                        href={`https://wa.me/77013234031?text=${encodeURIComponent(
                          `Здравствуйте, Ербол! Интересует квартира: ${prop.title} (${prop.address}) за ${prop.priceKzt.toLocaleString('ru-RU')} ₸. Подскажите детали?`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                        title="Написать в WhatsApp по объекту"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button for weak devices */}
            {visibleCount < filteredProperties.length && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700 hover:border-amber-400 hover:text-white rounded-xl transition-all"
                >
                  <span>Показать еще квартиры</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty state */
          <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/30 border border-slate-800">
            <Home className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">По вашему запросу не найдено опубликованных объектов</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto mt-1 mb-5">
              В закрытой базе агентства RIELTCOM есть квартиры, не выставленные на сайт. Свяжитесь с Ерболом для персонального поиска.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 rounded-lg hover:text-white"
              >
                Сбросить фильтры
              </button>
              <a
                href="https://wa.me/77013234031?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D1%89%D1%83%20%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D1%83%20%D0%B2%20%D0%A1%D1%82%D0%B5%D0%BF%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA%D0%B5%20%D0%BF%D0%BE%D0%B4%20%D0%BC%D0%BE%D0%B8%20%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg hover:bg-amber-300"
              >
                Оставить запрос в WhatsApp
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
};
