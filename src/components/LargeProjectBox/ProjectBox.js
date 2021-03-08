import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import LanguageFooter from "./LanguageFooter";

import "./ProjectBox.css";

class ProjectBox extends React.Component {
  constructor(props) {
    super(props);

    this.title = props.title;
    this.description = props.description;
    this.image = props.image;
    this.github = props.github;
    this.programmingLanguages = props.programmingLanguages;

    this.state = {
      hovered: false,
      isDesktop: false,
      githubHovered: false,
    };

    this.SizeUpdate = this.SizeUpdate.bind(this);
  }

  componentDidMount() {
    this.SizeUpdate();
    window.addEventListener("resize", this.SizeUpdate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.SizeUpdate);
  }

  SizeUpdate() {
    this.setState({ isDesktop: window.innerWidth > 725 });
  }

  render() {
    const { isDesktop, githubHovered } = this.state;

    const boxMobile = {
      width: isDesktop ? "45%" : "90%",
      // transform: hovered ? 'scale(1.005)' : 'scale(1)',
    };

    const boxHoverStyle = {
      minHeight: "400px",
      display: "inline",
    };

    const githubLinkStyle = {
      textDecoration: "none",
      color: "black",
      transition: ".3s",
      opacity: githubHovered ? ".3" : "1",
    };
    return (
      <>
        <Fade bottom duration={1000}>
          <div style={boxHoverStyle}>
            <div
              className="LargeBoxContainer"
              style={boxMobile}
              onMouseEnter={() => {
                this.setState({ hovered: true });
              }}
              onMouseLeave={() => {
                this.setState({ hovered: false });
              }}
            >
              <figure className="boxImg">
                <img
                  src={this.image}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=''
                />
              </figure>
              <div className="BoxBody">
                <p>
                  <span className="projectTitle">{this.title}</span>
                  {this.description}
                </p>

                <div className="languageFooterBox">
                  {this.programmingLanguages.map((language) => (
                    <LanguageFooter
                      key={language.pk}
                      language={language.name}
                      changeSort={this.props.changeSort.bind(this)}
                    />
                  ))}
                </div>
                <div className="githubFooter">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={this.github}
                    style={githubLinkStyle}
                    onMouseEnter={() => {
                      this.setState({ githubHovered: true });
                    }}
                    onMouseLeave={() => {
                      this.setState({ githubHovered: false });
                    }}
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    &#8594;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}

export default ProjectBox;
