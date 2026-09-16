import React from 'react';
import { motion } from 'motion/react';
import { Building2, HeartPulse, Cpu, Share2 } from 'lucide-react';
import { FeatureCard } from '../../../types';

interface DataInRealLifeVisualProps {
  cards: FeatureCard[];
  isRTL: boolean;
}

export const DataInRealLifeVisual: React.FC<DataInRealLifeVisualProps> = ({ cards, isRTL }) => {
  const getDomainMeta = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          icon: <Building2 className="w-6 h-6 text-blue-400" />,
          bg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
          sample: isRTL ? 'إيرادات، معاملات، وفواتير' : 'Revenue, transactions & CRM'
        };
      case 1:
        return {
          icon: <HeartPulse className="w-6 h-6 text-rose-400" />,
          bg: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
          sample: isRTL ? 'سجلات المرضى وجداول العلاج' : 'EHR records & clinical history'
        };
      case 2:
        return {
          icon: <Cpu className="w-6 h-6 text-indigo-400" />,
          bg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
          sample: isRTL ? 'سجلات التفاعل والـ API Logs' : 'User clickstreams & server logs'
        };
      case 3:
        return {
          icon: <Share2 className="w-6 h-6 text-cyan-400" />,
          bg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
          sample: isRTL ? 'تفاعلات، تعليقات، ومشاهدات' : 'Impressions, likes & sentiment'
        };
      default:
        return {
          icon: <Building2 className="w-6 h-6 text-blue-400" />,
          bg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
          sample: ''
        };
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full h-full items-center py-4 select-none">
      {cards.map((card, idx) => {
        const meta = getDomainMeta(idx);
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between h-[340px] p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl hover:border-slate-700 backdrop-blur-xl transition-all group text-start"
          >
            <div>
              {/* Domain Icon */}
              <div className={`w-14 h-14 rounded-2xl ${meta.bg} border flex items-center justify-center mb-5 shadow-md`}>
                {meta.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-4">
                {card.description}
              </p>
            </div>

            {/* Bottom Example Capsule */}
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] sm:text-xs text-slate-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
              <span className="truncate">{meta.sample}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

