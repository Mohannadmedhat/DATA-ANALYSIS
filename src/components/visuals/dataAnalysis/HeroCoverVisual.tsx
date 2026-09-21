import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { InstantLogo } from '../../InstantLogo';

export interface FloatingBadgeItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  borderColor?: string;
  textColor?: string;
}

export interface StatCardItem {
  val: string;
  label: string;
  sub: string;
}

export interface HeroCoverVisualProps {
  sessionNumber: string; // e.g. "11", "04", "10", etc.
  courseTag?: string; // default: "Data Analysis Diploma"
  titlePrefix: string; // e.g. "PYTHON"
  titleHighlight: string; // e.g. "DATA STRUCTURES"
  subtitle: string;
  floatingBadges: FloatingBadgeItem[];
  statsCards: StatCardItem[];
  onStart?: () => void;
}

export const HeroCoverVisual: React.FC<HeroCoverVisualProps> = ({
  sessionNumber,
  courseTag = "Data Analysis Diploma",
  titlePrefix,
  titleHighlight,
  subtitle,
  floatingBadges,
  statsCards,
  onStart
}) => {
  const getPositionClass = (pos: FloatingBadgeItem['position']) => {
    switch (pos) {
      case 'top-left': return 'top-8 left-[4%] sm:left-[10%]';
      case 'top-right': return 'top-10 right-[4%] sm:right-[10%]';
      case 'bottom-left': return 'bottom-4 left-[4%] sm:left-[8%]';
      case 'bottom-right': return 'bottom-4 right-[4%] sm:right-[8%]';
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 text-center bg-transparent overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.25),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Node Badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {floatingBadges.map((badge, idx) => {
          const IconComp = badge.icon;
          const delay = idx * 0.8;
          return (
            <motion.div
              key={idx}
              animate={{ y: [0, idx % 2 === 0 ? -8 : 8, 0], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 4.5 + idx * 0.5, repeat: Infinity, ease: "easeInOut", delay }}
              className={`absolute ${getPositionClass(badge.position)} flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081232]/90 border text-xs backdrop-blur-md shadow-xl ${
                badge.borderColor || 'border-blue-500/50'
              } ${badge.textColor || 'text-cyan-400'}`}
            >
              <IconComp className="w-3.5 h-3.5" />
              <span className="font-semibold">{badge.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Hero Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl flex flex-col items-center my-auto w-full"
      >
        {/* InstantLogo */}
        <div className="mb-4 sm:mb-5">
          <InstantLogo isDark={true} className="h-7 sm:h-8" />
        </div>

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>{courseTag} • Session {sessionNumber}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-3 uppercase flex flex-col items-center gap-1 w-full max-w-4xl">
          <span className="whitespace-nowrap">{titlePrefix}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 whitespace-nowrap">
            {titleHighlight}
          </span>
        </h1>

        {/* Orange Underline */}
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-2xl mb-6 leading-relaxed">
          {subtitle}
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl mb-6 items-stretch">
          {statsCards.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="bg-[#081232]/90 border border-[#162d66] hover:border-cyan-500/40 rounded-xl p-3 sm:p-4 backdrop-blur-md transition-all shadow-lg flex flex-col justify-center items-center text-center"
            >
              <div className="text-base sm:text-2xl font-black text-cyan-400 mb-1">{s.val}</div>
              <div className="text-xs sm:text-sm font-bold text-slate-100 mb-0.5">{s.label}</div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        {onStart && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
          >
            <span>Start Session {sessionNumber}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};
