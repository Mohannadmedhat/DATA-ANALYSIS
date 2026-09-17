import React, { useState, useEffect, useRef } from 'react';
import { presentationEN } from './data/slidesData';
import { dataAnalysisSession02EN } from './data/dataAnalysisSession02Data';
import { dataAnalysisSession03EN } from './data/dataAnalysisSession03Data';
import { pentestPresentationEN } from './data/pentestSlidesData';
import { SlideViewer } from './components/SlideViewer';
import { PresentationControls } from './components/PresentationControls';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { StudentResourcesModal } from './components/StudentResourcesModal';
import { SlideThumbnailGrid } from './components/SlideThumbnailGrid';
import { ExportModal } from './components/ExportModal';
import { InstantLogo } from './components/InstantLogo';
import { Language } from './types';
import { Shield, BarChart3, Layers } from 'lucide-react';

export default function App() {
  const getInitialSession = (): 'session-01' | 'session-02' | 'session-03' => {
    const params = new URLSearchParams(window.location.search);
    const sessionParam = params.get('session');
    if (sessionParam === '3' || sessionParam === '03' || sessionParam === 'session-03') return 'session-03';
    if (sessionParam === '2' || sessionParam === '02' || sessionParam === 'session-02') return 'session-02';
    return 'session-01';
  };

  const [activeCourse, setActiveCourse] = useState<'data-analysis' | 'pentest'>('data-analysis');
  const [sessionId, setSessionId] = useState<'session-01' | 'session-02' | 'session-03'>(getInitialSession);
  const language: Language = 'en';
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState<boolean>(false);
  const [isThumbnailsOpen, setIsThumbnailsOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentPresentation = activeCourse === 'pentest'
    ? pentestPresentationEN
    : sessionId === 'session-03'
      ? dataAnalysisSession03EN
      : sessionId === 'session-02'
        ? dataAnalysisSession02EN
        : presentationEN;

  const currentSlide = currentPresentation.slides[currentSlideIndex] || currentPresentation.slides[0];
  const isRTL = false;

  const handleSwitchCourse = (course: 'data-analysis' | 'pentest') => {
    setActiveCourse(course);
    setCurrentSlideIndex(0);
  };

  const handleSwitchSession = (sId: 'session-01' | 'session-02' | 'session-03') => {
    setSessionId(sId);
    setCurrentSlideIndex(0);
    const url = new URL(window.location.href);
    const sNum = sId === 'session-03' ? '03' : sId === 'session-02' ? '02' : '01';
    url.searchParams.set('session', sNum);
    window.history.replaceState({}, '', url.toString());
  };

  const handleNext = () => {
    if (currentSlideIndex < currentPresentation.totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleSelectSlide = (idx: number) => {
    if (idx >= 0 && idx < currentPresentation.totalSlides) {
      setCurrentSlideIndex(idx);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (isRTL) {
          handlePrev();
        } else {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (isRTL) {
          handleNext();
        } else {
          handlePrev();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        if (!e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          toggleFullscreen();
        }
      } else if (e.key === 'r' || e.key === 'R') {
        if (!e.metaKey && !e.ctrlKey) {
          e.preventDefault();
          setIsResourcesOpen(prev => !prev);
        }
      } else if (e.key === 'Escape') {
        setIsNotesOpen(false);
        setIsResourcesOpen(false);
        setIsThumbnailsOpen(false);
        setIsExportOpen(false);
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [currentSlideIndex, currentPresentation, isRTL]);

  return (
    <div 
      ref={containerRef}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white ${
        isFullscreen ? 'p-2 sm:p-6 justify-center' : 'p-3 sm:p-6 lg:p-8'
      }`}
    >
      {/* Minimal Top Brand & Session Switcher Bar */}
      {!isFullscreen && (
        <header 
          dir="ltr"
          className="no-print w-full max-w-6xl xl:max-w-7xl mx-auto mb-3 px-2 flex flex-wrap items-center justify-between gap-3 select-none"
        >
          <div className="flex items-center gap-3.5">
            <InstantLogo className="h-5 sm:h-6 opacity-95 hover:opacity-100 transition-opacity" isDark={true} />
            <span className="w-px h-4.5 bg-slate-700/80 inline-block" />
            <h1 className="text-sm sm:text-base font-bold text-slate-100 tracking-tight">
              <bdi>{currentPresentation.courseName}</bdi>
            </h1>
          </div>

          {/* Session Switcher for Data Analysis */}
          {activeCourse === 'data-analysis' && (
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs shadow-md">
              <button
                onClick={() => handleSwitchSession('session-01')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  sessionId === 'session-01'
                    ? 'bg-[#1751B9] text-white border border-[#FE862A]/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#FE862A]" />
                <span>Session 01</span>
              </button>

              <button
                onClick={() => handleSwitchSession('session-02')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  sessionId === 'session-02'
                    ? 'bg-[#1751B9] text-white border border-[#FE862A]/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#FE862A]" />
                <span>Session 02: Excel Basics</span>
              </button>

              <button
                onClick={() => handleSwitchSession('session-03')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  sessionId === 'session-03'
                    ? 'bg-[#1751B9] text-white border border-[#FE862A]/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#FE862A]" />
                <span>Session 03: Descriptive Statistics</span>
              </button>
            </div>
          )}
        </header>
      )}

      {/* Main Presentation Stage */}
      <main className="w-full flex-1 flex flex-col items-center justify-center my-auto">
        <div data-slide-area="true" className="w-full max-w-6xl xl:max-w-7xl flex justify-center">
          <SlideViewer 
            slide={currentSlide}
            language={language}
            courseType={activeCourse}
            sessionId={sessionId}
            onNext={handleNext}
            onPrev={handlePrev}
            onSelectSlide={handleSelectSlide}
            onSwitchSession={handleSwitchSession}
            isFirst={currentSlideIndex === 0}
            isLast={currentSlideIndex === currentPresentation.totalSlides - 1}
            totalSlides={currentPresentation.totalSlides}
          />
        </div>

        {/* Presentation Controls Bar */}
        <div className="no-print w-full flex justify-center">
          <PresentationControls 
            currentIndex={currentSlideIndex}
            totalSlides={currentPresentation.totalSlides}
            slides={currentPresentation.slides}
            onNext={handleNext}
            onPrev={handlePrev}
            onSelectSlide={handleSelectSlide}
            isFullscreen={isFullscreen}
            onToggleFullscreen={toggleFullscreen}
            onOpenNotes={() => setIsNotesOpen(true)}
            onOpenResources={activeCourse === 'data-analysis' ? () => setIsResourcesOpen(true) : undefined}
            onOpenThumbnails={() => setIsThumbnailsOpen(true)}
            onOpenExport={() => setIsExportOpen(true)}
            language={language}
          />
        </div>
      </main>

      {/* Bottom Footer Note (hidden in fullscreen or print) */}
      {!isFullscreen && (
        <footer className="no-print w-full max-w-6xl xl:max-w-7xl mx-auto mt-4 pt-3 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>
              {isRTL ? 'العرض جاهز للشرح التفاعلي' : 'Interactive Presentation Deck Ready'}
            </span>
          </div>
          <div>
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px]">F</kbd> for Fullscreen mode</span>
          </div>
        </footer>
      )}

      {/* Modals and Overlays */}
      <SpeakerNotesModal 
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        slide={currentSlide}
        language={language}
      />

      <StudentResourcesModal 
        isOpen={isResourcesOpen}
        onClose={() => setIsResourcesOpen(false)}
        slide={currentSlide}
        language={language}
        sessionId={sessionId}
      />

      <SlideThumbnailGrid 
        isOpen={isThumbnailsOpen}
        onClose={() => setIsThumbnailsOpen(false)}
        slides={currentPresentation.slides}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={handleSelectSlide}
        language={language}
        sessionId={sessionId}
        onSwitchSession={handleSwitchSession}
      />

      <ExportModal 
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        slides={currentPresentation.slides}
        language={language}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={handleSelectSlide}
      />

      {/* Hidden print container - only render if window is in print mode */}
      <div className="hidden print:block">
        {typeof window !== 'undefined' && window.matchMedia && window.matchMedia('print').matches && (
          currentPresentation.slides.map((s) => (
            <div key={s.id} className="print-page mb-8">
              <SlideViewer
                slide={s}
                language={language}
                totalSlides={currentPresentation.totalSlides}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
