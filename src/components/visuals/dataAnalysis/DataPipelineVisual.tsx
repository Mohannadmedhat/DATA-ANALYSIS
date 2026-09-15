import React from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  DownloadCloud, 
  Cpu, 
  UploadCloud, 
  Server, 
  BrainCircuit, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  ArrowDown
} from 'lucide-react';

interface DataPipelineVisualProps {
  isRTL: boolean;
}

export const DataPipelineVisual: React.FC<DataPipelineVisualProps> = ({ isRTL }) => {
  const row1Nodes = [
    { title: isRTL ? 'مصادر البيانات' : 'Data Sources', sub: isRTL ? 'ملفات، أجهزة، APIs' : 'APIs, CSV, Logs', icon: <Database className="w-5 h-5 text-blue-600" />, isAccent: false },
    { title: isRTL ? 'الاستخراج' : 'Extract', sub: isRTL ? 'سحب البيانات الخام' : 'Ingest raw streams', icon: <DownloadCloud className="w-5 h-5 text-blue-600" />, isAccent: false },
    { title: isRTL ? 'التحويل والتنقية' : 'Transform', sub: isRTL ? 'تنظيف ومعالجة وتوحيد' : 'Cleanse & structure', icon: <Cpu className="w-5 h-5 text-blue-600" />, isAccent: false },
    { title: isRTL ? 'التحميل (Load)' : 'Load', sub: isRTL ? 'حفظ في المخزن' : 'Load to warehouse', icon: <UploadCloud className="w-5 h-5 text-amber-600" />, isAccent: true },
  ];

  const row2Nodes = [
    { title: isRTL ? 'قواعد البيانات' : 'Database', sub: isRTL ? 'مستودع DWH / SQL' : 'SQL Warehouse', icon: <Server className="w-5 h-5 text-blue-600" />, isAccent: false },
    { title: isRTL ? 'التحليل' : 'Analysis', sub: isRTL ? 'استعلامات ونماذج' : 'Modeling & queries', icon: <BrainCircuit className="w-5 h-5 text-blue-600" />, isAccent: false },
    { title: isRTL ? 'لوحات المؤشرات' : 'Dashboard', sub: isRTL ? 'تقارير Power BI' : 'Power BI & Tableau', icon: <BarChart3 className="w-5 h-5 text-blue-600" />, isAccent: false },
    { title: isRTL ? 'اتخاذ القرار' : 'Decision', sub: isRTL ? 'قرارات أعمال ذكية' : 'Data-driven action', icon: <CheckCircle className="w-5 h-5 text-emerald-600" />, isAccent: true },
  ];

  return (
    <div className="flex flex-col gap-5 sm:gap-6 w-full h-full justify-center py-2 max-w-5xl mx-auto select-none">
      {/* Tier 1: Data Ingestion & ETL (Row 1) */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-2 font-mono">
          <span>{isRTL ? 'المسار 1: استخراج ومعالجة وتحميل البيانات (ETL Pipeline)' : 'Tier 1: Data Ingestion & ETL Pipeline'}</span>
          <span className="text-blue-600">ETL Process</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
          {row1Nodes.map((node, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx, duration: 0.45, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className={`flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all text-start ${
                node.isAccent
                  ? 'bg-amber-50/70 border-amber-200 text-slate-900 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-blue-300 text-slate-900 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  node.isAccent ? 'bg-amber-100 border border-amber-200' : 'bg-blue-50 border border-blue-100'
                }`}>
                  {node.icon}
                </div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md font-mono ${
                  node.isAccent ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-black text-slate-900">
                  {node.title}
                </h4>
                <p className="text-[11px] sm:text-xs mt-1 font-medium text-slate-500">
                  {node.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Downward Loop Connector */}
      <div className="flex justify-center -my-2">
        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold shadow-inner">
          <ArrowDown className="w-3.5 h-3.5 text-blue-600 animate-bounce" />
          <span>{isRTL ? 'تدفق البيانات إلى بيئة التحليل والاستخدام' : 'Flows into Analytics & Consumption'}</span>
        </div>
      </div>

      {/* Tier 2: Storage, Analytics & Decision (Row 2) */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-2 font-mono">
          <span>{isRTL ? 'المسار 2: التخزين، التحليل، وصناعة القرار (Analytics to Decision)' : 'Tier 2: Storage, Analytics & Decision'}</span>
          <span className="text-emerald-700">Business Value</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
          {row2Nodes.map((node, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * (idx + 4), duration: 0.45, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className={`flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all text-start ${
                node.isAccent
                  ? 'bg-emerald-50/70 border-emerald-200 text-slate-900 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-blue-300 text-slate-900 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  node.isAccent ? 'bg-emerald-100 border border-emerald-200' : 'bg-blue-50 border border-blue-100'
                }`}>
                  {node.icon}
                </div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md font-mono ${
                  node.isAccent ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  0{idx + 5}
                </span>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-black text-slate-900">
                  {node.title}
                </h4>
                <p className="text-[11px] sm:text-xs mt-1 font-medium text-slate-500">
                  {node.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
