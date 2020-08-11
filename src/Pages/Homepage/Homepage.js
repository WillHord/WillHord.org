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

class Homepage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        Items: [],
        lines: [
          ['Hello World','My name is Will Hord'],
         ['I am a developer, current Sophmore at UC Santa Cruz, and ']
        ],
        animationStarted: false,
        lineFinished: false,
        currentLine: 1,
        boxStyle: 'boxFadeInBefore'
    }
    this.TerminalAnimation = this.TerminalAnimation.bind(this);
    this.animationHandler = this.animationHandler.bind(this);
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

  // ProjectBoxAnimation(){
  //   this.setState({boxStyle: 'boxFadeIn'})
  //   console.log()
  // }

  render(){
    return(
      <>
          <TopMenu/>
          {/* TODO: Add futuristic text ontop of solar system */}
          <SolarSystem/>
          <div className='whoAmI'>
            <Waypoint onEnter={this.TerminalAnimation}/>
            <ul>
              {this.state.Items}
            </ul>
          </div>
          <div className='picOrGame'>Either a quick little platform game or picture of me</div>
          <div className='projects'>
            boxes with recent projects that link to them
            {/* TODO: Animate ProjectBoxes on view */}
            <div className='boxContainer'>
              <Waypoint onEnter={this.ProjectBoxAnimation}/>
                <Fade bottom>
                  <div>
                    <Box title='Test' summary='Summary' path='/'/>
                    <Box title='Test2' summary='Summary2' path='/'/>
                    <Box title='Test3' summary='Summary3' path='/'/>
                  </div>
                </Fade>
            </div>
          </div>
          <div className='clickerGame'>Global Clicker Game</div>
          <BottomBar/>
      </>
    )
  }
}



export default Homepage;
