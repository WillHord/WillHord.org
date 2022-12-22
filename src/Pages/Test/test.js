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
        <div className="monitorContainer" style={{backgroundColor:'red'}}>
          <div style={{
            minHeight:'400px',
            width:'45%',
            backgroundColor:'green',
            display:'flex',
            flexDirection:'column'
          }}>
            <div style={{
              flex:'1',
              backgroundColor:'blue'
            }}></div>
            <div style={{
              flex:'1',
              backgroundColor:'pink',
              display:'flex',
              flexDirection:'column'
            }}>
              <div style={{
                flex:'3',
                backgroundColor:'purple',
                margin: "1% 1% 1% 1%",
              }}></div>
              <div style={{
                flex:'1',
                backgroundColor:'orange',
                margin: "1% 1% 1% 1%",
                display:'flex',
                flexDirection:'row'
              }}>
                <div style={{
                  flex:'3',
                  backgroundColor:'yellow',
                }}></div>
                <div style={{
                  flex:'1',
                  backgroundColor:'blue'
                }}></div>

              </div>

            </div>

          </div>
        </div>
      </>
    );
  }
}

export default test;
