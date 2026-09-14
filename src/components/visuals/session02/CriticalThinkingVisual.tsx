import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Sparkles, Filter, Target } from 'lucide-react';

interface Props {
  language?: 'ar' | 'en';
  isDark?: boolean;
}

export const CriticalThinkingVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [activeStep, setActiveStep] = useState<number>(0);

  const questions = [
    {
      num: '01',
      badge: isRTL ? 'السؤال 01 • فحص الأدلة' : 'Q1 • Evidence Check',
      question: isRTL ? 'هل هذا القرار مبني على حقيقة مثبتة أم مجرد افتراض شخصي؟' : 'Is this decision backed by hard data or personal assumption?',
      badReaction: isRTL ? '«المدير طلب الميزة دي، يبقى أكيد العملاء عاوزينها!»' : '"The stakeholder asked for it, so users definitely need it!"',
      criticalApproach: isRTL ? 'البحث عن بيانات الاستخدام، المقابلات الحقيقية، والتحقق من حجم الشريحة التي تعاني من هذه النقطة قبل كتابة سطر كود واحد.' : 'Cross-reference user interview transcripts, analytics logs, and validate target volume.',
      tag: isRTL ? 'حقيقة vs افتراض' : 'Fact vs Assumption'
    },
    {
      num: '02',
      badge: isRTL ? 'السؤال 02 • الجذر vs العَرَض' : 'Q2 • Root vs Symptom',
      question: isRTL ? 'هل الحل المقترح يعالج الجذر الحقيقي أم يغطي على العَرَض السطحي؟' : 'Does this solution resolve the root cause or just patch a surface symptom?',
      badReaction: isRTL ? '«الناس بتسيب السلة؟ نغير لون الزر ونخليه ينور!»' : '"Cart drop-offs? Make the checkout button bigger and flashier!"',
      criticalApproach: isRTL ? 'حفر الأسباب عبر منهجية 5 Whys واكتشاف أن مصاريف الشحن المفاجئة هي السبب الجذري، وتعديل شفافية التسعير من البداية.' : 'Execute 5 Whys to uncover hidden freight costs and introduce upfront transparent pricing.',
      tag: isRTL ? 'علاج جذري' : 'Root Cause'
    },
    {
      num: '03',
      badge: isRTL ? 'السؤال 03 • مبدأ البساطة' : 'Q3 • Occam’s Razor',
      question: isRTL ? 'هل توجد طريقة أبسط وأسرع تحقق نفس النتيجة بجهد أقل؟' : 'Is there a simpler, lower-friction solution that achieves the exact same goal?',
      badReaction: isRTL ? '«نبني نظام ذكاء اصطناعي معقد وشاشات تفاعلية من 10 خطوات!»' : '"Build a complex 10-step AI wizard from scratch!"',
      criticalApproach: isRTL ? 'حذف الخطوات الزائدة والاعتماد على الملء التلقائي (Auto-fill) وتسجيل الدخول بنقرة واحدة (1-Click OAuth).' : 'Eliminate redundant clicks with auto-fill and 1-click social authentication.',
      tag: isRTL ? 'البساطة القصوى' : 'Minimal Friction'
    },
    {
      num: '04',
      badge: isRTL ? 'السؤال 04 • حالات الحافة' : 'Q4 • Edge Cases',
      question: isRTL ? 'ماذا يحدث في الحالات غير المثالية وحالات الفشل وانقطاع النت؟' : 'What happens during edge cases, network drops, and failure states?',
      badReaction: isRTL ? '«التصميم شغال حلو جداً لما المستخدم يكتب اسمه صح والنت سريع!»' : '"The mockup looks gorgeous with perfect dummy data and fiber internet!"',
      criticalApproach: isRTL ? 'تصميم شاشات الخطأ اللطيفة، حفظ البيانات محلياً (Offline drafts)، ومراعاة أسماء المستخدمين الطويلة جداً والشاشات القديمة.' : 'Design graceful offline states, local drafts, long localized text strings, and small viewports.',
      tag: isRTL ? 'حالات الفشل' : 'Failure States'
    },
    {
      num: '05',
      badge: isRTL ? 'السؤال 05 • التبعات غير المتوقعة' : 'Q5 • Unintended Impact',
      question: isRTL ? 'ما هي الآثار الجانبية لهذا التعديل على باقي أجزاء المنتج والبزنس؟' : 'What are the unintended ripple effects on other modules and business operations?',
      badReaction: isRTL ? '«عدلنا الصفحة دي ومش مهم إيه اللي هيتأثر في باقي التطبيق»' : '"We changed this modal and ignored its effect on the checkout flow."',
      criticalApproach: isRTL ? 'فحص رحلة العميل بالكامل (E2E) والتنسيق مع فريقي خدمة العملاء والمطورين لضمان عدم حدوث ارتباك تشغيلي.' : 'Audit complete end-to-end journey and align with customer support & QA engineering.',
      tag: isRTL ? 'الأثر الشامل' : 'Systemic Impact'
    }
  ];

  const current = questions[activeStep];

  return (
    <div className="w-full space-y-4">
      {/* Question Selector Pipeline */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {questions.map((q, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-500/20'
                  : (isDark ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300' : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700')
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-white/20 text-white' : (isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600')
                }`}>
                  {q.num}
                </span>
                <span className="text-[10px] font-bold">{q.tag}</span>
              </div>
              <p className="text-[11px] font-bold line-clamp-1">
                {q.badge}
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Diagnostic Question Screen */}
      <div className={`rounded-xl p-5 border shadow-sm ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
            <HelpCircle className="w-4 h-4" />
          </span>
          <h3 className={`text-base sm:text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
            {current.question}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
          {/* Reaction without Critical Thinking */}
          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-rose-950/30 border-rose-900/60 text-slate-100' : 'bg-rose-50/90 border-rose-300 text-slate-950'
          }`}>
            <span className={`text-xs font-black mb-2 block flex items-center gap-1.5 ${isDark ? 'text-rose-300' : 'text-rose-700'}`}>
              <span>{isRTL ? '❌ التفكير السطحي الساذج:' : '❌ Naive Superficial Reaction:'}</span>
            </span>
            <p className={`text-xs leading-relaxed font-semibold italic ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {current.badReaction}
            </p>
          </div>

          {/* Pro Critical Thinking Approach */}
          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-emerald-950/30 border-emerald-900/60 text-slate-100' : 'bg-emerald-50/90 border-emerald-300 text-slate-950'
          }`}>
            <span className={`text-xs font-black mb-2 block flex items-center gap-1.5 ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
              <span>{isRTL ? '✔️ منهجية التفكير النقدي الاحترافي:' : '✔️ Pro Critical Thinking Approach:'}</span>
            </span>
            <p className={`text-xs leading-relaxed font-bold ${isDark ? 'text-slate-100' : 'text-slate-950'}`}>
              {current.criticalApproach}
            </p>
          </div>
        </div>

        <div className={`mt-3 pt-3 border-t ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'} flex items-center justify-between text-xs font-bold`}>
          <span>
            💡 {isRTL ? 'قاعدة: التفكير النقدي يحميك من إهدار مئات الساعات في بناء حلول غير مجدية' : 'Rule: Critical thinking prevents wasting hundreds of engineering hours'}
          </span>
          <span className={`font-mono font-black ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
            Question {current.num} / 05
          </span>
        </div>
      </div>
    </div>
  );
};
