import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  MessageSquare, 
  PieChart, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  BarChart2, 
  FileSpreadsheet,
  Quote,
  TrendingUp
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language?: Language;
  isDark?: boolean;
}

export const UxResearcherDeepDiveVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [activeResearchTab, setActiveResearchTab] = useState<'qualitative' | 'affinity' | 'quantitative'>('qualitative');
  const [selectedQuoteIdx, setSelectedQuoteIdx] = useState<number>(0);

  const userQuotes = [
    {
      user: isRTL ? 'أحمد (34 سنة - طبيب)' : 'Ahmed (34 - Doctor)',
      quote: isRTL 
        ? '«أنا بطلب الدواء وأنا في طريقي للمستشفى، لو التطبيق طلب مني أكتب العنوان بالتفصيل 4 مرات بمسحه وبطلب تليفون فوراً!»'
        : '"I order medication on my way to the ER. If the app forces me to fill out a 4-step address form, I immediately abandon it and call directly!"',
      tag: isRTL ? 'نقطة ألم: تعقيد إدخال العنوان' : 'Pain Point: Tedious Address Form',
      sentiment: 'frustrated'
    },
    {
      user: isRTL ? 'سارة (28 سنة - موظفة بنك)' : 'Sarah (28 - Banker)',
      quote: isRTL 
        ? '«أهم ميزة بالنسبة لي هي إني أشوف الروشتة متصورة ومكتوب تحتها ميعاد الوصول بالدقيقة عشان أنسق مع والدتي»'
        : '"The most valuable feature is uploading the prescription photo and seeing exact live delivery ETA to coordinate with my mother."',
      tag: isRTL ? 'فرصة نجاح: تتبع مباشر للروشتة' : 'Opportunity: Live Prescription ETA',
      sentiment: 'positive'
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Banner with UX Researcher Focus */}
      <div className={`p-3 sm:p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 shadow-sm ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-md">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-sm sm:text-base font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {isRTL ? 'باحث تجربة المستخدم (UX Researcher)' : 'UX Researcher (Behavioral Scientist)'}
              </h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                isDark ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50' : 'bg-emerald-100 text-emerald-800 border-emerald-300'
              }`}>
                {isRTL ? 'محقق الحقائق والشارع' : 'Empirical Truth Seeker'}
              </span>
            </div>
            <p className={`text-xs font-medium mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {isRTL ? 'التركيز الأساسي: المقابلات المعمقة، استخراج أنماط المشاكل، وحماية الشركة من التخمينات الخاطئة' : 'Core Focus: In-depth interviews, affinity diagram synthesis, quantitative benchmarks & de-risking bets'}
            </p>
          </div>
        </div>

        {/* Research Method Switcher */}
        <div className={`flex items-center gap-1 p-1 rounded-xl border text-xs ${
          isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <button
            onClick={() => setActiveResearchTab('qualitative')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeResearchTab === 'qualitative'
                ? 'bg-emerald-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            {isRTL ? 'المقابلات النوعية' : 'User Interviews'}
          </button>
          <button
            onClick={() => setActiveResearchTab('affinity')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeResearchTab === 'affinity'
                ? 'bg-emerald-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            {isRTL ? 'فرز الملاحظات (Affinity)' : 'Affinity Map'}
          </button>
          <button
            onClick={() => setActiveResearchTab('quantitative')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
              activeResearchTab === 'quantitative'
                ? 'bg-emerald-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            {isRTL ? 'مؤشرات الأرقام (SUS Score)' : 'SUS Scorecard'}
          </button>
        </div>
      </div>

      {/* Main Grid: Research Data Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        
        {/* Left 5 Cols: Interview Log & Context */}
        <div className={`lg:col-span-5 rounded-2xl p-4 border shadow-sm flex flex-col justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                {isRTL ? 'سجل جلسات البحث الميداني' : 'Field Research Sessions'}
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                N = 24 Users
              </span>
            </div>

            {/* Interactive User Persona Quotes */}
            <div className="space-y-2">
              {userQuotes.map((q, idx) => {
                const isSelected = selectedQuoteIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedQuoteIdx(idx)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/10 border-emerald-500 ring-2 ring-emerald-500/20'
                        : isDark ? 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/50' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-black text-slate-800 dark:text-slate-100">{q.user}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        q.sentiment === 'frustrated' 
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}>
                        {q.tag}
                      </span>
                    </div>
                    <p className="text-[11px] italic leading-relaxed text-slate-600 dark:text-slate-300">
                      {q.quote}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Researcher Impact Callout */}
            <div className={`mt-3 p-2.5 rounded-xl border text-xs space-y-1 ${
              isDark ? 'bg-slate-950/70 border-slate-800 text-slate-300' : 'bg-emerald-50/60 border-emerald-200 text-slate-800'
            }`}>
              <div className="flex items-center gap-1.5 font-bold text-emerald-500 text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isRTL ? 'القيمة الحقيقية لباحث الـ UX:' : 'The Real UX Research ROI:'}</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {isRTL 
                  ? '«يوفر على الشركة مئات الآلاف من الدولارات وأشهر من كود المطورين ببناء ما يحتاجه البشر فعلاً بدلاً من التخمين المكتبي»'
                  : '"Protects companies from burning hundreds of thousands of engineering dollars on features nobody actually uses."'}
              </p>
            </div>
          </div>

          <div className={`pt-2 border-t ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'} text-[11px] font-mono flex items-center justify-between`}>
            <span>{isRTL ? 'أدوات: Dovetail, Lookback, Maze' : 'Tools: Dovetail, Lookback, Maze'}</span>
            <span className="text-emerald-500 font-bold">Verified Insights</span>
          </div>
        </div>

        {/* Right 7 Cols: Live Research Findings & Affinity Board */}
        <div className={`lg:col-span-7 rounded-2xl p-4 border shadow-sm flex flex-col justify-between relative overflow-hidden ${
          isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
        }`}>
          {/* Canvas Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-xs">
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {activeResearchTab === 'qualitative' ? 'User Insights Synthesis' : activeResearchTab === 'affinity' ? 'Live Affinity Clustering' : 'System Usability Scale (SUS)'}
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              Confidence Score: 98%
            </span>
          </div>

          {/* Dynamic Research Mode View */}
          {activeResearchTab === 'qualitative' && (
            <div className="my-2 space-y-2 animate-in fade-in">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                <span className="text-xs font-black text-amber-500 flex items-center gap-1">
                  💡 {isRTL ? 'أبرز نقطة مستخلصة من المقابلات (Core Insight):' : 'Key Thematic Finding:'}
                </span>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {isRTL 
                    ? '84% من المستخدمين يفضلون رفع صورة الروشتة بضغطة زر وتأكيد الصيدلي هاتفياً بدلاً من البحث اليدوي عن أسماء الأدوية المعقدة.'
                    : '84% of elderly patients prefer snapping a quick prescription photo over typing complicated generic chemical names.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80">
                  <span className="text-[10px] font-bold text-slate-400 block">{isRTL ? 'معدل إتمام المهمة بنجاح' : 'Task Success Rate'}</span>
                  <span className="text-lg font-black font-mono text-emerald-500">92.4%</span>
                  <span className="text-[9px] text-emerald-400 block font-medium">+18% vs Legacy App</span>
                </div>
                <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80">
                  <span className="text-[10px] font-bold text-slate-400 block">{isRTL ? 'معدل رضا وسهولة (CSAT)' : 'CSAT Satisfaction'}</span>
                  <span className="text-lg font-black font-mono text-blue-500">4.8 / 5.0</span>
                  <span className="text-[9px] text-blue-400 block font-medium">Industry Benchmark: 4.2</span>
                </div>
              </div>
            </div>
          )}

          {activeResearchTab === 'affinity' && (
            <div className="my-2 grid grid-cols-3 gap-2 animate-in fade-in">
              {/* Sticky Cluster 1 */}
              <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700/60 text-slate-900 dark:text-amber-100 space-y-1 shadow-sm">
                <span className="text-[10px] font-mono font-black text-amber-700 dark:text-amber-300 block">📁 Checkout Flow</span>
                <p className="text-[10px] font-medium leading-tight">Address input is too long and complex.</p>
              </div>
              {/* Sticky Cluster 2 */}
              <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/50 border border-blue-300 dark:border-blue-700/60 text-slate-900 dark:text-blue-100 space-y-1 shadow-sm">
                <span className="text-[10px] font-mono font-black text-blue-700 dark:text-blue-300 block">📁 Prescription</span>
                <p className="text-[10px] font-medium leading-tight">Users love instant camera upload.</p>
              </div>
              {/* Sticky Cluster 3 */}
              <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700/60 text-slate-900 dark:text-emerald-100 space-y-1 shadow-sm">
                <span className="text-[10px] font-mono font-black text-emerald-700 dark:text-emerald-300 block">📁 ETA Tracking</span>
                <p className="text-[10px] font-medium leading-tight">Live driver GPS map builds trust.</p>
              </div>
            </div>
          )}

          {activeResearchTab === 'quantitative' && (
            <div className="my-2 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 space-y-2 animate-in fade-in">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">System Usability Scale (SUS) Score:</span>
                <span className="text-base font-black font-mono text-emerald-500">84.5 (Grade A+)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[84.5%]" />
              </div>
              <p className="text-[10px] text-slate-500">
                {isRTL ? 'النتيجة 84.5 تعني أن التطبيق في أعلى 10% من سهولة الاستخدام عالمياً.' : 'Score > 80 indicates world-class ease of use and high product delight.'}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>Research Output: Personas + Usability Benchmark</span>
            <span className="text-emerald-500 font-bold">{isRTL ? '📊 قرارات مبنية على أدلة وبشر حقيقيين' : '📊 100% Empirical Truths'}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
