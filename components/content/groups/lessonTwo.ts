import type { ButtonItem } from "@/components/content/mainitems/types";

export const lessonTwo = {
  items: <ButtonItem[]>
[
    //عشان تضيف فيديو من اليوتيوب خد الرابط من embed
    { type: "button", id: "2vid0", text: "الأهداف", icon: "intro", time: "" },
    { type: "modal", id: "yt-lesson3", text: " تمهيد   ", icon: "intro" },
    { type: "button", id: "2act1", text: " نشاط", icon: "activity" },  
    { type: "button", id: "2vid1", text: " مفهوم التخطيط  ", icon: "video" },
    { type: "button", id: "2vid2", text: " مبادئ التخطيط للتدريس   ", icon: "video" },
    { type: "button", id: "2vid3", text: " التخطيط للتدريس  ", icon: "video" },
    { type: "button", id: "2vid4", text: " الخطة التدريسية اليومية  ", icon: "video" },
    { type: "button", id: "2act2", text: " تقويم ", icon: "activity" },


],

  videoMap: 
  {
    "2vid0": "/videos/vid2/vid0.mp4",
    "2vid1": "/videos/vid2/vid1.mp4",
    "2vid2": "/videos/vid2/vid2.mp4",
    "2vid3": "/videos/vid2/vid3.mp4",
    "2vid4": "/videos/vid2/vid4.mp4",
  },

  formLinks: 
  {
    "2act1": " https://forms.gle/RyCjyZu7z9iChHGX9   ",
    "2act2": " https://forms.gle/Czey6XsXMsDYLuCi7    ",
    "2act3": "     ",
    "2act4": "     ",
    "2act5": "    ",
    "2act6": "     ",
    "2act7": "     ",
    "2act8": "     ",
    "2act9": "     ",
    "2act10": "      ",
    "2act11": "     ",
    "2act12": "    ",
    "2act13": "    ",
    "2act14": "    ",
    "2act15": "   ",
    
  },
}