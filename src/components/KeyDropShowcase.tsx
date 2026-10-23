import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, RotateCcw, Key, Sparkles, ArrowDown } from 'lucide-react';
import { playKeyDropSound } from '../utils/audio';

export const KeyDropShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasDropped, setHasDropped] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger drop animation on scroll into view with low-overhead IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasDropped) {
            triggerDrop();
          }
        });
      },
      { threshold: 0.35 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasDropped, soundEnabled]);

  const triggerDrop = () => {
    setIsAnimating(true);
    setHasDropped(true);

    if (soundEnabled) {
      setTimeout(() => {
        playKeyDropSound();
      }, 550);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 1200);
  };

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasDropped(false);
    setTimeout(() => {
      triggerDrop();
    }, 60);
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      playKeyDropSound();
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-24 bg-[#0a0d13] overflow-hidden border-y border-amber-500/20"
    >
      {/* Background Image with optimized loading & dark scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/entryway_key_tray_1792739534053.jpg"
          alt="Прихожая и тарелка для ключей"
          className="w-full h-full object-cover opacity-25 filter blur-xs"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d13] via-[#0a0d13]/85 to-[#0a0d13]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section title & context */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
            <Key className="w-3.5 h-3.5" />
            <span>Ощущение дома начинается здесь</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Тот самый момент, когда ключи ложатся на тарелку в прихожей
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2 leading-relaxed">
            Почувствуйте радость возвращения в собственную квартиру. Каждая сделка в агентстве RIELTCOM заканчивается этим долгожданным звоном.
          </p>
        </div>

        {/* Interactive Visual Stage: Tray and Dropping Keys */}
        <div
          onClick={triggerDrop}
          className="relative max-w-md mx-auto h-[260px] sm:h-[300px] flex items-center justify-center cursor-pointer select-none group"
          title="Нажмите, чтобы сбросить ключи в тарелку"
        >
          {/* Subtle Ambient Plate Shadow & Halo */}
          <div className="absolute bottom-6 w-64 sm:w-72 h-14 bg-amber-500/10 blur-xl rounded-full pointer-events-none" />

          {/* The Ceramic Key Tray Graphic (Hardware-accelerated CSS) */}
          <div className="absolute bottom-8 w-60 sm:w-72 h-24 sm:h-28 rounded-[50%] bg-gradient-to-b from-[#1c2230] via-[#121620] to-[#0c0f16] border-2 border-amber-500/40 shadow-2xl flex items-center justify-center">
            {/* Inner rim reflection */}
            <div className="w-[88%] h-[82%] rounded-[50%] bg-gradient-to-b from-[#0d111a] to-[#151a26] border border-amber-500/20 shadow-inner flex items-center justify-center">
              <span className="text-[10px] tracking-widest font-mono text-amber-500/40 uppercase">
                RIELTCOM · STEPNOGORSK
              </span>
            </div>
          </div>

          {/* Animated Falling Keys */}
          <div
            className={`absolute transition-transform duration-700 ease-out will-change-transform ${
              hasDropped
                ? 'translate-y-[52px] sm:translate-y-[62px] rotate-[-12deg] scale-100'
                : '-translate-y-[120px] sm:-translate-y-[150px] rotate-[28deg] scale-90 opacity-40'
            }`}
            style={{
              transitionTimingFunction: hasDropped
                ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' // realistic physical bounce
                : 'ease-out'
            }}
          >
            {/* Realistic Detailed SVG Keys with Brass Gradient and Leather Keyring */}
            <div className="relative filter drop-shadow-2xl">
              <svg
                width="140"
                height="110"
                viewBox="0 0 140 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform -rotate-6"
              >
                {/* Leather Keychain Tag */}
                <path
                  d="M18 20 C18 12, 26 6, 36 6 L64 6 C74 6, 82 12, 82 20 L82 26 C82 34, 74 40, 64 40 L36 40 C26 40, 18 34, 18 26 Z"
                  fill="#78350f"
                  stroke="#92400e"
                  strokeWidth="1.5"
                />
                <circle cx="28" cy="23" r="3.5" fill="#f59e0b" />
                <text x="36" y="26" fill="#fde68a" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                  RIELTCOM
                </text>

                {/* Steel Key Ring */}
                <circle
                  cx="76"
                  cy="32"
                  r="14"
                  stroke="url(#ringGrad)"
                  strokeWidth="3.5"
                  fill="none"
                />

                {/* Key 1: Main Apartment Door Key (Golden Brass) */}
                <path
                  d="M74 38 L118 78 C121 81, 122 86, 118 90 C114 94, 109 93, 106 90 L66 50"
                  stroke="url(#goldKey)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Key Teeth */}
                <path d="M104 64 L112 70" stroke="url(#goldKey)" strokeWidth="3" strokeLinecap="round" />
                <path d="M110 72 L116 77" stroke="url(#goldKey)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="68" cy="42" r="10" stroke="url(#goldKey)" strokeWidth="3" fill="none" />

                {/* Key 2: Secondary Intercom / Mailbox Key (Silver Steel) */}
                <path
                  d="M80 34 L128 50 C131 51, 133 54, 131 57 C129 60, 125 61, 122 59 L74 44"
                  stroke="url(#silverKey)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="74" cy="40" r="8" stroke="url(#silverKey)" strokeWidth="2.5" fill="none" />

                {/* Gradients */}
                <defs>
                  <linearGradient id="goldKey" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="45%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>
                  <linearGradient id="silverKey" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#64748b" />
                  </linearGradient>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e2e8f0" />
                    <stop offset="50%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Interactive controls bar floating over the plate */}
          <div className="absolute top-2 right-2 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleSound}
              className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1.5 ${
                soundEnabled
                  ? 'bg-amber-400 text-slate-950 border-amber-400'
                  : 'bg-slate-900/90 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={soundEnabled ? 'Звук включен' : 'Включить звук падения ключей'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{soundEnabled ? 'Звук вкл' : 'Вкл. звук'}</span>
            </button>

            <button
              type="button"
              onClick={handleReplay}
              disabled={isAnimating}
              className="p-2 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-700 hover:text-amber-400 hover:border-amber-500/40 text-xs transition-colors flex items-center gap-1.5"
              title="Сбросить ключи заново"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${isAnimating ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Повторить</span>
            </button>
          </div>
        </div>

        {/* Direct transition prompt to the catalog */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl shadow-lg shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 transition-all active:scale-95"
          >
            <span>Выбрать квартиру и получить ключи</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <span className="text-xs text-slate-400">
            8 проверенных объектов в продаже
          </span>
        </div>

      </div>
    </section>
  );
};
