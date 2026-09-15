import React, { useState } from 'react';
import { motion } from 'motion/react';
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

  const techSkills = [
    { title: 'Excel & Advanced Spreadsheets', desc: isRTL ? 'معادلات، تنظيف بيانات، و Pivot Tables' : 'Formulas, Pivot Tables, Data Cleansing', badge: 'Core' },
    { title: 'SQL & Database Architecture', desc: isRTL ? 'استعلامات، ربط جداول، واسترجاع ملايين السجلات' : 'Queries, Joins, Aggregation, Subqueries', badge: 'Top In-Demand' },
    { title: 'Python for Data Analysis', desc: isRTL ? 'مكتبات NumPy و Pandas و Seaborn' : 'NumPy, Pandas, Matplotlib, Seaborn', badge: 'Automation' },
    { title: 'BI Dashboards (Power BI / Tableau)', desc: isRTL ? 'تصميم لوحات تفاعلية ونمذجة DAX' : 'DAX Modeling, Power Query, Storytelling', badge: 'Business Facing' }
  ];

  const softSkills = [
    { title: 'Business Acumen (فهم البزنس)', desc: isRTL ? 'ربط الأرقام بأهداف الشركة وأرباحها واستراتيجيتها' : 'Connecting metrics directly to revenue and business goals', badge: 'Strategy' },
    { title: 'Data Storytelling & Communication', desc: isRTL ? 'شرح النتائج المعقدة للإدارة بلغة بسيطة ومقنعة' : 'Translating complex findings into clear executive actions', badge: 'Influence' },
    { title: 'Problem Solving & Logic', desc: isRTL ? 'تفكيك المشاكل الغامضة إلى خطوات تحليلية واضحة' : 'Breaking down ambiguous business questions logically', badge: 'Thinking' },
    { title: 'Critical Thinking (التفكير النقدي)', desc: isRTL ? 'التحقق من صحة البيانات وعدم قبول النتائج بسطحية' : 'Questioning assumptions and validating data veracity', badge: 'Quality' }
  ];

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-1 max-w-6xl mx-auto select-none">
      {/* Top Ratio Banner & Switcher */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold text-slate-500 uppercase">
            {isRTL ? 'المعادلة الذهبية للنجاح في سوق العمل (50% فني + 50% تواصل وبزنس):' : 'The Job-Ready Equation (50% Technical + 50% Business & Soft Skills):'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl shadow-inner">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'both' ? 'bg-white text-blue-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isRTL ? 'المصفوفة الكاملة' : 'Complete Matrix'}
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tech' ? 'bg-white text-blue-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isRTL ? 'التقنية فقط (50%)' : 'Technical (50%)'}
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'soft' ? 'bg-white text-orange-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isRTL ? 'الشخصية والبزنس (50%)' : 'Soft Skills (50%)'}
          </button>
        </div>
      </div>

      {/* Two Pillars Grid with Gentle Staggered Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Left: Technical Skills Pillar */}
        {(activeTab === 'both' || activeTab === 'tech') && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
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
                  Code & Tools
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
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
                  Strategy & Value
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
      </div>
    </div>
  );
};
