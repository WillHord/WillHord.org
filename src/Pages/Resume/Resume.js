import React from 'react';
import Fade from 'react-reveal/Fade'

import TopMenu from '../../components/topMenu/Menu'
import BottomMenu from '../../components/BottomMenu/BottomMenu'


import './Resume.css'
import './ResumePlanning.css'

class Resume extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            isDesktop: false,
        }
        this.openResume = this.openResume.bind(this);
        this.openPaper = this.openPaper.bind(this);
        this.SizeUpdate = this.SizeUpdate.bind(this);
    }
    componentDidMount() {
        this.SizeUpdate();
        window.addEventListener("resize", this.SizeUpdate);
        document.getElementsByTagName('body')[0].className = 'ResumeBody';
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.SizeUpdate);
        document.getElementsByTagName('body')[0].className = '';
    }

    openResume(){
        window.open("/WillHordResume.pdf");
    }

    openPaper(){
        window.open("/SPIE_2019_paper.pdf");
    }

    
    SizeUpdate() {
        this.setState({ isDesktop: window.innerWidth > 725 });
    }

    render(){
        const isDesktop = this.state.isDesktop;

        const sidewaysScroll = {
            overflowX: 'scroll',
            paddingBottom: '10px',
        }

        const buttonRightStyle = {
            float: isDesktop ? 'right' : 'none',
            textAlign: isDesktop ? 'inherit' : 'center'
        }
        return (
            <>
                <TopMenu color='white' lead={true} backgroundColor={'#282E34'} burgerColor={'black'}/>
                <div className='TopPicture'> 

                </div>
                
                <div className='outerContent'>
                    <div className='innerContent'>
                        <div className='ResumeTitle'>
                                <h5>Resume</h5>
                                {/* This should be a different font than the rest */}
                        </div>
                        <div className="SectionTitle">
                            <h5>Education</h5>
                        </div>
                        <hr className='TitleDivider'/>
                        <div className='EducationSection'>
                            <a target='_blank' href='http://UCSC.edu'>
                                <img className='LargeIcon' src={'/UCSantaCruzLogo.png'}/>
                            </a>
                            <b className='wrap'>University Of California Santa Cruz</b>
                            <span className='alignRight'>2019-Current</span>
                            <br/>
                            <b className='wrap'>Computer Science B.S. & Computer Engineering B.S.</b>
                            <span className='alignRight'>Santa Cruz, CA</span>
                            <br/>
                            <br/>
                            <span>Relevant Coursework:</span>
                            <br/>
                            <br/>
                            <ul className='Coursework'>
                                <li>CSE 30: Programming Abstractions: Python</li>
                                <li>CSE 12: Computer Systems and Assembly Language</li>
                                <li>CSE 13E: Embedded Systems and C Programming</li>
                                <li>CSE 16: Applied Discrete Mathematics</li>
                            </ul>
                            <br/>
                            <br/>
                        </div>
                        <div className='EducationSection'>
                            <a target='_blank' href='https://www.dfsd.org/hs'>
                                <img className='LargeIcon' src={'/DobbsFerryHighSchoolLogo.png'}/>
                            </a>
                            <b>Dobbs Ferry High School</b>
                            <span className='alignRight'>2015-2019</span>
                            <br/>
                            <b>International Baccalaureate Diploma </b>
                            <span className='alignRight'>Santa Cruz, CA</span>
                            <br/>
                            <br/>
                            <br/>
                            <p>
                                Recieved my high school IB diploma in 2019.
                            </p>
                            <br/>
                            <br/>
                        </div>

                        <div className="SectionTitle">
                            <h5>Work Experience</h5>
                        </div>
                        <hr className='TitleDivider'/>
                        <div className='WorkSection'>
                            <a target='_blank' href='http://www.research.ibm.com/labs/watson/'>
                                <img className='LargeIcon' src={'/IBMLogo.png'}/>
                                {/* TODO: FIX IBM Logo */}
                            </a>
                            <b>IBM Thomas J. Watson Research Center</b>
                            <span className='alignRight'>2018-2019</span>
                            <br/>
                            <b>Machine Learning Research Intern </b>
                            <span className='alignRight'>Yorktown Heights, NY</span>
                            <br/>
                            <br/>
                            <br/>
                            <p>
                            Conducted two independent Artificial Intelligence research projects resulting in authoring a scientific 
                            research paper presented at the 
                            <a className='inTextLink'
                            href='https://www.spiedigitallibrary.org/conference-proceedings-of-spie/10953/109532A/Predicting-conversion-to-psychosis-in-clinical-high-risk-patients-using/10.1117/12.2525341.short?SSO=1'> SPIE medical imaging conference </a>
                             - February 2019. The first project consisted of using 
                            python and machine learning to detect schizophrenia in fMRI data from patients. The other project I worked on used python
                            and MATLAB to determine which areas of the brain cocaine addictions affect.

                            </p>
                            <div style={buttonRightStyle}>
                                <button className='PaperButton' onClick={this.openPaper}> Go To My Paper</button>
                            </div>
                            <br/>
                            <br/>
                        </div>
                        <div className='WorkSection'>
                            <a target='_blank' href='https://www.pelhamschools.org/'>
                                <img className='LargeIcon' src={'/PelhamScoolsLogo.png'}/>
                                {/* TODO: FIX Pelham Logo */}
                            </a>
                            <b>Pelham School District</b>
                            <span className='alignRight'>2019</span>
                            <br/>
                            <b>Technology Office Intern </b>
                            <span className='alignRight'>Pelham, NY</span>
                            <br/>
                            <br/>
                            <br/>
                            <p>
                                Interned as an assistant to the tech office and aided in fixing laptops, printers, and network issues.
                                I also helped with their district-wide STEM virtual conference. I got hands on experience with fixing all types of technological
                                issues and got to experience what its like to work in an IT department.
                            </p>
                            <br/>
                            <br/>
                        </div>

                        <div className="SectionTitle">
                            <h5>Programming Experience</h5>
                        </div>
                        <hr className='TitleDivider'/>
                        <div className='TechnicalSection'>
                            <b><h5>Proficient In:</h5></b>
                            <br/>
                            <span className='indent'>Python</span>
                            <span className='alignRight'>4 Years of Experience</span>
                            <br/>
                            <br/>
                            <span className='indent'>HTML</span>
                            <span className='alignRight'>4 Years of Experience</span>
                            <br/>
                            <br/>
                            <span className='indent'>CSS</span>
                            <span className='alignRight'>4 Years of Experience</span>
                            


                            <br/>
                            <br/>
                            <br/>
                            <b><h5>Familiar With:</h5></b>
                            <br/>
                            <span className='indent'>C</span>
                            <span className='alignRight'>2 Years of Experience</span>
                            <br/>
                            <br/>
                            <span className='indent'>JavaScript</span>
                            <span className='alignRight'>2 Years of Experience</span>
                            <br/>
                            <br/>
                            <span className='indent'>C++</span>
                            <span className='alignRight'>1 Year of Experience</span>
                            <br/>
                            <br/>
                            <span className='indent'>React js</span>
                            <span className='alignRight'>1 Year of Experience</span>
                            <br/>
                            <br/>
                            <br/>


                            <b><h5>Exposure To:</h5></b>
                            <div className='alignCenter' style={sidewaysScroll}>
                                <span className='sideBySide' style={{marginLeft:'0'}}>R</span>
                                <span className='sideBySide'>C#</span>
                                <span className='sideBySide'>PHP</span>
                                <span className='sideBySide'>SQL</span>
                                <span className='sideBySide'>MATLAB</span>
                                <span className='sideBySide'>Swift</span>
                                <span className='sideBySide' style={{paddingRight: '0'}}>Java</span>
                            </div>
                            <br/>
                            <hr className='TitleDivider'/>
                            <br/>
                            
                            <b><h5>Other Technical Skills:</h5></b>
                            <ul>
                                <li>Apache HTTP Server Management</li>
                                <li>Linux Server Management</li>
                                <li>Windows, Linux, and MacOS</li>
                                <li>Machine Learning Frameworks: Tensorflow and Keras</li>
                                <li>Git</li>
                                <li>LaTeX</li>
                            </ul>
                            <br/>
                            {/* <br/> */}
                        </div>
                        <hr className='TitleDivider'/>
                        <div className='alignCenter' style={{paddingBottom: '30px'}}>
                            <button className='FullResumeButton' onClick={this.openResume}>Full Resume</button>
                        </div>
                    </div>
                </div>
                <BottomMenu/>

            </>
        )
    }
}

export default Resume;