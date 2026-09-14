import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Sliders, 
  Eye, 
  Sparkles, 
  RotateCcw,
  Palette
} from 'lucide-react';
import { Language } from '../../types';

interface ContrastCheckerSimulatorProps {
  language: Language;
  isDark?: boolean;
}

export const ContrastCheckerSimulator: React.FC<ContrastCheckerSimulatorProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';

  const [textColor, setTextColor] = useState<string>('#1e293b');
  const [bgColor, setBgColor] = useState<string>('#f8fafc');
  const [fontSize, setFontSize] = useState<number>(16);
  const [visionMode, setVisionMode] = useState<'normal' | 'protanopia' | 'deuteranopia' | 'grayscale'>('normal');

  // Convert hex to RGB luminance
  const getLuminance = (hex: string) => {
    const cleanHex = hex.replace('#', '');
    if (cleanHex.length !== 6) return 0.5;
    const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
    const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
    const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

    const [rr, gg, bb] = [r, g, b].map(v => 
      v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );
    return 0.2126 * rr + 0.7152 * gg + 0.0722 * bb;
  };

  const lum1 = getLuminance(textColor);
  const lum2 = getLuminance(bgColor);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  const ratio = (brightest + 0.05) / (darkest + 0.05);
  const roundedRatio = Math.round(ratio * 10) / 10;

  const passesAA = roundedRatio >= 4.5;
  const passesAAA = roundedRatio >= 7.0;
  const passesAALarge = roundedRatio >= 3.0;

  const presets = [
    { label: isRTL ? 'تباين مثالي (AA+)' : 'Ideal Contrast', text: '#0f172a', bg: '#ffffff' },
    { label: isRTL ? 'أزرق احترافي' : 'Brand Indigo', text: '#4338ca', bg: '#eef2ff' },
    { label: isRTL ? 'خطأ شائع (رمادي باهت)' : 'Failing Gray', text: '#94a3b8', bg: '#ffffff' },
    { label: isRTL ? 'ثيم ليلي داكن' : 'Dark Mode AA', text: '#f8fafc', bg: '#0b1324' }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Simulator Controls & Presets */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-blue-500" />
          <span className="text-xs font-bold text-slate-900 dark:text-white">
            {isRTL ? 'مختبر فحص التباين اللوني المباشر (Live WCAG 2.1 Contrast Lab)' : 'Live WCAG Contrast Lab & Vision Simulator'}
          </span>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] text-slate-400 font-semibold">{isRTL ? 'تجارب سريعة:' : 'Presets:'}</span>
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setTextColor(p.text);
                setBgColor(p.bg);
              }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-all cursor-pointer ${
                textColor === p.text && bgColor === p.bg
                  ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                  : isDark ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Live Canvas vs Control Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left: Live Render Canvas with Selected Vision Filter */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border p-5 shadow-sm transition-all"
             style={{
               backgroundColor: bgColor,
               filter: visionMode === 'grayscale' ? 'grayscale(100%)' : visionMode === 'protanopia' ? 'hue-rotate(45deg)' : visionMode === 'deuteranopia' ? 'hue-rotate(90deg)' : 'none'
             }}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-sm border"
                    style={{ color: textColor, borderColor: `${textColor}40` }}>
                {isRTL ? 'معاينة حية للمستخدم' : 'Live User Viewport'}
              </span>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded opacity-75 font-semibold"
                    style={{ color: textColor }}>
                Font: {fontSize}px • Ratio: {roundedRatio}:1
              </span>
            </div>

            <h3 className="font-extrabold tracking-tight mb-2 leading-snug"
                style={{ color: textColor, fontSize: `${fontSize * 1.5}px` }}>
              {isRTL ? 'سهولة القراءة والتباين اللوني' : 'Accessible Digital Typography'}
            </h3>

            <p className="leading-relaxed font-medium mb-4 max-w-lg"
               style={{ color: textColor, fontSize: `${fontSize}px` }}>
              {isRTL 
                ? 'النصوص عالية التباين تتيح لجميع المستخدمين، بما في ذلك كبار السن وضعاف البصر وتحت أشعة الشمس، قراءة المحتوى بدون إجهاد.' 
                : 'High contrast typography enables users under bright sunlight and low vision constraints to read content effortlessly without eye fatigue.'}
            </p>

            <button 
              className="px-4 py-2 rounded-lg font-bold text-xs shadow-md transition-transform active:scale-95 cursor-pointer"
              style={{
                backgroundColor: textColor,
                color: bgColor
              }}
            >
              {isRTL ? 'زر الإجراء التفاعلي (CTA Button)' : 'Primary Action Button'}
            </button>
          </div>

          <div className="pt-3 mt-3 border-t flex items-center justify-between text-[11px] opacity-80"
               style={{ borderColor: `${textColor}20`, color: textColor }}>
            <span>{isRTL ? 'معايير إتاحة الويب العالمية' : 'Web Content Accessibility Guidelines'}</span>
            <span className="font-bold">{passesAA ? '✅ Compliant' : '❌ Non-Compliant'}</span>
          </div>
        </div>

        {/* Right: Controls & WCAG Score Badges */}
        <div className={`lg:col-span-5 p-4 rounded-2xl border flex flex-col justify-between ${
          isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div>
            {/* Contrast Ratio Hero Badge */}
            <div className={`p-3.5 rounded-xl border flex items-center justify-between mb-3 ${
              passesAA
                ? (isDark ? 'bg-emerald-950/40 border-emerald-800/40 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800')
                : (isDark ? 'bg-rose-950/40 border-rose-800/40 text-rose-300' : 'bg-rose-50 border-rose-200 text-rose-800')
            }`}>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider block">
                  {isRTL ? 'نسبة التباين الفعلية' : 'Calculated Ratio'}
                </span>
                <span className="text-xl sm:text-2xl font-black font-mono">
                  {roundedRatio} : 1
                </span>
              </div>

              <div className="text-end">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md inline-block shadow-sm ${
                  passesAA ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                }`}>
                  {passesAA ? (isRTL ? 'ناجح (Pass AA)' : 'Passes AA') : (isRTL ? 'راسب (Fail AA)' : 'Fails AA')}
                </span>
                <span className="text-[10px] block mt-1 opacity-80 font-mono">Min: 4.5:1</span>
              </div>
            </div>

            {/* Compliance Matrix 3 Badges */}
            <div className="grid grid-cols-3 gap-1.5 mb-3 text-center">
              <div className={`p-2 rounded-lg border text-[11px] font-bold ${
                passesAALarge 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' 
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-500'
              }`}>
                <span className="block text-[10px] opacity-70">Large Text (3:1)</span>
                <span>{passesAALarge ? '✓ PASS' : '✗ FAIL'}</span>
              </div>

              <div className={`p-2 rounded-lg border text-[11px] font-bold ${
                passesAA 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' 
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-500'
              }`}>
                <span className="block text-[10px] opacity-70">WCAG AA (4.5:1)</span>
                <span>{passesAA ? '✓ PASS' : '✗ FAIL'}</span>
              </div>

              <div className={`p-2 rounded-lg border text-[11px] font-bold ${
                passesAAA 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' 
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-500'
              }`}>
                <span className="block text-[10px] opacity-70">WCAG AAA (7:1)</span>
                <span>{passesAAA ? '✓ PASS' : '– WARN'}</span>
              </div>
            </div>

            {/* Color Pickers & Sliders */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {isRTL ? 'لون النص (Text Color):' : 'Text Color:'}
                </span>
                <div className="flex items-center gap-2">
                  <input 
                    type="color" 
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-7 h-7 rounded border cursor-pointer"
                  />
                  <span className="text-xs font-mono text-slate-500">{textColor}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {isRTL ? 'لون الخلفية (Background):' : 'Background:'}
                </span>
                <div className="flex items-center gap-2">
                  <input 
                    type="color" 
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-7 h-7 rounded border cursor-pointer"
                  />
                  <span className="text-xs font-mono text-slate-500">{bgColor}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {isRTL ? 'محاكي ضعف البصر:' : 'Vision Filter:'}
                </span>
                <select 
                  value={visionMode}
                  onChange={(e: any) => setVisionMode(e.target.value)}
                  className={`text-xs p-1 px-2 rounded-lg border cursor-pointer font-medium ${
                    isDark ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <option value="normal">{isRTL ? 'رؤية طبيعية (Normal)' : 'Normal Vision'}</option>
                  <option value="protanopia">{isRTL ? 'عمى أحمر (Protanopia)' : 'Protanopia (Red-Blind)'}</option>
                  <option value="deuteranopia">{isRTL ? 'عمى أخضر (Deuteranopia)' : 'Deuteranopia (Green-Blind)'}</option>
                  <option value="grayscale">{isRTL ? 'تدرج رمادي (Monochrome)' : 'Monochrome'}</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 text-center">
            💡 {isRTL ? 'جرب تغيير الألوان لمعاينة النتيجة مع الطلاب مباشرة في القاعة!' : 'Experiment with colors to demonstrate WCAG compliance live in class!'}
          </div>
        </div>

      </div>
    </div>
  );
};
