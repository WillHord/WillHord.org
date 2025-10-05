export type AwardData = { title: string; date: string };
export type PaperData = { title: string; date: string };

export type CertData = {
	from: string;
	year: string;
};

export type EducationData = {
	location: string;
	school: string;
	dates: string;
	degree: string;
};

export type JobExperienceData = {
	location: string;
	details: string[];
	role: string;
	dates: string;
};

export type ScrapedResumeData = {
	experiences: Record<string, JobExperienceData>;
	education: Record<string, EducationData>;
	certs: Record<string, CertData>;
	publications: PaperData[];
	awards: AwardData[];
	skills: Record<string, string[]>;
};
