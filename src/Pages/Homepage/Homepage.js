import React, { useContext, useEffect } from "react";

import "./Homepage.css";

import SolarSystem from "../../components/SolarSystem/SolarSystem";
import GetDesktop from "../../helpers/isDesktop";

import Terminal from "../../components/Terminal/Terminal";
import TerminalItem from "../../components/Terminal/TerminalItem";
import TerminalSkip from "../../components/Terminal/TerminalSkip";

import { terminalText } from "../../data/homepageData";
import { headerImages } from "../../data/headerImages";

import Gallery from "../../components/Gallery/gallery";

import { Link } from "react-router-dom";

import HeaderContext from "../../context";

function Homepage(props) {
  const { setHeaderProps } = useContext(HeaderContext);

  const TerminalText = terminalText;
  const HeaderImages = headerImages;

  const isDesktop = GetDesktop();

  useEffect(() => {
    setHeaderProps({ lead: false, background: 'bg-transparent' });

    return () => setHeaderProps({});
  }, [setHeaderProps]);

  return (
    <>
      <SolarSystem />
      <section id="whoAmI">
        <div id="whoAmIInnerContent">
          <div className="HomepageTerminal">
            <div className="TerminalTop">
              <div className="closeWindowIcon" />
              <div className="minimizeWindowIcon" />
              <div className="expandWindowIcon" />
            </div>
            
            <Terminal
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
            </Terminal>
          </div>
        </div>
      </section>
      <section id="img1Container">
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
              ? "url(" + HeaderImages.HomePageImage1 + ")"
              : "url(" + HeaderImages.HomePageImage1Mobile + ")",
          }}
        />
      </section>
      <section className="projects">
        <div
          className="innerHomepageContent"
          style={{
            width: "100%",
          }}
        >
          <h2 className="text-white text-2xl mt-10">Recent Projects</h2>
          <div className="mx-36 my-10 lg:mx-54 text-left">
            <Gallery max={isDesktop ? 8 : 4} />
          </div>
          <Link to="/Projects">
            <button className="homepageButton mb-10" type="button">
              More Projects
            </button>
          </Link>
        </div>
      </section>
      <section id="img2Container">
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
              ? "url(" + HeaderImages.HomePageImage2 + ")"
              : "url(" + HeaderImages.HomePageImage2Mobile + ")",
          }}
        />
      </section>
    </>
  );
}

export default Homepage;
