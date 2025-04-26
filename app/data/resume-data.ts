import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Ananya Srivastava",
  location: "Lucknow",

  about:
    "Full stack developer with expertise in MERN stack development and a strong foundation in computer science fundamentals. Demonstrated success in solving complex problems and building efficient web applications. Skilled in multiple programming languages and frameworks, with a focus on creating responsive and user-friendly applications.",
  summary:
    "Passionate software developer with a proven track record of solving over 300+ problems on platforms like LeetCode and CodeChef. Experienced in full-stack development using the MERN stack, with a strong foundation in data structures, algorithms, and computer science fundamentals. Committed to continuous learning and professional growth, having participated in various industry workshops and career-building sessions.",

  contact: {
    email: "srivastavaananya113@gmail.com",
    tel: "+91-7007928704",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AnanyaSrivastava01",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ananya-srivastava-4b602a246",
        icon: LinkedInIcon,
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/ananyaa_sv/",
        icon: LeetCodeIcon,
      }
    ],
  },
  education: [
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "Sep 2022",
      end: "Jul 2024",
      gpa: "7.4"
    },
    {
      school: "Lucknow Public School",
      degree: "Senior Secondary Education",
      start: "2020",
      end: "2021",
    },
    {
      school: "Saint Fidelis College",
      degree: "Secondary Education",
      start: "2019",
      end: "2020",
    },
    // {
    //   school: "Aryan International Academy",
    //   degree: "Senior",
    //   start: "2018",
    //   end: "2019",
    // },
  ],
  skills: [
    // Languages
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    
    // Frameworks
    "React.js",
    "Node.js",
    "Express.js",
    "Bootstrap",
    
    // Tools/Platforms
    "MongoDB",
    "Git/GitHub",
    "Postman",
    
    // Fundamentals
    "OOPS",
    "Operating Systems",
    "Computer Networks",
    "DBMS",
    
    // Additional Skills
    "Problem Solving",
    "Leadership",
    "Adaptability"
  ],

  certificates: [
    {
      title: "Complete Interview Preparation - Self-Paced (DSA)",
      issuer: "Cipher Schools",
      date: "Dec 2024"
    },
    {
      title: "Introduction to GenAI and LLM",
      issuer: "Google Cloud",
      date: "Nov 2024"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Sep 2024"
    },
    {
      title: "Data Structure And Algorithms Using C++",
      issuer: "Udemy",
      date: "Jul 2024"
    },
    {
      title: "Full Stack Web Development using MERN Stack",
      issuer: "Cipher Schools",
      date: "May 2024"
    },
    {
      title: "Generative AI with LLM",
      issuer: "Amazon Web Services",
      date: "Jan 2024"
    }
  ],

  projects: [
    {
      title: "Weather-Dashboard",
      techStack: ["React", "Html", "Css"],
      description:
        "A responsive web app that provides real-time weather updates and forecasts using the OpenWeatherMap API."
    },
    {
      title: "Car-Rental-System",
      techStack: ["Html", "Css", "JavaScript"],
      description: "A web-based Car Rental System that allows users to browse, book, and manage vehicle rentals with ease."
    },
    {
      title: "Trip-Planning-Website",
      techStack: ["JavaScript", "NodeJS", "Express.JS", "MongoDB"],
      description:
        "Developed a comprehensive trip-planning platform serving 100+ active users and facilitating 50+ successful trip plans. Implemented secure authentication, real-time data fetching, and an intuitive UI. Integrated a real-time review system that boosted user engagement by 30%."
    },
    {
      title: "Notes-Making-App",
      techStack: ["React", "JavaScript", "CSS"],
      description:
        "A modern note-taking application built with React that allows users to create, edit, and organize notes with a clean and intuitive interface. Features include real-time updates, markdown support, and local storage integration."
    },
    {
      title: "Food Ordering Website",
      techStack: ["Html", "Css", "JavaScript"],
      description:
      "A quirky and engaging food ordering website offering daily meals with a fun twist — *Ab Baabu Bhi Roj Khana Khayega!"
    },
    {
      title: "Pipeline Data Visualization Dashboard",
      techStack: ["React"],
      description:
      "An interactive dashboard for visualizing pipeline data with stage-wise insights using dynamic charts and tables."
    },
    {
      title: "Naukari Paao",
      techStack: ["MERN", "React"],
      description: "Currently working on a system where employer can post jobs as well as job seeker can apply for available jobs."
    },
  ],

  // experience: [
  //   {
  //     company: "Im'enSe",
  //     position: "Frontend Developer",
  //     logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGwBEMaD6MB4Q/company-logo_200_200/company-logo_200_200/0/1670258446221?e=1749686400&v=beta&t=ke4p83O45mws8hx8rE5qkaD8KH5-aI1hPa6gesmqx_U',
  //     location: "Tangier, Morocco",
  //     startDate: "Aug 2024",
  //     endDate: "Present",
  //     description:
  //       "Working on front-end development projects for clients in the QHSE sector, focusing on secure, scalable web applications.",
  //     skills: [
  //       "React",
  //       "TypeScript",
  //       "Redux",
  //       "Node.js",
  //       "Jira",
  //       "Agile",
  //       "Git",
  //       "CI/CD",
  //       "REST APIs",
  //     ],
  //     achievements: [
  //       "Collaborated with cross-functional teams to deliver projects on time",
  //       "Contributed to the development of a secure authentication system",
  //       "Conducted code reviews and provided constructive feedback to peers",
  //       "Participated in the design and architecture of a new web application",
  //       "Worked closely with UX/UI designers to implement user-friendly interfaces",
  //       "Contributed to the development of a reusable component library",
  //       "Participated in the migration of a legacy application to a modern tech stack",
  //       "Worked on a project that reduced page load time by 50%",
  //       "Participated in the development of a web application that supports multiple languages",
  //       "Worked on a project that improved accessibility for users with disabilities",
  //       "Worked on a project that improved SEO performance by 30%",
  //       "Participated in the development of a web application that integrates with third-party APIs",
  //       "Worked on a project that improved data visualization for users",
  //     ],
  //   },
  // ],
} as const;
