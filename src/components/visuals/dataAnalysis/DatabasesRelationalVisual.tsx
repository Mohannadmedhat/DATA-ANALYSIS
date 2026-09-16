import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  Table, 
  Link2, 
  Key, 
  Sparkles, 
  Server, 
  ShieldCheck, 
  ArrowRight,
  Search,
  CheckCircle2
} from 'lucide-react';

interface DatabasesRelationalVisualProps {
  isRTL: boolean;
  isDark?: boolean;
}

export const DatabasesRelationalVisual: React.FC<DatabasesRelationalVisualProps> = ({ isRTL, isDark = false }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'schema'>('overview');
  const [hoveredCustomerId, setHoveredCustomerId] = useState<number | null>(null);

  const cardBgStyle = isDark
    ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-xl backdrop-blur-xl hover:border-slate-700'
    : 'bg-white border-slate-200/90 text-slate-900 shadow-md hover:shadow-xl hover:border-blue-300';

  const customers = [
    { id: 101, name: isRTL ? 'سارة المنشاوي' : 'Sara Mansour', city: isRTL ? 'القاهرة' : 'Cairo' },
    { id: 102, name: isRTL ? 'كريم عبد العزيز' : 'Karim Aziz', city: isRTL ? 'الإسكندرية' : 'Alexandria' },
    { id: 103, name: isRTL ? 'عمر الفاروق' : 'Omar Farouk', city: isRTL ? 'الجيزة' : 'Giza' }
  ];

  const orders = [
    { orderId: 501, customerId: 101, date: '2026-03-01', total: '$1,250' },
    { orderId: 502, customerId: 102, date: '2026-03-02', total: '$890' },
    { orderId: 503, customerId: 101, date: '2026-03-05', total: '$3,400' },
    { orderId: 504, customerId: 103, date: '2026-03-08', total: '$720' }
  ];

  return (
    <div className={`flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
      {/* Top Filter Tabs Bar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {isRTL ? 'منظومة قواعد البيانات العلائقية (Relational Databases):' : 'Relational Database Architecture:'}
          </span>
        </div>

        {/* Segmented Control */}
        <div className={`flex items-center gap-1.5 p-1 rounded-xl shadow-inner border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
          <button
            onClick={() => setActiveTab('overview')}
            className={`relative px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeTab === 'overview'
                ? (isDark ? 'text-blue-400 font-black shadow-sm' : 'text-blue-700 font-black shadow-sm')
                : (isDark ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold')
            }`}
          >
            {activeTab === 'overview' && (
              <motion.div
                layoutId="activeDbPill"
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className={`absolute inset-0 rounded-lg border shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200/90'}`}
              />
            )}
            <span className="relative z-10">
              {isRTL ? 'المحاور الثلاثة (PDF View)' : 'Core Pillars (PDF View)'}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('schema')}
            className={`relative px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeTab === 'schema'
                ? (isDark ? 'text-blue-400 font-black shadow-sm' : 'text-blue-700 font-black shadow-sm')
                : (isDark ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold')
            }`}
          >
            {activeTab === 'schema' && (
              <motion.div
                layoutId="activeDbPill"
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className={`absolute inset-0 rounded-lg border shadow-sm ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200/90'}`}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              {isRTL ? 'المخطط العلائقي التفاعلي (Live Schema)' : 'Interactive Schema'}
            </span>
          </button>
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
              {/* Pillar 1: Database Concepts */}
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
                      <Database className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                      isDark ? 'bg-blue-950/60 text-blue-300 border-blue-800' : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}>
                      ACID Safe
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {isRTL ? 'المفهوم الأساسي' : 'Storage Engine'}
                  </span>
                  <h3 className={`text-lg font-black mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                    {isRTL ? 'مفاهيم قواعد البيانات (Database Concepts)' : 'Database Concepts'}
                  </h3>

                  <p className={`text-xs sm:text-[13px] leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {isRTL 
                      ? 'نظام مهيكل وموثوق لتخزين واسترجاع كميات هائلة من البيانات بأمان وكفاءة بدون فقدان أي معلومة.'
                      : 'A structured system for storing and retrieving data reliably.'}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-[11px] font-semibold flex items-center gap-1.5 ${
                  isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span>{isRTL ? 'سلامة البيانات والأمان' : 'Integrity & Concurrency'}</span>
                </div>
              </motion.div>

              {/* Pillar 2: Tables */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl hover:border-indigo-500/50 transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-800 text-indigo-400 flex items-center justify-center font-black shadow-sm">
                      <Table className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800">
                      Rows & Cols
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                    {isRTL ? 'هيكل التخزين' : 'Tabular Schema'}
                  </span>
                  <h3 className="text-lg font-black text-slate-100 mb-2">
                    {isRTL ? 'الجداول (Tables)' : 'Tables'}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-medium">
                    {isRTL 
                      ? 'تنظيم البيانات بدقة داخل صفوف تمثل السجلات (records) وأعمدة محددة الأنواع تمثل الحقول (fields).'
                      : 'Data organized into rows (records) and columns (fields).'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{isRTL ? 'هياكل بيانات قياسية' : 'Standardized Schema'}</span>
                </div>
              </motion.div>

              {/* Pillar 3: Relationships */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between p-5 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-xl hover:border-cyan-500/50 transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800 text-cyan-400 flex items-center justify-center font-black shadow-sm">
                      <Link2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800">
                      PK ──► FK
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                    {isRTL ? 'الربط العلائقي' : 'Relational Keys'}
                  </span>
                  <h3 className="text-lg font-black text-slate-100 mb-2">
                    {isRTL ? 'العلاقات (Relationships)' : 'Relationships'}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-medium">
                    {isRTL 
                      ? 'ربط الجداول المختلفة ببعضها عن طريق مفاتيح مشتركة (Shared Keys) مثل رقم العميل (customer_id).'
                      : 'Tables connect through shared keys, e.g. customer ID.'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span className="flex items-center gap-1 text-cyan-400">
                    <Key className="w-3.5 h-3.5" />
                    Primary & Foreign Keys
                  </span>
                  <button
                    onClick={() => setActiveTab('schema')}
                    className="text-cyan-300 font-bold hover:underline cursor-pointer"
                  >
                    {isRTL ? 'عرض الربط' : 'View Link'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* VIEW 2: INTERACTIVE LIVE SCHEMA */}
          {activeTab === 'schema' && (
            <motion.div
              key="schema"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col justify-between w-full h-full p-5 sm:p-6 rounded-2xl border flex-1 text-start ${
                isDark ? 'border-slate-800 bg-slate-900/90 text-white shadow-xl backdrop-blur-xl' : 'border-slate-200/90 bg-white text-slate-900 shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Link2 className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    <h3 className={`font-bold text-base ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                      {isRTL 
                        ? 'نموذج عملي: جدول العملاء (Customers) مرتبط بجدول الطلبات (Orders)' 
                        : 'Live Relational Link: Customers (1) ──► Orders (N)'}
                    </h3>
                  </div>
                  <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {isRTL ? 'مرر الماوس فوق أي عميل لرؤية طلباته المرتبطة تلقائياً' : 'Hover over any customer to highlight matching orders'}
                  </span>
                </div>

                {/* Two tables side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Table 1: Customers */}
                  <div className={`border rounded-xl overflow-hidden shadow-xs ${
                    isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-white'
                  }`}>
                    <div className={`px-3 py-2 text-xs font-bold flex items-center justify-between border-b ${
                      isDark ? 'bg-blue-900/80 text-white border-blue-800' : 'bg-blue-600 text-white border-blue-700'
                    }`}>
                      <span className="flex items-center gap-1.5">
                        <Table className="w-3.5 h-3.5" />
                        TABLE: Customers (Parent)
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        isDark ? 'bg-blue-950 text-blue-200' : 'bg-blue-700 text-white'
                      }`}>
                        PK: customer_id
                      </span>
                    </div>
                    <table className="w-full text-xs">
                      <thead className={`text-[11px] font-mono border-b ${
                        isDark ? 'bg-slate-900 text-slate-400 border-slate-800' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        <tr>
                          <th className="py-2 px-3 text-start">customer_id (PK)</th>
                          <th className="py-2 px-3 text-start">name</th>
                          <th className="py-2 px-3 text-start">city</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${isDark ? 'divide-slate-800/80' : 'divide-slate-200'}`}>
                        {customers.map((c) => {
                          const isHovered = hoveredCustomerId === c.id;
                          return (
                            <tr
                              key={c.id}
                              onMouseEnter={() => setHoveredCustomerId(c.id)}
                              onMouseLeave={() => setHoveredCustomerId(null)}
                              className={`cursor-pointer transition-colors ${
                                isHovered 
                                  ? (isDark ? 'bg-blue-900/50 text-white font-bold' : 'bg-blue-100 text-blue-900 font-bold')
                                  : (isDark ? 'hover:bg-slate-900/60 text-slate-300' : 'hover:bg-slate-50 text-slate-700')
                              }`}
                            >
                              <td className={`py-2 px-3 font-mono font-bold flex items-center gap-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                                <Key className="w-3 h-3 text-amber-500" />
                                {c.id}
                              </td>
                              <td className="py-2 px-3">{c.name}</td>
                              <td className={`py-2 px-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{c.city}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Table 2: Orders */}
                  <div className={`border rounded-xl overflow-hidden shadow-xs ${
                    isDark ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-white'
                  }`}>
                    <div className={`px-3 py-2 text-xs font-bold flex items-center justify-between border-b ${
                      isDark ? 'bg-indigo-900/80 text-white border-indigo-800' : 'bg-indigo-600 text-white border-indigo-700'
                    }`}>
                      <span className="flex items-center gap-1.5">
                        <Table className="w-3.5 h-3.5" />
                        TABLE: Orders (Child)
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        isDark ? 'bg-indigo-950 text-indigo-200' : 'bg-indigo-700 text-white'
                      }`}>
                        FK: customer_id
                      </span>
                    </div>
                    <table className="w-full text-xs">
                      <thead className={`text-[11px] font-mono border-b ${
                        isDark ? 'bg-slate-900 text-slate-400 border-slate-800' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        <tr>
                          <th className="py-2 px-3 text-start">order_id</th>
                          <th className="py-2 px-3 text-start">customer_id (FK)</th>
                          <th className="py-2 px-3 text-start">date</th>
                          <th className="py-2 px-3 text-start">total</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${isDark ? 'divide-slate-800/80' : 'divide-slate-200'}`}>
                        {orders.map((o) => {
                          const isHighlighted = hoveredCustomerId === o.customerId;
                          return (
                            <tr
                              key={o.orderId}
                              className={`transition-colors ${
                                isHighlighted 
                                  ? (isDark ? 'bg-indigo-900/50 text-white font-bold' : 'bg-indigo-100 text-indigo-900 font-bold')
                                  : (isDark ? 'hover:bg-slate-900/60 text-slate-300' : 'hover:bg-slate-50 text-slate-700')
                              }`}
                            >
                              <td className={`py-2 px-3 font-mono ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>#{o.orderId}</td>
                              <td className={`py-2 px-3 font-mono font-bold flex items-center gap-1 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                <Link2 className="w-3 h-3" />
                                {o.customerId}
                              </td>
                              <td className={`py-2 px-3 font-mono text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{o.date}</td>
                              <td className={`py-2 px-3 font-mono font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{o.total}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Footer info explaining the link */}
              <div className={`mt-3 pt-2.5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] ${
                isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  {isRTL 
                    ? 'المفتاح الأجنبي (Foreign Key) يمنع تكرار بيانات العميل ويوثق صلة الطلبات بصاحبها' 
                    : 'The Foreign Key prevents customer redundancy and preserves relational data integrity.'}
                </span>
                <span className={`font-mono font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  JOIN: Customers.customer_id = Orders.customer_id
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Quote */}
      <div className="mt-2 text-center">
        <span className="text-[11px] font-medium text-slate-400">
          {isRTL 
            ? 'قواعد البيانات هي المستودع الحقيقي لبيانات الشركات الكبرى، والربط العلائقي هو سر قوتها'
            : 'Databases are where enterprise business data lives — relational keys are what give them power'}
        </span>
      </div>
    </div>
  );
};
