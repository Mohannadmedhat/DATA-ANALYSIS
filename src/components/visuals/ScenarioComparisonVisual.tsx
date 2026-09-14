import React, { useState } from 'react';
import { 
  CreditCard, 
  AlertTriangle, 
  XCircle, 
  CheckCircle2, 
  Palette, 
  Layers,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Eye,
  Info
} from 'lucide-react';
import { Language } from '../../types';

interface ScenarioComparisonVisualProps {
  language: Language;
  isDark?: boolean;
}

export const ScenarioComparisonVisual: React.FC<ScenarioComparisonVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';
  const [activeTab, setActiveTab] = useState<'cards' | 'live-mockups'>('live-mockups');
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  // Live state for Mockup B (Good UI/UX)
  const [guestEmail, setGuestEmail] = useState('user@example.com');
  const [isPaid, setIsPaid] = useState(false);

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Top Mode Bar */}
      <div className="flex items-center justify-between gap-3 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              {isRTL ? 'سيناريو شاشة الدفع: تشريح عملي للأخطاء وحلولها' : 'Checkout Flow: UI vs UX Live Inspection'}
            </h4>
          </div>
        </div>

        <div className={`flex items-center gap-1 p-1 rounded-xl border text-xs ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            onClick={() => setActiveTab('live-mockups')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'live-mockups'
                ? 'bg-blue-600 text-white shadow-md'
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRTL ? 'شاشات مقارنة تفاعلية 📱' : 'Interactive Mockups 📱'}</span>
          </button>
          <button
            onClick={() => setActiveTab('cards')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'cards'
                ? (isDark ? 'bg-slate-800 text-blue-400' : 'bg-white text-blue-700 shadow-sm')
                : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isRTL ? 'جدول التحليل' : 'Analysis Grid'}</span>
          </button>
        </div>
      </div>

      {activeTab === 'live-mockups' ? (
        /* LIVE INTERACTIVE CSS PHONE MOCKUPS */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          
          {/* PHONE A: Bad UI & Bad UX */}
          <div className={`rounded-2xl border p-4 flex flex-col justify-between relative overflow-hidden ${
            isDark ? 'bg-slate-900/90 border-rose-950/80 shadow-rose-950/20' : 'bg-white border-rose-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-rose-200 dark:border-rose-900/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 font-mono">
                  {isRTL ? 'تصميم [A]: واجهة وتجربة فاشلة (Bad UI & UX)' : 'Design [A]: Failing UI & UX'}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 border border-rose-500/20">
                Cart Abandon: 78%
              </span>
            </div>

            {/* Mockup Frame A */}
            <div className="bg-slate-950 text-slate-100 rounded-xl p-3.5 border border-slate-800 space-y-2.5 font-sans text-xs select-none">
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-800 text-slate-400">
                <span>9:41</span>
                <span>Checkout (Step 6 of 8)</span>
                <span>📶 100%</span>
              </div>

              <div className="p-2 rounded bg-rose-950/60 border border-rose-800 text-rose-200 text-[11px] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Error: All form fields were cleared. Please re-enter 16-digits!</span>
              </div>

              {/* Cluttered form */}
              <div className="space-y-1.5">
                <div>
                  <label className="text-[9px] text-slate-500 block uppercase font-mono">FIRST & LAST NAME * (REQUIRED)</label>
                  <input disabled value="John Doe" className="w-full bg-slate-900 border border-slate-700 text-slate-400 px-2 py-1 rounded text-[10px]" />
                </div>

                <div>
                  <label className="text-[9px] text-rose-400 block uppercase font-mono">CREDIT CARD NUMBER * (WIPED)</label>
                  <input disabled placeholder="•••• •••• •••• ••••" className="w-full bg-slate-900 border border-rose-500 text-rose-300 px-2 py-1 rounded text-[10px]" />
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  <div>
                    <label className="text-[9px] text-slate-500 block uppercase font-mono">EXPIRY DATE (MM/YY)</label>
                    <input disabled placeholder="12/28" className="w-full bg-slate-900 border border-slate-700 text-slate-400 px-2 py-1 rounded text-[10px]" />
                  </div>
                  <div>
                    <label className="text-[9px] text-slate-500 block uppercase font-mono">CVV SECRET</label>
                    <input disabled placeholder="•••" className="w-full bg-slate-900 border border-slate-700 text-slate-400 px-2 py-1 rounded text-[10px]" />
                  </div>
                </div>

                <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[10px] space-y-1">
                  <div className="flex justify-between text-slate-400"><span>Subtotal:</span><span>$20.00</span></div>
                  <div className="flex justify-between text-rose-400 font-bold"><span>Hidden Shipping Fee:</span><span>+$18.00 ⚠️</span></div>
                  <div className="flex justify-between text-white font-bold border-t border-slate-800 pt-1"><span>Total:</span><span>$38.00</span></div>
                </div>

                {/* Bad CTA button */}
                <button disabled className="w-full py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-400 font-semibold rounded text-[11px] cursor-not-allowed">
                  SUBMIT TRANSACTION
                </button>
              </div>
            </div>

            {/* Hotspot callouts below phone A */}
            <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] space-y-1 text-rose-600 dark:text-rose-400">
              <p>❌ <strong>UX:</strong> {isRTL ? 'إجبار على إنشاء حساب + رسوم شحن مخفية تفاجئ العميل عند النهاية.' : 'Forced account registration + hidden shipping fees revealed at final step.'}</p>
              <p>❌ <strong>UI:</strong> {isRTL ? 'زر دفع رمادي باهت بدون تباين + حقول ملتصقة بخط 10px غير مقروء.' : 'Washed-out low-contrast gray CTA + cramped form fields with unreadable 10px font.'}</p>
            </div>
          </div>

          {/* PHONE B: Great UI & Great UX */}
          <div className={`rounded-2xl border p-4 flex flex-col justify-between relative overflow-hidden ${
            isDark ? 'bg-slate-900/90 border-emerald-950/80 shadow-emerald-950/20' : 'bg-white border-emerald-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-emerald-200 dark:border-emerald-900/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  {isRTL ? 'تصميم [B]: واجهة وتجربة مثالية (Apple Standard)' : 'Design [B]: Frictionless UX & Clean UI'}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                Conversion: 94% 🚀
              </span>
            </div>

            {/* Mockup Frame B */}
            <div className="bg-slate-950 text-slate-100 rounded-xl p-3.5 border border-slate-800 space-y-2.5 font-sans text-xs">
              <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-800 text-slate-400">
                <span>9:41</span>
                <span className="font-bold text-white">Express Checkout</span>
                <span>📶 100%</span>
              </div>

              {/* Guest Checkout Banner */}
              <div className="flex items-center justify-between p-2 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-200 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Guest Checkout Enabled</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">1-Step</span>
              </div>

              {/* Clean Transparent Summary */}
              <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-800 text-[11px] space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>Cart Items (2):</span>
                  <span>$20.00</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Free Express Shipping:</span>
                  <span>$0.00 (Free)</span>
                </div>
                <div className="flex justify-between text-white font-extrabold border-t border-slate-800 pt-1 text-xs">
                  <span>Total Amount:</span>
                  <span className="text-blue-400">$20.00</span>
                </div>
              </div>

              {/* Interactive 1-Click Buy button */}
              {isPaid ? (
                <div className="p-3 rounded-lg bg-emerald-600 text-white text-center font-bold text-xs flex items-center justify-center gap-1.5 animate-in zoom-in-95">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isRTL ? 'تم الدفع بنجاح! شكراً لك 🎉' : 'Payment Successful! Order #8942'}</span>
                </div>
              ) : (
                <button
                  onClick={() => setIsPaid(true)}
                  className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold rounded-lg text-xs shadow-lg shadow-emerald-600/30 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isRTL ? 'اضغط للتجربة: شراء بنقرة واحدة (1-Click Buy)' : 'Try Live: 1-Click Apple Pay ($20.00)'}</span>
                </button>
              )}

              {isPaid && (
                <button 
                  onClick={() => setIsPaid(false)}
                  className="w-full text-[10px] text-slate-400 hover:text-white underline text-center"
                >
                  {isRTL ? 'إعادة تعيين التجربة' : 'Reset interactive demo'}
                </button>
              )}
            </div>

            {/* Hotspot callouts below phone B */}
            <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] space-y-1 text-emerald-600 dark:text-emerald-400">
              <p>✅ <strong>UX:</strong> {isRTL ? 'دفع كزائر بدون تسجيل إجباري + شفافية تامة في الأسعار + حفظ فوري للبيانات.' : 'Frictionless guest checkout + upfront pricing transparency + auto-saved details.'}</p>
              <p>✅ <strong>UI:</strong> {isRTL ? 'زر شراء أخضر بارز عالي التباين + هرمية معلومات مريحة ترشد العين.' : 'Prominent high-contrast emerald CTA + structured visual hierarchy guiding the eye.'}</p>
            </div>
          </div>

        </div>
      ) : (
        /* ANALYSIS CARDS VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900 border-rose-950' : 'bg-white border-rose-100'}`}>
            <h4 className="text-xs font-bold text-rose-600 mb-2">{isRTL ? 'عيوب الـ UI (البصرية):' : 'Visual UI Pitfalls:'}</h4>
            <ul className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
              <li>• {isRTL ? 'تباين لوني ضعيف جداً لزر الإجراء الرئيسي.' : 'Failing contrast ratio on primary CTA button.'}</li>
              <li>• {isRTL ? 'خطوط صغيرة 10px تسبب إجهاداً للعين وتفشل في معايير WCAG.' : '10px unreadable micro-typography violating WCAG.'}</li>
              <li>• {isRTL ? 'تكدس الحقول وغياب شبكة المسافات القياسية 8pt Grid.' : 'Severe form clutter lacking standard 8pt grid rhythm.'}</li>
            </ul>
          </div>
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900 border-amber-950' : 'bg-white border-amber-100'}`}>
            <h4 className="text-xs font-bold text-amber-600 mb-2">{isRTL ? 'عيوب الـ UX (الهيكلية):' : 'Structural UX Pitfalls:'}</h4>
            <ul className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
              <li>• {isRTL ? 'إجبار المستخدم على التسجيل الطويل يرفع نسبة هجر السلة 24%.' : 'Mandatory registration driving 24% immediate checkout abandonment.'}</li>
              <li>• {isRTL ? 'مفاجأة العميل برسوم شحن غير معلنة في آخر خطوة يدمر الثقة.' : 'Hidden shipping surcharges sprung at final step destroying brand trust.'}</li>
              <li>• {isRTL ? 'مسح بيانات البطاقة عند حدوث خطأ بسيط يسبب إحباطاً شديداً.' : 'Form wiping credit card data on minor error causing severe rage.'}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
