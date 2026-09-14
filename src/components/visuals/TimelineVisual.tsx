import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Layout, 
  Globe, 
  Smartphone, 
  Mic, 
  Bot,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Play,
  Volume2,
  Send,
  Lock,
  Search,
  ExternalLink,
  Layers,
  Cpu,
  Fingerprint,
  Zap,
  CheckCircle2,
  RotateCcw
} from 'lucide-react';
import { Language, TimelineItem } from '../../types';

interface TimelineVisualProps {
  language: Language;
  items?: TimelineItem[];
  isDark?: boolean;
}

export const TimelineVisual: React.FC<TimelineVisualProps> = ({
  language,
  isDark = false
}) => {
  const isRTL = language === 'ar';
  const [activeEraIdx, setActiveEraIdx] = useState<number>(0);

  // Era 1: CLI interactive state
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'MS-DOS Version 1.25',
    'Copyright (C) 1981 Microsoft Corp.',
    'Type "HELP" or click commands below:'
  ]);

  // Era 4: Slide to unlock state
  const [unlocked, setUnlocked] = useState<boolean>(false);

  // Era 5: Voice waveform pulse state
  const [voiceActive, setVoiceActive] = useState<boolean>(false);

  // Era 6: AI prompt generator state
  const [aiGenerating, setAiGenerating] = useState<boolean>(false);
  const [aiGeneratedUi, setAiGeneratedUi] = useState<boolean>(true);

  const eras = [
    {
      id: '1970s',
      era: '1970s',
      badge: 'CLI',
      title: isRTL ? 'عصر الأوامر النصية (CLI)' : 'Command Line Era (CLI)',
      subtitle: isRTL ? 'حفظ الأكواد والتعامل الصارم مع الآلة' : 'Memorized syntax & text-only terminals',
      paradigm: isRTL ? 'لوحة المفاتيح والأكواد' : 'Keyboard & Exact Syntax',
      cognitiveLoad: isRTL ? 'مرتفع جداً (95%)' : 'Very High (95%)',
      modality: isRTL ? 'أوامر برمجية نصية' : 'Code / Text commands',
      audience: isRTL ? 'مهندسو البرمجيات والعلماء فقط' : 'Engineers & Researchers only',
      impact: isRTL ? 'الحاسوب أداة حصرية للمبرمجين مع حاجز معرفي ضخم أمام المستخدم العادي.' : 'Computers were strictly for specialists; zero visual intuition.',
      examples: ['MS-DOS', 'UNIX Terminal', 'VT100 CRT'],
      color: 'from-emerald-500 to-teal-600',
      accent: 'emerald',
      icon: Terminal
    },
    {
      id: '1980s',
      era: '1980s',
      badge: 'GUI',
      title: isRTL ? 'ثورة الواجهات الرسومية (GUI)' : 'GUI & Desktop Metaphor',
      subtitle: isRTL ? 'الماوس، النوافذ، الأيقونات والقوائم (WIMP)' : 'Xerox PARC, Apple Macintosh & Windows',
      paradigm: isRTL ? 'التفاعل البصري المباشر' : 'Direct Manipulation & WIMP',
      cognitiveLoad: isRTL ? 'متوسط (50%)' : 'Moderate (50%)',
      modality: isRTL ? 'الماوس + النقر + النوافذ' : 'Mouse, Pointer & Windows',
      audience: isRTL ? 'المكاتب والمستخدمين في المنازل' : 'Office workers & Home users',
      impact: isRTL ? 'تحول الشاشة لسطح مكتب واقعي مع ملفات وسلة مهملات، مما أسس علم الـ UI/UX.' : 'Desktop metaphor (trash can, folders, files) made computing visual.',
      examples: ['Apple Macintosh 1984', 'Windows 95', 'Xerox Star'],
      color: 'from-blue-600 to-indigo-600',
      accent: 'blue',
      icon: Layout
    },
    {
      id: '1990s',
      era: '1990s',
      badge: 'WEB',
      title: isRTL ? 'عصر الإنترنت والويب المفتوح' : 'The World Wide Web Era',
      subtitle: isRTL ? 'الروابط التشعبية والتصفح العالمي' : 'Hyperlinks, HTML & Connected Browsers',
      paradigm: isRTL ? 'الروابط التشعبية والتنقل' : 'Hyperlinks & Information Architecture',
      cognitiveLoad: isRTL ? 'متوسط منخفض (35%)' : 'Low-Moderate (35%)',
      modality: isRTL ? 'المتصفح + روابط + نماذج' : 'Browser, Search & Form Inputs',
      audience: isRTL ? 'مئات الملايين حول العالم' : 'Hundreds of Millions globally',
      impact: isRTL ? 'ولادة هندسة المعلومات (IA) والتصميم المتجاوب مع تضاعف مواقع الأخبار والتجارة.' : 'Birth of Information Architecture (IA) and global search navigation.',
      examples: ['Netscape Navigator', 'Yahoo!', 'Amazon 1995'],
      color: 'from-amber-500 to-orange-600',
      accent: 'amber',
      icon: Globe
    },
    {
      id: '2000s',
      era: '2000s',
      badge: 'TOUCH',
      title: isRTL ? 'ثورة الهواتف وشاشات اللمس' : 'Mobile & Multi-Touch Era',
      subtitle: isRTL ? 'اللمس المتعدد والإيماءات ومتاجر التطبيقات' : 'Capacitive touch, gestural UI & Apps',
      paradigm: isRTL ? 'الإصبع المباشر والإيماءات' : 'Multi-Touch & Natural Gestures',
      cognitiveLoad: isRTL ? 'منخفض جداً (15%)' : 'Low (15%)',
      modality: isRTL ? 'شاشات اللمس (Swipe/Pinch)' : 'Touch, Swipe, Pinch-to-zoom',
      audience: isRTL ? 'مليارات البشر (من الأطفال لكبار السن)' : 'Billions across all ages',
      impact: isRTL ? 'الحاسوب أصبح في جيب كل إنسان؛ ظهور مبادئ Mobile-First وتصميم الأنظمة.' : 'Zero learning curve for children & seniors; Mobile-First UX standard.',
      examples: ['iPhone 2007', 'Android', 'App Store Ecosystem'],
      color: 'from-sky-500 to-cyan-600',
      accent: 'sky',
      icon: Smartphone
    },
    {
      id: '2010s',
      era: '2010s',
      badge: 'VOICE',
      title: isRTL ? 'عصر الصوت والمساعدات الذكية' : 'Voice & Conversational UI',
      subtitle: isRTL ? 'التفاعل بدون شاشات عبر اللغة الطبيعية' : 'Zero-UI, Voice Assistants & Ambient Tech',
      paradigm: isRTL ? 'الأوامر الصوتية الطبيعية' : 'Natural Language Processing',
      cognitiveLoad: isRTL ? 'شبه منعدم (10%)' : 'Minimal (10%)',
      modality: isRTL ? 'الصوت والمحادثة الحية' : 'Voice, Audio cues & Micro-prompts',
      audience: isRTL ? 'الأجهزة المنزلية والسيارات والجميع' : 'Smart homes, in-car systems & on-the-go',
      impact: isRTL ? 'انتقال التصميم إلى تصميم المحادثات (CUI) والواجهات الخفية بدون شاشة (Zero-UI).' : 'Designing invisible interfaces (Zero-UI) through voice acoustics.',
      examples: ['Apple Siri', 'Amazon Alexa', 'Google Assistant'],
      color: 'from-purple-500 to-violet-600',
      accent: 'purple',
      icon: Mic
    },
    {
      id: '2020s+',
      era: '2020s+',
      badge: 'AI & SPATIAL',
      title: isRTL ? 'الذكاء الاصطناعي والحوسبة المكانية' : 'Generative AI & Spatial UI',
      subtitle: isRTL ? 'واجهات توليدية، وكلاء أذكياء، وواقع مكاني' : 'Generative UI, Copilots & VisionOS',
      paradigm: isRTL ? 'النية والقصد + الواقع المعزز' : 'Intent-driven AI & Spatial Gaze',
      cognitiveLoad: isRTL ? 'فوري وبديهي (5%)' : 'Intuitive & Instant (5%)',
      modality: isRTL ? 'نوايا المستخدم + التتبع البصري' : 'Natural Intent, Eye Tracking & Pinch',
      audience: isRTL ? 'المستقبل التكيفي للبشرية' : 'Universal & Context-Aware Personalization',
      impact: isRTL ? 'الواجهة لم تعد ثابتة بل تتولد لحظياً حسب حاجة المستخدم الدقيقة وسياقه.' : 'Dynamic UI generated on the fly matching exact user context & intent.',
      examples: ['ChatGPT & Claude', 'Apple Vision Pro', 'Adaptive Generative UI'],
      color: 'from-blue-500 via-indigo-500 to-cyan-400',
      accent: 'blue',
      icon: Bot
    }
  ];

  const currentEra = eras[activeEraIdx];

  const runTerminalCommand = (cmd: string) => {
    let response = '';
    if (cmd === 'dir') {
      response = 'SYSTEM.BIN   COMMAND.COM   AUTOEXEC.BAT   124,032 bytes free';
    } else if (cmd === 'help') {
      response = 'Available: DIR, RUN, EXIT, CLS, ABOUT';
    } else if (cmd === 'run') {
      response = 'Executing MATRIX_1975.EXE ... [OK]';
    }
    setTerminalHistory(prev => [...prev.slice(-4), `C:\\> ${cmd}`, response]);
  };

  const handleNextEra = () => {
    setActiveEraIdx((prev) => (prev < eras.length - 1 ? prev + 1 : 0));
  };

  const handlePrevEra = () => {
    setActiveEraIdx((prev) => (prev > 0 ? prev - 1 : eras.length - 1));
  };

  return (
    <div className="w-full flex flex-col gap-3 py-1">
      {/* 1. TOP INTERACTIVE ERA SELECTOR (TIMELINE TRACK) */}
      <div className="w-full bg-slate-900/90 dark:bg-slate-950 p-2 sm:p-2.5 rounded-2xl border border-slate-800 shadow-md">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2">
          {eras.map((eraItem, idx) => {
            const Icon = eraItem.icon;
            const isActive = idx === activeEraIdx;
            return (
              <button
                key={eraItem.id}
                onClick={() => setActiveEraIdx(idx)}
                className={`relative px-2.5 py-2 sm:py-2.5 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between group overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white border-blue-400 shadow-lg shadow-blue-500/25 scale-[1.03]'
                    : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700/60 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] sm:text-[11px] font-mono font-extrabold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-900 text-blue-400 border border-slate-700'
                  }`}>
                    {eraItem.era}
                  </span>
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`} />
                </div>
                <span className="text-[11px] sm:text-xs font-bold truncate block">
                  {eraItem.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. DYNAMIC LIVE SIMULATOR STAGE & METRICS (HERO SPLIT VIEW) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* LEFT: INTERACTIVE LIVE ERA SIMULATOR SCREEN (7 COLS) */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950 rounded-2xl p-4 border border-slate-800 shadow-xl overflow-hidden relative min-h-[300px]">
          
          {/* Top Simulator Header */}
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-mono text-[11px] text-blue-400 font-bold uppercase tracking-wider">
                {isRTL ? `محاكي الشاشة الحية • ${currentEra.era}` : `LIVE ERA SIMULATOR • ${currentEra.era}`}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrevEra}
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Previous Era"
              >
                {isRTL ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
              </button>
              <span className="text-[10px] font-mono text-slate-400 px-1">
                {activeEraIdx + 1} / {eras.length}
              </span>
              <button
                onClick={handleNextEra}
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Next Era"
              >
                {isRTL ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* SIMULATOR SCREEN VIEWPORT */}
          <div className="flex-1 flex flex-col justify-center my-auto">
            
            {/* ERA 1: 1970s RETRO CRT TERMINAL */}
            {activeEraIdx === 0 && (
              <div className="w-full bg-[#0a110a] border-2 border-emerald-600/60 rounded-xl p-4 font-mono text-emerald-400 text-xs shadow-[0_0_20px_rgba(16,185,129,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-[size:16px_16px] opacity-10 pointer-events-none" />
                <div className="space-y-1 mb-3 select-none">
                  {terminalHistory.map((line, lIdx) => (
                    <div key={lIdx} className="leading-relaxed opacity-90">
                      {line}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-emerald-300 font-bold">
                    <span>C:\&gt;</span>
                    <span className="inline-block w-2 h-3.5 bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                <div className="pt-3 border-t border-emerald-900/60 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] text-emerald-500/80 uppercase font-bold">
                    {isRTL ? 'جرّب أوامر الدوس:' : 'Try Terminal Commands:'}
                  </span>
                  {['dir', 'help', 'run'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => runTerminalCommand(cmd)}
                      className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-600/50 hover:bg-emerald-900 text-emerald-300 text-[11px] font-bold cursor-pointer transition-all hover:scale-105"
                    >
                      &gt; {cmd}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ERA 2: 1980s CLASSIC MAC / WIN95 GUI */}
            {activeEraIdx === 1 && (
              <div className="w-full bg-[#c0c0c0] text-black rounded-xl p-3.5 font-sans border-2 border-white shadow-2xl select-none">
                {/* Vintage Window Titlebar */}
                <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] text-white px-2 py-1 rounded-t flex items-center justify-between text-xs font-bold mb-2">
                  <div className="flex items-center gap-1.5">
                    <Layout className="w-3.5 h-3.5" />
                    <span>My Computer (Macintosh 1984 / Windows 95)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-[#c0c0c0] text-black border border-black text-[9px] flex items-center justify-center font-bold">_</span>
                    <span className="w-3 h-3 bg-[#c0c0c0] text-black border border-black text-[9px] flex items-center justify-center font-bold">X</span>
                  </div>
                </div>

                {/* Vintage Desktop Icons & File Tree */}
                <div className="bg-white border-2 border-slate-700 p-3 rounded grid grid-cols-4 gap-2 mb-2 text-center text-[10px] font-semibold">
                  <div className="p-2 border border-dotted border-blue-600 bg-blue-50/80 rounded cursor-pointer">
                    <div className="w-6 h-6 mx-auto bg-amber-200 border border-amber-500 rounded-sm mb-1 flex items-center justify-center text-[10px]">📁</div>
                    <span>Documents</span>
                  </div>
                  <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">
                    <div className="w-6 h-6 mx-auto bg-slate-300 border border-slate-500 rounded-sm mb-1 flex items-center justify-center text-[10px]">💾</div>
                    <span>Floppy (A:)</span>
                  </div>
                  <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">
                    <div className="w-6 h-6 mx-auto bg-blue-200 border border-blue-500 rounded-sm mb-1 flex items-center justify-center text-[10px]">🗑️</div>
                    <span>Trash Can</span>
                  </div>
                  <div className="p-2 hover:bg-slate-100 rounded cursor-pointer">
                    <div className="w-6 h-6 mx-auto bg-emerald-200 border border-emerald-500 rounded-sm mb-1 flex items-center justify-center text-[10px]">⚙️</div>
                    <span>Control Panel</span>
                  </div>
                </div>

                <div className="bg-[#e0e0e0] border border-slate-400 p-1.5 rounded flex items-center justify-between text-[11px] font-bold">
                  <span>🖱️ {isRTL ? 'ثورة الماوس وسلة المهملات والمجلدات' : 'Direct Manipulation: Mouse + Desktop Metaphor'}</span>
                  <span className="bg-[#c0c0c0] px-2 py-0.5 border border-black shadow">Start ⊞</span>
                </div>
              </div>
            )}

            {/* ERA 3: 1990s RETRO WEB BROWSER */}
            {activeEraIdx === 2 && (
              <div className="w-full bg-slate-100 text-slate-900 rounded-xl p-3 border-2 border-slate-300 shadow-xl select-none">
                {/* Browser URL Bar */}
                <div className="bg-slate-200 p-2 rounded-t border-b border-slate-300 flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-300 px-2 py-0.5 rounded text-[11px] font-mono text-blue-700 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate">http://www.welcome-to-the-web.org/1995/index.html</span>
                  </div>
                </div>

                {/* 90s Web Page Layout */}
                <div className="bg-white border border-slate-200 p-3 rounded text-xs space-y-2 font-serif">
                  <h4 className="text-base font-bold text-blue-800 border-b pb-1">
                    🌐 Welcome to the World Wide Web!
                  </h4>
                  <p className="text-[11px] text-slate-700 leading-relaxed">
                    You are visitor <span className="font-mono bg-black text-emerald-400 px-1 text-[10px]">#004892</span>. Click links below to navigate hypertext documents:
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <a className="text-blue-600 underline font-semibold cursor-pointer">[ Search Net Directory ]</a>
                    <a className="text-purple-600 underline font-semibold cursor-pointer">[ Online Book Store ]</a>
                    <a className="text-blue-600 underline font-semibold cursor-pointer">[ Send Feedback Email ]</a>
                  </div>
                </div>
              </div>
            )}

            {/* ERA 4: 2000s SKEUOMORPHIC SMARTPHONE */}
            {activeEraIdx === 3 && (
              <div className="w-full max-w-sm mx-auto bg-slate-900 rounded-2xl p-3.5 border-4 border-slate-700 shadow-2xl text-white select-none">
                {/* Phone Top Notch */}
                <div className="flex items-center justify-between text-[10px] text-slate-300 mb-2 px-1">
                  <span>9:41 AM</span>
                  <div className="w-12 h-2.5 bg-slate-800 rounded-full mx-auto" />
                  <span>100% 🔋</span>
                </div>

                {/* Phone Screen: Lockscreen or Home Grid */}
                {!unlocked ? (
                  <div className="bg-gradient-to-b from-sky-900 via-slate-900 to-slate-950 p-4 rounded-xl text-center space-y-3 border border-sky-500/30 shadow-inner">
                    <span className="text-2xl font-light font-mono block">09:41</span>
                    <span className="text-xs text-sky-200 block">
                      {isRTL ? 'الثلاثاء، 9 يناير 2007' : 'Tuesday, January 9, 2007'}
                    </span>
                    
                    <button
                      onClick={() => setUnlocked(true)}
                      className="w-full py-2.5 px-4 rounded-full bg-slate-800/90 border border-slate-600 text-xs font-bold text-slate-200 flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-700 transition-all active:scale-95 shadow-lg"
                    >
                      <Fingerprint className="w-4 h-4 text-sky-400 animate-pulse" />
                      <span>{isRTL ? 'اسحب لفتح القفل (Slide to Unlock) 📱' : 'Slide / Tap to Unlock 📱'}</span>
                    </button>
                  </div>
                ) : (
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                    <div className="grid grid-cols-4 gap-2 text-center text-[9px]">
                      {[
                        { name: 'Safari', icon: '🧭', bg: 'bg-blue-600' },
                        { name: 'Photos', icon: '🌻', bg: 'bg-amber-500' },
                        { name: 'Music', icon: '🎵', bg: 'bg-rose-600' },
                        { name: 'Maps', icon: '🗺️', bg: 'bg-emerald-600' }
                      ].map((app, aIdx) => (
                        <div key={aIdx} className="flex flex-col items-center">
                          <div className={`w-9 h-9 rounded-xl ${app.bg} text-white flex items-center justify-center text-sm shadow-md mb-1`}>
                            {app.icon}
                          </div>
                          <span className="text-slate-300 font-medium">{app.name}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setUnlocked(false)}
                      className="text-[10px] text-sky-400 underline block text-center pt-1"
                    >
                      {isRTL ? 'إعادة قفل الشاشة' : 'Lock Phone'}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ERA 5: 2010s VOICE & CONVERSATIONAL ASSISTANT */}
            {activeEraIdx === 4 && (
              <div className="w-full bg-slate-900 rounded-xl p-4 border border-purple-500/30 text-white space-y-3 text-center select-none shadow-xl">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                    {isRTL ? 'المساعد الصوتي الذكي (Zero-UI)' : 'Conversational Voice AI'}
                  </span>
                </div>

                {/* Glowing Voice Waveform Sphere */}
                <div className="flex items-center justify-center py-2">
                  <div 
                    onClick={() => setVoiceActive(!voiceActive)}
                    className={`w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/40 cursor-pointer transition-transform ${
                      voiceActive ? 'scale-110 animate-pulse ring-4 ring-purple-400' : 'hover:scale-105'
                    }`}
                  >
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 text-xs">
                  <p className="text-purple-300 font-semibold mb-1">
                    {voiceActive 
                      ? (isRTL ? '🗣️ "تم حجز الرحلة إلى المطار بنجاح، السائق في الطريق!"' : '🗣️ "Trip booked to airport. Driver arriving in 3 mins!"')
                      : (isRTL ? '🎙️ انقر على الميكروفون لإعطاء أمر صوتي' : '🎙️ Tap glowing orb to speak natural command')}
                  </p>
                  <span className="text-[10px] text-slate-400">
                    {isRTL ? 'لا حاجة للنقر على أزرار؛ اللغة الطبيعية هي واجهة الاستخدام.' : 'Natural language replaced manual navigation.'}
                  </span>
                </div>
              </div>
            )}

            {/* ERA 6: 2020s+ GENERATIVE AI & SPATIAL INTERACTION */}
            {activeEraIdx === 5 && (
              <div className="w-full bg-gradient-to-br from-slate-900 via-blue-950/60 to-cyan-950/50 rounded-xl p-4 border-2 border-blue-400/40 text-white shadow-2xl select-none backdrop-blur-md relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                    <span className="text-xs font-extrabold text-cyan-300">
                      {isRTL ? 'الواجهة التوليدية التكيفية (Generative UI)' : 'Adaptive Generative UI'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    Intent-Driven
                  </span>
                </div>

                <div className="bg-slate-950/90 p-2.5 rounded-xl border border-blue-500/30 mb-2 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-300 truncate">
                    ✨ Prompt: {isRTL ? '"صمم لي رحلة إلى طوكيو وحجز فندق فوري"' : '"Plan Tokyo itinerary + 1-click hotel checkout"'}
                  </span>
                  <button
                    onClick={() => {
                      setAiGenerating(true);
                      setTimeout(() => setAiGenerating(false), 600);
                    }}
                    className="px-2.5 py-1 rounded bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-[10px] shrink-0 cursor-pointer shadow hover:scale-105 transition-transform"
                  >
                    {aiGenerating ? 'Generating...' : (isRTL ? 'توليد الواجهة' : 'Generate UI')}
                  </button>
                </div>

                {/* Instant Generated Dynamic Widget */}
                <div className="bg-blue-950/40 border border-blue-500/20 p-2.5 rounded-xl flex items-center justify-between text-xs backdrop-blur-sm">
                  <div>
                    <span className="text-[10px] text-cyan-400 uppercase font-bold block">
                      {isRTL ? 'بطاقة مخصصة فورية' : 'Synthesized Dynamic Card'}
                    </span>
                    <span className="font-bold text-white text-xs">
                      Tokyo Shibuya Hotel • 4 Nights
                    </span>
                  </div>
                  <button className="px-3 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs shadow-md">
                    {isRTL ? 'حجز بلمسة' : '1-Click Confirm'}
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Simulator Footer Badge */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="font-semibold text-blue-400">
              💡 {isRTL ? 'النموذج السائد:' : 'Core Paradigm:'} {currentEra.paradigm}
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              Interactive Mode Active
            </span>
          </div>
        </div>

        {/* RIGHT: DEEP UX ANALYSIS & EVOLUTION METRICS (5 COLS) */}
        <div className={`lg:col-span-5 rounded-2xl p-4 sm:p-5 border flex flex-col justify-between shadow-md transition-all ${
          isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-600 text-white">
                {currentEra.era}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {currentEra.badge}
              </span>
            </div>

            <h3 className={`text-base sm:text-lg font-extrabold mb-1.5 ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {currentEra.title}
            </h3>
            
            <p className={`text-xs leading-relaxed mb-3 font-medium ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
              {currentEra.subtitle}
            </p>

            {/* UX Evolution Metrics Comparison Table */}
            <div className={`rounded-xl p-3 border mb-3 space-y-2 text-xs ${
              isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-500 dark:text-slate-400">
                  {isRTL ? 'الجهد الذهني (Cognitive Load):' : 'Cognitive Load:'}
                </span>
                <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                  {currentEra.cognitiveLoad}
                </span>
              </div>
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-500 dark:text-slate-400">
                  {isRTL ? 'وسيلة الإدخال:' : 'Input Modality:'}
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {currentEra.modality}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-500 dark:text-slate-400">
                  {isRTL ? 'الجمهور المستهدف:' : 'Target Audience:'}
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {currentEra.audience}
                </span>
              </div>
            </div>

            {/* Core UX Impact */}
            <div className={`p-2.5 rounded-xl border mb-3 ${
              isDark ? 'bg-blue-950/30 border-blue-800/40 text-slate-200' : 'bg-blue-50/80 border-blue-200 text-slate-900'
            }`}>
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase block mb-1">
                {isRTL ? 'الأثر التاريخي على الـ UX:' : 'Core Historic UX Impact:'}
              </span>
              <p className="text-[11px] leading-relaxed font-medium">
                {currentEra.impact}
              </p>
            </div>
          </div>

          {/* Examples Badges */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold uppercase text-slate-500">
              {isRTL ? 'أمثلة:' : 'Milestones:'}
            </span>
            {currentEra.examples.map((ex, eIdx) => (
              <span 
                key={eIdx}
                className="text-[10px] font-bold px-2 py-0.5 rounded border bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700"
              >
                {ex}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
