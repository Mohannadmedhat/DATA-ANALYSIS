import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Copy, Check, Terminal, Sparkles, Layers } from 'lucide-react';

interface CodePreset {
  languageType: 'python' | 'sql' | 'dax' | 'excel';
  code: string;
  conceptTitleAr: string;
  conceptTitleEn: string;
  conceptSubtitleAr: string;
  conceptSubtitleEn: string;
  bulletsAr: string[];
  bulletsEn: string[];
}

const presets: Record<string, CodePreset> = {
  'python-vars': {
    languageType: 'python',
    conceptTitleAr: 'المتغيرات وأنواع البيانات الأساسية',
    conceptTitleEn: 'Variables & Fundamental Data Types',
    conceptSubtitleAr: 'اللبنات الأساسية لتخزين البيانات ومعالجتها في بايثون',
    conceptSubtitleEn: 'The core building blocks for storing and processing data in Python',
    bulletsAr: [
      'int / float: لتخزين الأرقام الصحيحة والعشرية (مثل الأسعار والكميات والمبيعات)',
      'str: لتخزين النصوص وسلاسل الحروف (أسماء العملاء، الفئات، والمدن)',
      'bool: لتخزين القيم المنطقية True / False لتصنيف الحالات وشروط الفلترة',
      'type(): دالة مدمجة لفحص ومعرفة نوع أي متغير برمجياً والتأكد من صحته'
    ],
    bulletsEn: [
      'int / float: Store integer and decimal numbers (prices, quantities, metrics)',
      'str: Store text strings (customer names, categories, and geographic locations)',
      'bool: Store logical True/False flags for boolean conditions and filters',
      'type(): Built-in Python function to inspect and validate variable data types'
    ],
    code: `# Customer Transaction Record
customer_name = "Sarah Johnson"      # str
order_id = 10482                      # int
total_amount = 249.75                 # float
is_loyalty_member = True              # bool

# Compute loyalty discount dynamically
discount = 0.15 if is_loyalty_member else 0.0
final_price = total_amount * (1 - discount)

print(f"Customer: {customer_name}")
print(f"Order #{order_id} Total: \${final_price:.2f}")`
  },

  'python-structs': {
    languageType: 'python',
    conceptTitleAr: 'الدوال، القوائم والقواميس',
    conceptTitleEn: 'Functions, Lists & Dictionaries',
    conceptSubtitleAr: 'هياكل تنظيم البيانات والدوال القابلة لإعادة الاستخدام',
    conceptSubtitleEn: 'Data structures and reusable modular logic for automation',
    bulletsAr: [
      'Lists []: مصفوفات مرتبة لتخزين مجموعات قيم متسلسلة (مثل قراءات المبيعات اليومية)',
      'Dictionaries {}: لتخزين أزواج المفتاح والقيمة (Key-Value) لتمثيل سجل بيانات كامل',
      'Functions def: كتل برمجية لتنفيذ حسابات متكررة تلقائياً بدون إعادة كتابة الكود',
      'Loops for / while: للمرور على كافة السجلات وتطبيق العمليات التحليلية عليها'
    ],
    bulletsEn: [
      'Lists []: Ordered arrays to store metric sequences (e.g. daily sales records)',
      'Dictionaries {}: Key-value pairs representing structured entity profiles',
      'Functions def: Modular functions to automate repetitive analytical formulas',
      'Loops for / while: Iterate through datasets to clean and transform records'
    ],
    code: `# 1. List of Daily Sales Totals
daily_sales = [1200, 1850, 2100, 950, 3200]

# 2. Dictionary of Customer Entity
customer = {
    "id": "C-901",
    "name": "Ahmed Hassan",
    "city": "Cairo",
    "orders_count": 12
}

# 3. Reusable KPI Calculation Function
def calculate_growth(current, previous):
    rate = ((current - previous) / previous) * 100
    return round(rate, 2)

weekly_growth = calculate_growth(daily_sales[-1], daily_sales[0])
print(f"Weekly Sales Growth: +{weekly_growth}%")`
  },

  'python-workflow': {
    languageType: 'python',
    conceptTitleAr: 'المسار العملي لتحليل البيانات مع Pandas',
    conceptTitleEn: 'Real-World Data Workflow with Pandas',
    conceptSubtitleAr: 'من قراءة الملفات الخام إلى استخراج الملخصات الإحصائية',
    conceptSubtitleEn: 'From importing raw files to extracting key statistical summaries',
    bulletsAr: [
      'pd.read_csv(): استيراد ملفات البيانات وجداول CSV الضخمة في هياكل DataFrames',
      'df.dropna(): تنظيف ومعالجة القيم المفقودة وحذف البيانات غير المكتملة',
      'df.groupby(): تلخيص وتجميع مؤشرات الأداء حسب الفئة والمنطقة الجغرافية',
      'df.describe(): استخراج ملخص إحصائي شامل (المتوسط، الانحراف، القيم العظمى)'
    ],
    bulletsEn: [
      'pd.read_csv(): Ingest massive datasets directly into high-speed DataFrames',
      'df.dropna(): Handle missing values and filter incomplete records',
      'df.groupby(): Segment performance metrics by category and branch location',
      'df.describe(): Compute complete statistical profiles in a single command'
    ],
    code: `import pandas as pd

# 1. Ingest clean sales dataset
df = pd.read_csv('ecommerce_orders.csv')

# 2. Inspect missing records
df_clean = df.dropna(subset=['customer_id', 'revenue'])

# 3. Aggregate revenue by region
regional_summary = df_clean.groupby('region')['revenue'].agg(['sum', 'mean']).reset_index()

# 4. Display high-margin segments
print(regional_summary.sort_values(by='sum', ascending=False).head(5))`
  },

  'sql-query': {
    languageType: 'sql',
    conceptTitleAr: 'بنية استعلامات SQL الأساسية',
    conceptTitleEn: 'Core SQL Querying Architecture',
    conceptSubtitleAr: 'استرجاع وفلترة وترتيب البيانات من قواعد البيانات العلائقية',
    conceptSubtitleEn: 'Extracting, filtering, and ordering tabular records from RDBMS',
    bulletsAr: [
      'SELECT / FROM: تحديد الأعمدة المطلوبة واسم الجدول المستهدف في قاعدة البيانات',
      'WHERE: فلترة السجلات وتطبيق الشروط المنطقية (المبيعات > 1000، المدينة = القاهرة)',
      'GROUP BY / HAVING: تجميع السجلات وحساب الدوال التجميعية (SUM, AVG, COUNT)',
      'ORDER BY: فرز النتائج تصاعدياً أو تنازلياً وتحديد أفضل 10 نتائج عبر LIMIT'
    ],
    bulletsEn: [
      'SELECT / FROM: Specify columns to retrieve and the primary source table',
      'WHERE: Filter records using conditional criteria (amount > 1000, active status)',
      'GROUP BY / HAVING: Aggregate rows and apply aggregate thresholds (SUM, COUNT)',
      'ORDER BY / LIMIT: Sort records ascending/descending and isolate top performers'
    ],
    code: `-- Top 5 High-Value Customers in 2024
SELECT 
    c.customer_id,
    c.customer_name,
    c.city,
    COUNT(o.order_id) AS total_orders,
    SUM(o.order_amount) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= '2024-01-01'
GROUP BY c.customer_id, c.customer_name, c.city
HAVING SUM(o.order_amount) > 5000
ORDER BY total_spent DESC
LIMIT 5;`
  },

  'sql-joins': {
    languageType: 'sql',
    conceptTitleAr: 'ربط الجداول (SQL JOINs)',
    conceptTitleEn: 'Relational Joins (INNER, LEFT, FULL)',
    conceptSubtitleAr: 'دمج البيانات من جداول متعددة بناءً على مفاتيح الربط (Foreign Keys)',
    conceptSubtitleEn: 'Combining related records across tables using Primary & Foreign Keys',
    bulletsAr: [
      'INNER JOIN: إرجاع السجلات المتطابقة فقط والموجودة في كلا الجدولين معاً',
      'LEFT JOIN: إرجاع كافة سجلات الجدول الأيسر حتى لو لم يكن لها مقابل في الأيمن',
      'RIGHT JOIN: إرجاع كافة سجلات الجدول الأيمن ومطابقتها مع الأيسر',
      'FULL OUTER JOIN: دمج كافة السجلات من الجدولين سواء تطابقت أم لم تتطابق'
    ],
    bulletsEn: [
      'INNER JOIN: Returns only rows with matching foreign keys in both tables',
      'LEFT JOIN: Keeps all rows from left table, with NULLs for unmatched right rows',
      'RIGHT JOIN: Keeps all rows from right table with corresponding left matches',
      'FULL OUTER JOIN: Combines all records from both tables regardless of match'
    ],
    code: `-- Left Join to Find Inactive / Non-Purchasing Customers
SELECT 
    c.customer_id,
    c.customer_name,
    c.signup_date,
    o.order_id,
    o.order_amount
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL; -- Identifies registered users with 0 purchases`
  },

  'sql-subqueries': {
    languageType: 'sql',
    conceptTitleAr: 'الاستعلامات الفرعية ودوال النوافذ',
    conceptTitleEn: 'Subqueries, CTEs & Window Functions',
    conceptSubtitleAr: 'كتابة استعلامات متداخلة واستخراج الرتب والنسب التراكمية',
    conceptSubtitleEn: 'Nested queries, Common Table Expressions, and analytical rankings',
    bulletsAr: [
      'Subqueries: استعلام متداخل داخل استعلام آخر للمقارنة مع قيم محسوبة ديناميكياً',
      'CTEs (WITH clause): كتابة استعلامات مرحلية نظيفة وقابلة لإعادة الاستخدام',
      'ROW_NUMBER() / DENSE_RANK(): ترقيم وتصنيف السجلات ضمن كل مجموعة',
      'OVER (PARTITION BY): تطبيق الحسابات التحليلية دون تقليص عدد الصفوف'
    ],
    bulletsEn: [
      'Subqueries: Nested SELECT statements to evaluate dynamic scalar thresholds',
      'CTEs (WITH clause): Reusable named query blocks for clean readability',
      'DENSE_RANK() OVER(): Compute rank hierarchies per category partition',
      'PARTITION BY: Execute windowed aggregations without collapsing row granularity'
    ],
    code: `-- Rank Top Selling Products within Each Category
WITH RankedProducts AS (
    SELECT 
        category_name,
        product_name,
        revenue,
        DENSE_RANK() OVER (
            PARTITION BY category_name 
            ORDER BY revenue DESC
        ) AS rank_in_category
    FROM sales_records
)
SELECT * FROM RankedProducts
WHERE rank_in_category <= 3;`
  },

  'dax': {
    languageType: 'dax',
    conceptTitleAr: 'لغة DAX ونمذجة المؤشرات في Power BI',
    conceptTitleEn: 'DAX Measures & Context Transition in Power BI',
    conceptSubtitleAr: 'كتابة مقاييس الأعمال الديناميكية ومقارنة الفترات الزمنية',
    conceptSubtitleEn: 'Authoring dynamic business KPIs and Time Intelligence calculations',
    bulletsAr: [
      'CALCULATE(): أهم دالة في DAX لتعديل سياق الفلترة (Filter Context) ديناميكياً',
      'Time Intelligence: دوال المقارنات الزمنية (SAMEPERIODLASTYEAR, DATESYTD)',
      'Measures vs Calculated Columns: المقاييس تُحسب عند الطلب وتوفر استهلاك الذاكرة',
      'DIVIDE(): القسمة الآمنة التي تتفادى أخطاء القسمة على صفر تلقائياً'
    ],
    bulletsEn: [
      'CALCULATE(): Core DAX engine function that overrides and manipulates filter context',
      'Time Intelligence: Compare period performance (SAMEPERIODLASTYEAR, YTD)',
      'Measures: Computed dynamically on-the-fly to optimize RAM and speed',
      'DIVIDE(): Safe mathematical division preventing division-by-zero crashes'
    ],
    code: `-- 1. Dynamic Year-over-Year Revenue Growth
Total Revenue = SUM(Sales[Revenue])

Revenue LY = 
CALCULATE(
    [Total Revenue],
    SAMEPERIODLASTYEAR('Calendar'[Date])
)

YoY Growth % = 
DIVIDE(
    [Total Revenue] - [Revenue LY],
    [Revenue LY],
    0
)`
  }
};

interface CodeAndConceptsVisualProps {
  mode?: 'python-vars' | 'python-structs' | 'python-workflow' | 'sql-query' | 'sql-joins' | 'sql-subqueries' | 'dax';
  languageType?: 'python' | 'sql' | 'dax' | 'excel';
  code?: string;
  conceptTitle?: string;
  conceptSubtitle?: string;
  bullets?: string[];
  cards?: { title: string; description: string; iconName?: string; }[];
  isRTL: boolean;
}

export const CodeAndConceptsVisual: React.FC<CodeAndConceptsVisualProps> = ({
  mode,
  languageType: customLang,
  code: customCode,
  conceptTitle: customTitle,
  conceptSubtitle: customSub,
  bullets: customBullets,
  cards,
  isRTL
}) => {
  const [copied, setCopied] = useState(false);

  // If mode preset exists, extract values
  const preset = mode ? presets[mode] : null;

  const langType = customLang || preset?.languageType || 'python';
  const codeContent = customCode || preset?.code || '';
  const title = customTitle || (isRTL ? preset?.conceptTitleAr : preset?.conceptTitleEn) || '';
  const subtitle = customSub || (isRTL ? preset?.conceptSubtitleAr : preset?.conceptSubtitleEn) || '';
  const bulletsList = customBullets || (isRTL ? preset?.bulletsAr : preset?.bulletsEn) || [];

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full h-full items-center py-2 max-w-6xl mx-auto">
      {/* Concepts / Bullets Column (5 or 6 cols) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="lg:col-span-5 flex flex-col justify-between min-h-[340px] p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-start"
      >
        <div>
          <div className="flex items-center gap-3 mb-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-slate-500 font-medium mt-0.5">{subtitle}</p>
              )}
            </div>
          </div>

          {/* Bullets List */}
          {bulletsList && bulletsList.length > 0 && (
            <div className="space-y-2.5 pt-3 border-t border-slate-100 mb-2">
              {bulletsList.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          )}

          {/* Mini Cards if provided */}
          {cards && cards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {cards.map((c, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900 mb-1">{c.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{isRTL ? 'تطبيق برمجي تفاعلي' : 'Interactive Code Implementation'}</span>
          </span>
          <span className="uppercase text-blue-700 font-mono font-bold bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
            {langType}
          </span>
        </div>
      </motion.div>

      {/* Code Editor Window (7 cols) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
        className="lg:col-span-7 min-h-[340px] rounded-2xl bg-[#0f172a] border border-slate-800 shadow-xl flex flex-col overflow-hidden text-start"
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-2.5 bg-[#1e293b] border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="text-[11px] font-mono text-slate-300 ml-2 uppercase font-bold tracking-wider">
              {langType} script
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-mono transition-all cursor-pointer shadow-sm border border-slate-600"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (isRTL ? 'تم النسخ ✓' : 'Copied ✓') : (isRTL ? 'نسخ الكود' : 'Copy Code')}</span>
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 flex-1 overflow-y-auto font-mono text-xs sm:text-[13px] leading-relaxed text-cyan-300 selection:bg-blue-600 selection:text-white bg-[#0a0f1d]">
          <pre className="whitespace-pre-wrap font-mono font-medium">
            <code>{codeContent}</code>
          </pre>
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2 bg-[#1e293b] border-t border-slate-700 flex items-center justify-between text-[11px] font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>{isRTL ? 'جاهز للتنفيذ في Jupyter / VSCode / SQL Console' : 'Ready to execute in Jupyter / VSCode / SQL Console'}</span>
          </div>
          <span className="text-emerald-400 font-bold">● Valid</span>
        </div>
      </motion.div>
    </div>
  );
};
