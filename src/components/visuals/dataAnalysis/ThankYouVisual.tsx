import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { InstantLogo } from '../../InstantLogo';

export interface ThankYouVisualProps {
  isRTL?: boolean;
  sessionNumber?: string; // e.g. "01", "02", "03", "04", "05", "06", "07", "09", "10", "11"
  sessionTitle?: string;
  nextSessionNote?: string;
  nextSessionButtonText?: string;
  onRestart?: () => void;
  onNextSession?: () => void;
}

export const ThankYouVisual: React.FC<ThankYouVisualProps> = ({ 
  isRTL = false, 
  sessionNumber = "01",
  nextSessionNote = "Next Session: Excel Basics — Interface, Navigation & Core Formulas",
  nextSessionButtonText = "Open Session 02: Excel Basics",
  onRestart,
  onNextSession
}) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-12 text-center overflow-hidden select-none bg-transparent">
      {/* Background Ambience Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,0.35),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl z-10 flex flex-col items-center w-full"
      >
        {/* Instant Logo */}
        <div className="mb-6">
          <InstantLogo isDark={true} className="h-7 sm:h-8" />
        </div>

        {/* SESSION XX COMPLETED SUCCESSFULLY Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-5 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{isRTL ? `اكتملت الجلسة ${sessionNumber} بنجاح` : `SESSION ${sessionNumber} COMPLETED SUCCESSFULLY`}</span>
        </div>

        {/* THANK YOU Heading */}
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
          THANK YOU
        </h1>

        {/* Orange Accent Line */}
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6 shadow-sm" />

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-200 font-medium max-w-xl mb-8 leading-relaxed">
          {isRTL ? 'شكراً لحضوركم وتفاعلكم!' : 'Thank you for your active participation!'}
        </p>

        {/* Next Session Box — Translucent Blue Pill matching Image 2 */}
        {nextSessionNote && (
          <div className="w-full max-w-2xl p-4 sm:p-5 rounded-2xl bg-[#081232]/90 border border-[#162d66] text-orange-400 font-mono text-xs sm:text-sm font-bold shadow-2xl mb-8 text-center leading-relaxed">
            <span>{nextSessionNote}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          {onRestart && (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#081232]/90 border border-[#1b387c] hover:border-[#2a50a8] text-slate-200 hover:text-white font-bold text-sm transition-all cursor-pointer shadow-lg"
            >
              <RotateCcw className="w-4 h-4 text-slate-300" />
              <span>{isRTL ? 'إعادة العرض' : 'Restart Presentation'}</span>
            </motion.button>
          )}

          {onNextSession && nextSessionButtonText && (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onNextSession}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-sm transition-all cursor-pointer shadow-lg shadow-orange-500/25"
            >
              <span>{nextSessionButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
