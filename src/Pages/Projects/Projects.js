import React from "react";

import Gallery from "../../components/Gallery/gallery";

import { headerImages } from "../../data/headerImages";

const Projects = () => {
  return (
    <>
      <div
        className="h-[80vh] bg-cover w-full"
        style={{
          backgroundImage: "url(" + headerImages.Projects + ")",
        }}
      />
      <div className="xl:mx-36 lg:mx-30 md:mx-26 sm:mx-10 my-12">
        <div className="my-8">
          <h1 className="text-4xl text-center">Projects</h1>
          <hr className="TitleDivider" />
        </div>
        <Gallery />
      </div>
    </>
  );
};

export default Projects;
