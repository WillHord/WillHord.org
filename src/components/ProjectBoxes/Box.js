import React from 'react';
import { Link } from 'react-router-dom';

import './Box.css'

class Box extends React.Component{
    constructor(props){
        super(props)
        this.title = props.title
        this.summary = props.summary
        this.path = props.path
    }
    render(){
        const linkForProject = {
            textDecoration: 'none',
            color: 'black'
        }
        return(
            <>
                <div className='box'>
                    <div className='Title'>{this.title}</div>
                    <hr className='dividerTop' />
                    <div className='Summary'>{this.summary}</div>
                    <div className='LinkDiv'>
                        <hr className='dividerBottom'/>
                        
                        <Link style={linkForProject} to={this.path}>
                            <div className='linkToProject'>
                                To Project Page &rarr;
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Box;