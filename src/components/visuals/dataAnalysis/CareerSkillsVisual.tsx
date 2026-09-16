import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Brain, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Target, 
  MessageSquare,
  Building2,
  SlidersHorizontal,
  Award
} from 'lucide-react';

interface CareerSkillsVisualProps {
  isRTL: boolean;
}

export const CareerSkillsVisual: React.FC<CareerSkillsVisualProps> = ({ isRTL }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'tech' | 'soft'>('both');

  const tabs = [
    { id: 'both', labelAr: 'المصفوفة الكاملة (Complete Matrix)', labelEn: 'Complete Matrix' },
    { id: 'tech', labelAr: 'التقنية فقط (50%)', labelEn: 'Technical (50%)' },
    { id: 'soft', labelAr: 'الشخصية والبزنس (50%)', labelEn: 'Soft Skills (50%)' },
  ] as const;

  const techSkills = [
    { 
      title: isRTL ? 'إكسيل والجداول المتقدمة (Excel)' : 'Excel & Advanced Spreadsheets', 
      desc: isRTL ? 'معادلات، تنظيف بيانات، و Pivot Tables' : 'Formulas, Pivot Tables, Data Cleansing', 
      badge: 'Core' 
    },
    { 
      title: isRTL ? 'قواعد البيانات ولغة SQL' : 'SQL & Database Architecture', 
      desc: isRTL ? 'استعلامات، ربط جداول، واسترجاع ملايين السجلات' : 'Queries, Joins, Aggregation, Subqueries', 
      badge: 'Top In-Demand' 
    },
    { 
      title: isRTL ? 'بايثون للتحليل (Python)' : 'Python for Data Analysis', 
      desc: isRTL ? 'مكتبات NumPy و Pandas و Seaborn' : 'NumPy, Pandas, Matplotlib, Seaborn', 
      badge: 'Automation' 
    },
    { 
      title: isRTL ? 'لوحات التقارير (Power BI / Tableau)' : 'BI Dashboards (Power BI / Tableau)', 
      desc: isRTL ? 'تصميم لوحات تفاعلية ونمذجة DAX' : 'DAX Modeling, Power Query, Storytelling', 
      badge: 'Business Facing' 
    }
  ];

  const softSkills = [
    { 
      title: isRTL ? 'فهم البزنس (Business Acumen)' : 'Business Acumen', 
      desc: isRTL ? 'ربط الأرقام بأهداف الشركة وأرباحها واستراتيجيتها' : 'Connecting metrics directly to revenue and business goals', 
      badge: 'Strategy' 
    },
    { 
      title: isRTL ? 'سرد القصص بالبيانات (Data Storytelling)' : 'Data Storytelling & Communication', 
      desc: isRTL ? 'شرح النتائج المعقدة للإدارة بلغة بسيطة ومقنعة' : 'Translating complex findings into clear executive actions', 
      badge: 'Influence' 
    },
    { 
      title: isRTL ? 'حل المشكلات والتحليل المنطقي' : 'Problem Solving & Logic', 
      desc: isRTL ? 'تفكيك المشاكل الغامضة إلى خطوات تحليلية واضحة' : 'Breaking down ambiguous business questions logically', 
      badge: 'Thinking' 
    },
    { 
      title: isRTL ? 'التفكير النقدي (Critical Thinking)' : 'Critical Thinking', 
      desc: isRTL ? 'التحقق من صحة البيانات وعدم قبول النتائج بسطحية' : 'Questioning assumptions and validating data veracity', 
      badge: 'Quality' 
    }
  ];

  return (
    <div className="flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none text-slate-900">
      {/* Top Filter Tabs Bar — Matching Slide 6 TypesOfDataVisual */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold text-slate-500 uppercase">
            {isRTL 
              ? 'المعادلة الذهبية للنجاح في سوق العمل (50% فني + 50% تواصل وبزنس):' 
              : 'The Job-Ready Equation (50% Technical + 50% Business & Soft Skills):'}
          </span>
        </div>

        {/* Segmented Control with Light Pill Selection (Slide 6 Motion Style) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 border border-slate-200 rounded-xl shadow-inner">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileTap={{ scale: 0.96 }}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? tab.id === 'soft' ? 'text-orange-700 font-black shadow-sm' : 'text-blue-700 font-black shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTabPillCareerSkills"
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className="absolute inset-0 rounded-lg bg-white border border-slate-200/90 shadow-sm"
                  />
                )}
                <span className="relative z-10">
                  {isRTL ? tab.labelAr : tab.labelEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Pillars Container with Slide 6 Stagger & Spring Motion */}
      <div className="flex-1 flex items-stretch my-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch"
          >
            {/* Left: Technical Skills Pillar */}
            {(activeTab === 'both' || activeTab === 'tech') && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className={`p-5 sm:p-6 rounded-2xl bg-white border border-blue-200/90 shadow-sm hover:shadow-md flex flex-col justify-between text-start transition-all ${
                  activeTab === 'tech' ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-black shadow-sm">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider">
                          HARD SKILLS • 50% WEIGHT
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900">
                          {isRTL ? 'المهارات الفنية والتقنية (Technical Stack)' : 'Technical Skillset'}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold">
                      {isRTL ? 'كود وأدوات' : 'Code & Tools'}
                    </span>
                  </div>

                  <div className="space-y-2.5 mb-3">
                    {techSkills.map((sk, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 leading-tight">{sk.title}</h4>
                          <p className="text-[11px] text-slate-500 font-medium">{sk.desc}</p>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                          {sk.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{isRTL ? 'المخرجات: كود نظيف واستعلامات سريعة' : 'Outputs: Clean pipelines & data models'}</span>
                  <span className="text-blue-600 font-bold font-mono">50% Impact</span>
                </div>
              </motion.div>
            )}

            {/* Right: Soft Skills Pillar */}
            {(activeTab === 'both' || activeTab === 'soft') && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className={`p-5 sm:p-6 rounded-2xl bg-white border border-orange-200/90 shadow-sm hover:shadow-md flex flex-col justify-between text-start transition-all ${
                  activeTab === 'soft' ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center font-black shadow-sm">
                        <Brain className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider">
                          SOFT & BUSINESS • 50% WEIGHT
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900">
                          {isRTL ? 'مهارات البزنس والتواصل (Business & Soft)' : 'Business & Soft Skills'}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold">
                      {isRTL ? 'استراتيجية وقيمة' : 'Strategy & Value'}
                    </span>
                  </div>

                  <div className="space-y-2.5 mb-3">
                    {softSkills.map((sk, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 leading-tight">{sk.title}</h4>
                          <p className="text-[11px] text-slate-500 font-medium">{sk.desc}</p>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200 shrink-0">
                          {sk.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{isRTL ? 'المخرجات: قرارات استراتيجية وتوصيات مقنعة' : 'Outputs: Executive alignment & business growth'}</span>
                  <span className="text-orange-600 font-bold font-mono">50% Impact</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

