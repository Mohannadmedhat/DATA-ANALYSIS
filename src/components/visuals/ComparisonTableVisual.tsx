import React from 'react';
import { Layers, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language, ComparisonRow } from '../../types';

interface ComparisonTableVisualProps {
  language: Language;
  rows?: ComparisonRow[];
  isDark?: boolean;
}

export const ComparisonTableVisual: React.FC<ComparisonTableVisualProps> = ({
  language,
  rows,
  isDark = false
}) => {
  const isRTL = language === 'ar';

  const defaultRows: ComparisonRow[] = rows || [
    {
      aspect: isRTL ? 'التركيز الأساسي (Focus)' : 'Primary Focus',
      ux: isRTL ? 'منطق العمل، رحلة المستخدم، حل المشكلات والسهولة' : 'How the product works, user journey & problem-solving logic',
      ui: isRTL ? 'المظهر البصري، الجماليات، الألوان، الخطوط والترتيب' : 'How the product looks, typography, color palette & layout beauty'
    },
    {
      aspect: isRTL ? 'الهدف الأسمى (Goal)' : 'Ultimate Goal',
      ux: isRTL ? 'تحقيق رضا المستخدم وإنجاز المهام بسلاسة وبدون احتكاك' : 'Achieve effortless user task completion and satisfaction',
      ui: isRTL ? 'خلق واجهة جذابة، عصرية، متناسقة ومريحة للعين' : 'Create an aesthetically pleasing, branded & modern interface'
    },
    {
      aspect: isRTL ? 'المخرجات (Deliverables)' : 'Deliverables',
      ux: isRTL ? 'أبحاث المستخدمين، الشخصيات، المخططات الهيكلية (Wireframes)، خرائط التدفق' : 'User personas, user flows, wireframes, information architecture, test results',
      ui: isRTL ? 'شاشات عالية الدقة (High-Fi UI)، أنظمة التصميم (Design Systems)، النماذج التفاعلية' : 'High-fidelity mockups, typography scales, design tokens, UI kits'
    },
    {
      aspect: isRTL ? 'الأبحاث والتحليل (Research)' : 'Research Approach',
      ux: isRTL ? 'مقابلات شخصية، اختبارات قابلية الاستخدام، تحليل البيانات السلوكية' : 'User interviews, field studies, usability testing, analytics & metrics',
      ui: isRTL ? 'أبحاث الهوية البصرية، لوحات الإلهام (Moodboards)، تحليل ترندات التصميم' : 'Visual competitor audits, moodboards, style guides, visual trends'
    },
    {
      aspect: isRTL ? 'العناصر البصرية (Visuals)' : 'Visual Elements',
      ux: isRTL ? 'مخططات هيكلية أحادية اللون (Grayscale)، مسارات وتنقل' : 'Low-fidelity skeletal wireframes, IA sitemaps, journey maps',
      ui: isRTL ? 'ألوان، خطوط، أيقونات، مسافات شبكية، تدرجات، صور' : 'Color systems, typography pairings, micro-interactions, responsive grids'
    },
    {
      aspect: isRTL ? 'التفاعل والحركة (Interaction)' : 'Interaction & Motion',
      ux: isRTL ? 'منطق تدفق الشاشات، استجابة النظام، معالجة الأخطاء' : 'Screen flow transitions, system feedback, error prevention paths',
      ui: isRTL ? 'حركات دقيقة (Micro-animations)، حالات الأزرار (Hover, Pressed, Active)' : 'Hover states, button feedback, micro-animations, visual transitions'
    }
  ];

  return (
    <div className={`w-full overflow-hidden rounded-2xl border shadow-sm my-1 ${
      isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className={`grid grid-cols-12 text-xs sm:text-sm font-extrabold border-b py-3 px-4 ${
        isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-slate-100 border-slate-200 text-slate-950'
      }`}>
        <div className="col-span-3 sm:col-span-3 flex items-center gap-1.5 font-mono uppercase text-blue-600 dark:text-blue-400">
          <span>{isRTL ? 'وجه المقارنة' : 'Aspect'}</span>
        </div>
        <div className="col-span-4 sm:col-span-4 flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
          <Layers className="w-4 h-4" />
          <span>{isRTL ? 'تصميم تجربة المستخدم (UX)' : 'User Experience (UX)'}</span>
        </div>
        <div className="col-span-5 sm:col-span-5 flex items-center gap-2 text-blue-700 dark:text-blue-400">
          <Palette className="w-4 h-4" />
          <span>{isRTL ? 'تصميم واجهة المستخدم (UI)' : 'User Interface (UI)'}</span>
        </div>
      </div>

      <div className="divide-y divide-slate-200 dark:divide-slate-800 max-h-[380px] overflow-y-auto">
        {defaultRows.map((row, idx) => (
          <div 
            key={idx}
            className={`grid grid-cols-12 text-xs sm:text-sm py-3 px-4 items-center transition-colors ${
              idx % 2 === 0 
                ? (isDark ? 'bg-slate-950/60' : 'bg-white') 
                : (isDark ? 'bg-slate-900/40' : 'bg-slate-50')
            } hover:bg-blue-50/40 dark:hover:bg-blue-950/30`}
          >
            <div className={`col-span-3 sm:col-span-3 font-extrabold pr-2 rtl:pr-0 rtl:pl-2 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {row.aspect}
            </div>
            <div className={`col-span-4 sm:col-span-4 text-xs sm:text-[13px] font-medium leading-relaxed pr-3 rtl:pr-0 rtl:pl-3 border-r rtl:border-r-0 rtl:border-l ${
              isDark ? 'text-slate-200 border-slate-800' : 'text-slate-800 border-slate-200'
            }`}>
              {row.ux}
            </div>
            <div className={`col-span-5 sm:col-span-5 text-xs sm:text-[13px] font-medium leading-relaxed pl-3 rtl:pl-0 rtl:pr-3 ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}>
              {row.ui}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
