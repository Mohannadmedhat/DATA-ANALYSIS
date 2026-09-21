import React from 'react';
import { Database, BarChart3, TrendingUp, Binary } from 'lucide-react';
import { HeroCoverVisual, FloatingBadgeItem, StatCardItem } from './HeroCoverVisual';

interface DataIntroVisualProps {
  isRTL?: boolean;
  onStart?: () => void;
}

export const DataIntroVisual: React.FC<DataIntroVisualProps> = ({ onStart }) => {
  const floatingBadges: FloatingBadgeItem[] = [
    {
      icon: Database,
      label: 'Big Data & SQL',
      position: 'top-left',
      borderColor: 'border-blue-500/50',
      textColor: 'text-blue-400'
    },
    {
      icon: BarChart3,
      label: 'Interactive Dashboards',
      position: 'top-right',
      borderColor: 'border-cyan-500/50',
      textColor: 'text-cyan-400'
    },
    {
      icon: TrendingUp,
      label: 'Predictive Analytics',
      position: 'bottom-left',
      borderColor: 'border-emerald-500/50',
      textColor: 'text-emerald-400'
    },
    {
      icon: Binary,
      label: 'Python & Statistics',
      position: 'bottom-right',
      borderColor: 'border-purple-500/50',
      textColor: 'text-purple-400'
    }
  ];

  const statsCards: StatCardItem[] = [
    {
      val: '8 Stages',
      label: 'Curriculum Roadmap',
      sub: 'From zero to job-ready'
    },
    {
      val: '7 Modules',
      label: 'Applied Core Modules',
      sub: 'Real-world projects'
    },
    {
      val: '5 Core Tools',
      label: 'Industry Tech Stack',
      sub: 'Excel • SQL • Python • BI • Tableau'
    }
  ];

  return (
    <HeroCoverVisual
      sessionNumber="01"
      courseTag="Data Analysis Diploma"
      titlePrefix="DATA ANALYSIS"
      titleHighlight="FUNDAMENTALS"
      subtitle="Your Complete Roadmap to Become a Job-Ready Data Analyst"
      floatingBadges={floatingBadges}
      statsCards={statsCards}
      onStart={onStart}
    />
  );
};

