import { ChapterPresentation } from '../types';

export const dataAnalysisSession02EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-02',
  chapterTitle: 'Session 02: Excel Basics — Interface, Formulas & Core Functions',
  courseName: 'Data Analysis Diploma • Session 02',
  duration: 'Duration: 3 Hours',
  totalSlides: 29,
  slides: [
  {
    "id": 1,
    "slideNumber": "01 / 29",
    "type": "intro",
    "topRightTag": "DATA ANALYSIS DIPLOMA \u2022 SESSION 02",
    "topLeftTag": "EXCEL BASICS",
    "subBadge": "SESSION 02: EXCEL BASICS",
    "mainTitle": "Excel Basics: Interface, Formulas & Core Functions",
    "highlightedWords": [
      "Excel Basics",
      "Interface, Formulas & Core Functions"
    ],
    "subtitle": "Master the core building blocks of Microsoft Excel for professional data analysis.",
    "darkTheme": true
  },
  {
    "id": 2,
    "slideNumber": "02 / 29",
    "type": "six-cards",
    "topRightTag": "GETTING STARTED",
    "topLeftTag": "EXCEL BASICS \u2022 SESSION 02",
    "subBadge": "LEARNING OBJECTIVES",
    "mainTitle": "Session Objectives (6 Core Pillars)",
    "highlightedWords": [
      "Session Objectives"
    ],
    "subtitle": "By the end of this session, you will be able to master 6 core pillars of Excel:",
    "cards": [
      {
        "title": "Navigate Excel efficiently",
        "description": "Move confidently around the ribbon, sheets, and workbook.",
        "iconName": "Compass"
      },
      {
        "title": "Understand workbook structure",
        "description": "Know how workbooks, worksheets, and cells relate.",
        "iconName": "Layers"
      },
      {
        "title": "Create formulas correctly",
        "description": "Write clean, accurate formulas using proper syntax.",
        "iconName": "Calculator"
      },
      {
        "title": "Master cell references",
        "description": "Apply relative, absolute, and mixed references with confidence.",
        "iconName": "Anchor"
      },
      {
        "title": "Use core Excel functions",
        "description": "Apply the most common statistical, logical & text functions.",
        "iconName": "Function"
      },
      {
        "title": "Perform basic data analysis",
        "description": "Summarize and interpret data like a real analyst.",
        "iconName": "BarChart3"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 3,
    "slideNumber": "03 / 29",
    "type": "definition-with-cards",
    "topRightTag": "PART 2 \u00b7 EXCEL INTERFACE",
    "topLeftTag": "FOUNDATIONS \u2022 SESSION 02",
    "subBadge": "OVERVIEW",
    "mainTitle": "What is Microsoft Excel?",
    "highlightedWords": [
      "Microsoft Excel"
    ],
    "subtitle": "A spreadsheet application for organizing, calculating, and analyzing data in rows and columns.",
    "definitionBox": {
      "label": "Why Data Analysts use it",
      "bullets": [
        "Fast, flexible calculations on any size dataset",
        "Built-in functions for statistics & logic",
        "Universal format every business understands",
        "Perfect for prototyping before scaling to code"
      ]
    },
    "cards": [
      {
        "title": "Financial Analysis",
        "description": "Budgets, forecasts, and P&L modeling.",
        "iconName": "TrendingUp"
      },
      {
        "title": "HR Reporting",
        "description": "Headcount, salary bands, attendance tracking.",
        "iconName": "Users"
      },
      {
        "title": "Sales Performance",
        "description": "Pipeline tracking and commission calculations.",
        "iconName": "Briefcase"
      },
      {
        "title": "Operations",
        "description": "Inventory counts and process dashboards.",
        "iconName": "Building"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 4,
    "slideNumber": "04 / 29",
    "type": "workbook-vs-worksheet",
    "topRightTag": "PART 2 \u00b7 EXCEL INTERFACE",
    "topLeftTag": "STRUCTURE \u2022 SESSION 02",
    "subBadge": "FILE ORGANIZATION",
    "mainTitle": "Workbook vs. Worksheet",
    "highlightedWords": [
      "Workbook vs. Worksheet"
    ],
    "subtitle": "Understanding how Excel structures data files and individual grid sheets.",
    "cards": [
      {
        "title": "Workbook",
        "description": "One saved Excel file (.xlsx) that can hold many worksheets \u2014 think of it as a binder.",
        "badge": "File Container"
      },
      {
        "title": "Worksheet",
        "description": "A single grid/tab inside the workbook where your data actually lives.",
        "badge": "Single Grid"
      },
      {
        "title": "Multiple Sheets",
        "description": "Use separate sheets to organize related data \u2014 e.g. one per month, region, or team.",
        "badge": "Data Tabs"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 5,
    "slideNumber": "05 / 29",
    "type": "rows-cols-cells",
    "topRightTag": "PART 2 \u00b7 EXCEL INTERFACE",
    "topLeftTag": "GRID ANATOMY \u2022 SESSION 02",
    "subBadge": "GRID ELEMENTS",
    "mainTitle": "Rows, Columns & Cells",
    "highlightedWords": [
      "Rows, Columns & Cells"
    ],
    "subtitle": "The fundamental building blocks of every Excel spreadsheet grid.",
    "cards": [
      {
        "title": "Column",
        "description": "Vertical, labeled with letters (A, B, C...)."
      },
      {
        "title": "Row",
        "description": "Horizontal, labeled with numbers (1, 2, 3...)."
      },
      {
        "title": "Cell",
        "description": "The intersection of a row and a column."
      },
      {
        "title": "Cell Address",
        "description": "Column letter + row number, e.g. C2."
      },
      {
        "title": "Range",
        "description": "A group of cells, e.g. B2:C4."
      },
      {
        "title": "Active Cell",
        "description": "The cell currently selected and ready for input."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 6,
    "slideNumber": "06 / 29",
    "type": "data-types",
    "topRightTag": "PART 2 \u00b7 EXCEL INTERFACE",
    "topLeftTag": "DATA TYPES \u2022 SESSION 02",
    "subBadge": "CORE INPUT TYPES",
    "mainTitle": "Data Types in Excel",
    "highlightedWords": [
      "Data Types in Excel"
    ],
    "subtitle": "Understanding how Excel handles and formats different kinds of information.",
    "cards": [
      {
        "title": "Number",
        "example": "1250",
        "description": "Quantities, IDs, measurements.",
        "iconName": "Hash"
      },
      {
        "title": "Text",
        "example": "\"Cairo\"",
        "description": "Names, labels, categories.",
        "iconName": "Type"
      },
      {
        "title": "Date",
        "example": "27/07/2026",
        "description": "Timelines, deadlines, logs.",
        "iconName": "Calendar"
      },
      {
        "title": "Currency",
        "example": "$4,500.00",
        "description": "Prices, salaries, budgets.",
        "iconName": "DollarSign"
      },
      {
        "title": "Percentage",
        "example": "18%",
        "description": "Growth rates, ratios, shares.",
        "iconName": "Percent"
      },
      {
        "title": "Boolean",
        "example": "TRUE / FALSE",
        "description": "Logical checks & flags.",
        "iconName": "ToggleLeft"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 7,
    "slideNumber": "07 / 29",
    "type": "basic-navigation",
    "topRightTag": "PART 2 \u00b7 EXCEL INTERFACE",
    "topLeftTag": "SPEED & SHORTCUTS \u2022 SESSION 02",
    "subBadge": "EFFICIENT WORKFLOW",
    "mainTitle": "Basic Navigation & Shortcuts",
    "highlightedWords": [
      "Basic Navigation"
    ],
    "subtitle": "Essential keyboard shortcuts and view modes to navigate large datasets quickly.",
    "shortcuts": [
      {
        "keys": "Ctrl + Arrow",
        "desc": "Jump to the edge of a data block."
      },
      {
        "keys": "Ctrl + Home",
        "desc": "Jump straight to cell A1."
      },
      {
        "keys": "Ctrl + End",
        "desc": "Jump to the last used cell."
      },
      {
        "keys": "Shift + Arrow",
        "desc": "Extend a selection cell by cell."
      }
    ],
    "cards": [
      {
        "title": "Selecting Cells & Ranges",
        "description": "Click a cell to select it. Click-drag, or Shift + click, to select a range. Ctrl + click to select non-adjacent cells."
      },
      {
        "title": "Freeze Panes",
        "description": "View \u2192 Freeze Panes keeps header rows or columns visible while you scroll through large datasets."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 8,
    "slideNumber": "08 / 29",
    "type": "excel-best-practices",
    "topRightTag": "PART 2 \u00b7 EXCEL INTERFACE",
    "topLeftTag": "BEST PRACTICES \u2022 SESSION 02",
    "subBadge": "CLEAN DATA HABITS",
    "mainTitle": "Excel Best Practices",
    "highlightedWords": [
      "Best Practices"
    ],
    "subtitle": "Habits that keep your data analysis-ready from day one.",
    "cards": [
      {
        "title": "Don't merge cells",
        "description": "Merged cells break sorting, filtering, and formulas."
      },
      {
        "title": "Keep one header row",
        "description": "A single clear header keeps tools like Tables and PivotTables reliable."
      },
      {
        "title": "Avoid blank rows",
        "description": "Gaps break AutoFill, ranges, and Table detection."
      },
      {
        "title": "Convert to Tables (Ctrl+T)",
        "description": "Tables auto-expand ranges and structure formulas."
      },
      {
        "title": "Keep consistent formatting",
        "description": "Uniform dates/numbers prevent silent calculation errors."
      }
    ],
    "darkTheme": true
  },
  {
    "id": 9,
    "slideNumber": "09 / 29",
    "type": "formula-intro",
    "topRightTag": "PART 3 \u00b7 FORMULAS",
    "topLeftTag": "FORMULA BASICS \u2022 SESSION 02",
    "subBadge": "SYNTAX & RULES",
    "mainTitle": "Introduction to Formulas",
    "highlightedWords": [
      "Introduction to Formulas"
    ],
    "subtitle": "A formula is an instruction that tells Excel to calculate a result from values or cell references.",
    "formulaExample": "=A1+A2",
    "formulaRuleNote": "Every formula starts with an equals sign ( = )",
    "rules": [
      "Always begins with =",
      "Can combine numbers, cell references, and operators",
      "Functions use parentheses: =SUM(A1:A5)",
      "Press Enter to calculate, F2 to edit"
    ],
    "formulaBarInfo": "The Formula Bar shows exactly what's typed in the active cell \u2014 even if the cell itself displays only the calculated result.",
    "darkTheme": false
  },
  {
    "id": 10,
    "slideNumber": "10 / 29",
    "type": "arithmetic-operators",
    "topRightTag": "PART 3 \u00b7 FORMULAS",
    "topLeftTag": "OPERATORS \u2022 SESSION 02",
    "subBadge": "MATH SYMBOLS",
    "mainTitle": "Arithmetic Operators",
    "highlightedWords": [
      "Arithmetic Operators"
    ],
    "subtitle": "The core mathematical symbols used for formulas in Excel.",
    "cards": [
      {
        "symbol": "+",
        "name": "Addition",
        "formula": "=A1+B1"
      },
      {
        "symbol": "\u2212",
        "name": "Subtraction",
        "formula": "=A1-B1"
      },
      {
        "symbol": "\u00d7",
        "name": "Multiplication",
        "formula": "=A1*B1"
      },
      {
        "symbol": "\u00f7",
        "name": "Division",
        "formula": "=A1/B1"
      },
      {
        "symbol": "^",
        "name": "Exponent",
        "formula": "=A1^2"
      },
      {
        "symbol": "( )",
        "name": "Grouping",
        "formula": "=(A1+B1)*C1"
      }
    ],
    "footerNote": "Practical example: to calculate total pay from hourly rate and hours worked, use =B2*C2 (rate \u00d7 hours).",
    "darkTheme": false
  },
  {
    "id": 11,
    "slideNumber": "11 / 29",
    "type": "order-of-operations",
    "topRightTag": "PART 3 \u00b7 FORMULAS",
    "topLeftTag": "PEMDAS \u2022 SESSION 02",
    "subBadge": "CALCULATION ORDER",
    "mainTitle": "Order of Operations (PEMDAS)",
    "highlightedWords": [
      "Order of Operations"
    ],
    "subtitle": "Excel follows the same math order you learned in school \u2014 PEMDAS.",
    "pemdasSteps": [
      {
        "letter": "P",
        "name": "Parentheses"
      },
      {
        "letter": "E",
        "name": "Exponents"
      },
      {
        "letter": "M",
        "name": "Multiplication"
      },
      {
        "letter": "D",
        "name": "Division"
      },
      {
        "letter": "A",
        "name": "Addition"
      },
      {
        "letter": "S",
        "name": "Subtraction"
      }
    ],
    "exampleFormula": "=(B2+B3)*2",
    "exampleSteps": [
      "1. Parentheses first: B2 + B3 = 400 + 600 = 1,000",
      "2. Then multiply: 1,000 \u00d7 2 = 2,000"
    ],
    "darkTheme": false
  },
  {
    "id": 12,
    "slideNumber": "12 / 29",
    "type": "cell-reference-relative",
    "topRightTag": "PART 3 \u00b7 FORMULAS \u00b7 CELL REFERENCES",
    "topLeftTag": "CELL REFERENCES \u2022 SESSION 02",
    "subBadge": "RELATIVE REFERENCE",
    "mainTitle": "Relative Reference",
    "highlightedWords": [
      "Relative Reference"
    ],
    "subtitle": "The default reference type. When copied, it shifts automatically to match its new position.",
    "reasons": [
      "Copying =A1+B1 down to row 2 becomes =A2+B2 automatically.",
      "Perfect for repeating the same calculation across many rows.",
      "Default type whenever you type a plain cell reference."
    ],
    "scenarioNote": "Data Analysis scenario: calculating \"Total = Price \u00d7 Quantity\" for every row of a sales sheet \u2014 one formula, copied down hundreds of rows.",
    "darkTheme": false
  },
  {
    "id": 13,
    "slideNumber": "13 / 29",
    "type": "cell-reference-absolute",
    "topRightTag": "PART 3 \u00b7 FORMULAS \u00b7 CELL REFERENCES",
    "topLeftTag": "CELL REFERENCES \u2022 SESSION 02",
    "subBadge": "ABSOLUTE REFERENCE",
    "mainTitle": "Absolute Reference",
    "highlightedWords": [
      "Absolute Reference"
    ],
    "subtitle": "Locked with $ signs. Stays fixed on the same cell no matter where the formula is copied.",
    "syntax": "=A2*$B$1",
    "explanation": "The $ symbol \"pins\" the column and/or row so it never changes when copied.",
    "whyItMatters": "Every row needs to multiply by the same fixed tax rate in D5 \u2014 the $D$5 anchor keeps pointing to that one cell as the formula is copied down.",
    "tip": "Press F4 to quickly toggle a reference between relative, absolute, and mixed.",
    "darkTheme": false
  },
  {
    "id": 14,
    "slideNumber": "14 / 29",
    "type": "cell-reference-mixed",
    "topRightTag": "PART 3 \u00b7 FORMULAS \u00b7 CELL REFERENCES",
    "topLeftTag": "CELL REFERENCES \u2022 SESSION 02",
    "subBadge": "MIXED REFERENCE",
    "mainTitle": "Mixed Reference",
    "highlightedWords": [
      "Mixed Reference"
    ],
    "subtitle": "Locks only the column OR the row, letting the other side shift freely when copied.",
    "colLocked": {
      "syntax": "$A1",
      "desc": "Column locked, row shifts",
      "detail": "Copying across keeps column A; copying down moves the row number."
    },
    "rowLocked": {
      "syntax": "A$1",
      "desc": "Row locked, column shifts",
      "detail": "Copying across moves the column letter; copying down keeps row 1."
    },
    "scenario": "To build a grid where every row multiplies by a row-header value and every column multiplies by a column-header value, use =$A2*B$1 \u2014 this is the classic case where BOTH a locked column ($A2) and a locked row (B$1) work together in the same formula.",
    "darkTheme": false
  },
  {
    "id": 15,
    "slideNumber": "15 / 29",
    "type": "reference-types-matrix",
    "topRightTag": "PART 3 \u00b7 FORMULAS \u00b7 CELL REFERENCES",
    "topLeftTag": "SUMMARY MATRIX \u2022 SESSION 02",
    "subBadge": "COMPARISON TABLE",
    "mainTitle": "Reference Types at a Glance",
    "highlightedWords": [
      "Reference Types at a Glance"
    ],
    "subtitle": "Quick comparison of all cell reference types in Excel.",
    "matrix": [
      {
        "type": "Relative",
        "example": "A1",
        "col": "Shifts",
        "row": "Shifts",
        "bestUsedFor": "Repeating the same calc down many rows"
      },
      {
        "type": "Absolute",
        "example": "$A$1",
        "col": "Locked",
        "row": "Locked",
        "bestUsedFor": "A fixed constant (tax rate, exchange rate)"
      },
      {
        "type": "Mixed (col)",
        "example": "$A1",
        "col": "Locked",
        "row": "Shifts",
        "bestUsedFor": "Grids referencing one fixed column"
      },
      {
        "type": "Mixed (row)",
        "example": "A$1",
        "col": "Shifts",
        "row": "Locked",
        "bestUsedFor": "Grids referencing one fixed row"
      }
    ],
    "keyTakeaway": "Key Takeaway: press F4 while editing a formula to cycle through all four reference types instantly \u2014 no need to type $ signs by hand.",
    "darkTheme": false
  },
  {
    "id": 16,
    "slideNumber": "16 / 29",
    "type": "copying-formulas",
    "topRightTag": "PART 3 \u00b7 FORMULAS",
    "topLeftTag": "AUTOFILL & DRAG \u2022 SESSION 02",
    "subBadge": "EFFICIENT WORKFLOW",
    "mainTitle": "Copying Formulas",
    "highlightedWords": [
      "Copying Formulas"
    ],
    "subtitle": "Techniques for quickly propagating formulas across large columns and grids.",
    "cards": [
      {
        "title": "Fill Handle",
        "description": "Drag the small square at the bottom-right corner of a cell to copy a formula into adjacent cells."
      },
      {
        "title": "AutoFill",
        "description": "Excel detects a pattern (numbers, dates, formulas) and continues it automatically as you drag."
      },
      {
        "title": "Double-Click Fill Handle",
        "description": "Double-click the fill handle to instantly copy a formula down an entire adjacent data column."
      }
    ],
    "illustrationText": "Illustration: dragging C2 (=A2*B2) down to C5 (=A5*B5)",
    "darkTheme": false
  },
  {
    "id": 17,
    "slideNumber": "17 / 29",
    "type": "formula-errors",
    "topRightTag": "PART 3 \u00b7 FORMULAS",
    "topLeftTag": "ERROR DIAGNOSTICS \u2022 SESSION 02",
    "subBadge": "TROUBLESHOOTING",
    "mainTitle": "Common Formula Errors",
    "highlightedWords": [
      "Common Formula Errors"
    ],
    "subtitle": "Identify and fix common calculation error codes in Excel.",
    "errors": [
      {
        "code": "#DIV/0!",
        "reason": "Dividing by zero or an empty cell.",
        "example": "=A2/B2 when B2 is blank",
        "fix": "Wrap in IFERROR or check the denominator first."
      },
      {
        "code": "#VALUE!",
        "reason": "Wrong data type used in a calculation.",
        "example": "=A2+\"Text\"",
        "fix": "Ensure all referenced cells contain numbers."
      },
      {
        "code": "#NAME?",
        "reason": "Excel doesn't recognize a function/name.",
        "example": "=SU M(A1:A5) \u2014 typo",
        "fix": "Check spelling of function names and named ranges."
      },
      {
        "code": "#REF!",
        "reason": "A referenced cell was deleted.",
        "example": "Deleting column B used in =B2*2",
        "fix": "Fix the reference or undo the deletion (Ctrl+Z)."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 18,
    "slideNumber": "18 / 29",
    "type": "formula-best-practices",
    "topRightTag": "PART 3 \u00b7 FORMULAS",
    "topLeftTag": "BEST PRACTICES \u2022 SESSION 02",
    "subBadge": "ACCURACY & CLARITY",
    "mainTitle": "Formula Best Practices",
    "highlightedWords": [
      "Formula Best Practices"
    ],
    "subtitle": "Write clean, readable, and error-free spreadsheet calculations.",
    "cards": [
      {
        "title": "Use Parentheses",
        "description": "Group calculations explicitly instead of relying on default order of operations."
      },
      {
        "title": "Avoid Hard-Coding",
        "description": "Reference a cell instead of typing a fixed number directly into a formula."
      },
      {
        "title": "Reference Cells, Not Values",
        "description": "=B2*C2 updates automatically; =20*5 never does."
      },
      {
        "title": "Keep Formulas Readable",
        "description": "Break long formulas into helper columns when they get hard to read."
      }
    ],
    "darkTheme": true
  },
  {
    "id": 19,
    "slideNumber": "19 / 29",
    "type": "statistical-functions",
    "topRightTag": "PART 4 \u00b7 CORE FUNCTIONS \u00b7 STATISTICAL",
    "topLeftTag": "STATISTICAL FUNCTIONS \u2022 SESSION 02",
    "subBadge": "CORE AGGREGATIONS",
    "mainTitle": "SUM, AVERAGE, MIN & MAX",
    "highlightedWords": [
      "SUM, AVERAGE, MIN & MAX"
    ],
    "subtitle": "Essential statistical functions to summarize numerical columns.",
    "cards": [
      {
        "name": "SUM",
        "syntax": "=SUM(B2:B10)",
        "desc": "Adds all values in a range.",
        "useCase": "Total monthly sales."
      },
      {
        "name": "AVERAGE",
        "syntax": "=AVERAGE(B2:B10)",
        "desc": "Calculates the mean of a range.",
        "useCase": "Average order value."
      },
      {
        "name": "MIN",
        "syntax": "=MIN(B2:B10)",
        "desc": "Finds the smallest value.",
        "useCase": "Lowest price in stock."
      },
      {
        "name": "MAX",
        "syntax": "=MAX(B2:B10)",
        "desc": "Finds the largest value.",
        "useCase": "Top performer's sales."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 20,
    "slideNumber": "20 / 29",
    "type": "count-functions",
    "topRightTag": "PART 4 \u00b7 CORE FUNCTIONS \u00b7 STATISTICAL",
    "topLeftTag": "COUNTING & DATA QUALITY \u2022 SESSION 02",
    "subBadge": "DATA INSPECTION",
    "mainTitle": "COUNT, COUNTA & COUNTBLANK",
    "highlightedWords": [
      "COUNT, COUNTA & COUNTBLANK"
    ],
    "subtitle": "Functions for counting dataset entries and checking data completeness.",
    "cards": [
      {
        "name": "COUNT",
        "syntax": "=COUNT(B2:B10)",
        "desc": "Counts cells containing numbers only."
      },
      {
        "name": "COUNTA",
        "syntax": "=COUNTA(B2:B10)",
        "desc": "Counts all non-empty cells (any type)."
      },
      {
        "name": "COUNTBLANK",
        "syntax": "=COUNTBLANK(B2:B10)",
        "desc": "Counts empty cells in a range."
      }
    ],
    "useCaseNote": "Business Use Case \u2014 Data Quality Check: Compare COUNTA (total filled entries) against COUNT (numeric entries only) in a \"Salary\" column \u2014 a gap between the two numbers instantly flags rows where salary was entered as text or left blank, before it breaks a downstream SUM or AVERAGE.",
    "darkTheme": false
  },
  {
    "id": 21,
    "slideNumber": "21 / 29",
    "type": "if-function",
    "topRightTag": "PART 4 \u00b7 CORE FUNCTIONS \u00b7 LOGICAL",
    "topLeftTag": "LOGICAL DECISIONS \u2022 SESSION 02",
    "subBadge": "DECISION LOGIC",
    "mainTitle": "The IF Function",
    "highlightedWords": [
      "The IF Function"
    ],
    "subtitle": "Tests a condition, then returns one value if TRUE and another if FALSE.",
    "syntax": "=IF(logical_test, value_if_true, value_if_false)",
    "condition": "Condition: B2>=60",
    "trueVal": "TRUE \u2192 \"Pass\"",
    "falseVal": "FALSE \u2192 \"Fail\"",
    "examples": [
      {
        "title": "Sales bonus:",
        "formula": "=IF(C2>10000,\"Bonus\",\"No Bonus\")"
      },
      {
        "title": "Attendance flag:",
        "formula": "=IF(D2<90%,\"At Risk\",\"OK\")"
      },
      {
        "title": "Stock alert:",
        "formula": "=IF(E2<10,\"Reorder\",\"In Stock\")"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 22,
    "slideNumber": "22 / 29",
    "type": "rounding-functions",
    "topRightTag": "PART 4 \u00b7 CORE FUNCTIONS \u00b7 ROUNDING",
    "topLeftTag": "NUMERIC PRECISION \u2022 SESSION 02",
    "subBadge": "ROUNDING RULES",
    "mainTitle": "ROUND, ROUNDUP & ROUNDDOWN",
    "highlightedWords": [
      "ROUND, ROUNDUP & ROUNDDOWN"
    ],
    "subtitle": "Functions for controlling decimal precision in calculated metrics.",
    "cards": [
      {
        "name": "ROUND",
        "syntax": "=ROUND(A2,2)",
        "desc": "Rounds to the nearest value \u2014 up or down.",
        "example": "4.567 \u2192 4.57"
      },
      {
        "name": "ROUNDUP",
        "syntax": "=ROUNDUP(A2,2)",
        "desc": "Always rounds away from zero.",
        "example": "4.561 \u2192 4.57"
      },
      {
        "name": "ROUNDDOWN",
        "syntax": "=ROUNDDOWN(A2,2)",
        "desc": "Always rounds toward zero (truncates).",
        "example": "4.569 \u2192 4.56"
      }
    ],
    "useCaseNote": "Real use case: rounding calculated prices to 2 decimal places (cents) before displaying them to customers, or rounding units shipped down (ROUNDDOWN) so you never promise more stock than truly available.",
    "darkTheme": false
  },
  {
    "id": 23,
    "slideNumber": "23 / 29",
    "type": "conditional-functions",
    "topRightTag": "PART 4 \u00b7 CORE FUNCTIONS \u00b7 CONDITIONAL",
    "topLeftTag": "CONDITIONAL MATH \u2022 SESSION 02",
    "subBadge": "CRITERIA FILTERING",
    "mainTitle": "SUMIF, COUNTIF & AVERAGEIF",
    "highlightedWords": [
      "SUMIF, COUNTIF & AVERAGEIF"
    ],
    "subtitle": "Perform mathematical and statistical aggregations based on specific criteria.",
    "cards": [
      {
        "name": "SUMIF",
        "badge": "Finance",
        "syntax": "=SUMIF(C2:C10,\"Sales\",D2:D10)",
        "desc": "Total expenses only in the \"Marketing\" or \"Sales\" department."
      },
      {
        "name": "COUNTIF",
        "badge": "HR",
        "syntax": "=COUNTIF(C2:C10,\"Cairo\")",
        "desc": "Count employees based in the Cairo office."
      },
      {
        "name": "AVERAGEIF",
        "badge": "Sales",
        "syntax": "=AVERAGEIF(C2:C10,\"Sales\",E2:E10)",
        "desc": "Average deal size for the Sales team only."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 24,
    "slideNumber": "24 / 29",
    "type": "text-functions-1",
    "topRightTag": "PART 4 \u00b7 CORE FUNCTIONS \u00b7 TEXT",
    "topLeftTag": "TEXT EXTRACTION \u2022 SESSION 02",
    "subBadge": "STRING MANIPULATION",
    "mainTitle": "LEN, LEFT, RIGHT & MID",
    "highlightedWords": [
      "LEN, LEFT, RIGHT & MID"
    ],
    "subtitle": "Extract specific characters or measure character lengths in text cells.",
    "cards": [
      {
        "name": "LEN",
        "syntax": "=LEN(A2)",
        "example": "\"Cairo\" \u2192 5",
        "desc": "Counts the number of characters in text."
      },
      {
        "name": "LEFT",
        "syntax": "=LEFT(A2,3)",
        "example": "\"Cairo\" \u2192 \"Cai\"",
        "desc": "Extracts characters from the start."
      },
      {
        "name": "RIGHT",
        "syntax": "=RIGHT(A2,2)",
        "example": "\"Cairo\" \u2192 \"ro\"",
        "desc": "Extracts characters from the end."
      },
      {
        "name": "MID",
        "syntax": "=MID(A2,2,3)",
        "example": "\"Cairo\" \u2192 \"air\"",
        "desc": "Extracts characters from the middle."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 25,
    "slideNumber": "25 / 29",
    "type": "text-functions-2",
    "topRightTag": "PART 4 \u00b7 CORE FUNCTIONS \u00b7 TEXT",
    "topLeftTag": "DATA CLEANING \u2022 SESSION 02",
    "subBadge": "TEXT STANDARDIZATION",
    "mainTitle": "TRIM, UPPER, LOWER & PROPER",
    "highlightedWords": [
      "TRIM, UPPER, LOWER & PROPER"
    ],
    "subtitle": "Clean and format messy text data before running calculations or joins.",
    "cards": [
      {
        "name": "TRIM",
        "syntax": "=TRIM(A2)",
        "example": "\" Cairo \" \u2192 \"Cairo\"",
        "desc": "Removes extra leading, trailing & double spaces."
      },
      {
        "name": "UPPER",
        "syntax": "=UPPER(A2)",
        "example": "\"cairo\" \u2192 \"CAIRO\"",
        "desc": "Converts text to all uppercase."
      },
      {
        "name": "LOWER",
        "syntax": "=LOWER(A2)",
        "example": "\"CAIRO\" \u2192 \"cairo\"",
        "desc": "Converts text to all lowercase."
      },
      {
        "name": "PROPER",
        "syntax": "=PROPER(A2)",
        "example": "\"cairo city\" \u2192 \"Cairo City\"",
        "desc": "Capitalizes the first letter of each word."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 26,
    "slideNumber": "26 / 29",
    "type": "employee-dataset",
    "topRightTag": "PART 5 \u00b7 GUIDED PRACTICE",
    "topLeftTag": "DATASET OVERVIEW \u2022 SESSION 02",
    "subBadge": "SAMPLE DATASET",
    "mainTitle": "Meet the Employee Dataset",
    "highlightedWords": [
      "Employee Dataset"
    ],
    "subtitle": "We'll use this sample dataset for every exercise in this section \u2014 follow along in your own workbook.",
    "headers": [
      "Employee ID",
      "Name",
      "Department",
      "City",
      "Salary",
      "Bonus",
      "Age"
    ],
    "rows": [
      [
        "E001",
        "Aya Hassan",
        "Sales",
        "Cairo",
        "18,500",
        "2,000",
        "29"
      ],
      [
        "E002",
        "Omar Nabil",
        "Finance",
        "Giza",
        "22,000",
        "1,500",
        "34"
      ],
      [
        "E003",
        "Sara Adel",
        "HR",
        "Cairo",
        "15,750",
        "1,000",
        "26"
      ],
      [
        "E004",
        "Karim Fathy",
        "Sales",
        "Alexandria",
        "19,200",
        "2,500",
        "31"
      ]
    ],
    "fieldsList": "Fields: Employee ID \u00b7 Name \u00b7 Department \u00b7 City \u00b7 Salary \u00b7 Bonus \u00b7 Age",
    "darkTheme": false
  },
  {
    "id": 27,
    "slideNumber": "27 / 29",
    "type": "guided-practice-exercises",
    "topRightTag": "PART 5 \u00b7 GUIDED PRACTICE",
    "topLeftTag": "HANDS-ON LAB \u2022 SESSION 02",
    "subBadge": "INTERACTIVE TASKS",
    "mainTitle": "Instructor-Led Exercises",
    "highlightedWords": [
      "Instructor-Led Exercises"
    ],
    "subtitle": "7 step-by-step tasks applying formulas to the Employee Dataset.",
    "exercises": [
      {
        "num": "1",
        "title": "Calculate totals",
        "desc": "Find the total salary paid across all employees.",
        "formula": "=SUM(Salary range)"
      },
      {
        "num": "2",
        "title": "Find averages",
        "desc": "What is the average bonus given company-wide?",
        "formula": "=AVERAGE(Bonus range)"
      },
      {
        "num": "3",
        "title": "Identify min & max",
        "desc": "Find the youngest and oldest employee by Age.",
        "formula": "=MIN( ) / =MAX( )"
      },
      {
        "num": "4",
        "title": "Count records",
        "desc": "How many employees work in Sales?",
        "formula": "=COUNTIF(Dept,\"Sales\")"
      },
      {
        "num": "5",
        "title": "Round salary values",
        "desc": "Round every salary to the nearest 100.",
        "formula": "=ROUND(Salary,-2)"
      },
      {
        "num": "6",
        "title": "Classify with IF",
        "desc": "Flag employees as Senior or Junior by age.",
        "formula": "=IF(Age>=30,\"Senior\",\"Junior\")"
      },
      {
        "num": "7",
        "title": "Clean text",
        "desc": "Standardize employee names for a clean report.",
        "formula": "=PROPER(TRIM(Name))"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 28,
    "slideNumber": "28 / 29",
    "type": "session-summary",
    "topRightTag": "PART 6 \u00b7 SUMMARY",
    "topLeftTag": "KEY TAKEAWAYS \u2022 SESSION 02",
    "subBadge": "SUMMARY RECAP",
    "mainTitle": "What We Covered Today",
    "highlightedWords": [
      "What We Covered Today"
    ],
    "subtitle": "Recap of the 6 core pillars of Excel basics mastered today.",
    "cards": [
      {
        "title": "Excel Interface",
        "description": "Ribbon, workbook & worksheet structure, navigation."
      },
      {
        "title": "Rows, Columns & Cells",
        "description": "Addresses, ranges, and data types."
      },
      {
        "title": "Formulas",
        "description": "Syntax, operators, and order of operations."
      },
      {
        "title": "Cell References",
        "description": "Relative, absolute, and mixed references."
      },
      {
        "title": "Core Functions",
        "description": "SUM, IF, ROUND, SUMIF, text functions & more."
      },
      {
        "title": "Best Practices",
        "description": "Clean, error-free, analysis-ready spreadsheets."
      }
    ],
    "darkTheme": true
  },
  {
    "id": 29,
    "slideNumber": "29 / 29",
    "type": "thank-you",
    "topRightTag": "INSTANT ACADEMY",
    "topLeftTag": "EXCEL BASICS \u2022 SESSION 02 COMPLETE",
    "subBadge": "WRAP UP & NEXT STEPS",
    "mainTitle": "Keep Practicing.",
    "highlightedWords": [
      "Keep Practicing."
    ],
    "subtitle": "Every formula you write today builds the foundation for the data analysis skills ahead \u2014 dashboards, PivotTables, and beyond.",
    "cards": [
      {
        "title": "Redo tonight's exercises from memory"
      },
      {
        "title": "Explore 2-3 new formulas on your own data"
      },
      {
        "title": "Bring questions to the next session"
      }
    ],
    "darkTheme": true
  }
]
};

export const dataAnalysisSession02AR: ChapterPresentation = {
  chapterId: 'data-analysis-session-02',
  chapterTitle: 'السيشن الثانية: أساسيات إكسيل — الواجهة، المعادلات، والدوال الأساسية',
  courseName: 'دبلومة تحليل البيانات (Data Analysis Diploma) • السيشن الثانية',
  duration: 'المدة: 3 ساعات',
  totalSlides: 29,
  slides: [
  {
    "id": 1,
    "slideNumber": "01 / 29",
    "type": "intro",
    "topRightTag": "دبلومة تحليل البيانات \u2022 السيشن 02",
    "topLeftTag": "أساسيات إكسيل",
    "subBadge": "SESSION 02: EXCEL BASICS",
    "mainTitle": "أساسيات إكسيل: الواجهة، المعادلات، والدوال الأساسية",
    "highlightedWords": [
      "أساسيات إكسيل",
      "الواجهة، المعادلات، والدوال الأساسية"
    ],
    "subtitle": "احترف اللبنات الأساسية لبرنامج مايكروسوفت إكسيل لبناء نماذج تحليل بيانات قوية واحترافية.",
    "darkTheme": true
  },
  {
    "id": 2,
    "slideNumber": "02 / 29",
    "type": "six-cards",
    "topRightTag": "خارطة التعلم",
    "topLeftTag": "EXCEL BASICS • SESSION 02",
    "subBadge": "أهداف السيشن",
    "mainTitle": "أهداف السيشن: المحاور الـ 6 الأساسية",
    "highlightedWords": [
      "أهداف السيشن"
    ],
    "subtitle": "بنهاية هذه الجلسة، ستكون قادراً على إتقان 6 محاور رئيسية في إكسيل:",
    "cards": [
      {
        "title": "التنقل السريع في إكسيل",
        "description": "التحرك بثقة وسرعة بين الشريط (Ribbon)، الشيتات، وكتاب العمل.",
        "iconName": "Compass"
      },
      {
        "title": "فهم هيكلية ملفات العمل",
        "description": "استيعاب العلاقة بين الـ Workbook والـ Worksheet والخلايا.",
        "iconName": "Layers"
      },
      {
        "title": "كتابة المعادلات بشكل صحيح",
        "description": "صياغة معادلات دقيقة ونظيفة باستخدام القواعد الصحيحة.",
        "iconName": "Calculator"
      },
      {
        "title": "إتقان مراجع الخلايا (References)",
        "description": "تطبيق المراجع النسبية والمطلقة والمختلطة بثقة تامة.",
        "iconName": "Anchor"
      },
      {
        "title": "استخدام الدوال الأساسية",
        "description": "تطبيق أهم الدوال الإحصائية والمنطقية ودوال النصوص.",
        "iconName": "Function"
      },
      {
        "title": "تنفيذ تحليل بيانات مبدئي",
        "description": "تلخيص البيانات وتفسيرها كأنك محلل بيانات محترف.",
        "iconName": "BarChart3"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 3,
    "slideNumber": "03 / 29",
    "type": "definition-with-cards",
    "topRightTag": "الجزء الثاني · واجهة إكسيل",
    "topLeftTag": "أساسيات • SESSION 02",
    "subBadge": "نظرة عامة",
    "mainTitle": "ما هو برنامج مايكروسوفت إكسيل؟",
    "highlightedWords": [
      "مايكروسوفت إكسيل"
    ],
    "subtitle": "تطبيق الجداول الإلكترونية المخصص لتنظيم وحساب وتحليل البيانات في صفوف وأعمدة.",
    "definitionBox": {
      "label": "ليه محللي البيانات بيستخدموا إكسيل؟",
      "bullets": [
        "حسابات سريعة ومرنة على أي حجم بيانات",
        "دوال مدمجة للإحصاء والطقس والمنطق",
        "صيغة عالمية يفهمها كل بيزنس وشركة",
        "أفضل أداة للنمذجة السريعة قبل الانتقال للكود"
      ]
    },
    "cards": [
      {
        "title": "التحليل المالي",
        "description": "الميزانيات، التوقعات المالية، ونمذجة الأرباح والخسائر.",
        "iconName": "TrendingUp"
      },
      {
        "title": "تقارير الموارد البشرية",
        "description": "تتبع الموظفين، شرائح المرتبات، ومتابعة الحضور.",
        "iconName": "Users"
      },
      {
        "title": "أداء المبيعات",
        "description": "تتبع صفقات المبيعات وحساب العمولات.",
        "iconName": "Briefcase"
      },
      {
        "title": "العمليات واللوجستيات",
        "description": "إدارة المخزون ولوحات متابعة سير العمل.",
        "iconName": "Building"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 4,
    "slideNumber": "04 / 29",
    "type": "workbook-vs-worksheet",
    "topRightTag": "الجزء الثاني · واجهة إكسيل",
    "topLeftTag": "الهيكلية • SESSION 02",
    "subBadge": "تنظيم الملفات",
    "mainTitle": "كتاب العمل مقابل ورقة العمل (Workbook vs. Worksheet)",
    "highlightedWords": [
      "Workbook vs. Worksheet"
    ],
    "subtitle": "فهم إزاي إكسيل بينظم ملفات البيانات والشيتات الداخلية.",
    "cards": [
      {
        "title": "Workbook (كتاب العمل)",
        "description": "ملف إكسيل المحفوظ بالكامل (.xlsx) — تخيله كأنه دوسيه كبير بيحتوي على عدة شيتات.",
        "badge": "الملف الكامل"
      },
      {
        "title": "Worksheet (ورقة العمل)",
        "description": "شيت أو جدول منفرد جوه الملف وهو المكان اللي بياناتك بتعيش فيه فعلياً.",
        "badge": "الجدول الداخلي"
      },
      {
        "title": "Multiple Sheets (شيتات متعددة)",
        "description": "استخدام شيتات منفصلة لتنظيم البيانات المرتبطة — مثل شيت لكل شهر أو منطقة أو فريق.",
        "badge": "تبويبات البيانات"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 5,
    "slideNumber": "05 / 29",
    "type": "rows-cols-cells",
    "topRightTag": "الجزء الثاني · واجهة إكسيل",
    "topLeftTag": "تشريح شبكة إكسيل • SESSION 02",
    "subBadge": "مكونات الشبكة",
    "mainTitle": "الصفوف، الأعمدة، والخلايا (Rows, Columns & Cells)",
    "highlightedWords": [
      "الصفوف، الأعمدة، والخلايا"
    ],
    "subtitle": "اللبنات الأساسية لشبكة أي شيت إكسيل.",
    "cards": [
      {
        "title": "Column (العمود)",
        "description": "رأسي، ومسمى بالحروف الإنجليزية (A, B, C...)."
      },
      {
        "title": "Row (الصف)",
        "description": "أفقي، ومسمى بالأرقام (1, 2, 3...)."
      },
      {
        "title": "Cell (الخلية)",
        "description": "نقطة تقاطع صف مع عمود."
      },
      {
        "title": "Cell Address (عنوان الخلية)",
        "description": "حرف العمود + رقم الصف، مثل C2."
      },
      {
        "title": "Range (النطاق)",
        "description": "مجموعة خلايا محددة معاً، مثل B2:C4."
      },
      {
        "title": "Active Cell (الخلية النشطة)",
        "description": "الخلية المحددة حالياً والمستعدة لاستقبال الكتابة."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 6,
    "slideNumber": "06 / 29",
    "type": "data-types",
    "topRightTag": "الجزء الثاني · واجهة إكسيل",
    "topLeftTag": "أنواع البيانات • SESSION 02",
    "subBadge": "أنواع المدخلات",
    "mainTitle": "أنواع البيانات في إكسيل (Data Types)",
    "highlightedWords": [
      "أنواع البيانات في إكسيل"
    ],
    "subtitle": "فهم إزاي إكسيل بيتعامل مع كل نوع بيانات وبيفرمه.",
    "cards": [
      {
        "title": "Number (رقم)",
        "example": "1250",
        "description": "الكميات، الأكواد، والقياسات.",
        "iconName": "Hash"
      },
      {
        "title": "Text (نص)",
        "example": "\"القاهرة\"",
        "description": "الأسماء، العناوين، والتصنيفات.",
        "iconName": "Type"
      },
      {
        "title": "Date (تاريخ)",
        "example": "27/07/2026",
        "description": "التواريخ، المواعيد، والسجلات.",
        "iconName": "Calendar"
      },
      {
        "title": "Currency (عملة)",
        "example": "$4,500.00",
        "description": "الأسعار، المرتبات، والميزانيات.",
        "iconName": "DollarSign"
      },
      {
        "title": "Percentage (نسبة مئوية)",
        "example": "18%",
        "description": "معدلات النمو، النسب، والحصص.",
        "iconName": "Percent"
      },
      {
        "title": "Boolean (منطقي)",
        "example": "TRUE / FALSE",
        "description": "الفحوصات والشروط المنطقية.",
        "iconName": "ToggleLeft"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 7,
    "slideNumber": "07 / 29",
    "type": "basic-navigation",
    "topRightTag": "الجزء الثاني · واجهة إكسيل",
    "topLeftTag": "السرعة والاختصارات • SESSION 02",
    "subBadge": "سرعة العمل",
    "mainTitle": "التنقل السريع والاختصارات الأساسية",
    "highlightedWords": [
      "التنقل السريع والاختصارات"
    ],
    "subtitle": "سرّع طريقة شغلك واختصر الوقت باختصارات الكيبورد وطرق العرض.",
    "shortcuts": [
      {
        "keys": "Ctrl + Arrow",
        "desc": "القفز الفوري لحافة بلوك البيانات."
      },
      {
        "keys": "Ctrl + Home",
        "desc": "القفز المباشر للخلية الأولى A1."
      },
      {
        "keys": "Ctrl + End",
        "desc": "القفز لآخر خلية مستخدمة في الشيت."
      },
      {
        "keys": "Shift + Arrow",
        "desc": "توسيع تحديد الخلايا خلية بخلية."
      }
    ],
    "cards": [
      {
        "title": "تحديد الخلايا والنطاقات",
        "description": "اضغط على الخلية لتحديدها. اسحب بالماوس أو اضغط Shift + Click لتحديد نطاق. استخدم Ctrl + Click لتحديد خلايا غير متجاوِرة."
      },
      {
        "title": "تثبيت الأجزاء (Freeze Panes)",
        "description": "من قائمة View ← Freeze Panes لتثبيت صف العناوين أو العمود الأول أثناء التمرير في الجداول الكبيرة."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 8,
    "slideNumber": "08 / 29",
    "type": "excel-best-practices",
    "topRightTag": "الجزء الثاني · واجهة إكسيل",
    "topLeftTag": "أفضل الممارسات • SESSION 02",
    "subBadge": "عادات البيانات النظيفة",
    "mainTitle": "أفضل الممارسات في إكسيل (Best Practices)",
    "highlightedWords": [
      "أفضل الممارسات في إكسيل"
    ],
    "subtitle": "عادات تضمن إن بياناتك تفضل جاهزة للتحليل من أول يوم بدون أخطاء.",
    "cards": [
      {
        "title": "بلاش دمج خلايا (Don't Merge)",
        "description": "دمج الخلايا بيكسر الفرز (Sorting) والفلترة والمعادلات."
      },
      {
        "title": "خلي صف عناوين واحد بس",
        "description": "صف عناوين واحد واضح بيخلي أدوات مثل Tables و PivotTables تشتغل بثبات."
      },
      {
        "title": "تجنب الصفوف الفارغة",
        "description": "الفراغات بتكسر الـ AutoFill ونطاقات البيانات واكتشاف الجداول."
      },
      {
        "title": "حول البيانات لجداول (Ctrl+T)",
        "description": "الجداول بتوسع النطاقات تلقائياً وبتنظم معادلاتك."
      },
      {
        "title": "حافظ على تنسيق موحد",
        "description": "التنسيق الموحد التواريخ والأرقام بيحمي من أخطاء الحسابات الخفية."
      }
    ],
    "darkTheme": true
  },
  {
    "id": 9,
    "slideNumber": "09 / 29",
    "type": "formula-intro",
    "topRightTag": "الجزء الثالث · المعادلات",
    "topLeftTag": "أساسيات المعادلات • SESSION 02",
    "subBadge": "القواعد والصياغة",
    "mainTitle": "مقدمة في كتابة المعادلات (Formulas)",
    "highlightedWords": [
      "كتابة المعادلات"
    ],
    "subtitle": "المعادلة هي أمر بتديه لإكسيل عشان يحسب نتيجة من قيم أو مراجع خلايا.",
    "formulaExample": "=A1+A2",
    "formulaRuleNote": "أي معادلة في إكسيل لازم تبدأ بعلامة يساوي ( = )",
    "rules": [
      "تبدأ دائماً بعلامة =",
      "تقدر تجمع بين أرقام، مراجع خلايا، وعوامل حسابية",
      "الدوال بتستخدم الأقواس: =SUM(A1:A5)",
      "اضغط Enter للحساب، و F2 لتعديل المعادلة"
    ],
    "formulaBarInfo": "شريط المعادلات (Formula Bar) بيعرض بالضبط النص المكتوب جوه الخلية — حتى لو الخلية نفسها عارضة النتيجة الحسابية فقط.",
    "darkTheme": false
  },
  {
    "id": 10,
    "slideNumber": "10 / 29",
    "type": "arithmetic-operators",
    "topRightTag": "الجزء الثالث · المعادلات",
    "topLeftTag": "العوامل الحسابية • SESSION 02",
    "subBadge": "الرموز الرياضية",
    "mainTitle": "العوامل الحسابية (Arithmetic Operators)",
    "highlightedWords": [
      "العوامل الحسابية"
    ],
    "subtitle": "الرموز الرياضية الأساسية المستخدمة في معادلات إكسيل.",
    "cards": [
      {
        "symbol": "+",
        "name": "الجمع (Addition)",
        "formula": "=A1+B1"
      },
      {
        "symbol": "−",
        "name": "الطرح (Subtraction)",
        "formula": "=A1-B1"
      },
      {
        "symbol": "×",
        "name": "الضرب (Multiplication)",
        "formula": "=A1*B1"
      },
      {
        "symbol": "÷",
        "name": "القسمة (Division)",
        "formula": "=A1/B1"
      },
      {
        "symbol": "^",
        "name": "الأس (Exponent)",
        "formula": "=A1^2"
      },
      {
        "symbol": "( )",
        "name": "الأقواس (Grouping)",
        "formula": "=(A1+B1)*C1"
      }
    ],
    "footerNote": "مثال عملي: لحساب إجمالي الأجر من أجر الساعة وعدد الساعات، بنستخدم =B2*C2 (الأجر × الساعات).",
    "darkTheme": false
  },
  {
    "id": 11,
    "slideNumber": "11 / 29",
    "type": "order-of-operations",
    "topRightTag": "الجزء الثالث · المعادلات",
    "topLeftTag": "ترتيب الحسابات • SESSION 02",
    "subBadge": "أولويات الحساب",
    "mainTitle": "ترتيب العمليات الحسابية (PEMDAS)",
    "highlightedWords": [
      "ترتيب العمليات الحسابية"
    ],
    "subtitle": "إكسيل بيمشي على نفس ترتيب الرياضيات اللي اتعلمناه — قاعدة PEMDAS.",
    "pemdasSteps": [
      {
        "letter": "P",
        "name": "الأقواس (Parentheses)"
      },
      {
        "letter": "E",
        "name": "الأسس (Exponents)"
      },
      {
        "letter": "M",
        "name": "الضرب (Multiplication)"
      },
      {
        "letter": "D",
        "name": "القسمة (Division)"
      },
      {
        "letter": "A",
        "name": "الجمع (Addition)"
      },
      {
        "letter": "S",
        "name": "الطرح (Subtraction)"
      }
    ],
    "exampleFormula": "=(B2+B3)*2",
    "exampleSteps": [
      "1. الأقواس أولاً: B2 + B3 = 400 + 600 = 1,000",
      "2. ثم الضرب: 1,000 × 2 = 2,000"
    ],
    "darkTheme": false
  },
  {
    "id": 12,
    "slideNumber": "12 / 29",
    "type": "cell-reference-relative",
    "topRightTag": "الجزء الثالث · مراجع الخلايا",
    "topLeftTag": "مراجع الخلايا • SESSION 02",
    "subBadge": "المرجع النسبي",
    "mainTitle": "المرجع النسبي (Relative Reference)",
    "highlightedWords": [
      "المرجع النسبي"
    ],
    "subtitle": "النوع الافتراضي في إكسيل. لما بتنسخ المعادلة، بتتغير المراجع تلقائياً لتناسب مكانها الجديد.",
    "reasons": [
      "نسخ المعادلة =A1+B1 للصف السفلي بيخليها تتحول لـ =A2+B2 تلقائياً.",
      "مثالية لتكرار نفس الحسبة على صفوف كتير جداً.",
      "النوع الافتراضي بمجرد ما تكتب اسم خلية عادي."
    ],
    "scenarioNote": "سيناريو تحليل بيانات: حساب \"الإجمالي = السعر × الكمية\" لكل صف في شيت المبيعات — معادلة واحدة بتتسحب على مئات الصفوف.",
    "darkTheme": false
  },
  {
    "id": 13,
    "slideNumber": "13 / 29",
    "type": "cell-reference-absolute",
    "topRightTag": "الجزء الثالث · مراجع الخلايا",
    "topLeftTag": "تثبيت الخلايا • SESSION 02",
    "subBadge": "المرجع المطلق",
    "mainTitle": "المرجع المطلق وتثبيت الخلايا (Absolute Reference)",
    "highlightedWords": [
      "المرجع المطلق وتثبيت الخلايا"
    ],
    "subtitle": "مقفول بعلامات دولار $. بيثبت على نفس الخلية مهما نسخت المعادلة لأي مكان.",
    "syntax": "=A2*$B$1",
    "explanation": "علامة الـ $ بتثبت العمود أو الصف عشان ميتغيروش أثناء النسخ.",
    "whyItMatters": "كل صف محتاج ينضرب في نفس نسبة الضريبة الثابتة في D5 — تثبيت $D$5 بيضمن إن المعادلة تفضل تشاور على الخلية دي بالضبط لما تتنسخ لتحت.",
    "tip": "اضغط F4 بسرعة للتنقل بين المرجع النسبي والمطلق والمختلط.",
    "darkTheme": false
  },
  {
    "id": 14,
    "slideNumber": "14 / 29",
    "type": "cell-reference-mixed",
    "topRightTag": "الجزء الثالث · مراجع الخلايا",
    "topLeftTag": "المراجع المختلطة • SESSION 02",
    "subBadge": "التثبيت الجزئي",
    "mainTitle": "المرجع المختلط (Mixed Reference)",
    "highlightedWords": [
      "المرجع المختلط"
    ],
    "subtitle": "بيثبت العمود فقط أو الصف فقط، ويسيب الجانب التاني يتحرك براحته عند النسخ.",
    "colLocked": {
      "syntax": "$A1",
      "desc": "العمود ثابت، الصف بيتحرك",
      "detail": "النسخ بالعرض بيحافظ على العمود A؛ النسخ لتحت بيغير رقم الصف."
    },
    "rowLocked": {
      "syntax": "A$1",
      "desc": "الصف ثابت، العمود بيتحرك",
      "detail": "النسخ بالعرض بيغير حرف العمود؛ النسخ لتحت بيحافظ على الصف 1."
    },
    "scenario": "عشان تبني جدول ضرب متكامل كل صف ينضرب في قيمة رأس الصف وكل عمود ينضرب في قيمة رأس العمود، بنستخدم =$A2*B$1 — الحالة الكلاسيكية الشهيرة لاستخدام تثبيت العمود والصف معاً.",
    "darkTheme": false
  },
  {
    "id": 15,
    "slideNumber": "15 / 29",
    "type": "reference-types-matrix",
    "topRightTag": "الجزء الثالث · مراجع الخلايا",
    "topLeftTag": "جدول المقارنة • SESSION 02",
    "subBadge": "مصفوفة أنواع المراجع",
    "mainTitle": "جدول مقارنة أنواع مراجع الخلايا",
    "highlightedWords": [
      "جدول مقارنة أنواع مراجع الخلايا"
    ],
    "subtitle": "مقارنة سريعة وشاملة بين كل أنواع مراجع الخلايا في إكسيل.",
    "matrix": [
      {
        "type": "Relative (نسبي)",
        "example": "A1",
        "col": "بيتحرك",
        "row": "بيتحرك",
        "bestUsedFor": "تكرار نفس الحسبة على صفوف متعددة"
      },
      {
        "type": "Absolute (مطلق)",
        "example": "$A$1",
        "col": "ثابت",
        "row": "ثابت",
        "bestUsedFor": "قيم ثابتة مثل نسبة الضريبة أو سعر الصرف"
      },
      {
        "type": "Mixed col (عمود ثابت)",
        "example": "$A1",
        "col": "ثابت",
        "row": "بيتحرك",
        "bestUsedFor": "جداول تشاور على عمود رئيسي واحد"
      },
      {
        "type": "Mixed row (صف ثابت)",
        "example": "A$1",
        "col": "بيتحرك",
        "row": "ثابت",
        "bestUsedFor": "جداول تشاور على صف عناوين واحد"
      }
    ],
    "keyTakeaway": "نصيحة ذهبية: اضغط F4 أثناء تعديل أي معادلة للتنقل الفوري بين الأنواع الأربعة بدون كتابة علامات $ بإيدك.",
    "darkTheme": false
  },
  {
    "id": 16,
    "slideNumber": "16 / 29",
    "type": "copying-formulas",
    "topRightTag": "الجزء الثالث · المعادلات",
    "topLeftTag": "التعبئة والنسخ • SESSION 02",
    "subBadge": "سير العمل السريع",
    "mainTitle": "طرق نسخ وتعميم المعادلات (Copying Formulas)",
    "highlightedWords": [
      "نسخ وتعميم المعادلات"
    ],
    "subtitle": "تقنيات تسرّع تطبيق المعادلات على أعمدة وجداول ضخمة.",
    "cards": [
      {
        "title": "Fill Handle (مقبض التعبئة)",
        "description": "اسحب المربع الصغير في الزاوية السفلى من الخلية لنسخ المعادلة للخلايا المجاورة."
      },
      {
        "title": "AutoFill (التعبئة التلقائية)",
        "description": "إكسيل بيكتشف النمط (أرقام، تواريخ، معادلات) ويكمله تلقائياً أثناء السحب."
      },
      {
        "title": "Double-Click Fill Handle",
        "description": "اضغط دبل كليك على مقبض التعبئة لنسخ المعادلة فوراً لآخر عمود البيانات بالكامل."
      }
    ],
    "illustrationText": "توضيح: سحب الخلية C2 (=A2*B2) لأسفل حتى C5 (=A5*B5)",
    "darkTheme": false
  },
  {
    "id": 17,
    "slideNumber": "17 / 29",
    "type": "formula-errors",
    "topRightTag": "الجزء الثالث · المعادلات",
    "topLeftTag": "تشخيص الأخطاء • SESSION 02",
    "subBadge": "حل المشكلات",
    "mainTitle": "أشهر أخطاء المعادلات وكيفية علاجها",
    "highlightedWords": [
      "أشهر أخطاء المعادلات"
    ],
    "subtitle": "دليل تشخيص واكتشاف أكواد الأخطاء الشائعة في إكسيل.",
    "errors": [
      {
        "code": "#DIV/0!",
        "reason": "القسمة على صفر أو خلية فارغة.",
        "example": "=A2/B2 لما B2 تكون فاضية",
        "fix": "استخدم دالة IFERROR أو افحص المقام أولاً."
      },
      {
        "code": "#VALUE!",
        "reason": "استخدام نوع بيانات غير صحيح في الحسبة.",
        "example": "=A2+\"نص\"",
        "fix": "تأكد إن كل الخلايا المشار إليها بتحتوي أرقام."
      },
      {
        "code": "#NAME?",
        "reason": "إكسيل مش للتعرف على اسم الدالة (خطأ إملائي).",
        "example": "=SU M(A1:A5) — typo",
        "fix": "راجع كتابة حروف اسم الدالة جيداً."
      },
      {
        "code": "#REF!",
        "reason": "تم حذف خلية أو عمود كان مشار إليه.",
        "example": "حذف العمود B المستخدَم في =B2*2",
        "fix": "صلّح مرجع الخلية أو اعمل تراجع (Ctrl+Z)."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 18,
    "slideNumber": "18 / 29",
    "type": "formula-best-practices",
    "topRightTag": "الجزء الثالث · المعادلات",
    "topLeftTag": "أفضل الممارسات • SESSION 02",
    "subBadge": "الدقة والوضوح",
    "mainTitle": "أفضل ممارسات كتابة المعادلات",
    "highlightedWords": [
      "أفضل ممارسات كتابة المعادلات"
    ],
    "subtitle": "طرق تضمن لك كتابة معادلات نظيفة، سهلة القراءة، وخالية من الأخطاء.",
    "cards": [
      {
        "title": "استخدم الأقواس دائماً",
        "description": "حدد مجموعات الحسابات بوضوح بدلاً من الاعتماد التام على أولويات الحساب الافتراضية."
      },
      {
        "title": "بلاش أرقام ثابته جوه المعادلة",
        "description": "شاور على خلية تحتوي الرقم بدلاً من كتابة رقم ثابت مباشر جوه النص."
      },
      {
        "title": "شاور على خلايا مش قيم",
        "description": "المعادلة =B2*C2 بتتحدث تلقائياً مع تغير البيانات؛ =20*5 عمرها ما بتتحدث."
      },
      {
        "title": "حافظ على سهولة القراءة",
        "description": "قسّم المعادلات الطويلة جداً على أعمدة مساعدة (Helper Columns) لما تعقد."
      }
    ],
    "darkTheme": true
  },
  {
    "id": 19,
    "slideNumber": "19 / 29",
    "type": "statistical-functions",
    "topRightTag": "الجزء الرابع · الدوال الأساسية · الإحصائية",
    "topLeftTag": "الدوال الإحصائية • SESSION 02",
    "subBadge": "التجميعات الأساسية",
    "mainTitle": "الدوال الإحصائية الأساسية (SUM, AVERAGE, MIN, MAX)",
    "highlightedWords": [
      "الدوال الإحصائية الأساسية"
    ],
    "subtitle": "أهم الدوال الإحصائية لتلخيص الأعمدة الرقمية في إكسيل.",
    "cards": [
      {
        "name": "SUM",
        "syntax": "=SUM(B2:B10)",
        "desc": "بتجمع كل القيم في النطاق المحدد.",
        "useCase": "إجمالي المبيعات الشهرية."
      },
      {
        "name": "AVERAGE",
        "syntax": "=AVERAGE(B2:B10)",
        "desc": "بتخصب المتوسط الحسابي للنطاق.",
        "useCase": "متوسط قيمة الأوردر."
      },
      {
        "name": "MIN",
        "syntax": "=MIN(B2:B10)",
        "desc": "بتطلع أقل وأصغر قيمة في النطاق.",
        "useCase": "أقل سعر منتج في المخزن."
      },
      {
        "name": "MAX",
        "syntax": "=MAX(B2:B10)",
        "desc": "بتطلع أعلى وأكبر قيمة في النطاق.",
        "useCase": "أعلى رقم مبيعات حققه موظف."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 20,
    "slideNumber": "20 / 29",
    "type": "count-functions",
    "topRightTag": "الجزء الرابع · الدوال الأساسية · الإحصائية",
    "topLeftTag": "العد وجودة البيانات • SESSION 02",
    "subBadge": "فحص البيانات",
    "mainTitle": "دوال العد وفحص جودة البيانات (COUNT, COUNTA, COUNTBLANK)",
    "highlightedWords": [
      "دوال العد وفحص جودة البيانات"
    ],
    "subtitle": "دوال لحساب عدد السجلات واكتشاف الفراغات وأخطاء التنسيق.",
    "cards": [
      {
        "name": "COUNT",
        "syntax": "=COUNT(B2:B10)",
        "desc": "بتعد الخلايا اللي بتحتوي أرقام فقط."
      },
      {
        "name": "COUNTA",
        "syntax": "=COUNTA(B2:B10)",
        "desc": "بتعد كل الخلايا غير الفارغة (أي نوع بيانات)."
      },
      {
        "name": "COUNTBLANK",
        "syntax": "=COUNTBLANK(B2:B10)",
        "desc": "بتعد الخلايا الفارغة فقط جوه النطاق."
      }
    ],
    "useCaseNote": "سيناريو بيزنس — فحص جودة البيانات: قارن نتيجة COUNTA (إجمالي الخلايا المليانة) بنتيجة COUNT (الخلايا الرقمية بس) في عمود \"المرتبات\" — أي فرق بين الرقمين هيكشفلك فوراً الخلايا المكتوبة كـ نص أو فاضية قبل ما تكسر حسبة الـ SUM أو الـ AVERAGE.",
    "darkTheme": false
  },
  {
    "id": 21,
    "slideNumber": "21 / 29",
    "type": "if-function",
    "topRightTag": "الجزء الرابع · الدوال الأساسية · المنطقية",
    "topLeftTag": "القرارات المنطقية • SESSION 02",
    "subBadge": "منطق القرارات",
    "mainTitle": "دالة الشرط (The IF Function)",
    "highlightedWords": [
      "دالة الشرط"
    ],
    "subtitle": "بتفحص شرط معين، وترجع قيمة لو الشرط أتحقق (TRUE) وقيمة تانية لو مأتحققش (FALSE).",
    "syntax": "=IF(logical_test, value_if_true, value_if_false)",
    "condition": "الشرط: B2>=60",
    "trueVal": "تحقق الشرط ← \"ناجح\"",
    "falseVal": "لم يتحقق الشرط ← \"راسب\"",
    "examples": [
      {
        "title": "بونص المبيعات:",
        "formula": "=IF(C2>10000,\"Bonus\",\"No Bonus\")"
      },
      {
        "title": "تنبيه الحضور:",
        "formula": "=IF(D2<90%,\"At Risk\",\"OK\")"
      },
      {
        "title": "تنبيه المخزون:",
        "formula": "=IF(E2<10,\"Reorder\",\"In Stock\")"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 22,
    "slideNumber": "22 / 29",
    "type": "rounding-functions",
    "topRightTag": "الجزء الرابع · الدوال الأساسية · التقريب",
    "topLeftTag": "الدقة الرقمية • SESSION 02",
    "subBadge": "قواعد التقريب",
    "mainTitle": "دوال التقريب (ROUND, ROUNDUP, ROUNDDOWN)",
    "highlightedWords": [
      "دوال التقريب"
    ],
    "subtitle": "التحكم في عدد الخانات العشرية وتقريب الأرقام حسب متطلبات البيزنس.",
    "cards": [
      {
        "name": "ROUND",
        "syntax": "=ROUND(A2,2)",
        "desc": "بتأقرب لأقرب قيمة — أعلى أو أقل حسب الرقم.",
        "example": "4.567 → 4.57"
      },
      {
        "name": "ROUNDUP",
        "syntax": "=ROUNDUP(A2,2)",
        "desc": "بتأقرب دائماً للأعلى بعيداً عن الصفر.",
        "example": "4.561 → 4.57"
      },
      {
        "name": "ROUNDDOWN",
        "syntax": "=ROUNDDOWN(A2,2)",
        "desc": "بتأقرب دائماً للأقل (قطع الخانات).",
        "example": "4.569 → 4.56"
      }
    ],
    "useCaseNote": "تطبيق عملي: تقريب الأسعار المحسوبة لخانتين عشريتين (القروش) قبل عرضها للعملاء، أو تقريب عدد الوحدات المشحونة للأقل (ROUNDDOWN) عشان متوعدش بتسليم بضاعة مش متوفرة في المخزن.",
    "darkTheme": false
  },
  {
    "id": 23,
    "slideNumber": "23 / 29",
    "type": "conditional-functions",
    "topRightTag": "الجزء الرابع · الدوال الأساسية · المشروطة",
    "topLeftTag": "الحساب المشروط • SESSION 02",
    "subBadge": "تجميع المعايير",
    "mainTitle": "الدوال المشروطة (SUMIF, COUNTIF, AVERAGEIF)",
    "highlightedWords": [
      "الدوال المشروطة"
    ],
    "subtitle": "تنفيذ عمليات الجمع والعد والمتوسط بناءً على شروط ومعايير محددة.",
    "cards": [
      {
        "name": "SUMIF",
        "badge": "المالية",
        "syntax": "=SUMIF(C2:C10,\"Sales\",D2:D10)",
        "desc": "جمع مصاريف قسم المبيعات أو التسويق فقط."
      },
      {
        "name": "COUNTIF",
        "badge": "HR",
        "syntax": "=COUNTIF(C2:C10,\"Cairo\")",
        "desc": "عد الموظفين المقيمين في فرع القاهرة فقط."
      },
      {
        "name": "AVERAGEIF",
        "badge": "المبيعات",
        "syntax": "=AVERAGEIF(C2:C10,\"Sales\",E2:E10)",
        "desc": "حساب متوسط قيمة صفقات فريق المبيعات فقط."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 24,
    "slideNumber": "24 / 29",
    "type": "text-functions-1",
    "topRightTag": "الجزء الرابع · الدوال الأساسية · النصوص",
    "topLeftTag": "معالجة النصوص • SESSION 02",
    "subBadge": "استخراج النصوص",
    "mainTitle": "دوال استخراج النصوص (LEN, LEFT, RIGHT, MID)",
    "highlightedWords": [
      "دوال استخراج النصوص"
    ],
    "subtitle": "قياس طول النصوص واستخراج أجزاء محددة من الخلايا النصية.",
    "cards": [
      {
        "name": "LEN",
        "syntax": "=LEN(A2)",
        "example": "\"Cairo\" → 5",
        "desc": "بتعد عدد الحروف والأرقام والمسافات في النص."
      },
      {
        "name": "LEFT",
        "syntax": "=LEFT(A2,3)",
        "example": "\"Cairo\" → \"Cai\"",
        "desc": "بتستخرج عدد حروف معين من بداية النص (الشمال)."
      },
      {
        "name": "RIGHT",
        "syntax": "=RIGHT(A2,2)",
        "example": "\"Cairo\" → \"ro\"",
        "desc": "بتستخرج عدد حروف معين من نهاية النص (اليمين)."
      },
      {
        "name": "MID",
        "syntax": "=MID(A2,2,3)",
        "example": "\"Cairo\" → \"air\"",
        "desc": "بتستخرج عدد حروف معين من وسط النص."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 25,
    "slideNumber": "25 / 29",
    "type": "text-functions-2",
    "topRightTag": "الجزء الرابع · الدوال الأساسية · النصوص",
    "topLeftTag": "تنظيف البيانات • SESSION 02",
    "subBadge": "توحيد النصوص",
    "mainTitle": "دوال تنظيف وتنسيق النصوص (TRIM, UPPER, LOWER, PROPER)",
    "highlightedWords": [
      "تنظيف وتنسيق النصوص"
    ],
    "subtitle": "تنظيف البيانات النصية غير المنظمة وتوحيد شكلها قبل التحليل.",
    "cards": [
      {
        "name": "TRIM",
        "syntax": "=TRIM(A2)",
        "example": "\" Cairo \" → \"Cairo\"",
        "desc": "بتشيل أي مسافات زيادات في البداية والنهاية والمسافات المزدوجة."
      },
      {
        "name": "UPPER",
        "syntax": "=UPPER(A2)",
        "example": "\"cairo\" → \"CAIRO\"",
        "desc": "بتكتب حروف النص بالكامل Capital (حروف كبيرة)."
      },
      {
        "name": "LOWER",
        "syntax": "=LOWER(A2)",
        "example": "\"CAIRO\" → \"cairo\"",
        "desc": "بتكتب حروف النص بالكامل Small (حروف صغيرة)."
      },
      {
        "name": "PROPER",
        "syntax": "=PROPER(A2)",
        "example": "\"cairo city\" → \"Cairo City\"",
        "desc": "بتخلى أول حرف من كل كلمة Capital بأسلوب احترافي."
      }
    ],
    "darkTheme": false
  },
  {
    "id": 26,
    "slideNumber": "26 / 29",
    "type": "employee-dataset",
    "topRightTag": "الجزء الخامس · التطبيق العملي",
    "topLeftTag": "بيانات التدريب • SESSION 02",
    "subBadge": "جدول التدريب",
    "mainTitle": "التعرف على جدول بيانات الموظفين (Employee Dataset)",
    "highlightedWords": [
      "جدول بيانات الموظفين"
    ],
    "subtitle": "جدول البيانات التدريبي اللي هنطبق عليه كل تمارين الجزء دا — تابع معنا في شيتك.",
    "headers": [
      "كود الموظف",
      "الاسم",
      "القسم",
      "المدينة",
      "المرتب",
      "البونص",
      "العمر"
    ],
    "rows": [
      [
        "E001",
        "Aya Hassan",
        "Sales",
        "Cairo",
        "18,500",
        "2,000",
        "29"
      ],
      [
        "E002",
        "Omar Nabil",
        "Finance",
        "Giza",
        "22,000",
        "1,500",
        "34"
      ],
      [
        "E003",
        "Sara Adel",
        "HR",
        "Cairo",
        "15,750",
        "1,000",
        "26"
      ],
      [
        "E004",
        "Karim Fathy",
        "Sales",
        "Alexandria",
        "19,200",
        "2,500",
        "31"
      ]
    ],
    "fieldsList": "الحقول: كود الموظف · الاسم · القسم · المدينة · المرتب · البونص · العمر",
    "darkTheme": false
  },
  {
    "id": 27,
    "slideNumber": "27 / 29",
    "type": "guided-practice-exercises",
    "topRightTag": "الجزء الخامس · التطبيق العملي",
    "topLeftTag": "ورشة العمل • SESSION 02",
    "subBadge": "التمارين التفاعلية",
    "mainTitle": "التمارين التفاعلية بقيادة المحاضر (Instructor-Led Exercises)",
    "highlightedWords": [
      "التمارين التفاعلية"
    ],
    "subtitle": "7 تمارين تطبيقية خطوة بخطوة لتطبيق الدوال على جدول الموظفين.",
    "exercises": [
      {
        "num": "1",
        "title": "حساب الإجماليات",
        "desc": "احسب إجمالي المرتبات المدفوعة لجميع الموظفين.",
        "formula": "=SUM(Salary range)"
      },
      {
        "num": "2",
        "title": "حساب المتوسطات",
        "desc": "ما هو متوسط البونص الممنوح على مستوى الشركة؟",
        "formula": "=AVERAGE(Bonus range)"
      },
      {
        "num": "3",
        "title": "تحديد الأقل والأعلى",
        "desc": "أوجد عمر أصغر موظف وأكبر موظف.",
        "formula": "=MIN( ) / =MAX( )"
      },
      {
        "num": "4",
        "title": "عد السجلات المشروطة",
        "desc": "كم موظف يعمل في قسم المبيعات Sales؟",
        "formula": "=COUNTIF(Dept,\"Sales\")"
      },
      {
        "num": "5",
        "title": "تقريب المرتبات",
        "desc": "قرّب مرتب كل موظف لأقرب 100 جنيه.",
        "formula": "=ROUND(Salary,-2)"
      },
      {
        "num": "6",
        "title": "التصنيف بشرط IF",
        "desc": "صنّف الموظفين كـ Senior أو Junior حسب العمر.",
        "formula": "=IF(Age>=30,\"Senior\",\"Junior\")"
      },
      {
        "num": "7",
        "title": "تنظيف الأسماء",
        "desc": "نسّق ووحد أسماء الموظفين للتقرير النهائي.",
        "formula": "=PROPER(TRIM(Name))"
      }
    ],
    "darkTheme": false
  },
  {
    "id": 28,
    "slideNumber": "28 / 29",
    "type": "session-summary",
    "topRightTag": "الجزء السادس · الملخص",
    "topLeftTag": "خلاصة اليوم • SESSION 02",
    "subBadge": "كبسولة المعرفة",
    "mainTitle": "ملخص ما تم تغطيته اليوم (What We Covered Today)",
    "highlightedWords": [
      "ملخص ما تم تغطيته اليوم"
    ],
    "subtitle": "مراجعة سريعة لأهم 6 محاور تم إتقانها اليوم في أساسيات إكسيل.",
    "cards": [
      {
        "title": "واجهة إكسيل",
        "description": "الشريط العلوي، هيكل الملفات والشيتات، والتنقل السريع."
      },
      {
        "title": "الصفوف والأعمدة والخلايا",
        "description": "عناوين الخلايا، النطاقات، وأنواع البيانات المخلتفة."
      },
      {
        "title": "المعادلات (Formulas)",
        "description": "الصياغة، العوامل الحسابية، وقواعد ترتيب PEMDAS."
      },
      {
        "title": "مراجع الخلايا (Cell References)",
        "description": "المراجع النسبية والمطلقة والمختلطة وتثبيت الـ $."
      },
      {
        "title": "الدوال الأساسية (Core Functions)",
        "description": "SUM و IF و ROUND و SUMIF ودوال التنظيف الإضافية."
      },
      {
        "title": "أفضل الممارسات (Best Practices)",
        "description": "بناء جداول نظيفة، خالية من الأخطاء وجاهزة للتحليل."
      }
    ],
    "darkTheme": true
  },
  {
    "id": 29,
    "slideNumber": "29 / 29",
    "type": "thank-you",
    "topRightTag": "أجب السعي • INSTANT ACADEMY",
    "topLeftTag": "SESSION 02 COMPLETED SUCCESSFULLY",
    "subBadge": "اكتملت الجلسة الثانية بنجاح",
    "mainTitle": "واصل التدريب والممارسة المستمرة",
    "highlightedWords": [
      "واصل التدريب والممارسة المستمرة"
    ],
    "subtitle": "كل معادلة بتكتبها النهاردة بتبني الأساس الماتين لمهارات تحليل البيانات القادمة — الجداول المحورية (PivotTables)، الداشبوردات، وما بعدها.",
    "cards": [
      {
        "title": "أعد حل تمارين اليوم من ذاكرتك بدون النظر للحلول"
      },
      {
        "title": "جرب 2-3 دوال جديدة على بياناتك الشخصية"
      },
      {
        "title": "جهّز أسئلتك للسيشن القادمة لبدء النمذجة المتقدمة"
      }
    ],
    "darkTheme": true
  }
]
};
