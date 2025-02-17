"use client";

import type React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Gallery from "@/components/Gallery";
import { projectData } from "@/config/projectData";

import { headerImages } from "@/config/headerImages";
import { Particles } from "@/components/ui/particles";

const Projects: React.FC = () => {
	return (
		<>
			{/* <div className="h-[80vh] w-full relative"> */}
			{/* 	<Image */}
			{/* 		src={headerImages.Projects} */}
			{/* 		alt="image" */}
			{/* 		fill */}
			{/* 		className="object-cover w-full h-full" */}
			{/* 	/> */}
			{/* </div> */}
			<Particles
				className="absolute inset-0 z-0"
				quantity={1000}
				ease={80}
				color={"#ffffff"}
				refresh
			/>
			<div className="xl:mx-36 lg:mx-28 md:mx-22 sm:mx-10 my-12">
				<div className="my-8">
					<h1 className="text-4xl text-center">Projects</h1>
					<Separator />
				</div>
				<Gallery projects={projectData} />
			</div>
		</>
	);
};

export default Projects;
