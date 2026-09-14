import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  TrendingUp, 
  Target, 
  Sparkles, 
  DollarSign, 
  CheckCircle2, 
  Layers, 
  Sliders,
  ArrowUpRight,
  SplitSquareVertical,
  Activity,
  Users,
  Code2,
  PieChart,
  BarChart3
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language?: Language;
  isDark?: boolean;
}

export const ProductDesignerDeepDiveVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<'abtest' | 'triad' | 'kpis'>('abtest');
  const [selectedVariant, setSelectedVariant] = useState<'a' | 'b'>('b');
  const [selectedPillar, setSelectedPillar] = useState<'user' | 'business' | 'tech'>('business');

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Banner with Product Designer Focus */}
      <div className={`p-3 sm:p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 shadow-sm transition-colors ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-sm sm:text-base font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {isRTL ? 'مصمم المنتج (Product Designer)' : 'Product Designer (Full-Stack & Business)'}
              </h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                isDark ? 'bg-amber-950/60 text-amber-300 border-amber-800/50' : 'bg-amber-100 text-amber-900 border-amber-300'
              }`}>
                {isRTL ? 'الشريك الاستراتيجي وصديق البزنس' : 'End-to-End Strategic Owner'}
              </span>
            </div>
            <p className={`text-xs font-medium mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {isRTL ? 'التركيز الأساسي: ربط تجربة المستخدم بأرباح الشركة، وتجارب الـ A/B Testing، والنمو المستمر' : 'Core Focus: Full lifecycle execution, business metrics alignment, ROI & conversion optimization'}
            </p>
          </div>
        </div>

        {/* Product Mode Switcher */}
        <div className={`flex items-center gap-1 p-1 rounded-xl border text-xs ${
          isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <button
            onClick={() => setActiveTab('abtest')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'abtest'
                ? 'bg-amber-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>{isRTL ? 'محاكي A/B Testing' : 'A/B Test Engine'}</span>
          </button>
          
          <button
            onClick={() => setActiveTab('triad')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'triad'
                ? 'bg-amber-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <PieChart className="w-3.5 h-3.5" />
            <span>{isRTL ? 'ثلاثي المنتج (Triad)' : 'Product Triad'}</span>
          </button>

          <button
            onClick={() => setActiveTab('kpis')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'kpis'
                ? 'bg-amber-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{isRTL ? 'مؤشرات الأرباح (ROI)' : 'Business KPIs'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Business Growth Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        
        {/* Left 5 Cols: Strategic Mindset */}
        <div className={`lg:col-span-5 rounded-2xl p-4 border shadow-sm flex flex-col justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1">
                <Target className="w-3.5 h-3.5" />
                {activeTab === 'abtest' && (isRTL ? 'تجارب التحسين السريع للتحويل' : 'Conversion Optimization Loop')}
                {activeTab === 'triad' && (isRTL ? 'توازن أركان مثلث المنتج' : 'The Product Triad Dynamics')}
                {activeTab === 'kpis' && (isRTL ? 'مصفوفة مؤشرات الأداء الحيوية' : 'Key Business Metrics Dashboard')}
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Top In-Demand Role ★
              </span>
            </div>

            {/* Dynamic Left Column Controls */}
            {activeTab === 'abtest' && (
              <div className="space-y-2 animate-in fade-in">
                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    {isRTL ? '1. فهم لغة الأرقام والبزنس' : '1. Business Metric Literacy'}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isRTL 
                      ? 'يتحدث بلغة مؤشرات الأداء (Conversion Rate, Churn, LTV, CAC) ويصمم حلولاً تزيد دخل الشركة.'
                      : 'Translates high-level business goals into measurable UX loops that increase revenue.'}
                  </p>
                </div>

                <div className={`p-2.5 rounded-xl border ${
                  isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    {isRTL ? '2. إتقان الـ Full-Stack Design' : '2. Full-Stack Execution'}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {isRTL 
                      ? 'يقود المشروع من الشخبطة والأبحاث إلى الواجهات الفخمة والبروتوتايب وحتى متابعة إطلاقه.'
                      : 'Owns end-to-end design: discovery research, wireframes, hi-fi UI, and engineering specs.'}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'triad' && (
              <div className="space-y-2 animate-in fade-in">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                  {isRTL ? 'اختر الركن لاستكشاف تأثيره:' : 'Select Triad Pillar:'}
                </label>
                <div className="space-y-1.5">
                  {[
                    { id: 'user', title: isRTL ? 'رغبة المستخدم (User Delight)' : 'User Desirability', sub: isRTL ? 'السهولة والراحة النفسية' : 'Usability & Satisfaction', icon: Users, color: 'text-blue-500' },
                    { id: 'business', title: isRTL ? 'استدامة البزنس (Business Viability)' : 'Business Viability', sub: isRTL ? 'الأرباح ونمو المبيعات' : 'Revenue & Profitability', icon: DollarSign, color: 'text-emerald-500' },
                    { id: 'tech', title: isRTL ? 'الإمكانية التقنية (Tech Feasibility)' : 'Tech Feasibility', sub: isRTL ? 'سرعة وثبات الأكواد' : 'Scalability & Performance', icon: Code2, color: 'text-purple-500' }
                  ].map((pil) => {
                    const isSelected = selectedPillar === pil.id;
                    const Icon = pil.icon;
                    return (
                      <div
                        key={pil.id}
                        onClick={() => setSelectedPillar(pil.id as any)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-amber-500/10 border-amber-500 ring-2 ring-amber-500/20'
                            : isDark ? 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/40' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${pil.color}`} />
                          <div>
                            <h5 className="text-xs font-bold text-slate-900 dark:text-white">{pil.title}</h5>
                            <span className="text-[10px] text-slate-500">{pil.sub}</span>
                          </div>
                        </div>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-500" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'kpis' && (
              <div className="space-y-2 animate-in fade-in">
                <div className="grid grid-cols-2 gap-2">
                  <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] text-slate-400 font-bold block">Conversion Rate</span>
                    <span className="text-base font-black text-emerald-500">+28.4%</span>
                    <span className="text-[9px] text-slate-500 block">Target: +15%</span>
                  </div>
                  <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <span className="text-[10px] text-slate-400 font-bold block">User Retention (Day 30)</span>
                    <span className="text-base font-black text-blue-500">64.2%</span>
                    <span className="text-[9px] text-slate-500 block">Benchmark: 50%</span>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl border text-xs space-y-1 ${
                  isDark ? 'bg-slate-950/70 border-slate-800 text-slate-300' : 'bg-amber-50/60 border-amber-200 text-slate-800'
                }`}>
                  <span className="font-bold text-amber-600 dark:text-amber-400 text-[11px] block">
                    {isRTL ? 'مقياس الـ Customer Lifetime Value (LTV):' : 'LTV Multiplier Impact:'}
                  </span>
                  <p className="text-[11px] leading-relaxed">
                    {isRTL 
                      ? 'تصميم مسار ولاء متقن رفع متوسط قيمة العميل بنسبة +40% خلال أول 6 أشهر.'
                      : 'Streamlined checkout loops accelerate repeat purchases, growing customer LTV by +40%.'}
                  </p>
                </div>
              </div>
            )}

            {/* Product Designer Mindset Callout */}
            <div className={`mt-3 p-2.5 rounded-xl border text-xs space-y-1 ${
              isDark ? 'bg-slate-950/70 border-slate-800 text-slate-300' : 'bg-amber-50/60 border-amber-200 text-slate-800'
            }`}>
              <div className="flex items-center gap-1.5 font-bold text-amber-600 dark:text-amber-400 text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isRTL ? 'عقلية مصمم المنتج الناجح:' : 'Product Designer Mindset:'}</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {isRTL 
                  ? '«الملف المبهر في فيجما لا يعني شيئاً إذا لم يرفع مبيعات الشركة ويحب الناس استخدامه في الحياة اليومية»'
                  : '"A visually stunning Figma file is meaningless unless it moves business metrics and delights users."'}
              </p>
            </div>
          </div>

          <div className={`pt-2 border-t ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'} text-[11px] font-mono flex items-center justify-between`}>
            <span>{isRTL ? 'أدوات: Figma, Mixpanel, Jira, Notion' : 'Tools: Figma, Mixpanel, Jira, Notion'}</span>
            <span className="text-amber-500 font-bold">Strategy & Execution</span>
          </div>
        </div>

        {/* Right 7 Cols: Live Sandbox */}
        <div className={`lg:col-span-7 rounded-2xl p-4 border shadow-sm flex flex-col justify-between relative overflow-hidden ${
          isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
        }`}>
          {/* Canvas Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-xs">
            <span className="text-[10px] font-mono font-bold uppercase text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              {activeTab === 'abtest' && 'Live A/B Experiment: Checkout Conversion'}
              {activeTab === 'triad' && 'The Product Sweet Spot Diagram'}
              {activeTab === 'kpis' && 'Live Business Impact Simulator'}
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-bold">
              +28.4% Revenue Uplift ★
            </span>
          </div>

          {/* DYNAMIC RIGHT VIEW BASED ON TAB */}
          <div className="my-2 flex-1 flex flex-col justify-center">
            
            {/* VIEW 1: A/B TESTING ENGINE */}
            {activeTab === 'abtest' && (
              <div className="space-y-3 animate-in fade-in">
                <div className="grid grid-cols-2 gap-3">
                  {/* Variant A (Legacy) */}
                  <div 
                    onClick={() => setSelectedVariant('a')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedVariant === 'a' 
                        ? 'border-slate-400 bg-slate-200/50 dark:bg-slate-800/80 ring-2 ring-slate-400/40' 
                        : isDark ? 'bg-slate-900/60 border-slate-800 opacity-60' : 'bg-white border-slate-200 opacity-70'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Variant A (Old Flow)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-300 dark:bg-slate-700 font-mono text-slate-700 dark:text-slate-300">Control</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mb-2">
                      4-step form + hidden promo field.
                    </p>
                    <div className="pt-2 border-t border-slate-300 dark:border-slate-700 text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                      Conversion: 3.2%
                    </div>
                  </div>

                  {/* Variant B (Optimized by Product Designer) */}
                  <div 
                    onClick={() => setSelectedVariant('b')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      selectedVariant === 'b' 
                        ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/40 ring-2 ring-emerald-500/30' 
                        : isDark ? 'bg-slate-900/60 border-slate-800 opacity-60' : 'bg-white border-slate-200 opacity-70'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-black text-emerald-700 dark:text-emerald-300">Variant B (Winner 🏆)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500 text-white font-mono font-bold">Champion</span>
                    </div>
                    <p className="text-[10px] text-emerald-800 dark:text-emerald-200 mb-2">
                      1-Click Apple Pay + sticky order summary.
                    </p>
                    <div className="pt-2 border-t border-emerald-500/30 text-xs font-mono font-black text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                      <span>Conversion: 4.1%</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-1.5 rounded">+28.4%</span>
                    </div>
                  </div>
                </div>

                {/* Financial ROI Calculator */}
                <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 space-y-1">
                  <div className="flex items-center justify-between text-xs font-black text-emerald-700 dark:text-emerald-300">
                    <span>{isRTL ? 'الأثر المالي المباشر على الشركة:' : 'Calculated Monthly Financial Impact:'}</span>
                    <span className="font-mono text-sm">+$42,000 / month</span>
                  </div>
                  <p className="text-[10px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {isRTL 
                      ? 'تحسين تجربة الدفع بنسبة +28.4% أضاف 42 ألف دولار شهرياً في المبيعات بدون زيادة ميزانية الإعلانات!'
                      : 'A +28.4% conversion rate lift unlocks $42k/mo in recurring revenue with zero added marketing budget.'}
                  </p>
                </div>
              </div>
            )}

            {/* VIEW 2: PRODUCT TRIAD DIAGRAM */}
            {activeTab === 'triad' && (
              <div className={`p-4 rounded-2xl border shadow-lg space-y-3 animate-in fade-in ${
                isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="text-center space-y-1 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <h4 className="text-sm font-black text-amber-500">
                    The Product Sweet Spot (نقطة النجاح السحرية)
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    تلاقي الرغبة الإنسانية مع الجدوى المالية والإمكانية التقنية
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1">
                    <span className="text-xs font-black text-blue-500">Users</span>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400">Delight & Ease</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1 ring-2 ring-emerald-500/30">
                    <span className="text-xs font-black text-emerald-500">★ Sweet Spot ★</span>
                    <p className="text-[10px] text-emerald-600 font-bold">Product Designer</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 space-y-1">
                    <span className="text-xs font-black text-purple-500">Tech</span>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400">Scale & Code</p>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: BUSINESS KPIS DASHBOARD */}
            {activeTab === 'kpis' && (
              <div className={`p-4 rounded-2xl border shadow-lg space-y-3 animate-in fade-in ${
                isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-black text-slate-900 dark:text-white">Live Product Performance</span>
                  <span className="text-[10px] font-mono font-bold text-emerald-500">Monthly Recurring Revenue (MRR): $184,000</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-600 dark:text-slate-300">Checkout Funnel Completion</span>
                    <span className="text-emerald-500 font-mono font-black">74.8% (+12.4%)</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[74.8%]" />
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 pt-1">
                  {isRTL ? 'مصمم المنتج يراقب هذه الشاشة أسبوعياً لاتخاذ قرارات التحديث القادمة.' : 'Product Designers monitor metrics weekly to prioritize backlog experiments.'}
                </p>
              </div>
            )}

          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>Product Output: Validated Growth & High-ROI Experience</span>
            <span className="text-amber-500 font-bold">{isRTL ? '🚀 المصمم شريك استراتيجي في النجاح' : '🚀 High-Impact Strategic Leadership'}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
