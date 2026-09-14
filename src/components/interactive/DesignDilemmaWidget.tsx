import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  TrendingUp, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { Language } from '../../types';

interface DilemmaOption {
  id: 'A' | 'B';
  title: string;
  subtitle: string;
  votesPercent: number;
  isRecommended: boolean;
  rationale: string;
}

interface DesignDilemmaWidgetProps {
  language: Language;
  title: string;
  scenario: string;
  optionA: DilemmaOption;
  optionB: DilemmaOption;
  isDark?: boolean;
}

export const DesignDilemmaWidget: React.FC<DesignDilemmaWidgetProps> = ({
  language,
  title,
  scenario,
  optionA,
  optionB,
  isDark = false
}) => {
  const isRTL = language === 'ar';
  const [selectedVote, setSelectedVote] = useState<'A' | 'B' | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const handleVote = (choice: 'A' | 'B') => {
    setSelectedVote(choice);
    setIsRevealed(true);
  };

  const resetDilemma = () => {
    setSelectedVote(null);
    setIsRevealed(false);
  };

  return (
    <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
      isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
    }`}>
      {/* Top Dilemma Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-amber-500 block">
              {isRTL ? 'تحدي وتصويت صفي تفاعلي 🎯' : 'Classroom Interactive Poll & Dilemma 🎯'}
            </span>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
              {title}
            </h4>
          </div>
        </div>

        {isRevealed && (
          <button
            onClick={resetDilemma}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white underline cursor-pointer self-end sm:self-auto"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{isRTL ? 'إعادة التصويت' : 'Reset Poll'}</span>
          </button>
        )}
      </div>

      <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
        {scenario}
      </p>

      {/* Voting Cards Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        {/* Option A */}
        <button
          onClick={() => handleVote('A')}
          className={`p-3.5 rounded-xl border text-start transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
            selectedVote === 'A'
              ? 'ring-2 ring-blue-500 bg-blue-950/40 border-blue-500 shadow-md'
              : isDark ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className={`w-6 h-6 rounded-md font-mono font-bold text-xs flex items-center justify-center ${
                selectedVote === 'A' ? 'bg-blue-600 text-white' : (isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700')
              }`}>
                A
              </span>
              {isRevealed && (
                <span className="text-xs font-mono font-bold text-blue-500">
                  {optionA.votesPercent}% {isRTL ? 'من المصممين' : 'of designers'}
                </span>
              )}
            </div>

            <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
              {optionA.title}
            </h5>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
              {optionA.subtitle}
            </p>
          </div>

          {isRevealed && (
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3">
              <div 
                className={`h-full transition-all duration-500 ${optionA.isRecommended ? 'bg-emerald-500' : 'bg-rose-500'}`}
                style={{ width: `${optionA.votesPercent}%` }}
              />
            </div>
          )}
        </button>

        {/* Option B */}
        <button
          onClick={() => handleVote('B')}
          className={`p-3.5 rounded-xl border text-start transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
            selectedVote === 'B'
              ? 'ring-2 ring-blue-500 bg-blue-950/40 border-blue-500 shadow-md'
              : isDark ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className={`w-6 h-6 rounded-md font-mono font-bold text-xs flex items-center justify-center ${
                selectedVote === 'B' ? 'bg-blue-600 text-white' : (isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700')
              }`}>
                B
              </span>
              {isRevealed && (
                <span className="text-xs font-mono font-bold text-blue-500">
                  {optionB.votesPercent}% {isRTL ? 'من المصممين' : 'of designers'}
                </span>
              )}
            </div>

            <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
              {optionB.title}
            </h5>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
              {optionB.subtitle}
            </p>
          </div>

          {isRevealed && (
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3">
              <div 
                className={`h-full transition-all duration-500 ${optionB.isRecommended ? 'bg-emerald-500' : 'bg-rose-500'}`}
                style={{ width: `${optionB.votesPercent}%` }}
              />
            </div>
          )}
        </button>
      </div>

      {/* Revealed Rationale Box */}
      {isRevealed && (
        <div className={`p-3.5 rounded-xl border animate-in fade-in zoom-in-95 duration-200 ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-blue-50/70 border-blue-200'
        }`}>
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-bold text-emerald-500">
              {isRTL ? 'التحليل النفسي والمعيار المعتمد (UX Verdict):' : 'Scientific UX Verdict:'}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-200">
            {optionA.isRecommended ? optionA.rationale : optionB.rationale}
          </p>
        </div>
      )}
    </div>
  );
};
