import React, { useState } from 'react';
import { 
  Sparkles, 
  Grid, 
  Zap,
  RotateCcw
} from 'lucide-react';
import { Language } from '../../types';

interface GoodUxWeakUiSimulatorProps {
  language: Language;
  isDark?: boolean;
}

export const GoodUxWeakUiSimulator: React.FC<GoodUxWeakUiSimulatorProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';
  const [viewMode, setViewMode] = useState<'retro' | 'modern' | 'grid'>('modern');

  return (
    <div className={`w-full rounded-2xl p-4 sm:p-5 border shadow-md transition-all ${
      isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
    }`}>
      {/* Top Controls Bar */}
      <div className={`flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b text-xs ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-bold text-slate-900 dark:text-slate-100">
            {isRTL ? 'مختبر المقارنة: كيف نطور الواجهة الضعيفة دون المساس بالـ UX؟' : 'Interactive Lab: Transforming Weak UI while Retaining UX Speed'}
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className={`flex items-center gap-1.5 p-1 rounded-xl border text-xs ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            onClick={() => setViewMode('retro')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'retro'
                ? 'bg-amber-600 text-white shadow-sm'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>{isRTL ? 'الواجهة القديمة (Craigslist 1999)' : '1999 Raw UI'}</span>
          </button>

          <button
            onClick={() => setViewMode('modern')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'modern'
                ? 'bg-blue-600 text-white shadow-sm'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRTL ? 'إعادة التصميم العصري (Modern 2026)' : '2026 Redesign'}</span>
          </button>

          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'grid'
                ? 'bg-indigo-600 text-white shadow-sm'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{isRTL ? 'فحص الشبكة 8pt' : '8pt Grid'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Comparison Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* Left Column: Live Interactive Product Mockup Stage (7 Cols) */}
        <div className={`lg:col-span-7 rounded-xl p-4 border flex flex-col justify-between relative overflow-hidden min-h-[280px] ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50/70 border-slate-200'
        }`}>
          
          {/* Grid Overlay if mode is grid */}
          {viewMode === 'grid' && (
            <div 
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.18)_1px,transparent_1px)] pointer-events-none z-20"
              style={{ backgroundSize: '8px 8px' }}
            />
          )}

          {/* RETRO RAW UI (Craigslist Style) */}
          {viewMode === 'retro' && (
            <div className="bg-white text-black p-4 rounded border-2 border-slate-400 font-serif space-y-2.5 text-xs select-none shadow-sm">
              <div className="border-b border-black pb-1.5 flex items-center justify-between">
                <span className="font-bold text-sm text-blue-900 underline">craigslist &gt; for sale &gt; tech</span>
                <span className="font-mono text-[10px] text-slate-600">post id: 789412</span>
              </div>

              <div>
                <h4 className="font-bold text-sm text-blue-800 underline">
                  MacBook Pro M3 Max - 36GB RAM - Space Black - $2,100
                </h4>
                <p className="text-[11px] text-slate-700 mt-1 font-sans">
                  Condition: like new in original box. Cash only. Local pickup in downtown.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-300 flex items-center gap-3 text-[11px] font-sans">
                <button className="px-2 py-0.5 bg-slate-200 border border-slate-700 text-black text-xs cursor-pointer">
                  reply by email
                </button>
                <span className="text-blue-800 underline cursor-pointer">favorite (+)</span>
                <span className="text-blue-800 underline cursor-pointer">share link</span>
              </div>
            </div>
          )}

          {/* MODERN REDESIGN (2026 UI + UX Harmony) */}
          {(viewMode === 'modern' || viewMode === 'grid') && (
            <div className={`relative z-10 p-4 rounded-2xl border shadow-md space-y-3 select-none ${
              isDark ? 'bg-slate-900 text-white border-blue-500/40' : 'bg-white text-slate-900 border-blue-200 shadow-sm'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[10px] font-bold font-mono">
                    VERIFIED SELLER
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Downtown • 2 mins ago</span>
                </div>
                <span className="text-sm font-black font-mono text-emerald-600 dark:text-emerald-400">$2,100</span>
              </div>

              <div>
                <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                  MacBook Pro M3 Max (36GB / 1TB SSD)
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Mint condition in original sealed box. Battery health 100%. Instant escrow pickup.
                </p>
              </div>

              <div className={`pt-2 border-t flex items-center justify-between gap-2 ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}>
                <button className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer flex items-center justify-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-white" />
                  <span>{isRTL ? 'تواصل فوري آمن' : 'Instant 1-Click Message'}</span>
                </button>
                <button className={`p-2 rounded-xl border cursor-pointer ${
                  isDark ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}>
                  ❤️
                </button>
              </div>
            </div>
          )}

          {/* Bottom Live Diagnostic Feedback */}
          <div className={`mt-3 pt-2 border-t flex items-center justify-between text-[11px] ${
            isDark ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <span className="text-slate-600 dark:text-slate-400">
              {viewMode === 'retro' 
                ? (isRTL ? '⚠️ كفاءة وسرعة 100% لكن تفتقر للثقة والجاذبية العاطفية.' : '⚠️ High speed & utility, but low brand trust and desirability.')
                : (isRTL ? '✨ نفس السرعة الفائقة + ثقة وجاذبية عصرية رفيعة المستوى.' : '✨ Preserves 100% UX speed + massive boost in trust & aesthetic desirability.')}
            </span>
            <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">
              {viewMode === 'grid' ? '8pt Spatial Grid' : 'Task Time: 1.2s'}
            </span>
          </div>
        </div>

        {/* Right Column: Key Takeaway & Scientific Analysis (5 Cols) */}
        <div className={`lg:col-span-5 p-4 rounded-xl border flex flex-col justify-between text-xs space-y-3 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase bg-blue-600 text-white">
              The Golden Rule
            </span>

            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mt-2 mb-1.5">
              {isRTL ? 'الجمال البصري يعزز الثقة ويزيد القيمة المدركة' : 'Aesthetic-Usability Effect'}
            </h4>

            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              {isRTL
                ? 'وفق قانون (Aesthetic-Usability Effect)، المستخدمون يدركون الواجهات الجميلة على أنها أسهل في الاستخدام وأكثر أماناً وموثوقية، حتى لو كانت تؤدي نفس الوظيفة تماماً.'
                : 'Users perceive attractive interfaces as significantly more trustworthy, easier to use, and premium.'}
            </p>
          </div>

          <div className={`space-y-2 border-t pt-2.5 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-600 dark:text-slate-400">{isRTL ? 'ثقة وموثوقية المستخدم:' : 'User Trust Perception:'}</span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">35% ➔ 96%</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-600 dark:text-slate-400">{isRTL ? 'سرعة إنجاز المهمة:' : 'Task Completion Speed:'}</span>
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">1.2s (Zero Loss)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

