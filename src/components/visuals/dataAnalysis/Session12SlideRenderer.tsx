import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { HeroCoverVisual } from './HeroCoverVisual';
import { ThankYouVisual } from './ThankYouVisual';
import { 
  Code2, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  Check, 
  X, 
  Plus, 
  Trash2, 
  AlertTriangle, 
  Zap, 
  Layers, 
  Search, 
  Database, 
  HelpCircle,
  Shield,
  Filter,
  BarChart2,
  Play,
  RotateCcw,
  Sliders,
  Type,
  Key,
  ShoppingCart,
  Thermometer,
  Layers3,
  ListFilter,
  Cpu,
  CornerDownRight,
  Split
} from 'lucide-react';

interface Session12SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session12SlideRenderer: React.FC<Session12SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // ---------------------------------------------------------
  // INTERACTIVE STATES FOR SLIDE WIDGETS
  // ---------------------------------------------------------

  // Slide 5: Positional vs Keyword Argument Simulator
  const [argMode, setArgMode] = useState<'positional' | 'keyword' | 'mixed-valid' | 'mixed-invalid'>('positional');

  // Slide 6: *args & **kwargs Interactive Tester
  const [argsList, setArgsList] = useState<number[]>([10, 20, 15]);
  const [kwargsDict, setKwargsDict] = useState<Record<string, string | number>>({ name: "Ali", age: 25, role: "Analyst" });

  // Slide 8: Circle Area & Multi-return Calculator
  const [radiusInput, setRadiusInput] = useState<number>(5);
  const [numListInput, setNumListInput] = useState<number[]>([3, 1, 4, 2, 9, 7]);

  // Slide 9: LEGB Scope Hierarchy Inspector
  const [activeScopeTab, setActiveScopeTab] = useState<'L' | 'E' | 'G' | 'B'>('L');
  const [globalCount, setGlobalCount] = useState<number>(100);
  const [scopeLog, setScopeLog] = useState<string>("count = 100 (Global)");

  // Slide 11: Lambda Expression Evaluator
  const [lambdaInput, setLambdaInput] = useState<number>(5);
  const [lambdaFunc, setLambdaFunc] = useState<'square' | 'is_even' | 'cube' | 'double'>('square');

  // Slide 12: map() vs filter() Visualizer
  const [mapFilterMode, setMapFilterMode] = useState<'map' | 'filter'>('map');
  const sourceNumbers = [1, -2, 3, -4, 5];

  // Slide 14: Nested Loop Matrix Traversal Simulator
  const [matrixRow, setMatrixRow] = useState<number>(0);
  const [matrixCol, setMatrixCol] = useState<number>(0);
  const [isLooping, setIsLooping] = useState<boolean>(false);

  // Slide 15: String Method Laboratory
  const [strInput, setStrInput] = useState<string>("  Hello Python Analyst!  ");
  const [activeStrAction, setActiveStrAction] = useState<string>('lower');

  // Slide 16: Palindrome Tester
  const [palindromeInput, setPalindromeInput] = useState<string>("Racecar");

  // Slide 18: Interactive Capstone Sandbox
  const [activeSandboxTab, setActiveSandboxTab] = useState<'temp' | 'cart' | 'palindrome' | 'pwd'>('pwd');
  const [tempVal, setTempVal] = useState<number>(25);
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');
  const [cartPrices, setCartPrices] = useState<number[]>([10, 20, 15]);
  const [cartTax, setCartTax] = useState<number>(0.08);
  const [pwdInput, setPwdInput] = useState<string>("Admin123");

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE (Dark Theme)
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual 
        sessionNumber="12"
        titlePrefix="PYTHON"
        titleHighlight="FUNCTIONS & STRINGS"
        subtitle="Functions · Parameters · LEGB Scope · Lambda · Nested Loops & String Methods"
        floatingBadges={[
          { icon: Cpu, label: "Reusable def Functions", position: "top-left", borderColor: "border-[#1751B9]/50", textColor: "text-blue-400" },
          { icon: Layers3, label: "LEGB Scope & Global", position: "top-right", borderColor: "border-[#FE862A]/50", textColor: "text-orange-400" },
          { icon: Zap, label: "Lambda & Map/Filter", position: "bottom-left", borderColor: "border-purple-500/50", textColor: "text-purple-400" },
          { icon: Type, label: "String Methods & Loops", position: "bottom-right", borderColor: "border-emerald-500/50", textColor: "text-emerald-400" }
        ]}
        statsCards={[
          { val: "4 Core Topics", label: "Curriculum Modules", sub: "Functions • Scope • Lambda • Strings" },
          { val: "20 Slides", label: "Final Python Session", sub: "Python Fundamentals Capstone" },
          { val: "Live Sandbox", label: "Interactive Code Labs", sub: "Password, Palindrome & Cart Demos" }
        ]}
        onStart={onNext}
      />
    );
  }

  // =========================================================
  // SLIDE 02: WHAT WE WILL COVER (4 Grid Cards)
  // =========================================================
  if (slide.id === 2) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-6 p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 01: Functions & Parameters */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-mono text-blue-600">01</span>
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <Cpu className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">FUNCTIONS & PARAMETERS</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                DRY principle, def syntax, positional vs keyword args, default values, *args & **kwargs.
              </p>
            </div>
          </div>

          {/* Card 02: Return Values & Scope */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-mono text-orange-600">02</span>
              <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600">
                <Layers3 className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">RETURN VALUES & SCOPE</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Returning single or multiple values as tuples, early exits, and the LEGB variable scope rule.
              </p>
            </div>
          </div>

          {/* Card 03: Lambda & Functional Tools */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-mono text-purple-600">03</span>
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">LAMBDA & FUNCTIONAL TOOLS</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Anonymous one-line functions, map(), filter(), and custom sorting with key functions.
              </p>
            </div>
          </div>

          {/* Card 04: Loops & String Methods */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-mono text-emerald-600">04</span>
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Type className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">LOOPS & STRING METHODS</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nested loop matrix traversal, string methods, slicing [::-1], and real-world capstone mini-projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 03, 07, 10, 13: SECTION DIVIDER SLIDES
  // =========================================================
  if (slide.type === 'section-divider') {
    const getIcon = () => {
      if (slide.id === 3) return Cpu;
      if (slide.id === 7) return Layers3;
      if (slide.id === 10) return Zap;
      return Type;
    };
    const IconComp = getIcon();

    const getPart = () => {
      if (slide.id === 3) return 'PART 01';
      if (slide.id === 7) return 'PART 02';
      if (slide.id === 10) return 'PART 03';
      return 'PART 04';
    };

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 select-none overflow-hidden bg-transparent text-white">
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
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/30 mb-4 ring-4 ring-orange-500/20">
            <IconComp className="w-8 h-8 text-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-mono font-bold mb-3 shadow-md backdrop-blur-sm">
            {slide.topRightTag && slide.topRightTag.startsWith('PART') ? slide.topRightTag : getPart()}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-3">
            {slide.mainTitle}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-xl text-center leading-relaxed mb-2">
            {slide.subtitle}
          </p>

          {slide.description && (
            <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-lg text-center leading-relaxed">
              {slide.description}
            </p>
          )}
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04, 08, 11, 16: CONCEPT DETAIL SLIDES
  // =========================================================
  if (slide.type === 'concept-detail') {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-start gap-3 text-slate-800 shadow-sm">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-medium leading-relaxed">
            <strong className="text-blue-900 font-bold">Definition:</strong> {slide.definition}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1.5">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">WHY</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {slide.why}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1.5">
              <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">HOW</span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {slide.how}
              </p>
            </div>

            {slide.characteristics && (
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col gap-2">
                <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">Key Characteristics</span>
                <div className="flex flex-wrap gap-2">
                  {slide.characteristics.map((char: string, idx: number) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-2xs flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col h-full">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 shadow-md font-mono text-xs sm:text-sm flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3 text-slate-400 text-[11px]">
                <span className="flex items-center gap-1.5 font-bold text-slate-300">
                  <Code2 className="w-4 h-4 text-cyan-400" /> PYTHON CODE EXAMPLE
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">Python 3.x</span>
              </div>
              <pre className="overflow-x-auto text-slate-200 leading-relaxed font-mono whitespace-pre-wrap">
                {slide.codeSnippet}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: POSITIONAL VS KEYWORD ARGUMENTS (Interactive)
  // =========================================================
  if (slide.id === 5) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Rules & Cards */}
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase">POSITIONAL ARGUMENTS</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Passed in the exact order parameters are defined. Swapping order changes output or causes bugs!
              </p>
              <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
                <code>greet("Alice", "Hello")  # Hello, Alice!</code>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase">KEYWORD ARGUMENTS</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                Passed by naming parameters explicitly (<code className="text-orange-600 font-bold">name=value</code>). Order does not matter!
              </p>
              <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
                <code>greet(greeting="Hi", name="Bob")  # Hi, Bob!</code>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-medium flex items-center gap-2">
              <Info className="w-4 h-4 text-cyan-600 shrink-0" />
              <span>Mixing Rule: Positional arguments MUST come before keyword arguments!</span>
            </div>
          </div>

          {/* Right Column: Live Interactive Call Simulator */}
          <div className="p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md flex flex-col justify-between gap-4 font-mono">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> FUNCTION CALL EXPLORER
              </span>
              <span className="text-slate-400 text-[11px]">def greet(name, greeting):</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-slate-400 block">Select Call Type to Test:</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setArgMode('positional')}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all text-left cursor-pointer ${
                    argMode === 'positional' ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  1. Positional
                </button>
                <button
                  onClick={() => setArgMode('keyword')}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all text-left cursor-pointer ${
                    argMode === 'keyword' ? 'bg-orange-600 text-white border-orange-400' : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  2. Keyword
                </button>
                <button
                  onClick={() => setArgMode('mixed-valid')}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all text-left cursor-pointer ${
                    argMode === 'mixed-valid' ? 'bg-emerald-600 text-white border-emerald-400' : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  3. Mixed (Valid)
                </button>
                <button
                  onClick={() => setArgMode('mixed-invalid')}
                  className={`p-2 rounded-xl text-xs font-bold border transition-all text-left cursor-pointer ${
                    argMode === 'mixed-invalid' ? 'bg-rose-600 text-white border-rose-400' : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  4. Mixed (Invalid ❌)
                </button>
              </div>
            </div>

            {/* Code Output Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <div className="text-slate-400"># Function Call:</div>
              {argMode === 'positional' && <code className="text-cyan-300 block font-bold">greet("Alice", "Hello")</code>}
              {argMode === 'keyword' && <code className="text-orange-300 block font-bold">greet(greeting="Hi", name="Bob")</code>}
              {argMode === 'mixed-valid' && <code className="text-emerald-300 block font-bold">greet("Alice", greeting="Welcome")</code>}
              {argMode === 'mixed-invalid' && <code className="text-rose-400 block font-bold">greet(greeting="Hi", "Alice")</code>}

              <div className="border-t border-slate-800 pt-2">
                <span className="text-slate-500">Output: </span>
                {argMode === 'positional' && <span className="text-white font-bold">"Hello, Alice!"</span>}
                {argMode === 'keyword' && <span className="text-white font-bold">"Hi, Bob!"</span>}
                {argMode === 'mixed-valid' && <span className="text-white font-bold">"Welcome, Alice!"</span>}
                {argMode === 'mixed-invalid' && (
                  <span className="text-rose-400 font-bold block mt-1">
                    SyntaxError: positional argument follows keyword argument
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
  // SLIDE 06: DEFAULT & VARIABLE-LENGTH ARGUMENTS (*args, **kwargs)
  // =========================================================
  if (slide.id === 6) {
    const totalArgsSum = argsList.reduce((acc, curr) => acc + curr, 0);

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: *args (Tuple) */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 uppercase flex items-center gap-1.5 mb-1">
                <ListFilter className="w-4 h-4 text-blue-600" /> *args (Positional Tuple)
              </span>
              <p className="text-xs text-slate-600">
                Collects any number of positional arguments into a <strong>Tuple</strong>.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1.5">
              <div>def total(*numbers):</div>
              <div className="pl-4 text-cyan-300">return sum(numbers)</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-600">Current *args:</span>
                <span className="font-bold text-blue-700">total({argsList.join(', ')})</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono border-t border-slate-200 pt-1.5">
                <span className="text-slate-500">Result:</span>
                <span className="font-bold text-emerald-600">{totalArgsSum}</span>
              </div>
              <button
                onClick={() => setArgsList([...argsList, Math.floor(Math.random() * 20) + 1])}
                className="w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add Random Number to *args
              </button>
            </div>
          </div>

          {/* Right Column: **kwargs (Dict) */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold text-orange-600 uppercase flex items-center gap-1.5 mb-1">
                <Database className="w-4 h-4 text-orange-600" /> **kwargs (Keyword Dict)
              </span>
              <p className="text-xs text-slate-600">
                Collects any number of keyword arguments into a <strong>Dictionary</strong>.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1">
              <div>def profile(**info):</div>
              <div className="pl-4 text-amber-300">for k, v in info.items():</div>
              <div className="pl-8 text-cyan-300">print(f"&#123;k&#125;: &#123;v&#125;")</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-mono">
              <span className="text-slate-600 block text-[11px]">Rendered **kwargs dict:</span>
              <div className="p-2 rounded bg-slate-900 text-amber-300 text-[11px] font-bold">
                profile(name="{kwargsDict.name}", age={kwargsDict.age}, role="{kwargsDict.role}")
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                ➔ info = &#123; "name": "{kwargsDict.name}", "age": {kwargsDict.age}, "role": "{kwargsDict.role}" &#125;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 09: VARIABLE SCOPE — LEGB RULE (Interactive Inspector)
  // =========================================================
  if (slide.id === 9) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        {/* LEGB 4 Pills Header */}
        <div className="grid grid-cols-4 gap-2">
          {(['L', 'E', 'G', 'B'] as const).map((tab) => {
            const getTitle = (t: string) => {
              if (t === 'L') return 'L - Local';
              if (t === 'E') return 'E - Enclosing';
              if (t === 'G') return 'G - Global';
              return 'B - Built-in';
            };

            return (
              <button
                key={tab}
                onClick={() => setActiveScopeTab(tab)}
                className={`py-2.5 px-2 rounded-xl font-mono text-xs font-bold border transition-all text-center cursor-pointer ${
                  activeScopeTab === tab 
                    ? 'bg-orange-500 text-white border-orange-400 shadow-md ring-2 ring-orange-400/30' 
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {getTitle(tab)}
              </button>
            );
          })}
        </div>

        {/* Tab Detail Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                SCOPE LAYER: {activeScopeTab === 'L' ? 'LOCAL' : activeScopeTab === 'E' ? 'ENCLOSING' : activeScopeTab === 'G' ? 'GLOBAL' : 'BUILT-IN'}
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">
                {activeScopeTab === 'L' && 'Inside the current function. Created when called, destroyed when function returns.'}
                {activeScopeTab === 'E' && 'In the enclosing (outer) function. Applies when functions are nested inside each other.'}
                {activeScopeTab === 'G' && 'At module (file) level. Accessible anywhere in the file. Requires `global` keyword to modify inside functions.'}
                {activeScopeTab === 'B' && 'Python pre-defined built-in names like print(), len(), range(), sum(), input().'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs font-medium">
              💡 Lookup Order: Python checks <strong>Local ➔ Enclosing ➔ Global ➔ Built-in</strong>. If not found in any, raises <code>NameError</code>!
            </div>
          </div>

          {/* Interactive Global Modification Code Box */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 shadow-md font-mono text-xs flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px]">
              <span className="text-amber-400 font-bold">MODIFIED GLOBAL VARIABLE DEMO</span>
              <span className="text-slate-500">count = {globalCount}</span>
            </div>

            <pre className="text-slate-200 leading-relaxed text-[11px]">
{`count = ${globalCount} # Global (G)

def update_count():
    global count # Declare intent to modify
    count = ${globalCount + 100} # Modifies global variable`}
            </pre>

            <button
              onClick={() => {
                const nextVal = globalCount + 100;
                setGlobalCount(nextVal);
                setScopeLog(`Called update_count() ➔ count is now ${nextVal}`);
              }}
              className="py-2 px-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5" /> Execute update_count() (+100)
            </button>

            <div className="text-[10px] text-slate-400 italic text-center border-t border-slate-800 pt-2">
              Log: {scopeLog}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 12: MAP() AND FILTER() FUNCTIONS (Interactive Visualizer)
  // =========================================================
  if (slide.id === 12) {
    const getMapOutput = () => sourceNumbers.map(x => x ** 2);
    const getFilterOutput = () => sourceNumbers.filter(x => x > 0);

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        {/* Toggle Mode */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setMapFilterMode('map')}
            className={`py-2 px-5 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
              mapFilterMode === 'map' ? 'bg-blue-600 text-white border-blue-400 shadow-md' : 'bg-white text-slate-700 border-slate-200'
            }`}
          >
            1. map(lambda x: x**2, numbers)
          </button>
          <button
            onClick={() => setMapFilterMode('filter')}
            className={`py-2 px-5 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
              mapFilterMode === 'filter' ? 'bg-orange-600 text-white border-orange-400 shadow-md' : 'bg-white text-slate-700 border-slate-200'
            }`}
          >
            2. filter(lambda x: x &gt; 0, numbers)
          </button>
        </div>

        {/* Visual Transformation Stage */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 shadow-md flex flex-col items-center justify-center gap-6 font-mono">
          {/* Source Array */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">numbers = [</span>
            {sourceNumbers.map((n, idx) => (
              <span key={idx} className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-200 text-xs">
                {n}
              </span>
            ))}
            <span className="text-xs text-slate-400">]</span>
          </div>

          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
            <ArrowRight className="w-5 h-5 animate-pulse" />
            <span>
              {mapFilterMode === 'map' ? 'Applies lambda x: x**2 to EVERY item' : 'Keeps items where lambda x: x > 0 is True'}
            </span>
          </div>

          {/* Result Array */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">
              {mapFilterMode === 'map' ? 'list(map(...)) = [' : 'list(filter(...)) = ['}
            </span>
            <AnimatePresence mode="wait">
              {(mapFilterMode === 'map' ? getMapOutput() : getFilterOutput()).map((res, idx) => (
                <motion.span
                  key={`${mapFilterMode}-${res}-${idx}`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center font-bold text-xs ${
                    mapFilterMode === 'map' 
                      ? 'bg-blue-600/30 border-blue-500 text-cyan-300' 
                      : 'bg-orange-600/30 border-orange-500 text-orange-300'
                  }`}
                >
                  {res}
                </motion.span>
              ))}
            </AnimatePresence>
            <span className="text-xs text-slate-400">]</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 14: FOR LOOPS & NESTED LOOPS IN DEPTH (Interactive 2D Matrix Traversal)
  // =========================================================
  if (slide.id === 14) {
    const handleNextStep = () => {
      if (matrixCol < 2) {
        setMatrixCol(matrixCol + 1);
      } else {
        setMatrixCol(0);
        setMatrixRow((matrixRow + 1) % 3);
      }
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Outer vs Inner explanation */}
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase">NESTED LOOPS MECHANICS</span>
              <p className="text-xs text-slate-700 leading-relaxed">
                For <strong>every single iteration of the outer loop</strong>, the inner loop completes <strong>ALL of its iterations</strong>!
              </p>
              <div className="p-3 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1">
                <div className="text-orange-400">for row in range(3): <span className="text-slate-500"># Outer (0,1,2)</span></div>
                <div className="pl-4 text-cyan-300">for col in range(3): <span className="text-slate-500"># Inner (0,1,2)</span></div>
                <div className="pl-8 text-white">print(f"(&#123;row&#125;, &#123;col&#125;)")</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
              ⚠️ Performance Note: 2 nested loops of size N take <strong>N × N iterations</strong> (O(N²)). Keep nesting shallow!
            </div>
          </div>

          {/* Right Column: 3x3 Matrix Step Simulator */}
          <div className="p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md flex flex-col justify-between gap-4 font-mono">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <GridIcon className="w-4 h-4" /> 3x3 MATRIX TRAVERSAL
              </span>
              <span className="text-cyan-300 text-[11px] font-bold">Active: ({matrixRow}, {matrixCol})</span>
            </div>

            {/* 3x3 Visual Grid */}
            <div className="grid grid-cols-3 gap-2.5 max-w-[240px] mx-auto w-full">
              {[0, 1, 2].map((r) =>
                [0, 1, 2].map((c) => {
                  const isActive = matrixRow === r && matrixCol === c;
                  return (
                    <motion.div
                      key={`${r}-${c}`}
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      className={`h-14 rounded-xl border flex flex-col items-center justify-center font-bold text-xs transition-all ${
                        isActive
                          ? 'bg-orange-500 border-orange-400 text-slate-950 ring-4 ring-orange-500/30'
                          : 'bg-slate-800/80 border-slate-700 text-slate-400'
                      }`}
                    >
                      <span className="text-[10px]">({r},{c})</span>
                    </motion.div>
                  );
                })
              )}
            </div>

            <button
              onClick={handleNextStep}
              className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" /> Step Next Iteration ➔
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Helper grid icon
  function GridIcon(props: any) {
    return (
      <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M3 15h18"/>
        <path d="M9 3v18"/>
        <path d="M15 3v18"/>
      </svg>
    );
  }

  // =========================================================
  // SLIDE 15: PYTHON STRING METHODS TOOLKIT (Interactive Laboratory)
  // =========================================================
  if (slide.id === 15) {
    const getTransformedStr = () => {
      if (activeStrAction === 'lower') return strInput.toLowerCase();
      if (activeStrAction === 'upper') return strInput.toUpperCase();
      if (activeStrAction === 'strip') return strInput.trim();
      if (activeStrAction === 'replace') return strInput.replace("Analyst", "Developer");
      if (activeStrAction === 'split') return JSON.stringify(strInput.trim().split(" "));
      if (activeStrAction === 'reverse') return strInput.trim().split("").reverse().join("");
      return strInput;
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-800 uppercase">TEST INPUT STRING:</span>
            <span className="text-[10px] font-mono text-slate-400">Length: {strInput.length} chars</span>
          </div>
          <input
            type="text"
            value={strInput}
            onChange={(e) => setStrInput(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 font-mono text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
          {[
            { id: 'lower', code: '.lower()' },
            { id: 'upper', code: '.upper()' },
            { id: 'strip', code: '.strip()' },
            { id: 'replace', code: '.replace()' },
            { id: 'split', code: '.split(" ")' },
            { id: 'reverse', code: '[::-1]' },
          ].map((act) => (
            <button
              key={act.id}
              onClick={() => setActiveStrAction(act.id)}
              className={`py-2 px-3 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
                activeStrAction === act.id 
                  ? 'bg-blue-600 text-white border-blue-400 shadow-md' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {act.code}
            </button>
          ))}
        </div>

        {/* Output Box */}
        <div className="p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md font-mono text-xs space-y-2">
          <div className="text-slate-400 text-[11px]"># Action Result:</div>
          <div className="text-cyan-300 font-bold text-sm">
            {getTransformedStr()}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 17: REAL-WORLD CAPSTONE PROJECTS (4 Cards)
  // =========================================================
  if (slide.id === 17) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* 1. Temp Converter */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Thermometer className="w-4 h-4 text-blue-600" /> Temperature Converter
            </h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
              <div>def celsius_to_f(c):</div>
              <div className="pl-4 text-cyan-300">return (c * 9/5) + 32</div>
            </div>
            <span className="text-[11px] text-slate-500">celsius_to_f(25) ➔ 77.0 °F</span>
          </div>

          {/* 2. Cart Total */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <ShoppingCart className="w-4 h-4 text-orange-600" /> Shopping Cart Total
            </h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
              <div>def cart_total(*prices, tax=0.05):</div>
              <div className="pl-4 text-amber-300">return sum(prices) * (1 + tax)</div>
            </div>
            <span className="text-[11px] text-slate-500">cart_total(10, 20, 15, tax=0.08) ➔ $48.60</span>
          </div>

          {/* 3. Palindrome */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Type className="w-4 h-4 text-purple-600" /> Palindrome Checker
            </h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
              <div>cleaned = text.lower().replace(" ", "")</div>
              <div className="text-purple-300">return cleaned == cleaned[::-1]</div>
            </div>
            <span className="text-[11px] text-slate-500">is_palindrome("Racecar") ➔ True</span>
          </div>

          {/* 4. Password Strength */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-600" /> Password Strength Checker
            </h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
              <div>has_digit = any(c.isdigit() for c in pwd)</div>
              <div className="text-emerald-300">return has_digit and len(pwd) &gt;= 8</div>
            </div>
            <span className="text-[11px] text-slate-500">check_password("Admin123") ➔ True</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 18: INTERACTIVE FUNCTION SANDBOX (Live Execution Lab)
  // =========================================================
  if (slide.id === 18) {
    const isPwdValid = () => {
      const hasDigit = pwdInput.split("").some(c => !isNaN(Number(c)));
      const hasUpper = pwdInput.split("").some(c => c >= 'A' && c <= 'Z');
      const isLongEnough = pwdInput.length >= 8;
      return hasDigit && hasUpper && isLongEnough;
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md flex flex-col justify-between gap-4 font-mono">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
            <span className="text-amber-400 font-bold flex items-center gap-1.5">
              <Terminal className="w-4 h-4" /> LIVE FUNCTION SANDBOX
            </span>
            <span className="text-slate-400 text-[11px]">Interactive Python Interpreter</span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs text-slate-400">Password Strength Checker Lab:</span>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={pwdInput}
                onChange={(e) => setPwdInput(e.target.value)}
                placeholder="Enter password..."
                className="flex-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px]">
              <div className={`p-2 rounded-lg border text-center font-bold ${pwdInput.length >= 8 ? 'bg-emerald-950/80 border-emerald-700 text-emerald-300' : 'bg-rose-950/80 border-rose-700 text-rose-300'}`}>
                len &gt;= 8: {pwdInput.length >= 8 ? '✓ Pass' : '❌ Fail'}
              </div>
              <div className={`p-2 rounded-lg border text-center font-bold ${pwdInput.split("").some(c => !isNaN(Number(c))) ? 'bg-emerald-950/80 border-emerald-700 text-emerald-300' : 'bg-rose-950/80 border-rose-700 text-rose-300'}`}>
                has digit: {pwdInput.split("").some(c => !isNaN(Number(c))) ? '✓ Pass' : '❌ Fail'}
              </div>
              <div className={`p-2 rounded-lg border text-center font-bold ${pwdInput.split("").some(c => c >= 'A' && c <= 'Z') ? 'bg-emerald-950/80 border-emerald-700 text-emerald-300' : 'bg-rose-950/80 border-rose-700 text-rose-300'}`}>
                has upper: {pwdInput.split("").some(c => c >= 'A' && c <= 'Z') ? '✓ Pass' : '❌ Fail'}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-center justify-between">
              <span className="text-slate-400">check_password("{pwdInput}"):</span>
              <span className={`font-bold px-3 py-1 rounded-full text-xs ${isPwdValid() ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'}`}>
                {isPwdValid() ? 'True (STRONG 🔒)' : 'False (WEAK ⚠️)'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 19: PYTHON FUNDAMENTALS SUMMARY MATRIX
  // =========================================================
  if (slide.id === 19) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="overflow-x-auto rounded-2xl bg-white border border-slate-200/90 shadow-sm">
          <table className="w-full text-left text-xs font-sans border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-mono text-[11px] uppercase tracking-wider">
                <th className="p-3 border-b border-slate-800">Session</th>
                <th className="p-3 border-b border-slate-800">Topic Area</th>
                <th className="p-3 border-b border-slate-800">Core Concepts & Keywords</th>
                <th className="p-3 border-b border-slate-800">Primary Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-mono font-bold text-blue-600">Session 09</td>
                <td className="p-3 font-bold">Python Fundamentals</td>
                <td className="p-3 font-mono text-[11px]">variables, int, float, str, type casting, operators</td>
                <td className="p-3 text-slate-600">Basic arithmetic, data store, type conversions</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-mono font-bold text-orange-600">Session 10</td>
                <td className="p-3 font-bold">Control Flow & Loops</td>
                <td className="p-3 font-mono text-[11px]">if, elif, else, while, break, continue, pass</td>
                <td className="p-3 text-slate-600">Decision making & condition-driven loops</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-mono font-bold text-purple-600">Session 11</td>
                <td className="p-3 font-bold">Data Structures</td>
                <td className="p-3 font-mono text-[11px]">lists, tuples, dicts, sets, slicing, comprehensions</td>
                <td className="p-3 text-slate-600">Grouping collections, key-value lookup, unique sets</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-blue-50/50">
                <td className="p-3 font-mono font-bold text-emerald-600">Session 12</td>
                <td className="p-3 font-bold">Functions & Strings</td>
                <td className="p-3 font-mono text-[11px]">def, return, LEGB scope, lambda, map/filter, nested loops, str methods</td>
                <td className="p-3 text-slate-600">Modular reusable code, scope control & text parsing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 20: OUTRO / THANK YOU (Matching Standard Session Outro Theme)
  // =========================================================
  if (slide.id === 20 || slide.type === 'outro-hero' || slide.type === 'outro' || slide.type === 'thank-you') {
    return (
      <ThankYouVisual 
        sessionNumber="12"
        nextSessionNote="🎉 Module 02 Complete! Next Module: 03 Python Libraries — NumPy Arrays, Pandas DataFrames & Data Visualizations"
        nextSessionButtonText="Module 03: Python Libraries"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
      />
    );
  }


  return null;
};
