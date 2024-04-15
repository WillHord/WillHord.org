import type React from "react";
import { Separator } from "@/components/ui/separator";
import Gallery from "@/components/Gallery";
import { projectData } from "@/config/projectData";

import { headerImages } from "@/config/headerImages";

const Projects: React.FC = () => {
	return (
		<>
			<div
				className="h-[80vh] bg-cover w-full"
				style={{
					backgroundImage: `url(${headerImages.Projects})`,
				}}
			/>
			<div className="xl:mx-36 lg:mx-30 md:mx-22 sm:mx-10 my-12">
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
