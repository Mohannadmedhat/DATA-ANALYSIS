import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Grid, 
  BookOpen, 
  Share2, 
  Globe, 
  GraduationCap
} from 'lucide-react';
import { Language, SlideData } from '../types';

interface PresentationControlsProps {
  currentIndex: number;
  totalSlides: number;
  slides: SlideData[];
  onNext: () => void;
  onPrev: () => void;
  onSelectSlide: (index: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenNotes: () => void;
  onOpenResources?: () => void;
  onOpenThumbnails: () => void;
  onOpenExport: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentIndex,
  totalSlides,
  slides,
  onNext,
  onPrev,
  onSelectSlide,
  isFullscreen,
  onToggleFullscreen,
  onOpenNotes,
  onOpenResources,
  onOpenThumbnails,
  onOpenExport,
  language,
  onToggleLanguage,
}) => {
  const isRTL = language === 'ar';
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const progressPercent = Math.round(((currentIndex + 1) / totalSlides) * 100);

  return (
    <div className="w-full max-w-6xl xl:max-w-7xl mt-4 px-1 flex items-center justify-between gap-2 text-xs text-slate-300 select-none overflow-x-auto no-scrollbar">
      
      {/* Left controls: Slide Navigator & Jump Dots */}
      <div className="flex items-center gap-2 shrink-0 flex-nowrap">
        <div className="h-9 flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 shadow-md shrink-0 gap-0.5">
          <button
            id="control-btn-prev"
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors text-slate-200 cursor-pointer"
            title={isRTL ? 'الشريحة السابقة (السهم الأيسر)' : 'Previous Slide (Left Arrow)'}
          >
            {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>

          <button 
            id="btn-thumbnails-open"
            onClick={onOpenThumbnails}
            className="h-7 px-2.5 rounded-lg hover:bg-slate-800 flex items-center gap-1.5 text-xs font-semibold text-slate-200 cursor-pointer transition-colors"
            title="Open Grid Overview"
          >
            <Grid className="w-3.5 h-3.5 text-blue-400" />
            <span>
              {isRTL ? `شريحة ${currentIndex + 1} من ${totalSlides}` : `Slide ${currentIndex + 1} of ${totalSlides}`}
            </span>
          </button>

          <button
            id="control-btn-next"
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
            className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors text-slate-200 cursor-pointer"
            title={isRTL ? 'الشريحة التالية (السهم الأيمن أو المسافة)' : 'Next Slide (Right Arrow or Space)'}
          >
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Slide quick jump track */}
        <div 
          className="relative h-9 hidden lg:flex items-center gap-1.5 px-3 bg-slate-900/95 border border-slate-800/90 rounded-xl shrink-0 shadow-md backdrop-blur-sm"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {/* Floating Hover Tooltip */}
          {hoveredIdx !== null && slides[hoveredIdx] && (
            <div 
              className="absolute -top-10 px-2.5 py-1 bg-slate-900/95 border border-slate-700/80 text-white rounded-lg shadow-2xl text-[11px] font-medium pointer-events-none whitespace-nowrap z-50 flex items-center gap-1.5 backdrop-blur-md transition-all -translate-x-1/2"
              style={{ 
                left: isRTL 
                  ? `${100 - Math.min(Math.max((hoveredIdx / (totalSlides - 1)) * 100, 10), 90)}%` 
                  : `${Math.min(Math.max((hoveredIdx / (totalSlides - 1)) * 100, 10), 90)}%` 
              }}
            >
              <span className="font-mono font-bold text-blue-400">{slides[hoveredIdx].slideNumber}</span>
              <span className="text-slate-600">|</span>
              <span className="max-w-[180px] truncate text-slate-200 font-medium">{slides[hoveredIdx].mainTitle}</span>
            </div>
          )}

          {/* Dots Track */}
          <div className="flex items-center gap-1">
            {slides.map((s, idx) => {
              const isCurrent = idx === currentIndex;
              const isPast = idx < currentIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectSlide(idx)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`transition-all duration-200 cursor-pointer relative group flex items-center justify-center ${
                    isCurrent
                      ? 'w-4 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.7)]'
                      : isPast
                        ? 'w-1 h-1.5 rounded-full bg-blue-500/50 hover:bg-blue-400 hover:scale-150'
                        : 'w-1 h-1.5 rounded-full bg-slate-700/70 hover:bg-slate-400 hover:scale-150'
                  }`}
                  aria-label={`Jump to slide ${s.slideNumber}`}
                />
              );
            })}
          </div>

          {/* Progress Percentage Badge */}
          <span className="text-[10px] font-mono font-bold text-slate-400 border-s border-slate-800 ps-2 ms-0.5">
            {progressPercent}%
          </span>
        </div>
      </div>

      {/* Right controls: Tools, Notes, Language & Fullscreen */}
      <div className="flex items-center gap-1.5 shrink-0 flex-nowrap">
        {/* Language Switcher */}
        <button
          id="btn-toggle-lang"
          onClick={onToggleLanguage}
          className="h-9 flex items-center gap-1.5 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-200 font-semibold transition-colors shrink-0 shadow-md cursor-pointer"
          title={language === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}
        >
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <span>{language === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
        </button>

        {/* Student Resources */}
        {onOpenResources && (
          <button
            id="btn-student-resources"
            onClick={onOpenResources}
            className="h-9 flex items-center gap-1.5 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-200 font-medium transition-colors shrink-0 shadow-md cursor-pointer"
            title={isRTL ? 'مصادر ومراجع الطالب' : 'Student Resources'}
          >
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline-block">{isRTL ? 'مصادر ومراجع' : 'Resources'}</span>
          </button>
        )}

        {/* Speaker Notes */}
        <button
          id="btn-speaker-notes"
          onClick={onOpenNotes}
          className="h-9 flex items-center gap-1.5 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-200 font-medium transition-colors shrink-0 shadow-md cursor-pointer"
          title={isRTL ? 'ملاحظات المحاضر' : 'Speaker Notes'}
        >
          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline-block">{isRTL ? 'ملاحظات الشرح' : 'Notes'}</span>
        </button>

        {/* Export / Share */}
        <button
          id="btn-export-share"
          onClick={onOpenExport}
          className="h-9 flex items-center gap-1.5 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-200 font-medium transition-colors shrink-0 shadow-md cursor-pointer"
          title={isRTL ? 'مشاركة وتصدير' : 'Export & Share'}
        >
          <Share2 className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden md:inline-block">{isRTL ? 'تصدير' : 'Export'}</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          id="btn-toggle-fullscreen"
          onClick={onToggleFullscreen}
          className="h-9 w-9 flex items-center justify-center bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-200 transition-colors shrink-0 shadow-md cursor-pointer"
          title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Enter Fullscreen Presentation Mode (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 text-blue-400" /> : <Maximize2 className="w-4 h-4 text-blue-400" />}
        </button>
      </div>

    </div>
  );
};
