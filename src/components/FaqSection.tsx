import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Сколько времени занимает продажа квартиры в Степногорске?',
      a: 'При адекватной рыночной оценке и качественной предпродажной подготовке продажа занимает от 2 до 4 недель. Если вам необходимо продать срочно, мы предлагаем услугу срочного выкупа или активируем закрытую базу постоянных инвесторов и покупателей, готовых к сделке за 3-5 дней.'
    },
    {
      q: 'Какие документы необходимы для продажи или обмена квартиры?',
      a: 'Базовый пакет: правоустанавливающий документ (договор купли-продажи, приватизации, мены, дарения или свидетельство о праве на наследство), технический паспорт на квартиру, удостоверения личности всех совершеннолетних собственников и свидетельства о рождении детей, нотариальное согласие супруга(и). Справку об обременениях (форма 2) мы запрашиваем самостоятельно через eGov.'
    },
    {
      q: 'Как проходит процесс мены (обмена) квартир без рисков?',
      a: 'Мы выстраиваем четкую одновременную цепочку. Обе стороны встречаются у одного нотариуса в один день. Подписывается договор мены с указанием точной суммы доплаты, либо два взаимосвязанных договора купли-продажи. Передача денег и освобождение жилплощади фиксируются юридически, исключая ситуацию, когда вы продали свое жилье, а встречный вариант сорвался.'
    },
    {
      q: 'Можно ли использовать пенсионные накопления ЕНПФ и ипотеку Отбасы Банка?',
      a: 'Да, обязательно! Большая часть сделок в Степногорске сейчас проходит с привлечением льготных займов Отбасы Банка, программы 7-20-25 или пенсионных излишков ЕНПФ. Мы готовим пакет документов специально под требования выбранного банка, согласуем оценку и сопровождаем процедуру до перечисления средств на эскроу-счет.'
    },
    {
      q: 'Берете ли вы предоплату за консультацию и выезд на объект?',
      a: 'Нет. Первичная консультация, выезд на квартиру и анализ рыночной стоимости по микрорайонам Степногорска осуществляются абсолютно бесплатно. Наша комиссия оплачивается только по факту успешного завершения сделки у нотариуса.'
    },
    {
      q: 'Что делать, если в квартире есть неузаконенная перепланировка или арест?',
      a: 'Агентство RIELTCOM более 19 лет решает сложные правовые вопросы. Мы помогаем заказать новый технический паспорт, получить архитектурно-планировочное заключение, снять обременения и закрыть исполнительные производства законным путем до момента нотариального удостоверения сделки.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0b0e14] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Вопросы и ответы · Недвижимость Степногорска</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Ответы на главные вопросы покупателей и продавцов недвижимости.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#111622] border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
