import React from 'react';
import { motion } from 'motion/react';
import { Table, Code2, Globe, FileText, Database, Layers } from 'lucide-react';
import { FeatureCard } from '../../../types';

interface StructuredDataVisualProps {
  cards?: FeatureCard[];
  isRTL: boolean;
}

export const StructuredDataVisual: React.FC<StructuredDataVisualProps> = ({ cards, isRTL }) => {
  const defaultItems = [
    {
      title: isRTL ? 'بيانات منظمة (Structured)' : 'STRUCTURED',
      subtitle: isRTL ? 'جداول محددة الحقول والأنواع' : 'Rigid tabular schema',
      icon: <Table className="w-6 h-6 text-blue-600" />,
      iconBg: 'bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
      badge: isRTL ? 'قواعد بيانات وجداول' : 'Tabular & SQL',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      bullets: isRTL ? ['جداول قواعد البيانات (SQL Tables)', 'ملفات إكسيل (Excel Worksheets)', 'ملفات CSV المنظمة', 'أنظمة CRM و ERP'] : ['SQL Database Tables', 'Excel Spreadsheets', 'Clean CSV Datasets', 'Enterprise ERP Systems']
    },
    {
      title: isRTL ? 'بيانات شبه منظمة (Semi-Structured)' : 'SEMI-STRUCTURED',
      subtitle: isRTL ? 'تحتوي على وسوم وتدرج هرمي' : 'Hierarchical with tags & keys',
      icon: <Code2 className="w-6 h-6 text-amber-600" />,
      iconBg: 'bg-amber-50 border-amber-100 group-hover:bg-amber-600 group-hover:text-white',
      badge: isRTL ? 'بيانات الويب والـ APIs' : 'APIs & Web Feeds',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      bullets: isRTL ? ['ملفات JSON للواجهات البرمجية', 'مستندات XML', 'سجلات الخوادم (Server Logs)', 'قواعد بيانات NoSQL (MongoDB)'] : ['JSON API Payloads', 'XML Documents', 'Web Server Logs', 'NoSQL Collections']
    },
    {
      title: isRTL ? 'بيانات غير منظمة (Unstructured)' : 'UNSTRUCTURED',
      subtitle: isRTL ? 'نصوص حرة وملفات وسائط' : 'Free-form media & text',
      icon: <Globe className="w-6 h-6 text-slate-700" />,
      iconBg: 'bg-slate-100 border-slate-200 group-hover:bg-slate-800 group-hover:text-white',
      badge: isRTL ? 'تمثل 80% من بيانات العالم' : '~80% of World Data',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      bullets: isRTL ? ['الصور والرسومات (Images)', 'مقاطع الفيديو والصوتيات (Videos/Audio)', 'رسائل البريد الإلكتروني (Emails)', 'مستندات PDF والتقارير الحرة'] : ['Images & Graphics', 'Video & Audio Files', 'Emails & Chat Messages', 'PDFs & Rich Text Documents']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full h-full items-center py-2 max-w-5xl mx-auto">
      {defaultItems.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 * idx, duration: 0.4 }}
          whileHover={{ y: -5 }}
          className="flex flex-col justify-between h-[370px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all group"
        >
          <div>
            {/* Header / Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border flex items-center justify-center transition-all [&>svg]:group-hover:text-white shadow-sm`}>
                {item.icon}
              </div>
              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                {item.badge}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-4">
              {item.subtitle}
            </p>

            {/* Bullets */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              {item.bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-blue-600 shrink-0 transition-colors" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-bold">
            <span>{isRTL ? `تصنيف 0${idx + 1}` : `Class 0${idx + 1}`}</span>
            <span className="text-slate-300 group-hover:text-blue-500 transition-colors">➔</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
