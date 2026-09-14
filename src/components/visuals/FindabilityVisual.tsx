import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Compass, 
  Layers, 
  Star, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  SlidersHorizontal,
  FolderTree,
  Tag,
  ArrowRight
} from 'lucide-react';
import { Language } from '../../types';

interface FindabilityVisualProps {
  language: Language;
  isDark?: boolean;
}

export const FindabilityVisual: React.FC<FindabilityVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<'interactive-search' | 'ia-pillars'>('interactive-search');
  
  // Interactive Search & Filters State
  const [searchQuery, setSearchQuery] = useState<string>('Wireless');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string>('In Stock');

  const products = [
    { id: 1, name: isRTL ? 'سماعات رأس لاسلكية احترافية Pro' : 'Pro Wireless ANC Headphones', category: 'Audio', price: '$199', rating: 4.9, match: true },
    { id: 2, name: isRTL ? 'سماعات أذن رياضية مقاومة للماء' : 'Sport Wireless Earbuds IPX7', category: 'Audio', price: '$79', rating: 4.7, match: true },
    { id: 3, name: isRTL ? 'شاحن مغناطيسي لاسلكي سريع' : 'Fast Magnetic Wireless Pad', category: 'Accessories', price: '$35', rating: 4.6, match: true },
    { id: 4, name: isRTL ? 'كاميرا مراقبة ذكية لاسلكية 4K' : '4K Smart Wireless Camera', category: 'Smart Home', price: '$120', rating: 4.8, match: true }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesQuery = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const iaPillars = [
    {
      badge: 'Clear Navigation',
      title: isRTL ? 'هيكل تنقل واضح وبديهي' : 'Intuitive Navigation & Breadcrumbs',
      desc: isRTL ? 'أشرطة تنقل توضح للمستخدم مساره ومكانه الحالي داخل التطبيق.' : 'Clear wayfinding showing users exactly where they are in the IA hierarchy.',
      icon: Compass,
      points: [
        isRTL ? 'أشرطة تنقل سفلية 4-5 عناصر رئيسية كحد أقصى' : 'Focused bottom bar with 4-5 core destinations',
        isRTL ? 'مسار تتبع الموقع (Breadcrumbs) لمنع الضياع' : 'Predictable breadcrumb trails across sub-pages',
        isRTL ? 'تمييز التبويب النشط بلون وإشارة واضحة' : 'High-contrast active state indicators'
      ]
    },
    {
      badge: 'Smart Search',
      title: isRTL ? 'محرك بحث ذكي وتنبؤي' : 'Predictive Smart Search',
      desc: isRTL ? 'شريط بحث متاح دائماً مع إكمال تلقائي وتصحيح الأخطاء الإملائية.' : 'Persistent search bar with auto-complete and fuzzy matching.',
      icon: Search,
      points: [
        isRTL ? 'اقتراح نتائج بحث لحظية أثناء كتابة أول حرفين' : 'Instant type-ahead results upon 2 keystrokes',
        isRTL ? 'تصحيح الأخطاء الإملائية (Did you mean?)' : 'Fuzzy tolerance for typos and spelling variants',
        isRTL ? 'الاحتفاظ بسجل عمليات البحث الأخيرة للمستخدم' : 'Recent search history chips for 1-tap re-access'
      ]
    },
    {
      badge: 'Faceted Filters',
      title: isRTL ? 'فلاتر وتصنيفات مرنة' : 'Faceted Filters & Chips',
      desc: isRTL ? 'إمكانية تضييق نطاق آلاف النتائج في ثوانٍ عبر محددات منطقية.' : 'Refining thousands of items into exact matches in seconds.',
      icon: Filter,
      points: [
        isRTL ? 'فلاتر سريعة بنقرة واحدة (Chips/Pills)' : '1-tap filter pills (Price, Rating, Brand)',
        isRTL ? 'عرض عدد النتائج المتبقية فورياً قبل النقر' : 'Real-time result counters on each filter toggle',
        isRTL ? 'إمكانية مسح وتعديل الفلاتر بسهولة فائقة' : '1-click clear all filters action'
      ]
    },
    {
      badge: 'Information Hierarchy',
      title: isRTL ? 'تراتبية هرمية للمحتوى (IA)' : 'Information Architecture (IA)',
      desc: isRTL ? 'تنظيم وهندسة المعلومات بحيث تقود العين للأهم ثم التفاصيل.' : 'Scannable content hierarchy leading user attention naturally.',
      icon: FolderTree,
      points: [
        isRTL ? 'العناوين الكبيرة تليها البيانات الحيوية فالتفاصيل' : 'Clear typography scale (H1 > H2 > Body)',
        isRTL ? 'تجنب الكتل النصية الصماء واستخدام البطاقات' : 'Chunking dense data into digestible visual cards',
        isRTL ? 'مسح بصري مريح خلال 3 ثوانٍ (3-Second Rule)' : 'Optimized for rapid 3-second visual scanning'
      ]
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Selector Navigation */}
      <div className="flex items-center justify-between gap-3 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
        <div className="flex items-center gap-2 px-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-[11px] font-bold text-slate-200">
            {isRTL ? 'مختبر هندسة المعلومات والبحث (Findability & IA Engine)' : 'Findability & IA Engine'}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('interactive-search')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'interactive-search'
                ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>{isRTL ? 'محاكي البحث والتنقل الحي 🔍' : 'Live Search & IA Simulator 🔍'}</span>
          </button>
          <button
            onClick={() => setActiveTab('ia-pillars')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'ia-pillars'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isRTL ? 'الركائز الـ 4 لسهولة الإيجاد' : '4 Findability Pillars'}</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: INTERACTIVE SEARCH & IA SIMULATOR */}
      {activeTab === 'interactive-search' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          
          {/* Live Simulator Viewport (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-4 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              {/* Breadcrumb Navigation Trail */}
              <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-400 border-b border-slate-800 pb-2">
                <span className="hover:text-white cursor-pointer">{isRTL ? 'الرئيسية' : 'Home'}</span>
                <span>/</span>
                <span className="hover:text-white cursor-pointer">{isRTL ? 'الإلكترونيات' : 'Electronics'}</span>
                <span>/</span>
                <span className="text-blue-400 font-bold">{isRTL ? 'الصوتيات واللاسلكي' : 'Wireless & Audio'}</span>
                <span className="ms-auto font-mono text-[9px] bg-blue-950 px-2 py-0.5 rounded text-blue-300 border border-blue-800">
                  {filteredProducts.length} Results
                </span>
              </div>

              {/* Interactive Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-blue-400 absolute start-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isRTL ? "ابحث عن منتج أو ميزة (مثل: Wireless)..." : "Search products, tags (e.g. Wireless)..."}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl py-2 ps-9 pe-3 text-xs text-white placeholder-slate-500 outline-none transition-colors shadow-inner"
                />
              </div>

              {/* Faceted Filter Chips */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                <span className="text-[10px] text-slate-400 uppercase font-bold flex items-center gap-1">
                  <Filter className="w-3 h-3 text-blue-400" />
                  {isRTL ? 'الفلاتر:' : 'Filters:'}
                </span>
                {['All', 'Audio', 'Accessories', 'Smart Home'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-0.5 rounded-full font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Filtered Product Cards Grid */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {filteredProducts.map((item) => (
                  <div key={item.id} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                      <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-mono">{item.category}</span>
                      <span className="flex items-center gap-0.5 text-amber-400 font-bold">
                        <Star className="w-2.5 h-2.5 fill-amber-400" /> {item.rating}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-white mb-1.5 line-clamp-1">{item.name}</h5>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-emerald-400">{item.price}</span>
                      <span className="text-[10px] text-blue-400 font-semibold">{isRTL ? 'متوفر فوراً' : '1-Click Add'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Insight */}
            <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>💡 {isRTL ? 'البحث الذكي يخفض وقت العثور على المنتج بنسبة 80%.' : 'Faceted search reduces findability friction by 80%.'}</span>
              <span className="font-mono text-blue-400 font-bold">Peter Morville: Findable</span>
            </div>
          </div>

          {/* IA Principles & Business Matrix (5 Cols) */}
          <div className={`lg:col-span-5 rounded-2xl p-4 sm:p-5 border flex flex-col justify-between shadow-md transition-all ${
            isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase bg-blue-600 text-white">
                Information Architecture (IA)
              </span>

              <h4 className={`text-base font-extrabold mt-2 mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {isRTL ? 'قانون الإيجاد: ما لا يجده المستخدم غير موجود' : 'Rule: If Users Can’t Find It, It Doesn’t Exist'}
              </h4>

              <p className={`text-xs leading-relaxed mb-3 font-medium ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                {isRTL
                  ? 'مهما كانت ميزات منتجك رائعة، إذا لم يستطع العميل العثور عليها خلال 3 ثوانٍ فستفقد قيمتها تماماً.'
                  : 'No matter how innovative a product feature is, if users cannot find it within 3 seconds, it generates zero value.'}
              </p>

              <div className="space-y-2 mb-3">
                <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {isRTL ? 'قاعدة النقرات الثلاث (3-Click Rule)' : '3-Click Wayfinding Rule'}
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    &lt; 3 Clicks
                  </span>
                </div>

                <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {isRTL ? 'نسبة المستخدمين المعتمدين على البحث' : 'Search-First Users'}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    Over 59%
                  </span>
                </div>
              </div>
            </div>

            <div className={`p-2.5 rounded-xl border ${
              isDark ? 'bg-blue-950/40 border-blue-800/40 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-950'
            }`}>
              <p className="text-[11px] font-bold leading-relaxed">
                🎯 {isRTL ? 'التنقل الناجح يمنح المستخدم شعوراً بالسيطرة والأمان الذهني.' : 'Predictable IA empowers user confidence & eliminates navigation anxiety.'}
              </p>
            </div>
          </div>

        </div>
      ) : (
        /* VIEW 2: 4 FINDABILITY PILLARS */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {iaPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:border-blue-500 hover:ring-2 hover:ring-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-slate-900/95 border-slate-800 hover:bg-slate-900' 
                    : 'bg-white border-slate-200 shadow-sm hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                      {pillar.badge}
                    </span>
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 transition-transform group-hover:scale-110">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className={`text-sm sm:text-base font-extrabold mb-1.5 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    {pillar.title}
                  </h4>
                  <p className={`text-[11px] sm:text-xs leading-relaxed mb-3 font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {pillar.desc}
                  </p>

                  <ul className="space-y-2 mb-3">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-[11px] sm:text-xs flex items-start gap-2 font-medium text-slate-800 dark:text-slate-200 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`pt-2.5 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {isRTL ? 'معيار قياسي لـ UX' : 'Industry UX Standard'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
