import type { ButtonItem } from "@/components/content/mainitems/types";

export const lessonFive = {
  items: <ButtonItem[]>
[
    //عشان تضيف فيديو من اليوتيوب خد الرابط من embed
    { type: "button", id: "5vid0", text: "الأهداف", icon: "intro", time: "" },
    { type: "button", id: "5act1", text: " نشاط", icon: "activity" },              
    { type: "modal", id: "book4", text: " طرق التدريس   ", icon: "intro" },
    { type: "button", id: "5act2", text: " نشاط ", icon: "activity" },
    { type: "button", id: "5vid1", text: "  مفهوم طرق التدريس ", icon: "video" },
    { type: "button", id: "5act3", text: " نشاط ", icon: "activity" },
    { type: "modal", id: "book5", text: " مميزات طرق التدريس الجيدة   ", icon: "intro" },
    { type: "button", id: "5act4", text: " نشاط", icon: "activity" },
    { type: "modal", id: "book6", text: "  معايير اختيار طرق التدريس  ", icon: "intro" },
    { type: "button", id: "5vid2", text: " أخطاء اختيار طرق التدريس  ", icon: "video" },
    { type: "button", id: "5vid3", text: "  استراتيجيات وطرق التدريس ", icon: "video" },
    { type: "button", id: "5act5", text: "نشاط ", icon: "activity" },
    { type: "button", id: "5act6", text: " نشاط", icon: "activity" },
    { type: "button", id: "5act7", text: " تقويم ", icon: "activity" },
    { type: "button", id: "5act8", text: " النشاط الإثرائي ", icon: "activity" },
],

  videoMap: 
  {
    "5vid0": "/videos/vid5/vid0.mp4",
    "5vid1": "/videos/vid5/vid1.mp4",
    "5vid2": "/videos/vid5/vid2.mp4",
    "5vid3": "/videos/vid5/vid3.mp4",
  },

  formLinks: 
  {
    "5act1":   " https://forms.gle/BzAHk5XFV599FcCRA ",
    "5act2":   " https://forms.gle/2eMfYEcQDBpP9wur7 ",
    "5act3":   " https://forms.gle/xZZwX3sFB7K94VDt8 ",
    "5act4":   " https://forms.gle/JZwFjTQYvVUnjQ4q7 ",
    "5act5":   " https://forms.gle/AijxkAyEz5VYfCnY6 ",
    "5act6":   " https://forms.gle/X3kSURBMcXzGg9VD6 ",
    "5act7":   " https://forms.gle/TBF4AWLjmfffpJUV9 ",
    "5act8":   " https://forms.gle/v1rnJXoSFukbmsJ59 ",
    "5act9":   "  ",
    "5act10":  "  ",
    "5act11":  "  ",
    "5act12":  "  ",
  },
}