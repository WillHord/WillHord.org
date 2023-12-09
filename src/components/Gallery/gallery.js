import React, { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { projectData } from "../../data/projectData";
import "./gallery.css";

const GalleryItem = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fade-in-diagonal relative h-40 w-52 sm:w-80  bg-white shadow transform transition duration-300 cursor-pointer overflow-hidden"
      onClick={() => onClick(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={project.img.image.full_size}
        alt="Gallery Item"
        className={`h-full w-full object-cover transition duration-300 ${
          isHovered ? "brightness-40" : ""
        }`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-white text-lg font-semibold">{project.name}</span>
      </div>
    </div>
  );
};

const CardModal = ({ isOpen, project, onClose }) => {
  const [githubHovered, setGithubHovered] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black text-black bg-opacity-50 flex justify-center items-center z-50 fade-in-modal"
      onClick={onClose}
    >
      <div
        className="bg-white p-3 rounded shadow-lg w-full max-w-xl min-h-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-lg font-bold text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="text-center">
          <img
            src={project.img.image.full_size}
            alt="Project"
            className="mx-auto"
            style={{ width: "80%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div className="mt-2 mx-8">
          <div>
            <p>
              <span className="pr-2 text-xl">
                <u>
                  <b>{project.name}</b>
                </u>
              </span>
            {project.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-1">
              {project.languages.map((language) => (
                <div key={language.pk} className="min-w-16 h-8 border-black border-solid rounded border-2 mr-4 text-center">
                    <span className="language">{language.name}</span>
                </div>
              ))}
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="."
                style={{
                  textDecoration: "none",
                  color: "black",
                  transition: ".3s",
                  opacity: githubHovered ? ".3" : "1",
                }}
                onMouseEnter={() => setGithubHovered(true)}
                onMouseLeave={() => setGithubHovered(false)}
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
                &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ max = NaN }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [columns, setColumns] = useState(4);
  const galleryRef = useRef(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  if (isNaN(max)) max = projectData.length;

  useEffect(() => {
    const updateColumns = () => {
      if (galleryRef.current) {
        const containerWidth = galleryRef.current.offsetWidth;
        const itemWidth = 210;
        setColumns(Math.floor(containerWidth / itemWidth));
      }
    };

    window.addEventListener("resize", updateColumns);
    updateColumns();

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div ref={galleryRef}>
      <div className="flex flex-wrap justify-center gap-1">
        {projectData
          .filter((item) => item.displayed)
          .slice(0, max)
          .map((project, index) => {
            const row = Math.floor(index / columns);
            const col = index % columns;
            const delay = (row + col) * 100; // Diagonal delay calculation

            return (
              <div
                key={project.pk}
                style={{ animationDelay: `${delay}ms` }}
                className="fade-in"
              >
                <GalleryItem project={project} onClick={openModal} />
              </div>
            );
          })}
      </div>
      <CardModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={closeModal}
      />
    </div>
  );
};

export default Gallery;
