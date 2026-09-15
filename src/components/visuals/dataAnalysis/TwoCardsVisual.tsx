import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  RotateCcw, 
  PieChart, 
  BarChart3, 
  LineChart, 
  Layers, 
  Database, 
  Link2, 
  Sparkles,
  CheckCircle2,
  Table,
  Calculator,
  Terminal,
  Activity,
  Presentation,
  Sliders
} from 'lucide-react';
import { FeatureCard, CategoryColumn } from '../../../types';

interface TwoCardsVisualProps {
  cards?: FeatureCard[];
  categoryColumns?: CategoryColumn[];
  isRTL: boolean;
}

export const TwoCardsVisual: React.FC<TwoCardsVisualProps> = ({
  cards,
  categoryColumns,
  isRTL
}) => {
  const getIcon = (name?: string, idx?: number) => {
    switch (name?.toLowerCase()) {
      case 'conditions':
      case 'code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'loops':
      case 'rotateccw':
        return <RotateCcw className="w-5 h-5 text-amber-600" />;
      case 'matplotlib':
      case 'barchart3':
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      case 'seaborn':
      case 'linechart':
      case 'piechart':
        return <PieChart className="w-5 h-5 text-purple-600" />;
      case 'power bi':
      case 'barchart4':
        return <BarChart3 className="w-5 h-5 text-amber-600" />;
      case 'tableau':
        return <PieChart className="w-5 h-5 text-rose-600" />;
      case 'connecting data sources':
      case 'link2':
        return <Link2 className="w-5 h-5 text-blue-600" />;
      case 'creating charts':
        return <BarChart3 className="w-5 h-5 text-emerald-600" />;
      case 'interactive dashboards':
        return <Sliders className="w-5 h-5 text-blue-600" />;
      case 'storytelling with data':
        return <Presentation className="w-5 h-5 text-rose-600" />;
      default:
        return idx === 0 ? <Code2 className="w-5 h-5 text-blue-600" /> : <Layers className="w-5 h-5 text-amber-600" />;
    }
  };

  // 1. If categoryColumns is provided (e.g. Conditions & Loops, Power BI vs Tableau)
  if (categoryColumns && categoryColumns.length >= 2) {
    const col1 = categoryColumns[0];
    const col2 = categoryColumns[1];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full h-full items-center py-2 max-w-5xl mx-auto select-none">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          whileHover={{ y: -3 }}
          className="flex flex-col justify-between h-[360px] p-6 sm:p-7 rounded-2xl bg-white border border-blue-200/90 shadow-sm hover:shadow-md transition-all text-start"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center font-black shadow-sm">
                  {getIcon(col1.iconName || col1.title, 0)}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase">
                    {isRTL ? 'القسم الأول' : 'Pillar 01'}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {col1.title}
                  </h3>
                </div>
              </div>
            </div>

            {col1.description && (
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                {col1.description}
              </p>
            )}

            {col1.items && (
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                {col1.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>{isRTL ? 'تطبيق أساسي' : 'Essential Concept'}</span>
            <span className="text-blue-600 font-bold">01</span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
          whileHover={{ y: -3 }}
          className="flex flex-col justify-between h-[360px] p-6 sm:p-7 rounded-2xl bg-white border border-amber-200/90 shadow-sm hover:shadow-md transition-all text-start"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center font-black shadow-sm">
                  {getIcon(col2.iconName || col2.title, 1)}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase">
                    {isRTL ? 'القسم الثاني' : 'Pillar 02'}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {col2.title}
                  </h3>
                </div>
              </div>
            </div>

            {col2.description && (
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                {col2.description}
              </p>
            )}

            {col2.items && (
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                {col2.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>{isRTL ? 'تطبيق أساسي' : 'Essential Concept'}</span>
            <span className="text-amber-600 font-bold">02</span>
          </div>
        </motion.div>
      </div>
    );
  }

  // 2. If cards is provided (e.g. Matplotlib & Seaborn, Connecting Data & Charts, Storytelling)
  const items = cards || [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full h-full items-center py-2 max-w-5xl mx-auto select-none">
      {items.slice(0, 2).map((c, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 * (idx + 1), ease: 'easeOut' }}
          whileHover={{ y: -3 }}
          className={`flex flex-col justify-between h-[360px] p-6 sm:p-7 rounded-2xl bg-white border shadow-sm hover:shadow-md transition-all text-start ${
            idx === 0 ? 'border-blue-200/90' : 'border-purple-200/90'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black shadow-sm ${
                  idx === 0 ? 'bg-blue-50 border border-blue-100' : 'bg-purple-50 border border-purple-100'
                }`}>
                  {getIcon(c.title, idx)}
                </div>
                <div>
                  <span className={`text-[10px] font-bold uppercase ${
                    idx === 0 ? 'text-blue-600' : 'text-purple-600'
                  }`}>
                    {isRTL ? `المكون 0${idx + 1}` : `Component 0${idx + 1}`}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {c.title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
              {c.description}
            </p>

            {c.bullets && (
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                {c.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                      idx === 0 ? 'bg-blue-600' : 'bg-purple-600'
                    }`} />
                    <span className="leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>{isRTL ? 'التحليل البصري' : 'Visual Analytics'}</span>
            <span className={`font-bold ${idx === 0 ? 'text-blue-600' : 'text-purple-600'}`}>0{idx + 1}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
