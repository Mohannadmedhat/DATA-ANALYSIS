import React, { useState } from 'react';
import { 
  Palette, 
  Type, 
  MousePointerClick, 
  Grid, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Sliders
} from 'lucide-react';
import { Language } from '../../types';

interface UiFundamentalsVisualProps {
  language: Language;
  isDark?: boolean;
}

export const UiFundamentalsVisual: React.FC<UiFundamentalsVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<number>(0);

  const uiPillars = [
    {
      id: 'colors',
      icon: Palette,
      number: '01',
      title: isRTL ? 'نظام الألوان والتباين' : 'Colors & WCAG Contrast',
      desc: isRTL ? 'تناسق ألوان مريح للعين، يعكس هوية البراند، ويحقق أعلى وضوح وتباين للقراءة (معايير WCAG AA).' : 'Harmonious brand palette with verified high-contrast readability.',
      preview: (
        <div className="flex items-center gap-1.5 pt-1">
          <div className="flex -space-x-1">
            <span className="w-5 h-5 rounded-full bg-[#27aae1] border-2 border-white shadow-sm" title="Brand Blue" />
            <span className="w-5 h-5 rounded-full bg-slate-900 border-2 border-white shadow-sm" title="Slate Dark" />
            <span className="w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" title="Success Green" />
            <span className="w-5 h-5 rounded-full bg-amber-400 border-2 border-white shadow-sm" title="Warning Amber" />
          </div>
          <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 ms-auto">
            WCAG 4.5:1 AA
          </span>
        </div>
      )
    },
    {
      id: 'typography',
      icon: Type,
      number: '02',
      title: isRTL ? 'الخطوط والتراتبية الطباعية' : 'Typography Scale & Hierarchy',
      desc: isRTL ? 'اختيار خطوط واضحة وتوزيع الأحجام (H1, H2, Body) بحيث تقود عين المستخدم للمعلومة الأهم أولاً.' : 'Clear font scale directing human eye to key headlines effortlessly.',
      preview: (
        <div className="space-y-0.5 pt-1">
          <span className="text-xs font-black text-slate-900 dark:text-white block">Heading 24px Bold</span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Body Text 14px Medium (1.5 Line-height)</span>
        </div>
      )
    },
    {
      id: 'components',
      icon: MousePointerClick,
      number: '03',
      title: isRTL ? 'الأزرار وحقول الإدخال' : 'Buttons & Interactive Controls',
      desc: isRTL ? 'أدوات التفاعل المباشرة اللي بتخلي العميل يدوس ويكتب ويشتري، مع توضيح فوري لحالة الضغط والتحميل.' : 'Direct touchpoints with explicit default, hover, focused and active states.',
      preview: (
        <div className="flex items-center gap-2 pt-1">
          <button className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[10px] font-bold shadow-sm">
            {isRTL ? 'زر أساسي' : 'Primary CTA'}
          </button>
          <button className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
            {isRTL ? 'زر ثانوي' : 'Secondary'}
          </button>
        </div>
      )
    },
    {
      id: 'layout',
      icon: Grid,
      number: '04',
      title: isRTL ? 'الترتيب والشبكة الهندسية 8pt' : 'Layout & 8pt Spatial Grid',
      desc: isRTL ? 'تنظيم المسافات والهوامش بنظام مضاعفات الرقم 8 عشان الواجهة تكون متناسقة ومريحة للمبرمجين.' : 'Consistent 8pt rhythm ensuring pixel-perfect developer handoff.',
      preview: (
        <div className="flex items-center justify-between text-[10px] font-mono text-blue-600 dark:text-blue-400 pt-1">
          <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">Pad: 16px</span>
          <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">Gap: 8px</span>
          <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">Radius: 12px</span>
        </div>
      )
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-1" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* 4 Quadrants Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {uiPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isSelected = activeTab === idx;
          return (
            <div
              key={pillar.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 ${
                isSelected
                  ? 'border-blue-500 ring-2 ring-blue-500/40 bg-blue-50/40 dark:bg-slate-900 shadow-md'
                  : isDark
                    ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                    isSelected 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}>
                    {pillar.number}
                  </span>
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className={`text-xs sm:text-sm font-extrabold mb-1.5 leading-snug transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  <bdi>{pillar.title}</bdi>
                </h4>
                <p className={`text-[11px] leading-relaxed mb-3 font-medium ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <bdi>{pillar.desc}</bdi>
                </p>
              </div>

              {/* Live Preview Element */}
              <div className={`pt-2 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                {pillar.preview}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary Banner */}
      <div className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col md:flex-row items-center justify-between gap-4 ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
      }`}>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase bg-blue-600 text-white">
              <bdi>{isRTL ? 'القاعدة الذهبية لتصميم الـ UI' : 'The UI Golden Rule'}</bdi>
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold leading-relaxed text-slate-900 dark:text-white">
            <bdi>
              {isRTL
                ? 'الـ UI الشاطر هو اللي يخلي الشاشة مريحة، واضحة، وتخدم راحة المستخدم من غير بهرجة عشوائية تشتت عينه.'
                : 'Great UI balances visual craft, cognitive hierarchy, and frictionless interaction.'}
            </bdi>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold font-mono px-3 py-1.5 rounded-xl border bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800">
            <bdi>{isRTL ? 'تناسق • تباين • نظام شبكي' : 'Harmony • Contrast • Grid'}</bdi>
          </span>
        </div>
      </div>
    </div>
  );
};
