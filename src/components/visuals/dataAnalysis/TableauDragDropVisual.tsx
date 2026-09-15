import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  PieChart, 
  BarChart3, 
  LineChart, 
  Layers, 
  Sparkles, 
  Sliders, 
  Database,
  ArrowRight,
  MousePointerClick
} from 'lucide-react';

interface TableauDragDropVisualProps {
  isRTL: boolean;
}

export const TableauDragDropVisual: React.FC<TableauDragDropVisualProps> = ({ isRTL }) => {
  const [selectedChartType, setSelectedChartType] = useState<'bar' | 'map' | 'scatter'>('bar');

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-1 max-w-6xl mx-auto select-none">
      {/* Tableau Workspace Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-500 uppercase">
            {isRTL ? 'بيئة عمل Tableau: الاتصال وبناء الرسوم بالسحب والإفلات' : 'Tableau Workspace: Drag-and-Drop Visual Canvas'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl shadow-inner">
          <button
            onClick={() => setSelectedChartType('bar')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedChartType === 'bar' ? 'bg-white text-rose-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isRTL ? 'مخطط أعمدة (Bar)' : 'Bar Chart'}
          </button>
          <button
            onClick={() => setSelectedChartType('map')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedChartType === 'map' ? 'bg-white text-rose-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isRTL ? 'خريطة جغرافية (Map)' : 'Geo Map'}
          </button>
          <button
            onClick={() => setSelectedChartType('scatter')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedChartType === 'scatter' ? 'bg-white text-rose-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {isRTL ? 'مخطط انتشار (Scatter)' : 'Scatter Plot'}
          </button>
        </div>
      </div>

      {/* Main Tableau Simulator Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left: Dimensions & Measures Shelves (4 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="lg:col-span-4 h-[350px] p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between text-start"
        >
          <div>
            {/* Dimensions (Blue Pills) */}
            <div className="mb-4">
              <span className="text-[11px] font-bold text-blue-700 uppercase block mb-2">
                🔷 Dimensions {isRTL ? '(حقول تصنيفية)' : '(Categorical Fields)'}
              </span>
              <div className="space-y-1.5">
                {['[Region]', '[Category]', '[Customer Segment]', '[Order Date]'].map((dim, i) => (
                  <div key={i} className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs flex items-center justify-between">
                    <span>{dim}</span>
                    <span className="text-[10px] text-blue-500 font-bold">Abc</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measures (Green Pills) */}
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase block mb-2">
                🟢 Measures {isRTL ? '(حقول قياسية)' : '(Quantitative Fields)'}
              </span>
              <div className="space-y-1.5">
                {['SUM([Sales])', 'SUM([Profit])', 'AVG([Discount])', 'COUNT([Orders])'].map((meas, i) => (
                  <div key={i} className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                    <span>{meas}</span>
                    <span className="text-[10px] text-emerald-600 font-bold">#</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-500 text-center">
            {isRTL ? 'اسحب الحقول إلى Columns & Rows' : 'Drag pills to Rows / Columns shelves'}
          </div>
        </motion.div>

        {/* Right: Interactive Canvas with Shelves & Visual Preview (8 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
          className="lg:col-span-8 h-[350px] rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm p-4 flex flex-col justify-between text-start"
        >
          {/* Columns & Rows Shelves */}
          <div className="space-y-2 border-b border-slate-200 pb-3 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-slate-500 font-bold w-16">Columns:</span>
              <div className="flex-1 flex items-center gap-1.5 bg-white p-1.5 rounded-lg border border-slate-200 shadow-inner">
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 font-bold text-[11px]">
                  [Category]
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 font-bold text-[11px]">
                  [Region]
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 font-bold w-16">Rows:</span>
              <div className="flex-1 flex items-center gap-1.5 bg-white p-1.5 rounded-lg border border-slate-200 shadow-inner">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-[11px]">
                  SUM([Sales])
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-[11px]">
                  SUM([Profit])
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Live Chart Output Canvas */}
          <div className="my-auto flex items-center justify-center p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
            {selectedChartType === 'bar' && (
              <div className="w-full space-y-2.5 p-2">
                <div className="flex items-center justify-between text-xs text-slate-700 font-mono">
                  <span className="font-bold">Technology</span>
                  <div className="w-3/5 bg-slate-100 h-5 rounded-md overflow-hidden border border-slate-200">
                    <div className="bg-gradient-to-r from-rose-500 to-amber-500 h-full w-[85%]" />
                  </div>
                  <span className="text-emerald-700 font-bold font-mono">$836,150</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-700 font-mono">
                  <span className="font-bold">Furniture</span>
                  <div className="w-3/5 bg-slate-100 h-5 rounded-md overflow-hidden border border-slate-200">
                    <div className="bg-gradient-to-r from-rose-500 to-amber-500 h-full w-[65%]" />
                  </div>
                  <span className="text-emerald-700 font-bold font-mono">$642,800</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-700 font-mono">
                  <span className="font-bold">Office Supplies</span>
                  <div className="w-3/5 bg-slate-100 h-5 rounded-md overflow-hidden border border-slate-200">
                    <div className="bg-gradient-to-r from-rose-500 to-amber-500 h-full w-[42%]" />
                  </div>
                  <span className="text-emerald-700 font-bold font-mono">$412,300</span>
                </div>
              </div>
            )}

            {selectedChartType === 'map' && (
              <div className="text-center py-4 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                  <span>🗺️ Tableau Automated Geocoding Engine</span>
                </div>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  {isRTL 
                    ? 'التعرف التلقائي على خطوط الطول والعرض لأسماء المدن والدول دون الحاجة لإحداثيات GPS.'
                    : 'Instant automated generation of latitude and longitude coordinates from Country & City labels.'}
                </p>
              </div>
            )}

            {selectedChartType === 'scatter' && (
              <div className="text-center py-4 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold">
                  <span>⚡ Correlation Plot: Sales vs. Profit Ratio</span>
                </div>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  {isRTL 
                    ? 'كشف العلاقات والارتباطات الإحصائية والشواذ (Outliers) بين الأرباح والخصومات.'
                    : 'Visualize clusters, variance distribution, and margin outliers across products.'}
                </p>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs text-slate-500">
            <span>{isRTL ? 'تحديث فوري للرسم عند إفلات أي حقل جديد' : 'Real-time rendering on drop'}</span>
            <span className="text-rose-600 font-bold">Show Me: Smart Suggestions</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
