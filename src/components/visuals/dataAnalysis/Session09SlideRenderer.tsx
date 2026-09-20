import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SlideData } from '../../../types';
import { InstantLogo } from '../../InstantLogo';
import { 
  Code2, 
  Database, 
  RefreshCw, 
  Sliders, 
  Sparkles, 
  ArrowRight, 
  Check, 
  X, 
  Terminal, 
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Calc,
  UserCheck
} from 'lucide-react';

interface Session09SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
}

export const Session09SlideRenderer: React.FC<Session09SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide
}) => {
  // Icon Mapping Helper
  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Database': return Database;
      case 'RefreshCw': return RefreshCw;
      case 'Sliders': return Sliders;
      case 'Terminal': return Terminal;
      default: return Sparkles;
    }
  };

  // ---------------------------------------------------------
  // INTERACTIVE STATES FOR WIDGETS
  // ---------------------------------------------------------
  // Slide 4: Syntax vs Semantics
  const [syntaxTab, setSyntaxTab] = useState<'correct' | 'wrong'>('correct');
  const [semanticsTab, setSemanticsTab] = useState<'correct' | 'wrong'>('correct');

  // Slide 5: Indentation
  const [indentTab, setIndentTab] = useState<'correct' | 'wrong'>('correct');

  // Slide 8: Variables
  const [varMode, setVarMode] = useState<'int' | 'str' | 'float'>('int');

  // Slide 9: Variable Naming Validator
  const [testVarName, setTestVarName] = useState('student_count');

  // Slide 12: Type Conversion Lab
  const [ageInput, setAgeInput] = useState('25');

  // Slide 14: Arithmetic Operators Calculator
  const [numA, setNumA] = useState(10);
  const [numB, setNumB] = useState(4);

  // Slide 15: Pass/Fail Logical Conditions
  const [score, setScore] = useState(85);
  const [attendance, setAttendance] = useState(90);

  // Helper function to validate Python variable name
  const validateVarName = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return { valid: false, reason: 'Variable name cannot be empty!' };
    if (/^[0-9]/.test(trimmed)) return { valid: false, reason: 'Cannot start with a digit! (e.g. 2nd_place)' };
    if (/-/ .test(trimmed)) return { valid: false, reason: 'Hyphens (-) are not allowed! Use underscores (_).' };
    const reserved = ['if', 'else', 'for', 'while', 'class', 'def', 'import', 'return', 'try', 'except', 'True', 'False', 'None', 'and', 'or', 'not', 'in', 'is', 'pass'];
    if (reserved.includes(trimmed)) return { valid: false, reason: `"${trimmed}" is a reserved Python keyword!` };
    if (/[^a-zA-Z0-9_]/.test(trimmed)) return { valid: false, reason: 'Can only contain letters, numbers, and underscores.' };
    return { valid: true, reason: 'Perfect! Valid Python snake_case variable name.' };
  };

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE (Dark Theme)
  // =========================================================
  if (slide.id === 1) {
    const stats = [
      { val: '4 Modules', label: 'Core Topics', sub: 'Syntax • Types • Cast • Ops' },
      { val: '16 Slides', label: 'Curriculum Depth', sub: 'Python 3.12 Fundamentals' },
      { val: 'Hands-on', label: 'Code Examples', sub: 'PEP 8 Standards & Logic' }
    ];

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 text-center bg-transparent text-white overflow-hidden select-none">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Floating Node Badges */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-[6%] sm:left-[12%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-blue-500/50 text-blue-400 text-xs backdrop-blur-md shadow-xl"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Syntax & Indentation</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 right-[6%] sm:right-[12%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-cyan-500/50 text-cyan-400 text-xs backdrop-blur-md shadow-xl"
          >
            <Database className="w-3.5 h-3.5" />
            <span>Variables & Data Types</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-4 left-[4%] sm:left-[10%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/50 text-emerald-400 text-xs backdrop-blur-md shadow-xl"
          >
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-emerald-400">Type Casting & Conversion</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-4 right-[4%] sm:right-[10%] flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-purple-500/50 text-purple-400 text-xs backdrop-blur-md shadow-xl"
          >
            <Sliders className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-semibold text-purple-400">Arithmetic & Logic Operators</span>
          </motion.div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl sm:max-w-3xl flex flex-col items-center my-auto"
        >
          {/* InstantLogo */}
          <div className="mb-4 sm:mb-5">
            <InstantLogo isDark={true} className="h-6 sm:h-7" />
          </div>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold mb-3 backdrop-blur-sm font-mono">
            <Sparkles className="w-4 h-4 text-[#FE862A]" />
            <span>02_PYTHON_FUNDAMENTALS • SESSION 1</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-3">
            PYTHON <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-400">FUNDAMENTALS</span>
          </h1>

          {/* Orange Underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-3 shadow-sm" />

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-2xl mb-6 leading-relaxed">
            Syntax · Variables · Data Types · Type Casting · Operators
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 w-full max-w-2xl mb-6 items-stretch">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex flex-col justify-center items-center hover:border-blue-500/40 transition-colors"
              >
                <div className="text-lg sm:text-2xl font-black text-white mb-0.5">{s.val}</div>
                <div className="text-xs sm:text-sm font-bold text-blue-400 mb-0.5">{s.label}</div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium">{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Start CTA Button */}
          {onNext && (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onNext}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer"
            >
              <span>Start Session 09</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 02: TABLE OF CONTENTS (Dark Theme with Navigation)
  // =========================================================
  if (slide.id === 2) {
    // Slide index mappings for sections: Section 1 -> Slide 3 (idx 2), Section 2 -> Slide 7 (idx 6), Section 3 -> Slide 11 (idx 10), Section 4 -> Slide 13 (idx 12)
    const sectionSlideIndices = [2, 6, 10, 12];

    return (
      <div className="w-full h-full flex flex-col justify-center px-2 py-1 select-none">
        <div className="text-center mb-4">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/60">
            Interactive Agenda & Navigation
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
          {(slide.cards || []).map((card, idx) => {
            const IconComp = getIconComponent(card.iconName);
            const targetSlideIdx = sectionSlideIndices[idx];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                onClick={() => onSelectSlide?.(targetSlideIdx)}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 hover:bg-slate-850 transition-all flex flex-col justify-between group shadow-lg cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-black text-[#FE862A] tracking-wider font-mono">
                      0{idx + 1}
                    </span>
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-blue-400" />
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================
  // SECTION DIVIDER SLIDES (Slides 3, 7, 11, 13 - Dark)
  // =========================================================
  if (slide.type === 'section-divider') {
    const dividerIcons: Record<number, any> = {
      3: Code2,
      7: Database,
      11: RefreshCw,
      13: Sliders
    };
    const IconComp = dividerIcons[slide.id] || Sparkles;

    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-10 select-none overflow-hidden bg-transparent text-white">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-80 h-80 rounded-full blur-3xl bg-blue-600/20 pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-2xl flex flex-col items-center my-auto"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-4 ring-4 ring-orange-500/20">
            <IconComp className="w-8 h-8 text-white" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold mb-3">
            {slide.partNumber || 'SECTION'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            {slide.sectionTitle || slide.mainTitle}
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          {slide.subtitle && (
            <p className="text-sm sm:text-base text-slate-300 font-medium max-w-xl leading-relaxed">
              {slide.subtitle}
            </p>
          )}
        </motion.div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 04: SYNTAX VS SEMANTICS (Interactive Light Theme)
  // =========================================================
  if (slide.id === 4) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 items-stretch">
          {/* Syntax Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                  <Code2 className="w-4 h-4 text-blue-600" />
                  <span>SYNTAX</span>
                </div>
                <div className="flex gap-1 bg-slate-100 p-0.5 rounded-lg text-[10px] font-mono">
                  <button 
                    onClick={() => setSyntaxTab('correct')}
                    className={`px-2 py-0.5 rounded ${syntaxTab === 'correct' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600'}`}
                  >
                    Valid
                  </button>
                  <button 
                    onClick={() => setSyntaxTab('wrong')}
                    className={`px-2 py-0.5 rounded ${syntaxTab === 'wrong' ? 'bg-red-600 text-white font-bold' : 'text-slate-600'}`}
                  >
                    Error
                  </button>
                </div>
              </div>

              <h4 className="text-sm font-bold text-slate-900 mb-1">Grammar & Structural Rules</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                The rules that define correctly structured programs. It's about the correct arrangement of words and symbols.
              </p>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-3 italic">
                Analogy: Grammar in a sentence. "Python is fun" follows grammar rules.
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              {syntaxTab === 'correct' ? (
                <div className="p-3 rounded-xl bg-slate-900 text-slate-100 border border-emerald-500/40">
                  <div className="text-[10px] text-emerald-400 font-bold mb-1 flex items-center justify-between">
                    <span># CORRECT SYNTAX (Colon + Indentation)</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div><span className="text-purple-400">if</span> x &gt; <span className="text-amber-400">10</span>:</div>
                  <div className="pl-4 text-emerald-300">print(<span className="text-amber-300">"Big!"</span>)</div>
                  <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-emerald-400">
                    ➔ Python Interpreter: Clean compilation
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-slate-900 text-slate-100 border border-red-500/40">
                  <div className="text-[10px] text-red-400 font-bold mb-1 flex items-center justify-between">
                    <span># WRONG (Missing Colon :)</span>
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div><span className="text-purple-400">if</span> x &gt; <span className="text-amber-400">10</span></div>
                  <div className="text-slate-400">print(<span className="text-amber-300">"Big!"</span>)</div>
                  <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-red-400 font-bold">
                    SyntaxError: expected ':'
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Semantics Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>SEMANTICS</span>
                </div>
                <div className="flex gap-1 bg-slate-100 p-0.5 rounded-lg text-[10px] font-mono">
                  <button 
                    onClick={() => setSemanticsTab('correct')}
                    className={`px-2 py-0.5 rounded ${semanticsTab === 'correct' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600'}`}
                  >
                    Valid
                  </button>
                  <button 
                    onClick={() => setSemanticsTab('wrong')}
                    className={`px-2 py-0.5 rounded ${semanticsTab === 'wrong' ? 'bg-red-600 text-white font-bold' : 'text-slate-600'}`}
                  >
                    Error
                  </button>
                </div>
              </div>

              <h4 className="text-sm font-bold text-slate-900 mb-1">Meaning & Execution Logic</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                The meaning or interpretation of the code. It's about what the code does when it runs.
              </p>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-3 italic">
                Analogy: The meaning of a sentence. "Python is fun" means you enjoy coding.
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              {semanticsTab === 'correct' ? (
                <div className="p-3 rounded-xl bg-slate-900 text-slate-100 border border-emerald-500/40">
                  <div className="text-[10px] text-emerald-400 font-bold mb-1 flex items-center justify-between">
                    <span># CORRECT SEMANTICS (int + int)</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>x = <span className="text-amber-400">5</span> + <span className="text-amber-400">3</span></div>
                  <div>print(x)</div>
                  <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-emerald-400">
                    ➔ Console Output: 8
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-slate-900 text-slate-100 border border-red-500/40">
                  <div className="text-[10px] text-red-400 font-bold mb-1 flex items-center justify-between">
                    <span># SEMANTIC ERROR (str + int)</span>
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>print(<span className="text-amber-300">"5"</span> + <span className="text-amber-400">3</span>)</div>
                  <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-red-400 font-bold">
                    TypeError: can only concatenate str (not "int") to str
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: PYTHON INDENTATION (Interactive Light Theme)
  // =========================================================
  if (slide.id === 5) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm mb-3 flex items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Unlike C++ or Java that use braces {}, Python uses <strong className="text-blue-700">indentation</strong>. All statements in a block must be indented at the same level.
          </p>
          <div className="flex gap-1.5 shrink-0 bg-white p-1 rounded-xl border border-slate-200 text-xs font-mono">
            <button
              onClick={() => setIndentTab('correct')}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                indentTab === 'correct' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              ✓ Correct (4 Spaces)
            </button>
            <button
              onClick={() => setIndentTab('wrong')}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                indentTab === 'wrong' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              ✗ Wrong Indent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 items-stretch mb-3">
          {/* Code Viewer Panel */}
          <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs shadow-sm flex flex-col justify-between border border-slate-800">
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold pb-2 mb-2 border-b border-slate-800">
                <span className="text-slate-400">script.py</span>
                {indentTab === 'correct' ? (
                  <span className="text-emerald-400 flex items-center gap-1"><Check className="w-3.5 h-3.5" /> PEP 8 Valid</span>
                ) : (
                  <span className="text-red-400 flex items-center gap-1"><X className="w-3.5 h-3.5" /> IndentationError</span>
                )}
              </div>

              {indentTab === 'correct' ? (
                <div className="space-y-1.5 leading-relaxed">
                  <div>age = <span className="text-amber-400">18</span></div>
                  <div className="pt-1"><span className="text-purple-400">if</span> age &gt;= <span className="text-amber-400">18</span>:</div>
                  <div className="pl-4 text-emerald-300">print(<span className="text-amber-300">"Adult"</span>)</div>
                  <div className="pl-4 text-emerald-300">can_vote = <span className="text-blue-400">True</span></div>
                  <div><span className="text-purple-400">else</span>:</div>
                  <div className="pl-4 text-emerald-300">print(<span className="text-amber-300">"Minor"</span>)</div>
                  <div className="pl-4 text-emerald-300">can_vote = <span className="text-blue-400">False</span></div>
                </div>
              ) : (
                <div className="space-y-1.5 leading-relaxed">
                  <div>age = <span className="text-amber-400">18</span></div>
                  <div className="pt-1"><span className="text-purple-400">if</span> age &gt;= <span className="text-amber-400">18</span>:</div>
                  <div className="pl-2 text-red-400 bg-red-950/50 px-1 rounded">print(<span className="text-amber-300">"Adult"</span>) <span className="text-red-500 font-bold"># Error!</span></div>
                  <div className="pl-6 text-red-400 bg-red-950/50 px-1 rounded">can_vote = <span className="text-blue-400">True</span> <span className="text-red-500 font-bold"># Inconsistent!</span></div>
                  <div><span className="text-purple-400">else</span>:</div>
                  <div className="pl-8 text-red-400 bg-red-950/50 px-1 rounded">print(<span className="text-amber-300">"Minor"</span>) <span className="text-red-500 font-bold"># Wrong level!</span></div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              Tip: Most editors automatically convert Tab to 4 spaces.
            </div>
          </div>

          {/* Live Terminal Output Simulation */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase mb-3 font-mono">
                <Terminal className="w-4 h-4 text-blue-600" />
                <span>TERMINAL OUTPUT SIMULATOR</span>
              </div>

              {indentTab === 'correct' ? (
                <div className="p-4 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs space-y-2 border border-slate-800 shadow-inner">
                  <div className="text-slate-500">$ python script.py</div>
                  <div className="text-white font-bold text-sm">Adult</div>
                  <div className="text-slate-400 text-[11px] pt-2 border-t border-slate-800">
                    Process finished with exit code 0
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-950 text-red-400 font-mono text-xs space-y-2 border border-slate-800 shadow-inner">
                  <div className="text-slate-500">$ python script.py</div>
                  <div className="text-red-400 font-bold">
                    IndentationError: expected an indented block after 'if' statement on line 2
                  </div>
                  <div className="text-slate-400 text-[11px] pt-2 border-t border-slate-800">
                    Process finished with exit code 1 (Error)
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
              <strong className="text-amber-800">PEP 8 STANDARD:</strong> Always use 4 spaces per indentation level. Mixing tabs and spaces leads to hard-to-find bugs!
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 06: COMMENTS (Light Theme)
  // =========================================================
  if (slide.id === 6) {
    const practices = [
      'Explain why, not what — code shows what, comments explain reasoning',
      'Use docstrings (""") for functions and modules',
      'Keep comments up to date — outdated comments are worse than none',
      'Don\'t state the obvious — # increment i is redundant',
      'Comment complex logic — if it took time to figure out, comment it'
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-blue-700 uppercase mb-2 font-mono flex items-center justify-between">
              <span>Single-Line Comment (#)</span>
              <span className="text-[10px] text-slate-400">Ignored by Python</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-1">
              <div className="text-slate-400"># This is a single-line comment</div>
              <div>price = <span className="text-amber-400">99.99</span> <span className="text-slate-400"># Price in USD</span></div>
              <div className="pt-2 text-slate-400"># You can also comment out code:</div>
              <div className="text-slate-400"># print("This won't run")</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-purple-700 uppercase mb-2 font-mono flex items-center justify-between">
              <span>Multi-Line Docstring (""")</span>
              <span className="text-[10px] text-slate-400">Documentation</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-1">
              <div className="text-amber-300">"""</div>
              <div className="text-amber-200">This is a multi-line comment.</div>
              <div className="text-amber-200">Used for docstrings and</div>
              <div className="text-amber-200">longer explanations.</div>
              <div className="text-amber-300">"""</div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-[#FE862A] uppercase mb-2">5 COMMENTING BEST PRACTICES</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
            {practices.map((p, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 08: WHAT ARE VARIABLES (Interactive Light Theme)
  // =========================================================
  if (slide.id === 8) {
    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm mb-3">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            Variables are containers for storing data. In Python, you <strong>don't declare the type</strong> — just assign a value and Python creates the variable automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 flex-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="text-xs font-bold text-blue-700 uppercase mb-2 font-mono">ASSIGNMENT & MULTIPLE ASSIGNMENT</div>
            <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-1.5 leading-relaxed">
              <div className="text-slate-400"># Create variables by assigning values</div>
              <div>name = <span className="text-amber-300">"Alice"</span> <span className="text-slate-400"># String</span></div>
              <div>age = <span className="text-amber-400">25</span> <span className="text-slate-400"># Integer</span></div>
              <div>pi = <span className="text-amber-400">3.14159</span> <span className="text-slate-400"># Float</span></div>
              <div>is_active = <span className="text-blue-400">True</span> <span className="text-slate-400"># Boolean</span></div>
              <div className="pt-1 text-slate-400"># Multiple assignment & value swap</div>
              <div>x, y, z = <span className="text-amber-400">10</span>, <span className="text-amber-400">20</span>, <span className="text-amber-400">30</span></div>
              <div>x, y = y, x <span className="text-emerald-400"># Swapped!</span></div>
            </div>
          </div>

          {/* Interactive Dynamic Typing Simulator */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold text-purple-700 uppercase font-mono">DYNAMIC TYPING LAB</div>
                <div className="flex gap-1 bg-slate-100 p-0.5 rounded-lg text-[10px] font-mono">
                  <button onClick={() => setVarMode('int')} className={`px-2 py-0.5 rounded ${varMode === 'int' ? 'bg-blue-600 text-white font-bold' : 'text-slate-600'}`}>int</button>
                  <button onClick={() => setVarMode('str')} className={`px-2 py-0.5 rounded ${varMode === 'str' ? 'bg-purple-600 text-white font-bold' : 'text-slate-600'}`}>str</button>
                  <button onClick={() => setVarMode('float')} className={`px-2 py-0.5 rounded ${varMode === 'float' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600'}`}>float</button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-2 border border-slate-800">
                {varMode === 'int' && (
                  <>
                    <div>data = <span className="text-amber-400">42</span></div>
                    <div>print(type(data)) <span className="text-amber-300"># &lt;class 'int'&gt;</span></div>
                  </>
                )}
                {varMode === 'str' && (
                  <>
                    <div>data = <span className="text-amber-300">"hello"</span></div>
                    <div>print(type(data)) <span className="text-amber-300"># &lt;class 'str'&gt;</span></div>
                  </>
                )}
                {varMode === 'float' && (
                  <>
                    <div>data = <span className="text-amber-400">3.14</span></div>
                    <div>print(type(data)) <span className="text-amber-300"># &lt;class 'float'&gt;</span></div>
                  </>
                )}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 font-medium mt-2">
              <strong>KEY CONCEPT:</strong> Python variables are dynamic labels pointing to values in memory. The same variable name can hold an <code className="text-blue-700">int</code> then later a <code className="text-purple-700">str</code>!
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 09: NAMING RULES (Interactive Light Theme)
  // =========================================================
  if (slide.id === 9) {
    const rules = [
      'Must start with a letter or underscore ( _ )',
      'Can contain letters, numbers, and underscores only',
      'Case-sensitive: Name and name are different',
      'Cannot use reserved keywords (if, for, class, etc.)',
      'Use snake_case for variable names'
    ];

    const validation = validateVarName(testVarName);

    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 flex-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-blue-700 uppercase mb-2 font-mono">THE RULES</div>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                {rules.map((r, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Variable Name Tester */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-slate-800 uppercase mb-2 font-mono">INTERACTIVE NAME VALIDATOR</div>
              <p className="text-xs text-slate-600 mb-2 font-medium">Type any variable name to test Python rules:</p>

              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={testVarName}
                  onChange={(e) => setTestVarName(e.target.value)}
                  placeholder="e.g. total_score"
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-mono text-slate-900 focus:outline-none focus:border-blue-500 font-bold"
                />
              </div>

              <div className={`p-3 rounded-xl border text-xs font-medium ${
                validation.valid ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-red-50 border-red-200 text-red-900'
              }`}>
                <div className="flex items-center gap-1.5 font-bold mb-0.5">
                  {validation.valid ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-red-600" />}
                  <span>{validation.valid ? 'VALID VARIABLE NAME' : 'INVALID VARIABLE NAME'}</span>
                </div>
                <div className="text-[11px] font-mono">{validation.reason}</div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Quick Presets: 
              <button onClick={() => setTestVarName('user_name')} className="ml-1 text-blue-600 hover:underline">user_name</button> • 
              <button onClick={() => setTestVarName('2nd_place')} className="ml-1 text-red-600 hover:underline">2nd_place</button> • 
              <button onClick={() => setTestVarName('class')} className="ml-1 text-red-600 hover:underline">class</button>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong className="text-amber-800">PRO TIP:</strong> Choose descriptive names that explain what the variable holds. <code className="bg-white px-2 py-0.5 rounded border border-amber-200 font-mono text-amber-800">student_count</code> is better than <code className="bg-white px-2 py-0.5 rounded border border-amber-200 font-mono text-amber-800">n</code>. Use UPPER_CASE for constants.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 10: BASIC DATA TYPES (Light Theme)
  // =========================================================
  if (slide.id === 10) {
    const types = [
      {
        name: 'int',
        desc: 'Whole numbers, positive or negative',
        code: ['x = 42', 'y = -7', 'z = 0', 'type(x) # <class \'int\'>'],
        color: 'text-blue-700',
        bg: 'bg-blue-50',
        border: 'border-blue-200'
      },
      {
        name: 'float',
        desc: 'Decimal numbers with a point',
        code: ['pi = 3.14', 'temp = -5.5', 'sci = 2.5e3', 'type(pi) # <class \'float\'>'],
        color: 'text-purple-700',
        bg: 'bg-purple-50',
        border: 'border-purple-200'
      },
      {
        name: 'str',
        desc: 'Text inside quotes (single or double)',
        code: ['name = "Ali"', 'msg = \'Hi!\'', 'big = """OK"""', 'type(name) # <class \'str\'>'],
        color: 'text-emerald-700',
        bg: 'bg-emerald-50',
        border: 'border-emerald-200'
      },
      {
        name: 'bool',
        desc: 'True or False values only',
        code: ['ok = True', 'done = False', 'check = 5 > 3', 'type(ok) # <class \'bool\'>'],
        color: 'text-amber-700',
        bg: 'bg-amber-50',
        border: 'border-amber-200'
      }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-3">
          {types.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`p-4 rounded-2xl bg-white border ${t.border} shadow-sm flex flex-col justify-between`}
            >
              <div>
                <div className={`p-1.5 rounded-lg ${t.bg} ${t.color} font-mono font-bold text-sm w-fit mb-2`}>
                  #{t.name}
                </div>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed font-medium">
                  {t.desc}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-[11px] space-y-1">
                {t.code.map((c, i) => (
                  <div key={i} className={c.includes('class') ? 'text-amber-400 font-bold' : 'text-slate-300'}>{c}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
          <strong className="text-slate-900 uppercase tracking-wider block mb-1">WHY DATA TYPES MATTER:</strong>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 font-medium">
            <div>• <strong>Memory efficiency:</strong> int uses less memory than float.</div>
            <div>• <strong>Correct operations:</strong> prevents adding str to int bugs.</div>
            <div>• <strong>Data validation:</strong> verifies inputs before calculating.</div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 12: TYPE CONVERSION (Interactive Light Theme)
  // =========================================================
  if (slide.id === 12) {
    const funcs = [
      { fn: 'int()', to: 'Integer', ex: 'int("42") ➔ 42' },
      { fn: 'float()', to: 'Float', ex: 'float("3.14") ➔ 3.14' },
      { fn: 'str()', to: 'String', ex: 'str(100) ➔ "100"' },
      { fn: 'bool()', to: 'Boolean', ex: 'bool(1) ➔ True, bool("") ➔ False' }
    ];

    const parsedAge = parseInt(ageInput, 10);
    const validAge = !isNaN(parsedAge) && parsedAge >= 0 && parsedAge <= 120;
    const calculatedBirthYear = validAge ? 2026 - parsedAge : null;

    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-3">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white font-bold">
                <th className="p-2.5 border-r border-blue-500">Function</th>
                <th className="p-2.5 border-r border-blue-500">Converts To</th>
                <th className="p-2.5">Example</th>
              </tr>
            </thead>
            <tbody>
              {funcs.map((r, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="p-2.5 font-mono font-bold text-blue-700 border-r border-slate-200">{r.fn}</td>
                  <td className="p-2.5 border-r border-slate-200 text-slate-800 font-semibold">{r.to}</td>
                  <td className="p-2.5 font-mono text-emerald-700 font-bold">{r.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {/* Interactive User Input Type Conversion Lab */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold text-blue-700 uppercase font-mono">INTERACTIVE CONVERSION LAB</div>
                <span className="text-[10px] text-slate-400">User Input Is Always String!</span>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <label className="text-xs font-medium text-slate-700">Enter age (str):</label>
                <input
                  type="text"
                  value={ageInput}
                  onChange={(e) => setAgeInput(e.target.value)}
                  className="w-20 bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-mono text-center font-bold text-blue-700 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-1.5">
                <div>age_str = input(<span className="text-amber-300">"Your age: "</span>) <span className="text-slate-400"># "{ageInput}"</span></div>
                <div>print(type(age_str)) <span className="text-amber-300"># &lt;class 'str'&gt;</span></div>
                <div className="text-slate-400 pt-1"># Convert to int for math</div>
                <div>age = <span className="text-blue-400">int</span>(age_str) <span className="text-emerald-400"># {validAge ? parsedAge : 'Error!'}</span></div>
                <div>birth_year = <span className="text-amber-400">2026</span> - age <span className="text-emerald-400"># {validAge ? calculatedBirthYear : 'NaN'}</span></div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="text-xs font-bold text-purple-700 uppercase mb-2 font-mono">IMPLICIT CONVERSION</div>
            <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-1.5">
              <div className="text-slate-400"># Python auto-converts int + float</div>
              <div>result = <span className="text-amber-400">5</span> + <span className="text-amber-400">3.2</span></div>
              <div>print(result) <span className="text-emerald-400"># 8.2</span></div>
              <div>print(type(result)) <span className="text-amber-400"># &lt;class 'float'&gt;</span></div>
              <div className="text-red-400 pt-1"># But str + int raises TypeError!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 14: ARITHMETIC OPERATORS (Interactive Light Theme)
  // =========================================================
  if (slide.id === 14) {
    const ops = [
      { op: '+', name: 'Addition', desc: 'Adds two values', calc: (a: number, b: number) => a + b },
      { op: '-', name: 'Subtraction', desc: 'Subtracts right from left', calc: (a: number, b: number) => a - b },
      { op: '*', name: 'Multiplication', desc: 'Multiplies two values', calc: (a: number, b: number) => a * b },
      { op: '/', name: 'Division', desc: 'Divides, returns float', calc: (a: number, b: number) => b !== 0 ? (a / b).toFixed(2) : 'Error' },
      { op: '//', name: 'Floor Division', desc: 'Divides, rounds down', calc: (a: number, b: number) => b !== 0 ? Math.floor(a / b) : 'Error' },
      { op: '%', name: 'Modulus', desc: 'Returns remainder', calc: (a: number, b: number) => b !== 0 ? a % b : 'Error' },
      { op: '**', name: 'Exponentiation', desc: 'Raises to power', calc: (a: number, b: number) => Math.pow(a, b) }
    ];

    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        {/* Interactive Number Inputs */}
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase font-mono">
            <Sliders className="w-4 h-4 text-blue-600" />
            <span>Interactive Math Simulator</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono font-bold">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-600">A =</span>
              <input
                type="number"
                value={numA}
                onChange={(e) => setNumA(Number(e.target.value))}
                className="w-16 bg-white border border-slate-300 rounded-lg px-2 py-1 text-center font-bold text-blue-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-slate-600">B =</span>
              <input
                type="number"
                value={numB}
                onChange={(e) => setNumB(Number(e.target.value))}
                className="w-16 bg-white border border-slate-300 rounded-lg px-2 py-1 text-center font-bold text-purple-700 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm mb-3">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white font-bold">
                <th className="p-2 border-r border-blue-500 text-center">Operator</th>
                <th className="p-2 border-r border-blue-500">Name</th>
                <th className="p-2 border-r border-blue-500">Description</th>
                <th className="p-2">Live Expression Result ({numA}, {numB})</th>
              </tr>
            </thead>
            <tbody>
              {ops.map((r, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="p-2 font-mono font-bold text-blue-700 text-center border-r border-slate-200 bg-blue-50/50">{r.op}</td>
                  <td className="p-2 font-bold text-slate-800 border-r border-slate-200">{r.name}</td>
                  <td className="p-2 border-r border-slate-200 text-slate-600 font-medium">{r.desc}</td>
                  <td className="p-2 font-mono text-emerald-700 font-bold">
                    {numA} {r.op} {numB} ➔ <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">{r.calc(numA, numB)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
          <strong className="text-amber-800 uppercase tracking-wider block mb-1">COMMON USE CASES:</strong>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-mono">
            <div>• <code className="bg-white px-1.5 py-0.5 rounded border border-amber-200 text-amber-900">//</code> floor div for splitting items evenly</div>
            <div>• <code className="bg-white px-1.5 py-0.5 rounded border border-amber-200 text-amber-900">%</code> modulus for even/odd: <span className="text-blue-700 font-bold">n % 2 == 0</span></div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 15: COMPARISON & LOGICAL OPERATORS (Interactive Light Theme)
  // =========================================================
  if (slide.id === 15) {
    const compOps = [
      { op: '==', name: 'Equal to', ex: '5 == 5 ➔ True' },
      { op: '!=', name: 'Not equal to', ex: '5 != 3 ➔ True' },
      { op: '>', name: 'Greater than', ex: '7 > 4 ➔ True' },
      { op: '<', name: 'Less than', ex: '3 < 8 ➔ True' },
      { op: '>=', name: 'Greater or equal', ex: '5 >= 5 ➔ True' },
      { op: '<=', name: 'Less or equal', ex: '4 <= 4 ➔ True' }
    ];

    const logicOps = [
      { op: 'and', name: 'Both must be True', ex: 'True and False ➔ False' },
      { op: 'and', name: 'Both must be True', ex: '5>3 and 2<4 ➔ True' },
      { op: 'or', name: 'At least one True', ex: 'True or False ➔ True' },
      { op: 'or', name: 'At least one True', ex: '5>10 or 3<7 ➔ True' },
      { op: 'not', name: 'Reverses the value', ex: 'not True ➔ False' },
      { op: 'not', name: 'Reverses the value', ex: 'not(5 == 3) ➔ True' }
    ];

    const isScoreValid = score >= 60;
    const isAttendanceValid = attendance >= 80;
    const isPassed = isScoreValid && isAttendanceValid;

    return (
      <div className="w-full h-full flex flex-col justify-between py-1 px-2 max-w-5xl mx-auto select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          {/* Comparison */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-2 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider text-center">Comparison Operators</div>
            <table className="w-full text-xs text-left border-collapse">
              <tbody>
                {compOps.map((r, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="p-2 font-mono font-bold text-blue-700 border-r border-slate-200">{r.op}</td>
                    <td className="p-2 border-r border-slate-200 text-slate-700 font-medium">{r.name}</td>
                    <td className="p-2 font-mono text-emerald-700 font-bold">{r.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Logical */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-2 bg-purple-600 text-white font-bold text-xs uppercase tracking-wider text-center">Logical Operators</div>
            <table className="w-full text-xs text-left border-collapse">
              <tbody>
                {logicOps.map((r, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="p-2 font-mono font-bold text-purple-700 border-r border-slate-200">{r.op}</td>
                    <td className="p-2 border-r border-slate-200 text-slate-700 font-medium">{r.name}</td>
                    <td className="p-2 font-mono text-emerald-700 font-bold">{r.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Pass/Fail Decision Logic Simulator */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex-1 space-y-3 w-full">
            <div className="flex items-center justify-between">
              <span className="text-slate-700 font-bold font-sans">Interactive Student Pass Condition:</span>
              <span className="text-purple-700 font-bold">score &gt;= 60 AND attendance &gt;= 80</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                  <span>score = {score}</span>
                  <span className={isScoreValid ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold'}>
                    {isScoreValid ? '✓ >= 60' : '✗ < 60'}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={score}
                  onChange={(e) => setScore(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                  <span>attendance = {attendance}</span>
                  <span className={isAttendanceValid ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold'}>
                    {isAttendanceValid ? '✓ >= 80' : '✗ < 80'}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={attendance}
                  onChange={(e) => setAttendance(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className={`p-3.5 rounded-xl border text-center shrink-0 w-full md:w-44 ${
            isPassed ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-red-50 border-red-300 text-red-900'
          }`}>
            <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5">passed =</div>
            <div className="text-base font-black font-mono">
              {isPassed ? 'True' : 'False'}
            </div>
            <div className="text-[10px] font-sans font-bold mt-0.5">
              {isPassed ? '🎓 Student Passes!' : '❌ Student Fails'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 16: OUTRO / KEEP CODING (Dark Theme)
  // =========================================================
  if (slide.type === 'outro' || slide.id === 16) {
    return (
      <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-4 sm:p-8 select-none bg-transparent text-white overflow-hidden">
        <div className="relative z-10 flex items-center justify-center my-auto flex-col text-center max-w-3xl mx-auto w-full">
          {/* Orange gradient icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 mb-5 ring-4 ring-orange-500/20">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Main title */}
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            KEEP CODING!
          </h1>

          {/* Orange underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-2xl mb-6 leading-relaxed">
            Practice makes perfect. Try writing your own variables, experiment with data types, and build expressions with operators.
          </p>

          {/* Next session box */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-orange-400 font-mono text-sm font-bold shadow-xl">
            <span>Next Session: Control Flow — if/else statements and loops</span>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-center text-xs text-slate-500 font-mono pt-3 border-t border-slate-800/80 w-full max-w-md">
          Instant Academy • Data Analysis Training Program
        </div>
      </div>
    );
  }

  // Default Fallback
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-700">
      <h3 className="text-lg font-bold text-slate-900 mb-2">{slide.mainTitle}</h3>
      <p className="text-xs text-slate-600">{slide.subtitle}</p>
    </div>
  );
};
