import React from 'react';
import { 
  Target, 
  CheckCircle2, 
  Sparkles, 
  PenTool, 
  Layers, 
  Star,
  FileCheck2,
  HelpCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { Language } from '../../types';

interface PracticalExerciseVisualProps {
  language: Language;
  isDark?: boolean;
}

export const PracticalExerciseVisual: React.FC<PracticalExerciseVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';

  const rubricSteps = [
    {
      num: '01',
      title: isRTL ? 'اختيار المنتج الرقمي' : 'Select a Digital Product',
      desc: isRTL ? 'اختر تطبيقاً أو موقعاً تستخدمه أسبوعياً (مثل: HungerStation, Noon, Duolingo, Netflix).' : 'Choose an app/site you use regularly (e.g. Duolingo, Notion, Netflix).',
      icon: Target
    },
    {
      num: '02',
      title: isRTL ? 'تحليل واجهة المستخدم (UI)' : 'Analyze UI (2 Strengths / 2 Weaknesses)',
      desc: isRTL ? 'قيم الألوان، التباين، الخطوط، الأزرار، والاتساق البصري عبر لقطات شاشة واضحة.' : 'Evaluate typography hierarchy, color contrast, layout grid, and icon clarity.',
      icon: PenTool
    },
    {
      num: '03',
      title: isRTL ? 'تحليل تجربة المستخدم (UX)' : 'Analyze UX (2 Strengths / 2 Weaknesses)',
      desc: isRTL ? 'قيم سلاسة الرحلة، عدد الخطوات، سرعة إنجاز الهدف، ورسائل الخطأ.' : 'Examine flow friction, number of clicks to goal, cognitive load, and feedback.',
      icon: Layers
    },
    {
      num: '04',
      title: isRTL ? 'تقييم الـ 7 UX Factors' : 'Rate 7 UX Factors (1 to 5 Scale)',
      desc: isRTL ? 'امنح التطبيق درجة من 1 إلى 5 في كل عامل من عوامل بيتر مورفيل مع تبرير علمي.' : 'Score Useful, Usable, Findable, Accessible, Credible, Desirable, Valuable with rationale.',
      icon: Star
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3.5 py-1">
      {/* Exercise Brief Header Banner */}
      <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${
        isDark 
          ? 'bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-slate-900 border-blue-800/40 text-white' 
          : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-white border-blue-200 text-slate-950 shadow-sm'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-blue-600 dark:text-blue-400 block">
              {isRTL ? 'تمرين تطبيقي عملي فردي' : 'Hands-on Individual Capstone Prep'}
            </span>
            <h3 className={`text-sm sm:text-base font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {isRTL ? 'مهمة التدريب: تشريح وتقييم تطبيق حقيقي من منظور الـ UI/UX' : 'Assignment: Deconstruct & Audit a Live Product'}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-3 py-1 bg-blue-600 text-white rounded-lg shadow-sm">
            {isRTL ? 'المدة: 30 دقيقة' : 'Duration: 30 Mins'}
          </span>
        </div>
      </div>

      {/* 4 Rubric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {rubricSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div 
              key={idx}
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-800 text-slate-100 hover:border-blue-600' 
                  : 'bg-slate-50/90 border-slate-200 text-slate-950 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                    isDark ? 'bg-blue-950 text-blue-400 border-blue-800/40' : 'bg-blue-50 text-blue-700 border-blue-200'
                  }`}>
                    {step.num}
                  </span>
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className={`text-xs sm:text-sm font-extrabold mb-1.5 leading-snug ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  {step.title}
                </h4>
                <p className={`text-[11px] sm:text-xs leading-relaxed font-medium ${
                  isDark ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  {step.desc}
                </p>
              </div>

              <div className={`pt-2.5 mt-3 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isRTL ? 'مطلوب في التقرير' : 'Deliverable Output'}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deliverable Template Note */}
      <div className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-medium ${
        isDark ? 'bg-slate-950/70 border-slate-800 text-slate-200' : 'bg-blue-50/80 border-blue-200 text-slate-950'
      }`}>
        <div className="flex items-center gap-2">
          <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            {isRTL 
              ? 'التسليم: ملف فيجما (Figma Frame) أو مستند PDF يتضمن لقطات الشاشة والشرح المنهجي.' 
              : 'Submission: Figma Board or PDF with annotated screenshots and structured ratings.'}
          </span>
        </div>
        <span className="font-extrabold text-blue-700 dark:text-blue-400 hidden sm:inline-block">
          {isRTL ? 'التقييم والمناقشة في بداية السيشن 02' : 'Reviewed live in Session 02 kickoff'}
        </span>
      </div>
    </div>
  );
};
