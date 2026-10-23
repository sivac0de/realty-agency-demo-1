import React, { useState, useId } from 'react';
import { Calculator, MessageCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

export const MortgageCalculator: React.FC = () => {
  const propertyPriceId = useId();
  const downPaymentPercentId = useId();
  const loanTermYearsId = useId();
  const interestRateId = useId();

  const [propertyPrice, setPropertyPrice] = useState<number>(15000000); // 15 million KZT default
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [loanTermYears, setLoanTermYears] = useState<number>(15); // 15 years
  const [interestRate, setInterestRate] = useState<number>(7); // 7% for 7-20-25

  // Mortgage program presets
  const applyPreset = (preset: 'otbasy' | '7-20-25' | 'market') => {
    if (preset === 'otbasy') {
      setInterestRate(5.5);
      setDownPaymentPercent(50);
    } else if (preset === '7-20-25') {
      setInterestRate(7.0);
      setDownPaymentPercent(20);
    } else if (preset === 'market') {
      setInterestRate(17.5);
      setDownPaymentPercent(20);
    }
  };

  const downPaymentAmount = Math.round((propertyPrice * downPaymentPercent) / 100);
  const loanAmount = Math.max(0, propertyPrice - downPaymentAmount);

  // Monthly payment formula (Annuity)
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;

  const monthlyPayment =
    monthlyRate > 0 && totalMonths > 0 && loanAmount > 0
      ? Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  const totalPayment = monthlyPayment * totalMonths;
  const totalOverpayment = Math.max(0, totalPayment - loanAmount);

  const whatsappMessage = encodeURIComponent(
    `Здравствуйте! Рассчитал ипотеку в Степногорске на сайте RIELTCOM:\nСтоимость квартиры: ${propertyPrice.toLocaleString(
      'ru-RU'
    )} ₸\nПервоначальный взнос: ${downPaymentAmount.toLocaleString(
      'ru-RU'
    )} ₸ (${downPaymentPercent}%)\nСрок: ${loanTermYears} лет\nСтавка: ${interestRate}%\nЕжемесячный платеж: ${monthlyPayment.toLocaleString(
      'ru-RU'
    )} ₸.\nПомогите оформить заявку и проверить документы!`
  );

  return (
    <section id="mortgage" className="py-16 lg:py-24 bg-[#0d1017] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Финансовый помощник · Банки Казахстана</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Ипотечный калькулятор для жилья в Степногорске
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Рассчитайте ежемесячный платеж для программ Отбасы банк, 7-20-25 или стандартной банковской ипотеки с учетом пенсионных выплат ЕНПФ.
          </p>

          {/* Quick presets buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs text-slate-400 mr-1">Готовые программы:</span>
            <button
              type="button"
              onClick={() => applyPreset('7-20-25')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                interestRate === 7.0 && downPaymentPercent === 20
                  ? 'bg-amber-400 text-slate-950 border-amber-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-500/40'
              }`}
            >
              Программа 7-20-25 (7%)
            </button>
            <button
              type="button"
              onClick={() => applyPreset('otbasy')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                interestRate === 5.5
                  ? 'bg-amber-400 text-slate-950 border-amber-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-500/40'
              }`}
            >
              Отбасы Банк (Баспана ~5.5%)
            </button>
            <button
              type="button"
              onClick={() => applyPreset('market')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                interestRate === 17.5
                  ? 'bg-amber-400 text-slate-950 border-amber-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-500/40'
              }`}
            >
              Рыночная ипотека (17.5%)
            </button>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#111622] border border-slate-800 space-y-6">
            
            {/* Field: Property Price */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label htmlFor={propertyPriceId} className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Стоимость квартиры
                </label>
                <span className="text-base font-extrabold text-amber-400 font-mono tabular-nums">
                  {propertyPrice.toLocaleString('ru-RU')} ₸
                </span>
              </div>
              <input
                id={propertyPriceId}
                type="range"
                min="5000000"
                max="40000000"
                step="500000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>5 млн ₸</span>
                <span>20 млн ₸</span>
                <span>40 млн ₸</span>
              </div>
            </div>

            {/* Field: Down Payment */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label htmlFor={downPaymentPercentId} className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Первоначальный взнос ({downPaymentPercent}%)
                </label>
                <span className="text-sm font-bold text-white font-mono tabular-nums">
                  {downPaymentAmount.toLocaleString('ru-RU')} ₸
                </span>
              </div>
              <input
                id={downPaymentPercentId}
                type="range"
                min="10"
                max="70"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>10% (мин.)</span>
                <span>20% (7-20-25)</span>
                <span>50% (Отбасы)</span>
                <span>70%</span>
              </div>
            </div>

            {/* Field: Loan Term */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label htmlFor={loanTermYearsId} className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Срок кредита
                </label>
                <span className="text-sm font-bold text-white font-mono tabular-nums">
                  {loanTermYears} {loanTermYears === 1 ? 'год' : loanTermYears < 5 ? 'года' : 'лет'}
                </span>
              </div>
              <input
                id={loanTermYearsId}
                type="range"
                min="3"
                max="25"
                step="1"
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>3 года</span>
                <span>15 лет</span>
                <span>25 лет</span>
              </div>
            </div>

            {/* Field: Interest Rate */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label htmlFor={interestRateId} className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Годовая процентная ставка
                </label>
                <span className="text-sm font-bold text-amber-400 font-mono tabular-nums">
                  {interestRate}%
                </span>
              </div>
              <input
                id={interestRateId}
                type="range"
                min="3.5"
                max="22"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>3.5% (льготная)</span>
                <span>7% (госпрограмма)</span>
                <span>17.5% (стандарт)</span>
                <span>22%</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Можно использовать пенсионные накопления ЕНПФ на покрытие первоначального взноса или частичное досрочное погашение.
              </span>
            </div>

          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#131825] via-[#10141e] to-[#0c0f16] border border-amber-500/30 shadow-2xl space-y-6">
            
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Предварительный расчет платежей
            </div>

            {/* Large Payment Value */}
            <div>
              <span className="text-xs text-slate-400 block mb-1">Ежемесячный платеж:</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums leading-none">
                {monthlyPayment.toLocaleString('ru-RU')}{' '}
                <span className="text-lg text-amber-400 font-sans">₸/мес</span>
              </div>
            </div>

            {/* Tabular breakdown */}
            <div className="space-y-3 pt-4 border-t border-slate-800/80 text-xs font-mono">
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400 font-sans">Сумма кредита:</span>
                <span className="font-bold text-white tabular-nums">{loanAmount.toLocaleString('ru-RU')} ₸</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400 font-sans">Первоначальный взнос:</span>
                <span className="font-bold text-white tabular-nums">{downPaymentAmount.toLocaleString('ru-RU')} ₸</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400 font-sans">Переплата за {loanTermYears} лет:</span>
                <span className="font-bold text-amber-300 tabular-nums">{totalOverpayment.toLocaleString('ru-RU')} ₸</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400 font-sans">Итоговая сумма выплат:</span>
                <span className="font-bold text-white tabular-nums">{totalPayment.toLocaleString('ru-RU')} ₸</span>
              </div>
            </div>

            {/* Assistance CTA */}
            <div className="pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Агентство RIELTCOM помогает собрать пакет документов для одобрения в Отбасы банке и других банках г. Степногорск без отказов и очередей.
              </p>
              
              <a
                href={`https://wa.me/77013234031?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-lg shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-500 transition-all active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Отправить расчет риелтору в WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
