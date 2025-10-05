import * as cheerio from "cheerio";
import he from "he";

import type {
	AwardData,
	CertData,
	EducationData,
	JobExperienceData,
	PaperData,
	ScrapedResumeData,
} from "$lib/types/scraped_resume";

function normalizeText(text: string): string {
	return he
		.decode(text) // decode HTML entities
		.replace(/\u00A0/g, " ") // replace non-breaking spaces
		.replace(/\s+/g, " ") // collapse whitespace
		.trim()
		.toLowerCase();
}

function getSections(html: string, sections: string[]) {
	const $ = cheerio.load(html);

	const knownSections = sections.map((s) => normalizeText(s));

	const found_sections: Record<string, string> = {};

	$("p > strong").each((_, elem) => {
		const titleRaw = $(elem).text();
		const title = normalizeText(titleRaw);

		if (!knownSections.includes(title)) return;

		let htmlContent = "";
		let next = $(elem).parent().next();

		while (next.length) {
			const strongChild = next.find("strong");
			if (strongChild.length) {
				const nextTitle = normalizeText(strongChild.text());
				if (knownSections.includes(nextTitle)) break;
			}

			htmlContent += $.html(next);
			next = next.next();
		}

		found_sections[titleRaw.trim()] = htmlContent.trim();
	});

	return found_sections;
}

export function ScrapeResume(
	html: string,
	resume_sections: string[],
): ScrapedResumeData {
	// const html = fs.readFileSync(file_path, "utf8");

	const sections = getSections(html, resume_sections);

	if (Object.keys(sections).length < resume_sections.length) {
		resume_sections.forEach((sec) => {
			if (!sections[sec]) {
				throw new Error(`Section '${sec}' not found in resume`);
			}
		});
	}

	// EXPERIENCE SECTION
	let expHtml = sections.Experience;
	let $$ = cheerio.load(expHtml);

	const experiences: Record<string, JobExperienceData> = {};

	$$("p > strong").each((_, elem) => {
		const title = $$(elem).text().trim();
		if (title === "") {
			return;
		}

		const matches = title.match(/^(.*)\t(.*)$/);
		const company = matches[1];
		const location = matches[2];

		let next = $$(elem).parent().next();

		const emElements = $$(elem).parent().next().find("em");
		const role = $$(emElements.get(0)).text().trim();
		const dates = $$(emElements.get(1)).text().trim();

		const details: string[] = [];
		next = next.next();

		if (next.is("ul")) {
			next.find("li").each((_, li) => {
				details.push($$(li).text().trim());
			});
			next = next.next();
		}

		experiences[company] = {
			location: location,
			details: details,
			role: role,
			dates: dates,
		};
	});
	// END Experience Section

	// EDUCATION SECTION
	expHtml = sections.Education;
	$$ = cheerio.load(expHtml);

	const education: Record<string, EducationData> = {};

	$$("p > strong").each((_, elem) => {
		const title = $$(elem).text().trim();
		if (title === "") {
			return;
		}

		const matches = title.match(/^(.*)\t(.*)$/);
		const school = matches[1];
		const location = matches[2];

		const degree_date = $$(elem)
			.parent()
			.next()
			.text()
			.trim()
			.match(/^(.*)\t(.*)$/);
		const degree = degree_date[1];
		const dates = degree_date[2];

		education[title] = {
			school: school,
			location: location,
			dates: dates,
			degree: degree,
		};
	});
	// END EDUCATION SECTION

	// CERTIFICATIONS SECTION
	expHtml = sections.Certifications;
	$$ = cheerio.load(expHtml);

	const certs: Record<string, CertData> = {};

	$$("li").each((_, elem) => {
		const data = $$(elem).text().trim();

		const matches = data.match(/^(.*)\s[–-]\s(.*)\t(.*)$/);

		// TODO: raise if any matches 1-3 is null
		const title = matches[1];
		const from = matches[2];
		const year = matches[3];

		certs[title] = {
			from: from,
			year: year,
		};
	});
	// END CERTIFICATIONS SECTION

	// AWARDS & PUBLICATIONS SECTION
	expHtml = sections["Awards & Publications"];

	$$ = cheerio.load(`<div id="wrapper">${expHtml}</div>`);

	const preUlPs: string[] = [];
	let foundFirstUl = false;

	$$("#wrapper")
		.children()
		.each((_, node) => {
			const $node = $$(node);

			if (!foundFirstUl) {
				if ($node.is("ul")) {
					foundFirstUl = true;
				} else if ($node.is("p")) {
					preUlPs.push($node.text().trim());
				}
			}
		});

	let remainingHtml = "";
	foundFirstUl = false;

	$$("#wrapper")
		.children()
		.each((_, node) => {
			const $node = $$(node);
			if (!foundFirstUl && $node.is("ul")) {
				foundFirstUl = true;
			}
			if (foundFirstUl) {
				remainingHtml += $$.html($node);
			}
		});

	const papers: PaperData[] = [];
	const paper_matches = preUlPs
		.join(" ")
		.matchAll(/^(.*et\sal.)\s(\w+\s[0-9]*)/gms);
	paper_matches.forEach((m) => {
		papers.push({ title: m[1].trim(), date: m[2].trim() });
	});

	const $$$ = cheerio.load(`<div id="wrapper">${remainingHtml}</div>`);

	const awards: AwardData[] = [];

	$$$("#wrapper ul").each((_, ul) => {
		const $ul = $$$(ul);

		$ul.find("li").each((_, li) => {
			const $li = $$$(li);

			// 1. Get date from last <em> inside <li>
			const ems = $li.find("em");
			let date = "";
			if (ems.length > 0) {
				date = $$$(ems[ems.length - 1])
					.text()
					.trim();
			}

			const titleParts: string[] = [];

			$li.contents().each((i, node) => {
				const $node = $$$(node);
				if (node.tagName === "em" && i === $li.contents().length - 1) return;
				titleParts.push($node.text().trim());
			});

			const nextP = $li.parent().next("p");
			if (nextP.length) {
				titleParts.push(nextP.text().trim());
			}

			const title = titleParts.join(" ").replace(/\s+/g, " ").trim();

			awards.push({ title, date });
		});
	});
	// END AWARDS AND PUBLICATIONS SECTION

	// SKILLS SECTION
	expHtml = sections.Skills;
	$$ = cheerio.load(`<div id="wrapper">${expHtml}</div>`);

	const skills: Record<string, string[]> = {};

	$$("p").each((_, p) => {
		const $p = $$(p);
		const key = $p.find("strong").first().text().replace(/:$/, "").trim();

		$p.find("strong").first().remove();
		const valueStr = $p.text().trim();

		const matches = valueStr.match(/[^,()]+(?:\([^)]*\))?/g);

		if (matches) {
			skills[key] = matches.map((s) => s.trim());
		} else {
			skills[key] = [];
		}
	});

	// END SKILLS SECTION

	return {
		experiences: experiences,
		education: education,
		certs: certs,
		publications: papers,
		awards: awards,
		skills: skills,
	};
}
