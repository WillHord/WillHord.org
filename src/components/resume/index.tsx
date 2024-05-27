"use client";
import type { Resume as ResumeType, TechnicalSkills } from "@/types/resume";
import type React from "react";
import type { ReactElement } from "react";
import { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { ChevronDown, ChevronUp } from "lucide-react";

interface ResumeProps {
	data: ResumeType;
}

function capitalizeFirstLetter(value: string) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

const SectionTitle: React.FC<{
	children: ReactElement | ReactElement[] | string;
}> = ({ children }) => (
	<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
		{children}
		<Separator className="mb-2" />
	</h4>
);

const Resume: React.FC<ResumeProps> = ({ data }) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	return (
		<div className="w-full py-4 flex flex-1 justify-center p-4">
			<div className="max-w-[1024px] w-[700px]">
				<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center pt-4">
					Resume
				</h2>
				<section>
					<SectionTitle>Education</SectionTitle>
					{data.education.map((item, index) => (
						<div key={`${index}-${item.degree}`}>
							<div className="py-4">
								<a href={item.image.link} target="_blank" rel="noreferrer" className="hidden lg:block">
									<Image
										src={item.image.image.full_size}
										alt={item.image.description}
                                        width={64}
                                        height={64}
										className="w-16 h-16 float-left object-fill bg-white rounded-full -ml-24"
									/>
								</a>

								<b className="">{item.school}</b>
								<b className="float-right">{item.location}</b>
								<br />
								<i className="">{item.degree}</i>
								<i className="float-right">{item.dates}</i>
								{item.coursework && item.coursework.length > 0 && (
									<div className="pt-3">
										<b>Relevant Coursework:</b>
										<br />
										<ul>
											{item.coursework
												.slice(0, isExpanded ? item.coursework.length : 3)
												.map((course, index) => (
													<li key={`${index}-${course}`}>{course}</li>
												))}
											<div className="flex justify-center items-center py-4">
												{isExpanded ? (
													<ChevronUp
														size={24}
														className="cursor-pointer"
														onClick={() => setIsExpanded(false)}
													/>
												) : (
													<ChevronDown
														size={24}
														className="cursor-pointer"
														onClick={() => setIsExpanded(true)}
													/>
												)}
											</div>
										</ul>
									</div>
								)}
							</div>
						</div>
					))}
				</section>
				<section>
					<SectionTitle>Work Experience</SectionTitle>
					{data.workExperience.map((item, index) => (
						<div key={`${index}-${item.title}`} className="py-4">
                            <a href={item.image.link} target="_blank" rel="noreferrer" className="hidden lg:block">
									<Image
										src={item.image.image.full_size}
										alt={item.image.description}
                                        width={64}
                                        height={64}
										className="w-16 h-16 float-left object-contain bg-white rounded-full -ml-24"
									/>
								</a>
							<b>{item.title}</b>
							<b className="float-right">{item.location}</b>
							<br />
							<i>{item.position}</i>
							<i className="float-right">{item.dates}</i>
							<ul className="sm:list-['-_'] pt-3">
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
										className="border-white hover:bg-white hover:text-black"
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
				<section>
					<SectionTitle>Technical Skills</SectionTitle>
					{Object.keys(data.technicalSkills).map(
						(key: string, index: number) => (
							<div key={`${index}-${key}`} className="py-4">
								<b>{capitalizeFirstLetter(key)}</b>:{" "}
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
				<section>
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
				<section>
					<SectionTitle>Memberships</SectionTitle>
					{data.memberships.map((membership, index) => (
						<div key={`${index}-${membership.title}`} className="py-2">
							<b>{membership.title}</b>
							<i className="float-right">{membership.date}</i>
							<br />
							<p className="pt-1">{membership.description}</p>
						</div>
					))}
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
			</div>
		</div>
	);
};

export default Resume;
