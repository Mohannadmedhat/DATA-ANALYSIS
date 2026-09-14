import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  CheckCircle2, 
  XCircle 
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const VisualSenseBeforeAfter: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [viewMode, setViewMode] = useState<'bad' | 'good'>('good');

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Toggle Bar */}
      <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 shadow-sm ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-lg ${
            isDark ? 'bg-blue-950/80 text-blue-400 border border-blue-800/60' : 'bg-blue-100 text-blue-700 border border-blue-300'
          }`}>
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <h4 className={`text-xs sm:text-sm font-extrabold flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {isRTL ? 'مقارنة حية: الحس البصري والتناغم (Visual Polish in Action)' : 'Live Visual Sense & Spatial Polish Comparison'}
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                viewMode === 'good' 
                  ? (isDark ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-900 border-emerald-300')
                  : (isDark ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-rose-50 text-rose-900 border-rose-300')
              }`}>
                {viewMode === 'good' ? (isRTL ? '✨ تصميم متناغم ومتقن' : '✨ Polished Design') : (isRTL ? '⚠️ تصميم عشوائي بدون قواعد' : '⚠️ Cluttered & Unpolished')}
              </span>
            </h4>
            <p className={`text-[11px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {isRTL 
                ? 'بدّل بين التصميمين لتشاهد كيف تحول شبكة المسافات (8pt Grid) والتسلسل الهرمي الشاشة إلى منتج مريح وفخم'
                : 'Toggle to see how spatial grids, type scales, and color harmony transform raw screens into luxury products.'}
            </p>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('bad')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              viewMode === 'bad'
                ? 'bg-rose-600 text-white border-rose-700 shadow-md font-extrabold'
                : (isDark ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white' : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950')
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>{isRTL ? '1. بدون حس بصري (Bad UI)' : '1. Poor Hierarchy (Bad UI)'}</span>
          </button>

          <button
            onClick={() => setViewMode('good')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              viewMode === 'good'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-md font-extrabold'
                : (isDark ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white' : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950')
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRTL ? '2. شياكة ونظام هرمي (Polished) ✨' : '2. Polished Hierarchy (Good UI) ✨'}</span>
          </button>
        </div>
      </div>

      {/* Main Comparative Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left 5 cols: Live Card Mockup */}
        <div className={`lg:col-span-5 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          
          <div className="w-full max-w-sm mx-auto">
            {viewMode === 'bad' ? (
              /* Bad UI: Poor hierarchy, terrible spacing, clashing colors */
              <div className="bg-yellow-100 border-4 border-red-500 p-2.5 rounded-none text-black space-y-1.5 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-red-600 text-yellow-300 font-serif font-black px-1">
                    NEW OFFER SPECIAL!!!
                  </span>
                  <span className="text-[9px] text-gray-500 font-mono">#9928172</span>
                </div>
                <h4 className="text-xs font-normal text-gray-800 leading-tight">
                  {isRTL ? 'اشتراك كورس البرمجة الشامل' : 'Complete Coding Mastery Course'}
                </h4>
                <div className="text-[18px] text-purple-800 font-extrabold">
                  $199.00 <span className="text-[10px] text-green-700 font-bold">SAVE 50% NOW</span>
                </div>
                <p className="text-[10px] text-gray-600 leading-tight">
                  {isRTL ? 'كورس شامل يحتوي على فيديوهات ومشاريع وملفات تدريبية كثيرة جداً بدون تنظيم.' : 'Very long unstructured course description crammed with tiny unreadable font text.'}
                </p>
                <div className="pt-1 flex gap-1">
                  <button className="bg-green-600 text-yellow-200 font-black text-[10px] p-3 w-full border-2 border-black rounded-3xl">
                    {isRTL ? 'اضغط هنا للشراء فوراً' : 'CLICK HERE TO BUY NOW'}
                  </button>
                </div>
              </div>
            ) : (
              /* Polished UI: 8pt grid, clear typography scale, harmonious contrast */
              <div className={`rounded-2xl border p-5 shadow-lg transition-all ${
                isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-950'
              } flex flex-col justify-between gap-3`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border font-mono ${
                    isDark ? 'bg-blue-950 text-blue-400 border-blue-800' : 'bg-blue-50 text-blue-800 border-blue-200'
                  }`}>
                    PRO COURSE • 2026
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-500">4.9 ★★★★★</span>
                </div>

                <div>
                  <h4 className="text-base font-extrabold mb-1">
                    {isRTL ? 'دبلومة الـ UI/UX الاحترافية الشاملة' : 'Professional UI/UX Design Diploma'}
                  </h4>
                  <p className={`text-xs leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {isRTL ? 'تعلم التفكير التصميمي وبناء المنتجات الرقمية وأنظمة التصميم من الصفر للاحتراف.' : 'Master design systems, user research, and product thinking from scratch.'}
                  </p>
                </div>

                <div className="flex items-baseline gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">$199</span>
                  <span className="text-xs line-through text-slate-400 font-mono">$399</span>
                  <span className="ms-auto text-[11px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                    Save 50%
                  </span>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-md transition-all active:scale-95 cursor-pointer">
                  {isRTL ? 'التسجيل في الدبلومة الآن' : 'Enroll in Diploma Now'}
                </button>
              </div>
            )}
          </div>

          <div className="text-[11px] text-center text-slate-600 dark:text-slate-400 font-bold font-mono mt-3">
            {viewMode === 'good' ? '📐 8pt Spatial Grid • Type Scale • 60-30-10 Balance' : '❌ Zero Grid • Clashing Colors • Illegible Contrast'}
          </div>
        </div>

        {/* Right 7 cols: High Contrast Principles Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          
          <div className={`p-5 rounded-2xl border shadow-sm flex-1 flex flex-col justify-between ${
            viewMode === 'good'
              ? (isDark ? 'bg-blue-950/30 border-blue-800/60' : 'bg-blue-50/90 border-blue-200')
              : (isDark ? 'bg-rose-950/30 border-rose-800/60' : 'bg-rose-50/90 border-rose-200')
          }`}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-black px-3 py-1 rounded-lg border ${
                  viewMode === 'good'
                    ? (isDark ? 'bg-blue-950 text-blue-300 border-blue-800' : 'bg-blue-100 text-blue-950 border-blue-300')
                    : (isDark ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-rose-100 text-rose-950 border-rose-300')
                }`}>
                  {viewMode === 'good' ? (isRTL ? 'أسرار الشياكة البصرية' : 'Core Principles of Polish') : (isRTL ? 'الأخطاء البصرية القاتلة' : 'Visual Pitfalls')}
                </span>
                <span className={`text-xs font-mono font-black ${
                  viewMode === 'good' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                }`}>
                  {viewMode === 'good' ? 'Score: 10 / 10 ⭐' : 'Score: 2 / 10 ⚠️'}
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed font-semibold">
                {viewMode === 'good' ? (
                  <>
                    <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                      isDark ? 'bg-blue-950/60 border-blue-900 text-slate-100' : 'bg-white border-blue-200 text-slate-950 shadow-sm'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                      <span>{isRTL ? 'التسلسل الهرمي (Hierarchy): العين تقرأ العنوان أولاً ثم السعر ثم الزر بسلاسة تامة.' : 'Visual Hierarchy: The eye scans Title ➔ Price ➔ CTA naturally in milliseconds.'}</span>
                    </div>
                    <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                      isDark ? 'bg-blue-950/60 border-blue-900 text-slate-100' : 'bg-white border-blue-200 text-slate-950 shadow-sm'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                      <span>{isRTL ? 'شبكة المسافات (8pt Grid): مسافات هندسية منتظمة تمنح إحساساً بالنظافة والراحة.' : '8pt Grid System: Consistent geometric padding creating breathing room.'}</span>
                    </div>
                    <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                      isDark ? 'bg-blue-950/60 border-blue-900 text-slate-100' : 'bg-white border-blue-200 text-slate-950 shadow-sm'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                      <span>{isRTL ? 'تناغم الألوان: لون أساسي واحد للأكشن ولون محايد متزن للخلفيات والنصوص.' : 'Color Harmony: One primary action color and neutral balanced text tokens.'}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                      isDark ? 'bg-rose-950/40 border-rose-900 text-slate-100' : 'bg-white border-rose-200 text-slate-950 shadow-sm'
                    }`}>
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                      <span>{isRTL ? 'انعدام التسلسل الهرمي: 5 أحجام خطوط وألوان عشوائية تشتت عين المستخدم.' : 'Zero Hierarchy: Multiple competing colors and random font sizes.'}</span>
                    </div>
                    <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                      isDark ? 'bg-rose-950/40 border-rose-900 text-slate-100' : 'bg-white border-rose-200 text-slate-950 shadow-sm'
                    }`}>
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                      <span>{isRTL ? 'تباين ضعيف ومؤذٍ: نصوص رمادية على خلفية صفراء تصعب قراءتها وتجهد العين.' : 'Failing Contrast: Low-contrast gray on yellow creating eye fatigue.'}</span>
                    </div>
                    <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                      isDark ? 'bg-rose-950/40 border-rose-900 text-slate-100' : 'bg-white border-rose-200 text-slate-950 shadow-sm'
                    }`}>
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                      <span>{isRTL ? 'تكدس بصري: انعدام المساحات البيضاء يخنق الشاشة ويسبب نفور العميل.' : 'Severe Clutter: Zero white space creating psychological anxiety.'}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Designer Golden Axiom Card */}
            <div className={`mt-3 p-3 rounded-xl border text-xs font-bold leading-relaxed ${
              isDark ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}>
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-extrabold">{isRTL ? 'قاعدة المصمم المحترف:' : 'Designer Axiom:'}</span>
              </div>
              <p>
                {isRTL 
                  ? 'الجمال الرقمي ليس صدفة، بل هو تطبيق صارم لقوانين المسافات والخطوط والألوان المتناغمة.'
                  : 'Digital beauty is never an accident; it is the strict execution of grids, scales, and contrast.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
