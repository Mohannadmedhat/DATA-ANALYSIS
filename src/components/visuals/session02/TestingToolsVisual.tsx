import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  AlertTriangle, 
  BarChart3, 
  MousePointerClick, 
  CheckCircle2, 
  ShieldCheck, 
  Tag, 
  TrendingDown, 
  Activity, 
  Zap, 
  Layers, 
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Info
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language?: Language;
  isDark?: boolean;
}

export const TestingToolsVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [activeMode, setActiveMode] = useState<'heatmap' | 'rageclicks' | 'funnel'>('heatmap');
  const [rageClicks, setRageClicks] = useState<number>(0);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [selectedHeatmapTarget, setSelectedHeatmapTarget] = useState<string>('coupon');

  const handleCouponRageClick = () => {
    setRageClicks(prev => prev + 1);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 300);
  };

  const handleResetRage = () => {
    setRageClicks(0);
  };

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Controller Bar */}
      <div className={`p-2 sm:p-2.5 rounded-2xl border flex flex-wrap items-center justify-between gap-3 shadow-sm transition-colors ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className={`flex items-center gap-1.5 p-1 rounded-xl border text-xs transition-colors ${
          isDark 
            ? 'bg-slate-950/80 border-slate-800' 
            : 'bg-white border-slate-200/90 shadow-sm'
        }`}>
          <button
            onClick={() => setActiveMode('heatmap')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeMode === 'heatmap'
                ? 'bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-md font-extrabold ring-1 ring-orange-400/30'
                : isDark 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800/50' 
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>{isRTL ? '1. خريطة النقرات (Heatmap)' : '1. Heatmap Density'}</span>
          </button>

          <button
            onClick={() => setActiveMode('rageclicks')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeMode === 'rageclicks'
                ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md font-extrabold ring-1 ring-rose-400/30'
                : isDark 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800/50' 
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{isRTL ? '2. نقرات الغضب (Rage Clicks)' : '2. Rage Clicks Detector'}</span>
          </button>

          <button
            onClick={() => setActiveMode('funnel')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeMode === 'funnel'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md font-extrabold ring-1 ring-blue-400/30'
                : isDark 
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800/50' 
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{isRTL ? '3. قمع التحويل (Conversion Funnel)' : '3. Drop-off Funnel'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className={`px-2.5 py-1 rounded-lg font-mono font-bold text-[11px] border ${
            isDark ? 'bg-orange-950/60 text-orange-300 border-orange-800/40' : 'bg-orange-100 text-orange-900 border-orange-300'
          }`}>
            Hotjar • Clarity • Maze • Useberry
          </span>
        </div>
      </div>

      {/* Main Grid: Analytical Insights (Left) vs Interactive Testing Canvas (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* Left Column: Diagnostics & KPI Metrics (5 Cols) */}
        <div className={`lg:col-span-5 rounded-2xl p-4 sm:p-5 border shadow-sm flex flex-col justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase bg-blue-600 text-white">
                {isRTL ? 'الدليل السلوكي الرقمي' : 'Behavioral Evidence'}
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Recording
              </span>
            </div>

            <h3 className={`text-base sm:text-lg font-extrabold mb-1.5 ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {activeMode === 'heatmap' && (isRTL ? 'خرائط الانتباه وكثافة النقرات' : 'Attention Heatmaps & Click Density')}
              {activeMode === 'rageclicks' && (isRTL ? 'كشف إحباط وغضب المستخدم فورياً' : 'Real-time User Frustration Radar')}
              {activeMode === 'funnel' && (isRTL ? 'تشخيص نقاط تسرب وهجر العملاء' : 'Conversion Funnel & Drop-off Diagnostics')}
            </h3>

            <p className={`text-xs leading-relaxed mb-3.5 font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {activeMode === 'heatmap' && (
                isRTL 
                  ? 'الخرائط الحرارية تكشف لك أين ينظر المستخدم وأين ينقر بالضبط، وتفضح العناصر غير القابلة للضغط التي تخدع العميل.'
                  : 'Heatmaps expose exact visual gaze and click distribution, instantly identifying dead-ends and deceptive non-clickable elements.'
              )}
              {activeMode === 'rageclicks' && (
                isRTL
                  ? 'عندما ينقر العميل 5 مرات متتالية في ثانية واحدة، فهذا يعني أن الزر بطيء أو معطل. كشف نقرات الغضب يحميك من خسارة آلاف المبيعات!'
                  : 'When users click 5+ times in a second, it signals extreme friction or a broken button. Detecting rage clicks saves thousands in lost revenue.'
              )}
              {activeMode === 'funnel' && (
                isRTL
                  ? 'قمع المهام يوضح نسبة المستخدمين في كل خطوة ومكان التسرب الحاد، لتركز تعديلاتك على الخطوة المكسورة فقط.'
                  : 'Funnel tracking isolates exactly which checkout step leaks customers, focusing design iterations on high-friction drop-offs.'
              )}
            </p>

            {/* Live Diagnostic Metrics */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-[10px] text-slate-400 font-bold block">{isRTL ? 'معدل نجاح المهمة' : 'Task Success Rate'}</span>
                <span className="text-base font-black text-emerald-400">76.2%</span>
                <span className="text-[9px] text-slate-500 block">{isRTL ? 'المعيار المستهدف: 85%+' : 'Benchmark: 85%+'}</span>
              </div>
              <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-[10px] text-slate-400 font-bold block">{isRTL ? 'مؤشر نقرات الغضب' : 'Rage Click Index'}</span>
                <span className="text-base font-black text-rose-400">18.4%</span>
                <span className="text-[9px] text-rose-300/80 block">{isRTL ? '⚠️ احتكاك حاد في الكود' : '⚠️ Severe Promo Friction'}</span>
              </div>
            </div>

            {/* Tool Stack Box */}
            <div className="space-y-2">
              <div className={`p-2 rounded-lg border text-xs flex items-center justify-between ${
                isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  <Flame className="w-3.5 h-3.5 text-orange-400" />
                  <span>Hotjar / Microsoft Clarity</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Heatmaps & Replays</span>
              </div>
              <div className={`p-2 rounded-lg border text-xs flex items-center justify-between ${
                isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  <MousePointerClick className="w-3.5 h-3.5 text-blue-400" />
                  <span>Maze / Useberry</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Figma Prototype Tests</span>
              </div>
            </div>
          </div>

          <div className={`pt-3 mt-3 border-t ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'} text-[11px] font-bold flex items-center justify-between`}>
            <span>{isRTL ? '💡 الأرقام تنهي صراع الآراء الشخصية' : '💡 Data kills subjective opinion debates'}</span>
            <span className="text-emerald-400 font-mono font-bold">-70% Rework Cost</span>
          </div>
        </div>

        {/* Right Column: High-Fidelity Interactive Checkout Screen (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden text-white">
          
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-md border border-slate-800">
                store.app/checkout-prototype
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                REC 02:45
              </span>
            </div>
          </div>

          {/* MAIN CHECKOUT INTERFACE MOCKUP */}
          <div className="bg-slate-900/90 rounded-xl p-3.5 sm:p-4 border border-slate-800 space-y-3 relative select-none">
            
            {/* Cart Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-white">{isRTL ? 'حقيبة التسوق' : 'Shopping Cart'}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 font-bold font-mono">
                  {isRTL ? '2 منتجات' : '2 Items'}
                </span>
              </div>
              <span className="font-mono font-black text-sm text-emerald-400">$450.00</span>
            </div>

            {/* Product Item 1 */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-[10px]">
                  🎧
                </div>
                <div>
                  <h5 className="font-bold text-white text-xs">{isRTL ? 'سماعات بلوتوث Pro Max' : 'Wireless Pro Max ANC'}</h5>
                  <p className="text-[10px] text-slate-400">{isRTL ? 'الكمية: 1 • اللون: أسود فضائي' : 'Qty: 1 • Color: Space Black'}</p>
                </div>
              </div>
              <span className="font-mono font-bold text-white text-xs">$350.00</span>
            </div>

            {/* Product Item 2 */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-bold text-indigo-400 text-[10px]">
                  ⚡
                </div>
                <div>
                  <h5 className="font-bold text-white text-xs">{isRTL ? 'شاحن مغناطيسي سريع 65W' : '65W Fast Mag Charger'}</h5>
                  <p className="text-[10px] text-slate-400">{isRTL ? 'الكمية: 1 • مع كابل مجدول' : 'Qty: 1 • Braided Cable Included'}</p>
                </div>
              </div>
              <span className="font-mono font-bold text-white text-xs">$100.00</span>
            </div>

            {/* Promo Code Input Box (Crucial for Rage Click Test) */}
            <div className={`p-2.5 rounded-xl border transition-all ${
              isShaking ? 'border-red-500 bg-red-950/40 animate-shake' : 'bg-slate-950/90 border-slate-800'
            }`}>
              <span className="text-[10px] font-bold text-slate-400 block mb-1.5 flex items-center gap-1">
                <Tag className="w-3 h-3 text-amber-400" />
                <span>{isRTL ? 'كوبون الخصم الترويجي' : 'Promotional Promo Code'}</span>
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value="DISCOUNT30"
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-amber-300 font-mono font-bold focus:outline-none"
                />
                <button
                  onClick={handleCouponRageClick}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all cursor-pointer flex items-center gap-1 active:scale-95 shadow-md ${
                    rageClicks > 0 
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-rose-600/30 ring-2 ring-red-400 animate-pulse'
                      : 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:brightness-110'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>{isRTL ? 'تطبيق الكود' : 'Apply Code'}</span>
                </button>
              </div>
            </div>

            {/* Total Summary Row */}
            <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800 text-[11px] space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>{isRTL ? 'المجموع الفرعي:' : 'Subtotal:'}</span>
                <span className="font-mono">$450.00</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>{isRTL ? 'الشحن السريع:' : 'Express Delivery:'}</span>
                <span className="font-mono font-bold">{isRTL ? 'مجاني ($0.00)' : 'FREE ($0.00)'}</span>
              </div>
              <div className="flex justify-between text-white font-extrabold text-xs pt-1 border-t border-slate-800">
                <span>{isRTL ? 'الإجمالي النهائي:' : 'Total Amount:'}</span>
                <span className="font-mono text-emerald-400 text-sm">$450.00</span>
              </div>
            </div>

            {/* Primary Order CTA */}
            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
              <ShieldCheck className="w-4 h-4 text-emerald-200" />
              <span>{isRTL ? 'تأكيد ودفع الطلب ($450.00)' : 'Confirm & Pay Order ($450.00)'}</span>
            </button>

            {/* ============================================================== */}
            {/* OVERLAY MODE 1: HEATMAP SIMULATION OVERLAY */}
            {/* ============================================================== */}
            {activeMode === 'heatmap' && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1.5px] rounded-xl pointer-events-none z-20 flex flex-col justify-between p-3 animate-in fade-in">
                {/* Intense Red Hotspot over Promo Button */}
                <div className="absolute top-[170px] right-[24px] w-24 h-24 bg-red-500/60 rounded-full blur-xl animate-pulse" />
                <div className="absolute top-[178px] right-[32px] w-12 h-12 bg-yellow-300/80 rounded-full blur-md" />
                <div className="absolute top-[182px] right-[40px] w-6 h-6 bg-white/90 rounded-full blur-xs" />
                
                {/* Callout Tag on Promo Button */}
                <div className="absolute top-[148px] right-[16px] bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg border border-red-400 flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-white" />
                  <span>78.4% Clicks (Hotspot)</span>
                </div>

                {/* Medium Yellow Hotspot over Primary CTA */}
                <div className="absolute bottom-[24px] left-[50%] -translate-x-1/2 w-36 h-12 bg-amber-400/50 rounded-full blur-lg" />
                <div className="absolute bottom-[20px] left-[4px] bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow border border-amber-300">
                  14.2% Checkout
                </div>

                {/* Cold Spot on Cart Total */}
                <div className="absolute top-[32px] right-[24px] w-16 h-16 bg-blue-500/40 rounded-full blur-xl" />

                {/* Heatmap Legend Bar (Bottom) */}
                <div className="mt-auto self-center bg-slate-950/95 border border-slate-700 px-3 py-1.5 rounded-xl shadow-2xl flex items-center gap-2 text-[10px]">
                  <span className="text-slate-400 font-bold">{isRTL ? 'مقياس الكثافة:' : 'Click Density:'}</span>
                  <div className="h-2 w-28 rounded-full bg-gradient-to-r from-blue-500 via-emerald-400 via-amber-400 to-red-600 shadow-inner" />
                  <span className="text-red-400 font-black">{isRTL ? 'كثافة قصوى (Hot)' : 'Max Clicks (Hot)'}</span>
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* OVERLAY MODE 2: RAGE CLICKS SIMULATOR OVERLAY */}
            {/* ============================================================== */}
            {activeMode === 'rageclicks' && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] rounded-xl z-20 flex flex-col justify-between p-3 animate-in fade-in">
                
                {/* Live Diagnostic Bubble */}
                <div className="bg-rose-950/95 border-2 border-rose-500 text-rose-100 p-3 rounded-xl shadow-2xl space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black flex items-center gap-1.5 text-rose-300">
                      <AlertTriangle className="w-4 h-4 text-rose-400 animate-bounce" />
                      {isRTL ? `كشف نقرات غضب حادة: (${rageClicks} نقرات سريعة)` : `Rage Clicks Detected: (${rageClicks} Clicks)`}
                    </span>
                    <button 
                      onClick={handleResetRage}
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-900/80 hover:bg-rose-800 text-white flex items-center gap-1 cursor-pointer border border-rose-700"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{isRTL ? 'إعادة' : 'Reset'}</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-rose-200 leading-relaxed font-medium">
                    {isRTL
                      ? 'العميل ينقر بعصبية على زر "تطبيق الكود" لأن المتجر لا يظهر أي لودر أو تأكيد فوري، مما يدفعه للظن بأن الزر معطل!'
                      : 'The user is repeatedly hammering "Apply Code" because the app lacks a loading state, leading them to believe the system is frozen!'}
                  </p>
                </div>

                {/* Instruction banner pointing to Promo Button */}
                <div className="mt-auto bg-slate-950/95 border border-amber-500/50 p-2.5 rounded-xl text-center space-y-1">
                  <span className="text-xs font-black text-amber-300 flex items-center justify-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {isRTL ? 'جرّب بنفسك: اضغط على زر "تطبيق الكود" بسرعة 👆' : 'Try it live: Rapidly click "Apply Code" button 👆'}
                  </span>
                  <p className="text-[10px] text-slate-400">
                    {isRTL ? 'راقب كيف تسجل أداة التحليل نقاط الاحتكاك وتحدد العيب للمصمم.' : 'Watch how analytics tools record behavioral frustration indices.'}
                  </p>
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* OVERLAY MODE 3: CONVERSION FUNNEL OVERLAY */}
            {/* ============================================================== */}
            {activeMode === 'funnel' && (
              <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md rounded-xl z-20 p-4 flex flex-col justify-between animate-in fade-in space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-black text-white flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-blue-400" />
                    {isRTL ? 'قمع مسار إتمام الطلب (Checkout Funnel)' : 'Checkout Task Completion Funnel'}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-400">Cohort: 1,200 Users</span>
                </div>

                <div className="space-y-2.5 flex-1 justify-center flex flex-col">
                  {/* Step 1 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">{isRTL ? '1. فتح سلة المشتريات' : '1. Open Cart'}</span>
                      <span className="text-white font-mono">1,200 (100%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-full" />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">{isRTL ? '2. اختيار الشحن والدفع' : '2. Shipping & Payment'}</span>
                      <span className="text-emerald-400 font-mono">1,056 (88%) <span className="text-slate-500 text-[10px]">-12%</span></span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[88%]" />
                    </div>
                  </div>

                  {/* Step 3: Critical Drop-off */}
                  <div className="p-2 rounded-lg bg-rose-950/40 border border-rose-800/60 space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-rose-300 flex items-center gap-1">
                        <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                        {isRTL ? '3. إدخال كود الخصم (تسرب حاد!)' : '3. Promo Code (Severe Drop-off!)'}
                      </span>
                      <span className="text-rose-400 font-mono">590 (49%) <span className="text-rose-300 font-black text-[10px]">⚠️ -39% Drop</span></span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full w-[49%]" />
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">{isRTL ? '4. إتمام الطلب بنجاح (Conversions)' : '4. Completed Order'}</span>
                      <span className="text-emerald-400 font-mono font-black">554 (46.1%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full w-[46%]" />
                    </div>
                  </div>
                </div>

                <div className="p-2 bg-blue-950/60 border border-blue-800/60 rounded-lg text-[10px] text-blue-200 flex items-center justify-between">
                  <span>{isRTL ? '🔍 نتيجة التحليل: إصلاح زر الكود سيرفع الأرباح بنسبة +39% فوراً!' : '🔍 Insight: Fixing coupon field will recover +39% revenue!'}</span>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Card Footer */}
          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {isRTL ? 'أدوات التحليل تغنيك عن التخمين وتوجه قرارات فيجما' : 'Empirical behavioral data directs Figma design iterations'}
            </span>
            <span className="font-mono text-emerald-400 font-bold">Task Time: 18.2s</span>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-4px); }
          40%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.25s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </div>
  );
};
