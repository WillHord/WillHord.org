import React from "react";

import "./test.css";
// import './Pages/Homepage/Homepage.css'

// import ProjectBoxes from './components/ProjectBoxes/ProjectBoxes'
// import Terminal from './components/TerminalEffect/Terminal'
// import TopMenu from './components/topMenu/Menu'
// import BurgerIcon from './components/topMenu/BurgerIcon'

class test extends React.Component {
  componentDidMount() {
    document.getElementsByTagName("body")[0].className = "testBody";
  }

  componentWillUnmount() {
    document.getElementsByTagName("body")[0].className = "";
  }
  render() {
    return (
      <>
        <div className="monitorContainer">
          <div className="monitorFrame">
            <div className="monitorOutline">
              <div className="monitorScreen">
                <div className="ComputerIcons">
                  <div id="TrashCanIcon" />
                </div>
                <div className="terminalContainer">
                  <div className="HomepageTerminal1">
                    <div className="TerminalTop1">
                      <div className="closeWindowIcon1" />
                      <div className="minimizeWindowIcon1" />
                      <div className="expandWindowIcon1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Logo"></div>
          </div>
          <div className="monitorNeck"></div>
          <div className="monitorBase"></div>
        </div>
      </>
    );
  }
}

export default test;
