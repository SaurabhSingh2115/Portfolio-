import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I'm passionate about solving complex challenges and
              collaborating to create scalable, impactful solutions. I thrive on
              turning intricate problems into opportunities for innovation and
              growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have experience working with technologies like React, Node.js, MySQL, and MongoDB, as well as Android development using Kotlin. Additionally, I engage in competitive programming, which sharpens my problem-solving skills. I thrive in collaborative environments and enjoy tackling complex challenges to deliver high-quality solutions. 
Outside of coding, I stay active, explore new technologies, and am a football enthusiast.`;

export const PROJECTS = [
  {
    title: "Maze Solver",
    image: project1,
    description:
      "Dynamic maze generator and solver using BFS and DFS with real-time visualization.",
    technologies: ["Java", "Swing"],
    link: "https://github.com/SaurabhSingh2115/Maze-Solver",
  },
  {
    title: "Inn Sync",
    image: project2,
    description:
      "Hotel management system with a dashboard for booking and cabin management.",
    technologies: ["React", "Express", "MongoDB"],
    link: "https://github.com/SaurabhSingh2115/inn_sync",
  },
  {
    title: "Math Game",
    image: project3,
    description:
      "Educational math game for kids with random problem generation and score tracking.",
    technologies: ["Kotlin"],
    link: "https://github.com/SaurabhSingh2115/Math-Game",
  },
  {
    title: "ATM Management System",
    image: project4,
    description:
      "GUI for ATM operations with balance, withdrawal, and deposit functionalities.",
    technologies: ["Python", "Tkinter"],
    link: "https://github.com/SaurabhSingh2115/ATM-Managements-System",
  },
];

export const CONTACT = {
  address: "Yamuna Vihar Colony Prayagraj, Uttar Pradesh, India",
  phoneNo: "+91 7973494678 ",
  email: "saurabhsingh9637@gmail.com",
};
