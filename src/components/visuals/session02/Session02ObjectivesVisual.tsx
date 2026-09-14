import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Sliders, Award, Users, Briefcase, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface Props {
  language?: 'ar' | 'en';
  isDark?: boolean;
}

export const Session02ObjectivesVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';

  const steps = [
    {
      number: '01',
      title: isRTL ? 'أنواع أدوات الـ UI/UX' : 'UI/UX Tools Taxonomy',
      desc: isRTL ? 'تصنيف الأدوات وفهم وظيفة كل أداة في البحث، الوايت بورد، التصميم، النماذج، والاختبار.' : 'Categorizing tools across Discovery, UI & Testing.',
      badge: 'Discovery to Delivery',
      icon: Wrench,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      number: '02',
      title: isRTL ? 'متى نستخدم كل أداة؟' : 'When to Use What?',
      desc: isRTL ? 'معايير اختيار الأداة الأنسب لكل خطوة وتجنب فخ إهدار الوقت في حفظ البرامج.' : 'Decision matrix & avoiding the Tool Trap.',
      badge: 'Tool Decision Matrix',
      icon: Sliders,
      color: 'from-purple-500 to-pink-600'
    },
    {
      number: '03',
      title: isRTL ? 'الأركان الـ 4 للمصمم' : 'The 4 Designer Pillars',
      desc: isRTL ? 'المهارات الإنسانية، التحليلية، التصميمية، ومهارات فهم البزنس والتواصل الفعال.' : 'Human, Analytical, Visual & Business skills.',
      badge: 'Core Skillset',
      icon: Award,
      color: 'from-amber-500 to-orange-600'
    },
    {
      number: '04',
      title: isRTL ? 'تفكيك أدوار سوق العمل' : 'Demystifying Roles',
      desc: isRTL ? 'التمييز الدقيق بين UX و UI و Product Designer و UX Researcher في الشركات.' : 'UX vs UI vs Product Designer vs Researcher.',
      badge: 'Career Spectrum',
      icon: Users,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      number: '05',
      title: isRTL ? 'ورشة بناء فريق المنتج' : 'Team Simulation Workshop',
      desc: isRTL ? 'محاكاة عملية واقعية لبناء فريق وتوزيع المهام على تطبيق توصيل طبي متكامل.' : 'Hands-on cross-functional team allocation.',
      badge: 'Hands-on Lab',
      icon: Briefcase,
      color: 'from-rose-500 to-red-600'
    }
  ];

  return (
    <div className="w-full space-y-4">
      {/* 5-Step Process Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-stretch">
        {steps.map((st, idx) => {
          const Icon = st.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className={`rounded-xl p-4 border shadow-sm flex flex-col justify-between group transition-all ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-800 text-slate-100 hover:border-blue-500' 
                  : 'bg-white border-slate-200 text-slate-900 hover:border-blue-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-black px-2 py-0.5 rounded bg-gradient-to-r ${st.color} text-white`}>
                    {st.number}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className={`text-sm font-extrabold mb-1.5 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  {st.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {st.desc}
                </p>
              </div>

              <div className={`pt-2.5 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded block text-center ${
                  isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                }`}>
                  {st.badge}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Diploma Roadmap Callout */}
      <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-3 ${
        isDark ? 'bg-blue-950/30 border-blue-800/40 text-blue-200' : 'bg-blue-50/80 border-blue-200 text-blue-950'
      }`}>
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs font-semibold">
            {isRTL
              ? 'الهدف النهائي لليوم: إتقان المنظومة والأدوات واختيار مسارك المهني الأنسب بثقة تامة.'
              : 'Core Goal: Master the UX toolkit pipeline and confidently chart your career trajectory.'}
          </span>
        </div>
        <span className="text-xs font-bold font-mono px-3 py-1 rounded bg-blue-600 text-white shrink-0 shadow-sm">
          Session 02 Complete Roadmap
        </span>
      </div>
    </div>
  );
};
