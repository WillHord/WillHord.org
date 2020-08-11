import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Item from "./Item"
import Lead from "./Lead"

import "./Menu.css"

class TopMenu extends Component{
    constructor(props){
        super (props)
        this.state = {
            menu_class: '',
        }
    }
    setToggleTopMenuClass = () => {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled',
            })
        } else {
            this.setState({
                menu_class: '',
            })
        }
    }
    render = () => {
        let top_menu_class = `top-menu ${this.state.menu_class}`
        return (
            <div>
                <div className={top_menu_class} >
                    <Lead text="Will Hord" />
                    {/* <div className='left'>
                    <Item text='Left1'/>
                    <Item text='Left2'/>
                    </div> */}
                    <div className='right'>
                        <Item text='Home' path='/test' />
                        <Item text='Resume' path='/' />
                        <Item text='Projects' path= '/'/>
                        <Item text='About' path='/'/>
                        <Item text='Contact' path='/'/>
                    </div>
                    <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
                    <div className='clear-fix' />
                </div>
            </div>
        )
    }
}

export default TopMenu;