import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { HeroCoverVisual } from './HeroCoverVisual';
import { ThankYouVisual } from './ThankYouVisual';
import { 
  Sparkles,
  Layers,
  Database,
  Key,
  Link,
  Table,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  Calendar,
  Check,
  X,
  Code2,
  Filter,
  BarChart3,
  PieChart,
  Award,
  Clock,
  HelpCircle,
  Hash,
  ArrowUpDown,
  BookOpen,
  Search,
  Play
} from 'lucide-react';

interface Session25SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session25SlideRenderer: React.FC<Session25SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // Interactive States
  const [activeSchemaTable, setActiveSchemaTable] = useState<number | null>(null);
  const [slide12Tab, setSlide12Tab] = useState<number>(0);
  const [likeSearch, setLikeSearch] = useState<string>('Mo%');
  const [sortField, setSortField] = useState<'price' | 'name' | 'date'>('price');
  const [sortDir, setSortDir] = useState<'ASC' | 'DESC'>('DESC');
  const [whereFilter, setWhereFilter] = useState<'all' | 'active' | 'price' | 'date'>('all');

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual 
        sessionNumber="25"
        titlePrefix="READING DATA WITH"
        titleHighlight="SELECT QUERIES"
        subtitle="Filtering · Logical Operators · Pattern Matching · Aggregate Functions · GROUP BY · HAVING · Executive KPIs"
        floatingBadges={[
          { icon: Database, label: "Instant Academy Schema", position: "top-left", borderColor: "border-blue-500/50", textColor: "text-blue-400" },
          { icon: Filter, label: "WHERE, LIKE & BETWEEN", position: "top-right", borderColor: "border-amber-500/50", textColor: "text-amber-400" },
          { icon: Layers, label: "GROUP BY & HAVING Pipeline", position: "bottom-left", borderColor: "border-purple-500/50", textColor: "text-purple-400" },
          { icon: BarChart3, label: "Production KPI Dashboards", position: "bottom-right", borderColor: "border-emerald-500/50", textColor: "text-emerald-400" }
        ]}
        statsCards={[
          { val: "8 Tables", label: "Relational Schema", sub: "Students, Courses, Payments..." },
          { val: "30 Slides", label: "Interactive Presentation", sub: "Complete SQL Querying Guide" },
          { val: "5 KPIs", label: "Executive Dashboards", sub: "Revenue, Leads, Attendance..." }
        ]}
        onStart={() => onSelectSlide ? onSelectSlide(1) : onNext?.()}
      />
    );
  }

  // =========================================================
  // SLIDE 02: DATABASE SCHEMA RECAP (8 TABLES - COMPACT & INTERACTIVE)
  // =========================================================
  if (slide.id === 2) {
    const tables = [
      {
        name: 'Students',
        badge: 'STUDENT REGISTRY',
        headerBg: 'bg-blue-600',
        pk: 'StudentID',
        fks: [],
        attrs: ['StudentName', 'Email', 'City', 'EnrollDate']
      },
      {
        name: 'Courses',
        badge: 'ACADEMIC CATALOG',
        headerBg: 'bg-teal-600',
        pk: 'CourseID',
        fks: [],
        attrs: ['CourseName', 'Category', 'Price', 'DurationHrs']
      },
      {
        name: 'Enrollments',
        badge: 'REGISTRATION JUNCTION',
        headerBg: 'bg-purple-700',
        pk: 'EnrollmentID',
        fks: ['StudentID', 'CourseID'],
        attrs: ['EnrollDate', 'EnrollStatus']
      },
      {
        name: 'Payments',
        badge: 'FINANCIAL LEDGER',
        headerBg: 'bg-orange-600',
        pk: 'PaymentID',
        fks: ['EnrollmentID'],
        attrs: ['Amount', 'PaymentDate', 'Method', 'Status']
      },
      {
        name: 'Leads',
        badge: 'SALES PIPELINE',
        headerBg: 'bg-emerald-600',
        pk: 'LeadID',
        fks: ['AgentID', 'CampaignID'],
        attrs: ['LeadName', 'Source', 'Status', 'CreatedDate']
      },
      {
        name: 'Campaigns',
        badge: 'MARKETING CHANNELS',
        headerBg: 'bg-indigo-600',
        pk: 'CampaignID',
        fks: ['AgentID'],
        attrs: ['CampaignName', 'Channel', 'Budget', 'StartDate']
      },
      {
        name: 'Attendance',
        badge: 'SESSION LOGS',
        headerBg: 'bg-rose-700',
        pk: 'AttendanceID',
        fks: ['EnrollmentID'],
        attrs: ['AttendStatus', 'Notes']
      },
      {
        name: 'SalesAgents',
        badge: 'STAFF & TARGETS',
        headerBg: 'bg-blue-800',
        pk: 'AgentID',
        fks: [],
        attrs: ['AgentName', 'Email', 'Region', 'MonthlyTarget']
      }
    ];

    const selTable = activeSchemaTable !== null ? tables[activeSchemaTable] : null;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between p-0.5 text-start">
        <div className="flex items-center justify-between mb-1.5 px-0.5">
          <p className="text-xs text-slate-600">
            All examples in this session use the <span className="font-bold text-blue-600">Instant Academy dataset</span>. Click any table to inspect:
          </p>
          {selTable && (
            <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Selected: {selTable.name} ({selTable.pk})
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1">
          {tables.map((t, idx) => {
            const isSelected = activeSchemaTable === idx;
            return (
              <motion.div 
                key={t.name}
                whileHover={{ y: -1 }}
                onClick={() => setActiveSchemaTable(isSelected ? null : idx)}
                className={`rounded-lg border overflow-hidden bg-white shadow-xs flex flex-col cursor-pointer transition-all ${
                  isSelected ? 'ring-2 ring-blue-500 shadow-md border-blue-400 bg-blue-50/20' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`${t.headerBg} text-white px-2.5 py-1 flex items-center justify-between`}>
                  <span className="font-bold text-xs tracking-wide">{t.name}</span>
                  <Table className="w-3 h-3 opacity-80" />
                </div>

                <div className="p-2 space-y-1 flex-1 text-[10px] font-mono">
                  {/* PK */}
                  <div className="flex items-center gap-1 text-amber-700 font-bold bg-amber-50 px-1 py-0.5 rounded border border-amber-200">
                    <Key className="w-2.5 h-2.5 text-amber-600 shrink-0" />
                    <span>{t.pk} (PK)</span>
                  </div>

                  {/* FKs */}
                  {t.fks.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {t.fks.map(fk => (
                        <div key={fk} className="flex items-center gap-1 text-blue-700 font-semibold bg-blue-50 px-1 py-0.5 rounded border border-blue-200">
                          <Link className="w-2.5 h-2.5 text-blue-500 shrink-0" />
                          <span>{fk} (FK)</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Attributes */}
                  <div className="pt-0.5 border-t border-slate-100 space-y-0.5 text-slate-600 font-sans text-[10px]">
                    {t.attrs.map(attr => (
                      <div key={attr} className="flex items-center gap-1 leading-tight">
                        <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                        <span>{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 03: SELECT — SYNTAX & ANATOMY
  // =========================================================
  if (slide.id === 3) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        {/* SQL Code Box */}
        <div className="p-3.5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs sm:text-sm border border-slate-800 shadow-md">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800 text-slate-400 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-2 font-sans font-semibold text-slate-300">SQL Syntax & Anatomy</span>
          </div>
          <p className="leading-relaxed">
            <span className="text-cyan-400 font-bold">SELECT</span>   column1, column2, ...    <span className="text-slate-500">-- Which columns to show</span><br />
            <span className="text-blue-400 font-bold">FROM</span>     TableName                <span className="text-slate-500">-- Which table to read from</span><br />
            <span className="text-emerald-400 font-bold">WHERE</span>    condition                <span className="text-slate-500">-- Filter rows (optional)</span><br />
            <span className="text-orange-400 font-bold">ORDER BY</span> column ASC/DESC;         <span className="text-slate-500">-- Sort results (optional)</span>
          </p>
        </div>

        {/* 4 Clause Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-xl border border-blue-200 bg-blue-50/60 text-start flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono font-bold text-xs">SELECT</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Specifies which columns appear in your result. Use <code className="font-mono text-blue-700 font-bold">*</code> for all columns (avoid in production).
            </p>
          </div>

          <div className="p-3 rounded-xl border border-cyan-200 bg-cyan-50/60 text-start flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-teal-600 text-white font-mono font-bold text-xs">FROM</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Names the table you're querying. The database engine reads and extracts stored records from here.
            </p>
          </div>

          <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/60 text-start flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-mono font-bold text-xs">WHERE</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Filters rows before returning them. Only rows matching the boolean condition are included in output.
            </p>
          </div>

          <div className="p-3 rounded-xl border border-orange-200 bg-orange-50/60 text-start flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-mono font-bold text-xs">ORDER BY</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Sorts the final result set. <code className="font-mono text-orange-700 font-bold">ASC</code> = ascending (default), <code className="font-mono text-orange-700 font-bold">DESC</code> = descending.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04: SELECT * VS SPECIFIC COLUMNS
  // =========================================================
  if (slide.id === 4) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {/* Avoid in Production */}
          <div className="p-3.5 rounded-2xl bg-white border-2 border-red-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span>SELECT * (Avoid in Production)</span>
              </div>

              <div className="p-2 bg-slate-950 text-slate-100 rounded-xl font-mono text-xs mb-2.5">
                <span className="text-cyan-400 font-bold">SELECT</span> * <span className="text-blue-400 font-bold">FROM</span> Students;
              </div>

              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-1.5"><span className="text-red-500 font-bold">•</span><span><strong>Returns ALL columns</strong> — transfers unnecessary data</span></li>
                <li className="flex items-start gap-1.5"><span className="text-red-500 font-bold">•</span><span><strong>Slower execution</strong> — wastes RAM and network bandwidth</span></li>
                <li className="flex items-start gap-1.5"><span className="text-red-500 font-bold">•</span><span><strong>Fragile application code</strong> — breaks apps if order changes</span></li>
                <li className="flex items-start gap-1.5"><span className="text-red-500 font-bold">•</span><span><strong>Harder to read results</strong> — clutters client reports</span></li>
                <li className="flex items-start gap-1.5"><span className="text-red-500 font-bold">•</span><span><strong>Security risk</strong> — may leak private columns</span></li>
              </ul>
            </div>
          </div>

          {/* SELECT Specific Columns */}
          <div className="p-3.5 rounded-2xl bg-white border-2 border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>SELECT Specific Columns (Best Practice)</span>
              </div>

              <div className="p-2 bg-slate-950 text-slate-100 rounded-xl font-mono text-xs mb-2.5">
                <span className="text-cyan-400 font-bold">SELECT</span> StudentID, StudentName, Email, City<br />
                <span className="text-blue-400 font-bold">FROM</span> Students;
              </div>

              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">•</span><span><strong>Returns only what you need</strong> — lean and focused</span></li>
                <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">•</span><span><strong>Faster & efficient</strong> — minimum data transferred</span></li>
                <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">•</span><span><strong>Explicit and readable</strong> — colleagues see required fields</span></li>
                <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">•</span><span><strong>Safer</strong> — prevents accidental sensitive data leaks</span></li>
                <li className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">•</span><span><strong>Industry standard</strong> — required in all clean SQL</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exception Callout */}
        <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
          <span><strong>Exception:</strong> Use <code className="font-mono font-bold">SELECT *</code> only during quick exploratory queries in dev/test — never in production backends.</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: THE WHERE CLAUSE — FILTERING ROWS
  // =========================================================
  if (slide.id === 5) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-2 p-1 text-start">
        {/* Top Split: What is WHERE vs Execution Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold text-blue-600 flex items-center gap-1.5 mb-1">
              <Filter className="w-3.5 h-3.5" /> What is WHERE?
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              The <code className="font-mono text-blue-700 font-bold">WHERE</code> clause filters rows returned by a SELECT statement. Only rows that satisfy the boolean condition are included in the result.
            </p>
            <div className="mt-1.5 p-1.5 bg-slate-900 text-slate-200 font-mono text-[11px] rounded-lg">
              <span className="text-cyan-400">SELECT</span> column1, column2... <span className="text-blue-400">FROM</span> TableName <span className="text-emerald-400">WHERE</span> condition;
            </div>
          </div>

          <div className="p-3 bg-slate-900 text-white rounded-xl border border-slate-800 shadow-sm flex flex-col justify-between">
            <h4 className="text-xs font-bold text-orange-400 mb-0.5">SQL Execution Order</h4>
            <div className="space-y-0.5 text-xs font-mono">
              <div className="flex items-center gap-2 text-cyan-300">
                <span className="w-3.5 h-3.5 rounded-full bg-cyan-900 border border-cyan-500/40 text-[9px] flex items-center justify-center font-bold">1</span>
                <span>FROM → (identify source table)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 font-bold">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-900 border border-emerald-500/40 text-[9px] flex items-center justify-center font-bold">2</span>
                <span>WHERE → (filter individual rows)</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <span className="w-3.5 h-3.5 rounded-full bg-blue-900 border border-blue-500/40 text-[9px] flex items-center justify-center font-bold">3</span>
                <span>SELECT → (pick specified columns)</span>
              </div>
              <div className="flex items-center gap-2 text-orange-300">
                <span className="w-3.5 h-3.5 rounded-full bg-orange-900 border border-orange-500/40 text-[9px] flex items-center justify-center font-bold">4</span>
                <span>ORDER BY → (sort final result set)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Query Examples */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-[11px] font-bold text-slate-700 block mb-1">Ex 1 — Active Students</span>
            <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[10px] rounded-lg leading-relaxed">
              <span className="text-cyan-400">SELECT</span> StudentID, City<br/>
              <span className="text-blue-400">FROM</span> Students<br/>
              <span className="text-emerald-400">WHERE</span> Status = <span className="text-amber-300">'Active'</span>;
            </div>
          </div>

          <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-[11px] font-bold text-slate-700 block mb-1">Ex 2 — Price &gt; 3,000 EGP</span>
            <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[10px] rounded-lg leading-relaxed">
              <span className="text-cyan-400">SELECT</span> CourseName, Price<br/>
              <span className="text-blue-400">FROM</span> Courses<br/>
              <span className="text-emerald-400">WHERE</span> Price &gt; 3000;
            </div>
          </div>

          <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-[11px] font-bold text-slate-700 block mb-1">Ex 3 — Enrolled in 2024</span>
            <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[10px] rounded-lg leading-relaxed">
              <span className="text-cyan-400">SELECT</span> StudentName, EnrollDate<br/>
              <span className="text-blue-400">FROM</span> Students<br/>
              <span className="text-emerald-400">WHERE</span> EnrollDate &gt;= <span className="text-amber-300">'2024-01-01'</span>;
            </div>
          </div>
        </div>

        {/* Key Rules */}
        <div className="p-2 rounded-xl bg-orange-50 border border-orange-200 text-[11px] text-orange-950 flex items-center gap-2 font-mono">
          <AlertTriangle className="w-3.5 h-3.5 text-orange-600 shrink-0" />
          <span>Text requires quotes <code className="text-orange-700 font-bold">'Active'</code> | Numbers no quotes <code className="text-orange-700 font-bold">Price &gt; 3000</code> | Dates use <code className="text-orange-700 font-bold">'YYYY-MM-DD'</code></span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 06: LOGICAL OPERATORS — AND, OR, NOT
  // =========================================================
  if (slide.id === 6) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-2.5 p-1 text-start">
        {/* 3 Operators Headers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-xl border border-blue-200 bg-white shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-blue-100">
              <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono font-bold text-xs">AND</span>
              <span className="text-[10px] text-slate-500 uppercase font-semibold">ALL must be TRUE</span>
            </div>
            <div className="text-[10px] font-mono text-slate-600 space-y-0.5 my-1">
              <div>TRUE AND TRUE → <span className="text-emerald-600 font-bold">TRUE ✓</span></div>
              <div>TRUE AND FALSE → <span className="text-red-500 font-bold">FALSE ✗</span></div>
            </div>
            <div className="p-1.5 bg-slate-950 text-slate-200 font-mono text-[10px] rounded-lg mt-0.5">
              <span className="text-cyan-400">WHERE</span> Status = <span className="text-amber-300">'Active'</span><br/>
              <span className="text-blue-400">AND</span> City = <span className="text-amber-300">'Cairo'</span>;
            </div>
          </div>

          <div className="p-2.5 rounded-xl border border-orange-200 bg-white shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-orange-100">
              <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-mono font-bold text-xs">OR</span>
              <span className="text-[10px] text-slate-500 uppercase font-semibold">At least ONE TRUE</span>
            </div>
            <div className="text-[10px] font-mono text-slate-600 space-y-0.5 my-1">
              <div>TRUE OR FALSE → <span className="text-emerald-600 font-bold">TRUE ✓</span></div>
              <div>FALSE OR FALSE → <span className="text-red-500 font-bold">FALSE ✗</span></div>
            </div>
            <div className="p-1.5 bg-slate-950 text-slate-200 font-mono text-[10px] rounded-lg mt-0.5">
              <span className="text-cyan-400">WHERE</span> Source = <span className="text-amber-300">'Social Media'</span><br/>
              <span className="text-orange-400">OR</span> Source = <span className="text-amber-300">'Email'</span>;
            </div>
          </div>

          <div className="p-2.5 rounded-xl border border-rose-200 bg-white shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-rose-100">
              <span className="px-2 py-0.5 rounded bg-rose-700 text-white font-mono font-bold text-xs">NOT</span>
              <span className="text-[10px] text-slate-500 uppercase font-semibold">REVERSES condition</span>
            </div>
            <div className="text-[10px] font-mono text-slate-600 space-y-0.5 my-1">
              <div>NOT TRUE → <span className="text-red-500 font-bold">FALSE ✗</span></div>
              <div>NOT FALSE → <span className="text-emerald-600 font-bold">TRUE ✓</span></div>
            </div>
            <div className="p-1.5 bg-slate-950 text-slate-200 font-mono text-[10px] rounded-lg mt-0.5">
              <span className="text-cyan-400">WHERE NOT</span> EnrollStatus = <span className="text-amber-300">'Pending'</span>;<br/>
              <span className="text-slate-500">-- Same as: WHERE EnrollStatus &lt;&gt; 'Pending'</span>
            </div>
          </div>
        </div>

        {/* Combining AND + OR with parentheses */}
        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mb-1">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" /> Combining AND + OR — Always Use Parentheses!
          </span>
          <div className="p-2 bg-slate-950 text-slate-200 font-mono text-xs rounded-lg">
            <span className="text-cyan-400">SELECT</span> StudentName, City, Status <span className="text-blue-400">FROM</span> Students<br/>
            <span className="text-emerald-400">WHERE</span> Status = <span className="text-amber-300">'Active'</span> <span className="text-blue-400">AND</span> (<span className="text-orange-400">City = 'Cairo' OR City = 'Alexandria'</span>);
          </div>
        </div>

        {/* Precedence Banner */}
        <div className="p-2 rounded-xl bg-slate-900 text-white text-[11px] flex items-center gap-2 font-mono">
          <span className="text-amber-400 font-bold">Precedence:</span>
          <span>SQL evaluates <code className="text-rose-400">NOT</code> first, then <code className="text-blue-400">AND</code>, then <code className="text-orange-400">OR</code>. Always use parentheses <code className="text-emerald-400">()</code> to guarantee intended logic.</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 07: BETWEEN AND IN — RANGE AND LIST FILTERING
  // =========================================================
  if (slide.id === 7) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* BETWEEN */}
          <div className="p-3.5 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 pb-1 border-b border-blue-100">
                <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono font-bold text-xs">BETWEEN</span>
                <span className="text-xs text-slate-700 font-bold">Inclusive Range Filter</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">
                Returns rows where value falls within range (inclusive of both endpoints).
              </p>

              <div className="space-y-1.5">
                <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[11px] rounded-lg">
                  <span className="text-slate-500">-- Price between 1000 and 5000 EGP</span><br/>
                  <span className="text-cyan-400">SELECT</span> CourseName, Price <span className="text-blue-400">FROM</span> Courses<br/>
                  <span className="text-emerald-400">WHERE</span> Price <span className="text-blue-400 font-bold">BETWEEN</span> 1000 <span className="text-blue-400 font-bold">AND</span> 5000;
                </div>

                <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[11px] rounded-lg">
                  <span className="text-slate-500">-- Students enrolled in Q1 2024</span><br/>
                  <span className="text-cyan-400">SELECT</span> StudentName, EnrollDate <span className="text-blue-400">FROM</span> Students<br/>
                  <span className="text-emerald-400">WHERE</span> EnrollDate <span className="text-blue-400 font-bold">BETWEEN</span> <span className="text-amber-300">'2024-01-01'</span> <span className="text-blue-400 font-bold">AND</span> <span className="text-amber-300">'2024-03-31'</span>;
                </div>
              </div>
            </div>

            <div className="mt-2 p-1.5 bg-blue-50 text-[10px] text-blue-900 rounded-lg border border-blue-100 font-mono">
              <strong>Tip:</strong> BETWEEN is INCLUSIVE — includes both 1000 and 5000 endpoints.
            </div>
          </div>

          {/* IN */}
          <div className="p-3.5 rounded-2xl bg-white border border-orange-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 pb-1 border-b border-orange-100">
                <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-mono font-bold text-xs">IN</span>
                <span className="text-xs text-slate-700 font-bold">List Membership Filter</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">
                Returns rows where value matches ANY item in list. Much cleaner than multiple ORs.
              </p>

              <div className="space-y-1.5">
                <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[11px] rounded-lg">
                  <span className="text-slate-500">-- Students from specific cities</span><br/>
                  <span className="text-cyan-400">SELECT</span> StudentName, City <span className="text-blue-400">FROM</span> Students<br/>
                  <span className="text-emerald-400">WHERE</span> City <span className="text-orange-400 font-bold">IN</span> (<span className="text-amber-300">'Cairo', 'Alex', 'Giza'</span>);
                </div>

                <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[11px] rounded-lg">
                  <span className="text-slate-500">-- Leads with specific statuses</span><br/>
                  <span className="text-cyan-400">SELECT</span> LeadName, Status <span className="text-blue-400">FROM</span> Leads<br/>
                  <span className="text-emerald-400">WHERE</span> Status <span className="text-orange-400 font-bold">IN</span> (<span className="text-amber-300">'New', 'Interested'</span>);
                </div>
              </div>
            </div>

            <div className="mt-2 p-1.5 bg-emerald-50 text-[10px] text-emerald-900 rounded-lg border border-emerald-200 font-mono">
              <strong>Clean SQL:</strong> <code className="text-emerald-700">WHERE City IN ('Cairo','Alex')</code> replaces lengthy OR chains.
            </div>
          </div>
        </div>

        {/* Exclusion Banner */}
        <div className="p-2 rounded-xl bg-slate-900 text-white text-xs flex items-center justify-between font-mono">
          <span><strong className="text-rose-400">Exclusion with NOT:</strong> <code className="text-yellow-300">WHERE Price NOT BETWEEN 1000 AND 5000</code> &nbsp;|&nbsp; <code className="text-yellow-300">WHERE City NOT IN ('Cairo', 'Alex')</code></span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 08: LIKE — PATTERN MATCHING WITH WILDCARDS (INTERACTIVE)
  // =========================================================
  if (slide.id === 8) {
    const demoItems = [
      { name: 'Mohamed Ali', email: 'm.ali@gmail.com', course: 'Data Analysis Track', code: 'SA1042' },
      { name: 'Mona Youssef', email: 'mona@yahoo.com', course: 'Advanced SQL Masterclass', code: 'SA9821' },
      { name: 'Ahmed Hassan', email: 'ahmed@gmail.com', course: 'Python for Data Science', code: 'PY2031' },
      { name: 'Sara Kamel', email: 'sara@academy.org', course: 'Excel Analytics Pro', code: 'EX4011' }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-2.5 p-1 text-start">
        {/* Wildcards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div className="p-2.5 rounded-xl border border-blue-200 bg-white shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-300 text-blue-600 flex items-center justify-center font-mono font-bold text-xl shrink-0">
              %
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Percent Sign (%) — Multi-character Wildcard</h4>
              <p className="text-[11px] text-slate-600">Matches <strong>zero or more</strong> characters (e.g. <code>'A%'</code> starts with A, <code>'%SQL%'</code> contains SQL)</p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl border border-orange-200 bg-white shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-300 text-orange-600 flex items-center justify-center font-mono font-bold text-xl shrink-0">
              _
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Underscore (_) — Single-character Wildcard</h4>
              <p className="text-[11px] text-slate-600">Matches <strong>exactly ONE</strong> character (e.g. <code>'_ohamed'</code>, <code>'SA____'</code> = SA + 4 chars)</p>
            </div>
          </div>
        </div>

        {/* Interactive Query Tester */}
        <div className="p-3 rounded-xl bg-slate-950 text-white font-mono text-xs border border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800 text-[11px]">
            <span className="text-slate-400">Test Pattern on Sample Dataset:</span>
            <div className="flex items-center gap-1.5">
              {['Mo%', '%Data%', '%@gmail.com', 'SA____'].map((pat) => (
                <button
                  key={pat}
                  onClick={() => setLikeSearch(pat)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                    likeSearch === pat ? 'bg-orange-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {pat}
                </button>
              ))}
            </div>
          </div>

          <div className="py-2 text-[11px]">
            <span className="text-cyan-400">SELECT</span> * <span className="text-blue-400">FROM</span> Records <span className="text-emerald-400">WHERE</span> Value <span className="text-blue-400 font-bold">LIKE</span> <span className="text-amber-300">'{likeSearch}'</span>;
          </div>

          {/* Sample results grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-sans text-[11px]">
            {demoItems.map((item, idx) => {
              let isMatch = false;
              if (likeSearch === 'Mo%') isMatch = item.name.startsWith('Mo');
              else if (likeSearch === '%Data%') isMatch = item.course.includes('Data');
              else if (likeSearch === '%@gmail.com') isMatch = item.email.endsWith('@gmail.com');
              else if (likeSearch === 'SA____') isMatch = item.code.startsWith('SA') && item.code.length === 6;

              return (
                <div 
                  key={idx} 
                  className={`p-2 rounded-lg border transition-all ${
                    isMatch ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200' : 'bg-slate-900 border-slate-800 text-slate-400 opacity-60'
                  }`}
                >
                  <div className="font-bold text-xs truncate">{item.name}</div>
                  <div className="text-[10px] truncate opacity-90">{item.email}</div>
                  <div className="text-[10px] truncate text-amber-300/80">{item.course}</div>
                  <div className="text-[9px] font-mono mt-0.5">{item.code} {isMatch && '✓ Match'}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Note */}
        <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center gap-2">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span><strong>Performance Note:</strong> Leading wildcards like <code className="font-mono font-bold text-red-600">'%SQL'</code> cannot use B-Tree indexes and scan entire tables. Prefix searches like <code className="font-mono font-bold text-emerald-700">'SQL%'</code> utilize index seeks.</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 09: NULL VALUES — UNDERSTANDING MISSING DATA (COMPACT FIT)
  // =========================================================
  if (slide.id === 9) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-2 p-1 text-start">
        {/* Top 2 Cards: What is NULL vs The Trap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
            <h4 className="text-xs font-bold text-blue-600 flex items-center gap-1.5 mb-1">
              <HelpCircle className="w-3.5 h-3.5" /> What is NULL?
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed mb-1.5">
              <code className="font-mono text-rose-600 font-bold">NULL</code> means <strong>UNKNOWN</strong> or <strong>MISSING</strong>. It is NOT zero (0), NOT empty string (''), and NOT false.
            </p>
            <ul className="text-[11px] text-slate-600 space-y-0.5">
              <li>• Student with no NationalID entered yet</li>
              <li>• Lead with no marketing campaign assigned</li>
              <li>• Attendance record with no notes recorded</li>
            </ul>
          </div>

          <div className="p-3 bg-rose-50/70 border border-rose-200 rounded-xl shadow-xs">
            <h4 className="text-xs font-bold text-rose-700 flex items-center gap-1.5 mb-1">
              <AlertTriangle className="w-3.5 h-3.5" /> The NULL Trap
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed mb-1.5">
              You <strong>CANNOT</strong> compare NULL with <code className="font-mono font-bold">=</code> or <code className="font-mono font-bold">&lt;&gt;</code>. These always return UNKNOWN (neither TRUE nor FALSE):
            </p>
            <div className="p-1.5 bg-slate-950 text-slate-200 font-mono text-[10px] rounded-lg space-y-0.5">
              <div className="text-red-400">✗ WHERE NationalID = NULL <span className="text-slate-500">-- returns 0 rows always!</span></div>
              <div className="text-emerald-400">✓ WHERE NationalID IS NULL <span className="text-slate-500">-- CORRECT</span></div>
            </div>
          </div>
        </div>

        {/* IS NULL / COALESCE / ISNULL Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div className="p-2.5 bg-slate-950 text-slate-200 font-mono text-xs rounded-xl shadow-xs">
            <span className="text-cyan-400 font-bold block mb-1">IS NULL & IS NOT NULL:</span>
            <span className="text-slate-500 text-[10px]">-- Find students with no NationalID</span><br/>
            <span className="text-cyan-400">SELECT</span> StudentName, NationalID <span className="text-blue-400">FROM</span> Students<br/>
            <span className="text-emerald-400">WHERE</span> NationalID <span className="text-blue-400 font-bold">IS NULL</span>;<br/><br/>
            <span className="text-slate-500 text-[10px]">-- Find leads assigned to a campaign</span><br/>
            <span className="text-cyan-400">SELECT</span> LeadName, CampaignID <span className="text-blue-400">FROM</span> Leads<br/>
            <span className="text-emerald-400">WHERE</span> CampaignID <span className="text-blue-400 font-bold">IS NOT NULL</span>;
          </div>

          <div className="p-2.5 bg-slate-950 text-slate-200 font-mono text-xs rounded-xl shadow-xs">
            <span className="text-orange-400 font-bold block mb-1">ISNULL() & COALESCE():</span>
            <span className="text-slate-500 text-[10px]">-- Replace NULL with default value</span><br/>
            <span className="text-cyan-400">SELECT</span> StudentName,<br/>
            &nbsp;&nbsp;<span className="text-yellow-400">ISNULL</span>(NationalID, <span className="text-amber-300">'Not Provided'</span>) <span className="text-blue-400">AS</span> NationalID<br/>
            <span className="text-blue-400">FROM</span> Students;<br/><br/>
            <span className="text-slate-500 text-[10px]">-- COALESCE: returns first non-NULL value</span><br/>
            <span className="text-cyan-400">SELECT</span> LeadName, <span className="text-yellow-400">COALESCE</span>(CampaignID, AgentID, 0) <span className="text-blue-400">AS</span> AssignedTo <span className="text-blue-400">FROM</span> Leads;
          </div>
        </div>

        {/* Calculations with NULL Banner */}
        <div className="p-2 rounded-xl bg-slate-900 text-slate-200 text-[11px] font-mono flex items-center justify-between border border-slate-800">
          <span><strong className="text-yellow-400">Calculations:</strong> NULL + 10 = <span className="text-rose-400">NULL</span> &nbsp;|&nbsp; SUM() ignores NULLs &nbsp;|&nbsp; COUNT(*) counts all rows, COUNT(col) skips NULLs</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 10: ORDER BY — SORTING QUERY RESULTS (INTERACTIVE SORT)
  // =========================================================
  if (slide.id === 10) {
    const rawDemo = [
      { name: 'SQL Analysis', price: 4000, date: '2024-01-15' },
      { name: 'Python Basics', price: 2500, date: '2024-03-01' },
      { name: 'Power BI Master', price: 5000, date: '2024-02-10' },
      { name: 'Excel Formulas', price: 1500, date: '2024-04-05' }
    ];

    const sortedDemo = [...rawDemo].sort((a, b) => {
      let comp = 0;
      if (sortField === 'price') comp = a.price - b.price;
      else if (sortField === 'name') comp = a.name.localeCompare(b.name);
      else if (sortField === 'date') comp = a.date.localeCompare(b.date);
      return sortDir === 'ASC' ? comp : -comp;
    });

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-2.5 p-1 text-start">
        {/* Top Controls: Interactive Sorter */}
        <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Sort By:</span>
            {(['price', 'name', 'date'] as const).map(f => (
              <button
                key={f}
                onClick={() => setSortField(f)}
                className={`px-2.5 py-1 rounded text-xs font-bold font-mono transition-colors cursor-pointer ${
                  sortField === f ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Direction:</span>
            {(['ASC', 'DESC'] as const).map(d => (
              <button
                key={d}
                onClick={() => setSortDir(d)}
                className={`px-2.5 py-1 rounded text-xs font-bold font-mono transition-colors cursor-pointer ${
                  sortDir === d ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {d === 'ASC' ? 'ASC (A→Z, 1→100)' : 'DESC (Z→A, 100→1)'}
              </button>
            ))}
          </div>
        </div>

        {/* Live Sorted Result Table */}
        <div className="p-3 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs border border-slate-800 shadow-md">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px]">
            <span className="text-cyan-400">
              SELECT CourseName, Price, EnrollDate FROM Courses <span className="text-orange-400 font-bold">ORDER BY {sortField} {sortDir}</span>;
            </span>
          </div>

          <table className="w-full text-xs font-mono mt-2">
            <thead>
              <tr className="text-slate-400 border-b border-slate-800 text-start">
                <th className="p-1">CourseName</th>
                <th className="p-1">Price (EGP)</th>
                <th className="p-1">EnrollDate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {sortedDemo.map((row) => (
                <tr key={row.name} className="hover:bg-slate-900/60 transition-colors">
                  <td className="p-1.5 font-bold text-white">{row.name}</td>
                  <td className="p-1.5 text-emerald-400 font-bold">{row.price.toLocaleString()}</td>
                  <td className="p-1.5 text-slate-400">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tip */}
        <div className="p-2 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center gap-2 font-mono">
          <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
          <span><strong>Pro Tip:</strong> You can ORDER BY a column not listed in SELECT. SQL sorts by it internally without displaying it.</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 11: TOP AND DISTINCT
  // =========================================================
  if (slide.id === 11) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* TOP */}
          <div className="p-3.5 rounded-2xl bg-white border border-blue-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 pb-1 border-b border-blue-100">
                <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono font-bold text-xs">TOP N</span>
                <span className="text-xs text-slate-700 font-bold">Return First N Rows</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">
                Use TOP to limit results to the first N rows (always pair with ORDER BY for deterministic results).
              </p>

              <div className="space-y-1.5">
                <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[11px] rounded-lg">
                  <span className="text-slate-500">-- Top 5 most expensive courses</span><br/>
                  <span className="text-cyan-400">SELECT TOP</span> 5 CourseName, Price <span className="text-blue-400">FROM</span> Courses<br/>
                  <span className="text-orange-400">ORDER BY</span> Price <span className="text-yellow-400">DESC</span>;
                </div>

                <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[11px] rounded-lg">
                  <span className="text-slate-500">-- Top 10% highest payments</span><br/>
                  <span className="text-cyan-400">SELECT TOP</span> 10 <span className="text-yellow-400">PERCENT</span> Amount, Method <span className="text-blue-400">FROM</span> Payments<br/>
                  <span className="text-orange-400">ORDER BY</span> Amount <span className="text-yellow-400">DESC</span>;
                </div>
              </div>
            </div>

            <div className="mt-2 p-1.5 bg-amber-50 text-[10px] text-amber-900 rounded-lg border border-amber-200 font-mono">
              <strong>Remember:</strong> TOP without ORDER BY yields arbitrary non-reproducible rows!
            </div>
          </div>

          {/* DISTINCT */}
          <div className="p-3.5 rounded-2xl bg-white border border-orange-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 pb-1 border-b border-orange-100">
                <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-mono font-bold text-xs">DISTINCT</span>
                <span className="text-xs text-slate-700 font-bold">Remove Duplicate Rows</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">
                Removes duplicate rows from query results, showing each unique value or combination only once.
              </p>

              <div className="space-y-1.5">
                <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[11px] rounded-lg">
                  <span className="text-slate-500">-- What cities do students come from?</span><br/>
                  <span className="text-cyan-400">SELECT DISTINCT</span> City <span className="text-blue-400">FROM</span> Students<br/>
                  <span className="text-orange-400">ORDER BY</span> City;
                </div>

                <div className="p-2 bg-slate-950 text-slate-200 font-mono text-[11px] rounded-lg">
                  <span className="text-slate-500">-- Distinct payment methods used</span><br/>
                  <span className="text-cyan-400">SELECT DISTINCT</span> Method, Status <span className="text-blue-400">FROM</span> Payments;
                </div>
              </div>
            </div>

            <div className="mt-2 p-1.5 bg-emerald-50 text-[10px] text-emerald-900 rounded-lg border border-emerald-200 font-mono">
              <strong>Combine Both:</strong> <code className="text-emerald-700">SELECT DISTINCT TOP 5 City FROM Students WHERE Status = 'Active' ORDER BY City;</code>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 12: PUTTING IT ALL TOGETHER — COMPLEX QUERIES (INTERACTIVE TABS, 0 OVERFLOW)
  // =========================================================
  if (slide.id === 12) {
    const scenarios = [
      {
        id: 0,
        title: 'Business Q1: Active Cairo Students in 2024',
        icon: Users,
        color: 'text-blue-600 border-blue-500',
        query: `SELECT StudentName, City, EnrollDate, Status\nFROM Students\nWHERE Status = 'Active'\n  AND City = 'Cairo'\n  AND EnrollDate BETWEEN '2024-01-01' AND '2024-12-31'\nORDER BY StudentName ASC;`,
        results: [
          { c1: 'Ahmed Hassan', c2: 'Cairo', c3: '2024-02-14', c4: 'Active' },
          { c1: 'Karim Fouad', c2: 'Cairo', c3: '2024-05-20', c4: 'Active' },
          { c1: 'Sara Mahmoud', c2: 'Cairo', c3: '2024-08-11', c4: 'Active' }
        ],
        headers: ['StudentName', 'City', 'EnrollDate', 'Status']
      },
      {
        id: 1,
        title: 'Business Q2: Top 5 Paid Payments > 2,000 EGP',
        icon: DollarSign,
        color: 'text-orange-600 border-orange-500',
        query: `SELECT TOP 5 EnrollmentID, Amount, Method, PaymentDate\nFROM Payments\nWHERE Status = 'Paid'\n  AND Amount > 2000\n  AND Method IN ('Credit Card', 'Cash')\nORDER BY Amount DESC;`,
        results: [
          { c1: '1042', c2: 'EGP 8,500', c3: 'Credit Card', c4: '2024-03-12' },
          { c1: '1089', c2: 'EGP 6,200', c3: 'Cash', c4: '2024-04-01' },
          { c1: '1105', c2: 'EGP 4,800', c3: 'Credit Card', c4: '2024-02-18' }
        ],
        headers: ['EnrollID', 'Amount', 'Method', 'PaymentDate']
      },
      {
        id: 2,
        title: 'Business Q3: Leads with Incomplete Information',
        icon: AlertTriangle,
        color: 'text-purple-600 border-purple-500',
        query: `SELECT LeadName, Source, Status\nFROM Leads\nWHERE CampaignID IS NULL\n   OR Email NOT LIKE '%@%'\nORDER BY CreatedDate DESC;`,
        results: [
          { c1: 'Maged Yasser', c2: 'Direct Referral', c3: 'New', c4: 'No Campaign' },
          { c1: 'Nour Samir', c2: 'Cold Call', c3: 'Follow-Up', c4: 'Invalid Email' },
          { c1: 'Tamer Adel', c2: 'Walk-in', c3: 'Interested', c4: 'No Campaign' }
        ],
        headers: ['LeadName', 'Source', 'Status', 'Issue Type']
      }
    ];

    const currentScenario = scenarios[slide12Tab];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-2.5 p-1 text-start">
        {/* Interactive Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
          {scenarios.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setSlide12Tab(idx)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                slide12Tab === idx 
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-300' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <s.icon className="w-3.5 h-3.5" />
              <span>{s.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Content of Selected Scenario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* Query Block */}
          <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-xl border border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                <span className="font-bold text-white">{currentScenario.title}</span>
                <span className="text-[10px] text-emerald-400">Ready to execute</span>
              </div>
              <pre className="text-cyan-300 whitespace-pre-wrap leading-relaxed">{currentScenario.query}</pre>
            </div>

            <div className="mt-2 pt-2 border-t border-slate-900 text-[10px] text-slate-400 font-sans">
              Combines: <code className="text-yellow-300 font-mono">WHERE</code>, <code className="text-yellow-300 font-mono">AND/OR</code>, <code className="text-yellow-300 font-mono">ORDER BY</code>
            </div>
          </div>

          {/* Result Table Preview */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase mb-2 flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-blue-600" /> Query Output Preview (Top Matching Rows)
              </h4>

              <table className="w-full text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 border-b">
                    {currentScenario.headers.map(h => <th key={h} className="p-1.5 text-start text-[11px]">{h}</th>)}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {currentScenario.results.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-1.5 font-bold text-slate-900">{r.c1}</td>
                      <td className="p-1.5 text-slate-600">{r.c2}</td>
                      <td className="p-1.5 font-bold text-blue-700">{r.c3}</td>
                      <td className="p-1.5 text-emerald-700">{r.c4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-2 bg-blue-50/80 rounded-lg border border-blue-200/80 text-[11px] text-blue-900 font-sans">
              <strong>Execution Note:</strong> Filter is executed on database server disk, returning only lean data across the network connection.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 13: COMMON MISTAKES & PRO TIPS (TABLE)
  // =========================================================
  if (slide.id === 13) {
    const mistakes = [
      { wrong: "WHERE NationalID = NULL", right: "WHERE NationalID IS NULL", note: "= NULL always returns 0 rows (three-valued logic)" },
      { wrong: "WHERE Price = '3000'", right: "WHERE Price = 3000", note: "Numbers do NOT use quotes; causes implicit conversion" },
      { wrong: "WHERE Status = active", right: "WHERE Status = 'Active'", note: "Strings must be wrapped in single quotes" },
      { wrong: "WHERE City = 'Cairo' OR City = 'Giza' OR City = 'Alex'", right: "WHERE City IN ('Cairo', 'Giza', 'Alex')", note: "IN operator is cleaner, less prone to logic errors, and faster" },
      { wrong: "ORDER BY without WHERE on large table", right: "Add WHERE to filter rows before sorting", note: "Sorting millions of unfiltered rows consumes immense memory" }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-1.5 p-1 text-start">
        <div className="space-y-1.5 flex-1">
          {mistakes.map((m, idx) => (
            <div key={idx} className="p-2 rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
              <div className="space-y-1 font-mono text-xs flex-1">
                <div className="flex items-center gap-1.5 text-red-600 bg-red-50/70 px-2 py-0.5 rounded border border-red-100">
                  <X className="w-3 h-3 shrink-0" />
                  <span>{m.wrong}</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50/70 px-2 py-0.5 rounded border border-emerald-100 font-bold">
                  <Check className="w-3 h-3 shrink-0" />
                  <span>{m.right}</span>
                </div>
              </div>

              <div className="sm:max-w-xs text-[11px] font-sans text-slate-600 bg-slate-50 p-1.5 rounded-lg border border-slate-200/60">
                <span className="font-bold text-amber-700">!</span> {m.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 14: WHY AGGREGATE? (RAW ROWS TO INSIGHT)
  // =========================================================
  if (slide.id === 14) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {/* Left: Raw Data */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase mb-2">
                <XCircle className="w-4 h-4" /> Raw Data — Not Useful for Decision Makers
              </div>

              <table className="w-full text-xs font-mono text-slate-700 border-collapse mb-2.5">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 border-b">
                    <th className="p-1.5 text-start">EnrollID</th>
                    <th className="p-1.5 text-start">StudentID</th>
                    <th className="p-1.5 text-start">Amount</th>
                    <th className="p-1.5 text-start">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="p-1">1001</td><td>S01</td><td>2500</td><td><span className="text-emerald-600">Paid</span></td></tr>
                  <tr><td className="p-1">1002</td><td>S02</td><td>3200</td><td><span className="text-emerald-600">Paid</span></td></tr>
                  <tr><td className="p-1">1003</td><td>S01</td><td>1800</td><td><span className="text-amber-600">Pending</span></td></tr>
                  <tr><td className="p-1">1004</td><td>S03</td><td>2500</td><td><span className="text-emerald-600">Paid</span></td></tr>
                  <tr><td className="p-1">1005</td><td>S04</td><td>4000</td><td><span className="text-emerald-600">Paid</span></td></tr>
                </tbody>
              </table>

              <p className="text-xs text-slate-500 italic">
                Thousands of raw rows. No immediate totals, no summaries, no insight. You cannot answer "What is our revenue?" by scrolling through rows.
              </p>
            </div>

            <div className="mt-2 p-1.5 bg-amber-50 text-[11px] text-amber-900 rounded-lg border border-amber-200">
              <strong>Core Rule:</strong> Raw data is an <em>INPUT</em> — aggregation turns it into a <em>BUSINESS ANSWER</em>.
            </div>
          </div>

          {/* Right: Aggregated Answers */}
          <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase mb-2.5">
                <CheckCircle2 className="w-4 h-4" /> Aggregated Answers — Immediate Executive Clarity
              </div>

              <div className="space-y-2">
                <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Total Revenue?</span>
                  <span className="text-base font-black text-blue-700 font-mono">EGP 1,234,500</span>
                </div>

                <div className="p-2 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Average Payment?</span>
                  <span className="text-base font-black text-teal-700 font-mono">EGP 3,200</span>
                </div>

                <div className="p-2 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Total Enrollments?</span>
                  <span className="text-base font-black text-purple-700 font-mono">1,842</span>
                </div>

                <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Attendance Rate?</span>
                  <span className="text-base font-black text-amber-700 font-mono">87.3%</span>
                </div>

                <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Leads Converted?</span>
                  <span className="text-base font-black text-emerald-700 font-mono">34.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 15: THE 5 CORE AGGREGATE FUNCTIONS
  // =========================================================
  if (slide.id === 15) {
    const aggs = [
      { name: 'COUNT()', desc: 'Counts rows or non-NULL values', ex: 'COUNT(*) → all rows\nCOUNT(City) → non-null\nCOUNT(DISTINCT City)', color: 'border-blue-400 bg-blue-50/60 text-blue-700' },
      { name: 'SUM()', desc: 'Total sum of numeric column', ex: 'SUM(Amount) → total revenue\nSUM(Price) → total catalog\nSUM(Budget) → marketing', color: 'border-orange-400 bg-orange-50/60 text-orange-700' },
      { name: 'AVG()', desc: 'Arithmetic average of column', ex: 'AVG(Amount) → avg payment\nAVG(Price) → avg price\nAVG(MonthlyTarget)', color: 'border-teal-400 bg-teal-50/60 text-teal-700' },
      { name: 'MIN()', desc: 'Smallest value in column', ex: 'MIN(Price) → cheapest\nMIN(EnrollDate) → 1st date\nMIN(Amount) → min paid', color: 'border-purple-400 bg-purple-50/60 text-purple-700' },
      { name: 'MAX()', desc: 'Largest value in column', ex: 'MAX(Amount) → top payment\nMAX(Price) → flagship\nMAX(HireDate) → newest', color: 'border-rose-400 bg-rose-50/60 text-rose-700' }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-2.5 p-1 text-start">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 flex-1">
          {aggs.map((a) => (
            <div key={a.name} className={`p-2.5 rounded-xl border-2 ${a.color} shadow-xs flex flex-col justify-between text-start`}>
              <div>
                <span className="font-mono font-black text-sm block mb-1">{a.name}</span>
                <p className="text-[11px] text-slate-700 leading-snug mb-1.5 font-medium">{a.desc}</p>
              </div>

              <div className="p-1.5 bg-slate-950 text-slate-200 font-mono text-[9px] rounded-lg whitespace-pre-line leading-relaxed">
                {a.ex}
              </div>
            </div>
          ))}
        </div>

        {/* Warning Callout */}
        <div className="p-2 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-orange-600 shrink-0" />
          <span><strong>Critical Warning:</strong> Aggregate functions <strong>CANNOT</strong> appear in a <code className="font-mono font-bold">WHERE</code> clause — because WHERE filters row-by-row before aggregates are computed. Use <code className="font-mono font-bold text-blue-700">HAVING</code> instead!</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 16: COUNT() — THREE FLAVORS
  // =========================================================
  if (slide.id === 16) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {/* Left: Table & Concepts */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-blue-600 uppercase mb-2">Three Flavors of COUNT</h4>
              <table className="w-full text-xs font-mono border-collapse mb-3">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 border-b">
                    <th className="p-1.5 text-start">Syntax</th>
                    <th className="p-1.5 text-start">What it Counts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="p-1.5 text-blue-600 font-bold">COUNT(*)</td><td className="p-1.5 text-slate-700 font-sans">All rows (including NULLs)</td></tr>
                  <tr><td className="p-1.5 text-emerald-600 font-bold">COUNT(col)</td><td className="p-1.5 text-slate-700 font-sans">Non-NULL values only (skips NULLs)</td></tr>
                  <tr><td className="p-1.5 text-purple-600 font-bold">COUNT(DISTINCT col)</td><td className="p-1.5 text-slate-700 font-sans">Unique non-NULL values only</td></tr>
                </tbody>
              </table>

              <div className="space-y-1 text-xs text-slate-600">
                <span className="font-bold text-slate-800 block mb-0.5">Academy Questions Answered:</span>
                <p>• How many students are in database? → <code className="font-mono text-blue-600">COUNT(*)</code></p>
                <p>• How many active leads does team manage? → <code className="font-mono text-blue-600">COUNT(LeadID) WHERE</code></p>
                <p>• How many distinct cities are students from? → <code className="font-mono text-blue-600">COUNT(DISTINCT City)</code></p>
              </div>
            </div>

            <div className="mt-2 p-1.5 bg-blue-50 text-[10px] text-blue-900 rounded-lg border border-blue-200 font-mono">
              <strong>Rule:</strong> <code className="text-blue-700">COUNT(col)</code> skips NULLs — <code className="text-blue-700">COUNT(*)</code> does not. Use COUNT(*) for total row count.
            </div>
          </div>

          {/* Right: Code Block */}
          <div className="p-3.5 bg-slate-950 text-slate-200 font-mono text-xs rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-2.5">
              <div>
                <span className="text-slate-500 text-[10px]">-- Total students in database</span><br/>
                <span className="text-cyan-400">SELECT COUNT</span>(*) <span className="text-blue-400">AS</span> TotalStudents <span className="text-blue-400">FROM</span> Students;
              </div>

              <div>
                <span className="text-slate-500 text-[10px]">-- Active students only</span><br/>
                <span className="text-cyan-400">SELECT COUNT</span>(*) <span className="text-blue-400">AS</span> ActiveStudents<br/>
                <span className="text-blue-400">FROM</span> Students <span className="text-emerald-400">WHERE</span> Status = <span className="text-amber-300">'Active'</span>;
              </div>

              <div>
                <span className="text-slate-500 text-[10px]">-- Distinct cities where students live</span><br/>
                <span className="text-cyan-400">SELECT COUNT</span>(<span className="text-yellow-400">DISTINCT</span> City) <span className="text-blue-400">AS</span> UniqueCities <span className="text-blue-400">FROM</span> Students;
              </div>

              <div>
                <span className="text-slate-500 text-[10px]">-- Count total leads vs leads with source</span><br/>
                <span className="text-cyan-400">SELECT COUNT</span>(LeadID) <span className="text-blue-400">AS</span> TotalLeads,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">COUNT</span>(Source) <span className="text-blue-400">AS</span> WithSource <span className="text-blue-400">FROM</span> Leads;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 17: SUM() & AVG() — REVENUE & PRICING ANALYSIS
  // =========================================================
  if (slide.id === 17) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {/* SQL Queries */}
          <div className="p-3.5 bg-slate-950 text-slate-200 font-mono text-xs rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-2.5">
              <div>
                <span className="text-slate-500 text-[10px]">-- Full payment summary from Payments table</span><br/>
                <span className="text-cyan-400">SELECT</span><br/>
                &nbsp;&nbsp;<span className="text-yellow-400">SUM</span>(Amount)   <span className="text-blue-400">AS</span> TotalRevenue,<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">AVG</span>(Amount)   <span className="text-blue-400">AS</span> AvgPayment,<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">MIN</span>(Amount)   <span className="text-blue-400">AS</span> MinPayment,<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">MAX</span>(Amount)   <span className="text-blue-400">AS</span> MaxPayment,<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">COUNT</span>(*)      <span className="text-blue-400">AS</span> Transactions<br/>
                <span className="text-blue-400">FROM</span> Payments<br/>
                <span className="text-emerald-400">WHERE</span> Status = <span className="text-amber-300">'Paid'</span>;
              </div>

              <div>
                <span className="text-slate-500 text-[10px]">-- Average course price per category</span><br/>
                <span className="text-cyan-400">SELECT</span> Category, <span className="text-yellow-400">AVG</span>(Price) <span className="text-blue-400">AS</span> AvgPrice<br/>
                <span className="text-blue-400">FROM</span> Courses <span className="text-purple-400">GROUP BY</span> Category;
              </div>
            </div>
          </div>

          {/* Sample Output Cards */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <h4 className="text-xs font-bold text-slate-800 uppercase mb-2">Sample Output — Payments Table Metrics</h4>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white text-center">
                <span className="text-lg font-black font-mono">EGP 1.23M</span>
                <span className="text-[10px] block opacity-90">Total Revenue</span>
              </div>

              <div className="p-2.5 rounded-xl bg-teal-600 text-white text-center">
                <span className="text-lg font-black font-mono">EGP 3,200</span>
                <span className="text-[10px] block opacity-90">Avg Payment</span>
              </div>

              <div className="p-2.5 rounded-xl bg-purple-600 text-white text-center">
                <span className="text-lg font-black font-mono">EGP 500</span>
                <span className="text-[10px] block opacity-90">Min Payment</span>
              </div>

              <div className="p-2.5 rounded-xl bg-orange-600 text-white text-center">
                <span className="text-lg font-black font-mono">EGP 9,800</span>
                <span className="text-[10px] block opacity-90">Max Payment</span>
              </div>
            </div>

            <div className="mt-2 p-2.5 rounded-xl bg-slate-900 text-white text-center font-mono">
              <span className="text-xl font-black">1,842</span>
              <span className="text-xs block text-slate-300">Total Paid Transactions</span>
            </div>

            <div className="mt-1.5 p-1.5 bg-amber-50 text-[10px] text-amber-900 rounded-lg border border-amber-200 font-mono">
              <strong>Rule:</strong> NULL values are automatically excluded from SUM() and AVG().
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 18: GROUP BY — THE BACKBONE OF REPORTING
  // =========================================================
  if (slide.id === 18) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        {/* 4-Stage Flow */}
        <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold">
          <div className="p-2.5 rounded-xl bg-blue-900 text-white flex flex-col items-center justify-center">
            <span>All Rows</span>
            <span className="text-[10px] font-normal opacity-80">(Enrollments)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-cyan-800 text-white flex flex-col items-center justify-center">
            <span>GROUP BY</span>
            <span className="text-[10px] font-normal opacity-80">CourseID</span>
          </div>
          <div className="p-2.5 rounded-xl bg-teal-800 text-white flex flex-col items-center justify-center">
            <span>Aggregate</span>
            <span className="text-[10px] font-normal opacity-80">per Group</span>
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-800 text-white flex flex-col items-center justify-center">
            <span>One Row</span>
            <span className="text-[10px] font-normal opacity-80">per Course</span>
          </div>
        </div>

        {/* Content: Code + Golden Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-2xl border border-slate-800 shadow-md space-y-2.5">
            <div>
              <span className="text-slate-500 text-[10px]">-- Enrollments per course</span><br/>
              <span className="text-cyan-400">SELECT</span> CourseID, <span className="text-yellow-400">COUNT</span>(*) <span className="text-blue-400">AS</span> Enrollments<br/>
              <span className="text-blue-400">FROM</span> Enrollments<br/>
              <span className="text-purple-400 font-bold">GROUP BY</span> CourseID;
            </div>

            <div>
              <span className="text-slate-500 text-[10px]">-- Total revenue per payment method</span><br/>
              <span className="text-cyan-400">SELECT</span> Method,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">COUNT</span>(*) <span className="text-blue-400">AS</span> Transactions,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">SUM</span>(Amount) <span className="text-blue-400">AS</span> Revenue,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">AVG</span>(Amount) <span className="text-blue-400">AS</span> AvgPayment<br/>
              <span className="text-blue-400">FROM</span> Payments<br/>
              <span className="text-purple-400 font-bold">GROUP BY</span> Method<br/>
              <span className="text-orange-400">ORDER BY</span> Revenue <span className="text-yellow-400">DESC</span>;
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <h4 className="text-xs font-bold text-blue-700 uppercase mb-1.5">GROUP BY Golden Rules</h4>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-start gap-1.5"><span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center shrink-0">1</span><span><strong>Every non-aggregated column</strong> in SELECT must appear in GROUP BY.</span></div>
              <div className="flex items-start gap-1.5"><span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center shrink-0">2</span><span>You <strong>CAN group by multiple columns</strong> simultaneously.</span></div>
              <div className="flex items-start gap-1.5"><span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center shrink-0">3</span><span>GROUP BY runs <strong>AFTER WHERE</strong> (filters rows first).</span></div>
              <div className="flex items-start gap-1.5"><span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center shrink-0">4</span><span>Output has <strong>exactly ONE row</strong> per unique group value.</span></div>
              <div className="flex items-start gap-1.5"><span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center shrink-0">5</span><span>Combine with <strong>ORDER BY</strong> to rank summary metrics.</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 19: SQL EXECUTION ORDER — WHAT RUNS WHEN
  // =========================================================
  if (slide.id === 19) {
    const steps = [
      { num: 1, name: 'FROM', desc: 'Identify source tables & apply JOINs', color: 'bg-blue-600' },
      { num: 2, name: 'WHERE', desc: 'Filter individual rows before grouping', color: 'bg-teal-600' },
      { num: 3, name: 'GROUP BY', desc: 'Bucket remaining rows into groups', color: 'bg-purple-600' },
      { num: 4, name: 'HAVING', desc: 'Filter groups using aggregate results', color: 'bg-orange-600' },
      { num: 5, name: 'SELECT', desc: 'Compute expressions & choose output columns', color: 'bg-indigo-600' },
      { num: 6, name: 'ORDER BY', desc: 'Sort the final result set', color: 'bg-emerald-600' }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <p className="text-xs text-slate-600 mb-0.5">
          SQL is non-procedural: you write queries in one order, but the database engine executes them in a strict chronological sequence:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 flex-1">
          {steps.map((s) => (
            <div key={s.num} className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`w-6 h-6 rounded-lg ${s.color} text-white font-black text-xs flex items-center justify-center shadow-xs`}>
                  {s.num}
                </span>
                <span className="font-mono font-bold text-xs text-slate-900">{s.name}</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug font-sans">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-2 rounded-xl bg-slate-900 text-white text-xs font-mono flex items-center gap-2 border border-slate-800">
          <span className="text-amber-400 font-bold">Why This Matters:</span>
          <span>WHERE cannot reference aggregates because it runs at Step 2 (before GROUP BY at Step 3). HAVING runs at Step 4, specifically to filter after aggregates exist!</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 20: COMBINING WHERE AND GROUP BY
  // =========================================================
  if (slide.id === 20) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* Query Code */}
          <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-slate-500 text-[10px]">-- Total payments per method (filtered then grouped)</span><br/>
              <span className="text-cyan-400">SELECT</span> Method,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">COUNT</span>(PaymentID) <span className="text-blue-400">AS</span> TotalPayments,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">SUM</span>(Amount)       <span className="text-blue-400">AS</span> TotalRevenue,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">AVG</span>(Amount)       <span className="text-blue-400">AS</span> AvgPayment<br/>
              <span className="text-blue-400">FROM</span> Payments<br/>
              <span className="text-emerald-400 font-bold">WHERE</span> Status = <span className="text-amber-300">'Paid'</span><br/>
              <span className="text-purple-400 font-bold">GROUP BY</span> Method<br/>
              <span className="text-orange-400">ORDER BY</span> TotalRevenue <span className="text-yellow-400">DESC</span>;
            </div>

            <div className="mt-2 p-1.5 bg-slate-900 rounded-xl text-[10px] text-slate-300 border border-slate-800">
              <span className="text-amber-400 font-bold">Execution:</span> 1. Excludes unpaid rows → 2. Groups remaining by Method → 3. Calculates totals → 4. Sorts output.
            </div>
          </div>

          {/* WHERE vs GROUP BY Comparison */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <h4 className="text-xs font-bold text-slate-800 uppercase mb-1.5">WHERE vs GROUP BY vs HAVING</h4>
            <table className="w-full text-xs font-mono border-collapse mb-2">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b">
                  <th className="p-1 text-start">Clause</th>
                  <th className="p-1 text-start">Filters</th>
                  <th className="p-1 text-start">Timing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[11px]">
                <tr><td className="p-1 text-emerald-600 font-bold">WHERE</td><td>Individual rows</td><td>BEFORE grouping</td></tr>
                <tr><td className="p-1 text-purple-600 font-bold">GROUP BY</td><td>Creates groups</td><td>After WHERE</td></tr>
                <tr><td className="p-1 text-orange-600 font-bold">HAVING</td><td>Grouped results</td><td>AFTER aggregation</td></tr>
              </tbody>
            </table>

            <div className="space-y-1 text-xs font-sans text-slate-700">
              <span className="font-bold text-blue-700 block">Quick Decision Drills:</span>
              <p>• Filter students enrolled after 2024? → <code className="font-mono text-emerald-600">WHERE EnrollDate &gt; '2024-01-01'</code></p>
              <p>• Only courses with 50+ enrollments? → <code className="font-mono text-orange-600">HAVING COUNT(*) &gt;= 50</code></p>
              <p>• Exclude cancelled payments first? → <code className="font-mono text-emerald-600">WHERE Status &lt;&gt; 'Cancelled'</code></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 21: HAVING — FILTERING AGGREGATED GROUPS
  // =========================================================
  if (slide.id === 21) {
    const patterns = [
      { title: 'HAVING COUNT(*) > 10', desc: 'Groups with more than 10 rows' },
      { title: 'HAVING SUM(Amount) > 100000', desc: 'Groups with high total revenue' },
      { title: 'HAVING AVG(Price) < 5000', desc: 'Affordable course categories' },
      { title: 'HAVING COUNT(DISTINCT City) >= 3', desc: 'Courses reaching 3+ cities' },
      { title: 'HAVING MIN(Amount) >= 1000', desc: 'All payments in group at least 1,000' },
      { title: 'HAVING MAX(Budget) < 50000', desc: 'Low-spend marketing campaigns only' }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* Queries */}
          <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-2xl border border-slate-800 shadow-md space-y-2.5">
            <div>
              <span className="text-slate-500 text-[10px]">-- Enrollments grouped by status with 30+ students</span><br/>
              <span className="text-cyan-400">SELECT</span> EnrollStatus, <span className="text-yellow-400">COUNT</span>(EnrollmentID) <span className="text-blue-400">AS</span> Total<br/>
              <span className="text-blue-400">FROM</span> Enrollments<br/>
              <span className="text-purple-400">GROUP BY</span> EnrollStatus<br/>
              <span className="text-orange-400 font-bold">HAVING COUNT</span>(EnrollmentID) &gt;= 30<br/>
              <span className="text-orange-400">ORDER BY</span> Total <span className="text-yellow-400">DESC</span>;
            </div>

            <div>
              <span className="text-slate-500 text-[10px]">-- Leads grouped by channel having &gt; 50 leads</span><br/>
              <span className="text-cyan-400">SELECT</span> Source, Status, <span className="text-yellow-400">COUNT</span>(LeadID) <span className="text-blue-400">AS</span> TotalLeads<br/>
              <span className="text-blue-400">FROM</span> Leads<br/>
              <span className="text-purple-400">GROUP BY</span> Source, Status<br/>
              <span className="text-orange-400 font-bold">HAVING COUNT</span>(LeadID) &gt; 50;
            </div>
          </div>

          {/* Common HAVING Patterns */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <h4 className="text-xs font-bold text-orange-700 uppercase mb-1.5">Common HAVING Patterns</h4>
            <div className="space-y-1 flex-1">
              {patterns.map((p, idx) => (
                <div key={idx} className="p-1.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[11px] text-blue-700">{p.title}</span>
                  <span className="text-[10px] text-slate-600 font-sans">{p.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 22: WHERE VS HAVING — KNOW THE DIFFERENCE
  // =========================================================
  if (slide.id === 22) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          <div className="p-3.5 rounded-2xl bg-blue-50/60 border-2 border-blue-300 shadow-sm flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-xs inline-block mb-2.5">WHERE Clause</span>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2"><strong>Filters:</strong> <span>ROWS before grouping</span></li>
                <li className="flex items-start gap-2"><strong>Aggregates:</strong> <span className="text-red-600 font-bold">CANNOT use aggregate functions</span></li>
                <li className="flex items-start gap-2"><strong>Timing:</strong> <span>Runs BEFORE GROUP BY</span></li>
                <li className="flex items-start gap-2"><strong>Scope:</strong> <span>Works on raw column values</span></li>
                <li className="flex items-start gap-2"><strong>Example:</strong> <code className="font-mono bg-blue-100/70 px-1 rounded text-blue-900">WHERE Status = 'Active'</code></li>
              </ul>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-orange-50/60 border-2 border-orange-300 shadow-sm flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-orange-600 text-white font-bold text-xs inline-block mb-2.5">HAVING Clause</span>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2"><strong>Filters:</strong> <span>GROUPS after aggregation</span></li>
                <li className="flex items-start gap-2"><strong>Aggregates:</strong> <span className="text-emerald-700 font-bold">CAN and MUST use aggregate functions</span></li>
                <li className="flex items-start gap-2"><strong>Timing:</strong> <span>Runs AFTER GROUP BY</span></li>
                <li className="flex items-start gap-2"><strong>Scope:</strong> <span>Works on computed group metrics</span></li>
                <li className="flex items-start gap-2"><strong>Example:</strong> <code className="font-mono bg-orange-100/70 px-1 rounded text-orange-900">HAVING COUNT(*) &gt; 50</code></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-slate-900 text-white text-xs font-mono flex items-center justify-between border border-slate-800">
          <span><strong>Synthesis:</strong> Both can coexist: <code className="text-emerald-400">WHERE</code> filters rows first → <code className="text-blue-400">GROUP BY</code> groups → <code className="text-orange-400">HAVING</code> filters groups.</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 23: KPI 1 — TOTAL & MONTHLY REVENUE
  // =========================================================
  if (slide.id === 23) {
    const months = [
      { m: 'Jan', rev: 90000, h: 60 },
      { m: 'Feb', rev: 95000, h: 63 },
      { m: 'Mar', rev: 115000, h: 77 },
      { m: 'Apr', rev: 100000, h: 67 },
      { m: 'May', rev: 130000, h: 87 },
      { m: 'Jun', rev: 125000, h: 83 }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* Query */}
          <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-slate-500 text-[10px]">-- Monthly revenue breakdown query</span><br/>
              <span className="text-cyan-400">SELECT</span><br/>
              &nbsp;&nbsp;<span className="text-yellow-400">YEAR</span>(PaymentDate) <span className="text-blue-400">AS</span> Yr,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">MONTH</span>(PaymentDate) <span className="text-blue-400">AS</span> Mo,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">SUM</span>(Amount) <span className="text-blue-400">AS</span> Revenue,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">COUNT</span>(*) <span className="text-blue-400">AS</span> Transactions<br/>
              <span className="text-blue-400">FROM</span> Payments<br/>
              <span className="text-emerald-400">WHERE</span> Status = <span className="text-amber-300">'Paid'</span><br/>
              <span className="text-purple-400 font-bold">GROUP BY</span> YEAR(PaymentDate), MONTH(PaymentDate)<br/>
              <span className="text-orange-400">ORDER BY</span> Yr, Mo;
            </div>
          </div>

          {/* Revenue Dashboard */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <h4 className="text-xs font-bold text-slate-800 uppercase mb-1.5">Revenue Dashboard</h4>

            <div className="grid grid-cols-2 gap-1.5 mb-2">
              <div className="p-2 rounded-xl bg-blue-600 text-white text-center">
                <span className="text-base font-black font-mono">EGP 1.23M</span>
                <span className="text-[9px] block opacity-90">Total Revenue (YTD)</span>
              </div>
              <div className="p-2 rounded-xl bg-teal-600 text-white text-center">
                <span className="text-base font-black font-mono">EGP 102K</span>
                <span className="text-[9px] block opacity-90">Avg Monthly Revenue</span>
              </div>
              <div className="p-2 rounded-xl bg-purple-600 text-white text-center">
                <span className="text-base font-black font-mono">1,842</span>
                <span className="text-[9px] block opacity-90">Total Transactions</span>
              </div>
              <div className="p-2 rounded-xl bg-orange-600 text-white text-center">
                <span className="text-base font-black font-mono">EGP 3,200</span>
                <span className="text-[9px] block opacity-90">Avg Transaction</span>
              </div>
            </div>

            {/* SVG Bar Chart */}
            <div>
              <span className="text-[10px] font-bold text-slate-700 block mb-1">Monthly Revenue (EGP)</span>
              <div className="flex items-end justify-between gap-1.5 h-20 pt-1 border-b border-l border-slate-300 px-2">
                {months.map((m) => (
                  <div key={m.m} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <div 
                      style={{ height: `${m.h}%` }} 
                      className="w-full bg-blue-600 rounded-t hover:bg-blue-500 transition-all cursor-pointer"
                      title={`${m.m}: EGP ${m.rev.toLocaleString()}`}
                    />
                    <span className="text-[9px] text-slate-600 font-mono">{m.m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 24: KPI 2 — ENROLLMENTS PER COURSE
  // =========================================================
  if (slide.id === 24) {
    const courses = [
      { name: 'SQL Analysis', cat: 'Programming', enroll: 412, rev: 'EGP 824K' },
      { name: 'Power BI', cat: 'Data Science', enroll: 356, rev: 'EGP 712K' },
      { name: 'Excel Analytics', cat: 'Business', enroll: 298, rev: 'EGP 447K' },
      { name: 'Python Data', cat: 'Programming', enroll: 241, rev: 'EGP 482K' }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* Query Code */}
          <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-slate-500 text-[10px]">-- Enrollments grouped by status</span><br/>
              <span className="text-cyan-400">SELECT</span><br/>
              &nbsp;&nbsp;EnrollStatus,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">COUNT</span>(EnrollmentID) <span className="text-blue-400">AS</span> TotalEnrollments,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">MIN</span>(EnrollDate) <span className="text-blue-400">AS</span> FirstEnroll,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">MAX</span>(EnrollDate) <span className="text-blue-400">AS</span> LastEnroll,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">COUNT</span>(<span className="text-cyan-300">DISTINCT</span> CourseID) <span className="text-blue-400">AS</span> CoursesActive<br/>
              <span className="text-blue-400">FROM</span> Enrollments<br/>
              <span className="text-purple-400 font-bold">GROUP BY</span> EnrollStatus<br/>
              <span className="text-orange-400 font-bold">HAVING COUNT</span>(EnrollmentID) &gt; 0<br/>
              <span className="text-orange-400">ORDER BY</span> TotalEnrollments <span className="text-yellow-400">DESC</span>;
            </div>
          </div>

          {/* Sample Output & Distribution */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase mb-1.5">Sample Output — Course Enrollments</h4>
              <table className="w-full text-xs font-mono border-collapse mb-2">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 border-b">
                    <th className="p-1 text-start">Course</th>
                    <th className="p-1 text-start">Category</th>
                    <th className="p-1 text-start">Enrolled</th>
                    <th className="p-1 text-start">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[11px]">
                  {courses.map((c) => (
                    <tr key={c.name}>
                      <td className="p-1 font-bold text-blue-700">{c.name}</td>
                      <td className="p-1 text-slate-600">{c.cat}</td>
                      <td className="p-1 font-bold">{c.enroll}</td>
                      <td className="p-1 text-emerald-700 font-bold">{c.rev}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Donut Category Percentages */}
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold text-slate-700 block mb-1">Enrollments by Category</span>
              <div className="grid grid-cols-4 gap-1 text-center font-mono text-[10px]">
                <div className="p-1 rounded bg-blue-100 text-blue-900 font-bold">Data Science 33%</div>
                <div className="p-1 rounded bg-teal-100 text-teal-900 font-bold">Programming 29%</div>
                <div className="p-1 rounded bg-amber-100 text-amber-900 font-bold">Business 24%</div>
                <div className="p-1 rounded bg-purple-100 text-purple-900 font-bold">Other 14%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 25: KPI 3 — ATTENDANCE COUNT PER COURSE
  // =========================================================
  if (slide.id === 25) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* Query Code */}
          <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-2.5">
              <div>
                <span className="text-slate-500 text-[10px]">-- Attendance summary by status</span><br/>
                <span className="text-cyan-400">SELECT</span> AttendStatus,<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">COUNT</span>(AttendanceID) <span className="text-blue-400">AS</span> TotalRecords,<br/>
                &nbsp;&nbsp;<span className="text-yellow-400">COUNT</span>(<span className="text-cyan-300">DISTINCT</span> EnrollmentID) <span className="text-blue-400">AS</span> UniqueEnrollments<br/>
                <span className="text-blue-400">FROM</span> Attendance<br/>
                <span className="text-purple-400 font-bold">GROUP BY</span> AttendStatus<br/>
                <span className="text-orange-400">ORDER BY</span> TotalRecords <span className="text-yellow-400">DESC</span>;
              </div>

              <div>
                <span className="text-slate-500 text-[10px]">-- Present-only attendance count</span><br/>
                <span className="text-cyan-400">SELECT</span> AttendStatus, <span className="text-yellow-400">COUNT</span>(AttendanceID) <span className="text-blue-400">AS</span> PresentCount<br/>
                <span className="text-blue-400">FROM</span> Attendance <span className="text-emerald-400">WHERE</span> AttendStatus = <span className="text-amber-300">'Present'</span> <span className="text-purple-400 font-bold">GROUP BY</span> AttendStatus;
              </div>
            </div>
          </div>

          {/* Attendance Dashboard */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <h4 className="text-xs font-bold text-slate-800 uppercase mb-1.5">Attendance Dashboard</h4>

            <div className="grid grid-cols-2 gap-1.5 mb-2">
              <div className="p-2 rounded-xl bg-blue-600 text-white text-center">
                <span className="text-base font-black font-mono">9,842</span>
                <span className="text-[9px] block opacity-90">Total Sessions Logged</span>
              </div>
              <div className="p-2 rounded-xl bg-emerald-600 text-white text-center">
                <span className="text-base font-black font-mono">8,591</span>
                <span className="text-[9px] block opacity-90">Present Count (87.3%)</span>
              </div>
              <div className="p-2 rounded-xl bg-rose-600 text-white text-center">
                <span className="text-base font-black font-mono">1,251</span>
                <span className="text-[9px] block opacity-90">Absent Count</span>
              </div>
              <div className="p-2 rounded-xl bg-amber-600 text-white text-center">
                <span className="text-base font-black font-mono">41</span>
                <span className="text-[9px] block opacity-90">Courses Tracked</span>
              </div>
            </div>

            {/* Horizontal Bars */}
            <div className="space-y-1 text-xs font-mono">
              <span className="text-[10px] font-bold text-slate-700 block mb-0.5">Present Count by Track</span>
              <div className="flex items-center justify-between text-[10px]">
                <span className="w-20 text-slate-600">SQL Analysis</span>
                <div className="flex-1 bg-slate-100 rounded-full h-2.5 mx-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '92%' }} />
                </div>
                <span className="font-bold text-slate-800">1,840</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="w-20 text-slate-600">Business Track</span>
                <div className="flex-1 bg-slate-100 rounded-full h-2.5 mx-2 overflow-hidden">
                  <div className="bg-teal-600 h-full rounded-full" style={{ width: '88%' }} />
                </div>
                <span className="font-bold text-slate-800">1,761</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 26: KPI 4 — LEAD COUNT BY STATUS & CAMPAIGN
  // =========================================================
  if (slide.id === 26) {
    const leads = [
      { status: 'New', count: 320, color: 'bg-blue-600' },
      { status: 'Active', count: 285, color: 'bg-teal-600' },
      { status: 'Converted', count: 198, color: 'bg-emerald-600' },
      { status: 'Lost', count: 97, color: 'bg-rose-600' }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* Query Code */}
          <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-slate-500 text-[10px]">-- Leads per source with date range</span><br/>
              <span className="text-cyan-400">SELECT</span><br/>
              &nbsp;&nbsp;Source, Status,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">COUNT</span>(LeadID) <span className="text-blue-400">AS</span> TotalLeads,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">MIN</span>(CreatedDate) <span className="text-blue-400">AS</span> FirstLead,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">MAX</span>(CreatedDate) <span className="text-blue-400">AS</span> LastLead<br/>
              <span className="text-blue-400">FROM</span> Leads<br/>
              <span className="text-emerald-400">WHERE</span> Status &lt;&gt; <span className="text-amber-300">'Cancelled'</span><br/>
              <span className="text-purple-400 font-bold">GROUP BY</span> Source, Status<br/>
              <span className="text-orange-400 font-bold">HAVING COUNT</span>(LeadID) &gt;= 10<br/>
              <span className="text-orange-400">ORDER BY</span> TotalLeads <span className="text-yellow-400">DESC</span>;
            </div>
          </div>

          {/* Bar Chart & Insight */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <h4 className="text-xs font-bold text-slate-800 uppercase mb-1.5">Lead Count by Funnel Status</h4>

            <div className="flex items-end justify-between gap-2.5 h-24 pt-1 border-b border-l border-slate-300 px-3">
              {leads.map((l) => (
                <div key={l.status} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <span className="text-[10px] font-bold font-mono text-slate-700">{l.count}</span>
                  <div 
                    style={{ height: `${(l.count / 350) * 100}%` }} 
                    className={`w-full ${l.color} rounded-t transition-all cursor-pointer`}
                  />
                  <span className="text-[10px] text-slate-600 font-sans font-medium">{l.status}</span>
                </div>
              ))}
            </div>

            <div className="mt-2 p-2 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 font-sans">
              <strong>Key Insight:</strong> <code className="font-mono text-blue-700 font-bold">GROUP BY Status</code> reveals the funnel distribution. <code className="font-mono text-blue-700 font-bold">MIN/MAX(CreatedDate)</code> tracks campaign velocity.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 27: KPI 5 — SALES AGENT PERFORMANCE
  // =========================================================
  if (slide.id === 27) {
    const agents = [
      { name: 'Hana R.', leads: 91, rev: 'EGP 190K', target: '127%', status: 'exceeded' },
      { name: 'Ahmed K.', leads: 87, rev: 'EGP 180K', target: '120%', status: 'exceeded' },
      { name: 'Sara M.', leads: 72, rev: 'EGP 140K', target: '93%', status: 'close' },
      { name: 'Karim F.', leads: 65, rev: 'EGP 105K', target: '70%', status: 'lagging' }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* Query Code */}
          <div className="p-3 bg-slate-950 text-slate-200 font-mono text-xs rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-slate-500 text-[10px]">-- Active agents grouped by region</span><br/>
              <span className="text-cyan-400">SELECT</span><br/>
              &nbsp;&nbsp;Region,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">COUNT</span>(AgentID) <span className="text-blue-400">AS</span> TotalAgents,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">AVG</span>(MonthlyTarget) <span className="text-blue-400">AS</span> AvgTarget,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">SUM</span>(MonthlyTarget) <span className="text-blue-400">AS</span> TotalTarget,<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">MAX</span>(MonthlyTarget) <span className="text-blue-400">AS</span> TopAgent<br/>
              <span className="text-blue-400">FROM</span> SalesAgents<br/>
              <span className="text-emerald-400">WHERE</span> IsActive = 1<br/>
              <span className="text-purple-400 font-bold">GROUP BY</span> Region<br/>
              <span className="text-orange-400">ORDER BY</span> TotalTarget <span className="text-yellow-400">DESC</span>;
            </div>
          </div>

          {/* Scorecard Table */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase mb-1.5">Agent Scorecard</h4>
              <table className="w-full text-xs font-mono border-collapse mb-2">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 border-b">
                    <th className="p-1 text-start">Agent</th>
                    <th className="p-1 text-start">Leads</th>
                    <th className="p-1 text-start">Revenue</th>
                    <th className="p-1 text-start">Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[11px]">
                  {agents.map((a) => (
                    <tr key={a.name}>
                      <td className="p-1 font-bold text-slate-800">{a.name}</td>
                      <td className="p-1 text-slate-600">{a.leads}</td>
                      <td className="p-1 font-bold text-blue-700">{a.rev}</td>
                      <td className="p-1 font-bold">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                          a.status === 'exceeded' ? 'bg-emerald-100 text-emerald-800' :
                          a.status === 'close' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {a.target}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Micro Bar Chart */}
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold text-slate-700 block mb-1">Agent Revenue Attainment</span>
              <div className="flex items-center justify-between text-[10px] font-mono gap-1">
                <div className="flex-1 bg-emerald-600 text-white rounded text-center py-0.5 font-bold">Hana 190K</div>
                <div className="flex-1 bg-blue-600 text-white rounded text-center py-0.5 font-bold">Ahmed 180K</div>
                <div className="flex-1 bg-amber-600 text-white rounded text-center py-0.5 font-bold">Sara 140K</div>
                <div className="flex-1 bg-rose-600 text-white rounded text-center py-0.5 font-bold">Karim 105K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 28: EXECUTIVE SUMMARY KPI DASHBOARD
  // =========================================================
  if (slide.id === 28) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
          {/* Multi-Query SQL */}
          <div className="p-3 bg-slate-950 text-slate-200 font-mono text-[11px] rounded-2xl border border-slate-800 shadow-md space-y-1.5">
            <div>
              <span className="text-slate-500">-- KPI 1: Student summary</span><br/>
              <span className="text-cyan-400">SELECT COUNT</span>(StudentID) <span className="text-blue-400">AS</span> TotalStudents,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">COUNT</span>(<span className="text-yellow-400">DISTINCT</span> City) <span className="text-blue-400">AS</span> Cities <span className="text-blue-400">FROM</span> Students;
            </div>

            <div>
              <span className="text-slate-500">-- KPI 2: Enrollment summary</span><br/>
              <span className="text-cyan-400">SELECT COUNT</span>(EnrollmentID) <span className="text-blue-400">AS</span> TotalEnrollments,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">COUNT</span>(<span className="text-yellow-400">DISTINCT</span> StudentID) <span className="text-blue-400">AS</span> UniqueStudents <span className="text-blue-400">FROM</span> Enrollments;
            </div>

            <div>
              <span className="text-slate-500">-- KPI 3: Revenue summary</span><br/>
              <span className="text-cyan-400">SELECT COUNT</span>(PaymentID) <span className="text-blue-400">AS</span> Transactions,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">SUM</span>(Amount) <span className="text-blue-400">AS</span> TotalRevenue <span className="text-blue-400">FROM</span> Payments<br/>
              <span className="text-emerald-400">WHERE</span> Status = <span className="text-amber-300">'Paid'</span>;
            </div>
          </div>

          {/* Executive KPI Results */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <h4 className="text-xs font-bold text-slate-800 uppercase mb-1.5">Executive KPI Results</h4>

            <div className="grid grid-cols-2 gap-1.5 mb-1.5">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white text-center">
                <span className="text-xl font-black font-mono">2,847</span>
                <span className="text-[10px] block opacity-90">Total Students</span>
              </div>
              <div className="p-2.5 rounded-xl bg-teal-600 text-white text-center">
                <span className="text-xl font-black font-mono">1,842</span>
                <span className="text-[10px] block opacity-90">Enrollments</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-600 text-white text-center">
                <span className="text-xl font-black font-mono">EGP 1.23M</span>
                <span className="text-[10px] block opacity-90">Total Revenue</span>
              </div>
              <div className="p-2.5 rounded-xl bg-orange-600 text-white text-center">
                <span className="text-xl font-black font-mono">9,842</span>
                <span className="text-[10px] block opacity-90">Sessions Logged</span>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-slate-900 text-white text-center font-mono">
              <span className="text-xl font-black text-amber-400">4,120</span>
              <span className="text-[11px] block text-slate-300 font-sans">Total Leads Generated</span>
            </div>

            <div className="mt-1.5 p-1.5 bg-amber-50 text-[10px] text-amber-900 rounded-lg border border-amber-200">
              One master script replaces 4 separate reports. This is what modern executive dashboards are built from!
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 29: COMMON MISTAKES — AVOID THESE SQL ERRORS
  // =========================================================
  if (slide.id === 29) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-between gap-2.5 p-1 text-start">
        <div className="space-y-2.5 flex-1">
          {/* Mistake 1: Missing column in GROUP BY */}
          <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wide block mb-1.5">
              Mistake 1: Missing column in GROUP BY ('Column is invalid in select list')
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 font-mono text-xs">
              <div className="p-2 rounded-xl bg-red-950 text-red-200 border border-red-800">
                <span className="text-red-400 font-bold block mb-0.5 text-[11px]">✗ WRONG — Column 'Category' missing:</span>
                <span className="text-cyan-400">SELECT</span> CourseName, Category, <span className="text-yellow-400">COUNT</span>(*)<br/>
                <span className="text-blue-400">FROM</span> Courses<br/>
                <span className="text-purple-400 font-bold">GROUP BY</span> CourseName;
              </div>

              <div className="p-2 rounded-xl bg-emerald-950 text-emerald-200 border border-emerald-800">
                <span className="text-emerald-400 font-bold block mb-0.5 text-[11px]">✓ CORRECT — All columns included:</span>
                <span className="text-cyan-400">SELECT</span> CourseName, Category, <span className="text-yellow-400">COUNT</span>(*)<br/>
                <span className="text-blue-400">FROM</span> Courses<br/>
                <span className="text-purple-400 font-bold">GROUP BY</span> CourseName, Category;
              </div>
            </div>
          </div>

          {/* Mistake 2: Aggregate in WHERE clause */}
          <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wide block mb-1.5">
              Mistake 2: Aggregate function in WHERE clause ('An aggregate may not appear in WHERE')
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 font-mono text-xs">
              <div className="p-2 rounded-xl bg-red-950 text-red-200 border border-red-800">
                <span className="text-red-400 font-bold block mb-0.5 text-[11px]">✗ WRONG — COUNT(*) inside WHERE:</span>
                <span className="text-cyan-400">SELECT</span> CourseID, <span className="text-yellow-400">COUNT</span>(*)<br/>
                <span className="text-blue-400">FROM</span> Enrollments<br/>
                <span className="text-rose-400 font-bold">WHERE COUNT(*) &gt; 10</span><br/>
                <span className="text-purple-400">GROUP BY</span> CourseID;
              </div>

              <div className="p-2 rounded-xl bg-emerald-950 text-emerald-200 border border-emerald-800">
                <span className="text-emerald-400 font-bold block mb-0.5 text-[11px]">✓ CORRECT — Moved to HAVING:</span>
                <span className="text-cyan-400">SELECT</span> CourseID, <span className="text-yellow-400">COUNT</span>(*)<br/>
                <span className="text-blue-400">FROM</span> Enrollments<br/>
                <span className="text-purple-400">GROUP BY</span> CourseID<br/>
                <span className="text-emerald-400 font-bold">HAVING COUNT(*) &gt; 10</span>;
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 font-mono flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
          <span><strong>Quick Fix:</strong> When you see <em>'invalid in select list'</em> — check that every non-aggregate SELECT column appears in GROUP BY.</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 30: OUTRO HERO
  // =========================================================
  if (slide.id === 30 || slide.type === 'outro-hero') {
    return (
      <ThankYouVisual 
        sessionNumber="25"
        nextSessionNote="🎉 Session 25 Complete! You have mastered SQL SELECT Queries, Filtering, Aggregations, GROUP BY, HAVING & Business KPIs!"
        nextSessionButtonText="Open Session 26: SQL Built-in Functions & CASE WHEN"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={onSwitchSession ? () => onSwitchSession('session-01') : undefined}
      />
    );
  }

  // Fallback
  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 text-start">
      <div className={`p-6 rounded-2xl border shadow-sm ${
        slide.darkTheme ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <h3 className="text-base font-bold">{slide.mainTitle}</h3>
        <p className="text-xs leading-relaxed mt-2 opacity-80">{slide.subtitle}</p>
      </div>
    </div>
  );
};
