import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { HeroCoverVisual } from './HeroCoverVisual';
import { ThankYouVisual } from './ThankYouVisual';
import { 
  Sparkles,
  Layers,
  Grid,
  AlertTriangle,
  Target,
  ListFilter,
  CheckCircle,
  CheckCircle2,
  HelpCircle,
  BarChart2,
  Activity,
  Sliders,
  Cpu,
  Eye,
  TrendingUp,
  Award,
  RotateCcw,
  ArrowRight,
  Shield,
  Calendar,
  Clock,
  Table,
  Database,
  Key,
  Link,
  FileSpreadsheet,
  Server,
  User,
  Users,
  Building,
  DollarSign,
  Check,
  X,
  Zap,
  BookOpen,
  Code2,
  Terminal,
  Play,
  Copy
} from 'lucide-react';

interface Session24SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session24SlideRenderer: React.FC<Session24SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // ---------------------------------------------------------
  // INTERACTIVE STATES FOR WIDGETS
  // ---------------------------------------------------------

  // Slide 13 & 27: Solution Reveal Toggles
  const [showEx1Solution, setShowEx1Solution] = useState<boolean>(true);
  const [showDmlSolution, setShowDmlSolution] = useState<boolean>(false);

  // Slide 26: Interactive Transaction Step Explorer
  const [tranStep, setTranStep] = useState<'idle' | 'begun' | 'updated' | 'committed' | 'rolledback'>('idle');

  // Copy code status
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Icon lookup for cards
  const iconLookup: { [key: string]: any } = {
    Sparkles,
    Layers,
    Grid,
    AlertTriangle,
    Target,
    ListFilter,
    CheckCircle,
    CheckCircle2,
    HelpCircle,
    BarChart2,
    Activity,
    Sliders,
    Cpu,
    Eye,
    TrendingUp,
    Award,
    Shield,
    Calendar,
    Clock,
    Table,
    Database,
    Key,
    Link,
    Server,
    User,
    Users,
    Building,
    DollarSign
  };

  // =========================================================
  // SECTION DIVIDER SLIDES
  // =========================================================
  if (slide.type === 'section-divider') {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 select-none overflow-hidden bg-transparent">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-72 h-72 rounded-full blur-3xl bg-blue-600/20 pointer-events-none"
        />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl flex flex-col items-center my-auto"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xl shadow-blue-500/25 mb-4 ring-4 ring-blue-500/20">
            <Code2 className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold mb-3">
            {slide.subBadge || 'SECTION'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {slide.mainTitle}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 shadow-sm" />

          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
            {slide.subtitle}
          </p>
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE (PART 1)
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual 
        sessionNumber="24"
        courseTag="SQL Server Module · Part 1 & 2"
        titlePrefix="DATABASE FUNDAMENTALS"
        titleHighlight="& DDL/DML BASICS"
        subtitle="CREATE · ALTER · DROP · TRUNCATE · Data Types · Constraints · INSERT · UPDATE · DELETE · Transactions"
        floatingBadges={[
          { icon: Database, label: "CREATE & ALTER TABLE", position: "top-left", borderColor: "border-blue-500/50", textColor: "text-blue-400" },
          { icon: Key, label: "PK & FK Constraints", position: "top-right", borderColor: "border-amber-500/50", textColor: "text-amber-400" },
          { icon: Code2, label: "INSERT / UPDATE / DELETE", position: "bottom-left", borderColor: "border-purple-500/50", textColor: "text-purple-400" },
          { icon: Shield, label: "Transactions & Safety", position: "bottom-right", borderColor: "border-emerald-500/50", textColor: "text-emerald-400" }
        ]}
        statsCards={[
          { val: "2 Parts", label: "SQL Server Module", sub: "DDL & DML Fundamentals" },
          { val: "28 Slides", label: "Interactive Presentation", sub: "Queries & Exercises" },
          { val: "8 Tables", label: "Instant Academy DB", sub: "Production SQL Queries" }
        ]}
      />
    );
  }

  // =========================================================
  // SLIDE 03: WHAT IS DDL? (SUB-LANGUAGES OF SQL)
  // =========================================================
  if (slide.id === 3) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          <div className="p-3.5 bg-blue-900 text-white rounded-2xl border-2 border-blue-400 shadow-md">
            <h4 className="font-bold text-xs text-blue-300">DDL</h4>
            <p className="text-[10px] text-slate-300">Data Definition Language</p>
            <div className="mt-2 text-[10px] font-mono text-yellow-300 font-bold">
              CREATE, ALTER, DROP, TRUNCATE
            </div>
          </div>

          <div className="p-3.5 bg-white border border-slate-200 rounded-2xl shadow-xs">
            <h4 className="font-bold text-xs text-slate-700">DML</h4>
            <p className="text-[10px] text-slate-500">Data Manipulation Language</p>
            <div className="mt-2 text-[10px] font-mono text-slate-600">
              INSERT, UPDATE, DELETE, MERGE
            </div>
          </div>

          <div className="p-3.5 bg-white border border-slate-200 rounded-2xl shadow-xs">
            <h4 className="font-bold text-xs text-slate-700">DQL</h4>
            <p className="text-[10px] text-slate-500">Data Query Language</p>
            <div className="mt-2 text-[10px] font-mono text-slate-600">
              SELECT
            </div>
          </div>

          <div className="p-3.5 bg-white border border-slate-200 rounded-2xl shadow-xs">
            <h4 className="font-bold text-xs text-slate-700">DCL</h4>
            <p className="text-[10px] text-slate-500">Data Control Language</p>
            <div className="mt-2 text-[10px] font-mono text-slate-600">
              GRANT, REVOKE
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-1">
          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h5 className="font-bold text-xs text-blue-600">CREATE</h5>
            <p className="text-[11px] text-slate-600 mt-1">Build a new database object (table, database, index)</p>
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h5 className="font-bold text-orange-600">ALTER</h5>
            <p className="text-[11px] text-slate-600 mt-1">Modify the structure of an existing object</p>
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h5 className="font-bold text-red-600">DROP</h5>
            <p className="text-[11px] text-slate-600 mt-1">Permanently delete a database object</p>
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h5 className="font-bold text-amber-600">TRUNCATE</h5>
            <p className="text-[11px] text-slate-600 mt-1">Remove all rows from a table (keeps structure)</p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04: DDL IN ACTION — CREATE DATABASE & TABLE
  // =========================================================
  if (slide.id === 4) {
    const codeStep1 = `CREATE DATABASE InstantAcademy;\nUSE InstantAcademy; -- Switch to our new database`;
    const codeStep2 = `CREATE TABLE Students (\n    StudentID   INT PRIMARY KEY IDENTITY(1,1),\n    StudentName NVARCHAR(100) NOT NULL,\n    Email       VARCHAR(150) UNIQUE,\n    City        NVARCHAR(80),\n    EnrollDate  DATE DEFAULT GETDATE(),\n    Status      VARCHAR(50) DEFAULT 'Active'\n);`;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2.5 p-1 text-start">
        <div className="space-y-1">
          <span className="text-xs font-bold text-blue-600">Step 1: Create the database</span>
          <div className="p-3 bg-slate-900 rounded-xl text-white font-mono text-xs flex justify-between items-center shadow-xs">
            <pre className="text-emerald-400 leading-relaxed">{codeStep1}</pre>
            <button onClick={() => handleCopy(codeStep1, 'c1')} className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] shrink-0">
              {copiedCode === 'c1' ? 'Copied!' : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-blue-600">Step 2: Create the Students table</span>
          <div className="p-3 bg-slate-900 rounded-xl text-white font-mono text-[11px] flex justify-between items-start shadow-xs">
            <pre className="text-blue-300 leading-relaxed overflow-x-auto">{codeStep2}</pre>
            <button onClick={() => handleCopy(codeStep2, 'c2')} className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] shrink-0">
              {copiedCode === 'c2' ? 'Copied!' : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: DDL — CREATE TABLE WITH FOREIGN KEY
  // =========================================================
  if (slide.id === 5) {
    const codeFk = `CREATE TABLE Enrollments (\n    EnrollmentID INT PRIMARY KEY IDENTITY(1,1),\n    StudentID    INT NOT NULL,\n    CourseID     INT NOT NULL,\n    EnrollDate   DATE DEFAULT GETDATE(),\n    EnrollStatus VARCHAR(50) DEFAULT 'Active',\n\n    CONSTRAINT fk_student FOREIGN KEY (StudentID)\n        REFERENCES Students(StudentID),\n    CONSTRAINT fk_course FOREIGN KEY (CourseID)\n        REFERENCES Courses(CourseID)\n);`;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-3.5 bg-slate-900 rounded-xl text-white font-mono text-xs flex justify-between items-start shadow-md">
          <pre className="text-emerald-300 leading-relaxed overflow-x-auto">{codeFk}</pre>
          <button onClick={() => handleCopy(codeFk, 'cfk')} className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] shrink-0">
            {copiedCode === 'cfk' ? 'Copied!' : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>If you try to enroll a <code>StudentID</code> that doesn't exist — SQL Server will reject it! <code>IDENTITY(1,1)</code> auto-increments the ID starting from 1.</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 06: DDL — ALTER TABLE
  // =========================================================
  if (slide.id === 6) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2.5 p-1 text-start">
        <div className="space-y-1">
          <span className="text-xs font-bold text-blue-600">Add a new column</span>
          <div className="p-2.5 bg-slate-900 rounded-xl text-white font-mono text-xs shadow-xs">
            <code className="text-emerald-400">ALTER TABLE Students ADD Phone VARCHAR(20) NULL;</code>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-orange-600">Modify a column's data type</span>
          <div className="p-2.5 bg-slate-900 rounded-xl text-white font-mono text-xs shadow-xs">
            <code className="text-blue-300">ALTER TABLE Students ALTER COLUMN StudentName VARCHAR(200);</code>
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-red-600">Drop a column</span>
          <div className="p-2.5 bg-slate-900 rounded-xl text-white font-mono text-xs shadow-xs">
            <code className="text-red-400">ALTER TABLE Students DROP COLUMN Phone;</code>
          </div>
        </div>

        <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 font-medium flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
          <span>Dropping a column permanently removes it AND all its data. Always backup first!</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 07: DDL — DROP AND TRUNCATE
  // =========================================================
  if (slide.id === 7) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 bg-white border-2 border-red-500 rounded-2xl shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase">
              <X className="w-4 h-4" />
              <span>DROP TABLE</span>
            </div>
            <div className="p-2 bg-slate-900 rounded text-white font-mono text-xs">
              <code className="text-red-400">DROP TABLE Students;</code>
            </div>
            <ul className="text-[11px] text-slate-700 space-y-1 list-disc list-inside">
              <li>Permanently deletes table AND all its data</li>
              <li>Table structure is gone — cannot be undone</li>
              <li>Cannot drop table with child FK references</li>
              <li>Drop child tables (Enrollments) before parent</li>
            </ul>
          </div>

          <div className="p-4 bg-white border-2 border-orange-500 rounded-2xl shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-orange-700 font-bold text-xs uppercase">
              <RotateCcw className="w-4 h-4" />
              <span>TRUNCATE TABLE</span>
            </div>
            <div className="p-2 bg-slate-900 rounded text-white font-mono text-xs">
              <code className="text-amber-400">TRUNCATE TABLE Leads;</code>
            </div>
            <ul className="text-[11px] text-slate-700 space-y-1 list-disc list-inside">
              <li>Removes ALL rows but keeps table structure</li>
              <li>Much faster than DELETE for large tables</li>
              <li>Resets IDENTITY counter back to seed value</li>
              <li>Cannot be rolled back — use with caution</li>
            </ul>
          </div>
        </div>

        <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950 font-medium text-center">
          Quick Comparison: <strong>DROP</strong> = Table gone forever · <strong>TRUNCATE</strong> = Empty table, structure survives · <strong>DELETE</strong> = Remove specific rows (DML)
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 09: SQL SERVER DATA TYPES FOR ANALYSTS
  // =========================================================
  if (slide.id === 9) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {/* Numeric Column */}
          <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-2">
            <div className="p-1.5 bg-blue-900 text-white rounded-lg font-bold text-center">Numeric</div>
            <div className="p-2 bg-slate-50 border rounded-lg">
              <span className="font-bold font-mono text-blue-600 block">INT</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Whole numbers. IDs, counts. Range ±2 billion.</p>
            </div>
            <div className="p-2 bg-slate-50 border rounded-lg">
              <span className="font-bold font-mono text-blue-600 block">DECIMAL(p,s)</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Exact decimals for money: DECIMAL(10,2) = 99999999.99</p>
            </div>
            <div className="p-2 bg-slate-50 border rounded-lg">
              <span className="font-bold font-mono text-blue-600 block">BIT</span>
              <p className="text-[10px] text-slate-600 mt-0.5">True/False (1/0). IsActive, IsPaid.</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-2">
            <div className="p-1.5 bg-purple-900 text-white rounded-lg font-bold text-center">Text</div>
            <div className="p-2 bg-slate-50 border rounded-lg">
              <span className="font-bold font-mono text-purple-600 block">VARCHAR(n)</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Variable-length text. Most common for English names, email.</p>
            </div>
            <div className="p-2 bg-slate-50 border rounded-lg">
              <span className="font-bold font-mono text-purple-600 block">NVARCHAR(n)</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Unicode text — use for Arabic names &amp; special characters.</p>
            </div>
            <div className="p-2 bg-slate-50 border rounded-lg">
              <span className="font-bold font-mono text-purple-600 block">CHAR(n)</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Fixed-length. Country codes (e.g. 'EG'), NationalID (14).</p>
            </div>
          </div>

          {/* Date Column */}
          <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-2">
            <div className="p-1.5 bg-teal-900 text-white rounded-lg font-bold text-center">Date &amp; Time</div>
            <div className="p-2 bg-slate-50 border rounded-lg">
              <span className="font-bold font-mono text-teal-600 block">DATE</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Date only: 2024-03-15. Enrollment dates, birthdays.</p>
            </div>
            <div className="p-2 bg-slate-50 border rounded-lg">
              <span className="font-bold font-mono text-teal-600 block">DATETIME</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Date + time: 2024-03-15 09:30:00. Login logs, payments.</p>
            </div>
            <div className="p-2 bg-slate-50 border rounded-lg">
              <span className="font-bold font-mono text-teal-600 block">GETDATE()</span>
              <p className="text-[10px] text-slate-600 mt-0.5">Built-in function returning current system date and time.</p>
            </div>
          </div>
        </div>

        <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-950 font-medium">
          💡 <strong>Academy tip:</strong> StudentName uses <code>NVARCHAR</code> (supports Arabic names) · Amount in Payments uses <code>DECIMAL(10,2)</code> · EnrollDate uses <code>DATE</code>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 10: SQL SERVER CONSTRAINTS FOR ANALYSTS
  // =========================================================
  if (slide.id === 10) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2.5 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
            <h4 className="font-bold text-blue-700 border-b pb-1">Integrity Rules</h4>
            <div className="text-[10px]"><strong>PRIMARY KEY:</strong> Unique ID, no NULL</div>
            <div className="text-[10px]"><strong>UNIQUE:</strong> No duplicates, NULL allowed once</div>
            <div className="text-[10px]"><strong>NOT NULL:</strong> Cannot be empty</div>
            <div className="text-[10px]"><strong>FOREIGN KEY:</strong> Links to PK in another table</div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
            <h4 className="font-bold text-purple-700 border-b pb-1">Value Rules</h4>
            <div className="text-[10px]"><strong>CHECK:</strong> <code>CHECK(Age &gt;= 18)</code></div>
            <div className="text-[10px]"><strong>DEFAULT:</strong> <code>DEFAULT GETDATE()</code></div>
            <div className="text-[10px]"><strong>CHECK (range):</strong> <code>Status IN ('Active','Pending')</code></div>
            <div className="text-[10px]"><strong>CHECK (format):</strong> <code>Email LIKE '%@%.%'</code></div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1.5">
            <h4 className="font-bold text-teal-700 border-b pb-1">DDL Syntax</h4>
            <div className="text-[10px]"><strong>Inline:</strong> <code>StudentID INT PRIMARY KEY</code></div>
            <div className="text-[10px]"><strong>Named:</strong> <code>CONSTRAINT pk_student PRIMARY KEY</code></div>
            <div className="text-[10px]"><strong>ALTER ADD:</strong> <code>ADD CONSTRAINT chk_age CHECK...</code></div>
            <div className="text-[10px]"><strong>ALTER DROP:</strong> <code>DROP CONSTRAINT chk_age</code></div>
          </div>
        </div>

        <div className="p-2 bg-amber-50 border border-amber-200 rounded-xl text-[10px] text-amber-950 font-medium">
          💡 Academy tip: StudentID uses <code>PRIMARY KEY</code> · Email uses <code>UNIQUE + NOT NULL</code> · Payments.Amount uses <code>CHECK(Amount &gt; 0)</code>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 12 & 13: EXERCISE 1 (CREATE COURSES TABLE & SOLUTION)
  // =========================================================
  if (slide.id === 12 || slide.id === 13) {
    const codeSol1 = `CREATE TABLE Courses (\n    CourseID    INT PRIMARY KEY IDENTITY(1,1),\n    CourseName  NVARCHAR(200) NOT NULL,\n    Category    VARCHAR(100) NULL,\n    Price       DECIMAL(10,2) NOT NULL DEFAULT 0,\n    DurationHrs INT NOT NULL,\n    StartDate   DATE NULL\n);\n\n-- Verify structure:\nSELECT * FROM INFORMATION_SCHEMA.COLUMNS\nWHERE TABLE_NAME = 'Courses';`;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="overflow-x-auto rounded-xl bg-white border border-slate-200 shadow-sm">
          <table className="w-full text-left text-[11px] font-mono">
            <thead className="bg-slate-900 text-white">
              <tr><th className="p-2">Column Name</th><th className="p-2">Data Type</th><th className="p-2">Constraint</th><th className="p-2">Description</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr><td className="p-2 font-bold text-blue-600">CourseID</td><td className="p-2">INT</td><td className="p-2 text-orange-600 font-bold">Primary Key, Auto-increment</td><td className="p-2 font-sans">Unique identifier for each course</td></tr>
              <tr><td className="p-2 font-bold text-blue-600">CourseName</td><td className="p-2">NVARCHAR(200)</td><td className="p-2 text-red-600 font-bold">NOT NULL</td><td className="p-2 font-sans">Full course name (supports Arabic)</td></tr>
              <tr><td className="p-2 font-bold text-blue-600">Category</td><td className="p-2">VARCHAR(100)</td><td className="p-2 text-slate-500">NULL</td><td className="p-2 font-sans">e.g. Data Analysis, Programming</td></tr>
              <tr><td className="p-2 font-bold text-blue-600">Price</td><td className="p-2">DECIMAL(10,2)</td><td className="p-2 text-emerald-600 font-bold">NOT NULL, DEFAULT 0</td><td className="p-2 font-sans">Course price in EGP</td></tr>
              <tr><td className="p-2 font-bold text-blue-600">DurationHrs</td><td className="p-2">INT</td><td className="p-2 text-red-600 font-bold">NOT NULL</td><td className="p-2 font-sans">Duration in hours</td></tr>
              <tr><td className="p-2 font-bold text-blue-600">StartDate</td><td className="p-2">DATE</td><td className="p-2 text-slate-500">NULL</td><td className="p-2 font-sans">Scheduled start date</td></tr>
            </tbody>
          </table>
        </div>

        {/* Reveal Solution Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowEx1Solution(!showEx1Solution)}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all flex items-center gap-1.5"
          >
            <Code2 className="w-4 h-4" />
            <span>{showEx1Solution ? 'Hide Solution SQL' : 'Show Solution SQL'}</span>
          </button>
        </div>

        {showEx1Solution && (
          <div className="p-3 bg-slate-900 rounded-xl text-white font-mono text-[11px] shadow-md flex justify-between items-start">
            <pre className="text-emerald-300 leading-relaxed overflow-x-auto">{codeSol1}</pre>
            <button onClick={() => handleCopy(codeSol1, 'csol1')} className="p-1 rounded bg-slate-800 text-slate-300 text-[10px]">
              {copiedCode === 'csol1' ? 'Copied!' : <Copy className="w-3 h-3" />}
            </button>
          </div>
        )}
      </div>
    );
  }

  // =========================================================
  // SLIDE 14: EXERCISE 2 — ALTER & SCHEMA EXPLORATION
  // =========================================================
  if (slide.id === 14) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2.5 p-1 text-start font-mono text-xs">
        <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
          <div className="flex items-center gap-2 font-bold text-blue-700">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-[10px] flex items-center justify-center">2A</span>
            <span>Add NationalID column to Students</span>
          </div>
          <p className="text-[11px] font-sans text-slate-600">Add NationalID of type CHAR(14) allowing NULL values.</p>
          <div className="p-2 bg-slate-900 text-emerald-400 rounded">
            <code>ALTER TABLE Students ADD NationalID CHAR(14) NULL;</code>
          </div>
        </div>

        <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
          <div className="flex items-center gap-2 font-bold text-orange-700">
            <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-800 text-[10px] flex items-center justify-center">2B</span>
            <span>Modify a column in Courses</span>
          </div>
          <p className="text-[11px] font-sans text-slate-600">Expand CourseName to NVARCHAR(300) NOT NULL.</p>
          <div className="p-2 bg-slate-900 text-blue-300 rounded">
            <code>ALTER TABLE Courses ALTER COLUMN CourseName NVARCHAR(300) NOT NULL;</code>
          </div>
        </div>

        <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
          <div className="flex items-center gap-2 font-bold text-purple-700">
            <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 text-[10px] flex items-center justify-center">2C</span>
            <span>Explore the schema</span>
          </div>
          <p className="text-[11px] font-sans text-slate-600">List ALL tables in the InstantAcademy database.</p>
          <div className="p-2 bg-slate-900 text-amber-300 rounded">
            <code>SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE';</code>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 16: HOMEWORK ASSIGNMENT
  // =========================================================
  if (slide.id === 16) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="space-y-2">
          <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center justify-between">
            <div>
              <h4 className="font-bold text-xs text-blue-700">Task 1: Create the full academy database</h4>
              <p className="text-[11px] text-slate-600 mt-0.5">Write CREATE TABLE for Leads, Campaigns, SalesAgents, and Payments with PKs/FKs.</p>
            </div>
            <span className="px-2.5 py-1 bg-blue-100 text-blue-800 font-mono font-bold text-xs rounded-full">20 pts</span>
          </div>

          <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center justify-between">
            <div>
              <h4 className="font-bold text-xs text-orange-700">Task 2: Modify the schema</h4>
              <p className="text-[11px] text-slate-600 mt-0.5">Add IsActive BIT to SalesAgents &amp; Notes NVARCHAR(20) to Attendance. Verify with query.</p>
            </div>
            <span className="px-2.5 py-1 bg-orange-100 text-orange-800 font-mono font-bold text-xs rounded-full">15 pts</span>
          </div>

          <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center justify-between">
            <div>
              <h4 className="font-bold text-xs text-purple-700">Task 3: Research &amp; reflection</h4>
              <p className="text-[11px] text-slate-600 mt-0.5">Find 1 Egyptian company using SQL Server (bank/telecom) and explain 2 matching tables.</p>
            </div>
            <span className="px-2.5 py-1 bg-purple-100 text-purple-800 font-mono font-bold text-xs rounded-full">15 pts</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 17: SESSION 1 SUMMARY & WHAT'S NEXT
  // =========================================================
  if (slide.id === 17) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase border-b pb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>What You Learned Today</span>
            </div>
            <ul className="text-[11px] text-slate-700 space-y-1 list-disc list-inside">
              <li>What a database is and why companies need them</li>
              <li>How databases differ from Excel spreadsheets</li>
              <li>Tables, rows, columns, and data types</li>
              <li>Primary keys and foreign keys explained</li>
              <li>The Instant Academy 8-table schema</li>
              <li>SQL Server and SSMS setup</li>
              <li>DDL: CREATE, ALTER, DROP, TRUNCATE</li>
              <li>Hands-on: built Students, Courses, Enrollments tables</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-900 text-white rounded-2xl shadow-md space-y-2">
            <div className="flex items-center gap-2 font-bold text-xs uppercase text-orange-400 border-b border-blue-800 pb-1">
              <Zap className="w-4 h-4 text-orange-400" />
              <span>Session 2 Preview: DML &amp; Queries</span>
            </div>
            <p className="text-[11px] text-blue-200">Manipulating Your Academy Data:</p>
            <ul className="text-[11px] text-slate-200 space-y-1 list-disc list-inside font-mono">
              <li>INSERT data into all 8 tables</li>
              <li>UPDATE student records</li>
              <li>DELETE leads and test data</li>
              <li>Bulk data operations</li>
            </ul>
            <div className="grid grid-cols-4 gap-1 text-center font-mono text-[10px] pt-2 border-t border-blue-800">
              <div className="bg-blue-950 p-1 rounded"><span className="text-orange-400 font-bold block">8</span>Tables</div>
              <div className="bg-blue-950 p-1 rounded"><span className="text-amber-400 font-bold block">3</span>DDL Cmds</div>
              <div className="bg-blue-950 p-1 rounded"><span className="text-emerald-400 font-bold block">12+</span>SQL Stmts</div>
              <div className="bg-blue-950 p-1 rounded"><span className="text-cyan-400 font-bold block">100%</span>Practice</div>
            </div>
          </div>
        </div>
      </div>
    );
  }



  // =========================================================
  // SLIDE 19: SESSION OVERVIEW — DML & SELECT
  // =========================================================
  if (slide.id === 19) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-1">
            <div className="flex items-center gap-2 font-bold text-blue-700">
              <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-mono text-xs">1</span>
              <span>DML Foundations</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Understand what DML is and how it differs from DDL. Learn when and why analysts manipulate data directly.
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-1">
            <div className="flex items-center gap-2 font-bold text-emerald-700">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-mono text-xs">2</span>
              <span>INSERT Data</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Master inserting single and multiple rows into academy tables like Students, Enrollments, and Payments.
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-1">
            <div className="flex items-center gap-2 font-bold text-orange-700">
              <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-mono text-xs">3</span>
              <span>UPDATE &amp; DELETE</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Safely modify existing records and remove data using WHERE clauses to target the right rows.
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-1">
            <div className="flex items-center gap-2 font-bold text-purple-700">
              <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-mono text-xs">4</span>
              <span>Basic SELECT</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Read data with SELECT, filter with WHERE, sort with ORDER BY, and limit with TOP.
            </p>
          </div>
        </div>

        <div className="p-2.5 bg-blue-900 text-white rounded-xl text-center text-xs font-mono flex items-center justify-around shadow-sm">
          <span className="text-blue-300">Part 1: DML Concepts (45m)</span>
          <span className="text-emerald-300">Part 2: INSERT &amp; UPDATE (60m)</span>
          <span className="text-amber-300">Part 3: DELETE &amp; SELECT (60m)</span>
          <span className="text-orange-400 font-bold">Q&amp;A (15m)</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 20: QUICK RECAP — THE ACADEMY DATASET
  // =========================================================
  if (slide.id === 20) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2 p-1 text-start">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-mono">
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-blue-600">Students</h4>
            <span className="text-yellow-600 block">🔑 StudentID</span>
            <p className="text-slate-500 mt-1">StudentName, Email, City, EnrollDate, Status, NationalID</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-teal-600">Courses</h4>
            <span className="text-yellow-600 block">🔑 CourseID</span>
            <p className="text-slate-500 mt-1">CourseName, Category, Price, DurationHrs, StartDate</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-orange-600">Enrollments</h4>
            <span className="text-yellow-600 block">🔑 EnrollmentID</span>
            <p className="text-slate-500 mt-1">StudentID, CourseID, EnrollDate, EnrollStatus</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-amber-700">Payments</h4>
            <span className="text-yellow-600 block">🔑 PaymentID</span>
            <p className="text-slate-500 mt-1">EnrollmentID, Amount, PaymentDate, Method, Status</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-emerald-600">Leads</h4>
            <span className="text-yellow-600 block">🔑 LeadID</span>
            <p className="text-slate-500 mt-1">LeadName, Source, AgentID, CampaignID, Status</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-purple-600">Campaigns</h4>
            <span className="text-yellow-600 block">🔑 CampaignID</span>
            <p className="text-slate-500 mt-1">AgentID, CampaignName, Channel, Budget, IsActive</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-violet-600">Attendance</h4>
            <span className="text-yellow-600 block">🔑 AttendanceID</span>
            <p className="text-slate-500 mt-1">EnrollmentID, AttendStatus, Notes</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-indigo-600">SalesAgents</h4>
            <span className="text-yellow-600 block">🔑 AgentID</span>
            <p className="text-slate-500 mt-1">AgentName, Email, Region, MonthlyTarget, IsActive</p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 21: WHAT IS DML? (DDL VS DML)
  // =========================================================
  if (slide.id === 21) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-4 bg-white border-2 border-red-500 rounded-2xl shadow-xs space-y-2">
            <h4 className="font-bold text-red-700 uppercase">DDL — Data Definition Language</h4>
            <ul className="text-[11px] text-slate-700 space-y-1 font-mono">
              <li>• CREATE TABLE — Build new tables</li>
              <li>• ALTER TABLE — Modify structure</li>
              <li>• DROP TABLE — Delete entire tables</li>
              <li className="text-red-600 font-bold">Affects schema (structure)</li>
              <li className="text-slate-500">Cannot be rolled back easily</li>
            </ul>
          </div>

          <div className="p-4 bg-white border-2 border-blue-500 rounded-2xl shadow-xs space-y-2">
            <h4 className="font-bold text-blue-700 uppercase">DML — Data Manipulation Language</h4>
            <ul className="text-[11px] text-slate-700 space-y-1 font-mono">
              <li>• INSERT — Add new rows to a table</li>
              <li>• UPDATE — Change existing row values</li>
              <li>• DELETE — Remove specific rows</li>
              <li className="text-blue-600 font-bold">Affects data (content)</li>
              <li className="text-emerald-600 font-bold">Can be wrapped in transactions</li>
            </ul>
          </div>
        </div>

        <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium">
          💡 As a Data Analyst, you'll mainly use DML to load sample data, fix data quality issues, and test queries.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 22 & 23: INSERT SYNTAX & ACADEMY EXAMPLES
  // =========================================================
  if (slide.id === 22 || slide.id === 23) {
    const codeIns1 = `INSERT INTO Students (StudentName, Email, City)\nVALUES ('Ali Hassan', 'ali@mail.com', 'Cairo');`;
    const codeIns2 = `INSERT INTO Students (StudentName, Email, City)\nVALUES\n('Sara Nour', 'sara@m.com', 'Alex'),\n('Omar Said', 'omar@m.com', 'Giza');`;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2.5 p-1 text-start">
        <div className="space-y-1 font-mono text-xs">
          <span className="text-xs font-bold text-emerald-600 font-sans">Single Row Insert</span>
          <div className="p-2.5 bg-slate-900 text-emerald-400 rounded-xl shadow-xs">
            <pre className="leading-relaxed">{codeIns1}</pre>
          </div>
        </div>

        <div className="space-y-1 font-mono text-xs">
          <span className="text-xs font-bold text-orange-600 font-sans">Multiple Row Insert</span>
          <div className="p-2.5 bg-slate-900 text-amber-300 rounded-xl shadow-xs">
            <pre className="leading-relaxed">{codeIns2}</pre>
          </div>
        </div>

        <div className="p-2 bg-amber-50 border border-amber-200 rounded-xl text-[10px] text-amber-950 font-medium">
          ⚠️ <strong>Common Pitfalls:</strong> Always match column count with VALUES count · Use single quotes for text &amp; dates · Never insert into IDENTITY (auto) columns
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 24: UPDATE STATEMENT
  // =========================================================
  if (slide.id === 24) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2.5 p-1 text-start font-mono text-xs">
        <div className="p-2 bg-slate-900 text-white rounded-xl text-center shadow-xs">
          <code className="text-emerald-400">UPDATE TableName SET Column1 = NewValue1 WHERE Condition;</code>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span className="text-[10px] font-sans font-bold text-blue-600 block mb-1">Update student email</span>
            <div className="p-2 bg-slate-900 text-blue-300 rounded text-[10px]">
              <code>UPDATE Students<br/>SET Email = 'ali.new@mail.com'<br/>WHERE StudentID = 101;</code>
            </div>
          </div>

          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span className="text-[10px] font-sans font-bold text-emerald-600 block mb-1">Change enrollment status</span>
            <div className="p-2 bg-slate-900 text-emerald-300 rounded text-[10px]">
              <code>UPDATE Enrollments<br/>SET EnrollStatus = 'Completed'<br/>WHERE EnrollmentID = 1001;</code>
            </div>
          </div>

          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span className="text-[10px] font-sans font-bold text-orange-600 block mb-1">Increase agent target</span>
            <div className="p-2 bg-slate-900 text-amber-300 rounded text-[10px]">
              <code>UPDATE SalesAgents<br/>SET MonthlyTarget = MonthlyTarget * 1.10<br/>WHERE Region = 'Cairo';</code>
            </div>
          </div>
        </div>

        <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900 font-sans font-bold flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
          <span>🚨 DANGER — UPDATE without WHERE updates ALL rows in the table! Run SELECT first to verify.</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 25: DELETE STATEMENT
  // =========================================================
  if (slide.id === 25) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2.5 p-1 text-start font-mono text-xs">
        <div className="p-2 bg-slate-900 text-white rounded-xl text-center shadow-xs">
          <code className="text-red-400">DELETE FROM TableName WHERE Condition; -- Always use WHERE!</code>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <span className="font-sans font-bold text-blue-600 text-xs">Delete a specific lead</span>
            <div className="p-2 bg-slate-900 text-blue-300 rounded text-[11px]">
              <code>DELETE FROM Leads WHERE LeadID = 55 AND Status = 'Junk';</code>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
            <span className="font-sans font-bold text-orange-600 text-xs">Delete old campaigns</span>
            <div className="p-2 bg-slate-900 text-amber-300 rounded text-[11px]">
              <code>DELETE FROM Campaigns WHERE StartDate &lt; '2022-01-01';</code>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl bg-white border border-slate-200 shadow-xs font-sans text-[11px]">
          <table className="w-full text-left">
            <thead className="bg-slate-900 text-white font-mono text-[10px]">
              <tr><th className="p-1.5">Feature</th><th className="p-1.5">DELETE</th><th className="p-1.5">TRUNCATE</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr><td className="p-1.5 font-bold">Removes rows by condition?</td><td className="p-1.5 text-emerald-600">✅ Yes (WHERE clause)</td><td className="p-1.5 text-red-600">❌ No — removes ALL rows</td></tr>
              <tr><td className="p-1.5 font-bold">Can be rolled back?</td><td className="p-1.5 text-emerald-600">✅ Yes (in a transaction)</td><td className="p-1.5 text-amber-600">⚠️ Limited</td></tr>
              <tr><td className="p-1.5 font-bold">Resets IDENTITY counter?</td><td className="p-1.5 text-red-600">❌ No</td><td className="p-1.5 text-emerald-600">✅ Yes</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 26: DML SAFETY — TRANSACTIONS
  // =========================================================
  if (slide.id === 26) {
    const codeTran = `-- Step 1: Start the transaction\nBEGIN TRAN;\n\n-- Step 2: Make changes\nUPDATE Students SET City = 'Alex' WHERE StudentID = 101;\n\n-- Step 3a: Check results — if correct:\nCOMMIT TRAN;\n\n-- Step 3b: If something went wrong — undo:\nROLLBACK TRAN;`;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2.5 p-1 text-start font-mono text-xs">
        <div className="p-2.5 bg-blue-900 text-white rounded-xl font-sans text-xs shadow-xs">
          A transaction wraps multiple DML statements into a single atomic unit — either ALL succeed or ALL are rolled back.
        </div>

        <div className="p-3 bg-slate-900 text-white rounded-xl shadow-md flex justify-between items-start">
          <pre className="text-emerald-300 leading-relaxed overflow-x-auto text-[11px]">{codeTran}</pre>
          <button onClick={() => handleCopy(codeTran, 'ctran')} className="p-1 rounded bg-slate-800 text-slate-300 text-[10px]">
            {copiedCode === 'ctran' ? 'Copied!' : <Copy className="w-3 h-3" />}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 font-sans text-[11px]">
          <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg">
            <strong className="text-blue-700 block">▶ BEGIN TRAN</strong>
            <span className="text-slate-600">Starts transaction block. Changes are staged, not permanent.</span>
          </div>
          <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-lg">
            <strong className="text-emerald-700 block">✓ COMMIT</strong>
            <span className="text-slate-600">Saves all staged changes permanently to database.</span>
          </div>
          <div className="p-2 bg-red-50 border border-red-200 rounded-lg">
            <strong className="text-red-700 block">↩ ROLLBACK</strong>
            <span className="text-slate-600">Cancels all staged changes — returns data to previous state.</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 27: EXERCISE 1 — DML PRACTICE
  // =========================================================
  if (slide.id === 27) {
    const dmlSolutionsCode = `-- 01: INSERT 3 students\nINSERT INTO Students (StudentName, Email, City, EnrollDate)\nVALUES \n('Tarek Ali', 'tarek@m.com', 'Cairo', GETDATE()),\n('Nouran Saad', 'nouran@m.com', 'Alexandria', GETDATE()),\n('Khaled Omar', 'khaled@m.com', 'Giza', GETDATE());\n\n-- 02: INSERT new course\nINSERT INTO Courses (CourseName, Category, Price, DurationHrs)\nVALUES ('Excel for Analysts', 'Business', 2000, 20);\n\n-- 03: UPDATE enrollment status\nUPDATE Enrollments SET EnrollStatus = 'Active' WHERE EnrollmentID = 1003;\n\n-- 04: DELETE junk leads with ROLLBACK\nBEGIN TRAN;\nDELETE FROM Leads WHERE Status = 'Junk';\nROLLBACK TRAN;\n\n-- BONUS: Calculate target increase\nUPDATE SalesAgents SET MonthlyTarget = MonthlyTarget * 1.15 WHERE AgentID = 1;`;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2.5 p-1 text-start text-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span className="font-bold text-blue-600">01. INSERT 3 Students (15 pts)</span>
            <p className="text-[10px] text-slate-600">Include StudentName, Email, City (Cairo, Alex, Giza), EnrollDate.</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span className="font-bold text-teal-600">02. INSERT Course (10 pts)</span>
            <p className="text-[10px] text-slate-600">'Excel for Analysts', 'Business' category, 2000 EGP, 20 hrs.</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span className="font-bold text-orange-600">03. UPDATE Status (15 pts)</span>
            <p className="text-[10px] text-slate-600">Update EnrollStatus of Enrollment #1003 from 'Pending' to 'Active'.</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span className="font-bold text-red-600">04. DELETE Junk Leads (20 pts)</span>
            <p className="text-[10px] text-slate-600">DELETE leads with Status = 'Junk' wrapped in transaction + ROLLBACK.</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowDmlSolution(!showDmlSolution)}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all flex items-center gap-1.5"
          >
            <Code2 className="w-4 h-4" />
            <span>{showDmlSolution ? 'Hide Solution SQL' : 'Show Solution SQL'}</span>
          </button>
        </div>

        {showDmlSolution && (
          <div className="p-3 bg-slate-900 rounded-xl text-white font-mono text-[10px] shadow-md flex justify-between items-start max-h-40 overflow-y-auto">
            <pre className="text-emerald-300 leading-relaxed">{dmlSolutionsCode}</pre>
            <button onClick={() => handleCopy(dmlSolutionsCode, 'cdmlsol')} className="p-1 rounded bg-slate-800 text-slate-300 text-[10px]">
              {copiedCode === 'cdmlsol' ? 'Copied!' : <Copy className="w-3 h-3" />}
            </button>
          </div>
        )}
      </div>
    );
  }

  // =========================================================
  // SLIDE 28: OUTRO HERO
  // =========================================================
  if (slide.id === 28 || slide.type === 'outro-hero') {
    return (
      <ThankYouVisual 
        sessionNumber="24"
        nextSessionNote="🎉 Session 24 Complete! You have mastered SQL Server DDL Statements, Constraints & DML Queries!"
        nextSessionButtonText="Open Session 25: Basic SELECT Queries, Filtering (WHERE) & Sorting (ORDER BY)"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={onSwitchSession ? () => onSwitchSession('session-01') : undefined}
      />
    );
  }

  // Fallback for generic concept slides
  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 text-start">
      <div className="p-6 bg-white rounded-2xl border border-slate-200 text-slate-800 shadow-sm">
        <h3 className="text-base font-bold text-slate-900">{slide.mainTitle}</h3>
        <p className="text-xs text-slate-600 leading-relaxed mt-2">{slide.subtitle}</p>
      </div>
    </div>
  );
};
