import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Filter, Compass, BrainCircuit, BarChart3, MessageSquare, ChevronDown, CheckCircle2 } from 'lucide-react';
import { ProcessStep } from '../../../types';

interface DataLifecycleVisualProps {
  steps?: ProcessStep[];
  isRTL: boolean;
}

export const DataLifecycleVisual: React.FC<DataLifecycleVisualProps> = ({ steps, isRTL }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const defaultSteps: ProcessStep[] = [
    {
      number: '1',
      title: isRTL ? 'Collect (جمع البيانات)' : 'Collect',
      description: isRTL ? 'تحديد مصادر البيانات واستخراجها من قواعد البيانات، الملفات، الـ APIs، والاستبيانات.' : 'Gather raw data from sources: files, databases, APIs, and forms.',
      keyOutputs: isRTL ? ['تحديد المصادر', 'سحب البيانات الخام', 'التحقق من التراخيص'] : ['Data Sources', 'Raw Ingestion', 'Access Permissions']
    },
    {
      number: '2',
      title: isRTL ? 'Clean (تنظيف البيانات)' : 'Clean',
      description: isRTL ? 'معالجة القيم المفقودة (Nulls)، حذف التكرارات، وتوحيد الصيغ وأنواع البيانات (تستهلك ~70% من وقت المحلل).' : 'Fix errors, remove duplicates, handle missing values, and standardize data formats.',
      keyOutputs: isRTL ? ['معالجة المفقود', 'حذف التكرار', 'توحيد التنسيقات'] : ['Handle Nulls', 'Remove Duplicates', 'Standardize Formats']
    },
    {
      number: '3',
      title: isRTL ? 'Explore (استكشاف البيانات - EDA)' : 'Explore',
      description: isRTL ? 'التحليل الاستكشافي الأولي للبيانات، حساب المتوسطات والانحرافات، وفحص العلاقات المبدئية.' : 'Exploratory data analysis (EDA) to understand distributions, outliers, and correlations.',
      keyOutputs: isRTL ? ['الإحصاء الوصفي', 'كشف القيم الشاذة', 'المصفوفات والارتباط'] : ['Descriptive Stats', 'Outlier Detection', 'Correlation Matrix']
    },
    {
      number: '4',
      title: isRTL ? 'Analyze (تحليل البيانات المتعمق)' : 'Analyze',
      description: isRTL ? 'تطبيق النماذج الإحصائية والمنطقية لاختبار الفرضيات والإجابة عن أسئلة العمل المحددة.' : 'Apply statistical methods, queries, and logic to uncover deep patterns and test business hypotheses.',
      keyOutputs: isRTL ? ['اختبار الفرضيات', 'نماذج التنبؤ', 'تحليل الأسباب الجذرية'] : ['Hypothesis Testing', 'Predictive Modeling', 'Root Cause Analysis']
    },
    {
      number: '5',
      title: isRTL ? 'Visualize (تصوير النتائج)' : 'Visualize',
      description: isRTL ? 'بناء الرسوم البيانية المناسبة ولوحات المؤشرات التفاعلية لتسهيل قراءة النتائج.' : 'Turn numbers into clear, readable charts, dashboards, and visual narratives.',
      keyOutputs: isRTL ? ['لوحات Power BI', 'مخططات بيانية', 'مؤشرات الأداء KPIs'] : ['Power BI Dashboards', 'Interactive Charts', 'KPI Scorecards']
    },
    {
      number: '6',
      title: isRTL ? 'Communicate (التواصل وعرض الرؤى)' : 'Communicate',
      description: isRTL ? 'تقديم النتائج والتوصيات الاستراتيجية لصناع القرار وأصحاب المصلحة بلغة أعمال واضحة.' : 'Present actionable insights and data-driven recommendations to key stakeholders.',
      keyOutputs: isRTL ? ['سرد القصص بالبيانات', 'توصيات العمل', 'اتخاذ القرارات'] : ['Data Storytelling', 'Actionable Recommendations', 'Decision Support']
    }
  ];

  const currentSteps = steps && steps.length > 0 ? steps : defaultSteps;

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Database className="w-5 h-5" />;
      case 1:
        return <Filter className="w-5 h-5" />;
      case 2:
        return <Compass className="w-5 h-5" />;
      case 3:
        return <BrainCircuit className="w-5 h-5" />;
      case 4:
        return <BarChart3 className="w-5 h-5" />;
      case 5:
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <Database className="w-5 h-5" />;
    }
  };

  const getStepColor = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-blue-600 text-white';
      case 1:
        return 'bg-sky-600 text-white';
      case 2:
        return 'bg-indigo-600 text-white';
      case 3:
        return 'bg-violet-600 text-white';
      case 4:
        return 'bg-amber-500 text-white';
      case 5:
        return 'bg-orange-500 text-white';
      default:
        return 'bg-blue-600 text-white';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full h-full items-center py-2 max-w-6xl mx-auto">
      {/* Left / Steps Flow (6 Steps with Arrow Down in between) */}
      <div className="lg:col-span-6 flex flex-col gap-2">
        {currentSteps.map((s, idx) => {
          const isSelected = activeStep === idx;
          return (
            <React.Fragment key={idx}>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-start transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-blue-50/80 border-blue-400 ring-2 ring-blue-500/20 shadow-sm' 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${getStepColor(idx)} flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-sm`}>
                    {idx + 1}
                  </div>
                  <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                    {s.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-400">
                    {isRTL ? `المرحلة 0${idx + 1}` : `Stage 0${idx + 1}`}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-blue-600' : 'bg-slate-300'}`} />
                </div>
              </motion.button>

              {/* Connecting Small Chevron if not last */}
              {idx < currentSteps.length - 1 && (
                <div className="flex justify-center -my-1 text-slate-300 pointer-events-none">
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Right / Interactive Deep Dive Panel */}
      <div className="lg:col-span-6 h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-blue-200 shadow-md flex flex-col justify-between h-[360px]"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${getStepColor(activeStep)} flex items-center justify-center shadow-md`}>
                    {getStepIcon(activeStep)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {isRTL ? `تفاصيل المرحلة 0${activeStep + 1}` : `Stage 0${activeStep + 1} Deep Dive`}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      {currentSteps[activeStep].title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                {currentSteps[activeStep].description}
              </p>

              {/* Key Deliverables / Outputs */}
              {currentSteps[activeStep].keyOutputs && (
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    {isRTL ? 'المخرجات والأدوات الأساسية:' : 'Key Outputs & Deliverables:'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentSteps[activeStep].keyOutputs?.map((out, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>{out}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Navigation Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>{isRTL ? 'اضغط على أي مرحلة من اليسار لعرض تفاصيلها' : 'Click any stage on the left to inspect'}</span>
              <span className="font-bold text-slate-500">{activeStep + 1} / 6</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
