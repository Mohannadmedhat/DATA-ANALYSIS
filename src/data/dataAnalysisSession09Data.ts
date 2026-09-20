import { ChapterPresentation } from '../types';

export const dataAnalysisSession09EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-09',
  chapterTitle: 'Session 09: Python Fundamentals (Session 1)',
  courseName: 'Data Analysis Diploma • Session 09',
  duration: 'Duration: 3.5 Hours',
  totalSlides: 16,
  slides: [
    // SLIDE 01: HERO COVER SLIDE
    {
      id: 1,
      slideNumber: '01 / 16',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 09',
      topLeftTag: 'PYTHON FUNDAMENTALS • SESSION 1',
      subBadge: 'PYTHON FUNDAMENTALS · SESSION 1',
      mainTitle: 'Python Fundamentals',
      highlightedWords: ['Python', 'Fundamentals'],
      subtitle: 'Syntax · Variables · Data Types · Type Casting · Operators',
      darkTheme: true
    },

    // SLIDE 02: TABLE OF CONTENTS
    {
      id: 2,
      slideNumber: '02 / 16',
      type: 'four-cards',
      topRightTag: 'TABLE OF CONTENTS',
      topLeftTag: 'PYTHON FUNDAMENTALS',
      subBadge: 'CURRICULUM OVERVIEW',
      mainTitle: 'What We\'ll Cover Today',
      highlightedWords: ['Cover Today'],
      subtitle: 'Master the foundational building blocks of Python programming for data analytics:',
      cards: [
        {
          title: '01. Intro to Python',
          description: 'Syntax, Semantics, Code Structure & why Indentation matters.',
          iconName: 'Code2'
        },
        {
          title: '02. Variables & Data Types',
          description: 'Storing, naming rules, dynamic typing, and classifying data.',
          iconName: 'Database'
        },
        {
          title: '03. Type Casting',
          description: 'Converting data seamlessly between int, float, str, and bool.',
          iconName: 'RefreshCw'
        },
        {
          title: '04. Operators',
          description: 'Arithmetic, Comparison, and Logical operators for math and logic.',
          iconName: 'Sliders'
        }
      ],
      darkTheme: true
    },

    // SLIDE 03: SECTION 1 DIVIDER — INTRO TO PYTHON
    {
      id: 3,
      slideNumber: '03 / 16',
      type: 'section-divider',
      partNumber: 'PART 1',
      sectionTitle: 'Intro to Python',
      subtitle: 'Understanding Syntax, Semantics, and why Indentation matters',
      darkTheme: true
    },

    // SLIDE 04: SYNTAX VS SEMANTICS
    {
      id: 4,
      slideNumber: '04 / 16',
      type: 'two-cards',
      topRightTag: 'PYTHON CONCEPTS',
      topLeftTag: 'PART 1 • INTRO',
      subBadge: 'SYNTAX VS SEMANTICS',
      mainTitle: 'Syntax vs Semantics: What\'s the Difference?',
      highlightedWords: ['Syntax', 'Semantics'],
      subtitle: 'Distinguishing structural language rules from runtime logic and code meaning:'
    },

    // SLIDE 05: PYTHON INDENTATION
    {
      id: 5,
      slideNumber: '05 / 16',
      type: 'comparison',
      topRightTag: 'CODE STRUCTURE',
      topLeftTag: 'PART 1 • INTRO',
      subBadge: 'INDENTATION RULES',
      mainTitle: 'Python Indentation: Structure Without Braces',
      highlightedWords: ['Indentation'],
      subtitle: 'Unlike C++ or Java using braces {}, Python enforces 4-space indentation for clean readable code:'
    },

    // SLIDE 06: COMMENTS IN PYTHON
    {
      id: 6,
      slideNumber: '06 / 16',
      type: 'two-cards',
      topRightTag: 'DOCUMENTATION',
      topLeftTag: 'PART 1 • INTRO',
      subBadge: 'CODE READABILITY',
      mainTitle: 'Comments: Making Your Code Readable',
      highlightedWords: ['Comments'],
      subtitle: 'Explaining why code was written, docstrings, and industry best practices:'
    },

    // SLIDE 07: SECTION 2 DIVIDER — VARIABLES & DATA TYPES
    {
      id: 7,
      slideNumber: '07 / 16',
      type: 'section-divider',
      partNumber: 'PART 2',
      sectionTitle: 'Variables & Data Types',
      subtitle: 'How Python stores, names, and classifies data in memory',
      darkTheme: true
    },

    // SLIDE 08: WHAT ARE VARIABLES?
    {
      id: 8,
      slideNumber: '08 / 16',
      type: 'three-cards',
      topRightTag: 'DATA CONTAINERS',
      topLeftTag: 'PART 2 • VARIABLES',
      subBadge: 'STORAGE BOXES',
      mainTitle: 'What Are Variables? Your Data Storage Boxes',
      highlightedWords: ['Variables'],
      subtitle: 'Assigning values, multiple assignment tricks, and Python dynamic typing:'
    },

    // SLIDE 09: NAMING RULES FOR VARIABLES
    {
      id: 9,
      slideNumber: '09 / 16',
      type: 'two-cards',
      topRightTag: 'PYTHON CONVENTIONS',
      topLeftTag: 'PART 2 • VARIABLES',
      subBadge: 'PEP 8 NAMING',
      mainTitle: 'Naming Rules: How to Name Variables Correctly',
      highlightedWords: ['Naming Rules'],
      subtitle: 'Mastering snake_case, reserved keywords, UPPER_CASE constants, and good vs bad names:'
    },

    // SLIDE 10: BASIC DATA TYPES
    {
      id: 10,
      slideNumber: '10 / 16',
      type: 'four-cards',
      topRightTag: 'DATA CLASSIFICATION',
      topLeftTag: 'PART 2 • DATA TYPES',
      subBadge: 'CORE TYPES',
      mainTitle: 'Basic Data Types: int, float, str, bool',
      highlightedWords: ['int', 'float', 'str', 'bool'],
      subtitle: 'Inspecting types with type(), memory efficiency, and preventing type errors:'
    },

    // SLIDE 11: SECTION 3 DIVIDER — TYPE CASTING
    {
      id: 11,
      slideNumber: '11 / 16',
      type: 'section-divider',
      partNumber: 'PART 3',
      sectionTitle: 'Type Casting',
      subtitle: 'Converting data seamlessly from one type to another',
      darkTheme: true
    },

    // SLIDE 12: TYPE CONVERSION
    {
      id: 12,
      slideNumber: '12 / 16',
      type: 'comparison-table',
      topRightTag: 'TYPE CONVERSION',
      topLeftTag: 'PART 3 • CASTING',
      subBadge: 'EXPLICIT & IMPLICIT',
      mainTitle: 'Type Conversion: Changing Data Types on Demand',
      highlightedWords: ['Type Conversion'],
      subtitle: 'Built-in functions int(), float(), str(), bool() and auto-conversion mechanics:'
    },

    // SLIDE 13: SECTION 4 DIVIDER — OPERATORS
    {
      id: 13,
      slideNumber: '13 / 16',
      type: 'section-divider',
      partNumber: 'PART 4',
      sectionTitle: 'Operators',
      subtitle: 'The mathematical and logical tools that manipulate your data',
      darkTheme: true
    },

    // SLIDE 14: ARITHMETIC OPERATORS
    {
      id: 14,
      slideNumber: '14 / 16',
      type: 'table-matrix',
      topRightTag: 'MATH IN PYTHON',
      topLeftTag: 'PART 4 • OPERATORS',
      subBadge: 'ARITHMETIC ENGINE',
      mainTitle: 'Arithmetic Operators: Math in Python',
      highlightedWords: ['Arithmetic Operators'],
      subtitle: 'Addition, Subtraction, Multiplication, Division, Floor Division, Modulus & Exponentiation:'
    },

    // SLIDE 15: COMPARISON & LOGICAL OPERATORS
    {
      id: 15,
      slideNumber: '15 / 16',
      type: 'comparison-table',
      topRightTag: 'DECISION MAKING',
      topLeftTag: 'PART 4 • OPERATORS',
      subBadge: 'COMPARISON & LOGIC',
      mainTitle: 'Comparison & Logical Operators: Making Decisions',
      highlightedWords: ['Comparison', 'Logical Operators'],
      subtitle: 'Evaluating boolean expressions with ==, !=, >, <, and, or, not:'
    },

    // SLIDE 16: OUTRO / KEEP CODING
    {
      id: 16,
      slideNumber: '16 / 16',
      type: 'outro',
      topRightTag: 'SESSION 09 · COMPLETE',
      topLeftTag: 'PYTHON FUNDAMENTALS',
      subBadge: 'SESSION COMPLETE',
      mainTitle: 'KEEP CODING!',
      highlightedWords: ['KEEP CODING!'],
      subtitle: 'Practice makes perfect. Try writing your own variables, experiment with data types, and build expressions with operators.',
      darkTheme: true
    }
  ]
};
