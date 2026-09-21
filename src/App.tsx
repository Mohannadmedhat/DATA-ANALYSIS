import React, { useState, useEffect, useRef } from 'react';
import { presentationEN } from './data/slidesData';
import { dataAnalysisSession02EN } from './data/dataAnalysisSession02Data';
import { dataAnalysisSession03EN } from './data/dataAnalysisSession03Data';
import { dataAnalysisSession04EN } from './data/dataAnalysisSession04Data';
import { dataAnalysisSession05EN } from './data/dataAnalysisSession05Data';
import { dataAnalysisSession06EN } from './data/dataAnalysisSession06Data';
import { dataAnalysisSession07EN } from './data/dataAnalysisSession07Data';
import { dataAnalysisSession09EN } from './data/dataAnalysisSession09Data';
import { dataAnalysisSession10EN } from './data/dataAnalysisSession10Data';
import { dataAnalysisSession11EN } from './data/dataAnalysisSession11Data';
import { dataAnalysisSession12EN } from './data/dataAnalysisSession12Data';
import { dataAnalysisSession15EN } from './data/dataAnalysisSession15Data';
import { dataAnalysisSession16EN } from './data/dataAnalysisSession16Data';
import { dataAnalysisSession23EN } from './data/dataAnalysisSession23Data';
import { dataAnalysisSession24EN } from './data/dataAnalysisSession24Data';
import { pentestPresentationEN } from './data/pentestSlidesData';
import { SlideViewer } from './components/SlideViewer';
import { PresentationControls } from './components/PresentationControls';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { StudentResourcesModal } from './components/StudentResourcesModal';
import { SlideThumbnailGrid } from './components/SlideThumbnailGrid';
import { ExportModal } from './components/ExportModal';
import { InstantLogo } from './components/InstantLogo';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SessionSwitcher, SessionId } from './components/SessionSwitcher';
import { Language } from './types';
import { Shield, BarChart3, Layers } from 'lucide-react';

export default function App() {
  const getInitialSession = (): SessionId => {
    const params = new URLSearchParams(window.location.search);
    const sessionParam = params.get('session');
    if (sessionParam === '24' || sessionParam === 'session-24') return 'session-24';
    if (sessionParam === '23' || sessionParam === 'session-23') return 'session-23';
    if (sessionParam === '16' || sessionParam === 'session-16') return 'session-16';
    if (sessionParam === '15' || sessionParam === 'session-15') return 'session-15';
    if (sessionParam === '12' || sessionParam === 'session-12') return 'session-12';
    if (sessionParam === '11' || sessionParam === 'session-11') return 'session-11';
    if (sessionParam === '10' || sessionParam === 'session-10') return 'session-10';
    if (sessionParam === '9' || sessionParam === '09' || sessionParam === 'session-09') return 'session-09';
    if (sessionParam === '7' || sessionParam === '07' || sessionParam === 'session-07') return 'session-07';
    if (sessionParam === '6' || sessionParam === '06' || sessionParam === 'session-06') return 'session-06';
    if (sessionParam === '5' || sessionParam === '05' || sessionParam === 'session-05') return 'session-05';
    if (sessionParam === '4' || sessionParam === '04' || sessionParam === 'session-04') return 'session-04';
    if (sessionParam === '3' || sessionParam === '03' || sessionParam === 'session-03') return 'session-03';
    if (sessionParam === '2' || sessionParam === '02' || sessionParam === 'session-02') return 'session-02';
    return 'session-01';
  };

  const [activeCourse, setActiveCourse] = useState<'data-analysis' | 'pentest'>('data-analysis');
  const [sessionId, setSessionId] = useState<SessionId>(getInitialSession);
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
    : sessionId === 'session-24'
      ? dataAnalysisSession24EN
      : sessionId === 'session-23'
        ? dataAnalysisSession23EN
      : sessionId === 'session-16'
        ? dataAnalysisSession16EN
      : sessionId === 'session-15'
        ? dataAnalysisSession15EN
      : sessionId === 'session-12'
        ? dataAnalysisSession12EN
      : sessionId === 'session-11'
        ? dataAnalysisSession11EN
      : sessionId === 'session-10'
        ? dataAnalysisSession10EN
        : sessionId === 'session-09'
          ? dataAnalysisSession09EN
          : sessionId === 'session-07'
            ? dataAnalysisSession07EN
            : sessionId === 'session-06'
              ? dataAnalysisSession06EN
              : sessionId === 'session-05'
                ? dataAnalysisSession05EN
                : sessionId === 'session-04'
                  ? dataAnalysisSession04EN
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

  const handleSwitchSession = (sId: SessionId) => {
    setSessionId(sId);
    setCurrentSlideIndex(0);
    const url = new URL(window.location.href);
    const sNum = sId === 'session-24' ? '24' : sId === 'session-23' ? '23' : sId === 'session-16' ? '16' : sId === 'session-15' ? '15' : sId === 'session-12' ? '12' : sId === 'session-11' ? '11' : sId === 'session-10' ? '10' : sId === 'session-09' ? '09' : sId === 'session-07' ? '07' : sId === 'session-06' ? '06' : sId === 'session-05' ? '05' : sId === 'session-04' ? '04' : sId === 'session-03' ? '03' : sId === 'session-02' ? '02' : '01';
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
          className="no-print w-full max-w-5xl xl:max-w-6xl mx-auto mb-3 px-0 flex flex-wrap items-center justify-between gap-3 select-none"
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
            <SessionSwitcher
              currentSessionId={sessionId}
              onSelectSession={handleSwitchSession}
            />
          )}
        </header>
      )}

      {/* Main Presentation Stage */}
      <main className="w-full flex-1 flex flex-col items-center justify-center my-auto">
        <div data-slide-area="true" className="w-full max-w-5xl xl:max-w-6xl flex justify-center">
          <ErrorBoundary>
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
          </ErrorBoundary>
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
        slideTitle={currentSlide?.mainTitle || 'Slide'}
        sessionId={sessionId}
        courseType={activeCourse}
        sessionTitle={currentPresentation.title || sessionId}
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
                sessionId={sessionId}
                courseType={activeCourse}
                totalSlides={currentPresentation.totalSlides}
                onNext={() => {}}
                onPrev={() => {}}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
