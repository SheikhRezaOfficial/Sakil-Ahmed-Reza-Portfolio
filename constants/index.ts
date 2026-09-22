import { FaFacebook } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

export const SKILLS = [
  "Python",
  "PyTorch",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Data Science",
  "Data Analysis",
  "Data Visualization",
  "Graph-based Recommendation Systems",
  "Full-Stack Development",
  "C++",
  "Java",
  "C#",
  "Git",
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/SheikhRezaOfficial",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/sakilahmedrezaofficial/",
  },
] as const;

export const PROJECTS = [
  {
    title: "RokomariBG – Bangla Book Recommendation Graph Dataset",
    description:
      "A large-scale heterogeneous knowledge graph dataset for Bangla book recommendation research, containing 127K+ books, 63K+ users, 16K+ authors, 1.5K+ categories, and 209K+ reviews across multiple relational types.",
    image: "/projects/rokomari.png",
    link: "https://github.com/backlashblitz/Bangla-Book-Recommendation-Dataset",
  },

  {
    title: "LenDen – Online Mobile Banking Platform",
    description:
      "A modern online mobile banking application focused on digital banking and transaction management, designed to provide a simple and user-friendly experience for everyday financial activities.",
    image: "/projects/lenden.png",
    link: "https://github.com/SheikhRezaOfficial/LenDen-Online-Mobile-Banking-App-main",
  },

  {
    title: "Object Detection with SSL & Semi-Supervised Learning",
    description:
      "An object detection research pipeline using Self-Supervised Learning and Semi-Supervised Learning with YOLOv10–YOLOv12, including dataset preprocessing, training workflows, and model evaluation with limited labeled data.",
    image: "/projects/fish.png",
    link: "https://github.com/SheikhRezaOfficial/FishFryVision-YOLOv10-to-v12",
  },

  {
    title: "RECBook – AI-Powered Personalized Book Recommendation Platform",
    description:
      "An AI-powered personalized book recommendation platform designed to help users discover relevant books through intelligent recommendation techniques and a user-focused reading experience.",
    image: "/projects/recbook.png",
    link: "https://github.com/SheikhRezaOfficial/RECBook_AI_Powered_Personalized_Book_Recommendation_Platform-in-the-box-below",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/SheikhRezaOfficial",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/sakilahmedrezaofficial/",
      },
    ],
  },

  {
    title: "Portfolio",
    data: [
      {
        name: "Download CV",
        icon: null,
        link: "/Sakil_Ahmed_Reza_CV.pdf",
      },
      {
        name: "Email Me",
        icon: null,
        link: "mailto:sheikhrezaofficial@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/SheikhRezaOfficial/space-portfolio",
};