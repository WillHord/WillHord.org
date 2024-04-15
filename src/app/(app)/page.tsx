import React, { useContext, useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import SolarSystem from "@/components/SolarSystem";

// import Terminal from "@/components/Terminal/Terminal";
// import TerminalItem from "@/components/Terminal/TerminalItem";
// import TerminalSkip from "@/components/Terminal/TerminalSkip";

import Terminal from "@/components/Terminal";

import { terminalText } from "@/config/homepageData";
import { headerImages } from "@/config/headerImages";

// import Gallery from "@/components/Gallery/gallery";

import { ProjectCard } from "@/components/Gallery/projectCard";
import { ProjectCarousel } from "@/components/Gallery/projectCarousel";
import { projectData } from "@/config/projectData";
// import HeaderContext from "../../context";

export default function Homepage(props) {
	//   const { setHeaderProps } = useContext(HeaderContext);

	const TerminalText = terminalText;
	const HeaderImages = headerImages;

	const isDesktop = true;
	//   const isDesktop = GetDesktop();

	//   useEffect(() => {
	//     setHeaderProps({ lead: false, background: 'bg-transparent' });

	//     return () => setHeaderProps({});
	//   }, [setHeaderProps]);

	return (
		<>
			<SolarSystem title="Will Hord" />
			<section className="w-full min-h-[40vh] py-24">
				<Terminal />
			</section>
			<section className="w-full min-h-[80vh] bg-white m-auto py-[10%]">
				<div
					style={{
						width: isDesktop ? "90%" : "100%",
						height: "80vh",
						position: "relative",
						margin: "0 auto",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundImage: isDesktop
							? `url(${HeaderImages.HomePageImage1})`
							: `url(${HeaderImages.HomePageImage1Mobile})`,
					}}
				/>
			</section>
			<section className="w-full min-h-[80vh] text-center flex items-center justify-center">
				<div className="w-full inline-block text-center m-auto">
					<h2 className="text-white text-3xl mt-10 pb-4">Recent Projects</h2>
					<div className="flex flex-col justify-center items-center gap-10 select-none">
						<ProjectCarousel
							projects={projectData.slice(
								0,
								Math.floor(projectData.length / 2),
							)}
							direction="forward"
						/>
						<ProjectCarousel
							projects={projectData.slice(
								Math.floor(projectData.length / 2),
								projectData.length,
							)}
							direction="backward"
						/>
					</div>
					<Link href="/projects">
						<Button
							variant={"outline"}
							className="mt-3 mb-10 w-36 h-14 border-white/80 border-solid border-2 bg-transparent hover:bg-muted"
						>
							More Projects
						</Button>
					</Link>
				</div>
			</section>
			<section className="w-full min-h-[80vh] bg-white m-auto py-[10%]">
				<div
					style={{
						width: isDesktop ? "90%" : "100%",
						height: "90vh",
						margin: "0 auto",
						position: "relative",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "50% 0%",
						backgroundImage: isDesktop
							? `url(${HeaderImages.HomePageImage2})`
							: `url(${HeaderImages.HomePageImage2Mobile})`,
					}}
				/>
			</section>
		</>
	);
}
