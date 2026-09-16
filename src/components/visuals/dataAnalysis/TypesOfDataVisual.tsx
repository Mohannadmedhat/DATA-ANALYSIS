import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Tag, 
  Hash, 
  Sparkles,
  SlidersHorizontal,
  CheckCircle2,
  Layers,
  ArrowRight,
  ArrowLeft,
  ListOrdered,
  Activity,
  Calculator,
  Compass
} from 'lucide-react';

interface TypesOfDataVisualProps {
  columns?: any[];
  isRTL: boolean;
}

export const TypesOfDataVisual: React.FC<TypesOfDataVisualProps> = ({ isRTL }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'qual' | 'quant'>('all');

  const tabs = [
    { id: 'all', labelAr: 'الكل (All Types)', labelEn: 'All Types' },
    { id: 'qual', labelAr: 'البيانات النوعية (Qualitative)', labelEn: 'Qualitative Data' },
    { id: 'quant', labelAr: 'البيانات الكمية (Quantitative)', labelEn: 'Quantitative Data' },
  ] as const;

  return (
    <div className="flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none text-slate-100">
      {/* Top Filter Tabs Bar — Dark Style */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase">
            {isRTL ? 'نظام تصنيف البيانات الأساسي:' : 'Data Classification System:'}
          </span>
        </div>

        {/* Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl shadow-inner">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'text-blue-400 font-black shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 font-semibold'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTabPillDarkClean"
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className="absolute inset-0 rounded-lg bg-slate-800 border border-slate-700 shadow-sm"
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

      {/* Main Content Area */}
      <div className="flex-1 flex items-stretch my-auto">
        <AnimatePresence mode="wait">
          {/* TAB 1: ALL TYPES */}
          {activeTab === 'all' && (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch"
            >
              {/* Qualitative Pillar — Dark Card */}
              <motion.div 
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl hover:border-blue-500/50 transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/80 text-blue-400 flex items-center justify-center font-black shadow-sm">
                        <Tag className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-blue-400 uppercase">
                          {isRTL ? 'CATEGORICAL • وصفية / نوعية' : 'CATEGORICAL • QUALITATIVE'}
                        </span>
                        <h3 className="text-xl font-bold text-slate-100">
                          {isRTL ? 'البيانات النوعية (Qualitative Data)' : 'Qualitative Data'}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800 text-blue-300 text-xs font-bold">
                      {isRTL ? 'خصائص وفئات' : 'Non-Numerical'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-normal">
                    {isRTL 
                      ? 'بيانات تصف سمات وخصائص ومجموعات، ولا يمكن إجراء عمليات حسابية رياضية عليها مباشرة (كالجمع أو المتوسط).' 
                      : 'Descriptive characteristics, labels, and groups that cannot be mathematically calculated directly.'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    {/* Nominal */}
                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                        <h4 className="text-xs font-bold text-slate-200 uppercase">
                          {isRTL ? 'اسمية (Nominal)' : 'Nominal (No Order)'}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 mb-2.5">
                        {isRTL ? 'فئات بلا ترتيب تفضيلي' : 'Categories with no intrinsic order'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-cyan-300 font-semibold">
                          {isRTL ? 'المدن (Cairo, Dubai)' : 'Cities (London, NY)'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-cyan-300 font-semibold">
                          {isRTL ? 'الألوان (Red, Blue)' : 'Colors (Red, Blue)'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-cyan-300 font-semibold">
                          {isRTL ? 'النوع (M/F)' : 'Gender (M/F)'}
                        </span>
                      </div>
                    </div>

                    {/* Ordinal */}
                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                        <h4 className="text-xs font-bold text-slate-200 uppercase">
                          {isRTL ? 'ترتيبية (Ordinal)' : 'Ordinal (Ordered)'}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 mb-2.5">
                        {isRTL ? 'فئات تخضع لتسلسل وترتيب' : 'Categories with meaningful rank'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-blue-300 font-semibold">
                          {isRTL ? 'التقييم (Low, Med, High)' : 'Rank (Low, Med, High)'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-blue-300 font-semibold">
                          {isRTL ? 'النجوم (⭐⭐⭐⭐⭐)' : 'Rating (1 to 5 Stars)'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-blue-300 font-semibold">
                          {isRTL ? 'المستوى التعليمي' : 'Education Level'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>{isRTL ? 'الأدوات: Bar Charts, Group By, Slicers' : 'Target Visuals: Bar Charts, Donut, Frequency'}</span>
                  <span className="text-blue-400 font-bold">Categorical</span>
                </div>
              </motion.div>

              {/* Quantitative Pillar — Dark Card */}
              <motion.div 
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl hover:border-amber-500/50 transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/80 text-amber-400 flex items-center justify-center font-black shadow-sm">
                        <Hash className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase">
                          {isRTL ? 'NUMERICAL • قياسية / رقمية' : 'NUMERICAL • QUANTITATIVE'}
                        </span>
                        <h3 className="text-xl font-bold text-slate-100">
                          {isRTL ? 'البيانات الكمية (Quantitative Data)' : 'Quantitative Data'}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-800 text-amber-300 text-xs font-bold">
                      {isRTL ? 'أرقام وحسابات' : 'Calculable Numbers'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-normal">
                    {isRTL 
                      ? 'بيانات رقمية قابلة للقياس والعد، وتخضع لجميع العمليات الحسابية والإحصائية (Sum, Average, Variance).' 
                      : 'Measurable numerical values that support full mathematical calculations and statistical aggregations.'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    {/* Discrete */}
                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <h4 className="text-xs font-bold text-slate-200 uppercase">
                          {isRTL ? 'منفصلة (Discrete)' : 'Discrete (Countable)'}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 mb-2.5">
                        {isRTL ? 'أعداد صحيحة تعد بالوحدات' : 'Countable whole integers'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-amber-300 font-semibold">
                          {isRTL ? 'عدد الطلبات (42)' : 'Order Count (42)'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-amber-300 font-semibold">
                          {isRTL ? 'عدد الموظفين (150)' : 'Employees (150)'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-amber-300 font-semibold">
                          {isRTL ? 'مرات الزيارة (8)' : 'Page Visits (8)'}
                        </span>
                      </div>
                    </div>

                    {/* Continuous */}
                    <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                        <h4 className="text-xs font-bold text-slate-200 uppercase">
                          {isRTL ? 'متصلة (Continuous)' : 'Continuous (Measurable)'}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 mb-2.5">
                        {isRTL ? 'قيم تقاس في مدى مستمر' : 'Measurable infinite decimals'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-orange-300 font-semibold">
                          {isRTL ? 'الإيرادات ($1,249.50)' : 'Revenue ($1,249.50)'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-orange-300 font-semibold">
                          {isRTL ? 'الوقت (4.25 min)' : 'Duration (4.25 min)'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-orange-300 font-semibold">
                          {isRTL ? 'درجة الحرارة (36.8°)' : 'Temp (36.8°)'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>{isRTL ? 'الأدوات: Line Plots, Histograms, KPIs' : 'Target Visuals: Histograms, Line, Scatter, KPIs'}</span>
                  <span className="text-amber-400 font-bold">Numerical</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* TAB 2: QUALITATIVE DEEP-DIVE */}
          {activeTab === 'qual' && (
            <motion.div
              key="qual"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl flex flex-col justify-between text-start"
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between pb-4 border-b border-slate-800"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800 text-blue-400 shadow-sm">
                    <Tag className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase">
                      {isRTL ? 'التحليل الاستكشافي للبيانات الوصفية' : 'Categorical & Descriptive Analysis'}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-100">
                      {isRTL ? 'البيانات النوعية (Qualitative Data Deep-Dive)' : 'Qualitative Data Deep-Dive'}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-800 text-blue-300 text-xs font-bold">
                  {isRTL ? 'فئات وخصائص' : 'Categories & Non-Numeric'}
                </span>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto py-3">
                {/* Nominal Deep Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                  className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full bg-cyan-400" />
                      <h4 className="text-base font-bold text-slate-100">
                        {isRTL ? '1. البيانات الاسمية (Nominal Data)' : '1. Nominal Data (Unordered Categories)'}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      {isRTL 
                        ? 'فئات وتسميات لا يوجد بينها أي ترتيب طبيعي أو تفضيل رياضي. لا يمكنك القول أن إحداها أكبر أو أصغر من الأخرى.'
                        : 'Labels and tags with no intrinsic mathematical hierarchy or rank. You cannot say one is greater than another.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span className="text-blue-400 font-bold block mb-1">{isRTL ? '💡 أمثلة شائعة في العمل:' : '💡 Common Enterprise Examples:'}</span>
                    {isRTL 
                      ? 'الدولة (Egypt, KSA, UAE) • نظام التشغيل (iOS, Android) • نوع العميل (New / Returning)'
                      : 'Country (UK, US, UAE) • Device OS (iOS, Android) • Customer Type (New, Returning)'}
                  </div>
                </motion.div>

                {/* Ordinal Deep Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
                  className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full bg-blue-400" />
                      <h4 className="text-base font-bold text-slate-100">
                        {isRTL ? '2. البيانات الترتيبية (Ordinal Data)' : '2. Ordinal Data (Ranked Categories)'}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      {isRTL 
                        ? 'فئات وصفية تحمل تسلسلاً وترتيباً منطقياً معلوماً، لكن المسافات الرقمية الدقيقة بين المستويات ليست متساوية رياضياً.'
                        : 'Categorical values that follow a clear logical hierarchy or sequence, but mathematical intervals between them are not fixed.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span className="text-blue-400 font-bold block mb-1">{isRTL ? '💡 أمثلة شائعة في العمل:' : '💡 Common Enterprise Examples:'}</span>
                    {isRTL 
                      ? 'تقييم الخدمة (راضي جداً، محايد، غير راضي) • مستوى الأولوية (High, Med, Low) • الحجم (S, M, L)'
                      : 'Satisfaction (Satisfied, Neutral, Dissatisfied) • Priority (Urgent, Normal, Low) • Size (S, M, L)'}
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium"
              >
                <span>{isRTL ? '💡 طريقة التمثيل الأمثل: Bar Charts, Pie/Donut Charts, Cross-Tabs (Pivot Tables)' : '💡 Best Visual Representation: Bar Charts, Donut Charts, Frequency Tables'}</span>
                <span className="text-blue-400 font-bold">Qualitative Analysis</span>
              </motion.div>
            </motion.div>
          )}

          {/* TAB 3: QUANTITATIVE DEEP-DIVE */}
          {activeTab === 'quant' && (
            <motion.div
              key="quant"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full p-6 sm:p-7 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl flex flex-col justify-between text-start"
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between pb-4 border-b border-slate-800"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-800 text-amber-400 shadow-sm">
                    <Hash className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase">
                      {isRTL ? 'التحليل الحسابي والإحصائي' : 'Numerical & Statistical Analysis'}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-100">
                      {isRTL ? 'البيانات الكمية (Quantitative Data Deep-Dive)' : 'Quantitative Data Deep-Dive'}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-amber-950/60 border border-amber-800 text-amber-300 text-xs font-bold">
                  {isRTL ? 'أرقام وقياسات' : 'Numbers & Calculations'}
                </span>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto py-3">
                {/* Discrete Deep Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                  className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full bg-amber-400" />
                      <h4 className="text-base font-bold text-slate-100">
                        {isRTL ? '1. البيانات المنفصلة (Discrete Data)' : '1. Discrete Data (Countable Units)'}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      {isRTL 
                        ? 'قيم عددية صحيحة ناتجة عن عملية "العد" (Counting). تأتي دائماً بأعداد صحيحة ولا تقبل الكسور في العالم الحقيقي.'
                        : 'Countable numeric integers. You cannot have fractional parts in reality (e.g. 2.5 employees or 1.4 cars).'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span className="text-amber-400 font-bold block mb-1">{isRTL ? '💡 أمثلة شائعة في العمل:' : '💡 Common Enterprise Examples:'}</span>
                    {isRTL 
                      ? 'عدد المعاملات (185 طلب) • عدد الموظفين في الفرع (12 موظف) • عدد الشكاوى (4 تذاكر)'
                      : 'Transactions count (185 orders) • Store employees (12 staff) • Support tickets (4 open)'}
                  </div>
                </motion.div>

                {/* Continuous Deep Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
                  className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full bg-orange-400" />
                      <h4 className="text-base font-bold text-slate-100">
                        {isRTL ? '2. البيانات المتصلة (Continuous Data)' : '2. Continuous Data (Measurable Range)'}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                      {isRTL 
                        ? 'قيم عددية ناتجة عن عملية "القياس" (Measuring) ضمن نطاق مستمر. تقبل الكسور العشرية بدقة غير محدودة.'
                        : 'Measurable quantities falling on a continuous mathematical scale with infinite potential decimal fractions.'}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span className="text-orange-400 font-bold block mb-1">{isRTL ? '💡 أمثلة شائعة في العمل:' : '💡 Common Enterprise Examples:'}</span>
                    {isRTL 
                      ? 'الإيرادات المالية ($4,829.75) • زمن تحميل الصفحة (1.42 ثانية) • مسافة التوصيل (14.8 كم)'
                      : 'Revenue ($4,829.75) • Page load latency (1.42s) • Delivery distance (14.8 km)'}
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium"
              >
                <span>{isRTL ? '💡 طريقة التمثيل الأمثل: Line Charts, Histograms, Scatter Plots, Box Plots, KPI Cards' : '💡 Best Visual Representation: Line Charts, Histograms, Scatter Plots, Box Plots'}</span>
                <span className="text-amber-400 font-bold">Quantitative Analysis</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
