import { ChapterPresentation } from '../types';

export const dataAnalysisSession03EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-03',
  chapterTitle: 'Session 03: Descriptive Statistics Part 1',
  courseName: 'Data Analysis Diploma • Session 03',
  duration: 'Duration: 3 Hours',
  totalSlides: 35,
  slides: [
    // Slide 01: Hero Cover
    {
      id: 1,
      slideNumber: '01 / 35',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 03',
      topLeftTag: 'DESCRIPTIVE STATISTICS',
      subBadge: 'SESSION 03: DESCRIPTIVE STATISTICS PART 1',
      mainTitle: 'Descriptive Statistics (Part 1)',
      highlightedWords: ['Descriptive Statistics', 'Part 1'],
      subtitle: 'Types of Data · Measures of Central Tendency · Histogram & KDE · Range, Variance & Standard Deviation · IQR & Box Plot',
      darkTheme: true
    },

    // Slide 02: Session Objectives (7 Cards)
    {
      id: 2,
      slideNumber: '02 / 35',
      type: 'seven-cards',
      topRightTag: 'SESSION OBJECTIVES',
      topLeftTag: 'LEARNING GOALS • SESSION 03',
      subBadge: 'COMPETENCIES',
      mainTitle: 'What You Will Be Able To Do',
      highlightedWords: ['What You Will Be Able To Do'],
      subtitle: 'Master fundamental statistical tools to summarize, visualize, and extract real insights from data:',
      cards: [
        {
          title: 'Types of Data',
          description: 'Recognize categorical and numerical variables',
          iconName: 'Layers'
        },
        {
          title: 'Classify Variables',
          description: 'Differentiate nominal, ordinal, discrete, continuous',
          iconName: 'Tag'
        },
        {
          title: 'Measures of Central Tendency',
          description: 'Apply mean, median and mode correctly',
          iconName: 'Target'
        },
        {
          title: 'Measure Variability',
          description: 'Quantify spread with range, variance, SD, IQR',
          iconName: 'Activity'
        },
        {
          title: 'Read Visualizations',
          description: 'Interpret histograms, KDE plots and box plots',
          iconName: 'BarChart2'
        },
        {
          title: 'Detect Outliers',
          description: 'Spot extreme values and judge their impact',
          iconName: 'Search'
        },
        {
          title: 'Interpret Results',
          description: 'Translate numbers into business insight',
          iconName: 'CheckCircle'
        }
      ],
      darkTheme: false
    },

    // Slide 03: Section Divider - Part 2
    {
      id: 3,
      slideNumber: '03 / 35',
      type: 'section-divider',
      topRightTag: 'PART 2 · FOUNDATIONS',
      topLeftTag: 'WHY STATISTICS MATTERS',
      subBadge: 'PART 2',
      mainTitle: 'Why Statistics Matters',
      highlightedWords: ['Why Statistics Matters'],
      subtitle: 'How does a single number help a business make a confident decision?',
      darkTheme: true
    },

    // Slide 04: What Is Statistics?
    {
      id: 4,
      slideNumber: '04 / 35',
      type: 'definition-pipeline',
      topRightTag: 'WHY STATISTICS MATTERS',
      topLeftTag: 'CORE DEFINITION • SESSION 03',
      subBadge: 'THE SCIENCE OF DATA',
      mainTitle: 'What Is Statistics?',
      highlightedWords: ['What Is Statistics?'],
      subtitle: 'The bridge connecting raw tabular records to strategic business intelligence.',
      definitionBox: {
        title: 'The science of collecting, organizing & interpreting data',
        bullets: [
          'Descriptive statistics summarize what already happened in the data',
          'Inferential statistics use a sample to draw conclusions about a larger population',
          'Every dashboard metric — average order value, churn rate, satisfaction score — is a statistic',
          'Good statistics turn raw rows of data into a decision a manager can act on'
        ]
      },
      pipelineSteps: [
        { label: 'Raw Data', desc: 'Unprocessed table records' },
        { label: 'Organize & Summarize', desc: 'Grouping, center & spread' },
        { label: 'Patterns Emerge', desc: 'Distributions & shapes' },
        { label: 'Confident Decision', desc: 'Actionable business strategy' }
      ],
      darkTheme: false
    },

    // Slide 05: Statistics Powers Everyday Business Decisions (5 Cards)
    {
      id: 5,
      slideNumber: '05 / 35',
      type: 'five-cards',
      topRightTag: 'WHY STATISTICS MATTERS',
      topLeftTag: 'APPLIED METRICS • SESSION 03',
      subBadge: 'REAL-WORLD IMPACT',
      mainTitle: 'Statistics Powers Everyday Business Decisions',
      highlightedWords: ['Everyday Business Decisions'],
      subtitle: 'Modern enterprises make millions in revenue through statistical measurement:',
      cards: [
        {
          title: 'Customer Spending',
          description: 'Average basket size guides pricing & promotions',
          iconName: 'DollarSign'
        },
        {
          title: 'Sales Analysis',
          description: 'Monthly trends reveal seasonality & growth',
          iconName: 'TrendingUp'
        },
        {
          title: 'Employee Salaries',
          description: 'Pay equity checks across roles & departments',
          iconName: 'Building'
        },
        {
          title: 'Student Performance',
          description: 'Score distributions flag who needs support',
          iconName: 'BookOpen'
        },
        {
          title: 'Product Ratings',
          description: 'Review spread separates loved vs polarizing products',
          iconName: 'Star'
        }
      ],
      darkTheme: false
    },

    // Slide 06: Descriptive vs Inferential Statistics
    {
      id: 6,
      slideNumber: '06 / 35',
      type: 'comparison',
      topRightTag: 'WHY STATISTICS MATTERS',
      topLeftTag: 'TWO BRANCHES • SESSION 03',
      subBadge: 'METHODOLOGY COMPARISON',
      mainTitle: 'Descriptive vs Inferential Statistics',
      highlightedWords: ['Descriptive vs Inferential'],
      subtitle: 'Understanding the scope and purpose of the two major disciplines in statistical analysis.',
      cards: [
        {
          badge: 'Descriptive Statistics',
          title: 'Summarize & Describe Existing Data',
          bullets: [
            'Summarizes the data you already have',
            'Answers: what happened, on average, and how spread out is it?',
            'Tools: mean, median, mode, range, standard deviation, charts',
            'Example: "Our average delivery time last month was 3.2 days"'
          ]
        },
        {
          badge: 'Inferential Statistics',
          title: 'Deduce & Predict Population Trends',
          bullets: [
            'Uses a sample to draw conclusions about a larger population',
            'Answers: what can we expect going forward, with what confidence?',
            'Tools: hypothesis testing, confidence intervals, regression',
            'Example: "Based on 500 surveyed customers, we estimate 68% of all customers prefer next-day delivery"'
          ]
        }
      ],
      footerNote: 'This session focuses entirely on descriptive statistics — inferential methods are covered in a later session.',
      darkTheme: false
    },

    // Slide 07: Section Divider - Part 3
    {
      id: 7,
      slideNumber: '07 / 35',
      type: 'section-divider',
      topRightTag: 'PART 3 · CLASSIFICATION',
      topLeftTag: 'TAXONOMY OF VARIABLES',
      subBadge: 'PART 3',
      mainTitle: 'Types of Data',
      highlightedWords: ['Types of Data'],
      subtitle: 'Every statistical method depends first on knowing what kind of data you are looking at.',
      darkTheme: true
    },

    // Slide 08: Qualitative (Categorical) Data
    {
      id: 8,
      slideNumber: '08 / 35',
      type: 'two-cards',
      topRightTag: 'TYPES OF DATA',
      topLeftTag: 'QUALITATIVE DATA • SESSION 03',
      subBadge: 'CATEGORICAL MEASURES',
      mainTitle: 'Qualitative (Categorical) Data',
      highlightedWords: ['Qualitative (Categorical) Data'],
      subtitle: 'Describes qualities or categories — cannot be meaningfully measured on a numeric scale.',
      cards: [
        {
          title: 'Nominal',
          badge: 'No Inherent Order',
          bullets: [
            'Categories with no natural order or hierarchy',
            'Example: Department — Sales, IT, Marketing, HR',
            'Example: Payment Method — Cash, Card, Wallet',
            'Cannot be ranked, added, or averaged'
          ]
        },
        {
          title: 'Ordinal',
          badge: 'Meaningful Ranking',
          bullets: [
            'Categories with a meaningful order or sequence',
            'Example: Performance Rating — Low, Medium, High',
            'Example: Customer Satisfaction — Poor to Excellent',
            'Order matters, but exact gaps between levels are not defined'
          ]
        }
      ],
      darkTheme: false
    },

    // Slide 09: Quantitative (Numerical) Data
    {
      id: 9,
      slideNumber: '09 / 35',
      type: 'two-cards',
      topRightTag: 'TYPES OF DATA',
      topLeftTag: 'QUANTITATIVE DATA • SESSION 03',
      subBadge: 'NUMERICAL MEASURES',
      mainTitle: 'Quantitative (Numerical) Data',
      highlightedWords: ['Quantitative (Numerical) Data'],
      subtitle: 'Expressed as numbers that can be measured, ordered and used in calculations.',
      cards: [
        {
          title: 'Discrete',
          badge: 'Countable Whole Numbers',
          bullets: [
            'Countable, whole-number values (integers only)',
            'Example: Number of support tickets per day',
            'Example: Number of children in a household',
            'Cannot take fractional values in real-world practice'
          ]
        },
        {
          title: 'Continuous',
          badge: 'Measurable Infinite Continuum',
          bullets: [
            'Measurable values on an infinite, unbroken scale',
            'Example: Employee salary or delivery time in minutes',
            'Example: Product weight or environmental temperature',
            'Can take any value within a range, including decimals'
          ]
        }
      ],
      darkTheme: false
    },

    // Slide 10: The Four Measurement Scales
    {
      id: 10,
      slideNumber: '10 / 35',
      type: 'measurement-scales',
      topRightTag: 'TYPES OF DATA',
      topLeftTag: 'MEASUREMENT SCALES • SESSION 03',
      subBadge: 'STEVENS TYPOLOGY',
      mainTitle: 'The Four Measurement Scales',
      highlightedWords: ['Four Measurement Scales'],
      subtitle: 'Categorization framework determining which statistical formulas are mathematically valid.',
      headers: ['Scale', 'Definition', 'Example', 'Math Operations'],
      rows: [
        ['Nominal', 'Categories, no order', 'Department, Gender', 'Count, Mode only'],
        ['Ordinal', 'Categories, ordered', 'Rating: Low / Medium / High', 'Count, Mode, Median, ranking'],
        ['Interval', 'Ordered, equal gaps, no true zero', 'Temperature (°C), Calendar year', '+ and − meaningful; ratios are not'],
        ['Ratio', 'Ordered, equal gaps, true zero', 'Salary, Age, Sales revenue', 'All operations, including ratios']
      ],
      darkTheme: false
    },

    // Slide 11: Section Divider - Part 4
    {
      id: 11,
      slideNumber: '11 / 35',
      type: 'section-divider',
      topRightTag: 'PART 4 · CENTRAL TENDENCY',
      topLeftTag: 'MEASURES OF CENTRAL TENDENCY',
      subBadge: 'PART 4',
      mainTitle: 'Measures of Central Tendency',
      highlightedWords: ['Measures of Central Tendency'],
      subtitle: '"How can one single number summarize thousands of observations?"',
      darkTheme: true
    },

    // Slide 12: Mean — The Balancing Point
    {
      id: 12,
      slideNumber: '12 / 35',
      type: 'mean-fulcrum',
      topRightTag: 'MEASURES OF CENTRAL TENDENCY',
      topLeftTag: 'ARITHMETIC AVERAGE • SESSION 03',
      subBadge: 'BALANCING POINT',
      mainTitle: 'Mean — The Balancing Point',
      highlightedWords: ['Mean — The Balancing Point'],
      subtitle: 'The exact center of gravity where the sum of positive deviations balances negative deviations.',
      definitionBox: {
        title: 'Definition & Formula',
        bullets: [
          'Sum of all values divided by the count of values',
          'Mean = (Σ values) ÷ n',
          'Business example: average order value across 5 transactions of $12, $15, $18, $20, $22 is $17.40',
          'Advantage: uses every data point, mathematically well understood',
          'Limitation: pulled strongly toward extreme values (outliers)'
        ]
      },
      points: [12, 15, 18, 20, 22],
      meanValue: 17.4,
      darkTheme: false
    },

    // Slide 13: Median — The Middle Value
    {
      id: 13,
      slideNumber: '13 / 35',
      type: 'median-split',
      topRightTag: 'MEASURES OF CENTRAL TENDENCY',
      topLeftTag: '50TH PERCENTILE • SESSION 03',
      subBadge: 'ROBUST CENTER',
      mainTitle: 'Median — The Middle Value',
      highlightedWords: ['Median — The Middle Value'],
      subtitle: 'The 50th percentile dividing ordered data exactly into lower and upper halves.',
      definitionBox: {
        title: 'Definition & Formula',
        bullets: [
          'The middle value once data is sorted from lowest to highest',
          'Odd count: the exact middle observation: (n + 1) / 2',
          'Even count: arithmetic average of the two middle observations',
          'Business example: median household income is preferred over mean because it resists billionaire outliers',
          'Handles skewed distributions and extreme outliers far better than the mean'
        ]
      },
      values: [12, 15, 18, 20, 22],
      medianValue: 18,
      darkTheme: false
    },

    // Slide 14: Mode — The Most Frequent Value
    {
      id: 14,
      slideNumber: '14 / 35',
      type: 'mode-dots',
      topRightTag: 'MEASURES OF CENTRAL TENDENCY',
      topLeftTag: 'FREQUENCY PEAK • SESSION 03',
      subBadge: 'CATEGORICAL CENTER',
      mainTitle: 'Mode — The Most Frequent Value',
      highlightedWords: ['Mode — The Most Frequent Value'],
      subtitle: 'The highest frequency peak in discrete or categorical observations.',
      definitionBox: {
        title: 'Definition & Applications',
        bullets: [
          'The value (or category) that occurs most often in the dataset',
          'The ONLY measure of center that works on categorical/nominal data',
          'A dataset can be unimodal, bimodal, multimodal, or have no mode',
          'Business example: the most frequently ordered shoe size or menu item guides inventory planning',
          'Business example: most common customer complaint category directs process improvement'
        ]
      },
      dotPlot: [
        { val: 12, count: 1 },
        { val: 15, count: 3, isMode: true },
        { val: 18, count: 2 },
        { val: 20, count: 1 }
      ],
      modeValue: 15,
      darkTheme: false
    },

    // Slide 15: Mean vs Median vs Mode
    {
      id: 15,
      slideNumber: '15 / 35',
      type: 'center-matrix',
      topRightTag: 'MEASURES OF CENTRAL TENDENCY',
      topLeftTag: 'DECISION MATRIX • SESSION 03',
      subBadge: 'COMPARISON TABLE',
      mainTitle: 'Mean vs Median vs Mode',
      highlightedWords: ['Mean vs Median vs Mode'],
      subtitle: 'Choosing the optimal measure of central tendency based on distribution shape.',
      headers: ['Measure', 'Definition', 'Advantages', 'Best Used When'],
      rows: [
        ['Mean', 'Arithmetic average of all values', 'Uses all data, well understood', 'Data is roughly symmetric, no extreme outliers'],
        ['Median', 'Middle value in sorted order', 'Resistant to outliers and skew', 'Data is skewed or contains extreme values'],
        ['Mode', 'Most frequently occurring value', 'Works with categorical data', 'You need the most common category or value']
      ],
      darkTheme: false
    },

    // Slide 16: The Effect of Outliers
    {
      id: 16,
      slideNumber: '16 / 35',
      type: 'outliers-effect',
      topRightTag: 'MEASURES OF CENTRAL TENDENCY',
      topLeftTag: 'ROBUSTNESS • SESSION 03',
      subBadge: 'SENSITIVITY ANALYSIS',
      mainTitle: 'The Effect of Outliers',
      highlightedWords: ['The Effect of Outliers'],
      subtitle: 'Demonstrating how a single extreme value pulls the mean while the median stands firm.',
      before: {
        title: 'Before — original dataset',
        values: [12, 14, 15, 16, 17, 18, 20],
        mean: 16.4,
        median: 16
      },
      after: {
        title: 'After — one extreme value added (85)',
        values: [12, 14, 15, 16, 17, 18, 20, 85],
        mean: 24.1,
        median: 16,
        outlier: 85
      },
      darkTheme: false
    },

    // Slide 17: Section Divider - Part 5
    {
      id: 17,
      slideNumber: '17 / 35',
      type: 'section-divider',
      topRightTag: 'PART 5 · SPREAD & DISPERSION',
      topLeftTag: 'MEASURES OF SPREAD',
      subBadge: 'PART 5',
      mainTitle: 'Measures of Spread',
      highlightedWords: ['Measures of Spread'],
      subtitle: '"Can two datasets share the same average but behave completely differently?"',
      darkTheme: true
    },

    // Slide 18: Range — The Simplest Measure
    {
      id: 18,
      slideNumber: '18 / 35',
      type: 'range-visual',
      topRightTag: 'MEASURES OF SPREAD',
      topLeftTag: 'EXTREMES • SESSION 03',
      subBadge: 'MAX MINUS MIN',
      mainTitle: 'Range — The Simplest Measure',
      highlightedWords: ['Range — The Simplest Measure'],
      subtitle: 'The total span between the absolute minimum and maximum observed values.',
      definitionBox: {
        title: 'Definition & Formula',
        bullets: [
          'Range = Maximum value − Minimum value',
          'Business example: delivery times ranging from 12 to 22 hours gives a range of 10 hours',
          'Advantage: extremely quick to calculate and easy to explain to stakeholders',
          'Limitation: uses only two data points, completely ignoring the distribution in between',
          'A single outlier can make the reported range wildly misleading'
        ]
      },
      minVal: 12,
      maxVal: 22,
      rangeVal: 10,
      darkTheme: false
    },

    // Slide 19: Variance — Average Squared Distance
    {
      id: 19,
      slideNumber: '19 / 35',
      type: 'variance-visual',
      topRightTag: 'MEASURES OF SPREAD',
      topLeftTag: 'DISPERSION • SESSION 03',
      subBadge: 'SQUARED DEVIATIONS',
      mainTitle: 'Variance — Average Squared Distance',
      highlightedWords: ['Variance — Average Squared Distance'],
      subtitle: 'The average of squared differences from the mean, weighting larger gaps progressively.',
      definitionBox: {
        title: 'Conceptual Intuition',
        bullets: [
          'Measures how far, on average, each value sits from the mean',
          'Each distance is squared before averaging, so bigger gaps count exponentially more',
          'Squaring also makes every distance positive, so negative deviations do not cancel out',
          'A larger variance means the data is more spread out around the mean',
          'Expressed in squared units (e.g., dollars squared), which is why standard deviation is preferred'
        ]
      },
      meanVal: 17.4,
      points: [12, 15, 18, 20, 22],
      darkTheme: false
    },

    // Slide 20: Standard Deviation — Typical Distance From the Mean
    {
      id: 20,
      slideNumber: '20 / 35',
      type: 'std-dev-bell',
      topRightTag: 'MEASURES OF SPREAD',
      topLeftTag: 'VARIABILITY • SESSION 03',
      subBadge: 'ORIGINAL UNITS',
      mainTitle: 'Standard Deviation — Typical Distance From the Mean',
      highlightedWords: ['Standard Deviation'],
      subtitle: 'The gold standard benchmark for measuring spread in the original variable units.',
      definitionBox: {
        title: 'Interpretation',
        bullets: [
          'The square root of variance — brought back into the original units of the variable',
          'Low standard deviation: observations cluster tightly around the mean',
          'High standard deviation: observations are spread widely, less predictable',
          'Business example: a delivery service with low SD in delivery time is far more reliable',
          'Widely used in Quality Control (Six Sigma) to flag defects and compare consistency'
        ]
      },
      darkTheme: false
    },

    // Slide 21: Interquartile Range (IQR)
    {
      id: 21,
      slideNumber: '21 / 35',
      type: 'iqr-visual',
      topRightTag: 'MEASURES OF SPREAD',
      topLeftTag: 'MIDDLE 50% • SESSION 03',
      subBadge: 'RESISTANT SPREAD',
      mainTitle: 'Interquartile Range (IQR)',
      highlightedWords: ['Interquartile Range (IQR)'],
      subtitle: 'The spread of the middle 50% of sorted observations, completely resistant to outliers.',
      definitionBox: {
        title: 'Definition & Formula',
        bullets: [
          'Quartiles split sorted data into four equal parts: Q1 (25%), Median/Q2 (50%), Q3 (75%)',
          'IQR = Q3 − Q1 — the spread of the middle 50% of the data',
          'Not affected by extreme values or long tails at either end',
          'Business example: IQR of employee salaries shows the typical pay band, ignoring executive pay',
          'The standard mathematical basis for detecting outliers on a box plot'
        ]
      },
      q1: 13,
      median: 16,
      q3: 20,
      iqr: 7.0,
      darkTheme: false
    },

    // Slide 22: Choosing the Right Spread Measure
    {
      id: 22,
      slideNumber: '22 / 35',
      type: 'spread-matrix',
      topRightTag: 'MEASURES OF SPREAD',
      topLeftTag: 'DECISION GUIDE • SESSION 03',
      subBadge: 'SELECTION CRITERIA',
      mainTitle: 'Choosing the Right Spread Measure',
      highlightedWords: ['Right Spread Measure'],
      subtitle: 'Comparative cheat sheet for selecting the appropriate variability metric.',
      headers: ['Measure', 'What It Uses', 'Sensitive to Outliers?', 'Best Used When'],
      rows: [
        ['Range', 'Max and min only', 'Very sensitive', 'A fast, rough sense of total spread is enough'],
        ['Variance', 'Every value\'s squared distance from mean', 'Sensitive', 'A statistical basis for further calculations is needed'],
        ['Standard Deviation', 'Square root of variance', 'Sensitive', 'Reporting typical spread in original, interpretable units'],
        ['IQR', 'Middle 50% of sorted data (Q3 − Q1)', 'Resistant', 'Data has outliers or is skewed']
      ],
      darkTheme: false
    },

    // Slide 23: Section Divider - Part 6
    {
      id: 23,
      slideNumber: '23 / 35',
      type: 'section-divider',
      topRightTag: 'PART 6 · VISUALIZATIONS',
      topLeftTag: 'DISTRIBUTION SHAPES',
      subBadge: 'PART 6',
      mainTitle: 'Statistical Visualizations',
      highlightedWords: ['Statistical Visualizations'],
      subtitle: '"A well-built chart can reveal in one glance what pages of numbers cannot."',
      darkTheme: true
    },

    // Slide 24: Histogram — Frequency Across Bins
    {
      id: 24,
      slideNumber: '24 / 35',
      type: 'histogram-visual',
      topRightTag: 'STATISTICAL VISUALIZATIONS',
      topLeftTag: 'BINNED FREQUENCY • SESSION 03',
      subBadge: 'HISTOGRAM ANATOMY',
      mainTitle: 'Histogram — Frequency Across Bins',
      highlightedWords: ['Histogram — Frequency Across Bins'],
      subtitle: 'Data is grouped into equal-width bins; bar height shows how many observations fall in each bin.',
      bins: [
        { label: '0-10', count: 40 },
        { label: '10-20', count: 90 },
        { label: '20-30', count: 150 },
        { label: '30-40', count: 190 },
        { label: '40-50', count: 160 },
        { label: '50-60', count: 110 },
        { label: '60-70', count: 60 },
        { label: '70-80', count: 30 }
      ],
      skewTypes: [
        { name: 'Normal Distribution', desc: 'Symmetric, centered on the mean', icon: 'normal' },
        { name: 'Right Skew', desc: 'Long tail of high values (e.g., income)', icon: 'right-skew' },
        { name: 'Left Skew', desc: 'Long tail of low values (e.g., age at retirement)', icon: 'left-skew' }
      ],
      darkTheme: false
    },

    // Slide 25: KDE Plot — A Smoothed View of Distribution
    {
      id: 25,
      slideNumber: '25 / 35',
      type: 'kde-visual',
      topRightTag: 'STATISTICAL VISUALIZATIONS',
      topLeftTag: 'DENSITY ESTIMATION • SESSION 03',
      subBadge: 'CONTINUOUS CURVE',
      mainTitle: 'KDE Plot — A Smoothed View of Distribution',
      highlightedWords: ['KDE Plot — A Smoothed View'],
      subtitle: 'A Kernel Density Estimate (KDE) draws a smooth curve through the data, avoiding arbitrary bin-width choices.',
      bars: [40, 90, 150, 190, 160, 110, 60, 30],
      darkTheme: false
    },

    // Slide 26: Box Plot — Five Numbers, One Picture
    {
      id: 26,
      slideNumber: '26 / 35',
      type: 'boxplot-visual',
      topRightTag: 'STATISTICAL VISUALIZATIONS',
      topLeftTag: 'FIVE-NUMBER SUMMARY • SESSION 03',
      subBadge: 'BOX & WHISKER',
      mainTitle: 'Box Plot — Five Numbers, One Picture',
      highlightedWords: ['Box Plot — Five Numbers, One Picture'],
      subtitle: 'The box spans Q1 to Q3 (the IQR), the line marks median, whiskers extend to min/max, and outliers are flagged.',
      min: 10,
      q1: 25,
      median: 40,
      q3: 60,
      max: 85,
      outliers: [92, 98],
      darkTheme: false
    },

    // Slide 27: Reading Statistical Charts (Interactive Quiz)
    {
      id: 27,
      slideNumber: '27 / 35',
      type: 'reading-charts-quiz',
      topRightTag: 'STATISTICAL VISUALIZATIONS',
      topLeftTag: 'INTERPRETATION DRILL • SESSION 03',
      subBadge: 'INTERACTIVE PRACTICE',
      mainTitle: 'Reading Statistical Charts',
      highlightedWords: ['Reading Statistical Charts'],
      subtitle: 'Look at the shapes below and test your diagnostic skills on real distribution patterns:',
      questions: [
        {
          q: 'Which dataset is most likely to contain outliers?',
          a: 'Right or Left Skewed distributions with long stretched tails.',
          icon: 'Search'
        },
        {
          q: 'Which distribution shows the greatest variability?',
          a: 'A flatter, wider distribution with high standard deviation.',
          icon: 'Activity'
        },
        {
          q: 'Which shape is skewed, and in which direction?',
          a: 'Right skew has tail to the right; left skew has tail to the left.',
          icon: 'TrendingUp'
        },
        {
          q: 'Which measure of center would you trust most — mean or median?',
          a: 'Trust Mean for symmetric data; trust Median for skewed data.',
          icon: 'Target'
        }
      ],
      darkTheme: false
    },

    // Slide 28: Section Divider - Part 7
    {
      id: 28,
      slideNumber: '28 / 35',
      type: 'section-divider',
      topRightTag: 'PART 7 · REAL-WORLD LAB',
      topLeftTag: 'APPLIED CASE STUDY',
      subBadge: 'PART 7',
      mainTitle: 'Guided Practice',
      highlightedWords: ['Guided Practice'],
      subtitle: 'A realistic employee dataset — let\'s classify, calculate, and interpret together.',
      darkTheme: true
    },

    // Slide 29: Employee Dataset
    {
      id: 29,
      slideNumber: '29 / 35',
      type: 'employee-dataset',
      topRightTag: 'GUIDED PRACTICE',
      topLeftTag: 'SAMPLE DATASET • SESSION 03',
      subBadge: 'TEN EMPLOYEE RECORDS',
      mainTitle: 'Employee Dataset',
      highlightedWords: ['Employee Dataset'],
      subtitle: 'Representative workforce sample containing categorical, discrete, continuous, and outlier features.',
      headers: ['Employee ID', 'Department', 'Salary ($)', 'Age', 'Performance', 'Years Exp.'],
      rows: [
        ['E001', 'Sales', '52,000', '29', '4.2', '3'],
        ['E002', 'IT', '68,000', '34', '3.8', '6'],
        ['E003', 'Marketing', '55,000', '27', '4.5', '2'],
        ['E004', 'Sales', '51,000', '41', '3.5', '12'],
        ['E005', 'IT', '72,000', '38', '4.0', '9'],
        ['E006', 'HR', '49,000', '45', '3.9', '15'],
        ['E007', 'Marketing', '58,000', '31', '4.7', '4'],
        ['E008', 'IT', '250,000', '36', '4.1', '8'],
        ['E009', 'Sales', '53,000', '26', '3.6', '1'],
        ['E010', 'HR', '47,000', '50', '3.7', '20']
      ],
      callout: 'E008 is a senior IT hire with an unusually high salary ($250,000) — keep this in mind for the outlier discussion ahead.',
      darkTheme: false
    },

    // Slide 30: Calculate and Classify (6 Guided Steps)
    {
      id: 30,
      slideNumber: '30 / 35',
      type: 'calculate-steps',
      topRightTag: 'GUIDED PRACTICE',
      topLeftTag: 'ANALYTICAL WORKFLOW • SESSION 03',
      subBadge: 'HANDS-ON TASKS',
      mainTitle: 'Calculate and Classify',
      highlightedWords: ['Calculate and Classify'],
      subtitle: 'Systematic 6-step walkthrough to extract full descriptive intelligence from the dataset:',
      steps: [
        { num: 'Step 1', title: 'Identify Data Types', desc: 'Identify the data type of each column in the dataset', icon: 'Tag' },
        { num: 'Step 2', title: 'Measures of Central Tendency', desc: 'Calculate the mean, median and mode of Salary', icon: 'Target' },
        { num: 'Step 3', title: 'Measures of Spread', desc: 'Calculate the range, variance and standard deviation of Salary', icon: 'Activity' },
        { num: 'Step 4', title: 'Calculate IQR', desc: 'Calculate Q1, Q3 and the IQR of Salary', icon: 'Sliders' },
        { num: 'Step 5', title: 'Histogram Distribution', desc: 'Sketch what the Salary histogram would look like — normal or skewed?', icon: 'BarChart2' },
        { num: 'Step 6', title: 'Box Plot Outlier Check', desc: 'Predict what a Salary box plot would reveal about E008', icon: 'Eye' }
      ],
      darkTheme: false
    },

    // Slide 31: Interpreting the Salary Distribution
    {
      id: 31,
      slideNumber: '31 / 35',
      type: 'salary-distribution-box',
      topRightTag: 'GUIDED PRACTICE',
      topLeftTag: 'INSIGHT SYNTHESIS • SESSION 03',
      subBadge: 'OUTLIER DIAGNOSTIC',
      mainTitle: 'Interpreting the Salary Distribution',
      highlightedWords: ['Interpreting the Salary Distribution'],
      subtitle: 'E008\'s salary sits well beyond the upper whisker — exactly the kind of point a box plot surfaces at a glance.',
      min: 47000,
      q1: 51250,
      median: 54000,
      q3: 67000,
      max: 72000,
      outlier: 250000,
      darkTheme: false
    },

    // Slide 32: Section Divider - Part 8
    {
      id: 32,
      slideNumber: '32 / 35',
      type: 'section-divider',
      topRightTag: 'PART 8 · WRAP-UP',
      topLeftTag: 'CORE TAKEAWAYS',
      subBadge: 'PART 8',
      mainTitle: 'Summary',
      highlightedWords: ['Summary'],
      subtitle: 'From raw numbers to confident, data-driven decisions.',
      darkTheme: true
    },

    // Slide 33: What We Covered Today (7 Cards)
    {
      id: 33,
      slideNumber: '33 / 35',
      type: 'seven-cards',
      topRightTag: 'SUMMARY',
      topLeftTag: 'SESSION RECAP • SESSION 03',
      subBadge: 'CORE PILLARS REVIEW',
      mainTitle: 'What We Covered Today',
      highlightedWords: ['What We Covered Today'],
      subtitle: 'Key competencies mastered in Descriptive Statistics Part 1:',
      cards: [
        {
          title: 'Types of Data',
          description: 'Nominal, ordinal, discrete, continuous',
          iconName: 'Layers'
        },
        {
          title: 'Measures of Central Tendency',
          description: 'Mean, median, mode',
          iconName: 'Target'
        },
        {
          title: 'Measures of Spread',
          description: 'Range, variance, SD, IQR',
          iconName: 'Activity'
        },
        {
          title: 'Outliers',
          description: 'How extreme values distort the mean',
          iconName: 'Search'
        },
        {
          title: 'Histogram',
          description: 'Frequency across bins, distribution shape',
          iconName: 'BarChart2'
        },
        {
          title: 'KDE Plot',
          description: 'A smoothed view of the distribution',
          iconName: 'TrendingUp'
        },
        {
          title: 'Box Plot',
          description: 'Five-number summary in one picture',
          iconName: 'Eye'
        }
      ],
      darkTheme: false
    },

    // Slide 34: Quick Reference — Formulas at a Glance (Table)
    {
      id: 34,
      slideNumber: '34 / 35',
      type: 'quick-reference-table',
      topRightTag: 'SUMMARY',
      topLeftTag: 'CHEAT SHEET • SESSION 03',
      subBadge: 'FORMULA REFERENCE',
      mainTitle: 'Quick Reference — Formulas at a Glance',
      highlightedWords: ['Formulas at a Glance'],
      subtitle: 'Comprehensive mathematical formulas and their resistance to extreme values.',
      headers: ['Measure', 'Formula', 'Resistant to Outliers?'],
      rows: [
        ['Mean', 'Σ values ÷ n', 'No'],
        ['Median', 'Middle value of sorted data (avg. of two middles if n is even)', 'Yes'],
        ['Mode', 'Most frequently occurring value', 'Yes'],
        ['Range', 'Maximum − Minimum', 'No'],
        ['Variance', 'Average of squared distances from the mean', 'No'],
        ['Standard Deviation', 'Square root of variance', 'No'],
        ['IQR', 'Q3 − Q1 (middle 50% of sorted data)', 'Yes']
      ],
      darkTheme: false
    },

    // Slide 35: Outro Hero - Think Statistically.
    {
      id: 35,
      slideNumber: '35 / 35',
      type: 'outro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 03',
      topLeftTag: 'LOOKING AHEAD',
      subBadge: 'PHILOSOPHY OF ANALYSIS',
      mainTitle: 'Think Statistically.',
      highlightedWords: ['Think Statistically.'],
      subtitle: 'Every dataset tells a story — center, spread, and shape are how you learn to read it.',
      nextSessionNote: 'Next Session: Descriptive Statistics Part 2 — Dispersion, Standard Deviation & Outliers',
      darkTheme: true
    }
  ]
};
