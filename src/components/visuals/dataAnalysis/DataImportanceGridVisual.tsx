import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Search, TrendingUp, Sparkles, Database } from 'lucide-react';
import { FeatureCard } from '../../../types';

interface DataImportanceGridVisualProps {
  cards: FeatureCard[];
  isRTL: boolean;
}

export const DataImportanceGridVisual: React.FC<DataImportanceGridVisualProps> = ({ cards, isRTL }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Users className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 4:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <Database className="w-5 h-5 text-amber-400" />;
    }
  };

  const getAccentBg = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-blue-500/10 border-blue-500/30 text-blue-400';
      case 1:
        return 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400';
      case 2:
        return 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400';
      case 3:
        return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
      case 4:
        return 'bg-purple-500/10 border-purple-500/30 text-purple-400';
      default:
        return 'bg-amber-500/10 border-amber-500/30 text-amber-400';
    }
  };

  const isSixCards = cards.length >= 6;
  const topRow = cards.slice(0, 3);
  const bottomRow = isSixCards ? cards.slice(3, 6) : cards.slice(3, 5);

  return (
    <div className="flex flex-col gap-3 sm:gap-4 w-full h-full justify-center py-1 select-none">
      {/* Top Row - 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {topRow.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * idx, duration: 0.35 }}
            whileHover={{ y: -3 }}
            className="flex flex-col justify-start p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl hover:border-slate-700 backdrop-blur-xl transition-all group text-start"
          >
            <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-3 border ${getAccentBg(idx)}`}>
              {getIcon(idx)}
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
              {card.title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-300 font-medium leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Row - 2 or 3 Cards */}
      <div className={`grid grid-cols-1 ${isSixCards ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-4xl mx-auto'} gap-3 sm:gap-4 w-full`}>
        {bottomRow.map((card, idx) => {
          const actualIdx = idx + 3;
          return (
            <motion.div
              key={actualIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * actualIdx, duration: 0.35 }}
              whileHover={{ y: -3 }}
              className="flex flex-col justify-start p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl hover:border-slate-700 backdrop-blur-xl transition-all group text-start"
            >
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-3 border ${getAccentBg(actualIdx)}`}>
                {getIcon(actualIdx)}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 font-medium leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

