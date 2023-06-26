import React, { useState, useEffect } from "react";

import TopMenu from "../../components/topMenu/Menu";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import ComponentAPI from "../../api/ComponentAPI";
import GetDesktop from "../../components/isDesktop";

import { resumeData } from "../../data/resumeData";
import { headerImages } from "../../data/headerImages";

import "./Resume.css";

const Resume = (props) => {
  const HeaderImage = [
    headerImages.ResumePageImage,
    headerImages.ResumePageImageMobile,
  ];

  const WorkExperience = resumeData.workExperience;
  const Education = resumeData.education;

  const [isExpanded, setIsExpanded] = useState(false);

  const isDesktop = GetDesktop();

  return (
    <>
      <TopMenu
        color="white"
        lead={true}
        backgroundColor={"#1a1a1a"}
        burgerColor={"black"}
      />
      <div
        className="TopPicture"
        style={{
          backgroundImage: isDesktop
            ? "url(" + HeaderImage[0] + ")"
            : "url(" + HeaderImage[1] + ")",
          backgroundSize: "cover",
          backgroundPosition: isDesktop ? "50% 25%" : "initial",
        }}
      />
      <div className="outerContent">
        <div className="innerContent">
          <div className="ResumeTitle">
            <h5>Resume</h5>
          </div>
          <div className="SectionTitle">
            <h5>Education</h5>
          </div>
          <hr className="TitleDivider" />
          {Education.map((item, index) => {
            return (
              <div className="EducationSection" key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.image.link}
                >
                  <img
                    className="LargeIcon"
                    src={item.image.image.full_size}
                    alt={item.image.description}
                  />
                </a>
                <b className="wrap">{item.school}</b>
                <b className="alignRight">{item.location}</b>
                <br />
                <i className="wrap">{item.degree}</i>
                <span className="alignRight">{item.dates}</span>
                <br />
                <br />
                {item.coursework.length > 0 ? (
                  <>
                    <span>Relevant Coursework:</span>
                    <br />

                    <ul className="Coursework">
                      {item.coursework.slice(0, 3).map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                      {item.coursework.length > 3 ? (
                        isExpanded ? (
                          <>
                            {item.coursework.slice(3).map((item, index) => {
                              return <li key={index}>{item}</li>;
                            })}
                            <div className="arrow-container">
                              <div
                                className="triangle_up"
                                onClick={() => setIsExpanded(false)}
                              />
                            </div>
                          </>
                        ) : (
                          <div className="arrow-container">
                            <div
                              className="triangle_down"
                              onClick={() => setIsExpanded(true)}
                            />
                          </div>
                        )
                      ) : null}
                    </ul>
                    <br />
                    <br />
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          })}

          <div className="SectionTitle">
            <h5>Work Experience</h5>
          </div>
          <hr className="TitleDivider" />

          {WorkExperience.map((item, index) => {
            return (
              <div key={index} className="WorkSection">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.image.link}
                >
                  <img
                    className="LargeIcon"
                    src={item.image.image.full_size}
                    alt={item.image.description}
                  />
                </a>
                <b>{item.title}</b>
                <b className="alignRight">{item.location}</b>
                <br />
                <i>{item.position}</i>
                <i className="alignRight">{item.dates}</i>
                <br />
                <br />
                <ul>
                  {item.description.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                {item.optionalFile !== null ? (
                  <div
                    className="OptionalFile"
                    style={{
                      display: "flex",
                      justifyContent: isDesktop ? "right" : "center",
                    }}
                  >
                    <a
                      className="PaperButton"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/SPIE_2019_paper.pdf"
                    >
                      {item.fileText}
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}

          <div className="SectionTitle">
            <h5>Technical Skills</h5>
          </div>
          <hr className="TitleDivider" />
          <div className="TechnicalSection">
            <b>
              <h6 style={{ display: "inline", textDecoration: "underline" }}>
                Programming
              </h6>
              <span>: </span>
            </b>
            {resumeData.technicalSkills.programming.map((skill, index) => {
              return (
                <>
                  <span>{skill}</span>
                  {index !==
                  resumeData.technicalSkills.programming.length - 1 ? (
                    <span>, </span>
                  ) : null}
                </>
              );
            })}
            <br />
            <br />
            <strong>
              <h6 style={{ display: "inline", textDecoration: "underline" }}>
                Software
              </h6>
              <span>: </span>
            </strong>
            {resumeData.technicalSkills.software.map((skill, index) => {
              return (
                <>
                  <span>{skill}</span>
                  {index !== resumeData.technicalSkills.software.length - 1 ? (
                    <span>, </span>
                  ) : null}
                </>
              );
            })}

            <br />
            <hr className="TitleDivider" />
            <br />
            <b>
              <h5>Awards & Publications:</h5>
            </b>
            <div>
              {resumeData.publications.map((publication, index) => {
                return (
                  <div key={index}>
                    <span>{publication.title}</span>
                    <br />
                  </div>
                );
              })}
            </div>
            <ul>
              {resumeData.awards.map((award, index) => {
                return (
                  <li key={index}>
                    <strong>{award.title}</strong> - {award.description}
                  </li>
                );
              })}
            </ul>
            <br />
            <hr className="TitleDivider" />
            <b>
              <h5>Memberships:</h5>
            </b>
            <ul>
              {resumeData.memberships.map((membership, index) => {
                return (
                  <div key={index}>
                    <b>{membership.title}</b>
                    <i className="alignRight">{membership.date}</i>
                    <br />
                    <p style={{ textIndent: "50px" }}>
                      {membership.description}
                    </p>
                    <br />
                  </div>
                );
              })}
            </ul>
          </div>

          <hr className="TitleDivider" />
          <div
            className="alignCenter"
            style={{
              paddingBottom: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              className="FullResumeButton"
              target="_blank"
              rel="noopener noreferrer"
              href="/files/Will_Hord-Resume.pdf"
            >
              Full Resume
            </a>
          </div>
        </div>
      </div>
      <BottomMenu />
    </>
  );
};

export default Resume;
