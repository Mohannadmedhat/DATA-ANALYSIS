import React, { useState } from 'react';
import { 
  Sliders, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Search, 
  Palette, 
  Play, 
  Code2, 
  FileText,
  ArrowRight
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const ToolMatrixInteractive: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [selectedTask, setSelectedTask] = useState<number>(0);

  const tasks = [
    {
      step: '01',
      title: isRTL ? 'عصف ذهني وفرز أفكار' : 'Brainstorming & Affinity',
      tag: 'Ideation & Canvas',
      task: isRTL ? '1. عصف ذهني وفرز أفكار (Brainstorming & Affinity)' : '1. Brainstorming & Affinity Mapping',
      icon: Layers,
      color: 'from-amber-500 to-orange-600',
      recommendedTools: ['FigJam', 'Miro', 'Mural'],
      why: isRTL ? 'مساحات مفتوحة وسريعة تتيح ترتيب الأفكار بدون الانشغال بالبكسل والتفاصيل البصرية المبكرة.' : 'Infinite freeform canvases allowing rapid idea clustering without premature pixel obsession.',
      tip: isRTL ? '💡 لا تفتح Figma Design في هذه المرحلة! ابدأ بـ Sticky Notes في FigJam أولاً.' : '💡 Never open Figma Design here! Use FigJam sticky notes to explore ideas cheaply.'
    },
    {
      step: '02',
      title: isRTL ? 'استبيانات وأبحاث' : 'Surveys & Research',
      tag: 'Qual & Quant Data',
      task: isRTL ? '2. استبيانات وأبحاث ميدانية (Surveys & Interviews)' : '2. Surveys & User Research',
      icon: Search,
      color: 'from-sky-500 to-blue-600',
      recommendedTools: ['Typeform', 'Google Forms', 'Lookback', 'Dovetail'],
      why: isRTL ? 'جمع بيانات كمية وكيفية حقيقية من الناس والابتعاد تماماً عن التخمينات والافتراضات الشخصية.' : 'Gathers empirical qualitative & quantitative evidence, stripping away biased assumptions.',
      tip: isRTL ? '💡 Typeform يرفع معدل إكمال الاستبيان بنسبة 40% مقارنة بالنماذج التقليدية.' : '💡 Typeform’s conversational UI boosts completion rates by up to 40%.'
    },
    {
      step: '03',
      title: isRTL ? 'تصميم واجهات ومكونات' : 'UI & Design Systems',
      tag: 'Components & Tokens',
      task: isRTL ? '3. تصميم واجهات ومكونات (UI & Design Systems)' : '3. UI Design & Design Systems',
      icon: Palette,
      color: 'from-indigo-500 to-purple-600',
      recommendedTools: [isRTL ? 'Figma (المعيار الأساسي)' : 'Figma (Industry Standard)', 'Penpot'],
      why: isRTL ? 'بناء شاشات متجاوبة (Auto Layout)، مكتبات مكونات مرنة، وإدارة متغيرات الألوان والخطوط.' : 'Building scalable component libraries, tokenized variables, and responsive Auto Layout.',
      tip: isRTL ? '💡 Figma يسيطر على أكثر من 85% من سوق العمل اليوم عالمياً وهو الأداة الأساسية للدبلومة.' : '💡 Figma commands 85%+ market share globally and is our primary diploma tool.'
    },
    {
      step: '04',
      title: isRTL ? 'نماذج تفاعلية وحساسات' : 'Advanced Prototyping',
      tag: 'Logic & Micro-interactions',
      task: isRTL ? '4. نماذج تفاعلية وحساسات (Advanced Prototyping)' : '4. Advanced Prototyping & Logic',
      icon: Play,
      color: 'from-pink-500 to-rose-600',
      recommendedTools: ['Figma Prototype', 'ProtoPie', 'Framer'],
      why: isRTL ? 'محاكاة حساسات الموبايل، المتغيرات الحسابية، واختبار الشعور الحقيقي للشاشات قبل البرمجة.' : 'Simulating mobile hardware sensors, dynamic formulas, and realistic physics.',
      tip: isRTL ? '💡 Figma Prototype يكفي لـ 90% من المهام؛ ProtoPie للتجارب المعقدة مثل تطبيقات السيارات.' : '💡 Figma Prototype handles 90% of tasks; ProtoPie is for complex automotive/IoT logic.'
    },
    {
      step: '05',
      title: isRTL ? 'اختبار سهولة الاستخدام' : 'Usability Testing',
      tag: 'Heatmaps & Analytics',
      task: isRTL ? '5. اختبار سهولة الاستخدام (Usability Testing)' : '5. Usability Testing & Heatmaps',
      icon: Sliders,
      color: 'from-amber-500 to-yellow-600',
      recommendedTools: ['Maze', 'Useberry', 'Hotjar', 'Clarity'],
      why: isRTL ? 'قياس نسبة نجاح المهام، خرائط النقرات وسوء النقرات، ومراقبة سلوك المستخدم الحقيقي بالأرقام.' : 'Measuring direct task completion rates, heatmaps, and identifying rage clicks.',
      tip: isRTL ? '💡 اختبار 5 مستخدمين فقط في Maze يكشف أكثر من 80% من مشاكل الاستخدام القاتلة!' : '💡 Testing just 5 users in Maze uncovers 80%+ of usability bottlenecks!'
    },
    {
      step: '06',
      title: isRTL ? 'تسليم المطورين والتوثيق' : 'Developer Handoff',
      tag: 'Code Specs & Tokens',
      task: isRTL ? '6. تسليم المطورين والتوثيق (Dev Handoff)' : '6. Developer Handoff & Specs',
      icon: Code2,
      color: 'from-emerald-500 to-teal-600',
      recommendedTools: ['Figma Dev Mode', 'Jira', 'Notion'],
      why: isRTL ? 'توليد المقاسات والأكواد ومقارنة التعديلات البرمجية لضمان تنفيذ التصميم بدقة 100%.' : 'Generates automated CSS/Swift specs and version diffs for pixel-perfect code delivery.',
      tip: isRTL ? '💡 Dev Mode يلغي تماماً الحاجة لملفات PDF للمواصفات ويوفر ساعات من الشرح للمطور.' : '💡 Dev Mode eliminates spec PDFs and saves countless hours explaining layout rules.'
    }
  ];

  const current = tasks[selectedTask];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Modern Workflow Task Selector Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {tasks.map((t, idx) => {
          const Icon = t.icon;
          const isActive = idx === selectedTask;
          return (
            <button
              key={idx}
              onClick={() => setSelectedTask(idx)}
              className={`relative p-3 rounded-2xl border text-start transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden group ${
                isActive
                  ? isDark
                    ? 'bg-slate-900 border-blue-500/80 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/40 translate-y-[-2px]'
                    : 'bg-white border-blue-500 shadow-md ring-1 ring-blue-500/30 translate-y-[-2px]'
                  : isDark 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90' 
                    : 'bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white'
              }`}
            >
              {/* Active top glow indicator */}
              {isActive && (
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${t.color}`} />
              )}

              {/* Card Header: Icon + Step Badge */}
              <div className="flex items-center justify-between w-full mb-2">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-br ${t.color} text-white shadow-sm shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : isDark 
                      ? 'bg-slate-800 text-slate-400 group-hover:text-slate-200' 
                      : 'bg-slate-200 text-slate-700'
                }`}>
                  {t.step}
                </span>
              </div>

              {/* Card Body: Title & Category Sub-label */}
              <div>
                <h5 className={`text-xs font-black leading-snug ${
                  isActive 
                    ? isDark ? 'text-white' : 'text-blue-950 font-black' 
                    : isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  {t.title}
                </h5>
                <span className={`text-[10px] font-medium block mt-0.5 truncate ${
                  isActive 
                    ? isDark ? 'text-blue-300' : 'text-blue-600 font-semibold' 
                    : isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {t.tag}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Focus Detail */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      } shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch`}>
        
        {/* Left 7 cols: Recommendation Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-sm`}>
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider font-mono ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                  Task Recommendation Matrix
                </span>
                <h3 className={`text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  {current.task}
                </h3>
              </div>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed font-semibold mt-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {current.why}
            </p>

            {/* Pro Tip Box */}
            <div className={`mt-3 p-3.5 rounded-xl border text-xs font-bold leading-relaxed ${
              isDark ? 'bg-blue-950/60 border-blue-800 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-950 shadow-sm'
            }`}>
              <div className="flex items-center gap-1.5 font-black mb-1 text-blue-600 dark:text-blue-400">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>{isRTL ? 'نصيحة المصمم المحترف:' : 'Pro Designer Tip:'}</span>
              </div>
              <p>{current.tip}</p>
            </div>
          </div>
        </div>

        {/* Right 5 cols: Recommended Tools Stack */}
        <div className={`lg:col-span-5 rounded-2xl border p-4 flex flex-col justify-between gap-3 ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <div className="pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-black text-slate-800 dark:text-slate-200 flex items-center justify-between">
              <span>{isRTL ? 'الأدوات المقترحة لهذه المهمة' : 'Recommended Stack'}</span>
              <span className={`text-xs font-mono font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>Best Match</span>
            </div>

            <div className="space-y-2 mt-3">
              {current.recommendedTools.map((tool, tIdx) => (
                <div key={tIdx} className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-black ${
                  isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-950 shadow-sm'
                }`}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{tool}</span>
                  </div>
                  <span className={`text-[10px] font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Optimal</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`pt-2 text-xs text-center font-black border-t border-slate-200 dark:border-slate-800 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {isRTL ? 'القاعدة: الأداة تتبع المشكلة وليس العكس!' : 'Rule: The tool follows the problem, never the reverse!'}
          </div>
        </div>
      </div>
    </div>
  );
};
