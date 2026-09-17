import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, CheckCircle2, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';
import { InstantLogo } from '../../InstantLogo';

interface ThankYouVisualProps {
  isRTL: boolean;
  onRestart?: () => void;
  onNextSession?: () => void;
  nextSessionTopicEn?: string;
  nextSessionTopicAr?: string;
}

export const ThankYouVisual: React.FC<ThankYouVisualProps> = ({ 
  isRTL: _isRTL, 
  onRestart,
  onNextSession,
  nextSessionTopicEn = 'Get ready for hands-on Excel data mastery in the next session.'
}) => {
  const isRTL = false;
  const NextArrow = ArrowRight;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-12 text-center overflow-hidden select-none">
      {/* Background Ambience - Exact Original Colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl z-10 flex flex-col items-center"
      >
        <div className="mb-6">
          <InstantLogo isDark={true} className="h-7 sm:h-8" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
          <CheckCircle2 className="w-4 h-4" />
          <span>{isRTL ? 'اكتملت الجلسة الأولى بنجاح' : 'Session 01 Completed Successfully'}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
          THANK YOU
        </h1>

        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6" />

        <p className="text-base sm:text-xl text-slate-300 font-medium max-w-xl mb-8 leading-relaxed">
          {isRTL 
            ? `شكراً لحضوركم وتفاعلكم! ${nextSessionTopicAr}`
            : `Thank you for your active participation! ${nextSessionTopicEn}`}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          {onRestart && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRestart}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-bold text-sm transition-all cursor-pointer shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isRTL ? 'إعادة العرض' : 'Restart Presentation'}</span>
            </motion.button>
          )}

          {onNextSession && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNextSession}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-sm transition-all cursor-pointer shadow-lg shadow-orange-500/25"
            >
              <span>{isRTL ? 'الانتقال للسيشن 02: إكسيل' : 'Open Session 02: Excel Basics'}</span>
              <NextArrow className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
