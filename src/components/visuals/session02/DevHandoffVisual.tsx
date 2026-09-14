import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Copy, Check, Sparkles, Terminal, FileCode2, Layers, Cpu, CheckCircle2 } from 'lucide-react';

interface Props {
  language?: 'ar' | 'en';
  isDark?: boolean;
}

export const DevHandoffVisual: React.FC<Props> = ({ language = 'ar', isDark = true }) => {
  const isRTL = language === 'ar';
  const [selectedLanguage, setSelectedLanguage] = useState<'css' | 'swift' | 'compose'>('css');
  const [copied, setCopied] = useState(false);
  const [selectedElement, setSelectedElement] = useState<'primary-btn' | 'card-container'>('primary-btn');

  const codeSnippets = {
    'primary-btn': {
      css: `/* Primary Button (8pt Grid & Tokens) */
.btn-primary {
  display: flex;
  padding: 12px 24px;
  background: var(--color-primary-600, #2563EB);
  border-radius: var(--radius-md, 8px);
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
  transition: all 0.2s ease-in-out;
}`,
      swift: `// iOS Swift / SwiftUI Component
Button(action: {
    viewModel.submitOrder()
}) {
    Text("${isRTL ? 'تأكيد ومتابعة الدفع' : 'Confirm & Pay Order'}")
        .font(.system(size: 14, weight: .semibold))
        .foregroundColor(.white)
        .padding(.horizontal, 24)
        .padding(.vertical, 12)
        .background(Color.primaryBlue600)
        .cornerRadius(8)
}`,
      compose: `// Android Jetpack Compose
Button(
    onClick = { onCheckout() },
    colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary),
    shape = RoundedCornerShape(8.dp),
    modifier = Modifier.padding(horizontal = 24.dp, vertical = 12.dp)
) {
    Text(text = "${isRTL ? 'تأكيد ومتابعة الدفع' : 'Confirm & Pay Order'}", style = MaterialTheme.typography.labelLarge)
}`
    },
    'card-container': {
      css: `/* Product Card Container */
.product-card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  background: var(--surface-primary, #FFFFFF);
  border: 1px solid var(--border-subtle, #E2E8F0);
  border-radius: var(--radius-lg, 12px);
}`,
      swift: `// SwiftUI Card Container
VStack(alignment: .leading, spacing: 12) {
    CardHeaderView()
    CardBodyContent()
}
.padding(16)
.background(Color.surfacePrimary)
.cornerRadius(12)
.overlay(RoundedRectangle(cornerRadius: 12).stroke(Color.borderSubtle, lineWidth: 1))`,
      compose: `// Jetpack Compose Card
Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(12.dp),
    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
) {
    Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
        CardContent()
    }
}`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[selectedElement][selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-4">
      {/* Top Bar: Explaining Dev Mode & Handshake */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className={`flex items-center gap-1.5 p-1 rounded-xl border ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            onClick={() => setSelectedElement('primary-btn')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedElement === 'primary-btn'
                ? 'bg-blue-600 text-white shadow-md'
                : (isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            {isRTL ? 'فحص زر الـ Primary CTA' : 'Inspect Button Element'}
          </button>
          <button
            onClick={() => setSelectedElement('card-container')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedElement === 'card-container'
                ? 'bg-blue-600 text-white shadow-md'
                : (isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900')
            }`}
          >
            {isRTL ? 'فحص بطاقة الـ Product Card' : 'Inspect Card Container'}
          </button>
        </div>

        <div className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
          isDark ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/40' : 'bg-emerald-50 text-emerald-800 border-emerald-200'
        }`}>
          {isRTL ? '⚡ فحص وتوليد الكود التلقائي (Figma Dev Mode)' : '⚡ Live Code Generation & Tokens'}
        </div>
      </div>

      {/* Main Grid: Visual Element Preview vs Generated Dev Code */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left Column: UI Canvas & Token Specs */}
        <div className={`lg:col-span-5 rounded-xl p-5 border shadow-sm flex flex-col justify-between ${
          isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                isDark ? 'bg-blue-950 text-blue-300 border-blue-800/40' : 'bg-blue-50 text-blue-700 border-blue-200'
              }`}>
                {isRTL ? 'معاينة العنصر في الـ Canvas' : 'Canvas Preview'}
              </span>
              <span className="text-xs font-mono font-bold text-blue-500">Auto Layout: Flex</span>
            </div>

            {/* Simulated Figma Element Box */}
            <div className={`p-6 rounded-xl border-2 border-dashed flex items-center justify-center my-4 ${
              isDark ? 'bg-slate-950 border-blue-500/50' : 'bg-slate-50 border-blue-400'
            }`}>
              {selectedElement === 'primary-btn' ? (
                <div className="relative group cursor-pointer">
                  <div className="px-6 py-3 rounded-lg bg-blue-600 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2">
                    <span>{isRTL ? 'تأكيد ومتابعة الدفع' : 'Confirm & Pay Order'}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="absolute -top-3 -right-2 text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 font-bold">
                    12px × 24px
                  </span>
                </div>
              ) : (
                <div className="w-full max-w-[240px] p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-xs">
                    IMG
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">{isRTL ? 'سماعات بلوتوث لاسلكية' : 'Wireless Pro Headphones'}</h5>
                  <p className="text-[10px] text-slate-500">{isRTL ? 'صوت محيطي نقي وعازل للضوضاء' : 'Spatial Audio & ANC Active Noise Cancel'}</p>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-emerald-600">
                    <span>{isRTL ? '350 ج.م' : '$149.00'}</span>
                    <span className="text-[10px] text-blue-500 font-mono">Radius: 12px</span>
                  </div>
                </div>
              )}
            </div>

            {/* Design Token Values */}
            <div className="space-y-1.5 text-xs font-mono font-bold">
              <div className={`p-2.5 rounded-lg border flex justify-between ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Color Token:</span>
                <span className={`font-black ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>color.primary.600 (#2563EB)</span>
              </div>
              <div className={`p-2.5 rounded-lg border flex justify-between ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Padding Spacing:</span>
                <span className={`font-black ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>space-3 (12px) / space-6 (24px)</span>
              </div>
            </div>
          </div>

          <div className={`pt-3 border-t ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'} text-xs font-bold`}>
            {isRTL ? 'المطور ينسخ القيم الموحدة بدقة 100% دون تخمين ألوان أو مسافات' : 'Zero guess-work for frontend developers'}
          </div>
        </div>

        {/* Right Column: Code Generator Box */}
        <div className="lg:col-span-7 rounded-xl bg-slate-950 border border-slate-800 shadow-sm flex flex-col justify-between overflow-hidden">
          {/* Code Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              {(['css', 'swift', 'compose'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    selectedLanguage === lang
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-800'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopy}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (isRTL ? 'تم النسخ!' : 'Copied!') : (isRTL ? 'نسخ الكود' : 'Copy Code')}</span>
            </button>
          </div>

          {/* Code Viewer Area */}
          <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-blue-300 select-text" dir="ltr">
            <pre className="text-slate-200">
              <code>{codeSnippets[selectedElement][selectedLanguage]}</code>
            </pre>
          </div>

          {/* Footer Bar: Integrated Handoff Pipeline */}
          <div className="px-4 py-2.5 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-sans">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>VS Code Extension Ready</span>
            </span>
            <span className="font-mono text-emerald-400 font-bold">Pixel-Perfect Handoff</span>
          </div>
        </div>
      </div>
    </div>
  );
};
