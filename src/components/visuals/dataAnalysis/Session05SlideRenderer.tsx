import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { InstantLogo } from '../../InstantLogo';
import { 
  FileText, 
  Search, 
  Zap, 
  RefreshCw, 
  Layers, 
  BarChart2, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Copy,
  Scissors,
  Columns,
  Filter,
  ArrowUpDown,
  Edit3,
  RotateCw,
  Database,
  Trash2,
  Calendar,
  Hash,
  Binary,
  CheckSquare,
  Clock,
  Award,
  ChevronRight,
  Info,
  Check,
  AlertTriangle,
  Play,
  Table,
  Sliders,
  Terminal,
  Cpu,
  CornerDownRight
} from 'lucide-react';

interface Session05SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
}

export const Session05SlideRenderer: React.FC<Session05SlideRendererProps> = ({
  slide,
  onNext
}) => {
  // Interactive State for Bespoke Visuals
  const [activeTextTab, setActiveTextTab] = useState<number>(0);
  const [selectedSampleText, setSelectedSampleText] = useState<string>('  ELEC-2045-US  ');
  const [selectedFunction, setSelectedFunction] = useState<string>('TRIM');
  
  // Lookup Simulator State
  const [selectedLookupId, setSelectedLookupId] = useState<string>('P-102');
  const [selectedLookupMethod, setSelectedLookupMethod] = useState<'VLOOKUP' | 'XLOOKUP' | 'INDEX/MATCH'>('XLOOKUP');

  // Power Query Simulator State
  const [pqSimStep, setPqSimStep] = useState<number>(0);

  // Reset states when slide changes
  useEffect(() => {
    setActiveTextTab(0);
    setSelectedSampleText('  ELEC-2045-US  ');
    setSelectedFunction('TRIM');
    setSelectedLookupId('P-102');
    setSelectedLookupMethod('XLOOKUP');
    setPqSimStep(0);
  }, [slide.id]);

  // Icon Mapping Helper
  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case 'FileText': return FileText;
      case 'Search': return Search;
      case 'Zap': return Zap;
      case 'RefreshCw': return RefreshCw;
      case 'Layers': return Layers;
      case 'BarChart2': return BarChart2;
      case 'Copy': return Copy;
      case 'Scissors': return Scissors;
      case 'Columns': return Columns;
      case 'Filter': return Filter;
      case 'ArrowUpDown': return ArrowUpDown;
      case 'Edit3': return Edit3;
      case 'RotateCw': return RotateCw;
      case 'Database': return Database;
      case 'Trash2': return Trash2;
      case 'Calendar': return Calendar;
      case 'Hash': return Hash;
      case 'Binary': return Binary;
      case 'CheckSquare': return CheckSquare;
      case 'Clock': return Clock;
      case 'Award': return Award;
      default: return Sparkles;
    }
  };

  // =========================================================
  // 1. Slide 01: Hero Cover Slide (Unified Format)
  // =========================================================
  if (slide.id === 1) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden bg-slate-950 text-white">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl bg-blue-600/15 pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between">
          <InstantLogo className="h-6 sm:h-7 opacity-95" isDark={true} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-wide">
            {slide.topRightTag || 'DATA ANALYSIS DIPLOMA • SESSION 05'}
          </div>
        </div>

        {/* Central Content */}
        <div className="relative z-10 max-w-3xl my-auto py-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold mb-4">
            {slide.subBadge || 'SESSION 5 · ADVANCED EXCEL'}
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none mb-4 text-white">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Functions</span> & Power Query
          </h1>

          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6 shadow-sm shadow-orange-500/30" />

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            {slide.subtitle || 'Text Functions · Lookup Functions · Dynamic Arrays · Power Query Fundamentals'}
          </p>

          {/* Stats / Feature Pills */}
          <div className="grid grid-cols-3 gap-3 max-w-xl mb-8">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-lg font-bold text-cyan-400 font-mono">10+</div>
              <div className="text-[11px] text-slate-400 font-medium">Text Functions</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-lg font-bold text-blue-400 font-mono">4</div>
              <div className="text-[11px] text-slate-400 font-medium">Lookup Algorithms</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
              <div className="text-lg font-bold text-amber-400 font-mono">1-Click</div>
              <div className="text-[11px] text-slate-400 font-medium">Power Query ETL</div>
            </div>
          </div>

          {/* Action button */}
          {onNext && (
            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer group"
            >
              <span>Start Session 05</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-900">
          <span>Instant Academy • Data Analysis Training Program</span>
          <span className="font-mono">Duration: 3.5 Hours</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 2. Section Divider Slides (Unified Format - Slides 3, 13, 22, 31)
  // =========================================================
  if (slide.type === 'section-divider') {
    const dividerIcons: Record<number, any> = {
      3: FileText,
      13: Search,
      22: Zap,
      31: RefreshCw
    };
    const IconComp = dividerIcons[slide.id] || Sparkles;

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 select-none overflow-hidden bg-slate-950 text-white">
        {/* Ambient glow */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-80 h-80 rounded-full blur-3xl bg-blue-600/20 pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl flex flex-col items-center my-auto"
        >
          {/* Orange gradient icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-4 ring-4 ring-orange-500/20">
            <IconComp className="w-8 h-8" />
          </div>

          {/* Part badge pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold mb-3">
            {slide.partNumber || 'SECTION'}
          </div>

          {/* Main title */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {slide.sectionTitle || slide.mainTitle}
          </h2>

          {/* Orange underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
            {slide.subtitle}
          </p>
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // 3. Slide 02 & 43: Six Cards Grid
  // =========================================================
  if (slide.type === 'six-cards' && slide.cards) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">{slide.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {slide.cards.map((card, idx) => {
              const CardIcon = getIconComponent(card.iconName);
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-3">
                      <CardIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{card.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Session 05 • Advanced Excel & Power Query</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 4. Function Card (Slides 4-10, 14-17, 19, 23-26)
  // =========================================================
  if (slide.type === 'function-card') {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
                {slide.subBadge || 'EXCEL FUNCTION'}
              </span>
              <span className="text-xs font-mono text-slate-400">{slide.topLeftTag}</span>
            </div>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold mb-1 text-white tracking-tight">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">{slide.subtitle}</p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Key Concepts (7 cols) */}
            <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg">
              <div className="text-xs font-mono text-amber-400 font-bold mb-3 tracking-wider uppercase flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-400" />
                <span>KEY CONCEPTS & SYNTAX</span>
              </div>
              <ul className="space-y-2.5">
                {slide.keyConcepts?.map((concept, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span>{concept}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Formulas & Business Example (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Formula Block */}
              {slide.formulas && (
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 shadow-xl">
                  <div className="text-[11px] font-mono text-slate-400 font-bold mb-2 uppercase tracking-wider">
                    EXCEL FORMULA
                  </div>
                  <div className="space-y-2 font-mono text-xs sm:text-sm text-cyan-300">
                    {slide.formulas.map((form, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                        <code>{form}</code>
                        <span className="text-[10px] text-slate-500 font-sans">Formula</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Example Block */}
              {slide.businessExample && (
                <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/60 border border-blue-500/30 rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs font-mono mb-1.5">
                    <BarChart2 className="w-4 h-4" />
                    <span>BUSINESS EXAMPLE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {slide.businessExample}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Excel Text, Lookup & Dynamic Arrays</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 5. Formula Breakdown (Slides 11, 20, 27)
  // =========================================================
  if (slide.type === 'formula-breakdown' && slide.recipeSteps) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">{slide.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {slide.recipeSteps.map((st, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800 border border-slate-700 relative flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-blue-400 font-bold mb-2">{st.step}</div>
                  <p className="text-xs text-slate-300 mb-4">{st.desc}</p>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-950 font-mono text-xs text-cyan-300 font-bold">
                  {st.code}
                </div>
              </div>
            ))}
          </div>

          {slide.businessExample && (
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-blue-400 font-mono">BUSINESS APPLICATION: </span>
              {slide.businessExample}
            </div>
          )}
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Session 05 • Formula Recipes</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 6. Slide 12: Interactive Text Cleaning Studio / Lab
  // =========================================================
  if (slide.type === 'interactive-lab' || slide.id === 12) {
    const samples = [
      { label: 'Messy SKU', val: '  ELEC-2045-US  ' },
      { label: 'Unformatted Name', val: 'jOHn.sMItH@company.COM ' },
      { label: 'Invoice Code', val: 'ORD/2024/9912' }
    ];

    const fnOptions = ['TRIM', 'UPPER', 'LOWER', 'PROPER', 'LEFT (4)', 'RIGHT (4)', 'SUBSTITUTE (/) to (-)'];

    const calculateResult = (input: string, fn: string) => {
      switch (fn) {
        case 'TRIM': return input.trim();
        case 'UPPER': return input.toUpperCase();
        case 'LOWER': return input.toLowerCase();
        case 'PROPER': 
          return input.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
        case 'LEFT (4)': return input.trim().substring(0, 4);
        case 'RIGHT (4)': return input.trim().substring(input.trim().length - 4);
        case 'SUBSTITUTE (/) to (-)': return input.replace(/\//g, '-');
        default: return input;
      }
    };

    const getFormulaSnippet = (fn: string) => {
      switch (fn) {
        case 'TRIM': return '=TRIM(A2)';
        case 'UPPER': return '=UPPER(A2)';
        case 'LOWER': return '=LOWER(A2)';
        case 'PROPER': return '=PROPER(A2)';
        case 'LEFT (4)': return '=LEFT(A2, 4)';
        case 'RIGHT (4)': return '=RIGHT(A2, 4)';
        case 'SUBSTITUTE (/) to (-)': return '=SUBSTITUTE(A2, "/", "-")';
        default: return '=A2';
      }
    };

    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-4">{slide.subtitle}</p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl">
            {/* Input Selection (4 cols) */}
            <div className="lg:col-span-4 border-r border-slate-800/80 pr-4">
              <div className="text-xs font-mono text-slate-400 font-bold mb-3 uppercase">1. Select Input Sample</div>
              <div className="space-y-2 mb-4">
                {samples.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSampleText(s.val)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                      selectedSampleText === s.val
                        ? 'bg-blue-600/20 border-blue-500 text-blue-300 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-[10px] text-slate-500 font-sans">{s.label}</div>
                    <div>"{s.val}"</div>
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-slate-400 font-bold mb-3 uppercase">2. Select Function</div>
              <div className="flex flex-wrap gap-1.5">
                {fnOptions.map((fn, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedFunction(fn)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer border ${
                      selectedFunction === fn
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {fn}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Calculation Output (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-between pl-2">
              <div>
                <div className="text-xs font-mono text-slate-400 font-bold mb-3 uppercase">3. Live Excel Transformation Result</div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-500 font-mono mb-1">RAW CELL VALUE (A2)</div>
                    <div className="font-mono text-xs text-amber-300 bg-slate-950 p-2 rounded border border-slate-800">
                      "{selectedSampleText}"
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-500 font-mono mb-1">EVALUATED FORMULA</div>
                    <div className="font-mono text-xs text-cyan-300 bg-slate-950 p-2 rounded border border-slate-800">
                      {getFormulaSnippet(selectedFunction)}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-500/40">
                  <div className="text-[11px] font-mono text-blue-400 font-bold mb-1">TRANSFORMED RESULT OUTPUT:</div>
                  <div className="font-mono text-lg font-bold text-emerald-400 bg-slate-950 p-3 rounded-lg border border-slate-800 tracking-wide">
                    "{calculateResult(selectedSampleText, selectedFunction)}"
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Text functions execute dynamically in memory without altering your raw source dataset.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Interactive Excel Studio</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 7. Slide 18: Comparison Matrix
  // =========================================================
  if (slide.type === 'comparison-matrix' && slide.matrixRows) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-4">{slide.subtitle}</p>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 mb-4">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900 font-mono text-slate-300">
                  <th className="p-3 font-bold">Feature</th>
                  <th className="p-3 text-slate-400">VLOOKUP</th>
                  <th className="p-3 text-slate-400">HLOOKUP</th>
                  <th className="p-3 text-cyan-400 bg-cyan-950/30">XLOOKUP ⭐</th>
                  <th className="p-3 text-amber-400">INDEX & MATCH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans text-slate-300">
                {slide.matrixRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50">
                    <td className="p-3 font-bold text-white font-mono">{row.feature}</td>
                    <td className="p-3 text-slate-400">{row.vlookup}</td>
                    <td className="p-3 text-slate-400">{row.hlookup}</td>
                    <td className="p-3 text-cyan-300 font-semibold bg-cyan-950/20">{row.xlookup}</td>
                    <td className="p-3 text-amber-300 font-semibold">{row.indexMatch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {slide.businessExample && (
            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-slate-200">
              <span className="font-bold text-blue-400 font-mono">BUSINESS ADVICE: </span>
              {slide.businessExample}
            </div>
          )}
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Lookup Function Matrix</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 8. Slide 21: Interactive Lookup Algorithm Simulator
  // =========================================================
  if (slide.type === 'interactive-lookup' || slide.id === 21) {
    const products = [
      { id: 'P-101', name: 'MacBook Pro 16"', price: '$2,499', rowIdx: 1 },
      { id: 'P-102', name: 'Dell XPS 15', price: '$1,899', rowIdx: 2 },
      { id: 'P-103', name: 'iPad Pro 12.9"', price: '$1,099', rowIdx: 3 },
      { id: 'P-104', name: 'Logitech MX Master', price: '$99', rowIdx: 4 }
    ];

    const selectedProd = products.find(p => p.id === selectedLookupId) || products[1];

    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-4">{slide.subtitle}</p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950 border border-slate-800 rounded-2xl p-5">
            {/* Left Controls (4 cols) */}
            <div className="lg:col-span-4 border-r border-slate-800/80 pr-4">
              <div className="text-xs font-mono text-slate-400 font-bold mb-3 uppercase">1. Select Search Target ID</div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {products.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedLookupId(p.id)}
                    className={`p-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
                      selectedLookupId === p.id
                        ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {p.id}
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-slate-400 font-bold mb-3 uppercase">2. Select Lookup Algorithm</div>
              <div className="space-y-2">
                {(['XLOOKUP', 'VLOOKUP', 'INDEX/MATCH'] as const).map(m => (
                  <button
                    key={m}
                    onClick={() => setSelectedLookupMethod(m)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border flex justify-between items-center ${
                      selectedLookupMethod === m
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{m}</span>
                    <span className="text-[10px] font-sans opacity-80">
                      {m === 'XLOOKUP' ? 'Modern 365' : m === 'VLOOKUP' ? 'Left-to-Right' : 'Flexible Pair'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Simulation Grid (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-between pl-2">
              <div>
                <div className="text-xs font-mono text-slate-400 font-bold mb-2 uppercase flex items-center justify-between">
                  <span>LIVE PRODUCT TABLE DATA</span>
                  <span className="text-cyan-400 font-bold">Matching Row #{selectedProd.rowIdx}</span>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-800 mb-4">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="p-2.5">Row #</th>
                        <th className="p-2.5 text-blue-400">Product ID (Col A)</th>
                        <th className="p-2.5 text-slate-300">Product Name (Col B)</th>
                        <th className="p-2.5 text-emerald-400">Price (Col C)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-950">
                      {products.map(p => {
                        const isMatched = p.id === selectedLookupId;
                        return (
                          <tr key={p.id} className={isMatched ? 'bg-blue-950/60 font-bold text-white' : 'text-slate-400'}>
                            <td className="p-2.5 text-slate-500">{p.rowIdx}</td>
                            <td className={`p-2.5 ${isMatched ? 'text-amber-400' : ''}`}>{p.id}</td>
                            <td className="p-2.5">{p.name}</td>
                            <td className={`p-2.5 ${isMatched ? 'text-emerald-400' : ''}`}>{p.price}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Formula Execution Display */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[10px] text-slate-500 font-mono mb-1">EXECUTED EXCEL FORMULA:</div>
                  <div className="font-mono text-xs text-cyan-300 font-bold bg-slate-950 p-2.5 rounded border border-slate-800">
                    {selectedLookupMethod === 'XLOOKUP' && `=XLOOKUP("${selectedLookupId}", A2:A5, C2:C5) -> ${selectedProd.price}`}
                    {selectedLookupMethod === 'VLOOKUP' && `=VLOOKUP("${selectedLookupId}", A2:C5, 3, FALSE) -> ${selectedProd.price}`}
                    {selectedLookupMethod === 'INDEX/MATCH' && `=INDEX(C2:C5, MATCH("${selectedLookupId}", A2:A5, 0)) -> ${selectedProd.price}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Lookup Execution Simulator</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 9. Business Scenarios (Slides 28, 29, 30)
  // =========================================================
  if (slide.type === 'business-scenario') {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">{slide.subtitle}</p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
              <div className="text-xs font-mono text-blue-400 font-bold mb-3 uppercase tracking-wider">
                IMPLEMENTATION WORKFLOW
              </div>
              <ul className="space-y-3">
                {slide.bulletPoints?.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-500/40 rounded-2xl p-5 shadow-xl">
              <div className="text-xs font-mono text-amber-400 font-bold mb-2 uppercase">
                BUSINESS IMPACT & OUTCOME
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium mb-4">
                "{slide.businessOutcome}"
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300">
                ⚡ Result: Zero manual copy-pasting required on recurring reports.
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Real Business Applications</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 10. Slide 32: Power Query 4 Pillars
  // =========================================================
  if (slide.id === 32 && slide.pillars) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">{slide.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {slide.pillars.map((pil, idx) => {
              const PilIcon = getIconComponent(pil.iconName);
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-800 border border-slate-700/80 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-3">
                      <PilIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{pil.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{pil.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {slide.didYouKnow && (
            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/40 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold block mb-0.5">DID YOU KNOW?</span>
                <p className="text-xs text-slate-200 leading-relaxed">{slide.didYouKnow}</p>
              </div>
            </div>
          )}
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>What is Power Query?</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 11. Slide 33: Why Use Power Query? (Manual vs PQ Table)
  // =========================================================
  if (slide.id === 33 && slide.manualPoints && slide.powerQueryPoints) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">{slide.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Left: Manual Cleaning */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-red-500/30 shadow-xl">
              <div className="text-xs font-mono text-red-400 font-bold mb-3 uppercase tracking-wider flex items-center justify-between">
                <span>MANUAL CLEANING IN EXCEL</span>
                <span className="px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-800 text-[10px]">TIME CONSUMING</span>
              </div>
              <ul className="space-y-2">
                {slide.manualPoints.map((pt, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Power Query */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-500/50 shadow-xl">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-3 uppercase tracking-wider flex items-center justify-between">
                <span>POWER QUERY AUTOMATION</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">1-CLICK REFRESH</span>
              </div>
              <ul className="space-y-2">
                {slide.powerQueryPoints.map((pt, idx) => (
                  <li key={idx} className="text-xs text-slate-100 font-medium flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {slide.quote && (
            <div className="text-center py-2 italic text-sm text-cyan-300 font-serif">
              {slide.quote}
            </div>
          )}
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Manual vs Power Query</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 12. Slide 34: Power Query 5-Stage Workflow
  // =========================================================
  if (slide.id === 34 && slide.stages) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">{slide.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
            {slide.stages.map((st, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col justify-between text-center relative">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-mono font-bold text-sm mx-auto mb-2 flex items-center justify-center">
                  {st.num}
                </div>
                <h3 className="text-xs font-bold text-white mb-1">{st.title}</h3>
                <p className="text-[11px] text-slate-300 leading-tight">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Power Query 5-Stage Pipeline</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 13. Slide 35: Where Can We Find Power Query?
  // =========================================================
  if (slide.id === 35 && slide.steps && slide.features) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">{slide.subtitle}</p>

          {/* Navigation Bar Flow */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-slate-950 border border-slate-800 mb-6 font-mono text-xs text-slate-300">
            {slide.steps.map((st, idx) => (
              <React.Fragment key={idx}>
                <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 font-bold">
                  {st}
                </div>
                {idx < slide.steps.length - 1 && <ChevronRight className="w-4 h-4 text-slate-600" />}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {slide.features.map((feat, idx) => {
              const FeatIcon = getIconComponent(feat.iconName);
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3">
                    <FeatIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{feat.title}</h3>
                  <p className="text-xs text-slate-300">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Excel Navigation</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 14. Slide 36: Power Query Editor Overview
  // =========================================================
  if (slide.id === 36 && slide.areas) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-4">{slide.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {slide.areas.map((ar, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">
                <div className="text-xs font-mono text-amber-400 font-bold mb-1">{ar.title}</div>
                <p className="text-xs text-slate-300">{ar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Editor Interface</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 15. Slide 37: Common Cleaning Tasks Grid
  // =========================================================
  if (slide.id === 37 && slide.tasks) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-4">{slide.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {slide.tasks.map((tsk, idx) => {
              const TskIcon = getIconComponent(tsk.iconName);
              return (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-800 border border-slate-700/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <TskIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white mb-0.5">{tsk.title}</h3>
                    <p className="text-[11px] text-slate-400 leading-tight">{tsk.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Everyday Tasks</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 16. Slide 38: Excel Formulas vs Power Query
  // =========================================================
  if (slide.id === 38 && slide.comparisons) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">{slide.subtitle}</p>

          <div className="overflow-hidden rounded-xl border border-slate-800 mb-6">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-mono">
                <tr>
                  <th className="p-3">Aspect</th>
                  <th className="p-3 text-slate-300">EXCEL FORMULAS</th>
                  <th className="p-3 text-amber-400">POWER QUERY</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {slide.comparisons.map((c, idx) => (
                  <tr key={idx}>
                    <td className="p-3 font-bold text-white font-mono">{c.aspect}</td>
                    <td className="p-3 text-slate-300">{c.formulas}</td>
                    <td className="p-3 text-amber-300 font-semibold">{c.pq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/50 text-center font-bold text-amber-400 text-sm">
            "{slide.headline}"
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Excel Formulas vs Power Query</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 17. Slide 39: Live Demo Preview Steps
  // =========================================================
  if (slide.id === 39 && slide.steps) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">{slide.subtitle}</p>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-6">
            {slide.steps.map((st, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-center">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono font-bold text-xs mx-auto mb-1 flex items-center justify-center">
                  {st.num}
                </div>
                <h3 className="text-xs font-bold text-white mb-0.5">{st.title}</h3>
                <p className="text-[10px] text-slate-400 leading-tight">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Live Demo Steps</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 18. Slide 40: Interactive Power Query Transformation Simulator
  // =========================================================
  if (slide.type === 'interactive-pq-sim' || slide.id === 40) {
    const stepsData = [
      {
        stepName: '1. Source (Raw Data)',
        appliedText: 'Import Raw CSV File',
        rows: [
          { id: '101', name: '  john smith  ', date: '2024/01/15', state: 'null' },
          { id: '102', name: 'MARY JOHNSON', date: '2024-01-16', state: 'null' },
          { id: '101', name: '  john smith  ', date: '2024/01/15', state: 'null' }
        ]
      },
      {
        stepName: '2. Filtered Rows',
        appliedText: 'Removed Null Rows',
        rows: [
          { id: '101', name: '  john smith  ', date: '2024/01/15', state: 'Valid' },
          { id: '102', name: 'MARY JOHNSON', date: '2024-01-16', state: 'Valid' },
          { id: '101', name: '  john smith  ', date: '2024/01/15', state: 'Valid' }
        ]
      },
      {
        stepName: '3. Trimmed Text',
        appliedText: 'Cleaned Whitespace & Casing',
        rows: [
          { id: '101', name: 'John Smith', date: '2024/01/15', state: 'Valid' },
          { id: '102', name: 'Mary Johnson', date: '2024-01-16', state: 'Valid' },
          { id: '101', name: 'John Smith', date: '2024/01/15', state: 'Valid' }
        ]
      },
      {
        stepName: '4. Removed Duplicates',
        appliedText: 'Deduplicated by ID',
        rows: [
          { id: '101', name: 'John Smith', date: '2024-01-15', state: 'Valid' },
          { id: '102', name: 'Mary Johnson', date: '2024-01-16', state: 'Valid' }
        ]
      }
    ];

    const currentPqData = stepsData[pqSimStep];

    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-4">{slide.subtitle}</p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-950 border border-slate-800 rounded-2xl p-4">
            {/* Left Applied Steps Pane (4 cols) */}
            <div className="lg:col-span-4 border-r border-slate-800 pr-4">
              <div className="text-xs font-mono text-slate-400 font-bold mb-3 uppercase flex items-center justify-between">
                <span>APPLIED STEPS PANE</span>
                <span className="text-[10px] text-amber-400">Recorded Steps</span>
              </div>

              <div className="space-y-2 mb-4">
                {stepsData.map((st, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPqSimStep(idx)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border flex justify-between items-center ${
                      pqSimStep === idx
                        ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{st.stepName}</span>
                    {pqSimStep === idx && <CheckCircle2 className="w-4 h-4 text-emerald-300" />}
                  </button>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <div className="text-[10px] text-slate-500 font-mono mb-1">ACTION PERFORMED:</div>
                <div className="font-semibold text-cyan-300">{currentPqData.appliedText}</div>
              </div>
            </div>

            {/* Right Preview Grid (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-between pl-2">
              <div>
                <div className="text-xs font-mono text-slate-400 font-bold mb-2 uppercase flex justify-between">
                  <span>LIVE DATA PREVIEW GRID</span>
                  <span className="text-emerald-400 font-bold">{currentPqData.rows.length} Clean Rows</span>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-800 mb-4">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="p-2.5">Customer ID</th>
                        <th className="p-2.5">Full Name</th>
                        <th className="p-2.5">Join Date</th>
                        <th className="p-2.5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-950">
                      {currentPqData.rows.map((r, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-900/50">
                          <td className="p-2.5 text-amber-400">{r.id}</td>
                          <td className="p-2.5 text-white">{r.name}</td>
                          <td className="p-2.5 text-cyan-300">{r.date}</td>
                          <td className="p-2.5 text-emerald-400">{r.state}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  disabled={pqSimStep === 0}
                  onClick={() => setPqSimStep(prev => prev - 1)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 disabled:opacity-40"
                >
                  Previous Step
                </button>
                <button
                  disabled={pqSimStep === stepsData.length - 1}
                  onClick={() => setPqSimStep(prev => prev + 1)}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 text-xs font-bold text-white disabled:opacity-40"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Power Query Simulator</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 19. Slide 42 & 43: Best Practices & Key Takeaways
  // =========================================================
  if (slide.id === 42 && slide.rules) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
            <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">{slide.subtitle}</p>

          <div className="space-y-3 mb-6">
            {slide.rules.map((rule, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                  ✓
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">{rule}</p>
              </div>
            ))}
          </div>

          {slide.businessExample && (
            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-slate-200">
              <span className="font-bold text-blue-400 font-mono">BUSINESS GOAL: </span>
              {slide.businessExample}
            </div>
          )}
        </div>

        <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
          <span>Golden Rules</span>
          <span className="font-mono">{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // 20. Slide 44: Grand Outro Slide (Unified Format)
  // =========================================================
  if (slide.id === 44 || slide.type === 'outro') {
    return (
      <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-6 sm:p-10 select-none overflow-hidden bg-slate-950 text-white">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-blue-600/20 pointer-events-none" />

        {/* Top brand */}
        <div className="relative z-10 w-full flex items-center justify-between">
          <InstantLogo className="h-6 sm:h-7 opacity-95" isDark={true} />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
            SESSION COMPLETE
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-2xl flex flex-col items-center my-auto py-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-4 ring-4 ring-orange-500/20">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
            From Manual Cleaning to Automated Workflows.
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          <p className="text-xs sm:text-base text-slate-300 font-medium max-w-xl mb-6 leading-relaxed">
            {slide.subtitle || 'Mastered text cleaning, lookup algorithms, dynamic arrays, and ETL data pipelines with Power Query.'}
          </p>

          {/* Next session dark box */}
          <div className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl text-left">
            <div className="text-[10px] font-mono text-amber-400 font-bold mb-1 uppercase tracking-wider">
              {slide.nextSessionTitle || 'UP NEXT: SESSION 06 · POWER QUERY DEEP DIVE'}
            </div>
            <p className="text-xs text-slate-300 font-mono">
              {slide.nextSessionSubtitle || 'Data Cleaning · Merge Queries · Append Queries · Pivot/Unpivot · Group By · Real Business Project'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 w-full text-xs text-slate-500 pt-3 border-t border-slate-900 flex justify-between">
          <span>Instant Academy • Data Analysis Training Program</span>
          <span className="font-mono">Session 05 Complete</span>
        </div>
      </div>
    );
  }

  // Default fallback for any remaining slide types
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white select-none">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-amber-400 font-semibold">{slide.topLeftTag}</span>
          <span className="text-xs font-mono text-slate-400">{slide.topRightTag}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-1 text-white">{slide.mainTitle}</h2>
        <p className="text-xs sm:text-sm text-slate-400 mb-6">{slide.subtitle}</p>
      </div>

      <div className="text-xs text-slate-500 pt-3 border-t border-slate-800 flex justify-between">
        <span>Session 05</span>
        <span className="font-mono">{slide.slideNumber}</span>
      </div>
    </div>
  );
};
