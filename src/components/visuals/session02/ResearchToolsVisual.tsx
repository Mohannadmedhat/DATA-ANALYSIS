import React, { useState } from 'react';
import { 
  FileText, 
  Video, 
  MousePointer, 
  FolderGit2, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import { Language } from '../../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const ResearchToolsVisual: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories = [
    {
      id: 'surveys',
      name: isRTL ? 'الاستبيانات (Surveys)' : 'Surveys & Quant Feedback',
      type: 'Quantitative Data (بيانات كمية)',
      icon: FileText,
      color: 'from-blue-500 to-cyan-600',
      badge: 'Surveys',
      sampleTool: 'Typeform / Google Forms',
      mockupTitle: isRTL ? 'معاينة استبيان بحثي حي (Live Survey)' : 'Live Survey Question Mockup',
      mockupContent: isRTL ? 'كم مرة تواجه صعوبة في متابعة طلبات الدواء الشهرية؟' : 'How often do you struggle managing recurring prescriptions?',
      mockupAnswers: isRTL ? ['أسبوعياً (42%)', 'شهرياً (35%)', 'نادراً (23%)'] : ['Weekly (42%)', 'Monthly (35%)', 'Rarely (23%)'],
      keyTakeaway: isRTL ? 'يمنحك أرقاماً ونسباً مئوية عريضة من مئات المستخدمين في وقت قياسي.' : 'Delivers macro-level statistical confidence from hundreds of users fast.'
    },
    {
      id: 'interviews',
      name: isRTL ? 'المقابلات (Interviews)' : 'In-Depth Interviews',
      type: 'Qualitative Data (بيانات كيفية)',
      icon: Video,
      color: 'from-purple-500 to-pink-600',
      badge: 'Interviews',
      sampleTool: 'Lookback / Zoom + Otter.ai',
      mockupTitle: isRTL ? 'تسجيل مقابلة مستخدم مع التفريغ الصوتي' : 'User Interview Recording & Transcript',
      mockupContent: isRTL ? 'المريض (أحمد، 62 سنة): "بخاف أطلب أونلاين عشان الروشتات بخط اليد مش مفهومة وممكن يجيلي دوا غلط!".' : 'Patient (Ahmed, 62): "I fear ordering online because handwritten doctor notes might be misread!"',
      mockupAnswers: isRTL ? ['شعور بالخوف والتردد', 'حاجة لتأكيد صيدلي معتمد', 'لغة جسد تدل على القلق'] : ['Fear of clinical mistakes', 'Need for pharmacist voice verification', 'High anxiety body language'],
      keyTakeaway: isRTL ? 'يكشف لك مشاعر الناس الحقيقية ولغة الجسد والدوافع النفسية العميقة.' : 'Uncovers emotional motivations, hesitations, and the human "Why".'
    },
    {
      id: 'testing',
      name: isRTL ? 'اختبار النماذج (Testing)' : 'Unmoderated Usability',
      type: 'Behavioral Metrics (مقاييس سلوكية)',
      icon: MousePointer,
      color: 'from-amber-500 to-orange-600',
      badge: 'Task Testing',
      sampleTool: 'Maze / Useberry',
      mockupTitle: isRTL ? 'تقرير خريطة النقرات وسرعة إتمام المهمة' : 'Heatmap & Direct Success Report',
      mockupContent: isRTL ? 'المهمة: "ارفع صورة الروشتة واختر أقرب صيدلية"' : 'Task: "Upload prescription photo & choose nearest branch"',
      mockupAnswers: isRTL ? ['نسبة النجاح: 88%', 'متوسط الوقت: 24 ثانية', 'نسبة سوء النقرات: 6%'] : ['Success Rate: 88%', 'Avg Duration: 24s', 'Misclick Rate: 6%'],
      keyTakeaway: isRTL ? 'يقيس بدقة هل فهم المستخدم الواجهة أم تعثر واحتار أثناء إتمام المهمة.' : 'Measures actual task efficiency, bottlenecks, and user drop-off points.'
    },
    {
      id: 'synthesis',
      name: isRTL ? 'التحليل والتوثيق (Synthesis)' : 'Insight Repositories',
      type: 'Insights Repository (مستودع المعرفة)',
      icon: FolderGit2,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Synthesis',
      sampleTool: 'Dovetail / Notion',
      mockupTitle: isRTL ? 'تجميع وتصنيف الوسوم ونقاط الألم' : 'Tagging Patterns & Insight Clusters',
      mockupContent: isRTL ? 'النمط المتكرر: 8 من 10 مستخدمين يطلبون مكالمة هاتفية مع الصيدلي لتأكيد الجرعة.' : 'Identified Trend: 8/10 participants demand pharmacist phone verification before dispatch.',
      mockupAnswers: isRTL ? ['Tag: #PharmacistTrust (8)', 'Tag: #DeliveryFear (6)', 'Tag: #PrescriptionClarity (9)'] : ['Tag: #ClinicalTrust (8)', 'Tag: #EmergencyDelivery (6)', 'Tag: #ElderlyUsability (9)'],
      keyTakeaway: isRTL ? 'يحول مئات الملاحظات المتناثرة إلى توصيات استراتيجية توجه قرارات التصميم.' : 'Converts raw transcripts into structured, prioritized product roadmaps.'
    }
  ];

  const current = categories[activeTab];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Category Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          const isActive = idx === activeTab;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`p-2.5 rounded-xl border text-start transition-all cursor-pointer flex items-center gap-2.5 ${
                isActive
                  ? (isDark ? 'bg-slate-800 border-blue-500 ring-2 ring-blue-500/40 shadow-md' : 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/30 shadow-sm')
                  : (isDark ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300')
              }`}
            >
              <div className={`p-1.5 rounded-lg bg-gradient-to-br ${cat.color} text-white shrink-0`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="truncate">
                <h5 className={`text-xs font-black truncate ${
                  isActive 
                    ? (isDark ? 'text-blue-400' : 'text-blue-900')
                    : (isDark ? 'text-slate-200' : 'text-slate-800')
                }`}>
                  {cat.name.split('(')[0]}
                </h5>
                <p className={`text-[10px] font-bold truncate ${
                  isActive ? (isDark ? 'text-slate-300' : 'text-blue-700') : (isDark ? 'text-slate-400' : 'text-slate-500')
                }`}>{cat.badge}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Focus Detail */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${
        isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-950'
      } shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch`}>
        
        {/* Left 6 cols: Simulated Output Screen */}
        <div className={`lg:col-span-6 rounded-xl border p-4 flex flex-col justify-between ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 dark:border-slate-800 text-xs font-bold">
              <span className="text-blue-600 dark:text-blue-400 font-mono flex items-center gap-1.5">
                <CurrentIcon className="w-3.5 h-3.5" />
                {current.sampleTool}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded border font-mono font-bold ${
                isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-white text-slate-800 border-slate-300'
              }`}>
                {current.type.split('(')[0]}
              </span>
            </div>

            <h5 className="text-xs font-extrabold mb-2">
              {current.mockupTitle}
            </h5>

            <div className={`p-3 rounded-xl border mb-3 text-xs leading-relaxed font-semibold ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}>
              {current.mockupContent}
            </div>

            <div className="space-y-1.5">
              {current.mockupAnswers.map((ans, aIdx) => (
                <div key={aIdx} className={`p-2 rounded-lg border flex items-center justify-between text-xs font-mono font-bold ${
                  isDark ? 'bg-slate-900 border-slate-800 text-blue-300' : 'bg-white border-slate-200 text-blue-900 shadow-sm'
                }`}>
                  <span>{ans}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 text-[10px] text-center text-slate-500 font-mono font-bold mt-2">
            Tool Interface Preview
          </div>
        </div>

        {/* Right 6 cols: Explanatory Breakdown */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${current.color} text-white shadow-sm`}>
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono">
                  {current.badge} • Core Purpose
                </span>
                <h3 className="text-base sm:text-lg font-black">
                  {current.name}
                </h3>
              </div>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed font-semibold mt-2 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {current.keyTakeaway}
            </p>

            <div className={`mt-3 p-3 rounded-xl border text-xs font-bold leading-relaxed ${
              isDark ? 'bg-blue-950/40 border-blue-800/60 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-950'
            }`}>
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-extrabold">{isRTL ? 'متى تستخدم هذه الفئة؟' : 'When to Use This Tool Category?'}</span>
              </div>
              <p>
                {activeTab === 0 && (isRTL ? 'عندما تحتاج إحصائيات ونسباً كمية سريعة قبل اتخاذ قرار تجاري.' : 'When needing statistical validations across wide demographics.')}
                {activeTab === 1 && (isRTL ? 'عندما تريد معرفة "لماذا" يشعر المستخدم بالإحباط وسماع قصته بلسانه.' : 'When digging deep into emotional friction, motivations, and the "Why".')}
                {activeTab === 2 && (isRTL ? 'قبل تسليم التصميم للبرمجة للتأكد من سهولة مسار الشاشات.' : 'Before coding to evaluate task completion and friction points.')}
                {activeTab === 3 && (isRTL ? 'لتنظيم مئات الملاحظات ومشاركتها مع المديرين والمستثمرين.' : 'To organize raw research into prioritized strategic company roadmaps.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
