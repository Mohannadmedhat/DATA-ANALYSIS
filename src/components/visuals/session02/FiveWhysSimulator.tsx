import React, { useState } from 'react';
import { 
  HelpCircle, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  RotateCcw,
  XCircle
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const FiveWhysSimulator: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    {
      level: isRTL ? 'المشكلة السطحية (Surface Symptom)' : 'Surface Symptom',
      question: isRTL ? 'المشكلة الظاهرة: "العملاء يتركون سلة الشراء بنسبة 70%!"' : 'Symptom: "70% Cart Abandonment Rate!"',
      noviceMistake: isRTL ? 'تفكير المبتدئ السطحي: "نغير لون زر الشراء للأخضر الفسفوري ونكبر حجمه!"' : 'Novice reaction: "Let’s make the CTA button neon green & 20% bigger!"',
      whyPrompt: isRTL ? 'اسأل: لماذا يترك المستخدمون السلة عند الوصول لشاشة الدفع؟' : 'Ask: Why do customers abandon cart at the payment screen?',
      discovery: isRTL ? 'النتيجة 1: لأنهم يصطدمون بمصاريف شحن غير متوقعة في آخر لحظة!' : 'Discovery 1: They are startled by unexpected delivery charges!',
      isRoot: false
    },
    {
      level: isRTL ? 'المستوى 02 (Why 2)' : 'Why Level 2',
      question: isRTL ? 'لماذا يتفاجأ العميل بسعر الشحن في آخر خطوة؟' : 'Why are customers surprised by delivery costs at the final step?',
      noviceMistake: isRTL ? 'تفكير سطحي: "نكتب تنبيه كبير باللون الأحمر في شاشة الدفع!"' : 'Novice reaction: "Let’s put a giant red warning banner on checkout!"',
      whyPrompt: isRTL ? 'اسأل: لماذا لا يعلم العميل بسعر الشحن من البداية؟' : 'Ask: Why wasn’t the shipping cost visible upfront?',
      discovery: isRTL ? 'النتيجة 2: لأن شاشة تفاصيل المنتج القديمة تخفي حاسبة الشحن تماماً!' : 'Discovery 2: The product details screen completely concealed delivery pricing!',
      isRoot: false
    },
    {
      level: isRTL ? 'المستوى 03 (Why 3)' : 'Why Level 3',
      question: isRTL ? 'لماذا كانت شاشة المنتج تخفي تكلفة الشحن؟' : 'Why did the product screen hide delivery estimates?',
      noviceMistake: isRTL ? 'تفكير سطحي: "نحط شحن مجاني للكل حتى لو الشركة خسرت!"' : 'Novice reaction: "Make shipping free even if the company loses margin!"',
      whyPrompt: isRTL ? 'اسأل: لماذا صمم النظام القديم ليحسب الشحن بعد إدخال العنوان كاملاً؟' : 'Ask: Why did the legacy system require full address entry first?',
      discovery: isRTL ? 'النتيجة 3: لأن سياسة التسعير القديمة كانت تعتمد على حسابات المسافة بدقة المتر.' : 'Discovery 3: Legacy API required precise street coordinates to estimate fees.',
      isRoot: false
    },
    {
      level: isRTL ? 'المستوى 04 (Why 4)' : 'Why Level 4',
      question: isRTL ? 'لماذا لا نوفر تقديراً تقريبياً للمحافظة/المدينة بنقرة واحدة؟' : 'Why didn’t we provide a 1-click city/state estimate upfront?',
      noviceMistake: isRTL ? 'تفكير سطحي: "المطور قال إن التقدير التقريبي مش دقيق 100%"' : 'Novice reaction: "Engineering said city estimates aren’t 100% exact"',
      whyPrompt: isRTL ? 'اسأل: هل يحتاج العميل دقة المليمتر أم مجرد توقع صادق يزيل التردد؟' : 'Ask: Does the customer need millimeter precision or transparent expectations?',
      discovery: isRTL ? 'النتيجة 4: العميل يحتاج فقط معرفة النطاق التقديري (مثلاً: 30-40 ج.م) ليشعر بالأمان والشفافية!' : 'Discovery 4: Customers only need an honest range to feel secure and eliminate fear!',
      isRoot: false
    },
    {
      level: isRTL ? 'الجذر الحقيقي والحل الجذري (Root Cause & UX Solution)' : 'Root Cause & True UX Solution',
      question: isRTL ? 'الجذر الحقيقي: انعدام الشفافية الاستباقية في تجربة التسعير!' : 'Root Cause: Complete lack of proactive pricing transparency!',
      noviceMistake: isRTL ? 'النتيجة: تغيير لون الزر كان سيهدر الوقت دون أي نتيجة!' : 'Outcome: Repainting buttons would have solved zero user friction!',
      whyPrompt: isRTL ? 'الحل التصميمي النهائي: حاسبة شحن فورية في شاشة المنتج + موعد الوصول المتوقع.' : 'True UX Solution: Instant city shipping calculator on product card + delivery date.',
      discovery: isRTL ? '🎉 النتيجة الحقيقية: ارتفاع نسبة إتمام الشراء بـ 38% وبناء ولاء يدوم سنين!' : '🎉 Real Outcome: +38% Checkout completion surge and long-term buyer trust!',
      isRoot: true
    }
  ];

  const current = steps[currentStep];

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Banner */}
      <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 shadow-sm ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-lg ${
            isDark ? 'bg-amber-950/80 text-amber-400 border border-amber-800/60' : 'bg-amber-100 text-amber-800 border border-amber-300'
          }`}>
            <Search className="w-4 h-4" />
          </div>
          <div>
            <h4 className={`text-xs sm:text-sm font-extrabold flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {isRTL ? 'مختبر حفر الأسباب: منهجية (The 5 Whys Framework)' : 'Root Cause Simulator: The 5 Whys Framework'}
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold font-mono border ${
                isDark ? 'bg-amber-950 text-amber-300 border-amber-800' : 'bg-amber-100 text-amber-900 border-amber-300'
              }`}>
                Step {currentStep + 1} of 5
              </span>
            </h4>
            <p className={`text-[11px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {isRTL 
                ? 'اضغط زر "حفر السبب التالي (Why?)" لتشاهد كيف يحفر المصمم المحترف حتى يصل للجذر الحقيقي'
                : 'Click "Ask Next Why?" to peel the layers until discovering the genuine architectural UX root cause.'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setCurrentStep(0)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
            isDark ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700' : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{isRTL ? 'إعادة التحقيق' : 'Reset Investigation'}</span>
        </button>
      </div>

      {/* Main Investigation Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left 5 cols: 5 Whys Progression Ladder */}
        <div className={`lg:col-span-5 rounded-2xl border p-4 flex flex-col justify-between gap-2.5 shadow-sm ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
            <span>{isRTL ? 'مسار الحفر التراكمي (The 5 Levels)' : 'The 5 Whys Ladder'}</span>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono font-bold">Depth Meter</span>
          </div>

          <div className="space-y-1.5">
            {steps.map((st, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`w-full p-2.5 rounded-xl border text-start transition-all cursor-pointer flex items-center justify-between text-xs ${
                  idx === currentStep
                    ? 'bg-amber-500 text-slate-950 font-black border-amber-600 shadow-md scale-102 ring-2 ring-amber-400/30'
                    : idx < currentStep
                      ? (isDark ? 'bg-slate-900 border-slate-800 text-slate-100 font-bold' : 'bg-white border-slate-200 text-slate-950 font-bold shadow-sm')
                      : (isDark ? 'bg-slate-900/40 border-slate-800/40 text-slate-500' : 'bg-slate-200/50 border-slate-200 text-slate-500')
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    idx === currentStep ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-slate-200'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="truncate">{st.level.split('(')[0]}</span>
                </div>
                {idx < currentStep ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                ) : idx === currentStep ? (
                  <Search className="w-4 h-4 text-slate-950 shrink-0 animate-pulse" />
                ) : null}
              </button>
            ))}
          </div>

          <div className="pt-2 text-[11px] text-center text-slate-600 dark:text-slate-400 font-bold">
            {isRTL ? '🔍 كلما حفرت أعمق.. كلما وفرت على شركتك ملايين الجنيهات!' : '🔍 The deeper you drill, the more engineering millions you save!'}
          </div>
        </div>

        {/* Right 7 cols: Current Discovery Spotlight */}
        <div className={`lg:col-span-7 rounded-2xl border p-5 flex flex-col justify-between gap-3 shadow-sm ${
          current.isRoot 
            ? (isDark ? 'bg-emerald-950/30 border-emerald-800/60 text-slate-100' : 'bg-emerald-50/90 border-emerald-300 text-slate-950')
            : (isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-950')
        }`}>
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800">
              <span className={`text-xs font-black px-2.5 py-1 rounded-lg border ${
                current.isRoot 
                  ? (isDark ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-emerald-100 text-emerald-950 border-emerald-300')
                  : (isDark ? 'bg-amber-950 text-amber-300 border-amber-800' : 'bg-amber-100 text-amber-950 border-amber-300')
              }`}>
                {current.level}
              </span>
              <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">Level {currentStep + 1} / 5</span>
            </div>

            <h3 className={`text-base sm:text-lg font-black mb-2 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {current.question}
            </h3>

            {/* Novice vs Pro Box */}
            <div className="space-y-2.5 my-3">
              <div className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 font-bold ${
                isDark ? 'bg-rose-950/40 border-rose-900/60 text-rose-200' : 'bg-rose-50 border-rose-200 text-rose-950 shadow-sm'
              }`}>
                <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                <span>{current.noviceMistake}</span>
              </div>

              <div className={`p-3.5 rounded-xl border text-xs sm:text-sm font-bold leading-relaxed ${
                current.isRoot 
                  ? (isDark ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200' : 'bg-emerald-100/80 border-emerald-300 text-emerald-950 shadow-sm')
                  : (isDark ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-950 shadow-sm')
              }`}>
                <div className={`flex items-center gap-1.5 font-black mb-1.5 ${
                  isDark ? 'text-amber-400' : 'text-amber-800'
                }`}>
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{isRTL ? '💡 نتيجة الحفر والاستقصاء:' : '💡 Diagnostic Discovery:'}</span>
                </div>
                <p>{current.discovery}</p>
              </div>
            </div>
          </div>

          {/* Action Trigger Button */}
          {currentStep < 4 ? (
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{isRTL ? 'حفر المستوى التالي (Why?) ➔' : 'Ask Next Why? ➔'}</span>
            </button>
          ) : (
            <div className="p-2.5 rounded-xl bg-emerald-600 text-white font-black text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-md">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isRTL ? '✅ تم الوصول للحل الجذري الحقيقي بنجاح!' : '✅ Root Cause Discovered & Solved!'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
