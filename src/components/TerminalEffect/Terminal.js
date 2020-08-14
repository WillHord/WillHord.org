import React from 'react';

import { Waypoint } from 'react-waypoint';


import TerminalItem from './TerminalItem'

import './Terminal.css'
// import { useState } from 'react';

class Terminal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Items: [],
            lines: [['Hello World','My name is Will Hord'], ['I am a programmer']],
            animationStarted: false,
            lineFinished: false,
            currentLine: 1,
        }
        this.TerminalAnimation = this.TerminalAnimation.bind(this);
        this.animationHandler = this.animationHandler.bind(this);
    }
    
    animationHandler(){
        console.log("Running animationHandler")
        this.setState({lineFinished: true})

        const {Items, lines, currentLine} = this.state;
        console.log("-_-_-_-_-_")
        console.log(currentLine)
        console.log(lines.length)
        console.log("-_-_-_-_-_")
        if(currentLine <= lines.length){
            console.log("inside if statement")
            this.setState({
                Items: [...this.state.Items,<TerminalItem
                key={currentLine}
                prefix={'>'}
                dataText={lines[currentLine - 1]}
                animationHandler={this.animationHandler}
                // addAnimationEndedListener={this.addAnimationEndedListener}
                /> ]
            })
            this.setState({currentLine: currentLine + 1});
        }
    }

    TerminalAnimation(){
        console.log("TerminalAnimation Started");
        // const Items = this.state.Items;
        const animationStarted = this.state.animationStarted;
        if(!animationStarted){
            this.setState({animationStarted: true})
            this.animationHandler();
        }

    }

    render() {
      return (
          <>
            <div style={{height:'200vh',width:'100%'}} />

            <Waypoint onEnter={this.TerminalAnimation}/>
            <div>
                test
                {this.state.Items}
            </div>

        </>
      );

    }
  }


  export default Terminal;