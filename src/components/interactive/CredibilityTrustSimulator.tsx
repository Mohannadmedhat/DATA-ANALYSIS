import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Lock, 
  CheckCircle, 
  XCircle, 
  CreditCard, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  Zap 
} from 'lucide-react';
import { Language } from '../../types';

interface Props {
  language: Language;
  isDark: boolean;
}

export const CredibilityTrustSimulator: React.FC<Props> = ({ language, isDark }) => {
  const isRTL = language === 'ar';
  const [mode, setMode] = useState<'dark-pattern' | 'trust-first'>('dark-pattern');
  const [revealedPatterns] = useState<boolean>(true);

  // Dark pattern state
  const [hiddenDonation, setHiddenDonation] = useState(true);
  const [autoRenew, setAutoRenew] = useState(true);

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Simulator Mode Bar */}
      <div className={`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      } shadow-sm`}>
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-lg ${
            mode === 'dark-pattern' 
              ? isDark ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-rose-100 text-rose-600 border border-rose-200'
              : isDark ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-600 border border-emerald-200'
          }`}>
            {mode === 'dark-pattern' ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              {isRTL ? 'مختبر كشف الأنماط الخبيثة وبناء الثقة' : 'Trust Signals vs Dark Patterns Simulator'}
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                mode === 'dark-pattern' 
                  ? isDark ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-rose-100 text-rose-700 border border-rose-200'
                  : isDark ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
              }`}>
                {mode === 'dark-pattern' ? (isRTL ? '⚠️ تصميم خبيث (فخاخ)' : '⚠️ Deceptive UX') : (isRTL ? '✅ تصميم موثوق وأمين' : '✅ Transparent UX')}
              </span>
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              {isRTL 
                ? 'قارن بين تجربة الشراء المخادعة والتجربة الشفافة التي تكسب ولاء العميل للأبد'
                : 'Compare deceptive checkout friction against transparent, high-trust checkout design'}
            </p>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('dark-pattern')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              mode === 'dark-pattern'
                ? 'bg-rose-600 text-white shadow-sm'
                : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{isRTL ? 'فخاخ خبيثة (Dark Patterns)' : 'Dark Patterns'}</span>
          </button>

          <button
            onClick={() => setMode('trust-first')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              mode === 'trust-first'
                ? 'bg-emerald-600 text-white shadow-sm'
                : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isRTL ? 'تصميم شفاف وموثوق (Trust-First)' : 'Trust-First'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Demo Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left Side: Mockup Checkout Screen (7 cols) */}
        <div className={`lg:col-span-7 rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-sm relative overflow-hidden ${
          mode === 'dark-pattern'
            ? isDark
              ? 'bg-slate-900/90 border-rose-500/30'
              : 'bg-rose-50/30 border-rose-200'
            : isDark
              ? 'bg-slate-900/90 border-emerald-500/30'
              : 'bg-emerald-50/30 border-emerald-200'
        }`}>
          
          {/* Mock Browser Header */}
          <div className={`flex items-center justify-between pb-3 mb-3 border-b text-xs ${
            mode === 'dark-pattern'
              ? isDark ? 'border-rose-900/40' : 'border-rose-200'
              : isDark ? 'border-emerald-900/40' : 'border-emerald-200'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span className="ms-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                {mode === 'dark-pattern' ? 'https://sneaky-shop.com/checkout' : 'https://trust-store.com/checkout'}
              </span>
            </div>
            {mode === 'trust-first' && (
              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                <Lock className="w-3 h-3" /> 256-bit SSL Secure
              </span>
            )}
          </div>

          {/* Checkout Body */}
          <div className="space-y-3">
            
            {/* Fake Countdown banner (in Dark Pattern) */}
            {mode === 'dark-pattern' && (
              <div className={`p-2.5 rounded-xl border flex items-center justify-between text-xs animate-pulse ${
                isDark 
                  ? 'bg-rose-500/15 border-rose-500/30 text-rose-300' 
                  : 'bg-rose-100/80 border-rose-300 text-rose-800'
              }`}>
                <span className="font-bold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  {isRTL ? '⚠️ الحق! السعر ده هينتهي خلال 01:45 دقيقة فقط!' : '⚠️ Hurry! Cart expires in 01:45!'}
                </span>
                <span className="text-[10px] bg-rose-600 text-white font-bold px-1.5 py-0.5 rounded">
                  {isRTL ? 'ضغط نفسي وهمي' : 'Fake Urgency'}
                </span>
              </div>
            )}

            {/* Product summary */}
            <div className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${
              isDark 
                ? 'bg-slate-800/80 border-slate-700' 
                : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  🎧
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {isRTL ? 'سماعة رأس لاسلكية Pro Studio' : 'Pro Studio Wireless Headphones'}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {isRTL ? 'الكمية: 1 • اللون: أسود مطفي' : 'Qty: 1 • Color: Matte Black'}
                  </p>
                </div>
              </div>
              <span className="text-sm font-extrabold text-slate-900 dark:text-white font-mono">$120.00</span>
            </div>

            {/* Dark Pattern Traps vs Trust Signals */}
            {mode === 'dark-pattern' ? (
              <div className="space-y-2">
                {/* Trap 1: Sneak into basket (Pre-selected insurance/donation) */}
                <div className={`p-2.5 rounded-xl border transition-all ${
                  hiddenDonation 
                    ? isDark ? 'bg-rose-950/20 border-rose-500/40' : 'bg-rose-50 border-rose-300'
                    : isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}>
                  <label className="flex items-center justify-between cursor-pointer text-xs">
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={hiddenDonation} 
                        onChange={(e) => setHiddenDonation(e.target.checked)}
                        className="w-4 h-4 rounded text-rose-600 accent-rose-600 focus:ring-rose-500 cursor-pointer"
                      />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {isRTL ? 'إضافة تأمين شحن إجباري وحماية إضافية (مفعل تلقائياً!)' : 'Add shipping warranty & VIP guarantee (Pre-checked)'}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-rose-600 dark:text-rose-400">+$18.00</span>
                  </label>
                  {revealedPatterns && (
                    <div className="mt-1 text-[10px] text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">
                      <span>🛑 Sneak into Basket:</span>
                      <span>{isRTL ? 'تفعيل خدمات إضافية بمقابل مالي دون طلب صريح من العميل' : 'Pre-checking paid options hoping the user doesn’t notice'}</span>
                    </div>
                  )}
                </div>

                {/* Trap 2: Hidden Recurring Subscription */}
                <div className={`p-2.5 rounded-xl border transition-all ${
                  autoRenew 
                    ? isDark ? 'bg-rose-950/20 border-rose-500/40' : 'bg-rose-50 border-rose-300'
                    : isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}>
                  <label className="flex items-center justify-between cursor-pointer text-xs">
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={autoRenew} 
                        onChange={(e) => setAutoRenew(e.target.checked)}
                        className="w-4 h-4 rounded text-rose-600 accent-rose-600 focus:ring-rose-500 cursor-pointer"
                      />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {isRTL ? 'تفعيل اشتراك VIP الشهري للحصول على الشحن الحالي' : 'Activate VIP monthly membership for today’s order'}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-rose-600 dark:text-rose-400">+$14.99/mo</span>
                  </label>
                  {revealedPatterns && (
                    <div className="mt-1 text-[10px] text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">
                      <span>🛑 Roach Motel:</span>
                      <span>{isRTL ? 'فخ الاشتراك التلقائي المستمر وصعوبة الإلغاء لاحقاً' : 'Tricking users into recurring fees with buried terms'}</span>
                    </div>
                  )}
                </div>

                {/* Trap 3: Hidden unexpected fees appearing at last step */}
                <div className={`p-3 rounded-xl border text-xs space-y-1.5 ${
                  isDark 
                    ? 'bg-slate-800/80 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>{isRTL ? 'سعر المنتج الأساسي' : 'Subtotal'}</span>
                    <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">$120.00</span>
                  </div>
                  <div className="flex justify-between text-rose-600 dark:text-rose-400 font-semibold">
                    <span>{isRTL ? 'رسوم خدمة وتجهيز غير معلنة!' : 'Unexpected Processing Fee'}</span>
                    <span className="font-mono">+$12.50</span>
                  </div>
                  <div className="flex justify-between text-rose-600 dark:text-rose-400 font-semibold">
                    <span>{isRTL ? 'شحن إجباري مبالغ فيه' : 'Mandatory Express Shipping'}</span>
                    <span className="font-mono">+$22.00</span>
                  </div>
                  {hiddenDonation && (
                    <div className="flex justify-between text-rose-600 dark:text-rose-400 font-semibold">
                      <span>{isRTL ? 'تأمين إضافي' : 'Warranty'}</span>
                      <span className="font-mono">+$18.00</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-extrabold text-sm text-slate-900 dark:text-white">
                    <span>{isRTL ? 'المجموع النهائي الصادم:' : 'Shocking Total:'}</span>
                    <span className="text-rose-600 dark:text-rose-400 text-base font-mono">
                      ${120 + 12.5 + 22 + (hiddenDonation ? 18 : 0)}.50
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Trust-First Experience */
              <div className="space-y-2">
                {/* Trust Signal 1: Transparent Guaranteed Breakdown */}
                <div className={`p-3 rounded-xl border text-xs space-y-1.5 ${
                  isDark 
                    ? 'bg-slate-800/80 border-slate-700' 
                    : 'bg-white border-slate-200'
                }`}>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>{isRTL ? 'سعر المنتج' : 'Subtotal'}</span>
                    <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">$120.00</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      {isRTL ? 'شحن مجاني (يوصل غداً 3-5 مساءً)' : 'Free Express Delivery (Arrives tomorrow 3-5 PM)'}
                    </span>
                    <span className="font-mono font-bold">$0.00</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>{isRTL ? 'ضريبة القيمة المضافة (معلنة مسبقاً)' : 'VAT Included (Transparent)'}</span>
                    <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">$0.00</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-extrabold text-sm text-slate-900 dark:text-white">
                    <span>{isRTL ? 'المجموع النهائي المؤكد:' : 'Guaranteed Final Total:'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-base font-mono font-black">$120.00</span>
                  </div>
                </div>

                {/* Trust Badges & Policies */}
                <div className="grid grid-cols-2 gap-2">
                  <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                    isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'
                  }`}>
                    <RotateCcw className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <div>
                      <h6 className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                        {isRTL ? 'إرجاع مجاني 14 يوم' : '14-Day Free Returns'}
                      </h6>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">{isRTL ? 'بدون أي أسئلة أو تعقيد' : 'No questions asked'}</p>
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                    isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'
                  }`}>
                    <CreditCard className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div>
                      <h6 className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                        {isRTL ? 'وسائل دفع معتمدة' : 'Verified Gateways'}
                      </h6>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Visa • MC • ApplePay • Fawry</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Button */}
            <button className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white transition-all shadow-sm cursor-pointer ${
              mode === 'dark-pattern'
                ? 'bg-rose-600 hover:bg-rose-700'
                : 'bg-emerald-600 hover:bg-emerald-700'
            }`}>
              {mode === 'dark-pattern' 
                ? (isRTL ? 'إتمام الشراء الإجباري الآن' : 'Complete Order') 
                : (isRTL ? '🔒 تأكيد الطلب بأمان تام ($120.00)' : '🔒 Place Secure Order ($120.00)')}
            </button>
          </div>
        </div>

        {/* Right Side: Educational Matrix & Psychological Impact (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          
          {/* Analysis Card */}
          <div className={`p-4 rounded-2xl border flex-1 flex flex-col justify-between ${
            mode === 'dark-pattern'
              ? isDark ? 'bg-slate-900 border-rose-900/50' : 'bg-rose-50/50 border-rose-200'
              : isDark ? 'bg-slate-900 border-emerald-900/50' : 'bg-emerald-50/50 border-emerald-200'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${
                  mode === 'dark-pattern'
                    ? isDark ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-rose-100 text-rose-800 border border-rose-200'
                    : isDark ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                }`}>
                  {mode === 'dark-pattern' ? (isRTL ? 'تحليل الأثر: دمار للسمعة' : 'Impact: Churn & Distrust') : (isRTL ? 'تحليل الأثر: ولاء وثقة دائمة' : 'Impact: High LTV & Loyalty')}
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
                  {mode === 'dark-pattern' ? 'Score: 1.2 / 5 ⚠️' : 'Score: 4.9 / 5 ⭐'}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2.5">
                {mode === 'dark-pattern' 
                  ? (isRTL ? 'ليه الـ Dark Patterns بتدمر الشركة؟' : 'Why Dark Patterns Destroy Businesses?') 
                  : (isRTL ? 'ليه الـ Transparency بتكسب على المدى البعيد؟' : 'Why Transparency Multiplies Lifetime Value?')}
              </h4>

              <div className="space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {mode === 'dark-pattern' ? (
                  <>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                      <span>{isRTL ? 'العميل بيحس إنه انضحك عليه ومش هيرجع يشتري تاني أبداً (High Churn).' : 'Customer feels deceived, ensuring zero repeat purchases.'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                      <span>{isRTL ? 'زيادة طلبات استرداد الأموال ونزاعات البنوك (Chargebacks).' : 'Surge in bank chargebacks, payment disputes and customer support costs.'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                      <span>{isRTL ? 'تقييمات سلبية علنية على السوشيال ميديا بتدمر سمعة البراند.' : 'Public review backlash destroying brand authority.'}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{isRTL ? 'راحة نفسية كاملة للعميل بتخليه يرشح التطبيق لأصحابه (Word of Mouth).' : 'Frictionless peace of mind generating organic referrals.'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{isRTL ? 'انعدام المفاجآت بيقلل التردد ويزيد نسبة إتمام الشراء (Conversion Rate).' : 'Zero surprise checkout increases successful conversion by up to 35%.'}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{isRTL ? 'بناء قيمة حقيقية للعميل مدى الحياة (High Customer Lifetime Value).' : 'Strong long-term customer equity and retention.'}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Quick Takeaway Box */}
            <div className={`mt-3 p-2.5 rounded-xl border text-[11px] font-medium leading-normal ${
              isDark ? 'bg-slate-800/90 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
            }`}>
              <div className="flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isRTL ? 'قاعدة المصمم المحترف:' : 'Designer Golden Rule:'}</span>
              </div>
              <p>
                {isRTL 
                  ? 'المصداقية ليست مجرد شارة أمان، بل هي احترام عقلية ووقت ومال المستخدم في كل بكسل.'
                  : 'Credibility is not just a badge; it is respecting the user’s mind, time, and money in every pixel.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

