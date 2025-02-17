"use client";
import type { Project } from "@/types/projects";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

import { Icons } from "@/components/icons";

import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

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
				<div
					className={cn(
						className,
						"w-60 h-48 relative group-hover:opacity-30 transition-opacity duration-300",
					)}
					style={{ ...style }}
				>
					<Image
						src={project.img.image.full_size}
						alt="Project Image"
						fill
						className={cn(className, "object-cover")}
						style={{ ...style }}
					/>
				</div>
				<CardHeader className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 text-center text-pretty select-none">
					<CardTitle>{project.name}</CardTitle>
				</CardHeader>
			</Card>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="sm:max-w-[550px] h-[80vh] flex flex-col p-0">
					<div className="h-1/2 relative rounded-lg overflow-hidden">
						<Image
							src={project.img.image.full_size}
							alt="Project Image"
							fill
							className="object-contain"
						/>
					</div>
					{/* <Separator /> */}
					<div className="flex-1 p-6 pt-2 flex flex-col">
						<DialogHeader className="mb-4">
							<DialogTitle>{project.name}</DialogTitle>
							{/* <DialogClose /> */}
						</DialogHeader>
						<DialogDescription className="flex-1">
							<p className="text-md">{project.description}</p>
						</DialogDescription>
						<DialogFooter>
							<div className="w-full h-8 flex flex-row gap-3 items-center">
								{/* <h5>Technologies Used:</h5> */}
								{project.languages.map((language, index) => (
									<Badge key={`${index}-${language}`}>{language}</Badge>
								))}
							</div>
							<a
								target="_blank"
								rel="noreferrer"
								href={project.link}
								className="hover:opacity-50 transition-opacity duration-300"
							>
								<Button
									variant="outline"
									className="flex justify-between items-center gap-2"
								>
									<Icons.gitHub className="h-5 w-5 text-white" />
									<span>Source</span>
								</Button>
							</a>
						</DialogFooter>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};
