import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Wrench, Users, Award, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  language?: 'ar' | 'en';
  isDark?: boolean;
  onNext?: () => void;
}

export const Session02IntroVisual: React.FC<Props> = ({ language = 'ar', isDark = true, onNext }) => {
  const isRTL = language === 'ar';

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-stretch">
      {/* Left Column: Course Value Proposition & Stats */}
      <div className={`md:col-span-7 rounded-xl p-5 sm:p-6 border shadow-sm flex flex-col justify-between ${
        isDark ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3.5 border ${
            isDark 
              ? 'bg-blue-950/70 text-blue-400 border-blue-800/50' 
              : 'bg-blue-50 text-blue-700 border-blue-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            {isRTL ? 'السيشن 02 من الدبلومة الاحترافية' : 'Session 02 • Professional Track'}
          </div>

          <h3 className={`text-base sm:text-lg font-bold mb-2 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            {isRTL ? 'أدوات وأدوار ومهارات مصمم UI/UX' : 'Tools, Roles & Designer Skills'}
          </h3>

          <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {isRTL
              ? 'دليلك الشامل لمنظومة أدوات العمل الحديثة (Discovery to Delivery)، الأركان المهارية الأربعة لبناء منتجات رقمية ناجحة، وفهم الفروق الجوهرية بين مسميات وأدوار مصممي الـ UX في سوق العمل الحقيقي.'
              : 'A comprehensive blueprint of modern UX tooling, the 4 designer skillset pillars, and demystifying professional design roles.'}
          </p>
        </div>

        {/* 3 Stats Boxes */}
        <div className={`grid grid-cols-3 gap-2 pt-3 border-t ${
          isDark ? 'border-slate-800' : 'border-slate-100'
        }`}>
          <div className={`text-center p-2.5 rounded-lg ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
            <span className="block text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">06</span>
            <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {isRTL ? 'فئات أدوات' : 'Tool Categories'}
            </span>
          </div>
          <div className={`text-center p-2.5 rounded-lg ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
            <span className="block text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">04</span>
            <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {isRTL ? 'أركان مهارية' : 'Skill Pillars'}
            </span>
          </div>
          <div className={`text-center p-2.5 rounded-lg ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
            <span className="block text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">01</span>
            <span className={`text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {isRTL ? 'محاكاة فريق طبي' : 'Team Lab'}
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Hero Learning Pillars - Exact same gradient and typography as Session 01 */}
      <div className="md:col-span-5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-5 sm:p-6 shadow-md flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">
            {isRTL ? 'محاور جلسة اليوم' : 'Session Highlights'}
          </span>
          <h4 className="text-lg sm:text-xl font-bold mt-1 mb-3">
            {isRTL ? 'الكتل الثلاث: Tools ➔ Skills ➔ Roles' : 'Tools ➔ Skills ➔ Roles'}
          </h4>

          <ul className="space-y-2.5 text-xs sm:text-sm text-blue-50/95">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
              <span>{isRTL ? 'سير عمل الأدوات من البحث حتى التسليم' : 'Complete Tool Workflow (Research to Dev)'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
              <span>{isRTL ? 'الفضول والتفكير النقدي والشياكة البصرية' : 'Curiosity, 5 Whys & Visual Polish'}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
              <span>{isRTL ? 'أدوار الـ UX في الشركات الناشئة والكبرى' : 'UX Roles in Startups vs Enterprises'}</span>
            </li>
          </ul>
        </div>

        <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-medium text-blue-100">
          <span>{isRTL ? 'جاهز للبدء؟' : 'Ready to begin?'}</span>
          <span className="underline cursor-pointer flex items-center gap-1 hover:text-white transition-colors" onClick={onNext}>
            {isRTL ? 'الانتقال للشريحة التالية' : 'Next Slide'}
            {isRTL ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </span>
        </div>
      </div>
    </div>
  );
};
