import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Workflow, 
  Layers, 
  Link2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  FileSpreadsheet, 
  Database, 
  Calendar, 
  Users, 
  ShoppingBag,
  Filter,
  Check
} from 'lucide-react';

interface PowerQueryModelingVisualProps {
  isRTL: boolean;
}

export const PowerQueryModelingVisual: React.FC<PowerQueryModelingVisualProps> = ({ isRTL }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'etl' | 'star-schema'>('overview');

  const [activeStep, setActiveStep] = useState<number>(2);

  const etlSteps = [
    { id: 0, title: isRTL ? '1. استيراد المصدر' : '1. Source Extraction', desc: isRTL ? 'الاتصال بملف Excel أو قاعدة SQL' : 'Connect to Excel, CSV, or SQL Server' },
    { id: 1, title: isRTL ? '2. إزالة الصفوف الفارغة' : '2. Remove Nulls', desc: isRTL ? 'تنظيف القيم المفقودة تلقائياً' : 'Drop incomplete and corrupted records' },
    { id: 2, title: isRTL ? '3. تعديل أنواع البيانات' : '3. Change Data Types', desc: isRTL ? 'تحويل التواريخ والعملات للأشكال الصحيحة' : 'Parse dates, text, and numeric currencies' },
    { id: 3, title: isRTL ? '4. التحميل للنموذج' : '4. Close & Apply', desc: isRTL ? 'تصدير البيانات الجاهزة إلى Power BI Data Model' : 'Load clean dataset into Power BI memory' },
  ];

  const tabs = [
    { id: 'overview', labelAr: 'المحاور الثلاثة (PDF View)', labelEn: 'Core Pillars (PDF View)' },
    { id: 'etl', labelAr: 'خطوات Power Query ETL', labelEn: 'Power Query ETL' },
    { id: 'star-schema', labelAr: 'نمذجة البيانات (Star Schema)', labelEn: 'Star Schema Model' },
  ] as const;

  return (
    <div className="flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none text-slate-100">
      {/* Top Filter Tabs Bar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {isRTL ? 'منظومة Power BI للتحويل والنمذجة:' : 'Power BI Data Preparation & Architecture:'}
          </span>
        </div>

        {/* Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl shadow-inner">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'text-amber-400 font-black shadow-sm' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 font-semibold'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activePowerQueryPill"
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className="absolute inset-0 rounded-lg bg-slate-800 border border-slate-700 shadow-sm"
                  />
                )}
                <span className="relative z-10">
                  {isRTL ? tab.labelAr : tab.labelEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-stretch my-auto">
        <AnimatePresence mode="wait">
          {/* VIEW 1: THREE PILLARS */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 w-full h-full items-stretch"
            >
              {/* Card 1: Power Query */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl hover:border-amber-500/50 transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800 text-amber-400 flex items-center justify-center font-black shadow-sm">
                      <Workflow className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800">
                      ETL Engine
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                    {isRTL ? 'معالجة وتنظيف' : 'Data Ingestion'}
                  </span>
                  <h3 className="text-lg font-black text-slate-100 mb-2">
                    {isRTL ? 'باور كويري (Power Query)' : 'Power Query'}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-medium">
                    {isRTL 
                      ? 'الاتصال بمصادر البيانات المتعددة وتنظيفها وتشكيلها (Clean & Shape) قبل تحميلها إلى النموذج.'
                      : 'Connect to sources and clean/shape data before loading it in.'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>{isRTL ? 'تنظيف واستخلاص' : 'Applied Steps'}</span>
                  <button
                    onClick={() => setActiveTab('etl')}
                    className="text-amber-300 font-bold hover:underline cursor-pointer"
                  >
                    {isRTL ? 'عرض الـ ETL' : 'View ETL'}
                  </button>
                </div>
              </motion.div>

              {/* Card 2: Data Modeling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl hover:border-blue-500/50 transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800 text-blue-400 flex items-center justify-center font-black shadow-sm">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-800">
                      Star Schema
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                    {isRTL ? 'الهيكل المنطقي' : 'Logical Design'}
                  </span>
                  <h3 className="text-lg font-black text-slate-100 mb-2">
                    {isRTL ? 'نمذجة البيانات (Data Modeling)' : 'Data Modeling'}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-medium">
                    {isRTL 
                      ? 'تنظيم الجداول ودمجها في هيكل منطقي متناسق ومُحسّن خصيصاً للتحليل وسرعة التقارير.'
                      : 'Organize tables into a logical model for analysis.'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>{isRTL ? 'جداول الحقائق والأبعاد' : 'Facts & Dimensions'}</span>
                  <button
                    onClick={() => setActiveTab('star-schema')}
                    className="text-blue-300 font-bold hover:underline cursor-pointer"
                  >
                    {isRTL ? 'عرض المخطط' : 'View Schema'}
                  </button>
                </div>
              </motion.div>

              {/* Card 3: Relationships */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl hover:border-emerald-500/50 transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-400 flex items-center justify-center font-black shadow-sm">
                      <Link2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800">
                      1 : Many (1:*)
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    {isRTL ? 'التكامل والروابط' : 'Model Cardinality'}
                  </span>
                  <h3 className="text-lg font-black text-slate-100 mb-2">
                    {isRTL ? 'العلاقات (Relationships)' : 'Relationships'}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-medium">
                    {isRTL 
                      ? 'ربط الجداول ببعضها بواسطة مفاتيح مشتركة لتمكين الفلترة التلقائية وعمليات DAX المتقدمة.'
                      : 'Connect tables together using shared keys.'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isRTL ? 'فلترة تبادلية ذكية' : 'Cross-Filtering Active'}</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* VIEW 2: POWER QUERY ETL PIPELINE STEPS */}
          {activeTab === 'etl' && (
            <motion.div
              key="etl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between w-full h-full p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl text-start"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-amber-400" />
                    <h3 className="font-bold text-slate-100 text-base">
                      {isRTL ? 'لوحة الخطوات المطبقة (Applied Steps) في Power Query' : 'Power Query ETL Pipeline: Step-by-Step Cleansing'}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold bg-amber-950/60 text-amber-300 px-2 py-0.5 rounded border border-amber-800">
                    M-Language Engine
                  </span>
                </div>

                {/* Steps Visual Tracker */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-4">
                  {etlSteps.map((step) => {
                    const isSelected = activeStep === step.id;
                    return (
                      <button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`p-3 rounded-xl border text-start transition-all cursor-pointer ${
                          isSelected 
                            ? 'bg-amber-950/60 border-amber-600 text-white shadow-xs' 
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-bold ${isSelected ? 'text-amber-300' : 'text-slate-200'}`}>
                            {step.title}
                          </span>
                          {step.id <= activeStep && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-2">
                          {step.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Live Step Result Preview */}
                <div className="p-4 bg-slate-950 rounded-xl text-slate-200 font-mono text-xs border border-slate-800 shadow-inner">
                  <div className="text-amber-400 mb-1 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {isRTL ? 'كود لغة M المولد تلقائياً:' : 'Generated M-Code Expression:'}
                  </div>
                  <p className="text-emerald-400">
                    {activeStep === 0 && '= Excel.Workbook(File.Contents("C:\\SalesData.xlsx"), null, true)'}
                    {activeStep === 1 && '= Table.SelectRows(Source, each [CustomerID] <> null and [Amount] <> null)'}
                    {activeStep === 2 && '= Table.TransformColumnTypes(CleanRows, {{"Date", type date}, {"Amount", Currency.Type}})'}
                    {activeStep === 3 && '= Table.Buffer(FinalCleanModel) // Ready to load in Power BI memory'}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>{isRTL ? 'تطبيق التغييرات تلقائياً عند تحديث البيانات' : 'Automated on every scheduled data refresh'}</span>
                <span className="font-mono text-amber-400 font-bold">100% No Manual Excel Redo</span>
              </div>
            </motion.div>
          )}

          {/* VIEW 3: STAR SCHEMA DATA MODELING */}
          {activeTab === 'star-schema' && (
            <motion.div
              key="star-schema"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between w-full h-full p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl text-start"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-400" />
                    <h3 className="font-bold text-slate-100 text-base">
                      {isRTL ? 'نموذج مخطط النجمة (Star Schema Model)' : 'Star Schema Architecture (1 : * Relationships)'}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800">
                    Fact & Dimension Tables
                  </span>
                </div>

                {/* Star Schema Interactive Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  {/* Left Dimensions */}
                  <div className="space-y-2">
                    {/* Dim_Customer */}
                    <div className="p-3 bg-blue-950/60 border border-blue-800 rounded-xl text-xs">
                      <div className="flex items-center justify-between font-bold text-blue-300 mb-1">
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Dim_Customer</span>
                        <span className="font-mono text-[10px] bg-blue-900 text-blue-200 px-1 rounded">1</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono block">PK: CustomerKey • Name • Segment</span>
                    </div>

                    {/* Dim_Date */}
                    <div className="p-3 bg-indigo-950/60 border border-indigo-800 rounded-xl text-xs">
                      <div className="flex items-center justify-between font-bold text-indigo-300 mb-1">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Dim_Date</span>
                        <span className="font-mono text-[10px] bg-indigo-900 text-indigo-200 px-1 rounded">1</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono block">PK: DateKey • Year • Month • Qtr</span>
                    </div>
                  </div>

                  {/* Center: Central Fact_Sales */}
                  <div className="p-4 bg-amber-600/90 text-white rounded-2xl shadow-md text-center border border-amber-500">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-200 block">
                      CENTRAL FACT TABLE
                    </span>
                    <h4 className="text-base font-black my-1">Fact_Sales</h4>
                    <span className="text-[11px] font-mono bg-amber-950/80 px-2 py-0.5 rounded inline-block text-amber-200 border border-amber-700">
                      Cardinality: Many (*)
                    </span>
                    <div className="mt-2 text-[10px] text-amber-100 font-mono space-y-0.5 border-t border-amber-500/40 pt-1.5 text-start">
                      <p>FK: CustomerKey (1:*)</p>
                      <p>FK: DateKey (1:*)</p>
                      <p>FK: ProductKey (1:*)</p>
                      <p className="font-bold text-white">Measures: Quantity, SalesAmount</p>
                    </div>
                  </div>

                  {/* Right: Dim_Product */}
                  <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-xl text-xs">
                    <div className="flex items-center justify-between font-bold text-emerald-300 mb-1">
                      <span className="flex items-center gap-1"><ShoppingBag className="w-3.5 h-3.5" /> Dim_Product</span>
                      <span className="font-mono text-[10px] bg-emerald-900 text-emerald-200 px-1 rounded">1</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono block">PK: ProductKey • Category • UnitCost</span>
                  </div>
                </div>
              </div>

              {/* Bottom modeling insight */}
              <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>{isRTL ? 'تصميم Star Schema هو المعيار الذهبي لأداء التقارير الفوري في Power BI' : 'Star Schema is the industry gold standard for optimal Power BI performance.'}</span>
                <span className="font-mono text-blue-400 font-bold">1-to-Many Relationships</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Quote */}
      <div className="mt-2 text-center">
        <span className="text-[11px] font-medium text-slate-400">
          {isRTL 
            ? 'Power Query تنظف البيانات، بينما النمذجة (Data Modeling) ترتبها لتمنحك تقارير سريعة بدقة متناهية'
            : 'Power Query cleans and shapes data; Data Modeling builds the engine for lightning-fast business insights'}
        </span>
      </div>
    </div>
  );
};
