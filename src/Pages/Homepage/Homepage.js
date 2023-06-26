import React, { useState, useEffect } from "react";

import "./Homepage.css";

import TopMenu from "../../components/topMenu/Menu";
import SolarSystem from "../../components/SolarSystem/SolarSystem";
import BottomBar from "../../components/BottomMenu/BottomMenu";
import Box from "../../components/ProjectBoxes/Box";
import GetDesktop from "../../components/isDesktop";

import ComponentAPI from "../../api/ComponentAPI";

import Terminal from "../../components/Terminal/Terminal";
import TerminalItem from "../../components/Terminal/TerminalItem";
import TerminalSkip from "../../components/Terminal/TerminalSkip";


import { terminalText } from "../../data/homepageData";
import { headerImages } from "../../data/headerImages";
import { projectData } from "../../data/projectData";

import { Link } from "react-router-dom";

function Homepage(props) {
  const TerminalText = terminalText;
  const HeaderImages = headerImages;

  const isDesktop = GetDesktop();

  const redirectToProjects = (e) => {
    let destUrlEdit = `/Projects/`;
    props.history.push(destUrlEdit);
  };

  return (
    <>
      <TopMenu />
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
          <h4>Recent Projects</h4>
          <div className="boxContainer" style={{ padding: "5px" }}>
            {isDesktop
              ? projectData.slice(0, 3).map((box) => {
                  return (
                    <Box
                      key={box.pk}
                      title={box.name}
                      summary={box.description}
                      path={box.link}
                      fadeIn={1400}
                    />
                  );
                })
              : projectData.slice(0, 2).map((box) => {
                  return (
                    <Box
                      key={box.pk}
                      title={box.name}
                      summary={box.description}
                      path={box.link}
                      fadeIn={1400}
                    />
                  );
                })}
          </div>
          <Link to="/Projects">
            <button className="homepageButton" type="button">
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
      <BottomBar />
    </>
  );
}

export default Homepage;
