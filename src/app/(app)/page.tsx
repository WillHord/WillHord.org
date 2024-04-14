import React, { useContext, useEffect } from "react";
import Link from "next/link";

import SolarSystem from "@/components/SolarSystem/SolarSystem";

import Terminal from "@/components/Terminal/Terminal";
import TerminalItem from "@/components/Terminal/TerminalItem";
import TerminalSkip from "@/components/Terminal/TerminalSkip";

import { terminalText } from "@/config/homepageData";
import { headerImages } from "@/config/headerImages";

import Gallery from "@/components/Gallery/gallery";

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
			<SolarSystem />
			<section className="w-full min-h-[40vh] py-24">
				<div className="h-full flex flex-row items-center justify-center">
					<div className="w-3/5 min-h-[80vh] flex overflow-x-hidden rounded-lg bg-black">
						<div className="w-full h-8 bg-gray-400 flex items-center justify-left gap-2 pl-2">
							<div className="w-4 h-4 bg-red-500 rounded-full" />
							<div className="w-4 h-4 bg-yellow-400 rounded-full" />
							<div className="w-4 h-4 bg-green-400 rounded-full" />
						</div>

						{/* <Terminal
              className="Terminal"
              style={{ color: "white" }}
              prefix={">"}
              typingSpeed={50}
            >
              {TerminalText.map((line, index) => {
                return (
                  <TerminalItem
                    key={index}
                    shouldDelete={TerminalText[index].shouldDelete}
                    newLine={TerminalText[index].newLine}
                  >
                    {TerminalText[index].description}
                  </TerminalItem>
                );
              })}
              <TerminalSkip
                style={{
                  paddingTop: "5%",
                }}
              >
                Skip &#9654;
              </TerminalSkip>
            </Terminal> */}
					</div>
				</div>
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
					<h2 className="text-white text-2xl mt-10">Recent Projects</h2>
					<div className="flex justify-center items-center">
						<ProjectCarousel projects={projectData} />
					</div>
					<Link href="/projects">
						<button
							className="mt-3 mb-10 w-36 h-14 border-solid border-2 bg-transparent hover:bg-muted"
							type="button"
						>
							More Projects
						</button>
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
