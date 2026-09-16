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
  isDark?: boolean;
}

export const TypesOfDataVisual: React.FC<TypesOfDataVisualProps> = ({ isRTL, isDark = false }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'qual' | 'quant'>('all');

  const tabs = [
    { id: 'all', labelAr: 'الكل (All Types)', labelEn: 'All Types' },
    { id: 'qual', labelAr: 'البيانات النوعية (Qualitative)', labelEn: 'Qualitative Data' },
    { id: 'quant', labelAr: 'البيانات الكمية (Quantitative)', labelEn: 'Quantitative Data' },
  ] as const;

  const cardBgBase = isDark
    ? 'bg-slate-900/90 border-slate-800 shadow-xl backdrop-blur-xl text-white'
    : 'bg-white border-slate-200/90 shadow-md hover:shadow-xl text-slate-900';

  const innerBoxBg = isDark
    ? 'bg-slate-950/60 border-slate-800 text-slate-300'
    : 'bg-slate-50 border-slate-200/80 text-slate-700';

  return (
    <div className={`flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      {/* Top Filter Tabs Bar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {isRTL ? 'نظام تصنيف البيانات الأساسي:' : 'Data Classification System:'}
          </span>
        </div>

        {/* Segmented Control */}
        <div className={`flex items-center gap-1.5 p-1 rounded-xl shadow-inner border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? (isDark ? 'text-blue-400 font-black shadow-sm' : 'text-blue-700 font-black shadow-sm')
                    : (isDark ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold')
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTabPillDarkClean"
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className={`absolute inset-0 rounded-lg border shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200/90'}`}
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
              {/* Qualitative Pillar */}
              <motion.div 
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className={`flex flex-col justify-between p-5 sm:p-6 rounded-2xl border transition-all text-start ${cardBgBase} ${isDark ? 'hover:border-blue-500/50' : 'hover:border-blue-300'}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-sm border ${isDark ? 'bg-blue-950/60 border-blue-800/80 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}>
                        <Tag className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          {isRTL ? 'CATEGORICAL • وصفية / نوعية' : 'CATEGORICAL • QUALITATIVE'}
                        </span>
                        <h3 className={`text-xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                          {isRTL ? 'البيانات النوعية (Qualitative Data)' : 'Qualitative Data'}
                        </h3>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg border text-xs font-bold ${isDark ? 'bg-blue-950/60 border-blue-800 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
                      {isRTL ? 'خصائص وفئات' : 'Non-Numerical'}
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm mb-4 leading-relaxed font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {isRTL 
                      ? 'بيانات تصف سمات وخصائص ومجموعات، ولا يمكن إجراء عمليات حسابية رياضية عليها مباشرة (كالجمع أو المتوسط).' 
                      : 'Descriptive characteristics, labels, and groups that cannot be mathematically calculated directly.'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    {/* Nominal */}
                    <div className={`p-3.5 rounded-xl border ${innerBoxBg}`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                        <h4 className={`text-xs font-bold uppercase ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          {isRTL ? 'اسمية (Nominal)' : 'Nominal (No Order)'}
                        </h4>
                      </div>
                      <p className={`text-[11px] mb-2.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {isRTL ? 'فئات بلا ترتيب تفضيلي' : 'Categories with no intrinsic order'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-cyan-300' : 'bg-white border-slate-200 text-cyan-700'}`}>
                          {isRTL ? 'المدن (Cairo, Dubai)' : 'Cities (London, NY)'}
                        </span>
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-cyan-300' : 'bg-white border-slate-200 text-cyan-700'}`}>
                          {isRTL ? 'الألوان (Red, Blue)' : 'Colors (Red, Blue)'}
                        </span>
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-cyan-300' : 'bg-white border-slate-200 text-cyan-700'}`}>
                          {isRTL ? 'النوع (M/F)' : 'Gender (M/F)'}
                        </span>
                      </div>
                    </div>

                    {/* Ordinal */}
                    <div className={`p-3.5 rounded-xl border ${innerBoxBg}`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        <h4 className={`text-xs font-bold uppercase ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          {isRTL ? 'ترتيبية (Ordinal)' : 'Ordinal (Ordered)'}
                        </h4>
                      </div>
                      <p className={`text-[11px] mb-2.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {isRTL ? 'فئات تخضع لتسلسل وترتيب' : 'Categories with meaningful rank'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-blue-300' : 'bg-white border-slate-200 text-blue-700'}`}>
                          {isRTL ? 'التقييم (Low, Med, High)' : 'Rank (Low, Med, High)'}
                        </span>
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-blue-300' : 'bg-white border-slate-200 text-blue-700'}`}>
                          {isRTL ? 'النجوم (⭐⭐⭐⭐⭐)' : 'Rating (1 to 5 Stars)'}
                        </span>
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-blue-300' : 'bg-white border-slate-200 text-blue-700'}`}>
                          {isRTL ? 'المستوى التعليمي' : 'Education Level'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`pt-2.5 border-t flex items-center justify-between text-[11px] font-medium ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
                  <span>{isRTL ? 'الأدوات: Bar Charts, Group By, Slicers' : 'Target Visuals: Bar Charts, Donut, Frequency'}</span>
                  <span className="text-blue-600 font-bold">Categorical</span>
                </div>
              </motion.div>

              {/* Quantitative Pillar */}
              <motion.div 
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className={`flex flex-col justify-between p-5 sm:p-6 rounded-2xl border transition-all text-start ${cardBgBase} ${isDark ? 'hover:border-amber-500/50' : 'hover:border-amber-300'}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-sm border ${isDark ? 'bg-amber-950/60 border-amber-800/80 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-600'}`}>
                        <Hash className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold uppercase ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                          {isRTL ? 'NUMERICAL • قياسية / رقمية' : 'NUMERICAL • QUANTITATIVE'}
                        </span>
                        <h3 className={`text-xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                          {isRTL ? 'البيانات الكمية (Quantitative Data)' : 'Quantitative Data'}
                        </h3>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg border text-xs font-bold ${isDark ? 'bg-amber-950/60 border-amber-800 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
                      {isRTL ? 'أرقام وحسابات' : 'Calculable Numbers'}
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm mb-4 leading-relaxed font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {isRTL 
                      ? 'بيانات رقمية قابلة للقياس والعد، وتخضع لجميع العمليات الحسابية والإحصائية (Sum, Average, Variance).' 
                      : 'Measurable numerical values that support full mathematical calculations and statistical aggregations.'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    {/* Discrete */}
                    <div className={`p-3.5 rounded-xl border ${innerBoxBg}`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <h4 className={`text-xs font-bold uppercase ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          {isRTL ? 'منفصلة (Discrete)' : 'Discrete (Countable)'}
                        </h4>
                      </div>
                      <p className={`text-[11px] mb-2.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {isRTL ? 'أعداد صحيحة تعد بالوحدات' : 'Countable whole integers'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-amber-300' : 'bg-white border-slate-200 text-amber-700'}`}>
                          {isRTL ? 'عدد الطلبات (42)' : 'Order Count (42)'}
                        </span>
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-amber-300' : 'bg-white border-slate-200 text-amber-700'}`}>
                          {isRTL ? 'عدد الموظفين (150)' : 'Employees (150)'}
                        </span>
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-amber-300' : 'bg-white border-slate-200 text-amber-700'}`}>
                          {isRTL ? 'مرات الزيارة (8)' : 'Page Visits (8)'}
                        </span>
                      </div>
                    </div>

                    {/* Continuous */}
                    <div className={`p-3.5 rounded-xl border ${innerBoxBg}`}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                        <h4 className={`text-xs font-bold uppercase ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          {isRTL ? 'متصلة (Continuous)' : 'Continuous (Measurable)'}
                        </h4>
                      </div>
                      <p className={`text-[11px] mb-2.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {isRTL ? 'قيم تقاس في مدى مستمر' : 'Measurable infinite decimals'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-orange-300' : 'bg-white border-slate-200 text-orange-700'}`}>
                          {isRTL ? 'الإيرادات ($1,249.50)' : 'Revenue ($1,249.50)'}
                        </span>
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-orange-300' : 'bg-white border-slate-200 text-orange-700'}`}>
                          {isRTL ? 'الوقت (4.25 min)' : 'Duration (4.25 min)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`pt-2.5 border-t flex items-center justify-between text-[11px] font-medium ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
                    <span>{isRTL ? 'الأدوات: Line Plots, Histograms, KPIs' : 'Target Visuals: Histograms, Line, Scatter, KPIs'}</span>
                    <span className={`font-bold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>Numerical</span>
                  </div>
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
              className={`w-full h-full p-6 sm:p-7 rounded-2xl border flex flex-col justify-between text-start ${
                isDark 
                  ? 'border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl text-slate-100' 
                  : 'border-slate-200/90 bg-white shadow-md text-slate-900'
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex items-center justify-between pb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-3 rounded-xl border shadow-sm ${
                    isDark ? 'bg-blue-950/60 border-blue-800 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                  }`}>
                    <Tag className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      {isRTL ? 'التحليل الاستكشافي للبيانات الوصفية' : 'Categorical & Descriptive Analysis'}
                    </span>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                      {isRTL ? 'البيانات النوعية (Qualitative Data Deep-Dive)' : 'Qualitative Data Deep-Dive'}
                    </h3>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-lg border text-xs font-bold ${
                  isDark ? 'bg-blue-950/60 border-blue-800 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'
                }`}>
                  {isRTL ? 'فئات وخصائص' : 'Categories & Non-Numeric'}
                </span>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto py-3">
                {/* Nominal Deep Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                  className={`p-5 rounded-xl border shadow-sm flex flex-col justify-between ${
                    isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full bg-cyan-500" />
                      <h4 className={`text-base font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                        {isRTL ? '1. البيانات الاسمية (Nominal Data)' : '1. Nominal Data (Unordered Categories)'}
                      </h4>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {isRTL 
                        ? 'فئات وتسميات لا يوجد بينها أي ترتيب طبيعي أو تفضيل رياضي. لا يمكنك القول أن إحداها أكبر أو أصغر من الأخرى.'
                        : 'Labels and tags with no intrinsic mathematical hierarchy or rank. You cannot say one is greater than another.'}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg border text-xs ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
                  }`}>
                    <span className={`font-bold block mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      {isRTL ? '💡 أمثلة شائعة في العمل:' : '💡 Common Enterprise Examples:'}
                    </span>
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
                  className={`p-5 rounded-xl border shadow-sm flex flex-col justify-between ${
                    isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500" />
                      <h4 className={`text-base font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                        {isRTL ? '2. البيانات الترتيبية (Ordinal Data)' : '2. Ordinal Data (Ranked Categories)'}
                      </h4>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {isRTL 
                        ? 'فئات وصفية تحمل تسلسلاً وترتيباً منطقياً معلوماً، لكن المسافات الرقمية الدقيقة بين المستويات ليست متساوية رياضياً.'
                        : 'Categorical values that follow a clear logical hierarchy or sequence, but mathematical intervals between them are not fixed.'}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg border text-xs ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
                  }`}>
                    <span className={`font-bold block mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      {isRTL ? '💡 أمثلة شائعة في العمل:' : '💡 Common Enterprise Examples:'}
                    </span>
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
                className={`pt-3 border-t flex items-center justify-between text-xs font-medium ${
                  isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
                }`}
              >
                <span>{isRTL ? '💡 طريقة التمثيل الأمثل: Bar Charts, Pie/Donut Charts, Cross-Tabs (Pivot Tables)' : '💡 Best Visual Representation: Bar Charts, Donut Charts, Frequency Tables'}</span>
                <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Qualitative Analysis</span>
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
              className={`w-full h-full p-6 sm:p-7 rounded-2xl border flex flex-col justify-between text-start ${
                isDark 
                  ? 'border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl text-slate-100' 
                  : 'border-slate-200/90 bg-white shadow-md text-slate-900'
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex items-center justify-between pb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`p-3 rounded-xl border shadow-sm ${
                    isDark ? 'bg-amber-950/60 border-amber-800 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-600'
                  }`}>
                    <Hash className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                      {isRTL ? 'التحليل الحسابي والإحصائي' : 'Numerical & Statistical Analysis'}
                    </span>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                      {isRTL ? 'البيانات الكمية (Quantitative Data Deep-Dive)' : 'Quantitative Data Deep-Dive'}
                    </h3>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-lg border text-xs font-bold ${
                  isDark ? 'bg-amber-950/60 border-amber-800 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-700'
                }`}>
                  {isRTL ? 'أرقام وقياسات' : 'Numbers & Calculations'}
                </span>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto py-3">
                {/* Discrete Deep Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                  className={`p-5 rounded-xl border shadow-sm flex flex-col justify-between ${
                    isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full bg-amber-500" />
                      <h4 className={`text-base font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                        {isRTL ? '1. البيانات المنفصلة (Discrete Data)' : '1. Discrete Data (Countable Units)'}
                      </h4>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {isRTL 
                        ? 'قيم عددية صحيحة ناتجة عن عملية "العد" (Counting). تأتي دائماً بأعداد صحيحة ولا تقبل الكسور في العالم الحقيقي.'
                        : 'Countable numeric integers. You cannot have fractional parts in reality (e.g. 2.5 employees or 1.4 cars).'}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg border text-xs ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
                  }`}>
                    <span className={`font-bold block mb-1 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                      {isRTL ? '💡 أمثلة شائعة في العمل:' : '💡 Common Enterprise Examples:'}
                    </span>
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
                  className={`p-5 rounded-xl border shadow-sm flex flex-col justify-between ${
                    isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full bg-orange-500" />
                      <h4 className={`text-base font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                        {isRTL ? '2. البيانات المتصلة (Continuous Data)' : '2. Continuous Data (Measurable Range)'}
                      </h4>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {isRTL 
                        ? 'قيم عددية ناتجة عن عملية "القياس" (Measuring) ضمن نطاق مستمر. تقبل الكسور العشرية بدقة غير محدودة.'
                        : 'Measurable quantities falling on a continuous mathematical scale with infinite potential decimal fractions.'}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg border text-xs ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
                  }`}>
                    <span className={`font-bold block mb-1 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                      {isRTL ? '💡 أمثلة شائعة في العمل:' : '💡 Common Enterprise Examples:'}
                    </span>
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
                className={`pt-3 border-t flex items-center justify-between text-xs font-medium ${
                  isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
                }`}
              >
                <span>{isRTL ? '💡 طريقة التمثيل الأمثل: Line Charts, Histograms, Scatter Plots, Box Plots, KPI Cards' : '💡 Best Visual Representation: Line Charts, Histograms, Scatter Plots, Box Plots'}</span>
                <span className={`font-bold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>Quantitative Analysis</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
