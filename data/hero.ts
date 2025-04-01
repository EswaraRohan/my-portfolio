// data/hero.ts

import { PersonalInfo,SocialLink } from "@/lib/types";

export const heroData: PersonalInfo = {
  name: "Eswara Rohan",
  resume: "/resume.pdf", // path to resume in public folder
  profileImage: "/profile.webp", // path to image in public folder
  setupImage: "/setup.webp", // path to setup image
  moreInfo: `
I'm Eswara Rohan, a passionate Software Engineer based in Hyderabad with hands-on experience in
 full-stack development. I’ve worked with a diverse tech stack including React, Angular,
  and Spring Boot—delivering clean, scalable, and efficient solutions.
   During my time at Kshema General Insurance, I gained valuable exposure to real-time dashboards and 
   web applications, which helped strengthen both my frontend and backend skills.
    I'm especially confident in crafting seamless user experiences and building performant APIs.

I graduated from IIIT Hyderabad in 2024, and I’m currently working at Chubb, 
where I contribute to building robust, high-quality software solutions.
 I’m always eager to explore new tools and 
frameworks, improve system designs, and collaborate with like-minded people. 
 It’s been an incredible journey of growth and self-discovery!

  `.trim(),
  email:"rohan.iiith@gmail.com",
  workingHours:"9:00 AM - 6:00 PM",
  address:"B406, Magnum Opus, Gachibowli, Hyderabad, India"
};



