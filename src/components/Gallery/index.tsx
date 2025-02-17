"use client";
import type React from "react";
import type { Project } from "@/types/projects";
import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "./projectCard";

const GalleryItem: React.FC<{ project: Project; delay: number }> = ({
	project,
	delay,
}) => {
	return (
		<ProjectCard
			project={project}
			className="fade-in shadow transform transition duration-300"
			style={{ animationDelay: `${delay}ms` }}
		/>
	);
};

const Gallery: React.FC<{ projects: Project[] }> = ({ projects }) => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [columns, setColumns] = useState(4);
	const galleryRef = useRef(null);

	const max = projects.length;

	useEffect(() => {
		const updateColumns = () => {
			if (galleryRef.current) {
				const containerWidth = galleryRef.current["offsetWidth"];
				const itemWidth = 210;
				setColumns(Math.floor(containerWidth / itemWidth));
			}
		};

		window.addEventListener("resize", updateColumns);
		updateColumns();

		return () => window.removeEventListener("resize", updateColumns);
	}, []);

	return (
		<div
			ref={galleryRef}
			className="flex flex-wrap justify-center gap-1 w-full"
		>
			{projects
				.filter((item) => item.displayed)
				.slice(0, max)
				.sort((a, b) => a.weight - b.weight)
				.map((project: Project, index) => {
					const row = Math.floor(index / columns);
					const col = index % columns;
					const delay = (row + col) * 2000; // Diagonal delay calculation

					return (
						<GalleryItem
							key={`${index}-${project.name}`}
							project={project}
							delay={delay}
						/>
					);
				})}
		</div>
	);
};

export default Gallery;
