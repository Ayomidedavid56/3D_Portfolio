import image from "./image";

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
    icon: image.web,
  },
  {
    title: "Illustrator",
    icon: image.mobile,
  },
  {
    title: "Stylist",
    icon: image.backend,
  },
  {
    title: "Content Creator",
    icon: image.creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: image.html,
  },
  {
    name: "CSS 3",
    icon: image.css,
  },
  {
    name: "JavaScript",
    icon: image.javascript,
  },
  {
    name: "TypeScript",
    icon: image.typescript,
  },
  {
    name: "React JS",
    icon: image.reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: image.redux,
  },
  {
    name: "Tailwind CSS",
    icon: image.tailwind,
  },
  {
    name: "Node JS",
    icon: image.nodejs,
  },
  {
    name: "procreate",
    icon: image.procreate,
  },
  {
    name: "sketch",
    icon: image.sketch,
  },
  {
    name: "git",
    icon: image.git,
  },
  {
    name: "figma",
    icon: image.figma,
  },
  {
    name: "docker",
    icon: image.docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: image.starbucks,
    iconBg: "#383E56",
    date: "October 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Illustrator",
    company_name: "Tesla",
    icon: image.tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining illustrations using Adobe illustrator, Procreate and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: image.shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Meta",
    icon: image.meta,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mariam proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mariam does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mariam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gilritch Restaurant",
    description:
      "Web-based platform that allows users to search, book, and manage their restaurant meal, providing a convenient and efficient solution for your cravings.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: image.carrent,
    source_code_link: "https://github.com/Mayacode00/Gericht-Restaurant",
  },
  {
    name: "GPT-3",
    description:
      "Web application that enables users to build websites with Api, view possibilities, get on with the library packages.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: image.jobit,
    source_code_link: "https://github.com/Mayacode00/GPT-3",
  },
  {
    name: "HOO_BANK",
    description:
      "A comprehensive modern banking platform that allows users to save, withdraw, and keep cryto assets, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: image.tripguide,
    source_code_link: "https://github.com/Mayacode00/hoo_bank",
  },
];

export { services, technologies, experiences, testimonials, projects };
