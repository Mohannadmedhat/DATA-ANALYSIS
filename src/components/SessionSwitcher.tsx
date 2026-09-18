import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Check 
} from 'lucide-react';

export type SessionId = 'session-01' | 'session-02' | 'session-03' | 'session-04' | 'session-05' | 'session-06';

export interface SessionItem {
  id: SessionId;
  number: string;
  name: string;
  topic: string;
  description: string;
  slidesCount: number;
}

export const SESSIONS_DATA: SessionItem[] = [
  {
    id: 'session-01',
    number: '01',
    name: 'Session 01',
    topic: 'Fundamentals & Roadmap',
    description: 'Data Lifecycle, Qualitative vs Quantitative & Career Roadmap',
    slidesCount: 44,
  },
  {
    id: 'session-02',
    number: '02',
    name: 'Session 02',
    topic: 'Excel Basics',
    description: 'Interface, Navigation, Core Formulas & Functions',
    slidesCount: 29,
  },
  {
    id: 'session-03',
    number: '03',
    name: 'Session 03',
    topic: 'Descriptive Statistics',
    description: 'Measures of Central Tendency (Mean, Median, Mode) & Distributions',
    slidesCount: 35,
  },
  {
    id: 'session-04',
    number: '04',
    name: 'Session 04',
    topic: 'Descriptive Statistics Part 2',
    description: 'Dispersion, Variance, Standard Deviation, IQR & Outliers',
    slidesCount: 52,
  },
  {
    id: 'session-05',
    number: '05',
    name: 'Session 05',
    topic: 'Advanced Functions & Power Query',
    description: 'XLOOKUP, Nested IFs, Data Cleaning & ETL Automation',
    slidesCount: 44,
  },
  {
    id: 'session-06',
    number: '06',
    name: 'Session 06',
    topic: 'Pivot Tables, Pivot Charts & Power Query',
    description: 'Power Query (Continued), Pivot/Unpivot, Charts, Slicers & Timelines',
    slidesCount: 44,
  },
];

interface SessionSwitcherProps {
  currentSessionId: SessionId;
  onSelectSession: (id: SessionId) => void;
  className?: string;
}

export const SessionSwitcher: React.FC<SessionSwitcherProps> = ({
  currentSessionId,
  onSelectSession,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentIndex = SESSIONS_DATA.findIndex((s) => s.id === currentSessionId);
  const currentSession = SESSIONS_DATA[currentIndex] || SESSIONS_DATA[0];

  // Close dropdown on outside click or escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handlePrevSession = () => {
    if (currentIndex > 0) {
      onSelectSession(SESSIONS_DATA[currentIndex - 1].id);
    }
  };

  const handleNextSession = () => {
    if (currentIndex < SESSIONS_DATA.length - 1) {
      onSelectSession(SESSIONS_DATA[currentIndex + 1].id);
    }
  };

  return (
    <div ref={dropdownRef} className={`relative select-none ${className}`}>
      {/* Session Navigation Group */}
      <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl shadow-md backdrop-blur-md">
        {/* Previous Session Button */}
        <button
          type="button"
          onClick={handlePrevSession}
          disabled={currentIndex === 0}
          className="h-7 w-7 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-25 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer"
          title="Previous Session"
          aria-label="Previous Session"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Main Dropdown Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`h-7 px-2.5 rounded-lg font-mono text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
            isOpen
              ? 'bg-[#1751B9] text-white shadow-sm border border-[#FE862A]/60'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/90'
          }`}
          title="Click to view all sessions"
          aria-expanded={isOpen}
        >
          <span className="w-2 h-2 rounded-full bg-[#FE862A] shadow-[0_0_8px_rgba(254,134,42,0.8)]" />
          <span className="font-bold text-white tracking-tight">
            {currentSession.name}
          </span>
          <span className="hidden sm:inline text-slate-300 font-sans font-medium text-[11px] max-w-[150px] lg:max-w-[210px] truncate">
            : {currentSession.topic}
          </span>
          <span className="hidden md:inline-block text-[10px] font-mono text-slate-400 bg-slate-800/90 px-1.5 py-0.5 rounded border border-slate-700/60">
            {currentIndex + 1}/{SESSIONS_DATA.length}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-orange-400' : ''
            }`}
          />
        </button>

        {/* Next Session Button */}
        <button
          type="button"
          onClick={handleNextSession}
          disabled={currentIndex === SESSIONS_DATA.length - 1}
          className="h-7 w-7 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-25 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer"
          title="Next Session"
          aria-label="Next Session"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-slate-900/98 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
          role="menu"
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-slate-800/90 flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FE862A]" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Course Sessions
              </span>
            </div>
            <span className="text-[10px] font-mono text-orange-400 bg-orange-950/40 border border-orange-800/40 px-2 py-0.5 rounded-full font-bold">
              {SESSIONS_DATA.length} Sessions Available
            </span>
          </div>

          {/* Session Cards List */}
          <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
            {SESSIONS_DATA.map((sess, idx) => {
              const isActive = sess.id === currentSessionId;
              return (
                <button
                  key={sess.id}
                  type="button"
                  onClick={() => {
                    onSelectSession(sess.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start justify-between gap-2.5 cursor-pointer group ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1751B9]/30 to-[#1751B9]/15 border-[#1751B9] shadow-md'
                      : 'bg-slate-950/40 border-slate-800/60 hover:bg-slate-800/80 hover:border-slate-700'
                  }`}
                  role="menuitem"
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    {/* Session number box */}
                    <div
                      className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-all ${
                        isActive
                          ? 'bg-[#1751B9] text-white border border-[#FE862A]/70 shadow-sm'
                          : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200'
                      }`}
                    >
                      {sess.number}
                    </div>

                    {/* Titles & Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold truncate transition-colors ${
                            isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                          }`}
                        >
                          {sess.name}: {sess.topic}
                        </span>
                      </div>
                      <p
                        className={`text-[11px] line-clamp-1 mt-0.5 transition-colors ${
                          isActive ? 'text-blue-200/90' : 'text-slate-400 group-hover:text-slate-300'
                        }`}
                      >
                        {sess.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-500 font-mono">
                        <span className="text-orange-400/90 font-semibold">{sess.slidesCount} Slides</span>
                        <span>•</span>
                        <span>Session {idx + 1} of {SESSIONS_DATA.length}</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Indicator / Arrow */}
                  <div className="mt-1 shrink-0">
                    {isActive ? (
                      <div className="w-5 h-5 rounded-full bg-[#FE862A]/20 flex items-center justify-center border border-[#FE862A]/40">
                        <Check className="w-3 h-3 text-[#FE862A] stroke-[3]" />
                      </div>
                    ) : (
                      <span className="text-[11px] text-slate-500 group-hover:text-slate-300 font-semibold transition-colors">
                        →
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
