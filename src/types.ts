export type Language = 'en' | 'ar';

export type SlideType = 
  | 'intro'
  | 'two-cards'
  | 'three-cards'
  | 'four-cards'
  | 'process-flow'
  | 'quote-three-cards'
  | 'tools-showcase'
  | 'comparison'
  | 'comparison-table'
  | 'component-anatomy'
  | 'journey-flow'
  | 'scenario-comparison'
  | 'timeline'
  | 'honeycomb'
  | 'product-analysis'
  | 'exercise'
  | 'summary-references'
  | 'dark-quote'
  | 'dark-cta'
  | 'interactive-ecosystem'
  | 'table-matrix'
  | 'role-deep-dive'
  | 'interactive-comparison'
  | 'practical-exercise'
  | 'summary';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  keyOutputs?: string[];
  iconName?: string;
}

export interface FeatureCard {
  number?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  bullets?: string[];
  highlight?: string;
  tag?: string;
  isNegative?: boolean;
}

export interface ComparisonRow {
  aspect?: string;
  ux?: string;
  ui?: string;
  feature?: string;
  toolA?: string;
  toolB?: string;
  toolC?: string;
  figma?: string;
  sketch?: string;
  adobeXd?: string;
  winner?: string;
  competitorA?: string;
  competitorB?: string;
  ourAdvantage?: string;
  [key: string]: any;
}

export interface TimelineItem {
  era: string;
  title: string;
  description: string;
  milestone: string;
  iconName?: string;
  examples?: string[];
}

export interface ReferenceBook {
  author: string;
  title: string;
  concept: string;
  tag?: string;
}

export interface HoneycombFactor {
  key: string;
  name: string;
  arabicName: string;
  iconName: string;
  tagline: string;
  question: string;
  description: string;
  color: string;
}

export interface SlideData {
  id: number;
  slideNumber: string; // e.g. "01 / 26"
  type: SlideType;
  topRightTag: string; // In LTR: category
  topLeftTag: string;  // In LTR: chapter/meta
  subBadge: string;    // e.g. "─── Welcome to the Diploma"
  mainTitle: string;
  highlightedWords?: string[];
  subtitle?: string;
  quoteHeader?: string;
  quoteAuthor?: string;
  cards?: FeatureCard[];
  processSteps?: ProcessStep[];
  comparisonRows?: ComparisonRow[];
  timelineItems?: TimelineItem[];
  references?: ReferenceBook[];
  factors?: HoneycombFactor[];
  speakerNotes: string[];
  darkTheme?: boolean;
  ctaButtonText?: string;
}

export interface ChapterPresentation {
  chapterId: string;
  chapterTitle: string;
  courseName: string;
  duration?: string;
  totalSlides: number;
  slides: SlideData[];
}
