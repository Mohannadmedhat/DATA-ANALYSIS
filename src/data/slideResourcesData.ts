export interface SlideResourceItem {
  title: string;
  source: string;
  type: 'paper' | 'study' | 'book' | 'article' | 'tool' | 'guideline' | 'framework';
  descriptionAr: string;
  descriptionEn: string;
  tagAr: string;
  tagEn: string;
  searchQuery: string;
  url?: string;
}

// Map key format: `${sessionId}_${slideId}` e.g. "session-01_1", "session-01_2"
export const slideResourcesDatabase: Record<string, SlideResourceItem[]> = {
  // =========================================================================
  // SESSION 01: DATA ANALYSIS FUNDAMENTALS (10 SLIDES)
  // =========================================================================
  'session-01_1': [
    {
      title: 'Data-Driven: Creating a Data Culture',
      source: 'Hilary Mason & DJ Patil (Former U.S. Chief Data Scientist)',
      type: 'book',
      descriptionAr: 'الدليل المرجعي لكيفية بناء ثقافة البيانات في المؤسسات الحديثة وتحويل الفرق إلى اتخاذ قرارات مبنية على الحقائق.',
      descriptionEn: 'The authoritative guide on fostering data-informed cultures in modern organizations.',
      tagAr: 'مرجع تأسيسي',
      tagEn: 'Foundational',
      searchQuery: 'Data Driven Hilary Mason DJ Patil',
      url: 'https://www.oreilly.com/library/view/data-driven/9781491921180/'
    },
    {
      title: 'Google Data Analytics Professional Certificate Framework',
      source: 'Google Career Certificates',
      type: 'framework',
      descriptionAr: 'منهجية جوجل الاحترافية لإعداد محللي البيانات: Ask, Prepare, Process, Analyze, Share, Act.',
      descriptionEn: 'Google\'s 6-step analytics methodology: Ask, Prepare, Process, Analyze, Share, and Act.',
      tagAr: 'منهجية معتمدة',
      tagEn: 'Methodology',
      searchQuery: 'Google Data Analytics Certificate Curriculum',
      url: 'https://grow.google/certificates/data-analytics/'
    }
  ],

  'session-01_2': [
    {
      title: 'CRISP-DM 1.0: Step-by-step data mining guide',
      source: 'Chapman et al. (CRISP-DM Consortium)',
      type: 'paper',
      descriptionAr: 'المعيار الصناعي العالمي الأكثر استخداماً لتنفيذ مشاريع تحليل البيانات واستخراج الأنماط (Cross-Industry Standard Process for Data Mining).',
      descriptionEn: 'The most widely adopted cross-industry standard framework for structuring data mining and analytics projects.',
      tagAr: 'معيار صناعي',
      tagEn: 'Industry Standard',
      searchQuery: 'CRISP DM methodology guide Chapman',
      url: 'https://www.the-modeling-agency.com/crisp-dm.pdf'
    },
    {
      title: 'The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling',
      source: 'Ralph Kimball & Margy Ross',
      type: 'book',
      descriptionAr: 'الكتاب المرجعي الرائد في هندسة وهيكلة مستودعات البيانات ونمذجة الجداول لغايات التحليل التجاري.',
      descriptionEn: 'The definitive classic on dimensional modeling for business intelligence and data warehouses.',
      tagAr: 'مرجع في نمذجة البيانات',
      tagEn: 'Dimensional Modeling',
      searchQuery: 'Ralph Kimball Data Warehouse Toolkit'
    }
  ],

  'session-01_3': [
    {
      title: 'Evidence-Based Management and Data-Driven Decision Making',
      source: 'Harvard Business Review (HBR)',
      type: 'article',
      descriptionAr: 'دراسة هارفارد حول كيفية تحقيق الشركات التي تعتمد على القرارات القائمة على البيانات لعائد استثماري ونمو أعلى بنسبة 300%.',
      descriptionEn: 'Harvard Business Review research showing how data-driven organizations gain substantial market advantage.',
      tagAr: 'دراسة جدوى وأعمال',
      tagEn: 'Business Impact',
      searchQuery: 'Harvard Business Review Data Driven Decision Making',
      url: 'https://hbr.org/topic/data-and-data-analytics'
    },
    {
      title: 'Competing on Analytics: The New Science of Winning',
      source: 'Thomas H. Davenport (Harvard Business School Press)',
      type: 'book',
      descriptionAr: 'كتاب توماس دافنبورت الكلاسيكي الذي يشرح كيف تستخدم الشركات الرائدة البيانات كسلاح استراتيجي للمنافسة والريادة.',
      descriptionEn: 'Landmark book explaining how market leaders turn data analytics into their core competitive weapon.',
      tagAr: 'استراتيجية الأعمال',
      tagEn: 'Analytics Strategy',
      searchQuery: 'Competing on Analytics Thomas Davenport'
    }
  ],

  'session-01_4': [
    {
      title: 'Big Data in Practice: How 45 Successful Companies Used Big Data',
      source: 'Bernard Marr',
      type: 'book',
      descriptionAr: '45 دراسة حالة واقعية لكيفية توظيف البيانات في كبرى الشركات (Amazon, Netflix, Apple, Uber, Walmart) لتحقيق أرباح قياسية.',
      descriptionEn: 'Real-world case studies detailing how 45 top enterprises leverage data analytics for growth.',
      tagAr: 'حالات عملية واقعية',
      tagEn: 'Case Studies',
      searchQuery: 'Big Data in Practice Bernard Marr'
    }
  ],

  'session-01_5': [
    {
      title: 'The DIKW Pyramid: Data, Information, Knowledge, Insight & Wisdom',
      source: 'Russell Ackoff & Jennifer Rowley (Journal of Information Science)',
      type: 'paper',
      descriptionAr: 'الورقة العلمية المؤسسة لهرم DIKW الشهير الذي يوضح التحول التصاعدي من الحقائق المبعثرة (Data) إلى الحكمة وصناعة القرار (Action/Wisdom).',
      descriptionEn: 'Foundational paper on the hierarchical progression from raw data to information, insight, and wisdom.',
      tagAr: 'الأساس النظري',
      tagEn: 'Theoretical Model',
      searchQuery: 'The wisdom hierarchy representations of the DIKW hierarchy Rowley'
    }
  ],

  'session-01_6': [
    {
      title: 'OpenIntro Statistics: Categorical & Numerical Data',
      source: 'David Diez, Christopher Barr & Mine Çetinkaya-Rundel',
      type: 'book',
      descriptionAr: 'المرجع الإحصائي المفتوح في التمييز بين البيانات النوعية (Nominal/Ordinal) والبيانات الكمية (Discrete/Continuous).',
      descriptionEn: 'Comprehensive statistical textbook covering variable types, distributions, and measurement scales.',
      tagAr: 'إحصاء تطبيقي',
      tagEn: 'Applied Statistics',
      searchQuery: 'OpenIntro Statistics textbook',
      url: 'https://www.openintro.org/book/os/'
    }
  ],

  'session-01_7': [
    {
      title: 'Managing Unstructured Data: A Survey of Architectures and Techniques',
      source: 'IEEE Transactions on Knowledge and Data Engineering',
      type: 'paper',
      descriptionAr: 'ورقة بحثية من IEEE تشرح البنى التحتية لتنظيم وتخزين البيانات غير المنظمة وشبه المنظمة واستخراج المعرفة منها.',
      descriptionEn: 'IEEE research survey on architectures and modern pipelines for handling unstructured enterprise data.',
      tagAr: 'هندسة البيانات',
      tagEn: 'Data Architecture',
      searchQuery: 'IEEE unstructured data management techniques'
    }
  ],

  'session-01_8': [
    {
      title: 'Exploratory Data Analysis (EDA)',
      source: 'John W. Tukey (Father of Modern Data Analysis)',
      type: 'book',
      descriptionAr: 'الكتاب الأيقوني لجون توكي الذي أسس منهجية الاستكشاف البصري والإحصائي قبل بناء أي نموذج رياضي.',
      descriptionEn: 'The historic classic by John Tukey establishing the Exploratory Data Analysis discipline.',
      tagAr: 'مرجع كلاسيكي',
      tagEn: 'Pioneering Work',
      searchQuery: 'John Tukey Exploratory Data Analysis book'
    }
  ],

  'session-01_9': [
    {
      title: 'Designing Data-Intensive Applications',
      source: 'Martin Kleppmann',
      type: 'book',
      descriptionAr: 'المرجع الأشهر في هندسة خطوط تدفق البيانات (Pipelines) والـ ETL والتخزين الموزع بين قواعد البيانات ومستودعات DWH.',
      descriptionEn: 'The definitive engineering guide on data pipelines, ETL architectures, and distributed storage systems.',
      tagAr: 'هندسة خطوط البيانات',
      tagEn: 'Data Pipelines',
      searchQuery: 'Designing Data Intensive Applications Martin Kleppmann'
    }
  ],

  'session-01_10': [
    {
      title: 'Python for Data Analysis: Data Wrangling with Pandas, NumPy, and Jupyter',
      source: 'Wes McKinney (Creator of Pandas)',
      type: 'book',
      descriptionAr: 'الكتاب الرسمي من مبتكر مكتبة Pandas، يشرح المسار العملي لمحلل البيانات باستخدام بيئة بايثون المتكاملة.',
      descriptionEn: 'The authoritative practical guide by the creator of pandas for real-world data wrangling and analytics.',
      tagAr: 'دليل بايثون الرسمي',
      tagEn: 'Official Python Guide',
      searchQuery: 'Python for Data Analysis Wes McKinney',
      url: 'https://wesmckinney.com/book/'
    },
    {
      title: 'Show Me the Numbers: Designing Tables and Graphs to Enlighten',
      source: 'Stephen Few',
      type: 'book',
      descriptionAr: 'المرجع البصري الأهم في تصميم الجداول والرسوم البيانية ولوحات القيادة (Dashboards) في Power BI و Tableau.',
      descriptionEn: 'Essential guide on effective data visualization design, table structure, and dashboard communication.',
      tagAr: 'تصميم التقارير البصرية',
      tagEn: 'Data Storytelling',
      searchQuery: 'Show Me the Numbers Stephen Few'
    }
  ]
};
