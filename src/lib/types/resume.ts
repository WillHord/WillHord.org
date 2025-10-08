import { z } from "zod";

// NOTE: No extra paper or award data

const file = z.object({
	name: z.string(),
	description: z.string(),
	href: z.string(),
	title: z.string(),
});

const image = z.object({
	name: z.string(),
	alt: z.string().optional(),
	url: z.string(),
	link: z.string().url().optional(),
});

export const awardData = z.object({ title: z.string(), date: z.string() });
export const paperData = z.object({ title: z.string(), date: z.string() });
export const certData = z.object({ from: z.string(), year: z.string() });
export const skillData = z.array(z.string());

export const educationData = z.object({
	location: z.string(),
	dates: z.string(),
	degree: z.string(),
});

export const experienceData = z.object({
	location: z.string(),
	details: z.array(z.string()),
	role: z.string(),
	dates: z.string(),
});

export const supplimentalExperienceData = experienceData.partial().extend({
	new: z.boolean().optional(),
	image: image.optional(),
	file: file.optional(),
});

export const supplimentalEducationData = educationData.partial().extend({
	new: z.boolean().optional(),
	image: image.optional(),
	file: file.optional(),
});

export const supplimentalCertData = certData.partial().extend({
	new: z.boolean().optional(),
});

export const resumeData = z
	.object({
		experience: z.record(
			z.string(),
			experienceData.or(supplimentalExperienceData),
		),
		education: z.record(
			z.string(),
			educationData.or(supplimentalEducationData),
		),
		skills: z.record(z.string(), z.array(z.string())),
		publications: z.array(paperData),
		certs: z.record(z.string(), certData.or(supplimentalCertData)),
		awards: z.array(awardData),
	})
	.partial();

export type Education = z.infer<typeof supplimentalEducationData>;
export type WorkExperience = z.infer<typeof supplimentalExperienceData>;
export type Skills = z.infer<typeof skillData>;
export type Papers = z.infer<typeof paperData>;
export type Awards = z.infer<typeof awardData>;
export type Certs = z.infer<typeof certData>;

export type Resume = z.infer<typeof resumeData>;

const schemas = {
	experience: {
		base: experienceData,
		supplimental: supplimentalExperienceData,
	},
	education: { base: educationData, supplimental: supplimentalEducationData },
	certs: { base: certData, supplimental: supplimentalCertData },
};

export function detectSchema(obj: unknown) {
	for (const [name, schema] of Object.entries(schemas)) {
		const result = z.record(z.string(), schema.base).safeParse(obj);
		if (result.success) {
			return { schema };
			// return { name, schema.supplimental, data: result.data };
		}
	}
	return null;
}
