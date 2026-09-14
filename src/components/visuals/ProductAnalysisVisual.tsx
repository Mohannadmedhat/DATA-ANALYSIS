import React, { useState } from 'react';
import { 
  Car, 
  ShoppingBag, 
  Music, 
  CheckCircle2, 
  Layers, 
  Palette, 
  Gem,
  Star,
  Sparkles
} from 'lucide-react';
import { Language } from '../../types';

interface ProductAnalysisVisualProps {
  language: Language;
  isDark?: boolean;
}

export const ProductAnalysisVisual: React.FC<ProductAnalysisVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';

  const products = [
    {
      id: 'uber',
      name: isRTL ? 'Uber (أوبر)' : 'Uber',
      category: isRTL ? 'خدمات النقل والمواصلات التشاركية' : 'Ride-Hailing & Mobility',
      icon: Car,
      color: 'from-slate-900 to-black',
      tag: 'Transportation',
      uiAnalysis: [
        isRTL ? 'الخريطة التفاعلية تحتل 80% من الشاشة لتقليل التشتت البصري' : 'Live map occupies 80% of screen to minimize visual clutter',
        isRTL ? 'تباين لوني عالي (أبيض وأسود) يعزز الوضوح تحت أشعة الشمس' : 'High contrast monochrome palette ideal for sunlight visibility',
        isRTL ? 'بطاقات سفلية منبثقة (Bottom Sheets) تظهر تفاصيل السائق بوضوح' : 'Bottom sheets structure driver & vehicle info seamlessly',
        isRTL ? 'أيقونات سيارات ثلاثية الأبعاد تدل على فئة الرحلة وحجمها' : '3D vehicle badges communicate ride tier at a glance'
      ],
      uxAnalysis: [
        isRTL ? 'التسعير المسبق (Upfront Pricing) يزيل قلق التكلفة والجدال' : 'Upfront pricing eliminates driver fare haggling and anxiety',
        isRTL ? 'الدفع الخفي غير الملموس (Invisible Payment) بمجرد النزول' : 'Invisible zero-touch card billing upon car exit',
        isRTL ? 'حساب الوقت المقدر للوصول (ETA) بدقة يمنح شعوراً بالتحكم' : 'Accurate ETA tracker grants users psychological control',
        isRTL ? 'إمكانية مشاركة الرحلة لضمان الأمان وراحة البال' : '1-tap live trip sharing with loved ones for safety'
      ],
      factorsScore: [
        { factor: 'Useful', score: '5/5', note: isRTL ? 'يحل أزمة المواصلات' : 'Solves mobility' },
        { factor: 'Usable', score: '4.8/5', note: isRTL ? 'طلب بلمستين' : '2-tap booking' },
        { factor: 'Credible', score: '4.9/5', note: isRTL ? 'تقييمات وأمان' : 'Ratings & SOS' },
        { factor: 'Valuable', score: '5/5', note: isRTL ? 'مليارات سنوية' : 'Multi-billion ROI' }
      ]
    },
    {
      id: 'amazon',
      name: isRTL ? 'Amazon (أمازون)' : 'Amazon',
      category: isRTL ? 'التجارة الإلكترونية والتسوق العالمي' : 'E-Commerce & Retail',
      icon: ShoppingBag,
      color: 'from-amber-600 to-orange-700',
      tag: 'E-Commerce',
      uiAnalysis: [
        isRTL ? 'واجهة كثيفة بالمعلومات مع شريط بحث مركزي فائق الأهمية' : 'High-density UI with prominent omnipresent search bar',
        isRTL ? 'أزرار الشراء الفوري (Buy Now) باللون البرتقالي المميز' : 'Distinctive high-urgency orange "1-Click Buy" CTA',
        isRTL ? 'معرض صور مصغر وتقييمات بالنجوم بجانب كل منتج' : 'Product thumbnails paired with instant star ratings',
        isRTL ? 'شريط تصفح سفلي يسهل الوصول للحساب والسلة' : 'Ergonomic bottom navigation for rapid access'
      ],
      uxAnalysis: [
        isRTL ? 'الشراء بنقرة واحدة (1-Click Ordering) يقلص خطوات الدفع' : 'Patented 1-Click checkout cuts friction exponentially',
        isRTL ? 'نظام المراجعات والأسئلة الحقيقية يبني مصداقية لا تضاهى' : 'User reviews & verified Q&A establish profound credibility',
        isRTL ? 'خوارزمية اقتراحات مخصصة تعتمد على سلوك الشراء السابق' : 'Personalized recommendation engine drives repeat basket size',
        isRTL ? 'تتبع الشحنات بالدقيقة والإرجاع السلس للسلع' : 'Real-time parcel delivery timeline and hassle-free returns'
      ],
      factorsScore: [
        { factor: 'Useful', score: '5/5', note: isRTL ? 'كل ما تحتاجه' : 'Endless catalog' },
        { factor: 'Findable', score: '4.9/5', note: isRTL ? 'فلاتر دقيقة' : 'Faceted search' },
        { factor: 'Credible', score: '4.7/5', note: isRTL ? 'ضمان أمازون' : 'A-to-Z Guarantee' },
        { factor: 'Valuable', score: '5/5', note: isRTL ? 'قيمة عالمية' : 'Trillion $ value' }
      ]
    },
    {
      id: 'spotify',
      name: isRTL ? 'Spotify (سبوتيفاي)' : 'Spotify',
      category: isRTL ? 'بث الموسيقى والبودكاست الرقمي' : 'Audio Streaming & Entertainment',
      icon: Music,
      color: 'from-emerald-600 to-green-800',
      tag: 'Streaming',
      uiAnalysis: [
        isRTL ? 'ثيم داكن أنيق (Dark Mode) يبرز أغلفة الألبومات والبوسترات' : 'Sleek dark theme highlighting vibrant album artwork',
        isRTL ? 'مشغل مصغر عائم (Mini Player) متاح باستمرار أثناء التصفح' : 'Persistent mini-player docked at bottom during navigation',
        isRTL ? 'تدرجات لونية ديناميكية مستخرجة من ألوان غلاف الأغنية' : 'Dynamic palette generated automatically from album art',
        isRTL ? 'طباعة واضحة مع أيقونات تبديل وتكرار بديهية' : 'Bold typography and globally recognizable playback controls'
      ],
      uxAnalysis: [
        isRTL ? 'قوائم تشغيل ذكية مخصصة أسبوعياً (Discover Weekly)' : 'AI curated playlists (Discover Weekly, Daily Mixes)',
        isRTL ? 'ميزة Spotify Connect للتحكم بالصوت عبر أي جهاز منزلي' : 'Spotify Connect switches audio across phone/PC seamlessly',
        isRTL ? 'مشاركة الأغاني والكلمات المتزامنة فوراً على السوشيال ميديا' : 'Real-time synchronized lyrics & Instagram story sharing',
        isRTL ? 'استماع فوري بدون انقطاع مع انتقال ناعم بين المقاطع' : 'Gapless playback and intelligent crossfade audio blending'
      ],
      factorsScore: [
        { factor: 'Desirable', score: '5/5', note: isRTL ? 'حب للمنتج' : 'Emotional bond' },
        { factor: 'Usable', score: '4.9/5', note: isRTL ? 'تشغيل فوري' : 'Zero lag' },
        { factor: 'Useful', score: '4.8/5', note: isRTL ? 'ملايين التراكات' : 'Audio universe' },
        { factor: 'Valuable', score: '4.9/5', note: isRTL ? 'اشتراك رابح' : 'Sticky subs' }
      ]
    }
  ];

  const [selectedProdId, setSelectedProdId] = useState<string>('uber');
  const activeProduct = products.find(p => p.id === selectedProdId) || products[0];

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* Product Selector Bar */}
      <div className="flex items-center justify-center gap-3">
        {products.map((prod) => {
          const Icon = prod.icon;
          const isSelected = prod.id === selectedProdId;
          return (
            <button
              key={prod.id}
              onClick={() => setSelectedProdId(prod.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl border font-extrabold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20 scale-105'
                  : isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
                    : 'bg-slate-50 border-slate-200 text-slate-950 hover:border-slate-300 shadow-sm'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{prod.name}</span>
            </button>
          );
        })}
      </div>

      {/* Breakdown Grid: UI vs UX vs 7 Factors Score */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
        {/* UI Breakdown */}
        <div className={`md:col-span-4 p-4 rounded-xl border flex flex-col justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-slate-50/90 border-slate-200 text-slate-950 shadow-sm'
        }`}>
          <div>
            <div className={`flex items-center gap-2 mb-2.5 pb-2 border-b ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <Palette className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h4 className={`text-xs sm:text-sm font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {isRTL ? 'تحليل الواجهة (UI Breakdown)' : 'Visual UI Breakdown'}
              </h4>
            </div>
            <ul className="space-y-2">
              {activeProduct.uiAnalysis.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-2 text-xs font-medium leading-snug ${
                  isDark ? 'text-slate-200' : 'text-slate-900'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`pt-2 mt-2.5 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase">Aesthetic & Hierarchy</span>
          </div>
        </div>

        {/* UX Breakdown */}
        <div className={`md:col-span-4 p-4 rounded-xl border flex flex-col justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-slate-50/90 border-slate-200 text-slate-950 shadow-sm'
        }`}>
          <div>
            <div className={`flex items-center gap-2 mb-2.5 pb-2 border-b ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h4 className={`text-xs sm:text-sm font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {isRTL ? 'تحليل التجربة (UX Breakdown)' : 'User Experience (UX)'}
              </h4>
            </div>
            <ul className="space-y-2">
              {activeProduct.uxAnalysis.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-2 text-xs font-medium leading-snug ${
                  isDark ? 'text-slate-200' : 'text-slate-900'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`pt-2 mt-2.5 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold uppercase">Frictionless & Psychology</span>
          </div>
        </div>

        {/* 7 Factors Rating Score */}
        <div className={`md:col-span-4 p-4 rounded-xl border flex flex-col justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-slate-50/90 border-slate-200 text-slate-950 shadow-sm'
        }`}>
          <div>
            <div className={`flex items-center gap-2 mb-2.5 pb-2 border-b ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <Gem className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h4 className={`text-xs sm:text-sm font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                {isRTL ? 'تقييم الـ 7 UX Factors' : '7 UX Factors Matrix'}
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {activeProduct.factorsScore.map((f, fIdx) => (
                <div key={fIdx} className={`p-2.5 rounded-lg border ${
                  isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}>{f.factor}</span>
                    <span className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400">{f.score}</span>
                  </div>
                  <span className={`text-[10px] font-medium truncate block mt-0.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>{f.note}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`pt-2 mt-2.5 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold uppercase">Industry Benchmark</span>
          </div>
        </div>
      </div>
    </div>
  );
};
