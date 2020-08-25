import React from 'react';
import { Waypoint } from 'react-waypoint';
import { Redirect } from 'react-router';

import './Homepage.css'

import TopMenu from '../../components/topMenu/Menu'
import SolarSystem from '../../components/SolarSystem/SolarSystem'
import BottomBar from '../../components/BottomMenu/BottomMenu'
import Box from '../../components/ProjectBoxes/Box'
import TerminalItem from '../../components/TerminalEffect/TerminalItem'


// import './planning.css'

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
        defaultTypeSpeed: 10,
        lineBuffer: 200,
        redirectProjects: false,
    }
    this.TerminalAnimation = this.TerminalAnimation.bind(this);
    this.animationHandler = this.animationHandler.bind(this);
    this.SizeUpdate = this.SizeUpdate.bind(this);
  }
  // TODO: Fix body tag on every page

  componentDidMount() {
    this.SizeUpdate();
    window.addEventListener("resize", this.SizeUpdate);
    document.getElementsByTagName('body')[0].className = 'HomepageBody';
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    window.removeEventListener("resize", this.SizeUpdate);
    document.getElementsByTagName('body')[0].className = '';
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
        lineBuffer={this.state.lineBuffer}
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
            typeSpeed={this.state.defaultTypeSpeed}
            lineBuffer={this.state.lineBuffer}
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
        typeSpeed={this.state.defaultTypeSpeed}
        lastLine={true}
        lineBuffer={this.state.lineBuffer}
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
      width: isDesktop ? '90%': '100%',
      height: '80vh',
      position: 'relative',
      margin: '0 auto',
      // backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: isDesktop ? "url('/WillHordIBM.jpg')" : "url('/WillHordIBMMobile.jpg')"
    }

    const img2Style = {
      width: isDesktop ? '90%': '100%',
      height: '90vh',
      margin: '0 auto',
      position: 'relative',
      // backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: isDesktop ? "url('/WillHordUCSantaCruz.jpg')" : "url('/WillHordUCSantaCruzMobile.jpg')"
    }

    if(this.state.redirectProjects){
      return <Redirect push to="/Projects"/>;
    }

    let projectBoxes;
    let img1;
    let img2;
    if(isDesktop){
      projectBoxes =
      <>
        <Box title='WillHord.org' summary='Summary' path='/Projects' fadeIn={1400}/>
        <Box title='Discord Bot' summary='Summary' path='/Projects' fadeIn={1500}/>
        <Box title='iMessage Bot' summary='Summary2' path='/Projects' fadeIn={1600} endBox={true}/>
      </>;
      img1 =<>
      <section id='img1Container'>
            <div style={img1Style}/>
      </section>
      </>;
      img2 =<>
      <div id='img2Container'>
        <div style={img2Style}/>
      </div>
      </>;

    } else{
      projectBoxes =
      <>
        <Box title='WillHord.org' summary='Summary' path='/Projects' fadeIn={1400}/>
        <Box title='Discord Bot' summary='Summary' path='/Projects' fadeIn={1500}/>
      </>;
      img1 = <div style={img1Style}/>;

      img2 = <div style={img2Style}/>;

    }


    return(
      <>
          <TopMenu/>
          <SolarSystem/>
          <section id='whoAmI'>
            {/* <h4 style={{color:'white'}}>Loading WhoAmI.exe</h4> */}
            <div id='whoAmIInnerContent'>


            <div className='HomepageTerminal'>
              <div className='TerminalTop'>
                <div className='closeWindowIcon'/>
                <div className='minimizeWindowIcon'/>
                <div className='expandWindowIcon'/>

              </div>
              <ul>
                {this.state.Items}
              </ul>
            </div>

            {/* <div id='WhoAmISidePicture'/> */}

            </div>
            <Waypoint onEnter={this.TerminalAnimation}/>

          </section>

          {img1}
          {/* <section id='img1Container'>
            <div style={img1Style}/>
          </section> */}



          <section className='projects'>
            <div className='innerHomepageContent'>
              <h4>Recent Projects</h4>
              <div className='boxContainer'>
                {projectBoxes}
              </div>
              <button className='homepageButton'
              onClick={() => {this.setState({redirectProjects: true})}}
              >More Projects</button>
            </div>

          </section>
          {img2}
          {/* <div id='img2Container'>
            <div style={img2Style}></div>
          </div> */}
          <BottomBar/>
      </>
    )
  }
}



export default Homepage;
