import React, { useState } from 'react';
import { 
  Building2, 
  Rocket, 
  Users, 
  Award, 
  Sparkles, 
  CheckCircle2,
  Layers,
  Search,
  Palette,
  Briefcase
} from 'lucide-react';
import { Language } from '../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const RolesVennVisual: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [selectedEnv, setSelectedEnv] = useState<'startup' | 'enterprise'>('startup');

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Toggle Switch */}
      <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      } shadow-sm`}>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              {isRTL ? 'مقارنة بيئة العمل: كيف يحدد حجم الشركة مسؤولياتك؟' : 'Workplace Dynamics: How Company Size Shapes Your Role'}
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {isRTL 
                ? 'استكشف الفروق الجوهرية بين العمل كمصمم شامل في شركة ناشئة أو متخصص في مؤسسة كبرى'
                : 'Explore differences between being an end-to-end generalist vs a deep domain specialist'}
            </p>
          </div>
        </div>

        {/* Toggle buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedEnv('startup')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedEnv === 'startup'
                ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 shadow-md font-extrabold'
                : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Rocket className="w-3.5 h-3.5" />
            <span>{isRTL ? 'الشركات الناشئة (Startups)' : 'Startups (Generalist)'}</span>
          </button>

          <button
            onClick={() => setSelectedEnv('enterprise')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedEnv === 'enterprise'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md font-extrabold'
                : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{isRTL ? 'الشركات الكبرى (Enterprises)' : 'Enterprises (Specialist)'}</span>
          </button>
        </div>
      </div>

      {/* Main Comparison Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left 7 cols: Environment Breakdown */}
        <div className={`lg:col-span-7 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        } shadow-sm`}>
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-xl">{selectedEnv === 'startup' ? '🚀' : '🏢'}</span>
                <div>
                  <h4 className={`text-sm sm:text-base font-black ${isDark ? 'text-white' : 'text-slate-950'}`}>
                    {selectedEnv === 'startup' 
                      ? (isRTL ? 'بيئة الـ Startup: المصمم الشامل (Full-Stack / Unicorn)' : 'Startup: The End-to-End Generalist')
                      : (isRTL ? 'بيئة الـ Enterprise: المصمم المتخصص (Deep Domain Specialist)' : 'Enterprise: The Deep Domain Specialist')}
                  </h4>
                  <span className={`text-xs font-bold ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                    {selectedEnv === 'startup' 
                      ? (isRTL ? 'نطاق مسؤوليات واسع وسرعة تنفيذ خارقة' : 'Broad multi-disciplinary scope & high velocity')
                      : (isRTL ? 'عمق شديد في مجال محدد وتأثير على ملايين المستخدمين' : 'Extreme depth on single touchpoints impacting millions')}
                  </span>
                </div>
              </div>

              <span className={`text-xs font-black px-2.5 py-1 rounded-full border shadow-sm ${
                selectedEnv === 'startup' 
                  ? (isDark ? 'bg-amber-950/80 text-amber-300 border-amber-800' : 'bg-amber-100 text-amber-950 border-amber-300') 
                  : (isDark ? 'bg-blue-950/80 text-blue-300 border-blue-800' : 'bg-blue-100 text-blue-950 border-blue-300')
              }`}>
                {selectedEnv === 'startup' ? (isRTL ? 'فرق مرنة سريعة' : 'Agile Squads') : (isRTL ? 'فرق تخصصية كبرى' : 'Matrix Teams')}
              </span>
            </div>

            {/* Core Characteristics */}
            <div className="space-y-2.5">
              {selectedEnv === 'startup' ? (
                <>
                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-amber-50/50 border-amber-200'} flex items-start gap-2.5 text-xs`}>
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className={`font-black text-sm block ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        {isRTL ? 'ارتداء قبعات متعددة يومياً:' : 'Wearing Multiple Hats:'}
                      </span>
                      <p className={`mt-0.5 font-semibold text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                        {isRTL ? 'تقوم بأبحاث المستخدمين، رسم التدفقات، تصميم الشاشات Hi-Fi، وبناء البروتوتايب بنفسك.' : 'Leading user discovery, wireframing, high-fi UI design, and prototyping single-handedly.'}
                      </p>
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-amber-50/50 border-amber-200'} flex items-start gap-2.5 text-xs`}>
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className={`font-black text-sm block ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        {isRTL ? 'سرعة اتخاذ القرار وقربك من المؤسسين:' : 'Rapid Decision Velocity with Founders:'}
                      </span>
                      <p className={`mt-0.5 font-semibold text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                        {isRTL ? 'التواصل المباشر مع المؤسسين والمطورين بدون تعقيدات أو لجان موافقة طويلة.' : 'Direct collaboration with founders and developers without bureaucratic friction.'}
                      </p>
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-amber-50/50 border-amber-200'} flex items-start gap-2.5 text-xs`}>
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className={`font-black text-sm block ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        {isRTL ? 'نمو مهني سريع واكتساب خبرات متنوعة:' : 'Rapid Career Growth & High Impact:'}
                      </span>
                      <p className={`mt-0.5 font-semibold text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                        {isRTL ? 'تتعلم كل خطوة في دورة حياة المنتج وتتحمل مسؤولية نجاح الميزات في السوق.' : 'Gaining full lifecycle exposure and seeing your designs ship to market weekly.'}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-blue-50/50 border-blue-200'} flex items-start gap-2.5 text-xs`}>
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className={`font-black text-sm block ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        {isRTL ? 'تخصص عميق في نطاق محدد:' : 'Deep Mastery on Specific Funnels:'}
                      </span>
                      <p className={`mt-0.5 font-semibold text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                        {isRTL ? 'التركيز على تحسين ميزة واحدة دقيقة (مثل مسار البحث أو عربة التسوق في أمازون) بعمق هائل.' : 'Focusing intensely on a dedicated micro-funnel (e.g. checkout optimization or design tokens).'}
                      </p>
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-blue-50/50 border-blue-200'} flex items-start gap-2.5 text-xs`}>
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className={`font-black text-sm block ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        {isRTL ? 'فرق مساندة وموارد وأدوات ضخمة:' : 'Abundant Research Resources & Support:'}
                      </span>
                      <p className={`mt-0.5 font-semibold text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                        {isRTL ? 'فرق بحث مخصصة، أنظمة تصميم مؤسسية مهندسة، وميزانيات اختبار واسعة.' : 'Dedicated UX research teams, specialized design systems squads, and enterprise tooling.'}
                      </p>
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-blue-50/50 border-blue-200'} flex items-start gap-2.5 text-xs`}>
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className={`font-black text-sm block ${isDark ? 'text-white' : 'text-slate-950'}`}>
                        {isRTL ? 'تأثير ضخم على ملايين المستخدمين:' : 'Enormous Scale & Global Reach:'}
                      </span>
                      <p className={`mt-0.5 font-semibold text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                        {isRTL ? 'أي تعديل بسيط بنسبة 0.5% في الواجهة يترجم إلى ملايين الدولارات في أرباح الشركة.' : 'A 0.5% conversion increase translates into millions in incremental enterprise revenue.'}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={`pt-3 text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {isRTL 
              ? '📊 بيانات دراسة NN/g: متوسط عدد مسؤوليات المصمم في الشركات الصغيرة أعلى بنسبة 40% من الشركات الكبرى.'
              : '📊 NN/g Career Benchmark: Designers in small organizations handle 40% more simultaneous role responsibilities.'}
          </div>
        </div>

        {/* Right 5 cols: T-Shaped Designer Profile */}
        <div className={`lg:col-span-5 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between gap-3 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className={`text-xs font-black ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                {isRTL ? 'نموذج المصمم الناجح (T-Shaped)' : 'The Ideal T-Shaped Model'}
              </span>
              <Award className="w-4 h-4 text-amber-500" />
            </div>

            <div className="mt-3 space-y-3 text-xs">
              {/* Horizontal Bar (Breadth) */}
              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-blue-950/50 border-blue-800' : 'bg-blue-50 border-blue-200 shadow-sm'
              }`}>
                <span className={`font-black block mb-1 text-xs ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
                  {isRTL ? '━ الأفقي: سعة المعرفة (Broad Knowledge)' : '━ Horizontal: Broad Generalist Breadth'}
                </span>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                  {isRTL 
                    ? 'فهم عام لكل مراحل البحث، الواجهات، البرمجة، والبزنس لتستطيع التحدث والتنسيق مع كل عضو في الفريق.'
                    : 'Working fluency across research, UI craft, frontend code constraints, and business metrics.'}
                </p>
              </div>

              {/* Vertical Bar (Depth) */}
              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-purple-950/50 border-purple-800' : 'bg-purple-50 border-purple-200 shadow-sm'
              }`}>
                <span className={`font-black block mb-1 text-xs ${isDark ? 'text-purple-300' : 'text-purple-800'}`}>
                  {isRTL ? '┃ الرأسي: العمق والتخصص (Deep Specialty)' : '┃ Vertical: Deep Domain Mastery'}
                </span>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                  {isRTL 
                    ? 'امتلاك شغف وقوة فائقة في مجال محدد (مثل: إتقان الـ Design Systems أو هندسة التفاعل أو أبحاث المستخدمين).'
                    : 'Exceptional depth in one chosen domain (e.g. Design Systems, Interaction Choreography, or User Research).'}
                </p>
              </div>
            </div>
          </div>

          <div className={`p-2.5 rounded-xl border text-xs font-bold text-center ${
            isDark ? 'bg-slate-950 text-slate-200 border-slate-800' : 'bg-slate-100 text-slate-900 border-slate-200'
          }`}>
            {isRTL ? '💡 أفضل المصممين يمتلكون سعة التفكير وعمق الحرفة' : '💡 Elite designers blend broad collaboration with deep craft'}
          </div>
        </div>
      </div>
    </div>
  );
};
