import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Resume as ResumeType, TechnicalSkills } from "@/types/resume";
import Image from "next/image";
import type React from "react";
import type { ReactElement } from "react";

import { cn } from "@/lib/utils";

interface ResumeProps {
	data: ResumeType;
	className?: string;
}

function capitalizeFirstLetter(value: string) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

const SectionTitle: React.FC<{
	children: ReactElement<any> | ReactElement<any>[] | string;
}> = ({ children }) => (
	<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
		{children}
		<Separator className="mb-2" />
	</h4>
);

const Resume: React.FC<ResumeProps> = ({ data, className }) => {
	return (
		<Card className={cn("md:w-4/5 bg-background/85", className)}>
			<CardHeader>
				<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center pt-4">
					Resume
				</h2>
			</CardHeader>
			<CardContent>
				<section className="pb-12">
					<SectionTitle>Work Experience</SectionTitle>
					{data.workExperience.map((item, index) => (
						<div key={`${index}-${item.title}`} className="py-4">
							<a
								href={item.image.link}
								target="_blank"
								rel="noreferrer"
								className="hidden lg:block lg:mr-4"
							>
								<div className="float-left pr-4">
									<Image
										src={item.image.image.full_size}
										alt={item.image.description}
										width={64}
										height={64}
										className="w-16 h-16 float-left object-contain bg-white rounded-full "
									/>
								</div>
							</a>
							<b>{item.title}</b>
							<b className="float-right">{item.location}</b>
							<br />
							<i>{item.position}</i>
							<i className="float-right">{item.dates}</i>
							<ul className="sm:list-['-_'] pt-3 lg:mt-4">
								{item.description.map((desc, index) => (
									<li key={`${index}-${desc}`} className="py-1">
										{desc}
									</li>
								))}
							</ul>
							{item.optionalFile && (
								<div className="flex justify-center ">
									<Button
										variant={"outline"}
										className="mt-4 border-white hover:bg-white hover:text-black"
										asChild
									>
										<a
											href={item.optionalFile.fileupload}
											target="_blank"
											rel="noreferrer"
										>
											View My Paper
										</a>
									</Button>
								</div>
							)}
						</div>
					))}
				</section>
				<section className="pb-6">
					<SectionTitle>Education</SectionTitle>
					{data.education.map((item, index) => (
						<div key={`${index}-${item.degree}`}>
							<div className="py-8 flex items-center">
								<a
									href={item.image.link}
									target="_blank"
									rel="noreferrer"
									className="hidden lg:block lg:mr-4"
								>
									<div className="float-left pr-4">
										<Image
											src={item.image.image.full_size}
											alt={item.image.description}
											width={64}
											height={64}
											className="w-16 h-16 float-left object-contain bg-white rounded-full "
										/>
									</div>
								</a>
								<div className="grow">
									<b className="">{item.school}</b>
									<b className="float-right">{item.location}</b>
									<br />
									<i className="">{item.degree}</i>
									<i className="float-right">{item.dates}</i>
								</div>
							</div>
						</div>
					))}
				</section>
				<section className="pb-6">
					<SectionTitle>Technical Skills</SectionTitle>
					{Object.keys(data.technicalSkills).map(
						(key: string, index: number) => (
							<div key={`${index}-${key}`} className="py-1">
								<b>
									{key !== "tools_other"
										? capitalizeFirstLetter(key)
										: "Tools & Other"}
								</b>
								:{" "}
								{data.technicalSkills[key as keyof TechnicalSkills].map(
									(skill: string, index: number) => (
										<>
											<span key={`${index}-${skill}`}>{skill}</span>
											{index <
												data.technicalSkills[key as keyof TechnicalSkills]
													.length -
													1 && <span>, </span>}
										</>
									),
								)}
							</div>
						),
					)}
				</section>
				<section className="pb-12">
					<SectionTitle>Awards and Publications</SectionTitle>
					<div>
						{data.publications.map((item, index) => (
							<div key={`${index}-${item.title}`} className="py-4">
								<b>{item.title}</b>
								<i> {item.date}</i>
							</div>
						))}
					</div>
					<ul>
						{data.awards.map((award, index) => (
							<li key={`${index}-${award.title}`} className="py-1">
								<b>{award.title}</b> -<i> {award.description}</i>
							</li>
						))}
					</ul>
				</section>

				<div className="flex justify-center py-4">
					<Button
						variant={"outline"}
						size={"lg"}
						className="border-white hover:bg-white hover:text-black"
						asChild
					>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="../files/Will_Hord-Resume.pdf"
						>
							Full Resume
						</a>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};

export default Resume;
