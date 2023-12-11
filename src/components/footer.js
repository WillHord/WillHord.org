import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LinkItem = ({ text, path, target="" }) => {
  return (
    <div className="flex flex-col items-center">
      <Link to={path} className="text-white text-xl hover:opacity-50 transition-opacity"
       target={target} rel="noopener noreferrer"
      >
        {text}
      </Link>
    </div>
  );
};

const IconItem = ({ icon, path }) => {
  return (
    <div className="flex flex-col items-center">
      <a
        href={path}
        className="text-white font-semibold hover:opacity-50 transition-opacity"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="py-8 bg-[#1a1a1a]">
      <div className="h-[15vh] text-center flex flex-col ">
        <div className="flex flex-row text-center space-x-4 justify-center mb-4">
            <LinkItem text="Home" path="/" />
            <LinkItem text="Resume" path="/Resume" />
            <LinkItem text="Projects" path="/Projects" />
            <LinkItem text="Contact" path="mailto:contact@willhord.dev" target="_blank"/>
        </div>
        <div className="flex flex-row text-center space-x-6 justify-center grow">
            <IconItem icon={faLinkedin} path="https://www.linkedin.com/in/willhord/" />
            <IconItem icon={faGithub} path="https://github.com/WillHord" />
            <IconItem icon={faEnvelope} path="mailto:contact@willhord.dev" />
        </div>
        <div className="">
          <p className="opacity-40">
            Website Created and Hosted by Will Hord using React JS
          </p>
        </div>
      </div>
    </div>
  );
}
