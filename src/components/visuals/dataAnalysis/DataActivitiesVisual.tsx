import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Database, Filter, BrainCircuit, BarChart3, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

interface ActivityItem {
  number?: string;
  title: string;
  description: string;
  iconName?: string;
  bullets?: string[];
}

interface DataActivitiesVisualProps {
  definitionText: string;
  definitionLabel?: string;
  activities: ActivityItem[];
  isRTL: boolean;
}

export const DataActivitiesVisual: React.FC<DataActivitiesVisualProps> = ({
  definitionText,
  definitionLabel,
  activities,
  isRTL
}) => {
  const getIcon = (name?: string) => {
    switch (name) {
      case 'Collect':
      case 'Database':
        return <Database className="w-5 h-5 text-blue-600" />;
      case 'Clean':
      case 'Filter':
        return <Filter className="w-5 h-5 text-blue-600" />;
      case 'Analyze':
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-blue-600" />;
      case 'Visualize':
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'Insights':
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-600" />;
      default:
        return <Database className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-5 w-full h-full justify-between py-1">
      {/* Top Definition Callout Box */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm shadow-slate-100"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20 text-white">
          <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
        </div>
        <div className="flex-1">
          {definitionLabel && (
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-0.5">
              {definitionLabel}
            </div>
          )}
          <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
            {definitionText}
          </p>
        </div>
      </motion.div>

      {/* Section Subtitle Tag */}
      <div className="flex items-center gap-2">
        <span className="text-xs sm:text-sm font-black tracking-widest text-blue-700 uppercase">
          {isRTL ? 'الأنشطة الخمسة الأساسية' : 'KEY ACTIVITIES'}
        </span>
        <div className="h-px bg-slate-200 flex-1" />
      </div>

      {/* 5 Key Activities Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 flex-1">
        {activities.map((act, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div>
              {/* Icon Circle */}
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors [&>svg]:group-hover:text-white">
                {getIcon(act.iconName || act.title)}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {act.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
                {act.description}
              </p>
            </div>

            {/* Step Pill */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
              <span>{isRTL ? `المرحلة 0${idx + 1}` : `Stage 0${idx + 1}`}</span>
              <span className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-600 group-hover:scale-125 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
