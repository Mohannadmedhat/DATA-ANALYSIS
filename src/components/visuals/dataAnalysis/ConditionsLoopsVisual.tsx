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
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-sm hover:shadow-md transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black shadow-md shadow-blue-500/20">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                          {isRTL ? 'التحكم الشرطي' : 'Branching Logic'}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                          {isRTL ? 'الشروط (Conditions)' : 'Conditions'}
                        </h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                      if / elif / else
                    </span>
                  </div>

                  {/* Bullet points matching PDF exactly */}
                  <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-blue-600" />
                      <span>
                        {isRTL 
                          ? 'جمل if / elif / else لتقييم الشروط المنطقية واختيار المسار المناسب.' 
                          : 'if / elif / else evaluate a condition'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-blue-600" />
                      <span>
                        {isRTL 
                          ? 'تُستخدم لفلترة البيانات، وضع علامات (Flags)، وتوجيه تدفق الكود.' 
                          : 'Used to filter, flag, or branch logic'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-blue-600" />
                      <span>
                        {isRTL 
                          ? 'مثال عملي: تحديد الصفوف التي تقل فيها المبيعات عن الهدف (revenue < target).' 
                          : 'Example: flag rows where revenue < target'}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Bottom Quick Code Sneak-peek */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="p-3 bg-slate-900 rounded-xl text-[11px] font-mono text-slate-200 overflow-x-auto shadow-inner">
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
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-amber-200 bg-white shadow-sm hover:shadow-md transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black shadow-md shadow-amber-500/20">
                        <Settings className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                          {isRTL ? 'التكرار والأتمتة' : 'Automated Iteration'}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                          {isRTL ? 'التكرارات (Loops)' : 'Loops'}
                        </h2>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">
                      for / while
                    </span>
                  </div>

                  {/* Bullet points matching PDF exactly */}
                  <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-amber-500" />
                      <span>
                        {isRTL 
                          ? 'حلقات for loops للتكرار على عناصر القوائم والمجموعات (Lists & Datasets).' 
                          : 'for loops repeat over a list of items'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-amber-500" />
                      <span>
                        {isRTL 
                          ? 'حلقات while loops تستمر في التكرار طالما الشرط متحقق حتى ينتهي.' 
                          : 'while loops repeat until a condition ends'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 shrink-0 bg-amber-500" />
                      <span>
                        {isRTL 
                          ? 'مثال عملي: معالجة وتنظيف كل صف في جدول بيانات ضخم تلقائياً.' 
                          : 'Example: process every row in a dataset'}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Bottom Quick Code Sneak-peek */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="p-3 bg-slate-900 rounded-xl text-[11px] font-mono text-slate-200 overflow-x-auto shadow-inner">
                    <span className="text-purple-400">for</span> row <span className="text-purple-400">in</span> dataset:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;clean_and_transform(row)
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
              <div className="p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      <h3 className="font-bold text-slate-900 text-base">
                        {isRTL ? 'تجربة الشرط: فحص المبيعات مقابل الهدف' : 'Condition Lab: Revenue vs Target Flag'}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Target: ${targetThreshold}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-4">
                    {isRTL 
                      ? 'حرّك شريط الإيرادات لرؤية كيف يتخذ كود بايثون القرار تلقائياً ويضع العلم (Flag):' 
                      : 'Adjust the revenue slider to see the Python condition branch dynamically:'}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs font-bold text-slate-700">
                      <span>{isRTL ? 'الإيرادات الحالية (Revenue):' : 'Current Revenue:'}</span>
                      <span className="font-mono text-blue-600 text-sm">${revenue.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="10000" 
                      step="200" 
                      value={revenue} 
                      onChange={(e) => setRevenue(Number(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
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
                      ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' 
                      : 'bg-amber-50/80 border-amber-200 text-amber-900'
                  }`}>
                    <div className="flex items-center gap-2.5 font-bold text-xs sm:text-sm">
                      {isTargetMet ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span>
                            {isRTL ? 'تم تحقيق الهدف بنجاح! (Target Met)' : 'Success: Target Achieved!'}
                          </span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
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

                <div className="mt-3 text-[11px] text-slate-500 flex items-center justify-between border-t pt-2">
                  <span>{isRTL ? 'المنطق البرمجي:' : 'Evaluated:'}</span>
                  <code className="font-mono text-blue-600 font-bold">revenue &gt;= 5000</code>
                </div>
              </div>

              {/* Simulator 2: Live Loop Runner */}
              <div className="p-5 sm:p-6 rounded-2xl border border-amber-200 bg-white shadow-sm flex flex-col justify-between text-start">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-amber-600" />
                      <h3 className="font-bold text-slate-900 text-base">
                        {isRTL ? 'تجربة التكرار: معالجة بيانات العملاء صفاً بصف' : 'Loop Lab: Dataset Row Processor'}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handleRunLoop}
                        disabled={isLoopRunning}
                        className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1 shadow-sm cursor-pointer transition-all"
                      >
                        <Play className="w-3.5 h-3.5" />
                        {isRTL ? 'تشغيل الـ Loop' : 'Run Loop'}
                      </button>
                      <button
                        onClick={handleResetLoop}
                        className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer"
                        title="Reset"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-3">
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
                              ? 'bg-amber-100 border-amber-400 font-bold scale-[1.02] shadow-sm' 
                              : isProcessed 
                                ? 'bg-slate-50 border-slate-200 text-slate-600' 
                                : 'bg-white border-slate-100 text-slate-400'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] font-bold ${
                              isActive ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-700'
                            }`}>
                              {idx + 1}
                            </span>
                            <span className="font-semibold">{row.client}</span>
                            <span className="text-[10px] text-slate-500">({row.region})</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="font-mono text-slate-700">${row.rev}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                              row.rev >= targetThreshold 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : 'bg-amber-100 text-amber-800'
                            }`}>
                              {row.rev >= targetThreshold ? 'PASS' : 'FLAG'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-slate-500 flex items-center justify-between border-t pt-2">
                  <span>{isRTL ? 'حالة المعالجة:' : 'Loop State:'}</span>
                  <span className="font-mono font-bold text-amber-600">
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
