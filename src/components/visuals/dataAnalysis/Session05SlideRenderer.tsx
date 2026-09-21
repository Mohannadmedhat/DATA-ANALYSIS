import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SlideData } from '../../../types';
import { InstantLogo } from '../../InstantLogo';
import { ThankYouVisual } from './ThankYouVisual';
import { HeroCoverVisual } from './HeroCoverVisual';
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
  Globe,
  AlertTriangle,
  Target,
  Activity,
  Compass
} from 'lucide-react';

interface Session05SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session05SlideRenderer: React.FC<Session05SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // Interactive State for Bespoke Visuals
  const [selectedSampleText, setSelectedSampleText] = useState<string>('  ELEC-2045-US  ');
  const [selectedFunction, setSelectedFunction] = useState<string>('TRIM');
  
  // Lookup Simulator State
  const [selectedLookupId, setSelectedLookupId] = useState<string>('P-102');
  const [selectedLookupMethod, setSelectedLookupMethod] = useState<'VLOOKUP' | 'XLOOKUP' | 'INDEX/MATCH'>('XLOOKUP');

  // Power Query Simulator State
  const [pqSimStep, setPqSimStep] = useState<number>(0);

  // Reset states when slide changes
  useEffect(() => {
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
  // 1. Slide 01: Hero Cover Slide
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual
        sessionNumber="05"
        courseTag="Data Analysis Diploma"
        titlePrefix="ADVANCED"
        titleHighlight="FUNCTIONS & POWER QUERY"
        subtitle="Text Functions · Lookup Functions · Dynamic Arrays · Power Query Fundamentals"
        floatingBadges={[
          { icon: FileText, label: 'Text Functions & Extraction', position: 'top-left', borderColor: 'border-blue-500/50', textColor: 'text-blue-400' },
          { icon: Search, label: 'XLOOKUP & INDEX/MATCH', position: 'top-right', borderColor: 'border-cyan-500/50', textColor: 'text-cyan-400' },
          { icon: Zap, label: 'Dynamic Array Formulas', position: 'bottom-left', borderColor: 'border-emerald-500/50', textColor: 'text-emerald-400' },
          { icon: RefreshCw, label: 'Power Query ETL Pipelines', position: 'bottom-right', borderColor: 'border-purple-500/50', textColor: 'text-purple-400' }
        ]}
        statsCards={[
          { val: '6 Goals', label: 'Core Outcomes', sub: 'Text • Lookups • Power Query' },
          { val: '44 Slides', label: 'Curriculum Depth', sub: 'Formulas & Power Query' },
          { val: 'Visual Labs', label: 'Hands-on Practice', sub: 'Lookup Simulator & PQ' }
        ]}
        onStart={onNext}
      />
    );
  }

  // =========================================================
  // 2. Section Divider Slides (Unified Dark Format - Slides 3, 13, 22, 31)
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
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 select-none overflow-hidden bg-transparent text-white">
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
  // 3. Slide 02 & 43: Six Cards Grid (Clean Light Theme)
  // =========================================================
  if (slide.type === 'six-cards' && slide.cards) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1 select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {slide.cards.map((card, idx) => {
            const CardIcon = getIconComponent(card.iconName);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <CardIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // 4. Function Card (Clean Light Theme - Slides 4-10, 14-17, 19, 23-26)
  // =========================================================
  if (slide.type === 'function-card') {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left: Key Concepts (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <Info className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                  Key Concepts &amp; Syntax
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed pt-1">
                {slide.keyConcepts?.map((concept, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span className="font-medium text-slate-700">{concept}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Formula Box & Business Example (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Formula Block */}
            {slide.formulas && (
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-md flex flex-col gap-2">
                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                  EXCEL FORMULA SYNTAX
                </div>
                <div className="space-y-2 font-mono text-xs text-cyan-300">
                  {slide.formulas.map((form, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <code>{form}</code>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Business Example Block */}
            {slide.businessExample && (
              <div className="p-5 rounded-2xl bg-orange-50/80 border border-orange-200 shadow-sm flex flex-col gap-2">
                <div className="flex items-center gap-2 text-orange-700 font-bold text-xs font-mono">
                  <BarChart2 className="w-4 h-4" />
                  <span>REAL BUSINESS EXAMPLE</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {slide.businessExample}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // 5. Formula Breakdown / Recipe (Clean Light Theme - Slides 11, 20, 27)
  // =========================================================
  if (slide.type === 'formula-breakdown' && slide.recipeSteps) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {slide.recipeSteps.map((st, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
              <div>
                <div className="text-xs font-mono text-orange-600 font-bold mb-2 uppercase">{st.step}</div>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">{st.desc}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300 font-bold">
                {st.code}
              </div>
            </div>
          ))}
        </div>

        {slide.businessExample && (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
            <span className="font-bold text-orange-600 font-mono">PRACTICAL APPLICATION: </span>
            {slide.businessExample}
          </div>
        )}
      </div>
    );
  }

  // =========================================================
  // 6. Slide 12: Interactive Text Cleaning Studio (Clean Light Theme)
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
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md">
          {/* Input Selection (4 cols) */}
          <div className="lg:col-span-4 border-r border-slate-100 pr-4">
            <div className="text-xs font-mono text-slate-500 font-bold mb-3 uppercase">1. Select Input Sample</div>
            <div className="space-y-2 mb-4">
              {samples.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSampleText(s.val)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                    selectedSampleText === s.val
                      ? 'bg-orange-50 border-orange-300 text-orange-900 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 font-sans">{s.label}</div>
                  <div>"{s.val}"</div>
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-slate-500 font-bold mb-3 uppercase">2. Select Function</div>
            <div className="flex flex-wrap gap-1.5">
              {fnOptions.map((fn, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedFunction(fn)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer border ${
                    selectedFunction === fn
                      ? 'bg-orange-500 text-white border-orange-600 shadow-sm'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
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
              <div className="text-xs font-mono text-slate-500 font-bold mb-3 uppercase">3. Live Excel Transformation Result</div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-400 font-mono mb-1">RAW CELL VALUE (A2)</div>
                  <div className="font-mono text-xs text-orange-600 bg-white p-2 rounded border border-slate-200">
                    "{selectedSampleText}"
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-400 font-mono mb-1">EVALUATED FORMULA</div>
                  <div className="font-mono text-xs text-blue-600 bg-white p-2 rounded border border-slate-200 font-bold">
                    {getFormulaSnippet(selectedFunction)}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-white shadow-md">
                <div className="text-[11px] font-mono text-slate-400 font-bold mb-1">TRANSFORMED RESULT OUTPUT:</div>
                <div className="font-mono text-lg font-bold text-emerald-400 bg-slate-950 p-3 rounded-lg border border-slate-800 tracking-wide">
                  "{calculateResult(selectedSampleText, selectedFunction)}"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // 7. Slide 18: Comparison Matrix (Clean Light Theme)
  // =========================================================
  if (slide.type === 'comparison-matrix' && slide.matrixRows) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 font-mono text-slate-700">
                <th className="p-3.5 font-bold">Feature</th>
                <th className="p-3.5 text-slate-500">VLOOKUP</th>
                <th className="p-3.5 text-slate-500">HLOOKUP</th>
                <th className="p-3.5 text-orange-600 font-bold bg-orange-50">XLOOKUP ⭐</th>
                <th className="p-3.5 text-slate-700 font-bold">INDEX &amp; MATCH</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans text-slate-700">
              {slide.matrixRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold text-slate-900 font-mono">{row.feature}</td>
                  <td className="p-3.5 text-slate-600">{row.vlookup}</td>
                  <td className="p-3.5 text-slate-600">{row.hlookup}</td>
                  <td className="p-3.5 text-orange-950 font-semibold bg-orange-50/60">{row.xlookup}</td>
                  <td className="p-3.5 text-slate-800 font-semibold">{row.indexMatch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {slide.businessExample && (
          <div className="p-3.5 rounded-2xl bg-orange-50/80 border border-orange-200 text-xs text-orange-950 font-medium">
            <span className="font-bold text-orange-600 font-mono">BUSINESS ADVICE: </span>
            {slide.businessExample}
          </div>
        )}
      </div>
    );
  }

  // =========================================================
  // 8. Slide 21: Interactive Lookup Algorithm Simulator (Clean Light Theme)
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
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md">
          {/* Left Controls (4 cols) */}
          <div className="lg:col-span-4 border-r border-slate-100 pr-4">
            <div className="text-xs font-mono text-slate-500 font-bold mb-3 uppercase">1. Select Target ID</div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {products.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedLookupId(p.id)}
                  className={`p-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
                    selectedLookupId === p.id
                      ? 'bg-orange-500 border-orange-600 text-white shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {p.id}
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-slate-500 font-bold mb-3 uppercase">2. Select Lookup Method</div>
            <div className="space-y-2">
              {(['XLOOKUP', 'VLOOKUP', 'INDEX/MATCH'] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setSelectedLookupMethod(m)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border flex justify-between items-center ${
                    selectedLookupMethod === m
                      ? 'bg-orange-50 border-orange-300 text-orange-950 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{m}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Simulation Grid (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between pl-2">
            <div>
              <div className="text-xs font-mono text-slate-500 font-bold mb-2 uppercase flex items-center justify-between">
                <span>LIVE PRODUCT TABLE DATA</span>
                <span className="text-orange-600 font-bold">Matching Row #{selectedProd.rowIdx}</span>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 mb-4">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">Row #</th>
                      <th className="p-2.5 text-orange-600">Product ID (Col A)</th>
                      <th className="p-2.5 text-slate-700">Product Name (Col B)</th>
                      <th className="p-2.5 text-emerald-600">Price (Col C)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {products.map(p => {
                      const isMatched = p.id === selectedLookupId;
                      return (
                        <tr key={p.id} className={isMatched ? 'bg-orange-50/80 font-bold text-slate-900' : 'text-slate-600'}>
                          <td className="p-2.5 text-slate-400">{p.rowIdx}</td>
                          <td className={`p-2.5 ${isMatched ? 'text-orange-600' : ''}`}>{p.id}</td>
                          <td className="p-2.5">{p.name}</td>
                          <td className={`p-2.5 ${isMatched ? 'text-emerald-600' : ''}`}>{p.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Formula Execution Display */}
              <div className="p-3.5 rounded-xl bg-slate-900 text-white shadow-md">
                <div className="text-[10px] text-slate-400 font-mono mb-1">EXECUTED EXCEL FORMULA:</div>
                <div className="font-mono text-xs text-cyan-300 font-bold">
                  {selectedLookupMethod === 'XLOOKUP' && `=XLOOKUP("${selectedLookupId}", A2:A5, C2:C5) -> ${selectedProd.price}`}
                  {selectedLookupMethod === 'VLOOKUP' && `=VLOOKUP("${selectedLookupId}", A2:C5, 3, FALSE) -> ${selectedProd.price}`}
                  {selectedLookupMethod === 'INDEX/MATCH' && `=INDEX(C2:C5, MATCH("${selectedLookupId}", A2:A5, 0)) -> ${selectedProd.price}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // 9. Business Scenarios (Clean Light Theme - Slides 28, 29, 30)
  // =========================================================
  if (slide.type === 'business-scenario') {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <div className="text-xs font-mono text-orange-600 font-bold mb-3 uppercase">
              IMPLEMENTATION STEPS
            </div>
            <ul className="space-y-3">
              {slide.bulletPoints?.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-orange-50/80 border border-orange-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-orange-700 font-bold mb-2 uppercase">
                BUSINESS IMPACT &amp; OUTCOME
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-bold">
                "{slide.businessOutcome}"
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-orange-200 text-[11px] font-mono text-slate-700 font-bold mt-4">
              ⚡ Zero manual copy-pasting required on recurring reports.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // 10. Slide 32: Power Query 4 Pillars (Clean Light Theme)
  // =========================================================
  if (slide.id === 32 && slide.pillars) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slide.pillars.map((pil, idx) => {
            const PilIcon = getIconComponent(pil.iconName);
            return (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-orange-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center mb-3">
                    <PilIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{pil.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pil.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {slide.didYouKnow && (
          <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200 text-xs text-orange-950 font-medium flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono text-orange-700 font-bold block mb-0.5">DID YOU KNOW?</span>
              <p className="text-xs text-slate-700 leading-relaxed">{slide.didYouKnow}</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================
  // 11. Slide 33: Why Use Power Query? (Manual vs PQ Table - Clean Light Theme)
  // =========================================================
  if (slide.id === 33 && slide.manualPoints && slide.powerQueryPoints) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left: Manual Cleaning */}
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 shadow-sm">
            <div className="text-xs font-mono text-rose-700 font-bold mb-3 uppercase tracking-wider flex items-center justify-between">
              <span>MANUAL CLEANING IN EXCEL</span>
              <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-700 text-[10px]">TIME CONSUMING</span>
            </div>
            <ul className="space-y-2">
              {slide.manualPoints.map((pt, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Power Query */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 shadow-sm">
            <div className="text-xs font-mono text-emerald-700 font-bold mb-3 uppercase tracking-wider flex items-center justify-between">
              <span>POWER QUERY AUTOMATION</span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px]">1-CLICK REFRESH</span>
            </div>
            <ul className="space-y-2">
              {slide.powerQueryPoints.map((pt, idx) => (
                <li key={idx} className="text-xs text-slate-800 font-medium flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {slide.quote && (
          <div className="p-3.5 rounded-2xl bg-slate-900 text-cyan-300 text-center italic text-sm font-serif shadow-md">
            {slide.quote}
          </div>
        )}
      </div>
    );
  }

  // =========================================================
  // 12. Slide 34: Power Query 5-Stage Workflow (Clean Light Theme)
  // =========================================================
  if (slide.id === 34 && slide.stages) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {slide.stages.map((st, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-mono font-bold text-xs mx-auto mb-2 flex items-center justify-center shadow-sm">
                {st.num}
              </div>
              <h3 className="text-xs font-bold text-slate-900 mb-1">{st.title}</h3>
              <p className="text-[11px] text-slate-600 leading-tight">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // =========================================================
  // 13. Slide 35: Where Can We Find Power Query? (Clean Light Theme)
  // =========================================================
  if (slide.id === 35 && slide.steps && slide.features) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        {/* Navigation Bar Flow */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-slate-100 border border-slate-200 font-mono text-xs text-slate-700">
          {slide.steps.map((st, idx) => (
            <React.Fragment key={idx}>
              <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-orange-600 font-bold shadow-xs">
                {st}
              </div>
              {idx < slide.steps.length - 1 && <ChevronRight className="w-4 h-4 text-slate-400" />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {slide.features.map((feat, idx) => {
            const FeatIcon = getIconComponent(feat.iconName);
            return (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center mb-3">
                  <FeatIcon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // 14. Slide 36: Power Query Editor Overview (Clean Light Theme)
  // =========================================================
  if (slide.id === 36 && slide.areas) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {slide.areas.map((ar, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <div className="text-xs font-mono text-orange-600 font-bold mb-1">{ar.title}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{ar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // =========================================================
  // 15. Slide 37: Common Cleaning Tasks Grid (Clean Light Theme)
  // =========================================================
  if (slide.id === 37 && slide.tasks) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {slide.tasks.map((tsk, idx) => {
            const TskIcon = getIconComponent(tsk.iconName);
            return (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-orange-300 transition-all flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <TskIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-0.5">{tsk.title}</h3>
                  <p className="text-[11px] text-slate-600 leading-tight">{tsk.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // 16. Slide 38: Excel Formulas vs Power Query (Clean Light Theme)
  // =========================================================
  if (slide.id === 38 && slide.comparisons) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-700 border-b border-slate-200 font-mono">
              <tr>
                <th className="p-3.5">Aspect</th>
                <th className="p-3.5 text-slate-600">EXCEL FORMULAS</th>
                <th className="p-3.5 text-orange-600 font-bold">POWER QUERY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {slide.comparisons.map((c, idx) => (
                <tr key={idx}>
                  <td className="p-3.5 font-bold text-slate-900 font-mono">{c.aspect}</td>
                  <td className="p-3.5 text-slate-600">{c.formulas}</td>
                  <td className="p-3.5 text-orange-950 font-semibold">{c.pq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-2xl bg-orange-500 text-white font-bold text-center text-sm shadow-md">
          "{slide.headline}"
        </div>
      </div>
    );
  }

  // =========================================================
  // 17. Slide 39: Live Demo Preview Steps (Clean Light Theme)
  // =========================================================
  if (slide.id === 39 && slide.steps) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
          {slide.steps.map((st, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm text-center">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white font-mono font-bold text-xs mx-auto mb-1 flex items-center justify-center">
                {st.num}
              </div>
              <h3 className="text-xs font-bold text-slate-900 mb-0.5">{st.title}</h3>
              <p className="text-[10px] text-slate-600 leading-tight">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // =========================================================
  // 18. Slide 40: Interactive Power Query Simulator (Clean Light Theme)
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
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md">
          {/* Left Applied Steps Pane (4 cols) */}
          <div className="lg:col-span-4 border-r border-slate-100 pr-4">
            <div className="text-xs font-mono text-slate-500 font-bold mb-3 uppercase flex items-center justify-between">
              <span>APPLIED STEPS PANE</span>
            </div>

            <div className="space-y-2 mb-4">
              {stepsData.map((st, idx) => (
                <button
                  key={idx}
                  onClick={() => setPqSimStep(idx)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border flex justify-between items-center ${
                    pqSimStep === idx
                      ? 'bg-orange-500 text-white border-orange-600 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{st.stepName}</span>
                </button>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              <div className="text-[10px] text-slate-400 font-mono mb-1">ACTION PERFORMED:</div>
              <div className="font-semibold text-orange-600">{currentPqData.appliedText}</div>
            </div>
          </div>

          {/* Right Preview Grid (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between pl-2">
            <div>
              <div className="text-xs font-mono text-slate-500 font-bold mb-2 uppercase flex justify-between">
                <span>LIVE DATA PREVIEW GRID</span>
                <span className="text-emerald-600 font-bold">{currentPqData.rows.length} Clean Rows</span>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 mb-4">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="p-2.5">Customer ID</th>
                      <th className="p-2.5">Full Name</th>
                      <th className="p-2.5">Join Date</th>
                      <th className="p-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {currentPqData.rows.map((r, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50">
                        <td className="p-2.5 text-orange-600 font-bold">{r.id}</td>
                        <td className="p-2.5 text-slate-800">{r.name}</td>
                        <td className="p-2.5 text-blue-600">{r.date}</td>
                        <td className="p-2.5 text-emerald-600">{r.state}</td>
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
                className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700 disabled:opacity-40 cursor-pointer"
              >
                Previous Step
              </button>
              <button
                disabled={pqSimStep === stepsData.length - 1}
                onClick={() => setPqSimStep(prev => prev + 1)}
                className="px-3 py-1.5 rounded-lg bg-orange-500 text-xs font-bold text-white disabled:opacity-40 cursor-pointer shadow-sm"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // 19. Slide 42 & 43: Best Practices & Key Takeaways (Clean Light Theme)
  // =========================================================
  if (slide.id === 42 && slide.rules) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="space-y-3">
          {slide.rules.map((rule, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // =========================================================
  // 20. Slide 44: Grand Outro Slide (Exact Reference Match)
  // =========================================================
  if (slide.id === 44 || slide.type === 'outro') {
    return (
      <ThankYouVisual 
        sessionNumber="05"
        nextSessionNote="Next Session: Pivot Tables, Charts &amp; Power Query — Pivot/Unpivot, Slicers &amp; Timelines"
        nextSessionButtonText="Open Session 06: Pivot Tables &amp; Power Query"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={onSwitchSession ? () => onSwitchSession('session-06') : undefined}
      />
    );
  }

  // Default fallback for any remaining slide types
  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center p-4">
      <div className="p-6 bg-white rounded-2xl border border-slate-200 text-slate-800 shadow-sm">
        <h3 className="text-lg font-bold">{slide.mainTitle}</h3>
        <p className="text-sm text-slate-600 mt-2">{slide.subtitle}</p>
      </div>
    </div>
  );
};
