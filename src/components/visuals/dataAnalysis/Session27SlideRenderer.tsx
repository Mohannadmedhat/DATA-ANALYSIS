import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { HeroCoverVisual } from './HeroCoverVisual';
import { ThankYouVisual } from './ThankYouVisual';
import { 
  Database,
  Layers,
  ArrowRight,
  Code2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Table,
  HelpCircle,
  Clock,
  Sparkles,
  GitBranch,
  ShieldAlert,
  Users,
  Calendar,
  Grid,
  TrendingUp,
  Filter,
  Check,
  Search,
  Hash,
  Play
} from 'lucide-react';

interface Session27SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onPrev?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session27SlideRenderer: React.FC<Session27SlideRendererProps> = ({
  slide,
  onNext,
  onPrev,
  onSelectSlide,
}) => {
  // State hooks for interactive slides
  const [selectedJoinType, setSelectedJoinType] = useState<'inner' | 'left' | 'right' | 'full'>('inner');
  const [labOpen, setLabOpen] = useState<{ [key: string]: boolean }>({});
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: boolean }>({});
  const [activeRankTab, setActiveRankTab] = useState<'row_number' | 'rank' | 'dense_rank' | 'ntile'>('rank');
  const [showNullRows, setShowNullRows] = useState<boolean>(true);

  const toggleLab = (id: string) => {
    setLabOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleQuiz = (id: number) => {
    setQuizAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // =========================================================
  // SLIDE 01: COVER HERO
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual 
        sessionNumber="27"
        titlePrefix="SQL"
        titleHighlight="JOINS & SUBQUERIES"
        subtitle="SQL Joins · Self Join · Cross Join · UNION · Subqueries · EXISTS & IN · Ranking Functions"
        floatingBadges={[
          { icon: Layers, label: "Core Relational Joins", position: "top-left", borderColor: "border-blue-500/50", textColor: "text-blue-400" },
          { icon: GitBranch, label: "Self Join & UNION Sets", position: "top-right", borderColor: "border-indigo-500/50", textColor: "text-indigo-400" },
          { icon: Search, label: "Subqueries & Correlated Logic", position: "bottom-left", borderColor: "border-purple-500/50", textColor: "text-purple-400" },
          { icon: TrendingUp, label: "Window Ranking Functions", position: "bottom-right", borderColor: "border-emerald-500/50", textColor: "text-emerald-400" }
        ]}
        statsCards={[
          { val: "4 Blocks", label: "Relational Pillars", sub: "Joins, Sets, Subqueries & Ranking" },
          { val: "31 Slides", label: "Interactive Guide", sub: "Multi-Table Analytics" },
          { val: "5 Lab Tasks", label: "Hands-on Queries", sub: "Real Business Data" }
        ]}
        onStart={() => onSelectSlide ? onSelectSlide(1) : onNext?.()}
      />
    );
  }

  // =========================================================
  // SLIDE 02: SESSION AGENDA
  // =========================================================
  if (slide.id === 2) {
    const agendaCards = [
      {
        num: '1',
        title: 'Core SQL Joins',
        desc: 'INNER, LEFT, RIGHT, FULL OUTER — combining data across related tables.',
        icon: Layers,
        color: 'blue'
      },
      {
        num: '2',
        title: 'Self Join, Cross Join & UNION',
        desc: 'A table joined to itself, every-row combinations, and stacking result sets.',
        icon: GitBranch,
        color: 'indigo'
      },
      {
        num: '3',
        title: 'Subqueries',
        desc: 'Queries inside queries — WHERE, IN, EXISTS, and correlated subqueries.',
        icon: Search,
        color: 'purple'
      },
      {
        num: '4',
        title: 'Ranking Functions',
        desc: 'ROW_NUMBER, RANK, DENSE_RANK, NTILE with OVER() and PARTITION BY.',
        icon: TrendingUp,
        color: 'emerald'
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {agendaCards.map((c) => {
            const Icon = c.icon;
            return (
              <div 
                key={c.num}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3.5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
                  {c.num}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-blue-600" /> {c.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Takeaway banner */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/80 flex items-center gap-3 shadow-sm">
          <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-800 font-medium leading-relaxed">
            <span className="font-bold text-blue-900">Outcome:</span> By the end of this session you will write multi-table analytical queries — the core skill behind every real dashboard and enterprise report.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 03: QUICK RECAP — SESSIONS 2 & 3
  // =========================================================
  if (slide.id === 3) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Left Column: What we know */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-3">
                You already know how to filter, sort, and label a single table:
              </span>
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-2.5 text-xs text-blue-950 font-medium">
                  <Filter className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong className="text-blue-800">WHERE</strong> filters rows by a condition</span>
                </div>
                <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center gap-2.5 text-xs text-indigo-950 font-medium">
                  <TrendingUp className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span><strong className="text-indigo-800">ORDER BY</strong> sorts the result set</span>
                </div>
                <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-100 flex items-center gap-2.5 text-xs text-purple-950 font-medium">
                  <Code2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span><strong className="text-purple-800">CASE WHEN</strong> labels rows conditionally</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-2.5 text-xs text-emerald-950 font-medium">
                  <Hash className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong className="text-emerald-800">Aggregate functions</strong> summarize groups</span>
                </div>
              </div>
            </div>

            <div className="mt-3 py-1.5 px-3 rounded-xl bg-slate-100 text-center text-xs font-mono font-bold text-slate-700 border border-slate-200">
              ALL FROM ONE TABLE: STUDENTS
            </div>
          </div>

          {/* Right Column: Code sample */}
          <div className="lg:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Session 3 Query Style: One Table Only
                </span>
                <span className="text-[11px] text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">Students Table</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    StudentName,
    City,
    CASE
        WHEN Status = 'Active' THEN 'Currently Studying'
        ELSE 'Inactive'
    END AS StudentState
FROM Students
WHERE City = 'Cairo'
ORDER BY StudentName ASC;`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>Limited to fields existing physically inside the Students table</span>
            </div>
          </div>
        </div>

        {/* The Limit Warning */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">The Limit:</span> A single table can't tell you which Course a student enrolled in, or which Campaign brought in a Lead. For that, we need <span className="font-bold text-blue-700">JOINS</span>!
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04: THE BIG IDEA — WHY DO WE NEED JOINS?
  // =========================================================
  if (slide.id === 4) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
          {/* Left Column: Conceptual explanation */}
          <div className="md:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-blue-900 flex items-center gap-2 mb-1">
                  <Table className="w-4 h-4 text-blue-600" /> Think Excel First
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  In Excel, you'd use <code className="text-blue-700 font-mono font-bold bg-blue-50 px-1 py-0.5 rounded">VLOOKUP</code> or <code className="text-blue-700 font-mono font-bold bg-blue-50 px-1 py-0.5 rounded">INDEX/MATCH</code> to pull a value from another sheet — like looking up a CourseName from a Courses sheet using a CourseID.
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-indigo-900 flex items-center gap-2 mb-1">
                  <Database className="w-4 h-4 text-indigo-600" /> SQL Databases Work The Same Way
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Data lives in separate, normalized tables to avoid repetition. A <span className="font-bold text-slate-900">JOIN</span> is how SQL performs that lookup — matching rows across tables using a shared key column.
                </p>
              </div>
            </div>

            <div className="mt-3 p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono text-blue-900">
              <span className="text-slate-500 font-sans block mb-0.5 font-bold">Excel Analogy:</span>
              <code>VLOOKUP(CourseID, Courses!A:B, 2, FALSE) ≈ SQL JOIN ON CourseID</code>
            </div>
          </div>

          {/* Right Column: Visual Table Linking */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 shadow-sm flex flex-col justify-around">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block text-center mb-1">
              Shared Key Relationship
            </span>

            {/* Table 1: Enrollments */}
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-blue-700 mb-1 flex items-center justify-between">
                <span>Enrollments</span>
                <span className="text-[10px] text-slate-400 font-mono">Foreign Key</span>
              </div>
              <div className="text-[11px] font-mono text-slate-600 space-y-0.5">
                <div>EnrollmentID</div>
                <div>StudentID</div>
                <div className="text-amber-700 font-bold bg-amber-50 px-1 rounded inline-block">CourseID (FK)</div>
                <div>EnrollDate</div>
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex items-center justify-center gap-2 my-1 text-xs font-bold text-amber-600">
              <ArrowRight className="w-4 h-4 rotate-90" />
              <span className="text-[11px] bg-amber-100/80 px-2 py-0.5 rounded-full border border-amber-300">matched on CourseID</span>
            </div>

            {/* Table 2: Courses */}
            <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-emerald-700 mb-1 flex items-center justify-between">
                <span>Courses</span>
                <span className="text-[10px] text-slate-400 font-mono">Primary Key</span>
              </div>
              <div className="text-[11px] font-mono text-slate-600 space-y-0.5">
                <div className="text-emerald-700 font-bold bg-emerald-50 px-1 rounded inline-block">CourseID (PK)</div>
                <div>CourseName</div>
                <div>Category</div>
                <div>Price</div>
              </div>
            </div>
          </div>
        </div>

        {/* Takeaway banner */}
        <div className="p-3.5 rounded-2xl bg-[#0b173e] text-white flex items-center gap-3 shadow-md">
          <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            <span className="font-bold text-cyan-300">Key takeaway:</span> Normalization keeps data clean and small. Joins are the price — and the superpower — of relational database design.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: INNER JOIN — ONLY THE MATCHES
  // =========================================================
  if (slide.id === 5) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
          {/* Left Column: Interactive Venn Diagram */}
          <div className="md:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
              Venn Diagram Representation
            </span>

            {/* Venn graphic */}
            <div className="relative w-64 h-44 flex items-center justify-center select-none">
              {/* Left Circle: Students */}
              <div className="absolute left-4 w-36 h-36 rounded-full border-2 border-blue-400 bg-blue-100/40 flex items-center justify-start pl-3 text-xs font-bold text-blue-900">
                <span className="-mt-16">Students</span>
              </div>

              {/* Right Circle: Enrollments */}
              <div className="absolute right-4 w-36 h-36 rounded-full border-2 border-indigo-400 bg-indigo-100/40 flex items-center justify-end pr-2 text-xs font-bold text-indigo-900">
                <span className="-mt-16">Enrollments</span>
              </div>

              {/* Highlighted Intersection */}
              <div className="relative z-10 w-20 h-28 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex flex-col items-center justify-center text-center p-1 shadow-lg ring-4 ring-orange-400/30">
                <span className="text-[10px] font-bold uppercase tracking-tight">Rows Returned</span>
                <span className="text-[9px] font-mono mt-0.5 text-amber-100">Matches Only</span>
              </div>
            </div>

            <div className="mt-2 text-center text-[11px] text-slate-500">
              Unmatched students & unmatched enrollments are excluded.
            </div>
          </div>

          {/* Right Column: What it does cards */}
          <div className="md:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">What it does:</h4>
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Returns only rows where the join condition matches in BOTH tables.</strong>
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    If a StudentID has no row in Enrollments, that student disappears completely from the query output.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-blue-700">The most common join</strong> — use it whenever you only care about strictly connected records.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
              💡 <strong>Default:</strong> When you write just <code className="font-mono font-bold">JOIN</code> without a modifier, SQL Server treats it as <code className="font-mono font-bold">INNER JOIN</code>.
            </div>
          </div>
        </div>

        {/* Plain English Translation */}
        <div className="p-3.5 rounded-2xl bg-[#0b173e] text-white flex items-center gap-3 shadow-md">
          <div className="p-2 rounded-xl bg-orange-500 text-white shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            <span className="font-bold text-orange-400">Plain English:</span> “Show me every enrollment record, together with the student's name and course — but <span className="font-bold text-white underline">only</span> for students who actually enrolled.”
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 06: INNER JOIN — SYNTAX
  // =========================================================
  if (slide.id === 6) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> T-SQL INNER JOIN Syntax
            </span>
            <span className="text-[11px] text-emerald-400 font-mono font-bold bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">Canonical Pattern</span>
          </div>
          <pre className="text-xs sm:text-sm font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT columns
FROM TableA
INNER JOIN TableB
    ON TableA.KeyColumn = TableB.KeyColumn;`}
          </pre>
        </div>

        {/* 3 Step Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-7 h-7 rounded-xl bg-orange-500 text-white font-bold text-xs flex items-center justify-center shrink-0">1</div>
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-0.5">Select Columns</span>
              <p className="text-xs text-slate-600">Choose the columns you want to see from either table.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-7 h-7 rounded-xl bg-orange-500 text-white font-bold text-xs flex items-center justify-center shrink-0">2</div>
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-0.5">Start FROM Main Table</span>
              <p className="text-xs text-slate-600">The left-hand table acts as the primary starting point.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-7 h-7 rounded-xl bg-orange-500 text-white font-bold text-xs flex items-center justify-center shrink-0">3</div>
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-0.5">INNER JOIN & ON</span>
              <p className="text-xs text-slate-600">Specify the second table and match key columns in the ON clause.</p>
            </div>
          </div>
        </div>

        {/* ON vs WHERE callout */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">ON vs WHERE:</span> The <code className="text-amber-900 font-mono font-bold">ON</code> clause defines <span className="font-bold text-slate-900">HOW</span> tables connect (the key match condition). The <code className="text-amber-900 font-mono font-bold">WHERE</code> clause (optional, added afterwards) filters the joined result set further — e.g. <code className="text-amber-900 font-mono font-bold">WHERE City = 'Cairo'</code>.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 07: INNER JOIN — WORKED EXAMPLE
  // =========================================================
  if (slide.id === 7) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> Goal: List Every Student with Enrolled Course Name
            </span>
            <span className="text-[11px] text-slate-400 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">Students + Enrollments + Courses</span>
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    s.StudentName,
    c.CourseName,
    e.EnrollDate
FROM Students AS s
INNER JOIN Enrollments AS e ON s.StudentID = e.StudentID
INNER JOIN Courses AS c     ON e.CourseID  = c.CourseID;`}
          </pre>
        </div>

        {/* Results Table */}
        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Table className="w-3.5 h-3.5 text-blue-600" /> Joined Query Output
            </span>
            <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">3 rows matched</span>
          </div>
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0052cc] text-white text-[11px] uppercase font-bold tracking-wider">
              <tr>
                <th className="py-2.5 px-4">StudentName</th>
                <th className="py-2.5 px-4">CourseName</th>
                <th className="py-2.5 px-4">EnrollDate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-xs">
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-2.5 px-4 text-slate-900 font-medium font-sans">Mona Adel</td>
                <td className="py-2.5 px-4 text-blue-700 font-bold font-sans">SQL for Analysts</td>
                <td className="py-2.5 px-4 text-slate-600 font-sans">2026-02-11</td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-2.5 px-4 text-slate-900 font-medium font-sans">Ali Hassan</td>
                <td className="py-2.5 px-4 text-blue-700 font-bold font-sans">Excel Fundamentals</td>
                <td className="py-2.5 px-4 text-slate-600 font-sans">2026-02-14</td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-2.5 px-4 text-slate-900 font-medium font-sans">Yara Fathy</td>
                <td className="py-2.5 px-4 text-blue-700 font-bold font-sans">Python Basics</td>
                <td className="py-2.5 px-4 text-slate-600 font-sans">2026-03-02</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Note callout */}
        <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
          <div className="p-1.5 rounded-full bg-blue-100 text-blue-700 shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">Note:</span> Students with no enrollment row simply do not appear here. INNER JOIN strictly requires matching keys in all joined tables.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 08: LEFT JOIN — KEEP EVERYTHING ON THE LEFT
  // =========================================================
  if (slide.id === 8) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
          {/* Left Column: Venn Diagram */}
          <div className="md:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
              LEFT OUTER JOIN Diagram
            </span>

            <div className="relative w-64 h-44 flex items-center justify-center select-none">
              {/* Entire Left Circle Filled */}
              <div className="absolute left-4 w-36 h-36 rounded-full border-2 border-blue-500 bg-blue-600 text-white flex items-center justify-start pl-3 text-xs font-bold shadow-lg">
                <span className="-mt-16 text-white font-extrabold">Students</span>
              </div>

              {/* Right Circle Outline Only */}
              <div className="absolute right-4 w-36 h-36 rounded-full border-2 border-slate-300 bg-white/70 flex items-center justify-end pr-2 text-xs font-bold text-slate-500">
                <span className="-mt-16">Enrollments</span>
              </div>

              {/* Center intersection text */}
              <div className="relative z-10 w-20 h-28 flex flex-col items-center justify-center text-center p-1">
                <span className="text-[10px] font-bold text-white drop-shadow">Matches</span>
                <span className="text-[9px] font-mono text-blue-100">+ NULLs</span>
              </div>
            </div>

            <div className="mt-2 text-center text-[11px] text-blue-700 font-bold">
              100% of Left Rows Preserved!
            </div>
          </div>

          {/* Right Column: Key Rules */}
          <div className="md:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">What it does:</h4>
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Returns ALL rows from the left table</strong>, plus any matching rows from the right table.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    If there is no match on the right, its columns come back as <code className="text-rose-700 font-mono font-bold bg-rose-50 px-1 py-0.5 rounded border border-rose-200">NULL</code>.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-blue-700">Perfect for finding "who is missing":</strong> e.g. registered students with zero course enrollments.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 bg-[#0b173e] p-2.5 rounded-xl border border-blue-900/60 font-mono text-xs text-slate-200">
              <code>SELECT s.StudentName, e.EnrollmentID FROM Students s LEFT JOIN Enrollments e ON s.StudentID = e.StudentID;</code>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 09: LEFT JOIN — FINDING ZERO ENROLLMENTS
  // =========================================================
  if (slide.id === 9) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> Finding Inactive Students (The Anti-Join Pattern)
            </span>
            <span className="text-[11px] text-amber-300 font-mono bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">WHERE e.EnrollmentID IS NULL</span>
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    s.StudentID,
    s.StudentName
FROM Students AS s
LEFT JOIN Enrollments AS e ON s.StudentID = e.StudentID
WHERE e.EnrollmentID IS NULL;

-- IS NULL = 'no matching row was found on the right side'`}
          </pre>
        </div>

        {/* The LEFT JOIN + IS NULL pattern explanation */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-blue-600" /> The LEFT JOIN + IS NULL Pattern
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            This is one of the most useful diagnostic patterns in SQL: join to the related table, then filter for the rows where nothing matched (<code className="text-rose-700 font-mono font-bold bg-rose-50 px-1 py-0.5 rounded border border-rose-200">IS NULL</code>). It directly answers critical business questions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>"Which students haven't paid?"</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
              <span>"Which course has no attendance?"</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
              <span>"Which campaign generated zero leads?"</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 10: RIGHT JOIN — KEEP EVERYTHING ON THE RIGHT
  // =========================================================
  if (slide.id === 10) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
          {/* Left: Venn & Practical note */}
          <div className="md:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                RIGHT OUTER JOIN
              </span>
              <div className="relative w-56 h-36 flex items-center justify-center select-none">
                {/* Left Circle Outline */}
                <div className="absolute left-2 w-32 h-32 rounded-full border-2 border-slate-300 bg-white/70 flex items-center justify-start pl-2 text-xs font-bold text-slate-500">
                  <span className="-mt-14">Leads</span>
                </div>
                {/* Right Circle Solid */}
                <div className="absolute right-2 w-32 h-32 rounded-full border-2 border-blue-500 bg-blue-600 text-white flex items-center justify-end pr-2 text-xs font-bold shadow-lg">
                  <span className="-mt-14 text-white font-extrabold">SalesAgents</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">💡 Industry Practice:</span>
              Analysts rarely write RIGHT JOIN — they simply swap the table positions and write a <strong className="text-blue-700">LEFT JOIN</strong> instead. It reads naturally from top-to-bottom and left-to-right.
            </div>
          </div>

          {/* Right: Worked Query */}
          <div className="md:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Finding Agents With Zero Assigned Leads
                </span>
                <span className="text-[11px] text-slate-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">Leads RIGHT JOIN SalesAgents</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`-- Every sales agent, even those with zero leads yet:
SELECT
    a.AgentName,
    l.LeadName
FROM Leads AS l
RIGHT JOIN SalesAgents AS a ON l.AgentID = a.AgentID
WHERE l.LeadID IS NULL;

-- Result: returns agents not yet assigned any lead`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Swapping tables to 'SalesAgents LEFT JOIN Leads' yields identical results</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 11: FULL OUTER JOIN — KEEP EVERYTHING, BOTH SIDES
  // =========================================================
  if (slide.id === 11) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
          {/* Left: Diagram & Explanation */}
          <div className="md:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                FULL OUTER JOIN
              </span>
              <div className="relative w-56 h-36 flex items-center justify-center select-none">
                {/* Both Circles Solid */}
                <div className="absolute left-2 w-32 h-32 rounded-full border-2 border-blue-500 bg-blue-600/85 text-white flex items-center justify-start pl-2 text-xs font-bold shadow-md">
                  <span className="-mt-14">Campaigns</span>
                </div>
                <div className="absolute right-2 w-32 h-32 rounded-full border-2 border-indigo-500 bg-indigo-600/85 text-white flex items-center justify-end pr-2 text-xs font-bold shadow-md">
                  <span className="-mt-14">Leads</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed mt-2">
              <strong className="text-slate-900">FULL OUTER JOIN keeps every row from BOTH tables.</strong> Unmatched columns from either side return as NULL.
            </p>
          </div>

          {/* Right: Code Sample */}
          <div className="md:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Full Relationship Audit
                </span>
                <span className="text-[11px] text-slate-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">Campaigns + Leads</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    c.CampaignName,
    l.LeadName
FROM Campaigns AS c
FULL OUTER JOIN Leads AS l ON c.CampaignID = l.CampaignID;

-- Rows with NULL LeadName: campaign got no leads
-- Rows with NULL CampaignName: lead has no valid campaign`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-purple-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
              <span>Perfect for complete end-to-end data reconciliation audits</span>
            </div>
          </div>
        </div>

        {/* Takeaway banner */}
        <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-purple-600 shrink-0" />
          <p className="text-xs text-purple-950 leading-relaxed">
            <span className="font-bold text-purple-800">Use Case:</span> Audit data quality — find orphaned records on both ends in a single query (campaigns with 0 leads AND leads that reference a deleted or missing campaign).
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 12: JOINS COMPARISON — CHOOSING THE RIGHT ONE
  // =========================================================
  if (slide.id === 12) {
    const joinTypes = [
      {
        name: 'INNER JOIN',
        returns: 'Only matching rows from both tables',
        useWhen: 'Enrollments with valid student & course records',
        tag: 'STRICT',
        color: 'border-blue-300 bg-blue-50/50'
      },
      {
        name: 'LEFT JOIN',
        returns: 'All left rows + matches from right',
        useWhen: 'Students who registered but never enrolled',
        tag: 'MOST USED',
        color: 'border-indigo-300 bg-indigo-50/50'
      },
      {
        name: 'RIGHT JOIN',
        returns: 'All right rows + matches from left',
        useWhen: 'Agents with no assigned leads yet',
        tag: 'SWAPPABLE',
        color: 'border-sky-300 bg-sky-50/50'
      },
      {
        name: 'FULL OUTER',
        returns: 'All rows from both, matched or not',
        useWhen: 'Full data audit of campaigns vs leads',
        tag: 'AUDIT',
        color: 'border-amber-300 bg-amber-50/50'
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {joinTypes.map((j) => (
            <div key={j.name} className={`p-4 rounded-2xl border shadow-sm flex flex-col justify-between ${j.color}`}>
              <div>
                <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-200">
                  <span className="font-mono font-bold text-xs sm:text-sm text-slate-900">{j.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 font-bold border border-slate-200">{j.tag}</span>
                </div>
                <div className="mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">RETURNS:</span>
                  <p className="text-xs text-slate-700 leading-snug">{j.returns}</p>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block mb-1">USE WHEN:</span>
                <p className="text-xs text-slate-600 italic leading-snug">{j.useWhen}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rule of thumb */}
        <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-100 text-blue-700 shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-800 leading-relaxed">
            <span className="font-bold text-slate-900">Rule of Thumb:</span> Start with <span className="font-bold text-blue-700">INNER JOIN</span>. Switch to <span className="font-bold text-indigo-700">LEFT JOIN</span> the moment you need to ask <span className="underline font-bold">"who or what is missing?"</span>.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 13: PUTTING IT TOGETHER — A FOUR-TABLE JOIN
  // =========================================================
  if (slide.id === 13) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Query Box */}
          <div className="lg:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Full Student Lifecycle Query
                </span>
                <span className="text-[11px] text-slate-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">4 Tables</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    s.StudentName,
    c.CourseName,
    e.EnrollDate,
    p.Amount,
    p.Status AS PaymentStatus
FROM Students AS s
INNER JOIN Enrollments AS e ON s.StudentID = e.StudentID
INNER JOIN Courses AS c     ON e.CourseID  = c.CourseID
LEFT JOIN Payments AS p     ON e.EnrollmentID = p.EnrollmentID
ORDER BY s.StudentName;`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Multiplies dimensions horizontally without duplicating student rows</span>
            </div>
          </div>

          {/* Flowchart Breakdown */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col justify-around">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block text-center mb-1">
              Data Pipeline Step-by-Step
            </span>

            <div className="space-y-1.5">
              <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                <span className="font-bold text-blue-900">Students</span>
                <span className="text-slate-500 font-medium">who is enrolling</span>
              </div>
              <div className="text-center text-slate-400 text-xs">↓ INNER JOIN</div>
              <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-between text-xs">
                <span className="font-bold text-indigo-900">+ Enrollments</span>
                <span className="text-slate-500 font-medium">in which course</span>
              </div>
              <div className="text-center text-slate-400 text-xs">↓ INNER JOIN</div>
              <div className="p-2 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-between text-xs">
                <span className="font-bold text-purple-900">+ Courses</span>
                <span className="text-slate-500 font-medium">course details</span>
              </div>
              <div className="text-center text-slate-400 text-xs">↓ LEFT JOIN</div>
              <div className="p-2 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between text-xs">
                <span className="font-bold text-amber-900">+ Payments</span>
                <span className="text-amber-800 font-medium">did they pay?</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notice on Payments LEFT JOIN */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">Critical Architecture Decision:</span> Payments uses <code className="text-amber-900 font-mono font-bold">LEFT JOIN</code> — because a student may have enrolled without paying yet. An INNER JOIN would have accidentally hidden unpaid enrollments from your enrollment report!
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 14: SELF JOIN — A TABLE JOINED TO ITSELF
  // =========================================================
  if (slide.id === 14) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Card 1: SalesAgents a1 */}
          <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-blue-700">SalesAgents (as a1)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">Alias 1</span>
              </div>
              <div className="text-xs font-mono text-slate-600 space-y-1">
                <div className="p-1 rounded bg-slate-50">AgentID: 101</div>
                <div className="p-1 rounded bg-slate-50">AgentName: Nourhan Adel</div>
                <div className="p-1 rounded bg-amber-50 text-amber-900 font-bold">Region: Cairo</div>
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 italic">Represents the first agent in comparison</div>
          </div>

          {/* Card 2: SalesAgents a2 */}
          <div className="p-4 rounded-2xl bg-white border border-indigo-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-indigo-700">SalesAgents (as a2)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">Alias 2</span>
              </div>
              <div className="text-xs font-mono text-slate-600 space-y-1">
                <div className="p-1 rounded bg-slate-50">AgentID: 102</div>
                <div className="p-1 rounded bg-slate-50">AgentName: Tarek Sami</div>
                <div className="p-1 rounded bg-amber-50 text-amber-900 font-bold">Region: Cairo</div>
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 italic">Same physical table, aliased independently</div>
          </div>
        </div>

        {/* Why Alias Twice Callout */}
        <div className="p-4 rounded-2xl bg-[#0b173e] text-white shadow-md">
          <h4 className="text-xs sm:text-sm font-bold text-cyan-300 mb-1.5 flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-cyan-400" /> Why alias twice?
          </h4>
          <p className="text-xs text-slate-200 leading-relaxed">
            SQL needs two distinct table aliases to tell <span className="text-amber-300 font-bold">“this row”</span> apart from <span className="text-amber-300 font-bold">“the row I'm comparing it to”</span>. We give the same physical table two aliases (like <code className="text-cyan-300 font-mono font-bold">a1</code> and <code className="text-cyan-300 font-mono font-bold">a2</code>) and join them on a condition that relates rows to each other — for example, matching agents working in the same region.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 15: SELF JOIN — WORKED EXAMPLE
  // =========================================================
  if (slide.id === 15) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> Peer Benchmarking in the Same Region
            </span>
            <span className="text-[11px] text-slate-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">SalesAgents SELF JOIN</span>
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    a1.AgentName AS Agent1,
    a2.AgentName AS Agent2,
    a1.Region
FROM SalesAgents AS a1
INNER JOIN SalesAgents AS a2
    ON a1.Region = a2.Region
   AND a1.AgentID < a2.AgentID;

-- a1.AgentID < a2.AgentID avoids pairing an agent with themself,
-- and avoids listing each pair twice (A-B and B-A)`}
          </pre>
        </div>

        {/* Why the < condition matters */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">Why the &lt; condition matters:</span> Without it, every agent would match themself (<code className="text-amber-900 font-mono font-bold">Region = Region</code>), and every pair would appear twice (e.g. Ali & Mona, then Mona & Ali). This filtering trick (<code className="text-amber-900 font-mono font-bold">a1.AgentID &lt; a2.AgentID</code>) is unique to self joins and guarantees clean, distinct pairings.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 16: CROSS JOIN — EVERY ROW × EVERY ROW
  // =========================================================
  if (slide.id === 16) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
          {/* Visual Matrix */}
          <div className="md:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
              Cartesian Product (3 × 3 = 9)
            </span>

            {/* 3x3 Grid */}
            <div className="grid grid-cols-3 gap-2 w-48 text-center text-[10px] font-mono font-bold">
              <div className="p-2 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">Course A<br/>Jan</div>
              <div className="p-2 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">Course A<br/>Feb</div>
              <div className="p-2 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">Course A<br/>Mar</div>

              <div className="p-2 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">Course B<br/>Jan</div>
              <div className="p-2 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">Course B<br/>Feb</div>
              <div className="p-2 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">Course B<br/>Mar</div>

              <div className="p-2 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">Course C<br/>Jan</div>
              <div className="p-2 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">Course C<br/>Feb</div>
              <div className="p-2 rounded-lg bg-orange-100 text-orange-800 border border-orange-200">Course C<br/>Mar</div>
            </div>

            <div className="mt-3 text-xs font-mono font-bold text-slate-500">
              3 courses × 3 months = 9 generated rows
            </div>
          </div>

          {/* Syntax & Rules */}
          <div className="md:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Grid className="w-4 h-4 text-cyan-400" /> CROSS JOIN Syntax
                </span>
                <span className="text-[11px] text-amber-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">No ON Clause</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT *
FROM Courses
CROSS JOIN (
    VALUES ('Jan'), ('Feb'), ('Mar')
) AS Months(MonthName);

-- No ON clause — every combination is produced automatically.`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span>Multiplies Table A row count by Table B row count</span>
            </div>
          </div>
        </div>

        {/* Multiplicative Warning Callout */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">Handle with care:</span> 1,000 rows <code className="font-mono font-bold">CROSS JOIN</code> 1,000 rows = <span className="font-bold text-rose-700">1,000,000 rows!</span> Always know your row counts before running a CROSS JOIN on real enterprise tables to prevent memory explosion.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 17: CROSS JOIN — BUILDING A SCHEDULE MATRIX
  // =========================================================
  if (slide.id === 17) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> Goal: Generate Course Availability Matrix for All 4 Quarters
            </span>
            <span className="text-[11px] text-slate-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">Courses × Quarters</span>
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT c.CourseName, q.QuarterName
FROM Courses AS c
CROSS JOIN ( VALUES ('Q1'), ('Q2'), ('Q3'), ('Q4') ) AS q(QuarterName)
ORDER BY c.CourseName, q.QuarterName;`}
          </pre>
        </div>

        {/* Matrix Visualization Table */}
        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Table className="w-3.5 h-3.5 text-blue-600" /> Generated Schedule Matrix
            </span>
            <span className="text-xs text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">2 courses × 4 quarters = 8 slots</span>
          </div>
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0052cc] text-white text-[11px] uppercase font-bold tracking-wider">
              <tr>
                <th className="py-2.5 px-4">Course \ Quarter</th>
                <th className="py-2.5 px-4 text-center">Q1</th>
                <th className="py-2.5 px-4 text-center">Q2</th>
                <th className="py-2.5 px-4 text-center">Q3</th>
                <th className="py-2.5 px-4 text-center">Q4</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-xs">
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-2.5 px-4 text-slate-900 font-medium font-sans">SQL for Analysts</td>
                <td className="py-2.5 px-4 text-center text-emerald-700 font-bold">Slot Ready</td>
                <td className="py-2.5 px-4 text-center text-emerald-700 font-bold">Slot Ready</td>
                <td className="py-2.5 px-4 text-center text-emerald-700 font-bold">Slot Ready</td>
                <td className="py-2.5 px-4 text-center text-emerald-700 font-bold">Slot Ready</td>
              </tr>
              <tr className="hover:bg-blue-50/40 transition-colors">
                <td className="py-2.5 px-4 text-slate-900 font-medium font-sans">Excel Fundamentals</td>
                <td className="py-2.5 px-4 text-center text-blue-700 font-bold">Slot Ready</td>
                <td className="py-2.5 px-4 text-center text-blue-700 font-bold">Slot Ready</td>
                <td className="py-2.5 px-4 text-center text-blue-700 font-bold">Slot Ready</td>
                <td className="py-2.5 px-4 text-center text-blue-700 font-bold">Slot Ready</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tip callout */}
        <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 text-center text-xs text-slate-700">
          Instant availability grid created with zero manual row insertion.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 18: UNION VS UNION ALL — STACKING RESULT SETS
  // =========================================================
  if (slide.id === 18) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-center text-xs text-blue-900 font-medium">
          Joins combine tables <span className="font-bold">side-by-side (more columns)</span>. UNION stacks result sets <span className="font-bold">on top of each other (more rows)</span>.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* UNION Box */}
          <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-blue-700 font-mono">UNION</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">Deduplicated</span>
              </div>
              <p className="text-xs text-slate-600 mb-2 font-medium">Removes duplicate rows automatically:</p>
              <pre className="text-xs font-mono bg-[#0b173e] p-3 rounded-xl border border-blue-950 text-slate-200 mb-2">
{`SELECT Email FROM Students
UNION
SELECT Email FROM Leads;`}
              </pre>
            </div>
            <div className="mt-2 p-2 rounded-lg bg-blue-50 text-xs text-blue-900">
              ⚡ Slower (runs an extra sorting/deduplication step) but guarantees a unique list.
            </div>
          </div>

          {/* UNION ALL Box */}
          <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-bold text-amber-700 font-mono">UNION ALL</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">Includes Duplicates</span>
              </div>
              <p className="text-xs text-slate-600 mb-2 font-medium">Keeps every row, including duplicates:</p>
              <pre className="text-xs font-mono bg-[#0b173e] p-3 rounded-xl border border-blue-950 text-slate-200 mb-2">
{`SELECT Email FROM Students
UNION ALL
SELECT Email FROM Leads;`}
              </pre>
            </div>
            <div className="mt-2 p-2 rounded-lg bg-amber-50 text-xs text-amber-900">
              🚀 Faster — use whenever duplicates are acceptable or known to be impossible.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 19: UNION — BUILDING A UNIFIED CONTACT LIST
  // =========================================================
  if (slide.id === 19) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> Unified Contact Directory (Students + Leads)
            </span>
            <span className="text-[11px] text-slate-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">UNION Set Operation</span>
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT StudentName AS FullName, Email, 'Student' AS SourceType
FROM Students

UNION

SELECT LeadName AS FullName, Email, 'Lead' AS SourceType
FROM Leads;`}
          </pre>
        </div>

        {/* The Golden Rule of UNION */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">The Golden Rule of UNION:</span> Both SELECT statements must return the exact same number of columns, in compatible data types and positions. Column headers in the final output are determined entirely by the <span className="font-bold text-slate-900">FIRST SELECT statement</span> (which is why we aliased StudentName to <code className="text-amber-900 font-mono font-bold">FullName</code>).
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 20: SUBQUERIES — A QUERY INSIDE A QUERY
  // =========================================================
  if (slide.id === 20) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
          {/* Visual Query Nesting Box */}
          <div className="md:col-span-7 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" /> Outer & Inner Query Execution
              </div>
              <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800/60 font-mono text-xs text-slate-200">
                <div className="text-slate-400 mb-1">-- OUTER QUERY</div>
                <div className="text-cyan-300 font-bold">SELECT CourseName FROM Courses</div>
                <div className="text-cyan-300 font-bold">WHERE Price &gt; (</div>
                
                {/* Nested Inner */}
                <div className="my-2 ml-4 p-2.5 rounded-lg bg-[#07102e] border border-amber-500/50 text-amber-300 font-bold">
                  <div className="text-[10px] text-amber-400 uppercase font-sans">INNER QUERY (runs first!)</div>
                  SELECT AVG(Price) FROM Courses
                </div>

                <div className="text-cyan-300 font-bold">);</div>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80">
              Inner query resolves to a value first, which is immediately supplied to the outer query filter.
            </div>
          </div>

          {/* Flavors & Placement */}
          <div className="md:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">Two Core Flavors:</h4>
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                  <span className="text-xs font-bold text-blue-900 block">Scalar Subquery</span>
                  <p className="text-[11px] text-slate-600">Returns exactly ONE value (1 row, 1 column) — usable with =, &gt;, &lt;, &gt;=, &lt;=.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200">
                  <span className="text-xs font-bold text-purple-900 block">Multi-row Subquery</span>
                  <p className="text-[11px] text-slate-600">Returns a LIST of values — usable with IN, EXISTS, ANY, ALL.</p>
                </div>
              </div>
            </div>

            <div className="mt-3 p-2 rounded-xl bg-slate-100 text-[11px] text-slate-600 border border-slate-200">
              <strong className="text-slate-900">Where can it live?</strong> Inside <code className="font-bold">WHERE</code> (most common), inside <code className="font-bold">SELECT</code>, or inside <code className="font-bold">FROM</code>.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 21: SCALAR SUBQUERY IN WHERE
  // =========================================================
  if (slide.id === 21) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> Goal: Find Every Course Priced Above the Overall Average
            </span>
            <span className="text-[11px] text-slate-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">Scalar Subquery</span>
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT CourseName, Price
FROM Courses
WHERE Price > (SELECT AVG(Price) FROM Courses);`}
          </pre>
        </div>

        {/* 3 Step Execution Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">1</div>
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-0.5">Inner Query Runs Once</span>
              <p className="text-xs text-slate-600"><code className="text-blue-700 font-mono font-bold">SELECT AVG(Price)</code> produces a single number, e.g. <strong className="text-slate-900">1,850</strong>.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-7 h-7 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">2</div>
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-0.5">Replaces Subquery</span>
              <p className="text-xs text-slate-600">The query simplifies to: <code className="text-indigo-700 font-mono font-bold">WHERE Price &gt; 1850</code>.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">3</div>
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-0.5">Outer Query Filters</span>
              <p className="text-xs text-slate-600">Every course with price above 1,850 is returned cleanly in the result.</p>
            </div>
          </div>
        </div>

        {/* Warning Callout */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">Cardinal Rule:</span> A scalar subquery used with standard comparison operators (<code className="text-amber-900 font-mono font-bold">&gt;, &lt;, =</code>) must return <span className="font-bold text-slate-900">exactly one row and one column</span>. If the inner query returns multiple rows, SQL Server throws an error!
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 22: IN + SUBQUERY — MATCHING AGAINST A LIST
  // =========================================================
  if (slide.id === 22) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> Goal: Find Students in the 'Data Analytics' Category
            </span>
            <span className="text-[11px] text-purple-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">IN + Subquery</span>
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT StudentName
FROM Students
WHERE StudentID IN (
    SELECT e.StudentID
    FROM Enrollments AS e
    INNER JOIN Courses AS c ON e.CourseID = c.CourseID
    WHERE c.Category = 'Data Analytics'
);`}
          </pre>
        </div>

        {/* How IN works */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-100 text-purple-700 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">How IN works:</span> The inner query returns a <span className="font-bold text-purple-700">LIST of StudentIDs</span>. The outer WHERE keeps only rows whose StudentID appears anywhere in that list — just like Excel's <code className="text-blue-800 font-mono font-bold bg-blue-50 px-1 py-0.5 rounded border border-blue-200">MATCH</code> against a range.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 23: EXISTS — CHECKING FOR EXISTENCE
  // =========================================================
  if (slide.id === 23) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> Checking Existence with EXISTS
            </span>
            <span className="text-[11px] text-emerald-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">Correlated EXISTS</span>
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT StudentName
FROM Students AS s
WHERE EXISTS (
    SELECT 1
    FROM Enrollments AS e
    WHERE e.StudentID = s.StudentID
);

-- 'SELECT 1' is a convention: EXISTS only cares whether a row is found`}
          </pre>
        </div>

        {/* Correlated reference callout */}
        <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-100 text-blue-700 shrink-0">
            <GitBranch className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">Notice the Correlated Reference:</span> <code className="text-blue-800 font-mono font-bold bg-blue-50 px-1 py-0.5 rounded border border-blue-200">e.StudentID = s.StudentID</code> connects the inner query back to the <span className="font-bold text-blue-700">CURRENT outer row</span>. This inner query re-runs once per outer row, answering a simple Yes/No boolean question.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 24: EXISTS VS IN — WHICH ONE TO USE
  // =========================================================
  if (slide.id === 24) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* IN Card */}
          <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-bold text-blue-700 font-mono block mb-2">IN</span>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>Compares a column against a fixed list of values.</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>Simple, intuitive, and readable for small static lists.</span>
                </div>
                <div className="flex items-start gap-2 text-rose-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                  <span><strong className="text-rose-800">NULL Hazard:</strong> If the subquery contains NULLs, <code className="font-mono">NOT IN</code> can silently return zero rows!</span>
                </div>
              </div>
            </div>
            <div className="mt-3 p-2 rounded-lg bg-blue-50 text-[11px] text-blue-900 font-semibold text-center">
              Best for small, explicit lists
            </div>
          </div>

          {/* EXISTS Card */}
          <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-bold text-emerald-700 font-mono block mb-2">EXISTS</span>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span>Checks only whether a matching row exists — ignores actual values.</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span><strong className="text-emerald-800">High Performance:</strong> The SQL engine stops scanning immediately at the first match.</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span>The standard choice for correlated checks and large enterprise tables.</span>
                </div>
              </div>
            </div>
            <div className="mt-3 p-2 rounded-lg bg-emerald-50 text-[11px] text-emerald-900 font-semibold text-center">
              Best for correlated subqueries & large tables
            </div>
          </div>
        </div>

        {/* Rule of Thumb */}
        <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
          <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-slate-800 leading-relaxed">
            <span className="font-bold text-slate-900">Rule of Thumb:</span> Use <span className="font-bold text-blue-700">IN</span> for short, simple static lists. Use <span className="font-bold text-emerald-700">EXISTS</span> for correlated checks and larger datasets.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 25: CORRELATED SUBQUERY — ABOVE-AVERAGE PAYMENTS
  // =========================================================
  if (slide.id === 25) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Code Box */}
        <div className="bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
            <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" /> Goal: Find Payments Above Average for That Same Student's Course
            </span>
            <span className="text-[11px] text-amber-300 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">Correlation on e.CourseID</span>
          </div>
          <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    p.PaymentID,
    e.CourseID,
    p.Amount
FROM Payments AS p
INNER JOIN Enrollments AS e ON p.EnrollmentID = e.EnrollmentID
WHERE p.Amount > (
    SELECT AVG(p2.Amount)
    FROM Payments AS p2
    INNER JOIN Enrollments AS e2 ON p2.EnrollmentID = e2.EnrollmentID
    WHERE e2.CourseID = e.CourseID  -- correlation: ties inner query to outer row
);`}
          </pre>
        </div>

        {/* Correlated vs Simple Callout */}
        <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-xs text-blue-950 leading-relaxed">
            <span className="font-bold text-blue-900">Correlated vs Simple Subquery:</span> A simple subquery runs once. A correlated subquery re-runs for every row of the outer query, because it references an outer column (<code className="text-blue-800 font-mono font-bold">e.CourseID</code>). This lets you compare each row against <span className="font-bold text-blue-700">ITS OWN group average</span>!
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 26: RANKING FUNCTIONS OVERVIEW
  // =========================================================
  if (slide.id === 26) {
    const rankFns = [
      {
        name: 'ROW_NUMBER()',
        desc: 'Unique sequential number. Ties get different numbers (1, 2, 3, 4...).',
        tag: 'UNIQUE',
        example: '1, 2, 3, 4'
      },
      {
        name: 'RANK()',
        desc: 'Ties share a rank; the next rank skips ahead (1, 2, 2, 4...).',
        tag: 'SKIPS',
        example: '1, 2, 2, 4'
      },
      {
        name: 'DENSE_RANK()',
        desc: 'Ties share a rank; the next rank does NOT skip (1, 2, 2, 3...).',
        tag: 'NO SKIP',
        example: '1, 2, 2, 3'
      },
      {
        name: 'NTILE(n)',
        desc: 'Splits rows into n equal-sized buckets — e.g. NTILE(4) for quartiles.',
        tag: 'BUCKETS',
        example: 'Bucket 1..4'
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        {/* Canonical Syntax Banner */}
        <div className="p-3.5 rounded-2xl bg-[#0b173e] text-cyan-300 font-mono text-xs sm:text-[13px] text-center shadow-md border border-blue-900/60 font-bold">
          &lt;FUNCTION&gt;() OVER ( PARTITION BY &lt;group_column&gt; ORDER BY &lt;sort_column&gt; DESC )
        </div>

        {/* 4 Ranking Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {rankFns.map((rf) => (
            <div key={rf.name} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono font-bold text-xs sm:text-sm text-blue-700">{rf.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">{rf.tag}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{rf.desc}</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-center font-mono text-xs font-bold text-emerald-700">
                {rf.example}
              </div>
            </div>
          ))}
        </div>

        {/* PARTITION BY callout */}
        <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-100 text-blue-700 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-slate-900">PARTITION BY:</span> Restarts the ranking for each group (e.g. each Region separately) — like a subtotal that resets. Omit it to rank the entire table as one single group.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 27: RANKING SALES AGENTS WORKED EXAMPLE
  // =========================================================
  if (slide.id === 27) {
    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          {/* Query Box */}
          <div className="lg:col-span-6 bg-[#0b173e] border border-blue-900/60 rounded-2xl p-4 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-blue-900/50">
                <span className="text-xs font-bold text-blue-300 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" /> Rank Agents by Commission Per Region
                </span>
                <span className="text-[11px] text-slate-400 font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">SalesAgents</span>
              </div>
              <pre className="text-xs sm:text-[13px] font-mono text-slate-100 leading-relaxed overflow-x-auto">
{`SELECT
    AgentName,
    Region,
    Commission,
    RANK() OVER (
        PARTITION BY Region
        ORDER BY Commission DESC
    ) AS RegionRank
FROM SalesAgents;`}
              </pre>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-900/40 text-[11px] text-blue-300/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Resets ranking to 1 at each new Region boundary</span>
            </div>
          </div>

          {/* Results Table */}
          <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-blue-600" /> Partitioned Output
              </span>
              <span className="text-xs text-blue-700 font-mono font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">Notice the tie!</span>
            </div>
            <table className="w-full text-left text-xs flex-1">
              <thead className="bg-[#0052cc] text-white text-[11px] uppercase font-bold tracking-wider">
                <tr>
                  <th className="py-2 px-3">AgentName</th>
                  <th className="py-2 px-3">Region</th>
                  <th className="py-2 px-3">Commission</th>
                  <th className="py-2 px-3 text-center">RegionRank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr className="hover:bg-blue-50/40">
                  <td className="py-2 px-3 text-slate-900 font-medium font-sans">Nourhan Adel</td>
                  <td className="py-2 px-3 text-blue-700 font-sans">Cairo</td>
                  <td className="py-2 px-3 font-bold text-slate-800">42,000</td>
                  <td className="py-2 px-3 text-center text-blue-700 font-bold">1</td>
                </tr>
                <tr className="hover:bg-blue-50/40 bg-amber-50/30">
                  <td className="py-2 px-3 text-slate-900 font-medium font-sans">Tarek Sami</td>
                  <td className="py-2 px-3 text-blue-700 font-sans">Cairo</td>
                  <td className="py-2 px-3 font-bold text-amber-700">38,500</td>
                  <td className="py-2 px-3 text-center text-amber-700 font-bold">2</td>
                </tr>
                <tr className="hover:bg-blue-50/40 bg-amber-50/30">
                  <td className="py-2 px-3 text-slate-900 font-medium font-sans">Heba Younes</td>
                  <td className="py-2 px-3 text-blue-700 font-sans">Cairo</td>
                  <td className="py-2 px-3 font-bold text-amber-700">38,500</td>
                  <td className="py-2 px-3 text-center text-amber-700 font-bold">2</td>
                </tr>
                <tr className="hover:bg-blue-50/40 border-t-2 border-slate-200">
                  <td className="py-2 px-3 text-slate-900 font-medium font-sans">Omar Nabil</td>
                  <td className="py-2 px-3 text-purple-700 font-sans">Giza</td>
                  <td className="py-2 px-3 font-bold text-slate-800">45,200</td>
                  <td className="py-2 px-3 text-center text-purple-700 font-bold">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tie Note */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-950 leading-relaxed">
            <span className="font-bold text-amber-800">Skip Behavior:</span> The two Cairo agents tied at 38,500 both get <span className="font-bold text-slate-900">rank 2</span>. The next Cairo rank would jump directly to <span className="font-bold text-rose-700">4</span> (that's RANK's gap behavior). If you used <code className="text-amber-900 font-mono font-bold">DENSE_RANK()</code>, the next rank would be 3.
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 28: IN-CLASS LAB EXERCISE
  // =========================================================
  if (slide.id === 28) {
    const exercises = [
      {
        id: 'ex1',
        title: '1. Inner Join',
        desc: 'List every Attendance record with the StudentName and CourseName it belongs to.',
        solution: `SELECT s.StudentName, c.CourseName, a.AttendanceDate
FROM Attendance AS a
INNER JOIN Students AS s ON a.StudentID = s.StudentID
INNER JOIN Courses AS c  ON a.CourseID  = c.CourseID;`
      },
      {
        id: 'ex2',
        title: '2. Left Join + IS NULL',
        desc: 'Find all Courses that have never had a single Enrollment.',
        solution: `SELECT c.CourseName
FROM Courses AS c
LEFT JOIN Enrollments AS e ON c.CourseID = e.CourseID
WHERE e.EnrollmentID IS NULL;`
      },
      {
        id: 'ex3',
        title: '3. Self Join',
        desc: 'Find pairs of Leads that came from the same Campaign and were assigned to different Agents.',
        solution: `SELECT l1.LeadName AS Lead1, l2.LeadName AS Lead2, l1.CampaignID
FROM Leads AS l1
INNER JOIN Leads AS l2
    ON l1.CampaignID = l2.CampaignID
   AND l1.LeadID < l2.LeadID
WHERE l1.AgentID <> l2.AgentID;`
      },
      {
        id: 'ex4',
        title: '4. Subquery + IN',
        desc: "List SalesAgents whose AgentID appears in Leads with Status = 'Converted'.",
        solution: `SELECT AgentName
FROM SalesAgents
WHERE AgentID IN (
    SELECT AgentID FROM Leads WHERE Status = 'Converted'
);`
      },
      {
        id: 'ex5',
        title: '5. Ranking',
        desc: 'Rank Courses by total revenue (SUM of Payments.Amount) from highest to lowest, overall.',
        solution: `SELECT c.CourseName,
       SUM(p.Amount) AS TotalRevenue,
       RANK() OVER (ORDER BY SUM(p.Amount) DESC) AS RevenueRank
FROM Courses AS c
INNER JOIN Enrollments AS e ON c.CourseID = e.CourseID
INNER JOIN Payments AS p    ON e.EnrollmentID = p.EnrollmentID
GROUP BY c.CourseName;`
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3 text-slate-800 select-none my-auto">
        <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="font-bold">In-Class Hands-On Lab (5 Progressive Challenges)</span>
          </div>
          <span className="text-xs text-slate-600">Click to reveal SQL solutions</span>
        </div>

        <div className="space-y-2">
          {exercises.map((ex) => {
            const isOpen = labOpen[ex.id];
            return (
              <div key={ex.id} className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-blue-900">{ex.title}:</span>
                    <span className="text-xs text-slate-700">{ex.desc}</span>
                  </div>
                  <button
                    onClick={() => toggleLab(ex.id)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 border border-slate-300 shrink-0 ml-2"
                  >
                    {isOpen ? 'Hide Solution' : 'Reveal Solution'}
                  </button>
                </div>
                {isOpen && (
                  <pre className="mt-2 p-2.5 rounded-lg bg-[#0b173e] text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed border border-blue-950">
                    {ex.solution}
                  </pre>
                )}
              </div>
            );
          })}
        </div>

        <div className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-center text-xs text-slate-600">
          💡 Tip: Build each query one clause at a time — SELECT, then FROM, then JOIN, then WHERE — and run it often.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 29: KEY TAKEAWAYS
  // =========================================================
  if (slide.id === 29) {
    const takeaways = [
      {
        title: 'Joins Connect Tables',
        desc: 'INNER for matches only, LEFT/RIGHT to keep one full side, FULL OUTER to keep everything for audits.',
        icon: Layers,
        color: 'blue'
      },
      {
        title: 'Self, Cross & UNION',
        desc: 'Self join compares a table to itself; CROSS JOIN builds every combination; UNION stacks result sets.',
        icon: GitBranch,
        color: 'indigo'
      },
      {
        title: 'Subqueries Nest Logic',
        desc: 'Scalar values in WHERE, lists with IN, existence checks with EXISTS, correlated for row-by-row comparisons.',
        icon: Search,
        color: 'purple'
      },
      {
        title: 'Ranking Functions',
        desc: 'ROW_NUMBER, RANK, DENSE_RANK and NTILE — with OVER() and PARTITION BY — power leaderboards and top-N reports.',
        icon: TrendingUp,
        color: 'emerald'
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {takeaways.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{t.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-3.5 rounded-2xl bg-[#0b173e] text-white text-center shadow-md border border-blue-900/60 text-xs">
          <span className="text-cyan-300 font-bold">Relational Thinking Completed:</span> From isolated Excel tabs to unified multi-table enterprise intelligence.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 30: QUICK KNOWLEDGE CHECK
  // =========================================================
  if (slide.id === 30) {
    const questions = [
      {
        id: 1,
        q: '1. Which join type should you choose if you want all registered students even if they have no enrollments?',
        a: 'LEFT JOIN (with Students as the left table in the FROM clause).'
      },
      {
        id: 2,
        q: '2. What happens if a subquery inside `WHERE Price > (SELECT ...)` returns more than one row?',
        a: 'SQL Server throws an error! A comparison operator like > requires a scalar subquery (exactly 1 row & 1 column).'
      },
      {
        id: 3,
        q: '3. What is the key difference between RANK() and DENSE_RANK() when two rows tie?',
        a: 'RANK() skips the subsequent rank numbers (e.g. 1, 2, 2, 4), while DENSE_RANK() does not skip (1, 2, 2, 3).'
      },
      {
        id: 4,
        q: '4. Why is UNION ALL faster than UNION?',
        a: 'Because UNION performs an extra sorting and deduplication step to remove duplicates, while UNION ALL simply appends.'
      }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center gap-3.5 text-slate-800 select-none my-auto">
        <div className="space-y-2.5">
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
          Core Takeaway: Joins connect related tables, subqueries nest logical queries, and ranking functions order within groups.
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
        sessionNumber="27"
        sessionTitle="SQL Joins, Subqueries & Ranking Functions"
        nextSessionNote="Next Session: Common Table Expressions (CTEs), Views & Window Aggregates"
        nextSessionButtonText="Explore CTEs & Advanced SQL"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
      />
    );
  }

  return null;
};
