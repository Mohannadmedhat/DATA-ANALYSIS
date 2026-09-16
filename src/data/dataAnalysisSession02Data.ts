import { ChapterPresentation } from '../types';
import { presentationEN, presentationAR } from './slidesData';

// Clone Session 01 slides and adapt for Session 02 Data Analysis
export const dataAnalysisSession02EN: ChapterPresentation = {
  chapterId: 'data-analysis-session-02',
  chapterTitle: 'Session 02: Advanced Data Analytics & Visualization',
  courseName: 'Data Analysis Diploma • Session 02',
  duration: 'Duration: 3 Hours',
  totalSlides: 44,
  slides: presentationEN.slides.map((slide) => {
    const updatedSlideNumber = slide.slideNumber.replace(' / 44', ' / 44');
    let updatedTopRightTag = slide.topRightTag.replace('SESSION 01', 'SESSION 02');
    if (slide.id === 1) {
      updatedTopRightTag = 'DATA ANALYSIS DIPLOMA • SESSION 02';
    }
    const updatedTopLeftTag = slide.topLeftTag ? slide.topLeftTag.replace('SESSION 01', 'SESSION 02') : '';

    if (slide.id === 44) {
      return {
        ...slide,
        slideNumber: updatedSlideNumber,
        topRightTag: 'COMPLETED',
        topLeftTag: 'DATA ANALYSIS DIPLOMA • SESSION 02',
        subBadge: 'SESSION 02 COMPLETED SUCCESSFULLY',
        mainTitle: 'THANK YOU',
        highlightedWords: ['THANK YOU'],
        subtitle: 'Thank you for your active participation! Get ready for hands-on Excel & Data Modeling in the next session.',
      };
    }

    return {
      ...slide,
      slideNumber: updatedSlideNumber,
      topRightTag: updatedTopRightTag,
      topLeftTag: updatedTopLeftTag,
    };
  })
};

export const dataAnalysisSession02AR: ChapterPresentation = {
  chapterId: 'data-analysis-session-02',
  chapterTitle: 'Session 02: تحليل البيانات المتقدم والتطبيقات العملية',
  courseName: 'دبلومة تحليل البيانات (Data Analysis Diploma) • السيشن الثانية',
  duration: 'المدة: 3 ساعات',
  totalSlides: 44,
  slides: presentationAR.slides.map((slide) => {
    const updatedSlideNumber = slide.slideNumber.replace(' / 44', ' / 44');
    let updatedTopRightTag = slide.topRightTag.replace('SESSION 01', 'SESSION 02').replace('01', '02');
    if (slide.id === 1) {
      updatedTopRightTag = 'DATA ANALYSIS DIPLOMA • SESSION 02';
    }
    const updatedTopLeftTag = slide.topLeftTag ? slide.topLeftTag.replace('SESSION 01', 'SESSION 02').replace('01', '02') : '';

    if (slide.id === 44) {
      return {
        ...slide,
        slideNumber: updatedSlideNumber,
        topRightTag: 'اكتملت الجلسة',
        topLeftTag: 'DATA ANALYSIS DIPLOMA • SESSION 02',
        subBadge: 'اكتملت الجلسة الثانية بنجاح',
        mainTitle: 'THANK YOU',
        highlightedWords: ['THANK YOU'],
        subtitle: 'شكراً لحضوركم وتفاعلكم! جهزوا أنفسكم للجلسة القادمة لبدء التطبيق العملي على إكسيل وتحليل البيانات.',
      };
    }

    return {
      ...slide,
      slideNumber: updatedSlideNumber,
      topRightTag: updatedTopRightTag,
      topLeftTag: updatedTopLeftTag,
    };
  })
};
