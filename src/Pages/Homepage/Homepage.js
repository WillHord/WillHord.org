import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import Fade from 'react-reveal/Fade';

import './Homepage.css'

import TopMenu from '../../components/topMenu/Menu'
import SolarSystem from '../../components/SolarSystem/SolarSystem'
// import ProjectBoxes from '../../components/ProjectBoxes/ProjectBoxes'
import BottomBar from '../../components/BottomMenu/BottomMenu'
import Box from '../../components/ProjectBoxes/Box'
import TerminalItem from '../../components/TerminalEffect/TerminalItem'


import './planning.css'
import { faExpeditedssl } from '@fortawesome/free-brands-svg-icons';

class Homepage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        Items: [],
        lines: [
          ['Hello World','My name is Will Hord'],
         ['I’m a coder, a maker, a developer and a collaborator.'],
         ['I make everything from websites and bots to machine learning algorithms and games.'],
         ['I’m interested in pushing the boundaries of what machines can do, to see how far humanity can go with the aid of technology.'],
         ['I’m currently seeking out opportunities to put my skills to use towards any challenge.'],
         ['When I’m not coding or tinkering, I am a sophomore at UC Santa Cruz studying Computer Science and Engineering.'],
         ['Check out my Resume and my About page to learn more about me and what I do']
        ],
        animationStarted: false,
        lineFinished: false,
        currentLine: 1,
        // boxStyle: 'boxFadeInBefore',
        isDesktop: false,
    }
    this.TerminalAnimation = this.TerminalAnimation.bind(this);
    this.animationHandler = this.animationHandler.bind(this);
    this.SizeUpdate = this.SizeUpdate.bind(this);
  }
  // TODO: Fix body tag on every page

  componentDidMount() {
    this.SizeUpdate();
    window.addEventListener("resize", this.SizeUpdate);
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    window.removeEventListener("resize", this.SizeUpdate);
    this.setState = (state,callback)=>{
        return;
    };
  }

  animationHandler(){
    this.setState({lineFinished: true})
    const { lines, currentLine} = this.state;

    if(currentLine === 1){
      this.setState({
        Items: [...this.state.Items,<TerminalItem
        key={currentLine}
        prefix={'>'}
        dataText={lines[currentLine - 1]}
        animationHandler={this.animationHandler}
        firstLine={true}
        typeSpeed={50}
        deleteSpeed={30}
        /> ]
    })
    this.setState({currentLine: currentLine + 1});

    } else if(currentLine < lines.length){
        this.setState({
            Items: [...this.state.Items,<TerminalItem
            key={currentLine}
            prefix={'>'}
            dataText={lines[currentLine - 1]}
            animationHandler={this.animationHandler}
            /> ]
        })
        this.setState({currentLine: currentLine + 1});
    } else if(currentLine === lines.length){
      this.setState({
        Items: [...this.state.Items,<TerminalItem
        key={currentLine}
        prefix={'>'}
        dataText={lines[currentLine - 1]}
        animationHandler={this.animationHandler}
        lastLine={true}
        /> ]
    })
    this.setState({currentLine: currentLine + 1})
    }
}
  TerminalAnimation(){
    const animationStarted = this.state.animationStarted;
    if(!animationStarted){
        this.setState({animationStarted: true})
        this.animationHandler();
    }
  }


  SizeUpdate() {
    this.setState({ isDesktop: window.innerWidth > 600 });
  }



  render(){
    const isDesktop = this.state.isDesktop;
    const img1Style = {
      width: '100%',
      height: '80vh',
      position: 'relative',
      // backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: isDesktop ? "url('/WillHordIBM.jpg')" : "url('/WillHordIBMMobile.jpg')"
    }
    return(
      <>
          <TopMenu/>
          <SolarSystem/>
          <div className='whoAmI'>
            <Waypoint onEnter={this.TerminalAnimation}/>
            <ul>
              {this.state.Items}
            </ul>
          </div>
          <div style={img1Style}/>
          <div className='projects'>
            <h4>Recent Projects</h4>
            <div className='boxContainer'>
                    <Box title='Discord Bot' summary='Summary' path='/' fadeIn={1400}/>
                    <Box title='iMessage Bot' summary='Summary2' path='/' fadeIn={1600}/>
                    <Box title='MAT2CSV' summary='Summary3' path='/' fadeIn={1900}/>
            </div>
          </div>
          <div className='img2'></div>
          <BottomBar/>
      </>
    )
  }
}



export default Homepage;
