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
  Play,
  RotateCcw,
  ArrowRight,
  Shield,
  Info
} from 'lucide-react';

interface Session15SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session15SlideRenderer: React.FC<Session15SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // ---------------------------------------------------------
  // INTERACTIVE STATES FOR WIDGETS & CALCULATORS
  // ---------------------------------------------------------
  const [openAnswers, setOpenAnswers] = useState<{ [key: string]: boolean }>({});

  // Slide 17: Bayes Medical Simulator
  const [prevPct, setPrevPct] = useState<number>(1.0);
  const [sensPct, setSensPct] = useState<number>(99.0);
  const [specPct, setSpecPct] = useState<number>(99.0);

  // Slide 21: CLT Live Visualizer
  const [cltPopShape, setCltPopShape] = useState<'skewed' | 'uniform' | 'bimodal'>('skewed');
  const [cltNSize, setCltNSize] = useState<number>(36);

  // Slide 26: CI Calculator
  const [ciConf, setCiConf] = useState<'90' | '95' | '99'>('95');
  const [ciMean, setCiMean] = useState<number>(7.8);
  const [ciStd, setCiStd] = useState<number>(1.5);
  const [ciN, setCiN] = useState<number>(100);

  // Slide 35: Hypothesis Test Simulator
  const [h0Mu, setH0Mu] = useState<number>(120);
  const [testMean, setTestMean] = useState<number>(128);
  const [testN, setTestN] = useState<number>(36);
  const [testSigma, setTestSigma] = useState<number>(24);

  // Slide 41: A/B Test Calculator
  const [abNa, setAbNa] = useState<number>(5000);
  const [abXa, setAbXa] = useState<number>(400);
  const [abNb, setAbNb] = useState<number>(5000);
  const [abXb, setAbXb] = useState<number>(460);

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
    Award
  };

  // =========================================================
  // SECTION DIVIDER SLIDES
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
        sessionNumber="15"
        titlePrefix="INFERENTIAL STATISTICS"
        titleHighlight="& PROBABILITY THEORY"
        subtitle="Population → Sample → Inference → Decision · Probability · Bayes' Theorem · CLT · Confidence Intervals · Hypothesis Testing · A/B Testing"
        floatingBadges={[
          { icon: Activity, label: "Population vs Sample", position: "top-left", borderColor: "border-blue-500/50", textColor: "text-blue-400" },
          { icon: Target, label: "Bayes' Theorem & ML", position: "top-right", borderColor: "border-amber-500/50", textColor: "text-amber-400" },
          { icon: BarChart2, label: "CLT & Confidence Intervals", position: "bottom-left", borderColor: "border-purple-500/50", textColor: "text-purple-400" },
          { icon: CheckCircle2, label: "Hypothesis & A/B Testing", position: "bottom-right", borderColor: "border-emerald-500/50", textColor: "text-emerald-400" }
        ]}
        statsCards={[
          { val: "7 Parts", label: "Inferential Mastery", sub: "Probability to A/B Testing" },
          { val: "48 Slides", label: "Interactive Presentation", sub: "Worked Examples & Exercises" },
          { val: "A/B Testing", label: "Production Experiments", sub: "Sample Size, Power & Pitfalls" }
        ]}
      />
    );
  }

  // =========================================================
  // SLIDE 03: TWO BRANCHES OF STATISTICS
  // =========================================================
  if (slide.id === 3) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-sm flex flex-col justify-between text-start">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs uppercase mb-3">
                Descriptive Statistics
              </div>
              <p className="text-xs font-semibold text-slate-800 mb-2">Summarises and describes data you already have.</p>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside mb-4">
                <li>You describe what IS in your sample</li>
                <li>Mean, Median, Mode</li>
                <li>Standard Deviation, Variance</li>
                <li>Charts and distributions</li>
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-950 font-medium">
              <strong>Goal:</strong> Understand your current data.<br/>
              <span className="italic text-[11px] text-blue-800">Note from Bruce et al. (Practical Statistics): 'Classical statistics focused almost exclusively on inference — a complex set of procedures for drawing conclusions about large populations based on small samples.'</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-orange-200 shadow-sm flex flex-col justify-between text-start">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-bold text-xs uppercase mb-3">
                Inferential Statistics
              </div>
              <p className="text-xs font-semibold text-slate-800 mb-2">Uses sample data to make conclusions about a larger population.</p>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside mb-4">
                <li>You infer what IS LIKELY true beyond your sample</li>
                <li>Probability Theory & Bayes' Theorem</li>
                <li>Confidence Intervals</li>
                <li>Hypothesis Tests & A/B Testing</li>
              </ul>
            </div>
            <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 text-xs text-orange-950 font-medium">
              <strong>Goal:</strong> Make decisions about the unknown.<br/>
              <span className="text-[11px] text-orange-900">At the heart of statistics lies variability: measuring it, reducing it, distinguishing random from real variability, and making decisions in the presence of it.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04: POPULATION VS SAMPLE — THE CORE CONCEPT
  // =========================================================
  if (slide.id === 4) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Population Box */}
          <div className="p-5 rounded-2xl bg-white border-2 border-blue-400 shadow-sm flex flex-col gap-3 text-start">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="text-base font-black text-blue-600 uppercase">POPULATION ( N )</h3>
              <span className="text-xs font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Target Group</span>
            </div>
            <p className="text-xs text-slate-700 font-medium">The entire group you want to draw conclusions about.</p>
            <div className="p-3 rounded-xl bg-slate-50 font-mono text-xs space-y-1 text-slate-800 border border-slate-200">
              <p className="font-bold text-blue-900 mb-1">Parameters (True values, often unknown):</p>
              <p>μ (mu) = population mean</p>
              <p>σ (sigma) = population std deviation</p>
              <p>p = population proportion</p>
            </div>
            <div className="text-xs text-slate-500 italic">
              Examples: All customers of e-commerce platform, All adults in a country, All transactions ever made.
            </div>
          </div>

          {/* Sample Box */}
          <div className="p-5 rounded-2xl bg-white border-2 border-orange-400 shadow-sm flex flex-col gap-3 text-start">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="text-base font-black text-orange-600 uppercase">SAMPLE ( n )</h3>
              <span className="text-xs font-mono font-bold bg-orange-100 text-orange-800 px-2 py-0.5 rounded">Observed Subset</span>
            </div>
            <p className="text-xs text-slate-700 font-medium">A subset of the population actually observed.</p>
            <div className="p-3 rounded-xl bg-slate-50 font-mono text-xs space-y-1 text-slate-800 border border-slate-200">
              <p className="font-bold text-orange-900 mb-1">Statistics (Estimates from sample):</p>
              <p>x-bar = sample mean</p>
              <p>s = sample std deviation</p>
              <p>p-hat = sample proportion</p>
            </div>
            <div className="text-xs text-slate-500 italic">
              Examples: 1,000 randomly selected customers, 500 adults surveyed, Last month's transactions.
            </div>
          </div>
        </div>

        {/* Sampling & Inference Flow Bar */}
        <div className="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-around text-xs font-mono font-bold">
          <span>POPULATION (N)</span>
          <span className="text-orange-400">--- Sampling &gt;&gt;&gt;</span>
          <span>SAMPLE (n)</span>
          <span className="text-emerald-400">--- Inference &gt;&gt;&gt;</span>
          <span>DECISION / PARAMETER ESTIMATE</span>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDES WITH CARDS GRID (Slide 5, 18, 43)
  // =========================================================
  if (slide.type === 'six-cards' && slide.cards) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {slide.cards.map((c: any, idx: number) => {
            const Icon = iconLookup[c.iconName] || Target;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2 text-start">
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
  // EXERCISE SLIDES (Slide 6, 13, 23, 28, 36, 45)
  // =========================================================
  if (slide.type === 'exercise' && slide.questions) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {slide.questions.map((q: any) => {
            const isOpen = openAnswers[q.id];
            return (
              <div key={q.id} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between gap-2.5 text-start">
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
  // SLIDE 17: INTERACTIVE BAYES MEDICAL TEST CALCULATOR
  // =========================================================
  if (slide.id === 17) {
    const priorP = prevPct / 100;
    const sensP = sensPct / 100;
    const specP = specPct / 100;
    const falsePosP = 1 - specP;

    const pEvidence = (sensP * priorP) + (falsePosP * (1 - priorP));
    const posterior = pEvidence > 0 ? (sensP * priorP) / pEvidence : 0;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {/* Controls & Inputs */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-3">
            <h3 className="text-xs font-bold text-slate-900 border-b pb-1.5 uppercase tracking-wider">
              Interactive Bayes Simulator
            </h3>
            
            <div className="space-y-2 text-xs">
              <div>
                <label className="font-semibold text-slate-700 flex justify-between">
                  <span>Disease Prevalence (Prior P(Sick)):</span>
                  <span className="font-mono font-bold text-blue-600">{prevPct.toFixed(1)}%</span>
                </label>
                <input 
                  type="range" min="0.1" max="10" step="0.1" 
                  value={prevPct} 
                  onChange={(e) => setPrevPct(parseFloat(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 flex justify-between">
                  <span>Test Sensitivity (True Positive Rate):</span>
                  <span className="font-mono font-bold text-emerald-600">{sensPct.toFixed(1)}%</span>
                </label>
                <input 
                  type="range" min="80" max="100" step="0.5" 
                  value={sensPct} 
                  onChange={(e) => setSensPct(parseFloat(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 flex justify-between">
                  <span>Test Specificity (True Negative Rate):</span>
                  <span className="font-mono font-bold text-purple-600">{specPct.toFixed(1)}%</span>
                </label>
                <input 
                  type="range" min="80" max="100" step="0.5" 
                  value={specPct} 
                  onChange={(e) => setSpecPct(parseFloat(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 font-medium leading-relaxed">
              <strong>Key Insight:</strong> When a disease is rare (e.g. 1%), even a 99% accurate test yields a ~50% false alarm rate because healthy people vastly outnumber sick people!
            </div>
          </div>

          {/* Output Card */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-md flex flex-col justify-between font-mono text-xs">
            <div>
              <div className="text-orange-400 font-bold uppercase text-[11px] mb-2 tracking-wider">
                Bayes Calculation Output
              </div>

              <div className="space-y-2 leading-relaxed text-slate-300">
                <p>Prior P(Sick) = {priorP.toFixed(4)}</p>
                <p>Likelihood P(Test+ | Sick) = {sensP.toFixed(4)}</p>
                <p>False Positive P(Test+ | Healthy) = {falsePosP.toFixed(4)}</p>
                <p>Total Evidence P(Test+) = {pEvidence.toFixed(4)}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/80 border border-blue-800/80 mt-3">
              <div className="text-xs text-slate-300 font-bold">Posterior P(Sick | Test+):</div>
              <div className="text-3xl font-black text-emerald-400 my-1">
                {(posterior * 100).toFixed(1)}%
              </div>
              <div className="text-[11px] text-slate-400 font-sans">
                If you test positive, there is a <strong>{(posterior * 100).toFixed(1)}%</strong> actual probability you have the disease!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 21: INTERACTIVE CLT POPULATION SIMULATOR
  // =========================================================
  if (slide.id === 21) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        {/* Shape Switcher Buttons */}
        <div className="flex items-center justify-center gap-2">
          <button 
            onClick={() => setCltPopShape('skewed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              cltPopShape === 'skewed' ? 'bg-orange-500 text-white shadow-md' : 'bg-white border text-slate-700 hover:bg-slate-50'
            }`}
          >
            Right-Skewed (Income / Waits)
          </button>
          <button 
            onClick={() => setCltPopShape('uniform')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              cltPopShape === 'uniform' ? 'bg-emerald-500 text-white shadow-md' : 'bg-white border text-slate-700 hover:bg-slate-50'
            }`}
          >
            Uniform (Rolling Die)
          </button>
          <button 
            onClick={() => setCltPopShape('bimodal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              cltPopShape === 'bimodal' ? 'bg-purple-500 text-white shadow-md' : 'bg-white border text-slate-700 hover:bg-slate-50'
            }`}
          >
            Bimodal (Two Segments)
          </button>
        </div>

        {/* Sample size slider */}
        <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs gap-4">
          <span className="font-semibold text-slate-800">Sample Size per Draw (n):</span>
          <input 
            type="range" min="2" max="100" step="1"
            value={cltNSize}
            onChange={(e) => setCltNSize(parseInt(e.target.value))}
            className="flex-1 accent-blue-600 cursor-pointer"
          />
          <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
            n = {cltNSize} {cltNSize >= 30 ? '(CLT Active!)' : '(Small n)'}
          </span>
        </div>

        {/* Visualizers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase">1. Population Distribution</span>
            <div className="h-28 flex items-end justify-center gap-1.5 pt-4">
              {cltPopShape === 'skewed' && [90, 75, 55, 40, 28, 18, 10, 5].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-7 bg-orange-400 rounded-t" />
              ))}
              {cltPopShape === 'uniform' && [60, 60, 60, 60, 60, 60, 60, 60].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-7 bg-emerald-400 rounded-t" />
              ))}
              {cltPopShape === 'bimodal' && [80, 65, 30, 15, 15, 30, 65, 80].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-7 bg-purple-400 rounded-t" />
              ))}
            </div>
          </div>

          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-white flex flex-col justify-between">
            <span className="text-xs font-bold text-blue-400 font-mono uppercase">2. Sampling Dist of Mean (x-bar)</span>
            <div className="h-28 flex items-end justify-center gap-1.5 pt-4">
              {[10, 25, 50, 75, 95, 75, 50, 25, 10].map((h, i) => {
                const heightPct = cltNSize >= 30 ? h : (h * 0.7);
                return (
                  <div key={i} style={{ height: `${heightPct}%` }} className="w-6 bg-blue-400 rounded-t transition-all duration-300" />
                );
              })}
            </div>
            <p className="text-[11px] text-emerald-400 font-mono text-center mt-2 font-bold">
              {cltNSize >= 30 ? '✅ Approximately Normal Distribution!' : '⚠️ Small n — distribution is still converging'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 41: INTERACTIVE A/B TEST CALCULATOR
  // =========================================================
  if (slide.id === 41) {
    const pA = abNa > 0 ? abXa / abNa : 0;
    const pB = abNb > 0 ? abXb / abNb : 0;
    const pPooled = (abNa + abNb) > 0 ? (abXa + abXb) / (abNa + abNb) : 0;
    const sePooled = Math.sqrt(pPooled * (1 - pPooled) * ((1 / abNa) + (1 / abNb)));
    const zStat = sePooled > 0 ? (pB - pA) / sePooled : 0;
    const isSignificant = zStat > 1.645; // one-tailed at 0.05

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3 p-1 text-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2.5">
            <h3 className="text-xs font-bold text-slate-900 border-b pb-1.5 uppercase tracking-wider">
              Interactive A/B Test Inputs
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-slate-50 rounded-xl border">
                <p className="font-bold text-blue-600 mb-1">Control (A)</p>
                <label className="block text-[11px]">Visitors (nA):</label>
                <input type="number" value={abNa} onChange={e => setAbNa(parseInt(e.target.value)||1)} className="w-full border rounded px-1.5 py-0.5 font-mono mb-1"/>
                <label className="block text-[11px]">Conversions (xA):</label>
                <input type="number" value={abXa} onChange={e => setAbXa(parseInt(e.target.value)||0)} className="w-full border rounded px-1.5 py-0.5 font-mono"/>
              </div>

              <div className="p-2 bg-slate-50 rounded-xl border">
                <p className="font-bold text-orange-600 mb-1">Treatment (B)</p>
                <label className="block text-[11px]">Visitors (nB):</label>
                <input type="number" value={abNb} onChange={e => setAbNb(parseInt(e.target.value)||1)} className="w-full border rounded px-1.5 py-0.5 font-mono mb-1"/>
                <label className="block text-[11px]">Conversions (xB):</label>
                <input type="number" value={abXb} onChange={e => setAbXb(parseInt(e.target.value)||0)} className="w-full border rounded px-1.5 py-0.5 font-mono"/>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs flex flex-col justify-between">
            <div className="space-y-1.5 leading-relaxed text-slate-300">
              <p className="text-orange-400 font-bold uppercase text-[11px] mb-1">Results & Z-Statistic</p>
              <p>pA (Control) = {(pA * 100).toFixed(2)}%</p>
              <p>pB (Treatment) = {(pB * 100).toFixed(2)}%</p>
              <p>Pooled p-hat = {(pPooled * 100).toFixed(2)}%</p>
              <p>Pooled SE = {sePooled.toFixed(5)}</p>
              <p className="text-yellow-400 font-bold">z-statistic = {zStat.toFixed(2)}</p>
            </div>

            <div className={`p-3 rounded-xl border mt-2 ${
              isSignificant ? 'bg-emerald-950/80 border-emerald-800 text-emerald-300' : 'bg-red-950/80 border-red-800 text-red-300'
            }`}>
              <div className="font-bold text-xs">
                {isSignificant ? '🚀 REJECT H0 — Statistically Significant Lift!' : '⚠️ FAIL TO REJECT H0 — Difference Not Significant'}
              </div>
              <div className="text-[11px] text-slate-300 mt-1 font-sans">
                {isSignificant ? 'Roll out the new variation to 100% of users!' : 'Collect more sample data or optimize the variation further.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 48: OUTRO HERO
  // =========================================================
  if (slide.id === 48 || slide.type === 'outro-hero') {
    return (
      <ThankYouVisual 
        sessionNumber="15"
        nextSessionNote="🎉 Session 15 Complete! Next Session: Pandas S1 — Data I/O, DataFrames & Structural Exploration"
        nextSessionButtonText="Open Session 16: Confidence Intervals, ANOVA & Pandas"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={onSwitchSession ? () => onSwitchSession('session-16') : undefined}
      />
    );
  }

  // =========================================================
  // SLIDE 08 & 09 & 10 & 12 & 22 & 26 & 27 & 35 & 37 & 44 & 47
  // =========================================================
  if (slide.id === 0) return null;

  // Default rendering for all other slides
  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
      <div className={`p-6 rounded-2xl border shadow-sm text-start ${
        slide.darkTheme 
          ? 'bg-slate-900/80 border-slate-800 text-slate-100'
          : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <h3 className={`text-base font-bold ${slide.darkTheme ? 'text-white' : 'text-slate-900'}`}>{slide.mainTitle}</h3>
        <p className={`text-xs leading-relaxed mt-2 ${slide.darkTheme ? 'text-slate-300' : 'text-slate-600'}`}>{slide.subtitle}</p>
        {slide.definition && (
          <div className="mt-3 p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-xs text-orange-400 font-medium">
            {slide.definition}
          </div>
        )}
      </div>
    </div>
  );
};
