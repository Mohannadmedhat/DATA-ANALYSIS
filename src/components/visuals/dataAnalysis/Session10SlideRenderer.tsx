import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SlideData } from '../../../types';
import { InstantLogo } from '../../InstantLogo';
import { 
  GitBranch, 
  RotateCw, 
  Sliders, 
  Sparkles, 
  Check, 
  X, 
  Terminal, 
  Play, 
  RotateCcw, 
  AlertTriangle, 
  Lock, 
  User, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Clock,
  Layers,
  CheckSquare
} from 'lucide-react';

interface Session10SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
}

export const Session10SlideRenderer: React.FC<Session10SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide
}) => {
  // Helper for icon resolution
  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case 'GitBranch': return GitBranch;
      case 'RotateCw': return RotateCw;
      case 'Sliders': return Sliders;
      case 'Terminal': return Terminal;
      default: return Sparkles;
    }
  };

  // ---------------------------------------------------------
  // INTERACTIVE STATES FOR WIDGETS
  // ---------------------------------------------------------
  const [trafficColor, setTrafficColor] = useState<'green' | 'yellow' | 'red'>('green');
  const [votingAge, setVotingAge] = useState(18);
  const [examScore, setExamScore] = useState(85);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState<'admin' | 'user' | 'guest'>('admin');
  const [forLoopStep, setForLoopStep] = useState(1);
  const [countdown, setCountdown] = useState(5);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [controlMode, setControlMode] = useState<'break' | 'continue' | 'pass'>('break');
  const [nestedI, setNestedI] = useState(0);
  const [nestedJ, setNestedJ] = useState(0);

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE (Dark Theme - PDF Page 1)
  // =========================================================
  if (slide.id === 1) {
    const stats = [
      { val: '3 Modules', label: 'Core Topics', sub: 'Conditionals • Loops • Control' },
      { val: '14 Slides', label: 'Curriculum Depth', sub: 'Python 3.12 Control Flow' },
      { val: 'Hands-on', label: 'Interactive Labs', sub: 'Code Execution Engine' }
    ];

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 text-center bg-transparent text-white overflow-hidden select-none">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Floating Feature Badges */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-[6%] sm:left-[12%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-blue-500/50 text-blue-400 text-xs backdrop-blur-md shadow-xl"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>if / elif / else Logic</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 right-[6%] sm:right-[12%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-amber-500/50 text-amber-400 text-xs backdrop-blur-md shadow-xl"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>for & while Loops</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-4 left-[4%] sm:left-[10%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-purple-500/50 text-purple-400 text-xs backdrop-blur-md shadow-xl"
          >
            <Sliders className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-semibold text-purple-400">break · continue · pass</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-4 right-[4%] sm:right-[10%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/50 text-emerald-400 text-xs backdrop-blur-md shadow-xl"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-emerald-400">Nested Control Flow</span>
          </motion.div>
        </div>

        {/* Center Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl sm:max-w-3xl flex flex-col items-center my-auto"
        >
          {/* Logo Header */}
          <div className="mb-4 sm:mb-6">
            <InstantLogo isDark={true} className="h-6 sm:h-8" />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-3">
            Python Control Flow
          </h1>

          {/* Rainbow underline divider */}
          <div className="w-36 sm:w-48 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full mb-4 shadow-lg shadow-purple-500/30" />

          {/* Subtitle */}
          <p className="text-sm sm:text-xl text-slate-300 font-medium max-w-xl mb-5 leading-relaxed">
            Conditional Statements, Loops & Loop Control
          </p>

          {/* Orange Session Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-orange-500/50 text-orange-400 text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>SESSION 2</span>
          </div>

          {/* Bottom Stats Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <div className="text-sm sm:text-base font-black text-amber-400">{stat.val}</div>
                <div className="text-[11px] sm:text-xs font-bold text-white">{stat.label}</div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Branding */}
        <div className="relative z-10 text-[11px] font-mono tracking-widest uppercase text-slate-500 pt-2">
          INSTANT
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 02: TABLE OF CONTENTS (Light Theme - PDF Page 2)
  // =========================================================
  if (slide.id === 2) {
    const cards = slide.cards || [];
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center p-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
          {cards.map((card, idx) => {
            const IconComp = getIconComponent(card.iconName);
            const cardNumbers = ['01', '02', '03'];
            const numColors = ['text-blue-600', 'text-amber-600', 'text-purple-600'];
            const borderAccents = ['hover:border-blue-400', 'hover:border-amber-400', 'hover:border-purple-400'];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className={`group relative p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[220px] ${borderAccents[idx]}`}
              >
                <div>
                  <div className={`text-4xl font-black ${numColors[idx]} mb-3 font-mono`}>
                    {cardNumbers[idx]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {card.title.replace(/^[0-9]+\.\s*/, '')}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-3 border-t border-slate-100 text-slate-400 group-hover:text-slate-600 transition-colors">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Module {idx + 1}</span>
                  <IconComp className="w-5 h-5 text-slate-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 03 & 08: SECTION DIVIDERS (Matching Image 2 100%)
  // =========================================================
  if (slide.type === 'section-divider' || slide.id === 3 || slide.id === 8) {
    const isChapterTwo = slide.id === 8;
    const IconComp = isChapterTwo ? RotateCw : GitBranch;

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 select-none overflow-hidden bg-transparent text-white">
        {/* Ambient glowing radial light */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-96 h-96 rounded-full blur-3xl bg-blue-600/30 pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl flex flex-col items-center my-auto text-center"
        >
          {/* Orange glowing gradient icon box matching Image 2 */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/30 mb-4 ring-4 ring-orange-500/20">
            <IconComp className="w-8 h-8 text-white" />
          </div>

          {/* Translucent Part Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-mono font-bold mb-3 shadow-md backdrop-blur-sm">
            {slide.partNumber || (isChapterTwo ? 'PART 2' : 'PART 1')}
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-3">
            {slide.sectionTitle || slide.mainTitle}
          </h2>

          {/* Orange Underline Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-xl text-center leading-relaxed">
            {slide.subtitle}
          </p>
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04: WHY DO WE NEED CONDITIONALS? (Light Theme - PDF Page 4)
  // =========================================================
  if (slide.id === 4) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        {/* Main Grid: Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Without Conditionals */}
          <div className="p-4 sm:p-5 rounded-2xl bg-red-50/80 border border-red-200/90 shadow-sm text-slate-800">
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-2">
              <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center">
                <X className="w-4 h-4" />
              </div>
              <span className="text-base">Without Conditionals</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 mb-3">
              Code runs in a straight line — top to bottom. It cannot respond to different situations.
            </p>
            <div className="text-xs font-mono text-red-700 bg-red-100/80 p-2.5 rounded-lg border border-red-200">
              Every user sees the same result, no matter what.
            </div>
          </div>

          {/* With Conditionals */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 shadow-sm text-slate-800">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-base">With Conditionals</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 mb-3">
              Code becomes <strong className="text-emerald-800 font-bold">intelligent</strong> — it adapts to data and user input.
            </p>
            <div className="text-xs font-mono text-emerald-800 bg-emerald-100/80 p-2.5 rounded-lg border border-emerald-200">
              Different situations produce different results. Your program can make decisions!
            </div>
          </div>
        </div>

        {/* Core Idea & Interactive Traffic Light */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-200/90 shadow-sm text-slate-800">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
            The Core Idea & Interactive Light Simulator
          </div>
          <div className="text-sm text-slate-800 font-semibold mb-3">
            "If something is true, do this; otherwise, do that"
          </div>

          {/* Traffic Light Interactive Widget */}
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTrafficColor('green')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  trafficColor === 'green' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Green
              </button>
              <button
                onClick={() => setTrafficColor('yellow')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  trafficColor === 'yellow' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Yellow
              </button>
              <button
                onClick={() => setTrafficColor('red')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  trafficColor === 'red' ? 'bg-red-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Red
              </button>
            </div>

            <div className="font-mono text-xs text-slate-800 bg-slate-900 text-white px-3 py-2 rounded-lg border border-slate-800 flex-1 w-full sm:w-auto">
              {trafficColor === 'green' && <span className="text-emerald-400">if green → <strong>GO</strong></span>}
              {trafficColor === 'yellow' && <span className="text-amber-400">elif yellow → <strong>SLOW DOWN</strong></span>}
              {trafficColor === 'red' && <span className="text-red-400">else (red) → <strong>STOP</strong></span>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: THE IF STATEMENT (Light Theme - PDF Page 5)
  // =========================================================
  if (slide.id === 5) {
    const isEligible = votingAge >= 18;

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Syntax & Rules */}
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Syntax</div>
              <pre className="font-mono text-xs text-slate-100 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-amber-400 font-bold">if</span> condition:<br />
                <span className="text-slate-400">    # indented code block</span>
              </pre>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs space-y-1.5">
              <div className="font-bold text-blue-700 text-sm">How It Works</div>
              <div className="text-slate-700">1. Python evaluates the <strong className="text-slate-900">condition</strong></div>
              <div className="text-slate-700">2. If <span className="text-emerald-700 font-bold">True</span> → executes the code block</div>
              <div className="text-slate-700">3. If <span className="text-red-600 font-bold">False</span> → skips the code block</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/90 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>The colon (:) and indentation (4 spaces) are mandatory!</strong>
                <p className="text-xs text-amber-800 mt-0.5">Indentation is Python's way of grouping code. It's not optional — it's the rule!</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Voting Example */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Example: Voting Eligibility</div>
                <span className="text-xs font-mono text-slate-400">Interactive Test</span>
              </div>

              {/* Slider for Age */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 mb-3">
                <div className="flex justify-between text-xs font-mono text-slate-700 mb-1.5">
                  <span>age = <strong>{votingAge}</strong></span>
                  <span className={isEligible ? 'text-emerald-700 font-bold' : 'text-slate-500'}>
                    age &gt;= 18: {isEligible ? 'True' : 'False'}
                  </span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="30"
                  value={votingAge}
                  onChange={(e) => setVotingAge(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Code Preview */}
              <pre className="font-mono text-xs text-slate-100 bg-slate-900 p-3 rounded-xl border border-slate-800 mb-3">
                <span className="text-cyan-400">age</span> = <span className="text-amber-400">{votingAge}</span><br />
                <span className="text-amber-400 font-bold">if</span> age &gt;= <span className="text-amber-400">18</span>:<br />
                <span className="text-slate-300">    print(</span><span className="text-emerald-300">"You can vote!"</span><span className="text-slate-300">)</span>
              </pre>

              {/* Output Box */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
                <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Terminal Output:</div>
                {isEligible ? (
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    "You can vote!"
                  </div>
                ) : (
                  <div className="text-slate-500 italic">
                    (Condition evaluated to False — block skipped)
                  </div>
                )}
              </div>
            </div>

            <div className="text-xs text-slate-600 mt-3 pt-2.5 border-t border-slate-100">
              <strong>What's Happening?</strong> We set <code className="text-amber-700 font-bold">age = {votingAge}</code>, then check <code className="text-amber-700 font-bold">if age &gt;= 18</code>. Since {votingAge} is {isEligible ? 'equal/greater than' : 'less than'} 18, condition is {isEligible ? 'True, so Python prints message.' : 'False, so Python skips block.'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 06: ELSE & ELIF (Light Theme - PDF Page 6)
  // =========================================================
  if (slide.id === 6) {
    const getGrade = (score: number) => {
      if (score >= 90) return { grade: 'A', branch: 'if' };
      if (score >= 80) return { grade: 'B', branch: 'elif 80' };
      if (score >= 70) return { grade: 'C', branch: 'elif 70' };
      return { grade: 'F', branch: 'else' };
    };

    const currentGrade = getGrade(examScore);

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3.5 p-1">
        {/* Top Flow Bar */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-sm text-xs font-mono overflow-x-auto">
          <div className="px-3 py-1 rounded-lg bg-blue-100 text-blue-800 font-bold shrink-0">
            if (condition 1)
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
          <div className="px-3 py-1 rounded-lg bg-amber-100 text-amber-800 font-bold shrink-0">
            elif (condition 2)
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
          <div className="px-3 py-1 rounded-lg bg-purple-100 text-purple-800 font-bold shrink-0">
            else
          </div>
          <span className="text-slate-500 text-xs ml-auto shrink-0 hidden sm:inline">Only one block executes — top to bottom</span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* else Card */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
            <div className="font-bold text-purple-700 text-sm mb-1">else</div>
            <p className="text-slate-600 text-xs mb-3">
              Catches everything the <code className="text-blue-600 font-bold">if</code> didn't handle. Think: "otherwise, do this."
            </p>
            <pre className="font-mono text-xs text-slate-100 bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-amber-400 font-bold">if</span> age &gt;= <span className="text-amber-400">18</span>:<br />
              <span className="text-slate-300">    print(</span><span className="text-emerald-300">"Adult"</span><span className="text-slate-300">)</span><br />
              <span className="text-purple-400 font-bold">else</span>:<br />
              <span className="text-slate-300">    print(</span><span className="text-red-300">"Minor"</span><span className="text-slate-300">)</span>
            </pre>
          </div>

          {/* elif Card + Interactive Calculator */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-md text-xs flex flex-col justify-between">
            <div>
              <div className="font-bold text-amber-700 text-sm mb-1">elif (else if) & Live Grade Simulator</div>
              <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-2">
                <span className="font-mono text-xs text-slate-800">score = <strong>{examScore}</strong></span>
                <span className="font-mono font-bold text-emerald-700 text-xs">grade = "{currentGrade.grade}"</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={examScore}
                onChange={(e) => setExamScore(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer mb-2"
              />

              <pre className="font-mono text-xs bg-slate-900 text-slate-300 p-3 rounded-xl border border-slate-800 space-y-1">
                <div className={currentGrade.branch === 'if' ? 'text-emerald-400 font-bold bg-emerald-950/60 p-1 rounded' : 'text-slate-400'}>
                  if score &gt;= 90: grade = "A"
                </div>
                <div className={currentGrade.branch === 'elif 80' ? 'text-emerald-400 font-bold bg-emerald-950/60 p-1 rounded' : 'text-slate-400'}>
                  elif score &gt;= 80: grade = "B"
                </div>
                <div className={currentGrade.branch === 'elif 70' ? 'text-emerald-400 font-bold bg-emerald-950/60 p-1 rounded' : 'text-slate-400'}>
                  elif score &gt;= 70: grade = "C"
                </div>
                <div className={currentGrade.branch === 'else' ? 'text-emerald-400 font-bold bg-emerald-950/60 p-1 rounded' : 'text-slate-400'}>
                  else: grade = "F"
                </div>
              </pre>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200/90 text-xs text-slate-700">
          <strong className="text-blue-800 font-bold">Why It Matters & Rule of Thumb:</strong> Real-world scenarios have multiple outcomes. Start with <code className="text-amber-700 font-bold">if</code>, add <code className="text-amber-700 font-bold">elif</code> for extra conditions, and finish with <code className="text-purple-700 font-bold">else</code> as the catch-all.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 07: NESTED CONDITIONALS & COMMON ERRORS (Light Theme - PDF Page 7)
  // =========================================================
  if (slide.id === 7) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: Nested If & Interactive Auth Simulator */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs space-y-2.5">
            <div className="font-bold text-blue-700 text-sm">Nested if Statements</div>
            <p className="text-xs text-slate-600">An <code className="text-amber-700 font-bold">if</code> inside another <code className="text-amber-700 font-bold">if</code> — for multi-level decisions.</p>

            {/* Controls */}
            <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isLoggedIn}
                  onChange={(e) => setIsLoggedIn(e.target.checked)}
                  className="accent-amber-500"
                />
                <span className="font-mono text-xs text-slate-800">logged_in = {isLoggedIn ? 'True' : 'False'}</span>
              </label>

              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value as any)}
                className="bg-white text-slate-800 border border-slate-300 rounded px-2 py-1 text-xs font-mono ml-auto"
              >
                <option value="admin">role = "admin"</option>
                <option value="user">role = "user"</option>
              </select>
            </div>

            {/* Code */}
            <pre className="font-mono text-xs text-slate-100 bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-amber-400 font-bold">if</span> logged_in:<br />
              <span className="text-amber-400 font-bold">    if</span> role == <span className="text-emerald-300">"admin"</span>:<br />
              <span className="text-slate-300">        print(</span><span className="text-emerald-300">"Admin panel"</span><span className="text-slate-300">)</span><br />
              <span className="text-purple-400 font-bold">    else</span>:<br />
              <span className="text-slate-300">        print(</span><span className="text-emerald-300">"User panel"</span><span className="text-slate-300">)</span>
            </pre>

            <div className="p-2.5 rounded-xl bg-slate-900 text-white font-mono text-xs">
              <span className="text-slate-400 uppercase font-bold text-[10px] block">Result:</span>
              {isLoggedIn ? (
                userRole === 'admin' ? (
                  <span className="text-emerald-400 font-bold">▶ Output: "Admin panel"</span>
                ) : (
                  <span className="text-cyan-400 font-bold">▶ Output: "User panel"</span>
                )
              ) : (
                <span className="text-slate-500 italic">▶ Outer condition False — block skipped</span>
              )}
            </div>
          </div>

          {/* Right: Common Errors */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold text-red-600 uppercase tracking-wider">Common Errors</div>
            
            <div className="p-3 rounded-xl bg-red-50 border border-red-200/90 text-xs text-red-900 flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
              <span>Forgetting the colon (<strong className="font-mono font-bold">:</strong>) after if/elif/else</span>
            </div>

            <div className="p-3 rounded-xl bg-red-50 border border-red-200/90 text-xs text-red-900 flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
              <span>Wrong indentation — mixing spaces and tabs</span>
            </div>

            <div className="p-3 rounded-xl bg-red-50 border border-red-200/90 text-xs text-red-900 flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
              <span>Using <code className="font-mono font-bold text-slate-900">=</code> (assignment) instead of <code className="font-mono font-bold text-slate-900">==</code> (comparison)</span>
            </div>

            {/* Best Practices */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/90 text-xs text-emerald-950 space-y-1">
              <div className="font-bold text-emerald-800 text-xs uppercase tracking-wider mb-1">Best Practices</div>
              <div>1. Keep nesting shallow — max 2-3 levels deep.</div>
              <div>2. Use <code className="text-amber-800 font-bold">elif</code> instead of deep nesting when possible.</div>
              <div>3. Read error messages carefully to locate syntax bugs.</div>
              <div>4. Test with edge cases to ensure logical correctness.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 09: FOR LOOP (Light Theme - PDF Page 9)
  // =========================================================
  if (slide.id === 9) {
    const stringLetters = ['P', 'y', 't', 'h', 'o', 'n'];

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Syntax & range() */}
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
              <div className="font-bold text-amber-700 text-sm mb-1.5">Syntax & How It Works</div>
              <pre className="font-mono text-xs text-slate-100 bg-slate-900 p-3 rounded-xl border border-slate-800 mb-2">
                <span className="text-amber-400 font-bold">for</span> variable <span className="text-amber-400 font-bold">in</span> sequence:<br />
                <span className="text-slate-400">    # code to repeat</span>
              </pre>
              <div className="text-slate-700 text-xs space-y-0.5">
                <div>1. The sequence provides items one by one</div>
                <div>2. Each item is assigned to variable</div>
                <div>3. Perfect when you know what you're iterating over</div>
              </div>
            </div>

            {/* range() function */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
              <div className="font-bold text-cyan-700 text-sm mb-1.5">The range() Function</div>
              <div className="font-mono text-xs bg-slate-900 text-slate-100 p-3 rounded-xl border border-slate-800 space-y-1">
                <div><span className="text-amber-400">range(5)</span> <span className="text-slate-400"># 0, 1, 2, 3, 4</span></div>
                <div><span className="text-amber-400">range(1, 6)</span> <span className="text-slate-400"># 1, 2, 3, 4, 5</span></div>
                <div><span className="text-amber-400">range(0, 10, 2)</span> <span className="text-slate-400"># 0, 2, 4, 6, 8</span></div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Examples + Step Animator */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-emerald-700 text-sm">Interactive for Loop Animator</div>
                <button
                  onClick={() => setForLoopStep((prev) => (prev % 5) + 1)}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold font-mono text-xs hover:bg-amber-400 flex items-center gap-1 shadow-sm"
                >
                  <Play className="w-3.5 h-3.5" /> Step ({forLoopStep}/5)
                </button>
              </div>

              {/* Live Count to 5 Example */}
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 mb-3 font-mono">
                <div className="text-slate-300 text-xs">
                  <span className="text-amber-400 font-bold">for</span> i <span className="text-amber-400 font-bold">in</span> range(1, 6):<br />
                  <span className="text-slate-200">    print(i)</span>
                </div>
              </div>

              {/* Stepping Visualization */}
              <div className="flex items-center gap-2.5 my-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-base transition-all ${
                      num === forLoopStep
                        ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-500/30 scale-110 shadow-md'
                        : num < forLoopStep
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-slate-100 text-slate-400 border border-slate-200'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>

              {/* String Example */}
              <div className="p-3 rounded-xl bg-slate-900 text-white font-mono text-xs border border-slate-800">
                <span className="text-slate-400">word = "Python" → </span>
                <span className="text-amber-300 font-bold">Current letter: '{stringLetters[forLoopStep - 1] || 'P'}'</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 10: WHILE LOOP (Light Theme - PDF Page 10)
  // =========================================================
  if (slide.id === 10) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Syntax & Danger Box */}
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
              <div className="font-bold text-amber-700 text-sm mb-1.5">Syntax & How It Works</div>
              <pre className="font-mono text-xs text-slate-100 bg-slate-900 p-3 rounded-xl border border-slate-800 mb-2">
                <span className="text-amber-400 font-bold">while</span> condition:<br />
                <span className="text-slate-400">    # code to repeat</span>
              </pre>
              <div className="text-slate-700 text-xs space-y-0.5">
                <div>1. Python checks condition</div>
                <div>2. If True → runs code block & checks again</div>
                <div>3. If False → exits the loop</div>
              </div>
            </div>

            {/* Danger Infinite Loop Box */}
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200/90 text-xs text-red-950 flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-red-700 font-bold">Danger: Infinite Loop!</strong>
                <p className="text-xs text-red-800 mt-0.5">If condition never becomes False, code repeats forever. Always ensure condition can change!</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200/90 text-xs text-blue-900 font-mono">
              <strong>for vs while:</strong> Use <code className="text-amber-800 font-bold">for</code> when count is known. Use <code className="text-amber-800 font-bold">while</code> when count is unknown.
            </div>
          </div>

          {/* Right Column: Countdown & Password Validation Demo */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md text-xs space-y-4">
            {/* Interactive Countdown */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-emerald-700 text-sm">Countdown Timer Demo</span>
                <button
                  onClick={() => setCountdown((prev) => (prev > 0 ? prev - 1 : 5))}
                  className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold font-mono text-xs hover:bg-amber-400 shadow-sm"
                >
                  {countdown > 0 ? `Step (count = ${countdown})` : 'Reset to 5'}
                </button>
              </div>
              <pre className="font-mono text-xs bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-200">
                count = {countdown}<br />
                <span className="text-amber-400 font-bold">while</span> count &gt; 0:<br />
                <span className="text-slate-300">    print(count); count -= 1</span>
              </pre>
            </div>

            {/* Interactive Password Validation */}
            <div>
              <div className="font-bold text-cyan-700 text-sm mb-1.5">User Input Validation Demo</div>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder='Type "secret" to unlock...'
                  value={enteredPassword}
                  onChange={(e) => setEnteredPassword(e.target.value)}
                  className="bg-slate-50 text-slate-900 border border-slate-300 rounded-xl px-3 py-1.5 font-mono text-xs flex-1"
                />
              </div>
              <div className="font-mono text-xs bg-slate-900 text-white p-3 rounded-xl border border-slate-800">
                {enteredPassword === 'secret' ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" /> Access Granted! Loop Exited.
                  </span>
                ) : (
                  <span className="text-amber-300 italic">
                    while password != "secret": prompt input...
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 11: BREAK, CONTINUE, PASS (Light Theme - PDF Page 11)
  // =========================================================
  if (slide.id === 11) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        {/* Mode Selector */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200/90 shadow-sm w-full max-w-md mx-auto">
          <button
            onClick={() => setControlMode('break')}
            className={`flex-1 py-1.5 rounded-xl font-mono font-bold text-xs transition-all ${
              controlMode === 'break' ? 'bg-red-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            break
          </button>
          <button
            onClick={() => setControlMode('continue')}
            className={`flex-1 py-1.5 rounded-xl font-mono font-bold text-xs transition-all ${
              controlMode === 'continue' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            continue
          </button>
          <button
            onClick={() => setControlMode('pass')}
            className={`flex-1 py-1.5 rounded-xl font-mono font-bold text-xs transition-all ${
              controlMode === 'pass' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            pass
          </button>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* break Card */}
          <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
            controlMode === 'break' ? 'bg-red-50/90 border-red-300 shadow-md scale-[1.02]' : 'bg-white border-slate-200/90 opacity-80'
          }`}>
            <div className="text-lg font-black text-red-600 font-mono mb-1">break</div>
            <p className="text-xs text-slate-700 mb-3">Immediately exits the entire loop. Use when you've found what you need.</p>
            <pre className="font-mono text-xs bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-200">
              <span className="text-amber-400 font-bold">for</span> n <span className="text-amber-400 font-bold">in</span> [1,3,4,5]:<br />
              <span className="text-amber-400 font-bold">    if</span> n % 2 == 0:<br />
              <span className="text-slate-400">        print(n) # 4</span><br />
              <span className="text-red-400 font-bold">        break</span>
            </pre>
            <div className="text-xs text-red-700 italic font-semibold mt-3">"I'm done, stop everything!"</div>
          </div>

          {/* continue Card */}
          <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
            controlMode === 'continue' ? 'bg-cyan-50/90 border-cyan-300 shadow-md scale-[1.02]' : 'bg-white border-slate-200/90 opacity-80'
          }`}>
            <div className="text-lg font-black text-cyan-700 font-mono mb-1">continue</div>
            <p className="text-xs text-slate-700 mb-3">Skips current iteration and moves to the next one immediately.</p>
            <pre className="font-mono text-xs bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-200">
              <span className="text-amber-400 font-bold">for</span> i <span className="text-amber-400 font-bold">in</span> range(6):<br />
              <span className="text-amber-400 font-bold">    if</span> i % 2 != 0:<br />
              <span className="text-cyan-400 font-bold">        continue</span><br />
              <span className="text-slate-400">    print(i) # 0 2 4</span>
            </pre>
            <div className="text-xs text-cyan-800 italic font-semibold mt-3">"Skip this one, keep going!"</div>
          </div>

          {/* pass Card */}
          <div className={`p-4 sm:p-5 rounded-2xl border transition-all ${
            controlMode === 'pass' ? 'bg-purple-50/90 border-purple-300 shadow-md scale-[1.02]' : 'bg-white border-slate-200/90 opacity-80'
          }`}>
            <div className="text-lg font-black text-purple-700 font-mono mb-1">pass</div>
            <p className="text-xs text-slate-700 mb-3">Does absolutely nothing. A placeholder for future code stubs.</p>
            <pre className="font-mono text-xs bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-200">
              <span className="text-amber-400 font-bold">if</span> user == <span className="text-emerald-300">"admin"</span>:<br />
              <span className="text-purple-400 font-bold">    pass</span> <span className="text-slate-400"># TODO later</span><br />
              <span className="text-amber-400 font-bold">else</span>:<br />
              <span className="text-slate-400">    print(</span><span className="text-red-300">"No access"</span><span className="text-slate-400">)</span>
            </pre>
            <div className="text-xs text-purple-800 italic font-semibold mt-3">"I'll come back to this later."</div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 12: NESTED LOOPS (Light Theme - PDF Page 12)
  // =========================================================
  if (slide.id === 12) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: What Are Nested Loops */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs space-y-3">
            <div className="font-bold text-amber-700 text-sm">What Are Nested Loops?</div>
            <p className="text-slate-600 text-xs">
              A loop inside another loop. The inner loop completes all iterations for each single iteration of the outer loop.
            </p>

            <pre className="font-mono text-xs bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-200">
              <span className="text-amber-400 font-bold">for</span> i <span className="text-amber-400 font-bold">in</span> range(3): <span className="text-slate-400"># outer</span><br />
              <span className="text-cyan-400 font-bold">    for</span> j <span className="text-cyan-400 font-bold">in</span> range(3): <span className="text-slate-400"># inner</span><br />
              <span className="text-slate-300">        print(f"&#123;i&#125;,&#123;j&#125;")</span><br />
              <span className="text-emerald-400 text-[11px]"># Runs 3 x 3 = 9 times!</span>
            </pre>

            {/* Interactive 3x3 Grid Stepper */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-2 text-xs">
                <span className="font-mono text-amber-800 font-bold">Current: i={nestedI}, j={nestedJ}</span>
                <button
                  onClick={() => {
                    if (nestedJ < 2) setNestedJ(nestedJ + 1);
                    else {
                      setNestedJ(0);
                      setNestedI((nestedI + 1) % 3);
                    }
                  }}
                  className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold font-mono text-xs shadow-sm hover:bg-amber-400"
                >
                  Step Next Iteration
                </button>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {[0, 1, 2].map((r) =>
                  [0, 1, 2].map((c) => (
                    <div
                      key={`${r}-${c}`}
                      className={`p-1.5 text-center font-mono text-xs rounded-lg border transition-all ${
                        r === nestedI && c === nestedJ
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md scale-105'
                          : 'bg-white text-slate-500 border-slate-200'
                      }`}
                    >
                      ({r},{c})
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Use Cases & Pitfalls */}
          <div className="space-y-3">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
              <div className="font-bold text-cyan-700 text-sm mb-2">Use Cases</div>
              <ul className="text-slate-700 text-xs space-y-1 list-disc pl-4 mb-3">
                <li>Pattern printing — stars, triangles</li>
                <li>Matrix traversal — rows and columns</li>
                <li>Combinations — finding pairs</li>
              </ul>
              <div className="text-xs text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200">
                <strong>Performance note:</strong> Nested loops multiply iterations: 3x3=9, 10x10=100!
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-red-50 border border-red-200/90 text-xs space-y-1 text-red-950">
              <div className="font-bold text-red-700 text-sm mb-1">Common Errors & Tips</div>
              <div><strong className="text-slate-900">Mistake 1:</strong> Forgetting to update loop variable → infinite while loop</div>
              <div><strong className="text-slate-900">Mistake 2:</strong> Off-by-one in range() — range(5) gives 0-4, not 1-5</div>
              <div className="text-emerald-800 font-semibold text-xs pt-1">Tip: Use meaningful names i, j and track 4-space indentation carefully!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 13: SUMMARY TOOLKIT (Light Theme - PDF Page 13)
  // =========================================================
  if (slide.id === 13) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-3.5 p-1">
        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Conditionals */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
            <div className="flex items-center gap-1.5 font-bold text-blue-700 text-sm mb-1">
              <GitBranch className="w-4 h-4 text-blue-600" /> Conditionals
            </div>
            <div className="font-mono text-xs font-bold text-amber-600 mb-1">if / elif / else</div>
            <p className="text-xs text-slate-600 leading-snug">
              Make decisions in your code. Handle multiple outcomes with clean logic.
            </p>
          </div>

          {/* for Loop */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
            <div className="flex items-center gap-1.5 font-bold text-amber-700 text-sm mb-1">
              <RotateCw className="w-4 h-4 text-amber-600" /> for Loop
            </div>
            <div className="font-mono text-xs font-bold text-amber-600 mb-1">for x in sequence:</div>
            <p className="text-xs text-slate-600 leading-snug">
              Iterate over known collections. Perfect when count is known.
            </p>
          </div>

          {/* while Loop */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
            <div className="flex items-center gap-1.5 font-bold text-purple-700 text-sm mb-1">
              <RotateCcw className="w-4 h-4 text-purple-600" /> while Loop
            </div>
            <div className="font-mono text-xs font-bold text-amber-600 mb-1">while condition:</div>
            <p className="text-xs text-slate-600 leading-snug">
              Repeat until condition changes. Great for unknown iteration counts.
            </p>
          </div>

          {/* break */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
            <div className="font-bold text-red-600 font-mono text-sm mb-1">break</div>
            <p className="text-xs text-slate-600 leading-snug">
              Exit the loop early when you've found what you need.
            </p>
          </div>

          {/* continue */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
            <div className="font-bold text-cyan-700 font-mono text-sm mb-1">continue</div>
            <p className="text-xs text-slate-600 leading-snug">
              Skip current iteration and move directly to the next one.
            </p>
          </div>

          {/* pass */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs">
            <div className="font-bold text-purple-700 font-mono text-sm mb-1">pass</div>
            <p className="text-xs text-slate-600 leading-snug">
              Placeholder that does nothing. Use for future code stubs.
            </p>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-200/90 text-center text-xs text-orange-950 font-bold shadow-sm">
          Practice makes perfect — start with small examples, then build bigger!
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 14: OUTRO (Dark Theme - PDF Page 14)
  // =========================================================
  if (slide.type === 'outro' || slide.id === 14) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-4 sm:p-8 select-none bg-transparent text-white overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 flex items-center justify-center my-auto flex-col text-center max-w-3xl mx-auto w-full">
          {/* Logo Header */}
          <div className="mb-6">
            <InstantLogo isDark={true} className="h-7 sm:h-8" />
          </div>

          {/* Main Quote */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white italic tracking-tight mb-4 leading-tight">
            "The only way to learn programming<br />is by writing programs."
          </h1>

          {/* Rainbow underline */}
          <div className="w-32 sm:w-48 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full mb-5 shadow-lg shadow-purple-500/30" />

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-xl mb-8 leading-relaxed">
            Now go build something amazing with what you've learned!
          </p>

          {/* Tag Box */}
          <div className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-orange-500/50 text-orange-400 font-mono text-xs sm:text-sm font-bold tracking-widest shadow-xl uppercase">
            PYTHON SESSION 2 — COMPLETE
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-center text-xs text-slate-500 font-mono tracking-widest uppercase pt-3">
          INSTANT
        </div>
      </div>
    );
  }

  // Default Fallback
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-600">
      <h3 className="text-lg font-bold text-slate-900 mb-2">{slide.mainTitle}</h3>
      <p className="text-xs text-slate-600">{slide.subtitle}</p>
    </div>
  );
};
