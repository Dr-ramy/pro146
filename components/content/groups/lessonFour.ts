import type { ButtonItem } from "@/components/content/mainitems/types";

export const lessonFour = {
  items: <ButtonItem[]>
[
    //عشان تضيف فيديو من اليوتيوب خد الرابط من embed
    { type: "button", id: "4vid0", text: "الأهداف", icon: "intro", time: "" },
    { type: "button", id: "4act1", text: " نشاط", icon: "activity" }, 
    { type: "modal", id: "book3", text: " الوسائل التعليمية تمهيد  ", icon: "intro" },
    { type: "button", id: "4act2", text: " نشاط ", icon: "activity" },
    { type: "button", id: "4vid1", text: " الوسائل التعليمية  ", icon: "video" },
    { type: "button", id: "4act3", text: " نشاط ", icon: "activity" },
    { type: "button", id: "4vid2", text: "   أسس اختيار الوسيلة التعليمية   ", icon: "video" },
    { type: "button", id: "4act4", text: " نشاط", icon: "activity" },
    { type: "button", id: "4vid3", text: "   مراحل استخدام الوسيلة   ", icon: "video" },
    { type: "button", id: "4act5", text: "نشاط ", icon: "activity" },
    { type: "button", id: "4vid4", text: "   انواع الوسائل التعليمية   ", icon: "video" },
    { type: "button", id: "4act6", text: " نشاط", icon: "activity" },
    { type: "button", id: "4act7", text: " نشاط ", icon: "activity" },
    { type: "button", id: "4act8", text: " تقويم ", icon: "activity" },
    { type: "button", id: "4act9", text: " النشاط الإثرائي", icon: "activity" }

],

  videoMap: 
  {
    "4vid0": "/videos/vid4/vid0.mp4",
    "4vid1": "/videos/vid4/vid1.mp4",
    "4vid2": "/videos/vid4/vid2.mp4",
    "4vid3": "/videos/vid4/vid3.mp4",
    "4vid4": "/videos/vid4/vid4.mp4",
  },

  formLinks: 
  {
    "4act1":   " https://forms.gle/3LJwJPyHyiSz1S4M9  ",
    "4act2":   " https://forms.gle/yWRi8CNZi719gqJy8  ",
    "4act3":   " https://forms.gle/3YoejiAYJp1XUL5N8   ",
    "4act4":   " https://forms.gle/93bEdmDrGcN3Wfmg9   ",
    "4act5":   " https://forms.gle/NGoi9aitEuWPsK4B6   ",
    "4act6":   " https://forms.gle/fgegfRwWKNzCsub96   ",
    "4act7":   " https://forms.gle/J7hQcZJ4uY1T4Fxm9   ",
    "4act8":   " https://forms.gle/kNkWKHvVBmALqsLPA   ",
    "4act9":   " https://forms.gle/kyXXGgbfqGhFaLwH9   ",
    "4act10":  "    ",
    "4act11":  "    ",
    "4act12":  "   ",
    "4act13":  "   ",
  },
}