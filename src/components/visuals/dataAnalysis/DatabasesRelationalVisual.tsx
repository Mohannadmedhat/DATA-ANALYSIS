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
}

export const DatabasesRelationalVisual: React.FC<DatabasesRelationalVisualProps> = ({ isRTL }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'schema'>('overview');
  const [hoveredCustomerId, setHoveredCustomerId] = useState<number | null>(null);

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
    <div className="flex flex-col justify-between w-full h-full max-w-6xl mx-auto py-1 select-none text-slate-900">
      {/* Top Filter Tabs Bar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {isRTL ? 'منظومة قواعد البيانات العلائقية (Relational Databases):' : 'Relational Database Architecture:'}
          </span>
        </div>

        {/* Calm Segmented Control with Light Pill Selection */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 border border-slate-200 rounded-xl shadow-inner">
          <button
            onClick={() => setActiveTab('overview')}
            className={`relative px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeTab === 'overview'
                ? 'text-blue-700 font-black shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold'
            }`}
          >
            {activeTab === 'overview' && (
              <motion.div
                layoutId="activeDbPill"
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="absolute inset-0 rounded-lg bg-white border border-slate-200/90 shadow-sm"
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
                ? 'text-blue-700 font-black shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 font-semibold'
            }`}
          >
            {activeTab === 'schema' && (
              <motion.div
                layoutId="activeDbPill"
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="absolute inset-0 rounded-lg bg-white border border-slate-200/90 shadow-sm"
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              {isRTL ? 'المخطط العلائقي التفاعلي (Live Schema)' : 'Interactive Schema'}
            </span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-stretch my-auto">
        <AnimatePresence mode="wait">
          {/* VIEW 1: THREE PILLARS (Exact match to Slide 24 of PDF) */}
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
                className="flex flex-col justify-between p-5 rounded-2xl border border-blue-200 bg-white shadow-sm hover:shadow-md transition-all text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-black shadow-sm">
                      <Database className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                      ACID Safe
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    {isRTL ? 'المفهوم الأساسي' : 'Storage Engine'}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {isRTL ? 'مفاهيم قواعد البيانات (Database Concepts)' : 'Database Concepts'}
                  </h3>

                  {/* Exact text from PDF */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                    {isRTL 
                      ? 'نظام مهيكل وموثوق لتخزين واسترجاع كميات هائلة من البيانات بأمان وكفاءة بدون فقدان أي معلومة.'
                      : 'A structured system for storing and retrieving data reliably.'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>{isRTL ? 'سلامة البيانات والأمان' : 'Integrity & Concurrency'}</span>
                </div>
              </motion.div>

              {/* Pillar 2: Tables */}
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
                      <Table className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100">
                      Rows & Cols
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                    {isRTL ? 'هيكل التخزين' : 'Tabular Schema'}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {isRTL ? 'الجداول (Tables)' : 'Tables'}
                  </h3>

                  {/* Exact text from PDF */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                    {isRTL 
                      ? 'تنظيم البيانات بدقة داخل صفوف تمثل السجلات (records) وأعمدة محددة الأنواع تمثل الحقول (fields).'
                      : 'Data organized into rows (records) and columns (fields).'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{isRTL ? 'هياكل بيانات قياسية' : 'Standardized Schema'}</span>
                </div>
              </motion.div>

              {/* Pillar 3: Relationships */}
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
                      <Link2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-100">
                      PK ──► FK
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider">
                    {isRTL ? 'الربط العلائقي' : 'Relational Keys'}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {isRTL ? 'العلاقات (Relationships)' : 'Relationships'}
                  </h3>

                  {/* Exact text from PDF */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                    {isRTL 
                      ? 'ربط الجداول المختلفة ببعضها عن طريق مفاتيح مشتركة (Shared Keys) مثل رقم العميل (customer_id).'
                      : 'Tables connect through shared keys, e.g. customer ID.'}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold flex items-center justify-between">
                  <span className="flex items-center gap-1 text-cyan-600">
                    <Key className="w-3.5 h-3.5" />
                    Primary & Foreign Keys
                  </span>
                  <button
                    onClick={() => setActiveTab('schema')}
                    className="text-cyan-700 font-bold hover:underline cursor-pointer"
                  >
                    {isRTL ? 'عرض الربط' : 'View Link'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* VIEW 2: INTERACTIVE LIVE SCHEMA (Primary Key -> Foreign Key linkage) */}
          {activeTab === 'schema' && (
            <motion.div
              key="schema"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between w-full h-full p-5 sm:p-6 rounded-2xl border border-blue-200 bg-white shadow-sm text-start"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Link2 className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-slate-900 text-base">
                      {isRTL 
                        ? 'نموذج عملي: جدول العملاء (Customers) مرتبط بجدول الطلبات (Orders)' 
                        : 'Live Relational Link: Customers (1) ──► Orders (N)'}
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    {isRTL ? 'مرر الماوس فوق أي عميل لرؤية طلباته المرتبطة تلقائياً' : 'Hover over any customer to highlight matching orders'}
                  </span>
                </div>

                {/* Two tables side-by-side with interactive connection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Table 1: Customers */}
                  <div className="border border-blue-100 rounded-xl overflow-hidden shadow-xs">
                    <div className="bg-blue-600 text-white px-3 py-2 text-xs font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Table className="w-3.5 h-3.5" />
                        TABLE: Customers (Parent)
                      </span>
                      <span className="text-[10px] bg-blue-700 px-1.5 py-0.5 rounded font-mono">
                        PK: customer_id
                      </span>
                    </div>
                    <table className="w-full text-xs">
                      <thead className="bg-slate-50 text-[11px] text-slate-500 font-mono border-b">
                        <tr>
                          <th className="py-2 px-3 text-start">customer_id (PK)</th>
                          <th className="py-2 px-3 text-start">name</th>
                          <th className="py-2 px-3 text-start">city</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {customers.map((c) => {
                          const isHovered = hoveredCustomerId === c.id;
                          return (
                            <tr
                              key={c.id}
                              onMouseEnter={() => setHoveredCustomerId(c.id)}
                              onMouseLeave={() => setHoveredCustomerId(null)}
                              className={`cursor-pointer transition-colors ${
                                isHovered ? 'bg-blue-100/70 font-bold' : 'hover:bg-slate-50'
                              }`}
                            >
                              <td className="py-2 px-3 font-mono text-blue-700 font-bold flex items-center gap-1">
                                <Key className="w-3 h-3 text-amber-500" />
                                {c.id}
                              </td>
                              <td className="py-2 px-3">{c.name}</td>
                              <td className="py-2 px-3 text-slate-500">{c.city}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Table 2: Orders */}
                  <div className="border border-indigo-100 rounded-xl overflow-hidden shadow-xs">
                    <div className="bg-indigo-600 text-white px-3 py-2 text-xs font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Table className="w-3.5 h-3.5" />
                        TABLE: Orders (Child)
                      </span>
                      <span className="text-[10px] bg-indigo-700 px-1.5 py-0.5 rounded font-mono">
                        FK: customer_id
                      </span>
                    </div>
                    <table className="w-full text-xs">
                      <thead className="bg-slate-50 text-[11px] text-slate-500 font-mono border-b">
                        <tr>
                          <th className="py-2 px-3 text-start">order_id</th>
                          <th className="py-2 px-3 text-start">customer_id (FK)</th>
                          <th className="py-2 px-3 text-start">date</th>
                          <th className="py-2 px-3 text-start">total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {orders.map((o) => {
                          const isHighlighted = hoveredCustomerId === o.customerId;
                          return (
                            <tr
                              key={o.orderId}
                              className={`transition-colors ${
                                isHighlighted ? 'bg-indigo-100/70 font-bold' : 'hover:bg-slate-50'
                              }`}
                            >
                              <td className="py-2 px-3 font-mono text-slate-700">#{o.orderId}</td>
                              <td className="py-2 px-3 font-mono text-indigo-700 font-bold flex items-center gap-1">
                                <Link2 className="w-3 h-3 text-indigo-500" />
                                {o.customerId}
                              </td>
                              <td className="py-2 px-3 text-slate-500 font-mono text-[11px]">{o.date}</td>
                              <td className="py-2 px-3 font-mono font-bold text-emerald-700">{o.total}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Footer info explaining the link */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-600">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {isRTL 
                    ? 'المفتاح الأجنبي (Foreign Key) يمنع تكرار بيانات العميل ويوثق صلة الطلبات بصاحبها' 
                    : 'The Foreign Key prevents customer redundancy and preserves relational data integrity.'}
                </span>
                <span className="font-mono text-blue-600 font-bold">
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
