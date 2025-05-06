// data/hero.ts

import { PersonalInfo,SocialLink } from "@/lib/types";

export const heroData: PersonalInfo = {
  name: "Eswara Rohan",
  resume: "/resume.pdf", // path to resume in public folder
  profileImage: "/profile.webp", // path to image in public folder
  setupImage: "/setup.webp", // path to setup image
  moreInfo: `
I'm Eswara Rohan, a Software Engineer based in Hyderabad with hands-on experience in full-stack development using React, Angular, and Spring Boot. At Kshema General Insurance, I worked on real-time dashboards and web apps, sharpening my frontend and backend skills.

A 2024 graduate from IIIT Hyderabad, I now work at Chubb, where I help build robust, high-quality software. I'm passionate about crafting seamless user experiences, building performant APIs, and exploring new tools and system designs.

  `.trim(),
  email:"rohan.iiith@gmail.com",
  workingHours:"9:00 AM - 6:00 PM",
  address:"Magnum Opus, Gachibowli, Hyderabad, India"
};



