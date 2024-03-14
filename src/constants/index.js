import {
  mobile,
  backend,
  creator,
  web,
  icon,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  LaunchWall,
  CheckDot,
  starbucks,
  tesla,
  shopify,
  MilkywayEX,
  getrekt,
  jobit,
  tripguide,
  welcome,
  hodl,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "faq",
    title: "Faq",
  },
];

const services = [
  {
    title: "Custom stickers",
    icon: icon,
  },
  {
    title: "Hand drawn stickers",
    icon: mobile,
  },
  {
    title: "Logo & Branding",
    icon: backend,
  },
  {
    title: "Mascot",
    icon: creator,
  },
  {
    title: "NFT designing",
    icon: web,
  },
  {
    title: "Whitepaper designing",
    icon: mobile,
  },
  {
    title: "Pitch deck designing",
    icon: backend,
  },
  {
    title: "Social media posters",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    // title: "React.js Developer",
    // company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [""],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "MilkywayEX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum ut voluptatem ipsa. Et omnis sit dolore maiores, nobis provident.",
    tags: [
      {
        name: "hashtag",
        color: "blue-text-gradient",
      },
      {
        name: "hashtag",
        color: "green-text-gradient",
      },
      {
        name: "hashtag",
        color: "pink-text-gradient",
      },
    ],
    image: MilkywayEX,
  },
  {
    name: "Launch Wall",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum ut voluptatem ipsa. Et omnis sit dolore maiores, nobis provident.",
    tags: [
      {
        name: "hashtag",
        color: "blue-text-gradient",
      },
      {
        name: "hashtag",
        color: "green-text-gradient",
      },
      {
        name: "hashtag",
        color: "pink-text-gradient",
      },
    ],
    image: LaunchWall,
    source_code_link: "https://github.com/",
  },
  {
    name: "CheckDot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum ut voluptatem ipsa. Et omnis sit dolore maiores, nobis provident.",
    tags: [
      {
        name: "hashtag",
        color: "blue-text-gradient",
      },
      {
        name: "hashtag",
        color: "green-text-gradient",
      },
      {
        name: "hashtag",
        color: "pink-text-gradient",
      },
    ],
    image: CheckDot,
    source_code_link: "https://github.com/",
  },
  {
    name: "Get Rekt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum ut voluptatem ipsa. Et omnis sit dolore maiores, nobis provident.",
    tags: [
      {
        name: "hashtag",
        color: "blue-text-gradient",
      },
      {
        name: "hashtag",
        color: "green-text-gradient",
      },
      {
        name: "hashtag",
        color: "pink-text-gradient",
      },
    ],
    image: getrekt,
    source_code_link: "https://github.com/",
  },
  {
    name: "Welcome",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum ut voluptatem ipsa. Et omnis sit dolore maiores, nobis provident.",
    tags: [
      {
        name: "hashtag",
        color: "blue-text-gradient",
      },
      {
        name: "hashtag",
        color: "green-text-gradient",
      },
      {
        name: "hashtag",
        color: "pink-text-gradient",
      },
    ],
    image: welcome,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hodl",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum ut voluptatem ipsa. Et omnis sit dolore maiores, nobis provident.",
    tags: [
      {
        name: "hashtag",
        color: "blue-text-gradient",
      },
      {
        name: "hashtag",
        color: "green-text-gradient",
      },
      {
        name: "hashtag",
        color: "pink-text-gradient",
      },
    ],
    image: hodl,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
