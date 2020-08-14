import React from 'react';
import Fade from 'react-reveal/Fade'

import TopMenu from '../../components/topMenu/Menu'
import BottomMenu from '../../components/BottomMenu/BottomMenu'


import './Resume.css'
import './ResumePlanning.css'

class Resume extends React.Component{
    componentDidMount() {
        document.getElementsByTagName('body')[0].className = 'ResumeBody';
    }
    
    componentWillUnmount() {
        document.getElementsByTagName('body')[0].className = '';
    }
    render(){
        return (
            <>
                <TopMenu color='white' lead={true} shadow={'2px 2px #000'}/>
                <div className='TopPicture'> 
                {/* TODO: Fix Image compatibility
                https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f */}

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
                        <div className='EducationBody'>
    
                        </div>
                    </div>
                </div>

                {/* <div className='Education'>
                    <div className='innerContent'>
                        <div className='ResumeTitle'>
                            <h5>Resume</h5>
                            This should be a different font than the rest
                        </div>
                        <div className="SectionTitle">
                            <h4>Education</h4>
                        </div>
                            
                        <hr className='TitleDivider'/>
                        <div className='EducationBody'>

                        </div>
                    </div>

                </div> */}
                {/* <div className='WorkExperience'>
                    <div className='innerContent'>
                    <div className='leftSide'>
                        <h1>Work Experience</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum aliquam neque quis consectetur. Nullam pharetra tempor turpis vel posuere. Donec facilisis neque sed elit consectetur, sit amet aliquam lectus gravida. Nullam vestibulum a nisi vel egestas. Cras interdum sapien consectetur feugiat vehicula. Aenean et tellus dui. Donec blandit vel turpis pretium cursus. Quisque sem nunc, ultricies in sem eu, dignissim placerat lacus. Sed hendrerit vulputate hendrerit. Donec condimentum augue in tincidunt ornare. Nullam non purus mattis, finibus tellus vitae, faucibus orci. Proin massa dui, hendrerit quis placerat at, aliquet sed lectus. Nullam enim lectus, vehicula tincidunt pulvinar quis, porttitor eget ex.</p>
                    </div>
                    <div className='verticalDivider'/>
                    <div className='rightSide'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum aliquam neque quis consectetur. Nullam pharetra tempor turpis vel posuere. Donec facilisis neque sed elit consectetur, sit amet aliquam lectus gravida. Nullam vestibulum a nisi vel egestas. Cras interdum sapien consectetur feugiat vehicula. Aenean et tellus dui. Donec blandit vel turpis pretium cursus. Quisque sem nunc, ultricies in sem eu, dignissim placerat lacus. Sed hendrerit vulputate hendrerit. Donec condimentum augue in tincidunt ornare. Nullam non purus mattis, finibus tellus vitae, faucibus orci. Proin massa dui, hendrerit quis placerat at, aliquet sed lectus. Nullam enim lectus, vehicula tincidunt pulvinar quis, porttitor eget ex.</p>
                    </div>
                    </div>
                </div>
                <div className='ProgrammingLanguages'>
                    <div className='innerContent'>
                    <div className='leftSide'>
                        <h1>Programming Languages</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum aliquam neque quis consectetur. Nullam pharetra tempor turpis vel posuere. Donec facilisis neque sed elit consectetur, sit amet aliquam lectus gravida. Nullam vestibulum a nisi vel egestas. Cras interdum sapien consectetur feugiat vehicula. Aenean et tellus dui. Donec blandit vel turpis pretium cursus. Quisque sem nunc, ultricies in sem eu, dignissim placerat lacus. Sed hendrerit vulputate hendrerit. Donec condimentum augue in tincidunt ornare. Nullam non purus mattis, finibus tellus vitae, faucibus orci. Proin massa dui, hendrerit quis placerat at, aliquet sed lectus. Nullam enim lectus, vehicula tincidunt pulvinar quis, porttitor eget ex.</p>
                    </div>
                    <div className='verticalDivider'/>
                    <div className='rightSide'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum aliquam neque quis consectetur. Nullam pharetra tempor turpis vel posuere. Donec facilisis neque sed elit consectetur, sit amet aliquam lectus gravida. Nullam vestibulum a nisi vel egestas. Cras interdum sapien consectetur feugiat vehicula. Aenean et tellus dui. Donec blandit vel turpis pretium cursus. Quisque sem nunc, ultricies in sem eu, dignissim placerat lacus. Sed hendrerit vulputate hendrerit. Donec condimentum augue in tincidunt ornare. Nullam non purus mattis, finibus tellus vitae, faucibus orci. Proin massa dui, hendrerit quis placerat at, aliquet sed lectus. Nullam enim lectus, vehicula tincidunt pulvinar quis, porttitor eget ex.</p>
                    </div>
                    </div>

                </div>
                <div className='TechnicalKnowledge'>
                    <div className='innerContent'>
                    <div className='leftSide'>
                        <h1>Technical Knowledge</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum aliquam neque quis consectetur. Nullam pharetra tempor turpis vel posuere. Donec facilisis neque sed elit consectetur, sit amet aliquam lectus gravida. Nullam vestibulum a nisi vel egestas. Cras interdum sapien consectetur feugiat vehicula. Aenean et tellus dui. Donec blandit vel turpis pretium cursus. Quisque sem nunc, ultricies in sem eu, dignissim placerat lacus. Sed hendrerit vulputate hendrerit. Donec condimentum augue in tincidunt ornare. Nullam non purus mattis, finibus tellus vitae, faucibus orci. Proin massa dui, hendrerit quis placerat at, aliquet sed lectus. Nullam enim lectus, vehicula tincidunt pulvinar quis, porttitor eget ex.</p>
                    </div>
                    <div className='verticalDivider'/>
                    <div className='rightSide'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum aliquam neque quis consectetur. Nullam pharetra tempor turpis vel posuere. Donec facilisis neque sed elit consectetur, sit amet aliquam lectus gravida. Nullam vestibulum a nisi vel egestas. Cras interdum sapien consectetur feugiat vehicula. Aenean et tellus dui. Donec blandit vel turpis pretium cursus. Quisque sem nunc, ultricies in sem eu, dignissim placerat lacus. Sed hendrerit vulputate hendrerit. Donec condimentum augue in tincidunt ornare. Nullam non purus mattis, finibus tellus vitae, faucibus orci. Proin massa dui, hendrerit quis placerat at, aliquet sed lectus. Nullam enim lectus, vehicula tincidunt pulvinar quis, porttitor eget ex.</p>
                    </div>
                    </div>

                </div> */}
                <BottomMenu/>

            </>
        )
    }
}

export default Resume;