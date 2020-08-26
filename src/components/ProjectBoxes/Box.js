import React from "react";
import Fade from "react-reveal/Fade";

import "./Box.css";

class Box extends React.Component {
  static defaultProps = {
    endBox: false,
  };

  constructor(props) {
    super(props);
    this.title = props.title;
    this.summary = props.summary;
    this.path = props.path;
    this.fadeIn = props.fadeIn;

    this.state = {
      hovered: false,
      isDesktop: false,
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
    this.setState({ isDesktop: window.innerWidth > 600 });
  }

  render() {
    const { hovered, isDesktop } = this.state;
    const endBox = this.props.endBox;

    const linkForProject = {
      textDecoration: "none",
      color: "black",
    };

    const boxHover = {
      transform: hovered ? "scale(1.1)" : "scale(1)",
      display: "inline-block",
      marginRight: isDesktop ? (endBox ? "0" : "4%") : "0",
    };

    return (
      <>
        <Fade bottom duration={this.fadeIn}>
          <div style={boxHover}>
            <div
              className="box"
              onMouseEnter={() => {
                this.setState({ hovered: true });
              }}
              onMouseLeave={() => {
                this.setState({ hovered: false });
              }}
              style={boxHover}
            >
              <div className="Title">{this.title}</div>
              <hr className="dividerTop" />
              <div className="Summary">{this.summary}</div>
              <div className="LinkDiv">
                <hr className="dividerBottom" />

                <a style={linkForProject} target="_blank" href={this.path}>
                  <div className="linkToProject">To Project &rarr;</div>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}

export default Box;
