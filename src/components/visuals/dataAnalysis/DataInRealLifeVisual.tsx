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
    <div className={`grid ${gridColsClass} gap-4 sm:gap-6 w-full h-full items-center py-4 select-none`}>
      {cards.map((card, idx) => {
        const meta = getDomainMeta(idx, card);
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * idx, duration: 0.35 }}
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between min-h-[300px] sm:min-h-[330px] p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl hover:border-slate-700 backdrop-blur-xl transition-all group text-start"
          >
            <div>
              {/* Icon & Badge Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl ${meta.bg} border flex items-center justify-center shadow-md`}>
                  {meta.icon}
                </div>
                {card.badge && (
                  <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                    {card.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-4">
                {card.description}
              </p>
            </div>

            {/* Bottom Example / Highlight Capsule */}
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] sm:text-xs text-slate-400 font-semibold flex items-center gap-1.5 mt-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
              <span className="truncate">{meta.sample}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

