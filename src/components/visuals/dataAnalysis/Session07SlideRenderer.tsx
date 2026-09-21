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
  Columns, 
  RotateCw, 
  Database, 
  Key, 
  Network, 
  Layout, 
  Palette, 
  Type, 
  Square, 
  Grid, 
  PieChart, 
  Sliders, 
  ExternalLink, 
  Award, 
  Table, 
  Check, 
  SlidersHorizontal,
  GitCommit,
  GitBranch,
  HelpCircle,
  Share2
} from 'lucide-react';

interface Session07SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session07SlideRenderer: React.FC<Session07SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // Interactive State for Bespoke Visual Simulators
  const [activePivotMode, setActivePivotMode] = useState<'pivot' | 'unpivot'>('pivot');
  const [activePivotExample, setActivePivotExample] = useState<'quarter' | 'monthly' | 'country'>('quarter');
  const [selectedUserKey, setSelectedUserKey] = useState<number | null>(11);
  const [activeSplitStep, setActiveSplitStep] = useState<'split' | 'apply' | 'combine'>('split');
  const [selectedStarDim, setSelectedStarDim] = useState<string | null>('PRODUCT');
  const [selectedSnowflakeDim, setSelectedSnowflakeDim] = useState<string | null>('Date');
  const [selectedGalaxyFact, setSelectedGalaxyFact] = useState<'sales' | 'inventory'>('sales');

  // Reset states when slide changes
  useEffect(() => {
    setActivePivotMode('pivot');
    setActivePivotExample('quarter');
    setSelectedUserKey(11);
    setActiveSplitStep('split');
    setSelectedStarDim('PRODUCT');
    setSelectedSnowflakeDim('Date');
    setSelectedGalaxyFact('sales');
  }, [slide.id]);

  // Icon Mapping Helper
  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case 'RotateCw': return RotateCw;
      case 'Key': return Key;
      case 'Database': return Database;
      case 'Layers': return Layers;
      case 'Network': return Network;
      case 'Layout': return Layout;
      case 'Palette': return Palette;
      case 'Type': return Type;
      case 'Square': return Square;
      case 'Grid': return Grid;
      case 'PieChart': return PieChart;
      case 'Sliders': return Sliders;
      case 'Columns': return Columns;
      default: return Sparkles;
    }
  };

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE (Dark Theme)
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual
        sessionNumber="07"
        courseTag="Data Analysis Diploma"
        titlePrefix="EXCEL DATA MODELING &"
        titleHighlight="DASHBOARD DESIGN"
        subtitle="Pivot/Unpivot · PK/FK Relationships · Group By · Star & Snowflake Schemas · UI/UX Rules"
        floatingBadges={[
          { icon: RotateCw, label: 'Pivot & Unpivot Engine', position: 'top-left', borderColor: 'border-blue-500/50', textColor: 'text-blue-400' },
          { icon: Key, label: 'Primary & Foreign Keys', position: 'top-right', borderColor: 'border-cyan-500/50', textColor: 'text-cyan-400' },
          { icon: Network, label: 'Star & Snowflake Schemas', position: 'bottom-left', borderColor: 'border-emerald-500/50', textColor: 'text-emerald-400' },
          { icon: Layout, label: '6 Rules of Dashboard Design', position: 'bottom-right', borderColor: 'border-purple-500/50', textColor: 'text-purple-400' }
        ]}
        statsCards={[
          { val: '6 Goals', label: 'Core Outcomes', sub: 'Modeling • Schemas • UI' },
          { val: '25 Slides', label: 'Curriculum Depth', sub: 'Data Modeling & UX' },
          { val: 'Visual Labs', label: 'Hands-on Practice', sub: 'PK/FK & Schemas Worksheets' }
        ]}
        onStart={onNext}
      />
    );
  }

  // =========================================================
  // SECTION DIVIDER SLIDES (Slides 3, 7, 10, 13, 22 - Dark)
  // =========================================================
  if (slide.type === 'section-divider') {
    const dividerIcons: Record<number, any> = {
      3: RotateCw,
      7: Database,
      10: Layers,
      13: Network,
      22: Layout
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
            <IconComp className="w-8 h-8 text-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold mb-3">
            {slide.partNumber || 'SECTION'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {slide.sectionTitle || slide.mainTitle}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          {slide.subtitle && (
            <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
              {slide.subtitle}
            </p>
          )}
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 02 & 24: SIX CARDS GRID (Light Theme)
  // =========================================================
  if (slide.type === 'six-cards' || slide.id === 2 || slide.id === 24) {
    return (
      <div className="w-full h-full flex flex-col justify-center px-2 py-1 select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-5xl mx-auto w-full">
          {(slide.cards || []).map((card, idx) => {
            const IconComp = getIconComponent(card.iconName);
            const numStr = (idx + 1).toString().padStart(2, '0');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-black text-[#FE862A] tracking-wider font-mono">
                      {numStr}.
                    </span>
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100/80 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
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
  // SLIDE 04: PIVOT VS UNPIVOT CONCEPTS (PDF Page 2)
  // =========================================================
  if (slide.id === 4) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="flex items-center justify-center gap-3 mb-3">
          <button
            onClick={() => setActivePivotMode('pivot')}
            className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activePivotMode === 'pivot' 
                ? 'bg-[#1751B9] text-white shadow-md shadow-blue-500/20' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <RotateCw className="w-4 h-4" />
            <span>Pivot: Rows to Columns</span>
          </button>
          <button
            onClick={() => setActivePivotMode('unpivot')}
            className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activePivotMode === 'unpivot' 
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-500/20' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Columns className="w-4 h-4" />
            <span>Unpivot: Wide to Long Format</span>
          </button>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm mb-3">
          <h4 className="text-xs font-bold text-[#FE862A] uppercase tracking-wider mb-1">
            {activePivotMode === 'pivot' ? 'Pivot Operation Definition' : 'Unpivot Operation Definition'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {activePivotMode === 'pivot' 
              ? 'A data transformation operation that converts unique values from rows into separate columns, usually with aggregation (e.g., SUM, COUNT, AVG).' 
              : 'A data transformation operation that converts columns into rows, transforming wide-format data into long-format analytical data.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center flex-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col h-full justify-center">
            <div className="text-xs font-bold text-slate-600 mb-2 flex items-center justify-between">
              <span>{activePivotMode === 'pivot' ? 'Raw Rows Format (Input)' : 'Wide Columns Format (Input)'}</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[10px] font-bold border border-slate-200">Source</span>
            </div>
            {activePivotMode === 'pivot' ? (
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-2.5 border-r border-slate-200">Attributes</th>
                      <th className="p-2.5">Values</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['A1', 'A2', 'A3', 'A1', 'A2', 'A3'].map((attr, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                        <td className="p-2.5 border-r border-slate-200 font-bold text-amber-600">{attr}</td>
                        <td className="p-2.5 text-blue-600 font-bold font-mono">V{idx + 1}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-2.5 border-r border-slate-200">A1</th>
                      <th className="p-2.5 border-r border-slate-200">A2</th>
                      <th className="p-2.5">A3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-slate-100">
                      <td className="p-2.5 border-r border-slate-200 text-blue-600 font-bold font-mono">V1</td>
                      <td className="p-2.5 border-r border-slate-200 text-blue-600 font-bold font-mono">V2</td>
                      <td className="p-2.5 text-blue-600 font-bold font-mono">V3</td>
                    </tr>
                    <tr className="bg-slate-50/60">
                      <td className="p-2.5 border-r border-slate-200 text-blue-600 font-bold font-mono">V4</td>
                      <td className="p-2.5 border-r border-slate-200 text-blue-600 font-bold font-mono">V5</td>
                      <td className="p-2.5 text-blue-600 font-bold font-mono">V6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col h-full justify-center">
            <div className="text-xs font-bold text-slate-600 mb-2 flex items-center justify-between">
              <span>{activePivotMode === 'pivot' ? 'Pivoted Columns Format (Output)' : 'Unpivoted Long Format (Output)'}</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">Transformed</span>
            </div>
            {activePivotMode === 'pivot' ? (
              <div className="overflow-x-auto rounded-xl border border-blue-200">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-50 text-blue-900 font-bold border-b border-blue-200">
                      <th className="p-2.5 border-r border-blue-200">A1</th>
                      <th className="p-2.5 border-r border-blue-200">A2</th>
                      <th className="p-2.5">A3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-slate-100">
                      <td className="p-2.5 border-r border-slate-200 text-emerald-600 font-bold font-mono">V1</td>
                      <td className="p-2.5 border-r border-slate-200 text-emerald-600 font-bold font-mono">V2</td>
                      <td className="p-2.5 text-emerald-600 font-bold font-mono">V3</td>
                    </tr>
                    <tr className="bg-slate-50/60">
                      <td className="p-2.5 border-r border-slate-200 text-emerald-600 font-bold font-mono">V4</td>
                      <td className="p-2.5 border-r border-slate-200 text-emerald-600 font-bold font-mono">V5</td>
                      <td className="p-2.5 text-emerald-600 font-bold font-mono">V6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-cyan-200">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-cyan-50 text-cyan-900 font-bold border-b border-cyan-200">
                      <th className="p-2.5 border-r border-cyan-200">Attribute</th>
                      <th className="p-2.5">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { a: 'A1', v: 'V1' },
                      { a: 'A2', v: 'V2' },
                      { a: 'A3', v: 'V3' },
                      { a: 'A1', v: 'V4' },
                      { a: 'A2', v: 'V5' },
                      { a: 'A3', v: 'V6' }
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                        <td className="p-2.5 border-r border-slate-200 text-amber-600 font-bold">{row.a}</td>
                        <td className="p-2.5 text-emerald-600 font-bold font-mono">{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: PIVOT VS UNPIVOT EXAMPLES (PDF Page 3)
  // =========================================================
  if (slide.id === 5) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        {/* Example Selector */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <button
            onClick={() => setActivePivotExample('quarter')}
            className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              activePivotExample === 'quarter'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <span>Example 1: Yearly Credit Scores</span>
          </button>
          <button
            onClick={() => setActivePivotExample('monthly')}
            className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              activePivotExample === 'monthly'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <span>Example 2: Monthly Products</span>
          </button>
          <button
            onClick={() => setActivePivotExample('country')}
            className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              activePivotExample === 'country'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <span>Example 3: Country Profits</span>
          </button>
        </div>

        {/* Example Content Display */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex-1 flex flex-col justify-center">
          {activePivotExample === 'quarter' ? (
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Transforming Multi-Year Header Columns into Normalized Rows
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-700 mb-2">Unpivoted Wide Format</div>
                  <table className="w-full text-xs text-left border-collapse bg-white border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100 font-bold">
                        <th className="p-2 border-r border-slate-200">Year</th>
                        <th className="p-2">CreditScore</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100"><td className="p-2 border-r border-slate-200">2013</td><td className="p-2 font-mono font-bold text-blue-600">60</td></tr>
                      <tr className="border-b border-slate-100"><td className="p-2 border-r border-slate-200">2015</td><td className="p-2 font-mono font-bold text-blue-600">50</td></tr>
                      <tr className="border-b border-slate-100"><td className="p-2 border-r border-slate-200">2011</td><td className="p-2 font-mono font-bold text-blue-600">40</td></tr>
                      <tr><td className="p-2 border-r border-slate-200">2012</td><td className="p-2 font-mono font-bold text-blue-600">30</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200">
                  <div className="text-xs font-bold text-blue-900 mb-2">Pivoted Matrix Format</div>
                  <table className="w-full text-xs text-center border-collapse bg-white border border-blue-200 rounded-lg">
                    <thead>
                      <tr className="bg-blue-600 text-white font-bold">
                        <th className="p-2 border-r border-blue-500">2011</th>
                        <th className="p-2 border-r border-blue-500">2012</th>
                        <th className="p-2 border-r border-blue-500">2013</th>
                        <th className="p-2">2015</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="font-mono font-bold text-slate-800">
                        <td className="p-2 border-r border-slate-200">40</td>
                        <td className="p-2 border-r border-slate-200">30</td>
                        <td className="p-2 border-r border-slate-200">60</td>
                        <td className="p-2">50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : activePivotExample === 'monthly' ? (
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Unpivoting Product Month Columns (January, February, March) into Unpivoted Attribute/Value Rows
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-700 mb-2 font-mono">Wide Format (Product, January, February, March)</div>
                  <table className="w-full text-xs text-left border-collapse bg-white border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100 font-bold">
                        <th className="p-1.5 border-r border-slate-200">Product</th>
                        <th className="p-1.5 border-r border-slate-200">Jan</th>
                        <th className="p-1.5 border-r border-slate-200">Feb</th>
                        <th className="p-1.5">Mar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100"><td className="p-1.5 border-r font-bold">Snickers</td><td className="p-1.5 border-r">93</td><td className="p-1.5 border-r">68</td><td className="p-1.5">84</td></tr>
                      <tr className="border-b border-slate-100"><td className="p-1.5 border-r font-bold">Mars</td><td className="p-1.5 border-r">74</td><td className="p-1.5 border-r">78</td><td className="p-1.5">78</td></tr>
                      <tr><td className="p-1.5 border-r font-bold">Twix</td><td className="p-1.5 border-r">91</td><td className="p-1.5 border-r">75</td><td className="p-1.5">84</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                  <div className="text-xs font-bold text-emerald-900 mb-2 font-mono">Unpivoted Schema (Row, Column, Value)</div>
                  <div className="text-xs font-mono space-y-1 text-slate-800">
                    <div>[Galaxy, January] ➔ <span className="font-bold text-emerald-700">85</span></div>
                    <div>[Galaxy, February] ➔ <span className="font-bold text-emerald-700">80</span></div>
                    <div>[Galaxy, March] ➔ <span className="font-bold text-emerald-700">54</span></div>
                    <div>[Mars, January] ➔ <span className="font-bold text-emerald-700">74</span></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Country, Year, Profit Data Transformation Matrix
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium leading-relaxed">
                Converting structured country sales rows (USA, France, Germany) across multiple fiscal years into normalized unpivoted columns for database ingestion.
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 06: PRIMARY KEY (PK) & FOREIGN KEY (FK) SIMULATOR (PDF Page 4)
  // =========================================================
  if (slide.id === 6) {
    const users = [
      { user_id: 10, email: 'sadio@example.com', name: 'Sadio' },
      { user_id: 11, email: 'mo@example.com', name: 'Mohamed' },
      { user_id: 12, email: 'rinsola@example.com', name: 'Rinsola' },
      { user_id: 13, email: 'amalie@example.com', name: 'Amalie' }
    ];

    const orders = [
      { order_no: 93, user_id: 11, product_sku: 123 },
      { order_no: 94, user_id: 11, product_sku: 789 },
      { order_no: 95, user_id: 13, product_sku: 789 },
      { order_no: 96, user_id: 10, product_sku: 101 }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
              <Key className="w-4 h-4 text-blue-600" />
              <span>Primary Key (PK)</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              A column (or set of columns) that uniquely identifies each record in a table. It cannot contain duplicate or null values.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">
              <Key className="w-4 h-4 text-cyan-600" />
              <span>Foreign Key (FK)</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              A column in one table that references the Primary Key of another table to create a relational connection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start flex-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Parent Table: users</h4>
              <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">PK: user_id</span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white font-bold">
                    <th className="p-2.5 border-r border-blue-500">user_id (PK)</th>
                    <th className="p-2.5 border-r border-blue-500">email</th>
                    <th className="p-2.5">name</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr
                      key={u.user_id}
                      onClick={() => setSelectedUserKey(u.user_id)}
                      className={`cursor-pointer transition-colors ${
                        selectedUserKey === u.user_id 
                          ? 'bg-blue-50 border-l-4 border-l-blue-600 font-bold text-blue-950' 
                          : 'bg-white hover:bg-slate-50 border-b border-slate-100'
                      }`}
                    >
                      <td className="p-2.5 border-r border-slate-200 text-blue-600 font-mono font-bold">{u.user_id}</td>
                      <td className="p-2.5 border-r border-slate-200 text-slate-700">{u.email}</td>
                      <td className="p-2.5 text-slate-800 font-semibold">{u.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Child Table: orders</h4>
              <span className="text-[10px] text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">FK: user_id</span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-cyan-600 text-white font-bold">
                    <th className="p-2.5 border-r border-cyan-500">order_no</th>
                    <th className="p-2.5 border-r border-cyan-500">user_id (FK)</th>
                    <th className="p-2.5">product_sku</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, idx) => (
                    <tr
                      key={idx}
                      className={`transition-colors ${
                        selectedUserKey === o.user_id 
                          ? 'bg-cyan-50 border-l-4 border-l-cyan-600 font-bold text-cyan-950' 
                          : 'bg-white border-b border-slate-100'
                      }`}
                    >
                      <td className="p-2.5 border-r border-slate-200 text-slate-600">{o.order_no}</td>
                      <td className="p-2.5 border-r border-slate-200 text-cyan-700 font-mono font-bold">{o.user_id}</td>
                      <td className="p-2.5 text-slate-700">{o.product_sku}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 08: GROUP BY RULES & CONCEPT (PDF Page 5)
  // =========================================================
  if (slide.id === 8) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm mb-3">
          <h4 className="text-xs font-bold text-[#FE862A] uppercase tracking-wider mb-1">
            Group By Definition &amp; Core Rules
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            GroupBy is used to group data based on a specific column and perform calculations like sum, count, or average. It helps summarize data and extract meaningful insights quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center flex-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm col-span-1">
            <h4 className="text-xs font-bold text-slate-800 uppercase mb-3">2 Essential Rules</h4>
            <div className="space-y-3 text-xs font-semibold">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900">
                1- Columns to Group by (e.g. genre)
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                2- Aggregation Function (e.g. SUM of qty)
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm col-span-2 flex flex-col justify-center">
            <div className="text-xs font-bold text-slate-700 mb-2">Raw Dataset ➔ Grouped Total Summary</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-700 mb-1">Raw Table (title, genre, qty)</div>
                <div className="space-y-1 font-mono text-[11px] text-slate-600">
                  <div>book 1: adventure (4)</div>
                  <div>book 2: fantasy (5)</div>
                  <div>book 3: romance (2)</div>
                  <div>book 4: adventure (3)</div>
                  <div>book 5: fantasy (3)</div>
                  <div>book 6: romance (1)</div>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="font-bold text-emerald-900 mb-1">Grouped Summary</div>
                <div className="space-y-2 font-mono text-[11px]">
                  <div className="p-1.5 rounded bg-white border border-emerald-200 flex justify-between"><span>adventure</span> <span className="font-bold text-emerald-700">7</span></div>
                  <div className="p-1.5 rounded bg-white border border-emerald-200 flex justify-between"><span>fantasy</span> <span className="font-bold text-emerald-700">8</span></div>
                  <div className="p-1.5 rounded bg-white border border-emerald-200 flex justify-between"><span>romance</span> <span className="font-bold text-emerald-700">3</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 09: GROUP BY - HOW IT WORKS (PDF Page 6)
  // =========================================================
  if (slide.id === 9) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="flex items-center justify-center gap-2 mb-3">
          {(['split', 'apply', 'combine'] as const).map((step, idx) => (
            <button
              key={step}
              onClick={() => setActiveSplitStep(step)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSplitStep === step 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white text-blue-700 flex items-center justify-center text-[10px] font-black">
                {idx + 1}
              </span>
              <span>{step}</span>
            </button>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-800 mb-2">1. Input Dataset</div>
              <table className="w-full text-xs text-left border-collapse bg-white rounded-lg border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <th className="p-1.5 border-r border-slate-200">key</th>
                    <th className="p-1.5">data</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { k: 'A', v: 1 },
                    { k: 'B', v: 2 },
                    { k: 'C', v: 3 },
                    { k: 'A', v: 4 },
                    { k: 'B', v: 5 },
                    { k: 'C', v: 6 }
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="p-1.5 border-r border-slate-200 text-amber-600 font-bold">{r.k}</td>
                      <td className="p-1.5 text-slate-700 font-mono">{r.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-800 mb-2">2. Split &amp; Apply (SUM)</div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 flex justify-between">
                  <span className="font-bold text-amber-800">Group A: [1, 4]</span>
                  <span className="font-mono text-emerald-700 font-bold">Sum = 5</span>
                </div>
                <div className="p-2.5 rounded-lg bg-cyan-50 border border-cyan-200 flex justify-between">
                  <span className="font-bold text-cyan-800">Group B: [2, 5]</span>
                  <span className="font-mono text-emerald-700 font-bold">Sum = 7</span>
                </div>
                <div className="p-2.5 rounded-lg bg-purple-50 border border-purple-200 flex justify-between">
                  <span className="font-bold text-purple-800">Group C: [3, 6]</span>
                  <span className="font-mono text-emerald-700 font-bold">Sum = 9</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-800 mb-2">3. Combine Result</div>
              <table className="w-full text-xs text-left border-collapse bg-white rounded-lg border border-emerald-200">
                <thead>
                  <tr className="bg-emerald-600 text-white font-bold">
                    <th className="p-1.5 border-r border-emerald-500">key</th>
                    <th className="p-1.5">total_sum</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { k: 'A', sum: 5 },
                    { k: 'B', sum: 7 },
                    { k: 'C', sum: 9 }
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="p-1.5 border-r border-slate-200 text-amber-600 font-bold">{r.k}</td>
                      <td className="p-1.5 text-emerald-600 font-bold font-mono">{r.sum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 11 & 12: APPEND VS MERGE (PDF Pages 7 & 8)
  // =========================================================
  if (slide.id === 11 || slide.id === 12) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm mb-3">
          <h4 className="text-xs font-bold text-[#FE862A] uppercase tracking-wider mb-1">
            {slide.id === 11 ? 'Append Operations (Row Concatenation)' : 'Merge Operations (Column Joins)'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {slide.id === 11
              ? 'Adds rows from one dataset to the end of another dataset (Vertical Stacking). Retains original schema structure.'
              : 'Horizontal merge means adding columns from another dataset based on a shared key.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center flex-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-center h-full">
            <div className="text-xs font-bold text-slate-700 mb-2">Input Datasets (Table 1 &amp; Table 2)</div>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-blue-700 font-bold mb-1">Table A (Rows 1-3)</div>
                <div className="text-xs text-slate-800 font-mono font-semibold">[A:1, B:2, C:3]</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-cyan-700 font-bold mb-1">Table B (Rows 4-5)</div>
                <div className="text-xs text-slate-800 font-mono font-semibold">[A:4, B:5, C:6]</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-center h-full">
            <div className="text-xs font-bold text-slate-700 mb-2">
              {slide.id === 11 ? 'Appended Output (Vertical Stack)' : 'Merged Output (Horizontal Columns)'}
            </div>
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
              <div className="text-xs text-emerald-800 font-bold mb-2">Combined Output Dataset</div>
              <div className="text-xs text-slate-800 font-mono space-y-1.5">
                <div>Row 1: [A:1, B:2, C:3]</div>
                <div>Row 2: [A:4, B:5, C:6]</div>
                <div>Row 3: [A:5, B:6, C:7]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 14 & 15: DATA MODELING & STORAGE TIERS (PDF Pages 9 & 10)
  // =========================================================
  if (slide.id === 14 || slide.id === 15) {
    const tiers = [
      {
        title: 'Flat Table',
        subtitle: 'CSV / Spreadsheets',
        bullets: ['CSV & Text files', 'Excel Spreadsheets', 'Simple single-file data'],
        icon: FileText
      },
      {
        title: 'Database',
        subtitle: 'Relational (SQL)',
        bullets: ['Relational (SQL)', 'Non-Relational (NoSQL)', 'Structured multi-table', 'CRUD operations'],
        icon: Database
      },
      {
        title: 'Data Warehouse',
        subtitle: 'Enterprise Analytics',
        bullets: ['Optimized for analytics', 'Historical data repository', 'Schema-on-read/write', 'OLAP Engines'],
        icon: Layers
      }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-center py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((t, idx) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 w-fit mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-0.5">{t.title}</h3>
                  <div className="text-xs text-blue-600 font-bold mb-3">{t.subtitle}</div>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {t.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FE862A]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 16: NORMALIZED VS DENORMALIZED DATA (PDF Pages 11 & 12)
  // =========================================================
  if (slide.id === 16) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 items-stretch mb-3">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                Normalized Data Structure
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">Multiple Small Tables (Write-Optimized)</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Data organized into separate entities (Employee, Department, Location) connected via Foreign Keys to minimize duplication.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-1 text-slate-700">
                <div>• Reduces Redundancy</div>
                <div>• More Joins Needed (Slower Reads)</div>
                <div>• Excellent for Writes &amp; Data Integrity</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
                Denormalized Data Structure
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">Single Combined Table (Read-Optimized)</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Data combined into fewer tables (with controlled duplication) to eliminate JOIN overhead and speed up reporting queries.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-1 text-slate-700">
                <div>• Single Combined Wide Table</div>
                <div>• Increases Controlled Redundancy</div>
                <div>• Fewer Joins (Faster Reads &amp; Analytics)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200 text-center text-xs font-bold text-blue-900">
          Trade-off: Writes &amp; Integrity ◄==================► Reads &amp; Reporting Speed
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 17: STAR SCHEMA VS SNOWFLAKE OVERVIEW (PDF Page 13)
  // =========================================================
  if (slide.id === 17) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center p-4 max-w-5xl mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center text-center shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-amber-300" />
            </div>
            <h3 className="text-2xl font-black mb-2">STAR SCHEMA</h3>
            <p className="text-xs text-blue-100 font-medium">De-normalized dimension tables connected directly to one central Fact Table.</p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col items-center justify-center text-center shadow-lg">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
              <Network className="w-8 h-8 text-cyan-300" />
            </div>
            <h3 className="text-2xl font-black mb-2">SNOWFLAKE SCHEMA</h3>
            <p className="text-xs text-indigo-100 font-medium">Normalized dimension tables decomposed into secondary sub-dimension hierarchies.</p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 18: STAR SCHEMA ARCHITECTURE (PDF Page 14)
  // =========================================================
  if (slide.id === 18) {
    const dims = ['PRODUCT', 'CUSTOMER', 'EMPLOYEE', 'TIME'];
    return (
      <div className="w-full h-full flex flex-col justify-between p-2 max-w-5xl mx-auto select-none">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-3 font-medium">
          Star Schema Definition: A data warehouse structure where one central fact table is connected to multiple dimension tables to make data analysis simple and fast.
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-3 gap-4 items-center w-full max-w-2xl mx-auto text-xs">
            {dims.slice(0, 2).map((d) => (
              <div key={d} onClick={() => setSelectedStarDim(d)} className={`p-3.5 rounded-xl border text-center font-bold cursor-pointer transition-all ${selectedStarDim === d ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-blue-50 border-blue-200 text-blue-900'}`}>
                {d} Dimension
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-amber-500 text-white text-center font-black text-base shadow-md">
              SALES (Central Fact Table)
            </div>

            {dims.slice(2, 4).map((d) => (
              <div key={d} onClick={() => setSelectedStarDim(d)} className={`p-3.5 rounded-xl border text-center font-bold cursor-pointer transition-all ${selectedStarDim === d ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-blue-50 border-blue-200 text-blue-900'}`}>
                {d} Dimension
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 19: SNOWFLAKE SCHEMA ARCHITECTURE (PDF Pages 15 & 16)
  // =========================================================
  if (slide.id === 19) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-2 max-w-5xl mx-auto select-none">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-3 font-medium">
          Snowflake Schema Definition: Dimension tables are normalized into multiple related tables, making the data more organized but more complex to query compared to a star schema.
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-3 gap-3 items-center w-full max-w-2xl mx-auto text-xs">
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-cyan-50 border border-cyan-200 text-center font-bold text-cyan-900">Dim_SubCategory</div>
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-center font-bold text-blue-900">Dim_Category</div>
            </div>
            <div className="p-5 rounded-2xl bg-amber-500 text-white text-center font-black text-sm shadow-md">
              Fact_Sales
            </div>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-cyan-50 border border-cyan-200 text-center font-bold text-cyan-900">Dim_Geography</div>
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-center font-bold text-blue-900">Dim_Store</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 20: STAR VS SNOWFLAKE COMPARISON MATRIX (PDF Page 17)
  // =========================================================
  if (slide.id === 20) {
    const rows = [
      { aspect: 'Simplicity', star: 'Simpler', snowflake: 'More complex' },
      { aspect: 'Performance in Power BI', star: 'Higher performance', snowflake: 'Lower performance' },
      { aspect: 'Redundancy', star: 'High redundancy', snowflake: 'Low redundancy' },
      { aspect: 'Design', star: 'De-normalized', snowflake: 'Normalized' },
      { aspect: 'Common Usage', star: 'Small to medium datasets', snowflake: 'Large enterprise data warehouses' }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-center p-2 max-w-5xl mx-auto select-none">
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                <th className="p-3 border-r border-slate-200">Aspect</th>
                <th className="p-3 border-r border-slate-200 text-blue-700 bg-blue-50/50">Star Schema</th>
                <th className="p-3 text-cyan-700 bg-cyan-50/50">Snowflake Schema</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="p-3 font-bold text-slate-800 border-r border-slate-200">{r.aspect}</td>
                  <td className="p-3 border-r border-slate-200 text-blue-900 font-semibold bg-blue-50/20">{r.star}</td>
                  <td className="p-3 text-cyan-900 font-semibold bg-cyan-50/20">{r.snowflake}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 21: GALAXY SCHEMA / FACT CONSTELLATION (PDF Page 18)
  // =========================================================
  if (slide.id === 21) {
    return (
      <div className="w-full h-full flex flex-col justify-between p-2 max-w-5xl mx-auto select-none">
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium mb-3">
          Galaxy Schema Definition: Multiple fact tables share dimension tables, used to model complex enterprise business processes.
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4 items-center max-w-2xl mx-auto text-xs w-full">
            <div className="p-4 rounded-xl bg-emerald-600 text-white font-black text-center shadow-md">
              SALES Fact Table
            </div>
            <div className="p-4 rounded-xl bg-teal-600 text-white font-black text-center shadow-md">
              INVENTORY Fact Table
            </div>
            <div className="col-span-2 p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 font-bold text-center">
              Shared Dimension Tables (Product, Time, Location, Supplier)
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 23: DASHBOARD DESIGNER TOOLBELT & WEBSITES (PDF Page 20)
  // =========================================================
  if (slide.id === 23) {
    const resources = [
      { cat: 'For Icons', items: ['Flaticon', 'Icons8'], color: 'text-blue-700', border: 'border-blue-200' },
      { cat: 'For Design & Colors', items: ['Figma', 'Adobe Color', 'Remove Background', 'Remove Objects', 'Colourco'], color: 'text-cyan-700', border: 'border-cyan-200' },
      { cat: 'Visual Feeding & Inspiration', items: ['Dribbble', 'NovyPro'], color: 'text-purple-700', border: 'border-purple-200' }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-center py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className={`p-5 rounded-2xl bg-white border ${r.border} flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow`}
            >
              <div>
                <h3 className={`text-xs font-bold ${r.color} uppercase tracking-wider mb-3 font-mono`}>
                  {r.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {r.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-blue-400 hover:bg-blue-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 25: OUTRO SLIDE (Exact Reference Match to Image 2)
  // =========================================================
  if (slide.id === 25 || slide.type === 'outro') {
    return (
      <ThankYouVisual 
        sessionNumber="07"
        nextSessionNote="Next Session: Python Fundamentals — Syntax, Variables &amp; Data Types"
        nextSessionButtonText="Open Session 09: Python Fundamentals"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={onSwitchSession ? () => onSwitchSession('session-09') : undefined}
      />
    );
  }

  // Default Fallback
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-700">
      <h3 className="text-lg font-bold text-slate-900 mb-2">{slide.mainTitle}</h3>
      <p className="text-xs text-slate-600">{slide.subtitle}</p>
    </div>
  );
};
