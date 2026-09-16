import React from 'react';
import { motion } from 'framer-motion';
import { Building2, HeartPulse, Cpu, Share2, Shield, Terminal, Server, Lock } from 'lucide-react';
import { FeatureCard } from '../../../types';

interface DataInRealLifeVisualProps {
  cards: FeatureCard[];
  isRTL: boolean;
}

export const DataInRealLifeVisual: React.FC<DataInRealLifeVisualProps> = ({ cards, isRTL }) => {
  const getDomainMeta = (idx: number, card: FeatureCard) => {
    const icons = [
      <Lock key={0} className="w-5 h-5 text-red-400" />,
      <Shield key={1} className="w-5 h-5 text-cyan-400" />,
      <Terminal key={2} className="w-5 h-5 text-emerald-400" />,
      <Server key={3} className="w-5 h-5 text-indigo-400" />,
    ];
    const bgs = [
      'bg-red-500/10 border-red-500/30 text-red-400',
      'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
      'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
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
            className="flex flex-col justify-between h-[360px] p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl hover:border-slate-700 backdrop-blur-xl transition-all group text-start"
          >
            {/* Top Content Area */}
            <div className="flex flex-col flex-1">
              {/* Icon & Badge Header - Fixed 48px height */}
              <div className="flex items-center justify-between mb-3.5 h-12 shrink-0">
                <div className={`w-11 h-11 rounded-2xl ${meta.bg} border flex items-center justify-center shadow-md`}>
                  {meta.icon}
                </div>
                {card.badge && (
                  <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold bg-slate-800/90 text-slate-300 border border-slate-700/80 shadow-sm">
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Title Container - Fixed 56px height for identical vertical alignment across all cards */}
              <div className="h-[52px] sm:h-[56px] flex items-center mb-2.5 shrink-0">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2">
                  {card.title}
                </h3>
              </div>

              {/* Description Body */}
              <p className="text-xs sm:text-[13px] text-slate-300 font-medium leading-relaxed mb-4 flex-1">
                {card.description}
              </p>
            </div>

            {/* Bottom Capsule - Fixed at bottom of every card */}
            <div className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-[10px] sm:text-[11px] text-slate-300 font-semibold flex items-center gap-2 mt-auto shrink-0 shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
              <span className="leading-tight text-slate-300 font-medium">{meta.sample}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

