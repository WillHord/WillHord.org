import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './Box.css'

class Box extends React.Component{
    constructor(props){
        super(props)
        this.title = props.title
        this.summary = props.summary
        this.path = props.path
        this.fadeIn = props.fadeIn

        this.state = {
            hovered: false,
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(){
        this.setState({hovered: true})
    }

    handleMouseLeave(){
        this.setState({hovered: false})
    }


    render(){
        const hovered = this.state.hovered;

        const linkForProject = {
            textDecoration: 'none',
            color: 'black'
        }
        
        const boxHover = {
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            display: 'inline-block',
            marginRight: '3%',
        }

        return(
            <>
            <Fade bottom duration={this.fadeIn} >
                <div style={boxHover} >
                <div className='box' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={boxHover}>
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
                </div>
            </Fade>
            </>
        )
    }
}

export default Box;