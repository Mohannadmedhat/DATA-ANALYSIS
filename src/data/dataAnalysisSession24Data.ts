import { ChapterPresentation } from '../types';

export const dataAnalysisSession24EN: ChapterPresentation = {
  chapterId: 'session-24',
  chapterTitle: 'Session 24: SQL Server DDL & DML Fundamentals',
  courseName: 'Data Analysis Diploma • Session 24',
  totalSlides: 28,
  slides: [
    // =========================================================
    // PART 01: DDL & SCHEMA DESIGN (PDF 1: Slides 1-17)
    // =========================================================

    // Slide 01: Cover Hero
    {
      id: 1,
      slideNumber: '01 / 28',
      type: 'hero',
      topRightTag: '04 — SQL SERVER MODULE',
      topLeftTag: 'PART 01: DDL & SCHEMA DESIGN',
      subBadge: 'DATABASE FUNDAMENTALS & DDL BASICS',
      mainTitle: 'Database Fundamentals & DDL Basics',
      highlightedWords: ['Database Fundamentals', 'DDL Basics'],
      subtitle: 'Tables & Schema · Primary Keys · Foreign Keys · Data Types & Constraints for Data Analysts',
      darkTheme: true
    },

    // Slide 02: Section 01 Divider
    {
      id: 2,
      slideNumber: '02 / 28',
      type: 'section-divider',
      topRightTag: 'PART 01',
      topLeftTag: 'DATA DEFINITION LANGUAGE',
      subBadge: '01 · DDL — DEFINING YOUR DATABASE',
      mainTitle: 'DDL — Defining Your Database',
      highlightedWords: ['DDL', 'Defining Your Database'],
      subtitle: 'CREATE, ALTER, and DROP in action — building and altering database structures',
      darkTheme: true
    },

    // Slide 03: What is DDL? — Data Definition Language
    {
      id: 3,
      slideNumber: '03 / 28',
      type: 'concept-detail',
      topRightTag: '01 — DDL BASICS',
      topLeftTag: 'SUB-LANGUAGES OF SQL',
      subBadge: '4 MAIN SUB-LANGUAGES OF SQL',
      mainTitle: 'What is DDL? — Data Definition Language',
      highlightedWords: ['What is DDL?', 'Data Definition Language'],
      subtitle: 'SQL is divided into 4 main sub-languages: DDL (Structure), DML (Data), DQL (Queries), DCL (Permissions). Today we focus on DDL.',
      darkTheme: false
    },

    // Slide 04: DDL in Action — CREATE DATABASE & TABLE
    {
      id: 4,
      slideNumber: '04 / 28',
      type: 'code-and-concepts',
      topRightTag: '01 — DDL BASICS',
      topLeftTag: 'SQL STATEMENTS',
      subBadge: 'STEP 1 & 2 · CREATE DATABASE & TABLE',
      mainTitle: 'DDL in Action — CREATE DATABASE & TABLE',
      highlightedWords: ['DDL in Action', 'CREATE DATABASE & TABLE'],
      subtitle: 'Building a new database and creating the Students table with identity primary key, constraints, and default values.',
      darkTheme: false
    },

    // Slide 05: DDL — CREATE TABLE with Foreign Key
    {
      id: 5,
      slideNumber: '05 / 28',
      type: 'code-and-concepts',
      topRightTag: '01 — DDL BASICS',
      topLeftTag: 'REFERENTIAL INTEGRITY',
      subBadge: 'CREATING ENROLLMENTS TABLE WITH FK',
      mainTitle: 'DDL — CREATE TABLE with Foreign Key',
      highlightedWords: ['CREATE TABLE', 'Foreign Key'],
      subtitle: 'Creating the Enrollments table to link Students and Courses using Foreign Key constraints.',
      darkTheme: false
    },

    // Slide 06: DDL — ALTER TABLE
    {
      id: 6,
      slideNumber: '06 / 28',
      type: 'code-and-concepts',
      topRightTag: '01 — DDL BASICS',
      topLeftTag: 'MODIFYING STRUCTURE',
      subBadge: 'ADD, ALTER COLUMN & DROP COLUMN',
      mainTitle: 'DDL — ALTER TABLE',
      highlightedWords: ['ALTER TABLE', 'Modifying Schema'],
      subtitle: 'ALTER lets you modify a table structure after creation — without losing existing data.',
      darkTheme: false
    },

    // Slide 07: DDL — DROP and TRUNCATE
    {
      id: 7,
      slideNumber: '07 / 28',
      type: 'concept-detail',
      topRightTag: '01 — DDL BASICS',
      topLeftTag: 'DELETING OBJECTS & DATA',
      subBadge: 'DROP TABLE VS TRUNCATE TABLE',
      mainTitle: 'DDL — DROP and TRUNCATE',
      highlightedWords: ['DROP', 'TRUNCATE'],
      subtitle: 'DROP deletes table structure AND data forever · TRUNCATE removes all rows but keeps structure.',
      darkTheme: false
    },

    // Slide 08: Section 02 Divider
    {
      id: 8,
      slideNumber: '08 / 28',
      type: 'section-divider',
      topRightTag: 'PART 02',
      topLeftTag: 'TYPES & CONSTRAINTS',
      subBadge: '02 · DATA TYPES & CONSTRAINTS IN SQL SERVER',
      mainTitle: 'Data Types & Constraints in SQL Server',
      highlightedWords: ['Data Types', 'Constraints in SQL Server'],
      subtitle: 'Choosing the right type and enforcing business rules for every column',
      darkTheme: true
    },

    // Slide 09: SQL Server Data Types for Analysts
    {
      id: 9,
      slideNumber: '09 / 28',
      type: 'concept-detail',
      topRightTag: '02 — TYPES & CONSTRAINTS',
      topLeftTag: 'COLUMN DATA TYPES',
      subBadge: 'NUMERIC, TEXT & DATE TYPES',
      mainTitle: 'SQL Server Data Types for Analysts',
      highlightedWords: ['SQL Server Data Types', 'for Analysts'],
      subtitle: 'Numeric (INT, DECIMAL, FLOAT, BIT), Text (VARCHAR, NVARCHAR, CHAR), Date & Time (DATE, DATETIME, GETDATE()).',
      darkTheme: false
    },

    // Slide 10: SQL Server Constraints for Analysts
    {
      id: 10,
      slideNumber: '10 / 28',
      type: 'concept-detail',
      topRightTag: '02 — TYPES & CONSTRAINTS',
      topLeftTag: 'BUSINESS RULES & INTEGRITY',
      subBadge: 'PRIMARY KEY, UNIQUE, CHECK & DEFAULT',
      mainTitle: 'SQL Server Constraints for Analysts',
      highlightedWords: ['SQL Server Constraints', 'for Analysts'],
      subtitle: 'Integrity Rules (PK, FK, UNIQUE, NOT NULL), Value Rules (CHECK, DEFAULT), and DDL Syntax.',
      darkTheme: false
    },

    // Slide 11: Section 03 Divider
    {
      id: 11,
      slideNumber: '11 / 28',
      type: 'section-divider',
      topRightTag: 'PART 03',
      topLeftTag: 'HANDS-ON DDL',
      subBadge: '03 · HANDS-ON DDL EXERCISES',
      mainTitle: 'Hands-On Exercises',
      highlightedWords: ['Hands-On Exercises', 'Practice Makes Permanent'],
      subtitle: "Practice makes permanent — let's write some DDL queries together!",
      darkTheme: true
    },

    // Slide 12: Exercise 1 — Create the Courses Table
    {
      id: 12,
      slideNumber: '12 / 28',
      type: 'applied-example',
      topRightTag: '03 — DDL EXERCISES',
      topLeftTag: 'EXERCISE 1 · TASK',
      subBadge: 'CREATE THE COURSES TABLE',
      mainTitle: 'Exercise 1 — Create the Courses Table',
      highlightedWords: ['Exercise 1', 'Create the Courses Table'],
      subtitle: 'Write the CREATE TABLE statement for the Courses table with all listed columns, data types, and constraints.',
      darkTheme: false
    },

    // Slide 13: Exercise 1 — Solution
    {
      id: 13,
      slideNumber: '13 / 28',
      type: 'code-and-concepts',
      topRightTag: '03 — DDL EXERCISES',
      topLeftTag: 'EXERCISE 1 · SOLUTION',
      subBadge: 'SQL CODE & VERIFICATION',
      mainTitle: 'Exercise 1 — Solution',
      highlightedWords: ['Exercise 1', 'Solution'],
      subtitle: 'Complete SQL script to CREATE Courses table and verify structure using INFORMATION_SCHEMA.COLUMNS.',
      darkTheme: false
    },

    // Slide 14: Exercise 2 — ALTER & Schema Exploration
    {
      id: 14,
      slideNumber: '14 / 28',
      type: 'code-and-concepts',
      topRightTag: '03 — DDL EXERCISES',
      topLeftTag: 'EXERCISE 2 · ALTER & EXPLORE',
      subBadge: 'ALTER TABLE & SCHEMA EXPLORATION',
      mainTitle: 'Exercise 2 — ALTER & Schema Exploration',
      highlightedWords: ['Exercise 2', 'ALTER & Schema Exploration'],
      subtitle: '2A: Add NationalID to Students | 2B: Modify CourseName length | 2C: Query ALL tables in database.',
      darkTheme: false
    },

    // Slide 15: Section 04 Divider
    {
      id: 15,
      slideNumber: '15 / 28',
      type: 'section-divider',
      topRightTag: 'PART 04',
      topLeftTag: 'HOMEWORK ASSIGNMENT',
      subBadge: '04 · HOMEWORK ASSIGNMENT',
      mainTitle: 'Homework Assignment',
      highlightedWords: ['Homework Assignment', 'Academy Database Build'],
      subtitle: 'Reinforce your learning before Session 2 — build the full Instant Academy Database',
      darkTheme: true
    },

    // Slide 16: Session 1 Homework — Academy Database Build
    {
      id: 16,
      slideNumber: '16 / 28',
      type: 'applied-example',
      topRightTag: '04 — HOMEWORK',
      topLeftTag: '50 TOTAL POINTS',
      subBadge: 'FULL ACADEMY DATABASE BUILD',
      mainTitle: 'Session 1 Homework — Academy Database Build',
      highlightedWords: ['Session 1 Homework', 'Academy Database Build'],
      subtitle: 'Task 1: Create Full Database (20 pts) | Task 2: Modify Schema (15 pts) | Task 3: Egyptian Business Reflection (15 pts)',
      darkTheme: false
    },

    // Slide 17: Session 1 Summary & What's Next
    {
      id: 17,
      slideNumber: '17 / 28',
      type: 'concept-detail',
      topRightTag: '04 — SUMMARY',
      topLeftTag: 'PART 1 RECAP',
      subBadge: 'WHAT YOU LEARNED TODAY & SESSION 2 PREVIEW',
      mainTitle: 'Session 1 Summary & What\'s Next',
      highlightedWords: ['Session 1 Summary', 'What\'s Next'],
      subtitle: 'What You Learned Today (DDL, Schema, PK/FK) vs Session 2 Preview (DML: INSERT, UPDATE, DELETE & SELECT).',
      darkTheme: false
    },

    // =========================================================
    // PART 02: DML BASICS & MANIPULATION (PDF 2: Slides 18-28)
    // =========================================================

    // Slide 18: Section 05 Divider (Part 02 Transition)
    {
      id: 18,
      slideNumber: '18 / 28',
      type: 'section-divider',
      topRightTag: 'PART 02',
      topLeftTag: 'DATA MANIPULATION',
      subBadge: '05 · DML BASICS AND BASIC SELECT QUERIES',
      mainTitle: 'DML Basics & Basic SELECT Queries',
      highlightedWords: ['DML Basics', 'Basic SELECT Queries'],
      subtitle: 'INSERT · UPDATE · DELETE · SELECT — Writing & Reading Data Like a Pro in SQL Server',
      darkTheme: true
    },

    // Slide 19: Session Overview — DML & SELECT
    {
      id: 19,
      slideNumber: '19 / 28',
      type: 'concept-detail',
      topRightTag: '05 — DML OVERVIEW',
      topLeftTag: 'SESSION AGENDA',
      subBadge: '4 CORE PARTS OF DML & QUERIES',
      mainTitle: 'Session Overview — DML & SELECT',
      highlightedWords: ['Session Overview', 'DML & SELECT'],
      subtitle: 'Part 1: DML Foundations (45m) | Part 2: INSERT & UPDATE (60m) | Part 3: DELETE & SELECT (60m) | Q&A',
      darkTheme: false
    },

    // Slide 20: Quick Recap: The Academy Dataset
    {
      id: 20,
      slideNumber: '20 / 28',
      type: 'concept-detail',
      topRightTag: '05 — DML OVERVIEW',
      topLeftTag: 'BUSINESS DATASET RECAP',
      subBadge: 'THE 8 ACADEMY TABLES WE WILL MANIPULATE',
      mainTitle: 'Quick Recap: The Academy Dataset',
      highlightedWords: ['Quick Recap:', 'The Academy Dataset'],
      subtitle: 'Our business case — Students, Courses, Enrollments, Payments, Leads, Campaigns, Attendance, SalesAgents tables.',
      darkTheme: false
    },

    // Slide 21: What is DML? — Data Manipulation Language
    {
      id: 21,
      slideNumber: '21 / 28',
      type: 'concept-detail',
      topRightTag: '05 — DML OVERVIEW',
      topLeftTag: 'DDL VS DML',
      subBadge: 'DATA MANIPULATION VS DEFINITION',
      mainTitle: 'What is DML? — Data Manipulation Language',
      highlightedWords: ['What is DML?', 'Data Manipulation Language'],
      subtitle: 'DDL affects schema (structure) · DML affects rows (content: INSERT, UPDATE, DELETE). Can be rolled back in transactions.',
      darkTheme: false
    },

    // Slide 22: INSERT Statement — Syntax
    {
      id: 22,
      slideNumber: '22 / 28',
      type: 'code-and-concepts',
      topRightTag: '06 — INSERT DATA',
      topLeftTag: 'ADDING NEW ROWS',
      subBadge: 'SINGLE & MULTIPLE ROW INSERTS',
      mainTitle: 'INSERT Statement — Syntax',
      highlightedWords: ['INSERT Statement', 'Syntax'],
      subtitle: 'Adding new rows of data into a table using single and multiple row VALUES clauses.',
      darkTheme: false
    },

    // Slide 23: INSERT in Action — Academy Examples
    {
      id: 23,
      slideNumber: '23 / 28',
      type: 'code-and-concepts',
      topRightTag: '06 — INSERT DATA',
      topLeftTag: 'REAL-WORLD QUERIES',
      subBadge: 'COURSES, ENROLLMENTS & PAYMENTS',
      mainTitle: 'INSERT in Action — Academy Examples',
      highlightedWords: ['INSERT in Action', 'Academy Examples'],
      subtitle: 'Populating academy tables + Common Pitfalls (match column count, single quotes for text/dates, never insert IDENTITY).',
      darkTheme: false
    },

    // Slide 24: UPDATE Statement
    {
      id: 24,
      slideNumber: '24 / 28',
      type: 'code-and-concepts',
      topRightTag: '07 — UPDATE & DELETE',
      topLeftTag: 'MODIFYING ROWS',
      subBadge: 'MODIFYING EXISTING DATA WITH WHERE',
      mainTitle: 'UPDATE Statement',
      highlightedWords: ['UPDATE Statement', 'Always Use WHERE!'],
      subtitle: 'Modifying student email, enrollment status, or agent target. 🚨 DANGER: UPDATE without WHERE updates ALL rows!',
      darkTheme: false
    },

    // Slide 25: DELETE Statement
    {
      id: 25,
      slideNumber: '25 / 28',
      type: 'code-and-concepts',
      topRightTag: '07 — UPDATE & DELETE',
      topLeftTag: 'REMOVING ROWS',
      subBadge: 'DELETE VS TRUNCATE COMPARISON',
      mainTitle: 'DELETE Statement',
      highlightedWords: ['DELETE Statement', 'Extreme Caution'],
      subtitle: 'Removing rows with extreme caution · DELETE vs TRUNCATE (condition filtering, transaction rollback, IDENTITY reset).',
      darkTheme: false
    },

    // Slide 26: DML Safety — Transactions
    {
      id: 26,
      slideNumber: '26 / 28',
      type: 'code-and-concepts',
      topRightTag: '07 — UPDATE & DELETE',
      topLeftTag: 'SAFETY & ROLLBACK',
      subBadge: 'BEGIN TRAN, COMMIT & ROLLBACK',
      mainTitle: 'DML Safety — Transactions',
      highlightedWords: ['DML Safety', 'Transactions'],
      subtitle: 'How to undo a mistake before it becomes permanent: BEGIN TRAN ➔ Execute DML ➔ Inspect ➔ COMMIT or ROLLBACK TRAN.',
      darkTheme: false
    },

    // Slide 27: Exercise 1 — DML Practice
    {
      id: 27,
      slideNumber: '27 / 28',
      type: 'applied-example',
      topRightTag: '08 — PRACTICE',
      topLeftTag: 'PRACTICE EXERCISES',
      subBadge: '70 TOTAL PRACTICE POINTS',
      mainTitle: 'Exercise 1 — DML Practice',
      highlightedWords: ['Exercise 1', 'DML Practice'],
      subtitle: 'Apply INSERT (3 students, 1 course), UPDATE (EnrollStatus), DELETE (Junk leads with transaction rollback), & BONUS calculation.',
      darkTheme: false
    },

    // Slide 28: Session 24 Complete! — Outro Hero
    {
      id: 28,
      slideNumber: '28 / 28',
      type: 'outro-hero',
      topRightTag: 'INSTANT ACADEMY',
      topLeftTag: 'SESSION 24 COMPLETE',
      subBadge: 'SQL SERVER DDL & DML MASTERED!',
      mainTitle: 'GREAT WORK TODAY!',
      highlightedWords: ['GREAT WORK', 'TODAY!'],
      subtitle: 'Congratulations! You are now writing real production SQL queries in SQL Server!',
      nextSessionNote: '🎉 Session 24 Complete! Next Session: SQL SELECT Queries, Filtering (WHERE, BETWEEN, IN, LIKE), ORDER BY & Aggregations',
      darkTheme: true
    }
  ]
};

export const dataAnalysisSession24AR: ChapterPresentation = {
  ...dataAnalysisSession24EN,
  chapterTitle: 'السيشن 24: أساسيات DDL و DML في SQL Server (SQL Server DDL & DML Fundamentals)',
  courseName: 'دبلومة تحليل البيانات • السيشن 24'
};
