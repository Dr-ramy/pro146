import type { ButtonItem } from "@/components/content/mainitems/types";

export const lessonThree = {
  items: <ButtonItem[]>
[
    //عشان تضيف فيديو من اليوتيوب خد الرابط من embed
    { type: "button", id: "3vid0", text: "الأهداف", icon: "intro", time: "" },
    { type: "modal", id: "yt-lesson4", text: "تمهيد", icon: "intro", time: "" },
    { type: "button", id: "3act1", text: " نشاط", icon: "activity" },              
    { type: "button", id: "3vid1", text: " مفهوم تحليل المحتوى  ", icon: "video" },
    { type: "button", id: "3vid2", text: "  جوانب تحليل المحتوى أ ", icon: "video" },
    { type: "button", id: "3vid3", text: " جوانب تحليل المحتوى ب  ", icon: "video" },
    { type: "button", id: "3act2", text: " التقويم ", icon: "activity" },
],

  videoMap: 
  {
    "3vid0": "/videos/vid3/vid0.mp4",
    "3vid1": "/videos/vid3/vid1.mp4",
    "3vid2": "/videos/vid3/vid2.mp4",
    "3vid3": "/videos/vid3/vid3.mp4",
  },

  formLinks: 
  {
    "3act1": " https://forms.gle/d2SRw8Y7uhxrM6mKA     ",
    "3act2": " https://forms.gle/VZaeFzy6cCSEL85G7   ",
    "3act3": "    ",
    "3act4": "    ",
    "3act5": "    ",
    "3act6": "    ",
    "3act7": "    ",
    "3act8": "    ",
    "3act9": "    ",
    "3act10": "     ",
    "3act11": "     ",
    "3act12": "     ",
    "3act13": "     ",

  },
}