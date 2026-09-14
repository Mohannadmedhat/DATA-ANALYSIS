import React, { useState } from 'react';
import { 
  Heart, 
  Brain, 
  Palette, 
  Briefcase, 
  Sparkles, 
  CheckCircle2,
  Award
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const DesignerSkillWheelVisual: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [activeQuadrant, setActiveQuadrant] = useState<number>(0);

  const pillars = [
    {
      id: 'human',
      title: isRTL ? '01 • المهارات الإنسانية (Human Skills)' : '01 • Human Skills',
      subtitle: isRTL ? 'التعاطف، الفضول، والاستماع الفعال' : 'Empathy, Curiosity & Active Listening',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
      badgeBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
      description: isRTL 
        ? 'القدرة على وضع نفسك مكان المستخدم، الاستماع بدون دفاعية، والفضول الدائم لاكتشاف الدوافع النفسية والسلوكية.'
        : 'Stepping into user shoes, active non-defensive listening, and genuine curiosity regarding human motivations.',
      traits: isRTL ? [
        'التعاطف العميق (Empathy: You ≠ User)',
        'الفضول وسؤال "لماذا خمس مرات" (5 Whys)',
        'الاستماع الفعال وفصل الذات عن التصميم (Ego-Free)',
        'تقبل النقد البناء والتعاون بروح الفريق'
      ] : [
        'Deep User Empathy (You ≠ User)',
        'Relentless Curiosity & The 5 Whys',
        'Active Listening & Ego-Free Mentality',
        'Receptivity to Design Critiques'
      ],
      marketValue: isRTL ? 'تجعلك محبوباً من الفريق وقادراً على فهم أعمق المشاكل البشرية.' : 'Fosters team psychological safety and uncovers authentic human friction.'
    },
    {
      id: 'analytical',
      title: isRTL ? '02 • المهارات التحليلية (Analytical Skills)' : '02 • Analytical Skills',
      subtitle: isRTL ? 'التفكير النقدي، وتلخيص البحث، وحل المشكلات' : 'Critical Thinking & Research Synthesis',
      icon: Brain,
      color: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      description: isRTL 
        ? 'تفكيك المشاكل المعقدة، ربط الأسباب بالنتائج، قراءة البيانات السلوكية، وعدم قبول الافتراضات دون أدلة حقيقية.'
        : 'Deconstructing complexity, connecting causes to effects, reading behavioral data, and demanding empirical evidence.',
      traits: isRTL ? [
        'التفكير النقدي وطرح الأسئلة الخمسة (Critical Thinking)',
        'منهجية حل المشكلات (Problem ➔ Evidence ➔ Test)',
        'تحليل بيانات الاستخدام وربطها بنقاط الألم (Synthesis)',
        'تصميم حلول جذرية تمنع تكرار الأخطاء'
      ] : [
        'Critical Thinking & Diagnostic Inquiry',
        'Structured Problem Solving Pipeline',
        'Qualitative & Quantitative Synthesis',
        'Root-Cause Solution Architecture'
      ],
      marketValue: isRTL ? 'تحميك من اتخاذ قرارات عشوائية وتثبت مصداقيتك أمام الإدارة.' : 'Prevents subjective decisions and establishes rock-solid credibility.'
    },
    {
      id: 'design',
      title: isRTL ? '03 • المهارات الحرفية (Design Skills)' : '03 • Design & Visual Craft',
      subtitle: isRTL ? 'الواجهات، التسلسل الهرمي، والأنظمة التفاعلية' : 'UI Hierarchy & Design Systems',
      icon: Palette,
      color: 'from-blue-500 to-indigo-600',
      badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      description: isRTL 
        ? 'التمكن الحرفي من أدوات التصميم (Figma)، إتقان التسلسل الهرمي، شبكة المسافات (8pt Grid)، وبناء أنظمة التصميم.'
        : 'Mastery over design tools, Auto Layout, spatial grids (8pt), typography scales, and scalable component tokens.',
      traits: isRTL ? [
        'التسلسل الهرمي وتناغم الألوان (Visual Hierarchy)',
        'هندسة أنظمة التصميم والمتغيرات (Design Tokens)',
        'بناء النماذج التفاعلية الحركية (Smart Animate & Logic)',
        'مراعاة إمكانية الوصول وتباين الألوان (WCAG Standards)'
      ] : [
        'Visual Hierarchy & Balanced Color Systems',
        'Scalable Design Tokens & Variables',
        'Dynamic Motion & Interactive Prototypes',
        'WCAG Accessibility & Touch Targets'
      ],
      marketValue: isRTL ? 'تحول الأفكار إلى شاشات مريحة وفاخرة تسر العين وتسهل الاستخدام.' : 'Transforms logic into breathtaking, accessible, luxury interfaces.'
    },
    {
      id: 'business',
      title: isRTL ? '04 • مهارات البزنس (Business Skills)' : '04 • Business & ROI Acumen',
      subtitle: isRTL ? 'أهداف العمل، العائد الاستثماري، والتواصل الإقناعي' : 'Business Goals, ROI & Negotiation',
      icon: Briefcase,
      color: 'from-emerald-500 to-teal-600',
      badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      description: isRTL 
        ? 'فهم أهداف الشركة المالية ومقاييس النجاح (Conversion & Churn) والقدرة على إقناع المديرين والمستثمرين بالحلول.'
        : 'Understanding business models, monetization funnels, unit economics, and persuasively defending design ROI.',
      traits: isRTL ? [
        'ربط قرارات التصميم بمؤشرات الأداء (KPIs & Metrics)',
        'ترتيب الأولويات وإدارة نطاق العمل (Prioritization)',
        'سرد القصة وتبرير القرارات بالمنطق (Stakeholder Alignment)',
        'التفاوض الإيجابي مع مديري المنتجات والمطورين'
      ] : [
        'Connecting Design Choices to Business KPIs',
        'MVP Scope Prioritization & Timelines',
        'Persuasive Stakeholder Storytelling',
        'Cross-Functional Negotiation & Alignment'
      ],
      marketValue: isRTL ? 'هي الفارق بين مصمم شاشات عادي ومصمم منتجات يقود إستراتيجية الشركة.' : 'The exact differentiator between junior screen drawers and strategic product leads.'
    }
  ];

  const current = pillars[activeQuadrant];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* 4 Quadrants Pill Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {pillars.map((pil, idx) => {
          const Icon = pil.icon;
          const isActive = idx === activeQuadrant;
          return (
            <button
              key={pil.id}
              onClick={() => setActiveQuadrant(idx)}
              className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex items-center gap-2.5 ${
                isActive
                  ? (isDark ? 'bg-slate-800 border-blue-500 ring-2 ring-blue-500/40 shadow-md' : 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/30 shadow-sm')
                  : (isDark ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300')
              }`}
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br ${pil.color} text-white shrink-0 shadow-sm`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="truncate">
                <h5 className={`text-xs font-black truncate ${
                  isActive ? (isDark ? 'text-blue-400' : 'text-blue-950') : (isDark ? 'text-slate-200' : 'text-slate-800')
                }`}>
                  {pil.title.split('(')[0]}
                </h5>
                <p className={`text-[10px] font-bold truncate ${
                  isActive ? (isDark ? 'text-slate-300' : 'text-blue-700') : (isDark ? 'text-slate-400' : 'text-slate-500')
                }`}>{pil.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Focus Detail Card */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${
        isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-950'
      } shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch`}>
        
        {/* Left 7 cols: Pillar Overview & Traits */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-md`}>
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border font-mono ${current.badgeBg}`}>
                  Pillar {activeQuadrant + 1} of 4
                </span>
                <h3 className="text-base sm:text-lg font-black mt-0.5">
                  {current.title}
                </h3>
              </div>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed font-semibold mt-2 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {current.description}
            </p>

            {/* Traits Checklist */}
            <div className="space-y-1.5 mt-3">
              <span className={`text-[11px] font-black uppercase tracking-wider block ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {isRTL ? 'أهم السلوكيات والمهارات العملية في هذا الركن:' : 'Core Competencies:'}
              </span>
              {current.traits.map((trait, tIdx) => (
                <div key={tIdx} className={`p-2 rounded-lg border flex items-center gap-2 text-xs font-bold ${
                  isDark ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 5 cols: Market Impact Box */}
        <div className={`lg:col-span-5 rounded-xl border p-4 flex flex-col justify-between gap-3 ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <div className="pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>{isRTL ? 'الأثر في سوق العمل والترقيات' : 'Career & Market Impact'}</span>
              <Award className="w-4 h-4 text-amber-500" />
            </div>

            <div className={`p-3.5 rounded-xl border my-3 text-xs sm:text-sm leading-relaxed font-semibold ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-950 shadow-sm'
            }`}>
              <span className={`font-black block mb-1 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                {isRTL ? '💎 القيمة التنافسية المضافة:' : '💎 Competitive Edge:'}
              </span>
              <p>{current.marketValue}</p>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-slate-600 dark:text-slate-400 text-center font-bold border-t border-slate-200 dark:border-slate-800">
            {isRTL 
              ? '💡 المصمم السوبر ستار هو من يوازن بين الأركان الأربعة معاً.'
              : '💡 Elite designers balance all 4 pillars seamlessly.'}
          </div>
        </div>
      </div>
    </div>
  );
};
