import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../../../types';
import { InstantLogo } from '../../InstantLogo';
import { ThankYouVisual } from './ThankYouVisual';
import { HeroCoverVisual } from './HeroCoverVisual';
import { 
  List, 
  Lock, 
  BookOpen, 
  Shapes, 
  Sparkles, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  Code2, 
  Check, 
  X, 
  Plus, 
  Trash2, 
  ArrowUpDown, 
  AlertTriangle, 
  Zap, 
  Layers, 
  Search, 
  Database, 
  HelpCircle,
  Hash,
  Shield,
  Filter,
  BarChart2
} from 'lucide-react';

interface Session11SlideRendererProps {
  slide: SlideData;
  onNext?: () => void;
  onSelectSlide?: (index: number) => void;
  onSwitchSession?: (sessionId: any) => void;
}

export const Session11SlideRenderer: React.FC<Session11SlideRendererProps> = ({
  slide,
  onNext,
  onSelectSlide,
  onSwitchSession
}) => {
  // ---------------------------------------------------------
  // INTERACTIVE STATES FOR WIDGETS
  // ---------------------------------------------------------

  // Slide 5: Interactive Indexing Explorer
  const initialItems = ["A", "B", "C", "D", "E"];
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeSlice, setActiveSlice] = useState<'1:4' | ':3' | '2:' | 'all'>('all');

  // Slide 6: Interactive List Toolkit
  const [taskList, setTaskList] = useState<string[]>(["read", "code", "test"]);
  const [lastActionLog, setLastActionLog] = useState<string>('Initial list: ["read", "code", "test"]');

  // Slide 10: Interactive Tuple Mutation Error Tester
  const [showTypeError, setShowTypeError] = useState<boolean>(false);

  // Slide 13: Interactive Dictionary Lookup
  const [userDict, setUserDict] = useState<Record<string, any>>({
    name: "Alice",
    age: 25,
    city: "Cairo"
  });
  const [queriedKey, setQueriedKey] = useState<string>('name');
  const [newKey, setNewKey] = useState<string>('');
  const [newVal, setNewVal] = useState<string>('');

  // Slide 15: Interactive Word Frequency Counter
  const [inputText, setInputText] = useState<string>("the cat and the hat");

  // Slide 18: Interactive Set Operations Visualizer
  const setA = [1, 2, 3, 4];
  const setB = [3, 4, 5, 6];
  const [activeSetOp, setActiveSetOp] = useState<'union' | 'intersection' | 'difference' | 'sym_diff'>('union');

  // =========================================================
  // SLIDE 01: HERO COVER SLIDE (Dark Theme)
  // =========================================================
  if (slide.id === 1) {
    return (
      <HeroCoverVisual 
        sessionNumber="11"
        titlePrefix="PYTHON"
        titleHighlight="DATA STRUCTURES"
        subtitle="Lists · Tuples · Dictionaries · Sets · Operations & Comprehensions"
        floatingBadges={[
          { icon: List, label: "Lists & Slicing", position: "top-left", borderColor: "border-blue-500/50", textColor: "text-blue-400" },
          { icon: Lock, label: "Tuples & Immutability", position: "top-right", borderColor: "border-amber-500/50", textColor: "text-amber-400" },
          { icon: BookOpen, label: "Dicts & O(1) Lookup", position: "bottom-left", borderColor: "border-purple-500/50", textColor: "text-purple-400" },
          { icon: Shapes, label: "Sets & Unique Ops", position: "bottom-right", borderColor: "border-emerald-500/50", textColor: "text-emerald-400" }
        ]}
        statsCards={[
          { val: "4 Structures", label: "Core Foundations", sub: "Lists • Tuples • Dicts • Sets" },
          { val: "20 Slides", label: "Curriculum Depth", sub: "Theory & Interactive Labs" },
          { val: "Live Demos", label: "Hands-on Practice", sub: "Indexing, Methods & Math" }
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
          {/* Card 01: Lists */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-mono text-blue-600">01</span>
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <List className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">LISTS</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ordered, mutable collections. Create, access, slice, and use powerful list methods and comprehensions.
              </p>
            </div>
          </div>

          {/* Card 02: Tuples */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-mono text-amber-600">02</span>
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                <Lock className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">TUPLES</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ordered, immutable collections. Understand when and why to use unchangeable data.
              </p>
            </div>
          </div>

          {/* Card 03: Dictionaries */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-mono text-purple-600">03</span>
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">DICTIONARIES</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Key-value paired data. The most powerful structure for labeled, fast-lookup information.
              </p>
            </div>
          </div>

          {/* Card 04: Sets */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-mono text-emerald-600">04</span>
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Shapes className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">SETS</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unique, unordered collections. Eliminate duplicates and perform mathematical set operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 03, 09, 12, 16: SECTION DIVIDER SLIDES (Matching Image 2 100%)
  // =========================================================
  if (slide.type === 'section-divider') {
    const getIcon = () => {
      if (slide.id === 3) return List;
      if (slide.id === 9) return Layers;
      if (slide.id === 12) return BookOpen;
      return Sparkles;
    };
    const IconComp = getIcon();

    const getPart = () => {
      if (slide.id === 3) return 'PART 1';
      if (slide.id === 9) return 'PART 2';
      if (slide.id === 12) return 'PART 3';
      return 'PART 4';
    };

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
          {/* Orange glowing gradient icon box */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/30 mb-4 ring-4 ring-orange-500/20">
            <IconComp className="w-8 h-8 text-white" />
          </div>

          {/* Translucent Part Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-mono font-bold mb-3 shadow-md backdrop-blur-sm">
            {slide.topRightTag && slide.topRightTag.startsWith('PART') ? slide.topRightTag : getPart()}
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-3">
            {slide.mainTitle}
          </h2>

          {/* Orange Underline Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-sm" />

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-xl text-center leading-relaxed mb-2">
            {slide.subtitle}
          </p>

          {/* Description */}
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
  // SLIDE 04, 10, 13, 17: CONCEPT DETAIL SLIDES
  // =========================================================
  if (slide.type === 'concept-detail') {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        {/* Top Definition Banner */}
        <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-start gap-3 text-slate-800 shadow-sm">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-medium leading-relaxed">
            <strong className="text-blue-900 font-bold">Definition:</strong> {slide.definition}
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Why, How, Characteristics */}
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

            {/* Characteristics Badges */}
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

            {/* Important Warning Note if present (e.g., Slide 17 Sets) */}
            {slide.importantNote && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{slide.importantNote}</span>
              </div>
            )}
          </div>

          {/* Right Column: Code Example Box */}
          <div className="flex flex-col h-full">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 shadow-md font-mono text-xs sm:text-sm flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3 text-slate-400 text-[11px]">
                <span className="flex items-center gap-1.5 font-bold text-slate-300">
                  <Code2 className="w-4 h-4 text-cyan-400" /> PYTHON EXAMPLE
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">Python 3.x</span>
              </div>
              <pre className="overflow-x-auto text-slate-200 leading-relaxed font-mono whitespace-pre-wrap">
                {slide.codeSnippet}
              </pre>

              {/* Special interactive element for Slide 10: Immutable Tuple Error Test */}
              {slide.id === 10 && (
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <button
                    onClick={() => setShowTypeError(!showTypeError)}
                    className="w-full py-2 px-3 rounded-lg bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 text-rose-300 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    <span>{showTypeError ? 'Hide Error Log' : 'Test Error: coords[0] = 41.0'}</span>
                  </button>

                  <AnimatePresence>
                    {showTypeError && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 p-2.5 rounded-lg bg-rose-950/80 border border-rose-800/80 text-rose-300 text-[11px] font-mono"
                      >
                        ❌ TypeError: 'tuple' object does not support item assignment
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 05: CREATING & ACCESSING LISTS (Interactive Indexing Explorer)
  // =========================================================
  if (slide.id === 5) {
    const getSlicedItems = () => {
      if (activeSlice === '1:4') return initialItems.slice(1, 4);
      if (activeSlice === ':3') return initialItems.slice(0, 3);
      if (activeSlice === '2:') return initialItems.slice(2);
      return initialItems;
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Theory & Syntax */}
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-2">
              <h4 className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">CREATING LISTS</h4>
              <div className="bg-slate-900 text-slate-200 p-3 rounded-xl font-mono text-xs space-y-1">
                <div><span className="text-slate-500"># Empty list</span></div>
                <div><span className="text-cyan-400">empty</span> = []</div>
                <div className="pt-1"><span className="text-slate-500"># List with values</span></div>
                <div><span className="text-cyan-400">numbers</span> = [1, 2, 3, 4, 5]</div>
                <div><span className="text-cyan-400">mixed</span> = ["hi", 10, 2.5]</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-2">
              <h4 className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">ACCESSING & SLICING</h4>
              <ul className="text-xs text-slate-700 space-y-1.5 font-mono">
                <li>• <strong className="text-slate-900">Index starts at 0</strong> (not 1!)</li>
                <li>• <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600 font-bold">my_list[0]</code> → first item</li>
                <li>• <code className="bg-slate-100 px-1.5 py-0.5 rounded text-orange-600 font-bold">my_list[-1]</code> → last item</li>
                <li>• Negative indices count from end (-1 last, -2 second-to-last).</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Explorer */}
          <div className="p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md flex flex-col justify-between gap-4 font-mono">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> INTERACTIVE INDEX VISUALIZATION
              </span>
              <span className="text-slate-500 text-[10px]">items = ["A", "B", "C", "D", "E"]</span>
            </div>

            {/* List Array Elements Visualizer */}
            <div className="flex flex-col gap-2">
              <div className="text-[11px] text-slate-400 text-center">Forward Indices (0 to 4)</div>
              <div className="flex items-center justify-center gap-2">
                {initialItems.map((item, idx) => {
                  const isSelected = selectedIdx === idx;
                  const isSliced = getSlicedItems().includes(item);
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedIdx(idx)}
                      className={`w-12 h-14 rounded-xl border flex flex-col items-center justify-center cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-orange-500 border-orange-400 text-slate-950 font-black ring-2 ring-orange-400/40' 
                          : isSliced 
                            ? 'bg-blue-600/30 border-blue-500 text-white font-bold' 
                            : 'bg-slate-800/80 border-slate-700 text-slate-400'
                      }`}
                    >
                      <span className="text-xs font-mono text-slate-400">idx: {idx}</span>
                      <span className="text-base font-bold">"{item}"</span>
                      <span className="text-[10px] text-slate-500">neg: {idx - 5}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Slice Selectors */}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
              <span className="text-xs text-slate-400">Select Slicing Preset:</span>
              <div className="grid grid-cols-4 gap-2">
                {(['1:4', ':3', '2:', 'all'] as const).map((sliceOpt) => (
                  <button
                    key={sliceOpt}
                    onClick={() => { setActiveSlice(sliceOpt); setSelectedIdx(null); }}
                    className={`py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      activeSlice === sliceOpt 
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm' 
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    items[{sliceOpt === 'all' ? ':' : sliceOpt}]
                  </button>
                ))}
              </div>
            </div>

            {/* Live Output */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-center font-mono">
              <span className="text-slate-500">Result: </span>
              <span className="text-cyan-300 font-bold">
                {selectedIdx !== null 
                  ? `print(items[${selectedIdx}]) ➔ "${initialItems[selectedIdx]}" (neg: ${selectedIdx - 5})`
                  : `print(items[${activeSlice === 'all' ? ':' : activeSlice}]) ➔ [${getSlicedItems().map(x => `"${x}"`).join(', ')}]`}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 06: LIST METHODS — YOUR TOOLKIT (Interactive Toolkit)
  // =========================================================
  if (slide.id === 6) {
    const handleAppend = () => {
      setTaskList(prev => [...prev, "deploy"]);
      setLastActionLog('tasks.append("deploy") ➔ Added "deploy" to end');
    };

    const handleInsert = () => {
      setTaskList(prev => ["read", "plan", ...prev.slice(1)]);
      setLastActionLog('tasks.insert(1, "plan") ➔ Inserted "plan" at index 1');
    };

    const handleRemove = () => {
      setTaskList(prev => prev.filter(t => t !== "test"));
      setLastActionLog('tasks.remove("test") ➔ Removed first occurrence of "test"');
    };

    const handlePop = () => {
      if (taskList.length === 0) return;
      const popped = taskList[taskList.length - 1];
      setTaskList(prev => prev.slice(0, -1));
      setLastActionLog(`done = tasks.pop() ➔ Removed and returned last item "${popped}"`);
    };

    const handleSort = () => {
      setTaskList(prev => [...prev].sort());
      setLastActionLog('tasks.sort() ➔ Sorted list alphabetically');
    };

    const handleReset = () => {
      setTaskList(["read", "code", "test"]);
      setLastActionLog('Reset list to ["read", "code", "test"]');
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Adding */}
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1.5">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase">ADDING ITEMS</span>
            <ul className="text-xs text-slate-700 space-y-1 font-mono">
              <li>• <strong className="text-slate-900">.append(item)</strong> — Add to end</li>
              <li>• <strong className="text-slate-900">.insert(idx, item)</strong> — Add at position</li>
              <li>• <strong className="text-slate-900">.extend(list)</strong> — Merge list</li>
            </ul>
          </div>

          {/* Removing */}
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1.5">
            <span className="text-xs font-mono font-bold text-rose-600 uppercase">REMOVING ITEMS</span>
            <ul className="text-xs text-slate-700 space-y-1 font-mono">
              <li>• <strong className="text-slate-900">.remove(item)</strong> — Remove first match</li>
              <li>• <strong className="text-slate-900">.pop(idx)</strong> — Remove & return</li>
              <li>• <strong className="text-slate-900">.clear()</strong> — Empty list</li>
            </ul>
          </div>

          {/* Ordering */}
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1.5">
            <span className="text-xs font-mono font-bold text-purple-600 uppercase">FINDING & ORDERING</span>
            <ul className="text-xs text-slate-700 space-y-1 font-mono">
              <li>• <strong className="text-slate-900">.index(item)</strong> — Find position</li>
              <li>• <strong className="text-slate-900">.sort()</strong> — Order items</li>
              <li>• <strong className="text-slate-900">len(list)</strong> — Count items</li>
            </ul>
          </div>
        </div>

        {/* Live Interactive Toolkit Section */}
        <div className="p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md flex flex-col gap-4 font-mono">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
            <span className="text-orange-400 font-bold flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> LIVE METHOD DEMO EXPLORER
            </span>
            <button 
              onClick={handleReset}
              className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
            >
              Reset List
            </button>
          </div>

          {/* Dynamic List Render */}
          <div className="flex items-center gap-2 overflow-x-auto p-3 rounded-xl bg-slate-950 border border-slate-800 min-h-[60px]">
            <span className="text-slate-500 text-xs">tasks = [</span>
            {taskList.map((item, idx) => (
              <motion.span
                key={`${item}-${idx}`}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="px-3 py-1 rounded-lg bg-blue-600/30 border border-blue-500 text-cyan-300 font-bold text-xs"
              >
                "{item}"{idx < taskList.length - 1 ? ',' : ''}
              </motion.span>
            ))}
            <span className="text-slate-500 text-xs">]</span>
            <span className="ml-auto text-[11px] text-slate-400 font-mono">len: {taskList.length}</span>
          </div>

          {/* Action Trigger Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            <button
              onClick={handleAppend}
              className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> .append("deploy")
            </button>
            <button
              onClick={handleInsert}
              className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> .insert(1, "plan")
            </button>
            <button
              onClick={handleRemove}
              className="py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" /> .remove("test")
            </button>
            <button
              onClick={handlePop}
              className="py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" /> .pop()
            </button>
            <button
              onClick={handleSort}
              className="py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
            >
              <ArrowUpDown className="w-3.5 h-3.5" /> .sort()
            </button>
          </div>

          {/* Action Log Output */}
          <div className="text-[11px] text-slate-400 italic text-center">
            {lastActionLog}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 07: LIST COMPREHENSIONS (Light Theme)
  // =========================================================
  if (slide.id === 7) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Syntax & Examples */}
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">SYNTAX PATTERNS</span>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[10px]">Basic:</span>
                  <code className="text-blue-700 font-bold">[expression for item in iterable]</code>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[10px]">With filter:</span>
                  <code className="text-orange-700 font-bold">[expression for item in iterable if condition]</code>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md font-mono text-xs space-y-3">
              <div>
                <span className="text-slate-400 text-[10px] block"># Squares of 0-9</span>
                <code className="text-cyan-300">squares = [x**2 for x in range(10)]</code>
                <span className="text-slate-500 block text-[10px] mt-0.5">➔ [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block"># Even numbers only</span>
                <code className="text-amber-300">evens = [x for x in range(20) if x % 2 == 0]</code>
                <span className="text-slate-500 block text-[10px] mt-0.5">➔ [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Old Way vs New Way Comparison */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-4">
            <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">OLD WAY vs NEW WAY</span>

            <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs">
              <span className="text-slate-500 text-[10px] font-bold block mb-1">LOOP WAY (4 lines):</span>
              <pre className="text-slate-800">
{`squares = []
for x in range(10):
    squares.append(x**2)`}
              </pre>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 font-mono text-xs">
              <span className="text-emerald-700 text-[10px] font-bold block mb-1">COMPREHENSION (1 line):</span>
              <code className="text-emerald-900 font-bold">squares = [x**2 for x in range(10)]</code>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Pro Tip: List comprehensions are faster because they are optimized internally in C.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 08: LISTS IN ACTION — REAL-WORLD EXAMPLES
  // =========================================================
  if (slide.id === 8) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Example 1 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" /> To-Do List
            </h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
              <div>tasks = ["Study", "Code", "Review"]</div>
              <div className="text-cyan-400">tasks.append("Sleep")</div>
            </div>
            <span className="text-[11px] text-slate-500">Track and manage daily tasks dynamically</span>
          </div>

          {/* Example 2 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <BarChart2 className="w-4 h-4 text-amber-600" /> Student Grades
            </h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
              <div>grades = [85, 92, 78, 96]</div>
              <div className="text-amber-400">avg = sum(grades) / len(grades)</div>
            </div>
            <span className="text-[11px] text-slate-500">Calculate average: 87.75</span>
          </div>

          {/* Example 3 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-600" /> Store Inventory
            </h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
              <div>inventory = ["laptop", "mouse", "keyboard"]</div>
              <div className="text-purple-400">if "mouse" in inventory: print("In stock!")</div>
            </div>
            <span className="text-[11px] text-slate-500">Check stock with 'in' operator</span>
          </div>

          {/* Example 4 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-emerald-600" /> User Feedback
            </h4>
            <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
              <div>feedback = ["Great!", "Needs work", "Excellent"]</div>
              <div className="text-emerald-400">positive = [f for f in feedback if "Great" in f]</div>
            </div>
            <span className="text-[11px] text-slate-500">Filter responses matching criteria</span>
          </div>
        </div>

        {/* Key Insight Box */}
        <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 shadow-sm text-xs text-slate-800 leading-relaxed">
          <strong className="text-blue-900 font-bold block mb-1">Key Insight:</strong>
          Lists are your go-to structure when you need an ordered collection that can change over time. They are the most versatile and commonly used data structure in Python.
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 11: TUPLE OPERATIONS & UNPACKING (Light Theme)
  // =========================================================
  if (slide.id === 11) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Tuple Methods & Unpacking */}
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-amber-600 uppercase">TUPLE METHODS (Only 2!)</span>
              <p className="text-xs text-slate-700">Because tuples are immutable, they only have 2 methods:</p>
              <ul className="text-xs font-mono text-slate-800 space-y-1">
                <li>• <code className="text-amber-700 font-bold">.count(item)</code> — counts occurrences</li>
                <li>• <code className="text-amber-700 font-bold">.index(item)</code> — finds position</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md font-mono text-xs space-y-2">
              <span className="text-amber-400 font-bold text-[11px] block">PACKING & UNPACKING</span>
              <div>x, y = (10, 20) <span className="text-slate-500"># x=10, y=20</span></div>
              <div>first, *rest = (1, 2, 3, 4) <span className="text-slate-500"># first=1, rest=[2,3,4]</span></div>
              <div className="pt-1 text-cyan-300">a, b = b, a <span className="text-slate-500"># Elegant swap!</span></div>
            </div>
          </div>

          {/* Right Column: When to Use & Nested Tuples */}
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-amber-900 uppercase">WHEN TO USE TUPLES</span>
              <ul className="text-xs text-slate-800 space-y-1 font-medium">
                <li>✔ Data should never change (coordinates, dates)</li>
                <li>✔ You need to use it as a dictionary key</li>
                <li>✔ You want better performance than lists</li>
                <li>✔ Returning multiple values from a function</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-slate-800 uppercase">NESTED TUPLES</span>
              <div className="p-3 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs">
                <div>matrix = ((1, 2), (3, 4), (5, 6))</div>
                <div className="text-cyan-400">print(matrix[0][1]) # 2</div>
                <div className="text-cyan-400">print(matrix[2]) # (5, 6)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 14: DICTIONARY METHODS & ITERATION (Light Theme)
  // =========================================================
  if (slide.id === 14) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        {/* 3 Method Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1.5">
            <span className="text-xs font-mono font-bold text-purple-600 uppercase">ADDING & REMOVING</span>
            <ul className="text-xs text-slate-700 space-y-1 font-mono">
              <li>• <strong className="text-slate-900">dict["key"] = val</strong></li>
              <li>• <strong className="text-slate-900">.update(other)</strong></li>
              <li>• <strong className="text-slate-900">.pop("key") / .clear()</strong></li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1.5">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase">ACCESSING SAFELY</span>
            <ul className="text-xs text-slate-700 space-y-1 font-mono">
              <li>• <strong className="text-slate-900">.get("k", default)</strong></li>
              <li>• <strong className="text-slate-900">.keys() / .values()</strong></li>
              <li>• <strong className="text-slate-900">.items()</strong></li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-1.5">
            <span className="text-xs font-mono font-bold text-emerald-600 uppercase">CHECKING & LOOKUP</span>
            <ul className="text-xs text-slate-700 space-y-1 font-mono">
              <li>• <strong className="text-slate-900">"key" in dict</strong> (O(1)!)</li>
              <li>• <strong className="text-slate-900">len(dict)</strong></li>
              <li>• Instant lookup speed</li>
            </ul>
          </div>
        </div>

        {/* Iteration Code Demo */}
        <div className="p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md font-mono text-xs space-y-3">
          <span className="text-purple-400 font-bold text-xs block">ITERATING OVER DICTIONARIES</span>
          <pre className="text-slate-200 leading-relaxed">
{`user = {"name": "Alice", "age": 25, "city": "Cairo"}

# Iterate keys
for key in user:
    print(key, user[key])  # name Alice, age 25, city Cairo

# Iterate key-value pairs
for key, value in user.items():
    print(f"{key}: {value}")  # name: Alice, age: 25, city: Cairo`}
          </pre>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 15: DICT COMPREHENSIONS & WORD FREQUENCY (Interactive)
  // =========================================================
  if (slide.id === 15) {
    const computeFrequency = () => {
      const words = inputText.trim().toLowerCase().split(/\s+/).filter(Boolean);
      const freq: Record<string, number> = {};
      words.forEach(w => {
        freq[w] = (freq[w] || 0) + 1;
      });
      return freq;
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column: Syntax & Uses */}
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-2">
              <span className="text-xs font-mono font-bold text-purple-600 uppercase">SYNTAX</span>
              <code className="p-2.5 rounded-xl bg-purple-50 text-purple-900 font-mono text-xs font-bold border border-purple-200">
                {`{key: value for item in iterable if condition}`}
              </code>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md font-mono text-xs space-y-2">
              <span className="text-purple-400 font-bold text-[11px] block">QUICK EXAMPLES</span>
              <div>{`{x: x**2 for x in range(5)}`} <span className="text-slate-500">➔ {`{0:0, 1:1, 2:4, 3:9, 4:16}`}</span></div>
              <div className="text-amber-300">{`{w: len(w) for w in ["hi", "hello"]}`} <span className="text-slate-500">➔ {`{"hi":2, "hello":5}`}</span></div>
            </div>
          </div>

          {/* Right Column: Interactive Word Frequency Counter */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-slate-800 uppercase flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-purple-600" /> REAL CODE DEMO: WORD FREQUENCY
            </span>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-slate-600 font-medium">Type text to count word frequencies:</label>
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g. the cat and the hat"
              />
            </div>

            <div className="p-3 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-1">
              <span className="text-slate-400 text-[10px] block">Frequency Dict Result:</span>
              <div className="text-cyan-300 overflow-x-auto">
                {JSON.stringify(computeFrequency(), null, 2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 18: SET OPERATIONS — MATH IN ACTION (Interactive Set Ops)
  // =========================================================
  if (slide.id === 18) {
    const getSetResult = () => {
      if (activeSetOp === 'union') return [1, 2, 3, 4, 5, 6];
      if (activeSetOp === 'intersection') return [3, 4];
      if (activeSetOp === 'difference') return [1, 2];
      return [1, 2, 5, 6];
    };

    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        {/* 4 Set Operations Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { id: 'union', name: 'A | B (.union())', desc: 'All unique elements' },
            { id: 'intersection', name: 'A & B (.intersection())', desc: 'Common elements' },
            { id: 'difference', name: 'A - B (.difference())', desc: 'In A but not B' },
            { id: 'sym_diff', name: 'A ^ B (.symmetric_diff())', desc: 'In either, not both' }
          ].map((op) => (
            <button
              key={op.id}
              onClick={() => setActiveSetOp(op.id as any)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                activeSetOp === op.id 
                  ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm' 
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="text-xs font-bold text-slate-900 font-mono">{op.name}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{op.desc}</div>
            </button>
          ))}
        </div>

        {/* Live Set Visualizer */}
        <div className="p-5 rounded-2xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md flex flex-col gap-4 font-mono">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
            <span className="text-emerald-400 font-bold">A = &#123;1, 2, 3, 4&#125; &nbsp;|&nbsp; B = &#123;3, 4, 5, 6&#125;</span>
            <span className="text-slate-400 text-[10px]">Interactive Set Math</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Result Set:</span>
              <div className="flex items-center gap-1.5">
                &#123;
                {getSetResult().map((val, idx) => (
                  <motion.span
                    key={val}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 font-black text-xs shadow-sm"
                  >
                    {val}{idx < getSetResult().length - 1 ? ',' : ''}
                  </motion.span>
                ))}
                &#125;
              </div>
            </div>
          </div>

          {/* Frozen Set Note */}
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>❄️ <strong>Frozen Set:</strong> frozenset([1, 2, 3]) — immutable set usable as a dictionary key!</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // SLIDE 19: THE BIG COMPARISON — WHEN TO USE WHAT
  // =========================================================
  if (slide.id === 19) {
    return (
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center gap-4 p-2">
        {/* Comparison Table */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-x-auto">
          <table className="w-full text-xs text-center border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white font-mono">
                <th className="p-2.5 text-left rounded-l-xl">Feature</th>
                <th className="p-2.5">List [ ]</th>
                <th className="p-2.5">Tuple ( )</th>
                <th className="p-2.5">Dict &#123; &#125;</th>
                <th className="p-2.5 rounded-r-xl">Set &#123; &#125;</th>
              </tr>
            </thead>
            <tbody className="font-medium text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="p-2.5 text-left font-bold text-slate-900">Ordered</td>
                <td className="p-2.5 text-emerald-600 font-bold">Yes</td>
                <td className="p-2.5 text-emerald-600 font-bold">Yes</td>
                <td className="p-2.5 text-emerald-600 font-bold">Yes*</td>
                <td className="p-2.5 text-rose-500 font-bold">No</td>
              </tr>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <td className="p-2.5 text-left font-bold text-slate-900">Mutable</td>
                <td className="p-2.5 text-emerald-600 font-bold">Yes</td>
                <td className="p-2.5 text-rose-500 font-bold">No</td>
                <td className="p-2.5 text-emerald-600 font-bold">Yes</td>
                <td className="p-2.5 text-emerald-600 font-bold">Yes</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-2.5 text-left font-bold text-slate-900">Duplicates</td>
                <td className="p-2.5 text-emerald-600 font-bold">Allowed</td>
                <td className="p-2.5 text-emerald-600 font-bold">Allowed</td>
                <td className="p-2.5 text-amber-600 font-bold">Keys: No</td>
                <td className="p-2.5 text-rose-500 font-bold">No</td>
              </tr>
              <tr>
                <td className="p-2.5 text-left font-bold text-slate-900">Access</td>
                <td className="p-2.5">By index</td>
                <td className="p-2.5">By index</td>
                <td className="p-2.5">By key</td>
                <td className="p-2.5">Membership</td>
              </tr>
            </tbody>
          </table>
          <div className="text-[10px] text-slate-400 mt-2 text-right italic">* Python 3.7+ maintains insertion order for dictionaries</div>
        </div>

        {/* 4 Decision Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs">
            <span className="text-slate-600 block text-[10px]">Need ordered data?</span>
            <strong className="text-blue-700 text-sm">Use a LIST</strong>
          </div>
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs">
            <span className="text-slate-600 block text-[10px]">Data must not change?</span>
            <strong className="text-amber-700 text-sm">Use a TUPLE</strong>
          </div>
          <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-xs">
            <span className="text-slate-600 block text-[10px]">Need key-value pairs?</span>
            <strong className="text-purple-700 text-sm">Use a DICT</strong>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
            <span className="text-slate-600 block text-[10px]">Need uniqueness?</span>
            <strong className="text-emerald-700 text-sm">Use a SET</strong>
          </div>
        </div>
      </div>
    );
  }

  // SLIDE 20: OUTRO HERO SLIDE
  if (slide.id === 20 || slide.type === 'outro-hero') {
    return (
      <ThankYouVisual 
        sessionNumber="11"
        nextSessionNote="Next Session: Python Libraries — NumPy, Pandas &amp; Data Visualizations"
        nextSessionButtonText="Open Session 01: Excel Basics"
        onRestart={() => onSelectSlide ? onSelectSlide(0) : onNext?.()}
        onNextSession={onSwitchSession ? () => onSwitchSession('session-01') : undefined}
      />
    );
  }

  // Fallback
  return (
    <div className="p-8 text-center text-slate-400">
      Slide {slide.id} Content
    </div>
  );
};
