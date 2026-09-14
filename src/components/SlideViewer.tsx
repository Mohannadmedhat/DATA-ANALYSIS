import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Layout, 
  Palette, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Check, 
  X, 
  Quote, 
  Sparkles, 
  Sliders, 
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Cpu,
  Monitor,
  Smartphone,
  Eye,
  BookOpen,
  Compass,
  Zap,
  Target,
  Grid,
  ShieldCheck,
  SplitSquareVertical,
  Timer,
  Ruler,
  HelpCircle,
  Brain,
  FileCode2,
  Flame,
  MessageSquare
} from 'lucide-react';
import { SlideData, Language } from '../types';
import { UxUiComparisonSlider } from './interactive/UxUiComparisonSlider';
import { HicksLawSimulator } from './interactive/HicksLawSimulator';
import { GridOverlayDemo } from './interactive/GridOverlayDemo';
import { InstantLogo } from './InstantLogo';
import { HoneycombVisual } from './visuals/HoneycombVisual';
import { TimelineVisual } from './visuals/TimelineVisual';
import { ComparisonTableVisual } from './visuals/ComparisonTableVisual';
import { ScenarioComparisonVisual } from './visuals/ScenarioComparisonVisual';
import { ComponentAnatomyVisual } from './visuals/ComponentAnatomyVisual';
import { JourneyFlowVisual } from './visuals/JourneyFlowVisual';
import { ProductAnalysisVisual } from './visuals/ProductAnalysisVisual';
import { PracticalExerciseVisual } from './visuals/PracticalExerciseVisual';
import { SummaryReferencesVisual } from './visuals/SummaryReferencesVisual';
import { UsabilityFactorVisual } from './visuals/UsabilityFactorVisual';
import { FindabilityVisual } from './visuals/FindabilityVisual';
import { SessionObjectivesVisual } from './visuals/SessionObjectivesVisual';
import { UxDefinitionVisual } from './visuals/UxDefinitionVisual';
import { UiFundamentalsVisual } from './visuals/UiFundamentalsVisual';
import { ContrastCheckerSimulator } from './interactive/ContrastCheckerSimulator';
import { DesignDilemmaWidget } from './interactive/DesignDilemmaWidget';
import { GoodUxWeakUiSimulator } from './interactive/GoodUxWeakUiSimulator';
import { CredibilityTrustSimulator } from './interactive/CredibilityTrustSimulator';

// Session 02 Specialized Visual & Interactive Components
import { FigmaEcosystemVisual } from './visuals/FigmaEcosystemVisual';
import { RolesVennVisual } from './visuals/RolesVennVisual';
import { TeamBuildingExerciseVisual } from './visuals/TeamBuildingExerciseVisual';
import { ToolkitPipelineVisual } from './visuals/session02/ToolkitPipelineVisual';
import { ResearchToolsVisual } from './visuals/session02/ResearchToolsVisual';
import { PrototypingLabSimulator } from './visuals/session02/PrototypingLabSimulator';
import { FiveWhysSimulator } from './visuals/session02/FiveWhysSimulator';
import { VisualSenseBeforeAfter } from './visuals/session02/VisualSenseBeforeAfter';
import { UxWriterSimulator } from './visuals/session02/UxWriterSimulator';
import { IxdVsIaVisual } from './visuals/session02/IxdVsIaVisual';
import { EmpathyRealityVisual } from './visuals/session02/EmpathyRealityVisual';
import { ToolTrapVisual } from './visuals/session02/ToolTrapVisual';
import { ToolMatrixInteractive } from './visuals/session02/ToolMatrixInteractive';
import { DesignerSkillWheelVisual } from './visuals/session02/DesignerSkillWheelVisual';
import { WhiteboardingToolsVisual } from './visuals/session02/WhiteboardingToolsVisual';
import { UiDesignToolsVisual } from './visuals/session02/UiDesignToolsVisual';
import { TestingToolsVisual } from './visuals/session02/TestingToolsVisual';
import { DevHandoffVisual } from './visuals/session02/DevHandoffVisual';
import { CommunicationSkillsVisual } from './visuals/session02/CommunicationSkillsVisual';
import { CriticalThinkingVisual } from './visuals/session02/CriticalThinkingVisual';
import { TeamCollaborationVisual } from './visuals/session02/TeamCollaborationVisual';
import { CareerSpectrumVisual } from './visuals/session02/CareerSpectrumVisual';
import { ProblemSolvingVisual } from './visuals/session02/ProblemSolvingVisual';
import { RoleDeepDiveVisual } from './visuals/session02/RoleDeepDiveVisual';
import { UxDesignerDeepDiveVisual } from './visuals/session02/UxDesignerDeepDiveVisual';
import { UiDesignerDeepDiveVisual } from './visuals/session02/UiDesignerDeepDiveVisual';
import { UxResearcherDeepDiveVisual } from './visuals/session02/UxResearcherDeepDiveVisual';
import { ProductDesignerDeepDiveVisual } from './visuals/session02/ProductDesignerDeepDiveVisual';
import { Session02ObjectivesVisual } from './visuals/session02/Session02ObjectivesVisual';
import { Session02IntroVisual } from './visuals/session02/Session02IntroVisual';

interface SlideViewerProps {
  slide: SlideData;
  language: Language;
  onNext?: () => void;
  onPrev?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  totalSlides: number;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  language,
  onNext,
  onPrev,
  isFirst,
  isLast,
  totalSlides
}) => {
  const isRTL = language === 'ar';
  const isDark = slide.darkTheme;

  // Session detection: Is current slide part of Session 02?
  const isSession02 = totalSlides === 30 || 
                      slide.topRightTag?.includes('SESSION 02') || 
                      slide.topLeftTag?.includes('UX-102') || 
                      slide.topLeftTag?.includes('SESSION 02');

  // State for interactive demos per slide
  const [interactiveViews, setInteractiveViews] = useState<Record<number, 'cards' | 'interactive'>>({
    3: 'interactive', // Default to live slider for slide 3 (UX vs UI)
    7: 'interactive', // Default to prototyping simulator for slide 7
    8: 'interactive', // Default to testing & heatmap simulator for slide 8
    9: 'interactive', // Default to Dev Mode simulator for slide 9 in Session 02
    11: 'interactive', // Default to interactive matrix for slide 11
    15: 'interactive', // Default to 5 whys simulator for slide 15
    16: 'interactive', // Default to communication simulator for slide 16
    18: 'interactive', // Default to critical thinking for slide 18
    19: 'interactive', // Default to visual sense for slide 19
    21: 'interactive', // Default to career spectrum for slide 21
    27: 'interactive', // Default to UX writer simulator for slide 27
    29: 'interactive', // Default to team workshop for slide 29
  });

  const getSlideView = (id: number, defaultView: 'cards' | 'interactive' = 'cards') => {
    return interactiveViews[id] || defaultView;
  };

  const setSlideView = (id: number, view: 'cards' | 'interactive') => {
    setInteractiveViews(prev => ({ ...prev, [id]: view }));
  };

  // Helper to render title with blue highlighted keywords cleanly
  const renderHighlightedTitle = (title: string, highlights?: string[]) => {
    if (!highlights || highlights.length === 0) {
      return (
        <h1 
          className={`text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-black tracking-normal leading-snug ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}
        >
          {title}
        </h1>
      );
    }

    let parts: React.ReactNode[] = [];
    let remaining = title;

    highlights.forEach((hl, i) => {
      const idx = remaining.indexOf(hl);
      if (idx !== -1) {
        if (idx > 0) {
          parts.push(remaining.substring(0, idx));
        }
        parts.push(
          <span key={i} className="text-[#27aae1] font-black drop-shadow-sm inline-block">
            {hl}
          </span>
        );
        remaining = remaining.substring(idx + hl.length);
      }
    });

    if (remaining.length > 0) {
      parts.push(remaining);
    }

    return (
      <h1 
        className={`text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-black tracking-normal leading-snug ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}
      >
        {parts}
      </h1>
    );
  };

  // Helper to get step icon
  const getStepIcon = (name?: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Layout':
        return <Layout className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Palette':
        return <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Layers':
        return <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Monitor':
        return <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Compass':
        return <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Zap':
        return <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Target':
        return <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      case 'Sliders':
        return <Sliders className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      default:
        return <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
    }
  };

  return (
    <div 
      id={`slide-${slide.id}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`relative w-full max-w-6xl xl:max-w-7xl h-[620px] sm:h-[660px] md:h-[700px] lg:h-[720px] xl:h-[740px] rounded-2xl shadow-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 select-none ${
        isDark 
          ? 'bg-[#0b1324] border-slate-800 text-slate-100 shadow-blue-950/20' 
          : 'bg-[#fcfdfe] border-slate-200 text-slate-900 shadow-slate-200/50'
      }`}
    >
      {/* Ambient subtle background lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isDark ? (
          <>
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.06),transparent_60%)]" />
          </>
        ) : (
          <>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/[0.04] rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.6),rgba(255,255,255,1))]" />
          </>
        )}
      </div>

      {/* TOP BAR / METADATA HEADER */}
      <header className={`relative z-10 px-6 sm:px-10 lg:px-12 pt-4 sm:pt-5 pb-3 flex items-center justify-between border-b text-[11px] sm:text-xs font-semibold tracking-wider ${
        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
      }`}>
        <div className="flex items-center gap-3">
          {/* Company Brand Logo */}
          <InstantLogo className="h-3.5 sm:h-4" isDark={isDark} />

          <span className={`hidden sm:inline-block w-px h-4 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />

          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className={`uppercase font-bold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
              {slide.topRightTag}
            </span>
          </div>
        </div>

        {slide.topLeftTag && slide.topLeftTag.trim() !== '' && (
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-md font-medium border ${
              isDark 
                ? 'bg-slate-800 text-blue-400 border-slate-700' 
                : 'bg-slate-100 text-blue-700 border-slate-200'
            }`}>
              {slide.topLeftTag}
            </span>
          </div>
        )}
      </header>

      {/* MAIN SLIDE CANVAS CONTENT */}
      <main className="relative z-10 flex-1 px-6 sm:px-10 lg:px-12 py-4 sm:py-6 flex flex-col justify-between overflow-y-auto">
        
        {/* Title, Badge & Interactive Mode Toggles */}
        <div className="mb-3 sm:mb-4 flex flex-col md:flex-row md:items-start justify-between gap-3 text-start w-full">
          <div className="flex-1 max-w-4xl text-start">
            <div className="flex items-center gap-2.5 mb-1.5 justify-start">
              <span className="h-[3px] w-6 bg-[#27aae1] rounded-full inline-block shrink-0" />
              <span className={`text-xs sm:text-sm font-bold tracking-wider ${
                isDark ? 'text-[#27aae1]' : 'text-[#27aae1]'
              }`}>
                {slide.subBadge}
              </span>
            </div>
            <div className="w-full text-start">
              {renderHighlightedTitle(slide.mainTitle, slide.highlightedWords)}
            </div>
            {slide.subtitle && (
              <p className={`mt-3 sm:mt-3.5 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl font-medium text-start ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {slide.subtitle}
              </p>
            )}
          </div>

          {/* ============================================================== */}
          {/* INTERACTIVE MODE TOGGLES (CUSTOMIZED FOR SESSION 01 & 02) */}
          {/* ============================================================== */}

          {/* SESSION 01 TOGGLES */}
          {!isSession02 && (
            <>
              {/* Slide 03 / Comparison Table */}
              {(slide.type === 'comparison' || slide.type === 'comparison-table' || slide.id === 7) && (
                <div className="shrink-0 self-start md:self-center">
                  <div className={`flex items-center gap-1 p-1.5 rounded-xl border shadow-sm text-xs ${
                    isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-slate-100/90 border-slate-200'
                  }`}>
                    <button
                      onClick={() => setSlideView(slide.id, 'cards')}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        getSlideView(slide.id, 'cards') === 'cards'
                          ? (isDark ? 'bg-slate-800 text-blue-400 shadow-sm' : 'bg-white text-blue-700 shadow-sm')
                          : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'جدول المقارنة' : 'Table Matrix'}</span>
                    </button>
                    <button
                      onClick={() => setSlideView(slide.id, 'interactive')}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        getSlideView(slide.id, 'cards') === 'interactive'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                          : (isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-700 hover:text-blue-900')
                      }`}
                    >
                      <SplitSquareVertical className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'سلايدر تفاعلي حي ✨' : 'Live Slider ✨'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Slide 09 / Dilemma Poll */}
              {slide.id === 9 && (
                <div className="shrink-0 self-start md:self-center">
                  <div className={`flex items-center gap-1 p-1.5 rounded-xl border shadow-sm text-xs ${
                    isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-slate-100/90 border-slate-200'
                  }`}>
                    <button
                      onClick={() => setSlideView(slide.id, 'cards')}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        getSlideView(slide.id) === 'cards'
                          ? (isDark ? 'bg-slate-800 text-blue-400 shadow-sm' : 'bg-white text-blue-700 shadow-sm')
                          : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'عرض التحليل' : 'Analysis'}</span>
                    </button>
                    <button
                      onClick={() => setSlideView(slide.id, 'interactive')}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        getSlideView(slide.id) === 'interactive'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md font-bold'
                          : (isDark ? 'text-amber-400 hover:text-amber-300' : 'text-amber-700 hover:text-amber-900')
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'تحدي وتصويت صفي 🎯' : 'Classroom Poll 🎯'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Slide 10 / Good UX Weak UI */}
              {slide.id === 10 && (
                <div className="shrink-0 self-start md:self-center">
                  <div className={`flex items-center gap-1 p-1.5 rounded-xl border shadow-sm text-xs ${
                    isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-slate-100/90 border-slate-200'
                  }`}>
                    <button
                      onClick={() => setSlideView(slide.id, 'cards')}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        getSlideView(slide.id) === 'cards'
                          ? (isDark ? 'bg-slate-800 text-blue-400 shadow-sm' : 'bg-white text-blue-700 shadow-sm')
                          : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'عرض المقارنة' : 'Cards'}</span>
                    </button>
                    <button
                      onClick={() => setSlideView(slide.id, 'interactive')}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        getSlideView(slide.id) === 'interactive'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                          : (isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-700 hover:text-blue-900')
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'المختبر التفاعلي ✨' : 'Interactive Lab ✨'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Slide 20 / Contrast Checker */}
              {slide.id === 20 && (
                <div className="shrink-0 self-start md:self-center">
                  <div className={`flex items-center gap-1 p-1.5 rounded-xl border shadow-sm text-xs ${
                    isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-slate-100/90 border-slate-200'
                  }`}>
                    <button
                      onClick={() => setSlideView(slide.id, 'cards')}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        getSlideView(slide.id) === 'cards'
                          ? (isDark ? 'bg-slate-800 text-blue-400 shadow-sm' : 'bg-white text-blue-700 shadow-sm')
                          : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'معايير الإتاحة' : 'Standards'}</span>
                    </button>
                    <button
                      onClick={() => setSlideView(slide.id, 'interactive')}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        getSlideView(slide.id) === 'interactive'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md font-bold'
                          : (isDark ? 'text-purple-400 hover:text-purple-300' : 'text-purple-700 hover:text-purple-900')
                      }`}
                    >
                      <Palette className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'مختبر فحص التباين 🎨' : 'WCAG Contrast Lab 🎨'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Slide 21 / Credibility */}
              {slide.id === 21 && (
                <div className="shrink-0 self-start md:self-center">
                  <div className={`flex items-center gap-1 p-1.5 rounded-xl border shadow-sm text-xs ${
                    isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-slate-100/90 border-slate-200'
                  }`}>
                    <button
                      onClick={() => setSlideView(slide.id, 'cards')}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        getSlideView(slide.id) === 'cards'
                          ? (isDark ? 'bg-slate-800 text-blue-400 shadow-sm' : 'bg-white text-blue-700 shadow-sm')
                          : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'مبادئ الأمان' : 'Trust Principles'}</span>
                    </button>
                    <button
                      onClick={() => setSlideView(slide.id, 'interactive')}
                      className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        getSlideView(slide.id) === 'interactive'
                          ? 'bg-gradient-to-r from-rose-600 to-emerald-600 text-white shadow-md font-bold'
                          : (isDark ? 'text-rose-400 hover:text-rose-300' : 'text-rose-700 hover:text-rose-900')
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'مختبر الفخاخ والثقة 🕵️' : 'Dark Patterns Lab 🕵️'}</span>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}



        </div>

        {/* DYNAMIC CONTENT AREA BASED ON SLIDE TYPE & SESSION DISPATCH */}
        <div className="my-auto py-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${slide.id}-${getSlideView(slide.id, 'interactive')}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >

              {/* ============================================================== */}
              {/* SESSION 02 FULL VISUAL DISPATCH (30 DEDICATED RICH SCREENS) */}
              {/* ============================================================== */}
              {isSession02 ? (
                <>
                  {/* Slide 01: Intro Hero */}
                  {slide.id === 1 && (
                    <Session02IntroVisual language={language} isDark={isDark} onNext={onNext} />
                  )}

                  {/* Slide 02: Objectives Roadmap */}
                  {slide.id === 2 && (
                    <Session02ObjectivesVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 03: UX Toolkit Pipeline */}
                  {slide.id === 3 && (
                    <ToolkitPipelineVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 04: Research Tools */}
                  {slide.id === 4 && (
                    <ResearchToolsVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 05: Whiteboarding & Ideation */}
                  {slide.id === 5 && (
                    <WhiteboardingToolsVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 06: UI Design Tools */}
                  {slide.id === 6 && (
                    <UiDesignToolsVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 07: Prototyping Tools & Interactive Lab */}
                  {slide.id === 7 && (
                    <PrototypingLabSimulator language={language} isDark={isDark} />
                  )}

                  {/* Slide 08: Usability & Analytics Testing */}
                  {slide.id === 8 && (
                    <TestingToolsVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 09: Figma Dev Mode & Handoff */}
                  {slide.id === 9 && (
                    <DevHandoffVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 10: Complete Figma Ecosystem */}
                  {slide.id === 10 && (
                    <FigmaEcosystemVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 11: Task to Tool Matrix */}
                  {slide.id === 11 && (
                    <ToolMatrixInteractive language={language} isDark={isDark} />
                  )}

                  {/* Slide 12: Tool Trap */}
                  {slide.id === 12 && (
                    <ToolTrapVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 13: 4 Skill Pillars */}
                  {slide.id === 13 && (
                    <DesignerSkillWheelVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 14: Empathy (You ≠ User) */}
                  {slide.id === 14 && (
                    <EmpathyRealityVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 15: Curiosity & 5 Whys */}
                  {slide.id === 15 && (
                    <FiveWhysSimulator language={language} isDark={isDark} />
                  )}

                  {/* Slide 16: Communication & Articulation */}
                  {slide.id === 16 && (
                    <CommunicationSkillsVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 17: Problem Solving Pipeline */}
                  {slide.id === 17 && (
                    <ProblemSolvingVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 18: Critical Thinking 5 Questions */}
                  {slide.id === 18 && (
                    <CriticalThinkingVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 19: Visual Sense Before/After */}
                  {slide.id === 19 && (
                    <VisualSenseBeforeAfter language={language} isDark={isDark} />
                  )}

                  {/* Slide 20: Team Collaboration Triad */}
                  {slide.id === 20 && (
                    <TeamCollaborationVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 21: Career Spectrum */}
                  {slide.id === 21 && (
                    <CareerSpectrumVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 22: UX Designer Deep Dive */}
                  {slide.id === 22 && (
                    <UxDesignerDeepDiveVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 23: UI Designer Deep Dive */}
                  {slide.id === 23 && (
                    <UiDesignerDeepDiveVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 24: UX Researcher Deep Dive */}
                  {slide.id === 24 && (
                    <UxResearcherDeepDiveVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 25: Product Designer Deep Dive */}
                  {slide.id === 25 && (
                    <ProductDesignerDeepDiveVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 26: IxD vs IA */}
                  {slide.id === 26 && (
                    <IxdVsIaVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 27: UX Writer Simulator */}
                  {slide.id === 27 && (
                    <UxWriterSimulator language={language} isDark={isDark} />
                  )}

                  {/* Slide 28: Role Overlap (Startup vs Enterprise) */}
                  {slide.id === 28 && (
                    <RolesVennVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 29: Team Building Workshop */}
                  {slide.id === 29 && (
                    <TeamBuildingExerciseVisual language={language} isDark={isDark} />
                  )}

                  {/* Slide 30: Summary & References */}
                  {slide.id === 30 && (
                    <SummaryReferencesVisual language={language} isDark={isDark} />
                  )}
                </>
              ) : (
                /* ============================================================== */
                /* SESSION 01 STANDARD DISPATCH */
                /* ============================================================== */
                <>
                  {/* 1. INTRO SLIDE */}
                  {slide.type === 'intro' && (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-stretch">
                      <div className={`md:col-span-7 rounded-xl p-5 sm:p-6 border shadow-sm flex flex-col justify-between ${
                        isDark ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
                      }`}>
                        <div>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3.5 border ${
                            isDark 
                              ? 'bg-blue-950/70 text-blue-400 border-blue-800/50' 
                              : 'bg-blue-50 text-blue-700 border-blue-200'
                          }`}>
                            <Sparkles className="w-3.5 h-3.5" />
                            {isRTL ? 'خارطة طريق الدبلومة الشاملة' : 'Comprehensive Diploma Roadmap'}
                          </div>
                          <h3 className={`text-base sm:text-lg font-bold mb-2 ${
                            isDark ? 'text-white' : 'text-slate-950'
                          }`}>
                            {isRTL ? 'ماذا ستتعلم في هذا المسار الاحترافي؟' : 'What You Will Master in This Track:'}
                          </h3>
                          <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}>
                            {isRTL
                              ? 'منهجية معتمدة تبدأ من فهم المستخدم وأبحاث السوق مروراً بالوايرفريم وهندسة المعلومات، وتتوج ببناء واجهات مستخدم متقدمة وأنظمة تصميم متكاملة قابلة للتنفيذ البرمجي.'
                              : 'A validated industry curriculum spanning user research, cognitive psychology, information architecture, wireframing, high-fidelity visual UI, interactive prototyping, and design systems.'}
                          </p>
                        </div>

                        <div className={`grid grid-cols-3 gap-2 pt-3 border-t ${
                          isDark ? 'border-slate-800' : 'border-slate-100'
                        }`}>
                          <div className={`text-center p-2.5 rounded-lg ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
                            <span className="block text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">12</span>
                            <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {isRTL ? 'محاضرة تفاعلية' : 'Core Modules'}
                            </span>
                          </div>
                          <div className={`text-center p-2.5 rounded-lg ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
                            <span className="block text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">100%</span>
                            <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {isRTL ? 'تطبيق فيجما' : 'Hands-on Figma'}
                            </span>
                          </div>
                          <div className={`text-center p-2.5 rounded-lg ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
                            <span className="block text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">01</span>
                            <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {isRTL ? 'مشروع بورتفوليو' : 'Capstone Project'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-5 sm:p-6 shadow-md flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                            {isRTL ? 'الفصل الحالي' : 'Current Module'}
                          </span>
                          <h4 className="text-lg sm:text-xl font-bold mt-1 mb-3">
                            {isRTL ? '01 • الأساسيات والمفاهيم الجوهرية' : '01 • Foundations & Core Concepts'}
                          </h4>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-blue-50/95">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                              <span>{isRTL ? 'الفارق بين منطق الـ UX وجمال الـ UI' : 'The critical boundary between UX & UI'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                              <span>{isRTL ? 'سيكولوجية التصميم وقوانين الـ UX' : 'Psychology of design & Laws of UX'}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                              <span>{isRTL ? 'النظام الشبكي 8pt والتوافق مع المبرمجين' : '8pt Spatial Grid & Engineering Handoff'}</span>
                            </li>
                          </ul>
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-medium text-blue-100">
                          <span>{isRTL ? 'جاهز للبدء؟' : 'Ready to begin?'}</span>
                          <span className="underline cursor-pointer flex items-center gap-1 hover:text-white" onClick={onNext}>
                            {isRTL ? 'الانتقال للشريحة التالية' : 'Next Slide'}
                            {isRTL ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. TWO CARDS */}
                  {slide.type === 'two-cards' && (
                    slide.id === 9 && getSlideView(slide.id) === 'interactive' ? (
                      <DesignDilemmaWidget
                        language={language}
                        isDark={isDark}
                        title={isRTL ? "مأزق التصميم: الجمال الخارق مقابل سهولة الاستخدام" : "Design Dilemma: Visual Aesthetics vs Usability"}
                        scenario={isRTL ? "فريق عمل أطلق صفحة تسجيل أنيقة جداً بأحدث تقنيات 3D والزجاج المعتم مع 7 حقول، وفريق آخر صمم صفحة بسيطة وزر تسجيل بنقرة واحدة بحساب جوجل. أيهما يحقق مبيعات وتحويلات أعلى؟" : "Team A deployed an ultra-modern 3D glassmorphic signup page with 7 required fields. Team B deployed a simple 1-click Google sign-in. Which drives higher conversion?"}
                        optionA={{
                          id: 'A',
                          title: isRTL ? "الخيار A: واجهة ثلاثية الأبعاد بـ 7 حقول" : "Option A: 3D Form (7 Fields)",
                          subtitle: isRTL ? "مبهرة في معارض التصميم ومحبوبة للمصممين" : "Visually stunning but high cognitive friction",
                          votesPercent: 18,
                          isRecommended: false,
                          rationale: isRTL ? "الشاشات المعقدة ترفع معدل هجر المستخدمين بنسبة 70% وتفشل في تحقيق أهداف البزنس." : "High friction directly drives 70% user drop-off."
                        }}
                        optionB={{
                          id: 'B',
                          title: isRTL ? "الخيار B: تسجيل بنقرة واحدة (1-Click Auth)" : "Option B: 1-Click Social Sign-In",
                          subtitle: isRTL ? "سريعة وبدون أي احتكاك أو تفكير للمستخدم" : "Zero cognitive friction & instant access",
                          votesPercent: 82,
                          isRecommended: true,
                          rationale: isRTL ? "التسجيل بنقرة واحدة يخفض الاحتكاك للصفر ويرفع نسبة إتمام العمليات (Conversions) بأكثر من 45%!" : "1-Click sign-in boosts conversions by over 45% by adhering to frictionless UX principles."
                        }}
                      />
                    ) : slide.id === 10 && getSlideView(slide.id) === 'interactive' ? (
                      <GoodUxWeakUiSimulator language={language} isDark={isDark} />
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">
                        {slide.cards?.map((card, idx) => (
                          <div 
                            key={idx}
                            className={`rounded-xl p-5 sm:p-6 lg:p-7 border shadow-sm transition-all flex flex-col justify-between ${
                              isDark 
                                ? 'bg-slate-900/95 border-slate-800 hover:border-blue-700 text-slate-100' 
                                : 'bg-slate-50/90 border-slate-200 hover:border-blue-300 text-slate-950'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className={`w-9 h-9 rounded-lg font-bold flex items-center justify-center text-sm border ${
                                  isDark 
                                    ? 'bg-blue-950/80 text-blue-400 border-blue-800/40' 
                                    : 'bg-blue-50 text-blue-700 border-blue-200'
                                }`}>
                                  {card.number}
                                </span>
                                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${
                                  isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-white text-slate-900 border-slate-200 shadow-sm'
                                }`}>
                                  {card.tag || card.badge}
                                </span>
                              </div>

                              <h3 className={`text-lg sm:text-xl font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                {card.title}
                              </h3>
                              <p className={`text-xs font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                                {card.subtitle}
                              </p>
                              <p className={`text-xs sm:text-sm leading-relaxed mb-4 font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                {card.description}
                              </p>

                              <div className="space-y-2 mb-4">
                                {card.bullets?.map((bullet, bIdx) => (
                                  <div key={bIdx} className={`flex items-start gap-2.5 text-xs sm:text-sm font-medium ${
                                    isDark ? 'text-slate-200' : 'text-slate-900'
                                  }`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                                    <span className="leading-snug">{bullet}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className={`pt-3 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                              <span className={`text-xs font-bold px-3 py-1.5 rounded-md inline-block ${
                                isDark ? 'text-blue-300 bg-blue-950/50' : 'text-blue-900 bg-blue-50 border border-blue-200'
                              }`}>
                                {card.highlight}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  )}

                  {/* 2.1 COMPARISON */}
                  {slide.type === 'comparison' && (
                    getSlideView(slide.id, 'interactive') === 'interactive' ? (
                      <UxUiComparisonSlider language={language} />
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">
                        {slide.cards?.map((card, idx) => (
                          <div 
                            key={idx}
                            className={`rounded-xl p-5 sm:p-6 lg:p-7 border shadow-sm transition-all flex flex-col justify-between ${
                              isDark 
                                ? 'bg-slate-900/95 border-slate-800 hover:border-blue-700 text-slate-100' 
                                : 'bg-white border-slate-200 hover:border-blue-300 text-slate-900'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className={`w-9 h-9 rounded-lg font-bold flex items-center justify-center text-sm border ${
                                  isDark 
                                    ? 'bg-blue-950/80 text-blue-400 border-blue-800/40' 
                                    : 'bg-blue-50 text-blue-700 border-blue-200'
                                }`}>
                                  {card.number}
                                </span>
                                <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded ${
                                  isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {card.tag || card.badge}
                                </span>
                              </div>

                              <h3 className={`text-lg sm:text-xl font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                {card.title}
                              </h3>
                              <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                {card.subtitle}
                              </p>
                              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                {card.description}
                              </p>

                              <div className="space-y-2 mb-4">
                                {card.bullets?.map((bullet, bIdx) => (
                                  <div key={bIdx} className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                                    isDark ? 'text-slate-200' : 'text-slate-700'
                                  }`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                    <span className="leading-snug">{bullet}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className={`pt-3 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                              <span className={`text-xs font-semibold px-3 py-1.5 rounded-md inline-block ${
                                isDark ? 'text-blue-300 bg-blue-950/50' : 'text-blue-800 bg-blue-50 border border-blue-200/60'
                              }`}>
                                {card.highlight}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  )}

                  {/* 3. PROCESS FLOW */}
                  {slide.type === 'process-flow' && (
                    slide.id === 2 ? (
                      <SessionObjectivesVisual language={language} isDark={isDark} />
                    ) : slide.processSteps ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
                        {slide.processSteps.map((step, idx) => (
                          <div 
                            key={idx}
                            className={`relative rounded-xl p-4 sm:p-5 border shadow-sm flex flex-col justify-between group transition-all ${
                              isDark 
                                ? 'bg-slate-900/90 border-slate-800 text-slate-100 hover:border-blue-600' 
                                : 'bg-slate-50/90 border-slate-200 text-slate-950 hover:border-blue-400'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2.5">
                                <span className={`text-xs font-black px-2.5 py-0.5 rounded border ${
                                  isDark ? 'bg-blue-950 text-blue-300 border-blue-800/40' : 'bg-blue-100 text-blue-900 border-blue-200'
                                }`}>
                                  {step.number}
                                </span>
                                <div className={`p-1.5 rounded-md ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                  {getStepIcon(step.iconName)}
                                </div>
                              </div>

                              <h3 className={`text-sm sm:text-base font-extrabold mb-1.5 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                {step.title}
                              </h3>
                              <p className={`text-xs leading-relaxed mb-3 font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                {step.description}
                              </p>
                            </div>

                            {step.keyOutputs && (
                              <div className={`pt-2.5 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                                <span className={`text-[10px] uppercase font-bold block mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                  {isRTL ? 'المخرجات الأساسية:' : 'Key Deliverables:'}
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {step.keyOutputs.map((out, oIdx) => (
                                    <span key={oIdx} className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded border ${
                                      isDark ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-white text-slate-900 border-slate-200 shadow-sm'
                                    }`}>
                                      {out}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : null
                  )}

                  {/* 4. THREE CARDS */}
                  {slide.type === 'three-cards' && (
                    (((slide.subBadge && (slide.subBadge.includes('Hick') || slide.subBadge.includes('هيك'))) || (slide.mainTitle && (slide.mainTitle.includes('Hick') || slide.mainTitle.includes('هيك')))) && getSlideView(slide.id) === 'interactive') ? (
                      <HicksLawSimulator language={language} />
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5 items-stretch">
                        {slide.cards?.map((card, idx) => (
                          <div 
                            key={idx}
                            className={`rounded-xl p-4 sm:p-5 lg:p-6 border shadow-sm flex flex-col justify-between transition-all ${
                              isDark 
                                ? 'bg-slate-900/90 border-slate-800 text-slate-100 hover:border-blue-600' 
                                : 'bg-slate-50/90 border-slate-200 text-slate-950 hover:border-blue-400 shadow-sm'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2.5">
                                <span className={`text-xs font-bold px-2.5 py-0.5 rounded border ${
                                  isDark 
                                    ? 'bg-blue-950/70 text-blue-400 border-blue-800/40' 
                                    : 'bg-blue-50 text-blue-700 border-blue-200'
                                }`}>
                                  {card.badge || card.number}
                                </span>
                                {card.badge && (
                                  <span className={`text-xs font-mono font-bold shrink-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {card.number}
                                  </span>
                                )}
                              </div>
                              <h3 className={`text-base sm:text-lg font-extrabold mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                {card.title}
                              </h3>
                              <p className={`text-xs sm:text-sm leading-relaxed mb-3 font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                {card.description}
                              </p>

                              <ul className="space-y-2 mb-3">
                                {card.bullets?.map((b, bIdx) => (
                                  <li key={bIdx} className={`text-xs sm:text-sm flex items-start gap-2 font-medium ${
                                    isDark ? 'text-slate-200' : 'text-slate-900'
                                  }`}>
                                    <Check className="w-3.5 h-3.5 text-blue-600 mt-1 shrink-0" />
                                    <span className="leading-snug">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className={`pt-3 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                              <span className={`text-xs font-bold px-2.5 py-1 rounded inline-block ${
                                isDark ? 'text-blue-300 bg-blue-950/50' : 'text-blue-900 bg-blue-50 border border-blue-200'
                              }`}>
                                {card.highlight}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  )}

                  {/* 5. FOUR CARDS */}
                  {slide.type === 'four-cards' && (
                    slide.id === 5 ? (
                      <UiFundamentalsVisual language={language} isDark={isDark} />
                    ) : slide.id === 18 ? (
                      <UsabilityFactorVisual language={language} isDark={isDark} />
                    ) : slide.id === 19 ? (
                      <FindabilityVisual language={language} isDark={isDark} />
                    ) : (slide.id === 20 && getSlideView(slide.id) === 'interactive') ? (
                      <ContrastCheckerSimulator language={language} isDark={isDark} />
                    ) : (slide.id === 21 && getSlideView(slide.id) === 'interactive') ? (
                      <CredibilityTrustSimulator language={language} isDark={isDark} />
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
                        {slide.cards?.map((card, idx) => (
                          <div 
                            key={idx}
                            className={`rounded-xl p-4 sm:p-5 border shadow-sm flex flex-col justify-between transition-all ${
                              isDark 
                                ? 'bg-slate-900/90 border-slate-800 text-slate-100 hover:border-blue-600' 
                                : 'bg-slate-50/90 border-slate-200 text-slate-950 hover:border-blue-400'
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-1 mb-2">
                                <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                                  isDark 
                                    ? 'bg-blue-950/80 text-blue-400 border-blue-800/40' 
                                    : 'bg-blue-50 text-blue-700 border-blue-200'
                                }`}>
                                  {card.badge}
                                </span>
                                <span className={`text-xs font-mono font-bold shrink-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                  {card.number}
                                </span>
                              </div>

                              <h3 className={`text-sm sm:text-base font-extrabold mb-1.5 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                {card.title}
                              </h3>
                              <p className={`text-xs leading-relaxed mb-3 font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                {card.description}
                              </p>

                              <ul className="space-y-1.5 mb-3">
                                {card.bullets?.map((b, bIdx) => (
                                  <li key={bIdx} className={`text-xs flex items-start gap-1.5 font-medium ${
                                    isDark ? 'text-slate-200' : 'text-slate-900'
                                  }`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                    <span className="leading-snug">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className={`pt-2.5 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                              <span className={`text-[11px] font-bold block ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
                                {card.highlight}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  )}

                  {/* 6. QUOTE WITH 3 CARDS */}
                  {slide.type === 'quote-three-cards' && (
                    <div className="space-y-3 sm:space-y-4">
                      {slide.quoteHeader && (
                        <div className={`p-3.5 sm:p-4 rounded-e-xl rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 ltr:border-r-0 rtl:rounded-l-xl rtl:rounded-r-none ltr:rounded-r-xl ltr:rounded-l-none ${
                          isDark 
                            ? 'bg-blue-950/40 border-blue-500 text-blue-100' 
                            : 'bg-blue-50 border-blue-600 text-slate-950 shadow-sm'
                        }`}>
                          <p className="text-xs sm:text-sm md:text-base font-bold italic leading-relaxed">
                            {slide.quoteHeader}
                          </p>
                          {slide.quoteAuthor && (
                            <span className={`text-[11px] sm:text-xs font-extrabold block mt-1 ${
                              isDark ? 'text-blue-400' : 'text-blue-800'
                            }`}>
                              — {slide.quoteAuthor}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 items-stretch">
                        {slide.cards?.map((card, idx) => (
                          <div 
                            key={idx}
                            className={`rounded-xl p-4 sm:p-5 border shadow-sm flex flex-col justify-between ${
                              isDark ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-slate-50/90 border-slate-200 text-slate-950'
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                  isDark ? 'bg-blue-950/60 text-blue-400' : 'bg-blue-100 text-blue-900'
                                }`}>
                                  {card.number}
                                </span>
                                <h3 className={`text-sm sm:text-base font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                  {card.title}
                                </h3>
                              </div>
                              <p className={`text-xs leading-relaxed mb-3 font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                {card.description}
                              </p>

                              <ul className="space-y-1.5 mb-3">
                                {card.bullets?.map((b, bIdx) => (
                                  <li key={bIdx} className={`text-xs flex items-start gap-1.5 font-medium ${
                                    isDark ? 'text-slate-200' : 'text-slate-900'
                                  }`}>
                                    <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                                    <span className="leading-snug">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className={`pt-2.5 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                              <span className={`text-xs font-bold ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
                                {card.highlight}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 8. JOURNEY FLOW */}
                  {slide.type === 'journey-flow' && (
                    slide.id === 3 ? (
                      <UxDefinitionVisual language={language} isDark={isDark} />
                    ) : (
                      <JourneyFlowVisual 
                        language={language} 
                        isDark={isDark} 
                        mode={slide.id === 4 ? 'uber-example' : 'generic-journey'} 
                      />
                    )
                  )}

                  {/* 9. COMPONENT ANATOMY */}
                  {slide.type === 'component-anatomy' && (
                    <ComponentAnatomyVisual 
                      language={language} 
                      isDark={isDark} 
                    />
                  )}

                  {/* 10. COMPARISON TABLE */}
                  {slide.type === 'comparison-table' && (
                    getSlideView(slide.id) === 'interactive' ? (
                      <UxUiComparisonSlider language={language} />
                    ) : (
                      <ComparisonTableVisual 
                        language={language} 
                        rows={slide.comparisonRows} 
                        isDark={isDark} 
                      />
                    )
                  )}

                  {/* 11. SCENARIO COMPARISON */}
                  {slide.type === 'scenario-comparison' && (
                    <ScenarioComparisonVisual 
                      language={language} 
                      isDark={isDark} 
                    />
                  )}

                  {/* 12. TIMELINE */}
                  {slide.type === 'timeline' && (
                    <TimelineVisual 
                      language={language} 
                      items={slide.timelineItems} 
                      isDark={isDark} 
                    />
                  )}

                  {/* 13. HONEYCOMB */}
                  {slide.type === 'honeycomb' && (
                    <HoneycombVisual 
                      language={language} 
                      isDark={isDark} 
                    />
                  )}

                  {/* 14. PRODUCT ANALYSIS */}
                  {slide.type === 'product-analysis' && (
                    <ProductAnalysisVisual 
                      language={language} 
                      isDark={isDark} 
                    />
                  )}

                  {/* 15. PRACTICAL EXERCISE */}
                  {slide.type === 'exercise' && (
                    <PracticalExerciseVisual 
                      language={language} 
                      isDark={isDark} 
                    />
                  )}

                  {/* 16. SUMMARY & REFERENCES */}
                  {slide.type === 'summary-references' && (
                    <SummaryReferencesVisual 
                      language={language} 
                      isDark={isDark} 
                    />
                  )}

                  {/* DARK QUOTE SLIDE */}
                  {slide.type === 'dark-quote' && (
                    <div className="py-2 text-center max-w-4xl mx-auto flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                        <Quote className="w-6 h-6" />
                      </div>

                      <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-100 leading-snug tracking-tight mb-4 px-2">
                        {slide.quoteHeader}
                      </blockquote>

                      <p className="text-xs sm:text-sm text-blue-400 font-semibold mb-6">
                        — {slide.quoteAuthor}
                      </p>

                      {slide.cards && (
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 text-start">
                          {slide.cards.map((item, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-start">
                              <span className="text-xs font-bold text-blue-400 block mb-1">
                                {item.number}
                              </span>
                              <h5 className="text-xs sm:text-sm font-bold text-white mb-1.5">{item.title}</h5>
                              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* DARK CTA SLIDE */}
                  {slide.type === 'dark-cta' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                        {(slide.processSteps || slide.cards)?.map((step, idx) => (
                          <div key={idx} className="bg-slate-900/90 rounded-xl p-4 sm:p-5 border border-slate-800 shadow-sm flex flex-col justify-between">
                            <div>
                              <span className="text-xs font-bold text-blue-400 bg-blue-950/70 border border-blue-800/40 px-2.5 py-1 rounded inline-block mb-3">
                                {step.number}
                              </span>
                              <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                                {step.title}
                              </h4>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-blue-900/40 border border-blue-700/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">
                            {isRTL ? 'السيشن القادم في الدبلومة' : 'Up Next in Diploma'}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                            {isRTL ? 'السيشن 02: أدوات وأدوار ومهارات مصمم UI/UX' : 'Session 02: UI/UX Tools, Roles & Designer Skills'}
                          </h4>
                        </div>

                        <div 
                          onClick={onNext}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer shrink-0"
                        >
                          <span>{slide.ctaButtonText || (isRTL ? 'ابدأ التطبيق العملي' : 'Start Practical Exercise')}</span>
                          {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

      </main>

      {/* FOOTER & SLIDE PROGRESS */}
      <footer className={`relative z-10 px-6 sm:px-10 lg:px-12 py-3.5 flex items-center justify-between border-t text-xs ${
        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
      }`}>
        <div className="flex items-center gap-4">
          <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
            {slide.slideNumber}
          </span>
          <span className={`hidden sm:inline-block ${isDark ? 'text-slate-700' : 'text-slate-300'}`}>|</span>
          <span className={`hidden sm:inline-block font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <bdi>
              {isSession02 
                ? (isRTL ? 'دبلومة الـ UI/UX الاحترافية — السيشن 02: أدوات وأدوار ومهارات المصمم' : 'UI/UX Diploma — Session 02: Tools, Roles & Skills')
                : (isRTL ? 'دبلومة الـ UI/UX الاحترافية — الفصل الأول: التأسيس' : 'UI/UX Diploma — Chapter 1: Foundations')}
            </bdi>
          </span>
        </div>

        {/* Mini slide navigation arrows */}
        <div className="flex items-center gap-1">
          <button 
            id="slide-btn-prev"
            onClick={onPrev}
            disabled={isFirst}
            className={`p-1.5 rounded-md disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer ${
              isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-200 text-slate-700'
            }`}
            title="Previous Slide (Left Arrow)"
          >
            {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
          <span className="text-[11px] font-mono text-slate-400 px-1">
            {slide.id} / {totalSlides}
          </span>
          <button 
            id="slide-btn-next"
            onClick={onNext}
            disabled={isLast}
            className={`p-1.5 rounded-md disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer ${
              isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-200 text-slate-700'
            }`}
            title="Next Slide (Right Arrow or Space)"
          >
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </footer>

      {/* Thin bottom progress bar */}
      <div className={`w-full h-1 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${(slide.id / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
};
