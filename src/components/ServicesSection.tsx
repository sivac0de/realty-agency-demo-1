import React from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Профессиональные риелторские услуги</span>
            <span className="text-slate-600">·</span>
            <span>Степногорск</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Полный спектр операций с недвижимостью
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Решаем жилищные вопросы любой степени сложности: от срочной продажи до сложных обменов и оформления наследства.
          </p>
        </div>

        {/* Bento Grid with Asymmetric Spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={service.id}
                className={`p-6 sm:p-7 rounded-2xl bg-[#111622] border border-slate-800/90 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group ${
                  isLarge ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#121724] to-[#0e121a]' : ''
                }`}
              >
                <div>
                  {/* Human Editorial Numbering */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-2xl font-black text-amber-400/90 font-mono tracking-tight">
                      {service.number}.
                    </span>
                    {service.badge && (
                      <span className="text-[11px] font-semibold text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full bg-amber-500/10">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-['Plus_Jakarta_Sans']">
                    {service.title}
                  </h3>

                  <div className="text-xs font-medium text-amber-400/90 mt-1 mb-3">
                    {service.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Points */}
                  <div className={`grid gap-2.5 ${isLarge ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={`https://wa.me/77013234031?text=${encodeURIComponent(
                      `Здравствуйте! Хочу проконсультироваться по услуге: "${service.title}" в Степногорске.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Бесплатная консультация</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[11px] text-slate-500">
                    Агентство RIELTCOM
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
