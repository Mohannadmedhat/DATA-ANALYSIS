import { ChapterPresentation } from '../types';

export const dataAnalysisSession04EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-04',
  chapterTitle: 'Session 04: Descriptive Statistics Part 2',
  courseName: 'Data Analysis Diploma • Session 04',
  duration: 'Duration: 3.5 Hours',
  totalSlides: 52,
  slides: [
    // ==========================================
    // PART 1: DESCRIPTIVE STATISTICS & RELATIONSHIPS
    // ==========================================

    // Slide 01: Hero Cover
    {
      id: 1,
      slideNumber: '01 / 52',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 04',
      topLeftTag: 'DESCRIPTIVE STATISTICS PART 2',
      subBadge: 'SESSION 4 · COMPLETE',
      mainTitle: 'Descriptive Statistics',
      highlightedWords: ['Descriptive Statistics', 'Part 2'],
      subtitle: 'Handling Outliers · Z-Score · Covariance & Correlation · Statistics & Date/Time Functions in Excel',
      darkTheme: true
    },

    // Slide 02: Session Objectives (6 Cards)
    {
      id: 2,
      slideNumber: '02 / 52',
      type: 'six-cards',
      topRightTag: 'SESSION OBJECTIVES',
      topLeftTag: 'LEARNING GOALS • SESSION 04',
      subBadge: 'PART 1 COMPETENCIES',
      mainTitle: 'What You Will Be Able To Do',
      highlightedWords: ['What You Will Be Able To Do'],
      subtitle: 'By the end of this session, you will confidently apply these analytical capabilities to real datasets:',
      cards: [
        {
          title: 'Identify Outliers',
          description: 'Recognize abnormal values in a dataset using both visual and mathematical methods',
          iconName: 'AlertTriangle'
        },
        {
          title: 'Understand Their Impact',
          description: 'See how outliers distort mean, variance, and downstream business analysis',
          iconName: 'Activity'
        },
        {
          title: 'Calculate Z-Scores',
          description: 'Measure how far a value sits from the mean on a standardized standard-deviation scale',
          iconName: 'Target'
        },
        {
          title: 'Read Relationships',
          description: 'See how two variables move together using bivariate scatter plots and trend vectors',
          iconName: 'TrendingUp'
        },
        {
          title: 'Covariance vs Correlation',
          description: 'Know the critical difference in units, scale, comparability, and when to report each',
          iconName: 'Compass'
        },
        {
          title: 'Support Decisions',
          description: 'Translate statistical relationship metrics into actionable, executive-ready business insights',
          iconName: 'CheckCircle'
        }
      ],
      darkTheme: false
    },

    // Slide 03: Section Divider Part 1
    {
      id: 3,
      slideNumber: '03 / 52',
      type: 'section-divider',
      partNumber: 'PART 1',
      sectionTitle: 'Quick Recap',
      mainTitle: 'Quick Recap',
      highlightedWords: ['Quick Recap'],
      subtitle: "Part 1 in sixty seconds — the vocabulary today's session builds on.",
      subBadge: 'FOUNDATIONAL VOCABULARY',
      darkTheme: true
    },

    // Slide 04: From Descriptive Statistics Part 1 (7 Cards)
    {
      id: 4,
      slideNumber: '04 / 52',
      type: 'seven-cards',
      topRightTag: 'QUICK RECAP',
      topLeftTag: 'FOUNDATIONS • SESSION 04',
      subBadge: 'CONCEPTS IN 60 SECONDS',
      mainTitle: 'From Descriptive Statistics Part 1',
      highlightedWords: ['From Descriptive Statistics Part 1'],
      subtitle: 'Essential statistical vocabulary and measures from Session 03 that form the bedrock for today:',
      cards: [
        {
          title: 'Mean',
          description: 'The balancing point of all values: Σx ÷ n',
          iconName: 'Target'
        },
        {
          title: 'Median',
          description: 'The middle value in sorted order (resistant to extremes)',
          iconName: 'Sliders'
        },
        {
          title: 'Mode',
          description: 'The most frequently occurring observation in data',
          iconName: 'Zap'
        },
        {
          title: 'Variance & SD',
          description: 'How spread out values are from the mean (s² & s)',
          iconName: 'Activity'
        },
        {
          title: 'Quartiles',
          description: 'Q1, Median, Q3 — dividing the sorted distribution into fourths',
          iconName: 'Layers'
        },
        {
          title: 'Percentiles',
          description: 'The exact value below which a given % of data falls',
          iconName: 'BarChart2'
        },
        {
          title: 'Box Plot',
          description: 'Five-number summary visually capturing center and spread',
          iconName: 'Building'
        }
      ],
      darkTheme: false
    },

    // Slide 05: Section Divider Part 2
    {
      id: 5,
      slideNumber: '05 / 52',
      type: 'section-divider',
      partNumber: 'PART 2',
      sectionTitle: 'Handling Outliers',
      mainTitle: 'Handling Outliers',
      highlightedWords: ['Handling Outliers'],
      subtitle: 'One unusual value can quietly reshape an entire analysis.',
      subBadge: 'DETECTION & TREATMENT',
      darkTheme: true
    },

    // Slide 06: What Are Outliers?
    {
      id: 6,
      slideNumber: '06 / 52',
      type: 'outliers-intro',
      topRightTag: 'HANDLING OUTLIERS',
      topLeftTag: 'ANOMALY DETECTION • SESSION 04',
      subBadge: 'DEFINITION & EXAMPLES',
      mainTitle: 'What Are Outliers?',
      highlightedWords: ['What Are Outliers?'],
      subtitle: 'A data point significantly different from other observations in the distribution.',
      definitionBox: {
        title: 'Definition & Core Rules',
        bullets: [
          'Sits far outside the typical pattern of the rest of the dataset',
          'Can be a genuine extreme real-world case, or a data entry/sensor error worth checking',
          'Not automatically "wrong" — always investigate root causes before deciding to remove or retain',
          'Every dataset should be systematically scanned for outliers before statistical modeling begins'
        ]
      },
      salaryExample: {
        title: 'Salary Example',
        description: 'A team of 10 engineers earning $50k–$70k, with one executive director earning $300k'
      },
      salesExample: {
        title: 'Sales Example',
        description: 'Typical daily e-commerce sales hovering near $2,000, with one Black Friday spike to $40,000'
      },
      darkTheme: false
    },

    // Slide 07: Three Types of Outliers
    {
      id: 7,
      slideNumber: '07 / 52',
      type: 'three-outlier-types',
      topRightTag: 'HANDLING OUTLIERS',
      topLeftTag: 'ANOMALY TAXONOMY • SESSION 04',
      subBadge: 'CLASSIFICATION',
      mainTitle: 'Three Types of Outliers',
      highlightedWords: ['Three Types of Outliers'],
      subtitle: 'Understanding the contextual nature of anomalies to determine proper treatment:',
      types: [
        {
          title: 'Global Outlier',
          subtitle: 'Point Anomaly',
          iconName: 'Globe',
          bullets: [
            'Extreme compared to the entire dataset regardless of circumstances',
            'Example: one $300k salary among an entry-level team earning $50k–$70k',
            'The most common and easiest type of outlier to spot on basic charts'
          ]
        },
        {
          title: 'Contextual Outlier',
          subtitle: 'Conditional Anomaly',
          iconName: 'Target',
          bullets: [
            'Unusual only within a specific temporal, seasonal, or behavioral context',
            'Example: 35°C is normal in summer, but a severe anomaly in winter',
            'Requires knowing domain context and segmenting data to detect'
          ]
        },
        {
          title: 'Collective Outlier',
          subtitle: 'Pattern Anomaly',
          iconName: 'Layers',
          bullets: [
            'A group of values that together deviate noticeably from normal structure',
            'Example: a sudden cluster of failed transactions within a 15-minute window',
            'Individually each value may look valid, but the collective pattern is abnormal'
          ]
        }
      ],
      darkTheme: false
    },

    // Slide 08: Why Outliers Matter (4 Cards)
    {
      id: 8,
      slideNumber: '08 / 52',
      type: 'four-cards',
      topRightTag: 'HANDLING OUTLIERS',
      topLeftTag: 'BUSINESS IMPACT • SESSION 04',
      subBadge: 'DISTORTION RISKS',
      mainTitle: 'Why Outliers Matter',
      highlightedWords: ['Why Outliers Matter'],
      subtitle: 'How extreme values propagate through pipelines, skewing conclusions and business decisions:',
      cards: [
        {
          title: 'The Mean',
          description: 'Pulled sharply toward the outlier, misrepresenting what is typical for the majority',
          iconName: 'Target'
        },
        {
          title: 'Standard Deviation',
          description: 'Inflates rapidly, making normal baseline data look far more volatile than it is',
          iconName: 'Activity'
        },
        {
          title: 'ML Models',
          description: 'Distorts trained regression gradients and reduces predictive precision on normal cases',
          iconName: 'Cpu'
        },
        {
          title: 'Business Decisions',
          description: 'Wrong analytical conclusions can lead to costly, misdirected executive budget allocations',
          iconName: 'Building'
        }
      ],
      darkTheme: false
    },

    // Slide 09: How Do We Detect Outliers?
    {
      id: 9,
      slideNumber: '09 / 52',
      type: 'detection-methods',
      topRightTag: 'HANDLING OUTLIERS',
      topLeftTag: 'STATISTICAL SCREENING • SESSION 04',
      subBadge: '4 SCREENING METHODS',
      mainTitle: 'How Do We Detect Outliers?',
      highlightedWords: ['How Do We Detect Outliers?'],
      subtitle: 'Four industry-standard methods from exploratory visualization to rigorous parametric tests:',
      methods: [
        {
          title: 'Visualization',
          description: 'Scatter plots and histograms make isolated extreme points immediately visible at a glance',
          iconName: 'Eye'
        },
        {
          title: 'Box Plot',
          description: 'Points falling beyond the 1.5×IQR whiskers are mathematically flagged automatically',
          iconName: 'BarChart2'
        },
        {
          title: 'IQR Rule',
          description: 'A precise, non-parametric formula calculating lower and upper fence boundaries',
          iconName: 'Sliders'
        },
        {
          title: 'Z-Score',
          description: 'Parametric standard deviation threshold flagging any standardized score with |Z| > 3',
          iconName: 'Target'
        }
      ],
      darkTheme: false
    },

    // Slide 10: The IQR Rule
    {
      id: 10,
      slideNumber: '10 / 52',
      type: 'iqr-rule-visual',
      topRightTag: 'HANDLING OUTLIERS',
      topLeftTag: 'FENCE METHOD • SESSION 04',
      subBadge: 'INNER & OUTER FENCES',
      mainTitle: 'The IQR Rule',
      highlightedWords: ['The IQR Rule'],
      subtitle: 'Any value beyond the fences is flagged as a potential outlier — here, 45 clearly falls outside the upper fence.',
      formula: 'Outlier if value < Q1 − 1.5×IQR  or  value > Q3 + 1.5×IQR',
      q1: 14.5,
      q3: 20.5,
      iqr: 6.0,
      lowerFence: 6.1,
      upperFence: 29.1,
      samplePoints: [12, 14, 15, 16, 18, 20, 22],
      outlierPoint: 45,
      darkTheme: false
    },

    // Slide 11: Section Divider Part 3
    {
      id: 11,
      slideNumber: '11 / 52',
      type: 'section-divider',
      partNumber: 'PART 3',
      sectionTitle: 'Z-Score',
      mainTitle: 'Z-Score',
      highlightedWords: ['Z-Score'],
      subtitle: '"How many standard deviations away from the mean does this value sit?"',
      subBadge: 'STANDARDIZED UNITS',
      darkTheme: true
    },

    // Slide 12: Z-Score — Standardizing a Value
    {
      id: 12,
      slideNumber: '12 / 52',
      type: 'zscore-intro',
      topRightTag: 'Z-SCORE',
      topLeftTag: 'STANDARDIZATION • SESSION 04',
      subBadge: 'EMPIRICAL RULE (68-95-99.7)',
      mainTitle: 'Z-Score — Standardizing a Value',
      highlightedWords: ['Z-Score — Standardizing a Value'],
      subtitle: 'Converts any raw observation into a dimensionless, universally comparable unit of spread.',
      definitionBox: {
        title: 'Definition & Formula',
        bullets: [
          'Measures how many standard deviations a value is located away from the mean',
          'Formula: Z = (X − Mean) ÷ Standard Deviation',
          'Converts any value into a common, comparable scale across different datasets and units',
          'Works especially well when data follows a roughly normal (bell-shaped) distribution',
          'The fundamental building block for statistically detecting abnormal outliers'
        ]
      },
      darkTheme: false
    },

    // Slide 13: Positive, Negative & Zero Z-Scores
    {
      id: 13,
      slideNumber: '13 / 52',
      type: 'zscore-three-cases',
      topRightTag: 'Z-SCORE',
      topLeftTag: 'DISTRIBUTION POSITION • SESSION 04',
      subBadge: 'POLARITY & MEAN RELATIVE POSITION',
      mainTitle: 'Positive, Negative & Zero Z-Scores',
      highlightedWords: ['Positive, Negative & Zero Z-Scores'],
      subtitle: 'A negative Z-score means the value is below the mean; positive means above; zero means it equals the mean exactly.',
      cases: [
        {
          type: 'Negative Z-Score',
          scoreText: 'Z = −1',
          meaning: 'Below the mean',
          description: 'Sits to the left of center; 1 standard deviation below average'
        },
        {
          type: 'Zero Z-Score',
          scoreText: 'Z = 0',
          meaning: 'Exactly at the mean',
          description: 'Aligns perfectly with the center of gravity of the distribution'
        },
        {
          type: 'Positive Z-Score',
          scoreText: 'Z = +1',
          meaning: 'Above the mean',
          description: 'Sits to the right of center; 1 standard deviation above average'
        }
      ],
      darkTheme: false
    },

    // Slide 14: Interpreting Z-Score Values
    {
      id: 14,
      slideNumber: '14 / 52',
      type: 'zscore-table',
      topRightTag: 'Z-SCORE',
      topLeftTag: 'INTERPRETATION GUIDE • SESSION 04',
      subBadge: 'THRESHOLD CLASSIFICATION',
      mainTitle: 'Interpreting Z-Score Values',
      highlightedWords: ['Interpreting Z-Score Values'],
      subtitle: 'Translating numeric Z-scores into statistical frequency and outlier likelihood:',
      tableRows: [
        {
          zScore: 'Z = 0',
          meaning: 'The value equals the mean exactly',
          interpretation: 'Perfectely typical — right at the center of the distribution'
        },
        {
          zScore: 'Z = +1',
          meaning: 'One standard deviation above the mean',
          interpretation: 'Somewhat above average, still very common (~84th percentile)'
        },
        {
          zScore: 'Z = −1',
          meaning: 'One standard deviation below the mean',
          interpretation: 'Somewhat below average, still very common (~16th percentile)'
        },
        {
          zScore: '|Z| > 3',
          meaning: 'More than three standard deviations from the mean',
          interpretation: 'Rare (<0.3% probability) — commonly flagged as an outlier'
        }
      ],
      darkTheme: false
    },

    // Slide 15: Step-by-Step: Calculating a Z-Score
    {
      id: 15,
      slideNumber: '15 / 52',
      type: 'zscore-calculation',
      topRightTag: 'Z-SCORE',
      topLeftTag: 'HANDS-ON FORMULA • SESSION 04',
      subBadge: 'STEP-BY-STEP CALCULATION',
      mainTitle: 'Step-by-Step: Calculating a Z-Score',
      highlightedWords: ['Step-by-Step: Calculating a Z-Score'],
      subtitle: 'Dataset: 10, 12, 15, 18, 20 — Calculate the Z-score for the value 20',
      calculation: {
        dataset: [10, 12, 15, 18, 20],
        targetVal: 20,
        mean: 15,
        sd: 3.69,
        gap: 5.0,
        zResult: 1.35
      },
      darkTheme: false
    },

    // Slide 16: Using Z-Score to Flag Outliers
    {
      id: 16,
      slideNumber: '16 / 52',
      type: 'zscore-flag-outliers',
      topRightTag: 'Z-SCORE',
      topLeftTag: 'PRODUCTION PRACTICE • SESSION 04',
      subBadge: 'THRESHOLD RULE (|Z| > 3)',
      mainTitle: 'Using Z-Score to Flag Outliers',
      highlightedWords: ['Using Z-Score to Flag Outliers'],
      subtitle: 'Deploying standardized thresholds for automated anomaly detection pipelines:',
      definitionBox: {
        title: 'Detection in Practice',
        bullets: [
          'Calculate the Z-score for every single numeric value in the target column',
          'Common rule of thumb: flag any value with |Z| > 3 as a potential outlier',
          'Works best and most reliably when data follows a roughly normal distribution',
          'Business example: an automated transaction 4 standard deviations above user average triggers fraud hold',
          'Provides a precise, repeatable, code-friendly alternative to manual visual inspection'
        ]
      },
      outlierZ: 4.1,
      darkTheme: false
    },

    // Slide 17: Section Divider Part 4
    {
      id: 17,
      slideNumber: '17 / 52',
      type: 'section-divider',
      partNumber: 'PART 4',
      sectionTitle: 'Covariance',
      mainTitle: 'Covariance',
      highlightedWords: ['Covariance'],
      subtitle: 'Do two variables tend to rise and fall together — or in opposite directions?',
      subBadge: 'BIVARIATE CO-MOVEMENT',
      darkTheme: true
    },

    // Slide 18: Covariance — Do Two Variables Move Together?
    {
      id: 18,
      slideNumber: '18 / 52',
      type: 'covariance-intro',
      topRightTag: 'COVARIANCE',
      topLeftTag: 'JOINT VARIABILITY • SESSION 04',
      subBadge: 'DIRECTION ONLY',
      mainTitle: 'Covariance — Do Two Variables Move Together?',
      highlightedWords: ['Covariance — Do Two Variables Move Together?'],
      subtitle: 'Quantifying whether deviations from respective means align in unison or oppose each other.',
      definitionBox: {
        title: 'Shows Whether Two Variables Move Together',
        bullets: [
          'Positive covariance: variables tend to increase together (both above mean or both below)',
          'Negative covariance: as one variable increases, the other tends to decrease',
          'Zero covariance: no consistent relationship in directional movement',
          'Crucial limitation: only indicates direction — not how strong the relationship actually is',
          'Excel: =COVARIANCE.P() for a complete population',
          'Excel: =COVARIANCE.S() for an empirical sample'
        ]
      },
      darkTheme: false
    },

    // Slide 19: Positive Covariance
    {
      id: 19,
      slideNumber: '19 / 52',
      type: 'covariance-positive',
      topRightTag: 'COVARIANCE',
      topLeftTag: 'DIRECT RELATIONSHIPS • SESSION 04',
      subBadge: 'POSITIVE CO-MOVEMENT',
      mainTitle: 'Positive Covariance',
      highlightedWords: ['Positive Covariance'],
      subtitle: 'When above-average values in X correspond to above-average values in Y.',
      exampleBox: {
        title: 'Study Hours vs Exam Scores',
        bullets: [
          'As study hours increase, exam scores tend to systematically increase too',
          'Both variables rise together — data points cluster in the "both high" and "both low" quadrants',
          'Business example: Marketing Spend vs Revenue — higher monthly ad budget drives higher sales',
          'Business example: Employee Training Hours vs Operational Quality Score'
        ]
      },
      darkTheme: false
    },

    // Slide 20: Negative Covariance
    {
      id: 20,
      slideNumber: '20 / 52',
      type: 'covariance-negative',
      topRightTag: 'COVARIANCE',
      topLeftTag: 'INVERSE RELATIONSHIPS • SESSION 04',
      subBadge: 'INVERSE CO-MOVEMENT',
      mainTitle: 'Negative Covariance',
      highlightedWords: ['Negative Covariance'],
      subtitle: 'When an increase in one variable corresponds systematically to a decrease in the other.',
      exampleBox: {
        title: 'Price vs Demand',
        bullets: [
          'As product price increases, market consumer demand tends to decrease',
          'One variable rises while the other falls — the classic downward economic relationship',
          'Business example: Product retail price vs units sold per month',
          'Business example: Shipping delivery delay hours vs customer CSAT satisfaction score'
        ]
      },
      darkTheme: false
    },

    // Slide 21: Section Divider Part 5
    {
      id: 21,
      slideNumber: '21 / 52',
      type: 'section-divider',
      partNumber: 'PART 5',
      sectionTitle: 'Correlation',
      mainTitle: 'Correlation',
      highlightedWords: ['Correlation'],
      subtitle: 'The strength and direction of a relationship, on one universal scale.',
      subBadge: 'PEARSON R METRIC',
      darkTheme: true
    },

    // Slide 22: Correlation — Strength and Direction
    {
      id: 22,
      slideNumber: '22 / 52',
      type: 'correlation-scale',
      topRightTag: 'CORRELATION',
      topLeftTag: 'UNIVERSAL SCALE • SESSION 04',
      subBadge: 'NORMALIZED FROM −1 TO +1',
      mainTitle: 'Correlation — Strength and Direction',
      highlightedWords: ['Correlation — Strength and Direction'],
      subtitle: 'Correlation measures both the strength and direction of the relationship between two variables, always bounded on the same −1 to +1 scale — regardless of original units.',
      spectrumPoints: [
        { val: -1.0, label: 'Perfect Negative', desc: 'Perfect inverse relationship: points fall exactly on a downward straight line' },
        { val: 0.0, label: 'No Linear Relationship', desc: 'Variables are uncorrelated; knowledge of X provides zero linear forecast of Y' },
        { val: +1.0, label: 'Perfect Positive', desc: 'Perfect direct relationship: points fall exactly on an upward straight line' }
      ],
      sampleR: 0.7,
      sampleLabel: 'Strong Positive',
      darkTheme: false
    },

    // Slide 23: Interpreting Correlation Strength
    {
      id: 23,
      slideNumber: '23 / 52',
      type: 'correlation-strength-table',
      topRightTag: 'CORRELATION',
      topLeftTag: 'BENCHMARK TIERS • SESSION 04',
      subBadge: 'COHEN & INDUSTRY STANDARDS',
      mainTitle: 'Interpreting Correlation Strength',
      highlightedWords: ['Interpreting Correlation Strength'],
      subtitle: 'Industry-standard guidelines to interpret Pearson correlation coefficient (r):',
      tiers: [
        {
          range: '0.8 to 1.0  (or −0.8 to −1.0)',
          strength: 'Very Strong',
          example: 'Digital advertising spend and impressions delivered',
          badgeColor: 'emerald'
        },
        {
          range: '0.6 to 0.8  (or −0.6 to −0.8)',
          strength: 'Strong',
          example: 'Paid marketing spend and monthly sales revenue',
          badgeColor: 'blue'
        },
        {
          range: '0.4 to 0.6  (or −0.4 to −0.6)',
          strength: 'Moderate',
          example: 'Employee job tenure and annual performance rating',
          badgeColor: 'indigo'
        },
        {
          range: '0.2 to 0.4  (or −0.2 to −0.4)',
          strength: 'Weak',
          example: 'Office ambient temperature and programmer productivity',
          badgeColor: 'amber'
        },
        {
          range: '0.0 to 0.2  (or −0.0 to −0.2)',
          strength: 'Very Weak / None',
          example: 'Employee shoe size and annual base salary',
          badgeColor: 'slate'
        }
      ],
      darkTheme: false
    },

    // Slide 24: Reading a Scatter Plot
    {
      id: 24,
      slideNumber: '24 / 52',
      type: 'scatter-plot-trio',
      topRightTag: 'CORRELATION',
      topLeftTag: 'VISUAL PATTERNS • SESSION 04',
      subBadge: 'THREE CANONICAL ARCHETYPES',
      mainTitle: 'Reading a Scatter Plot',
      highlightedWords: ['Reading a Scatter Plot'],
      subtitle: 'Visually identifying direction and tightness of clustering around linear trends:',
      plots: [
        {
          title: 'Positive Correlation',
          xLabel: 'Marketing Spend',
          yLabel: 'Sales',
          trend: 'upward',
          description: 'Points rise together from bottom-left to top-right along an upward trend vector'
        },
        {
          title: 'Negative Correlation',
          xLabel: 'Price',
          yLabel: 'Demand',
          trend: 'downward',
          description: 'Points fall together from top-left to bottom-right along a downward trend vector'
        },
        {
          title: 'No Correlation',
          xLabel: 'Shoe Size',
          yLabel: 'Salary',
          trend: 'flat',
          description: 'Points disperse evenly without an organized linear slope; line of best fit is horizontal'
        }
      ],
      darkTheme: false
    },

    // Slide 25: Covariance vs Correlation (Comparison Matrix)
    {
      id: 25,
      slideNumber: '25 / 52',
      type: 'covariance-vs-correlation',
      topRightTag: 'COVARIANCE & CORRELATION',
      topLeftTag: 'SIDE-BY-SIDE COMPARISON • SESSION 04',
      subBadge: 'EXECUTIVE REFERENCE MATRIX',
      mainTitle: 'Covariance vs Correlation',
      highlightedWords: ['Covariance vs Correlation'],
      subtitle: 'Clear dimensional differences between raw unstandardized co-movement and standardized correlation:',
      rows: [
        {
          criteria: 'What it shows',
          covariance: 'Direction only (+, −, or 0)',
          correlation: 'Direction AND standardized strength'
        },
        {
          criteria: 'Range',
          covariance: 'No fixed limits — depends entirely on original units of X and Y',
          correlation: 'Strictly bounded between −1.0 and +1.0'
        },
        {
          criteria: 'Comparability',
          covariance: 'Hard to compare across different variable pairs (e.g. $ vs hours)',
          correlation: 'Universally comparable across any metric pairs in the business'
        },
        {
          criteria: 'Typical use',
          covariance: 'Initial mathematical intermediate step in portfolio & linear algebra math',
          correlation: 'The primary metric reported on executive dashboards and reports'
        }
      ],
      darkTheme: false
    },

    // Slide 26: Section Divider Part 6
    {
      id: 26,
      slideNumber: '26 / 52',
      type: 'section-divider',
      partNumber: 'PART 6',
      sectionTitle: 'Hands-On Activity',
      mainTitle: 'Hands-On Activity',
      highlightedWords: ['Hands-On Activity'],
      subtitle: 'Marketing Spend vs Sales — calculate, interpret, and discuss as a group.',
      subBadge: 'REAL BUSINESS WORKFLOW',
      darkTheme: true
    },

    // Slide 27: Dataset — Marketing Spend vs Sales
    {
      id: 27,
      slideNumber: '27 / 52',
      type: 'dataset-table',
      topRightTag: 'HANDS-ON ACTIVITY',
      topLeftTag: 'RAW DATASET • SESSION 04',
      subBadge: '8 MONTH OBSERVATIONS',
      mainTitle: 'Dataset — Marketing Spend vs Sales',
      highlightedWords: ['Dataset — Marketing Spend vs Sales'],
      subtitle: 'Monthly performance data tracking advertising investment and resulting revenue:',
      dataset: [
        { month: 'January', spend: 10, sales: 105 },
        { month: 'February', spend: 15, sales: 120 },
        { month: 'March', spend: 12, sales: 110 },
        { month: 'April', spend: 20, sales: 140 },
        { month: 'May', spend: 25, sales: 160 },
        { month: 'June', spend: 18, sales: 130 },
        { month: 'July', spend: 22, sales: 150 },
        { month: 'August', spend: 30, sales: 175 }
      ],
      darkTheme: false
    },

    // Slide 28: Your Turn — Calculate & Interpret (6 Steps)
    {
      id: 28,
      slideNumber: '28 / 52',
      type: 'hands-on-steps',
      topRightTag: 'HANDS-ON ACTIVITY',
      topLeftTag: 'PRACTICE CHALLENGE • SESSION 04',
      subBadge: '6 ANALYTICAL STEPS',
      mainTitle: 'Your Turn — Calculate & Interpret',
      highlightedWords: ['Your Turn — Calculate & Interpret'],
      subtitle: 'Work through these six sequential steps to generate strategic business recommendations:',
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Means',
          instruction: 'Calculate the mean Marketing Spend and mean Sales across the 8 months',
          solution: 'Mean Spend = 19.0 ($19k), Mean Sales = 136.25 ($136.25k)'
        },
        {
          stepNumber: 2,
          title: 'Calculate Covariance',
          instruction: 'Calculate the sample covariance between Marketing Spend and Sales',
          solution: 'Covariance = +152.86 (Positive co-movement: spend and sales rise together)'
        },
        {
          stepNumber: 3,
          title: 'Calculate Correlation (r)',
          instruction: 'Calculate the Pearson correlation coefficient between them',
          solution: 'r = +0.984 (Exceptional linear alignment approaching near perfection)'
        },
        {
          stepNumber: 4,
          title: 'Visualize Trend',
          instruction: 'Sketch or verify what the scatter plot would likely look like',
          solution: 'Tight upward-sloping diagonal line with minimal perpendicular scatter'
        },
        {
          stepNumber: 5,
          title: 'Classify Strength',
          instruction: 'Classify the strength: weak, moderate, strong, or very strong?',
          solution: 'Very Strong (r > 0.8 tier, indicates highly predictable return)'
        },
        {
          stepNumber: 6,
          title: 'Executive Recommendation',
          instruction: 'Write a one-sentence business recommendation based on your result',
          solution: '"Increasing marketing spend reliably drives revenue growth; scale investment while monitoring ROI efficiency."'
        }
      ],
      darkTheme: false
    },

    // Slide 29: What We Covered in Part 1 (Summary Grid)
    {
      id: 29,
      slideNumber: '29 / 52',
      type: 'six-cards-summary',
      topRightTag: 'SUMMARY',
      topLeftTag: 'KEY TAKEAWAYS • SESSION 04',
      subBadge: 'PART 1 RECAP',
      mainTitle: 'What We Covered in Part 1',
      highlightedWords: ['What We Covered in Part 1'],
      subtitle: 'Core principles of anomaly detection and relationship analysis mastered in this part:',
      cards: [
        {
          title: 'Outliers',
          description: 'Global, contextual & collective anomalies — and why they distort models and means',
          iconName: 'AlertTriangle'
        },
        {
          title: 'IQR Rule',
          description: 'Q1 − 1.5×IQR and Q3 + 1.5×IQR non-parametric fences to flag rogue points',
          iconName: 'Sliders'
        },
        {
          title: 'Z-Score',
          description: 'Standardized deviations from the mean; flags extreme points where |Z| > 3',
          iconName: 'Target'
        },
        {
          title: 'Covariance',
          description: 'Measures directional co-movement between two variables (+, −, or 0)',
          iconName: 'Compass'
        },
        {
          title: 'Correlation',
          description: 'Measures both direction AND standardized strength on a universal −1 to +1 scale',
          iconName: 'TrendingUp'
        },
        {
          title: 'Applied It',
          description: 'Real-world Marketing Spend vs Sales calculated, visualized, and translated into strategy',
          iconName: 'CheckCircle'
        }
      ],
      darkTheme: false
    },

    // ==========================================
    // PART 2: STATISTICS & DATE/TIME FUNCTIONS IN EXCEL
    // ==========================================

    // Slide 30: Grand Transition Divider into Part 2
    {
      id: 30,
      slideNumber: '30 / 52',
      type: 'section-divider',
      partNumber: 'PART 2',
      sectionTitle: 'Statistics & Date/Time Functions in Excel',
      mainTitle: 'Statistics & Date/Time Functions in Excel',
      highlightedWords: ['Statistics & Date/Time', 'Functions in Excel'],
      subtitle: 'AVERAGE · STDEV.S · PERCENTILE · RANK · DATEDIF · NETWORKDAYS · and more • Core Excel formulas for real analysis',
      subBadge: 'SESSION 4 · PART 2',
      darkTheme: true
    },

    // Slide 31: Session Objectives Part 2 (4 Cards)
    {
      id: 31,
      slideNumber: '31 / 52',
      type: 'four-cards-objectives',
      topRightTag: 'SESSION OBJECTIVES',
      topLeftTag: 'PART 2 • SESSION 04',
      subBadge: 'EXCEL COMPETENCIES',
      mainTitle: 'What You Will Be Able To Do',
      highlightedWords: ['What You Will Be Able To Do'],
      subtitle: 'Core applied capabilities you will master with Excel functions in this part:',
      cards: [
        {
          title: 'Key Statistical Functions',
          description: 'Know the most important Excel statistics functions for daily reporting and aggregations',
          iconName: 'BarChart2'
        },
        {
          title: 'How They Work',
          description: 'Understand the syntax, arguments, and underlying logic behind each formula',
          iconName: 'Cpu'
        },
        {
          title: 'Date & Time Functions',
          description: 'Extract, build, arithmetic-shift, and compare calendar dates and time stamps',
          iconName: 'Calendar'
        },
        {
          title: 'Business Use Cases',
          description: 'Apply both function families directly to solve real-world executive business questions',
          iconName: 'Building'
        }
      ],
      darkTheme: false
    },

    // Slide 32: Module 1 Section Divider (Introduction)
    {
      id: 32,
      slideNumber: '32 / 52',
      type: 'section-divider',
      partNumber: 'MODULE 1',
      sectionTitle: 'Introduction',
      mainTitle: 'Introduction',
      highlightedWords: ['Introduction'],
      subtitle: "Why Excel's statistical functions are essential to every data analyst's toolkit.",
      subBadge: 'ANALYTICAL TOOLKIT',
      darkTheme: true
    },

    // Slide 33: Why Excel Statistical Functions Matter
    {
      id: 33,
      slideNumber: '33 / 52',
      type: 'why-functions-matter',
      topRightTag: 'INTRODUCTION',
      topLeftTag: 'WORKFLOW VALUE • SESSION 04',
      subBadge: 'FROM DATA TO DECISIONS',
      mainTitle: 'Why Excel Statistical Functions Matter',
      highlightedWords: ['Why Excel Statistical Functions Matter'],
      subtitle: 'Formulas turn raw spreadsheet columns into automated, decision-ready answers.',
      definitionBox: {
        title: 'Core Value Proposition',
        bullets: [
          'Excel is the most widely used analysis tool in business — statistical functions are how raw rows become insight',
          'They calculate instantly and recalculate automatically as new data arrives',
          'The same functions covered in Descriptive Statistics now become tools you use every day',
          'Mastering a core set of ~15 functions covers the large majority of everyday analysis needs'
        ]
      },
      workflowSteps: [
        { step: 1, title: 'Raw Spreadsheet Data', desc: 'Unprocessed rows and columns exported from systems' },
        { step: 2, title: 'Apply a Statistical Function', desc: 'Syntax-driven automated aggregation formula' },
        { step: 3, title: 'Decision-Ready Business Answer', desc: 'Instant clarity ready for executive reports & dashboards' }
      ],
      darkTheme: false
    },

    // Slide 34: Real-World Applications Across the Business (5 Cards)
    {
      id: 34,
      slideNumber: '34 / 52',
      type: 'five-applications',
      topRightTag: 'INTRODUCTION',
      topLeftTag: 'ENTERPRISE DOMAINS • SESSION 04',
      subBadge: '5 BUSINESS VERTICALS',
      mainTitle: 'Real-World Applications Across the Business',
      highlightedWords: ['Real-World Applications Across the Business'],
      subtitle: 'How statistical formulas power daily operations and reporting across departmental verticals:',
      cards: [
        {
          title: 'Sales Analysis',
          description: 'Average deal size, top performers, monthly variation',
          iconName: 'TrendingUp'
        },
        {
          title: 'HR Analytics',
          description: 'Salary bands, tenure distribution, headcount trends',
          iconName: 'Users'
        },
        {
          title: 'Finance',
          description: 'Budget variance, expense ranking, quarter-end reporting',
          iconName: 'DollarSign'
        },
        {
          title: 'Marketing',
          description: 'Campaign performance, conversion percentiles',
          iconName: 'Target'
        },
        {
          title: 'Operations',
          description: 'Delivery times, working-day scheduling, capacity limits',
          iconName: 'Truck'
        }
      ],
      darkTheme: false
    },

    // Slide 35: Module 2 Section Divider: Statistical Functions
    {
      id: 35,
      slideNumber: '35 / 52',
      type: 'section-divider',
      partNumber: 'MODULE 2',
      sectionTitle: 'Statistical Functions',
      mainTitle: 'Statistical Functions',
      highlightedWords: ['Statistical Functions'],
      subtitle: 'Fifteen functions that turn a column of numbers into a business answer.',
      subBadge: '15 CORE STATISTICAL FORMULAS',
      darkTheme: true
    },

    // Slide 36: Central Tendency: AVERAGE · MEDIAN · MODE.SNGL
    {
      id: 36,
      slideNumber: '36 / 52',
      type: 'excel-central-tendency',
      topRightTag: 'STATISTICAL FUNCTIONS',
      topLeftTag: 'CENTER METRICS • SESSION 04',
      subBadge: 'AVERAGE · MEDIAN · MODE',
      mainTitle: 'Central Tendency: AVERAGE · MEDIAN · MODE.SNGL',
      highlightedWords: ['Central Tendency: AVERAGE · MEDIAN · MODE.SNGL'],
      subtitle: 'Primary formulas to identify the balancing point, midpoint, and most frequent observation:',
      formulas: [
        {
          name: 'AVERAGE()',
          syntax: '=AVERAGE(B2:B9)',
          result: '44.0',
          businessCase: 'Typical daily units sold across the sample week'
        },
        {
          name: 'MEDIAN()',
          syntax: '=MEDIAN(B2:B9)',
          result: '44.5',
          businessCase: 'A more robust "typical" figure when a big order skews the average'
        },
        {
          name: 'MODE.SNGL()',
          syntax: '=MODE.SNGL(B2:B9)',
          result: '47',
          businessCase: 'The single most common order size — useful for stock planning'
        }
      ],
      worksheet: {
        colHeader: 'Units Sold',
        values: [42, 38, 55, 61, 29, 47, 33, 47],
        formula: '=AVERAGE(B2:B9)',
        result: '44.0'
      },
      darkTheme: false
    },

    // Slide 37: Counting: COUNT · COUNTA · COUNTBLANK
    {
      id: 37,
      slideNumber: '37 / 52',
      type: 'excel-counting',
      topRightTag: 'STATISTICAL FUNCTIONS',
      topLeftTag: 'DATA AUDITING • SESSION 04',
      subBadge: 'COUNT · COUNTA · COUNTBLANK',
      mainTitle: 'Counting: COUNT · COUNTA · COUNTBLANK',
      highlightedWords: ['Counting: COUNT · COUNTA · COUNTBLANK'],
      subtitle: 'Distinguishing between numeric values, populated cells, and missing records:',
      formulas: [
        {
          name: 'COUNT()',
          syntax: '=COUNT(B2:B10)',
          result: '3',
          businessCase: 'Counts only numeric entries — here, the order amounts'
        },
        {
          name: 'COUNTA()',
          syntax: '=COUNTA(B2:B10)',
          result: '7',
          businessCase: 'Counts every non-blank cell, text or number'
        },
        {
          name: 'COUNTBLANK()',
          syntax: '=COUNTBLANK(B2:B10)',
          result: '2',
          businessCase: 'Flags missing entries that may need follow-up'
        }
      ],
      worksheet: {
        colHeader: 'Order Log',
        values: ['Shipped', 120, 'Pending', 85, '', 'Shipped', 95, '', 'Delivered'],
        formula: '=COUNTA(B2:B10)',
        result: '7'
      },
      darkTheme: false
    },

    // Slide 38: Range & Spread: MAX · MIN · STDEV.S · VAR.S
    {
      id: 38,
      slideNumber: '38 / 52',
      type: 'excel-spread',
      topRightTag: 'STATISTICAL FUNCTIONS',
      topLeftTag: 'VARIABILITY • SESSION 04',
      subBadge: 'MAX · MIN · STDEV.S · VAR.S',
      mainTitle: 'Range & Spread: MAX · MIN · STDEV.S · VAR.S',
      highlightedWords: ['Range & Spread: MAX · MIN · STDEV.S · VAR.S'],
      subtitle: 'Quantifying extremes, consistency, and dispersion across operational columns:',
      formulas: [
        {
          name: 'MAX()',
          syntax: '=MAX(B2:B9)',
          result: '61',
          businessCase: 'The single best-selling day in the sample'
        },
        {
          name: 'MIN()',
          syntax: '=MIN(B2:B9)',
          result: '29',
          businessCase: 'The slowest day — worth investigating why'
        },
        {
          name: 'STDEV.S()',
          syntax: '=STDEV.S(B2:B9)',
          result: '10.78',
          businessCase: 'How much daily sales typically swing from the average'
        },
        {
          name: 'VAR.S()',
          syntax: '=VAR.S(B2:B9)',
          result: '116.29',
          businessCase: 'The squared-unit basis STDEV.S is calculated from'
        }
      ],
      worksheet: {
        colHeader: 'Units Sold',
        values: [42, 38, 55, 61, 29, 47, 33, 47],
        formula: '=STDEV.S(B2:B9)',
        result: '10.78'
      },
      darkTheme: false
    },

    // Slide 39: Ranking & Percentiles
    {
      id: 39,
      slideNumber: '39 / 52',
      type: 'excel-ranking',
      topRightTag: 'STATISTICAL FUNCTIONS',
      topLeftTag: 'RELATIVE STANDING • SESSION 04',
      subBadge: 'PERCENTILE · QUARTILE · RANK',
      mainTitle: 'Ranking & Percentiles',
      highlightedWords: ['Ranking & Percentiles'],
      subtitle: 'Benchmarking performance, cutoffs, and ordered positional ranks:',
      formulas: [
        {
          name: 'PERCENTILE()',
          syntax: '=PERCENTILE(B2:B9, 0.9)',
          result: '73',
          businessCase: 'The value below which 90% of results fall'
        },
        {
          name: 'QUARTILE()',
          syntax: '=QUARTILE(B2:B9, 3)',
          result: '62.5',
          businessCase: 'Q3 — the top quarter of results starts here'
        },
        {
          name: 'RANK()',
          syntax: '=RANK(40, B2:B9, 0)',
          result: '5',
          businessCase: "This value's position, highest to lowest"
        },
        {
          name: 'LARGE()',
          syntax: '=LARGE(B2:B9, 2)',
          result: '70',
          businessCase: 'The second-highest value in the range'
        },
        {
          name: 'SMALL()',
          syntax: '=SMALL(B2:B9, 2)',
          result: '20',
          businessCase: 'The second-lowest value in the range'
        }
      ],
      worksheet: {
        colHeader: 'Units Sold',
        values: [10, 20, 30, 40, 50, 60, 70, 80],
        formula: '=LARGE(B2:B9, 2)',
        result: '70'
      },
      darkTheme: false
    },

    // Slide 40: Module 3 Section Divider: Date Functions
    {
      id: 40,
      slideNumber: '40 / 52',
      type: 'section-divider',
      partNumber: 'MODULE 3',
      sectionTitle: 'Date Functions',
      mainTitle: 'Date Functions',
      highlightedWords: ['Date Functions'],
      subtitle: 'Every business report runs on dates — orders, deadlines, and reporting periods.',
      subBadge: 'TEMPORAL LOGIC',
      darkTheme: true
    },

    // Slide 41: Current Date & Building Dates: TODAY() · NOW() · DATE()
    {
      id: 41,
      slideNumber: '41 / 52',
      type: 'excel-current-date',
      topRightTag: 'DATE FUNCTIONS',
      topLeftTag: 'DATE CONSTRUCTION • SESSION 04',
      subBadge: 'TODAY · NOW · DATE',
      mainTitle: 'Current Date & Building Dates',
      highlightedWords: ['Current Date & Building Dates'],
      subtitle: 'Generating volatile system timestamps and assembling clean dates from fragmented columns:',
      functions: [
        { name: 'TODAY()', syntax: '=TODAY()', result: '26-Jan-2026' },
        { name: 'NOW()', syntax: '=NOW()', result: '26-Jan-2026 09:41 AM' },
        { name: 'DATE()', syntax: '=DATE(2026, 3, 14)', result: '14-Mar-2026' }
      ],
      businessScenario: 'A live dashboard opens with =TODAY() to show "days since order" without manual updates. =DATE() rebuilds a proper date when year, month and day arrive in separate columns — common with system exports.',
      darkTheme: false
    },

    // Slide 42: Extracting Date Components: DAY() · MONTH() · YEAR()
    {
      id: 42,
      slideNumber: '42 / 52',
      type: 'excel-extract-date',
      topRightTag: 'DATE FUNCTIONS',
      topLeftTag: 'TEMPORAL DRILLDOWN • SESSION 04',
      subBadge: 'DAY · MONTH · YEAR',
      mainTitle: 'Extracting Date Components',
      highlightedWords: ['Extracting Date Components'],
      subtitle: 'Deconstructing datetime timestamps into analytical cohorts (Year, Month, Day):',
      functions: [
        { name: 'DAY()', syntax: '=DAY(A2)', result: '14' },
        { name: 'MONTH()', syntax: '=MONTH(A2)', result: '3' },
        { name: 'YEAR()', syntax: '=YEAR(A2)', result: '2026' }
      ],
      businessScenario: 'Extracting MONTH() and YEAR() from every order date is the first step in building any monthly or yearly sales trend report.',
      darkTheme: false
    },

    // Slide 43: Date Math: EDATE() · EOMONTH()
    {
      id: 43,
      slideNumber: '43 / 52',
      type: 'excel-date-math',
      topRightTag: 'DATE FUNCTIONS',
      topLeftTag: 'CALENDAR ARITHMETIC • SESSION 04',
      subBadge: 'EDATE · EOMONTH',
      mainTitle: 'Date Math: EDATE() · EOMONTH()',
      highlightedWords: ['Date Math: EDATE() · EOMONTH()'],
      subtitle: 'Calculating forward/backward milestones and month-end financial closing dates:',
      functions: [
        { name: 'EDATE()', syntax: '=EDATE(A2, 3)', result: '14-Jun-2026 — 3 months after the start date' },
        { name: 'EOMONTH()', syntax: '=EOMONTH(A2, 0)', result: '31-Mar-2026 — the last day of that month' }
      ],
      timeline: {
        startDate: '14-Mar-2026',
        edateResult: '14-Jun-2026',
        eomonthResult: '31-Mar-2026'
      },
      darkTheme: false
    },

    // Slide 44: Module 4 Section Divider: Time Functions
    {
      id: 44,
      slideNumber: '44 / 52',
      type: 'section-divider',
      partNumber: 'MODULE 4',
      sectionTitle: 'Time Functions',
      mainTitle: 'Time Functions',
      highlightedWords: ['Time Functions'],
      subtitle: 'Timestamps carry as much business information as dates do.',
      subBadge: 'INTRADAY LOGS & SLA',
      darkTheme: true
    },

    // Slide 45: TIME() · HOUR() · MINUTE() · SECOND()
    {
      id: 45,
      slideNumber: '45 / 52',
      type: 'excel-time-functions',
      topRightTag: 'TIME FUNCTIONS',
      topLeftTag: 'TIMESTAMP PARSING • SESSION 04',
      subBadge: 'TIME · HOUR · MINUTE · SECOND',
      mainTitle: 'TIME() · HOUR() · MINUTE() · SECOND()',
      highlightedWords: ['TIME() · HOUR() · MINUTE() · SECOND()'],
      subtitle: 'Isolating operational hours, customer wait times, and building clean intraday timestamps:',
      functions: [
        { name: 'TIME()', syntax: '=TIME(14, 35, 20)', result: '2:35:20 PM' },
        { name: 'HOUR()', syntax: '=HOUR(A2)', result: '14' },
        { name: 'MINUTE()', syntax: '=MINUTE(A2)', result: '35' },
        { name: 'SECOND()', syntax: '=SECOND(A2)', result: '20' }
      ],
      businessExample: 'A call center logs ticket timestamps and uses HOUR() to identify peak call times, while TIME() assembles a clean timestamp from separately captured hour, minute and second fields.',
      timeVisual: { hour: 14, minute: 35, second: 20 },
      darkTheme: false
    },

    // Slide 46: Module 5 Section Divider: Date Difference Functions
    {
      id: 46,
      slideNumber: '46 / 52',
      type: 'section-divider',
      partNumber: 'MODULE 5',
      sectionTitle: 'Date Difference Functions',
      mainTitle: 'Date Difference Functions',
      highlightedWords: ['Date Difference Functions'],
      subtitle: 'Turning two dates into a duration — the most business-critical date skill.',
      subBadge: 'DURATION & WORKING DAYS',
      darkTheme: true
    },

    // Slide 47: DATEDIF() · NETWORKDAYS() · WORKDAY()
    {
      id: 47,
      slideNumber: '47 / 52',
      type: 'excel-date-differences',
      topRightTag: 'DATE DIFFERENCE FUNCTIONS',
      topLeftTag: 'CALCULATING DURATION • SESSION 04',
      subBadge: 'DATEDIF · NETWORKDAYS · WORKDAY',
      mainTitle: 'DATEDIF() · NETWORKDAYS() · WORKDAY()',
      highlightedWords: ['DATEDIF() · NETWORKDAYS() · WORKDAY()'],
      subtitle: 'Measuring elapsed calendar days, working business days, and computing exact target deadlines:',
      functions: [
        { name: 'DATEDIF()', syntax: '=DATEDIF(A2, B2, "d")', result: '72 days between 1-Jan-2026 and 14-Mar-2026' },
        { name: 'NETWORKDAYS()', syntax: '=NETWORKDAYS(A2, B2)', result: '22 working days in January 2026' },
        { name: 'WORKDAY()', syntax: '=WORKDAY(A2, 10)', result: '15-Jan-2026 — 10 working days after 1-Jan-2026' }
      ],
      darkTheme: false
    },

    // Slide 48: Business Scenarios (4 Cards)
    {
      id: 48,
      slideNumber: '48 / 52',
      type: 'excel-business-scenarios',
      topRightTag: 'DATE DIFFERENCE FUNCTIONS',
      topLeftTag: 'PRACTICAL USE CASES • SESSION 04',
      subBadge: '4 OPERATIONAL SCENARIOS',
      mainTitle: 'Business Scenarios',
      highlightedWords: ['Business Scenarios'],
      subtitle: 'Real-world operations formulas applied directly to customer fulfillment, HR tenure, and project schedules:',
      scenarios: [
        {
          title: 'Delivery Time',
          formula: '=B2-A2 or NETWORKDAYS()',
          description: 'Measure order-to-ship duration excluding weekends',
          iconName: 'Truck'
        },
        {
          title: 'Employee Experience',
          formula: '=DATEDIF(HireDate, TODAY(), "y")',
          description: 'Calculates exact completed years of tenure',
          iconName: 'Users'
        },
        {
          title: 'Project Duration',
          formula: '=NETWORKDAYS(Start, End)',
          description: 'Calculates real working-day effort required',
          iconName: 'Calendar'
        },
        {
          title: 'Working Days Calculation',
          formula: '=WORKDAY(Start, N)',
          description: 'Projects realistic deadline dates factoring weekends',
          iconName: 'Clock'
        }
      ],
      darkTheme: false
    },

    // Slide 49: Quick Reference — All Functions at a Glance (Master Directory)
    {
      id: 49,
      slideNumber: '49 / 52',
      type: 'excel-master-reference',
      topRightTag: 'SUMMARY',
      topLeftTag: 'EXCEL CHEATSHEET • SESSION 04',
      subBadge: 'MASTER FUNCTION DIRECTORY',
      mainTitle: 'Quick Reference — All Functions at a Glance',
      highlightedWords: ['Quick Reference — All Functions at a Glance'],
      subtitle: 'Every statistical, date, and time function organized by analytical purpose:',
      categories: [
        { category: 'Center & Frequency', functions: 'AVERAGE() · MEDIAN() · MODE.SNGL()' },
        { category: 'Counting', functions: 'COUNT() · COUNTA() · COUNTBLANK()' },
        { category: 'Range & Spread', functions: 'MAX() · MIN() · STDEV.S() · VAR.S()' },
        { category: 'Ranking & Percentiles', functions: 'PERCENTILE() · QUARTILE() · RANK() · LARGE() · SMALL()' },
        { category: 'Date Functions', functions: 'TODAY() · NOW() · DATE() · DAY() · MONTH() · YEAR() · EDATE() · EOMONTH()' },
        { category: 'Time Functions', functions: 'TIME() · HOUR() · MINUTE() · SECOND()' },
        { category: 'Date Difference', functions: 'DATEDIF() · NETWORKDAYS() · WORKDAY()' }
      ],
      darkTheme: false
    },

    // Slide 50: Session Summary (4 Cards)
    {
      id: 50,
      slideNumber: '50 / 52',
      type: 'four-cards-summary',
      topRightTag: 'SUMMARY',
      topLeftTag: 'RECAP • SESSION 04',
      subBadge: '4 CORE PILLARS',
      mainTitle: 'Session Summary',
      highlightedWords: ['Session Summary'],
      subtitle: 'The four fundamental dimensions connecting statistical theory with practical Excel execution:',
      cards: [
        {
          title: 'Why It Matters',
          description: 'Excel functions as the everyday face of statistics across all industries',
          iconName: 'Target'
        },
        {
          title: 'Statistical Functions',
          description: '15 functions covering center, spread, counting & ranking in sheets',
          iconName: 'BarChart2'
        },
        {
          title: 'Date & Time Functions',
          description: 'Building, extracting and comparing dates, timestamps, and hours',
          iconName: 'Calendar'
        },
        {
          title: 'Date Differences',
          description: 'DATEDIF, NETWORKDAYS and WORKDAY for real operational durations',
          iconName: 'Clock'
        }
      ],
      darkTheme: false
    },

    // Slide 51: Key Takeaways
    {
      id: 51,
      slideNumber: '51 / 52',
      type: 'key-takeaways-list',
      topRightTag: 'SUMMARY',
      topLeftTag: 'EXECUTIVE ADVICE • SESSION 04',
      subBadge: '5 CRITICAL RULES',
      mainTitle: 'Key Takeaways',
      highlightedWords: ['Key Takeaways'],
      subtitle: 'Five golden rules every data analyst must remember when applying functions in production:',
      takeaways: [
        'The right function depends on the question — MEAN for typical value, MEDIAN when outliers are present, MODE for the most common category',
        'COUNT, COUNTA, and COUNTBLANK each answer a different data-quality question — know which one you actually need',
        'STDEV.S and VAR.S reveal consistency, not just typical value — always use the .S versions for real-world sample data',
        'TODAY() and NOW() are live and recalculating — never rely on them for a fixed historical record',
        'NETWORKDAYS() and WORKDAY() are the two most business-critical date functions for deadlines and delivery promises'
      ],
      darkTheme: false
    },

    // Slide 52: Grand Outro Slide
    {
      id: 52,
      slideNumber: '52 / 52',
      type: 'outro-part2',
      topRightTag: 'SESSION COMPLETE',
      topLeftTag: 'SESSION 4 · COMPLETE',
      subBadge: 'DESCRIPTIVE STATISTICS & EXCEL FUNCTIONS',
      mainTitle: 'From Formula to Insight.',
      highlightedWords: ['From Formula to Insight.'],
      subtitle: 'Every function you learned today turns a spreadsheet column into a decision someone can act on.',
      nextSection: 'Up Next: Session 05 — Advanced Analytical Modeling & Data Wrangling',
      darkTheme: true
    }
  ]
};
