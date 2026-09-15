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
  FileSpreadsheet,
  Filter,
  Play
} from 'lucide-react';

interface NumPyPandasVisualProps {
  isRTL: boolean;
}

export const NumPyPandasVisual: React.FC<NumPyPandasVisualProps> = ({ isRTL }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'numpy' | 'pandas'>('all');

  // Deep Dive State for NumPy (Vectorization speed benchmark)
  const [vectorSpeedTested, setVectorSpeedTested] = useState<boolean>(false);

  // Deep Dive State for Pandas (Interactive DataFrame Filter)
  const [deptFilter, setDeptFilter] = useState<'All' | 'Tech' | 'Sales' | 'Finance'>('All');

  const tabs = [
    { id: 'all', labelAr: 'المقارنة المزدوجة (All / Both)', labelEn: 'Dual Comparison' },
    { id: 'numpy', labelAr: 'مكتبة نمباي (NumPy Engine)', labelEn: 'NumPy Engine' },
    { id: 'pandas', labelAr: 'مكتبة بانداس (Pandas Tables)', labelEn: 'Pandas DataFrames' },
  ] as const;

  const sampleRows = [
    { id: 1, name: isRTL ? 'أحمد' : 'Ahmed', dept: 'Tech', salary: 14200, rating: 4.8 },
    { id: 2, name: isRTL ? 'منى' : 'Mona', dept: 'Sales', salary: 11500, rating: 4.9 },
    { id: 3, name: isRTL ? 'كريم' : 'Karim', dept: 'Finance', salary: 13000, rating: 4.6 },
    { id: 4, name: isRTL ? 'سارة' : 'Sara', dept: 'Tech', salary: 15800, rating: 5.0 },
    { id: 5, name: isRTL ? 'طارق' : 'Tarek', dept: 'Sales', salary: 9800, rating: 4.5 },
  ];

  const filteredRows = deptFilter === 'All' 
    ? sampleRows 
    : sampleRows.filter(r => r.dept === deptFilter);

  return (
    <div className="flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none text-slate-900">
      {/* Top Filter Tabs Bar — Exactly matching Slide 6 TypesOfDataVisual */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {isRTL ? 'الثنائي البرمجي لتحليل البيانات في Python:' : 'Python Core Data Stack Ecosystem:'}
          </span>
        </div>

        {/* Calm Segmented Control with Light Pill Selection (Identical to Slide 6) */}
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

      {/* Main Content Area with Slow Gentle Staggered Float-In Animation (matching Slide 6) */}
      <div className="flex-1 flex items-stretch my-auto">
        <AnimatePresence mode="wait">
          {/* TAB 1: ALL / DUAL COMPARISON (Side-by-side matching Slide 20 in PDF) */}
          {activeTab === 'all' && (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch"
            >
              {/* NumPy Pillar Card (Blue Header) */}
              <motion.div 
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-black shadow-sm">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                          {isRTL ? 'الأساس الرياضي والحسابي' : 'Numerical Foundation'}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                          NUMPY
                        </h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                      import numpy as np
                    </span>
                  </div>

                  {/* 4 Exact Bullets from Slide 20 in PDF */}
                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-2.5 font-medium leading-relaxed">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-blue-600" />
                      <span>
                        {isRTL ? 'عمليات حسابية فائقة السرعة (Fast numerical operations).' : 'Fast numerical operations'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 font-medium leading-relaxed">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-blue-600" />
                      <span>
                        {isRTL ? 'التعامل مع المصفوفات متعددة الأبعاد (Arrays and matrices).' : 'Works with arrays and matrices'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 font-medium leading-relaxed">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-blue-600" />
                      <span>
                        {isRTL ? 'حجر الأساس لكافة مكتبات البيانات في بايثون (Foundation for other data libraries).' : 'Foundation for other data libraries'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 font-medium leading-relaxed">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-blue-600" />
                      <span>
                        {isRTL ? 'المحرك الأساسي للحسابات الإحصائية المتقدمة (Powers statistical calculations).' : 'Powers statistical calculations'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom interactive mini-tag */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1 text-blue-600">
                    <Binary className="w-3.5 h-3.5" />
                    N-Dimensional ndarray
                  </span>
                  <button
                    onClick={() => setActiveTab('numpy')}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-bold cursor-pointer"
                  >
                    {isRTL ? 'استكشف محرك NumPy' : 'Explore Engine'}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>

              {/* Pandas Pillar Card (Orange Header) */}
              <motion.div 
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-orange-100 bg-white shadow-sm hover:shadow-md hover:border-orange-200 transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center font-black shadow-sm">
                        <Table className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                          {isRTL ? 'معالجة وتنظيم الجداول' : 'Tabular Manipulation'}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                          PANDAS
                        </h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-orange-50 text-orange-700 border border-orange-100">
                      import pandas as pd
                    </span>
                  </div>

                  {/* 4 Exact Bullets from Slide 20 in PDF */}
                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-2.5 font-medium leading-relaxed">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-orange-500" />
                      <span>
                        {isRTL ? 'تنظيف ومعالجة واستكشاف البيانات (Data manipulation and analysis).' : 'Data manipulation and analysis'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 font-medium leading-relaxed">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-orange-500" />
                      <span>
                        {isRTL ? 'هياكل DataFrames لتنظيم الصفوف والأعمدة بسهولة (DataFrames organize rows and columns).' : 'DataFrames organize rows and columns'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 font-medium leading-relaxed">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-orange-500" />
                      <span>
                        {isRTL ? 'فلترة وتجميع ودمج البيانات بمرونة (Filter, group, and merge datasets easily).' : 'Filter, group, and merge datasets easily'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 font-medium leading-relaxed">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-orange-500" />
                      <span>
                        {isRTL ? 'قراءة صيغ CSV و Excel و SQL بلمسة زر (Reads CSV, Excel, SQL and more).' : 'Reads CSV, Excel, SQL and more'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom interactive mini-tag */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1 text-orange-600">
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    2D Tabular DataFrames
                  </span>
                  <button
                    onClick={() => setActiveTab('pandas')}
                    className="text-orange-600 hover:text-orange-800 flex items-center gap-1 font-bold cursor-pointer"
                  >
                    {isRTL ? 'استكشف جداول Pandas' : 'Explore DataFrames'}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* TAB 2: NUMPY DEEP DIVE (Interactive Matrix & Vectorization) */}
          {activeTab === 'numpy' && (
            <motion.div
              key="numpy"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch"
            >
              {/* NumPy Card 1: Vectorization Speed Test */}
              <div className="p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {isRTL ? 'المعالجة الموجهة (Vectorization vs Loops)' : 'Vectorization vs Python Native Loops'}
                      </h3>
                      <span className="text-[11px] text-slate-500">
                        {isRTL ? 'السرعة الفائقة المكتوبة بلغة C' : 'Compiled C-speed operations under the hood'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {isRTL 
                      ? 'مكتبة NumPy تنفذ العمليات الحسابية دفعة واحدة على كل العناصر بدون استخدام حلقات for loop البطيئة.' 
                      : 'NumPy executes mathematical operations across entire arrays simultaneously without sluggish Python loops.'}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                      <div className="flex justify-between font-bold mb-1">
                        <span>Python Native Loop (1M items):</span>
                        <span className="text-rose-600 font-mono">~145 ms</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full w-[95%]" />
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs">
                      <div className="flex justify-between font-bold mb-1 text-blue-900">
                        <span>NumPy Vectorized Array (1M items):</span>
                        <span className="text-blue-700 font-mono font-black">~1.4 ms (100x Faster!)</span>
                      </div>
                      <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full w-[5%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-900 rounded-xl font-mono text-[11px] text-slate-200 shadow-inner">
                  <span className="text-slate-400"># Clean one-liner vectorization</span><br />
                  arr = np.array([10, 20, 30])<br />
                  result = arr * 1.15 <span className="text-emerald-400"># Instant 15% increase</span>
                </div>
              </div>

              {/* NumPy Card 2: 1D vs 2D vs 3D Array Matrix */}
              <div className="p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {isRTL ? 'هياكل المصفوفات (N-Dimensional Arrays)' : 'N-Dimensional Array Architecture'}
                      </h3>
                      <span className="text-[11px] text-slate-500">1D Vectors • 2D Matrices • 3D Tensors</span>
                    </div>
                  </div>

                  {/* 2D Matrix Visual Representation */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl mb-3">
                    <div className="text-[11px] font-bold text-slate-500 mb-2 font-mono">
                      arr_2d = np.zeros((3, 4))
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[12, 45, 78, 23, 56, 89, 34, 67, 90, 11, 22, 33].map((val, idx) => (
                        <div 
                          key={idx} 
                          className="h-8 rounded bg-white border border-blue-200 text-blue-700 font-mono text-xs flex items-center justify-center font-bold hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-500 border-t pt-2.5 flex items-center justify-between">
                  <span>{isRTL ? 'الأبعاد والأشكال:' : 'Shape & Data Type:'}</span>
                  <span className="font-mono font-bold text-blue-600">shape: (3, 4) | dtype: int64</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: PANDAS DEEP DIVE (Interactive DataFrame Table) */}
          {activeTab === 'pandas' && (
            <motion.div
              key="pandas"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between w-full h-full p-5 sm:p-6 rounded-2xl border border-orange-200 bg-white shadow-sm text-start"
            >
              <div>
                {/* DataFrame Header & Filter Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                      <Table className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {isRTL ? 'معاينة تفاعلية لـ Pandas DataFrame' : 'Interactive Pandas DataFrame Explorer'}
                      </h3>
                      <span className="text-[11px] text-slate-500">df = pd.DataFrame(data)</span>
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200">
                    <span className="text-[10px] font-bold text-slate-500 px-2 flex items-center gap-1">
                      <Filter className="w-3 h-3" />
                      {isRTL ? 'فلتر بالقسم:' : 'Dept:'}
                    </span>
                    {(['All', 'Tech', 'Sales', 'Finance'] as const).map((dept) => (
                      <button
                        key={dept}
                        onClick={() => setDeptFilter(dept)}
                        className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                          deptFilter === dept 
                            ? 'bg-orange-500 text-white shadow-sm' 
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Table View */}
                <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-inner">
                  <table className="w-full text-xs text-start">
                    <thead className="bg-slate-50 border-b border-slate-200 font-mono text-[11px] text-slate-600">
                      <tr>
                        <th className="py-2.5 px-3">index</th>
                        <th className="py-2.5 px-3">{isRTL ? 'الاسم (name)' : 'name'}</th>
                        <th className="py-2.5 px-3">{isRTL ? 'القسم (department)' : 'department'}</th>
                        <th className="py-2.5 px-3">{isRTL ? 'الراتب (salary)' : 'salary'}</th>
                        <th className="py-2.5 px-3">{isRTL ? 'التقييم (rating)' : 'rating'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredRows.map((r, i) => (
                        <tr key={r.id} className="hover:bg-orange-50/50 transition-colors">
                          <td className="py-2 px-3 font-mono text-slate-400 font-bold">{i}</td>
                          <td className="py-2 px-3 font-bold text-slate-900">{r.name}</td>
                          <td className="py-2 px-3">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                              {r.dept}
                            </span>
                          </td>
                          <td className="py-2 px-3 font-mono font-bold text-slate-700">${r.salary.toLocaleString()}</td>
                          <td className="py-2 px-3 font-mono text-amber-600 font-bold">★ {r.rating}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* GroupBy & Aggregation Tip */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-700">df.groupby('dept')['salary'].mean():</span>
                  <span className="font-mono text-orange-600 font-bold">
                    Tech: $15,000 | Sales: $10,650 | Finance: $13,000
                  </span>
                </div>
                <span className="text-slate-400 font-mono">Total rows: {filteredRows.length} of 5</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Insight Banner */}
      <div className="mt-2 text-center">
        <span className="text-[11px] font-medium text-slate-400">
          {isRTL 
            ? 'NumPy توفر السرعة الحسابية للمصفوفات، و Pandas تحولها لجداول ذكية سهلة الاستكشاف والفلترة'
            : 'NumPy delivers high-speed numerical array crunching, while Pandas provides flexible tabular DataFrames'}
        </span>
      </div>
    </div>
  );
};
