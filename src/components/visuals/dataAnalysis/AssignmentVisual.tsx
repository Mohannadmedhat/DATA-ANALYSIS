import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Tv, Car, FileEdit, CheckCircle2, Sparkles } from 'lucide-react';

interface AssignmentVisualProps {
  companies?: { name: string; iconName?: string; }[];
  questions?: string[];
  isRTL: boolean;
}

const defaultCompanies = [
  { name: 'Amazon', iconName: 'amazon' },
  { name: 'Netflix', iconName: 'netflix' },
  { name: 'Uber', iconName: 'uber' }
];

const defaultQuestions = [
  'What types of data does this company collect daily from users and operations?',
  'How does the company transform this raw data into information and actionable insights?',
  'What business decisions are driven by their data analysis models?',
  'Which tools in our diploma roadmap (SQL, Python, Power BI) are critical for their scale?'
];

export const AssignmentVisual: React.FC<AssignmentVisualProps> = ({ 
  companies = defaultCompanies, 
  questions = defaultQuestions, 
  isRTL 
}) => {
  const [selectedCompany, setSelectedCompany] = useState<string>('Netflix');

  const getCompanyIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'amazon': return <Building2 className="w-5 h-5 text-amber-600" />;
      case 'netflix': return <Tv className="w-5 h-5 text-rose-600" />;
      case 'uber': return <Car className="w-5 h-5 text-emerald-600" />;
      default: return <Building2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-5 w-full h-full justify-center py-2 max-w-5xl mx-auto select-none">
      {/* Example Companies Bar */}
      <div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 text-start font-mono">
          {isRTL ? 'اختر شركة للتحليل (EXAMPLE COMPANIES — انقر للاختيار):' : 'EXAMPLE COMPANIES (Click to Select):'}
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {companies.map((c, idx) => {
            const isSelected = selectedCompany.toLowerCase() === c.name.toLowerCase();
            return (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * idx, duration: 0.45 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCompany(c.name)}
                className={`p-3.5 sm:p-4 rounded-xl border shadow-sm flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-blue-50/90 border-blue-400 text-blue-900 ring-2 ring-blue-500/20 shadow-md'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/60'
                }`}
              >
                {getCompanyIcon(c.name)}
                <span>{c.name}</span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600 ms-1" />}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Answer The Following Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-start"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shadow-sm shrink-0">
            <FileEdit className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span>{isRTL ? `المطلوب تحليله لشركة (${selectedCompany}):` : `Analysis Requirements for (${selectedCompany}):`}</span>
            </h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {isRTL ? 'أجب عن الأسئلة الأربعة التالية في تقرير موجز وقدمه للمناقشة في الجلسة القادمة' : 'Answer the 4 questions in a concise report to present in the next session'}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-3 border-t border-slate-100">
          {questions.map((q, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <span className="w-6 h-6 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{q}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
