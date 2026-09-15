import React from 'react';
import { motion } from 'motion/react';
import { Database, LayoutGrid, Lightbulb, ArrowDown, ArrowUpRight } from 'lucide-react';
import { DataStageItem } from '../../../types';

interface DataVsInfoVsInsightVisualProps {
  stages?: DataStageItem[];
  isRTL: boolean;
}

export const DataVsInfoVsInsightVisual: React.FC<DataVsInfoVsInsightVisualProps> = ({ stages, isRTL }) => {
  const defaultStages: DataStageItem[] = [
    {
      stage: isRTL ? 'البيانات (Data)' : 'Data',
      description: isRTL ? 'حقائق وأرقام أولية مجردة لا تحمل أي سياق أو معنى مفهوم بمفردها.' : 'Unprocessed facts with no context on their own.',
      example: isRTL ? 'أرقام مبيعات خام: 1200, 3400, 5600' : 'Raw sales numbers: 1200, 3400, 5600',
      iconName: 'Database',
      accentColor: 'blue'
    },
    {
      stage: isRTL ? 'المعلومات (Information)' : 'Information',
      description: isRTL ? 'بيانات تم تجميعها وتنظيمها وتنسيقها في جداول وتقارير سهلة القراءة.' : 'Data organized into a structured, readable form.',
      example: isRTL ? 'تقرير المبيعات الشهري: إجمالي مبيعات فرع القاهرة 150,000 ج.م' : 'Monthly sales report: Branch revenue $150,000',
      iconName: 'LayoutGrid',
      accentColor: 'indigo'
    },
    {
      stage: isRTL ? 'الرؤية والتحليل (Insight)' : 'Insight',
      description: isRTL ? 'فهم "السبب" الكامن وراء الأرقام — معنى قابل للتنفيذ يدعم اتخاذ القرار.' : 'The "why" behind the numbers — actionable meaning.',
      example: isRTL ? 'ارتفعت المبيعات بنسبة 25% بسبب الحملة التسويقية عبر وسائل التواصل' : 'Sales increased 25% due to social media marketing campaign',
      iconName: 'Lightbulb',
      accentColor: 'amber'
    }
  ];

  const items = stages && stages.length > 0 ? stages : defaultStages;

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Database className="w-6 h-6 text-blue-600" />;
      case 1:
        return <LayoutGrid className="w-6 h-6 text-indigo-600" />;
      case 2:
        return <Lightbulb className="w-6 h-6 text-amber-500 fill-amber-500" />;
      default:
        return <Database className="w-6 h-6 text-blue-600" />;
    }
  };

  const getStageStyle = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          iconBg: 'bg-blue-50 border-blue-100',
          border: 'border-slate-200 hover:border-blue-300',
          badge: isRTL ? 'المستوى 1 • المادة الخام' : 'Level 1 • Raw Facts',
          badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
          exampleBg: 'bg-slate-50 text-slate-700 border-slate-200'
        };
      case 1:
        return {
          iconBg: 'bg-indigo-50 border-indigo-100',
          border: 'border-slate-200 hover:border-indigo-300',
          badge: isRTL ? 'المستوى 2 • الهيكلة والسياق' : 'Level 2 • Structured Context',
          badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          exampleBg: 'bg-slate-50 text-slate-700 border-slate-200'
        };
      case 2:
        return {
          iconBg: 'bg-amber-50 border-amber-200',
          border: 'border-amber-300 hover:border-amber-400 ring-1 ring-amber-400/20 shadow-amber-100/50',
          badge: isRTL ? 'المستوى 3 • القيمة واتخاذ القرار' : 'Level 3 • Actionable Value',
          badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
          exampleBg: 'bg-amber-50/80 text-amber-900 border-amber-200 font-bold'
        };
      default:
        return {
          iconBg: 'bg-blue-50 border-blue-100',
          border: 'border-slate-200',
          badge: '',
          badgeColor: '',
          exampleBg: 'bg-slate-50'
        };
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-2 max-w-5xl mx-auto">
      {items.map((item, idx) => {
        const style = getStageStyle(idx);
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * idx, duration: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border ${style.border} shadow-sm transition-all`}
          >
            {/* Left/Start side: Icon + Title + Description */}
            <div className="flex items-start gap-4 flex-1">
              <div className={`w-12 h-12 rounded-2xl ${style.iconBg} border flex items-center justify-center shrink-0 mt-0.5 shadow-sm`}>
                {getStageIcon(idx)}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    {item.stage}
                  </h3>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${style.badgeColor}`}>
                    {style.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Right/End side: Concrete Example Callout */}
            <div className={`w-full md:w-72 lg:w-80 p-3 sm:p-3.5 rounded-xl border text-xs sm:text-[13px] leading-relaxed flex items-center gap-2 ${style.exampleBg}`}>
              <div className="shrink-0 font-bold text-slate-400 text-[11px] uppercase tracking-wider">
                {isRTL ? 'مثال:' : 'Ex:'}
              </div>
              <div className="italic">
                "{item.example}"
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
