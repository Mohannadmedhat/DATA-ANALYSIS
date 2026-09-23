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
  Play,
  RotateCcw,
  RefreshCw,
  GitBranch,
  ShieldAlert,
  Sliders,
  Type,
  CalendarDays,
  Calculator,
  Binary
} from 'lucide-react';

interface Session26SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session26SlideRenderer: React.FC<Session26SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // Interactive States
  const [selectedRoadmapPart, setSelectedRoadmapPart] = useState<number>(0);
  const [activeSchemaTable, setActiveSchemaTable] = useState<number>(0);
  const [stringTestInput, setStringTestInput] = useState<string>('  John Doe  ');
  const [mathInput, setMathInput] = useState<number>(428.65);
  const [convertStyle, setConvertStyle] = useState<101 | 103 | 112 | 120>(103);
  const [tryCastSimVal, setTryCastSimVal] = useState<string>('Present');
  const [caseSimPrice, setCaseSimPrice] = useState<number>(250);
  
  // Exercise solution toggles
  const [ex1Open, setEx1Open] = useState<{ [key: string]: boolean }>({});
  const [ex2Open, setEx2Open] = useState<{ [key: string]: boolean }>({});
  const [ex3Open, setEx3Open] = useState<{ [key: string]: boolean }>({});
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: boolean }>({});

  const toggleEx1 = (id: string) => setEx1Open(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleEx2 = (id: string) => setEx2Open(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleEx3 = (id: string) => setEx3Open(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleQuiz = (id: number) => setQuizAnswers(prev => ({ ...prev, [id]: !prev[id] }));

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual 
        sessionNumber="26"
        titlePrefix="T-SQL"
        titleHighlight="BUILT-IN FUNCTIONS"
        subtitle="Scalar Functions · Conversion Functions · CASE WHEN — From Excel Thinking to Database Thinking"
        floatingBadges={[
          { icon: Type, label: "Text & String Manipulation", position: "top-left", borderColor: "border-blue-500/50", textColor: "text-blue-400" },
          { icon: CalendarDays, label: "Date & Time Arithmetic", position: "top-right", borderColor: "border-amber-500/50", textColor: "text-amber-400" },
          { icon: RefreshCw, label: "CAST & CONVERT Data Types", position: "bottom-left", borderColor: "border-purple-500/50", textColor: "text-purple-400" },
          { icon: GitBranch, label: "CASE WHEN Decision Logic", position: "bottom-right", borderColor: "border-emerald-500/50", textColor: "text-emerald-400" }
        ]}
        statsCards={[
          { val: "3 Parts", label: "Core Foundations", sub: "Scalar, Cast/Convert & CASE" },
          { val: "31 Slides", label: "Interactive Guide", sub: "Clean, Convert & Categorize" },
          { val: "6 Tables", label: "Academy Database", sub: "Real Business Queries" }
        ]}
        onStart={() => onSelectSlide ? onSelectSlide(1) : onNext?.()}
      />
    );
  }

  // =========================================================
  // SLIDE 02: SESSION ROADMAP
  // =========================================================
  if (slide.id === 2) {
    const parts = [
      {
        num: '1',
        title: 'Scalar Functions',
        time: '~60 min',
        icon: Calculator,
        desc: 'Transform one value at a time — text, dates, numbers.'
      },
      {
        num: '2',
        title: 'Conversion Functions',
        time: '40 min',
        icon: RefreshCw,
        desc: 'Move data safely between types with CAST & CONVERT.'
      },
      {
        num: '3',
        title: 'CASE WHEN',
        time: '~50 min',
        icon: GitBranch,
        desc: 'Build IF-style logic directly inside a query.'
      }
    ];

    const outcomes = [
      { icon: Type, text: 'Clean and reshape text, dates and numbers with scalar functions' },
      { icon: RefreshCw, text: 'Convert data between types safely using CAST and CONVERT' },
      { icon: GitBranch, text: 'Write CASE WHEN logic to categorize and label rows' },
      { icon: CheckCircle2, text: 'Apply all three skills together on real business tables' }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3 text-slate-800 select-none my-auto">
        {/* Top 3 Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {parts.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = selectedRoadmapPart === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedRoadmapPart(idx)}
                className={`cursor-pointer rounded-2xl p-4 border transition-all duration-200 relative shadow-sm ${
                  isSelected 
                    ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-500/20 shadow-md' 
                    : 'bg-white border-slate-200 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-blue-600 text-white text-xs font-black flex items-center justify-center shadow-sm">
                      {p.num}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {p.time}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Learning Outcomes Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
            <Award className="w-4 h-4 text-blue-600" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              By the end of this session, you will be able to:
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outcomes.map((o, idx) => {
              const Icon = o.icon;
              return (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="p-1 rounded-md bg-blue-100 text-blue-700 mt-0.5">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-snug">{o.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info pill */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200/80 text-xs text-blue-900">
          <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Interactive roadmap: Click each track to inspect syllabus coverage. Real operations dataset used across all 3 modules.</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 03: DATABASE QUICK REFRESHER
  // =========================================================
  if (slide.id === 3) {
    const tables = [
      {
        name: 'Students',
        badge: 'ACADEMY',
        columns: [
          { name: 'StudentID', isPk: true },
          { name: 'StudentName' },
          { name: 'Email' },
          { name: 'City' },
          { name: 'EnrollDate' },
          { name: 'Status' }
        ]
      },
      {
        name: 'Courses',
        badge: 'CATALOG',
        columns: [
          { name: 'CourseID', isPk: true },
          { name: 'CourseName' },
          { name: 'Category' },
          { name: 'Price' },
          { name: 'DurationHrs' }
        ]
      },
      {
        name: 'Payments',
        badge: 'FINANCE',
        columns: [
          { name: 'PaymentID', isPk: true },
          { name: 'EnrollmentID', isFk: true },
          { name: 'Amount' },
          { name: 'PaymentDate' },
          { name: 'Method' }
        ]
      },
      {
        name: 'Campaigns',
        badge: 'MARKETING',
        columns: [
          { name: 'CampaignID', isPk: true },
          { name: 'CampaignName' },
          { name: 'Channel' },
          { name: 'StartDate' },
          { name: 'EndDate' }
        ]
      },
      {
        name: 'Leads',
        badge: 'PIPELINE',
        columns: [
          { name: 'LeadID', isPk: true },
          { name: 'CampaignID', isFk: true },
          { name: 'LeadName' },
          { name: 'Status' },
          { name: 'CreatedDate' }
        ]
      },
      {
        name: 'SalesAgents',
        badge: 'STAFF',
        columns: [
          { name: 'AgentID', isPk: true },
          { name: 'AgentName' },
          { name: 'Commission' },
          { name: 'MonthlyTarget' }
        ]
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* 6 Table Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {tables.map((t, idx) => {
            const isSelected = activeSchemaTable === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveSchemaTable(idx)}
                className={`cursor-pointer rounded-2xl border p-3 transition-all duration-200 flex flex-col justify-between shadow-sm min-h-[175px] ${
                  isSelected 
                    ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-500/20 shadow-md' 
                    : 'bg-white border-slate-200 hover:border-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-900 truncate">{t.name}</span>
                    <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 font-semibold">
                      {t.badge}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {t.columns.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-center justify-between text-[11px]">
                        <span className={`truncate ${c.isPk ? 'text-blue-700 font-bold' : c.isFk ? 'text-amber-700 font-semibold' : 'text-slate-700'}`}>
                          {c.name}
                        </span>
                        {c.isPk && <span className="text-[8px] font-bold px-1 rounded bg-blue-100 text-blue-800">PK</span>}
                        {c.isFk && <span className="text-[8px] font-bold px-1 rounded bg-amber-100 text-amber-800">FK</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend & Big Callout */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs">
            <div className="flex items-center gap-4">
              <span className="text-slate-700 text-xs font-bold">KEY IDENTIFIERS:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span className="text-xs text-slate-700 font-medium">Primary Key (PK)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="text-xs text-slate-700 font-medium">Foreign Key (FK)</span>
              </div>
            </div>
            <span className="text-xs text-slate-500">Click any card to inspect columns</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0 shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <p className="text-xs text-blue-950 leading-relaxed">
              <span className="font-bold text-blue-800">Good news:</span> You already used SELECT, WHERE, and JOIN with these tables in earlier sessions. Today we make the values inside each column smarter — cleaning text, converting types, and labelling rows with logic.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04: SECTION DIVIDER 1 — SCALAR FUNCTIONS
  // =========================================================
  if (slide.id === 4) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 select-none overflow-hidden bg-transparent">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-80 h-80 rounded-full blur-3xl bg-blue-600/20 pointer-events-none"
        />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl flex flex-col items-center my-auto"
        >
          {/* Orange glowing gradient icon box */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-4 ring-4 ring-orange-500/20">
            <Calculator className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          {/* Signature Orange Translucent Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-wider mb-3 shadow-md backdrop-blur-sm">
            <span>PART 1 OF 3 · SCALAR FUNCTIONS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Scalar Functions
          </h2>

          {/* Orange Underline Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
            Transform text, dates, and numbers — <span className="text-amber-400 font-bold">one row at a time</span>
          </p>
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: WHAT IS A SCALAR FUNCTION?
  // =========================================================
  if (slide.id === 5) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Definition banner */}
        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-3.5 text-center">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            A function that takes <span className="text-blue-700 font-bold">one value in</span>, and returns <span className="text-emerald-700 font-bold">exactly one value out</span> — for every row.
          </p>
        </div>

        {/* Input -> Function -> Output visual */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-center gap-4 shadow-sm">
          <div className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Input Column Value</span>
            <span className="text-sm font-mono text-slate-900 font-bold">"john doe"</span>
          </div>
          <ArrowRight className="w-5 h-5 text-blue-600 shrink-0" />
          <div className="px-5 py-2.5 rounded-xl bg-blue-50 border border-blue-300 text-center">
            <span className="text-[10px] uppercase font-bold text-blue-700 block">Scalar Function</span>
            <span className="text-sm font-mono text-blue-900 font-bold">UPPER( )</span>
          </div>
          <ArrowRight className="w-5 h-5 text-blue-600 shrink-0" />
          <div className="px-5 py-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-700 block">Output Value</span>
            <span className="text-sm font-mono text-emerald-900 font-bold">"JOHN DOE"</span>
          </div>
        </div>

        {/* Comparison: Scalar vs Aggregate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Scalar Box */}
          <div className="rounded-2xl border border-blue-200 bg-white p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 font-mono text-xs font-bold flex items-center justify-center">Σ</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Scalar Function</h4>
              </div>
              <p className="text-xs text-slate-600 mb-2.5 leading-relaxed">
                Acts on <span className="text-blue-700 font-bold">ONE</span> value per row. Returns one output for every input row — the row count never changes.
              </p>
              <pre className="text-xs font-mono bg-[#0b173e] p-2.5 rounded-xl border border-blue-950 text-blue-300 overflow-x-auto">
{`SELECT UPPER(StudentName)
FROM Students;`}
              </pre>
            </div>
            <div className="mt-3 text-center py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              500 rows in → 500 rows out
            </div>
          </div>

          {/* Aggregate Box */}
          <div className="rounded-2xl border border-purple-200 bg-white p-4 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Aggregate Function</h4>
              </div>
              <p className="text-xs text-slate-600 mb-2.5 leading-relaxed">
                Acts on <span className="text-purple-700 font-bold">MANY</span> rows at once. Collapses an entire group of rows into a single summary value.
              </p>
              <pre className="text-xs font-mono bg-[#0b173e] p-2.5 rounded-xl border border-blue-950 text-purple-300 overflow-x-auto">
{`SELECT COUNT(*)
FROM Students;`}
              </pre>
            </div>
            <div className="mt-3 text-center py-1.5 rounded-lg bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
              500 rows in → 1 row out
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 06: STRING FUNCTIONS — THE ESSENTIALS
  // =========================================================
  if (slide.id === 6) {
    const fnList = [
      { name: 'UPPER( )', desc: 'Converts text to ALL CAPS', example: "UPPER('john') → 'JOHN'", result: stringTestInput.toUpperCase() },
      { name: 'LOWER( )', desc: 'Converts text to all lowercase', example: "LOWER('JOHN') → 'john'", result: stringTestInput.toLowerCase() },
      { name: 'LEN( )', desc: 'Counts the number of characters', example: "LEN('John') → 4", result: stringTestInput.length.toString() },
      { name: 'TRIM( )', desc: 'Removes leading & trailing spaces', example: "TRIM(' John ') → 'John'", result: `'${stringTestInput.trim()}'` }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3 text-slate-800 select-none my-auto">
        {/* Interactive Live Input Bar */}
        <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900">Interactive Tester:</span>
          </div>
          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <span className="text-xs text-slate-500">Test string:</span>
            <input 
              type="text" 
              value={stringTestInput} 
              onChange={e => setStringTestInput(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-blue-900 font-mono focus:outline-none focus:border-blue-500"
            />
          </div>
          <button 
            onClick={() => setStringTestInput('  John Doe  ')} 
            className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 font-medium"
          >
            Reset
          </button>
        </div>

        {/* 4 Functions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {fnList.map((f, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs sm:text-sm font-bold font-mono text-blue-700">{f.name}</span>
                  <span className="text-[11px] font-mono text-slate-500">{f.example}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Live Output:</span>
                <span className="font-mono text-emerald-700 font-bold truncate max-w-[220px]">{f.result}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Excel habit callout */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">Excel habit to unlearn:</span> In Excel you nest <code className="text-amber-900 font-mono font-bold">=TRIM(UPPER(A1))</code> inside a single cell. In SQL, functions wrap the same way — <code className="text-blue-800 font-mono font-bold">UPPER(TRIM(StudentName))</code> — but run once for every row automatically across the entire table!
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 07: LIVE DEMO — CLEANING STUDENT DATA
  // =========================================================
  if (slide.id === 7) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Query Code Box */}
          <div className="lg:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-blue-900/60">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> T-SQL Query
                </span>
                <span className="text-xs text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">Students Table</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    StudentID,
    TRIM(StudentName)          AS CleanName,
    LOWER(TRIM(Email))         AS CleanEmail,
    LEN(TRIM(StudentName))     AS NameLength
FROM Students
WHERE LEN(StudentName) <> LEN(TRIM(StudentName));`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Executes text sanitization and length comparison in a single pass</span>
            </div>
          </div>

          {/* Explanation bullet cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            <div className="p-3 rounded-xl bg-white border border-blue-200/80 shadow-xs flex-1 flex flex-col justify-center">
              <h5 className="text-xs sm:text-sm font-bold text-blue-700 mb-1 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-600" /> TRIM(StudentName)
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">Removes accidental leading and trailing spaces typed during student enrollment.</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-purple-200/80 shadow-xs flex-1 flex flex-col justify-center">
              <h5 className="text-xs sm:text-sm font-bold text-purple-700 mb-1 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-purple-600" /> LOWER(TRIM(Email))
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">Standardizes email casing to ensure reliable lookups, joins, and deduplication.</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-emerald-200/80 shadow-xs flex-1 flex flex-col justify-center">
              <h5 className="text-xs sm:text-sm font-bold text-emerald-700 mb-1 flex items-center gap-1.5">
                <Filter className="w-4 h-4 text-emerald-600" /> Smart WHERE Filter
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed"><code className="text-amber-800 font-mono font-bold bg-amber-50 px-1 py-0.5 rounded border border-amber-200">LEN &lt;&gt; LEN(TRIM)</code> isolates only the dirty records needing cleanup!</p>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-2">
              <Table className="w-3.5 h-3.5 text-blue-600" /> Filtered Query Output (Dirty Records)
            </span>
            <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">2 rows affected</span>
          </div>
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0052cc] text-white text-[11px] uppercase tracking-wider font-semibold">
              <tr>
                <th className="py-2 px-4">StudentID</th>
                <th className="py-2 px-4">CleanName</th>
                <th className="py-2 px-4">CleanEmail</th>
                <th className="py-2 px-4">NameLength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-xs">
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-2 px-4 text-slate-600 font-bold">1042</td>
                <td className="py-2 px-4 text-slate-900 font-medium font-sans">Mona Farid</td>
                <td className="py-2 px-4 text-blue-700">mona.farid@mail.com</td>
                <td className="py-2 px-4 text-emerald-700 font-bold">10</td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-2 px-4 text-slate-600 font-bold">1078</td>
                <td className="py-2 px-4 text-slate-900 font-medium font-sans">Karim Adel</td>
                <td className="py-2 px-4 text-blue-700">karim.adel@mail.com</td>
                <td className="py-2 px-4 text-emerald-700 font-bold">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 08: STRING FUNCTIONS — EXTRACT, JOIN & REPLACE
  // =========================================================
  if (slide.id === 8) {
    const fns = [
      {
        syntax: 'SUBSTRING(text, start, length)',
        desc: 'Extracts part of a text value, starting at a specific position (1-indexed in SQL).',
        example: "SUBSTRING('Data Analytics', 1, 4) → 'Data'"
      },
      {
        syntax: 'CONCAT(a, b, c, ...)',
        desc: 'Joins two or more values into one text string (handles NULL values cleanly without crashing).',
        example: "CONCAT('User: ', 'Ali') → 'User: Ali'"
      },
      {
        syntax: 'REPLACE(text, old, new)',
        desc: 'Swaps every occurrence of old target text with new replacement text.',
        example: "REPLACE('mail.com', 'mail', 'inbox') → 'inbox.com'"
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Full Query Preview */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-amber-400" /> Production SQL Example
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    StudentName,
    Email,
    SUBSTRING(Email, CHARINDEX('@', Email) + 1, 50) AS EmailDomain,
    CONCAT(StudentName, ' <', Email, '>')           AS ContactLabel,
    REPLACE(Email, 'gmail.com', 'inbox.com')       AS UpdatedEmail
FROM Students;`}
          </pre>
        </div>

        {/* 3 Function Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {fns.map((f, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs sm:text-sm font-bold font-mono text-blue-700 block mb-1.5">{f.syntax}</span>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{f.desc}</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-emerald-700 font-bold truncate">
                {f.example}
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-center gap-3">
          <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
          <span><span className="font-bold text-blue-800">CHARINDEX('@', Email):</span> Returns the character index of the @ symbol so SUBSTRING knows dynamically where to cut, regardless of username length!</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 09: LIVE DEMO — DOMAINS & MAILING LABELS
  // =========================================================
  if (slide.id === 9) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Code Box */}
          <div className="lg:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Domain Extraction & Marketing Labels
                </span>
                <span className="text-xs text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">ORDER BY Domain</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    StudentName,
    City,
    SUBSTRING(Email, CHARINDEX('@', Email) + 1, 50) AS Domain,
    CONCAT(StudentName, ' - ', City)                AS MailingLabel
FROM Students
ORDER BY Domain;`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Calculates substring dynamic offset using CHARINDEX position</span>
            </div>
          </div>

          {/* Results Table */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="bg-slate-50 px-3.5 py-2 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-blue-600" /> Output Preview
              </span>
              <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">2 rows</span>
            </div>
            <table className="w-full text-left text-xs flex-1">
              <thead className="bg-[#0052cc] text-white text-[10px] uppercase font-bold tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">Student</th>
                  <th className="py-2.5 px-2">City</th>
                  <th className="py-2.5 px-2">Domain</th>
                  <th className="py-2.5 px-3">MailingLabel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-2.5 px-3 text-slate-900 font-medium font-sans">Mona Farid</td>
                  <td className="py-2.5 px-2 text-slate-600 font-sans">Cairo</td>
                  <td className="py-2.5 px-2 text-blue-700 font-bold">mail.com</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold font-sans">Mona Farid - Cairo</td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-2.5 px-3 text-slate-900 font-medium font-sans">Karim Adel</td>
                  <td className="py-2.5 px-2 text-slate-600 font-sans">Giza</td>
                  <td className="py-2.5 px-2 text-blue-700 font-bold">gmail.com</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold font-sans">Karim Adel - Giza</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">CHARINDEX</span> finds the position of <code className="text-blue-800 font-mono font-bold bg-blue-50 px-1 py-0.5 rounded border border-blue-200">'@'</code> so <span className="font-bold text-slate-900">SUBSTRING</span> knows exactly where the domain begins — no matter how long the name before it is!
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 10: DATE FUNCTIONS — WORKING WITH TIME
  // =========================================================
  if (slide.id === 10) {
    const dateFns = [
      {
        name: 'GETDATE( )',
        desc: "Returns the SQL Server's current date and time — no arguments needed.",
        code: 'GETDATE() → 2026-09-23 17:45:00'
      },
      {
        name: 'DATEADD(unit, n, date)',
        desc: 'Adds (or subtracts, with negative n) a specified date interval to a date.',
        code: 'DATEADD(DAY, 30, GETDATE())'
      },
      {
        name: 'DATEDIFF(unit, start, end)',
        desc: 'Counts how many units (days, months, years) lie between start and end date.',
        code: 'DATEDIFF(DAY, EnrollDate, GETDATE())'
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* SQL Example */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-400" /> T-SQL Date Arithmetic Examples
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    GETDATE()                                AS TodayDateTime,
    DATEADD(DAY, 30, GETDATE())              AS ThirtyDaysFromNow,
    DATEDIFF(DAY, EnrollDate, GETDATE())     AS DaysSinceEnrollment
FROM Students;`}
          </pre>
        </div>

        {/* 3 Function Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {dateFns.map((df, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs sm:text-sm font-bold font-mono text-blue-700 block mb-1.5">{df.name}</span>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{df.desc}</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 font-bold truncate">
                {df.code}
              </div>
            </div>
          ))}
        </div>

        {/* Warning Callout */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">Common DATEADD/DATEDIFF units:</span> <code className="text-amber-900 font-mono font-bold">DAY</code>, <code className="text-amber-900 font-mono font-bold">WEEK</code>, <code className="text-amber-900 font-mono font-bold">MONTH</code>, <code className="text-amber-900 font-mono font-bold">YEAR</code>, <code className="text-amber-900 font-mono font-bold">HOUR</code>, <code className="text-amber-900 font-mono font-bold">MINUTE</code> — always written as the first argument, <span className="font-bold text-slate-900">unquoted</span>.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 11: LIVE DEMO — CAMPAIGN DURATION
  // =========================================================
  if (slide.id === 11) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Code Box */}
          <div className="lg:col-span-6 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Campaign Lifespan Analytics
                </span>
                <span className="text-xs text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">Campaigns Table</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    CampaignName,
    StartDate,
    EndDate,
    DATEDIFF(DAY, StartDate, EndDate)
        AS CampaignDurationDays,
    DATEDIFF(DAY, EndDate, GETDATE())
        AS DaysSinceCampaignEnded
FROM Campaigns;`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Calculates dual time windows with start and end dates</span>
            </div>
          </div>

          {/* Results Table */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="bg-slate-50 px-3.5 py-2 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-blue-600" /> Campaign Metrics Output
              </span>
              <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">2 campaigns</span>
            </div>
            <table className="w-full text-left text-xs flex-1">
              <thead className="bg-[#0052cc] text-white text-[10px] uppercase font-bold tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">Campaign</th>
                  <th className="py-2.5 px-2">Start</th>
                  <th className="py-2.5 px-2">End</th>
                  <th className="py-2.5 px-2">Duration</th>
                  <th className="py-2.5 px-3">DaysSinceEnded</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-2.5 px-3 text-slate-900 font-medium font-sans">Summer Push</td>
                  <td className="py-2.5 px-2 text-slate-600">2026-03-01</td>
                  <td className="py-2.5 px-2 text-slate-600">2026-03-31</td>
                  <td className="py-2.5 px-2 text-blue-700 font-bold">30</td>
                  <td className="py-2.5 px-3 text-purple-700 font-bold">113</td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-2.5 px-3 text-slate-900 font-medium font-sans">Back to School</td>
                  <td className="py-2.5 px-2 text-slate-600">2026-06-01</td>
                  <td className="py-2.5 px-2 text-slate-600">2026-06-25</td>
                  <td className="py-2.5 px-2 text-blue-700 font-bold">24</td>
                  <td className="py-2.5 px-3 text-purple-700 font-bold">27</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Analytical takeaway */}
        <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-100 text-blue-700 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">Insight:</span> Notice both calculations reuse <code className="text-blue-800 font-mono font-bold bg-blue-50 px-1 py-0.5 rounded border border-blue-200">DATEDIFF</code> with the same unit (<code className="text-blue-800 font-mono font-bold">DAY</code>) but different column pairs — one gives a measure of <span className="text-blue-700 font-bold">length/duration</span>, the other a measure of <span className="text-purple-700 font-bold">recency</span>.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 12: MATH FUNCTIONS — ROUNDING & PRECISION
  // =========================================================
  if (slide.id === 12) {
    const mathFns = [
      { name: 'ROUND(n, digits)', desc: 'Rounds to the given number of decimal places.', code: `ROUND(${mathInput}, 0) = ${Math.round(mathInput)}` },
      { name: 'ABS(n)', desc: 'Removes the negative sign — returns the absolute magnitude.', code: `ABS(${mathInput} - 500) = ${Math.abs(mathInput - 500).toFixed(2)}` },
      { name: 'CEILING(n)', desc: 'Rounds up to the nearest whole integer.', code: `CEILING(${mathInput}) = ${Math.ceil(mathInput)}` },
      { name: 'FLOOR(n)', desc: 'Rounds down to the nearest whole integer.', code: `FLOOR(${mathInput}) = ${Math.floor(mathInput)}` }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3 text-slate-800 select-none my-auto">
        {/* Interactive Number Bar */}
        <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900">Interactive Numeric Tester:</span>
          </div>
          <div className="flex items-center gap-2 flex-1 max-w-xs">
            <span className="text-xs text-slate-500">Amount:</span>
            <input 
              type="number" 
              step="0.05"
              value={mathInput} 
              onChange={e => setMathInput(parseFloat(e.target.value) || 0)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-blue-900 font-mono focus:outline-none focus:border-blue-500"
            />
          </div>
          <button 
            onClick={() => setMathInput(428.65)} 
            className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 font-medium"
          >
            Reset
          </button>
        </div>

        {/* 4 Math Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {mathFns.map((m, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs sm:text-sm font-bold font-mono text-blue-700 block mb-1.5">{m.name}</span>
                <p className="text-xs text-slate-600 leading-relaxed mb-2.5">{m.desc}</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-emerald-700 font-bold truncate">
                {m.code}
              </div>
            </div>
          ))}
        </div>

        {/* Excel Parallel Callout */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">Excel parallel:</span> <code className="text-amber-900 font-mono font-bold">=ROUND(n, digits)</code> behaves exactly like Excel's <code className="text-amber-900 font-mono font-bold">ROUND()</code>. <code className="text-blue-800 font-mono font-bold">CEILING</code> and <code className="text-blue-800 font-mono font-bold">FLOOR</code> directly match Excel's <code className="text-amber-900 font-mono font-bold">ROUNDUP</code> and <code className="text-amber-900 font-mono font-bold">ROUNDDOWN</code> when rounding to whole numbers.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 13: LIVE DEMO — COMMISSION SNAPSHOT
  // =========================================================
  if (slide.id === 13) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Code Box */}
          <div className="lg:col-span-6 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Sales Agent Commission & Quota %
                </span>
                <span className="text-xs text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">SalesAgents Table</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    AgentName,
    MonthlyTarget,
    Commission,
    ROUND(Commission, 2)
        AS RoundedCommission,
    ROUND(Commission / MonthlyTarget * 100, 1)
        AS CommissionPct
FROM SalesAgents;`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Multiplies and divides before executing outer ROUND function</span>
            </div>
          </div>

          {/* Results Table */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="bg-slate-50 px-3.5 py-2 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-blue-600" /> Agent Calculation Results
              </span>
              <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">2 agents</span>
            </div>
            <table className="w-full text-left text-xs flex-1">
              <thead className="bg-[#0052cc] text-white text-[10px] uppercase font-bold tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">AgentName</th>
                  <th className="py-2.5 px-2">Target</th>
                  <th className="py-2.5 px-2">Comm</th>
                  <th className="py-2.5 px-2">Rounded</th>
                  <th className="py-2.5 px-3">Pct</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-2.5 px-3 text-slate-900 font-medium font-sans">Nadia Fouad</td>
                  <td className="py-2.5 px-2 text-slate-600">5000</td>
                  <td className="py-2.5 px-2 text-slate-500">2134.567</td>
                  <td className="py-2.5 px-2 text-blue-700 font-bold">2134.57</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">42.7%</td>
                </tr>
                <tr className="hover:bg-blue-50/40 transition-colors">
                  <td className="py-2.5 px-3 text-slate-900 font-medium font-sans">Omar Sami</td>
                  <td className="py-2.5 px-2 text-slate-600">4000</td>
                  <td className="py-2.5 px-2 text-slate-500">3890.204</td>
                  <td className="py-2.5 px-2 text-blue-700 font-bold">3890.20</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">97.3%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-100 text-blue-700 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">Expression Nesting:</span> <code className="text-blue-800 font-mono font-bold bg-blue-50 px-1 py-0.5 rounded border border-blue-200">ROUND</code> is nested inside a calculation (division and multiplication happen first inside the parentheses) — functions can wrap any valid arithmetic expression, not just a raw column!
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 14: HANDS-ON EXERCISE 1
  // =========================================================
  if (slide.id === 14) {
    const tasks = [
      {
        id: 'task1',
        title: '1. Round course pricing',
        desc: 'Write a query on Courses that returns CourseName and Price rounded to the nearest whole number as RoundedPrice.',
        table: 'Courses',
        solution: `SELECT CourseName, ROUND(Price, 0) AS RoundedPrice\nFROM Courses;`
      },
      {
        id: 'task2',
        title: '2. Days since payment',
        desc: 'Write a query on Payments that returns PaymentID, PaymentDate, and the number of days since payment using DATEDIFF.',
        table: 'Payments',
        solution: `SELECT PaymentID, PaymentDate,\n       DATEDIFF(DAY, PaymentDate, GETDATE()) AS DaysSincePayment\nFROM Payments;`
      },
      {
        id: 'task3',
        title: '3. Build a contact label',
        desc: 'Write a query on Students that returns a FullLabel column combining StudentName and Email using CONCAT.',
        table: 'Students',
        solution: `SELECT CONCAT(StudentName, ' <', Email, '>') AS FullLabel\nFROM Students;`
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3 text-slate-800 select-none my-auto">
        <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="font-bold">Hands-On Exercise 1 — 15 Minutes</span>
          </div>
          <span className="text-xs text-slate-600">Click "Reveal Solution" below to verify your SQL</span>
        </div>

        {/* 3 Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {tasks.map((t) => {
            const isOpen = ex1Open[t.id];
            return (
              <div key={t.id} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{t.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-blue-700 border border-slate-200 font-bold">{t.table}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{t.desc}</p>
                </div>

                <div>
                  <button
                    onClick={() => toggleEx1(t.id)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 border border-slate-300 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5 text-blue-600" />
                    {isOpen ? 'Hide Solution' : 'Reveal Solution'}
                  </button>

                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-2.5 pt-2 border-t border-slate-100"
                    >
                      <pre className="text-xs font-mono text-emerald-300 bg-[#0b173e] p-2.5 rounded-xl border border-blue-950 overflow-x-auto leading-relaxed">
                        {t.solution}
                      </pre>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-center text-xs text-slate-600">
          Try writing these queries directly in SSMS or Azure Data Studio before revealing the answers!
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 15: SECTION DIVIDER 2 — CONVERSION FUNCTIONS
  // =========================================================
  if (slide.id === 15) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 select-none overflow-hidden bg-transparent">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-80 h-80 rounded-full blur-3xl bg-blue-600/20 pointer-events-none"
        />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl flex flex-col items-center my-auto"
        >
          {/* Orange glowing gradient icon box */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-4 ring-4 ring-orange-500/20">
            <RefreshCw className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          {/* Signature Orange Translucent Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-wider mb-3 shadow-md backdrop-blur-sm">
            <span>PART 2 OF 3 · CONVERSION FUNCTIONS</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Conversion Functions
          </h2>

          {/* Orange Underline Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
            Move data safely between types with <span className="text-amber-400 font-bold">CAST</span>, <span className="text-amber-400 font-bold">CONVERT</span>, and their <span className="text-amber-400 font-bold">TRY_</span> variants
          </p>
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 16: WHY CONVERSION MATTERS
  // =========================================================
  if (slide.id === 16) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Top Header Card */}
        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-3.5 text-center">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Every column has a data type — <span className="text-rose-700 font-bold">mixing types</span> is where SQL queries quietly break, yield false results, or fail silently!
          </p>
        </div>

        {/* Implicit vs Explicit Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Implicit */}
          <div className="p-4 rounded-2xl bg-white border border-rose-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Implicit Conversion (Automatic)</h4>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                SQL Server converts data types automatically, without being asked.
              </p>
              <pre className="text-xs sm:text-[13px] font-mono bg-[#0b173e] p-3 rounded-xl border border-blue-950 text-slate-200">
{`-- Works, but conversion is hidden
SELECT '100' + 50;  -- returns 150`}
              </pre>
            </div>
            <div className="mt-3 text-xs text-rose-700 bg-rose-50 p-2.5 rounded-xl border border-rose-200 font-medium">
              ⚠️ Risky: May cause index scans, incorrect sorting, or unexpected conversion errors on dirty strings!
            </div>
          </div>

          {/* Explicit */}
          <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Explicit Conversion (Controlled)</h4>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                You control the conversion using CAST or CONVERT — clear and predictable.
              </p>
              <pre className="text-xs sm:text-[13px] font-mono bg-[#0b173e] p-3 rounded-xl border border-blue-950 text-emerald-300">
{`-- Intent is explicit and reviewable
SELECT CAST('100' AS INT) + 50;`}
              </pre>
            </div>
            <div className="mt-3 text-xs text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-medium">
              ✅ Best Practice: High performance, zero ambiguity, clear to peer analysts and maintainers!
            </div>
          </div>
        </div>

        {/* Why it matters for analysts */}
        <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-2">
            Why It Matters For a Data Analyst:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
            <div className="flex items-start gap-1.5">
              <span className="text-blue-600 font-bold">•</span>
              <span>Dates stored as text (<code className="text-blue-900 font-mono font-bold bg-white/70 px-1 rounded">'20260115'</code>) can’t be filtered or sorted correctly until converted to a real date type.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-blue-600 font-bold">•</span>
              <span>Comparing a VARCHAR column to a number can silently fail, or silently succeed with the wrong result.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-blue-600 font-bold">•</span>
              <span>Reports and dashboards expect consistent formats — conversion functions produce that consistency.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 17: CAST — THE ANSI-STANDARD WAY
  // =========================================================
  if (slide.id === 17) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Syntax Banner */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700">SYNTAX:</span>
            <code className="text-sm font-mono text-emerald-700 font-bold">CAST ( expression AS data_type )</code>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200 font-bold">
            ANSI-SQL PORTABLE
          </span>
        </div>

        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan-400" /> Payments Table Type Transformations
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    Amount,
    CAST(Amount AS INT)                AS AmountWhole,
    CAST(PaymentDate AS VARCHAR(20))   AS PaymentDateText,
    CAST(Amount AS DECIMAL(10,2))      AS AmountFormatted
FROM Payments;`}
          </pre>
        </div>

        {/* When to use CAST */}
        <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex items-start gap-3">
          <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0 shadow-sm">
            <Check className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">Use CAST when:</span> you want code that works the same across SQL Server, PostgreSQL, MySQL and other database systems. It has no formatting options — just a clean type change.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 18: CONVERT — THE SQL SERVER WAY
  // =========================================================
  if (slide.id === 18) {
    const styles = [
      { code: 101, name: 'US Standard', format: 'mm/dd/yyyy', example: '07/22/2026' },
      { code: 103, name: 'UK / European', format: 'dd/mm/yyyy', example: '22/07/2026' },
      { code: 112, name: 'ISO Compact', format: 'yyyymmdd', example: '20260722' },
      { code: 120, name: 'ODBC Canonical', format: 'yyyy-mm-dd hh:mi:ss', example: '2026-07-22 09:00:00' }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Syntax Banner */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700">SYNTAX:</span>
            <code className="text-xs sm:text-sm font-mono text-emerald-700 font-bold">CONVERT ( data_type, expression [, style] )</code>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200 font-bold">
            T-SQL SPECIFIC
          </span>
        </div>

        {/* Style Selector & Table */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
          {/* Query Box */}
          <div className="md:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Date Style Transformations
                </span>
                <span className="text-xs text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">Payments Table</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    PaymentDate,
    CONVERT(VARCHAR, PaymentDate, 103) AS UK_Format,   -- dd/mm/yyyy
    CONVERT(VARCHAR, PaymentDate, 101) AS US_Format,   -- mm/dd/yyyy
    CONVERT(VARCHAR, PaymentDate, 120) AS ISO_Format   -- yyyy-mm-dd
FROM Payments;`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Third parameter controls regional date presentation format</span>
            </div>
          </div>

          {/* Interactive Styles Table */}
          <div className="md:col-span-5 bg-white border border-slate-200/90 rounded-2xl overflow-hidden p-3 shadow-sm flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">
              Style Code Reference (Click to test):
            </span>
            <div className="space-y-1.5 flex-1 flex flex-col justify-around">
              {styles.map((s) => {
                const isSelected = convertStyle === s.code;
                return (
                  <div
                    key={s.code}
                    onClick={() => setConvertStyle(s.code as any)}
                    className={`cursor-pointer p-2 rounded-xl border text-xs flex items-center justify-between transition-colors ${
                      isSelected ? 'bg-blue-50 border-blue-500 text-blue-900 font-semibold ring-1 ring-blue-500/20' : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-700 text-xs px-1.5 py-0.5 rounded bg-blue-100">{s.code}</span>
                      <span className="text-xs">{s.name}</span>
                    </div>
                    <span className="font-mono text-xs text-emerald-700 font-bold">{s.example}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CAST vs CONVERT Rule */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">CAST vs CONVERT — which to use?</span> Use CAST for straightforward type changes. Use CONVERT specifically when you need a particular date or number display format — that style-code control is CONVERT’s one advantage over CAST.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 19: LIVE DEMO — FORMATTING LEAD DATES
  // =========================================================
  if (slide.id === 19) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> Audience-Specific Date Formatting
            </span>
            <span className="text-xs text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">Leads Table</span>
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    LeadName,
    CreatedDate,
    CONVERT(VARCHAR(10), CreatedDate, 103)  AS CreatedDateUK,
    CONVERT(VARCHAR(10), CreatedDate, 112)  AS CreatedDateCompact
FROM Leads;`}
          </pre>
        </div>

        {/* Results Table */}
        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Table className="w-3.5 h-3.5 text-blue-600" /> Conversion Formats Output
            </span>
            <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">2 leads</span>
          </div>
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0052cc] text-white text-[11px] uppercase font-bold tracking-wider">
              <tr>
                <th className="py-2.5 px-4">LeadName</th>
                <th className="py-2.5 px-4">CreatedDate (Native)</th>
                <th className="py-2.5 px-4">CreatedDateUK (Style 103)</th>
                <th className="py-2.5 px-4">CreatedDateCompact (Style 112)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-xs">
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-2.5 px-4 text-slate-900 font-medium font-sans">Yara Hassan</td>
                <td className="py-2.5 px-4 text-slate-600 font-sans">2026-06-14</td>
                <td className="py-2.5 px-4 text-blue-700 font-bold">14/06/2026</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">20260614</td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-2.5 px-4 text-slate-900 font-medium font-sans">Sherif Nabil</td>
                <td className="py-2.5 px-4 text-slate-600 font-sans">2026-06-20</td>
                <td className="py-2.5 px-4 text-blue-700 font-bold">20/06/2026</td>
                <td className="py-2.5 px-4 text-emerald-700 font-bold">20260620</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tip on Style 112 */}
        <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-100 text-blue-700 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">CreatedDateCompact (style 112):</span> Sorts correctly as plain text because the year comes first (<code className="text-blue-800 font-mono font-bold bg-blue-50 px-1 py-0.5 rounded border border-blue-200">YYYYMMDD</code>) — useful for file names and exports.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 20: COMMON PITFALLS — WHEN CONVERSION FAILS
  // =========================================================
  if (slide.id === 20) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Interactive Crash Simulator */}
        <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900">Dirty Data Simulator:</span>
          </div>
          <div className="flex items-center gap-2 flex-1 max-w-xs">
            <span className="text-xs text-slate-500">Notes value:</span>
            <input 
              type="text" 
              value={tryCastSimVal} 
              onChange={e => setTryCastSimVal(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-blue-900 font-mono focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <button onClick={() => setTryCastSimVal('Present')} className="text-xs text-slate-700 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 font-semibold hover:bg-slate-200">"Present"</button>
            <button onClick={() => setTryCastSimVal('100')} className="text-xs text-slate-700 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 font-semibold hover:bg-slate-200">"100"</button>
          </div>
        </div>

        {/* Side by Side: Risky vs Safe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Risky */}
          <div className="p-4 rounded-2xl bg-white border border-rose-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                <XCircle className="w-4 h-4" /> RISKY — THIS CAN ERROR
              </div>
              <pre className="text-xs sm:text-[13px] font-mono bg-[#0b173e] p-3 rounded-xl border border-blue-950 text-slate-200">
{`-- Fails if Notes has any
-- non-numeric text in it
SELECT CAST(Notes AS INT)
FROM Attendance;`}
              </pre>
            </div>
            <div className="mt-3 p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-mono text-rose-800">
              {isNaN(Number(tryCastSimVal)) 
                ? '💥 Msg 245: Conversion failed when converting varchar to int.' 
                : `✅ Output: ${tryCastSimVal}`}
            </div>
          </div>

          {/* Safe */}
          <div className="p-4 rounded-2xl bg-white border border-emerald-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" /> SAFE — RETURNS NULL INSTEAD
              </div>
              <pre className="text-xs sm:text-[13px] font-mono bg-[#0b173e] p-3 rounded-xl border border-blue-950 text-slate-200">
{`-- Same idea, no crash
SELECT TRY_CAST(Notes AS INT)
       AS NotesAsNumber
FROM Attendance;`}
              </pre>
            </div>
            <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800">
              {isNaN(Number(tryCastSimVal)) 
                ? '🛡️ Handled Safely: NULL (query continues without crashing)' 
                : `✅ Output: ${tryCastSimVal}`}
            </div>
          </div>
        </div>

        {/* Why TRY_CAST is essential */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">TRY_CAST and TRY_CONVERT:</span> Work exactly like CAST and CONVERT, but instead of stopping the whole query with an error, an unconvertible value simply becomes NULL. This is essential when you don’t fully trust the source data — free-text fields, imported spreadsheets, or manual entry columns like Attendance.Notes.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 21: HANDS-ON EXERCISE 2
  // =========================================================
  if (slide.id === 21) {
    const q1Open = ex2Open['q1'];
    const q2Open = ex2Open['q2'];
    const q3Open = ex2Open['q3'];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3 text-slate-800 select-none my-auto">
        <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="font-bold">Hands-On Exercise 2 — Diagnose & Fix (15 Minutes)</span>
          </div>
          <span className="text-xs text-slate-600">Click to reveal the correct SQL diagnostics</span>
        </div>

        {/* 2 Broken Queries Side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Broken Query 1 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-rose-700 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" /> BROKEN QUERY 1
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">Payments</span>
              </div>
              <pre className="text-xs font-mono bg-[#0b173e] p-2.5 rounded-xl border border-blue-950 text-slate-300 mb-2.5">
{`SELECT PaymentID, Amount
FROM Payments
WHERE PaymentDate = 20260115;`}
              </pre>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                <span className="font-semibold text-slate-900">Task:</span> Rewrite the WHERE clause so PaymentDate is compared correctly using CAST or CONVERT.
              </p>
            </div>

            <div>
              <button
                onClick={() => toggleEx2('q1')}
                className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 border border-slate-300 flex items-center justify-center gap-2 transition-colors"
              >
                {q1Open ? 'Hide Fix' : 'Reveal Fix'}
              </button>
              {q1Open && (
                <div className="mt-2.5 p-2.5 rounded-xl bg-[#0b173e] border border-blue-950 text-xs font-mono text-emerald-300">
{`-- Preferred Fix A:
WHERE CAST(PaymentDate AS DATE) = '2026-01-15'

-- Or using standard ISO string:
WHERE PaymentDate >= '2026-01-15' AND PaymentDate < '2026-01-16'`}
                </div>
              )}
            </div>
          </div>

          {/* Broken Query 2 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-amber-700 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> BROKEN QUERY 2
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">Leads</span>
              </div>
              <pre className="text-xs font-mono bg-[#0b173e] p-2.5 rounded-xl border border-blue-950 text-slate-300 mb-2.5">
{`SELECT LeadName,
       CreatedDate + 30 AS FollowUpDate
FROM Leads;`}
              </pre>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                <span className="font-semibold text-slate-900">Task:</span> This runs, but adds 30 to the wrong thing. Replace it with the correct date function from this session.
              </p>
            </div>

            <div>
              <button
                onClick={() => toggleEx2('q2')}
                className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 border border-slate-300 flex items-center justify-center gap-2 transition-colors"
              >
                {q2Open ? 'Hide Fix' : 'Reveal Fix'}
              </button>
              {q2Open && (
                <div className="mt-2.5 p-2.5 rounded-xl bg-[#0b173e] border border-blue-950 text-xs font-mono text-emerald-300">
{`SELECT LeadName,
       DATEADD(DAY, 30, CreatedDate) AS FollowUpDate
FROM Leads;`}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Discussion Questions */}
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-700 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Discussion Questions:
            </span>
            <button onClick={() => toggleEx2('q3')} className="text-xs text-blue-600 hover:underline font-bold">
              {q3Open ? 'Hide discussion' : 'Show discussion'}
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-1.5">
            Why does Query 1 sometimes appear to work, and sometimes silently return zero rows?
          </p>
          {q3Open && (
            <p className="text-xs text-emerald-800 font-medium mt-2 pt-2 border-t border-slate-100">
              Because 20260115 is an integer, so SQL Server tries to convert PaymentDate to an integer or treats 20260115 as days since 1900-01-01 (resulting in year 2055), matching zero records!
            </p>
          )}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 22: SECTION DIVIDER 3 — CASE WHEN
  // =========================================================
  if (slide.id === 22) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 select-none overflow-hidden bg-transparent">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-80 h-80 rounded-full blur-3xl bg-blue-600/20 pointer-events-none"
        />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl flex flex-col items-center my-auto"
        >
          {/* Orange glowing gradient icon box */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-4 ring-4 ring-orange-500/20">
            <GitBranch className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          {/* Signature Orange Translucent Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold tracking-wider mb-3 shadow-md backdrop-blur-sm">
            <span>PART 3 OF 3 · CASE WHEN</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            CASE WHEN
          </h2>

          {/* Orange Underline Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
            Build <span className="text-amber-400 font-bold">IF-style decision logic</span> directly inside a SQL query
          </p>
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 23: WHAT IS CASE WHEN?
  // =========================================================
  if (slide.id === 23) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Definition */}
        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-3.5 text-center shadow-sm">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            SQL’s version of an <span className="text-blue-700 font-bold">IF statement</span> — evaluated once for every row.
          </p>
        </div>

        {/* Interactive Price Flow Tester */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-blue-600" /> DECISION FLOW FOR ONE ROW:
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Test Price:</span>
              <input 
                type="number" 
                value={caseSimPrice} 
                onChange={e => setCaseSimPrice(parseFloat(e.target.value) || 0)}
                className="w-24 bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-blue-900 font-mono text-center font-bold focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
            {/* Step 1 */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center">
              <span className="text-[11px] text-slate-500 font-mono mb-0.5">Row Value</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-blue-700">Price = {caseSimPrice}</span>
            </div>

            {/* Step 2 */}
            <div className={`p-3 rounded-xl border flex flex-col justify-center transition-colors ${
              caseSimPrice < 100 ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-500'
            }`}>
              <span className="text-[11px] font-mono mb-0.5">WHEN Price &lt; 100?</span>
              <span className="text-xs sm:text-sm font-bold font-mono">{caseSimPrice < 100 ? 'YES → MATCH!' : 'NO → Continue'}</span>
            </div>

            {/* Step 3 */}
            <div className={`p-3 rounded-xl border flex flex-col justify-center transition-colors ${
              caseSimPrice >= 100 && caseSimPrice < 300 ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-500'
            }`}>
              <span className="text-[11px] font-mono mb-0.5">WHEN Price &lt; 300?</span>
              <span className="text-xs sm:text-sm font-bold font-mono">
                {caseSimPrice < 100 ? 'Skipped' : caseSimPrice < 300 ? 'YES → MATCH!' : 'NO → Continue'}
              </span>
            </div>

            {/* Final Output */}
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 flex flex-col justify-center">
              <span className="text-[11px] text-slate-500 font-mono mb-0.5">Output Value</span>
              <span className="text-xs sm:text-sm font-mono font-bold text-emerald-700">
                {caseSimPrice < 100 ? "'Budget'" : caseSimPrice < 300 ? "'Standard'" : "'Premium'"}
              </span>
            </div>
          </div>
        </div>

        {/* Behavioral Rule Callout */}
        <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-100 text-blue-700 shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">Execution Order:</span> CASE WHEN checks conditions in order, top to bottom, and stops at the first one that is TRUE. If nothing matches, it falls through to ELSE (or NULL if there is no ELSE). It behaves like Excel’s nested IF() or IFS() — but lives inside the SELECT list, so it runs once per row automatically.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 24: SIMPLE CASE — MATCHING EXACT VALUES
  // =========================================================
  if (slide.id === 24) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Syntax Banner */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700">SYNTAX:</span>
            <code className="text-xs sm:text-sm font-mono text-emerald-700 font-bold">CASE column WHEN value1 THEN result1 ... ELSE default END</code>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 border border-blue-200 font-bold">
            EXACT VALUE MATCH
          </span>
        </div>

        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 sm:p-5 shadow-md">
          <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan-400" /> Students Status Mapping
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    StudentName,
    Status,
    CASE Status
        WHEN 'Active'    THEN 'Currently Studying'
        WHEN 'Completed' THEN 'Graduated'
        WHEN 'Dropped'   THEN 'Withdrawn'
        ELSE 'Unknown'
    END AS StatusLabel
FROM Students;`}
          </pre>
        </div>

        {/* Best For Callout */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">Best for:</span> Exact matches on a single column, like status codes or category labels.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 25: SEARCHED CASE — MATCHING CONDITIONS
  // =========================================================
  if (slide.id === 25) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Syntax Banner */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-700">SYNTAX:</span>
            <code className="text-xs sm:text-sm font-mono text-emerald-700 font-bold">CASE WHEN cond1 THEN result1 WHEN cond2 THEN result2 ELSE default END</code>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-purple-100 text-purple-800 border border-purple-200 font-bold">
            CONDITIONAL PREDICATES
          </span>
        </div>

        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 sm:p-5 shadow-md">
          <div className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-purple-400" /> Courses Pricing Tier Classification
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    CourseName,
    Price,
    CASE
        WHEN Price < 100 THEN 'Budget'
        WHEN Price < 300 THEN 'Standard'
        ELSE 'Premium'
    END AS PriceTier
FROM Courses;`}
          </pre>
        </div>

        {/* Best For Callout */}
        <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
          <p className="text-xs text-blue-950 leading-relaxed">
            <span className="font-bold text-blue-800">Best for:</span> Ranges, comparisons (&lt;, &gt;, BETWEEN), or logic spanning more than one column. Most real-world CASE statements are searched CASE.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 26: LIVE DEMO — STUDENT STATUS BREAKDOWN
  // =========================================================
  if (slide.id === 26) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-2.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          {/* Code Box */}
          <div className="lg:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-3.5 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Grouping by Computed CASE
                </span>
                <span className="text-xs text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">Students Table</span>
              </div>
              <pre className="text-xs font-mono text-slate-100 leading-snug overflow-x-auto">
{`SELECT
    CASE Status
        WHEN 'Active'    THEN 'Currently Studying'
        WHEN 'Completed' THEN 'Graduated'
        WHEN 'Dropped'   THEN 'Withdrawn'
        ELSE 'Unknown'
    END AS StatusLabel,
    COUNT(*) AS StudentCount
FROM Students
GROUP BY
    CASE Status
        WHEN 'Active'    THEN 'Currently Studying'
        WHEN 'Completed' THEN 'Graduated'
        WHEN 'Dropped'   THEN 'Withdrawn'
        ELSE 'Unknown'
    END;`}
              </pre>
            </div>
            <div className="mt-2 pt-1.5 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Computed expression used in both SELECT and GROUP BY</span>
            </div>
          </div>

          {/* Results Table & Rule */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm flex flex-col flex-1">
              <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Table className="w-3.5 h-3.5 text-blue-600" /> Aggregated Groups
                </span>
                <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">2 rows</span>
              </div>
              <table className="w-full text-left text-xs flex-1">
                <thead className="bg-[#0052cc] text-white text-[11px] uppercase font-bold tracking-wider">
                  <tr>
                    <th className="py-2.5 px-4">StatusLabel</th>
                    <th className="py-2.5 px-4">StudentCount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-xs">
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2.5 px-4 text-slate-900 font-medium font-sans">Currently Studying</td>
                    <td className="py-2.5 px-4 text-blue-700 font-bold">184</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2.5 px-4 text-slate-900 font-medium font-sans">Graduated</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-bold">96</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
              <div className="flex items-center gap-1.5 text-amber-800 text-xs font-bold mb-1">
                <AlertTriangle className="w-4 h-4 text-amber-600" /> Note the repeat:
              </div>
              <p className="text-xs text-amber-950 leading-relaxed">
                The same CASE expression appears in both SELECT and GROUP BY — SQL Server groups by the calculated label, not the original column.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 27: LIVE DEMO — COURSE PRICING TIERS
  // =========================================================
  if (slide.id === 27) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Code Box */}
          <div className="lg:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Continuous to Discrete Bucketing
                </span>
                <span className="text-xs text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">Courses Table</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    CASE
        WHEN Price < 100 THEN 'Budget'
        WHEN Price < 300 THEN 'Standard'
        ELSE 'Premium'
    END AS PriceTier,
    COUNT(*)   AS CourseCount,
    AVG(Price) AS AvgPrice
FROM Courses
GROUP BY
    CASE
        WHEN Price < 100 THEN 'Budget'
        WHEN Price < 300 THEN 'Standard'
        ELSE 'Premium'
    END;`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Groups numeric ranges into analytical categories</span>
            </div>
          </div>

          {/* Results Table & Insight */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm flex flex-col flex-1">
              <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Table className="w-3.5 h-3.5 text-blue-600" /> Aggregated Tiers
                </span>
                <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">3 tiers</span>
              </div>
              <table className="w-full text-left text-xs flex-1">
                <thead className="bg-[#0052cc] text-white text-[11px] uppercase font-bold tracking-wider">
                  <tr>
                    <th className="py-2.5 px-3">PriceTier</th>
                    <th className="py-2.5 px-3">Count</th>
                    <th className="py-2.5 px-3">AvgPrice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-xs">
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2.5 px-3 text-emerald-700 font-bold font-sans">Budget</td>
                    <td className="py-2.5 px-3 text-slate-900 font-medium">12</td>
                    <td className="py-2.5 px-3 text-blue-700 font-bold">72.40</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2.5 px-3 text-blue-700 font-bold font-sans">Standard</td>
                    <td className="py-2.5 px-3 text-slate-900 font-medium">21</td>
                    <td className="py-2.5 px-3 text-blue-700 font-bold">198.10</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2.5 px-3 text-purple-700 font-bold font-sans">Premium</td>
                    <td className="py-2.5 px-3 text-slate-900 font-medium">7</td>
                    <td className="py-2.5 px-3 text-blue-700 font-bold">415.60</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-100 text-blue-700 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900">Classic "bucketing" pattern:</span> Turning a continuous number into readable groups for a chart or dashboard filter.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 28: LIVE DEMO — LEAD FUNNEL STAGE
  // =========================================================
  if (slide.id === 28) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Code Box */}
          <div className="lg:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Mapping Text Statuses to Funnel Order
                </span>
                <span className="text-xs text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">Leads Table</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    Status,
    CASE Status
        WHEN 'New'       THEN 1
        WHEN 'Contacted' THEN 2
        WHEN 'Qualified' THEN 3
        WHEN 'Converted' THEN 4
        ELSE 0
    END AS FunnelStage,
    COUNT(*) AS LeadCount
FROM Leads
GROUP BY Status;`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Converts unordered text into an ordered integer sequence</span>
            </div>
          </div>

          {/* Results Table & Tip */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm flex flex-col flex-1">
              <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Table className="w-3.5 h-3.5 text-blue-600" /> Funnel Output
                </span>
                <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">4 stages</span>
              </div>
              <table className="w-full text-left text-xs flex-1">
                <thead className="bg-[#0052cc] text-white text-[11px] uppercase font-bold tracking-wider">
                  <tr>
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3">FunnelStage</th>
                    <th className="py-2 px-3">LeadCount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-xs">
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2 px-3 text-slate-900 font-medium font-sans">New</td>
                    <td className="py-2 px-3 text-blue-700 font-bold">1</td>
                    <td className="py-2 px-3 text-emerald-700 font-bold">140</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2 px-3 text-slate-900 font-medium font-sans">Contacted</td>
                    <td className="py-2 px-3 text-blue-700 font-bold">2</td>
                    <td className="py-2 px-3 text-emerald-700 font-bold">95</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2 px-3 text-slate-900 font-medium font-sans">Qualified</td>
                    <td className="py-2 px-3 text-blue-700 font-bold">3</td>
                    <td className="py-2 px-3 text-emerald-700 font-bold">48</td>
                  </tr>
                  <tr className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-2 px-3 text-slate-900 font-medium font-sans">Converted</td>
                    <td className="py-2 px-3 text-blue-700 font-bold">4</td>
                    <td className="py-2 px-3 text-emerald-700 font-bold">22</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
              <p className="text-xs text-amber-950 leading-relaxed">
                <span className="font-bold text-amber-800">FunnelStage:</span> Lets you ORDER BY a logical sequence instead of alphabetically.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 29: HANDS-ON EXERCISE 3
  // =========================================================
  if (slide.id === 29) {
    const q1Open = ex3Open['q1'];
    const q2Open = ex3Open['q2'];
    const q3Open = ex3Open['q3'];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3 text-slate-800 select-none my-auto">
        <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="font-bold">Hands-On Exercise 3 — Combine Everything (20 Minutes)</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">SalesAgents Table</span>
        </div>

        {/* 3 Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Task 1 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-bold text-slate-900 block mb-1">1. Classify Commission</span>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Write a CASE WHEN on SalesAgents: below 1000 = 'Low', 1000–3000 = 'Medium', above 3000 = 'High'. Name column <code className="text-blue-800 font-mono font-bold">PerformanceTier</code>.
              </p>
            </div>
            <div>
              <button
                onClick={() => toggleEx3('q1')}
                className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 border border-slate-300 flex items-center justify-center gap-1 transition-colors"
              >
                {q1Open ? 'Hide Solution' : 'Reveal Solution'}
              </button>
              {q1Open && (
                <pre className="mt-2.5 p-3 rounded-xl bg-[#0b173e] border border-blue-950 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`SELECT AgentName, Commission,
    CASE
        WHEN Commission < 1000 THEN 'Low'
        WHEN Commission <= 3000 THEN 'Medium'
        ELSE 'High'
    END AS PerformanceTier
FROM SalesAgents;`}
                </pre>
              )}
            </div>
          </div>

          {/* Task 2 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-bold text-slate-900 block mb-1">2. Count Agents Per Tier</span>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Extend the query with <code className="text-blue-800 font-mono font-bold">GROUP BY</code> and <code className="text-blue-800 font-mono font-bold">COUNT(*)</code> to return one row per PerformanceTier with agent count.
              </p>
            </div>
            <div>
              <button
                onClick={() => toggleEx3('q2')}
                className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 border border-slate-300 flex items-center justify-center gap-1 transition-colors"
              >
                {q2Open ? 'Hide Solution' : 'Reveal Solution'}
              </button>
              {q2Open && (
                <pre className="mt-2.5 p-3 rounded-xl bg-[#0b173e] border border-blue-950 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`SELECT
    CASE
        WHEN Commission < 1000 THEN 'Low'
        WHEN Commission <= 3000 THEN 'Medium'
        ELSE 'High'
    END AS PerformanceTier,
    COUNT(*) AS AgentCount
FROM SalesAgents
GROUP BY
    CASE
        WHEN Commission < 1000 THEN 'Low'
        WHEN Commission <= 3000 THEN 'Medium'
        ELSE 'High'
    END;`}
                </pre>
              )}
            </div>
          </div>

          {/* Task 3 (Stretch Goal) */}
          <div className="p-4 rounded-2xl bg-white border border-amber-300 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-bold text-amber-800 block mb-1">🌟 STRETCH GOAL</span>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Also CAST MonthlyTarget to <code className="text-blue-800 font-mono font-bold">DECIMAL(10,2)</code> and show Commission as a percentage of target rounded to 1 decimal place.
              </p>
            </div>
            <div>
              <button
                onClick={() => toggleEx3('q3')}
                className="w-full py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-xs font-semibold text-amber-900 border border-amber-300 flex items-center justify-center gap-1 transition-colors"
              >
                {q3Open ? 'Hide Solution' : 'Reveal Solution'}
              </button>
              {q3Open && (
                <pre className="mt-2.5 p-3 rounded-xl bg-[#0b173e] border border-blue-950 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`SELECT AgentName,
    ROUND(Commission / 
          CAST(MonthlyTarget AS DECIMAL(10,2)) * 100, 1) 
          AS CommissionPct
FROM SalesAgents;`}
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 30: SESSION RECAP & KNOWLEDGE CHECK
  // =========================================================
  if (slide.id === 30) {
    const questions = [
      {
        id: 1,
        q: '1. A scalar function runs once per ____, while an aggregate function collapses many rows into ____.',
        a: 'Runs once per ROW, while an aggregate function collapses many rows into A SINGLE SUMMARY ROW.'
      },
      {
        id: 2,
        q: '2. Which function should you use if a text column might contain values that fail to convert cleanly?',
        a: 'TRY_CAST or TRY_CONVERT (they return NULL instead of terminating the batch).'
      },
      {
        id: 3,
        q: '3. In a searched CASE, what happens if a row matches no WHEN condition and there is no ELSE?',
        a: 'It returns NULL.'
      },
      {
        id: 4,
        q: '4. Name one column from today’s tables you would apply DATEDIFF to, and explain why.',
        a: 'EnrollDate or PaymentDate (to compute days elapsed since sign-up or payment recency).'
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* 3 Pillars Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-center shadow-sm">
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">Scalar Functions</span>
            <span className="text-xs font-mono text-slate-800 font-bold">UPPER · TRIM · DATEDIFF · ROUND</span>
          </div>
          <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200 text-center shadow-sm">
            <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block">Conversion Functions</span>
            <span className="text-xs font-mono text-slate-800 font-bold">CAST · CONVERT · TRY_CAST</span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-center shadow-sm">
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">CASE WHEN</span>
            <span className="text-xs font-mono text-slate-800 font-bold">Simple CASE · Searched CASE</span>
          </div>
        </div>

        {/* 4 Interactive Quiz Items */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
            QUICK KNOWLEDGE CHECK (Click to reveal answer):
          </span>
          {questions.map((q) => {
            const isRevealed = quizAnswers[q.id];
            return (
              <div 
                key={q.id}
                onClick={() => toggleQuiz(q.id)}
                className={`cursor-pointer p-3 rounded-xl border transition-colors ${
                  isRevealed ? 'bg-blue-50 border-blue-400' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-[13px] text-slate-800 font-medium">{q.q}</p>
                  <span className="text-[11px] text-blue-700 shrink-0 font-bold ml-2">
                    {isRevealed ? 'Hide' : 'Reveal'}
                  </span>
                </div>
                {isRevealed && (
                  <p className="text-xs text-emerald-800 font-bold mt-2 pt-2 border-t border-slate-200">
                    💡 Answer: {q.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="px-4 py-2.5 rounded-2xl bg-slate-100 border border-slate-200 text-center text-xs text-slate-700 font-medium">
          Core Takeaway: Three function families — one shared skill: shaping data inside the query itself.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 31: OUTRO HERO
  // =========================================================
  if (slide.id === 31) {
    return (
      <ThankYouVisual 
        sessionNumber="26"
        sessionTitle="SQL Built-in Functions & CASE WHEN"
        nextSessionNote="Next Session: Multi-Table Relational Joins (INNER, LEFT, RIGHT, FULL OUTER)"
        nextSessionButtonText="Explore Joins & Relations"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
      />
    );
  }

  return null;
};
