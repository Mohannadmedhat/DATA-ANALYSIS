import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { HeroCoverVisual } from './HeroCoverVisual';
import { ThankYouVisual } from './ThankYouVisual';
import { 
  Sparkles,
  Layers,
  Grid,
  AlertTriangle,
  Target,
  ListFilter,
  CheckCircle,
  CheckCircle2,
  HelpCircle,
  BarChart2,
  Activity,
  Sliders,
  Cpu,
  Eye,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  ArrowRight,
  Shield,
  Calendar,
  Clock,
  Table,
  Filter
} from 'lucide-react';

interface Session16SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session16SlideRenderer: React.FC<Session16SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // ---------------------------------------------------------
  // INTERACTIVE STATES FOR EXERCISES & CALCULATORS
  // ---------------------------------------------------------
  const [openAnswers, setOpenAnswers] = useState<{ [key: string]: boolean }>({});

  // Slide 09 & 10: ANOVA F-Test Calculator
  const [anovaK, setAnovaK] = useState<number>(3);
  const [anovaN, setAnovaN] = useState<number>(15);
  const [anovaSSB, setAnovaSSB] = useState<number>(16800);
  const [anovaSSW, setAnovaSSW] = useState<number>(14400);

  const toggleAnswer = (qId: string) => {
    setOpenAnswers(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Icon lookup for cards
  const iconLookup: { [key: string]: any } = {
    Sparkles,
    Layers,
    Grid,
    AlertTriangle,
    Target,
    ListFilter,
    CheckCircle,
    CheckCircle2,
    HelpCircle,
    BarChart2,
    Activity,
    Sliders,
    Cpu,
    Eye,
    TrendingUp,
    Award,
    Shield,
    Calendar,
    Clock,
    Table,
    Filter
  };

  // =========================================================
  // SECTION DIVIDER SLIDES (Slide 2, 7, 13, 19)
  // =========================================================
  if (slide.type === 'section-divider') {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 select-none overflow-hidden bg-transparent">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-72 h-72 rounded-full blur-3xl bg-blue-600/20 pointer-events-none"
        />

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl flex flex-col items-center my-auto"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-4 ring-4 ring-orange-500/20">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold mb-3">
            {slide.subBadge || 'SECTION'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {slide.mainTitle}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
            {slide.subtitle}
          </p>
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual 
        sessionNumber="16"
        titlePrefix="CONFIDENCE INTERVALS & ANOVA"
        titleHighlight="PANDAS FUNDAMENTALS"
        subtitle="Estimate → Compare Groups → Load Data → Analyze · ANOVA · Pandas Series · DataFrames · CSV / Excel / JSON / SQL"
        floatingBadges={[
          { icon: Activity, label: "Confidence Intervals", position: "top-left", borderColor: "border-blue-500/50", textColor: "text-blue-400" },
          { icon: Target, label: "ANOVA F-Statistic", position: "top-right", borderColor: "border-amber-500/50", textColor: "text-amber-400" },
          { icon: Table, label: "Pandas DataFrames & Series", position: "bottom-left", borderColor: "border-purple-500/50", textColor: "text-purple-400" },
          { icon: Calendar, label: "Reading CSV / Excel / JSON / SQL", position: "bottom-right", borderColor: "border-emerald-500/50", textColor: "text-emerald-400" }
        ]}
        statsCards={[
          { val: "4 Parts", label: "Stats & Pandas Core", sub: "Confidence Intervals to Data Import" },
          { val: "24 Slides", label: "PDF Presentation Deck", sub: "Worked Examples & Exercises" },
          { val: "4 Exercises", label: "Knowledge Checks", sub: "Calculations, Selection & Imports" }
        ]}
      />
    );
  }

  // =========================================================
  // SLIDE 03: WHAT IS A CONFIDENCE INTERVAL?
  // =========================================================
  if (slide.id === 3) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs uppercase mb-3">
                What Most People Think [WRONG]
              </div>
              <p className="text-xs text-slate-800 leading-relaxed mb-3">
                "A 95% confidence interval means there is a 95% probability that the true population mean lies within this interval."
              </p>
              <p className="text-xs text-red-600 font-bold mb-2">This is incorrect.</p>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                The population mean mu is a fixed (unknown) constant. It either is in your interval or it is not — there is no probability about it once the interval is calculated. The interval either captures it or misses it.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase mb-3">
                What It Actually Means [CORRECT]
              </div>
              <p className="text-xs text-slate-800 leading-relaxed mb-3">
                "If we repeated our sampling procedure many times and built a confidence interval each time, 95% of those intervals would contain the true population mean."
              </p>
              <p className="text-xs text-emerald-700 font-bold mb-2">
                The probability is about the PROCEDURE, not about any single interval.
              </p>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Practical reading: 'We are 95% confident our method produced an interval that contains the true value.'
              </p>
            </div>
          </div>
        </div>

        {/* Visualising procedure bar */}
        <div className="p-3 bg-slate-900 rounded-xl text-white font-mono text-xs flex items-center justify-between">
          <span className="text-slate-300">Visualising the Procedure (20 samples, each builds its own 95% CI):</span>
          <span className="text-emerald-400 font-bold">95% capture true mean | 5% miss it</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: CONFIDENCE INTERVALS IN PRODUCT ANALYTICS (TABLE)
  // =========================================================
  if (slide.id === 5) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950 font-medium">
          Scenario: Your product team surveys 400 users about daily active usage. x-bar = 23 min/day, s = 8 min. SE = 8 / sqrt(400) = 0.4 min.
        </div>

        <div className="overflow-x-auto rounded-xl bg-white border border-slate-200 shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-mono text-[11px]">
              <tr>
                <th className="p-3">Confidence Level</th>
                <th className="p-3">z* Critical Value</th>
                <th className="p-3">Margin of Error</th>
                <th className="p-3">Interval (minutes)</th>
                <th className="p-3">When to Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800 font-mono text-[11px]">
              <tr>
                <td className="p-3 font-bold text-blue-600">90%</td>
                <td className="p-3">1.645</td>
                <td className="p-3">+/- 0.66 min</td>
                <td className="p-3 font-bold">(22.34, 23.66)</td>
                <td className="p-3 font-sans text-slate-600">Use for internal dashboards where some risk is acceptable.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-emerald-600">95%</td>
                <td className="p-3">1.960</td>
                <td className="p-3">+/- 0.78 min</td>
                <td className="p-3 font-bold">(22.22, 23.78)</td>
                <td className="p-3 font-sans text-slate-600">Standard industry choice (investor reports & product metrics).</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-purple-600">99%</td>
                <td className="p-3">2.576</td>
                <td className="p-3">+/- 1.03 min</td>
                <td className="p-3 font-bold">(21.97, 24.03)</td>
                <td className="p-3 font-sans text-slate-600">Use for critical decisions (pricing, SLA commitments) where being wrong is costly.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-1 text-xs text-slate-700 font-medium">
          <p className="text-emerald-700"><strong>Key insight:</strong> Increasing confidence always widens the interval. More certainty means less precision.</p>
          <p className="text-blue-700"><strong>Key insight:</strong> Increasing n (sample size) always narrows the interval — the best way to improve precision.</p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 08: WHY NOT JUST RUN MULTIPLE T-TESTS?
  // =========================================================
  if (slide.id === 8) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-orange-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-bold text-xs uppercase mb-3">
                Running Many T-Tests
              </div>
              <p className="text-xs font-semibold text-slate-800 mb-2">Compares only two groups at a time.</p>
              <div className="p-2.5 bg-slate-50 font-mono text-[11px] text-slate-700 rounded-xl mb-3 space-y-1">
                <p>3 groups = 3 pairwise tests</p>
                <p>5 groups = 10 pairwise tests</p>
                <p>10 groups = 45 pairwise tests</p>
              </div>
              <p className="text-[11px] text-slate-600">
                Note: Each test risks a 5% false positive. Enough tests and a false 'significant' result becomes likely — the multiple comparisons problem.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase mb-3">
                One-Way ANOVA
              </div>
              <p className="text-xs font-semibold text-slate-800 mb-2">Tests all groups at once for any difference among them.</p>
              <div className="p-2.5 bg-emerald-50 text-emerald-950 font-mono text-[11px] rounded-xl mb-3 space-y-1">
                <p>One test controls overall error rate</p>
                <p>Any number of groups, one F-test</p>
                <p>Tells you IF a difference exists, not which pair</p>
              </div>
              <p className="text-[11px] text-slate-600">
                If ANOVA finds a difference, post-hoc tests (e.g. Tukey HSD) reveal exactly which groups differ.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 09: THE F-STATISTIC — FORMULA & WORKED EXAMPLE
  // =========================================================
  if (slide.id === 9) {
    const df1 = anovaK - 1;
    const df2 = anovaN - anovaK;
    const msb = df1 > 0 ? anovaSSB / df1 : 0;
    const msw = df2 > 0 ? anovaSSW / df2 : 0;
    const fStat = msw > 0 ? msb / msw : 0;
    const isSignificant = fStat > 3.89;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
            <h3 className="text-xs font-bold text-slate-900 border-b pb-1 uppercase tracking-wider">
              The Formula & Inputs
            </h3>
            <div className="p-2.5 bg-orange-50 border border-orange-200 text-orange-950 font-mono text-xs font-bold text-center rounded-xl">
              F = MSB / MSW &nbsp;&nbsp;|&nbsp;&nbsp; MSB = SSB / (k-1), MSW = SSW / (N-k)
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700">Groups (k):</label>
                <input type="number" value={anovaK} onChange={e => setAnovaK(parseInt(e.target.value)||1)} className="w-full border rounded px-1.5 py-0.5 font-mono"/>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700">Sample (N):</label>
                <input type="number" value={anovaN} onChange={e => setAnovaN(parseInt(e.target.value)||1)} className="w-full border rounded px-1.5 py-0.5 font-mono"/>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700">SSB:</label>
                <input type="number" value={anovaSSB} onChange={e => setAnovaSSB(parseFloat(e.target.value)||0)} className="w-full border rounded px-1.5 py-0.5 font-mono"/>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700">SSW:</label>
                <input type="number" value={anovaSSW} onChange={e => setAnovaSSW(parseFloat(e.target.value)||0)} className="w-full border rounded px-1.5 py-0.5 font-mono"/>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs flex flex-col justify-between shadow-md">
            <div className="space-y-1 text-slate-300">
              <p className="text-orange-400 font-bold uppercase text-[11px] mb-1">Worked Example — Store Region Sales</p>
              <p>k = {anovaK} regions, N = {anovaN}, alpha = 0.05</p>
              <p>MSB = {anovaSSB} / {df1} = {msb.toFixed(1)}</p>
              <p>MSW = {anovaSSW} / {df2} = {msw.toFixed(1)}</p>
              <p className="text-yellow-400 font-bold text-sm">F = MSB / MSW = {fStat.toFixed(1)}</p>
            </div>

            <div className={`p-3 rounded-xl border mt-2 ${
              isSignificant ? 'bg-emerald-950/80 border-emerald-800 text-emerald-300' : 'bg-red-950/80 border-red-800 text-red-300'
            }`}>
              <div className="font-bold text-xs">
                {isSignificant ? `F = ${fStat.toFixed(1)} > F_critical (3.89) => Reject H0` : `F = ${fStat.toFixed(1)} <= 3.89 => Fail to Reject H0`}
              </div>
              <div className="text-[11px] text-slate-300 mt-0.5 font-sans">
                At least one region's average sales differs significantly (p &lt; 0.05).
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 14: SERIES VS DATAFRAME
  // =========================================================
  if (slide.id === 14) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs uppercase mb-3">
                pandas.Series
              </div>
              <p className="text-xs font-semibold text-slate-800 mb-2">A single labeled, one-dimensional array of data.</p>
              <div className="p-2.5 bg-slate-50 font-mono text-[11px] text-slate-800 rounded-xl space-y-1 mb-3">
                <p>One column of a spreadsheet</p>
                <p>A labeled Python list (has an index)</p>
                <p className="text-blue-600 font-bold">s = pd.Series([10, 20, 30])</p>
              </div>
              <p className="text-[11px] text-slate-600">
                Goal: Hold one variable's values. Every column of a DataFrame is actually a Series under the hood.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-orange-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-bold text-xs uppercase mb-3">
                pandas.DataFrame
              </div>
              <p className="text-xs font-semibold text-slate-800 mb-2">A labeled, two-dimensional table of data.</p>
              <div className="p-2.5 bg-slate-50 font-mono text-[11px] text-slate-800 rounded-xl space-y-1 mb-3">
                <p>A full spreadsheet or SQL table</p>
                <p>A dict of Series sharing one index</p>
                <p className="text-orange-600 font-bold">df = pd.DataFrame(&#123;'a':[1,2], 'b':[3,4]&#125;)</p>
              </div>
              <p className="text-[11px] text-slate-600">
                Goal: Hold many variables together. df['col'] returns a Series; df[['col']] returns a one-column DataFrame.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 20: THE FOUR CORE READERS (TABLE)
  // =========================================================
  if (slide.id === 20) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950 font-medium">
          One consistent pattern: pd.read_X() always returns a DataFrame from any data source!
        </div>

        <div className="overflow-x-auto rounded-xl bg-white border border-slate-200 shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-mono text-[11px]">
              <tr>
                <th className="p-3">Format</th>
                <th className="p-3">Function</th>
                <th className="p-3">Key Parameters</th>
                <th className="p-3">Example</th>
                <th className="p-3">Common Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800 font-mono text-[11px]">
              <tr>
                <td className="p-3 font-bold text-emerald-600">CSV</td>
                <td className="p-3">pd.read_csv()</td>
                <td className="p-3">sep, header, dtype, usecols</td>
                <td className="p-3 font-bold">pd.read_csv('data.csv')</td>
                <td className="p-3 font-sans text-slate-600">App exports, logs, spreadsheets</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-purple-600">Excel</td>
                <td className="p-3">pd.read_excel()</td>
                <td className="p-3">sheet_name, engine='openpyxl'</td>
                <td className="p-3 font-bold">pd.read_excel('data.xlsx', sheet_name='Q3')</td>
                <td className="p-3 font-sans text-slate-600">Business reports, finance workbooks</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-blue-600">JSON</td>
                <td className="p-3">pd.read_json()</td>
                <td className="p-3">orient, lines=True (JSONL)</td>
                <td className="p-3 font-bold">pd.read_json('data.json')</td>
                <td className="p-3 font-sans text-slate-600">API responses, semi-structured data</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-orange-600">SQL</td>
                <td className="p-3">pd.read_sql()</td>
                <td className="p-3">sql (query), con (connection)</td>
                <td className="p-3 font-bold">pd.read_sql('SELECT * FROM orders', con)</td>
                <td className="p-3 font-sans text-slate-600">Production database queries</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-xs text-slate-700 font-medium">
          <p className="text-emerald-700"><strong>Key insight:</strong> Every reader accepts a <code>chunksize</code> parameter for reading huge files in batches.</p>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04, 10, 15, 16, 21: APPLIED EXAMPLES & CASE STUDIES
  // =========================================================
  if (slide.type === 'applied-example') {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 text-start">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2 border-b pb-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <h3 className="text-base font-bold text-slate-900">{slide.mainTitle}</h3>
          </div>

          <p className="text-xs text-slate-700 font-medium leading-relaxed bg-orange-50/60 p-3 rounded-xl border border-orange-100">
            {slide.subtitle}
          </p>

          <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs space-y-2">
            {slide.id === 4 && (
              <>
                <p>Survey n = 100, x-bar = 7.8, s = 1.5, 95% Confidence (z* = 1.96)</p>
                <p>SE = 1.5 / sqrt(100) = 0.15 | Margin of Error = 1.96 x 0.15 = 0.294</p>
                <p className="text-emerald-400 font-bold">95% CI = 7.8 +/- 0.294 = (7.51, 8.09) customer satisfaction score</p>
              </>
            )}

            {slide.id === 10 && (
              <>
                <p>H0: mu_Email = mu_Social = mu_Search (n=6 each, N=18)</p>
                <p>MSB = SSB / (3 - 1) = 2,500 / 2 = 1,250 | MSW = 4,687.5 / 15 = 312.5</p>
                <p>F = 1,250 / 312.5 = 4.00 (df1=2, df2=15)</p>
                <p className="text-emerald-400 font-bold">F = 4.00 &gt; F_critical (3.68) -&gt; Reject H0! Run Tukey HSD post-hoc test.</p>
              </>
            )}

            {slide.id === 15 && (
              <>
                <p>df = pd.DataFrame(&#123;'product':['A','B','C'], 'region':['North','South','North'], 'revenue':[500,300,700]&#125;)</p>
                <p>Filter by Label: north = df.loc[df['region'] == 'North']</p>
                <p className="text-emerald-400 font-bold">north['revenue'] returns Series values: product A: 500, product C: 700</p>
              </>
            )}

            {slide.id === 16 && (
              <>
                <p>1. Inspect: df.head() &amp; df.info()</p>
                <p>2. Clean: df = df.dropna(subset=['revenue'])</p>
                <p>3. Group &amp; Aggregate: grouped = df.groupby(['region','product'])['revenue'].sum().reset_index()</p>
                <p>4. Top Product: top = grouped.loc[grouped.groupby('region')['revenue'].idxmax()]</p>
                <p className="text-emerald-400 font-bold">Business Answer: Focus regional promotions on each region's top revenue performer!</p>
              </>
            )}

            {slide.id === 21 && (
              <>
                <p>Problem: sales_export.csv uses semicolons, has 2-row header, and text dates.</p>
                <p>Fix Import: df = pd.read_csv('sales_export.csv', sep=';', skiprows=1)</p>
                <p>Parse Dates: df['date'] = pd.to_datetime(df['date'])</p>
                <p className="text-emerald-400 font-bold">Result: Clean DataFrame with datetime64[ns] ready for analysis!</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 11 & 17 & 22: SIX CARDS GRIDS
  // =========================================================
  if (slide.type === 'six-cards' && slide.cards) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {slide.cards.map((c: any, idx: number) => {
            const Icon = iconLookup[c.iconName] || Target;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{c.title}</h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed whitespace-pre-line">{c.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 06 & 12 & 18 & 23: EXERCISES
  // =========================================================
  if (slide.type === 'exercise' && slide.questions) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {slide.questions.map((q: any) => {
            const isOpen = openAnswers[q.id];
            return (
              <div key={q.id} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between gap-2.5">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{q.question}</h4>
                  <p className="text-[11px] text-slate-500 italic mt-1">Hint: {q.hint}</p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button 
                    onClick={() => toggleAnswer(q.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 font-mono text-[11px] font-bold transition-colors cursor-pointer"
                  >
                    <span>{isOpen ? 'Hide Solution' : 'Reveal Solution'}</span>
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 p-2.5 rounded-xl bg-slate-900 text-emerald-300 font-mono text-[11px] leading-relaxed whitespace-pre-line"
                      >
                        {q.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 24: OUTRO HERO
  // =========================================================
  if (slide.id === 24 || slide.type === 'outro-hero') {
    return (
      <ThankYouVisual 
        sessionNumber="16"
        nextSessionNote="🎉 Session 16 Complete! You have mastered Confidence Intervals, ANOVA F-tests, Pandas DataFrames & Reading Data!"
        nextSessionButtonText="Open Session 17: Matplotlib & Seaborn Visualizations"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={onSwitchSession ? () => onSwitchSession('session-01') : undefined}
      />
    );
  }

  // Fallback for generic concept slides
  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1 text-start">
      <div className="p-6 bg-white rounded-2xl border border-slate-200 text-slate-800 shadow-sm">
        <h3 className="text-base font-bold text-slate-900">{slide.mainTitle}</h3>
        <p className="text-xs text-slate-600 leading-relaxed mt-2">{slide.subtitle}</p>
      </div>
    </div>
  );
};
