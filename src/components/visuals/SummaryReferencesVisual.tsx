import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Language, ReferenceBook } from '../../types';

interface SummaryReferencesVisualProps {
  language: Language;
  isDark?: boolean;
}

export const SummaryReferencesVisual: React.FC<SummaryReferencesVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';

  const takeaways = [
    {
      title: 'UX ≠ UI',
      desc: isRTL ? 'تجربة المستخدم هي المنطق والهندسة والرحلة الشاملة؛ الواجهة هي التجسيد البصري والحسي.' : 'UX is the architecture, psychology and holistic journey; UI is the sensory aesthetic layer.'
    },
    {
      title: 'UI is part of UX',
      desc: isRTL ? 'الواجهة البصرية جزء لا يتجزأ من تجربة المستخدم، ولا يمكن لتجربة ممتازة أن تكتمل بدون واجهة مقروءة وجذابة.' : 'UI is the visible touchpoint of UX. One cannot succeed without the other.'
    },
    {
      title: isRTL ? 'التوازن سر النجاح' : 'Balance is Success',
      desc: isRTL ? 'أنجح التطبيقات العالمية توازن بدقة بين القوة الوظيفية والسهولة والجاذبية العاطفية للمستخدم.' : 'Iconic products balance functional utility, frictionless usability, and emotional delight.'
    },
    {
      title: '7 UX Factors Matrix',
      desc: isRTL ? 'عوامل بيتر مورفيل السبعة هي المرجع المعتمد لتقييم وفحص جودة أي منتج رقمي في السوق.' : 'Peter Morville’s 7 factors represent the industry gold standard for product evaluation.'
    }
  ];

  const references: ReferenceBook[] = [
    {
      author: 'Don Norman',
      title: 'The Design of Everyday Things',
      concept: isRTL ? 'مفهوم Affordances والنماذج الذهنية وتصميم المنتجات للإنسان' : 'Affordances, signifiers, conceptual models & human-centered design',
      tag: 'Foundational UX'
    },
    {
      author: 'Peter Morville',
      title: 'UX Honeycomb & Information Architecture',
      concept: isRTL ? 'مخطط قرص العسل والعوامل السبعة لجودة تجربة المستخدم' : 'The 7 UX Factors matrix and structuring information for findability',
      tag: 'UX Framework'
    },
    {
      author: 'Nielsen Norman Group (NN/g)',
      title: 'User Experience Research & Heuristics',
      concept: isRTL ? 'المعايير القياسية لاختبارات قابلية الاستخدام وقوانين التفاعل' : 'Evidence-based usability research, guidelines & design heuristics',
      tag: 'Industry Standard'
    },
    {
      author: 'Jon Yablonski',
      title: 'Laws of UX',
      concept: isRTL ? 'سيكولوجية التصميم وقوانين علم النفس المعرفي للواجهات' : 'Connecting psychology heuristics to digital product design patterns',
      tag: 'Cognitive Science'
    },
    {
      author: 'Jenifer Tidwell',
      title: 'Designing Interfaces (O’Reilly)',
      concept: isRTL ? 'أنماط تصميم واجهات المستخدم والمكونات التفاعلية الحديثة' : 'Comprehensive design patterns for interactive UI components',
      tag: 'UI Patterns'
    }
  ];

  return (
    <div className="w-full flex flex-col gap-3.5 py-1">
      {/* Top Half: Key Session Takeaways */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {takeaways.map((item, idx) => (
          <div 
            key={idx}
            className={`p-3.5 sm:p-4 rounded-xl border flex flex-col justify-between ${
              isDark 
                ? 'bg-slate-900/95 border-slate-800 text-slate-100 shadow-sm' 
                : 'bg-slate-50/90 border-slate-200 text-slate-950 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <h4 className={`text-xs sm:text-sm font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  {item.title}
                </h4>
              </div>
              <p className={`text-xs leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Half: 5 Recommended References Books */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${
        isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className={`flex items-center justify-between mb-3.5 pb-2.5 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 className={`text-xs sm:text-sm font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {isRTL ? 'المراجع المعتمدة للقراءة المتعمقة (Recommended References)' : 'Essential Literature & References'}
            </h3>
          </div>
          <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded border ${
            isDark ? 'bg-blue-950 text-blue-400 border-blue-800' : 'bg-blue-50 text-blue-700 border-blue-200'
          }`}>
            5 Core References
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {references.map((book, bIdx) => (
            <div 
              key={bIdx}
              className={`p-3.5 rounded-xl border flex flex-col justify-between ${
                isDark 
                  ? 'bg-slate-950/80 border-slate-800 text-slate-100' 
                  : 'bg-slate-50/90 border-slate-200 text-slate-950 shadow-sm'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 block mb-1">
                  {book.author}
                </span>
                <h5 className={`text-xs sm:text-[13px] font-extrabold mb-1.5 leading-snug ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  {book.title}
                </h5>
                <p className={`text-[11px] leading-relaxed font-medium mb-2 ${
                  isDark ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  {book.concept}
                </p>
              </div>

              <div className={`pt-2.5 mt-2 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border inline-block ${
                  isDark 
                    ? 'bg-slate-800 text-slate-300 border-slate-700' 
                    : 'bg-white text-slate-900 border-slate-200 shadow-sm'
                }`}>
                  {book.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
