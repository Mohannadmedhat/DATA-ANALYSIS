import { ChapterPresentation } from '../types';

export const dataAnalysisSession05EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-05',
  chapterTitle: 'Session 05: Advanced Functions & Power Query Intro',
  courseName: 'Data Analysis Diploma • Session 05',
  duration: 'Duration: 3.5 Hours',
  totalSlides: 44,
  slides: [
    // ==========================================
    // PART 1: EXCEL TEXT FUNCTIONS
    // ==========================================

    // Slide 01: Hero Cover Slide (Unified Format)
    {
      id: 1,
      slideNumber: '01 / 44',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 05',
      topLeftTag: 'ADVANCED FUNCTIONS & POWER QUERY',
      subBadge: 'SESSION 5 · ADVANCED EXCEL',
      mainTitle: 'Advanced Functions & Power Query',
      highlightedWords: ['Advanced Functions', 'Power Query'],
      subtitle: 'Text Functions · Lookup Functions · Dynamic Arrays · Power Query Fundamentals',
      darkTheme: true
    },

    // Slide 02: Session Objectives (6 Cards)
    {
      id: 2,
      slideNumber: '02 / 44',
      type: 'six-cards',
      topRightTag: 'SESSION OBJECTIVES',
      topLeftTag: 'LEARNING GOALS • SESSION 05',
      subBadge: 'SESSION COMPETENCIES',
      mainTitle: 'What You Will Master Today',
      highlightedWords: ['What You Will Master Today'],
      subtitle: 'By the end of this session, you will confidently apply these advanced Excel and ETL capabilities:',
      cards: [
        {
          title: 'Master Text Extraction',
          description: 'Extract, clean, and reformat strings using LEFT, RIGHT, MID, LEN, FIND, and SUBSTITUTE.',
          iconName: 'FileText'
        },
        {
          title: 'Advanced Lookups',
          description: 'Connect datasets seamlessly with XLOOKUP, VLOOKUP, HLOOKUP, and INDEX/MATCH.',
          iconName: 'Search'
        },
        {
          title: 'Dynamic Array Formulas',
          description: 'Build self-updating reports using FILTER, UNIQUE, SORT, and SORTBY functions.',
          iconName: 'Zap'
        },
        {
          title: 'Power Query Fundamentals',
          description: 'Automate repetitive data cleaning tasks without writing a single line of code.',
          iconName: 'RefreshCw'
        },
        {
          title: 'ETL Data Pipeline',
          description: 'Import, clean, transform, and load messy data into analytical models with 1-click refresh.',
          iconName: 'Layers'
        },
        {
          title: 'Real Business Scenarios',
          description: 'Construct automated sales reporting dashboards, HR directories, and inventory logs.',
          iconName: 'BarChart2'
        }
      ]
    },

    // Slide 03: Section Divider - PART 1
    {
      id: 3,
      slideNumber: '03 / 44',
      type: 'section-divider',
      partNumber: 'PART 1',
      sectionTitle: 'Excel Text Functions',
      subtitle: 'Extracting, Parsing, Standardizing, and Combining Text Data like a Professional Analyst',
      darkTheme: true
    },

    // Slide 04: LEFT & RIGHT
    {
      id: 4,
      slideNumber: '04 / 44',
      type: 'function-card',
      topRightTag: 'TEXT FUNCTIONS',
      topLeftTag: 'CHARACTER EXTRACTION',
      subBadge: 'STRING PARSING',
      mainTitle: 'LEFT & RIGHT Functions',
      highlightedWords: ['LEFT & RIGHT'],
      subtitle: 'Extract characters from the beginning or end of a text string.',
      keyConcepts: [
        'LEFT extracts a specified number of characters from the start of text.',
        'RIGHT extracts characters from the end of text.',
        'Essential for splitting product codes, IDs, zip codes, or names.',
        'Syntax: =LEFT(text, num_chars) | =RIGHT(text, num_chars)',
        'Common Mistake: Specifying more characters than exist in the source cell.'
      ],
      formulas: [
        '=LEFT(A2, 3)',
        '=RIGHT(A2, 4)'
      ],
      businessExample: 'Extract product category code "ELEC" and product serial "2045" from SKU "ELEC-2045".'
    },

    // Slide 05: MID & LEN
    {
      id: 5,
      slideNumber: '05 / 44',
      type: 'function-card',
      topRightTag: 'TEXT FUNCTIONS',
      topLeftTag: 'STRING ANALYSIS',
      subBadge: 'MIDDLE EXTRACTION & LENGTH',
      mainTitle: 'MID & LEN Functions',
      highlightedWords: ['MID & LEN'],
      subtitle: 'Extract substring from the middle of text and measure string length.',
      keyConcepts: [
        'MID extracts characters from inside a text string starting at a specific position.',
        'LEN returns the total character count of a text string.',
        'MID requires: text, start_num, and num_chars.',
        'LEN is ideal for data validation (e.g. verifying 10-digit phone numbers or 14-digit IDs).',
        'Common Mistake: Incorrect start position skips or grabs wrong characters.'
      ],
      formulas: [
        '=MID(A2, 6, 4)',
        '=LEN(A2)'
      ],
      businessExample: 'Extract the year "2045" from SKU "ELEC-2045-A" and validate ID length.'
    },

    // Slide 06: CONCAT & TEXTJOIN
    {
      id: 6,
      slideNumber: '06 / 44',
      type: 'function-card',
      topRightTag: 'TEXT FUNCTIONS',
      topLeftTag: 'STRING COMBINATION',
      subBadge: 'TEXT CONCATENATION',
      mainTitle: 'CONCAT & TEXTJOIN Functions',
      highlightedWords: ['CONCAT & TEXTJOIN'],
      subtitle: 'Combine multiple text strings into a single formatted value.',
      keyConcepts: [
        'CONCAT joins text from multiple cells or ranges without delimiters.',
        'TEXTJOIN joins text with a chosen delimiter (comma, space, dash).',
        'TEXTJOIN automatically ignores empty cells when ignore_empty is set to TRUE.',
        'Great for assembling full names, complete mailing addresses, or combined tags.',
        'Common Mistake: Forgetting delimiter argument or quotes in TEXTJOIN.'
      ],
      formulas: [
        '=CONCAT(B2, C2)',
        '=TEXTJOIN(", ", TRUE, D2:D5)'
      ],
      businessExample: 'Combine First Name and Last Name columns into one Full Name, or concatenate address lines.'
    },

    // Slide 07: UPPER, LOWER, PROPER
    {
      id: 7,
      slideNumber: '07 / 44',
      type: 'function-card',
      topRightTag: 'TEXT FUNCTIONS',
      topLeftTag: 'CASE STANDARDIZATION',
      subBadge: 'TEXT FORMATTING',
      mainTitle: 'UPPER, LOWER & PROPER',
      highlightedWords: ['UPPER, LOWER & PROPER'],
      subtitle: 'Standardize letter casing across inconsistent customer and product records.',
      keyConcepts: [
        'UPPER converts all characters in a text string to UPPERCASE.',
        'LOWER converts all characters to lowercase.',
        'PROPER capitalizes the first letter of each word and lowers all other letters.',
        'Standardizes inconsistent manual data entry from web forms or CRM exports.',
        'Common Mistake: Applying to numeric values or expecting automatic live cell updates.'
      ],
      formulas: [
        '=UPPER(E2)',
        '=LOWER(E2)',
        '=PROPER(E2)'
      ],
      businessExample: 'Standardize customer names entered inconsistently ("jOHn sMItH" -> "John Smith").'
    },

    // Slide 08: TRIM Function
    {
      id: 8,
      slideNumber: '08 / 44',
      type: 'function-card',
      topRightTag: 'TEXT FUNCTIONS',
      topLeftTag: 'DATA CLEANING',
      subBadge: 'WHITESPACE REMOVAL',
      mainTitle: 'TRIM Function',
      highlightedWords: ['TRIM Function'],
      subtitle: 'Remove excess spaces from text while keeping single spaces between words.',
      keyConcepts: [
        'Removes all leading spaces, trailing spaces, and multiple spaces between words.',
        'Keeps a single space character between words for proper formatting.',
        'Essential for cleaning imported CSV, web data, or copied database extracts.',
        'Fixes mysterious lookup failures caused by invisible trailing spaces.',
        'Common Mistake: Assuming TRIM removes non-breaking spaces (CHAR 160) without SUBSTITUTE.'
      ],
      formulas: [
        '=TRIM(F2)'
      ],
      businessExample: 'Clean up messy email addresses copied from webforms (" john.doe@email.com " -> "john.doe@email.com").'
    },

    // Slide 09: FIND Function
    {
      id: 9,
      slideNumber: '09 / 44',
      type: 'function-card',
      topRightTag: 'TEXT FUNCTIONS',
      topLeftTag: 'SUBSTRING SEARCH',
      subBadge: 'POSITION SEARCH',
      mainTitle: 'FIND Function',
      highlightedWords: ['FIND Function'],
      subtitle: 'Locate the exact character position of a substring within text.',
      keyConcepts: [
        'Locates the starting position of a target substring within a text string.',
        'Case-sensitive search function (unlike SEARCH which is case-insensitive).',
        'Returns a numeric position integer (e.g. 5 means the character is at position 5).',
        'Frequently combined with MID or LEFT for dynamic, variable-length text extraction.',
        'Common Mistake: Text not found returns a #VALUE! error (wrap with IFERROR or ISNUMBER).'
      ],
      formulas: [
        '=FIND("-", G2)'
      ],
      businessExample: 'Locate the dash position within an order reference number ("ORD-99214") to dynamically split IDs.'
    },

    // Slide 10: SUBSTITUTE Function
    {
      id: 10,
      slideNumber: '10 / 44',
      type: 'function-card',
      topRightTag: 'TEXT FUNCTIONS',
      topLeftTag: 'TEXT REPLACEMENT',
      subBadge: 'STRING REPLACEMENT',
      mainTitle: 'SUBSTITUTE Function',
      highlightedWords: ['SUBSTITUTE Function'],
      subtitle: 'Replace specific text within a string programmatically.',
      keyConcepts: [
        'Replaces existing text with new text in a text string.',
        'Can target all occurrences or a specific occurrence instance if needed.',
        'Ideal for correcting formatting errors, changing date separators, or stripping unwanted characters.',
        'Different from Find & Replace tool because it updates dynamically via formula.',
        'Common Mistake: Case sensitivity causes missed replacements if case doesn\'t match.'
      ],
      formulas: [
        '=SUBSTITUTE(H2, "/", "-")',
        '=SUBSTITUTE(H2, " ", "", 1)'
      ],
      businessExample: 'Standardize date separators across imported reports ("12/05/2024" -> "12-05-2024").'
    },

    // Slide 11: Combining Text Functions
    {
      id: 11,
      slideNumber: '11 / 44',
      type: 'formula-breakdown',
      topRightTag: 'ADVANCED FORMULAS',
      topLeftTag: 'DYNAMIC EXTRACTION',
      subBadge: 'NESTED FORMULAS',
      mainTitle: 'Combining MID + FIND + LEN',
      highlightedWords: ['MID + FIND + LEN'],
      subtitle: 'Extracting variable-length sub-strings dynamically when positions change.',
      recipeSteps: [
        {
          step: '1. FIND Delimiter',
          desc: 'FIND("-", A2) locates the hyphen position in string "PROD-88219-US".',
          code: 'FIND("-", A2) -> 5'
        },
        {
          step: '2. MID Extraction',
          desc: 'MID starts at position 6 (5 + 1) and extracts 5 digits.',
          code: 'MID(A2, 6, 5) -> "88219"'
        },
        {
          step: '3. Wrap with TRIM',
          desc: 'TRIM ensures no hidden spaces remain after extraction.',
          code: 'TRIM(MID(A2, FIND("-", A2)+1, 5))'
        }
      ],
      businessExample: 'Extract product serial numbers of varying lengths from non-standardized invoice codes.'
    },

    // Slide 12: Interactive Text Cleaning Lab
    {
      id: 12,
      slideNumber: '12 / 44',
      type: 'interactive-lab',
      topRightTag: 'INTERACTIVE LAB',
      topLeftTag: 'PRACTICE STUDIO',
      subBadge: 'LAB 01',
      mainTitle: 'Interactive Text Cleaning Studio',
      highlightedWords: ['Text Cleaning Studio'],
      subtitle: 'Test text functions live on messy raw datasets and observe output transformations.',
      darkTheme: false
    },

    // ==========================================
    // PART 2: LOOKUP FUNCTIONS & COMPARISON
    // ==========================================

    // Slide 13: Section Divider - PART 2
    {
      id: 13,
      slideNumber: '13 / 44',
      type: 'section-divider',
      partNumber: 'PART 2',
      sectionTitle: 'Lookup & Reference Functions',
      subtitle: 'Searching, Connecting, and Retrieving Data Across Tables with VLOOKUP, HLOOKUP, XLOOKUP & INDEX/MATCH',
      darkTheme: true
    },

    // Slide 14: VLOOKUP
    {
      id: 14,
      slideNumber: '14 / 44',
      type: 'function-card',
      topRightTag: 'LOOKUP FUNCTIONS',
      topLeftTag: 'VERTICAL LOOKUP',
      subBadge: 'CLASSIC LOOKUP',
      mainTitle: 'VLOOKUP Function',
      highlightedWords: ['VLOOKUP Function'],
      subtitle: 'Search for a value in the first column of a table and return a value in the same row from another column.',
      keyConcepts: [
        'Searches for a value in the FIRST column of a table range.',
        'Returns a matching value from a specified column index number.',
        'Requires setting range_lookup to FALSE (or 0) for exact matches.',
        'Widely used across business models, but restricted to left-to-right lookups only.',
        'Common Mistake: Forgetting FALSE/0 defaults to TRUE (approximate match), returning wrong data!'
      ],
      formulas: [
        '=VLOOKUP(I2, ProductTable, 3, FALSE)'
      ],
      businessExample: 'Look up product unit price using Product ID from a master pricing table.'
    },

    // Slide 15: HLOOKUP
    {
      id: 15,
      slideNumber: '15 / 44',
      type: 'function-card',
      topRightTag: 'LOOKUP FUNCTIONS',
      topLeftTag: 'HORIZONTAL LOOKUP',
      subBadge: 'ROW-BASED LOOKUP',
      mainTitle: 'HLOOKUP Function',
      highlightedWords: ['HLOOKUP Function'],
      subtitle: 'Search for a value in the top row of a table and return a value in the same column from a specified row.',
      keyConcepts: [
        'Searches for a value in the FIRST row of a horizontal data table.',
        'Returns a matching value from a specified row index number.',
        'Used when data headers are arranged vertically along rows.',
        'Follows exact same match logic as VLOOKUP (set FALSE for exact match).',
        'Common Mistake: Attempting to use HLOOKUP on standard vertical datasets.'
      ],
      formulas: [
        '=HLOOKUP(J2, SalesTable, 4, FALSE)'
      ],
      businessExample: 'Find quarterly revenue from a horizontally structured finance summary sheet.'
    },

    // Slide 16: XLOOKUP
    {
      id: 16,
      slideNumber: '16 / 44',
      type: 'function-card',
      topRightTag: 'LOOKUP FUNCTIONS',
      topLeftTag: 'MODERN LOOKUP',
      subBadge: 'RECOMMENDED STANDARD',
      mainTitle: 'XLOOKUP Function',
      highlightedWords: ['XLOOKUP Function'],
      subtitle: 'The modern, flexible replacement for VLOOKUP and HLOOKUP in Excel 365.',
      keyConcepts: [
        'Modern replacement that supersedes VLOOKUP, HLOOKUP, and INDEX/MATCH.',
        'Searches left, right, up, or down — in any direction without column index numbers.',
        'Defaults to exact match automatically (no need to type FALSE).',
        'Includes built-in "if_not_found" error handling parameter to prevent #N/A errors.',
        'Common Mistake: Trying to use XLOOKUP in older legacy versions of Excel (pre-2021/365).'
      ],
      formulas: [
        '=XLOOKUP(K2, IDRange, NameRange, "Not Found")'
      ],
      businessExample: 'Retrieve employee names using employee IDs, even when ID column is to the right of Name column.'
    },

    // Slide 17: INDEX & MATCH
    {
      id: 17,
      slideNumber: '17 / 44',
      type: 'function-card',
      topRightTag: 'LOOKUP FUNCTIONS',
      topLeftTag: 'TWO-STEP LOOKUP',
      subBadge: 'POWERFUL PAIR',
      mainTitle: 'INDEX & MATCH Combination',
      highlightedWords: ['INDEX & MATCH'],
      subtitle: 'The classic high-performance alternative for complex lookups in any version of Excel.',
      keyConcepts: [
        'INDEX returns a value at a given row and column position in a range.',
        'MATCH finds the row position number of a search value in a column.',
        'Combined, MATCH finds the row number and INDEX pulls the corresponding data.',
        'Can look up in any direction (left or right) and does not break when columns are inserted.',
        'Common Mistake: Mismatched range sizes between INDEX return range and MATCH lookup range.'
      ],
      formulas: [
        '=INDEX(NameRange, MATCH(L2, IDRange, 0))'
      ],
      businessExample: 'Retrieve a project manager\'s name based on Project ID when columns are reorganized.'
    },

    // Slide 18: Lookup Comparison Matrix
    {
      id: 18,
      slideNumber: '18 / 44',
      type: 'comparison-matrix',
      topRightTag: 'LOOKUP ARCHITECTURE',
      topLeftTag: 'FEATURE COMPARISON',
      subBadge: 'METHOD EVALUATION',
      mainTitle: 'Lookup Function Comparison',
      highlightedWords: ['Lookup Function Comparison'],
      subtitle: 'Choose the right lookup methodology based on data structure and Excel environment.',
      matrixRows: [
        {
          feature: 'Lookup Direction',
          vlookup: 'Left-to-Right only',
          hlookup: 'Top-to-Bottom only',
          xlookup: 'Any direction (Left/Right/Up/Down)',
          indexMatch: 'Any direction'
        },
        {
          feature: 'Match Default',
          vlookup: 'Approximate (Requires FALSE)',
          hlookup: 'Approximate (Requires FALSE)',
          xlookup: 'Exact Match by Default',
          indexMatch: 'Requires 0 for Exact Match'
        },
        {
          feature: 'Column Insertion Safety',
          vlookup: 'Breaks (Static column index)',
          hlookup: 'Breaks (Static row index)',
          xlookup: 'Safe (Dynamic array reference)',
          indexMatch: 'Safe (Dynamic array reference)'
        },
        {
          feature: 'Built-in Error Handling',
          vlookup: 'No (Requires IFERROR)',
          hlookup: 'No (Requires IFERROR)',
          xlookup: 'Yes (if_not_found argument)',
          indexMatch: 'No (Requires IFERROR)'
        },
        {
          feature: 'Excel Version',
          vlookup: 'All Excel Versions',
          hlookup: 'All Excel Versions',
          xlookup: 'Excel 365 / 2021+',
          indexMatch: 'All Excel Versions'
        }
      ],
      businessExample: 'A financial services firm migrates legacy VLOOKUP reports to XLOOKUP for speed and reliability.'
    },

    // Slide 19: Error Handling with IFERROR & IFNA
    {
      id: 19,
      slideNumber: '19 / 44',
      type: 'function-card',
      topRightTag: 'ERROR MANAGEMENT',
      topLeftTag: 'FORMULA SHIELDING',
      subBadge: 'CLEAN REPORTS',
      mainTitle: 'Shielding Lookups with IFERROR',
      highlightedWords: ['IFERROR'],
      subtitle: 'Prevent ugly #N/A, #VALUE!, and #REF! errors from spoiling executive dashboards.',
      keyConcepts: [
        'IFERROR catches any formula error and replaces it with a clean fallback value or text.',
        'IFNA specifically catches #N/A missing match errors while letting other calculation errors surface.',
        'Prevents downstream calculations (SUM, AVERAGE) from breaking due to a single missing match.',
        'Essential when looking up newly added products or customer IDs that may not exist yet.',
        'Common Mistake: Wrapping formulas with IFERROR too early without fixing broken formula syntax.'
      ],
      formulas: [
        '=IFERROR(VLOOKUP(A2, ProductTable, 3, FALSE), "Not Found")',
        '=IFNA(XLOOKUP(A2, IDRange, PriceRange), 0)'
      ],
      businessExample: 'Replace "#N/A" errors with "Item Discontinued" or 0 in sales invoice lookup tables.'
    },

    // Slide 20: Two-Way Matrix Lookup
    {
      id: 20,
      slideNumber: '20 / 44',
      type: 'formula-breakdown',
      topRightTag: 'ADVANCED MODELING',
      topLeftTag: 'MATRIX LOOKUP',
      subBadge: 'TWO-WAY MATCHING',
      mainTitle: 'Two-Way Matrix Lookup (INDEX + 2 MATCHes)',
      highlightedWords: ['Two-Way Matrix Lookup'],
      subtitle: 'Looking up values across both rows and columns simultaneously in a matrix.',
      recipeSteps: [
        {
          step: '1. Row MATCH',
          desc: 'MATCH(Region, RegionList, 0) finds the row number for "North".',
          code: 'MATCH("North", A2:A10, 0) -> Row 3'
        },
        {
          step: '2. Column MATCH',
          desc: 'MATCH(Month, MonthList, 0) finds the column number for "March".',
          code: 'MATCH("March", B1:M1, 0) -> Col 3'
        },
        {
          step: '3. INDEX Matrix Fetch',
          desc: 'INDEX returns value at intersection of Row 3 and Col 3.',
          code: 'INDEX(B2:M10, 3, 3)'
        }
      ],
      businessExample: 'Retrieve monthly budget figures from a 2D matrix matching both Region and Month.'
    },

    // Slide 21: Interactive Lookup Simulator
    {
      id: 21,
      slideNumber: '21 / 44',
      type: 'interactive-lookup',
      topRightTag: 'INTERACTIVE DEMO',
      topLeftTag: 'LOOKUP SIMULATOR',
      subBadge: 'SIMULATOR',
      mainTitle: 'Interactive Lookup Algorithm Simulator',
      highlightedWords: ['Lookup Algorithm Simulator'],
      subtitle: 'Compare execution of VLOOKUP vs XLOOKUP vs INDEX/MATCH on a live product database.',
      darkTheme: false
    },

    // ==========================================
    // PART 3: DYNAMIC ARRAYS & SCENARIOS
    // ==========================================

    // Slide 22: Section Divider - PART 3
    {
      id: 22,
      slideNumber: '22 / 44',
      type: 'section-divider',
      partNumber: 'PART 3',
      sectionTitle: 'Dynamic Array Functions',
      subtitle: 'Next-Generation Filtering, Sorting & Distinct Extraction with Modern Excel Dynamic Engines',
      darkTheme: true
    },

    // Slide 23: FILTER Function
    {
      id: 23,
      slideNumber: '23 / 44',
      type: 'function-card',
      topRightTag: 'DYNAMIC ARRAYS',
      topLeftTag: 'DYNAMIC FILTERING',
      subBadge: 'AUTO-SPILL',
      mainTitle: 'FILTER Function',
      highlightedWords: ['FILTER Function'],
      subtitle: 'Extract rows that meet specified logical criteria dynamically.',
      keyConcepts: [
        'Returns an array of rows that satisfy one or more logical criteria.',
        'Dynamically spills results into adjacent empty cells automatically.',
        'No need for manual filter menus, copy-pasting, or complex array formulas.',
        'Updates live whenever source data or filter criteria change.',
        'Common Mistake: Criteria range length not matching data range height causes #VALUE! error.'
      ],
      formulas: [
        '=FILTER(OrdersTable, Region="East")',
        '=FILTER(OrdersTable, (Region="East")*(Sales>5000), "No Records")'
      ],
      businessExample: 'Instantly display all high-value orders placed from the "East" region.'
    },

    // Slide 24: UNIQUE Function
    {
      id: 24,
      slideNumber: '24 / 44',
      type: 'function-card',
      topRightTag: 'DYNAMIC ARRAYS',
      topLeftTag: 'DISTINCT EXTRACTION',
      subBadge: 'DUPLICATE STRIPPING',
      mainTitle: 'UNIQUE Function',
      highlightedWords: ['UNIQUE Function'],
      subtitle: 'Extract distinct values from a column or range automatically.',
      keyConcepts: [
        'Extracts unique, distinct values from a list or multi-column range.',
        'Removes duplicate entries automatically without altering source data.',
        'Ideal for building clean data validation drop-down lists dynamically.',
        'Combines seamlessly with SORT for organized, alphabetical outputs.',
        'Common Mistake: Expecting UNIQUE to modify the original source dataset.'
      ],
      formulas: [
        '=UNIQUE(CustomerList)',
        '=SORT(UNIQUE(CategoryColumn))'
      ],
      businessExample: 'Generate a clean list of unique customer names from a raw orders log of 10,000+ rows.'
    },

    // Slide 25: SORT Function
    {
      id: 25,
      slideNumber: '25 / 44',
      type: 'function-card',
      topRightTag: 'DYNAMIC ARRAYS',
      topLeftTag: 'DYNAMIC SORTING',
      subBadge: 'AUTO-RANKING',
      mainTitle: 'SORT Function',
      highlightedWords: ['SORT Function'],
      subtitle: 'Arrange data in ascending or descending order dynamically.',
      keyConcepts: [
        'Sorts the contents of a range or array based on a specified column index.',
        'Supports ascending (1) and descending (-1) sort directions.',
        'Dynamic — automatically re-sorts output when underlying source numbers update.',
        'Does not alter or touch original data rows.',
        'Common Mistake: Sorting only one column of a multi-column table without selecting full range.'
      ],
      formulas: [
        '=SORT(SalesTable, 3, -1)'
      ],
      businessExample: 'Automatically rank sales representatives by revenue from highest to lowest.'
    },

    // Slide 26: SORTBY Function
    {
      id: 26,
      slideNumber: '26 / 44',
      type: 'function-card',
      topRightTag: 'DYNAMIC ARRAYS',
      topLeftTag: 'INDIRECT SORTING',
      subBadge: 'FLEXIBLE SORTING',
      mainTitle: 'SORTBY Function',
      highlightedWords: ['SORTBY Function'],
      subtitle: 'Sort a range based on values in another column or external array.',
      keyConcepts: [
        'Sorts a range based on another corresponding range or array values.',
        'Allows sorting by columns that are not included in the final output array.',
        'Supports multiple sort levels (e.g. Sort by Department ascending, then Salary descending).',
        'Provides greater flexibility than standard SORT for custom matrix reports.',
        'Common Mistake: Mismatched array lengths between target range and sort-by range.'
      ],
      formulas: [
        '=SORTBY(ProjectList, PriorityLevel, -1)',
        '=SORTBY(EmpNames, DeptList, 1, SalaryList, -1)'
      ],
      businessExample: 'Sort project tasks by priority level score, rather than alphabetically by task name.'
    },

    // Slide 27: The Power Triad (FILTER + UNIQUE + SORT)
    {
      id: 27,
      slideNumber: '27 / 44',
      type: 'formula-breakdown',
      topRightTag: 'DYNAMIC ARRAYS',
      topLeftTag: 'COMPOUND FORMULA',
      subBadge: 'POWER TRIAD',
      mainTitle: 'Combining FILTER + UNIQUE + SORT',
      highlightedWords: ['FILTER + UNIQUE + SORT'],
      subtitle: 'Constructing powerful single-cell dynamic reports that update in real time.',
      recipeSteps: [
        {
          step: '1. FILTER Data',
          desc: 'FILTER(CustomerNames, Status="Active") returns active customer names.',
          code: 'FILTER(A2:A100, B2:B100="Active")'
        },
        {
          step: '2. UNIQUE Extraction',
          desc: 'UNIQUE strips away duplicate customer orders to get distinct names.',
          code: 'UNIQUE(FILTER(...))'
        },
        {
          step: '3. SORT Alphabetically',
          desc: 'SORT arranges the unique active customer list alphabetically.',
          code: '=SORT(UNIQUE(FILTER(A2:A100, B2:B100="Active")))'
        }
      ],
      businessExample: 'Generate an automated, self-updating dropdown list of active unique client names.'
    },

    // Slide 28: Business Scenario 1 - Dynamic Sales Reporting
    {
      id: 28,
      slideNumber: '28 / 44',
      type: 'business-scenario',
      topRightTag: 'BUSINESS SCENARIO',
      topLeftTag: 'REAL-WORLD APPLICATION',
      subBadge: 'CASE STUDY 01',
      mainTitle: 'Dynamic Sales Reporting Dashboard',
      highlightedWords: ['Dynamic Sales Reporting'],
      subtitle: 'Combine XLOOKUP + FILTER + TEXTJOIN for live executive dashboard automation.',
      bulletPoints: [
        'Combine XLOOKUP and FILTER for an auto-updating live sales dashboard.',
        'Pull product unit prices automatically into raw orders upon transaction.',
        'Filter live results dynamically by Region and Sales Representative.',
        'Use TEXTJOIN to build combined summary order logs for management.',
        'Deliver a live, self-updating report that eliminates monthly re-work.'
      ],
      businessOutcome: 'Sales dashboard auto-updates instantly as new order rows are appended.'
    },

    // Slide 29: Business Scenario 2 - HR Employee Directory
    {
      id: 29,
      slideNumber: '29 / 44',
      type: 'business-scenario',
      topRightTag: 'BUSINESS SCENARIO',
      topLeftTag: 'REAL-WORLD APPLICATION',
      subBadge: 'CASE STUDY 02',
      mainTitle: 'HR Searchable Employee Directory',
      highlightedWords: ['HR Searchable Employee Directory'],
      subtitle: 'Clean names, look up departments, and extract distinct teams for HR management.',
      bulletPoints: [
        'Use CONCAT / TEXTJOIN to build standardized full employee names.',
        'Use PROPER to correct inconsistent name capitalization from job applications.',
        'Use INDEX / MATCH to pull department and manager names from org charts.',
        'Use UNIQUE to list all distinct departments for filter controls.',
        'Build a clean, searchable HR directory for 300+ staff members.'
      ],
      businessOutcome: 'HR team saves 5+ hours per week managing employee onboarding logs.'
    },

    // Slide 30: Business Scenario 3 - Inventory Management
    {
      id: 30,
      slideNumber: '30 / 44',
      type: 'business-scenario',
      topRightTag: 'BUSINESS SCENARIO',
      topLeftTag: 'REAL-WORLD APPLICATION',
      subBadge: 'CASE STUDY 03',
      mainTitle: 'Automated Warehouse Inventory Control',
      highlightedWords: ['Inventory Control'],
      subtitle: 'Filter low-stock items and rank by reorder urgency automatically.',
      bulletPoints: [
        'Use FILTER to isolate low-stock items where Stock < Minimum Threshold.',
        'Use SORT to rank items by reorder urgency score (highest priority first).',
        'Use SUBSTITUTE to clean messy SKU formatting across legacy warehouses.',
        'Use UNIQUE to list distinct product categories needing immediate restocking.',
        'Support faster, error-free warehouse decision-making and automated PO generation.'
      ],
      businessOutcome: 'Warehouse logistics team gets a live low-stock priority list updated every morning.'
    },

    // ==========================================
    // PART 4: POWER QUERY FUNDAMENTALS
    // ==========================================

    // Slide 31: Section Divider - PART 4
    {
      id: 31,
      slideNumber: '31 / 44',
      type: 'section-divider',
      partNumber: 'PART 4',
      sectionTitle: 'Power Query Introduction',
      subtitle: 'Connecting, Cleaning, and Reshaping Data Without Writing Code',
      darkTheme: true
    },

    // Slide 32: What is Power Query?
    {
      id: 32,
      slideNumber: '32 / 44',
      type: 'concept-card',
      topRightTag: 'POWER QUERY',
      topLeftTag: 'ETL TOOLKIT',
      subBadge: 'FOUNDATION',
      mainTitle: 'What is Power Query?',
      highlightedWords: ['What is Power Query?'],
      subtitle: 'A built-in Excel tool that connects, cleans, and reshapes data before it ever hits a worksheet.',
      pillars: [
        {
          title: 'Import Data',
          desc: 'Connect to files (CSV, Excel), folders, databases & web APIs.',
          iconName: 'FileSpreadsheet'
        },
        {
          title: 'Clean Data',
          desc: 'Remove errors, blank rows, extra spaces & inconsistent values.',
          iconName: 'Trash2'
        },
        {
          title: 'Transform Data',
          desc: 'Reshape rows & columns into the exact layout needed for analysis.',
          iconName: 'RefreshCw'
        },
        {
          title: 'Load Data',
          desc: 'Deliver clean, ready-to-use tables directly into Excel or Data Model.',
          iconName: 'Database'
        }
      ],
      didYouKnow: 'Power Query automatically records every transformation step you perform — so you can review, edit, or reuse the exact same cleaning process next time with a single click of Refresh!'
    },

    // Slide 33: Why Use Power Query?
    {
      id: 33,
      slideNumber: '33 / 44',
      type: 'table-comparison',
      topRightTag: 'POWER QUERY',
      topLeftTag: 'AUTOMATION VS MANUAL',
      subBadge: 'WHY POWER QUERY',
      mainTitle: 'Why Use Power Query?',
      highlightedWords: ['Why Use Power Query?'],
      subtitle: 'The same clean-up work, two very different ways.',
      manualPoints: [
        'Remove duplicates manually cell by cell ❌',
        'Fix date formats manually every month ❌',
        'Split text columns using Text-to-Columns wizard ❌',
        'Delete blank rows line by line ❌',
        'Change data types manually cell range ❌',
        'Re-do all work from scratch when new file arrives ❌'
      ],
      powerQueryPoints: [
        'Remove Duplicates in 1 Click ✅',
        'Fix Dates automatically with Data Types ✅',
        'Split Names dynamically by delimiter ✅',
        'Remove Blank Rows instantly across dataset ✅',
        'Enforce strict Data Types across columns ✅',
        'Click Refresh to re-run pipeline on new data! ✅'
      ],
      quote: '"Automate repetitive data prep work and focus on strategic analysis."'
    },

    // Slide 34: Power Query 5-Stage Workflow
    {
      id: 34,
      slideNumber: '34 / 44',
      type: 'workflow-5stage',
      topRightTag: 'POWER QUERY',
      topLeftTag: 'END-TO-END PIPELINE',
      subBadge: '5 STAGES',
      mainTitle: 'Power Query Workflow',
      highlightedWords: ['Power Query Workflow'],
      subtitle: 'Five distinct stages from raw files to finished interactive dashboard analysis.',
      stages: [
        { num: '1', title: 'Import', desc: 'Connect to your data source (CSV, Excel, Database)' },
        { num: '2', title: 'Clean', desc: 'Remove errors, blanks, and null rows' },
        { num: '3', title: 'Transform', desc: 'Reshape rows, columns, and text structures' },
        { num: '4', title: 'Load', desc: 'Send clean tables into Excel worksheets' },
        { num: '5', title: 'Analyze', desc: 'Build Pivot Tables, charts & executive dashboards' }
      ]
    },

    // Slide 35: Where Can We Find Power Query?
    {
      id: 35,
      slideNumber: '35 / 44',
      type: 'location-card',
      topRightTag: 'POWER QUERY',
      topLeftTag: 'EXCEL NAVIGATION',
      subBadge: 'NAVIGATING EXCEL',
      mainTitle: 'Where Can We Find Power Query?',
      highlightedWords: ['Where Can We Find Power Query?'],
      subtitle: 'Access Power Query directly inside standard Microsoft Excel without installing add-ins.',
      steps: [
        'Excel Worksheets',
        'Data Tab',
        'Get Data Menu',
        'Power Query Editor'
      ],
      features: [
        {
          title: 'Get Data',
          desc: 'Connect to files, databases, web sources & folders.',
          iconName: 'Database'
        },
        {
          title: 'Queries & Connections',
          desc: 'See every query and its data source in a dedicated side pane.',
          iconName: 'Layers'
        },
        {
          title: 'Refresh All',
          desc: 'Update every query instantly with latest incoming source data.',
          iconName: 'RefreshCw'
        }
      ]
    },

    // Slide 36: Power Query Editor Overview
    {
      id: 36,
      slideNumber: '36 / 44',
      type: 'editor-overview',
      topRightTag: 'POWER QUERY',
      topLeftTag: 'EDITOR INTERFACE',
      subBadge: 'INTERFACE TOUR',
      mainTitle: 'Power Query Editor Overview',
      highlightedWords: ['Power Query Editor Overview'],
      subtitle: 'One dedicated editor window, six essential functional areas to know.',
      areas: [
        { title: 'Ribbon', desc: 'Commands & transformation tools organized by tab.' },
        { title: 'Queries Pane', desc: 'Lists every active query connection in workbook.' },
        { title: 'Data Preview Grid', desc: 'Live interactive preview of current cleaned table.' },
        { title: 'Applied Steps', desc: 'Sequential recorded history of every cleaning action.' },
        { title: 'Formula Bar', desc: 'Displays the underlying Power Query M code for each step.' },
        { title: 'Column Headers', desc: 'Data type indicators and quick column filter drop-downs.' }
      ]
    },

    // Slide 37: Common Tasks in Power Query
    {
      id: 37,
      slideNumber: '37 / 44',
      type: 'tasks-grid',
      topRightTag: 'POWER QUERY',
      topLeftTag: 'CLEANING ACTIONS',
      subBadge: 'EVERYDAY TASKS',
      mainTitle: 'Common Cleaning Tasks in Power Query',
      highlightedWords: ['Common Cleaning Tasks'],
      subtitle: 'Everyday cleaning actions, all just a few clicks away.',
      tasks: [
        { title: 'Remove Duplicates', desc: 'Keep only unique data rows', iconName: 'Copy' },
        { title: 'Split Columns', desc: 'Break one field into several columns', iconName: 'Columns' },
        { title: 'Trim Spaces', desc: 'Clear extra leading & trailing spaces', iconName: 'Scissors' },
        { title: 'Replace Values', desc: 'Swap errors or bad text for right value', iconName: 'RefreshCw' },
        { title: 'Change Data Types', desc: 'Set text, number, date & boolean types', iconName: 'Binary' },
        { title: 'Filter Rows', desc: 'Keep only specific data rows needed', iconName: 'Filter' },
        { title: 'Sort Data', desc: 'Order rows ascending or descending', iconName: 'ArrowUpDown' },
        { title: 'Rename Columns', desc: 'Give headers clear, consistent names', iconName: 'Edit3' },
        { title: 'Refresh Data', desc: 'Re-run every step on new raw data', iconName: 'RotateCw' }
      ]
    },

    // Slide 38: Excel Formulas vs Power Query
    {
      id: 38,
      slideNumber: '38 / 44',
      type: 'formulas-vs-pq',
      topRightTag: 'ARCHITECTURE COMPARISON',
      topLeftTag: 'FORMULAS VS POWER QUERY',
      subBadge: 'CORE DIFFERENCE',
      mainTitle: 'Excel Formulas vs Power Query',
      highlightedWords: ['Excel Formulas vs Power Query'],
      subtitle: 'Two different jobs — both essential for data analysts.',
      comparisons: [
        { aspect: 'Scope', formulas: 'Cell-based calculations', pq: 'Table-based transformations' },
        { aspect: 'Execution', formulas: 'Manual or row-by-row formulas', pq: 'Automated ETL recorded steps' },
        { aspect: 'Data Refresh', formulas: 'Recalculates on cell edit', pq: 'Refreshable pipeline on raw source' },
        { aspect: 'Primary Role', formulas: 'Calculations & Business Logic', pq: 'Data Preparation & Cleaning' }
      ],
      headline: 'Excel formulas calculate. Power Query prepares data.'
    },

    // Slide 39: Live Demo Preview Step-by-Step
    {
      id: 39,
      slideNumber: '39 / 44',
      type: 'live-demo-preview',
      topRightTag: 'LIVE DEMO',
      topLeftTag: 'STEP-BY-STEP WORKFLOW',
      subBadge: 'PRACTICAL DEMO',
      mainTitle: 'Live Demo Step-by-Step Preview',
      highlightedWords: ['Live Demo Step-by-Step'],
      subtitle: 'What we will build together in the interactive lab, step by step.',
      steps: [
        { num: '1', title: 'Import File', desc: 'Load messy raw CSV customer export' },
        { num: '2', title: 'Remove Blank Rows', desc: 'Strip empty rows across dataset' },
        { num: '3', title: 'Fix Data Types', desc: 'Convert text dates and prices to numeric' },
        { num: '4', title: 'Split Full Name', desc: 'Separate names into First & Last Name' },
        { num: '5', title: 'Remove Duplicates', desc: 'Deduplicate records by Customer ID' },
        { num: '6', title: 'Close & Load', desc: 'Deliver clean table to Excel worksheet' }
      ]
    },

    // Slide 40: Interactive Power Query Simulator
    {
      id: 40,
      slideNumber: '40 / 44',
      type: 'interactive-pq-sim',
      topRightTag: 'INTERACTIVE PQ SIMULATOR',
      topLeftTag: 'TRANSFORMATION PIPELINE',
      subBadge: 'SIMULATOR LAB',
      mainTitle: 'Interactive Power Query Transformation Simulator',
      highlightedWords: ['Power Query Transformation Simulator'],
      subtitle: 'Watch a messy raw customer table transform step-by-step through Power Query Applied Steps.',
      darkTheme: false
    },

    // Slide 41: Data Type Handling in Power Query
    {
      id: 41,
      slideNumber: '41 / 44',
      type: 'concept-card',
      topRightTag: 'POWER QUERY',
      topLeftTag: 'DATA INTEGRITY',
      subBadge: 'DATA TYPES',
      mainTitle: 'Data Types & Error Handling in Power Query',
      highlightedWords: ['Data Types & Error Handling'],
      subtitle: 'Enforce strict column data types to guarantee calculation accuracy.',
      pillars: [
        { title: 'Text (abc)', desc: 'For names, addresses, product codes, and descriptions.', iconName: 'FileText' },
        { title: 'Decimal / Whole (123)', desc: 'For currency, sales amounts, quantities, and metrics.', iconName: 'Hash' },
        { title: 'Date / Time', desc: 'For transaction dates, timestamps, and reporting periods.', iconName: 'Calendar' },
        { title: 'True / False (Boolean)', desc: 'For status flags, active accounts, and binary indicators.', iconName: 'CheckSquare' }
      ],
      didYouKnow: 'If a string contains invalid numeric characters (e.g. "$1,200.00abc"), Power Query shows an Error value. You can replace errors or remove error rows in 1 click!'
    },

    // Slide 42: Best Practices for Advanced Functions & PQ
    {
      id: 42,
      slideNumber: '42 / 44',
      type: 'best-practices',
      topRightTag: 'ANALYST BEST PRACTICES',
      topLeftTag: 'GOLDEN RULES',
      subBadge: 'BEST PRACTICES',
      mainTitle: 'Best Practices for Formulas & Power Query',
      highlightedWords: ['Best Practices'],
      subtitle: 'Essential rules to follow for error-free, automated Excel reporting models.',
      rules: [
        'Always clean and prepare data in Power Query BEFORE applying complex formulas.',
        'Always specify exact match (FALSE or 0) when using VLOOKUP or HLOOKUP.',
        'Prefer XLOOKUP over VLOOKUP whenever Excel 365 / 2021 is available.',
        'Wrap risky lookup formulas with IFERROR or IFNA to prevent #N/A display.',
        'Document complex nested formulas with column header notes for team clarity.'
      ],
      businessExample: 'A shared team workbook with consistent, self-updating, error-free financial models.'
    },

    // Slide 43: Key Takeaways
    {
      id: 43,
      slideNumber: '43 / 44',
      type: 'six-cards',
      topRightTag: 'SUMMARY',
      topLeftTag: 'KEY TAKEAWAYS',
      subBadge: 'SUMMARY',
      mainTitle: 'Key Takeaways from Session 05',
      highlightedWords: ['Key Takeaways'],
      subtitle: 'Core principles to retain as you progress toward advanced analytics mastery:',
      cards: [
        {
          title: 'Saves Hours of Manual Work',
          description: 'Text functions & Power Query eliminate tedious line-by-line cell cleaning.',
          iconName: 'Clock'
        },
        {
          title: 'Automates Repetitive Workflows',
          description: 'Click Refresh to run recorded ETL transformations on new monthly data files.',
          iconName: 'RefreshCw'
        },
        {
          title: 'Improves Data Quality',
          description: 'Enforces strict data types, removes whitespace, and strips duplicates automatically.',
          iconName: 'CheckCircle2'
        },
        {
          title: 'Flexible Lookup Architecture',
          description: 'Mastering XLOOKUP and INDEX/MATCH enables lookups in any direction across tables.',
          iconName: 'Search'
        },
        {
          title: 'Dynamic Array Power',
          description: 'FILTER, UNIQUE, and SORT create live, auto-expanding reports without VBA.',
          iconName: 'Zap'
        },
        {
          title: 'Essential Data Analyst Skill',
          description: 'Power Query is the cornerstone of modern Excel, Power BI, and SQL analytics pipelines.',
          iconName: 'Award'
        }
      ]
    },

    // Slide 44: Course Summary & Grand Outro Slide (Unified Format)
    {
      id: 44,
      slideNumber: '44 / 44',
      type: 'outro',
      topRightTag: 'SESSION COMPLETE',
      topLeftTag: 'SESSION 05 WRAP-UP',
      subBadge: 'COURSE PROGRESS',
      mainTitle: 'Course Summary & Wrap-Up',
      highlightedWords: ['Summary & Wrap-Up'],
      subtitle: 'Mastered text cleaning, lookup algorithms, dynamic arrays, and ETL data pipelines with Power Query.',
      nextSessionTitle: 'UP NEXT: Session 06 · Power Query Deep Dive',
      nextSessionSubtitle: 'Data Cleaning · Merge Queries · Append Queries · Pivot/Unpivot · Group By · Real Business Project',
      darkTheme: true
    }
  ]
};
