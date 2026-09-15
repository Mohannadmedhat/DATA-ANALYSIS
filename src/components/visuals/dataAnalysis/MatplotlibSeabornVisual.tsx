import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  PieChart, 
  LineChart, 
  Sparkles, 
  TrendingUp, 
  Palette, 
  Sliders, 
  CheckCircle2, 
  Layers, 
  Grid, 
  Activity,
  ArrowRight
} from 'lucide-react';

interface MatplotlibSeabornVisualProps {
  isRTL: boolean;
}

export const MatplotlibSeabornVisual: React.FC<MatplotlibSeabornVisualProps> = ({ isRTL }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'matplotlib' | 'seaborn'>('both');

  // Matplotlib chart switch
  const [mplChartType, setMplChartType] = useState<'line' | 'bar' | 'hist'>('line');

  // Seaborn chart switch
  const [snsChartType, setSnsChartType] = useState<'dist' | 'heatmap' | 'box'>('dist');

  const tabs = [
    { id: 'both', labelAr: 'المقارنة المزدوجة (Dual View)', labelEn: 'Dual Comparison' },
    { id: 'matplotlib', labelAr: 'استوديو Matplotlib', labelEn: 'Matplotlib Engine' },
    { id: 'seaborn', labelAr: 'مختبر Seaborn الإحصائي', labelEn: 'Seaborn Statistical Lab' },
  ] as const;

  return (
    <div className="flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none text-slate-900">
      {/* Top Filter Tabs Bar — Matching Slide 6 and Slide 20 design language */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {isRTL ? 'حزمة الرسوم البيانية والتحليل البصري في Python:' : "Python's Visualization Toolkit:"}
          </span>
        </div>

        {/* Calm Segmented Control with Light Pill Selection */}
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
                    layoutId="activeMatplotlibSeabornPill"
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

      {/* Main Content Area */}
      <div className="flex-1 flex items-stretch my-auto">
        <AnimatePresence mode="wait">
          {/* VIEW 1: DUAL CARDS (Exact match to Slide 21 in PDF) */}
          {activeTab === 'both' && (
            <motion.div
              key="both"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch"
            >
              {/* Card 1: Matplotlib (Blue) */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-sm hover:shadow-md transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-black shadow-sm">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                          {isRTL ? 'المكتبة الأم للرسوم البيانية' : 'Base Plotting Engine'}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                          Matplotlib
                        </h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                      import matplotlib.pyplot as plt
                    </span>
                  </div>

                  {/* Exact text from PDF */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-medium">
                    {isRTL 
                      ? 'المكتبة الأم للرسومات — تمنحك تحكماً كاملاً ودقيقاً في كل عنصر داخل الرسم البياني: المنحنيات الخطية (line plots)، الأعمدة (bar charts)، والمدرجات التكرارية (histograms).'
                      : 'The base plotting library — full control over every chart element: line plots, bar charts, histograms.'}
                  </p>

                  {/* Key Features Bullets */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center gap-2 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span>{isRTL ? 'تحكم تفصيلي بالمحاور والألوان والعناوين (Full Customization)' : 'Fine-grained control over axes, ticks, colors, labels'}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span>{isRTL ? 'رسوم خطية، بار تشارت، ومدرجات (Line, Bar, Histograms)' : 'Standard charts: Line, Bar, Histograms, Scatter'}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span>{isRTL ? 'بنية الأشكال المعمارية (Figure & Subplots)' : 'Object-oriented Figure and Subplots architecture'}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Chart Preview Switcher */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase mr-1">Plots:</span>
                    {(['line', 'bar', 'hist'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setMplChartType(t)}
                        className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer ${
                          mplChartType === t 
                            ? 'bg-blue-600 text-white shadow-xs' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {t === 'line' ? 'Line' : t === 'bar' ? 'Bar' : 'Hist'}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveTab('matplotlib')}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-bold cursor-pointer text-[11px]"
                  >
                    {isRTL ? 'معاينة متقدمة' : 'Interactive Demo'}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>

              {/* Card 2: Seaborn (Purple/Indigo) */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-purple-200 bg-white shadow-sm hover:shadow-md transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center font-black shadow-sm">
                        <PieChart className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">
                          {isRTL ? 'التحليل البصري الإحصائي' : 'Statistical Visuals'}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                          Seaborn
                        </h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">
                      import seaborn as sns
                    </span>
                  </div>

                  {/* Exact text from PDF */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-medium">
                    {isRTL 
                      ? 'مبنية فوق Matplotlib لتوفير تصاميم ورسوم إحصائية جاهزة وجميلة — إعدادات افتراضية أنيقة لتوزيع البيانات (distributions)، مصفوفات الارتباط (correlations)، والمقارنات المعقدة.'
                      : 'Built on Matplotlib for statistical visualization — cleaner defaults for distributions, correlations, and comparisons.'}
                  </p>

                  {/* Key Features Bullets */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    <div className="flex items-center gap-2 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                      <span>{isRTL ? 'خرائط الارتباط الحرارية (Correlation Heatmaps)' : 'Correlation heatmaps and multi-variable matrices'}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                      <span>{isRTL ? 'منحنيات التوزيع والتشتت (KDE & Distribution Plots)' : 'Kernel Density Estimation (KDE) and distribution curves'}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                      <span>{isRTL ? 'تكامل مباشر سلس مع Pandas DataFrames' : 'Native DataFrame integration with high-level API'}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Chart Preview Switcher */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase mr-1">Stats:</span>
                    {(['dist', 'heatmap', 'box'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setSnsChartType(t)}
                        className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer ${
                          snsChartType === t 
                            ? 'bg-purple-600 text-white shadow-xs' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {t === 'dist' ? 'KDE' : t === 'heatmap' ? 'Heatmap' : 'Box'}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveTab('seaborn')}
                    className="text-purple-600 hover:text-purple-800 flex items-center gap-1 font-bold cursor-pointer text-[11px]"
                  >
                    {isRTL ? 'معاينة متقدمة' : 'Interactive Demo'}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* VIEW 2: MATPLOTLIB ENGINE PLAYGROUND */}
          {activeTab === 'matplotlib' && (
            <motion.div
              key="matplotlib"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch"
            >
              {/* SVG Visualizer */}
              <div className="p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                      <h3 className="font-bold text-slate-900 text-base">
                        {mplChartType === 'line' ? 'plt.plot(x, y) — Line Plot' : mplChartType === 'bar' ? 'plt.bar(x, y) — Bar Chart' : 'plt.hist(data) — Histogram'}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Matplotlib
                    </span>
                  </div>

                  {/* SVG Chart Graphic */}
                  <div className="h-44 w-full bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-4">
                    {mplChartType === 'line' && (
                      <svg className="w-full h-full" viewBox="0 0 300 120">
                        <line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" strokeWidth="2" />
                        <line x1="20" y1="20" x2="20" y2="100" stroke="#cbd5e1" strokeWidth="2" />
                        <polyline
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="3"
                          points="30,85 70,70 120,45 170,60 220,25 270,35"
                        />
                        {[
                          [30, 85], [70, 70], [120, 45], [170, 60], [220, 25], [270, 35]
                        ].map(([x, y], i) => (
                          <circle key={i} cx={x} cy={y} r="4" fill="#1d4ed8" />
                        ))}
                      </svg>
                    )}

                    {mplChartType === 'bar' && (
                      <svg className="w-full h-full" viewBox="0 0 300 120">
                        <line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" strokeWidth="2" />
                        <rect x="40" y="40" width="30" height="60" rx="3" fill="#3b82f6" />
                        <rect x="90" y="20" width="30" height="80" rx="3" fill="#2563eb" />
                        <rect x="140" y="55" width="30" height="45" rx="3" fill="#60a5fa" />
                        <rect x="190" y="30" width="30" height="70" rx="3" fill="#1d4ed8" />
                        <rect x="240" y="45" width="30" height="55" rx="3" fill="#3b82f6" />
                      </svg>
                    )}

                    {mplChartType === 'hist' && (
                      <svg className="w-full h-full" viewBox="0 0 300 120">
                        <line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" strokeWidth="2" />
                        <rect x="30" y="70" width="35" height="30" fill="#93c5fd" />
                        <rect x="67" y="40" width="35" height="60" fill="#60a5fa" />
                        <rect x="104" y="20" width="35" height="80" fill="#2563eb" />
                        <rect x="141" y="25" width="35" height="75" fill="#3b82f6" />
                        <rect x="178" y="50" width="35" height="50" fill="#60a5fa" />
                        <rect x="215" y="80" width="35" height="20" fill="#93c5fd" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  {(['line', 'bar', 'hist'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setMplChartType(t)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        mplChartType === t ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {t.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col justify-between text-start">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">
                    {isRTL ? 'كود بايثون المقابل:' : 'Executable Python Snippet:'}
                  </h4>
                  <div className="p-4 bg-slate-900 rounded-xl font-mono text-xs text-slate-200 space-y-1 shadow-inner">
                    <p className="text-purple-400">import <span className="text-white">matplotlib.pyplot</span> as <span className="text-white">plt</span></p>
                    <p className="text-slate-400 mt-2"># Create figure canvas</p>
                    <p>fig, ax = plt.subplots(figsize=(8, 4))</p>
                    <p className="text-emerald-400">ax.{mplChartType === 'line' ? 'plot(x, y, color="blue", marker="o")' : mplChartType === 'bar' ? 'bar(categories, values, color="skyblue")' : 'hist(data, bins=15, edgecolor="black")'}</p>
                    <p>ax.set_title(<span className="text-amber-300">"{mplChartType.toUpperCase()} Analysis"</span>)</p>
                    <p>plt.show()</p>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 border-t pt-2.5">
                  {isRTL 
                    ? 'Matplotlib مثالية لإنشاء أي شكل بياني مخصص وتصديره للنشر بجودة عالية (DPI)' 
                    : 'Matplotlib gives you pixel-level precision for reports and academic publishing.'}
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW 3: SEABORN STATISTICAL LAB */}
          {activeTab === 'seaborn' && (
            <motion.div
              key="seaborn"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch"
            >
              {/* Seaborn SVG Graphics */}
              <div className="p-5 sm:p-6 rounded-2xl border border-purple-200 bg-white shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <PieChart className="w-5 h-5 text-purple-600" />
                      <h3 className="font-bold text-slate-900 text-base">
                        {snsChartType === 'dist' ? 'sns.kdeplot() — Density Distribution' : snsChartType === 'heatmap' ? 'sns.heatmap() — Correlation Matrix' : 'sns.boxplot() — Quartiles & Outliers'}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                      Seaborn
                    </span>
                  </div>

                  {/* SVG Statistical Chart Graphic */}
                  <div className="h-44 w-full bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-4">
                    {snsChartType === 'dist' && (
                      <svg className="w-full h-full" viewBox="0 0 300 120">
                        <line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" strokeWidth="2" />
                        <path
                          d="M 30 100 Q 90 98 120 40 T 170 30 T 220 90 T 270 100"
                          fill="rgba(147, 51, 234, 0.15)"
                          stroke="#9333ea"
                          strokeWidth="3"
                        />
                      </svg>
                    )}

                    {snsChartType === 'heatmap' && (
                      <div className="grid grid-cols-3 gap-1.5 w-48 h-36">
                        <div className="bg-purple-800 text-white rounded flex items-center justify-center font-mono text-xs font-bold">1.00</div>
                        <div className="bg-purple-500 text-white rounded flex items-center justify-center font-mono text-xs font-bold">0.82</div>
                        <div className="bg-purple-200 text-purple-900 rounded flex items-center justify-center font-mono text-xs font-bold">-0.31</div>
                        <div className="bg-purple-500 text-white rounded flex items-center justify-center font-mono text-xs font-bold">0.82</div>
                        <div className="bg-purple-800 text-white rounded flex items-center justify-center font-mono text-xs font-bold">1.00</div>
                        <div className="bg-purple-300 text-purple-900 rounded flex items-center justify-center font-mono text-xs font-bold">-0.15</div>
                        <div className="bg-purple-200 text-purple-900 rounded flex items-center justify-center font-mono text-xs font-bold">-0.31</div>
                        <div className="bg-purple-300 text-purple-900 rounded flex items-center justify-center font-mono text-xs font-bold">-0.15</div>
                        <div className="bg-purple-800 text-white rounded flex items-center justify-center font-mono text-xs font-bold">1.00</div>
                      </div>
                    )}

                    {snsChartType === 'box' && (
                      <svg className="w-full h-full" viewBox="0 0 300 120">
                        <line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" strokeWidth="2" />
                        {/* Box 1 */}
                        <line x1="70" y1="30" x2="70" y2="90" stroke="#9333ea" strokeWidth="2" />
                        <rect x="50" y="45" width="40" height="35" rx="2" fill="#d8b4fe" stroke="#9333ea" strokeWidth="2" />
                        <line x1="50" y1="60" x2="90" y2="60" stroke="#581c87" strokeWidth="2" />
                        {/* Box 2 */}
                        <line x1="180" y1="20" x2="180" y2="85" stroke="#9333ea" strokeWidth="2" />
                        <rect x="160" y="35" width="40" height="35" rx="2" fill="#c084fc" stroke="#9333ea" strokeWidth="2" />
                        <line x1="160" y1="50" x2="200" y2="50" stroke="#581c87" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  {(['dist', 'heatmap', 'box'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setSnsChartType(t)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        snsChartType === t ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {t === 'dist' ? 'KDE DIST' : t === 'heatmap' ? 'HEATMAP' : 'BOXPLOT'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 sm:p-6 rounded-2xl border border-purple-200 bg-white shadow-sm flex flex-col justify-between text-start">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">
                    {isRTL ? 'كود سطر واحد في Seaborn:' : 'One-Line Statistical Seaborn Call:'}
                  </h4>
                  <div className="p-4 bg-slate-900 rounded-xl font-mono text-xs text-slate-200 space-y-1 shadow-inner">
                    <p className="text-purple-400">import <span className="text-white">seaborn</span> as <span className="text-white">sns</span></p>
                    <p className="text-slate-400 mt-2"># High-level statistical visualization</p>
                    <p className="text-emerald-400">
                      {snsChartType === 'dist' && 'sns.kdeplot(data=df, x="salary", hue="department", fill=True)'}
                      {snsChartType === 'heatmap' && 'sns.heatmap(df.corr(), annot=True, cmap="Purples")'}
                      {snsChartType === 'box' && 'sns.boxplot(data=df, x="department", y="salary", palette="pastel")'}
                    </p>
                    <p>plt.show()</p>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 border-t pt-2.5">
                  {isRTL 
                    ? 'Seaborn تختصر العشرات من أسطر كود الإحصاء في أمر واحد أنيق وجاهز للعرض' 
                    : 'Seaborn transforms complex statistical aggregations into clean, publication-ready one-liners.'}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Insight Banner */}
      <div className="mt-2 text-center">
        <span className="text-[11px] font-medium text-slate-400">
          {isRTL 
            ? 'Matplotlib تمنحك التحكم في كل بكسل، بينما Seaborn تقدم لك الجمال الإحصائي المباشر في سطر واحد'
            : 'Matplotlib gives you low-level architectural control, while Seaborn delivers effortless statistical beauty'}
        </span>
      </div>
    </div>
  );
};
