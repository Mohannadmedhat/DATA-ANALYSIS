import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { InstantLogo } from '../../InstantLogo';
import { 
  Compass, 
  Layers, 
  Target, 
  Activity, 
  BarChart2, 
  Search, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Building, 
  BookOpen, 
  Star, 
  Tag, 
  Sliders, 
  Eye, 
  Zap, 
  ArrowRight, 
  ArrowLeft,
  Check, 
  HelpCircle, 
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Award
} from 'lucide-react';

interface Session03SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
}

export const Session03SlideRenderer: React.FC<Session03SlideRendererProps> = ({
  slide,
  onNext
}) => {
  // Interactive states for bespoke components
  const [activeQuizCard, setActiveQuizCard] = useState<number | null>(null);
  const [outlierActive, setOutlierActive] = useState<boolean>(true);
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [selectedScaleIdx, setSelectedScaleIdx] = useState<number>(0);

  // Helper for Section Divider Slides (Slides 3, 7, 11, 17, 23, 28, 32)
  if (slide.type === 'section-divider') {
    const iconsMap: Record<number, any> = {
      3: Sparkles,
      7: Tag,
      11: Target,
      17: Activity,
      23: BarChart2,
      28: BookOpen,
      32: Award
    };
    const IconComponent = iconsMap[slide.id] || Sparkles;

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 select-none overflow-hidden">
        {/* Ambient floating node */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-72 h-72 rounded-full blur-3xl bg-blue-600/20 pointer-events-none"
        />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl flex flex-col items-center my-auto"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-4 ring-4 ring-orange-500/20">
            <IconComponent className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold mb-3">
            {slide.subBadge || 'SECTION'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {slide.mainTitle}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
            {slide.subtitle}
          </p>
        </motion.div>
      </div>
    );
  }

  // Slide 01: Hero Cover
  if (slide.id === 1) {
    const stats = [
      { val: '7 Goals', label: 'Core Outcomes', sub: 'Variables • Center • Spread' },
      { val: '35 Slides', label: 'Curriculum Depth', sub: 'Distributions & Case Studies' },
      { val: 'Visual Labs', label: 'Hands-on Plots', sub: 'Histogram • KDE • Box Plot' }
    ];

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 text-center bg-transparent overflow-hidden select-none">
        {/* Floating Node Badges */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          <motion.div 
            animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-[6%] sm:left-[12%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-blue-500/50 text-blue-400 text-xs backdrop-blur-md shadow-xl"
          >
            <Tag className="w-3.5 h-3.5" />
            <span>Nominal & Ordinal Scales</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 right-[6%] sm:right-[12%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-cyan-500/50 text-cyan-400 text-xs backdrop-blur-md shadow-xl"
          >
            <Target className="w-3.5 h-3.5" />
            <span>Mean, Median & Mode</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-4 left-[4%] sm:left-[10%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/50 text-emerald-400 text-xs backdrop-blur-md shadow-xl"
          >
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-emerald-400">Variance & Std Dev</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }} 
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-4 right-[4%] sm:right-[10%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-purple-500/50 text-purple-400 text-xs backdrop-blur-md shadow-xl"
          >
            <BarChart2 className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-semibold text-purple-400">Box Plot & Outliers</span>
          </motion.div>
        </div>

        {/* Hero Content */}
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
            <span>Data Analysis Diploma • Session 03</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-3">
            DESCRIPTIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">STATISTICS</span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-3 shadow-sm" />

          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-2xl mb-6 leading-relaxed">
            Types of Data · Measures of Central Tendency · Histogram &amp; KDE · Range, Variance &amp; Standard Deviation · IQR &amp; Box Plot
          </p>

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
              <span>Start Session 03</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}
        </motion.div>
      </div>
    );
  }

  // Slide 02 & 33: Session Objectives / What We Covered (7 Cards)
  if (slide.id === 2 || slide.id === 33) {
    const icons = [Layers, Tag, Target, Activity, BarChart2, Search, CheckCircle2];
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-3.5 p-1">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {slide.cards?.slice(0, 4).map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-md hover:border-orange-500/50 hover:shadow-lg transition-all flex flex-col items-start gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">{card.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {slide.cards?.slice(4).map((card, idx) => {
            const Icon = icons[(idx + 4) % icons.length];
            return (
              <motion.div 
                key={idx + 4}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-md hover:border-orange-500/50 hover:shadow-lg transition-all flex flex-col items-start gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">{card.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 04: What Is Statistics?
  if (slide.id === 4) {
    const pipelineIcons = [Layers, Sliders, Eye, CheckCircle2];
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              {slide.definitionBox?.title}
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
              {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-2.5">
            {slide.pipelineSteps?.map((step: any, idx: number) => {
              const Icon = pipelineIcons[idx % pipelineIcons.length];
              return (
                <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900">{step.label}</h5>
                    <p className="text-[11px] text-slate-500">{step.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Slide 05: Statistics Powers Everyday Business Decisions (5 Cards)
  if (slide.id === 5) {
    const bizIcons = [DollarSign, TrendingUp, Building, BookOpen, Star];
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-3.5 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {slide.cards?.map((c, idx) => {
            const Icon = bizIcons[idx % bizIcons.length];
            return (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-md flex flex-col items-start gap-2.5 hover:border-orange-500/50 hover:shadow-lg transition-all">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">{c.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{c.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 06: Descriptive vs Inferential Statistics
  if (slide.id === 6) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {slide.cards?.map((card, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
              <span className={`w-fit px-2.5 py-1 rounded-lg text-xs font-bold font-mono ${
                idx === 0 ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
              }`}>
                {card.badge}
              </span>
              <h4 className="text-sm font-bold text-slate-900">{card.title}</h4>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                {card.bullets?.map((b: string, bIdx: number) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-950 text-xs text-center font-medium shadow-sm">
          💡 {slide.footerNote}
        </div>
      </div>
    );
  }

  // Slide 08 & 09: Qualitative vs Quantitative Data
  if (slide.id === 8 || slide.id === 9) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {slide.cards?.map((card, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3 hover:border-orange-500/50 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900">{card.title}</h4>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900 text-orange-400">
                  {card.badge}
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                {card.bullets?.map((b: string, bIdx: number) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Slide 10: The Four Measurement Scales
  if (slide.id === 10) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-x-auto">
          <table className="w-full border-collapse text-xs text-start">
            <thead>
              <tr className="bg-blue-900 text-white font-mono text-xs">
                {slide.headers?.map((h: string, idx: number) => (
                  <th key={idx} className="p-2.5 border border-blue-950 text-start">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.rows?.map((row: string[], rIdx: number) => (
                <tr key={rIdx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="p-2.5 font-bold font-mono text-orange-600">{row[0]}</td>
                  <td className="p-2.5 text-slate-800">{row[1]}</td>
                  <td className="p-2.5 text-slate-600 font-mono">{row[2]}</td>
                  <td className="p-2.5 text-slate-700 font-medium">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Slide 12: Mean — The Balancing Point (Interactive Visual)
  if (slide.id === 12) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">Definition &amp; Formula</h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-orange-400 font-mono text-xs font-bold border border-slate-800">
              Mean (x̄) = (Σ values) ÷ n = 87 ÷ 5 = 17.40
            </div>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col items-center justify-center gap-6">
            <span className="text-xs font-bold text-slate-700">Fulcrum Physics: Sum of Distances = 0</span>
            
            {/* Balancing Beam Graphic */}
            <div className="w-full relative py-6">
              <div className="w-full h-1.5 bg-slate-300 rounded-full relative">
                {/* Weight Points */}
                {[
                  { val: 12, pct: '10%' },
                  { val: 15, pct: '35%' },
                  { val: 18, pct: '60%' },
                  { val: 20, pct: '78%' },
                  { val: 22, pct: '95%' }
                ].map((pt, idx) => (
                  <div key={idx} style={{ left: pt.pct }} className="absolute -top-3.5 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shadow-md">
                      {pt.val}
                    </div>
                  </div>
                ))}
                {/* Center of Gravity Fulcrum Triangle */}
                <div style={{ left: '55%' }} className="absolute -bottom-6 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-orange-500" />
                  <span className="text-[11px] font-mono font-bold text-orange-600 mt-1">Mean = 17.4</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 text-center italic mt-4">
              Negative deviations (-5.4, -2.4) cancel positive deviations (+0.6, +2.6, +4.6) = 0!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Slide 13: Median — The Middle Value (Split Row)
  if (slide.id === 13) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">Definition &amp; Formula</h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-orange-400 font-mono text-xs font-bold border border-slate-800">
              Odd: (n + 1)/2 = 3rd item | Even: Avg of two centers
            </div>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col items-center justify-center gap-4">
            <span className="text-xs font-bold text-slate-700">Sorted Dataset (Lowest to Highest)</span>
            
            <div className="flex items-center gap-2">
              {[12, 15, 18, 20, 22].map((num, idx) => {
                const isMedian = idx === 2;
                return (
                  <div 
                    key={idx} 
                    className={`px-4 py-3 rounded-xl font-mono text-sm font-bold shadow-md transition-all ${
                      isMedian 
                        ? 'bg-orange-500 text-white scale-110 ring-4 ring-orange-500/20' 
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {num}
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-orange-600">Median = 18</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Exactly 2 observations below, and 2 observations above.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 14: Mode — The Most Frequent Value (Dot Plot)
  if (slide.id === 14) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">Definition &amp; Applications</h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-orange-400 font-mono text-xs font-bold border border-slate-800">
              Frequency Peak = Most repeated observation
            </div>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col items-center justify-center gap-4">
            <span className="text-xs font-bold text-slate-700">Frequency Dot Plot</span>
            
            <div className="flex items-end gap-6 h-36 pt-4 border-b border-slate-300 px-6">
              {[
                { val: 12, dots: 1, isMode: false },
                { val: 15, dots: 3, isMode: true },
                { val: 18, dots: 2, isMode: false },
                { val: 20, dots: 1, isMode: false }
              ].map((col, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  {Array.from({ length: col.dots }).map((_, dIdx) => (
                    <div 
                      key={dIdx} 
                      className={`w-5 h-5 rounded-full shadow-sm ${
                        col.isMode ? 'bg-orange-500 ring-2 ring-orange-500/30' : 'bg-blue-600'
                      }`} 
                    />
                  ))}
                  <span className={`text-xs font-mono font-bold mt-2 ${col.isMode ? 'text-orange-600 font-black' : 'text-slate-700'}`}>
                    {col.val}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-orange-600">Mode = 15 (appears 3 times)</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Works on discrete numbers AND text labels.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 15: Mean vs Median vs Mode
  if (slide.id === 15) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-x-auto">
          <table className="w-full border-collapse text-xs text-start">
            <thead>
              <tr className="bg-blue-900 text-white font-mono text-xs">
                {slide.headers?.map((h: string, idx: number) => (
                  <th key={idx} className="p-2.5 border border-blue-950 text-start">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.rows?.map((row: string[], rIdx: number) => (
                <tr key={rIdx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="p-2.5 font-bold font-mono text-orange-600">{row[0]}</td>
                  <td className="p-2.5 text-slate-800">{row[1]}</td>
                  <td className="p-2.5 text-slate-700">{row[2]}</td>
                  <td className="p-2.5 text-slate-600">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Slide 16: The Effect of Outliers (Interactive Simulator!)
  if (slide.id === 16) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/90 shadow-md text-xs">
          <span className="text-slate-700 font-semibold">Interactive Outlier Simulator:</span>
          <button
            onClick={() => setOutlierActive(prev => !prev)}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer shadow-sm ${
              outlierActive 
                ? 'bg-rose-500 text-white hover:bg-rose-600' 
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            {outlierActive ? 'Remove Outlier (85) ⟳' : 'Inject Extreme Outlier (85) +'}
          </button>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-5">
          {/* Baseline */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-800">Original Dataset: [12, 14, 15, 16, 17, 18, 20]</span>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-blue-600">Mean: 16.4</span>
                <span className="text-emerald-600">Median: 16</span>
              </div>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full relative my-3">
              {[12, 14, 15, 16, 17, 18, 20].map((v, i) => (
                <div key={i} style={{ left: `${((v - 10) / 25) * 100}%` }} className="absolute -top-2 w-4 h-4 rounded-full bg-blue-600 shadow-sm -translate-x-1/2" />
              ))}
            </div>
          </div>

          {/* With Outlier */}
          <div className="flex flex-col gap-1.5 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-800">
                {outlierActive ? 'With Outlier (85 Added):' : 'Outlier Removed:'}
              </span>
              <div className="flex items-center gap-3 font-mono">
                <span className={outlierActive ? 'text-rose-600 font-black' : 'text-blue-600'}>
                  Mean: {outlierActive ? '24.1 (+47% skewed!)' : '16.4'}
                </span>
                <span className="text-emerald-600">
                  Median: 16 (0% shift — resistant!)
                </span>
              </div>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full relative my-3">
              {[12, 14, 15, 16, 17, 18, 20].map((v, i) => (
                <div key={i} style={{ left: `${((v - 10) / 80) * 100}%` }} className="absolute -top-2 w-4 h-4 rounded-full bg-blue-600 shadow-sm -translate-x-1/2" />
              ))}
              {outlierActive && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{ left: `${((85 - 10) / 80) * 100}%` }} 
                  className="absolute -top-2.5 w-5 h-5 rounded-full bg-rose-500 ring-4 ring-rose-500/20 shadow-md -translate-x-1/2" 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 18: Range — The Simplest Measure
  if (slide.id === 18) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">Definition &amp; Formula</h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-orange-400 font-mono text-xs font-bold border border-slate-800">
              Range = Max − Min = 22 − 12 = 10
            </div>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col items-center justify-center gap-6">
            <span className="text-xs font-bold text-slate-700">Span from Minimum to Maximum</span>
            
            <div className="w-full relative py-6 px-4">
              <div className="w-full h-1.5 bg-slate-200 rounded-full relative">
                <div className="absolute -top-3 left-0 w-6 h-6 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                  12
                </div>
                <div className="absolute -top-3 right-0 w-6 h-6 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                  22
                </div>
                <div className="absolute top-4 left-0 right-0 border-b-2 border-dashed border-orange-500 flex justify-center">
                  <span className="bg-white px-2 text-xs font-mono font-bold text-orange-600 -translate-y-1/2">
                    Range = 10
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 text-center italic mt-2">
              Fast to calculate, but extremely vulnerable to one outlier.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Slide 19: Variance — Average Squared Distance
  if (slide.id === 19) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">Conceptual Intuition</h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-orange-400 font-mono text-xs font-bold border border-slate-800">
              Variance (s²) = Σ(x - x̄)² ÷ (n - 1)
            </div>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col items-center justify-center gap-3">
            <span className="text-xs font-bold text-slate-700">Squared Distance from Mean (17.4)</span>
            
            <div className="space-y-1.5 w-full font-mono text-xs">
              {[
                { val: 12, dev: '-5.4', sq: '29.16' },
                { val: 15, dev: '-2.4', sq: '5.76' },
                { val: 18, dev: '+0.6', sq: '0.36' },
                { val: 20, dev: '+2.6', sq: '6.76' },
                { val: 22, dev: '+4.6', sq: '21.16' }
              ].map((row, idx) => (
                <div key={idx} className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="text-slate-800">Point {row.val}</span>
                  <span className="text-slate-500">Gap: {row.dev}</span>
                  <span className="text-orange-600 font-bold">Squared: {row.sq}</span>
                </div>
              ))}
            </div>
            <span className="text-[11px] font-mono text-slate-500">Sum of Squares = 63.20 | Variance = 15.80</span>
          </div>
        </div>
      </div>
    );
  }

  // Slide 20: Standard Deviation — Typical Distance
  if (slide.id === 20) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">Interpretation</h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-orange-400 font-mono text-xs font-bold border border-slate-800">
              s = √Variance = √15.80 = 3.97
            </div>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col items-center justify-center gap-4">
            <span className="text-xs font-bold text-slate-700">Distribution Width Comparison</span>
            
            <div className="grid grid-cols-2 gap-4 w-full text-center">
              {/* Steep Curve (Low SD) */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center">
                <svg viewBox="0 0 100 60" className="w-28 h-16">
                  <path d="M 10 55 Q 50 -10 90 55 Z" fill="#3B82F6" fillOpacity="0.25" stroke="#2563EB" strokeWidth="2" />
                </svg>
                <span className="text-xs font-bold text-blue-600 mt-2">Low Std Dev</span>
                <span className="text-[10px] text-slate-500">Tightly clustered, consistent</span>
              </div>

              {/* Wide Curve (High SD) */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center">
                <svg viewBox="0 0 100 60" className="w-28 h-16">
                  <path d="M 5 55 Q 50 15 95 55 Z" fill="#F97316" fillOpacity="0.25" stroke="#EA580C" strokeWidth="2" />
                </svg>
                <span className="text-xs font-bold text-orange-600 mt-2">High Std Dev</span>
                <span className="text-[10px] text-slate-500">Widely dispersed, high variance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 21: Interquartile Range (IQR)
  if (slide.id === 21) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">Definition &amp; Formula</h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-orange-400 font-mono text-xs font-bold border border-slate-800">
              IQR = Q3 (75%) − Q1 (25%) = 20 − 13 = 7.0
            </div>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col items-center justify-center gap-4">
            <span className="text-xs font-bold text-slate-700">Middle 50% Coverage (Resistant to Outliers)</span>
            
            <div className="w-full relative py-6 px-3">
              <div className="w-full h-1.5 bg-slate-200 rounded-full relative">
                {/* IQR Box Span */}
                <div style={{ left: '25%', width: '50%' }} className="absolute -top-3.5 h-8 bg-amber-100 border-2 border-orange-500 rounded-md flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold text-orange-700">Middle 50% (IQR = 7)</span>
                </div>
                {/* Median Line */}
                <div style={{ left: '50%' }} className="absolute -top-4 h-9 w-1 bg-blue-600 z-10" />
              </div>
            </div>

            <div className="flex justify-between w-full font-mono text-xs px-2 pt-2 border-t border-slate-100">
              <span>Q1 = 13</span>
              <span className="text-blue-600 font-bold">Median = 16</span>
              <span>Q3 = 20</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 22 & 34: Spread Matrix & Quick Reference Table
  if (slide.id === 22 || slide.id === 34) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-x-auto">
          <table className="w-full border-collapse text-xs text-start">
            <thead>
              <tr className="bg-blue-900 text-white font-mono text-xs">
                {slide.headers?.map((h: string, idx: number) => (
                  <th key={idx} className="p-2.5 border border-blue-950 text-start">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.rows?.map((row: string[], rIdx: number) => (
                <tr key={rIdx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="p-2.5 font-bold font-mono text-slate-900">{row[0]}</td>
                  <td className="p-2.5 font-mono text-orange-600">{row[1]}</td>
                  <td className="p-2.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      row[2] === 'Yes' || row[2] === 'Resistant'
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {row[2]}
                    </span>
                  </td>
                  {row[3] && <td className="p-2.5 text-slate-600">{row[3]}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Slide 24: Histogram — Frequency Across Bins
  if (slide.id === 24) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        {/* Histogram Chart */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-2">
          <div className="flex items-end justify-between h-40 pt-6 px-4 border-b border-l border-slate-300">
            {slide.bins?.map((b: any, idx: number) => {
              const heightPct = (b.count / 200) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-mono text-slate-500 font-bold">{b.count}</span>
                  <div 
                    style={{ height: `${heightPct}%` }} 
                    className="w-full mx-0.5 rounded-t bg-blue-600 hover:bg-orange-500 transition-colors shadow-sm" 
                  />
                  <span className="text-[9px] font-mono text-slate-500 -rotate-45 mt-1">{b.label}</span>
                </div>
              );
            })}
          </div>

          {/* 3 Skew Comparisons */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {slide.skewTypes?.map((sk: any, idx: number) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-900 block">{sk.name}</span>
                <span className="text-[10px] text-slate-500">{sk.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Slide 25: KDE Plot — A Smoothed View of Distribution
  if (slide.id === 25) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 text-blue-600 font-bold">
              <span className="w-3 h-3 bg-blue-200 border border-blue-600 inline-block rounded" />
              Binned Histogram Counts
            </span>
            <span className="flex items-center gap-1.5 text-orange-600 font-bold">
              <span className="w-4 h-1 bg-orange-500 inline-block rounded" />
              KDE Smoothed Continuous Density
            </span>
          </div>

          {/* SVG Overlay Histogram + Spline Curve */}
          <div className="w-full h-44 relative mt-2">
            <svg viewBox="0 0 400 150" className="w-full h-full">
              {/* Bars */}
              {[
                { x: 20, h: 30 },
                { x: 65, h: 65 },
                { x: 110, h: 105 },
                { x: 155, h: 135 },
                { x: 200, h: 115 },
                { x: 245, h: 80 },
                { x: 290, h: 45 },
                { x: 335, h: 20 }
              ].map((b, i) => (
                <rect 
                  key={i} 
                  x={b.x} 
                  y={150 - b.h} 
                  width="40" 
                  height={b.h} 
                  fill="#93C5FD" 
                  stroke="#3B82F6" 
                  strokeWidth="1.5"
                  rx="2"
                />
              ))}

              {/* Smoothed KDE Spline */}
              <path 
                d="M 10 145 C 50 120, 90 70, 130 35 C 170 10, 210 20, 250 55 C 290 90, 330 130, 380 145" 
                fill="none" 
                stroke="#EA580C" 
                strokeWidth="3.5" 
              />
            </svg>
          </div>
          <p className="text-[11px] text-slate-500 text-center italic">
            Avoids arbitrary bin boundaries by estimating the continuous probability density function.
          </p>
        </div>
      </div>
    );
  }

  // Slide 26 & 31: Box Plot — Five Numbers, One Picture
  if (slide.id === 26 || slide.id === 31) {
    const isSalarySlide = slide.id === 31;
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-5">
          <span className="text-xs font-bold text-slate-800">
            {isSalarySlide ? 'Salary Distribution ($k) — Spotting Executive Outlier' : 'Horizontal Box & Whisker Anatomy'}
          </span>

          {/* SVG Box Plot */}
          <div className="w-full h-32 relative py-4">
            <svg viewBox="0 0 500 100" className="w-full h-full">
              {/* Left Whisker */}
              <line x1="50" y1="50" x2="150" y2="50" stroke="#1E293B" strokeWidth="2.5" />
              <line x1="50" y1="35" x2="50" y2="65" stroke="#1E293B" strokeWidth="2.5" />

              {/* Box (Q1 to Q3) */}
              <rect x="150" y="25" width="160" height="50" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2.5" rx="3" />

              {/* Median Line */}
              <line x1="230" y1="25" x2="230" y2="75" stroke="#EA580C" strokeWidth="4" />

              {/* Right Whisker */}
              <line x1="310" y1="50" x2="400" y2="50" stroke="#1E293B" strokeWidth="2.5" />
              <line x1="400" y1="35" x2="400" y2="65" stroke="#1E293B" strokeWidth="2.5" />

              {/* Outliers */}
              <circle cx="450" cy="50" r="6" fill="#EA580C" stroke="#C2410C" strokeWidth="2" />
              {isSalarySlide && (
                <circle cx="480" cy="50" r="7" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
              )}
            </svg>
          </div>

          <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono">
            <div className="p-2 rounded bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px]">MIN</span>
              <span className="font-bold text-slate-800">{isSalarySlide ? '$47,000' : '10'}</span>
            </div>
            <div className="p-2 rounded bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px]">Q1 (25%)</span>
              <span className="font-bold text-slate-800">{isSalarySlide ? '$51,250' : '25'}</span>
            </div>
            <div className="p-2 rounded bg-orange-50 border border-orange-200">
              <span className="text-orange-600 block text-[10px]">MEDIAN (50%)</span>
              <span className="font-bold text-orange-700">{isSalarySlide ? '$54,000' : '40'}</span>
            </div>
            <div className="p-2 rounded bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px]">Q3 (75%)</span>
              <span className="font-bold text-slate-800">{isSalarySlide ? '$67,000' : '60'}</span>
            </div>
            <div className="p-2 rounded bg-rose-50 border border-rose-200">
              <span className="text-rose-600 block text-[10px]">OUTLIER</span>
              <span className="font-bold text-rose-700">{isSalarySlide ? 'E008: $250k' : '92, 98'}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 27: Reading Statistical Charts (Interactive Quiz Drill)
  if (slide.id === 27) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-3.5 p-1">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {slide.questions?.map((q: any, idx: number) => {
            const isFlipped = activeQuizCard === idx;
            return (
              <div 
                key={idx} 
                onClick={() => setActiveQuizCard(isFlipped ? null : idx)}
                className={`p-4 rounded-xl border cursor-pointer shadow-md transition-all flex flex-col justify-between gap-3 ${
                  isFlipped 
                    ? 'bg-orange-50 border-orange-500 ring-2 ring-orange-500/20' 
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  0{idx + 1}
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {q.q}
                </h5>
                <div className={`p-2 rounded text-[11px] font-medium leading-normal transition-all ${
                  isFlipped ? 'bg-white text-orange-800 border border-orange-200' : 'bg-slate-100 text-slate-500'
                }`}>
                  {isFlipped ? `✓ ${q.a}` : 'Click to reveal answer'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 29: Employee Dataset Table
  if (slide.id === 29) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-3.5 p-1">
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-x-auto">
          <table className="w-full border-collapse text-xs text-center">
            <thead>
              <tr className="bg-blue-900 text-white font-mono text-xs">
                {slide.headers?.map((h: string, idx: number) => (
                  <th key={idx} className="p-2 border border-blue-950">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.rows?.map((row: string[], rIdx: number) => {
                const isOutlier = row[0] === 'E008';
                return (
                  <tr 
                    key={rIdx} 
                    className={`border-b border-slate-200 transition-colors ${
                      isOutlier ? 'bg-amber-100/70 font-bold' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="p-2 font-mono">{row[0]}</td>
                    <td className="p-2">{row[1]}</td>
                    <td className={`p-2 font-mono ${isOutlier ? 'text-orange-700 font-black' : 'text-slate-800'}`}>
                      ${row[2]}
                    </td>
                    <td className="p-2 font-mono">{row[3]}</td>
                    <td className="p-2 font-mono">{row[4]}</td>
                    <td className="p-2 font-mono">{row[5]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-2.5 rounded-xl bg-amber-50 border border-orange-200 text-orange-800 text-xs text-center font-medium shadow-sm">
          ⚠️ {slide.callout}
        </div>
      </div>
    );
  }

  // Slide 30: Calculate and Classify (6 Guided Steps)
  if (slide.id === 30) {
    return (
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col justify-center gap-3 p-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {slide.steps?.map((st: any, idx: number) => {
            const isSelected = activeStepIdx === idx;
            return (
              <div 
                key={idx} 
                onClick={() => setActiveStepIdx(idx)}
                className={`p-3.5 rounded-xl border cursor-pointer shadow-md transition-all flex flex-col justify-between gap-2 ${
                  isSelected 
                    ? 'bg-orange-50 border-orange-500 ring-2 ring-orange-500/20 scale-[1.02]' 
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    isSelected ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {st.num}
                  </span>
                </div>
                <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{st.title}</h5>
                <p className="text-[11px] text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 35: Outro Hero - Think Statistically.
  if (slide.id === 35) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-4 sm:p-8 select-none">
        <div className="relative z-10 flex items-center justify-center my-auto flex-col text-center max-w-3xl mx-auto w-full">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-5 ring-4 ring-orange-500/20">
            <Zap className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {slide.mainTitle}
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-2xl mb-6 leading-relaxed">
            {slide.subtitle}
          </p>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-orange-400 font-mono text-sm font-bold shadow-xl">
            {slide.nextSessionNote}
          </div>
        </div>

        <div className="relative z-10 text-center text-xs text-slate-500 font-mono pt-3 border-t border-slate-800/80 w-full max-w-md">
          Instant Academy • Data Analysis Training Program
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
