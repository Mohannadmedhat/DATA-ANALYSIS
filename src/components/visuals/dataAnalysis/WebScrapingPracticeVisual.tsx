import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  TrendingUp, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Globe, 
  Clock, 
  Database,
  Search,
  ExternalLink,
  Code2
} from 'lucide-react';

interface WebScrapingPracticeVisualProps {
  isRTL: boolean;
  isDark?: boolean;
}

export const WebScrapingPracticeVisual: React.FC<WebScrapingPracticeVisualProps> = ({ isRTL, isDark = false }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'price-tracker' | 'automation'>('overview');

  const cardBgStyle = isDark
    ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl backdrop-blur-xl hover:border-slate-700'
    : 'bg-white border-slate-200/90 text-slate-900 shadow-md hover:shadow-xl hover:border-blue-300';

  // Interactive Price Tracker Simulator State
  const [isScraping, setIsScraping] = useState<boolean>(false);
  const [scrapedPrices, setScrapedPrices] = useState([
    { site: 'Amazon', price: 1249, inStock: true, status: 'Extracted' },
    { site: 'Noon', price: 1199, inStock: true, status: 'Extracted' },
    { site: 'Jumia', price: 1290, inStock: false, status: 'Out of Stock' }
  ]);

  const handleSimulateScrape = () => {
    setIsScraping(true);
    setTimeout(() => {
      setScrapedPrices([
        { site: 'Amazon', price: 1220, inStock: true, status: 'Updated (-$29)' },
        { site: 'Noon', price: 1185, inStock: true, status: 'Updated (-$14 Best Deal!)' },
        { site: 'Jumia', price: 1290, inStock: true, status: 'Back in Stock!' }
      ]);
      setIsScraping(false);
    }, 900);
  };

  const tabs = [
    { id: 'overview', labelAr: 'المحاور الثلاثة (PDF View)', labelEn: 'Core Pillars (PDF View)' },
    { id: 'price-tracker', labelAr: 'تتبع أسعار المنافسين (Live Scraper)', labelEn: 'Price Tracker Lab' },
    { id: 'automation', labelAr: 'جدولة الأتمتة (Automation Cron)', labelEn: 'Scheduled Automation' },
  ] as const;

  return (
    <div className={`flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      {/* Top Filter Tabs Bar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {isRTL ? 'تطبيقات سحب البيانات في بيئة العمل الواقعية:' : 'Web Scraping Real-World Scenarios:'}
          </span>
        </div>

        {/* Segmented Control */}
        <div className={`flex items-center gap-1.5 p-1 rounded-xl shadow-inner border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? (isDark ? 'text-blue-400 font-black shadow-sm' : 'text-blue-700 font-black shadow-sm')
                    : (isDark ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold')
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeWebScrapingPill"
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className={`absolute inset-0 rounded-lg border shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200/90'}`}
                  />
                )}
                <span className="relative z-10">
                  {isRTL ? tab.labelAr : tab.labelEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-stretch my-auto">
        <AnimatePresence mode="wait">
          {/* VIEW 1: THREE PILLARS */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 w-full h-full items-stretch"
            >
              {/* Card 1: Collecting Product Prices */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className={`flex flex-col justify-between p-5 rounded-2xl border backdrop-blur-xl transition-all text-start ${cardBgStyle}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-sm border ${
                      isDark ? 'bg-blue-950/60 border-blue-800 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                    }`}>
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                      isDark ? 'bg-blue-950/60 text-blue-300 border-blue-800' : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}>
                      E-Commerce
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {isRTL ? 'التجارة الإلكترونية' : 'Competitive Intel'}
                  </span>
                  <h3 className={`text-lg font-black mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                    {isRTL ? 'جمع أسعار المنتجات (Collecting Product Prices)' : 'Collecting Product Prices'}
                  </h3>

                  <p className={`text-xs sm:text-[13px] leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {isRTL 
                      ? 'تتبع ومقارنة أسعار المنافسين في مواقع التجارة الإلكترونية لحظياً لتعديل خطط التسعير.'
                      : 'Track competitor pricing across e-commerce sites.'}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-[11px] font-semibold flex items-center justify-between ${
                  isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <span>{isRTL ? 'تسعير ديناميكي ذكي' : 'Dynamic Pricing'}</span>
                  <button
                    onClick={() => setActiveTab('price-tracker')}
                    className={`font-bold hover:underline cursor-pointer ${isDark ? 'text-blue-300' : 'text-blue-600'}`}
                  >
                    {isRTL ? 'جرب المحاكي' : 'Try Scraper'}
                  </button>
                </div>
              </motion.div>

              {/* Card 2: Market Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className={`flex flex-col justify-between p-5 rounded-2xl border backdrop-blur-xl transition-all text-start ${cardBgStyle}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-sm border ${
                      isDark ? 'bg-indigo-950/60 border-indigo-800 text-indigo-400' : 'bg-indigo-50 border-indigo-200 text-indigo-600'
                    }`}>
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                      isDark ? 'bg-indigo-950/60 text-indigo-300 border-indigo-800' : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    }`}>
                      Public Data
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    {isRTL ? 'اتجاهات السوق' : 'Market Research'}
                  </span>
                  <h3 className={`text-lg font-black mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                    {isRTL ? 'تحليل السوق (Market Analysis)' : 'Market Analysis'}
                  </h3>

                  <p className={`text-xs sm:text-[13px] leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {isRTL 
                      ? 'تجميع البيانات المتاحة على الويب لدراسة اتجاهات السوق، رغبات المستهلكين، وتحليل الفجوات.'
                      : 'Aggregate public data to study market trends.'}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-[11px] font-semibold flex items-center gap-1.5 ${
                  isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <ExternalLink className={`w-3.5 h-3.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  <span>{isRTL ? 'أبحاث السوق الميدانية' : 'Trend Aggregation'}</span>
                </div>
              </motion.div>

              {/* Card 3: Data Collection Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className={`flex flex-col justify-between p-5 rounded-2xl border backdrop-blur-xl transition-all text-start ${cardBgStyle}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black shadow-sm border ${
                      isDark ? 'bg-cyan-950/60 border-cyan-800 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-600'
                    }`}>
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                      isDark ? 'bg-cyan-950/60 text-cyan-300 border-cyan-800' : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                    }`}>
                      Cron Job
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    {isRTL ? 'أتمتة الجداول' : 'Scheduled Scripts'}
                  </span>
                  <h3 className={`text-lg font-black mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                    {isRTL ? 'أتمتة جمع البيانات (Data Collection Automation)' : 'Data Collection Automation'}
                  </h3>

                  <p className={`text-xs sm:text-[13px] leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {isRTL 
                      ? 'جدولة اسكريبتات بايثون لجمع البيانات الجديدة تلقائياً وبشكل دوري بدون أي تدخل بشري.'
                      : 'Schedule scripts to gather fresh data on a routine.'}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-[11px] font-semibold flex items-center justify-between ${
                  isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <span>{isRTL ? 'سيرفرات تلقائية' : 'Cron Pipelines'}</span>
                  <button
                    onClick={() => setActiveTab('automation')}
                    className={`font-bold hover:underline cursor-pointer ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}
                  >
                    {isRTL ? 'عرض الجدولة' : 'View Schedule'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* VIEW 2: LIVE COMPETITOR PRICE TRACKER SIMULATOR */}
          {activeTab === 'price-tracker' && (
            <motion.div
              key="price-tracker"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col justify-between w-full h-full p-5 sm:p-6 rounded-2xl border flex-1 text-start ${
                isDark ? 'border-slate-800 bg-slate-900/90 text-slate-100 shadow-xl backdrop-blur-xl' : 'border-slate-200/90 bg-white text-slate-900 shadow-md'
              }`}
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold border ${
                      isDark ? 'bg-blue-950/60 border-blue-800 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                    }`}>
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-base ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                        {isRTL ? 'محاكي سحب أسعار المنتجات (Competitor Price Scraper)' : 'Competitor Price Tracker: Live Web Extraction'}
                      </h3>
                      <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Target Item: "Sony WH-1000XM5 Wireless Headphones"</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateScrape}
                    disabled={isScraping}
                    className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer transition-all shrink-0"
                  >
                    <Play className="w-3.5 h-3.5" />
                    {isScraping ? (isRTL ? 'جاري السحب...' : 'Scraping Sites...') : (isRTL ? 'تحديث الأسعار الآن' : 'Run Price Scraper')}
                  </button>
                </div>

                {/* Scraped Results Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  {scrapedPrices.map((item, idx) => (
                    <div 
                      key={idx}
                      className={`p-3.5 rounded-xl border flex flex-col justify-between ${
                        isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-black text-sm ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{item.site}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.inStock 
                            ? (isDark ? 'bg-emerald-950 border border-emerald-800 text-emerald-300' : 'bg-emerald-100 border border-emerald-300 text-emerald-800') 
                            : (isDark ? 'bg-rose-950 border border-rose-800 text-rose-300' : 'bg-rose-100 border border-rose-300 text-rose-800')
                        }`}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      <div className={`text-2xl font-black font-mono mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        ${item.price}
                      </div>
                      <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        Status: {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Scraping Log */}
              <div className={`p-3 rounded-xl font-mono text-xs flex items-center justify-between border ${
                isDark ? 'bg-slate-950 text-slate-300 border-slate-800' : 'bg-slate-900 text-slate-100 border-slate-800'
              }`}>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>BeautifulSoup parsed 3 product cards in 0.42s (HTML tags: &lt;span class="a-price"&gt;)</span>
                </div>
                <span className="text-slate-400 text-[10px] font-bold">200 OK</span>
              </div>
            </motion.div>
          )}

          {/* VIEW 3: SCHEDULED AUTOMATION CRON */}
          {activeTab === 'automation' && (
            <motion.div
              key="automation"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col justify-between w-full h-full p-5 sm:p-6 rounded-2xl border flex-1 text-start ${
                isDark ? 'border-slate-800 bg-slate-900/90 text-slate-100 shadow-xl backdrop-blur-xl' : 'border-slate-200/90 bg-white text-slate-900 shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <h3 className={`font-bold text-base ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                      {isRTL ? 'جدولة سحب البيانات التلقائي (Scheduled Cron Script)' : 'Automated Python Scraping Daemon (Every Midnight)'}
                    </h3>
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${
                    isDark ? 'text-cyan-300 bg-cyan-950/60 border-cyan-800' : 'text-cyan-700 bg-cyan-50 border-cyan-200'
                  }`}>
                    Cron: 0 0 * * *
                  </span>
                </div>

                {/* Automation Script Code Display */}
                <div className={`p-4 rounded-xl font-mono text-xs space-y-1 border shadow-inner mb-3 ${
                  isDark ? 'bg-slate-950 text-slate-200 border-slate-800' : 'bg-slate-900 text-slate-100 border-slate-800'
                }`}>
                  <p className="text-purple-400">import <span className="text-white">schedule, time, requests</span></p>
                  <p className="text-purple-400">from <span className="text-white">bs4</span> import <span className="text-white">BeautifulSoup</span></p>
                  <p className="text-slate-400 mt-1"># Automated routine job</p>
                  <p><span className="text-blue-400">def</span> <span className="text-emerald-400">daily_market_harvest</span>():</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;data = extract_competitor_prices()</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;save_to_database(data)</p>
                  <p className="text-amber-400 mt-2">schedule.every().day.at("00:00").do(daily_market_harvest)</p>
                </div>
              </div>

              <div className={`mt-2 pt-2.5 border-t flex items-center justify-between text-[11px] ${
                isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}>
                <span className={`flex items-center gap-1 font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  <Cpu className="w-3.5 h-3.5" />
                  {isRTL ? 'يضمن وصول داتا طازجة للمحلل كل صباح بدون مجهود يدوي' : 'Ensures fresh daily market data arrives in the warehouse automatically.'}
                </span>
                <span className="font-mono text-slate-400">Pipeline Status: ACTIVE</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Quote */}
      <div className="mt-2 text-center">
        <span className="text-[11px] font-medium text-slate-400">
          {isRTL 
            ? 'الـ Web Scraping يسد فجوات البيانات حينما لا يتوفر API أو ملف جاهز من العميل'
            : 'Web scraping fills critical data voids when no formal dataset or public API exists'}
        </span>
      </div>
    </div>
  );
};
