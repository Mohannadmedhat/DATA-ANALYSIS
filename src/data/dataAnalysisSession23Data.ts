import { ChapterPresentation } from '../types';

export const dataAnalysisSession23EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-23',
  chapterTitle: 'Session 23: Database Fundamentals, ERD & Normalization',
  courseName: 'Data Analysis Diploma • Session 23',
  duration: 'Duration: 4 Hours',
  totalSlides: 44,
  slides: [
    // =========================================================
    // PART 01: WHAT IS A DATABASE? (PDF Slides 01-05)
    // =========================================================

    // Slide 01: Hero Cover
    {
      id: 1,
      slideNumber: '01 / 44',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 23',
      topLeftTag: 'DATABASE DESIGN MODULE • BEGINNER TO INTERMEDIATE',
      subBadge: 'ERD, MAPPING & NORMALIZATION',
      mainTitle: 'ERD, Mapping & Normalization',
      highlightedWords: ['ERD, Mapping', '& Normalization'],
      subtitle: 'Instant Academy Business Case · 3NF Applied · SQL Server for Data Analysts · Database Fundamentals & DDL',
      darkTheme: true
    },

    // Slide 02: Section 01 Divider
    {
      id: 2,
      slideNumber: '02 / 44',
      type: 'section-divider',
      topRightTag: 'PART 01',
      topLeftTag: 'DATABASE FUNDAMENTALS',
      subBadge: '01 · WHAT IS A DATABASE?',
      mainTitle: 'What is a Database?',
      highlightedWords: ['What is a', 'Database?'],
      subtitle: 'Understanding why modern enterprises need structured relational data systems',
      darkTheme: true
    },

    // Slide 03: Why Do Companies Need Databases?
    {
      id: 3,
      slideNumber: '03 / 44',
      type: 'concept-detail',
      topRightTag: '01 — DATABASE FUNDAMENTALS',
      topLeftTag: 'BUSINESS NEED',
      subBadge: 'WHY COMPANIES NEED DATABASES',
      mainTitle: 'Why Do Companies Need Databases?',
      highlightedWords: ['Why Do Companies', 'Need Databases?'],
      subtitle: 'Imagine Instant Academy has 2,000 students, 50 courses, daily payments, and sales managing 500 leads/month. Can you track this in single Excel file?',
      darkTheme: false
    },

    // Slide 04: What Exactly is a Database?
    {
      id: 4,
      slideNumber: '04 / 44',
      type: 'six-cards',
      topRightTag: '01 — DATABASE FUNDAMENTALS',
      topLeftTag: 'CORE DEFINITION',
      subBadge: 'FOUR CORE PILLARS OF A DATABASE',
      mainTitle: 'What Exactly is a Database?',
      highlightedWords: ['What Exactly is a', 'Database?'],
      subtitle: 'A database is an organized collection of structured data stored electronically, designed to be accessed, managed, queried, and updated simultaneously:',
      cards: [
        {
          title: 'Structured',
          description: 'Data is organized into tables with defined columns and strict data types.',
          iconName: 'Grid'
        },
        {
          title: 'Controlled',
          description: 'Access permissions and security rules enforce who can read or modify data.',
          iconName: 'Shield'
        },
        {
          title: 'Relational',
          description: 'Tables can be linked together using shared primary and foreign keys.',
          iconName: 'Layers'
        },
        {
          title: 'Queryable',
          description: 'SQL lets you retrieve exactly the data you need in milliseconds.',
          iconName: 'Sparkles'
        }
      ],
      darkTheme: false
    },

    // Slide 05: Database vs. Spreadsheet — A Comparison
    {
      id: 5,
      slideNumber: '05 / 44',
      type: 'concept-detail',
      topRightTag: '01 — DATABASE FUNDAMENTALS',
      topLeftTag: 'COMPARISON MATRIX',
      subBadge: 'EXCEL VS SQL SERVER DATABASE',
      mainTitle: 'Database vs. Spreadsheet — A Comparison',
      highlightedWords: ['Database vs. Spreadsheet', 'A Comparison'],
      subtitle: 'As a data analyst, you will use BOTH — Excel for reports, SQL Server for querying large production databases.',
      darkTheme: false
    },

    // =========================================================
    // PART 02: TABLES, KEYS & RELATIONSHIPS (PDF Slides 06-08)
    // =========================================================

    // Slide 06: Section 02 Divider
    {
      id: 6,
      slideNumber: '06 / 44',
      type: 'section-divider',
      topRightTag: 'PART 02',
      topLeftTag: 'RELATIONAL ARCHITECTURE',
      subBadge: '02 · TABLES, KEYS & RELATIONSHIPS',
      mainTitle: 'Tables, Keys & Relationships',
      highlightedWords: ['Tables, Keys', '& Relationships'],
      subtitle: 'The building blocks of relational databases',
      darkTheme: true
    },

    // Slide 07: Anatomy of a Database Table
    {
      id: 7,
      slideNumber: '07 / 44',
      type: 'applied-example',
      topRightTag: '02 — TABLES & KEYS',
      topLeftTag: 'TABLE STRUCTURE',
      subBadge: 'ANATOMY OF A DATABASE TABLE',
      mainTitle: 'Anatomy of a Database Table',
      highlightedWords: ['Anatomy of a', 'Database Table'],
      subtitle: 'Table (Entity) · Column (Attribute) · Row/Record (Instance) · Data Type (INT, VARCHAR, DATE, DECIMAL)',
      darkTheme: false
    },

    // Slide 08: Primary Keys and Foreign Keys
    {
      id: 8,
      slideNumber: '08 / 44',
      type: 'concept-detail',
      topRightTag: '02 — TABLES & KEYS',
      topLeftTag: 'RELATIONAL KEYS',
      subBadge: 'PRIMARY KEYS (PK) VS FOREIGN KEYS (FK)',
      mainTitle: 'Primary Keys and Foreign Keys',
      highlightedWords: ['Primary Keys', 'Foreign Keys'],
      subtitle: 'PK uniquely identifies each row in a table. FK references PK of another table to create relationships (1 -> Many).',
      darkTheme: false
    },

    // =========================================================
    // PART 03: SQL SERVER & YOUR TOOLKIT (PDF Slides 09-10)
    // =========================================================

    // Slide 09: Section 03 Divider
    {
      id: 9,
      slideNumber: '09 / 44',
      type: 'section-divider',
      topRightTag: 'PART 03',
      topLeftTag: 'DATA ANALYST TOOLKIT',
      subBadge: '03 · SQL SERVER & YOUR TOOLKIT',
      mainTitle: 'SQL Server & Your Toolkit',
      highlightedWords: ['SQL Server', '& Your Toolkit'],
      subtitle: 'Setting up your professional data analyst environment',
      darkTheme: true
    },

    // Slide 10: SQL Server and SSMS — Your Toolkit
    {
      id: 10,
      slideNumber: '10 / 44',
      type: 'concept-detail',
      topRightTag: '03 — TOOLKIT',
      topLeftTag: 'ENGINE & STUDIO',
      subBadge: 'MICROSOFT SQL SERVER VS SSMS',
      mainTitle: 'SQL Server and SSMS — Your Toolkit',
      highlightedWords: ['SQL Server', 'SSMS — Your Toolkit'],
      subtitle: 'Quick Setup: Install SQL Server Express → Install SSMS → Connect to local instance (localhost\\SQLEXPRESS)',
      darkTheme: false
    },

    // =========================================================
    // PART 04: BUSINESS CASE (PDF Slides 11-13)
    // =========================================================

    // Slide 11: Section 04 Divider
    {
      id: 11,
      slideNumber: '11 / 44',
      type: 'section-divider',
      topRightTag: 'PART 04',
      topLeftTag: 'REAL-WORLD CASE STUDY',
      subBadge: '04 · INSTANT ACADEMY BUSINESS CASE',
      mainTitle: 'Business Case',
      highlightedWords: ['Business Case', 'Instant Academy'],
      subtitle: 'Understanding the Instant Academy information system',
      darkTheme: true
    },

    // Slide 12: Instant Academy — Business Case Overview
    {
      id: 12,
      slideNumber: '12 / 44',
      type: 'six-cards',
      topRightTag: '04 — BUSINESS CASE',
      topLeftTag: 'SYSTEM OVERVIEW',
      subBadge: '8 CORE BUSINESS ENTITIES',
      mainTitle: 'Instant Academy — Business Case Overview',
      highlightedWords: ['Business Case Overview'],
      subtitle: 'Instant Academy is a private training institute. The system manages 8 core entities: Students, Courses, Campaigns, SalesAgents, Leads, Enrollments, Payments, Attendance.',
      cards: [
        { title: 'Students', description: 'Registered individuals studying at the academy', iconName: 'Target' },
        { title: 'Courses', description: 'Professional courses with fees & durations', iconName: 'Grid' },
        { title: 'Campaigns', description: 'Marketing campaigns across multiple channels', iconName: 'Sparkles' },
        { title: 'SalesAgents', description: 'Agents who convert leads into enrolled students', iconName: 'Shield' },
        { title: 'Leads', description: 'Potential students from campaigns or referrals', iconName: 'ListFilter' },
        { title: 'Enrollments', description: 'Students registered in one or more courses', iconName: 'Layers' },
        { title: 'Payments', description: 'Full or installment payments per enrollment', iconName: 'Award' },
        { title: 'Attendance', description: 'Per-session attendance status per enrollment', iconName: 'Activity' }
      ],
      darkTheme: false
    },

    // Slide 13: Business Rules — What the System Must Track
    {
      id: 13,
      slideNumber: '13 / 44',
      type: 'concept-detail',
      topRightTag: '04 — BUSINESS CASE',
      topLeftTag: 'BUSINESS CONSTRAINTS',
      subBadge: 'WHAT THE SYSTEM MUST TRACK',
      mainTitle: 'Business Rules — What the System Must Track',
      highlightedWords: ['Business Rules', 'What System Must Track'],
      subtitle: 'Key attributes and constraints for each of the 8 entities',
      darkTheme: false
    },

    // =========================================================
    // PART 05: ERD BASICS (PDF Slides 14-29)
    // =========================================================

    // Slide 14: Section 05 Divider
    {
      id: 14,
      slideNumber: '14 / 44',
      type: 'section-divider',
      topRightTag: 'PART 05',
      topLeftTag: 'DATABASE BLUEPRINT',
      subBadge: '05 · ERD BASICS',
      mainTitle: 'ERD Basics',
      highlightedWords: ['ERD Basics', 'Attributes & Relationships'],
      subtitle: 'Attributes, Relationship, Cardinality & Participation',
      darkTheme: true
    },

    // Slide 15: What is an ERD?
    {
      id: 15,
      slideNumber: '15 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'CONCEPT DEFINITION',
      subBadge: 'ENTITY-RELATIONSHIP DIAGRAM',
      mainTitle: 'What is an ERD?',
      highlightedWords: ['What is an ERD?'],
      subtitle: 'An ERD is a visual blueprint of a database showing entities, attributes, and relationships — drawn BEFORE any table is created in SQL Server.',
      darkTheme: false
    },

    // Slide 16: ERD Usages — Why We Draw One
    {
      id: 16,
      slideNumber: '16 / 44',
      type: 'six-cards',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'PRACTICAL BENEFITS',
      subBadge: '6 REASONS TO DRAW AN ERD',
      mainTitle: 'ERD Usages — Why We Draw One',
      highlightedWords: ['ERD Usages', 'Why We Draw One'],
      subtitle: 'Why database designers always draw an ERD before writing SQL code:',
      cards: [
        { title: 'Design blueprint', description: 'Plan database structure before writing a single CREATE TABLE.', iconName: 'Grid' },
        { title: 'Team communication', description: 'Gives developers, analysts, and business stakeholders one shared picture.', iconName: 'Shield' },
        { title: 'Normalization basis', description: 'Reveals keys and dependencies needed to reach 1NF, 2NF, 3NF.', iconName: 'Layers' },
        { title: 'Documentation', description: 'Records entities, attributes, and business rules for future maintenance.', iconName: 'Sparkles' },
        { title: 'Schema mapping', description: 'Maps directly to relational tables — entities to tables, keys to PK/FK.', iconName: 'Target' },
        { title: 'Reverse engineering', description: 'Used to document and understand an existing production database.', iconName: 'Activity' }
      ],
      darkTheme: false
    },

    // Slide 17: Strong (Regular) Entity
    {
      id: 17,
      slideNumber: '17 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'ENTITY TYPES',
      subBadge: 'STRONG (REGULAR) ENTITY',
      mainTitle: 'Strong (Regular) Entity',
      highlightedWords: ['Strong (Regular) Entity'],
      subtitle: 'A strong entity has its own key attribute that uniquely identifies every record. Notation: single-lined rectangle. Examples: Students, Courses, SalesAgents.',
      darkTheme: false
    },

    // Slide 18: Weak Entity
    {
      id: 18,
      slideNumber: '18 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'ENTITY TYPES',
      subBadge: 'WEAK ENTITY',
      mainTitle: 'Weak Entity',
      highlightedWords: ['Weak Entity'],
      subtitle: 'A weak entity depends on a related strong (owner) entity\'s key + partial key to be identified. Notation: double-lined rectangle. Examples: PaymentInstallments, CourseSessions.',
      darkTheme: false
    },

    // Slide 19: Simple (Atomic) Attribute
    {
      id: 19,
      slideNumber: '19 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'ATTRIBUTE TYPES',
      subBadge: 'SIMPLE (ATOMIC) ATTRIBUTE',
      mainTitle: 'Simple (Atomic) Attribute',
      highlightedWords: ['Simple (Atomic) Attribute'],
      subtitle: 'Holds a single, indivisible value. Notation: plain oval. Examples: Students.City, Courses.Price, Enrollments.EnrollStatus.',
      darkTheme: false
    },

    // Slide 20: Key Attribute
    {
      id: 20,
      slideNumber: '20 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'ATTRIBUTE TYPES',
      subBadge: 'KEY ATTRIBUTE',
      mainTitle: 'Key Attribute',
      highlightedWords: ['Key Attribute'],
      subtitle: 'Uniquely identifies every instance of an entity. Cannot be NULL or duplicate. Notation: oval with underlined text. Examples: StudentID, CourseID, AgentID.',
      darkTheme: false
    },

    // Slide 21: Composite Attribute
    {
      id: 21,
      slideNumber: '21 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'ATTRIBUTE TYPES',
      subBadge: 'COMPOSITE ATTRIBUTE',
      mainTitle: 'Composite Attribute',
      highlightedWords: ['Composite Attribute'],
      subtitle: 'Can be broken down into smaller sub-attributes. Notation: oval with smaller ovals branching. Examples: StudentName -> FirstName + LastName; Address -> Street + City.',
      darkTheme: false
    },

    // Slide 22: Multi-Valued Attribute
    {
      id: 22,
      slideNumber: '22 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'ATTRIBUTE TYPES',
      subBadge: 'MULTI-VALUED ATTRIBUTE',
      mainTitle: 'Multi-Valued Attribute',
      highlightedWords: ['Multi-Valued Attribute'],
      subtitle: 'Can hold more than one value for the same entity instance. Notation: double-lined oval. Examples: PhoneNumbers, Course Prerequisites.',
      darkTheme: false
    },

    // Slide 23: Derived Attribute
    {
      id: 23,
      slideNumber: '23 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'ATTRIBUTE TYPES',
      subBadge: 'DERIVED ATTRIBUTE',
      mainTitle: 'Derived Attribute',
      highlightedWords: ['Derived Attribute'],
      subtitle: 'Calculated on the fly from other attributes rather than stored directly. Notation: dashed-outline oval. Examples: Age (from DateOfBirth), TotalPaid.',
      darkTheme: false
    },

    // Slide 24: Types of Attributes in ERD Summary Diagram
    {
      id: 24,
      slideNumber: '24 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'VISUAL SUMMARY',
      subBadge: 'ALL 5 ATTRIBUTE TYPES ON STUDENT ENTITY',
      mainTitle: 'Types of Attributes in ERD',
      highlightedWords: ['Types of Attributes', 'in ERD'],
      subtitle: 'Visual overview: Key (StudentID), Composite (Name -> First+Last), Simple (Address), Derived (Age), Multi-Valued (Courses).',
      darkTheme: false
    },

    // Slide 25: Unary (Recursive) Relationship
    {
      id: 25,
      slideNumber: '25 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'RELATIONSHIP DEGREES',
      subBadge: 'DEGREE 1 · UNARY (RECURSIVE)',
      mainTitle: 'Unary (Recursive) Relationship',
      highlightedWords: ['Unary (Recursive)', 'Relationship'],
      subtitle: 'Connects instances of the SAME entity type to one another. Examples: SalesAgent supervises SalesAgent; Course is prerequisite of Course.',
      darkTheme: false
    },

    // Slide 26: Binary Relationship
    {
      id: 26,
      slideNumber: '26 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'RELATIONSHIP DEGREES',
      subBadge: 'DEGREE 2 · BINARY RELATIONSHIP',
      mainTitle: 'Binary Relationship',
      highlightedWords: ['Binary Relationship'],
      subtitle: 'Connects instances of TWO different entity types. Most common degree in ERDs (1:1, 1:N, N:M). Examples: Student enrolls in Course.',
      darkTheme: false
    },

    // Slide 27: Ternary Relationship
    {
      id: 27,
      slideNumber: '27 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'RELATIONSHIP DEGREES',
      subBadge: 'DEGREE 3 · TERNARY RELATIONSHIP',
      mainTitle: 'Ternary Relationship',
      highlightedWords: ['Ternary Relationship'],
      subtitle: 'Links instances of THREE entity types in a single relationship. Example: Student books a Course in a specific Session with an Instructor.',
      darkTheme: false
    },

    // Slide 28: Cardinality — How Many Instances Relate?
    {
      id: 28,
      slideNumber: '28 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'CARDINALITY RATIOS',
      subBadge: '1:1, 1:N, AND N:M CARDINALITY',
      mainTitle: 'Cardinality — How Many Instances Relate?',
      highlightedWords: ['Cardinality', 'How Many Instances Relate?'],
      subtitle: '1:1 (One-to-One), 1:N (One-to-Many), N:M (Many-to-Many requires junction table in SQL)',
      darkTheme: false
    },

    // Slide 29: Participation Constraints — Is it Mandatory?
    {
      id: 29,
      slideNumber: '29 / 44',
      type: 'concept-detail',
      topRightTag: '05 — ERD BASICS',
      topLeftTag: 'PARTICIPATION RULES',
      subBadge: 'TOTAL (MANDATORY) VS PARTIAL (OPTIONAL)',
      mainTitle: 'Participation Constraints — Is it Mandatory?',
      highlightedWords: ['Participation Constraints', 'Is it Mandatory?'],
      subtitle: 'Total Participation (Double line ══) vs Partial Participation (Single line ──) + Instant Academy Summary Table',
      darkTheme: false
    },

    // =========================================================
    // PART 06: ER DIAGRAM (PDF Slides 30-31)
    // =========================================================

    // Slide 30: Section 06 Divider
    {
      id: 30,
      slideNumber: '30 / 44',
      type: 'section-divider',
      topRightTag: 'PART 06',
      topLeftTag: 'FULL SYSTEM ERD',
      subBadge: '06 · INSTANT ACADEMY ER DIAGRAM',
      mainTitle: 'ER Diagram',
      highlightedWords: ['ER Diagram', 'Instant Academy'],
      subtitle: 'Instant Academy — Full ERD with 8 Entities & 7 Relationships',
      darkTheme: true
    },

    // Slide 31: Instant Academy — Entity Relationship Diagram
    {
      id: 31,
      slideNumber: '31 / 44',
      type: 'applied-example',
      topRightTag: '06 — ER DIAGRAM',
      topLeftTag: 'COMPLETE SYSTEM BLUEPRINT',
      subBadge: 'FULL 8-ENTITY ERD MAP',
      mainTitle: 'Instant Academy — Entity Relationship Diagram',
      highlightedWords: ['Instant Academy', 'Entity Relationship Diagram'],
      subtitle: 'Complete blueprint showing Students, Courses, Enrollments, Payments, Attendance, Leads, SalesAgents, Campaigns.',
      darkTheme: false
    },

    // =========================================================
    // PART 07: ERD -> RELATIONAL MAPPING (PDF Slides 32-34)
    // =========================================================

    // Slide 32: Section 07 Divider
    {
      id: 32,
      slideNumber: '32 / 44',
      type: 'section-divider',
      topRightTag: 'PART 07',
      topLeftTag: 'RELATIONAL MAPPING',
      subBadge: '07 · ERD TO RELATIONAL MAPPING',
      mainTitle: 'ERD → Relational Mapping',
      highlightedWords: ['ERD → Relational', 'Mapping'],
      subtitle: 'Translating the visual ER Diagram directly into SQL Relational Tables',
      darkTheme: true
    },

    // Slide 33: Mapping Rules — ERD to Relational Tables
    {
      id: 33,
      slideNumber: '33 / 44',
      type: 'six-cards',
      topRightTag: '07 — MAPPING',
      topLeftTag: 'TRANSLATION RULES',
      subBadge: '7 STANDARD MAPPING RULES',
      mainTitle: 'Mapping Rules — ERD to Relational Tables',
      highlightedWords: ['Mapping Rules', 'ERD to Relational Tables'],
      subtitle: 'Rule 1: Strong Entity -> Table | Rule 2: Weak Entity -> Table+FK | Rule 3: 1:1 -> Merge FK | Rule 4: 1:N -> FK on N-side | Rule 5: M:N -> Junction Table | Rule 6: Multi-Valued -> New Table | Rule 7: Composite -> Flat Columns',
      cards: [
        { title: 'Rule 1: Strong Entity', description: 'Becomes a table. Attributes become columns. Key attribute becomes PRIMARY KEY.', iconName: 'Grid' },
        { title: 'Rule 2: Weak Entity', description: 'Becomes a table. PK = own partial key + FK of owner entity (composite PK).', iconName: 'Layers' },
        { title: 'Rule 3: 1:1 Relationship', description: 'Place FK in either entity (prefer total participation). Add UNIQUE on FK.', iconName: 'Shield' },
        { title: 'Rule 4: 1:N Relationship', description: 'The FK goes in the entity on the MANY side, referencing PK of ONE side.', iconName: 'Target' },
        { title: 'Rule 5: M:N Relationship', description: 'Create a new junction table with FKs to both entities. PK = composite of both FKs.', iconName: 'Sparkles' },
        { title: 'Rule 6 & 7: Attributes', description: 'Multi-valued becomes new table. Composite breaks into flat atomic columns.', iconName: 'ListFilter' }
      ],
      darkTheme: false
    },

    // Slide 34: Mapping Result — Instant Academy Relational Schema
    {
      id: 34,
      slideNumber: '34 / 44',
      type: 'applied-example',
      topRightTag: '07 — MAPPING',
      topLeftTag: 'SCHEMA RESULT',
      subBadge: 'ALL 8 ENTITIES MAPPED TO SQL TABLES',
      mainTitle: 'Mapping Result — Instant Academy Relational Schema',
      highlightedWords: ['Mapping Result', 'Relational Schema'],
      subtitle: 'All 8 entities mapped to SQL tables with Primary Keys (PKs), Foreign Keys (FKs), and column data types.',
      darkTheme: false
    },

    // =========================================================
    // PART 08: NORMALIZATION (UNF TO 3NF) (PDF Slides 35-43)
    // =========================================================

    // Slide 35: Section 08 Divider
    {
      id: 35,
      slideNumber: '35 / 44',
      type: 'section-divider',
      topRightTag: 'PART 08',
      topLeftTag: 'NORMALIZATION',
      subBadge: '08 · NORMALIZATION UP TO 3NF',
      mainTitle: 'Normalization',
      highlightedWords: ['Normalization', 'Why, What, and How'],
      subtitle: 'Why, What, and How — structuring relational tables up to 3NF',
      darkTheme: true
    },

    // Slide 36: What is Normalization — and Why Do We Use It?
    {
      id: 36,
      slideNumber: '36 / 44',
      type: 'concept-detail',
      topRightTag: '08 — NORMALIZATION',
      topLeftTag: 'DATA INTEGRITY',
      subBadge: 'ANOMALIES VS BENEFITS OF NORMALIZATION',
      mainTitle: 'What is Normalization — and Why Do We Use It?',
      highlightedWords: ['What is Normalization', 'Why Do We Use It?'],
      subtitle: 'Eliminating Insert, Update, Delete anomalies and Redundancy vs Benefits: No Redundancy, Data Integrity, Smaller Storage.',
      darkTheme: false
    },

    // Slide 37: Normal Forms — The Stages of Normalization
    {
      id: 37,
      slideNumber: '37 / 44',
      type: 'concept-detail',
      topRightTag: '08 — NORMALIZATION',
      topLeftTag: 'STAGES OF NORMALIZATION',
      subBadge: '1NF, 2NF, AND 3NF DEFINITIONS',
      mainTitle: 'Normal Forms — The Stages of Normalization',
      highlightedWords: ['Normal Forms', 'Stages of Normalization'],
      subtitle: '1NF: Atomic values (no repeating groups) | 2NF: 1NF + no partial dependencies on composite PK | 3NF: 2NF + no transitive dependencies',
      darkTheme: false
    },

    // Slide 38: Step 0 — Unnormalized Data (UNF)
    {
      id: 38,
      slideNumber: '38 / 44',
      type: 'applied-example',
      topRightTag: '08 — NORMALIZATION',
      topLeftTag: 'STEP 0 · UNF',
      subBadge: 'RAW UNNORMALIZED TABLE: ACADEMYDATA',
      mainTitle: 'Step 0 — Unnormalized Data (UNF)',
      highlightedWords: ['Step 0', 'Unnormalized Data (UNF)'],
      subtitle: 'Everything crammed into one flat table — Redundancy (Sara Ahmed x3), Update Anomaly (change city in 3 rows), Delete Anomaly.',
      darkTheme: false
    },

    // Slide 39: Step 1 — First Normal Form (1NF)
    {
      id: 39,
      slideNumber: '39 / 44',
      type: 'applied-example',
      topRightTag: '08 — NORMALIZATION',
      topLeftTag: 'STEP 1 · 1NF',
      subBadge: 'ATOMIC VALUES + NO REPEATING GROUPS',
      mainTitle: 'Step 1 — First Normal Form (1NF)',
      highlightedWords: ['Step 1', 'First Normal Form (1NF)'],
      subtitle: 'Violation: Storing \'SQL Server, Power BI\' in one cell -> Fix: Atomic rows (one value per cell).',
      darkTheme: false
    },

    // Slide 40: Step 2 — Second Normal Form (2NF)
    {
      id: 40,
      slideNumber: '40 / 44',
      type: 'applied-example',
      topRightTag: '08 — NORMALIZATION',
      topLeftTag: 'STEP 2 · 2NF',
      subBadge: 'ELIMINATE PARTIAL DEPENDENCIES',
      mainTitle: 'Step 2 — Second Normal Form (2NF)',
      highlightedWords: ['Step 2', 'Second Normal Form (2NF)'],
      subtitle: 'Violation: In (StudentID, CourseID), StudentName depends only on StudentID -> Fix: Split into Students, Courses, Enrollments.',
      darkTheme: false
    },

    // Slide 41: Step 3 — Third Normal Form (3NF)
    {
      id: 41,
      slideNumber: '41 / 44',
      type: 'applied-example',
      topRightTag: '08 — NORMALIZATION',
      topLeftTag: 'STEP 3 · 3NF',
      subBadge: 'ELIMINATE TRANSITIVE DEPENDENCIES',
      mainTitle: 'Step 3 — Third Normal Form (3NF)',
      highlightedWords: ['Step 3', 'Third Normal Form (3NF)'],
      subtitle: 'Violation: LeadID -> AgentID -> AgentName (AgentName depends on AgentID) -> Fix: Separate Leads, SalesAgents, Campaigns.',
      darkTheme: false
    },

    // Slide 42: Final 3NF Schema — Instant Academy (All 8 Tables + Sample Data)
    {
      id: 42,
      slideNumber: '42 / 44',
      type: 'applied-example',
      topRightTag: '08 — NORMALIZATION',
      topLeftTag: 'FINAL 3NF RESULT',
      subBadge: 'ALL 8 TABLES + SAMPLE DATA',
      mainTitle: 'Final 3NF Schema — Instant Academy',
      highlightedWords: ['Final 3NF Schema', 'Instant Academy'],
      subtitle: 'Clean 8-table relational schema: Students, Courses, SalesAgents, Campaigns, Leads, Enrollments, Payments, Attendance.',
      darkTheme: false
    },

    // Slide 43: Session Summary — What You Learned
    {
      id: 43,
      slideNumber: '43 / 44',
      type: 'six-cards',
      topRightTag: 'MASTER SUMMARY',
      topLeftTag: 'SESSION RECAP',
      subBadge: 'SESSION 23 RECAP',
      mainTitle: 'Session Summary — What You Learned',
      highlightedWords: ['Session Summary', 'What You Learned'],
      subtitle: 'Recap of Business Case, ERD Concepts, ER Diagram, Mapping Rules, and 3NF Normalization:',
      cards: [
        { title: '1. Business Case', description: '8 entities: Students, Courses, Campaigns, SalesAgents, Leads, Enrollments, Payments, Attendance.', iconName: 'Target' },
        { title: '2. ERD Concepts', description: '5 attribute types (Simple, Key, Composite, Multi-valued, Derived) & Cardinalities (1:1, 1:N, N:M).', iconName: 'Grid' },
        { title: '3. ER Diagram', description: '8 entities drawn with proper notation, 7 relationships with diamond notation & cardinality labels.', iconName: 'Sparkles' },
        { title: '4. Mapping Rules', description: '7 standard rules applied to convert ERD into SQL tables with PKs and FKs.', iconName: 'Layers' },
        { title: '5. Normalization 3NF', description: 'UNF -> 1NF (atomic) -> 2NF (no partial) -> 3NF (no transitive) = clean 8-table schema.', iconName: 'CheckCircle' }
      ],
      darkTheme: false
    },

    // Slide 44: What's Next? Outro Hero
    {
      id: 44,
      slideNumber: '44 / 44',
      type: 'outro-hero',
      topRightTag: 'INSTANT ACADEMY',
      topLeftTag: 'SESSION 23 COMPLETE',
      subBadge: 'DATABASE FUNDAMENTALS & ERD COMPLETED!',
      mainTitle: 'YOU CAN NOW:',
      highlightedWords: ['YOU CAN', 'NOW:'],
      subtitle: 'Congratulations! You have completed Session 23 (Database Fundamentals, ERD Basics & 3NF Normalization).',
      nextSessionNote: '🎉 Session 23 Complete! Next Session: SQL Queries & DDL Statements (CREATE, ALTER, DROP & INSERT)',
      darkTheme: true
    }
  ]
};

export const dataAnalysisSession23AR: ChapterPresentation = {
  ...dataAnalysisSession23EN,
  chapterTitle: 'السيشن 23: أساسيات قواعد البيانات، مخطط الكيانات والعلاقات ERD والتطبيع (Database Fundamentals & ERD)',
  courseName: 'دبلومة تحليل البيانات • السيشن 23'
};
