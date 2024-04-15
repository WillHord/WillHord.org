"use client"
import type React from "react";
import { useState } from "react";
import Image from "next/image";
// import GetDesktop from "../../helpers/isDesktop";

import { resumeData } from "@/config/resumeData";
import { headerImages } from "@/config/headerImages";

import Resume from "@/components/resume";


const ResumePage: React.FC = () => {
  const HeaderImage = [
    headerImages.ResumePageImage,
    headerImages.ResumePageImageMobile,
  ];

  const isDesktop = true;

  return (
    <>
      <div
        className="h-[80vh] w-full bg-cover"
        style={{
          backgroundImage: isDesktop
            ? `url(${HeaderImage[0]})`
            : `url(${HeaderImage[1]})`,
          backgroundPosition: isDesktop ? "50% 25%" : "initial",
        }}
      />
      <Resume data={resumeData} />
    </>
  );
};

export default ResumePage;
