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
  Sliders, 
  Presentation 
} from 'lucide-react';
import { FeatureCard, CategoryColumn } from '../../../types';

interface TwoCardsVisualProps {
  cards?: FeatureCard[];
  categoryColumns?: CategoryColumn[];
  isRTL: boolean;
  isDark?: boolean;
}

export const TwoCardsVisual: React.FC<TwoCardsVisualProps> = ({
  cards,
  categoryColumns,
  isRTL,
  isDark = false
}) => {
  const getIcon = (name?: string, idx?: number) => {
    const n = (name || '').toLowerCase();
    const colorBlue = isDark ? 'text-blue-400' : 'text-blue-600';
    const colorAmber = isDark ? 'text-amber-400' : 'text-amber-600';
    const colorPurple = isDark ? 'text-purple-400' : 'text-purple-600';
    const colorRose = isDark ? 'text-rose-400' : 'text-rose-600';

    if (n.includes('condition') || n.includes('code')) return <Code2 className={`w-5 h-5 ${colorBlue}`} />;
    if (n.includes('loop') || n.includes('repeat')) return <RotateCcw className={`w-5 h-5 ${colorAmber}`} />;
    if (n.includes('matplotlib')) return <BarChart3 className={`w-5 h-5 ${colorBlue}`} />;
    if (n.includes('seaborn')) return <PieChart className={`w-5 h-5 ${colorPurple}`} />;
    if (n.includes('power bi')) return <BarChart3 className={`w-5 h-5 ${colorAmber}`} />;
    if (n.includes('tableau')) return <PieChart className={`w-5 h-5 ${colorRose}`} />;
    if (n.includes('connect') || n.includes('source')) return <Link2 className={`w-5 h-5 ${colorBlue}`} />;
    if (n.includes('chart')) return <BarChart3 className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />;
    if (n.includes('dashboard') || n.includes('interactive')) return <Sliders className={`w-5 h-5 ${colorBlue}`} />;
    if (n.includes('story') || n.includes('narrative')) return <Presentation className={`w-5 h-5 ${colorRose}`} />;
    return idx === 0 ? <Code2 className={`w-5 h-5 ${colorBlue}`} /> : <Layers className={`w-5 h-5 ${colorAmber}`} />;
  };

  const cardBgStyle = isDark
    ? 'bg-slate-900/90 border-slate-800/90 text-white shadow-xl hover:border-slate-700'
    : 'bg-white border-slate-200/90 text-slate-900 shadow-md hover:shadow-xl hover:border-blue-300';

  // 1. If categoryColumns is provided
  if (categoryColumns && categoryColumns.length >= 2) {
    const col1 = categoryColumns[0];
    const col2 = categoryColumns[1];

    const renderItem = (item: any, i: number, isCol1: boolean) => {
      if (typeof item === 'string') {
        return (
          <div key={i} className={`flex items-start gap-2.5 text-xs sm:text-[13px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${isCol1 ? 'bg-blue-500' : 'bg-amber-500'}`} />
            <span className="leading-relaxed">{item}</span>
          </div>
        );
      }
      if (item && typeof item === 'object') {
        return (
          <div key={i} className={`flex items-start gap-2.5 text-xs sm:text-[13px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${isCol1 ? 'bg-blue-500' : 'bg-amber-500'}`} />
            <div className="leading-relaxed">
              {item.name && <span className={`font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.name}</span>}
              {item.description && <span className={`text-xs block mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.description}</span>}
            </div>
          </div>
        );
      }
      return null;
    };

    const col1Title = col1.title || col1.categoryTitle || 'Pillar 01';
    const col1Subtitle = col1.description || col1.categoryType;
    const col2Title = col2.title || col2.categoryTitle || 'Pillar 02';
    const col2Subtitle = col2.description || col2.categoryType;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch py-1 max-w-5xl mx-auto select-none">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
          whileHover={{ y: -3 }}
          className={`flex flex-col justify-between p-5 sm:p-6 rounded-2xl border backdrop-blur-xl transition-all text-start ${cardBgStyle}`}
        >
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-sm border ${
                  isDark ? 'bg-blue-500/10 border-blue-500/30' : 'bg-blue-50 border-blue-200'
                }`}>
                  {getIcon(col1.iconName || col1Title, 0)}
                </div>
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {isRTL ? 'المحور الأول' : 'Pillar 01'}
                  </span>
                  <h3 className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {col1Title}
                  </h3>
                </div>
              </div>
            </div>

            {col1Subtitle && (
              <p className={`text-xs sm:text-[13px] mb-3 leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {col1Subtitle}
              </p>
            )}

            {col1.items && (
              <div className={`space-y-2 pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                {col1.items.map((item, i) => renderItem(item, i, true))}
              </div>
            )}
          </div>

          <div className={`mt-3 pt-3 border-t flex items-center justify-between text-[11px] font-semibold ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
            <span>{isRTL ? 'تطبيق أساسي' : 'Core Concept'}</span>
            <span className={`font-bold font-mono ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>01</span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16, ease: 'easeOut' }}
          whileHover={{ y: -3 }}
          className={`flex flex-col justify-between p-5 sm:p-6 rounded-2xl border backdrop-blur-xl transition-all text-start ${cardBgStyle}`}
        >
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-sm border ${
                  isDark ? 'bg-amber-500/10 border-amber-500/30' : 'bg-amber-50 border-amber-200'
                }`}>
                  {getIcon(col2.iconName || col2Title, 1)}
                </div>
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                    {isRTL ? 'المحور الثاني' : 'Pillar 02'}
                  </span>
                  <h3 className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {col2Title}
                  </h3>
                </div>
              </div>
            </div>

            {col2Subtitle && (
              <p className={`text-xs sm:text-[13px] mb-3 leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {col2Subtitle}
              </p>
            )}

            {col2.items && (
              <div className={`space-y-2 pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                {col2.items.map((item, i) => renderItem(item, i, false))}
              </div>
            )}
          </div>

          <div className={`mt-3 pt-3 border-t flex items-center justify-between text-[11px] font-semibold ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
            <span>{isRTL ? 'تطبيق أساسي' : 'Core Concept'}</span>
            <span className={`font-bold font-mono ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>02</span>
          </div>
        </motion.div>
      </div>
    );
  }

  // 2. If cards is provided
  const items = cards || [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full h-full items-stretch py-1 max-w-5xl mx-auto select-none">
      {items.slice(0, 2).map((c, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 * (idx + 1), ease: 'easeOut' }}
          whileHover={{ y: -3 }}
          className={`flex flex-col justify-between p-5 sm:p-6 rounded-2xl border backdrop-blur-xl transition-all text-start ${cardBgStyle}`}
        >
          <div>
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-sm border ${
                  idx === 0 
                    ? (isDark ? 'bg-blue-500/10 border-blue-500/30' : 'bg-blue-50 border-blue-200')
                    : (isDark ? 'bg-purple-500/10 border-purple-500/30' : 'bg-purple-50 border-purple-200')
                }`}>
                  {getIcon(c.title, idx)}
                </div>
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    idx === 0 
                      ? (isDark ? 'text-blue-400' : 'text-blue-600') 
                      : (isDark ? 'text-purple-400' : 'text-purple-600')
                  }`}>
                    {isRTL ? `المكون 0${idx + 1}` : `Component 0${idx + 1}`}
                  </span>
                  <h3 className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {c.title}
                  </h3>
                </div>
              </div>
            </div>

            <p className={`text-xs sm:text-[13px] mb-3 leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {c.description}
            </p>

            {c.bullets && (
              <div className={`space-y-2 pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                {c.bullets.map((b, i) => (
                  <div key={i} className={`flex items-start gap-2.5 text-xs sm:text-[13px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                      idx === 0 ? 'bg-blue-500' : 'bg-purple-500'
                    }`} />
                    <span className="leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={`mt-3 pt-3 border-t flex items-center justify-between text-[11px] font-semibold ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'}`}>
            <span>{isRTL ? 'التحليل البصري' : 'Visual Analytics'}</span>
            <span className={`font-bold font-mono ${
              idx === 0 
                ? (isDark ? 'text-blue-400' : 'text-blue-600') 
                : (isDark ? 'text-purple-400' : 'text-purple-600')
            }`}>0{idx + 1}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

