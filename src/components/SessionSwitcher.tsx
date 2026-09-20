import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Check,
  FileSpreadsheet,
  Code2,
  Boxes,
  Database,
  BarChart3,
  PieChart,
  Globe,
  Folder,
  FolderOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type SessionId = 'session-01' | 'session-02' | 'session-03' | 'session-04' | 'session-05' | 'session-06' | 'session-07' | 'session-09' | 'session-10';

export interface SessionItem {
  id: SessionId;
  number: string;
  name: string;
  topic: string;
  description: string;
  slidesCount: number;
  moduleId: string;
  moduleName: string;
}

export interface CourseModule {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badgeBg: string;
}

export const COURSE_MODULES: CourseModule[] = [
  { 
    id: '01_Excel', 
    code: '01_Excel', 
    title: '01_Excel', 
    description: 'Excel Basics, Statistics, Formulas, Power Query & Data Modeling',
    icon: FileSpreadsheet,
    color: 'text-emerald-400',
    badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60'
  },
  { 
    id: '02_Python_Fundamentals', 
    code: '02_Python_Fundamentals', 
    title: '02_Python_Fundamentals', 
    description: 'Python Syntax, Variables, Data Types, Type Casting & Operators',
    icon: Code2,
    color: 'text-cyan-400',
    badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/60'
  },
  { 
    id: '03_Python_Libraries', 
    code: '03_Python_Libraries', 
    title: '03_Python_Libraries', 
    description: 'NumPy arrays, Pandas DataFrames & Data Visualization',
    icon: Boxes,
    color: 'text-amber-400',
    badgeBg: 'bg-amber-950/80 text-amber-300 border-amber-800/60'
  },
  { 
    id: '04_SQL', 
    code: '04_SQL', 
    title: '04_SQL', 
    description: 'Relational Databases, SQL Queries, Joins & Aggregations',
    icon: Database,
    color: 'text-blue-400',
    badgeBg: 'bg-blue-950/80 text-blue-300 border-blue-800/60'
  },
  { 
    id: '05_PowerBI', 
    code: '05_PowerBI', 
    title: '05_PowerBI', 
    description: 'Power Query ETL, DAX Modeling & Dashboard Publishing',
    icon: BarChart3,
    color: 'text-yellow-400',
    badgeBg: 'bg-yellow-950/80 text-yellow-300 border-yellow-800/60'
  },
  { 
    id: '06_Tableau', 
    code: '06_Tableau', 
    title: '06_Tableau', 
    description: 'Data Visualizations, Dashboards & Interactive Stories',
    icon: PieChart,
    color: 'text-purple-400',
    badgeBg: 'bg-purple-950/80 text-purple-300 border-purple-800/60'
  },
  { 
    id: '07_WebScraping', 
    code: '07_WebScraping', 
    title: '07_WebScraping', 
    description: 'Web Scraping with BeautifulSoup & Automated Data Extraction',
    icon: Globe,
    color: 'text-orange-400',
    badgeBg: 'bg-orange-950/80 text-orange-300 border-orange-800/60'
  },
];

export const SESSIONS_DATA: SessionItem[] = [
  {
    id: 'session-01',
    number: '01',
    name: 'Session 01',
    topic: 'Fundamentals & Roadmap',
    description: 'Data Lifecycle, Qualitative vs Quantitative & Career Roadmap',
    slidesCount: 44,
    moduleId: '01_Excel',
    moduleName: '01_Excel',
  },
  {
    id: 'session-02',
    number: '02',
    name: 'Session 02',
    topic: 'Excel Basics',
    description: 'Interface, Navigation, Core Formulas & Functions',
    slidesCount: 29,
    moduleId: '01_Excel',
    moduleName: '01_Excel',
  },
  {
    id: 'session-03',
    number: '03',
    name: 'Session 03',
    topic: 'Descriptive Statistics',
    description: 'Measures of Central Tendency (Mean, Median, Mode) & Distributions',
    slidesCount: 35,
    moduleId: '01_Excel',
    moduleName: '01_Excel',
  },
  {
    id: 'session-04',
    number: '04',
    name: 'Session 04',
    topic: 'Descriptive Statistics Part 2',
    description: 'Dispersion, Variance, Standard Deviation, IQR & Outliers',
    slidesCount: 52,
    moduleId: '01_Excel',
    moduleName: '01_Excel',
  },
  {
    id: 'session-05',
    number: '05',
    name: 'Session 05',
    topic: 'Advanced Functions & Power Query',
    description: 'XLOOKUP, Nested IFs, Data Cleaning & ETL Automation',
    slidesCount: 44,
    moduleId: '01_Excel',
    moduleName: '01_Excel',
  },
  {
    id: 'session-06',
    number: '06',
    name: 'Session 06',
    topic: 'Pivot Tables, Pivot Charts & Power Query',
    description: 'Power Query (Continued), Pivot/Unpivot, Charts, Slicers & Timelines',
    slidesCount: 44,
    moduleId: '01_Excel',
    moduleName: '01_Excel',
  },
  {
    id: 'session-07',
    number: '07',
    name: 'Session 07',
    topic: 'Data Modeling & Dashboard Design',
    description: 'Pivot/Unpivot, PK/FK, Star & Snowflake Schemas, UI/UX Rules',
    slidesCount: 25,
    moduleId: '01_Excel',
    moduleName: '01_Excel',
  },
  {
    id: 'session-09',
    number: '09',
    name: 'Session 09',
    topic: 'Python Fundamentals',
    description: 'Syntax, Variables, Data Types, Type Casting & Operators',
    slidesCount: 16,
    moduleId: '02_Python_Fundamentals',
    moduleName: '02_Python_Fundamentals',
  },
  {
    id: 'session-10',
    number: '10',
    name: 'Session 10',
    topic: 'Python Control Flow',
    description: 'Conditional Statements, Loops & Loop Control',
    slidesCount: 14,
    moduleId: '02_Python_Fundamentals',
    moduleName: '02_Python_Fundamentals',
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
  const currentModule = COURSE_MODULES.find((m) => m.id === currentSession.moduleId) || COURSE_MODULES[0];

  // Accordion state: track which modules are expanded
  const [expandedModuleIds, setExpandedModuleIds] = useState<string[]>(() => [currentModule.id]);

  // Keep current module expanded when currentSession changes or dropdown opens
  useEffect(() => {
    if (!expandedModuleIds.includes(currentModule.id)) {
      setExpandedModuleIds((prev) => [...prev, currentModule.id]);
    }
  }, [currentSessionId, currentModule.id]);

  const toggleModule = (modId: string) => {
    setExpandedModuleIds((prev) =>
      prev.includes(modId) ? prev.filter((id) => id !== modId) : [...prev, modId]
    );
  };

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
          title="Click to view all topics and sessions"
          aria-expanded={isOpen}
        >
          <span className="w-2 h-2 rounded-full bg-[#FE862A] shadow-[0_0_8px_rgba(254,134,42,0.8)] shrink-0" />
          
          {/* Module tag pill */}
          <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold border shrink-0 ${currentModule.badgeBg}`}>
            {currentModule.code}
          </span>

          <span className="font-bold text-white tracking-tight shrink-0">
            {currentSession.name}
          </span>
          <span className="hidden sm:inline text-slate-300 font-sans font-medium text-[11px] max-w-[120px] lg:max-w-[170px] truncate">
            : {currentSession.topic}
          </span>
          <span className="hidden md:inline-block text-[10px] font-mono text-slate-400 bg-slate-800/90 px-1.5 py-0.5 rounded border border-slate-700/60 shrink-0">
            {currentIndex + 1}/{SESSIONS_DATA.length}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${
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

      {/* Dropdown Menu Grouped by Accordion Topics */}
      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 w-80 sm:w-[440px] bg-slate-900/98 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
          role="menu"
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-slate-800/90 flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FE862A]" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Course Topics ({COURSE_MODULES.length})
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 px-2 py-0.5 rounded-full font-bold">
                {COURSE_MODULES.length} Folders
              </span>
              <span className="text-[10px] font-mono text-orange-400 bg-orange-950/40 border border-orange-800/40 px-2 py-0.5 rounded-full font-bold">
                {SESSIONS_DATA.length} Sessions
              </span>
            </div>
          </div>

          {/* Topics Accordion List */}
          <div className="space-y-2 max-h-[72vh] overflow-y-auto pr-1 select-none">
            {COURSE_MODULES.map((mod) => {
              const moduleSessions = SESSIONS_DATA.filter((s) => s.moduleId === mod.id);
              const ModuleIcon = mod.icon;
              const hasSessions = moduleSessions.length > 0;
              const isModuleActive = moduleSessions.some((s) => s.id === currentSessionId);
              const isExpanded = expandedModuleIds.includes(mod.id);

              return (
                <div 
                  key={mod.id} 
                  className={`rounded-xl border transition-all overflow-hidden ${
                    isModuleActive 
                      ? 'bg-slate-950/80 border-slate-700 shadow-md' 
                      : hasSessions 
                        ? 'bg-slate-950/50 border-slate-800/80' 
                        : 'bg-slate-950/20 border-slate-800/40 opacity-70'
                  }`}
                >
                  {/* Clickable Module Folder Banner (Accordion Trigger) */}
                  <button
                    type="button"
                    onClick={() => toggleModule(mod.id)}
                    className={`w-full px-3 py-2.5 flex items-center justify-between transition-colors cursor-pointer text-left ${
                      isModuleActive 
                        ? 'bg-gradient-to-r from-slate-800/90 via-slate-900/90 to-slate-950/90 hover:from-slate-800' 
                        : 'bg-slate-900/70 hover:bg-slate-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Folder / Topic Icon */}
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center bg-slate-800/90 border border-slate-700/70 shrink-0 ${mod.color}`}>
                        {isExpanded ? <FolderOpen className="w-4 h-4" /> : <Folder className="w-4 h-4" />}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-white tracking-tight truncate">
                            {mod.title}
                          </span>
                          {isModuleActive && (
                            <span className="w-2 h-2 rounded-full bg-[#FE862A] shadow-[0_0_6px_rgba(254,134,42,0.9)] shrink-0" />
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400 truncate font-sans">
                          {mod.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      {hasSessions ? (
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                          isModuleActive 
                            ? 'bg-[#1751B9]/30 text-blue-300 border-[#1751B9]/60' 
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}>
                          {moduleSessions.length} {moduleSessions.length === 1 ? 'Session' : 'Sessions'}
                        </span>
                      ) : (
                        <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-900 text-slate-500 border border-slate-800">
                          Coming Soon
                        </span>
                      )}

                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-orange-400' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expandable Sessions Drawer */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden border-t border-slate-800/80 bg-slate-950/60"
                      >
                        {hasSessions ? (
                          <div className="p-2 space-y-1.5">
                            {moduleSessions.map((sess) => {
                              const isActive = sess.id === currentSessionId;
                              const overallIndex = SESSIONS_DATA.findIndex((s) => s.id === sess.id);

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
                                      ? 'bg-gradient-to-r from-[#1751B9]/40 to-[#1751B9]/15 border-[#1751B9] shadow-md'
                                      : 'bg-slate-900/60 border-slate-800/70 hover:bg-slate-800/90 hover:border-slate-700'
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
                                        <span>Session {overallIndex + 1} of {SESSIONS_DATA.length}</span>
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
                        ) : (
                          <div className="p-3 text-center text-xs text-slate-500 font-mono italic bg-slate-950/40">
                            ⚡ Folder empty — sessions will be added soon!
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
