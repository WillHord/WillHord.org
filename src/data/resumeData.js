export const resumeData = {
  workExperience: [
    {
      index: 1,
      title:
        "University of California Santa Cruz - School of Engineering IT Department",
      position: "Software Engineer",
      location: "Santa Cruz, CA",
      dates: "June 2021 - July 2023",
      description: [
        "Sole engineer responsible for the development and maintenance of 50+ websites.",
        "Leveraged Python, JavaScript, and Bash scripting for site creation to reduce development time and cost by more than 25%.",
        "Upgraded and optimized more than a dozen Drupal sites and generated reusable PHP skeleton code for custom web modules, improving site performance and scalability.",
        "Developed new methods for upgrades and migrations to newer Drupal versions, presented solutions to software developers across the University of California system, improved cross-campus collaboration and efficiency.",
      ],
      image: {
        name: "UC Santa Cruz Logo",
        description: "Logo for UC Santa Cruz",
        link: "https://www.ucsc.edu/",
        image: {
          full_size: "/imgs/resumeImages/UCSantaCruzLogo.jpg",
        },
      },
      optionalFile: null,
    },
    {
      index: 2,
      title: "IBM Thomas J. Watson Research Center",
      position: "Machine Learning Research Intern",
      location: "Yorktown Heights, NY",
      dates: "June 2018 - February 2019",
      description: [
        "Led two machine learning medical detection research projects for high-risk patients, improving prediction accuracy for psychosis and drug abuse.",
        "Research peer reviewed, published, and presented at the February 2019 SPIE medical imaging conference.",
        "Designed and implemented a Python-based program with TensorFlow and Scikit-learn to efficiently assess and compare multiple classification and regression models on large datasets, reducing model selection time and improving overall model accuracy by over 15%.",
        "Engineered data cleaning and formatting tools that enhanced machine learning model accuracy by 20% through streamlined preprocessing, ensuring more reliable and consistent results."
      ],
      fileText: "Go To My Paper",
      optionalFile: {
        pk: 2,
        name: "SPIE_2019_paper",
        description:
          "My research paper, Predicting Conversion to Psychosis in Clinical High Risk Patients using Resting-State Functional MRI Features",
        fileupload: "../files/SPIE_2019_paper.pdf",
      },
      image: {
        pk: 3,
        name: "IBM Logo",
        description: "Logo for IBM",
        link: "https://www.research.ibm.com/labs/watson/",
        image: {
          full_size: "/imgs/resumeImages/IBMLogo.jpg",
        },
      },
    },
    {
      index: 3,
      title: "Pelham School District",
      position: "Technology Office Intern",
      location: "Pelham, NY",
      dates: "May - June 2019",
      description: [
        "Coordinated technical logistics for district-wide virtual STEM conference attended by over 2000 students and educators.",
      ],
      fileText: null,
      optionalFile: null,
      image: {
        pk: 4,
        name: "Pelham School District",
        description: "Logo for Pelham School District",
        link: "https://www.pelhamschools.org/",
        image: {
          full_size: "/imgs/resumeImages/PelhamScoolsLogo.jpg",
        },
      },
    },
  ],
  education: [
    {
      index: 1,
      school: "University Of California Santa Cruz",
      degree: "Computer Science B.S.",
      dates: "2019-2023",
      location: "Santa Cruz, CA",
      coursework: [
        "Data structures and Algorithms",
        "Computer Systems and Assembly Language",
        "Embedded Systems and C Programming",
        "Analysis of Algorithms",
        "Computer Architecture",
        "Computer System Design",
        "Computer Graphics",
        "Computer Networks",
        "Artificial Intelligence",
        "Deep Learning",
        "Web Applications",
      ],
      image: {
        pk: 1,
        name: "University Of California Santa Cruz",
        description: "The logo for the University of California Santa Cruz",
        link: "https://www.ucsc.edu/",
        image: {
          full_size: "/imgs/resumeImages/UCSantaCruzLogo.jpg",
        },
      },
    },
    {
      index: 2,
      school: "Dobbs Ferry High School",
      degree: "International Baccalaureate Diploma",
      dates: "2015-2019",
      location: "Dobbs Ferry, NY",
      coursework: [],
      image: {
        pk: 2,
        name: "Dobbs Ferry High School Logo",
        description: "The logo for Dobbs Ferry High School",
        link: "https://www.dfsd.org/hs",
        image: {
          full_size: "/imgs/resumeImages/DobbsFerryHighSchoolLogo.jpg",
        },
      },
    },
  ],
  technicalSkills: {
    programming: [
      "Python",
      "C++",
      "C",
      "React JS",
      "JavaScript",
      "HTML",
      "PHP",
      "SQL",
      "MATLAB",
      "Java",
      "CSS",
      "R",
      "C#",
    ],
    software: [
      "Git",
      "Apache HTTP Server Management",
      "DevOps",
      "Agile Software Development",
      "LaTeX",
      "Django",
      "Arduino",
      "Windows",
      "MacOS",
      "Linux",
      "TensorFlow",
    ],
  },
  awards: [
    {
      index: 1,
      title: "Westlake Regional Science Fair - 3rd Place",
      description:
        "– Testing Quantum Encryption Protocols in Real-life Situations Using Secure Quantum Tunnels",
      date: "2018",
    },
    {
      index: 2,
      title: "International Baccalaureate Award",
      description:
        "Developed a school-wide program to integrate technology into classrooms",
      date: "2019",
    },
    {
      index: 3,
      title: "Eagle Scout",
      description:
        "Organized and led service project to build an outdoor classroom at local elementary school to teach students about ecological issues and sustainability",
      date: "2018",
    },
  ],
  publications: [
    {
      index: 1,
      title:
        "Predicting Conversion to Psychosis in Clinical High Risk Patients using Resting-State Functional MRI Features SPIE. Jolie McDonnell, William Hord, et al.",
      description: "Presented at the SPIE Medical Imaging Conference",
      date: "March 2019",
    },
  ],
  memberships: [
    {
      index: 1,
      title: "Cruz Hacks",
      description:
        "Developed an iOS app to detect recyclable materials using machine learning and computer vision",
      date: "January 2020",
    },
    {
      index: 2,
      title: "Slugbotics",
      description:
        "Facilitating the design, materials sourcing, and fabrication of a 15lb BattleBot for use in the February 2022 Sacramento Battle Bot competition",
      date: "September 2019 - June 2023",
    },
    {
      index: 3,
      title: "Formula Slug",
      description:
        "Collaborated with team to design components for small electric vehicle using SolidWorks and 3D printing",
      date: "September 2019 - 2021",
    },
  ],
};
