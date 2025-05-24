import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  sql,
  stealth,
  tesla,
  restervation,
  shopify,
  sass,
  vue,
  someday,
  snapgram,
  llm,
  shiftable,
  nestjs,
  docker,
  mindware,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Mobile Developer",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: 'PostgreSQL',
    icon: sql
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "nest.js",
    icon: nestjs,
  },
];

const experiences = [
  {
    title: "Full stack developer - Next.js",
    company_name: "Siasol-eyes (stealth startup)",
    icon: stealth,
    iconBg: "#383E56",
    date: "2024 - 2025",
    points: [
      "• Responsible for enhancing dashboard features and implementing CRUD operations on a canvas with image manipulation using the React-Leaflet library.",
      "• Build and deliver new features in advanced O.O.P design pattern with NextJS (React & Node.Js).",
      "• I've learned and mastered the company's codebase after 1 month.",
      "• Developed in agile and scalable environments with CI/CD and version control strict practices ",
      "• Used OAuth 2.0 for secure connection and authentication"
    ],
  },
  {
    title: "Frontend developer - Contracted",
    company_name: "Mindware Ventures",
    icon: mindware,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "• Collaborated with the company team lead to develop multiple ai powered apps.",
      "• Contributed to the design of FineFix - a platform for assisting users in revoking parking fines.",
      "• Worked with the most advanced web technologies such as Supabase and NestJS.",
      "• Check it out - http://finefix.info.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shiftable",
    description:
      "An app for shifts managment, and shifts application. As employee you can see who works with you, and the shifts of your co-workers! As employer you can use our algorithem to set new shifts based on application and preferene or you can adjust it menually.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "ts",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: 'JWT tokens',
        color: "green-text-gradient"
      },
      {
        name: "O.O.P",
        color: "pink-text-gradient",
      },
    ],
    image: shiftable,
    source_code_link: "https://github.com/ShakedGolan10/shiftable-app",
    source_demo_link: "https://shiftable-app.onrender.com/",
  },
  {
    name: "Sense the voice",
    description:
      `Grammar Correction and Transcription Service! This Python-based server combines advanced speech-to-text transcription and grammar correction capabilities. 
        You can upload an audio file along with its language, and the server will return the transcribed text and its corrected version.`,
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "transformers",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
      {
        name: "huggingface",
        color: "blue-text-gradient",
      },
    ],
    image: llm,
    source_code_link: "https://github.com/ShakedGolan10/SenseTheVoice"
  },
  {
    name: "Picgram",
    description:
      "A social media app as Instagram, where you can share your photos, like posts , save posts , search for users on the explore and watch people profiles. also upload and watch stories!.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "orange-text-gradient",
      },
      {
        name: "Postgre SQL",
        color: "green-text-gradient",
      },
      {
        name: "Vuex",
        color: "pink-text-gradient",
      },
      {
        name: "SCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Sequelize ORM",
        color: "green-text-gradient",
      },
    ],
    image: snapgram,
    source_code_link: "https://github.com/YuvalDavidov/instagram-clone",
    source_demo_link: "https://picgram-app.onrender.com/",
  },
  {
    name: "Airtnt",
    description:
      "An airbnb clone marketplace for renting houses and homestays across the world! You can also register and upload your own apratment at Airtnt. As a user you also get realtime updates on your requests, and messages from the owner",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient"
      }
    ],
    image: someday,
    source_code_link: "https://github.com/YuvalDavidov/airBNB-proj",
    source_demo_link: "https://airtnt-proj.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };