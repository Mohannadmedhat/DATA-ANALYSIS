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
    { label: isRTL ? 'المحطات التدريبية' : 'Curriculum Milestones', val: '8 Stages', sub: isRTL ? 'مسار متكامل من الصفر' : 'From zero to job-ready' },
    { label: isRTL ? 'أجزاء الدبلومة' : 'Core Modules', val: '7 Modules', sub: isRTL ? 'تطبيقات عملية واقعية' : 'Hands-on projects' },
    { label: isRTL ? 'الأدوات الاحترافية' : 'Core Tools', val: 'Excel • SQL • BI', sub: isRTL ? 'مع Python و Tableau' : '+ Python & Tableau' },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-6 text-center bg-transparent">
      {/* Floating Constellation Nodes Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-1/6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-blue-500/30 text-blue-400 text-xs backdrop-blur-md shadow-lg"
        >
          <Database className="w-3.5 h-3.5" />
          <span>Big Data & SQL</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 12, 0], opacity: [0.4, 0.8, 0.4] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-16 right-1/6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs backdrop-blur-md shadow-lg"
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Interactive Dashboards</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.7, 0.3] }} 
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-16 left-1/4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs backdrop-blur-md shadow-lg"
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Predictive Analytics</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }} 
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-16 right-1/4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-400 text-xs backdrop-blur-md shadow-lg"
        >
          <Binary className="w-3.5 h-3.5" />
          <span>Python & Statistics</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl flex flex-col items-center"
      >
        <div className="mb-6">
          <InstantLogo isDark={true} className="h-6 sm:h-7" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span>{isRTL ? 'دبلومة تحليل البيانات • المحطة 01' : 'Data Analysis Diploma • Session 01'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
          DATA ANALYSIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">FUNDAMENTALS</span>
        </h1>

        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

        <p className="text-base sm:text-xl text-slate-300 font-medium max-w-2xl mb-8 leading-relaxed">
          {isRTL 
            ? 'دليلك وخريطتك المتكاملة لاحتراف تحليل البيانات من الصفر إلى سوق العمل' 
            : 'Your Complete Roadmap to Become a Job-Ready Data Analyst'}
        </p>

        {/* Quick Curriculum Highlights */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl mb-8">
          {stats.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 rounded-xl p-3 sm:p-4 backdrop-blur-md transition-all shadow-lg"
            >
              <div className="text-lg sm:text-2xl font-black text-cyan-400 mb-1">{s.val}</div>
              <div className="text-xs sm:text-sm font-bold text-slate-200">{s.label}</div>
              <div className="text-[10px] sm:text-xs text-slate-400">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {onStart && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
          >
            <span>{isRTL ? 'ابدأ الجلسة الأولى' : 'Start Session 01'}</span>
            <ArrowIcon className="w-4 h-4" />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};
