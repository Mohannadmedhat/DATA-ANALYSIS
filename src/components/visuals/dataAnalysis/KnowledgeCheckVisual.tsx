import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, CheckCircle2, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

export interface QuestionItem {
  id: number;
  question: string;
  answerAr: string;
  answerEn: string;
}

const defaultQuestions: QuestionItem[] = [
  {
    id: 1,
    question: '1. What is the difference between structured & unstructured data?',
    answerAr: 'البيانات المنظمة (Structured) مرتبة في جداول وصفوف وأعمدة مثل SQL و Excel، بينما غير المنظمة (Unstructured) لا تتبع هيكلاً ثابتاً مثل الصور والفيديوهات والنصوص الحرة.',
    answerEn: 'Structured data is organized in rows/columns (SQL, tables). Unstructured data has no predefined format (images, videos, audio, free text).'
  },
  {
    id: 2,
    question: '2. What are the 6 steps of the Data Analysis Lifecycle?',
    answerAr: 'المراحل الست بالترتيب: 1) Collect (الجمع)، 2) Clean (التنظيف)، 3) Explore (الاستكشاف)، 4) Analyze (التحليل)، 5) Visualize (التصوير)، 6) Communicate (التواصل والنتائج).',
    answerEn: 'The 6 steps are: 1) Collect, 2) Clean, 3) Explore, 4) Analyze, 5) Visualize, 6) Communicate insights.'
  },
  {
    id: 3,
    question: '3. Why do we need SQL when we already have Excel?',
    answerAr: 'إكسيل محدود بسعة ~مليون صف ويعاني من البطء مع الملفات الكبيرة، بينما قواعد بيانات SQL تستطيع تخزين واسترجاع وفلترة مليارات السجلات بأمان وسرعة فائقة.',
    answerEn: 'Excel is limited to ~1M rows and slows down with large files. SQL handles enterprise databases with billions of records securely and efficiently.'
  },
  {
    id: 4,
    question: '4. What is the main strength of Power BI vs Tableau?',
    answerAr: 'Power BI يتميز بالاندماج القوي مع بيئة Microsoft ونمذجة البيانات بـ DAX والتكلفة الاقتصادية، بينما Tableau يتميز بالمرونة البصرية وسرد القصص (Data Storytelling).',
    answerEn: 'Power BI excels in data modeling (DAX), Microsoft ecosystem integration, and cost. Tableau excels in visual flexibility and interactive storytelling.'
  },
  {
    id: 5,
    question: '5. Which Python library is used for manipulating DataFrames?',
    answerAr: 'مكتبة بانداس (Pandas) هي المكتبة الأساسية للتعامل مع هياكل البيانات الجدولية (DataFrames) وتنظيفها وتجميعها وفلترتها.',
    answerEn: 'Pandas is the primary Python library used for creating and manipulating tabular DataFrames.'
  },
  {
    id: 6,
    question: '6. What is the difference between Data, Information, and Insight?',
    answerAr: 'البيانات (Data) هي أرقام خام، المعلومات (Information) هي بيانات تم ترتيبها في تقرير مفهوم، والرؤية (Insight) هي فهم "السبب" الذي يوجه القرار.',
    answerEn: 'Data is raw facts. Information is structured and contextualized data. Insight is actionable understanding of the underlying cause.'
  }
];

interface KnowledgeCheckVisualProps {
  questions?: QuestionItem[];
  isRTL: boolean;
}

export const KnowledgeCheckVisual: React.FC<KnowledgeCheckVisualProps> = ({ 
  questions = defaultQuestions, 
  isRTL 
}) => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggleReveal = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-2 max-w-5xl mx-auto select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {questions.map((q, idx) => {
          const isAnswered = revealed[q.id];
          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx, duration: 0.45, ease: 'easeOut' }}
              whileHover={{ y: -2 }}
              onClick={() => toggleReveal(q.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-start ${
                isAnswered 
                  ? 'bg-blue-50/90 border-blue-300 shadow-md ring-1 ring-blue-400/30' 
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  {q.id}
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {q.question}
                  </h4>
                  {isAnswered && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-xs text-blue-900 font-medium mt-2 pt-2 border-t border-blue-200 leading-relaxed"
                    >
                      {isRTL ? q.answerAr : q.answerEn}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-end mt-2 pt-1">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                  isAnswered 
                    ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' 
                    : 'text-slate-400 hover:text-blue-600'
                }`}>
                  {isAnswered ? (isRTL ? '✓ تم الكشف عن الإجابة' : '✓ Answer Revealed') : (isRTL ? 'انقر لإظهار الإجابة 💡' : 'Click to reveal 💡')}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
