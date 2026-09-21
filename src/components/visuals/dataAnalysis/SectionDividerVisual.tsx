import React from 'react';
import { motion } from 'motion/react';
import { 
  FileSpreadsheet, 
  Code2, 
  LineChart, 
  Database, 
  BarChart4, 
  PieChart, 
  Globe2,
  Shield,
  Terminal
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
  const displaySection = sectionNumber || `PART ${num.padStart(2, '0')}`;
  const activeIcon = (icon || iconName || '').toLowerCase();

  const getIcon = () => {
    switch (activeIcon) {
      case 'kali':
      case 'terminal':
      case 'shield':
        return <Shield className="w-8 h-8 text-white" />;
      case 'excel':
      case 'filespreadsheet':
        return <FileSpreadsheet className="w-8 h-8 text-white" />;
      case 'python':
      case 'code2':
        return <Code2 className="w-8 h-8 text-white" />;
      case 'pythonda':
      case 'linechart':
        return <LineChart className="w-8 h-8 text-white" />;
      case 'sql':
      case 'database':
        return <Database className="w-8 h-8 text-white" />;
      case 'powerbi':
      case 'barchart4':
        return <BarChart4 className="w-8 h-8 text-white" />;
      case 'tableau':
      case 'piechart':
        return <PieChart className="w-8 h-8 text-white" />;
      case 'scraping':
      case 'webscraping':
      case 'globe2':
        return <Globe2 className="w-8 h-8 text-white" />;
      default:
        return <FileSpreadsheet className="w-8 h-8 text-white" />;
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 select-none overflow-hidden bg-transparent text-white">
      {/* Ambient background glow */}
      <motion.div 
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 rounded-full blur-3xl bg-blue-600/30 pointer-events-none"
      />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-2xl flex flex-col items-center my-auto text-center"
      >
        {/* Orange glowing gradient icon box */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/30 mb-4 ring-4 ring-orange-500/20">
          {getIcon()}
        </div>

        {/* Translucent Part Badge Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-mono font-bold mb-3 shadow-md backdrop-blur-sm">
          {displaySection}
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-3">
          {title}
        </h2>

        {/* Orange Underline Line */}
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-xl text-center leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};
