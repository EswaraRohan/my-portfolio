// data/experience.ts

import { WorkExperience, Skill, Certificate } from "@/lib/types";

export const data: {
  workExperience: WorkExperience[];
  skills: Skill[];
  certificates: Certificate[];
} = {
    workExperience: [
      {
        companyName: "All India Institute Of Speech and Hearing",
        companyLogo: "/experience.webp",
        position: "Full Stack Developer Intern",
        startDate: "2023-01",
        endDate: "2023-06",
        jobDescription: `
        • Developed a CRUD-style web application using RAD model, featuring role-based access (Admin, Patient, Examiner) for an ML-powered stuttering detection system.
• Integrated Flask for server-side routing, RESTful APIs, ReactJS UI, and MongoDB storage, following Agile methodology for continuous improvement and bug resolution.
        `,
      },
      {
        companyName: "Kshema General Insurance Limited",
        companyLogo: "/experience.webp",
        position: "Associate Member Of Technical Staff",
        startDate: "2024-07",
        endDate: "2025-01",
        jobDescription: `
        • Built the iAgri portal using Angular, allowing users to apply for insurance and manage accounts within the Scrum framework
• Developed a React-based kiosk application in one month using the RAD model.
• Led the development of Kshema Finder, a React & Reactstrap web application offering state-wise policy analytics.
• Automated website performance monitoring with New Relic.
        `,
      },
      {
        companyName: "Chubb",
        companyLogo: "/experience.webp",
        position: "Software Engineer",
        startDate: "2025-03",
        jobDescription: ``,
      },
    ],


  

    skills: [
      {
        name: "React",
        image: "/react.webp",
        url: "https://reactjs.org/",
      },
      {
        name: "Angular",
        image: "/angular.webp",
        url: "https://angular.io/",
      },
      {
        name: "Spring Boot",
        image: "/springboot.png",
        url: "https://spring.io/projects/spring-boot",
      },
      {
        name: "Ionic",
        image: "/ionic.webp",
        url: "https://ionicframework.com/",
      },
      {
        name: "Node.js",
        image: "/nodejs.webp",
        url: "https://nodejs.org/",
      },
      {
        name: "Flask",
        image: "/flask.png",
        url: "https://flask.palletsprojects.com/",
      },
      {
        name: "jQuery",
        image: "/jquery.png",
        url: "https://jquery.com/",
      },
      {
        name: "Bootstrap",
        image: "/bootstrap.webp",
        url: "https://getbootstrap.com/",
      },
      {
        name: "Material UI",
        image: "/materiaui.webp",
        url: "https://mui.com/",
      },
      {
        name: "Tailwind CSS",
        image: "/tailwind.webp",
        url: "https://tailwindcss.com/",
      },
      {
        name: "SQL",
        image: "/sql.png",
        url: "https://www.w3schools.com/sql/",
      },
      {
        name: "MongoDB",
        image: "/mongodb.png",
        url: "https://www.mongodb.com/",
      },
      {
        name: "JavaScript",
        image: "/javascript.webp",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        image: "/typescript.png",
        url: "https://www.typescriptlang.org/",
      },
    ],
    

  certificates: [
    {
      title: "React JS",
      image: "/certificates/react.png",
      url: "https://example.com/certificates/react-js",
    },
    {
      title: "Web Design",
      image: "/certificates/webdesign.png",
      url: "https://example.com/certificates/webdesign",
    },
    {
      title: "Python Programming",
      image: "/certificates/python.png",
      url: "https://example.com/certificates/python",
    },
  ],
};
