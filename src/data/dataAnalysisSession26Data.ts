import { ChapterPresentation } from '../types';

export const dataAnalysisSession26EN: ChapterPresentation = {
  chapterId: 'session-26',
  chapterTitle: 'Session 26: SQL Built-in Functions & CASE WHEN',
  courseName: 'Data Analysis Diploma • Session 26',
  totalSlides: 31,
  slides: [
    // =========================================================
    // PART 00: OVERVIEW & FOUNDATIONS (Slides 1–3)
    // =========================================================

    // Slide 01: Cover Hero
    {
      id: 1,
      slideNumber: '01 / 31',
      type: 'hero',
      topRightTag: '04 — SQL SERVER MODULE',
      topLeftTag: 'PART 05: BUILT-IN FUNCTIONS',
      subBadge: 'SQL SERVER TRACK · BEGINNER TO ADVANCED',
      mainTitle: 'Built-in Functions',
      highlightedWords: ['Built-in', 'Functions'],
      subtitle: 'Scalar Functions · Conversion Functions · CASE WHEN — From Excel Thinking to Database Thinking',
      darkTheme: true
    },

    // Slide 02: Session Roadmap
    {
      id: 2,
      slideNumber: '02 / 31',
      type: 'concept-detail',
      topRightTag: 'AGENDA',
      topLeftTag: 'SESSION ROADMAP',
      subBadge: 'WHAT WE WILL COVER IN THE NEXT 3 HOURS',
      mainTitle: 'Session Roadmap',
      highlightedWords: ['Session', 'Roadmap'],
      subtitle: 'What we will cover in the next 3 hours to transform, convert, and logically classify data:',
      darkTheme: false
    },

    // Slide 03: Database Quick Refresher
    {
      id: 3,
      slideNumber: '03 / 31',
      type: 'concept-detail',
      topRightTag: 'SCHEMA RECAP',
      topLeftTag: 'OPERATIONS DATABASE',
      subBadge: 'DATABASE QUICK REFRESHER',
      mainTitle: 'Database Quick Refresher',
      highlightedWords: ['Database', 'Quick Refresher'],
      subtitle: "Today's examples use the Academy's own operations database (Students, Courses, Payments, Campaigns, Leads, SalesAgents):",
      darkTheme: false
    },

    // =========================================================
    // PART 01: SCALAR FUNCTIONS (Slides 4–14)
    // =========================================================

    // Slide 04: Section Divider 1 — Scalar Functions
    {
      id: 4,
      slideNumber: '04 / 31',
      type: 'section-divider',
      topRightTag: 'PART 1 OF 3',
      topLeftTag: 'ROW-BY-ROW TRANSFORMATION',
      subBadge: 'PART 1 OF 3 · SCALAR FUNCTIONS',
      mainTitle: 'Scalar Functions',
      highlightedWords: ['Scalar', 'Functions'],
      subtitle: 'Transform text, dates, and numbers — one row at a time',
      darkTheme: true
    },

    // Slide 05: What is a Scalar Function?
    {
      id: 5,
      slideNumber: '05 / 31',
      type: 'comparison',
      topRightTag: '01 — SCALAR ESSENTIALS',
      topLeftTag: 'CORE CONCEPT',
      subBadge: 'WHAT IS A SCALAR FUNCTION?',
      mainTitle: 'What is a Scalar Function?',
      highlightedWords: ['What is a', 'Scalar Function?'],
      subtitle: 'A function that takes one value in, and returns exactly one value out — for every single row',
      darkTheme: false
    },

    // Slide 06: String Functions — The Essentials
    {
      id: 6,
      slideNumber: '06 / 31',
      type: 'concept-detail',
      topRightTag: '01 — STRING FUNCTIONS',
      topLeftTag: 'TEXT CLEANING',
      subBadge: 'STRING FUNCTIONS — THE ESSENTIALS',
      mainTitle: 'String Functions — The Essentials',
      highlightedWords: ['String Functions', 'The Essentials'],
      subtitle: 'Clean up messy text values before they reach an analytics report or executive dashboard',
      darkTheme: false
    },

    // Slide 07: Live Demo — Cleaning Student Data
    {
      id: 7,
      slideNumber: '07 / 31',
      type: 'code-and-concepts',
      topRightTag: '01 — PRACTICAL DEMO',
      topLeftTag: 'DATA HYGIENE',
      subBadge: 'LIVE DEMO — CLEANING STUDENT DATA',
      mainTitle: 'Live Demo — Cleaning Student Data',
      highlightedWords: ['Live Demo', 'Cleaning Student Data'],
      subtitle: 'Standardize inconsistent StudentName and Email entries in the Students table',
      darkTheme: false
    },

    // Slide 08: String Functions — Extract, Join & Replace
    {
      id: 8,
      slideNumber: '08 / 31',
      type: 'concept-detail',
      topRightTag: '01 — STRING PARSING',
      topLeftTag: 'TEXT MANIPULATION',
      subBadge: 'EXTRACT, JOIN & REPLACE',
      mainTitle: 'String Functions — Extract, Join & Replace',
      highlightedWords: ['Extract, Join', '& Replace'],
      subtitle: 'Pull pieces out of text, glue values together, and swap old text for new',
      darkTheme: false
    },

    // Slide 09: Live Demo — Domains & Mailing Labels
    {
      id: 9,
      slideNumber: '09 / 31',
      type: 'code-and-concepts',
      topRightTag: '01 — PRACTICAL DEMO',
      topLeftTag: 'MARKETING ENRICHMENT',
      subBadge: 'DOMAINS & MAILING LABELS',
      mainTitle: 'Live Demo — Domains & Mailing Labels',
      highlightedWords: ['Domains &', 'Mailing Labels'],
      subtitle: 'Build a marketing-ready label and check which email domains students use',
      darkTheme: false
    },

    // Slide 10: Date Functions — Working with Time
    {
      id: 10,
      slideNumber: '10 / 31',
      type: 'concept-detail',
      topRightTag: '02 — DATE FUNCTIONS',
      topLeftTag: 'TEMPORAL CALCULATIONS',
      subBadge: 'DATE FUNCTIONS — WORKING WITH TIME',
      mainTitle: 'Date Functions — Working with Time',
      highlightedWords: ['Date Functions', 'Working with Time'],
      subtitle: 'Calculate ages, deadlines, and durations directly inside SQL Server',
      darkTheme: false
    },

    // Slide 11: Live Demo — Campaign Duration
    {
      id: 11,
      slideNumber: '11 / 31',
      type: 'code-and-concepts',
      topRightTag: '02 — PRACTICAL DEMO',
      topLeftTag: 'CAMPAIGN ANALYTICS',
      subBadge: 'LIVE DEMO — CAMPAIGN DURATION',
      mainTitle: 'Live Demo — Campaign Duration',
      highlightedWords: ['Live Demo', 'Campaign Duration'],
      subtitle: 'Measure how long each marketing campaign ran, and how long ago it ended',
      darkTheme: false
    },

    // Slide 12: Math Functions — Rounding & Precision
    {
      id: 12,
      slideNumber: '12 / 31',
      type: 'concept-detail',
      topRightTag: '03 — MATH FUNCTIONS',
      topLeftTag: 'NUMERIC PRECISION',
      subBadge: 'MATH FUNCTIONS — ROUNDING & PRECISION',
      mainTitle: 'Math Functions — Rounding & Precision',
      highlightedWords: ['Math Functions', 'Rounding & Precision'],
      subtitle: 'Control decimal places and handle positive/negative values cleanly',
      darkTheme: false
    },

    // Slide 13: Live Demo — Commission Snapshot
    {
      id: 13,
      slideNumber: '13 / 31',
      type: 'code-and-concepts',
      topRightTag: '03 — PRACTICAL DEMO',
      topLeftTag: 'SALES ANALYTICS',
      subBadge: 'LIVE DEMO — COMMISSION SNAPSHOT',
      mainTitle: 'Live Demo — Commission Snapshot',
      highlightedWords: ['Live Demo', 'Commission Snapshot'],
      subtitle: 'Round agent commission values and calculate progress toward monthly target',
      darkTheme: false
    },

    // Slide 14: Hands-On Exercise 1
    {
      id: 14,
      slideNumber: '14 / 31',
      type: 'exercise',
      topRightTag: '03 — PRACTICE LAB',
      topLeftTag: 'HANDS-ON EXERCISE 1',
      subBadge: 'APPLY SCALAR FUNCTIONS · 15 MINUTES',
      mainTitle: 'Hands-On Exercise 1 — Scalar Functions',
      highlightedWords: ['Hands-On Exercise 1', 'Scalar Functions'],
      subtitle: 'Apply scalar functions to Courses, Payments, and Students tables',
      questions: [
        {
          id: 'ex1_q1',
          question: '1. Round course pricing',
          hint: 'Use ROUND(Price, 0) or CAST as INT.',
          answer: "SELECT CourseName, ROUND(Price, 0) AS RoundedPrice\nFROM Courses;"
        },
        {
          id: 'ex1_q2',
          question: '2. Days since payment',
          hint: 'DATEDIFF(DAY, PaymentDate, GETDATE()).',
          answer: "SELECT PaymentID, PaymentDate,\n       DATEDIFF(DAY, PaymentDate, GETDATE()) AS DaysSincePayment\nFROM Payments;"
        },
        {
          id: 'ex1_q3',
          question: '3. Build a contact label',
          hint: "CONCAT(StudentName, ' - ', Email) or formatted with brackets.",
          answer: "SELECT CONCAT(StudentName, ' <', Email, '>') AS FullLabel\nFROM Students;"
        }
      ],
      darkTheme: false
    },

    // =========================================================
    // PART 02: CONVERSION FUNCTIONS (Slides 15–21)
    // =========================================================

    // Slide 15: Section Divider 2 — Conversion Functions
    {
      id: 15,
      slideNumber: '15 / 31',
      type: 'section-divider',
      topRightTag: 'PART 2 OF 3',
      topLeftTag: 'TYPE CASTING',
      subBadge: 'PART 2 OF 3 · CONVERSION FUNCTIONS',
      mainTitle: 'Conversion Functions',
      highlightedWords: ['Conversion', 'Functions'],
      subtitle: 'Move data safely between types with CAST, CONVERT, and their TRY_ variants',
      darkTheme: true
    },

    // Slide 16: Why Conversion Matters
    {
      id: 16,
      slideNumber: '16 / 31',
      type: 'comparison',
      topRightTag: '04 — DATA INTEGRITY',
      topLeftTag: 'TYPE SAFETY',
      subBadge: 'WHY CONVERSION MATTERS',
      mainTitle: 'Why Conversion Matters',
      highlightedWords: ['Why Conversion', 'Matters'],
      subtitle: 'Every column has a data type — mixing types is where SQL queries quietly break or slow down',
      darkTheme: false
    },

    // Slide 17: CAST — The ANSI-Standard Way
    {
      id: 17,
      slideNumber: '17 / 31',
      type: 'code-and-concepts',
      topRightTag: '04 — ANSI STANDARD',
      topLeftTag: 'TYPE CONVERSION',
      subBadge: 'CAST — THE ANSI-STANDARD WAY',
      mainTitle: 'CAST — The ANSI-Standard Way',
      highlightedWords: ['CAST', 'ANSI-Standard Way'],
      subtitle: "The most portable way to explicitly change a value's data type across relational database engines",
      darkTheme: false
    },

    // Slide 18: CONVERT — The SQL Server Way
    {
      id: 18,
      slideNumber: '18 / 31',
      type: 'concept-detail',
      topRightTag: '04 — T-SQL SPECIALTY',
      topLeftTag: 'STYLE CODES',
      subBadge: 'CONVERT — THE SQL SERVER WAY',
      mainTitle: 'CONVERT — The SQL Server Way',
      highlightedWords: ['CONVERT', 'The SQL Server Way'],
      subtitle: 'Same idea as CAST, plus a style code that controls date and time display formatting',
      darkTheme: false
    },

    // Slide 19: Live Demo — Formatting Lead Dates
    {
      id: 19,
      slideNumber: '19 / 31',
      type: 'code-and-concepts',
      topRightTag: '04 — PRACTICAL DEMO',
      topLeftTag: 'DATE LOCALIZATION',
      subBadge: 'FORMATTING LEAD DATES',
      mainTitle: 'Live Demo — Formatting Lead Dates',
      highlightedWords: ['Formatting', 'Lead Dates'],
      subtitle: 'Present CreatedDate in two different formats for two different business audiences',
      darkTheme: false
    },

    // Slide 20: Common Pitfalls — When Conversion Fails
    {
      id: 20,
      slideNumber: '20 / 31',
      type: 'comparison',
      topRightTag: '05 — DEFENSIVE SQL',
      topLeftTag: 'ERROR RESILIENCE',
      subBadge: 'COMMON PITFALLS — WHEN CONVERSION FAILS',
      mainTitle: 'Common Pitfalls — When Conversion Fails',
      highlightedWords: ['When Conversion', 'Fails'],
      subtitle: 'A safer pair of functions that return NULL instead of crashing your query batch',
      darkTheme: false
    },

    // Slide 21: Hands-On Exercise 2
    {
      id: 21,
      slideNumber: '21 / 31',
      type: 'exercise',
      topRightTag: '05 — PRACTICE LAB',
      topLeftTag: 'HANDS-ON EXERCISE 2',
      subBadge: 'DIAGNOSE & FIX TYPE MISMATCHES · 15 MINUTES',
      mainTitle: 'Hands-On Exercise 2 — Type Mismatch Diagnosis',
      highlightedWords: ['Hands-On Exercise 2', 'Type Mismatches'],
      subtitle: 'Diagnose and fix two type-mismatch problems on Payments and Leads',
      questions: [
        {
          id: 'ex2_q1',
          question: 'Broken Query 1: SELECT PaymentID, Amount FROM Payments WHERE PaymentDate = 20260115;',
          hint: 'PaymentDate is DATETIME, while 20260115 is an integer. Wrap in quotes or cast.',
          answer: "-- Fix A: String literal format\nWHERE PaymentDate = '2026-01-15'\n\n-- Fix B: Explicit CAST\nWHERE CAST(PaymentDate AS DATE) = '2026-01-15'"
        },
        {
          id: 'ex2_q2',
          question: 'Broken Query 2: SELECT LeadName, CreatedDate + 30 AS FollowUpDate FROM Leads;',
          hint: 'In SQL Server, + 30 works on numbers, but DATEADD is the explicit date arithmetic function.',
          answer: "SELECT LeadName,\n       DATEADD(DAY, 30, CreatedDate) AS FollowUpDate\nFROM Leads;"
        },
        {
          id: 'ex2_q3',
          question: 'Discussion: What would TRY_CAST return instead of an error, and when is that the safer choice?',
          hint: 'Dirty data or mixed text/numbers.',
          answer: "TRY_CAST returns NULL when conversion fails, preventing batch aborts in ETL pipelines."
        }
      ],
      darkTheme: false
    },

    // =========================================================
    // PART 03: CASE WHEN DECISION LOGIC (Slides 22–31)
    // =========================================================

    // Slide 22: Section Divider 3 — CASE WHEN
    {
      id: 22,
      slideNumber: '22 / 31',
      type: 'section-divider',
      topRightTag: 'PART 3 OF 3',
      topLeftTag: 'CONDITIONAL LOGIC',
      subBadge: 'PART 3 OF 3 · CASE WHEN',
      mainTitle: 'CASE WHEN',
      highlightedWords: ['CASE', 'WHEN'],
      subtitle: 'Build IF-style decision logic directly inside a SQL query',
      darkTheme: true
    },

    // Slide 23: What is CASE WHEN?
    {
      id: 23,
      slideNumber: '23 / 31',
      type: 'concept-detail',
      topRightTag: '06 — DECISION FLOW',
      topLeftTag: 'EVALUATION ORDER',
      subBadge: 'WHAT IS CASE WHEN?',
      mainTitle: 'What is CASE WHEN?',
      highlightedWords: ['What is', 'CASE WHEN?'],
      subtitle: "SQL's version of an IF statement — evaluated row by row from top to bottom, stopping at first match",
      darkTheme: false
    },

    // Slide 24: Simple CASE — Matching Exact Values
    {
      id: 24,
      slideNumber: '24 / 31',
      type: 'code-and-concepts',
      topRightTag: '06 — SIMPLE CASE',
      topLeftTag: 'EXACT EQUALITY',
      subBadge: 'SIMPLE CASE — MATCHING EXACT VALUES',
      mainTitle: 'Simple CASE — Matching Exact Values',
      highlightedWords: ['Simple CASE', 'Matching Exact Values'],
      subtitle: 'Compares a single column against a fixed list of exact discrete values',
      darkTheme: false
    },

    // Slide 25: Searched CASE — Matching Conditions
    {
      id: 25,
      slideNumber: '25 / 31',
      type: 'code-and-concepts',
      topRightTag: '06 — SEARCHED CASE',
      topLeftTag: 'FLEXIBLE PREDICATES',
      subBadge: 'SEARCHED CASE — MATCHING CONDITIONS',
      mainTitle: 'Searched CASE — Matching Conditions',
      highlightedWords: ['Searched CASE', 'Matching Conditions'],
      subtitle: 'Evaluates full boolean expressions on each line — ranges, inequalities, and multi-column logic',
      darkTheme: false
    },

    // Slide 26: Live Demo — Student Status Breakdown
    {
      id: 26,
      slideNumber: '26 / 31',
      type: 'code-and-concepts',
      topRightTag: '07 — GROUP BY CASE',
      topLeftTag: 'CATEGORICAL AGGREGATION',
      subBadge: 'STUDENT STATUS BREAKDOWN',
      mainTitle: 'Live Demo — Student Status Breakdown',
      highlightedWords: ['Student Status', 'Breakdown'],
      subtitle: 'Turn raw status codes into friendly labels, then count students in each computed category',
      darkTheme: false
    },

    // Slide 27: Live Demo — Course Pricing Tiers
    {
      id: 27,
      slideNumber: '27 / 31',
      type: 'code-and-concepts',
      topRightTag: '07 — DATA BUCKETING',
      topLeftTag: 'TIERED SUMMARIES',
      subBadge: 'COURSE PRICING TIERS',
      mainTitle: 'Live Demo — Course Pricing Tiers',
      highlightedWords: ['Course Pricing', 'Tiers'],
      subtitle: 'Classic bucketing pattern: turning continuous prices into readable groups for reporting',
      darkTheme: false
    },

    // Slide 28: Live Demo — Lead Funnel Stage
    {
      id: 28,
      slideNumber: '28 / 31',
      type: 'code-and-concepts',
      topRightTag: '07 — FUNNEL ORDERING',
      topLeftTag: 'LOGICAL SEQUENCING',
      subBadge: 'LEAD FUNNEL STAGE',
      mainTitle: 'Live Demo — Lead Funnel Stage',
      highlightedWords: ['Lead Funnel', 'Stage'],
      subtitle: 'Map text statuses onto numeric funnel sequence (1, 2, 3, 4) for logical dashboard ordering',
      darkTheme: false
    },

    // Slide 29: Hands-On Exercise 3
    {
      id: 29,
      slideNumber: '29 / 31',
      type: 'exercise',
      topRightTag: '07 — PRACTICE LAB',
      topLeftTag: 'HANDS-ON EXERCISE 3',
      subBadge: 'COMBINE EVERYTHING ON SALES AGENTS · 20 MINUTES',
      mainTitle: 'Hands-On Exercise 3 — Sales Agent Classification',
      highlightedWords: ['Hands-On Exercise 3', 'Sales Agents'],
      subtitle: 'Combine CASE WHEN, GROUP BY, and CAST on the SalesAgents dataset',
      questions: [
        {
          id: 'ex3_q1',
          question: "1. Classify commission performance: < 1000 = 'Low', 1000-3000 = 'Medium', > 3000 = 'High'",
          hint: 'Use Searched CASE WHEN Commission < 1000 THEN...',
          answer: "SELECT AgentName, Commission,\n       CASE\n           WHEN Commission < 1000 THEN 'Low'\n           WHEN Commission <= 3000 THEN 'Medium'\n           ELSE 'High'\n       END AS PerformanceTier\nFROM SalesAgents;"
        },
        {
          id: 'ex3_q2',
          question: '2. Count agents per tier using GROUP BY',
          hint: 'Repeat the CASE expression in the GROUP BY clause.',
          answer: "SELECT\n    CASE\n        WHEN Commission < 1000 THEN 'Low'\n        WHEN Commission <= 3000 THEN 'Medium'\n        ELSE 'High'\n    END AS PerformanceTier,\n    COUNT(*) AS AgentCount\nFROM SalesAgents\nGROUP BY\n    CASE\n        WHEN Commission < 1000 THEN 'Low'\n        WHEN Commission <= 3000 THEN 'Medium'\n        ELSE 'High'\n    END;"
        },
        {
          id: 'ex3_q3',
          question: '3. Stretch Goal: CAST MonthlyTarget to DECIMAL(10,2) and calculate % achieved',
          hint: 'ROUND(Commission / CAST(MonthlyTarget AS DECIMAL(10,2)) * 100, 1)',
          answer: "SELECT AgentName,\n       ROUND(Commission / CAST(MonthlyTarget AS DECIMAL(10,2)) * 100, 1) AS PctAchieved\nFROM SalesAgents;"
        }
      ],
      darkTheme: false
    },

    // Slide 30: Session Recap & Knowledge Check
    {
      id: 30,
      slideNumber: '30 / 31',
      type: 'concept-detail',
      topRightTag: 'REVISION',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'SESSION RECAP & KNOWLEDGE CHECK',
      mainTitle: 'Session Recap & Knowledge Check',
      highlightedWords: ['Session Recap', '& Knowledge Check'],
      subtitle: 'Three function families — one shared skill: shaping and enriching data inside the query itself',
      darkTheme: false
    },

    // Slide 31: Outro Hero
    {
      id: 31,
      slideNumber: '31 / 31',
      type: 'outro-hero',
      topRightTag: 'INSTANT ACADEMY',
      topLeftTag: 'SESSION 26 COMPLETE',
      subBadge: 'SQL BUILT-IN FUNCTIONS & CASE WHEN COMPLETED!',
      mainTitle: 'Great work today.',
      highlightedWords: ['Great work', 'today.'],
      subtitle: 'You can now clean text, convert data types safely, and build IF-style decision logic straight into a SQL query.',
      nextSessionNote: '🎉 Session 26 Complete! Next Session: Joins & Multi-Table Relational Queries',
      darkTheme: true
    }
  ]
};

export const dataAnalysisSession26AR: ChapterPresentation = {
  ...dataAnalysisSession26EN,
  chapterTitle: 'السيشن 26: الدوال المدمجة وجمل الشروط (SQL Built-in Functions & CASE WHEN)',
  courseName: 'دبلومة تحليل البيانات • السيشن 26'
};
