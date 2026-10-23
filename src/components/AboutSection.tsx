import React from 'react';
import { Award, ShieldCheck, Users, Instagram, Phone, MessageCircle, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#0d1017] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Asset Left Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-black">
              <img
                src="/src/assets/images/realtor_consultation_office_1792736881148.jpg"
                alt="Консультация клиентов в агентстве недвижимости RIELTCOM"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e121a] via-transparent to-transparent" />
              
              {/* Instagram Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0e121a]/95 backdrop-blur-md border border-amber-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5">
                      <div className="w-full h-full bg-[#0e121a] rounded-full flex items-center justify-center text-amber-400">
                        <Instagram className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">@erbolnursiitov</div>
                      <div className="text-[11px] text-slate-400">2 880+ подписчиков · 245 публикаций</div>
                    </div>
                  </div>
                  <a
                    href="https://instagram.com/erbolnursiitov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-md hover:bg-amber-300 transition-colors"
                  >
                    Инстаграм
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Content Right Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span>Опыт, проверенный временем</span>
              <span className="text-slate-600">·</span>
              <span>С 2007 года</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-['Plus_Jakarta_Sans']">
              Агентство недвижимости «RIELTCOM» и Ербол Нурсиитов
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Более 19 лет мы помогаем жителям Степногорска и Акмолинской области безопасно покупать, выгодно продавать и грамотно менять недвижимость.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              В отличие от случайных маклеров, каждое обращение курируется лично руководителем агентства. Мы знаем особенности каждого дома и серии во всех микрорайонах города: от толщины стен и напора отопления до истории собственников в органах юстиции.
            </p>

            {/* Core Values Bento Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#111622] border border-slate-800">
                <div className="text-amber-400 font-bold text-sm mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Безопасность сделки</span>
                </div>
                <p className="text-xs text-slate-400">
                  Тройная юридическая проверка: eGov, ЦОН, судебные реестры, согласие всех сособственников.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#111622] border border-slate-800">
                <div className="text-amber-400 font-bold text-sm mb-1 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Реальная рыночная цена</span>
                </div>
                <p className="text-xs text-slate-400">
                  Честная экспертная оценка без завышенных иллюзий и без демпинга. Защищаем ваши интересы при торге.
                </p>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
              <a
                href="https://wa.me/77013234031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow hover:from-amber-300 hover:to-amber-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Написать руководителю в WhatsApp</span>
              </a>

              <a
                href="tel:+77013234031"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg hover:border-amber-500/40 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+7 (701) 323-40-31</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
