import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, Search, Briefcase, CheckCircle2, FileText, Smartphone, Layout, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface Props {
  roleType: 'ux-designer' | 'ui-designer' | 'researcher' | 'product-designer';
  language?: 'ar' | 'en';
  isDark?: boolean;
}

export const RoleDeepDiveVisual: React.FC<Props> = ({ roleType, language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<'responsibilities' | 'deliverables' | 'skills'>('responsibilities');

  const roleConfig = {
    'ux-designer': {
      title: isRTL ? 'مصمم تجربة المستخدم (UX Designer)' : 'UX Designer',
      subtitle: isRTL ? 'مهندس المنطق والمعمارية وتدفقات الاستخدام' : 'Architect of Logic, Information & User Flows',
      icon: Layers,
      color: 'from-blue-600 to-indigo-600',
      badge: 'Logic & Interaction Architecture',
      quote: isRTL ? '«وظيفتي أن أجعل التطبيق بديهياً وسهلاً كشرب الماء، بدون أي حيرة أو ضياع»' : '"My job is to make complex flows feel intuitive and effortless."',
      responsibilities: isRTL ? [
        'تفكيك المشاكل المعقدة وبناء رحلات المستخدم (User Journeys)',
        'هندسة وتصنيف المعلومات والروابط (Information Architecture)',
        'بناء المخططات الهيكلية (Low & Mid-Fidelity Wireframes)',
        'إجراء اختبارات الاستخدام السريعة وتعديل المسارات بناءً على الملاحظات',
        'تحديد حالات الحافة (Edge Cases) وسيناريوهات الخطأ'
      ] : [
        'Unpacking complex problem spaces into seamless User Journeys',
        'Information Architecture & navigation taxonomy',
        'Low and Mid-fidelity wireframing & task flows',
        'Moderating usability tests & iterating on feedback',
        'Mapping edge cases & failure state flows'
      ],
      deliverables: isRTL ? [
        { name: 'User Flow Diagrams', desc: 'مخططات توضح مسارات المستخدم خطوة بخطوة' },
        { name: 'Wireframes Kit', desc: 'هياكل الشاشات وتوزيع المحتوى والعناصر' },
        { name: 'Interactive Wireframe Prototype', desc: 'نموذج نقرات لاختبار سهولة التنقل' },
        { name: 'Usability Audit Report', desc: 'تقرير فحص سهولة الاستخدام ونقاط الاحتكاك' }
      ] : [
        { name: 'User Flow Diagrams', desc: 'Step-by-step logic maps covering every state' },
        { name: 'Wireframes Kit', desc: 'Structural screen layouts and content hierarchy' },
        { name: 'Interactive Prototype', desc: 'Clickable wireframe for fast validation' },
        { name: 'Usability Audit Report', desc: 'Friction points & task completion analysis' }
      ],
      tools: 'Figma, FigJam, Whimsical, Maze, Miro'
    },
    'ui-designer': {
      title: isRTL ? 'مصمم واجهة المستخدم (UI Designer)' : 'UI Designer',
      subtitle: isRTL ? 'صانع الشياكة والنظام البصري والمكونات التفاعلية' : 'Master of Visual Polish, Hierarchy & Design Systems',
      icon: Palette,
      color: 'from-purple-600 to-pink-600',
      badge: 'Visual Hierarchy & Design Systems',
      quote: isRTL ? '«أترجم المنطق إلى شاشات ساحرة ومريحة للعين تمنح المستخدم ثقة وفخامة فورية»' : '"I transform structural wireframes into high-fidelity, pixel-perfect, aesthetic interfaces."',
      responsibilities: isRTL ? [
        'بناء التسلسل الهرمي البصري وضبط المسافات بشبكة 8pt Grid',
        'اختيار لوحات الألوان المتناغمة وعائلات الخطوط (Typography)',
        'تصميم وبناء مكتبات مكونات أنظمة التصميم (Design Systems)',
        'تصميم الحركات والتفاعلات الدقيقة (Micro-interactions)',
        'التنسيق الدقيق مع المطورين لضمان تنفيذ الشاشات بـ Pixel-Perfect'
      ] : [
        'Crafting visual hierarchy using the strict 8pt spatial grid',
        'Harmonious color palettes & accessible typography scales',
        'Building scalable Design System components & variants',
        'Designing micro-interactions and transitional feedback',
        'Pixel-perfect engineering handoff & token alignment'
      ],
      deliverables: isRTL ? [
        { name: 'Hi-Fi Screens (Figma)', desc: 'شاشات التصميم النهائي بكل الحالات (Active/Hover/Error)' },
        { name: 'Design System & UI Kit', desc: 'مكتبة المكونات والمتغيرات (Variables & Tokens)' },
        { name: 'Style Guide Document', desc: 'دليل القواعد البصرية للألوان والخطوط' },
        { name: 'Exportable SVG Assets', desc: 'الأيقونات والرسوم المتجهة المهيأة للمبرمجين' }
      ] : [
        { name: 'Hi-Fi Figma Canvas', desc: 'Production-ready screens with all dynamic states' },
        { name: 'Design System & UI Kit', desc: 'Reusable components, variants & design tokens' },
        { name: 'Style Guide Document', desc: 'Documented typography, elevation & color rules' },
        { name: 'Exportable Assets', desc: 'Optimized vector icons & illustration specs' }
      ],
      tools: 'Figma, ProtoPie, Illustrator, Tokens Studio'
    },
    'researcher': {
      title: isRTL ? 'باحث تجربة المستخدم (UX Researcher)' : 'UX Researcher',
      subtitle: isRTL ? 'صوت العميل والمحقق العلمي داخل فريق المنتج' : 'Voice of the User & Empirical Behavioral Scientist',
      icon: Search,
      color: 'from-emerald-600 to-teal-600',
      badge: 'User Insights & Behavioral Truths',
      quote: isRTL ? '«أحمي الشركة من إهدار ملايين الدولارات في بناء ميزات لا يحتاجها أحد»' : '"I de-risk million-dollar bets by uncovering what real humans actually do and need."',
      responsibilities: isRTL ? [
        'تخطيط وإجراء المقابلات المعمقة مع المستخدمين المستهدفين',
        'تصميم وتوزيع الاستبيانات الكمية وتحليل الأرقام إحصائياً',
        'الدراسات الميدانية ومراقبة سياق الاستخدام في الشارع والعمل',
        'استخراج الأنماط المتكررة ونقاط الألم عبر الـ Affinity Mapping',
        'تزويد المصممين والإدارة برؤى استراتيجية تقود قرارات المنتج'
      ] : [
        'Conducting moderated in-depth user interviews',
        'Designing statistical quantitative surveys & cohort analysis',
        'Field contextual inquiries in natural user environments',
        'Thematic synthesis & recurring behavioral friction analysis',
        'Empowering designers and executives with verified insights'
      ],
      deliverables: isRTL ? [
        { name: 'Data-Driven Personas', desc: 'شخصيات تمثيلية مبنية على حقائق وأرقام حقيقية' },
        { name: 'Customer Journey Maps', desc: 'خرائط رحلة العميل مع تسجيل منحنى المشاعر' },
        { name: 'Research Synthesis Insights', desc: 'تقرير تلخيص النتائج والفرص المكتشفة' },
        { name: 'Usability Benchmark Scorecard', desc: 'قياس نسب نجاح المهام ومعدل الرضا (SUS/CSAT)' }
      ] : [
        { name: 'Data-Driven Personas', desc: 'Empirical user personas with real behavioral archetypes' },
        { name: 'Customer Journey Maps', desc: 'End-to-end emotional touchpoint journey maps' },
        { name: 'Research Insights Report', desc: 'Prioritized actionable findings & product opportunities' },
        { name: 'Usability Scorecards', desc: 'System Usability Scale (SUS) & Task Success rates' }
      ],
      tools: 'Dovetail, Lookback, Maze, UserTesting, Typeform'
    },
    'product-designer': {
      title: isRTL ? 'مصمم المنتج (Product Designer)' : 'Product Designer',
      subtitle: isRTL ? 'المصمم الشامل الرابط بين العميل والبزنس والتقنية' : 'End-to-End Full-Stack Product Architect',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-600',
      badge: 'End-to-End Product Ownership',
      quote: isRTL ? '«أمتلك مسؤولية نجاح المنتج من استكشاف الفكرة وحتى نمو الأرباح بعد الإطلاق»' : '"I own the holistic product lifecycle from problem framing to bottom-line ROI."',
      responsibilities: isRTL ? [
        'فهم أهداف البزنس وترجمة الـ KPIs إلى حلول تفاعلية ممتعة',
        'تنفيذ المسار كاملاً: من البحث السريع إلى الـ Wireframes والـ UI',
        'بناء النماذج التفاعلية واختبارها قبل التسليم للمطورين',
        'متابعة مقاييس الأداء والـ Conversion Rate بعد إطلاق المنتج',
        'إجراء تجارب A/B Testing للتحسين المستمر للأرباح'
      ] : [
        'Aligning user needs with core business KPIs and unit economics',
        'Full end-to-end execution: discovery, wireframes to hi-fi UI',
        'Interactive prototyping & cross-functional engineering handoff',
        'Tracking post-launch retention, conversion & churn analytics',
        'Designing ongoing A/B testing optimization experiments'
      ],
      deliverables: isRTL ? [
        { name: 'End-to-End Prototypes', desc: 'نماذج متكاملة ومجربة جاهزة للبرمجة' },
        { name: 'Product Strategy Specs', desc: 'وثائق ربط القرارات التصميمية بأهداف البزنس' },
        { name: 'Design System & UI Kits', desc: 'مكتبات واجهات متجاوبة ومتطورة' },
        { name: 'Growth & A/B Experiments', desc: 'خطط تحسين معدلات التحويل وتطوير التجربة' }
      ] : [
        { name: 'End-to-End Prototypes', desc: 'Validated high-fidelity prototypes ready for code' },
        { name: 'Product Strategy Alignments', desc: 'KPI-focused feature roadmap specifications' },
        { name: 'Design Systems Library', desc: 'Unified component architecture' },
        { name: 'A/B Growth Experiments', desc: 'Continuous conversion rate optimization plans' }
      ],
      tools: 'Figma, Mixpanel, Jira, PostHog, Notion'
    }
  };

  const current = roleConfig[roleType];
  const Icon = current.icon;

  return (
    <div className="w-full space-y-4">
      {/* Role Header Banner */}
      <div className={`rounded-xl p-4 sm:p-5 border shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 ${
        isDark ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${current.color} text-white shadow-md`}>
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-base sm:text-lg font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {current.title}
              </h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                isDark ? 'bg-blue-950 text-blue-300 border-blue-800/40' : 'bg-blue-50 text-blue-700 border-blue-200'
              }`}>
                {current.badge}
              </span>
            </div>
            <p className={`text-xs font-medium mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {current.subtitle}
            </p>
          </div>
        </div>

        {/* View Mode Toggle Buttons */}
        <div className={`flex items-center gap-1 p-1 rounded-xl border self-start md:self-auto ${
          isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            onClick={() => setActiveTab('responsibilities')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'responsibilities'
                ? 'bg-blue-600 text-white shadow-sm'
                : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            {isRTL ? 'المسؤوليات اليومية' : 'Responsibilities'}
          </button>
          <button
            onClick={() => setActiveTab('deliverables')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'deliverables'
                ? 'bg-blue-600 text-white shadow-sm'
                : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            {isRTL ? 'المخرجات والملفات (Deliverables)' : 'Deliverables'}
          </button>
        </div>
      </div>

      {/* Main Content Area: Responsibilities or Deliverables Grid */}
      <div className={`rounded-xl p-5 border shadow-sm ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        {/* Quote Block */}
        <div className={`p-3.5 rounded-xl border mb-4 text-xs sm:text-sm font-semibold italic flex items-center gap-2 ${
          isDark ? 'bg-blue-950/30 border-blue-900/40 text-blue-200' : 'bg-blue-50/80 border-blue-200 text-blue-950'
        }`}>
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{current.quote}</span>
        </div>

        {activeTab === 'responsibilities' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
            <div className={`p-4 rounded-xl border ${
              isDark ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}>
              <h4 className="text-xs font-bold text-blue-500 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isRTL ? 'المهام والقرارات اليومية:' : 'Core Daily Responsibilities:'}</span>
              </h4>
              <ul className="space-y-2 text-xs">
                {current.responsibilities.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-4 rounded-xl border flex flex-col justify-between ${
              isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div>
                <h4 className={`text-xs font-black mb-2 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  🛠️ {isRTL ? 'أهم الأدوات المستخدمة:' : 'Primary Toolset:'}
                </h4>
                <p className={`text-xs font-mono font-black mb-4 ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
                  {current.tools}
                </p>

                <h4 className={`text-xs font-black mb-1.5 ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
                  🎯 {isRTL ? 'معيار النجاح الأساسي في هذا الدور:' : 'Core Key Result:'}
                </h4>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  {roleType === 'ux-designer' && (isRTL ? 'منتج فائق السهولة وسريع في إنجاز المهام دون أي ارتباك للمستخدم.' : 'Frictionless, intuitive task architecture.')}
                  {roleType === 'ui-designer' && (isRTL ? 'واجهة أنيقة، متسقة، ومبنية بنظام تصميم دقيق يسهل على المطورين برمجته.' : 'Cohesive, aesthetic, scalable design system.')}
                  {roleType === 'researcher' && (isRTL ? 'حقائق وبيانات علمية تقضي على التخمينات الخاطئة وتوجه استراتيجية الشركة.' : 'De-risking product investments with real data.')}
                  {roleType === 'product-designer' && (isRTL ? 'منتج متكامل يجمع بين راحة العميل ونمو أرباح ومبيعات البزنس.' : 'Delivering user delight while accelerating business KPIs.')}
                </p>
              </div>

              <div className={`pt-2 border-t ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'} text-xs font-bold`}>
                {isRTL ? 'دبلومتنا تؤهلك لتغطية هذا الدور باحترافية تامة' : 'Diploma fully covers this specialization'}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-2">
            {current.deliverables.map((del, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border shadow-sm flex flex-col justify-between ${
                  isDark ? 'bg-slate-800/60 border-slate-700 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-500">
                      0{idx + 1}
                    </span>
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <h5 className="text-xs font-bold mb-1">{del.name}</h5>
                  <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {del.desc}
                  </p>
                </div>
                <div className="pt-2 mt-2 border-t border-slate-700/40 text-[10px] font-mono text-emerald-400 font-semibold">
                  Standard Deliverable
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={`pt-3 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'} flex items-center justify-between text-xs`}>
          <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
            📌 {isRTL ? 'المصمم المحترف يفهم حدوده وحدود غيره ليعمل الفريق بتناغم تام' : 'Clear roles create high-performing design teams'}
          </span>
          <span className="font-bold text-blue-500 font-mono">Role Breakdown</span>
        </div>
      </div>
    </div>
  );
};
