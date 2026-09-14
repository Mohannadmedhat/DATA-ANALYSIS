import React, { useState } from 'react';
import { 
  Play, 
  Layers, 
  Sparkles, 
  CheckCircle, 
  XCircle, 
  Zap, 
  ShoppingBag, 
  Heart, 
  Check, 
  AlertTriangle 
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const PrototypingLabSimulator: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [mode, setMode] = useState<'static' | 'interactive'>('interactive');
  
  // Interactive simulator states
  const [cartCount, setCartCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<'black' | 'silver' | 'gold'>('black');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [staticClickMessage, setStaticClickMessage] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (mode === 'static') {
      setStaticClickMessage(isRTL ? '⚠️ لا يوجد تفاعل! دي مجرد صورة ثابتة (Flat JPG).. المطور مش هيعرف الزرار ده بيفتح إيه!' : '⚠️ Zero response! This is a static screen mockup. Engineers cannot guess the transition behavior!');
      setTimeout(() => setStaticClickMessage(null), 3500);
      return;
    }

    setCartCount(prev => prev + 1);
    setIsDrawerOpen(true);
  };

  const handleLike = () => {
    if (mode === 'static') {
      setStaticClickMessage(isRTL ? '⚠️ الشاشة الثابتة لا توضح حالات التفاعل (States: Hover / Active / Selected)!' : '⚠️ Static screens fail to communicate interactive states (Hover, Active, Selected)!');
      setTimeout(() => setStaticClickMessage(null), 3500);
      return;
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Controller Bar */}
      <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 shadow-sm ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-lg ${
            mode === 'interactive' 
              ? (isDark ? 'bg-purple-950/80 text-purple-400 border border-purple-800/60' : 'bg-purple-100 text-purple-700 border border-purple-300')
              : (isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-700 border border-slate-300')
          }`}>
            <Play className="w-4 h-4" />
          </div>
          <div>
            <h4 className={`text-xs sm:text-sm font-extrabold flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {isRTL ? 'مختبر النماذج التفاعلية: الشاشة الثابتة مقابل البروتوتايب الحي' : 'Prototyping Lab: Static Mockup vs Interactive Prototype'}
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                mode === 'interactive' 
                  ? (isDark ? 'bg-purple-950 text-purple-300 border-purple-800' : 'bg-purple-50 text-purple-800 border-purple-200')
                  : (isDark ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-300')
              }`}>
                {mode === 'interactive' ? (isRTL ? '⚡ تفاعل حركي حي (Live Prototype)' : '⚡ Live Interactive') : (isRTL ? '🖼️ شاشة ثابتة (Static Mockup)' : '🖼️ Static JPG')}
              </span>
            </h4>
            <p className={`text-[11px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {isRTL 
                ? 'جرب الضغط على أزرار الهاتف واكتشف كيف يمنع البروتوتايب التفاعلي أخطاء الفهم والتنفيذ'
                : 'Click elements inside the phone mockup to experience why prototypes prevent misinterpretation.'}
            </p>
          </div>
        </div>

        {/* Mode Switcher Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setMode('static');
              setIsDrawerOpen(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              mode === 'static'
                ? (isDark ? 'bg-slate-800 text-white border-slate-600 shadow-sm' : 'bg-slate-900 text-white border-slate-900 shadow-sm')
                : (isDark ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white' : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950')
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isRTL ? '1. شاشة ثابتة (Static)' : '1. Static Mockup'}</span>
          </button>

          <button
            onClick={() => {
              setMode('interactive');
              setStaticClickMessage(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              mode === 'interactive'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-600/30 font-extrabold'
                : (isDark ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white' : 'bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900')
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{isRTL ? '2. بروتوتايب تفاعلي (Interactive) ✨' : '2. Interactive Prototype ✨'}</span>
          </button>
        </div>
      </div>

      {/* Main Sandbox Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left 5 cols: Phone Simulator Canvas */}
        <div className={`lg:col-span-5 rounded-2xl border p-4 flex flex-col items-center justify-center relative ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          
          {/* Static warning alert banner */}
          {staticClickMessage && (
            <div className="absolute top-3 inset-x-4 z-30 p-2.5 rounded-xl bg-rose-600 text-white text-xs font-bold shadow-xl text-center flex items-center justify-center gap-1.5 animate-pulse">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{staticClickMessage}</span>
            </div>
          )}

          {/* Smartphone Frame */}
          <div className="w-full max-w-[270px] rounded-[32px] border-4 border-slate-800 bg-slate-950 shadow-2xl p-3 relative overflow-hidden flex flex-col justify-between text-slate-100">
            
            {/* Phone Top Notch */}
            <div className="flex items-center justify-between px-2 pt-1 pb-2 text-[10px] text-slate-400 font-mono">
              <span>09:41</span>
              <div className="w-14 h-3 bg-black rounded-full mx-auto" />
              <span>5G 100%</span>
            </div>

            {/* App Nav */}
            <div className="flex items-center justify-between px-2 py-1 mb-1">
              <span className="text-xs font-black tracking-wider text-purple-400">STUDIO PRO</span>
              <button 
                onClick={handleLike} 
                className={`p-1.5 rounded-full transition-all cursor-pointer ${
                  isLiked ? 'text-rose-500 bg-rose-500/20 scale-110' : 'text-slate-400 bg-slate-800 hover:text-white'
                }`}
                title="Like product"
              >
                <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            {/* Product Image Stage */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-3.5 flex flex-col items-center justify-center my-1 text-center">
              <div className="text-4xl mb-1.5 transition-transform duration-300 hover:scale-105">
                {selectedColor === 'black' ? '🎧' : selectedColor === 'silver' ? '🎧' : '🎧'}
              </div>
              <h5 className="text-xs font-extrabold text-white">
                {isRTL ? 'سماعة Studio Wireless' : 'Studio Wireless Pro'}
              </h5>
              <span className="text-xs font-black text-purple-400 font-mono mt-0.5">$249.00</span>
            </div>

            {/* Color Switcher */}
            <div className="flex items-center justify-center gap-2 my-2">
              {(['black', 'silver', 'gold'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    if (mode === 'static') {
                      setStaticClickMessage(isRTL ? '⚠️ الشاشات الثابتة لا توضح تغير الألوان والمتغيرات التفاعلية!' : '⚠️ Static screens cannot demonstrate color token variations!');
                      setTimeout(() => setStaticClickMessage(null), 3500);
                      return;
                    }
                    setSelectedColor(c);
                  }}
                  className={`w-4 h-4 rounded-full border-2 transition-all cursor-pointer ${
                    selectedColor === c ? 'ring-2 ring-purple-500 scale-110' : 'opacity-60'
                  } ${
                    c === 'black' ? 'bg-slate-900 border-slate-600' : c === 'silver' ? 'bg-slate-300 border-slate-100' : 'bg-amber-400 border-amber-300'
                  }`}
                />
              ))}
            </div>

            {/* Main Action Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-xs shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{isRTL ? 'إضافة إلى حقيبة الشراء' : 'Add to Cart ($249)'}</span>
            </button>

            {/* Interactive Bottom Sheet Drawer */}
            {isDrawerOpen && mode === 'interactive' && (
              <div className="absolute inset-x-0 bottom-0 bg-slate-900 border-t-2 border-purple-500 rounded-t-3xl p-3.5 shadow-2xl z-20">
                <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-2.5" />
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{isRTL ? 'تمت الإضافة للسلة بنجاح!' : 'Added to Cart!'}</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-2.5">
                  <span>{isRTL ? 'إجمالي العناصر:' : 'Total items:'}</span>
                  <span className="font-mono font-bold text-purple-400">{cartCount} items</span>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-bold cursor-pointer"
                >
                  {isRTL ? 'متابعة التسوق' : 'Continue Shopping'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right 7 cols: Clear High-Contrast Educational Insights */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3">
          
          <div className={`p-5 rounded-2xl border shadow-sm flex-1 flex flex-col justify-between ${
            mode === 'interactive'
              ? (isDark ? 'bg-purple-950/30 border-purple-800/60' : 'bg-purple-50/90 border-purple-200')
              : (isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200')
          }`}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-black px-3 py-1 rounded-lg border shadow-sm ${
                  mode === 'interactive'
                    ? (isDark ? 'bg-purple-900 text-purple-100 border-purple-700' : 'bg-purple-600 text-white border-purple-700')
                    : (isDark ? 'bg-slate-800 text-slate-100 border-slate-700' : 'bg-slate-900 text-white border-slate-950')
                }`}>
                  {mode === 'interactive' ? (isRTL ? '✨ قوة البروتوتايب التفاعلي الحي' : 'Why Interactive Prototypes Win') : (isRTL ? '⚠️ كوارث الشاشات الثابتة (Flat Mockups)' : 'Static Mockup Pitfalls')}
                </span>
                <span className={`text-xs font-mono font-black ${
                  mode === 'interactive' ? (isDark ? 'text-emerald-400' : 'text-emerald-700') : (isDark ? 'text-rose-400' : 'text-rose-700')
                }`}>
                  {mode === 'interactive' ? (isRTL ? '100% وضوح وفهم ⭐' : '100% Clarity & Flow ⭐') : (isRTL ? '30% وضوح وتخمين ⚠️' : '30% Guesswork & Risk ⚠️')}
                </span>
              </div>

              <h4 className={`text-base sm:text-lg font-black mb-3 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                {mode === 'interactive'
                  ? (isRTL ? 'ليه البروتوتايب بيوفر على الشركة ملايين وساعات شغل؟' : 'How Interactive Prototypes Save Companies Millions?')
                  : (isRTL ? 'ليه الاعتماد على صور JPG الثابتة بيعمل كوارث برمجية وخناقات؟' : 'Why Flat Static Mockups Trigger Expensive Engineering Errors?')}
              </h4>

              <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed font-bold">
                {mode === 'interactive' ? (
                  <>
                    <div className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                      isDark ? 'bg-slate-900/90 border-purple-900/60 text-slate-100' : 'bg-white border-purple-300 text-slate-950 shadow-sm'
                    }`}>
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span>{isRTL ? 'المطور بيشوف حركة وانسيابية الشاشة بعينه، وبياخد قيم الـ Easing والوقت بالمللي بدون أي تخمين.' : 'Engineers inspect real physics, transitions, and easing curves directly.'}</span>
                    </div>
                    <div className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                      isDark ? 'bg-slate-900/90 border-purple-900/60 text-slate-100' : 'bg-white border-purple-300 text-slate-950 shadow-sm'
                    }`}>
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span>{isRTL ? 'المستخدم بيجرب إحساس المنتج الحقيقي في اختبارات الاستخدام (Maze)، كأنه ماسك تطبيق شغال بجد.' : 'Real users experience authentic tactile feel during usability validation.'}</span>
                    </div>
                    <div className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                      isDark ? 'bg-slate-900/90 border-purple-900/60 text-slate-100' : 'bg-white border-purple-300 text-slate-950 shadow-sm'
                    }`}>
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span>{isRTL ? 'بنكتشف الأخطاء وتوهان العميل بدري، ونصلحها في ثانية في التصميم بدل ما نهد كود اتكتب في شهور!' : 'Detecting logical dead-ends before developers spend sprints coding.'}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                      isDark ? 'bg-slate-900/90 border-rose-900/60 text-slate-100' : 'bg-white border-rose-300 text-slate-950 shadow-sm'
                    }`}>
                      <XCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-rose-400' : 'text-rose-600'}`} />
                      <span>{isRTL ? 'المطور بيبقى تايه مش عارف لما يدوس على الزرار: هل بتفتح صفحة جديدة ولا بتطلع له Bottom Sheet من تحت؟' : 'Developers cannot determine whether button opens a new page or modal sheet.'}</span>
                    </div>
                    <div className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                      isDark ? 'bg-slate-900/90 border-rose-900/60 text-slate-100' : 'bg-white border-rose-300 text-slate-950 shadow-sm'
                    }`}>
                      <XCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-rose-400' : 'text-rose-600'}`} />
                      <span>{isRTL ? 'غياب كامل لحالات الزرار التفاعلية (لما تلمسه، لما يحمل Loading، أو لما يكون مطفي وغير متاح Disabled).' : 'Complete absence of interaction states (Hover, Loading, Disabled).'}</span>
                    </div>
                    <div className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                      isDark ? 'bg-slate-900/90 border-rose-900/60 text-slate-100' : 'bg-white border-rose-300 text-slate-950 shadow-sm'
                    }`}>
                      <XCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-rose-400' : 'text-rose-600'}`} />
                      <span>{isRTL ? 'اجتماعات تضييع وقت لا تنتهي عشان تقعد تشرح لكل مبرمج الشاشة دي كانت المفروض تفتح إزاي!' : 'Dozens of wasted hours in meetings explaining how elements should move.'}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Designer Golden Axiom Card */}
            <div className={`mt-3 p-3.5 rounded-xl border text-xs font-bold leading-relaxed ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-purple-200 text-slate-950 shadow-sm'
            }`}>
              <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="font-black text-sm">{isRTL ? 'نصيحة المصمم المحترف:' : 'Designer Axiom:'}</span>
              </div>
              <p className={isDark ? 'text-slate-200' : 'text-slate-800'}>
                {isRTL 
                  ? 'Figma Prototype كافي جداً وبيغطي 90% من شغلك اليومي، بينما ProtoPie بتحتاجه بس للحاجات المعقدة أوي وحساسات الموبايل الحية.'
                  : 'Figma Prototype covers 90% of daily flows; ProtoPie handles advanced sensors and math logic.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
