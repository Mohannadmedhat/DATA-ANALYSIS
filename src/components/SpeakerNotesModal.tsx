import React from 'react';
import { X, BookOpen, Lightbulb, MessageSquare } from 'lucide-react';
import { SlideData, Language } from '../types';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
  language: Language;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  onClose,
  slide,
  language,
}) => {
  if (!isOpen) return null;
  const isRTL = language === 'ar';

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-200"
    >
      <div 
        dir={isRTL ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl text-slate-100 relative animate-in zoom-in-95 duration-200 cursor-default"
      >
        <button 
          id="close-speaker-notes-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-blue-400 font-bold block">
              {isRTL ? `ملاحظات المتحدث • الشريحة ${slide.slideNumber}` : `Speaker Notes • Slide ${slide.slideNumber}`}
            </span>
            <h3 className="text-base font-bold text-white line-clamp-1">{slide.mainTitle}</h3>
          </div>
        </div>

        <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 mb-5">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
            <Lightbulb className="w-4 h-4" />
            <span>{isRTL ? 'إرشادات الشرح والنقاط التوضيحية:' : 'Instructor Guidance & Talking Points:'}</span>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
            {slide.speakerNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800">
          <span className="flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5" />
            {isRTL ? 'للمحاضرين ومقدمي العرض' : 'For Presenters & Lecturers'}
          </span>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors"
          >
            {isRTL ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
