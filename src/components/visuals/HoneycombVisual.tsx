import React, { useState } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  Compass, 
  Eye, 
  ShieldCheck, 
  Heart, 
  Gem,
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { Language } from '../../types';

interface HoneycombVisualProps {
  language: Language;
  activeFactorKey?: string;
  isDark?: boolean;
}

export const HoneycombVisual: React.FC<HoneycombVisualProps> = ({
  language,
  activeFactorKey,
  isDark = false
}) => {
  const isRTL = language === 'ar';

  const factors = [
    {
      key: 'useful',
      name: 'Useful',
      arabicName: 'مفيد (Useful)',
      icon: CheckCircle2,
      tagline: isRTL ? 'يحل مشكلة حقيقية' : 'Solves a real user problem',
      question: isRTL ? 'هل يلبي هذا المنتج حاجة حقيقية وله هدف عملي؟' : 'Does this product fulfill a real need and purpose?',
      color: 'from-blue-500 to-cyan-500',
      accentColor: 'border-blue-500 text-blue-500 bg-blue-500/10'
    },
    {
      key: 'usable',
      name: 'Usable',
      arabicName: 'قابل للاستخدام (Usable)',
      icon: HelpCircle,
      tagline: isRTL ? 'سهل وبديهي وسريع' : 'Easy, intuitive & low cognitive load',
      question: isRTL ? 'هل يستطيع المستخدم إنجاز مهامه بأقل جهد ودون إرباك؟' : 'Can users achieve goals effortlessly with zero friction?',
      color: 'from-emerald-500 to-teal-500',
      accentColor: 'border-emerald-500 text-emerald-500 bg-emerald-500/10'
    },
    {
      key: 'findable',
      name: 'Findable',
      arabicName: 'سهل الإيجاد (Findable)',
      icon: Compass,
      tagline: isRTL ? 'تنقل وبحث وهيكلة واضحة' : 'Clear navigation, search & hierarchy',
      question: isRTL ? 'هل يجد المستخدم ما يبحث عنه في ثوانٍ معدودة؟' : 'Can users locate information instantly?',
      color: 'from-amber-500 to-orange-500',
      accentColor: 'border-amber-500 text-amber-500 bg-amber-500/10'
    },
    {
      key: 'valuable',
      name: 'Valuable',
      arabicName: 'ذو قيمة (Valuable - النواة المركزية)',
      icon: Gem,
      tagline: isRTL ? 'قيمة للمستخدم وقيمة للبزنس' : 'Delivers ROI for business & value to user',
      question: isRTL ? 'هل يقدم المنتج قيمة مضافة تدفع المستخدم للاستمرار؟' : 'Does it drive business ROI and user satisfaction?',
      color: 'from-indigo-600 to-violet-600',
      accentColor: 'border-indigo-500 text-indigo-400 bg-indigo-500/20'
    },
    {
      key: 'accessible',
      name: 'Accessible',
      arabicName: 'متاح للجميع (Accessible)',
      icon: Eye,
      tagline: isRTL ? 'شامل ويراعي كافة القدرات' : 'Inclusive & WCAG compliant for everyone',
      question: isRTL ? 'هل يستطيع ذوو الهمم ومختلف الفئات استخدامه بسهولة؟' : 'Is it usable for people with diverse abilities?',
      color: 'from-purple-500 to-pink-500',
      accentColor: 'border-purple-500 text-purple-500 bg-purple-500/10'
    },
    {
      key: 'credible',
      name: 'Credible',
      arabicName: 'موثوق (Credible)',
      icon: ShieldCheck,
      tagline: isRTL ? 'أمان، شفافية ومصداقية' : 'Trustworthy, secure & transparent',
      question: isRTL ? 'هل يثق المستخدم ببياناته وأمواله ووعود المنتج؟' : 'Do users trust the brand, data security and accuracy?',
      color: 'from-sky-500 to-blue-600',
      accentColor: 'border-sky-500 text-sky-500 bg-sky-500/10'
    },
    {
      key: 'desirable',
      name: 'Desirable',
      arabicName: 'مرغوب وجذاب (Desirable)',
      icon: Heart,
      tagline: isRTL ? 'جاذبية بصرية وعاطفية' : 'Emotional connection & visual delight',
      question: isRTL ? 'هل المظهر والشعور العام يثير الإعجاب والرغبة؟' : 'Does the visual identity evoke positive emotions?',
      color: 'from-rose-500 to-red-500',
      accentColor: 'border-rose-500 text-rose-500 bg-rose-500/10'
    }
  ];

  const [selectedKey, setSelectedKey] = useState<string>(activeFactorKey || 'valuable');
  const activeFactor = factors.find(f => f.key === selectedKey) || factors[3];

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-6 py-2">
      {/* Visual Honeycomb Hex Grid */}
      <div className="w-full lg:w-7/12 flex flex-col items-center justify-center">
        {/* Top Row: 3 items */}
        <div className="flex justify-center gap-2.5 sm:gap-3.5 mb-2">
          {factors.slice(0, 3).map((factor) => {
            const Icon = factor.icon;
            const isSelected = factor.key === selectedKey;
            return (
              <button
                key={factor.key}
                onClick={() => setSelectedKey(factor.key)}
                className={`relative px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all text-center cursor-pointer group flex flex-col items-center justify-center min-w-[90px] sm:min-w-[110px] ${
                  isSelected
                    ? `${factor.accentColor} ring-2 ring-blue-500/50 shadow-lg scale-105`
                    : isDark 
                      ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 transition-transform group-hover:scale-110 ${
                  isSelected ? '' : 'text-slate-400 group-hover:text-blue-500'
                }`} />
                <span className="text-[11px] sm:text-xs font-bold leading-tight">
                  {isRTL ? factor.arabicName.split(' ')[0] : factor.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Middle Row: Central Valuable Core */}
        <div className="flex justify-center my-1">
          <button
            onClick={() => setSelectedKey('valuable')}
            className={`relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl border-2 transition-all text-center cursor-pointer group flex items-center gap-3 ${
              selectedKey === 'valuable'
                ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white border-indigo-400 shadow-xl shadow-indigo-500/20 scale-105'
                : isDark
                  ? 'bg-slate-900 border-indigo-500/40 text-indigo-300 hover:border-indigo-400'
                  : 'bg-indigo-50 border-indigo-200 text-indigo-800 hover:border-indigo-400'
            }`}
          >
            <Gem className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            <div className="text-start">
              <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider opacity-80 block">
                {isRTL ? 'المركز والهدف الأسمى' : 'The Core Objective'}
              </span>
              <span className="text-xs sm:text-sm font-extrabold block">
                {isRTL ? 'Valuable (قيمة حقيقية)' : 'Valuable (Core Value)'}
              </span>
            </div>
          </button>
        </div>

        {/* Bottom Row: 3 items */}
        <div className="flex justify-center gap-2.5 sm:gap-3.5 mt-2">
          {factors.slice(4).map((factor) => {
            const Icon = factor.icon;
            const isSelected = factor.key === selectedKey;
            return (
              <button
                key={factor.key}
                onClick={() => setSelectedKey(factor.key)}
                className={`relative px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all text-center cursor-pointer group flex flex-col items-center justify-center min-w-[90px] sm:min-w-[110px] ${
                  isSelected
                    ? `${factor.accentColor} ring-2 ring-blue-500/50 shadow-lg scale-105`
                    : isDark 
                      ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mb-1 transition-transform group-hover:scale-110 ${
                  isSelected ? '' : 'text-slate-400 group-hover:text-blue-500'
                }`} />
                <span className="text-[11px] sm:text-xs font-bold leading-tight">
                  {isRTL ? factor.arabicName.split(' ')[0] : factor.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail Card for Selected Factor */}
      <div className="w-full lg:w-5/12">
        <div className={`p-5 sm:p-6 rounded-2xl border transition-all ${
          isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md uppercase border ${activeFactor.accentColor}`}>
              Peter Morville Model
            </span>
            <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {factors.findIndex(f => f.key === activeFactor.key) + 1} / 7
            </span>
          </div>

          <h4 className={`text-base sm:text-lg font-extrabold mb-1 ${isDark ? 'text-white' : 'text-slate-950'}`}>
            {isRTL ? activeFactor.arabicName : `${activeFactor.name} (UX Factor)`}
          </h4>
          <p className={`text-xs font-semibold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            {activeFactor.tagline}
          </p>

          <div className={`p-3.5 rounded-xl mb-4 border ${
            isDark ? 'bg-slate-950/60 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-100 text-slate-800'
          }`}>
            <span className="text-[11px] font-bold text-blue-500 uppercase block mb-1">
              {isRTL ? 'السؤال الجوهري للمصمم:' : 'Key Evaluative Question:'}
            </span>
            <p className="text-xs sm:text-sm font-medium leading-relaxed">
              "{activeFactor.question}"
            </p>
          </div>

          <p className={`text-xs sm:text-sm leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
            {isRTL
              ? 'تتكامل هذه العوامل السبعة معاً لتشكل مقياس جودة تجربة المستخدم الشاملة وتضمن نجاح المنتج في السوق.'
              : 'These seven facets intersect to form the ultimate evaluation matrix for digital product experience.'}
          </p>
        </div>
      </div>
    </div>
  );
};
