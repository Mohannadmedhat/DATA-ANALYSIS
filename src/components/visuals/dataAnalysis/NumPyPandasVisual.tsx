import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Table, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Database, 
  ArrowRight, 
  Zap, 
  BarChart3, 
  Binary, 
  FileSpreadsheet 
} from 'lucide-react';

interface NumPyPandasVisualProps {
  isRTL: boolean;
}

export const NumPyPandasVisual: React.FC<NumPyPandasVisualProps> = ({ isRTL }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'numpy' | 'pandas'>('all');

  const tabs = [
    { id: 'all', labelAr: 'المقارنة المزدوجة (All / Both)', labelEn: 'Dual Comparison' },
    { id: 'numpy', labelAr: 'مكتبة نمباي (NumPy Engine)', labelEn: 'NumPy Engine' },
    { id: 'pandas', labelAr: 'مكتبة بانداس (Pandas Tables)', labelEn: 'Pandas DataFrames' },
  ] as const;

  return (
    <div className="flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none text-slate-900">
      {/* Top Filter Tabs Bar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {isRTL ? 'الثنائي البرمجي لتحليل البيانات في Python:' : 'Python Core Data Stack Ecosystem:'}
          </span>
        </div>

        {/* Segmented Control with Smooth Light Pill */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 border border-slate-200 rounded-xl shadow-inner">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'text-blue-700 font-black shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeNumpyPandasPill"
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

      {/* Main Content Area with Staggered Transitions */}
      <div className="flex-1 flex items-stretch my-auto">
        <AnimatePresence mode="wait">
          {/* TAB 1: ALL / DUAL COMPARISON */}
          {activeTab === 'all' && (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch"
            >
              {/* NumPy Pillar Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-sm hover:shadow-md transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-black shadow-sm">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                          NUMERICAL COMPUTING
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          NumPy (Numerical Python)
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold">
                      {isRTL ? 'محرك الرياضيات' : 'Math & Arrays'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                    {isRTL 
                      ? 'المكتبة التأسيسية فائقة السرعة المكتوبة بلغة C للعمليات الرياضية والمصفوفات متعددة الأبعاد (N-D Arrays).' 
                      : 'High-performance C-optimized engine for multi-dimensional arrays, linear algebra, and mathematical operations.'}
                  </p>

                  <div className="space-y-2.5 mb-3">
                    <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <span>{isRTL ? 'سرعة فائقة في الحسابات العددية ومعالجة المصفوفات' : 'Fast numerical operations & matrix math'}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <span>{isRTL ? 'الأساس المتين الذي تبنى عليه باقي مكتبات البيانات والذكاء الاصطناعي' : 'Foundation for other data science libraries'}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <span>{isRTL ? 'تطبيق الحسابات الإحصائية والمتوسطات والانحراف المعياري' : 'Powers advanced statistical & vector calculations'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{isRTL ? 'الاستخدام: الحسابات والمصفوفات' : 'Core Role: Arrays & Math'}</span>
                  <span className="text-blue-600 font-bold font-mono">01</span>
                </div>
              </motion.div>

              {/* Pandas Pillar Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-amber-200 bg-white shadow-sm hover:shadow-md transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center font-black shadow-sm">
                        <Table className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                          DATA MANIPULATION
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          Pandas (Panel Data)
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold">
                      {isRTL ? 'إكسيل البرمجي' : 'Tabular DataFrames'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                    {isRTL 
                      ? 'الأداة الأشهر عالمياً لتنظيم ومعالجة وفحص الجداول الضخمة عبر هياكل الـ DataFrames وتنفيذ عمليات الـ ETL.' 
                      : 'The standard Python library for tabular data manipulation, filtering, merging, and exploratory analysis.'}
                  </p>

                  <div className="space-y-2.5 mb-3">
                    <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>{isRTL ? 'تنظيم وهيكلة البيانات في جداول DataFrames (صفوف وأعمدة)' : 'DataFrames organize rows and columns cleanly'}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>{isRTL ? 'فلترة، تجميع (Groupby)، ودمج الجداول (Merge/Join) بسهولة' : 'Filter, group, aggregate, and merge datasets easily'}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>{isRTL ? 'استيراد وتصدير ملفات CSV, Excel, SQL والـ JSON بأمر واحد' : 'Seamless I/O with CSV, Excel, SQL, and JSON'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{isRTL ? 'الاستخدام: الجداول وتحليل الأعمال' : 'Core Role: DataFrames & ETL'}</span>
                  <span className="text-amber-600 font-bold font-mono">02</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* TAB 2: NUMPY DEEP DIVE */}
          {activeTab === 'numpy' && (
            <motion.div
              key="numpy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full items-stretch"
            >
              <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3">
                    <Binary className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {isRTL ? '1. مصفوفات N-Dimensional' : '1. N-Dimensional Arrays'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isRTL ? 'تخزين ملايين الأرقام في بنية ذاكرة متصلة تستهلك مساحة أقل وتعمل أسرع 50x من قوائم Python العادية.' : 'Contiguous memory allocation that runs 50x faster than standard Python lists.'}
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit mt-3">np.array()</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {isRTL ? '2. العمليات المتجهية (Vectorization)' : '2. Vectorized Math'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isRTL ? 'تطبيق العمليات الحسابية على مصفوفات كاملة بضغطة زر دون الحاجة لكتابة For Loops مكررة.' : 'Execute mathematical operations across entire datasets instantly without explicit loops.'}
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit mt-3">arr * 1.15</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {isRTL ? '3. الإحصاء الرياضي المتقدم' : '3. Advanced Statistics'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isRTL ? 'حساب المتوسط الحسابي، الوسيط، التباين، والانحراف المعياري، والجبر الخطي بدقة متناهية.' : 'Calculate mean, median, standard deviation, percentile, and linear algebra routines.'}
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit mt-3">np.mean(), np.std()</span>
              </div>
            </motion.div>
          )}

          {/* TAB 3: PANDAS DEEP DIVE */}
          {activeTab === 'pandas' && (
            <motion.div
              key="pandas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full items-stretch"
            >
              <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-3">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {isRTL ? '1. هياكل DataFrames' : '1. DataFrames Structure'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isRTL ? 'جداول ثنائية الأبعاد تحتوي على صفوف وأعمدة بعناوين واضحة وأنواع بيانات مختلفة لكل عمود.' : '2D tabular data structures with labeled axes, supporting mixed data types effortlessly.'}
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit mt-3">pd.read_csv()</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-3">
                    <Database className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {isRTL ? '2. التجميع والتلخيص (Group By)' : '2. GroupBy & Pivot'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isRTL ? 'تقسيم البيانات لفئات وتلخيص المؤشرات وحساب إجمالي ومتوسط مبيعات كل فرع في سطر واحد.' : 'Split-apply-combine strategy to summarize metrics across business categories.'}
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit mt-3">df.groupby('region')</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {isRTL ? '3. تنظيف الداتا (Data Cleaning)' : '3. Data Cleaning'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isRTL ? 'معالجة القيم المفقودة (Nulls)، إزالة التكرار، وتصحيح التنسيقات وتغيير أنواع الأعمدة بكفاءة.' : 'Handle missing records (dropna, fillna), eliminate duplicates, and standardize schemas.'}
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit mt-3">df.dropna(), df.drop_duplicates()</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
