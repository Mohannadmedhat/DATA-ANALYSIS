import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Search, Layers, CheckCircle2, RotateCcw, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface Props {
  language?: 'ar' | 'en';
  isDark?: boolean;
}

export const ProblemSolvingVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: isRTL ? 'تعريف المشكلة (Problem)' : 'Problem Definition',
      badge: isRTL ? 'المحطة 01 • الصياغة الدقيقة' : 'Stage 01 • Framing',
      icon: AlertCircle,
      color: 'from-red-500 to-rose-600',
      description: isRTL ? 'صياغة المشكلة بصيغة فرصة (How Might We) وتحديد الشريحة المتضررة بدقة دون القفز لأي حلول شكلية مسبقة.' : 'Framing the core challenge as an actionable How Might We statement.',
      deliverable: isRTL ? 'وثيقة Problem Statement + تحديد سياق المستخدم' : 'Problem Statement Document'
    },
    {
      num: '02',
      title: isRTL ? 'جمع الأدلة (Evidence)' : 'Evidence & Discovery',
      badge: isRTL ? 'المحطة 02 • التحري والبيانات' : 'Stage 02 • Research',
      icon: Search,
      color: 'from-amber-500 to-orange-600',
      description: isRTL ? 'دراسة سلوك المستخدمين، فحص التحليلات الرقمية، ومقارنة حلول المنافسين في السوق لمعرفة سبب المشكلة الحقيقي.' : 'Analyzing quantitative funnels, conducting interviews & auditing competitors.',
      deliverable: isRTL ? 'بيانات أبحاث حقيقية + تقرير تدقيق المنافسين' : 'Quantitative Logs & Competitive Matrix'
    },
    {
      num: '03',
      title: isRTL ? 'توليد البدائل (Options)' : 'Generating Options',
      badge: isRTL ? 'المحطة 03 • العصف الذهني والسكتشات' : 'Stage 03 • Ideation',
      icon: Layers,
      color: 'from-purple-500 to-indigo-600',
      description: isRTL ? 'رسم عدة مسارات بديلة (Crazy 8s Sketches) وعدم التمسك بأول فكرة تخطر على البال.' : 'Divergent sketching of multiple interaction flows via Crazy 8s.',
      deliverable: isRTL ? 'سكتشات سريعة + خرائط تدفق بديلة (Flowcharts)' : 'Crazy 8s Sketches & Flowchart Options'
    },
    {
      num: '04',
      title: isRTL ? 'القرار والتنفيذ (Decision)' : 'Decision & Hi-Fi',
      badge: isRTL ? 'المحطة 04 • النمذجة الاحترافية' : 'Stage 04 • Prototyping',
      icon: CheckCircle2,
      color: 'from-blue-500 to-cyan-600',
      description: isRTL ? 'اختيار الحل الأكثر توازناً بين قيمة المستخدم وسهولة التنفيذ البرمجي، وبناء الواجهة عالية الدقة في Figma.' : 'Selecting the highest ROI solution and engineering hi-fi components.',
      deliverable: isRTL ? 'شاشات Hi-Fi كاملة + بروتوتايب تفاعلي في Figma' : 'Hi-Fi Screens & Interactive Prototype'
    },
    {
      num: '05',
      title: isRTL ? 'الاختبار والتحسين (Test & Refine)' : 'Testing & Iteration',
      badge: isRTL ? 'المحطة 05 • التجربة والقياس' : 'Stage 05 • Validation',
      icon: RotateCcw,
      color: 'from-emerald-500 to-teal-600',
      description: isRTL ? 'اختبار النموذج مع 5 مستخدمين حقيقيين وقياس سرعة إتمام المهام وتعديل الأخطاء قبل كتابة سطر كود واحد.' : 'Testing with 5 representative users, measuring task success & iterating.',
      deliverable: isRTL ? 'تقرير Usability Test + تصميم مجرب ومحسن' : 'Usability Insights & Refined Version'
    }
  ];

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <div className="w-full space-y-4">
      {/* 5-Step Pipeline Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {steps.map((st, idx) => {
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
                  {st.num}
                </span>
                {isActive && <Sparkles className="w-3 h-3 text-amber-300" />}
              </div>
              <h4 className="text-[11px] font-bold line-clamp-1">{st.title}</h4>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep Dive Screen */}
      <div className={`rounded-xl p-5 border shadow-sm ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className={`p-2 rounded-xl bg-gradient-to-r ${current.color} text-white`}>
              <Icon className="w-4 h-4" />
            </span>
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-wider block ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {current.badge}
              </span>
              <h3 className={`text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {current.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`p-1.5 rounded-md disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer ${
                isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className={`p-1.5 rounded-md disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer ${
                isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h4 className={`text-xs font-black mb-1.5 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
              🔬 {isRTL ? 'المنهجية وطريقة التفكير في هذه المرحلة:' : 'Scientific Methodology:'}
            </h4>
            <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {current.description}
            </p>
          </div>

          <div className={`p-4 rounded-xl border flex flex-col justify-between ${
            isDark ? 'bg-emerald-950/30 border-emerald-900/60' : 'bg-emerald-50/90 border-emerald-300 shadow-sm'
          }`}>
            <div>
              <h4 className={`text-xs font-black mb-1.5 flex items-center gap-1.5 ${isDark ? 'text-emerald-300' : 'text-emerald-800'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isRTL ? 'المخرج الأساسي (Key Output):' : 'Key Deliverable:'}</span>
              </h4>
              <p className={`text-xs font-bold leading-relaxed ${isDark ? 'text-slate-100' : 'text-slate-950'}`}>
                {current.deliverable}
              </p>
            </div>
            <div className={`pt-2 text-xs font-mono font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
              Stage {current.num} Validated
            </div>
          </div>
        </div>

        <div className={`pt-3 border-t ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'} flex items-center justify-between text-xs font-bold`}>
          <span>
            💡 {isRTL ? 'المصمم المحترف يفكر كالمحقق والعالم: لا يقفز للحل دون برهان' : 'Pro designers think like scientists: never jump to conclusions without evidence'}
          </span>
          <span className={`font-mono font-black ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Step {current.num} / 05</span>
        </div>
      </div>
    </div>
  );
};
