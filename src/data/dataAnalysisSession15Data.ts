import { ChapterPresentation } from '../types';

export const dataAnalysisSession15EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-15',
  chapterTitle: 'Session 15: Inferential Statistics & Probability Theory',
  courseName: 'Data Analysis Diploma • Session 15',
  duration: 'Duration: 4 Hours',
  totalSlides: 48,
  slides: [
    // =========================================================
    // PART 01: FOUNDATIONS OF INFERENTIAL STATISTICS (Slides 01-06)
    // =========================================================

    // Slide 01: Hero Cover
    {
      id: 1,
      slideNumber: '01 / 48',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 15',
      topLeftTag: 'STATISTICS FOR DATA SCIENCE',
      subBadge: 'INFERENTIAL STATISTICS & PROBABILITY THEORY',
      mainTitle: 'Inferential Statistics & Probability Theory',
      highlightedWords: ['Inferential Statistics', 'Probability Theory'],
      subtitle: 'Population → Sample → Inference → Decision · Probability · Bayes\' Theorem · CLT · Confidence Intervals · Hypothesis Testing · A/B Testing',
      darkTheme: true
    },

    // Slide 02: Section 01 Divider
    {
      id: 2,
      slideNumber: '02 / 48',
      type: 'section-divider',
      topRightTag: 'PART 01',
      topLeftTag: 'FOUNDATIONS OF INFERENTIAL STATISTICS',
      subBadge: '01 · FROM DATA TO DECISIONS',
      mainTitle: 'From Data to Decisions',
      highlightedWords: ['From Data', 'to Decisions'],
      subtitle: 'How we draw rigorous conclusions about the world from limited observations',
      darkTheme: true
    },

    // Slide 03: Two Branches of Statistics
    {
      id: 3,
      slideNumber: '03 / 48',
      type: 'concept-detail',
      topRightTag: '01 — FOUNDATIONS',
      topLeftTag: 'STATISTICAL BRANCHES',
      subBadge: 'DESCRIPTIVE VS INFERENTIAL',
      mainTitle: 'Two Branches of Statistics',
      highlightedWords: ['Descriptive Statistics', 'Inferential Statistics'],
      subtitle: 'Understanding where Inferential Statistics fits in the data science pipeline',
      darkTheme: false
    },

    // Slide 04: Population vs Sample
    {
      id: 4,
      slideNumber: '04 / 48',
      type: 'concept-detail',
      topRightTag: '01 — FOUNDATIONS',
      topLeftTag: 'CORE CONCEPT',
      subBadge: 'POPULATION (N) VS SAMPLE (n)',
      mainTitle: 'Population vs Sample — The Core Concept',
      highlightedWords: ['Population', 'Sample'],
      subtitle: 'Every statistical inference starts with understanding parameters vs statistics',
      darkTheme: false
    },

    // Slide 05: Types of Sampling
    {
      id: 5,
      slideNumber: '05 / 48',
      type: 'six-cards',
      topRightTag: '01 — FOUNDATIONS',
      topLeftTag: 'SAMPLING METHODOLOGY',
      subBadge: 'HOW YOU COLLECT MATTERS',
      mainTitle: 'Types of Sampling — How You Collect Matters',
      highlightedWords: ['Types of Sampling'],
      subtitle: 'A biased sample leads to wrong inferences, no matter how good your math is:',
      cards: [
        {
          title: '[1] Simple Random Sampling',
          description: 'Every member has an equal chance of selection.\nAdvantages: Gold standard; minimises bias\nLimitation: Needs a complete population list\nExample: Randomly select 500 customers from full CRM database.',
          iconName: 'Sparkles'
        },
        {
          title: '[2] Systematic Sampling',
          description: 'Select every k-th element from the population list.\nAdvantages: Simple; evenly spread\nLimitation: Can miss periodic patterns\nExample: Survey every 10th customer who visits the site today.',
          iconName: 'ListFilter'
        },
        {
          title: '[3] Stratified Sampling',
          description: 'Divide population into groups (strata), then randomly sample each.\nAdvantages: Ensures all subgroups are represented\nExample: Survey 200 from each age group: 18-30, 31-50, 51+.',
          iconName: 'Layers'
        },
        {
          title: '[4] Cluster Sampling',
          description: 'Divide into clusters, randomly select whole clusters.\nAdvantages: Cost-effective for large populations\nLimitation: Higher sampling error\nExample: Randomly choose 20 cities; survey all residents.',
          iconName: 'Grid'
        },
        {
          title: '[5] Convenience Sampling',
          description: 'Select whoever is easiest to reach.\nLimitation: High risk of bias; results not generalisable\nOnly acceptable for exploratory, early-stage work\nExample: Surveying Twitter followers about a product.',
          iconName: 'AlertTriangle'
        },
        {
          title: '[6] Purposive Sampling',
          description: 'Select based on researcher judgement about who is most useful.\nLimitation: Subjective; researcher bias risk\nUseful when specific expertise is needed\nExample: Interviewing only senior data scientists about MLOps.',
          iconName: 'Target'
        }
      ],
      darkTheme: false
    },

    // Slide 06: Exercise — Foundations
    {
      id: 6,
      slideNumber: '06 / 48',
      type: 'exercise',
      topRightTag: '01 — FOUNDATIONS',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'EXERCISE 01 · FOUNDATIONS',
      mainTitle: 'Exercise — Foundations',
      highlightedWords: ['Exercise', 'Foundations'],
      subtitle: 'A data analyst wants to study average monthly spending of users on a streaming platform with 4 million registered users worldwide.',
      questions: [
        {
          id: 'q1',
          question: 'Q1: Identify the Population and Parameter of interest.',
          hint: 'What is the full group? What number are you trying to estimate?',
          answer: 'Population: All 4 million registered users worldwide.\nParameter: Average monthly spending of all 4 million users (mu).'
        },
        {
          id: 'q2',
          question: 'Q2: The analyst surveys 2,000 randomly selected users. What is the Sample and Statistic?',
          hint: 'What is the subset? What calculated value estimates the parameter?',
          answer: 'Sample: The 2,000 surveyed users (n = 2,000).\nStatistic: Sample mean spending of the 2,000 users (x-bar).'
        },
        {
          id: 'q3',
          question: 'Q3: The analyst only surveys users who logged in last week. Which sampling method is this? What bias does it introduce?',
          hint: 'Think about who is excluded and whether they differ systematically.',
          answer: 'Method: Convenience Sampling.\nBias: Excludes inactive/infrequent users who likely spend less or have higher churn risk, overestimating average spend.'
        },
        {
          id: 'q4',
          question: 'Q4: Suggest a better sampling method and explain why it produces more reliable inferences.',
          hint: 'Which method ensures all user types (heavy, light, inactive) are represented?',
          answer: 'Method: Stratified Random Sampling by activity level (e.g. daily, weekly, monthly, inactive).\nWhy: Guarantees proportional representation of all user tiers, eliminating activity bias.'
        }
      ],
      darkTheme: false
    },

    // =========================================================
    // PART 02: PROBABILITY THEORY (Slides 07-13)
    // =========================================================

    // Slide 07: Section 02 Divider
    {
      id: 7,
      slideNumber: '07 / 48',
      type: 'section-divider',
      topRightTag: 'PART 02',
      topLeftTag: 'PROBABILITY THEORY',
      subBadge: '02 · QUANTIFYING UNCERTAINTY',
      mainTitle: 'Quantifying Uncertainty',
      highlightedWords: ['Quantifying', 'Uncertainty'],
      subtitle: 'The mathematical language for describing how likely events are to occur',
      darkTheme: true
    },

    // Slide 08: What Is Probability?
    {
      id: 8,
      slideNumber: '08 / 48',
      type: 'concept-detail',
      topRightTag: '02 — PROBABILITY',
      topLeftTag: 'PROBABILITY BASICS',
      subBadge: 'BUILDING THE VOCABULARY',
      mainTitle: 'What Is Probability?',
      highlightedWords: ['What Is Probability?'],
      subtitle: 'Building the core vocabulary before applying the rules: P(E) = Favourable / Total (0 <= P(E) <= 1)',
      darkTheme: false
    },

    // Slide 09: Addition Rule — P(A or B)
    {
      id: 9,
      slideNumber: '09 / 48',
      type: 'concept-detail',
      topRightTag: '02 — PROBABILITY',
      topLeftTag: 'PROBABILITY RULES',
      subBadge: 'ADDITION RULE · P(A OR B)',
      mainTitle: 'Addition Rule — P(A or B)',
      highlightedWords: ['Addition Rule', 'P(A or B)'],
      subtitle: 'Calculating the probability that at least one of two events occurs',
      darkTheme: false
    },

    // Slide 10: Multiplication Rule — P(A and B)
    {
      id: 10,
      slideNumber: '10 / 48',
      type: 'concept-detail',
      topRightTag: '02 — PROBABILITY',
      topLeftTag: 'PROBABILITY RULES',
      subBadge: 'MULTIPLICATION RULE · P(A AND B)',
      mainTitle: 'Multiplication Rule — P(A and B)',
      highlightedWords: ['Multiplication Rule', 'P(A and B)'],
      subtitle: 'Probability of two events both occurring: Dependent vs Independent Events',
      darkTheme: false
    },

    // Slide 11: Conditional Probability — P(A given B)
    {
      id: 11,
      slideNumber: '11 / 48',
      type: 'concept-detail',
      topRightTag: '02 — PROBABILITY',
      topLeftTag: 'CONDITIONAL PROBABILITY',
      subBadge: 'P(A | B) = P(A n B) / P(B)',
      mainTitle: 'Conditional Probability — P(A given B)',
      highlightedWords: ['Conditional Probability', 'P(A given B)'],
      subtitle: '\'Given that B happened, how likely is A?\' — Restricting the sample space to B',
      darkTheme: false
    },

    // Slide 12: Applied Example — Email Spam Filter
    {
      id: 12,
      slideNumber: '12 / 48',
      type: 'applied-example',
      topRightTag: '02 — PROBABILITY',
      topLeftTag: 'REAL-WORLD APPLICATION',
      subBadge: 'SPAM FILTER CASE STUDY',
      mainTitle: 'Applied Example — Email Spam Filter',
      highlightedWords: ['Email Spam Filter'],
      subtitle: 'Scenario: 10,000 emails (2,000 spam, 8,000 legit). 1,800 spam contain "FREE". 400 legit contain "FREE".',
      darkTheme: false
    },

    // Slide 13: Exercise — Probability Rules
    {
      id: 13,
      slideNumber: '13 / 48',
      type: 'exercise',
      topRightTag: '02 — PROBABILITY',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'EXERCISE 02 · PROBABILITY RULES',
      mainTitle: 'Exercise — Probability Rules',
      highlightedWords: ['Exercise', 'Probability Rules'],
      subtitle: 'A survey of 1,000 job applicants shows: 400 have a degree (D), 300 have work experience (E), 150 have both.',
      questions: [
        {
          id: 'q1',
          question: 'Q1: Calculate P(D or E) — probability of having a degree OR experience.',
          hint: 'Use Addition Rule: P(D U E) = P(D) + P(E) - P(D n E).',
          answer: 'P(D) = 400/1000 = 0.40\nP(E) = 300/1000 = 0.30\nP(D n E) = 150/1000 = 0.15\nP(D U E) = 0.40 + 0.30 - 0.15 = 0.55 (55% chance).'
        },
        {
          id: 'q2',
          question: 'Q2: Are D and E independent events? Show your reasoning with numbers.',
          hint: 'Check: if independent, P(D n E) should equal P(D) x P(E).',
          answer: 'P(D n E) = 0.15\nP(D) x P(E) = 0.40 x 0.30 = 0.12\nSince 0.15 != 0.12, D and E are NOT independent (having experience increases degree odds).'
        },
        {
          id: 'q3',
          question: 'Q3: Given an applicant has experience, what is the probability they also have a degree?',
          hint: 'Use Conditional Probability: P(D|E) = P(D n E) / P(E).',
          answer: 'P(D|E) = P(D n E) / P(E) = 0.15 / 0.30 = 0.50 (50% of experienced applicants have degrees).'
        },
        {
          id: 'q4',
          question: 'Q4: If two applicants are selected WITH replacement, what is P(both have degrees)?',
          hint: 'With replacement, selections are independent. Use Multiplication Rule for independent events.',
          answer: 'P(both D) = P(D) x P(D) = 0.40 x 0.40 = 0.16 (16% chance).'
        }
      ],
      darkTheme: false
    },

    // =========================================================
    // PART 03: BAYES' THEOREM (Slides 14-18)
    // =========================================================

    // Slide 14: Section 03 Divider
    {
      id: 14,
      slideNumber: '14 / 48',
      type: 'section-divider',
      topRightTag: 'PART 03',
      topLeftTag: 'BAYES\' THEOREM',
      subBadge: '03 · UPDATING BELIEFS WITH EVIDENCE',
      mainTitle: 'Updating Beliefs with Evidence',
      highlightedWords: ['Updating Beliefs', 'with Evidence'],
      subtitle: 'The most powerful idea in probability — and the foundation of modern AI',
      darkTheme: true
    },

    // Slide 15: Bayes' Theorem — The Intuition First
    {
      id: 15,
      slideNumber: '15 / 48',
      type: 'concept-detail',
      topRightTag: '03 — BAYES\' THEOREM',
      topLeftTag: 'BAYESIAN INTUITION',
      subBadge: 'INTUITION BEFORE THE FORMULA',
      mainTitle: 'Bayes\' Theorem — The Intuition First',
      highlightedWords: ['Bayes\' Theorem', 'Intuition First'],
      subtitle: 'Bayes\' Theorem answers: How should I update my belief about something after seeing new evidence?',
      darkTheme: false
    },

    // Slide 16: Bayes' Theorem — The Formula Built Step by Step
    {
      id: 16,
      slideNumber: '16 / 48',
      type: 'concept-detail',
      topRightTag: '03 — BAYES\' THEOREM',
      topLeftTag: 'FORMULA DECONSTRUCTION',
      subBadge: 'P(A|B) = P(B|A) x P(A) / P(B)',
      mainTitle: 'Bayes\' Theorem — The Formula Built Step by Step',
      highlightedWords: ['Bayes\' Theorem', 'Formula Built Step by Step'],
      subtitle: 'Posterior = (Likelihood x Prior) / Marginal Evidence Normaliser',
      darkTheme: false
    },

    // Slide 17: Bayes in Action — Medical Test Worked Example
    {
      id: 17,
      slideNumber: '17 / 48',
      type: 'applied-example',
      topRightTag: '03 — BAYES\' THEOREM',
      topLeftTag: 'FULL WORKED EXAMPLE',
      subBadge: 'MEDICAL TEST CASE STUDY',
      mainTitle: 'Bayes in Action — Medical Test (Full Worked Example)',
      highlightedWords: ['Medical Test', 'Full Worked Example'],
      subtitle: 'Why a 99% accurate test on a rare disease (1% rate) results in only a 50% actual positive probability',
      darkTheme: false
    },

    // Slide 18: Bayes' Theorem in Machine Learning
    {
      id: 18,
      slideNumber: '18 / 48',
      type: 'six-cards',
      topRightTag: '03 — BAYES\' THEOREM',
      topLeftTag: 'MACHINE LEARNING & AI',
      subBadge: 'PRODUCTION ALGORITHMS',
      mainTitle: 'Bayes\' Theorem in Machine Learning',
      highlightedWords: ['Machine Learning', 'Bayes\' Theorem'],
      subtitle: 'Bayes\' theorem is the foundation of an entire family of ML models and Bayesian statistics:',
      cards: [
        {
          title: '[NB] Naive Bayes Classifier',
          description: 'Direct application of Bayes to classification. Assumes features are conditionally independent.\nUsed for: Spam filtering, sentiment analysis, document classification.\nFast, interpretable, works with small datasets.',
          iconName: 'Cpu'
        },
        {
          title: '[BI] Bayesian Inference',
          description: 'Gives a probability distribution over parameter values instead of a point estimate.\nUncertainty is explicit and updates continuously as data arrives.\nUsed in A/B testing, recommendation systems.',
          iconName: 'Activity'
        },
        {
          title: '[PD] Posterior Distributions',
          description: 'In Bayesian ML, parameters have probability distributions.\nPosterior = what we believe about a parameter after seeing data.\nUsed in Bayesian Neural Networks, uncertainty estimation.',
          iconName: 'BarChart2'
        },
        {
          title: '[BO] Bayesian Optimisation',
          description: 'Uses a Bayesian model to decide which hyperparameter to try next.\nMore efficient than grid search.\nStandard in AutoML, neural architecture search.',
          iconName: 'Sliders'
        },
        {
          title: '[RC] Recommendation Systems',
          description: 'P(User likes item | User history)\nPrior: What most users like\nLikelihood: How user ratings update belief\nNetflix, Spotify, Amazon use variants of this.',
          iconName: 'Sparkles'
        },
        {
          title: '[AB] Bayesian A/B Testing',
          description: 'Asks: "What is P(B is better than A)?" instead of p-value < 0.05.\nMore intuitive for business decisions.\nAllows stopping test early when certainty is sufficient.',
          iconName: 'CheckCircle'
        }
      ],
      darkTheme: false
    },

    // =========================================================
    // PART 04: CENTRAL LIMIT THEOREM (Slides 19-23)
    // =========================================================

    // Slide 19: Section 04 Divider
    {
      id: 19,
      slideNumber: '19 / 48',
      type: 'section-divider',
      topRightTag: 'PART 04',
      topLeftTag: 'CENTRAL LIMIT THEOREM',
      subBadge: '04 · THE MOST IMPORTANT THEOREM',
      mainTitle: 'The Most Important Theorem in Statistics',
      highlightedWords: ['Most Important Theorem', 'in Statistics'],
      subtitle: 'Why the normal distribution appears everywhere — and why inference works at all',
      darkTheme: true
    },

    // Slide 20: Central Limit Theorem — The Big Idea
    {
      id: 20,
      slideNumber: '20 / 48',
      type: 'concept-detail',
      topRightTag: '04 — CLT',
      topLeftTag: 'CORE THEOREM',
      subBadge: 'THE BIG IDEA & FORMAL STATEMENT',
      mainTitle: 'Central Limit Theorem — The Big Idea',
      highlightedWords: ['Central Limit Theorem', 'The Big Idea'],
      subtitle: 'If you take large enough samples (n >= 30) from ANY population, sample means x-bar ~ N(mu, sigma^2/n)',
      darkTheme: false
    },

    // Slide 21: CLT Visualised
    {
      id: 21,
      slideNumber: '21 / 48',
      type: 'concept-detail',
      topRightTag: '04 — CLT',
      topLeftTag: 'VISUAL PROOF',
      subBadge: 'THREE POPULATIONS, ONE RESULT',
      mainTitle: 'CLT Visualised — Three Different Populations, One Result',
      highlightedWords: ['CLT Visualised', 'Three Different Populations'],
      subtitle: 'Population shape does not matter — Right-skewed, Uniform, and Bimodal all become Normal sampling distributions',
      darkTheme: false
    },

    // Slide 22: CLT Applied — Quality Control at a Factory
    {
      id: 22,
      slideNumber: '22 / 48',
      type: 'applied-example',
      topRightTag: '04 — CLT',
      topLeftTag: 'FACTORY CASE STUDY',
      subBadge: 'QUALITY CONTROL APPLICATION',
      mainTitle: 'CLT Applied — Quality Control at a Factory',
      highlightedWords: ['Quality Control', 'Factory'],
      subtitle: 'Scenario: Batteries with mu = 500 hrs, sigma = 40. Sample n = 64 has x-bar = 488 hrs. Is machine miscalibrated?',
      darkTheme: false
    },

    // Slide 23: Exercise — Central Limit Theorem
    {
      id: 23,
      slideNumber: '23 / 48',
      type: 'exercise',
      topRightTag: '04 — CLT',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'EXERCISE 03 · CENTRAL LIMIT THEOREM',
      mainTitle: 'Exercise — Central Limit Theorem',
      highlightedWords: ['Exercise', 'Central Limit Theorem'],
      subtitle: 'A logistics company delivers packages with mu = 3.2 days, sigma = 1.5 days (right-skewed). Sample n = 36 gives x-bar = 3.6 days.',
      questions: [
        {
          id: 'q1',
          question: 'Q1: Can we apply the CLT here? What does it tell us about the sampling distribution of x-bar?',
          hint: 'Check whether n >= 30. What will the sampling distribution look like even though population is skewed?',
          answer: 'Yes! Since n = 36 >= 30, CLT applies.\nThe sampling distribution of x-bar will be approximately Normal, centered at mu = 3.2 days.'
        },
        {
          id: 'q2',
          question: 'Q2: Calculate the Standard Error (SE) of the sample mean.',
          hint: 'SE = sigma / sqrt(n). Plug in sigma = 1.5 and n = 36.',
          answer: 'SE = sigma / sqrt(n) = 1.5 / sqrt(36) = 1.5 / 6 = 0.25 days.'
        },
        {
          id: 'q3',
          question: 'Q3: Calculate the z-score for x-bar = 3.6 days.',
          hint: 'z = (x-bar - mu) / SE. How many standard errors is 3.6 from 3.2?',
          answer: 'z = (3.6 - 3.2) / 0.25 = 0.4 / 0.25 = 1.60.'
        },
        {
          id: 'q4',
          question: 'Q4: Does this sample provide strong evidence delivery times worsened? What probability are you computing?',
          hint: 'P(Z > your z-score). P(Z > 1.6) is approximately 0.055.',
          answer: 'P(Z > 1.6) ~ 0.0548 (5.5% chance).\nAt alpha = 0.05, 5.5% > 5%, so evidence is borderline but NOT statistically significant at 95% confidence.'
        }
      ],
      darkTheme: false
    },

    // =========================================================
    // PART 05: CONFIDENCE INTERVALS (Slides 24-28)
    // =========================================================

    // Slide 24: Section 05 Divider
    {
      id: 24,
      slideNumber: '24 / 48',
      type: 'section-divider',
      topRightTag: 'PART 05',
      topLeftTag: 'CONFIDENCE INTERVALS',
      subBadge: '05 · HOW UNCERTAIN ARE WE?',
      mainTitle: 'How Uncertain Are We?',
      highlightedWords: ['How Uncertain', 'Are We?'],
      subtitle: 'Putting honest error bars around our estimates of the unknown',
      darkTheme: true
    },

    // Slide 25: What Is a Confidence Interval?
    {
      id: 25,
      slideNumber: '25 / 48',
      type: 'concept-detail',
      topRightTag: '05 — CONFIDENCE INTERVALS',
      topLeftTag: 'CORE DEFINITION',
      subBadge: 'MISCONCEPTION VS CORRECT MEANING',
      mainTitle: 'What Is a Confidence Interval?',
      highlightedWords: ['What Is a', 'Confidence Interval?'],
      subtitle: 'Fixing the #1 most common misconception in statistics: Probability is about the procedure, not a single calculated interval.',
      darkTheme: false
    },

    // Slide 26: Confidence Interval — Formula & Worked Example
    {
      id: 26,
      slideNumber: '26 / 48',
      type: 'applied-example',
      topRightTag: '05 — CONFIDENCE INTERVALS',
      topLeftTag: 'FORMULA & CASE STUDY',
      subBadge: 'CI = X-BAR +/- Z* (SIGMA / SQRT(N))',
      mainTitle: 'Confidence Interval — Formula and Full Worked Example',
      highlightedWords: ['Confidence Interval', 'Formula and Worked Example'],
      subtitle: 'Customer Satisfaction Survey: n = 100, x-bar = 7.8, s = 1.5. 95% CI = (7.51, 8.09)',
      darkTheme: false
    },

    // Slide 27: Confidence Intervals in Product Analytics
    {
      id: 27,
      slideNumber: '27 / 48',
      type: 'concept-detail',
      topRightTag: '05 — CONFIDENCE INTERVALS',
      topLeftTag: 'PRODUCT ANALYTICS',
      subBadge: 'COMPARING 90%, 95%, AND 99% CI',
      mainTitle: 'Confidence Intervals in Product Analytics',
      highlightedWords: ['Confidence Intervals', 'Product Analytics'],
      subtitle: 'Daily active usage: n = 400, x-bar = 23 min/day, s = 8 min. SE = 0.4. Trade-off between confidence & precision.',
      darkTheme: false
    },

    // Slide 28: Exercise — Confidence Intervals
    {
      id: 28,
      slideNumber: '28 / 48',
      type: 'exercise',
      topRightTag: '05 — CONFIDENCE INTERVALS',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'EXERCISE 04 · CONFIDENCE INTERVALS',
      mainTitle: 'Exercise — Confidence Intervals',
      highlightedWords: ['Exercise', 'Confidence Intervals'],
      subtitle: 'A call centre monitors agent performance. Sample n = 81 calls gives average handling time x-bar = 7.4 min, s = 2.7 min.',
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
          question: 'Q3: Target handling time is 7.0 min. Is there strong evidence agents exceed target?',
          hint: 'Does 7.0 fall inside or outside your interval? What does that tell you?',
          answer: '7.0 min falls INSIDE the interval (6.81, 7.99).\nTherefore, there is NO strong evidence at 95% confidence that agents exceed target.'
        },
        {
          id: 'q4',
          question: 'Q4: The manager wants margin of error reduced to 0.20 min at 95% confidence. What sample size is needed?',
          hint: 'ME = z* x s / sqrt(n). Rearrange for n: n = (z* x s / ME)^2.',
          answer: 'n = (1.96 x 2.7 / 0.20)^2 = (5.292 / 0.20)^2 = (26.46)^2 = 700.1 -> n = 701 calls needed.'
        }
      ],
      darkTheme: false
    },

    // =========================================================
    // PART 06: HYPOTHESIS TESTING (Slides 29-37)
    // =========================================================

    // Slide 29: Section 06 Divider
    {
      id: 29,
      slideNumber: '29 / 48',
      type: 'section-divider',
      topRightTag: 'PART 06',
      topLeftTag: 'HYPOTHESIS TESTING',
      subBadge: '06 · REAL OR RANDOM?',
      mainTitle: 'Is This Result Real or Random?',
      highlightedWords: ['Is This Result', 'Real or Random?'],
      subtitle: 'The formal framework for making evidence-based decisions from data',
      darkTheme: true
    },

    // Slide 30: Logic of Hypothesis Testing — H0 vs H1
    {
      id: 30,
      slideNumber: '30 / 48',
      type: 'concept-detail',
      topRightTag: '06 — HYPOTHESIS TESTING',
      topLeftTag: 'DECISION LOGIC',
      subBadge: 'NULL (H0) VS ALTERNATIVE (H1)',
      mainTitle: 'The Logic of Hypothesis Testing — H0 vs H1',
      highlightedWords: ['Logic of Hypothesis Testing', 'H0 vs H1'],
      subtitle: 'Innocent until proven guilty — We assume NO effect (H0) until data proves otherwise (H1)',
      darkTheme: false
    },

    // Slide 31: The p-value — What It Really Means
    {
      id: 31,
      slideNumber: '31 / 48',
      type: 'concept-detail',
      topRightTag: '06 — HYPOTHESIS TESTING',
      topLeftTag: 'P-VALUE DEFINITION',
      subBadge: 'WHAT IT IS VS WHAT IT IS NOT',
      mainTitle: 'The p-value — What It Really Means',
      highlightedWords: ['The p-value', 'What It Really Means'],
      subtitle: 'p-value: Probability of observing a result at least as extreme as yours, IF H0 were true.',
      darkTheme: false
    },

    // Slide 32: Type I and Type II Errors
    {
      id: 32,
      slideNumber: '32 / 48',
      type: 'concept-detail',
      topRightTag: '06 — HYPOTHESIS TESTING',
      topLeftTag: 'DECISION ERRORS',
      subBadge: 'TYPE I (ALPHA) VS TYPE II (BETA)',
      mainTitle: 'Type I and Type II Errors — Two Ways to Be Wrong',
      highlightedWords: ['Type I and Type II Errors', 'Two Ways to Be Wrong'],
      subtitle: 'Understanding the cost of each mistake, controlling alpha, and power (1 - beta)',
      darkTheme: false
    },

    // Slide 33: z-test vs t-test — When to Use Which
    {
      id: 33,
      slideNumber: '33 / 48',
      type: 'concept-detail',
      topRightTag: '06 — HYPOTHESIS TESTING',
      topLeftTag: 'TEST SELECTION',
      subBadge: 'DECISION TREE: Z-TEST VS T-TEST',
      mainTitle: 'z-test vs t-test — When to Use Which',
      highlightedWords: ['z-test vs t-test', 'When to Use Which'],
      subtitle: 'Same core logic, different situations: Do you know population sigma?',
      darkTheme: false
    },

    // Slide 34: Hypothesis Testing — The 5-Step Framework
    {
      id: 34,
      slideNumber: '34 / 48',
      type: 'concept-detail',
      topRightTag: '06 — HYPOTHESIS TESTING',
      topLeftTag: 'METHODOLOGY',
      subBadge: 'THE 5-STEP FRAMEWORK',
      mainTitle: 'Hypothesis Testing — The 5-Step Framework',
      highlightedWords: ['Hypothesis Testing', '5-Step Framework'],
      subtitle: '01. State Hypotheses -> 02. Set Alpha -> 03. Compute Test Stat -> 04. Find p-value -> 05. Business Decision',
      darkTheme: false
    },

    // Slide 35: Applied Example — Did New Homepage Increase Revenue?
    {
      id: 35,
      slideNumber: '35 / 48',
      type: 'applied-example',
      topRightTag: '06 — HYPOTHESIS TESTING',
      topLeftTag: 'E-COMMERCE CASE STUDY',
      subBadge: 'FULL HYPOTHESIS TEST WALKTHROUGH',
      mainTitle: 'Applied Example — Did the New Homepage Increase Revenue?',
      highlightedWords: ['New Homepage', 'Increase Revenue?'],
      subtitle: 'Baseline mu0 = $120. Redesign sample n = 36, x-bar = $128, sigma = $24. z = 2.0, p = 0.0228 -> Reject H0!',
      darkTheme: false
    },

    // Slide 36: Exercise — Run a Full Hypothesis Test
    {
      id: 36,
      slideNumber: '36 / 48',
      type: 'exercise',
      topRightTag: '06 — HYPOTHESIS TESTING',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'EXERCISE 05 · FULL HYPOTHESIS TEST',
      mainTitle: 'Exercise — Run a Full Hypothesis Test',
      highlightedWords: ['Exercise', 'Run a Full Hypothesis Test'],
      subtitle: 'Bank call center: mu0 = 8 min, sigma = 2 min. After training, n = 25 calls has x-bar = 7.2 min. At alpha = 0.01, did training work?',
      questions: [
        {
          id: 'q1',
          question: 'Step 01: State H0 and H1 explicitly.',
          hint: 'Is this one-tailed or two-tailed? We expect a decrease in call time.',
          answer: 'H0: mu = 8 minutes (no change)\nH1: mu < 8 minutes (one-tailed left)'
        },
        {
          id: 'q2',
          question: 'Step 02 & 03: Choose test & calculate test statistic z.',
          hint: 'sigma is known = 2 min, n = 25. z = (x-bar - mu0) / (sigma / sqrt(n)).',
          answer: 'sigma known -> Use z-test.\nz = (7.2 - 8.0) / (2.0 / sqrt(25)) = -0.8 / 0.4 = -2.00.'
        },
        {
          id: 'q3',
          question: 'Step 04: Find critical value z* at alpha = 0.01 (one-tailed left).',
          hint: 'For alpha = 0.01 left-tailed, z* = -2.326. Is z = -2.0 more extreme?',
          answer: 'Critical value z* = -2.326.\nSince z = -2.0 is NOT less than -2.326 (|z| = 2.0 < 2.326), we FAIL TO REJECT H0.'
        },
        {
          id: 'q4',
          question: 'Step 05: State your business conclusion and recommendation.',
          hint: 'Did training significantly reduce call time at 1% level?',
          answer: 'Conclusion: At 1% significance, there is NOT sufficient evidence that training reduced call time.\nRecommendation: Results look promising (7.2 vs 8.0), but run a larger trial (n >= 100) before company-wide rollout.'
        }
      ],
      darkTheme: false
    },

    // Slide 37: Exercise Solution — Bank Call Time
    {
      id: 37,
      slideNumber: '37 / 48',
      type: 'applied-example',
      topRightTag: '06 — HYPOTHESIS TESTING',
      topLeftTag: 'EXERCISE SOLUTION',
      subBadge: 'FULL STEP-BY-STEP SOLUTION',
      mainTitle: 'Exercise Solution — Bank Call Time',
      highlightedWords: ['Exercise Solution', 'Bank Call Time'],
      subtitle: 'Key lesson: A promising sample result (7.2 vs 8.0 min) can still be statistically insignificant at alpha = 0.01 with n = 25.',
      darkTheme: false
    },

    // =========================================================
    // PART 07: A/B TESTING (Slides 38-48)
    // =========================================================

    // Slide 38: Section 07 Divider
    {
      id: 38,
      slideNumber: '38 / 48',
      type: 'section-divider',
      topRightTag: 'PART 07',
      topLeftTag: 'A/B TESTING',
      subBadge: '07 · WHICH VERSION WINS?',
      mainTitle: 'Which Version Actually Wins?',
      highlightedWords: ['Which Version', 'Actually Wins?'],
      subtitle: 'Turning hypothesis testing into a repeatable engine for digital product decisions',
      darkTheme: true
    },

    // Slide 39: Control Group vs Treatment Group
    {
      id: 39,
      slideNumber: '39 / 48',
      type: 'concept-detail',
      topRightTag: '07 — A/B TESTING',
      topLeftTag: 'EXPERIMENT DESIGN',
      subBadge: 'CONTROL (A) VS TREATMENT (B)',
      mainTitle: 'Control Group vs Treatment Group',
      highlightedWords: ['Control Group', 'Treatment Group'],
      subtitle: 'The two arms of every A/B test — Random assignment ensures causal comparison',
      darkTheme: false
    },

    // Slide 40: The Two-Proportion Z-Test — Formula & Example
    {
      id: 40,
      slideNumber: '40 / 48',
      type: 'concept-detail',
      topRightTag: '07 — A/B TESTING',
      topLeftTag: 'STATISTICAL TEST',
      subBadge: 'TWO-PROPORTION Z-TEST',
      mainTitle: 'The Two-Proportion Z-Test — Formula and Worked Example',
      highlightedWords: ['Two-Proportion Z-Test', 'Formula and Worked Example'],
      subtitle: 'Landing page CTA test: nA = 1000 (120 conv = 12%), nB = 1000 (150 conv = 15%). Pooled p = 0.135, z = 1.96, p = 0.050.',
      darkTheme: false
    },

    // Slide 41: Applied Example — Checkout Button Color
    {
      id: 41,
      slideNumber: '41 / 48',
      type: 'applied-example',
      topRightTag: '07 — A/B TESTING',
      topLeftTag: 'CONVERSION EXPERIMENT',
      subBadge: 'CHECKOUT BUTTON COLOR TEST',
      mainTitle: 'Applied Example — Did the New Checkout Button Increase Conversions?',
      highlightedWords: ['Checkout Button', 'Conversions?'],
      subtitle: 'Control (Green): 5,000 visitors, 400 conv (8.0%). Treatment (Orange): 5,000 visitors, 460 conv (9.2%). z = 2.14, p = 0.0162 -> Roll out!',
      darkTheme: false
    },

    // Slide 42: Sample Size & Power
    {
      id: 42,
      slideNumber: '42 / 48',
      type: 'concept-detail',
      topRightTag: '07 — A/B TESTING',
      topLeftTag: 'SAMPLE SIZING',
      subBadge: 'HOW MANY VISITORS DO YOU NEED?',
      mainTitle: 'Sample Size & Power — How Many Visitors Do You Need?',
      highlightedWords: ['Sample Size & Power', 'How Many Visitors'],
      subtitle: 'Under-powered tests are the #1 reason A/B results can\'t be trusted. Signup page lift 10% -> 12% needs ~7,666 visitors.',
      darkTheme: false
    },

    // Slide 43: A/B Testing Pitfalls — 6 Statistical Traps
    {
      id: 43,
      slideNumber: '43 / 48',
      type: 'six-cards',
      topRightTag: '07 — A/B TESTING',
      topLeftTag: 'EXPERIMENTATION TRAPS',
      subBadge: 'STATISTICAL PITFALLS',
      mainTitle: 'A/B Testing Pitfalls — Statistical Traps That Ruin Experiments',
      highlightedWords: ['A/B Testing Pitfalls', 'Statistical Traps'],
      subtitle: 'Running the test correctly is only half the job — most bad calls come from misreading valid results:',
      cards: [
        {
          title: '[PK] The Peeking Problem',
          description: 'Checking results repeatedly and stopping when p < 0.05 inflates false positives from 5% up to 30%.\nFix: Pre-register sample size or use sequential testing.',
          iconName: 'Eye'
        },
        {
          title: '[MC] Multiple Comparisons',
          description: 'Testing 20 metrics at alpha = 0.05 guarantees roughly 1 false positive by chance.\nFix: Apply Bonferroni correction (alpha / n) or control FDR.',
          iconName: 'Grid'
        },
        {
          title: '[NV] Novelty Effect',
          description: 'Users react to a NEW feature simply because it is new. Lift fades in 1-2 weeks.\nFix: Run test long enough to see effect stabilize.',
          iconName: 'Sparkles'
        },
        {
          title: '[SP] Simpson\'s Paradox',
          description: 'An overall winning result can reverse when split by segment (device, region, user type).\nFix: Always check segment-level results before rollout.',
          iconName: 'Layers'
        },
        {
          title: '[UP] Underpowered Tests',
          description: 'Stopping early or small sample size means real effects go undetected.\nFix: Calculate required n for target MDE & 80% power before launching.',
          iconName: 'AlertTriangle'
        },
        {
          title: '[SR] Sample Ratio Mismatch',
          description: 'If traffic isn\'t split as intended (e.g. 51/49 instead of 50/50), test is invalid due to randomization bug.\nFix: Run Chi-Square check on traffic split.',
          iconName: 'Sliders'
        }
      ],
      darkTheme: false
    },

    // Slide 44: The Peeking Problem — Why Checking Early Inflates False Positives
    {
      id: 44,
      slideNumber: '44 / 48',
      type: 'concept-detail',
      topRightTag: '07 — A/B TESTING',
      topLeftTag: 'PEEKING PROBLEM',
      subBadge: 'WHY CHECKING EARLY INFLATES FALSE POSITIVES',
      mainTitle: 'The Peeking Problem — Why Checking Early Inflates False Positives',
      highlightedWords: ['Peeking Problem', 'Inflates False Positives'],
      subtitle: 'Even with ZERO true difference, 5 peeks raises false positive risk from 5% to 14%; 20 peeks raises it to 29%!',
      darkTheme: false
    },

    // Slide 45: Exercise — A/B Testing
    {
      id: 45,
      slideNumber: '45 / 48',
      type: 'exercise',
      topRightTag: '07 — A/B TESTING',
      topLeftTag: 'KNOWLEDGE CHECK',
      subBadge: 'EXERCISE 06 · A/B TESTING',
      mainTitle: 'Exercise — A/B Testing',
      highlightedWords: ['Exercise', 'A/B Testing'],
      subtitle: 'E-commerce product page test: Control A (2,500 visitors, 175 purchases), Treatment B (2,500 visitors, 210 purchases).',
      questions: [
        {
          id: 'q1',
          question: 'Q1: Calculate conversion rate for each group and pooled proportion p-hat.',
          hint: 'pA = xA/nA, pB = xB/nB. p-hat = (xA+xB)/(nA+nB).',
          answer: 'pA = 175/2500 = 7.0%\npB = 210/2500 = 8.4%\np-hat = (175+210)/(2500+2500) = 385/5000 = 0.077 (7.7%).'
        },
        {
          id: 'q2',
          question: 'Q2: Calculate the z-statistic for this two-proportion test.',
          hint: 'SE = sqrt(p-hat(1-p-hat) x (1/nA + 1/nB)). z = (pB - pA) / SE.',
          answer: 'SE = sqrt(0.077 x 0.923 x (2/2500)) = sqrt(0.07107 x 0.0008) = sqrt(0.00005685) = 0.00754.\nz = (0.084 - 0.070) / 0.00754 = 0.014 / 0.00754 = 1.86.'
        },
        {
          id: 'q3',
          question: 'Q3: At alpha = 0.05 (two-tailed, z* = 1.96), is difference statistically significant?',
          hint: 'Compare |z| to 1.96. Should team roll out new layout?',
          answer: '|z| = 1.86 < 1.96 -> NOT statistically significant at 95% confidence.\nDo NOT roll out layout yet; collect more data.'
        },
        {
          id: 'q4',
          question: 'Q4: The team peeked after 500 visitors/group, saw p = 0.04, and stopped early. What is wrong?',
          hint: 'Think about peeking problem and true false-positive rate.',
          answer: 'Stopping early because p < 0.04 at n=500 inflates false-positive rate up to 15-30%.\nResult at n=500 is far less trustworthy than pre-planned n=2,500.'
        }
      ],
      darkTheme: false
    },

    // Slide 46: A/B Testing — Quick Reference
    {
      id: 46,
      slideNumber: '46 / 48',
      type: 'concept-detail',
      topRightTag: '07 — A/B TESTING',
      topLeftTag: 'QUICK REFERENCE',
      subBadge: 'SUMMARY OF CONCEPTS & RULES',
      mainTitle: 'A/B Testing — Quick Reference',
      highlightedWords: ['A/B Testing', 'Quick Reference'],
      subtitle: 'Complete cheat sheet table of concepts, formulas, when to use, and key insights',
      darkTheme: false
    },

    // Slide 47: Inferential Statistics — Complete Cheat Sheet
    {
      id: 47,
      slideNumber: '47 / 48',
      type: 'concept-detail',
      topRightTag: 'MASTER SUMMARY',
      topLeftTag: 'CHEAT SHEET',
      subBadge: 'COMPLETE INFERENTIAL STATISTICS CHEAT SHEET',
      mainTitle: 'Inferential Statistics — Complete Cheat Sheet',
      highlightedWords: ['Inferential Statistics', 'Complete Cheat Sheet'],
      subtitle: 'All 12 core concepts, formulas, decision rules, and key insights in one master reference table',
      darkTheme: false
    },

    // Slide 48: What's Next? Graduation Outro
    {
      id: 48,
      slideNumber: '48 / 48',
      type: 'outro-hero',
      topRightTag: 'INSTANT ACADEMY',
      topLeftTag: 'SESSION 15 COMPLETE',
      subBadge: 'INFERENTIAL STATISTICS & PROBABILITY COMPLETE!',
      mainTitle: 'YOU CAN NOW:',
      highlightedWords: ['YOU CAN', 'NOW:'],
      subtitle: 'Congratulations! You have mastered Inferential Statistics, Probability Theory, Bayes\' Theorem, CLT, Confidence Intervals, Hypothesis Testing, and A/B Testing.',
      nextSessionNote: '🎉 Session 15 Complete! Next Session: Pandas S1 — Data I/O, DataFrames & Structural Exploration',
      darkTheme: true
    }
  ]
};

export const dataAnalysisSession15AR: ChapterPresentation = {
  ...dataAnalysisSession15EN,
  chapterTitle: 'السيشن 15: الإحصاء الاستدلالي ونظرية الاحتمالات (Inferential Statistics & Probability Theory)',
  courseName: 'دبلومة تحليل البيانات • السيشن 15'
};
