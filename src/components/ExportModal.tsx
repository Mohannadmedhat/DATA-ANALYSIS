import React, { useState, useRef, useEffect } from 'react';
import { X, FileDown, Layers, Bookmark, Sliders, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { SlideData, Language } from '../types';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  language: Language;
  currentSlideIndex?: number;
  slideTitle?: string;
  sessionId?: string;
  courseType?: 'data-analysis' | 'pentest';
  sessionTitle?: string;
  onSelectSlide?: (idx: number) => void;
}

type ExportScope = 'all' | 'current' | 'custom';
type ExportStatus = 'idle' | 'exporting' | 'done' | 'error';

// Memory cache for pre-rendered PDF decks to prevent repeated downloads
const globalPdfCache = new Map<string, ArrayBuffer>();

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  slides,
  language,
  currentSlideIndex = 0,
  slideTitle = 'Slide',
  sessionId = 'session-01',
  courseType = 'data-analysis',
  sessionTitle = 'Presentation',
}) => {
  const isRTL = language === 'ar';
  const totalCount = slides.length;

  const [scope, setScope] = useState<ExportScope>('all');
  const [fromSlide, setFromSlide] = useState(1);
  const [toSlide, setToSlide] = useState(totalCount);
  const [status, setStatus] = useState<ExportStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [progress, setProgress] = useState({ current: 0, total: 0, slideName: '' });

  const abortRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
      abortRef.current = false;
    } else {
      setToSlide(totalCount);
      setFromSlide(1);
    }
  }, [isOpen, totalCount]);

  if (!isOpen) return null;

  const currentSlideNumber = currentSlideIndex + 1;
  const effectiveFrom = scope === 'current' ? currentSlideNumber : scope === 'custom' ? fromSlide : 1;
  const effectiveTo = scope === 'current' ? currentSlideNumber : scope === 'custom' ? toSlide : totalCount;
  const selectedCount = effectiveTo - effectiveFrom + 1;

  const handleCancel = () => {
    if (status === 'exporting') {
      abortRef.current = true;
    }
    onClose();
  };

  const handleStartExport = async () => {
    abortRef.current = false;
    setStatus('exporting');
    setErrorMsg('');

    const startIndex = effectiveFrom - 1;
    const endIndex = effectiveTo - 1;

    try {
      const match = sessionId.match(/\d+/);
      const sNum = match ? match[0].padStart(2, '0') : '01';
      const readyPdfUrl = `/exports/Session_${sNum}_Presentation.pdf`;

      // =========================================================================
      // PATH 1: ALL SLIDES — instant direct download of pre-generated PDF
      // =========================================================================
      if (scope === 'all' || selectedCount === totalCount) {
        const a = document.createElement('a');
        a.href = readyPdfUrl;
        a.download = `Session_${sNum}_Presentation.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setStatus('done');
        setTimeout(() => { onClose(); setStatus('idle'); }, 1000);
        return;
      }

      // =========================================================================
      // PATH 2 & 3: CURRENT SLIDE or CUSTOM RANGE — pdf-lib page extraction
      // Uses the pre-generated pixel-perfect PDF, zero html2canvas issues.
      // =========================================================================
      setProgress({
        current: 1,
        total: 1,
        slideName: isRTL ? 'جاري تجهيز ملف PDF عالي الجودة...' : 'Preparing high-quality PDF...',
      });

      // Load from cache or fetch
      let fullPdfBytes = globalPdfCache.get(readyPdfUrl);
      if (!fullPdfBytes) {
        const response = await fetch(readyPdfUrl);
        const contentType = response.headers.get('content-type') || '';
        if (!response.ok || contentType.includes('text/html')) {
          throw new Error(`PDF not found for session ${sNum}. Make sure exports are generated.`);
        }
        fullPdfBytes = await response.arrayBuffer();
        // Validate PDF header (%PDF)
        const header = new Uint8Array(fullPdfBytes.slice(0, 4));
        if (header[0] !== 0x25 || header[1] !== 0x50) {
          throw new Error('Downloaded file is not a valid PDF.');
        }
        globalPdfCache.set(readyPdfUrl, fullPdfBytes);
      }

      const { PDFDocument } = await import('pdf-lib');
      const fullPdf = await PDFDocument.load(fullPdfBytes);
      const subPdf = await PDFDocument.create();

      const pageIndices: number[] = [];
      for (let i = startIndex; i <= endIndex; i++) {
        if (i >= 0 && i < fullPdf.getPageCount()) {
          pageIndices.push(i);
        }
      }

      if (pageIndices.length === 0) {
        throw new Error('No valid pages found in the selected range.');
      }

      const copiedPages = await subPdf.copyPages(fullPdf, pageIndices);
      copiedPages.forEach((p) => subPdf.addPage(p));

      const subPdfBytes = await subPdf.save();
      const blob = new Blob([subPdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const filename =
        scope === 'current'
          ? `Session_${sNum}_Slide_${currentSlideNumber}.pdf`
          : `Session_${sNum}_Slides_${effectiveFrom}_to_${effectiveTo}.pdf`;

      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setStatus('done');
      setTimeout(() => { onClose(); setStatus('idle'); }, 1200);

    } catch (err) {
      console.error('Export error:', err);
      setErrorMsg(
        isRTL
          ? 'فشل التصدير. تأكد من توفر ملف الـ PDF للسيشن الحالية.'
          : 'Export failed. Make sure the session PDF is available.'
      );
      setStatus('error');
    }
  };

  const isBusy = status === 'exporting';
  const progressPct = progress.total > 0 ? Math.round((progress.current / progress.total) * 100) : 0;

  return (
    <>
      {/* Main Modal Backdrop */}
      <div
        onClick={!isBusy ? onClose : undefined}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
        style={{ background: 'rgba(5, 10, 25, 0.86)', backdropFilter: 'blur(10px)' }}
      >
        <div
          dir={isRTL ? 'rtl' : 'ltr'}
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'emIn .2s cubic-bezier(.4,0,.2,1)', maxWidth: 540, width: '100%' }}
          className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/60 overflow-hidden cursor-default text-white"
        >
          {/* Top Gradient Accent */}
          <div style={{ height: 4, background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#06b6d4)' }} />

          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <FileDown className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {isRTL ? 'تصدير شرائح السيشن كـ PDF' : 'Export Slides to PDF'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {isRTL
                    ? 'يتم التقاط كل شريحة بأبعادها وتنسيقها الأصلي صفحة بصفحة'
                    : 'Captures each slide in its exact dimensions and theme, page by page'}
                </p>
              </div>
            </div>
            {!isBusy && (
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="p-6 space-y-5">
            {/* Scope Selection Tabs */}
            {!isBusy && (
              <div className="grid grid-cols-3 gap-2 p-1 bg-slate-800/80 rounded-xl border border-slate-700/60">
                <button
                  onClick={() => setScope('all')}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                    scope === 'all'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{isRTL ? 'كل الشرائح' : 'All Slides'}</span>
                  <span className="text-[10px] opacity-75">({totalCount})</span>
                </button>

                <button
                  onClick={() => setScope('current')}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                    scope === 'current'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{isRTL ? 'الحالية فقط' : 'Current Slide'}</span>
                  <span className="text-[10px] opacity-75">(#{currentSlideNumber})</span>
                </button>

                <button
                  onClick={() => setScope('custom')}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                    scope === 'custom'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{isRTL ? 'نطاق مخصص' : 'Custom'}</span>
                </button>
              </div>
            )}

            {/* Custom Range Sliders & Inputs */}
            {!isBusy && scope === 'custom' && (
              <div className="bg-slate-950/60 rounded-xl border border-slate-700/60 p-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                  <span>{isRTL ? 'اختر نطاق الشرائح للتصدير:' : 'Select slide range:'}</span>
                  <span className="text-blue-400 font-mono font-bold">
                    {fromSlide} → {toSlide} ({selectedCount} {isRTL ? 'شريحة' : 'slides'})
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 space-y-1">
                    <label className="text-[11px] text-slate-400">{isRTL ? 'من شريحة' : 'From'}</label>
                    <input
                      type="number"
                      min={1}
                      max={toSlide}
                      value={fromSlide}
                      onChange={(e) => setFromSlide(Math.max(1, Math.min(Number(e.target.value), toSlide)))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-center text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <span className="text-slate-600 font-bold mt-4">—</span>
                  <div className="flex-1 space-y-1">
                    <label className="text-[11px] text-slate-400">{isRTL ? 'إلى شريحة' : 'To'}</label>
                    <input
                      type="number"
                      min={fromSlide}
                      max={totalCount}
                      value={toSlide}
                      onChange={(e) => setToSlide(Math.max(fromSlide, Math.min(Number(e.target.value), totalCount)))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-center text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Info Summary Badge */}
            {!isBusy && (
              <div className="flex items-center justify-between px-4 py-2.5 bg-blue-500/10 border border-blue-500/25 rounded-xl text-xs">
                <div className="flex items-center gap-2 text-blue-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span>
                    {isRTL
                      ? `سيتم تصدير ${selectedCount} شريحة (من ${effectiveFrom} إلى ${effectiveTo}) ورا بعض في ملف PDF واحد`
                      : `Exporting ${selectedCount} slides (${effectiveFrom} to ${effectiveTo}) into a unified multi-page PDF`}
                  </span>
                </div>
              </div>
            )}


            {/* Loading indicator during export */}
            {isBusy && (
              <div className="flex flex-col items-center gap-3 py-4">
                <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
                <p className="text-xs text-slate-300 font-medium">
                  {isRTL ? 'جاري تجهيز ملف PDF عالي الجودة...' : 'Preparing your high-quality PDF...'}
                </p>
                <p className="text-[11px] text-slate-500">{progress.slideName}</p>
              </div>
            )}


            {/* Done Success Message */}
            {status === 'done' && (
              <div className="p-4 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-center space-y-1">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-300">
                  {isRTL ? 'تم إنشاء وتنزيل ملف الـ PDF بنجاح!' : 'PDF Generated and Downloaded Successfully!'}
                </h4>
                <p className="text-xs text-slate-300">
                  {isRTL ? 'تم حفظ جميع الشرائح بنفس التنسيق والمقاس الأصلي.' : 'All slides saved in exact format and scale.'}
                </p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-3 bg-red-500/15 border border-red-500/30 rounded-xl flex items-center gap-2 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-2 flex gap-3">
              <button
                onClick={handleCancel}
                className="flex-1 py-2.5 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-semibold transition-colors"
              >
                {isBusy ? (isRTL ? 'إلغاء العملية' : 'Abort') : isRTL ? 'إغلاق' : 'Close'}
              </button>

              {!isBusy && status !== 'done' && (
                <button
                  onClick={handleStartExport}
                  className="flex-[2] flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-lg hover:brightness-110"
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                    boxShadow: '0 4px 20px rgba(37, 99, 235, 0.35)',
                  }}
                >
                  <FileDown className="w-4 h-4" />
                  <span>
                    {isRTL
                      ? `تصدير (${selectedCount} ${selectedCount === 1 ? 'شريحة' : 'شرائح'}) كـ PDF`
                      : `Export (${selectedCount} Slides) to PDF`}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes emIn {
          from { opacity: 0; transform: scale(.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1)  translateY(0);   }
        }
      `}</style>
    </>
  );
};
