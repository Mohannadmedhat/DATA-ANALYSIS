import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Play, 
  Code2, 
  Presentation, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Cpu,
  Palette,
  Users
} from 'lucide-react';
import { Language } from '../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const FigmaEcosystemVisual: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<number>(0);

  const stages = [
    {
      id: 'figjam',
      icon: Sparkles,
      color: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      name: isRTL ? '01 • FigJam' : '01 • FigJam',
      subtitle: isRTL ? 'الأفكار والبحث والورش' : 'Ideation, Research & Workshops',
      role: isRTL ? 'مرحلة الاستكشاف (Discovery)' : 'Discovery Phase',
      description: isRTL 
        ? 'مساحة وايت بورد سحابية لا نهائية لتنظيم الأفكار وعمل الـ Affinity Mapping ورسم خرائط التدفق (Flowcharts) وورش العمل الجماعية.'
        : 'Infinite collaborative whiteboard for brainstorms, affinity mapping, user flows, and cross-functional workshops.',
      features: isRTL 
        ? ['Sticky Notes ذكية وسريعة', 'ودجات وتصويت حي للورش', 'رسم خرائط التدفق والـ Mind Maps', 'نقل فوري لملفات Figma Design']
        : ['Smart Sticky Notes & Clustering', 'Live Voting & Workshop Timers', 'Flowcharts & Mind Maps', 'One-click copy to Figma Design'],
      deliverable: isRTL ? 'المخرج: خرائط تدفق ورؤى بحثية منظمة' : 'Output: Flowcharts & Synthesized Research'
    },
    {
      id: 'design',
      icon: Palette,
      color: 'from-blue-500 to-indigo-600',
      badgeBg: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      name: isRTL ? '02 • Figma Design' : '02 • Figma Design',
      subtitle: isRTL ? 'الواجهات وأنظمة التصميم' : 'UI Craft & Design Systems',
      role: isRTL ? 'مرحلة البناء والتصميم (Design)' : 'Design Phase',
      description: isRTL 
        ? 'المحرك الأساسي لتصميم الشاشات عالية الدقة وبناء أنظمة التصميم (Design Systems) والـ Auto Layout المتجاوب.'
        : 'The core engine for high-fidelity UI design, scalable design systems, responsive Auto Layout, and component variables.',
      features: isRTL 
        ? ['Auto Layout للشاشات المتجاوبة', 'Components & Variants متقدمة', 'Variables & Design Tokens', 'تعاون حي مع الفريق في نفس اللحظة']
        : ['Responsive Auto Layout', 'Advanced Components & Variants', 'Variables & Token Architecture', 'Real-Time Multiplayer Collaboration'],
      deliverable: isRTL ? 'المخرج: شاشات نهائية ونظام تصميم متكامل' : 'Output: High-Fidelity Responsive Screens'
    },
    {
      id: 'prototype',
      icon: Play,
      color: 'from-purple-500 to-pink-600',
      badgeBg: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      name: isRTL ? '03 • Prototype & Slides' : '03 • Prototype & Slides',
      subtitle: isRTL ? 'النماذج التفاعلية والعروض' : 'Interactive Flows & Slides',
      role: isRTL ? 'مرحلة المحاكاة والإقناع (Experience)' : 'Experience Phase',
      description: isRTL 
        ? 'تحويل الشاشات الثابتة إلى تجربة تفاعلية حية بحركات واقعية وعرض الرؤية التصميمية عبر Figma Slides.'
        : 'Transforming layouts into clickable dynamic prototypes with Smart Animate and presenting narratives via Figma Slides.',
      features: isRTL 
        ? ['ربط الشاشات والتدفقات (Flows)', 'Smart Animate لانتقالات ناعمة', 'Variables للمدخلات الديناميكية', 'Figma Slides لتقديم العروض التفاعلية']
        : ['Clickable Task Flows', 'Smart Animate Easing Curves', 'Variables & Dynamic Inputs', 'Interactive Figma Slides Decks'],
      deliverable: isRTL ? 'المخرج: بروتوتايب حي قابل للاختبار الفوري' : 'Output: Tested Interactive Prototypes'
    },
    {
      id: 'devmode',
      icon: Code2,
      color: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      name: isRTL ? '04 • Dev Mode' : '04 • Dev Mode',
      subtitle: isRTL ? 'تسليم التصميم للمطورين' : 'Developer Handoff & Specs',
      role: isRTL ? 'مرحلة التنفيذ البرمجي (Delivery)' : 'Delivery Phase',
      description: isRTL 
        ? 'مساحة مخصصة للمطورين لفحص الأبعاد وتوليد أكواد CSS و Swift و Compose ومقارنة التعديلات البرمجية بدقة.'
        : 'Dedicated inspection environment for engineers to inspect spacing, generate production-ready code, and track version diffs.',
      features: isRTL 
        ? ['فحص الأبعاد والألوان بنقرة واحدة', 'توليد كود CSS / Swift / Compose', 'تتبع التعديلات الجديدة (Visual Diffs)', 'تكامل مباشر مع VS Code']
        : ['One-Click Spacing Inspection', 'Automated Code Generation', 'Visual Version Diffs', 'Direct VS Code Extension'],
      deliverable: isRTL ? 'المخرج: كود مطابق للتصميم بنسبة 100%' : 'Output: Production-Grade Accurate Code'
    }
  ];

  const current = stages[activeTab];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Interactive Stepper Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {stages.map((st, idx) => {
          const Icon = st.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={st.id}
              onClick={() => setActiveTab(idx)}
              className={`p-2.5 sm:p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                isActive
                  ? isDark
                    ? 'bg-slate-900 border-blue-500 ring-2 ring-blue-500/30 shadow-md'
                    : 'bg-blue-50/90 border-blue-500 ring-2 ring-blue-500/20 shadow-sm'
                  : isDark 
                    ? 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/80' 
                    : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-1.5 rounded-lg bg-gradient-to-br ${st.color} text-white shadow-sm`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${st.badgeBg}`}>
                  {st.role}
                </span>
              </div>
              <div>
                <h4 className={`text-xs font-bold ${
                  isActive 
                    ? isDark ? 'text-white' : 'text-blue-950 font-black' 
                    : isDark ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  {st.name}
                </h4>
                <p className={`text-[10px] font-medium truncate ${
                  isActive 
                    ? isDark ? 'text-blue-300' : 'text-blue-700' 
                    : 'text-slate-500'
                }`}>
                  {st.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Focus Detail Card */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${
        isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'
      } shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-4 items-center`}>
        
        {/* Left 7 cols: Content & Features */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-sm`}>
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-500 uppercase tracking-wider">
                  {current.role}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                  {current.name}: {current.subtitle}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium mt-2">
              {current.description}
            </p>
          </div>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {current.features.map((feat, fIdx) => (
              <div key={fIdx} className={`p-2 rounded-xl border flex items-center gap-2 text-xs font-semibold ${
                isDark ? 'bg-slate-950/60 border-slate-800/80 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Deliverable Highlight */}
          <div className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-between ${
            isDark ? 'bg-blue-950/40 border-blue-800/40 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-900'
          }`}>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              {current.deliverable}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-600 text-white font-mono">
              Figma Unified Canvas
            </span>
          </div>
        </div>

        {/* Right 5 cols: Visual Architecture Pipeline */}
        <div className={`lg:col-span-5 rounded-2xl border p-4 flex flex-col justify-between gap-3 ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-black text-slate-800 dark:text-slate-200">
            <span>{isRTL ? 'مسار العمل الموحد داخل فيجما' : 'Figma Connected Workflow'}</span>
            <span className={`text-xs font-mono font-bold ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Step {activeTab + 1} of 4</span>
          </div>

          {/* Pipeline stages connector */}
          <div className="space-y-2 text-xs font-bold">
            {stages.map((st, idx) => (
              <div 
                key={st.id}
                onClick={() => setActiveTab(idx)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  idx === activeTab
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md font-black'
                    : idx < activeTab
                      ? isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-900'
                      : isDark ? 'bg-slate-900/60 border-slate-800/80 text-slate-300' : 'bg-white/80 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    idx === activeTab ? 'bg-white text-blue-600' : isDark ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800'
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{st.name}</span>
                </div>
                <span className="text-xs opacity-90">{st.role}</span>
              </div>
            ))}
          </div>

          <div className={`pt-2 text-xs text-center font-bold border-t border-slate-200 dark:border-slate-800 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {isRTL 
              ? '💡 ميزة فيجما: لا تحتاج لتصدير أو استيراد ملفات؛ الفريق كله يعمل في نفس الملف!'
              : '💡 Figma Superpower: Zero import/export friction; the entire team collaborates in one shared canvas!'}
          </div>
        </div>
      </div>
    </div>
  );
};
