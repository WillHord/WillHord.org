import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Item from "./Item"
import Lead from "./Lead"

import "./Menu.css"

class TopMenu extends Component{
    static defaultProps = {
        color: 'white',
        lead: false,
        shadow: 'none',
    }
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

        const {lead, color, shadow} = this.props;
        let isLead;
        if(lead){
            isLead = <Lead text="Will Hord" color={color} />
        } else {
            isLead = '';
        }
        return (
            <div>
                <div className={top_menu_class} >
                    {isLead}
                    {/* <Lead text="Will Hord" /> */}
                    {/* <div className='left'>
                    <Item text='Left1'/>
                    <Item text='Left2'/>
                    </div> */}
                    <div className='right'>
                        <Item text='Home' path='/' color={color} shadow={shadow}/>
                        <Item text='Resume' path='/Resume' color={color} shadow={shadow}/>
                        <Item text='Projects' path= '/Projects' color={color} shadow={shadow}/>
                        <Item text='About' path='/About' color={color} shadow={shadow}/>
                        <Item text='Contact' path='/Contact' color={color} shadow={shadow}/>
                    </div>
                    {/* TODO: Fix Compatibility  */}
                    <FontAwesomeIcon icon={faBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
                    <div className='clear-fix' />
                </div>
            </div>
        )
    }
}

export default TopMenu;