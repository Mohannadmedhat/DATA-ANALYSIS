import React, { useState } from 'react';
import { 
  Search, 
  Lightbulb, 
  Layers, 
  Palette, 
  Play, 
  Code2, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const ToolkitPipelineVisual: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const pipeline = [
    {
      id: 'discovery',
      number: '01',
      title: isRTL ? 'استكشاف وبحث (Discovery)' : 'Discovery & Research',
      subtitle: isRTL ? 'فهم المستخدم والمشكلة' : 'User & Problem Discovery',
      icon: Search,
      color: 'from-amber-500 to-orange-600',
      badge: 'Research Phase',
      tools: ['Typeform', 'Google Forms', 'Maze', 'Lookback', 'Dovetail'],
      inputs: isRTL ? 'المدخلات: فرضيات العمل ومشاكل العملاء' : 'Inputs: Business assumptions & user complaints',
      outputs: isRTL ? 'المخرجات: مقابلات، إحصائيات، Personas، ونقاط الألم' : 'Outputs: User personas, pain points & survey data',
      keyRule: isRTL ? 'لا تبدأ بالرسم قبل أن تفهم من هو المستخدم وما هي مشكلته الحقيقية.' : 'Never jump into UI before verifying who the user is and what hurts them.'
    },
    {
      id: 'ideation',
      number: '02',
      title: isRTL ? 'عصف وتخطيط (Ideation)' : 'Ideation & Flow Mapping',
      subtitle: isRTL ? 'تنظيم الأفكار وتدفق الشاشات' : 'Affinity & Flowcharts',
      icon: Lightbulb,
      color: 'from-yellow-500 to-amber-600',
      badge: 'Structure Phase',
      tools: ['FigJam', 'Miro', 'Whimsical', 'Mural'],
      inputs: isRTL ? 'المدخلات: رؤى البحث وفرص التحسين' : 'Inputs: Research insights & user needs',
      outputs: isRTL ? 'المخرجات: خرائط تدفق (User Flows) ومخططات معمارية' : 'Outputs: User Flows, Journey Maps & Information Architecture',
      keyRule: isRTL ? 'الوايت بورد هو المكان الأسرع والأرخص لتجربة 10 أفكار مختلفة في ساعة واحدة.' : 'Whiteboards are the fastest sandbox to validate 10 concepts in one hour.'
    },
    {
      id: 'wireframing',
      number: '03',
      title: isRTL ? 'هيكلة مبدئية (Wireframing)' : 'Low-Fi Wireframing',
      subtitle: isRTL ? 'توزيع العناصر والمحتوى' : 'Layouts & Architecture',
      icon: Layers,
      color: 'from-blue-500 to-cyan-600',
      badge: 'Layout Phase',
      tools: ['Figma', 'FigJam', 'Paper & Pen', 'Whimsical'],
      inputs: isRTL ? 'المدخلات: خرائط التدفق وقوائم المحتوى' : 'Inputs: User flows & content requirements',
      outputs: isRTL ? 'المخرجات: شاشات هيكلية رمادية بدون ألوان أو صور' : 'Outputs: Low-fidelity grayscale wireframes & hierarchy',
      keyRule: isRTL ? 'الهيكل يركز على الوظيفة والسهولة بدون أن يتشتت العميل بالألوان.' : 'Wireframes validate layout and hierarchy without color distractions.'
    },
    {
      id: 'ui_design',
      number: '04',
      title: isRTL ? 'تصميم الواجهات (UI Design)' : 'High-Fidelity UI Design',
      subtitle: isRTL ? 'الشياكة وأنظمة التصميم' : 'Design Systems & Tokens',
      icon: Palette,
      color: 'from-indigo-500 to-purple-600',
      badge: 'Visual Craft',
      tools: [isRTL ? 'Figma (الأساس)' : 'Figma (Core)', 'Penpot', 'Sketch'],
      inputs: isRTL ? 'المدخلات: هياكل الـ Wireframes المعتمدة' : 'Inputs: Approved wireframes & brand identity',
      outputs: isRTL ? 'المخرجات: شاشات Hi-Fi متكاملة ومكتبة مكونات متجاوبة' : 'Outputs: High-fidelity screens, tokens, responsive Auto Layout',
      keyRule: isRTL ? 'التسلسل الهرمي وتناغم الألوان يمنحان العميل ثقة وفخامة فورية.' : 'Harmonious typography and spacing create immediate user trust.'
    },
    {
      id: 'prototyping',
      number: '05',
      title: isRTL ? 'النماذج التفاعلية (Prototyping)' : 'Interactive Prototyping',
      subtitle: isRTL ? 'محاكاة الحركة والتجربة الحية' : 'Micro-interactions & States',
      icon: Play,
      color: 'from-pink-500 to-rose-600',
      badge: 'Interaction Phase',
      tools: ['Figma Prototype', 'ProtoPie', 'Framer', 'Principle'],
      inputs: isRTL ? 'المدخلات: شاشات التصميم عالية الدقة' : 'Inputs: High-fidelity UI mockups',
      outputs: isRTL ? 'المخرجات: بروتوتايب تفاعلي حي يحاكي التطبيق الحقيقي' : 'Outputs: Clickable prototypes with realistic logic & sensors',
      keyRule: isRTL ? 'إذا كانت الصورة بألف كلمة، فالبروتوتايب الحي بألف اجتماع!' : 'If a picture is worth 1,000 words, an interactive prototype is worth 1,000 meetings.'
    },
    {
      id: 'testing_handoff',
      number: '06',
      title: isRTL ? 'الاختبار والتسليم (Testing & Handoff)' : 'Testing & Dev Handoff',
      subtitle: isRTL ? 'التحقق البرمجي وسهولة الاستخدام' : 'Validation & Delivery',
      icon: Code2,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Delivery Phase',
      tools: ['Figma Dev Mode', 'Maze', 'Hotjar', 'Jira', 'Notion'],
      inputs: isRTL ? 'المدخلات: البروتوتايب المجرب مع المستخدمين' : 'Inputs: Tested prototypes & design specs',
      outputs: isRTL ? 'المخرجات: تقارير اختبارات الاستخدام وأكواد ومواصفات للمطورين' : 'Outputs: Usability analytics, CSS/Swift specs & ticket tracking',
      keyRule: isRTL ? 'التسليم الدقيق يضمن خروج التطبيق المبرمج بنفس جودة تصميم فيجما 100%.' : 'Flawless handoff guarantees production code matches design vision perfectly.'
    }
  ];

  const current = pipeline[selectedStage];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Interactive Pipeline Track */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {pipeline.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = idx === selectedStage;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(idx)}
              className={`p-2.5 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between gap-2 relative overflow-hidden ${
                isActive
                  ? (isDark ? 'bg-slate-800 border-blue-500 ring-2 ring-blue-500/40 shadow-md' : 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/30 shadow-sm')
                  : (isDark ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300')
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-blue-600 text-white' : (isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-800')
                }`}>
                  {stage.number}
                </span>
                <div className={`p-1.5 rounded-lg bg-gradient-to-br ${stage.color} text-white shadow-sm`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <h5 className={`text-[11px] font-black leading-tight ${
                  isActive 
                    ? (isDark ? 'text-blue-400' : 'text-blue-900') 
                    : (isDark ? 'text-slate-200' : 'text-slate-800')
                }`}>
                  {stage.title.split('(')[0]}
                </h5>
                <p className={`text-[10px] font-bold truncate mt-0.5 ${
                  isActive ? (isDark ? 'text-slate-300' : 'text-blue-700') : (isDark ? 'text-slate-400' : 'text-slate-500')
                }`}>
                  {stage.subtitle}
                </p>
              </div>

              {isActive && (
                <div className="absolute bottom-0 inset-x-0 h-1 bg-blue-600" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Detailed Spotlight Box */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${
        isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-950'
      } shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch`}>
        
        {/* Left 7 cols: Stage Details */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-md`}>
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
                  Stage {current.number} • {current.badge}
                </span>
                <h3 className="text-base sm:text-lg font-black">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Inputs & Outputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3">
              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              } text-xs`}>
                <span className="font-extrabold text-amber-600 dark:text-amber-400 block mb-1">
                  📥 {isRTL ? 'المدخلات (What goes in):' : 'Inputs:'}
                </span>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>{current.inputs}</p>
              </div>

              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              } text-xs`}>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400 block mb-1">
                  📤 {isRTL ? 'المخرجات (What comes out):' : 'Outputs:'}
                </span>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>{current.outputs}</p>
              </div>
            </div>

            {/* Golden Rule Callout */}
            <div className={`p-3.5 rounded-xl border text-xs sm:text-sm font-bold leading-relaxed ${
              isDark ? 'bg-blue-950/40 border-blue-800/60 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-950'
            }`}>
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-extrabold">{isRTL ? 'القاعدة الذهبية لهذه المرحلة:' : 'Golden Rule:'}</span>
              </div>
              <p>{current.keyRule}</p>
            </div>
          </div>
        </div>

        {/* Right 5 cols: Tool Ecosystem for this phase */}
        <div className={`lg:col-span-5 rounded-xl border p-4 flex flex-col justify-between gap-3 ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <div className="pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>{isRTL ? 'الأدوات المعتمدة في هذه المرحلة' : 'Standard Industry Tools'}</span>
              <span className="text-[10px] text-blue-600 dark:text-blue-400 font-mono font-bold">Toolkit</span>
            </div>

            <div className="space-y-1.5 mt-3">
              {current.tools.map((tool, tIdx) => (
                <div key={tIdx} className={`p-2.5 rounded-lg border flex items-center justify-between text-xs font-extrabold ${
                  isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-950 shadow-sm'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{tool}</span>
                  </div>
                  <span className={`text-[10px] font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Verified Stack</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 text-[11px] text-slate-600 dark:text-slate-400 text-center font-bold border-t border-slate-200 dark:border-slate-800">
            {isRTL 
              ? '💡 الأداة وسيلة لتنفيذ المرحلة، والتفكير المنهجي هو ما يضمن نجاح المنتج.'
              : '💡 Tools execute the phase, but systematic design thinking guarantees success.'}
          </div>
        </div>
      </div>
    </div>
  );
};
