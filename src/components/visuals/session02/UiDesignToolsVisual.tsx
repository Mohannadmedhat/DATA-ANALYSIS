import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, CheckCircle2, XCircle, Globe, Monitor, Code, Shield, Cpu, RefreshCw } from 'lucide-react';

interface Props {
  language?: 'ar' | 'en';
  isDark?: boolean;
}

export const UiDesignToolsVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [selectedTool, setSelectedTool] = useState<'figma' | 'sketch' | 'penpot' | 'xd'>('figma');

  const tools = {
    figma: {
      name: 'Figma',
      badge: isRTL ? 'المهيمن عالمياً (85%+ من السوق)' : 'Industry Leader (85%+ Market)',
      logoColor: 'from-purple-600 via-pink-600 to-rose-600',
      tagline: isRTL ? 'بيئة العمل السحابية المتكاملة' : 'The Collaborative Cloud Interface Platform',
      marketShare: '86%',
      osSupport: isRTL ? 'المتصفح + Windows + Mac + Linux' : 'Browser, Windows, Mac, Linux',
      pros: isRTL 
        ? ['Auto Layout فائق المرونة وتصميم متجاوب', 'مكتبة Variables & Design Tokens متقدمة', 'تعاون لحظي (Multiplayer) بدون تعارض ملفات', 'منظومة إضافات (Plugins) ومجتمع هو الأضخم عالمياً']
        : ['Advanced Auto Layout & responsive frames', 'Comprehensive Variables & Design Tokens', 'Real-time multiplayer collaboration', 'Vast global plugin & UI kit ecosystem'],
      cons: isRTL
        ? ['يحتاج اتصالاً بالإنترنت للاستفادة الكاملة من الميزات']
        : ['Requires active internet for seamless multiplayer sync'],
      verdict: isRTL ? 'الأداة الأساسية والمعتمدة في الدبلومة وفي 9 من كل 10 وظائف UI/UX' : 'The primary mandatory tool taught across our diploma'
    },
    sketch: {
      name: 'Sketch',
      badge: isRTL ? 'الرائد التاريخي (Mac Native)' : 'Historical Pioneer (Mac Native)',
      logoColor: 'from-amber-500 to-orange-600',
      tagline: isRTL ? 'التطبيق الأصلي لأجهزة الماك' : 'The Original Vector UI Tool for macOS',
      marketShare: '8%',
      osSupport: 'macOS Only (Native App)',
      pros: isRTL
        ? ['تطبيق أصلي سريع جداً وموفر لبطارية الماك', 'يعمل بكفاءة تامة دون إنترنت (Offline First)', 'دعم ممتاز للـ Plugins المحلية', 'تاريخ عريق واستقرار في الأداء']
        : ['Native ultra-fast macOS engine', 'Full offline capability & local storage', 'Rich native plugin ecosystem', 'Deep legacy in top tech companies'],
      cons: isRTL
        ? ['لا يعمل على Windows أو Linux', 'التعاون السحابي أقل سلاسة من فيجما']
        : ['Restricted to macOS only', 'Cloud sync lags behind Figma'],
      verdict: isRTL ? 'ما زال مستخدماً في بعض البنوك والشركات ذات متطلبات الخصوصية الصارمة' : 'Still used in security-strict offline enterprise setups'
    },
    penpot: {
      name: 'Penpot',
      badge: isRTL ? 'المستقبل مفتوح المصدر' : 'Open Source Alternative',
      logoColor: 'from-emerald-500 to-teal-600',
      tagline: isRTL ? 'أداة الويب مفتوحة المصدر المبنية على معايير الكود' : 'Open Source Web-Standard Design Platform',
      marketShare: '4%',
      osSupport: isRTL ? 'سحابي مفتوح المصدر + إمكانية التثبيت الذاتي (Self-Hosted)' : 'Browser + Self-Hosted Docker',
      pros: isRTL
        ? ['مفتوح المصدر 100% ومجاني بدون قيود تراخيص', 'مبني على Flexbox و CSS Grid لمطابقة كود المبرمجين', 'إمكانية تثبيته على سيرفرات الشركة الخاصة لخصوصية كاملة', 'تصدير SVG قياسي ونظيف بدون تشويه']
        : ['100% Open source and self-hostable', 'True CSS Grid & Flexbox layout engine', 'Absolute data sovereignty & privacy', 'Standard clean SVG output'],
      cons: isRTL
        ? ['مجتمع الإضافات والـ UI Kits لا يزال في مرحلة النمو']
        : ['Plugin ecosystem still growing'],
      verdict: isRTL ? 'الخيار الأفضل للشركات التي تمنع رفع ملفاتها على خوادم خارجية' : 'Ideal for privacy-centric & open-source teams'
    },
    xd: {
      name: 'Adobe XD',
      badge: isRTL ? 'درس تاريخي (توقف التطوير)' : 'Legacy Case Study',
      logoColor: 'from-pink-600 to-rose-700',
      tagline: isRTL ? 'محطة هامة في تطور أدوات الواجهات' : 'Pioneered Voice & Auto-Animate',
      marketShare: '2%',
      osSupport: 'Windows & Mac',
      pros: isRTL
        ? ['أول من قدم الـ Voice Prototyping والـ Auto-Animate المدمج', 'تكامل سهل مع Adobe Creative Cloud']
        : ['Pioneered voice triggers & auto-animate', 'Adobe Creative Cloud integration'],
      cons: isRTL
        ? ['تم إيقاف التطوير النشط له رسمياً من قبل شركة أدوبي']
        : ['Officially in maintenance mode with no active development'],
      verdict: isRTL ? 'درس ملهم: الأدوات تأتي وترحل، لكن المبادئ التصميمية لا تموت' : 'A timeless lesson: tools evolve, core principles endure'
    }
  };

  const active = tools[selectedTool];

  return (
    <div className="w-full space-y-4">
      {/* Tool Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {(Object.keys(tools) as Array<keyof typeof tools>).map((key) => {
          const t = tools[key];
          const isSelected = selectedTool === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedTool(key)}
              className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? (isDark ? 'bg-slate-800 border-blue-500 shadow-md ring-2 ring-blue-500/20' : 'bg-blue-50/90 border-blue-500 shadow-sm ring-2 ring-blue-500/20')
                  : (isDark ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300')
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-xs font-black ${isSelected ? 'text-blue-500' : (isDark ? 'text-white' : 'text-slate-900')}`}>
                  {t.name}
                </span>
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-blue-500 text-white' : (isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600')
                }`}>
                  {t.marketShare}
                </span>
              </div>
              <span className={`text-[10px] line-clamp-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {t.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Feature & Comparison Showcase */}
      <div className={`rounded-xl p-5 border shadow-sm ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${active.logoColor}`} />
              <h3 className={`text-lg sm:text-xl font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {active.name} — {active.tagline}
              </h3>
            </div>
            <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              💻 {isRTL ? 'بيئة التشغيل:' : 'Platform Support:'} <strong className={isDark ? 'text-slate-200' : 'text-slate-800'}>{active.osSupport}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isDark ? 'bg-blue-950/70 text-blue-300 border-blue-800/40' : 'bg-blue-50 text-blue-800 border-blue-200'
            }`}>
              📊 {isRTL ? 'حصة الاستخدام العالمي:' : 'Global Share:'} {active.marketShare}
            </span>
          </div>
        </div>

        {/* Pros and Cons Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className={`p-4 rounded-xl border ${
            isDark ? 'bg-emerald-950/20 border-emerald-900/40' : 'bg-emerald-50/70 border-emerald-200'
          }`}>
            <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isRTL ? 'أهم الميزات ونقاط القوة:' : 'Core Strengths & Capabilities:'}</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {active.pros.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`p-4 rounded-xl border flex flex-col justify-between ${
            isDark ? 'bg-rose-950/20 border-rose-900/40' : 'bg-rose-50/70 border-rose-200'
          }`}>
            <div>
              <h4 className="text-xs font-bold text-rose-600 dark:text-rose-400 mb-2.5 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" />
                <span>{isRTL ? 'القيود ونقاط الضعف:' : 'Limitations & Caveats:'}</span>
              </h4>
              <ul className="space-y-2 text-xs">
                {active.cons.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`mt-3 pt-3 border-t ${isDark ? 'border-rose-900/40' : 'border-rose-200'}`}>
              <span className={`text-[11px] font-bold block ${isDark ? 'text-amber-300' : 'text-amber-800'}`}>
                📌 {isRTL ? 'الخلاصة والقرار المهني:' : 'Industry Verdict:'} {active.verdict}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
