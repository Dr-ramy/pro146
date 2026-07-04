export type HomeVariant = "classic" | "news";

/**
 * Content blocks supported by ContentSection renderer
 */ 
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "divider" }
  | { type: "link"; label: string; href: string; external?: boolean }
  | {
      type: "callout";
      variant?: "info" | "warning" | "success";
      title?: string;
      text: string;
    };

export type ContentCard =
  | {
      id: "authors" | "intro" | "goals" | "content";
      title: string;
      collapsible: boolean;
      /**
       * New (recommended): structured blocks
       */
      blocks: ContentBlock[];
      /**
       * Legacy (optional): keep for backward-compatibility while migrating
       */
      lines?: string[];
    }
  | {
      id: string; // allow future cards without changing types
      title: string;
      collapsible: boolean;
      blocks: ContentBlock[];
      lines?: string[];
    };

export const siteContent = {
  home: {
    variant: "classic" as HomeVariant,

    layout:
      {
        backgroundClass: "bg-background",
        // أمثلة:
        // "bg-muted"
        // "bg-slate-50"
        // "bg-gradient-to-b from-background to-muted"
        // "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))]"
        // "bg-zinc-900 text-zinc-100"
      },

    social:
      {
        facebook: "https://www.facebook.com/yourpage",
        whatsapp: "https://wa.me/1234567890",
      },

    labels:
      {
        login: "تسجيل الدخول",
        admin: "لوحة المشرف",
        profile: "الملف الشخصي",
        logout: "خروج",
        more: "المزيد",
        less: "إخفاء",
      },

    // أقسام الصفحة وروابطها
    sections:
      [
        { id: "authors", label: "المؤلفون" },
        { id: "intro", label: "مقدمة" },
        { id: "goals", label: "الأهداف" },
        { id: "content", label: "المحتوى" },
      ],

    title:
      "فاعليه برنامج تدريبي قائم على تطبيقات الذكاء الاصطناعي لتنمية مهارات التعليم الرقمي وفاعلية الذات الأكاديمية لدى معلمي التاريخ بدولة العراق  ",

    contentCards: [
      {
        id: "authors",
        title: "المؤلفون",
        collapsible: false,

        // ✅ Structured blocks
        blocks: [
          { type: "paragraph", text: "اعداد/ هدى نجيب عباس احمد الشامي " },
          { type: "divider" },

          { type: "subheading", text: "الإشراف" },
          { type: "paragraph", text: "أ.د/ أماني على السيد رجب  " },
          { type: "paragraph", text: " أستاذ المناهج وطرق تدريس الدراسات الاجتماعية ورئيس القسم" },
          { type: "paragraph", text: "كلية التربية – جامعة المنصورة" },

          { type: "divider" },

          { type: "paragraph", text: "د/ محمد السيد عبد الرازق" },
          { type: "paragraph", text: "مدرس المناهج وطرق تدريس التاريخ (المتفرغ)" },
          { type: "paragraph", text: "كلية التربية – جامعة المنصورة" },    
  
        ],
      },

{
  id: "intro",
  title: "مقدمة",
  collapsible: true,
  blocks: [
    { 
      type: "paragraph", 
      text: "يُعدّ الذكاء الاصطناعي من أبرز التقنيات الحديثة التي أحدثت تحولًا كبيرًا في مجال التعليم الرقمي، لما يوفره من أدوات وتطبيقات تسهم في تطوير العملية التعليمية وتحسين مخرجاتها. ومع التوسع في استخدام التكنولوجيا داخل البيئات التعليمية، ظهرت الحاجة إلى إعداد برامج تدريبية تساعد المعلمين والمتعلمين على توظيف تطبيقات الذكاء الاصطناعي بكفاءة. وتكمن أهمية هذه البرامج في تنمية مهارات التعليم الرقمي بما يتوافق مع متطلبات العصر الرقمي والتحول التكنولوجي المتسارع. كما تسهم في تعزيز فاعلية الذات الأكاديمية لدى المتعلمين، من خلال زيادة الثقة بقدراتهم على الإنجاز والتفاعل مع المواقف التعليمية المختلفة. ويؤدي التدريب القائم على تطبيقات الذكاء الاصطناعي دورًا مهمًا في تحسين الأداء الأكاديمي وتنمية مهارات التفكير والإبداع وحل المشكلات. ومن هنا تتضح أهمية دراسة فاعلية برنامج تدريبي قائم على تطبيقات الذكاء الاصطناعي في تنمية مهارات التعليم الرقمي وفاعلية الذات الأكاديمية لدى المتعلمين." 
    }
  ]
},
{
  id: "goals",
  title: "الأهداف",
  collapsible: true,
  blocks: [
    { type: "subheading", text: "الهدف العام" },
    {
      type: "bullets",
      items: [
        "يهدف البرنامج إلى تنمية مهارات التعليم الرقمي وفاعلية الذات الأكاديمية لدى معلمي التاريخ بدولة العراق من خلال برنامج تدريبي قائم على تطبيقات الذكاء الاصطناعي."
      ],
    },
    { type: "divider" },
    { type: "subheading", text: "الأهداف الخاصة" },
    {
      type: "numbered",
      items: [
        "تنمية مهارات استخدام تطبيقات الذكاء الاصطناعي في تدريس مادة التاريخ.",
        "تنمية مهارات تصميم المحتوى الرقمي التفاعلي لمادة التاريخ.",
        "تنمية مهارات توظيف المنصات التعليمية الرقمية في العملية التعليمية.",
        "تنمية مهارات إعداد الدروس الإلكترونية باستخدام أدوات الذكاء الاصطناعي.",
        "تنمية مهارات استخدام الوسائط المتعددة الرقمية في تدريس التاريخ.",
        "تنمية مهارات إدارة الصفوف الافتراضية بكفاءة وفاعلية.",
        "تنمية مهارات إعداد الأنشطة التعليمية الرقمية المناسبة لمادة التاريخ.",
        "تنمية مهارات التقويم الإلكتروني باستخدام تطبيقات الذكاء الاصطناعي.",
        "تنمية مهارات البحث الرقمي والوصول إلى المصادر التاريخية الإلكترونية.",
        "تنمية مهارات التواصل الأكاديمي الرقمي بين المعلمين والطلاب.",
        "تنمية مهارات التفكير الإبداعي وحل المشكلات التعليمية باستخدام الذكاء الاصطناعي.",
        "تنمية مهارات التخطيط للتدريس الرقمي بما يتناسب مع متطلبات العصر التكنولوجي.",
        "تنمية مهارات إنتاج الاختبارات الإلكترونية وتحليل نتائجها.",
        "تعزيز الثقة بالنفس والقدرة على الإنجاز الأكاديمي لدى معلمي التاريخ.",
        "تنمية فاعلية الذات الأكاديمية لدى معلمي التاريخ في توظيف التقنيات الحديثة داخل البيئة التعليمية."
      ],
    },
  ],
}, 
{
  id: "content",
  title: "المحتوى",
  collapsible: false,

  blocks: [
    { type: "subheading", text: "   التخطيط للدرس الإلكتروني	" },
    {
      type: "bullets",
      items: [
        "   التخطيط للدرس الإلكتروني ",

        
      ],
    },
    { type: "divider" },
    { type: "subheading", text: "  توظيف المنصات التعليمية" },
    {
      type: "bullets",
      items: [
        " توظيف المنصات التعليمية",

      ],
    },
    { type: "divider" },
    { type: "subheading", text: "توظيف استراتيجيات التدريس" },
    {
      type: "bullets",
      items: [
        "توظيف استراتيجيات التدريس ",
      ],
    },
    { type: "divider" },
    { type: "subheading", text: "الذكاء الاصطناعي ودوره في تدريس التاريخ" },
    {
      type: "bullets",
      items: [
        "الذكاء الاصطناعي ودوره في تدريس التاريخ",
      ],
    },

        { type: "divider" },
    { type: "subheading", text: "التقويم الإلكتروني" },
    {
      type: "bullets",
      items: [
        "التقويم الإلكتروني",
      ],
    },
       /*
    { type: "divider" },
    { type: "subheading", text: "الوحدة الثالثة: الجغرافيا" },
    {
      type: "bullets",
      items: [
        "الأقاليم الجغرافية",
        "الخريطة الطبوغرافية"
      ],
    },
    */

  ],
},
    ] satisfies ContentCard[],
  },

} as const;
