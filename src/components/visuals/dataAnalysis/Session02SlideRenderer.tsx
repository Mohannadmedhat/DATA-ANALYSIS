import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { InstantLogo } from '../../InstantLogo';
import { ThankYouVisual } from './ThankYouVisual';
import { HeroCoverVisual } from './HeroCoverVisual';
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
  FileSpreadsheet,
  HelpCircle,
  Lightbulb,
  Pin,
  Move,
  Scissors,
  Check,
  Rocket,
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface Session02SlideRendererProps {
  slide: SlideData;
  isRTL?: boolean;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session02SlideRenderer: React.FC<Session02SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // Interactive States for bespoking specific slides
  const [activeGridCell, setActiveGridCell] = useState<{ col: string; row: number }>({ col: 'C', row: 2 });
  const [selectedDataType, setSelectedDataType] = useState<number>(0);
  const [selectedOpIdx, setSelectedOpIdx] = useState<number>(0);
  const [f4CycleIndex, setF4CycleIndex] = useState<number>(1); // 0: A2*D5, 1: A2*$D$5, 2: A2*D$5, 3: A2*$D5
  const [activeErrorIdx, setActiveErrorIdx] = useState<number>(0);
  const [ifScore, setIfScore] = useState<number>(75);
  const [roundNumber, setRoundNumber] = useState<number>(4.567);
  const [textTestInput, setTextTestInput] = useState<string>('Data Analysis');
  const [activeExerciseIdx, setActiveExerciseIdx] = useState<number>(0);

  // Slide 01: Hero Cover (Dark Background Slide)
  if (slide.id === 1) {
    return (
      <HeroCoverVisual
        sessionNumber="02"
        courseTag="Data Analysis Diploma"
        titlePrefix="EXCEL"
        titleHighlight="BASICS"
        subtitle="Interface, Formulas & Core Functions for Modern Data Analysts"
        floatingBadges={[
          { icon: FileSpreadsheet, label: 'Excel Ribbon & Grid', position: 'top-left', borderColor: 'border-blue-500/50', textColor: 'text-blue-400' },
          { icon: Calculator, label: 'Formulas & Calculations', position: 'top-right', borderColor: 'border-cyan-500/50', textColor: 'text-cyan-400' },
          { icon: Pin, label: 'Cell References ($)', position: 'bottom-left', borderColor: 'border-emerald-500/50', textColor: 'text-emerald-400' },
          { icon: TableIcon, label: 'Core Functions & Logic', position: 'bottom-right', borderColor: 'border-purple-500/50', textColor: 'text-purple-400' }
        ]}
        statsCards={[
          { val: '6 Pillars', label: 'Curriculum Roadmap', sub: 'Interface • Structure • Formulas' },
          { val: '29 Slides', label: 'Applied Core Modules', sub: 'Real-world practice & labs' },
          { val: '4 Core Groups', label: 'Function Tech Stack', sub: 'Stats • Logic • Text • Math' }
        ]}
        onStart={onNext}
      />
    );
  }

  // Slide 02: Session Objectives (White Cards)
  if (slide.id === 2) {
    const icons = [Compass, Layers, Calculator, Anchor, TableIcon, BarChart3];
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-3.5 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {slide.cards?.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md hover:border-orange-500/50 hover:shadow-lg transition-all flex flex-col items-start gap-2.5"
              >
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
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

  // Slide 03: What is Microsoft Excel? (White Mode)
  if (slide.id === 3) {
    const useCaseIcons = [TrendingUp, Users, Briefcase, Building];
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg mb-3 shadow-md">
                X
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-3 leading-relaxed">
                A spreadsheet application for organizing, calculating, and analyzing data in rows and columns.
              </p>
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-orange-600 mb-2">
                Why Data Analysts use it
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {slide.definitionBox?.bullets?.map((bullet: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 px-1">
              Real-World Use Cases
            </h4>
            <div className="flex flex-col gap-2.5">
              {slide.cards?.map((card, idx) => {
                const Icon = useCaseIcons[idx % useCaseIcons.length];
                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/90 flex items-center gap-3 shadow-md hover:border-blue-500/40 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900">{card.title}</h5>
                      <p className="text-[11px] text-slate-600">{card.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 04: Workbook vs Worksheet (White Mode)
  if (slide.id === 4) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-7 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Workbook Structure
                </h3>
                <p className="text-xs text-slate-600">
                  The entire Excel file (.xlsx) — a container for one or more worksheets.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {[
                { name: 'Sales', tab: 'Sheet 1', color: 'border-blue-500 bg-blue-50/50' },
                { name: 'Employees', tab: 'Sheet 2', color: 'border-emerald-500 bg-emerald-50/50' },
                { name: 'Summary', tab: 'Sheet 3', color: 'border-orange-500 bg-orange-50/50' }
              ].map((sheet, idx) => (
                <div key={idx} className={`p-3 rounded-xl ${sheet.color} border-2 shadow-sm text-center flex flex-col items-center justify-center gap-1`}>
                  <TableIcon className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-xs text-slate-900">{sheet.name}</span>
                  <span className="text-[10px] text-slate-500">Worksheet</span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-white text-slate-700 border border-slate-200">{sheet.tab}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            {slide.cards?.map((card, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-1">
                <span className="text-[10px] font-bold text-orange-600 font-mono uppercase">{card.badge}</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">{card.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Slide 05: Rows, Columns & Cells (Interactive Grid! - White Cards)
  if (slide.id === 5) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs font-mono">
              <span className="text-slate-600 font-semibold">
                Click any cell to test selection:
              </span>
              <span className="px-2.5 py-0.5 rounded bg-orange-100 text-orange-700 font-bold border border-orange-300">
                {activeGridCell.col}{activeGridCell.row}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-center text-xs font-mono select-none">
                <thead>
                  <tr>
                    <th className="w-8 p-1.5 bg-slate-100 border border-slate-300 text-slate-700" />
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
                                  ? 'bg-amber-100 border-2 border-orange-500 font-black text-orange-700 shadow-sm scale-95' 
                                  : isInRange 
                                    ? 'bg-blue-50 border-blue-200 hover:bg-blue-100 text-slate-800' 
                                    : 'border-slate-200 hover:bg-slate-100 text-slate-700'
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

            <div className="flex items-center justify-between text-[11px] font-semibold pt-3 border-t border-slate-200">
              <span className="flex items-center gap-1.5 text-orange-700">
                <span className="w-2.5 h-2.5 rounded border border-orange-500 bg-amber-200 inline-block" />
                Active Cell ({activeGridCell.col}{activeGridCell.row})
              </span>
              <span className="flex items-center gap-1.5 text-blue-700">
                <span className="w-2.5 h-2.5 rounded border border-blue-400 bg-blue-100 inline-block" />
                Range (B2:C4)
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-2.5">
            {slide.cards?.map((card, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-center">
                <h4 className="text-xs font-bold text-slate-900 mb-1">{card.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Slide 06: Data Types in Excel (White Mode)
  if (slide.id === 6) {
    const typeIcons = [Hash, Type, Calendar, DollarSign, Percent, ToggleLeft];
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {slide.cards?.map((card, idx) => {
            const Icon = typeIcons[idx % typeIcons.length];
            const isSelected = selectedDataType === idx;
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedDataType(idx)}
                className={`p-4 rounded-xl bg-white border shadow-md flex flex-col justify-between cursor-pointer transition-all ${
                  isSelected ? 'border-orange-500 ring-2 ring-orange-500/20 scale-[1.02]' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{card.title}</h4>
                </div>
                <div className="w-full py-2 px-2.5 rounded-lg bg-slate-900 text-orange-400 font-mono text-center text-xs font-bold mb-2 border border-slate-800 shadow-inner">
                  {card.example}
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 07: Basic Navigation & Shortcuts (White Mode)
  if (slide.id === 7) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 flex flex-col gap-2.5">
            {slide.shortcuts?.map((sc: any, idx: number) => (
              <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-md flex items-center gap-3.5 hover:border-orange-500/40 transition-colors">
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-orange-400 font-mono text-xs font-bold border border-slate-800 shadow-sm shrink-0">
                  {sc.keys}
                </span>
                <span className="text-xs text-slate-700 font-medium">
                  {sc.desc}
                </span>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 flex flex-col gap-3.5">
            {slide.cards?.map((card, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                    {idx === 0 ? <MousePointer className="w-4 h-4" /> : <Snowflake className="w-4 h-4" />}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{card.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Slide 08 & Slide 28: Best Practices & Summary (Dark Theme Cards for Dark Backgrounds)
  if (slide.id === 8 || slide.id === 28) {
    const cardsCount = slide.cards?.length || 6;
    const gridCols = cardsCount <= 4 ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl';
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center items-center p-1">
        <div className={`grid ${gridCols} gap-3.5 w-full mx-auto`}>
          {slide.cards?.map((card, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 shadow-lg flex flex-col items-start gap-2.5 hover:border-orange-500/50 transition-colors">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{card.title}</h4>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Slide 09: Introduction to Formulas (White Mode)
  if (slide.id === 9) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center gap-3 shadow-md">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono font-black text-lg shadow-md shrink-0">
            =
          </div>
          <div className="text-xs sm:text-sm text-blue-950 font-semibold">
            {slide.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-6 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-mono font-bold text-xs border border-slate-800 shadow-inner">
                  =A1+A2
                </span>
                <span className="text-xs text-orange-600 font-semibold">
                  {slide.formulaRuleNote}
                </span>
              </div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 mb-2">
                Rules of a Formula
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {slide.rules?.map((rule: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 mb-2">
                Formula Bar
              </h4>
              <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-300 flex items-center gap-2.5 font-mono text-xs shadow-inner mb-3">
                <span className="text-slate-500 font-serif italic text-sm">fx</span>
                <span className="w-px h-4 bg-slate-300" />
                <span className="text-blue-700 font-bold">=A1+A2</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {slide.formulaBarInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 10: Arithmetic Operators (White Cards)
  if (slide.id === 10) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center items-center gap-5 p-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
          {slide.cards?.map((op: any, idx: number) => {
            const isSelected = selectedOpIdx === idx;
            return (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedOpIdx(idx)}
                className={`p-4 rounded-xl bg-white border shadow-md flex flex-col items-center text-center gap-2.5 cursor-pointer transition-all ${
                  isSelected ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-full font-black text-lg flex items-center justify-center shadow-md ${
                  isSelected ? 'bg-orange-500 text-white' : 'bg-blue-600 text-white'
                }`}>
                  {op.symbol}
                </div>
                <span className="text-xs font-bold text-slate-900">{op.name}</span>
                <span className="w-full py-1 rounded bg-slate-900 text-orange-400 font-mono text-xs font-bold border border-slate-800">
                  {op.formula}
                </span>
              </motion.div>
            );
          })}
        </div>
        <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-800 text-xs text-center font-medium max-w-2xl w-full shadow-sm">
          {slide.footerNote}
        </div>
      </div>
    );
  }

  // Slide 11: Order of Operations (PEMDAS - White Cards)
  if (slide.id === 11) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center items-center gap-6 p-1">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 w-full">
          {slide.pemdasSteps?.map((step: any, idx: number) => (
            <div key={idx} className="p-3.5 rounded-xl bg-blue-600 text-white shadow-lg flex flex-col items-center text-center gap-1 border border-blue-500">
              <span className="text-2xl font-black font-mono">{step.letter}</span>
              <span className="text-[11px] font-medium opacity-90">{step.name}</span>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
          <div className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 text-orange-400 font-mono text-lg font-black border border-slate-800 text-center shadow-inner">
            {slide.exampleFormula}
          </div>
          <div className="flex-1 space-y-2 text-xs sm:text-sm font-mono text-slate-700">
            {slide.exampleSteps?.map((st: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                <span>{st}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Slide 12: Relative Reference (White Mode)
  if (slide.id === 12) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-6 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-3">
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
                  <td className="p-2 border border-slate-200 text-slate-800">10</td>
                  <td className="p-2 border border-slate-200 text-slate-800">20</td>
                  <td className="p-2 border border-slate-200 text-orange-600 font-bold">=A1+B1 → 30</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 text-slate-800">15</td>
                  <td className="p-2 border border-slate-200 text-slate-800">25</td>
                  <td className="p-2 border border-slate-200 text-orange-600 font-bold">=A2+B2 → 40</td>
                </tr>
                <tr>
                  <td className="p-2 border border-slate-200 text-slate-800">5</td>
                  <td className="p-2 border border-slate-200 text-slate-800">35</td>
                  <td className="p-2 border border-slate-200 text-orange-600 font-bold">=A3+B3 → 40</td>
                </tr>
              </tbody>
            </table>
            <div className="p-2.5 rounded-xl bg-slate-50 text-[11px] text-slate-600 border border-slate-200">
              {slide.scenarioNote}
            </div>
          </div>

          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-center gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-orange-600">
              Why it matters for analysts
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              {slide.reasons?.map((reason: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Slide 13: Absolute Reference (Interactive F4 Toggler - White Cards)
  if (slide.id === 13) {
    const f4Variations = [
      { syntax: '=B2*$D$5', ref: '$D$5', label: 'Absolute (Locked Column & Row)' },
      { syntax: '=B2*D$5', ref: 'D$5', label: 'Mixed (Row Locked Only)' },
      { syntax: '=B2*$D5', ref: '$D5', label: 'Mixed (Column Locked Only)' },
      { syntax: '=B2*D5', ref: 'D5', label: 'Relative (No Lock)' }
    ];
    const currentVar = f4Variations[f4CycleIndex % f4Variations.length];

    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800 flex items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md">
              <Pin className="w-3.5 h-3.5" />
            </div>
            <span className="font-mono text-sm font-bold text-orange-400">{currentVar.syntax}</span>
            <span className="text-[11px] text-slate-400 font-mono">({currentVar.label})</span>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setF4CycleIndex(prev => prev + 1)}
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Press F4 ⟳</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-7 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-md overflow-x-auto">
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
                  <td className="p-1.5 border border-slate-200 text-slate-800">Laptop</td>
                  <td className="p-1.5 border border-slate-200 text-slate-800">20,000</td>
                  <td className="p-1.5 border border-slate-200 text-slate-400">-</td>
                  <td className="p-1.5 border border-slate-200 text-orange-600 font-bold">=B2*{currentVar.ref}</td>
                </tr>
                <tr>
                  <td className="p-1.5 border border-slate-200 text-slate-800">Mouse</td>
                  <td className="p-1.5 border border-slate-200 text-slate-800">450</td>
                  <td className="p-1.5 border border-slate-200 text-slate-400">-</td>
                  <td className="p-1.5 border border-slate-200 text-orange-600 font-bold">=B3*{currentVar.ref}</td>
                </tr>
                <tr>
                  <td className="p-1.5 border border-slate-200 text-slate-800">Monitor</td>
                  <td className="p-1.5 border border-slate-200 text-slate-800">3,200</td>
                  <td className="p-1.5 border border-slate-200 text-slate-400">-</td>
                  <td className="p-1.5 border border-slate-200 text-orange-600 font-bold">=B4*{currentVar.ref}</td>
                </tr>
                <tr className="bg-amber-50 font-bold">
                  <td className="p-1.5 border border-slate-200 text-end text-slate-700" colSpan={2}>Rate →</td>
                  <td className="p-1.5 border-2 border-orange-500 text-orange-600" colSpan={2}>14% (D5)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-5 p-4 rounded-xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 mb-1.5">Why it matters</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {slide.whyItMatters}
              </p>
            </div>
            <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-800 text-xs font-medium">
              💡 {slide.tip}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 14: Mixed Reference (White Mode)
  if (slide.id === 14) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center items-center gap-5 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <span className="w-fit px-3.5 py-1.5 rounded-xl bg-slate-900 text-orange-400 font-mono text-base font-bold border border-slate-800 shadow-inner">
              {slide.colLocked?.syntax}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">{slide.colLocked?.desc}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{slide.colLocked?.detail}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <span className="w-fit px-3.5 py-1.5 rounded-xl bg-slate-900 text-orange-400 font-mono text-base font-bold border border-slate-800 shadow-inner">
              {slide.rowLocked?.syntax}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">{slide.rowLocked?.desc}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{slide.rowLocked?.detail}</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md text-xs leading-relaxed w-full text-center">
          <span className="font-bold text-orange-600">Data Analysis Scenario: Multiplication Table: </span>
          <span className="text-slate-700">{slide.scenario}</span>
        </div>
      </div>
    );
  }

  // Slide 15: Reference Types at a Glance (White Mode)
  if (slide.id === 15) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-3.5 p-1">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-x-auto">
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
                <tr key={idx} className="border-b border-slate-200 text-center font-mono">
                  <td className="p-2.5 font-bold text-slate-900">{row.type}</td>
                  <td className="p-2.5 text-orange-600 font-bold">{row.example}</td>
                  <td className="p-2.5 text-slate-700">{row.col}</td>
                  <td className="p-2.5 text-slate-700">{row.row}</td>
                  <td className="p-2.5 font-sans text-xs text-start text-slate-600">{row.bestUsedFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-800 text-xs font-medium flex items-center gap-2 shadow-sm">
          <HelpCircle className="w-4 h-4 shrink-0 text-orange-500" />
          <span>{slide.keyTakeaway}</span>
        </div>
      </div>
    );
  }

  // Slide 16: Copying Formulas (White Mode)
  if (slide.id === 16) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center items-center gap-5 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {slide.cards?.map((c, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col items-start gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                {idx === 0 ? <Move className="w-4 h-4" /> : idx === 1 ? <TableIcon className="w-4 h-4" /> : <Scissors className="w-4 h-4" />}
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">{c.title}</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
        <div className="p-3.5 rounded-xl bg-slate-900 text-orange-400 font-mono text-xs text-center border border-slate-800 shadow-inner w-full">
          {slide.illustrationText}
        </div>
      </div>
    );
  }

  // Slide 17: Common Formula Errors (Interactive Troubleshooter! - White Cards)
  if (slide.id === 17) {
    const currentErr = slide.errors?.[activeErrorIdx];
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {slide.errors?.map((err: any, idx: number) => {
            const isSelected = activeErrorIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveErrorIdx(idx)}
                className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col gap-1 shadow-sm ${
                  isSelected 
                    ? 'bg-orange-50 border-orange-500 text-orange-700 ring-2 ring-orange-500/20' 
                    : 'bg-white border-slate-200/90 text-slate-700 hover:border-slate-300'
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
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeErrorIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex-1 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-rose-100 text-rose-700 font-mono font-black text-sm border border-rose-300">
                    {currentErr.code}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{currentErr.reason}</span>
                </div>
                
                <div className="p-3 rounded-xl bg-slate-900 text-white font-mono text-xs flex items-center justify-between border border-slate-800">
                  <span>Faulty Formula:</span>
                  <span className="text-rose-400 font-bold">{currentErr.example}</span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
                  <span className="font-bold">✓ Recommended Fix: </span>
                  <span>{currentErr.fix}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Tip: Always inspect referenced data types & ranges</span>
                <span className="font-mono text-orange-600">#ErrorDiagnostic</span>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    );
  }

  // Slide 18: Formula Best Practices (Dark Theme Cards for Dark Background)
  if (slide.id === 18) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-center">
          {slide.cards?.map((c, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-white shadow-lg flex flex-col gap-2 hover:border-orange-500/50 transition-colors">
              <div className="w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                <Check className="w-3.5 h-3.5" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white">{c.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Slide 19: SUM, AVERAGE, MIN & MAX (White Cards)
  if (slide.id === 19) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
          {slide.cards?.map((fn: any, idx: number) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-2.5 text-center">
              <div className="w-9 h-9 mx-auto rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                <TableIcon className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">{fn.name}</h4>
              <div className="py-1.5 px-2 rounded-lg bg-slate-900 text-white font-mono text-[11px] font-bold border border-slate-800">
                {fn.syntax}
              </div>
              <p className="text-[11px] text-slate-600">{fn.desc}</p>
              <div className="pt-1.5 border-t border-slate-200 text-[10px] text-orange-600 font-medium">
                Use case: {fn.useCase}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Slide 20: COUNT, COUNTA & COUNTBLANK (White Cards)
  if (slide.id === 20) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
          {slide.cards?.map((fn: any, idx: number) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-2 text-center">
              <div className="w-9 h-9 mx-auto rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                <Calculator className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">{fn.name}</h4>
              <div className="py-1.5 px-2 rounded-lg bg-slate-900 text-white font-mono text-[11px] font-bold border border-slate-800">
                {fn.syntax}
              </div>
              <p className="text-[11px] text-slate-600">{fn.desc}</p>
            </div>
          ))}
        </div>
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-2 shadow-sm">
          <Lightbulb className="w-4 h-4 shrink-0 text-orange-500 mt-0.5" />
          <span>{slide.useCaseNote}</span>
        </div>
      </div>
    );
  }

  // Slide 21: The IF Function (Interactive Condition Tester! - White Cards)
  if (slide.id === 21) {
    const isPassed = ifScore >= 60;
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-3 rounded-xl bg-slate-900 text-white font-mono text-center text-xs sm:text-sm font-bold border border-slate-800 shadow-inner">
          {slide.syntax}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between items-center gap-3">
            <div className="w-full flex items-center justify-between text-xs font-bold text-slate-800">
              <span>Cell B2 Value (Score):</span>
              <span className="font-mono text-base text-blue-600 font-black">{ifScore}</span>
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
                  ? 'bg-emerald-600 text-white shadow-md scale-105 ring-2 ring-emerald-500/40' 
                  : 'bg-slate-100 text-slate-400 opacity-50'
              }`}>
                TRUE → &quot;Pass&quot;
              </div>
              <div className={`px-4 py-1.5 rounded-lg font-mono font-bold text-xs transition-all ${
                !isPassed 
                  ? 'bg-rose-600 text-white shadow-md scale-105 ring-2 ring-rose-500/40' 
                  : 'bg-slate-100 text-slate-400 opacity-50'
              }`}>
                FALSE → &quot;Fail&quot;
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 mb-1.5">Business Examples</h4>
            <div className="space-y-2">
              {slide.examples?.map((ex: any, idx: number) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col gap-0.5">
                  <span className="text-[10px] font-semibold text-slate-700">{ex.title}</span>
                  <span className="text-xs font-mono text-orange-600 font-bold">{ex.formula}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 22: ROUND, ROUNDUP & ROUNDDOWN (White Cards)
  if (slide.id === 22) {
    const val = roundNumber;
    const rStandard = Math.round(val * 100) / 100;
    const rUp = Math.ceil(val * 100) / 100;
    const rDown = Math.floor(val * 100) / 100;

    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/90 shadow-md text-xs">
          <span className="text-slate-700 font-medium">Test input value (A2):</span>
          <div className="flex items-center gap-2 font-mono">
            {[4.567, 12.894, 99.449, 3.14159].map((preset) => (
              <button
                key={preset}
                onClick={() => setRoundNumber(preset)}
                className={`px-2.5 py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                  roundNumber === preset 
                    ? 'bg-orange-500 border-orange-500 text-white shadow-md' 
                    : 'bg-slate-100 border-slate-300 text-slate-700 hover:border-slate-400'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-center">
          {[
            { name: 'ROUND', formula: '=ROUND(A2, 2)', result: rStandard.toFixed(2), desc: 'Rounds to nearest value' },
            { name: 'ROUNDUP', formula: '=ROUNDUP(A2, 2)', result: rUp.toFixed(2), desc: 'Always rounds away from zero' },
            { name: 'ROUNDDOWN', formula: '=ROUNDDOWN(A2, 2)', result: rDown.toFixed(2), desc: 'Always rounds toward zero (truncates)' }
          ].map((c, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-2.5 text-center">
              <h4 className="font-bold text-xs sm:text-sm text-slate-900">{c.name}</h4>
              <div className="py-1.5 px-2 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold border border-slate-800">
                {c.formula}
              </div>
              <p className="text-[11px] text-slate-600">{c.desc}</p>
              <div className="text-sm font-mono font-black text-orange-600 pt-2 border-t border-slate-200">
                {val} → <span className="text-blue-600">{c.result}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 text-xs leading-relaxed shadow-sm">
          {slide.useCaseNote}
        </div>
      </div>
    );
  }

  // Slide 23: SUMIF, COUNTIF & AVERAGEIF (White Mode)
  if (slide.id === 23) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-3.5 p-1">
        {slide.cards?.map((fn: any, idx: number) => (
          <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-[140px]">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                {idx === 0 ? '$' : idx === 1 ? 'N' : '%'}
              </div>
              <span className="font-bold text-xs sm:text-sm text-slate-900">{fn.name}</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-blue-50 text-blue-700 font-bold border border-blue-200">
                {fn.badge}
              </span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 text-orange-400 font-mono text-xs font-bold border border-slate-800">
              {fn.syntax}
            </div>
            <div className="text-xs text-slate-600 sm:text-end">
              {fn.desc}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Slide 24 & 25: Text Functions (White Cards)
  if (slide.id === 24 || slide.id === 25) {
    const textVal = textTestInput || 'Data Analysis';
    const computedExamples: Record<string, string> = {
      'UPPER': textVal.toUpperCase(),
      'LOWER': textVal.toLowerCase(),
      'PROPER': textVal.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.substring(1).toLowerCase()),
      'LEFT': textVal.substring(0, 4),
      'RIGHT': textVal.substring(Math.max(0, textVal.length - 4)),
      'MID': textVal.substring(1, 5),
      'TRIM': textVal.trim(),
      'LEN': textVal.length.toString()
    };

    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/90 shadow-md text-xs">
          <span className="text-slate-700 font-medium">Try interactive text input (A2):</span>
          <input 
            type="text" 
            value={textTestInput} 
            onChange={(e) => setTextTestInput(e.target.value)}
            placeholder="Type any string..."
            className="px-3 py-1 rounded-lg bg-slate-100 text-orange-600 font-mono text-xs font-bold border border-slate-300 focus:outline-none focus:border-orange-500 w-48 text-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
          {slide.cards?.map((fn: any, idx: number) => {
            const computedVal = computedExamples[fn.name] || fn.example;
            return (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-2 text-center">
                <div className="w-9 h-9 mx-auto rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <Type className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">{fn.name}</h4>
                <div className="py-1.5 px-2 rounded-lg bg-slate-900 text-white font-mono text-[11px] font-bold border border-slate-800">
                  {fn.syntax}
                </div>
                <div className="py-1 px-2 rounded bg-amber-50 text-orange-700 font-mono text-xs font-bold border border-amber-200 truncate">
                  Result: &quot;{computedVal}&quot;
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">{fn.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 26: Employee Dataset Table (White Cards)
  if (slide.id === 26) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-x-auto flex flex-col justify-center">
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
                <tr key={rIdx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-2.5 text-slate-700 font-mono">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-[10px] text-slate-500 text-center italic mt-2">
            … continues for 40 rows in the practice workbook.
          </div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200/90 text-xs font-mono text-slate-600 text-center shadow-sm">
          {slide.fieldsList}
        </div>
      </div>
    );
  }

  // Slide 27: Instructor-Led Exercises (Dark Theme Cards for Dark Background)
  if (slide.id === 27) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center items-center gap-3 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {slide.exercises?.map((ex: any, idx: number) => {
            const isSelected = activeExerciseIdx === idx;
            return (
              <div 
                key={idx} 
                onClick={() => setActiveExerciseIdx(idx)}
                className={`p-3 rounded-xl bg-slate-900/90 border shadow-md flex items-center justify-between gap-3 cursor-pointer transition-all ${
                  isSelected ? 'border-orange-500 ring-2 ring-orange-500/20 scale-[1.01]' : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-6 h-6 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-orange-500 text-white' : 'bg-blue-600 text-white'
                  }`}>
                    {ex.num}
                  </span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">{ex.title}</h5>
                    <p className="text-[11px] text-slate-400 leading-normal">{ex.desc}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 text-orange-400 font-mono text-xs font-bold shrink-0 border border-slate-800">
                  {ex.formula}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 29: Keep Practicing (Hero Thank You - Dark Background)
  if (slide.id === 29) {
    return (
      <ThankYouVisual 
        sessionNumber="02"
        nextSessionNote="Next Session: Descriptive Statistics Part 1 — Mean, Median, Mode &amp; Distributions"
        nextSessionButtonText="Open Session 03: Descriptive Statistics"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={onSwitchSession ? () => onSwitchSession('session-03') : undefined}
      />
    );
  }

  return (
    <div className="p-8 text-center text-slate-400">
      Slide {slide.id} Content
    </div>
  );
};
