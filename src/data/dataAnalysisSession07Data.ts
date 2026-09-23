import { ChapterPresentation } from '../types';

export const dataAnalysisSession07EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-07',
  chapterTitle: 'Session 07: Data Modeling & Dashboard Design',
  courseName: 'Data Analysis Diploma • Session 07',
  duration: 'Duration: 3.5 Hours',
  totalSlides: 25,
  slides: [
    // ==========================================
    // SLIDE 01: HERO COVER SLIDE (Matching Reference Design)
    // ==========================================
    {
      id: 1,
      slideNumber: '01 / 25',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 07',
      topLeftTag: 'DATA MODELING & UI/UX DESIGN',
      subBadge: 'SESSION 7 · DATA MODELING & DASHBOARDS',
      mainTitle: 'Data Modeling & Dashboard Design',
      highlightedWords: ['Data Modeling', 'Dashboard Design'],
      subtitle: 'Pivot/Unpivot · PK/FK Relationships · Group By Aggregation · Star & Snowflake Schemas · UI/UX Principles',
      darkTheme: true
    },

    // SLIDE 02: SESSION OBJECTIVES
    {
      id: 2,
      slideNumber: '02 / 25',
      type: 'six-cards',
      topRightTag: 'SESSION OBJECTIVES',
      topLeftTag: 'LEARNING GOALS • SESSION 07',
      subBadge: 'SESSION COMPETENCIES',
      mainTitle: 'What You Will Master Today',
      highlightedWords: ['What You Will Master Today'],
      subtitle: 'By the end of this session, you will master these core data modeling, transformation, and visual presentation skills:',
      cards: [
        {
          title: 'Pivot & Unpivot Operations',
          description: 'Convert unique values from rows to columns and transform wide datasets into normalized tall formats.',
          iconName: 'RotateCw'
        },
        {
          title: 'Primary & Foreign Keys (PK/FK)',
          description: 'Establish unique record identifiers and relational links across enterprise database tables.',
          iconName: 'Key'
        },
        {
          title: 'Group By & Aggregations',
          description: 'Apply the Split-Apply-Combine engine to group data by keys and compute metric summaries.',
          iconName: 'Database'
        },
        {
          title: 'Append & Merge Queries',
          description: 'Combine datasets vertically across rows or horizontally using key-based joins.',
          iconName: 'Layers'
        },
        {
          title: 'Star, Snowflake & Galaxy Schemas',
          description: 'Design central Fact tables connected to normalized or denormalized Dimension tables.',
          iconName: 'Network'
        },
        {
          title: 'UI/UX & Dashboard Rules',
          description: 'Apply 6 golden rules of colors, typography, layout flow, charts, background, and interactivity.',
          iconName: 'Layout'
        }
      ]
    },

    // SLIDE 03: SECTION 1 DIVIDER — PIVOT & UNPIVOT
    {
      id: 3,
      slideNumber: '03 / 25',
      type: 'section-divider',
      partNumber: 'PART 1',
      sectionTitle: 'Pivot & Unpivot Transformations',
      subtitle: 'Reshaping Data Architecture for Aggregation and Analytical Readiness',
      darkTheme: true
    },

    // SLIDE 04: PIVOT VS UNPIVOT CONCEPT
    {
      id: 4,
      slideNumber: '04 / 25',
      type: 'two-cards',
      topRightTag: 'DATA TRANSFORMATIONS',
      topLeftTag: 'PIVOT VS UNPIVOT',
      subBadge: 'RESHAPING ENGINE',
      mainTitle: 'Pivot vs. Unpivot Operations',
      highlightedWords: ['Pivot', 'Unpivot'],
      subtitle: 'Understanding how values transition between rows and columns during data restructuring:'
    },

    // SLIDE 05: PIVOT VS UNPIVOT VISUAL EXAMPLES
    {
      id: 5,
      slideNumber: '05 / 25',
      type: 'process-flow',
      topRightTag: 'PRACTICAL EXAMPLES',
      topLeftTag: 'TRANSFORMATION PATTERNS',
      subBadge: 'DATA RESHAPING IN PRACTICE',
      mainTitle: 'Pivot & Unpivot Visual Workflows',
      highlightedWords: ['Workflows'],
      subtitle: 'Real-world data structures transitioning between wide presentation formats and long analytical formats:'
    },

    // SLIDE 06: PRIMARY KEY (PK) VS FOREIGN KEY (FK)
    {
      id: 6,
      slideNumber: '06 / 25',
      type: 'comparison',
      topRightTag: 'RELATIONAL MODELING',
      topLeftTag: 'KEY RELATIONSHIPS',
      subBadge: 'DATABASE INTEGRITY',
      mainTitle: 'Primary Key (PK) & Foreign Key (FK)',
      highlightedWords: ['Primary Key', 'Foreign Key'],
      subtitle: 'Building non-redundant relational links between parent and child tables in a database:'
    },

    // SLIDE 07: SECTION 2 DIVIDER — GROUP BY & AGGREGATIONS
    {
      id: 7,
      slideNumber: '07 / 25',
      type: 'section-divider',
      partNumber: 'PART 2',
      sectionTitle: 'Group By & Aggregation Mechanics',
      subtitle: 'Summarizing Large Datasets using the Split-Apply-Combine Engine',
      darkTheme: true
    },

    // SLIDE 08: GROUP BY RULES & CONCEPT
    {
      id: 8,
      slideNumber: '08 / 25',
      type: 'two-cards',
      topRightTag: 'SUMMARY ENGINE',
      topLeftTag: 'GROUP BY FUNDAMENTALS',
      subBadge: 'DATA SUMMARIZATION',
      mainTitle: 'Group By Concept & Core Rules',
      highlightedWords: ['Group By Concept'],
      subtitle: 'Grouping raw observations by categorical keys to extract instant calculated metrics:'
    },

    // SLIDE 09: GROUP BY - HOW IT WORKS (SPLIT-APPLY-COMBINE)
    {
      id: 9,
      slideNumber: '09 / 25',
      type: 'process-flow',
      topRightTag: 'AGGREGATION PIPELINE',
      topLeftTag: 'SPLIT-APPLY-COMBINE',
      subBadge: 'INTERNAL MECHANICS',
      mainTitle: 'How Group By Works Step-by-Step',
      highlightedWords: ['How Group By Works'],
      subtitle: 'The 3-stage computational flow executing under the hood during grouping:'
    },

    // SLIDE 10: SECTION 3 DIVIDER — APPEND & MERGE
    {
      id: 10,
      slideNumber: '10 / 25',
      type: 'section-divider',
      partNumber: 'PART 3',
      sectionTitle: 'Append & Merge Query Engine',
      subtitle: 'Vertical Row Concatenation & Horizontal Key-Based Column Joins',
      darkTheme: true
    },

    // SLIDE 11: APPEND QUERIES
    {
      id: 11,
      slideNumber: '11 / 25',
      type: 'two-cards',
      topRightTag: 'VERTICAL COMBINATION',
      topLeftTag: 'APPEND QUERIES',
      subBadge: 'ROW STACKING',
      mainTitle: 'Append: Stacking Rows Vertically',
      highlightedWords: ['Append'],
      subtitle: 'Adding new records to the end of an existing dataset without altering original structures:'
    },

    // SLIDE 12: MERGE QUERIES
    {
      id: 12,
      slideNumber: '12 / 25',
      type: 'two-cards',
      topRightTag: 'HORIZONTAL COMBINATION',
      topLeftTag: 'MERGE QUERIES',
      subBadge: 'COLUMN JOINS',
      mainTitle: 'Merge: Joining Columns Horizontally',
      highlightedWords: ['Merge'],
      subtitle: 'Enriching datasets by combining columns from multiple tables based on a shared key:'
    },

    // SLIDE 13: SECTION 4 DIVIDER — DATA MODELING & SCHEMAS
    {
      id: 13,
      slideNumber: '13 / 25',
      type: 'section-divider',
      partNumber: 'PART 4',
      sectionTitle: 'Data Modeling & Architecture',
      subtitle: 'Designing Data Storage, Normalization, Star Schemas & Snowflake Schemas',
      darkTheme: true
    },

    // SLIDE 14: WHAT IS DATA MODELING?
    {
      id: 14,
      slideNumber: '14 / 25',
      type: 'two-cards',
      topRightTag: 'SYSTEM ARCHITECTURE',
      topLeftTag: 'DATA MODELING',
      subBadge: 'FOUNDATIONAL ARCHITECTURE',
      mainTitle: 'Data Modeling Principles',
      highlightedWords: ['Data Modeling Principles'],
      subtitle: 'Structuring entities, attributes, and relationships into a clear organizational blueprint:'
    },

    // SLIDE 15: DATA STORING CLASSIFICATION
    {
      id: 15,
      slideNumber: '15 / 25',
      type: 'three-cards',
      topRightTag: 'STORAGE TIERS',
      topLeftTag: 'CLASSIFICATION',
      subBadge: 'DATA ARCHITECTURE',
      mainTitle: 'Data Storing Classification',
      highlightedWords: ['Data Storing Classification'],
      subtitle: 'Categorizing data storage environments from flat files to enterprise data warehouses:'
    },

    // SLIDE 16: NORMALIZED VS DENORMALIZED DATA
    {
      id: 16,
      slideNumber: '16 / 25',
      type: 'comparison',
      topRightTag: 'SCHEMA OPTIMIZATION',
      topLeftTag: 'NORMALIZATION',
      subBadge: 'WRITES VS READS',
      mainTitle: 'Normalized vs. Denormalized Data',
      highlightedWords: ['Normalized', 'Denormalized'],
      subtitle: 'Balancing write integrity and storage efficiency against read speed and reporting performance:'
    },

    // SLIDE 17: STAR SCHEMA VS SNOWFLAKE SCHEMA OVERVIEW
    {
      id: 17,
      slideNumber: '17 / 25',
      type: 'comparison',
      topRightTag: 'WAREHOUSE SCHEMAS',
      topLeftTag: 'SCHEMA TYPES',
      subBadge: 'MODEL COMPARISON',
      mainTitle: 'Star Schema vs. Snowflake Schema',
      highlightedWords: ['Star Schema', 'Snowflake Schema'],
      subtitle: 'The two foundational dimensional modeling designs for analytics and BI platforms:'
    },

    // SLIDE 18: STAR SCHEMA ARCHITECTURE
    {
      id: 18,
      slideNumber: '18 / 25',
      type: 'component-anatomy',
      topRightTag: 'DIMENSIONAL MODELING',
      topLeftTag: 'STAR SCHEMA',
      subBadge: 'CENTRAL FACT PATTERN',
      mainTitle: 'Star Schema Architecture',
      highlightedWords: ['Star Schema Architecture'],
      subtitle: 'Connecting a central Fact table to de-normalized Dimension tables for high-speed queries:'
    },

    // SLIDE 19: SNOWFLAKE SCHEMA ARCHITECTURE
    {
      id: 19,
      slideNumber: '19 / 25',
      type: 'component-anatomy',
      topRightTag: 'NORMALIZED DIMENSIONS',
      topLeftTag: 'SNOWFLAKE SCHEMA',
      subBadge: 'MULTI-LEVEL HIERARCHIES',
      mainTitle: 'Snowflake Schema Architecture',
      highlightedWords: ['Snowflake Schema Architecture'],
      subtitle: 'Normalizing Dimension tables into secondary sub-dimensions to eliminate redundant attributes:'
    },

    // SLIDE 20: STAR SCHEMA VS SNOWFLAKE COMPARISON MATRIX
    {
      id: 20,
      slideNumber: '20 / 25',
      type: 'comparison-table',
      topRightTag: 'DECISION MATRIX',
      topLeftTag: 'STAR VS SNOWFLAKE',
      subBadge: 'ARCHITECTURAL TRADEOFFS',
      mainTitle: 'Star Schema vs. Snowflake Comparison',
      highlightedWords: ['Comparison'],
      subtitle: 'Evaluating key trade-offs across simplicity, Power BI speed, redundancy, and scalability:'
    },

    // SLIDE 21: GALAXY SCHEMA & FACT CONSTELLATIONS
    {
      id: 21,
      slideNumber: '21 / 25',
      type: 'component-anatomy',
      topRightTag: 'ENTERPRISE SCHEMAS',
      topLeftTag: 'GALAXY SCHEMA',
      subBadge: 'FACT CONSTELLATION PATTERN',
      mainTitle: 'Galaxy Schema (Fact Constellation)',
      highlightedWords: ['Galaxy Schema'],
      subtitle: 'Linking multiple central Fact tables to shared conformable Dimension tables:'
    },

    // SLIDE 22: SECTION 5 DIVIDER — DASHBOARD DESIGN PRINCIPLES
    {
      id: 22,
      slideNumber: '22 / 25',
      type: 'section-divider',
      partNumber: 'PART 5',
      sectionTitle: 'UI/UX & Dashboard Design Principles',
      subtitle: 'Crafting High-Impact, Readable & Interactive Visual Reports',
      darkTheme: true
    },

    // SLIDE 23: DASHBOARD DESIGNER TOOLBELT & WEBSITES
    {
      id: 23,
      slideNumber: '23 / 25',
      type: 'tools-showcase',
      topRightTag: 'DESIGN RESOURCES',
      topLeftTag: 'TOOLBELT',
      subBadge: 'DESIGNER ESSENTIALS',
      mainTitle: 'Websites & Tools Every Designer Needs',
      highlightedWords: ['Websites & Tools'],
      subtitle: 'Essential web resources for icons, color palettes, object removal, and visual inspiration:'
    },

    // SLIDE 24: 6 GOLDEN RULES OF DASHBOARD DESIGN
    {
      id: 24,
      slideNumber: '24 / 25',
      type: 'six-cards',
      topRightTag: 'UI/UX BEST PRACTICES',
      topLeftTag: 'DASHBOARD RULES',
      subBadge: 'VISUAL DESIGN PILLARS',
      mainTitle: '6 Golden Rules of Dashboard Design',
      highlightedWords: ['6 Golden Rules'],
      subtitle: 'Core principles for visual clarity, typographic hierarchy, layout flow, charts, and interactivity:',
      cards: [
        {
          title: '01. Colors',
          description: 'Use 3–4 main colors only. Prefer shades of the same color and maintain strict consistency across all pages.',
          iconName: 'Palette',
        },
        {
          title: '02. Typography (Texts)',
          description: 'Choose a clear font. Hierarchy: Titles large & bold, KPIs medium, Details smaller. Keep labels short & meaningful.',
          iconName: 'Type',
        },
        {
          title: '03. Background',
          description: 'Use a neutral background. The background should always highlight the data, never compete with it.',
          iconName: 'Square',
        },
        {
          title: '04. Layout & Structure',
          description: 'Organize visuals by story flow (F-shape or Z-shape). Keep equal spacing and avoid overcrowding.',
          iconName: 'Grid',
        },
        {
          title: '05. Charts',
          description: 'Pick the right chart for the story. Avoid 3D charts, add clear titles, use data labels, and highlight key numbers.',
          iconName: 'PieChart',
        },
        {
          title: '06. Interactivity',
          description: 'Place slicers & filters in one clean area. Use navigation buttons, tooltips on hover, and enable drill-down/through.',
          iconName: 'Sliders',
        },
      ],
    },

    // SLIDE 25: OUTRO / SESSION COMPLETE SLIDE

    {
      id: 25,
      slideNumber: '25 / 25',
      type: 'outro',
      topRightTag: 'SESSION 7 · COMPLETE',
      topLeftTag: '',
      subBadge: 'SESSION COMPLETE',
      mainTitle: 'From Model to Insight.',
      highlightedWords: ['From Model to Insight.'],
      subtitle: 'Every data model, relationship, and dashboard rule you learned today turns raw rows into decisions someone can act on.',
      darkTheme: true
    }
  ]
};
