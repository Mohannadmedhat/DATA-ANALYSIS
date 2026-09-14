import React, { useState } from 'react';
import { 
  Square, 
  CreditCard, 
  FileText, 
  Menu, 
  SlidersHorizontal, 
  Layers, 
  Image as ImageIcon,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Language } from '../../types';

interface ComponentAnatomyVisualProps {
  language: Language;
  isDark?: boolean;
}

export const ComponentAnatomyVisual: React.FC<ComponentAnatomyVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';

  const components = [
    {
      id: 'button',
      name: isRTL ? 'Buttons (الأزرار)' : 'Buttons',
      desc: isRTL ? 'محرك الإجراءات الأول: Primary, Secondary, Ghost, Disabled, Loading.' : 'Action triggers: Primary, Secondary, Ghost, Loading states.',
      icon: Square,
      anatomy: [
        { label: 'Container / Frame', desc: isRTL ? 'المحيط الخارجي ونصف قطر الحواف (Corner Radius)' : 'Background, border-radius & padding' },
        { label: 'Label / Typography', desc: isRTL ? 'نص الإجراء الواضح (Verb + Noun)' : 'Action-oriented text (14-16px SemiBold)' },
        { label: 'Leading / Trailing Icon', desc: isRTL ? 'أيقونة إرشادية تدعم الفهم السريع' : 'Visual clue for faster cognition' },
        { label: 'State Feedback', desc: isRTL ? 'تغير بصري عند التحويم، النقر أو التعطيل' : 'Hover, Pressed, Focused & Disabled states' }
      ]
    },
    {
      id: 'form',
      name: isRTL ? 'Forms & Inputs (النماذج وحقول الإدخال)' : 'Forms & Inputs',
      desc: isRTL ? 'جمع بيانات المستخدم بدقة وأمان وسرعة مع التوجيه الفوري.' : 'Data collection with real-time inline validation.',
      icon: FileText,
      anatomy: [
        { label: 'Field Label', desc: isRTL ? 'عنوان الحقل الواضح والمقروء في الأعلى' : 'Persistent top label above input' },
        { label: 'Input Box', desc: isRTL ? 'مساحة الإدخال والـ Placeholder التوضيحي' : 'Container with clear 8pt padding' },
        { label: 'Helper / Error Text', desc: isRTL ? 'رسالة الإرشاد أو تنبيه الخطأ الدقيق' : 'Sub-text explaining format or validation error' },
        { label: 'Focus & Active Glow', desc: isRTL ? 'حد ملون يؤكد للمستخدم أين هو الآن' : 'Distinct focus ring for accessibility' }
      ]
    },
    {
      id: 'card',
      name: isRTL ? 'Cards (بطاقات المحتوى)' : 'Cards',
      desc: isRTL ? 'تجميع المعلومات المرتبطة في وحدة بصرية مستقلة سهلة المسح.' : 'Self-contained containers grouping related information.',
      icon: CreditCard,
      anatomy: [
        { label: 'Card Header & Badge', desc: isRTL ? 'عنوان البطاقة وشارة التصنيف' : 'Category tag and headline' },
        { label: 'Media Thumbnail', desc: isRTL ? 'صورة أو فيديو معبر' : 'Visual asset with fixed aspect ratio' },
        { label: 'Body Content', desc: isRTL ? 'النصوص والشرح التفصيلي' : 'Concise supporting typography' },
        { label: 'Card Action Area', desc: isRTL ? 'أزرار الحجز، الشراء أو القراءة' : 'Primary CTA and secondary triggers' }
      ]
    },
    {
      id: 'navigation',
      name: isRTL ? 'Navigation & Tabs (التنقل والتبويبات)' : 'Navigation & Tabs',
      desc: isRTL ? 'البوصلة الرقمية للتطبيق: App Bars, Tab Bars, Sidebars.' : 'Wayfinding systems across desktop and mobile.',
      icon: Menu,
      anatomy: [
        { label: 'Active Indicator', desc: isRTL ? 'مؤشر بصري واضح للتبويب النشط' : 'Color pill or underline for active route' },
        { label: 'Tab Icons & Labels', desc: isRTL ? 'أيقونة معبرة مرفقة بنص مقروء' : 'Paired icon + text label for cognitive clarity' },
        { label: 'Badge Counter', desc: isRTL ? 'دائرة التنبيهات والإشعارات الجديدة' : 'Notification counter badge' },
        { label: 'Sticky Elevation', desc: isRTL ? 'ظل أو خلفية زجاجية تضمن الظهور المستمر' : 'Blur or elevation above scrolling content' }
      ]
    }
  ];

  const [selectedCompId, setSelectedCompId] = useState<string>('button');
  const activeComp = components.find(c => c.id === selectedCompId) || components[0];

  return (
    <div className="w-full flex flex-col gap-4 py-1">
      {/* Component Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {components.map((comp) => {
          const Icon = comp.icon;
          const isSelected = comp.id === selectedCompId;
          return (
            <button
              key={comp.id}
              onClick={() => setSelectedCompId(comp.id)}
              className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex items-center gap-2.5 ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md scale-[1.02]'
                  : isDark
                    ? 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20' : (isDark ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600')}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold leading-tight line-clamp-1">
                {comp.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Anatomy Interactive Breakdown */}
      <div className={`p-5 sm:p-6 rounded-2xl border transition-all ${
        isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-500 block">
              {isRTL ? 'تشريح المكون البصري (Component Anatomy)' : 'UI Component Anatomy & Structure'}
            </span>
            <h3 className={`text-base sm:text-lg font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {activeComp.name}
            </h3>
          </div>
          <span className={`text-xs px-3 py-1 rounded-full ${
            isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
          }`}>
            {activeComp.desc}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {activeComp.anatomy.map((part, pIdx) => (
            <div 
              key={pIdx}
              className={`p-3.5 rounded-xl border flex flex-col justify-between ${
                isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200/70'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                    {pIdx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-slate-950 dark:text-white">
                    {part.label}
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {part.desc}
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">
                  {isRTL ? 'معيار التصميم القياسي' : 'Industry Standard Pattern'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
