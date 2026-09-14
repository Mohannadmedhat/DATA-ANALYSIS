import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Palette, Search, Layers, Briefcase, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  language?: 'ar' | 'en';
  isDark?: boolean;
}

export const CareerSpectrumVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [selectedRole, setSelectedRole] = useState<'ux' | 'ui' | 'product' | 'researcher'>('ux');

  const roles = {
    ux: {
      title: isRTL ? 'مصمم تجربة المستخدم (UX Designer)' : 'UX Designer',
      icon: Layers,
      badge: isRTL ? 'مهندس المنطق والتدفقات' : 'Structure & Flows',
      color: 'from-blue-500 to-indigo-600',
      question: isRTL ? '«كيف نجعل الوصول للهدف سهلاً وسريعاً ومنطقياً؟»' : '"How do we make reaching the user goal effortless & intuitive?"',
      deliverables: isRTL ? ['User Flows', 'Wireframes (Low/Mid-Fi)', 'Information Architecture', 'Usability Testing Reports'] : ['User Flows', 'Wireframes (Low/Mid-Fi)', 'Information Architecture', 'Usability Testing Reports'],
      dayInLife: isRTL ? 'رسم خرائط التدفق، بناء هياكل الشاشات، اختبار المسارات مع المستخدمين، وتعديل المنطق.' : 'Mapping flows, prototyping low-fi wireframes, testing paths with real users, refining logic.',
      tools: 'Figma, FigJam, Maze, Whimsical'
    },
    ui: {
      title: isRTL ? 'مصمم واجهة المستخدم (UI Designer)' : 'UI Designer',
      icon: Palette,
      badge: isRTL ? 'صانع الشياكة والنظام البصري' : 'Visual & Design Systems',
      color: 'from-purple-500 to-pink-600',
      question: isRTL ? '«كيف تبدو الواجهة فخمة، مريحة للعين، ومتسقة بالكامل؟»' : '"How do we craft a pixel-perfect, aesthetic & cohesive interface?"',
      deliverables: isRTL ? ['High-Fidelity Screens', 'Design Systems & UI Kits', 'Design Tokens', 'Micro-interactions Specs'] : ['High-Fidelity Screens', 'Design Systems & UI Kits', 'Design Tokens', 'Micro-interactions Specs'],
      dayInLife: isRTL ? 'تصميم شاشات Hi-Fi، ضبط الألوان والخطوط، بناء المكونات التفاعلية، والتسليم للمطورين.' : 'Crafting hi-fi layouts, maintaining component libraries, tokenizing colors & typography.',
      tools: 'Figma, ProtoPie, Illustrator, Tokens Studio'
    },
    product: {
      title: isRTL ? 'مصمم المنتج (Product Designer)' : 'Product Designer',
      icon: Briefcase,
      badge: isRTL ? 'المصمم الشامل (End-to-End)' : 'Full-Stack Product Thinker',
      color: 'from-amber-500 to-orange-600',
      question: isRTL ? '«كيف نربط راحة المستخدم بنمو أرباح البزنس ونجاح المنتج؟»' : '"How do we connect delightful UX directly to business metrics?"',
      deliverables: isRTL ? ['End-to-End Prototypes', 'Product Strategy Alignments', 'A/B Testing Experiments', 'Post-Launch Analytics'] : ['End-to-End Prototypes', 'Product Strategy Alignments', 'A/B Testing Experiments', 'Post-Launch Analytics'],
      dayInLife: isRTL ? 'المشاركة في أبحاث السوق، تنفيذ الـ UX والـ UI، متابعة أرقام المبيعات، وتطوير الميزات.' : 'End-to-end execution from problem discovery to UI polish and post-launch conversion tracking.',
      tools: 'Figma, Mixpanel, Jira, FigJam, Notion'
    },
    researcher: {
      title: isRTL ? 'باحث تجربة المستخدم (UX Researcher)' : 'UX Researcher',
      icon: Search,
      badge: isRTL ? 'صوت العميل داخل الشركة' : 'Voice of the User',
      color: 'from-emerald-500 to-teal-600',
      badgeClass: 'text-emerald-500',
      question: isRTL ? '«ما هي الدوافع والمخاوف ونقاط الألم الخفية لدى الناس؟»' : '"What are the unspoken motivations, fears & behavioral pain points?"',
      deliverables: isRTL ? ['User Personas', 'Customer Journey Maps', 'Research Synthesis Docs', 'Empathy Maps'] : ['User Personas', 'Customer Journey Maps', 'Research Synthesis Docs', 'Empathy Maps'],
      dayInLife: isRTL ? 'إجراء مقابلات معمقة، تحليل الاستبيانات، مراقبة سلوك المستخدمين، وتقديم تقارير للإدارة.' : 'Conducting in-depth interviews, designing quantitative surveys, synthesising behavioral themes.',
      tools: 'Dovetail, UserTesting, Lookback, Typeform'
    }
  };

  const active = roles[selectedRole];

  return (
    <div className="w-full space-y-4">
      {/* Role Tabs Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {(['ux', 'ui', 'product', 'researcher'] as const).map((key) => {
          const item = roles[key];
          const Icon = item.icon;
          const isSelected = selectedRole === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedRole(key)}
              className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-500/20'
                  : (isDark ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300' : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700')
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-500/10 text-blue-500'}`}>
                  <Icon className="w-4 h-4" />
                </span>
                <span className={`text-[10px] font-bold ${isSelected ? 'text-blue-100' : (isDark ? 'text-slate-400' : 'text-slate-600')}`}>
                  {item.badge}
                </span>
              </div>
              <h4 className="text-xs font-black">{item.title}</h4>
            </button>
          );
        })}
      </div>

      {/* Role Detailed Matrix Showcase */}
      <div className={`rounded-xl p-5 border shadow-sm ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className={`text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {active.title}
            </h3>
            <p className="text-xs font-semibold text-blue-500 mt-0.5 italic">
              {active.question}
            </p>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20">
            Tools: {active.tools}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          {/* Day in the Life */}
          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h4 className={`text-xs font-black mb-1.5 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
              📅 {isRTL ? 'كيف يقضي يومه في الشركة؟' : 'A Day in the Life:'}
            </h4>
            <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {active.dayInLife}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h4 className={`text-xs font-black mb-1.5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
              📦 {isRTL ? 'أهم المخرجات والملفات (Deliverables):' : 'Key Deliverables:'}
            </h4>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {active.deliverables.map((del, idx) => (
                <span key={idx} className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
                  isDark ? 'bg-slate-900 text-slate-100 border-slate-700' : 'bg-white text-slate-950 border-slate-300 shadow-sm'
                }`}>
                  {del}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={`pt-3 border-t ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'} flex items-center justify-between text-xs font-bold`}>
          <span>
            💡 {isRTL ? 'تقرير NN/g: 78% من مصممي المنتجات يؤدون مهام تجمع بين أكثر من دور حسب حجم الشركة' : 'NN/g Report: 78% of designers cover multiple roles based on team size'}
          </span>
          <span className={`font-mono font-black ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
            Career Role Map
          </span>
        </div>
      </div>
    </div>
  );
};
