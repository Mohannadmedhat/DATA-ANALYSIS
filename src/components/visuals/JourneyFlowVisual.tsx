import React, { useState } from 'react';
import { 
  Smartphone, 
  Car, 
  CreditCard, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  HeartHandshake,
  Headphones,
  Compass,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { Language } from '../../types';

interface JourneyFlowVisualProps {
  language: Language;
  mode?: 'generic-journey' | 'uber-example';
  isDark?: boolean;
}

export const JourneyFlowVisual: React.FC<JourneyFlowVisualProps> = ({
  language,
  mode = 'uber-example',
  isDark = false
}) => {
  const isRTL = language === 'ar';
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      id: 'pre-ride',
      number: '01',
      title: isRTL ? 'قبل الركوب: طلب المشوار' : 'Phase 1: Pre-Ride & Request',
      subtitle: isRTL ? 'الوضوح والأمان المسبق' : 'Upfront Transparency & Trust',
      digital: {
        title: isRTL ? 'على شاشة الهاتف (10% UI)' : 'Digital Touchpoint (10% UI)',
        points: isRTL ? [
          'فتح الخريطة وتحديد موقعك بدقة بنقرة واحدة.',
          'معرفة السعر المسبق ووقت الوصول (ETA) بدون مفاجآت.',
          'عرض صورة السائق، تقييمه، ونوع ورقم لوحة السيارة.'
        ] : [
          'Live map pins pickup point instantly.',
          'Guaranteed upfront pricing & exact ETA.',
          'Driver photo, verified rating, and plate number.'
        ]
      },
      physical: {
        title: isRTL ? 'في العالم الواقعي (90% UX)' : 'Real-World Reality (90% UX)',
        points: isRTL ? [
          'الاطمئنان لهوية السائق ومطابقة لوحة العربية بسهولة.',
          'عدم الوقوف في الشارع للبحث عن تاكسي تحت الشمس.',
          'راحة البال ومعرفة التكلفة مسبقاً قبل الركوب.'
        ] : [
          'Effortless vehicle matching and passenger safety.',
          'No standing on the street waving down cabs.',
          'Total peace of mind before getting into the car.'
        ]
      }
    },
    {
      id: 'in-ride',
      number: '02',
      title: isRTL ? 'أثناء المشوار: التجربة والأمان' : 'Phase 2: The In-Ride Experience',
      subtitle: isRTL ? 'الراحة والهدوء والاطمئنان' : 'Comfort, Atmosphere & Safety',
      digital: {
        title: isRTL ? 'على شاشة الهاتف (10% UI)' : 'Digital Touchpoint (10% UI)',
        points: isRTL ? [
          'متابعة خط السير المباشر بالـ GPS خطوة بخطوة.',
          'مشاركة مسار الرحلة مع الأهل والأصدقاء للأمان.',
          'زر طوارئ ومساعدة متاح طوال الرحلة.'
        ] : [
          'Turn-by-turn live route tracking.',
          '1-tap trip sharing with family members.',
          'Emergency assistance SOS button always visible.'
        ]
      },
      physical: {
        title: isRTL ? 'في العالم الواقعي (90% UX)' : 'Real-World Reality (90% UX)',
        points: isRTL ? [
          'نظافة الصالون الداخلي، ريحة العربية، وتشغيل التكييف.',
          'أسلوب السائق المحترم وقيادته الآمنة والهادئة.',
          'عدم الحاجة لشرح الطريق أو توجيه السائق بنفسك.'
        ] : [
          'Clean cabin, fresh scent, and cool air conditioning.',
          'Respectful driver conduct and calm, safe driving.',
          'No need to give turn-by-turn directions to driver.'
        ]
      }
    },
    {
      id: 'post-ride',
      number: '03',
      title: isRTL ? 'الوصول والدفع: السحر الحقيقي' : 'Phase 3: Drop-Off & Support',
      subtitle: isRTL ? 'انعدام الاحتكاك واسترجاع المفقودات' : 'Frictionless Pay & Retention',
      digital: {
        title: isRTL ? 'على شاشة الهاتف (10% UI)' : 'Digital Touchpoint (10% UI)',
        points: isRTL ? [
          'إيصال إلكتروني فوري يوضح تفاصيل الحساب.',
          'تقييم السائق بـ 5 نجوم وإمكانية إضافة إكرامية.',
          'زر مخصص لاسترجاع المفقودات بضغطة واحدة.'
        ] : [
          'Instant digital receipt and fare breakdown.',
          '5-star rating flow with optional tip.',
          'Dedicated 1-click lost item recovery workflow.'
        ]
      },
      physical: {
        title: isRTL ? 'في العالم الواقعي (90% UX)' : 'Real-World Reality (90% UX)',
        points: isRTL ? [
          'النزول فوراً وإغلاق الباب دون الحاجة لفكة أو إحراج كاش.',
          'استرجاع محفظتك أو موبايلك لو نسيتهم بكل سهولة.',
          'الشعور بالرضا والولاء لتكرار المشوار غداً.'
        ] : [
          'Stepping out seamlessly with zero cash friction.',
          'Quick recovery of forgotten phones or bags.',
          'True delight leading to repeated habit loop.'
        ]
      }
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* 3 Spacious Phase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {phases.map((phase, idx) => {
          const isSelected = activePhase === idx;

          return (
            <div
              key={phase.id}
              onClick={() => setActivePhase(idx)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 ${
                isSelected
                  ? 'border-blue-500 ring-2 ring-blue-500/40 bg-blue-50/40 dark:bg-slate-900 shadow-md'
                  : isDark
                    ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg ${
                    isSelected 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}>
                    {isRTL ? `المرحلة ${phase.number}` : `Phase ${phase.number}`}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {phase.subtitle}
                  </span>
                </div>

                <h3 className={`text-sm sm:text-base font-extrabold mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  {phase.title}
                </h3>

                {/* Section 1: Digital 10% */}
                <div className={`p-2.5 rounded-xl border mb-2.5 ${
                  isDark 
                    ? 'bg-slate-950/60 border-blue-900/40' 
                    : 'bg-sky-50/60 border-sky-100'
                }`}>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="text-[11px] font-black text-blue-700 dark:text-blue-400">
                      {phase.digital.title}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {phase.digital.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-[11px] font-medium leading-relaxed flex items-start gap-1.5 text-slate-700 dark:text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 2: Physical 90% */}
                <div className={`p-2.5 rounded-xl border ${
                  isDark 
                    ? 'bg-slate-950/60 border-amber-900/40' 
                    : 'bg-amber-50/50 border-amber-100'
                }`}>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Car className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span className="text-[11px] font-black text-amber-800 dark:text-amber-400">
                      {phase.physical.title}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {phase.physical.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-[11px] font-medium leading-relaxed flex items-start gap-1.5 text-slate-700 dark:text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Key Takeaway Callout */}
      <div className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col md:flex-row items-center justify-between gap-3 ${
        isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
              {isRTL ? 'الخلاصة الجوهرية' : 'Key UX Takeaway'}
            </span>
            <p className="text-xs sm:text-[13px] font-extrabold text-slate-900 dark:text-white">
              {isRTL
                ? 'الشاشة هي مجرد وسيلة (10% UI).. أما القيمة والولاء فبيتبنوا في العالم الواقعي (90% UX) لما العميل ينجز مشواره بأمان وراحة وسلاسة!'
                : 'The screen is only the gateway (10% UI).. but true loyalty and delight are forged in the real-world experience (90% UX)!'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-bold px-3 py-1 rounded-lg border bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
            {isRTL ? '10% شاشة 📱 + 90% واقع 🚗' : '10% Screen + 90% Reality'}
          </span>
        </div>
      </div>
    </div>
  );
};
