import React from 'react';
import { motion } from 'motion/react';
import { 
  FileSpreadsheet, 
  Code2, 
  LineChart, 
  Database, 
  BarChart4, 
  PieChart, 
  Globe2 
} from 'lucide-react';
import { InstantLogo } from '../../InstantLogo';

interface SectionDividerVisualProps {
  sectionNumber?: string;
  number?: string;
  title: string;
  subtitle?: string;
  iconName?: string;
  icon?: string;
  isRTL: boolean;
}

export const SectionDividerVisual: React.FC<SectionDividerVisualProps> = ({
  sectionNumber,
  number,
  title,
  subtitle,
  iconName,
  icon,
  isRTL
}) => {
  const num = number || sectionNumber || '01';
  const displaySection = sectionNumber || (isRTL ? `القسم ${num} • SECTION ${num}` : `SECTION ${num}`);
  const activeIcon = (icon || iconName || '').toLowerCase();

  const getIcon = () => {
    switch (activeIcon) {
      case 'excel':
      case 'filespreadsheet':
        return <FileSpreadsheet className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400" />;
      case 'python':
      case 'code2':
        return <Code2 className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400" />;
      case 'pythonda':
      case 'linechart':
        return <LineChart className="w-16 h-16 sm:w-20 sm:h-20 text-indigo-400" />;
      case 'sql':
      case 'database':
        return <Database className="w-16 h-16 sm:w-20 sm:h-20 text-blue-400" />;
      case 'powerbi':
      case 'barchart4':
        return <BarChart4 className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400" />;
      case 'tableau':
      case 'piechart':
        return <PieChart className="w-16 h-16 sm:w-20 sm:h-20 text-rose-400" />;
      case 'scraping':
      case 'webscraping':
      case 'globe2':
        return <Globe2 className="w-16 h-16 sm:w-20 sm:h-20 text-purple-400" />;
      default:
        return <FileSpreadsheet className="w-16 h-16 sm:w-20 sm:h-20 text-blue-400" />;
    }
  };

  const getGlowColor = () => {
    switch (activeIcon) {
      case 'excel': return 'from-emerald-500/20 to-teal-500/5 bg-emerald-500/10 border-emerald-500/30';
      case 'python': return 'from-amber-500/20 to-yellow-500/5 bg-amber-500/10 border-amber-500/30';
      case 'pythonda': return 'from-indigo-500/20 to-cyan-500/5 bg-indigo-500/10 border-indigo-500/30';
      case 'sql': return 'from-blue-500/20 to-sky-500/5 bg-blue-500/10 border-blue-500/30';
      case 'powerbi': return 'from-yellow-500/20 to-amber-500/5 bg-yellow-500/10 border-yellow-500/30';
      case 'tableau': return 'from-rose-500/20 to-pink-500/5 bg-rose-500/10 border-rose-500/30';
      case 'scraping':
      case 'webscraping': return 'from-purple-500/20 to-violet-500/5 bg-purple-500/10 border-purple-500/30';
      default: return 'from-blue-500/20 to-indigo-500/5 bg-blue-500/10 border-blue-500/30';
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-between p-6 sm:p-12 overflow-hidden select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left / Info side */}
      <motion.div 
        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl z-10 text-start"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
          <span>{displaySection}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
          {title}
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-4" />

        {subtitle && (
          <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Right / Big Circular Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:flex items-center justify-center z-10"
      >
        <div className={`relative w-48 h-48 lg:w-56 lg:h-56 rounded-3xl bg-gradient-to-br ${getGlowColor()} border shadow-2xl flex flex-col items-center justify-center backdrop-blur-md`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {getIcon()}
          </motion.div>
          <span className="text-xs font-mono font-bold text-slate-300 mt-3 tracking-widest uppercase">
            PART 0{num}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
