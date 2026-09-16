import React from 'react';
import { motion } from 'framer-motion';
import { Building2, HeartPulse, Cpu, Share2, Shield, Terminal, Server, Lock } from 'lucide-react';
import { FeatureCard } from '../../../types';

interface DataInRealLifeVisualProps {
  cards: FeatureCard[];
  isRTL: boolean;
  isDark?: boolean;
}

export const DataInRealLifeVisual: React.FC<DataInRealLifeVisualProps> = ({ cards, isRTL, isDark = false }) => {
  const getDomainMeta = (idx: number, card: FeatureCard) => {
    const icons = [
      <Building2 key={0} className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />,
      <HeartPulse key={1} className={`w-5 h-5 ${isDark ? 'text-rose-400' : 'text-rose-600'}`} />,
      <Cpu key={2} className={`w-5 h-5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />,
      <Share2 key={3} className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />,
    ];
    const bgs = isDark ? [
      'bg-blue-500/10 border-blue-500/30 text-blue-400',
      'bg-rose-500/10 border-rose-500/30 text-rose-400',
      'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
      'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    ] : [
      'bg-blue-50 border-blue-200 text-blue-700',
      'bg-rose-50 border-rose-200 text-rose-700',
      'bg-indigo-50 border-indigo-200 text-indigo-700',
      'bg-cyan-50 border-cyan-200 text-cyan-700',
    ];

    const icon = icons[idx % icons.length];
    const bg = bgs[idx % bgs.length];
    const sample = (card as any).sample || (card as any).highlight || card.badge || (isRTL ? 'معايير التشغيل' : 'System Standard');

    return { icon, bg, sample };
  };

  const gridColsClass = cards.length === 2 
    ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' 
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <div className={`grid ${gridColsClass} gap-4 sm:gap-6 w-full h-full items-stretch py-2 select-none`}>
      {cards.map((card, idx) => {
        const meta = getDomainMeta(idx, card);
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * idx, duration: 0.35 }}
            whileHover={{ y: -6 }}
            className={`flex flex-col justify-between h-[360px] p-5 sm:p-6 rounded-2xl border backdrop-blur-xl transition-all group text-start ${
              isDark 
                ? 'bg-slate-900/90 border-slate-800/90 shadow-xl hover:border-slate-700 text-white' 
                : 'bg-white border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-300 text-slate-900'
            }`}
          >
            {/* Top Content Area */}
            <div className="flex flex-col flex-1">
              {/* Icon & Badge Header */}
              <div className="flex items-center justify-between mb-3.5 h-12 shrink-0">
                <div className={`w-11 h-11 rounded-2xl ${meta.bg} border flex items-center justify-center shadow-md`}>
                  {meta.icon}
                </div>
                {card.badge && (
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold border shadow-sm ${
                    isDark 
                      ? 'bg-slate-800/90 text-slate-300 border-slate-700/80' 
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Title Container */}
              <div className="h-[52px] sm:h-[56px] flex items-center mb-2.5 shrink-0">
                <h3 className={`text-sm sm:text-base font-bold transition-colors leading-snug line-clamp-2 ${
                  isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'
                }`}>
                  {card.title}
                </h3>
              </div>

              {/* Description Body */}
              <p className={`text-xs sm:text-[13px] font-medium leading-relaxed mb-4 flex-1 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {card.description}
              </p>
            </div>

            {/* Bottom Capsule */}
            <div className={`p-2.5 rounded-xl border text-[10px] sm:text-[11px] font-semibold flex items-center gap-2 mt-auto shrink-0 shadow-inner ${
              isDark 
                ? 'bg-slate-950/90 border-slate-800 text-slate-300' 
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isDark ? 'bg-cyan-400' : 'bg-blue-500'}`} />
              <span className="leading-tight font-medium">{meta.sample}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

