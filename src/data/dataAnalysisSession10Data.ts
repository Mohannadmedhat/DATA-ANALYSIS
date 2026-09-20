import { ChapterPresentation } from '../types';

export const dataAnalysisSession10EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-10',
  chapterTitle: 'Session 10: Python Control Flow (Session 2)',
  courseName: 'Data Analysis Diploma • Session 10',
  duration: 'Duration: 3.5 Hours',
  totalSlides: 14,
  slides: [
    // SLIDE 01: HERO COVER SLIDE
    {
      id: 1,
      slideNumber: '01 / 14',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 10',
      topLeftTag: 'PYTHON FUNDAMENTALS • SESSION 2',
      subBadge: 'PYTHON CONTROL FLOW · SESSION 2',
      mainTitle: 'Python Control Flow',
      highlightedWords: ['Python', 'Control', 'Flow'],
      subtitle: 'Conditional Statements, Loops & Loop Control',
      darkTheme: true
    },

    // SLIDE 02: TABLE OF CONTENTS
    {
      id: 2,
      slideNumber: '02 / 14',
      type: 'three-cards',
      topRightTag: 'TABLE OF CONTENTS',
      topLeftTag: 'PYTHON CONTROL FLOW',
      subBadge: 'CURRICULUM OVERVIEW',
      mainTitle: "What We'll Cover Today",
      highlightedWords: ['Cover Today'],
      subtitle: 'Master decision making and iteration mechanisms in Python:',
      cards: [
        {
          title: '01. Conditional Statements',
          description: 'Learn how to make your code think and decide using if, elif, and else statements.',
          iconName: 'GitBranch'
        },
        {
          title: '02. Loops',
          description: 'Master repeating code efficiently with for loops and while loops.',
          iconName: 'RotateCw'
        },
        {
          title: '03. Loop Control',
          description: 'Fine-tune your loops with break, continue, and pass statements.',
          iconName: 'Sliders'
        }
      ],
      darkTheme: true
    },

    // SLIDE 03: SECTION 1 DIVIDER — CONDITIONAL STATEMENTS
    {
      id: 3,
      slideNumber: '03 / 14',
      type: 'section-divider',
      partNumber: '01 CHAPTER ONE',
      sectionTitle: 'Conditional Statements',
      subtitle: 'Making Your Code Think & Decide',
      darkTheme: true
    },

    // SLIDE 04: WHY DO WE NEED CONDITIONALS?
    {
      id: 4,
      slideNumber: '04 / 14',
      type: 'conditionals-why',
      topRightTag: 'DECISION LOGIC',
      topLeftTag: 'PART 1 • CONDITIONALS',
      subBadge: 'WHY CONDITIONALS?',
      mainTitle: 'Why Do We Need Conditionals?',
      highlightedWords: ['Conditionals'],
      subtitle: 'Making code intelligent, dynamic, and responsive to different situations:',
      darkTheme: true
    },

    // SLIDE 05: THE IF STATEMENT — YOUR FIRST DECISION
    {
      id: 5,
      slideNumber: '05 / 14',
      type: 'if-statement',
      topRightTag: 'SYNTAX & FLOW',
      topLeftTag: 'PART 1 • CONDITIONALS',
      subBadge: 'IF STATEMENT',
      mainTitle: 'The if Statement — Your First Decision',
      highlightedWords: ['if Statement'],
      subtitle: 'Syntax rules, condition evaluation, and mandatory 4-space indentation:',
      darkTheme: true
    },

    // SLIDE 06: ELSE & ELIF — HANDLING MULTIPLE PATHS
    {
      id: 6,
      slideNumber: '06 / 14',
      type: 'else-elif',
      topRightTag: 'MULTIPLE PATHS',
      topLeftTag: 'PART 1 • CONDITIONALS',
      subBadge: 'ELSE & ELIF',
      mainTitle: 'else & elif — Handling Multiple Paths',
      highlightedWords: ['else', 'elif'],
      subtitle: 'Chaining conditions and providing catch-all fallback execution:',
      darkTheme: true
    },

    // SLIDE 07: NESTED CONDITIONALS & COMMON MISTAKES
    {
      id: 7,
      slideNumber: '07 / 14',
      type: 'nested-conditionals',
      topRightTag: 'BEST PRACTICES',
      topLeftTag: 'PART 1 • CONDITIONALS',
      subBadge: 'NESTED IF & ERRORS',
      mainTitle: 'Nested Conditionals & Common Mistakes',
      highlightedWords: ['Nested', 'Common Mistakes'],
      subtitle: 'Multi-level logic hierarchy, syntax traps, and debugging strategies:',
      darkTheme: true
    },

    // SLIDE 08: SECTION 2 DIVIDER — LOOPS
    {
      id: 8,
      slideNumber: '08 / 14',
      type: 'section-divider',
      partNumber: '02 CHAPTER TWO',
      sectionTitle: 'Loops',
      subtitle: 'Repeating Code Efficiently',
      darkTheme: true
    },

    // SLIDE 09: FOR LOOP — ITERATE WITH PRECISION
    {
      id: 9,
      slideNumber: '09 / 14',
      type: 'for-loop',
      topRightTag: 'ITERATION ENGINE',
      topLeftTag: 'PART 2 • LOOPS',
      subBadge: 'FOR LOOP & RANGE',
      mainTitle: 'for Loop — Iterate with Precision',
      highlightedWords: ['for Loop'],
      subtitle: 'Sequence iteration, range() parameters, and string processing:',
      darkTheme: true
    },

    // SLIDE 10: WHILE LOOP — REPEAT UNTIL READY
    {
      id: 10,
      slideNumber: '10 / 14',
      type: 'while-loop',
      topRightTag: 'CONDITION LOOPS',
      topLeftTag: 'PART 2 • LOOPS',
      subBadge: 'WHILE LOOP',
      mainTitle: 'while Loop — Repeat Until Ready',
      highlightedWords: ['while Loop'],
      subtitle: 'Condition-driven loops, countdown timers, input validation, and game loops:',
      darkTheme: true
    },

    // SLIDE 11: BREAK, CONTINUE, PASS — FINE CONTROL
    {
      id: 11,
      slideNumber: '11 / 14',
      type: 'loop-control',
      topRightTag: 'LOOP CONTROL',
      topLeftTag: 'PART 3 • CONTROL',
      subBadge: 'BREAK, CONTINUE & PASS',
      mainTitle: 'break, continue, pass — Fine Control',
      highlightedWords: ['break', 'continue', 'pass'],
      subtitle: 'Exiting early, skipping iterations, and placeholder statements in loops:',
      darkTheme: true
    },

    // SLIDE 12: NESTED LOOPS & COMMON ERRORS
    {
      id: 12,
      slideNumber: '12 / 14',
      type: 'nested-loops',
      topRightTag: 'NESTED LOOPS',
      topLeftTag: 'PART 2 • LOOPS',
      subBadge: 'NESTED LOOPS & PITFALLS',
      mainTitle: 'Nested Loops & Common Errors',
      highlightedWords: ['Nested Loops'],
      subtitle: 'Outer and inner loop iterations, matrix traversal, and complexity:',
      darkTheme: true
    },

    // SLIDE 13: SUMMARY — YOUR CONTROL FLOW TOOLKIT
    {
      id: 13,
      slideNumber: '13 / 14',
      type: 'summary-toolkit',
      topRightTag: 'SUMMARY',
      topLeftTag: 'CONTROL FLOW',
      subBadge: 'TOOLKIT SUMMARY',
      mainTitle: 'Your Control Flow Toolkit',
      highlightedWords: ['Control Flow Toolkit'],
      subtitle: 'Complete reference guide to Python decision logic and loop control:',
      darkTheme: true
    },

    // SLIDE 14: OUTRO / COMPLETION SLIDE
    {
      id: 14,
      slideNumber: '14 / 14',
      type: 'outro',
      mainTitle: '"The only way to learn programming is by writing programs."',
      subtitle: "Now go build something amazing with what you've learned!",
      subBadge: 'PYTHON SESSION 2 — COMPLETE',
      darkTheme: true
    }
  ]
};
