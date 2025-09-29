import type { Image } from "./image";

export interface Project {
	weight: number;
	name: string;
	description: string;
	link: string;
	displayed: boolean;
	img: Image;
	languages: string[];
	teaser?: string;
}
