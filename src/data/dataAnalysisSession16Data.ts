import { ChapterPresentation } from '../types';

export const dataAnalysisSession16EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-16',
  chapterTitle: 'Session 16: Confidence Intervals, ANOVA & Pandas Fundamentals',
  courseName: 'Data Analysis Diploma • Session 16',
  duration: 'Duration: 3.5 Hours',
  totalSlides: 24,
  slides: [
    // =========================================================
    // PART 01: CONFIDENCE INTERVALS (PDF Slides 01-06)
    // =========================================================

    // Slide 01: Hero Cover
    {
      id: 1,
      slideNumber: '01 / 24',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 16',
      topLeftTag: 'STATISTICS & DATA HANDLING FOR DATA SCIENCE',
      subBadge: 'CONFIDENCE INTERVALS, ANOVA & PANDAS FUNDAMENTALS',
      mainTitle: 'Confidence Intervals & ANOVA — Pandas Fundamentals',
      highlightedWords: ['Confidence Intervals & ANOVA', 'Pandas Fundamentals'],
      subtitle: 'Estimate → Compare Groups → Load Data → Analyze · ANOVA · Pandas Series · DataFrames · Reading Data · CSV / Excel / JSON / SQL',
      darkTheme: true
    },

    // Slide 02: Section 01 Divider
    {
      id: 2,
      slideNumber: '02 / 24',
      type: 'section-divider',
      topRightTag: 'PART 01',
      topLeftTag: 'CONFIDENCE INTERVALS',
      subBadge: '01 · HOW UNCERTAIN ARE WE?',
      mainTitle: 'How Uncertain Are We?',
      highlightedWords: ['How Uncertain', 'Are We?'],
      subtitle: 'Putting honest error bars around our estimates of the unknown',
      darkTheme: true
    },

    // Slide 03: What Is a Confidence Interval?
    {
      id: 3,
      slideNumber: '03 / 24',
      type: 'concept-detail',
      topRightTag: '01 — CONFIDENCE INTERVALS',
      topLeftTag: 'CORE DEFINITION',
      subBadge: 'MISCONCEPTION VS CORRECT MEANING',
      mainTitle: 'What Is a Confidence Interval?',
      highlightedWords: ['What Is a', 'Confidence Interval?'],
      subtitle: 'Fix the most common misconception first: Probability is about the procedure, not any single calculated interval.',
      darkTheme: false
    },

    // Slide 04: Confidence Interval — Formula & Full Worked Example
    {
      id: 4,
      slideNumber: '04 / 24',
      type: 'applied-example',
      topRightTag: '01 — CONFIDENCE INTERVALS',
      topLeftTag: 'FORMULA & CASE STUDY',
      subBadge: 'CI = X-BAR +/- Z* (SIGMA / SQRT(N))',
      mainTitle: 'Confidence Interval — Formula and Full Worked Example',
      highlightedWords: ['Confidence Interval', 'Formula and Worked Example'],
      subtitle: 'Customer Satisfaction Survey: n = 100, x-bar = 7.8, s = 1.5. 95% CI = (7.51, 8.09) — true average is between 7.51 and 8.09',
      darkTheme: false
    },

    // Slide 05: Confidence Intervals in Product Analytics
    {
      id: 5,
      slideNumber: '05 / 24',
      type: 'concept-detail',
      topRightTag: '01 — CONFIDENCE INTERVALS',
      topLeftTag: 'PRODUCT ANALYTICS',
      subBadge: 'COMPARING 90%, 95%, AND 99% CI',
      mainTitle: 'Confidence Intervals in Product Analytics',
      highlightedWords: ['Confidence Intervals', 'Product Analytics'],
      subtitle: 'Scenario: Product team surveys 400 users about daily active usage. x-bar = 23 min/day, s = 8 min. SE = 0.4.',
      darkTheme: false
    },

    // Slide 06: Exercise — Confidence Intervals
    {
      id: 6,
      slideNumber: '06 / 24',
      type: 'exercise',
      topRightTag: '01 — CONFIDENCE INTERVALS',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'EXERCISE 01 · CONFIDENCE INTERVALS',
      mainTitle: 'Exercise — Confidence Intervals',
      highlightedWords: ['Exercise', 'Confidence Intervals'],
      subtitle: 'A call centre monitors agent performance. A sample of n = 81 calls gives: average handling time x-bar = 7.4 minutes, sample std dev s = 2.7 minutes.',
      questions: [
        {
          id: 'q1',
          question: 'Q1: Calculate the Standard Error (SE) for this sample.',
          hint: 'SE = s / sqrt(n). Use n = 81 and s = 2.7.',
          answer: 'SE = s / sqrt(n) = 2.7 / sqrt(81) = 2.7 / 9 = 0.30 minutes.'
        },
        {
          id: 'q2',
          question: 'Q2: Build a 95% confidence interval for the true mean handling time.',
          hint: 'Use z* = 1.96. CI = x-bar +/- z* x SE.',
          answer: 'ME = 1.96 x 0.30 = 0.588 min.\n95% CI = 7.4 +/- 0.588 = (6.81, 7.99) minutes.'
        },
        {
          id: 'q3',
          question: 'Q3: The target handling time is 7.0 minutes. Based on your CI, is there strong evidence that agents are exceeding the target?',
          hint: 'Does 7.0 fall inside or outside your interval? What does that tell you?',
          answer: '7.0 minutes falls INSIDE the interval (6.81, 7.99).\nTherefore, 7.0 is a plausible true population mean. No strong evidence at 95% confidence that agents exceed target.'
        },
        {
          id: 'q4',
          question: 'Q4: The manager wants the margin of error reduced to 0.20 minutes at 95% confidence. What sample size is needed?',
          hint: 'ME = z* x s / sqrt(n). Rearrange for n: n = (z* x s / ME)^2.',
          answer: 'n = (1.96 x 2.7 / 0.20)^2 = (5.292 / 0.20)^2 = (26.46)^2 = 700.1 -> n = 701 calls needed.'
        }
      ],
      darkTheme: false
    },

    // =========================================================
    // PART 02: ANOVA (PDF Slides 07-12)
    // =========================================================

    // Slide 07: Section 02 Divider
    {
      id: 7,
      slideNumber: '07 / 24',
      type: 'section-divider',
      topRightTag: 'PART 02',
      topLeftTag: 'ANOVA',
      subBadge: '02 · COMPARING MORE THAN TWO GROUPS',
      mainTitle: 'Comparing More Than Two Groups',
      highlightedWords: ['Comparing More', 'Than Two Groups'],
      subtitle: 'Why running many t-tests inflates your error rate — and how one test fixes it',
      darkTheme: true
    },

    // Slide 08: Why Not Just Run Multiple T-Tests?
    {
      id: 8,
      slideNumber: '08 / 24',
      type: 'concept-detail',
      topRightTag: '02 — ANOVA',
      topLeftTag: 'STATISTICAL PITFALL',
      subBadge: 'MULTIPLE PAIRWISE T-TESTS',
      mainTitle: 'Why Not Just Run Multiple T-Tests?',
      highlightedWords: ['Why Not Just Run', 'Multiple T-Tests?'],
      subtitle: 'The hidden cost of comparing 3+ groups pairwise: Pairwise tests inflate Type I false-positive error rate.',
      darkTheme: false
    },

    // Slide 09: The F-Statistic — Formula & Full Worked Example
    {
      id: 9,
      slideNumber: '09 / 24',
      type: 'applied-example',
      topRightTag: '02 — ANOVA',
      topLeftTag: 'FORMULA & CASE STUDY',
      subBadge: 'F = MSB / MSW',
      mainTitle: 'The F-Statistic — Formula and Full Worked Example',
      highlightedWords: ['The F-Statistic', 'Formula and Worked Example'],
      subtitle: 'Store Region Sales: 3 store regions report average daily sales (n=5 each, N=15 total). SSB = 16,800, SSW = 14,400. F = 7.0 > 3.89 -> Reject H0!',
      darkTheme: false
    },

    // Slide 10: Applied Example — Does Marketing Channel Affect Customer Spend?
    {
      id: 10,
      slideNumber: '10 / 24',
      type: 'applied-example',
      topRightTag: '02 — ANOVA',
      topLeftTag: 'MARKETING ANALYTICS',
      subBadge: 'ONE-WAY ANOVA CASE STUDY',
      mainTitle: 'Applied Example — Does Marketing Channel Affect Customer Spend?',
      highlightedWords: ['Marketing Channel', 'Customer Spend?'],
      subtitle: '3 marketing channels (n=6 each, N=18): Email mean=$85, Social mean=$95, Search mean=$110. F = 4.0 > 3.68 -> Reject H0!',
      darkTheme: false
    },

    // Slide 11: ANOVA Assumptions & Post-Hoc Tests
    {
      id: 11,
      slideNumber: '11 / 24',
      type: 'six-cards',
      topRightTag: '02 — ANOVA',
      topLeftTag: 'DIAGNOSTICS & EXTENSIONS',
      subBadge: 'ASSUMPTIONS & POST-HOC TESTS',
      mainTitle: 'ANOVA Assumptions & Post-Hoc Tests',
      highlightedWords: ['ANOVA Assumptions', 'Post-Hoc Tests'],
      subtitle: 'What to check before and after running the F-test:',
      cards: [
        {
          title: '[IN] Independence',
          description: 'Observations in each group must be independent of one another.\nViolated by repeated measures on same subjects.\nFix: Use Repeated Measures ANOVA for paired data.',
          iconName: 'Shield'
        },
        {
          title: '[NM] Normality',
          description: 'Each group\'s data should be approximately normally distributed.\nCheck with Q-Q plot or Shapiro-Wilk test.\nFairly robust once n > 30 per group.',
          iconName: 'BarChart2'
        },
        {
          title: '[HV] Homogeneity of Variance',
          description: 'Each group should have roughly equal variance (spread).\nCheck with Levene\'s test before trusting F-test.\nFix: If violated, use Welch\'s ANOVA.',
          iconName: 'Sliders'
        },
        {
          title: '[PH] Post-Hoc Tests',
          description: 'ANOVA tells you THAT groups differ, never WHICH ones.\nTukey HSD compares every pair while controlling overall error rate.\nRun ONLY after a significant F-test.',
          iconName: 'Target'
        },
        {
          title: '[ES] Effect Size (Eta-Squared)',
          description: 'eta^2 = SSB / SST (% of total variance explained).\nSignificant F-test doesn\'t mean effect is practically large.\nRule of thumb: 0.01 small, 0.06 medium, 0.14 large.',
          iconName: 'Activity'
        },
        {
          title: '[TW] Two-Way ANOVA',
          description: 'Tests two factors at once (e.g. Channel AND Region).\nAlso tests interaction: does one factor\'s effect depend on another?\nUse when two variables jointly affect outcome.',
          iconName: 'Grid'
        }
      ],
      darkTheme: false
    },

    // Slide 12: Exercise — ANOVA
    {
      id: 12,
      slideNumber: '12 / 24',
      type: 'exercise',
      topRightTag: '02 — ANOVA',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'EXERCISE 02 · ANOVA',
      mainTitle: 'Exercise — ANOVA',
      highlightedWords: ['Exercise', 'ANOVA'],
      subtitle: 'A researcher tests 3 fertilizers on plant growth (cm), n=5 plants per group (N=15). Group means: A=22, B=27, C=31. SSB=180, SSW=240.',
      questions: [
        {
          id: 'q1',
          question: 'Q1: Calculate MSB and MSW.',
          hint: 'MSB = SSB / (k - 1). MSW = SSW / (N - k). k = 3, N = 15.',
          answer: 'MSB = 180 / (3 - 1) = 180 / 2 = 90.\nMSW = 240 / (15 - 3) = 240 / 12 = 20.'
        },
        {
          id: 'q2',
          question: 'Q2: Calculate the F-statistic.',
          hint: 'F = MSB / MSW.',
          answer: 'F = 90 / 20 = 4.50.'
        },
        {
          id: 'q3',
          question: 'Q3: At alpha = 0.05, F_critical(df1=2, df2=12) = 3.89. Is there a significant difference among fertilizers?',
          hint: 'Compare your F to F_critical.',
          answer: 'F = 4.50 > F_critical = 3.89 -> Reject H0!\nYes, there is a statistically significant difference in mean plant growth among the 3 fertilizers (p < 0.05).'
        },
        {
          id: 'q4',
          question: 'Q4: The F-test comes back significant. Why can\'t you just pick the group with the highest mean and call it done?',
          hint: 'Think about what a significant F-test does and doesn\'t tell you about which groups differ.',
          answer: 'A significant F-test proves THAT a difference exists somewhere, but NOT which specific pairs differ.\nYou must run a Tukey HSD post-hoc test to find which pairs differ significantly.'
        }
      ],
      darkTheme: false
    },

    // =========================================================
    // PART 03: PANDAS DATAFRAMES & SERIES (PDF Slides 13-18)
    // =========================================================

    // Slide 13: Section 03 Divider
    {
      id: 13,
      slideNumber: '13 / 24',
      type: 'section-divider',
      topRightTag: 'PART 03',
      topLeftTag: 'PANDAS',
      subBadge: '03 · DATAFRAMES & SERIES',
      mainTitle: 'DataFrames & Series',
      highlightedWords: ['DataFrames', '& Series'],
      subtitle: 'The building blocks of data analysis in Python',
      darkTheme: true
    },

    // Slide 14: Series vs DataFrame
    {
      id: 14,
      slideNumber: '14 / 24',
      type: 'concept-detail',
      topRightTag: '03 — PANDAS',
      topLeftTag: 'CORE DATA STRUCTURES',
      subBadge: 'SERIES VS DATAFRAME',
      mainTitle: 'Series vs DataFrame',
      highlightedWords: ['Series vs DataFrame'],
      subtitle: 'pandas.Series (1D labeled array) vs pandas.DataFrame (2D labeled table of data)',
      darkTheme: false
    },

    // Slide 15: Creating & Indexing DataFrames
    {
      id: 15,
      slideNumber: '15 / 24',
      type: 'applied-example',
      topRightTag: '03 — PANDAS',
      topLeftTag: 'DATA ACCESS & INDEXING',
      subBadge: 'CREATING & INDEXING DATAFRAMES',
      mainTitle: 'Creating & Indexing DataFrames',
      highlightedWords: ['Creating & Indexing', 'DataFrames'],
      subtitle: 'Selecting by label (.loc) vs position (.iloc) + Worked Example: Building a Sales DataFrame',
      darkTheme: false
    },

    // Slide 16: Applied Example — Which Product Line Sells Best by Region?
    {
      id: 16,
      slideNumber: '16 / 24',
      type: 'applied-example',
      topRightTag: '03 — PANDAS',
      topLeftTag: 'GROUPED WORKFLOW',
      subBadge: 'WHICH PRODUCT LINE SELLS BEST BY REGION?',
      mainTitle: 'Applied Example — Which Product Line Sells Best by Region?',
      highlightedWords: ['Which Product Line', 'Sells Best by Region?'],
      subtitle: 'Full pandas workflow: 01. Inspect head/info -> 02. Clean dropna -> 03. Groupby sum -> 04. idxmax top product -> 05. Business Answer',
      darkTheme: false
    },

    // Slide 17: Common Pandas Operations
    {
      id: 17,
      slideNumber: '17 / 24',
      type: 'six-cards',
      topRightTag: '03 — PANDAS',
      topLeftTag: 'WRANGLING TOOLKIT',
      subBadge: 'COMMON PANDAS OPERATIONS',
      mainTitle: 'Common Pandas Operations',
      highlightedWords: ['Common Pandas Operations'],
      subtitle: 'Most real analysis is 90% cleaning and reshaping, 10% modeling. These operations cover most of that 90%:',
      cards: [
        {
          title: '[FL] Filtering Rows',
          description: 'df[df[\'age\'] > 30] keeps only rows where condition is True.\nCombine conditions with & (and) / | (or).\ndf.query("age > 30") is a readable alternative.',
          iconName: 'ListFilter'
        },
        {
          title: '[NC] New / Modified Columns',
          description: 'df[\'profit\'] = df[\'revenue\'] - df[\'cost\'] creates a column.\ndf[\'col\'].apply(func) runs a custom function on every value.\nVectorised operations are far faster than apply.',
          iconName: 'Sparkles'
        },
        {
          title: '[GB] GroupBy & Aggregate',
          description: 'df.groupby(\'region\')[\'sales\'].sum() totals sales per region.\n.agg([\'mean\',\'sum\',\'count\']) computes several stats at once.\nClassic split-apply-combine pattern.',
          iconName: 'Grid'
        },
        {
          title: '[MG] Merging & Joining',
          description: 'pd.merge(df1, df2, on=\'id\', how=\'left\') combines two tables by shared key.\nhow = \'left\' / \'right\' / \'inner\' / \'outer\' controls rows.\nSQL JOIN equivalent.',
          iconName: 'Layers'
        },
        {
          title: '[MS] Missing Data',
          description: 'df.isna().sum() counts missing values per column.\ndf.fillna(0) or df.dropna() handles them.\nDecide fill vs drop based on what missingness means.',
          iconName: 'AlertTriangle'
        },
        {
          title: '[SR] Sorting & Ranking',
          description: 'df.sort_values(\'revenue\', ascending=False) orders rows.\ndf.nlargest(5, \'revenue\') grabs top 5 directly.\n.rank() assigns rank within column.',
          iconName: 'Award'
        }
      ],
      darkTheme: false
    },

    // Slide 18: Exercise — Pandas DataFrames & Series
    {
      id: 18,
      slideNumber: '18 / 24',
      type: 'exercise',
      topRightTag: '03 — PANDAS',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'EXERCISE 03 · PANDAS DATAFRAMES',
      mainTitle: 'Exercise — Pandas DataFrames & Series',
      highlightedWords: ['Exercise', 'Pandas DataFrames'],
      subtitle: 'A DataFrame \'orders\' has columns: customer_id, city, amount, status (\'paid\'/\'refunded\'), with 2,000 rows.',
      questions: [
        {
          id: 'q1',
          question: 'Q1: Select only the \'amount\' and \'city\' columns as a new DataFrame.',
          hint: 'Use a list of column names inside double brackets: df[[...]].',
          answer: 'orders[[\'amount\', \'city\']]'
        },
        {
          id: 'q2',
          question: 'Q2: Filter to rows where status is \'paid\' only.',
          hint: 'df.loc[df[\'status\'] == \'paid\'].',
          answer: 'orders.loc[orders[\'status\'] == \'paid\']'
        },
        {
          id: 'q3',
          question: 'Q3: Calculate total paid revenue per city, sorted highest to lowest.',
          hint: 'groupby(\'city\')[\'amount\'].sum(), then sort_values(ascending=False).',
          answer: 'orders.loc[orders[\'status\']==\'paid\'].groupby(\'city\')[\'amount\'].sum().sort_values(ascending=False)'
        },
        {
          id: 'q4',
          question: 'Q4: 10% of the \'amount\' values are missing (NaN). What should you check before deciding to drop or fill them?',
          hint: 'Think about whether missingness is random, or tied to something like refund status.',
          answer: 'Check df.isna().sum() before fillna/dropna! Verify if NaNs correlate with refunded status (where amount might intentionally be missing/zero) vs unrecorded paid orders.'
        }
      ],
      darkTheme: false
    },

    // =========================================================
    // PART 04: READING DATA (PDF Slides 19-24)
    // =========================================================

    // Slide 19: Section 04 Divider
    {
      id: 19,
      slideNumber: '19 / 24',
      type: 'section-divider',
      topRightTag: 'PART 04',
      topLeftTag: 'READING DATA',
      subBadge: '04 · GETTING REAL DATA INTO PANDAS',
      mainTitle: 'Getting Real Data into Pandas',
      highlightedWords: ['Getting Real Data', 'into Pandas'],
      subtitle: 'CSV, Excel, JSON, and SQL — every source, one library',
      darkTheme: true
    },

    // Slide 20: The Four Core Readers
    {
      id: 20,
      slideNumber: '20 / 24',
      type: 'concept-detail',
      topRightTag: '04 — READING DATA',
      topLeftTag: 'PANDAS READERS',
      subBadge: 'ONE CONSISTENT PATTERN: PD.READ_X()',
      mainTitle: 'The Four Core Readers',
      highlightedWords: ['The Four Core Readers'],
      subtitle: 'One consistent pattern: pd.read_X() always returns a DataFrame',
      darkTheme: false
    },

    // Slide 21: Applied Example — Reading a Messy CSV Export
    {
      id: 21,
      slideNumber: '21 / 24',
      type: 'applied-example',
      topRightTag: '04 — READING DATA',
      topLeftTag: 'IMPORT CASE STUDY',
      subBadge: 'READING A MESSY CSV EXPORT',
      mainTitle: 'Applied Example — Reading a Messy CSV Export',
      highlightedWords: ['Reading a Messy', 'CSV Export'],
      subtitle: 'Scenario: \'sales_export.csv\' uses semicolons instead of commas, has 2-row header, and text dates. A first pd.read_csv() fails.',
      darkTheme: false
    },

    // Slide 22: Reading Data — Common Pitfalls
    {
      id: 22,
      slideNumber: '22 / 24',
      type: 'six-cards',
      topRightTag: '04 — READING DATA',
      topLeftTag: 'IMPORT PITFALLS',
      subBadge: 'WHAT BREAKS A CLEAN IMPORT',
      mainTitle: 'Reading Data — Common Pitfalls',
      highlightedWords: ['Reading Data', 'Common Pitfalls'],
      subtitle: 'Most \'pandas bugs\' are actually data-format surprises caught too late. Check for these before you analyze:',
      cards: [
        {
          title: '[EN] Encoding Errors',
          description: 'A file saved as Latin-1 or Windows-1252 raises UnicodeDecodeError under UTF-8.\nFix: pd.read_csv(path, encoding=\'latin1\') or try \'utf-8-sig\' for BOM files.',
          iconName: 'AlertTriangle'
        },
        {
          title: '[DT] Wrong Dtype Inference',
          description: 'ZIP codes or IDs starting with 0 get silently read as integers, dropping leading zero.\nFix: Pass dtype={\'zip\': str} explicitly at read time.',
          iconName: 'Shield'
        },
        {
          title: '[LG] Large File Memory Issues',
          description: 'Loading a 10GB CSV in one call can exhaust available memory.\nFix: Use chunksize=100000 to process in batches, or read only usecols=[...].',
          iconName: 'Cpu'
        },
        {
          title: '[SH] Wrong Sheet or Header Row',
          description: 'Excel files often have title rows, merged cells, or multiple sheets.\nFix: Set sheet_name=\'Data\' and header=2 (or skiprows) explicitly.',
          iconName: 'Layers'
        },
        {
          title: '[NJ] Nested JSON Structures',
          description: 'pd.read_json() flattens poorly when values are nested dicts/lists.\nFix: Use pd.json_normalize(data) for nested API responses.',
          iconName: 'Grid'
        },
        {
          title: '[SQ] Unsafe SQL Queries',
          description: 'Building SQL strings with f-strings/concatenation risks SQL injection.\nFix: Pass parameters separately: pd.read_sql(query, con, params=[...]).',
          iconName: 'Target'
        }
      ],
      darkTheme: false
    },

    // Slide 23: Exercise — Reading Data
    {
      id: 23,
      slideNumber: '23 / 24',
      type: 'exercise',
      topRightTag: '04 — READING DATA',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'EXERCISE 04 · READING DATA',
      mainTitle: 'Exercise — Reading Data',
      highlightedWords: ['Exercise', 'Reading Data'],
      subtitle: 'You receive: \'inventory.csv\' (tab-separated, UTF-8), \'budget.xlsx\' (data on sheet \'FY26\'), and a 50M-row \'events.json\' API dump.',
      questions: [
        {
          id: 'q1',
          question: 'Q1: Write the pd.read_csv() call to correctly load inventory.csv.',
          hint: 'What parameter controls the delimiter when it isn\'t a comma?',
          answer: 'pd.read_csv(\'inventory.csv\', sep=\'\\t\')'
        },
        {
          id: 'q2',
          question: 'Q2: Write the pd.read_excel() call to load the correct sheet from budget.xlsx.',
          hint: 'Which parameter names a specific sheet instead of the first one?',
          answer: 'pd.read_excel(\'budget.xlsx\', sheet_name=\'FY26\')'
        },
        {
          id: 'q3',
          question: 'Q3: events.json has nested \'user\': {\'id\':.., \'city\':..} objects in every record. How do you flatten it into columns?',
          hint: 'Which pandas function is built specifically for nested JSON records?',
          answer: 'import json\nwith open(\'events.json\') as f:\n    data = json.load(f)\npd.json_normalize(data)'
        },
        {
          id: 'q4',
          question: 'Q4: events.json is far too large to load in one call on your laptop. What\'s your strategy?',
          hint: 'Think about a parameter that lets you process the file in batches.',
          answer: 'Use chunksize=100000 parameter in pd.read_json() to process in batches and aggregate each chunk incrementally.'
        }
      ],
      darkTheme: false
    },

    // Slide 24: What's Next? Outro Hero
    {
      id: 24,
      slideNumber: '24 / 24',
      type: 'outro-hero',
      topRightTag: 'INSTANT ACADEMY',
      topLeftTag: 'SESSION 16 COMPLETE',
      subBadge: 'CONFIDENCE INTERVALS, ANOVA & PANDAS COMPLETED!',
      mainTitle: 'YOU CAN NOW:',
      highlightedWords: ['YOU CAN', 'NOW:'],
      subtitle: 'Congratulations! You have completed Session 16 (Confidence Intervals, ANOVA & Pandas Fundamentals).',
      nextSessionNote: '🎉 Session 16 Complete! Next Session: Data Visualization with Matplotlib & Seaborn',
      darkTheme: true
    }
  ]
};

export const dataAnalysisSession16AR: ChapterPresentation = {
  ...dataAnalysisSession16EN,
  chapterTitle: 'السيشن 16: فترات الثقة، تحليل التباين ANOVA، وأساسيات بانداز (Confidence Intervals, ANOVA & Pandas)',
  courseName: 'دبلومة تحليل البيانات • السيشن 16'
};
