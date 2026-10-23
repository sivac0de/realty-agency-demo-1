import React from 'react';
import { REVIEWS_DATA } from '../data/mockData';
import { Star, MessageSquareQuote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>Реальные истории клиентов</span>
              <span className="text-slate-600">·</span>
              <span>г. Степногорск</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              Отзывы о работе агентства RIELTCOM
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white font-mono">5.0</span>
            <span>на основе сотен завершенных сделок</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#111622] border border-slate-800/90 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">{rev.date}</span>
                </div>

                {/* Deal type label (unboxed text) */}
                <div className="text-xs font-semibold text-amber-400 mb-3">
                  {rev.dealType} ({rev.microdistrict})
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center border border-amber-500/30">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{rev.name}</div>
                  <div className="text-[10px] text-slate-500">Клиент RIELTCOM · Степногорск</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
