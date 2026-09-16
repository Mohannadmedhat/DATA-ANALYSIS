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
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'Clean':
      case 'Filter':
        return <Filter className="w-5 h-5 text-blue-400" />;
      case 'Analyze':
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-blue-400" />;
      case 'Visualize':
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-blue-400" />;
      case 'Insights':
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-400" />;
      default:
        return <Database className="w-5 h-5 text-blue-400" />;
    }
  };

  const gridColsClass = activities.length <= 2 
    ? 'grid-cols-1 md:grid-cols-2' 
    : activities.length <= 4 
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4' 
      : 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-5';

  return (
    <div className="flex flex-col gap-4 sm:gap-5 w-full h-full justify-between py-1 select-none text-slate-100">
      {/* Top Definition Callout Box (Only rendered if definitionText exists and is not empty) */}
      {definitionText && definitionText.trim() !== '' && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-xl"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400 shadow-md shadow-amber-500/10">
            <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400" />
          </div>
          <div className="flex-1 text-start">
            {definitionLabel && (
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-0.5">
                {definitionLabel}
              </div>
            )}
            <p className="text-sm sm:text-base font-semibold text-slate-200 leading-relaxed">
              {definitionText}
            </p>
          </div>
        </motion.div>
      )}

      {/* Section Subtitle Tag */}
      <div className="flex items-center gap-2">
        <span className="text-xs sm:text-sm font-black tracking-widest text-blue-400 uppercase">
          {isRTL ? 'المحاور والأنشطة الأساسية' : 'KEY ACTIVITIES'}
        </span>
        <div className="h-px bg-slate-800 flex-1" />
      </div>

      {/* Cards Grid */}
      <div className={`grid ${gridColsClass} gap-3 sm:gap-5 flex-1 items-stretch`}>
        {activities.map((act, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-xl hover:border-slate-700 transition-all group text-start"
          >
            <div>
              {/* Header Icon & Tag */}
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all [&>svg]:group-hover:text-white shadow-sm">
                  {getIcon(act.iconName || act.title)}
                </div>
                {act.number && (
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700">
                    {act.number}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                {act.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed">
                {act.description}
              </p>
            </div>

            {/* Step Pill / Footer */}
            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-400">
              <span>{act.number ? `Part ${act.number}` : (isRTL ? `المرحلة 0${idx + 1}` : `Stage 0${idx + 1}`)}</span>
              <span className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-400 group-hover:scale-125 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
