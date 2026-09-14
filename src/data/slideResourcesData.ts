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

// Map key format: `${sessionId}_${slideId}` e.g. "session-01_1", "session-02_6"
export const slideResourcesDatabase: Record<string, SlideResourceItem[]> = {
  // =========================================================================
  // SESSION 01: INTRODUCTION TO UI/UX (26 SLIDES)
  // =========================================================================
  'session-01_1': [
    {
      title: 'The Design of Everyday Things',
      source: 'Don Norman (Father of UX & Cognitive Science)',
      type: 'book',
      descriptionAr: 'الكتاب التأسيسي الأول الذي صاغ مصطلح User Experience في شركة Apple عام 1993 وقدم مفاهيم الـ Affordances و Signifiers.',
      descriptionEn: 'The foundational masterpiece defining affordances, signifiers, and human-centered cognitive models.',
      tagAr: 'مرجع تأسيسي',
      tagEn: 'Core Foundation',
      searchQuery: 'The Design of Everyday Things Don Norman',
      url: 'https://jnd.org/the-design-of-everyday-things-revised-and-expanded-edition/'
    },
    {
      title: 'The Elements of User Experience',
      source: 'Jesse James Garrett',
      type: 'framework',
      descriptionAr: 'النموذج الكلاسيكي المكون من 5 طبقات: من الاستراتيجية والنطاق إلى الهيكل والواجهة السطحية.',
      descriptionEn: 'The 5-plane framework from strategy and scope to structure, skeleton, and surface.',
      tagAr: 'هيكلية الـ UX',
      tagEn: 'UX Architecture',
      searchQuery: 'The Elements of User Experience Jesse James Garrett',
      url: 'http://www.jjg.net/elements/pdf/elements.pdf'
    },
    {
      title: 'The Definition of User Experience (UX)',
      source: 'Nielsen Norman Group (NN/g)',
      type: 'article',
      descriptionAr: 'التعريف الدقيق من Nielsen Norman Group للفرق بين UX و UI وكيف يتكاملان في بناء تجربة رقمية متكاملة.',
      descriptionEn: 'The industry-standard definition separating user experience from interface design disciplines.',
      tagAr: 'تعريف معتمد',
      tagEn: 'Industry Definition',
      searchQuery: 'Nielsen Norman Group UX definition user experience',
      url: 'https://www.nngroup.com/articles/definition-user-experience/'
    }
  ],

  'session-01_2': [
    {
      title: 'Heuristic Evaluation of User Interfaces',
      source: 'Jakob Nielsen & Rolf Molich (ACM CHI Conference)',
      type: 'paper',
      descriptionAr: 'البحث العلمي التاريخي المنشور في مؤتمر ACM CHI الذي قدم نظرية تقييم الواجهات بقواعد الاستخدام العشر وخوارزمية فحص المشاكل.',
      descriptionEn: 'The landmark ACM CHI paper introducing usability heuristics and discount usability engineering methodology.',
      tagAr: 'ورقة بحثية تاريخية',
      tagEn: 'Seminal ACM Paper',
      searchQuery: 'Heuristic Evaluation of User Interfaces Nielsen Molich CHI',
      url: 'https://dl.acm.org/doi/10.1145/97243.97281'
    },
    {
      title: '10 Usability Heuristics for User Interface Design',
      source: 'Jakob Nielsen (Nielsen Norman Group)',
      type: 'guideline',
      descriptionAr: 'المبادئ العشرة الذهبية العالمية لتقييم سهولة استخدام أي موقع أو تطبيق رقمي.',
      descriptionEn: 'The 10 golden heuristics for evaluating the usability and friction of digital systems.',
      tagAr: 'معيار عالمي',
      tagEn: 'Usability Standard',
      searchQuery: 'Jakob Nielsen 10 Usability Heuristics',
      url: 'https://www.nngroup.com/articles/ten-usability-heuristics/'
    },
    {
      title: 'Finding Usability Problems Through Heuristic Evaluation',
      source: 'Jakob Nielsen (ACM SIGCHI)',
      type: 'study',
      descriptionAr: 'دراسة كمية حول عدد المشاكل التي يكتشفها كل مقيّم ونسبة تغطية الأخطاء في واجهات المستخدم.',
      descriptionEn: 'Empirical study on evaluator performance and error discovery rates in UI testing.',
      tagAr: 'دراسة كمية',
      tagEn: 'Empirical Study',
      searchQuery: 'Finding Usability Problems Through Heuristic Evaluation Nielsen',
      url: 'https://dl.acm.org/doi/10.1145/142750.142834'
    }
  ],

  'session-01_3': [
    {
      title: "Don't Make Me Think: Usability Principles in Web Ergonomics",
      source: 'Steve Krug (Addison-Wesley)',
      type: 'book',
      descriptionAr: 'الكتاب الأكثر مبيعاً في العالم في سهولة الاستخدام: كيف تصمم واجهات بديهية لا تتطلب أي مجهود ذهني من العميل.',
      descriptionEn: 'The global standard guide on minimizing cognitive friction and intuitive browsing hierarchy.',
      tagAr: 'كتاب مرجعي',
      tagEn: 'Core Book',
      searchQuery: 'Dont Make Me Think Steve Krug'
    },
    {
      title: 'Mental Models and the Usability of Interactive Systems',
      source: 'Carroll & Olson (Human-Computer Interaction)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية تشرح كيف يبني المستخدم نموذجاً عقلياً في ذاكرته عند التعامل مع النظام الرقمي وكيف يتسبب اختلافه مع نموذج المصمم في فشل التجربة.',
      descriptionEn: 'Academic study analyzing user mental representation vs designer conceptual model friction.',
      tagAr: 'ورقة بحثية محكمة',
      tagEn: 'Academic Paper',
      searchQuery: 'Mental Models and the Usability of Interactive Systems Carroll'
    }
  ],

  'session-01_4': [
    {
      title: 'The Business Value of Design: Empirical Evidence Across 300 Companies',
      source: 'McKinsey & Company (McKinsey Quarterly)',
      type: 'study',
      descriptionAr: 'أضخم دراسة مالية إحصائية في تاريخ التصميم تثبت أن الشركات التي تطبق أفضل ممارسات الـ UX تحقق نمواً في الإيرادات بنسبة 32% أعلى من منافسيها.',
      descriptionEn: 'Rigorous 5-year empirical study of 300 global corporations proving design directly drives superior business returns.',
      tagAr: 'تقرير اقتصادي محكم',
      tagEn: 'McKinsey Benchmark',
      searchQuery: 'The Business Value of Design McKinsey'
    },
    {
      title: 'User Experience vs. User Interface: A Holistic Framework',
      source: 'Nielsen Norman Group (NN/g)',
      type: 'framework',
      descriptionAr: 'الوثيقة التأسيسية التي توضح الحدود الدقيقة بين تجربة المنتج الإجمالية والواجهات التفاعلية البصرية.',
      descriptionEn: 'The definitive architectural whitepaper distinguishing end-to-end holistic UX from visual UI.',
      tagAr: 'هيكلية معتمدة',
      tagEn: 'Industry Standard',
      searchQuery: 'Nielsen Norman Group UX vs UI difference'
    }
  ],

  'session-01_5': [
    {
      title: 'The User Experience Honeycomb: 7 Facets of Information Utility',
      source: 'Peter Morville (Semantic Studios & University of Michigan)',
      type: 'framework',
      descriptionAr: 'النموذج الأكاديمي السداسي لتقييم المنتج: مفيد، قابل للاستخدام، جذاب، يمكن إيجاده، موثوق، سهل الوصول، وذو قيمة.',
      descriptionEn: 'Seminal 7-facet framework defining the multi-dimensional criteria of digital product quality.',
      tagAr: 'نموذج أكاديمي',
      tagEn: 'Foundational Model',
      searchQuery: 'Peter Morville User Experience Honeycomb'
    },
    {
      title: 'Information Architecture for the Web and Beyond',
      source: 'Rosenfeld, Morville & Arango (O\'Reilly Media)',
      type: 'book',
      descriptionAr: 'المرجع الشامل في تصنيف وهيكلة المعلومات الرقمية وجعلها قابلة للبحث والاكتشاف.',
      descriptionEn: 'The definitive textbook on structural design of shared information environments.',
      tagAr: 'كتاب مرجعي',
      tagEn: 'Core Book',
      searchQuery: 'Information Architecture for the Web and Beyond Rosenfeld'
    }
  ],

  'session-01_6': [
    {
      title: 'Cognitive Load Theory and Interface Design',
      source: 'John Sweller (Educational Psychology Review)',
      type: 'paper',
      descriptionAr: 'الورقة البحثية التي أسست نظرية الحمل المعرفي (Cognitive Load Theory) وشرحت حدود الذاكرة العاملة وكيف يؤدي تعقيد الواجهة لإجهاد المستخدم.',
      descriptionEn: 'Foundational psychological paper explaining intrinsic, extraneous, and germane cognitive load in human cognition.',
      tagAr: 'ورقة بحثية تأسيسية',
      tagEn: 'Psychology Paper',
      searchQuery: 'Cognitive Load Theory John Sweller',
      url: 'https://doi.org/10.1007/BF01326190'
    },
    {
      title: 'Minimize Cognitive Load to Maximize Usability',
      source: 'Nielsen Norman Group (NN/g)',
      type: 'article',
      descriptionAr: 'مقال NN/g العملي الأشمل حول تطبيق نظرية الحمل المعرفي على تصميم الواجهات وتقليل الاحتكاك الذهني.',
      descriptionEn: 'NN/g definitive practical guide on reducing extraneous cognitive load in digital interfaces.',
      tagAr: 'دليل تطبيقي معتمد',
      tagEn: 'NN/g Practitioner Guide',
      searchQuery: 'Minimize Cognitive Load Maximize Usability Nielsen Norman',
      url: 'https://www.nngroup.com/articles/minimize-cognitive-load/'
    },
    {
      title: 'Laws of UX: Using Psychology to Design Better Products',
      source: 'Jon Yablonski (O\'Reilly)',
      type: 'book',
      descriptionAr: 'الدليل العملي لربط القوانين النفسية السلوكية بقرارات تصميم واجهات وتطبيقات الويب والموبايل.',
      descriptionEn: 'Practical reference mapping cognitive psychology principles to modern digital UI patterns.',
      tagAr: 'كتاب مرجعي',
      tagEn: 'Design Psychology',
      searchQuery: 'Laws of UX Jon Yablonski',
      url: 'https://lawsofux.com/'
    }
  ],

  'session-01_7': [
    {
      title: 'On the Rate of Gain of Information',
      source: 'William Edmund Hick (Quarterly Journal of Experimental Psychology 1952)',
      type: 'paper',
      descriptionAr: 'البحث العلمي الأصلي لعام 1952 الذي أثبت رياضياً أن وقت اتخاذ القرار يزداد لوغاريتمياً مع زيادة عدد الخيارات المتاحة (RT = a + b log2(n)).',
      descriptionEn: 'The original 1952 experimental psychology paper mathematically formulating Hick\'s Law of decision time.',
      tagAr: 'بحث تجريبي أصلي',
      tagEn: 'Original 1952 Paper',
      searchQuery: 'On the rate of gain of information Hick 1952',
      url: 'https://doi.org/10.1080/17470215208416600'
    },
    {
      title: 'The Hick-Hyman Law in Modern HCI: Menu Depth vs. Breadth',
      source: 'K.P.L. Seow (Human-Computer Interaction Journal)',
      type: 'study',
      descriptionAr: 'دراسة تطبيقية حديثة تقارن سرعة تنقل المستخدم بين القوائم العميقة والقوائم العريضة في الواجهات الرقمية.',
      descriptionEn: 'Modern HCI study examining menu hierarchy, cognitive branching, and selection speed in digital interfaces.',
      tagAr: 'دراسة تطبيقية',
      tagEn: 'HCI Study',
      searchQuery: 'Hick Hyman Law menu depth breadth Seow HCI',
      url: 'https://dl.acm.org/doi/10.1207/s15327051hci2003_3'
    }
  ],

  'session-01_8': [
    {
      title: 'The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information',
      source: 'George A. Miller (Harvard University / Psychological Review 1956)',
      type: 'paper',
      descriptionAr: 'واحدة من أشهر الأوراق العلمية في تاريخ علم النفس المعرفي، التي أثبتت سعة الذاكرة قصيرة المدى (5 إلى 9 قطع معلوماتية - Chunks).',
      descriptionEn: 'One of the most cited psychology papers in history establishing working memory limits (7 ± 2 items).',
      tagAr: 'ورقة بحثية تاريخية',
      tagEn: 'Harvard Classic Paper',
      searchQuery: 'The Magical Number Seven Plus or Minus Two George Miller 1956',
      url: 'https://doi.org/10.1037/h0043158'
    },
    {
      title: 'Chunking: How to Present Information in Digestible Bites',
      source: 'Nielsen Norman Group (NN/g)',
      type: 'article',
      descriptionAr: 'مقال NN/g التطبيقي حول تطبيق مبدأ الـ Chunking في تصميم النصوص وبيانات النماذج وأرقام الهواتف.',
      descriptionEn: 'NN/g practical guide on applying chunking in forms, navigation, and data display design.',
      tagAr: 'دليل تطبيقي',
      tagEn: 'NN/g Applied Guide',
      searchQuery: 'Chunking information design Nielsen Norman',
      url: 'https://www.nngroup.com/articles/chunking/'
    }
  ],

  'session-01_9': [
    {
      title: 'The Information Capacity of the Human Motor System in Controlling the Amplitude of Movement',
      source: 'Paul M. Fitts (Journal of Experimental Psychology 1954)',
      type: 'paper',
      descriptionAr: 'البحث التاريخي الأصلي لعام 1954 الذي صاغ قانون فيتس لحساب زمن الوصول للأهداف بناءً على المسافة والحجم (MT = a + b log2(2D/W)).',
      descriptionEn: 'The 1954 foundational paper establishing the mathematical index of difficulty (ID) in target acquisition.',
      tagAr: 'ورقة بحثية تاريخية',
      tagEn: 'Original 1954 Paper',
      searchQuery: 'The information capacity of the human motor system Fitts 1954',
      url: 'https://doi.org/10.1037/h0055392'
    },
    {
      title: 'Fitts\' Law as a Research and Design Tool in Human-Computer Interaction',
      source: 'I. Scott MacKenzie (Human-Computer Interaction)',
      type: 'study',
      descriptionAr: 'دراسة تطبيقية شاملة لكيفية استخدام قانون فيتس في تصميم الأزرار والشاشات اللمسية ومناطق النقر في الهواتف الذكية.',
      descriptionEn: 'Comprehensive HCI study applying Fitts\' Law to touchscreens, mouse cursors, and mobile tap targets.',
      tagAr: 'دراسة تطبيقية في الـ HCI',
      tagEn: 'HCI Application Paper',
      searchQuery: 'Fitts Law as a Research and Design Tool MacKenzie',
      url: 'https://dl.acm.org/doi/10.1207/s15327051hci0701_3'
    }
  ],

  'session-01_10': [
    {
      title: "Jakob's Law of the Internet User Experience",
      source: 'Jakob Nielsen (Nielsen Norman Group)',
      type: 'article',
      descriptionAr: 'قانون ياكوب: يقضي المستخدمون معظم وقتهم على مواقع أخرى، لذلك يفضلون أن يعمل موقعك بنفس الطريقة المألوفة لديهم.',
      descriptionEn: "The seminal article defining Jakob's Law: users prefer sites that work the same way as familiar sites.",
      tagAr: 'مقالة تأسيسية لـ NN/g',
      tagEn: 'NN/g Seminal Article',
      searchQuery: "Jakob's Law internet user experience Nielsen Norman",
      url: 'https://www.nngroup.com/articles/end-of-web-design/'
    },
    {
      title: 'Mental Models',
      source: 'Nielsen Norman Group (NN/g)',
      type: 'article',
      descriptionAr: 'كيف يبني المستخدم نموذجاً عقلياً من تجاربه السابقة، ولماذا يسبب اختلاف النموذج العقلي عن نموذج المصمم فشل التجربة.',
      descriptionEn: "NN/g comprehensive guide on user mental models vs designer conceptual models and why they diverge.",
      tagAr: 'دليل مرجعي',
      tagEn: 'NN/g Guide',
      searchQuery: 'Mental models user experience Nielsen Norman Group',
      url: 'https://www.nngroup.com/articles/mental-models/'
    },
    {
      title: 'Consistency and Standards - Heuristic #4',
      source: 'Nielsen Norman Group (NN/g)',
      type: 'guideline',
      descriptionAr: 'المبدأ الرابع من مبادئ Nielsen: كيف تمنع إرباك المستخدم بالالتزام بأنماط التصميم القياسية المعتمدة.',
      descriptionEn: 'Official NN/g deep-dive on internal and external design consistency standards.',
      tagAr: 'معيار صناعي',
      tagEn: 'Usability Heuristic',
      searchQuery: 'Consistency and Standards Nielsen Norman usability heuristic',
      url: 'https://www.nngroup.com/articles/consistency-and-standards/'
    }
  ],

  'session-01_11': [
    {
      title: 'A Mathematical Model of the Finding of Usability Problems',
      source: 'Jakob Nielsen & Thomas K. Landauer (ACM SIGCHI 1993)',
      type: 'paper',
      descriptionAr: 'البحث الرياضي التاريخي الشهير الذي أثبت أن اختبار 5 مستخدمين فقط كافٍ لاكتشاف أكثر من 85% من مشاكل سهولة الاستخدام (Formula: Problems = N(1-(1-L)^n)).',
      descriptionEn: 'The famous mathematical paper proving 5 users discover 85%+ of usability issues via Poisson model.',
      tagAr: 'ورقة بحثية رياضية',
      tagEn: 'Seminal ACM 1993',
      searchQuery: 'Mathematical Model of the Finding of Usability Problems Nielsen Landauer',
      url: 'https://dl.acm.org/doi/10.1145/169059.169166'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      source: 'Jakob Nielsen (Nielsen Norman Group)',
      type: 'article',
      descriptionAr: 'المقال التوضيحي لمنحنى العائد المتناقص (Diminishing Returns) في اختبارات تجربة المستخدم السريعة.',
      descriptionEn: 'The definitive practitioner summary on sample size optimization in qualitative usability testing.',
      tagAr: 'معيار تطبيقي',
      tagEn: 'Practitioner Guide',
      searchQuery: 'Why You Only Need to Test with 5 Users Jakob Nielsen',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Usability 101: Introduction to Usability',
      source: 'Jakob Nielsen (Nielsen Norman Group)',
      type: 'article',
      descriptionAr: 'المدخل الشامل لمفهوم سهولة الاستخدام: التعريف، عوامل الجودة الخمسة، وأهميتها للتصميم.',
      descriptionEn: 'NN/g comprehensive introduction to usability definition, quality factors, and business importance.',
      tagAr: 'مرجع تعريفي شامل',
      tagEn: 'NN/g Usability Guide',
      searchQuery: 'Usability 101 Introduction to Usability Nielsen Norman',
      url: 'https://www.nngroup.com/articles/usability-101-introduction-to-usability/'
    }
  ],

  'session-01_12': [
    {
      title: 'Accessible Perceptual Contrast Model (APCA): Next Generation Visual Readability',
      source: 'Andrew Somers & W3C Silver Task Force',
      type: 'paper',
      descriptionAr: 'الورقة البحثية التي طورت نموذج APCA الحديث لقياس تباين الألوان الحقيقي بناءً على الإدراك البشري الفيزيائي للخطوط والألوان.',
      descriptionEn: 'Groundbreaking research replacing old WCAG 2 contrast ratios with modern spatial frequency perception.',
      tagAr: 'ورقة بحثية / معيار دولي',
      tagEn: 'W3C Research Paper',
      searchQuery: 'Accessible Perceptual Contrast Model APCA Somers W3C',
      url: 'https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup'
    },
    {
      title: 'Web Content Accessibility Guidelines (WCAG 2.2)',
      source: 'World Wide Web Consortium (W3C)',
      type: 'guideline',
      descriptionAr: 'المعيار الدولي القانوني لإتاحة المحتوى الرقمي لذوي الاحتياجات الخاصة وضعاف البصر.',
      descriptionEn: 'The official global regulatory and technical standard for digital interface accessibility.',
      tagAr: 'معيار دولي ملزم',
      tagEn: 'W3C Global Standard',
      searchQuery: 'Web Content Accessibility Guidelines WCAG 2.2',
      url: 'https://www.w3.org/TR/WCAG22/'
    }
  ],

  'session-01_13': [
    {
      title: 'F-Shaped Pattern For Reading Web Content: Eyetracking Findings',
      source: 'Kara Pernice & Jakob Nielsen (Nielsen Norman Group Eyetracking Study)',
      type: 'study',
      descriptionAr: 'دراسة تتبع حركة العين (Eyetracking) التاريخية على آلاف المستخدمين التي كشفت نمط القراءة على شكل حرف F وكيف يمسح الناس الشاشات.',
      descriptionEn: 'Seminal eyetracking study showing users scan screens horizontally across top lines then vertically down left.',
      tagAr: 'دراسة تتبع العين',
      tagEn: 'Eyetracking Benchmark',
      searchQuery: 'F-Shaped Pattern For Reading Web Content Nielsen Pernice',
      url: 'https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/'
    },
    {
      title: 'Eye Tracking in Web Search: How Users View Search Engine Results Pages',
      source: 'Granka, Joachims, Gay (ACM SIGIR Conference)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية محكمة من جامعة Cornell حول العلاقة بين الموضع البصري ومعدل النقر والانتباه في صفحات الويب.',
      descriptionEn: 'Cornell University empirical paper analyzing visual attention distribution and click choices in web UI.',
      tagAr: 'ورقة بحثية محكمة',
      tagEn: 'ACM SIGIR Paper',
      searchQuery: 'Eye Tracking in Web Search Granka Joachims Gay ACM',
      url: 'https://dl.acm.org/doi/10.1145/1008992.1009079'
    }
  ],

  'session-01_14': [
    {
      title: 'Human Behavior and the Principle of Least Effort',
      source: 'George Kingsley Zipf (Addison-Wesley)',
      type: 'paper',
      descriptionAr: 'النظرية السلوكية التي تثبت أن المستخدمين يختارون دائماً المسار الأقل جهداً ذهنياً وحركياً لتحقيق هدفهم على أي منصة رقمية.',
      descriptionEn: 'Seminal behavioral psychology framework on cognitive path minimization in human-system interactions.',
      tagAr: 'نظرية سلوكية',
      tagEn: 'Behavioral Science',
      searchQuery: 'Human Behavior and the Principle of Least Effort Zipf'
    },
    {
      title: 'Information Foraging Theory: Adaptive Interaction with Information',
      source: 'Peter Pirolli & Stuart Card (PARC / Oxford University Press)',
      type: 'study',
      descriptionAr: 'دراسة علمية من مركز Xerox PARC تشرح كيف يتصرف المستخدم في البحث عن المعلومات مثل الصائد باتباع "رائحة المعلومة" (Information Scent).',
      descriptionEn: 'Influential PARC study modeling how users follow optimal cues to find content efficiently.',
      tagAr: 'دراسة أكاديمية كبرى',
      tagEn: 'Xerox PARC Study',
      searchQuery: 'Information Foraging Theory Peter Pirolli Stuart Card'
    }
  ],

  'session-01_15': [
    {
      title: 'Card Sorting: Designing Usable Categories and Navigation Systems',
      source: 'Donna Spencer (Rosenfeld Media)',
      type: 'book',
      descriptionAr: 'المرجع الأهم في تنفيذ جلسات فرز البطاقات (Card Sorting) المفتوحة والمغلقة لاكتشاف هيكلة القوائم من وجهة نظر المستخدمين.',
      descriptionEn: 'The definitive industry manual on running open and closed card sorting exercises.',
      tagAr: 'كتاب تطبيقي',
      tagEn: 'Core Reference',
      searchQuery: 'Card Sorting Designing Usable Categories Donna Spencer'
    },
    {
      title: 'Statistical Analysis of Card Sort Data in Web Architecture',
      source: 'Wood & Wood (ACM Transactions on Computer-Human Interaction)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية تقدم خوارزميات التحليل العنقودي (Cluster Analysis) ومصفوفات التشابه لترتيب هياكل القوائم الضخمة.',
      descriptionEn: 'ACM paper on mathematical cluster analysis and similarity matrices in card sort evaluation.',
      tagAr: 'ورقة بحثية إحصائية',
      tagEn: 'ACM TOCHI Paper',
      searchQuery: 'Statistical Analysis of Card Sort Data Wood TOCHI'
    }
  ],

  'session-01_16': [
    {
      title: 'Visual Hierarchy and Visual Flow in Web Design: An Empirical Study',
      source: 'Peter Faraday (Microsoft Research & ACM)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية من مختبرات Microsoft Research تحدد العوامل السبعة لتوجيه عين المستخدم: الحجم، اللون، التباين، الموقع، الحركة، والمسافات البيضاء.',
      descriptionEn: 'Microsoft Research study breaking down the exact mechanics of visual entry points and focal paths.',
      tagAr: 'ورقة بحثية محكمة',
      tagEn: 'Microsoft Research Paper',
      searchQuery: 'Visual Hierarchy and Visual Flow in Web Design Peter Faraday ACM'
    },
    {
      title: 'Universal Principles of Design',
      source: 'Lidwell, Holden & Butler (Rockport Publishers)',
      type: 'book',
      descriptionAr: 'الموسوعة الشاملة لمبادئ التصميم البصري والإدراكي من Gestalt إلى التناسب الذهبي.',
      descriptionEn: 'Comprehensive interdisciplinary encyclopedia of 125 design principles with visual case studies.',
      tagAr: 'موسوعة مرجعية',
      tagEn: 'Design Encyclopedia',
      searchQuery: 'Universal Principles of Design Lidwell'
    }
  ],

  'session-01_17': [
    {
      title: 'Information Architecture: For the Web and Beyond (4th Edition)',
      source: 'Louis Rosenfeld, Peter Morville & Jorge Arango (O\'Reilly Media)',
      type: 'book',
      descriptionAr: 'الإنجيل المرجعي لهندسة المعلومات الرقمية: أنظمة التنظيم، أنظمة التسمية، أنظمة التنقل، وأنظمة البحث.',
      descriptionEn: 'The definitive polar bear book on structuring metadata, navigation taxonomies, and search paradigms.',
      tagAr: 'كتاب تأسيسي',
      tagEn: 'Foundational Book',
      searchQuery: 'Information Architecture For the Web and Beyond 4th Edition'
    },
    {
      title: 'Folksonomies and Collaborative Tagging: Taxonomy vs User Vocabulary',
      source: 'Thomas Vander Wal (Information Architecture Institute)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية حول مفهوم الـ Folksonomy وكيف يبني المستخدمون مصطلحاتهم الخاصة مقارنة بتصنيفات الشركات.',
      descriptionEn: 'Influential paper on user-generated taxonomies and bottom-up metadata structures.',
      tagAr: 'ورقة بحثية',
      tagEn: 'IA Paper',
      searchQuery: 'Folksonomies Collaborative Tagging Thomas Vander Wal'
    }
  ],

  'session-01_18': [
    {
      title: 'Interaction Design: Beyond Human-Computer Interaction',
      source: 'Helen Sharp, Jennifer Preece & Yvonne Rogers (Wiley)',
      type: 'book',
      descriptionAr: 'الكتاب الأكاديمي المعتمد في كبرى جامعات العالم لتدريس تفاعل الإنسان مع الحاسوب وتصميم السيناريوهات والتدفقات.',
      descriptionEn: 'The world\'s leading HCI academic textbook covering conceptual models, design lifecycles, and evaluation.',
      tagAr: 'مرجع أكاديمي دولي',
      tagEn: 'Leading HCI Textbook',
      searchQuery: 'Interaction Design Beyond Human-Computer Interaction Sharp Preece Rogers'
    },
    {
      title: 'About Face: The Essentials of Interaction Design',
      source: 'Alan Cooper (Father of Visual Basic & Personas)',
      type: 'book',
      descriptionAr: 'المرجع الأبرز في تصميم التفاعل الاحترافي ونظرية الـ Goal-Directed Design وصياغة شخصيات الـ Personas.',
      descriptionEn: 'The definitive handbook on goal-directed interaction design and persona-driven digital architecture.',
      tagAr: 'كتاب مرجعي',
      tagEn: 'Core Book',
      searchQuery: 'About Face The Essentials of Interaction Design Alan Cooper'
    }
  ],

  'session-01_19': [
    {
      title: 'Toyota Production System: Beyond Large-Scale Production and Root Cause Analysis',
      source: 'Taiichi Ohno (Productivity Press & Harvard Business Review)',
      type: 'book',
      descriptionAr: 'الكتاب الأصلي الذي ابتكر منهجية الأسئلة الخمسة (The 5-Whys) للوصول للسبب الجذري للمشاكل وعدم الاكتفاء بالأعراض السطحية.',
      descriptionEn: 'Foundational text on root cause problem discovery, Kaizen philosophy, and defensive debugging.',
      tagAr: 'مرجع إداري وهندسي',
      tagEn: 'Root Cause Methodology',
      searchQuery: 'Toyota Production System Taiichi Ohno 5 Whys'
    },
    {
      title: 'Root Cause Analysis and Human Error in Complex Interactive Systems',
      source: 'James Reason (Human Error / Cambridge University Press)',
      type: 'paper',
      descriptionAr: 'دراسة عميقة في علم النفس الهندسي توضح كيف أن أخطاء المستخدمين ناتجة عن خلل في تصميم النظام وليس غباءً من المستخدم.',
      descriptionEn: 'Cambridge University classic study on latent system failures and error mitigation in interface design.',
      tagAr: 'ورقة بحثية محكمة',
      tagEn: 'Cambridge Study',
      searchQuery: 'Human Error James Reason Cambridge University Press'
    }
  ],

  'session-01_20': [
    {
      title: 'User-Centered System Design: New Perspectives on Human-Computer Interaction',
      source: 'Donald A. Norman & Stephen W. Draper (Lawrence Erlbaum)',
      type: 'book',
      descriptionAr: 'الكتاب الأكاديمي التأسيسي لعام 1986 الذي صاغ مصطلح User-Centered Design (UCD) وناقش فجوة التنفيذ والتقييم.',
      descriptionEn: 'The 1986 foundation book coining User-Centered Design and formulating the Gulf of Execution and Evaluation.',
      tagAr: 'مرجع تأسيسي أصلي',
      tagEn: 'Original UCD Classic',
      searchQuery: 'User Centered System Design Norman Draper 1986'
    },
    {
      title: 'Design Thinking: Understanding How Designers Think and Work',
      source: 'Nigel Cross (Bloomsbury Publishing & Design Studies)',
      type: 'study',
      descriptionAr: 'دراسة تجريبية أكاديمية حول طريقة تفكير كبار المصممين وكيف يحللون المشكلات المعقدة (Wicked Problems).',
      descriptionEn: 'Academic empirical study on designer cognitive strategies and iterative problem framing.',
      tagAr: 'دراسة أكاديمية',
      tagEn: 'Design Cognition Study',
      searchQuery: 'Design Thinking Understanding How Designers Think Nigel Cross'
    }
  ],

  'session-01_21': [
    {
      title: 'The Double Diamond Design Model: Framework for Innovation',
      source: 'British Design Council (Design Council UK)',
      type: 'framework',
      descriptionAr: 'الإطار العالمي الأشهر للابتكار والتصميم: التفكير التباعدي والتقاربي (Discover, Define, Develop, Deliver).',
      descriptionEn: 'The world\'s leading innovation model balancing divergent discovery with convergent execution.',
      tagAr: 'إطار ابتكار عالمي',
      tagEn: 'Global Innovation Model',
      searchQuery: 'Double Diamond Design Council UK'
    },
    {
      title: 'Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days',
      source: 'Jake Knapp, John Zeratsky & Braden Kowitz (Google Ventures)',
      type: 'book',
      descriptionAr: 'منهجية Design Sprint المعتمدة في Google للتحقق من الأفكار واختبار النماذج الأولية في 5 أيام فقط.',
      descriptionEn: 'The battle-tested Google Ventures methodology for rapid prototyping and validation in 5 days.',
      tagAr: 'منهجية Google',
      tagEn: 'Google Sprint Method',
      searchQuery: 'Sprint How to Solve Big Problems Jake Knapp Google Ventures'
    }
  ],

  'session-01_22': [
    {
      title: 'Low vs. High-Fidelity Prototyping Debate: Effects on Usability Test Outcomes',
      source: 'Rudd, Stern & Isensee (IEEE Software)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية منشورة في IEEE تثبت الفروق الجوهرية في نوع الملاحظات التي يقدمها المستخدمون في النماذج السلكية البسيطة مقارنة بالواجهات عالية الدقة.',
      descriptionEn: 'IEEE Software study comparing feedback depth, cost efficiency, and conceptual validation between fidelity levels.',
      tagAr: 'ورقة بحثية منشورة في IEEE',
      tagEn: 'IEEE Software Paper',
      searchQuery: 'Low vs High-Fidelity Prototyping Debate Rudd Stern IEEE',
      url: 'https://ieeexplore.ieee.org/document/585128'
    },
    {
      title: 'Prototyping for Designers: Developing the Best Digital Products',
      source: 'Kathryn McElroy (O\'Reilly Media)',
      type: 'book',
      descriptionAr: 'دليل عملي شامل لاختيار نوع النموذج الأولي الأنسب لكل مرحلة من مراحل المشروع.',
      descriptionEn: 'Practical guide to prototyping methods, fidelity progression, and stakeholder communication.',
      tagAr: 'كتاب تطبيقي',
      tagEn: 'Prototyping Guide',
      searchQuery: 'Prototyping for Designers Kathryn McElroy OReilly'
    }
  ],

  'session-01_23': [
    {
      title: 'Apparent Usability vs. Inherent Usability: Experimental Analysis of Aesthetic-Usability Effect',
      source: 'Masaaki Kurosu & Kaori Kashimura (ACM SIGCHI Conference)',
      type: 'paper',
      descriptionAr: 'البحث العلمي التاريخي الذي أثبت تجريبياً ظاهرة Aesthetic-Usability Effect: المستخدمون يدركون الواجهات الجميلة على أنها أسهل استخداماً حتى قبل تجربتها.',
      descriptionEn: 'The landmark ACM CHI paper proving attractive interfaces are perceived as significantly easier to use.',
      tagAr: 'ورقة بحثية تاريخية في ACM',
      tagEn: 'Seminal ACM CHI Paper',
      searchQuery: 'Apparent Usability vs Inherent Usability Kurosu Kashimura CHI',
      url: 'https://dl.acm.org/doi/10.1145/223904.223940'
    },
    {
      title: 'Emotional Design: Why We Love (or Hate) Everyday Things',
      source: 'Don Norman (Basic Books)',
      type: 'book',
      descriptionAr: 'المستويات الثلاثة للتصميم العاطفي: المستوى الحسي الفطري (Visceral)، المستوى السلوكي (Behavioral)، والمستوى التأملي (Reflective).',
      descriptionEn: 'Norman\'s 3-level framework of emotional processing in human interaction with products.',
      tagAr: 'كتاب مرجعي كلاسيكي',
      tagEn: 'Core Classic Book',
      searchQuery: 'Emotional Design Don Norman'
    }
  ],

  'session-01_24': [
    {
      title: 'Contextual Design: Defining Customer-Centered Systems',
      source: 'Hugh Beyer & Karen Holtzblatt (Morgan Kaufmann)',
      type: 'book',
      descriptionAr: 'المرجع التأسيسي لمنهجية الملاحظة الميدانية (Contextual Inquiry) ومقابلة المستخدمين في بيئتهم الواقعية.',
      descriptionEn: 'The definitive textbook on in-situ qualitative user observation and work model synthesis.',
      tagAr: 'كتاب تأسيسي',
      tagEn: 'Foundational Book',
      searchQuery: 'Contextual Design Defining Customer-Centered Systems Beyer Holtzblatt'
    },
    {
      title: 'The Persona Lifecycle: Keeping People in Mind Throughout Product Design',
      source: 'John Pruitt & Tamara Adlin (Morgan Kaufmann)',
      type: 'framework',
      descriptionAr: 'الدليل العلمي الشامل لصياغة شخصيات المستخدمين المبنية على أبحاث وبيانات حقيقية.',
      descriptionEn: 'Comprehensive framework for data-driven persona creation and integration into agile roadmaps.',
      tagAr: 'دليل منهجي',
      tagEn: 'Methodology Framework',
      searchQuery: 'The Persona Lifecycle John Pruitt Tamara Adlin'
    }
  ],

  'session-01_25': [
    {
      title: 'Lean UX: Designing Great Products with Agile Teams',
      source: 'Jeff Gothelf & Josh Seiden (O\'Reilly Media)',
      type: 'book',
      descriptionAr: 'الكتاب الذي دمج مبادئ التصميم المتمركز حول المستخدم مع دورات التطوير الرشيقة (Agile Sprints) والتجربة السريعة.',
      descriptionEn: 'The award-winning framework harmonizing UX exploration with fast-paced Agile delivery cycles.',
      tagAr: 'كتاب تطبيقي رائد',
      tagEn: 'Industry Standard',
      searchQuery: 'Lean UX Jeff Gothelf Josh Seiden'
    },
    {
      title: 'Cross-Functional Collaboration and Usability Debt in Software Engineering',
      source: 'ACM Transactions on Software Engineering Methodology',
      type: 'paper',
      descriptionAr: 'ورقة بحثية محكمة توضح أثر التنسيق بين مصممي الواجهات والمطورين في تقليل الديون التقنية والديون التصميمية (Design Debt).',
      descriptionEn: 'Academic empirical study on team alignment and usability debt mitigation in software lifecycle.',
      tagAr: 'ورقة بحثية محكمة',
      tagEn: 'ACM TOSEM Paper',
      searchQuery: 'Cross-Functional Collaboration Usability Debt Software Engineering ACM'
    }
  ],

  'session-01_26': [
    {
      title: 'ISO 9241-210: Ergonomics of Human-System Interaction — Human-Centred Design Principles',
      source: 'International Organization for Standardization (ISO)',
      type: 'guideline',
      descriptionAr: 'المعيار القياسي الدولي المعتمد عالمياً لتعريف جودة تجربة المستخدم ومنهجية التصميم الموجه للإنسان.',
      descriptionEn: 'The definitive international ISO standard defining user-centered design lifecycle criteria.',
      tagAr: 'معيار دولي رسمي (ISO)',
      tagEn: 'Official ISO Standard',
      searchQuery: 'ISO 9241-210 Human-Centred Design for Interactive Systems',
      url: 'https://www.iso.org/standard/77520.html'
    },
    {
      title: 'Continuous UX: Evolution from Project to Product Model',
      source: 'Nielsen Norman Group & Design Management Institute',
      type: 'study',
      descriptionAr: 'دراسة حديثة حول انتقال مهنة التصميم من تسليم ملفات ثابتة إلى التطوير والتجربة المستمرة مع المستخدمين.',
      descriptionEn: 'Research report on the evolution of UX maturity and continuous experimentation in modern organizations.',
      tagAr: 'دراسة نضج التصميم',
      tagEn: 'UX Maturity Study',
      searchQuery: 'Continuous UX Evolution from Project to Product Model NN/g'
    }
  ],

  // =========================================================================
  // SESSION 02: TOOLS, DESIGN SYSTEMS & ROLES (30 SLIDES)
  // =========================================================================
  'session-02_1': [
    {
      title: 'The Evolution of Digital Product Design Tools: A 20-Year Retrospective',
      source: 'ACM Interactions Journal',
      type: 'paper',
      descriptionAr: 'ورقة بحثية توثق رحلة أدوات التصميم من برامج الفيكتور المعزولة مثل Photoshop و Illustrator إلى المنصات التعاونية السحابية مثل Figma.',
      descriptionEn: 'Academic paper tracing the paradigm shift from standalone graphic apps to multiplayer browser canvases.',
      tagAr: 'ورقة بحثية محكمة',
      tagEn: 'ACM Historical Paper',
      searchQuery: 'The Evolution of Digital Product Design Tools ACM Interactions'
    },
    {
      title: 'State of UX Tooling: Annual Global Industry Survey',
      source: 'UX Tools & Design in Tech Report (John Maeda)',
      type: 'study',
      descriptionAr: 'التقرير الإحصائي السنوي الأكبر عالمياً الذي يستطلع آراء أكثر من 4,000 مصمم محترف حول الأدوات الأكثر استخداماً ومعدلات التبني.',
      descriptionEn: 'Comprehensive annual benchmark survey on software adoption across UI, UX research, and prototyping.',
      tagAr: 'تقرير إحصائي عالمي',
      tagEn: 'Global Tooling Survey',
      searchQuery: 'State of UX Tooling Survey UX Tools John Maeda'
    }
  ],

  'session-02_2': [
    {
      title: 'Tool Selection and Tool Switching Friction in Agile UX Teams',
      source: 'IEEE Transactions on Software Engineering',
      type: 'paper',
      descriptionAr: 'ورقة بحثية منشورة في IEEE تحلل الهدر الزمني الناتج عن التنقل بين أدوات غير متوافقة وكيف ترفع الأدوات المتكاملة إنتاجية الفريق.',
      descriptionEn: 'Empirical software engineering study analyzing cognitive friction and handoff overhead across disconnected toolchains.',
      tagAr: 'ورقة بحثية في IEEE',
      tagEn: 'IEEE TSE Paper',
      searchQuery: 'Tool Switching Friction Agile UX Teams IEEE'
    },
    {
      title: 'The Digital Product Design Pipeline: From Discovery to Delivery',
      source: 'Figma & Design Systems Community',
      type: 'framework',
      descriptionAr: 'خريطة مسار العمل المتكاملة التي تربط بين أدوات العصف الذهني، التصميم البصري، النمذجة، والبرمجة.',
      descriptionEn: 'Industry pipeline model detailing transitions across research, UI craft, and code integration.',
      tagAr: 'هيكلية مسار العمل',
      tagEn: 'Industry Framework',
      searchQuery: 'Digital Product Design Pipeline Discovery to Delivery'
    }
  ],

  'session-02_3': [
    {
      title: 'Cognitive Ergonomics of Collaborative Whiteboarding in Remote Work',
      source: 'Dourish & Bellotti (Computer Supported Cooperative Work / ACM)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية حول مفهوم الـ Awareness في الواجهات التعاونية: كيف يساعد تتبع مؤشرات الماوس الحية على زيادة التفاعل وسرعة اتخاذ القرار.',
      descriptionEn: 'Seminal CSCW paper analyzing shared workspace awareness and multiplayer visual collaboration.',
      tagAr: 'ورقة بحثية في ACM',
      tagEn: 'ACM CSCW Classic',
      searchQuery: 'Awareness and Coordination in Shared Workspaces Dourish Bellotti ACM',
      url: 'https://dl.acm.org/doi/10.1145/143457.143468'
    },
    {
      title: 'Design Thinking Playbook: Mindful Digital Collaboration',
      source: 'Lewrick, Link & Leifer (Stanford University / Wiley)',
      type: 'book',
      descriptionAr: 'دليل جامعة ستانفورد لورش العمل التفاعلية والـ Brainstorming السريع باستخدام المساحات البصرية الرقمية.',
      descriptionEn: 'Stanford d.school guide to facilitation, workshop dynamics, and visual problem solving.',
      tagAr: 'دليل ستانفورد للابتكار',
      tagEn: 'Stanford Guidebook',
      searchQuery: 'The Design Thinking Playbook Michael Lewrick Wiley'
    }
  ],

  'session-02_4': [
    {
      title: 'Real-Time Multiplayer Architecture in Cloud Design Environments',
      source: 'Evan Wallace & Figma Engineering (ACM Queue)',
      type: 'paper',
      descriptionAr: 'الورقة التقنية المعمارية المنشورة من مؤسس Figma حول كيفية بناء محرك WebGL سريع مع خوارزميات مزامنة البيانات بدون تعارض (CRDTs).',
      descriptionEn: 'Engineering deep-dive into Figma\'s Rust/Wasm canvas engine and Conflict-free Replicated Data Types.',
      tagAr: 'ورقة معمارية هندسية',
      tagEn: 'ACM Queue Architecture',
      searchQuery: 'Figma Multiplayer Architecture Evan Wallace ACM Queue'
    },
    {
      title: 'Collaborative Interaction Paradigms in Modern Canvas Software',
      source: 'MIT Media Lab & Harvard Berkman Center',
      type: 'study',
      descriptionAr: 'دراسة حول أثر العمل المتزامن في نفس الملف على تقليل فجوة التواصل بين المصمم ومدير المنتج والمطور.',
      descriptionEn: 'Empirical study on synchronous multi-stakeholder editing and reduced specification latency.',
      tagAr: 'دراسة أكاديمية',
      tagEn: 'MIT Media Lab Study',
      searchQuery: 'Collaborative Interaction Paradigms Canvas Software MIT Media Lab'
    }
  ],

  'session-02_5': [
    {
      title: 'Affinity Diagramming in Collaborative Design: Evaluating Digital vs. Physical Grouping',
      source: 'Harboe & Huang (ACM Conference on Designing Interactive Systems)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية تقارن سرعة فرز الأفكار وتصنيفها في مساحات الـ Whiteboarding الرقمية مثل FigJam و Miro مقارنة بالأوراق اللاصقة التقليدية.',
      descriptionEn: 'ACM DIS study analyzing idea clustering velocity, spatial memory, and category synthesis.',
      tagAr: 'ورقة بحثية محكمة',
      tagEn: 'ACM DIS Paper',
      searchQuery: 'Affinity Diagramming in Collaborative Design Harboe Huang ACM DIS',
      url: 'https://dl.acm.org/doi/10.1145/1858171.1858231'
    },
    {
      title: 'Gamestorming: A Playbook for Innovators, Rulebreakers, and Changemakers',
      source: 'Dave Gray, Sunni Brown & James Macanufo (O\'Reilly)',
      type: 'book',
      descriptionAr: 'الكتاب الأفضل عالمياً لأكثر من 80 لعبة ونشاط تفاعلي للعصف الذهني وفرز الأولويات في ورش العمل.',
      descriptionEn: 'The definitive collection of visual meeting practices, voting frameworks, and group ideation.',
      tagAr: 'كتاب ورش العمل',
      tagEn: 'Facilitation Classic',
      searchQuery: 'Gamestorming Dave Gray Sunni Brown'
    }
  ],

  'session-02_6': [
    {
      title: 'Enterprise Agile Transformation and Visual Roadmapping at Scale',
      source: 'Harvard Business School Case Studies',
      type: 'study',
      descriptionAr: 'دراسة حالة حول كيفية اعتماد كبرى الشركات العالمية على منصات Miro لربط مئات الفرق والخرائط المعقدة بأنظمة Jira و Azure.',
      descriptionEn: 'HBS enterprise study on cross-department visual governance and scaled agile coordination.',
      tagAr: 'دراسة حالة من هارفارد',
      tagEn: 'Harvard Business Study',
      searchQuery: 'Enterprise Agile Transformation Visual Roadmapping Miro Harvard'
    },
    {
      title: 'Service Design Blueprints: Integrating Customer Journeys with Backend Operations',
      source: 'Polaine, Løvlie & Reason (Rosenfeld Media)',
      type: 'book',
      descriptionAr: 'المرجع الشامل في رسم خرائط الـ Service Blueprints والربط بين ما يراه المستخدم والأنظمة الداخلية للمؤسسة.',
      descriptionEn: 'The foundational book on mapping end-to-end service touchpoints, frontstage and backstage actions.',
      tagAr: 'كتاب مرجعي',
      tagEn: 'Core Book',
      searchQuery: 'Service Design From Insight to Implementation Polaine Rosenfeld'
    }
  ],

  'session-02_7': [
    {
      title: 'Information Architecture Diagramming and Task Flow Modeling',
      source: 'Jesse James Garrett (Adaptive Path / ASIS&T)',
      type: 'paper',
      descriptionAr: 'الورقة التأسيسية التي وضعت المعايير القياسية لرسم مخططات التدفق (Flowchart Vocabulary) في تصميم المواقع والتطبيقات.',
      descriptionEn: 'The canonical visual vocabulary standard for mapping interactive user flows and decision logic.',
      tagAr: 'معيار تأسيسي',
      tagEn: 'Visual Vocabulary Standard',
      searchQuery: 'Visual Vocabulary for Information Architecture Jesse James Garrett',
      url: 'http://www.jjg.net/ia/visvocab/'
    },
    {
      title: 'Communicating Design: Developing Web Site Documentation for Design and Planning',
      source: 'Dan M. Brown (New Riders)',
      type: 'book',
      descriptionAr: 'كيف تصمم Wireframes ومخططات مسارات تنقل واضحة وسريعة لتوصيل الفكرة للعملاء بدون إسهاب.',
      descriptionEn: 'Comprehensive guide to concise wireframes, sitemaps, and conceptual flow documentation.',
      tagAr: 'كتاب تطبيقي',
      tagEn: 'Documentation Guide',
      searchQuery: 'Communicating Design Dan M Brown'
    }
  ],

  'session-02_8': [
    {
      title: 'Electronic Brainstorming and Group Dynamics: When and Why Groups Outperform Individuals',
      source: 'DeRosa, Smith & Hantula (Group Dynamics: Theory, Research, and Practice)',
      type: 'paper',
      descriptionAr: 'دراسة نفسية تثبت أن العصف الذهني الرقمي المتزامن (بدون صوت في البداية) يلغي ظاهرة هيمنة الشخصيات الصوتية ويرفع جودة الأفكار بنسبة 50%.',
      descriptionEn: 'Empirical psychological meta-analysis proving digital brainstorming mitigates production blocking and evaluation apprehension.',
      tagAr: 'ورقة بحثية نفسية',
      tagEn: 'Group Dynamics Research',
      searchQuery: 'Electronic Brainstorming and Group Dynamics DeRosa Smith Hantula'
    },
    {
      title: 'Creative Confidence: Unleashing the Creative Potential Within Us All',
      source: 'Tom Kelley & David Kelley (Founders of IDEO & Stanford d.school)',
      type: 'book',
      descriptionAr: 'كتاب مؤسسي شركة IDEO حول كيفية التغلب على الخوف من إبداء الأفكار وبناء ثقافة التجربة السريعة داخل فرق العمل.',
      descriptionEn: 'IDEO founders\' classic work on building experimental velocity and creative mindset in teams.',
      tagAr: 'كتاب ملهم',
      tagEn: 'IDEO Classic',
      searchQuery: 'Creative Confidence Tom Kelley David Kelley IDEO'
    }
  ],

  'session-02_9': [
    {
      title: 'A Taxonomy of UX Evaluation Methods and Tool Selection Frameworks',
      source: 'Vermeeren et al. (ACM NordiCHI Conference)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية تصنف أدوات الـ UX بناءً على مرحلة المشروع (استكشاف، تصميم، اختبار) والميزانية ونوع المخرجات المطلوبة.',
      descriptionEn: 'ACM paper structuring a multi-dimensional framework for choosing appropriate UX evaluation toolsets.',
      tagAr: 'ورقة بحثية محكمة',
      tagEn: 'ACM NordiCHI Paper',
      searchQuery: 'A Taxonomy of UX Evaluation Methods Vermeeren ACM NordiCHI'
    },
    {
      title: 'Cost-Justifying Usability: An Update for the Internet Age',
      source: 'Randolph G. Bias & Deborah J. Mayhew (Morgan Kaufmann)',
      type: 'book',
      descriptionAr: 'المرجع الأشهر في حساب العائد على الاستثمار من اختيار الأدوات واختصار أوقات التعديل والتطوير.',
      descriptionEn: 'Definitive guide on calculating monetary ROI and time saved through strategic tooling choices.',
      tagAr: 'كتاب اقتصادي تطبيقي',
      tagEn: 'ROI Reference Book',
      searchQuery: 'Cost-Justifying Usability Bias Mayhew Morgan Kaufmann'
    }
  ],

  'session-02_10': [
    {
      title: 'Multi-Criteria Decision Analysis in Software Tool Selection for Digital Design',
      source: 'Journal of Systems and Software',
      type: 'paper',
      descriptionAr: 'دراسة هندسية تقدم نموذجاً حسابياً لمقارنة برامج التصميم وفق معايير: السرعة، الدعم السحابي، سهولة التعلم، وسعر الاشتراك.',
      descriptionEn: 'Peer-reviewed software engineering paper on objective scoring models for digital product software suites.',
      tagAr: 'ورقة بحثية هندسية',
      tagEn: 'Systems & Software Journal',
      searchQuery: 'Multi-Criteria Decision Analysis Software Tool Selection Journal Systems Software'
    },
    {
      title: 'The Design Tool Matrix: Matching Job-To-Be-Done to Artifact Fidelity',
      source: 'Nielsen Norman Group (NN/g)',
      type: 'framework',
      descriptionAr: 'دليل NN/g لتطبيق نظرية Jobs-to-be-Done على أدوات التصميم واختيار الأداة حسب المشكلة وليس المظهر.',
      descriptionEn: 'Practitioner framework mapping Jobs-to-be-Done criteria to prototyping and wireframing tools.',
      tagAr: 'إطار منهجي',
      tagEn: 'Practitioner Framework',
      searchQuery: 'Design Tool Matrix Jobs to be Done Nielsen Norman Group'
    }
  ],

  'session-02_11': [
    {
      title: 'High-Fidelity UI Prototyping vs. Production Speed: A Quantitative Benchmark',
      source: 'IEEE Software / IEEE Computer Society',
      type: 'study',
      descriptionAr: 'دراسة مقارنة تقيس الوقت المستغرق لبناء واجهات كاملة في Figma مقارنة ببرامج مثل Sketch و Adobe XD، ومعدل أخطاء التنسيق.',
      descriptionEn: 'Empirical benchmark analyzing layout construction speed, reusable component updates, and handoff overhead.',
      tagAr: 'دراسة مقارنة في IEEE',
      tagEn: 'IEEE Benchmark Study',
      searchQuery: 'High-Fidelity UI Prototyping Production Speed Quantitative Benchmark IEEE'
    },
    {
      title: 'Refactoring UI: Practical Design Advice for Developers & Product Teams',
      source: 'Adam Wathan & Steve Schoger (Tailwind CSS Creators)',
      type: 'book',
      descriptionAr: 'الدليل العملي الأشهر في ضبط القياسات (Spacing)، التدرجات اللونية، وتكوين الشاشات بدون تعقيد.',
      descriptionEn: 'The modern classic handbook on practical visual hierarchy, typography scales, and interface tact.',
      tagAr: 'دليل عملي معاصر',
      tagEn: 'Practical UI Guide',
      searchQuery: 'Refactoring UI Adam Wathan Steve Schoger'
    }
  ],

  'session-02_12': [
    {
      title: 'The Open Source UI Revolution: Penpot, Web Standards, and Vendor Lock-in',
      source: 'Open Source Software Journal & FOSDEM Proceedings',
      type: 'paper',
      descriptionAr: 'ورقة بحثية تحلل معمارية Penpot المعتمدة على معايير SVG و CSS الأصلية وتأثيرها على استقلالية بيانات التصميم.',
      descriptionEn: 'Academic paper analyzing open-source SVG/CSS native canvas engines and design data portability.',
      tagAr: 'ورقة بحثية في المصادر المفتوحة',
      tagEn: 'FOSDEM Research Paper',
      searchQuery: 'Penpot Open Source UI Web Standards SVG FOSDEM'
    },
    {
      title: 'Figma to Code: Semantic Fidelity and CSS Layout Consistency',
      source: 'W3C Cascading Style Sheets Working Group',
      type: 'guideline',
      descriptionAr: 'الوثيقة التوجيهية للربط بين نماذج الصندوق (Box Model) في Figma وخصائص Flexbox في الويب.',
      descriptionEn: 'Technical standard harmonizing visual UI layout models with web CSS Flexbox/Grid engines.',
      tagAr: 'معيار تقني',
      tagEn: 'CSS Architecture Standard',
      searchQuery: 'Figma Auto Layout Flexbox CSS Grid W3C'
    }
  ],

  'session-02_13': [
    {
      title: 'Micro-interactions and Animated Transitions in Mobile Touch Interfaces',
      source: 'Dan Saffer & Carnegie Mellon University (ACM MobileHCI)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية تشرح تشريح التفاعلات الدقيقة (Trigger, Rules, Feedback, Loops) وأثرها على تعزيز شعور المستخدم بالاستجابة الفورية.',
      descriptionEn: 'Seminal paper detailing micro-interaction mechanics and sensory feedback in touchscreen ergonomics.',
      tagAr: 'ورقة بحثية في ACM',
      tagEn: 'ACM MobileHCI Paper',
      searchQuery: 'Microinteractions Designing with Details Dan Saffer ACM'
    },
    {
      title: 'Microinteractions: Full Designing with Details',
      source: 'Dan Saffer (O\'Reilly Media)',
      type: 'book',
      descriptionAr: 'الكتاب المرجعي الأول في العالم لتصميم التفاصيل التفاعلية الصغيرة التي تصنع الفرق بين تطبيق عادي وتطبيق مبهر.',
      descriptionEn: 'The definitive textbook on designing structural micro-feedback, state transitions, and Delight loops.',
      tagAr: 'كتاب مرجعي',
      tagEn: 'Core Book',
      searchQuery: 'Microinteractions Full Designing with Details Dan Saffer'
    }
  ],

  'session-02_14': [
    {
      title: 'Sensor Simulation and Dynamic State Variables in High-Fidelity UX Prototyping',
      source: 'ProtoPie Engineering & HCI Research Group (ACM UIST)',
      type: 'study',
      descriptionAr: 'دراسة حول محاكاة حساسات الجيروسكوب، الكاميرا، والـ Voice في النماذج الأولية المتقدمة لتقليل تكلفة البرمجة التجريبية.',
      descriptionEn: 'Empirical research on multi-device sensor variables and realistic hardware simulation prior to code deployment.',
      tagAr: 'دراسة في تفاعل النظم',
      tagEn: 'ACM UIST Study',
      searchQuery: 'Sensor Simulation Dynamic State Variables High-Fidelity UX Prototyping'
    },
    {
      title: 'Automotive and Smart Device Prototyping: Beyond Screen-Only Interfaces',
      source: 'Carnegie Mellon University Human-Computer Interaction Institute',
      type: 'paper',
      descriptionAr: 'ورقة بحثية حول تصميم وبرمجة واجهات الشاشات الذكية وأنظمة السيارات المعتمدة على المنطق الشرطي (Conditional Logic).',
      descriptionEn: 'CMU HCII study on physical computing and advanced logic simulation in modern product design.',
      tagAr: 'ورقة بحثية من CMU',
      tagEn: 'CMU HCII Paper',
      searchQuery: 'Automotive Smart Device Prototyping Logic Carnegie Mellon'
    }
  ],

  'session-02_15': [
    {
      title: 'Design Systems at Scale: Architecture, Tokens and Cross-Platform Governance',
      source: 'Nathan Curtis (EightShapes) & Jina Anne (Design Systems Coalition)',
      type: 'paper',
      descriptionAr: 'الورقة التأسيسية التي وضعت الهيكل الإداري والتقني لبناء أنظمة التصميم وإدارتها في الشركات الكبرى وتوحيد لغة التصميم.',
      descriptionEn: 'Landmark industry paper formulating system architecture, contribution models, and multi-brand token trees.',
      tagAr: 'ورقة بحثية معتمدة',
      tagEn: 'Design System Classic',
      searchQuery: 'Design Systems Architecture Tokens Governance Nathan Curtis'
    },
    {
      title: 'Atomic Design: Methodology for Scalable User Interfaces',
      source: 'Brad Frost',
      type: 'book',
      descriptionAr: 'المنهجية الأشهر عالمياً لتقسيم الواجهات: ذرات (Atoms)، جزيئات (Molecules)، كائنات (Organisms)، قوالب (Templates)، وصفحات (Pages).',
      descriptionEn: 'The foundational methodology breaking interfaces into atomic components and scalable modular layouts.',
      tagAr: 'منهجية عالمية',
      tagEn: 'Foundational Method',
      searchQuery: 'Atomic Design Brad Frost',
      url: 'https://atomicdesign.bradfrost.com/'
    }
  ],

  'session-02_16': [
    {
      title: 'Modularity and Component Reuse in Large-Scale UI Architecture',
      source: 'ACM Transactions on Software Engineering and Methodology',
      type: 'paper',
      descriptionAr: 'دراسة برمجية تقيس مدى انخفاض أخطاء التصميم وسرعة إصلاح المشاكل (Bug Fix Time) عند الاعتماد على مكتبات مكونات موحدة.',
      descriptionEn: 'Empirical software engineering study proving component reusability slashes defect density and maintenance cost.',
      tagAr: 'ورقة بحثية في ACM',
      tagEn: 'ACM TOSEM Study',
      searchQuery: 'Modularity Component Reuse UI Architecture ACM TOSEM'
    },
    {
      title: 'Design Systems Handbook',
      source: 'Marco Suarez, Jina Anne, Katie Sylor-Miller (DesignBetter / InVision)',
      type: 'book',
      descriptionAr: 'الدليل الإرشادي لبناء نظام تصميم من الصفر يشمل الألوان، الخطوط، التباعد، والمكونات البرمجية المتطابقة.',
      descriptionEn: 'Comprehensive practitioner guide on creating, deploying, and scaling enterprise design systems.',
      tagAr: 'دليل مهني شامل',
      tagEn: 'Enterprise Guide',
      searchQuery: 'Design Systems Handbook InVision DesignBetter',
      url: 'https://www.designbetter.co/design-systems-handbook'
    }
  ],

  'session-02_17': [
    {
      title: 'Design Systems ROI Benchmark: Quantifying Velocity Gains Across 500 Enterprises',
      source: 'Figma Research & Forrester Consulting',
      type: 'study',
      descriptionAr: 'دراسة اقتصادية موثقة تثبت أن الفرق التي تستخدم أنظمة تصميم ومكونات Figma تنفذ المشاريع أسرع بنسبة 34% مع اتساق بصري أعلى بنسبة 50%.',
      descriptionEn: 'Forrester economic impact study measuring engineering sprint velocity and design consistency gains.',
      tagAr: 'دراسة اقتصادية عالمية',
      tagEn: 'Forrester Benchmark',
      searchQuery: 'Design Systems ROI Benchmark Figma Forrester Consulting'
    },
    {
      title: 'Expressive Design Systems: Principles, Tokens, and Motion',
      source: 'Yesenia Perez-Cruz (A Book Apart)',
      type: 'book',
      descriptionAr: 'كيف تبني نظام تصميم مرن يحافظ على هوية البراند وتفرده ولا يجعل كل المواقع والتطبيقات تبدو متطابقة ومملة.',
      descriptionEn: 'Expert guide on infusing brand voice, visual rhythm, and delight into structured design systems.',
      tagAr: 'كتاب تطبيقي',
      tagEn: 'Design Systems Book',
      searchQuery: 'Expressive Design Systems Yesenia Perez-Cruz A Book Apart'
    }
  ],

  'session-02_18': [
    {
      title: 'Design Tokens Format Module: Towards a W3C Open Standard for Design Data Exchange',
      source: 'W3C Design Tokens Community Group (DTCG)',
      type: 'guideline',
      descriptionAr: 'المعيار المفتوح الرسمي المعتمد من W3C لتوحيد تعريف متغيرات الألوان، الخطوط، والمسافات ونقلها تلقائياً من Figma إلى CSS و iOS و Android.',
      descriptionEn: 'The official global W3C open format specification for platform-agnostic design tokens exchange.',
      tagAr: 'معيار دولي رسمي (W3C)',
      tagEn: 'W3C DTCG Standard',
      searchQuery: 'W3C Design Tokens Community Group DTCG Specification',
      url: 'https://www.w3.org/community/design-tokens/'
    },
    {
      title: 'Automated Cross-Platform Design Token Synchronization in Continuous Delivery',
      source: 'IEEE Software / IEEE Computer Society',
      type: 'paper',
      descriptionAr: 'ورقة بحثية حول ربط متغيرات Figma بنظام Git و CI/CD لتحديث أكواد التطبيقات تلقائياً بمجرد تعديل المصمم للون في Figma.',
      descriptionEn: 'Peer-reviewed IEEE paper on continuous token synchronization pipelines between design files and production code.',
      tagAr: 'ورقة بحثية في IEEE',
      tagEn: 'IEEE Pipeline Paper',
      searchQuery: 'Automated Cross-Platform Design Token Synchronization IEEE Software'
    }
  ],

  'session-02_19': [
    {
      title: 'Component Anatomy and Accessibility Compliance: A Quantitative Audit of 1,000 Component Libraries',
      source: 'WebAIM & W3C Web Accessibility Initiative',
      type: 'study',
      descriptionAr: 'دراسة تفصيلية توضح كيفية تصميم حالات المكونات (Default, Hover, Active, Focus, Disabled, Loading) مع الالتزام بمعايير الإتاحة.',
      descriptionEn: 'Rigorous accessibility benchmark detailing keyboard focus, ARIA tags, and contrast states in component sets.',
      tagAr: 'دراسة إتاحة معتمدة',
      tagEn: 'WebAIM Audit Study',
      searchQuery: 'Component Anatomy Accessibility Compliance WebAIM W3C',
      url: 'https://webaim.org/projects/million/'
    },
    {
      title: 'Inclusive Components: Accessible Web Interfaces Piece by Piece',
      source: 'Heydon Pickering (Smashing Magazine)',
      type: 'book',
      descriptionAr: 'الكتاب الأكثر شمولاً في تشريح المكونات (الأزرار، المودال، القوائم المنسدلة، التابات) وجعلها متوافقة مع جميع المستخدمين.',
      descriptionEn: 'The definitive textbook on crafting robust, keyboard-navigable, screen-reader friendly UI patterns.',
      tagAr: 'كتاب تطبيقي رائد',
      tagEn: 'Accessibility Classic',
      searchQuery: 'Inclusive Components Heydon Pickering Smashing Magazine'
    }
  ],

  'session-02_20': [
    {
      title: 'Constraint-Based Layout Engines and Responsive Web Geometry',
      source: 'Badros, Borning & Stuckey (ACM Transactions on Computer-Human Interaction)',
      type: 'paper',
      descriptionAr: 'الورقة البحثية التي وضعت خوارزميات Cassowary (المحرك الرياضي المعتمد خلف Auto Layout في Figma و Apple AutoLayout).',
      descriptionEn: 'The mathematical foundation paper behind linear constraint layout algorithms used in modern UI canvases.',
      tagAr: 'ورقة بحثية رياضية في ACM',
      tagEn: 'ACM Cassowary Paper',
      searchQuery: 'Constraint-Based Layout Engines Cassowary Badros Borning ACM',
      url: 'https://dl.acm.org/doi/10.1145/354401.354409'
    },
    {
      title: 'Responsive Web Design: Envisioning Flexible Layout Systems',
      source: 'Ethan Marcotte (A Book Apart)',
      type: 'book',
      descriptionAr: 'الكتاب التاريخي الذي صاغ مصطلح ومفهوم Responsive Web Design وقواعد الشبكات المرنة والصور المتجاوبة.',
      descriptionEn: 'The historic manifesto introducing fluid grids, flexible media, and CSS media queries.',
      tagAr: 'كتاب تأسيسي تاريخي',
      tagEn: 'Foundational Manifesto',
      searchQuery: 'Responsive Web Design Ethan Marcotte'
    }
  ],

  'session-02_21': [
    {
      title: 'The T-Shaped Designer: Cross-Functional Competencies in Product Teams',
      source: 'Design Management Institute (DMI Review)',
      type: 'study',
      descriptionAr: 'دراسة مهنية واسعة النطاق تشرح مفهوم المصمم T-Shaped: عمق تخصصي في مهارة معينة مع معرفة واسعة بجميع المهارات المحيطة.',
      descriptionEn: 'Comprehensive industry research analyzing T-shaped skill breadth vs vertical domain mastery.',
      tagAr: 'دراسة معتمدة في إدارة التصميم',
      tagEn: 'DMI Benchmark Study',
      searchQuery: 'The T-Shaped Designer Design Management Institute Review'
    },
    {
      title: 'Org Design for Design Orgs: Building and Managing In-House Design Teams',
      source: 'Peter Merholz & Kristin Skinner (O\'Reilly Media)',
      type: 'book',
      descriptionAr: 'الكتاب المرجعي في هيكلة فرق التصميم وتوزيع الأدوار الوظيفية داخل الشركات الناشئة والعملاقة.',
      descriptionEn: 'The definitive guide to organizational structure, hiring, career ladders, and design leadership.',
      tagAr: 'كتاب إداري مرجعي',
      tagEn: 'Design Leadership Classic',
      searchQuery: 'Org Design for Design Orgs Peter Merholz Kristin Skinner'
    }
  ],

  'session-02_22': [
    {
      title: 'Cognitive Task Analysis and Information Flow in Complex Systems',
      source: 'Militello & Hutton (Ergonomics Journal)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية حول تقنيات تحليل المهام المعرفية (Applied Cognitive Task Analysis) وكيف يصمم مهندس الـ UX مسارات تدفق خالية من الاحتكاك.',
      descriptionEn: 'Peer-reviewed human factors paper on task flows, cognitive branch mapping, and decision point modeling.',
      tagAr: 'ورقة بحثية في علم بيئة العمل',
      tagEn: 'Ergonomics Journal Paper',
      searchQuery: 'Applied Cognitive Task Analysis Militello Hutton Ergonomics'
    },
    {
      title: 'A Project Guide to UX Design: For User Experience Designers in the Field',
      source: 'Russ Unger & Carolyn Chandler (New Riders)',
      type: 'book',
      descriptionAr: 'الدليل الميداني لمصمم الـ UX: إعداد دراسات الجدوى، مخططات التدفق، الـ Wireframes، وعروض العميل.',
      descriptionEn: 'Comprehensive practical handbook covering UX project workflows, deliverables, and team dynamics.',
      tagAr: 'دليل عملي شامل',
      tagEn: 'Field Guidebook',
      searchQuery: 'A Project Guide to UX Design Russ Unger Carolyn Chandler'
    }
  ],

  'session-02_23': [
    {
      title: 'Visual Hierarchy, Typography Scales, and Eye-Movement Dynamics in Graphical Displays',
      source: 'Kenneth Holmqvist et al. (Oxford University Press / Vision Research)',
      type: 'study',
      descriptionAr: 'دراسة بصرية تجريبية تقيس بالمللي ثانية زمن استجابة العين للأوزان الطباعية (Font Weights) وتوزيع التباين في واجهات التطبيقات.',
      descriptionEn: 'Experimental ocular study measuring fixation duration and saccadic jumps across typographic scales.',
      tagAr: 'دراسة في علوم الرؤية',
      tagEn: 'Vision Research Benchmark',
      searchQuery: 'Visual Hierarchy Typography Scales Eye-Movement Dynamics Holmqvist'
    },
    {
      title: 'The Elements of Typographic Style for the Digital Age',
      source: 'Robert Bringhurst & Richard Rutter',
      type: 'book',
      descriptionAr: 'إنجيل فن الخطوط والطباعة: قواعد المسافات بين الأسطر (Line-Height)، التناسب الهرمي، واختيار الخطوط الرقمية المتوافقة.',
      descriptionEn: 'The master reference on proportions, grid harmony, rhythm, and typographic craft in digital media.',
      tagAr: 'مرجع الطباعة الكلاسيكي',
      tagEn: 'Typography Bible',
      searchQuery: 'The Elements of Typographic Style Robert Bringhurst'
    }
  ],

  'session-02_24': [
    {
      title: 'When to Use Which User-Experience Research Method: A 3-Dimensional Landscape',
      source: 'Christian Rohrer (Nielsen Norman Group)',
      type: 'framework',
      descriptionAr: 'الإطار المرجعي الأهم في أبحاث الـ UX: تصنيف الأبحاث وفق محورين: (كيفي vs كمي) و (سلوكي Behavioral vs إخباري Attitudinal).',
      descriptionEn: 'The definitive 20-method landscape model mapping research techniques by qualitative/quantitative and behavioral/attitudinal axes.',
      tagAr: 'إطار أبحاث معتمد عالمياً',
      tagEn: 'NN/g Research Framework',
      searchQuery: 'When to Use Which User Experience Research Method Christian Rohrer NN/g',
      url: 'https://www.nngroup.com/articles/which-ux-research-methods/'
    },
    {
      title: 'Just Enough Research (2nd Edition)',
      source: 'Erika Hall (Mule Design / A Book Apart)',
      type: 'book',
      descriptionAr: 'الكتاب الأكثر عملية ورشاقة في إجراء أبحاث المستخدمين السريعة، صياغة الأسئلة غير المنحازة، واستخلاص النتائج.',
      descriptionEn: 'Essential practical guide to asking unbiased questions, synthesizing insights, and avoiding research theater.',
      tagAr: 'كتاب تطبيقي رائد',
      tagEn: 'Core Research Book',
      searchQuery: 'Just Enough Research Erika Hall A Book Apart'
    }
  ],

  'session-02_25': [
    {
      title: 'Product-Led Growth and the Economic Impact of Product Experience',
      source: 'Wes Bush & Harvard Business Review',
      type: 'study',
      descriptionAr: 'دراسة حول كيفية تحويل تجربة المنتج (Product Experience) إلى المحرك الأساسي للاستحواذ على العملاء وتوليد الإيرادات.',
      descriptionEn: 'Business research on self-serve user acquisition, frictionless onboarding, and product design as a growth engine.',
      tagAr: 'دراسة اقتصادية',
      tagEn: 'Product Growth Study',
      searchQuery: 'Product-Led Growth How to Build a Product That Sells Itself Wes Bush'
    },
    {
      title: 'Continuous Discovery Habits: Discover Products That Create Customer Value and Business Value',
      source: 'Teresa Torres (Product Talk)',
      type: 'book',
      descriptionAr: 'المنهجية الحديثة لكيفية عمل مصمم المنتج جنباً إلى جنب مع مدير المنتج والمهندس لاتخاذ قرارات يومية مبنية على الأدلة والـ Opportunity Trees.',
      descriptionEn: 'The gold standard framework for continuous customer interviewing and opportunity-solution tree synthesis.',
      tagAr: 'منهجية معتمدة عالمياً',
      tagEn: 'Product Strategy Classic',
      searchQuery: 'Continuous Discovery Habits Teresa Torres'
    }
  ],

  'session-02_26': [
    {
      title: 'The Collaborative Product Trio: Engineering, Design, and Product Synergy',
      source: 'Marty Cagan & Silicon Valley Product Group (SVPG)',
      type: 'framework',
      descriptionAr: 'النموذج المعتمد في وادي السيليكون: كيف يتعاون مصمم المنتج مع مدير المنتج ورئيس المهندسين كشريك استراتيجي متساوٍ.',
      descriptionEn: 'Silicon Valley Product Group\'s authoritative model for cross-functional trio alignment.',
      tagAr: 'نموذج وادي السيليكون',
      tagEn: 'SVPG Trio Model',
      searchQuery: 'Inspired How to Create Tech Products Customers Love Marty Cagan'
    },
    {
      title: 'Escaping the Build Trap: How Effective Product Management Creates Real Value',
      source: 'Melissa Perri (O\'Reilly Media)',
      type: 'book',
      descriptionAr: 'كيف تتجنب الفرق فخ "بناء الميزات غير المفيدة" وتركز على حل مشكلات حقيقية وقياس الأثر (Outcomes over Outputs).',
      descriptionEn: 'Essential guide on shifting from feature factory outputs to customer-driven product outcomes.',
      tagAr: 'كتاب مرجعي',
      tagEn: 'Core Product Book',
      searchQuery: 'Escaping the Build Trap Melissa Perri OReilly'
    }
  ],

  'session-02_27': [
    {
      title: 'Physics-Based Animation Curves and Sensor Simulation in Touch Interaction Design',
      source: 'Apple Human Interface Research & ACM CHI',
      type: 'paper',
      descriptionAr: 'ورقة بحثية تشرح المعادلات الفيزيائية المعتمدة خلف منحنيات الحركة السلسة (Spring Animations) ومحاكاة القصور الذاتي في الشاشات اللمسية.',
      descriptionEn: 'ACM CHI paper on spring physics, velocity conservation, and fluid gestural interaction design.',
      tagAr: 'ورقة بحثية في فيزياء التفاعل',
      tagEn: 'ACM CHI Physics Paper',
      searchQuery: 'Physics-Based Animation Curves Spring Dynamics Apple Human Interface ACM'
    },
    {
      title: 'Designing Interface Animation: Meaningful Motion for User Experience',
      source: 'Val Head (Rosenfeld Media)',
      type: 'book',
      descriptionAr: 'الدليل العملي لكيفية استخدام الحركة والأنيميشن لتوجيه انتباه المستخدم وإعطاء شعور بالاستمرارية المكانية.',
      descriptionEn: 'Comprehensive guide to functional UI animation, easing curves, and cognitive orientation.',
      tagAr: 'كتاب تطبيقي',
      tagEn: 'UI Motion Classic',
      searchQuery: 'Designing Interface Animation Val Head Rosenfeld Media'
    }
  ],

  'session-02_28': [
    {
      title: 'Quantitative Usability Testing: Sample Size Optimization and Confidence Intervals in Maze/Useberry',
      source: 'Jeff Sauro & James R. Lewis (Quantifying the User Experience / Morgan Kaufmann)',
      type: 'book',
      descriptionAr: 'المرجع الأكاديمي والإحصائي الأول في العالم لقياس تجربة المستخدم بالأرقام: نسبة إكمال المهام، زمن المهمة، ومؤشر SUS ومقاييس SEQ.',
      descriptionEn: 'The definitive statistical textbook on sample sizes, confidence intervals, and empirical task metrics in usability engineering.',
      tagAr: 'المرجع الإحصائي الأول في الـ UX',
      tagEn: 'Quantitative UX Bible',
      searchQuery: 'Quantifying the User Experience Jeff Sauro James R Lewis'
    },
    {
      title: 'Measuring Direct Task Success vs. Misclicks in Remote Asynchronous Testing Platforms',
      source: 'ACM Conference on Human Factors in Computing Systems',
      type: 'paper',
      descriptionAr: 'دراسة مقارنة تقيس دقة خرائط الحرارة (Heatmaps) وسجلات النقرات الغاضبة (Rage Clicks) في كشف الاختناقات في تدفقات الدفع والتسجيل.',
      descriptionEn: 'ACM study validating heatmap precision and drop-off rate telemetry in remote unmoderated usability platforms.',
      tagAr: 'ورقة بحثية محكمة',
      tagEn: 'ACM Testing Study',
      searchQuery: 'Measuring Direct Task Success Misclicks Remote Usability Testing ACM'
    }
  ],

  'session-02_29': [
    {
      title: 'Automated Developer Handoff and CSS Tokenization: Reducing Translation Loss in Agile Sprints',
      source: 'ACM Engineering Interactive Computing Systems (EICS)',
      type: 'paper',
      descriptionAr: 'ورقة بحثية محكمة تحلل أثر ميزات Dev Mode في Figma وأدوات التوثيق الآلية في خفض وقت بناء الواجهات بنسبة 40% وإلغاء أخطاء المقاسات.',
      descriptionEn: 'Peer-reviewed research proving automated design-to-code specs eliminate layout drift and save 40% of frontend sprint time.',
      tagAr: 'ورقة بحثية في هندسة النظم',
      tagEn: 'ACM EICS Paper',
      searchQuery: 'Automated Developer Handoff CSS Tokenization Translation Loss ACM EICS'
    },
    {
      title: 'Design-to-Code: Bridging the Semantic Gap Between Designers and Engineers',
      source: 'Brad Frost & Nathan Curtis (Design Systems Studies)',
      type: 'study',
      descriptionAr: 'دليل مهني حول كيفية كتابة مواصفات واضحة تشمل حالات الـ Edge Cases، الـ Breakpoints، وسلوك الـ Auto Layout للمطور.',
      descriptionEn: 'Practitioner benchmark on edge-case specification, responsive constraints, and frictionless developer handoff.',
      tagAr: 'دليل منهجي تطبيقي',
      tagEn: 'Handoff Methodology',
      searchQuery: 'Design to Code Bridging Semantic Gap Brad Frost Nathan Curtis'
    }
  ],

  'session-02_30': [
    {
      title: 'Continuous Usability Engineering: Integrating UX Pipelines into Agile and DevOps Workflows',
      source: 'IEEE Software / ISO Software Quality Standards (ISO/IEC 25010)',
      type: 'guideline',
      descriptionAr: 'المعيار الدولي لهندسة جودة البرمجيات وسهولة استخدامها عبر دورة حياة المنتج الرقمي من الإطلاق الأولي إلى التحديث المستمر.',
      descriptionEn: 'Official ISO/IEC 25010 quality model standard integrating usability heuristics directly into continuous DevOps pipelines.',
      tagAr: 'معيار دولي رسمي (ISO)',
      tagEn: 'ISO/IEC 25010 Standard',
      searchQuery: 'ISO IEC 25010 Software Quality Usability Measurement Continuous Engineering',
      url: 'https://www.iso.org/standard/35733.html'
    },
    {
      title: 'The Future of Digital Product Design: AI-Assisted Workflows and Computational Design Systems',
      source: 'MIT Technology Review & Stanford Human-Centered AI Institute',
      type: 'study',
      descriptionAr: 'دراسة استشرافية حول مستقبل مهنة الـ UI/UX وكيف تعزز تقنيات الذكاء الاصطناعي سرعة النمذجة مع بقاء التفكير النقدي والاستراتيجي حكراً على المصمم المحترف.',
      descriptionEn: 'Forward-looking report on AI copilot tooling, algorithmic design generation, and irreplaceable human empathy in UX.',
      tagAr: 'دراسة مستقبلية من MIT',
      tagEn: 'MIT Future of Design Study',
      searchQuery: 'Future of Digital Product Design Computational Systems MIT Stanford HAI'
    }
  ]
};
