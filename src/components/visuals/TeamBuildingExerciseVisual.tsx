import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Layers, 
  Palette, 
  Briefcase, 
  Code2, 
  HeartPulse, 
  CheckCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Language } from '../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const TeamBuildingExerciseVisual: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [selectedRole, setSelectedRole] = useState<number>(0);

  const teamRoles = [
    {
      id: 'researcher',
      title: isRTL ? '01 • باحث تجربة المستخدم (UX Researcher)' : '01 • UX Researcher',
      tag: isRTL ? 'صوت المريض والصيدلي' : 'Voice of Patient & Doctor',
      icon: Search,
      color: 'from-amber-500 to-orange-600',
      badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      mission: isRTL 
        ? 'النزول للميدان والتحدث مع المرضى وكبار السن والصيادلة لفهم أسباب الخوف من طلب الدواء أونلاين.'
        : 'Conducting in-depth interviews with elderly patients and pharmacists to uncover fears of ordering medication online.',
      keyTasks: isRTL ? [
        'إجراء 10 مقابلات مع مرضى أمراض مزمنة وصيادلة',
        'بناء Personas لـ (كبير سن يعاني من ضعف النظر، وأم مشغولة)',
        'رسم خريطة رحلة المريض (Patient Journey Map) ونقاط القلق من قراءة الروشتات',
        'اختبار فهم كبار السن لطريقة رفع صورة الروشتة'
      ] : [
        '10 in-depth interviews with chronic patients and licensed pharmacists',
        'Building empathetic personas (Elderly with low vision, Busy parent)',
        'Mapping the patient journey and anxiety points during prescription upload',
        'Testing elderly patient clarity during prescription verification'
      ],
      deliverable: isRTL ? 'المخرج: تقرير رؤى المستخدمين وخريطة رحلة المريض' : 'Deliverable: Research Dossier & Patient Journey Map'
    },
    {
      id: 'ux_designer',
      title: isRTL ? '02 • مصمم تجربة المستخدم (UX Designer)' : '02 • UX Designer',
      tag: isRTL ? 'مهندس التدفق وسرعة الطوارئ' : 'Flow Architect & Emergency UX',
      icon: Layers,
      color: 'from-blue-500 to-indigo-600',
      badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      mission: isRTL 
        ? 'هندسة مسار طلب فائق السهولة يتيح رفع الروشتة في خطوة واحدة واختيار الأدوية البديلة بوضوح.'
        : 'Architecting a frictionless one-step prescription upload flow and alternative medication selection logic.',
      keyTasks: isRTL ? [
        'رسم مسار رفع الروشتة والموافقة على البدائل (User Flow)',
        'بناء Wireframes تركز على الأزرار الضخمة وسهولة القراءة',
        'تصميم مسار تتبع المندوب على الخريطة في الحالات الطارئة',
        'إجراء اختبارات استخدام مع 5 كبار سن وتعديل التدفق'
      ] : [
        'Mapping the 1-step prescription upload and dosage confirmation flow',
        'Drafting low-fi wireframes optimized for massive touch targets',
        'Designing live courier dispatch tracking for emergency deliveries',
        'Running 5 user testing rounds with elderly patients to refine flow'
      ],
      deliverable: isRTL ? 'المخرج: تدفق كامل وهياكل Wireframes مجربة' : 'Deliverable: Validated Wireframes & Clickable Flow'
    },
    {
      id: 'ui_designer',
      title: isRTL ? '03 • مصمم واجهة المستخدم (UI Designer)' : '03 • UI Designer',
      tag: isRTL ? 'الشياكة والأمان والوضوح الطبي' : 'Accessible Medical Polish',
      icon: Palette,
      color: 'from-emerald-500 to-teal-600',
      badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      mission: isRTL 
        ? 'بناء لغة بصرية متناسقة توحي بالأمان والثقة الطبية مع تباين ألوان فائق الوضوح لكبار السن.'
        : 'Crafting an accessible, soothing visual identity instilling clinical trust with WCAG AAA contrast for low vision.',
      keyTasks: isRTL ? [
        'اختيار لوحة ألوان طبية مهدئة (أزرق سماوي + أخضر مريح)',
        'اعتماد خطوط عربية واضحة جداً بأحجام كبيرة ومريحة للعين',
        'تصميم بطاقات الأدوية والجرعات وحالات الطلب (High-Fidelity)',
        'بناء مكتبة نظام التصميم (Design System) والمتغيرات في Figma'
      ] : [
        'Selecting soothing medical color tokens (Clinical Blue & Calming Emerald)',
        'Establishing high-legibility typographic scales for easy scanning',
        'Designing Hi-Fi medication cards, dosages, and status badges',
        'Building scalable Figma component library and token variables'
      ],
      deliverable: isRTL ? 'المخرج: شاشات Hi-Fi ونظام تصميم طبي متكامل' : 'Deliverable: Hi-Fi Screens & Medical Design System'
    },
    {
      id: 'product_lead',
      title: isRTL ? '04 • مصمم المنتج والمطور (Product & Dev)' : '04 • Product Lead & Dev',
      tag: isRTL ? 'البزنس وسرعة التنفيذ البرمجي' : 'Business Strategy & Execution',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-600',
      badgeColor: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      mission: isRTL 
        ? 'ربط تجربة المريض بأهداف البزنس وسرعة التوصيل وتسليم المواصفات عبر Dev Mode لبرمجة التطبيق.'
        : 'Aligning clinical patient value with delivery economics, handing off specs via Dev Mode for zero-bug execution.',
      keyTasks: isRTL ? [
        'ضمان تحقيق وقت توصيل أقل من 45 دقيقة (SLA)',
        'فحص الشاشات وتسليم المواصفات عبر Figma Dev Mode',
        'متابعة أرقام الـ Conversion ومعدل إعادة الطلب بعد الإطلاق',
        'جلسات مراجعة تصميم مشتركة (Design QA) مع المطورين'
      ] : [
        'Ensuring sub-45 minute emergency delivery SLA logistics alignment',
        'Inspecting specs and tokens directly via Figma Dev Mode',
        'Monitoring conversion rates and repeat chronic prescription refills',
        'Conducting joint Design QA sprints with engineering teams'
      ],
      deliverable: isRTL ? 'المخرج: إطلاق تطبيق حي ومطابق للمواصفات' : 'Deliverable: Production App Launch & Unit Economics'
    }
  ];

  const current = teamRoles[selectedRole];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Project Banner */}
      <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-2.5 ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
      } shadow-sm`}>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500 border border-rose-500/20">
            <HeartPulse className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              {isRTL ? 'سيناريو المشروع: تطبيق التوصيل الطبي السريع (MediExpress)' : 'Scenario: MediExpress On-Demand Health App'}
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                Workshop Sim
              </span>
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {isRTL 
                ? 'كيف يتعاون أعضاء فريق الـ UX المختلفون لتحويل فكرة طبية حساسة إلى تطبيق ناجح وموثوق؟'
                : 'How cross-functional UX roles collaborate to transform a critical medical delivery concept into a trusted live app.'}
            </p>
          </div>
        </div>
      </div>

      {/* Role Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {teamRoles.map((role, idx) => {
          const Icon = role.icon;
          const isActive = idx === selectedRole;
          return (
            <button
              key={role.id}
              onClick={() => setSelectedRole(idx)}
              className={`p-2.5 rounded-xl border text-start transition-all cursor-pointer flex items-center gap-2.5 ${
                isActive
                  ? isDark
                    ? 'bg-slate-900 border-blue-500 ring-2 ring-blue-500/30 shadow-md text-white'
                    : 'bg-blue-50/90 border-blue-500 ring-2 ring-blue-500/20 shadow-sm text-blue-950'
                  : isDark 
                    ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-200' 
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-900'
              }`}
            >
              <div className={`p-1.5 rounded-lg bg-gradient-to-br ${role.color} text-white shrink-0 shadow-sm`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="truncate">
                <h5 className={`text-xs font-black truncate ${isActive ? (isDark ? 'text-white' : 'text-blue-950') : isDark ? 'text-slate-100' : 'text-slate-950'}`}>
                  {role.title.split('(')[0]}
                </h5>
                <p className={`text-[10px] font-bold truncate ${isActive ? (isDark ? 'text-blue-200' : 'text-blue-700') : isDark ? 'text-slate-400' : 'text-slate-600'}`}>{role.tag}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Role Deep-Dive Card */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      } shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch`}>
        
        {/* Left 7 cols: Mission & Tasks */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-sm`}>
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-xs font-black px-2.5 py-0.5 rounded-full border shadow-sm ${
                  isDark ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-blue-50 text-blue-950 border-blue-200'
                }`}>
                  {current.tag}
                </span>
                <h3 className={`text-base sm:text-lg font-black mt-1 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  {current.title}
                </h3>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl border mb-3 text-xs sm:text-sm font-semibold leading-relaxed ${
              isDark ? 'bg-slate-950/80 border-slate-800 text-slate-100' : 'bg-blue-50/50 border-blue-200 text-slate-900 shadow-sm'
            }`}>
              <span className={`font-black block mb-1 text-xs ${isDark ? 'text-blue-400' : 'text-blue-800'}`}>
                {isRTL ? '🎯 المهمة الجوهرية في المشروع:' : '🎯 Core Mission in MediExpress:'}
              </span>
              {current.mission}
            </div>

            {/* Key Tasks */}
            <div className="space-y-1.5">
              <span className={`text-xs font-black uppercase tracking-wider block ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {isRTL ? 'قائمة المهام اليومية في هذا السيناريو:' : 'Sprint Tasks for this Scenario:'}
              </span>
              {current.keyTasks.map((task, tIdx) => (
                <div key={tIdx} className={`p-2.5 rounded-lg border flex items-start gap-2.5 text-xs font-bold ${
                  isDark ? 'bg-slate-950/60 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-950 shadow-sm'
                }`}>
                  <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <span className="leading-snug">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverable highlight */}
          <div className={`p-3 rounded-xl border text-xs font-black flex items-center justify-between shadow-sm ${
            isDark ? 'bg-blue-950/60 border-blue-800 text-blue-200' : 'bg-blue-600 text-white border-blue-700'
          }`}>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              {current.deliverable}
            </span>
          </div>
        </div>

        {/* Right 5 cols: Cross-Team Handshake Matrix */}
        <div className={`lg:col-span-5 rounded-2xl border p-4 flex flex-col justify-between gap-3 ${
          isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-black text-slate-800 dark:text-slate-200 flex items-center justify-between">
            <span>{isRTL ? 'نقاط التسليم والتكامل (Handshake)' : 'Cross-Role Integration'}</span>
            <span className={`text-xs font-mono font-bold ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>Teamwork Matrix</span>
          </div>

          <div className="space-y-2 text-xs font-bold">
            <div className={`p-2.5 rounded-xl border ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-950 shadow-sm'
            }`}>
              <span className={`font-black block mb-0.5 ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
                {isRTL ? 'الباحث ➔ مصمم الـ UX:' : 'Researcher ➔ UX Designer:'}
              </span>
              <p className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {isRTL ? 'تسليم بيانات مخاوف المرضى لتحويلها لتدفقات واضحة وسريعة.' : 'Delivering user friction points to shape streamlined wireflows.'}
              </p>
            </div>

            <div className={`p-2.5 rounded-xl border ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-950 shadow-sm'
            }`}>
              <span className={`font-black block mb-0.5 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                {isRTL ? 'مصمم الـ UX ➔ مصمم الـ UI:' : 'UX Designer ➔ UI Designer:'}
              </span>
              <p className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {isRTL ? 'تسليم الـ Wireframes لتحويلها لشاشات متقنة بنظام ألوان طبي.' : 'Handing off wireframes to apply medical color tokens and polish.'}
              </p>
            </div>

            <div className={`p-2.5 rounded-xl border ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-950 shadow-sm'
            }`}>
              <span className={`font-black block mb-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                {isRTL ? 'مصمم الـ UI ➔ المطور والـ PM:' : 'UI Designer ➔ Dev & PM:'}
              </span>
              <p className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {isRTL ? 'تسليم المواصفات عبر Dev Mode للبرمجة ومتابعة سرعة التوصيل.' : 'Handoff via Dev Mode to code the app and ensure SLAs are met.'}
              </p>
            </div>
          </div>

          <div className={`pt-2 text-xs text-center font-black border-t border-slate-200 dark:border-slate-800 ${
            isDark ? 'text-blue-300' : 'text-blue-700'
          }`}>
            {isRTL 
              ? '✨ النتيجة: تطبيق آمن وسريع يثق به المريض وتنجح به الشركة!'
              : '✨ Outcome: A safe, rapid healthcare app patients trust and rely on!'}
          </div>
        </div>
      </div>
    </div>
  );
};
