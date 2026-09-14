import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Grid, 
  Type, 
  Sparkles, 
  Layers, 
  Sliders, 
  CheckCircle2, 
  Eye, 
  ShieldCheck,
  MousePointer,
  Code2,
  SlidersHorizontal,
  ToggleLeft,
  ToggleRight,
  Loader2,
  Copy,
  Check
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language?: Language;
  isDark?: boolean;
}

export const UiDesignerDeepDiveVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<'tokens' | 'typography' | 'components'>('tokens');
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [selectedThemeColor, setSelectedThemeColor] = useState<'indigo' | 'emerald' | 'rose' | 'amber'>('indigo');
  
  // Typography State
  const [selectedTypeLevel, setSelectedTypeLevel] = useState<'display' | 'h1' | 'body' | 'caption'>('display');
  
  // Component State
  const [btnState, setBtnState] = useState<'default' | 'hover' | 'active' | 'loading' | 'disabled'>('default');
  const [toggleActive, setToggleActive] = useState<boolean>(true);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const themeColors = {
    indigo: { 
      name: 'Royal Indigo', 
      hex: '#4F46E5', 
      bg: 'bg-indigo-600', 
      hoverBg: 'hover:bg-indigo-700',
      lightBg: 'bg-indigo-50 dark:bg-indigo-950/40',
      border: 'border-indigo-500', 
      text: 'text-indigo-600 dark:text-indigo-400',
      ring: 'ring-indigo-400',
      token: '--brand-primary-600'
    },
    emerald: { 
      name: 'Emerald Green', 
      hex: '#059669', 
      bg: 'bg-emerald-600', 
      hoverBg: 'hover:bg-emerald-700',
      lightBg: 'bg-emerald-50 dark:bg-emerald-950/40',
      border: 'border-emerald-500', 
      text: 'text-emerald-600 dark:text-emerald-400',
      ring: 'ring-emerald-400',
      token: '--brand-emerald-600'
    },
    rose: { 
      name: 'Electric Rose', 
      hex: '#E11D48', 
      bg: 'bg-rose-600', 
      hoverBg: 'hover:bg-rose-700',
      lightBg: 'bg-rose-50 dark:bg-rose-950/40',
      border: 'border-rose-500', 
      text: 'text-rose-600 dark:text-rose-400',
      ring: 'ring-rose-400',
      token: '--brand-rose-600'
    },
    amber: { 
      name: 'Amber Sunset', 
      hex: '#D97706', 
      bg: 'bg-amber-600', 
      hoverBg: 'hover:bg-amber-700',
      lightBg: 'bg-amber-50 dark:bg-amber-950/40',
      border: 'border-amber-500', 
      text: 'text-amber-600 dark:text-amber-400',
      ring: 'ring-amber-400',
      token: '--brand-amber-600'
    }
  };

  const currentColor = themeColors[selectedThemeColor];

  const handleCopyCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1500);
  };

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Banner with UI Designer Focus */}
      <div className={`p-3 sm:p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 shadow-sm transition-colors ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-md">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-sm sm:text-base font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {isRTL ? 'مصمم واجهة المستخدم (UI Designer)' : 'UI Designer (Visual Polish & Systems)'}
              </h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                isDark ? 'bg-purple-950/60 text-purple-300 border-purple-800/50' : 'bg-purple-100 text-purple-800 border-purple-300'
              }`}>
                {isRTL ? 'فنان النظام البصري' : 'Visual Craft Master'}
              </span>
            </div>
            <p className={`text-xs font-medium mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {isRTL ? 'التركيز الأساسي: بناء أنظمة التصميم (Design Systems)، تناغم الألوان، والـ 8pt Grid' : 'Core Focus: Design system tokens, typography hierarchy, 8pt spatial grid & pixel-perfect UI'}
            </p>
          </div>
        </div>

        {/* Feature Inspector Tabs */}
        <div className={`flex items-center gap-1 p-1 rounded-xl border text-xs ${
          isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'tokens'
                ? 'bg-purple-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>{isRTL ? 'لوحة الـ Tokens' : 'Color Tokens'}</span>
          </button>
          
          <button
            onClick={() => setActiveTab('typography')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'typography'
                ? 'bg-purple-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>{isRTL ? 'مقياس الخطوط' : 'Typography'}</span>
          </button>

          <button
            onClick={() => setActiveTab('components')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'components'
                ? 'bg-purple-600 text-white shadow-sm font-black'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isRTL ? 'المكونات والمتغيرات' : 'UI Components'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Design System Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        
        {/* Left 5 Cols: System Controls & Rules */}
        <div className={`lg:col-span-5 rounded-2xl p-4 border shadow-sm flex flex-col justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-purple-500 uppercase tracking-wider flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5" />
                {activeTab === 'tokens' && (isRTL ? 'إعدادات الـ Color Tokens' : 'Design Tokens Architecture')}
                {activeTab === 'typography' && (isRTL ? 'التسلسل الهرمي للخطوط' : 'Typography Hierarchy Scale')}
                {activeTab === 'components' && (isRTL ? 'إدارة حالات المكونات (States)' : 'Component States & Variants')}
              </span>
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`text-[10px] font-bold px-2.5 py-1 rounded-md border cursor-pointer transition-all flex items-center gap-1 ${
                  showGrid
                    ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                    : isDark ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white' : 'bg-slate-100 text-slate-700 border-slate-300'
                }`}
              >
                <Grid className="w-3 h-3" />
                <span>{showGrid ? (isRTL ? 'إخفاء شبكة 8pt' : 'Hide 8pt Grid') : (isRTL ? 'تفعيل شبكة 8pt' : 'Show 8pt Grid')}</span>
              </button>
            </div>

            {/* TAB 1: COLOR TOKENS CONTROLS */}
            {activeTab === 'tokens' && (
              <div className="space-y-3 animate-in fade-in">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                    {isRTL ? 'اختر التوكن الأساسي (Primary Brand Color):' : 'Select Primary Brand Token:'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(Object.keys(themeColors) as Array<keyof typeof themeColors>).map((key) => {
                      const col = themeColors[key];
                      const isSelected = selectedThemeColor === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedThemeColor(key)}
                          className={`p-2 rounded-xl border flex flex-col items-center gap-1 cursor-pointer transition-all ${
                            isSelected 
                              ? `${col.border} ring-2 ${col.ring} ${col.lightBg} font-bold shadow-sm` 
                              : isDark ? 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/60' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full ${col.bg} shadow-sm`} />
                          <span className="text-[10px] font-mono text-slate-700 dark:text-slate-300 truncate">{col.name}</span>
                          <span className="text-[9px] font-mono text-slate-400">{col.hex}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl border text-xs space-y-1.5 ${
                  isDark ? 'bg-slate-950/70 border-slate-800 text-slate-300' : 'bg-purple-50/60 border-purple-200 text-slate-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-purple-500 font-bold text-[11px]">{currentColor.token}</span>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold">WCAG AAA Passed (7.8:1)</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    {isRTL 
                      ? 'يتم ربط هذا المتغير (Variable) تلقائياً بجميع الشاشات والأزرار لتحديث الهوية بضغطة زر واحدة.'
                      : 'This token binds across all components and Figma variables for seamless multi-brand theming.'}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: TYPOGRAPHY SCALE CONTROLS */}
            {activeTab === 'typography' && (
              <div className="space-y-2 animate-in fade-in">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                  {isRTL ? 'مستويات الخط والتدرج البصري:' : 'Select Typography Scale Level:'}
                </label>
                <div className="space-y-1.5">
                  {[
                    { id: 'display', name: 'Display Heading', size: '28px / 36px', weight: 'Black 900', role: isRTL ? 'العناوين الضخمة والبانرات' : 'Hero Titles' },
                    { id: 'h1', name: 'Heading 1 (H1)', size: '20px / 28px', weight: 'ExtraBold 800', role: isRTL ? 'عناوين الأقسام الرئيسية' : 'Section Titles' },
                    { id: 'body', name: 'Body Regular', size: '14px / 22px', weight: 'Medium 500', role: isRTL ? 'النصوص والشروحات' : 'Standard Paragraphs' },
                    { id: 'caption', name: 'Caption / Microcopy', size: '11px / 16px', weight: 'Bold 700', role: isRTL ? 'ملاحظات الأزرار والـ Badges' : 'Tooltips & Labels' }
                  ].map((level) => {
                    const isSelected = selectedTypeLevel === level.id;
                    return (
                      <div
                        key={level.id}
                        onClick={() => setSelectedTypeLevel(level.id as any)}
                        className={`p-2 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-purple-500/10 border-purple-500 ring-2 ring-purple-500/20'
                            : isDark ? 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/40' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 dark:text-white">{level.name}</span>
                            <span className="text-[10px] font-mono text-purple-500">{level.size}</span>
                          </div>
                          <span className="text-[10px] text-slate-500">{level.role}</span>
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                          {level.weight}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: COMPONENTS & STATES CONTROLS */}
            {activeTab === 'components' && (
              <div className="space-y-3 animate-in fade-in">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                    {isRTL ? 'اختر حالة المكون لتجربتها حياً (Interactive State):' : 'Select Interactive Component State:'}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: 'default', label: 'Default' },
                      { id: 'hover', label: 'Hover' },
                      { id: 'active', label: 'Active (Press)' },
                      { id: 'loading', label: 'Loading State' },
                      { id: 'disabled', label: 'Disabled' }
                    ].map((st) => (
                      <button
                        key={st.id}
                        onClick={() => setBtnState(st.id as any)}
                        className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                          btnState === st.id
                            ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                            : isDark ? 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-950'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Microcopy rule */}
                <div className={`p-2.5 rounded-xl border text-xs space-y-1 ${
                  isDark ? 'bg-slate-950/70 border-slate-800 text-slate-300' : 'bg-purple-50/60 border-purple-200 text-slate-800'
                }`}>
                  <span className="font-bold text-purple-500 text-[11px] block">
                    {isRTL ? 'قاعدة الـ Interactive Feedback:' : 'Interactive Feedback Standard:'}
                  </span>
                  <p className="text-[11px] leading-relaxed">
                    {isRTL 
                      ? 'يجب أن يمتلك كل زر 5 حالات تفاعلية مختلفة في نظام التصميم حتى لا يشعر المستخدم بأن التطبيق معطل.'
                      : 'Every interactive component must document 5 atomic states to prevent user confusion.'}
                  </p>
                </div>
              </div>
            )}

          </div>

          <div className={`pt-2 border-t ${isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'} text-[11px] font-mono flex items-center justify-between`}>
            <span>{isRTL ? 'أدوات: Figma, Tokens Studio, Style Guides' : 'Tools: Figma, Tokens Studio, UI Kits'}</span>
            <span className="text-purple-500 font-bold">Pixel-Perfect</span>
          </div>
        </div>

        {/* Right 7 Cols: Live Interactive UI Sandbox */}
        <div className={`lg:col-span-7 rounded-2xl p-4 border shadow-sm flex flex-col justify-between relative overflow-hidden ${
          isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
        }`}>
          {/* Optional 8pt Grid Overlay */}
          {showGrid && (
            <div 
              className="absolute inset-0 pointer-events-none opacity-20 z-0" 
              style={{
                backgroundImage: `linear-gradient(to right, #a855f7 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
                backgroundSize: '16px 16px'
              }}
            />
          )}

          {/* Canvas Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-xs relative z-10">
            <span className="text-[10px] font-mono font-bold uppercase text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              {activeTab === 'tokens' && 'Interactive Color Token Canvas'}
              {activeTab === 'typography' && 'Typography Specimen & Grid Hierarchy'}
              {activeTab === 'components' && 'Interactive UI Component Sandbox'}
            </span>
            <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
              <span>Token:</span>
              <span className={`font-bold ${currentColor.text}`}>{currentColor.name}</span>
            </span>
          </div>

          {/* DYNAMIC CANVAS CONTENT BASED ON TAB */}
          <div className="relative z-10 flex-1 flex flex-col justify-center my-2">
            
            {/* VIEW 1: TOKENS LIVE CARD */}
            {activeTab === 'tokens' && (
              <div className={`p-4 sm:p-5 rounded-2xl border shadow-lg space-y-4 animate-in fade-in ${
                isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${currentColor.bg} text-white flex items-center justify-center shadow-lg transition-all`}>
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                        {isRTL ? 'الاشتراك في الباقة الاحترافية' : 'Pro Design System Plan'}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {isRTL ? 'وصول لجميع المكونات والمتغيرات' : 'Unlimited tokens & interactive variants'}
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-black font-mono text-emerald-500">$29/mo</span>
                </div>

                {/* Interactive Dynamic Action Row */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                  <button 
                    onClick={handleCopyCode}
                    className={`py-2 px-4 rounded-xl text-xs font-black text-white ${currentColor.bg} ${currentColor.hoverBg} shadow-md transition-all cursor-pointer flex items-center gap-2`}
                  >
                    {copiedCode ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                    <span>{copiedCode ? (isRTL ? 'تم النسخ!' : 'Copied!') : (isRTL ? 'تطبيق الثيم على الكود' : 'Export Token CSS')}</span>
                  </button>

                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border ${currentColor.lightBg} ${currentColor.border} ${currentColor.text}`}>
                    {currentColor.hex}
                  </span>
                </div>
              </div>
            )}

            {/* VIEW 2: TYPOGRAPHY SPECIMEN */}
            {activeTab === 'typography' && (
              <div className={`p-4 rounded-2xl border shadow-lg space-y-3 animate-in fade-in ${
                isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-2.5">
                  <span className="text-[10px] font-mono font-bold text-purple-500 block">
                    [ Display • 28px Black 900 ]
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    {isRTL ? 'تصميم الواجهات بفخامة ونظام' : 'Crafting Flawless Digital Experiences'}
                  </h2>
                </div>

                <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-2.5">
                  <span className="text-[10px] font-mono font-bold text-purple-500 block">
                    [ Heading 1 • 18px ExtraBold 800 ]
                  </span>
                  <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
                    {isRTL ? 'التسلسل الهرمي يوجه عين المستخدم تلقائياً' : 'Visual Hierarchy Guides the Eye Effortlessly'}
                  </h3>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-purple-500 block">
                    [ Body Regular • 13px Medium 500 ]
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {isRTL 
                      ? 'الخط الواضح والمريح بنسبة تباين عالية يمنح القارئ تجربة قراءة ممتعة بدون أي إجهاد بصري.'
                      : 'Legible typography with strict proportional line-height creates friction-free scanning.'}
                  </p>
                </div>
              </div>
            )}

            {/* VIEW 3: INTERACTIVE COMPONENTS & STATES */}
            {activeTab === 'components' && (
              <div className={`p-4 rounded-2xl border shadow-lg space-y-3.5 animate-in fade-in ${
                isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {isRTL ? 'معاينة حالة الزر المختارة:' : 'Live Button State Sandbox:'}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-500 border border-purple-500/20 uppercase">
                    State: {btnState}
                  </span>
                </div>

                {/* Dynamic Button Component Demo */}
                <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-950/50 flex flex-wrap items-center justify-center gap-3">
                  {btnState === 'default' && (
                    <button className={`py-2.5 px-6 rounded-xl text-xs font-black text-white ${currentColor.bg} shadow-md transition-all cursor-pointer`}>
                      Confirm Payment ($450.00)
                    </button>
                  )}

                  {btnState === 'hover' && (
                    <button className={`py-2.5 px-6 rounded-xl text-xs font-black text-white ${currentColor.bg} brightness-110 shadow-lg scale-105 transition-all cursor-pointer ring-2 ${currentColor.ring}`}>
                      Confirm Payment ($450.00) 👆
                    </button>
                  )}

                  {btnState === 'active' && (
                    <button className={`py-2.5 px-6 rounded-xl text-xs font-black text-white ${currentColor.bg} scale-95 shadow-inner transition-all cursor-pointer ring-4 ring-purple-300`}>
                      Confirm Payment ($450.00) [Pressed]
                    </button>
                  )}

                  {btnState === 'loading' && (
                    <button className={`py-2.5 px-6 rounded-xl text-xs font-black text-white ${currentColor.bg} opacity-90 shadow-md cursor-wait flex items-center gap-2`}>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing Transaction...</span>
                    </button>
                  )}

                  {btnState === 'disabled' && (
                    <button disabled className="py-2.5 px-6 rounded-xl text-xs font-bold text-slate-400 bg-slate-200 dark:bg-slate-800 cursor-not-allowed opacity-60">
                      Disabled Button (Fill fields first)
                    </button>
                  )}
                </div>

                {/* Additional interactive controls */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
                  <span className="text-slate-600 dark:text-slate-300 font-semibold">
                    {isRTL ? 'مفتاح التبديل المتفاعل (Toggle Switch):' : 'Interactive Switch Component:'}
                  </span>
                  <button 
                    onClick={() => setToggleActive(!toggleActive)}
                    className="cursor-pointer transition-transform active:scale-95"
                  >
                    {toggleActive ? (
                      <ToggleRight className="w-8 h-8 text-purple-600" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-slate-400" />
                    )}
                  </button>
                </div>
              </div>
            )}

          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono relative z-10">
            <span>UI Output: Hi-Fi Screens + Design System</span>
            <span className="text-purple-500 font-bold">{isRTL ? '✨ تناغم بصري + تسليم سلس للكود' : '✨ 100% Consistent UI Kit'}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
