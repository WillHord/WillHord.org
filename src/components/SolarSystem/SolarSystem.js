import React from "react";

import "./SolarSystem.css";

class SolarSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      isDesktop: false,
    };
    this.nameAnimationDelay = this.nameAnimationDelay.bind(this);
    this.SizeUpdate = this.SizeUpdate.bind(this);
  }

  nameAnimationDelay() {
    this.setState({ active: true });
  }

  componentDidMount() {
    setTimeout(this.nameAnimationDelay, 2000);
    this.SizeUpdate();
    window.addEventListener("resize", this.SizeUpdate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.SizeUpdate);
    this.setState = (state, callback) => {
      return;
    };
  }

  SizeUpdate() {
    this.setState({ isDesktop: window.innerWidth > 600 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    let Title;

    const NameStyle = {
      paddingLeft: isDesktop ? ".9em" : "0",
    };

    if (isDesktop) {
      Title = <p>Will Hord</p>;
    } else {
      Title = (
        <>
          <span className="alignCenter" style={{ marginLeft: "15%" }}>
            Will
          </span>
          <div style={{ height: "50px" }} />
          <span className="alignCenter">Hord</span>
        </>
      );
    }
    return (
      <>
        <div className="solarSystem">
          <div className="stars"></div>
          <div className="sun" />
          <div className={this.state.active ? "name" : null} style={NameStyle}>
            {Title}
          </div>
          <div className="planet1Orbit">
            <div className="planet1Rotate">
              <div className="planet1CounterRotate">
                <div className="planet1" />
              </div>
            </div>
          </div>
          <div className="planet2Orbit">
            <div className="planet2Rotate">
              <div className="planet2CounterRotate">
                <div className="planet2" />
              </div>
            </div>
          </div>
          <div className="planet3Orbit">
            <div className="planet3Rotate">
              <div className="planet3CounterRotate">
                <div className="planet3" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SolarSystem;
