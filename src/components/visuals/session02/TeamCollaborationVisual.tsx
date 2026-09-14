import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Briefcase, Palette, CheckCircle2, RefreshCw, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

interface Props {
  language?: 'ar' | 'en';
  isDark?: boolean;
}

export const TeamCollaborationVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [selectedRole, setSelectedRole] = useState<'designer' | 'developer' | 'pm'>('designer');

  const triad = {
    designer: {
      title: isRTL ? 'مصمم تجربة وواجهة المستخدم (Designer)' : 'UX/UI Designer',
      icon: Palette,
      color: 'from-blue-500 to-indigo-600',
      badge: isRTL ? 'حامي المستخدم وسهولة الاستخدام' : 'User Advocate & Usability',
      focus: isRTL ? 'سلاسة التجربة، إمكانية الوصول، الشياكة، والاتساق البصري' : 'User journey, accessibility, aesthetics & visual polish',
      synergyWithDev: isRTL ? 'تسليم دقيق للقياسات عبر Dev Mode والاتفاق على Design Tokens مطابقة للكود.' : 'Pixel-perfect specs via Dev Mode & unified design tokens.',
      synergyWithPm: isRTL ? 'ربط أهداف البزنس بالحلول التصميمية وتحديد أولويات الـ MVP.' : 'Translating product KPIs into frictionless user interactions.'
    },
    developer: {
      title: isRTL ? 'مهندس البرمجيات والمطور (Developer)' : 'Software Engineer / Developer',
      icon: Code,
      color: 'from-emerald-500 to-teal-600',
      badge: isRTL ? 'المحرك التقني والتنفيذ البرمجي' : 'Feasibility & Performance',
      focus: isRTL ? 'سرعة الاستجابة، استقرار الأداء، وتوافق الكود مع مختلف الأجهزة' : 'Performance, API integration & cross-platform stability',
      synergyWithDesigner: isRTL ? 'إعطاء تغذية راجعة مبكرة حول الإمكانات التقنية وتجنب التعقيدات غير الضرورية.' : 'Early technical feasibility check to avoid costly rewrites.',
      synergyWithPm: isRTL ? 'تقدير وقت التنفيذ ومتابعة الـ Sprints والـ Deployment.' : 'Accurate sprint estimates & reliable feature release dates.'
    },
    pm: {
      title: isRTL ? 'مدير المنتج (Product Manager - PM)' : 'Product Manager (PM)',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-600',
      badge: isRTL ? 'قائد الاستراتيجية وأهداف البزنس' : 'Business Strategy & Timeline',
      focus: isRTL ? 'عائد الاستثمار (ROI)، سرعة النزول للسوق (Time-to-market)، ومؤشرات النجاح' : 'ROI, time-to-market, business KPIs & scope management',
      synergyWithDesigner: isRTL ? 'تحديد المشاكل المطلوب حلها وتزويد المصمم ببيانات السوق والعملاء.' : 'Clear PRD requirements, user problems & market data.',
      synergyWithDev: isRTL ? 'إدارة الأولويات وحل التعارضات بين الميزات والمواعيد النهائية.' : 'Roadmap prioritization & balancing tech debt vs new features.'
    }
  };

  const active = triad[selectedRole];

  return (
    <div className="w-full space-y-4">
      {/* Triad Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {(['designer', 'developer', 'pm'] as const).map((key) => {
          const item = triad[key];
          const Icon = item.icon;
          const isSelected = selectedRole === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedRole(key)}
              className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex items-center gap-3 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-500/20'
                  : (isDark ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300' : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800')
              }`}
            >
              <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-500/10 text-blue-500'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold">{item.title}</h4>
                <span className={`text-[10px] ${isSelected ? 'text-blue-100' : (isDark ? 'text-slate-400' : 'text-slate-600')}`}>
                  {item.badge}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Triad Synergy Showcase */}
      <div className={`rounded-xl p-5 border shadow-sm ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className={`text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {active.title}
            </h3>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              🎯 {isRTL ? 'نطاق التركيز الأساسي:' : 'Core Focus Area:'} <strong className={isDark ? 'text-slate-200' : 'text-slate-800'}>{active.focus}</strong>
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
            {isRTL ? 'ثلاثي نجاح المنتج (Product Triad)' : 'Product Triad'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h4 className={`text-xs font-black mb-1.5 flex items-center gap-1.5 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
              <RefreshCw className="w-4 h-4" />
              <span>{isRTL ? 'التكامل مع المطورين (Dev Synergy):' : 'Developer Synergy:'}</span>
            </h4>
            <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {active.synergyWithDev || active.synergyWithDesigner}
            </p>
          </div>

          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h4 className={`text-xs font-black mb-1.5 flex items-center gap-1.5 ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
              <Briefcase className="w-4 h-4" />
              <span>{isRTL ? 'التكامل مع مديري المنتجات (PM Synergy):' : 'Product Manager Synergy:'}</span>
            </h4>
            <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {active.synergyWithPm}
            </p>
          </div>
        </div>

        <div className={`pt-3 border-t ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'} flex items-center justify-between text-xs font-bold`}>
          <span>
            🤝 {isRTL ? 'المنتجات العظيمة تنجح عندما يتحد المصمم والمطور ومدير المنتج كفريق واحد' : 'Great products are born at the intersection of User Value, Tech Feasibility & Business Viability'}
          </span>
          <span className={`font-black ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>Shared Ownership</span>
        </div>
      </div>
    </div>
  );
};
