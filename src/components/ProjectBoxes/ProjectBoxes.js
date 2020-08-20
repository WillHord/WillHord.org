import React from 'react';

import './ProjectBoxes.css';

import Box from './Box'


class ProjectBoxes extends React.Component{
    render(){
        return(
            <div className='boxContainer'>
                <Box title='Test' summary='Summary' path='/'/>
                <Box title='Test2' summary='Summary2' path='/'/>
                <Box title='Test3' summary='Summary3' path='/'/>
            </div>
        )
    }
}

export default ProjectBoxes;