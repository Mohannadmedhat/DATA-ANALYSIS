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
  CheckSquare,
  Clock,
  Award,
  ChevronRight,
  AlertTriangle,
  Sliders,
  TrendingUp,
  PieChart,
  Activity,
  Table,
  CheckCircle,
  Compass,
  Target
} from 'lucide-react';

interface Session06SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session06SlideRenderer: React.FC<Session06SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // Interactive State for Bespoke Visual Simulators
  const [activeUnpivotTab, setActiveUnpivotTab] = useState<'wide' | 'unpivoted'>('wide');
  const [selectedJoinType, setSelectedJoinType] = useState<'left' | 'inner' | 'anti'>('left');
  const [activeSlicerRegion, setActiveSlicerRegion] = useState<string>('All');
  const [activeDateQuarter, setActiveDateQuarter] = useState<string>('All');

  // Reset states when slide changes
  useEffect(() => {
    setActiveUnpivotTab('wide');
    setSelectedJoinType('left');
    setActiveSlicerRegion('All');
    setActiveDateQuarter('All');
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
      case 'CheckSquare': return CheckSquare;
      case 'Clock': return Clock;
      case 'Award': return Award;
      default: return Sparkles;
    }
  };

  // =========================================================
  // 1. Slide 01: Hero Cover Slide (Matching Reference Design)
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual
        sessionNumber="06"
        courseTag="Data Analysis Diploma"
        titlePrefix="PIVOT TABLES &"
        titleHighlight="POWER QUERY"
        subtitle="Data Cleaning · Column Transformations · Pivot/Unpivot · Charts & Visual Slicers"
        floatingBadges={[
          { icon: Sparkles, label: 'Data Cleaning & ETL', position: 'top-left', borderColor: 'border-blue-500/50', textColor: 'text-blue-400' },
          { icon: Columns, label: 'Pivot & Unpivot', position: 'top-right', borderColor: 'border-cyan-500/50', textColor: 'text-cyan-400' },
          { icon: Database, label: 'Pivot Tables & Group By', position: 'bottom-left', borderColor: 'border-emerald-500/50', textColor: 'text-emerald-400' },
          { icon: BarChart2, label: 'Charts & Visual Slicers', position: 'bottom-right', borderColor: 'border-purple-500/50', textColor: 'text-purple-400' }
        ]}
        statsCards={[
          { val: '6 Goals', label: 'Core Outcomes', sub: 'ETL • Pivots • Charts' },
          { val: '44 Slides', label: 'Curriculum Depth', sub: 'Power Query & Analytics' },
          { val: 'Visual Labs', label: 'Hands-on Practice', sub: 'Pivots & Slicers Worksheets' }
        ]}
        onStart={onNext}
      />
    );
  }

  // =========================================================
  // 2. Section Divider Slides (Slides 3, 15, 21, 27, 39)
  // =========================================================
  if (slide.type === 'section-divider') {
    const dividerIcons: Record<number, any> = {
      3: Sparkles,
      15: Columns,
      21: Table,
      27: BarChart2,
      39: Award
    };
    const IconComp = dividerIcons[slide.id] || Sparkles;

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 select-none overflow-hidden bg-transparent text-white">
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
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-4 ring-4 ring-orange-500/20">
            <IconComp className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold mb-3">
            {slide.partNumber || 'SECTION'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {slide.sectionTitle || slide.mainTitle}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
            {slide.subtitle}
          </p>
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // 3. Outro Slide (Slide 44 - Exact Reference Match to Image 2)
  // =========================================================
  if (slide.id === 44 || slide.type === 'outro') {
    return (
      <ThankYouVisual 
        sessionNumber="06"
        nextSessionNote="Next Session: Data Modeling &amp; Dashboard Design — Star &amp; Snowflake Schemas"
        nextSessionButtonText="Open Session 07: Data Modeling &amp; Dashboard Design"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={onSwitchSession ? () => onSwitchSession('session-07') : undefined}
      />
    );
  }

  // =========================================================
  // 4. Slide 02: Session Objectives (6 Clean Light Cards)
  // =========================================================
  if (slide.id === 2) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1 select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {slide.cards?.map((card, idx) => {
            const IconComp = getIconComponent(card.iconName);
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
                    <IconComp className="w-5 h-5" />
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
  // 5. Slide 16: Pivot vs Unpivot Concepts (Clean Light Comparative Visual)
  // =========================================================
  if (slide.id === 16) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-5 p-1 select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {/* Card 1: Pivot Operation */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between gap-4 group"
          >
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <RotateCw className="w-5 h-5" />
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
                Rows → Columns
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                <span>Pivot Operation</span>
                <span className="text-xs font-normal text-slate-500">(Long to Wide)</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Converts unique row values into separate column headers, aggregating numerical values underneath to build cross-tabulation summary matrices.
              </p>

              {/* Transformation snippet */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[11px] text-blue-800 space-y-1.5">
                <div className="flex justify-between text-slate-500">
                  <span>Input: [Region, Category, Sales]</span>
                </div>
                <div className="text-slate-900 font-bold flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Output: [Region | East | West | North]</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-100/70 border border-slate-200 text-[11px] text-slate-700 flex items-center justify-between">
              <span className="font-semibold text-slate-500">Power Query Command:</span>
              <span className="font-mono text-blue-700 font-bold">Transform Tab → Pivot Column</span>
            </div>
          </motion.div>

          {/* Card 2: Unpivot Operation */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-orange-400 transition-all flex flex-col justify-between gap-4 group"
          >
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Columns className="w-5 h-5" />
              </div>
              <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 font-mono text-xs font-bold">
                Columns → Rows
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                <span>Unpivot Operation</span>
                <span className="text-xs font-normal text-slate-500">(Wide to Long)</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Converts multiple wide column headers into normalized attribute-value row pairs. Turns un-analyzable spreadsheets into database-ready tables.
              </p>

              {/* Transformation snippet */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[11px] text-orange-800 space-y-1.5">
                <div className="flex justify-between text-slate-500">
                  <span>Input: [Product | Jan_Sales | Feb_Sales | Mar_Sales]</span>
                </div>
                <div className="text-slate-900 font-bold flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Output: [Product | Attribute (Month) | Value]</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-100/70 border border-slate-200 text-[11px] text-slate-700 flex items-center justify-between">
              <span className="font-semibold text-slate-500">Power Query Command:</span>
              <span className="font-mono text-orange-700 font-bold">Right Click → Unpivot Other Columns</span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // =========================================================
  // 6. Light Interactive Pivot / Unpivot Simulator (Slide 17)
  // =========================================================
  if (slide.id === 17) {
    const wideData = [
      { product: 'Laptop Pro', jan: '$12,000', feb: '$14,500', mar: '$15,200' },
      { product: 'Wireless Mouse', jan: '$3,200', feb: '$3,800', mar: '$4,100' },
      { product: 'USB-C Dock', jan: '$5,400', feb: '$6,100', mar: '$5,900' },
    ];

    const unpivotedData = [
      { product: 'Laptop Pro', month: 'Jan Sales', amount: '$12,000' },
      { product: 'Laptop Pro', month: 'Feb Sales', amount: '$14,500' },
      { product: 'Laptop Pro', month: 'Mar Sales', amount: '$15,200' },
      { product: 'Wireless Mouse', month: 'Jan Sales', amount: '$3,200' },
      { product: 'Wireless Mouse', month: 'Feb Sales', amount: '$3,800' },
      { product: 'Wireless Mouse', month: 'Mar Sales', amount: '$4,100' },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        {/* Header Tabs */}
        <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
            <Table className="w-4 h-4 text-orange-500" />
            <span>Interactive Unpivot Converter</span>
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveUnpivotTab('wide')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeUnpivotTab === 'wide' ? 'bg-red-50 text-red-600 border border-red-200 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Wide Layout (Un-analyzable)
            </button>
            <button
              onClick={() => setActiveUnpivotTab('unpivoted')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeUnpivotTab === 'unpivoted' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Unpivoted Long Layout (Pivot Ready)
            </button>
          </div>
        </div>

        {/* Tables Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-800">
                {activeUnpivotTab === 'wide' ? 'Raw Spreadsheet (Columns as Months)' : 'Power Query Result (Rows as Attributes)'}
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                {activeUnpivotTab === 'wide' ? '4 Columns | 3 Rows' : '3 Columns | 9 Rows'}
              </span>
            </div>

            {activeUnpivotTab === 'wide' ? (
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                    <th className="p-2.5 font-bold">Product</th>
                    <th className="p-2.5 font-bold text-amber-600">Jan Sales</th>
                    <th className="p-2.5 font-bold text-amber-600">Feb Sales</th>
                    <th className="p-2.5 font-bold text-amber-600">Mar Sales</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                  {wideData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-2.5 font-sans font-semibold text-slate-900">{row.product}</td>
                      <td className="p-2.5 text-amber-700">{row.jan}</td>
                      <td className="p-2.5 text-amber-700">{row.feb}</td>
                      <td className="p-2.5 text-amber-700">{row.mar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="max-h-[220px] overflow-y-auto pr-1">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                      <th className="p-2.5 font-bold">Product</th>
                      <th className="p-2.5 font-bold text-emerald-700">Attribute (Month)</th>
                      <th className="p-2.5 font-bold text-emerald-700">Value (Amount)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                    {unpivotedData.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="p-2.5 font-sans font-semibold text-slate-900">{row.product}</td>
                        <td className="p-2.5 text-emerald-700">{row.month}</td>
                        <td className="p-2.5 text-emerald-800 font-bold">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Key Takeaway</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeUnpivotTab === 'wide'
                  ? 'Adding a new month column to a wide spreadsheet breaks all existing Pivot Table fields. Wide layouts cannot be filtered easily.'
                  : 'Unpivoting creates standardized Attribute-Value pairs. Now Month becomes a single filterable field in Pivot Tables, Slicers, and Power BI!'}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-900 font-medium">
              <span className="font-bold">Power Query Command:</span> Select static columns → Right Click → <span className="underline">Unpivot Other Columns</span>.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // 7. Light Slicers & Pivot Chart Simulator (Slide 35, 36, 37)
  // =========================================================
  if (slide.id === 35 || slide.id === 36 || slide.id === 37) {
    const rawSales = [
      { region: 'North', quarter: 'Q1', sales: 450, category: 'Electronics' },
      { region: 'North', quarter: 'Q2', sales: 520, category: 'Clothing' },
      { region: 'South', quarter: 'Q1', sales: 280, category: 'Electronics' },
      { region: 'South', quarter: 'Q2', sales: 340, category: 'Decor' },
      { region: 'East', quarter: 'Q1', sales: 350, category: 'Clothing' },
      { region: 'West', quarter: 'Q1', sales: 300, category: 'Electronics' },
    ];

    const filteredSales = rawSales.filter((item) => {
      const matchRegion = activeSlicerRegion === 'All' || item.region === activeSlicerRegion;
      const matchQuarter = activeDateQuarter === 'All' || item.quarter === activeDateQuarter;
      return matchRegion && matchQuarter;
    });

    const totalFilteredRevenue = filteredSales.reduce((acc, curr) => acc + curr.sales, 0);

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Slicers Control Panel */}
          <div className="space-y-3">
            <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-orange-500" /> Region Slicer
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {['All', 'North', 'South', 'East', 'West'].map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setActiveSlicerRegion(reg)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                      activeSlicerRegion === reg
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" /> Timeline Filter
                </span>
              </div>
              <div className="flex gap-1.5">
                {['All', 'Q1', 'Q2'].map((q) => (
                  <button
                    key={q}
                    onClick={() => setActiveDateQuarter(q)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeDateQuarter === q
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Pivot Table & Pivot Chart Output */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Live Table */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <Table className="w-4 h-4 text-emerald-600" /> Live Pivot Output
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Total: ${totalFilteredRevenue}k
                  </span>
                </div>
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
                      <th className="p-2">Region</th>
                      <th className="p-2">Quarter</th>
                      <th className="p-2 text-right">Sales ($k)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                    {filteredSales.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-2 font-sans font-semibold text-slate-900">{item.region}</td>
                        <td className="p-2 text-slate-500">{item.quarter}</td>
                        <td className="p-2 text-right text-emerald-700 font-bold">${item.sales}k</td>
                      </tr>
                    ))}
                    {filteredSales.length === 0 && (
                      <tr>
                        <td colSpan={3} className="p-4 text-center text-slate-400 font-sans">
                          No matching records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dynamic Chart Bars */}
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-orange-500" /> Connected Pivot Chart
                  </span>
                </div>
                <div className="space-y-3 mt-3">
                  {filteredSales.map((item, idx) => {
                    const pct = Math.round((item.sales / 600) * 100);
                    return (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-700 font-medium">{item.region} ({item.quarter})</span>
                          <span className="font-mono text-orange-600 font-bold">${item.sales}k</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // 8. Generic Layout for Standard 2, 3, 4, 6 Clean Light Cards & Rules
  // =========================================================
  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 select-none">
      <div className={`grid gap-4 items-stretch ${
        slide.cards?.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
        slide.cards?.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
        slide.cards?.length === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      }`}>
        {slide.cards?.map((card, idx) => {
          const IconComp = getIconComponent(card.iconName);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`p-5 rounded-2xl bg-white border shadow-sm transition-all flex flex-col justify-between gap-3 group ${
                card.isNegative ? 'border-red-200 bg-red-50/50 hover:border-red-300' : 'border-slate-200/90 hover:shadow-md hover:border-orange-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  card.isNegative ? 'bg-red-100 text-red-600' : 'bg-orange-50 border border-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white'
                }`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400">0{idx + 1}</span>
              </div>
              <div>
                <h4 className={`text-sm font-bold transition-colors ${
                  card.isNegative ? 'text-red-900' : 'text-slate-900 group-hover:text-orange-600'
                }`}>
                  {card.title}
                </h4>
                <p className={`text-xs leading-relaxed mt-1 ${
                  card.isNegative ? 'text-red-700' : 'text-slate-600'
                }`}>
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* Fallback Rules list for best practices */}
        {slide.rules && (
          <div className="col-span-full p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Golden Guidelines</h4>
            {slide.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

