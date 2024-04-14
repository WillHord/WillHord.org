"use client"
import type React from "react";
import type { Project } from "@/types/projects";

import { ProjectCard } from "@/components/Gallery/projectCard";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ProjectCarouselProps {
	projects: Project[];
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
	projects,
}) => {
	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 2000,
                    stopOnInteraction: true,
				}),
			]}
			opts={{
				align: "start",
				loop: true,
				// direction: "backward"
			}}
			className="w-3/4 max-w-1/2"
		>
			<CarouselContent className="-ml-1">
				{projects.map((project, index) => (
					<CarouselItem
						key={`Project-${index}-${project.name}`}
						className="pl-1 md:basis-1/4 lg:basis-1/4"
					>
						<div className="p-1">
							<ProjectCard project={project} />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};
