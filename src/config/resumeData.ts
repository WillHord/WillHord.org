import type { Resume as ResumeType } from "@/types/resume";

export const resumeData: ResumeType = {
	workExperience: [
		{
			index: 1,
			title: "NASA",
			position: "Software Engineer Intern - Machine Learning",
			location: "Greenbelt, MD",
			dates: "September 2024 - August 2025",
			description: [
				"Led the development, training, and testing of machine learning models for the classification of exoplanet candidates using time series light curve data, improving detection accuracy and efficiency.",
				"Designed and implemented a data pipeline to automatically process and analyze new TESS telescope data, streamlining the detection of exoplanet candidates and prioritizing them for further study.",
				"Created a comprehensive dataset of tens of thousands of exoplanet light curves, non-planetary light curves, and false positive eclipsing binary star system data ensuring high quality input for model training.",
			],
			image: {
				name: "NASA Logo",
				description:
					"Logo for the National Aeronautics and Space Administration",
				link: "https://www.nasa.gov/",
				image: {
					full_size: "/imgs/resumeImages/nasa_logo.png",
				},
			},
			optionalFile: null,
		},
		{
			index: 1,
			title: "Dairy Fit",
			position: "Machine Learning Engineer Intern",
			location: "Remote",
			dates: "June 2024 – September 2024",
			description: [
				"Contributed to the development of machine learning models for analyzing cows using 3D scans and images, aimed at helping farmers make informed decisions on livestock management.",
				"Engineered and optimized deep learning models and pipelines for semantic segmentation of LiDAR data, leveraging state-of-the-art 3D machine learning techniques.",
				"Completed advanced training in 3D machine learning and computer vision, focusing on the end-to-end process of handling 3D data such as point clouds, voxels, and LiDAR data.",
			],
			image: {
				name: "Dairy Fit Logo",
				description: "Dairy Fit Logo",
				link: "https://cowtechanalytics.com/",
				image: {
					full_size: "/imgs/resumeImages/cowfaceGP-1.jpg",
				},
			},
			optionalFile: null,
		},
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
				"Engineered data cleaning and formatting tools that enhanced machine learning model accuracy by 20% through streamlined preprocessing, ensuring more reliable and consistent results.",
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
		languages: [
			"Python",
			"C++",
			"C",
			"React JS",
			"Typescript",
			"JavaScript",
			"PHP",
			"HTML",
			"SQL (MySQL, Postgres, SQLite)",
			// "MATLAB",
			"Java",
			"Rust",
			// "CSS",
			// "R",
			// "C#",
		],
		technologies: [
			// "Git",
			"Apache HTTP Server Management",
			"DevOps",
			"Agile Software Development",
			"LaTeX",
			"Django",
			"Flask",
			"Arduino",
			// "Windows",
			// "MacOS",
			// "Linux",
			"TensorFlow",
		],
		tools_other: ["Git", "Linux", "Cloud (AWS, GCP)"],
	},
	awards: [
		{
			index: 1,
			title: "Westlake Regional Science Fair - 3rd Place",
			description:
				"Testing Quantum Encryption Protocols in Real-life Situations Using Secure Quantum Tunnels",
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
