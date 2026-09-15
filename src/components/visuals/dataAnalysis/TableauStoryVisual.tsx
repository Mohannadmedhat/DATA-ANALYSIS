import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Presentation, 
  TrendingDown, 
  Search, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface TableauStoryVisualProps {
  isRTL: boolean;
}

export const TableauStoryVisual: React.FC<TableauStoryVisualProps> = ({ isRTL }) => {
  const [activeStoryPoint, setActiveStoryPoint] = useState<number>(0);

  const storyPoints = [
    {
      id: 0,
      tabAr: '1. رصد المشكلة (The Drop)',
      tabEn: '1. The Problem (Sales Drop)',
      headlineAr: 'انخفاض مفاجئ بنسبة 18% في إيرادات الربع الثالث',
      headlineEn: 'Sudden 18% Drop in Q3 Revenue Detected',
      contextAr: 'اللوحة الأولى في القصة تحدد العرض الظاهري للمشكلة لجذب انتباه الإدارة العليا وأصحاب القرار.',
      contextEn: 'The opening story point highlights the business symptom to hook C-level stakeholders.',
      kpiVal: '-18.4%',
      kpiLabelAr: 'تراجع إيرادات Q3',
      kpiLabelEn: 'Q3 Revenue Drop',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    {
      id: 1,
      tabAr: '2. تحليل السبب (Root Cause)',
      tabEn: '2. Root Cause Analysis',
      headlineAr: 'السبب: مشاكل سلاسل الإمداد في المنطقة الغربية فقط',
      headlineEn: 'Root Cause: Western Region Logistics Breakdown',
      contextAr: 'التعمق بالفلترة التفاعلية يكشف أن باقي الفروع مستقرة، والخلل محصور في تأخر الشحن بفرع واحد.',
      contextEn: 'Drilling down reveals other regions are healthy; the gap is isolated to regional shipping delays.',
      kpiVal: '1 Region',
      kpiLabelAr: 'الفرع المتأثر الوحيد',
      kpiLabelEn: 'Isolated Affected Hub',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-200'
    },
    {
      id: 2,
      tabAr: '3. خطة العمل (Action Plan)',
      tabEn: '3. Strategic Solution',
      headlineAr: 'التوصية: التعاقد مع شريك شحن بديل واستعادة الأرباح',
      headlineEn: 'Recommendation: Partner with Local Fulfillment Hubs',
      contextAr: 'ختام القصة بتقديم 3 توصيات قابلة للتنفيذ فوراً وتوقع استعادة النمو بنسبة 25% في الربع الرابع.',
      contextEn: 'The final story point concludes with actionable steps and a 2025 growth recovery forecast.',
      kpiVal: '+25% Expected',
      kpiLabelAr: 'نمو Q4 المتوقع',
      kpiLabelEn: 'Projected Q4 Recovery',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200'
    }
  ];

  const current = storyPoints[activeStoryPoint];

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-1 max-w-6xl mx-auto select-none">
      {/* Top Tableau Story Point Navigation Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <Presentation className="w-4 h-4 text-rose-600" />
          <span className="text-xs font-bold text-slate-500 uppercase">
            {isRTL ? 'ميزة Tableau Story Points (سرد القصص بالبيانات):' : 'Tableau Story Points (Data Storytelling Framework):'}
          </span>
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl shadow-inner">
          {storyPoints.map((sp, idx) => (
            <button
              key={sp.id}
              onClick={() => setActiveStoryPoint(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeStoryPoint === idx
                  ? 'bg-white text-rose-700 shadow-sm border border-slate-200 font-black'
                  : 'text-slate-600 hover:text-slate-900 font-semibold'
              }`}
            >
              {isRTL ? sp.tabAr : sp.tabEn}
            </button>
          ))}
        </div>
      </div>

      {/* Main Story Point Stage Presentation Box */}
      <motion.div 
        key={activeStoryPoint}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-[360px] text-start relative overflow-hidden"
      >
        <div>
          {/* Badge & Story Index */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
              STORY POINT 0{activeStoryPoint + 1} / 03
            </span>
            <span className={`px-3 py-1 rounded-lg border text-xs font-bold ${current.badgeColor}`}>
              {isRTL ? current.kpiLabelAr : current.kpiLabelEn}: {current.kpiVal}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 leading-snug">
            {isRTL ? current.headlineAr : current.headlineEn}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-3xl mb-6">
            {isRTL ? current.contextAr : current.contextEn}
          </p>
        </div>

        {/* Bottom Storytelling Philosophy Callout & Navigation */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>
              {isRTL 
                ? 'فلسفة Tableau: تحويل البيانات من مجرد أرقام صامتة إلى قرارات أعمال مقنعة' 
                : 'Tableau Philosophy: Transforming static figures into persuasive executive actions'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStoryPoint(prev => Math.max(0, prev - 1))}
              disabled={activeStoryPoint === 0}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 disabled:opacity-30 text-xs text-slate-700 font-bold transition-all cursor-pointer"
            >
              {isRTL ? 'المشهد السابق' : 'Previous Point'}
            </button>
            <button
              onClick={() => setActiveStoryPoint(prev => Math.min(2, prev + 1))}
              disabled={activeStoryPoint === 2}
              className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 disabled:opacity-30 text-xs text-white font-bold transition-all cursor-pointer shadow-sm"
            >
              {isRTL ? 'المشهد التالي' : 'Next Point'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
