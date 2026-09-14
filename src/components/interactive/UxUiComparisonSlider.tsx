import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  SplitSquareVertical, 
  Layers, 
  Palette, 
  Sparkles, 
  Sliders, 
  CheckCircle2, 
  ArrowLeftRight,
  Shield,
  Star,
  ShoppingBag,
  Heart,
  TrendingUp
} from 'lucide-react';
import { Language } from '../../types';

interface UxUiComparisonSliderProps {
  language: Language;
}

export const UxUiComparisonSlider: React.FC<UxUiComparisonSliderProps> = ({ language }) => {
  const isRTL = language === 'ar';
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slider' | 'ux-only' | 'ui-only'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (isRTL) {
      percentage = 100 - percentage;
    }
    percentage = Math.max(0, Math.min(100, percentage));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  // Wireframe UI (UX side)
  const renderWireframe = () => (
    <div className="w-full h-full bg-slate-900/90 text-slate-300 p-4 sm:p-5 flex flex-col justify-between font-mono select-none border border-dashed border-slate-700 rounded-xl relative overflow-hidden">
      {/* Structural Wireframe Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Wireframe Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-dashed border-slate-700 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-slate-500 rounded flex items-center justify-center text-[10px]">
              [X]
            </div>
            <span className="text-xs font-bold text-slate-400">
              {isRTL ? '[شعار_المنتج]' : '[Logo_Placeholder]'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-5 border border-dashed border-slate-600 rounded bg-slate-800/60 text-[10px] flex items-center justify-center">
              nav_item
            </div>
            <div className="w-16 h-5 border border-dashed border-slate-600 rounded bg-slate-800/60 text-[10px] flex items-center justify-center">
              nav_item
            </div>
          </div>
        </div>

        {/* Wireframe Hero Blueprint */}
        <div className="p-3 border border-slate-700 rounded-lg bg-slate-800/40 mb-3">
          <div className="h-4 w-3/4 bg-slate-700 rounded mb-2" />
          <div className="h-2.5 w-full bg-slate-700/50 rounded mb-1" />
          <div className="h-2.5 w-2/3 bg-slate-700/50 rounded mb-3" />
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 border-2 border-slate-400 text-slate-300 rounded text-xs font-bold bg-slate-700/50">
              [CTA_PRIMARY]
            </div>
            <div className="px-3 py-1.5 border border-dashed border-slate-600 text-slate-400 rounded text-xs">
              [CTA_SECONDARY]
            </div>
          </div>
        </div>
      </div>

      {/* Wireframe 3 Columns Structure */}
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-2 border border-dashed border-slate-700 rounded bg-slate-800/30 text-center">
            <div className="w-full aspect-[4/3] border border-slate-700 rounded mb-1.5 flex items-center justify-center text-[10px] text-slate-500">
              img_box_{i}
            </div>
            <div className="h-2.5 w-4/5 mx-auto bg-slate-700 rounded mb-1" />
            <div className="h-2 w-1/2 mx-auto bg-slate-700/60 rounded" />
          </div>
        ))}
      </div>

      <div className="mt-2 pt-2 border-t border-dashed border-slate-700 flex items-center justify-between text-[10px] text-slate-500">
        <span>UX: IA + Layout + Interaction Logic</span>
        <span className="text-amber-400 font-bold">{isRTL ? 'الهيكل المنطقي المجرد' : 'Wireframe Blueprint'}</span>
      </div>
    </div>
  );

  // High Fidelity Visual UI (UI side)
  const renderVisualUI = () => (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950/40 to-indigo-950/40 text-white p-4 sm:p-5 flex flex-col justify-between select-none rounded-xl relative overflow-hidden border border-blue-500/30 shadow-2xl backdrop-blur-md">
      {/* Ambient Lighting */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* High-Fi Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-xs font-extrabold tracking-tight text-white">
              SaaSify Pro
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-medium text-slate-300 hover:text-white px-2 py-1 rounded-md hover:bg-slate-800/60 transition-colors cursor-pointer">
              {isRTL ? 'المميزات' : 'Features'}
            </span>
            <span className="text-[11px] font-medium text-slate-300 hover:text-white px-2 py-1 rounded-md hover:bg-slate-800/60 transition-colors cursor-pointer">
              {isRTL ? 'الأسعار' : 'Pricing'}
            </span>
          </div>
        </div>

        {/* High-Fi Hero */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-900/40 to-indigo-900/30 border border-blue-500/20 mb-3 backdrop-blur-sm shadow-inner">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-1.5">
            <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
            {isRTL ? 'الإصدار 3.0 الجديد' : 'New Release 3.0'}
          </span>
          <h4 className="text-sm font-extrabold text-white leading-tight mb-1">
            {isRTL ? 'صمم منتجاتك بذكاء وجمال فائق' : 'Build Stunning Digital Products'}
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
            {isRTL ? 'منظومة تصميم متكاملة مع تناغم لوني فائق ونظام طباعي احترافي.' : 'Modern design system with verified accessible contrast and fluid micro-interactions.'}
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-500/30 transition-all flex items-center gap-1 cursor-pointer">
              <span>{isRTL ? 'ابدأ مجاناً' : 'Get Started'}</span>
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all cursor-pointer">
              {isRTL ? 'معاينة العرض' : 'Live Demo'}
            </button>
          </div>
        </div>
      </div>

      {/* High-Fi 3 Cards */}
      <div className="relative z-10 grid grid-cols-3 gap-2">
        {[
          { title: isRTL ? 'أمان متكامل' : 'Security', icon: Shield, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { title: isRTL ? 'سرعة فائقة' : 'Performance', icon: TrendingUp, color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { title: isRTL ? 'تخصيص كامل' : 'Custom UI', icon: Palette, color: 'text-purple-400', bg: 'bg-purple-500/10' }
        ].map((item, i) => (
          <div key={i} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-center hover:border-blue-500/40 transition-all group">
            <div className={`w-7 h-7 mx-auto rounded-md ${item.bg} ${item.color} flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform`}>
              <item.icon className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] font-bold text-slate-200 block">{item.title}</span>
            <span className="text-[9px] text-slate-400 block mt-0.5">100% Validated</span>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
        <span>UI: Colors + Typography + Micro-delight</span>
        <span className="text-blue-400 font-bold">{isRTL ? 'الواجهة البصرية الجمالية' : 'Visual High-Fidelity'}</span>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-slate-900/60 rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-xl backdrop-blur-md">
      {/* Top Mode Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-200">
            {isRTL ? 'المختبر التفاعلي: قارن بين الهيكل (UX) والواجهة (UI)' : 'Interactive Lab: Compare UX Wireframe vs Visual UI'}
          </span>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setViewMode('slider')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'slider'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>{isRTL ? 'سلايدر منزلق' : 'Split Slider'}</span>
          </button>
          <button
            onClick={() => setViewMode('ux-only')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'ux-only'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isRTL ? 'فقط UX' : 'UX Wireframe'}</span>
          </button>
          <button
            onClick={() => setViewMode('ui-only')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'ui-only'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>{isRTL ? 'فقط UI' : 'Visual UI'}</span>
          </button>
        </div>
      </div>

      {/* Comparison Stage Container */}
      <div 
        ref={containerRef}
        onMouseDown={() => viewMode === 'slider' && setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => viewMode === 'slider' && setIsDragging(true)}
        onTouchMove={handleTouchMove}
        className={`relative w-full h-[360px] sm:h-[390px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-slate-700/80 ${
          isDragging ? 'ring-2 ring-blue-500' : ''
        }`}
      >
        {viewMode === 'ux-only' && renderWireframe()}
        {viewMode === 'ui-only' && renderVisualUI()}

        {viewMode === 'slider' && (
          <>
            {/* Background Layer: High-Fi UI */}
            <div className="absolute inset-0 w-full h-full">
              {renderVisualUI()}
            </div>

            {/* Foreground Layer (Clipped): Wireframe UX */}
            <div 
              className="absolute inset-y-0 start-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div 
                className="w-full h-full"
                style={{ 
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' 
                }}
              >
                {renderWireframe()}
              </div>
            </div>

            {/* Draggable Divider Line & Moving Handle */}
            <div 
              className="absolute inset-y-0 z-30 flex items-center justify-center -translate-x-1/2 pointer-events-none"
              style={{ [isRTL ? 'right' : 'left']: `${sliderPos}%` }}
            >
              {/* Divider Line */}
              <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]" />

              {/* Central Draggable Knob */}
              <div className="absolute w-9 h-9 rounded-full bg-white text-slate-900 shadow-2xl border-2 border-blue-500 flex items-center justify-center transform active:scale-110 transition-transform">
                <ArrowLeftRight className="w-4 h-4 text-blue-600" />
              </div>

              {/* Dynamic Floating Badges moving with the Slider Handle */}
              {(() => {
                const showLeftTag = isRTL ? (100 - sliderPos > 18) : (sliderPos > 18);
                const showRightTag = isRTL ? (sliderPos > 18) : (100 - sliderPos > 18);

                return isRTL ? (
                  <>
                    {/* Left of divider (Visual UI side in RTL) */}
                    <div 
                      className={`absolute top-3 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-950/95 text-blue-300 border border-blue-500/60 shadow-xl whitespace-nowrap select-none backdrop-blur-md flex items-center gap-1.5 transition-all duration-200 ${
                        showLeftTag ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
                      }`}
                      style={{ right: '12px' }}
                    >
                      <span>واجهة UI</span>
                      <span className="text-blue-400">◄</span>
                    </div>

                    {/* Right of divider (Wireframe UX side in RTL) */}
                    <div 
                      className={`absolute top-3 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-950/95 text-amber-300 border border-amber-500/60 shadow-xl whitespace-nowrap select-none backdrop-blur-md flex items-center gap-1.5 transition-all duration-200 ${
                        showRightTag ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
                      }`}
                      style={{ left: '12px' }}
                    >
                      <span className="text-amber-400">►</span>
                      <span>هيكل UX</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left of divider (Wireframe UX side in LTR) */}
                    <div 
                      className={`absolute top-3 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-950/95 text-amber-300 border border-amber-500/60 shadow-xl whitespace-nowrap select-none backdrop-blur-md flex items-center gap-1.5 transition-all duration-200 ${
                        showLeftTag ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
                      }`}
                      style={{ right: '12px' }}
                    >
                      <span className="text-amber-400">◄</span>
                      <span>UX Wireframe</span>
                    </div>

                    {/* Right of divider (Visual UI side in LTR) */}
                    <div 
                      className={`absolute top-3 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-950/95 text-blue-300 border border-blue-500/60 shadow-xl whitespace-nowrap select-none backdrop-blur-md flex items-center gap-1.5 transition-all duration-200 ${
                        showRightTag ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
                      }`}
                      style={{ left: '12px' }}
                    >
                      <span>Visual UI</span>
                      <span className="text-blue-400">►</span>
                    </div>
                  </>
                );
              })()}
            </div>
          </>
        )}
      </div>

      {/* Helper Footer Instruction */}
      <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5 text-blue-400" />
          <span>{isRTL ? 'اسحب المقبض يميناً ويساراً لاكتشاف كيف تتحول متطلبات الـ UX إلى جماليات الـ UI.' : 'Drag slider left and right to inspect how UX logic transforms into high-fidelity UI.'}</span>
        </span>
        <span className="font-mono text-[11px] text-blue-400 font-bold hidden sm:inline-block">
          {Math.round(sliderPos)}% / {100 - Math.round(sliderPos)}%
        </span>
      </div>
    </div>
  );
};
