"use client";
import type React from "react";
import { useState } from "react";
import Image from "next/image";
import {useIsDesktop} from "@/hooks/isDesktop";

import { resumeData } from "@/config/resumeData";
import { headerImages } from "@/config/headerImages";

import Resume from "@/components/resume";

const ResumePage: React.FC = () => {
	const isDesktop = useIsDesktop();
	const HeaderImage = [
		headerImages.ResumePageImage,
		headerImages.ResumePageImageMobile,
	];
	
	return (
		<>
			<div className="h-[80vh] w-full relative">
				{isDesktop ? (
					<Image
					src={HeaderImage[0]}
					alt="image"
					fill
					className="object-cover w-full h-full"
				/>
				) : (
					<Image
					src={HeaderImage[1]}
					alt="image"
					fill
					className="object-cover w-full h-full"
				/>
				)}
				
			</div>
			<Resume data={resumeData} />
		</>
	);
};

export default ResumePage;
