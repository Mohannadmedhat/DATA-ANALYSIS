import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, 
  Cloud, 
  ShieldCheck, 
  Share2, 
  CheckCircle2, 
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Users,
  RefreshCw
} from 'lucide-react';

interface PowerBiPublishingVisualProps {
  isRTL: boolean;
}

export const PowerBiPublishingVisual: React.FC<PowerBiPublishingVisualProps> = ({ isRTL }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: 0,
      number: '01',
      titleAr: 'تطوير التقرير محلياً',
      titleEn: 'Desktop Authoring',
      roleAr: 'بناء النماذج البيانية، كتابة معادلات DAX المعقدة، وتصميم الصفحات داخل Power BI Desktop.',
      roleEn: 'Build data models, author complex DAX measures, and design rich visuals in Desktop.',
      icon: <Laptop className="w-5 h-5" />,
      tag: 'Power BI Desktop'
    },
    {
      id: 1,
      number: '02',
      titleAr: 'النشر السحابي الفوري',
      titleEn: 'Cloud Publishing',
      roleAr: 'رفع ملف التقرير (.pbix) إلى منصة Power BI Service بنقرة واحدة داخل مساحات العمل المشتركة.',
      roleEn: 'Publish the .pbix workbook to Power BI Service cloud workspaces with a single click.',
      icon: <Cloud className="w-5 h-5" />,
      tag: 'Power BI Service'
    },
    {
      id: 2,
      number: '03',
      titleAr: 'تأمين البيانات والصلاحيات',
      titleEn: 'Security & RLS Governance',
      roleAr: 'تطبيق أمان مستوى الصف (Row-Level Security) ليرى كل مدير مبيعات أرقام فرعه فقط تلقائياً.',
      roleEn: 'Enforce Row-Level Security (RLS) so managers see only their branch data.',
      icon: <ShieldCheck className="w-5 h-5" />,
      tag: 'RLS & Governance'
    },
    {
      id: 3,
      number: '04',
      titleAr: 'المشاركة والتحديث التلقائي',
      titleEn: 'Sharing & Scheduled Refresh',
      roleAr: 'جدولة التحديث التلقائي للبيانات ومشاركة لوحات المؤشرات عبر Teams، الجوال، والبريد.',
      roleEn: 'Schedule auto-data refreshes via Gateway and distribute dashboards via Teams and Mobile.',
      icon: <Share2 className="w-5 h-5" />,
      tag: 'App Workspaces & Gateway'
    }
  ];

  const current = stages[activeStage];

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-1 max-w-6xl mx-auto select-none">
      {/* 4-Stage Enterprise Publishing Workflow */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {stages.map((s, idx) => {
          const isSelected = activeStage === idx;
          return (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx, duration: 0.4 }}
              onClick={() => setActiveStage(idx)}
              className={`p-3 sm:p-4 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between h-28 ${
                isSelected
                  ? 'bg-blue-50/90 border-blue-400 text-blue-900 shadow-sm ring-2 ring-blue-500/20'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  STAGE {s.number}
                </span>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                }`}>
                  {s.icon}
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold leading-snug truncate text-slate-900">
                  {isRTL ? s.titleAr : s.titleEn}
                </h4>
                <span className="text-[10px] text-slate-500 font-mono">{s.tag}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Main Detailed Inspection Showcase */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-start"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
              {current.tag}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
            {isRTL ? current.titleAr : current.titleEn}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4 max-w-xl">
            {isRTL ? current.roleAr : current.roleEn}
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold">
              🔒 Row-Level Security (RLS)
            </span>
            <span className="px-3 py-1 rounded-lg bg-cyan-50 border border-cyan-200 text-xs text-cyan-700 font-semibold">
              ⚡ Live DirectQuery / Import
            </span>
            <span className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800 font-semibold">
              📱 Mobile Layout Designer
            </span>
          </div>
        </div>

        {/* Live Mockup Badge on Right */}
        <div className="w-full md:w-72 h-44 rounded-2xl bg-slate-50/90 border border-slate-200 p-4 flex flex-col justify-between shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold text-slate-500">Power BI Cloud Service</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
              Status: Live
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-500 font-medium">Scheduled Refresh:</span>
              <span className="text-blue-700 font-bold font-mono">08:00 AM Daily</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-500 font-medium">Active Viewers:</span>
              <span className="text-emerald-700 font-bold font-mono">142 Stakeholders</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>Gateway: Connected</span>
            <span className="text-blue-600 font-bold">Workspace: Pro</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
