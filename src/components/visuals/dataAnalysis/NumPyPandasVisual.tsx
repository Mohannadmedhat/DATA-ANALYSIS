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
  ArrowRight
} from 'lucide-react';

interface NumPyPandasVisualProps {
  isRTL: boolean;
}

export const NumPyPandasVisual: React.FC<NumPyPandasVisualProps> = ({ isRTL }) => {
  const [activeTool, setActiveTool] = useState<'both' | 'numpy' | 'pandas'>('both');

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-1 max-w-6xl mx-auto select-none">
      {/* Top Filter Buttons */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase">
            {isRTL ? 'مقارنة المكتبتين الأساسيتين في Python:' : 'The Twin Engines of Python Data Analysis:'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl shadow-inner">
          <button
            onClick={() => setActiveTool('both')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTool === 'both' ? 'bg-white text-blue-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isRTL ? 'المقارنة الكاملة (Both)' : 'Side-by-Side'}
          </button>
          <button
            onClick={() => setActiveTool('numpy')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTool === 'numpy' ? 'bg-white text-cyan-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            NumPy
          </button>
          <button
            onClick={() => setActiveTool('pandas')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTool === 'pandas' ? 'bg-white text-orange-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pandas
          </button>
        </div>
      </div>

      {/* Main Dual Powerhouse Columns with Slow Staggered Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Left / NumPy */}
        {(activeTool === 'both' || activeTool === 'numpy') && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            whileHover={{ y: -3 }}
            className={`p-5 sm:p-6 rounded-2xl bg-white border border-cyan-200/90 shadow-sm hover:shadow-md flex flex-col justify-between text-start transition-all ${
              activeTool === 'numpy' ? 'md:col-span-2' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center font-black shadow-sm">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase tracking-wider">
                      NUMERICAL COMPUTING
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      NumPy (Numerical Python)
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold">
                  High-Speed Math
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                {isRTL 
                  ? 'المحرك الرياضي فائق السرعة المبني بلغة C لمعالجة المصفوفات متعددة الأبعاد (N-D Arrays) والعمليات الخطية.' 
                  : 'High-performance C-based mathematical engine for multi-dimensional arrays and vectorized linear algebra.'}
              </p>

              {/* Key Features Pill Grid */}
              <div className="space-y-2 mb-4">
                {[
                  isRTL ? 'هيكل ndarray الموجه عالي الكفاءة في استهلاك الذاكرة' : 'Vectorized ndarray objects with ultra-low memory overhead',
                  isRTL ? 'العمليات الحسابية المتجهة (Vectorized Operations) بدون Loops' : 'Instant broadcasted arithmetic eliminating slow Python loops',
                  isRTL ? 'الأساس الرياضي الذي بنيت عليه مكتبات Pandas و Scikit-Learn' : 'The mathematical substrate for Pandas and Machine Learning'
                ].map((txt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                    <span>{txt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-cyan-50/60 border border-cyan-200 font-mono text-xs text-cyan-950">
              <span className="text-cyan-700 font-bold block text-[10px] mb-0.5"># NumPy Syntax Sample</span>
              <code>arr = np.array([10, 20, 30]) * 1.15 # Vectorized +15%</code>
            </div>
          </motion.div>
        )}

        {/* Right / Pandas */}
        {(activeTool === 'both' || activeTool === 'pandas') && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
            whileHover={{ y: -3 }}
            className={`p-5 sm:p-6 rounded-2xl bg-white border border-orange-200/90 shadow-sm hover:shadow-md flex flex-col justify-between text-start transition-all ${
              activeTool === 'pandas' ? 'md:col-span-2' : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center font-black shadow-sm">
                    <Table className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider">
                      DATA MANIPULATION & WRANGLING
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      Pandas (DataFrames & Series)
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold">
                  Tabular Master
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                {isRTL 
                  ? 'المكتبة رقم 1 لتنظيف، تجهيز، دمج، وفلترة الجداول، وتعتبر المكافئ البرمجي لجداول Excel بقدرات غير محدودة.' 
                  : 'Industry-standard library for tabular data wrangling, group-by aggregation, merging, and CSV/SQL ingestion.'}
              </p>

              {/* Key Features Pill Grid */}
              <div className="space-y-2 mb-4">
                {[
                  isRTL ? 'هيكل DataFrame الثنائي الأبعاد (صفوف وأعمدة معنونة)' : '2D DataFrame structure with labeled rows, columns, and index',
                  isRTL ? 'أوامر groupby و merge و pivot_table لتلخيص البيانات' : 'Rich groupby, merge, join, and pivot_table transformation APIs',
                  isRTL ? 'أدوات تنظيف سريعة لمعالجة القيم المفقودة والتكرارات' : 'Built-in functions for missing value imputation and filtering'
                ].map((txt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{txt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-200 font-mono text-xs text-orange-950">
              <span className="text-orange-700 font-bold block text-[10px] mb-0.5"># Pandas Syntax Sample</span>
              <code>df.groupby('city')['revenue'].mean().reset_index()</code>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
