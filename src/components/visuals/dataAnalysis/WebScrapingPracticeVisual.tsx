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
}

export const WebScrapingPracticeVisual: React.FC<WebScrapingPracticeVisualProps> = ({ isRTL }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'price-tracker' | 'automation'>('overview');

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
    <div className="flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none text-slate-900">
      {/* Top Filter Tabs Bar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {isRTL ? 'تطبيقات سحب البيانات في بيئة العمل الواقعية:' : 'Web Scraping Real-World Scenarios:'}
          </span>
        </div>

        {/* Calm Segmented Control with Light Pill Selection */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 border border-slate-200 rounded-xl shadow-inner">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'text-blue-700 font-black shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeWebScrapingPill"
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className="absolute inset-0 rounded-lg bg-white border border-slate-200/90 shadow-sm"
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
          {/* VIEW 1: THREE PILLARS (Exact match to Slide 38 of PDF) */}
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
                className="flex flex-col justify-between p-5 rounded-2xl border border-blue-200 bg-white shadow-sm hover:shadow-md transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-black shadow-sm">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                      E-Commerce
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    {isRTL ? 'التجارة الإلكترونية' : 'Competitive Intel'}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {isRTL ? 'جمع أسعار المنتجات (Collecting Product Prices)' : 'Collecting Product Prices'}
                  </h3>

                  {/* Exact text from PDF */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                    {isRTL 
                      ? 'تتبع ومقارنة أسعار المنافسين في مواقع التجارة الإلكترونية لحظياً لتعديل خطط التسعير.'
                      : 'Track competitor pricing across e-commerce sites.'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold flex items-center justify-between">
                  <span>{isRTL ? 'تسعير ديناميكي ذكي' : 'Dynamic Pricing'}</span>
                  <button
                    onClick={() => setActiveTab('price-tracker')}
                    className="text-blue-700 font-bold hover:underline cursor-pointer"
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
                className="flex flex-col justify-between p-5 rounded-2xl border border-indigo-200 bg-white shadow-sm hover:shadow-md transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-black shadow-sm">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                      Public Data
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                    {isRTL ? 'اتجاهات السوق' : 'Market Research'}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {isRTL ? 'تحليل السوق (Market Analysis)' : 'Market Analysis'}
                  </h3>

                  {/* Exact text from PDF */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                    {isRTL 
                      ? 'تجميع البيانات المتاحة على الويب لدراسة اتجاهات السوق، رغبات المستهلكين، وتحليل الفجوات.'
                      : 'Aggregate public data to study market trends.'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{isRTL ? 'أبحاث السوق الميدانية' : 'Trend Aggregation'}</span>
                </div>
              </motion.div>

              {/* Card 3: Data Collection Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 rounded-2xl border border-cyan-200 bg-white shadow-sm hover:shadow-md transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center font-black shadow-sm">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-100">
                      Cron Job
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider">
                    {isRTL ? 'أتمتة الجداول' : 'Scheduled Scripts'}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {isRTL ? 'أتمتة جمع البيانات (Data Collection Automation)' : 'Data Collection Automation'}
                  </h3>

                  {/* Exact text from PDF */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                    {isRTL 
                      ? 'جدولة اسكريبتات بايثون لجمع البيانات الجديدة تلقائياً وبشكل دوري بدون أي تدخل بشري.'
                      : 'Schedule scripts to gather fresh data on a routine.'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold flex items-center justify-between">
                  <span>{isRTL ? 'سيرفرات تلقائية' : 'Cron Pipelines'}</span>
                  <button
                    onClick={() => setActiveTab('automation')}
                    className="text-cyan-700 font-bold hover:underline cursor-pointer"
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
              className="flex flex-col justify-between w-full h-full p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-sm text-start"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {isRTL ? 'محاكي سحب أسعار المنتجات (Competitor Price Scraper)' : 'Competitor Price Tracker: Live Web Extraction'}
                      </h3>
                      <span className="text-[11px] text-slate-500">Target Item: "Sony WH-1000XM5 Wireless Headphones"</span>
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateScrape}
                    disabled={isScraping}
                    className="px-4 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer transition-all shrink-0"
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
                      className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-black text-slate-900 text-sm">{item.site}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          item.inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      <div className="text-2xl font-black font-mono text-blue-700 mb-1">
                        ${item.price}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        Status: {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Scraping Log */}
              <div className="p-3 bg-slate-900 rounded-xl text-slate-300 font-mono text-xs flex items-center justify-between">
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
              className="flex flex-col justify-between w-full h-full p-5 sm:p-6 rounded-2xl border border-cyan-200 bg-white shadow-sm text-start"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan-600" />
                    <h3 className="font-bold text-slate-900 text-base">
                      {isRTL ? 'جدولة سحب البيانات التلقائي (Scheduled Cron Script)' : 'Automated Python Scraping Daemon (Every Midnight)'}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                    Cron: 0 0 * * *
                  </span>
                </div>

                {/* Automation Script Code Display */}
                <div className="p-4 bg-slate-900 rounded-xl font-mono text-xs text-slate-200 space-y-1 shadow-inner mb-3">
                  <p className="text-purple-400">import <span className="text-white">schedule, time, requests</span></p>
                  <p className="text-purple-400">from <span className="text-white">bs4</span> import <span className="text-white">BeautifulSoup</span></p>
                  <p className="text-slate-400 mt-1"># Automated routine job</p>
                  <p><span className="text-blue-400">def</span> <span className="text-emerald-400">daily_market_harvest</span>():</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;data = extract_competitor_prices()</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;save_to_database(data)</p>
                  <p className="text-amber-400 mt-2">schedule.every().day.at("00:00").do(daily_market_harvest)</p>
                </div>
              </div>

              <div className="mt-2 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-cyan-700 font-bold">
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
