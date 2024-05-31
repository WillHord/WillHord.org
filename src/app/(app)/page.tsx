"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

// import SolarSystem from "@/components/SolarSystem";
import SolarSystem from "@/components/ThreeSolarSystem";
import Terminal from "@/components/Terminal";
import { headerImages } from "@/config/headerImages";

import { ProjectCard } from "@/components/Gallery/projectCard";
import { ProjectCarousel } from "@/components/Gallery/projectCarousel";
import { projectData } from "@/config/projectData";

import { porta } from "@/components/fonts";

import "@/styles/text-tracking-in.css";
// import HeaderContext from "../../context";

import { useIsDesktop } from "@/hooks/isDesktop";

export default function Homepage() {
	const isDesktop = useIsDesktop();
	const HeaderImages = headerImages;

	return (
		<>
			<div className="h-screen sticky top-0 left-0 w-full">
				<SolarSystem />
			</div>
			<div className="min-h-[80vh] w-full z-0 absolute top-0 right-0 pointer-events-none">
				<div className="flex justify-center items-center h-[80vh] pointer-events-none">
					<h1
						className={`text-white text-9xl pl-24 tracking-in-expand ${porta.className}`}
					>
						Will Hord
					</h1>
				</div>
			</div>

			<div className="backdrop-filter backdrop-blur-sm">
				<section className="w-full min-h-[40vh] py-24 px-6 lg:px-0">
					<Terminal />
				</section>
				<section className="w-full min-h-[80vh] bg-white m-auto py-[10%] bg-opacity-90 flex justify-center items-center">
					<div className="h-[80vh] relative w-11/12">
						{isDesktop ? (
							<Image
								src={HeaderImages.HomePageImage1}
								alt="image"
								fill
								className="object-cover w-full h-full relative m-auto"
							/>
						) : (
							<Image
								src={HeaderImages.HomePageImage1Mobile}
								alt="image"
								fill
								className="object-cover w-full h-full relative m-auto"
							/>
						)}
					</div>
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
				<section className="w-full min-h-[80vh] bg-white m-auto py-[10%] bg-opacity-90 flex justify-center items-center">
					<div className="h-[80vh] relative w-11/12">
						{isDesktop ? (
							<Image
								src={HeaderImages.HomePageImage2}
								alt="image"
								fill
								className="object-cover w-full h-full  object-top"
							/>
						) : (
							<Image
								src={HeaderImages.HomePageImage2Mobile}
								alt="image"
								fill
								className="object-cover w-full h-full relative m-auto"
							/>
						)}
					</div>
				</section>
			</div>
		</>
	);
}
