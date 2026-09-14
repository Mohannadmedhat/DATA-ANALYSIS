import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, XCircle, CheckCircle2, Sparkles, Brain, Award, ArrowRight, ShieldCheck, Users } from 'lucide-react';

interface Props {
  language?: 'ar' | 'en';
  isDark?: boolean;
}

export const CommunicationSkillsVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      topic: isRTL ? 'تقليل عدد حقول التسجيل (Sign-up Fields)' : 'Reducing Signup Form Fields',
      amateur: {
        phrase: isRTL ? '«أنا حاسس إن الفورم كده أحسن وشكله أشيك لما نشيل الحقول دي»' : '"I feel the form looks way cleaner and more aesthetic without these fields."',
        criticism: isRTL ? 'رأي شخصي مبهم؛ يرفضه مدير المنتج فوراً لأنه لا يقدم أي مبرر تجاري أو علمي.' : 'Subjective personal taste with zero commercial or psychological backing.'
      },
      pro: {
        phrase: isRTL ? '«بناءً على قانون هيك (Hick’s Law) وبيانات اختبار الـ Usability، كل حقل إضافي يرفع التردد ويزيد معدل الهجر بنسبة 24%؛ تقليص الحقول إلى 3 سيرفع معدل التحويل بحسب تقديراتنا بنسبة 35%»' : '"According to Hick’s Law and our usability benchmark, every extra input field increases drop-off by 24%. Trimming to 3 core fields projects a +35% boost in completed registrations."',
        scientificBacking: isRTL ? 'مستند إلى قانون Hick’s Law + بيانات اختبار استخدام + مقياس Conversion Rate.' : 'Backed by Cognitive Psychology (Hick’s Law) + Quantitative Conversion Rate ROI.'
      }
    },
    {
      topic: isRTL ? 'تكبير حجم التباين في النصوص (Contrast & WCAG)' : 'Increasing Typography Contrast',
      amateur: {
        phrase: isRTL ? '«اللون الرمادي الفاتح ده عاجبني جداً ومخلي الشاشة فخمة ومودرن»' : '"This ultra-light gray looks super sleek and luxurious on my screen."',
        criticism: isRTL ? 'تفضيل جمالي مضلل يتجاهل شروط الإتاحة وظروف الإضاءة في الشارع.' : 'Superficial vanity aesthetics ignoring accessibility laws and outdoors sunshine.'
      },
      pro: {
        phrase: isRTL ? '«رفعنا تباين الخط إلى نسبة 4.5:1 وفق معايير WCAG AA لضمان سهولة القراءة لمن يعانون من ضعف البصر وعند استخدام التطبيق تحت أشعة الشمس المباشرة»' : '"We elevated text contrast to 4.5:1 meeting WCAG AA standards, ensuring legibility under outdoor sunlight and for users with visual fatigue."',
        scientificBacking: isRTL ? 'مستند إلى المعيار القياسي العالمي WCAG AA + مراعاة سياق الاستخدام الحقيقي.' : 'Backed by WCAG AA International Standards + Real-World Sunlight Context.'
      }
    },
    {
      topic: isRTL ? 'تغيير مكان زر الإجراء الرئيسي (Primary CTA Placement)' : 'Primary CTA Thumb Zone Placement',
      amateur: {
        phrase: isRTL ? '«المبرمج قالي حطه فوق، فأنا حطيته فوق وخلاص»' : '"The developer told me to put it at the top, so I just placed it there."',
        criticism: isRTL ? 'استسلام سلبي دون التفكير في راحة يد المستخدم وسهولة الوصول.' : 'Passive compliance ignoring human ergonomics and mobile thumb zones.'
      },
      pro: {
        phrase: isRTL ? '«وضعنا الزر في أسفل الشاشة داخل منطقة الإبهام الطبيعية (Natural Thumb Zone) لتسهيل الضغط بيد واحدة بنسبة 60% وفق قانون فيتس (Fitts’s Law)»' : '"We anchored the button to the bottom sticky bar within the Natural Thumb Zone, reducing physical reach friction by 60% per Fitts’s Law."',
        scientificBacking: isRTL ? 'مستند إلى قانون Fitts’s Law + أبحاث بيولوجيا الإبهام على شاشات الموبايل.' : 'Backed by Fitts’s Law Ergonomics + Steven Hoober’s Thumb Zone Research.'
      }
    }
  ];

  const current = scenarios[activeScenario];

  return (
    <div className="w-full space-y-4">
      {/* Scenario Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className={`flex items-center gap-1.5 p-1 rounded-xl border ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          {scenarios.map((sc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveScenario(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeScenario === idx
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : (isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900')
              }`}
            >
              <span>{isRTL ? `الموقف ${idx + 1}: ${sc.topic}` : `Scenario ${idx + 1}: ${sc.topic}`}</span>
            </button>
          ))}
        </div>

        <div className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
          isDark ? 'bg-indigo-950/60 text-indigo-300 border-indigo-800/40' : 'bg-indigo-50 text-indigo-800 border-indigo-200'
        }`}>
          {isRTL ? '🧠 مهارة تبرير القرارات (Articulating Design Decisions)' : '🧠 Articulating Design Decisions'}
        </div>
      </div>

      {/* Side-by-Side Comparison: Amateur vs Pro Articulation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {/* Left: Amateur Weak Subjective Communication */}
        <div className={`rounded-xl p-5 border flex flex-col justify-between ${
          isDark ? 'bg-rose-950/30 border-rose-900/60 text-slate-100' : 'bg-rose-50/90 border-rose-300 text-slate-900'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-black px-2.5 py-1 rounded-lg border shadow-sm ${
                isDark ? 'bg-rose-900 text-rose-100 border-rose-700' : 'bg-rose-600 text-white border-rose-700'
              } flex items-center gap-1.5`}>
                <XCircle className="w-3.5 h-3.5" />
                <span>{isRTL ? 'الأسلوب العشوائي والضعيف ❌' : 'Subjective & Weak ❌'}</span>
              </span>
              <span className={`text-xs font-mono font-bold ${isDark ? 'text-rose-300' : 'text-rose-700'}`}>
                {isRTL ? '«أنا شايف كدة أحلى»' : '"I just think it looks better"'}
              </span>
            </div>

            <div className={`p-4 rounded-xl border my-3 italic text-xs sm:text-sm font-bold leading-relaxed ${
              isDark ? 'bg-slate-950/80 border-rose-900/40 text-slate-100' : 'bg-white border-rose-200 text-slate-950 shadow-sm'
            }`}>
              {current.amateur.phrase}
            </div>

            <div className={`space-y-1.5 text-xs font-bold ${isDark ? 'text-rose-300' : 'text-rose-800'}`}>
              <p className="leading-relaxed">
                ⚠️ {current.amateur.criticism}
              </p>
            </div>
          </div>

          <div className={`mt-4 pt-3 border-t ${isDark ? 'border-rose-900/40 text-rose-300' : 'border-rose-200 text-rose-800'} text-xs font-black`}>
            {isRTL ? 'النتيجة: يفقد المصمم احترامه وتتحول الجلسة إلى صراع أذواق عشوائي' : 'Outcome: Loss of authority & sterile taste debate'}
          </div>
        </div>

        {/* Right: Pro High-Impact Evidence-Based Articulation */}
        <div className={`rounded-xl p-5 border flex flex-col justify-between ${
          isDark ? 'bg-emerald-950/30 border-emerald-900/60 text-slate-100' : 'bg-emerald-50/90 border-emerald-300 text-slate-900'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs font-black px-2.5 py-1 rounded-lg border shadow-sm ${
                isDark ? 'bg-emerald-900 text-emerald-100 border-emerald-700' : 'bg-emerald-600 text-white border-emerald-700'
              } flex items-center gap-1.5`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isRTL ? 'الأسلوب الاحترافي المقنع ✔️' : 'Authoritative & Scientific ✔️'}</span>
              </span>
              <span className={`text-xs font-mono font-bold ${isDark ? 'text-emerald-300' : 'text-emerald-800'}`}>
                {isRTL ? 'علم النفس + البزنس + الأدلة' : 'Psychology + Business + Evidence'}
              </span>
            </div>

            <div className={`p-4 rounded-xl border my-3 font-bold text-xs sm:text-sm leading-relaxed ${
              isDark ? 'bg-slate-950/80 border-emerald-900/40 text-slate-100' : 'bg-white border-emerald-200 text-slate-950 shadow-sm'
            }`}>
              {current.pro.phrase}
            </div>

            <div className={`space-y-1.5 text-xs font-bold ${isDark ? 'text-emerald-300' : 'text-emerald-800'}`}>
              <p className="flex items-center gap-1.5">
                <Brain className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>{current.pro.scientificBacking}</span>
              </p>
            </div>
          </div>

          <div className={`mt-4 pt-3 border-t ${isDark ? 'border-emerald-900/40 text-emerald-300' : 'border-emerald-200 text-emerald-800'} text-xs font-black`}>
            {isRTL ? 'النتيجة: يقتنع المدير والمهندس فوراً وتترسخ مكانتك كشريك استراتيجي في نجاح المنتج' : 'Outcome: Instant stakeholder buy-in & high executive trust'}
          </div>
        </div>
      </div>
    </div>
  );
};
