import type { Image } from "./image";

interface ResumeImage extends Image {
    description: string;
    link: string;
}

interface File {
    pk: number;
    name: string;
    description: string;
    fileupload: string;
}

export interface WorkExperience {
    index: number;
    title: string;
    position: string;
    location: string;
    dates: string;
    description: string[];
    image: ResumeImage;
    optionalFile?: File;
}

export interface Education {
    index: number;
    school: string;
    degree: string;
    dates: string;
    location: string;
    coursework?: string[];
    image: ResumeImage;
}

export interface TechnicalSkills {
    programming: string[];
    software: string[];
}

export interface Award {
    index: number;
    title: string;
    description: string;
    date: string;
}

export interface Publication {
    index: number;
    title: string;
    description: string;
    date: string;
}

export interface Membership {
    index: number;
    title: string;
    description: string;
    date: string;
}

export interface Resume {
    workExperience: WorkExperience[];
    education: Education[];
    technicalSkills: TechnicalSkills;
    awards: Award[];
    publications: Publication[];
    memberships: Membership[];
}