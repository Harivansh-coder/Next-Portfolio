const userData = {
  githubUsername: "Harivansh-coder",
  name: "Harivansh Thakur",
  websiteURL: "https://www.harivansht.tech",
  designation: "Back-End Developer",
  avatarUrl: "/avatar.png",
  email: "harivanshthakur8@gmail.com",
  phone: "+91 7718929548",
  address: "Mumbai, Maharashtra, India.",
  projects: [
    {
      id: 1,
      title: "Artemec",
      link: "https://artemec-quote.web.app/",
      imgUrl: "/artemec.png",
    },
    {
      id: 2,
      title: "getMyExe",
      link: "https://github.com/MyFSociety/get-my-exe",
      imgUrl: "/get_my_exe.png",
    },
    {
      id: 3,
      title: "NextPortfolio",
      link: "https://vercel.com/harivansh-coder/next-portfolio/BCtZxSozmSazoeNrgxU4myAGpYGC",
      imgUrl: "/portfolio.png",
    },
    {
      id: 4,
      title: "Image Gallery",
      link: "https://image-gallery-lovat.vercel.app/",
      imgUrl: "/image_gallery.png",
    },
  ],
  about: {
    title:
      "A software developer who enjoys working on backend development, cloud computing, and software development overall, and is passionate about learning new technology.",
    description: [
      `A highly skilled individual with over 4 years of programming experience. `,
      `I have a diverse background, having worked with a range of programming languages including Python, Java, Kotlin, React, Next.js, Express, TypeScript, JavaScript, C, and Go Lang.`,
      `I'm not limited to one specific language or framework, but is instead capable of adapting to new technologies quickly and efficiently.`,
      `Also a creative problem-solver and an excellent communicator, which allows me to work well with others in a team setting.`,
    ],
    currentProject: "QueryOverflow",
    currentProjectUrl: "https://github.com/MyFSociety/Query-Overflow-API-Auth",
  },
  // experience
  experience: [
    {
      title: "Technical Content Writer",
      company: "GeeksForGeeks",
      year: "2022",
      companyLink: "https://www.geeksforgeeks.org/",
      desc: "Contributing to the great work of quenching the world’s thirst for knowledge with GeeksForGeeks",
    },
    {
      title: "Back-End Developer",
      company: "Optiminastic Media",
      year: "2022",
      companyLink: "https://optiminastic.com/",
      desc: "Assisted in the development and maintenance of server-side applications using Express and TypeScript.",
    },
    {
      title: "Software Developer",
      company: "R.D National College",
      year: "2022",
      companyLink: "https://rdnational.ac.in/",
      desc: "Published both Website and App to production, now used over by 7K students and college Administration.",
    },
    {
      title: "Android Developer",
      company: "AdMyBrand",
      year: "2021",
      companyLink: "https://www.admybrand.com/about",
      desc: "Worked on and released to production 3 major products aimed at 3 different advertising areas.",
    },
    {
      title: "Bachelor's in Computer Science",
      company: "University of Mumbai",
      year: "2019",
      companyLink: "https://upes.co.in",
      desc: "Major in Computer Science with a CGPA of 9.23.",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/11uEymRY8u_6dFuYLDoi1eWGpBQDtK5IS/view?usp=sharing",
  socialLinks: {
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/harivansh-thakur1/",
    github: "https://github.com/Harivansh-coder",
  },
};

export type IUserData = typeof userData;

export default userData;
