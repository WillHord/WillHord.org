import type { ZodObject, z } from "zod";
import { detectSchema, type Resume } from "$lib/types/resume";

function mergeRecords<
	BaseSchema extends ZodObject<any>,
	SupSchema extends ZodObject<any>,
>(
	base: Record<string, unknown>,
	sup: Record<string, unknown>,
	baseSchema: BaseSchema,
	supplementalSchema: SupSchema,
): Record<string, z.infer<typeof baseSchema>> {
	const result: Record<string, z.infer<typeof baseSchema>> = {};

	for (const [key, value] of Object.entries(base)) {
		const parsed = baseSchema.safeParse(value);
		if (parsed.success) {
			result[key] = parsed.data;
		} else {
			console.warn(`Skipping invalid base entry "${key}"`, parsed.error.errors);
		}
	}

	for (const [key, value] of Object.entries(sup)) {
		const parsed = supplementalSchema.safeParse(value);
		if (!parsed.success) {
			console.warn(
				`Skipping invalid supplemental entry "${key}"`,
				parsed.error.errors,
			);
			continue;
		}

		const data = parsed.data as any;

		if (data.new) {
			const full = baseSchema.safeParse(data);
			if (full.success) {
				result[key] = data;
			} else {
				console.warn(
					`Skipping new entry "${key}" (incomplete data)`,
					full.error.errors,
				);
			}
		} else if (key in result) {
			const merged = {
				...result[key],
				...data,
			};
			result[key] = merged;
		}
	}

	return result;
}

function normalizeKey(key: string) {
	return key.trim().replace(/:$/, "");
}

function mergeRecordArrays(
	a: Record<string, string[]>,
	b: Record<string, string[]>,
): Record<string, string[]> {
	const result: Record<string, string[]> = {};
	const allKeys = new Set([
		...Object.keys(a).map(normalizeKey),
		...Object.keys(b).map(normalizeKey),
	]);

	for (const key of allKeys) {
		const aKey = Object.keys(a).find((k) => normalizeKey(k) === key);
		const bKey = Object.keys(b).find((k) => normalizeKey(k) === key);

		const combined = new Set([
			...(aKey ? a[aKey] : []),
			...(bKey ? b[bKey] : []),
		]);
		result[key] = Array.from(combined);
	}

	return result;
}

export function mergeResume(
	scraped_resume: Resume,
	supplimental_data: Resume,
): Resume {
	const final = scraped_resume as Resume;

	const supplimental_keys = Object.keys(supplimental_data);

	// NOTE: No extra paper or award data
	Object.entries(scraped_resume).forEach(([key, value], idx) => {
		if (supplimental_keys.includes(key)) {
			if (["experience", "education", "certs"].includes(key)) {
				const detected_schema = detectSchema(value);
				if (!detected_schema) {
					throw new Error("No schema for " + key);
				}

				final[key] = mergeRecords(
					value,
					supplimental_data[key],
					detected_schema.schema.base,
					detected_schema.schema.supplimental,
				);
			} else if (key === "skills" && supplimental_data[key]) {
				final[key] = mergeRecordArrays(value, supplimental_data[key]);
			}
		}
	});
	return final;
}
