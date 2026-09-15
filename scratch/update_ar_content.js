const fs = require('fs');
const path = require('path');

const slidesDataPath = path.join(__dirname, '../src/data/slidesData.ts');
let content = fs.readFileSync(slidesDataPath, 'utf8');

// Let's create the natural, friendly, engaging presentationAR object
const updatedPresentationAR = `export const presentationAR: ChapterPresentation = {
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
      subBadge: 'دليلك وخريطتك المتكاملة عشان تبدأ صح في عالم الداتا',
      mainTitle: 'DATA ANALYSIS FUNDAMENTALS',
      highlightedWords: ['FUNDAMENTALS'],
      subtitle: 'Your Complete Roadmap to Become a Data Analyst.',
      speakerNotes: [
        'أهلاً بيكم يا شباب في أول خطوة ومحطة في دبلومة تحليل البيانات (Data Analysis Diploma).',
        'في رحلتنا دي هنتعلم إزاي نحول أي داتا متبهدلة لأرقام وقرارات بتكسب الشركات وتزود مبيعاتها.',
        'السيشن الأول ده هو حجر الأساس اللي هيبني عندك طريقة تفكير المحلل الشاطر (Data Mindset) قبل ما ندخل في الكود والأدوات.'
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
      subBadge: 'المفهوم والأنشطة الـ 5 الأساسية',
      mainTitle: 'ما هو تحليل البيانات؟ (What is Data Analysis?)',
      highlightedWords: ['What is Data Analysis?'],
      subtitle: 'إزاي نحول الداتا والأرقام الخام لقرارات بزنس حقيقية بتفرق في الواقع.',
      definitionBox: {
        label: 'التعريف ببساطة وبشكل عملي',
        text: 'تحليل البيانات (Data Analysis) هو إنك تجمع الداتا، تنضفها من اللخبطة، تفهم اللي وراها، وتطلع منها بأفكار ذكية (Insights) تساعد صاحب القرار يختار القرار الصح.',
        iconName: 'Lightbulb'
      },
      cards: [
        {
          title: 'Collect Data (جمع البيانات)',
          description: 'تجميع الداتا من كل حتة: ملفات إكسيل، قواعد بيانات SQL، سيستم المبيعات، وفورمز العملاء.',
          iconName: 'Collect'
        },
        {
          title: 'Clean Data (تنظيف وتظبيط الداتا)',
          description: 'تصلح الأخطاء، تشيل التكرار، وتتعامل مع الخانات الفاضية (وده بياخد 70% من وقتك الشاطر).',
          iconName: 'Clean'
        },
        {
          title: 'Analyze Data (تحليل واستكشاف الأرقام)',
          description: 'تستخدم الإحصاء والمنطق عشان تكتشف الأنماط، الترندات، والربط بين المبيعات وسلوك المشترين.',
          iconName: 'Analyze'
        },
        {
          title: 'Visualize Results (الرسم وعرض النتائج)',
          description: 'تحول الجداول التقيلة لرسم بياني وداشبورد تفاعلي يتقري في ثواني ويفهمه أي حد.',
          iconName: 'Visualize'
        },
        {
          title: 'Generate Insights (استخراج التوصيات)',
          description: 'ترجمة كل الأرقام دي لاقتراحات بزنس حاسمة: مثلاً نزود مخزون الصيف ولا نغير سعر المنتج؟',
          iconName: 'Insights'
        }
      ],
      speakerNotes: [
        'فكرهم إن تحليل الداتا مش مجرد شيت إكسيل، دي رحلة كاملة من جمع المعلومة لحد ما المدير ياخد قرار حاسم.',
        'أكد على إن خطوة الـ Data Cleaning هي أهم مهارة في السوق والشركات بتدور على اللي إيده نضيفة في تجهيز الداتا.'
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
      subBadge: 'ليه الشركات مستعدة تدفع أرقام كبيرة لمحلل البيانات؟',
      mainTitle: 'أهمية تحليل البيانات في البزنس (Why It Matters)',
      highlightedWords: ['Why Data Analysis is Important?'],
      subtitle: 'بدل ما نخمن ونمشي بالبركة.. الداتا بتدينا الدليل القاطع اللي بنبني عليه قراراتنا الصح.',
      cards: [
        {
          title: 'Better Decision Making (قرارات أدق ومحسوبة)',
          description: 'بنلغي التخمين والفهلوة، وبناخد قرارات مدعومة بأرقام وأدلة واقعية من السوق.',
          tag: 'Core Value'
        },
        {
          title: 'Understanding Customers (فهم دماغ العميل)',
          description: 'بنعرف الزبون بيحب إيه، بيشتري إمتى، وإيه المنتجات اللي دايماً بتتاخد مع بعض.',
          tag: 'Customer Insights'
        },
        {
          title: 'Finding Opportunities (اكتشاف فرص مكسب جديدة)',
          description: 'بنشوف فجوات في السوق والمناطق اللي المنافسين مش واخدين بالهم منها.',
          tag: 'Market Growth'
        },
        {
          title: 'Improving Performance (رفع الكفاءة وتقليل الهدر)',
          description: 'متابعة مؤشرات الـ KPIs باستمرار عشان نوقف المصاريف اللي ملهاش لازمة ونزود الأرباح.',
          tag: 'Operational Excellence'
        },
        {
          title: 'Predicting Trends (قراءة وتوقع المستقبل)',
          description: 'من أرقام السنين اللي فاتت بنقدر نتوقع مبيعات الشهور الجاية ونستعد للمواسم.',
          tag: 'Forecasting'
        }
      ],
      speakerNotes: [
        'اطرح عليهم سؤال: مين فيكم يعرف نتفليكس بتعرف تعمل مسلسلات ناجحة إزاي؟ الإجابة: بتحليل داتا المشاهدة ثانية بثانية!',
        'الشركات اللي شغالة بـ Data-Driven قراراتها بتكون أسرع بـ 5 مرات من منافسيها.'
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
      subBadge: 'أمثلة عملية بنشوفها كل يوم حوالينا',
      mainTitle: 'البيانات في الحياة اليومية (Data in Real Life)',
      highlightedWords: ['Data in Real Life'],
      subtitle: 'البيانات موجودة في كل تفصيلة في يومنا، ومفيش مجال يقدر يستغنى عنها دلوقتي.',
      cards: [
        {
          title: 'Business (التجارة والشركات)',
          description: 'فواتير المبيعات، عروض الأسعار، حساب المخازن، وتحليل أداء فروع ومندوبي البيع.',
          tag: 'E-commerce & Retail'
        },
        {
          title: 'Healthcare (الطب والمستشفيات)',
          description: 'سجلات المرضى، فاعلية الأدوية، التنبؤ بضغط غرف الطوارئ، وتوزيع الأطباء.',
          tag: 'Medical & Hospitals'
        },
        {
          title: 'Technology (التطبيقات والـ Apps)',
          description: 'اليوزر بيدوس على إيه؟ بيفضل فاتح الأبلكيشن أد إيه؟ وإيه اللي بيخليه يحذف الحساب؟',
          tag: 'SaaS & Mobile Apps'
        },
        {
          title: 'Social Media (السوشيال ميديا)',
          description: 'اللايكات، الكومنتات، وقت المشاهدة، وتحليل آراء الناس وانطباعاتهم عن البراند.',
          tag: 'Marketing & Media'
        }
      ],
      speakerNotes: [
        'وضح للشباب إن المهارة اللي بيتعلموها هنا تقدر تشغلهم في بنك، مستشفى، شركة تجارة إلكترونية، أو ستارت أب تكنولوجي.'
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
      subBadge: 'المستويات الثلاثة اللي بتصنع قيمة شغلك',
      mainTitle: 'الفرق بين البيانات والمعلومات والرؤى (Data vs Info vs Insight)',
      highlightedWords: ['Data vs Information vs Insight'],
      subtitle: 'رحلة تطور الأرقام: من مادة خام ملهاش معنى، لمعلومة مترتبة، لقرار بزنس عبقري يزود الأرباح.',
      stages: [
        {
          stage: '1. البيانات (Data)',
          description: 'أرقام وحقائق خام مرمية ومفيش أي سياق يوضح معناها لو بصيت عليها لوحدها.',
          example: 'أرقام خام على شيت: 1400, 2900, 5100',
          iconName: 'Database',
          accentColor: 'blue'
        },
        {
          stage: '2. المعلومات (Information)',
          description: 'أرقام حطيناها في جدول ورتبناها عشان نفهم ده بيعبر عن إيه وتاريخه إيه.',
          example: 'تقرير مرتب: إجمالي مبيعات فرع التجمع في شهر مارس 150 ألف جنيه',
          iconName: 'LayoutGrid',
          accentColor: 'indigo'
        },
        {
          stage: '3. الرؤية والتحليل (Insight)',
          description: 'فهمنا "السبب" اللي ورا الأرقام.. وده اللي بنبني عليه قرار وخطة عمل فورية.',
          example: 'المبيعات نطت 25% عشان إعلانات السوشيال في التجمع ركزت على فئة الشباب!',
          iconName: 'Lightbulb',
          accentColor: 'amber'
        }
      ],
      speakerNotes: [
        'ركز على إن أي حد يقدر يطلع أرقام (Data) ويعمل جدول (Info)، لكن المحلل الشاطر هو اللي بيطلع الـ Insight اللي بتكسب البيزنس ملايين.'
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
      subBadge: 'أساس تصنيف أي مجموعة بيانات',
      mainTitle: 'أنواع البيانات الأساسية (Types of Data)',
      highlightedWords: ['Types of Data'],
      subtitle: 'كل الداتا في العالم متقسمة لنوعين أساسيين.. فهمك ليهم هو سر اختيارك للشارت والأداة الصح.',
      speakerNotes: [
        'اشرح ببساطة: هل نقدر نجمع اسم القاهرة + الإسكندرية؟ لأ، يبقى دي Qualitative. هل نقدر نحسب متوسط المرتبات؟ أه، يبقى دي Quantitative.'
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
      subBadge: 'درجة تنظيم وتجهيز البيانات قبل التحليل',
      mainTitle: 'البيانات المنظمة وغير المنظمة (Structured vs Unstructured)',
      highlightedWords: ['Structured vs Unstructured Data'],
      subtitle: 'الداتا بتجيلك إزاي؟ منظمة في جداول جاهزة ولا محتاجة تنضيف ومعالجة من الصفر؟',
      cards: [
        {
          title: 'Structured (منظمة وجاهزة)',
          subtitle: 'جداول وصفوف محددة',
          bullets: [
            'جداول قواعد البيانات (SQL Tables)',
            'شيتات الإكسيل (Excel Worksheets)',
            'ملفات الـ CSV المنظمة والـ ERP'
          ]
        },
        {
          title: 'Semi-Structured (شبه منظمة)',
          subtitle: 'ملفات فيها مفاتيح وعلامات',
          bullets: [
            'ملفات الـ JSON واستجابات الـ APIs',
            'مستندات الـ XML',
            'سجلات السيرفرات (Server Logs)'
          ]
        },
        {
          title: 'Unstructured (غير منظمة)',
          subtitle: 'تمثل 80% من بيانات العالم',
          bullets: [
            'الصور والتصميمات (Images)',
            'الفيديوهات والتسجيلات الصوتية',
            'رسائل الشات والـ PDFs والتقارير الحرة'
          ]
        }
      ],
      speakerNotes: [
        'فهم الطلاب إن أغلب البيانات في العالم بتجيلنا مش مترتبة، وده سر وجودنا كمحللين إننا نحولها لـ Structured عشان نفهمها.'
      ],
      darkTheme: false
    },

    // Slide 08 — Data Analysis Lifecycle
    {
      id: 8,
      slideNumber: '08 / 44',
      type: 'lifecycle-flow',
      topRightTag: 'DATA FUNDAMENTALS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'المراحل الست في أي مشروع داتا حقيقي',
      mainTitle: 'دورة حياة تحليل البيانات (Data Analysis Lifecycle)',
      highlightedWords: ['Data Analysis Lifecycle'],
      subtitle: 'الـ 6 خطوات السحرية اللي بيمشي فيها أي مشروع تحليل داتا من أول الفكرة لحد القرار.',
      processSteps: [
        {
          number: '1',
          title: 'Collect (جمع البيانات)',
          description: 'تجميع الداتا من كل مصادرها: داتابيز، شيتات إكسيل، APIs، أو حتى سكرابينج من الويب.',
          keyOutputs: ['تحديد المصادر', 'سحب الداتا الخام', 'التأكد من الصلاحيات']
        },
        {
          number: '2',
          title: 'Clean (تنظيف البيانات)',
          description: 'معالجة الخانات الفاضية، حذف التكرار، وتوحيد التنسيقات (تاريخ، عملة، أسماء).',
          keyOutputs: ['معالجة الـ Nulls', 'حذف التكرار', 'توحيد الصيغ']
        },
        {
          number: '3',
          title: 'Explore (استكشاف البيانات - EDA)',
          description: 'نظرة عامة على الأرقام، حساب المتوسطات، واكتشاف القيم الشاذة واللخبطة في الداتا.',
          keyOutputs: ['الإحصاء الوصفي', 'كشف الـ Outliers', 'فحص العلاقات']
        },
        {
          number: '4',
          title: 'Analyze (التحليل المتعمق)',
          description: 'تطبيق المعادلات والاستعلامات لاختبار فرضيات البزنس والإجابة عن الأسئلة الصعبة.',
          keyOutputs: ['اختبار الفرضيات', 'نماذج المقارنة', 'معرفة السبب الجذري']
        },
        {
          number: '5',
          title: 'Visualize (الرسم والداشبورد)',
          description: 'بناء داشبورد تفاعلي يوضح الصورة كاملة بالألوان والمخططات المناسبة.',
          keyOutputs: ['داشبورد Power BI', 'شارتات تفاعلية', 'مؤشرات الـ KPIs']
        },
        {
          number: '6',
          title: 'Communicate (عرض النتائج والتوصيات)',
          description: 'تقديم الرؤى والحلول للإدارة بلغة بزنس واضحة يفهموها وياخدوا بيها قرارات.',
          keyOutputs: ['ستوريتيلينج بالداتا', 'توصيات واضحة', 'دعم القرار']
        }
      ],
      speakerNotes: [
        'اشرح إن الـ Lifecycle دي مش خط مستقيم وبس، أحياناً بنكتشف حاجة في خطوة الـ Explore ترجعنا تاني ننضف جزء من الداتا.'
      ],
      darkTheme: false
    },

    // Slide 09 — Data Pipeline
    {
      id: 9,
      slideNumber: '09 / 44',
      type: 'pipeline-diagram',
      topRightTag: 'DATA FUNDAMENTALS',
      topLeftTag: 'Data Analysis Fundamentals • Session 01',
      subBadge: 'المسار الهندسي والتحليلي لتدفق الداتا',
      mainTitle: 'خط سير وتدفق البيانات (Data Pipeline)',
      highlightedWords: ['Data Pipeline'],
      subtitle: 'رحلة البيانات من أول ما تتسحب من السيستم كداتا خام لحد ما تظهر على شاشة المدير.',
      speakerNotes: [
        'اشرح باختصار مفهوم ETL (Extract, Transform, Load) اللي بيعتمد عليه كل مهندسي ومحللي البيانات في الشركات الكبيرة.'
      ],
      darkTheme: false
    },

    // Slide 10 — Data Analyst Roadmap
    {
      id: 10,
      slideNumber: '10 / 44',
      type: 'roadmap',
      topRightTag: 'GETTING STARTED',
      topLeftTag: 'Session 01 • Complete Path',
      subBadge: 'خريطتك العملية من الصفر للاحتراف',
      mainTitle: 'خريطة طريق محلل البيانات (Data Analyst Roadmap)',
      highlightedWords: ['Data Analyst Roadmap'],
      subtitle: 'خريطتك الكاملة عشان تبدأ من الصفر وتوصل لمستوى يخليك جاهز للشغل في كبرى الشركات.',
      speakerNotes: [
        'طمن الطلاب إن الرحلة متدرجة وبسيطة: بنبدأ بأساسيات الإحصاء والإكسيل، ونتدرج خطوة بخطوة لحد الداشبوردات المتقدمة والسكرابينج.'
      ],
      darkTheme: true
    },

    // Slide 11 — SECTION 01: Excel
    {
      id: 11,
      slideNumber: '11 / 44',
      type: 'section-divider',
      topRightTag: 'PART 01 • EXCEL',
      topLeftTag: 'Stage 01 • Spreadsheets & Pivots',
      subBadge: 'الجزء الأول من الدبلومة',
      mainTitle: 'برنامج Excel لتحليل البيانات (Excel for Data Analysis)',
      highlightedWords: ['Excel for Data Analysis'],
      subtitle: 'الأداة الأساسية اللي كل محلل بيانات بيبدأ بيها ومفيش شركة في العالم بتستغنى عنها.',
      speakerNotes: [
        'أهلاً بيكم في الجزء الأول: Excel مش برنامج حسابات عادي، ده منصة كاملة لتنظيم، تنضيف، وتلخيص الداتا وعمل داشبوردات سريعة.'
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
      subBadge: 'ليه الإكسيل هو أول صاحب لكل محلل بيانات؟',
      mainTitle: 'أهمية واستخدامات برنامج Excel في التحليل',
      highlightedWords: ['Why Excel is Important'],
      subtitle: 'أسهل وأسرع برنامج تبدأ بيه تنظيم الداتا وفهم تفاصيل الأرقام وحساب المؤشرات.',
      cards: [
        {
          title: 'Data Entry & Organization (تنظيم الداتا)',
          description: 'ترتيب البيانات في صفوف وأعمدة وتنسيق الجداول بطريقة تسهل فلترتها وقراءتها.'
        },
        {
          title: 'Formulas & Functions (المعادلات الحسابية)',
          description: 'أتمتة العمليات الحسابية والمنطقية والشرطية على آلاف الصفوف في ثواني معدودة.'
        },
        {
          title: 'Data Cleaning (تنظيف البيانات السريع)',
          description: 'إزالة التكرار، معالجة المسافات الزيادة، وتوحيد أنواع الحقول والتواريخ.'
        },
        {
          title: 'Pivot Tables (الجداول المحورية)',
          description: 'السلاح السري لتلخيص وتجميع آلاف الأرقام بالسحب والإفلات بدون أي كود!'
        },
        {
          title: 'Charts (المخططات والرسوم البيانية)',
          description: 'تحويل الجداول الميتة لمخططات بصرية سهلة ومقنعة تبين التطور والانخفاض.'
        },
        {
          title: 'Dashboards (بناء لوحات التحكم)',
          description: 'دمج كل المخططات والفلاتر التفاعلية (Slicers) في شاشة تحكم متكاملة ومترابطة.'
        }
      ],
      speakerNotes: [
        'اكسر الرهبة عند الطلاب ووضح إن Excel أداة مرنة وسهلة، وأي حد يقدر يتعلمها ويطلع منها تقارير تبهر مديره.'
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
      subBadge: 'أهم الدوال في شغلك اليومي',
      mainTitle: 'تطبيقات الدوال والمعادلات في Excel',
      highlightedWords: ['Formulas & Functions in Practice'],
      subtitle: 'أهم 4 معادلات هتستخدمهم كل يوم، وميزة الـ Pivot Tables اللي بتوفر عليك ساعات شغل!',
      speakerNotes: [
        'عرف الطلاب بدالة XLOOKUP الحديثة اللي خلت عملية ربط الجداول سهلة وسريعة جداً مقارنة بدالة VLOOKUP القديمة.'
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
      subBadge: 'الخطوات العملية الأربع لبناء داشبورد محترم',
      mainTitle: 'من الداتا النضيفة إلى لوحة التحكم (From Data to Dashboards)',
      highlightedWords: ['From Clean Data to Dashboards'],
      subtitle: 'الخطوة الختامية: إزاي تحول جدول داتا متظبط لداشبورد تفاعلي يشد العين ويعجب الإدارة.',
      speakerNotes: [
        'أكد على القاعدة الذهبية: ورقة البيانات الخام (Raw Data) تفضل مقفولة ومحمية، وشغل التحليل والداشبورد في شيتات منفصلة.'
      ],
      darkTheme: false
    },

    // Slide 15 — SECTION 02: Python Fundamentals
    {
      id: 15,
      slideNumber: '15 / 44',
      type: 'section-divider',
      topRightTag: 'PART 02 • PYTHON',
      topLeftTag: 'Stage 02 • Python Basics',
      subBadge: 'الجزء الثاني من الدبلومة',
      mainTitle: 'أساسيات لغة Python (Python Fundamentals)',
      highlightedWords: ['Python Fundamentals'],
      subtitle: 'لغة البرمجة اللي هتديك القوة السحرية لتحليل ملايين السجلات وأتمتة الشغل الروتيني.',
      speakerNotes: [
        'اطمئنوا يا شباب، بايثون لغة سهلة جداً وقريبة من الإنجليزي العادي، ومش محتاج تكون عبقري برمجة عشان تستخدمها في التحليل.'
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
      subBadge: 'الصناديق والأنواع الأساسية في البرمجة',
      mainTitle: 'المتغيرات وأنواع البيانات في Python',
      highlightedWords: ['Variables & Data Types'],
      subtitle: 'اللبنات الأساسية: إزاي نخزن الداتا في بايثون ونتعامل مع الأرقام والنصوص والشروط.',
      speakerNotes: [
        'شبه المتغيرات بالصناديق اللي بتكتب عليها اسم من برة وتحط جواها القيمة اللي هترجع تستخدمها تاني في الكود.'
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
      subBadge: 'المنطق والتكرار الآلي السريع',
      mainTitle: 'الشروط وحلقات التكرار (Conditions & Loops)',
      highlightedWords: ['Conditions & Loops'],
      subtitle: 'بناء المنطق البرمجي: خلي الكود يفكر وياخد قرارات ويكرر الشغل الروتيني مكانك في ثواني.',
      categoryColumns: [
        {
          title: 'Conditions (الشروط المنطقية)',
          headerColor: 'blue',
          description: 'توجيه الكود عشان ياخد قرار معين لو الشرط اتحقق، وقرار تاني لو الشرط ماتحققش.',
          items: [
            'استخدام if / elif / else لتقييم الحالات',
            'فلترة الصفوف ووضع علامات (Flags) على العملاء المميزين',
            'مثال: لو المبيعات فوق 1000$ اديله كود خصم VIP'
          ],
          iconName: 'Code2'
        },
        {
          title: 'Loops (حلقات التكرار الآلية)',
          headerColor: 'orange',
          description: 'تكرار نفس العملية على آلاف وملايين السجلات تلقائياً بدون ما تعيد كتابة الكود.',
          items: [
            'استخدام for loops للمرور على قائمة بيانات كاملة',
            'استخدام while loops للتكرار لحد ما شرط معين يقف',
            'مثال: فحص وتنظيف كل صف في ملف داتا ضخم فيه مليون عميل'
          ],
          iconName: 'RotateCcw'
        }
      ],
      speakerNotes: [
        'فهمهم إن ميزة البرمجة الكبرى هي التكرار: عملية تاخد من بني آدم 5 أيام شغل يدوي، الكود بيخلصها في أقل من دقيقة!'
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
      subBadge: 'تنظيم الداتا وإعادة استخدام الكود',
      mainTitle: 'الدوال والقوائم والقواميس في Python',
      highlightedWords: ['Functions, Lists & Dictionaries'],
      subtitle: 'هياكل تنظيم الداتا، والدوال اللي بنكتبها مرة واحدة ونستدعيها آلاف المرات بضغطة زر.',
      speakerNotes: [
        'القوائم (Lists) زي طابور منظم، والقواميس (Dictionaries) زي ملف العميل اللي فيه اسمه، تليفونه، وعنوانه مربوطين ببعض.'
      ],
      darkTheme: false
    },

    // Slide 19 — SECTION 03: Python for Data Analysis
    {
      id: 19,
      slideNumber: '19 / 44',
      type: 'section-divider',
      topRightTag: 'PART 03 • PYTHON LIBRARIES',
      topLeftTag: 'Stage 03 • NumPy & Pandas',
      subBadge: 'الجزء الثالث من الدبلومة',
      mainTitle: 'مكتبات بايثون المتخصصة في تحليل البيانات',
      highlightedWords: ['Python for Data Analysis'],
      subtitle: 'الأسلحة التقنية الأقوى لمعالجة الداتا الضخمة وعجن الجداول ورسمها باحترافية.',
      speakerNotes: [
        'هنا بقى قوة بايثون الحقيقية بتظهر.. المكتبات الجاهزة اللي بتخليك تتعامل مع ملايين السجلات كأنك بتلعب بيهم!'
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
      subBadge: 'المحركان الجباران لأي محلل بيانات',
      mainTitle: 'مكتبات التحليل الأساسية: NumPy و Pandas',
      highlightedWords: ['NumPy & Pandas'],
      subtitle: 'الثنائي المرعب: NumPy للعمليات الرياضية الصاروخية، و Pandas لعجن وتنظيف وتلخيص الجداول.',
      categoryColumns: [
        {
          title: 'NUMPY (الحسابات السريعة)',
          headerColor: 'blue',
          description: 'المحرك الرياضي فائق السرعة للعمليات المصفوفية والحسابات المتجهة بدون Loops بطيئة.',
          items: [
            'سرعة خرافية مبنية بلغة C لمعالجة المصفوفات',
            'عمليات حسابية متجهة فورية (Vectorized Operations)',
            'الأساس الرياضي اللي اتبنت عليه باقي مكتبات الذكاء الاصطناعي',
            'حساب المتوسطات والانحرافات والمعادلات الإحصائية'
          ],
          iconName: 'Calculator'
        },
        {
          title: 'PANDAS (عجن الجداول والـ DataFrames)',
          headerColor: 'orange',
          description: 'المكتبة رقم 1 بلا منازع للتعامل مع الجداول والملفات ودمج وتلخيص السجلات.',
          items: [
            'هيكل الـ DataFrame (جداول بصفوف وأعمدة معنونة زي الإكسيل)',
            'دوال groupby و merge و pivot_table لتلخيص ودمج البيانات',
            'أسرع طريقة لقراءة ملفات الـ CSV و Excel والـ SQL بكلمة واحدة',
            'أدوات احترافية لحذف التكرار وملء الخانات الفاضية'
          ],
          iconName: 'Table'
        }
      ],
      speakerNotes: [
        'قول للطلاب: اعتبروا Pandas هي Excel على منشطات، من غير قيود على حجم الملفات وبإمكانيات برمجية غير محدودة!'
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
      subBadge: 'أدوات الرسم والتصوير البياني في Python',
      mainTitle: 'مكتبات الرسم البياني: Matplotlib و Seaborn',
      highlightedWords: ['Matplotlib & Seaborn'],
      subtitle: 'أدوات الرسم والتصوير في بايثون: من المخططات البسيطة للتحليلات الإحصائية المبهرة.',
      cards: [
        {
          title: 'Matplotlib (الأساس والتحكم الكامل)',
          description: 'المكتبة الأم للرسم في بايثون — بتديك تحكم كامل في كل ملي في الشارت: الألوان، الخطوط، المحاور، والخلفيات.',
          bullets: [
            'مخططات الخطوط والبارات والهيستوجرام',
            'تخصيص كامل لأبعاد وألوان الشارت',
            'تصدير الرسوم بجودة فائقة وجاهزة للطباعة'
          ]
        },
        {
          title: 'Seaborn (الجمال والإحصاء الجاهز)',
          description: 'مبنية فوق Matplotlib بتصميمات شيك وألوان متناسقة جاهزة، ومخصصة لإظهار العلاقات الإحصائية المعقدة بنقرة واحدة.',
          bullets: [
            'خرائط الارتباط الحرارية (Correlation Heatmaps)',
            'مخططات التوزيع وتجمع البيانات (Box Plots)',
            'تصميمات عصرية وجذابة بدون كود تنسيق كتير'
          ]
        }
      ],
      speakerNotes: [
        'وضح إن Matplotlib بتديك التحكم الدقيق، بينما Seaborn بتديك الجمال والشياكة الإحصائية الجاهزة فوراً.'
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
      subBadge: 'خطوات العمل الحقيقي على ملفات الداتا',
      mainTitle: 'المسار العملي الواقعي مع مكتبة Pandas',
      highlightedWords: ['Working with Real Datasets'],
      subtitle: 'المسار العملي الواقعي: من أول ما تستلم ملف الـ CSV لحد ما تطلع منه الخلاصة المفيدة للبزنس.',
      speakerNotes: [
        'اشرح الخطوات الأربع العملية: بنقرأ الملف، ننضف السطور الناقصة، نحسب الأعمدة الجديدة، ونطلع الملخص الإحصائي بـ describe().'
      ],
      darkTheme: false
    },

    // Slide 23 — SECTION 04: SQL & Databases
    {
      id: 23,
      slideNumber: '23 / 44',
      type: 'section-divider',
      topRightTag: 'PART 04 • SQL & DATABASES',
      topLeftTag: 'Stage 04 • Relational Databases',
      subBadge: 'الجزء الرابع من الدبلومة',
      mainTitle: 'قواعد البيانات ولغة SQL (SQL & Databases)',
      highlightedWords: ['SQL & Databases'],
      subtitle: 'لغة قواعد البيانات: المكان الحقيقي والوحيد اللي بتعيش فيه بيانات كل الشركات الكبيرة.',
      speakerNotes: [
        'الـ SQL هي أهم لغة بتتسأل فيها في إنترفيوهات تحليل البيانات، لأن 95% من بيانات الشركات متخزنة في قواعد بيانات علائقية.'
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
      subBadge: 'ليه الشركات بتعتمد على قواعد البيانات مش الإكسيل؟',
      mainTitle: 'أهمية قواعد البيانات في البزنس (Why Databases Matter)',
      highlightedWords: ['Why Databases Matter'],
      subtitle: 'ليه بنحتاج قواعد البيانات؟ عشان الإكسيل هيقف عند مليون صف، والداتابيز بتشيل مليارات بسرعة وأمان!',
      cards: [
        {
          title: 'Database Concepts (مفهوم الداتابيز)',
          subtitle: 'نظام تخزين ضخم وآمن',
          bullets: [
            'تخزين واسترجاع ملايين السجلات في أجزاء من الثانية',
            'حماية الداتا من الضياع وصلاحيات وصول للموظفين',
            'استقرار عالي مع آلاف المستخدمين في نفس الوقت'
          ]
        },
        {
          title: 'Tables (الجداول والصفوف والأعمدة)',
          subtitle: 'هيكلة منظمة وصارمة',
          bullets: [
            'الصفوف (Records) بتمثل سجل العميل أو الطلب',
            'الأعمدة (Fields) بتمثل نوع البيانات والخاصية',
            'توحيد أنواع الحقول لمنع إدخال بيانات ملخبطة'
          ]
        },
        {
          title: 'Relationships (العلاقات والمفاتيح)',
          subtitle: 'ربط الجداول بمفاتيح فريدة',
          bullets: [
            'المفتاح الأساسي (Primary Key) لتمييز العميل',
            'المفتاح الأجنبي (Foreign Key) لربط الطلب بصاحبه',
            'تفادي تكرار كتابة بيانات العميل في كل فاتورة'
          ]
        }
      ],
      speakerNotes: [
        'شبه العلاقات بفكرة الرقم القومي: بدل ما نكتب اسمك وعنوانك في كل استمارة حكومية، بنكتب رقمك القومي وهو بيربط كل بياناتك.'
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
      subBadge: 'إزاي تسأل الداتابيز وترد عليك بالظبط',
      mainTitle: 'الاستعلامات والفلترة في SQL (Queries & Filtering)',
      highlightedWords: ['SQL Queries & Filtering'],
      subtitle: 'اسأل الداتابيز بالظبط عن المعلومة اللي محتاجها، وهترجعلك النتيجة في ثواني بـ SELECT و WHERE.',
      speakerNotes: [
        'الـ SQL شبه الإنجليزي العادي: SELECT (هاتلي كذا) FROM (من جدول كذا) WHERE (بشرط كذا) ORDER BY (ورتبهم لي تنازلياً).'
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
      subBadge: 'تجميع الأرقام ودمج الجداول',
      mainTitle: 'التجميع وربط الجداول في SQL (Aggregation & Joins)',
      highlightedWords: ['Aggregation & Joins'],
      subtitle: 'تجميع أرقام المبيعات بـ GROUP BY وربط الجداول بـ JOINs عشان تطلع صورة كاملة للبزنس.',
      speakerNotes: [
        'الـ JOINs هي السحر الحقيقي في SQL، بتخليك تدمج جدول العملاء مع جدول الطلبات مع جدول المنتجات وتطلع تقرير عبقري.'
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
      subBadge: 'الاستعلامات المتقدمة وأشهر البرامج',
      mainTitle: 'الاستعلامات المتداخلة وأدوات الـ SQL (Subqueries & Tools)',
      highlightedWords: ['Subqueries & SQL Tools'],
      subtitle: 'الاستعلامات المتداخلة (Subqueries) وأشهر برامج إدارة قواعد البيانات المستخدمة في الشركات.',
      speakerNotes: [
        'وضح الفرق بين لغة SQL كمفهوم موحد، وأنظمة قواعد البيانات زي SQL Server (مايكروسوفت) و MySQL و PostgreSQL.'
      ],
      darkTheme: false
    },

    // Slide 28 — SECTION 05: Power BI
    {
      id: 28,
      slideNumber: '28 / 44',
      type: 'section-divider',
      topRightTag: 'PART 05 • POWER BI',
      topLeftTag: 'Stage 05 • Business Intelligence',
      subBadge: 'الجزء الخامس من الدبلومة',
      mainTitle: 'برنامج Power BI لذكاء الأعمال (Power BI Dashboards)',
      highlightedWords: ['Power BI'],
      subtitle: 'عملاق مايكروسوفت لبناء الداشبوردات التفاعلية والتقارير السحابية الموجهة للإدارة.',
      speakerNotes: [
        'وصلنا للأداة اللي بتخلي كل تحليلك يظهر في صورة لوحة قيادة مبهرة يتفاعل معاها صناع القرار ورؤساء مجالس الإدارة.'
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
      subBadge: 'تجهيز الداتا وبناء نموذج البيانات السليم',
      mainTitle: 'تجهيز ونمذجة البيانات (Power Query & Modeling)',
      highlightedWords: ['Power Query & Data Modeling'],
      subtitle: 'تجهيز الداتا وتنظيفها بـ Power Query وربط الجداول بنموذج داتا قوي (Data Model) ومتماسك.',
      cards: [
        {
          title: 'Power Query (محرك التنظيف والتحويل)',
          subtitle: 'سحب وتنظيف الداتا آلياً',
          bullets: [
            'سحب الداتا من الإكسيل والـ SQL والويب بنقرة واحدة',
            'تنفيذ خطوات التنظيف مرة واحدة وتتكرر تلقائياً مع كل ملف جديد',
            'دمج وتجميع الجداول المختلفة بدون كتابة كود معقد'
          ]
        },
        {
          title: 'Data Modeling (بناء نموذج العلاقات)',
          subtitle: 'هيكلة الجداول كمنظومة واحدة',
          bullets: [
            'ربط جداول المعاملات (Fact) بجداول الأبعاد (Dimensions)',
            'بناء الـ Star Schema لضمان سرعة التقارير',
            'تفادي تضخم الملفات والحفاظ على كفاءة الذاكرة'
          ]
        },
        {
          title: 'Relationships (تحديد اتجاه الفلترة)',
          subtitle: 'مفاتيح الربط الذكية',
          bullets: [
            'ربط الجداول بعلاقة One-to-Many موثوقة',
            'تطبيق الفلترة التلقائية عبر كل المخططات والصفحات',
            'التأكد من دقة وسلامة الأرقام عند عمل الفلاتر'
          ]
        }
      ],
      speakerNotes: [
        'شبه Power Query بالغسالة الأوتوماتيك: بتحط فيها الداتا المتوسخة تطلعلك نضيفة ومترتبة بنقرة واحدة كل يوم الصبح!'
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
      subBadge: 'اللغة الحسابية لمؤشرات الأداء',
      mainTitle: 'لغة DAX لكتابة المعادلات في Power BI',
      highlightedWords: ['DAX — Data Analysis Expressions'],
      subtitle: 'لغة DAX: السحر اللي بيحسبلك مؤشرات الأداء ومقارنات النمو السنوي (YoY) في لحظة واحدة.',
      speakerNotes: [
        'الـ DAX بتختلف عن معادلات إكسيل إنها بتتحسب ديناميكياً على حسب الفلتر اللي المستخدم داس عليه في الداشبورد.'
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
      subBadge: 'نشر التقارير ومشاركتها سحابياً',
      mainTitle: 'بناء ونشر لوحات التحكم (Dashboards & Cloud)',
      highlightedWords: ['Dashboards, Reports & Publishing'],
      subtitle: 'من داشبورد على جهازك، لمنصة سحابية آمنة يشوفها المدير من موبايله وهو مسافر في ثواني.',
      speakerNotes: [
        'وضح ميزة الـ Scheduled Refresh: الداشبورد بيحدث بياناته لوحده كل يوم الساعة 8 الصبح قبل ما المدير يوصل المكتب.'
      ],
      darkTheme: false
    },

    // Slide 32 — SECTION 06: Tableau
    {
      id: 32,
      slideNumber: '32 / 44',
      type: 'section-divider',
      topRightTag: 'PART 06 • TABLEAU',
      topLeftTag: 'Stage 06 • Visual Analytics',
      subBadge: 'الجزء السادس من الدبلومة',
      mainTitle: 'برنامج Tableau للتحليل البصري وسرد القصص',
      highlightedWords: ['Tableau'],
      subtitle: 'البرنامج الأقوى في سرد القصص البصرية بالبيانات (Data Storytelling) والتحليل الاستكشافي الممتع.',
      speakerNotes: [
        'تابلوه هو الاختيار الأول للمؤسسات اللي بتهتم بالتحليل البصري العميق وعرض الداتا بطريقة تخطف العين وتقنع الإدارة.'
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
      subBadge: 'السهولة والمرونة في السحب والإفلات',
      mainTitle: 'ربط البيانات وبناء المخططات في Tableau',
      highlightedWords: ['Connecting Data & Creating Charts'],
      subtitle: 'اسحب الحقول وارميها في الشاشة، وشوف الشارت بيتبني قدام عينك في ثواني مع تغذية بصرية فورية.',
      cards: [
        {
          title: 'Connecting Data Sources (ربط مصادر البيانات)',
          description: 'الاتصال المباشر بملفات الإكسيل، قواعد بيانات SQL، ومخازن البيانات السحابية بدون أي تعقيد.',
          bullets: [
            'دعم مئات مصادر البيانات السحابية والمحلية',
            'تحديث مباشر وسريع للبيانات (Live vs Extract)',
            'دمج جداول من مصادر مختلفة في شاشة واحدة'
          ]
        },
        {
          title: 'Creating Charts (بناء المخططات بالسحب والإفلات)',
          description: 'بناء الشارتات بآلية Drag & Drop المرنة، مع اقتراحات ذكية من ميزة Show Me للشارت الأنسب.',
          bullets: [
            'توليد الخرائط الجغرافية تلقائياً بأسماء المدن',
            'مخططات مخصصة بالكامل وبدون قيود برمجية',
            'تلوين وتنسيق فوري يعبر عن أداء المبيعات'
          ]
        }
      ],
      speakerNotes: [
        'ميزة تابلوه إنه بيديك تغذية بصرية فورية، أول ما تسحب المبيعات والمنطقة تلاقي الخريطة اتلونت قدامك فوراً!'
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
      subBadge: 'فن إقناع الإدارة وصناع القرار',
      mainTitle: 'اللوحات التفاعلية وسرد القصص (Data Storytelling)',
      highlightedWords: ['Interactive Dashboards & Storytelling'],
      subtitle: 'فن الداتا ستوريتيلينج: إزاي تحكي قصة بالأرقام ترتب المشكلة والحل وتقنع بيها أكبر مدير في الشركة.',
      cards: [
        {
          title: 'Interactive Dashboards (الداشبورد التفاعلي)',
          description: 'لوحات تحكم مليانة أكشنز وفلاتر تفاعلية تخلي المشاهد يعيش في الداتا ويجرب بنفسه.',
          bullets: [
            'فلاتر مترابطة بين كل الشارتات بنقرة واحدة',
            'تول تيبس (Tooltips) مفصلة تظهر عند الوقوف على أي نقطة',
            'تصميمات متوافقة مع شاشات الكمبيوتر والتابلت والموبايل'
          ]
        },
        {
          title: 'Storytelling with Data (سرد القصص بالبيانات)',
          description: 'ميزة Story Points الحصرية اللي بتخليك ترتب الشاشات كمشاهد قصة تقود المدير للقرار الصح.',
          bullets: [
            'عرض المشكلة بوضوح في المشهد الأول',
            'التعمق في السبب الجذري في المشهد الثاني',
            'تقديم خطة العمل والتوصيات في المشهد الختامي'
          ]
        }
      ],
      speakerNotes: [
        'المديرين مش عايزين يشوفوا جداول معقدة، عايزين يشوفوا قصة واضحة: إيه المشكلة؟ سببها إيه؟ والحل المقترح إيه؟'
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
      subBadge: 'مقارنة عملية بين عملاقي الـ BI',
      mainTitle: 'مقارنة شاملة بين Power BI و Tableau',
      highlightedWords: ['Power BI vs Tableau'],
      subtitle: 'مقارنة العمالقة: إمتى تختار Power BI وإمتى تتألق مع Tableau؟ الاتنين مكملين لبعض وبيعلوا قيمتك في السوق!',
      categoryColumns: [
        {
          title: 'POWER BI (عملاق مايكروسوفت والنمذجة)',
          headerColor: 'blue',
          description: 'تكامل مثالي مع بيئة مايكروسوفت، ونمذجة قوية بلغة DAX، وتكلفة اقتصادية جداً.',
          items: [
            'تكامل عميق مع Office 365 و Excel و Teams',
            'نمذجة بيانات وحسابات DAX فائقة القوة',
            'تكلفة ترخيص اقتصادية ومحبوبة عند الشركات',
            'الأنسب لتقارير ومؤشرات الأداء المؤسسية الدورية'
          ],
          iconName: 'BarChart4'
        },
        {
          title: 'TABLEAU (ساحر التحليل البصري والقصص)',
          headerColor: 'orange',
          description: 'أعلى مرونة بصرية على الإطلاق، وتحليل استكشافي عميق، وسرد قصص يخطف الأنظار.',
          items: [
            'أفضل تنوع ومرونة بصرية بدون قيود في التصميم',
            'تحليل استكشافي بديهي بالسحب والإفلات السريع',
            'البرنامج الأشهر في سرد القصص البصرية (Story Points)',
            'الأنسب للمؤسسات الضخمة والتحليلات الإحصائية المتقدمة'
          ],
          iconName: 'PieChart'
        }
      ],
      speakerNotes: [
        'نصيحة ذهبية للطلاب: مش لازم تختار واحد وتلغي التاني، المحلل اللي معاه الاتنين بيكون مطلوب في أي شركة وأجره أعلى.'
      ],
      darkTheme: false
    },

    // Slide 36 — SECTION 07: Web Scraping
    {
      id: 36,
      slideNumber: '36 / 44',
      type: 'section-divider',
      topRightTag: 'PART 07 • WEB SCRAPING',
      topLeftTag: 'Stage 07 • Live Data Ingestion',
      subBadge: 'الجزء السابع والأخير من الدبلومة',
      mainTitle: 'استخراج بيانات الويب (Web Scraping)',
      highlightedWords: ['Web Scraping'],
      subtitle: 'لما ميكونش عندك ملف جاهز.. إزاي تسحب الداتا بنفسك من أي موقع ع الويب بأسطر كود بسيطة!',
      speakerNotes: [
        'في الجزء الأخير، هنتعلم إزاي نبني روبوت بايثون يلف على مواقع المنافسين ويجمعلنا الأسعار والمنتجات في جدول منظم.'
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
      subBadge: 'المفهوم والأدوات المستخدمة في السحب',
      mainTitle: 'ما هو الـ Web Scraping؟ (What is Web Scraping?)',
      highlightedWords: ['What is Web Scraping?'],
      subtitle: 'مفهوم السكرابينج: كود بايثون يدخل المواقع ويقرأ صفحات الويب ويجمعلك الأرقام أوتوماتيك.',
      cards: [
        {
          title: 'HTML Structure (هيكل صفحات الويب)',
          description: 'صفحات الويب مبنية بوسوم (Tags) زي العناوين والأسعار، وكود السكرابينج بيمشي عليها ويقرأها بدقة.'
        },
        {
          title: 'Requests (مكتبة طلبات الويب)',
          description: 'مكتبة في بايثون بتدخل على رابط الموقع وتسحب كود الصفحة بالكامل في جزء من الثانية.'
        },
        {
          title: 'BeautifulSoup (مكتبة فلترة النصوص)',
          description: 'المكتبة اللي بتدور جوة كود الصفحة وتنقيلك بالظبط اسم المنتج وسعره وتستخرجهم في جدول.'
        },
        {
          title: 'APIs (الواجهات البرمجية الرسمية)',
          description: 'البديل الأسرع والأنضف لما الموقع يكون موفر رابط رسمي لسحب الداتا بتنسيق JSON نظيف.'
        }
      ],
      speakerNotes: [
        'وضح إن السكرابينج مهارة سحرية بتنقذك لما العميل يقولك "معنديش داتا، شوفلي أسعار المنافسين في السوق".'
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
      subBadge: 'سيناريوهات واقعية بنستخدم فيها السكرابينج',
      mainTitle: 'تطبيقات الـ Web Scraping في الواقع العملي',
      highlightedWords: ['Web Scraping in Practice'],
      subtitle: 'تطبيقات السكرابينج في البزنس: مراقبة أسعار المنافسين وتحليل اتجاهات السوق لحظة بلحظة.',
      cards: [
        {
          title: 'Collecting Product Prices (مراقبة أسعار المنتجات)',
          subtitle: 'متابعة المنافسين على مواقع التجارة',
          bullets: [
            'سحب أسعار آلاف المنتجات من مواقع التجارة يومياً',
            'تنبيه فوري لو منافس عمل تخفيض مفاجئ على سلعة معينة',
            'ضبط التسعير الديناميكي للمتجر عشان يفضل الأرخص'
          ]
        },
        {
          title: 'Market Analysis (تحليل حركة السوق والوظائف)',
          subtitle: 'تجميع بيانات التوظيف والفرص',
          bullets: [
            'سحب آلاف إعلانات الوظائف من لينكد إن لمعرفة المهارات المطلوبة',
            'تحليل متوسط المرتبات المعروضة في كل تخصص',
            'فهم اتجاهات الشركات والتقنيات اللي بتطلبها بقوة'
          ]
        },
        {
          title: 'Data Collection Automation (الأتمتة والجدولة)',
          subtitle: 'تشغيل الكود بجدول زمني محدد',
          bullets: [
            'جدولة السكربت يشتغل كل يوم الفجر أوتوماتيكياً',
            'تغذية قواعد البيانات بالداتا الجديدة أول بأول',
            'توفير مئات ساعات العمل اليدوي في النسخ واللصق'
          ]
        }
      ],
      speakerNotes: [
        'تخيل لو مطلوب منك تراقب 5000 منتج عند 10 منافسين.. يدوياً مستحيل، بكود سكرابينج بيخلص في 10 دقايق!'
      ],
      darkTheme: false
    },

    // Slide 39 — Complete Data Analyst Workflow
    {
      id: 39,
      slideNumber: '39 / 44',
      type: 'workflow-flow',
      topRightTag: 'PUTTING IT ALL TOGETHER',
      topLeftTag: 'Session 01 • Complete Architecture',
      subBadge: 'الصورة الكاملة لتكامل الأدوات',
      mainTitle: 'مسار عمل محلل البيانات المتكامل (Complete Workflow)',
      highlightedWords: ['Complete Data Analyst Workflow'],
      subtitle: 'الصورة الكاملة: إزاي الأدوات دي كلها بتركب مع بعض في خط إنتاج واحد متكامل من الفكرة للقرار.',
      speakerNotes: [
        'أكد على إن الأدوات مش بتنافس بعض، كل أداة ليها دور محدد ومكمل للي بعدها في المنظومة التحليلية.'
      ],
      darkTheme: false
    },

    // Slide 40 — Career Skills of a Data Analyst
    {
      id: 40,
      slideNumber: '40 / 44',
      type: 'two-cards',
      topRightTag: 'PUTTING IT ALL TOGETHER',
      topLeftTag: 'Career & Professional Readiness',
      subBadge: 'المعادلة الذهبية للقبول في أفضل الشركات',
      mainTitle: 'مهارات محلل البيانات المطلوبة في سوق العمل',
      highlightedWords: ['Career Skills of a Data Analyst'],
      subtitle: 'معادلة الشغل: 50% شطارة تكنيكال وأدوات + 50% فهم للبزنس وتواصل وإقناع.',
      speakerNotes: [
        'نصيحة من القلب: الشطارة في الكود لوحدها مش كفاية، قدرتك على شرح المعلومة للمدير ببساطة هي اللي هتميزك وتعلي سعرك في السوق.'
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
      subBadge: 'الكبسولة والخلاصة المركزة للسيشن',
      mainTitle: 'ملخص السيشن الأول (Session Summary)',
      highlightedWords: ['Session Summary'],
      subtitle: 'الخلاصة والكبسولة: كل المفاهيم والمحطات اللي بنيناها سوا خطوة بخطوة في رحلة السيشن الأول.',
      cards: [
        {
          title: 'What is Data Analysis?',
          description: 'جمع وتنظيف وتحليل الداتا عشان نحولها لقرارات بزنس حقيقية وناجحة.',
          iconName: 'Lightbulb'
        },
        {
          title: 'Data Types & Structure',
          description: 'بيانات كمية ونوعية، منظمة في جداول أو غير منظمة زي الصور والنصوص.',
          iconName: 'Table'
        },
        {
          title: 'Data Pipeline',
          description: 'مسار التدفق: سحب الداتا (Extract) ➔ تنظيفها (Transform) ➔ تخزينها (Load) ➔ تحليلها.',
          iconName: 'Database'
        },
        {
          title: 'Analysis Lifecycle',
          description: 'الخطوات الست: Collect ➔ Clean ➔ Explore ➔ Analyze ➔ Visualize ➔ Communicate.',
          iconName: 'Compass'
        },
        {
          title: 'Data Analyst Roadmap',
          description: 'خريطتنا الكاملة: Excel ➔ Python ➔ SQL ➔ Power BI ➔ Tableau ➔ Web Scraping.',
          iconName: 'TrendingUp'
        },
        {
          title: 'Career Success Formula',
          description: 'التوازن الذهبي: 50% مهارات تقنية بالأدوات + 50% فهم للبزنس وستوريتيلينج مقنع.',
          iconName: 'Code2'
        }
      ],
      speakerNotes: [
        'راجع مع الطلاب النقط الست دي وتأكد إن الكل طالع من السيشن الأول وهو فاهم الصورة الكبيرة ومتحمس للي جاي.'
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
      subBadge: 'فقرة الأسئلة وتثبيت المعلومات',
      mainTitle: 'اختبار الفهم وتثبيت المفاهيم (Knowledge Check)',
      highlightedWords: ['Knowledge Check'],
      subtitle: 'اختبر نفسك: 6 أسئلة سريعة تثبت بيها أهم المفاهيم اللي اتعلمناها سوا قبل ما ندخل في العملي.',
      speakerNotes: [
        'خلي السيشن تفاعلي، اسأل الطلاب وخلي حد يجاوب وناقش الإجابة مع باقي زمايله بروح مرحة وتشجيع.'
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
      subBadge: 'تاسك عملي ممتع للسيشن القادم',
      mainTitle: 'التكليف التطبيقي العملي (Mini Research Task)',
      highlightedWords: ['Assignment — Mini Research Task'],
      subtitle: 'تاسك تطبيقي: اختار شركة بتحبها (Netflix أو Amazon أو Uber) وحلل إزاي بتستغل الداتا عشان تكسب الملايين.',
      speakerNotes: [
        'شجع الطلاب يعملوا التقرير في صفحة واحدة بس ملخصة ومباشرة ويسلموها قبل ميعاد السيشن التاني للمناقشة.'
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
      subBadge: 'عاش يا أبطال!',
      mainTitle: 'THANK YOU',
      highlightedWords: ['THANK YOU'],
      subtitle: 'عاش جداً يا أبطال! دي كانت أول خطوة، ورحلتكم الحقيقية في عالم الداتا بدأت رسمياً.. نتقابل السيشن الجاي!',
      speakerNotes: [
        'اختم السيشن بحماس وطاقة إيجابية عالية، واشكر الطلاب على تركيزهم وتفاعلهم الممتاز.'
      ],
      darkTheme: true
    }
  ]
};`;

// Replace presentationAR in content
const arStart = content.indexOf('export const presentationAR: ChapterPresentation = {');
const enStart = content.indexOf('export const presentationEN: ChapterPresentation = {');

if (arStart !== -1 && enStart !== -1) {
  const newContent = content.slice(0, arStart) + updatedPresentationAR + '\\n\\n' + content.slice(enStart);
  fs.writeFileSync(slidesDataPath, newContent, 'utf8');
  console.log('Successfully updated presentationAR in slidesData.ts!');
} else {
  console.error('Could not find markers in slidesData.ts');
}
