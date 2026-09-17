import React, { useState, useRef, useEffect } from 'react';
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
  language?: Language;
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
}) => {
  const isRTL = false;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const progressPercent = Math.round(((currentIndex + 1) / totalSlides) * 100);

  const calculateSlideFromEvent = (e: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const offsetX = clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, offsetX / rect.width));
    const targetIdx = Math.round(ratio * (totalSlides - 1));
    return Math.max(0, Math.min(totalSlides - 1, targetIdx));
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const targetIdx = calculateSlideFromEvent(e);
    if (targetIdx !== undefined) {
      setHoveredIdx(targetIdx);
      onSelectSlide(targetIdx);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const targetIdx = calculateSlideFromEvent(e);
      if (targetIdx !== undefined) {
        setHoveredIdx(targetIdx);
        onSelectSlide(targetIdx);
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, totalSlides]);

  return (
    <div className="w-full max-w-5xl xl:max-w-6xl mt-3.5 px-1 flex items-center justify-between gap-2 text-xs text-slate-300 select-none overflow-x-auto no-scrollbar">
      
      {/* Left controls: Slide Navigator & Jump Dots */}
      <div className="flex items-center gap-2 shrink-0 flex-nowrap">
        <div className="h-9 flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 shadow-md shrink-0 gap-0.5">
          <button
            id="control-btn-prev"
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors text-slate-200 cursor-pointer"
            title="Previous Slide (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button 
            id="btn-thumbnails-open"
            onClick={onOpenThumbnails}
            className="h-7 px-2.5 rounded-lg hover:bg-slate-800 flex items-center gap-1.5 text-xs font-semibold text-slate-200 cursor-pointer transition-colors"
            title="Open Grid Overview"
          >
            <Grid className="w-3.5 h-3.5 text-orange-400" />
            <span>
              Slide {currentIndex + 1} of {totalSlides}
            </span>
          </button>

          <button
            id="control-btn-next"
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
            className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors text-slate-200 cursor-pointer"
            title="Next Slide (Right Arrow or Space)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide quick jump track (Drag & Seek supported) */}
        <div 
          ref={trackRef}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseLeave={() => !isDragging && setHoveredIdx(null)}
          className={`relative h-9 hidden lg:flex items-center gap-1.5 px-3 bg-slate-900/95 border rounded-xl shrink-0 shadow-md backdrop-blur-sm transition-all select-none ${
            isDragging 
              ? 'border-orange-500/80 ring-2 ring-orange-500/30 cursor-grabbing' 
              : 'border-slate-800/90 hover:border-slate-700 cursor-grab'
          }`}
          title="Drag or click to jump between slides"
        >
          {/* Floating Hover & Drag Tooltip */}
          {(hoveredIdx !== null || isDragging) && slides[hoveredIdx ?? currentIndex] && (
            <div 
              className="absolute -top-11 px-3 py-1 bg-slate-900/95 border border-orange-500/60 text-white rounded-lg shadow-2xl text-[11px] font-medium pointer-events-none whitespace-nowrap z-50 flex items-center gap-1.5 backdrop-blur-md transition-all -translate-x-1/2"
              style={{ 
                left: `${Math.min(Math.max(((hoveredIdx ?? currentIndex) / (totalSlides - 1)) * 100, 8), 92)}%` 
              }}
            >
              <span className="font-mono font-bold text-orange-400">{slides[hoveredIdx ?? currentIndex].slideNumber}</span>
              <span className="text-slate-600">|</span>
              <span className="max-w-[180px] truncate text-slate-200 font-medium">{slides[hoveredIdx ?? currentIndex].mainTitle}</span>
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
                  onMouseEnter={() => !isDragging && setHoveredIdx(idx)}
                  className={`transition-all duration-200 cursor-pointer relative group flex items-center justify-center ${
                    isCurrent
                      ? 'w-5 h-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 shadow-[0_0_12px_rgba(254,134,42,0.9)] scale-110 active:scale-125'
                      : isPast
                        ? 'w-1 h-1.5 rounded-full bg-orange-500/50 hover:bg-orange-400 hover:scale-150'
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

      {/* Right controls: Export & Fullscreen */}
      <div className="flex items-center gap-1.5 shrink-0 flex-nowrap">
        {/* Export / Share */}
        <button
          id="btn-export-share"
          onClick={onOpenExport}
          className="h-9 flex items-center gap-1.5 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-200 font-medium transition-colors shrink-0 shadow-md cursor-pointer"
          title="Export & Share"
        >
          <Share2 className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline-block">Export</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          id="btn-toggle-fullscreen"
          onClick={onToggleFullscreen}
          className="h-9 w-9 flex items-center justify-center bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-200 transition-colors shrink-0 shadow-md cursor-pointer"
          title={isFullscreen ? 'Exit Fullscreen (Esc)' : 'Enter Fullscreen Presentation Mode (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4 text-orange-400" /> : <Maximize2 className="w-4 h-4 text-orange-400" />}
        </button>
      </div>

    </div>
  );
};
