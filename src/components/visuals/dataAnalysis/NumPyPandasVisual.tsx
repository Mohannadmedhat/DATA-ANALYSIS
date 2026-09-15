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
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileTap={{ scale: 0.96 }}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'text-blue-700 font-black shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTabPillLightClean"
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className="absolute inset-0 rounded-lg bg-white border border-slate-200/90 shadow-sm"
                  />
                )}
                <span className="relative z-10">
                  {isRTL ? tab.labelAr : tab.labelEn}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area with Gentle Staggered Float-In Animation (matching Slide 6) */}
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
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
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
                  <motion.button
                    onClick={() => setActiveTab('numpy')}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ x: isRTL ? -2 : 2 }}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-bold cursor-pointer"
                  >
                    {isRTL ? 'استكشف محرك NumPy' : 'Explore Engine'}
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
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
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-orange-50 text-orange-700 border border-orange-100">
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
                  <motion.button
                    onClick={() => setActiveTab('pandas')}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ x: isRTL ? -2 : 2 }}
                    className="text-orange-600 hover:text-orange-800 flex items-center gap-1 font-bold cursor-pointer"
                  >
                    {isRTL ? 'استكشف جداول Pandas' : 'Explore DataFrames'}
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* TAB 2: NUMPY DEEP DIVE (Matching Slide 6 Deep-Dive Animation Pattern) */}
          {activeTab === 'numpy' && (
            <motion.div
              key="numpy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full p-6 sm:p-7 rounded-2xl border border-blue-100 bg-white shadow-sm flex flex-col justify-between text-start"
            >
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between pb-3.5 border-b border-slate-100"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shadow-sm">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase">
                      {isRTL ? 'المحرك الرياضي والمصفوفات' : 'Numerical & Matrix Processing Engine'}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {isRTL ? 'مكتبة نمباي (NumPy Deep-Dive)' : 'NumPy Deep-Dive'}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold">
                  import numpy as np
                </span>
              </motion.div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto py-3">
                {/* NumPy Card 1: Vectorization Speed Test */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                  className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <h4 className="text-base font-bold text-slate-900">
                        {isRTL ? '1. المعالجة الموجهة (Vectorization)' : '1. Vectorization vs Python Loops'}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {isRTL 
                        ? 'مكتبة NumPy تنفذ العمليات الحسابية دفعة واحدة على كل العناصر بسرعة لغة C بدون حلقات for loop بطيئة.' 
                        : 'Executes mathematical operations across entire arrays simultaneously at C-speed without Python loops.'}
                    </p>

                    <div className="space-y-2.5 mb-3">
                      <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-xs">
                        <div className="flex justify-between font-bold mb-1">
                          <span>Python Loop (1M items):</span>
                          <span className="text-rose-600 font-mono">~145 ms</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-rose-500 h-full w-[95%]" />
                        </div>
                      </div>

                      <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-xs">
                        <div className="flex justify-between font-bold mb-1 text-blue-900">
                          <span>NumPy Array (1M items):</span>
                          <span className="text-blue-700 font-mono font-black">~1.4 ms (100x Faster!)</span>
                        </div>
                        <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full w-[5%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-slate-900 rounded-lg font-mono text-[11px] text-slate-200">
                    arr = np.array([10, 20, 30])
                    <br />
                    result = arr * 1.15 <span className="text-emerald-400"># Instant vectorized operation</span>
                  </div>
                </motion.div>

                {/* NumPy Card 2: N-Dimensional Arrays */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
                  className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="w-5 h-5 text-blue-600" />
                      <h4 className="text-base font-bold text-slate-900">
                        {isRTL ? '2. مصفوفات متعددة الأبعاد (N-D Arrays)' : '2. N-Dimensional Array Architecture'}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {isRTL 
                        ? 'توفير هياكل بيانات متجانسة النوع (ndarrays) عالية الأداء للـ 1D Vectors و 2D Matrices.' 
                        : 'High-performance homogeneous data structures for 1D vectors, 2D matrices, and multi-dim tensors.'}
                    </p>

                    {/* Matrix Grid */}
                    <div className="p-3 bg-white border border-slate-200 rounded-lg mb-2">
                      <span className="text-[10px] font-bold text-slate-400 font-mono block mb-1.5">np.zeros((3, 4))</span>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[12, 45, 78, 23, 56, 89, 34, 67, 90, 11, 22, 33].map((val, idx) => (
                          <div 
                            key={idx} 
                            className="h-7 rounded bg-blue-50 border border-blue-100 text-blue-700 font-mono text-xs flex items-center justify-center font-bold"
                          >
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 flex justify-between border-t pt-2">
                    <span>Array Shape:</span>
                    <span className="text-blue-600 font-bold">(3, 4) • int64</span>
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium"
              >
                <span>{isRTL ? '💡 النتيجة: سرعة خيالية أساسية تعتمد عليها كافة المكتبات العليا كـ Pandas و SciPy' : '💡 Result: Blazing fast computational engine that underpins Pandas and SciPy'}</span>
                <span className="text-blue-600 font-bold">NumPy Engine</span>
              </motion.div>
            </motion.div>
          )}

          {/* TAB 3: PANDAS DEEP DIVE (Matching Slide 6 Deep-Dive Animation Pattern) */}
          {activeTab === 'pandas' && (
            <motion.div
              key="pandas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full p-6 sm:p-7 rounded-2xl border border-orange-100 bg-white shadow-sm flex flex-col justify-between text-start"
            >
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between pb-3.5 border-b border-slate-100"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 shadow-sm">
                    <Table className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-orange-600 uppercase">
                      {isRTL ? 'معالجة وتنظيف وتجميع الجداول' : 'Tabular Manipulation & DataFrames'}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {isRTL ? 'مكتبة بانداس (Pandas DataFrames Deep-Dive)' : 'Pandas DataFrames Deep-Dive'}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold">
                  import pandas as pd
                </span>
              </motion.div>

              {/* Interactive Table Explorer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                className="my-auto py-2"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5 text-orange-500" />
                    {isRTL ? 'تصفية تفاعلية حسب القسم (df.filter):' : 'Interactive Filter (df.filter):'}
                  </span>

                  <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200">
                    {(['All', 'Tech', 'Sales', 'Finance'] as const).map((dept) => (
                      <motion.button
                        key={dept}
                        onClick={() => setDeptFilter(dept)}
                        whileTap={{ scale: 0.94 }}
                        className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                          deptFilter === dept 
                            ? 'bg-orange-500 text-white shadow-xs' 
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                        }`}
                      >
                        {dept}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs bg-white">
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
              </motion.div>

              {/* Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium"
              >
                <span>{isRTL ? '💡 قوة Pandas الأساسية: التجمع والتنظيف والدمج السريع للبيانات الضخمة' : '💡 Core Power: Fast GroupBy aggregations, merging, and missing data imputation'}</span>
                <span className="text-orange-600 font-bold">Pandas DataFrames</span>
              </motion.div>
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
