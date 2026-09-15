import React from 'react';
import { motion } from 'motion/react';
import { 
  Filter, 
  Table, 
  BarChart3, 
  LayoutDashboard, 
  Code2, 
  Database, 
  PieChart, 
  Lightbulb, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

interface WorkflowStep {
  title: string;
  sub?: string;
  iconName?: string;
  isOrange?: boolean;
}

interface WorkflowFlowVisualProps {
  steps: WorkflowStep[];
  bestPracticesTitle?: string;
  bestPractices?: string[];
  isRTL: boolean;
}

export const WorkflowFlowVisual: React.FC<WorkflowFlowVisualProps> = ({
  steps,
  bestPracticesTitle,
  bestPractices,
  isRTL
}) => {
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const getIcon = (name?: string) => {
    switch (name) {
      case 'Clean':
      case 'Filter': return <Filter className="w-5 h-5" />;
      case 'Table':
      case 'Pivot': return <Table className="w-5 h-5" />;
      case 'Charts':
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Dashboard':
      case 'LayoutDashboard': return <LayoutDashboard className="w-5 h-5" />;
      case 'Excel': return <Table className="w-5 h-5" />;
      case 'Python': return <Code2 className="w-5 h-5" />;
      case 'SQL': return <Database className="w-5 h-5" />;
      case 'PowerBI': return <BarChart3 className="w-5 h-5" />;
      case 'Tableau': return <PieChart className="w-5 h-5" />;
      case 'Insights': return <Lightbulb className="w-5 h-5" />;
      default: return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full h-full justify-center py-2 max-w-5xl mx-auto">
      {/* Steps Flow Chain */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx, duration: 0.3 }}
              whileHover={{ y: -4 }}
              className={`flex flex-col justify-between p-4 rounded-2xl border transition-all ${
                step.isOrange
                  ? 'bg-gradient-to-br from-amber-500 to-orange-500 border-orange-400 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white border-slate-200 hover:border-blue-300 text-slate-900 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  step.isOrange ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600 border border-blue-100'
                }`}>
                  {getIcon(step.iconName || step.title)}
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  step.isOrange ? 'bg-black/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h4 className={`text-xs sm:text-sm font-bold ${step.isOrange ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </h4>
                {step.sub && (
                  <p className={`text-[11px] mt-1 font-medium ${step.isOrange ? 'text-orange-100' : 'text-slate-500'}`}>
                    {step.sub}
                  </p>
                )}
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>

      {/* Best Practices Box if provided */}
      {bestPractices && bestPractices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-start"
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm sm:text-base font-black text-slate-900">
              {bestPracticesTitle || (isRTL ? 'أفضل الممارسات العملية (Best Practices)' : 'Best Practices')}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
            {bestPractices.map((bp, i) => (
              <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span>{bp}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};
