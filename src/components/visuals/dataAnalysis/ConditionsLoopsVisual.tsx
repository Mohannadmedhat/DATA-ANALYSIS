import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Settings, 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  Code2, 
  Sparkles, 
  RotateCcw,
  Sliders,
  ArrowRight,
  Database,
  Layers
} from 'lucide-react';

interface ConditionsLoopsVisualProps {
  isRTL: boolean;
}

export const ConditionsLoopsVisual: React.FC<ConditionsLoopsVisualProps> = ({ isRTL }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'simulator'>('both');

  // Interactive Simulator State for Conditions
  const [revenue, setRevenue] = useState<number>(4200);
  const targetThreshold = 5000;
  const isTargetMet = revenue >= targetThreshold;

  // Interactive Simulator State for Loops
  const [loopStep, setLoopStep] = useState<number>(-1);
  const [isLoopRunning, setIsLoopRunning] = useState<boolean>(false);

  const sampleDataset = [
    { id: 101, client: isRTL ? 'شركة النيل' : 'Nile Tech', rev: 6200, region: 'Cairo' },
    { id: 102, client: isRTL ? 'دلتا للأغذية' : 'Delta Foods', rev: 3800, region: 'Alex' },
    { id: 103, client: isRTL ? 'الأهرام للحلول' : 'Pyramid Soft', rev: 7100, region: 'Giza' },
    { id: 104, client: isRTL ? 'الساحل للتجارة' : 'Coast Retail', rev: 4400, region: 'Red Sea' },
  ];

  const handleRunLoop = () => {
    setIsLoopRunning(true);
    setLoopStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < sampleDataset.length) {
        setLoopStep(current);
      } else {
        clearInterval(interval);
        setIsLoopRunning(false);
      }
    }, 700);
  };

  const handleResetLoop = () => {
    setLoopStep(-1);
    setIsLoopRunning(false);
  };

  return (
    <div className="flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none text-slate-900">
      {/* Top Filter Tabs Bar — Matching Slide 6 design language */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {isRTL ? 'منطق البرمجة والتحكم في تدفق البيانات:' : 'Python Logic & Iteration Engine:'}
          </span>
        </div>

        {/* Calm Segmented Control with Light Pill Selection */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 border border-slate-200 rounded-xl shadow-inner">
          <button
            onClick={() => setActiveTab('both')}
            className={`relative px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeTab === 'both'
                ? 'text-blue-700 font-black shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold'
            }`}
          >
            {activeTab === 'both' && (
              <motion.div
                layoutId="activeConditionsLoopsPill"
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="absolute inset-0 rounded-lg bg-white border border-slate-200/90 shadow-sm"
              />
            )}
            <span className="relative z-10">
              {isRTL ? 'المحاور الأساسية (PDF View)' : 'Core Pillars (PDF View)'}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`relative px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeTab === 'simulator'
                ? 'text-blue-700 font-black shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold'
            }`}
          >
            {activeTab === 'simulator' && (
              <motion.div
                layoutId="activeConditionsLoopsPill"
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="absolute inset-0 rounded-lg bg-white border border-slate-200/90 shadow-sm"
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {isRTL ? 'محاكي تفاعلي حي (Live Lab)' : 'Interactive Lab'}
            </span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-stretch my-auto">
        <AnimatePresence mode="wait">
          {/* VIEW 1: DUAL CARDS (Exact match to Slide 17 of PDF) */}
          {activeTab === 'both' && (
            <motion.div
              key="both"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch"
            >
              {/* Card 1: Conditions (Target Icon Blue) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-800/90 bg-slate-900/90 shadow-xl hover:border-slate-700 backdrop-blur-xl transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-black shadow-md shadow-blue-500/20">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                          {isRTL ? 'التحكم الشرطي' : 'Branching Logic'}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-white">
                          {isRTL ? 'الشروط (Conditions)' : 'Conditions'}
                        </h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      if / elif / else
                    </span>
                  </div>

                  {/* Bullet points matching PDF exactly */}
                  <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-blue-400" />
                      <span>
                        {isRTL 
                          ? 'جمل if / elif / else لتقييم الشروط المنطقية واختيار المسار المناسب.' 
                          : 'if / elif / else evaluate a condition'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-blue-400" />
                      <span>
                        {isRTL 
                          ? 'تُستخدم لفلترة البيانات، وضع علامات (Flags)، وتوجيه تدفق الكود.' 
                          : 'Used to filter, flag, or branch logic'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-blue-400" />
                      <span>
                        {isRTL 
                          ? 'مثال عملي: تحديد الصفوف التي تقل فيها المبيعات عن الهدف (revenue < target).' 
                          : 'Example: flag rows where revenue < target'}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Bottom Quick Code Sneak-peek */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="p-3 bg-slate-950 rounded-xl text-[11px] font-mono text-slate-200 overflow-x-auto shadow-inner border border-slate-800">
                    <span className="text-purple-400">if</span> row[<span className="text-emerald-400">'revenue'</span>] &lt; target:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;row[<span className="text-emerald-400">'flag'</span>] = <span className="text-amber-400">'Under Target'</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Loops (Gear Icon Orange/Amber) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-800/90 bg-slate-900/90 shadow-xl hover:border-slate-700 backdrop-blur-xl transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-black shadow-md shadow-amber-500/20">
                        <Settings className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                          {isRTL ? 'التكرار والحلول السريعة' : 'Iterative Logic'}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-white">
                          {isRTL ? 'التكرار (Loops)' : 'Loops'}
                        </h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      for / while
                    </span>
                  </div>

                  {/* Bullet points matching PDF exactly */}
                  <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-amber-400" />
                      <span>
                        {isRTL 
                          ? 'حلقات for و while لتكرار الأوامر والمعالجة تلقائياً دون تكرار الأكواد.' 
                          : 'for & while loops repeat code block'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-amber-400" />
                      <span>
                        {isRTL 
                          ? 'تُستخدم للمرور على القوائم (Lists)، الجداول، والملفات صفاً بصف.' 
                          : 'Iterate over datasets row by row'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-amber-400" />
                      <span>
                        {isRTL 
                          ? 'مثال عملي: فحص وتحديث آلاف العملاء في الأرشيف تلقائياً.' 
                          : 'Example: process all customer records'}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Bottom Quick Code Sneak-peek */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="p-3 bg-slate-950 rounded-xl text-[11px] font-mono text-slate-200 overflow-x-auto shadow-inner border border-slate-800">
                    <span className="text-purple-400">for</span> client <span className="text-purple-400">in</span> dataset:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;process_record(client)
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* VIEW 2: INTERACTIVE LIVE LAB */}
          {activeTab === 'simulator' && (
            <motion.div
              key="simulator"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch"
            >
              {/* Simulator 1: Live Condition Flagging */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl flex flex-col justify-between text-start">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-400" />
                      <h3 className="font-bold text-slate-100 text-base">
                        {isRTL ? 'تجربة الشرط: فحص المبيعات مقابل الهدف' : 'Condition Lab: Revenue vs Target Flag'}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800">
                      Target: ${targetThreshold}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-4">
                    {isRTL 
                      ? 'حرّك شريط الإيرادات لرؤية كيف يتخذ كود بايثون القرار تلقائياً ويضع العلم (Flag):' 
                      : 'Adjust the revenue slider to see the Python condition branch dynamically:'}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs font-bold text-slate-200">
                      <span>{isRTL ? 'الإيرادات الحالية (Revenue):' : 'Current Revenue:'}</span>
                      <span className="font-mono text-blue-400 text-sm">${revenue.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="10000" 
                      step="200" 
                      value={revenue} 
                      onChange={(e) => setRevenue(Number(e.target.value))}
                      className="w-full accent-blue-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>$1,000</span>
                      <span>$5,000 (Target)</span>
                      <span>$10,000</span>
                    </div>
                  </div>

                  {/* Visual Output Box */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    isTargetMet 
                      ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200' 
                      : 'bg-amber-950/60 border-amber-800 text-amber-200'
                  }`}>
                    <div className="flex items-center gap-2.5 font-bold text-xs sm:text-sm">
                      {isTargetMet ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          <span>
                            {isRTL ? 'تم تحقيق الهدف بنجاح! (Target Met)' : 'Success: Target Achieved!'}
                          </span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                          <span>
                            {isRTL ? 'تنبيه: الإيراد أقل من المستهدف! (Flagged: Under Target)' : 'Alert Flag: Revenue < Target ($5,000)'}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-[11px] mt-1.5 opacity-80 font-mono">
                      Result: flag = "{isTargetMet ? 'MET' : 'UNDER_TARGET'}" | variance = ${Math.abs(revenue - targetThreshold)}
                    </p>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
                  <span>{isRTL ? 'المنطق البرمجي:' : 'Evaluated:'}</span>
                  <code className="font-mono text-blue-400 font-bold">revenue &gt;= 5000</code>
                </div>
              </div>

              {/* Simulator 2: Live Loop Runner */}
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl flex flex-col justify-between text-start">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-amber-400" />
                      <h3 className="font-bold text-slate-100 text-base">
                        {isRTL ? 'تجربة التكرار: معالجة بيانات العملاء صفاً بصف' : 'Loop Lab: Dataset Row Processor'}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handleRunLoop}
                        disabled={isLoopRunning}
                        className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1 shadow-sm cursor-pointer transition-all"
                      >
                        <Play className="w-3.5 h-3.5" />
                        {isRTL ? 'تشغيل الـ Loop' : 'Run Loop'}
                      </button>
                      <button
                        onClick={handleResetLoop}
                        className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 cursor-pointer"
                        title="Reset"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-3">
                    {isRTL 
                      ? 'شاهد حلقة for loop وهي تمر على كل سجل وتنفذ عليه الفحص تلقائياً:' 
                      : 'Watch a Python for loop iterate sequentially across dataset rows:'}
                  </p>

                  {/* Dataset Rows Table */}
                  <div className="space-y-1.5">
                    {sampleDataset.map((row, idx) => {
                      const isActive = loopStep === idx;
                      const isProcessed = loopStep > idx || (!isLoopRunning && loopStep === sampleDataset.length - 1);
                      return (
                        <div 
                          key={row.id}
                          className={`p-2 rounded-xl border text-xs flex items-center justify-between transition-all ${
                            isActive 
                              ? 'bg-amber-950/80 border-amber-500 text-white font-bold scale-[1.02] shadow-sm' 
                              : isProcessed 
                                ? 'bg-slate-950/60 border-slate-800 text-slate-300' 
                                : 'bg-slate-950/40 border-slate-800/60 text-slate-400'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] font-bold ${
                              isActive ? 'bg-amber-500 text-white' : 'bg-slate-800 text-slate-300'
                            }`}>
                              {idx + 1}
                            </span>
                            <span className="font-semibold">{row.client}</span>
                            <span className="text-[10px] text-slate-400">({row.region})</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="font-mono text-slate-300">${row.rev}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                              row.rev >= targetThreshold 
                                ? 'bg-emerald-950 border border-emerald-800 text-emerald-300' 
                                : 'bg-amber-950 border border-amber-800 text-amber-300'
                            }`}>
                              {row.rev >= targetThreshold ? 'PASS' : 'FLAG'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
                  <span>{isRTL ? 'حالة المعالجة:' : 'Loop State:'}</span>
                  <span className="font-mono font-bold text-amber-400">
                    {loopStep === -1 
                      ? (isRTL ? 'جاهز للبدء' : 'Ready to start') 
                      : isLoopRunning 
                        ? (isRTL ? `جاري معالجة الصف ${loopStep + 1} من 4...` : `Processing row ${loopStep + 1} of 4...`) 
                        : (isRTL ? 'اكتملت معالجة جميع الصفوف بنجاح!' : 'All 4 rows completed!')}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Info Pill */}
      <div className="mt-2 text-center">
        <span className="text-[11px] font-medium text-slate-400">
          {isRTL 
            ? 'التحكم الشرطي والتكرار هما اللبنتان الأساسيتان لأتمتة أي عملية تنظيف أو تحليل بيانات في بايثون'
            : 'Conditions and loops form the fundamental pillars of data pipeline automation in Python'}
        </span>
      </div>
    </div>
  );
};
