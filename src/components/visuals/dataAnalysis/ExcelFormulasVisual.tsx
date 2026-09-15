import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileSpreadsheet, 
  Calculator, 
  Search, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  Play
} from 'lucide-react';

interface ExcelFormulasVisualProps {
  isRTL: boolean;
}

export const ExcelFormulasVisual: React.FC<ExcelFormulasVisualProps> = ({ isRTL }) => {
  const [selectedFunc, setSelectedFunc] = useState<'SUM' | 'AVERAGE' | 'IF' | 'XLOOKUP'>('XLOOKUP');

  const functionsData = {
    SUM: {
      name: 'SUM',
      titleAr: 'حساب المجموع الكلي',
      titleEn: 'Calculate Total Sum',
      formula: '=SUM(C2:C6)',
      descAr: 'تجمع نطاقاً رقمياً متصلاً بسرعة لحساب إجمالي الإيرادات أو الكميات.',
      descEn: 'Adds all numerical values in a range to compute total revenue or volume.',
      highlightCols: [2], // Col C
      result: '$7,850.00',
      resultLabelAr: 'إجمالي المبيعات (Total Sales)',
      resultLabelEn: 'Total Sales Revenue'
    },
    AVERAGE: {
      name: 'AVERAGE',
      titleAr: 'حساب المتوسط الحسابي',
      titleEn: 'Compute Arithmetic Mean',
      formula: '=AVERAGE(C2:C6)',
      descAr: 'تحسب متوسط قيمة الطلب (AOV) لتقييم الأداء المالي لكل معاملة.',
      descEn: 'Computes Average Order Value (AOV) to evaluate customer spend.',
      highlightCols: [2], // Col C
      result: '$1,570.00',
      resultLabelAr: 'متوسط قيمة الطلب (Avg Order)',
      resultLabelEn: 'Average Order Value'
    },
    IF: {
      name: 'IF',
      titleAr: 'الشروط المنطقية والتصنيف',
      titleEn: 'Conditional Logic & Tiering',
      formula: '=IF(C2 >= 2000, "VIP", "Regular")',
      descAr: 'تقيم شرطاً وتُرجع نتيجة معينة (مثل تصنيف العملاء المميزين VIP تلقائياً).',
      descEn: 'Evaluates logical tests to auto-categorize customer loyalty tiers.',
      highlightCols: [2, 3], // Col C and D
      result: 'VIP Tier',
      resultLabelAr: 'تصنيف الصف الثاني (Tier Result)',
      resultLabelEn: 'Row 2 Customer Tier'
    },
    XLOOKUP: {
      name: 'XLOOKUP',
      titleAr: 'البحث والربط الذكي بين الجداول',
      titleEn: 'Modern Search & Relational Lookup',
      formula: '=XLOOKUP("ORD-104", A2:A6, B2:B6)',
      descAr: 'البديل الأحدث والأقوى لدوال VLOOKUP لجلب بيانات العميل بدقة فائقة وبدون قيود اتجاه.',
      descEn: 'Modern flexible replacement for VLOOKUP without left/right lookup limits.',
      highlightCols: [0, 1], // Col A and B
      result: 'Michael Scott',
      resultLabelAr: 'اسم العميل المجلوب (Customer Name)',
      resultLabelEn: 'Lookup Return Value'
    }
  };

  const active = functionsData[selectedFunc];

  const tableData = [
    { id: 'ORD-101', customer: 'Sarah Connor', sales: 1200, tier: 'Regular' },
    { id: 'ORD-102', customer: 'Alex Mercer', sales: 2450, tier: 'VIP' },
    { id: 'ORD-103', customer: 'Elena Rostova', sales: 850, tier: 'Regular' },
    { id: 'ORD-104', customer: 'Michael Scott', sales: 2150, tier: 'VIP' },
    { id: 'ORD-105', customer: 'David Kim', sales: 1200, tier: 'Regular' }
  ];

  return (
    <div className="flex flex-col gap-4 w-full h-full justify-center py-1 max-w-6xl mx-auto select-none">
      {/* Top 4 Function Switcher Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {(['SUM', 'AVERAGE', 'IF', 'XLOOKUP'] as const).map((fnKey, idx) => {
          const isSelected = selectedFunc === fnKey;
          return (
            <motion.button
              key={fnKey}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx, duration: 0.4 }}
              onClick={() => setSelectedFunc(fnKey)}
              className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex items-center justify-between ${
                isSelected
                  ? 'bg-blue-50/90 border-blue-400 text-blue-900 shadow-sm ring-2 ring-blue-500/20'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-mono font-black text-sm">{fnKey}</span>
                  {isSelected && <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />}
                </div>
                <div className="text-[10px] text-slate-500 font-medium truncate max-w-[130px]">
                  {isRTL ? functionsData[fnKey].titleAr : functionsData[fnKey].titleEn}
                </div>
              </div>
              <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                fx
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Main Studio View: Formula Bar + Interactive Spreadsheet */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left: Interactive Spreadsheet Simulation (7 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col text-start"
        >
          {/* Excel Formula Bar Header */}
          <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-mono font-bold text-xs text-emerald-700">Sheet1</span>
            </div>
            <span className="w-px h-4 bg-slate-300" />
            <div className="flex-1 flex items-center gap-2 bg-white px-3 py-1 rounded-lg border border-slate-200 font-mono text-xs text-slate-800 overflow-x-auto shadow-inner">
              <span className="text-blue-600 font-bold italic">fx</span>
              <span className="font-bold text-blue-900">{active.formula}</span>
            </div>
          </div>

          {/* Spreadsheet Grid */}
          <div className="p-3 overflow-x-auto">
            <table className="w-full text-xs font-mono border-collapse">
              <thead>
                <tr className="text-slate-500 border-b border-slate-200 bg-slate-50">
                  <th className="p-2 text-center w-8">#</th>
                  <th className={`p-2 text-start ${active.highlightCols.includes(0) ? 'text-blue-700 font-bold bg-blue-50/80' : ''}`}>A (Order ID)</th>
                  <th className={`p-2 text-start ${active.highlightCols.includes(1) ? 'text-blue-700 font-bold bg-blue-50/80' : ''}`}>B (Customer)</th>
                  <th className={`p-2 text-end ${active.highlightCols.includes(2) ? 'text-blue-700 font-bold bg-blue-50/80' : ''}`}>C (Sales Revenue)</th>
                  <th className={`p-2 text-center ${active.highlightCols.includes(3) ? 'text-blue-700 font-bold bg-blue-50/80' : ''}`}>D (Loyalty Tier)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => {
                  const isHighlightedRow = selectedFunc === 'XLOOKUP' && row.id === 'ORD-104';
                  return (
                    <tr 
                      key={row.id}
                      className={`border-b border-slate-100 transition-colors ${
                        isHighlightedRow 
                          ? 'bg-blue-50/80 text-blue-900 font-bold' 
                          : 'hover:bg-slate-50/80 text-slate-700'
                      }`}
                    >
                      <td className="p-2 text-center text-slate-400 font-bold">{idx + 2}</td>
                      <td className={`p-2 ${active.highlightCols.includes(0) ? 'bg-blue-50/60 text-blue-900 font-bold' : ''}`}>{row.id}</td>
                      <td className={`p-2 ${active.highlightCols.includes(1) ? 'bg-blue-50/60 text-blue-900 font-bold' : ''}`}>{row.customer}</td>
                      <td className={`p-2 text-end ${active.highlightCols.includes(2) ? 'bg-blue-50/60 text-emerald-700 font-bold' : ''}`}>${row.sales.toLocaleString()}</td>
                      <td className={`p-2 text-center ${active.highlightCols.includes(3) ? 'bg-blue-50/60 text-amber-700 font-bold' : ''}`}>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          row.tier === 'VIP' ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {row.tier}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Right: Calculation Output Card & Business Context (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col justify-between h-full p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-start"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                {isRTL ? 'النتيجة الحية للمعادلة' : 'Live Dynamic Output'}
              </span>
            </div>

            <h3 className="text-lg font-black text-slate-900 mb-1.5">
              {isRTL ? active.titleAr : active.titleEn}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {isRTL ? active.descAr : active.descEn}
            </p>

            {/* Big Output Display Box */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-4 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[11px] text-emerald-800 font-bold block mb-0.5">
                  {isRTL ? active.resultLabelAr : active.resultLabelEn}
                </span>
                <span className="text-2xl font-mono font-black text-emerald-900">
                  {active.result}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-sm">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Pivot Table Callout */}
          <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 flex items-start gap-2.5 text-[11px] text-blue-800 font-medium">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>
              {isRTL 
                ? 'الجداول المحورية (Pivot Tables) تتيح تلخيص وفلترة وتجميع هذه المعادلات بنقرة سحب واحدة!' 
                : 'Pivot Tables aggregate and group these calculations across millions of rows with drag & drop!'}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
