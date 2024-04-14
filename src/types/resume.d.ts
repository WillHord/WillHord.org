import type { Image } from "./image";

interface File {
    pk: number;
    name: string;
    description: string;
    fileUpload: string;
}

export interface WorkExperience {
    index: number;
    title: string;
    position: string;
    location: string;
    dates: string;
    description: string[];
    image: Image;
    optionalFile?: File;
}

export interface Education {
    index: number;
    school: string;
    degree: string;
    dates: string;
    location: string;
    coursework?: string[];
    image: Image;
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