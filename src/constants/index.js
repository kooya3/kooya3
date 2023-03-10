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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    yariga,
    musiq,
    youtube,
    belfast,
    vop,
    ampm,
    yutub,
    yarigaEstate,
    gym,
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
      title: "UI/UX Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "WebAPI Developer",
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
      title: "Construction Worker",
      company_name: "Belfast Company Ltd.",
      icon: belfast,
      iconBg: "#E6DEDD",
      date: "February 2021- October 2021",
      points: [
      "Assisted in various construction projects, including building and renovating structures.",
      "Operated various tools and equipment to perform tasks such as digging, lifting, and carrying materials.",
      "Maintained a clean and safe work environment by adhering to safety regulations and procedures.",
      "Communicated effectively with team members to ensure project goals were met.",
      "Dedicated spare time to spending it with loved ones.",
      ],
      },
      {
        title: "Full Stack Developer",
        company_name: "VOP int.",
        icon: vop,
        iconBg: "#E6DEDD",
        date: "November 2022 - April 2023",
        points: [
        "Developed and maintained VOP's website and managed their online platforms as a Full Stack Developer.",
        "Debugged issues, updated features, and created solutions for VOP's web applications.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to deliver high-quality products.",
        "Ensured responsive design and cross-browser compatibility.",
        ],
        },
    {
      title: "Web Developer",
      company_name: "Am/Pm Restaurant & Bar along Kiambu Road",
      icon: ampm,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
      "Creating and managing a website for the restaurant and bar located along Kiambu road in Kenya as a Web Developer.",
      "Responsible for lead creation and redirection as well as updating the site according to scaling and demand.",
      "Collaborating with the restaurant and bar team to deliver a high-quality website that meets their needs.",
      "Ensuring responsive design and cross-browser compatibility.",
      ],
      },
];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Elyees proved me wrong.",
      name: "Steven Kariuki",
      designation: "CFO",
      company: "VOP",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Elyees does.",
      name: "James Kanyeki",
      designation: "COO",
      company: "AM/PM",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      testimonial:
        "After Elyees optimized our website, our traffic increased by 50%. We really can't thank him enough!",
      name: "Edith Karuga",
      designation: "CTO",
      company: "VOP",
      image: "https://randomuser.me/api/portraits/women/89.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Youtube Clone",
      description:
        "The web-based platform described provides a user-friendly solution for searching and viewing YouTube videos from various providers. Its features include extensive search capabilities with filters, tools for customization of the viewing experience, and broad device compatibility. The platform is free to use and accessible from virtually any device with an internet connection. It offers a seamless and engaging viewing experience for users worldwide.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
      ],
      image: yutub,
      source_code_link: "https://elyees-youtube-2.netlify.app/",
    },
    {
      name: "Elyssa Gym",
      description:
        "web-based home workout website that is integrated with exercise APIs. The platform provides users with access to various exercise programs and routines that can be customized to meet their individual needs. The website's features include real-time data, customized recommendations based on user preferences and fitness levels. Overall, the website is a useful tool for anyone looking to improve their fitness and lead a healthier lifestyle.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "rapidapi",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://elyssa-gym.netlify.app/",
    },
    {
      name: "Yariga Real Estate",
      description:
        "web-based real estate application built using the MERN stack and cloudinary, providing a basic CRUD platform for users to post properties and act as real estate agents. The app supports Google OAuth service for easy access and cloudinary integration for efficient property image management and scalable database management. Overall, the app offers a powerful and streamlined solution for real estate agents to manage their property listings.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        }, 
        {
          name: "cloudinary",
          color: "pink-text-gradient",
        },       
      ],
      image: yarigaEstate,
      source_code_link: "https://yariga-ely.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };