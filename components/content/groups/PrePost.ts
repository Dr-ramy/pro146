// PrePost.ts
export type SidebarExtraAction =
  | { type: "openUrl"; url: string; target?: "_self" | "_blank" }
  | { type: "openRoute"; route: string }
  | { type: "openModal"; modalId: string };

export type SidebarExtraItem = {
  id: string;
  text: string;
  icon: "cog" | "quiz" | "chat" | "robot" | "video";
  action: SidebarExtraAction;
};

export type ModalKey = "gemini-1" | "gemini-2" | "gemini-3" | "gemini-4";

export type ModalSpec =
  | { id: string; kind: "gemini"; key: ModalKey }
  | { id: string; kind: "iframe"; title: string; iframeUrl: string };

export type CurriculumMeta = {
  units: Array<{
    id: string;
    title: string;
    lessons: Array<{
      id: string; // لازم يطابق lessonKey في LessonData
      title: string;
    }>;
  }>;
  beforeLearningItems: SidebarExtraItem[];
  afterLearningItems: SidebarExtraItem[];
  modals: ModalSpec[];
};

// =========================
// Group 1
// =========================
const GROUP_1: CurriculumMeta = {
  units: [
    { 
    id: "unit-0",
    title: "تطبيقات الذكاء الاصطناعي",
    lessons: [ { id: "lesson_six", title: " AI SITES " }, ]
    },
    {
    id: "unit-1",
    title: "مهارات التخطيط للدرس",
    lessons: [
      { id: "lesson_one"    , title: " الأهداف التربوية " },
      { id: "lesson_two"    , title: " مهارة التخطيط" },
      { id: "lesson_three"  , title: "تحليل المحتوى" },
      { id: "lesson_four"    , title: "الوسائل التعليمية" },
      { id: "lesson_five"  , title: "طرق التدريس" },
    ]
  },
  {
    id: "unit-2",
    title: "مهارات تنفيذ الدرس",
    lessons: [
      { id: "lesson_1", title: "عرض الدرس" },
      { id: "lesson_2", title: "التهيئة والتمهيد للدرس" },
      { id: "lesson_3", title: "التعزيز" },
      { id: "lesson_4", title: "استثارة الدافعية للتعلم" },
      { id: "lesson_5", title: "التنوع في طرق التدريس" },
      { id: "lesson_6", title: "استخدام الوسائل التعليمية" },
      { id: "lesson_7", title: "طرح الأسئلة الصفية" },
      { id: "lesson_8", title: "إدارة الصف" },
      { id: "lesson_9", title: "غلق الدرس" }
    ]
  },
  {
    id: "unit-3",
    title: "التقويم",
    lessons: [
      { id: "lesson_1", title: "التقويم" },
      { id: "lesson_2", title: "التقويم الإلكتروني" }
    ]
  },
  {
    id: "unit-4",
    title: "إعداد الدروس تكنولوجيًا",
    lessons: [
      { id: "lesson_1", title: "إعداد الدروس تكنولوجيًا" }
    ]
  }

  ],

  beforeLearningItems: [
    {
      id: "pre-quiz",
      text: "الاختبار القبلي",
      icon: "quiz",
      action: {
        type: "openUrl",
        url: " https://forms.gle/CJvVAAjdntgsBVXR9 ",
        target: "_blank",
      },
      
    },
    {
      id: "chat-room",
      text: "غرفة المحادثة",
      icon: "chat",
      action: { type: "openRoute", route: "/chat" },
    },
    
    {
      id: "ai-assistant",
      text: " تطبيق الذكاء الصناعي ",
      icon: "robot",
      action: { type: "openModal", modalId: "1modal" },
    },
/*
        {
      id: "mindmap",
      text: "Google Earth",
      icon: "cog",
      action: {
        type: "openUrl",
        url: " https://earth.google.com/web/ ",
        target: "_blank",
      },
    },
   

    {
      id: "ai-assistant",
      text: "1الاستقصاء بالذكاء الاصطناعي",
      icon: "robot",
      action: { type: "openModal", modalId: "4modal" },
    },
    {
      id: "ai-assistant2",
      text: "2الاستقصاء بالذكاء الاصطناعي",
      icon: "robot",
      action: { type: "openRoute", route: "/coco" },
    },
*/
  ],

  afterLearningItems: [
    {
      id: "post-quiz",
      text: "الاختبار البعدي",
      icon: "quiz",
      action: {
        type: "openUrl",
        url: " https://forms.gle/KBEfxHD7F8x5Kqdh8 ",
        target: "_blank",
      },
    },
  ],

  modals: [
    { id: "1modal", kind: "gemini", key: "gemini-1" },
    { id: "2modal", kind: "gemini", key: "gemini-2" },
    { id: "3modal", kind: "gemini", key: "gemini-3" },
    { id: "4modal", kind: "gemini", key: "gemini-4" },
    {
      id: "yt-lesson1",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        " https://www.youtube.com/embed/Uf1DLCeOIbw?si=CWHzVmsPlMMqVxBy ",
    },
        {
      id: "yt-lesson2",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        " ",
    },
        {
      id: "yt-lesson3",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "  ",
    },
        {
      id: "yt-lesson4",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        " ",
    },
        {
      id: "yt-lesson5",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        " ",
    },
      {
      id: "book1",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "  ",
    },
          {
      id: "book2",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "  ",
    },
          {
      id: "book3",
      kind: "iframe",
      title: "فيديو تعليمي",
      iframeUrl:
        "  ",
    },
          {
      id: "book4",
      kind: "iframe",
      title: "محتوى تعليمي",
      iframeUrl:
        "  ",
    },
          {
      id: "book5",
      kind: "iframe",
      title: "محتوى تعليمي",
      iframeUrl:
        "  ",
    },
              {
      id: "book6",
      kind: "iframe",
      title: "محتوى تعليمي",
      iframeUrl:
        "  ",
    },
          {
      id: "book7",
      kind: "iframe",
      title: "محتوى تعليمي",
      iframeUrl:
        "   ",
    },
  ],
};
//************************************************************************/

// ✅ Placeholders آمنة (نسخ مستقلة)
const GROUP_2: CurriculumMeta = structuredClone(GROUP_1);
const GROUP_3: CurriculumMeta = structuredClone(GROUP_1);
const GROUP_4: CurriculumMeta = structuredClone(GROUP_1);

export function getCurriculumMeta(
  groupId: string | number | undefined
): CurriculumMeta {
  const gid = String(groupId ?? "").trim();
  switch (gid) {
    case "2":
      return GROUP_2;
    case "3":
      return GROUP_3;
    case "4":
      return GROUP_4;
    default:
      return GROUP_1;
  }
}
