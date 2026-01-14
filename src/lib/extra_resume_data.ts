import type { Resume } from "$lib/types/resume";

export const supplimental_data: Resume = {
	experience: {
		NASA: {
			location: "Greenbelt, MD",
			dates: "September 2024 - August 2025",
			image: {
				name: "NASA Logo",
				alt: "Logo for the National Aeronautics and Space Administration",
				link: "https://www.nasa.gov/",
				url: "/imgs/resumeImages/nasa_logo.png",
			},
		},
		"Dairy FIT": {
			location: "Remote",
			dates: "June 2024 – September 2024",
			image: {
				name: "Dairy Fit Logo",
				alt: "Dairy Fit Logo",
				link: "https://cowtechanalytics.com/",
				url: "/imgs/resumeImages/cowfaceGP-1.jpg",
			},
		},
		"University of California Santa Cruz – School of Engineering IT Department":
			{
				location: "Santa Cruz, CA",
				dates: "June 2021 - July 2023",
				image: {
					name: "UC Santa Cruz Logo",
					alt: "Logo for UC Santa Cruz",
					link: "https://www.ucsc.edu/",
					url: "/imgs/resumeImages/UCSantaCruzLogo.jpg",
				},
			},
		"IBM Watson Research Center": {
			location: "Yorktown Heights, NY",
			dates: "June 2018 - February 2019",
			file: {
				name: "SPIE_2019_paper",
				description:
					"My research paper, Predicting Conversion to Psychosis in Clinical High Risk Patients using Resting-State Functional MRI Features",
				href: "../files/SPIE_2019_paper.pdf",
				title: "Go To My Paper",
			},
			image: {
				name: "IBM Logo",
				alt: "Logo for IBM",
				link: "https://research.ibm.com/",
				url: "/imgs/resumeImages/IBMLogo.jpg",
			},
		},
		"Pelham School District": {
			location: "Pelham, NY",
			dates: "May - June 2019",
			image: {
				name: "Pelham School District",
				alt: "Logo for Pelham School District",
				link: "https://www.pelhamschools.org/",
				url: "/imgs/resumeImages/PelhamScoolsLogo.jpg",
			},
		},
	},
	education: {
		"University of California Santa Cruz - Baskin School of Engineering": {
			image: {
				name: "University Of California Santa Cruz",
				alt: "The logo for the University of California Santa Cruz",
				link: "https://www.ucsc.edu/",
				url: "/imgs/resumeImages/UCSantaCruzLogo.jpg",
			},
		},
		"Dobbs Ferry High School": {
			new: true,
			location: "Dobbs Ferry, NY",
			degree: "International Baccalaureate Diploma",
			dates: "2015-2019",
			image: {
				name: "Dobbs Ferry High School Logo",
				alt: "The logo for Dobbs Ferry High School",
				link: "https://www.dfsd.org/hs",
				url: "/imgs/resumeImages/DobbsFerryHighSchoolLogo.jpg",
			},
		},
	},
	skills: {
		Languages: [
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
		Technologies: [
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
		"Tools & Other": ["Git", "Linux", "Cloud (AWS, GCP)", "neovim"],
	},
	publications: [
		{
			title:
				"Predicting Conversion to Psychosis in Clinical High Risk Patients using Resting-State Functional MRI Features SPIE. Jolie McDonnell, William Hord, et al.",
			date: "March 2019",
		},
	],
	awards: [
		{
			title: "Westlake Regional Science Fair - 3rd Place",
			date: "2018",
		},
		{
			title: "International Baccalaureate Award",
			date: "2019",
		},
		{
			title: "Eagle Scout",
			date: "2018",
		},
	],
	certs: {
		test_cert: {
			from: "someone",
			year: "2035",
			new: true,
		},
	},
};
