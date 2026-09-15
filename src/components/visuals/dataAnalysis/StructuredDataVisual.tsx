import React from 'react';
import { motion } from 'motion/react';
import { 
  Table, 
  Code2, 
  Globe, 
  Database, 
  Layers, 
  Link2, 
  ShoppingBag, 
  TrendingUp, 
  Cpu, 
  FileText, 
  Workflow, 
  Server,
  Sparkles
} from 'lucide-react';
import { FeatureCard } from '../../../types';

interface StructuredDataVisualProps {
  cards?: FeatureCard[];
  isRTL: boolean;
}

export const StructuredDataVisual: React.FC<StructuredDataVisualProps> = ({ cards, isRTL }) => {
  // Default items if cards is not provided (Fallback to Slide 07)
  const defaultItems: FeatureCard[] = [
    {
      title: isRTL ? 'البيانات المنظمة (Structured)' : 'STRUCTURED',
      subtitle: isRTL ? 'جداول محددة الحقول والأنواع' : 'Rigid tabular schema',
      description: isRTL ? 'داتا مترتبة في جداول محددة بصفوف وأعمدة واضحة زي شيتات Excel وقواعد بيانات SQL.' : 'Highly organized data stored in standardized schemas, easily queryable with SQL and Excel.',
      bullets: isRTL ? ['جداول قواعد البيانات (SQL Tables)', 'ملفات إكسيل (Excel Files)', 'ملفات CSV المنظمة', 'أنظمة CRM و ERP'] : ['SQL Database Tables', 'Excel Spreadsheets', 'Clean CSV Datasets', 'Enterprise ERP Systems'],
      tag: 'Tables & SQL'
    },
    {
      title: isRTL ? 'البيانات شبه المنظمة (Semi-Structured)' : 'SEMI-STRUCTURED',
      subtitle: isRTL ? 'تحتوي على وسوم وتدرج هرمي' : 'Hierarchical with tags & keys',
      description: isRTL ? 'داتا فيها وسوم وهيكل مرن زي ملفات الـ JSON والـ XML وسجلات الخوادم.' : 'Data with tags and hierarchical structure like JSON payloads and XML feeds.',
      bullets: isRTL ? ['ملفات JSON للواجهات البرمجية (APIs)', 'مستندات XML', 'سجلات الخوادم (Server Logs)', 'قواعد بيانات NoSQL'] : ['JSON API Payloads', 'XML Documents', 'Web Server Logs', 'NoSQL Collections'],
      tag: 'JSON & XML'
    },
    {
      title: isRTL ? 'البيانات غير المنظمة (Unstructured)' : 'UNSTRUCTURED',
      subtitle: isRTL ? 'نصوص حرة وملفات وسائط' : 'Free-form media & text',
      description: isRTL ? 'داتا بدون هيكل محدد زي الصور والفيديوهات والإيميلات وبوستات السوشيال ميديا.' : 'Free-form media and rich text representing ~80% of all generated enterprise data.',
      bullets: isRTL ? ['الصور والرسومات (Images)', 'مقاطع الفيديو (Videos)', 'رسائل البريد الإلكتروني (Emails)', 'المستندات والتقارير الحرة'] : ['Images & Graphics', 'Videos & Audio', 'Emails & Chats', 'PDF Documents'],
      tag: '~80% of Data'
    }
  ];

  const itemsToRender = (cards && cards.length >= 3) ? cards.slice(0, 3) : defaultItems;

  const getCardIcon = (title: string, idx: number) => {
    const t = title.toLowerCase();
    if (t.includes('structured') && !t.includes('semi') && !t.includes('un')) {
      return <Table className="w-5 h-5 text-blue-600" />;
    }
    if (t.includes('semi') || t.includes('json') || t.includes('xml')) {
      return <Code2 className="w-5 h-5 text-amber-600" />;
    }
    if (t.includes('unstructured') || t.includes('media') || t.includes('image')) {
      return <Globe className="w-5 h-5 text-indigo-600" />;
    }
    if (t.includes('database') || t.includes('concepts') || t.includes('مفهوم')) {
      return <Database className="w-5 h-5 text-blue-600" />;
    }
    if (t.includes('table') || t.includes('جداول')) {
      return <Table className="w-5 h-5 text-indigo-600" />;
    }
    if (t.includes('relationship') || t.includes('علاقات') || t.includes('link') || t.includes('key')) {
      return <Link2 className="w-5 h-5 text-cyan-600" />;
    }
    if (t.includes('power query') || t.includes('تجهيز') || t.includes('etl')) {
      return <Workflow className="w-5 h-5 text-amber-600" />;
    }
    if (t.includes('model') || t.includes('star schema') || t.includes('نمذجة')) {
      return <Layers className="w-5 h-5 text-blue-600" />;
    }
    if (t.includes('price') || t.includes('product') || t.includes('أسعار') || t.includes('منتجات')) {
      return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
    }
    if (t.includes('market') || t.includes('سوق') || t.includes('analysis')) {
      return <TrendingUp className="w-5 h-5 text-blue-600" />;
    }
    if (t.includes('automation') || t.includes('أتمتة') || t.includes('schedule')) {
      return <Cpu className="w-5 h-5 text-purple-600" />;
    }
    return idx === 0 ? <Table className="w-5 h-5 text-blue-600" /> : idx === 1 ? <Database className="w-5 h-5 text-amber-600" /> : <Globe className="w-5 h-5 text-indigo-600" />;
  };

  const getAccentColors = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          iconBg: 'bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
          badge: 'bg-blue-50 text-blue-700 border-blue-200',
          bulletDot: 'bg-blue-600',
          borderColor: 'border-blue-200/90'
        };
      case 1:
        return {
          iconBg: 'bg-amber-50 border-amber-100 group-hover:bg-amber-600 group-hover:text-white',
          badge: 'bg-amber-50 text-amber-700 border-amber-200',
          bulletDot: 'bg-amber-500',
          borderColor: 'border-amber-200/90'
        };
      case 2:
      default:
        return {
          iconBg: 'bg-indigo-50 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
          badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          bulletDot: 'bg-indigo-600',
          borderColor: 'border-indigo-200/90'
        };
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full h-full items-stretch py-1 max-w-5xl mx-auto select-none">
      {itemsToRender.map((item, idx) => {
        const colors = getAccentColors(idx);
        const tagText = item.tag || item.subtitle || (isRTL ? `المحور 0${idx + 1}` : `Pillar 0${idx + 1}`);

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * idx, duration: 0.35, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className={`flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border ${colors.borderColor} shadow-sm hover:shadow-md transition-all group text-start`}
          >
            <div>
              {/* Header / Icon & Badge */}
              <div className="flex items-center justify-between mb-3.5">
                <div className={`w-10 h-10 rounded-xl ${colors.iconBg} border flex items-center justify-center transition-all [&>svg]:group-hover:text-white shadow-sm`}>
                  {getCardIcon(item.title, idx)}
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border ${colors.badge} uppercase tracking-wider`}>
                  {tagText}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              {item.description && (
                <p className="text-xs sm:text-[13px] text-slate-600 mb-3 leading-relaxed font-normal">
                  {item.description}
                </p>
              )}

              {/* Bullets if available */}
              {item.bullets && item.bullets.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {item.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.bulletDot} shrink-0`} />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
              <span>{isRTL ? `المحور 0${idx + 1}` : `Pillar 0${idx + 1}`}</span>
              <span className="text-slate-400 group-hover:text-blue-500 font-mono font-bold transition-colors">0{idx + 1}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
