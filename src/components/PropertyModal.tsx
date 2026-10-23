import React, { useState } from 'react';
import { X, MapPin, Maximize2, Layers, CheckCircle, MessageCircle, Phone, Calendar, ArrowRight, Share2 } from 'lucide-react';
import { Property } from '../types';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!property) return null;

  const whatsappMessage = encodeURIComponent(
    `Здравствуйте, Ербол! Меня интересует объект: ${property.title} (${property.address}) за ${property.priceKzt.toLocaleString('ru-RU')} ₸. Подскажите, когда можно посмотреть?`
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0e121a] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#121622]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {property.microdistrict}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400 font-mono">ID: {property.id}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors text-xs flex items-center gap-1.5"
              title="Скопировать ссылку"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copied ? 'Скопировано!' : 'Поделиться'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Main Visual Image & Thumbnails */}
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-video max-h-[420px] w-full border border-slate-800">
              <img
                src={property.images[activeImageIdx] || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30 text-xs font-medium text-amber-400">
                Фото {activeImageIdx + 1} из {property.images.length}
              </div>
            </div>

            {property.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border transition-all ${
                      activeImageIdx === idx ? 'border-amber-400 ring-2 ring-amber-400/30' : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Миниатюра" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title and Pricing */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
                {property.title}
              </h2>
              <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>г. Степногорск, {property.address}</span>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
                {property.priceKzt.toLocaleString('ru-RU')} ₸
              </div>
              <div className="text-xs text-slate-400 font-mono tabular-nums mt-0.5">
                ≈ ${property.priceUsd.toLocaleString('en-US')} · {(property.priceKzt / property.area).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₸/м²
              </div>
            </div>
          </div>

          {/* Key Characteristics Unboxed Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#121622] border border-slate-800">
            <div>
              <div className="text-xs text-slate-400">Общая площадь</div>
              <div className="text-base font-bold text-white font-mono tabular-nums mt-0.5">
                {property.area} м²
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Кухня</div>
              <div className="text-base font-bold text-white font-mono tabular-nums mt-0.5">
                {property.kitchenArea} м²
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Этаж</div>
              <div className="text-base font-bold text-white font-mono tabular-nums mt-0.5">
                {property.floor} из {property.totalFloors}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Состояние</div>
              <div className="text-base font-bold text-amber-400 mt-0.5">
                {property.condition}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Описание объекта
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Features Checklist */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Особенности и преимущества
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="font-bold text-amber-400">100% юридическая чистота: </span>
              Все документы на квартиру проверены агентством RIELTCOM (Ербол Нурсиитов). Долгов, арестов и залогов нет.
            </div>
          </div>

        </div>

        {/* Modal Footer / Direct Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-slate-800 bg-[#121622]">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Показ квартиры в удобное для вас время по предварительной договоренности.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/77013234031?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow hover:from-amber-300 hover:to-amber-400 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Записаться на просмотр (WhatsApp)</span>
            </a>
            <a
              href="tel:+77013234031"
              className="p-2.5 text-amber-400 hover:bg-amber-400/10 border border-amber-500/30 rounded-lg transition-colors shrink-0"
              title="Позвонить риелтору"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
