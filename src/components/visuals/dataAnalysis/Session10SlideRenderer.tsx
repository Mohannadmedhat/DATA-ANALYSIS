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
  // Icon Mapping Helper
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
  // Slide 4: Traffic Light / Conditionals Why
  const [trafficColor, setTrafficColor] = useState<'green' | 'yellow' | 'red'>('green');

  // Slide 5: If Statement Voting Age
  const [votingAge, setVotingAge] = useState(18);

  // Slide 6: Else Elif Grade Calculator
  const [examScore, setExamScore] = useState(85);

  // Slide 7: Nested Conditionals Auth
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState<'admin' | 'user' | 'guest'>('admin');

  // Slide 9: For Loop Visualizer
  const [forLoopStep, setForLoopStep] = useState(1);
  const [forLoopType, setForLoopType] = useState<'range' | 'string'>('range');

  // Slide 10: While Loop Countdown & Password
  const [countdown, setCountdown] = useState(5);
  const [enteredPassword, setEnteredPassword] = useState('');

  // Slide 11: Loop Control Lab (break, continue, pass)
  const [controlMode, setControlMode] = useState<'break' | 'continue' | 'pass'>('break');

  // Slide 12: Nested Loops 3x3 Matrix Step
  const [nestedI, setNestedI] = useState(0);
  const [nestedJ, setNestedJ] = useState(0);

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE (PDF Page 1)
  // =========================================================
  if (slide.id === 1) {
    const stats = [
      { val: '3 Modules', label: 'Core Topics', sub: 'Conditionals • Loops • Control' },
      { val: '14 Slides', label: 'Curriculum Depth', sub: 'Python 3.12 Control Flow' },
      { val: 'Hands-on', label: 'Interactive Labs', sub: 'Code Execution Engine' }
    ];

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 text-center bg-transparent text-white overflow-hidden select-none">
        {/* Background Glows */}
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

          {/* Rainbow underline divider matching PDF */}
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
  // SLIDE 02: TABLE OF CONTENTS (PDF Page 2)
  // =========================================================
  if (slide.id === 2) {
    const cards = slide.cards || [];
    return (
      <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 text-white select-none overflow-hidden">
        {/* Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-1">
            WHAT WE'LL COVER TODAY
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Curriculum Overview
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mt-2 mb-4" />
        </div>

        {/* 3 Agenda Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
          {cards.map((card, idx) => {
            const IconComp = getIconComponent(card.iconName);
            const cardNumbers = ['01', '02', '03'];
            const borderColors = [
              'hover:border-blue-500/60 group-hover:text-blue-400',
              'hover:border-amber-500/60 group-hover:text-amber-400',
              'hover:border-purple-500/60 group-hover:text-purple-400'
            ];
            const numColors = ['text-blue-400', 'text-amber-400', 'text-purple-400'];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className={`group relative p-5 rounded-2xl bg-slate-900/90 border border-slate-800 transition-all duration-300 flex flex-col justify-between min-h-[220px] ${borderColors[idx]}`}
              >
                <div>
                  <div className={`text-3xl sm:text-4xl font-black ${numColors[idx]} mb-3 font-mono`}>
                    {cardNumbers[idx]}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {card.title.replace(/^[0-9]+\.\s*/, '')}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/60 text-slate-500 group-hover:text-slate-300 transition-colors">
                  <span className="text-[10px] font-mono uppercase tracking-wider">Module {idx + 1}</span>
                  <IconComp className="w-5 h-5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-[11px] text-slate-500 font-mono tracking-wider text-right">
          02 / 14 • INSTANT
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 03 & 08: SECTION DIVIDERS (PDF Page 3 & Page 8)
  // =========================================================
  if (slide.type === 'section-divider') {
    const isChapterTwo = slide.id === 8;
    return (
      <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-slate-950 text-white select-none overflow-hidden">
        {/* Background giant watermark chapter number */}
        <div className="absolute top-4 left-6 text-[180px] font-black text-slate-900/60 leading-none pointer-events-none font-mono">
          {isChapterTwo ? '02' : '01'}
        </div>

        <div className="relative z-10 my-auto max-w-3xl">
          <div className="text-xs font-bold font-mono uppercase tracking-widest text-amber-400 mb-2">
            {slide.partNumber || (isChapterTwo ? '02 CHAPTER TWO' : '01 CHAPTER ONE')}
          </div>

          <div className="w-12 h-1 bg-amber-500 rounded-full mb-4" />

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-3">
            {slide.sectionTitle}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-medium leading-relaxed">
            {slide.subtitle}
          </p>
        </div>

        {/* Bottom decorative graphic */}
        <div className="relative z-10 flex items-center justify-between border-t border-slate-800/80 pt-4">
          <div className="text-xs font-mono text-slate-500">Python 3.12 Fundamentals</div>
          <div className="text-xs font-mono tracking-widest text-slate-500">INSTANT</div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04: WHY DO WE NEED CONDITIONALS? (PDF Page 4)
  // =========================================================
  if (slide.id === 4) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 text-white select-none overflow-hidden">
        {/* Top Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-1">
            CONDITIONAL STATEMENTS
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Why Do We Need Conditionals?
          </h2>
          <div className="w-14 h-1 bg-amber-500 rounded-full mt-1 mb-2" />
        </div>

        {/* Main Grid: Comparison & Core Idea */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto">
          {/* Without Conditionals */}
          <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-500/30 text-slate-200">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm mb-2">
              <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                <X className="w-3.5 h-3.5" />
              </div>
              <span>Without Conditionals</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300 mb-1">
              Code runs in a straight line — top to bottom. It cannot respond to different situations.
            </p>
            <div className="text-[11px] text-red-300/80 font-mono bg-red-900/20 p-2 rounded border border-red-800/30">
              Every user sees the same result, no matter what.
            </div>
          </div>

          {/* With Conditionals */}
          <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-slate-200">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>With Conditionals</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-300 mb-1">
              Code becomes <strong className="text-emerald-400">intelligent</strong> — it adapts to data and user input.
            </p>
            <div className="text-[11px] text-emerald-300/80 font-mono bg-emerald-900/20 p-2 rounded border border-emerald-800/30">
              Different situations produce different results. Your program can make decisions!
            </div>
          </div>
        </div>

        {/* Core Idea & Interactive Traffic Light */}
        <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 text-slate-200">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            The Core Idea & Interactive Demo
          </div>
          <div className="text-xs text-amber-300 font-semibold mb-2">
            "If something is true, do this; otherwise, do that"
          </div>

          {/* Traffic Light Interactive Widget */}
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTrafficColor('green')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  trafficColor === 'green' ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30' : 'bg-slate-800 text-slate-400'
                }`}
              >
                Green
              </button>
              <button
                onClick={() => setTrafficColor('yellow')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  trafficColor === 'yellow' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30' : 'bg-slate-800 text-slate-400'
                }`}
              >
                Yellow
              </button>
              <button
                onClick={() => setTrafficColor('red')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                  trafficColor === 'red' ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-slate-800 text-slate-400'
                }`}
              >
                Red
              </button>
            </div>

            <div className="font-mono text-xs text-slate-300 bg-slate-950 px-3 py-1.5 rounded border border-slate-800 flex-1 w-full sm:w-auto">
              {trafficColor === 'green' && <span className="text-emerald-400">if green → <strong>GO</strong></span>}
              {trafficColor === 'yellow' && <span className="text-amber-400">elif yellow → <strong>SLOW DOWN</strong></span>}
              {trafficColor === 'red' && <span className="text-red-400">else (red) → <strong>STOP</strong></span>}
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 font-mono text-right">04 / 14 • INSTANT</div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: THE IF STATEMENT (PDF Page 5)
  // =========================================================
  if (slide.id === 5) {
    const isEligible = votingAge >= 18;

    return (
      <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 text-white select-none overflow-hidden">
        {/* Top Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-1">
            CONDITIONAL STATEMENTS
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            The if Statement — Your First Decision
          </h2>
          <div className="w-14 h-1 bg-amber-500 rounded-full mt-1 mb-2" />
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto">
          {/* Left Column: Syntax & Rules */}
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-xs font-bold text-amber-400 mb-1">Syntax</div>
              <pre className="font-mono text-xs text-slate-200 bg-slate-950 p-2 rounded border border-slate-800">
                <span className="text-amber-400 font-bold">if</span> condition:<br />
                <span className="text-slate-500">    # indented code block</span>
              </pre>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1">
              <div className="font-bold text-blue-400">How It Works</div>
              <div className="text-slate-300">1. Python evaluates the <strong className="text-white">condition</strong></div>
              <div className="text-slate-300">2. If <span className="text-emerald-400 font-bold">True</span> → executes the code block</div>
              <div className="text-slate-300">3. If <span className="text-red-400 font-bold">False</span> → skips the code block</div>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/40 text-xs text-amber-200 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>The colon (:) and indentation (4 spaces) are mandatory!</strong>
                <p className="text-[11px] text-amber-300/80 mt-0.5">Indentation is Python's way of grouping code. It's not optional — it's the rule!</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Voting Example */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold text-emerald-400">Example: Voting Eligibility</div>
                <div className="text-xs font-mono text-slate-400">Interactive Test</div>
              </div>

              {/* Slider for Age */}
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 mb-3">
                <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                  <span>age = {votingAge}</span>
                  <span className={isEligible ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
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
              <pre className="font-mono text-xs text-slate-200 bg-slate-950 p-2.5 rounded border border-slate-800 mb-2">
                <span className="text-cyan-400">age</span> = <span className="text-amber-400">{votingAge}</span><br />
                <span className="text-amber-400 font-bold">if</span> age &gt;= <span className="text-amber-400">18</span>:<br />
                <span className="text-slate-400">    print(</span><span className="text-emerald-300">"You can vote!"</span><span className="text-slate-400">)</span>
              </pre>

              {/* Output Box */}
              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 font-mono text-xs">
                <div className="text-[10px] text-slate-500 uppercase font-bold mb-0.5">Terminal Output:</div>
                {isEligible ? (
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    "You can vote!"
                  </div>
                ) : (
                  <div className="text-slate-500 italic">
                    (Condition evaluated to False — block skipped)
                  </div>
                )}
              </div>
            </div>

            <div className="text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-800">
              <strong>What's Happening?</strong> We check if <code className="text-amber-400">age &gt;= 18</code>. Since {votingAge} is {isEligible ? 'greater than or equal to' : 'less than'} 18, Python {isEligible ? 'prints the message.' : 'skips the code block.'}
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 font-mono text-right">05 / 14 • INSTANT</div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 06: ELSE & ELIF (PDF Page 6)
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
      <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 text-white select-none overflow-hidden">
        {/* Top Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-1">
            CONDITIONAL STATEMENTS
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            else & elif — Handling Multiple Paths
          </h2>
          <div className="w-14 h-1 bg-amber-500 rounded-full mt-1 mb-2" />
        </div>

        {/* Top Flow Bar */}
        <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono my-1 overflow-x-auto">
          <div className="px-3 py-1 rounded bg-blue-500/20 border border-blue-500/40 text-blue-300 font-bold shrink-0">
            if (condition 1)
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <div className="px-3 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold shrink-0">
            elif (condition 2)
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <div className="px-3 py-1 rounded bg-purple-500/20 border border-purple-500/40 text-purple-300 font-bold shrink-0">
            else
          </div>
          <span className="text-slate-400 text-[11px] ml-auto shrink-0 hidden sm:inline">Only one block executes — top to bottom</span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto">
          {/* else Card */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
            <div className="font-bold text-purple-400 mb-1">else</div>
            <p className="text-slate-300 text-[11px] mb-2">
              Catches everything the <code className="text-blue-400">if</code> didn't handle. Think: "otherwise, do this."
            </p>
            <pre className="font-mono text-[11px] text-slate-200 bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-amber-400 font-bold">if</span> age &gt;= <span className="text-amber-400">18</span>:<br />
              <span className="text-slate-400">    print(</span><span className="text-emerald-300">"Adult"</span><span className="text-slate-400">)</span><br />
              <span className="text-purple-400 font-bold">else</span>:<br />
              <span className="text-slate-400">    print(</span><span className="text-red-300">"Minor"</span><span className="text-slate-400">)</span>
            </pre>
          </div>

          {/* elif Card + Interactive Calculator */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs flex flex-col justify-between">
            <div>
              <div className="font-bold text-amber-400 mb-1">elif (else if) & Live Grade Simulator</div>
              <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-slate-800 mb-2">
                <span className="font-mono text-[11px]">score = {examScore}</span>
                <span className="font-mono font-bold text-emerald-400">grade = "{currentGrade.grade}"</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={examScore}
                onChange={(e) => setExamScore(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer mb-2"
              />

              <pre className="font-mono text-[11px] bg-slate-950 p-2 rounded border border-slate-800 space-y-0.5">
                <div className={currentGrade.branch === 'if' ? 'text-emerald-400 font-bold bg-emerald-950/40 p-0.5 rounded' : 'text-slate-400'}>
                  if score &gt;= 90: grade = "A"
                </div>
                <div className={currentGrade.branch === 'elif 80' ? 'text-emerald-400 font-bold bg-emerald-950/40 p-0.5 rounded' : 'text-slate-400'}>
                  elif score &gt;= 80: grade = "B"
                </div>
                <div className={currentGrade.branch === 'elif 70' ? 'text-emerald-400 font-bold bg-emerald-950/40 p-0.5 rounded' : 'text-slate-400'}>
                  elif score &gt;= 70: grade = "C"
                </div>
                <div className={currentGrade.branch === 'else' ? 'text-emerald-400 font-bold bg-emerald-950/40 p-0.5 rounded' : 'text-slate-400'}>
                  else: grade = "F"
                </div>
              </pre>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/30 text-xs text-slate-300">
          <strong className="text-blue-400">Why It Matters & Rule of Thumb:</strong> Real-world scenarios have multiple outcomes. Start with <code className="text-amber-400">if</code>, add <code className="text-amber-400">elif</code> for extra conditions, and finish with <code className="text-purple-400">else</code> as the catch-all.
        </div>

        <div className="text-[11px] text-slate-500 font-mono text-right">06 / 14 • INSTANT</div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 07: NESTED CONDITIONALS & COMMON ERRORS (PDF Page 7)
  // =========================================================
  if (slide.id === 7) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 text-white select-none overflow-hidden">
        {/* Top Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-1">
            CONDITIONAL STATEMENTS
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Nested Conditionals & Common Mistakes
          </h2>
          <div className="w-14 h-1 bg-amber-500 rounded-full mt-1 mb-2" />
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto">
          {/* Left: Nested If & Interactive Auth Simulator */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
            <div className="font-bold text-blue-400">Nested if Statements</div>
            <p className="text-[11px] text-slate-300">An <code className="text-amber-400">if</code> inside another <code className="text-amber-400">if</code> — for multi-level decisions.</p>

            {/* Controls */}
            <div className="flex items-center gap-3 bg-slate-950 p-2 rounded border border-slate-800">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isLoggedIn}
                  onChange={(e) => setIsLoggedIn(e.target.checked)}
                  className="accent-amber-500"
                />
                <span className="font-mono text-[11px]">logged_in = {isLoggedIn ? 'True' : 'False'}</span>
              </label>

              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value as any)}
                className="bg-slate-900 text-amber-300 border border-slate-700 rounded px-2 py-0.5 text-[11px] font-mono ml-auto"
              >
                <option value="admin">role = "admin"</option>
                <option value="user">role = "user"</option>
              </select>
            </div>

            {/* Code */}
            <pre className="font-mono text-[11px] text-slate-200 bg-slate-950 p-2 rounded border border-slate-800">
              <span className="text-amber-400 font-bold">if</span> logged_in:<br />
              <span className="text-amber-400 font-bold">    if</span> role == <span className="text-emerald-300">"admin"</span>:<br />
              <span className="text-slate-400">        print(</span><span className="text-emerald-300">"Admin panel"</span><span className="text-slate-400">)</span><br />
              <span className="text-purple-400 font-bold">    else</span>:<br />
              <span className="text-slate-400">        print(</span><span className="text-emerald-300">"User panel"</span><span className="text-slate-400">)</span>
            </pre>

            <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[11px]">
              <span className="text-slate-500 uppercase font-bold text-[9px] block">Result:</span>
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
          <div className="space-y-2">
            <div className="text-xs font-bold text-red-400">Common Errors</div>
            
            <div className="p-2.5 rounded-xl bg-red-950/30 border border-red-500/30 text-xs text-red-200 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Forgetting the colon (<strong className="font-mono">:</strong>) after if/elif/else</span>
            </div>

            <div className="p-2.5 rounded-xl bg-red-950/30 border border-red-500/30 text-xs text-red-200 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Wrong indentation — mixing spaces and tabs</span>
            </div>

            <div className="p-2.5 rounded-xl bg-red-950/30 border border-red-500/30 text-xs text-red-200 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Using <code className="font-mono text-white">=</code> (assignment) instead of <code className="font-mono text-white">==</code> (comparison)</span>
            </div>

            {/* Best Practices */}
            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-[11px] text-emerald-200 space-y-1 mt-2">
              <div className="font-bold text-emerald-400 text-xs mb-1">Best Practices</div>
              <div>1. Keep nesting shallow — max 2-3 levels deep.</div>
              <div>2. Use <code className="text-amber-300">elif</code> instead of deep nesting when possible.</div>
              <div>3. Read the error message — Python highlights the exact line.</div>
              <div>4. Test with different inputs to uncover edge case bugs.</div>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 font-mono text-right">07 / 14 • INSTANT</div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 09: FOR LOOP (PDF Page 9)
  // =========================================================
  if (slide.id === 9) {
    const stringLetters = ['P', 'y', 't', 'h', 'o', 'n'];

    return (
      <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 text-white select-none overflow-hidden">
        {/* Top Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-1">
            LOOPS
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            for Loop — Iterate with Precision
          </h2>
          <div className="w-14 h-1 bg-amber-500 rounded-full mt-1 mb-2" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto">
          {/* Left Column: Syntax & range() */}
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
              <div className="font-bold text-amber-400 mb-1">Syntax & How It Works</div>
              <pre className="font-mono text-[11px] text-slate-200 bg-slate-950 p-2 rounded border border-slate-800 mb-2">
                <span className="text-amber-400 font-bold">for</span> variable <span className="text-amber-400 font-bold">in</span> sequence:<br />
                <span className="text-slate-500">    # code to repeat</span>
              </pre>
              <div className="text-slate-300 text-[11px] space-y-0.5">
                <div>1. The sequence provides items one by one</div>
                <div>2. Each item is assigned to variable</div>
                <div>3. Perfect when you know what you're iterating over</div>
              </div>
            </div>

            {/* range() function */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
              <div className="font-bold text-cyan-400 mb-1">The range() Function</div>
              <div className="font-mono text-[11px] bg-slate-950 p-2 rounded border border-slate-800 space-y-1">
                <div><span className="text-amber-400">range(5)</span> <span className="text-slate-500"># 0, 1, 2, 3, 4</span></div>
                <div><span className="text-amber-400">range(1, 6)</span> <span className="text-slate-500"># 1, 2, 3, 4, 5</span></div>
                <div><span className="text-amber-400">range(0, 10, 2)</span> <span className="text-slate-500"># 0, 2, 4, 6, 8</span></div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Examples + Step Animator */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-emerald-400">Interactive for Loop Animator</div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setForLoopStep((prev) => (prev % 5) + 1)}
                    className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-bold font-mono text-[10px] hover:bg-amber-400 transition-colors flex items-center gap-1"
                  >
                    <Play className="w-3 h-3" /> Step ({forLoopStep}/5)
                  </button>
                </div>
              </div>

              {/* Live Count to 5 Example */}
              <div className="bg-slate-950 p-2.5 rounded border border-slate-800 mb-2 font-mono">
                <div className="text-slate-400 text-[11px]">
                  <span className="text-amber-400 font-bold">for</span> i <span className="text-amber-400 font-bold">in</span> range(1, 6):<br />
                  <span className="text-slate-300">    print(i)</span>
                </div>
              </div>

              {/* Stepping Visualization */}
              <div className="flex items-center gap-2 my-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm transition-all ${
                      num === forLoopStep
                        ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-500/30 scale-110'
                        : num < forLoopStep
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                        : 'bg-slate-950 text-slate-500 border border-slate-800'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>

              {/* String Example */}
              <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[11px]">
                <span className="text-slate-400">word = "Python" → </span>
                <span className="text-amber-300">Current letter: '{stringLetters[forLoopStep - 1] || 'P'}'</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 font-mono text-right">09 / 14 • INSTANT</div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 10: WHILE LOOP (PDF Page 10)
  // =========================================================
  if (slide.id === 10) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 text-white select-none overflow-hidden">
        {/* Top Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-1">
            LOOPS
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            while Loop — Repeat Until Ready
          </h2>
          <div className="w-14 h-1 bg-amber-500 rounded-full mt-1 mb-2" />
        </div>

        {/* 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto">
          {/* Left Column: Syntax & Danger Box */}
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
              <div className="font-bold text-amber-400 mb-1">Syntax & How It Works</div>
              <pre className="font-mono text-[11px] text-slate-200 bg-slate-950 p-2 rounded border border-slate-800 mb-2">
                <span className="text-amber-400 font-bold">while</span> condition:<br />
                <span className="text-slate-500">    # code to repeat</span>
              </pre>
              <div className="text-slate-300 text-[11px] space-y-0.5">
                <div>1. Python checks condition</div>
                <div>2. If True → runs code block & checks again</div>
                <div>3. If False → exits the loop</div>
              </div>
            </div>

            {/* Danger Infinite Loop Box */}
            <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/40 text-xs text-red-200 flex items-start gap-2">
              <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-red-400">Danger: Infinite Loop!</strong>
                <p className="text-[11px] text-red-300/80 mt-0.5">If condition never becomes False, code repeats forever. Always ensure condition can change!</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/30 text-xs text-blue-300 font-mono">
              <strong>for vs while:</strong> Use <code className="text-amber-400">for</code> when count is known. Use <code className="text-amber-400">while</code> when count is unknown.
            </div>
          </div>

          {/* Right Column: Countdown & Password Validation Demo */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-3">
            {/* Interactive Countdown */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-emerald-400">Countdown Timer Demo</span>
                <button
                  onClick={() => setCountdown((prev) => (prev > 0 ? prev - 1 : 5))}
                  className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-bold font-mono text-[10px] hover:bg-amber-400"
                >
                  {countdown > 0 ? `Step (count = ${countdown})` : 'Reset to 5'}
                </button>
              </div>
              <pre className="font-mono text-[11px] bg-slate-950 p-2 rounded border border-slate-800 text-slate-300">
                count = {countdown}<br />
                <span className="text-amber-400 font-bold">while</span> count &gt; 0:<br />
                <span className="text-slate-400">    print(count); count -= 1</span>
              </pre>
            </div>

            {/* Interactive Password Validation */}
            <div>
              <div className="font-bold text-cyan-400 mb-1">User Input Validation Demo</div>
              <div className="flex gap-2 mb-1">
                <input
                  type="text"
                  placeholder='Type "secret" to unlock...'
                  value={enteredPassword}
                  onChange={(e) => setEnteredPassword(e.target.value)}
                  className="bg-slate-950 text-white border border-slate-700 rounded px-2 py-1 font-mono text-xs flex-1"
                />
              </div>
              <div className="font-mono text-[11px] bg-slate-950 p-2 rounded border border-slate-800">
                {enteredPassword === 'secret' ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Access Granted! Loop Exited.
                  </span>
                ) : (
                  <span className="text-amber-400 italic">
                    while password != "secret": prompt input...
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 font-mono text-right">10 / 14 • INSTANT</div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 11: BREAK, CONTINUE, PASS (PDF Page 11)
  // =========================================================
  if (slide.id === 11) {
    const array = [1, 2, 3, 4, 5, 6];

    return (
      <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 text-white select-none overflow-hidden">
        {/* Top Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-1">
            LOOP CONTROL
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            break, continue, pass — Fine Control
          </h2>
          <div className="w-14 h-1 bg-amber-500 rounded-full mt-1 mb-2" />
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 w-full max-w-md mx-auto my-1">
          <button
            onClick={() => setControlMode('break')}
            className={`flex-1 py-1.5 rounded-lg font-mono font-bold text-xs transition-all ${
              controlMode === 'break' ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            break
          </button>
          <button
            onClick={() => setControlMode('continue')}
            className={`flex-1 py-1.5 rounded-lg font-mono font-bold text-xs transition-all ${
              controlMode === 'continue' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            continue
          </button>
          <button
            onClick={() => setControlMode('pass')}
            className={`flex-1 py-1.5 rounded-lg font-mono font-bold text-xs transition-all ${
              controlMode === 'pass' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            pass
          </button>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-auto">
          {/* break Card */}
          <div className={`p-3.5 rounded-xl border transition-all ${
            controlMode === 'break' ? 'bg-red-950/40 border-red-500 text-white scale-[1.02]' : 'bg-slate-900/80 border-slate-800 opacity-60'
          }`}>
            <div className="text-base font-black text-red-400 font-mono mb-1">break</div>
            <p className="text-xs text-slate-300 mb-2">Immediately exits the entire loop. Use when you've found what you need.</p>
            <pre className="font-mono text-[10px] bg-slate-950 p-2 rounded border border-slate-800 text-slate-200">
              <span className="text-amber-400 font-bold">for</span> n <span className="text-amber-400 font-bold">in</span> [1,3,4,5]:<br />
              <span className="text-amber-400 font-bold">    if</span> n % 2 == 0:<br />
              <span className="text-slate-400">        print(n) # 4</span><br />
              <span className="text-red-400 font-bold">        break</span>
            </pre>
            <div className="text-[11px] text-red-300 italic mt-2">"I'm done, stop everything!"</div>
          </div>

          {/* continue Card */}
          <div className={`p-3.5 rounded-xl border transition-all ${
            controlMode === 'continue' ? 'bg-cyan-950/40 border-cyan-500 text-white scale-[1.02]' : 'bg-slate-900/80 border-slate-800 opacity-60'
          }`}>
            <div className="text-base font-black text-cyan-400 font-mono mb-1">continue</div>
            <p className="text-xs text-slate-300 mb-2">Skips current iteration and moves to the next one immediately.</p>
            <pre className="font-mono text-[10px] bg-slate-950 p-2 rounded border border-slate-800 text-slate-200">
              <span className="text-amber-400 font-bold">for</span> i <span className="text-amber-400 font-bold">in</span> range(6):<br />
              <span className="text-amber-400 font-bold">    if</span> i % 2 != 0:<br />
              <span className="text-cyan-400 font-bold">        continue</span><br />
              <span className="text-slate-400">    print(i) # 0 2 4</span>
            </pre>
            <div className="text-[11px] text-cyan-300 italic mt-2">"Skip this one, keep going!"</div>
          </div>

          {/* pass Card */}
          <div className={`p-3.5 rounded-xl border transition-all ${
            controlMode === 'pass' ? 'bg-purple-950/40 border-purple-500 text-white scale-[1.02]' : 'bg-slate-900/80 border-slate-800 opacity-60'
          }`}>
            <div className="text-base font-black text-purple-400 font-mono mb-1">pass</div>
            <p className="text-xs text-slate-300 mb-2">Does absolutely nothing. A placeholder for future code stubs.</p>
            <pre className="font-mono text-[10px] bg-slate-950 p-2 rounded border border-slate-800 text-slate-200">
              <span className="text-amber-400 font-bold">if</span> user == <span className="text-emerald-300">"admin"</span>:<br />
              <span className="text-purple-400 font-bold">    pass</span> <span className="text-slate-500"># TODO later</span><br />
              <span className="text-amber-400 font-bold">else</span>:<br />
              <span className="text-slate-400">    print(</span><span className="text-red-300">"No access"</span><span className="text-slate-400">)</span>
            </pre>
            <div className="text-[11px] text-purple-300 italic mt-2">"I'll come back to this later."</div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 font-mono text-right">11 / 14 • INSTANT</div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 12: NESTED LOOPS (PDF Page 12)
  // =========================================================
  if (slide.id === 12) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 text-white select-none overflow-hidden">
        {/* Top Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-1">
            LOOPS
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Nested Loops & Common Errors
          </h2>
          <div className="w-14 h-1 bg-amber-500 rounded-full mt-1 mb-2" />
        </div>

        {/* 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto">
          {/* Left Column: What Are Nested Loops */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
            <div className="font-bold text-amber-400">What Are Nested Loops?</div>
            <p className="text-slate-300 text-[11px]">
              A loop inside another loop. The inner loop completes all iterations for each single iteration of the outer loop.
            </p>

            <pre className="font-mono text-[11px] bg-slate-950 p-2.5 rounded border border-slate-800 text-slate-200">
              <span className="text-amber-400 font-bold">for</span> i <span className="text-amber-400 font-bold">in</span> range(3): <span className="text-slate-500"># outer</span><br />
              <span className="text-cyan-400 font-bold">    for</span> j <span className="text-cyan-400 font-bold">in</span> range(3): <span className="text-slate-500"># inner</span><br />
              <span className="text-slate-400">        print(f"&#123;i&#125;,&#123;j&#125;")</span><br />
              <span className="text-emerald-400 text-[10px]"># Runs 3 x 3 = 9 times!</span>
            </pre>

            {/* Interactive 3x3 Grid Stepper */}
            <div className="bg-slate-950 p-2 rounded border border-slate-800">
              <div className="flex items-center justify-between mb-1.5 text-[11px]">
                <span className="font-mono text-amber-400 font-bold">Current: i={nestedI}, j={nestedJ}</span>
                <button
                  onClick={() => {
                    if (nestedJ < 2) setNestedJ(nestedJ + 1);
                    else {
                      setNestedJ(0);
                      setNestedI((nestedI + 1) % 3);
                    }
                  }}
                  className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold font-mono text-[10px]"
                >
                  Step Next Iteration
                </button>
              </div>

              <div className="grid grid-cols-3 gap-1">
                {[0, 1, 2].map((r) =>
                  [0, 1, 2].map((c) => (
                    <div
                      key={`${r}-${c}`}
                      className={`p-1 text-center font-mono text-[10px] rounded border transition-all ${
                        r === nestedI && c === nestedJ
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md scale-105'
                          : 'bg-slate-900 text-slate-500 border-slate-800'
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
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
              <div className="font-bold text-cyan-400 mb-1">Use Cases</div>
              <ul className="text-slate-300 text-[11px] space-y-1 list-disc pl-4">
                <li>Pattern printing — stars, triangles</li>
                <li>Matrix traversal — rows and columns</li>
                <li>Combinations — finding pairs</li>
              </ul>
              <div className="mt-2 text-[10px] text-amber-300/90 bg-amber-950/30 p-2 rounded border border-amber-500/30">
                <strong>Performance note:</strong> Nested loops multiply iterations: 3x3=9, 10x10=100!
              </div>
            </div>

            <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-xs space-y-1 text-red-200">
              <div className="font-bold text-red-400 mb-1">Common Errors & Tips</div>
              <div><strong className="text-white">Mistake 1:</strong> Forgetting to update loop variable → infinite while loop</div>
              <div><strong className="text-white">Mistake 2:</strong> Off-by-one in range() — range(5) gives 0-4, not 1-5</div>
              <div className="text-emerald-300 text-[10px] pt-1">Tip: Use meaningful names i, j and track 4-space indentation carefully!</div>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-slate-500 font-mono text-right">12 / 14 • INSTANT</div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 13: SUMMARY TOOLKIT (PDF Page 13)
  // =========================================================
  if (slide.id === 13) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 text-white select-none overflow-hidden">
        {/* Top Header */}
        <div>
          <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-1">
            SUMMARY
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Your Control Flow Toolkit
          </h2>
          <div className="w-14 h-1 bg-amber-500 rounded-full mt-1 mb-2" />
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 my-auto">
          {/* Conditionals */}
          <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/30 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-blue-400 mb-1">
              <GitBranch className="w-4 h-4" /> Conditionals
            </div>
            <div className="font-mono text-[10px] text-amber-300 mb-1">if / elif / else</div>
            <p className="text-[11px] text-slate-300 leading-tight">
              Make decisions in your code. Handle multiple outcomes with clean logic.
            </p>
          </div>

          {/* for Loop */}
          <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-1">
              <RotateCw className="w-4 h-4" /> for Loop
            </div>
            <div className="font-mono text-[10px] text-amber-300 mb-1">for x in sequence:</div>
            <p className="text-[11px] text-slate-300 leading-tight">
              Iterate over known collections. Perfect when count is known.
            </p>
          </div>

          {/* while Loop */}
          <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-purple-400 mb-1">
              <RotateCcw className="w-4 h-4" /> while Loop
            </div>
            <div className="font-mono text-[10px] text-amber-300 mb-1">while condition:</div>
            <p className="text-[11px] text-slate-300 leading-tight">
              Repeat until condition changes. Great for unknown iteration counts.
            </p>
          </div>

          {/* break */}
          <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-xs">
            <div className="font-bold text-red-400 font-mono mb-1">break</div>
            <p className="text-[11px] text-slate-300 leading-tight">
              Exit the loop early when you've found what you need.
            </p>
          </div>

          {/* continue */}
          <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs">
            <div className="font-bold text-cyan-400 font-mono mb-1">continue</div>
            <p className="text-[11px] text-slate-300 leading-tight">
              Skip current iteration and move directly to the next one.
            </p>
          </div>

          {/* pass */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
            <div className="font-bold text-purple-300 font-mono mb-1">pass</div>
            <p className="text-[11px] text-slate-300 leading-tight">
              Placeholder that does nothing. Use for future code stubs.
            </p>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-orange-500/40 text-center text-xs text-amber-200 font-semibold">
          Practice makes perfect — start with small examples, then build bigger!
        </div>

        <div className="text-[11px] text-slate-500 font-mono text-right">13 / 14 • INSTANT</div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 14: OUTRO / COMPLETION SLIDE (PDF Page 14)
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
    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-300">
      <h3 className="text-lg font-bold text-white mb-2">{slide.mainTitle}</h3>
      <p className="text-xs text-slate-400">{slide.subtitle}</p>
    </div>
  );
};
