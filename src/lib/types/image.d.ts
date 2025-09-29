export interface ImageSizes {
	full_size: string;
}

export interface Image {
	name: string;
	content?: string;
	image: ImageSizes;
	pk?: number;
}
