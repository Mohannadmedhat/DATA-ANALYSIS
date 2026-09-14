import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain, 
  CheckCircle2, 
  XCircle,
  Wrench,
  Cpu
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const ToolTrapVisual: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [activeSide, setActiveSide] = useState<'trap' | 'mastery'>('mastery');

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Controller */}
      <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 shadow-sm ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-lg ${
            isDark ? 'bg-amber-950/80 text-amber-400 border border-amber-800/60' : 'bg-amber-100 text-amber-800 border border-amber-300'
          }`}>
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <h4 className={`text-xs sm:text-sm font-extrabold flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {isRTL ? 'فخ الأدوات: إتقان البرنامج لا يجعلك مصمم UX محترف (Skill > Tool)' : 'The Tool Trap: Tools Do Not Make You a UX Designer'}
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                activeSide === 'mastery' 
                  ? (isDark ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-950 border-emerald-300')
                  : (isDark ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-rose-50 text-rose-950 border-rose-300')
              }`}>
                {activeSide === 'mastery' ? (isRTL ? '🧠 عقلية حل المشكلات (UX Mastery)' : '🧠 Problem Solver') : (isRTL ? '🖱️ فخ حفظ الأزرار (Tool Trap)' : '🖱️ Shortcut Memorizer')}
              </span>
            </h4>
            <p className={`text-[11px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {isRTL 
                ? 'قارن بين من يقضي وقته في حفظ أزرار البرنامج ومن يتعلم المبادئ العقلية وفهم الطبيعة البشرية'
                : 'Compare software button memorization against deep human-centered problem solving.'}
            </p>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSide('trap')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              activeSide === 'trap'
                ? 'bg-rose-600 text-white border-rose-700 shadow-md font-extrabold'
                : (isDark ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white' : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950')
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>{isRTL ? 'فخ الأزرار (Tool Trap)' : 'The Tool Trap'}</span>
          </button>

          <button
            onClick={() => setActiveSide('mastery')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              activeSide === 'mastery'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-md font-extrabold'
                : (isDark ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white' : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950')
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>{isRTL ? 'العقلية الحقيقية (UX Mastery) ✨' : 'True UX Mastery ✨'}</span>
          </button>
        </div>
      </div>

      {/* Main Comparison Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left 6 cols: Scenario & Mindset */}
        <div className={`lg:col-span-6 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all shadow-sm ${
          activeSide === 'mastery'
            ? (isDark ? 'bg-emerald-950/30 border-emerald-800/60 text-slate-100' : 'bg-emerald-50/90 border-emerald-200 text-slate-950')
            : (isDark ? 'bg-rose-950/30 border-rose-800/60 text-slate-100' : 'bg-rose-50/90 border-rose-200 text-slate-950')
        }`}>
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 dark:border-slate-800">
              <span className={`text-xs font-black px-2.5 py-1 rounded-lg border ${
                activeSide === 'mastery' 
                  ? (isDark ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-emerald-100 text-emerald-950 border-emerald-300')
                  : (isDark ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-rose-100 text-rose-950 border-rose-300')
              }`}>
                {activeSide === 'mastery' ? (isRTL ? 'عقلية المصمم المحترف' : 'The Professional Mindset') : (isRTL ? 'عقلية الهاوي التائه' : 'The Novice Pitfall')}
              </span>
              <span className={`text-xs font-mono font-black ${
                activeSide === 'mastery' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
              }`}>
                {activeSide === 'mastery' ? 'Value: High ROI ⭐' : 'Value: Vulnerable to AI ⚠️'}
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-black mb-3">
              {activeSide === 'mastery'
                ? (isRTL ? 'التركيز على: "لماذا" نصمم هذا العنصر هنا؟' : 'Focus: "Why" does this element solve the problem?')
                : (isRTL ? 'التركيز على: "إزاي أعمل الحركة دي في البرنامج؟"' : 'Focus: "How do I do this cool trick in the software?"')}
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed font-semibold">
              {activeSide === 'mastery' ? (
                <>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-emerald-950/60 border-emerald-900 text-slate-100' : 'bg-white border-emerald-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{isRTL ? 'يفهم أسباب هجر المستخدمين ويعالج المشكلة من جذورها.' : 'Diagnoses root cause user friction and crafts evidence-backed solutions.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-emerald-950/60 border-emerald-900 text-slate-100' : 'bg-white border-emerald-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{isRTL ? 'يبرر كل قرار بلغة الأرقام وأهداف البزنس (ROI & Conversion).' : 'Articulates design choices in the language of revenue and business metrics.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-emerald-950/60 border-emerald-900 text-slate-100' : 'bg-white border-emerald-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{isRTL ? 'لا يخاف من الذكاء الاصطناعي أو تغير البرامج لأن تفكيره هو رأس ماله.' : 'Immune to AI and tool shifts because cognitive problem solving is evergreen.'}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-rose-950/40 border-rose-900 text-slate-100' : 'bg-white border-rose-200 text-slate-950 shadow-sm'
                  }`}>
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                    <span>{isRTL ? 'يقضي 90% من وقته في حفظ اختصارات الكيبورد وتأثيرات الألوان المبهرجة دون بحث.' : 'Spends 90% of time memorizing hotkeys and fancy gradients without research.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-rose-950/40 border-rose-900 text-slate-100' : 'bg-white border-rose-200 text-slate-950 shadow-sm'
                  }`}>
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                    <span>{isRTL ? 'يبني شاشات فائقة الجمال لكنها تحل المشكلة الخطأ ويفشل المنتج فوراً.' : 'Builds beautiful interfaces that solve zero real problems, leading to failure.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-rose-950/40 border-rose-900 text-slate-100' : 'bg-white border-rose-200 text-slate-950 shadow-sm'
                  }`}>
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                    <span>{isRTL ? 'معرض للاستبدال الفوري بأدوات الذكاء الاصطناعي لأن الرسم المجرد أصبح تلقائياً.' : 'Easily replaced by AI UI generators because drawing screens is commoditized.'}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="pt-3 text-[11px] text-slate-600 dark:text-slate-400 font-bold font-mono">
            {activeSide === 'mastery' ? '🎯 Skill > Tool • Principles > Buttons' : '⚠️ Software Proficiency ≠ UX Proficiency'}
          </div>
        </div>

        {/* Right 6 cols: Core Pillars */}
        <div className={`lg:col-span-6 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between gap-3 shadow-sm ${
          isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-950'
        }`}>
          <div>
            <div className="pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>{isRTL ? 'المعادلة الذهبية للمصمم المحترف' : 'The Golden Designer Equation'}</span>
              <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>

            <div className="space-y-2 mt-3 text-xs font-semibold">
              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="font-extrabold text-amber-600 dark:text-amber-400 block mb-1">
                  {isRTL ? '1. البرامج تتغير والمبادئ تبقى:' : '1. Tools Evolve, Principles Endure:'}
                </span>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {isRTL ? 'بالأمس Photoshop، ثم Sketch، واليوم Figma، وغداً AI.. من يتعلم "الزرار" فقط يموت مهنياً مع كل تحديث!' : 'Yesterday was Sketch, today is Figma, tomorrow is AI. Learn human principles.'}
                </p>
              </div>

              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="font-extrabold text-blue-600 dark:text-blue-400 block mb-1">
                  {isRTL ? '2. أقوى أداة لا تعوض غياب البحث:' : '2. No Tool Replaces Clear Research:'}
                </span>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {isRTL ? 'إذا كان تفكيرك خاطئاً، فإن فيجما ستمكنك فقط من بناء تصميم فاشل بسرعة أكبر!' : 'A tool only amplifies thinking; flawed logic yields faster product failure.'}
                </p>
              </div>

              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400 block mb-1">
                  {isRTL ? '3. قيمتك الحقيقية في قراراتك:' : '3. Your True Value Lies in Rationale:'}
                </span>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {isRTL ? 'الشركات تدفع لك لأنك تعرف "لماذا" وضعت العنصر هنا وكيف يوفر للشركة أرباحاً ويريح العميل.' : 'Companies pay for rationale and problem-solving, not just moving a mouse.'}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-center text-blue-600 dark:text-blue-400 font-extrabold border-t border-slate-200 dark:border-slate-800">
            {isRTL ? '💡 استثمر في عقليتك وطريقة تفكيرك أولاً' : '💡 Invest in your mindset and problem solving first'}
          </div>
        </div>
      </div>
    </div>
  );
};
