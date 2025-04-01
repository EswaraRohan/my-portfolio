import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Stuttering Detection Portal",
    description: "A CRUD style web application that detects if a patient is suffering from a stuttering problem.",
    gitUrl: "https://github.com/EswaraRohan/Stuttering-Detection",
    images: ["/stutter.png"],
    techStack: ["React","Flask","MongoDB","Docker"],
    priority: 1,
  },
  {
    title: "Restaurant Site",
    description: "A dynamic restaurant web application that streamlines menu management, handles reservations, and tracks customer orders with ease.",
    gitUrl: "https://github.com/EswaraRohan/Restaurant-Site",
    images: ["/restaurant.png"],
    techStack: ["Bootstrap", "Reactstrap", "Chart.js"],
    priority: 2,
  },
  {
    title: "Brick Breaker Game",
    description: "A terminal-based game in Python showcasing an environment with 10+ interactive elements, including boosts.",
    gitUrl: "https://github.com/EswaraRohan/Bounce-Arcade",
    images: ["/brick.webp"],
    techStack: ["Flask", "MongoDB", "React", "TensorFlow"],
    priority: 3,
  },
  {
    title: "Simple RA",
    description: "An optimized low-level RDBMS architecture supporting assignment and non-assignment operations, enhancing data management efficiency.",
    gitUrl: "https://github.com/EswaraRohan/RDBMS",
    images: ["/rdbms.webp"],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    priority: 4,
  },
  {
    title: "Graph Neural Networks",
    description: "Convolutional Networks, GraphSAGE, expressive power, graph structures, structural representation, GNN variants, strengths, limitations, graph tasks.",
    gitUrl: "https://github.com/yourusername/otp-auth",
    images: ["/ai.jpeg"],
    techStack: ["React", "Express", "MongoDB", "Node.js"],
    priority: 5,
  },
  {
    title: "C Shell",
    description: "Custom C shell with Unix system calls, supporting piping, redirection, signals, background processes, and essential directory/process management..",
    gitUrl: "https://github.com/EswaraRohan/C-Shell",
    images: ["/shell.jpg"],
    techStack: ["Next.js", "Tailwind", "CoinGecko API"],
    priority: 6,
  },
];
