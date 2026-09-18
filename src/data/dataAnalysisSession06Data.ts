import { ChapterPresentation } from '../types';

export const dataAnalysisSession06EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-06',
  chapterTitle: 'Session 06: Pivot Tables, Pivot Charts & Power Query',
  courseName: 'Data Analysis Diploma • Session 06',
  duration: 'Duration: 3.5 Hours',
  totalSlides: 44,
  slides: [
    // ==========================================
    // HERO COVER SLIDE (Matching Reference Design)
    // ==========================================
    {
      id: 1,
      slideNumber: '01 / 44',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 06',
      topLeftTag: 'PIVOT TABLES & POWER QUERY',
      subBadge: 'SESSION 6 · ADVANCED EXCEL & ETL',
      mainTitle: 'Pivot Tables, Pivot Charts & Power Query',
      highlightedWords: ['Pivot Tables', 'Pivot Charts', 'Power Query'],
      subtitle: 'Data Cleaning · Column Transformations · Pivot & Unpivot · Charts & Visual Slicers',
      darkTheme: true
    },

    // Slide 02: Session Objectives
    {
      id: 2,
      slideNumber: '02 / 44',
      type: 'six-cards',
      topRightTag: 'SESSION OBJECTIVES',
      topLeftTag: 'LEARNING GOALS • SESSION 06',
      subBadge: 'SESSION COMPETENCIES',
      mainTitle: 'What You Will Master Today',
      highlightedWords: ['What You Will Master Today'],
      subtitle: 'By the end of this session, you will master these advanced ETL, summarization, and chart analytics capabilities:',
      cards: [
        {
          title: 'Advanced Data Cleaning',
          description: 'Eliminate duplicates, replace inconsistent text, and handle missing values in Power Query.',
          iconName: 'Sparkles'
        },
        {
          title: 'Reshape & Transform Columns',
          description: 'Split columns, merge fields, and extract structured substrings with automated steps.',
          iconName: 'Columns'
        },
        {
          title: 'Append & Merge Queries',
          description: 'Stack multi-month sales data and join relational lookup tables via primary/foreign keys.',
          iconName: 'Layers'
        },
        {
          title: 'Pivot & Unpivot Operations',
          description: 'Convert wide datasets to unpivoted long formats for flexible analysis and vice versa.',
          iconName: 'RotateCw'
        },
        {
          title: 'Dynamic Pivot Tables & Group By',
          description: 'Aggregate large datasets instantaneously, calculate custom metrics, and group by dates.',
          iconName: 'Database'
        },
        {
          title: 'Pivot Charts & Slicer Dashboards',
          description: 'Build interactive dashboards using Column, Line, Scatter, Slicers, and Timelines.',
          iconName: 'BarChart2'
        }
      ]
    },

    // Slide 03: Section Divider - Part 1
    {
      id: 3,
      slideNumber: '03 / 44',
      type: 'section-divider',
      partNumber: 'PART 1',
      sectionTitle: 'Power Query Advanced ETL',
      subtitle: 'Data Cleaning, Column Reshaping, Schema Alignment, Append & Merge Queries',
      darkTheme: true
    },

    // Slide 04: Workflow Review
    {
      id: 4,
      slideNumber: '04 / 44',
      type: 'four-cards',
      topRightTag: 'ETL PIPELINE',
      topLeftTag: 'POWER QUERY RECAP',
      subBadge: 'PIPELINE ARCHITECTURE',
      mainTitle: 'Power Query Workflow Review',
      highlightedWords: ['Workflow Review'],
      subtitle: 'Understanding where transformations and query combinations happen in the data engine:',
      cards: [
        {
          title: '1. Connect',
          description: 'Import raw data from Excel workbooks, CSV files, SQL databases, or web sources.',
          iconName: 'Database'
        },
        {
          title: '2. Transform',
          description: 'Clean data, split/merge columns, format data types, and apply filtering logic.',
          iconName: 'Sparkles'
        },
        {
          title: '3. Combine',
          description: 'Stack matching tables (Append) or join related datasets via keys (Merge).',
          iconName: 'Layers'
        },
        {
          title: '4. Load',
          description: 'Send refined analytical tables directly into Excel sheets or Data Model.',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 05: Data Cleaning
    {
      id: 5,
      slideNumber: '05 / 44',
      type: 'three-cards',
      topRightTag: 'DATA CLEANING',
      topLeftTag: 'POWER QUERY TRANSFORMATIONS',
      subBadge: 'DATA SANITATION',
      mainTitle: 'Core Data Cleaning Operations',
      highlightedWords: ['Data Cleaning Operations'],
      subtitle: 'Tidying raw data before analysis to guarantee high-integrity reporting:',
      cards: [
        {
          title: 'Remove Duplicates',
          description: 'Deletes identical rows based on selected key columns. Menu Path: Home > Remove Rows > Remove Duplicates.',
          iconName: 'Trash2'
        },
        {
          title: 'Replace Values',
          description: 'Standardizes inconsistent text entries across a column. Menu Path: Transform > Replace Values.',
          iconName: 'Edit3'
        },
        {
          title: 'Handle Missing Values',
          description: 'Fill down, fill up, or filter out incomplete null rows. Menu Path: Transform > Fill | Home > Remove Rows.',
          iconName: 'Sparkles'
        }
      ]
    },

    // Slide 06: Transform Columns
    {
      id: 6,
      slideNumber: '06 / 44',
      type: 'three-cards',
      topRightTag: 'COLUMN RESHAPING',
      topLeftTag: 'TRANSFORM TAB',
      subBadge: 'STRUCTURAL REFORMATTING',
      mainTitle: 'Transforming Column Structure',
      highlightedWords: ['Transforming Column Structure'],
      subtitle: 'Reshaping text fields to isolate key variables for analytical grouping:',
      cards: [
        {
          title: 'Split Column',
          description: 'Break one column into several by delimiter (space, comma, hyphen), position, or character count.',
          iconName: 'Scissors'
        },
        {
          title: 'Merge Columns',
          description: 'Combine two or more text columns into a single field using custom separators (e.g. Space, Hyphen).',
          iconName: 'Columns'
        },
        {
          title: 'Extract Text',
          description: 'Pull specific characters (e.g. first 3 chars of "SKU-2049" -> "SKU") or text before/after delimiter.',
          iconName: 'FileText'
        }
      ]
    },

    // Slide 07: Data Types
    {
      id: 7,
      slideNumber: '07 / 44',
      type: 'four-cards',
      topRightTag: 'DATA TYPES',
      topLeftTag: 'EXCEL & POWER QUERY ENGINE',
      subBadge: 'TYPE INTEGRITY',
      mainTitle: 'Data Types & Why They Matter',
      highlightedWords: ['Data Types & Why They Matter'],
      subtitle: 'Enforcing the proper data type on every column ensures calculations work as expected:',
      cards: [
        {
          title: 'Text (ABC)',
          description: 'Used for names, codes, SKU numbers, and category labels where mathematical ops are not needed.',
          iconName: 'FileText'
        },
        {
          title: 'Whole Number / Decimal (123 / 1.2)',
          description: 'Numeric quantities, revenue, profit, and ratios. Enables sum, average, and formula math.',
          iconName: 'Hash'
        },
        {
          title: 'Date / Date-Time',
          description: 'Timestamps and transaction dates. Crucial for timeline filters, quarter grouping, and trend charts.',
          iconName: 'Calendar'
        },
        {
          title: 'True / False (Boolean)',
          description: 'Binary flags (Active/Inactive, In-Stock/Out). Enables logical filtering and conditional rules.',
          iconName: 'CheckSquare'
        }
      ]
    },

    // Slide 08: Data Types Example
    {
      id: 8,
      slideNumber: '08 / 44',
      type: 'two-cards',
      topRightTag: 'SILENT FAILURES',
      topLeftTag: 'REAL-WORLD GOTCHA',
      subBadge: 'DATA TYPE CORRECTION',
      mainTitle: 'The Danger of Text-Stored Dates',
      highlightedWords: ['Text-Stored Dates'],
      subtitle: 'How incorrect data types cause reporting features and date slicers to silently fail:',
      cards: [
        {
          title: 'The Problem: "Order Date" as Text',
          description: 'When dates are imported as text, Excel treats them as literal strings. Date filters, year grouping, timeline slicers, and month-over-month formulas fail completely.',
          isNegative: true,
          iconName: 'AlertTriangle'
        },
        {
          title: 'The Fix: Transform > Data Type > Date',
          description: 'In Power Query, select the column header -> click Transform tab -> Data Type -> change to Date. Results: timeline slicers, date sorting, and year/quarter aggregations work instantly!',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 09: Append Queries
    {
      id: 9,
      slideNumber: '09 / 44',
      type: 'two-cards',
      topRightTag: 'STACKING ROWS',
      topLeftTag: 'COMBINE QUERIES',
      subBadge: 'VERTICAL CONCATENATION',
      mainTitle: 'Append Queries: Stacking Datasets',
      highlightedWords: ['Append Queries'],
      subtitle: 'Combining multiple data tables with identical column structures into a single continuous query:',
      cards: [
        {
          title: 'How Append Works',
          description: 'Appends rows from Table B beneath Table A. Example: Jan_Sales (124 rows) + Feb_Sales (118 rows) = Combined_Sales (242 rows). Ideal for monthly regional files.',
          iconName: 'Layers'
        },
        {
          title: 'Key Requirement: Column Name Match',
          description: 'Columns must have exact matching headers (case-sensitive). If column names differ (e.g. "Amount" vs "SalesAmount"), Power Query creates separate mismatched columns.',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 10: Append Requirements
    {
      id: 10,
      slideNumber: '10 / 44',
      type: 'three-cards',
      topRightTag: 'SCHEMA ALIGNMENT',
      topLeftTag: 'APPEND BEST PRACTICES',
      subBadge: 'DATA QUALITY',
      mainTitle: 'Rules for Successful Append Queries',
      highlightedWords: ['Successful Append Queries'],
      subtitle: 'Guidelines for stacking multi-file regional data without introducing null artifacts:',
      cards: [
        {
          title: 'Identical Column Names',
          description: 'Ensure exact matching names across files before appending. Rename mismatched headers in staging queries.',
          iconName: 'Columns'
        },
        {
          title: 'Consistent Data Types',
          description: 'Set identical data types across all source queries to avoid type casting conflicts during load.',
          iconName: 'Hash'
        },
        {
          title: 'Automatic Folder Import',
          description: 'Use Power Query "From Folder" connector to automatically append new monthly CSV/Excel files as they drop.',
          iconName: 'RefreshCw'
        }
      ]
    },

    // Slide 11: Merge Queries
    {
      id: 11,
      slideNumber: '11 / 44',
      type: 'two-cards',
      topRightTag: 'JOINING TABLES',
      topLeftTag: 'RELATIONAL DATASETS',
      subBadge: 'HORIZONTAL COMBINATION',
      mainTitle: 'Merge Queries: Joining Tables on Shared Keys',
      highlightedWords: ['Merge Queries'],
      subtitle: 'Combining columns from two related tables based on a matching key ID field:',
      cards: [
        {
          title: 'How Merge Works',
          description: 'Pairs rows from Orders table with Customer_Lookup table using a shared key like CustomerID. Orders gains Customer Name, Region, and Segment columns.',
          iconName: 'Search'
        },
        {
          title: 'Primary & Foreign Keys',
          description: 'The key field must contain matching values (e.g., CustomerID). Data types of key columns in both tables must match exactly before merging.',
          iconName: 'Database'
        }
      ]
    },

    // Slide 12: Merge Join Types
    {
      id: 12,
      slideNumber: '12 / 44',
      type: 'three-cards',
      topRightTag: 'JOIN ALGORITHMS',
      topLeftTag: 'POWER QUERY MERGE',
      subBadge: 'JOIN TYPES',
      mainTitle: 'Understanding Power Query Join Types',
      highlightedWords: ['Join Types'],
      subtitle: 'Selecting the appropriate relational join behavior for business requirements:',
      cards: [
        {
          title: 'Left Outer (Default)',
          description: 'Keeps ALL rows from the first table and brings in matching rows from the second table. Standard for lookup enrichment.',
          iconName: 'Layers'
        },
        {
          title: 'Inner Join',
          description: 'Keeps ONLY rows where keys match in BOTH tables. Drops unmatched transactions or orphan customers.',
          iconName: 'Filter'
        },
        {
          title: 'Anti Join (Left Anti / Right Anti)',
          description: 'Returns ONLY rows in one table that have NO match in the other table. Perfect for auditing missing lookup IDs!',
          iconName: 'AlertTriangle'
        }
      ]
    },

    // Slide 13: Refresh Queries
    {
      id: 13,
      slideNumber: '13 / 44',
      type: 'three-cards',
      topRightTag: 'AUTOMATION',
      topLeftTag: 'QUERY REFRESH MANAGEMENT',
      subBadge: 'DATA LIFECYCLE',
      mainTitle: 'Managing Query Refresh Behavior',
      highlightedWords: ['Query Refresh Behavior'],
      subtitle: 'Keeping analytical outputs updated as new source files arrive:',
      cards: [
        {
          title: 'Refresh All',
          description: 'Re-runs every query step across the entire workbook. Updates all tables, Pivots, and connected charts in 1 click.',
          iconName: 'RefreshCw'
        },
        {
          title: 'Refresh (Single Query)',
          description: 'Right-click a specific query in the queries pane -> Refresh. Re-executes ETL steps for only that selected table.',
          iconName: 'RotateCw'
        },
        {
          title: 'Refresh on File Open',
          description: 'Query Properties setting that automatically triggers ETL refresh whenever the Excel workbook is opened by users.',
          iconName: 'Clock'
        }
      ]
    },

    // Slide 14: Query Dependencies
    {
      id: 14,
      slideNumber: '14 / 44',
      type: 'two-cards',
      topRightTag: 'DATA LINEAGE',
      topLeftTag: 'VIEW TAB',
      subBadge: 'ARCHITECTURE TREE',
      mainTitle: 'Query Dependencies & Lineage',
      highlightedWords: ['Query Dependencies'],
      subtitle: 'Tracing how data flows from raw source queries to intermediate staging and final reports:',
      cards: [
        {
          title: 'The Query Dependencies View',
          description: 'Navigate to View tab > Query Dependencies. Displays a graphical flowchart mapping every raw source file, staging query, merged result, and output table.',
          iconName: 'Layers'
        },
        {
          title: 'Why Lineage Inspection Matters',
          description: 'Helps analysts understand downstream impacts before deleting or editing a shared staging query. Prevents breaking dependent report tables.',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 15: Section Divider - Part 2
    {
      id: 15,
      slideNumber: '15 / 44',
      type: 'section-divider',
      partNumber: 'PART 2',
      sectionTitle: 'Pivot & Unpivot Transformations',
      subtitle: 'Reshaping Data Layouts, Wide to Long Formats, Group By & Key Architectures',
      darkTheme: true
    },

    // Slide 16: Pivot vs Unpivot
    {
      id: 16,
      slideNumber: '16 / 44',
      type: 'two-cards',
      topRightTag: 'DATA LAYOUTS',
      topLeftTag: 'TRANSFORM TAB',
      subBadge: 'RESHAPING PARADIGMS',
      mainTitle: 'Pivot vs Unpivot Concepts',
      highlightedWords: ['Pivot vs Unpivot'],
      subtitle: 'The two fundamental data restructuring operations in modern data preparation:',
      cards: [
        {
          title: 'Pivot Columns (Long to Wide)',
          description: 'Converts unique row values into separate column headers, aggregating numerical values underneath. Great for matrix summaries.',
          iconName: 'Columns'
        },
        {
          title: 'Unpivot Columns (Wide to Long)',
          description: 'Converts multiple column headers into attribute-value row pairs. Transforms un-analyzable wide spreadsheets into clean analytical tables.',
          iconName: 'RotateCw'
        }
      ]
    },

    // Slide 17: Unpivot Columns in Practice
    {
      id: 17,
      slideNumber: '17 / 44',
      type: 'two-cards',
      topRightTag: 'UNPIVOT DEMO',
      topLeftTag: 'DATA PREPARATION',
      subBadge: 'PRACTICAL UNPIVOT',
      mainTitle: 'Unpivoting Wide Spreadsheets',
      highlightedWords: ['Unpivoting Wide Spreadsheets'],
      subtitle: 'Why wide monthly column layouts break analytics and how Unpivot fixes them:',
      cards: [
        {
          title: 'The Wide Format Problem',
          description: 'Data stored with columns like "Jan Sales", "Feb Sales", "Mar Sales" cannot be filtered easily in Pivot Tables or Power BI. Adding a new month requires rebuilding formulas.',
          isNegative: true,
          iconName: 'AlertTriangle'
        },
        {
          title: 'The Unpivot Solution',
          description: 'Select constant columns (e.g. Product, Region) -> Right-click -> Unpivot Other Columns. Result: Two clean columns: "Attribute" (Month) and "Value" (Sales Amount). Perfect for Pivot Tables!',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 18: Pivot Column Operation
    {
      id: 18,
      slideNumber: '18 / 44',
      type: 'two-cards',
      topRightTag: 'PIVOT OPERATION',
      topLeftTag: 'POWER QUERY TRANSFORM',
      subBadge: 'MATRIX GENERATION',
      mainTitle: 'The Pivot Column Operation',
      highlightedWords: ['Pivot Column Operation'],
      subtitle: 'Converting normalized tall tables into custom cross-tabulation matrices:',
      cards: [
        {
          title: 'When to Use Pivot Column',
          description: 'When you need to present summary totals side-by-side by category (e.g. pivoting metric names into separate columns for Revenue, Cost, Profit).',
          iconName: 'Columns'
        },
        {
          title: 'Configuring Aggregation Functions',
          description: 'Select the column to pivot -> click Pivot Column -> choose Value Column -> select Aggregation (Sum, Count, Average, Max, Min). Power Query computes matrix totals automatically.',
          iconName: 'Hash'
        }
      ]
    },

    // Slide 19: Primary Key vs Foreign Key
    {
      id: 19,
      slideNumber: '19 / 44',
      type: 'two-cards',
      topRightTag: 'DATA MODELING',
      topLeftTag: 'RELATIONAL ARCHITECTURE',
      subBadge: 'KEY IDENTIFICATION',
      mainTitle: 'Primary Key vs Foreign Key Architecture',
      highlightedWords: ['Primary Key vs Foreign Key'],
      subtitle: 'Enforcing data integrity and relational matching across enterprise database tables:',
      cards: [
        {
          title: 'Primary Key (Unique ID)',
          description: 'A column containing 100% unique identifiers with NO duplicates or nulls (e.g. EMP_ID in Employees table). Uniquely identifies every row.',
          iconName: 'Database'
        },
        {
          title: 'Foreign Key (Reference ID)',
          description: 'A column in a child table (e.g. Projects table) that references the Primary Key in the parent table. Allows 1-to-Many relationships and guarantees data integrity.',
          iconName: 'Search'
        }
      ]
    },

    // Slide 20: Group By Summarizations
    {
      id: 20,
      slideNumber: '20 / 44',
      type: 'three-cards',
      topRightTag: 'AGGREGATION',
      topLeftTag: 'POWER QUERY TRANSFORM',
      subBadge: 'DATA SUMMARIZATION',
      mainTitle: 'Group By Summarizations',
      highlightedWords: ['Group By Summarizations'],
      subtitle: 'Collapsing thousands of detailed rows into concise aggregated category summaries:',
      cards: [
        {
          title: 'Basic Grouping',
          description: 'Select a categorical column (e.g., Region) -> Group By -> compute Total Sales (SUM) or Transaction Count (COUNT).',
          iconName: 'Filter'
        },
        {
          title: 'Advanced Multi-Column Grouping',
          description: 'Group by multiple fields simultaneously (e.g. Region AND Product Category) to analyze multi-level breakdown metrics.',
          iconName: 'Layers'
        },
        {
          title: 'Multiple Aggregations',
          description: 'Add multiple summary columns in a single Group By step: Total Revenue (Sum), Average Order (Avg), Max Sale (Max), and Total Customers (Count Distinct).',
          iconName: 'Hash'
        }
      ]
    },

    // Slide 21: Section Divider - Part 3
    {
      id: 21,
      slideNumber: '21 / 44',
      type: 'section-divider',
      partNumber: 'PART 3',
      sectionTitle: 'Pivot Tables & Summarization',
      subtitle: 'Building Interactive Summaries, Value Field Settings, Custom Grouping & Calculated Fields',
      darkTheme: true
    },

    // Slide 22: Pivot Tables Core Concepts
    {
      id: 22,
      slideNumber: '22 / 44',
      type: 'four-cards',
      topRightTag: 'PIVOT TABLE FOUNDATION',
      topLeftTag: 'EXCEL SUMMARIZATION',
      subBadge: 'FOUR QUADRANTS',
      mainTitle: 'The 4 Quadrants of a Pivot Table',
      highlightedWords: ['4 Quadrants'],
      subtitle: 'Understanding the building blocks that control Pivot Table layout and calculations:',
      cards: [
        {
          title: '1. Filters Drop Zone',
          description: 'Top-level page filters that isolate specific sub-segments of the entire dataset (e.g. Year = 2024).',
          iconName: 'Filter'
        },
        {
          title: '2. Columns Drop Zone',
          description: 'Categorical fields placed horizontally across the top to create matrix comparisons.',
          iconName: 'Columns'
        },
        {
          title: '3. Rows Drop Zone',
          description: 'Primary categories displayed vertically down the left side of the summary table.',
          iconName: 'Layers'
        },
        {
          title: '4. Values Drop Zone',
          description: 'Numeric metrics evaluated at row/column intersections (Sum of Sales, Count of Orders, Average Price).',
          iconName: 'Hash'
        }
      ]
    },

    // Slide 23: Step-by-Step Pivot Table Building
    {
      id: 23,
      slideNumber: '23 / 44',
      type: 'three-cards',
      topRightTag: 'BUILDING PIVOTS',
      topLeftTag: 'EXCEL WORKFLOW',
      subBadge: 'CREATION STEPS',
      mainTitle: 'Building Your First Pivot Table',
      highlightedWords: ['Building Your First Pivot Table'],
      subtitle: 'A simple 3-step process to summarize thousands of raw data rows in seconds:',
      cards: [
        {
          title: 'Step 1: Format as Excel Table',
          description: 'Select raw data -> press Ctrl + T. Formatting as an official Excel Table ensures your Pivot automatically expands when new rows are added.',
          iconName: 'CheckCircle2'
        },
        {
          title: 'Step 2: Insert Pivot Table',
          description: 'Navigate to Insert tab > PivotTable > choose New Worksheet. Excel creates a blank Pivot layout canvas and Field List pane.',
          iconName: 'Database'
        },
        {
          title: 'Step 3: Drag & Drop Fields',
          description: 'Drag "Category" to Rows, "Region" to Columns, and "Sales Amount" to Values. Your summary table generates instantly!',
          iconName: 'Sparkles'
        }
      ]
    },

    // Slide 24: Value Field Settings
    {
      id: 24,
      slideNumber: '24 / 44',
      type: 'three-cards',
      topRightTag: 'CALCULATION SETTINGS',
      topLeftTag: 'PIVOT TABLE VALUES',
      subBadge: 'METRIC CONFIGURATION',
      mainTitle: 'Value Field Settings & Calculations',
      highlightedWords: ['Value Field Settings'],
      subtitle: 'Customizing how numbers are aggregated and displayed inside your Pivot Table:',
      cards: [
        {
          title: 'Summarize Values By',
          description: 'Switch between Sum, Count, Average, Max, Min, and Count Numbers depending on analytical objectives.',
          iconName: 'Hash'
        },
        {
          title: 'Show Values As',
          description: 'Display raw numbers as % of Grand Total, % of Column Total, % of Row Total, or Difference From Previous Month.',
          iconName: 'BarChart2'
        },
        {
          title: 'Number Formatting',
          description: 'Right-click metric -> Number Format -> apply Currency ($) or Percentage (%) formatting to the underlying metric across the entire Pivot.',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 25: Grouping Data in Pivot Tables
    {
      id: 25,
      slideNumber: '25 / 44',
      type: 'two-cards',
      topRightTag: 'DATA BINS',
      topLeftTag: 'PIVOT TABLE GROUPING',
      subBadge: 'HIERARCHICAL ANALYSIS',
      mainTitle: 'Grouping Data in Pivot Tables',
      highlightedWords: ['Grouping Data'],
      subtitle: 'Aggregating granular dates or numeric ranges into high-level analytical categories:',
      cards: [
        {
          title: 'Date Grouping (Years, Quarters, Months)',
          description: 'Right-click any date cell in a Pivot Table -> click Group -> select Years, Quarters, and Months. Instantly transforms daily transaction logs into quarterly performance summaries!',
          iconName: 'Calendar'
        },
        {
          title: 'Numeric Range Binning (Age / Income Bins)',
          description: 'Right-click numeric values (e.g. Customer Age) -> Group -> specify Start, End, and Interval (e.g. 20-29, 30-39, 40-49). Perfect for customer demographic distribution analysis.',
          iconName: 'Hash'
        }
      ]
    },

    // Slide 26: Calculated Fields & Items
    {
      id: 26,
      slideNumber: '26 / 44',
      type: 'two-cards',
      topRightTag: 'CUSTOM FORMULAS',
      topLeftTag: 'PIVOT TABLE ANALYTICS',
      subBadge: 'DERIVED METRICS',
      mainTitle: 'Calculated Fields in Pivot Tables',
      highlightedWords: ['Calculated Fields'],
      subtitle: 'Adding custom mathematical formulas directly inside your Pivot Table without altering raw source data:',
      cards: [
        {
          title: 'What is a Calculated Field?',
          description: 'A custom formula built inside the Pivot Table using existing fields (e.g., `Profit = Revenue - Cost` or `Commission = Sales * 0.05`). Evaluates dynamically on aggregated totals.',
          iconName: 'Sparkles'
        },
        {
          title: 'How to Add a Calculated Field',
          description: 'Click inside Pivot Table -> PivotTable Analyze tab > Fields, Items, & Sets > Calculated Field -> type Name and Formula -> click Add. The custom metric appears in the Field List!',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 27: Section Divider - Part 4
    {
      id: 27,
      slideNumber: '27 / 44',
      type: 'section-divider',
      partNumber: 'PART 4',
      sectionTitle: 'Charts & Dynamic Visualization',
      subtitle: 'Chart Types, Visual Storytelling, Pivot Charts, Interactive Slicers & Timelines',
      darkTheme: true
    },

    // Slide 28: Visual Storytelling
    {
      id: 28,
      slideNumber: '28 / 44',
      type: 'three-cards',
      topRightTag: 'CHARTS OVERVIEW',
      topLeftTag: 'DATA VISUALIZATION',
      subBadge: 'VISUAL ANCHORS',
      mainTitle: 'Visual Storytelling with Excel Charts',
      highlightedWords: ['Visual Storytelling'],
      subtitle: 'Transforming tabular rows into intuitive visual representations that highlight key patterns:',
      cards: [
        {
          title: 'Clarify Trends & Patterns',
          description: 'Charts turn wall-of-number spreadsheets into instant visual insights that stakeholders comprehend in seconds.',
          iconName: 'BarChart2'
        },
        {
          title: 'Choose the Right Chart',
          description: 'Selecting the correct chart type (Column vs Line vs Scatter vs Histogram) ensures your message is accurate and unbiased.',
          iconName: 'Sparkles'
        },
        {
          title: 'Dynamic Interactivity',
          description: 'Combining Pivot Charts with Slicers and Timelines lets business users filter dashboards interactively during meetings.',
          iconName: 'Filter'
        }
      ]
    },

    // Slide 29: Column & Bar Charts
    {
      id: 29,
      slideNumber: '29 / 44',
      type: 'two-cards',
      topRightTag: 'CATEGORICAL CHARTS',
      topLeftTag: 'EXCEL CHARTS',
      subBadge: 'COMPARISON VISUALS',
      mainTitle: 'Column & Bar Charts',
      highlightedWords: ['Column & Bar Charts'],
      subtitle: 'Representing categorical data with vertical or horizontal rectangular bars for direct comparison:',
      cards: [
        {
          title: 'Column Chart (Vertical Bars)',
          description: 'Best for comparing discrete categories or short time series (e.g. Sales by Product Category or Quarterly Revenue). Height represents value.',
          iconName: 'BarChart2'
        },
        {
          title: 'Bar Chart (Horizontal Bars)',
          description: 'Ideal when category names are long (e.g. Country Names or Department Titles) or when ranking many categories from top to bottom.',
          iconName: 'Columns'
        }
      ]
    },

    // Slide 30: Stacked Bar & Column Charts
    {
      id: 30,
      slideNumber: '30 / 44',
      type: 'two-cards',
      topRightTag: 'COMPOSITION CHARTS',
      topLeftTag: 'EXCEL CHARTS',
      subBadge: 'PART-TO-WHOLE',
      mainTitle: 'Stacked Column & Bar Charts',
      highlightedWords: ['Stacked Column & Bar Charts'],
      subtitle: 'Dividing bars into sub-segments to display composition and parts of a whole within categories:',
      cards: [
        {
          title: 'Stacked Column Chart',
          description: 'Bars are divided into colored segments representing sub-categories (e.g., Total Regional Sales split by Product Category: Electronics, Clothing, Decor).',
          iconName: 'Layers'
        },
        {
          title: '100% Stacked Chart',
          description: 'Normalizes all bars to 100% height, emphasizing the relative percentage contribution of each sub-category regardless of total volume differences.',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 31: Pie, Donut & Treemap
    {
      id: 31,
      slideNumber: '31 / 44',
      type: 'three-cards',
      topRightTag: 'PROPORTION CHARTS',
      topLeftTag: 'EXCEL CHARTS',
      subBadge: 'PERCENTAGE BREAKDOWNS',
      mainTitle: 'Pie, Donut & Treemap Charts',
      highlightedWords: ['Pie, Donut & Treemap'],
      subtitle: 'Displaying percentage breakdowns and hierarchical category proportions:',
      cards: [
        {
          title: 'Pie Chart',
          description: 'Displays slices of a circle representing proportions. Best when comparing 3 to 5 categories that sum to 100%.',
          iconName: 'BarChart2'
        },
        {
          title: 'Donut Chart',
          description: 'A modern variation of the pie chart with a hollow center. Leaves room for summary KPIs or total numbers inside the ring.',
          iconName: 'RotateCw'
        },
        {
          title: 'Treemap Chart',
          description: 'Displays hierarchical data as nested rectangles. Area size represents proportion, allowing visualization of many categories simultaneously.',
          iconName: 'Layers'
        }
      ]
    },

    // Slide 32: Line & Area Charts
    {
      id: 32,
      slideNumber: '32 / 44',
      type: 'two-cards',
      topRightTag: 'TIME SERIES',
      topLeftTag: 'EXCEL CHARTS',
      subBadge: 'TREND ANALYSIS',
      mainTitle: 'Line & Area Charts',
      highlightedWords: ['Line & Area Charts'],
      subtitle: 'Connecting data points over time to emphasize continuous trends, seasonality, and direction:',
      cards: [
        {
          title: 'Line Chart',
          description: 'Plots data points connected by lines over time (days, months, years). Essential for showing monthly sales trends, stock prices, or website traffic.',
          iconName: 'Sparkles'
        },
        {
          title: 'Area Chart',
          description: 'Similar to a line chart, but the space beneath the line is filled with color. Emphasizes total volume over time in addition to trend direction.',
          iconName: 'Layers'
        }
      ]
    },

    // Slide 33: Scatter Plots & Correlation
    {
      id: 33,
      slideNumber: '33 / 44',
      type: 'two-cards',
      topRightTag: 'RELATIONSHIP CHARTS',
      topLeftTag: 'STATISTICAL CHARTS',
      subBadge: 'CORRELATION & CLUSTERS',
      mainTitle: 'Scatter Plots & Correlation',
      highlightedWords: ['Scatter Plots & Correlation'],
      subtitle: 'Plotting individual data points to discover numeric relationships and spot outliers:',
      cards: [
        {
          title: 'Scatter Plot (X vs Y)',
          description: 'Plots two continuous numeric variables on X and Y axes (e.g. Study Hours vs Exam Score or Age vs Salary). Reveals correlation strength and directional trends.',
          iconName: 'Search'
        },
        {
          title: 'Types of Correlation',
          description: 'Positive Correlation (X up -> Y up), Negative Correlation (X up -> Y down), and No Correlation (random scatter). Trendline adds regression context.',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 34: Histograms & Binned Distributions
    {
      id: 34,
      slideNumber: '34 / 44',
      type: 'two-cards',
      topRightTag: 'FREQUENCY DISTRIBUTIONS',
      topLeftTag: 'STATISTICAL CHARTS',
      subBadge: 'HISTOGRAM BINS',
      mainTitle: 'Histograms & Frequency Bins',
      highlightedWords: ['Histograms & Frequency Bins'],
      subtitle: 'Understanding numerical data distributions by grouping continuous values into range bins:',
      cards: [
        {
          title: 'What is a Histogram?',
          description: 'A specialized column chart that shows the frequency distribution of continuous numerical data grouped into equal ranges (e.g. Age Bins: 20-29, 30-39, 40-49).',
          iconName: 'BarChart2'
        },
        {
          title: 'Why Histograms Matter',
          description: 'Helps analysts understand data spread, central tendency, skewness (left/right skew), bell-curve normality, and where the highest concentration of values lies.',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 35: Pivot Charts & Dashboards
    {
      id: 35,
      slideNumber: '35 / 44',
      type: 'two-cards',
      topRightTag: 'DYNAMIC CHARTS',
      topLeftTag: 'PIVOT CHART ENGINE',
      subBadge: 'INTERACTIVE VISUALS',
      mainTitle: 'Pivot Charts & Dynamic Dashboards',
      highlightedWords: ['Pivot Charts'],
      subtitle: 'Creating visual charts linked directly to underlying Pivot Tables:',
      cards: [
        {
          title: 'What is a Pivot Chart?',
          description: 'A chart connected dynamically to a Pivot Table. When you filter, sort, or change fields in the Pivot Table, the Pivot Chart updates automatically!',
          iconName: 'BarChart2'
        },
        {
          title: 'Creating a Pivot Chart',
          description: 'Click inside Pivot Table -> PivotTable Analyze tab > PivotChart -> select desired chart type (Column, Line, Pie). Interactivity is built-in!',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 36: Interactive Slicers
    {
      id: 36,
      slideNumber: '36 / 44',
      type: 'two-cards',
      topRightTag: 'VISUAL FILTERS',
      topLeftTag: 'SLICER ENGINE',
      subBadge: 'BUTTON FILTERING',
      mainTitle: 'Interactive Slicers',
      highlightedWords: ['Interactive Slicers'],
      subtitle: 'Visual button filters that allow users to filter tables and Pivot Tables with a single click:',
      cards: [
        {
          title: 'What is a Slicer?',
          description: 'A user-friendly visual floating card with clickable buttons representing unique category values (e.g., North, South, East, West). Makes filtering effortless.',
          iconName: 'Filter'
        },
        {
          title: 'Adding a Slicer',
          description: 'Click Pivot Table -> Insert tab > Slicer -> select target fields (e.g. Region, Category) -> click OK. Click any button to filter instantly!',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 37: Timeline Filters
    {
      id: 37,
      slideNumber: '37 / 44',
      type: 'two-cards',
      topRightTag: 'TIME FILTERS',
      topLeftTag: 'TIMELINE ENGINE',
      subBadge: 'DATE NAVIGATION',
      mainTitle: 'Timeline Filters',
      highlightedWords: ['Timeline Filters'],
      subtitle: 'Specialized visual time-slider controls designed exclusively for filtering date fields:',
      cards: [
        {
          title: 'What is a Timeline?',
          description: 'A visual horizontal slider control that lets users filter data by time periods: Years, Quarters, Months, or Days by dragging a time selection box.',
          iconName: 'Calendar'
        },
        {
          title: 'Adding a Timeline',
          description: 'Click Pivot Table -> Insert tab > Timeline -> select Date field. Users can drag the slider to analyze specific quarterly performance effortlessly.',
          iconName: 'Clock'
        }
      ]
    },

    // Slide 38: Connecting Slicers to Multiple Pivots
    {
      id: 38,
      slideNumber: '38 / 44',
      type: 'two-cards',
      topRightTag: 'DASHBOARD ARCHITECTURE',
      topLeftTag: 'REPORT CONNECTIONS',
      subBadge: 'MULTI-PIVOT LINKING',
      mainTitle: 'Connecting Slicers to Multiple Pivot Tables',
      highlightedWords: ['Connecting Slicers'],
      subtitle: 'The secret to building unified, fully interactive multi-chart executive dashboards:',
      cards: [
        {
          title: 'Report Connections Window',
          description: 'Right-click Slicer -> Report Connections -> check the boxes for all Pivot Tables on your dashboard page.',
          iconName: 'Layers'
        },
        {
          title: 'Unified Dashboard Interactivity',
          description: 'Clicking a single Slicer button (e.g., Region = "North") now filters ALL connected Pivot Tables, summary metrics, and Pivot Charts simultaneously across the dashboard!',
          iconName: 'CheckCircle2'
        }
      ]
    },

    // Slide 39: Section Divider - Part 5
    {
      id: 39,
      slideNumber: '39 / 44',
      type: 'section-divider',
      partNumber: 'PART 5',
      sectionTitle: 'Best Practices & Real Business Project',
      subtitle: '5 Golden Rules, Common Pitfalls, Automated Regional Sales & Inventory Dashboard Case Study',
      darkTheme: true
    },

    // Slide 40: Best Practices
    {
      id: 40,
      slideNumber: '40 / 44',
      type: 'best-practices',
      topRightTag: 'ANALYST BEST PRACTICES',
      topLeftTag: 'GOLDEN RULES',
      subBadge: 'BEST PRACTICES',
      mainTitle: 'Golden Rules for Power Query & Pivots',
      highlightedWords: ['Golden Rules'],
      subtitle: 'Essential principles for building clean, maintainable, automated reporting models:',
      rules: [
        'Rename queries and transformation steps clearly (replace default "Changed Type1").',
        'Disable load for intermediate staging queries (right-click -> uncheck "Enable Load").',
        'Filter early, transform late (reduce row count first for maximum refresh speed).',
        'Document complex ETL steps with descriptive comments in Step Properties.',
        'Always format raw data as official Excel Tables (Ctrl + T) before building Pivots.'
      ],
      businessExample: 'A clean shared workbook with self-updating regional sales dashboards and 1-click refresh.'
    },

    // Slide 41: Common Pitfalls
    {
      id: 41,
      slideNumber: '41 / 44',
      type: 'three-cards',
      topRightTag: 'PITFALL AVOIDANCE',
      topLeftTag: 'ANALYST GOTCHAS',
      subBadge: 'ERROR PREVENTION',
      mainTitle: 'Common Pitfalls & How to Avoid Them',
      highlightedWords: ['Common Pitfalls'],
      subtitle: 'Avoiding common mistakes that break automated queries and reporting models:',
      cards: [
        {
          title: 'Changing Source File Columns',
          description: 'Renaming or deleting source file column headers breaks downstream Power Query steps. Keep source headers standardized!',
          iconName: 'AlertTriangle'
        },
        {
          title: 'Mixing Text & Numeric Data Types',
          description: 'Keys stored as Text in Table A and Number in Table B cause Merge Queries to fail completely with zero matching rows.',
          iconName: 'Hash'
        },
        {
          title: 'Forgetting to Refresh Pivot Tables',
          description: 'Pivot Tables do not update automatically when raw source cells change. Always click Refresh All or enable Refresh on Open!',
          iconName: 'RefreshCw'
        }
      ]
    },

    // Slide 42: Real-World Business Project
    {
      id: 42,
      slideNumber: '42 / 44',
      type: 'three-cards',
      topRightTag: 'CAPSTONE CASE STUDY',
      topLeftTag: 'REAL-WORLD PROJECT',
      subBadge: 'END-TO-END PIPELINE',
      mainTitle: 'Capstone Project: Sales Analytics Pipeline',
      highlightedWords: ['Sales Analytics Pipeline'],
      subtitle: 'Combining Power Query ETL, Pivot Tables, and Pivot Charts into a live business dashboard:',
      cards: [
        {
          title: '1. ETL & Data Cleaning',
          description: 'Import monthly CSV sales files via Power Query, remove duplicate order IDs, unpivot regional month columns, and set exact Date types.',
          iconName: 'Sparkles'
        },
        {
          title: '2. Relational Merge',
          description: 'Merge Sales Query with Product Lookup table on ProductID key (Left Outer Join) to pull Category and Unit Price columns.',
          iconName: 'Search'
        },
        {
          title: '3. Dashboard & Slicers',
          description: 'Build dynamic Pivot Tables for Monthly Revenue and Category Share. Add Slicers and Timelines connected to all Pivot Charts.',
          iconName: 'BarChart2'
        }
      ]
    },

    // Slide 43: Key Takeaways
    {
      id: 43,
      slideNumber: '43 / 44',
      type: 'six-cards',
      topRightTag: 'SUMMARY',
      topLeftTag: 'KEY TAKEAWAYS',
      subBadge: 'SUMMARY',
      mainTitle: 'Key Takeaways from Session 06',
      highlightedWords: ['Key Takeaways'],
      subtitle: 'Core principles to retain as you master advanced Excel, ETL, and data analytics:',
      cards: [
        {
          title: 'Automates Repetitive Data Prep',
          description: 'Power Query handles messy CSVs, splits/merges, and cleanups in 1-click.',
          iconName: 'RefreshCw'
        },
        {
          title: 'Unpivot Enables Analytics',
          description: 'Unpivoting wide spreadsheets into long format unlocks total Pivot Table flexibility.',
          iconName: 'RotateCw'
        },
        {
          title: 'Relational Key Matching',
          description: 'Merge queries connect transactions to lookup tables reliably via matching key IDs.',
          iconName: 'Database'
        },
        {
          title: 'Instant Data Summarization',
          description: 'Pivot Tables aggregate millions of transactions in seconds with zero custom formulas.',
          iconName: 'Layers'
        },
        {
          title: 'Interactive Dashboard Slicers',
          description: 'Slicers and Timelines turn static reports into dynamic visual dashboards.',
          iconName: 'Filter'
        },
        {
          title: 'End-to-End Data Mastery',
          description: 'Combining ETL + Pivots + Charts completes your core Excel analytics foundation!',
          iconName: 'Award'
        }
      ]
    },

    // Slide 44: Grand Outro Slide (Matching Reference Design)
    {
      id: 44,
      slideNumber: '44 / 44',
      type: 'outro',
      topRightTag: 'SESSION COMPLETE',
      topLeftTag: 'SESSION 06 WRAP-UP',
      subBadge: 'COURSE PROGRESS',
      mainTitle: 'Course Summary & Wrap-Up',
      highlightedWords: ['Summary & Wrap-Up'],
      subtitle: 'Mastered Power Query ETL, Pivot/Unpivot, Relational Merges, Pivot Tables, Charts, Slicers & Timelines.',
      nextSessionTitle: 'UP NEXT: Session 07 · SQL & Relational Databases',
      nextSessionSubtitle: 'Database Architecture · SELECT, WHERE, GROUP BY · JOINs · Subqueries · Real Business Case',
      darkTheme: true
    }
  ]
};
