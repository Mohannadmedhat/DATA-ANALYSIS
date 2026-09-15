import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Search, TrendingUp, Sparkles } from 'lucide-react';
import { FeatureCard } from '../../../types';

interface DataImportanceGridVisualProps {
  cards: FeatureCard[];
  isRTL: boolean;
}

export const DataImportanceGridVisual: React.FC<DataImportanceGridVisualProps> = ({ cards, isRTL }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-6 h-6 text-blue-600" />;
      case 1:
        return <Users className="w-6 h-6 text-indigo-600" />;
      case 2:
        return <Search className="w-6 h-6 text-cyan-600" />;
      case 3:
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 4:
        return <Sparkles className="w-6 h-6 text-purple-600" />;
      default:
        return <Target className="w-6 h-6 text-blue-600" />;
    }
  };

  const getAccentBg = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white';
      case 1:
        return 'bg-indigo-50 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white';
      case 2:
        return 'bg-cyan-50 border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white';
      case 3:
        return 'bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white';
      case 4:
        return 'bg-purple-50 border-purple-100 group-hover:bg-purple-600 group-hover:text-white';
      default:
        return 'bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white';
    }
  };

  const topRow = cards.slice(0, 3);
  const bottomRow = cards.slice(3, 5);

  return (
    <div className="flex flex-col gap-4 sm:gap-5 w-full h-full justify-center py-2">
      {/* Top Row - 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {topRow.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
            whileHover={{ y: -3 }}
            className="flex flex-col justify-start p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group"
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all ${getAccentBg(idx)} [&>svg]:group-hover:text-white`}>
              {getIcon(idx)}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Row - 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto w-full">
        {bottomRow.map((card, idx) => {
          const actualIdx = idx + 3;
          return (
            <motion.div
              key={actualIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * actualIdx, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="flex flex-col justify-start p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all ${getAccentBg(actualIdx)} [&>svg]:group-hover:text-white`}>
                {getIcon(actualIdx)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
