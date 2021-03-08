import React from "react";
import { Waypoint } from "react-waypoint";
import { Redirect } from "react-router";

import "./Homepage.css";

import TopMenu from "../../components/topMenu/Menu";
import SolarSystem from "../../components/SolarSystem/SolarSystem";
import BottomBar from "../../components/BottomMenu/BottomMenu";
import Box from "../../components/ProjectBoxes/Box";
// import TerminalItem from "../../components/TerminalEffect/TerminalItem";

import ComponentAPI from "../../api/ComponentAPI";
import axios from 'axios';

import Terminal from "../../components/Terminal/Terminal";
import TerminalItem from "../../components/Terminal/TerminalItem";
import TerminalSkip from "../../components/Terminal/TerminalSkip"

// import Terminal from "../../components/Terminal/Terminal";
// import TerminalItem from "../../components/Terminal/TerminalItem";
// import TerminalSkip from "../../components/Terminal/TerminalSkip";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      APIresponse: false,
      SmallBoxResponse: false,
      TerminalText: [],
      SmallProjectBoxData: [],
      isDesktop: false,
      redirectProjects: false,
      image1: null,
      image1Mobile: null,
      image2: null,
      image2Mobile: null,
    };
    // this.TerminalAnimation = this.TerminalAnimation.bind(this);
    // this.animationHandler = this.animationHandler.bind(this);
    this.SizeUpdate = this.SizeUpdate.bind(this);
    this.GetAPI = this.GetAPI.bind(this);

    this.TerminalItems = null;
  }

  async GetAPI(){
    try{
      ComponentAPI.get('/Files/HeaderImage/')
        .then(res =>{
          this.setState({
            image1: res.data.find(function(e) { return e.name === 'HomePageImage1'; }).image.full_size,
            image1Mobile: res.data.find(function(e) { return e.name === 'HomePageImage1Mobile'; }).image.full_size,
            image2: res.data.find(function(e) { return e.name === 'HomePageImage2'; }).image.full_size,
            image2Mobile: res.data.find(function(e) { return e.name === 'HomePageImage2Mobile'; }).image.full_size
          })
        })
    } catch(error){
      throw error;
    }
    try{
      ComponentAPI.get('/Components/TerminalText/')
        .then(res => res.data)
        .then(res =>{
          this.setState({TerminalText: res, APIresponse: true});
          // this.setState({APIresponse: true})
        })
    }catch(error){
      throw error
    }
    // try{
    //   const res = await ComponentAPI.get('/Components/SmallProjectBox/')
    //   console.log(res)
    //   this.setState({SmallProjectBoxData: res.data})
    //   this.setState({SmallBoxResponse: true})
    //   console.log(this.state.SmallProjectBoxData)
    //     // .then(res => {
    //     //   this.setState({SmallProjectBoxData: res.data, SmallBoxResponse: true});
    //     //   console.log(this.state.SmallProjectBoxData)
    //     //   console.log(res)
    //     // })
    // }catch(error){
    //   throw error
    // }
  }



  async componentDidMount() {
    await this.GetAPI();

    await ComponentAPI.get('/Components/SmallProjectBox/').then(res =>{
      console.log(res.data)
      this.setState({SmallProjectBoxData: res.data})
      this.setState({SmallBoxResponse: true})
    })
    console.log(this.state.SmallProjectBoxData)


    this.SizeUpdate();
    window.addEventListener("resize", this.SizeUpdate);
    document.getElementsByTagName("body")[0].className = "HomepageBody";
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.SizeUpdate);
    document.getElementsByTagName("body")[0].className = "";
    this.setState = (state, callback) => {
      return;
    };
  }

  SizeUpdate() {
    this.setState({ isDesktop: window.innerWidth > 600 });
  }

  render() {
    const terminalStyle = {
      color: 'white',
    }

    const isDesktop = this.state.isDesktop;
    const img1Style = {
      width: isDesktop ? "90%" : "100%",
      height: "80vh",
      position: "relative",
      margin: "0 auto",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: isDesktop
        ? 'url(' + this.state.image1 +')'
        : 'url(' + this.state.image1Mobile + ')',
    };

    const img2Style = {
      width: isDesktop ? "90%" : "100%",
      height: "90vh",
      margin: "0 auto",
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "50% 0%",
      backgroundImage: isDesktop
        ? 'url(' + this.state.image2 +')'
        : 'url(' + this.state.image2Mobile + ')',
    };

    if (this.state.redirectProjects) {
      return <Redirect push to="/Projects" />;
    }

    let projectBoxes;
    let img1;
    let img2;
    if (isDesktop) {
      // projectBoxes = {

      // }
      // projectBoxes = (
      //   <>
      //     <Box
      //       title="WillHord.org"
      //       summary="This website! This is my personal website which houses
      //   my resume, my past work, and information about me!"
      //       path="https://github.com/WillHord/WillHord.org"
      //       fadeIn={1400}
      //     />

      //     <Box
      //       title="Discord Bot"
      //       summary="A bot written in python which uses the discord api to play music, games, and give
      //    information on stocks all in discord."
      //       path="https://github.com/WillHord/DiscordBot"
      //       fadeIn={1500}
      //     />

      //     <Box
      //       title="iMessage Bot"
      //       summary="A framework for an iMessage chat bot which uses python and sql to detect new messages
      //   received and uses AppleScript to reply to commands given by the user."
      //       path="https://github.com/WillHord/iMessageBot"
      //       fadeIn={1600}
      //       endBox={true}
      //     />
      //   </>
      // );
      img1 = (
        <>
          <section id="img1Container">
            <div style={img1Style} />
          </section>
        </>
      );
      img2 = (
        <>
          <div id="img2Container">
            <div style={img2Style} />
          </div>
        </>
      );
    } else {
      projectBoxes = (
        <>
          <Box
            title="WillHord.org"
            summary={`This website! This is my personal website which houses
        my resume, my past work, and information about me!`}
            path="/Projects"
            fadeIn={1400}
          />

          <Box
            title="Discord Bot"
            summary="A bot written in python which uses the discord api to play music, games, and give
        information on stocks all in discord."
            path="/Projects"
            fadeIn={1500}
          />
        </>
      );
      img1 = <div style={img1Style} />;
      img2 = <div style={img2Style} />;
    }

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
              {this.state.APIresponse === true && <>
                <Terminal className='Terminal' style={terminalStyle} prefix={'>'} typingSpeed={50}>
                {Object.keys(this.state.TerminalText).map((line, index) =>{
                  return <TerminalItem key={index} 
                  shouldDelete={this.state.TerminalText[index].shouldDelete}
                  newLine={this.state.TerminalText[index].newLine}
                  >{this.state.TerminalText[index].description}</TerminalItem>
                })}
                <TerminalSkip>Skip &#9654;</TerminalSkip>
              </Terminal>
              </>
              }
              {/* <Waypoint onEnter={this.TerminalAnimation} /> */}
            </div>
          </div>
        </section>
        {img1}
        <section className="projects">
          <div className="innerHomepageContent">
            <h4>Recent Projects</h4>
            <div className="boxContainer">{
            this.state.SmallBoxResponse && this.state.SmallProjectBoxData.splice(0, isDesktop ? 3 : 2).map((box) =>{
                return <Box
                    key={box.pk}
                    title={box.name}
                    summary={box.description}
                    path={box.link}
                    fadeIn={1400}
                />
              })
            }</div>
            <button
              className="homepageButton"
              onClick={() => {
                this.setState({ redirectProjects: true });
              }}
            >
              More Projects
            </button>
          </div>
        </section>
        {img2}
        <BottomBar />
      </>
    );
  }
}

export default Homepage;
