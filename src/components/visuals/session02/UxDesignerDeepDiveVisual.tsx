import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  GitBranch, 
  MousePointerClick, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Smartphone,
  Eye,
  Sliders
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language?: Language;
  isDark?: boolean;
}

export const UxDesignerDeepDiveVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [wireframeFidelity, setWireframeFidelity] = useState<'low' | 'mid'>('low');
  const [activeStep, setActiveStep] = useState<number>(1);
  const [showFriction, setShowFriction] = useState<boolean>(false);

  const flowSteps = [
    {
      step: 1,
      title: isRTL ? '1. فحص سلة التسوق' : '1. Cart Verification',
      sub: isRTL ? 'مراجعة المنتجات والإجمالي' : 'Review items & subtotal',
      action: isRTL ? 'الضغط على متابعة الدفع' : 'Click Proceed to Checkout',
      state: 'success'
    },
    {
      step: 2,
      title: isRTL ? '2. اختيار طريقة التوصيل' : '2. Delivery Mode',
      sub: isRTL ? 'عنوان المنزل أو الفرع' : 'Home delivery vs In-store',
      action: isRTL ? 'اختيار العنوان الافتراضي' : 'Select default address',
      frictionNote: isRTL ? '⚠️ نقطة احتكاك: حقول إضافية غير ضرورية تُربك العميل' : '⚠️ Friction: 4 redundant address inputs causing drop-offs',
      state: 'warning'
    },
    {
      step: 3,
      title: isRTL ? '3. خطوة الدفع الآمن' : '3. Payment Gateway',
      sub: isRTL ? 'Apple Pay / بطاقة بنكية' : 'Apple Pay / Credit Card',
      action: isRTL ? 'تأكيد الدفع بـ 1-Click' : 'Confirm 1-Click Pay',
      state: 'success'
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Banner with Role Essence */}
      <div className={`p-3 sm:p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 shadow-sm ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-sm sm:text-base font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {isRTL ? 'مصمم تجربة المستخدم (UX Designer)' : 'UX Designer (Logic & Architecture)'}
              </h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                isDark ? 'bg-blue-950/60 text-blue-300 border-blue-800/50' : 'bg-blue-100 text-blue-800 border-blue-300'
              }`}>
                {isRTL ? 'مهندس المنطق والرحلة' : 'Flow Architect'}
              </span>
            </div>
            <p className={`text-xs font-medium mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {isRTL ? 'التركيز الأساسي: تبسيط مسارات المستخدم وبناء الهياكل السلكية (Wireframes) دون تشتيت بصري' : 'Core Focus: Frictionless task architecture, user journeys & structural wireframing'}
            </p>
          </div>
        </div>

        {/* Interactive Fidelity Switcher */}
        <div className={`flex items-center gap-1 p-1 rounded-xl border text-xs ${
          isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <button
            onClick={() => setWireframeFidelity('low')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              wireframeFidelity === 'low'
                ? 'bg-blue-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            {isRTL ? 'مخطط أولي (Low-Fi Wireframe)' : 'Low-Fi Wireframe'}
          </button>
          <button
            onClick={() => setWireframeFidelity('mid')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              wireframeFidelity === 'mid'
                ? 'bg-blue-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            {isRTL ? 'مخطط مهيكل (Mid-Fi Layout)' : 'Mid-Fi Structure'}
          </button>
        </div>
      </div>

      {/* Main Grid: User Flow Steps (Left) vs Interactive Wireframe Canvas (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        
        {/* Left 5 Cols: Flow Diagram & Decision Logic */}
        <div className={`lg:col-span-5 rounded-2xl p-4 border shadow-sm flex flex-col justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-blue-500 uppercase tracking-wider flex items-center gap-1">
                <GitBranch className="w-3.5 h-3.5" />
                {isRTL ? 'مخطط تدفق المهام (Task Flow)' : 'User Task Flow Architecture'}
              </span>
              <button
                onClick={() => setShowFriction(!showFriction)}
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md border cursor-pointer transition-all ${
                  showFriction
                    ? 'bg-rose-500 text-white border-rose-600'
                    : isDark ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white' : 'bg-slate-100 text-slate-700 border-slate-300'
                }`}
              >
                {isRTL ? (showFriction ? 'إخفاء الاحتكاك' : 'كشف نقاط الاحتكاك ⚠️') : (showFriction ? 'Hide Friction' : 'Detect Friction ⚠️')}
              </button>
            </div>

            {/* Interactive Flow Nodes */}
            <div className="space-y-2">
              {flowSteps.map((step) => {
                const isSelected = activeStep === step.step;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveStep(step.step)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-500/10 border-blue-500 ring-2 ring-blue-500/20'
                        : isDark ? 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/50' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-black ${
                          isSelected ? 'bg-blue-600 text-white' : isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-800'
                        }`}>
                          0{step.step}
                        </span>
                        <h4 className={`text-xs font-bold ${
                          isSelected ? (isDark ? 'text-white' : 'text-blue-950') : isDark ? 'text-slate-200' : 'text-slate-800'
                        }`}>
                          {step.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-medium text-slate-500">
                        {step.sub}
                      </span>
                    </div>

                    {showFriction && step.frictionNote && (
                      <div className="mt-2 p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-[10px] text-rose-500 font-bold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{step.frictionNote}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* UX Designer Rules Callout */}
            <div className={`mt-3 p-2.5 rounded-xl border text-xs space-y-1 ${
              isDark ? 'bg-slate-950/70 border-slate-800 text-slate-300' : 'bg-blue-50/60 border-blue-200 text-slate-800'
            }`}>
              <div className="flex items-center gap-1.5 font-bold text-blue-500 text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isRTL ? 'قاعدة ذهبية لمصمم الـ UX:' : 'Golden UX Principle:'}</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {isRTL 
                  ? '«لا تفتح الألوان والديكور قبل أن تتأكد أن العميل يستطيع إنهاء مهمته في أقل من 3 خطوات وبدون أي حيرة»'
                  : '"Never add color or visual styling until you have proven the task flow can be completed effortlessly in minimum steps."'}
              </p>
            </div>
          </div>

          <div className={`pt-2 border-t ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'} text-[11px] font-mono flex items-center justify-between`}>
            <span>{isRTL ? 'أدوات العمل: Figma, Whimsical, Miro' : 'Tools: Figma, Whimsical, Miro'}</span>
            <span className="text-emerald-500 font-bold">Step {activeStep} / 3</span>
          </div>
        </div>

        {/* Right 7 Cols: Interactive Wireframe Canvas (Blueprint Mode) */}
        <div className={`lg:col-span-7 rounded-2xl p-4 border shadow-sm flex flex-col justify-between relative overflow-hidden ${
          isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300 text-slate-900'
        }`}>
          {/* Wireframe Canvas Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-300 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                wireframeFidelity === 'low' 
                  ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30' 
                  : 'bg-blue-500/20 text-blue-500 border border-blue-500/30'
              }`}>
                {wireframeFidelity === 'low' ? 'Low-Fidelity Wireframe (Grayscale)' : 'Mid-Fidelity Structural Layout'}
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">
              Canvas: 375 x 812 (Mobile View)
            </span>
          </div>

          {/* Interactive Screen Wireframe Blueprint */}
          <div className="my-2 p-4 rounded-xl border border-dashed border-slate-400 dark:border-slate-700 bg-white/70 dark:bg-slate-900/80 space-y-3 shadow-inner">
            
            {/* Wireframe Screen Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="w-16 h-3 bg-slate-300 dark:bg-slate-700 rounded" />
              <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>

            {/* Dynamic Step Content */}
            {activeStep === 1 && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {wireframeFidelity === 'low' ? '[ Cart Items List: 2 Items ]' : (isRTL ? 'عناصر السلة (2 منتج)' : 'Shopping Cart (2 Items)')}
                </div>
                <div className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-[10px] text-slate-500 font-mono">IMG</div>
                    <div className="space-y-1">
                      <div className="w-24 h-2.5 bg-slate-400 dark:bg-slate-600 rounded" />
                      <div className="w-14 h-2 bg-slate-300 dark:bg-slate-700 rounded" />
                    </div>
                  </div>
                  <div className="w-10 h-3 bg-slate-400 dark:bg-slate-600 rounded" />
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {wireframeFidelity === 'low' ? '[ Delivery Address: Select Default ]' : (isRTL ? 'عنوان التوصيل السريع' : 'Delivery Address Selection')}
                </div>
                <div className="p-2.5 rounded-lg border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="w-32 h-3 bg-blue-400/80 rounded" />
                    <div className="w-48 h-2 bg-blue-300/60 dark:bg-blue-800/60 rounded" />
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {wireframeFidelity === 'low' ? '[ 1-Click Payment Confirmation ]' : (isRTL ? 'طريقة الدفع المباشرة' : '1-Click Fast Checkout')}
                </div>
                <div className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-5 rounded bg-slate-400 dark:bg-slate-600" />
                    <div className="w-28 h-3 bg-slate-400 dark:bg-slate-600 rounded" />
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-500">$450.00</span>
                </div>
              </div>
            )}

            {/* Primary Action Button Wireframe */}
            <div className="pt-2">
              <button 
                onClick={() => setActiveStep(prev => prev < 3 ? prev + 1 : 1)}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{activeStep === 3 ? (isRTL ? 'إعادة مسار التجربة ↺' : 'Restart Task Flow ↺') : (isRTL ? 'المتابعة للخطوة التالية ➔' : 'Proceed to Next Step ➔')}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>UX Output: Flowchart + Wireframe Kit</span>
            <span className="text-blue-500 font-bold">{isRTL ? '💡 التركيز على المنطق والسهولة' : '💡 Zero visual fluff; 100% logic'}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
