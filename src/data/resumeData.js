export const resumeData = {
  workExperience: [
    {
      index: 1,
      title:
        "University of California Santa Cruz - School of Engineering IT Department",
      position: "Software Engineering Assistant Developer",
      location: "Santa Cruz, CA",
      dates: "June 2021 - June 2023",
      description: [
        "Built more than 20 and maintaining over 150 websites - managing content, users, and design",
        "Streamlining website maintenance and development processes, including upgrading more than a dozen Drupal sites and generating PHP skeleton code for custom web modules",
        "Designing custom Python, JavaScript, and Bash scripts to enhance user experience",
        "Developed methods on upgrading and migrating sites to newer versions of Drupal and presented to software developers from multiple campuses across the University of California system",
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
        "Conducted independent machine learning research projects - published in a scientific research paper presented at the February 2019 SPIE medical imaging conference",
        "Developed program to test multiple classification and regression models efficiently on a given dataset using Python, TensorFlow, and Scikit-learn",
        "Engineered tools to clean and format datasets to optimize machine learning model accuracy",
      ],
      fileText: "Go To My Paper",
      optionalFile: {
        pk: 2,
        name: "SPIE_2019_paper",
        description:
          "My research paper, Predicting Conversion to Psychosis in Clinical High Risk Patients using Resting-State Functional MRI Features",
        fileupload: "/files/SPIE_2019_paper.pdf",
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
        "Provided hardware, software, and networking consultation for the district",
        "Coordinated technical logistics for district-wide virtual STEM conference",
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
      dates: "2019-Current",
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
