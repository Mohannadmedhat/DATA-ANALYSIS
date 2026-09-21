import { ChapterPresentation } from '../types';

export const dataAnalysisSession11EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-11',
  chapterTitle: 'Session 11: Python Data Structures',
  courseName: 'Data Analysis Diploma • Session 11',
  duration: 'Duration: 3.5 Hours',
  totalSlides: 20,
  slides: [
    // SLIDE 01: HERO COVER SLIDE (Dark Theme)
    {
      id: 1,
      slideNumber: '01 / 20',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 11',
      topLeftTag: 'PYTHON DATA STRUCTURES',
      subBadge: 'LISTS · TUPLES · DICTS · SETS',
      mainTitle: 'PYTHON DATA STRUCTURES',
      highlightedWords: ['PYTHON', 'DATA', 'STRUCTURES'],
      subtitle: 'Master the Building Blocks of Python',
      darkTheme: true
    },

    // SLIDE 02: WHAT WE WILL COVER (Light Theme)
    {
      id: 2,
      slideNumber: '02 / 20',
      type: 'four-cards',
      topRightTag: 'CURRICULUM OVERVIEW',
      topLeftTag: 'SESSION 11',
      subBadge: 'WHAT WE WILL COVER',
      mainTitle: 'Master the 4 Python Data Structures',
      highlightedWords: ['4 Python Data Structures'],
      subtitle: 'Understanding when and how to store, access, and manipulate data efficiently:',
      topics: [
        {
          num: '01',
          title: 'LISTS',
          desc: 'Ordered, mutable collections. Create, access, slice, and use powerful list methods and comprehensions.',
          color: 'blue'
        },
        {
          num: '02',
          title: 'TUPLES',
          desc: 'Ordered, immutable collections. Understand when and why to use unchangeable data.',
          color: 'orange'
        },
        {
          num: '03',
          title: 'DICTIONARIES',
          desc: 'Key-value paired data. The most powerful structure for labeled, fast-lookup information.',
          color: 'purple'
        },
        {
          num: '04',
          title: 'SETS',
          desc: 'Unique, unordered collections. Eliminate duplicates and perform mathematical set operations.',
          color: 'green'
        }
      ],
      darkTheme: false
    },

    // SLIDE 03: SECTION 01 DIVIDER - LISTS (Dark Theme)
    {
      id: 3,
      slideNumber: '03 / 20',
      type: 'section-divider',
      topRightTag: 'PART 01',
      topLeftTag: 'SECTION DIVIDER',
      subBadge: '01 · LISTS',
      mainTitle: 'LISTS',
      highlightedWords: ['LISTS'],
      subtitle: 'Ordered, Mutable Collections',
      description: 'Learn to create, access, modify, and manipulate ordered collections of data.',
      darkTheme: true
    },

    // SLIDE 04: WHAT ARE LISTS & WHY USE THEM? (Light Theme)
    {
      id: 4,
      slideNumber: '04 / 20',
      type: 'concept-detail',
      topRightTag: '01 — LISTS',
      topLeftTag: 'CORE CONCEPT',
      subBadge: 'UNDERSTANDING LISTS',
      mainTitle: 'What Are Lists & Why Use Them?',
      highlightedWords: ['What Are Lists'],
      definition: 'Lists are ordered, mutable collections of items that can contain different data types.',
      why: 'You need lists when you want to store multiple related items in a single variable, access them by position, and modify them over time.\n\nAnalogy: A shopping list — ordered, flexible, holds different things.',
      how: 'Create with square brackets [ ], access by index (starts at 0), and modify elements directly by assignment.',
      characteristics: ['Ordered', 'Mutable', 'Allows Duplicates', 'Mixed Data Types'],
      codeSnippet: `# Creating a list\nfruits = ["apple", "banana", "cherry"]\n\n# Access by index\nprint(fruits[0]) # "apple"\nprint(fruits[-1]) # "cherry"\n\n# Modify an element\nfruits[1] = "blueberry"\n\n# Mixed data types\nmixed = ["hello", 42, 3.14, True]\n\n# Check length\nprint(len(fruits)) # 3`,
      darkTheme: false
    },

    // SLIDE 05: CREATING & ACCESSING LISTS (Light Theme)
    {
      id: 5,
      slideNumber: '05 / 20',
      type: 'interactive-indexing',
      topRightTag: '01 — LISTS',
      topLeftTag: 'OPERATIONS',
      subBadge: 'INDEXING & SLICING',
      mainTitle: 'Creating & Accessing Lists',
      highlightedWords: ['Creating & Accessing'],
      darkTheme: false
    },

    // SLIDE 06: LIST METHODS — YOUR TOOLKIT (Light Theme)
    {
      id: 6,
      slideNumber: '06 / 20',
      type: 'methods-toolkit',
      topRightTag: '01 — LISTS',
      topLeftTag: 'METHODS',
      subBadge: 'LIST METHODS',
      mainTitle: 'List Methods — Your Toolkit',
      highlightedWords: ['List Methods'],
      darkTheme: false
    },

    // SLIDE 07: LIST COMPREHENSIONS — PYTHONIC POWER (Light Theme)
    {
      id: 7,
      slideNumber: '07 / 20',
      type: 'comprehensions',
      topRightTag: '01 — LISTS',
      topLeftTag: 'PYTHONIC SYNTAX',
      subBadge: 'LIST COMPREHENSIONS',
      mainTitle: 'List Comprehensions — Pythonic Power',
      highlightedWords: ['List Comprehensions'],
      subtitle: 'A concise way to create lists in a single line. More readable, faster, and considered "Pythonic".',
      darkTheme: false
    },

    // SLIDE 08: LISTS IN ACTION — REAL-WORLD EXAMPLES (Light Theme)
    {
      id: 8,
      slideNumber: '08 / 20',
      type: 'real-world',
      topRightTag: '01 — LISTS',
      topLeftTag: 'PRACTICAL USE',
      subBadge: 'REAL-WORLD EXAMPLES',
      mainTitle: 'Lists in Action — Real-World Examples',
      highlightedWords: ['Real-World Examples'],
      darkTheme: false
    },

    // SLIDE 09: SECTION 02 DIVIDER - TUPLES (Dark Theme)
    {
      id: 9,
      slideNumber: '09 / 20',
      type: 'section-divider',
      topRightTag: 'PART 02',
      topLeftTag: 'SECTION DIVIDER',
      subBadge: '02 · TUPLES',
      mainTitle: 'TUPLES',
      highlightedWords: ['TUPLES'],
      subtitle: 'Ordered, Immutable Collections',
      description: 'When data should stay fixed and protected from accidental changes.',
      darkTheme: true
    },

    // SLIDE 10: WHAT ARE TUPLES & WHY USE THEM? (Light Theme)
    {
      id: 10,
      slideNumber: '10 / 20',
      type: 'concept-detail',
      topRightTag: '02 — TUPLES',
      topLeftTag: 'CORE CONCEPT',
      subBadge: 'UNDERSTANDING TUPLES',
      mainTitle: 'What Are Tuples & Why Use Them?',
      highlightedWords: ['What Are Tuples'],
      definition: 'Tuples are ordered, immutable collections — once created, they cannot be changed.',
      why: 'Use tuples to protect data from accidental modification, or when you need a collection usable as a dictionary key.\n\nAnalogy: GPS coordinates (lat, long) — fixed together, shouldn\'t change.',
      how: 'Create with parentheses ( ) or just commas. Access by index just like lists.',
      characteristics: ['Ordered', 'Immutable', 'Allows Duplicates', 'Faster', 'Hashable'],
      codeSnippet: `# Creating tuples\ncoords = (40.7, -74.0)\nrgb = (255, 128, 0)\nsingle = ("only",) # comma required!\n\n# Accessing (same as lists)\nlat = coords[0] # 40.7\nlng = coords[1] # -74.0\n\n# Slicing works too\npartial = rgb[:2] # (255, 128)\n\n# This WILL FAIL:\n# coords[0] = 41.0 # TypeError!`,
      darkTheme: false
    },

    // SLIDE 11: TUPLE OPERATIONS & UNPACKING (Light Theme)
    {
      id: 11,
      slideNumber: '11 / 20',
      type: 'tuple-operations',
      topRightTag: '02 — TUPLES',
      topLeftTag: 'OPERATIONS',
      subBadge: 'UNPACKING & PATTERNS',
      mainTitle: 'Tuple Operations & Unpacking',
      highlightedWords: ['Operations & Unpacking'],
      darkTheme: false
    },

    // SLIDE 12: SECTION 03 DIVIDER - DICTIONARIES (Dark Theme)
    {
      id: 12,
      slideNumber: '12 / 20',
      type: 'section-divider',
      topRightTag: 'PART 03',
      topLeftTag: 'SECTION DIVIDER',
      subBadge: '03 · DICTIONARIES',
      mainTitle: 'DICTIONARIES',
      highlightedWords: ['DICTIONARIES'],
      subtitle: 'Key-Value Paired Data',
      description: 'The most powerful structure for labeled, fast-lookup information in Python.',
      darkTheme: true
    },

    // SLIDE 13: WHAT ARE DICTIONARIES & WHY USE THEM? (Light Theme)
    {
      id: 13,
      slideNumber: '13 / 20',
      type: 'concept-detail',
      topRightTag: '03 — DICTIONARIES',
      topLeftTag: 'CORE CONCEPT',
      subBadge: 'UNDERSTANDING DICTIONARIES',
      mainTitle: 'What Are Dictionaries & Why Use Them?',
      highlightedWords: ['What Are Dictionaries'],
      definition: 'Dictionaries store data as key-value pairs — look up a key to get its value instantly.',
      why: 'Use dictionaries when you need fast lookups by a meaningful identifier rather than by position number.\n\nAnalogy: A phone book — look up a name (key) to find a number (value).',
      how: 'Create with curly braces { }. Access values by key, not by index.',
      characteristics: ['Key-Value Pairs', 'Mutable', 'Unique Keys Only'],
      codeSnippet: `# Creating a dictionary\nuser = {\n  "name": "Alice",\n  "age": 25,\n  "city": "Cairo"\n}\n\n# Access by key\nprint(user["name"]) # "Alice"\n\n# Safe access\nprint(user.get("job", "N/A")) # "N/A"\n\n# Add/Update\nuser["email"] = "alice@mail.com"`,
      darkTheme: false
    },

    // SLIDE 14: DICTIONARY METHODS & ITERATION (Light Theme)
    {
      id: 14,
      slideNumber: '14 / 20',
      type: 'dict-methods',
      topRightTag: '03 — DICTIONARIES',
      topLeftTag: 'METHODS',
      subBadge: 'DICTIONARY METHODS & ITERATION',
      mainTitle: 'Dictionary Methods & Iteration',
      highlightedWords: ['Methods & Iteration'],
      darkTheme: false
    },

    // SLIDE 15: DICTIONARY COMPREHENSIONS & REAL USES (Light Theme)
    {
      id: 15,
      slideNumber: '15 / 20',
      type: 'dict-comprehensions',
      topRightTag: '03 — DICTIONARIES',
      topLeftTag: 'ADVANCED USAGE',
      subBadge: 'COMPREHENSIONS & REAL USES',
      mainTitle: 'Dictionary Comprehensions & Real Uses',
      highlightedWords: ['Comprehensions & Real Uses'],
      darkTheme: false
    },

    // SLIDE 16: SECTION 04 DIVIDER - SETS (Dark Theme)
    {
      id: 16,
      slideNumber: '16 / 20',
      type: 'section-divider',
      topRightTag: 'PART 04',
      topLeftTag: 'SECTION DIVIDER',
      subBadge: '04 · SETS',
      mainTitle: 'SETS',
      highlightedWords: ['SETS'],
      subtitle: 'Unique, Unordered Collections',
      description: 'Eliminate duplicates and perform mathematical set operations with ease.',
      darkTheme: true
    },

    // SLIDE 17: WHAT ARE SETS & WHY USE THEM? (Light Theme)
    {
      id: 17,
      slideNumber: '17 / 20',
      type: 'concept-detail',
      topRightTag: '04 — SETS',
      topLeftTag: 'CORE CONCEPT',
      subBadge: 'UNDERSTANDING SETS',
      mainTitle: 'What Are Sets & Why Use Them?',
      highlightedWords: ['What Are Sets'],
      definition: 'Sets are unordered collections of unique items — no duplicates, no guaranteed order.',
      why: 'Use sets to eliminate duplicates, test membership, or perform mathematical operations (union, intersection).\n\nAnalogy: A set of unique student IDs — each has one ID, order doesn\'t matter.',
      how: 'Create with curly braces { } or set(). Note: {} creates an empty dict, use set() for empty set.',
      importantNote: 'Important: Sets only store immutable items — you can\'t put a list inside a set!',
      codeSnippet: `# Creating sets\nnums = {1, 2, 3, 3, 3}\nprint(nums) # {1, 2, 3} — dupes gone!\n\n# From a list\nunique = set([1, 2, 2, 3])\nprint(unique) # {1, 2, 3}\n\n# Empty set (NOT {})\nempty = set() # Correct!\n\n# Membership test\nprint(2 in nums) # True — very fast!`,
      darkTheme: false
    },

    // SLIDE 18: SET OPERATIONS — MATH IN ACTION (Light Theme)
    {
      id: 18,
      slideNumber: '18 / 20',
      type: 'set-operations',
      topRightTag: '04 — SETS',
      topLeftTag: 'OPERATIONS',
      subBadge: 'SET OPERATIONS',
      mainTitle: 'Set Operations — Math in Action',
      highlightedWords: ['Math in Action'],
      darkTheme: false
    },

    // SLIDE 19: THE BIG COMPARISON — WHEN TO USE WHAT (Light Theme)
    {
      id: 19,
      slideNumber: '19 / 20',
      type: 'comparison-matrix',
      topRightTag: 'SESSION 11 — SUMMARY',
      topLeftTag: 'COMPARISON',
      subBadge: 'SUMMARY & DECISION MATRIX',
      mainTitle: 'The Big Comparison — When to Use What',
      highlightedWords: ['When to Use What'],
      darkTheme: false
    },

    // SLIDE 20: OUTRO HERO (Dark Theme)
    {
      id: 20,
      slideNumber: '20 / 20',
      type: 'outro-hero',
      topRightTag: 'INSTANT ACADEMY',
      topLeftTag: 'SESSION 11 COMPLETE',
      subBadge: 'MASTER THE BASICS',
      mainTitle: 'MASTER THE BASICS',
      highlightedWords: ['MASTER THE BASICS'],
      subtitle: 'Choose the right tool for the right job. Keep coding!',
      nextSessionNote: 'Next Session: Python Libraries — NumPy, Pandas & Data Visualizations',
      darkTheme: true
    }
  ]
};

export const dataAnalysisSession11AR: ChapterPresentation = {
  ...dataAnalysisSession11EN,
  chapterTitle: 'السيشن 11: هياكل البيانات في بايثون (Lists, Tuples, Dicts, Sets)',
  courseName: 'دبلومة تحليل البيانات • السيشن 11'
};
