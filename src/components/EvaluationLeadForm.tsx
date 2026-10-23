import React, { useState } from 'react';
import { STEPNOGORSK_MICRODISTRICTS } from '../data/mockData';
import { Send, CheckCircle2, MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react';

export const EvaluationLeadForm: React.FC = () => {
  const [goal, setGoal] = useState<'sell' | 'buy' | 'exchange' | 'docs'>('sell');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [microdistrict, setMicrodistrict] = useState('6 микрорайон');
  const [rooms, setRooms] = useState('2-комнатная');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Пожалуйста, укажите ваше имя');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Пожалуйста, укажите корректный номер телефона (не менее 10 цифр)');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const getGoalLabel = () => {
    switch (goal) {
      case 'sell': return 'Продажа / Оценка квартиры';
      case 'buy': return 'Покупка квартиры';
      case 'exchange': return 'Мена (обмен) жилья';
      case 'docs': return 'Оформление документов';
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Здравствуйте, Ербол! Оставляю заявку с сайта RIELTCOM:\nЦель: ${getGoalLabel()}\nИмя: ${name}\nТелефон: ${phone}\nМикрорайон: ${microdistrict}\nКомнат: ${rooms}${
      comment ? `\nКомментарий: ${comment}` : ''
    }`
  );

  return (
    <section id="lead-form" className="py-16 lg:py-24 bg-[#0d1017] border-y border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-3xl bg-[#111622] border border-amber-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle amber ambient corner glow */}
          <div 
            className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/15 blur-[80px] rounded-full pointer-events-none"
            aria-hidden="true" 
          />

          {!submitted ? (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Бесплатная консультация и оценка жилья</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
                  Оставьте заявку риелтору в Степногорске
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Ербол Нурсиитов свяжется с вами в течение 15 минут, ответит на все вопросы и сделает точный расчет стоимости.
                </p>
              </div>

              {/* Goal Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                {[
                  { id: 'sell', label: 'Продать жилье' },
                  { id: 'buy', label: 'Купить квартиру' },
                  { id: 'exchange', label: 'Обмен (мена)' },
                  { id: 'docs', label: 'Документы' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id as any)}
                    className={`py-2.5 px-3 text-xs font-bold rounded-lg border transition-all ${
                      goal === item.id
                        ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                        : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-500/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-3 rounded-lg bg-rose-950/70 border border-rose-500/50 text-rose-300 text-xs">
                  {error}
                </div>
              )}

              {/* Form Grid */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Например: Азамат"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Телефон / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (701) 000-00-00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Микрорайон
                    </label>
                    <select
                      value={microdistrict}
                      onChange={(e) => setMicrodistrict(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      {STEPNOGORSK_MICRODISTRICTS.filter((m) => m !== 'Все микрорайоны').map((mkr) => (
                        <option key={mkr} value={mkr}>
                          {mkr}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Количество комнат
                    </label>
                    <select
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="1-комнатная">1-комнатная</option>
                      <option value="2-комнатная">2-комнатная</option>
                      <option value="3-комнатная">3-комнатная</option>
                      <option value="4-комнатная">4-комнатная</option>
                      <option value="Дом / Коттедж">Дом / Коттедж</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Дополнительные пожелания (номер дома, этаж, срочность)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Например: 6-85, 7 этаж, требуется предварительная оценка рыночной стоимости"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 rounded-xl shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-500 transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                    <span>Отправить заявку на бесплатную оценку</span>
                  </button>
                </div>

                <div className="text-center text-[11px] text-slate-500 pt-2">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Конфиденциальность гарантируется.
                </div>
              </form>
            </div>
          ) : (
            /* Success confirmation */
            <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Спасибо, {name}!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Ваша заявка на <span className="text-amber-400 font-medium">"{getGoalLabel()}"</span> успешно принята. Ербол свяжется с вами по номеру <span className="font-mono text-white">{phone}</span> в ближайшее время.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/77013234031?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Дублировать в WhatsApp для быстрого ответа</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setComment('');
                  }}
                  className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Отправить еще одну заявку
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
