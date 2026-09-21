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
  ChevronRight,
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
  BookOpen
} from 'lucide-react';

interface Session23SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session23SlideRenderer: React.FC<Session23SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // ---------------------------------------------------------
  // INTERACTIVE STATES FOR WIDGETS
  // ---------------------------------------------------------

  // Slide 3: Excel vs SQL Simulator
  const [dataVolume, setDataVolume] = useState<number>(50000);
  const [concurrentUsers, setConcurrentUsers] = useState<number>(25);

  // Slide 24: ERD Attribute Type Tester
  const [activeAttributeType, setActiveAttributeType] = useState<'simple' | 'key' | 'composite' | 'multivalued' | 'derived'>('key');

  // Slide 31: ERD Interactive Node Explorer
  const [selectedEntity, setSelectedEntity] = useState<string>('Students');

  // Slide 34 & 42: Active Schema Table
  const [activeSchemaTable, setActiveSchemaTable] = useState<'Students' | 'Courses' | 'Enrollments' | 'Payments' | 'Leads' | 'SalesAgents' | 'Campaigns' | 'Attendance'>('Students');

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
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-4 ring-4 ring-orange-500/20">
            <Database className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold mb-3">
            {slide.subBadge || 'SECTION'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {slide.mainTitle}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
            {slide.subtitle}
          </p>
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual 
        sessionNumber="23"
        courseTag="Database Design Module"
        titlePrefix="ERD, MAPPING"
        titleHighlight="& NORMALIZATION"
        subtitle="Instant Academy Business Case · 3NF Applied · SQL Server for Data Analysts · Database Fundamentals & DDL"
        floatingBadges={[
          { icon: Database, label: "SQL Server & SSMS", position: "top-left", borderColor: "border-blue-500/50", textColor: "text-blue-400" },
          { icon: Grid, label: "8 Core Entities & Rules", position: "top-right", borderColor: "border-amber-500/50", textColor: "text-amber-400" },
          { icon: Layers, label: "ERD Blueprint & Mapping", position: "bottom-left", borderColor: "border-purple-500/50", textColor: "text-purple-400" },
          { icon: CheckCircle2, label: "UNF to 3NF Normalization", position: "bottom-right", borderColor: "border-emerald-500/50", textColor: "text-emerald-400" }
        ]}
        statsCards={[
          { val: "8 Parts", label: "Database Design", sub: "Intro to 3NF Normalization" },
          { val: "44 Slides", label: "Interactive Deck", sub: "Business Case & ERD Mapping" },
          { val: "8 Tables", label: "Instant Academy Schema", sub: "3NF Relational Database" }
        ]}
      />
    );
  }

  // =========================================================
  // SLIDE 03: WHY DO COMPANIES NEED DATABASES? (EXCEL VS DB)
  // =========================================================
  if (slide.id === 3) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium leading-relaxed flex items-center gap-2">
          <Building className="w-4 h-4 text-amber-600 shrink-0" />
          <span><strong>Scenario:</strong> Imagine Instant Academy has 2,000 students, 50 courses, daily payments, and a sales team managing 500 leads per month. Could you track all of this reliably in a single Excel file?</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white border border-red-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs uppercase mb-2.5">
                <X className="w-3.5 h-3.5 text-red-600" />
                <span>Excel Problems</span>
              </div>
              <ul className="text-[11px] text-slate-700 space-y-2">
                <li className="flex items-start gap-1.5"><span className="text-red-500 font-bold">•</span> Duplicate student records across multiple files</li>
                <li className="flex items-start gap-1.5"><span className="text-red-500 font-bold">•</span> No way to link enrollments to payments automatically</li>
                <li className="flex items-start gap-1.5"><span className="text-red-500 font-bold">•</span> Accidental deletion destroys months of data</li>
                <li className="flex items-start gap-1.5"><span className="text-red-500 font-bold">•</span> Only one person can edit at a time</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase mb-2.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Database Solutions</span>
              </div>
              <ul className="text-[11px] text-slate-700 space-y-2">
                <li className="flex items-start gap-1.5"><span className="text-emerald-500 font-bold">•</span> One central Students table — no duplicates</li>
                <li className="flex items-start gap-1.5"><span className="text-emerald-500 font-bold">•</span> Foreign keys link Enrollments to Payments</li>
                <li className="flex items-start gap-1.5"><span className="text-emerald-500 font-bold">•</span> Transactions &amp; backups protect all data</li>
                <li className="flex items-start gap-1.5"><span className="text-emerald-500 font-bold">•</span> Hundreds of users query simultaneously</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Performance Calculator */}
        <div className="p-3 bg-slate-900 rounded-xl text-white font-mono text-xs shadow-md space-y-2">
          <div className="flex items-center justify-between text-[11px] border-b border-slate-800 pb-1">
            <span className="text-orange-400 font-bold">⚡ Interactive Scale Tester: Excel vs SQL Server</span>
            <span className="text-slate-400">Drag sliders to test load</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            <div>
              <label className="text-slate-300 block mb-1">Rows: {dataVolume.toLocaleString()}</label>
              <input type="range" min="1000" max="1000000" step="10000" value={dataVolume} onChange={(e) => setDataVolume(Number(e.target.value))} className="w-full accent-orange-500" />
            </div>
            <div>
              <label className="text-slate-300 block mb-1">Concurrent Users: {concurrentUsers}</label>
              <input type="range" min="1" max="200" value={concurrentUsers} onChange={(e) => setConcurrentUsers(Number(e.target.value))} className="w-full accent-blue-500" />
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] pt-1">
            <span className={dataVolume > 100000 || concurrentUsers > 1 ? "text-red-400" : "text-emerald-400"}>
              Excel Status: {dataVolume > 100000 || concurrentUsers > 1 ? "⚠️ Crash / Corrupted Lock" : "✅ OK for small data"}
            </span>
            <span className="text-emerald-400 font-bold">
              SQL Server Status: 🚀 0.02s Query Response Time
            </span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04: WHAT EXACTLY IS A DATABASE?
  // =========================================================
  if (slide.id === 4) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-3.5 bg-blue-900 text-white rounded-xl text-xs font-medium leading-relaxed text-center shadow-md">
          "A database is an organized collection of structured data stored electronically, designed to be easily accessed, managed, queried, and updated by multiple users simultaneously."
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Structured</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed mt-1">Data is organized into tables with defined columns and data types.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Controlled</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed mt-1">Access permissions and rules enforce who can read or change data.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Link className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Relational</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed mt-1">Tables can be linked together using shared primary/foreign keys.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Queryable</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed mt-1">SQL lets you retrieve exactly the data you need in seconds.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: DATABASE VS SPREADSHEET (TABLE)
  // =========================================================
  if (slide.id === 5) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="overflow-x-auto rounded-xl bg-white border border-slate-200 shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-mono text-[11px]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">Excel / Spreadsheet</th>
                <th className="p-3">SQL Server Database</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800 font-mono text-[11px]">
              <tr>
                <td className="p-2.5 font-bold text-blue-600">Data Volume</td>
                <td className="p-2.5 font-sans text-slate-600">Thousands of rows (limited)</td>
                <td className="p-2.5 font-bold text-emerald-600">Millions to billions of rows</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-blue-600">Multi-user</td>
                <td className="p-2.5 font-sans text-slate-600">One editor at a time</td>
                <td className="p-2.5 font-bold text-emerald-600">Hundreds of concurrent users</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-blue-600">Data Integrity</td>
                <td className="p-2.5 font-sans text-slate-600">Easy to break with typos</td>
                <td className="p-2.5 font-bold text-emerald-600">Enforced by constraints &amp; data types</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-blue-600">Relationships</td>
                <td className="p-2.5 font-sans text-slate-600">Manual VLOOKUP / XLOOKUP</td>
                <td className="p-2.5 font-bold text-emerald-600">Native JOINs across relational tables</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-blue-600">Automation</td>
                <td className="p-2.5 font-sans text-slate-600">Manual refresh</td>
                <td className="p-2.5 font-bold text-emerald-600">Scheduled queries &amp; stored procedures</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-blue-600">Ideal For</td>
                <td className="p-2.5 font-sans text-slate-600">Personal analysis &amp; quick reports</td>
                <td className="p-2.5 font-bold text-emerald-600">Production business information systems</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <span><strong>Key Takeaway:</strong> As a data analyst, you will use BOTH — Excel for reports &amp; dashboards, SQL Server for querying production databases.</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 07: ANATOMY OF A DATABASE TABLE
  // =========================================================
  if (slide.id === 7) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="p-3 bg-white border border-slate-200 rounded-xl">
              <h4 className="text-xs font-bold text-blue-600 uppercase">Table (Entity)</h4>
              <p className="text-[11px] text-slate-600 mt-1">Represents one entity type (e.g. Students). Like a spreadsheet tab but strictly structured.</p>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-xl">
              <h4 className="text-xs font-bold text-orange-600 uppercase">Column (Attribute)</h4>
              <p className="text-[11px] text-slate-600 mt-1">A named attribute with a fixed data type (e.g., StudentName VARCHAR).</p>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-xl">
              <h4 className="text-xs font-bold text-purple-600 uppercase">Row / Record (Instance)</h4>
              <p className="text-[11px] text-slate-600 mt-1">One specific instance of the entity — one student, one payment.</p>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-xl">
              <h4 className="text-xs font-bold text-emerald-600 uppercase">Data Type</h4>
              <p className="text-[11px] text-slate-600 mt-1">Defines allowed values: INT, VARCHAR, DATE, DECIMAL, BIT.</p>
            </div>
          </div>

          {/* Table Preview */}
          <div className="p-4 bg-slate-900 rounded-2xl text-white font-mono text-xs shadow-md flex flex-col justify-between">
            <div>
              <div className="text-center font-bold text-orange-400 mb-2 border-b border-slate-800 pb-1">
                Table: Students
              </div>
              <table className="w-full text-left text-[11px]">
                <thead className="text-blue-400 border-b border-slate-800">
                  <tr>
                    <th className="pb-1">StudentID (PK)</th>
                    <th className="pb-1">StudentName</th>
                    <th className="pb-1">Email</th>
                    <th className="pb-1">EnrollDate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr><td className="py-1.5 text-yellow-400">1001</td><td>Sara Ahmed</td><td>sara@email.com</td><td>2024-01-15</td></tr>
                  <tr><td className="py-1.5 text-yellow-400">1002</td><td>Omar Hassan</td><td>omar@email.com</td><td>2024-02-03</td></tr>
                  <tr><td className="py-1.5 text-yellow-400">1003</td><td>Nour Khalil</td><td>nour@email.com</td><td>2024-02-20</td></tr>
                </tbody>
              </table>
            </div>
            <div className="text-[10px] text-slate-400 text-center mt-2 border-t border-slate-800 pt-1">
              Data Types: INT (PK) | VARCHAR(100) | VARCHAR(150) | DATE
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 08: PRIMARY KEYS AND FOREIGN KEYS
  // =========================================================
  if (slide.id === 8) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white border-2 border-blue-500 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase mb-2">
                <Key className="w-4 h-4" />
                <span>Primary Key (PK)</span>
              </div>
              <ul className="text-[11px] text-slate-700 space-y-1.5 list-disc list-inside">
                <li>Uniquely identifies each row in a table</li>
                <li>Cannot be NULL or duplicated</li>
                <li>Every table should have one PK</li>
                <li className="font-mono text-blue-800 font-bold">Example: StudentID in Students table</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border-2 border-orange-500 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase mb-2">
                <Link className="w-4 h-4" />
                <span>Foreign Key (FK)</span>
              </div>
              <ul className="text-[11px] text-slate-700 space-y-1.5 list-disc list-inside">
                <li>References the Primary Key of another table</li>
                <li>Creates a relationship between tables</li>
                <li>Enforces referential integrity</li>
                <li className="font-mono text-orange-800 font-bold">Example: StudentID in Enrollments table</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-3 bg-slate-900 rounded-xl text-white font-mono text-xs flex items-center justify-around shadow-md">
          <div className="text-center">
            <span className="text-blue-400 font-bold block">Students</span>
            <span className="text-slate-400 text-[10px]">🔑 StudentID INT</span>
          </div>
          <div className="text-amber-400 font-bold flex items-center gap-1">
            <span>1</span>
            <span>=================&gt;</span>
            <span>Many</span>
          </div>
          <div className="text-center">
            <span className="text-orange-400 font-bold block">Enrollments</span>
            <span className="text-slate-400 text-[10px]">🔗 StudentID INT (FK)</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 10: SQL SERVER AND SSMS — YOUR TOOLKIT
  // =========================================================
  if (slide.id === 10) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
              <Server className="w-5 h-5 text-orange-500" />
              <span>Microsoft SQL Server</span>
            </div>
            <ul className="text-[11px] text-slate-700 space-y-1.5 list-disc list-inside">
              <li>The database engine that stores and manages your data</li>
              <li>Industry-leading RDBMS used by 90%+ of enterprises</li>
              <li>Handles millions of transactions per second</li>
              <li>Free Express edition for learning — full features for analysts</li>
              <li>Used in banking, healthcare, retail, and education</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
              <Database className="w-5 h-5 text-blue-600" />
              <span>SSMS (Studio)</span>
            </div>
            <ul className="text-[11px] text-slate-700 space-y-1.5 list-disc list-inside">
              <li>SQL Server Management Studio — the visual GUI interface</li>
              <li>Write and run SQL queries in the Query Editor</li>
              <li>Browse databases, tables, and schemas via Object Explorer</li>
              <li>View query execution plans to optimize performance</li>
              <li>Free download from Microsoft — install in 10 minutes</li>
            </ul>
          </div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium flex items-center justify-between">
          <span>⚙️ <strong>Quick Setup:</strong> Install SQL Server Express ➔ Install SSMS ➔ Connect to local instance (<code>localhost\SQLEXPRESS</code>) ➔ You're ready!</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 13: BUSINESS RULES — WHAT THE SYSTEM MUST TRACK
  // =========================================================
  if (slide.id === 13) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2 p-1 text-start">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-blue-600 mb-1">Students</h4>
            <p className="text-slate-600">Full name, email, city, enroll date. Can enroll in multiple courses. Converted from leads.</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-teal-600 mb-1">Courses</h4>
            <p className="text-slate-600">Category (AI, Cloud, Programming), tuition fee (DECIMAL), duration in hours. Many students per course.</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-purple-600 mb-1">Campaigns</h4>
            <p className="text-slate-600">Name, channel, budget, start date. Managed by exactly one Sales Agent. Generates multiple leads.</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-indigo-600 mb-1">SalesAgents</h4>
            <p className="text-slate-600">Full name, region, hire date, target. Manages multiple campaigns &amp; assigned multiple leads.</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-emerald-600 mb-1">Leads</h4>
            <p className="text-slate-600">Name, source, status (New➔Contacted➔Interested➔Converted/Lost). Linked to Agent &amp; Campaign.</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-orange-600 mb-1">Enrollments</h4>
            <p className="text-slate-600">Student + Course + Date + Status (Active, Completed, Cancelled). One student has many enrollments.</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-amber-700 mb-1">Payments</h4>
            <p className="text-slate-600">Amount, date, method (Cash/Visa/Transfer). Multiple payments per enrollment (installments).</p>
          </div>
          <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <h4 className="font-bold text-violet-700 mb-1">Attendance</h4>
            <p className="text-slate-600">Linked to Enrollment + Session Date. Status: Present, Absent, Late. One record per student per session.</p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 15: WHAT IS AN ERD?
  // =========================================================
  if (slide.id === 15) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-3.5 bg-blue-900 text-white rounded-xl text-xs leading-relaxed text-center shadow-md">
          An Entity-Relationship Diagram (ERD) is a visual blueprint of a database. It shows the entities (things the system tracks), the attributes (properties describing each entity), and the relationships that connect entities to one another — before any table is ever created in SQL Server.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Grid className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Entities</h4>
            <p className="text-[11px] text-slate-600 mt-1">The "things" the business cares about — Students, Courses, Payments.</p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Attributes</h4>
            <p className="text-[11px] text-slate-600 mt-1">The properties describing an entity — StudentName, Email, Price.</p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Link className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">Relationships</h4>
            <p className="text-[11px] text-slate-600 mt-1">How entities connect — a Student enrolls in a Course.</p>
          </div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 font-medium italic text-center">
          In short: the ERD is drawn first, on paper or in a tool — the SQL tables come second, mapped directly from it.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDES 17 - 23: ERD NOTATION & ENTITY/ATTRIBUTE TYPES
  // =========================================================
  if (slide.id >= 17 && slide.id <= 23) {
    const isStrong = slide.id === 17;
    const isWeak = slide.id === 18;
    const isSimple = slide.id === 19;
    const isKey = slide.id === 20;
    const isComposite = slide.id === 21;
    const isMulti = slide.id === 22;
    const isDerived = slide.id === 23;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono text-white ${
            isStrong ? 'bg-blue-600' : isWeak ? 'bg-teal-600' : isKey ? 'bg-orange-500' : isSimple ? 'bg-blue-500' : isComposite ? 'bg-purple-600' : isMulti ? 'bg-emerald-600' : 'bg-red-500'
          }`}>
            {isStrong ? 'STRONG ENTITY' : isWeak ? 'WEAK ENTITY' : isKey ? 'KEY ATTRIBUTE' : isSimple ? 'SIMPLE ATTRIBUTE' : isComposite ? 'COMPOSITE ATTRIBUTE' : isMulti ? 'MULTI-VALUED' : 'DERIVED ATTRIBUTE'}
          </span>
          <span className="text-xs text-slate-500">ERD Notation Standard</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-3">
            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {slide.subtitle}
              </p>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950 font-bold">
              Notation: {
                isStrong ? 'Single-lined rectangle [Entity]' :
                isWeak ? 'Double-lined rectangle [[Entity]], linked by double-lined diamond' :
                isSimple ? 'Plain single-line oval (Attribute)' :
                isKey ? 'Oval with underlined text (<u>Roll_No</u>)' :
                isComposite ? 'Oval with smaller sub-ovals branching from it' :
                isMulti ? 'Double-lined (double) oval ((Phone_No))' :
                'Dashed-outline oval (:Age:)'
              }
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h4 className="text-xs font-bold text-slate-900 mb-2">Instant Academy Examples:</h4>
              <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside font-mono">
                {isStrong && <><li>Students — identified by StudentID</li><li>Courses — identified by CourseID</li><li>SalesAgents — identified by AgentID</li></>}
                {isWeak && <><li>PaymentInstallments — identified only with parent Payment</li><li>CourseSessions — depends on parent Course</li><li>Dependents — relative to Employee</li></>}
                {isSimple && <><li>Students.City — one indivisible value</li><li>Courses.Price — single decimal amount</li><li>Enrollments.EnrollStatus — single status</li></>}
                {isKey && <><li>Students.StudentID — uniquely identifies student</li><li>Courses.CourseID — primary key of Courses</li><li>SalesAgents.AgentID — primary key of SalesAgents</li></>}
                {isComposite && <><li>StudentName ➔ FirstName + LastName</li><li>Address ➔ Street + City + PostalCode</li><li>ContactInfo ➔ Phone + Email</li></>}
                {isMulti && <><li>Student may have several PhoneNumbers</li><li>Course may list multiple Prerequisites</li><li>Campaign may run across several Channels</li></>}
                {isDerived && <><li>Age ➔ derived from DateOfBirth</li><li>EnrollmentDuration ➔ derived from EnrollDate &amp; EndDate</li><li>TotalPaid ➔ derived by summing Payments</li></>}
              </ul>
            </div>
          </div>

          {/* Visual ERD Shape Diagram */}
          <div className="p-6 bg-slate-900 rounded-2xl text-white flex flex-col items-center justify-center shadow-md border border-slate-800">
            {isStrong && (
              <div className="w-40 h-20 border-2 border-blue-400 bg-blue-950/60 rounded-md flex items-center justify-center font-bold text-sm text-blue-300">
                Customer
              </div>
            )}
            {isWeak && (
              <div className="flex items-center gap-4">
                <div className="w-28 h-16 border-2 border-blue-400 bg-blue-950/60 rounded-md flex items-center justify-center font-bold text-xs text-blue-300">
                  Customer
                </div>
                <div className="w-16 h-16 rotate-45 border-4 border-double border-teal-400 bg-teal-950/60 flex items-center justify-center">
                  <span className="-rotate-45 font-bold text-[10px] text-teal-300">Borrows</span>
                </div>
                <div className="w-28 h-16 border-4 border-double border-teal-400 bg-teal-950/60 rounded-md flex items-center justify-center font-bold text-xs text-teal-300">
                  Loan
                </div>
              </div>
            )}
            {isSimple && (
              <div className="w-40 h-20 border-2 border-blue-400 bg-blue-950/60 rounded-full flex items-center justify-center font-bold text-xs text-blue-300">
                Attribute
              </div>
            )}
            {isKey && (
              <div className="w-40 h-20 border-2 border-orange-400 bg-orange-950/60 rounded-full flex items-center justify-center font-bold text-xs text-orange-300 underline underline-offset-4">
                Roll_No
              </div>
            )}
            {isComposite && (
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-16 h-10 border border-purple-400 rounded-full flex items-center justify-center text-[10px]">Street</div>
                  <div className="w-16 h-10 border border-purple-400 rounded-full flex items-center justify-center text-[10px]">City</div>
                  <div className="w-16 h-10 border border-purple-400 rounded-full flex items-center justify-center text-[10px]">Country</div>
                </div>
                <div className="w-32 h-14 border-2 border-purple-500 bg-purple-950/60 rounded-full flex items-center justify-center font-bold text-xs text-purple-300">
                  Address
                </div>
              </div>
            )}
            {isMulti && (
              <div className="w-40 h-20 border-4 border-double border-emerald-400 bg-emerald-950/60 rounded-full flex items-center justify-center font-bold text-xs text-emerald-300">
                Phone_No
              </div>
            )}
            {isDerived && (
              <div className="w-40 h-20 border-2 border-dashed border-red-400 bg-red-950/60 rounded-full flex items-center justify-center font-bold text-xs text-red-300">
                Age
              </div>
            )}
            <p className="text-[10px] text-slate-400 mt-4">Official ERD Standard Shape</p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 24: ERD ATTRIBUTE TYPES INTERACTIVE TESTER
  // =========================================================
  if (slide.id === 24) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button onClick={() => setActiveAttributeType('key')} className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${activeAttributeType === 'key' ? 'bg-orange-500 text-white' : 'bg-white border text-slate-700'}`}>Key (StudentID)</button>
          <button onClick={() => setActiveAttributeType('simple')} className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${activeAttributeType === 'simple' ? 'bg-blue-500 text-white' : 'bg-white border text-slate-700'}`}>Simple (City)</button>
          <button onClick={() => setActiveAttributeType('composite')} className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${activeAttributeType === 'composite' ? 'bg-purple-500 text-white' : 'bg-white border text-slate-700'}`}>Composite (Name)</button>
          <button onClick={() => setActiveAttributeType('multivalued')} className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${activeAttributeType === 'multivalued' ? 'bg-emerald-500 text-white' : 'bg-white border text-slate-700'}`}>Multi-Valued (Phones)</button>
          <button onClick={() => setActiveAttributeType('derived')} className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${activeAttributeType === 'derived' ? 'bg-red-500 text-white' : 'bg-white border text-slate-700'}`}>Derived (Age)</button>
        </div>

        <div className="p-4 bg-slate-900 rounded-2xl text-white font-mono text-xs shadow-md space-y-2">
          {activeAttributeType === 'key' && (
            <div>
              <h4 className="text-orange-400 font-bold">1. Key Attribute (oval with underlined text):</h4>
              <p className="text-slate-300 mt-1">StudentID — uniquely identifies every student record. Cannot be NULL or duplicated.</p>
            </div>
          )}
          {activeAttributeType === 'simple' && (
            <div>
              <h4 className="text-blue-400 font-bold">2. Simple / Atomic Attribute (plain oval):</h4>
              <p className="text-slate-300 mt-1">City — single indivisible value (e.g. 'Cairo'). Cannot be split further.</p>
            </div>
          )}
          {activeAttributeType === 'composite' && (
            <div>
              <h4 className="text-purple-400 font-bold">3. Composite Attribute (oval with branching sub-ovals):</h4>
              <p className="text-slate-300 mt-1">StudentName ➔ FirstName + LastName. Later flattened into separate columns during mapping.</p>
            </div>
          )}
          {activeAttributeType === 'multivalued' && (
            <div>
              <h4 className="text-emerald-400 font-bold">4. Multi-Valued Attribute (double-lined oval):</h4>
              <p className="text-slate-300 mt-1">PhoneNumbers ➔ A student may have multiple phone numbers. Mapped to a separate table.</p>
            </div>
          )}
          {activeAttributeType === 'derived' && (
            <div>
              <h4 className="text-red-400 font-bold">5. Derived Attribute (dashed-outline oval):</h4>
              <p className="text-slate-300 mt-1">Age ➔ Calculated from DateOfBirth. Computed on the fly in SQL instead of being stored.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDES 25 - 27: RELATIONSHIP DEGREES (UNARY, BINARY, TERNARY)
  // =========================================================
  if (slide.id >= 25 && slide.id <= 27) {
    const isUnary = slide.id === 25;
    const isBinary = slide.id === 26;
    const isTernary = slide.id === 27;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono text-white ${
            isUnary ? 'bg-blue-600' : isBinary ? 'bg-orange-500' : 'bg-purple-600'
          }`}>
            {isUnary ? 'DEGREE 1 (UNARY / RECURSIVE)' : isBinary ? 'DEGREE 2 (BINARY)' : 'DEGREE 3 (TERNARY)'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-3">
            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {slide.subtitle}
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h4 className="text-xs font-bold text-slate-900 mb-2">Instant Academy Examples:</h4>
              <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside font-mono">
                {isUnary && <><li>SalesAgent supervises another SalesAgent</li><li>Course is a prerequisite of another Course</li><li>Employee reports to another Employee</li></>}
                {isBinary && <><li>Student enrolls in a Course (N:M)</li><li>SalesAgent manages a Campaign (1:N)</li><li>Payment belongs to one Enrollment (1:N)</li></>}
                {isTernary && <><li>SalesAgent assigns a Lead through a Campaign in a given Month</li><li>Student books a Course in a specific Session with a specific Instructor</li></>}
              </ul>
            </div>
          </div>

          <div className="p-6 bg-slate-900 rounded-2xl text-white flex flex-col items-center justify-center shadow-md border border-slate-800">
            {isUnary && (
              <div className="flex items-center gap-2">
                <div className="w-24 h-14 border-2 border-blue-400 bg-blue-950/60 rounded-md flex items-center justify-center font-bold text-xs text-blue-300">Person</div>
                <div className="w-14 h-14 rotate-45 border-2 border-blue-400 bg-blue-900 flex items-center justify-center"><span className="-rotate-45 text-[9px] font-bold">Married to</span></div>
              </div>
            )}
            {isBinary && (
              <div className="flex items-center gap-3">
                <div className="w-24 h-14 border-2 border-orange-400 bg-orange-950/60 rounded-md flex items-center justify-center font-bold text-xs text-orange-300">Student</div>
                <div className="w-14 h-14 rotate-45 border-2 border-orange-400 bg-orange-900 flex items-center justify-center"><span className="-rotate-45 text-[9px] font-bold">Enrolled</span></div>
                <div className="w-24 h-14 border-2 border-orange-400 bg-orange-950/60 rounded-md flex items-center justify-center font-bold text-xs text-orange-300">Course</div>
              </div>
            )}
            {isTernary && (
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-4">
                  <div className="w-20 h-10 border border-purple-400 rounded flex items-center justify-center text-[10px]">Student</div>
                  <div className="w-20 h-10 border border-purple-400 rounded flex items-center justify-center text-[10px]">Course</div>
                  <div className="w-20 h-10 border border-purple-400 rounded flex items-center justify-center text-[10px]">Instructor</div>
                </div>
                <div className="w-16 h-16 rotate-45 border-2 border-purple-400 bg-purple-900 flex items-center justify-center"><span className="-rotate-45 text-[9px] font-bold">Enrolled In</span></div>
              </div>
            )}
            <p className="text-[10px] text-slate-400 mt-4">Relationship Diagram Degree</p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 28: CARDINALITY (1:1, 1:N, N:M)
  // =========================================================
  if (slide.id === 28) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2.5 p-1 text-start">
        <div className="p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-700">
          Cardinality defines the maximum number of times one entity instance can be associated with instances of another entity.
        </div>

        <div className="p-3 bg-white border-2 border-teal-500 rounded-xl shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-teal-700 border-b pb-1">
            <span>1 : 1 (One-to-One)</span>
            <span className="font-mono text-[11px] text-slate-600">🎓 One SalesAgent has one LoginAccount</span>
          </div>
          <p className="text-[11px] text-slate-600">One instance of A is related to exactly one instance of B.</p>
        </div>

        <div className="p-3 bg-white border-2 border-blue-500 rounded-xl shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-blue-700 border-b pb-1">
            <span>1 : N (One-to-Many)</span>
            <span className="font-mono text-[11px] text-slate-600">🎓 One SalesAgent manages many Campaigns</span>
          </div>
          <p className="text-[11px] text-slate-600">One instance of A is related to many instances of B, but B relates to only one A.</p>
        </div>

        <div className="p-3 bg-white border-2 border-orange-500 rounded-xl shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-orange-700 border-b pb-1">
            <span>N : M (Many-to-Many)</span>
            <span className="font-mono text-[11px] text-slate-600">🎓 Students enroll in many Courses; Courses have many Students</span>
          </div>
          <p className="text-[11px] text-slate-600">Many instances of A relate to many instances of B. Requires a junction table in SQL.</p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 29: PARTICIPATION CONSTRAINTS (TOTAL VS PARTIAL)
  // =========================================================
  if (slide.id === 29) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 bg-white border-2 border-emerald-500 rounded-2xl shadow-xs">
            <h4 className="text-xs font-bold text-emerald-700 mb-1">Total Participation (Mandatory)</h4>
            <p className="text-[11px] text-slate-600 mb-2">Notation: Double line <code>══════</code></p>
            <p className="text-[11px] text-slate-700 font-medium">Every entity instance MUST participate in the relationship. No exceptions allowed.</p>
            <p className="text-[10px] text-emerald-800 bg-emerald-50 p-1.5 rounded mt-2">Example: Every Enrollment MUST have a Student. An enrollment without a student makes no sense.</p>
          </div>

          <div className="p-4 bg-white border-2 border-orange-500 rounded-2xl shadow-xs">
            <h4 className="text-xs font-bold text-orange-700 mb-1">Partial Participation (Optional)</h4>
            <p className="text-[11px] text-slate-600 mb-2">Notation: Single line <code>──────</code></p>
            <p className="text-[11px] text-slate-700 font-medium">Some entity instances may NOT participate in the relationship — it is optional.</p>
            <p className="text-[10px] text-orange-800 bg-orange-50 p-1.5 rounded mt-2">Example: A Student may or may not have Payments yet (e.g. scholarship, not yet invoiced).</p>
          </div>
        </div>

        {/* Summary Table */}
        <div className="overflow-x-auto rounded-xl bg-white border border-slate-200 shadow-xs">
          <table className="w-full text-left text-[11px] font-mono">
            <thead className="bg-slate-900 text-white">
              <tr><th className="p-2">Entity</th><th className="p-2">Target</th><th className="p-2">Participation</th><th className="p-2">Rule Summary</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr><td className="p-1.5 font-bold">Enrollment</td><td className="p-1.5">Student</td><td className="p-1.5 text-emerald-600 font-bold">Total (══)</td><td className="p-1.5 font-sans">Every enrollment must have a student</td></tr>
              <tr><td className="p-1.5 font-bold">Enrollment</td><td className="p-1.5">Course</td><td className="p-1.5 text-emerald-600 font-bold">Total (══)</td><td className="p-1.5 font-sans">Every enrollment must reference a course</td></tr>
              <tr><td className="p-1.5 font-bold">Payment</td><td className="p-1.5">Enrollment</td><td className="p-1.5 text-emerald-600 font-bold">Total (══)</td><td className="p-1.5 font-sans">Every payment must belong to an enrollment</td></tr>
              <tr><td className="p-1.5 font-bold">Attendance</td><td className="p-1.5">Enrollment</td><td className="p-1.5 text-emerald-600 font-bold">Total (══)</td><td className="p-1.5 font-sans">Every attendance record requires an enrollment</td></tr>
              <tr><td className="p-1.5 font-bold">Student</td><td className="p-1.5">Enrollment</td><td className="p-1.5 text-amber-600 font-bold">Partial (──)</td><td className="p-1.5 font-sans">A student may exist before any enrollment</td></tr>
              <tr><td className="p-1.5 font-bold">Lead</td><td className="p-1.5">Campaign</td><td className="p-1.5 text-amber-600 font-bold">Partial (──)</td><td className="p-1.5 font-sans">A lead may arrive directly (walk-in) with no campaign</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 31: INSTANT ACADEMY FULL ERD DIAGRAM
  // =========================================================
  if (slide.id === 31) {
    const entities = [
      { name: 'Students', desc: 'Identified by StudentID. Attributes: StudentName, Email, City, EnrollDate, Status, NationalID' },
      { name: 'Courses', desc: 'Identified by CourseID. Attributes: CourseName, Category, Price, DurationHrs, StartDate' },
      { name: 'SalesAgents', desc: 'Identified by AgentID. Attributes: AgentName, Email, Phone, Region, MonthlyTarget, HireDate, Commission, IsActive' },
      { name: 'Campaigns', desc: 'Identified by CampaignID. Attributes: CampaignName, Channel, Budget, StartDate, EndDate, IsActive' },
      { name: 'Leads', desc: 'Identified by LeadID. Attributes: LeadName, Phone, Email, Source, Status, CreatedDate. Foreign Keys: AgentID, CampaignID' },
      { name: 'Enrollments', desc: 'Identified by EnrollmentID. Links Student & Course. Attributes: EnrollDate, EnrollStatus' },
      { name: 'Payments', desc: 'Identified by PaymentID. Belongs to Enrollment. Attributes: Amount, PaymentDate, Method, Status' },
      { name: 'Attendance', desc: 'Identified by AttendanceID. Linked to Enrollment. Attributes: SessionDate, AttendStatus, Notes' }
    ];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-3 bg-blue-950 text-white rounded-xl text-xs font-mono flex items-center justify-between border border-blue-800">
          <span>🗺️ <strong>Instant Academy ERD Blueprint:</strong> 8 Core Entities + 7 Diamond Relationships</span>
          <span className="text-orange-400">Click an entity to inspect</span>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {entities.map((e) => (
            <button
              key={e.name}
              onClick={() => setSelectedEntity(e.name)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedEntity === e.name ? 'bg-orange-500 text-white shadow-md' : 'bg-white border text-slate-700 hover:bg-slate-50'
              }`}
            >
              {e.name}
            </button>
          ))}
        </div>

        <div className="p-4 bg-slate-900 rounded-2xl text-white font-mono text-xs shadow-md">
          <div className="flex items-center gap-2 text-orange-400 font-bold mb-1 border-b border-slate-800 pb-1">
            <Database className="w-4 h-4" />
            <span>Entity Details: {selectedEntity}</span>
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            {entities.find((e) => e.name === selectedEntity)?.desc}
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDES WITH SIX CARDS GRID (Slide 4, 12, 16, 33, 43)
  // =========================================================
  if (slide.type === 'six-cards' && slide.cards) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {slide.cards.map((c: any, idx: number) => {
            const Icon = iconLookup[c.iconName] || Target;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{c.title}</h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed whitespace-pre-line">{c.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 34: MAPPING RESULT — RELATIONAL SCHEMA
  // =========================================================
  if (slide.id === 34) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2 p-1 text-start">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-mono">
          <div className="p-2.5 bg-white border-2 border-blue-500 rounded-xl shadow-xs">
            <h4 className="font-bold text-blue-700">Students</h4>
            <span className="text-yellow-600 block">🔑 StudentID INT (PK)</span>
            <span className="text-slate-600 block">• StudentName NVARCHAR</span>
            <span className="text-slate-600 block">• Email VARCHAR UNIQUE</span>
            <span className="text-slate-600 block">• City NVARCHAR</span>
            <span className="text-slate-600 block">• EnrollDate DATE</span>
          </div>

          <div className="p-2.5 bg-white border-2 border-teal-500 rounded-xl shadow-xs">
            <h4 className="font-bold text-teal-700">Courses</h4>
            <span className="text-yellow-600 block">🔑 CourseID INT (PK)</span>
            <span className="text-slate-600 block">• CourseName NVARCHAR</span>
            <span className="text-slate-600 block">• Category VARCHAR</span>
            <span className="text-slate-600 block">• Price DECIMAL</span>
            <span className="text-slate-600 block">• DurationHrs INT</span>
          </div>

          <div className="p-2.5 bg-white border-2 border-indigo-500 rounded-xl shadow-xs">
            <h4 className="font-bold text-indigo-700">SalesAgents</h4>
            <span className="text-yellow-600 block">🔑 AgentID INT (PK)</span>
            <span className="text-slate-600 block">• AgentName NVARCHAR</span>
            <span className="text-slate-600 block">• Email, Phone, Region</span>
            <span className="text-slate-600 block">• MonthlyTarget DECIMAL</span>
            <span className="text-slate-600 block">• IsActive BIT</span>
          </div>

          <div className="p-2.5 bg-white border-2 border-purple-500 rounded-xl shadow-xs">
            <h4 className="font-bold text-purple-700">Campaigns</h4>
            <span className="text-yellow-600 block">🔑 CampaignID INT (PK)</span>
            <span className="text-orange-600 block">🔗 AgentID (FK)</span>
            <span className="text-slate-600 block">• CampaignName NVARCHAR</span>
            <span className="text-slate-600 block">• Channel, Budget</span>
            <span className="text-slate-600 block">• StartDate, EndDate</span>
          </div>

          <div className="p-2.5 bg-white border-2 border-emerald-500 rounded-xl shadow-xs">
            <h4 className="font-bold text-emerald-700">Leads</h4>
            <span className="text-yellow-600 block">🔑 LeadID INT (PK)</span>
            <span className="text-orange-600 block">🔗 AgentID (FK)</span>
            <span className="text-orange-600 block">🔗 CampaignID (FK)</span>
            <span className="text-slate-600 block">• LeadName, Source, Status</span>
          </div>

          <div className="p-2.5 bg-white border-2 border-orange-500 rounded-xl shadow-xs">
            <h4 className="font-bold text-orange-700">Enrollments</h4>
            <span className="text-yellow-600 block">🔑 EnrollmentID INT (PK)</span>
            <span className="text-orange-600 block">🔗 StudentID (FK)</span>
            <span className="text-orange-600 block">🔗 CourseID (FK)</span>
            <span className="text-slate-600 block">• EnrollDate, EnrollStatus</span>
          </div>

          <div className="p-2.5 bg-white border-2 border-amber-700 rounded-xl shadow-xs">
            <h4 className="font-bold text-amber-800">Payments</h4>
            <span className="text-yellow-600 block">🔑 PaymentID INT (PK)</span>
            <span className="text-orange-600 block">🔗 EnrollmentID (FK)</span>
            <span className="text-slate-600 block">• Amount DECIMAL</span>
            <span className="text-slate-600 block">• PaymentDate, Method</span>
          </div>

          <div className="p-2.5 bg-white border-2 border-violet-700 rounded-xl shadow-xs">
            <h4 className="font-bold text-violet-800">Attendance</h4>
            <span className="text-yellow-600 block">🔑 AttendanceID INT (PK)</span>
            <span className="text-orange-600 block">🔗 EnrollmentID (FK)</span>
            <span className="text-slate-600 block">• SessionDate, AttendStatus</span>
            <span className="text-slate-600 block">• Notes NVARCHAR</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 36: WHAT IS NORMALIZATION? (ANOMALIES VS BENEFITS)
  // =========================================================
  if (slide.id === 36) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-3 bg-slate-900 text-white rounded-xl text-xs font-medium text-center shadow-md">
          Normalization is a systematic process of structuring a relational database to reduce data redundancy, eliminate anomalies, and ensure data integrity — by organizing attributes into well-structured tables following Normal Forms (NF).
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 bg-white border border-red-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-bold text-red-600 uppercase mb-2">⚠️ Problems WITHOUT Normalization</h4>
            <ul className="text-[11px] text-slate-700 space-y-1.5 font-mono">
              <li><strong className="text-red-700">Insert Anomaly:</strong> Cannot add payment without enrollment</li>
              <li><strong className="text-red-700">Update Anomaly:</strong> Changing student city requires updating 100 rows</li>
              <li><strong className="text-red-700">Delete Anomaly:</strong> Deleting last enrollment loses student record</li>
              <li><strong className="text-red-700">Data Redundancy:</strong> 'SQL Server' stored 500 times</li>
              <li><strong className="text-red-700">Inconsistency:</strong> 'Cairo' in one row, 'Al-Qahira' in another</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-emerald-200 rounded-2xl shadow-sm">
            <h4 className="text-xs font-bold text-emerald-600 uppercase mb-2">✅ Benefits WITH Normalization</h4>
            <ul className="text-[11px] text-slate-700 space-y-1.5 font-mono">
              <li><strong className="text-emerald-700">No Redundancy:</strong> Each fact stored exactly once</li>
              <li><strong className="text-emerald-700">Easy Updates:</strong> Change student city in ONE row</li>
              <li><strong className="text-emerald-700">Data Integrity:</strong> FK constraints enforce valid links</li>
              <li><strong className="text-emerald-700">Smaller Storage:</strong> Less disk space &amp; faster queries</li>
              <li><strong className="text-emerald-700">Easier Queries:</strong> Structured tables are clean to JOIN</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 37: NORMAL FORMS — THE STAGES OF NORMALIZATION
  // =========================================================
  if (slide.id === 37) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="space-y-2">
          {/* 1NF Box */}
          <div className="p-3 bg-white border-2 border-blue-500 rounded-xl shadow-xs">
            <div className="flex items-center justify-between border-b pb-1">
              <span className="font-bold text-blue-700 text-xs">1NF — First Normal Form</span>
              <span className="text-[10px] text-slate-500 font-mono">Prerequisite: No repeating groups or arrays. Atomic values only.</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] mt-2 font-mono">
              <div className="p-1.5 bg-red-50 text-red-800 rounded">✗ Violation: Storing 'Cash, Visa' in one PaymentMethod cell</div>
              <div className="p-1.5 bg-emerald-50 text-emerald-800 rounded">✓ Fix: One row per payment — one Method per row</div>
            </div>
          </div>

          {/* 2NF Box */}
          <div className="p-3 bg-white border-2 border-orange-500 rounded-xl shadow-xs">
            <div className="flex items-center justify-between border-b pb-1">
              <span className="font-bold text-orange-700 text-xs">2NF — Second Normal Form</span>
              <span className="text-[10px] text-slate-500 font-mono">Prerequisite: Must be in 1NF + No partial dependencies on composite PK.</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] mt-2 font-mono">
              <div className="p-1.5 bg-red-50 text-red-800 rounded">✗ Violation: In (StudentID, CourseID) ➔ CourseName depends only on CourseID</div>
              <div className="p-1.5 bg-emerald-50 text-emerald-800 rounded">✓ Fix: Move CourseName to the Courses table</div>
            </div>
          </div>

          {/* 3NF Box */}
          <div className="p-3 bg-white border-2 border-emerald-500 rounded-xl shadow-xs">
            <div className="flex items-center justify-between border-b pb-1">
              <span className="font-bold text-emerald-700 text-xs">3NF — Third Normal Form</span>
              <span className="text-[10px] text-slate-500 font-mono">Prerequisite: Must be in 2NF + No transitive dependencies.</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] mt-2 font-mono">
              <div className="p-1.5 bg-red-50 text-red-800 rounded">✗ Violation: EnrollmentID ➔ AgentID ➔ AgentName (AgentName depends on AgentID)</div>
              <div className="p-1.5 bg-emerald-50 text-emerald-800 rounded">✓ Fix: Move Agent data to SalesAgents table; store AgentID as FK</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 38: STEP 0 — UNNORMALIZED DATA (UNF)
  // =========================================================
  if (slide.id === 38) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-2 p-1 text-start">
        <div className="p-2.5 bg-red-950 text-red-200 border border-red-800 rounded-xl text-[11px] font-mono">
          🚨 <strong>Imagine all academy data in ONE single flat spreadsheet.</strong> This is our starting point BEFORE normalization.
        </div>

        {/* UNF Table */}
        <div className="overflow-x-auto rounded-xl bg-white border border-slate-200 shadow-sm max-h-48">
          <table className="w-full text-left text-[10px] font-mono whitespace-nowrap">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-1.5">StudentID</th><th className="p-1.5">StudentName</th><th className="p-1.5">City</th><th className="p-1.5">CourseName</th><th className="p-1.5">Category</th><th className="p-1.5">Price</th><th className="p-1.5">AgentName</th><th className="p-1.5">Region</th><th className="p-1.5">CampaignName</th><th className="p-1.5">Channel</th><th className="p-1.5">Amount</th><th className="p-1.5">Method</th><th className="p-1.5">SessionDate</th><th className="p-1.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr className="bg-red-50/50"><td className="p-1.5 font-bold text-red-600">1001</td><td className="p-1.5">Sara Ahmed</td><td className="p-1.5">Cairo</td><td className="p-1.5">SQL Server</td><td className="p-1.5">Data</td><td className="p-1.5">4500</td><td className="p-1.5">Ahmed Ali</td><td className="p-1.5">Cairo</td><td className="p-1.5">Facebook Q1</td><td className="p-1.5">Facebook</td><td className="p-1.5">4500</td><td className="p-1.5">Visa</td><td className="p-1.5">2024-03-01</td><td className="p-1.5">Present</td></tr>
              <tr className="bg-red-50/50"><td className="p-1.5 font-bold text-red-600">1001</td><td className="p-1.5">Sara Ahmed</td><td className="p-1.5">Cairo</td><td className="p-1.5">SQL Server</td><td className="p-1.5">Data</td><td className="p-1.5">4500</td><td className="p-1.5">Ahmed Ali</td><td className="p-1.5">Cairo</td><td className="p-1.5">Facebook Q1</td><td className="p-1.5">Facebook</td><td className="p-1.5">1500</td><td className="p-1.5">Cash</td><td className="p-1.5">2024-03-08</td><td className="p-1.5">Absent</td></tr>
              <tr className="bg-red-50/50"><td className="p-1.5 font-bold text-red-600">1001</td><td className="p-1.5">Sara Ahmed</td><td className="p-1.5">Cairo</td><td className="p-1.5">Power BI</td><td className="p-1.5">Data</td><td className="p-1.5">3200</td><td className="p-1.5">Ahmed Ali</td><td className="p-1.5">Cairo</td><td className="p-1.5">Facebook Q1</td><td className="p-1.5">Facebook</td><td className="p-1.5">3200</td><td className="p-1.5">Transfer</td><td className="p-1.5">2024-03-15</td><td className="p-1.5">Present</td></tr>
              <tr><td className="p-1.5 font-bold text-red-600">1002</td><td className="p-1.5">Omar Hassan</td><td className="p-1.5">Alex</td><td className="p-1.5">Python</td><td className="p-1.5">Prog</td><td className="p-1.5">5000</td><td className="p-1.5">Mona Samir</td><td className="p-1.5">Alex</td><td className="p-1.5">Google Q1</td><td className="p-1.5">Google</td><td className="p-1.5">2500</td><td className="p-1.5">Visa</td><td className="p-1.5">2024-03-01</td><td className="p-1.5">Late</td></tr>
              <tr><td className="p-1.5 font-bold text-red-600">1002</td><td className="p-1.5">Omar Hassan</td><td className="p-1.5">Alex</td><td className="p-1.5">Python</td><td className="p-1.5">Prog</td><td className="p-1.5">5000</td><td className="p-1.5">Mona Samir</td><td className="p-1.5">Alex</td><td className="p-1.5">Google Q1</td><td className="p-1.5">Google</td><td className="p-1.5">2500</td><td className="p-1.5">Cash</td><td className="p-1.5">2024-03-08</td><td className="p-1.5">Present</td></tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
          <div className="p-2 bg-red-100 text-red-900 rounded-lg"><strong>Redundancy:</strong> Sara Ahmed x 3 rows</div>
          <div className="p-2 bg-red-100 text-red-900 rounded-lg"><strong>Update Anomaly:</strong> Change City in 3 rows</div>
          <div className="p-2 bg-red-100 text-red-900 rounded-lg"><strong>Delete Anomaly:</strong> Delete payments = lose student</div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 39: STEP 1 — FIRST NORMAL FORM (1NF)
  // =========================================================
  if (slide.id === 39) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-2.5 bg-blue-900 text-white rounded-xl text-xs font-mono">
          Rule: Every column must hold ONE atomic value. No comma-separated lists. Every row must be unique.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-mono">
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
            <h4 className="font-bold text-red-700 mb-1">✗ Before 1NF — Violation Example</h4>
            <table className="w-full text-left bg-white border border-red-200 text-[10px]">
              <thead className="bg-red-100 text-red-900">
                <tr><th className="p-1">EnrollID</th><th className="p-1">Name</th><th className="p-1 text-red-700">Courses (list!)</th><th className="p-1 text-red-700 font-bold">Methods (list!)</th></tr>
              </thead>
              <tbody>
                <tr><td className="p-1">E001</td><td className="p-1">Sara Ahmed</td><td className="p-1 bg-red-200 font-bold">SQL Server, Power BI</td><td className="p-1 bg-red-200 font-bold">Visa, Cash</td></tr>
                <tr><td className="p-1">E002</td><td className="p-1">Omar Hassan</td><td className="p-1 bg-red-200 font-bold">Python</td><td className="p-1 bg-red-200 font-bold">Visa, Cash</td></tr>
              </tbody>
            </table>
            <p className="text-[10px] text-red-700 mt-2">Storing comma lists violates atomicity — cannot filter or join properly.</p>
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <h4 className="font-bold text-emerald-700 mb-1">✓ After 1NF — Atomic Rows</h4>
            <table className="w-full text-left bg-white border border-emerald-200 text-[10px]">
              <thead className="bg-emerald-100 text-emerald-900">
                <tr><th className="p-1">EnrollID</th><th className="p-1">Name</th><th className="p-1">Course</th><th className="p-1">Method</th></tr>
              </thead>
              <tbody className="divide-y divide-emerald-100">
                <tr><td className="p-1">E001</td><td className="p-1">Sara Ahmed</td><td className="p-1 font-bold">SQL Server</td><td className="p-1">Visa</td></tr>
                <tr><td className="p-1">E001</td><td className="p-1">Sara Ahmed</td><td className="p-1 font-bold">SQL Server</td><td className="p-1">Cash</td></tr>
                <tr><td className="p-1">E001</td><td className="p-1">Sara Ahmed</td><td className="p-1 font-bold">Power BI</td><td className="p-1">Visa</td></tr>
                <tr><td className="p-1">E002</td><td className="p-1">Omar Hassan</td><td className="p-1 font-bold">Python</td><td className="p-1">Visa</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-950 font-medium">
          ✓ 1NF achieved: atomic values, no lists | ⚠️ Still has issue: repeated StudentName + CourseName ➔ need 2NF
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 40: STEP 2 — SECOND NORMAL FORM (2NF)
  // =========================================================
  if (slide.id === 40) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-2.5 bg-orange-950 text-orange-200 border border-orange-800 rounded-xl text-xs font-mono">
          Rule: Must be in 1NF + every non-key column must depend on the WHOLE primary key (applies when PK is composite).
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-mono">
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
            <h4 className="font-bold text-red-700 mb-1">✗ Partial Dependency Violation</h4>
            <p className="text-[10px] text-slate-600 mb-1">Composite PK: (StudentID + CourseID)</p>
            <ul className="text-[10px] space-y-1 text-slate-700">
              <li className="text-red-600">StudentName depends on: StudentID only ✗</li>
              <li className="text-red-600">City depends on: StudentID only ✗</li>
              <li className="text-red-600">CourseName depends on: CourseID only ✗</li>
              <li className="text-red-600">Price depends on: CourseID only ✗</li>
              <li className="text-emerald-700 font-bold">EnrollDate depends on: StudentID + CourseID ✓</li>
            </ul>
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <h4 className="font-bold text-emerald-700 mb-1">✓ After 2NF — Tables Split</h4>
            <div className="space-y-1 text-[10px]">
              <div className="p-1.5 bg-white border border-emerald-300 rounded"><strong>Students (PK: StudentID):</strong> StudentName, Email, City, EnrollDate</div>
              <div className="p-1.5 bg-white border border-emerald-300 rounded"><strong>Courses (PK: CourseID):</strong> CourseName, Category, Price, DurationHrs</div>
              <div className="p-1.5 bg-white border border-emerald-300 rounded"><strong>Enrollments (PK: StudentID + CourseID):</strong> EnrollDate, EnrollStatus</div>
            </div>
          </div>
        </div>

        <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-[11px] text-blue-950 font-medium">
          💡 Academy fix: Enrollments now only stores EnrollmentID, StudentID (FK), CourseID (FK), and enrollment-specific data.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 41: STEP 3 — THIRD NORMAL FORM (3NF)
  // =========================================================
  if (slide.id === 41) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-2.5 bg-emerald-950 text-emerald-200 border border-emerald-800 rounded-xl text-xs font-mono">
          Rule: Must be in 2NF + no non-key column should depend on another non-key column. All facts must depend on the PK — the whole PK — and nothing but the PK.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-mono">
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl space-y-1">
            <h4 className="font-bold text-red-700 mb-1">✗ Transitive Dependency in Leads Table</h4>
            <div className="p-2 bg-white border border-red-200 rounded text-center text-xs">
              <span className="text-blue-600 font-bold">LeadID (PK)</span> ➔ <span className="text-orange-600 font-bold">AgentID (non-key)</span> ➔ <span className="text-red-600 font-bold">AgentName (transitive!)</span>
            </div>
            <p className="text-[10px] text-red-700 mt-1">AgentName does NOT depend on LeadID — it depends on AgentID (another non-key)!</p>
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
            <h4 className="font-bold text-emerald-700 mb-1">✓ After 3NF — Tables Separated</h4>
            <div className="space-y-1 text-[10px]">
              <div className="p-1 bg-white border border-emerald-300 rounded"><strong>Leads (PK: LeadID):</strong> FK: AgentID, CampaignID | Own: LeadName, Source</div>
              <div className="p-1 bg-white border border-emerald-300 rounded"><strong>SalesAgents (PK: AgentID):</strong> Own: AgentName, Region, MonthlyTarget</div>
              <div className="p-1 bg-white border border-emerald-300 rounded"><strong>Campaigns (PK: CampaignID):</strong> FK: AgentID | Own: CampaignName, Budget</div>
            </div>
          </div>
        </div>

        <div className="p-2.5 bg-emerald-100 text-emerald-950 border border-emerald-300 rounded-xl text-xs font-bold text-center">
          🎉 3NF Result: Each table describes exactly ONE thing. No attribute depends on anything other than the primary key.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 42: FINAL 3NF SCHEMA (ALL 8 TABLES + SAMPLE DATA)
  // =========================================================
  if (slide.id === 42) {
    const sampleTables = [
      { id: 'Students', name: 'Students (3 rows)', data: [ ['1001', 'Sara Ahmed', 'sara@mail.com', 'Cairo', '2024-01-10', 'Active'], ['1002', 'Omar Hassan', 'omar@mail.com', 'Alex', '2024-02-03', 'Active'], ['1003', 'Nour Khalil', 'nour@mail.com', 'Cairo', '2024-03-01', 'Active'] ], cols: ['StudentID', 'StudentName', 'Email', 'City', 'EnrollDate', 'Status'] },
      { id: 'Courses', name: 'Courses (3 rows)', data: [ ['C01', 'SQL Server', 'Data Science', '4500', '30'], ['C02', 'Python', 'Programming', '5000', '40'], ['C03', 'Power BI', 'Data Science', '3200', '20'] ], cols: ['CourseID', 'CourseName', 'Category', 'Price', 'DurationHrs'] },
      { id: 'SalesAgents', name: 'SalesAgents (3 rows)', data: [ ['A01', 'Ahmed Ali', 'Cairo', '50000', '1'], ['A02', 'Mona Samir', 'Alex', '40000', '1'], ['A03', 'Khaled Omar', 'Cairo', '45000', '1'] ], cols: ['AgentID', 'AgentName', 'Region', 'MonthlyTarget', 'IsActive'] },
      { id: 'Enrollments', name: 'Enrollments (4 rows)', data: [ ['E001', '1001', 'C01', '2024-01-15', 'Active'], ['E002', '1001', 'C03', '2024-01-15', 'Active'], ['E003', '1002', 'C02', '2024-02-10', 'Completed'], ['E004', '1003', 'C01', '2024-03-05', 'Active'] ], cols: ['EnrollmentID', 'StudentID', 'CourseID', 'EnrollDate', 'EnrollStatus'] }
    ];

    const currentT = sampleTables.find(t => t.id === activeSchemaTable) || sampleTables[0];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-2.5 bg-blue-900 text-white rounded-xl text-xs font-mono flex items-center justify-between border border-blue-800">
          <span>📊 <strong>Final 3NF Schema &amp; Production Sample Data:</strong> All 8 Normalized Tables</span>
          <span className="text-orange-400">Click tab to switch sample table data</span>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {sampleTables.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveSchemaTable(t.id as any)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeSchemaTable === t.id ? 'bg-orange-500 text-white shadow-md' : 'bg-white border text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t.id}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto rounded-xl bg-white border border-slate-200 shadow-sm">
          <table className="w-full text-left text-[11px] font-mono">
            <thead className="bg-slate-900 text-white">
              <tr>
                {currentT.cols.map((c, idx) => (
                  <th key={idx} className="p-2">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {currentT.data.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-50">
                  {row.map((val, cIdx) => (
                    <td key={cIdx} className={`p-2 ${cIdx === 0 ? 'font-bold text-blue-600' : ''}`}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 44: OUTRO HERO
  // =========================================================
  if (slide.id === 44 || slide.type === 'outro-hero') {
    return (
      <ThankYouVisual 
        sessionNumber="23"
        nextSessionNote="🎉 Session 23 Complete! You have mastered Database Fundamentals, ERD Diagramming & 3NF Normalization!"
        nextSessionButtonText="Open Session 24: SQL Server DDL Statements & Queries"
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
