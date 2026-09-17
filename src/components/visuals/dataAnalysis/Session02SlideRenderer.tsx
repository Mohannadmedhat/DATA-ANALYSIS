import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { InstantLogo } from '../../InstantLogo';
import { 
  Compass, 
  Layers, 
  Calculator, 
  Anchor, 
  Table as TableIcon, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Building, 
  Hash, 
  Type, 
  Calendar, 
  DollarSign, 
  Percent, 
  ToggleLeft, 
  MousePointer, 
  Snowflake, 
  CheckCircle2, 
  AlertTriangle, 
  FileSpreadsheet,
  HelpCircle,
  Lightbulb,
  Pin,
  Move,
  Scissors,
  Check,
  Rocket,
  Play,
  RotateCcw,
  Sparkles,
  Search,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface Session02SlideRendererProps {
  slide: SlideData;
  isRTL: boolean;
  onNext?: () => void;
}

export const Session02SlideRenderer: React.FC<Session02SlideRendererProps> = ({
  slide,
  isRTL: _isRTL,
  onNext
}) => {
  const isRTL = false;
  // Interactive States for bespoking specific slides
  const [activeGridCell, setActiveGridCell] = useState<{ col: string; row: number }>({ col: 'C', row: 2 });
  const [selectedDataType, setSelectedDataType] = useState<number>(0);
  const [selectedOpIdx, setSelectedOpIdx] = useState<number>(0);
  const [pemdasStep, setPemdasStep] = useState<number>(1);
  const [f4CycleIndex, setF4CycleIndex] = useState<number>(1); // 0: A2*D5, 1: A2*$D$5, 2: A2*D$5, 3: A2*$D5
  const [activeErrorIdx, setActiveErrorIdx] = useState<number>(0);
  const [errorFixed, setErrorFixed] = useState<boolean>(false);
  const [ifScore, setIfScore] = useState<number>(75);
  const [roundNumber, setRoundNumber] = useState<number>(4.567);
  const [textTestInput, setTextTestInput] = useState<string>('Cairo');
  const [activeExerciseIdx, setActiveExerciseIdx] = useState<number>(0);

  // Slide 01: Hero Cover (Identical majestic layout & aesthetics matching Session 1 benchmark)
  if (slide.id === 1) {
    const stats = [
      { 
        val: isRTL ? '6 محاور' : '6 Pillars', 
        label: isRTL ? 'المسار التدريبي' : 'Curriculum Roadmap', 
        sub: isRTL ? 'الواجهة • البنية • المعادلات' : 'Interface • Structure • Formulas' 
      },
      { 
        val: isRTL ? '29 شريحة' : '29 Slides', 
        label: isRTL ? 'المحاور التطبيقية' : 'Applied Core Modules', 
        sub: isRTL ? 'تمارين تفاعلية وحالات واقعية' : 'Real-world practice & labs' 
      },
      { 
        val: isRTL ? '4 حزم رئيسية' : '4 Core Groups', 
        label: isRTL ? 'منظومة الدوال' : 'Function Tech Stack', 
        sub: isRTL ? 'إحصائية • منطقية • نصوص • تقريب' : 'Stats • Logic • Text • Math' 
      },
    ];

    const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 text-center bg-transparent overflow-hidden">
        {/* Floating Constellation Nodes Animation — Exact Session 01 Aesthetic */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          <motion.div 
            animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-[6%] sm:left-[12%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-blue-500/50 text-blue-400 text-xs backdrop-blur-md shadow-xl"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Excel Ribbon & Grid</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 right-[6%] sm:right-[12%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-cyan-500/50 text-cyan-400 text-xs backdrop-blur-md shadow-xl"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Formulas & Calculations</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-4 left-[4%] sm:left-[10%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/50 text-emerald-400 text-xs backdrop-blur-md shadow-xl"
          >
            <Pin className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-emerald-400">Cell References ($)</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-4 right-[4%] sm:right-[10%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-purple-500/50 text-purple-400 text-xs backdrop-blur-md shadow-xl"
          >
            <TableIcon className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-semibold text-purple-400">Core Functions & Logic</span>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl sm:max-w-3xl flex flex-col items-center my-auto"
        >
          <div className="mb-4 sm:mb-5">
            <InstantLogo isDark={true} className="h-6 sm:h-7" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold mb-3 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>{isRTL ? 'دبلومة تحليل البيانات • المحطة 02' : 'Data Analysis Diploma • Session 02'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-3">
            {isRTL ? (
              <>
                أساسيات <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">برنامج إكسيل</span>
              </>
            ) : (
              <>
                EXCEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">BASICS</span>
              </>
            )}
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-3 shadow-sm" />

          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-2xl mb-6 leading-relaxed">
            {isRTL 
              ? 'الواجهة، المعادلات، والدوال الأساسية لتأهيل محلل البيانات' 
              : 'Interface, Formulas & Core Functions for Modern Data Analysts'}
          </p>

          {/* Quick Curriculum Highlights — Exact 3 Cards matching Session 01 */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 w-full max-w-2xl mb-6 items-stretch">
            {stats.map((s, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-xl p-3 sm:p-4 backdrop-blur-md transition-all shadow-lg flex flex-col justify-center items-center text-center"
              >
                <div className="text-lg sm:text-2xl font-black text-cyan-400 mb-1">{s.val}</div>
                <div className="text-xs sm:text-sm font-bold text-slate-100 mb-0.5">{s.label}</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {onNext && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
            >
              <span>{isRTL ? 'ابدأ الجلسة الثانية' : 'Start Session 02'}</span>
              <ArrowIcon className="w-4 h-4" />
            </motion.button>
          )}
        </motion.div>
      </div>
    );
  }

  // Slide 02: Session Objectives (6 Cards)
  if (slide.id === 2) {
    const icons = [Compass, Layers, Calculator, Anchor, TableIcon, BarChart3];
    return (
      <div className="w-full h-full flex flex-col justify-center gap-3 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {slide.cards?.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-orange-500/40 transition-all flex flex-col items-start gap-2.5"
              >
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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

  // Slide 03: What is Microsoft Excel?
  if (slide.id === 3) {
    const useCaseIcons = [TrendingUp, Users, Briefcase, Building];
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch p-1">
        {/* Left Card: Overview & Why Analysts use it */}
        <div className="lg:col-span-6 p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg mb-3 shadow-md">
              X
            </div>
            <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 mb-4 leading-relaxed">
              {isRTL 
                ? 'تطبيق الجداول الإلكترونية المخصص لتنظيم وحساب وتحليل البيانات في صفوف وأعمدة.' 
                : 'A spreadsheet application for organizing, calculating, and analyzing data in rows and columns.'}
            </p>
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-2.5">
              {slide.definitionBox?.label || (isRTL ? 'لماذا يعتمد عليه محلل البيانات؟' : 'Why Data Analysts use it')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {slide.definitionBox?.bullets?.map((bullet: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Real-World Use Cases */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 px-1">
            {isRTL ? 'حالات الاستخدام في عالم الأعمال (Use Cases)' : 'Real-World Use Cases'}
          </h4>
          <div className="flex-1 flex flex-col justify-between gap-2">
            {slide.cards?.map((card, idx) => {
              const Icon = useCaseIcons[idx % useCaseIcons.length];
              return (
                <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-sm hover:border-blue-400/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{card.title}</h5>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Slide 04: Workbook vs Worksheet
  if (slide.id === 4) {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch p-1">
        {/* Left Container: Visual Binder */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-blue-50/50 dark:bg-slate-900/90 border-2 border-blue-200 dark:border-blue-900/60 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {isRTL ? 'كتاب العمل (Workbook)' : 'Workbook Structure'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isRTL ? 'الملف الكامل (.xlsx) — حاوية تحتوي على ورقة أو أكثر' : 'The entire Excel file (.xlsx) — a container for one or more worksheets.'}
              </p>
            </div>
          </div>

          {/* 3 Worksheets Inside */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { name: isRTL ? 'المبيعات' : 'Sales', tab: 'Sheet 1', color: 'border-blue-500' },
              { name: isRTL ? 'الموظفين' : 'Employees', tab: 'Sheet 2', color: 'border-emerald-500' },
              { name: isRTL ? 'الملخص' : 'Summary', tab: 'Sheet 3', color: 'border-orange-500' }
            ].map((sheet, idx) => (
              <div key={idx} className={`p-3.5 rounded-xl bg-white dark:bg-slate-800 border-2 ${sheet.color} shadow-md text-center flex flex-col items-center justify-center gap-1`}>
                <TableIcon className="w-5 h-5 text-blue-500" />
                <span className="font-bold text-xs text-slate-900 dark:text-white">{sheet.name}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">Worksheet</span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">{sheet.tab}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Explanations */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
          {slide.cards?.map((card, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1">
              <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 font-mono uppercase">{card.badge}</span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{card.title}</h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Slide 05: Rows, Columns & Cells (Interactive Grid!)
  if (slide.id === 5) {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch p-1">
        {/* Left: Interactive Excel Grid Simulator */}
        <div className="lg:col-span-6 p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800 text-xs font-mono">
            <span className="text-slate-500">
              {isRTL ? 'جرب انقر على أي خلية:' : 'Click any cell to test:'}
            </span>
            <span className="px-2.5 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 font-bold border border-orange-300">
              {activeGridCell.col}{activeGridCell.row}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center text-xs font-mono select-none">
              <thead>
                <tr>
                  <th className="w-8 p-1.5 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
                  {['A', 'B', 'C', 'D', 'E'].map(col => {
                    const isColActive = activeGridCell.col === col;
                    return (
                      <th 
                        key={col} 
                        className={`p-1.5 font-bold border transition-colors ${
                          isColActive 
                            ? 'bg-orange-600 text-white border-orange-700' 
                            : 'bg-blue-900 text-white border-blue-950'
                        }`}
                      >
                        {col}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map(row => {
                  const isRowActive = activeGridCell.row === row;
                  return (
                    <tr key={row}>
                      <td className={`font-bold border p-1.5 transition-colors ${
                        isRowActive 
                          ? 'bg-orange-600 text-white border-orange-700' 
                          : 'bg-blue-900 text-white border-blue-950'
                      }`}>
                        {row}
                      </td>
                      {['A', 'B', 'C', 'D', 'E'].map(col => {
                        const isTarget = activeGridCell.col === col && activeGridCell.row === row;
                        const isInRange = ['B', 'C'].includes(col) && [2, 3, 4].includes(row);
                        return (
                          <td 
                            key={col} 
                            onClick={() => setActiveGridCell({ col, row })}
                            className={`border p-2 cursor-pointer transition-all ${
                              isTarget 
                                ? 'bg-amber-100 dark:bg-amber-950/80 border-2 border-orange-500 font-black text-orange-600 dark:text-orange-400 shadow-sm scale-95' 
                                : isInRange 
                                  ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900 hover:bg-blue-100' 
                                  : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            {isTarget ? `${col}${row}` : ''}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between text-[11px] font-semibold pt-3 border-t border-slate-100 dark:border-slate-800">
            <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
              <span className="w-2.5 h-2.5 rounded border border-orange-500 bg-amber-200 inline-block" />
              Active Cell ({activeGridCell.col}{activeGridCell.row})
            </span>
            <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
              <span className="w-2.5 h-2.5 rounded border border-blue-300 bg-blue-100 inline-block" />
              Range (B2:C4)
            </span>
          </div>
        </div>

        {/* Right: Definitions */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-2.5">
          {slide.cards?.map((card, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-0.5">{card.title}</h4>
              <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Slide 06: Data Types in Excel
  if (slide.id === 6) {
    const typeIcons = [Hash, Type, Calendar, DollarSign, Percent, ToggleLeft];
    return (
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-1">
        {slide.cards?.map((card, idx) => {
          const Icon = typeIcons[idx % typeIcons.length];
          const isSelected = selectedDataType === idx;
          return (
            <div 
              key={idx} 
              onClick={() => setSelectedDataType(idx)}
              className={`p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border shadow-sm flex flex-col justify-between cursor-pointer transition-all ${
                isSelected ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{card.title}</h4>
              </div>
              <div className="w-full py-2 px-2.5 rounded-lg bg-slate-950 text-slate-100 font-mono text-center text-xs font-bold mb-2 border border-slate-800 shadow-inner">
                {card.example}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{card.description}</p>
            </div>
          );
        })}
      </div>
    );
  }

  // Slide 07: Basic Navigation & Shortcuts
  if (slide.id === 7) {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch p-1">
        {/* Shortcuts Column */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-2">
          {slide.shortcuts?.map((sc: any, idx: number) => (
            <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-3 hover:border-orange-500/40 transition-colors">
              <span className="px-2.5 py-1 rounded-lg bg-slate-950 text-orange-400 font-mono text-xs font-bold border border-slate-800 shadow-sm shrink-0">
                {sc.keys}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-300 font-medium text-end">
                {sc.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Features Column */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          {slide.cards?.map((card, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600/15 text-blue-500 flex items-center justify-center">
                  {idx === 0 ? <MousePointer className="w-3.5 h-3.5" /> : <Snowflake className="w-3.5 h-3.5" />}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{card.title}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Slide 08 & Slide 28: Best Practices & Summary (Dark Theme 5 or 6 Cards)
  if (slide.id === 8 || slide.id === 28) {
    const isFive = slide.id === 8;
    return (
      <div className="w-full h-full flex flex-col justify-center p-1">
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${isFive ? 'lg:grid-cols-5' : 'lg:grid-cols-3'} gap-3`}>
          {slide.cards?.map((card, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 shadow-lg flex flex-col items-start gap-2.5 hover:border-orange-500/50 transition-colors">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{card.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Slide 09: Introduction to Formulas
  if (slide.id === 9) {
    return (
      <div className="w-full h-full flex flex-col justify-between gap-3.5 p-1">
        <div className="p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono font-black text-lg shadow-md shrink-0">
            =
          </div>
          <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
            {slide.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1">
          <div className="lg:col-span-6 p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-3 py-1.5 rounded-xl bg-slate-950 text-white font-mono font-bold text-xs border border-slate-800 shadow-inner">
                  =A1+A2
                </span>
                <span className="text-xs text-orange-600 dark:text-orange-400 font-semibold">
                  {slide.formulaRuleNote}
                </span>
              </div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 mb-2">
                {isRTL ? 'قواعد كتابة المعادلات' : 'Rules of a Formula'}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {slide.rules?.map((rule: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 mb-2">
                {isRTL ? 'شريط المعادلات (Formula Bar)' : 'Formula Bar'}
              </h4>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 font-mono text-xs shadow-inner mb-3">
                <span className="text-slate-400 font-serif italic text-sm">fx</span>
                <span className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
                <span className="text-blue-600 dark:text-blue-400 font-bold">=A1+A2</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {slide.formulaBarInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 10: Arithmetic Operators (Interactive Calculator)
  if (slide.id === 10) {
    const num1 = 50;
    const num2 = 10;
    const calcResults = [
      num1 + num2, // +
      num1 - num2, // -
      num1 * num2, // *
      num1 / num2, // /
      Math.pow(5, 2), // ^ (using 5^2)
      (num1 + num2) * 2 // ()
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between gap-3.5 p-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 flex-1 items-center">
          {slide.cards?.map((op: any, idx: number) => {
            const isSelected = selectedOpIdx === idx;
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedOpIdx(idx)}
                className={`p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border shadow-sm flex flex-col items-center text-center gap-2 cursor-pointer transition-all ${
                  isSelected ? 'border-orange-500 ring-2 ring-orange-500/20 scale-105' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-full font-black text-lg flex items-center justify-center shadow-md ${
                  isSelected ? 'bg-orange-500 text-white' : 'bg-blue-600 text-white'
                }`}>
                  {op.symbol}
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{op.name}</span>
                <span className="w-full py-1 rounded bg-slate-950 text-white font-mono text-[11px] font-bold border border-slate-800">
                  {op.formula}
                </span>
              </div>
            );
          })}
        </div>
        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-700 dark:text-orange-300 text-xs text-center font-medium">
          {slide.footerNote}
        </div>
      </div>
    );
  }

  // Slide 11: Order of Operations (PEMDAS)
  if (slide.id === 11) {
    return (
      <div className="w-full h-full flex flex-col justify-between gap-4 p-1">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {slide.pemdasSteps?.map((step: any, idx: number) => (
            <div key={idx} className="p-3 rounded-xl bg-blue-600 text-white shadow-md flex flex-col items-center text-center gap-0.5">
              <span className="text-xl sm:text-2xl font-black font-mono">{step.letter}</span>
              <span className="text-[10px] font-medium opacity-90">{step.name}</span>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-950 text-white font-mono text-base sm:text-lg font-black border border-slate-800 text-center shadow-inner">
            {slide.exampleFormula}
          </div>
          <div className="flex-1 space-y-1.5 text-xs font-mono text-slate-700 dark:text-slate-300">
            {slide.exampleSteps?.map((st: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>{st}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Slide 12: Relative Reference
  if (slide.id === 12) {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch p-1">
        <div className="lg:col-span-6 p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <table className="w-full border-collapse text-center text-xs font-mono">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-1.5 border border-blue-950">A</th>
                <th className="p-1.5 border border-blue-950">B</th>
                <th className="p-1.5 border border-blue-950">C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-slate-200 dark:border-slate-800">10</td>
                <td className="p-2 border border-slate-200 dark:border-slate-800">20</td>
                <td className="p-2 border border-slate-200 dark:border-slate-800 text-orange-600 dark:text-orange-400 font-bold">=A1+B1 → 30</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200 dark:border-slate-800">15</td>
                <td className="p-2 border border-slate-200 dark:border-slate-800">25</td>
                <td className="p-2 border border-slate-200 dark:border-slate-800 text-orange-600 dark:text-orange-400 font-bold">=A2+B2 → 40</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200 dark:border-slate-800">5</td>
                <td className="p-2 border border-slate-200 dark:border-slate-800">35</td>
                <td className="p-2 border border-slate-200 dark:border-slate-800 text-orange-600 dark:text-orange-400 font-bold">=A3+B3 → 40</td>
              </tr>
            </tbody>
          </table>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-[11px] text-slate-600 dark:text-slate-400 mt-2">
            {slide.scenarioNote}
          </div>
        </div>

        <div className="lg:col-span-6 p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center gap-3">
          <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-orange-600 dark:text-orange-400">
            {isRTL ? 'لماذا تهم محلل البيانات؟' : 'Why it matters for analysts'}
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
            {slide.reasons?.map((reason: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Slide 13: Absolute Reference (Interactive F4 Toggler)
  if (slide.id === 13) {
    const f4Variations = [
      { syntax: '=A2*D5', label: 'Relative (No Locks)' },
      { syntax: '=A2*$D$5', label: 'Absolute (Locked Both Column & Row)' },
      { syntax: '=A2*D$5', label: 'Mixed (Row Locked)' },
      { syntax: '=A2*$D5', label: 'Mixed (Column Locked)' }
    ];
    const currentVar = f4Variations[f4CycleIndex % f4Variations.length];

    return (
      <div className="w-full h-full flex flex-col justify-between gap-3.5 p-1">
        <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md">
              <Pin className="w-3.5 h-3.5" />
            </div>
            <span className="font-mono text-sm font-bold text-orange-400">{currentVar.syntax}</span>
            <span className="text-[10px] text-slate-400 font-mono">({currentVar.label})</span>
          </div>
          <button
            onClick={() => setF4CycleIndex(prev => prev + 1)}
            className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            Press F4 ⟳
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1">
          <div className="lg:col-span-7 p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto">
            <table className="w-full border-collapse text-[11px] font-mono text-center">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-1.5 border border-blue-950">Item</th>
                  <th className="p-1.5 border border-blue-950">Price</th>
                  <th className="p-1.5 border border-blue-950">Tax Rate</th>
                  <th className="p-1.5 border border-blue-950">Tax</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800">Laptop</td>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800">20,000</td>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800 text-slate-400">-</td>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800 text-orange-500 font-bold">=B2*$D$5</td>
                </tr>
                <tr>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800">Mouse</td>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800">450</td>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800 text-slate-400">-</td>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800 text-orange-500 font-bold">=B3*$D$5</td>
                </tr>
                <tr>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800">Monitor</td>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800">3,200</td>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800 text-slate-400">-</td>
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800 text-orange-500 font-bold">=B4*$D$5</td>
                </tr>
                <tr className="bg-amber-50 dark:bg-amber-950/20 font-bold">
                  <td className="p-1.5 border border-slate-200 dark:border-slate-800 text-end" colSpan={2}>Rate →</td>
                  <td className="p-1.5 border-2 border-orange-500 text-orange-600 dark:text-orange-400" colSpan={2}>14% (D5)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-5 p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 mb-1.5">Why it matters</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                {slide.whyItMatters}
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-medium">
              💡 {slide.tip}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 14: Mixed Reference
  if (slide.id === 14) {
    return (
      <div className="w-full h-full flex flex-col justify-between gap-3.5 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 flex-1">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <span className="w-fit px-3.5 py-1.5 rounded-xl bg-slate-950 text-white font-mono text-base font-bold border border-slate-800 shadow-inner mb-2">
              {slide.colLocked?.syntax}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">{slide.colLocked?.desc}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{slide.colLocked?.detail}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <span className="w-fit px-3.5 py-1.5 rounded-xl bg-slate-950 text-white font-mono text-base font-bold border border-slate-800 shadow-inner mb-2">
              {slide.rowLocked?.syntax}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">{slide.rowLocked?.desc}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{slide.rowLocked?.detail}</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800 text-xs leading-relaxed">
          <span className="font-bold text-orange-400">Data Analysis Scenario: Multiplication Table: </span>
          <span className="text-slate-300">{slide.scenario}</span>
        </div>
      </div>
    );
  }

  // Slide 15: Reference Types at a Glance
  if (slide.id === 15) {
    return (
      <div className="w-full h-full flex flex-col justify-between gap-3 p-1">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto flex-1 flex flex-col justify-center">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-blue-900 text-white font-mono text-xs">
                <th className="p-2.5 border border-blue-950">Type</th>
                <th className="p-2.5 border border-blue-950">Example</th>
                <th className="p-2.5 border border-blue-950">Column</th>
                <th className="p-2.5 border border-blue-950">Row</th>
                <th className="p-2.5 border border-blue-950">Best Used For</th>
              </tr>
            </thead>
            <tbody>
              {slide.matrix?.map((row: any, idx: number) => (
                <tr key={idx} className="border-b border-slate-200 dark:border-slate-800 text-center font-mono">
                  <td className="p-2.5 font-bold text-slate-900 dark:text-white">{row.type}</td>
                  <td className="p-2.5 text-orange-500 font-bold">{row.example}</td>
                  <td className="p-2.5 text-slate-600 dark:text-slate-300">{row.col}</td>
                  <td className="p-2.5 text-slate-600 dark:text-slate-300">{row.row}</td>
                  <td className="p-2.5 font-sans text-xs text-start text-slate-700 dark:text-slate-300">{row.bestUsedFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-medium flex items-center gap-2">
          <HelpCircle className="w-4 h-4 shrink-0 text-orange-500" />
          <span>{slide.keyTakeaway}</span>
        </div>
      </div>
    );
  }

  // Slide 16: Copying Formulas
  if (slide.id === 16) {
    return (
      <div className="w-full h-full flex flex-col justify-between gap-4 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 flex-1 items-center">
          {slide.cards?.map((c, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-start gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                {idx === 0 ? <Move className="w-4 h-4" /> : idx === 1 ? <TableIcon className="w-4 h-4" /> : <Scissors className="w-4 h-4" />}
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{c.title}</h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
        <div className="p-3.5 rounded-xl bg-slate-950 text-white font-mono text-xs text-center border border-slate-800 shadow-inner">
          {slide.illustrationText}
        </div>
      </div>
    );
  }

  // Slide 17: Common Formula Errors (Interactive Troubleshooter!)
  if (slide.id === 17) {
    const currentErr = slide.errors?.[activeErrorIdx];
    return (
      <div className="w-full h-full flex flex-col justify-between gap-3 p-1">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {slide.errors?.map((err: any, idx: number) => {
            const isSelected = activeErrorIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => { setActiveErrorIdx(idx); setErrorFixed(false); }}
                className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col gap-1 ${
                  isSelected 
                    ? 'bg-orange-500/15 border-orange-500 text-orange-600 dark:text-orange-400 shadow-sm ring-2 ring-orange-500/20' 
                    : 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span className="font-mono font-black text-sm">{err.code}</span>
                <span className="text-[10px] truncate opacity-80">{err.reason}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspector Card */}
        {currentErr && (
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-600 dark:text-rose-400 font-mono font-black text-sm border border-rose-500/40">
                  {currentErr.code}
                </span>
                <span className="text-xs text-slate-500 font-semibold">{currentErr.reason}</span>
              </div>
              
              <div className="p-3 rounded-xl bg-slate-950 text-white font-mono text-xs flex items-center justify-between">
                <span>{isRTL ? 'المعادلة المسببة للخطأ:' : 'Faulty Formula:'}</span>
                <span className="text-rose-400 font-bold">{currentErr.example}</span>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs">
                <span className="font-bold">✓ {isRTL ? 'طريقة الحل والإصلاح (Fix):' : 'Recommended Fix:'} </span>
                <span>{currentErr.fix}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>{isRTL ? 'نصيحة: افحص دائماً نوع البيانات في الخلايا المشار إليها' : 'Tip: Always inspect referenced data types'}</span>
              <span className="font-mono text-orange-500">#ErrorDiagnostic</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Slide 18: Formula Best Practices (Dark 4 Cards)
  if (slide.id === 18) {
    return (
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-1 items-center">
        {slide.cards?.map((c, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-white shadow-md flex flex-col gap-2">
            <div className="w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Check className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white">{c.title}</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    );
  }

  // Slide 19: SUM, AVERAGE, MIN & MAX
  if (slide.id === 19) {
    return (
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-1 items-center">
        {slide.cards?.map((fn: any, idx: number) => (
          <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-2.5 text-center">
            <div className="w-9 h-9 mx-auto rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
              <TableIcon className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{fn.name}</h4>
            <div className="py-1.5 px-2 rounded-lg bg-slate-950 text-white font-mono text-[11px] font-bold border border-slate-800">
              {fn.syntax}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">{fn.desc}</p>
            <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[10px] text-orange-600 dark:text-orange-400 font-medium">
              Use case: {fn.useCase}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Slide 20: COUNT, COUNTA & COUNTBLANK
  if (slide.id === 20) {
    return (
      <div className="w-full h-full flex flex-col justify-between gap-3 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 items-center">
          {slide.cards?.map((fn: any, idx: number) => (
            <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 text-center">
              <div className="w-9 h-9 mx-auto rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                <Calculator className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{fn.name}</h4>
              <div className="py-1.5 px-2 rounded-lg bg-slate-950 text-white font-mono text-[11px] font-bold border border-slate-800">
                {fn.syntax}
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">{fn.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs leading-relaxed flex items-start gap-2">
          <Lightbulb className="w-4 h-4 shrink-0 text-orange-500 mt-0.5" />
          <span>{slide.useCaseNote}</span>
        </div>
      </div>
    );
  }

  // Slide 21: The IF Function (Interactive Condition Tester!)
  if (slide.id === 21) {
    const isPassed = ifScore >= 60;
    return (
      <div className="w-full h-full flex flex-col justify-between gap-3 p-1">
        <div className="p-3 rounded-xl bg-slate-950 text-white font-mono text-center text-xs sm:text-sm font-bold border border-slate-800 shadow-inner">
          {slide.syntax}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1">
          {/* Interactive Tester */}
          <div className="lg:col-span-6 p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between items-center gap-3">
            <div className="w-full flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
              <span>{isRTL ? 'قيمة الخلية B2:' : 'Cell B2 Value:'}</span>
              <span className="font-mono text-base text-blue-600 dark:text-blue-400 font-black">{ifScore}</span>
            </div>

            <input 
              type="range" 
              min="0" 
              max="100" 
              value={ifScore} 
              onChange={(e) => setIfScore(Number(e.target.value))}
              className="w-full accent-orange-500 cursor-pointer"
            />

            <div className="px-4 py-2 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs shadow-md">
              Condition: B2 &gt;= 60 → {isPassed ? 'TRUE' : 'FALSE'}
            </div>

            <div className="flex items-center gap-4">
              <div className={`px-4 py-1.5 rounded-lg font-mono font-bold text-xs transition-all ${
                isPassed 
                  ? 'bg-emerald-500 text-white shadow-md scale-105 ring-2 ring-emerald-500/40' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 opacity-40'
              }`}>
                TRUE → &quot;Pass&quot;
              </div>
              <div className={`px-4 py-1.5 rounded-lg font-mono font-bold text-xs transition-all ${
                !isPassed 
                  ? 'bg-rose-500 text-white shadow-md scale-105 ring-2 ring-rose-500/40' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 opacity-40'
              }`}>
                FALSE → &quot;Fail&quot;
              </div>
            </div>
          </div>

          {/* Business Examples */}
          <div className="lg:col-span-6 p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 mb-1.5">Business Examples</h4>
            <div className="space-y-2">
              {slide.examples?.map((ex: any, idx: number) => (
                <div key={idx} className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col gap-0.5">
                  <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">{ex.title}</span>
                  <span className="text-xs font-mono text-orange-500 font-bold">{ex.formula}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 22: ROUND, ROUNDUP & ROUNDDOWN (Interactive Precision Tester)
  if (slide.id === 22) {
    const val = roundNumber;
    const rStandard = Math.round(val * 100) / 100;
    const rUp = Math.ceil(val * 100) / 100;
    const rDown = Math.floor(val * 100) / 100;

    return (
      <div className="w-full h-full flex flex-col justify-between gap-3 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 items-center">
          {[
            { name: 'ROUND', formula: '=ROUND(A2,2)', result: rStandard.toFixed(2), desc: 'Rounds to nearest value' },
            { name: 'ROUNDUP', formula: '=ROUNDUP(A2,2)', result: rUp.toFixed(2), desc: 'Always rounds away from zero' },
            { name: 'ROUNDDOWN', formula: '=ROUNDDOWN(A2,2)', result: rDown.toFixed(2), desc: 'Always rounds toward zero (truncates)' }
          ].map((c, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 text-center">
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{c.name}</h4>
              <div className="py-1.5 px-2 rounded-lg bg-slate-950 text-white font-mono text-xs font-bold border border-slate-800">
                {c.formula}
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">{c.desc}</p>
              <div className="text-sm font-mono font-black text-orange-500 pt-1.5 border-t border-slate-100 dark:border-slate-800">
                {val} → {c.result}
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-xl bg-slate-900 text-slate-300 text-xs leading-relaxed border border-slate-800">
          {slide.useCaseNote}
        </div>
      </div>
    );
  }

  // Slide 23: SUMIF, COUNTIF & AVERAGEIF
  if (slide.id === 23) {
    return (
      <div className="w-full h-full flex flex-col justify-center gap-3 p-1">
        {slide.cards?.map((fn: any, idx: number) => (
          <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5 min-w-[130px]">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                {idx === 0 ? '$' : idx === 1 ? 'N' : '%'}
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{fn.name}</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold">
                {fn.badge}
              </span>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-slate-950 text-orange-400 font-mono text-xs font-bold border border-slate-800">
              {fn.syntax}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 sm:text-end">
              {fn.desc}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Slide 24 & 25: Text Functions
  if (slide.id === 24 || slide.id === 25) {
    return (
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-1 items-center">
        {slide.cards?.map((fn: any, idx: number) => (
          <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 text-center">
            <div className="w-9 h-9 mx-auto rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <Type className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{fn.name}</h4>
            <div className="py-1.5 px-2 rounded-lg bg-slate-950 text-white font-mono text-[11px] font-bold border border-slate-800">
              {fn.syntax}
            </div>
            <div className="py-1 rounded bg-amber-50 dark:bg-amber-950/20 text-orange-600 dark:text-orange-400 font-mono text-xs font-bold border border-amber-200 dark:border-amber-900/50">
              {fn.example}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">{fn.desc}</p>
          </div>
        ))}
      </div>
    );
  }

  // Slide 26: Employee Dataset Table
  if (slide.id === 26) {
    return (
      <div className="w-full h-full flex flex-col justify-between gap-3 p-1">
        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto flex-1 flex flex-col justify-center">
          <table className="w-full border-collapse text-xs text-center">
            <thead>
              <tr className="bg-blue-900 text-white font-mono text-xs">
                {slide.headers?.map((h: string, idx: number) => (
                  <th key={idx} className="p-2.5 border border-blue-950">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.rows?.map((row: string[], rIdx: number) => (
                <tr key={rIdx} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-2.5 text-slate-700 dark:text-slate-300 font-mono">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-[10px] text-slate-400 text-center italic mt-1.5">
            … continues for 40 rows in the practice workbook.
          </div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-mono text-slate-600 dark:text-slate-400 text-center">
          {slide.fieldsList}
        </div>
      </div>
    );
  }

  // Slide 27: Instructor-Led Exercises (7 Tasks)
  if (slide.id === 27) {
    return (
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-1 items-center">
        {slide.exercises?.map((ex: any, idx: number) => {
          const isSelected = activeExerciseIdx === idx;
          return (
            <div 
              key={idx} 
              onClick={() => setActiveExerciseIdx(idx)}
              className={`p-2.5 rounded-xl bg-white dark:bg-slate-900/90 border shadow-sm flex items-center justify-between gap-2.5 cursor-pointer transition-all ${
                isSelected ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full font-mono text-[10px] font-bold flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-orange-500 text-white' : 'bg-blue-600 text-white'
                }`}>
                  {ex.num}
                </span>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{ex.title}</h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">{ex.desc}</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-lg bg-slate-950 text-orange-400 font-mono text-[10px] font-bold shrink-0 border border-slate-800">
                {ex.formula}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  // Slide 29: Keep Practicing (Hero Thank You matching Slide 28 background)
  if (slide.id === 29) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-4 sm:p-8 select-none">
        <div className="relative z-10 flex items-center justify-center my-auto flex-col text-center max-w-3xl mx-auto w-full">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-5 ring-4 ring-orange-500/20">
            <Rocket className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {slide.mainTitle}
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mb-8 leading-relaxed">
            {slide.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full">
            {slide.cards?.map((c, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold shadow-lg hover:border-orange-500/50 hover:shadow-orange-500/10 transition-all flex items-center justify-center text-center leading-relaxed"
              >
                {c.title}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center text-xs text-slate-500 font-mono pt-3 border-t border-slate-800/80 w-full max-w-md">
          Thank you — Instant Academy
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 text-center text-slate-400">
      Slide {slide.id} Content
    </div>
  );
};
