import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Smartphone, 
  Sun, 
  WifiOff, 
  Eye, 
  Clock,
  Laptop
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const EmpathyRealityVisual: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [selectedPerspective, setSelectedPerspective] = useState<'bias' | 'reality'>('reality');

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Toggle Switch */}
      <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      } shadow-sm`}>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500 border border-rose-500/20">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              {isRTL ? 'التعاطف مع المستخدم: أنت لست المستخدم (You ≠ User)' : 'Empathy in Practice: You Are Not the User'}
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                selectedPerspective === 'reality' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
              }`}>
                {selectedPerspective === 'reality' ? (isRTL ? '🌍 واقع المستخدم الحقيقي' : '🌍 Real-World User Context') : (isRTL ? '🖥️ برج المصمم العاجي' : '🖥️ Designer Bubble')}
              </span>
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {isRTL 
                ? 'قارن بين الظروف المثالية التي يصمم فيها المصمم، والظروف القاسية التي يستخدم فيها الناس التطبيق في الشارع'
                : 'Compare the designer’s controlled office bubble against real-world human constraints.'}
            </p>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedPerspective('bias')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedPerspective === 'bias'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>{isRTL ? '1. افتراضات المصمم (Bubble)' : '1. Designer Bias'}</span>
          </button>

          <button
            onClick={() => setSelectedPerspective('reality')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedPerspective === 'reality'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30'
                : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{isRTL ? '2. واقع المستخدم الحقيقي (Empathy) ✨' : '2. Real User Empathy ✨'}</span>
          </button>
        </div>
      </div>

      {/* Main Comparative Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left 6 cols: Scenario Breakdown */}
        <div className={`lg:col-span-6 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all ${
          selectedPerspective === 'reality'
            ? (isDark ? 'bg-emerald-950/40 border-emerald-800/80' : 'bg-emerald-50/90 border-emerald-300')
            : (isDark ? 'bg-rose-950/40 border-rose-800/80' : 'bg-rose-50/90 border-rose-300')
        } shadow-sm`}>
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 dark:border-slate-800">
              <span className={`text-xs font-black px-2.5 py-1 rounded-lg border shadow-sm ${
                selectedPerspective === 'reality' 
                  ? (isDark ? 'bg-emerald-900 text-emerald-100 border-emerald-700' : 'bg-emerald-600 text-white border-emerald-700') 
                  : (isDark ? 'bg-rose-900 text-rose-100 border-rose-700' : 'bg-rose-600 text-white border-rose-700')
              }`}>
                {selectedPerspective === 'reality' ? (isRTL ? 'سياق الاستخدام في الشارع' : 'Real-World Human Reality') : (isRTL ? 'سياق العمل في المكتب' : 'Office Bubble Assumptions')}
              </span>
              <span className={`text-xs font-mono font-black ${
                selectedPerspective === 'reality' 
                  ? (isDark ? 'text-emerald-300' : 'text-emerald-800') 
                  : (isDark ? 'text-rose-300' : 'text-rose-800')
              }`}>
                {selectedPerspective === 'reality' ? 'Context: 100% Reality ⭐' : 'Context: False Bubble ⚠️'}
              </span>
            </div>

            <h4 className={`text-sm sm:text-base font-black mb-3 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {selectedPerspective === 'reality'
                ? (isRTL ? 'المستخدم: في الشارع، تحت الشمس، بإنترنت ضعيف، ومستعجل!' : 'User Context: Walking outdoors, bright glare, weak 3G, one-handed!')
                : (isRTL ? 'المصمم: جالس في مكتب مكيف، شاشة 4K عملاقة، وإنترنت فايبر!' : 'Designer Context: Quiet AC office, dual 4K monitors, high-speed fiber!')}
            </h4>

            <div className="space-y-2.5 text-xs leading-relaxed font-bold">
              {selectedPerspective === 'reality' ? (
                <>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-emerald-900/60 text-slate-100' : 'bg-white border-emerald-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span>{isRTL ? 'شمس ساطعة تتطلب تباين ألوان قوي جداً (WCAG AAA) لتستطيع العين القراءة.' : 'High outdoor glare requires strict WCAG contrast for scanning.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-emerald-900/60 text-slate-100' : 'bg-white border-emerald-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span>{isRTL ? 'استخدام بيد واحدة أثناء المشي يتطلب أزراراً ضخمة في متناول الإبهام (Thumb Zone).' : 'One-handed mobile use demands massive touch targets in the natural thumb zone.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-emerald-900/60 text-slate-100' : 'bg-white border-emerald-200 text-slate-950 shadow-sm'
                  }`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span>{isRTL ? 'تشتت ذهني واستعجال يتطلب تقليل الخطوات وحذف أي تعقيد غير ضروري.' : 'Cognitive overload requires zero unnecessary decision friction.'}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-rose-900/60 text-slate-100' : 'bg-white border-rose-200 text-slate-950 shadow-sm'
                  }`}>
                    <XCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-rose-400' : 'text-rose-600'}`} />
                    <span>{isRTL ? 'يصمم نصوصاً رمادية باهتة وصغيرة جداً لأنها تبدو شيك على شاشته الـ 4K.' : 'Uses tiny light-gray fonts that look sleek in Figma but are unreadable outdoors.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-rose-900/60 text-slate-100' : 'bg-white border-rose-200 text-slate-950 shadow-sm'
                  }`}>
                    <XCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-rose-400' : 'text-rose-600'}`} />
                    <span>{isRTL ? 'يفترض أن العميل متفرغ ويقرأ كل سطر تعليمات يكتبه في الصفحة.' : 'Falsely assumes the user has time to read paragraphs of instructional text.'}</span>
                  </div>
                  <div className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                    isDark ? 'bg-slate-900/90 border-rose-900/60 text-slate-100' : 'bg-white border-rose-200 text-slate-950 shadow-sm'
                  }`}>
                    <XCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-rose-400' : 'text-rose-600'}`} />
                    <span>{isRTL ? 'يعتقد أن الشاشات "بديهية جداً ومش محتاجة شرح" لأن هو اللي راسمها!' : 'Believes flows are "completely obvious" simply because they designed them!'}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={`pt-3 text-[11px] font-mono font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {selectedPerspective === 'reality' ? '🎯 Empathy = Designing for Real People under Real Stress' : '⚠️ Designer Bias = Designing for Yourself'}
          </div>
        </div>

        {/* Right 6 cols: Design Rules to Beat the Bias */}
        <div className={`lg:col-span-6 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between gap-3 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div>
            <div className="pb-2 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>{isRTL ? 'قواعد كسر التحيز (Beating Designer Bias)' : 'Rules of Authentic Empathy'}</span>
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </div>

            <div className="space-y-2 mt-3 text-xs">
              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-amber-50/60 border-amber-200'
              }`}>
                <span className="font-extrabold text-amber-700 dark:text-amber-400 block mb-1 text-xs">
                  {isRTL ? '1. اختبر التصميم على موبايلك تحت الشمس:' : '1. Test Outdoors in Bright Sunlight:'}
                </span>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                  {isRTL ? 'افتح Figma Mirror وانزل الشارع.. لو معرفتش تقرأ أو تضغط على الزرار بسهولة، عدله فوراً!' : 'Open Figma Mirror outdoors. If text is unreadable, fix the contrast immediately.'}
                </p>
              </div>

              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-blue-50/60 border-blue-200'
              }`}>
                <span className="font-extrabold text-blue-700 dark:text-blue-400 block mb-1 text-xs">
                  {isRTL ? '2. احترم أصابع المستخدم (Touch Targets):' : '2. Respect Touch Targets (Min 48x48px):'}
                </span>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                  {isRTL ? 'لا تجعل أي زر تفاعلي أقل من 48x48 بكسل لضمان سهولة الضغط بدون أخطاء.' : 'Never design touch targets smaller than 48x48px to prevent misclicks.'}
                </p>
              </div>

              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-emerald-50/60 border-emerald-200'
              }`}>
                <span className="font-extrabold text-emerald-700 dark:text-emerald-400 block mb-1 text-xs">
                  {isRTL ? '3. راقب المستخدمين العاديين:' : '3. Observe Non-Technical Users:'}
                </span>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                  {isRTL ? 'اجعل والدتك أو صديقاً غير تقني يجرب التطبيق، وراقب أين يتعثر دون أن ترشده.' : 'Test with non-tech-savvy users and silently observe where they hesitate.'}
                </p>
              </div>
            </div>
          </div>

          <div className={`pt-2 text-xs text-center font-bold border-t border-slate-200 dark:border-slate-800 ${
            isDark ? 'text-emerald-400' : 'text-emerald-700'
          }`}>
            {isRTL ? '💡 المصمم العبقري يصمم لمن هم أقل حظاً في المعرفة التقنية والظروف' : '💡 Elite designers design for humans under real-world constraints'}
          </div>
        </div>
      </div>
    </div>
  );
};
