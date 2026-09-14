import React, { useState } from 'react';
import { 
  Zap, 
  FolderTree, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  MousePointer,
  Compass,
  Play
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const IxdVsIaVisual: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<'ixd' | 'ia'>('ixd');

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Toggle Switch */}
      <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      } shadow-sm`}>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              {isRTL ? 'مقارنة التخصصين: مصمم التفاعل (IxD) مقابل مهندس المعلومات (IA)' : 'Interaction Designer (IxD) vs Information Architect (IA)'}
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeTab === 'ixd' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
              }`}>
                {activeTab === 'ixd' ? (isRTL ? '⚡ هندسة الحركة والسلوك اللحظي' : '⚡ Motion & Behavior') : (isRTL ? '🌳 هندسة الهيكل والتصنيف وعثور المحتوى' : '🌳 Structure & Taxonomy')}
              </span>
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {isRTL 
                ? 'أحدهما يهندس استجابة الشاشة عند اللمس، والآخر ينظم آلاف الصفحات ليعثر عليها المستخدم في ثوانٍ'
                : 'One engineers real-time tactile behavior; the other organizes massive taxonomies for effortless findability.'}
            </p>
          </div>
        </div>

        {/* Toggle buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('ixd')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'ixd'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-600/30'
                : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{isRTL ? '1. مصمم التفاعل (IxD)' : '1. Interaction Designer'}</span>
          </button>

          <button
            onClick={() => setActiveTab('ia')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'ia'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30'
                : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>{isRTL ? '2. مهندس المعلومات (IA)' : '2. Information Architect'}</span>
          </button>
        </div>
      </div>

      {/* Main Focus Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left 6 cols: Role Core Profile */}
        <div className={`lg:col-span-6 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all ${
          activeTab === 'ixd'
            ? (isDark ? 'bg-purple-950/40 border-purple-800/80' : 'bg-purple-50/90 border-purple-300')
            : (isDark ? 'bg-cyan-950/40 border-cyan-800/80' : 'bg-cyan-50/90 border-cyan-300')
        } shadow-sm`}>
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 dark:border-slate-800">
              <span className={`text-xs font-black px-2.5 py-1 rounded-lg border shadow-sm ${
                activeTab === 'ixd' 
                  ? (isDark ? 'bg-purple-900 text-purple-100 border-purple-700' : 'bg-purple-600 text-white border-purple-700') 
                  : (isDark ? 'bg-cyan-900 text-cyan-100 border-cyan-700' : 'bg-cyan-600 text-white border-cyan-700')
              }`}>
                {activeTab === 'ixd' ? 'Behavior & Micro-Interactions' : 'Taxonomy & Navigation Structure'}
              </span>
              <span className={`text-xs font-mono font-black ${
                activeTab === 'ixd' 
                  ? (isDark ? 'text-purple-300' : 'text-purple-800') 
                  : (isDark ? 'text-cyan-300' : 'text-cyan-800')
              }`}>
                {activeTab === 'ixd' ? 'Focus: Tactile Delight ⚡' : 'Focus: Zero Confusion 🌳'}
              </span>
            </div>

            <h4 className={`text-sm sm:text-base font-black mb-3 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {activeTab === 'ixd'
                ? (isRTL ? 'السؤال الجوهري: "كيف يتصرف العنصر ويتحرك عندما يلمسه المستخدم؟"' : 'Core Question: "How does the element react and move when manipulated?"')
                : (isRTL ? 'السؤال الجوهري: "كيف ننظم آلاف الصفحات ليعثر عليها أي شخص في ثوانٍ؟"' : 'Core Question: "How do we organize thousands of items so anyone finds them in seconds?"')}
            </h4>

            <div className="space-y-2.5 text-xs leading-relaxed font-bold">
              {activeTab === 'ixd' ? (
                <>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-purple-900/60 text-slate-100' : 'bg-white border-purple-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                    <span>{isRTL ? 'تصميم حركات السحب والانتقالات الميكرو الدقيقة (Spring Physics & Easing).' : 'Choreographing gesture dynamics, scroll physics, and spring animations.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-purple-900/60 text-slate-100' : 'bg-white border-purple-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                    <span>{isRTL ? 'ردود الفعل اللحظية لكل حالات الشاشة (Hover, Active, Success, Error).' : 'Real-time state transitions and haptic feedback loops.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-purple-900/60 text-slate-100' : 'bg-white border-purple-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                    <span>{isRTL ? 'إضفاء البهجة (Delight) ورفع جودة الإحساس باللمس في التطبيق.' : 'Injecting emotional delight and tactile responsiveness.'}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-cyan-900/60 text-slate-100' : 'bg-white border-cyan-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span>{isRTL ? 'تصنيف وهيكلة قوائم المواقع الضخمة (Taxonomy & Navigation Systems).' : 'Global site taxonomy, faceted search filters, and content classification.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-cyan-900/60 text-slate-100' : 'bg-white border-cyan-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span>{isRTL ? 'إجراء اختبارات تصنيف البطاقات واختبار الشجرة (Card Sorting & Tree Testing).' : 'Card sorting and tree testing validations to optimize user mental models.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-cyan-900/60 text-slate-100' : 'bg-white border-cyan-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span>{isRTL ? 'ضمان العثور السريع على أي معلومة دون حيرة أو توهان (Findability).' : 'Guaranteeing effortless findability across massive datasets.'}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={`pt-3 text-[11px] font-mono font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {activeTab === 'ixd' ? '🛠️ Tools: ProtoPie, Principle, Rive, Figma Smart Animate' : '🛠️ Tools: Optimal Workshop, Whimsical, Miro, Treejack'}
          </div>
        </div>

        {/* Right 6 cols: Real-World Industry Application */}
        <div className={`lg:col-span-6 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between gap-3 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div>
            <div className="pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>{isRTL ? 'مثال عملي في السوق الحقيقي' : 'Real-World Product Example'}</span>
              <Sparkles className="w-4 h-4 text-blue-500" />
            </div>

            <div className="space-y-2 mt-3 text-xs">
              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-purple-50/60 border-purple-200'
              }`}>
                <span className="font-extrabold text-purple-700 dark:text-purple-400 block mb-1 text-xs">
                  {isRTL ? 'في تطبيق زي Apple Music / Spotify:' : 'In Apple Music & Spotify:'}
                </span>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                  {isRTL 
                    ? '• الـ IxD يصمم حركة تصغير مشغل الأغاني عند السحب للأسفل بسلاسة وانتقال الغلاف.'
                    : '• IxD designs the fluid drag-to-collapse mini-player gesture and album art scale.'}
                </p>
              </div>

              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-cyan-50/60 border-cyan-200'
              }`}>
                <span className="font-extrabold text-cyan-700 dark:text-cyan-400 block mb-1 text-xs">
                  {isRTL ? 'في متجر ضخم زي Amazon / Noon:' : 'In Amazon & E-Commerce Catalogues:'}
                </span>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                  {isRTL 
                    ? '• الـ IA يصمم تصنيف 50 مليون منتج في أقسام وفلاتر وبحث ذكي يعثر على المنتج في ثانيتين!'
                    : '• IA designs the taxonomy of 50M products into facets, search filters, and categories.'}
                </p>
              </div>
            </div>
          </div>

          <div className={`pt-2 text-xs text-center font-bold border-t border-slate-200 dark:border-slate-800 ${
            isDark ? 'text-blue-300' : 'text-blue-700'
          }`}>
            {isRTL 
              ? '💡 الـ IA يبني الخريطة.. والـ IxD يجعل الرحلة ممتعة وحية!'
              : '💡 IA builds the map; IxD makes the journey delightful!'}
          </div>
        </div>
      </div>
    </div>
  );
};
