import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  BookOpen, 
  Copy, 
  Check, 
  ExternalLink,
  Library,
  FileText
} from 'lucide-react';
import { SlideData, Language } from '../types';
import { slideResourcesDatabase, SlideResourceItem } from '../data/slideResourcesData';

interface StudentResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
  language: Language;
  sessionId?: 'session-01' | 'session-02';
}

export const StudentResourcesModal: React.FC<StudentResourcesModalProps> = ({
  isOpen,
  onClose,
  slide,
  language,
  sessionId = 'session-01'
}) => {
  if (!isOpen) return null;
  const isRTL = language === 'ar';
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Exact slide lookup from comprehensive curriculum database
  const key = `${sessionId}_${slide.id}`;
  const slideResources: SlideResourceItem[] = slideResourcesDatabase[key] || [
    {
      title: 'Towards a UX Manifesto: Conceptual Frameworks in HCI',
      source: 'Law, Hassenzahl, Karapanos (ACM SIGCHI)',
      type: 'paper',
      descriptionAr: 'الورقة البحثية المحكمة التي وضعت الأسس الأكاديمية الدقيقة لمفهوم تجربة المستخدم وفصلتها عن مجرد التفاعل الوظيفي مع النظام.',
      descriptionEn: 'Seminal ACM paper establishing empirical frameworks and academic boundaries for User Experience.',
      tagAr: 'ورقة بحثية محكمة',
      tagEn: 'Peer-Reviewed Paper',
      searchQuery: 'Towards a UX Manifesto Law Hassenzahl ACM'
    }
  ];

  const handleCopySearch = (query: string, index: number) => {
    navigator.clipboard.writeText(query);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getTypeBadge = (type: SlideResourceItem['type']) => {
    switch (type) {
      case 'paper':
      case 'study':
        return {
          label: isRTL ? 'ورقة بحثية' : 'Research Paper',
          style: 'bg-purple-900/40 text-purple-300 border-purple-700/50'
        };
      case 'book':
        return {
          label: isRTL ? 'كتاب مرجعي' : 'Core Book',
          style: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50'
        };
      case 'guideline':
      case 'framework':
        return {
          label: isRTL ? 'معيار دولي' : 'Standard',
          style: 'bg-sky-900/40 text-sky-300 border-sky-700/50'
        };
      default:
        return {
          label: isRTL ? 'مرجع تطبيقي' : 'Industry Guide',
          style: 'bg-amber-900/40 text-amber-300 border-amber-700/50'
        };
    }
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 cursor-pointer"
    >
      <div 
        dir={isRTL ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl text-slate-100 relative animate-in zoom-in-95 duration-200 max-h-[88vh] flex flex-col justify-between overflow-hidden cursor-default"
      >
        {/* Close Button */}
        <button 
          id="close-student-resources-btn"
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pb-4 border-b border-slate-800/80 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-purple-400 font-bold block mb-0.5">
                {isRTL ? `المصادر والمراجع • الشريحة ${slide.slideNumber}` : `Resources & Literature • Slide ${slide.slideNumber}`}
              </span>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                {slide.mainTitle}
              </h3>
            </div>
          </div>
        </div>

        {/* Scrollable Resources List */}
        <div className="space-y-3.5 overflow-y-auto pr-1 flex-1 mb-4 custom-scrollbar">
          {slideResources.map((res, idx) => {
            const badge = getTypeBadge(res.type);
            const destinationUrl = res.url || `https://www.google.com/search?q=${encodeURIComponent(res.searchQuery)}`;
            const isDirectLink = Boolean(res.url);
            
            return (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between gap-2.5"
              >
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${badge.style}`}>
                      {badge.label}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {res.source}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {res.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {isRTL ? res.descriptionAr : res.descriptionEn}
                </p>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={destinationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white font-semibold text-xs px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 shadow-sm transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{isDirectLink ? (isRTL ? 'فتح الرابط' : 'Open Link') : (isRTL ? 'بحث في Google' : 'Search Google')}</span>
                    </a>

                    <button
                      onClick={() => handleCopySearch(res.searchQuery, idx)}
                      className="flex items-center gap-1 text-slate-300 hover:text-white font-medium text-xs px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{isRTL ? 'تم النسخ' : 'Copied'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{isRTL ? 'نسخ' : 'Copy'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80">
          <span className="text-slate-400 font-medium">
            {isRTL ? 'دبلومة الـ UI/UX الاحترافية' : 'UI/UX Professional Diploma'}
          </span>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
          >
            {isRTL ? 'إغلاق' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
