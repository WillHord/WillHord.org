"use client";
import type React from "react";
import type { Project } from "@/types/projects";
import { useState } from "react";
import Image from "next/image";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogClose,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Icons } from "@/components/icons";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProjectCardProps {
	project: Project;
	className?: string;
	style?: React.CSSProperties;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	project,
	className,
	style = {},
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Card
				className={cn(
					className,
					"w-60 h-48 flex justify-center items-center group hover:bg-gray-800/80 hover:cursor-pointer transition-all duration-300 border-0 rounded-none",
				)}
				onClick={() => setIsOpen(true)}
				style={{ ...style }}
			>
				<div className={cn(className,"w-60 h-48 relative group-hover:opacity-30 transition-opacity duration-300")}
				style={{ ...style }}
				>
					<Image
						src={project.img.image.full_size}
						alt="Project Image"
						fill
						className={cn(className,"object-cover")}
						style={{ ...style }}
					/>
				</div>
				<CardHeader className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 text-center text-pretty select-none">
					<CardTitle>{project.name}</CardTitle>
				</CardHeader>
			</Card>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="sm:max-w-[650px] h-[80vh] flex flex-col p-0">
					<div className="h-1/2 relative rounded-lg overflow-hidden">
						<Image
							src={project.img.image.full_size}
							alt="Project Image"
							fill
							className="object-contain"
						/>
					</div>
					<Separator />
					<div className="flex-1 p-6 pt-2 flex flex-col">
						<DialogHeader className="mb-4">
							<DialogTitle>{project.name}</DialogTitle>
							<DialogClose />
						</DialogHeader>
						<DialogDescription className="flex-1">
							<p className="text-md">{project.description}</p>
						</DialogDescription>
						<DialogFooter>
							<div className="w-full h-8 flex flex-row gap-3 items-center">
								<h5>Technologies Used:</h5>
								{project.languages.map((language, index) => (
									<h6 key={`${index}-${language}`} className="underline">
										{language}
									</h6>
								))}
							</div>
							<a
								target="_blank"
								rel="noreferrer"
								href={project.link}
								className="hover:opacity-50 transition-opacity duration-300"
							>
								<Button variant={"link"}>
									<Icons.gitHub className="h-6 w-6" />
									<ChevronRight className="h-6 w-6" />
								</Button>
							</a>
						</DialogFooter>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};
