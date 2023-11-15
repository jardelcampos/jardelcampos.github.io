/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jardel's Portfolio",
  description:
    "Welcome to my portfolio, where I showcase my dedication to automating tasks, enhancing processes, and my continuous pursuit of knowledge in the fields of machine learning and deep learning. Explore my work to witness how I have leveraged these skills to drive efficiency and innovation in various projects. If you share the same passion for these areas, let's connect! I'm always eager to collaborate and discuss exciting opportunities in automation and emerging technologies. Together, we can shape the future of technology and make processes smarter and more efficient. Let's bring your ideas to life and create a brighter, automated future together. Explore my portfolio, get in touch, and let's embark on this exciting journey."
    ,
  og: {
    title: "Jardel Campos Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Jardel Campos",
  logo_name: "JardelCampos",
  nickname: "jardel",
  subTitle:
  "Explore my portfolio to witness my dedication to automation, process optimization, and continuous learning in machine learning and deep learning. If you share this passion, let's collaborate on exciting projects to shape a smarter, more efficient future. Connect with me and bring your ideas to life for a brighter automated tomorrow.",
  resumeLink:
    "",
  portfolio_repository: "",
  githubProfile: "jardelsewo.github.io",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "jardelsewo.github.io",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "linkedin.com/in/jardel-campos-788030113",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:jardel.sewo@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with dashboards (PowerBI and StreamLite) projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Machine Learning",
          fontAwesomeClassname: "carbon:machine-learning-model",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "devicon:streamlit-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "icon-park:flask",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using JavaScript",
        "⚡ Building a chatbot using Java and Python and Database to Improve user Experience",
        "⚡ Creating application backend in Mysql, Java & Flask",
      ],
      softwareSkills: [
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "teenyicons:python-outline",
          style: {
            backgroundColor: "#00000",
            color: "#000000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "el:css",
          style: {
            backgroundColor: "#00000",
            color: "#000000",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "icon-park:flask",
          style: {
            backgroundColor: "#00000",
            color: "#000000",
          },
        },
        {
          skillName: "Tomcat",
          fontAwesomeClassname: "devicon:tomcat",
          style: {
            backgroundColor: "#00000",
            color: "#000000",
          },
        },
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "",
      iconifyClassname: "",
      style: {
        color: "",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "PUCPR - Pontifícia Universidade Católica do Paraná.",
      subtitle: "Data Scientist",
      logo_path: "PUCPR.png",
      alt_name: "PUCPR",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ My final year in the data science specialization was the early diagnosis of dengue using machine learning techniques, which we obtained an A+ rating from the university.",
      ],
      website_link: "https://www.pucpr.br/",
    },
    {
      title: "BYU - Brigham Young University.",
      subtitle: "English Immersion",
      logo_path: "byu_logo.png",
      alt_name: "BYU",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ During my academic journey at BYU, I immersed myself in an English-focused curriculum, honing language proficiency through comprehensive coursework. This immersive experience not only facilitated effective communication but also provided a solid foundation for academic pursuits. As a testament to my language proficiency, I successfully completed the IELTS examination, achieving a commendable score of 7. This accomplishment underscores my dedication to mastering the English language and showcases my ability to excel in language proficiency assessments, reflecting positively on my academic and professional capabilities.",
      ],
      website_link: "https://www.byu.edu",
    },
    {
      title: "Federal University of State of Parana",
      subtitle: "Technologist in Information Systems",
      logo_path: "ufpr.png",
      alt_name: "UFPR",
      duration: "2009 - 2012",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, Object Oriented Programming, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course.",
      ],
      website_link: "https://ufpr.br",
    },
    
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "ML",
      logo_path: "machinelearning.png",
      certificate_link:
        "https://cursos.alura.com.br/degree/certificate/d49edba0-dba0-422d-b2d2-c4fa6d12df99?lang=pt_BR",
      alt_name: "Alura",
      color_code: "#0C9D5899",
    },
    {
      title: "Deep Learning",
      subtitle: "DL",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://cursos.alura.com.br/user/hcjardes/course/deep-learning-introducao-com-keras/certificate",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML with NPL",
      subtitle: "NLP",
      logo_path: "nlp.png",
      certificate_link:
        "https://cursos.alura.com.br/user/hcjardes/course/introducao-a-nlp-com-analise-de-sentimento/certificate",
      alt_name: "NLP",
      color_code: "#FFBB0099",
    },
    {
      title: "Data Bricks",
      subtitle: "Data",
      logo_path: "databricks.png",
      certificate_link:
        "https://cursos.alura.com.br/user/hcjardes/course/databricks-conhecendo-ferramenta/certificate",
      alt_name: "DataBricks",
      color_code: "#ffffff",
    },
    {
      title: "Java Spring",
      subtitle: "Spring",
      logo_path: "java_spring.png",
      certificate_link:
        "https://cursos.alura.com.br/user/hcjardes/course/java-spring-primeira-aplicacao-web/certificate",
      alt_name: "Microsoft",
      color_code: "#fffff199",
    },
    {
      title: "Spark",
      subtitle: "",
      logo_path: "spark.png",
      certificate_link:
        "https://cursos.alura.com.br/user/hcjardes/course/spark-modelos-classificacao/certificate",
      alt_name: "Spark",
      color_code: "#1F70C199",
    },
    {
      title: "Open CV",
      subtitle: "Computer Vision",
      logo_path: "opencv.png",
      certificate_link:
        "https://cursos.alura.com.br/user/hcjardes/course/visao-computacional-reconhecimento-texto-ocr-opencv/certificate",
      alt_name: "Opencv",
      color_code: "#FFBB0099",
    },
    {
      title: "Python",
      subtitle: "Python OO",
      logo_path: "python.png",
      certificate_link:
        "https://cursos.alura.com.br/user/hcjardes/course/python-3-avancando-orientacao-objetos/certificate",
      alt_name: "python",
      color_code: "#00000099",
    },
    {
      title: "JavaScript",
      subtitle: "",
      logo_path: "javascript.png",
      certificate_link:
        "https://cursos.alura.com.br/user/hcjardes/course/javascript-programando-na-linguagem-web/certificate",
      alt_name: "JavaScript",
      color_code: "#FFFFFF",
    },
    
      
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "As a dedicated data science enthusiast, I excel in driving process enhancements and automation, showcasing a proven history of delivering tailored solutions for data extraction and transformation. In my role as an Analyst at GVT, I leveraged SQL, Access, and Oracle for report creation, employing JSP and advanced Excel for dynamic charts. With experience in network control for the Paraná State Health System and Linux system automation, I bring a comprehensive skill set. Further, I've honed my expertise through relevant courses, including a Data Science Specialization, focusing on Process Mining, Natural Language Processing, and R Language.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack",
          company: "Celepar",
          company_url: "https://www.celepar.pr.gov.br/",
          logo_path: "celepar.png",
          duration: "Sep 2012 - Current",
          location: "Curitiba, Paraná",
          description:
            "In my journey, I've crafted dynamic web pages using JSP, JavaScript, and CSS, integrating powerful features like Google API for mapping and graphical controls, coupled with database-driven pivot charts that empower informed decision-making. Additionally, I delved into the realm of artificial intelligence, designing a Machine Learning algorithm tailored for Dengue diagnosis, utilizing symptoms as key indicators. Further, I enriched customer interactions by developing a Python-based chatbot, contributing to an elevated and seamless customer experience.",
          color: "#0879bf",
        },
        {
          title: "GVT",
          company: "Data Analist",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "gvt.png",
          duration: "May 2011 - Oct 2012",
          location: "Curitiba, Paraná",
          description:
            "In my professional endeavors, I've not only produced decision-supportive reports through adept utilization of SQL, Access, and Oracle databases but have also navigated the dynamic landscape of web development. Employing JSP and advanced Excel with Macros and programming, I've seamlessly crafted online and dynamic charts, adding a layer of sophistication to data representation. This multifaceted approach underscores my commitment to delivering comprehensive solutions that amalgamate database expertise with cutting-edge web technologies.",
          color: "#9b1578",
        },
        {
          title: "Universal Studio",
          company: "Attractive Attendant",
          company_url: "https://www.universalstudios.com",
          logo_path: "universal.png",
          duration: "Nov 2010 - May 2011",
          location: "Orlando, Florida",
          description:
            "My time working in Orlando was not merely a job; it was an immersive experience into American culture. Serving as an Attraction Attendant at Universal Studios, I not only engaged with visitors but also absorbed the vibrant American atmosphere, gaining invaluable insights into the diverse and dynamic culture. This role went beyond daily tasks; it was an opportunity to contribute to the enchanting world of entertainment while connecting with people from various backgrounds. This experience not only enriched my professional skill set but also deepened my understanding of the nuances of American culture, making it a truly transformative and culturally immersive chapter in my journey.",
          color: "#9b1578",
        },
        {
          title: "Data Analist",
          company: "Max3d",
          company_url: "",
          logo_path: "max3d.jpg",
          duration: "Jan 2010 - Nov 2010",
          location: "Curitiba, Paraná",
          description:
            "In my role, I contributed significantly by not only crafting tailored macros to streamline operations within the company but also by configuring personalized CAD3D software solutions for diverse situations and clients. This bespoke approach not only showcased my technical prowess in macro development but also highlighted my adaptability in catering to unique requirements, ensuring that the CAD3D software aligned seamlessly with the specific needs of each situation and client. This dual proficiency in macro production and software customization underscores my commitment to enhancing efficiency and providing bespoke solutions that resonate with the individualized needs of the company and its clients.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Max3d Intern",
          company: "Max3d",
          company_url: "",
          logo_path: "max3d.jpg",
          duration: "May 2022 - Aug 2022",
          location: "Curitiba, BR",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Celepar Intern",
          company: "Companhia de Informatica do Paraná",
          company_url: "https://www.celepar.pr.gov.br/",
          logo_path: "celepar.png",
          duration: "May 2019 - Sept 2019",
          location: "Curitiba, BR",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        
      ],
    },

  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [

  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jardelc.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "https://github.com/jardelcampos",
    avatar_image_path: "",
  },
  addressSection: {
    
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
