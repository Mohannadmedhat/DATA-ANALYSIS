import { ChapterPresentation } from '../types';

export const dataAnalysisSession27EN: ChapterPresentation = {
  chapterId: 'session-27',
  chapterTitle: 'Session 27: SQL Joins, Subqueries & Ranking Functions',
  courseName: 'Data Analysis Diploma • Session 27',
  totalSlides: 31,
  slides: [
    // =========================================================
    // PART 00: OVERVIEW & FOUNDATIONS (Slides 1–4)
    // =========================================================

    // Slide 01: Cover Hero
    {
      id: 1,
      slideNumber: '01 / 31',
      type: 'hero',
      topRightTag: '04 — SQL SERVER MODULE',
      topLeftTag: 'PART 06: MULTI-TABLE SQL',
      subBadge: 'BEGINNER TRACK · FROM EXCEL THINKING TO RELATIONAL THINKING',
      mainTitle: 'Joins & Subqueries',
      highlightedWords: ['Joins', 'Subqueries'],
      subtitle: 'SQL Joins · Self Join · Cross Join · UNION · Subqueries · EXISTS & IN · Ranking Functions',
      darkTheme: true
    },

    // Slide 02: Session Agenda
    {
      id: 2,
      slideNumber: '02 / 31',
      type: 'concept-detail',
      topRightTag: 'AGENDA',
      topLeftTag: "TODAY'S ROADMAP",
      subBadge: 'MULTI-TABLE QUERY MASTERY',
      mainTitle: 'Session Agenda',
      highlightedWords: ['Session', 'Agenda'],
      subtitle: 'By the end of this session you will write multi-table analytical queries — the core skill behind every real dashboard.',
      darkTheme: false
    },

    // Slide 03: Quick Recap — Sessions 2 & 3
    {
      id: 3,
      slideNumber: '03 / 31',
      type: 'concept-detail',
      topRightTag: 'FOUNDATIONS',
      topLeftTag: 'BEFORE WE START',
      subBadge: 'RECAP: SINGLE TABLE TO MULTI-TABLE',
      mainTitle: 'Quick Recap — Sessions 2 & 3',
      highlightedWords: ['Quick', 'Recap'],
      subtitle: "You already know how to filter, sort, and label a single table — but real business answers require connecting related tables:",
      darkTheme: false
    },

    // Slide 04: The Big Idea: Why Do We Need Joins?
    {
      id: 4,
      slideNumber: '04 / 31',
      type: 'concept-detail',
      topRightTag: 'RELATIONAL ARCHITECTURE',
      topLeftTag: 'THE BIG IDEA',
      subBadge: 'NORMALIZATION & LOOKUPS',
      mainTitle: 'Why Do We Need Joins?',
      highlightedWords: ['Why Do We', 'Need Joins?'],
      subtitle: "In Excel you'd use VLOOKUP or INDEX/MATCH. In relational databases, normalized tables connect via shared foreign keys.",
      darkTheme: false
    },

    // =========================================================
    // PART 01: CORE SQL JOINS (Slides 5–13)
    // =========================================================

    // Slide 05: INNER JOIN — Only the Matches
    {
      id: 5,
      slideNumber: '05 / 31',
      type: 'concept-detail',
      topRightTag: 'INTERSECTION',
      topLeftTag: 'BLOCK 1 · CORE JOINS',
      subBadge: 'STRICT MATCHING ONLY',
      mainTitle: 'INNER JOIN — Only the Matches',
      highlightedWords: ['INNER JOIN', 'Only the Matches'],
      subtitle: "Returns only rows where the join condition matches in BOTH tables. Students without enrollments disappear.",
      darkTheme: false
    },

    // Slide 06: INNER JOIN — Syntax
    {
      id: 6,
      slideNumber: '06 / 31',
      type: 'concept-detail',
      topRightTag: 'T-SQL SYNTAX',
      topLeftTag: 'BLOCK 1 · CORE JOINS',
      subBadge: 'SELECT · FROM · INNER JOIN · ON',
      mainTitle: 'INNER JOIN — Syntax',
      highlightedWords: ['INNER JOIN', 'Syntax'],
      subtitle: 'The ON clause defines HOW tables connect (the key match). WHERE filters the joined result further.',
      darkTheme: false
    },

    // Slide 07: INNER JOIN — Worked Example
    {
      id: 7,
      slideNumber: '07 / 31',
      type: 'concept-detail',
      topRightTag: 'WORKED EXAMPLE',
      topLeftTag: 'BLOCK 1 · CORE JOINS',
      subBadge: '3-TABLE RELATIONAL QUERY',
      mainTitle: 'INNER JOIN — Worked Example',
      highlightedWords: ['INNER JOIN', 'Worked Example'],
      subtitle: 'Goal: list every student together with the course name they enrolled in across Students, Enrollments, and Courses.',
      darkTheme: false
    },

    // Slide 08: LEFT JOIN — Keep Everything on the Left
    {
      id: 8,
      slideNumber: '08 / 31',
      type: 'concept-detail',
      topRightTag: 'INCLUSIVE LEFT',
      topLeftTag: 'BLOCK 1 · CORE JOINS',
      subBadge: 'ALL ROWS FROM PRIMARY TABLE',
      mainTitle: 'LEFT JOIN — Keep Everything on the Left',
      highlightedWords: ['LEFT JOIN', 'Keep Everything'],
      subtitle: "Returns ALL rows from the left table, plus matches from the right table. Missing values return as NULL.",
      darkTheme: false
    },

    // Slide 09: LEFT JOIN — Finding Students With Zero Enrollments
    {
      id: 9,
      slideNumber: '09 / 31',
      type: 'concept-detail',
      topRightTag: 'ANTI-JOIN PATTERN',
      topLeftTag: 'BLOCK 1 · CORE JOINS',
      subBadge: 'DATA AUDITING & NULL FILTERING',
      mainTitle: 'LEFT JOIN — Finding Students With Zero Enrollments',
      highlightedWords: ['LEFT JOIN', 'Zero Enrollments'],
      subtitle: 'The LEFT JOIN + WHERE IS NULL pattern: finding non-purchasers, unassigned leads, and courses without students.',
      darkTheme: false
    },

    // Slide 10: RIGHT JOIN — Keep Everything on the Right
    {
      id: 10,
      slideNumber: '10 / 31',
      type: 'concept-detail',
      topRightTag: 'INCLUSIVE RIGHT',
      topLeftTag: 'BLOCK 1 · CORE JOINS',
      subBadge: 'MIRRORING LEFT JOIN',
      mainTitle: 'RIGHT JOIN — Keep Everything on the Right',
      highlightedWords: ['RIGHT JOIN', 'Keep Everything'],
      subtitle: "RIGHT JOIN mirrors LEFT JOIN — in practice, analysts mostly rewrite RIGHT JOIN as LEFT JOIN by swapping table order.",
      darkTheme: false
    },

    // Slide 11: FULL OUTER JOIN — Keep Everything, Both Sides
    {
      id: 11,
      slideNumber: '11 / 31',
      type: 'concept-detail',
      topRightTag: 'FULL AUDIT',
      topLeftTag: 'BLOCK 1 · CORE JOINS',
      subBadge: 'UNION OF BOTH DATASETS',
      mainTitle: 'FULL OUTER JOIN — Keep Everything, Both Sides',
      highlightedWords: ['FULL OUTER JOIN', 'Both Sides'],
      subtitle: 'FULL OUTER JOIN keeps every row from BOTH tables. Unmatched columns from either side return as NULL.',
      darkTheme: false
    },

    // Slide 12: Joins Comparison — Choosing the Right One
    {
      id: 12,
      slideNumber: '12 / 31',
      type: 'concept-detail',
      topRightTag: 'DECISION MATRIX',
      topLeftTag: 'BLOCK 1 · CORE JOINS',
      subBadge: 'CHEAT SHEET & SELECTION RULES',
      mainTitle: 'Joins Comparison — Choosing the Right One',
      highlightedWords: ['Joins Comparison', 'Choosing Right One'],
      subtitle: 'Rule of thumb: start with INNER JOIN. Switch to LEFT JOIN the moment you need to ask "who or what is missing?".',
      darkTheme: false
    },

    // Slide 13: Putting It Together — A Four-Table Join
    {
      id: 13,
      slideNumber: '13 / 31',
      type: 'concept-detail',
      topRightTag: 'ENTERPRISE PIPELINE',
      topLeftTag: 'BLOCK 1 · CORE JOINS',
      subBadge: 'REAL BUSINESS DATA FLOW',
      mainTitle: 'Putting It Together — A Four-Table Join',
      highlightedWords: ['Putting It Together', 'Four-Table Join'],
      subtitle: 'Track the full student lifecycle in one query: Students → Enrollments → Courses → Payments.',
      darkTheme: false
    },

    // =========================================================
    // PART 02: SELF JOIN, CROSS JOIN & UNION (Slides 14–19)
    // =========================================================

    // Slide 14: SELF JOIN — A Table Joined to Itself
    {
      id: 14,
      slideNumber: '14 / 31',
      type: 'concept-detail',
      topRightTag: 'INTRA-TABLE RELATIONS',
      topLeftTag: 'BLOCK 2 · SELF, CROSS & UNION',
      subBadge: 'SAME TABLE ALIASED TWICE',
      mainTitle: 'SELF JOIN — A Table Joined to Itself',
      highlightedWords: ['SELF JOIN', 'Joined to Itself'],
      subtitle: "SQL needs two distinct aliases (a1 and a2) to compare 'this row' against other rows in the exact same physical table.",
      darkTheme: false
    },

    // Slide 15: SELF JOIN — Worked Example
    {
      id: 15,
      slideNumber: '15 / 31',
      type: 'concept-detail',
      topRightTag: 'PEER BENCHMARKING',
      topLeftTag: 'BLOCK 2 · SELF, CROSS & UNION',
      subBadge: 'DEDUPLICATION WITH <',
      mainTitle: 'SELF JOIN — Worked Example',
      highlightedWords: ['SELF JOIN', 'Worked Example'],
      subtitle: 'Pair up sales agents working in the same region — using a1.AgentID < a2.AgentID to prevent self-pairing and duplicates.',
      darkTheme: false
    },

    // Slide 16: CROSS JOIN — Every Row × Every Row
    {
      id: 16,
      slideNumber: '16 / 31',
      type: 'concept-detail',
      topRightTag: 'CARTESIAN PRODUCT',
      topLeftTag: 'BLOCK 2 · SELF, CROSS & UNION',
      subBadge: 'M × N COMBINATIONS',
      mainTitle: 'CROSS JOIN — Every Row × Every Row',
      highlightedWords: ['CROSS JOIN', 'Every Row × Every Row'],
      subtitle: 'A CROSS JOIN pairs every row of Table A with every row of Table B without any ON condition — handle with care!',
      darkTheme: false
    },

    // Slide 17: CROSS JOIN — Building a Schedule Matrix
    {
      id: 17,
      slideNumber: '17 / 31',
      type: 'concept-detail',
      topRightTag: 'MATRIX GENERATION',
      topLeftTag: 'BLOCK 2 · SELF, CROSS & UNION',
      subBadge: 'CALENDAR & AVAILABILITY GRIDS',
      mainTitle: 'CROSS JOIN — Building a Schedule Matrix',
      highlightedWords: ['CROSS JOIN', 'Schedule Matrix'],
      subtitle: 'Generate a full course-availability grid: pairing every course with every quarter of the year instantly.',
      darkTheme: false
    },

    // Slide 18: UNION vs UNION ALL — Stacking Result Sets
    {
      id: 18,
      slideNumber: '18 / 31',
      type: 'concept-detail',
      topRightTag: 'SET OPERATIONS',
      topLeftTag: 'BLOCK 2 · SELF, CROSS & UNION',
      subBadge: 'HORIZONTAL VS VERTICAL COMBINING',
      mainTitle: 'UNION vs UNION ALL — Stacking Result Sets',
      highlightedWords: ['UNION vs UNION ALL', 'Stacking Sets'],
      subtitle: 'Joins combine tables side-by-side (more columns). UNION stacks result sets on top of each other (more rows).',
      darkTheme: false
    },

    // Slide 19: UNION — Building a Unified Contact List
    {
      id: 19,
      slideNumber: '19 / 31',
      type: 'concept-detail',
      topRightTag: 'DATA UNIFICATION',
      topLeftTag: 'BLOCK 2 · SELF, CROSS & UNION',
      subBadge: 'MARKETING & STUDENT OUTREACH',
      mainTitle: 'UNION — Building a Unified Contact List',
      highlightedWords: ['UNION', 'Unified Contact List'],
      subtitle: 'The golden rule of UNION: matching column count, order, compatible types, and column names derived from the first SELECT.',
      darkTheme: false
    },

    // =========================================================
    // PART 03: SUBQUERIES (Slides 20–25)
    // =========================================================

    // Slide 20: Subqueries — A Query Inside a Query
    {
      id: 20,
      slideNumber: '20 / 31',
      type: 'concept-detail',
      topRightTag: 'NESTED SQL',
      topLeftTag: 'BLOCK 3 · SUBQUERIES',
      subBadge: 'INNER RUNS FIRST · PASSES TO OUTER',
      mainTitle: 'Subqueries — A Query Inside a Query',
      highlightedWords: ['Subqueries', 'Query Inside a Query'],
      subtitle: 'A subquery is a nested SELECT inside WHERE, SELECT, or FROM. Two flavors: Scalar (single value) vs Multi-row (list).',
      darkTheme: false
    },

    // Slide 21: Scalar Subquery in WHERE
    {
      id: 21,
      slideNumber: '21 / 31',
      type: 'concept-detail',
      topRightTag: 'AGGREGATE THRESHOLDS',
      topLeftTag: 'BLOCK 3 · SUBQUERIES',
      subBadge: 'COMPUTED SINGLE VALUE FILTER',
      mainTitle: 'Scalar Subquery in WHERE',
      highlightedWords: ['Scalar Subquery', 'in WHERE'],
      subtitle: 'Goal: find every course priced above the average price across all courses using WHERE Price > (SELECT AVG(Price)...).',
      darkTheme: false
    },

    // Slide 22: IN + Subquery — Matching Against a List
    {
      id: 22,
      slideNumber: '22 / 31',
      type: 'concept-detail',
      topRightTag: 'LIST MEMBERSHIP',
      topLeftTag: 'BLOCK 3 · SUBQUERIES',
      subBadge: 'DYNAMIC SET COMPARISON',
      mainTitle: 'IN + Subquery — Matching Against a List',
      highlightedWords: ['IN + Subquery', 'Against a List'],
      subtitle: 'Find every student who enrolled in a course from the "Data Analytics" category — works like Excel MATCH against a range.',
      darkTheme: false
    },

    // Slide 23: EXISTS — Checking for Existence
    {
      id: 23,
      slideNumber: '23 / 31',
      type: 'concept-detail',
      topRightTag: 'BOOLEAN EVALUATION',
      topLeftTag: 'BLOCK 3 · SUBQUERIES',
      subBadge: 'HIGH-PERFORMANCE CORRELATED FILTER',
      mainTitle: 'EXISTS — Checking for Existence',
      highlightedWords: ['EXISTS', 'Checking for Existence'],
      subtitle: "EXISTS asks a simple yes/no question: 'does at least one matching row exist?' It never inspects the actual data values.",
      darkTheme: false
    },

    // Slide 24: EXISTS vs IN — Which One to Use
    {
      id: 24,
      slideNumber: '24 / 31',
      type: 'concept-detail',
      topRightTag: 'PERFORMANCE & PITFALLS',
      topLeftTag: 'BLOCK 3 · SUBQUERIES',
      subBadge: 'NULL HAZARDS & SHORT-CIRCUITING',
      mainTitle: 'EXISTS vs IN — Which One to Use',
      highlightedWords: ['EXISTS vs IN', 'Which One to Use'],
      subtitle: 'Rule of thumb: use IN for short, simple static lists. Use EXISTS for correlated checks and large datasets.',
      darkTheme: false
    },

    // Slide 25: Correlated Subquery — Above-Average Payments
    {
      id: 25,
      slideNumber: '25 / 31',
      type: 'concept-detail',
      topRightTag: 'ROW-BY-ROW CONTEXT',
      topLeftTag: 'BLOCK 3 · SUBQUERIES',
      subBadge: 'GROUP BENCHMARK PER ROW',
      mainTitle: 'Correlated Subquery — Above-Average Payments',
      highlightedWords: ['Correlated Subquery', 'Above-Average'],
      subtitle: 'Inner query references a column from the outer row (e.CourseID), re-running per row to compare against its own course average.',
      darkTheme: false
    },

    // =========================================================
    // PART 04: RANKING FUNCTIONS & PRACTICE (Slides 26–31)
    // =========================================================

    // Slide 26: Ranking Functions Overview
    {
      id: 26,
      slideNumber: '26 / 31',
      type: 'concept-detail',
      topRightTag: 'WINDOW FUNCTIONS',
      topLeftTag: 'BLOCK 4 · RANKING FUNCTIONS',
      subBadge: 'OVER() · PARTITION BY · ORDER BY',
      mainTitle: 'Ranking Functions — ROW_NUMBER, RANK, DENSE_RANK, NTILE',
      highlightedWords: ['Ranking Functions', 'ROW_NUMBER, RANK'],
      subtitle: 'Number rows within a result set — essential for leaderboards, top-N reporting, and percentile customer bucketing.',
      darkTheme: false
    },

    // Slide 27: Ranking Sales Agents by Commission, Per Region
    {
      id: 27,
      slideNumber: '27 / 31',
      type: 'concept-detail',
      topRightTag: 'WORKED EXAMPLE',
      topLeftTag: 'BLOCK 4 · RANKING FUNCTIONS',
      subBadge: 'PARTITION RESET & TIE BEHAVIOR',
      mainTitle: 'Ranking Sales Agents by Commission, Per Region',
      highlightedWords: ['Ranking Sales Agents', 'Per Region'],
      subtitle: 'Notice the two tied Cairo agents at 38,500 both receive rank 2 — and the next rank skips directly to 4.',
      darkTheme: false
    },

    // Slide 28: In-Class Lab Exercise
    {
      id: 28,
      slideNumber: '28 / 31',
      type: 'concept-detail',
      topRightTag: 'HANDS-ON LAB',
      topLeftTag: 'HANDS-ON PRACTICE',
      subBadge: '5 PROGRESSIVE CHALLENGES',
      mainTitle: 'In-Class Lab Exercise',
      highlightedWords: ['In-Class', 'Lab Exercise'],
      subtitle: 'Using AcademyDB, write queries to answer each question below. Work through them in order with interactive solution reveals.',
      darkTheme: false
    },

    // Slide 29: Key Takeaways
    {
      id: 29,
      slideNumber: '29 / 31',
      type: 'concept-detail',
      topRightTag: 'REVISION',
      topLeftTag: 'SESSION 4 COMPLETE',
      subBadge: 'CORE RELATIONAL SUMMARY',
      mainTitle: 'Key Takeaways',
      highlightedWords: ['Key', 'Takeaways'],
      subtitle: 'Four fundamental techniques connecting isolated database tables into actionable analytical insights.',
      darkTheme: true
    },

    // Slide 30: Quick Knowledge Check
    {
      id: 30,
      slideNumber: '30 / 31',
      type: 'concept-detail',
      topRightTag: 'SELF-TEST',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: '4 ESSENTIAL RETENTION QUESTIONS',
      mainTitle: 'Quick Knowledge Check',
      highlightedWords: ['Knowledge', 'Check'],
      subtitle: 'Test your understanding of join types, subquery nuances, and window ranking behavior.',
      darkTheme: false
    },

    // Slide 31: Outro Hero
    {
      id: 31,
      slideNumber: '31 / 31',
      type: 'outro',
      topRightTag: '04 — SQL SERVER MODULE',
      topLeftTag: 'SESSION COMPLETED',
      subBadge: 'NEXT UP: ADVANCED SQL & CTEs',
      mainTitle: 'Relational Mastery Achieved!',
      highlightedWords: ['Relational Mastery', 'Achieved!'],
      subtitle: 'You are now ready to write enterprise-grade multi-table queries, subqueries, and windowed analytics.',
      darkTheme: true
    }
  ]
};
