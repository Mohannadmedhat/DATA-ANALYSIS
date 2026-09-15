import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Tv, 
  Car, 
  Music, 
  FileEdit, 
  CheckCircle2, 
  Sparkles, 
  CheckSquare,
  HelpCircle,
  Award
} from 'lucide-react';

interface AssignmentStudioVisualProps {
  isRTL: boolean;
}

export const AssignmentStudioVisual: React.FC<AssignmentStudioVisualProps> = ({ isRTL }) => {
  const [selectedCompany, setSelectedCompany] = useState<'Netflix' | 'Amazon' | 'Uber' | 'Spotify'>('Netflix');

  const companiesData = {
    Netflix: {
      name: 'Netflix',
      industry: 'Streaming & Entertainment',
      icon: <Tv className="w-5 h-5 text-rose-600" />,
      color: 'border-rose-200 bg-rose-50 text-rose-800',
      dataCollectedAr: 'سجلات المشاهدة (Watch History)، أوقات التوقف والاستئناف، بحث المستخدمين، ومعدل إكمال الحلقات.',
      dataCollectedEn: 'Watch history timestamps, pause/resume points, search queries, completion rates, and device telemetry.',
      keyDecisionAr: 'تخصيص الواجهة لكل مستخدم بالذكاء الاصطناعي، وإنتاج مسلسلات جديدة مبنية على طلب الجمهور المسبق.',
      keyDecisionEn: 'Personalized thumbnail generation, content recommendation engine, and budgeting $17B original shows.'
    },
    Amazon: {
      name: 'Amazon',
      industry: 'E-commerce & Cloud Services',
      icon: <Building2 className="w-5 h-5 text-amber-600" />,
      color: 'border-amber-200 bg-amber-50 text-amber-800',
      dataCollectedAr: 'سلة المشتريات، المنتجات التي تم تفقدها، المراجعات، ومستويات المخزون وسرعة الشحن.',
      dataCollectedEn: 'Cart items, clickstream product browsing, customer reviews, inventory turnover, and delivery times.',
      keyDecisionAr: 'التسعير الديناميكي (Dynamic Pricing)، وتوقع الطلب وتوزيع المنتجات في أقرب مستودع قبل الشراء.',
      keyDecisionEn: 'Dynamic real-time algorithmic pricing and anticipatory shipping logistics across regional fulfillment centers.'
    },
    Uber: {
      name: 'Uber',
      industry: 'Ride-Hailing & Logistics',
      icon: <Car className="w-5 h-5 text-emerald-600" />,
      color: 'border-emerald-200 bg-emerald-50 text-emerald-800',
      dataCollectedAr: 'الموقع الجغرافي الحي (GPS)، أوقات الذروة، حركة المرور، وسرعة قبول السائقين للطلبات.',
      dataCollectedEn: 'Real-time GPS coordinates, peak demand surges, traffic telemetry, and driver dispatch latency.',
      keyDecisionAr: 'حساب تسعير الذروة (Surge Pricing) ديناميكياً وتوجيه السائقين للمناطق الأكثر احتياجاً.',
      keyDecisionEn: 'Surge pricing algorithm matching supply/demand in sub-second intervals and route optimization.'
    },
    Spotify: {
      name: 'Spotify',
      industry: 'Audio Streaming & Podcasts',
      icon: <Music className="w-5 h-5 text-emerald-600" />,
      color: 'border-emerald-200 bg-emerald-50 text-emerald-800',
      dataCollectedAr: 'الأغاني التي يتم تخطيها (Skips)، قوائم التشغيل، ساعات الاستماع اليومية، وأنماط التكرار.',
      dataCollectedEn: 'Song skip rates, playlist additions, listening hour patterns, repeat listens, and podcast preferences.',
      keyDecisionAr: 'توليد قائمة Discover Weekly المخصصة لكل مستخدم وتحديد الحملات الإعلانية الموجهة.',
      keyDecisionEn: 'Auto-curated Discover Weekly playlists and algorithmic artist radio recommendations.'
    }
  };

  const current = companiesData[selectedCompany];

  const questions = [
    { num: '1', qAr: 'ما هي أنواع البيانات (Data Types) التي تجمعها هذه الشركة يومياً؟', qEn: 'What specific data types does this company collect daily?' },
    { num: '2', qAr: 'كيف تحول الشركة هذه البيانات الخام إلى معلومات ورؤى (Insights)؟', qEn: 'How does the company transform raw data into actionable insights?' },
    { num: '3', qAr: 'ما هي قرارات البزنس التي تتخذها الشركة بناءً على هذه التحليلات؟', qEn: 'What critical business decisions are driven by their analytics models?' },
    { num: '4', qAr: 'ما هي الأدوات من دبلومتنا (SQL, Python, Power BI) المناسبة لتحليلها؟', qEn: 'Which tools from our diploma roadmap (SQL, Python, Power BI) fit best?' }
  ];

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-1 max-w-6xl mx-auto select-none">
      {/* Company Selector Ribbon */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <FileEdit className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
            {isRTL ? 'اختر شركة واحدة لتحليل دراسة الحالة (Select Company):' : 'Select a Company for your Case Study Assignment:'}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl shadow-inner">
          {(['Netflix', 'Amazon', 'Uber', 'Spotify'] as const).map((compKey) => {
            const isSelected = selectedCompany === compKey;
            return (
              <button
                key={compKey}
                onClick={() => setSelectedCompany(compKey)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-white text-blue-700 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{compKey}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Assignment Brief Studio with Gentle Staggered Animation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left: 4 Core Research Questions (7 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="lg:col-span-7 h-[350px] p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between text-start"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
                SUBMISSION REQUIREMENTS
              </span>
              <span className="text-xs text-slate-500 font-bold">
                {isRTL ? 'تقرير موجز من صفحة واحدة' : '1-Page Summary Report'}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3">
              {isRTL ? `الأسئلة الأربعة المطلوب الإجابة عنها لشركة (${selectedCompany}):` : `The 4 Questions to Answer for (${selectedCompany}):`}
            </h3>

            <div className="space-y-2.5">
              {questions.map((item) => (
                <div key={item.num} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {item.num}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {isRTL ? item.qAr : item.qEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span>{isRTL ? 'التسليم: قبل بداية السيشن الثاني للمناقشة' : 'Due Date: Before Session 02 for peer discussion'}</span>
            <span className="text-amber-700 font-bold font-mono">Practical Task</span>
          </div>
        </motion.div>

        {/* Right: Company Profile & Cheat Sheet (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
          className="lg:col-span-5 h-[350px] p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between text-start"
        >
          <div>
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm">
                {current.icon}
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900">{current.name}</h4>
                <span className="text-xs text-slate-500 font-medium">{current.industry}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-bold text-blue-700 uppercase block mb-1">
                  {isRTL ? '📡 ما تجمعه الشركة من بيانات:' : '📡 Data Collected:'}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {isRTL ? current.dataCollectedAr : current.dataCollectedEn}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-bold text-emerald-700 uppercase block mb-1">
                  {isRTL ? '🎯 قرارات البزنس الناتجة:' : '🎯 Driven Business Decisions:'}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {isRTL ? current.keyDecisionAr : current.keyDecisionEn}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span>{isRTL ? 'نموذج إرشادي' : 'Reference Case'}</span>
            <span className="text-blue-700 font-bold">{current.name} Case</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
