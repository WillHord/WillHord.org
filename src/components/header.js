import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ text, path, target = "", onHover, isNotHovered }) => {
  return (
    <div className="flex flex-col items-center">
      <Link
        to={path}
        className={`text-white text-lg transition-opacity ${
          isNotHovered ? "opacity-30" : "opacity-100"
        }`}
        target={target}
        rel="noopener noreferrer"
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      >
        {text}
      </Link>
    </div>
  );
};

const BurgerIcon = ({ open, onClick }) => {
  const topTransform = {
    transform: open ? "rotate(45deg)" : "rotate(0deg)",
    transitionDuration: ".3s",
  };

  const middleTransform = {
    opacity: open ? "0" : "1",
  };

  const bottomTransform = {
    transform: open ? "rotate(-45deg)" : "rotate(0deg)",
    transitionDuration: ".3s",
  };
  return (
    <div
      className={`flex flex-col items-center transition-opacity justify-around w-8 h-8`}
      onClick={onClick}
    >
      <div
        className="h-1 w-8 bg-white rounded-lg origin-left"
        style={topTransform}
      ></div>
      <div
        className="h-1 w-8 bg-white rounded-lg origin-left"
        style={middleTransform}
      ></div>
      <div
        className="h-1 w-8 bg-white rounded-lg origin-left"
        style={bottomTransform}
      ></div>
    </div>
  );
};

export default function Header({ lead = true, background = "bg-[#1a1a1a]" }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const handleHover = (item) => {
    setHoveredItem(hoveredItem === item ? null : item);
  };

  useEffect(() => {
    // Close menu on click outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && open) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className={`font-sans-serif ${background} absolute z-50 w-full`}>
      <div className="flex flex-row pl-[7%] pr-[10%] py-4 mmd:hidden">
        <div className="grow">
          {lead && (
            <Link
              to="/"
              className="text-2xl hover:opacity-50 transition-opacity"
            >
              Will Hord
            </Link>
          )}
        </div>
        <div className="flex md:flex-row space-x-8">
          <LinkItem
            text="Home"
            path="/"
            onHover={() => handleHover("Home")}
            isNotHovered={hoveredItem && hoveredItem !== "Home"}
          />
          <LinkItem
            text="Resume"
            path="/Resume"
            onHover={() => handleHover("Resume")}
            isNotHovered={hoveredItem && hoveredItem !== "Resume"}
          />
          <LinkItem
            text="Projects"
            path="/Projects"
            onHover={() => handleHover("Projects")}
            isNotHovered={hoveredItem && hoveredItem !== "Projects"}
          />
          <LinkItem
            text="Contact"
            path="mailto:contact@willhord.dev"
            target="_blank"
            onHover={() => handleHover("Contact")}
            isNotHovered={hoveredItem && hoveredItem !== "Contact"}
          />
        </div>
      </div>

      <div ref={menuRef}>
        <div className="absolute right-0 flex flex-row-reverse mx-[5%] my-[3%] md:hidden z-50">
          <BurgerIcon onClick={() => setOpen(!open)} open={open} />
        </div>
        {open && (
          <div className="absolute w-full top-0 flex flex-col space-y-4 items-center bg-[#1a1a1a] text-white p-4 z-10 animate-fade-in-top">
            <LinkItem text="Home" path="/" />
            <LinkItem text="Resume" path="/Resume" />
            <LinkItem text="Projects" path="/Projects" />
            <LinkItem
              text="Contact"
              path="mailto:contact@willhord.dev"
              target="_blank"
            />
          </div>
        )}
      </div>
    </div>
  );
}
