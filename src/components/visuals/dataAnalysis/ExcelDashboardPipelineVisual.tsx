import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileSpreadsheet, 
  Table2, 
  BarChart2, 
  LayoutDashboard, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  SlidersHorizontal,
  Layers,
  Sparkles
} from 'lucide-react';

interface ExcelDashboardPipelineVisualProps {
  isRTL: boolean;
}

export const ExcelDashboardPipelineVisual: React.FC<ExcelDashboardPipelineVisualProps> = ({ isRTL }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      number: '01',
      titleAr: 'تنظيف وتجهيز البيانات',
      titleEn: 'Data Cleaning & Prep',
      subtitleAr: 'حذف التكرارات، ملء الفراغات، وتنسيق الأعمدة كجداول رسمية (Excel Tables).',
      subtitleEn: 'Remove duplicates, handle blanks, and format ranges into official Excel Tables (Ctrl+T).',
      icon: <FileSpreadsheet className="w-5 h-5" />,
      color: 'blue',
      preview: {
        badge: isRTL ? 'الخطوة الأولى' : 'Step 1',
        stat: isRTL ? '100% بيانات منقحة' : '100% Cleaned Data',
        details: isRTL ? [
          'تحويل النطاق إلى Table رسمي (Ctrl + T)',
          'إزالة الصفوف المكررة بدقة',
          'توحيد صيغ التواريخ والأرقام والعملات'
        ] : [
          'Convert data range into Table (Ctrl+T)',
          'Remove duplicate entries automatically',
          'Standardize dates, currencies, and numbers'
        ]
      }
    },
    {
      id: 1,
      number: '02',
      titleAr: 'إنشاء الجداول المحورية',
      titleEn: 'Build Pivot Tables',
      subtitleAr: 'تلخيص وتجميع آلاف الصفوف في ثوانٍ لاستخراج إجماليات المبيعات والأداء.',
      subtitleEn: 'Aggregate and summarize thousands of records instantly by category and region.',
      icon: <Table2 className="w-5 h-5" />,
      color: 'indigo',
      preview: {
        badge: isRTL ? 'الخطوة الثانية' : 'Step 2',
        stat: isRTL ? 'تجميع فوري للبيانات' : 'Instant Aggregation',
        details: isRTL ? [
          'سحب الحقول إلى Rows و Values',
          'حساب Sum of Sales و Average Order',
          'فرز وتصنيف أعلى الفئات مبيعاً'
        ] : [
          'Drag fields to Rows and Values zones',
          'Calculate Sum of Sales & Avg Order',
          'Sort and rank top-performing categories'
        ]
      }
    },
    {
      id: 2,
      number: '03',
      titleAr: 'إضافة المخططات المحورية',
      titleEn: 'Insert Pivot Charts',
      subtitleAr: 'ربط كل جدول محوري برسم بياني ديناميكي يوضح التوجهات والنسب.',
      subtitleEn: 'Attach dynamic Pivot Charts (Columns, Lines, Donut) linked to summary tables.',
      icon: <BarChart2 className="w-5 h-5" />,
      color: 'cyan',
      preview: {
        badge: isRTL ? 'الخطوة الثالثة' : 'Step 3',
        stat: isRTL ? 'رسوم بيانية ديناميكية' : 'Dynamic Visuals',
        details: isRTL ? [
          'مخطط أعمدة لمقارنة الفئات',
          'مخطط خطي لتتبع مسار الإيرادات الشهري',
          'تنسيق ألوان احترافي متناسق'
        ] : [
          'Column chart for category comparison',
          'Line chart for monthly revenue trends',
          'Professional color palette formatting'
        ]
      }
    },
    {
      id: 3,
      number: '04',
      titleAr: 'ربط الفلاتر التفاعلية (Slicers)',
      titleEn: 'Connect Slicers & Timeline',
      subtitleAr: 'دمج مقسمات البيانات (Slicers) للتحكم في جميع الرسوم التفاعلية بنقرة واحدة.',
      subtitleEn: 'Connect interactive Slicers to all charts for single-click interactive dashboard filtering.',
      icon: <LayoutDashboard className="w-5 h-5" />,
      color: 'emerald',
      preview: {
        badge: isRTL ? 'الخطوة الرابعة' : 'Step 4',
        stat: isRTL ? 'لوحة تحكم تفاعلية كاملة' : 'Full Interactive Dashboard',
        details: isRTL ? [
          'إدراج مقسمات بيانات للسنة والمنطقة',
          'ربط Slicer بجميع الجداول (Report Connections)',
          'تحديث فوري لجميع المؤشرات عند النقر'
        ] : [
          'Insert Slicers for Year & Region',
          'Link Slicers across all pivot tables',
          'Instant multi-chart sync on user click'
        ]
      }
    }
  ];

  const current = steps[activeStep];

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-1 max-w-6xl mx-auto select-none">
      {/* 4-Step Process Breadcrumb Pipeline */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {steps.map((s, idx) => {
          const isSelected = activeStep === idx;
          const isPassed = activeStep > idx;
          return (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx, duration: 0.4 }}
              onClick={() => setActiveStep(idx)}
              className={`p-3 sm:p-4 rounded-xl border text-start transition-all cursor-pointer flex items-center justify-between ${
                isSelected
                  ? 'bg-blue-50/90 border-blue-400 text-blue-900 shadow-sm ring-2 ring-blue-500/20'
                  : isPassed
                    ? 'bg-emerald-50/40 border-emerald-300 text-slate-800 hover:bg-emerald-50/70'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${
                  isSelected ? 'bg-blue-600 text-white' : isPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  {s.number}
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight text-slate-900">
                    {isRTL ? s.titleAr : s.titleEn}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {isSelected ? (isRTL ? 'المرحلة الحالية' : 'Active Stage') : (isRTL ? 'انقر للاستعراض' : 'Click to inspect')}
                  </span>
                </div>
              </div>

              {isPassed && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
            </motion.button>
          );
        })}
      </div>

      {/* Stage Inspection Preview Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left / Info Box (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col justify-between h-[340px] p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-start"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[11px] font-bold">
                STAGE {current.number} / 04
              </span>
              <span className="text-xs text-slate-500 font-bold uppercase">{current.preview.badge}</span>
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-2">
              {isRTL ? current.titleAr : current.titleEn}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {isRTL ? current.subtitleAr : current.subtitleEn}
            </p>

            {/* Checklist */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              {current.preview.details.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">{isRTL ? 'الهدف المحقق:' : 'Milestone Target:'}</span>
            <span className="text-emerald-700 font-bold font-mono">{current.preview.stat}</span>
          </div>
        </motion.div>

        {/* Right / Visual Simulation Box (7 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          className="lg:col-span-7 h-[340px] rounded-2xl bg-slate-50/80 border border-slate-200 shadow-sm p-5 flex flex-col justify-between text-start relative overflow-hidden"
        >
          {/* Top Bar of Simulation */}
          <div className="flex items-center justify-between z-10 pb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                {current.icon}
              </div>
              <span className="font-mono text-xs font-bold text-slate-800">
                Excel Workspace Simulation
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] text-slate-600 font-mono shadow-sm">
              Live Flow
            </span>
          </div>

          {/* Dynamic Mockup UI based on active stage */}
          <div className="my-auto z-10 py-2">
            {activeStep === 0 && (
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-bold block mb-1">Raw Records</span>
                  <span className="text-base font-black text-rose-600 font-mono">15,420 rows</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-bold block mb-1">Nulls Cleaned</span>
                  <span className="text-base font-black text-amber-600 font-mono">824 fixed</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 font-bold block mb-1">Ready Dataset</span>
                  <span className="text-base font-black text-emerald-600 font-mono">14,596 rows</span>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs space-y-2 shadow-sm">
                <div className="flex justify-between border-b border-slate-100 pb-1.5 text-slate-500 font-bold text-[11px]">
                  <span>Category</span>
                  <span>Sum of Sales</span>
                  <span>Avg Order</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Electronics</span>
                  <span className="text-emerald-700 font-bold">$148,200</span>
                  <span>$1,420</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Furniture</span>
                  <span className="text-emerald-700 font-bold">$92,450</span>
                  <span>$850</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Office Supplies</span>
                  <span className="text-emerald-700 font-bold">$45,100</span>
                  <span>$310</span>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
                  <span className="text-[11px] text-slate-600 font-bold mb-2">Monthly Revenue Trend</span>
                  <div className="flex items-end gap-2 h-16 w-full justify-center px-4">
                    <div className="w-3.5 bg-blue-400 rounded-t h-[40%]" />
                    <div className="w-3.5 bg-blue-500 rounded-t h-[65%]" />
                    <div className="w-3.5 bg-blue-500 rounded-t h-[55%]" />
                    <div className="w-3.5 bg-blue-600 rounded-t h-[90%]" />
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
                  <span className="text-[11px] text-slate-600 font-bold mb-2">Category Market Share</span>
                  <div className="w-14 h-14 rounded-full border-4 border-emerald-500 border-t-cyan-400 border-r-indigo-500 flex items-center justify-center text-xs font-bold text-slate-800">
                    78%
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-2.5">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[10px] text-slate-500 font-bold block">Total KPI</span>
                    <span className="text-sm font-black text-slate-900 font-mono">$285,750</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[10px] text-slate-500 font-bold block">MoM Growth</span>
                    <span className="text-sm font-black text-emerald-700 font-mono">+18.4%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[10px] text-slate-500 font-bold block">Active Slicers</span>
                    <span className="text-sm font-black text-blue-700 font-mono">2024 / EMEA</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-700 flex items-center justify-between shadow-sm">
                  <span className="flex items-center gap-1.5 text-blue-700 font-bold">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Interactive Slicer Filter: [Year: 2024] [Region: Cairo]</span>
                  </span>
                  <span className="text-emerald-700 font-bold font-mono">Live Sync</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Next/Prev buttons */}
          <div className="flex items-center justify-between z-10 pt-2 border-t border-slate-200">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-30 text-xs text-slate-700 font-bold transition-all cursor-pointer shadow-sm"
            >
              {isRTL ? 'السابق' : 'Previous Step'}
            </button>
            <span className="text-[11px] font-mono font-bold text-slate-500">
              {activeStep + 1} of 4
            </span>
            <button
              onClick={() => setActiveStep(prev => Math.min(3, prev + 1))}
              disabled={activeStep === 3}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-30 text-xs text-white font-bold transition-all cursor-pointer shadow-sm"
            >
              {isRTL ? 'التالي' : 'Next Step'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
