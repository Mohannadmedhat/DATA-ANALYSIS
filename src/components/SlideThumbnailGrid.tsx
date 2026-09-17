import React from 'react';
import { X, Check } from 'lucide-react';
import { SlideData, Language } from '../types';

interface SlideThumbnailGridProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  language: Language;
  sessionId?: 'session-01' | 'session-02';
  onSwitchSession?: (sessionId: 'session-01' | 'session-02') => void;
}

export const SlideThumbnailGrid: React.FC<SlideThumbnailGridProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onSelectSlide,
  language,
  sessionId = 'session-01',
  onSwitchSession
}) => {
  if (!isOpen) return null;
  const isRTL = language === 'ar';

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-200"
    >
      <div 
        dir={isRTL ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[85vh] p-6 shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-200 cursor-default"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 gap-3 flex-wrap">
          <div>
            <span className="text-xs font-mono text-orange-400 font-bold uppercase">
              {isRTL ? 'مخطط الشرائح' : 'Slide Overview'}
            </span>
            <h3 className="text-lg font-bold text-white">
              {isRTL 
                ? (sessionId === 'session-02' ? `جميع شرائح السيشن الثانية: إكسيل (${slides.length} شريحة)` : `جميع شرائح السيشن الأولى: أساسيات (${slides.length} شريحة)`)
                : (sessionId === 'session-02' ? `Session 02: Excel Basics (${slides.length} Slides)` : `Session 01: Fundamentals (${slides.length} Slides)`)}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {onSwitchSession && (
              <div className="flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => onSwitchSession('session-01')}
                  className={`px-2.5 py-1 rounded cursor-pointer transition-all ${
                    sessionId === 'session-01' 
                      ? 'bg-[#1751B9] text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Session 01
                </button>
                <button
                  onClick={() => onSwitchSession('session-02')}
                  className={`px-2.5 py-1 rounded cursor-pointer transition-all ${
                    sessionId === 'session-02' 
                      ? 'bg-orange-500 text-slate-950 font-black' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Session 02
                </button>
              </div>
            )}

            <button 
              id="close-thumbnails-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {slides.map((slide, idx) => {
            const isCurrent = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                id={`thumb-slide-${slide.id}`}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`group relative text-left rounded-xl p-3 border transition-all text-xs flex flex-col justify-between h-36 ${
                  isCurrent
                    ? 'border-blue-500 bg-blue-950/40 ring-2 ring-blue-500/40'
                    : slide.darkTheme 
                      ? 'border-slate-800 bg-slate-950 hover:border-slate-700' 
                      : 'border-slate-800/80 bg-slate-900/90 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-blue-400">
                      {slide.slideNumber}
                    </span>
                    {isCurrent && (
                      <span className="p-0.5 rounded-full bg-blue-500 text-white">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-200 group-hover:text-white line-clamp-2 leading-tight">
                    {slide.mainTitle}
                  </h4>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-800/60 pt-1.5">
                  <span className="truncate max-w-[120px]">{slide.subBadge}</span>
                  <span className="capitalize">{slide.type.replace('-', ' ')}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>{isRTL ? 'انقر على أي شريحة للانتقال إليها مباشرة' : 'Click on any slide to jump directly to it'}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
          >
            {isRTL ? 'تم' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};
