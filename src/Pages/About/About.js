import React from 'react';
import { Redirect } from 'react-router';


import TopMenu from '../../components/topMenu/Menu'
import BottomMenu from '../../components/BottomMenu/BottomMenu'

import './About.css'

class About extends React.Component{

    constructor(props){
        super (props);
        this.state = {
            isDesktop: false,
            redirectResume: false,
            redirectProjects: false,

        }
        this.SizeUpdate = this.SizeUpdate.bind(this);
    }
    componentDidMount() {
        this.SizeUpdate();
        window.addEventListener("resize", this.SizeUpdate);
        document.getElementsByTagName('body')[0].className = 'AboutBody';
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.SizeUpdate);
        document.getElementsByTagName('body')[0].className = '';
    }

    SizeUpdate(){
        this.setState({ isDesktop: window.innerWidth > 725 });
    }

    render(){
        const {isDesktop, redirectResume, redirectProjects} = this.state;

        if(redirectResume){
            return <Redirect push to="/Resume" />;
        }

        if(redirectProjects){
            return <Redirect push to="/Projects"/>;
        }

        const FactsAboutMeText = `When I'm not in school or working on a project I enjoy exploring the outdoors through hiking and camping, hanging out with friends,
        and playing games with them. I have also recently taken up taming a chipmunk in my backyard to pass the time during the pandemic.`

        let figure1;
        if(isDesktop){
            figure1 =
            <>
                <figcaption id='FactsAboutMeCaption' >
                    <h4>More About Me</h4>
                    <p style={{maxWidth:'700px'}}>{FactsAboutMeText}</p>
                </figcaption>
                <div className='SidePicture'>
                    <img src='/WillHordAboutPic2-cropped.jpg' style={{width: '100%'}}/>
                </div>
            </>
        } else {
            figure1 =
            <>
            <div className='SidePicture'>
                <img src='/WillHordAboutPic2-cropped.jpg' style={{width: '100%'}}/>
            </div>
            <figcaption style={{marginTop:'15px'}}>
                <h4>More About Me</h4>
                <p style={{maxWidth:'600px'}}>{FactsAboutMeText}</p>
            </figcaption>
            </>
        }

        const TopPictureStyle ={
            backgroundImage: isDesktop ? 'url(/WillHordTractor.jpg)' : 'url(/WillHordTractorMobile.jpg)',
            backgroundPosition: isDesktop ? 'initial' : '50% 25%'
        }


        return (
            <>
                <TopMenu color='white' lead={true} backgroundColor={'#1a1a1a'} burgerColor={'black'}/>
                <div className='AboutTopPicture' style={TopPictureStyle}>
                </div>
                <section id='FunFactsAboutMe'>
                    <div className='aboutInnerContent'>
                            <figure id='FactsAboutMeFigure'>
                                <div className='SidePicture' style={{marginLeft: isDesktop ? '0' : 'auto', marginRight: isDesktop ? '10%' : 'auto'}}>
                                    <img src='/WillHordLaidBack.JPG' style={{width:'100%'}}/>
                                </div>
                                <figcaption style={{ marginTop: isDesktop ? '0':'10%'}}>
                                    <h4>Oh hey there...</h4>
                                    <p style={{maxWidth:'700px'}}>
                                        I'm Will, a coder, a programmer, a developer. Whatever you want to call it I love making anything from
                                        AI to solve humanity's problems to a simple game to help people pass the time. I am currently a sophomore at UC
                                        Santa Cruz studying Computer Science and Computer Engineering.
                                    </p>
                                </figcaption>
                            </figure>
                    </div>
                </section>

                <section id='AboutMe'>
                    <div className='aboutInnerContent'>
                        <figure id='AboutMeFigure'>
                            {figure1}
                        </figure>
                    </div>
                </section>
                <section id='MoreAboutMe'>
                    <div className='aboutInnerContent'>
                        <div className='aboutCenteredContent'>
                            <h2>Find out more about what I've done</h2>
                                <p style={{maxWidth:'400px', margin:'0 auto'}}>Look at the projects I have made and look at my resume
                                    to get a better understanding of what I can do. </p>
                            <div id='aboutButtonDiv' style={{marginTop:'15px'}}>
                                <button className='MoreAboutMeButton'
                                style={{marginRight:'30px'}}
                                onClick={() => {this.setState({redirectResume: true})}}
                                >Resume</button>
                                <button className='MoreAboutMeButton'
                                onClick={() => {this.setState({redirectProjects: true})}}
                                >Projects</button>
                            </div>

                        </div>
                    </div>
                </section>
                <BottomMenu/>
            </>
        )
    }
}

export default About;