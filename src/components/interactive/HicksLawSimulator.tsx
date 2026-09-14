import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Timer, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  ArrowRight,
  ArrowLeft,
  Compass,
  FileText,
  Settings,
  Calendar,
  CreditCard,
  Bell,
  Search,
  HelpCircle,
  Share2,
  Lock,
  Download,
  Upload,
  User,
  Inbox,
  Bookmark,
  Shield,
  Tag
} from 'lucide-react';
import { Language } from '../../types';

interface HicksLawSimulatorProps {
  language: Language;
}

export const HicksLawSimulator: React.FC<HicksLawSimulatorProps> = ({ language }) => {
  const isRTL = language === 'ar';

  const [step, setStep] = useState<'intro' | 'test1' | 'test2' | 'result'>('intro');
  const [time1, setTime1] = useState<number>(0);
  const [time2, setTime2] = useState<number>(0);
  const [elapsedMs, setElapsedMs] = useState<number>(0);
  const [targetItem, setTargetItem] = useState<{ id: string; nameAR: string; nameEN: string }>({
    id: 'consult',
    nameAR: 'حجز استشارة فورية',
    nameEN: 'Book Consultation'
  });

  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  // Cluttered items pool (20 chaotic items)
  const chaoticItems = [
    { id: 'sett', nameAR: 'إعدادات الحساب', nameEN: 'Account Settings', icon: Settings },
    { id: 'docs', nameAR: 'المستندات المؤرشفة', nameEN: 'Archived Documents', icon: FileText },
    { id: 'pay', nameAR: 'بوابة الدفع', nameEN: 'Payment Gateway', icon: CreditCard },
    { id: 'notif', nameAR: 'سجل التنبيهات', nameEN: 'Notification History', icon: Bell },
    { id: 'srch', nameAR: 'بحث متقدم', nameEN: 'Advanced Search', icon: Search },
    { id: 'help', nameAR: 'مركز الدعم الفني', nameEN: 'Help Center', icon: HelpCircle },
    { id: 'share', nameAR: 'مشاركة الملفات', nameEN: 'Share Files', icon: Share2 },
    { id: 'lock', nameAR: 'أمان الحساب', nameEN: 'Security Privacy', icon: Lock },
    { id: 'down', nameAR: 'تنزيل التقارير', nameEN: 'Download Reports', icon: Download },
    { id: 'up', nameAR: 'رفع الوسائط', nameEN: 'Upload Media', icon: Upload },
    { id: 'user', nameAR: 'الملف الشخصي', nameEN: 'User Profile', icon: User },
    { id: 'inbox', nameAR: 'صندوق الوارد', nameEN: 'Direct Inbox', icon: Inbox },
    { id: 'book', nameAR: 'العناصر المحفوظة', nameEN: 'Saved Bookmarks', icon: Bookmark },
    { id: 'shield', nameAR: 'الصلاحيات والتحقق', nameEN: 'Permissions Audit', icon: Shield },
    { id: 'tag', nameAR: 'الوسوم المخصصة', nameEN: 'Custom Tags', icon: Tag },
    { id: 'consult', nameAR: 'حجز استشارة فورية', nameEN: 'Book Consultation', icon: Calendar }, // TARGET
    { id: 'feed', nameAR: 'آخر التحديثات', nameEN: 'Activity Feed', icon: Compass },
    { id: 'plan', nameAR: 'خطة الاشتراك', nameEN: 'Billing Plan', icon: CreditCard },
    { id: 'logs', nameAR: 'سجلات النشاط', nameEN: 'Audit Logs', icon: FileText },
    { id: 'theme', nameAR: 'تخصيص المظهر', nameEN: 'Theme Appearance', icon: Settings }
  ];

  // Shuffled items for test 1
  const [shuffledItems, setShuffledItems] = useState(chaoticItems);

  const startTimer = () => {
    startTimeRef.current = Date.now();
    setElapsedMs(0);
    timerRef.current = window.setInterval(() => {
      setElapsedMs(Date.now() - startTimeRef.current);
    }, 10);
  };

  const stopTimer = (): number => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return Date.now() - startTimeRef.current;
  };

  const handleStartTest1 = () => {
    // Shuffle array
    const shuffled = [...chaoticItems].sort(() => Math.random() - 0.5);
    setShuffledItems(shuffled);
    setStep('test1');
    startTimer();
  };

  const handleCorrectClickTest1 = () => {
    const elapsed = stopTimer();
    setTime1(elapsed);
    setStep('test2');
    startTimer();
  };

  const handleCorrectClickTest2 = () => {
    const elapsed = stopTimer();
    setTime2(elapsed);
    setStep('result');
  };

  const handleReset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setStep('intro');
    setTime1(0);
    setTime2(0);
    setElapsedMs(0);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-slate-900/70 rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-xl backdrop-blur-md">
      {/* Header with Title & Timer */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-xs sm:text-sm font-bold text-slate-200">
            {isRTL ? 'مختبر قانون هيك: تجربة قياس وقت اتخاذ القرار' : "Hick's Law Lab: Live Decision-Time Benchmark"}
          </span>
        </div>

        {(step === 'test1' || step === 'test2') && (
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold">
            <Timer className="w-3.5 h-3.5 animate-spin" />
            <span>{(elapsedMs / 1000).toFixed(2)} s</span>
          </div>
        )}

        {step === 'result' && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isRTL ? 'إعادة الاختبار' : 'Try Again'}</span>
          </button>
        )}
      </div>

      {/* STAGE 1: INTRO */}
      {step === 'intro' && (
        <div className="py-6 px-4 text-center max-w-xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 mb-3">
            <Timer className="w-6 h-6" />
          </div>
          <h4 className="text-base sm:text-lg font-extrabold text-white mb-2">
            {isRTL ? 'كم ثانية يستغرق عقلك لاختيار زر؟' : 'How many seconds to make a decision?'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
            {isRTL
              ? 'سنختبر سرعتك في العثور على زر معين في واجهتين: الأولى تحتوي على 20 خياراً مبعثراً، والثانية واجهة منظمة بـ 3 خيارات ذكية فقط.'
              : "We'll measure your brain speed finding a target action across 20 cluttered buttons versus 3 structured choices."}
          </p>
          <button
            onClick={handleStartTest1}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{isRTL ? 'ابدأ التجربة الحية الآن' : 'Start Live Test'}</span>
            {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* STAGE 2: CLUTTERED TEST (20 ITEMS) */}
      {step === 'test1' && (
        <div>
          <div className="mb-3 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
            <span className="font-bold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              {isRTL ? 'المطلوب: اضغط فوراً على زر:' : 'Objective: Rapidly click:'}
              <span className="underline font-black text-white px-1 bg-amber-600/40 rounded">
                "{isRTL ? targetItem.nameAR : targetItem.nameEN}"
              </span>
            </span>
            <span className="text-[10px] text-amber-400 font-mono">20 Choices (Unorganized)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-[260px] overflow-y-auto p-1">
            {shuffledItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === targetItem.id) {
                    handleCorrectClickTest1();
                  }
                }}
                className={`p-2 rounded-lg border text-start text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  item.id === targetItem.id
                    ? 'bg-slate-800/90 border-slate-700 hover:border-amber-400 hover:bg-amber-950/40 text-slate-200'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800 text-slate-400'
                }`}
              >
                <item.icon className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                <span className="truncate">{isRTL ? item.nameAR : item.nameEN}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STAGE 3: OPTIMIZED UX TEST (3 CLEAN CATEGORIES) */}
      {step === 'test2' && (
        <div>
          <div className="mb-3 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
            <span className="font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              {isRTL ? 'المطلوب نفس الهدف: اضغط على:' : 'Objective: Click on:'}
              <span className="underline font-black text-white px-1 bg-emerald-600/40 rounded">
                "{isRTL ? targetItem.nameAR : targetItem.nameEN}"
              </span>
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">3 Categorized Choices (Optimized)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Card 1 */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 opacity-60 text-center">
              <FileText className="w-6 h-6 mx-auto mb-2 text-slate-500" />
              <h5 className="text-xs font-bold text-slate-400 mb-1">
                {isRTL ? 'المستندات والتقارير' : 'Documents & Reports'}
              </h5>
              <p className="text-[10px] text-slate-500">
                {isRTL ? 'إدارة المستندات وتنزيل الفواتير' : 'Manage files and downloads'}
              </p>
            </div>

            {/* Card 2 (TARGET) */}
            <button
              onClick={handleCorrectClickTest2}
              className="p-4 rounded-xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border-2 border-blue-500 hover:border-blue-400 hover:scale-[1.02] text-center transition-all shadow-lg shadow-blue-500/20 cursor-pointer group"
            >
              <Calendar className="w-7 h-7 mx-auto mb-2 text-blue-400 group-hover:scale-110 transition-transform" />
              <h5 className="text-sm font-extrabold text-white mb-1">
                {isRTL ? targetItem.nameAR : targetItem.nameEN}
              </h5>
              <p className="text-[11px] text-blue-200">
                {isRTL ? 'حدد موعدك مع الخبير في دقيقة واحدة' : 'Schedule your session in 1 minute'}
              </p>
              <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-bold">
                {isRTL ? 'اضغط هنا للإنهاء' : 'Click Here'}
              </span>
            </button>

            {/* Card 3 */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 opacity-60 text-center">
              <Settings className="w-6 h-6 mx-auto mb-2 text-slate-500" />
              <h5 className="text-xs font-bold text-slate-400 mb-1">
                {isRTL ? 'إعدادات الحساب' : 'Account Settings'}
              </h5>
              <p className="text-[10px] text-slate-500">
                {isRTL ? 'تعديل الأمان والملف الشخصي' : 'Update privacy and profile'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* STAGE 4: RESULT & BENCHMARK */}
      {step === 'result' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            {/* Cluttered Result */}
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30">
              <span className="text-[11px] text-rose-400 font-bold block mb-1">
                {isRTL ? 'الواجهة المزدحمة (20 خياراً)' : 'Cluttered UI (20 options)'}
              </span>
              <span className="text-xl sm:text-2xl font-black text-rose-400 font-mono">
                {(time1 / 1000).toFixed(2)}s
              </span>
              <span className="text-[10px] text-slate-400 block mt-1">
                {isRTL ? 'تشتت وانشغال ذهني عالي' : 'High cognitive friction'}
              </span>
            </div>

            {/* Optimized Result */}
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-[11px] text-emerald-400 font-bold block mb-1">
                {isRTL ? 'الواجهة المنظمة (3 خيارات)' : 'Optimized UI (3 options)'}
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                {(time2 / 1000).toFixed(2)}s
              </span>
              <span className="text-[10px] text-slate-400 block mt-1">
                {isRTL ? 'اتخاذ قرار مباشر وسلس' : 'Effortless decision'}
              </span>
            </div>

            {/* Speedup Ratio */}
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
              <span className="text-[11px] text-blue-200 font-bold block mb-1">
                {isRTL ? 'معدل تسريع القرار' : 'Decision Speedup'}
              </span>
              <span className="text-xl sm:text-2xl font-black font-mono">
                {time2 > 0 ? (time1 / time2).toFixed(1) : '3.5'}x
              </span>
              <span className="text-[10px] text-blue-100 block mt-1">
                {isRTL ? 'أسرع بفضل تبسيط الخيارات' : 'Faster with fewer choices'}
              </span>
            </div>
          </div>

          {/* Theoretical Summary Box */}
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                {isRTL
                  ? 'قانون هيك الرياضي: T = b · log₂(n + 1) — كلما ضاعفت عدد الأزرار، زاد تردد المستخدم وتأخر اتخاذ الإجراء.'
                  : "Hick's Law Formula: T = b · log₂(n + 1) — Every extra option logarithmically increases cognitive friction."}
              </span>
            </div>
            <button
              onClick={handleReset}
              className="px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] shrink-0 cursor-pointer"
            >
              {isRTL ? 'تجربة أخرى' : 'Try Again'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
