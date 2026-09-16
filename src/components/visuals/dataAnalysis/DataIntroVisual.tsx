import React from 'react';
import { motion } from 'motion/react';
import { Database, Sparkles, TrendingUp, BarChart3, Binary, ArrowRight, ArrowLeft } from 'lucide-react';
import { InstantLogo } from '../../InstantLogo';

interface DataIntroVisualProps {
  isRTL: boolean;
  onStart?: () => void;
}

export const DataIntroVisual: React.FC<DataIntroVisualProps> = ({ isRTL, onStart }) => {
  const stats = [
    { 
      val: isRTL ? '8 مراحل' : '8 Stages', 
      label: isRTL ? 'المسار التدريبي' : 'Curriculum Roadmap', 
      sub: isRTL ? 'مسار متكامل من الصفر' : 'From zero to job-ready' 
    },
    { 
      val: isRTL ? '7 أجزاء' : '7 Modules', 
      label: isRTL ? 'المحاور التطبيقية' : 'Applied Core Modules', 
      sub: isRTL ? 'مشاريع عملية وحالات واقعية' : 'Real-world projects' 
    },
    { 
      val: isRTL ? '5 أدوات' : '5 Core Tools', 
      label: isRTL ? 'تقنيات سوق العمل' : 'Industry Tech Stack', 
      sub: 'Excel • SQL • Python • BI • Tableau' 
    },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 text-center bg-transparent overflow-hidden">
      {/* Floating Constellation Nodes Animation — Original Distribution with Clean Spacing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <motion.div 
          animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 left-[6%] sm:left-[12%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-blue-500/50 text-blue-400 text-xs backdrop-blur-md shadow-xl"
        >
          <Database className="w-3.5 h-3.5" />
          <span>Big Data & SQL</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-10 right-[6%] sm:right-[12%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-cyan-500/50 text-cyan-400 text-xs backdrop-blur-md shadow-xl"
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Interactive Dashboards</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }} 
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-4 left-[4%] sm:left-[10%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/50 text-emerald-400 text-xs backdrop-blur-md shadow-xl"
        >
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-semibold text-emerald-400">Predictive Analytics</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }} 
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-4 right-[4%] sm:right-[10%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-purple-500/50 text-purple-400 text-xs backdrop-blur-md shadow-xl"
        >
          <Binary className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-semibold text-purple-400">Python & Statistics</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl sm:max-w-3xl flex flex-col items-center my-auto"
      >
        <div className="mb-4 sm:mb-5">
          <InstantLogo isDark={true} className="h-6 sm:h-7" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold mb-3 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span>{isRTL ? 'دبلومة تحليل البيانات • المحطة 01' : 'Data Analysis Diploma • Session 01'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-3">
          DATA ANALYSIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">FUNDAMENTALS</span>
        </h1>

        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-3 shadow-sm" />

        <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-2xl mb-6 leading-relaxed">
          {isRTL 
            ? 'دليلك وخريطتك المتكاملة لاحتراف تحليل البيانات من الصفر إلى سوق العمل' 
            : 'Your Complete Roadmap to Become a Job-Ready Data Analyst'}
        </p>

        {/* Quick Curriculum Highlights */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 w-full max-w-2xl mb-6 items-stretch">
          {stats.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-xl p-3 sm:p-4 backdrop-blur-md transition-all shadow-lg flex flex-col justify-center items-center text-center"
            >
              <div className="text-lg sm:text-2xl font-black text-cyan-400 mb-1">{s.val}</div>
              <div className="text-xs sm:text-sm font-bold text-slate-100 mb-0.5">{s.label}</div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {onStart && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
          >
            <span>{isRTL ? 'ابدأ الجلسة الأولى' : 'Start Session 01'}</span>
            <ArrowIcon className="w-4 h-4" />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};
