import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileSpreadsheet, 
  Database, 
  Code2, 
  BarChart3, 
  PieChart, 
  Target, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';

interface CompleteWorkflowVisualProps {
  isRTL: boolean;
}

export const CompleteWorkflowVisual: React.FC<CompleteWorkflowVisualProps> = ({ isRTL }) => {
  const [activeToolIdx, setActiveToolIdx] = useState<number>(0);

  const tools = [
    {
      id: 0,
      name: '1. Excel',
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
      stageAr: 'فحص البيانات والاستكشاف السريع',
      stageEn: 'Ad-Hoc Ingestion & Quick Audits',
      roleAr: 'استلام الملفات الأولية وفحص سلامة الحقول وإجراء العمليات الحسابية السريعة عبر Pivot Tables.',
      roleEn: 'Ingest raw sheets, perform ad-hoc checks, and run rapid initial summaries via Pivot Tables.',
      color: 'border-emerald-200 bg-emerald-50 text-emerald-800',
      output: 'Clean Tabular Spreadsheets'
    },
    {
      id: 1,
      name: '2. SQL',
      icon: <Database className="w-5 h-5 text-blue-600" />,
      stageAr: 'استعلام واستخراج الملايين من السجلات',
      stageEn: 'Relational Querying & Large-Scale Joins',
      roleAr: 'كتابة استعلامات SELECT و JOIN و Window Functions لسحب البيانات الموثوقة من قواعد البيانات المركزية.',
      roleEn: 'Query millions of rows from enterprise DWH using complex JOINs and aggregations.',
      color: 'border-blue-200 bg-blue-50 text-blue-800',
      output: 'Extracted Relational Views'
    },
    {
      id: 2,
      name: '3. Python',
      icon: <Code2 className="w-5 h-5 text-amber-600" />,
      stageAr: 'التنظيف والأتمتة والنمذجة المتقدمة',
      stageEn: 'Automated Cleaning & Statistical Modeling',
      roleAr: 'معالجة النصوص المعقدة، التنبؤ المستقبلي، وأتمتة سحب البيانات عبر مكتبات Pandas و NumPy.',
      roleEn: 'Clean complex datasets, automate ETL pipelines, and apply predictive statistical modeling.',
      color: 'border-amber-200 bg-amber-50 text-amber-800',
      output: 'Curated Analytic Datasets'
    },
    {
      id: 3,
      name: '4. Power BI',
      icon: <BarChart3 className="w-5 h-5 text-yellow-600" />,
      stageAr: 'بناء النماذج البيانية ومؤشرات الـ KPIs',
      stageEn: 'Enterprise Modeling & DAX Scorecards',
      roleAr: 'ربط الجداول بنموذج Star Schema وحساب مقاييس DAX التفاعلية ومشاركتها سحابياً.',
      roleEn: 'Design Star Schemas, author business DAX measures, and share live dashboards with teams.',
      color: 'border-yellow-200 bg-yellow-50 text-yellow-800',
      output: 'Interactive Corporate Dashboards'
    },
    {
      id: 4,
      name: '5. Tableau',
      icon: <PieChart className="w-5 h-5 text-rose-600" />,
      stageAr: 'التحليل البصري وسرد القصص الاستراتيجية',
      stageEn: 'Deep Visual Analytics & Storytelling',
      roleAr: 'استكشاف الأنماط الجغرافية العميقة وتأليف عروض Story Points التنفيذية لصناع القرار.',
      roleEn: 'Explore visual correlations, geospatial clusters, and build persuasive Story Points.',
      color: 'border-rose-200 bg-rose-50 text-rose-800',
      output: 'Executive Story Points'
    },
    {
      id: 5,
      name: '6. Insights',
      icon: <Target className="w-5 h-5 text-cyan-600" />,
      stageAr: 'قرارات الأعمال وتحقيق الأرباح',
      stageEn: 'Strategic Business Decision',
      roleAr: 'ترجمة كل المخرجات التقنية السابقة إلى قرارات استراتيجية تزيد الأرباح وتقلل التكاليف.',
      roleEn: 'Translating all analytical outputs into high-ROI actionable business decisions.',
      color: 'border-cyan-200 bg-cyan-50 text-cyan-800',
      output: 'Actionable Executive Strategy'
    }
  ];

  const current = tools[activeToolIdx];

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-1 max-w-6xl mx-auto select-none">
      {/* 6-Tool Interactive Pipeline Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {tools.map((t, idx) => {
          const isSelected = activeToolIdx === idx;
          return (
            <motion.button
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * idx, duration: 0.4 }}
              onClick={() => setActiveToolIdx(idx)}
              className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between h-24 ${
                isSelected
                  ? 'bg-blue-50/90 border-blue-400 text-blue-900 shadow-sm ring-2 ring-blue-500/20'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-xs text-slate-900">{t.name}</span>
                <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                  isSelected ? 'bg-blue-100' : 'bg-slate-100'
                }`}>
                  {t.icon}
                </div>
              </div>
              <div className="text-[10px] text-slate-500 font-medium truncate">
                {isRTL ? t.stageAr : t.stageEn}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Main Pipeline Inspection Stage */}
      <motion.div 
        key={activeToolIdx}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between h-[340px] text-start relative overflow-hidden"
      >
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
                STAGE 0{activeToolIdx + 1} / 06
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase">
                {isRTL ? current.stageAr : current.stageEn}
              </span>
            </div>
            <span className={`px-3 py-1 rounded-lg border text-xs font-mono font-bold ${current.color}`}>
              {current.output}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2.5">
            {current.name}: {isRTL ? current.stageAr : current.stageEn}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6 max-w-3xl">
            {isRTL ? current.roleAr : current.roleEn}
          </p>
        </div>

        {/* Bottom Navigation & Synergy Indicator */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="font-medium">
              {isRTL 
                ? 'تكامل متناغم: لا توجد أداة تغني عن الأخرى، القوة تكمن في الدمج بينها!' 
                : 'Harmonious Synergy: Each tool amplifies the next in a modern enterprise stack!'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveToolIdx(prev => Math.max(0, prev - 1))}
              disabled={activeToolIdx === 0}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 disabled:opacity-30 text-xs text-slate-700 font-bold transition-all cursor-pointer"
            >
              {isRTL ? 'الأداة السابقة' : 'Previous Tool'}
            </button>
            <button
              onClick={() => setActiveToolIdx(prev => Math.min(5, prev + 1))}
              disabled={activeToolIdx === 5}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-30 text-xs text-white font-bold transition-all cursor-pointer shadow-sm"
            >
              {isRTL ? 'الأداة التالية' : 'Next Tool'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
