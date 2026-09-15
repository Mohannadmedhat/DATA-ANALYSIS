import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft
} from 'lucide-react';
import { SlideData, Language } from '../types';
import { InstantLogo } from './InstantLogo';

// Data Analysis Specialized Visual Components
import { DataIntroVisual } from './visuals/dataAnalysis/DataIntroVisual';
import { DataActivitiesVisual } from './visuals/dataAnalysis/DataActivitiesVisual';
import { DataImportanceGridVisual } from './visuals/dataAnalysis/DataImportanceGridVisual';
import { DataInRealLifeVisual } from './visuals/dataAnalysis/DataInRealLifeVisual';
import { DataVsInfoVsInsightVisual } from './visuals/dataAnalysis/DataVsInfoVsInsightVisual';
import { TypesOfDataVisual } from './visuals/dataAnalysis/TypesOfDataVisual';
import { StructuredDataVisual } from './visuals/dataAnalysis/StructuredDataVisual';
import { DataLifecycleVisual } from './visuals/dataAnalysis/DataLifecycleVisual';
import { DataPipelineVisual } from './visuals/dataAnalysis/DataPipelineVisual';
import { DataRoadmapVisual } from './visuals/dataAnalysis/DataRoadmapVisual';
import { SectionDividerVisual } from './visuals/dataAnalysis/SectionDividerVisual';
import { CodeAndConceptsVisual } from './visuals/dataAnalysis/CodeAndConceptsVisual';
import { WorkflowFlowVisual } from './visuals/dataAnalysis/WorkflowFlowVisual';
import { KnowledgeCheckVisual } from './visuals/dataAnalysis/KnowledgeCheckVisual';
import { AssignmentVisual } from './visuals/dataAnalysis/AssignmentVisual';
import { ThankYouVisual } from './visuals/dataAnalysis/ThankYouVisual';

// Advanced Bespoke Reshaped Visuals
import { ExcelFormulasVisual } from './visuals/dataAnalysis/ExcelFormulasVisual';
import { ExcelDashboardPipelineVisual } from './visuals/dataAnalysis/ExcelDashboardPipelineVisual';
import { NumPyPandasVisual } from './visuals/dataAnalysis/NumPyPandasVisual';
import { PowerBiPublishingVisual } from './visuals/dataAnalysis/PowerBiPublishingVisual';
import { TableauDragDropVisual } from './visuals/dataAnalysis/TableauDragDropVisual';
import { TableauStoryVisual } from './visuals/dataAnalysis/TableauStoryVisual';
import { CompleteWorkflowVisual } from './visuals/dataAnalysis/CompleteWorkflowVisual';
import { CareerSkillsVisual } from './visuals/dataAnalysis/CareerSkillsVisual';
import { AssignmentStudioVisual } from './visuals/dataAnalysis/AssignmentStudioVisual';
import { TwoCardsVisual } from './visuals/dataAnalysis/TwoCardsVisual';
import { ConditionsLoopsVisual } from './visuals/dataAnalysis/ConditionsLoopsVisual';
import { MatplotlibSeabornVisual } from './visuals/dataAnalysis/MatplotlibSeabornVisual';
import { DatabasesRelationalVisual } from './visuals/dataAnalysis/DatabasesRelationalVisual';
import { PowerQueryModelingVisual } from './visuals/dataAnalysis/PowerQueryModelingVisual';
import { WebScrapingPracticeVisual } from './visuals/dataAnalysis/WebScrapingPracticeVisual';

interface SlideViewerProps {
  slide: SlideData;
  language: Language;
  onNext?: () => void;
  onPrev?: () => void;
  onSelectSlide?: (index: number) => void;
  isFirst?: boolean;
  isLast?: boolean;
  totalSlides?: number;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  language,
  onNext,
  onPrev,
  onSelectSlide,
  isFirst = false,
  isLast = false,
  totalSlides = 44,
}) => {
  const isDark = slide.darkTheme ?? true;
  const isRTL = language === 'ar';

  // Section hero / divider slides that don't need the default header
  const isHeroOrDivider = [1, 10, 11, 15, 19, 23, 28, 32, 36, 44].includes(slide.id);

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

  return (
    <div 
      id={`slide-${slide.id}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`relative w-full max-w-6xl xl:max-w-7xl h-[620px] sm:h-[660px] md:h-[700px] lg:h-[720px] xl:h-[740px] rounded-2xl shadow-2xl border flex flex-col justify-between overflow-hidden transition-colors duration-300 ease-in-out select-none ${
        isDark 
          ? 'bg-[#0b1324] border-slate-800 text-slate-100 shadow-blue-950/20' 
          : 'bg-[#fcfdfe] border-slate-200 text-slate-900 shadow-slate-200/50'
      }`}
    >
      {/* Ambient subtle background lighting with seamless opacity crossfade to prevent any layout glitch */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dark Theme Background Layer */}
        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e1628] via-[#091020] to-[#060a14]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        {/* Light Theme Background Layer */}
        <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${!isDark ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/[0.04] rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.6),rgba(255,255,255,1))]" />
        </div>
      </div>

      {/* TOP BAR / METADATA HEADER */}
      <header className={`relative z-10 px-6 sm:px-10 lg:px-12 pt-4 sm:pt-5 pb-3 flex items-center justify-between border-b text-[11px] sm:text-xs font-semibold tracking-wider bg-transparent transition-colors duration-300 ease-in-out ${
        isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
      }`}>
        <div className="flex items-center gap-3">
          <InstantLogo className="h-3.5 sm:h-4" isDark={isDark} />
          <span className={`hidden sm:inline-block w-px h-4 transition-colors duration-300 ${isDark ? 'bg-slate-800/80' : 'bg-slate-200'}`} />
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className={`uppercase font-bold transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
              {slide.topRightTag}
            </span>
          </div>
        </div>

        {slide.topLeftTag && slide.topLeftTag.trim() !== '' && (
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-md font-medium border transition-colors duration-300 ${
              isDark 
                ? 'bg-slate-800/80 text-blue-400 border-slate-700/80' 
                : 'bg-slate-100 text-blue-700 border-slate-200'
            }`}>
              {slide.topLeftTag}
            </span>
          </div>
        )}
      </header>

      {/* MAIN SLIDE CANVAS CONTENT */}
      <main className={`relative z-10 flex-1 flex flex-col justify-between overflow-y-auto ${
        isHeroOrDivider ? 'p-2 sm:p-4' : 'px-6 sm:px-10 lg:px-12 py-3 sm:py-5'
      }`}>
        
        {/* Title, Badge & Subtitle (Hidden on full-bleed Hero & Section Divider slides) */}
        {!isHeroOrDivider && (
          <div className="mb-3 sm:mb-4 flex flex-col md:flex-row md:items-start justify-between gap-3 text-start w-full">
            <div className="flex-1 w-full text-start">
              <div className="flex items-center gap-2.5 mb-1.5 justify-start">
                <span className="h-[3px] w-6 bg-[#27aae1] rounded-full inline-block shrink-0" />
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#27aae1]">
                  {slide.subBadge}
                </span>
              </div>
              <div className="w-full text-start">
                {renderHighlightedTitle(slide.mainTitle, slide.highlightedWords)}
              </div>
              {slide.subtitle && (
                <p className={`mt-2 sm:mt-2.5 text-xs sm:text-sm md:text-base leading-relaxed max-w-4xl font-medium text-start transition-colors duration-300 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {slide.subtitle}
                </p>
              )}
            </div>
          </div>
        )}

        {/* DYNAMIC CONTENT AREA BASED ON SLIDE TYPE & SESSION DISPATCH */}
        <div className={`flex-1 w-full flex flex-col ${isHeroOrDivider ? 'h-full justify-center' : 'my-auto py-1 justify-center'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${slide.id}-${language}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full flex-1 flex flex-col justify-center"
            >
              {/* Slide 01: Intro Hero */}
              {slide.id === 1 && (
                <DataIntroVisual isRTL={isRTL} onStart={onNext} />
              )}

              {/* Slide 02: What is Data Analysis & 5 Key Activities */}
              {slide.id === 2 && (
                <DataActivitiesVisual 
                  definitionText={slide.definitionBox?.text || ''} 
                  definitionLabel={slide.definitionBox?.label} 
                  activities={slide.cards || []} 
                  isRTL={isRTL} 
                />
              )}

              {/* Slide 03: Why Data Analysis is Important (5 Cards) */}
              {slide.id === 3 && (
                <DataImportanceGridVisual cards={slide.cards || []} isRTL={isRTL} />
              )}

              {/* Slide 04: Data in Real Life (4 Cards) */}
              {slide.id === 4 && (
                <DataInRealLifeVisual cards={slide.cards || []} isRTL={isRTL} />
              )}

              {/* Slide 05: Data vs Information vs Insight (3 Levels) */}
              {slide.id === 5 && (
                <DataVsInfoVsInsightVisual stages={slide.stages} isRTL={isRTL} />
              )}

              {/* Slide 06: Types of Data (Qualitative & Quantitative Tabs) */}
              {slide.id === 6 && (
                <TypesOfDataVisual isRTL={isRTL} />
              )}

              {/* Slide 07: Structured vs Unstructured Data (3 Cards) */}
              {slide.id === 7 && (
                <StructuredDataVisual cards={slide.cards} isRTL={isRTL} />
              )}

              {/* Slide 08: Data Analysis Lifecycle (6 Stages) */}
              {slide.id === 8 && (
                <DataLifecycleVisual steps={slide.processSteps} isRTL={isRTL} />
              )}

              {/* Slide 09: Data Pipeline (Ingestion to Decision) */}
              {slide.id === 9 && (
                <DataPipelineVisual isRTL={isRTL} />
              )}

              {/* Slide 10: Data Analysis Roadmap (8 Milestones) */}
              {slide.id === 10 && (
                <DataRoadmapVisual isRTL={isRTL} />
              )}

              {/* Slide 11: Section 1 — Excel */}
              {slide.id === 11 && (
                <SectionDividerVisual number="01" title={slide.mainTitle} subtitle={slide.subtitle} icon="excel" isRTL={isRTL} />
              )}

              {/* Slide 12: Why Excel is Important (6 Cards) */}
              {slide.id === 12 && (
                <DataImportanceGridVisual cards={slide.cards || []} isRTL={isRTL} />
              )}

              {/* Slide 13: Formulas & Functions in Practice */}
              {slide.id === 13 && (
                <ExcelFormulasVisual isRTL={isRTL} />
              )}

              {/* Slide 14: From Clean Data to Dashboards */}
              {slide.id === 14 && (
                <ExcelDashboardPipelineVisual isRTL={isRTL} />
              )}

              {/* Slide 15: Section 2 — Python Fundamentals */}
              {slide.id === 15 && (
                <SectionDividerVisual number="02" title={slide.mainTitle} subtitle={slide.subtitle} icon="python" isRTL={isRTL} />
              )}

              {/* Slide 16: Variables & Data Types */}
              {slide.id === 16 && (
                <CodeAndConceptsVisual mode="python-vars" isRTL={isRTL} />
              )}

              {/* Slide 17: Conditions & Loops */}
              {slide.id === 17 && (
                <ConditionsLoopsVisual isRTL={isRTL} />
              )}

              {/* Slide 18: Functions, Lists & Dictionaries */}
              {slide.id === 18 && (
                <CodeAndConceptsVisual mode="python-structs" isRTL={isRTL} />
              )}

              {/* Slide 19: Section 3 — Python for Data Analysis */}
              {slide.id === 19 && (
                <SectionDividerVisual number="03" title={slide.mainTitle} subtitle={slide.subtitle} icon="python" isRTL={isRTL} />
              )}

              {/* Slide 20: NumPy & Pandas */}
              {slide.id === 20 && (
                <NumPyPandasVisual isRTL={isRTL} />
              )}

              {/* Slide 21: Matplotlib & Seaborn */}
              {slide.id === 21 && (
                <MatplotlibSeabornVisual isRTL={isRTL} />
              )}

              {/* Slide 22: Working with Real Datasets */}
              {slide.id === 22 && (
                <CodeAndConceptsVisual mode="python-workflow" isRTL={isRTL} />
              )}

              {/* Slide 23: Section 4 — SQL & Databases */}
              {slide.id === 23 && (
                <SectionDividerVisual number="04" title={slide.mainTitle} subtitle={slide.subtitle} icon="sql" isRTL={isRTL} />
              )}

              {/* Slide 24: Why Databases Matter */}
              {slide.id === 24 && (
                <DatabasesRelationalVisual isRTL={isRTL} />
              )}

              {/* Slide 25: SQL Queries & Filtering */}
              {slide.id === 25 && (
                <CodeAndConceptsVisual mode="sql-query" isRTL={isRTL} />
              )}

              {/* Slide 26: Aggregation & Joins */}
              {slide.id === 26 && (
                <CodeAndConceptsVisual mode="sql-joins" isRTL={isRTL} />
              )}

              {/* Slide 27: Subqueries & SQL Tools */}
              {slide.id === 27 && (
                <CodeAndConceptsVisual mode="sql-subqueries" isRTL={isRTL} />
              )}

              {/* Slide 28: Section 5 — Power BI */}
              {slide.id === 28 && (
                <SectionDividerVisual number="05" title={slide.mainTitle} subtitle={slide.subtitle} icon="powerbi" isRTL={isRTL} />
              )}

              {/* Slide 29: Power Query & Data Modeling */}
              {slide.id === 29 && (
                <PowerQueryModelingVisual isRTL={isRTL} />
              )}

              {/* Slide 30: DAX — Data Analysis Expressions */}
              {slide.id === 30 && (
                <CodeAndConceptsVisual mode="dax" isRTL={isRTL} />
              )}

              {/* Slide 31: Dashboards, Reports & Publishing */}
              {slide.id === 31 && (
                <PowerBiPublishingVisual isRTL={isRTL} />
              )}

              {/* Slide 32: Section 6 — Tableau */}
              {slide.id === 32 && (
                <SectionDividerVisual number="06" title={slide.mainTitle} subtitle={slide.subtitle} icon="tableau" isRTL={isRTL} />
              )}

              {/* Slide 33: Connecting Data & Creating Charts */}
              {slide.id === 33 && (
                <TwoCardsVisual cards={slide.cards} categoryColumns={slide.categoryColumns} isRTL={isRTL} />
              )}

              {/* Slide 34: Interactive Dashboards & Storytelling */}
              {slide.id === 34 && (
                <TwoCardsVisual cards={slide.cards} categoryColumns={slide.categoryColumns} isRTL={isRTL} />
              )}

              {/* Slide 35: Power BI vs Tableau */}
              {slide.id === 35 && (
                <TwoCardsVisual cards={slide.cards} categoryColumns={slide.categoryColumns} isRTL={isRTL} />
              )}

              {/* Slide 36: Section 7 — Web Scraping */}
              {slide.id === 36 && (
                <SectionDividerVisual number="07" title={slide.mainTitle} subtitle={slide.subtitle} icon="scraping" isRTL={isRTL} />
              )}

              {/* Slide 37: What is Web Scraping? (4 Cards) */}
              {slide.id === 37 && (
                <DataInRealLifeVisual cards={slide.cards || []} isRTL={isRTL} />
              )}

              {/* Slide 38: Web Scraping in Practice */}
              {slide.id === 38 && (
                <WebScrapingPracticeVisual isRTL={isRTL} />
              )}

              {/* Slide 39: Complete Data Analyst Workflow (6 Tools) */}
              {slide.id === 39 && (
                <CompleteWorkflowVisual isRTL={isRTL} />
              )}

              {/* Slide 40: Career Skills of a Data Analyst (Technical vs Soft) */}
              {slide.id === 40 && (
                <CareerSkillsVisual isRTL={isRTL} />
              )}

              {/* Slide 41: Session Summary (6 Cards) */}
              {slide.id === 41 && (
                <DataImportanceGridVisual cards={slide.cards || []} isRTL={isRTL} />
              )}

              {/* Slide 42: Knowledge Check (6 Questions) */}
              {slide.id === 42 && (
                <KnowledgeCheckVisual isRTL={isRTL} />
              )}

              {/* Slide 43: Assignment — Mini Research Task */}
              {slide.id === 43 && (
                <AssignmentStudioVisual isRTL={isRTL} />
              )}

              {/* Slide 44: Thank You */}
              {slide.id === 44 && (
                <ThankYouVisual isRTL={isRTL} onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()} />
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
              {isRTL 
                ? 'دبلومة تحليل البيانات — السيشن 01: أساسيات تحليل البيانات' 
                : 'Data Analysis Diploma — Session 01: Fundamentals'}
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
