import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'


import BottomMenuItem from './BottomMenuItem'

import './BottomMenu.css'

class BottomMenu extends React.Component{
    render(){
        const loginLink = {
            color: 'white',
            textDecoration: 'none',
        }
        return(
            <>
            {/* TODO: Fix size compatibility */}
            <div className='BottomMenu'>
                <div className='Links'>
                    <ul>
                        <BottomMenuItem text='Home' path='/' />
                        <BottomMenuItem text='Resume' path='/' />
                        <BottomMenuItem text='Projects' path= '/test'/>
                        <BottomMenuItem text='About' path='/'/>
                        <BottomMenuItem text='Contact' path='/Contact'/>
                    </ul>
                </div>
                <div className='social-icons'>
                    <ul>
                        <a href='/' style={loginLink}><FontAwesomeIcon icon={faFacebook} size='2x'/></a>
                        <a href='/' style={loginLink}><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
                        <a href='/' style={loginLink}><FontAwesomeIcon icon={faGithub} size='2x'/></a>
                        <a href='/' style={loginLink}><FontAwesomeIcon icon={faYoutube} size='2x'/></a>
                        <a href='/' style={loginLink}><FontAwesomeIcon icon={faEnvelope} size='2x'/></a>
                    </ul>
                </div>
                <div className='login'>
                    <Link className='loginLink' to='/test'>Login</Link>
                </div>
                <div className='license'>
                    {/* TODO: Fix license position */}
                    <p>Website Created and Hosted by Will Hord MIT License 2020</p>
                </div>
            </div>
            </>
        )
    }
}

export default BottomMenu;