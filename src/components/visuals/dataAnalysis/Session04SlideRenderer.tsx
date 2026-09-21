import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { InstantLogo } from '../../InstantLogo';
import { ThankYouVisual } from './ThankYouVisual';
import { HeroCoverVisual } from './HeroCoverVisual';
import { 
  AlertTriangle, 
  Activity, 
  Target, 
  TrendingUp, 
  Compass, 
  CheckCircle, 
  CheckCircle2,
  Sliders, 
  Zap, 
  Layers, 
  BarChart2, 
  Building, 
  Eye, 
  Search, 
  Globe, 
  Cpu, 
  ArrowRight, 
  ArrowLeft,
  DollarSign,
  HelpCircle,
  Sparkles,
  Award,
  ChevronRight,
  Info,
  Calendar,
  Clock,
  Users,
  Truck,
  FileSpreadsheet,
  Hash,
  Table
} from 'lucide-react';

interface Session04SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session04SlideRenderer: React.FC<Session04SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // Interactive states for bespoke components
  const [activeQuizCard, setActiveQuizCard] = useState<number | null>(null);
  const [outlierActive, setOutlierActive] = useState<boolean>(true);
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const [selectedScaleIdx, setSelectedScaleIdx] = useState<number>(0);
  const [rangeOutlier, setRangeOutlier] = useState<boolean>(false);

  // Helper for Section Divider Slides
  if (slide.type === 'section-divider') {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 select-none overflow-hidden">
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
            <Sparkles className="w-8 h-8" />
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
    return (
      <HeroCoverVisual
        sessionNumber="04"
        courseTag="Data Analysis Diploma"
        titlePrefix="DESCRIPTIVE"
        titleHighlight="STATISTICS PART 2"
        subtitle="Handling Outliers · Z-Score · Covariance & Correlation · Statistics & Date/Time Functions in Excel"
        floatingBadges={[
          { icon: AlertTriangle, label: 'Handling Outliers & Z-Scores', position: 'top-left', borderColor: 'border-blue-500/50', textColor: 'text-blue-400' },
          { icon: Compass, label: 'Covariance & Correlation', position: 'top-right', borderColor: 'border-cyan-500/50', textColor: 'text-cyan-400' },
          { icon: BarChart2, label: 'Excel Statistical Functions', position: 'bottom-left', borderColor: 'border-emerald-500/50', textColor: 'text-emerald-400' },
          { icon: Calendar, label: 'Date & Time Arithmetic', position: 'bottom-right', borderColor: 'border-purple-500/50', textColor: 'text-purple-400' }
        ]}
        statsCards={[
          { val: '6 Goals', label: 'Core Outcomes', sub: 'Outliers • Z-Score • Excel' },
          { val: '52 Slides', label: 'Curriculum Depth', sub: 'Part 1 & Part 2 Unified' },
          { val: 'Visual Labs', label: 'Hands-on Practice', sub: 'Gaussian Curve & Worksheets' }
        ]}
        onStart={onNext}
      />
    );
  }

  // Slide 02: Session Objectives (6 Cards)
  if (slide.id === 2) {
    const iconLookup: Record<string, any> = {
      AlertTriangle,
      Activity,
      Target,
      TrendingUp,
      Compass,
      CheckCircle
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {slide.cards?.map((card: any, idx: number) => {
            const Icon = iconLookup[card.iconName] || Target;
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
                    <Icon className="w-5 h-5" />
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

  // Slide 04: Quick Recap (7 Cards)
  if (slide.id === 4) {
    const iconLookup: Record<string, any> = {
      Target,
      Sliders,
      Zap,
      Activity,
      Layers,
      BarChart2,
      Building
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-stretch">
          {slide.cards?.map((card: any, idx: number) => {
            const Icon = iconLookup[card.iconName] || Activity;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between gap-2.5 ${
                  idx === 6 ? 'col-span-2 sm:col-span-3 lg:col-span-1' : ''
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{card.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-normal mt-0.5">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-600 font-medium">
          💡 These foundations enable us to quantify distributions and rigorously flag deviations from the expected norm.
        </div>
      </div>
    );
  }

  // Slide 06: What Are Outliers?
  if (slide.id === 6) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Definition */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                  Definition &amp; Properties
                </h4>
              </div>
              <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-200 text-xs font-bold text-orange-950">
                A data point significantly different from other observations in the distribution.
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed pt-1">
                {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 italic">
              Crucial Rule: Never delete an outlier without verifying root cause (entry typo vs real black-swan event).
            </div>
          </div>

          {/* Right Column: Real-World Examples */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold">
                  $
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{slide.salaryExample?.title}</h4>
                  <span className="text-[10px] font-mono text-slate-400">HR &amp; PAYROLL COMPENSATION</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {slide.salaryExample?.description}
              </p>
              {/* Mini visual distribution */}
              <div className="w-full bg-slate-100 h-6 rounded-lg relative flex items-center px-3 mt-1">
                {[52, 55, 58, 60, 62, 65, 68, 70].map((v, i) => (
                  <div key={i} style={{ left: `${(v / 320) * 100}%` }} className="absolute w-2 h-2 rounded-full bg-blue-600 -translate-x-1/2" />
                ))}
                <div style={{ left: `${(300 / 320) * 100}%` }} className="absolute w-3 h-3 rounded-full bg-rose-600 ring-2 ring-rose-300 -translate-x-1/2 animate-pulse" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>10 team members ($50k–$70k)</span>
                <span className="text-rose-600 font-bold">Director: $300k (Outlier)</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{slide.salesExample?.title}</h4>
                  <span className="text-[10px] font-mono text-slate-400">E-COMMERCE REVENUE SPIKE</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {slide.salesExample?.description}
              </p>
              <div className="w-full bg-slate-100 h-6 rounded-lg relative flex items-center px-3 mt-1">
                {[1.8, 2.0, 2.1, 1.9, 2.2, 2.0, 2.3].map((v, i) => (
                  <div key={i} style={{ left: `${(v / 42) * 100}%` }} className="absolute w-2 h-2 rounded-full bg-emerald-600 -translate-x-1/2" />
                ))}
                <div style={{ left: `${(40 / 42) * 100}%` }} className="absolute w-3 h-3 rounded-full bg-rose-600 ring-2 ring-rose-300 -translate-x-1/2 animate-pulse" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>Daily Baseline ($2,000)</span>
                <span className="text-rose-600 font-bold">Black Friday ($40,000)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 07: Three Types of Outliers
  if (slide.id === 7) {
    const iconLookup: Record<string, any> = {
      Globe,
      Target,
      Layers
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {slide.types?.map((t: any, idx: number) => {
            const Icon = iconLookup[t.iconName] || Globe;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                      TYPE 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{t.title}</h4>
                  <span className="text-[11px] font-mono text-orange-600 font-semibold">{t.subtitle}</span>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed mt-4">
                    {t.bullets?.map((b: string, bIdx: number) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10.5px] text-slate-500 font-mono">
                  {idx === 0 && '🔍 Easiest to detect using Box Plot & Z-Scores.'}
                  {idx === 1 && '📅 Requires conditional grouping (e.g. Month/Country).'}
                  {idx === 2 && '⏱️ Detected via time-series sequence models.'}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 08: Why Outliers Matter
  if (slide.id === 8) {
    const iconLookup: Record<string, any> = {
      Target,
      Activity,
      Cpu,
      Building
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {slide.cards?.map((c: any, idx: number) => {
            const Icon = iconLookup[c.iconName] || Activity;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-4 group hover:border-orange-300 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-3 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{c.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">{c.description}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                  Risk Factor #{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live impact comparison bar */}
        <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800 shadow-inner">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs text-slate-300">
              Without outlier: <strong className="text-white">Mean = $60k</strong> | With single $300k outlier: <strong className="text-rose-400">Mean jumps to $84k (+40% false inflation!)</strong>
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800 whitespace-nowrap">
            Median remains steady at $60k (Resistant)
          </span>
        </div>
      </div>
    );
  }

  // Slide 09: How Do We Detect Outliers?
  if (slide.id === 9) {
    const iconLookup: Record<string, any> = {
      Eye,
      BarChart2,
      Sliders,
      Target
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        {/* Top 4 Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-stretch">
          {slide.methods?.map((m: any, idx: number) => {
            const Icon = iconLookup[m.iconName] || Eye;
            return (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">METHOD 0{idx + 1}</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{m.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-normal mt-1">{m.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Box Plot Illustration */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">Visual Box Plot Whisker Rule</span>
            <span className="text-[10px] font-mono text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
              WHISKER LIMIT = 1.5 × IQR
            </span>
          </div>

          <div className="w-full relative py-6 px-10 bg-slate-50 rounded-xl border border-slate-200">
            {/* Horizontal Axis */}
            <div className="w-full h-0.5 bg-slate-300 relative flex items-center">
              {/* Left Whisker (Min) */}
              <div style={{ left: '15%' }} className="absolute -top-3 flex flex-col items-center -translate-x-1/2">
                <div className="w-0.5 h-6 bg-slate-700" />
                <span className="text-[10px] font-mono text-slate-600 mt-1 font-bold">Min</span>
              </div>

              {/* Whisker Line Left */}
              <div style={{ left: '15%', width: '20%' }} className="absolute h-0.5 bg-slate-700" />

              {/* Box (Q1 to Q3) */}
              <div style={{ left: '35%', width: '30%' }} className="absolute -top-5 h-10 bg-blue-100/80 border-2 border-blue-600 rounded-xs flex items-center">
                {/* Median Line */}
                <div style={{ left: '45%' }} className="absolute top-0 bottom-0 w-1 bg-orange-500" />
              </div>

              {/* Box Labels */}
              <span style={{ left: '35%' }} className="absolute top-6 -translate-x-1/2 text-[10px] font-mono text-slate-600 font-bold">Q1</span>
              <span style={{ left: '48%' }} className="absolute top-6 -translate-x-1/2 text-[10px] font-mono text-orange-600 font-bold">Median</span>
              <span style={{ left: '65%' }} className="absolute top-6 -translate-x-1/2 text-[10px] font-mono text-slate-600 font-bold">Q3</span>

              {/* Whisker Line Right */}
              <div style={{ left: '65%', width: '20%' }} className="absolute h-0.5 bg-slate-700" />

              {/* Right Whisker (Max) */}
              <div style={{ left: '85%' }} className="absolute -top-3 flex flex-col items-center -translate-x-1/2">
                <div className="w-0.5 h-6 bg-slate-700" />
                <span className="text-[10px] font-mono text-slate-600 mt-1 font-bold">Max</span>
              </div>

              {/* Outliers dots beyond Max */}
              <div style={{ left: '92%' }} className="absolute -top-2 flex flex-col items-center -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-rose-500 ring-2 ring-white shadow-sm flex items-center justify-center text-[8px] text-white font-bold animate-bounce" />
                <span className="text-[9px] font-mono text-rose-600 mt-2 font-bold whitespace-nowrap">Outlier</span>
              </div>
              <div style={{ left: '97%' }} className="absolute -top-2 flex flex-col items-center -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-rose-500 ring-2 ring-white shadow-sm flex items-center justify-center text-[8px] text-white font-bold" />
                <span className="text-[9px] font-mono text-rose-600 mt-2 font-bold whitespace-nowrap">Outlier</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 10: The IQR Rule
  if (slide.id === 10) {
    const axisMin = 0;
    const axisMax = 50;
    const getPct = (val: number) => ((val - axisMin) / (axisMax - axisMin)) * 100;
    const samplePoints = [12, 14, 15, 16, 18, 20, 22];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        {/* Top Formula Banner */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">MATHEMATICAL CRITERION</span>
            <h3 className="text-sm font-bold text-slate-900">
              Outlier if value &lt; Q1 − 1.5×IQR &nbsp;or&nbsp; value &gt; Q3 + 1.5×IQR
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 bg-orange-50 border border-orange-200 rounded-lg text-orange-700">
              Lower Fence: 6.1
            </span>
            <span className="text-xs font-mono font-bold px-3 py-1 bg-orange-50 border border-orange-200 rounded-lg text-orange-700">
              Upper Fence: 29.1
            </span>
          </div>
        </div>

        {/* Calibrated Number Line with Fences */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">Calibrated Boundary Number Line</span>
            <span className="text-xs font-mono text-rose-600 font-bold bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
              Observation 45 flagged outside upper fence
            </span>
          </div>

          <div className="w-full relative py-12 px-6 bg-slate-50/70 rounded-xl border border-slate-200">
            {/* Accepted Region Shading */}
            <div 
              style={{ left: `${getPct(6.1)}%`, width: `${getPct(29.1) - getPct(6.1)}%` }}
              className="absolute top-1/2 -translate-y-1/2 h-10 bg-emerald-500/10 border-x border-emerald-400/40 rounded-sm pointer-events-none"
            />

            {/* Continuous Number Line Bar */}
            <div className="w-full h-1.5 bg-slate-300 rounded-full relative">
              
              {/* Lower Fence (6.1) */}
              <div style={{ left: `${getPct(6.1)}%` }} className="absolute -top-8 flex flex-col items-center -translate-x-1/2 z-10">
                <span className="text-[10px] font-mono text-orange-600 font-bold whitespace-nowrap bg-white px-1.5 py-0.5 rounded border border-orange-200 shadow-xs mb-1">
                  Lower Fence
                </span>
                <div className="w-0.5 h-16 border-l-2 border-dashed border-orange-500" />
                <span className="text-[10px] font-mono text-slate-500 mt-1 font-bold">6.1</span>
              </div>

              {/* Upper Fence (29.1) */}
              <div style={{ left: `${getPct(29.1)}%` }} className="absolute -top-8 flex flex-col items-center -translate-x-1/2 z-10">
                <span className="text-[10px] font-mono text-orange-600 font-bold whitespace-nowrap bg-white px-1.5 py-0.5 rounded border border-orange-200 shadow-xs mb-1">
                  Upper Fence
                </span>
                <div className="w-0.5 h-16 border-l-2 border-dashed border-orange-500" />
                <span className="text-[10px] font-mono text-slate-500 mt-1 font-bold">29.1</span>
              </div>

              {/* Sample Data Points */}
              {samplePoints.map((val) => (
                <div
                  key={val}
                  style={{ left: `${getPct(val)}%` }}
                  className="absolute -top-2 flex flex-col items-center -translate-x-1/2 group cursor-pointer z-20"
                >
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow-sm flex items-center justify-center text-[8px] text-white font-bold" />
                  <span className="text-[9px] font-mono font-bold text-slate-600 -top-5 absolute bg-white px-1 rounded shadow-xs border border-slate-200">
                    {val}
                  </span>
                </div>
              ))}

              {/* Outlier Point (45) */}
              <div
                style={{ left: `${getPct(45)}%` }}
                className="absolute -top-3.5 flex flex-col items-center -translate-x-1/2 z-30"
              >
                <div className="absolute -top-8 bg-rose-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-md flex items-center gap-1 whitespace-nowrap animate-bounce">
                  <AlertTriangle className="w-3 h-3 text-amber-200" />
                  <span>Outlier = 45</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-rose-500 text-white font-bold text-xs flex items-center justify-center shadow-lg ring-4 ring-rose-200">
                  45
                </div>
                <span className="text-[10px] font-mono text-rose-600 font-bold mt-2">45 &gt; 29.1</span>
              </div>

            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed text-center italic">
            Any value falling beyond the inner fences is flagged for review — here, 45 sits far outside the upper fence of 29.1.
          </p>
        </div>
      </div>
    );
  }

  // Slide 12: Z-Score — Standardizing a Value
  if (slide.id === 12) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Definition & Formula */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                DEFINITION &amp; FORMULA
              </span>
              <div className="p-3.5 rounded-xl bg-slate-900 text-white font-mono text-xs border border-slate-800 space-y-1 shadow-inner">
                <div className="text-slate-400 text-[11px]">Formula:</div>
                <div className="text-orange-400 font-bold text-sm">
                  Z = (X − Mean) ÷ Standard Deviation
                </div>
                <div className="text-slate-400 text-[11px] pt-1 border-t border-slate-800">
                  Z = (X − μ) ÷ σ
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed pt-1">
                {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium">
              💡 A Z-score of +2.0 means the value sits exactly 2 standard deviations above average.
            </div>
          </div>

          {/* Right Column: Normal Distribution Bell Curve */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-800">Empirical Rule (68 – 95 – 99.7)</h4>
                <p className="text-xs text-slate-500">Normal distribution standard deviation intervals</p>
              </div>
              <span className="text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">
                BELL CURVE
              </span>
            </div>

            {/* SVG Bell Curve */}
            <div className="w-full bg-slate-50/70 p-4 rounded-xl border border-slate-200 flex flex-col items-center">
              <div className="text-xs font-mono font-bold text-slate-700 mb-2">
                <span className="text-blue-600">68% within ±1σ</span> · <span className="text-indigo-600">95% within ±2σ</span> · <span className="text-purple-600">99.7% within ±3σ</span>
              </div>
              
              <svg viewBox="0 0 500 200" className="w-full max-w-md h-auto">
                <defs>
                  <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="centerGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Outer Bell Curve (Full) */}
                <path
                  d="M 50 170 Q 150 170, 200 80 Q 250 10, 250 10 Q 250 10, 300 80 Q 350 170, 450 170 L 450 170 L 50 170 Z"
                  fill="url(#bellGrad)"
                />
                
                {/* Center ±1σ Region */}
                <path
                  d="M 183 110 Q 220 30, 250 10 Q 280 30, 317 110 L 317 170 L 183 170 Z"
                  fill="url(#centerGrad)"
                />

                {/* Baseline */}
                <line x1="30" y1="170" x2="470" y2="170" stroke="#475569" strokeWidth="2" />

                {/* Mean Line (μ) */}
                <line x1="250" y1="10" x2="250" y2="170" stroke="#0F172A" strokeWidth="2" strokeDasharray="3 3" />
                <text x="250" y="185" textAnchor="middle" fontSize="11" fill="#0F172A" fontFamily="monospace" fontWeight="bold">μ</text>

                {/* Markers */}
                <line x1="183" y1="110" x2="183" y2="170" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
                <text x="183" y="185" textAnchor="middle" fontSize="10" fill="#64748B" fontFamily="monospace">μ−1σ</text>

                <line x1="317" y1="110" x2="317" y2="170" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
                <text x="317" y="185" textAnchor="middle" fontSize="10" fill="#64748B" fontFamily="monospace">μ+1σ</text>

                <line x1="116" y1="150" x2="116" y2="170" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
                <text x="116" y="185" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="monospace">μ−2σ</text>

                <line x1="384" y1="150" x2="384" y2="170" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2" />
                <text x="384" y="185" textAnchor="middle" fontSize="9" fill="#94A3B8" fontFamily="monospace">μ+2σ</text>

                <text x="50" y="185" textAnchor="middle" fontSize="8" fill="#CBD5E1" fontFamily="monospace">μ−3σ</text>
                <text x="450" y="185" textAnchor="middle" fontSize="8" fill="#CBD5E1" fontFamily="monospace">μ+3σ</text>
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-lg bg-blue-50 border border-blue-200">
                <span className="block text-[10px] font-mono text-blue-600 font-bold">±1σ Spread</span>
                <span className="text-xs font-bold text-slate-800">68.2% of Data</span>
              </div>
              <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-200">
                <span className="block text-[10px] font-mono text-indigo-600 font-bold">±2σ Spread</span>
                <span className="text-xs font-bold text-slate-800">95.4% of Data</span>
              </div>
              <div className="p-2 rounded-lg bg-purple-50 border border-purple-200">
                <span className="block text-[10px] font-mono text-purple-600 font-bold">±3σ Spread</span>
                <span className="text-xs font-bold text-slate-800">99.7% of Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 13: Positive, Negative & Zero Z-Scores (3 Distribution Cards)
  if (slide.id === 13) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {/* Negative Z-score */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
                BELOW THE MEAN
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Negative Z-Score</h4>
              <p className="text-xs text-slate-500">Value is smaller than average</p>
            </div>

            {/* SVG Bell with point on left */}
            <div className="w-full bg-slate-50 p-2 rounded-xl border border-slate-200 flex justify-center">
              <svg viewBox="0 0 200 100" className="w-full h-24">
                <path d="M 20 80 Q 70 80, 100 20 Q 130 80, 180 80 Z" fill="#E2E8F0" />
                <line x1="10" y1="80" x2="190" y2="80" stroke="#64748B" strokeWidth="1.5" />
                <line x1="100" y1="20" x2="100" y2="80" stroke="#94A3B8" strokeDasharray="2 2" />
                {/* Point at -1 */}
                <line x1="65" y1="45" x2="65" y2="80" stroke="#F97316" strokeWidth="1.5" />
                <circle cx="65" cy="45" r="5" fill="#F97316" />
                <text x="65" y="94" textAnchor="middle" fontSize="10" fill="#F97316" fontFamily="monospace" fontWeight="bold">Z = −1</text>
              </svg>
            </div>
            <p className="text-[11px] text-slate-600 text-center">
              Value sits to the left of center, below average.
            </p>
          </div>

          {/* Zero Z-score */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                EXACTLY AT CENTER
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Zero Z-Score</h4>
              <p className="text-xs text-slate-500">Value equals the mean</p>
            </div>

            <div className="w-full bg-slate-50 p-2 rounded-xl border border-slate-200 flex justify-center">
              <svg viewBox="0 0 200 100" className="w-full h-24">
                <path d="M 20 80 Q 70 80, 100 20 Q 130 80, 180 80 Z" fill="#E2E8F0" />
                <line x1="10" y1="80" x2="190" y2="80" stroke="#64748B" strokeWidth="1.5" />
                {/* Point at 0 */}
                <line x1="100" y1="20" x2="100" y2="80" stroke="#F97316" strokeWidth="2" />
                <circle cx="100" cy="20" r="5" fill="#F97316" />
                <text x="100" y="94" textAnchor="middle" fontSize="10" fill="#F97316" fontFamily="monospace" fontWeight="bold">Z = 0</text>
              </svg>
            </div>
            <p className="text-[11px] text-slate-600 text-center">
              Value is perfectly typical, coinciding with μ.
            </p>
          </div>

          {/* Positive Z-score */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                ABOVE THE MEAN
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-2">Positive Z-Score</h4>
              <p className="text-xs text-slate-500">Value is greater than average</p>
            </div>

            <div className="w-full bg-slate-50 p-2 rounded-xl border border-slate-200 flex justify-center">
              <svg viewBox="0 0 200 100" className="w-full h-24">
                <path d="M 20 80 Q 70 80, 100 20 Q 130 80, 180 80 Z" fill="#E2E8F0" />
                <line x1="10" y1="80" x2="190" y2="80" stroke="#64748B" strokeWidth="1.5" />
                <line x1="100" y1="20" x2="100" y2="80" stroke="#94A3B8" strokeDasharray="2 2" />
                {/* Point at +1 */}
                <line x1="135" y1="45" x2="135" y2="80" stroke="#F97316" strokeWidth="1.5" />
                <circle cx="135" cy="45" r="5" fill="#F97316" />
                <text x="135" y="94" textAnchor="middle" fontSize="10" fill="#F97316" fontFamily="monospace" fontWeight="bold">Z = +1</text>
              </svg>
            </div>
            <p className="text-[11px] text-slate-600 text-center">
              Value sits to the right of center, above average.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 text-center font-medium">
          A negative Z-score means the value is below the mean; positive means above; zero means it equals the mean exactly.
        </div>
      </div>
    );
  }

  // Slide 14: Interpreting Z-Score Values
  if (slide.id === 14) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Standard Interpretation Matrix</h3>
              <p className="text-xs text-slate-500">Mapping standardized scores to probabilistic rarity</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full border border-orange-200">
              GAUSSIAN THRESHOLDS
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#101B37] text-white font-mono">
                  <th className="p-3.5 border-b border-slate-800 font-bold">Z-Score</th>
                  <th className="p-3.5 border-b border-slate-800 font-bold">Meaning</th>
                  <th className="p-3.5 border-b border-slate-800 font-bold">Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {slide.tableRows?.map((row: any, idx: number) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="p-3.5 font-mono font-bold text-orange-600 whitespace-nowrap">
                      {row.zScore}
                    </td>
                    <td className="p-3.5 text-slate-700 font-medium">
                      {row.meaning}
                    </td>
                    <td className="p-3.5 text-slate-600">
                      {row.interpretation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mini Tail Visual showing Z = +3.5 */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs text-slate-700 font-medium">
                Tail Flag Example: Observation at <strong className="font-mono text-rose-600">Z = +3.5</strong> sits in the top 0.02% of data — flagged as extreme outlier.
              </span>
            </div>
            <span className="text-[11px] font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-200 whitespace-nowrap">
              |Z| &gt; 3 Rule Triggered
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Slide 15: Step-by-Step: Calculating a Z-Score
  if (slide.id === 15) {
    const calc = slide.calculation || {
      dataset: [10, 12, 15, 18, 20],
      targetVal: 20,
      mean: 15,
      sd: 3.69,
      gap: 5.0,
      zResult: 1.35
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">WORKED EXAMPLE</span>
              <h3 className="text-sm font-bold text-slate-900">
                Dataset: 10, 12, 15, 18, 20 — Calculate the Z-score for the value 20
              </h3>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span className="px-2 py-1 bg-slate-100 rounded text-slate-700 font-bold">X = 20</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded font-bold">μ = 15</span>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded font-bold">σ ≈ 3.69</span>
            </div>
          </div>

          {/* Number Line Diagram */}
          <div className="w-full relative py-10 px-8 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-full h-1.5 bg-slate-300 rounded-full relative">
              {/* Ticks */}
              {[10, 12, 15, 18, 20].map((v) => (
                <div
                  key={v}
                  style={{ left: `${((v - 8) / 16) * 100}%` }}
                  className="absolute -top-2 flex flex-col items-center -translate-x-1/2"
                >
                  <div className={`w-4 h-4 rounded-full ${v === 20 ? 'bg-orange-500 ring-4 ring-orange-200' : v === 15 ? 'bg-blue-600' : 'bg-slate-500'} text-white text-[8px] font-bold flex items-center justify-center shadow-xs`} />
                  <span className="text-[10px] font-mono font-bold text-slate-600 mt-1">{v}</span>
                </div>
              ))}

              {/* Mean Marker */}
              <div
                style={{ left: `${((15 - 8) / 16) * 100}%` }}
                className="absolute -top-7 flex flex-col items-center -translate-x-1/2"
              >
                <div className="w-0.5 h-6 bg-blue-600" />
                <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                  Mean = 15
                </span>
              </div>

              {/* Distance Bracket */}
              <div
                style={{ left: `${((15 - 8) / 16) * 100}%`, width: `${((20 - 15) / 16) * 100}%` }}
                className="absolute top-7 flex flex-col items-center"
              >
                <div className="w-full h-0.5 bg-orange-500 relative flex items-center justify-center">
                  <div className="absolute left-0 w-1.5 h-1.5 border-t border-l border-orange-500 rotate-[-45deg]" />
                  <div className="absolute right-0 w-1.5 h-1.5 border-t border-r border-orange-500 rotate-[45deg]" />
                  <span className="bg-white px-2 text-[10px] font-mono font-bold text-orange-600 -translate-y-1/2 border border-orange-200 rounded">
                    X − Mean = 5.0
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Formula calculation steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 font-bold block">STEP 1: DISTANCE</span>
              <div className="text-xs font-mono font-bold text-slate-800 mt-1">
                X − Mean = 20 − 15 = 5.0
              </div>
              <span className="text-[11px] text-slate-500">How many raw units above center</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 font-bold block">STEP 2: DIVIDE BY SD</span>
              <div className="text-xs font-mono font-bold text-slate-800 mt-1">
                5.0 ÷ 3.69 ≈ 1.35
              </div>
              <span className="text-[11px] text-slate-500">Normalize into SD yardsticks</span>
            </div>

            <div className="p-3 rounded-xl bg-orange-50 border border-orange-200">
              <span className="text-[10px] font-mono text-orange-600 font-bold block">STEP 3: RESULT &amp; MEANING</span>
              <div className="text-xs font-mono font-bold text-orange-700 mt-1">
                Z = +1.35 (Not an outlier)
              </div>
              <span className="text-[11px] text-orange-900">Well inside standard |Z| &lt; 3 zone</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 16: Using Z-Score to Flag Outliers
  if (slide.id === 16) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                DETECTION IN PRACTICE
              </span>
              <div className="p-3.5 rounded-xl bg-slate-900 text-white font-mono text-xs border border-slate-800 space-y-1 shadow-inner">
                <div className="text-slate-400 text-[11px]">Threshold Rule:</div>
                <div className="text-rose-400 font-bold text-sm">
                  Flag as outlier if |Z| &gt; 3.0
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed pt-1">
                {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              🛡️ Used extensively in fintech fraud detection: unusual transaction amounts trigger automatic security holds.
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Visualizing the 3σ Cutoff Zone</h4>
              <p className="text-xs text-slate-500">Any point past ±3σ represents &lt;0.3% baseline probability</p>
            </div>

            <div className="w-full bg-slate-50/80 p-4 rounded-xl border border-slate-200 flex flex-col items-center">
              <svg viewBox="0 0 400 160" className="w-full max-w-sm h-auto">
                {/* Bell curve */}
                <path
                  d="M 20 140 Q 120 140, 160 60 Q 200 10, 200 10 Q 200 10, 240 60 Q 280 140, 380 140 Z"
                  fill="#E2E8F0"
                />
                <line x1="10" y1="140" x2="390" y2="140" stroke="#475569" strokeWidth="1.5" />

                {/* Mean Line */}
                <line x1="200" y1="10" x2="200" y2="140" stroke="#64748B" strokeDasharray="3 3" />
                <text x="200" y="153" textAnchor="middle" fontSize="10" fill="#64748B" fontFamily="monospace">Mean (Z = 0)</text>

                {/* +3σ cutoff line */}
                <line x1="320" y1="90" x2="320" y2="140" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="2 2" />
                <text x="320" y="153" textAnchor="middle" fontSize="9" fill="#EF4444" fontFamily="monospace" fontWeight="bold">+3σ</text>

                {/* Outlier point at Z = +4.1 */}
                <line x1="365" y1="125" x2="365" y2="140" stroke="#EF4444" strokeWidth="2" />
                <circle cx="365" cy="125" r="5" fill="#EF4444" />
                <text x="365" y="115" textAnchor="middle" fontSize="9" fill="#EF4444" fontFamily="monospace" fontWeight="bold">Z = +4.1</text>
              </svg>
            </div>

            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 font-medium text-center">
              🚨 <strong>Z = +4.1 Flagged</strong>: Sits 4.1 standard deviations above normal — virtually impossible under normal random chance.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 18: Covariance — Do Two Variables Move Together?
  if (slide.id === 18) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                COVARIANCE DEFINITION
              </span>
              <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs font-bold text-orange-950">
                Measures the directional alignment of joint variability between two variables.
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed pt-1">
                {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 text-slate-300 font-mono text-xs flex justify-between items-center">
              <span>Population: =COVARIANCE.P()</span>
              <span className="text-orange-400">Sample: =COVARIANCE.S()</span>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-800">Quadrant Analysis: Study Hours vs Exam Score</h4>
              <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                BIVARIATE
              </span>
            </div>

            {/* 2D Scatter with mean crosshairs */}
            <div className="w-full h-52 bg-slate-50 rounded-xl border border-slate-200 relative p-4">
              {/* Axes */}
              <div className="absolute left-6 right-4 top-1/2 h-0.5 bg-slate-300 -translate-y-1/2" />
              <div className="absolute top-4 bottom-6 left-1/2 w-0.5 bg-slate-300 -translate-x-1/2" />

              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[9px] font-mono text-slate-400 -rotate-90">Mean Exam</span>
              <span className="absolute left-1/2 bottom-1 -translate-x-1/2 text-[9px] font-mono text-slate-400">Mean Hours</span>

              {/* Data points in Q1 and Q3 */}
              {[
                { x: '20%', y: '80%' },
                { x: '25%', y: '75%' },
                { x: '35%', y: '65%' },
                { x: '40%', y: '60%' },
                { x: '60%', y: '40%' },
                { x: '70%', y: '30%' },
                { x: '75%', y: '25%' },
                { x: '85%', y: '15%' }
              ].map((pt, i) => (
                <div
                  key={i}
                  style={{ left: pt.x, top: pt.y }}
                  className="absolute w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-xs -translate-x-1/2 -translate-y-1/2"
                />
              ))}

              <span className="absolute right-3 top-3 text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                (+)(+) = Positive
              </span>
              <span className="absolute left-7 bottom-7 text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                (−)(−) = Positive
              </span>
            </div>

            <p className="text-[11px] text-slate-500 text-center italic">
              When values exceed their respective means together, their product is positive, yielding positive covariance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Slide 19: Positive Covariance
  if (slide.id === 19) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                DIRECT RELATIONSHIP
              </span>
              <h3 className="text-base font-bold text-slate-900">Study Hours vs Exam Scores</h3>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed pt-1">
                {slide.exampleBox?.bullets?.map((b: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 font-medium">
              📈 Directional Rule: When X goes UP (↑), Y also tends to go UP (↑).
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-800">Positive Trend Scatter Plot</h4>
              <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                UPWARD SLOPE
              </span>
            </div>

            <div className="w-full h-52 bg-slate-50 rounded-xl border border-slate-200 relative p-4">
              <div className="absolute left-6 bottom-6 right-4 h-0.5 bg-slate-400" />
              <div className="absolute left-6 top-4 bottom-6 w-0.5 bg-slate-400" />

              {/* Upward trendline */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="12%" y1="85%" x2="88%" y2="20%" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Data points */}
              {[
                { x: '15%', y: '82%' },
                { x: '25%', y: '78%' },
                { x: '35%', y: '68%' },
                { x: '45%', y: '60%' },
                { x: '55%', y: '48%' },
                { x: '65%', y: '42%' },
                { x: '75%', y: '28%' },
                { x: '85%', y: '22%' }
              ].map((pt, i) => (
                <div
                  key={i}
                  style={{ left: pt.x, top: pt.y }}
                  className="absolute w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-xs -translate-x-1/2 -translate-y-1/2"
                />
              ))}

              <span className="absolute left-1 bottom-1 text-[9px] font-mono text-slate-400">0</span>
              <span className="absolute right-4 bottom-1 text-[9px] font-mono text-slate-400">Study Hours →</span>
              <span className="absolute left-1 top-2 text-[9px] font-mono text-slate-400">Exam Score ↑</span>
            </div>

            <p className="text-[11px] text-slate-500 text-center italic">
              Points cluster along an upward vector, indicating positive covariance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Slide 20: Negative Covariance
  if (slide.id === 20) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                INVERSE RELATIONSHIP
              </span>
              <h3 className="text-base font-bold text-slate-900">Price vs Demand</h3>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed pt-1">
                {slide.exampleBox?.bullets?.map((b: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
              📉 Directional Rule: When X goes UP (↑), Y tends to go DOWN (↓).
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-800">Negative Trend Scatter Plot</h4>
              <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                DOWNWARD SLOPE
              </span>
            </div>

            <div className="w-full h-52 bg-slate-50 rounded-xl border border-slate-200 relative p-4">
              <div className="absolute left-6 bottom-6 right-4 h-0.5 bg-slate-400" />
              <div className="absolute left-6 top-4 bottom-6 w-0.5 bg-slate-400" />

              {/* Downward trendline */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="12%" y1="20%" x2="88%" y2="85%" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Data points */}
              {[
                { x: '15%', y: '22%' },
                { x: '25%', y: '30%' },
                { x: '35%', y: '40%' },
                { x: '45%', y: '48%' },
                { x: '55%', y: '60%' },
                { x: '65%', y: '68%' },
                { x: '75%', y: '78%' },
                { x: '85%', y: '82%' }
              ].map((pt, i) => (
                <div
                  key={i}
                  style={{ left: pt.x, top: pt.y }}
                  className="absolute w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-xs -translate-x-1/2 -translate-y-1/2"
                />
              ))}

              <span className="absolute left-1 bottom-1 text-[9px] font-mono text-slate-400">0</span>
              <span className="absolute right-4 bottom-1 text-[9px] font-mono text-slate-400">Price →</span>
              <span className="absolute left-1 top-2 text-[9px] font-mono text-slate-400">Demand ↑</span>
            </div>

            <p className="text-[11px] text-slate-500 text-center italic">
              As product price escalates, consumer demand contracts systematically.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Slide 22: Correlation — Strength and Direction
  if (slide.id === 22) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-sm font-bold text-slate-900">The Universal Standard: Pearson Correlation (r)</h3>
            <p className="text-xs text-slate-600 mt-1">
              Correlation measures both strength and direction, always strictly normalized between −1.0 and +1.0 regardless of original units.
            </p>
          </div>

          {/* Continuous Scale Bar */}
          <div className="w-full relative py-8 px-8 bg-slate-50 rounded-xl border border-slate-200">
            {/* Gradient Bar */}
            <div className="w-full h-3 rounded-full bg-gradient-to-r from-orange-500 via-slate-300 to-blue-600 relative">
              {/* Markers */}
              <div className="absolute -top-6 left-0 -translate-x-1/2 text-center">
                <span className="text-xs font-mono font-bold text-orange-600 block">−1</span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap">Perfect Negative</span>
              </div>
              <div className="absolute -top-6 left-1/4 -translate-x-1/2 text-center">
                <span className="text-xs font-mono font-bold text-slate-500 block">−0.5</span>
              </div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-center">
                <span className="text-xs font-mono font-bold text-slate-700 block">0</span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap">No Relationship</span>
              </div>
              <div className="absolute -top-6 left-3/4 -translate-x-1/2 text-center">
                <span className="text-xs font-mono font-bold text-slate-500 block">0.5</span>
              </div>
              <div className="absolute -top-6 right-0 translate-x-1/2 text-center">
                <span className="text-xs font-mono font-bold text-blue-600 block">+1</span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap">Perfect Positive</span>
              </div>

              {/* Sample Indicator at r = 0.7 */}
              <div 
                style={{ left: `${((0.7 - (-1)) / 2) * 100}%` }} 
                className="absolute -top-1.5 flex flex-col items-center -translate-x-1/2"
              >
                <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-white shadow-md flex items-center justify-center text-[10px] text-white font-bold animate-pulse" />
                <div className="mt-3 bg-slate-900 text-white px-2.5 py-1 rounded-md text-[10px] font-mono font-bold shadow-md whitespace-nowrap">
                  r = +0.7 (Strong Positive)
                </div>
              </div>
            </div>
          </div>

          {/* 3 Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-center">
              <span className="text-sm font-mono font-bold text-blue-600">+1.0</span>
              <h4 className="text-xs font-bold text-slate-900 mt-1">Perfect Positive</h4>
              <p className="text-[11px] text-slate-600 mt-0.5">Points fall exactly on an upward straight line</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-center">
              <span className="text-sm font-mono font-bold text-slate-700">0.0</span>
              <h4 className="text-xs font-bold text-slate-900 mt-1">No Linear Relationship</h4>
              <p className="text-[11px] text-slate-600 mt-0.5">Variables move completely independently</p>
            </div>
            <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 text-center">
              <span className="text-sm font-mono font-bold text-orange-600">−1.0</span>
              <h4 className="text-xs font-bold text-slate-900 mt-1">Perfect Negative</h4>
              <p className="text-[11px] text-slate-600 mt-0.5">Points fall exactly on a downward straight line</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 23: Interpreting Correlation Strength
  if (slide.id === 23) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Benchmark Interpretation Guide</h3>
              <p className="text-xs text-slate-500">Standard rule-of-thumb tiers for business analysis</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">
              PEARSON CLASSIFICATION
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#101B37] text-white font-mono">
                  <th className="p-3.5 border-b border-slate-800 font-bold">Correlation Range</th>
                  <th className="p-3.5 border-b border-slate-800 font-bold">Strength</th>
                  <th className="p-3.5 border-b border-slate-800 font-bold">Business Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {slide.tiers?.map((row: any, idx: number) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="p-3.5 font-mono font-bold text-slate-900 whitespace-nowrap">
                      {row.range}
                    </td>
                    <td className="p-3.5">
                      <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold ${
                        idx === 0 ? 'bg-emerald-100 text-emerald-800' :
                        idx === 1 ? 'bg-blue-100 text-blue-800' :
                        idx === 2 ? 'bg-indigo-100 text-indigo-800' :
                        idx === 3 ? 'bg-amber-100 text-amber-800' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {row.strength}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-600">
                      {row.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-center font-medium">
            ⚠️ <em>Remember</em>: Correlation implies association, not causation. Always investigate business context before drawing causal conclusions.
          </div>
        </div>
      </div>
    );
  }

  // Slide 24: Reading a Scatter Plot (Trio)
  if (slide.id === 24) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {/* Plot 1: Positive */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
            <div className="text-center">
              <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                POSITIVE CORRELATION
              </span>
              <h4 className="text-xs font-bold text-slate-800 mt-1">Sales vs Marketing Spend</h4>
            </div>

            <div className="w-full h-44 bg-slate-50 rounded-xl border border-slate-200 relative p-3">
              <div className="absolute left-4 bottom-4 right-2 h-0.5 bg-slate-400" />
              <div className="absolute left-4 top-2 bottom-4 w-0.5 bg-slate-400" />
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="15%" y1="80%" x2="85%" y2="20%" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
              {[
                { x: '18%', y: '78%' },
                { x: '28%', y: '70%' },
                { x: '40%', y: '60%' },
                { x: '52%', y: '48%' },
                { x: '65%', y: '40%' },
                { x: '78%', y: '25%' }
              ].map((pt, i) => (
                <div key={i} style={{ left: pt.x, top: pt.y }} className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 -translate-x-1/2 -translate-y-1/2" />
              ))}
            </div>
            <p className="text-[10.5px] text-slate-500 text-center">
              Upward diagonal alignment: high spend reliably pairs with high revenue.
            </p>
          </div>

          {/* Plot 2: Negative */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
            <div className="text-center">
              <span className="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                NEGATIVE CORRELATION
              </span>
              <h4 className="text-xs font-bold text-slate-800 mt-1">Demand vs Price</h4>
            </div>

            <div className="w-full h-44 bg-slate-50 rounded-xl border border-slate-200 relative p-3">
              <div className="absolute left-4 bottom-4 right-2 h-0.5 bg-slate-400" />
              <div className="absolute left-4 top-2 bottom-4 w-0.5 bg-slate-400" />
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="15%" y1="20%" x2="85%" y2="80%" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
              {[
                { x: '18%', y: '25%' },
                { x: '28%', y: '35%' },
                { x: '40%', y: '45%' },
                { x: '52%', y: '55%' },
                { x: '65%', y: '65%' },
                { x: '78%', y: '78%' }
              ].map((pt, i) => (
                <div key={i} style={{ left: pt.x, top: pt.y }} className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 -translate-x-1/2 -translate-y-1/2" />
              ))}
            </div>
            <p className="text-[10.5px] text-slate-500 text-center">
              Downward diagonal alignment: raising prices decreases total market volume.
            </p>
          </div>

          {/* Plot 3: No Correlation */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
            <div className="text-center">
              <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                NO CORRELATION (r ≈ 0)
              </span>
              <h4 className="text-xs font-bold text-slate-800 mt-1">Salary vs Shoe Size</h4>
            </div>

            <div className="w-full h-44 bg-slate-50 rounded-xl border border-slate-200 relative p-3">
              <div className="absolute left-4 bottom-4 right-2 h-0.5 bg-slate-400" />
              <div className="absolute left-4 top-2 bottom-4 w-0.5 bg-slate-400" />
              {[
                { x: '20%', y: '30%' },
                { x: '35%', y: '75%' },
                { x: '50%', y: '25%' },
                { x: '60%', y: '80%' },
                { x: '75%', y: '45%' },
                { x: '30%', y: '50%' },
                { x: '70%', y: '65%' },
                { x: '45%', y: '40%' }
              ].map((pt, i) => (
                <div key={i} style={{ left: pt.x, top: pt.y }} className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 -translate-x-1/2 -translate-y-1/2" />
              ))}
            </div>
            <p className="text-[10.5px] text-slate-500 text-center">
              Scattered cloud without discernible slope; linear correlation coefficient is ~0.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Slide 25: Covariance vs Correlation
  if (slide.id === 25) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Executive Comparison Matrix</h3>
              <p className="text-xs text-slate-500">Choosing the appropriate metric for technical vs reporting workflows</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full border border-orange-200">
              SIDE-BY-SIDE
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#101B37] text-white font-mono">
                  <th className="p-3.5 border-b border-slate-800 font-bold">Criteria</th>
                  <th className="p-3.5 border-b border-slate-800 font-bold text-orange-400">Covariance</th>
                  <th className="p-3.5 border-b border-slate-800 font-bold text-blue-400">Correlation (r)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {slide.rows?.map((row: any, idx: number) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">
                      {row.criteria}
                    </td>
                    <td className="p-3.5 text-slate-700 font-medium">
                      {row.covariance}
                    </td>
                    <td className="p-3.5 text-slate-900 font-semibold bg-blue-50/30">
                      {row.correlation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300">Key Formula Link:</span>
            <span className="text-orange-400 font-bold">r = Cov(X, Y) ÷ (SD(X) × SD(Y))</span>
          </div>
        </div>
      </div>
    );
  }

  // Slide 27: Dataset — Marketing Spend vs Sales
  if (slide.id === 27) {
    const dataset = slide.dataset || [];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Monthly Advertising &amp; Sales Observations</h3>
              <p className="text-xs text-slate-500">Dataset tracked across 8 consecutive operating months (in thousands)</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">
              n = 8 OBSERVATIONS
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#101B37] text-white font-mono">
                  <th className="p-3 border-b border-slate-800 font-bold">Month</th>
                  <th className="p-3 border-b border-slate-800 font-bold text-right text-orange-400">Marketing Spend ($'000)</th>
                  <th className="p-3 border-b border-slate-800 font-bold text-right text-blue-400">Sales ($'000)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono">
                {dataset.map((row: any, idx: number) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="p-3 font-bold text-slate-900 font-sans">{row.month}</td>
                    <td className="p-3 text-right text-slate-700 font-bold">${row.spend}k</td>
                    <td className="p-3 text-right text-slate-900 font-bold">${row.sales}k</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="block text-[10px] font-mono text-slate-400 uppercase font-bold">Total Spend</span>
              <span className="text-sm font-bold text-slate-800">$152,000</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="block text-[10px] font-mono text-slate-400 uppercase font-bold">Total Sales</span>
              <span className="text-sm font-bold text-slate-800">$1,090,000</span>
            </div>
            <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-center">
              <span className="block text-[10px] font-mono text-orange-600 uppercase font-bold">Average Return</span>
              <span className="text-sm font-bold text-orange-700 font-mono">~$7.17 Sales / $1 Spend</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 28: Your Turn — Calculate & Interpret (6 Steps)
  if (slide.id === 28) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 items-stretch">
          {slide.steps?.map((step: any) => {
            const isRevealed = revealedStep >= step.stepNumber;

            return (
              <div
                key={step.stepNumber}
                onClick={() => setRevealedStep(step.stepNumber)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2.5 ${
                  isRevealed
                    ? 'bg-white border-orange-300 shadow-sm'
                    : 'bg-slate-50/80 border-slate-200/80 opacity-70 hover:opacity-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {isRevealed ? 'Solved ✓' : 'Click to solve'}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-normal mt-0.5">{step.instruction}</p>
                </div>

                {isRevealed ? (
                  <div className="p-2 rounded-xl bg-orange-50 border border-orange-200 text-[11px] font-mono text-orange-950 font-bold">
                    {step.solution}
                  </div>
                ) : (
                  <div className="p-2 rounded-xl bg-slate-100 border border-dashed border-slate-300 text-[10px] text-slate-400 text-center font-mono">
                    Click to reveal calculation
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center px-4 py-2.5 bg-slate-900 rounded-xl text-white text-xs font-mono">
          <span>Active Step: {revealedStep} of 6</span>
          <button
            onClick={() => setRevealedStep(6)}
            className="text-orange-400 hover:text-orange-300 font-bold cursor-pointer"
          >
            Reveal All Solutions →
          </button>
        </div>
      </div>
    );
  }

  // Slide 29: What We Covered Today (Summary Grid)
  if (slide.id === 29) {
    const iconLookup: Record<string, any> = {
      AlertTriangle,
      Sliders,
      Target,
      Compass,
      TrendingUp,
      CheckCircle
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {slide.cards?.map((card: any, idx: number) => {
            const Icon = iconLookup[card.iconName] || Target;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{card.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 31: Session Objectives Part 2 (4 Cards)
  if (slide.id === 31) {
    const iconLookup: Record<string, any> = {
      BarChart2,
      Cpu,
      Calendar,
      Building
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {slide.cards?.map((card: any, idx: number) => {
            const Icon = iconLookup[card.iconName] || BarChart2;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-orange-300 transition-all flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 33: Why Excel Statistical Functions Matter
  if (slide.id === 33) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                VALUE PROPOSITION
              </span>
              <div className="p-3.5 rounded-xl bg-orange-50/80 border border-orange-200 text-xs font-bold text-orange-950">
                Formulas turn raw spreadsheet columns into automated, decision-ready answers.
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed pt-1">
                {slide.definitionBox?.bullets?.map((b: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 italic">
              Excel functions provide deterministic, dynamic recalculation that scales across thousands of rows.
            </div>
          </div>

          {/* 3-Step Process Flow */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-center gap-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-800">The 3-Step Analytical Transformation</span>
              <span className="text-[10px] font-mono text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                PIPELINE
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-700 font-bold shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">1. Raw Spreadsheet Data</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Unprocessed rows and columns exported from systems</p>
                </div>
              </div>

              <div className="flex justify-center -my-1">
                <div className="w-0.5 h-4 bg-slate-300" />
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <Hash className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-blue-900">2. Apply a Statistical Function</h4>
                  <p className="text-[11px] text-blue-700 mt-0.5">Syntax-driven automated aggregation formula</p>
                </div>
              </div>

              <div className="flex justify-center -my-1">
                <div className="w-0.5 h-4 bg-slate-300" />
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-900">3. Decision-Ready Business Answer</h4>
                  <p className="text-[11px] text-emerald-700 mt-0.5">Instant clarity ready for executive reports &amp; dashboards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 34: Real-World Applications Across the Business
  if (slide.id === 34) {
    const iconLookup: Record<string, any> = {
      TrendingUp,
      Users,
      DollarSign,
      Target,
      Truck
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-stretch">
          {slide.cards?.map((card: any, idx: number) => {
            const Icon = iconLookup[card.iconName] || TrendingUp;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3 group hover:border-orange-300 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-3 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">{card.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-normal mt-1">{card.description}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                  Sector 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 36: Central Tendency: AVERAGE · MEDIAN · MODE.SNGL
  if (slide.id === 36) {
    const ws = slide.worksheet || {
      colHeader: 'Units Sold',
      values: [42, 38, 55, 61, 29, 47, 33, 47],
      formula: '=AVERAGE(B2:B9)',
      result: '44.0'
    };

    const activeFormulas = [
      { name: 'AVERAGE', syntax: '=AVERAGE(B2:B9)', result: '44.0', note: 'Balance of all values' },
      { name: 'MEDIAN', syntax: '=MEDIAN(B2:B9)', result: '44.5', note: 'Middle sorted value' },
      { name: 'MODE.SNGL', syntax: '=MODE.SNGL(B2:B9)', result: '47', note: 'Most frequent (appears twice)' }
    ];
    const currentF = activeFormulas[activeTab % activeFormulas.length];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                  CENTRAL TENDENCY FUNCTIONS
                </span>
                <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                  EXCEL SYNTAX
                </span>
              </div>

              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
                {activeFormulas.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                      activeTab === i
                        ? 'bg-white text-orange-600 shadow-xs border border-slate-200'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {f.name}()
                  </button>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 text-white font-mono text-xs border border-slate-800 space-y-1 shadow-inner">
                <div className="text-slate-400 text-[11px]">Selected Syntax:</div>
                <div className="text-orange-400 font-bold text-sm">{currentF.syntax}</div>
                <div className="text-emerald-400 font-semibold pt-1 border-t border-slate-800 flex justify-between items-center text-[11px]">
                  <span>Calculated Result:</span>
                  <span className="text-amber-300 font-bold bg-amber-400/20 px-2 py-0.5 rounded">
                    {currentF.result}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                {slide.formulas?.map((f: any, idx: number) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-mono font-bold text-slate-800">
                      <span>{f.name}</span>
                      <span className="text-orange-600">{f.result}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">{f.businessCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <h4 className="text-xs font-bold text-slate-800 font-mono">Workbook Simulation</h4>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Sheet1.xlsx</span>
            </div>

            <div className="rounded-xl border border-slate-300 overflow-hidden shadow-xs bg-white text-xs font-mono">
              <div className="bg-slate-100 px-3 py-1.5 border-b border-slate-300 flex items-center gap-2 text-slate-600">
                <span className="font-bold text-slate-400 italic">fx</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-800 font-bold flex-1">
                  {currentF.syntax}
                </span>
              </div>

              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-slate-200 text-slate-600 text-[11px]">
                    <th className="w-12 py-1 border-r border-b border-slate-300"></th>
                    <th className="w-16 py-1 border-r border-b border-slate-300">A</th>
                    <th className="py-1 border-b border-slate-300">B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="bg-slate-50 font-bold">
                    <td className="py-1 border-r border-slate-200 text-slate-400 bg-slate-100">1</td>
                    <td className="py-1 border-r border-slate-200"></td>
                    <td className="py-1 font-sans">{ws.colHeader}</td>
                  </tr>
                  {ws.values?.map((val: number, i: number) => {
                    const isModeVal = val === 47 && currentF.name === 'MODE.SNGL';
                    return (
                      <tr key={i} className={isModeVal ? 'bg-amber-100/70' : 'bg-blue-50/40'}>
                        <td className="py-0.5 border-r border-slate-200 text-slate-400 bg-slate-100">{i + 2}</td>
                        <td className="py-0.5 border-r border-slate-200"></td>
                        <td className={`py-0.5 ${isModeVal ? 'font-bold text-amber-900' : ''}`}>{val}</td>
                      </tr>
                    );
                  })}
                  <tr className="bg-orange-50/80 font-bold border-t-2 border-orange-400">
                    <td className="py-1 border-r border-slate-200 text-slate-400 bg-slate-100">10</td>
                    <td className="py-1 border-r border-slate-200 text-orange-600 font-sans text-[10px]">Result</td>
                    <td className="py-1 text-orange-600">{currentF.result}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-slate-500 text-center italic">
              Select any function tab above to see how Excel recalculates the dynamic range result.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Slide 37: Counting: COUNT · COUNTA · COUNTBLANK
  if (slide.id === 37) {
    const countModes = [
      { name: 'COUNT', syntax: '=COUNT(B2:B10)', result: '3', desc: 'Counts numbers only (120, 85, 95)' },
      { name: 'COUNTA', syntax: '=COUNTA(B2:B10)', result: '7', desc: 'Counts all non-blank cells' },
      { name: 'COUNTBLANK', syntax: '=COUNTBLANK(B2:B10)', result: '2', desc: 'Flags empty cells needing attention' }
    ];
    const currentM = countModes[activeTab % countModes.length];
    const rawData = ['Shipped', 120, 'Pending', 85, '', 'Shipped', 95, '', 'Delivered'];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                DATA AUDITING FUNCTIONS
              </span>
              
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
                {countModes.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex-1 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                      activeTab === i
                        ? 'bg-white text-orange-600 shadow-xs border border-slate-200'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {m.name}()
                  </button>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 text-white font-mono text-xs border border-slate-800 space-y-1 shadow-inner">
                <div className="text-slate-400 text-[11px]">Active Function:</div>
                <div className="text-orange-400 font-bold text-sm">{currentM.syntax}</div>
                <div className="text-emerald-400 font-semibold pt-1 border-t border-slate-800 flex justify-between items-center text-[11px]">
                  <span>Total Count:</span>
                  <span className="text-amber-300 font-bold bg-amber-400/20 px-2 py-0.5 rounded">
                    {currentM.result}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                {currentM.desc}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900">
              ⚠️ <strong>Common Interview Trap</strong>: =COUNT() ignores text entries completely. Use =COUNTA() when counting names, IDs, or status codes.
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <h4 className="text-xs font-bold text-slate-800 font-mono">Order Log Sheet</h4>
              </div>
              <span className="text-[10px] font-mono text-slate-400">OrderLog.xlsx</span>
            </div>

            <div className="rounded-xl border border-slate-300 overflow-hidden shadow-xs bg-white text-xs font-mono">
              <div className="bg-slate-100 px-3 py-1.5 border-b border-slate-300 flex items-center gap-2 text-slate-600">
                <span className="font-bold text-slate-400 italic">fx</span>
                <span className="bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-800 font-bold flex-1">
                  {currentM.syntax}
                </span>
              </div>

              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-slate-200 text-slate-600 text-[11px]">
                    <th className="w-12 py-1 border-r border-b border-slate-300"></th>
                    <th className="py-1 border-b border-slate-300 font-sans">B (Order Log)</th>
                    <th className="w-24 py-1 border-b border-slate-300 font-sans text-[10px]">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {rawData.map((item, idx) => {
                    const isNum = typeof item === 'number';
                    const isBlank = item === '';
                    let isTarget = false;
                    if (currentM.name === 'COUNT' && isNum) isTarget = true;
                    if (currentM.name === 'COUNTA' && !isBlank) isTarget = true;
                    if (currentM.name === 'COUNTBLANK' && isBlank) isTarget = true;

                    return (
                      <tr key={idx} className={isTarget ? 'bg-orange-50 font-bold' : ''}>
                        <td className="py-0.5 border-r border-slate-200 text-slate-400 bg-slate-100">{idx + 2}</td>
                        <td className="py-0.5">{isBlank ? <span className="text-slate-300 italic">(blank)</span> : item}</td>
                        <td className="py-0.5 text-[10px] text-slate-400">
                          {isNum ? 'Number' : isBlank ? 'Empty' : 'Text'}
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="bg-slate-900 text-white font-bold">
                    <td className="py-1 bg-slate-800 text-slate-400">11</td>
                    <td className="py-1 text-orange-400 font-bold">{currentM.name} Result:</td>
                    <td className="py-1 text-emerald-400">{currentM.result}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 38: Range & Spread: MAX · MIN · STDEV.S · VAR.S
  if (slide.id === 38) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                SPREAD &amp; DISPERSION FORMULAS
              </span>
              <div className="space-y-2">
                {slide.formulas?.map((f: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-slate-900">{f.name}</span>
                      <span className="font-bold text-orange-600">{f.result}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-0.5">{f.syntax}</div>
                    <p className="text-[11px] text-slate-600 mt-1">{f.businessCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-800">Operational Spread Interpretation</h4>
              <p className="text-xs text-slate-500">How much daily volume swings from normal expectation</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
                <span className="text-[10px] font-mono uppercase text-blue-600 font-bold block">Best Day (MAX)</span>
                <span className="text-2xl font-black font-mono text-blue-900 mt-1 block">61</span>
                <span className="text-[10px] text-blue-700">Top peak demand</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-center">
                <span className="text-[10px] font-mono uppercase text-slate-600 font-bold block">Slowest Day (MIN)</span>
                <span className="text-2xl font-black font-mono text-slate-800 mt-1 block">29</span>
                <span className="text-[10px] text-slate-500">Trough volume</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-center">
              <span className="text-[10px] font-mono uppercase text-orange-600 font-bold block">Standard Deviation (STDEV.S)</span>
              <span className="text-3xl font-black font-mono text-orange-600 mt-1 block">±10.78</span>
              <p className="text-xs text-orange-950 mt-1">
                Daily sales typically fluctuate ±10.78 units around the 44.0 unit mean.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 text-white text-xs font-mono flex items-center justify-between">
              <span className="text-slate-400">VAR.S() = (10.78)² =</span>
              <span className="text-amber-400 font-bold">116.29 squared units</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 39: Ranking & Percentiles
  if (slide.id === 39) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Ranking &amp; Percentile Formulas</h3>
              <p className="text-xs text-slate-500">Benchmarking position, cutoffs, and ordered ranks</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full border border-indigo-200">
              ORDER METRICS
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#101B37] text-white font-mono">
                  <th className="p-3 border-b border-slate-800 font-bold">Function</th>
                  <th className="p-3 border-b border-slate-800 font-bold">Syntax &amp; Example</th>
                  <th className="p-3 border-b border-slate-800 font-bold text-center text-orange-400">Result</th>
                  <th className="p-3 border-b border-slate-800 font-bold">Business Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {slide.formulas?.map((row: any, idx: number) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="p-3 font-mono font-bold text-slate-900 whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="p-3 font-mono text-slate-600 text-[11px]">
                      {row.syntax}
                    </td>
                    <td className="p-3 font-mono font-bold text-orange-600 text-center">
                      {row.result}
                    </td>
                    <td className="p-3 text-slate-600 text-xs">
                      {row.businessCase}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span>💡 <strong>LARGE vs SMALL</strong>: =LARGE(range, 2) fetches second-highest; =SMALL(range, 2) fetches second-lowest.</span>
          </div>
        </div>
      </div>
    );
  }

  // Slide 41: Current Date & Building Dates
  if (slide.id === 41) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                DATE GENERATION FUNCTIONS
              </span>
              <div className="space-y-2">
                {slide.functions?.map((f: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-slate-900">{f.name}</span>
                      <span className="font-bold text-orange-600">{f.result}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">{f.syntax}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
              <strong>Business Scenario</strong>: {slide.businessScenario}
            </div>
          </div>

          {/* Calendar Widget Simulation */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-800">Live Dynamic Calendar (January 2026)</h4>
              <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                TODAY() = 26-Jan-2026
              </span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="grid grid-cols-7 gap-1 text-center font-mono text-xs">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                  <span key={d} className="text-[10px] font-bold text-slate-400 py-1">{d}</span>
                ))}
                {[...Array(4)].map((_, i) => <span key={`empty-${i}`} />)}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const isToday = day === 26;
                  return (
                    <div
                      key={day}
                      className={`py-1.5 rounded-md ${
                        isToday
                          ? 'bg-orange-500 text-white font-bold shadow-md animate-pulse'
                          : 'text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 text-white text-xs font-mono flex items-center justify-between">
              <span className="text-slate-400">NOW() Live Clock:</span>
              <span className="text-emerald-400 font-bold">26-Jan-2026 09:41 AM</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 42: Extracting Date Components: DAY() · MONTH() · YEAR()
  if (slide.id === 42) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                DATE DRILLDOWN
              </span>
              <div className="space-y-2">
                {slide.functions?.map((f: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-slate-900">{f.name}</span>
                      <span className="font-bold text-orange-600">{f.result}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">{f.syntax}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
              <strong>Business Scenario</strong>: {slide.businessScenario}
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-center gap-4">
            <span className="text-xs font-bold text-slate-800 text-center">Deconstructing Date: 14-Mar-2026</span>

            <div className="flex flex-col items-center gap-3">
              <div className="w-full p-3 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-slate-500">YEAR</span>
                <span className="text-base font-black font-mono text-slate-900">2026</span>
              </div>

              <div className="w-0.5 h-4 bg-slate-300" />

              <div className="w-full p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-blue-600">MONTH</span>
                <span className="text-base font-black font-mono text-blue-900">3 (March)</span>
              </div>

              <div className="w-0.5 h-4 bg-slate-300" />

              <div className="w-full p-3 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-orange-600">DAY</span>
                <span className="text-base font-black font-mono text-orange-900">14</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 text-center italic mt-1">
              14-Mar-2026 is built from three nested components — broadest to most specific.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Slide 43: Date Math: EDATE() · EOMONTH()
  if (slide.id === 43) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-sm font-bold text-slate-900">Date Math: EDATE() &amp; EOMONTH()</h3>
            <p className="text-xs text-slate-500 mt-1">Projecting contract milestones and accounting period cutoffs</p>
          </div>

          <div className="w-full relative py-12 px-10 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-full h-1 bg-slate-400 relative flex items-center">
              <div style={{ left: '10%' }} className="absolute -top-3.5 flex flex-col items-center -translate-x-1/2">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  A2
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-700 mt-2">14-Mar-2026</span>
                <span className="text-[10px] text-slate-400">Start Date</span>
              </div>

              <div style={{ left: '40%' }} className="absolute -top-3.5 flex flex-col items-center -translate-x-1/2">
                <div className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  EO
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-800 mt-2">31-Mar-2026</span>
                <span className="text-[10px] text-slate-500 font-mono">=EOMONTH(A2, 0)</span>
              </div>

              <div style={{ left: '85%' }} className="absolute -top-3.5 flex flex-col items-center -translate-x-1/2">
                <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  +3M
                </div>
                <span className="text-[11px] font-mono font-bold text-orange-600 mt-2">14-Jun-2026</span>
                <span className="text-[10px] text-orange-500 font-mono">=EDATE(A2, 3)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200">
              <span className="text-xs font-mono font-bold text-orange-700 block">=EDATE(start_date, months)</span>
              <p className="text-xs text-slate-700 mt-1">
                Jumps forward or backward by exact month intervals while preserving the same day of the month.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-800 block">=EOMONTH(start_date, months)</span>
              <p className="text-xs text-slate-700 mt-1">
                Returns the exact last day of the month, accounting automatically for 28, 30, 31, and leap years.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 45: TIME() · HOUR() · MINUTE() · SECOND()
  if (slide.id === 45) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                TIME EXTRACTION &amp; ASSEMBLY
              </span>
              <div className="space-y-2">
                {slide.functions?.map((f: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-slate-900">{f.name}</span>
                      <span className="font-bold text-orange-600">{f.result}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">{f.syntax}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
              <strong>Business Example</strong>: {slide.businessExample}
            </div>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-center items-center gap-4">
            <span className="text-xs font-bold text-slate-800">Timestamp: 14:35:20 (2:35:20 PM)</span>

            <svg viewBox="0 0 200 200" className="w-48 h-48">
              <circle cx="100" cy="100" r="90" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="4" />
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 100 + 75 * Math.sin(angle);
                const y1 = 100 - 75 * Math.cos(angle);
                const x2 = 100 + 85 * Math.sin(angle);
                const y2 = 100 - 85 * Math.cos(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#64748B" strokeWidth="2" />;
              })}

              <line x1="100" y1="100" x2="145" y2="110" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
              <line x1="100" y1="100" x2="70" y2="155" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="100" y1="100" x2="155" y2="135" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
              <circle cx="100" cy="100" r="4" fill="#F97316" />
            </svg>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2 py-1 bg-slate-900 text-white rounded font-bold">HOUR: 14</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded font-bold">MIN: 35</span>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded font-bold">SEC: 20</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Slide 47: DATEDIF() · NETWORKDAYS() · WORKDAY()
  if (slide.id === 47) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-6">
          <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-center flex flex-col items-center">
            <span className="text-orange-400 font-bold text-base">=NETWORKDAYS(A2, B2)</span>
            <div className="flex items-center gap-8 text-xs text-slate-400 mt-2">
              <span>A2: Start Date of Range</span>
              <span>B2: End Date of Range</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#101B37] text-white font-mono">
                  <th className="p-3.5 border-b border-slate-800 font-bold">Function</th>
                  <th className="p-3.5 border-b border-slate-800 font-bold">Syntax &amp; Example</th>
                  <th className="p-3.5 border-b border-slate-800 font-bold">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {slide.functions?.map((row: any, idx: number) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="p-3.5 font-mono font-bold text-slate-900 whitespace-nowrap">
                      {row.name}
                    </td>
                    <td className="p-3.5 font-mono text-slate-600 text-[11px]">
                      {row.syntax}
                    </td>
                    <td className="p-3.5 text-orange-600 font-bold font-mono">
                      {row.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
            📌 <strong>Difference</strong>: =DATEDIF() calculates raw elapsed days/months/years, whereas =NETWORKDAYS() automatically removes weekends and holidays.
          </div>
        </div>
      </div>
    );
  }

  // Slide 48: Business Scenarios (4 Cards)
  if (slide.id === 48) {
    const iconLookup: Record<string, any> = {
      Truck,
      Users,
      Calendar,
      Clock
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {slide.scenarios?.map((sc: any, idx: number) => {
            const Icon = iconLookup[sc.iconName] || Calendar;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3 group hover:border-orange-300 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-2 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{sc.title}</h4>
                  <div className="p-2 rounded-lg bg-slate-900 text-orange-400 font-mono text-xs font-bold my-2">
                    {sc.formula}
                  </div>
                  <p className="text-xs text-slate-600">{sc.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 49: Master Reference Table
  if (slide.id === 49) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Master Directory — All Functions at a Glance</h3>
              <p className="text-xs text-slate-500">Every formula covered in Session 04 indexed by analytical objective</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">
              22 FUNCTIONS
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#101B37] text-white font-mono">
                  <th className="p-3 border-b border-slate-800 font-bold w-1/3">Category</th>
                  <th className="p-3 border-b border-slate-800 font-bold text-orange-400">Functions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono text-xs">
                {slide.categories?.map((cat: any, idx: number) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                    <td className="p-3 font-bold text-slate-900 font-sans">{cat.category}</td>
                    <td className="p-3 text-slate-700">{cat.functions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Slide 50: Session Summary (4 Cards)
  if (slide.id === 50) {
    const iconLookup: Record<string, any> = {
      Target,
      BarChart2,
      Calendar,
      Clock
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {slide.cards?.map((c: any, idx: number) => {
            const Icon = iconLookup[c.iconName] || Target;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{c.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1.5">{c.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Slide 51: Key Takeaways
  if (slide.id === 51) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Five Golden Rules for Production Analytics</h3>
              <p className="text-xs text-slate-500">Core principles every data professional must carry into practice</p>
            </div>
          </div>

          <div className="space-y-3">
            {slide.takeaways?.map((t: string, idx: number) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Slide 52: Outro Hero - From Formula to Insight
  if (slide.id === 52) {
    return (
      <ThankYouVisual 
        sessionNumber="04"
        nextSessionNote="Next Session: Advanced Functions &amp; Power Query — XLOOKUP, Nested IFs &amp; ETL"
        nextSessionButtonText="Open Session 05: Advanced Functions &amp; Power Query"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={onSwitchSession ? () => onSwitchSession('session-05') : undefined}
      />
    );
  }

  // Fallback for any unanticipated slide
  return (
    <div className="p-6 bg-white rounded-2xl border border-slate-200 text-slate-800">
      <h3 className="text-lg font-bold">{slide.mainTitle}</h3>
      <p className="text-sm text-slate-600 mt-2">{slide.subtitle}</p>
    </div>
  );
};
