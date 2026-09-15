import { ChapterPresentation } from '../types';

export const presentationAR: ChapterPresentation = {
  chapterId: 'session-01',
  chapterTitle: 'Session 01: أساسيات تحليل البيانات وخريطة الطريق (Data Analysis Fundamentals)',
  courseName: 'دبلومة تحليل البيانات (Data Analysis Diploma)',
  duration: 'المدة: 3 ساعات',
  totalSlides: 44,
  slides: [
    // Slide 01 — Cover / Title
    {
      id: 1,
      slideNumber: '01 / 44',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 01',
      topLeftTag: 'FOUNDATIONS',
      subBadge: 'المحطة الأولى: الأساس النظري والعملي المتين',
      mainTitle: 'DATA ANALYSIS FUNDAMENTALS',
      highlightedWords: ['FUNDAMENTALS'],
      subtitle: 'دليلك وخريطتك المتكاملة لفهم عالم البيانات وبداية طريقك لسوق العمل (Data Analysis Roadmap)',
      speakerNotes: [
        'مرحباً بيكم يا شباب في أول محطة في دبلومة تحليل البيانات (Data Analysis Diploma)!',
        'النهاردة هنبني مع بعض الفهم الصح اللي هيميزك، وهنعرف إزاي الأرقام بتتحول لقرارات بيزنس بتكسب ملايين، وهناخد جولة شاملة على كل الأدوات اللي هتشتغل بيها بإيدك: Excel، SQL، Power BI، بايثون، وTableau.',
        'السيشن الأول هو حجر الأساس لعقليتك التحليلية وطريقة تفكيرك قبل ما نغوص في شيتات الإكسيل والأكواد.'
      ],
      darkTheme: true,
      ctaButtonText: 'ابدأ الرحلة'
    },

    // Slide 02 — What is Data Analysis?
    {
      id: 2,
      slideNumber: '02 / 44',
      type: 'process-flow',
      topRightTag: 'GETTING STARTED',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'المفهوم البسيط ودورة العمل الممتعة',
      mainTitle: 'ما هو تحليل البيانات؟ (What is Data Analysis?)',
      highlightedWords: ['What is Data Analysis?'],
      subtitle: 'إزاي بنحول الأرقام الخام المبعثرة لقرارات ذكية تكبّر البيزنس؟',
      definitionBox: {
        label: 'المفهوم ببساطة (Core Definition)',
        text: 'تحليل البيانات (Data Analysis) مش مجرد أرقام ورسوم! هو فن وعلم جمع البيانات وتنظيفها من اللخبطة، وفحصها بدقة عشان نكتشف منها أسرار وفرص تساعد صناع القرار يختاروا صح بثقة كاملة.',
        iconName: 'Lightbulb'
      },
      cards: [
        {
          title: 'Collect Data (جمع البيانات)',
          description: 'بنلم البيانات من كل مكان: إكسيل، قواعد بيانات، مواقع إنترنت، أو استبيانات عملاء.',
          iconName: 'Collect'
        },
        {
          title: 'Clean Data (تنظيف البيانات)',
          description: 'بنظف الداتا من التكرار، وبنصلح الأخطاء، وبنعالج الخانات الفاضية (Nulls) عشان نبني على أساس نضيف.',
          iconName: 'Clean'
        },
        {
          title: 'Analyze Data (تحليل وفحص الداتا)',
          description: 'بنستخدم الإحصاء والمنطق عشان نكتشف الأنماط، ونعرف إيه اللي بيحصل وليه بيحصل.',
          iconName: 'Analyze'
        },
        {
          title: 'Visualize Results (عرض النتائج بالرسوم)',
          description: 'بنحول الجداول المعقدة لرسومات بيانية ولوحات تفاعلية أي حد يفهمها في ثواني.',
          iconName: 'Visualize'
        },
        {
          title: 'Generate Insights (استخراج الرؤى والقرارات)',
          description: 'بنترجم الأرقام لنصائح عملية وقرارات بيزنس تزود الأرباح وتقلل التكاليف.',
          iconName: 'Insights'
        }
      ],
      speakerNotes: [
        'فكرهم دايماً إن محلل البيانات هو الحكواتي الرقمي اللي بيشرح للبيزنس الحقيقة ورا الأرقام.',
        'مرحلة تنظيف البيانات (Data Cleaning) بتاخد حوالي 70% إلى 80% من وقتنا، ومفيش تحليل صح من غير داتا نضيفة!'
      ],
      darkTheme: false
    },

    // Slide 03 — Why Data Analysis is Important?
    {
      id: 3,
      slideNumber: '03 / 44',
      type: 'five-cards',
      topRightTag: 'GETTING STARTED',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'ليه كل الشركات بتدور على محلل بيانات؟',
      mainTitle: 'أهمية تحليل البيانات في الأعمال (Why It Matters)',
      highlightedWords: ['Why Data Analysis is Important?'],
      subtitle: 'عشان عصر "التخمين والفهلوة" انتهى.. والقرارات بقت بالدليل والأرقام!',
      cards: [
        {
          title: 'Better Decision Making (قرارات أدق ومحسوبة)',
          description: 'بدل ما نمشي بالإحساس أو التخمين، كل خطوة وقرار في البيزنس بيكون مسنود بأدلة وأرقام قاطعة.',
          tag: 'Core Value'
        },
        {
          title: 'Understanding Customers (فهم سلوك ورغبات العملاء)',
          description: 'بنعرف العميل بيحب إيه، بيشتري إمتى، وليه بيبطل يشتري، عشان نقدم له التجربة اللي تبسطه.',
          tag: 'Customer Focus'
        },
        {
          title: 'Improving Efficiency (رفع الكفاءة وتوفير التكاليف)',
          description: 'بنكتشف إيه اللي بيهدر وقت وفلوس الشركة وبنحسّن سير العمل والإنتاجية لأعلى مستوى.',
          tag: 'Operations'
        },
        {
          title: 'Predicting Trends (توقع المستقبل والاتجاهات)',
          description: 'بنقرا السوق والتريندات قبل ما تحصل، عشان نكون دايماً سابقين المنافسين بخطوة.',
          tag: 'Future Sight'
        },
        {
          title: 'Competitive Advantage (ميزة تنافسية جبارة)',
          description: 'الشركات اللي بتعتمد على الداتا بتنمو وتتوسع أسرع بكتير من أي منافس ماشي بالبركة.',
          tag: 'Market Edge'
        }
      ],
      speakerNotes: [
        'اشرح بمثال حي: شركة كانت بتخسر ملايين في إعلانات غير موجهة، ولما حللوا بيانات المشترين وفروا 40% من ميزانية التسويق وزادوا المبيعات.'
      ],
      darkTheme: false
    },

    // Slide 04 — Data in Real Life
    {
      id: 4,
      slideNumber: '04 / 44',
      type: 'four-cards',
      topRightTag: 'GETTING STARTED',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'أمثلة حية من حياتنا اليومية',
      mainTitle: 'البيانات في الحياة العملية (Data in Real Life)',
      highlightedWords: ['Data in Real Life'],
      subtitle: 'البيانات مش مجرد كلام نظري.. دي المحرك الحقيقي لأكبر الشركات حولك!',
      cards: [
        {
          title: 'Netflix (ترشيحات نتفليكس الذكية)',
          description: 'بتحلل كل ثانية بتتفرج عليها، والأفلام اللي وقفتها، عشان تقترحلك المحتوى اللي هيعجبك بالظبط.',
          tag: 'Entertainment'
        },
        {
          title: 'Amazon & E-commerce (أمازون والمتاجر)',
          description: 'بتحلل مشتريات ملايين الناس عشان تقترح "منتجات يشتريها الآخرون معا"، وتظبط تسعير المنتجات تلقائياً.',
          tag: 'E-Commerce'
        },
        {
          title: 'Uber & Careem (تطبيقات المواصلات)',
          description: 'بتحسب ديناميكية التسعير (Surge Pricing) وأسرع الطرق حسب زحمة الشوارع والطلب في اللحظة الفعلية.',
          tag: 'Logistics'
        },
        {
          title: 'Healthcare (المستشفيات والرعاية الصحية)',
          description: 'بتتوقع أوقات ذروة المرضى وتساعد الدكاترة يكتشفوا الأمراض بدقة وتشخيص أسرع.',
          tag: 'Health & Medical'
        }
      ],
      speakerNotes: [
        'اسأل المتدربين: مين فيكم لاحظ إن نتفليكس بيغير صورة بوستر الفيلم نفسه حسب نوع الأفلام اللي بتفضلها؟ دي قوة تحليل البيانات!'
      ],
      darkTheme: false
    },

    // Slide 05 — Data vs Information vs Insight
    {
      id: 5,
      slideNumber: '05 / 44',
      type: 'pyramid',
      topRightTag: 'DATA CONCEPTS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'رحلة تحول الأرقام إلى قيمة حقيقية',
      mainTitle: 'البيانات مقابل المعلومات مقابل الرؤى (Data vs Information vs Insight)',
      highlightedWords: ['Data vs Information vs Insight'],
      subtitle: 'من أرقام مادة خام مبعثرة.. لمعلومة منظمة.. لرؤية وقرار بيزنس عبقري!',
      stages: [
        {
          level: '1',
          name: 'Data (البيانات الخام)',
          description: 'أرقام وتفاصيل مبعثرة بدون سياق — مثلاً: "100, 200, 350".'
        },
        {
          level: '2',
          name: 'Information (المعلومات المنظمة)',
          description: 'داتا رتبناها وفهمنا معناها — مثلاً: "مبيعات الفرع في شهر مارس وصلت 650 ألف جنيه".'
        },
        {
          level: '3',
          name: 'Insight (الرؤية والقرار الذكي)',
          description: 'الاستنتاج الذهبي — مثلاً: "مبيعات الجمعة بتزيد 40%.. يبقى نركز العروض وحملات الإعلانات يوم الخميس بالليل!".'
        }
      ],
      speakerNotes: [
        'أكد على إن دورنا كـ Data Analysts مش نقف عند المعلومة، بل نوصل للـ Insight اللي بيجيب فلوس للشركة.'
      ],
      darkTheme: false
    },

    // Slide 06 — Types of Data
    {
      id: 6,
      slideNumber: '06 / 44',
      type: 'two-columns',
      topRightTag: 'DATA CONCEPTS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'نوعين أساسيين لكل البيانات في العالم',
      mainTitle: 'أنواع البيانات (Types of Data: Qualitative & Quantitative)',
      highlightedWords: ['Types of Data: Qualitative & Quantitative'],
      subtitle: 'افهم نوع الداتا صح.. عشان تختار الرسمة البيانية والتحليل الصح!',
      categoryColumns: [
        {
          categoryTitle: 'البيانات النوعية (Qualitative / Categorical)',
          categoryType: 'صفات وفئات وصفية غير رقمية',
          items: [
            {
              name: 'اسمية (Nominal)',
              description: 'فئات بدون ترتيب مفضل: المدن (القاهرة، دبي)، الألوان، الجنس (ذكر/أنثى).'
            },
            {
              name: 'ترتيبية (Ordinal)',
              description: 'فئات لها تسلسل ورتبة: التقييمات (ضعيف، متوسط، ممتاز)، النجوم (1-5).'
            }
          ]
        },
        {
          categoryTitle: 'البيانات الكمية (Quantitative / Numerical)',
          categoryType: 'أرقام قابلة للقياس والعمليات الحسابية',
          items: [
            {
              name: 'منفصلة (Discrete)',
              description: 'أعداد صحيحة تعد بالوحدات: عدد الطلبات، عدد الموظفين، زيارات الموقع.'
            },
            {
              name: 'متصلة (Continuous)',
              description: 'قيم تقاس في مدى مستمر بكسور وأعشار: الإيرادات، درجات الحرارة، الوزن والوقت.'
            }
          ]
        }
      ],
      speakerNotes: [
        'استخدم التابات التفاعلية بالأعلى لاستعراض كل نوع مع الأمثلة الحية وسؤال الحضور.'
      ],
      darkTheme: false
    },

    // Slide 07 — Structured vs Unstructured Data
    {
      id: 7,
      slideNumber: '07 / 44',
      type: 'structured-unstructured',
      topRightTag: 'DATA CONCEPTS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'إزاي الداتا متخزنة ومترتبة؟',
      mainTitle: 'البيانات المنظمة وغير المنظمة (Structured vs Unstructured Data)',
      highlightedWords: ['Structured vs Unstructured Data'],
      subtitle: 'من الجداول المنظمة لبوستات السوشيال ميديا المعقدة',
      cards: [
        {
          title: 'Structured Data (البيانات المنظمة)',
          description: 'داتا مترتبة في جداول محددة بصفوف وأعمدة واضحة زي شيتات Excel وقواعد بيانات SQL، ودي أسهل داتا في الفحص والاستعلام.',
          tag: 'Tables & SQL'
        },
        {
          title: 'Semi-Structured Data (شبه المنظمة)',
          description: 'فيها هيكل وتنظيم بس مش في شكل جداول صريحة، زي ملفات JSON و XML ومستندات NoSQL.',
          tag: 'JSON & XML'
        },
        {
          title: 'Unstructured Data (غير المنظمة)',
          description: 'بتمثل أكتر من 80% من بيانات العالم! زي الصور، الفيديوهات، ملفات الصوت، وبوستات وتعليقات السوشيال ميديا.',
          tag: 'Media & Text'
        }
      ],
      speakerNotes: [
        'وضح إن الـ Data Analyst في الغالب بيتعامل مع Structured و Semi-Structured، ومجالات الـ AI و Big Data بتتعامل بكثافة مع Unstructured.'
      ],
      darkTheme: false
    },

    // Slide 08 — Data Analysis Lifecycle
    {
      id: 8,
      slideNumber: '08 / 44',
      type: 'lifecycle',
      topRightTag: 'METHODOLOGY',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'الـ 6 محطات المتتالية في أي مشروع تحليل بيانات',
      mainTitle: 'دورة حياة تحليل البيانات (Data Analysis Lifecycle)',
      highlightedWords: ['Data Analysis Lifecycle'],
      subtitle: 'من أول سؤال البيزنس لحد ما نسلم التقرير النهائي لصناع القرار',
      processSteps: [
        { stepNumber: 1, title: 'Define Question (تحديد المشكلة)', description: 'بنعرف بالظبط إيه السؤال أو الهدف اللي البيزنس عايز يجاوب عليه.' },
        { stepNumber: 2, title: 'Collect Data (تجميع الداتا)', description: 'بنسحب البيانات من مصادرها: داتابيز، ملفات، أو استبيانات.' },
        { stepNumber: 3, title: 'Clean & Process (تنظيف وتجهيز)', description: 'بنعالج القيم الناقصة والملخبطة عشان نضمن أعلى دقة.' },
        { stepNumber: 4, title: 'Analyze & Explore (استكشاف وفحص)', description: 'بنعمل استكشاف إحصائي (EDA) ونربط العلاقات ببعضها.' },
        { stepNumber: 5, title: 'Visualize (تصوير وعرض النتائج)', description: 'بنصمم لوحات ورسوم تفاعلية تبرز الأرقام بوضوح.' },
        { stepNumber: 6, title: 'Communicate (مشاركة التوصيات)', description: 'بنحكي قصة الداتا للإدارة عشان يتخذوا الإجراء المناسب.' }
      ],
      speakerNotes: [
        'أكد إن لو أول خطوة (تحديد السؤال) غلط، فكل التحليل اللي بعده هيكون هدر للوقت.'
      ],
      darkTheme: false
    },

    // Slide 09 — Data Pipeline
    {
      id: 9,
      slideNumber: '09 / 44',
      type: 'pipeline',
      topRightTag: 'ARCHITECTURE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'خط سير البيانات داخل المؤسسات',
      mainTitle: 'مسار تدفق البيانات (Data Pipeline: Ingestion to Decision)',
      highlightedWords: ['Data Pipeline: Ingestion to Decision'],
      subtitle: 'إزاي الداتا بتمشي من مصادرها لحد ما تتحول لأرباح وقرارات؟',
      speakerNotes: [
        'اشرح المسار من اليسار إلى اليمين: Sources -> Extraction -> Transformation (ETL) -> Loading & Storage -> Analytics & Dashboards -> Strategic Decisions.'
      ],
      darkTheme: false
    },

    // Slide 10 — Data Analyst Roadmap
    {
      id: 10,
      slideNumber: '10 / 44',
      type: 'roadmap',
      topRightTag: 'CAREER PATH',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'خريطتك الاحترافية خطوة بخطوة',
      mainTitle: 'خريطة طريق محلل البيانات (Data Analyst Complete Roadmap)',
      highlightedWords: ['Data Analyst Complete Roadmap'],
      subtitle: 'الأدوات والمهارات اللي هتخليك جاهز لسوق العمل كـ Data Analyst',
      speakerNotes: [
        'اعرض الخريطة التفاعلية وطمّن المتدربين إننا هنمشي خطوة بخطوة في الدبلومة لتغطية كل أداة بتطبيقاتها.'
      ],
      darkTheme: true
    },

    // Slide 11 — Section 1: Excel
    {
      id: 11,
      slideNumber: '11 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 01',
      topLeftTag: 'TOOL ECOSYSTEM',
      subBadge: 'الجزء الأول من المنظومة',
      mainTitle: 'SECTION 01: MICROSOFT EXCEL',
      highlightedWords: ['MICROSOFT EXCEL'],
      subtitle: 'حجر الأساس لأي محلل بيانات ومصدر القوة السريعة للشركات (Spreadsheets & Formulas)',
      speakerNotes: [
        'نبدأ الآن مع الأداة الأولى والأكثر انتشاراً في عالم المال والأعمال: مايكروسوفت إكسيل.'
      ],
      darkTheme: true
    },

    // Slide 12 — Why Excel is Important
    {
      id: 12,
      slideNumber: '12 / 44',
      type: 'six-cards',
      topRightTag: 'EXCEL MODULE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'ليه الإكسيل ما زال الأداة رقم 1 في كل الشركات؟',
      mainTitle: 'أهمية إكسيل في تحليل البيانات (Why Excel is Still King)',
      highlightedWords: ['Why Excel is Still King'],
      subtitle: 'سهل، مرن، وورا واجهته البسيطة إمكانيات جبارة لمعالجة وتحليل البيانات',
      cards: [
        {
          title: 'Global Standard (لغة البيزنس الأولى)',
          description: 'مفيش شركة على الكوكب ما بتستخدمش إكسيل.. موجود في كل مكان وشغال مع كل الأقسام.'
        },
        {
          title: 'Quick Calculations (حسابات ومعادلات سريعة)',
          description: 'بمئات الدوال الحسابية والمنطقية، تقدر تخلص شغل ساعات في ثواني معدودة.'
        },
        {
          title: 'Data Cleaning (تنظيف وترتيب الداتا)',
          description: 'فلاتر ذكية، إزالة تكرار، وأداة Power Query المذهلة لتجهيز البيانات بأعلى كفاءة.'
        },
        {
          title: 'Pivot Tables (الجداول المحورية السحرية)',
          description: 'أقوى ميزة في إكسيل! بتلخص ملايين الأرقام وتسحب وتفلتر بضغطة زرار واحدة.'
        },
        {
          title: 'Dynamic Charting (رسومات تفاعلية جذابة)',
          description: 'تشكيلة واسعة من الرسوم البيانية لتوضيح الاتجاهات والمقارنات بمرونة وسهولة.'
        },
        {
          title: 'Interactive Dashboards (داشبورد متكامل)',
          description: 'دمج الـ Slicers والرسوم لبناء تقارير تنفيذية تبهر المديرين والعملاء.'
        }
      ],
      speakerNotes: [
        'وضح إن إكسيل مش مجرد برنامج جداول، ده منصة تحليل بيانات كاملة بفضل Power Query و Pivot Tables.'
      ],
      darkTheme: false
    },

    // Slide 13 — Excel Formulas & Functions
    {
      id: 13,
      slideNumber: '13 / 44',
      type: 'grid-categories',
      topRightTag: 'EXCEL MODULE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'أهم الدوال اللي هتستخدمها يومياً في شغلك',
      mainTitle: 'دوال ومعادلات إكسيل الأساسية (Excel Formulas & Functions in Practice)',
      highlightedWords: ['Excel Formulas & Functions in Practice'],
      subtitle: 'الدوال الرياضية، والبحث والربط، والشروط المنطقية المتقدمة',
      speakerNotes: [
        'اشرح أهمية XLOOKUP كبديل أسرع وأقوى لـ VLOOKUP، وكيف تدمج IFS مع الدوال الإحصائية.'
      ],
      darkTheme: false
    },

    // Slide 14 — Excel Data Pipeline
    {
      id: 14,
      slideNumber: '14 / 44',
      type: 'excel-pipeline',
      topRightTag: 'EXCEL MODULE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'سير العمل العملي داخل إكسيل',
      mainTitle: 'من تنظيف البيانات إلى لوحات المعلومات (From Clean Data to Dashboards)',
      highlightedWords: ['From Clean Data to Dashboards'],
      subtitle: 'من جدول خام ملخبط.. لداشبورد احترافي يتفاعل مع كل كليك!',
      speakerNotes: [
        'وضح كيف نبدأ من Raw Data وننظفها في Power Query ثم نلخصها بـ Pivot Tables ونخرجها كـ Dashboard تفاعلي.'
      ],
      darkTheme: false
    },

    // Slide 15 — Section 2: Python Fundamentals
    {
      id: 15,
      slideNumber: '15 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 02',
      topLeftTag: 'TOOL ECOSYSTEM',
      subBadge: 'الجزء الثاني من المنظومة',
      mainTitle: 'SECTION 02: PYTHON FUNDAMENTALS',
      highlightedWords: ['PYTHON FUNDAMENTALS'],
      subtitle: 'لغة البرمجة الأسهل والأقوى في عالم علم وتحليل البيانات (Variables, Loops & Logic)',
      speakerNotes: [
        'ننتقل الآن لأقوى لغة برمجة في عالم الداتا: بايثون، ونتعلم أساسياتها بطريقة مبسطة جداً.'
      ],
      darkTheme: true
    },

    // Slide 16 — Python Variables & Data Types
    {
      id: 16,
      slideNumber: '16 / 44',
      type: 'python-code-concepts',
      topRightTag: 'PYTHON BASICS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'اللبنات الأساسية في كود بايثون',
      mainTitle: 'المتغيرات وأنواع البيانات في بايثون (Python: Variables & Data Types)',
      highlightedWords: ['Python: Variables & Data Types'],
      subtitle: 'إزاي بايثون بتفهم الأرقام، والنصوص، والقيم المنطقية؟',
      speakerNotes: [
        'اشرح المتغيرات كصناديق نضع فيها القيم (Integers, Floats, Strings, Booleans).'
      ],
      darkTheme: false
    },

    // Slide 17 — Conditions & Loops
    {
      id: 17,
      slideNumber: '17 / 44',
      type: 'two-cards',
      topRightTag: 'PYTHON BASICS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'اتخاذ القرارات وتكرار العمليات بذكاء',
      mainTitle: 'الشروط وحلقات التكرار في بايثون (Conditions & Loops in Python)',
      highlightedWords: ['Conditions & Loops in Python'],
      subtitle: 'شروط If للقرارات الذكية، وحلقات For & While لأتمتة المهام المكررة',
      categoryColumns: [
        {
          categoryTitle: 'الشروط المنطقية (Conditional Logic: if / elif / else)',
          categoryType: 'اتخاذ قرارات ديناميكية بناءً على فحص البيانات',
          items: [
            {
              name: 'عبارات if / elif / else',
              description: 'بتخلي البرنامج يختار المسار الصح: "لو المبيعات أكبر من 1000 يبقى عميل مميز، غير كده عميل عادي".'
            },
            {
              name: 'معاملات المقارنة (Operators)',
              description: 'استخدام المقارنات (==, !=, >, <, >=, <=) والشروط المزدوجة (and, or) لفحص السجلات بدقة.'
            },
            {
              name: 'تصنيف البيانات تلقائياً',
              description: 'إنشاء أعمدة وتصنيفات جديدة بناءً على شروط متعددة بضغطة زر واحدة.'
            }
          ]
        },
        {
          categoryTitle: 'حلقات التكرار (Loops & Iterations: for / while)',
          categoryType: 'أتمتة المهام المكررة ومعالجة آلاف السجلات في ثواني',
          items: [
            {
              name: 'حلقات for Loops',
              description: 'المرور على كل عنصر في القائمة أو الجدول وتطبيق نفس المعادلة بدون تكرار الكود يدوياً.'
            },
            {
              name: 'حلقات while Loops',
              description: 'تكرار العملية البرمجية باستمرار طول ما شرط معين متحقق (زي انتظار وصول داتا جديدة).'
            },
            {
              name: 'أوامر التحكم (break & continue)',
              description: 'إيقاف التكرار فور العثور على المطلوب أو تخطي القيم الخاطئة والفارغة بسلاسة.'
            }
          ]
        }
      ],
      speakerNotes: [
        'وضح إن الشروط والـ Loops هي اللي بتدي البرنامج الذكاء والقدرة على معالجة آلاف السجلات بدون تدخل يدوي.'
      ],
      darkTheme: false
    },

    // Slide 18 — Functions & Data Collections
    {
      id: 18,
      slideNumber: '18 / 44',
      type: 'python-code-concepts',
      topRightTag: 'PYTHON BASICS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'تنظيم الكود وتخزين مجموعات البيانات',
      mainTitle: 'الدوال ومجموعات البيانات في بايثون (Functions & Data Collections in Python)',
      highlightedWords: ['Functions & Data Collections in Python'],
      subtitle: 'الدوال لإعادة استخدام الكود، والقوائم (Lists) والقواميس (Dicts) لهيكلة الداتا',
      speakerNotes: [
        'اشرح كيف نكتب Function مرة واحدة ونستدعيها آلاف المرات لتوفير الوقت وتقليل الأخطاء.'
      ],
      darkTheme: false
    },

    // Slide 19 — Section 3: Python for Data Analysis
    {
      id: 19,
      slideNumber: '19 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 03',
      topLeftTag: 'TOOL ECOSYSTEM',
      subBadge: 'الجزء الثالث من المنظومة',
      mainTitle: 'SECTION 03: PYTHON FOR DATA ANALYSIS',
      highlightedWords: ['PYTHON FOR DATA ANALYSIS'],
      subtitle: 'مكتبات بايثون العملاقة: معالجة ملايين الصفوف ورسم البيانات باحترافية (NumPy, Pandas & Visualization)',
      speakerNotes: [
        'ننتقل للجانب المتخصص: مكتبات بايثون التي جعلتها الاختيار الأول لعلماء ومحللي البيانات حول العالم.'
      ],
      darkTheme: true
    },

    // Slide 20 — NumPy & Pandas
    {
      id: 20,
      slideNumber: '20 / 44',
      type: 'side-by-side-comparison',
      topRightTag: 'PYTHON LIBRARIES',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'الثنائي الذهبي والأقوى في تحليل البيانات',
      mainTitle: 'مكتبات نمباي وبانداس (NumPy & Pandas: The Core Data Stack)',
      highlightedWords: ['NumPy & Pandas: The Core Data Stack'],
      subtitle: 'NumPy للحسابات والمصفوفات السريعة، وPandas لتحليل الجداول الضخمة بكل سهولة',
      speakerNotes: [
        'اشرح أن Pandas DataFrames هي المقابل المبرمج لشيتات الإكسيل لكنها قادرة على معالجة ملايين الصفوف في أجزاء من الثانية.'
      ],
      darkTheme: false
    },

    // Slide 21 — Matplotlib & Seaborn
    {
      id: 21,
      slideNumber: '21 / 44',
      type: 'two-cards',
      topRightTag: 'PYTHON LIBRARIES',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'فن تحويل الأرقام إلى لوحات فنية معبرة',
      mainTitle: 'المكتبات الرسومية في بايثون (Matplotlib & Seaborn: Visualizing Data)',
      highlightedWords: ['Matplotlib & Seaborn: Visualizing Data'],
      subtitle: 'Matplotlib للتحكم الدقيق في كل تفصيلة، وSeaborn للرسوم الإحصائية الجذابة بألوان راقية',
      cards: [
        {
          title: 'Matplotlib (المكتبة التأسيسية للرسم)',
          description: 'الأب الروحي للرسومات في بايثون. بتديك تحكم كامل 100% في المحاور، الخطوط، الألوان، وحجم الخط بكل دقة.',
          tag: 'Base Graphics'
        },
        {
          title: 'Seaborn (الرسومات الإحصائية الجذابة)',
          description: 'مبنية فوق Matplotlib وبتطلع رسومات ورسوم بيانية مبهرة بألوان حديثة وتصميمات إحصائية جاهزة زي Heatmaps و Box Plots بأقل أسطر كود.',
          tag: 'Statistical Art'
        }
      ],
      speakerNotes: [
        'وضح للمتدربين أننا بنستخدم Matplotlib للتحكم والتخصيص، وبنستخدم Seaborn للرسومات الإحصائية السريعة والمبهرة.'
      ],
      darkTheme: false
    },

    // Slide 22 — Working with Real Datasets
    {
      id: 22,
      slideNumber: '22 / 44',
      type: 'python-code-concepts',
      topRightTag: 'PYTHON WORKFLOW',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'مشروع تحليلي كامل بكود بايثون من البداية للنهاية',
      mainTitle: 'سير العمل التحليلي مع البيانات الحقيقية (Working with Real Datasets)',
      highlightedWords: ['Working with Real Datasets'],
      subtitle: 'قراءة ملف الداتا، فحص النواقص، تنظيف الأخطاء، ورسم التوزيعات والنتائج',
      speakerNotes: [
        'استعرض الـ 5 خطوات العملية: read_csv -> info/describe -> dropna/fillna -> groupby -> plot.'
      ],
      darkTheme: false
    },

    // Slide 23 — Section 4: SQL & Databases
    {
      id: 23,
      slideNumber: '23 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 04',
      topLeftTag: 'TOOL ECOSYSTEM',
      subBadge: 'الجزء الرابع من المنظومة',
      mainTitle: 'SECTION 04: SQL & DATABASES',
      highlightedWords: ['SQL & DATABASES'],
      subtitle: 'لغة التحدث مع قواعد البيانات.. المهارة الأكثر طلباً في سوق العمل (Relational Data & Queries)',
      speakerNotes: [
        'ننتقل الآن إلى SQL: لغة الاستعلام القياسية التي لا غنى عنها لأي محلل بيانات لاستخراج البيانات من خوادم الشركات.'
      ],
      darkTheme: true
    },

    // Slide 24 — Why Databases Matter
    {
      id: 24,
      slideNumber: '24 / 44',
      type: 'structured-unstructured',
      topRightTag: 'SQL MODULE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'ليه بنحتاج قواعد البيانات (Databases) ومبنكتفيش بالإكسيل؟',
      mainTitle: 'أهمية قواعد البيانات ومفاهيمها الأساسية (Why Databases Matter)',
      highlightedWords: ['Why Databases Matter'],
      subtitle: 'سرعة خرافية، أمان عالي، وقدرة على التعامل مع ملايين وملايير السجلات بكل ثبات',
      cards: [
        {
          title: 'Database Core Concepts (مفهوم قواعد البيانات)',
          description: 'مخزن مركزي آمن ومنظم، بيسمح لمئات المستخدمين بالوصول للبيانات في نفس اللحظة بدون تهنيج أو أخطاء.',
          tag: 'Central Storage'
        },
        {
          title: 'Tables, Rows & Columns (الجداول والحقول)',
          description: 'كل جدول بيمثل كيان مستقل (زي العملاء، الطلبات، المنتجات)، والصفوف بتمثل السجلات الفعلية.',
          tag: 'Schema Design'
        },
        {
          title: 'Relationships & Keys (المفاتيح والعلاقات)',
          description: 'الربط بين الجداول باستخدام الـ Primary Key والـ Foreign Key عشان نمنع التكرار ونحافظ على تكامل البيانات.',
          tag: 'Primary & Foreign'
        }
      ],
      speakerNotes: [
        'اشرح للمتدربين أن الإكسيل ينهار عند 1,048,576 صف، بينما قواعد بيانات SQL تستوعب ملايين وملايير الصفوف بكفاءة وأمان.'
      ],
      darkTheme: false
    },

    // Slide 25 — SQL Queries & Filtering
    {
      id: 25,
      slideNumber: '25 / 44',
      type: 'sql-queries-concepts',
      topRightTag: 'SQL BASICS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'استخراج الداتا وتصفيتها بدقة متناهية',
      mainTitle: 'كتابة استعلامات SQL والتصفية (SQL Queries & Filtering)',
      highlightedWords: ['SQL Queries & Filtering'],
      subtitle: 'أوامر SELECT و WHERE و ORDER BY و LIMIT لتحديد اللي محتاجه بالظبط',
      speakerNotes: [
        'اشرح ترتيب تنفيذ استعلام SQL: FROM -> WHERE -> SELECT -> ORDER BY -> LIMIT.'
      ],
      darkTheme: false
    },

    // Slide 26 — SQL Aggregation & Joins
    {
      id: 26,
      slideNumber: '26 / 44',
      type: 'sql-joins-concepts',
      topRightTag: 'SQL INTERMEDIATE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'تلخيص الأرقام وربط الجداول ببعضها',
      mainTitle: 'التجميع وربط الجداول في SQL (Aggregation & Joins in SQL)',
      highlightedWords: ['Aggregation & Joins in SQL'],
      subtitle: 'دوال التجميع (GROUP BY, SUM, AVG) وأنواع الـ Joins لدمج البيانات من كذا جدول',
      speakerNotes: [
        'استعرض أنواع الـ JOINs الأربعة: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN بالرسم التوضيحي التفاعلي.'
      ],
      darkTheme: false
    },

    // Slide 27 — Subqueries & SQL Tools
    {
      id: 27,
      slideNumber: '27 / 44',
      type: 'sql-subqueries-tools',
      topRightTag: 'SQL ADVANCED',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'الاستعلامات المتداخلة (Subqueries) وأشهر أنظمة إدارة قواعد البيانات',
      mainTitle: 'الاستعلامات المتقدمة وأدوات قواعد البيانات (Subqueries & SQL Tools)',
      highlightedWords: ['Subqueries & SQL Tools'],
      subtitle: 'كتابة استعلام جوه استعلام، والتعامل مع PostgreSQL، MySQL، و SQL Server',
      speakerNotes: [
        'وضح أن الـ Subquery هو استعلام داخل استعلام رئيسي، واستعرض أشهر الـ RDBMS الشائعة في الشركات.'
      ],
      darkTheme: false
    },

    // Slide 28 — Section 5: Power BI
    {
      id: 28,
      slideNumber: '28 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 05',
      topLeftTag: 'TOOL ECOSYSTEM',
      subBadge: 'الجزء الخامس من المنظومة',
      mainTitle: 'SECTION 05: MICROSOFT POWER BI',
      highlightedWords: ['MICROSOFT POWER BI'],
      subtitle: 'الوحش الأقوى في ذكاء الأعمال (BI) وبناء التقارير والداشبوردات التفاعلية (Data Modeling & DAX)',
      speakerNotes: [
        'نصل الآن إلى أقوى أداة ذكاء أعمال (BI) في سوق العمل: Power BI.'
      ],
      darkTheme: true
    },

    // Slide 29 — Power Query & Data Modeling
    {
      id: 29,
      slideNumber: '29 / 44',
      type: 'structured-unstructured',
      topRightTag: 'POWER BI MODULE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'تنظيف وربط البيانات قبل بناء الرسوم',
      mainTitle: 'تجهيز ونمذجة البيانات في Power BI (Power Query & Data Modeling)',
      highlightedWords: ['Power Query & Data Modeling'],
      subtitle: 'Power Query لتحويل وتجهيز الداتا (ETL)، ونموذج Star Schema لربط الجداول بكفاءة',
      cards: [
        {
          title: 'Power Query Engine (محرك تجهيز الداتا)',
          description: 'أداة ETL جبارة بتسحب الداتا من أي مصدر، وتنظفها، وتدمجها وتسجل كل خطوة عشان تتكرر أوتوماتيك.',
          tag: 'ETL Automation'
        },
        {
          title: 'Star Schema Modeling (نموذج النجمة الذكي)',
          description: 'هيكلة الداتا عن طريق فصل جداول الحقائق (Fact Tables) عن جداول الأبعاد (Dimension Tables) لتحقيق أعلى سرعة.',
          tag: 'Star Schema'
        },
        {
          title: 'Relationship Management (إدارة العلاقات)',
          description: 'بناء وتأكيد العلاقات 1-to-Many بين الجداول عشان الفلاتر والتقارير تشتغل بتناغم تام.',
          tag: '1-to-Many Links'
        }
      ],
      speakerNotes: [
        'اشرح نموذج النجمة (Star Schema) وكيف يفصل الـ Facts عن الـ Dimensions لتحقيق أعلى أداء في الداشبورد.'
      ],
      darkTheme: false
    },

    // Slide 30 — DAX Expressions
    {
      id: 30,
      slideNumber: '30 / 44',
      type: 'dax-concepts',
      topRightTag: 'POWER BI MODULE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'لغة المعادلات والحسابات المتقدمة في Power BI',
      mainTitle: 'تعبيرات تحليل البيانات (DAX: Data Analysis Expressions)',
      highlightedWords: ['DAX: Data Analysis Expressions'],
      subtitle: 'إنشاء مقاييس مخصصة (Measures) وأعمدة محسوبة لحساب معدلات النمو ومؤشرات الأداء (KPIs)',
      speakerNotes: [
        'وضح الفرق الجوهري بين Calculated Columns (تستهلك ذاكرة) و Measures (تُحسب ديناميكياً عند التفاعل مع التقرير).'
      ],
      darkTheme: false
    },

    // Slide 31 — Power BI Dashboards & Publishing
    {
      id: 31,
      slideNumber: '31 / 44',
      type: 'powerbi-publishing',
      topRightTag: 'POWER BI MODULE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'من التصميم المحلي للمشاركة السحابية مع المديرين',
      mainTitle: 'بناء التقارير ونشرها سحابياً (Power BI Reports, Dashboards & Publishing)',
      highlightedWords: ['Power BI Reports, Dashboards & Publishing'],
      subtitle: 'تصميم داشبورد جذاب بالـ Slicers و Cross-Filtering ومشاركته على Power BI Service',
      speakerNotes: [
        'استعرض دورة العمل: Power BI Desktop -> Build Visuals & Slicers -> Publish to Power BI Service -> Share with Stakeholders.'
      ],
      darkTheme: false
    },

    // Slide 32 — Section 6: Tableau
    {
      id: 32,
      slideNumber: '32 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 06',
      topLeftTag: 'TOOL ECOSYSTEM',
      subBadge: 'الجزء السادس من المنظومة',
      mainTitle: 'SECTION 06: TABLEAU',
      highlightedWords: ['TABLEAU'],
      subtitle: 'العملاق الرائد عالمياً في الفيجواليزيشن ورواية القصص بالبيانات (Visual Analytics & Storytelling)',
      speakerNotes: [
        'ننتقل الآن إلى أداة التصوير البصري الرائدة عالمياً: تابلوه (Tableau).'
      ],
      darkTheme: true
    },

    // Slide 33 — Tableau Connecting Data & Charts
    {
      id: 33,
      slideNumber: '33 / 44',
      type: 'two-cards',
      topRightTag: 'TABLEAU MODULE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'السرعة والسهولة في استكشاف الداتا',
      mainTitle: 'الاتصال بالبيانات وبناء المخططات في تابلوه (Tableau: Connecting Data & Visualizations)',
      highlightedWords: ['Tableau: Connecting Data & Visualizations'],
      subtitle: 'سحب وإفلات بديهي لإنشاء رسوم ومخططات متقدمة بدون تعقيد',
      cards: [
        {
          title: 'Universal Data Connectors (الاتصال بأي مصدر بيانات)',
          description: 'ربط فوري ومباشر مع ملفات إكسيل، قواعد بيانات SQL، أو خدمات الكلاود الضخمة بضغطة زر.',
          tag: 'Live & Extract'
        },
        {
          title: 'Drag-and-Drop Visualization (فيجواليزيشن بالسحب والإفلات)',
          description: 'اسحب الأعمدة والصفوف وشوف الرسوم البيانية التفاعلية بتتشكل قدامك في ثانية واحدة!',
          tag: 'Visual Canvas'
        }
      ],
      speakerNotes: [
        'اشرح واجهة تابلوه وكيف تجعل تحليل البيانات ممتعاً وسريعاً بمجرد سحب الحقول إلى Rows و Columns.'
      ],
      darkTheme: false
    },

    // Slide 34 — Tableau Dashboards & Storytelling
    {
      id: 34,
      slideNumber: '34 / 44',
      type: 'two-cards',
      topRightTag: 'TABLEAU MODULE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'تحويل الرسوم لقصة بصرية تفاعلية ملهمة',
      mainTitle: 'اللوحات التفاعلية ورواية القصص في تابلوه (Tableau: Dashboards & Data Storytelling)',
      highlightedWords: ['Tableau: Dashboards & Data Storytelling'],
      subtitle: 'دمج المخططات في لوحة واحدة واستخدام الـ Story Points لتوضيح تسلسل الأحداث',
      cards: [
        {
          title: 'Interactive Dynamic Dashboards (لوحات تفاعلية مبهرة)',
          description: 'دمج رسومات متعددة وربط الفلاتر والإجراءات (Actions) عشان المستخدم يستكشف الداتا بنفسه.',
          tag: 'Actions & Filters'
        },
        {
          title: 'Data Storytelling (رواية القصة وراء الأرقام)',
          description: 'ترتيب الأفكار والنتائج في شرائح قصصية متتابعة تقنع صناع القرار باتخاذ الخطوة الصح.',
          tag: 'Story Points'
        }
      ],
      speakerNotes: [
        'وضح قوة ميزة Story Points في تابلوه لعرض رحلة التحليل خطوة بخطوة أمام الإدارة وصناع القرار.'
      ],
      darkTheme: false
    },

    // Slide 35 — Power BI vs Tableau Comparison
    {
      id: 35,
      slideNumber: '35 / 44',
      type: 'comparison-table',
      topRightTag: 'BI COMPARISON',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'مقارنة عملية شاملة لاختيار الأداة الأنسب لمشروعك',
      mainTitle: 'مقارنة شاملة: Power BI مقابل Tableau (Power BI vs Tableau: The Ultimate Comparison)',
      highlightedWords: ['Power BI vs Tableau: The Ultimate Comparison'],
      subtitle: 'Power BI للتكامل السلس مع مايكروسوفت ونمذجة الداتا، وTableau للإبداع البصري غير المحدود',
      categoryColumns: [
        {
          categoryTitle: 'Microsoft Power BI',
          categoryType: 'الأكثر تكاملاً مع منظومة مايكروسوفت واقتصادية التكلفة',
          items: [
            {
              name: 'التكامل السلس (Ecosystem)',
              description: 'يتكامل مباشرة وبسلاسة تامة مع Excel و Azure و Teams و SharePoint.'
            },
            {
              name: 'نمذجة البيانات و DAX',
              description: 'محرك Power Query جبار في معالجة الـ ETL، ولغة DAX لحسابات الأعمال المعقدة.'
            },
            {
              name: 'التكلفة وسوق العمل',
              description: 'تكلفة ترخيص منخفضة جداً للشركات، وطلب ضخم جداً في سوق العمل العربي والعالمي.'
            }
          ]
        },
        {
          categoryTitle: 'Tableau (Salesforce)',
          categoryType: 'الرائد عالمياً في الحرية البصرية والتحليل الاستكشافي المتقدم',
          items: [
            {
              name: 'الإبداع البصري والتخصيص',
              description: 'حرية بصرية لا نهائية في تخصيص الرسوم والمخططات الدقيقة والخرائط الجغرافية.'
            },
            {
              name: 'التحليل الاستكشافي الفوري',
              description: 'سحب وإفلات فائق السرعة يساعد على اكتشاف الأنماط في ثواني بدون تعقيد.'
            },
            {
              name: 'المؤسسات الكبرى (Enterprise)',
              description: 'مفضل لدى كبرى الشركات العالمية والقطاعات التي تعتمد على التصوير البصري المتقدم.'
            }
          ]
        }
      ],
      speakerNotes: [
        'لخص المقارنة: كلاهما أدوات ممتازة، ومحلل البيانات الناجح يمتلك القدرة على العمل بالاثنين وفق حاجة الشركة.'
      ],
      darkTheme: false
    },

    // Slide 36 — Section 7: Web Scraping
    {
      id: 36,
      slideNumber: '36 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 07',
      topLeftTag: 'TOOL ECOSYSTEM',
      subBadge: 'الجزء السابع من المنظومة',
      mainTitle: 'SECTION 07: WEB SCRAPING',
      highlightedWords: ['WEB SCRAPING'],
      subtitle: 'جمع البيانات تلقائياً من صفحات الويب ومواقع الإنترنت (Automated Data Collection with Python)',
      speakerNotes: [
        'ننتقل للجزء السابع والأخير في منظومة الأدوات: استخراج البيانات من الويب (Web Scraping).'
      ],
      darkTheme: true
    },

    // Slide 37 — What is Web Scraping?
    {
      id: 37,
      slideNumber: '37 / 44',
      type: 'four-cards',
      topRightTag: 'WEB SCRAPING',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'استخراج الداتا من الإنترنت بذكاء',
      mainTitle: 'ما هو استخراج بيانات الويب؟ (What is Web Scraping?)',
      highlightedWords: ['What is Web Scraping?'],
      subtitle: 'بدل ما تنقل الداتا يدوي.. روبوتات برمجية بتجمع آلاف المنتجات والأسعار في ثواني!',
      cards: [
        {
          title: 'Automated Extraction (استخراج أوتوماتيكي سريع)',
          description: 'كود برمجي بيدخل صفحات المواقع، ويستخرج النصوص والجداول والأسعار وينظمها في ملفات جاهزة للتحليل.',
          tag: 'Automation'
        },
        {
          title: 'Competitor Price Monitoring (مراقبة أسعار المنافسين)',
          description: 'تتبع تغيرات الأسعار وعروض المتاجر التنافسية لحظة بلحظة لضبط استراتيجية التسعير.',
          tag: 'Pricing Intel'
        },
        {
          title: 'Market Sentiment & Reviews (تحليل آراء وتقييمات العملاء)',
          description: 'سحب مراجعات المنتجات على المواقع وتحليل مشاعر المشترين لمعرفة نقاط القوة والضعف.',
          tag: 'Customer Voice'
        },
        {
          title: 'Job Market Trends (متابعة احتياجات سوق العمل)',
          description: 'استخراج بيانات الوظائف المطلوبة، والمهارات الأكثر طلباً، ومتوسط الرواتب في السوق.',
          tag: 'Market Insights'
        }
      ],
      speakerNotes: [
        'وضح أن الـ Web Scraping هو سلاح المحلل السري للحصول على بيانات غير متوفرة في ملفات جاهزة.'
      ],
      darkTheme: false
    },

    // Slide 38 — Web Scraping in Practice
    {
      id: 38,
      slideNumber: '38 / 44',
      type: 'structured-unstructured',
      topRightTag: 'WEB SCRAPING',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'الأدوات، الخطوات، والمسؤولية الأخلاقية والقانونية',
      mainTitle: 'استخراج بيانات الويب عملياً وأخلاقياً (Web Scraping in Practice)',
      highlightedWords: ['Web Scraping in Practice'],
      subtitle: 'مكتبات بايثون المتخصصة (BeautifulSoup, Requests, Selenium) وأهمية مراجعة شروط المواقع',
      cards: [
        {
          title: 'Scraping Tech Stack (أدوات بايثون للاستخراج)',
          description: 'مكتبة Requests لجلب صفحات الويب، و BeautifulSoup لقراءة عناصر الـ HTML، و Selenium للمواقع التفاعلية.',
          tag: 'Python Tools'
        },
        {
          title: 'Structured Pipeline (سير عملية الاستخراج)',
          description: 'طلب الصفحة (HTTP Request) ➔ تحليل عناصر الكود (Parsing) ➔ استخراج الداتا ➔ حفظها في شيت Excel أو داتابيز.',
          tag: 'Pipeline'
        },
        {
          title: 'Ethical & Legal Rules (الأخلاقيات والقوانين)',
          description: 'احترام ملف robots.txt، عدم إرهاق خوادم المواقع بكثرة الطلبات، والالتزام بحماية البيانات الشخصية والخصوصية.',
          tag: 'Ethics & Legal'
        }
      ],
      speakerNotes: [
        'شدد على الجانب الأخلاقي والقانوني وأهمية مراجعة robots.txt وشروط استخدام المواقع قبل السحب.'
      ],
      darkTheme: false
    },

    // Slide 39 — Complete Data Analyst Workflow
    {
      id: 39,
      slideNumber: '39 / 44',
      type: 'complete-workflow',
      topRightTag: 'END-TO-END WORKFLOW',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'المنظومة المتكاملة: إزاي كل الأدوات بتشتغل مع بعضها؟',
      mainTitle: 'سير العمل المتكامل لمحلل البيانات (Complete Data Analyst Workflow)',
      highlightedWords: ['Complete Data Analyst Workflow'],
      subtitle: 'تجميع بالـ Scraping ➔ تنظيف بالإكسيل ➔ استعلام بالـ SQL ➔ تحليل بالبايثون ➔ عرض بالـ BI & Tableau',
      speakerNotes: [
        'وضح كيف تتكامل الأدوات الستة في مشروع واحد من تجميع البيانات حتى تقديم التقرير النهائي.'
      ],
      darkTheme: false
    },

    // Slide 40 — Career Skills of a Data Analyst
    {
      id: 40,
      slideNumber: '40 / 44',
      type: 'career-skills',
      topRightTag: 'CAREER SUCCESS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'المزيج الذهبي للنجاح والتميز في سوق العمل',
      mainTitle: 'المهارات الأساسية لمحلل البيانات المحترف (Career Skills of a Data Analyst)',
      highlightedWords: ['Career Skills of a Data Analyst'],
      subtitle: 'المهارات التقنية القوية + مهارات التواصل وحل المشكلات ورواية القصص (Soft Skills)',
      speakerNotes: [
        'أكد أن المهارات الشخصية والتواصل وسرد القصة (Data Storytelling) هي ما يميز المحلل العبقري عن غيره.'
      ],
      darkTheme: false
    },

    // Slide 41 — Session Summary
    {
      id: 41,
      slideNumber: '41 / 44',
      type: 'summary-six-cards',
      topRightTag: 'WRAP-UP',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'ملخص أهم ما تعلمناه في انطلاقتنا اليوم',
      mainTitle: 'ملخص الجلسة الأولى والنقاط الجوهرية (Session 01 Summary & Key Takeaways)',
      highlightedWords: ['Session 01 Summary & Key Takeaways'],
      subtitle: 'أساس نظري وعملي متين يمهد طريقك للتطبيقات العملية الاحترافية القادمة',
      cards: [
        {
          title: 'Data Foundations (أساسيات ومفاهيم الداتا)',
          description: 'فهمنا الفرق بين الداتا والمعلومة والرؤية، وعرفنا أنواع البيانات وطرق هيكلتها.'
        },
        {
          title: 'The 6-Stage Lifecycle (دورة حياة التحليل)',
          description: 'اتعلمنا إزاي بنبدأ بسؤال بيزنس واضح وبنمشي لحد ما نسلم التوصيات والحلول.'
        },
        {
          title: 'Tool Ecosystem (منظومة الأدوات المتكاملة)',
          description: 'عرفنا دور كل أداة: Excel، Python، SQL، Power BI، Tableau، و Web Scraping.'
        },
        {
          title: 'Data Cleaning Importance (أهمية تنظيف الداتا)',
          description: 'اتفقنا إن جودة التحليل من جودة الداتا، وإن 70% من نجاح المحلل بيبدأ من داتا نضيفة.'
        },
        {
          title: 'Visual Storytelling (الفيجواليزيشن وسرد القصة)',
          description: 'اتعلمنا إن الأرقام مش كفاية، لازم تتقال في قصة بصرية تفاعلية تحرك البيزنس.'
        },
        {
          title: 'Next Session Preview (الجلسة القادمة: Excel)',
          description: 'استعدوا للتطبيق العملي على شيتات إكسيل حقيقية وبناء أول داشبورد تفاعلي بإيديكم!'
        }
      ],
      speakerNotes: [
        'راجع النقاط الرئيسية واحتفل مع المتدربين بإتمام الجلسة الأولى بنجاح وحماس كبير!'
      ],
      darkTheme: false
    },

    // Slide 42 — Knowledge Check
    {
      id: 42,
      slideNumber: '42 / 44',
      type: 'knowledge-check',
      topRightTag: 'WRAP-UP',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'تحدي سريع لقياس استيعابك للمفاهيم',
      mainTitle: 'اختبار استيعاب المفاهيم (Knowledge Check: Quick Quiz)',
      highlightedWords: ['Knowledge Check: Quick Quiz'],
      subtitle: 'جاوب على الأسئلة التفاعلية وشوف مدى جاهزيتك للجلسة القادمة!',
      speakerNotes: [
        'أدر فقرة الاختبار التفاعلي مع المتدربين لمراجعة أهم المفاهيم بطريقة شيقة ومحفزة.'
      ],
      darkTheme: false
    },

    // Slide 43 — Assignment — Mini Research Task
    {
      id: 43,
      slideNumber: '43 / 44',
      type: 'assignment',
      topRightTag: 'WRAP-UP',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'تطبيق عملي وبحثي ممتع',
      mainTitle: 'تكليف بحثي عملي خفيف (Assignment — Mini Research Task)',
      highlightedWords: ['Assignment — Mini Research Task'],
      subtitle: 'اختر شركة بتحبها (أمازون، نتفليكس، سبوتيفاي، أوبر) واكتشف إزاي بتستغل الداتا لكسب العملاء!',
      speakerNotes: [
        'وضح للطلاب كيفية تسليم التكليف قبل موعد الجلسة القادمة لتبادل الآراء والمناقشة.'
      ],
      darkTheme: false
    },

    // Slide 44 — Thank You
    {
      id: 44,
      slideNumber: '44 / 44',
      type: 'thank-you',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 01',
      topLeftTag: 'COMPLETED',
      subBadge: 'عاش يا أبطال! نهاية الجلسة الأولى بنجاح',
      mainTitle: 'THANK YOU',
      highlightedWords: ['THANK YOU'],
      subtitle: 'انتهت الجلسة التأسيسية بنجاح — جهز نفسك للتطبيق العملي القوي في الجلسة القادمة!',
      speakerNotes: [
        'اختم الجلسة بكلمات تشجيعية وذكّر الطلاب بموعد الجلسة القادمة لبدء التطبيق العملي على إكسيل.'
      ],
      darkTheme: true
    }
  ]
};

export const presentationEN: ChapterPresentation = {
  chapterId: 'session-01',
  chapterTitle: 'Session 01: Data Analysis Fundamentals & Complete Roadmap',
  courseName: 'Data Analysis Diploma',
  duration: 'Session 01 • Fundamentals',
  totalSlides: 44,
  slides: [
    // Slide 01 — Cover / Title
    {
      id: 1,
      slideNumber: '01 / 44',
      type: 'intro',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 01',
      topLeftTag: 'FOUNDATIONS',
      subBadge: 'Your Complete Roadmap to Become a Job-Ready Data Analyst',
      mainTitle: 'DATA ANALYSIS FUNDAMENTALS',
      highlightedWords: ['FUNDAMENTALS'],
      subtitle: 'Your Complete Roadmap to Become a Data Analyst.',
      speakerNotes: [
        'Welcome everyone to Session 01 of the Data Analysis Diploma.',
        'In this program, we will transform messy, raw datasets into strategic business decisions using industry-leading tools: Excel, SQL, Power BI, Python, and Tableau.',
        'Today is all about laying down the cognitive foundation and analytical thinking before diving into hands-on spreadsheets.'
      ],
      darkTheme: true,
      ctaButtonText: 'Start Journey'
    },

    // Slide 02 — What is Data Analysis?
    {
      id: 2,
      slideNumber: '02 / 44',
      type: 'process-flow',
      topRightTag: 'GETTING STARTED',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Definition & The 5 Core Activities',
      mainTitle: 'What is Data Analysis?',
      highlightedWords: ['What is Data Analysis?'],
      subtitle: 'The process of turning raw data into decisions that matter.',
      definitionBox: {
        label: 'Industry Definition',
        text: 'Data Analysis is the process of collecting, cleaning, transforming, analyzing, and interpreting data to discover useful insights and support decision-making.',
        iconName: 'Lightbulb'
      },
      cards: [
        {
          title: 'Collect Data',
          description: 'Gather raw data from multiple sources: files, databases, APIs, and forms.',
          iconName: 'Collect'
        },
        {
          title: 'Clean Data',
          description: 'Fix errors, remove duplicate records, and handle missing null values.',
          iconName: 'Clean'
        },
        {
          title: 'Analyze Data',
          description: 'Apply statistics, logic, and models to find patterns and trends.',
          iconName: 'Analyze'
        },
        {
          title: 'Visualize Results',
          description: 'Turn complex numbers into clear, readable charts and interactive dashboards.',
          iconName: 'Visualize'
        },
        {
          title: 'Generate Insights',
          description: 'Translate analytical findings into actionable recommendations for the business.',
          iconName: 'Insights'
        }
      ],
      speakerNotes: [
        'Explain that data analysis is not just writing a formula in Excel, but an end-to-end disciplined pipeline.',
        'Emphasize that Data Cleaning takes between 60% and 80% of an analyst\'s daily time in real industry projects.'
      ],
      darkTheme: false
    },

    // Slide 03 — Why Data Analysis is Important?
    {
      id: 3,
      slideNumber: '03 / 44',
      type: 'five-cards',
      topRightTag: 'GETTING STARTED',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Business Impact & Value Creation',
      mainTitle: 'Why Data Analysis is Important?',
      highlightedWords: ['Why Data Analysis is Important?'],
      subtitle: 'Every strong business decision starts with reliable data.',
      cards: [
        {
          title: 'Better Decision Making',
          description: 'Replace guesswork and gut feelings with evidence-based strategic choices.',
          tag: 'Core Value'
        },
        {
          title: 'Understanding Customers',
          description: 'Reveal behavior patterns, purchasing journeys, and product preferences.',
          tag: 'Customer Insights'
        },
        {
          title: 'Finding Opportunities',
          description: 'Spot untapped market niches and uncover hidden business gaps before competitors.',
          tag: 'Market Growth'
        },
        {
          title: 'Improving Performance',
          description: 'Track key performance indicators (KPIs) to optimize operational efficiency.',
          tag: 'Operational Excellence'
        },
        {
          title: 'Predicting Trends',
          description: 'Forecast future demand and market dynamics based on robust historical patterns.',
          tag: 'Forecasting'
        }
      ],
      speakerNotes: [
        'Ask the audience: What happens to a company that makes decisions on intuition vs one driven by data?',
        'Provide real-world examples like Netflix recommendation engines or Amazon dynamic pricing.'
      ],
      darkTheme: false
    },

    // Slide 04 — Data in Real Life
    {
      id: 4,
      slideNumber: '04 / 44',
      type: 'four-cards',
      topRightTag: 'GETTING STARTED',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Everyday Applications Across Industries',
      mainTitle: 'Data in Real Life',
      highlightedWords: ['Data in Real Life'],
      subtitle: 'Data is everywhere — every industry runs on it.',
      cards: [
        {
          title: 'Business',
          description: 'Sales transactions, customer churn, financial records, and supply chain logistics.',
          tag: 'E-commerce & Retail'
        },
        {
          title: 'Healthcare',
          description: 'Patient electronic health records, treatment efficacy, and hospital capacity planning.',
          tag: 'Medical & Hospitals'
        },
        {
          title: 'Technology',
          description: 'User clickstream interactions, server logs, API telemetry, and app retention metrics.',
          tag: 'SaaS & Mobile Apps'
        },
        {
          title: 'Social Media',
          description: 'Posts, comments, sentiment analysis, engagement rates, and viral content reach.',
          tag: 'Marketing & Media'
        }
      ],
      speakerNotes: [
        'Invite students to share their current domain and how data impacts their team.',
        'Note that analytical skills are highly transferable across industries without starting over.'
      ],
      darkTheme: false
    },

    // Slide 05 — Data vs Information vs Insight
    {
      id: 5,
      slideNumber: '05 / 44',
      type: 'three-cards',
      topRightTag: 'GETTING STARTED',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'The Value Hierarchy from Raw Facts to Action',
      mainTitle: 'Data vs Information vs Insight',
      highlightedWords: ['Data vs Information vs Insight'],
      subtitle: 'Three stages of the same raw material, each more valuable than the last.',
      stages: [
        {
          stage: '1. Data',
          description: 'Unprocessed facts, figures, and raw measurements with no context on their own.',
          example: 'Raw sales numbers: 1400, 2900, 5100',
          iconName: 'Database',
          accentColor: 'blue'
        },
        {
          stage: '2. Information',
          description: 'Data organized into a structured, readable report with clear context and labels.',
          example: 'Monthly sales report: Branch Cairo total revenue is $150,000',
          iconName: 'LayoutGrid',
          accentColor: 'indigo'
        },
        {
          stage: '3. Insight',
          description: 'The "why" behind the numbers — actionable business meaning that steers decision-making.',
          example: 'Sales increased 25% due to the targeted social media promotional campaign',
          iconName: 'Lightbulb',
          accentColor: 'amber'
        }
      ],
      speakerNotes: [
        'This slide is the core differentiator of a great analyst: delivering Insights rather than just data tables.',
        'Explain the framework: Data = "What do we have?", Information = "What happened?", Insight = "Why did it happen and what should we do?".'
      ],
      darkTheme: false
    },

    // Slide 06 — Types of Data
    {
      id: 6,
      slideNumber: '06 / 44',
      type: 'two-cards',
      topRightTag: 'DATA FUNDAMENTALS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'The Two Fundamental Data Categories',
      mainTitle: 'Types of Data',
      highlightedWords: ['Types of Data'],
      subtitle: 'Every dataset is built from these two fundamental categories.',
      categoryColumns: [
        {
          title: 'QUALITATIVE DATA',
          headerColor: 'blue',
          description: 'Describes non-numeric qualities, attributes, or categories (used for grouping & slicing).',
          items: [
            'Country & Geography',
            'Gender & Demographics',
            'Product Category & Tags',
            'Customer Reviews & Sentiment'
          ],
          iconName: 'Tag'
        },
        {
          title: 'QUANTITATIVE DATA',
          headerColor: 'orange',
          description: 'Describes measurable and countable numeric quantities (used for calculations).',
          items: [
            'Salary & Compensation',
            'Age & Timestamps',
            'Revenue & Profit Margins',
            'Quantity & Units Sold'
          ],
          iconName: 'Hash'
        }
      ],
      speakerNotes: [
        'Explain how identifying data types determines which chart types and mathematical formulas to apply.'
      ],
      darkTheme: false
    },

    // Slide 07 — Structured vs Unstructured Data
    {
      id: 7,
      slideNumber: '07 / 44',
      type: 'three-cards',
      topRightTag: 'DATA FUNDAMENTALS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Data Architecture & Schema Organization',
      mainTitle: 'Structured vs Unstructured Data',
      highlightedWords: ['Structured vs Unstructured Data'],
      subtitle: 'How organized is the data before it reaches an analyst?',
      cards: [
        {
          title: 'STRUCTURED',
          subtitle: 'Rigid relational tables with rows and columns',
          description: 'Highly organized data stored in standardized schemas, easily queryable with SQL and Excel.',
          bullets: ['SQL Database Tables', 'Excel Spreadsheets', 'Clean CSV Datasets', 'Enterprise ERP Systems'],
          tag: 'Tabular / SQL'
        },
        {
          title: 'SEMI-STRUCTURED',
          subtitle: 'Tagged hierarchical formats with flexible schema',
          description: 'Data that does not conform to strict tabular schemas but carries self-describing tags and keys.',
          bullets: ['JSON Web API Payloads', 'XML Documents', 'Web Server Access Logs', 'NoSQL Collections (MongoDB)'],
          tag: 'JSON / APIs'
        },
        {
          title: 'UNSTRUCTURED',
          subtitle: 'Free-form media and arbitrary text files',
          description: 'Data with no predefined conceptual model, representing ~80% of all generated enterprise data.',
          bullets: ['Images & Graphic Files', 'Video & Audio Streams', 'Emails & Customer Chats', 'PDF Reports & Documents'],
          tag: '~80% of World Data'
        }
      ],
      speakerNotes: [
        'Highlight that in this diploma we will master Structured data thoroughly and tap into Semi-Structured data via APIs.'
      ],
      darkTheme: false
    },

    // Slide 08 — Data Analysis Lifecycle
    {
      id: 8,
      slideNumber: '08 / 44',
      type: 'process-flow',
      topRightTag: 'DATA FUNDAMENTALS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'The 6 Sequential Stages of Every Analytics Project',
      mainTitle: 'Data Analysis Lifecycle',
      highlightedWords: ['Data Analysis Lifecycle'],
      subtitle: 'Every analysis project moves through the same six stages.',
      processSteps: [
        {
          number: '1',
          title: 'Collect',
          description: 'Identify and extract raw data from internal and external sources: databases, files, APIs, and forms.',
          keyOutputs: ['Identify Sources', 'Raw Ingestion', 'Access Verification']
        },
        {
          number: '2',
          title: 'Clean',
          description: 'Fix anomalies, remove duplicate records, handle missing values, and standardize data formats.',
          keyOutputs: ['Handle Nulls', 'De-duplicate', 'Format Standardization']
        },
        {
          number: '3',
          title: 'Explore',
          description: 'Perform exploratory data analysis (EDA) to understand distributions, outliers, and initial correlations.',
          keyOutputs: ['Descriptive Stats', 'Outlier Detection', 'Correlation Matrix']
        },
        {
          number: '4',
          title: 'Analyze',
          description: 'Apply statistical queries, logic, and models to test business hypotheses and discover deep patterns.',
          keyOutputs: ['Hypothesis Testing', 'Predictive Models', 'Root Cause Analysis']
        },
        {
          number: '5',
          title: 'Visualize',
          description: 'Convert numeric findings into clear, impactful charts, interactive dashboards, and KPI scorecards.',
          keyOutputs: ['Power BI Dashboards', 'Interactive Charts', 'Executive Reports']
        },
        {
          number: '6',
          title: 'Communicate',
          description: 'Deliver actionable recommendations and strategic narratives to stakeholders for confident decisions.',
          keyOutputs: ['Data Storytelling', 'Actionable Advice', 'Executive Decision']
        }
      ],
      speakerNotes: [
        'Explain that this 6-stage lifecycle represents the standard professional methodology (like CRISP-DM).'
      ],
      darkTheme: false
    },

    // Slide 09 — Data Pipeline
    {
      id: 9,
      slideNumber: '09 / 44',
      type: 'journey-flow',
      topRightTag: 'DATA FUNDAMENTALS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'End-to-End Architecture from Ingestion to Decision',
      mainTitle: 'Data Pipeline',
      highlightedWords: ['Data Pipeline'],
      subtitle: 'How raw data travels from source to decision.',
      speakerNotes: [
        'Explain the Data Pipeline concept: an automated stream moving data from production sources through ETL and into analytics.'
      ],
      darkTheme: false
    },

    // Slide 10 — Data Analysis Roadmap
    {
      id: 10,
      slideNumber: '10 / 44',
      type: 'roadmap',
      topRightTag: 'CURRICULUM ROADMAP',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Complete Learning Order for This Program',
      mainTitle: 'Data Analysis Roadmap',
      highlightedWords: ['Data Analysis Roadmap'],
      subtitle: 'Your Path to Data Mastery — The recommended learning order for this program.',
      speakerNotes: [
        'Review the 8 milestones and reassure students that we start from step 1 with zero prior experience required.'
      ],
      darkTheme: true
    },

    // Slide 11 — SECTION 01: Excel for Data Analysis
    {
      id: 11,
      slideNumber: '11 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 01',
      topLeftTag: 'Excel Foundations',
      subBadge: 'Part 01 • Excel for Data Analysis',
      mainTitle: 'Excel for Data Analysis',
      highlightedWords: ['Excel for Data Analysis'],
      subtitle: 'The foundation every data analyst starts with.',
      speakerNotes: [
        'Starting Part 1: Microsoft Excel, the universal language of business data across the globe.'
      ],
      darkTheme: true
    },

    // Slide 12 — Why Excel is Important
    {
      id: 12,
      slideNumber: '12 / 44',
      type: 'six-cards',
      topRightTag: 'SECTION 1 • EXCEL',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Core Strengths of Excel in Analytics',
      mainTitle: 'Why Excel is Important',
      highlightedWords: ['Why Excel is Important'],
      subtitle: "It's the most accessible tool to start organizing and exploring data.",
      cards: [
        {
          title: 'Data Entry & Organization',
          description: 'Structure raw information into clean rows and columns.',
          iconName: 'Layout'
        },
        {
          title: 'Formulas & Functions',
          description: 'Automate calculations across large datasets with precision.',
          iconName: 'Code2'
        },
        {
          title: 'Data Cleaning',
          description: 'Remove duplicates, fix errors, and standardize formats.',
          iconName: 'Filter'
        },
        {
          title: 'Pivot Tables',
          description: 'Summarize and cross-tabulate large datasets instantly.',
          iconName: 'Table'
        },
        {
          title: 'Charts',
          description: 'Turn tables into visual, easy-to-read data stories.',
          iconName: 'BarChart3'
        },
        {
          title: 'Dashboards',
          description: 'Combine multiple visuals into one interactive view.',
          iconName: 'LayoutDashboard'
        }
      ],
      speakerNotes: [
        'Excel is far from basic: with Power Query and data modeling, it handles sophisticated analytics tasks.'
      ],
      darkTheme: false
    },

    // Slide 13 — Formulas & Functions in Practice
    {
      id: 13,
      slideNumber: '13 / 44',
      type: 'four-cards',
      topRightTag: 'SECTION 1 • EXCEL',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Everyday Analytical Functions',
      mainTitle: 'Formulas & Functions in Practice',
      highlightedWords: ['Formulas & Functions in Practice'],
      subtitle: 'A handful of functions cover most everyday analysis needs.',
      cards: [
        {
          title: 'SUM',
          subtitle: 'Summation',
          description: 'Adds a range of numeric values together.'
        },
        {
          title: 'AVERAGE',
          subtitle: 'Central Tendency',
          description: 'Calculates the mean of a range of values.'
        },
        {
          title: 'IF',
          subtitle: 'Conditional Logic',
          description: 'Returns one value if a condition is true, another if false.'
        },
        {
          title: 'XLOOKUP',
          subtitle: 'Search & Match',
          description: 'Finds and returns matching data from another table.'
        }
      ],
      definitionBox: {
        label: 'Pivot Tables Power',
        text: 'Pivot Tables let you summarize thousands of rows into a compact, filterable report — no formulas required.',
        iconName: 'Table'
      },
      speakerNotes: [
        'Highlight XLOOKUP as the modern, robust replacement for VLOOKUP and INDEX/MATCH.'
      ],
      darkTheme: false
    },

    // Slide 14 — From Clean Data to Dashboards
    {
      id: 14,
      slideNumber: '14 / 44',
      type: 'workflow-flow',
      topRightTag: 'SECTION 1 • EXCEL',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'End-to-End Excel Pipeline',
      mainTitle: 'From Clean Data to Dashboards',
      highlightedWords: ['From Clean Data to Dashboards'],
      subtitle: 'The final step: turning a clean table into a visual story.',
      cards: [
        { title: 'Clean the Data', sub: 'Sanitize table', iconName: 'Clean' },
        { title: 'Build a Pivot Table', sub: 'Aggregate metrics', iconName: 'Table' },
        { title: 'Add Charts', sub: 'Visual representations', iconName: 'Charts' },
        { title: 'Assemble a Dashboard', sub: 'Interactive layout', iconName: 'Dashboard', highlight: 'Target' }
      ],
      speakerNotes: [
        'Follow the 4-step workflow to build structured Excel dashboards and maintain data separation.'
      ],
      darkTheme: false
    },

    // Slide 15 — SECTION 02: Python Fundamentals
    {
      id: 15,
      slideNumber: '15 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 02',
      topLeftTag: 'Python Basics',
      subBadge: 'Part 02 • Python Fundamentals',
      mainTitle: 'Python Fundamentals',
      highlightedWords: ['Python Fundamentals'],
      subtitle: 'The programming language that powers modern data analysis.',
      speakerNotes: [
        'Moving into Python, the world\'s leading language for data engineering, automation, and analytics.'
      ],
      darkTheme: true
    },

    // Slide 16 — Variables & Data Types
    {
      id: 16,
      slideNumber: '16 / 44',
      type: 'code-and-concepts',
      topRightTag: 'SECTION 2 • PYTHON',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Core Building Blocks in Code',
      mainTitle: 'Variables & Data Types',
      highlightedWords: ['Variables & Data Types'],
      subtitle: "Python's role: automating analysis beyond what Excel can handle.",
      speakerNotes: [
        'Explain variables as labeled containers storing strings, integers, floats, and booleans.'
      ],
      darkTheme: false
    },

    // Slide 17 — Conditions & Loops
    {
      id: 17,
      slideNumber: '17 / 44',
      type: 'two-cards',
      topRightTag: 'SECTION 2 • PYTHON',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Branching & Iteration',
      mainTitle: 'Conditions & Loops',
      highlightedWords: ['Conditions & Loops'],
      subtitle: 'Logic that lets code react to data and repeat tasks automatically.',
      categoryColumns: [
        {
          title: 'Conditions',
          headerColor: 'blue',
          description: 'Evaluate conditions to branch execution paths dynamically.',
          items: [
            'if / elif / else evaluate conditions',
            'Used to filter, flag, or branch logic',
            'Example: flag rows where revenue < target'
          ],
          iconName: 'Code2'
        },
        {
          title: 'Loops',
          headerColor: 'orange',
          description: 'Repeat actions automatically across collections and datasets.',
          items: [
            'for loops repeat over a list of items',
            'while loops repeat until a condition ends',
            'Example: process every row in a dataset'
          ],
          iconName: 'RotateCcw'
        }
      ],
      speakerNotes: [
        'Conditions and loops form the basis of automated data filtering and cleansing routines.'
      ],
      darkTheme: false
    },

    // Slide 18 — Functions, Lists & Dictionaries
    {
      id: 18,
      slideNumber: '18 / 44',
      type: 'code-and-concepts',
      topRightTag: 'SECTION 2 • PYTHON',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Reusable Data Structures & Logic',
      mainTitle: 'Functions, Lists & Dictionaries',
      highlightedWords: ['Functions, Lists & Dictionaries'],
      subtitle: 'Structures that organize data and logic for reuse.',
      speakerNotes: [
        'Differentiate between ordered Lists and key-value mapping Dictionaries.'
      ],
      darkTheme: false
    },

    // Slide 19 — SECTION 03: Python for Data Analysis
    {
      id: 19,
      slideNumber: '19 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 03',
      topLeftTag: 'NumPy & Pandas',
      subBadge: 'Part 03 • Python for Data Analysis',
      mainTitle: 'Python for Data Analysis',
      highlightedWords: ['Python for Data Analysis'],
      subtitle: 'Putting Python libraries to work on real datasets.',
      speakerNotes: [
        'Diving into NumPy and Pandas to supercharge analysis on large tabular datasets.'
      ],
      darkTheme: true
    },

    // Slide 20 — NumPy & Pandas
    {
      id: 20,
      slideNumber: '20 / 44',
      type: 'two-cards',
      topRightTag: 'SECTION 3 • PYTHON FOR DATA ANALYSIS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'The Two Indispensable Libraries',
      mainTitle: 'NumPy & Pandas',
      highlightedWords: ['NumPy & Pandas'],
      subtitle: 'The two libraries every data analyst uses daily.',
      categoryColumns: [
        {
          title: 'NUMPY',
          headerColor: 'blue',
          description: 'Fast mathematical operations and multidimensional array manipulation.',
          items: [
            'Fast numerical operations',
            'Works with arrays and matrices',
            'Foundation for other data libraries',
            'Powers statistical calculations'
          ],
          iconName: 'Calculator'
        },
        {
          title: 'PANDAS',
          headerColor: 'orange',
          description: 'Comprehensive data manipulation, DataFrame slicing, and file I/O.',
          items: [
            'Data manipulation and analysis',
            'DataFrames organize rows and columns',
            'Filter, group, and merge datasets easily',
            'Reads CSV, Excel, SQL and more'
          ],
          iconName: 'Table'
        }
      ],
      speakerNotes: [
        'Pandas is the data analyst\'s Swiss Army Knife for data munging and exploratory analysis.'
      ],
      darkTheme: false
    },

    // Slide 21 — Matplotlib & Seaborn
    {
      id: 21,
      slideNumber: '21 / 44',
      type: 'two-cards',
      topRightTag: 'SECTION 3 • PYTHON FOR DATA ANALYSIS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Python Visualizations',
      mainTitle: 'Matplotlib & Seaborn',
      highlightedWords: ['Matplotlib & Seaborn'],
      subtitle: "Python's visualization toolkit for charts and statistical plots.",
      categoryColumns: [
        {
          title: 'Matplotlib',
          headerColor: 'blue',
          description: 'The base plotting library with granular control over every chart element.',
          items: [
            'Line plots and scatter plots',
            'Bar charts and histograms',
            'Customizable axes and styling',
            'Low-level figure architecture'
          ],
          iconName: 'BarChart3'
        },
        {
          title: 'Seaborn',
          headerColor: 'orange',
          description: 'Built on Matplotlib for statistical visualization with clean default aesthetics.',
          items: [
            'Distribution plots & box plots',
            'Correlation heatmaps',
            'Category comparisons',
            'Publication-ready styling'
          ],
          iconName: 'PieChart'
        }
      ],
      speakerNotes: [
        'Seaborn simplifies multi-variable statistical plots into concise one-liners.'
      ],
      darkTheme: false
    },

    // Slide 22 — Working with Real Datasets
    {
      id: 22,
      slideNumber: '22 / 44',
      type: 'code-and-concepts',
      topRightTag: 'SECTION 3 • PYTHON FOR DATA ANALYSIS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Standard Python EDA Workflow',
      mainTitle: 'Working with Real Datasets',
      highlightedWords: ['Working with Real Datasets'],
      subtitle: 'The typical Python workflow, from raw file to first findings.',
      speakerNotes: [
        'Demonstrate how reading CSV, dropping nulls, mutating columns, and running describe() takes 4 clean lines.'
      ],
      darkTheme: false
    },

    // Slide 23 — SECTION 04: SQL & Databases
    {
      id: 23,
      slideNumber: '23 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 04',
      topLeftTag: 'SQL Queries',
      subBadge: 'Part 04 • SQL & Databases',
      mainTitle: 'SQL & Databases',
      highlightedWords: ['SQL & Databases'],
      subtitle: 'The language of structured data — used in nearly every company.',
      speakerNotes: [
        'SQL is the #1 universally requested technical skill for data analysts worldwide.'
      ],
      darkTheme: true
    },

    // Slide 24 — Why Databases Matter
    {
      id: 24,
      slideNumber: '24 / 44',
      type: 'three-cards',
      topRightTag: 'SECTION 4 • SQL / DATABASE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Relational Data Storage',
      mainTitle: 'Why Databases Matter',
      highlightedWords: ['Why Databases Matter'],
      subtitle: 'Where structured business data actually lives.',
      cards: [
        {
          title: 'Database Concepts',
          subtitle: 'Reliable Storage',
          description: 'A structured system for storing and retrieving enterprise data reliably and securely.'
        },
        {
          title: 'Tables',
          subtitle: 'Rows & Columns',
          description: 'Data organized into rows (records) and columns (fields) with strict data types.'
        },
        {
          title: 'Relationships',
          subtitle: 'Shared Keys',
          description: 'Tables connect through shared keys, e.g. customer ID linking orders to profiles.'
        }
      ],
      speakerNotes: [
        'Relational databases ensure ACID compliance and maintain integrity across linked tables.'
      ],
      darkTheme: false
    },

    // Slide 25 — SQL Queries & Filtering
    {
      id: 25,
      slideNumber: '25 / 44',
      type: 'code-and-concepts',
      topRightTag: 'SECTION 4 • SQL / DATABASE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Querying & Slicing Tables',
      mainTitle: 'SQL Queries & Filtering',
      highlightedWords: ['SQL Queries & Filtering'],
      subtitle: 'Ask precise questions of your data using SQL.',
      speakerNotes: [
        'Explain the core query clause sequence: SELECT, FROM, WHERE, ORDER BY, LIMIT.'
      ],
      darkTheme: false
    },

    // Slide 26 — Aggregation & Joins
    {
      id: 26,
      slideNumber: '26 / 44',
      type: 'code-and-concepts',
      topRightTag: 'SECTION 4 • SQL / DATABASE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Summaries & Multi-Table Joins',
      mainTitle: 'Aggregation & Joins',
      highlightedWords: ['Aggregation & Joins'],
      subtitle: 'Summarize data and combine multiple tables together.',
      speakerNotes: [
        'Review GROUP BY and JOIN logic to combine customer demographics with transaction amounts.'
      ],
      darkTheme: false
    },

    // Slide 27 — Subqueries & SQL Tools
    {
      id: 27,
      slideNumber: '27 / 44',
      type: 'code-and-concepts',
      topRightTag: 'SECTION 4 • SQL / DATABASE',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Nested Queries & Database Engines',
      mainTitle: 'Subqueries & SQL Tools',
      highlightedWords: ['Subqueries & SQL Tools'],
      subtitle: 'Nesting queries for advanced logic, and where SQL runs.',
      speakerNotes: [
        'Subqueries allow querying the results of another query for benchmarks, thresholds, and filters.'
      ],
      darkTheme: false
    },

    // Slide 28 — SECTION 05: Power BI
    {
      id: 28,
      slideNumber: '28 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 05',
      topLeftTag: 'Business Intelligence',
      subBadge: 'Part 05 • Power BI',
      mainTitle: 'Power BI',
      highlightedWords: ['Power BI'],
      subtitle: 'Turning models into business-ready dashboards.',
      speakerNotes: [
        'Power BI is Microsoft\'s flagship BI solution for self-service dashboards and executive analytics.'
      ],
      darkTheme: true
    },

    // Slide 29 — Power Query & Data Modeling
    {
      id: 29,
      slideNumber: '29 / 44',
      type: 'three-cards',
      topRightTag: 'SECTION 5 • POWER BI',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'ETL & Star Schema Modeling',
      mainTitle: 'Power Query & Data Modeling',
      highlightedWords: ['Power Query & Data Modeling'],
      subtitle: 'Power BI role in business intelligence: connect, shape, and model data.',
      cards: [
        {
          title: 'Power Query',
          subtitle: 'Clean & Transform',
          description: 'Connect to sources and clean/shape data before loading it into the data model.'
        },
        {
          title: 'Data Modeling',
          subtitle: 'Star Schema',
          description: 'Organize tables into a logical dimensional model for high-performance analysis.'
        },
        {
          title: 'Relationships',
          subtitle: 'Filter Propagation',
          description: 'Connect fact and dimension tables together using shared surrogate keys.'
        }
      ],
      speakerNotes: [
        'Power Query provides robust reproducible transformations that update on scheduled refreshes.'
      ],
      darkTheme: false
    },

    // Slide 30 — DAX — Data Analysis Expressions
    {
      id: 30,
      slideNumber: '30 / 44',
      type: 'code-and-concepts',
      topRightTag: 'SECTION 5 • POWER BI',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Power BI Calculation Language',
      mainTitle: 'DAX — Data Analysis Expressions',
      highlightedWords: ['DAX — Data Analysis Expressions'],
      subtitle: 'The formula language behind Power BI calculations.',
      speakerNotes: [
        'DAX powers calculated measures that evaluate dynamically in the context of dashboard slicers.'
      ],
      darkTheme: false
    },

    // Slide 31 — Dashboards, Reports & Publishing
    {
      id: 31,
      slideNumber: '31 / 44',
      type: 'workflow-flow',
      topRightTag: 'SECTION 5 • POWER BI',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'From Model to Shared Workspace',
      mainTitle: 'Dashboards, Reports & Publishing',
      highlightedWords: ['Dashboards, Reports & Publishing'],
      subtitle: 'From a data model to a shareable business tool.',
      cards: [
        { title: 'Data', sub: 'Ingest & Clean', iconName: 'Database' },
        { title: 'Model', sub: 'DAX & Relations', iconName: 'Table' },
        { title: 'Dashboard', sub: 'Visual KPIs', iconName: 'Dashboard' },
        { title: 'Decision', sub: 'Cloud Publishing', iconName: 'Insights', highlight: 'Target' }
      ],
      speakerNotes: [
        'Publishing to Power BI Service enables enterprise collaboration, mobile monitoring, and role-based security.'
      ],
      darkTheme: false
    },

    // Slide 32 — SECTION 06: Tableau
    {
      id: 32,
      slideNumber: '32 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 06',
      topLeftTag: 'Storytelling & Viz',
      subBadge: 'Part 06 • Tableau',
      mainTitle: 'Tableau',
      highlightedWords: ['Tableau'],
      subtitle: 'A leading tool for visualization and data storytelling.',
      speakerNotes: [
        'Tableau represents the gold standard in exploratory visual analytics and data storytelling.'
      ],
      darkTheme: true
    },

    // Slide 33 — Connecting Data & Creating Charts
    {
      id: 33,
      slideNumber: '33 / 44',
      type: 'two-cards',
      topRightTag: 'SECTION 6 • TABLEAU',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Visual Analytics Platform',
      mainTitle: 'Connecting Data & Creating Charts',
      highlightedWords: ['Connecting Data & Creating Charts'],
      subtitle: 'Tableau as a visualization and business intelligence tool.',
      cards: [
        {
          title: 'Connecting Data Sources',
          description: 'Plug directly into spreadsheets, relational databases, and cloud data warehouses.'
        },
        {
          title: 'Creating Charts',
          description: 'Drag-and-drop chart building with instant interactive visual feedback.'
        }
      ],
      speakerNotes: [
        'Tableau translates user actions directly into VizQL queries behind the scenes.'
      ],
      darkTheme: false
    },

    // Slide 34 — Interactive Dashboards & Storytelling
    {
      id: 34,
      slideNumber: '34 / 44',
      type: 'two-cards',
      topRightTag: 'SECTION 6 • TABLEAU',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Engaging Stakeholder Communication',
      mainTitle: 'Interactive Dashboards & Storytelling',
      highlightedWords: ['Interactive Dashboards & Storytelling'],
      subtitle: "Tableau's real strength: making data explorable and memorable.",
      cards: [
        {
          title: 'Interactive Dashboards',
          description: 'Filters and actions let viewers explore the data dimensions themselves.'
        },
        {
          title: 'Storytelling with Data',
          description: 'Sequence dashboards into a guided narrative for executive stakeholders.'
        }
      ],
      speakerNotes: [
        'Tableau Story Points guide decision-makers through analytical hypotheses and conclusions.'
      ],
      darkTheme: false
    },

    // Slide 35 — Power BI vs Tableau
    {
      id: 35,
      slideNumber: '35 / 44',
      type: 'two-cards',
      topRightTag: 'SECTION 6 • TABLEAU',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'BI Industry Giants Comparison',
      mainTitle: 'Power BI vs Tableau',
      highlightedWords: ['Power BI vs Tableau'],
      subtitle: 'Two leading BI tools — often complementary, not competing.',
      categoryColumns: [
        {
          title: 'POWER BI',
          headerColor: 'blue',
          description: 'Tight Microsoft ecosystem integration and powerful DAX modeling.',
          items: [
            'Tight Microsoft ecosystem integration',
            'Strong data modeling with DAX',
            'Cost-effective licensing',
            'Great for business reporting'
          ],
          iconName: 'BarChart4'
        },
        {
          title: 'TABLEAU',
          headerColor: 'orange',
          description: 'Best-in-class visual flexibility and exploratory drag-and-drop analysis.',
          items: [
            'Best-in-class visual flexibility',
            'Deep, intuitive drag-and-drop analysis',
            'Popular for storytelling & exploration',
            'Strong for advanced visual analytics'
          ],
          iconName: 'PieChart'
        }
      ],
      speakerNotes: [
        'Understanding both tools provides maximum flexibility across diverse employer tech stacks.'
      ],
      darkTheme: false
    },

    // Slide 36 — SECTION 07: Web Scraping
    {
      id: 36,
      slideNumber: '36 / 44',
      type: 'section-divider',
      topRightTag: 'SECTION 07',
      topLeftTag: 'Web Scraping',
      subBadge: 'Part 07 • Web Scraping',
      mainTitle: 'Web Scraping',
      highlightedWords: ['Web Scraping'],
      subtitle: 'Collecting data directly from the web when no dataset exists.',
      speakerNotes: [
        'Web scraping empowers analysts to build proprietary datasets directly from web pages.'
      ],
      darkTheme: true
    },

    // Slide 37 — What is Web Scraping?
    {
      id: 37,
      slideNumber: '37 / 44',
      type: 'four-cards',
      topRightTag: 'SECTION 7 • WEB SCRAPING',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Automated HTML Extraction',
      mainTitle: 'What is Web Scraping?',
      highlightedWords: ['What is Web Scraping?'],
      subtitle: 'Extracting data automatically from websites and web pages.',
      cards: [
        {
          title: 'HTML Structure',
          description: 'Web pages are built from tags — scraping parses that structural hierarchy.'
        },
        {
          title: 'Requests',
          description: 'A Python library used to fetch a web page\'s raw HTML content over HTTP.'
        },
        {
          title: 'BeautifulSoup',
          description: 'Parses HTML DOM trees so specific elements and text can be extracted.'
        },
        {
          title: 'APIs',
          description: 'A cleaner, structured alternative to scraping raw HTML pages.'
        }
      ],
      speakerNotes: [
        'Demonstrate how web scraping bridges the gap between public web data and structured analysis.'
      ],
      darkTheme: false
    },

    // Slide 38 — Web Scraping in Practice
    {
      id: 38,
      slideNumber: '38 / 44',
      type: 'three-cards',
      topRightTag: 'SECTION 7 • WEB SCRAPING',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Real-world Scraping Applications',
      mainTitle: 'Web Scraping in Practice',
      highlightedWords: ['Web Scraping in Practice'],
      subtitle: 'Real scenarios where analysts use scraping to fill data gaps.',
      cards: [
        {
          title: 'Collecting Product Prices',
          subtitle: 'E-commerce Tracking',
          description: 'Track competitor pricing across e-commerce sites to adjust pricing strategies.'
        },
        {
          title: 'Market Analysis',
          subtitle: 'Industry Signals',
          description: 'Aggregate public data, job postings, and listings to study broader market trends.'
        },
        {
          title: 'Data Collection Automation',
          subtitle: 'Scheduled Cron Jobs',
          description: 'Schedule Python scripts to automatically gather fresh data on a routine schedule.'
        }
      ],
      speakerNotes: [
        'Remind students of respectful crawling practices and checking robots.txt rules.'
      ],
      darkTheme: false
    },

    // Slide 39 — Complete Data Analyst Workflow
    {
      id: 39,
      slideNumber: '39 / 44',
      type: 'workflow-flow',
      topRightTag: 'PUTTING IT ALL TOGETHER',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'End-to-End Tool Pipeline',
      mainTitle: 'Complete Data Analyst Workflow',
      highlightedWords: ['Complete Data Analyst Workflow'],
      subtitle: 'How every tool in this roadmap fits into one pipeline.',
      cards: [
        { title: 'Excel', sub: 'Quick exploration', iconName: 'Excel' },
        { title: 'Python', sub: 'Automation & scale', iconName: 'Python' },
        { title: 'SQL', sub: 'Database queries', iconName: 'SQL' },
        { title: 'Power BI', sub: 'Interactive KPIs', iconName: 'PowerBI' },
        { title: 'Tableau', sub: 'Visual storytelling', iconName: 'Tableau' },
        { title: 'Insights', sub: 'Actionable decisions', iconName: 'Insights', highlight: 'Target' }
      ],
      speakerNotes: [
        'Reiterate how each tool plays a specialized role across the end-to-end data lifecycle.'
      ],
      darkTheme: false
    },

    // Slide 40 — Career Skills of a Data Analyst
    {
      id: 40,
      slideNumber: '40 / 44',
      type: 'two-cards',
      topRightTag: 'PUTTING IT ALL TOGETHER',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'The Full Skill Stack',
      mainTitle: 'Career Skills of a Data Analyst',
      highlightedWords: ['Career Skills of a Data Analyst'],
      subtitle: 'Technical ability and soft skills both matter for the job.',
      categoryColumns: [
        {
          title: 'TECHNICAL SKILLS',
          headerColor: 'blue',
          description: 'Hard technical skills required to manipulate, query, and visualize data.',
          items: [
            'Excel (Formulas, Pivot Tables, Cleaning)',
            'Python (NumPy, Pandas, Visualizations)',
            'SQL (Database Queries, Joins, Schemas)',
            'Visualization (Power BI / Tableau)'
          ],
          iconName: 'Code2'
        },
        {
          title: 'SOFT SKILLS',
          headerColor: 'orange',
          description: 'Critical thinking and communication skills that drive business results.',
          items: [
            'Problem solving',
            'Communication & presentation',
            'Business understanding',
            'Critical questioning & curiosity'
          ],
          iconName: 'Brain'
        }
      ],
      speakerNotes: [
        'Soft skills and business acumen transform a technical practitioner into an indispensable strategic partner.'
      ],
      darkTheme: false
    },

    // Slide 41 — Session Summary
    {
      id: 41,
      slideNumber: '41 / 44',
      type: 'six-cards',
      topRightTag: 'WRAP-UP',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Complete Session Recap',
      mainTitle: 'Session Summary',
      highlightedWords: ['Session Summary'],
      subtitle: "Here's everything we covered in this session.",
      cards: [
        {
          title: 'What is Data Analysis?',
          description: 'Collecting, cleaning, analyzing, and interpreting data.',
          iconName: 'Lightbulb'
        },
        {
          title: 'Data Types',
          description: 'Qualitative, quantitative, structured, and unstructured.',
          iconName: 'Table'
        },
        {
          title: 'Data Pipeline',
          description: 'Sources ➔ Extract ➔ Transform ➔ Load ➔ Analysis.',
          iconName: 'Database'
        },
        {
          title: 'Analysis Lifecycle',
          description: 'Collect, clean, explore, analyze, visualize, communicate.',
          iconName: 'Compass'
        },
        {
          title: 'Data Analyst Roadmap',
          description: 'Excel ➔ Python ➔ SQL ➔ Power BI ➔ Tableau ➔ Web Scraping.',
          iconName: 'TrendingUp'
        },
        {
          title: 'Required Tools',
          description: 'Excel, Python, SQL, Power BI, Tableau, and scraping basics.',
          iconName: 'Code2'
        }
      ],
      speakerNotes: [
        'Review the key takeaways with the class and celebrate the completion of the first session!'
      ],
      darkTheme: false
    },

    // Slide 42 — Knowledge Check
    {
      id: 42,
      slideNumber: '42 / 44',
      type: 'knowledge-check',
      topRightTag: 'WRAP-UP',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Interactive Self-Assessment',
      mainTitle: 'Knowledge Check',
      highlightedWords: ['Knowledge Check'],
      subtitle: 'Test your understanding before moving to the next session.',
      speakerNotes: [
        'Facilitate the knowledge check by inviting attendees to answer each of the 6 prompts.'
      ],
      darkTheme: false
    },

    // Slide 43 — Assignment — Mini Research Task
    {
      id: 43,
      slideNumber: '43 / 44',
      type: 'assignment',
      topRightTag: 'WRAP-UP',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'Practical Research Assignment',
      mainTitle: 'Assignment — Mini Research Task',
      highlightedWords: ['Assignment — Mini Research Task'],
      subtitle: 'Choose a company and analyze how it uses data.',
      speakerNotes: [
        'Review the 4 assignment questions and explain the submission guidelines for next session.'
      ],
      darkTheme: false
    },

    // Slide 44 — Thank You
    {
      id: 44,
      slideNumber: '44 / 44',
      type: 'thank-you',
      topRightTag: 'DATA ANALYSIS DIPLOMA • SESSION 01',
      topLeftTag: 'COMPLETED',
      subBadge: 'End of Session 01',
      mainTitle: 'THANK YOU',
      highlightedWords: ['THANK YOU'],
      subtitle: 'Your journey into Data Analysis has officially started!',
      speakerNotes: [
        'Thank the class for their enthusiasm and prepare them for hands-on Excel in Session 02!'
      ],
      darkTheme: true
    }
  ]
};
