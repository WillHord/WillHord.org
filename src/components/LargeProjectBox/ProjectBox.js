import React, {useState} from 'react';
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import LanguageFooter from "./LanguageFooter";
import LanguageFooter from "./LanguageFooter";

import GetDesktop from "../isDesktop";

import "./ProjectBox.css";

const ProjectBox = (props) => {
    // const [hovered, setHovered] = useState(false)
    const [githubHovered, setGithubHovered] = useState(false);

    const title = props.title;
    const description = props.description;
    const image = props.image;
    const github = props.github;
    const programmingLanguages = props.programmingLanguages;

    const isDesktop = GetDesktop();

    return(
        <Fade duration={1000}>
            <section className='LargeBoxContainer' style={{
            width: isDesktop ? "45%" : '90%',
          }}>
            <section className='boxImg'>
                <img
                  src={image}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=''
                />
            </section>

            <section className='BoxBody'>
              <div className='textArea'>
                  <p>
                  <span className="projectTitle"><u><b>{title}</b></u></span>
                  {description}
                </p>

              </div>
              <div className='languageFooterBox'>
                <div style={{
                  flex:'6',
                }}>
                    {programmingLanguages.map((language) => (
                    <LanguageFooter
                      key={language.pk}
                      language={language.name}
                      sortBy={props.sortBy}
                    />
                  ))}

                </div>
                <div style={{
                  flex:'1',
                  alignSelf:'center',
                }}>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={github}
                    style={{
                        textDecoration:'none',
                        color:'black',
                        transition:'.3s',
                        opacity: githubHovered ? '.3' : '1',
                    }}
                    onMouseEnter={() => {setGithubHovered(true);}}
                    onMouseLeave={() => {setGithubHovered(false);}}
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    &#8594;
                  </a>
                </div>
              </div>
            </section>
          </section>
        </Fade>
    )
}

export default ProjectBox;