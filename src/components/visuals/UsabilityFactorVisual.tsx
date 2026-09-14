import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Timer, 
  Sliders, 
  ArrowRight, 
  Layers, 
  Brain, 
  MousePointerClick,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Language } from '../../types';

interface UsabilityFactorVisualProps {
  language: Language;
  isDark?: boolean;
}

export const UsabilityFactorVisual: React.FC<UsabilityFactorVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<'simulation' | 'pillars'>('simulation');
  const [testedUsability, setTestedUsability] = useState<'bad' | 'good'>('good');
  const [simulationCompleted, setSimulationCompleted] = useState<boolean>(false);

  // Pillar tabs
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      badge: 'Learnability',
      title: isRTL ? 'سهولة التعلم من أول تجربة' : 'Instant Learnability',
      desc: isRTL ? 'المستخدم يستوعب طريقة عمل النظام خلال ثوانٍ دون الحاجة لقراءة أي دليل استخدام.' : 'Users intuitively understand system mechanics within seconds without manuals.',
      metric: '0s Onboarding',
      icon: Brain,
      points: [
        isRTL ? 'مطابقة مع النماذج الذهنية الشائعة (Mental Models)' : 'Aligning with established mental models',
        isRTL ? 'استخدام أيقونات ورموز قياسية ومألوفة عالمياً' : 'Using universal standard icons & patterns',
        isRTL ? 'تغذية راجعة مرئية وفورية لكل إجراء' : 'Instant visual feedback on every interaction'
      ]
    },
    {
      badge: 'Task Efficiency',
      title: isRTL ? 'كفاءة وسرعة إنجاز المهام' : 'High Task Efficiency',
      desc: isRTL ? 'تقليص عدد الخطوات والنقرات للوصول للهدف بأعلى سرعة وأقل جهد عضلي.' : 'Minimizing steps, clicks, and physical effort to achieve user objectives.',
      metric: '93% Faster Flow',
      icon: Zap,
      points: [
        isRTL ? 'إتمام المهام المعقدة في نقرة أو نقرتين' : '1-click checkout and automated workflows',
        isRTL ? 'الحفظ التلقائي للبيانات والمدخلات السابقة' : 'Smart autofill and cached preferences',
        isRTL ? 'اختصارات سريعة للمستخدمين المحترفين' : 'Keyboard shortcuts & fast paths for power users'
      ]
    },
    {
      badge: 'Low Friction',
      title: isRTL ? 'انعدام الاحتكاك والعوائق' : 'Frictionless Experience',
      desc: isRTL ? 'إزالة أي نوافذ منبثقة مزعجة أو متطلبات معقدة تعطل تدفق المستخدم.' : 'Eliminating unnecessary popups, redundant forms, and blocking hurdles.',
      metric: 'Zero Barriers',
      icon: ShieldCheck,
      points: [
        isRTL ? 'عدم طلب بيانات غير ضرورية للهدف الحالي' : 'Never asking for redundant inputs',
        isRTL ? 'التحقق اللحظي من صحة الحقول (Inline Validation)' : 'Real-time inline field validation',
        isRTL ? 'انتقال سلس وفوري بين الشاشات دون تشتيت' : 'Seamless transitions with zero friction'
      ]
    },
    {
      badge: 'Cognitive Load',
      title: isRTL ? 'تخفيض الجهد الذهني (Don’t Make Me Think)' : 'Minimal Cognitive Load',
      desc: isRTL ? 'تطبيق مبادئ ستيف كروغ وقانون هيك لتبسيط الخيارات ومنع تردد المستخدم.' : 'Applying Hick’s Law and Steve Krug’s principles to prevent decision fatigue.',
      metric: 'Low Cognitive Effort',
      icon: MousePointerClick,
      points: [
        isRTL ? 'تقسيم النماذج الطويلة إلى خطوات صغيرة مريحة' : 'Chunking long forms into progressive steps',
        isRTL ? 'عرض الخيارات الهامة فقط وإخفاء التفاصيل الثانوية' : 'Progressive disclosure of secondary details',
        isRTL ? 'نصوص توجيهية واضحة ومباشرة (Microcopy)' : 'Clear, human-centric microcopy'
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top View Selector Bar */}
      <div className="flex items-center justify-between gap-3 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
        <div className="flex items-center gap-2 px-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-[11px] font-bold text-slate-200">
            {isRTL ? 'مختبر قابلية الاستخدام (Usability Benchmark Lab)' : 'Usability Benchmark Lab'}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'simulation'
                ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{isRTL ? 'المحاكي العملي المباشر ⚡' : 'Live Benchmark Demo ⚡'}</span>
          </button>
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'pillars'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isRTL ? 'الركائز الـ 4 لسهولة الاستخدام' : '4 Usability Pillars'}</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: INTERACTIVE USABILITY BENCHMARK SIMULATOR */}
      {activeTab === 'simulation' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          
          {/* Simulator Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-4 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="text-xs font-bold text-slate-200">
                  {isRTL ? 'اختر السيناريو لاختبار قابلية الاستخدام:' : 'Select Usability Scenario:'}
                </span>

                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                  <button
                    onClick={() => { setTestedUsability('bad'); setSimulationCompleted(false); }}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      testedUsability === 'bad'
                        ? 'bg-red-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    <span>{isRTL ? 'واجهة معقدة (High Friction)' : 'Bad UX'}</span>
                  </button>

                  <button
                    onClick={() => { setTestedUsability('good'); setSimulationCompleted(false); }}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer flex items-center gap-1 ${
                      testedUsability === 'good'
                        ? 'bg-emerald-600 text-white shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isRTL ? 'واجهة سلسة (Usable & Fast)' : 'Good Usable UX'}</span>
                  </button>
                </div>
              </div>

              {/* Scenario Interactive Display */}
              {testedUsability === 'bad' ? (
                <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-3.5 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-red-400 font-bold border-b border-red-500/20 pb-2">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      <span>{isRTL ? 'سيناريو الدفع المعقد (8 حقول إجبارية + أخطاء غامضة)' : 'Friction-Heavy Form (8 fields + generic errors)'}</span>
                    </div>
                    <span className="font-mono text-[11px] bg-red-950 px-2 py-0.5 rounded border border-red-700">
                      Time: ~45s
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <label className="text-slate-400 block mb-0.5">Full Name *</label>
                      <input disabled value="Johnathan Alexander Smith" className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-300" />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-0.5">Billing Zip / Postal *</label>
                      <input disabled value="10001-9283" className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-slate-300" />
                    </div>
                    <div className="col-span-2">
                      <label className="text-red-400 block mb-0.5">16-Digit Card Number (No spaces) *</label>
                      <input disabled value="4111 2222 3333 4444" className="w-full bg-red-950/40 border border-red-500 rounded px-2 py-1 text-red-300 font-mono" />
                      <span className="text-[10px] text-red-400 block mt-0.5">Error code 402: Invalid format. Remove spaces manually.</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSimulationCompleted(true)}
                    className="w-full py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 font-semibold cursor-pointer border border-slate-700 transition-all text-xs"
                  >
                    {simulationCompleted ? '❌ Error: Please fix 3 invalid fields above' : (isRTL ? 'إرسال الطلب (معقد ومحبط)' : 'Submit Order')}
                  </button>
                </div>
              ) : (
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-3.5 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-emerald-400 font-bold border-b border-emerald-500/20 pb-2">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isRTL ? 'سيناريو الدفع الذكي (الدفع بلمسة واحدة + تعبئة آلية)' : '1-Tap Frictionless Apple Pay Checkout'}</span>
                    </div>
                    <span className="font-mono text-[11px] bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700">
                      Time: 1.8s
                    </span>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">💳</span>
                      <div>
                        <span className="font-bold text-white block">Apple Pay • Visa ending in 4242</span>
                        <span className="text-[10px] text-slate-400">Default shipping address auto-selected</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">$49.00</span>
                  </div>

                  <button 
                    onClick={() => setSimulationCompleted(true)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black cursor-pointer shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 text-xs"
                  >
                    <span>{simulationCompleted ? '🎉 Order Placed in 1.8s! Zero Friction' : (isRTL ? '⚡ دفع فوري بنقرة واحدة (1-Tap Pay)' : '⚡ 1-Tap Instant Checkout')}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Insight */}
            <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">
                {testedUsability === 'bad' 
                  ? (isRTL ? '⚠️ النتيجة: 68% من المستخدمين يتركون السلة ويهربون.' : '⚠️ Outcome: 68% cart abandonment due to form friction.')
                  : (isRTL ? '✨ النتيجة: معدل تحويل يرتفع بنسبة +45% ورضا كامل.' : '✨ Outcome: +45% conversion uplift with zero drop-off.')}
              </span>
              <span className="font-mono font-bold text-blue-400">
                Steve Krug: Don't Make Me Think
              </span>
            </div>
          </div>

          {/* Usability Impact Metrics (5 Cols) */}
          <div className={`lg:col-span-5 rounded-2xl p-4 sm:p-5 border flex flex-col justify-between shadow-md transition-all ${
            isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase bg-blue-600 text-white">
                Usability Impact ROI
              </span>

              <h4 className={`text-base font-extrabold mt-2 mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {isRTL ? 'أثر سهولة الاستخدام على نجاح المنتج' : 'Business Impact of Usable UX'}
              </h4>

              <div className="space-y-2.5 my-3">
                <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 block">
                      {isRTL ? 'زمن إتمام المهمة (Time to Task)' : 'Time to Complete'}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {isRTL ? 'تقليص من 45 ثانية إلى ثانيتين' : 'Reduced from 45s to 1.8s'}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-black text-emerald-600 dark:text-emerald-400">
                    -93% Time
                  </span>
                </div>

                <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 block">
                      {isRTL ? 'معدل النجاح (Success Rate)' : 'Task Completion Rate'}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {isRTL ? 'ارتفاع نسبة إتمام الشراء' : 'Direct user checkout completion'}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-black text-blue-600 dark:text-blue-400">
                    98.4%
                  </span>
                </div>

                <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 block">
                      {isRTL ? 'الجهد الذهني (Cognitive Load)' : 'Cognitive Strain'}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {isRTL ? 'قرارات فورية بدون تردد' : 'Instant intuitive clarity'}
                    </span>
                  </div>
                  <span className="text-sm font-mono font-black text-purple-600 dark:text-purple-400">
                    Near Zero
                  </span>
                </div>
              </div>
            </div>

            <div className={`p-2.5 rounded-xl border ${
              isDark ? 'bg-blue-950/40 border-blue-800/40 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-950'
            }`}>
              <p className="text-[11px] font-bold leading-relaxed">
                💡 {isRTL ? 'القاعدة الذهبية: كل ثانية احتكاك إضافية تكلف المتجر الإلكتروني خسارة ملايين الدولارات.' : 'Every extra second of friction directly drives user churn.'}
              </p>
            </div>
          </div>

        </div>
      ) : (
        /* VIEW 2: THE 4 USABILITY PILLARS WITH DEEP BREAKDOWN */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:border-blue-500 hover:ring-2 hover:ring-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-slate-900/95 border-slate-800 hover:bg-slate-900' 
                    : 'bg-white border-slate-200 shadow-sm hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                      {pillar.badge}
                    </span>
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 transition-transform group-hover:scale-110">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className={`text-sm sm:text-base font-extrabold mb-1.5 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    {pillar.title}
                  </h4>
                  <p className={`text-[11px] sm:text-xs leading-relaxed mb-3 font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {pillar.desc}
                  </p>

                  <ul className="space-y-2 mb-3">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-[11px] sm:text-xs flex items-start gap-2 font-medium text-slate-800 dark:text-slate-200 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`pt-2.5 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400">
                    Target: {pillar.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
