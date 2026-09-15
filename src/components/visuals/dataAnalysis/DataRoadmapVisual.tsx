import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  FileSpreadsheet, 
  Code2, 
  LineChart, 
  Database, 
  BarChart4, 
  PieChart, 
  Globe2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Target,
  Workflow,
  Compass,
  Zap
} from 'lucide-react';
import { InstantLogo } from '../../InstantLogo';

interface DataRoadmapVisualProps {
  isRTL: boolean;
}

interface MilestoneData {
  step: number;
  shortName: string;
  shortNameAr: string;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  descEn: string;
  descAr: string;
  keySkills: string[];
  keySkillsAr: string[];
  deliverableEn: string;
  deliverableAr: string;
  color: string;
  bgGlow: string;
  borderAccent: string;
  iconBg: string;
  icon: React.ReactNode;
}

export const DataRoadmapVisual: React.FC<DataRoadmapVisualProps> = ({ isRTL }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const milestones: MilestoneData[] = [
    {
      step: 1,
      shortName: 'Math & Stats',
      shortNameAr: 'الإحصاء',
      titleEn: 'Math & Statistics',
      titleAr: 'الرياضيات والإحصاء للتحليل',
      categoryEn: 'Stage 01 • Scientific Foundation',
      categoryAr: 'المرحلة 01 • الأساس العلمي والإحصائي',
      descEn: 'Master statistical distributions, probability theory, hypothesis testing, and variance analysis to uncover the mathematical truth behind data.',
      descAr: 'فهم التوزيعات الإحصائية، نظرية الاحتمالات، مقاييس النزعة المركزية والتشتت، واختبار الفرضيات لفهم سلوك البيانات بشكل علمي دقيق.',
      keySkills: ['Descriptive Statistics', 'Probability & Distributions', 'Hypothesis Testing (A/B)', 'Outlier Detection'],
      keySkillsAr: ['الإحصاء الوصفي والاستدلالي', 'الاحتمالات والتوزيع الطبيعي', 'اختبار الفرضيات A/B Testing', 'اكتشاف القيم الشاذة Outliers'],
      deliverableEn: 'Statistical evaluation report assessing data health and business hypotheses.',
      deliverableAr: 'تقرير تقييم إحصائي يحدد سلامة البيانات ويفحص الفرضيات التجارية.',
      color: 'text-cyan-400',
      bgGlow: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
      borderAccent: 'border-cyan-500',
      iconBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
      icon: <Calculator className="w-6 h-6" />
    },
    {
      step: 2,
      shortName: 'Excel',
      shortNameAr: 'Excel',
      titleEn: 'Microsoft Excel',
      titleAr: 'جداول Excel المتقدمة',
      categoryEn: 'Stage 02 • Core Spreadsheet Tool',
      categoryAr: 'المرحلة 02 • أداة الجداول والتحليل الأولى',
      descEn: 'From data sanitization and dynamic lookup functions (XLOOKUP) to Pivot Tables, Slicers, and interactive executive KPI dashboards.',
      descAr: 'من تنظيف وتجهيز الجداول والدوال المنطقية والبحثية المتقدمة (XLOOKUP) إلى الجداول المحورية ولوحات القيادة التفاعلية.',
      keySkills: ['Data Cleaning & Prep', 'Advanced Formulas & XLOOKUP', 'Pivot Tables & Slicers', 'Automated Dashboards'],
      keySkillsAr: ['تنظيف وتجهيز البيانات الخام', 'معادلات XLOOKUP و IF المركبة', 'الجداول المحورية Pivot Tables', 'لوحات تحكم Dashboard تفاعلية'],
      deliverableEn: 'End-to-end dynamic Excel dashboard summarizing quarterly company revenue and KPIs.',
      deliverableAr: 'لوحة تحكم تنفيذية تفاعلية على Excel لقياس الأداء المالي والتشغيلي.',
      color: 'text-emerald-400',
      bgGlow: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      borderAccent: 'border-emerald-500',
      iconBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      icon: <FileSpreadsheet className="w-6 h-6" />
    },
    {
      step: 3,
      shortName: 'Python Core',
      shortNameAr: 'بايثون',
      titleEn: 'Python Fundamentals',
      titleAr: 'أساسيات لغة Python',
      categoryEn: 'Stage 03 • Automation & Logic',
      categoryAr: 'المرحلة 03 • البرمجة والأتمتة والمنطق',
      descEn: 'Core programming syntax: variables, data structures (Lists, Dicts), control flow, loops, and modular reusable functions for automation.',
      descAr: 'المفاهيم البرمجية الأساسية: المتغيرات، هياكل البيانات (Lists & Dicts)، الشروط والتكرار، والدوال المعيارية القابلة لإعادة الاستخدام.',
      keySkills: ['Variables & Data Types', 'Control Flow & Loops', 'Lists & Dictionaries', 'Custom Functions'],
      keySkillsAr: ['أنواع البيانات والمتغيرات', 'الشروط المنطقية وحلقات التكرار', 'القوائم والقواميس البرمجية', 'بناء الدوال المعيارية والأتمتة'],
      deliverableEn: 'Automated Python scripts for batch file transformation and daily data sanitization.',
      deliverableAr: 'سكربتات برمجية لأتمتة معالجة وتوحيد مئات الملفات تلقائياً.',
      color: 'text-amber-400',
      bgGlow: 'from-amber-500/20 via-amber-500/5 to-transparent',
      borderAccent: 'border-amber-500',
      iconBg: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
      icon: <Code2 className="w-6 h-6" />
    },
    {
      step: 4,
      shortName: 'Pandas / EDA',
      shortNameAr: 'مكتبات بايثون',
      titleEn: 'Python for Data Analysis',
      titleAr: 'مكتبات Python للتحليل',
      categoryEn: 'Stage 04 • Wrangling & EDA',
      categoryAr: 'المرحلة 04 • التحليل الاستكشافي للبيانات',
      descEn: 'High-performance data manipulation using Pandas DataFrames and NumPy arrays, combined with statistical charts in Matplotlib & Seaborn.',
      descAr: 'معالجة ملايين الصفوف بكفاءة فائقة عبر Pandas ومصفوفات NumPy، مع بناء رسوم بيانية وتوزيعات إحصائية عبر Matplotlib و Seaborn.',
      keySkills: ['NumPy Arrays', 'Pandas DataFrames', 'Matplotlib & Seaborn', 'Exploratory Analysis (EDA)'],
      keySkillsAr: ['العمليات المتجهة مع NumPy', 'معالجة الجداول الضخمة مع Pandas', 'الرسم البياني مع Seaborn', 'التحليل الاستكشافي EDA الشامل'],
      deliverableEn: 'Complete Jupyter Notebook conducting EDA on a 1M+ row consumer transaction dataset.',
      deliverableAr: 'دفتر Jupyter متكامل يحلل سلوك أكثر من مليون عملية شراء للمستخدمين.',
      color: 'text-indigo-400',
      bgGlow: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
      borderAccent: 'border-indigo-500',
      iconBg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/40',
      icon: <LineChart className="w-6 h-6" />
    },
    {
      step: 5,
      shortName: 'SQL / DB',
      shortNameAr: 'قواعد البيانات',
      titleEn: 'SQL & Databases',
      titleAr: 'قواعد البيانات ولغة SQL',
      categoryEn: 'Stage 05 • Enterprise Data Layer',
      categoryAr: 'المرحلة 05 • استخراج البيانات المؤسسية',
      descEn: 'Extract, filter, aggregate, and join multi-table relational data from production database systems (RDBMS) using industry SQL queries.',
      descAr: 'استعلامات استخراج وفلترة وتجميع وربط الجداول المتعددة (Joins & Subqueries) من خوادم وقواعد البيانات العلائقية الضخمة.',
      keySkills: ['Relational Data Modeling', 'SELECT, WHERE & GROUP BY', 'Multi-Table JOINs', 'Subqueries & CTEs'],
      keySkillsAr: ['مفاهيم قواعد البيانات العلائقية', 'الاستعلامات والتجميع والفلترة', 'الربط المتقدم بين الجداول Joins', 'الاستعلامات الفرعية المتداخلة'],
      deliverableEn: 'Complex multi-table SQL query repository answering real-world business intelligence questions.',
      deliverableAr: 'مستودع استعلامات SQL معقدة لاستخراج مؤشرات النمو والاحتفاظ بالعملاء.',
      color: 'text-blue-400',
      bgGlow: 'from-blue-500/20 via-blue-500/5 to-transparent',
      borderAccent: 'border-blue-500',
      iconBg: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
      icon: <Database className="w-6 h-6" />
    },
    {
      step: 6,
      shortName: 'Power BI',
      shortNameAr: 'Power BI',
      titleEn: 'Power BI',
      titleAr: 'ذكاء الأعمال Power BI',
      categoryEn: 'Stage 06 • Business Intelligence',
      categoryAr: 'المرحلة 06 • تقارير ولوحات ذكاء الأعمال',
      descEn: 'Connect data sources via Power Query ETL, build Star Schema relational models, author custom DAX measures, and publish to Power BI Cloud.',
      descAr: 'ربط البيانات عبر Power Query، تصميم النماذج النجمية Star Schema، كتابة مقاييس DAX الحسابية، ونشر اللوحات على السحابة.',
      keySkills: ['Power Query (ETL)', 'Star Schema Modeling', 'DAX Measures & KPIs', 'Power BI Cloud Publishing'],
      keySkillsAr: ['تنقية وتحويل البيانات مع Power Query', 'النمذجة النجمية Star Schema', 'لغة معادلات ومقاييس DAX', 'النشر السحابي ومشاركة التقارير'],
      deliverableEn: 'Full-fledged cloud-published Power BI dashboard with cross-filtering, slicers, and automated refresh.',
      deliverableAr: 'لوحة قيادة تفاعلية متصلة بالسحابة مع فلاتر ذكية وتحديث تلقائي للبيانات.',
      color: 'text-yellow-400',
      bgGlow: 'from-yellow-500/20 via-yellow-500/5 to-transparent',
      borderAccent: 'border-yellow-500',
      iconBg: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
      icon: <BarChart4 className="w-6 h-6" />
    },
    {
      step: 7,
      shortName: 'Tableau',
      shortNameAr: 'Tableau',
      titleEn: 'Tableau',
      titleAr: 'سرد القصص مع Tableau',
      categoryEn: 'Stage 07 • Visual Storytelling',
      categoryAr: 'المرحلة 07 • التصوير وسرد القصص البصرية',
      descEn: 'Intuitive drag-and-drop visual exploration, dual-axis charts, interactive actions, and executive Story Points presentations.',
      descAr: 'استكشاف البيانات بالسحب والإفلات، الرسوم ثنائية المحاور، الفلاتر التفاعلية، وصياغة عروض Story Points للإدارة العليا.',
      keySkills: ['Drag & Drop Analytics', 'Dimensions & Measures', 'Interactive Dashboards', 'Tableau Story Points'],
      keySkillsAr: ['التحليل الاستكشافي بالسحب والإفلات', 'الأبعاد والمقاييس Dimensions/Measures', 'الربط التفاعلي Dashboard Actions', 'سرد القصص بالبيانات Story Points'],
      deliverableEn: 'Interactive Tableau Data Story highlighting customer churn drivers and mitigation strategies.',
      deliverableAr: 'قصة بصرية تفاعلية كاملة تشرح أسباب تسرب العملاء والحلول المقترحة.',
      color: 'text-rose-400',
      bgGlow: 'from-rose-500/20 via-rose-500/5 to-transparent',
      borderAccent: 'border-rose-500',
      iconBg: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
      icon: <PieChart className="w-6 h-6" />
    },
    {
      step: 8,
      shortName: 'Web Scraping',
      shortNameAr: 'سحب الويب',
      titleEn: 'Web Scraping',
      titleAr: 'استخراج بيانات الويب',
      categoryEn: 'Stage 08 • Live Data Ingestion',
      categoryAr: 'المرحلة 08 • سحب وتغذية البيانات الحية',
      descEn: 'Scrape external web datasets, extract competitor pricing tables, parse HTML DOM elements, and consume REST APIs.',
      descAr: 'استخراج بيانات السوق والأسعار والمنافسين تلقائياً من صفحات الويب عبر BeautifulSoup والتعامل مع واجهات REST APIs.',
      keySkills: ['HTML Structure & DOM', 'BeautifulSoup & Requests', 'REST APIs & JSON', 'Automated Pipelines'],
      keySkillsAr: ['فهم هيكل صفحات الويب والـ DOM', 'مكتبة BeautifulSoup و Requests', 'سحب بيانات الواجهات البرمجية APIs', 'بناء أنابيب تغذية البيانات الحية'],
      deliverableEn: 'End-to-end scraping pipeline harvesting e-commerce price changes into a clean dataset.',
      deliverableAr: 'نظام سحب تلقائي يرصد أسعار وتغيرات المنتجات من مواقع التجارة الإلكترونية.',
      color: 'text-purple-400',
      bgGlow: 'from-purple-500/20 via-purple-500/5 to-transparent',
      borderAccent: 'border-purple-500',
      iconBg: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
      icon: <Globe2 className="w-6 h-6" />
    }
  ];

  const current = milestones.find(m => m.step === activeStep) || milestones[0];
  const NextIcon = isRTL ? ChevronLeft : ChevronRight;
  const PrevIcon = isRTL ? ChevronRight : ChevronLeft;

  const handleNext = () => {
    setActiveStep(prev => (prev < 8 ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setActiveStep(prev => (prev > 1 ? prev - 1 : 8));
  };

  const progressPercentage = ((activeStep - 1) / 7) * 100;

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-2 sm:p-4 lg:p-5 text-white overflow-hidden select-none bg-transparent">
      {/* Ambient background glow effects */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* TOP HEADER & SUBWAY TRACK */}
      <div className="relative z-10 w-full mb-3">
        {/* Top Title Bar */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-bold font-mono flex items-center gap-1.5 shadow-sm">
              <Compass className="w-3.5 h-3.5" />
              <span>{isRTL ? 'خارطة طريق المحلل المحترف' : 'Professional Learning Roadmap'}</span>
            </div>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
              {isRTL ? '8 محطات تخصصية متصلة من الأساسيات إلى الاحتراف' : '8 Connected Milestones from Zero to Job-Ready'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 shadow-md">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Previous"
              >
                <PrevIcon className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold px-2 text-slate-300">
                0{current.step} / 08
              </span>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Next"
              >
                <NextIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Connected Track Line */}
        <div className="relative flex items-center justify-between gap-1 sm:gap-2 px-2 py-2 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md">
          {/* Background Rail */}
          <div className="absolute top-1/2 left-6 right-6 h-1 -translate-y-1/2 bg-slate-800/80 z-0 rounded-full" />
          
          {/* Active Glowing Rail (RTL aware direction) */}
          <motion.div 
            className="absolute top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 z-0 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all duration-300"
            style={{
              ...(isRTL 
                ? { right: '1.5rem', width: `calc(${progressPercentage}% - 1rem)` }
                : { left: '1.5rem', width: `calc(${progressPercentage}% - 1rem)` }
              )
            }}
          />

          {milestones.map((m) => {
            const isActive = m.step === activeStep;
            const isCompleted = m.step < activeStep;

            return (
              <button
                key={m.step}
                onClick={() => setActiveStep(m.step)}
                className="relative z-10 flex flex-col items-center group transition-all duration-200 focus:outline-none flex-1"
              >
                {/* Node Pill */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-mono font-black text-xs transition-all duration-200 shadow-md ${
                    isActive
                      ? `ring-2 ring-offset-2 ring-offset-slate-950 scale-110 ${m.iconBg} ${m.borderAccent} shadow-cyan-500/30`
                      : isCompleted
                      ? 'bg-slate-800/90 text-slate-200 border border-slate-700 hover:border-slate-500'
                      : 'bg-slate-900/90 text-slate-500 border border-slate-800 hover:border-slate-700 hover:text-slate-300'
                  }`}
                >
                  0{m.step}
                </div>

                {/* Clean Milestone Label */}
                <span className={`mt-1.5 text-[11px] font-bold tracking-tight text-center transition-colors truncate max-w-[85px] ${
                  isActive ? `${m.color} font-black` : 'text-slate-400 group-hover:text-slate-200'
                }`}>
                  {isRTL ? m.shortNameAr : m.shortName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CENTER: SPACIOUS & LUXURIOUS HERO SHOWCASE CARD */}
      <div className="relative z-10 flex-1 my-1 flex items-stretch">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.step}
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.99 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`w-full rounded-2xl border ${current.borderAccent}/30 bg-slate-900/70 backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden text-start`}
          >
            {/* Ambient Card Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${current.bgGlow} pointer-events-none`} />

            {/* Stage Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3.5">
                <div className={`p-3 rounded-xl border ${current.iconBg} shadow-md`}>
                  {current.icon}
                </div>
                <div>
                  <span className={`text-xs font-bold font-mono tracking-wide ${current.color}`}>
                    {isRTL ? current.categoryAr : current.categoryEn}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                    {isRTL ? (
                      <>
                        {current.titleAr}
                        <span className="text-slate-400 font-normal text-lg sm:text-xl font-mono mx-2">
                          ({current.titleEn})
                        </span>
                      </>
                    ) : (
                      current.titleEn
                    )}
                  </h3>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-mono font-bold text-slate-300">
                Milestone 0{current.step} / 08
              </div>
            </div>

            {/* Main Stage Body (2-Column Grid with generous spacing) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-3">
              {/* Left Column (7 cols): Objective & Practical Deliverable */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>{isRTL ? 'الهدف المعرفي والتطبيقي' : 'Objective & Core Focus'}</span>
                  </h4>
                  <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                    {isRTL ? current.descAr : current.descEn}
                  </p>
                </div>

                {/* Practical Deliverable Box */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3.5 shadow-md">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0 mt-0.5">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">
                      {isRTL ? 'المخرج العملي المباشر (Practical Deliverable):' : 'Hands-on Deliverable:'}
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                      {isRTL ? current.deliverableAr : current.deliverableEn}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Key Competencies */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Workflow className="w-4 h-4 text-cyan-400" />
                  <span>{isRTL ? 'المهارات والتقنيات الأساسية المكتسبة' : 'Key Competencies & Tools'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(isRTL ? current.keySkillsAr : current.keySkills).map((skill, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all shadow-sm"
                    >
                      <div className={`w-2 h-2 rounded-full ${current.color.replace('text-', 'bg-')} shadow-sm`} />
                      <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono text-xs text-slate-400">
                  {isRTL ? 'مسار متكامل تم تصميمه ليتوافق مع متطلبات سوق العمل العالمي' : 'Curriculum structured to meet international data industry standards'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <InstantLogo isDark={true} className="h-3.5" />
                <span className="text-xs font-mono text-slate-400">Education</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
