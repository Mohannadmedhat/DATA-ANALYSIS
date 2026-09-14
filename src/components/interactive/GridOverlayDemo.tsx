import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Grid, 
  Ruler, 
  Layers, 
  Maximize2, 
  Sparkles, 
  Check, 
  SlidersHorizontal,
  Box
} from 'lucide-react';
import { Language } from '../../types';

interface GridOverlayDemoProps {
  language: Language;
}

export const GridOverlayDemo: React.FC<GridOverlayDemoProps> = ({ language }) => {
  const isRTL = language === 'ar';
  const [gridSize, setGridSize] = useState<number>(8);
  const [showGridLines, setShowGridLines] = useState<boolean>(true);
  const [paddingSize, setPaddingSize] = useState<number>(16);
  const [gapSize, setGapSize] = useState<number>(8);
  const [borderRadius, setBorderRadius] = useState<number>(16);

  // Nested radius calculation: R_inner = max(0, R_outer - padding)
  const innerRadius = Math.max(4, borderRadius - (paddingSize / 2));

  return (
    <div className="w-full bg-slate-900/70 rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-xl backdrop-blur-md">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <Grid className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-slate-200">
            {isRTL ? 'المختبر التفاعلي للنظام الشبكي 8pt' : '8pt Spatial Grid Interactive Lab'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Grid lines toggle */}
          <button
            onClick={() => setShowGridLines(!showGridLines)}
            className={`px-3 py-1.5 rounded-lg border font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              showGridLines 
                ? 'bg-blue-600/30 border-blue-500 text-blue-300' 
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
          >
            <Ruler className="w-3.5 h-3.5" />
            <span>{showGridLines ? (isRTL ? 'إخفاء الشبكة 8pt' : 'Hide Grid') : (isRTL ? 'إظهار الشبكة 8pt' : 'Show Grid')}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3 text-xs bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <div>
            <div className="flex items-center justify-between mb-1.5 text-slate-300 font-semibold">
              <span>{isRTL ? 'الهامش الداخلي (Padding):' : 'Container Padding:'}</span>
              <span className="font-mono text-blue-400 font-bold">{paddingSize}px ({paddingSize / 8}x Grid)</span>
            </div>
            <div className="flex gap-1.5">
              {[8, 16, 24, 32].map((p) => (
                <button
                  key={p}
                  onClick={() => setPaddingSize(p)}
                  className={`flex-1 py-1 rounded-md font-mono text-[11px] font-bold border transition-all cursor-pointer ${
                    paddingSize === p
                      ? 'bg-blue-600 border-blue-400 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {p}px
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5 text-slate-300 font-semibold">
              <span>{isRTL ? 'المسافة بين العناصر (Gap):' : 'Item Spacing (Gap):'}</span>
              <span className="font-mono text-blue-400 font-bold">{gapSize}px ({gapSize / 8}x Grid)</span>
            </div>
            <div className="flex gap-1.5">
              {[4, 8, 16, 24].map((g) => (
                <button
                  key={g}
                  onClick={() => setGapSize(g)}
                  className={`flex-1 py-1 rounded-md font-mono text-[11px] font-bold border transition-all cursor-pointer ${
                    gapSize === g
                      ? 'bg-blue-600 border-blue-400 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {g}px
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5 text-slate-300 font-semibold">
              <span>{isRTL ? 'استدارة الزوايا (Radius):' : 'Outer Corner Radius:'}</span>
              <span className="font-mono text-blue-400 font-bold">{borderRadius}px</span>
            </div>
            <div className="flex gap-1.5">
              {[8, 16, 24].map((r) => (
                <button
                  key={r}
                  onClick={() => setBorderRadius(r)}
                  className={`flex-1 py-1 rounded-md font-mono text-[11px] font-bold border transition-all cursor-pointer ${
                    borderRadius === r
                      ? 'bg-blue-600 border-blue-400 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {r}px
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>{isRTL ? 'استدارة الزوايا الداخلية المحسوبة:' : 'Nested Inner Radius:'}</span>
            <span className="font-mono font-bold text-amber-400">{innerRadius.toFixed(0)}px</span>
          </div>
        </div>

        {/* Live Visual Canvas Column */}
        <div className="lg:col-span-7 relative h-[250px] sm:h-[280px] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-4 select-none">
          {/* 8pt Grid Overlay Background */}
          {showGridLines && (
            <div 
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.15)_1px,transparent_1px)]"
              style={{ backgroundSize: '8px 8px' }}
            />
          )}

          {/* Interactive Card Component */}
          <div 
            style={{ 
              padding: `${paddingSize}px`,
              borderRadius: `${borderRadius}px`,
              gap: `${gapSize}px`
            }}
            className="relative z-10 w-full max-w-sm bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800 text-white border-2 border-blue-500/50 shadow-2xl flex flex-col justify-between transition-all duration-300 backdrop-blur-md"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div 
                style={{ borderRadius: `${innerRadius}px` }}
                className="px-2.5 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[11px] font-bold"
              >
                8pt Component
              </div>
              <span className="text-[10px] font-mono text-slate-400">Pad: {paddingSize}px</span>
            </div>

            {/* Inner Content Box */}
            <div 
              style={{ 
                borderRadius: `${innerRadius}px`,
                padding: '12px',
                marginTop: `${gapSize}px`,
                marginBottom: `${gapSize}px`
              }}
              className="bg-slate-950/70 border border-slate-800 flex items-center gap-3"
            >
              <div 
                style={{ borderRadius: `${Math.max(4, innerRadius - 2)}px` }}
                className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/30"
              >
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-xs font-bold text-white truncate">
                  {isRTL ? 'عنصر متوافق هندسياً' : 'Pixel-Aligned UI Element'}
                </h5>
                <p className="text-[10px] text-slate-400 truncate">
                  Gap: {gapSize}px • Radius: {borderRadius}px
                </p>
              </div>
            </div>

            {/* Bottom Action */}
            <button 
              style={{ borderRadius: `${innerRadius}px` }}
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/30 cursor-pointer"
            >
              {isRTL ? 'زر متناسق مع الشبكة' : 'Grid-Aligned Button'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
