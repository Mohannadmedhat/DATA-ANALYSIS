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

        {/* Slide quick jump track — Neon Orange Futuristic */}
        <div
          dir="ltr"
          ref={trackRef}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseLeave={() => !isDragging && setHoveredIdx(null)}
          className={`relative h-9 hidden lg:flex items-center gap-3 px-3.5 rounded-xl shrink-0 shadow-lg backdrop-blur-md transition-all select-none ${
            isDragging
              ? 'bg-slate-900 border border-orange-500/70 ring-2 ring-orange-500/20 cursor-grabbing'
              : 'bg-slate-900/95 border border-slate-800/90 hover:border-orange-500/30 cursor-grab'
          }`}
          title="Drag or click to jump between slides"
        >
          {/* Floating Hover & Drag Tooltip */}
          {(hoveredIdx !== null || isDragging) && slides[hoveredIdx ?? currentIndex] && (
            <div
              className="absolute -top-11 px-3 py-1 bg-slate-950/95 border border-orange-500/50 text-white rounded-lg shadow-2xl text-[11px] font-medium pointer-events-none whitespace-nowrap z-50 flex items-center gap-1.5 backdrop-blur-md -translate-x-1/2"
              style={{
                left: `${Math.min(Math.max(((hoveredIdx ?? currentIndex) / (totalSlides - 1)) * 100, 8), 92)}%`
              }}
            >
              <span className="font-mono font-bold text-orange-400">{slides[hoveredIdx ?? currentIndex].slideNumber}</span>
              <span className="text-slate-600">|</span>
              <span className="max-w-[180px] truncate text-slate-200 font-medium">{slides[hoveredIdx ?? currentIndex].mainTitle}</span>
            </div>
          )}

          {/* Track Container */}
          <div className="relative flex-1 min-w-[200px] xl:min-w-[260px] h-4 flex items-center">

            {/* Background track */}
            <div className="absolute inset-x-0 h-[3px] bg-slate-800 rounded-full" />

            {/* Filled neon gradient track */}
            <div
              className="absolute left-0 h-[3px] rounded-full transition-all duration-150 ease-out"
              style={{
                width: `${(currentIndex / Math.max(1, totalSlides - 1)) * 100}%`,
                background: 'linear-gradient(90deg, #c2410c, #f97316, #fbbf24)',
                boxShadow: '0 0 6px rgba(249,115,22,0.7), 0 0 14px rgba(249,115,22,0.35)',
              }}
            />

            {/* Thumb (current slide indicator) */}
            <div
              className="absolute transition-all duration-150 ease-out z-10 pointer-events-none"
              style={{
                left: `${(currentIndex / Math.max(1, totalSlides - 1)) * 100}%`,
                transform: 'translate(-50%, 0)',
              }}
            >
              <div
                className="w-[14px] h-[14px] rounded-full"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #fde68a, #f97316)',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  boxShadow: isDragging
                    ? '0 0 0 5px rgba(249,115,22,0.2), 0 0 14px rgba(249,115,22,0.9), 0 0 28px rgba(249,115,22,0.5)'
                    : '0 0 0 3px rgba(249,115,22,0.15), 0 0 8px rgba(249,115,22,0.7), 0 0 18px rgba(249,115,22,0.35)',
                  transition: 'box-shadow 0.2s',
                }}
              />
            </div>


            {/* Click targets */}
            <div className="absolute inset-0 flex items-center justify-between z-20">
              {slides.map((s, idx) => (
                <button
                  key={`btn-${s.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSlide(idx);
                  }}
                  onMouseEnter={() => !isDragging && setHoveredIdx(idx)}
                  className="w-2.5 h-full cursor-pointer focus:outline-none opacity-0"
                  aria-label={`Jump to slide ${s.slideNumber}`}
                />
              ))}
            </div>
          </div>

          {/* Progress % Badge — neon glow */}
          <span
            className="text-[11px] font-mono font-bold shrink-0 ps-2 ms-0.5"
            style={{
              color: '#f97316',
              textShadow: '0 0 10px rgba(249,115,22,0.6)',
              borderLeft: '1px solid rgba(51,65,85,0.8)',
            }}
          >
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
