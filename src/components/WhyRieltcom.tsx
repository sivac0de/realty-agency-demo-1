import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck, Scale } from 'lucide-react';

export const WhyRieltcom: React.FC = () => {
  const comparisons = [
    {
      label: 'Проверка истории собственников и арестов',
      alone: 'Поверхностная проверка; риск купить квартиру с судебным запретом или долгами',
      rieltcom: 'Полная тройная проверка через eGov, нотариуса и базу судебных исполнителей'
    },
    {
      label: 'Сложные цепочки мены (обмена) жилья',
      alone: 'Высокий риск: продали свою квартиру, а встречный продавец поднял цену или отказался',
      rieltcom: 'Синхронная фиксация сделки в один день у проверенного нотариуса с защитой задатка'
    },
    {
      label: 'Торг с продавцом по цене',
      alone: 'Эмоциональный торг без знания реальных сделок в данном доме',
      rieltcom: 'Аргументированное снижение стоимости (экономим покупателям в среднем до 1 000 000 ₸)'
    },
    {
      label: 'Ипотека и пенсионные выплаты (ЕНПФ)',
      alone: 'Отказы банков из-за ошибок в оценке или неполного пакета документов',
      rieltcom: 'Сопровождение в Отбасы банке, Halyk, Freedom; одобрение с первого раза'
    },
    {
      label: 'Комиссия и оплата услуг',
      alone: 'Скрытые доплаты, риски потерять задаток при срыве сделки',
      rieltcom: '0 ₸ предоплаты; расчет только в день подписания документов у нотариуса'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0b0e14] relative border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Scale className="w-3.5 h-3.5" />
            <span>Честный взгляд на рынок недвижимости</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Покупка своими силами или через агентство RIELTCOM?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Почему более 2 800 семей в Степногорске доверили свои сбережения и квадратные метры профессионалам.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-2xl bg-[#111622] border border-slate-800 overflow-hidden shadow-xl">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900/90 border-b border-slate-800 p-4 text-xs font-bold uppercase tracking-wider">
            <div className="md:col-span-4 text-slate-400">Параметр сделки</div>
            <div className="hidden md:block md:col-span-4 text-rose-400 flex items-center gap-1.5">
              <span>Самостоятельно по объявлениям</span>
            </div>
            <div className="hidden md:block md:col-span-4 text-amber-400 flex items-center gap-1.5">
              <span>С агентством RIELTCOM</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800/80">
            {comparisons.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 md:gap-4 items-start sm:items-center">
                
                {/* Parameter */}
                <div className="md:col-span-4 text-xs sm:text-sm font-bold text-white">
                  {item.label}
                </div>

                {/* Alone */}
                <div className="md:col-span-4 flex items-start gap-2 text-xs text-slate-400 bg-rose-950/20 md:bg-transparent p-2.5 md:p-0 rounded-lg">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.alone}</span>
                </div>

                {/* With Rieltcom */}
                <div className="md:col-span-4 flex items-start gap-2 text-xs text-slate-200 bg-amber-500/10 md:bg-transparent p-2.5 md:p-0 rounded-lg font-medium">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.rieltcom}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-white block">Личная ответственность руководителя:</span>
              Ербол Нурсиитов лично проверяет каждый договор и присутствует на каждой сделке у нотариуса.
            </div>
          </div>

          <a
            href="https://wa.me/77013234031"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg whitespace-nowrap transition-colors shrink-0 shadow"
          >
            Задать вопрос Ерболу
          </a>
        </div>

      </div>
    </section>
  );
};
