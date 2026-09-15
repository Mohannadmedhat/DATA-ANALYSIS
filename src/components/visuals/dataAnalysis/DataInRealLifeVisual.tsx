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
          icon: <Building2 className="w-6 h-6 text-blue-600" />,
          bg: 'bg-blue-50 border-blue-100',
          accent: 'group-hover:bg-blue-600',
          sample: isRTL ? 'إيرادات، معاملات، وفواتير' : 'Revenue, transactions & CRM'
        };
      case 1:
        return {
          icon: <HeartPulse className="w-6 h-6 text-rose-600" />,
          bg: 'bg-rose-50 border-rose-100',
          accent: 'group-hover:bg-rose-600',
          sample: isRTL ? 'سجلات المرضى وجداول العلاج' : 'EHR records & clinical history'
        };
      case 2:
        return {
          icon: <Cpu className="w-6 h-6 text-indigo-600" />,
          bg: 'bg-indigo-50 border-indigo-100',
          accent: 'group-hover:bg-indigo-600',
          sample: isRTL ? 'سجلات التفاعل والـ API Logs' : 'User clickstreams & server logs'
        };
      case 3:
        return {
          icon: <Share2 className="w-6 h-6 text-cyan-600" />,
          bg: 'bg-cyan-50 border-cyan-100',
          accent: 'group-hover:bg-cyan-600',
          sample: isRTL ? 'تفاعلات، تعليقات، ومشاهدات' : 'Impressions, likes & sentiment'
        };
      default:
        return {
          icon: <Building2 className="w-6 h-6 text-blue-600" />,
          bg: 'bg-blue-50 border-blue-100',
          accent: 'group-hover:bg-blue-600',
          sample: ''
        };
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full h-full items-center py-4">
      {cards.map((card, idx) => {
        const meta = getDomainMeta(idx);
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
            whileHover={{ y: -6 }}
            className="flex flex-col justify-between h-[340px] p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all group"
          >
            <div>
              {/* Domain Icon */}
              <div className={`w-14 h-14 rounded-2xl ${meta.bg} ${meta.accent} flex items-center justify-center mb-5 transition-all [&>svg]:group-hover:text-white shadow-sm`}>
                {meta.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                {card.description}
              </p>
            </div>

            {/* Bottom Example Capsule */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] sm:text-xs text-slate-500 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span className="truncate">{meta.sample}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
