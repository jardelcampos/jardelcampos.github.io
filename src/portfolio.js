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
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
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
            backgroundColor: "#FFFFFF",
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
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "Alura",
      logo_path: "machinelearning.png",
      certificate_link:
        "https://cursos.alura.com.br/formacao-machine-learning-v1501",
      alt_name: "Alura",
      color_code: "#0C9D5899",
    },
    {
      title: "Deep Learning",
      subtitle: "Alura",
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
        "https://cursos.alura.com.br/course/nlp-corretor-ortografico",
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
        "https://cursos.alura.com.br/course/spark-apresentando-ferramenta",
      alt_name: "Spark",
      color_code: "#1F70C199",
    },
    {
      title: "Open CV",
      subtitle: "Computer Vision",
      logo_path: "alura.png",
      certificate_link:
        "https://cursos.alura.com.br/course/visao-computacional-reconhecimento-texto-ocr-opencv",
      alt_name: "Opencv",
      color_code: "#0C9D5899",
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
      logo_path: "alura.png",
      certificate_link:
        "https://cursos.alura.com.br/course/javascript-programando-na-linguagem-web",
      alt_name: "JavaScript",
      color_code: "#2A73CC",
    },
    
      
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Celepar",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "GVT",
          company: "Data Analist",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Data Analist",
          company: "Max3d",
          company_url: "",
          logo_path: "max3d.jpg",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "",
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
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
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
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
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
