import React, { useState } from 'react';
import { X, Copy, Check, FileText, Layers, FileDown } from 'lucide-react';
import { SlideData, Language } from '../types';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  language: Language;
  currentSlideIndex?: number;
  onSelectSlide?: (idx: number) => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  slides,
  language,
}) => {
  const isRTL = language === 'ar';
  const totalCount = slides.length;

  const [fromSlide, setFromSlide] = useState(1);
  const [toSlide, setToSlide] = useState(totalCount);
  const [rangeMode, setRangeMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const effectiveFrom = rangeMode ? fromSlide : 1;
  const effectiveTo   = rangeMode ? toSlide   : totalCount;
  const selectedSlides = slides.slice(effectiveFrom - 1, effectiveTo);
  const selectedCount  = selectedSlides.length;

  const handleFromChange = (val: number) => setFromSlide(Math.max(1, Math.min(val, toSlide)));
  const handleToChange   = (val: number) => setToSlide(Math.max(fromSlide, Math.min(val, totalCount)));

  const handleExportPDF = () => {
    sessionStorage.setItem('printFrom', String(effectiveFrom - 1));
    sessionStorage.setItem('printTo',   String(effectiveTo - 1));
    onClose();
    setTimeout(() => { window.print(); }, 250);
  };

  const handleCopyMarkdown = () => {
    let md = '# UI/UX Professional Diploma\n\n';
    selectedSlides.forEach((s) => {
      md += '## Slide ' + s.slideNumber + ': ' + s.mainTitle + '\n';
      if (s.subtitle) md += '*' + s.subtitle + '*\n';
      md += '\n';
      if (s.cards) {
        s.cards.forEach((c) => {
          md += '### ' + c.title + '\n' + c.description + '\n';
          if (c.bullets) c.bullets.forEach((b) => { md += '- ' + b + '\n'; });
          md += '\n';
        });
      }
      if (s.processSteps) {
        s.processSteps.forEach((st) => {
          md += '**' + st.number + '. ' + st.title + '**: ' + st.description + '\n';
        });
        md += '\n';
      }
      if (s.quoteHeader) md += '> "' + s.quoteHeader + '"' + (s.quoteAuthor ? ' - ' + s.quoteAuthor : '') + '\n\n';
      md += '---\n\n';
    });
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  const fromPct = ((fromSlide - 1) / Math.max(totalCount - 1, 1)) * 100;
  const toPct   = ((toSlide   - 1) / Math.max(totalCount - 1, 1)) * 100;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
      style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(8px)' }}
    >
      <div
        dir={isRTL ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'emIn .2s cubic-bezier(.4,0,.2,1)', maxWidth: 520, width: '100%' }}
        className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden cursor-default"
      >
        <div style={{ height: 3, background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#06b6d4)' }} />

        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{isRTL ? 'تصدير الشرائح' : 'Export Slides'}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">{isRTL ? 'اختر النطاق وصيغة التصدير' : 'Select range and export format'}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 py-4 space-y-4">

          <div className="flex gap-2 p-1 bg-slate-800/60 rounded-xl border border-slate-700/50">
            <button
              onClick={() => setRangeMode(false)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all"
              style={!rangeMode ? { background: '#3b82f6', color: '#fff', boxShadow: '0 2px 12px #3b82f640' } : { color: '#64748b' }}
            >
              <Layers className="w-3.5 h-3.5" />
              {isRTL ? 'كل الشرائح' : 'All Slides'}
              <span className="text-[10px] opacity-70">({totalCount})</span>
            </button>
            <button
              onClick={() => setRangeMode(true)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all"
              style={rangeMode ? { background: '#7c3aed', color: '#fff', boxShadow: '0 2px 12px #7c3aed40' } : { color: '#64748b' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16"><path d="M2 8h12M8 2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              {isRTL ? 'نطاق مخصص' : 'Custom Range'}
            </button>
          </div>

          {rangeMode && (
            <div className="rounded-xl border border-slate-700/60 p-4 space-y-4" style={{ background: '#0a0f1e' }}>
              <div dir="ltr" className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">{isRTL ? 'من الشريحة' : 'From slide'}</span>
                  <span className="text-xs font-bold text-blue-300 bg-blue-500/15 border border-blue-500/25 px-2.5 py-0.5 rounded-lg min-w-[2rem] text-center">{fromSlide}</span>
                </div>
                <div className="relative h-6 flex items-center">
                  <div className="absolute inset-x-0 h-1.5 rounded-full bg-slate-700" />
                  <div className="absolute h-1.5 rounded-full bg-blue-500" style={{ left: 0, width: fromPct + '%' }} />
                  <input type="range" min={1} max={totalCount} value={fromSlide} onChange={(e) => handleFromChange(Number(e.target.value))} className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
                  <div className="absolute w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg pointer-events-none" style={{ left: 'calc(' + fromPct + '% - 8px)' }} />
                </div>
              </div>
              <div dir="ltr" className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">{isRTL ? 'إلى الشريحة' : 'To slide'}</span>
                  <span className="text-xs font-bold text-violet-300 bg-violet-500/15 border border-violet-500/25 px-2.5 py-0.5 rounded-lg min-w-[2rem] text-center">{toSlide}</span>
                </div>
                <div className="relative h-6 flex items-center">
                  <div className="absolute inset-x-0 h-1.5 rounded-full bg-slate-700" />
                  <div className="absolute h-1.5 rounded-full bg-violet-500" style={{ left: 0, width: toPct + '%' }} />
                  <input type="range" min={1} max={totalCount} value={toSlide} onChange={(e) => handleToChange(Number(e.target.value))} className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
                  <div className="absolute w-4 h-4 rounded-full bg-violet-500 border-2 border-white shadow-lg pointer-events-none" style={{ left: 'calc(' + toPct + '% - 8px)' }} />
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <input type="number" min={1} max={toSlide} value={fromSlide} onChange={(e) => handleFromChange(Number(e.target.value))} className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-xs text-center text-white focus:outline-none focus:border-blue-500" />
                <span className="text-slate-500 text-sm">—</span>
                <input type="number" min={fromSlide} max={totalCount} value={toSlide} onChange={(e) => handleToChange(Number(e.target.value))} className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-xs text-center text-white focus:outline-none focus:border-violet-500" />
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
            style={{ background: rangeMode ? '#1e1333' : '#0f2a1e', border: '1px solid ' + (rangeMode ? '#4c1d95' : '#14532d'), color: rangeMode ? '#c4b5fd' : '#34d399' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: rangeMode ? '#8b5cf6' : '#10b981' }} />
            {isRTL ? (selectedCount + ' شريحة (من ' + effectiveFrom + ' إلى ' + effectiveTo + ')') : (selectedCount + ' slide' + (selectedCount !== 1 ? 's' : '') + ' — ' + effectiveFrom + ' to ' + effectiveTo)}
          </div>

          <div className="space-y-2">
            <button
              onClick={handleExportPDF}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all hover:brightness-110"
              style={{ background: '#0d1b2e', border: '1px solid #1e3a5f' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#1e3a5f' }}>
                  <FileDown className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-start">
                  <p className="text-sm font-semibold text-white">PDF</p>
                  <p className="text-[10px] text-slate-400">{isRTL ? ('اختر "حفظ كـ PDF" من نافذة الطباعة — ' + selectedCount + ' شريحة') : ('Choose "Save as PDF" in the print dialog — ' + selectedCount + ' slide' + (selectedCount !== 1 ? 's' : ''))}</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
                {isRTL ? 'تصدير' : 'Export'}
              </span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all hover:brightness-110"
              style={{ background: '#0d1a0d', border: '1px solid ' + (copied ? '#16a34a' : '#1a3a1a') }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#1a3a1a' }}>
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-emerald-400" />}
                </div>
                <div className="text-start">
                  <p className="text-sm font-semibold text-white">Markdown</p>
                  <p className="text-[10px] text-slate-400">{isRTL ? 'للـ Gamma.app أو Notion' : 'For Gamma.app or Notion'}</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                {copied ? (isRTL ? 'تم النسخ!' : 'Copied!') : (isRTL ? 'نسخ' : 'Copy')}
              </span>
            </button>
          </div>

        </div>

        <div className="px-5 pb-4 pt-3 flex justify-end border-t border-slate-800">
          <button onClick={onClose} className="px-4 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors">
            {isRTL ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>

      <style>{'@keyframes emIn { from { opacity:0; transform:scale(.96) translateY(10px); } to { opacity:1; transform:scale(1) translateY(0); } }'}</style>
    </div>
  );
};
