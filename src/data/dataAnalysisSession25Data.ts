import { ChapterPresentation } from '../types';

export const dataAnalysisSession25EN: ChapterPresentation = {
  chapterId: 'session-25',
  chapterTitle: 'Session 25: Reading Data with SELECT Queries & Aggregations',
  courseName: 'Data Analysis Diploma • Session 25',
  totalSlides: 30,
  slides: [
    // =========================================================
    // PART 01: SELECT & SCHEMA FOUNDATION (Slides 1–4)
    // =========================================================

    // Slide 01: Cover Hero
    {
      id: 1,
      slideNumber: '01 / 30',
      type: 'hero',
      topRightTag: '04 — SQL SERVER MODULE',
      topLeftTag: 'PART 01: QUERYING FUNDAMENTALS',
      subBadge: 'READING DATA WITH SELECT QUERIES',
      mainTitle: 'Reading Data with SELECT Queries',
      highlightedWords: ['Reading Data', 'SELECT Queries'],
      subtitle: 'Filtering, Sorting, Aggregations, GROUP BY, HAVING & Business KPIs on Instant Academy Relational Database',
      darkTheme: true
    },

    // Slide 02: Our Database Schema (Quick Recap)
    {
      id: 2,
      slideNumber: '02 / 30',
      type: 'concept-detail',
      topRightTag: 'SCHEMA OVERVIEW',
      topLeftTag: 'INSTANT ACADEMY DATASET',
      subBadge: 'OUR DATABASE SCHEMA (QUICK RECAP)',
      mainTitle: 'Instant Academy — Our Database Schema (Quick Recap)',
      highlightedWords: ['Database Schema', 'Quick Recap'],
      subtitle: 'All examples in this session use the Instant Academy dataset. Here are the 8 tables we work with:',
      cards: [
        {
          title: 'Students',
          badge: 'STUDENT REGISTRY',
          badgeColor: 'blue',
          bullets: ['StudentID (PK)', '• StudentName', '• Email', '• City', '• EnrollDate']
        },
        {
          title: 'Courses',
          badge: 'ACADEMIC CATALOG',
          badgeColor: 'cyan',
          bullets: ['CourseID (PK)', '• CourseName', '• Category', '• Price', '• DurationHrs']
        },
        {
          title: 'Enrollments',
          badge: 'REGISTRATION JUNCTION',
          badgeColor: 'purple',
          bullets: ['EnrollmentID (PK)', 'StudentID (FK)', 'CourseID (FK)', '• EnrollDate', '• EnrollStatus']
        },
        {
          title: 'Payments',
          badge: 'FINANCIAL LEDGER',
          badgeColor: 'orange',
          bullets: ['PaymentID (PK)', 'EnrollmentID (FK)', '• Amount', '• PaymentDate', '• Method', '• Status']
        },
        {
          title: 'Leads',
          badge: 'SALES PIPELINE',
          badgeColor: 'emerald',
          bullets: ['LeadID (PK)', 'AgentID (FK)', 'CampaignID (FK)', '• LeadName', '• Source', '• Status', '• CreatedDate']
        },
        {
          title: 'Campaigns',
          badge: 'MARKETING CHANNELS',
          badgeColor: 'purple',
          bullets: ['CampaignID (PK)', 'AgentID (FK)', '• CampaignName', '• Channel', '• Budget', '• StartDate']
        },
        {
          title: 'Attendance',
          badge: 'SESSION LOGS',
          badgeColor: 'rose',
          bullets: ['AttendanceID (PK)', 'EnrollmentID (FK)', '• AttendStatus', '• Notes']
        },
        {
          title: 'SalesAgents',
          badge: 'STAFF & TARGETS',
          badgeColor: 'blue',
          bullets: ['AgentID (PK)', '• AgentName', '• Email', '• Region', '• MonthlyTarget']
        }
      ],
      darkTheme: false
    },

    // Slide 03: SELECT — Syntax & Anatomy
    {
      id: 3,
      slideNumber: '03 / 30',
      type: 'code-and-concepts',
      topRightTag: '01 — SELECT ANATOMY',
      topLeftTag: 'CORE SQL QUERYING',
      subBadge: 'SYNTAX & CLAUSE ANATOMY',
      mainTitle: 'SELECT — Syntax & Anatomy',
      highlightedWords: ['SELECT', 'Syntax & Anatomy'],
      subtitle: 'The most important statement in SQL for data analysts',
      codeSnippet: `SELECT   column1, column2, ...    -- Which columns to show\nFROM     TableName                -- Which table to read from\nWHERE    condition                -- Filter rows (optional)\nORDER BY column ASC/DESC;         -- Sort results (optional)`,
      cards: [
        {
          title: 'SELECT',
          description: 'Specifies which columns appear in your result. Use * for all columns (avoid in production).',
          badge: 'COLUMNS',
          badgeColor: 'blue'
        },
        {
          title: 'FROM',
          description: "Names the table you're querying. The engine reads data from here.",
          badge: 'SOURCE TABLE',
          badgeColor: 'cyan'
        },
        {
          title: 'WHERE',
          description: 'Filters rows before returning them. Only rows matching the condition are included.',
          badge: 'ROW FILTER',
          badgeColor: 'emerald'
        },
        {
          title: 'ORDER BY',
          description: 'Sorts the final result set. ASC = ascending (default), DESC = descending.',
          badge: 'SORTING',
          badgeColor: 'orange'
        }
      ],
      darkTheme: false
    },

    // Slide 04: SELECT * vs Specific Columns
    {
      id: 4,
      slideNumber: '04 / 30',
      type: 'comparison',
      topRightTag: 'BEST PRACTICES',
      topLeftTag: 'QUERY OPTIMIZATION',
      subBadge: 'PERFORMANCE & READABILITY',
      mainTitle: 'SELECT * vs Specific Columns',
      highlightedWords: ['SELECT *', 'Specific Columns'],
      subtitle: 'Why being specific matters for performance, network transfer, and maintainability',
      darkTheme: false
    },

    // =========================================================
    // PART 02: FILTERING & OPERATORS (Slides 5–9)
    // =========================================================

    // Slide 05: The WHERE Clause — Filtering Rows
    {
      id: 5,
      slideNumber: '05 / 30',
      type: 'code-and-concepts',
      topRightTag: '02 — ROW FILTERING',
      topLeftTag: 'FILTERING LOGIC',
      subBadge: 'FILTERING ROWS & EXECUTION ORDER',
      mainTitle: 'The WHERE Clause — Filtering Rows',
      highlightedWords: ['The WHERE Clause', 'Filtering Rows'],
      subtitle: 'The WHERE clause filters rows returned by a SELECT statement. Only rows that satisfy the condition are included.',
      darkTheme: false
    },

    // Slide 06: Logical Operators — AND, OR, NOT
    {
      id: 6,
      slideNumber: '06 / 30',
      type: 'concept-detail',
      topRightTag: '02 — LOGICAL OPERATORS',
      topLeftTag: 'BOOLEAN LOGIC',
      subBadge: 'AND · OR · NOT PRECEDENCE',
      mainTitle: 'Logical Operators — AND, OR, NOT',
      highlightedWords: ['Logical Operators', 'AND, OR, NOT'],
      subtitle: 'Combining multiple filtering criteria using boolean logic and enforcing correct precedence with parentheses',
      darkTheme: false
    },

    // Slide 07: BETWEEN and IN — Range and List Filtering
    {
      id: 7,
      slideNumber: '07 / 30',
      type: 'concept-detail',
      topRightTag: '02 — RANGE & LISTS',
      topLeftTag: 'CLEAN SQL SYNTAX',
      subBadge: 'BETWEEN & IN OPERATORS',
      mainTitle: 'BETWEEN and IN — Range and List Filtering',
      highlightedWords: ['BETWEEN and IN', 'Range and List Filtering'],
      subtitle: 'Cleaner, faster, and more readable alternatives to chained relational comparisons',
      darkTheme: false
    },

    // Slide 08: LIKE — Pattern Matching with Wildcards
    {
      id: 8,
      slideNumber: '08 / 30',
      type: 'code-and-concepts',
      topRightTag: '02 — PATTERN MATCHING',
      topLeftTag: 'TEXT WILDCARDS',
      subBadge: 'WILDCARDS % & _',
      mainTitle: 'LIKE — Pattern Matching with Wildcards',
      highlightedWords: ['LIKE', 'Pattern Matching with Wildcards'],
      subtitle: 'Search for patterns in text columns — essential for partial name searches, email domains, and SKU codes.',
      darkTheme: false
    },

    // Slide 09: NULL Values — Understanding Missing Data
    {
      id: 9,
      slideNumber: '09 / 30',
      type: 'concept-detail',
      topRightTag: '02 — DATA INTEGRITY',
      topLeftTag: 'THREE-VALUED LOGIC',
      subBadge: 'HANDLING NULL VALUES & MISSING DATA',
      mainTitle: 'NULL Values — Understanding Missing Data',
      highlightedWords: ['NULL Values', 'Missing Data'],
      subtitle: 'NULL means the value is UNKNOWN or MISSING. It is NOT zero, NOT empty string, NOT false.',
      darkTheme: false
    },

    // =========================================================
    // PART 03: SORTING & DEDUPLICATION (Slides 10–13)
    // =========================================================

    // Slide 10: ORDER BY — Sorting Query Results
    {
      id: 10,
      slideNumber: '10 / 30',
      type: 'code-and-concepts',
      topRightTag: '03 — SORTING DATA',
      topLeftTag: 'RESULT PRESENTATION',
      subBadge: 'ORDER BY ASC / DESC',
      mainTitle: 'ORDER BY — Sorting Query Results',
      highlightedWords: ['ORDER BY', 'Sorting Query Results'],
      subtitle: 'Sorts the rows returned by your query. Can sort by one or more columns, ascending (ASC) or descending (DESC). Applied LAST.',
      darkTheme: false
    },

    // Slide 11: TOP and DISTINCT — Limiting and Deduplicating Results
    {
      id: 11,
      slideNumber: '11 / 30',
      type: 'concept-detail',
      topRightTag: '03 — LIMIT & UNIQUE',
      topLeftTag: 'RESULT SHAPING',
      subBadge: 'TOP N & DISTINCT DEDUPLICATION',
      mainTitle: 'TOP and DISTINCT — Limiting and Deduplicating Results',
      highlightedWords: ['TOP and DISTINCT', 'Limiting and Deduplicating Results'],
      subtitle: 'Restrict total rows returned and eliminate duplicate values from results',
      darkTheme: false
    },

    // Slide 12: Putting It All Together — Building Complex Queries
    {
      id: 12,
      slideNumber: '12 / 30',
      type: 'code-and-concepts',
      topRightTag: '03 — MASTER QUERIES',
      topLeftTag: 'REAL-WORLD SCENARIOS',
      subBadge: 'PUTTING IT ALL TOGETHER',
      mainTitle: 'Putting It All Together — Building Complex Queries',
      highlightedWords: ['Putting It All Together', 'Complex Queries'],
      subtitle: 'Combining WHERE, AND/OR, BETWEEN, IN, LIKE, IS NULL, and ORDER BY in single powerful queries:',
      darkTheme: false
    },

    // Slide 13: Common Mistakes & Pro Tips
    {
      id: 13,
      slideNumber: '13 / 30',
      type: 'comparison',
      topRightTag: '03 — PRO TIPS',
      topLeftTag: 'ERROR PREVENTION',
      subBadge: 'COMMON MISTAKES & PRO TIPS',
      mainTitle: 'Common Mistakes & Pro Tips',
      highlightedWords: ['Common Mistakes', 'Pro Tips'],
      subtitle: '5 classic pitfalls to avoid when writing filtering and sorting queries in SQL Server',
      darkTheme: false
    },

    // =========================================================
    // PART 04: AGGREGATIONS & GROUP BY MECHANICS (Slides 14–22)
    // =========================================================

    // Slide 14: Why Aggregate? — From Raw Rows to Business Insight
    {
      id: 14,
      slideNumber: '14 / 30',
      type: 'comparison',
      topRightTag: '04 — AGGREGATIONS',
      topLeftTag: 'DATA TRANSFORMATION',
      subBadge: 'FROM RAW ROWS TO BUSINESS INSIGHT',
      mainTitle: 'Why Aggregate? — From Raw Rows to Business Insight',
      highlightedWords: ['Why Aggregate?', 'Business Insight'],
      subtitle: 'Raw data is an INPUT — aggregation turns thousands of unorganized rows into actionable BUSINESS ANSWERS.',
      darkTheme: false
    },

    // Slide 15: The 5 Core Aggregate Functions
    {
      id: 15,
      slideNumber: '15 / 30',
      type: 'concept-detail',
      topRightTag: '04 — AGGREGATE FUNCTIONS',
      topLeftTag: 'SQL BUILT-IN AGGREGATES',
      subBadge: 'THE 5 CORE AGGREGATE FUNCTIONS',
      mainTitle: 'The 5 Core Aggregate Functions',
      highlightedWords: ['The 5 Core', 'Aggregate Functions'],
      subtitle: 'COUNT(), SUM(), AVG(), MIN(), MAX() — the mathematical building blocks of every SQL analyst dashboard',
      darkTheme: false
    },

    // Slide 16: COUNT() — Counting Academy Records
    {
      id: 16,
      slideNumber: '16 / 30',
      type: 'code-and-concepts',
      topRightTag: '04 — COUNT MECHANICS',
      topLeftTag: 'THREE FLAVORS OF COUNT',
      subBadge: 'COUNTING ACADEMY RECORDS',
      mainTitle: 'COUNT() — Counting Academy Records',
      highlightedWords: ['COUNT()', 'Counting Academy Records'],
      subtitle: 'Understand the critical difference between COUNT(*), COUNT(col), and COUNT(DISTINCT col)',
      darkTheme: false
    },

    // Slide 17: SUM() & AVG() — Revenue and Pricing Analysis
    {
      id: 17,
      slideNumber: '17 / 30',
      type: 'code-and-concepts',
      topRightTag: '04 — FINANCIAL AGGREGATES',
      topLeftTag: 'METRICS & SAMPLE OUTPUT',
      subBadge: 'REVENUE AND PRICING ANALYSIS',
      mainTitle: 'SUM() & AVG() — Revenue and Pricing Analysis',
      highlightedWords: ['SUM() & AVG()', 'Revenue and Pricing Analysis'],
      subtitle: 'Calculating financial totals, averages, minimums, maximums, and transaction counts across tables',
      darkTheme: false
    },

    // Slide 18: GROUP BY — The Backbone of Business Reporting
    {
      id: 18,
      slideNumber: '18 / 30',
      type: 'concept-detail',
      topRightTag: '05 — GROUP BY MECHANICS',
      topLeftTag: 'GROUPING LOGIC',
      subBadge: 'THE BACKBONE OF BUSINESS REPORTING',
      mainTitle: 'GROUP BY — The Backbone of Business Reporting',
      highlightedWords: ['GROUP BY', 'Backbone of Business Reporting'],
      subtitle: 'Bucketing individual rows into distinct groups so aggregate functions compute one summary result per category',
      darkTheme: false
    },

    // Slide 19: SQL Execution Order — What Runs When
    {
      id: 19,
      slideNumber: '19 / 30',
      type: 'concept-detail',
      topRightTag: '05 — EXECUTION PIPELINE',
      topLeftTag: 'UNDER THE HOOD',
      subBadge: 'SQL EXECUTION ORDER (CRITICAL CONCEPT)',
      mainTitle: 'SQL Execution Order — What Runs When',
      highlightedWords: ['SQL Execution Order', 'What Runs When'],
      subtitle: 'Why WHERE cannot reference aliases or aggregates: the database engine executes clauses in a strict non-written order',
      darkTheme: false
    },

    // Slide 20: Combining WHERE and GROUP BY
    {
      id: 20,
      slideNumber: '20 / 30',
      type: 'code-and-concepts',
      topRightTag: '05 — FILTER THEN GROUP',
      topLeftTag: 'PIPELINE COMBINATION',
      subBadge: 'COMBINING WHERE AND GROUP BY',
      mainTitle: 'Combining WHERE and GROUP BY',
      highlightedWords: ['Combining WHERE', 'GROUP BY'],
      subtitle: 'Filter individual rows first with WHERE, then bucket remaining rows with GROUP BY, and finally aggregate',
      darkTheme: false
    },

    // Slide 21: HAVING — Filtering Aggregated Groups
    {
      id: 21,
      slideNumber: '21 / 30',
      type: 'code-and-concepts',
      topRightTag: '06 — HAVING CLAUSE',
      topLeftTag: 'POST-AGGREGATION FILTER',
      subBadge: 'FILTERING AGGREGATED GROUPS',
      mainTitle: 'HAVING — Filtering Aggregated Groups',
      highlightedWords: ['HAVING', 'Filtering Aggregated Groups'],
      subtitle: 'HAVING filters GROUPS after aggregation. It can reference aggregate results — WHERE cannot.',
      darkTheme: false
    },

    // Slide 22: WHERE vs HAVING — Know the Difference
    {
      id: 22,
      slideNumber: '22 / 30',
      type: 'comparison',
      topRightTag: '06 — COMPARISON',
      topLeftTag: 'INTERVIEW ESSENTIAL',
      subBadge: 'WHERE VS HAVING COMPARISON',
      mainTitle: 'WHERE vs HAVING — Know the Difference',
      highlightedWords: ['WHERE vs HAVING', 'Know the Difference'],
      subtitle: 'A side-by-side breakdown of the most tested SQL concept in technical interviews',
      darkTheme: false
    },

    // =========================================================
    // PART 05: PRODUCTION BUSINESS KPIS & DASHBOARDS (Slides 23–29)
    // =========================================================

    // Slide 23: KPI 1 — Total & Monthly Revenue
    {
      id: 23,
      slideNumber: '23 / 30',
      type: 'code-and-concepts',
      topRightTag: '07 — BUSINESS KPIS',
      topLeftTag: 'KPI 1 · REVENUE',
      subBadge: 'TOTAL & MONTHLY REVENUE (PAYMENTS TABLE)',
      mainTitle: 'KPI 1 — Total & Monthly Revenue',
      highlightedWords: ['KPI 1', 'Total & Monthly Revenue'],
      subtitle: 'Executive revenue summary and chronological monthly financial trend breakdown',
      darkTheme: false
    },

    // Slide 24: KPI 2 — Enrollments per Course
    {
      id: 24,
      slideNumber: '24 / 30',
      type: 'code-and-concepts',
      topRightTag: '07 — BUSINESS KPIS',
      topLeftTag: 'KPI 2 · ENROLLMENTS',
      subBadge: 'ENROLLMENTS PER COURSE & CATEGORY',
      mainTitle: 'KPI 2 — Enrollments per Course',
      highlightedWords: ['KPI 2', 'Enrollments per Course'],
      subtitle: 'Measuring academic demand, enrollment volume, and distribution by curriculum category',
      darkTheme: false
    },

    // Slide 25: KPI 3 — Attendance Count per Course
    {
      id: 25,
      slideNumber: '25 / 30',
      type: 'code-and-concepts',
      topRightTag: '07 — BUSINESS KPIS',
      topLeftTag: 'KPI 3 · ATTENDANCE',
      subBadge: 'ATTENDANCE COUNT PER COURSE & STATUS',
      mainTitle: 'KPI 3 — Attendance Count per Course',
      highlightedWords: ['KPI 3', 'Attendance Count per Course'],
      subtitle: 'Tracking student retention, present vs absent counts, and engagement across active cohorts',
      darkTheme: false
    },

    // Slide 26: KPI 4 — Lead Count by Status & Campaign
    {
      id: 26,
      slideNumber: '26 / 30',
      type: 'code-and-concepts',
      topRightTag: '07 — BUSINESS KPIS',
      topLeftTag: 'KPI 4 · LEADS',
      subBadge: 'LEAD FUNNEL BY STATUS & CAMPAIGN',
      mainTitle: 'KPI 4 — Lead Count by Status & Campaign',
      highlightedWords: ['KPI 4', 'Lead Count by Status & Campaign'],
      subtitle: 'Marketing conversion funnel analysis from initial inquiry to enrolled student',
      darkTheme: false
    },

    // Slide 27: KPI 5 — Sales Agent Performance
    {
      id: 27,
      slideNumber: '27 / 30',
      type: 'code-and-concepts',
      topRightTag: '07 — BUSINESS KPIS',
      topLeftTag: 'KPI 5 · PERFORMANCE',
      subBadge: 'SALES AGENT SCORECARD & TARGET ATTAINMENT',
      mainTitle: 'KPI 5 — Sales Agent Performance',
      highlightedWords: ['KPI 5', 'Sales Agent Performance'],
      subtitle: 'Individual and regional revenue generation measured against monthly assigned targets',
      darkTheme: false
    },

    // Slide 28: Building a Full KPI Dashboard — Executive Summary
    {
      id: 28,
      slideNumber: '28 / 30',
      type: 'code-and-concepts',
      topRightTag: '07 — BUSINESS KPIS',
      topLeftTag: 'EXECUTIVE SUITE',
      subBadge: 'FULL KPI DASHBOARD — EXECUTIVE SUMMARY',
      mainTitle: 'Building a Full KPI Dashboard — Executive Summary',
      highlightedWords: ['Building a Full KPI Dashboard', 'Executive Summary'],
      subtitle: 'One master script replaces 4 separate manual reports — this is what modern management dashboards are built from.',
      darkTheme: false
    },

    // Slide 29: Common Mistakes — Avoid These SQL Errors
    {
      id: 29,
      slideNumber: '29 / 30',
      type: 'comparison',
      topRightTag: '07 — ERROR ANALYSIS',
      topLeftTag: 'COMMON MISTAKES',
      subBadge: 'AVOID THESE SQL ERRORS',
      mainTitle: 'Common Mistakes — Avoid These SQL Errors',
      highlightedWords: ['Common Mistakes', 'Avoid These SQL Errors'],
      subtitle: 'Fixing the two most frequent aggregation errors: missing GROUP BY columns and placing aggregates in WHERE.',
      darkTheme: false
    },

    // =========================================================
    // PART 06: OUTRO HERO (Slide 30)
    // =========================================================

    // Slide 30: What's Next? Outro Hero
    {
      id: 30,
      slideNumber: '30 / 30',
      type: 'outro-hero',
      topRightTag: 'INSTANT ACADEMY',
      topLeftTag: 'SESSION 25 COMPLETE',
      subBadge: 'SQL QUERYING & AGGREGATIONS COMPLETED!',
      mainTitle: 'YOU CAN NOW:',
      highlightedWords: ['YOU CAN', 'NOW:'],
      subtitle: 'Congratulations! You have mastered SELECT Queries, Filtering with WHERE, Sorting with ORDER BY, Aggregate Functions, GROUP BY, HAVING, and Building Business KPI Dashboards.',
      nextSessionNote: '🎉 Session 25 Complete! Next Session: SQL Built-in Functions & CASE WHEN Logic',
      darkTheme: true
    }
  ]
};

export const dataAnalysisSession25AR: ChapterPresentation = {
  ...dataAnalysisSession25EN,
  chapterTitle: 'السيشن 25: استرجاع البيانات بجمل SELECT والتجميعات (SELECT Queries & Aggregations)',
  courseName: 'دبلومة تحليل البيانات • السيشن 25'
};
