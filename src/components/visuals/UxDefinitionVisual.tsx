import React, { useState } from 'react';
import { 
  Target, 
  Brain, 
  Zap, 
  HeartHandshake, 
  Eye, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Language } from '../../types';

interface UxDefinitionVisualProps {
  language: Language;
  isDark?: boolean;
}

export const UxDefinitionVisual: React.FC<UxDefinitionVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 'goals',
      icon: Target,
      number: '01',
      title: isRTL ? 'أهداف واحتياجات المستخدم' : 'User Goals & Core Needs',
      desc: isRTL ? 'المستخدم بيدخل التطبيق عشان يحل مشكلة معينة في يومه (يحجز أكل، يبعت فلوس، يطلب مشوار).. هدفك تمهدله الطريق يخلّص في ثواني.' : 'Users hire products to resolve immediate life tasks effortlessly.',
      tag: isRTL ? 'لماذا جاء المستخدم؟' : 'The "Why"',
      color: 'from-blue-600 to-sky-500'
    },
    {
      id: 'mental',
      icon: Brain,
      number: '02',
      title: isRTL ? 'النماذج الذهنية والتوقعات' : 'Mental Models & Expectations',
      desc: isRTL ? 'الناس متعودة على طريقة معينة في استخدام التكنولوجيا.. التصميم الشاطر بيتطابق مع عقل المستخدم وميخليهوش يتلخبط أو يحتار.' : 'Designing intuitive patterns that match established human intuition.',
      tag: isRTL ? 'إزاي مخه بيستوعب؟' : 'Cognitive Alignment',
      color: 'from-sky-500 to-cyan-500'
    },
    {
      id: 'flow',
      icon: Zap,
      number: '03',
      title: isRTL ? 'سلاسة الخطوات وانعدام الاحتكاك' : 'Frictionless Task Flow',
      desc: isRTL ? 'إزالة أي خطوة زايدة أو حقل ملوش لازمة.. كل ما كانت الخطوات سالكة ومباشرة، كل ما العميل حب التطبيق وكمل معاه.' : 'Eliminating unnecessary clicks, barriers, and cognitive friction.',
      tag: isRTL ? 'سهولة وسرعة المسار' : 'Zero Friction',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      id: 'satisfaction',
      icon: HeartHandshake,
      number: '04',
      title: isRTL ? 'الرضا النفسي وقيمة البيزنس' : 'User Delight & Business ROI',
      desc: isRTL ? 'النتيجة الطبيعية للتصميم السلس: العميل مبسوط وفرحان، والشركة بتزيد مبيعاتها وأرباحها وبتكسب ولاء وثقة تدوم سنين.' : 'High satisfaction creates loyalty, retention, and exponential ROI.',
      tag: isRTL ? 'المكسب والولاء المشترك' : 'Win-Win Result',
      color: 'from-emerald-600 to-teal-500'
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-1" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 4 Pillars Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isSelected = activePillar === idx;
          return (
            <div
              key={pillar.id}
              onClick={() => setActivePillar(idx)}
              className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 ${
                isSelected
                  ? 'border-blue-500 ring-2 ring-blue-500/40 bg-blue-50/40 dark:bg-slate-900 shadow-md'
                  : isDark
                    ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                    isSelected 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}>
                    {pillar.number}
                  </span>
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                  <bdi>{pillar.tag}</bdi>
                </span>
                <h4 className={`text-xs sm:text-sm font-extrabold mb-1.5 leading-snug transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  <bdi>{pillar.title}</bdi>
                </h4>
                <p className={`text-[11px] leading-relaxed font-medium ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <bdi>{pillar.desc}</bdi>
                </p>
              </div>

              <div className={`mt-3 pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <bdi>{isRTL ? 'ركيزة أساسية في الـ UX' : 'Core UX Foundation'}</bdi>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* The UX Iceberg Visual Comparison (جبل الجليد) */}
      <div className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col md:flex-row items-center justify-between gap-4 ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
      }`}>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase bg-blue-600 text-white">
              <bdi>{isRTL ? 'تشبيه جبل الجليد (The UX Iceberg)' : 'The UX Iceberg Metaphor'}</bdi>
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold leading-relaxed text-slate-900 dark:text-white">
            <bdi>
              {isRTL 
                ? 'الـ UI هو قمة جبل الجليد الظاهرة فوق الماء (10%)، بينما الـ UX هو الكتلة الضخمة الغاطسة تحت الماء (90%) التي تحمل كل شيء!' 
                : 'UI is the visible 10% tip of the iceberg, while UX is the massive 90% submerged foundation that sustains the entire product!'}
            </bdi>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="px-3 py-1.5 rounded-xl border bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800/60 text-center">
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 block"><bdi>{isRTL ? '10% قمة الواجهة (UI)' : '10% Visible UI'}</bdi></span>
            <span className="text-[11px] font-extrabold text-slate-900 dark:text-white"><bdi>{isRTL ? 'الألوان • الخطوط • الأزرار' : 'Colors • Fonts • Buttons'}</bdi></span>
          </div>
          <div className="px-3 py-1.5 rounded-xl border bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block"><bdi>{isRTL ? '90% عمق التجربة (UX)' : '90% UX Foundation'}</bdi></span>
            <span className="text-[11px] font-extrabold text-slate-900 dark:text-white"><bdi>{isRTL ? 'الأبحاث • المنطق • السهولة' : 'Research • Logic • Usability'}</bdi></span>
          </div>
        </div>
      </div>
    </div>
  );
};
