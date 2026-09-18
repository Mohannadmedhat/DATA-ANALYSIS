import React, { useState, useRef, useEffect } from 'react';
import { X, FileDown, Layers, Bookmark, Sliders, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { SlideData, Language } from '../types';
import { SlideViewer } from './SlideViewer';
import { MotionConfig } from 'motion/react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  language: Language;
  currentSlideIndex?: number;
  slideTitle?: string;
  sessionId?: 'session-01' | 'session-02' | 'session-03' | 'session-04' | 'session-05';
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
  const [stagingIndex, setStagingIndex] = useState<number | null>(null);
  const [livePreview, setLivePreview] = useState<string | null>(null);
  const [progress, setProgress] = useState({ current: 0, total: 0, slideName: '' });

  const abortRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
      setStagingIndex(null);
      setLivePreview(null);
      abortRef.current = false;
    } else {
      setToSlide(totalCount);
      setFromSlide(1);

      // Pre-fetch session deck in the background while user views options
      const sNum =
        sessionId === 'session-05'
          ? '05'
          : sessionId === 'session-04'
          ? '04'
          : sessionId === 'session-03'
          ? '03'
          : sessionId === 'session-02'
          ? '02'
          : '01';
      const readyPdfUrl = `/exports/Session_${sNum}_Presentation.pdf`;
      if (!globalPdfCache.has(readyPdfUrl)) {
        fetch(readyPdfUrl)
          .then((res) => {
            const ct = res.headers.get('content-type') || '';
            if (res.ok && !ct.includes('text/html')) {
              return res.arrayBuffer();
            }
            return null;
          })
          .then((buf) => {
            if (buf) {
              const header = new Uint8Array(buf.slice(0, 4));
              if (header[0] === 0x25 && header[1] === 0x50) {
                globalPdfCache.set(readyPdfUrl, buf);
              }
            }
          })
          .catch(() => {});
      }
    }
  }, [isOpen, totalCount, sessionId]);

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
    const count = endIndex - startIndex + 1;

    try {
      const sNum =
        sessionId === 'session-05'
          ? '05'
          : sessionId === 'session-04'
          ? '04'
          : sessionId === 'session-03'
          ? '03'
          : sessionId === 'session-02'
          ? '02'
          : '01';

      const readyPdfUrl = `/exports/Session_${sNum}_Presentation.pdf`;

      // =========================================================================
      // FAST PATH 1: ALL SLIDES or ENTIRE DECK (Instant 0.01s direct browser download)
      // =========================================================================
      if (scope === 'all' || selectedCount === totalCount) {
        const a = document.createElement('a');
        a.href = readyPdfUrl;
        a.download = `Session_${sNum}_Presentation.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setStatus('done');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 1000);
        return;
      }

      // =========================================================================
      // FAST PATH 2: CURRENT SLIDE (Instant 0.3s DOM Capture - No 15MB network lag!)
      // =========================================================================
      if (scope === 'current') {
        const targetId = `slide-${slides[currentSlideIndex]?.id}`;
        const liveSlide =
          document.getElementById(targetId) ||
          (document.querySelector('[data-slide-area="true"] [id^="slide-"]') as HTMLElement | null) ||
          (document.querySelector('[data-slide-area="true"]') as HTMLElement | null);

        if (liveSlide) {
          const html2canvas = (await import('html2canvas')).default;
          const jsPDF = (await import('jspdf')).default;

          const canvas = await html2canvas(liveSlide, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            logging: false,
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          const pdfWidth = 297; // A4 Landscape
          const pdfHeight = (canvas.height / canvas.width) * pdfWidth;

          const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [pdfWidth, pdfHeight],
          });
          pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
          pdf.save(`Session_${sNum}_Slide_${currentSlideNumber}.pdf`);

          setStatus('done');
          setTimeout(() => {
            onClose();
            setStatus('idle');
          }, 1000);
          return;
        }
      }

      // =========================================================================
      // FAST PATH 3: SMALL CUSTOM RANGE (<= 4 slides) -> Quick DOM Capture (0.8s)
      // =========================================================================
      if (count <= 4) {
        const html2canvas = (await import('html2canvas')).default;
        const jsPDF = (await import('jspdf')).default;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let pdf: any = null;

        for (let i = startIndex; i <= endIndex; i++) {
          if (abortRef.current) break;

          const currentSlideObj = slides[i];
          const slideName = currentSlideObj?.mainTitle || `Slide ${i + 1}`;

          setStagingIndex(i);
          setProgress({
            current: i - startIndex + 1,
            total: count,
            slideName,
          });

          // Snappy wait for staging DOM to mount
          await new Promise((resolve) => setTimeout(resolve, 80));

          const stage = document.getElementById('export-staging-container');
          const slideCard = (stage?.querySelector('[id^="slide-"]') || stage) as HTMLElement | null;

          if (!slideCard) continue;

          const canvas = await html2canvas(slideCard, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            logging: false,
            width: slideCard.offsetWidth || 1152,
            height: slideCard.offsetHeight || 680,
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          setLivePreview(imgData);

          const pdfWidth = 297;
          const pdfHeight = (canvas.height / canvas.width) * pdfWidth;

          if (!pdf) {
            pdf = new jsPDF({
              orientation: 'landscape',
              unit: 'mm',
              format: [pdfWidth, pdfHeight],
            });
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
          } else {
            pdf.addPage([pdfWidth, pdfHeight], 'landscape');
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
          }
        }

        if (abortRef.current) {
          setStatus('idle');
          setStagingIndex(null);
          return;
        }

        if (pdf) {
          pdf.save(`Session_${sNum}_Slides_${effectiveFrom}_to_${effectiveTo}.pdf`);
          setStatus('done');
          setTimeout(() => {
            onClose();
            setStatus('idle');
            setStagingIndex(null);
          }, 1200);
          return;
        }
      }

      // =========================================================================
      // PATH 4: LARGE CUSTOM RANGE -> Instant pdf-lib slicing with memory cache
      // =========================================================================
      let fullPdfBytes = globalPdfCache.get(readyPdfUrl);

      if (!fullPdfBytes) {
        setProgress({ 
          current: 1, 
          total: 1, 
          slideName: isRTL ? 'جاري تحضير ملف الشرائح عالي الدقة...' : 'Optimizing high-res presentation deck...' 
        });
        const response = await fetch(readyPdfUrl);
        const contentType = response.headers.get('content-type') || '';
        if (response.ok && !contentType.includes('text/html')) {
          fullPdfBytes = await response.arrayBuffer();
          const header = new Uint8Array(fullPdfBytes.slice(0, 4));
          if (header[0] === 0x25 && header[1] === 0x50) {
            globalPdfCache.set(readyPdfUrl, fullPdfBytes);
          } else {
            fullPdfBytes = undefined;
          }
        }
      }

      if (fullPdfBytes) {
        const { PDFDocument } = await import('pdf-lib');
        const fullPdf = await PDFDocument.load(fullPdfBytes);
        const subPdf = await PDFDocument.create();
        const pageIndices: number[] = [];

        for (let i = startIndex; i <= endIndex; i++) {
          if (i >= 0 && i < fullPdf.getPageCount()) {
            pageIndices.push(i);
          }
        }

        if (pageIndices.length > 0) {
          const copiedPages = await subPdf.copyPages(fullPdf, pageIndices);
          copiedPages.forEach((p) => subPdf.addPage(p));

          const subPdfBytes = await subPdf.save();
          const blob = new Blob([subPdfBytes as unknown as BlobPart], { type: 'application/pdf' });
          const url = URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href = url;
          a.download = `Session_${sNum}_Slides_${effectiveFrom}_to_${effectiveTo}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);

          setStatus('done');
          setTimeout(() => {
            onClose();
            setStatus('idle');
          }, 1200);
          return;
        }
      }

      throw new Error('Could not export slides range');
    } catch (err) {
      console.error('Export error:', err);
      setErrorMsg(isRTL ? 'فشل التصدير. يرجى المحاولة مرة أخرى.' : 'Export failed. Please try again.');
      setStatus('error');
    }
  };

  const isBusy = status === 'exporting';
  const progressPct = progress.total > 0 ? Math.round((progress.current / progress.total) * 100) : 0;

  return (
    <>
      {/* Hidden high-fidelity staging container positioned behind modal backdrop */}
      {stagingIndex !== null && (
        <MotionConfig reducedMotion="always">
          <div
            id="export-staging-container"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '1152px',
              height: '680px',
              zIndex: 40,
              overflow: 'hidden',
              pointerEvents: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SlideViewer
              slide={slides[stagingIndex]}
              language={language}
              sessionId={sessionId}
              courseType={courseType}
              totalSlides={totalCount}
              isFirst={stagingIndex === 0}
              isLast={stagingIndex === totalCount - 1}
              onNext={() => {}}
              onPrev={() => {}}
            />
          </div>
        </MotionConfig>
      )}

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

            {/* Live Progress Bar and Preview During Export */}
            {isBusy && (
              <div className="space-y-4 py-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                    <span>
                      {isRTL ? `جاري معالجة الشريحة ${progress.current} من ${progress.total}...` : `Processing slide ${progress.current} of ${progress.total}...`}
                    </span>
                  </span>
                  <span className="font-mono font-bold text-blue-400">{progressPct}%</span>
                </div>

                {/* Progress track */}
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-200"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>

                <div className="text-[11px] text-slate-400 truncate max-w-full">
                  {progress.slideName}
                </div>

                {/* Live Preview Thumbnail */}
                {livePreview && (
                  <div
                    className="w-full rounded-xl border border-slate-700/80 overflow-hidden flex items-center justify-center bg-black/50"
                    style={{ height: 160 }}
                  >
                    <img src={livePreview} alt="Live export preview" className="w-full h-full object-contain" />
                  </div>
                )}
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
