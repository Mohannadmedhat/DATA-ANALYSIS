import React, { useState } from 'react';
import { 
  Type, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  MessageSquare
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const UxWriterSimulator: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [copyMode, setCopyMode] = useState<'poor' | 'human'>('human');

  const examples = [
    {
      title: isRTL ? '01 • رسالة الخطأ (Error Message)' : '01 • Error Message',
      poor: {
        text: isRTL ? 'خطأ غير معروف (Error Code: #0x8849F) - فشل الاتصال بقاعدة البيانات!' : 'Fatal Exception #0x8849F: Database transaction failed!',
        effect: isRTL ? 'المستخدم يصاب بالرعب ويعتقد أن حسابه قد تعطل أو فُقدت أمواله!' : 'User panics believing their account is broken or funds are lost!'
      },
      human: {
        text: isRTL ? 'لم نتمكن من حفظ التغييرات بسبب ضعف الاتصال بالإنترنت. أعد المحاولة بنقرة واحدة.' : 'We couldn’t save your changes due to a weak connection. Tap below to retry.',
        effect: isRTL ? 'كلام إنساني هادئ يوضح المشكلة ويقدم الحل فوراً بدون أي ذعر!' : 'Reassuring human explanation pinpointing the fix with zero panic!'
      }
    },
    {
      title: isRTL ? '02 • تسمية زر الإجراء (Button CTA)' : '02 • Button CTA',
      poor: {
        text: isRTL ? 'موافق (Submit)' : 'Submit',
        effect: isRTL ? 'كلمة مبهمة لا توضح للعميل هل سيخصم فلوس؟ أم يرسل رسالة؟ فيتردد!' : 'Vague label leaving users unsure whether clicking charges money or sends email.'
      },
      human: {
        text: isRTL ? '🔒 تأكيد الطلب ودفع 150 ج.م' : '🔒 Confirm Order & Pay $150',
        effect: isRTL ? 'وضوح تام ونزع أي شك أو تردد قبل اتخاذ الإجراء النهائي.' : 'Zero ambiguity removing hesitation and setting crystal-clear expectations.'
      }
    },
    {
      title: isRTL ? '03 • الشاشة الفارغة (Empty State)' : '03 • Empty State',
      poor: {
        text: isRTL ? 'لا توجد بيانات (No Data Found).' : 'No data found.',
        effect: isRTL ? 'شاشة ميتة تشعر العميل بأن التطبيق فارغ ولا تقدم أي فائدة.' : 'Dead-end screen leaving users stranded with no next action.'
      },
      human: {
        text: isRTL ? 'حقيبة الشراء فارغة! استكشف أحدث عروض اليوم وأضف أول منتج.' : 'Your cart is empty! Explore today’s top picks and add your first item.',
        effect: isRTL ? 'رسالة محفزة توجه المستخدم لاتخاذ أول خطوة مفيدة في التطبيق.' : 'Actionable encouragement transforming empty space into engagement.'
      }
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Controller */}
      <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 shadow-sm ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-lg ${
            isDark ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
          }`}>
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h4 className={`text-xs sm:text-sm font-extrabold flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {isRTL ? 'مختبر صياغة نصوص الـ UX: الكلمات جزء من الواجهة' : 'UX Writing Lab: Words as Interface Elements'}
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                copyMode === 'human' 
                  ? (isDark ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-950 border-emerald-300')
                  : (isDark ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-rose-50 text-rose-950 border-rose-300')
              }`}>
                {copyMode === 'human' ? (isRTL ? '💬 نصوص إنسانية واضحة' : '💬 Human & Clear') : (isRTL ? '🤖 نصوص روبوتية مبهمة' : '🤖 Cryptic & Robotic')}
              </span>
            </h4>
            <p className={`text-[11px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {isRTL 
                ? 'قارن بين النصوص الروبوتية المرعبة والنصوص الإنسانية الذكية التي تريح العميل وتوجهه'
                : 'Compare cryptic robotic error codes against human, reassuring microcopy.'}
            </p>
          </div>
        </div>

        {/* Toggle buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCopyMode('poor')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              copyMode === 'poor'
                ? 'bg-rose-600 text-white border-rose-700 shadow-md font-extrabold'
                : (isDark ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white' : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950')
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>{isRTL ? '1. نصوص روبوتية مرعبة (Robotic)' : '1. Cryptic Copy'}</span>
          </button>

          <button
            onClick={() => setCopyMode('human')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
              copyMode === 'human'
                ? 'bg-emerald-600 text-white border-emerald-700 shadow-md font-extrabold'
                : (isDark ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white' : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-slate-950')
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRTL ? '2. نصوص إنسانية مساندة (Human UX) ✨' : '2. Human UX Copy ✨'}</span>
          </button>
        </div>
      </div>

      {/* Examples Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
        {examples.map((ex, idx) => {
          const isGood = copyMode === 'human';
          const currentText = isGood ? ex.human.text : ex.poor.text;
          const currentEffect = isGood ? ex.human.effect : ex.poor.effect;

          return (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl border flex flex-col justify-between transition-all shadow-sm ${
                isGood
                  ? (isDark ? 'bg-slate-900 border-emerald-600/60 text-white' : 'bg-white border-emerald-300 text-slate-950')
                  : (isDark ? 'bg-slate-900 border-rose-600/60 text-slate-100' : 'bg-white border-rose-300 text-slate-950')
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <h5 className={`text-xs font-black ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>{ex.title}</h5>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded border ${
                    isGood 
                      ? (isDark ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-emerald-100 text-emerald-950 border-emerald-300')
                      : (isDark ? 'bg-rose-950 text-rose-300 border-rose-800' : 'bg-rose-100 text-rose-950 border-rose-300')
                  }`}>
                    {isGood ? 'PASS ✅' : 'FAIL ❌'}
                  </span>
                </div>

                {/* Simulated UI Bubble */}
                <div className={`p-3 rounded-xl border mb-3 text-xs font-bold leading-relaxed ${
                  isGood
                    ? (isDark ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-950')
                    : (isDark ? 'bg-rose-950/60 border-rose-800 text-rose-200' : 'bg-rose-50 border-rose-200 text-rose-950')
                }`}>
                  "{currentText}"
                </div>

                <div className="text-xs leading-relaxed font-semibold">
                  <span className={`block text-[11px] font-black mb-1 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {isRTL ? 'الأثر النفسي على المستخدم:' : 'Psychological Impact:'}
                  </span>
                  <p className={isDark ? 'text-slate-300' : 'text-slate-800'}>
                    {currentEffect}
                  </p>
                </div>
              </div>

              <div className={`mt-3 pt-2.5 border-t text-[11px] font-black ${
                isGood 
                  ? (isDark ? 'text-emerald-400 border-emerald-800/60' : 'text-emerald-700 border-emerald-200')
                  : (isDark ? 'text-rose-400 border-rose-800/60' : 'text-rose-700 border-rose-200')
              }`}>
                {isGood ? (isRTL ? '✨ يرفع الإكمال ويزيل الخوف' : '✨ Reduces Friction & Boosts Trust') : (isRTL ? '⚠️ يسبب تردد وهجر التطبيق' : '⚠️ Causes Hesitation & Churn')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
