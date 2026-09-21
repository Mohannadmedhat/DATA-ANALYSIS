import { ChapterPresentation } from '../types';

export const dataAnalysisSession12EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-12',
  chapterTitle: 'Session 12: Python Functions, Loops & Strings',
  courseName: 'Data Analysis Diploma • Session 12',
  duration: 'Duration: 3.5 Hours',
  totalSlides: 20,
  slides: [
    // SLIDE 01: HERO COVER SLIDE (Dark Theme)
    {
      id: 1,
      slideNumber: '01 / 20',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 12',
      topLeftTag: 'PYTHON FUNDAMENTALS • FINAL SESSION',
      subBadge: 'FUNCTIONS · PARAMETERS · SCOPE · LOOPS · STRINGS',
      mainTitle: 'PYTHON FUNCTIONS, LOOPS & STRINGS',
      highlightedWords: ['PYTHON', 'FUNCTIONS,', 'LOOPS', '&', 'STRINGS'],
      subtitle: 'Master Reusable Code, Variable Scope, Higher-Order Functions, Nested Loops & String Processing',
      darkTheme: true
    },

    // SLIDE 02: TABLE OF CONTENTS / CURRICULUM OVERVIEW (Light Theme)
    {
      id: 2,
      slideNumber: '02 / 20',
      type: 'four-cards',
      topRightTag: 'CURRICULUM OVERVIEW',
      topLeftTag: 'SESSION 12',
      subBadge: 'WHAT WE WILL COVER',
      mainTitle: 'Master Functions, Scope & Text Processing',
      highlightedWords: ['Functions,', 'Scope', '&', 'Text', 'Processing'],
      subtitle: 'Everything you need to write modular, clean, and production-ready Python code:',
      topics: [
        {
          num: '01',
          title: 'FUNCTIONS & PARAMETERS',
          desc: 'DRY principle, def syntax, positional vs keyword args, default values, *args & **kwargs.',
          color: 'blue'
        },
        {
          num: '02',
          title: 'RETURN VALUES & SCOPE',
          desc: 'Returning single or multiple values as tuples, early exits, and the LEGB variable scope rule.',
          color: 'orange'
        },
        {
          num: '03',
          title: 'LAMBDA & FUNCTIONAL TOOLS',
          desc: 'Anonymous one-line functions, map(), filter(), and custom sorting with key functions.',
          color: 'purple'
        },
        {
          num: '04',
          title: 'LOOPS & STRING METHODS',
          desc: 'Nested loop matrix traversal, string methods, slicing [::-1], and real-world capstone mini-projects.',
          color: 'green'
        }
      ],
      darkTheme: false
    },

    // SLIDE 03: SECTION 01 DIVIDER - FUNCTIONS & PARAMETERS (Dark Theme)
    {
      id: 3,
      slideNumber: '03 / 20',
      type: 'section-divider',
      topRightTag: 'PART 01',
      topLeftTag: 'SECTION DIVIDER',
      subBadge: '01 · FUNCTIONS & PARAMETERS',
      mainTitle: 'FUNCTIONS & PARAMETERS',
      highlightedWords: ['FUNCTIONS', '&', 'PARAMETERS'],
      subtitle: 'Building Blocks of Clean, Reusable Code',
      description: 'Learn to encapsulate logic into modular blocks and make functions flexible with parameter options.',
      darkTheme: true
    },

    // SLIDE 04: WHAT ARE FUNCTIONS & WHY USE THEM? (Light Theme)
    {
      id: 4,
      slideNumber: '04 / 20',
      type: 'concept-detail',
      topRightTag: '01 — FUNCTIONS',
      topLeftTag: 'CORE CONCEPT',
      subBadge: 'UNDERSTANDING FUNCTIONS',
      mainTitle: 'What Are Functions & Why Use Them?',
      highlightedWords: ['What Are Functions'],
      definition: 'A function is a named, reusable block of code that performs a specific task. It accepts inputs, processes them, and returns an output.',
      why: 'Organize complex code into manageable pieces, reuse code without copy-pasting, and adhere to the DRY Principle (Don\'t Repeat Yourself).\n\nAnalogy: A cooking recipe — write it once, execute it whenever you need that dish!',
      how: 'Define with the def keyword followed by function name and parentheses (). Call by name with arguments.',
      characteristics: ['Reusable', 'Modular', 'Accepts Inputs', 'Returns Output', 'Encapsulated'],
      codeSnippet: `# Defining a simple function\ndef greet(name):\n    return f"Hello, {name}!"\n\n# Calling the function\nmessage = greet("Alice")\nprint(message)  # Output: Hello, Alice!\n\n# Reuse anytime\nprint(greet("Bob"))    # Output: Hello, Bob!`,
      darkTheme: false
    },

    // SLIDE 05: POSITIONAL VS KEYWORD ARGUMENTS (Light Theme)
    {
      id: 5,
      slideNumber: '05 / 20',
      type: 'positional-keyword',
      topRightTag: '01 — FUNCTIONS',
      topLeftTag: 'ARGUMENTS',
      subBadge: 'POSITIONAL VS KEYWORD',
      mainTitle: 'Positional and Keyword Arguments',
      highlightedWords: ['Positional', 'Keyword'],
      subtitle: 'Controlling how arguments are passed into function parameters:',
      darkTheme: false
    },

    // SLIDE 06: DEFAULT & VARIABLE-LENGTH ARGUMENTS (Light Theme)
    {
      id: 6,
      slideNumber: '06 / 20',
      type: 'default-args',
      topRightTag: '01 — FUNCTIONS',
      topLeftTag: 'FLEXIBLE ARGS',
      subBadge: 'DEFAULT VALUES, *ARGS & **KWARGS',
      mainTitle: 'Default & Variable-Length Arguments',
      highlightedWords: ['Default', '*args', '**kwargs'],
      subtitle: 'Handling preset parameters and an arbitrary number of positional or keyword inputs:',
      darkTheme: false
    },

    // SLIDE 07: SECTION 02 DIVIDER - RETURN VALUES & SCOPE (Dark Theme)
    {
      id: 7,
      slideNumber: '07 / 20',
      type: 'section-divider',
      topRightTag: 'PART 02',
      topLeftTag: 'SECTION DIVIDER',
      subBadge: '02 · RETURN VALUES & SCOPE',
      mainTitle: 'RETURN VALUES & VARIABLE SCOPE',
      highlightedWords: ['RETURN', 'VALUES', '&', 'SCOPE'],
      subtitle: 'Getting Data Back & Controlling Variable Access',
      description: 'Master return statements, tuple unpacking from functions, and the LEGB variable lookup hierarchy.',
      darkTheme: true
    },

    // SLIDE 08: THE RETURN STATEMENT (Light Theme)
    {
      id: 8,
      slideNumber: '08 / 20',
      type: 'concept-detail',
      topRightTag: '02 — SCOPE & RETURN',
      topLeftTag: 'RETURN LOGIC',
      subBadge: 'THE RETURN STATEMENT',
      mainTitle: 'The Return Statement — Sending Data Back',
      highlightedWords: ['Return Statement'],
      definition: 'The return statement exits a function immediately and sends a result back to the caller.',
      why: 'Without return, a function returns None by default. return lets you calculate values inside functions and use them elsewhere in your program.\n\nNote: You can return multiple values separated by commas — Python packages them into a tuple!',
      how: 'Write return followed by the variable or expression. Any code after return in the function block is unreachable.',
      characteristics: ['Exits Immediately', 'Returns Data to Caller', 'Supports Multiple Values', 'Defaults to None'],
      codeSnippet: `# Single return value\nimport math\n\ndef circle_area(radius):\n    return math.pi * (radius ** 2)\n\narea = circle_area(5)\nprint(f"Area: {area:.2f}")  # 78.54\n\n# Multiple return values (Tuple)\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nlowest, highest = min_max([3, 1, 4, 2])\nprint(f"Min: {lowest}, Max: {highest}")  # Min: 1, Max: 4`,
      darkTheme: false
    },

    // SLIDE 09: VARIABLE SCOPE & THE LEGB RULE (Light Theme)
    {
      id: 9,
      slideNumber: '09 / 20',
      type: 'legb-scope',
      topRightTag: '02 — SCOPE & RETURN',
      topLeftTag: 'VARIABLE SCOPE',
      subBadge: 'THE LEGB RULE',
      mainTitle: 'Understanding Scope — The LEGB Rule',
      highlightedWords: ['LEGB Rule'],
      subtitle: 'Where variables live and how Python searches for them in order:',
      darkTheme: false
    },

    // SLIDE 10: SECTION 03 DIVIDER - LAMBDA & FUNCTIONAL TOOLS (Dark Theme)
    {
      id: 10,
      slideNumber: '10 / 20',
      type: 'section-divider',
      topRightTag: 'PART 03',
      topLeftTag: 'SECTION DIVIDER',
      subBadge: '03 · LAMBDA & FUNCTIONAL TOOLS',
      mainTitle: 'LAMBDA & FUNCTIONAL TOOLS',
      highlightedWords: ['LAMBDA', '&', 'FUNCTIONAL', 'TOOLS'],
      subtitle: 'Anonymous Functions, map() & filter()',
      description: 'Write quick inline operations and transform or filter collections elegantly.',
      darkTheme: true
    },

    // SLIDE 11: LAMBDA FUNCTIONS — ANONYMOUS ONE-LINERS (Light Theme)
    {
      id: 11,
      slideNumber: '11 / 20',
      type: 'concept-detail',
      topRightTag: '03 — LAMBDA & TOOLS',
      topLeftTag: 'ANONYMOUS FUNCTIONS',
      subBadge: 'LAMBDA FUNCTIONS',
      mainTitle: 'Lambda Functions — Compact One-Liners',
      highlightedWords: ['Lambda Functions'],
      definition: 'A lambda function is a small, anonymous function defined with the lambda keyword. It can take any number of arguments, but can only have one expression.',
      why: 'Use lambda when you need a short, temporary function for a brief operation — especially as arguments to functions like sorted(), map(), or filter().\n\nRule of thumb: If it requires multiple lines or complex logic, use standard def!',
      how: 'Syntax: lambda arguments: expression (the result is returned automatically).',
      characteristics: ['Anonymous', 'Single Expression', 'Implicit Return', 'Compact Syntax'],
      codeSnippet: `# Regular function vs Lambda\ndef add_regular(x, y):\n    return x + y\n\n# Lambda equivalent\nadd_lambda = lambda x, y: x + y\nprint(add_lambda(5, 3))  # 8\n\n# Quick utility lambdas\nsquare = lambda x: x ** 2\nis_even = lambda x: x % 2 == 0\ngreet = lambda name: f"Hello, {name}!"\n\nprint(square(4))   # 16\nprint(is_even(7))  # False`,
      darkTheme: false
    },

    // SLIDE 12: MAP() AND FILTER() FUNCTIONS (Light Theme)
    {
      id: 12,
      slideNumber: '12 / 20',
      type: 'map-filter',
      topRightTag: '03 — LAMBDA & TOOLS',
      topLeftTag: 'HIGHER-ORDER FUNCTIONS',
      subBadge: 'MAP() & FILTER()',
      mainTitle: 'map() and filter() Functions',
      highlightedWords: ['map()', 'filter()'],
      subtitle: 'Transforming and selecting elements in iterables without explicit for loops:',
      darkTheme: false
    },

    // SLIDE 13: SECTION 04 DIVIDER - LOOPS & STRINGS (Dark Theme)
    {
      id: 13,
      slideNumber: '13 / 20',
      type: 'section-divider',
      topRightTag: 'PART 04',
      topLeftTag: 'SECTION DIVIDER',
      subBadge: '04 · LOOPS & STRING METHODS',
      mainTitle: 'LOOPS & STRING METHODS',
      highlightedWords: ['LOOPS', '&', 'STRING', 'METHODS'],
      subtitle: 'Iteration Control & Powerful Text Processing',
      description: 'Combine nested loops with string manipulation methods for data parsing and validation.',
      darkTheme: true
    },

    // SLIDE 14: FOR LOOPS & NESTED LOOPS IN DEPTH (Light Theme)
    {
      id: 14,
      slideNumber: '14 / 20',
      type: 'nested-loops-depth',
      topRightTag: '04 — LOOPS & STRINGS',
      topLeftTag: 'ITERATION PATTERNS',
      subBadge: 'FOR & NESTED LOOPS',
      mainTitle: 'For Loops & Nested Loops in Depth',
      highlightedWords: ['For Loops', 'Nested Loops'],
      subtitle: 'Multi-dimensional iteration, matrix traversal, and iteration step mechanics:',
      darkTheme: false
    },

    // SLIDE 15: PYTHON STRING METHODS TOOLKIT (Light Theme)
    {
      id: 15,
      slideNumber: '15 / 20',
      type: 'string-methods-toolkit',
      topRightTag: '04 — LOOPS & STRINGS',
      topLeftTag: 'TEXT PROCESSING',
      subBadge: 'STRING METHODS TOOLKIT',
      mainTitle: 'Python String Methods Toolkit',
      highlightedWords: ['String Methods Toolkit'],
      subtitle: 'Essential methods for cleaning, transforming, splitting, and validating text data:',
      darkTheme: false
    },

    // SLIDE 16: STRING SLICING & PALINDROME CHECKER (Light Theme)
    {
      id: 16,
      slideNumber: '16 / 20',
      type: 'concept-detail',
      topRightTag: '04 — LOOPS & STRINGS',
      topLeftTag: 'STRING SLICING',
      subBadge: 'SLICING & PALINDROME CHECKER',
      mainTitle: 'String Slicing & Palindrome Checker',
      highlightedWords: ['String Slicing', 'Palindrome Checker'],
      definition: 'String slicing allows extracting substrings using text[start:stop:step]. Reversing a string is achieved with text[::-1].',
      why: 'String slicing combined with string cleaning (.lower(), .replace()) allows creating elegant text verification algorithms like Palindrome Checkers.\n\nAnalogy: Reading a word forward and backward — e.g., "racecar", "madam".',
      how: 'Clean the input by lowercasing and removing spaces, then compare the cleaned string with its reverse [::-1].',
      characteristics: ['Immutable Strings', 'Step -1 Reverses', 'Clean Before Compare', 'Fast Execution'],
      codeSnippet: `# Palindrome Checker Function\ndef is_palindrome(text):\n    # 1. Clean string: lower case & remove spaces\n    cleaned = text.lower().replace(" ", "")\n    # 2. Compare with reversed version\n    return cleaned == cleaned[::-1]\n\n# Testing Palindromes\nprint(is_palindrome("Racecar"))        # True\nprint(is_palindrome("A man a plan a canal Panama")) # True\nprint(is_palindrome("Python"))         # False`,
      darkTheme: false
    },

    // SLIDE 17: REAL-WORLD EXAMPLES — CAPSTONE PROJECTS (Light Theme)
    {
      id: 17,
      slideNumber: '17 / 20',
      type: 'real-world-capstone',
      topRightTag: '04 — LOOPS & STRINGS',
      topLeftTag: 'PRACTICAL CAPSTONE',
      subBadge: '4 REAL-WORLD EXAMPLES',
      mainTitle: 'Real-World Function Projects',
      highlightedWords: ['Real-World Function Projects'],
      subtitle: 'Four complete practical examples combining functions, parameters, string methods, and loops:',
      darkTheme: false
    },

    // SLIDE 18: INTERACTIVE CODE LAB / SIMULATOR (Light Theme)
    {
      id: 18,
      slideNumber: '18 / 20',
      type: 'interactive-function-lab',
      topRightTag: 'LIVE DEMO',
      topLeftTag: 'INTERACTIVE LAB',
      subBadge: 'PYTHON FUNCTION SIMULATOR',
      mainTitle: 'Interactive Function Execution Lab',
      highlightedWords: ['Interactive Function Execution'],
      subtitle: 'Test temperature conversion, cart total, palindrome checking, and password strength live:',
      darkTheme: false
    },

    // SLIDE 19: PYTHON FUNDAMENTALS MODULE SUMMARY (Light Theme)
    {
      id: 19,
      slideNumber: '19 / 20',
      type: 'module-summary-matrix',
      topRightTag: 'MODULE 02 SUMMARY',
      topLeftTag: 'PYTHON FUNDAMENTALS',
      subBadge: 'COMPLETE RECAP',
      mainTitle: 'Python Fundamentals — Master Summary',
      highlightedWords: ['Master Summary'],
      subtitle: 'Summary of everything learned across Sessions 09, 10, 11, and 12:',
      darkTheme: false
    },

    // SLIDE 20: OUTRO / MODULE GRADUATION HERO (Dark Theme)
    {
      id: 20,
      slideNumber: '20 / 20',
      type: 'outro-hero',
      topRightTag: 'INSTANT ACADEMY',
      topLeftTag: 'PYTHON FUNDAMENTALS COMPLETE',
      subBadge: 'MODULE 02 COMPLETED · KEEP CODING!',
      mainTitle: 'KEEP CODING!',
      highlightedWords: ['KEEP', 'CODING!'],
      subtitle: 'Congratulations! You have completed Python Fundamentals. Practice writing functions, using loops, and manipulating strings in every project.',
      nextSessionNote: 'Next Module: Python Libraries — NumPy Arrays, Pandas DataFrames & Data Visualizations',
      darkTheme: true
    }
  ]
};

export const dataAnalysisSession12AR: ChapterPresentation = {
  ...dataAnalysisSession12EN,
  chapterTitle: 'السيشن 12: الدوال والتكرار والنصوص في بايثون (Functions, Scope, Loops & Strings)',
  courseName: 'دبلومة تحليل البيانات • السيشن 12'
};
