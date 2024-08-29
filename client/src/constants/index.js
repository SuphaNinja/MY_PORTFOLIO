

export const HERO_CONTENT = `Hi, I'm Sid, a 21-year-old software developer from Stockholm, Sweden. I'm passionate about coding and have been dedicated to it daily since late last year.

My skills include JavaScript, TypeScript, React, Next.js, SQLite, and Prisma, with a growing knowledge of Azure and AWS.

When I'm not coding, you'll find me at the gym, traveling, or staying on top of the latest tech.

Fluent in English, Spanish, and Swedish, I thrive in diverse environments and am eager to tackle new challenges.`;

export const ABOUT_TEXT = `A 21-year-old software developer based in Stockholm, Sweden, I’ve immersed myself in coding daily since late last year. My technical toolkit includes Next.js, Tanstack, Axios, TailwindCSS, TypeScript, ShadCN, SQLite, Prisma, Socket.io, AuthJS, and bcrypt, with a growing focus on cloud platforms like Azure and AWS. I’m fluent in English, Spanish, and Swedish, which helps me adapt to diverse environments and collaborate effectively. Always eager to take on new challenges, I balance my time between coding, staying active at the gym, exploring new places, and keeping up with the latest tech innovations.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "JHC Plåt & Bygg AB",
    link: "https://www.jhc-platbyggab.com/",
    githubC: "https://github.com/SuphaNinja/JHC-Client/tree/main/client",
    githubS: "https://github.com/SuphaNinja/JHC-Client/tree/main/server",
    info: "Feel free to try it out but please write 'TEST' in the description since the website is in production.",
    image: "https://i.gyazo.com/3dcc68c35b57726c906210177ca91774.jpg",
    description:
      "JHC Plåt & Bygg AB is a straightforward website designed to provide essential information about roofing services. It features a clean and simple layout with easy access to email support and a user-friendly price request form. Customers can also reach out for service inquiries through a dedicated customer service form. The site includes automated email confirmations and a fully functioning support system to streamline communication.",
    technologies: ["React", "Express", "Tanstack", "Axios", "TailwindCSS", "Typescript", "ShadCN", "i18next"],
  },
  {
    title: "Portfolio Website",
    link: "https://my-portfolio-mu-gilt.vercel.app/",
    githubC: "https://github.com/SuphaNinja/MY_PORTFOLIO",
    info: "My latest website where i've ecountered the world of animations!",
    image: "https://i.gyazo.com/b3c487f90653167b757d6007698cfa2d.jpg",
    description:
      "Explore my portfolio website, where I've mastered creating smooth, engaging experiences with Framer Motion. Discover how animation can bring web design to life!",
    technologies: ["Vite", "React", "TailwindCSS", "Typescript", "ShadCN", "ZOD", "Framer-Motion"],
  },
  {
    title: "AI News",
    link: "https://blog-app-client-blue.vercel.app/",
    githubC: "https://github.com/SuphaNinja/BLOG_APP_CLIENT",
    githubS: "https://github.com/SuphaNinja/BLOG_APP_SERVER",
    info: "Demo Account Mail: demo123@gmail.com | Password: Demo123",
    image: "https://i.gyazo.com/1c58de08c6d082240f8f56159dd7c360.png",
    description:
      "AI News is a straightforward news site where administrators can upload and manage articles easily. Users can read articles, like and comment on them, and receive notifications about their activity on the site. The platform features a simple, responsive design for various devices and includes basic security measures to protect user data.",
    technologies: ["React", "Express", "Tanstack", "Axios", "TailwindCSS", "Typescript", "ShadCN", "ZOD", "lodash", "SQLite", "Prisma", "JWT", "bcrypt"],
  },
  {
    title: "League Of Memory",
    link: "https://lol-memory-game-ten.vercel.app/",
    githubC: "https://github.com/SuphaNinja/LOL_MEMORY_GAME",
    info: "You will need to Sign up with github to play the game.",
    image: "https://i.gyazo.com/8207fb511828c7efba82eb8aa184284c.png",
    description:
      "League of Memory is a WebSocket-based card memory game where you can challenge friends to 1 vs 1 matches. Inspired by League of Legends, it features real-time gameplay, allowing you to invite friends, track match history, and play against them live. The game is built using NextJS, Tanstack/react-query, Axios, TailwindCSS, TypeScript, ShadCN, SQLite, Prisma, Socket.io, AuthJS, and bcrypt, providing a smooth, interactive experience with secure user management and efficient data handling.",
    technologies: ["NextJS", "Tanstack" , "Axios", "TailwindCSS", "Typescript", "ShadCN", "SQLite", "Prisma", "Socket.io", "AuthJS", "bcrypt"],
  },
  {
    title: "GoalFitPro",
    link: "https://aigymapp-client-wvix.vercel.app/",
    githubC: "https://github.com/SuphaNinja/AIGYMAPP-CLIENT",
    githubS: "https://github.com/SuphaNinja/AIGYMAPP-SERVER",
    info: "Demo Account Mail: demo123@gmail.com | Password: Demo123",
    image: "https://i.gyazo.com/3ae808dfc76c39465328c9d22f091889.png",
    description:
      "GoalFitPro is an AI-powered platform that generates a personalized 7-day fitness and meal plan based on user input. Utilizing NextJS and TypeScript, it offers a seamless experience where clients fill out a form to receive tailored workout and meal recommendations. The platform supports 'trainer' and 'client' accounts, allowing clients to select a trainer and engage in a live chat. Built with Tanstack/react-query and Axios for data management, TailwindCSS for styling, and SQLite with Prisma for efficient data storage, GoalFitPro ensures a smooth, interactive experience with secure authentication managed by AuthJS and bcrypt.",
    technologies: ["React", "Express", "Tanstack", "Axios", "TailwindCSS", "Typescript", "ShadCN", "OpenAI API" , "bcrypt", "SQLite", "Prisma"],
  },
  {
    title: "ElectroBuy",
    link: "https://ecommerce-app-three-zeta.vercel.app/",
    githubC: "https://github.com/SuphaNinja/ECOMMERCE_APP",
    info: "Demo Account Mail: demo123@gmail.com | Password: Demo123",
    image: "https://i.gyazo.com/0d2ee6fe15d62f84055f4f2acc715fb0.png",
    description:
      "ElectroBuy is a sleek e-commerce platform designed for browsing, adding products to your cart, and checking out seamlessly. Built with NextJS and TypeScript, ElectroBuy offers a clean and intuitive interface where users can easily add items to their cart and wishlist. The app leverages Tanstack/react-query and Axios for efficient data management, while TailwindCSS and ShadCN provide a stylish and responsive design. Data is managed with SQLite and Prisma, and secure user authentication is handled using AuthJS and bcrypt. Validation is implemented with ZOD to ensure a reliable shopping experience.",
    technologies: ["NextJS", "Tanstack", "Axios", "TailwindCSS", "Typescript", "ShadCN", "SQLite", "Prisma", "AuthJS", "bcrypt", "ZOD"],
  },
];

export const CONTACT = {
  address: "Störtloppsvägen 20, 129 47 Hägersten",
  phoneNo: "+46 70 061 49 67",
  email: "sidricobjork@gmail.com",
};
