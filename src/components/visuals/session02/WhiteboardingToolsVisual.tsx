import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StickyNote, Sparkles, CheckCircle2, Layers, MousePointer, Plus, Play, Shield, Zap } from 'lucide-react';

interface Props {
  language?: 'ar' | 'en';
  isDark?: boolean;
}

export const WhiteboardingToolsVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<'figjam' | 'miro' | 'whimsical'>('figjam');
  const [stickyList, setStickyList] = useState([
    { id: 1, text: isRTL ? 'إلغاء رسوم الشحن عند الوصول لـ 300 ج.م' : 'Free shipping over $50', color: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/80 dark:text-amber-200 dark:border-amber-800', author: 'UX Researcher', votes: 8 },
    { id: 2, text: isRTL ? 'إضافة زر الدفع بـ Apple Pay / Google Pay' : 'Add Apple Pay / Google Pay 1-click', color: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-200 dark:border-emerald-800', author: 'Product Designer', votes: 12 },
    { id: 3, text: isRTL ? 'حاسبة وقت التوصيل في صفحة السلة' : 'Delivery time calculator on cart', color: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/80 dark:text-sky-200 dark:border-sky-800', author: 'UI Designer', votes: 6 },
    { id: 4, text: isRTL ? 'تحسين وضوح سياسة الاسترجاع السريع' : 'Clarify return & exchange policy', color: 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/80 dark:text-rose-200 dark:border-rose-800', author: 'UX Writer', votes: 9 },
  ]);

  const handleVote = (id: number) => {
    setStickyList(prev => prev.map(s => s.id === id ? { ...s, votes: s.votes + 1 } : s));
  };

  const toolsData = {
    figjam: {
      name: isRTL ? 'FigJam (الأداة الأسرع لفرق التصميم)' : 'FigJam (Designers First)',
      badge: isRTL ? 'الأفضل لفرق التصميم' : 'Best for Design Teams',
      color: 'from-purple-500 to-indigo-600',
      description: isRTL 
        ? 'الرفيق المتكامل لـ Figma؛ ينقل الملاحظات والأفكار مباشرة إلى ملف التصميم بدون أي فجوات، مع ودجات وتصويت وتوقيت حي للورش.'
        : 'Native companion to Figma. Directly paste sticky notes into Figma canvas, built-in voting widgets, timers, and multiplayer cursor chat.',
      strengths: isRTL 
        ? ['تكامل فوري بدون وسيط مع ملفات Figma', 'تصويت ومؤقت حي لورش الـ Design Sprint', 'Cursor Chat للحديث الصوتي والكتابي السريع', 'مكتبة ودجات وقوالب تفاعلية لا نهائية']
        : ['1-click copy into Figma Design files', 'Live voting & workshop timers', 'Multiplayer cursor chat & audio', 'Rich interactive widgets library'],
      bestFor: isRTL ? 'ورش التفكير التصميمي والـ Brainstorming السريع' : 'Design thinking workshops & sprint ideation'
    },
    miro: {
      name: isRTL ? 'Miro (عملاق المؤسسات والشركات الضخمة)' : 'Miro (Enterprise Powerhouse)',
      badge: isRTL ? 'المعيار المؤسسي' : 'Enterprise Standard',
      color: 'from-amber-500 to-yellow-600',
      description: isRTL
        ? 'المنصة الأقوى للشركات الضخمة التي تضم مئات الفرق؛ يدعم خرائط رحلة العميل المعقدة والربط المباشر بأنظمة Jira و Confluence.'
        : 'The de-facto enterprise canvas for large cross-functional teams with advanced integrations for Jira, Azure, and product roadmaps.',
      strengths: isRTL
        ? ['ربط عميق مع أدوات إدارة المشاريع المؤسسية (Jira/Azure)', 'قوالب عملاقة لخرائط الطريق والـ Service Blueprints', 'تحكم متقدم في الصلاحيات وأمان البيانات المؤسسية', 'مساحات لا نهائية تدعم آلاف المشاركين معاً']
        : ['Deep Jira/Azure DevOps two-way sync', 'Enterprise-grade permission controls', 'Massive template repository for roadmapping', 'Scalable to thousands of concurrent users'],
      bestFor: isRTL ? 'المؤسسات الكبرى والمشاريع الضخمة متعددة الأقسام' : 'Large enterprises & complex product roadmaps'
    },
    whimsical: {
      name: isRTL ? 'Whimsical (السرعة القصوى للمخططات)' : 'Whimsical (Blazing Fast Flows)',
      badge: isRTL ? 'الأسرع في التدفقات' : 'Fastest Flowcharts',
      color: 'from-cyan-500 to-blue-600',
      description: isRTL
        ? 'الأداة الأكثر سرعة وخفة في رسم الـ Flowcharts والـ Wireframes والخرائط الذهنية بدون أي تعقيد أو تشويش بصري.'
        : 'Ultra-lightweight, blazing-fast visual workspace focused on speedy flowcharts, sitemaps, and low-fi wireframes.',
      strengths: isRTL
        ? ['أسرع أداة في رسم مسارات التدفق (Flowcharts)', 'خرائط ذهنية (Mind Maps) منظمة تلقائياً', 'سكتشات Wireframe سريعة ومبسطة', 'سهولة فائقة في المشاركة بروابط سريعة']
        : ['Fastest connector lines & flow generation', 'Auto-arranged mind maps & sitemaps', 'Instant low-fidelity wireframing kit', 'Frictionless client sharing links'],
      bestFor: isRTL ? 'هندسة المعلومات ورسم سيناريوهات التصفح السريعة' : 'Information architecture & rapid flowcharting'
    }
  };

  const currentTool = toolsData[activeTab];

  return (
    <div className="w-full space-y-4">
      {/* Interactive Tool Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className={`flex items-center gap-1.5 p-1 rounded-xl border ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            onClick={() => setActiveTab('figjam')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'figjam'
                ? 'bg-purple-600 text-white shadow-md'
                : (isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>FigJam</span>
          </button>
          <button
            onClick={() => setActiveTab('miro')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'miro'
                ? 'bg-amber-600 text-white shadow-md'
                : (isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Miro</span>
          </button>
          <button
            onClick={() => setActiveTab('whimsical')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'whimsical'
                ? 'bg-cyan-600 text-white shadow-md'
                : (isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Whimsical</span>
          </button>
        </div>

        <div className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
          isDark ? 'bg-purple-950/60 text-purple-300 border-purple-800/40' : 'bg-purple-50 text-purple-800 border-purple-200'
        }`}>
          {isRTL ? '💡 جرب التصويت على أفكار الـ Brainstorming أدناه' : '💡 Try live sticky note voting below'}
        </div>
      </div>

      {/* Main Grid: Tool Specs & Interactive Whiteboard Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left Column: Tool Details */}
        <div className={`lg:col-span-5 rounded-xl p-5 border shadow-sm flex flex-col justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border bg-gradient-to-r ${currentTool.color} text-white`}>
                {currentTool.badge}
              </span>
              <span className={`text-xs font-mono font-bold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Tool {activeTab === 'figjam' ? '01' : activeTab === 'miro' ? '02' : '03'} / 03
              </span>
            </div>

            <h3 className={`text-base sm:text-lg font-black mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {currentTool.name}
            </h3>

            <p className={`text-xs sm:text-sm leading-relaxed mb-3.5 font-medium ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {currentTool.description}
            </p>

            <div className="space-y-2 mb-4">
              {currentTool.strengths.map((str, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                  <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{str}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`pt-3 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
            <span className={`text-xs font-bold block ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
              🎯 {isRTL ? 'الاستخدام المثالي:' : 'Best Use Case:'} {currentTool.bestFor}
            </span>
          </div>
        </div>

        {/* Right Column: Live Interactive Affinity Mapping Canvas */}
        <div className={`lg:col-span-7 rounded-xl p-4 sm:p-5 border shadow-sm flex flex-col justify-between relative overflow-hidden ${
          isDark 
            ? 'bg-[#0e172a] border-slate-800 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]' 
            : 'bg-slate-50 border-slate-200 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]'
        }`}>
          {/* Canvas Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className={`text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {isRTL ? 'مساحة عصف ذهني حية (Affinity Mapping)' : 'Live Brainstorming Canvas'}
              </span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-bold border border-blue-500/20">
              4 Collaborators Active
            </span>
          </div>

          {/* Sticky Notes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            {stickyList.map((sticky) => (
              <motion.div
                key={sticky.id}
                whileHover={{ scale: 1.02, rotate: sticky.id % 2 === 0 ? 1 : -1 }}
                className={`p-3.5 rounded-xl border shadow-sm flex flex-col justify-between relative transition-all ${sticky.color}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-75">
                    {sticky.author}
                  </span>
                  <button
                    onClick={() => handleVote(sticky.id)}
                    className="px-2 py-0.5 rounded-md bg-white/70 dark:bg-black/40 hover:bg-white dark:hover:bg-black text-[10px] font-bold border border-black/10 transition-all flex items-center gap-1 cursor-pointer"
                    title={isRTL ? 'صوّت على الفكرة' : 'Vote for this idea'}
                  >
                    <span>👍</span>
                    <span>{sticky.votes}</span>
                  </button>
                </div>
                <p className="text-xs font-bold leading-snug">
                  {sticky.text}
                </p>
                <div className="mt-2 text-[9px] opacity-60 font-mono flex items-center justify-between">
                  <span>#SprintIdea</span>
                  <span>Click 👍 to vote</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Canvas Bottom Quick Action */}
          <div className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
            isDark ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
          }`}>
            <span className="text-[11px] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              {isRTL ? 'الخطوة التالية: فرز الملاحظات وتصديرها إلى Figma Design بنقرة واحدة' : 'Next: Cluster top-voted stickies & 1-click export to Figma'}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500 text-white">
              Export to Figma ➔
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
