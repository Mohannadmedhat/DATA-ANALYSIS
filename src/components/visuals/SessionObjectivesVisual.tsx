import React, { useState } from 'react';
import { 
  Search, 
  Palette, 
  Layers, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Award,
  BookOpen
} from 'lucide-react';
import { Language } from '../../types';

interface SessionObjectivesVisualProps {
  language: Language;
  isDark?: boolean;
}

export const SessionObjectivesVisual: React.FC<SessionObjectivesVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';
  const [activeStep, setActiveStep] = useState<number>(0);

  const objectives = [
    {
      number: '01',
      title: isRTL ? 'فهم تجربة المستخدم' : 'Understand UX Foundations',
      tagline: isRTL ? 'عقلية وسلوكيات المستخدم والرحلة الشاملة' : 'User psychology, mental models & holistic journey',
      desc: isRTL 
        ? 'استيعاب كيف يفكر المستخدم، مشاكله الحقيقية، وإزاي تصمم خطوات تريحه وتنجزه بأقل مجهود وبدون أي تعقيد.'
        : 'Mastering user goals, behavioral friction, and structuring end-to-end satisfaction without barriers.',
      icon: Search,
      outputs: isRTL ? ['أهداف وسلوكيات المستخدم', 'النماذج الذهنية', 'سلاسة الرحلة'] : ['User Goals & Needs', 'Mental Models', 'Frictionless Journeys'],
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30'
    },
    {
      number: '02',
      title: isRTL ? 'فهم واجهة المستخدم' : 'Understand UI Aesthetics',
      tagline: isRTL ? 'لغة العين: الخطوط، الألوان والمكونات' : 'Visual hierarchy, typography, colors & atoms',
      desc: isRTL 
        ? 'التعرف على فن اختيار الألوان المتناسقة، الخطوط المريحة للعين، والأزرار وعناصر الواجهة التفاعلية.'
        : 'Exploring visual harmony, typography scales, color theory, component anatomy, and aesthetic balance.',
      icon: Palette,
      outputs: isRTL ? ['الواجهة البصرية', 'تراتبية الخطوط', 'المكونات البنائية'] : ['Visual UI Layers', 'Typography Scales', 'UI Components'],
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30'
    },
    {
      number: '03',
      title: isRTL ? 'المقارنة بين UI و UX' : 'The Critical Boundary: UI vs UX',
      tagline: isRTL ? 'التمييز بين الشاسيه والمظهر الخارجي' : 'Logic & Architecture vs Visual Sensory Craft',
      desc: isRTL 
        ? 'معرفة الفرق الحاسم بين وظيفة وسلاسة المنتج (UX) ومظهره وشياكته (UI) عبر سيناريوهات عملية من شاشات الدفع.'
        : 'Dissecting real-world checkout scenarios to uncover how UX logic and UI beauty intersect or clash.',
      icon: Layers,
      outputs: isRTL ? ['جدول المقارنة الشامل', 'أمثلة شاشات الدفع', 'طريقة التفكير'] : ['Comparison Matrix', 'Checkout Case Study', 'Holistic Mindset'],
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30'
    },
    {
      number: '04',
      title: isRTL ? 'تاريخ وتطور الواجهات' : 'Evolution of Digital Interfaces',
      tagline: isRTL ? 'من الشاشات السوداء إلى الذكاء الاصطناعي' : 'From CLI & WIMP to Touch & Generative AI',
      desc: isRTL 
        ? 'استكشاف التطور التاريخي المذهل من شاشات الدوس المعقدة للماوس وشاشات اللمس والذكاء الاصطناعي.'
        : 'Tracing 6 decades of computing paradigms that reduced cognitive load from coding to human intuition.',
      icon: Compass,
      outputs: isRTL ? ['من سطر الأوامر للماوس', 'عصر الهواتف واللمس', 'واجهات الـ AI'] : ['CLI to GUI Revolution', 'Mobile & Multi-Touch', 'Generative AI UI'],
      badgeColor: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30'
    },
    {
      number: '05',
      title: isRTL ? 'عوامل الـ UX السبعة' : 'Peter Morville’s 7 UX Factors',
      tagline: isRTL ? 'المعيار القياسي الذهبي لتقييم المنتجات' : 'The Industry Gold Standard for Product Auditing',
      desc: isRTL 
        ? 'إتقان مخطط قرص العسل (Honeycomb): مفيد، سهل، موثوق، متاح، جذاب، سهل الإيجاد، وله قيمة حقيقية للبيزنس.'
        : 'Mastering the 7-factor evaluation matrix (Useful, Usable, Findable, Accessible, Credible, Desirable, Valuable).',
      icon: Sparkles,
      outputs: isRTL ? ['قرص العسل Honeycomb', 'تقييم جودة أي تطبيق', 'قيمة المستخدم والبيزنس'] : ['Honeycomb Framework', 'Heuristic Product Audit', 'User & Business ROI'],
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-1" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 5 Interconnected Roadmap Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {objectives.map((obj, idx) => {
          const Icon = obj.icon;
          const isSelected = activeStep === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 ${
                isSelected
                  ? 'border-blue-500 ring-2 ring-blue-500/40 bg-blue-50/40 dark:bg-slate-900 shadow-md scale-[1.02]'
                  : isDark
                    ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg ${
                    isSelected 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}>
                    {obj.number}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-transform group-hover:scale-110 ${obj.badgeColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className={`text-xs sm:text-[13px] font-extrabold mb-1 leading-snug transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  <bdi>{obj.title}</bdi>
                </h4>

                <p className={`text-[11px] leading-relaxed mb-3 font-medium ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <bdi>{obj.tagline}</bdi>
                </p>
              </div>

              <div className={`pt-2 border-t flex flex-wrap gap-1 ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                {obj.outputs.slice(0, 2).map((out, oIdx) => (
                  <span 
                    key={oIdx}
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                  >
                    • <bdi>{out}</bdi>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Objective Deep Dive Card */}
      <div className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
      }`}>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
              {isRTL ? `المحور ${objectives[activeStep].number} من 05` : `Pillar ${objectives[activeStep].number} of 05`}
            </span>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
              <bdi>{objectives[activeStep].title}</bdi>
            </span>
          </div>
          <p className="text-xs sm:text-sm font-medium leading-relaxed mt-1 text-slate-800 dark:text-slate-200">
            <bdi>{objectives[activeStep].desc}</bdi>
          </p>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap shrink-0">
          {objectives[activeStep].outputs.map((item, iIdx) => (
            <span 
              key={iIdx}
              className="text-[11px] font-bold px-2.5 py-1 rounded-lg border bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/60"
            >
              ✓ <bdi>{item}</bdi>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
